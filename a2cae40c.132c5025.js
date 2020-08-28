(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(177)),i={id:"auth0",title:"Setup",sidebar_label:"Setup"},l={id:"code_doc/auth0/auth0",title:"Setup",description:"Auth0, found here, is the provider for session",source:"@site/docs/code_doc/auth0/auth0.md",permalink:"/Coastal-Image-Labeler/docs/code_doc/auth0/auth0",editUrl:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/edit/master/docs/docs/code_doc/auth0/auth0.md",sidebar_label:"Setup",sidebar:"docs",previous:{title:"CD/CD",permalink:"/Coastal-Image-Labeler/docs/code_doc/cicd"},next:{title:"Values",permalink:"/Coastal-Image-Labeler/docs/code_doc/auth0/auth0Values"}},s=[{value:"Default .env file",id:"default-env-file",children:[]},{value:"Creating .env files",id:"creating-env-files",children:[]},{value:"Auth0 Setup",id:"auth0-setup",children:[]}],c={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Auth0, found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://auth0.com/"}),"here"),", is the provider for session\nmanagement. Auth0 permits users to signin using Gmail, GitHub,\nLinkedIn and Microsoft accounts, or just make a new username/password. Auth0\nhandles  all the security features (e.g., session management, user storing in\nthe database or other risky aspects related to sessions)."),Object(o.b)("h2",{id:"default-env-file"},"Default .env file"),Object(o.b)("p",null,"All the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," files are under ",Object(o.b)("inlineCode",{parentName:"p"},"src/dashboard/site"),". There should already be a filed called ",Object(o.b)("inlineCode",{parentName:"p"},"src/dashboard/site/.env")," which serves as the template to list all the used variables along with some defaults if possible. This is what it looks like"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="default .env"',title:'"default','.env"':!0}),'NODE_ENV = "development"\nNEXT_PUBLIC_NODE_ENV = "development"\nNEXT_PUBLIC_PORT = 8080\nNEXT_PUBLIC_PROTOCOL = \'HTTP\'\nNEXT_PUBLIC_DOMAIN_NAME = \'localhost:8080\'\nNEXT_PUBLIC_LOGGING = true\n\nMONGO_URI = ""\n\nAUTH0_DOMAIN = ""\nAUTH0_CLIENT_ID = ""\nAUTH0_CLIENT_SECRET = ""\nAUTH0_CALLBACK_URL = ""\nBASE_URL = ""\n\nNEXT_PUBLIC_Error_Image = "C:/Users/Skool/Desktop/Error.png"\nNEXT_PUBLIC_Time_Nextjs_Calls = false\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Any env variable starting with ",Object(o.b)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_*")," will be available on both the site and server. Without this they will only be available on server.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For example ",Object(o.b)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_NODE_ENV")," is used to simply display the node env on the site without having to do any API calls")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_Error_Image")," Is the error image to show if for whatever reason images can be found")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_Time_Nextjs_Calls")," By default the response time logging function only records the response times for calls to ",Object(o.b)("inlineCode",{parentName:"p"},"/api/*"),". With ",Object(o.b)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_Time_Nextjs_Calls")," as true the logging function will show the response times for every other call which is generally nextjs calls to load the page.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_LOGGING")," Enables logging."))),Object(o.b)("h2",{id:"creating-env-files"},"Creating .env files"),Object(o.b)("p",null,"There are 2 .env files that need to be created with an optional 3rd if you want to run unit tests on the local machine. The 2 mandatory files are ",Object(o.b)("inlineCode",{parentName:"p"},"src/dashboard/site/.env.development.local")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"src/dashboard/site/.env.production.local"),". The 3rd optional file is ",Object(o.b)("inlineCode",{parentName:"p"},"src/dashboard/site/.env.test.local"),". "),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"As a note any file with the format ",Object(o.b)("inlineCode",{parentName:"p"},".env.*.local")," will be ignored by git."))),Object(o.b)("p",null,"Values for the Auth0 variables can be found by following ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"auth0Values"}),"here")),Object(o.b)("h2",{id:"auth0-setup"},"Auth0 Setup"),Object(o.b)("p",null,"There are 2 Auth0 Tenants that are being used. One is for production and the other is for development. The reason being is that each inserts a User on first signin into the database. This is done through the use of rules."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The rules section is under ",Object(o.b)("inlineCode",{parentName:"li"},"https://manage.auth0.com/dashboard/us/NAME-OF-TENANT/rules")),Object(o.b)("li",{parentName:"ul"},"The code for the rule is as follows. Can be found at ",Object(o.b)("inlineCode",{parentName:"li"},"src/auth0"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="Enter user into DB on signup/first login rule"',title:'"Enter',user:!0,into:!0,DB:!0,on:!0,"signup/first":!0,login:!0,'rule"':!0}),"async function (user, context, callback) {\n\n  //If user has already logged in (as in accounts already made) or just refreshing token, do nothing\n  if (context.stats.loginsCount > 1 || context.protocol === 'oauth2-refresh-token') {\n    return callback(null, user, context);\n  }\n  const Mongoose = require('mongoose@5.6.11');\n\n  const userSchema = new Mongoose.Schema(\n    {\n      catalogs: {\n        type: [Mongoose.Types.ObjectId],\n        default: [],\n      },\n      dateAdded: {\n        type: Date,\n        default: Date.now(),\n      },\n      roles: {\n        type: [String],\n        default: [\"tagger\"],\n      },\n      userId: {\n        required: [true, 'UserId not passed'],\n        unique: true,\n        type: String,\n      },\n      userName: {\n        required: [true, 'Username not passed'],\n        unique: true,\n        type: String,\n      },\n    },\n    {\n      toJSON: { virtuals: true },\n      toObject: { virtuals: true },\n    }\n  );\n\n  const UserModel = Mongoose.model('User', userSchema);\n  const CatalogModel = Mongoose.model('Catalog', new Mongoose.Schema({ \n    name: {\n      type: String,\n      required: [true, 'Please provide catalog name'],\n      unique: true,\n      maxlength: [128, 'Name can not be longer than 128 characters'],\n    },\n   }));  \n\n  \n  //MAKE SURE TO PUT IN THE MONGODB URI\n  await Mongoose.connect('XXXX', {\n    useNewUrlParser: true,\n    useCreateIndex: true,\n    useFindAndModify: false,\n    useUnifiedTopology: true,\n  });\n\n  const demoCatalog = await CatalogModel.findOne({name: \"Demo\"});\n  \n  await UserModel.create({\n    userId: user.user_id,\n    userName: user.name,\n    dateAdded: Date.now(),\n    catalogs:[demoCatalog._id]\n  });\n  // TODO: implement your rule\n  return callback(null, user, context);\n}\n")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Make sure to have a catalog called ",Object(o.b)("inlineCode",{parentName:"li"},"demo")," as a default catalog to assign, or remove code if there is none."),Object(o.b)("li",{parentName:"ul"},"Make sure to place the Mongodb URI ")))))}u.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);