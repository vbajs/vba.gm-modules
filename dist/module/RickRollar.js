parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../../moduleWrappers/goosemod/settings.js":[function(require,module,exports) {
module.exports=goosemodScope.settings;
},{}],"goosemodModule.json":[function(require,module,exports) {
module.exports={main:"index.js",name:"RickRollar",description:"Turns every video into a rickroll",tags:["Fun"],authors:["247403343742369794"],version:"1.0.1"};
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("@goosemod/webpack")),t=require("@goosemod/patcher"),r=require("@goosemod/settings"),o=require("./goosemodModule.json");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}var a=e.find(function(e){return e.type&&"MessageContent"===e.type.displayName}),u={VIDEO_URL:"https://cdn.discordapp.com/attachments/858899085159563265/860672912062939166/rickrolledin4k.mp4"},c={goosemodHandlers:{onImport:function(){(0,t.inject)("rickastley",a,"type",function(){for(var e=document.getElementsByTagName("video"),t=0;t<e.length;t++){var r=e[t];!r.getAttribute("src").includes(".gif")&&r.getAttribute("src").startsWith("https://media.tenor.co/videos")||r.getAttribute("src")!=u.VIDEO_URL&&r.setAttribute("src",u.VIDEO_URL)}}),(0,r.createItem)("RickRollar",[o.version,{type:"header",text:"Direct streamable URL of the video to replace all videos with (Default is 4K60fps rickroll)"},{type:"text-input",text:"VIDEO URL",initialValue:function(){return u.VIDEO_URL},oninput:function(e){u.VIDEO_URL=e}}])},onRemove:function(){(0,t.uninject)("rickastley"),(0,r.removeItem)("RickRollar")}}};exports.default=c;
},{"@goosemod/webpack":"../../../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../../../moduleWrappers/goosemod/patcher.js","@goosemod/settings":"../../../../moduleWrappers/goosemod/settings.js","./goosemodModule.json":"goosemodModule.json"}]},{},["index.js"], null);parcelRequire('index.js').default