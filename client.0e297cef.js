import{b as u,e as h,h as b,f as m}from"./chunks/web.a4f1278f.js";var y=r=>(n,s,o,{client:a})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!r.hasAttribute("ssr"))return;const d=a==="only"?h:b;let t={};if(Object.keys(o).length>0)if(u.context)r.querySelectorAll("astro-slot").forEach(e=>{t[e.getAttribute("name")||"default"]=e.cloneNode(!0)});else for(const[e,c]of Object.entries(o))t[e]=document.createElement("astro-slot"),e!=="default"&&t[e].setAttribute("name",e),t[e].innerHTML=c;const{default:l,...f}=t,i=r.dataset.solidRenderId;d(()=>m(n,{...s,...f,children:l}),r,{renderId:i})};export{y as default};
