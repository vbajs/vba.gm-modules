parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,r,t=require("@goosemod/patcher"),n=a(require("@goosemod/webpack"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(t,a,s):t[a]=e[a]}return t.default=e,r&&r.set(e,t),t}var s={goosemodHandlers:{onImport:function(){e=n.findByProps("sendMessage"),t.commands.add("annoiler","Makes you send messages with spoilers around every single character.",function(t){return a=t.message[0].text,o=a=a.split("").map(function(e){return"||".concat(e,"||")}).join(""),r=n.findByProps("getChannelId").getChannelId()+"",void e.sendMessage(r,{content:o});var o,a},[{name:"message",type:3,required:!0}])},onRemove:function(){t.commands.remove("annoiler")}}};exports.default=s;
},{"@goosemod/patcher":"../../../../moduleWrappers/goosemod/patcher.js","@goosemod/webpack":"../../../../moduleWrappers/goosemod/webpack.js"}]},{},["index.js"], null);parcelRequire('index.js').default