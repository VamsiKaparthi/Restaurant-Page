(()=>{var n={264:n=>{!function(n,e,t,r,i){if("customElements"in t)i();else{if(t.AWAITING_WEB_COMPONENTS_POLYFILL)return void t.AWAITING_WEB_COMPONENTS_POLYFILL.then(i);var a=t.AWAITING_WEB_COMPONENTS_POLYFILL=c();a.then(i);var o=t.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",s=t.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in t?l(o).then((function(){a.isDone=!0,a.exec()})):l(s).then((function(){l(o).then((function(){a.isDone=!0,a.exec()}))}))}function c(){var n=[];return n.isDone=!1,n.exec=function(){n.splice(0).forEach((function(n){n()}))},n.then=function(e){return n.isDone?e():n.push(e),n},n}function l(n){var e=c(),t=r.createElement("script");return t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,e.isDone=!0,e.exec())}:t.onload=function(){e.isDone=!0,e.exec()},t.src=n,r.getElementsByTagName("head")[0].appendChild(t),t.then=e.then,t}}(0,0,window,document,(function(){var e;window,e=function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t,r=n[1]||"",i=n[3];if(!i)return r;if(e&&"function"==typeof btoa){var a=(t=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"),o=i.sources.map((function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"}));return[r].concat(o).concat([a]).join("\n")}return[r].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<n.length;i++){var o=n[i];"number"==typeof o[0]&&r[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),e.push(o))}},e}},function(n,e,t){var r=t(3);n.exports="string"==typeof r?r:r.toString()},function(n,e,t){var r=t(4);n.exports="string"==typeof r?r:r.toString()},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(n,e,t){"use strict";t.r(e),t.d(e,"BoxIconElement",(function(){return y}));var r,i,a,o,s=t(1),c=t.n(s),l=t(2),d=t.n(l),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),u=(i=(r=Object).getPrototypeOf||function(n){return n.__proto__},a=r.setPrototypeOf||function(n,e){return n.__proto__=e,n},o="object"===("undefined"==typeof Reflect?"undefined":f(Reflect))?Reflect.construct:function(n,e,t){var r,i=[null];return i.push.apply(i,e),r=n.bind.apply(n,i),a(new r,t.prototype)},function(n){var e=i(n);return a(n,a((function(){return o(e,arguments,i(this).constructor)}),e))}),m=window,g={},v=document.createElement("template"),h=function(){return!!m.ShadyCSS};v.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+c.a+"\n"+d.a+'\n</style>\n<div id="icon"></div>';var y=u(function(n){function e(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.$ui=n.attachShadow({mode:"open"}),n.$ui.appendChild(n.ownerDocument.importNode(v.content,!0)),h()&&m.ShadyCSS.styleElement(n),n._state={$iconHolder:n.$ui.getElementById("icon"),type:n.getAttribute("type")},n}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,HTMLElement),p(e,null,[{key:"getIconSvg",value:function(n,e){var t=this.cdnUrl+"/regular/bx-"+n+".svg";return"solid"===e?t=this.cdnUrl+"/solid/bxs-"+n+".svg":"logo"===e&&(t=this.cdnUrl+"/logos/bxl-"+n+".svg"),t&&g[t]||(g[t]=new Promise((function(n,e){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?e(new Error(this.status+" "+this.responseText)):n(this.responseText)})),r.onerror=e,r.onabort=e,r.open("GET",t),r.send()}))),g[t]}},{key:"define",value:function(n){n=n||this.tagName,h()&&m.ShadyCSS.prepareTemplate(v,n),customElements.define(n,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),p(e,[{key:"attributeChangedCallback",value:function(n,e,t){var r=this._state.$iconHolder;switch(n){case"type":!function(n,e,t){var r=n._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!t||"solid"!==t&&"logo"!==t?"regular":t,void 0!==r.currentName&&n.constructor.getIconSvg(r.currentName,r.type).then((function(n){r.type===t&&(r.$iconHolder.innerHTML=n)})).catch((function(n){console.error("Failed to load icon: "+r.currentName+"\n"+n)}))}(this,0,t);break;case"name":!function(n,e,t){var r=n._state;r.currentName=t,r.$iconHolder.textContent="",t&&void 0!==r.type&&n.constructor.getIconSvg(t,r.type).then((function(n){r.currentName===t&&(r.$iconHolder.innerHTML=n)})).catch((function(n){console.error("Failed to load icon: "+t+"\n"+n)}))}(this,0,t);break;case"color":r.style.fill=t||"";break;case"size":!function(n,e,t){var r=n._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),t&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=t.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,t);break;case"rotate":e&&r.classList.remove("bx-rotate-"+e),t&&r.classList.add("bx-rotate-"+t);break;case"flip":e&&r.classList.remove("bx-flip-"+e),t&&r.classList.add("bx-flip-"+t);break;case"animation":e&&r.classList.remove("bx-"+e),t&&r.classList.add("bx-"+t)}}},{key:"connectedCallback",value:function(){h()&&m.ShadyCSS.styleElement(this)}}]),e}());e.default=y,y.define()}])},n.exports=e()}))},957:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,"body{\n    background-color: #FEFEDF;\n    font-family: sans-serif;\n    margin: 20px;\n}\n.header{\n    display: flex;\n    \n    top: 0px;\n    /* gap: 50%; */\n    align-items: center;\n    justify-content: space-between;\n    font-size: 25px;\n    padding-left: 5%;\n    padding-right: 5%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.nav{\n    display: grid;\n    grid-template-columns: repeat(4,minmax(60px,100px));\n    text-align: center;\n}\n.logo{\n    display: flex;\n    align-items: center;\n    font-size: 50px;\n    gap: 5px;\n    font-weight: 600;\n    /* margin-left: 5%; */\n}\nbox-icon{\n    height: 90px;\n    width: 90px;\n}\n.nav>span:hover{\n    color:#015e4e;\n    cursor: pointer;\n}\n.info{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding-left: 5%;\n    padding-right: 5%;\n    gap:max(15px,5%);\n}\n.slogan{\n    color:#01705e;\n    display: flex;\n    height: 90vh;\n    font-size: 5vw;\n    flex-direction: column;\n    align-items: center;\n    font-weight: 700;\n    gap: max(20px,5%);\n    padding-top: 10%;\n}\n.special{\n    display: flex;\n    background-color: rgb(255, 230, 0);\n    border-radius: 10px;\n    padding: max(40px,10%);\n    font-size: max(20px,1.3vw);\n    color: #015e4e;\n    font-weight: 600;\n    flex-direction: column;\n    gap: 10px; \n    height: min(50vw,1050px);\n}\n\n.baguette{\n    display: inline-block;\n    margin-top: 100px;\n    width:100%;\n    height: auto;\n}\n.reviews{\n    display: grid;\n    font-size: 20px;\n    color: black;\n    grid-template-columns: 2fr 1fr;\n    align-content: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: max(2vw,100px);\n}\n.reviews>box-icon{\n    width: 100%;\n    height: auto;\n}\n.review-content{\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}",""]);const s=o},950:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,".menu{\n   display: grid;\n   grid-template-rows:100vh;\n   font-family: sans-serif;  \n}\n.Appetizers{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 8fr;\n}\n.head{\n    grid-row: 1/2;\n    grid-column: 1/3;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: max(50px,3vw);\n    font-weight: 500;\n}\n.items{\n    grid-row: 2/3;\n    grid-column: 1/3;\n    \n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: start;\n\n}\n.card{\n    padding: max(10px,2%);\n    width: min(40%,680px);\n    background-color: rgb(255, 255, 255);\n    border-radius: 30px;\n    display: flex;\n    border: 2px solid #01705e;\n    justify-content: center;\n    gap: max(30px,5%);\n}\n.item-title{\n    font-size: max(30px,1.8vw);\n    font-weight: 550;\n}\n.protein{\n    margin-top: 4%;\n    font-size: max(20px,1.1vw);\n}\n.cost{\n    font-size: max(25px,1.3vw);\n    margin-top: 25%;\n    margin-left: 85%;\n    color: #01705e;\n    align-content: center;\n}\nimg{\n    border-radius: 10%;\n}",""]);const s=o},825:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,".service{\n    display: grid;\n    height: 65vh;\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\n    justify-content: center;\n    align-items: start;\n    margin-top: 5%;\n    font-family: sans-serif;\n    font-weight: 700;\n}\n.service>div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n",""]);const s=o},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,f="".concat(l," ").concat(d);a[l]=d+1;var p=t(f),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=i(u,r);r.byIndex=s,e.splice(s,0,{identifier:f,updater:m,references:1})}o.push(f)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var c=r(n,i),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!n;)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),i=t.n(r),a=t(569),o=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),f=t(589),p=t.n(f),u=t(950),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;var g=t(957),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=o().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),e()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,t(264);var h=t(825),y={};y.styleTagTransform=p(),y.setAttributes=c(),y.insert=o().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d(),e()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const b=t.p+"83e62587d4f1e674bcc3.png",x=n=>{console.log("hi"),n.innerHTML=`\n        <div class="info">\n            <div class="slogan">\n                <span>Eat Train Conquer. Fuel your victory.</span>\n                <span style="color:black;font-size: max(20px,1vw); font-weight: 540;">Welcome to EatFit, where fitness meets culinary delight. Enjoy a menu crafted with the perfect blend of nourishing ingredients and mouthwatering flavors.</span>\n                <span class="reviews">\n                    <span class="review-content">\n                        <span style="font-size: 3vw;">The Taste Tribunal</span>\n                        <span style="font-size: max(1vw,20px); font-weight: 400;">"A harmonious fusion of fitness and flavors, this gym restaurant delights with nourishing cuisine and a vibrant ambiance, leaving patrons energized and satisfied."</span>\n                    </span>\n                    <box-icon name='news' ></box-icon> \n                    \n                </span>\n            </div>\n            <div class="special">\n                <span>Today's special</span>\n                <span style="font-size: max(25px,2.8vw);">FitBurger Deluxe</span>\n                <img style="width:100%; margin-top:100px;justify-self: flex-end;"src="${b}">\n            </div>\n        </div>`},w=t.p+"fc481c5eef1e892340ba.jpg",k=t.p+"3b1493f6498c680d191b.jpg",S=t.p+"56be57ff42b2860c776a.jpg",T=t.p+"f5cddc2f7bbfd84f62b3.jpg",j=t.p+"4a32a245be6bd981f468.jpg",E=t.p+"f776c85eb2efa86621fc.jpeg",z=t.p+"d8993bf262c43327dc3d.jpg",_=t.p+"dcd120cb0ed402eaac87.jpg",I=t.p+"af65199f1dcc1b6f8248.jpg",L=t.p+"70841d3c571d6f2f1c3f.jpg";document.getElementById("content").innerHTML='<div class="header">\n        <div class="logo"><box-icon name=\'dumbbell\'></box-icon>EatFit</div>\n        <div class="nav">\n            <span id="home">Home</span>\n            <span id="menu">Menu</span>\n            <span id="services">Services</span>\n            <span id="team">Team</span>\n        </div>\n    </div>\n    <div id="generate"></div>';let O=document.getElementById("generate");x(O),document.getElementById("home").addEventListener("click",(()=>{x(O)})),document.getElementById("menu").addEventListener("click",(()=>{(n=>{console.log("hello"),n.innerHTML=`\n            <div class="menu">\n                <div class="Appetizers">\n                    <span class="head">Main-Menu</span>\n                    <span class="items">\n                        <div class="card">\n                            <img src="${k}" alt="chicken" style="width:45%; height:auto;">\n                            <div>\n                                <div class="item-title">BBQ Chicken Salad</div>\n                                <div class="protein">Protein: 35g<br>Calories: 450</div>\n                                <div class="cost">20$</div>\n                            </div>\n                        </div>\n                        <div class="card">\n                            <img src="${S}" alt="paneer" style="width:45%; height:auto;">\n                            <div>\n                                <div class="item-title">Spicy Paneer Tikka</div>\n                                <div class="protein">Protein: 25g<br>Calories: 280</div>\n                                <div class="cost">10$</div>\n                            </div>\n                        </div>\n                        <div class="card">\n                            <img src="${E}" alt="pizza" style="width:45%; height:auto;">\n                            <div>\n                                <div class="item-title">Veg Pizza Squares</div>\n                                <div class="protein">Protein: 15g<br>Calories: 400</div>\n                                <div class="cost">14$</div>\n                            </div>\n                        </div>\n                        <div class="card">\n                            <img src="${w}" alt="egg" style="width:45%; height:auto;">\n                            <div>\n                                <div class="item-title">Tasty Egg White Bites</div>\n                                <div class="protein">Protein: 22g<br>Calories: 180</div>\n                                <div class="cost">10$</div>\n                            </div>\n                        </div>\n                        <div class="card">\n                            <img src="${j}" alt="turkey" style="width:45%; height:auto;">\n                            <div>\n                                <div class="item-title">Turkey Spring Rolls</div>\n                                <div class="protein">Protein: 33.5g<br>Calories: 400</div>\n                                <div class="cost">10$</div>\n                            </div>\n                        </div>\n                        <div class="card">\n                            <img src="${T}" alt="chips" style="width:45%; height:auto;">\n                            <div>\n                                <div class="item-title">Crispy Tortoilla Chips</div>\n                                <div class="protein">Protein: 9g<br>Calories: 100</div>\n                                <div class="cost">10$</div>\n                            </div>\n                        </div>\n                    </span>\n                </div>\n            </div>`})(O)})),document.getElementById("services").addEventListener("click",(()=>{(n=>{console.log("service"),n.innerHTML=`\n    <div style="color:#01705e; display: flex; justify-content: center; font-size: max(70px,5vw);">Our Multiple Services</div>\n    <div style="display: flex;font-weight:550; font-size:max(20px,1vw); color: rgb(4, 29, 4); text-align: center;margin-left: 10%; margin-right: 10%; margin-top: 2%;">Discover our wide range of personalized services designed to support your health and fitness journey. From customized meal plans tailored to your dietary needs to expert nutrition guidance and fitness consultations, our team of professionals is dedicated to helping you achieve your goals. Experience the power of nourishing your body with wholesome, flavorful meals and let us be your partner in embracing a healthier lifestyle.</div>\n    <div class="service">\n        <div class="dining">\n            <img src="${z}" alt="dining" width="60%" height="auto">\n            <span style="margin-top: 20px;font-size: min(3vw,25px);">Dining</span>\n        </div>\n        <div class="delivery">\n            <img src="${_}" alt="delivery" width="60%" height="auto">\n            <span style="margin-top: 20px;font-size: min(3vw,25px);">Fast Delivery</span>\n        </div>\n        \n        <div class="party">\n            <img src="${L}" alt="party" width="60%" height="auto">\n            <span style="margin-top: 20px;font-size: min(3vw,25px);">Catering Service</span>\n        </div>\n        <div class="band">\n            <img src="${I}" alt="band" width="60%" height="auto">\n            <span style="margin-top: 20px;font-size: min(3vw,25px);">Live Band</span>\n        </div>\n    </div>`})(O)}))})()})();