(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("q1tI"),r=n.n(a),i=n("MUpH");function l(){var e=Object(i.a)(['\n          query {\n            StoreSettings(id: "downtown") {\n              name\n              slicemaster {\n                ',"\n              }\n              hotSlices {\n                ","\n              }\n            }\n          }\n        "]);return l=function(){return e},e}var c=String.raw,s="\n    name\n    _id\n    image {\n      asset {\n        url\n        metadata {\n          lqip\n        }\n      }\n    }\n";var o=n("vOnD"),m=o.b.div.withConfig({displayName:"Grids__HomePageGrid",componentId:"sc-1j70bu0-0"})(["display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(auto,1fr));"]),u=o.b.div.withConfig({displayName:"Grids__ItemsGrid",componentId:"sc-1j70bu0-1"})(["display:grid;gap:2rem;grid-template-columns:1fr 1fr;"]),d=o.b.div.withConfig({displayName:"Grids__ItemStyles",componentId:"sc-1j70bu0-2"})(["text-align:center;position:relative;img{height:auto;font-size:0;}p{transform:rotate(-2deg) translateY(-140%);position:absolute;width:100%;left:0;}.mark{display:inline;}@keyframes shine{from{background-position:200%;}to{background-position:-40px;}}img.loading{--shine:white;--background:var(--grey);background-image:linear-gradient( 90deg,var(--background) 0px,var(--shine) 40px,var(--background) 80px );background-size:500px;animation:shine 1s infinite linear;}"]);function g(e){var t=e.count;return r.a.createElement(u,null,Array.from({length:t},(function(e,t){return r.a.createElement(d,{key:"loader-"+t},r.a.createElement("p",null,r.a.createElement("span",{className:"mark"},"Loading...")),r.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",className:"loading",alt:"Loading",width:"500",height:"400"}))})))}function p(e){var t=e.items;return r.a.createElement(u,null,t.map((function(e){return r.a.createElement(d,null,r.a.createElement("p",null,r.a.createElement("span",{className:"mark"},e.name)),r.a.createElement("img",{width:"500",height:"400",src:e.image.asset.url+"?w=500&h=400&fit=crop",alt:e.name,style:{background:"url("+e.image.asset.metadata.lqip+")",backgroundSize:"cover"}}))})))}function h(e){var t=e.slicemasters;return r.a.createElement("div",null,r.a.createElement("h2",{className:"center"},r.a.createElement("span",{className:"mark tilt"},"Slicemasters On")),r.a.createElement("p",null,"Standing by, ready to slice you up"),!t&&r.a.createElement(g,{count:4}),t&&!(null==t?void 0:t.length)&&r.a.createElement("p",null,"No one is working right now!"),(null==t?void 0:t.length)&&r.a.createElement(p,{items:t}))}function E(e){var t=e.hotSlices;return r.a.createElement("div",null,r.a.createElement("h2",{className:"center"},r.a.createElement("span",{className:"mark tilt"},"Hot Slices")),r.a.createElement("p",null,"Stick it in your face hole rn"),!t&&r.a.createElement(g,{count:4}),t&&!t.length&&r.a.createElement("p",null,"Nothin' in the case!"),(null==t?void 0:t.length)&&r.a.createElement(p,{items:t}))}function f(){var e=function(){var e=Object(a.useState)(),t=e[0],n=e[1],r=Object(a.useState)(),i=r[0],o=r[1];return Object(a.useEffect)((function(){fetch("https://kwlmhjmw.api.sanity.io/v1/graphql/production/default",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:c(l(),s,s)})}).then((function(e){return e.json()})).then((function(e){n(e.data.StoreSettings.hotSlices),o(e.data.StoreSettings.slicemaster)})).catch((function(e){console.log("SHEEEEEEIT",e)}))}),[]),{hotSlices:t,slicemasters:i}}(),t=e.slicemasters,n=e.hotSlices;return r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"The Best Fucking Pizza!"),r.a.createElement("p",null,"Open from 11am to 11pm every day."),r.a.createElement(m,null,r.a.createElement(h,{slicemasters:t}),r.a.createElement(E,{hotSlices:n})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-edb6ec94daa505fe5dc6.js.map