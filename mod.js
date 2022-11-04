// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,s=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,c,h,l;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(t,r)||s.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),h="get"in e,l="set"in e,c&&(h||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return h&&u&&u.call(t,r,e.get),l&&f&&f.call(t,r,e.set),t};var c=e;function h(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function v(t,r){return null!=t&&w.call(t,r)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var b=y()?function(t){var r,e,n;if(null==t)return g.call(t);e=t[d],r=v(t,d);try{t[d]=void 0}catch(r){return g.call(t)}return n=g.call(t),r?t[d]=e:delete t[d],n}:function(t){return g.call(t)},m=Boolean.prototype.toString;var E=y();function _(t){return"object"==typeof t&&(t instanceof Boolean||(E?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===b(t)))}function A(t){return l(t)||_(t)}function T(){return new Function("return this;")()}h(A,"isPrimitive",l),h(A,"isObject",_);var R="object"==typeof self?self:null,P="object"==typeof window?window:null,j="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof j?j:null;function O(t){if(arguments.length){if(!l(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(R)return R;if(P)return P;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}var U=O(),B=U.document&&U.document.childNodes,I=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var Y,M=/^\s*function\s*([^(]*)/i;h(L,"REGEXP",M),Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===b(t)};var C=Y;function D(t){return null!==t&&"object"==typeof t}var k=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(D);function N(t){return D(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))}function x(t){var r,e,n;if(("Object"===(e=b(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=M.exec(n.toString()))return r[1]}return N(t)?"Buffer":e}h(D,"isObjectLikeArray",k);var F="function"==typeof t||"object"==typeof I||"function"==typeof B?function(t){return x(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?x(t).toLowerCase():r};function z(t){return"function"===F(t)}var V=[],G=[],X="undefined"!=typeof Uint8Array?Uint8Array:Array,q=!1;function J(){q=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,e=t.length;r<e;++r)V[r]=t[r],G[t.charCodeAt(r)]=r;G["-".charCodeAt(0)]=62,G["_".charCodeAt(0)]=63}function Z(t,r,e){for(var n,o,i=[],u=r;u<e;u+=3)n=(t[u]<<16)+(t[u+1]<<8)+t[u+2],i.push(V[(o=n)>>18&63]+V[o>>12&63]+V[o>>6&63]+V[63&o]);return i.join("")}function H(t){var r;q||J();for(var e=t.length,n=e%3,o="",i=[],u=16383,f=0,a=e-n;f<a;f+=u)i.push(Z(t,f,f+u>a?a:f+u));return 1===n?(r=t[e-1],o+=V[r>>2],o+=V[r<<4&63],o+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],o+=V[r>>10],o+=V[r>>4&63],o+=V[r<<2&63],o+="="),i.push(o),i.join("")}function K(t,r,e,n,o){var i,u,f=8*o-n-1,a=(1<<f)-1,s=a>>1,c=-7,h=e?o-1:0,l=e?-1:1,p=t[r+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=f;c>0;i=256*i+t[r+h],h+=l,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=n;c>0;u=256*u+t[r+h],h+=l,c-=8);if(0===i)i=1-s;else{if(i===a)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=s}return(p?-1:1)*u*Math.pow(2,i-n)}function Q(t,r,e,n,o,i){var u,f,a,s=8*i-o-1,c=(1<<s)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=c):(u=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-u))<1&&(u--,a*=2),(r+=u+h>=1?l/a:l*Math.pow(2,1-h))*a>=2&&(u++,a/=2),u+h>=c?(f=0,u=c):u+h>=1?(f=(r*a-1)*Math.pow(2,o),u+=h):(f=r*Math.pow(2,h-1)*Math.pow(2,o),u=0));o>=8;t[e+p]=255&f,p+=y,f/=256,o-=8);for(u=u<<o|f,s+=o;s>0;t[e+p]=255&u,p+=y,u/=256,s-=8);t[e+p-y]|=128*g}var W={}.toString,$=Array.isArray||function(t){return"[object Array]"==W.call(t)};nt.TYPED_ARRAY_SUPPORT=void 0===j.TYPED_ARRAY_SUPPORT||j.TYPED_ARRAY_SUPPORT;var tt=rt();function rt(){return nt.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function et(t,r){if(rt()<r)throw new RangeError("Invalid typed array length");return nt.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=nt.prototype:(null===t&&(t=new nt(r)),t.length=r),t}function nt(t,r,e){if(!(nt.TYPED_ARRAY_SUPPORT||this instanceof nt))return new nt(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return ut(this,t)}return ot(this,t,r,e)}function ot(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);nt.TYPED_ARRAY_SUPPORT?(t=r).__proto__=nt.prototype:t=ft(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!nt.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|ct(r,e),o=(t=et(t,n)).write(r,e);o!==n&&(t=t.slice(0,o));return t}(t,r,e):function(t,r){if(st(r)){var e=0|at(r.length);return 0===(t=et(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?et(t,0):ft(t,r);if("Buffer"===r.type&&$(r.data))return ft(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function it(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function ut(t,r){if(it(r),t=et(t,r<0?0:0|at(r)),!nt.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function ft(t,r){var e=r.length<0?0:0|at(r.length);t=et(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function at(t){if(t>=rt())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+rt().toString(16)+" bytes");return 0|t}function st(t){return!(null==t||!t._isBuffer)}function ct(t,r){if(st(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return Ct(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return Dt(t).length;default:if(n)return Ct(t).length;r=(""+r).toLowerCase(),n=!0}}function ht(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return Rt(this,r,e);case"utf8":case"utf-8":return _t(this,r,e);case"ascii":return At(this,r,e);case"latin1":case"binary":return Tt(this,r,e);case"base64":return Et(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pt(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function lt(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function pt(t,r,e,n,o){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof r&&(r=nt.from(r,n)),st(r))return 0===r.length?-1:yt(t,r,e,n,o);if("number"==typeof r)return r&=255,nt.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):yt(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function yt(t,r,e,n,o){var i,u=1,f=t.length,a=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,a/=2,e/=2}function s(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(o){var c=-1;for(i=e;i<f;i++)if(s(t,i)===s(r,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===a)return c*u}else-1!==c&&(i-=i-c),c=-1}else for(e+a>f&&(e=f-a),i=e;i>=0;i--){for(var h=!0,l=0;l<a;l++)if(s(t,i+l)!==s(r,l)){h=!1;break}if(h)return i}return-1}function gt(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(isNaN(f))return u;t[e+u]=f}return u}function wt(t,r,e,n){return kt(Ct(r,t.length-e),t,e,n)}function vt(t,r,e,n){return kt(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function dt(t,r,e,n){return vt(t,r,e,n)}function bt(t,r,e,n){return kt(Dt(r),t,e,n)}function mt(t,r,e,n){return kt(function(t,r){for(var e,n,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,o=e%256,i.push(o),i.push(n);return i}(r,t.length-e),t,e,n)}function Et(t,r,e){return 0===r&&e===t.length?H(t):H(t.slice(r,e))}function _t(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,u,f,a,s=t[o],c=null,h=s>239?4:s>223?3:s>191?2:1;if(o+h<=e)switch(h){case 1:s<128&&(c=s);break;case 2:128==(192&(i=t[o+1]))&&(a=(31&s)<<6|63&i)>127&&(c=a);break;case 3:i=t[o+1],u=t[o+2],128==(192&i)&&128==(192&u)&&(a=(15&s)<<12|(63&i)<<6|63&u)>2047&&(a<55296||a>57343)&&(c=a);break;case 4:i=t[o+1],u=t[o+2],f=t[o+3],128==(192&i)&&128==(192&u)&&128==(192&f)&&(a=(15&s)<<18|(63&i)<<12|(63&u)<<6|63&f)>65535&&a<1114112&&(c=a)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}nt.poolSize=8192,nt._augment=function(t){return t.__proto__=nt.prototype,t},nt.from=function(t,r,e){return ot(null,t,r,e)},nt.TYPED_ARRAY_SUPPORT&&(nt.prototype.__proto__=Uint8Array.prototype,nt.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&nt[Symbol.species]),nt.alloc=function(t,r,e){return function(t,r,e,n){return it(r),r<=0?et(t,r):void 0!==e?"string"==typeof n?et(t,r).fill(e,n):et(t,r).fill(e):et(t,r)}(null,t,r,e)},nt.allocUnsafe=function(t){return ut(null,t)},nt.allocUnsafeSlow=function(t){return ut(null,t)},nt.isBuffer=Nt,nt.compare=function(t,r){if(!st(t)||!st(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},nt.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},nt.concat=function(t,r){if(!$(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return nt.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=nt.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var i=t[e];if(!st(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},nt.byteLength=ct,nt.prototype._isBuffer=!0,nt.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)lt(this,r,r+1);return this},nt.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)lt(this,r,r+3),lt(this,r+1,r+2);return this},nt.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)lt(this,r,r+7),lt(this,r+1,r+6),lt(this,r+2,r+5),lt(this,r+3,r+4);return this},nt.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?_t(this,0,t):ht.apply(this,arguments)},nt.prototype.equals=function(t){if(!st(t))throw new TypeError("Argument must be a Buffer");return this===t||0===nt.compare(this,t)},nt.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},nt.prototype.compare=function(t,r,e,n,o){if(!st(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),f=Math.min(i,u),a=this.slice(n,o),s=t.slice(r,e),c=0;c<f;++c)if(a[c]!==s[c]){i=a[c],u=s[c];break}return i<u?-1:u<i?1:0},nt.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},nt.prototype.indexOf=function(t,r,e){return pt(this,t,r,e,!0)},nt.prototype.lastIndexOf=function(t,r,e){return pt(this,t,r,e,!1)},nt.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return gt(this,t,r,e);case"utf8":case"utf-8":return wt(this,t,r,e);case"ascii":return vt(this,t,r,e);case"latin1":case"binary":return dt(this,t,r,e);case"base64":return bt(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mt(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},nt.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function At(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function Tt(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function Rt(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=Mt(t[i]);return o}function Pt(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function jt(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function St(t,r,e,n,o,i){if(!st(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function Ot(t,r,e,n){r<0&&(r=65535+r+1);for(var o=0,i=Math.min(t.length-e,2);o<i;++o)t[e+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function Ut(t,r,e,n){r<0&&(r=4294967295+r+1);for(var o=0,i=Math.min(t.length-e,4);o<i;++o)t[e+o]=r>>>8*(n?o:3-o)&255}function Bt(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function It(t,r,e,n,o){return o||Bt(t,0,e,4),Q(t,r,e,n,23,4),e+4}function Lt(t,r,e,n,o){return o||Bt(t,0,e,8),Q(t,r,e,n,52,8),e+8}nt.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),nt.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=nt.prototype;else{var o=r-t;e=new nt(o,void 0);for(var i=0;i<o;++i)e[i]=this[i+t]}return e},nt.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||jt(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},nt.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||jt(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},nt.prototype.readUInt8=function(t,r){return r||jt(t,1,this.length),this[t]},nt.prototype.readUInt16LE=function(t,r){return r||jt(t,2,this.length),this[t]|this[t+1]<<8},nt.prototype.readUInt16BE=function(t,r){return r||jt(t,2,this.length),this[t]<<8|this[t+1]},nt.prototype.readUInt32LE=function(t,r){return r||jt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},nt.prototype.readUInt32BE=function(t,r){return r||jt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},nt.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||jt(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*r)),n},nt.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||jt(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},nt.prototype.readInt8=function(t,r){return r||jt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},nt.prototype.readInt16LE=function(t,r){r||jt(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},nt.prototype.readInt16BE=function(t,r){r||jt(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},nt.prototype.readInt32LE=function(t,r){return r||jt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},nt.prototype.readInt32BE=function(t,r){return r||jt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},nt.prototype.readFloatLE=function(t,r){return r||jt(t,4,this.length),K(this,t,!0,23,4)},nt.prototype.readFloatBE=function(t,r){return r||jt(t,4,this.length),K(this,t,!1,23,4)},nt.prototype.readDoubleLE=function(t,r){return r||jt(t,8,this.length),K(this,t,!0,52,8)},nt.prototype.readDoubleBE=function(t,r){return r||jt(t,8,this.length),K(this,t,!1,52,8)},nt.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||St(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},nt.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||St(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},nt.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,1,255,0),nt.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},nt.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,2,65535,0),nt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Ot(this,t,r,!0),r+2},nt.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,2,65535,0),nt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Ot(this,t,r,!1),r+2},nt.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,4,4294967295,0),nt.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):Ut(this,t,r,!0),r+4},nt.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,4,4294967295,0),nt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Ut(this,t,r,!1),r+4},nt.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);St(this,t,r,e,o-1,-o)}var i=0,u=1,f=0;for(this[r]=255&t;++i<e&&(u*=256);)t<0&&0===f&&0!==this[r+i-1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},nt.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);St(this,t,r,e,o-1,-o)}var i=e-1,u=1,f=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===f&&0!==this[r+i+1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},nt.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,1,127,-128),nt.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},nt.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,2,32767,-32768),nt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Ot(this,t,r,!0),r+2},nt.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,2,32767,-32768),nt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Ot(this,t,r,!1),r+2},nt.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,4,2147483647,-2147483648),nt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):Ut(this,t,r,!0),r+4},nt.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||St(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),nt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Ut(this,t,r,!1),r+4},nt.prototype.writeFloatLE=function(t,r,e){return It(this,t,r,!0,e)},nt.prototype.writeFloatBE=function(t,r,e){return It(this,t,r,!1,e)},nt.prototype.writeDoubleLE=function(t,r,e){return Lt(this,t,r,!0,e)},nt.prototype.writeDoubleBE=function(t,r,e){return Lt(this,t,r,!1,e)},nt.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,i=n-e;if(this===t&&e<r&&r<n)for(o=i-1;o>=0;--o)t[o+r]=this[o+e];else if(i<1e3||!nt.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+i),r);return i},nt.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!nt.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var i;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=r;i<e;++i)this[i]=t;else{var u=st(t)?t:Ct(new nt(t,n).toString()),f=u.length;for(i=0;i<e-r;++i)this[i+r]=u[i%f]}return this};var Yt=/[^+\/0-9A-Za-z-_]/g;function Mt(t){return t<16?"0"+t.toString(16):t.toString(16)}function Ct(t,r){var e;r=r||1/0;for(var n=t.length,o=null,i=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function Dt(t){return function(t){var r,e,n,o,i,u;q||J();var f=t.length;if(f%4>0)throw new Error("Invalid string. Length must be a multiple of 4");i="="===t[f-2]?2:"="===t[f-1]?1:0,u=new X(3*f/4-i),n=i>0?f-4:f;var a=0;for(r=0,e=0;r<n;r+=4,e+=3)o=G[t.charCodeAt(r)]<<18|G[t.charCodeAt(r+1)]<<12|G[t.charCodeAt(r+2)]<<6|G[t.charCodeAt(r+3)],u[a++]=o>>16&255,u[a++]=o>>8&255,u[a++]=255&o;return 2===i?(o=G[t.charCodeAt(r)]<<2|G[t.charCodeAt(r+1)]>>4,u[a++]=255&o):1===i&&(o=G[t.charCodeAt(r)]<<10|G[t.charCodeAt(r+1)]<<4|G[t.charCodeAt(r+2)]>>2,u[a++]=o>>8&255,u[a++]=255&o),u}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(Yt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function kt(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function Nt(t){return null!=t&&(!!t._isBuffer||xt(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&xt(t.slice(0,0))}(t))}function xt(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var Ft=Object.freeze({__proto__:null,Buffer:nt,INSPECT_MAX_BYTES:50,SlowBuffer:function(t){return+t!=t&&(t=0),nt.alloc(+t)},isBuffer:Nt,kMaxLength:tt}),zt=nt;function Vt(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var Gt,Xt=Vt(Ft).Buffer;Gt=function(){var t,r;if("function"!=typeof zt)return!1;try{t=N(r="function"==typeof zt.from?zt.from([1,2,3,4]):new zt([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){t=!1}return t}()?Xt:function(){throw new Error("not implemented")};var qt=Gt;function Jt(){throw new Error("setTimeout has not been defined")}function Zt(){throw new Error("clearTimeout has not been defined")}var Ht=Jt,Kt=Zt;function Qt(t){if(Ht===setTimeout)return setTimeout(t,0);if((Ht===Jt||!Ht)&&setTimeout)return Ht=setTimeout,setTimeout(t,0);try{return Ht(t,0)}catch(r){try{return Ht.call(null,t,0)}catch(r){return Ht.call(this,t,0)}}}"function"==typeof j.setTimeout&&(Ht=setTimeout),"function"==typeof j.clearTimeout&&(Kt=clearTimeout);var Wt,$t=[],tr=!1,rr=-1;function er(){tr&&Wt&&(tr=!1,Wt.length?$t=Wt.concat($t):rr=-1,$t.length&&nr())}function nr(){if(!tr){var t=Qt(er);tr=!0;for(var r=$t.length;r;){for(Wt=$t,$t=[];++rr<r;)Wt&&Wt[rr].run();rr=-1,r=$t.length}Wt=null,tr=!1,function(t){if(Kt===clearTimeout)return clearTimeout(t);if((Kt===Zt||!Kt)&&clearTimeout)return Kt=clearTimeout,clearTimeout(t);try{Kt(t)}catch(r){try{return Kt.call(null,t)}catch(r){return Kt.call(this,t)}}}(t)}}function or(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];$t.push(new ir(t,r)),1!==$t.length||tr||Qt(nr)}function ir(t,r){this.fun=t,this.array=r}ir.prototype.run=function(){this.fun.apply(null,this.array)};var ur={},fr=[],ar={},sr={},cr={};function hr(){}var lr=hr,pr=hr,yr=hr,gr=hr,wr=hr,vr=hr,dr=hr;function br(t){throw new Error("process.binding is not supported")}function mr(){return"/"}function Er(t){throw new Error("process.chdir is not supported")}function _r(){return 0}var Ar=j.performance||{},Tr=Ar.now||Ar.mozNow||Ar.msNow||Ar.oNow||Ar.webkitNow||function(){return(new Date).getTime()};function Rr(t){var r=.001*Tr.call(Ar),e=Math.floor(r),n=Math.floor(r%1*1e9);return t&&(e-=t[0],(n-=t[1])<0&&(e--,n+=1e9)),[e,n]}var Pr=new Date;function jr(){return(new Date-Pr)/1e3}var Sr={nextTick:or,title:"browser",browser:true,env:ur,argv:fr,version:"",versions:ar,on:lr,addListener:pr,once:yr,off:gr,removeListener:wr,removeAllListeners:vr,emit:dr,binding:br,cwd:mr,chdir:Er,umask:_r,hrtime:Rr,platform:"browser",release:sr,config:cr,uptime:jr},Or=Vt(Object.freeze({__proto__:null,addListener:pr,argv:fr,binding:br,browser:true,chdir:Er,config:cr,cwd:mr,default:Sr,emit:dr,env:ur,hrtime:Rr,nextTick:or,off:gr,on:lr,once:yr,platform:"browser",release:sr,removeAllListeners:vr,removeListener:wr,title:"browser",umask:_r,uptime:jr,version:"",versions:ar}));var Ur,Br=Object.getPrototypeOf;Ur=z(Object.getPrototypeOf)?Br:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===b(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ir=Ur;var Lr=Object.prototype;function Yr(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!C(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Ir(t))}(t),!r||!v(t,"constructor")&&v(r,"constructor")&&z(r.constructor)&&"[object Function]"===b(r.constructor)&&v(r,"isPrototypeOf")&&z(r.isPrototypeOf)&&(r===Lr||function(t){var r;for(r in t)if(!v(t,r))return!1;return!0}(t)))}function Mr(t){return"string"==typeof t}var Cr=String.prototype.valueOf;var Dr=y();function kr(t){return"object"==typeof t&&(t instanceof String||(Dr?function(t){try{return Cr.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function Nr(t){return Mr(t)||kr(t)}h(Nr,"isPrimitive",Mr),h(Nr,"isObject",kr);var xr=Object.prototype.toString;var Fr=new Function("try {return this === global;} catch ( err ) {return false;}")(),zr=Or,Vr=O(),Gr=/node|io\.js/;var Xr,qr,Jr="object"==typeof j&&j===Vr&&Vr===Vr.global&&("[object global]"===b(Vr)||"[object Object]"===b(Vr))&&!0===Fr&&"object"==typeof zr&&"[object process]"===(Xr=zr,xr.call(Xr))&&Yr(zr.versions)&&Mr(zr.versions.node)&&(void 0===zr.release||Yr(zr.release)&&Mr(zr.release.name)&&Gr.test(zr.release.name)),Zr=Or.versions.node,Hr=(qr=Jr?Zr:null,qr?parseInt(qr.split(".")[0],10):-1),Kr=z(qt.from)&&Hr>=5,Qr="function"==typeof ArrayBuffer;function Wr(t){return Qr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===b(t)}function $r(t){return"number"==typeof t}var te=Number,re=te.prototype.toString;var ee=y();function ne(t){return"object"==typeof t&&(t instanceof te||(ee?function(t){try{return re.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function oe(t){return $r(t)||ne(t)}h(oe,"isPrimitive",$r),h(oe,"isObject",ne);var ie=Number.POSITIVE_INFINITY,ue=te.NEGATIVE_INFINITY,fe=Math.floor;function ae(t){return fe(t)===t}function se(t){return t<ie&&t>ue&&ae(t)}function ce(t){return $r(t)&&se(t)}function he(t){return ne(t)&&se(t.valueOf())}function le(t){return ce(t)||he(t)}function pe(t){return ce(t)&&t>=0}function ye(t){return he(t)&&t.valueOf()>=0}function ge(t){return pe(t)||ye(t)}function we(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}h(le,"isPrimitive",ce),h(le,"isObject",he),h(ge,"isPrimitive",pe),h(ge,"isObject",ye);var ve="function"==typeof Uint8Array;var de="function"==typeof Uint8Array?Uint8Array:null;var be,me="function"==typeof Uint8Array?Uint8Array:void 0;be=function(){var t,r;if("function"!=typeof de)return!1;try{t=function(t){return ve&&t instanceof Uint8Array||"[object Uint8Array]"===b(t)}(r=new de(r=[1,3.14,-3.14,256,257]))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?me:function(){throw new Error("not implemented")};var Ee=be,_e=z(qt.from);function Ae(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ae(t.length)&&t.length>=0&&t.length<=9007199254740991}var Te=_e?function(t){if(!Ae(t))throw new TypeError("invalid argument. Must provide an array-like object. Value: `"+t+"`");return qt.from(t)}:function(t){if(!Ae(t))throw new TypeError("invalid argument. Must provide an array-like object. Value: `"+t+"`");return new qt(t)};var Re=Kr?function(t,r,e){var n,o;if(!Wr(t))throw new TypeError(we("0893j",t));if(arguments.length>1){if(!pe(r))throw new TypeError(we("0893k",r));if(r>t.byteLength)throw new RangeError(we("0893l",r));if(n=r,arguments.length>2){if(!pe(e))throw new TypeError(we("0893m",e));if(e>t.byteLength)throw new RangeError(we("0893n",e));o=e}else o=t.byteLength-n}else n=0,o=t.byteLength;return 0===o&&Hr<6?qt.from([]):qt.from(t,n,o)}:function(t,r,e){var n;if(!Wr(t))throw new TypeError(we("0893j",t));if(arguments.length>1){if(!pe(r))throw new TypeError(we("0893k",r));if(r>t.byteLength)throw new RangeError(we("0893l",r));if(arguments.length>2){if(!pe(e))throw new TypeError(we("0893m",e));if(e>t.byteLength)throw new RangeError(we("0893n",e));n=e}else n=t.byteLength-r;return Te(new Ee(t,r,n))}return Hr<3?Te(new Ee(t)):0===t.byteLength?new qt([]):new qt(t)};export{Re as default};
//# sourceMappingURL=mod.js.map
