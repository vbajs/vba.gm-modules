parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../../moduleWrappers/goosemod/settings.js":[function(require,module,exports) {
module.exports=goosemodScope.settings;
},{}],"goosemodModule.json":[function(require,module,exports) {
module.exports={main:"index.js",name:"RickRollar",description:"Turns every video into a rickroll",tags:["Fun"],authors:["247403343742369794"],version:"1.0.4.1"};
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("@goosemod/webpack")),e=require("@goosemod/patcher"),r=require("@goosemod/settings"),n=require("./goosemodModule.json");function o(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(o=function(t){return t?r:e})(t)}function a(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=o(e);if(r&&r.has(t))return r.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var u=a?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=t[i]}return n.default=t,r&&r.set(t,n),n}function i(t,e){return f(t)||s(t,e)||l(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}function f(t){if(Array.isArray(t))return t}var p=t.find(function(t){return t.type&&"MessageContent"===t.type.displayName}),d={VIDEO_URL:"https://cdn.discordapp.com/attachments/858899085159563265/860672912062939166/rickrolledin4k.mp4",YT_EMBED_URL:"https://www.youtube.com/embed/o-YBDTqX_ZU"},y={goosemodHandlers:{onImport:function(){(0,e.inject)("rickastley",p,"type",function(){for(var t=document.querySelectorAll("[class*='video']"),e=0;e<t.length;e++){var r=t[e];r.getAttribute("src")!=d.VIDEO_URL&&r.setAttribute("src",d.VIDEO_URL)}for(var n=document.getElementsByTagName("iframe"),o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("src");i.startsWith("https://www.youtube.com")&&i!=d.YT_EMBED_URL+"?autoplay=1&auto_play=1"&&a.setAttribute("src",d.YT_EMBED_URL+"?autoplay=1&auto_play=1")}}),(0,r.createItem)("RickRollar",[n.version,{type:"header",text:"Direct streamable URL of the video to replace all videos with."},{type:"text-input",text:"VIDEO URL",initialValue:function(){return d.VIDEO_URL},oninput:function(t){d.VIDEO_URL=t}},{type:"header",text:"Youtube video embed URL to replace all youtube embeds. (To get emebed link, just click share>embed and copy the yt link in the src tag)"},{type:"text-input",text:"YT EMBED URL",initialValue:function(){return d.YT_EMBED_URL},oninput:function(t){d.YT_EMBED_URL=t}}])},getSettings:function(){return[d]},loadSettings:function(t){var e=i(t,1)[0];d=e},onRemove:function(){(0,e.uninject)("rickastley"),(0,r.removeItem)("RickRollar")}}};exports.default=y;
},{"@goosemod/webpack":"../../../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../../../moduleWrappers/goosemod/patcher.js","@goosemod/settings":"../../../../moduleWrappers/goosemod/settings.js","./goosemodModule.json":"goosemodModule.json"}]},{},["index.js"], null);parcelRequire('index.js').default