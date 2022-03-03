"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[752],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),m=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(n),c=r,g=s["".concat(u,".").concat(c)]||s[c]||p[c]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(t,e,n){n(7294)},6396:function(t,e,n){n(7294),n(2389),n(9443);n(3616)},5692:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=(n(8215),n(6396),["components"]),o={id:"table-health",title:"Table Health Metrics",sidebar_label:"Metrics"},u=void 0,m={unversionedId:"user-guide/table-health",id:"user-guide/table-health",title:"Table Health Metrics",description:"The Table Health monitor tracks various metrics (as listed below) on each column for a specified table and evaluates the results. It\u2019s primary purpose is to ensure the data in the table specified is healthy and there are no anomalies.",source:"@site/docs/user-guide/table-health.md",sourceDirName:"user-guide",slug:"/user-guide/table-health",permalink:"/docs/user-guide/table-health",editUrl:"https://github.com/monosidev/monosi/documentation/blob/master/docs/user-guide/table-health.md",tags:[],version:"current",frontMatter:{id:"table-health",title:"Table Health Metrics",sidebar_label:"Metrics"},sidebar:"sidebarUserGuide",previous:{title:"Overview",permalink:"/docs/user-guide/monitors-overview"},next:{title:"Local Deployment (Docker)",permalink:"/docs/user-guide/local-deployment"}},d=[{value:"Supported Metrics",id:"supported-metrics",children:[],level:2},{value:"Anomaly Detection",id:"anomaly-detection",children:[],level:2}],p={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Table Health monitor tracks various metrics (as listed below) on each column for a specified table and evaluates the results. It\u2019s primary purpose is to ensure the data in the table specified is healthy and there are no anomalies."),(0,l.kt)("img",{src:"/img/monitors/table_health.png",alt:"Table health"}),(0,l.kt)("h2",{id:"supported-metrics"},"Supported Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metric"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Column Type"),(0,l.kt)("th",{parentName:"tr",align:null},"String Representation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Count"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows for the field in a table"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Count Distinct"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of distinct rows for the field in a table"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"count_distinct")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Null"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of NULL values for a field in a table"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum value of a field in a table"),(0,l.kt)("td",{parentName:"tr",align:null},"Numeric"),(0,l.kt)("td",{parentName:"tr",align:null},"max")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum value of a field in a table"),(0,l.kt)("td",{parentName:"tr",align:null},"Numeric"),(0,l.kt)("td",{parentName:"tr",align:null},"min")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mean"),(0,l.kt)("td",{parentName:"tr",align:null},"The mean value of a field in a table"),(0,l.kt)("td",{parentName:"tr",align:null},"Numeric"),(0,l.kt)("td",{parentName:"tr",align:null},"mean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Std Dev"),(0,l.kt)("td",{parentName:"tr",align:null},"The std dev value of a field in a table"),(0,l.kt)("td",{parentName:"tr",align:null},"Numeric"),(0,l.kt)("td",{parentName:"tr",align:null},"std_dev")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Is Zero"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of values that are zero of a field in a table"),(0,l.kt)("td",{parentName:"tr",align:null},"Numeric"),(0,l.kt)("td",{parentName:"tr",align:null},"zero_rate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Is Negative"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of values that are negative of a field in a table"),(0,l.kt)("td",{parentName:"tr",align:null},"Numeric"),(0,l.kt)("td",{parentName:"tr",align:null},"negative_rate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mean Length"),(0,l.kt)("td",{parentName:"tr",align:null},"The average length of the string"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"mean_length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max Length"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum length of the string"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"max_length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min Length"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum length of the string"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"min_length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Std Dev Length"),(0,l.kt)("td",{parentName:"tr",align:null},"The std dev length of the string"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"std_dev_length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Integer Text"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows for a field which represent an integer value"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"integer_rate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Float Text"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows for a field which represent a float value"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"float_rate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Whitespace Text"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows for a field which represent whitespace"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"whitespace_rate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Null/Empty Text"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows for a field that are null or empty values."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"null_rate")))),(0,l.kt)("h2",{id:"anomaly-detection"},"Anomaly Detection"),(0,l.kt)("p",null,"The current implementation to detect anomalies involves calculating a Z-Score over the data set. If the value is outside of 3 standard deviations, it is considered an anomaly."),(0,l.kt)("p",null,"If an anomaly is detected by a monitor, the returned output contains information about the table, column, value, and metric that is anomalous. If none is found, then no errors are reported."))}s.isMDXComponent=!0}}]);