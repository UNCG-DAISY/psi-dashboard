(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"Highlight",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),i=(n(0),n(157));const a={id:"project_structure",title:"Project Structure",sidebar_label:"Project Structure"},o={id:"code_documentation/project_structure",title:"Project Structure",description:"export const Highlight = ({children, color,text}) => ( <span style={{",source:"@site/docs\\code_documentation\\project_structure.md",permalink:"/Coastal-Image-Labeler/docs/code_documentation/project_structure",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/code_documentation/project_structure.md",sidebar_label:"Project Structure",sidebar:"docs",previous:{title:"Packages",permalink:"/Coastal-Image-Labeler/docs/code_documentation/packages"},next:{title:"Auth0",permalink:"/Coastal-Image-Labeler/docs/code_documentation/auth0"}},c=[{value:"Dashboard",id:"dashboard",children:[{value:"_server",id:"_server",children:[]},{value:"_dist",id:"_dist",children:[]},{value:"_site",id:"_site",children:[]},{value:"_config",id:"_config",children:[]}]}],l=({children:e,color:t,text:n})=>Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:n,padding:"0.2rem"}},e),s={rightToc:c,Highlight:l};function b({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are 2 major groups of the project.  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Dashboard, under ",Object(i.b)("inlineCode",{parentName:"li"},"src/dashboard/"),", which is the front and backend for the Dashboard site. ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Command Line Interface, under ",Object(i.b)("inlineCode",{parentName:"li"},"src/cli/"),", which is used to insert the\ninitial data into the database.")),Object(i.b)("h2",{id:"dashboard"},"Dashboard"),Object(i.b)("p",null,"The Dashboard has 4 important folders.  "),Object(i.b)("h3",{id:"_server"},"_server"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Code for the node.js server."),Object(i.b)("li",{parentName:"ul"},"Inside the server folder are the following.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"controllers")," - Which are the actualy logic for an API endpoint"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"middleware")," - General purpose functions that are ran when a API endpoint\nis hit, for example making sure that a user is logged in, or making sure a user is a tagger."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"models")," - Which are the Objects to set up some structure in the Database and make sure entries have some uniformity. ",Object(i.b)(l,{color:"#7db343",text:"#000",mdxType:"Highlight"},Object(i.b)("strong",{parentName:"li"},"Note:"))," These files have to be the same as the ones in ",Object(i.b)("inlineCode",{parentName:"li"},"src/cli/_src/models")," due the project structure not accounting for a cli when it was originally made."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"routes")," - Assign endpoints to a ",Object(i.b)("inlineCode",{parentName:"li"},"controller")," function. For example ",Object(i.b)("inlineCode",{parentName:"li"},"api/v1/test")," would be mapped to the ",Object(i.b)("inlineCode",{parentName:"li"},"test")," function in the ",Object(i.b)("inlineCode",{parentName:"li"},"controllers")," folder."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"utils")," - Utility functions.")))),Object(i.b)("h3",{id:"_dist"},"_dist"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ccontains the compiled code of ",Object(i.b)("inlineCode",{parentName:"li"},"_server")," since the server is written in TypeScript. "),Object(i.b)("li",{parentName:"ul"},"Maintains the exact same structure as ",Object(i.b)("inlineCode",{parentName:"li"},"src/dashboard/_server")," but with all files as ",Object(i.b)("inlineCode",{parentName:"li"},".js")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},".ts"),".")),Object(i.b)("h3",{id:"_site"},"_site"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Code for the frontend site."),Object(i.b)("li",{parentName:"ul"},"Inside the site folder are the following.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pages")," - Which are the pages of the website. ==Note:== Any page inside ",Object(i.b)("inlineCode",{parentName:"li"},"pages/auth/")," will require the user to be logged in, this is ensured by the server."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"components"),"  - Reuseable components for the website such as the tagging form, or various buttons.")))),Object(i.b)("h3",{id:"_config"},"_config"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Contains the enviroment variables. ",Object(i.b)(l,{color:"#7db343",text:"#000",mdxType:"Highlight"},Object(i.b)("strong",{parentName:"li"},"Note:"))," The contents of\nthis folder are added to the ",Object(i.b)("inlineCode",{parentName:"li"},".gitignore")," since they contain secret information.\nThere is a ",Object(i.b)("inlineCode",{parentName:"li"},"config.env.template")," files to explain what variables need to be\ndefined.")))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);