(this["webpackJsonpunsplash-clone"]=this["webpackJsonpunsplash-clone"]||[]).push([[0],{23:function(e,t,n){e.exports=n(37)},28:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(20),o=n.n(c),u=n(8),i=n(6),l=(n(28),n(9)),s=n.n(l),d=n(10),m=n(14),p=n(5),f=new Headers;f.append("Authorization","Client-ID E5EHMkfEkragu1136UCpc_fGGenGwqZltRj6vgw9Hyk");var h,w="https://api.unsplash.com";var E=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),u=Object(p.a)(o,2),i=u[0],l=u[1],E=a.a.useRef(1),v=a.a.useRef(!1),g=Object(r.useState)(y),b=Object(p.a)(g,2),j=b[0],O=b[1];function y(){return window.innerWidth<768&&window.innerWidth>480?2:window.innerWidth<480?1:window.innerWidth>768?3:void 0}Object(r.useEffect)((function(){return window.addEventListener("resize",(function(e){O(y())})),window.removeEventListener("resize",(function(e){O(y())}))}),[]),Object(r.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(m.a)(s.a.mark((function e(){var t,n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.current=!0,l(!0),t="".concat(w,"/photos/?per_page=12&page=").concat(E.current),n=new Request(t,{method:"GET",headers:f,mode:"cors"}),e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:a=e.sent,c((function(e){return[].concat(Object(d.a)(e),Object(d.a)(a))})),l(!1),v.current=!1;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var n=function(t){document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-window.innerHeight/2&&!v.current&&(console.log(E.current),console.log("called loadData"),h&&(clearTimeout(h),h=null),h=setTimeout((function(){E.current+=1,e(),console.log(v.current),console.log("calling uri",E.current)}),100))};return window.addEventListener("scroll",n),console.log("once"),function(){window.removeEventListener("scroll",n)}}),[]);var x=function(){for(var e=[],t=0;t<j;t++)e.push([]);for(var r=0;r<n.length;r++)e[r%e.length].push(n[r]);return e}();return a.a.createElement("div",null,a.a.createElement("h1",null,"Home"),a.a.createElement("div",{className:"imgContainer"},x.map((function(e,t){return a.a.createElement("div",{key:t},e.map((function(e){return a.a.createElement("div",{key:e.id,style:{paddingBottom:"20px"}},a.a.createElement("img",{className:"images",src:e.urls.regular,alt:e.alt_descriptions}))})))})),i&&a.a.createElement("h1",null,"Loading ...")))};n(30);var v,g=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1];return a.a.createElement("div",null,a.a.createElement("nav",null,a.a.createElement(u.b,{to:"/"},"Unsplash"),a.a.createElement("form",null,a.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),c(e.target.value)},placeholder:"Search Images"}),a.a.createElement(u.b,{to:"/images/".concat(n),id:"btn"},a.a.createElement("button",{type:"submit"},"Search")))))};var b=function(){var e=Object(i.e)().query,t=a.a.useRef(1),n=a.a.useRef(!1),c=Object(r.useState)(b),o=Object(p.a)(c,2),u=o[0],l=o[1],h=Object(r.useState)([]),w=Object(p.a)(h,2),E=w[0],g=w[1];function b(){return window.innerWidth<768&&window.innerWidth>480?2:window.innerWidth<480?1:window.innerWidth>768?3:void 0}function j(){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(s.a.mark((function r(){var a,c,o,u;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.current=!0,a="https://api.unsplash.com/search/photos?page=".concat(t.current,"&per_page=12&query=").concat(e),c=new Request(a,{method:"GET",headers:f,mode:"cors"}),r.next=5,fetch(c);case 5:return o=r.sent,r.next=8,o.json();case 8:u=r.sent,1===t.current?g(u.results):g((function(e){return[].concat(Object(d.a)(e),Object(d.a)(u.results))})),n.current=!1;case 11:case"end":return r.stop()}}),r)})))).apply(this,arguments)}Object(r.useEffect)((function(){return window.addEventListener("resize",(function(e){l(b())})),window.removeEventListener("resize",(function(e){l(b())}))}),[]),Object(r.useEffect)((function(){try{j(),t.current=1;var e=function(e){document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-window.innerHeight/2&&!n.current&&(console.log(t.current),console.log("called loadData"),v&&(clearTimeout(v),v=null),v=setTimeout((function(){t.current+=1,j(),console.log(n.current),console.log("calling uri",t.current)}),100))};return window.addEventListener("scroll",e),console.log("once"),function(){window.removeEventListener("scroll",e)}}catch(r){console.log(r)}}),[e]);var y=function(){for(var e=[],t=0;t<u;t++)e.push([]);for(var n=0;n<E.length;n++)e[n%e.length].push(E[n]);return e}();return a.a.createElement("div",null,a.a.createElement("h1",null,e.toUpperCase()),a.a.createElement("div",null,a.a.createElement("div",{className:"imgContainer"},y.map((function(e,t){return a.a.createElement("div",{key:t},e.map((function(e){return a.a.createElement("div",{key:e.id,style:{paddingBottom:"20px"}},a.a.createElement("img",{className:"images",src:e.urls.regular,alt:e.alt_descriptions}))})))})),n&&a.a.createElement("h1",null,"Loading ..."))))};var j=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(u.a,null,a.a.createElement(i.a,{path:"/",component:g}),a.a.createElement(i.a,{path:"/",exact:!0,component:E}),a.a.createElement(i.a,{path:"/images/:query",exact:!0,component:b})))};n(36);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5c1c447c.chunk.js.map