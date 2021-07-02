/*! For license information please see 48764d63.c0ecc15c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return g}));var r=n(1),o=n(9),a=(n(0),n(343)),i=n(353),c=n(349),l=n(342),u={last_modified_on:"2021-07-02",$schema:"/.meta/.schemas/guides.json",title:"Debugging",description:"How to debug your application",series_position:5,author_github:"https://github.com/evoxmusic",tags:["type: guide","technology: qovery"]},s={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Debugging",description:"How to debug your application",permalink:"/guides/getting-started/debugging",readingTime:"3 min read",seriesPosition:5,source:"@site/guides/getting-started/debugging.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Debugging",truncated:!1,prevItem:{title:"Environment variables",permalink:"/guides/getting-started/managing-environment-variables"},nextItem:{title:"Create a blazingly fast REST API in Rust (Part 1/2)",permalink:"/guides/tutorial/create-a-blazingly-fast-api-in-rust-part-1"}},p=[{value:"Check the status of your app",id:"check-the-status-of-your-app",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Deployment Logs",id:"deployment-logs",children:[]},{value:"Monitoring",id:"monitoring",children:[]},{value:"Alerting",id:"alerting",children:[]}],b={rightToc:p};function g(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Your application is running, but something goes wrong? In this guide, you'll learn how to debug your application and solve your problem to\nmake it running smoothly."),Object(a.b)(c.a,{mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have already deployed an application with Qovery"))),Object(a.b)("p",null,"Your application is running, but for some reason, it is not working as expected. Here are a few tips to find out what's going on."),Object(a.b)("h2",{id:"check-the-status-of-your-app"},"Check the status of your app"),Object(a.b)("p",null,"To find out what is the status of your application, you can follow these steps:"),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Navigate to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console-beta.qovery.com"}),"Console"))),Object(a.b)("li",null,Object(a.b)("p",null,"Choose your project and environment")),Object(a.b)("li",null,Object(a.b)("p",null,"In environment overview, you can see the status of the whole environment as well as statuses of individual applications:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/debugging/debugging-1.png",alt:"Debugging"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"As you can see in the screenshot, the environment is ",Object(a.b)("inlineCode",{parentName:"p"},"RUNNING"),". ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"twitter-backend")," and ",Object(a.b)("inlineCode",{parentName:"p"},"my-db")," application statuses are marked as green dots, which means they are up and running as well. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"On the other hand, the ",Object(a.b)("inlineCode",{parentName:"p"},"my-mysql")," database is marked with a grey dot, which means it was not deployed or is stopped.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If the service crashes, its status is marked with a red dot.")))))),Object(a.b)("h2",{id:"logs"},"Logs"),Object(a.b)("p",null,"If you need to see the log output of your application while it's running, follow these steps:"),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Navigate to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console-beta.qovery.com"}),"Console"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Choose your project, environment, and application.")),Object(a.b)("li",null,Object(a.b)("p",null,"In the application overview, click the ",Object(a.b)("inlineCode",{parentName:"p"},"Show Logs")," button"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/debugging/debugging-3.png",alt:"Debugging"})),Object(a.b)("p",null,"This will open a view of your application logs:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/debugging/debugging-4.png",alt:"Debugging"})),Object(a.b)("p",null,"You can use this information to find out what causes your application to behave incorrectly.")))),Object(a.b)("h2",{id:"deployment-logs"},"Deployment Logs"),Object(a.b)("p",null,"If your application fails to start, you can check what's the cause in its deployment logs:"),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Navigate to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console-beta.qovery.com"}),"Console"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Choose your project and environment.")),Object(a.b)("li",null,Object(a.b)("p",null,"In environment overview, click ",Object(a.b)("inlineCode",{parentName:"p"},"Show Logs")," button:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/debugging/debugging-7.png",alt:"Debugging"})),Object(a.b)("p",null,"This will open a view of your deployment logs:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/debugging/debugging-8.png",alt:"Debugging"})),Object(a.b)("p",null,"This view provides insight into the build and deployment process. If anything goes wrong, you can see all the required information to fix the problem here.")))),Object(a.b)("h2",{id:"monitoring"},"Monitoring"),Object(a.b)("p",null,"If you need more information about the resources consumed by your application, Qovery provides basic metrics about your CPU, memory and storage usage."),Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Navigate to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console-beta.qovery.com"}),"Console"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Choose your project, environment, and application.")),Object(a.b)("li",null,Object(a.b)("p",null,"In the main application view, you can see charts and an overview of your application resource consumption."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/debugging/debugging-6.png",alt:"Debugging"})))),Object(a.b)(l.a,{type:"warning",mdxType:"Alert"},"Historical metrics are coming soon!"),Object(a.b)("h2",{id:"alerting"},"Alerting"),Object(a.b)("p",null,"We highly recommend using tools like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.datadoghq.com"}),"Datadog"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://sentry.io/"}),"Sentry")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://newrelic.com/"}),"NewRelic")," to manage your alerting.\nQovery will provide easy integrations in the coming release. Check out our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"roadmap")),Object(a.b)("p",null,"Do you need any help? ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Reach us on Discord")))}g.isMDXComponent=!0},341:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},342:function(e,t,n){"use strict";n(346);var r=n(0),o=n.n(r),a=n(341),i=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),t)}},343:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,d=p["".concat(i,".").concat(g)]||p[g]||b[g]||a;return n?o.a.createElement(d,c({ref:t},u,{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},345:function(e,t,n){var r=n(25).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},346:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(350)}),n(75)("fill")},349:function(e,t,n){"use strict";n(345);var r=n(0),o=n.n(r),a=n(342);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},350:function(e,t,n){"use strict";var r=n(27),o=n(76),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,u=void 0===l?n:o(l,n);u>c;)t[c++]=e;return t}},352:function(e,t,n){"use strict";var r=n(354),o=n(52);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},353:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(341),n(352)),i=n.n(a);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),s=Object(r.useState)(null),p=s[0],b=s[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},354:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);