webpackJsonp([2],{100:function(e,t){e.exports={appName:"Git",headerNavigation:[{name:"ReasonDB v1.x.x-b BETA",path:"/reasondb"}],landingPage:"/reasondb",topics:["news"],pages:[{route:"/reasondb",name:"ReasonDB",description:"<p>ReasonDB is a multi-model datastorage API that can sit on-top of almost any key-value store. It supports <a href='#/reasondb/tutorials/indexedKeyValue'>indexed key-value storage</a> (similar to localStorage), <a href='#/reasondb/tutorials/graph'>graph storage</a> (similar to GunDB), and its own <a href='#/reasondb/tutorials/SQLlike'>SQL like statements</a>.</p><p>Available across all these approaches is a <a href='#/reasondb/tutorials/joqular'>pattern matching language</a> similar to but more extensive than that provided by MongoDB, <a href='#/reasondb/tutorials/types'>extended type storage</a> (Infinity, NaN, ...), <a href='#/reasondb/tutorials/fulltext'>full text indexing</a>, and multi-source <a href='#/reasondb/tutorials/conflictresolution'>conflict resolution</a>.</p><p>ReasonDB is available via <a href='https://github.com/anywhichway/reasondb'>GitHub</a> and <a href='https://www.npmjs.com/package/reasondb'>NPM</a> under an MIT license.<p>",icon:"address-book",children:[{route:"/introduction",name:"Introduction",icon:"info-circle",topics:["introduction"],markdown:"/static/markdown/introduction.md"},{route:"/whatsNew",name:"Whats new ?",description:"recent announcements, news, latest and greatest",icon:"bullhorn",topics:["news"],markdown:"/static/markdown/whatsnew/current.md"},{route:"/tutorials",name:"Guides & Tutorials",description:"<p>The JOQULAR and Cursor tutotrials should be read before trying to use ReasonDB.</p>",icon:"lightbulb",topics:["guides","tutorials"],children:[{route:"/joqular",name:"JOQULAR Pattern Matching",description:"MongoDB like JavaScript Query Language Representation",icon:"exclamation-triangle",topics:["key-value","localStorage"],markdown:"/static/markdown/tutorials/joqular.md"},{route:"/cursors",name:"Cursors",description:"How query cursors work",icon:"database",topics:["cursors"],markdown:"/static/markdown/tutorials/cursors.md"},{route:"/indexedKeyValue",name:"Indexed Key-Value Storage",description:"How to use indexed key-value storage",icon:"code",topics:["key-value","localStorage"],markdown:"/static/markdown/tutorials/keyvalue.md"},{route:"/graph",name:"Graph Storage",description:"How to use graph storage",icon:"project-diagram",topics:["graph","GunDB","gun"],markdown:"/static/markdown/tutorials/graph.md"},{route:"/SQLlike",name:"SQL Like Statements",description:"How to use SQL like statements",icon:"database",topics:["SQL"],markdown:"/static/markdown/tutorials/sqllike.md"},{route:"/startup",name:"Database start-up and storage engines",description:"How to start-up a database and use any key value storage engine",icon:"database",topics:[],markdown:"/static/markdown/tutorials/startup.md"},{route:"/fulltext",name:"Full text indexing",description:"Using stem and trigram based full text indexing",icon:"file-word",topics:["fulltext","full-text"],markdown:"/static/markdown/tutorials/fulltext.md"},{route:"/types",name:"Extended Type Storage & Indexing",description:"Types of data that can be stored and indexed",icon:"exclamation-triangle",topics:["types","indexing"],markdown:"/static/markdown/tutorials/types.md"},{route:"/browservsnode",name:"Browser vs NodeJS Use",description:"How to use in a browser or with NodeJS",icon:"exclamation-triangle",topics:["browser","nodejs"],markdown:"/static/markdown/tutorials/browservsnode.md"},{route:"/conflictresolution",name:"Conflict Resolution",description:"How conflict resolution works",icon:"hands-helping",topics:["conflict","resolution"],markdown:"/static/markdown/tutorials/conflict.md"}]},{route:"/api",name:"API Documentation",description:"APIs",icon:"code",topics:["api"],children:[{route:"/introduction",name:"API Introduction",description:"how to read the API documentation",icon:"code",topics:["api","fulltext"],markdown:"/static/markdown/api/introduction.md"},{route:"/keyvalue",name:"Key-Value API",description:"Comprehensive documentation for the key-value API",icon:"code",topics:["api","key-value"],markdown:"/static/markdown/api/keyvalue.md",children:[{route:"/clear",name:"clear",description:"emptying the database",icon:"code",topics:["api","key-value","clear"],markdown:"/static/markdown/api/keyvalue/clear.md"},{route:"/getitem",name:"getItem",description:"retrieving data by key",icon:"code",topics:["api","key-value","getItem"],markdown:"/static/markdown/api/keyvalue/getitem.md"},{route:"/match",name:"match",description:"retrieving data by matching",icon:"code",topics:["api","key-value","match"],markdown:"/static/markdown/api/keyvalue/match.md"},{route:"/putitem",name:"putItem",description:"adding indexed objects",icon:"code",topics:["api","key-value","putItem"],markdown:"/static/markdown/api/keyvalue/putitem.md"},{route:"/removeitem",name:"removeItem",description:"retrieving data by key",icon:"code",topics:["api","key-value","removeItem"],markdown:"/static/markdown/api/keyvalue/removeitem.md"},{route:"/setitem",name:"setItem",description:"adding data ascociated with a key",icon:"code",topics:["api","key-value","setItem"],markdown:"/static/markdown/api/keyvalue/setitem.md"}]},{route:"/graph",name:"Graph API",description:"Comprehensive documentation for the graph API",icon:"code",topics:["api","graph"],markdown:"/static/markdown/api/graph.md"},{route:"/sqllike",name:"SQL Like API",description:"Comprehensive documentation for the SQL like API",icon:"code",topics:["api","sql"],markdown:"/static/markdown/api/sqllike.md",children:[{route:"/delete",name:"Delete",description:"deleting objects",icon:"code",topics:["api","sql","delete"],markdown:"/static/markdown/api/sqllike/delete.md"},{route:"/insert",name:"Insert",description:"inserting objects",icon:"code",topics:["api","sql","insert"],markdown:"/static/markdown/api/sqllike/insert.md"},{route:"/select",name:"Insert",description:"retrieving objects",icon:"code",topics:["api","sql","select"],markdown:"/static/markdown/api/sqllike/select.md"},{route:"/update",name:"Update",description:"updating objects",icon:"code",topics:["api","sql","update"],markdown:"/static/markdown/api/sqllike/update.md"}]}]},{route:"/links",name:"Helpful Links",description:"Additional reading, links to other database APIs",topics:[],icon:"link",markdown:"/static/markdown/links.md"}]}]}},119:function(e,t,a){"use strict";var n=a(51),i=a(120),o=a(26),s=o(n.a,i.a,!1,null,null,null);t.a=s.exports},120:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__brand"},[a("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.openNavigation(t):null},click:e.openNavigation}},[a("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),e._v(" "),e.isVisible||e.isDesktop?a("nav",{staticClass:"nav"},[a("svg",{ref:"nav__close",staticClass:"nav__icon nav__icon--close",attrs:{tabindex:"0",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.closeNavigation(t):null},click:e.closeNavigation}},[a("path",{attrs:{d:"M77.6 21.1l-28 28.1-28.1-28.1-1.9 1.9 28 28.1-28 28.1 1.9 1.9L49.6 53l28 28.1 2-1.9-28.1-28.1L79.6 23z"}})]),e._v(" "),a("ul",{staticClass:"nav__list"},e._l(e.list,function(t){return a("router-link",{key:t.path,staticClass:"nav__item",attrs:{to:t.path}},[e._v(" "+e._s(t.name)+"\n\t          ")])}))]):e._e()])])},i=[],o={render:n,staticRenderFns:i};t.a=o},121:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{on:{toggleMenu:e.toggleMenu}}),e._v(" "),a("main",[a("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[a("div",{staticClass:"nav__search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(t){t.target.composing||(e.searchKeywords=t.target.value)}}}),e._v(" "),e.searchResultsVisible?a("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.reset(t):null}}},[a("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),a("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),e._v(" "),a("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e._v(" "),e.searchResultsVisible?a("div",{staticClass:"container"},[e.searchResults.length?a("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):a("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]),e._v(" "),a("ul",{staticClass:"results__search"},e._l(e.searchResults,function(t,n){return a("li",{key:n,staticClass:"result"},[a("header",{staticClass:"result__header"},[a("router-link",{attrs:{to:t.path}},[a("h2",{staticClass:"result__title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.topics,function(t,n){return a("span",{key:n,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.searchTopic(t)},click:function(a){e.searchTopic(t)}}},[e._v(e._s(t))])})],2),e._v(" "),a("p",[e._v(e._s(e._f("truncate")(t.text,300,"...")))])])}))]):a("router-view")],1)],1)},i=[],o={render:n,staticRenderFns:i};t.a=o},122:function(e,t,a){"use strict";var n=a(29),i=a(123),o=a(16);n.a.use(i.a),t.a=new i.a({routes:o.a.getRoutingConfig()})},16:function(e,t,a){"use strict";function n(e,t){e.path=e.route,e.breadCrumb=t?JSON.parse(c()(t.breadCrumb)):[];var a=null!=t?t.path+e.route:"/";e.breadCrumb.push({name:e.name,path:a}),e.component=m,null!=t&&(e.path=t.path+e.route);var i=[];if(e.children)for(var o in e.children){var s=e.children[o];i.push({name:s.name,description:s.description,path:e.path+s.route,icon:s.icon,bgColor:s.bgColor,owner:s.owner,topics:s.topics}),n(s,e)}e.meta={tiles:i.length>0?i:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},h[e.path]=e.meta}function i(e){var t=JSON.parse(c()(e.pages));for(var a in t){n(t[a],null)}return t.push({path:"/",redirect:e.landingPage}),t}var o=a(74),s=a.n(o),r=a(98),c=a.n(r),u=a(100),d=a.n(u),l=a(57),p=a.n(l),m=function(){return a.e(0).then(a.bind(null,129))},h={};t.a={getMetaById:function(e){return h[e]},getRoutingConfig:function(){return i(this.getBaseConfig())},getBaseConfig:function(){return d.a},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new s.a(function(e,t){var a=window.location.pathname,n=a.substring(0,a.length-1)+"/static/content.json";p.a.get(n).then(function(t){e(t.data)}).catch(function(e){return t(e)})})}}},31:function(e,t,a){"use strict";var n=a(53),i=a.n(n),o=a(16),s=a(119);t.a={name:"app",data:function(){return{baseUrl:"https://pages.github.ibm.com/merlin/playbook/#",isNavOpen:!1,tocItems:o.a.getPages(),content:[],searchResultsVisible:!1,searchResults:null,searchKeywords:null}},components:{Header:s.a},created:function(){var e=this;o.a.getStatus().then(function(t){void 0!==t&&(e.content=t)}).catch(function(e){console.log("error",e)})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var t=this;if(this.searchKeywords){var a=i()({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:a}),this.searchResultsVisible=!0;this.searchKeywords.indexOf("topic:")>-1?this.searchResults=this.content.filter(function(e){for(var a=(e.topics||[]).map(function(e){return e.toLowerCase()}),n=!1,i=0;i<a.length;i++)a[i].indexOf(t.searchKeywords.toLowerCase().replace("topic:",""))>-1&&(n=!0);return n}):this.searchResults=this.content.filter(function(e){return(e.text||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1||(e.name||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1})}else{var n=this.$route.query;delete n.search,this.$router.push({query:n}),this.reset()}},searchTopic:function(e){var t="topic:"+e,a=i()({},this.$route.query,{search:t});this.searchKeywords=t,this.search(),this.$router.push({query:a})},reset:function(){this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,t){var a=window.location.href;if(a.indexOf("?")>-1){var n=a.substring(a.indexOf("?")+1),i=JSON.parse('{"'+decodeURIComponent(n.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');i&&i.search&&(this.searchKeywords=i.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}}},51:function(e,t,a){"use strict";var n=a(16);t.a={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:n.a.getBaseConfig().appName,list:n.a.getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}}},58:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(29),i=a(61),o=a(122),s=a(124),r=a.n(s),c=a(52),u=a(125),d=(a.n(u),a(126));n.a.use(r.a),c.library.add(d.s,d.z,d.l,d._25,d._10,d.T,d.Y,d._9,d._30,d.M,d.H,d.I,d._14,d.W,d._16,d._29,d.D,d.C,d._24,d._21,d.P,d.B,d._13,d._0,d.w,d.V,d._6,d.j,d._27,d._3,d.c,d.q,d.Q,d._28,d.S,d.F,d.t,d._17,d.f,d.G,d._20,d.x,d.a,d.e,d.A,d.n,d.z,d._11,d.R,d._32,d.u,d._2,d.E,d.U,d._23,d._22,d._4,d.X,d.g,d._12,d._19,d.y,d._5,d._15,d.p,d.J,d._8,d.Z,d.h,d._26,d.d,d.k,d.v,d.m,d.O,d.i,d.K,d.b,d.N,d._7,d._18,d._1,d._31,d.r,d.o,d.L);var l=function(e,t,a){a=a||"...";var n=document.createElement("div");n.innerHTML=e;var i=n.textContent;return i.length>t?i.slice(0,t)+a:i};n.a.filter("truncate",l),n.a.component("font-awesome-icon",u.FontAwesomeIcon),n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,render:function(e){return e(i.a)}})},61:function(e,t,a){"use strict";function n(e){a(62)}var i=a(31),o=a(121),s=a(26),r=n,c=s(i.a,o.a,!1,r,null,null);t.a=c.exports},62:function(e,t){}},[58]);
//# sourceMappingURL=app.acfed361765b7882f406.js.map