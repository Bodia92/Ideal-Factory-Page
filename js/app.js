(()=>{var e,t,r,n,i={365:(e,t,r)=>{"use strict"},722:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n={id:"arrow-next-usage",viewBox:"0 0 14 14",url:"/images/sprite/sprite.svg#arrow-next-usage",toString:function(){return this.url}}},645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n={id:"arrow-prev-usage",viewBox:"0 0 14 14",url:"/images/sprite/sprite.svg#arrow-prev-usage",toString:function(){return this.url}}},387:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n={id:"slider_arrow_next-usage",viewBox:"0 0 5 9",url:"/images/sprite/sprite.svg#slider_arrow_next-usage",toString:function(){return this.url}}},395:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n={id:"slider_arrow_prev-usage",viewBox:"0 0 5 9",url:"/images/sprite/sprite.svg#slider_arrow_prev-usage",toString:function(){return this.url}}},543:(e,t,r)=>{var n={"./arrow-next.svg":722,"./arrow-prev.svg":645,"./slider_arrow_next.svg":387,"./slider_arrow_prev.svg":395};function i(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=543},488:(e,t,r)=>{var n={"./IndexPage":[957,26,957],"./IndexPage.js":[957,26,957]};function i(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(i)))}i.keys=()=>Object.keys(n),i.id=488,e.exports=i}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return i[e](r,r.exports,a),r.exports}a.m=i,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"js/"+e+".js",a.miniCssF=e=>"css/"+e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="glivera-webpack-template:",a.l=(r,n,i,o)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../"})(),r=e=>new Promise(((t,r)=>{var n=a.miniCssF(e),i=a.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var i=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var a;if((i=(a=o[n]).getAttribute("data-href"))===e||i===t)return a}})(n,i))return t();((e,t,r,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=o=>{if(i.onerror=i.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,i.parentNode.removeChild(i),n(l)}},i.href=t,document.head.appendChild(i)})(e,i,t,r)})),n={143:0},a.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&{957:1}[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={143:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=i);var o=a.p+a.u(t),s=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,i,[o,s,l]=r,u=0;if(o.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)l(a)}for(t&&t(r);u<o.length;u++)i=o[u],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkglivera_webpack_template=self.webpackChunkglivera_webpack_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=/iPhone/i,t=/iPod/i,r=/iPad/i,n=/\biOS-universal(?:.+)Mac\b/i,i=/\bAndroid(?:.+)Mobile\b/i,o=/Android/i,s=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,l=/Silk/i,u=/Windows Phone/i,c=/\bWindows(?:.+)ARM\b/i,d=/BlackBerry/i,p=/BB10/i,f=/Opera Mini/i,h=/\b(CriOS|Chrome)(?:.+)Mobile/i,v=/Mobile(?:.+)Firefox\b/i,g=function(e){return void 0!==e&&"MacIntel"===e.platform&&"number"==typeof e.maxTouchPoints&&e.maxTouchPoints>1&&"undefined"==typeof MSStream};function m(e,t){var r;return function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];r&&clearTimeout(r),r=setTimeout((function(){t.apply(void 0,i),r=null}),e)}}var b=function(){var a=function(a){var m={userAgent:"",platform:"",maxTouchPoints:0};a||"undefined"==typeof navigator?"string"==typeof a?m.userAgent=a:a&&a.userAgent&&(m={userAgent:a.userAgent,platform:a.platform,maxTouchPoints:a.maxTouchPoints||0}):m={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var b=m.userAgent,w=b.split("[FBAN");void 0!==w[1]&&(b=w[0]),void 0!==(w=b.split("Twitter"))[1]&&(b=w[0]);var y=function(e){return function(t){return t.test(e)}}(b),k={apple:{phone:y(e)&&!y(u),ipod:y(t),tablet:!y(e)&&(y(r)||g(m))&&!y(u),universal:y(n),device:(y(e)||y(t)||y(r)||y(n)||g(m))&&!y(u)},amazon:{phone:y(s),tablet:!y(s)&&y(l),device:y(s)||y(l)},android:{phone:!y(u)&&y(s)||!y(u)&&y(i),tablet:!y(u)&&!y(s)&&!y(i)&&(y(l)||y(o)),device:!y(u)&&(y(s)||y(l)||y(i)||y(o))||y(/\bokhttp\b/i)},windows:{phone:y(u),tablet:y(c),device:y(u)||y(c)},other:{blackberry:y(d),blackberry10:y(p),opera:y(f),firefox:y(v),chrome:y(h),device:y(d)||y(p)||y(f)||y(v)||y(h)},any:!1,phone:!1,tablet:!1};return k.any=k.apple.device||k.android.device||k.windows.device||k.other.device,k.phone=k.apple.phone||k.android.phone||k.windows.phone,k.tablet=k.apple.tablet||k.android.tablet||k.windows.tablet,k}(),m=a.apple.phone,b=a.android.phone,w=a.seven_inch;if(m||b||w){var y=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(y,"px"))}};function w(e){return e instanceof Function}a(365);function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=this.init.bind(this),this.init()}var t,r,n;return t=e,(r=[{key:"loadFunc",value:function(){console.log("layout load"),b()}},{key:"init",value:function(){!function(e){if(e||w(e)){var t=function(){e()};window.addEventListener("resize",m(15,t)),t()}}((function(){b()})),this.loadFunc()}}])&&y(t.prototype,r),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var x,T,_=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$htmlTag=document.querySelector("html"),this.pageClass=this.$htmlTag.dataset.templateName&&this.$htmlTag.dataset.templateName.length>0?this.$htmlTag.dataset.templateName:null,this.init=this.init.bind(this),this.init()}var t,r,n;return t=e,(r=[{key:"importPage",value:function(){this.pageClass&&null!==this.pageClass&&a(488)("./".concat(this.pageClass)).then((function(e){(new(0,e.default)).init()})).catch((function(e){console.error("Failed to load page, check data-template-name at root if correct"),console.dir(e,e.stack)}))}},{key:"init",value:function(){var e=this;new k,setTimeout((function(){e.importPage()}),0)}}])&&P(t.prototype,r),n&&P(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=["color: #fff","background: #cf8e1f"].join(";");console.info("%c%s",C,"Developed by Glivera-team https://glivera-team.com/"),(x=a(543)).keys().forEach(x),((T=function(){new _})||w(T))&&document.addEventListener("DOMContentLoaded",T)})()})();