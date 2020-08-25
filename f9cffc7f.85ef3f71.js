(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(177)),c={id:"connection",title:"Connection",sidebar_label:"Connection"},i={id:"code_doc/database/connection",title:"Connection",description:"IP Whitelisting",source:"@site/docs/code_doc/database/connection.md",permalink:"/Coastal-Image-Labeler/docs/code_doc/database/connection",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/code_doc/database/connection.md",sidebar_label:"Connection",sidebar:"docs",previous:{title:"Values",permalink:"/Coastal-Image-Labeler/docs/code_doc/auth0/auth0Values"},next:{title:"Models",permalink:"/Coastal-Image-Labeler/docs/code_doc/database/models"}},l=[{value:"IP Whitelisting",id:"ip-whitelisting",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"ip-whitelisting"},"IP Whitelisting"),Object(a.b)("p",null,"There are a few IP's to whitelist."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"IP's of vm."),Object(a.b)("li",{parentName:"ol"},"IP's of developers"),Object(a.b)("li",{parentName:"ol"},"IP's of Auth0")),Object(a.b)("p",null,"The Auth0 IP's are found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://auth0.com/docs/security/whitelist-ip-addresses"}),"here")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"35.167.74.121, \n35.166.202.113, \n35.160.3.103, \n54.183.64.135, \n54.67.77.38, \n54.67.15.170, \n54.183.204.205, \n35.171.156.124, \n18.233.90.226, \n3.211.189.167, \n18.232.225.224, \n34.233.19.82, \n52.204.128.250, \n3.132.201.78, \n3.19.44.88, \n3.20.244.231\n")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"../../../img/code_documentation/db/whitelist.PNG",alt:"app6",title:"IP Whitelist"}))),Object(a.b)("p",null,"Another option is to allow connection from all IP's, but that reduces security."))}u.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);