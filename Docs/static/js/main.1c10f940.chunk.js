(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})})},j=n(10),l=n(6),d=n.n(l),b=n(8),f=function(){var t=Object(b.a)(d.a.mark((function t(e){var n,a,c,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=iI7UrAiJg6vFGSw1khOGlhy5sKh6tJAr"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__jackInTheBox",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsxs)("p",{children:[" ",e," "]})]})},m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"animate__animated animate__rollIn",children:[" ",e," "]}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(h,Object(j.a)({},t),t.id)}))})]})},p=function(t){var e=Object(a.useState)(["One Punch"]),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Gif Collection - Busca tu Gif!"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:c.map((function(t){return Object(u.jsx)(m,{category:t},t)}))})]})};n(17);r.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1c10f940.chunk.js.map