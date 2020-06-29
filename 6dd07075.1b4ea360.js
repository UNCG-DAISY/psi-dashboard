(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(157)),i={id:"deployment",title:"Deployment",sidebar_label:"Deployment"},c={id:"code_documentation/deployment",title:"Deployment",description:"This section of the documentation is focused on deploying the code on a VM.",source:"@site/docs\\code_documentation\\deployment.md",permalink:"/Coastal-Image-Labeler/docs/code_documentation/deployment",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/code_documentation/deployment.md",sidebar_label:"Deployment",sidebar:"docs",previous:{title:"Add Images to Database",permalink:"/Coastal-Image-Labeler/docs/code_documentation/adding_images"},next:{title:"Data Exporting",permalink:"/Coastal-Image-Labeler/docs/code_documentation/data_exporting"}},s=[{value:"NGINX",id:"nginx",children:[]},{value:"Getting code on VM",id:"getting-code-on-vm",children:[{value:"Starting server on VM",id:"starting-server-on-vm",children:[]},{value:"Ending server on VM",id:"ending-server-on-vm",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section of the documentation is focused on deploying the code on a VM."),Object(o.b)("h2",{id:"nginx"},"NGINX"),Object(o.b)("p",null,"A quick word about NGINX. NGINX is running on port 80 and 443 and redirects to the node.js server. In the case of port 80 it redirects to 443 which has SSL. The config file for NGINX is under ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available")," with a symbolic link to ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/nginx/sites-enabled"),". The symbolic link was made with"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Symbolic link"',title:'"Symbolic','link"':!0}),"sudo ln -s /etc/nginx/sites-available/coast /etc/nginx/sites-enabled/coast\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp",metastring:'title="coast NGINX"',title:'"coast','NGINX"':!0}),'// Port 80 redirect\nserver {\n    listen 80;\n    listen [::]:80;\n\n    //error page\n    error_page 502 /custom_502.html;\n    location = /custom_502.html {\n            root /usr/share/nginx/html;\n            internal;\n    }\n\n    server_name _;\n    return 301 https://$host$request_uri;\n}\n//Port 443 with SSL\nserver {\n    \n    listen 443 ssl;\n    ssl_certificate /home/shahnafis/ssl/coastalimagelabeler_science.crt;\n    ssl_certificate_key /home/shahnafis/ssl/private.key;\n    server_name _;\n\n    //error page\n    error_page 502 /custom_502.html;\n    location = /custom_502.html {\n            root /usr/share/nginx/html;\n            internal;\n    }\n\n    location / {\n        # First attempt to serve request as file, then\n        # as directory, then fall back to displaying a 404.\n        proxy_set_header   X-Forwarded-For $remote_addr;\n        proxy_set_header   Host $http_host;\n        proxy_pass "http://127.0.0.1:6969";\n    }\n\n}\n')),Object(o.b)("p",null,"You can test to make sure the NGINX file is correct with"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Testing file"',title:'"Testing','file"':!0}),"sudo nginx -t\n")),Object(o.b)("p",null,"And then any changes requires a reload."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Reloading changes"',title:'"Reloading','changes"':!0}),"sudo systemctl reload nginx\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For the foreseeable future the only times the ",Object(o.b)("inlineCode",{parentName:"p"},"coast")," file would be\nedited is to change the ports or paths to keys. In that case all you need to do is run"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Reloading changes"',title:'"Reloading','changes"':!0}),"sudo systemctl reload nginx\n")))),Object(o.b)("h2",{id:"getting-code-on-vm"},"Getting code on VM"),Object(o.b)("h3",{id:"starting-server-on-vm"},"Starting server on VM"),Object(o.b)("p",null,"to start the server, navigate to the directory with the code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd <location of the code>/GitHub/Coastal-Image-Labeler/src/dashboard\n")),Object(o.b)("p",null,"Build the server with"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Build server"',title:'"Build','server"':!0}),"sudo npm run build\n")),Object(o.b)("p",null,"And then run.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Run in background"',title:'"Run',in:!0,'background"':!0}),"bash forever_start.sh\n")),Object(o.b)("p",null,"Which runs the node.js server with forever that puts the log files in ",Object(o.b)("inlineCode",{parentName:"p"},"/home/shahnafis/.forever"),"\nwith the files being in the format of"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"forever_error_month_day_year-HR.MIN.SEC"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"forever_log_month_day_year-HR.MIN.SEC"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"forever_out_month_day_year-HR.MIN.SEC")),Object(o.b)("p",null,"Where the times are in UTC. The server should be available now."),Object(o.b)("h3",{id:"ending-server-on-vm"},"Ending server on VM"),Object(o.b)("p",null,"We are using a npm packaged called ",Object(o.b)("inlineCode",{parentName:"p"},"forever"),", found\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/forever"}),"here"),", which runs the server in the\nbackgroud. So we need to tell it to stop running the server by finding the PID."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"sudo forever list\n")),Object(o.b)("p",null,"Get the PID of the server and then"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"sudo forever stop <PID>\n")))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);