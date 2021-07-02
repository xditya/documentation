/*! For license information please see c536ba8c.8c113e0a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{295:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(343)),o=n(342),c=n(353),s=n(349),l={last_modified_on:"2021-07-02",title:"Redis",description:"How to set up and use a Redis database"},b={id:"using-qovery/configuration/database/redis",title:"Redis",description:"How to set up and use a Redis database",source:"@site/docs/using-qovery/configuration/database/redis.md",permalink:"/docs/using-qovery/configuration/database/redis",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/database/redis.md",sidebar:"docs",previous:{title:"MongoDB",permalink:"/docs/using-qovery/configuration/database/mongodb"},next:{title:"Environment Variable",permalink:"/docs/using-qovery/configuration/environment-variable"}},u=[{value:"Create a Redis database",id:"create-a-redis-database",children:[]},{value:"Configuration",id:"configuration",children:[{value:"General",id:"general",children:[]},{value:"Resources",id:"resources",children:[]}]},{value:"Credentials",id:"credentials",children:[]},{value:"Delete your Redis instance",id:"delete-your-redis-instance",children:[]}],d={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.a,{name:"documentation",mdxType:"Assumptions"},Object(i.b)("p",null,"You have created an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),".")),Object(i.b)("p",null,"Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams."),Object(i.b)(o.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Check out ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"this video guide")," to create and deploy your first database")),Object(i.b)("h2",{id:"create-a-redis-database"},"Create a Redis database"),Object(i.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Navigate to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://console-beta.qovery.com"}),"Console"))),Object(i.b)("li",null,Object(i.b)("p",null,"Select your project and environment")),Object(i.b)("li",null,Object(i.b)("p",null,"Click ",Object(i.b)("inlineCode",{parentName:"p"},"Add Database")," button"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/database/db-1.png",alt:"Database"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Select database type, name and version"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/database/redis-1.png",alt:"Database"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Deploy the database using ",Object(i.b)("inlineCode",{parentName:"p"},"Action")," deploy button"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/database/db-3.png",alt:"Database"}))))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("h3",{id:"general"},"General"),Object(i.b)("h4",{id:"modes"},"Modes"),Object(i.b)("p",null,"Databases can operate in two modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Managed"),Object(i.b)("li",{parentName:"ul"},"Container")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Managed")," databases are perfect for production - they are provided and managed by major cloud providers like AWS to make sure your production data is well managed."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Container")," databases are managed by Qovery as Docker containers with attached persistent storage. They are perfect for development and testing, as they are significantly cheaper than services provided by cloud providers."),Object(i.b)(o.a,{type:"warning",mdxType:"Alert"},"Managed databases are supported only in `Startup` plans, it's not available in the `Community` version."),Object(i.b)("h4",{id:"versions"},"Versions"),Object(i.b)("p",null,"Qovery supports the following Redis versions."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Supported"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")))),Object(i.b)("p",null,"You can adjust the version of your database in ",Object(i.b)("inlineCode",{parentName:"p"},"General")," section of database settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/database/redis-2.png",alt:"Database Version"})),Object(i.b)("h4",{id:"accessibility"},"Accessibility"),Object(i.b)("p",null,"To make your database secure, you may decide not to expose it publicly."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Public")," access will make your database accessible via the public network"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Private")," access will make your database accessible only by applications in your environment")),Object(i.b)("p",null,"You can configure the accessibility settings in ",Object(i.b)("inlineCode",{parentName:"p"},"General")," section of database settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/database/redis-2.png",alt:"Database Accessibility"})),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("h4",{id:"cpu"},"CPU"),Object(i.b)("p",null,"To tweak CPU configuration of your database, navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Resource")," section in database settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/database/db-4.png",alt:"Database CPU"})),Object(i.b)("h4",{id:"memory"},"Memory"),Object(i.b)("p",null,"To tweak RAM configuration of your database, navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Resource")," section in database settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/database/db-5.png",alt:"Database Memory"})),Object(i.b)("h4",{id:"storage"},"Storage"),Object(i.b)("p",null,"To tweak the disk space assigned to your database, navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Resource")," section in the database settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/database/db-7.png",alt:"Database Storage"})),Object(i.b)("h2",{id:"credentials"},"Credentials"),Object(i.b)("p",null,"To access your database in your application, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#database"}),"link it to your database"),".\nQovery will inject all environment variables and secrets you need to connect your app to your database.\nTo see all the secrets injected for your application, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#database-secrets"}),"database secrets section"),"."),Object(i.b)("h2",{id:"delete-your-redis-instance"},"Delete your Redis instance"),Object(i.b)(o.a,{type:"danger",mdxType:"Alert"},Object(i.b)("p",null,"Delete action drops the service and its data!")),Object(i.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Navigate to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://console-beta.qovery.com"}),"Console"))),Object(i.b)("li",null,Object(i.b)("p",null,"Select your environment and database")),Object(i.b)("li",null,Object(i.b)("p",null,"In database overview, click on ",Object(i.b)("inlineCode",{parentName:"p"},"Action")," remove button"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/database/redis-3.png",alt:"Database Remove"}))))))}p.isMDXComponent=!0},341:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},342:function(e,t,n){"use strict";n(346);var a=n(0),r=n.n(a),i=n(341),o=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,i=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||s))}),t)}},343:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},345:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},346:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(350)}),n(75)("fill")},349:function(e,t,n){"use strict";n(345);var a=n(0),r=n.n(a),i=n(342);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},350:function(e,t,n){"use strict";var a=n(27),r=n(76),i=n(26);e.exports=function(e){for(var t=a(this),n=i(t.length),o=arguments.length,c=r(o>1?arguments[1]:void 0,n),s=o>2?arguments[2]:void 0,l=void 0===s?n:r(s,n);l>c;)t[c++]=e;return t}},352:function(e,t,n){"use strict";var a=n(354),r=n(52);function i(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[i(t,e),"[",a,"]"].join(""):[i(t,e),"[",i(a,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return i(a,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(n(a,e,o.length))})),o.join("&")}return i(a,t)+"="+i(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},353:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(341),n(352)),o=n.n(i);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,i=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/qovery/documentation/issues/new?"+o.a.stringify(s),b=Object(a.useState)(null),u=b[0],d=b[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!i&&!u&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},354:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);