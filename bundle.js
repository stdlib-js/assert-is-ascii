// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isASCII=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;var c=r,f=function(t,e,r){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&a&&a.call(t,e,r.set),t},p=e()?c:f;var y=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var b=function(t){return"string"==typeof t};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var s=function(){return v&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,d=_;var g=function(t){return d.call(t)},m=Object.prototype.hasOwnProperty;var j=function(t,e){return null!=t&&m.call(t,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",h=j,w=S,O=_;var P=g,T=function(t){var e,r,n;if(null==t)return O.call(t);r=t[w],e=h(t,w);try{t[w]=void 0}catch(e){return O.call(t)}return n=O.call(t),e?t[w]=r:delete t[w],n},A=s()?T:P,x=String.prototype.valueOf;var C=A,E=function(t){try{return x.call(t),!0}catch(t){return!1}},k=s();var G=function(t){return"object"==typeof t&&(t instanceof String||(k?E(t):"[object String]"===C(t)))},I=b,V=G;var F=y,q=function(t){return I(t)||V(t)},z=G;F(q,"isPrimitive",b),F(q,"isObject",z);var B=q.isPrimitive;return function(t){var e,r;if(!B(t))return!1;if(!(e=t.length))return!1;for(r=0;r<e;r++)if(t.charCodeAt(r)>127)return!1;return!0}}));
//# sourceMappingURL=bundle.js.map
