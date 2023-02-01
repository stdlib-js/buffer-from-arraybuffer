// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-ctor@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/process-node-version@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-array@esm/index.mjs";var h=t?parseInt(t.split(".")[0],10):-1;var f=e(r.from)&&h>=5?function(e,t,o){var m,f;if(!n(e))throw new TypeError(i("0893j",e));if(arguments.length>1){if(!s(t))throw new TypeError(i("0893k",t));if(t>e.byteLength)throw new RangeError(i("0893l",t));if(m=t,arguments.length>2){if(!s(o))throw new TypeError(i("0893m",o));if(o>e.byteLength)throw new RangeError(i("0893n",o));f=o}else f=e.byteLength-m}else m=0,f=e.byteLength;return 0===f&&h<6?r.from([]):r.from(e,m,f)}:function(e,t,f){var d;if(!n(e))throw new TypeError(i("0893j",e));if(arguments.length>1){if(!s(t))throw new TypeError(i("0893k",t));if(t>e.byteLength)throw new RangeError(i("0893l",t));if(arguments.length>2){if(!s(f))throw new TypeError(i("0893m",f));if(f>e.byteLength)throw new RangeError(i("0893n",f));d=f}else d=e.byteLength-t;return m(new o(e,t,d))}return h<3?m(new o(e)):0===e.byteLength?new r([]):new r(e)};export{f as default};
//# sourceMappingURL=index.mjs.map
