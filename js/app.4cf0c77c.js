(function(t){function e(e){for(var r,o,c=e[0],i=e[1],u=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a={app:0},s=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-576c83c8":"46a27183","chunk-dae9d7da":"4b6ca686"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-576c83c8":1,"chunk-dae9d7da":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-576c83c8":"a03bcf64","chunk-dae9d7da":"8e07a662"}[t]+".css",a=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-blog-app/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ff1":function(t,e,n){"use strict";n("6a95")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("d3b7");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MainLayout",[n("div",{staticClass:"container"},[n("router-view")],1)])],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TheNavbar"),t._t("default")],2)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"container nav-wrapper"},[n("span",{staticClass:"brand-logo nav-hide"},[t._v("My Blog ")]),n("ul",{staticClass:"right nav-mobile",attrs:{id:"nav-mobile"}},[n("li",[n("router-link",{attrs:{to:"/","active-class":"active"}},[t._v("Список")])],1),n("li",[n("router-link",{attrs:{to:"/create-post","active-class":"active"}},[t._v("Создать")])],1)])])])},u=[],l=(n("ed52"),n("2877")),d={},f=Object(l["a"])(d,i,u,!1,null,"425098e0",null),p=f.exports,m={name:"MainLayout",components:{TheNavbar:p}},h=m,v=Object(l["a"])(h,s,c,!1,null,null,null),b=v.exports,g={components:{MainLayout:b}},y=g,P=(n("5c0b"),Object(l["a"])(y,o,a,!1,null,null,null)),O=P.exports,j=(n("3ca3"),n("ddb0"),n("8c4f")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-list-wrapp"},[t.allPosts?n("div",{staticClass:"row"},t._l(t.allPosts,(function(e){return n("PostListItem",{key:e.id,attrs:{post:e},on:{openPost:t.getPost}})})),1):n("router-link",{staticClass:"link row",attrs:{to:"/create-post"}},[n("h5",{staticClass:"col s10 offset-s1"},[t._v("Создайте свой первый пост...")])])],1)},w=[],C=n("5530"),k=n("2f62"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card col s10 offset-s1"},[n("div",{staticClass:"card-content"},[n("span",{staticClass:"card-title"},[t._v(t._s(t.post.title))]),n("p",[t._v(t._s(t.post.description))]),n("span",{staticClass:"card-additions"},[n("i",{staticClass:"material-icons"},[t._v("date_range")]),n("p",[t._v(t._s(t.post.date))]),n("i",{staticClass:"tiny material-icons"},[t._v("chat_bubble_outline")]),n("p",[t._v(t._s(t.post.comments.length))])])]),n("div",{staticClass:"card-action"},[n("button",{staticClass:"btn btn-small",attrs:{type:"button"},on:{click:t.openPost}},[t._v(" Читать далее ")])])])},M=[],S={name:"PostListItem",props:{post:{type:Object,required:!0}},methods:{openPost:function(){this.$emit("openPost",this.post.id)}}},E=S,I=(n("ba9d"),Object(l["a"])(E,x,M,!1,null,"8ad9eed6",null)),L=I.exports,N={name:"PostListPage",components:{PostListItem:L},computed:Object(C["a"])({},Object(k["c"])({allPosts:"getAllPosts"})),mounted:function(){this.fetchAllPosts()},methods:Object(C["a"])(Object(C["a"])({},Object(k["b"])(["fetchAllPosts","fetchPostById"])),{},{getPost:function(t){this.fetchPostById(t),this.$router.push("post/".concat(t))}})},A=N,T=(n("0ff1"),Object(l["a"])(A,_,w,!1,null,"3148c624",null)),U=T.exports;r["a"].use(j["a"]);var $=[{path:"/",name:"PostListPage",component:U},{path:"/create-post",name:"PostСreation ",component:function(){return n.e("chunk-dae9d7da").then(n.bind(null,"e1c0"))}},{path:"/post/:id",name:"PostDetailsPage ",component:function(){return n.e("chunk-576c83c8").then(n.bind(null,"08c0"))}}],B=new j["a"]({mode:"history",base:"/vue-blog-app/",routes:$}),R=B,J=n("1da1"),D=n("2909"),q=(n("96cf"),n("e9c4"),n("c740"),n("b64b"),n("99af"),n("fb6a"),n("7db0"),n("ac1f"),n("5319"),n("d81d"),n("9115")),F="https://jsonplaceholder.typicode.com";function H(t){return K.apply(this,arguments)}function K(){return K=Object(J["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(F).concat(e));case 2:if(n=t.sent,n.ok){t.next=5;break}throw new Error("Could not fetch ".concat(e,", receved ").concat(n.status));case 5:return t.next=7,n.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)}))),K.apply(this,arguments)}function z(t){return G.apply(this,arguments)}function G(){return G=Object(J["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H("/posts?_limit=".concat(e));case 2:return n=t.sent,t.abrupt("return",n.map((function(t){return Y(t)})));case 4:case"end":return t.stop()}}),t)}))),G.apply(this,arguments)}var Q=function(){var t=Math.floor(1+12*Math.random()),e=Math.floor(1+28*Math.random()),n=2021,r="".concat(t," ").concat(e," ").concat(n," "),o=Math.floor(10+14*Math.random()),a=Math.floor(10+50*Math.random()),s=Object(q["a"])(r),c="".concat(s,", ").concat(o,":").concat(a);return c},V=function(t){return t.replace(/\r?\n/g,"")},W=function(t,e){return t.slice(0,e)},X=function(){var t=Math.floor(1+1e3*Math.random());return t},Y=function(t){return{userId:t.userId,id:t.id,title:W(V(t.title),50),body:V(t.body),description:W(V(t.body),100),comments:[{id:X(),date:Q(),userName:"Хомяк",body:V(t.body)},{id:X(),date:Q(),userName:"Плотва",body:V(t.body)}],date:Q()}},Z=function(t,e){return localStorage.setItem(t,JSON.stringify(e))},tt=function(t){var e=JSON.parse(localStorage.getItem(t));if(e){var n=JSON.parse(JSON.stringify(e));return n}},et=function(t,e){return t.findIndex((function(t){return t.id===e}))},nt=function(t,e,n){var r,o=Object.assign({},n);return r=0!=Object.keys(o).length?[].concat(Object(D["a"])(t.slice(0,e)),[o],Object(D["a"])(t.slice(e+1))):[].concat(Object(D["a"])(t.slice(0,e)),Object(D["a"])(t.slice(e+1))),r},rt={state:{posts:[],currentPost:null},mutations:{addPost:function(t,e){t.posts.unshift(e),Z("posts",t.posts)},setCurrentPost:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t.currentPost=e},setUpdatedPosts:function(t,e){t.posts=e,Z("posts",t.posts)}},actions:{fetchAllPosts:function(t){var e=arguments;return Object(J["a"])(regeneratorRuntime.mark((function n(){var r,o,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.commit,o=e.length>1&&void 0!==e[1]?e[1]:3,a=tt("posts"),!a){n.next=7;break}r("setUpdatedPosts",a),n.next=11;break;case 7:return n.next=9,z(o);case 9:s=n.sent,r("setUpdatedPosts",s);case 11:case"end":return n.stop()}}),n)})))()},createPost:function(t,e){var n=t.commit;n("addPost",e)},updatePost:function(t,e){var n=t.commit,r=tt("posts"),o=et(r,e.id),a=Object(C["a"])(Object(C["a"])({},r[o]),e),s=nt(r,o,a);n("setUpdatedPosts",s)},updateComment:function(t,e){var n=t.commit,r=e.postId,o=e.newComent,a=tt("posts"),s=et(a,r),c=Object(C["a"])({},a[s]);c.comments.unshift(o);var i=nt(a,s,c);n("setUpdatedPosts",i)},deletePost:function(t,e){var n=t.commit,r=tt("posts"),o=et(r,e),a=nt(r,o);n("setUpdatedPosts",a)},deleteComment:function(t,e){var n=t.commit,r=e.postId,o=e.id,a=tt("posts"),s=et(a,r),c=Object(C["a"])({},a[s]),i=c.comments.filter((function(t){return t.id!==o})),u=Object(C["a"])(Object(C["a"])({},c),{},{comments:i}),l=nt(a,s,u);n("setUpdatedPosts",l)},fetchPostById:function(t,e){var n=t.commit,r=tt("posts");if(r){var o=r.find((function(t){return t.id===e}));n("setCurrentPost",o)}else n("setCurrentPost")}},getters:{getAllPosts:function(t){return t.posts},getCurrentPost:function(t){return t.currentPost}}};r["a"].use(k["a"]);var ot=new k["a"].Store({modules:{posts:rt}});r["a"].config.productionTip=!1,r["a"].filter("date",q["a"]),new r["a"]({router:R,store:ot,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6a95":function(t,e,n){},9115:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("caad"),n("2532");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",n={};return e.includes("date")&&(n.day="2-digit",n.month="short",n.year="numeric"),e.includes("time")&&(n.hour="2-digit",n.minute="2-digit"),new Intl.DateTimeFormat("ru-RU",n).format(new Date(t))}},"923c":function(t,e,n){},"9c0c":function(t,e,n){},ba9d:function(t,e,n){"use strict";n("923c")},ed52:function(t,e,n){"use strict";n("f377")},f377:function(t,e,n){}});
//# sourceMappingURL=app.4cf0c77c.js.map