const r={};function q(e){r.context=e}function F(){return{...r.context,id:`${r.context.id}${r.context.count++}-`,count:0}}let G=M;const b=1,A=2,U={owned:null,cleanups:null,context:null,owner:null};var h=null;let x=null,g=null,a=null,y=null,v=0;function V(e,n){const t=g,s=h,i=e.length===0,o=i?U:{owned:null,cleanups:null,context:null,owner:n||s},f=i?e:()=>e(()=>E(()=>H(o)));h=o,g=null;try{return m(f,!0)}finally{g=t,h=s}}function N(e,n,t){const s=Q(e,n,!1,b);_(s)}function E(e){let n,t=g;return g=null,n=e(),g=t,n}function W(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&m(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],f=x&&x.running;f&&x.disposed.has(o),(f&&!o.tState||!f&&!o.state)&&(o.pure?a.push(o):y.push(o),o.observers&&O(o)),f||(o.state=b)}if(a.length>1e6)throw a=[],new Error},!1)),n}function _(e){if(!e.fn)return;H(e);const n=h,t=g,s=v;g=h=e,K(e,e.value,s),g=t,h=n}function K(e,n,t){let s;try{s=e.fn(n)}catch(i){e.pure&&(e.state=b),R(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?W(e,s):e.value=s,e.updatedAt=t)}function Q(e,n,t,s=b,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:h,context:null,pure:t};return h===null||h!==U&&(h.owned?h.owned.push(o):h.owned=[o]),o}function I(e){const n=x;if(e.state===0||n)return;if(e.state===A||n)return T(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<v);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===b||n)_(e);else if(e.state===A||n){const i=a;a=null,m(()=>T(e,t[0]),!1),a=i}}function m(e,n){if(a)return e();let t=!1;n||(a=[]),y?t=!0:y=[],v++;try{const s=e();return X(t),s}catch(s){a||(y=null),R(s)}}function X(e){if(a&&(M(a),a=null),e)return;const n=y;y=null,n.length&&m(()=>G(n),!1)}function M(e){for(let n=0;n<e.length;n++)I(e[n])}function T(e,n){const t=x;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===b||t?i!==n&&I(i):(i.state===A||t)&&T(i,n))}}function O(e){const n=x;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=A,s.pure?a.push(s):y.push(s),s.observers&&O(s))}}function H(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const o=i.pop(),f=t.observerSlots.pop();s<i.length&&(o.sourceSlots[f]=s,i[s]=o,t.observerSlots[s]=f)}}if(e.owned){for(n=0;n<e.owned.length;n++)H(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function J(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function R(e){throw e=J(e),e}let Y=!1;function Z(){Y=!0}function ie(e,n){if(Y&&r.context){const t=r.context;q(F());const s=E(()=>e(n||{}));return q(t),s}return E(()=>e(n||{}))}function z(e,n,t){let s=t.length,i=n.length,o=s,f=0,l=0,u=n[i-1].nextSibling,c=null;for(;f<i||l<o;){if(n[f]===t[l]){f++,l++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===f){const d=o<s?l?t[l-1].nextSibling:t[o-l]:u;for(;l<o;)e.insertBefore(t[l++],d)}else if(o===l)for(;f<i;)(!c||!c.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[o-1]&&t[l]===n[i-1]){const d=n[--i].nextSibling;e.insertBefore(t[l++],n[f++].nextSibling),e.insertBefore(t[--o],d),n[i]=t[o]}else{if(!c){c=new Map;let p=l;for(;p<o;)c.set(t[p],p++)}const d=c.get(n[f]);if(d!=null)if(l<d&&d<o){let p=f,S=1,B;for(;++p<i&&p<o&&!((B=c.get(n[p]))==null||B!==d+S);)S++;if(S>d-l){const k=n[f];for(;l<d;)e.insertBefore(t[l++],k)}else e.replaceChild(t[l++],n[f++])}else f++;else n[f++].remove()}}}const D="_$DX_DELEGATE";function ee(e,n,t){let s;return V(i=>{s=i,n===document?e():te(n,e(),n.firstChild?null:void 0,t)}),()=>{s(),n.textContent=""}}function le(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function oe(e,n=window.document){const t=n[D]||(n[D]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];t.has(o)||(t.add(o),n.addEventListener(o,j))}}function fe(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function re(e,n){n==null?e.removeAttribute("class"):e.className=n}function te(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return C(e,n,s,t);N(i=>C(e,n(),i,t),s)}function ne(e,n,t={}){r.completed=globalThis._$HY.completed,r.events=globalThis._$HY.events,r.load=globalThis._$HY.load,r.gather=i=>P(n,i),r.registry=new Map,r.context={id:t.renderId||"",count:0},P(n,t.renderId);const s=ee(e,n,[...n.childNodes]);return r.context=null,s}function ue(e){let n,t;return!r.context||!(n=r.registry.get(t=se()))?e.cloneNode(!0):(r.completed&&r.completed.add(n),r.registry.delete(t),n)}function ce(){r.events&&!r.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=r;for(n.queued=!1;n.length;){const[t,s]=n[0];if(!e.has(t))return;j(s),n.shift()}}),r.events.queued=!0)}function j(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),r.registry&&!r.done&&(r.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));t!==null;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function C(e,n,t,s,i){for(r.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,f=s!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(r.context)return t;if(o==="number"&&(n=n.toString()),f){let l=t[0];l&&l.nodeType===3?l.data=n:l=document.createTextNode(n),t=w(e,t,s,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(r.context)return t;t=w(e,t,s)}else{if(o==="function")return N(()=>{let l=n();for(;typeof l=="function";)l=l();t=C(e,l,t,s)}),()=>t;if(Array.isArray(n)){const l=[],u=t&&Array.isArray(t);if($(l,n,t,i))return N(()=>t=C(e,l,t,s,!0)),()=>t;if(r.context){if(!l.length)return t;for(let c=0;c<l.length;c++)if(l[c].parentNode)return t=l}if(l.length===0){if(t=w(e,t,s),f)return t}else u?t.length===0?L(e,l,s):z(e,t,l):(t&&w(e),L(e,l));t=l}else if(n instanceof Node){if(r.context&&n.parentNode)return t=f?[n]:n;if(Array.isArray(t)){if(f)return t=w(e,t,s,n);w(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function $(e,n,t,s){let i=!1;for(let o=0,f=n.length;o<f;o++){let l=n[o],u=t&&t[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=$(e,l,u)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=$(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||i}else e.push(l),i=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function L(e,n,t){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function w(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let o=!1;for(let f=n.length-1;f>=0;f--){const l=n[f];if(i!==l){const u=l.parentNode===e;!o&&!f?u?e.replaceChild(i,l):e.insertBefore(i,t):u&&l.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}function P(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],o=i.getAttribute("data-hk");(!n||o.startsWith(n))&&!r.registry.has(o)&&r.registry.set(o,i)}}function se(){const e=r.context;return`${e.id}${e.count++}`}const ae=(...e)=>(Z(),ne(...e));export{re as a,r as b,N as c,oe as d,ee as e,ie as f,ue as g,ae as h,ce as r,fe as s,le as t};
