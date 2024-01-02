import l,{useState as h,useEffect as v}from"react";import S from"react-dom";import{Link as d,useParams as b,BrowserRouter as L,Routes as P,Route as g}from"react-router-dom";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();var O={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=l,T=Symbol.for("react.element"),z=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,D=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function _(t,r,a){var n,s={},c=null,o=null;a!==void 0&&(c=""+a),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(o=r.ref);for(n in r)k.call(r,n)&&!B.hasOwnProperty(n)&&(s[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)s[n]===void 0&&(s[n]=r[n]);return{$$typeof:T,type:t,key:c,ref:o,props:s,_owner:D.current}}f.Fragment=z;f.jsx=_;f.jsxs=_;O.exports=f;var e=O.exports,w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},p=l.createContext&&l.createContext(w),u=function(){return u=Object.assign||function(t){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},u.apply(this,arguments)},F=function(t,r){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(a[n[s]]=t[n[s]]);return a};function C(t){return t&&t.map(function(r,a){return l.createElement(r.tag,u({key:a},r.attr),C(r.child))})}function q(t){return function(r){return l.createElement(M,u({attr:u({},t.attr)},r),C(t.child))}}function M(t){var r=function(a){var n=t.attr,s=t.size,c=t.title,o=F(t,["attr","size","title"]),m=s||a.size||"1em",i;return a.className&&(i=a.className),t.className&&(i=(i?i+" ":"")+t.className),l.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,n,o,{className:i,style:u(u({color:t.color||a.color},a.style),t.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),t.children)};return p!==void 0?l.createElement(p.Consumer,null,function(a){return r(a)}):r(w)}function $(t){return q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"}}]})(t)}const H=({href:t,text:r})=>e.jsx("a",{className:"text-white hover:text-zinc-200 no-underline text-base mx-5",href:t,children:r}),G=()=>e.jsxs("header",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx($,{className:"bg-white w-10 h-auto m-1 justify-start"}),e.jsx(d,{to:"/",className:"max-w-5xl mx-auto",children:e.jsx("img",{className:"w-72 h-auto",src:"./img/logo.jpg",alt:"logo"})})]}),e.jsx("nav",{className:"bg-black p-2.5 my-15",children:e.jsxs("div",{className:"flex justify-around max-w-5xl m-auto",children:[e.jsx(H,{href:"/",text:"INICIO"}),e.jsx(d,{to:"/category/Vestidos",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"VESTIDOS"}),e.jsx(d,{to:"/category/Abrigos",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"ABRIGOS"}),e.jsx(d,{to:"/category/Conjuntos",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"CONJUNTOS"}),e.jsx(d,{to:"/category/Remerasytops",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"REMERAS Y TOPS"}),e.jsx(d,{to:"/category/Pollerasyshorts",className:"text-white hover:text-zinc-200 no-underline text-base mx-5",children:"POLLERAS Y SHORTS"})]})})]}),E=({cantidad:t})=>t>0?e.jsx("span",{className:"bg-black text-white rounded-full absolute top-3 left-10 p-1 text-xs",children:t}):null,V=({src:t,title:r,price:a,onLoad:n})=>e.jsxs("article",{children:[e.jsx("img",{className:"card__imagen",src:t,onLoad:n}),e.jsx("h4",{className:"card__titulo",children:r}),e.jsxs("p",{className:"card__precio",children:["$",a]})]}),N=({greeting:t})=>{const[r,a]=h([]),[n,s]=h(!0),{categoria:c}=b();return v(()=>{const o=async()=>{try{setTimeout(async()=>{const i=await(await fetch("./src/data.json")).json(),j=c?i.filter(x=>x.categoria===c):i;a(j),s(!1)},1e3)}catch(m){console.error("Error data:",m),s(!1)}};s(!0),o()},[c]),n?e.jsx("p",{className:"loaded",children:"Cargando..."}):e.jsxs("main",{children:[e.jsx("h1",{className:"titulo__tienda",children:"TIENDA"}),e.jsx("p",{className:"text-xl text-center text-black m-2 fixed-element",children:t}),e.jsx("section",{className:"tienda",children:r.map(o=>e.jsxs("article",{className:"cards",children:[e.jsx(d,{to:`/item/${o.id}`,children:e.jsx(V,{src:o.thumbnail,title:o.nombre,price:o.precio})}),e.jsxs("div",{className:"buttons-container",children:[e.jsx(d,{to:`/item/${o.id}`,children:e.jsx("button",{className:"ver-button",children:"VER DETALLES"})}),e.jsx("button",{className:"agregar-button",children:"AGREGAR AL CARRITO"})]})]},o.id))})]})},Q=()=>{const{itemId:t}=b(),[r,a]=h(null),[n,s,,c]=h(1),o=async x=>{try{const I=(await(await fetch("/src/data.json")).json()).find(R=>R.id===x);a(I)}catch(y){console.error("Error al obtener los detalles del producto:",y)}};v(()=>{o(t)},[t]);const m=()=>{s(n+1)},i=()=>{n>1&&s(n-1)},j=()=>{const x={...r,cantidad:n};c(x)};return e.jsx("div",{className:"items",children:r&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:r.thumbnail,alt:r.nombre,className:"item-image"}),e.jsxs("div",{className:"item-details",children:[e.jsx("p",{className:"item-text",children:r.nombre}),e.jsxs("p",{className:"item-text",children:["Color:",r.color]}),e.jsxs("p",{className:"item-text",children:["Talles:",r.talle]}),e.jsxs("p",{className:"item-precio",children:["$",r.precio]})]}),e.jsxs("div",{className:"quantity-selector",children:[e.jsx("button",{className:"quantity-button",onClick:i,children:"-"}),e.jsx("span",{children:n}),e.jsx("button",{className:"quantity-button",onClick:m,children:"+"})]}),e.jsx("button",{className:"add-to-cart-button",onClick:j,children:"Agregar al carrito"}),e.jsx(E,{cantidad:n})]})})};function U(){return e.jsx(L,{children:e.jsxs(e.Fragment,{children:[e.jsx(G,{}),e.jsx(E,{}),e.jsxs(P,{children:[e.jsx(g,{path:"/",element:e.jsx(N,{greeting:"¡Bienvenido a nuestra tienda!"})}),e.jsx(g,{path:"/category/:categoria",element:e.jsx(N,{})}),e.jsx(g,{path:"/item/:itemId",element:e.jsx(Q,{})})]})]})})}S.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(U,{})}));