"use strict";(self.webpackChunkassignment=self.webpackChunkassignment||[]).push([[362],{2265:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var r=t(184);function i(){return(0,r.jsxs)("div",{className:"line-style d-flex justify-content-center align-items-center mb-3",children:[(0,r.jsx)("div",{className:"line me-3"}),(0,r.jsx)("i",{className:"fa-solid fa-star"}),(0,r.jsx)("div",{className:"line ms-3"})]})}},3464:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(9439),i=t(2791),s=t(5373),a=t(2265),o=t.p+"static/media/poert1.4417330275f78faa31c3.png",c=t.p+"static/media/port2.6554473016d32b343f02.png",d=t.p+"static/media/port3.494a4a914b5471b41f3e.png",l=t(7087),u=t(184);function m(e){var n=e.img,t=e.showImg;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"col-md-4 p-4",children:(0,u.jsxs)("div",{className:"work rounded-3 overflow-hidden position-relative",children:[(0,u.jsx)(l.LazyLoadImage,{src:n,alt:"",className:"w-100 rounded-3"}),(0,u.jsx)("div",{className:"over-flow position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center",onClick:function(){t(n)},children:(0,u.jsx)("i",{className:"fa-solid fa-plus text-white fa-6x"})})]})})})}var f,p={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},g=new Uint8Array(16);function x(){if(!f&&!(f="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(g)}for(var h=[],v=0;v<256;++v)h.push((v+256).toString(16).slice(1));function j(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(h[e[n+0]]+h[e[n+1]]+h[e[n+2]]+h[e[n+3]]+"-"+h[e[n+4]]+h[e[n+5]]+"-"+h[e[n+6]]+h[e[n+7]]+"-"+h[e[n+8]]+h[e[n+9]]+"-"+h[e[n+10]]+h[e[n+11]]+h[e[n+12]]+h[e[n+13]]+h[e[n+14]]+h[e[n+15]]).toLowerCase()}var w=function(e,n,t){if(p.randomUUID&&!n&&!e)return p.randomUUID();var r=(e=e||{}).random||(e.rng||x)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var i=0;i<16;++i)n[t+i]=r[i];return n}return j(r)};function y(e){var n=e.imgSrc,t=e.removeSingleImg;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"img-container 100vh d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 bg-primary position-fixed\r ",onClick:function(){t()},children:(0,u.jsx)("img",{src:n,alt:"",className:"w-50 single-img"})})})})}function N(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),t=n[0],l=n[1],f=(0,i.useState)(!1),p=(0,r.Z)(f,2),g=p[0],x=p[1],h=[o,c,d,o,c,d],v=function(e){l(e),x(!0)};return(0,i.useEffect)((function(){document.title="Portfolio"}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("section",{className:"portfolio py-5 text-center",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)("div",{className:"header-info",children:[(0,u.jsx)(s.Z,{}),(0,u.jsx)(a.Z,{})]}),(0,u.jsx)("div",{className:"row",children:h.map((function(e){return(0,u.jsx)(m,{img:e,showImg:v},w())}))})]})}),g&&(0,u.jsx)(y,{imgSrc:t,removeSingleImg:function(){x(!1)}})]})}},5373:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var r=t(184);function i(){var e=window.location.pathname;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h1",{className:"text-uppercase mb-3 fw-bolder fs-1",children:"/"===e?"start framework":"".concat(e.slice(1)," COMPONENT")})})}}}]);
//# sourceMappingURL=362.d5048482.chunk.js.map