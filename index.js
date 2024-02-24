// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).arraybuffer2buffer=e(r.require$$0,r.require$$0$1)}(this,(function(r,e){"use strict";var t=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function i(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function c(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(o):a(o)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function l(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=c(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=c(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,y=String.prototype.replace,b=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=y.call(t,j,"$1e"),t=y.call(t,m,"e"),t=y.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=y.call(t,b,"e+0$1"),t=y.call(t,h,"e-0$1"),r.alternate&&(t=y.call(t,d,"$1."),t=y.call(t,v,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var O=String.fromCharCode,S=isNaN,T=Array.isArray;function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function L(r){var e,t,n,o,i,a,u,f,s,p,g,y,b;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,S(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(i)?String(n.arg):O(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,b=void 0,(b=g-p.length)<0?p:p=y?p+_(b):_(b)+p)),a+=n.arg||"",u+=1}return a}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){var e,t;if("string"!=typeof r)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return L.apply(null,e)}var V,G=Object.prototype,B=G.toString,F=G.__defineGetter__,$=G.__defineSetter__,R=G.__lookupGetter__,N=G.__lookupSetter__;V=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=G,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&F&&F.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var U=V;function C(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return M&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&W.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var H=X()?function(r){var e,t,n;if(null==r)return q.call(r);t=r[D],e=Y(r,D);try{r[D]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[D]=t:delete r[D],n}:function(r){return q.call(r)},J=Boolean,K=Boolean.prototype.toString;var Q=X();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function er(r){return Z(r)||rr(r)}C(er,"isPrimitive",Z),C(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,or="object"==typeof global?global:null,ir="object"==typeof globalThis?globalThis:null;function ar(r){if(arguments.length){if(!Z(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(tr)return tr;if(nr)return nr;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}var cr=ar(),ur=cr.document&&cr.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;C(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var gr=sr;function yr(r){return null!==r&&"object"==typeof r}var br=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr);function hr(r){return yr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function dr(r){var e,t,n;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return hr(r)?"Buffer":t}C(yr,"isObjectLikeArray",br);var vr="function"==typeof t||"object"==typeof fr||"function"==typeof ur?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function wr(r){return"function"===vr(r)}var mr="function"==typeof Buffer?Buffer:null;var jr,Er=r.Buffer;jr=function(){var r,e;if("function"!=typeof mr)return!1;try{r=hr(e="function"==typeof mr.from?mr.from([1,2,3,4]):new mr([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r=jr;var Or,Sr=Object,Tr=Object.getPrototypeOf;Or=wr(Object.getPrototypeOf)?Tr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ar=Or;var Lr=Object.prototype;function kr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=Sr(r),Ar(r))}(r),!e||!Y(r,"constructor")&&Y(e,"constructor")&&wr(e.constructor)&&"[object Function]"===H(e.constructor)&&Y(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===Lr||function(r){var e;for(e in r)if(!Y(r,e))return!1;return!0}(r)))}function xr(r){return"string"==typeof r}var Ir=String.prototype.valueOf;var Pr=X();function Vr(r){return"object"==typeof r&&(r instanceof String||(Pr?function(r){try{return Ir.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Gr(r){return xr(r)||Vr(r)}C(Gr,"isPrimitive",xr),C(Gr,"isObject",Vr);var Br=Object.prototype.toString;var Fr=new Function("try {return this === global;} catch ( err ) {return false;}")(),$r=e,Rr=ar(),Nr=/node|io\.js/;var Ur,Cr,Zr="object"==typeof global&&global===Rr&&Rr===Rr.global&&("[object global]"===H(Rr)||"[object Object]"===H(Rr))&&!0===Fr&&"object"==typeof $r&&"[object process]"===(Ur=$r,Br.call(Ur))&&kr($r.versions)&&xr($r.versions.node)&&(void 0===$r.release||kr($r.release)&&xr($r.release.name)&&Nr.test($r.release.name)),Mr=e.versions.node,Xr=(Cr=Zr?Mr:null,Cr?parseInt(Cr.split(".")[0],10):-1),qr=wr(_r.from)&&Xr>=5,Wr="function"==typeof ArrayBuffer;function Yr(r){return Wr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===H(r)}function zr(r){return"number"==typeof r}var Dr=Number,Hr=Dr.prototype.toString;var Jr=X();function Kr(r){return"object"==typeof r&&(r instanceof Dr||(Jr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Qr(r){return zr(r)||Kr(r)}C(Qr,"isPrimitive",zr),C(Qr,"isObject",Kr);var re=Number.POSITIVE_INFINITY,ee=Dr.NEGATIVE_INFINITY,te=Math.floor;function ne(r){return te(r)===r}function oe(r){return r<re&&r>ee&&ne(r)}function ie(r){return zr(r)&&oe(r)}function ae(r){return Kr(r)&&oe(r.valueOf())}function ce(r){return ie(r)||ae(r)}function ue(r){return ie(r)&&r>=0}function fe(r){return ae(r)&&r.valueOf()>=0}function le(r){return ue(r)||fe(r)}function se(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}C(ce,"isPrimitive",ie),C(ce,"isObject",ae),C(le,"isPrimitive",ue),C(le,"isObject",fe);var pe="function"==typeof Uint8Array;var ge="function"==typeof Uint8Array?Uint8Array:null;var ye,be="function"==typeof Uint8Array?Uint8Array:void 0;ye=function(){var r,e;if("function"!=typeof ge)return!1;try{r=function(r){return pe&&r instanceof Uint8Array||"[object Uint8Array]"===H(r)}(e=new ge(e=[1,3.14,-3.14,256,257]))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?be:function(){throw new Error("not implemented")};var he=ye,de=wr(_r.from),ve=9007199254740991;function we(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ne(r.length)&&r.length>=0&&r.length<=ve}var me,je=de?function(r){if(!we(r))throw new TypeError(P("invalid argument. Must provide an array-like object. Value: `%s`.",r));return _r.from(r)}:function(r){if(!we(r))throw new TypeError(P("invalid argument. Must provide an array-like object. Value: `%s`.",r));return new _r(r)};return me=qr?function(r,e,t){var n,o;if(!Yr(r))throw new TypeError(se("0GL2B",r));if(arguments.length>1){if(!ue(e))throw new TypeError(se("0GL3X",e));if(e>r.byteLength)throw new RangeError(se("0GL3Y",e));if(n=e,arguments.length>2){if(!ue(t))throw new TypeError(se("0GL3Z",t));if(t>r.byteLength)throw new RangeError(se("0GL3a",t));o=t}else o=r.byteLength-n}else n=0,o=r.byteLength;return 0===o&&Xr<6?_r.from([]):_r.from(r,n,o)}:function(r,e,t){var n;if(!Yr(r))throw new TypeError(se("0GL2B",r));if(arguments.length>1){if(!ue(e))throw new TypeError(se("0GL3X",e));if(e>r.byteLength)throw new RangeError(se("0GL3Y",e));if(arguments.length>2){if(!ue(t))throw new TypeError(se("0GL3Z",t));if(t>r.byteLength)throw new RangeError(se("0GL3a",t));n=t}else n=r.byteLength-e;return je(new he(r,e,n))}return Xr<3?je(new he(r)):0===r.byteLength?new _r([]):new _r(r)},me}));
//# sourceMappingURL=index.js.map