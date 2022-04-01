// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-ctor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/process-node-version@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-array@esm/index.mjs";var o=r?parseInt(r.split(".")[0],10):-1,u=o,g=e(t.from)&&u>=5,f=n,d=i.isPrimitive,h=t,l=s,b=o;var v=function(e,t,r){var n,i;if(!f(e))throw new TypeError(l("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(arguments.length>1){if(!d(t))throw new TypeError(l("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(t>e.byteLength)throw new RangeError(l("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",t));if(n=t,arguments.length>2){if(!d(r))throw new TypeError(l("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",r));if(r>e.byteLength)throw new RangeError(l("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",r));i=r}else i=e.byteLength-n}else n=0,i=e.byteLength;return 0===i&&b<6?h.from([]):h.from(e,n,i)},p=n,y=i.isPrimitive,j=t,w=a,c=m,x=s,L=o;var E=g?v:function(e,t,r){var n;if(!p(e))throw new TypeError(x("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(arguments.length>1){if(!y(t))throw new TypeError(x("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(t>e.byteLength)throw new RangeError(x("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",t));if(arguments.length>2){if(!y(r))throw new TypeError(x("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",r));if(r>e.byteLength)throw new RangeError(x("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",r));n=r}else n=e.byteLength-t;return c(new w(e,t,n))}return L<3?c(new w(e)):0===e.byteLength?new j([]):new j(e)};export{E as default};
//# sourceMappingURL=index.mjs.map
