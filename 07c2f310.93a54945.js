/*! For license information please see 07c2f310.93a54945.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),i=(n(0),n(344)),l=n(343),o={last_modified_on:"2021-06-26",title:"Environment Variable",description:"Learn how to configure Environment Variables on Qovery"},b={id:"using-qovery/configuration/environment-variable",title:"Environment Variable",description:"Learn how to configure Environment Variables on Qovery",source:"@site/docs/using-qovery/configuration/environment-variable.md",permalink:"/docs/using-qovery/configuration/environment-variable",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/environment-variable.md",sidebar:"docs",previous:{title:"Redis",permalink:"/docs/using-qovery/configuration/database/redis"},next:{title:"Secrets",permalink:"/docs/using-qovery/configuration/secret"}},c=[{value:"Create an Environment Variable",id:"create-an-environment-variable",children:[]},{value:"Delete an Environment Variable",id:"delete-an-environment-variable",children:[]},{value:"Update an Environment Variable",id:"update-an-environment-variable",children:[]},{value:"Levels",id:"levels",children:[]},{value:"Built-in variables",id:"built-in-variables",children:[]},{value:"Additional built-in variables",id:"additional-built-in-variables",children:[]},{value:"Override variable",id:"override-variable",children:[]},{value:"Alias",id:"alias",children:[]},{value:".env file (dot env file)",id:"env-file-dot-env-file",children:[{value:"View you application&#39;s environment variables",id:"view-you-applications-environment-variables",children:[]},{value:"Look at the contents of your .env file",id:"look-at-the-contents-of-your-env-file",children:[]},{value:"Add an environment variable to your .env file",id:"add-an-environment-variable-to-your-env-file",children:[]}]},{value:"Some rules",id:"some-rules",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"WORK IN PROGRESS - THIS DOCUMENTATION IS OUTDATED")),Object(i.b)(l.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Do you need to keep secure your environment variable? Use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/secret/"}),"Secret")," instead of ",Object(i.b)("em",{parentName:"p"},"Environment Variable"),".")),Object(i.b)("p",null,"Qovery makes ",Object(i.b)("strong",{parentName:"p"},"Environment Variables")," available to all services at runtime, as well as during builds and deploys."),Object(i.b)(l.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"Environment Variables are not directly connected to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment")," concept."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Environment Variables"),": represent variables you can store and retrieve in your applications."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Environments"),": represent environments with services (apps, databases, and other services)."))),Object(i.b)("h2",{id:"create-an-environment-variable"},"Create an Environment Variable"),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"delete-an-environment-variable"},"Delete an Environment Variable"),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"update-an-environment-variable"},"Update an Environment Variable"),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"levels"},"Levels"),Object(i.b)("p",null,"There are four levels of Environment Variables. Each type differs in scope - you can create variables bound to application, environment, or project."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Scope"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Level"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"BUILT_IN")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Automatically generated variables based on your configuration (e.g., requested databases) propagated to all projects, environments, and applications")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"PROJECT")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variables at the project level are shared across all environments and all applications of the project")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"ENVIRONMENT")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variables at the environment level are shared across all applications of the project in one, given environment")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"APPLICATION")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variables available for one application in one environment")))),Object(i.b)(l.a,{mdxType:"Alert"},Object(i.b)("p",null,"You can override variables - the highest level variable win (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"PROJECT")," variable can override ",Object(i.b)("inlineCode",{parentName:"p"},"BUILT_IN")," variable).")),Object(i.b)("h2",{id:"built-in-variables"},"Built-in variables"),Object(i.b)("p",null,"By default, every environment contains built-in variables:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"QOVERY_BRANCH_NAME")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"master"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Git branch name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"QOVERY_IS_PRODUCTION")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Flag that indicates production environment")))),Object(i.b)(l.a,{mdxType:"Alert"},Object(i.b)("p",null,"You can not delete ",Object(i.b)("inlineCode",{parentName:"p"},"BUILT_IN")," variables, but you can override them!")),Object(i.b)("h2",{id:"additional-built-in-variables"},"Additional built-in variables"),Object(i.b)("p",null,"For any added service (database, broker, storage), your application receives additional built-in variables. These can be used, for example, to connect\nto the database."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Naming Convention"),":"),Object(i.b)("p",null,"We use the following naming convention for additional built-in variables:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"QOVERY_<SERVICE_TYPE>_<NAME>_<SPEC>\n")),Object(i.b)("h2",{id:"override-variable"},"Override variable"),Object(i.b)("p",null,"As described in the levels' section, you can override existing variables. To do so, add a new Environment Variables with a higher level (e.g., add an ",Object(i.b)("inlineCode",{parentName:"p"},"APPLICATION")," level variable to override ",Object(i.b)("inlineCode",{parentName:"p"},"PROJECT")," variable for a given application)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"TODO screenshot override variable")),Object(i.b)("h2",{id:"alias"},"Alias"),Object(i.b)("p",null,"You can create an alias for the existing environment variable."),Object(i.b)("p",null,"Let's suppose that your application requires a ",Object(i.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," variable. Qovery provides your application with ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE_MY_POSTGRESQL_3498225_URL")," variable with a database password.\nInstead of copy-pasting its value, you can create an alias to ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE_MY_POSTGRESQL_3498225_URL"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"TODO screenshot alias")),Object(i.b)("h2",{id:"env-file-dot-env-file"},".env file (dot env file)"),Object(i.b)("p",null,"When running your application, you will typically use a set of environment variables to capture the configuration of the application. For example: say your app uses a logger to debug what's going on. You would want to put your logger in debug mode."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file lets you capture all the environment variables that you need in order to run your application locally. When you start your application using ",Object(i.b)("inlineCode",{parentName:"p"},"qovery run"),", the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file is read, and each name/value pair is inserted into the environment, to mimic the action of environment variables."),Object(i.b)("h3",{id:"view-you-applications-environment-variables"},"View you application's environment variables"),Object(i.b)("p",null,"To view all of your application\u2019s environment variables, type ",Object(i.b)("inlineCode",{parentName:"p"},"qovery application env list"),"."),Object(i.b)("h3",{id:"look-at-the-contents-of-your-env-file"},"Look at the contents of your .env file"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cat .env\n")),Object(i.b)("p",null,"Here's an example ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"LOGGER=debug\nMY_VAR_2=myValue2\n")),Object(i.b)("h3",{id:"add-an-environment-variable-to-your-env-file"},"Add an environment variable to your .env file"),Object(i.b)("p",null,"To add an environment variable to your ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file, edit it and add a new name=value pair on a new line."),Object(i.b)("h2",{id:"some-rules"},"Some rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Environment variable keys should use only alphanumeric characters, and the underscore character (_) to ensure that they are accessible from all programming languages. Environment variable keys should not include the hyphen character."),Object(i.b)("li",{parentName:"ul"},"Environment variable keys should not begin with a double underscore (__)."),Object(i.b)("li",{parentName:"ul"},"An environment variable\u2019s key should not begin with QOVERY_ unless it is set by the Qovery platform itself.")))}u.isMDXComponent=!0},342:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},343:function(e,t,n){"use strict";n(346);var a=n(0),r=n.n(a),i=n(342),l=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,i=e.icon,o=e.type,b=null;switch(o){case"danger":b="alert-triangle";break;case"success":b="check-circle";break;case"warning":b="alert-triangle";break;default:b="info"}return r.a.createElement("div",{className:l()(n,"alert","alert--"+o,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:l()("feather","icon-"+(i||b))}),t)}},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,v=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?r.a.createElement(v,o({ref:t},c,{components:n})):r.a.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},346:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(350)}),n(75)("fill")},350:function(e,t,n){"use strict";var a=n(26),r=n(76),i=n(25);e.exports=function(e){for(var t=a(this),n=i(t.length),l=arguments.length,o=r(l>1?arguments[1]:void 0,n),b=l>2?arguments[2]:void 0,c=void 0===b?n:r(b,n);c>o;)t[o++]=e;return t}}}]);