var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire3e00;null==r&&((r=e=>{if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=(e,t)=>{n[e]=t},e.parcelRequire3e00=r),r.register("26Rbl",(function(e,t){function n(e,t){return t&&`${t}::${O++}`||e.uidEvent||O++}function r(e){const t=n(e);return e.uidEvent=t,T[t]=T[t]||{},T[t]}function s(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function i(e,t,n){const r="string"==typeof t,s=r?n:t||n;let i=c(e);return S.has(i)||(i=e),[r,s,i]}function o(e,t,o,l,a){if("string"!=typeof t||!e)return;let[c,f,g]=i(t,o,l);var d;t in D&&(d=f,f=function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return d.call(this,e)});const h=r(e),p=h[g]||(h[g]={}),m=s(p,f,c?o:null);if(m)return void(m.oneOff=m.oneOff&&a);const _=n(f,t.replace(E,"")),b=c?function(e,t,n){return function r(s){const i=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const l of i)if(l===o)return u(s,{delegateTarget:o}),r.oneOff&&N.off(e,s.type,t,n),n.call(o,s)}}(e,o,f):((e,t)=>function n(r){return u(r,{delegateTarget:e}),n.oneOff&&N.off(e,r.type,t),t.call(e,r)})(e,f);b.delegationSelector=c?o:null,b.callable=f,b.oneOff=a,b.uidEvent=_,p[_]=b,e.addEventListener(g,b,c)}function l(e,t,n,r,i){const o=s(t[n],r,i);!o||(e.removeEventListener(n,o,!!i),delete t[n][o.uidEvent])}function a(e,t,n,r){const s=t[n]||{};for(const i of Object.keys(s))if(i.includes(r)){const r=s[i];l(e,t,n,r.callable,r.delegationSelector)}}function c(e){return e=e.replace(C,""),D[e]||e}function u(e,t){for(const[n,r]of Object.entries(t||{}))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}function f(e){if("true"===e)return!0;if("false"===e)return!1;if(e===""+ +e)return+e;if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function g(e){return e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase()))}const d="transitionend",h=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},p=e=>{const t=h(e);return t&&document.querySelector(t)?t:null},m=e=>{const t=h(e);return t?document.querySelector(t):null},_=e=>!(!e||"object"!=typeof e)&&("u">typeof e.jquery&&(e=e[0]),"u">typeof e.nodeType),b=e=>_(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,y=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,v=[],A=e=>{"function"==typeof e&&e()},E=/[^.]*(?=\..*)\.|.*/,C=/\..*/,w=/::\d+$/,T={};let O=1;const D={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]),N={on(e,t,n,r){o(e,t,n,r,!1)},one(e,t,n,r){o(e,t,n,r,!0)},off(e,t,n,s){if("string"!=typeof t||!e)return;const[o,c,u]=i(t,n,s),f=u!==t,g=r(e),d=g[u]||{},h=t.startsWith(".");if("u">typeof c){if(!Object.keys(d).length)return;l(e,g,u,c,o?n:null)}else{if(h)for(const n of Object.keys(g))a(e,g,n,t.slice(1));for(const n of Object.keys(d)){const r=n.replace(w,"");if(!f||t.includes(r)){const t=d[n];l(e,g,u,t.callable,t.delegationSelector)}}}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const r=y();let s=null,i=!0,o=!0,l=!1;t!==c(t)&&r&&(s=r.Event(t,n),r(e).trigger(s),i=!s.isPropagationStopped(),o=!s.isImmediatePropagationStopped(),l=s.isDefaultPrevented());let a=new Event(t,{bubbles:i,cancelable:!0});return a=u(a,n),l&&a.preventDefault(),o&&e.dispatchEvent(a),a.defaultPrevented&&s&&s.preventDefault(),a}},L={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>e+':not([tabindex^="-"])')).join(",");return this.find(t,e).filter((e=>!(e=>!(e&&e.nodeType===Node.ELEMENT_NODE&&!e.classList.contains("disabled"))||("u">typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")))(e)&&(e=>{if(!_(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n||null===t)return!1}return t})(e)))}},j=new Map,k={set(e,t,n){j.has(e)||j.set(e,new Map);const r=j.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get:(e,t)=>j.has(e)&&j.get(e).get(t)||null,remove(e,t){if(!j.has(e))return;const n=j.get(e);n.delete(t),0===n.size&&j.delete(e)}},x={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+g(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+g(t))},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=f(e.dataset[r])}return t},getDataAttribute:(e,t)=>f(e.getAttribute("data-bs-"+g(t)))},M="show",q="collapse",I="collapsing",$='[data-bs-toggle="collapse"]',P={parent:null,toggle:!0},Y={parent:"(null|element)",toggle:"boolean"};class F extends class extends class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=_(t)?x.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},..._(t)?x.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const r of Object.keys(t)){const s=t[r],i=e[r],o=_(i)?"element":null==(n=i)?""+n:{}.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${s}".`)}var n}}{dispose(){k.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){((e,t,n=!0)=>{if(!n)return void A(e);const r=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),s=Number.parseFloat(n);return r||s?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let s=!1;const i=({target:n})=>{n===t&&(s=!0,t.removeEventListener(d,i),A(e))};t.addEventListener(d,i),setTimeout((()=>{s||(e=>{e.dispatchEvent(new Event(d))})(t)}),r)})(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return k.get(b(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.2.0"}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}static eventName(e){return`${e}${this.EVENT_KEY}`}constructor(e,t){super(),(e=b(e))&&(this._element=e,this._config=this._getConfig(t),k.set(this._element,this.constructor.DATA_KEY,this))}}{static get Default(){return P}static get DefaultType(){return Y}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>F.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning||N.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove(q),this._element.classList.add(I),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n="scroll"+(t[0].toUpperCase()+t.slice(1));this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(I),this._element.classList.add(q,M),this._element.style[t]="",N.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[t]=this._element[n]+"px"}hide(){if(this._isTransitioning||!this._isShown()||N.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",this._element.classList.add(I),this._element.classList.remove(q,M);for(const e of this._triggerArray){const t=m(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(I),this._element.classList.add(q),N.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(e=this._element){return e.classList.contains(M)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=b(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren($);for(const t of e){const e=m(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=L.find(":scope .collapse .collapse",this._config.parent);return L.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=F.getOrCreateInstance(this,t);if("string"==typeof e){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}}))}constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=L.find($);for(const e of n){const t=p(e),n=L.find(t).filter((e=>e===this._element));null!==t&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}}var K;N.on(document,"click.bs.collapse.data-api",$,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=p(this),n=L.find(t);for(const e of n)F.getOrCreateInstance(e,{toggle:!1}).toggle()})),K=F,(e=>{"loading"===document.readyState?(v.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of v)e()})),v.push(e)):e()})((()=>{const e=y();if(e){const t=K.NAME,n=e.fn[t];e.fn[t]=K.jQueryInterface,e.fn[t].Constructor=K,e.fn[t].noConflict=()=>(e.fn[t]=n,K.jQueryInterface)}}))}));