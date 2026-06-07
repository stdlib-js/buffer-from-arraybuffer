"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=o(function(_,g){
var v=require('@stdlib/process-node-version/dist'),L=v?parseInt(v.split(".")[0],10):-1;g.exports=L
});var l=o(function(j,f){
var V=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/buffer-ctor/dist'),N=s(),R=V(x.from)&&N>=5;f.exports=R
});var q=o(function(k,y){
var T=require('@stdlib/assert-is-arraybuffer/dist'),w=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,h=require('@stdlib/buffer-ctor/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist'),S=s();function F(r,e,n){var a,t;if(!T(r))throw new TypeError(i('0GL2B',r));if(arguments.length>1){if(!w(e))throw new TypeError(i('0GL3X',e));if(e>r.byteLength)throw new RangeError(i('0GL3Y',e));if(a=e,arguments.length>2){if(!w(n))throw new TypeError(i('0GL3Z',n));if(n>r.byteLength)throw new RangeError(i('0GL3a',n));t=n}else t=r.byteLength-a}else a=0,t=r.byteLength;return t===0&&S<6?h.from([]):h.from(r,a,t)}y.exports=F
});var E=o(function(z,B){
var I=require('@stdlib/assert-is-arraybuffer/dist'),d=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,p=require('@stdlib/buffer-ctor/dist'),c=require('@stdlib/array-uint8/dist'),A=require('@stdlib/buffer-from-array/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist'),b=s();function P(r,e,n){var a;if(!I(r))throw new TypeError(u('0GL2B',r));if(arguments.length>1){if(!d(e))throw new TypeError(u('0GL3X',e));if(e>r.byteLength)throw new RangeError(u('0GL3Y',e));if(arguments.length>2){if(!d(n))throw new TypeError(u('0GL3Z',n));if(n>r.byteLength)throw new RangeError(u('0GL3a',n));a=n}else a=r.byteLength-e;return A(new c(r,e,a))}return b<3?A(new c(r)):r.byteLength===0?new p([]):new p(r)}B.exports=P
});var D=l(),J=q(),M=E(),m;D?m=J:m=M;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
