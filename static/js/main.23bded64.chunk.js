(this["webpackJsonpmini-unsplash"]=this["webpackJsonpmini-unsplash"]||[]).push([[0],{30:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(25),s=n.n(i),o=(n(30),n.p,n(12)),u=n(97),l=n(98),h=n(6),d=n(17),j=n.n(d),p=n(26),b=n(42),m=n.n(b).a.create(),f="5ja_A-ozjl0L6VNG85ea0rDlZWHk2CGMlhsRC8b0TDM",v="CLIENT-ID ".concat(f);m.defaults.baseURL="https://api.unsplash.com/",m.defaults.headers.post["Content-Type"]="application/jon",m.defaults.headers.common.Authorization=v;var g=function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/photos?client_id=".concat(f));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/search/photos?query=".concat(t,"&client_id=").concat(f));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(h.e)(),t=r.useState(null),n=Object(o.a)(t,2),a=(n[0],n[1],r.useState(!1)),c=Object(o.a)(a,2),i=(c[0],c[1],r.useState("")),s=Object(o.a)(i,2),d=s[0],j=s[1],p=Object(u.a)("photos",g),b=Object(l.a)((function(e){return x(e)})),m=e.location.pathname;r.useEffect((function(){"/"===m||"/mini-unsplash/"===m||b.data||b.isLoading||b.mutate(m.substring(1))}),[m,b]);return{resource:r.useMemo((function(){var e;return"/"===m||"/mini-unsplash/"===m?p.data:null===(e=b.data)||void 0===e?void 0:e.results}),[b,m,p]),isFetching:r.useMemo((function(){return"/"===m||"/mini-unsplash/"===m?p.isFetching:b.isLoading}),[b,m,p]),onSearch:function(t){t.preventDefault(),e.push("/".concat(d))},onChange:function(e){j(e.target.value)},searchValue:d}},_=function(e){var t=e.children,n=e.maxWidth,r={maxWidth:null!==n&&void 0!==n?n:"980px",width:"100%"};return Object(a.jsx)("div",{style:r,children:t})},w=n(95),y=(n(78),function(){var e=O(),t=e.searchValue,n=e.onChange,r=e.onSearch;return Object(a.jsxs)("form",{className:"searchInput__root",onSubmit:r,children:[Object(a.jsx)("div",{role:"button",className:"searchInput__button",onClick:r,children:Object(a.jsx)(w.a,{className:"searchInput__icon"})}),Object(a.jsx)("div",{className:"searchInput__input-container",children:Object(a.jsx)("input",{type:"search",autoComplete:"off",className:"searchInput__input",placeholder:"Search for photo",value:t,onChange:n})})]})}),N=(n(79),function(){var e=Object(h.e)().location.pathname;return Object(a.jsx)("div",{className:"hero__centralize hero__root",children:Object(a.jsxs)(_,{children:[("/"===e||"/mini-unsplash/"===e)&&Object(a.jsx)(y,{}),"/"!==e&&"/mini-unsplash/"!==e&&Object(a.jsxs)("h1",{children:['Search Results for "',e.substring(1),'"']})]})})}),C=(n(80),function(e){var t,n,r,c=e.isFetching,i=e.data;e.display;return Object(a.jsxs)(a.Fragment,{children:[c&&Object(a.jsx)("div",{className:"item",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("div",{style:{width:"100%",height:"22em",backgroundColor:"#eee"}})})}),!c&&Object(a.jsx)("div",{className:"item",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("img",{src:null===i||void 0===i||null===(t=i.urls)||void 0===t?void 0:t.regular,alt:"thumbnail",style:{width:"100%"}}),Object(a.jsx)("div",{className:"imageThumbnail__outer",children:Object(a.jsxs)("div",{className:"imageThumbnail__overlay",children:[Object(a.jsx)("p",{className:"imageThumbnail__primary-text",children:null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n.name}),Object(a.jsx)("p",{className:"imageThumbnail__secondary-text",children:null===i||void 0===i||null===(r=i.user)||void 0===r?void 0:r.location})]})})]})})]})});n(81);var S=function(e){var t=e.data,n=e.isFetching,c=r.useState(!1),i=Object(o.a)(c,2),s=i[0],u=i[1],l=r.useRef(null),h=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),d=!n&&Array.isArray(t)?t:Array(6).fill({});return r.useLayoutEffect((function(){function e(e){var t=l.current,n=parseInt(window.getComputedStyle(t).getPropertyValue("grid-auto-rows")),a=parseInt(window.getComputedStyle(t).getPropertyValue("grid-row-gap")),r=Math.ceil((e.querySelector(".content").getBoundingClientRect().height+a)/(n+a));e.style.gridRowEnd="span "+r}setTimeout((function(){!function(){for(var t=l.current.getElementsByClassName("item"),n=0;n<t.length;n++)e(t[n])}(),u(!0)}),500)}),[l,n,u,h]),Object(a.jsx)("div",{className:"imageGrid__centralize imageGrid__root",children:Object(a.jsxs)(_,{maxWidth:"900px",children:[Object(a.jsx)("div",{className:"grid",ref:l,children:d.map((function(e,t){return Object(a.jsx)(C,{data:e,isFetching:n,display:s},t.toString())}))}),0===d.length&&Object(a.jsx)("div",{style:{width:"100%"},children:Object(a.jsx)("h1",{style:{fontWeight:200,textAlign:"center"},children:"No results found"})})]})})},F=n(96),I=n(19),L=n(18);n(82),n(44),n(29),n(46),n(91),n(45);var T=new F.a;function E(){var e=O(),t=e.resource,n=e.isFetching;return Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{}),Object(a.jsx)(S,{data:t,isFetching:n})]})}var k=function(){return Object(a.jsx)(I.a,{client:T,children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(h.a,{exact:!0,path:"/",children:Object(a.jsx)(E,{})}),Object(a.jsx)(h.a,{exact:!0,path:"/:search",children:Object(a.jsx)(E,{})})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),z()}},[[93,1,2]]]);
//# sourceMappingURL=main.23bded64.chunk.js.map