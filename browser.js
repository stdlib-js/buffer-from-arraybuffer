// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).arraybuffer2buffer=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(t){return"number"==typeof t}function o(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function i(t,r,e){var n=!1,i=r-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=e?t+o(i):o(i)+t,n&&(t="-"+t)),t}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(t){var r,e,o;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,o=parseInt(e,10),!isFinite(o)){if(!n(e))throw new Error("invalid integer. Value: "+e);o=0}return o<0&&("u"===t.specifier||10!==r)&&(o=4294967295+o+1),o<0?(e=(-o).toString(r),t.precision&&(e=i(e,t.precision,t.padRight)),e="-"+e):(e=o.toString(r),o||t.precision?t.precision&&(e=i(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===a.call(t.specifier)?a.call(e):u.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var s=Math.abs,c=String.prototype.toLowerCase,h=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,w=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(t){var r,e,o=parseFloat(t.arg);if(!isFinite(o)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+e);o=t.arg}switch(t.specifier){case"e":case"E":e=o.toExponential(t.precision);break;case"f":case"F":e=o.toFixed(t.precision);break;case"g":case"G":s(o)<1e-4?((r=t.precision)>0&&(r-=1),e=o.toExponential(r)):e=o.toPrecision(t.precision),t.alternate||(e=l.call(e,b,"$1e"),e=l.call(e,v,"e"),e=l.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=l.call(e,p,"e+0$1"),e=l.call(e,g,"e-0$1"),t.alternate&&(e=l.call(e,y,"$1."),e=l.call(e,w,"$1.e")),o>=0&&t.sign&&(e=t.sign+e),e=t.specifier===h.call(t.specifier)?h.call(e):c.call(e)}function E(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}var A=String.fromCharCode,_=Array.isArray;function T(t){return t!=t}function R(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function P(t){var r,e,n,o,u,a,s,c,h,l,p,g,y;if(!_(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",s=1,c=0;c<t.length;c++)if(n=t[c],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),e=n.flags,h=0;h<e.length;h++)switch(o=e.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(u)?String(n.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,p=n.width,g=n.padRight,y=void 0,(y=p-l.length)<0?l:l=g?l+E(y):E(y)+l)),a+=n.arg||"",s+=1}return a}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function j(t){var r,e,n,o;for(e=[],o=0,n=S.exec(t);n;)(r=t.slice(o,S.lastIndex-n[0].length)).length&&e.push(r),e.push(O(n)),o=S.lastIndex,n=S.exec(t);return(r=t.slice(o)).length&&e.push(r),e}function U(t){var r,e;if("string"!=typeof t)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[j(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return P.apply(null,r)}var B,I=Object.prototype,L=I.toString,Y=I.__defineGetter__,x=I.__defineSetter__,k=I.__lookupGetter__,C=I.__lookupSetter__;B=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(k.call(t,r)||C.call(t,r)?(n=t.__proto__,t.__proto__=I,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Y&&Y.call(t,r,e.get),u&&x&&x.call(t,r,e.set),t};var M=B;function D(t,r,e){M(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function N(t){return"boolean"==typeof t}var F="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function V(){return F&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function $(t,r){return null!=t&&z.call(t,r)}var Z="function"==typeof Symbol?Symbol:void 0,X="function"==typeof Z?Z.toStringTag:"";var W=V()?function(t){var r,e,n;if(null==t)return G.call(t);e=t[X],r=$(t,X);try{t[X]=void 0}catch(r){return G.call(t)}return n=G.call(t),r?t[X]=e:delete t[X],n}:function(t){return G.call(t)},q=Boolean,J=Boolean.prototype.toString;var H=V();function K(t){return"object"==typeof t&&(t instanceof q||(H?function(t){try{return J.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===W(t)))}function Q(t){return N(t)||K(t)}D(Q,"isPrimitive",N),D(Q,"isObject",K);var tt="object"==typeof self?self:null,rt="object"==typeof window?window:null,et="object"==typeof globalThis?globalThis:null;function nt(t){if(arguments.length){if(!N(t))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(et)return et;if(tt)return tt;if(rt)return rt;throw new Error("unexpected error. Unable to resolve global object.")}var ot=nt(),it=ot.document&&ot.document.childNodes,ut=Int8Array;function at(){return/^\s*function\s*([^(]*)/i}var ft,st=/^\s*function\s*([^(]*)/i;D(at,"REGEXP",st),ft=Array.isArray?Array.isArray:function(t){return"[object Array]"===W(t)};var ct=ft;function ht(t){return null!==t&&"object"==typeof t}var lt=function(t){if("function"!=typeof t)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!ct(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(ht);function pt(t){var r,e,n,o;if(("Object"===(e=W(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=st.exec(n.toString()))return r[1]}return ht(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}D(ht,"isObjectLikeArray",lt);var gt="function"==typeof t||"object"==typeof ut||"function"==typeof it?function(t){return pt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?pt(t).toLowerCase():r};function yt(t){return"function"===gt(t)}function wt(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){return this instanceof t?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var dt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},vt=[],bt=[],mt="undefined"!=typeof Uint8Array?Uint8Array:Array,Et=!1;function At(){Et=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0;r<64;++r)vt[r]=t[r],bt[t.charCodeAt(r)]=r;bt["-".charCodeAt(0)]=62,bt["_".charCodeAt(0)]=63}function _t(t,r,e){for(var n,o,i=[],u=r;u<e;u+=3)n=(t[u]<<16)+(t[u+1]<<8)+t[u+2],i.push(vt[(o=n)>>18&63]+vt[o>>12&63]+vt[o>>6&63]+vt[63&o]);return i.join("")}function Tt(t){var r;Et||At();for(var e=t.length,n=e%3,o="",i=[],u=16383,a=0,f=e-n;a<f;a+=u)i.push(_t(t,a,a+u>f?f:a+u));return 1===n?(r=t[e-1],o+=vt[r>>2],o+=vt[r<<4&63],o+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],o+=vt[r>>10],o+=vt[r>>4&63],o+=vt[r<<2&63],o+="="),i.push(o),i.join("")}function Rt(t,r,e,n,o){var i,u,a=8*o-n-1,f=(1<<a)-1,s=f>>1,c=-7,h=e?o-1:0,l=e?-1:1,p=t[r+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+t[r+h],h+=l,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=n;c>0;u=256*u+t[r+h],h+=l,c-=8);if(0===i)i=1-s;else{if(i===f)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=s}return(p?-1:1)*u*Math.pow(2,i-n)}function Pt(t,r,e,n,o,i){var u,a,f,s=8*i-o-1,c=(1<<s)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(a=isNaN(r)?1:0,u=c):(u=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-u))<1&&(u--,f*=2),(r+=u+h>=1?l/f:l*Math.pow(2,1-h))*f>=2&&(u++,f/=2),u+h>=c?(a=0,u=c):u+h>=1?(a=(r*f-1)*Math.pow(2,o),u+=h):(a=r*Math.pow(2,h-1)*Math.pow(2,o),u=0));o>=8;t[e+p]=255&a,p+=g,a/=256,o-=8);for(u=u<<o|a,s+=o;s>0;t[e+p]=255&u,p+=g,u/=256,s-=8);t[e+p-g]|=128*y}var St={}.toString,Ot=Array.isArray||function(t){return"[object Array]"==St.call(t)};It.TYPED_ARRAY_SUPPORT=void 0===dt.TYPED_ARRAY_SUPPORT||dt.TYPED_ARRAY_SUPPORT;var jt=Ut();function Ut(){return It.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function Bt(t,r){if(Ut()<r)throw new RangeError("Invalid typed array length");return It.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=It.prototype:(null===t&&(t=new It(r)),t.length=r),t}function It(t,r,e){if(!(It.TYPED_ARRAY_SUPPORT||this instanceof It))return new It(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return xt(this,t)}return Lt(this,t,r,e)}function Lt(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);It.TYPED_ARRAY_SUPPORT?(t=r).__proto__=It.prototype:t=kt(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!It.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|Dt(r,e);t=Bt(t,n);var o=t.write(r,e);o!==n&&(t=t.slice(0,o));return t}(t,r,e):function(t,r){if(Mt(r)){var e=0|Ct(r.length);return 0===(t=Bt(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?Bt(t,0):kt(t,r);if("Buffer"===r.type&&Ot(r.data))return kt(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function Yt(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function xt(t,r){if(Yt(r),t=Bt(t,r<0?0:0|Ct(r)),!It.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function kt(t,r){var e=r.length<0?0:0|Ct(r.length);t=Bt(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function Ct(t){if(t>=Ut())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ut().toString(16)+" bytes");return 0|t}function Mt(t){return!(null==t||!t._isBuffer)}function Dt(t,r){if(Mt(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return lr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return pr(t).length;default:if(n)return lr(t).length;r=(""+r).toLowerCase(),n=!0}}function Nt(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return rr(this,r,e);case"utf8":case"utf-8":return Ht(this,r,e);case"ascii":return Qt(this,r,e);case"latin1":case"binary":return tr(this,r,e);case"base64":return Jt(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return er(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function Ft(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function Vt(t,r,e,n,o){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof r&&(r=It.from(r,n)),Mt(r))return 0===r.length?-1:Gt(t,r,e,n,o);if("number"==typeof r)return r&=255,It.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):Gt(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function Gt(t,r,e,n,o){var i,u=1,a=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,a/=2,f/=2,e/=2}function s(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(o){var c=-1;for(i=e;i<a;i++)if(s(t,i)===s(r,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===f)return c*u}else-1!==c&&(i-=i-c),c=-1}else for(e+f>a&&(e=a-f),i=e;i>=0;i--){for(var h=!0,l=0;l<f;l++)if(s(t,i+l)!==s(r,l)){h=!1;break}if(h)return i}return-1}function zt(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var a=parseInt(r.substr(2*u,2),16);if(isNaN(a))return u;t[e+u]=a}return u}function $t(t,r,e,n){return gr(lr(r,t.length-e),t,e,n)}function Zt(t,r,e,n){return gr(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function Xt(t,r,e,n){return Zt(t,r,e,n)}function Wt(t,r,e,n){return gr(pr(r),t,e,n)}function qt(t,r,e,n){return gr(function(t,r){for(var e,n,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,o=e%256,i.push(o),i.push(n);return i}(r,t.length-e),t,e,n)}function Jt(t,r,e){return 0===r&&e===t.length?Tt(t):Tt(t.slice(r,e))}function Ht(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,u,a,f,s=t[o],c=null,h=s>239?4:s>223?3:s>191?2:1;if(o+h<=e)switch(h){case 1:s<128&&(c=s);break;case 2:128==(192&(i=t[o+1]))&&(f=(31&s)<<6|63&i)>127&&(c=f);break;case 3:i=t[o+1],u=t[o+2],128==(192&i)&&128==(192&u)&&(f=(15&s)<<12|(63&i)<<6|63&u)>2047&&(f<55296||f>57343)&&(c=f);break;case 4:i=t[o+1],u=t[o+2],a=t[o+3],128==(192&i)&&128==(192&u)&&128==(192&a)&&(f=(15&s)<<18|(63&i)<<12|(63&u)<<6|63&a)>65535&&f<1114112&&(c=f)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return function(t){var r=t.length;if(r<=Kt)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=Kt));return e}(n)}It.poolSize=8192,It._augment=function(t){return t.__proto__=It.prototype,t},It.from=function(t,r,e){return Lt(null,t,r,e)},It.TYPED_ARRAY_SUPPORT&&(It.prototype.__proto__=Uint8Array.prototype,It.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&It[Symbol.species]),It.alloc=function(t,r,e){return function(t,r,e,n){return Yt(r),r<=0?Bt(t,r):void 0!==e?"string"==typeof n?Bt(t,r).fill(e,n):Bt(t,r).fill(e):Bt(t,r)}(null,t,r,e)},It.allocUnsafe=function(t){return xt(null,t)},It.allocUnsafeSlow=function(t){return xt(null,t)},It.isBuffer=yr,It.compare=function(t,r){if(!Mt(t)||!Mt(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},It.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},It.concat=function(t,r){if(!Ot(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return It.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=It.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var i=t[e];if(!Mt(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},It.byteLength=Dt,It.prototype._isBuffer=!0,It.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)Ft(this,r,r+1);return this},It.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)Ft(this,r,r+3),Ft(this,r+1,r+2);return this},It.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)Ft(this,r,r+7),Ft(this,r+1,r+6),Ft(this,r+2,r+5),Ft(this,r+3,r+4);return this},It.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Ht(this,0,t):Nt.apply(this,arguments)},It.prototype.equals=function(t){if(!Mt(t))throw new TypeError("Argument must be a Buffer");return this===t||0===It.compare(this,t)},It.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},It.prototype.compare=function(t,r,e,n,o){if(!Mt(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),a=Math.min(i,u),f=this.slice(n,o),s=t.slice(r,e),c=0;c<a;++c)if(f[c]!==s[c]){i=f[c],u=s[c];break}return i<u?-1:u<i?1:0},It.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},It.prototype.indexOf=function(t,r,e){return Vt(this,t,r,e,!0)},It.prototype.lastIndexOf=function(t,r,e){return Vt(this,t,r,e,!1)},It.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return zt(this,t,r,e);case"utf8":case"utf-8":return $t(this,t,r,e);case"ascii":return Zt(this,t,r,e);case"latin1":case"binary":return Xt(this,t,r,e);case"base64":return Wt(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qt(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},It.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Kt=4096;function Qt(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function tr(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function rr(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=hr(t[i]);return o}function er(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function nr(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function or(t,r,e,n,o,i){if(!Mt(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function ir(t,r,e,n){r<0&&(r=65535+r+1);for(var o=0,i=Math.min(t.length-e,2);o<i;++o)t[e+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function ur(t,r,e,n){r<0&&(r=4294967295+r+1);for(var o=0,i=Math.min(t.length-e,4);o<i;++o)t[e+o]=r>>>8*(n?o:3-o)&255}function ar(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function fr(t,r,e,n,o){return o||ar(t,0,e,4),Pt(t,r,e,n,23,4),e+4}function sr(t,r,e,n,o){return o||ar(t,0,e,8),Pt(t,r,e,n,52,8),e+8}It.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),It.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=It.prototype;else{var o=r-t;e=new It(o,void 0);for(var i=0;i<o;++i)e[i]=this[i+t]}return e},It.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||nr(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},It.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||nr(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},It.prototype.readUInt8=function(t,r){return r||nr(t,1,this.length),this[t]},It.prototype.readUInt16LE=function(t,r){return r||nr(t,2,this.length),this[t]|this[t+1]<<8},It.prototype.readUInt16BE=function(t,r){return r||nr(t,2,this.length),this[t]<<8|this[t+1]},It.prototype.readUInt32LE=function(t,r){return r||nr(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},It.prototype.readUInt32BE=function(t,r){return r||nr(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},It.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||nr(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*r)),n},It.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||nr(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},It.prototype.readInt8=function(t,r){return r||nr(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},It.prototype.readInt16LE=function(t,r){r||nr(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},It.prototype.readInt16BE=function(t,r){r||nr(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},It.prototype.readInt32LE=function(t,r){return r||nr(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},It.prototype.readInt32BE=function(t,r){return r||nr(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},It.prototype.readFloatLE=function(t,r){return r||nr(t,4,this.length),Rt(this,t,!0,23,4)},It.prototype.readFloatBE=function(t,r){return r||nr(t,4,this.length),Rt(this,t,!1,23,4)},It.prototype.readDoubleLE=function(t,r){return r||nr(t,8,this.length),Rt(this,t,!0,52,8)},It.prototype.readDoubleBE=function(t,r){return r||nr(t,8,this.length),Rt(this,t,!1,52,8)},It.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||or(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},It.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||or(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},It.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,1,255,0),It.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},It.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,2,65535,0),It.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):ir(this,t,r,!0),r+2},It.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,2,65535,0),It.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):ir(this,t,r,!1),r+2},It.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,4,4294967295,0),It.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):ur(this,t,r,!0),r+4},It.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,4,4294967295,0),It.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):ur(this,t,r,!1),r+4},It.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);or(this,t,r,e,o-1,-o)}var i=0,u=1,a=0;for(this[r]=255&t;++i<e&&(u*=256);)t<0&&0===a&&0!==this[r+i-1]&&(a=1),this[r+i]=(t/u>>0)-a&255;return r+e},It.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);or(this,t,r,e,o-1,-o)}var i=e-1,u=1,a=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===a&&0!==this[r+i+1]&&(a=1),this[r+i]=(t/u>>0)-a&255;return r+e},It.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,1,127,-128),It.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},It.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,2,32767,-32768),It.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):ir(this,t,r,!0),r+2},It.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,2,32767,-32768),It.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):ir(this,t,r,!1),r+2},It.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,4,2147483647,-2147483648),It.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):ur(this,t,r,!0),r+4},It.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||or(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),It.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):ur(this,t,r,!1),r+4},It.prototype.writeFloatLE=function(t,r,e){return fr(this,t,r,!0,e)},It.prototype.writeFloatBE=function(t,r,e){return fr(this,t,r,!1,e)},It.prototype.writeDoubleLE=function(t,r,e){return sr(this,t,r,!0,e)},It.prototype.writeDoubleBE=function(t,r,e){return sr(this,t,r,!1,e)},It.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,i=n-e;if(this===t&&e<r&&r<n)for(o=i-1;o>=0;--o)t[o+r]=this[o+e];else if(i<1e3||!It.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+i),r);return i},It.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!It.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var i;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=r;i<e;++i)this[i]=t;else{var u=Mt(t)?t:lr(new It(t,n).toString()),a=u.length;for(i=0;i<e-r;++i)this[i+r]=u[i%a]}return this};var cr=/[^+\/0-9A-Za-z-_]/g;function hr(t){return t<16?"0"+t.toString(16):t.toString(16)}function lr(t,r){var e;r=r||1/0;for(var n=t.length,o=null,i=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function pr(t){return function(t){var r,e,n,o,i,u;Et||At();var a=t.length;if(a%4>0)throw new Error("Invalid string. Length must be a multiple of 4");i="="===t[a-2]?2:"="===t[a-1]?1:0,u=new mt(3*a/4-i),n=i>0?a-4:a;var f=0;for(r=0,e=0;r<n;r+=4,e+=3)o=bt[t.charCodeAt(r)]<<18|bt[t.charCodeAt(r+1)]<<12|bt[t.charCodeAt(r+2)]<<6|bt[t.charCodeAt(r+3)],u[f++]=o>>16&255,u[f++]=o>>8&255,u[f++]=255&o;return 2===i?(o=bt[t.charCodeAt(r)]<<2|bt[t.charCodeAt(r+1)]>>4,u[f++]=255&o):1===i&&(o=bt[t.charCodeAt(r)]<<10|bt[t.charCodeAt(r+1)]<<4|bt[t.charCodeAt(r+2)]>>2,u[f++]=o>>8&255,u[f++]=255&o),u}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(cr,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function gr(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function yr(t){return null!=t&&(!!t._isBuffer||wr(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&wr(t.slice(0,0))}(t))}function wr(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}wt(Object.freeze({__proto__:null,Buffer:It,INSPECT_MAX_BYTES:50,SlowBuffer:function(t){return+t!=t&&(t=0),It.alloc(+t)},isBuffer:yr,kMaxLength:jt})).Buffer;var dr=function(){throw new Error("not implemented")};function vr(){throw new Error("setTimeout has not been defined")}function br(){throw new Error("clearTimeout has not been defined")}var mr=vr,Er=br;function Ar(t){if(mr===setTimeout)return setTimeout(t,0);if((mr===vr||!mr)&&setTimeout)return mr=setTimeout,setTimeout(t,0);try{return mr(t,0)}catch(r){try{return mr.call(null,t,0)}catch(r){return mr.call(this,t,0)}}}"function"==typeof dt.setTimeout&&(mr=setTimeout),"function"==typeof dt.clearTimeout&&(Er=clearTimeout);var _r,Tr=[],Rr=!1,Pr=-1;function Sr(){Rr&&_r&&(Rr=!1,_r.length?Tr=_r.concat(Tr):Pr=-1,Tr.length&&Or())}function Or(){if(!Rr){var t=Ar(Sr);Rr=!0;for(var r=Tr.length;r;){for(_r=Tr,Tr=[];++Pr<r;)_r&&_r[Pr].run();Pr=-1,r=Tr.length}_r=null,Rr=!1,function(t){if(Er===clearTimeout)return clearTimeout(t);if((Er===br||!Er)&&clearTimeout)return Er=clearTimeout,clearTimeout(t);try{return Er(t)}catch(r){try{return Er.call(null,t)}catch(r){return Er.call(this,t)}}}(t)}}function jr(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];Tr.push(new Ur(t,r)),1!==Tr.length||Rr||Ar(Or)}function Ur(t,r){this.fun=t,this.array=r}Ur.prototype.run=function(){this.fun.apply(null,this.array)};var Br="browser",Ir="browser",Lr={},Yr=[],xr={},kr={},Cr={};function Mr(){}var Dr=Mr,Nr=Mr,Fr=Mr,Vr=Mr,Gr=Mr,zr=Mr,$r=Mr;function Zr(t){throw new Error("process.binding is not supported")}function Xr(){return"/"}function Wr(t){throw new Error("process.chdir is not supported")}function qr(){return 0}var Jr=dt.performance||{},Hr=Jr.now||Jr.mozNow||Jr.msNow||Jr.oNow||Jr.webkitNow||function(){return(new Date).getTime()};function Kr(t){var r=.001*Hr.call(Jr),e=Math.floor(r),n=Math.floor(r%1*1e9);return t&&(e-=t[0],(n-=t[1])<0&&(e--,n+=1e9)),[e,n]}var Qr=new Date;function te(){return(new Date-Qr)/1e3}var re={nextTick:jr,title:Br,browser:true,env:Lr,argv:Yr,version:"",versions:xr,on:Dr,addListener:Nr,once:Fr,off:Vr,removeListener:Gr,removeAllListeners:zr,emit:$r,binding:Zr,cwd:Xr,chdir:Wr,umask:qr,hrtime:Kr,platform:Ir,release:kr,config:Cr,uptime:te},ee=wt(Object.freeze({__proto__:null,addListener:Nr,argv:Yr,binding:Zr,browser:true,chdir:Wr,config:Cr,cwd:Xr,default:re,emit:$r,env:Lr,hrtime:Kr,nextTick:jr,off:Vr,on:Dr,once:Fr,platform:Ir,release:kr,removeAllListeners:zr,removeListener:Gr,title:Br,umask:qr,uptime:te,version:"",versions:xr}));var ne,oe=Object,ie=Object.getPrototypeOf;ne=yt(Object.getPrototypeOf)?ie:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===W(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ue=ne;var ae=Object.prototype;function fe(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!ct(t)}(t)&&(r=function(t){return null==t?null:(t=oe(t),ue(t))}(t),!r||!$(t,"constructor")&&$(r,"constructor")&&yt(r.constructor)&&"[object Function]"===W(r.constructor)&&$(r,"isPrototypeOf")&&yt(r.isPrototypeOf)&&(r===ae||function(t){var r;for(r in t)if(!$(t,r))return!1;return!0}(t)))}function se(t){return"string"==typeof t}var ce=String.prototype.valueOf;var he=V();function le(t){return"object"==typeof t&&(t instanceof String||(he?function(t){try{return ce.call(t),!0}catch(t){return!1}}(t):"[object String]"===W(t)))}function pe(t){return se(t)||le(t)}D(pe,"isPrimitive",se),D(pe,"isObject",le);var ge=Object.prototype.toString;var ye=new Function("try {return this === global;} catch ( err ) {return false;}")(),we=ee,de=nt(),ve=/node|io\.js/;var be,me,Ee="object"==typeof dt&&dt===de&&de===de.global&&("[object global]"===W(de)||"[object Object]"===W(de))&&!0===ye&&"object"==typeof we&&"[object process]"===(be=we,ge.call(be))&&fe(we.versions)&&se(we.versions.node)&&(void 0===we.release||fe(we.release)&&se(we.release.name)&&ve.test(we.release.name)),Ae=ee.versions.node,_e=(me=Ee?Ae:null,me?parseInt(me.split(".")[0],10):-1),Te=yt(dr.from)&&_e>=5,Re="function"==typeof ArrayBuffer;function Pe(t){return Re&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===W(t)}function Se(t){return"number"==typeof t}var Oe=Number,je=Oe.prototype.toString;var Ue=V();function Be(t){return"object"==typeof t&&(t instanceof Oe||(Ue?function(t){try{return je.call(t),!0}catch(t){return!1}}(t):"[object Number]"===W(t)))}function Ie(t){return Se(t)||Be(t)}D(Ie,"isPrimitive",Se),D(Ie,"isObject",Be);var Le=Number.POSITIVE_INFINITY,Ye=Oe.NEGATIVE_INFINITY,xe=Math.floor;function ke(t){return xe(t)===t}function Ce(t){return t<Le&&t>Ye&&ke(t)}function Me(t){return Se(t)&&Ce(t)}function De(t){return Be(t)&&Ce(t.valueOf())}function Ne(t){return Me(t)||De(t)}function Fe(t){return Me(t)&&t>=0}function Ve(t){return De(t)&&t.valueOf()>=0}function Ge(t){return Fe(t)||Ve(t)}function ze(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}D(Ne,"isPrimitive",Me),D(Ne,"isObject",De),D(Ge,"isPrimitive",Fe),D(Ge,"isObject",Ve);var $e="function"==typeof Uint8Array;var Ze="function"==typeof Uint8Array?Uint8Array:null;var Xe,We="function"==typeof Uint8Array?Uint8Array:void 0;Xe=function(){var t,r;if("function"!=typeof Ze)return!1;try{t=function(t){return $e&&t instanceof Uint8Array||"[object Uint8Array]"===W(t)}(r=new Ze(r=[1,3.14,-3.14,256,257]))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?We:function(){throw new Error("not implemented")};var qe=Xe,Je=yt(dr.from),He=9007199254740991;function Ke(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ke(t.length)&&t.length>=0&&t.length<=He}var Qe,tn=Je?function(t){if(!Ke(t))throw new TypeError(U("invalid argument. Must provide an array-like object. Value: `%s`.",t));return dr.from(t)}:function(t){if(!Ke(t))throw new TypeError(U("invalid argument. Must provide an array-like object. Value: `%s`.",t));return new dr(t)};return Qe=Te?function(t,r,e){var n,o;if(!Pe(t))throw new TypeError(ze("0GL2B",t));if(arguments.length>1){if(!Fe(r))throw new TypeError(ze("0GL3X",r));if(r>t.byteLength)throw new RangeError(ze("0GL3Y",r));if(n=r,arguments.length>2){if(!Fe(e))throw new TypeError(ze("0GL3Z",e));if(e>t.byteLength)throw new RangeError(ze("0GL3a",e));o=e}else o=t.byteLength-n}else n=0,o=t.byteLength;return 0===o&&_e<6?dr.from([]):dr.from(t,n,o)}:function(t,r,e){var n;if(!Pe(t))throw new TypeError(ze("0GL2B",t));if(arguments.length>1){if(!Fe(r))throw new TypeError(ze("0GL3X",r));if(r>t.byteLength)throw new RangeError(ze("0GL3Y",r));if(arguments.length>2){if(!Fe(e))throw new TypeError(ze("0GL3Z",e));if(e>t.byteLength)throw new RangeError(ze("0GL3a",e));n=e}else n=t.byteLength-r;return tn(new qe(t,r,n))}return _e<3?tn(new qe(t)):0===t.byteLength?new dr([]):new dr(t)},Qe}));
//# sourceMappingURL=browser.js.map
