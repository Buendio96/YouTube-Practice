!function(){"use strict";var t={91:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},426:function(t,e,n){t.exports=n.p+"eed48320266c62e74f2f.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,n),c.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href,function(){var t=n(91),e=n.n(t),r=new URL(n(426),n.b);e()(r);const o=document.getElementById("nameInput"),c=document.getElementById("nameWelcome");let i;const u=(t,e)=>clearTimeout(i)||(i=setTimeout(t,e)),a=(t,e,n=0)=>{if(e.textContent=t.slice(0,n),n<t.length){const r=Math.floor(281*Math.random()+20);u((()=>a(t,e,n+1)),r)}};o.addEventListener("input",(t=>{t.preventDefault(),u((()=>{const t=o.value.trim(),e=t.charAt(0).toUpperCase()+t.slice(1);""===t?c.textContent="":a(`Welcome ${e}, I hope you feel good and still go to your goal`,c)}),1500)}))}()}();