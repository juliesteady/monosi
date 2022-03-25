import json

from .base import SQLAlchemyExtractor, SourceConfiguration, SQLAlchemySourceDialect, SQLAlchemySource
from sqlalchemy.engine.url import make_url

class BigQuerySourceConfiguration(SourceConfiguration):
    @classmethod
    def validate(cls, configuration):
        raise NotImplementedError

    @classmethod
    def configuration_schema(cls):
        return {
            "type": "object",
            "properties": {
                "project": { "type": "string" },
                "dataset": { "type": "string" },
                "credentials_base64": { "type": "string" },
            },
        }
    
    def _connection_string_prefix(self):
        return "bigquery"

    def connection_string(self) -> str:
        configuration = json.loads(self.configuration)
        connection_string_prefix = self._connection_string_prefix()
        connection_string_base = '{project}/{dataset}'.format(
            project=configuration.get('project'),
            dataset=configuration.get('dataset'),
        )
        connection_string_params = '?credentials_base64={credentials_base64}'.format(
            credentials_base64=configuration.get('credentials_base64')
        )

        connection_string = '{connection_string_prefix}://{connection_string_base}{connection_string_params}'.format(
            connection_string_prefix=connection_string_prefix,
            connection_string_base=connection_string_base,
            connection_string_params=connection_string_params
        )

        return make_url(connection_string)

    @property
    def type(self):
        return "bigquery"

class BigQuerySourceDialect(SQLAlchemySourceDialect):
    @classmethod
    def _numeric_std(cls):
        return "STDDEV(CAST({} as double precision))"
    
    @classmethod
    def _text_int_rate(cls):
        return "SUM(CASE WHEN CAST({} AS varchar) ~ '^([-+]?[0-9]+)$' THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _text_number_rate(cls):
        return "SUM(CASE WHEN CAST({} AS varchar) ~ '^([-+]?[0-9]*[.]?[0-9]+([eE][-+]?[0-9]+)?)$' THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _text_uuid_rate(cls):
        return "SUM(CASE WHEN CAST({} AS varchar) ~ '^([0-9a-fA-F]{{8}}-[0-9a-fA-F]{{4}}-[0-9a-fA-F]{{4}}-[0-9a-fA-F]{{4}}-[0-9a-fA-F]{{12}})$' THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _text_all_spaces_rate(cls):
        return "SUM(CASE WHEN CAST({} AS varchar) ~ '^(\\\\s+)$' THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _text_null_keyword_rate(cls):
        return "SUM(CASE WHEN UPPER(CAST({} as varchar)) IN ('NULL', 'NONE', 'NIL', 'NOTHING') THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _zero_rate(cls): # TODO: ?
        return "SUM(CASE WHEN UPPER(CAST({} as varchar)) IN ('NULL', 'NONE', 'NIL', 'NOTHING') THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _negative_rate(cls):
        return "SUM(CASE WHEN {} < 0 THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _completeness(cls):
        return "COUNT({}) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def schema_tables_query(cls, database_name, schema_name):
        raise NotImplementedError

    @classmethod
    def table_metrics_query(cls, configuration, discovery_data):
        raise NotImplementedError


    @classmethod
    def schema_columns_query(cls, database_name, schema_name):
        return """
        SELECT lower(c.table_name) AS "NAME",
            lower(c.column_name) AS "COL_NAME",
            lower(c.data_type) AS "COL_TYPE",
            c.ordinal_position AS "COL_SORT_ORDER",
            lower(c.table_catalog) AS "DATABASE",
            lower(c.table_schema) AS "SCHEMA",
            CASE
                lower(t.table_type)
                WHEN 'view' THEN 'true'
                ELSE 'false'
            END "IS_VIEW"
        FROM INFORMATION_SCHEMA.COLUMNS AS c
            LEFT JOIN INFORMATION_SCHEMA.TABLES t ON c.TABLE_NAME = t.TABLE_NAME
            AND c.TABLE_SCHEMA = t.TABLE_SCHEMA
        WHERE LOWER(c.table_schema) = LOWER('{schema_name}')
            AND LOWER(c.table_catalog) = LOWER('{database_name}')
        """.format(database_name=database_name, schema_name=schema_name)

    @classmethod
    def query_access_logs_query(cls):
        raise NotImplementedError
        
    @classmethod
    def query_copy_logs_query(cls):
        raise NotImplementedError

class BigQuerySourceExtractor(SQLAlchemyExtractor):
    def discovery_query(self):
        return BigQuerySourceDialect.schema_columns_query(
            database_name=self.configuration.database(),
            schema_name=self.configuration.schema(),
        )

class BigQuerySource(SQLAlchemySource):
    def __init__(self, configuration: BigQuerySourceConfiguration):
        self.configuration = configuration
        self.dialect = BigQuerySourceDialect

    def extractor(self):
        return BigQuerySourceExtractor(self.configuration)

