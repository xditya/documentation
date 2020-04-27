(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{235:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return y}));var n=a(1),l=a(9),o=(a(0),a(257)),r=a(274),i=a(275),c=a(269),s=a(258),u=a(311),b=a(266),p={last_modified_on:"2020-04-27",$schema:"/.meta/.schemas/guides.json",title:"Hello World. Deploy your first application.",description:"How to deploy your first application with Qovery",series_position:1,author_github:"https://github.com/evoxmusic",tags:["type: guide"]},d={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Hello World. Deploy your first application.",description:"How to deploy your first application with Qovery",permalink:"/guides/getting-started/deploy-your-first-application",readingTime:"4 min read",seriesPosition:1,source:"@site/guides/getting-started/deploy-your-first-application.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"}],title:"Hello World. Deploy your first application.",truncated:!1,nextItem:{title:"Adding a database",permalink:"/guides/getting-started/adding-a-database"}},m=[{value:"Tutorial",id:"tutorial",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]},{value:"Hello World!",id:"hello-world",children:[]}]},{value:"Deploy your own application",id:"deploy-your-own-application",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:m};function y(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Qovery is an easy way to deploy complete backend and frontend applications. In this guide, we'll deploy a Hello World ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org"}),"Node.JS")," application and touch on some basic concepts."),Object(o.b)(b.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," account"))),Object(o.b)("h2",{id:"tutorial"},"Tutorial"),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(o.b)(r.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(o.b)(i.a,{value:"macos",mdxType:"TabItem"},Object(o.b)(r.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(o.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(o.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(o.b)(r.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"scoop",mdxType:"TabItem"},Object(o.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(o.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))))),Object(o.b)("li",null,Object(o.b)("h3",{id:"sign-up"},"Sign up"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(o.b)("p",null,"Your browser window with sign-in options will open."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(o.b)("p",null,"Note: Qovery needs access to your account to be able to clone your repository for future application builds."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/github-connect.png",alt:"Connect Github"})),Object(o.b)("p",null,"Congratulations, you are logged-in.")),">",Object(o.b)("li",null,Object(o.b)("h3",{id:"hello-world"},"Hello World!"),Object(o.b)(s.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Qovery needs to get access to your Github account")," to deploy the application.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Fork")," this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/simple-example-node"}),"NodeJS application"),", and ",Object(o.b)("strong",{parentName:"p"},"Clone")," your repository"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Clone your forked application"',title:'"Clone',your:!0,forked:!0,'application"':!0}),"# Change <your_name> with your Github account name\n$ git clone git@github.com:<your_name>/simple-example-node.git\n")),Object(o.b)("p",null,"Qovery has deployed the application, to get the deployment status:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Move into the directory\n$ cd simple-example-node\n\n# Show the deployment status\n$ qovery status\n")),Object(o.b)("p",null,"Here is the output you should have. Is it not the case? ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Contact us on Discord")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"BRANCH NAME | STATUS  | ENDPOINTS          | APPLICATIONS        | DATABASES\nmaster      | running | https://domain.tld | simple-example-node | none\n\nAPPLICATION NAME    | STATUS  | DATABASES\nsimple-example-node | running | none\n")),Object(o.b)("p",null,"Voil\xe0 ! Your first application has been successfully deployed")))),Object(o.b)("h2",{id:"deploy-your-own-application"},"Deploy your own application"),Object(o.b)(s.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"You must provide your ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," ",Object(o.b)("strong",{parentName:"p"},"OR")," use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/application-template/"}),"one provided by us"))),Object(o.b)("p",null,"Deploying your own application is as easy as running ",Object(o.b)("inlineCode",{parentName:"p"},"qovery init")," at the root of your project directory."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery init\n")),Object(o.b)(u.a,{mdxType:"CodeExplanation"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"qovery init")," is an interactive command to generate the final ",Object(o.b)("inlineCode",{parentName:"li"},".qovery.yml"),"."),Object(o.b)("li",{parentName:"ul"},"It must be run at the root of your project directory."),Object(o.b)("li",{parentName:"ul"},"You must version your application with Git."))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"To deploy your application, it's as simple as that. In the following article, we will see how to add a database. Let's get started!"))}y.isMDXComponent=!0},258:function(e,t,a){"use strict";a(262);var n=a(0),l=a.n(n),o=a(256),r=a.n(o);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return l.a.createElement("div",{className:r()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&l.a.createElement("i",{className:r()("feather","icon-"+(o||c))}),t)}},261:function(e,t,a){var n=a(25).f,l=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in l||a(10)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},266:function(e,t,a){"use strict";a(261);var n=a(0),l=a.n(n),o=a(258);t.a=function(e){var t=e.children,a=e.name;return l.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},l.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},269:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=(a(256),a(267)),r=a.n(o);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,o=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+r.a.stringify(c),u=Object(n.useState)(null),b=u[0],p=u[1];return l.a.createElement("div",{className:"steps steps--h"+a},t,!o&&!b&&l.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",l.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",l.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&l.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",l.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},274:function(e,t,a){"use strict";var n=a(1),l=(a(278),a(271),a(52),a(27),a(20),a(19),a(0)),o=a.n(l),r=a(284),i=a(256),c=a.n(i),s=a(267),u=a.n(s),b=a(283),p=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,l=e.className,r=e.handleKeydown,i=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return o.a.createElement("div",{className:a?"tabs--centered":null},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",l,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return r(b,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,l=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return o.a.createElement(r.a,{className:"react-select-container react-select--"+l,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,i=e.label,c=e.placeholder,s=e.select,y=e.size,g=(e.style,e.values),O=e.urlKey,f=Object(b.a)(),j=f.tabGroupChoices,v=f.setTabGroupChoices,w=Object(l.useState)(a),N=w[0],T=w[1];if(null!=r){var x=j[r];null!=x&&x!==N&&T(x)}var k=function(e){T(e),null!=r&&v(r,e)},C=[],S=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(l.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=u.a.parse(window.location.search);e[O]&&T(e[O])}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"margin-bottom--"+(y||"md")},i&&o.a.createElement("div",{className:"margin-vert--sm"},i),g.length>1&&(s?o.a.createElement(h,Object(n.a)({changeSelectedValue:k,handleKeydown:S,placeholder:c,selectedValue:N,size:y,tabRefs:C},e)):o.a.createElement(m,Object(n.a)({changeSelectedValue:k,handleKeydown:S,selectedValue:N,tabRefs:C},e)))),l.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},275:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement(l.a.Fragment,null,e.children)}},311:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(258),a(141);t.a=function(e){var t=e.children,a=Object(n.useState)(!1),o=a[0],r=a[1];return o?l.a.createElement("div",{className:"code-explanation code-explanation--expanded"},t,l.a.createElement("div",{className:"code-explanation--toggle",onClick:function(){return r(!o)}},l.a.createElement("i",{className:"feather icon-arrow-up-circle"})," hide")):l.a.createElement("div",{className:"code-explanation code-explanation--collapsed"},l.a.createElement("div",{className:"code-explanation--toggle",onClick:function(){return r(!o)}},l.a.createElement("i",{className:"feather icon-info"})," explain this command"))}}}]);