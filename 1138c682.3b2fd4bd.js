(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return h}));var n=a(1),o=a(9),l=(a(0),a(257)),r=a(263),i=a(274),c=a(275),s=a(266),u=a(258),p={last_modified_on:"2020-04-27",$schema:"/.meta/.schemas/guides.json",title:"Deploy Flask with PostgreSQL on Qovery",description:"How to deploy a Flask application with the PostgreSQL database on Qovery",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","framework: flask","language: python","database: postgresql"],hide_pagination:!0},b={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy Flask with PostgreSQL on Qovery",description:"How to deploy a Flask application with the PostgreSQL database on Qovery",permalink:"/guides/tutorial/deploy-flask-with-postgresql",readingTime:"7 min read",source:"@site/guides/tutorial/deploy-flask-with-postgresql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: flask",permalink:"/guides/tags/framework-flask"},{label:"language: python",permalink:"/guides/tags/language-python"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"Deploy Flask with PostgreSQL on Qovery",truncated:!1,prevItem:{title:"Custom routes",permalink:"/guides/advanced/custom-routes"},nextItem:{title:"Deploy Laravel with MySQL on Qovery",permalink:"/guides/tutorial/deploy-laravel-with-mysql"}},d=[{value:"Qovery",id:"qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"Flask sample application (Optional)",id:"flask-sample-application-optional",children:[]},{value:"Configure your project",id:"configure-your-project",children:[]},{value:"Connect your application to PostgreSQL",id:"connect-your-application-to-postgresql",children:[]},{value:"Deploy your application",id:"deploy-your-application",children:[]}]},{value:"Bonuses (optional)",id:"bonuses-optional",children:[{value:"Test the Flask application locally",id:"test-the-flask-application-locally",children:[]},{value:"Deploy the application on a staging environment",id:"deploy-the-application-on-a-staging-environment",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],m={rightToc:d};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com"}),"AWS")," (Amazon Web Services) is a fantastic and reliable cloud service provider. AWS, like ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com"}),"GCP")," (Google Cloud Platform) and Microsoft ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://azure.microsoft.com"}),"Azure"),", provides everything you need to host an application without having to worry about running the underlying servers and network configuration."),Object(l.b)("p",null,"However, deploying an application on any of these Cloud provider presents some challenges. The typical deployment workflow looks like this: write code, push it to Git, compile code, deploy code, validate your changes, and repeat. Developers thus not only have to do all of this manually, but they also have to configure tons of services (VPC, database, cache, DNS, CDN, etc.) to make their application live on the web."),Object(l.b)("p",null,"Qovery solves this problem by combining the reliability of AWS, and the simplicity of Heroku to augment the developer experience."),Object(l.b)("p",null,"In this blog post, I will show you how Qovery improves the developer experience to deploy staging and production ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org"}),"Flask")," application with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database on Qovery. You will be able to focus on writing the best code instead of managing complex services."),Object(l.b)(s.a,{name:"guide",mdxType:"Assumptions"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Your Operating System is MacOS / Windows / Linux"),Object(l.b)("li",{parentName:"ul"},"You have a ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," account"))),Object(l.b)("h2",{id:"qovery"},"Qovery"),Object(l.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(l.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(l.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(l.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Windows"),"."))))),Object(l.b)("h3",{id:"sign-up"},"Sign up"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(l.b)("p",null,"Your browser window with sign-in options will open."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(l.b)("p",null,"Note: Qovery needs access to your account to be able to clone your repository for future application builds."),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/github-connect.png",alt:"Connect Github"})),Object(l.b)("p",null,"Congratulations, you are logged-in."),Object(l.b)("h2",{id:"deployment"},"Deployment"),Object(l.b)("h3",{id:"flask-sample-application-optional"},"Flask sample application (Optional)"),Object(l.b)("p",null,"Get a local copy of the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/flask-todo"}),"Flask sample project")," by forking the project."),Object(l.b)("h3",{id:"configure-your-project"},"Configure your project"),Object(l.b)("p",null,"To deploy your Flask application connected to a PostgreSQL database, you need to have a ",Object(l.b)("inlineCode",{parentName:"p"},".qovery.yml")," file, and a ",Object(l.b)("inlineCode",{parentName:"p"},"Dockerfile")," (provided in the sample project) at the root of your project."),Object(l.b)(u.a,{mdxType:"Alert"},"The .qovery.yml file indicates all the dependencies that your application needs (e.g., PostgreSQL) to work smoothly"),Object(l.b)("p",null,"Here we will use PostgreSQL v11.5"),Object(l.b)("p",null,"To create the ",Object(l.b)("inlineCode",{parentName:"p"},".qovery.yml")," file, run the following command:\u200d\u200d"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Interactive command to generate the .qovery.yml\n$ qovery init\n")),Object(l.b)("p",null,"Which creates the ",Object(l.b)("inlineCode",{parentName:"p"},".qovery.yml")," file at the root of your project directory"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ cat .qovery.yml\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml"',title:'".qovery.yml"'}),'application:\n  name: my-application\n  project: my-project\n  cloud_region: aws/us-west-2\n  publicly_accessible: true\ndatabases:\n- type: postgresql\n  version: "11.5"\n  name: my-db\nrouters:\n- name: main\n  routes:\n  - application_name: my-application\n    paths:\n    - /\n')),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Authorize the Qovery Github application")," to get access to your Github account. Once done, you need to commit and push the ",Object(l.b)("inlineCode",{parentName:"p"},".qovery.yml")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Dockerfile")," file to deploy your app."),Object(l.b)("h3",{id:"connect-your-application-to-postgresql"},"Connect your application to PostgreSQL"),Object(l.b)("p",null,"Credentials of your database are available through environment variables. Qovery injects environment variables at the runtime.\nTo list all the environment variables available for your application, execute"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# List all environment variables\n$ qovery project env list\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"SCOPE    | KEY                                                      | VALUE\nBUILT_IN | QOVERY_JSON_B64                                          | <base64>\nBUILT_IN | QOVERY_BRANCH_NAME                                       | master\nBUILT_IN | QOVERY_IS_PRODUCTION                                     | true\nBUILT_IN | QOVERY_MY_APPLICATION_HOSTNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_DATABASE                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PASSWORD                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_USERNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PORT                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_FQDN                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_HOST                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI                     | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_VERSION                            | 11.5\nBUILT_IN | QOVERY_DATABASE_MY_DB_TYPE                               | PostgreSQL\nBUILT_IN | QOVERY_DATABASE_MY_DB_NAME                               | my-db\n")),Object(l.b)("h3",{id:"deploy-your-application"},"Deploy your application"),Object(l.b)("p",null,"Congratulations, you are finally ready to deploy your application. Now, execute the following commands:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git add .qovery.yml Dockerfile\n$ git commit -m \u201cadd .qovery.yml and Dockerfile\u201d\n$ git push -u origin qovery\n")),Object(l.b)("p",null,"Voila! Qovery is now deploying your app!"),Object(l.b)("p",null,"See the deployment status by executing"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Show your deployment status\n$ qovery status\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nmaster      | running | https://main-abcdefgh12345678-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME  | STATUS  | DATABASES\nmy-application    | running | my-db\n\nDATABASE NAME    | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db            | running | POSTGRESQL      | 11.5     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(l.b)("h2",{id:"bonuses-optional"},"Bonuses (optional)"),Object(l.b)("h3",{id:"test-the-flask-application-locally"},"Test the Flask application locally"),Object(l.b)("p",null,"The Qovery motto is: if your application runs locally, then your application will run on Qovery. To test if your application is running locally, execute the following command:"),Object(l.b)(u.a,{mdxType:"Alert"},"The Docker runtime is required"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery run\n")),Object(l.b)("p",null,"Note: ",Object(l.b)("inlineCode",{parentName:"p"},"qovery run")," connects your application to the PostgreSQL database on Qovery."),Object(l.b)("h3",{id:"deploy-the-application-on-a-staging-environment"},"Deploy the application on a staging environment"),Object(l.b)("p",null,"Qovery has a compelling feature known as \u201cenvironment\u201d. Qovery supports the deployment of isolated development environments from your branches, complete with exact copies of all of your data. The Environment is useful for testing changes in isolation before merging them."),Object(l.b)("p",null,"So, do you want to create a new feature, fix a bug, or make modifications without impacting the production or any other important environment? Type the following commands:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git checkout -b feat_foo\n$ git push -u origin feat_foo\n\n# show deployment status\n$ qovery status\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nfeat_foo    | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME              | STATUS  | DATABASES\ndocker-simple-example-laravel | running | my-db\n\nDATABASE NAME  | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db          | running | PostgreSQL      | 11.5     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(l.b)(r.a,{to:"/guides/advanced/using-multiple-environments",mdxType:"Jump"},"Multiple Environments"),Object(l.b)("h2",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"Qovery bring to developers, the full power of simplicity and flexibility while deploying applications. Any developer can now take advantage of the most popular Cloud providers in seconds instead of days."),Object(l.b)("p",null,"Accelerate your development and start using Qovery today. Let us know what you think about it on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/qovery_"}),"Twitter"),", or by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),"."),Object(l.b)(r.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}h.isMDXComponent=!0},258:function(e,t,a){"use strict";a(262);var n=a(0),o=a.n(n),l=a(256),r=a.n(l);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:r()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&o.a.createElement("i",{className:r()("feather","icon-"+(l||c))}),t)}},259:function(e,t,a){"use strict";var n=a(1),o=a(0),l=a.n(o),r=a(39),i=a(264),c=a(28),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,u=a||c,p=Object(i.a)(u),b=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?l.a.createElement(r.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var a,n;d&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):l.a.createElement("a",Object(n.a)({},e,{href:u}))}},261:function(e,t,a){var n=a(25).f,o=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},263:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(259),r=a(256),i=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,r=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,p=e.to,b=i()("jump-to","jump-to--"+s,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},r&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+r})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?o.a.createElement("a",{href:p,target:u,className:b},d):o.a.createElement(l.a,{to:p,className:b},d)}},264:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},266:function(e,t,a){"use strict";a(261);var n=a(0),o=a.n(n),l=a(258);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},274:function(e,t,a){"use strict";var n=a(1),o=(a(278),a(271),a(52),a(27),a(20),a(19),a(0)),l=a.n(o),r=a(284),i=a(256),c=a.n(i),s=a(267),u=a.n(s),p=a(283),b=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,r=e.handleKeydown,i=e.style,s=e.values,u=e.selectedValue,p=e.tabRefs;return l.a.createElement("div",{className:a?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return p.push(e)},onKeyDown:function(e){return r(p,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return l.a.createElement(r.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,i=e.label,c=e.placeholder,s=e.select,y=e.size,g=(e.style,e.values),O=e.urlKey,v=Object(p.a)(),f=v.tabGroupChoices,j=v.setTabGroupChoices,N=Object(o.useState)(a),w=N[0],T=N[1];if(null!=r){var A=f[r];null!=A&&A!==w&&T(A)}var S=function(e){T(e),null!=r&&j(r,e)},E=[],I=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=u.a.parse(window.location.search);e[O]&&T(e[O])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(y||"md")},i&&l.a.createElement("div",{className:"margin-vert--sm"},i),g.length>1&&(s?l.a.createElement(h,Object(n.a)({changeSelectedValue:S,handleKeydown:I,placeholder:c,selectedValue:w,size:y,tabRefs:E},e)):l.a.createElement(m,Object(n.a)({changeSelectedValue:S,handleKeydown:I,selectedValue:w,tabRefs:E},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===w}))[0])}},275:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);