import l,{useState as h,useEffect as b}from"react";import P from"react-dom";import{Link as d,useParams as O,BrowserRouter as A,Routes as T,Route as g}from"react-router-dom";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();var _={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=l,k=Symbol.for("react.element"),D=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,q=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function w(t,r,a){var n,s={},o=null,c=null;a!==void 0&&(o=""+a),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(c=r.ref);for(n in r)$.call(r,n)&&!B.hasOwnProperty(n)&&(s[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)s[n]===void 0&&(s[n]=r[n]);return{$$typeof:k,type:t,key:o,ref:c,props:s,_owner:q.current}}f.Fragment=D;f.jsx=w;f.jsxs=w;_.exports=f;var e=_.exports,C={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},p=l.createContext&&l.createContext(C),m=function(){return m=Object.assign||function(t){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},m.apply(this,arguments)},F=function(t,r){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(a[n[s]]=t[n[s]]);return a};function E(t){return t&&t.map(function(r,a){return l.createElement(r.tag,m({key:a},r.attr),E(r.child))})}function H(t){return function(r){return l.createElement(M,m({attr:m({},t.attr)},r),E(t.child))}}function M(t){var r=function(a){var n=t.attr,s=t.size,o=t.title,c=F(t,["attr","size","title"]),u=s||a.size||"1em",i;return a.className&&(i=a.className),t.className&&(i=(i?i+" ":"")+t.className),l.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,n,c,{className:i,style:m(m({color:t.color||a.color},a.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),t.children)};return p!==void 0?l.createElement(p.Consumer,null,function(a){return r(a)}):r(C)}function G(t){return H({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"}}]})(t)}const V=({href:t,text:r})=>e.jsx("a",{className:"text-white hover:text-zinc-200 no-underline text-base mx-5",href:t,children:r}),Q=()=>e.jsxs("header",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(G,{className:"bg-white w-10 h-auto m-1 justify-start"}),e.jsx(d,{to:"/",className:"max-w-5xl mx-auto",children:e.jsx("img",{className:"w-72 h-auto",src:"./img/logo.jpg",alt:"logo"})})]}),e.jsx("nav",{className:"bg-black p-2.5 my-15",children:e.jsxs("div",{className:"flex justify-around max-w-5xl m-auto",children:[e.jsx(V,{href:"/",text:"INICIO"}),e.jsx(d,{to:"/category/Vestidos",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"VESTIDOS"}),e.jsx(d,{to:"/category/Abrigos",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"ABRIGOS"}),e.jsx(d,{to:"/category/Conjuntos",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"CONJUNTOS"}),e.jsx(d,{to:"/category/Remerasytops",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"REMERAS Y TOPS"}),e.jsx(d,{to:"/category/Pollerasyshorts",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"POLLERAS Y SHORTS"})]})})]}),R=({cantidad:t})=>t>0?e.jsx("span",{className:"bg-black text-white rounded-full absolute top-3 left-10 p-1 text-xs",children:t}):null,U=({src:t,title:r,price:a,onLoad:n})=>e.jsxs("article",{children:[e.jsx("img",{className:"card__imagen",src:t,onLoad:n}),e.jsx("h4",{className:"card__titulo",children:r}),e.jsxs("p",{className:"card__precio",children:["$",a]})]}),v=({greeting:t})=>{const[r,a]=h([]),[n,s]=h(!0),{categoria:o}=O();return b(()=>{const c=async()=>{try{setTimeout(async()=>{const i=await(await fetch("./src/data.json")).json(),j=o?i.filter(x=>x.categoria===o):i;a(j),s(!1)},1e3)}catch(u){console.error("Error data:",u),s(!1)}};s(!0),c()},[o]),n?e.jsx("p",{className:"loaded",children:"Cargando..."}):e.jsxs("main",{children:[e.jsx("h1",{className:"titulo__tienda",children:"TIENDA"}),e.jsx("p",{className:"text-xl text-center text-black m-2 fixed-element",children:t}),e.jsx("section",{className:"tienda",children:r.map(c=>e.jsxs("article",{className:"cards",children:[e.jsx(d,{to:`/item/${c.id}`,children:e.jsx(U,{src:c.thumbnail,title:c.nombre,price:c.precio})}),e.jsxs("div",{className:"buttons-container",children:[e.jsx(d,{to:`/item/${c.id}`,children:e.jsx("button",{className:"ver-button",children:"VER DETALLES"})}),e.jsx("button",{className:"agregar-button",children:"AGREGAR AL CARRITO"})]})]},c.id))})]})},W=()=>{const{itemId:t}=O(),[r,a]=h(null),[n,s,,o]=h(1),c=async x=>{try{const S=(await(await fetch("/src/data.json")).json()).find(L=>L.id===x);a(S)}catch(y){console.error("Error al obtener los detalles del producto:",y)}};b(()=>{c(t)},[t]);const u=()=>{s(n+1)},i=()=>{n>1&&s(n-1)},j=()=>{const x={...r,cantidad:n};o(x)};return e.jsx("div",{className:"items",children:r&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:r.thumbnail,alt:r.nombre,className:"item-image"}),e.jsxs("div",{className:"item-details",children:[e.jsx("p",{className:"item-text",children:r.nombre}),e.jsxs("p",{className:"item-text",children:["Color:",r.color]}),e.jsxs("p",{className:"item-text",children:["Talles:",r.talle]}),e.jsxs("p",{className:"item-precio",children:["$",r.precio]})]}),e.jsxs("div",{className:"quantity-selector",children:[e.jsx("button",{className:"quantity-button",onClick:i,children:"-"}),e.jsx("span",{children:n}),e.jsx("button",{className:"quantity-button",onClick:u,children:"+"})]}),e.jsx("button",{className:"add-to-cart-button",onClick:j,children:"Agregar al carrito"}),e.jsx(R,{cantidad:n})]})})};function Y(){return e.jsx(A,{children:e.jsxs(e.Fragment,{children:[e.jsx(Q,{}),e.jsx(R,{}),e.jsxs(T,{children:[e.jsx(g,{path:"/",element:e.jsx(v,{greeting:"¡Bienvenido a nuestra tienda!"})}),e.jsx(g,{path:"/category/:categoria",element:e.jsx(v,{})}),e.jsx(g,{path:"/item/:itemId",element:e.jsx(W,{})})]})]})})}var I,N=P;I=N.createRoot,N.hydrateRoot;const J=document.getElementById("root"),K=I(J);K.render(e.jsx(l.StrictMode,{children:e.jsx(Y,{})}));
