(this.webpackJsonpcred=this.webpackJsonpcred||[]).push([[0],{19:function(e,t){},22:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t){},38:function(e,t){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),c=n(21),s=n(9),l=(n(29),n(30),n(31),n(12)),u=n(16),f=n.n(u),m=n(2),d=n(5),p=n(1),h=n(3),g=n(4),v=[{path:"/",component:function(){var e,t=Object(a.useState)(JSON.parse(window.localStorage.getItem("contacts")||"[]")),n=Object(l.a)(t,2),o=n[0],i=n[1];return r.a.createElement(s.g,null,r.a.createElement(s.f,{title:"Credmil"},r.a.createElement(s.j,{inner:!1},r.a.createElement(s.i,{searchContainer:".search-list",searchIn:".item-title"}))),r.a.createElement("input",{type:"file",onChange:function(e){if(null!=e){var t=e.target.files[0],n=new FileReader;n.onload=function(e){var t=new Uint8Array(e.target.result),n=f.a.read(t,{type:"array"}),a=n.SheetNames[0],r=n.Sheets[a],o=f.a.utils.sheet_to_json(r);window.localStorage.setItem("contacts",JSON.stringify(o)),i(o)},n.readAsArrayBuffer(t)}},ref:function(t){return e=t},style:{display:"none"}}),r.a.createElement(s.b,{position:"right-bottom",slot:"fixed",color:"red",onClick:function(){e.click()}},r.a.createElement(s.c,{ios:"f7:plus",aurora:"f7:plus",md:"material:add"})),r.a.createElement(s.d,{className:"searchbar-not-found"},r.a.createElement(s.e,{title:"Nothing found"})),r.a.createElement(s.d,{className:"search-list searchbar-found"},o.map((function(e,t){return r.a.createElement(s.e,{key:t,title:e.Nome,reloadDetail:!0,link:"/".concat(e.CPF,"/"),routeProps:{customer:e}})}))))},master:!0},{path:"/:id/",component:function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.customer?r.a.createElement(s.g,null,r.a.createElement(s.f,{title:"".concat(this.props.customer.Nome),backLink:"Back"}),r.a.createElement(s.d,null,Object.entries(this.props.customer).map((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return r.a.createElement(s.e,{header:n,title:a})})))):r.a.createElement("div",null)}}]),t}(r.a.Component)}],w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.use(s.l),i.a.render(r.a.createElement((function(e){var t="auto";document.location.search.indexOf("theme=")>=0&&(t=document.location.search.split("theme=")[1].split("&")[0]);var n={id:"io.framework7.testapp",theme:t,routes:v,popup:{closeOnEscape:!0},sheet:{closeOnEscape:!0},popover:{closeOnEscape:!0},actions:{closeOnEscape:!0}};return r.a.createElement(s.a,{params:n},r.a.createElement(s.h,{left:!0,cover:!0,resizable:!0},r.a.createElement(s.k,{url:"/panel-left/",linksView:".view-main"})),r.a.createElement(s.h,{right:!0,reveal:!0,resizable:!0},r.a.createElement(s.k,{url:"/panel-right/"})),r.a.createElement(s.k,{url:"/",main:!0,className:"safe-areas",masterDetailBreakpoint:800}))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/siape",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/siape","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.1ecd5612.chunk.js.map