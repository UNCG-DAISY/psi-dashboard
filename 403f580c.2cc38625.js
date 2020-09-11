(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(9),o=(r(0),r(181)),i={id:"future",title:"Future",sidebar_label:"Future"},l={id:"code_doc/future",title:"Future",description:"As great of a jump V3 was from V2 there are always things that can be improved or experimented with.",source:"@site/docs/code_doc/future.md",permalink:"/Coastal-Image-Labeler/docs/code_doc/future",editUrl:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/edit/master/docs/docs/code_doc/future.md",sidebar_label:"Future",sidebar:"docs",previous:{title:"Tools",permalink:"/Coastal-Image-Labeler/docs/code_doc/tools"},next:{title:"User Documentation",permalink:"/Coastal-Image-Labeler/docs/user_doc/overview"}},c=[{value:"CLI",id:"cli",children:[]},{value:"Frontend",id:"frontend",children:[]},{value:"Server",id:"server",children:[]},{value:"GitHub Actions",id:"github-actions",children:[]},{value:"VM",id:"vm",children:[]},{value:"TypeScript",id:"typescript",children:[]},{value:"Experimental",id:"experimental",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As great of a jump V3 was from V2 there are always things that can be improved or experimented with."),Object(o.b)("h2",{id:"cli"},"CLI"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CLI subcommand called ",Object(o.b)("inlineCode",{parentName:"li"},"doctor")," that would help find errors in the DB (Such as an archive refers to a catalog that doesnt exist or an image refers to an archive that doesnt exist, image counts being wrong, or tags missing data)."),Object(o.b)("li",{parentName:"ul"},"Unit Testing for CLI."),Object(o.b)("li",{parentName:"ul"},"Multithreading?")),Object(o.b)("h2",{id:"frontend"},"Frontend"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Unit Testing for frontend on some of the parts that are deterministic."),Object(o.b)("li",{parentName:"ul"},"Pixel annotation with ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/UniversalDataTool/react-image-annotate"}),"React Image Annotate"),"."),Object(o.b)("li",{parentName:"ul"},"Add sliders as a possible question type."),Object(o.b)("li",{parentName:"ul"},"Add number field as a possible question type."),Object(o.b)("li",{parentName:"ul"},"Improve the way question sets are stored. Add ability to check/create new question sets in admin page."),Object(o.b)("li",{parentName:"ul"},"Admin page to show latest tags, update users, and other adminy stuff \ud83e\udd37 ",Object(o.b)("inlineCode",{parentName:"li"},"\xaf\\_(\u30c4)_/\xaf")," .")),Object(o.b)("h2",{id:"server"},"Server"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Simplify some of the middlewares. Some are a little bit messy in terms of logic."),Object(o.b)("li",{parentName:"ul"},"Auto inser user db data via express"),Object(o.b)("li",{parentName:"ul"},"Enforce user tag role checks on server rather then on the nextjs server from ",Object(o.b)("inlineCode",{parentName:"li"},"getServerSideProps"),".")),Object(o.b)("h2",{id:"github-actions"},"GitHub Actions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create file for unit testing configs, such as user data and archives that will be used through out the test to unsure none of the tests step on each other."),Object(o.b)("li",{parentName:"ul"},"Auto deploy site whenever master get pushed to."),Object(o.b)("li",{parentName:"ul"},"Auto deploy dev site whenever beta gets pushed to.")),Object(o.b)("h2",{id:"vm"},"VM"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stream log files to other locations."),Object(o.b)("li",{parentName:"ul"},"Notify if the site goes down or if an error happens.")),Object(o.b)("h2",{id:"typescript"},"TypeScript"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Improve the way types are shared across the dashboard and CLI.")),Object(o.b)("h2",{id:"experimental"},"Experimental"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Make the DB be local instance instead of MongoDB Atlas.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Would probably mean that users would have to make a local account and ",Object(o.b)("strong",{parentName:"li"},"CAN NOT")," signin with Google/Facebook/Github/etc."))),Object(o.b)("li",{parentName:"ul"},"Use a SQL database, or anyother type(Redis)."),Object(o.b)("li",{parentName:"ul"},"Dockerize."),Object(o.b)("li",{parentName:"ul"},"Kubernetes."),Object(o.b)("li",{parentName:"ul"},"Dark theme \ud83c\udf11 and Light theme \u2600\ufe0f or maybe other themes/user themes."),Object(o.b)("li",{parentName:"ul"},"Redux for state management."),Object(o.b)("li",{parentName:"ul"},"Progressive image loading."),Object(o.b)("li",{parentName:"ul"},"Archives within archives with in archives....etc.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Images can have groups assigned to them (like tags on discord). So a image could have the ",Object(o.b)("inlineCode",{parentName:"li"},"Florence")," group and ",Object(o.b)("inlineCode",{parentName:"li"},"FlorenceArchive")," group."),Object(o.b)("li",{parentName:"ul"},"A user would need to have (atleast one or all, which ever idea works out best) inorder to tag an image. The group can have a rank (1,2,3,4...) and so images would be grouped by the rank 1 groups first then rank 2 and so on."),Object(o.b)("li",{parentName:"ul"},"Only one group per rank for an image (cant have say 2 rank 3 group labels).")))))}u.isMDXComponent=!0},181:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?n.a.createElement(m,l(l({ref:t},s),{},{components:r})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);