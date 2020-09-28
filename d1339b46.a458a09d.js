(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(9),c=(n(0),n(311)),i={last_modified_on:"2020-09-28",title:"Cloud Account",description:"Understand the concept of Cloud Accounts in Qovery"},a={id:"main-concepts/business/cloud-account",title:"Cloud Account",description:"Understand the concept of Cloud Accounts in Qovery",source:"@site/docs/main-concepts/business/cloud-account.md",permalink:"/docs/main-concepts/business/cloud-account",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/main-concepts/business/cloud-account.md",sidebar:"docs",previous:{title:"Organization",permalink:"/docs/main-concepts/business/organization"},next:{title:"Build Platform",permalink:"/docs/main-concepts/business/build-platform"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Qovery has taken provider-agnostic approach to the cloud. Our Engine is designed to support any cloud provider. What it means to you, is that you can deploy your projects using multiple cloud accounts,\nfrom multiple cloud providers."),Object(c.b)("img",{src:"/img/providers.png"}),Object(c.b)("p",null,"Do you want to have a reliable production environment but also save money on staging platforms which are not crucial?\nNo problem! You can deploy your reliable production system on AWS, and to save resources, deploy other non-production\nenironments using one of cheaper cloud providers. Qovery brings you a real multicloud capabilities which are fully transparent for\napplication developers."),Object(c.b)("div",{style:{display:"flex",justifyContent:"space-evenly"}},Object(c.b)("img",{style:{maxWidth:"200px"},src:"/img/logos/aws.svg"}),Object(c.b)("img",{style:{maxWidth:"200px"},src:"/img/logos/do.svg"}),Object(c.b)("img",{style:{maxWidth:"200px"},src:"/img/logos/scw.svg"})),Object(c.b)("p",null,"All you need to do to benefit from cloud-agnostic deployments is to provide us with credentials to your cloud accounts\nand declare a simple ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/main-concepts/business/policy/"}),"Policy")," to use them."))}l.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return n?r.a.createElement(b,a({ref:t},u,{components:n})):r.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);