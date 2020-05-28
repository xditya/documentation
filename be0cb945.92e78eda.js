(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{240:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return y}));var n=a(1),o=a(9),i=(a(0),a(286)),l=a(291),r=a(298),c=a(296),s=a(297),p=a(293),u=a(285),b={last_modified_on:"2020-05-28",$schema:"/.meta/.schemas/guides.json",title:"Deploy Rails with PostgreSQL on Qovery",description:"How to deploy a Rails application with the PostgreSQL database on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","framework: rails","language: ruby","database: postgresql"],hide_pagination:!0},d={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy Rails with PostgreSQL on Qovery",description:"How to deploy a Rails application with the PostgreSQL database on Qovery",permalink:"/guides/tutorial/deploy-rails-with-postgresql",readingTime:"8 min read",source:"@site/guides/tutorial/deploy-rails-with-postgresql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: rails",permalink:"/guides/tags/framework-rails"},{label:"language: ruby",permalink:"/guides/tags/language-ruby"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"Deploy Rails with PostgreSQL on Qovery",truncated:!1,prevItem:{title:"Deploy Node.JS with PostgreSQL on Qovery",permalink:"/guides/tutorial/deploy-node-js-with-postgresql"},nextItem:{title:"Deploy Spring Boot with PostgreSQL on Qovery",permalink:"/guides/tutorial/deploy-spring-boot-with-postgresql"}},m=[{value:"Setup Qovery",id:"setup-qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"Rails sample application",id:"rails-sample-application",children:[]},{value:"About configuration",id:"about-configuration",children:[]},{value:"Connect your application to PostgreSQL",id:"connect-your-application-to-postgresql",children:[]}]},{value:"Trigger a new deployment",id:"trigger-a-new-deployment",children:[]},{value:"Bonuses (optional)",id:"bonuses-optional",children:[{value:"Test the Rails application locally",id:"test-the-rails-application-locally",children:[]},{value:"Deploy the application on a staging environment",id:"deploy-the-application-on-a-staging-environment",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={rightToc:m};function y(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com"}),"AWS")," (Amazon Web Services) is a fantastic and reliable cloud service provider. AWS, like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com"}),"GCP")," (Google Cloud Platform) and Microsoft ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://azure.microsoft.com"}),"Azure"),", provides everything you need to host an application without having to worry about running the underlying servers and network configuration."),Object(i.b)("p",null,"However, deploying an application on any of those cloud providers presents many challenges. The typical deployment workflow looks like this: write code, push it to Git repository, compile code, deploy code, validate your changes, and repeat. Developers not only have to take care of all of this by themselves, but they also have to configure tons of services (like VPCs, databases, caches, DNS, CDN, and others) to make their application live on the web."),Object(i.b)("p",null,"Qovery solves this problem by combining the reliability of AWS and the simplicity of Heroku to augment the developer experience and to take this configuration burden from developers shoulders."),Object(i.b)("p",null,"In this blog post, I will show you how Qovery improves developers' workflows by deploying staging and production ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://rubyonrails.org/"}),"Rails")," application with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database on Qovery. You will be able to focus on writing the best code and delivering business value instead of managing complex services."),Object(i.b)(p.a,{name:"guide",mdxType:"Assumptions"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your Operating System is macOS / Windows / Linux"),Object(i.b)("li",{parentName:"ul"},"You have a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," account"))),Object(i.b)("h2",{id:"setup-qovery"},"Setup Qovery"),Object(i.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(i.b)(c.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"linux",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(i.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(i.b)(c.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(i.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(i.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(i.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(i.b)(c.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"scoop",mdxType:"TabItem"},Object(i.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(i.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(i.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Windows"),"."))),Object(i.b)("p",null,"Few limitations exist on Windows: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#windows"}),"read more")))),Object(i.b)("h3",{id:"sign-up"},"Sign up"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(i.b)(u.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(i.b)("p",null,"Your browser window with sign-in options will open."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(i.b)("p",null,"Note: Qovery needs access to your account to be able to clone your repository for future application builds."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(i.b)("p",null,"Congratulations, you are logged-in."),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("h3",{id:"rails-sample-application"},"Rails sample application"),Object(i.b)("p",null,"To bootstrap the Rails sample project, we'll use a ",Object(i.b)("inlineCode",{parentName:"p"},"template"),". ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.qovery.com/docs/using-qovery/integration/project-templates/"}),"Templates")," are preconfigured basic project structures that allow you to create application skeleton using just one command. To bootstrap the application, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery init -t rails-postgresql\n")),Object(i.b)("p",null,"This command creates a new directory with initial application structure configured to be deployed on Qovery."),Object(i.b)("h3",{id:"about-configuration"},"About configuration"),Object(i.b)("p",null,"To deploy your Rails application connected to a PostgreSQL, you need to have a ",Object(i.b)("inlineCode",{parentName:"p"},".qovery.yml")," file, and a ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," (both provided in the template skeleton) at the root of your project."),Object(i.b)(u.a,{mdxType:"Alert"},"The .qovery.yml file describes all the dependencies that your application needs (e.g., PostgreSQL) to work smoothly"),Object(i.b)("p",null,"In this example we are using PostgreSQL v11.5"),Object(i.b)("p",null,"After running ",Object(i.b)("inlineCode",{parentName:"p"},"template")," command, you can check the content of ",Object(i.b)("inlineCode",{parentName:"p"},".qovery.yml")," in the folder containing your new application:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ cat .qovery.yml\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml"',title:'".qovery.yml"'}),'application:\n  name: my-application\n  project: my-project\n  cloud_region: aws/us-west-2\n  publicly_accessible: true\ndatabases:\n- type: postgresql\n  version: "11.5"\n  name: my-db\nrouters:\n- name: main\n  routes:\n  - application_name: my-application\n    paths:\n    - /\n')),Object(i.b)("p",null,"All you have to do now to deploy the application is to initialize a new Github repository and grant Qovery access to this newly created repo:"),Object(i.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a new repository @ ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com"}),"Github"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Authorize the Qovery Github application")," to get access to your Github account. Make sure it has access to repositories containing application you want to deploy with Qovery.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to the new application folder:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd rails-postgresql\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Connect your local Git repository to the newly created Github repo (don't forget to replace placeholders in the command):"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git remote add origin https://github.com/${YOUR_USERNAME}/${YOUR_REPOSITORY_NAME}.git\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Push initial commit:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git push --set-upstream origin master\n")),Object(i.b)("p",{parentName:"li"},"Voila! Your application is now being deployed to Qovery.")))),Object(i.b)("h3",{id:"connect-your-application-to-postgresql"},"Connect your application to PostgreSQL"),Object(i.b)("p",null,"Credentials of your database are available via environment variables. Qovery injects environment vars at the runtime.\nTo list all the environment variables available to your application, execute the follwing in your application folder:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# List all environment variables\n$ qovery project env list\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"SCOPE    | KEY                                                      | VALUE\nBUILT_IN | QOVERY_JSON_B64                                          | <base64>\nBUILT_IN | QOVERY_BRANCH_NAME                                       | master\nBUILT_IN | QOVERY_IS_PRODUCTION                                     | true\nBUILT_IN | QOVERY_MY_APPLICATION_HOSTNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_DATABASE                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PASSWORD                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_USERNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PORT                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_FQDN                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_HOST                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI                     | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_VERSION                            | 11.5\nBUILT_IN | QOVERY_DATABASE_MY_DB_TYPE                               | PostgreSQL\nBUILT_IN | QOVERY_DATABASE_MY_DB_NAME                               | my-db\n")),Object(i.b)("p",null,"The sample application is preconfigured to use those environment variables to connect to the database."),Object(i.b)("p",null,"See the deployment status by executing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Show your deployment status\n$ qovery status\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nmaster      | running | https://main-abcdefgh12345678-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME  | STATUS  | DATABASES\nmy-application    | running | my-db\n\nDATABASE NAME    | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db            | running | POSTGRESQL      | 11.5     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(i.b)("p",null,"As you see in the status output, the application as well as the database are automagically deployed. When your application ",Object(i.b)("inlineCode",{parentName:"p"},"status")," is ",Object(i.b)("inlineCode",{parentName:"p"},"running"),", you can use a browser or ",Object(i.b)("inlineCode",{parentName:"p"},"curl")," to access its endpoints."),Object(i.b)("h2",{id:"trigger-a-new-deployment"},"Trigger a new deployment"),Object(i.b)("p",null,"Now, you can play with the sample application and commit & push your changes. Qovery detects your actions and triggers new builds and application deployments. Any change you make will be reflected in your deployed application automatically."),Object(i.b)("h2",{id:"bonuses-optional"},"Bonuses (optional)"),Object(i.b)("h3",{id:"test-the-rails-application-locally"},"Test the Rails application locally"),Object(i.b)("p",null,"The Qovery motto is: if your application runs locally, it runs well on Qovery, too. To test if your application is running locally, execute the following command:"),Object(i.b)(u.a,{mdxType:"Alert"},"The Docker runtime is required"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery run\n")),Object(i.b)("p",null,"Note: ",Object(i.b)("inlineCode",{parentName:"p"},"qovery run")," connects your application to the PostgreSQL database on Qovery."),Object(i.b)("h3",{id:"deploy-the-application-on-a-staging-environment"},"Deploy the application on a staging environment"),Object(i.b)("p",null,"Qovery has a compelling feature known as ",Object(i.b)("inlineCode",{parentName:"p"},"environments"),". Qovery supports the deployment of isolated development environments that reflect your Git branches. Environments are complete copies of all of your data, application, and services like databases. The Environment is useful for testing changes in isolation before merging them to your main branch."),Object(i.b)("p",null,"So, do you want to create a new feature, fix a bug, or make modifications without impacting the production or any other important environment? Type the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git checkout -b feat_foo\n$ git push -u origin feat_foo\n\n# show deployment status\n$ qovery status\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nfeat_foo    | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME      | STATUS  | DATABASES\ndocker-simple-example | running | my-db\n\nDATABASE NAME  | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db          | running | PostgreSQL      | 11.5     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(i.b)("p",null,"As you see, a new environment related to ",Object(i.b)("inlineCode",{parentName:"p"},"feat_foo")," branch is now running. New environment includes all applications and databases of your project, so you can test\nnew features in environment that is an identical copy of your production environment (we even replicate the database data!)."),Object(i.b)(l.a,{to:"/guides/advanced/using-multiple-environments",mdxType:"Jump"},"Multiple Environments"),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"Qovery brings developers the full power of simplicity and flexibility while deploying applications. Any developer can now take advantage of the most popular cloud providers in seconds instead of hours or days."),Object(i.b)("p",null,"Accelerate your development and start using Qovery today. Let us know what you think about it on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/qovery_"}),"Twitter"),", or by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),"."),Object(i.b)(l.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}y.isMDXComponent=!0},285:function(e,t,a){"use strict";a(290);var n=a(0),o=a.n(n),i=a(284),l=a.n(i);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,i=e.icon,r=e.type,c=null;switch(r){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:l()(a,"alert","alert--"+r,{"alert--fill":n,"alert--icon":!1!==i}),role:"alert"},!1!==i&&o.a.createElement("i",{className:l()("feather","icon-"+(i||c))}),t)}},287:function(e,t,a){"use strict";var n=a(1),o=a(0),i=a.n(o),l=a(39),r=a(292),c=a(28),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,p=a||c,u=Object(r.a)(p),b=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,u]),p&&u?i.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var a,n;d&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:p})):i.a.createElement("a",Object(n.a)({},e,{href:p}))}},288:function(e,t,a){var n=a(24).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},291:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(287),l=a(284),r=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,l=e.leftIcon,c=e.rightIcon,s=e.size,p=e.target,u=e.to,b=r()("jump-to","jump-to--"+s,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},l&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+l})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return p?o.a.createElement("a",{href:u,target:p,className:b},d):o.a.createElement(i.a,{to:u,className:b},d)}},292:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},293:function(e,t,a){"use strict";a(288);var n=a(0),o=a.n(n),i=a(285);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},296:function(e,t,a){"use strict";var n=a(1),o=(a(301),a(299),a(52),a(26),a(20),a(19),a(0)),i=a.n(o),l=a(306),r=a(284),c=a.n(r),s=a(294),p=a.n(s),u=a(305),b=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,l=e.handleKeydown,r=e.style,s=e.values,p=e.selectedValue,u=e.tabRefs;return i.a.createElement("div",{className:a?"tabs--centered":null},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:r},s.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:c()("tab-item",{"tab-item--active":p===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return l(u,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,r=e.values,c=r;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return i.a.createElement(l.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:r.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,l=e.groupId,r=e.label,c=e.placeholder,s=e.select,y=e.size,g=(e.style,e.values),O=e.urlKey,v=Object(u.a)(),j=v.tabGroupChoices,f=v.setTabGroupChoices,N=Object(o.useState)(a),w=N[0],T=N[1];if(null!=l){var A=j[l];null!=A&&A!==w&&T(A)}var S=function(e){T(e),null!=l&&f(l,e)},E=[],I=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=p.a.parse(window.location.search);e[O]&&T(e[O])}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"margin-bottom--"+(y||"md")},r&&i.a.createElement("div",{className:"margin-vert--sm"},r),g.length>1&&(s?i.a.createElement(h,Object(n.a)({changeSelectedValue:S,handleKeydown:I,placeholder:c,selectedValue:w,size:y,tabRefs:E},e)):i.a.createElement(m,Object(n.a)({changeSelectedValue:S,handleKeydown:I,selectedValue:w,tabRefs:E},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===w}))[0])}},297:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}},298:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=(a(284),a(294)),l=a.n(i);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,i=e.hideFeedbackQuestion,r="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+r+" failed",body:"The tutorial on:\n\n"+r+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+l.a.stringify(c),p=Object(n.useState)(null),u=p[0],b=p[1];return o.a.createElement("div",{className:"steps steps--h"+a},t,!i&&!u&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}}}]);