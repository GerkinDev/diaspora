/**
* @file diaspora
*
* Multi-Layer ORM for Javascript Client+Server
* Standalone build compiled on 2017-10-17 12:30:10
*
* @license GPL-3.0
* @version 0.1.0
* @author Gerkin
*/var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}(function(f){if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.Diaspora=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(require,module,exports){(function(global){"use strict";var _typeof2="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);};!function t(e,n,r){function i(u,a){if(!n[u]){if(!e[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(o)return o(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s;}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(t){var n=e[u][1][t];return i(n||t);},l,l.exports,t,e,n,r);}return n[u].exports;}for(var o="function"==typeof require&&require,u=0;u<r.length;u++){i(r[u]);}return i;}({1:[function(t,e,n){(function(t,r){/* @preserve
             * The MIT License (MIT)
             * 
             * Copyright (c) 2013-2017 Petka Antonov
             * 
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             * 
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             * 
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             * 
             */!function(t){if("object"==(void 0===n?"undefined":_typeof2(n))&&void 0!==e)e.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i;"undefined"!=typeof window?i=window:void 0!==r?i=r:"undefined"!=typeof self&&(i=self),i.Promise=t();}}(function(){return function t(e,n,r){function i(u,a){if(!n[u]){if(!e[u]){var c="function"==typeof _dereq_&&_dereq_;if(!a&&c)return c(u,!0);if(o)return o(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s;}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(t){var n=e[u][1][t];return i(n||t);},l,l.exports,t,e,n,r);}return n[u].exports;}for(var o="function"==typeof _dereq_&&_dereq_,u=0;u<r.length;u++){i(r[u]);}return i;}({1:[function(t,e,n){e.exports=function(t){function e(t){var e=new n(t),r=e.promise();return e.setHowMany(1),e.setUnwrap(),e.init(),r;}var n=t._SomePromiseArray;t.any=function(t){return e(t);},t.prototype.any=function(){return e(this);};};},{}],2:[function(e,n,r){function i(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new l(16),this._normalQueue=new l(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var t=this;this.drainQueues=function(){t._drainQueues();},this._schedule=s;}function o(t,e,n){this._lateQueue.push(t,e,n),this._queueTick();}function u(t,e,n){this._normalQueue.push(t,e,n),this._queueTick();}function a(t){this._normalQueue._pushOne(t),this._queueTick();}var c;try{throw new Error();}catch(t){c=t;}var s=e("./schedule"),l=e("./queue"),f=e("./util");i.prototype.setScheduler=function(t){var e=this._schedule;return this._schedule=t,this._customScheduler=!0,e;},i.prototype.hasCustomScheduler=function(){return this._customScheduler;},i.prototype.enableTrampoline=function(){this._trampolineEnabled=!0;},i.prototype.disableTrampolineIfNecessary=function(){f.hasDevTools&&(this._trampolineEnabled=!1);},i.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues;},i.prototype.fatalError=function(e,n){n?(t.stderr.write("Fatal "+(e instanceof Error?e.stack:e)+"\n"),t.exit(2)):this.throwLater(e);},i.prototype.throwLater=function(t,e){if(1===arguments.length&&(e=t,t=function t(){throw e;}),"undefined"!=typeof setTimeout)setTimeout(function(){t(e);},0);else try{this._schedule(function(){t(e);});}catch(t){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");}},f.hasDevTools?(i.prototype.invokeLater=function(t,e,n){this._trampolineEnabled?o.call(this,t,e,n):this._schedule(function(){setTimeout(function(){t.call(e,n);},100);});},i.prototype.invoke=function(t,e,n){this._trampolineEnabled?u.call(this,t,e,n):this._schedule(function(){t.call(e,n);});},i.prototype.settlePromises=function(t){this._trampolineEnabled?a.call(this,t):this._schedule(function(){t._settlePromises();});}):(i.prototype.invokeLater=o,i.prototype.invoke=u,i.prototype.settlePromises=a),i.prototype._drainQueue=function(t){for(;t.length()>0;){var e=t.shift();if("function"==typeof e){var n=t.shift(),r=t.shift();e.call(n,r);}else e._settlePromises();}},i.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,this._drainQueue(this._lateQueue);},i.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues));},i.prototype._reset=function(){this._isTickUsed=!1;},n.exports=i,n.exports.firstLineError=c;},{"./queue":26,"./schedule":29,"./util":36}],3:[function(t,e,n){e.exports=function(t,e,n,r){var i=!1,o=function o(t,e){this._reject(e);},u=function u(t,e){e.promiseRejectionQueued=!0,e.bindingPromise._then(o,o,null,this,t);},a=function a(t,e){0==(50397184&this._bitField)&&this._resolveCallback(e.target);},c=function c(t,e){e.promiseRejectionQueued||this._reject(t);};t.prototype.bind=function(o){i||(i=!0,t.prototype._propagateFrom=r.propagateFromFunction(),t.prototype._boundValue=r.boundValueFunction());var s=n(o),l=new t(e);l._propagateFrom(this,1);var f=this._target();if(l._setBoundTo(s),s instanceof t){var h={promiseRejectionQueued:!1,promise:l,target:f,bindingPromise:s};f._then(e,u,void 0,l,h),s._then(a,c,void 0,l,h),l._setOnCancel(s);}else l._resolveCallback(f);return l;},t.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=2097152|this._bitField,this._boundTo=t):this._bitField=-2097153&this._bitField;},t.prototype._isBound=function(){return 2097152==(2097152&this._bitField);},t.bind=function(e,n){return t.resolve(n).bind(e);};};},{}],4:[function(t,e,n){var r;"undefined"!=typeof Promise&&(r=Promise);var i=t("./promise")();i.noConflict=function(){try{Promise===i&&(Promise=r);}catch(t){}return i;},e.exports=i;},{"./promise":22}],5:[function(t,e,n){var r=Object.create;if(r){var i=r(null),o=r(null);i[" size"]=o[" size"]=0;}e.exports=function(e){function n(t,n){var r;if(null!=t&&(r=t[n]),"function"!=typeof r){var i="Object "+u.classString(t)+" has no method '"+u.toString(n)+"'";throw new e.TypeError(i);}return r;}function r(t){return n(t,this.pop()).apply(t,this);}function i(t){return t[this];}function o(t){var e=+this;return 0>e&&(e=Math.max(0,e+t.length)),t[e];}var u=t("./util"),a=u.canEvaluate;u.isIdentifier,e.prototype.call=function(t){var e=[].slice.call(arguments,1);return e.push(t),this._then(r,void 0,void 0,e,void 0);},e.prototype.get=function(t){var e;if("number"==typeof t)e=o;else if(a){var n=(void 0)(t);e=null!==n?n:i;}else e=i;return this._then(e,void 0,void 0,t,void 0);};};},{"./util":36}],6:[function(t,e,n){e.exports=function(e,n,r,i){var o=t("./util"),u=o.tryCatch,a=o.errorObj,c=e._async;e.prototype.break=e.prototype.cancel=function(){if(!i.cancellation())return this._warn("cancellation is disabled");for(var t=this,e=t;t._isCancellable();){if(!t._cancelBy(e)){e._isFollowing()?e._followee().cancel():e._cancelBranched();break;}var n=t._cancellationParent;if(null==n||!n._isCancellable()){t._isFollowing()?t._followee().cancel():t._cancelBranched();break;}t._isFollowing()&&t._followee().cancel(),t._setWillBeCancelled(),e=t,t=n;}},e.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--;},e.prototype._enoughBranchesHaveCancelled=function(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0;},e.prototype._cancelBy=function(t){return t===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),!!this._enoughBranchesHaveCancelled()&&(this._invokeOnCancel(),!0));},e.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel();},e.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),c.invoke(this._cancelPromises,this,void 0));},e.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises();},e.prototype._unsetOnCancel=function(){this._onCancelField=void 0;},e.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled();},e.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled();},e.prototype._doInvokeOnCancel=function(t,e){if(o.isArray(t))for(var n=0;n<t.length;++n){this._doInvokeOnCancel(t[n],e);}else if(void 0!==t)if("function"==typeof t){if(!e){var r=u(t).call(this._boundValue());r===a&&(this._attachExtraTrace(r.e),c.throwLater(r.e));}}else t._resultCancelled(this);},e.prototype._invokeOnCancel=function(){var t=this._onCancel();this._unsetOnCancel(),c.invoke(this._doInvokeOnCancel,this,t);},e.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel());},e.prototype._resultCancelled=function(){this.cancel();};};},{"./util":36}],7:[function(t,e,n){e.exports=function(e){var n=t("./util"),r=t("./es5").keys,i=n.tryCatch,o=n.errorObj;return function(t,u,a){return function(c){var s=a._boundValue();t:for(var l=0;l<t.length;++l){var f=t[l];if(f===Error||null!=f&&f.prototype instanceof Error){if(c instanceof f)return i(u).call(s,c);}else if("function"==typeof f){var h=i(f).call(s,c);if(h===o)return h;if(h)return i(u).call(s,c);}else if(n.isObject(c)){for(var p=r(f),_=0;_<p.length;++_){var d=p[_];if(f[d]!=c[d])continue t;}return i(u).call(s,c);}}return e;};};};},{"./es5":13,"./util":36}],8:[function(t,e,n){e.exports=function(t){function e(){this._trace=new e.CapturedTrace(n());}function n(){var t=i.length-1;return t>=0?i[t]:void 0;}var r=!1,i=[];return t.prototype._promiseCreated=function(){},t.prototype._pushContext=function(){},t.prototype._popContext=function(){return null;},t._peekContext=t.prototype._peekContext=function(){},e.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,i.push(this._trace));},e.prototype._popContext=function(){if(void 0!==this._trace){var t=i.pop(),e=t._promiseCreated;return t._promiseCreated=null,e;}return null;},e.CapturedTrace=null,e.create=function(){return r?new e():void 0;},e.deactivateLongStackTraces=function(){},e.activateLongStackTraces=function(){var i=t.prototype._pushContext,o=t.prototype._popContext,u=t._peekContext,a=t.prototype._peekContext,c=t.prototype._promiseCreated;e.deactivateLongStackTraces=function(){t.prototype._pushContext=i,t.prototype._popContext=o,t._peekContext=u,t.prototype._peekContext=a,t.prototype._promiseCreated=c,r=!1;},r=!0,t.prototype._pushContext=e.prototype._pushContext,t.prototype._popContext=e.prototype._popContext,t._peekContext=t.prototype._peekContext=n,t.prototype._promiseCreated=function(){var t=this._peekContext();t&&null==t._promiseCreated&&(t._promiseCreated=this);};},e;};},{}],9:[function(e,n,r){n.exports=function(n,r){function i(t,e){return{promise:e};}function o(){return!1;}function u(t,e,n){var r=this;try{t(e,n,function(t){if("function"!=typeof t)throw new TypeError("onCancel must be a function, got: "+I.toString(t));r._attachCancellationCallback(t);});}catch(t){return t;}}function a(t){if(!this._isCancellable())return this;var e=this._onCancel();void 0!==e?I.isArray(e)?e.push(t):this._setOnCancel([e,t]):this._setOnCancel(t);}function c(){return this._onCancelField;}function s(t){this._onCancelField=t;}function l(){this._cancellationParent=void 0,this._onCancelField=void 0;}function f(t,e){if(0!=(1&e)){this._cancellationParent=t;var n=t._branchesRemainingToCancel;void 0===n&&(n=0),t._branchesRemainingToCancel=n+1;}0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo);}function h(){var t=this._boundTo;return void 0!==t&&t instanceof n?t.isFulfilled()?t.value():void 0:t;}function p(){this._trace=new T(this._peekContext());}function _(t,e){if(D(t)){var n=this._trace;if(void 0!==n&&e&&(n=n._parent),void 0!==n)n.attachExtraTrace(t);else if(!t.__stackCleaned__){var r=w(t);I.notEnumerableProp(t,"stack",r.message+"\n"+r.stack.join("\n")),I.notEnumerableProp(t,"__stackCleaned__",!0);}}}function d(t,e,r){if(nt.warnings){var i,o=new L(t);if(e)r._attachExtraTrace(o);else if(nt.longStackTraces&&(i=n._peekContext()))i.attachExtraTrace(o);else{var u=w(o);o.stack=u.message+"\n"+u.stack.join("\n");}K("warning",o)||j(o,"",!0);}}function v(t,e){for(var n=0;n<e.length-1;++n){e[n].push("From previous event:"),e[n]=e[n].join("\n");}return n<e.length&&(e[n]=e[n].join("\n")),t+"\n"+e.join("\n");}function y(t){for(var e=0;e<t.length;++e){(0===t[e].length||e+1<t.length&&t[e][0]===t[e+1][0])&&(t.splice(e,1),e--);}}function g(t){for(var e=t[0],n=1;n<t.length;++n){for(var r=t[n],i=e.length-1,o=e[i],u=-1,a=r.length-1;a>=0;--a){if(r[a]===o){u=a;break;}}for(a=u;a>=0;--a){var c=r[a];if(e[i]!==c)break;e.pop(),i--;}e=r;}}function m(t){for(var e=[],n=0;n<t.length;++n){var r=t[n],i="    (No stack trace)"===r||M.test(r),o=i&&Y(r);i&&!o&&(z&&" "!==r.charAt(0)&&(r="    "+r),e.push(r));}return e;}function b(t){for(var e=t.stack.replace(/\s+$/g,"").split("\n"),n=0;n<e.length;++n){var r=e[n];if("    (No stack trace)"===r||M.test(r))break;}return n>0&&"SyntaxError"!=t.name&&(e=e.slice(n)),e;}function w(t){var e=t.stack,n=t.toString();return e="string"==typeof e&&e.length>0?b(t):["    (No stack trace)"],{message:n,stack:"SyntaxError"==t.name?e:m(e)};}function j(t,e,n){if("undefined"!=typeof console){var r;if(I.isObject(t)){var i=t.stack;r=e+V(i,t);}else r=e+String(t);"function"==typeof O?O(r,n):("function"==typeof console.log||"object"==_typeof2(console.log))&&console.log(r);}}function x(t,e,n,r){var i=!1;try{"function"==typeof e&&(i=!0,"rejectionHandled"===t?e(r):e(n,r));}catch(t){P.throwLater(t);}"unhandledRejection"===t?K(t,n,r)||i||j(n,"Unhandled rejection "):K(t,r);}function E(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{if(e=t&&"function"==typeof t.toString?t.toString():I.toString(t),/\[object [a-zA-Z0-9$_]+\]/.test(e))try{e=JSON.stringify(t);}catch(t){}0===e.length&&(e="(empty array)");}return"(<"+C(e)+">, no stack trace)";}function C(t){return t.length<41?t:t.substr(0,38)+"...";}function k(){return"function"==typeof et;}function F(t){var e=t.match(tt);return e?{fileName:e[1],line:parseInt(e[2],10)}:void 0;}function T(t){this._parent=t,this._promisesCreated=0;var e=this._length=1+(void 0===t?0:t._length);et(this,T),e>32&&this.uncycle();}var A,S,O,R=n._getDomain,P=n._async,L=e("./errors").Warning,I=e("./util"),D=I.canAttachTrace,U=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,B=/\((?:timers\.js):\d+:\d+\)/,N=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,M=null,V=null,z=!1,H=!(0==I.env("BLUEBIRD_DEBUG")||!I.env("BLUEBIRD_DEBUG")&&"development"!==I.env("NODE_ENV")),W=!(0==I.env("BLUEBIRD_WARNINGS")||!H&&!I.env("BLUEBIRD_WARNINGS")),$=!(0==I.env("BLUEBIRD_LONG_STACK_TRACES")||!H&&!I.env("BLUEBIRD_LONG_STACK_TRACES")),q=0!=I.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(W||!!I.env("BLUEBIRD_W_FORGOTTEN_RETURN"));n.prototype.suppressUnhandledRejections=function(){var t=this._target();t._bitField=-1048577&t._bitField|524288;},n.prototype._ensurePossibleRejectionHandled=function(){0==(524288&this._bitField)&&(this._setRejectionIsUnhandled(),P.invokeLater(this._notifyUnhandledRejection,this,void 0));},n.prototype._notifyUnhandledRejectionIsHandled=function(){x("rejectionHandled",A,void 0,this);},n.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField;},n.prototype._returnedNonUndefined=function(){return 0!=(268435456&this._bitField);},n.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue();this._setUnhandledRejectionIsNotified(),x("unhandledRejection",S,t,this);}},n.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField;},n.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-262145&this._bitField;},n.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0;},n.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField;},n.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled());},n.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0;},n.prototype._warn=function(t,e,n){return d(t,e,n||this);},n.onPossiblyUnhandledRejection=function(t){var e=R();S="function"==typeof t?null===e?t:I.domainBind(e,t):void 0;},n.onUnhandledRejectionHandled=function(t){var e=R();A="function"==typeof t?null===e?t:I.domainBind(e,t):void 0;};var Q=function Q(){};n.longStackTraces=function(){if(P.haveItemsQueued()&&!nt.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if(!nt.longStackTraces&&k()){var t=n.prototype._captureStackTrace,e=n.prototype._attachExtraTrace;nt.longStackTraces=!0,Q=function Q(){if(P.haveItemsQueued()&&!nt.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");n.prototype._captureStackTrace=t,n.prototype._attachExtraTrace=e,r.deactivateLongStackTraces(),P.enableTrampoline(),nt.longStackTraces=!1;},n.prototype._captureStackTrace=p,n.prototype._attachExtraTrace=_,r.activateLongStackTraces(),P.disableTrampolineIfNecessary();}},n.hasLongStackTraces=function(){return nt.longStackTraces&&k();};var G=function(){try{if("function"==typeof CustomEvent){t=new CustomEvent("CustomEvent");return I.global.dispatchEvent(t),function(t,e){var n=new CustomEvent(t.toLowerCase(),{detail:e,cancelable:!0});return!I.global.dispatchEvent(n);};}if("function"==typeof Event){var t=new Event("CustomEvent");return I.global.dispatchEvent(t),function(t,e){var n=new Event(t.toLowerCase(),{cancelable:!0});return n.detail=e,!I.global.dispatchEvent(n);};}return(t=document.createEvent("CustomEvent")).initCustomEvent("testingtheevent",!1,!0,{}),I.global.dispatchEvent(t),function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t.toLowerCase(),!1,!0,e),!I.global.dispatchEvent(n);};}catch(t){}return function(){return!1;};}(),Z=I.isNode?function(){return t.emit.apply(t,arguments);}:I.global?function(t){var e="on"+t.toLowerCase(),n=I.global[e];return!!n&&(n.apply(I.global,[].slice.call(arguments,1)),!0);}:function(){return!1;},X={promiseCreated:i,promiseFulfilled:i,promiseRejected:i,promiseResolved:i,promiseCancelled:i,promiseChained:function promiseChained(t,e,n){return{promise:e,child:n};},warning:function warning(t,e){return{warning:e};},unhandledRejection:function unhandledRejection(t,e,n){return{reason:e,promise:n};},rejectionHandled:i},K=function K(t){var e=!1;try{e=Z.apply(null,arguments);}catch(t){P.throwLater(t),e=!0;}var n=!1;try{n=G(t,X[t].apply(null,arguments));}catch(t){P.throwLater(t),n=!0;}return n||e;};n.config=function(t){if("longStackTraces"in(t=Object(t))&&(t.longStackTraces?n.longStackTraces():!t.longStackTraces&&n.hasLongStackTraces()&&Q()),"warnings"in t){var e=t.warnings;nt.warnings=!!e,q=nt.warnings,I.isObject(e)&&"wForgottenReturn"in e&&(q=!!e.wForgottenReturn);}if("cancellation"in t&&t.cancellation&&!nt.cancellation){if(P.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");n.prototype._clearCancellationData=l,n.prototype._propagateFrom=f,n.prototype._onCancel=c,n.prototype._setOnCancel=s,n.prototype._attachCancellationCallback=a,n.prototype._execute=u,J=f,nt.cancellation=!0;}return"monitoring"in t&&(t.monitoring&&!nt.monitoring?(nt.monitoring=!0,n.prototype._fireEvent=K):!t.monitoring&&nt.monitoring&&(nt.monitoring=!1,n.prototype._fireEvent=o)),n;},n.prototype._fireEvent=o,n.prototype._execute=function(t,e,n){try{t(e,n);}catch(t){return t;}},n.prototype._onCancel=function(){},n.prototype._setOnCancel=function(t){},n.prototype._attachCancellationCallback=function(t){},n.prototype._captureStackTrace=function(){},n.prototype._attachExtraTrace=function(){},n.prototype._clearCancellationData=function(){},n.prototype._propagateFrom=function(t,e){};var J=function J(t,e){0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo);},Y=function Y(){return!1;},tt=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;I.inherits(T,Error),r.CapturedTrace=T,T.prototype.uncycle=function(){var t=this._length;if(!(2>t)){for(var e=[],n={},r=0,i=this;void 0!==i;++r){e.push(i),i=i._parent;}for(r=(t=this._length=r)-1;r>=0;--r){var o=e[r].stack;void 0===n[o]&&(n[o]=r);}for(r=0;t>r;++r){var u=n[e[r].stack];if(void 0!==u&&u!==r){u>0&&(e[u-1]._parent=void 0,e[u-1]._length=1),e[r]._parent=void 0,e[r]._length=1;var a=r>0?e[r-1]:this;t-1>u?(a._parent=e[u+1],a._parent.uncycle(),a._length=a._parent._length+1):(a._parent=void 0,a._length=1);for(var c=a._length+1,s=r-2;s>=0;--s){e[s]._length=c,c++;}return;}}}},T.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle();for(var e=w(t),n=e.message,r=[e.stack],i=this;void 0!==i;){r.push(m(i.stack.split("\n"))),i=i._parent;}g(r),y(r),I.notEnumerableProp(t,"stack",v(n,r)),I.notEnumerableProp(t,"__stackCleaned__",!0);}};var et=function(){var t=/^\s*at\s*/,e=function e(t,_e2){return"string"==typeof t?t:void 0!==_e2.name&&void 0!==_e2.message?_e2.toString():E(_e2);};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,M=t,V=e;var n=Error.captureStackTrace;return Y=function Y(t){return U.test(t);},function(t,e){Error.stackTraceLimit+=6,n(t,e),Error.stackTraceLimit-=6;};}var r=new Error();if("string"==typeof r.stack&&r.stack.split("\n")[0].indexOf("stackDetection@")>=0)return M=/@/,V=e,z=!0,function(t){t.stack=new Error().stack;};var i;try{throw new Error();}catch(t){i="stack"in t;}return"stack"in r||!i||"number"!=typeof Error.stackTraceLimit?(V=function V(t,e){return"string"==typeof t?t:"object"!=(void 0===e?"undefined":_typeof2(e))&&"function"!=typeof e||void 0===e.name||void 0===e.message?E(e):e.toString();},null):(M=t,V=e,function(t){Error.stackTraceLimit+=6;try{throw new Error();}catch(e){t.stack=e.stack;}Error.stackTraceLimit-=6;});}();"undefined"!=typeof console&&void 0!==console.warn&&(O=function O(t){console.warn(t);},I.isNode&&t.stderr.isTTY?O=function O(t,e){var n=e?"[33m":"[31m";console.warn(n+t+"[0m\n");}:I.isNode||"string"!=typeof new Error().stack||(O=function O(t,e){console.warn("%c"+t,e?"color: darkorange":"color: red");}));var nt={warnings:W,longStackTraces:!1,cancellation:!1,monitoring:!1};return $&&n.longStackTraces(),{longStackTraces:function longStackTraces(){return nt.longStackTraces;},warnings:function warnings(){return nt.warnings;},cancellation:function cancellation(){return nt.cancellation;},monitoring:function monitoring(){return nt.monitoring;},propagateFromFunction:function propagateFromFunction(){return J;},boundValueFunction:function boundValueFunction(){return h;},checkForgottenReturns:function checkForgottenReturns(t,e,n,r,i){if(void 0===t&&null!==e&&q){if(void 0!==i&&i._returnedNonUndefined())return;if(0==(65535&r._bitField))return;n&&(n+=" ");var o="",u="";if(e._trace){for(var a=e._trace.stack.split("\n"),c=m(a),s=c.length-1;s>=0;--s){var l=c[s];if(!B.test(l)){var f=l.match(N);f&&(o="at "+f[1]+":"+f[2]+":"+f[3]+" ");break;}}if(c.length>0)for(var h=c[0],s=0;s<a.length;++s){if(a[s]===h){s>0&&(u="\n"+a[s-1]);break;}}}var p="a promise was created in a "+n+"handler "+o+"but was not returned from it, see http://goo.gl/rRqMUw"+u;r._warn(p,!0,e);}},setBounds:function setBounds(t,e){if(k()){for(var n,r,i=t.stack.split("\n"),o=e.stack.split("\n"),u=-1,a=-1,c=0;c<i.length;++c){if(s=F(i[c])){n=s.fileName,u=s.line;break;}}for(c=0;c<o.length;++c){var s=F(o[c]);if(s){r=s.fileName,a=s.line;break;}}0>u||0>a||!n||!r||n!==r||u>=a||(Y=function Y(t){if(U.test(t))return!0;var e=F(t);return!!(e&&e.fileName===n&&u<=e.line&&e.line<=a);});}},warn:d,deprecated:function deprecated(t,e){var n=t+" is deprecated and will be removed in a future version.";return e&&(n+=" Use "+e+" instead."),d(n);},CapturedTrace:T,fireDomEvent:G,fireGlobalEvent:Z};};},{"./errors":12,"./util":36}],10:[function(t,e,n){e.exports=function(t){function e(){return this.value;}function n(){throw this.reason;}t.prototype.return=t.prototype.thenReturn=function(n){return n instanceof t&&n.suppressUnhandledRejections(),this._then(e,void 0,void 0,{value:n},void 0);},t.prototype.throw=t.prototype.thenThrow=function(t){return this._then(n,void 0,void 0,{reason:t},void 0);},t.prototype.catchThrow=function(t){if(arguments.length<=1)return this._then(void 0,n,void 0,{reason:t},void 0);var e=arguments[1];return this.caught(t,function(){throw e;});},t.prototype.catchReturn=function(n){if(arguments.length<=1)return n instanceof t&&n.suppressUnhandledRejections(),this._then(void 0,e,void 0,{value:n},void 0);var r=arguments[1];r instanceof t&&r.suppressUnhandledRejections();return this.caught(n,function(){return r;});};};},{}],11:[function(t,e,n){e.exports=function(t,e){function n(){return i(this);}var r=t.reduce,i=t.all;t.prototype.each=function(t){return r(this,t,e,0)._then(n,void 0,void 0,this,void 0);},t.prototype.mapSeries=function(t){return r(this,t,e,e);},t.each=function(t,i){return r(t,i,e,0)._then(n,void 0,void 0,t,void 0);},t.mapSeries=function(t,n){return r(t,n,e,e);};};},{}],12:[function(t,e,n){function r(t,e){function n(r){return this instanceof n?(f(this,"message","string"==typeof r?r:e),f(this,"name",t),void(Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this))):new n(r);}return l(n,Error),n;}function i(t){return this instanceof i?(f(this,"name","OperationalError"),f(this,"message",t),this.cause=t,this.isOperational=!0,void(t instanceof Error?(f(this,"message",t.message),f(this,"stack",t.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor))):new i(t);}var o,u,a=t("./es5"),c=a.freeze,s=t("./util"),l=s.inherits,f=s.notEnumerableProp,h=r("Warning","warning"),p=r("CancellationError","cancellation error"),_=r("TimeoutError","timeout error"),d=r("AggregateError","aggregate error");try{o=TypeError,u=RangeError;}catch(t){o=r("TypeError","type error"),u=r("RangeError","range error");}for(var v="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),y=0;y<v.length;++y){"function"==typeof Array.prototype[v[y]]&&(d.prototype[v[y]]=Array.prototype[v[y]]);}a.defineProperty(d.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),d.prototype.isOperational=!0;var g=0;d.prototype.toString=function(){var t=Array(4*g+1).join(" "),e="\n"+t+"AggregateError of:\n";g++,t=Array(4*g+1).join(" ");for(var n=0;n<this.length;++n){for(var r=this[n]===this?"[Circular AggregateError]":this[n]+"",i=r.split("\n"),o=0;o<i.length;++o){i[o]=t+i[o];}e+=(r=i.join("\n"))+"\n";}return g--,e;},l(i,Error);var m=Error.__BluebirdErrorTypes__;m||(m=c({CancellationError:p,TimeoutError:_,OperationalError:i,RejectionError:i,AggregateError:d}),a.defineProperty(Error,"__BluebirdErrorTypes__",{value:m,writable:!1,enumerable:!1,configurable:!1})),e.exports={Error:Error,TypeError:o,RangeError:u,CancellationError:m.CancellationError,OperationalError:m.OperationalError,TimeoutError:m.TimeoutError,AggregateError:m.AggregateError,Warning:h};},{"./es5":13,"./util":36}],13:[function(t,e,n){var r=function(){return void 0===this;}();if(r)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:r,propertyIsWritable:function propertyIsWritable(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return!(n&&!n.writable&&!n.set);}};else{var i={}.hasOwnProperty,o={}.toString,u={}.constructor.prototype,a=function a(t){var e=[];for(var n in t){i.call(t,n)&&e.push(n);}return e;};e.exports={isArray:function isArray(t){try{return"[object Array]"===o.call(t);}catch(t){return!1;}},keys:a,names:a,defineProperty:function defineProperty(t,e,n){return t[e]=n.value,t;},getDescriptor:function getDescriptor(t,e){return{value:t[e]};},freeze:function freeze(t){return t;},getPrototypeOf:function getPrototypeOf(t){try{return Object(t).constructor.prototype;}catch(t){return u;}},isES5:r,propertyIsWritable:function propertyIsWritable(){return!0;}};}},{}],14:[function(t,e,n){e.exports=function(t,e){var n=t.map;t.prototype.filter=function(t,r){return n(this,t,r,e);},t.filter=function(t,r,i){return n(t,r,i,e);};};},{}],15:[function(t,e,n){e.exports=function(e,n,r){function i(t,e,n){this.promise=t,this.type=e,this.handler=n,this.called=!1,this.cancelPromise=null;}function o(t){this.finallyHandler=t;}function u(t,e){return null!=t.cancelPromise&&(arguments.length>1?t.cancelPromise._reject(e):t.cancelPromise._cancel(),t.cancelPromise=null,!0);}function a(){return s.call(this,this.promise._target()._settledValue());}function c(t){return u(this,t)?void 0:(h.e=t,h);}function s(t){var i=this.promise,s=this.handler;if(!this.called){this.called=!0;var l=this.isFinallyHandler()?s.call(i._boundValue()):s.call(i._boundValue(),t);if(l===r)return l;if(void 0!==l){i._setReturnedNonUndefined();var p=n(l,i);if(p instanceof e){if(null!=this.cancelPromise){if(p._isCancelled()){var _=new f("late cancellation observer");return i._attachExtraTrace(_),h.e=_,h;}p.isPending()&&p._attachCancellationCallback(new o(this));}return p._then(a,c,void 0,this,void 0);}}}return i.isRejected()?(u(this),h.e=t,h):(u(this),t);}var l=t("./util"),f=e.CancellationError,h=l.errorObj,p=t("./catch_filter")(r);return i.prototype.isFinallyHandler=function(){return 0===this.type;},o.prototype._resultCancelled=function(){u(this.finallyHandler);},e.prototype._passThrough=function(t,e,n,r){return"function"!=typeof t?this.then():this._then(n,r,void 0,new i(this,e,t),void 0);},e.prototype.lastly=e.prototype.finally=function(t){return this._passThrough(t,0,s,s);},e.prototype.tap=function(t){return this._passThrough(t,1,s);},e.prototype.tapCatch=function(t){var n=arguments.length;if(1===n)return this._passThrough(t,1,void 0,s);var r,i=new Array(n-1),o=0;for(r=0;n-1>r;++r){var u=arguments[r];if(!l.isObject(u))return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got "+l.classString(u)));i[o++]=u;}i.length=o;var a=arguments[r];return this._passThrough(p(i,a,this),1,void 0,s);},i;};},{"./catch_filter":7,"./util":36}],16:[function(t,e,n){e.exports=function(e,n,r,i,o,u){function a(t,n,r){for(var o=0;o<n.length;++o){r._pushContext();var u=h(n[o])(t);if(r._popContext(),u===f){r._pushContext();var a=e.reject(f.e);return r._popContext(),a;}var c=i(u,r);if(c instanceof e)return c;}return null;}function c(t,n,i,o){if(u.cancellation()){var a=new e(r),c=this._finallyPromise=new e(r);this._promise=a.lastly(function(){return c;}),a._captureStackTrace(),a._setOnCancel(this);}else(this._promise=new e(r))._captureStackTrace();this._stack=o,this._generatorFunction=t,this._receiver=n,this._generator=void 0,this._yieldHandlers="function"==typeof i?[i].concat(p):p,this._yieldedPromise=null,this._cancellationPhase=!1;}var s=t("./errors").TypeError,l=t("./util"),f=l.errorObj,h=l.tryCatch,p=[];l.inherits(c,o),c.prototype._isResolved=function(){return null===this._promise;},c.prototype._cleanup=function(){this._promise=this._generator=null,u.cancellation()&&null!==this._finallyPromise&&(this._finallyPromise._fulfill(),this._finallyPromise=null);},c.prototype._promiseCancelled=function(){if(!this._isResolved()){var t;if(void 0!==this._generator.return)this._promise._pushContext(),t=h(this._generator.return).call(this._generator,void 0),this._promise._popContext();else{var n=new e.CancellationError("generator .return() sentinel");e.coroutine.returnSentinel=n,this._promise._attachExtraTrace(n),this._promise._pushContext(),t=h(this._generator.throw).call(this._generator,n),this._promise._popContext();}this._cancellationPhase=!0,this._yieldedPromise=null,this._continue(t);}},c.prototype._promiseFulfilled=function(t){this._yieldedPromise=null,this._promise._pushContext();var e=h(this._generator.next).call(this._generator,t);this._promise._popContext(),this._continue(e);},c.prototype._promiseRejected=function(t){this._yieldedPromise=null,this._promise._attachExtraTrace(t),this._promise._pushContext();var e=h(this._generator.throw).call(this._generator,t);this._promise._popContext(),this._continue(e);},c.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof e){var t=this._yieldedPromise;this._yieldedPromise=null,t.cancel();}},c.prototype.promise=function(){return this._promise;},c.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._promiseFulfilled(void 0);},c.prototype._continue=function(t){var n=this._promise;if(t===f)return this._cleanup(),this._cancellationPhase?n.cancel():n._rejectCallback(t.e,!1);var r=t.value;if(!0===t.done)return this._cleanup(),this._cancellationPhase?n.cancel():n._resolveCallback(r);var o=i(r,this._promise);if(o instanceof e||null!==(o=a(o,this._yieldHandlers,this._promise))){var u=(o=o._target())._bitField;0==(50397184&u)?(this._yieldedPromise=o,o._proxy(this,null)):0!=(33554432&u)?e._async.invoke(this._promiseFulfilled,this,o._value()):0!=(16777216&u)?e._async.invoke(this._promiseRejected,this,o._reason()):this._promiseCancelled();}else this._promiseRejected(new s("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s",String(r))+"From coroutine:\n"+this._stack.split("\n").slice(1,-7).join("\n")));},e.coroutine=function(t,e){if("function"!=typeof t)throw new s("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var n=Object(e).yieldHandler,r=c,i=new Error().stack;return function(){var e=t.apply(this,arguments),o=new r(void 0,void 0,n,i),u=o.promise();return o._generator=e,o._promiseFulfilled(void 0),u;};},e.coroutine.addYieldHandler=function(t){if("function"!=typeof t)throw new s("expecting a function but got "+l.classString(t));p.push(t);},e.spawn=function(t){if(u.deprecated("Promise.spawn()","Promise.coroutine()"),"function"!=typeof t)return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var r=new c(t,this),i=r.promise();return r._run(e.spawn),i;};};},{"./errors":12,"./util":36}],17:[function(t,e,n){e.exports=function(e,n,r,i,o,u){var a=t("./util");a.canEvaluate,a.tryCatch,a.errorObj,e.join=function(){var t,e=arguments.length-1;if(e>0&&"function"==typeof arguments[e]){t=arguments[e];}var r=[].slice.call(arguments);t&&r.pop();var i=new n(r).promise();return void 0!==t?i.spread(t):i;};};},{"./util":36}],18:[function(t,e,n){e.exports=function(e,n,r,i,o,u){function a(t,e,n,r){this.constructor$(t),this._promise._captureStackTrace();var i=s();this._callback=null===i?e:l.domainBind(i,e),this._preservedValues=r===o?new Array(this.length()):null,this._limit=n,this._inFlight=0,this._queue=[],p.invoke(this._asyncInit,this,void 0);}function c(t,n,i,o){if("function"!=typeof n)return r("expecting a function but got "+l.classString(n));var u=0;if(void 0!==i){if("object"!=(void 0===i?"undefined":_typeof2(i))||null===i)return e.reject(new TypeError("options argument must be an object but it is "+l.classString(i)));if("number"!=typeof i.concurrency)return e.reject(new TypeError("'concurrency' must be a number but it is "+l.classString(i.concurrency)));u=i.concurrency;}return u="number"==typeof u&&isFinite(u)&&u>=1?u:0,new a(t,n,u,o).promise();}var s=e._getDomain,l=t("./util"),f=l.tryCatch,h=l.errorObj,p=e._async;l.inherits(a,n),a.prototype._asyncInit=function(){this._init$(void 0,-2);},a.prototype._init=function(){},a.prototype._promiseFulfilled=function(t,n){var r=this._values,o=this.length(),a=this._preservedValues,c=this._limit;if(0>n){if(n=-1*n-1,r[n]=t,c>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return!0;}else{if(c>=1&&this._inFlight>=c)return r[n]=t,this._queue.push(n),!1;null!==a&&(a[n]=t);var s=this._promise,l=this._callback,p=s._boundValue();s._pushContext();var _=f(l).call(p,t,n,o),d=s._popContext();if(u.checkForgottenReturns(_,d,null!==a?"Promise.filter":"Promise.map",s),_===h)return this._reject(_.e),!0;var v=i(_,this._promise);if(v instanceof e){var y=(v=v._target())._bitField;if(0==(50397184&y))return c>=1&&this._inFlight++,r[n]=v,v._proxy(this,-1*(n+1)),!1;if(0==(33554432&y))return 0!=(16777216&y)?(this._reject(v._reason()),!0):(this._cancel(),!0);_=v._value();}r[n]=_;}return++this._totalResolved>=o&&(null!==a?this._filter(r,a):this._resolve(r),!0);},a.prototype._drainQueue=function(){for(var t=this._queue,e=this._limit,n=this._values;t.length>0&&this._inFlight<e;){if(this._isResolved())return;var r=t.pop();this._promiseFulfilled(n[r],r);}},a.prototype._filter=function(t,e){for(var n=e.length,r=new Array(n),i=0,o=0;n>o;++o){t[o]&&(r[i++]=e[o]);}r.length=i,this._resolve(r);},a.prototype.preservedValues=function(){return this._preservedValues;},e.prototype.map=function(t,e){return c(this,t,e,null);},e.map=function(t,e,n,r){return c(t,e,n,r);};};},{"./util":36}],19:[function(t,e,n){e.exports=function(e,n,r,i,o){var u=t("./util"),a=u.tryCatch;e.method=function(t){if("function"!=typeof t)throw new e.TypeError("expecting a function but got "+u.classString(t));return function(){var r=new e(n);r._captureStackTrace(),r._pushContext();var i=a(t).apply(this,arguments),u=r._popContext();return o.checkForgottenReturns(i,u,"Promise.method",r),r._resolveFromSyncValue(i),r;};},e.attempt=e.try=function(t){if("function"!=typeof t)return i("expecting a function but got "+u.classString(t));var r=new e(n);r._captureStackTrace(),r._pushContext();var c;if(arguments.length>1){o.deprecated("calling Promise.try with more than 1 argument");var s=arguments[1],l=arguments[2];c=u.isArray(s)?a(t).apply(l,s):a(t).call(l,s);}else c=a(t)();var f=r._popContext();return o.checkForgottenReturns(c,f,"Promise.try",r),r._resolveFromSyncValue(c),r;},e.prototype._resolveFromSyncValue=function(t){t===u.errorObj?this._rejectCallback(t.e,!1):this._resolveCallback(t,!0);};};},{"./util":36}],20:[function(t,e,n){function r(t){return t instanceof Error&&c.getPrototypeOf(t)===Error.prototype;}function i(t){var e;if(r(t)){(e=new a(t)).name=t.name,e.message=t.message,e.stack=t.stack;for(var n=c.keys(t),i=0;i<n.length;++i){var u=n[i];s.test(u)||(e[u]=t[u]);}return e;}return o.markAsOriginatingFromRejection(t),t;}var o=t("./util"),u=o.maybeWrapAsError,a=t("./errors").OperationalError,c=t("./es5"),s=/^(?:name|message|stack|cause)$/;e.exports=function(t,e){return function(n,r){if(null!==t){if(n){var o=i(u(n));t._attachExtraTrace(o),t._reject(o);}else if(e){var a=[].slice.call(arguments,1);t._fulfill(a);}else t._fulfill(r);t=null;}};};},{"./errors":12,"./es5":13,"./util":36}],21:[function(t,e,n){e.exports=function(e){function n(t,e){var n=this;if(!o.isArray(t))return r.call(n,t,e);var i=a(e).apply(n._boundValue(),[null].concat(t));i===c&&u.throwLater(i.e);}function r(t,e){var n=this._boundValue(),r=void 0===t?a(e).call(n,null):a(e).call(n,null,t);r===c&&u.throwLater(r.e);}function i(t,e){var n=this;if(!t){var r=new Error(t+"");r.cause=t,t=r;}var i=a(e).call(n._boundValue(),t);i===c&&u.throwLater(i.e);}var o=t("./util"),u=e._async,a=o.tryCatch,c=o.errorObj;e.prototype.asCallback=e.prototype.nodeify=function(t,e){if("function"==typeof t){var o=r;void 0!==e&&Object(e).spread&&(o=n),this._then(o,i,void 0,this,t);}return this;};};},{"./util":36}],22:[function(e,n,r){n.exports=function(){function r(){}function i(t,e){if(null==t||t.constructor!==o)throw new m("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");if("function"!=typeof e)throw new m("expecting a function but got "+_.classString(e));}function o(t){t!==w&&i(this,t),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(t),this._promiseCreated(),this._fireEvent("promiseCreated",this);}function u(t){this.promise._resolveCallback(t);}function a(t){this.promise._rejectCallback(t,!1);}function c(t){var e=new o(w);e._fulfillmentHandler0=t,e._rejectionHandler0=t,e._promise0=t,e._receiver0=t;}var s,l=function l(){return new m("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");},f=function f(){return new o.PromiseInspection(this._target());},h=function h(t){return o.reject(new m(t));},p={},_=e("./util");s=_.isNode?function(){var e=t.domain;return void 0===e&&(e=null),e;}:function(){return null;},_.notEnumerableProp(o,"_getDomain",s);var d=e("./es5"),v=e("./async"),y=new v();d.defineProperty(o,"_async",{value:y});var g=e("./errors"),m=o.TypeError=g.TypeError;o.RangeError=g.RangeError;var b=o.CancellationError=g.CancellationError;o.TimeoutError=g.TimeoutError,o.OperationalError=g.OperationalError,o.RejectionError=g.OperationalError,o.AggregateError=g.AggregateError;var w=function w(){},j={},x={},E=e("./thenables")(o,w),C=e("./promise_array")(o,w,E,h,r),k=e("./context")(o),F=k.create,T=e("./debuggability")(o,k),A=(T.CapturedTrace,e("./finally")(o,E,x)),S=e("./catch_filter")(x),O=e("./nodeback"),R=_.errorObj,P=_.tryCatch;return o.prototype.toString=function(){return"[object Promise]";},o.prototype.caught=o.prototype.catch=function(t){var e=arguments.length;if(e>1){var n,r=new Array(e-1),i=0;for(n=0;e-1>n;++n){var o=arguments[n];if(!_.isObject(o))return h("Catch statement predicate: expecting an object but got "+_.classString(o));r[i++]=o;}return r.length=i,t=arguments[n],this.then(void 0,S(r,t,this));}return this.then(void 0,t);},o.prototype.reflect=function(){return this._then(f,f,void 0,this,void 0);},o.prototype.then=function(t,e){if(T.warnings()&&arguments.length>0&&"function"!=typeof t&&"function"!=typeof e){var n=".then() only accepts functions but was passed: "+_.classString(t);arguments.length>1&&(n+=", "+_.classString(e)),this._warn(n);}return this._then(t,e,void 0,void 0,void 0);},o.prototype.done=function(t,e){this._then(t,e,void 0,void 0,void 0)._setIsFinal();},o.prototype.spread=function(t){return"function"!=typeof t?h("expecting a function but got "+_.classString(t)):this.all()._then(t,void 0,void 0,j,void 0);},o.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this.value(),t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this.reason(),t.isRejected=!0),t;},o.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new C(this).promise();},o.prototype.error=function(t){return this.caught(_.originatesFromRejection,t);},o.getNewLibraryCopy=n.exports,o.is=function(t){return t instanceof o;},o.fromNode=o.fromCallback=function(t){var e=new o(w);e._captureStackTrace();var n=arguments.length>1&&!!Object(arguments[1]).multiArgs,r=P(t)(O(e,n));return r===R&&e._rejectCallback(r.e,!0),e._isFateSealed()||e._setAsyncGuaranteed(),e;},o.all=function(t){return new C(t).promise();},o.cast=function(t){var e=E(t);return e instanceof o||((e=new o(w))._captureStackTrace(),e._setFulfilled(),e._rejectionHandler0=t),e;},o.resolve=o.fulfilled=o.cast,o.reject=o.rejected=function(t){var e=new o(w);return e._captureStackTrace(),e._rejectCallback(t,!0),e;},o.setScheduler=function(t){if("function"!=typeof t)throw new m("expecting a function but got "+_.classString(t));return y.setScheduler(t);},o.prototype._then=function(t,e,n,r,i){var u=void 0!==i,a=u?i:new o(w),c=this._target(),l=c._bitField;u||(a._propagateFrom(this,3),a._captureStackTrace(),void 0===r&&0!=(2097152&this._bitField)&&(r=0!=(50397184&l)?this._boundValue():c===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,a));var f=s();if(0!=(50397184&l)){var h,p,d=c._settlePromiseCtx;0!=(33554432&l)?(p=c._rejectionHandler0,h=t):0!=(16777216&l)?(p=c._fulfillmentHandler0,h=e,c._unsetRejectionIsUnhandled()):(d=c._settlePromiseLateCancellationObserver,p=new b("late cancellation observer"),c._attachExtraTrace(p),h=e),y.invoke(d,c,{handler:null===f?h:"function"==typeof h&&_.domainBind(f,h),promise:a,receiver:r,value:p});}else c._addCallbacks(t,e,a,r,f);return a;},o.prototype._length=function(){return 65535&this._bitField;},o.prototype._isFateSealed=function(){return 0!=(117506048&this._bitField);},o.prototype._isFollowing=function(){return 67108864==(67108864&this._bitField);},o.prototype._setLength=function(t){this._bitField=-65536&this._bitField|65535&t;},o.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this);},o.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this);},o.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this);},o.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField;},o.prototype._isFinal=function(){return(4194304&this._bitField)>0;},o.prototype._unsetCancelled=function(){this._bitField=-65537&this._bitField;},o.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this);},o.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField;},o.prototype._setAsyncGuaranteed=function(){y.hasCustomScheduler()||(this._bitField=134217728|this._bitField);},o.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[4*t-4+3];return e===p?void 0:void 0===e&&this._isBound()?this._boundValue():e;},o.prototype._promiseAt=function(t){return this[4*t-4+2];},o.prototype._fulfillmentHandlerAt=function(t){return this[4*t-4+0];},o.prototype._rejectionHandlerAt=function(t){return this[4*t-4+1];},o.prototype._boundValue=function(){},o.prototype._migrateCallback0=function(t){var e=(t._bitField,t._fulfillmentHandler0),n=t._rejectionHandler0,r=t._promise0,i=t._receiverAt(0);void 0===i&&(i=p),this._addCallbacks(e,n,r,i,null);},o.prototype._migrateCallbackAt=function(t,e){var n=t._fulfillmentHandlerAt(e),r=t._rejectionHandlerAt(e),i=t._promiseAt(e),o=t._receiverAt(e);void 0===o&&(o=p),this._addCallbacks(n,r,i,o,null);},o.prototype._addCallbacks=function(t,e,n,r,i){var o=this._length();if(o>=65531&&(o=0,this._setLength(0)),0===o)this._promise0=n,this._receiver0=r,"function"==typeof t&&(this._fulfillmentHandler0=null===i?t:_.domainBind(i,t)),"function"==typeof e&&(this._rejectionHandler0=null===i?e:_.domainBind(i,e));else{var u=4*o-4;this[u+2]=n,this[u+3]=r,"function"==typeof t&&(this[u+0]=null===i?t:_.domainBind(i,t)),"function"==typeof e&&(this[u+1]=null===i?e:_.domainBind(i,e));}return this._setLength(o+1),o;},o.prototype._proxy=function(t,e){this._addCallbacks(void 0,void 0,e,t,null);},o.prototype._resolveCallback=function(t,e){if(0==(117506048&this._bitField)){if(t===this)return this._rejectCallback(l(),!1);var n=E(t,this);if(!(n instanceof o))return this._fulfill(t);e&&this._propagateFrom(n,2);var r=n._target();if(r===this)return void this._reject(l());var i=r._bitField;if(0==(50397184&i)){var u=this._length();u>0&&r._migrateCallback0(this);for(var a=1;u>a;++a){r._migrateCallbackAt(this,a);}this._setFollowing(),this._setLength(0),this._setFollowee(r);}else if(0!=(33554432&i))this._fulfill(r._value());else if(0!=(16777216&i))this._reject(r._reason());else{var c=new b("late cancellation observer");r._attachExtraTrace(c),this._reject(c);}}},o.prototype._rejectCallback=function(t,e,n){var r=_.ensureErrorObject(t),i=r===t;if(!i&&!n&&T.warnings()){var o="a promise was rejected with a non-error: "+_.classString(t);this._warn(o,!0);}this._attachExtraTrace(r,!!e&&i),this._reject(t);},o.prototype._resolveFromExecutor=function(t){if(t!==w){var e=this;this._captureStackTrace(),this._pushContext();var n=!0,r=this._execute(t,function(t){e._resolveCallback(t);},function(t){e._rejectCallback(t,n);});n=!1,this._popContext(),void 0!==r&&e._rejectCallback(r,!0);}},o.prototype._settlePromiseFromHandler=function(t,e,n,r){var i=r._bitField;if(0==(65536&i)){r._pushContext();var o;e===j?n&&"number"==typeof n.length?o=P(t).apply(this._boundValue(),n):(o=R,o.e=new m("cannot .spread() a non-array: "+_.classString(n))):o=P(t).call(e,n);var u=r._popContext();0==(65536&(i=r._bitField))&&(o===x?r._reject(n):o===R?r._rejectCallback(o.e,!1):(T.checkForgottenReturns(o,u,"",r,this),r._resolveCallback(o)));}},o.prototype._target=function(){for(var t=this;t._isFollowing();){t=t._followee();}return t;},o.prototype._followee=function(){return this._rejectionHandler0;},o.prototype._setFollowee=function(t){this._rejectionHandler0=t;},o.prototype._settlePromise=function(t,e,n,i){var u=t instanceof o,a=this._bitField,c=0!=(134217728&a);0!=(65536&a)?(u&&t._invokeInternalOnCancel(),n instanceof A&&n.isFinallyHandler()?(n.cancelPromise=t,P(e).call(n,i)===R&&t._reject(R.e)):e===f?t._fulfill(f.call(n)):n instanceof r?n._promiseCancelled(t):u||t instanceof C?t._cancel():n.cancel()):"function"==typeof e?u?(c&&t._setAsyncGuaranteed(),this._settlePromiseFromHandler(e,n,i,t)):e.call(n,i,t):n instanceof r?n._isResolved()||(0!=(33554432&a)?n._promiseFulfilled(i,t):n._promiseRejected(i,t)):u&&(c&&t._setAsyncGuaranteed(),0!=(33554432&a)?t._fulfill(i):t._reject(i));},o.prototype._settlePromiseLateCancellationObserver=function(t){var e=t.handler,n=t.promise,r=t.receiver,i=t.value;"function"==typeof e?n instanceof o?this._settlePromiseFromHandler(e,r,i,n):e.call(r,i,n):n instanceof o&&n._reject(i);},o.prototype._settlePromiseCtx=function(t){this._settlePromise(t.promise,t.handler,t.receiver,t.value);},o.prototype._settlePromise0=function(t,e,n){var r=this._promise0,i=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,t,i,e);},o.prototype._clearCallbackDataAtIndex=function(t){var e=4*t-4;this[e+2]=this[e+3]=this[e+0]=this[e+1]=void 0;},o.prototype._fulfill=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(t===this){var n=l();return this._attachExtraTrace(n),this._reject(n);}this._setFulfilled(),this._rejectionHandler0=t,(65535&e)>0&&(0!=(134217728&e)?this._settlePromises():y.settlePromises(this));}},o.prototype._reject=function(t){var e=this._bitField;if(!((117506048&e)>>>16))return this._setRejected(),this._fulfillmentHandler0=t,this._isFinal()?y.fatalError(t,_.isNode):void((65535&e)>0?y.settlePromises(this):this._ensurePossibleRejectionHandled());},o.prototype._fulfillPromises=function(t,e){for(var n=1;t>n;n++){var r=this._fulfillmentHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e);}},o.prototype._rejectPromises=function(t,e){for(var n=1;t>n;n++){var r=this._rejectionHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e);}},o.prototype._settlePromises=function(){var t=this._bitField,e=65535&t;if(e>0){if(0!=(16842752&t)){var n=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,n,t),this._rejectPromises(e,n);}else{var r=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,r,t),this._fulfillPromises(e,r);}this._setLength(0);}this._clearCancellationData();},o.prototype._settledValue=function(){var t=this._bitField;return 0!=(33554432&t)?this._rejectionHandler0:0!=(16777216&t)?this._fulfillmentHandler0:void 0;},o.defer=o.pending=function(){return T.deprecated("Promise.defer","new Promise"),{promise:new o(w),resolve:u,reject:a};},_.notEnumerableProp(o,"_makeSelfResolutionError",l),e("./method")(o,w,E,h,T),e("./bind")(o,w,E,T),e("./cancel")(o,C,h,T),e("./direct_resolve")(o),e("./synchronous_inspection")(o),e("./join")(o,C,E,w,y,s),o.Promise=o,o.version="3.5.0",e("./map.js")(o,C,h,E,w,T),e("./call_get.js")(o),e("./using.js")(o,h,E,F,w,T),e("./timers.js")(o,w,T),e("./generators.js")(o,h,w,E,r,T),e("./nodeify.js")(o),e("./promisify.js")(o,w),e("./props.js")(o,C,E,h),e("./race.js")(o,w,E,h),e("./reduce.js")(o,C,h,E,w,T),e("./settle.js")(o,C,T),e("./some.js")(o,C,h),e("./filter.js")(o,w),e("./each.js")(o,w),e("./any.js")(o),_.toFastProperties(o),_.toFastProperties(o.prototype),c({a:1}),c({b:2}),c({c:3}),c(1),c(function(){}),c(void 0),c(!1),c(new o(w)),T.setBounds(v.firstLineError,_.lastLineError),o;};},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(t,e,n){e.exports=function(e,n,r,i,o){function u(t){switch(t){case-2:return[];case-3:return{};case-6:return new Map();}}function a(t){var r=this._promise=new e(n);t instanceof e&&r._propagateFrom(t,3),r._setOnCancel(this),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2);}var c=t("./util");return c.isArray,c.inherits(a,o),a.prototype.length=function(){return this._length;},a.prototype.promise=function(){return this._promise;},a.prototype._init=function t(n,o){var a=r(this._values,this._promise);if(a instanceof e){var s=(a=a._target())._bitField;if(this._values=a,0==(50397184&s))return this._promise._setAsyncGuaranteed(),a._then(t,this._reject,void 0,this,o);if(0==(33554432&s))return 0!=(16777216&s)?this._reject(a._reason()):this._cancel();a=a._value();}{if(null!==(a=c.asArray(a)))return 0===a.length?void(-5===o?this._resolveEmptyArray():this._resolve(u(o))):void this._iterate(a);var l=i("expecting an array or an iterable object but got "+c.classString(a)).reason();this._promise._rejectCallback(l,!1);}},a.prototype._iterate=function(t){var n=this.getActualLength(t.length);this._length=n,this._values=this.shouldCopyValues()?new Array(n):this._values;for(var i=this._promise,o=!1,u=null,a=0;n>a;++a){var c=r(t[a],i);c instanceof e?(c=c._target(),u=c._bitField):u=null,o?null!==u&&c.suppressUnhandledRejections():null!==u?0==(50397184&u)?(c._proxy(this,a),this._values[a]=c):o=0!=(33554432&u)?this._promiseFulfilled(c._value(),a):0!=(16777216&u)?this._promiseRejected(c._reason(),a):this._promiseCancelled(a):o=this._promiseFulfilled(c,a);}o||i._setAsyncGuaranteed();},a.prototype._isResolved=function(){return null===this._values;},a.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t);},a.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel());},a.prototype._reject=function(t){this._values=null,this._promise._rejectCallback(t,!1);},a.prototype._promiseFulfilled=function(t,e){return this._values[e]=t,++this._totalResolved>=this._length&&(this._resolve(this._values),!0);},a.prototype._promiseCancelled=function(){return this._cancel(),!0;},a.prototype._promiseRejected=function(t){return this._totalResolved++,this._reject(t),!0;},a.prototype._resultCancelled=function(){if(!this._isResolved()){var t=this._values;if(this._cancel(),t instanceof e)t.cancel();else for(var n=0;n<t.length;++n){t[n]instanceof e&&t[n].cancel();}}},a.prototype.shouldCopyValues=function(){return!0;},a.prototype.getActualLength=function(t){return t;},a;};},{"./util":36}],24:[function(t,e,n){e.exports=function(e,n){function r(t){return!m.test(t);}function i(t){try{return!0===t.__isPromisified__;}catch(t){return!1;}}function o(t,e,n){var r=f.getDataPropertyOrDefault(t,e+n,y);return!!r&&i(r);}function u(t,e,n){for(var r=0;r<t.length;r+=2){var i=t[r];if(n.test(i))for(var o=i.replace(n,""),u=0;u<t.length;u+=2){if(t[u]===o)throw new v("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s",e));}}}function a(t,e,n,r){for(var a=f.inheritedDataKeys(t),c=[],s=0;s<a.length;++s){var l=a[s],h=t[l],p=r===b||b(l,h,t);"function"!=typeof h||i(h)||o(t,l,e)||!r(l,h,t,p)||c.push(l,h);}return u(c,e,n),c;}function c(t,e,n,r,i){for(var o=new RegExp(w(e)+"$"),u=a(t,e,o,n),c=0,s=u.length;s>c;c+=2){var h=u[c],p=u[c+1],_=h+e;if(r===j)t[_]=j(h,l,h,p,e,i);else{var d=r(p,function(){return j(h,l,h,p,e,i);});f.notEnumerableProp(d,"__isPromisified__",!0),t[_]=d;}}return f.toFastProperties(t),t;}function s(t,e,n){return j(t,e,void 0,t,null,n);}var l={},f=t("./util"),h=t("./nodeback"),p=f.withAppended,_=f.maybeWrapAsError,d=f.canEvaluate,v=t("./errors").TypeError,y={__isPromisified__:!0},g=["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"],m=new RegExp("^(?:"+g.join("|")+")$"),b=function b(t){return f.isIdentifier(t)&&"_"!==t.charAt(0)&&"constructor"!==t;},w=function w(t){return t.replace(/([$])/,"\\$");},j=d?void 0:function(t,r,i,o,u,a){function c(){var i=r;r===l&&(i=this);var o=new e(n);o._captureStackTrace();var u="string"==typeof d&&this!==s?this[d]:t,c=h(o,a);try{u.apply(i,p(arguments,c));}catch(t){o._rejectCallback(_(t),!0,!0);}return o._isFateSealed()||o._setAsyncGuaranteed(),o;}var s=function(){return this;}(),d=t;return"string"==typeof d&&(t=o),f.notEnumerableProp(c,"__isPromisified__",!0),c;};e.promisify=function(t,e){if("function"!=typeof t)throw new v("expecting a function but got "+f.classString(t));if(i(t))return t;var n=s(t,void 0===(e=Object(e)).context?l:e.context,!!e.multiArgs);return f.copyDescriptors(t,n,r),n;},e.promisifyAll=function(t,e){if("function"!=typeof t&&"object"!=(void 0===t?"undefined":_typeof2(t)))throw new v("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");var n=!!(e=Object(e)).multiArgs,r=e.suffix;"string"!=typeof r&&(r="Async");var i=e.filter;"function"!=typeof i&&(i=b);var o=e.promisifier;if("function"!=typeof o&&(o=j),!f.isIdentifier(r))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for(var u=f.inheritedDataKeys(t),a=0;a<u.length;++a){var s=t[u[a]];"constructor"!==u[a]&&f.isClass(s)&&(c(s.prototype,r,i,o,n),c(s,r,i,o,n));}return c(t,r,i,o,n);};};},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(t,e,n){e.exports=function(e,n,r,i){function o(t){var e,n=!1;if(void 0!==a&&t instanceof a)e=f(t),n=!0;else{var r=l.keys(t),i=r.length;e=new Array(2*i);for(var o=0;i>o;++o){var u=r[o];e[o]=t[u],e[o+i]=u;}}this.constructor$(e),this._isMap=n,this._init$(void 0,n?-6:-3);}function u(t){var n,u=r(t);return s(u)?(n=u instanceof e?u._then(e.props,void 0,void 0,void 0,void 0):new o(u).promise(),u instanceof e&&n._propagateFrom(u,2),n):i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");}var a,c=t("./util"),s=c.isObject,l=t("./es5");"function"==typeof Map&&(a=Map);var f=function(){function t(t,r){this[e]=t,this[e+n]=r,e++;}var e=0,n=0;return function(r){n=r.size,e=0;var i=new Array(2*r.size);return r.forEach(t,i),i;};}(),h=function h(t){for(var e=new a(),n=t.length/2|0,r=0;n>r;++r){var i=t[n+r],o=t[r];e.set(i,o);}return e;};c.inherits(o,n),o.prototype._init=function(){},o.prototype._promiseFulfilled=function(t,e){if(this._values[e]=t,++this._totalResolved>=this._length){var n;if(this._isMap)n=h(this._values);else{n={};for(var r=this.length(),i=0,o=this.length();o>i;++i){n[this._values[i+r]]=this._values[i];}}return this._resolve(n),!0;}return!1;},o.prototype.shouldCopyValues=function(){return!1;},o.prototype.getActualLength=function(t){return t>>1;},e.prototype.props=function(){return u(this);},e.props=function(t){return u(t);};};},{"./es5":13,"./util":36}],26:[function(t,e,n){function r(t,e,n,r,i){for(var o=0;i>o;++o){n[o+r]=t[o+e],t[o+e]=void 0;}}function i(t){this._capacity=t,this._length=0,this._front=0;}i.prototype._willBeOverCapacity=function(t){return this._capacity<t;},i.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1),this[this._front+e&this._capacity-1]=t,this._length=e+1;},i.prototype.push=function(t,e,n){var r=this.length()+3;if(this._willBeOverCapacity(r))return this._pushOne(t),this._pushOne(e),void this._pushOne(n);var i=this._front+r-3;this._checkCapacity(r);var o=this._capacity-1;this[i+0&o]=t,this[i+1&o]=e,this[i+2&o]=n,this._length=r;},i.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e;},i.prototype.length=function(){return this._length;},i.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<1);},i.prototype._resizeTo=function(t){var e=this._capacity;this._capacity=t,r(this,0,this,e,this._front+this._length&e-1);},e.exports=i;},{}],27:[function(t,e,n){e.exports=function(e,n,r,i){function o(t,o){var c=r(t);if(c instanceof e)return a(c);if(null===(t=u.asArray(t)))return i("expecting an array or an iterable object but got "+u.classString(t));var s=new e(n);void 0!==o&&s._propagateFrom(o,3);for(var l=s._fulfill,f=s._reject,h=0,p=t.length;p>h;++h){var _=t[h];(void 0!==_||h in t)&&e.cast(_)._then(l,f,void 0,s,null);}return s;}var u=t("./util"),a=function a(t){return t.then(function(e){return o(e,t);});};e.race=function(t){return o(t,void 0);},e.prototype.race=function(){return o(this,void 0);};};},{"./util":36}],28:[function(t,e,n){e.exports=function(e,n,r,i,o,u){function a(t,n,r,i){this.constructor$(t);var u=h();this._fn=null===u?n:p.domainBind(u,n),void 0!==r&&(r=e.resolve(r))._attachCancellationCallback(this),this._initialValue=r,this._currentCancellable=null,this._eachValues=i===o?Array(this._length):0===i?null:void 0,this._promise._captureStackTrace(),this._init$(void 0,-5);}function c(t,e){this.isFulfilled()?e._resolve(t):e._reject(t);}function s(t,e,n,i){return"function"!=typeof e?r("expecting a function but got "+p.classString(e)):new a(t,e,n,i).promise();}function l(t){this.accum=t,this.array._gotAccum(t);var n=i(this.value,this.array._promise);return n instanceof e?(this.array._currentCancellable=n,n._then(f,void 0,void 0,this,void 0)):f.call(this,n);}function f(t){var n=this.array,r=n._promise,i=_(n._fn);r._pushContext();var o;(o=void 0!==n._eachValues?i.call(r._boundValue(),t,this.index,this.length):i.call(r._boundValue(),this.accum,t,this.index,this.length))instanceof e&&(n._currentCancellable=o);var a=r._popContext();return u.checkForgottenReturns(o,a,void 0!==n._eachValues?"Promise.each":"Promise.reduce",r),o;}var h=e._getDomain,p=t("./util"),_=p.tryCatch;p.inherits(a,n),a.prototype._gotAccum=function(t){void 0!==this._eachValues&&null!==this._eachValues&&t!==o&&this._eachValues.push(t);},a.prototype._eachComplete=function(t){return null!==this._eachValues&&this._eachValues.push(t),this._eachValues;},a.prototype._init=function(){},a.prototype._resolveEmptyArray=function(){this._resolve(void 0!==this._eachValues?this._eachValues:this._initialValue);},a.prototype.shouldCopyValues=function(){return!1;},a.prototype._resolve=function(t){this._promise._resolveCallback(t),this._values=null;},a.prototype._resultCancelled=function(t){return t===this._initialValue?this._cancel():void(this._isResolved()||(this._resultCancelled$(),this._currentCancellable instanceof e&&this._currentCancellable.cancel(),this._initialValue instanceof e&&this._initialValue.cancel()));},a.prototype._iterate=function(t){this._values=t;var n,r,i=t.length;if(void 0!==this._initialValue?(n=this._initialValue,r=0):(n=e.resolve(t[0]),r=1),this._currentCancellable=n,!n.isRejected())for(;i>r;++r){var o={accum:null,value:t[r],index:r,length:i,array:this};n=n._then(l,void 0,void 0,o,void 0);}void 0!==this._eachValues&&(n=n._then(this._eachComplete,void 0,void 0,this,void 0)),n._then(c,c,void 0,n,this);},e.prototype.reduce=function(t,e){return s(this,t,e,null);},e.reduce=function(t,e,n,r){return s(t,e,n,r);};};},{"./util":36}],29:[function(e,n,i){var o,u=e("./util"),a=u.getNativePromise();if(u.isNode&&"undefined"==typeof MutationObserver){var c=r.setImmediate,s=t.nextTick;o=u.isRecentNode?function(t){c.call(r,t);}:function(e){s.call(t,e);};}else if("function"==typeof a&&"function"==typeof a.resolve){var l=a.resolve();o=function o(t){l.then(t);};}else o="undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&(window.navigator.standalone||window.cordova)?"undefined"!=typeof setImmediate?function(t){setImmediate(t);}:"undefined"!=typeof setTimeout?function(t){setTimeout(t,0);}:function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");}:function(){var t=document.createElement("div"),e={attributes:!0},n=!1,r=document.createElement("div");new MutationObserver(function(){t.classList.toggle("foo"),n=!1;}).observe(r,e);var i=function i(){n||(n=!0,r.classList.toggle("foo"));};return function(n){var r=new MutationObserver(function(){r.disconnect(),n();});r.observe(t,e),i();};}();n.exports=o;},{"./util":36}],30:[function(t,e,n){e.exports=function(e,n,r){function i(t){this.constructor$(t);}var o=e.PromiseInspection;t("./util").inherits(i,n),i.prototype._promiseResolved=function(t,e){return this._values[t]=e,++this._totalResolved>=this._length&&(this._resolve(this._values),!0);},i.prototype._promiseFulfilled=function(t,e){var n=new o();return n._bitField=33554432,n._settledValueField=t,this._promiseResolved(e,n);},i.prototype._promiseRejected=function(t,e){var n=new o();return n._bitField=16777216,n._settledValueField=t,this._promiseResolved(e,n);},e.settle=function(t){return r.deprecated(".settle()",".reflect()"),new i(t).promise();},e.prototype.settle=function(){return e.settle(this);};};},{"./util":36}],31:[function(t,e,n){e.exports=function(e,n,r){function i(t){this.constructor$(t),this._howMany=0,this._unwrap=!1,this._initialized=!1;}function o(t,e){if((0|e)!==e||0>e)return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");var n=new i(t),o=n.promise();return n.setHowMany(e),n.init(),o;}var u=t("./util"),a=t("./errors").RangeError,c=t("./errors").AggregateError,s=u.isArray,l={};u.inherits(i,n),i.prototype._init=function(){if(this._initialized){if(0===this._howMany)return void this._resolve([]);this._init$(void 0,-5);var t=s(this._values);!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()));}},i.prototype.init=function(){this._initialized=!0,this._init();},i.prototype.setUnwrap=function(){this._unwrap=!0;},i.prototype.howMany=function(){return this._howMany;},i.prototype.setHowMany=function(t){this._howMany=t;},i.prototype._promiseFulfilled=function(t){return this._addFulfilled(t),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),1===this.howMany()&&this._unwrap?this._resolve(this._values[0]):this._resolve(this._values),!0);},i.prototype._promiseRejected=function(t){return this._addRejected(t),this._checkOutcome();},i.prototype._promiseCancelled=function(){return this._values instanceof e||null==this._values?this._cancel():(this._addRejected(l),this._checkOutcome());},i.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){for(var t=new c(),e=this.length();e<this._values.length;++e){this._values[e]!==l&&t.push(this._values[e]);}return t.length>0?this._reject(t):this._cancel(),!0;}return!1;},i.prototype._fulfilled=function(){return this._totalResolved;},i.prototype._rejected=function(){return this._values.length-this.length();},i.prototype._addRejected=function(t){this._values.push(t);},i.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t;},i.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected();},i.prototype._getRangeError=function(t){var e="Input array must contain at least "+this._howMany+" items but contains only "+t+" items";return new a(e);},i.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0));},e.some=function(t,e){return o(t,e);},e.prototype.some=function(t){return o(this,t);},e._SomePromiseArray=i;};},{"./errors":12,"./util":36}],32:[function(t,e,n){e.exports=function(t){function e(t){void 0!==t?(t=t._target(),this._bitField=t._bitField,this._settledValueField=t._isFateSealed()?t._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0);}e.prototype._settledValue=function(){return this._settledValueField;};var n=e.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue();},r=e.prototype.error=e.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue();},i=e.prototype.isFulfilled=function(){return 0!=(33554432&this._bitField);},o=e.prototype.isRejected=function(){return 0!=(16777216&this._bitField);},u=e.prototype.isPending=function(){return 0==(50397184&this._bitField);},a=e.prototype.isResolved=function(){return 0!=(50331648&this._bitField);};e.prototype.isCancelled=function(){return 0!=(8454144&this._bitField);},t.prototype.__isCancelled=function(){return 65536==(65536&this._bitField);},t.prototype._isCancelled=function(){return this._target().__isCancelled();},t.prototype.isCancelled=function(){return 0!=(8454144&this._target()._bitField);},t.prototype.isPending=function(){return u.call(this._target());},t.prototype.isRejected=function(){return o.call(this._target());},t.prototype.isFulfilled=function(){return i.call(this._target());},t.prototype.isResolved=function(){return a.call(this._target());},t.prototype.value=function(){return n.call(this._target());},t.prototype.reason=function(){var t=this._target();return t._unsetRejectionIsUnhandled(),r.call(t);},t.prototype._value=function(){return this._settledValue();},t.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue();},t.PromiseInspection=e;};},{}],33:[function(t,e,n){e.exports=function(e,n){function r(t){return t.then;}function i(t){try{return r(t);}catch(t){return c.e=t,c;}}function o(t){try{return l.call(t,"_promise0");}catch(t){return!1;}}function u(t,r,i){var o=new e(n),u=o;i&&i._pushContext(),o._captureStackTrace(),i&&i._popContext();var s=!0,l=a.tryCatch(r).call(t,function(t){o&&(o._resolveCallback(t),o=null);},function(t){o&&(o._rejectCallback(t,s,!0),o=null);});return s=!1,o&&l===c&&(o._rejectCallback(l.e,!0,!0),o=null),u;}var a=t("./util"),c=a.errorObj,s=a.isObject,l={}.hasOwnProperty;return function(t,r){if(s(t)){if(t instanceof e)return t;var a=i(t);if(a===c)return r&&r._pushContext(),l=e.reject(a.e),r&&r._popContext(),l;if("function"==typeof a){if(o(t)){var l=new e(n);return t._then(l._fulfill,l._reject,void 0,l,null),l;}return u(t,a,r);}}return t;};};},{"./util":36}],34:[function(t,e,n){e.exports=function(e,n,r){function i(t){this.handle=t;}function o(t){return clearTimeout(this.handle),t;}function u(t){throw clearTimeout(this.handle),t;}var a=t("./util"),c=e.TimeoutError;i.prototype._resultCancelled=function(){clearTimeout(this.handle);};var s=function s(t){return l(+this).thenReturn(t);},l=e.delay=function(t,o){var u,a;return void 0!==o?(u=e.resolve(o)._then(s,null,null,t,void 0),r.cancellation()&&o instanceof e&&u._setOnCancel(o)):(u=new e(n),a=setTimeout(function(){u._fulfill();},+t),r.cancellation()&&u._setOnCancel(new i(a)),u._captureStackTrace()),u._setAsyncGuaranteed(),u;};e.prototype.delay=function(t){return l(t,this);};var f=function f(t,e,n){var r;r="string"!=typeof e?e instanceof Error?e:new c("operation timed out"):new c(e),a.markAsOriginatingFromRejection(r),t._attachExtraTrace(r),t._reject(r),null!=n&&n.cancel();};e.prototype.timeout=function(t,e){t=+t;var n,a,c=new i(setTimeout(function(){n.isPending()&&f(n,e,a);},t));return r.cancellation()?(a=this.then(),(n=a._then(o,u,void 0,c,void 0))._setOnCancel(c)):n=this._then(o,u,void 0,c,void 0),n;};};},{"./util":36}],35:[function(t,e,n){e.exports=function(e,n,r,i,o,u){function a(t){setTimeout(function(){throw t;},0);}function c(t){var e=r(t);return e!==t&&"function"==typeof t._isDisposable&&"function"==typeof t._getDisposer&&t._isDisposable()&&e._setDisposable(t._getDisposer()),e;}function s(t,n){function i(){if(u>=s)return l._fulfill();var o=c(t[u++]);if(o instanceof e&&o._isDisposable()){try{o=r(o._getDisposer().tryDispose(n),t.promise);}catch(t){return a(t);}if(o instanceof e)return o._then(i,a,null,null,null);}i();}var u=0,s=t.length,l=new e(o);return i(),l;}function l(t,e,n){this._data=t,this._promise=e,this._context=n;}function f(t,e,n){this.constructor$(t,e,n);}function h(t){return l.isDisposer(t)?(this.resources[this.index]._setDisposable(t),t.promise()):t;}function p(t){this.length=t,this.promise=null,this[t-1]=null;}var _=t("./util"),d=t("./errors").TypeError,v=t("./util").inherits,y=_.errorObj,g=_.tryCatch,m={};l.prototype.data=function(){return this._data;},l.prototype.promise=function(){return this._promise;},l.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():m;},l.prototype.tryDispose=function(t){var e=this.resource(),n=this._context;void 0!==n&&n._pushContext();var r=e!==m?this.doDispose(e,t):null;return void 0!==n&&n._popContext(),this._promise._unsetDisposable(),this._data=null,r;},l.isDisposer=function(t){return null!=t&&"function"==typeof t.resource&&"function"==typeof t.tryDispose;},v(f,l),f.prototype.doDispose=function(t,e){return this.data().call(t,t,e);},p.prototype._resultCancelled=function(){for(var t=this.length,n=0;t>n;++n){var r=this[n];r instanceof e&&r.cancel();}},e.using=function(){var t=arguments.length;if(2>t)return n("you must pass at least 2 arguments to Promise.using");var i=arguments[t-1];if("function"!=typeof i)return n("expecting a function but got "+_.classString(i));var o,a=!0;2===t&&Array.isArray(arguments[0])?(o=arguments[0],t=o.length,a=!1):(o=arguments,t--);for(var c=new p(t),f=0;t>f;++f){var d=o[f];if(l.isDisposer(d)){var v=d;(d=d.promise())._setDisposable(v);}else{var m=r(d);m instanceof e&&(d=m._then(h,null,null,{resources:c,index:f},void 0));}c[f]=d;}for(var b=new Array(c.length),f=0;f<b.length;++f){b[f]=e.resolve(c[f]).reflect();}var w=e.all(b).then(function(t){for(var e=0;e<t.length;++e){var n=t[e];if(n.isRejected())return y.e=n.error(),y;if(!n.isFulfilled())return void w.cancel();t[e]=n.value();}j._pushContext(),i=g(i);var r=a?i.apply(void 0,t):i(t),o=j._popContext();return u.checkForgottenReturns(r,o,"Promise.using",j),r;}),j=w.lastly(function(){var t=new e.PromiseInspection(w);return s(c,t);});return c.promise=j,j._setOnCancel(c),j;},e.prototype._setDisposable=function(t){this._bitField=131072|this._bitField,this._disposer=t;},e.prototype._isDisposable=function(){return(131072&this._bitField)>0;},e.prototype._getDisposer=function(){return this._disposer;},e.prototype._unsetDisposable=function(){this._bitField=-131073&this._bitField,this._disposer=void 0;},e.prototype.disposer=function(t){if("function"==typeof t)return new f(t,this,i());throw new d();};};},{"./errors":12,"./util":36}],36:[function(e,n,i){function o(){try{var t=h;return h=null,t.apply(this,arguments);}catch(t){return d.e=t,d;}}function u(t){return null==t||!0===t||!1===t||"string"==typeof t||"number"==typeof t;}function a(t,e,n){if(u(t))return t;var r={value:n,configurable:!0,enumerable:!1,writable:!0};return p.defineProperty(t,e,r),t;}function c(t){try{return t+"";}catch(t){return"[no string representation]";}}function s(t){return null!==t&&"object"==(void 0===t?"undefined":_typeof2(t))&&"string"==typeof t.message&&"string"==typeof t.name;}function l(t){return s(t)&&p.propertyIsWritable(t,"stack");}function f(t){return{}.toString.call(t);}var h,p=e("./es5"),_="undefined"==typeof navigator,d={e:{}},v="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:void 0!==this?this:null,y=function(){var t=[Array.prototype,Object.prototype,Function.prototype],e=function e(_e3){for(var n=0;n<t.length;++n){if(t[n]===_e3)return!0;}return!1;};if(p.isES5){var n=Object.getOwnPropertyNames;return function(t){for(var r=[],i=Object.create(null);null!=t&&!e(t);){var o;try{o=n(t);}catch(t){return r;}for(var u=0;u<o.length;++u){var a=o[u];if(!i[a]){i[a]=!0;var c=Object.getOwnPropertyDescriptor(t,a);null!=c&&null==c.get&&null==c.set&&r.push(a);}}t=p.getPrototypeOf(t);}return r;};}var r={}.hasOwnProperty;return function(n){if(e(n))return[];var i=[];t:for(var o in n){if(r.call(n,o))i.push(o);else{for(var u=0;u<t.length;++u){if(r.call(t[u],o))continue t;}i.push(o);}}return i;};}(),g=/this\s*\.\s*\S+\s*=/,m=/^[a-z$_][a-z$_0-9]*$/i,b="stack"in new Error()?function(t){return l(t)?t:new Error(c(t));}:function(t){if(l(t))return t;try{throw new Error(c(t));}catch(t){return t;}},w=function w(t){return p.isArray(t)?t:null;};if("undefined"!=typeof Symbol&&Symbol.iterator){var j="function"==typeof Array.from?function(t){return Array.from(t);}:function(t){for(var e,n=[],r=t[Symbol.iterator]();!(e=r.next()).done;){n.push(e.value);}return n;};w=function w(t){return p.isArray(t)?t:null!=t&&"function"==typeof t[Symbol.iterator]?j(t):null;};}var x=void 0!==t&&"[object process]"===f(t).toLowerCase(),E=void 0!==t&&void 0!==t.env,C={isClass:function isClass(t){try{if("function"==typeof t){var e=p.names(t.prototype),n=p.isES5&&e.length>1,r=e.length>0&&!(1===e.length&&"constructor"===e[0]),i=g.test(t+"")&&p.names(t).length>0;if(n||r||i)return!0;}return!1;}catch(t){return!1;}},isIdentifier:function isIdentifier(t){return m.test(t);},inheritedDataKeys:y,getDataPropertyOrDefault:function getDataPropertyOrDefault(t,e,n){if(!p.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0;var r=Object.getOwnPropertyDescriptor(t,e);return null!=r?null==r.get&&null==r.set?r.value:n:void 0;},thrower:function thrower(t){throw t;},isArray:p.isArray,asArray:w,notEnumerableProp:a,isPrimitive:u,isObject:function isObject(t){return"function"==typeof t||"object"==(void 0===t?"undefined":_typeof2(t))&&null!==t;},isError:s,canEvaluate:_,errorObj:d,tryCatch:function tryCatch(t){return h=t,o;},inherits:function inherits(t,e){function n(){this.constructor=t,this.constructor$=e;for(var n in e.prototype){r.call(e.prototype,n)&&"$"!==n.charAt(n.length-1)&&(this[n+"$"]=e.prototype[n]);}}var r={}.hasOwnProperty;return n.prototype=e.prototype,t.prototype=new n(),t.prototype;},withAppended:function withAppended(t,e){var n,r=t.length,i=new Array(r+1);for(n=0;r>n;++n){i[n]=t[n];}return i[n]=e,i;},maybeWrapAsError:function maybeWrapAsError(t){return u(t)?new Error(c(t)):t;},toFastProperties:function toFastProperties(t){function e(){}e.prototype=t;for(var n=8;n--;){new e();}return t;},filledRange:function filledRange(t,e,n){for(var r=new Array(t),i=0;t>i;++i){r[i]=e+i+n;}return r;},toString:c,canAttachTrace:l,ensureErrorObject:b,originatesFromRejection:function originatesFromRejection(t){return null!=t&&(t instanceof Error.__BluebirdErrorTypes__.OperationalError||!0===t.isOperational);},markAsOriginatingFromRejection:function markAsOriginatingFromRejection(t){try{a(t,"isOperational",!0);}catch(t){}},classString:f,copyDescriptors:function copyDescriptors(t,e,n){for(var r=p.names(t),i=0;i<r.length;++i){var o=r[i];if(n(o))try{p.defineProperty(e,o,p.getDescriptor(t,o));}catch(t){}}},hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:x,hasEnvVariables:E,env:function env(e){return E?t.env[e]:void 0;},global:v,getNativePromise:function getNativePromise(){if("function"==typeof Promise)try{var t=new Promise(function(){});if("[object Promise]"==={}.toString.call(t))return Promise;}catch(t){}},domainBind:function domainBind(t,e){return t.bind(e);}};C.isRecentNode=C.isNode&&function(){var e=t.versions.node.split(".").map(Number);return 0===e[0]&&e[1]>10||e[0]>0;}(),C.isNode&&C.toFastProperties(t);try{throw new Error();}catch(t){C.lastLineError=t;}n.exports=C;},{"./es5":13}]},{},[4])(4);}),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise);}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{_process:3}],2:[function(t,e,n){(function(t){(function(){function r(t,e){return t.set(e[0],e[1]),t;}function i(t,e){return t.add(e),t;}function o(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2]);}return t.apply(e,n);}function u(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var u=t[i];e(r,u,n(u),t);}return r;}function a(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t);){}return t;}function c(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t);){}return t;}function s(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;){if(!e(t[n],n,t))return!1;}return!0;}function l(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var u=t[n];e(u,n,t)&&(o[i++]=u);}return o;}function f(t,e){return!(null==t||!t.length)&&-1<b(t,e,0);}function h(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;){if(n(e,t[r]))return!0;}return!1;}function p(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;){i[n]=e(t[n],n,t);}return i;}function _(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;){t[i+n]=e[n];}return t;}function d(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;){n=e(n,t[i],i,t);}return n;}function v(t,e,n,r){var i=null==t?0:t.length;for(r&&i&&(n=t[--i]);i--;){n=e(n,t[i],i,t);}return n;}function y(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;){if(e(t[n],n,t))return!0;}return!1;}function g(t,e,n){var r;return n(t,function(t,n,i){if(e(t,n,i))return r=n,!1;}),r;}function m(t,e,n,r){var i=t.length;for(n+=r?1:-1;r?n--:++n<i;){if(e(t[n],n,t))return n;}return-1;}function b(t,e,n){if(e===e)t:{--n;for(var r=t.length;++n<r;){if(t[n]===e){t=n;break t;}}t=-1;}else t=m(t,j,n);return t;}function w(t,e,n,r){--n;for(var i=t.length;++n<i;){if(r(t[n],e))return n;}return-1;}function j(t){return t!==t;}function x(t,e){var n=null==t?0:t.length;return n?T(t,e)/n:q;}function E(t){return function(e){return null==e?W:e[t];};}function C(t){return function(e){return null==t?W:t[e];};}function k(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o);}),n;}function F(t,e){var n=t.length;for(t.sort(e);n--;){t[n]=t[n].c;}return t;}function T(t,e){for(var n,r=-1,i=t.length;++r<i;){var o=e(t[r]);o!==W&&(n=n===W?o:n+o);}return n;}function A(t,e){for(var n=-1,r=Array(t);++n<t;){r[n]=e(n);}return r;}function S(t,e){return p(e,function(e){return[e,t[e]];});}function O(t){return function(e){return t(e);};}function R(t,e){return p(e,function(e){return t[e];});}function P(t,e){return t.has(e);}function L(t,e){for(var n=-1,r=t.length;++n<r&&-1<b(e,t[n],0);){}return n;}function I(t,e){for(var n=t.length;n--&&-1<b(e,t[n],0);){}return n;}function D(t){return"\\"+Nt[t];}function U(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t];}),n;}function B(t,e){return function(n){return t(e(n));};}function N(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var u=t[n];u!==e&&"__lodash_placeholder__"!==u||(t[n]="__lodash_placeholder__",o[i++]=n);}return o;}function M(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t;}),n;}function V(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=[t,t];}),n;}function z(t){if(Pt.test(t)){for(var e=Ot.lastIndex=0;Ot.test(t);){++e;}t=e;}else t=ee(t);return t;}function H(t){return Pt.test(t)?t.match(Ot)||[]:t.split("");}var W,$=1/0,q=NaN,Q=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],G=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,X=/(__e\(.*?\)|\b__t\))\+'';/g,K=/&(?:amp|lt|gt|quot|#39);/g,J=/[&<>"']/g,Y=RegExp(K.source),tt=RegExp(J.source),et=/<%-([\s\S]+?)%>/g,nt=/<%([\s\S]+?)%>/g,rt=/<%=([\s\S]+?)%>/g,it=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ot=/^\w*$/,ut=/^\./,at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ct=/[\\^$.*+?()[\]{}|]/g,st=RegExp(ct.source),lt=/^\s+|\s+$/g,ft=/^\s+/,ht=/\s+$/,pt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,_t=/\{\n\/\* \[wrapped with (.+)\] \*/,dt=/,? & /,vt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,yt=/\\(\\)?/g,gt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,mt=/\w*$/,bt=/^[-+]0x[0-9a-f]+$/i,wt=/^0b[01]+$/i,jt=/^\[object .+?Constructor\]$/,xt=/^0o[0-7]+$/i,Et=/^(?:0|[1-9]\d*)$/,Ct=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,kt=/($^)/,Ft=/['\n\r\u2028\u2029\\]/g,Tt="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",At=RegExp("['’]","g"),St=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),Ot=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])"+Tt,"g"),Rt=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+","(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*"].join("|"),"g"),Pt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Lt=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,It="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;var Ut={};Ut["[object Arguments]"]=Ut["[object Array]"]=Ut["[object ArrayBuffer]"]=Ut["[object DataView]"]=Ut["[object Boolean]"]=Ut["[object Date]"]=Ut["[object Float32Array]"]=Ut["[object Float64Array]"]=Ut["[object Int8Array]"]=Ut["[object Int16Array]"]=Ut["[object Int32Array]"]=Ut["[object Map]"]=Ut["[object Number]"]=Ut["[object Object]"]=Ut["[object RegExp]"]=Ut["[object Set]"]=Ut["[object String]"]=Ut["[object Symbol]"]=Ut["[object Uint8Array]"]=Ut["[object Uint8ClampedArray]"]=Ut["[object Uint16Array]"]=Ut["[object Uint32Array]"]=!0,Ut["[object Error]"]=Ut["[object Function]"]=Ut["[object WeakMap]"]=!1;var Bt,Nt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mt=parseFloat,Vt=parseInt,zt="object"==(void 0===t?"undefined":_typeof2(t))&&t&&t.Object===Object&&t,Ht="object"==("undefined"==typeof self?"undefined":_typeof2(self))&&self&&self.Object===Object&&self,Wt=zt||Ht||Function("return this")(),$t="object"==(void 0===n?"undefined":_typeof2(n))&&n&&!n.nodeType&&n,qt=$t&&"object"==(void 0===e?"undefined":_typeof2(e))&&e&&!e.nodeType&&e,Qt=qt&&qt.exports===$t,Gt=Qt&&zt.process;t:{try{Bt=Gt&&Gt.binding&&Gt.binding("util");break t;}catch(r){}Bt=void 0;}var Zt=Bt&&Bt.isArrayBuffer,Xt=Bt&&Bt.isDate,Kt=Bt&&Bt.isMap,Jt=Bt&&Bt.isRegExp,Yt=Bt&&Bt.isSet,te=Bt&&Bt.isTypedArray,ee=E("length"),ne=C({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),re=C({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),ie=C({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),oe=function t(e){function n(t){if(pi(t)&&!ea(t)&&!(t instanceof Ot)){if(t instanceof Tt)return t;if(eo.call(t,"__wrapped__"))return Ur(t);}return new Tt(t);}function C(){}function Tt(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=W;}function Ot(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[];}function Bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}function Nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}function zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}function Ht(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new zt();++e<n;){this.add(t[e]);}}function $t(t){this.size=(this.__data__=new Nt(t)).size;}function qt(t,e){var n,r=ea(t),i=!r&&ta(t),o=!r&&!i&&ra(t),u=!r&&!i&&!o&&ca(t),a=(i=(r=r||i||o||u)?A(t.length,Zi):[]).length;for(n in t){!e&&!eo.call(t,n)||r&&("length"==n||o&&("offset"==n||"parent"==n)||u&&("buffer"==n||"byteLength"==n||"byteOffset"==n)||Er(n,a))||i.push(n);}return i;}function Gt(t){var e=t.length;return e?t[en(0,e-1)]:W;}function ee(t,e){return Pr(Rn(t),de(e,0,t.length));}function ue(t){return Pr(Rn(t));}function ae(t,e,n){(n===W||oi(t[e],n))&&(n!==W||e in t)||pe(t,e,n);}function ce(t,e,n){var r=t[e];eo.call(t,e)&&oi(r,n)&&(n!==W||e in t)||pe(t,e,n);}function se(t,e){for(var n=t.length;n--;){if(oi(t[n][0],e))return n;}return-1;}function le(t,e,n,r){return tu(t,function(t,i,o){e(r,t,n(t),o);}),r;}function fe(t,e){return t&&Pn(e,Fi(e),t);}function he(t,e){return t&&Pn(e,Ti(e),t);}function pe(t,e,n){"__proto__"==e&&bo?bo(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;}function _e(t,e){for(var n=-1,r=e.length,i=zi(r),o=null==t;++n<r;){i[n]=o?W:Ci(t,e[n]);}return i;}function de(t,e,n){return t===t&&(n!==W&&(t=t<=n?t:n),e!==W&&(t=t>=e?t:e)),t;}function ve(t,e,n,r,i,o){var u,c=1&e,s=2&e,l=4&e;if(n&&(u=i?n(t,r,i,o):n(t)),u!==W)return u;if(!hi(t))return t;if(r=ea(t)){if(u=br(t),!c)return Rn(t,u);}else{var f=fu(t),h="[object Function]"==f||"[object GeneratorFunction]"==f;if(ra(t))return kn(t,c);if("[object Object]"==f||"[object Arguments]"==f||h&&!i){if(u=s||h?{}:wr(t),!c)return s?In(t,he(u,t)):Ln(t,fe(u,t));}else{if(!Ut[f])return i?t:{};u=jr(t,f,ve,c);}}if(o||(o=new $t()),i=o.get(t))return i;o.set(t,u);var s=l?s?hr:fr:s?Ti:Fi,p=r?W:s(t);return a(p||t,function(r,i){p&&(i=r,r=t[i]),ce(u,i,ve(r,e,n,i,t,o));}),u;}function ye(t){var e=Fi(t);return function(n){return ge(n,t,e);};}function ge(t,e,n){var r=n.length;if(null==t)return!r;for(t=Qi(t);r--;){var i=n[r],o=e[i],u=t[i];if(u===W&&!(i in t)||!o(u))return!1;}return!0;}function me(t,e,n){if("function"!=typeof t)throw new Xi("Expected a function");return _u(function(){t.apply(W,n);},e);}function be(t,e,n,r){var i=-1,o=f,u=!0,a=t.length,c=[],s=e.length;if(!a)return c;n&&(e=p(e,O(n))),r?(o=h,u=!1):200<=e.length&&(o=P,u=!1,e=new Ht(e));t:for(;++i<a;){var l=t[i],_=null==n?l:n(l),l=r||0!==l?l:0;if(u&&_===_){for(var d=s;d--;){if(e[d]===_)continue t;}c.push(l);}else o(e,_,r)||c.push(l);}return c;}function we(t,e){var n=!0;return tu(t,function(t,r,i){return n=!!e(t,r,i);}),n;}function je(t,e,n){for(var r=-1,i=t.length;++r<i;){var o=t[r],u=e(o);if(null!=u&&(a===W?u===u&&!yi(u):n(u,a)))var a=u,c=o;}return c;}function xe(t,e){var n=[];return tu(t,function(t,r,i){e(t,r,i)&&n.push(t);}),n;}function Ee(t,e,n,r,i){var o=-1,u=t.length;for(n||(n=xr),i||(i=[]);++o<u;){var a=t[o];0<e&&n(a)?1<e?Ee(a,e-1,n,r,i):_(i,a):r||(i[i.length]=a);}return i;}function Ce(t,e){return t&&nu(t,e,Fi);}function ke(t,e){return t&&ru(t,e,Fi);}function Fe(t,e){return l(e,function(e){return si(t[e]);});}function Te(t,e){for(var n=0,r=(e=En(e,t)).length;null!=t&&n<r;){t=t[Lr(e[n++])];}return n&&n==r?t:W;}function Ae(t,e,n){return e=e(t),ea(t)?e:_(e,n(t));}function Se(t){if(null==t)t=t===W?"[object Undefined]":"[object Null]";else if(mo&&mo in Qi(t)){var e=eo.call(t,mo),n=t[mo];try{t[mo]=W;var r=!0;}catch(t){}var i=io.call(t);r&&(e?t[mo]=n:delete t[mo]),t=i;}else t=io.call(t);return t;}function Oe(t,e){return t>e;}function Re(t,e){return null!=t&&eo.call(t,e);}function Pe(t,e){return null!=t&&e in Qi(t);}function Le(t,e,n){for(var r=n?h:f,i=t[0].length,o=t.length,u=o,a=zi(o),c=1/0,s=[];u--;){l=t[u];u&&e&&(l=p(l,O(e))),c=Ro(l.length,c),a[u]=!n&&(e||120<=i&&120<=l.length)?new Ht(u&&l):W;}var l=t[0],_=-1,d=a[0];t:for(;++_<i&&s.length<c;){var v=l[_],y=e?e(v):v,v=n||0!==v?v:0;if(d?!P(d,y):!r(s,y,n)){for(u=o;--u;){var g=a[u];if(g?!P(g,y):!r(t[u],y,n))continue t;}d&&d.push(y),s.push(v);}}return s;}function Ie(t,e,n){var r={};return Ce(t,function(t,i,o){e(r,n(t),i,o);}),r;}function De(t,e,n){return e=En(e,t),t=2>e.length?t:Te(t,sn(e,0,-1)),null==(e=null==t?t:t[Lr(zr(e))])?W:o(e,t,n);}function Ue(t){return pi(t)&&"[object Arguments]"==Se(t);}function Be(t,e,n,r,i){if(t===e)e=!0;else if(null==t||null==e||!pi(t)&&!pi(e))e=t!==t&&e!==e;else t:{var o=ea(t),u=ea(e),a=o?"[object Array]":fu(t),c=u?"[object Array]":fu(e),s="[object Object]"==(a="[object Arguments]"==a?"[object Object]":a),u="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c);if((c=a==c)&&ra(t)){if(!ra(e)){e=!1;break t;}o=!0,s=!1;}if(c&&!s)i||(i=new $t()),e=o||ca(t)?cr(t,e,n,r,Be,i):sr(t,e,a,n,r,Be,i);else{if(!(1&n)&&(o=s&&eo.call(t,"__wrapped__"),a=u&&eo.call(e,"__wrapped__"),o||a)){t=o?t.value():t,e=a?e.value():e,i||(i=new $t()),e=Be(t,e,n,r,i);break t;}if(c){e:if(i||(i=new $t()),o=1&n,a=fr(t),u=a.length,c=fr(e).length,u==c||o){for(s=u;s--;){var l=a[s];if(!(o?l in e:eo.call(e,l))){e=!1;break e;}}if((c=i.get(t))&&i.get(e))e=c==e;else{c=!0,i.set(t,e),i.set(e,t);for(var f=o;++s<u;){var h=t[l=a[s]],p=e[l];if(r)var _=o?r(p,h,l,e,t,i):r(h,p,l,t,e,i);if(_===W?h!==p&&!Be(h,p,n,r,i):!_){c=!1;break;}f||(f="constructor"==l);}c&&!f&&(n=t.constructor,r=e.constructor,n!=r&&"constructor"in t&&"constructor"in e&&!("function"==typeof n&&n instanceof n&&"function"==typeof r&&r instanceof r)&&(c=!1)),i.delete(t),i.delete(e),e=c;}}else e=!1;}else e=!1;}}return e;}function Ne(t,e,n,r){var i=n.length,o=i,u=!r;if(null==t)return!o;for(t=Qi(t);i--;){var a=n[i];if(u&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1;}for(;++i<o;){var c=(a=n[i])[0],s=t[c],l=a[1];if(u&&a[2]){if(s===W&&!(c in t))return!1;}else{if(a=new $t(),r)var f=r(s,l,c,t,e,a);if(f===W?!Be(l,s,3,r,a):!f)return!1;}}return!0;}function Me(t){return!(!hi(t)||ro&&ro in t)&&(si(t)?ao:jt).test(Ir(t));}function Ve(t){return"function"==typeof t?t:null==t?Ii:"object"==(void 0===t?"undefined":_typeof2(t))?ea(t)?qe(t[0],t[1]):$e(t):Ni(t);}function ze(t){if(!Tr(t))return So(t);var e,n=[];for(e in Qi(t)){eo.call(t,e)&&"constructor"!=e&&n.push(e);}return n;}function He(t,e){return t<e;}function We(t,e){var n=-1,r=ui(t)?zi(t.length):[];return tu(t,function(t,i,o){r[++n]=e(t,i,o);}),r;}function $e(t){var e=yr(t);return 1==e.length&&e[0][2]?Ar(e[0][0],e[0][1]):function(n){return n===t||Ne(n,t,e);};}function qe(t,e){return kr(t)&&e===e&&!hi(e)?Ar(Lr(t),e):function(n){var r=Ci(n,t);return r===W&&r===e?ki(n,t):Be(e,r,3);};}function Qe(t,e,n,r,i){t!==e&&nu(e,function(o,u){if(hi(o)){i||(i=new $t());var a=i,c=t[u],s=e[u];if(_=a.get(s))ae(t,u,_);else{var l=(_=r?r(c,s,u+"",t,e,a):W)===W;if(l){var f=ea(s),h=!f&&ra(s),p=!f&&!h&&ca(s),_=s;f||h||p?ea(c)?_=c:ai(c)?_=Rn(c):h?(l=!1,_=kn(s,!0)):p?(l=!1,_=Tn(s,!0)):_=[]:di(s)||ta(s)?(_=c,ta(c)?_=xi(c):(!hi(c)||n&&si(c))&&(_=wr(s))):l=!1;}l&&(a.set(s,_),Qe(_,s,n,r,a),a.delete(s)),ae(t,u,_);}}else(a=r?r(t[u],o,u+"",t,e,i):W)===W&&(a=o),ae(t,u,a);},Ti);}function Ge(t,e){var n=t.length;if(n)return e+=0>e?n:0,Er(e,n)?t[e]:W;}function Ze(t,e,n){var r=-1;return e=p(e.length?e:[Ii],O(dr())),t=We(t,function(t){return{a:p(e,function(e){return e(t);}),b:++r,c:t};}),F(t,function(t,e){var r;t:{r=-1;for(var i=t.a,o=e.a,u=i.length,a=n.length;++r<u;){var c=An(i[r],o[r]);if(c){r=r>=a?c:c*("desc"==n[r]?-1:1);break t;}}r=t.b-e.b;}return r;});}function Xe(t,e){return Ke(t,e,function(e,n){return ki(t,n);});}function Ke(t,e,n){for(var r=-1,i=e.length,o={};++r<i;){var u=e[r],a=Te(t,u);n(a,u)&&an(o,En(u,t),a);}return o;}function Je(t){return function(e){return Te(e,t);};}function Ye(t,e,n,r){var i=r?w:b,o=-1,u=e.length,a=t;for(t===e&&(e=Rn(e)),n&&(a=p(t,O(n)));++o<u;){for(var c=0,s=e[o],s=n?n(s):s;-1<(c=i(a,s,c,r));){a!==t&&vo.call(a,c,1),vo.call(t,c,1);}}return t;}function tn(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n];if(n==r||i!==o){var o=i;Er(i)?vo.call(t,i,1):yn(t,i);}}}function en(t,e){return t+Co(Io()*(e-t+1));}function nn(t,e){var n="";if(!t||1>e||9007199254740991<e)return n;do{e%2&&(n+=t),(e=Co(e/2))&&(t+=t);}while(e);return n;}function rn(t,e){return du(Sr(t,e,Ii),t+"");}function on(t){return Gt(Si(t));}function un(t,e){var n=Si(t);return Pr(n,de(e,0,n.length));}function an(t,e,n,r){if(!hi(t))return t;for(var i=-1,o=(e=En(e,t)).length,u=o-1,a=t;null!=a&&++i<o;){var c=Lr(e[i]),s=n;if(i!=u){var l=a[c];(s=r?r(l,c,a):W)===W&&(s=hi(l)?l:Er(e[i+1])?[]:{});}ce(a,c,s),a=a[c];}return t;}function cn(t){return Pr(Si(t));}function sn(t,e,n){var r=-1,i=t.length;for(0>e&&(e=-e>i?0:i+e),0>(n=n>i?i:n)&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0,n=zi(i);++r<i;){n[r]=t[r+e];}return n;}function ln(t,e){var n;return tu(t,function(t,r,i){return!(n=e(t,r,i));}),!!n;}function fn(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&2147483647>=i){for(;r<i;){var o=r+i>>>1,u=t[o];null!==u&&!yi(u)&&(n?u<=e:u<e)?r=o+1:i=o;}return i;}return hn(t,e,Ii,n);}function hn(t,e,n,r){e=n(e);for(var i=0,o=null==t?0:t.length,u=e!==e,a=null===e,c=yi(e),s=e===W;i<o;){var l=Co((i+o)/2),f=n(t[l]),h=f!==W,p=null===f,_=f===f,d=yi(f);(u?r||_:s?_&&(r||h):a?_&&h&&(r||!p):c?_&&h&&!p&&(r||!d):p||d?0:r?f<=e:f<e)?i=l+1:o=l;}return Ro(o,4294967294);}function pn(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var u=t[n],a=e?e(u):u;if(!n||!oi(a,c)){var c=a;o[i++]=0===u?0:u;}}return o;}function _n(t){return"number"==typeof t?t:yi(t)?q:+t;}function dn(t){if("string"==typeof t)return t;if(ea(t))return p(t,dn)+"";if(yi(t))return Jo?Jo.call(t):"";var e=t+"";return"0"==e&&1/t==-$?"-0":e;}function vn(t,e,n){var r=-1,i=f,o=t.length,u=!0,a=[],c=a;if(n)u=!1,i=h;else if(200<=o){if(i=e?null:au(t))return M(i);u=!1,i=P,c=new Ht();}else c=e?[]:a;t:for(;++r<o;){var s=t[r],l=e?e(s):s,s=n||0!==s?s:0;if(u&&l===l){for(var p=c.length;p--;){if(c[p]===l)continue t;}e&&c.push(l),a.push(s);}else i(c,l,n)||(c!==a&&c.push(l),a.push(s));}return a;}function yn(t,e){return e=En(e,t),null==(t=2>e.length?t:Te(t,sn(e,0,-1)))||delete t[Lr(zr(e))];}function gn(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],o,t);){}return n?sn(t,r?0:o,r?o+1:i):sn(t,r?o+1:0,r?i:o);}function mn(t,e){var n=t;return n instanceof Ot&&(n=n.value()),d(e,function(t,e){return e.func.apply(e.thisArg,_([t],e.args));},n);}function bn(t,e,n){var r=t.length;if(2>r)return r?vn(t[0]):[];for(var i=-1,o=zi(r);++i<r;){for(var u=t[i],a=-1;++a<r;){a!=i&&(o[i]=be(o[i]||u,t[a],e,n));}}return vn(Ee(o,1),e,n);}function wn(t,e,n){for(var r=-1,i=t.length,o=e.length,u={};++r<i;){n(u,t[r],r<o?e[r]:W);}return u;}function jn(t){return ai(t)?t:[];}function xn(t){return"function"==typeof t?t:Ii;}function En(t,e){return ea(t)?t:kr(t,e)?[t]:vu(Ei(t));}function Cn(t,e,n){var r=t.length;return n=n===W?r:n,!e&&n>=r?t:sn(t,e,n);}function kn(t,e){if(e)return t.slice();var n=t.length,n=fo?fo(n):new t.constructor(n);return t.copy(n),n;}function Fn(t){var e=new t.constructor(t.byteLength);return new lo(e).set(new lo(t)),e;}function Tn(t,e){return new t.constructor(e?Fn(t.buffer):t.buffer,t.byteOffset,t.length);}function An(t,e){if(t!==e){var n=t!==W,r=null===t,i=t===t,o=yi(t),u=e!==W,a=null===e,c=e===e,s=yi(e);if(!a&&!s&&!o&&t>e||o&&u&&c&&!a&&!s||r&&u&&c||!n&&c||!i)return 1;if(!r&&!o&&!s&&t<e||s&&n&&i&&!r&&!o||a&&n&&i||!u&&i||!c)return-1;}return 0;}function Sn(t,e,n,r){var i=-1,o=t.length,u=n.length,a=-1,c=e.length,s=Oo(o-u,0),l=zi(c+s);for(r=!r;++a<c;){l[a]=e[a];}for(;++i<u;){(r||i<o)&&(l[n[i]]=t[i]);}for(;s--;){l[a++]=t[i++];}return l;}function On(t,e,n,r){var i=-1,o=t.length,u=-1,a=n.length,c=-1,s=e.length,l=Oo(o-a,0),f=zi(l+s);for(r=!r;++i<l;){f[i]=t[i];}for(l=i;++c<s;){f[l+c]=e[c];}for(;++u<a;){(r||i<o)&&(f[l+n[u]]=t[i++]);}return f;}function Rn(t,e){var n=-1,r=t.length;for(e||(e=zi(r));++n<r;){e[n]=t[n];}return e;}function Pn(t,e,n,r){var i=!n;n||(n={});for(var o=-1,u=e.length;++o<u;){var a=e[o],c=r?r(n[a],t[a],a,n,t):W;c===W&&(c=t[a]),i?pe(n,a,c):ce(n,a,c);}return n;}function Ln(t,e){return Pn(t,su(t),e);}function In(t,e){return Pn(t,lu(t),e);}function Dn(t,e){return function(n,r){var i=ea(n)?u:le,o=e?e():{};return i(n,t,dr(r,2),o);};}function Un(t){return rn(function(e,n){var r=-1,i=n.length,o=1<i?n[i-1]:W,u=2<i?n[2]:W,o=3<t.length&&"function"==typeof o?(i--,o):W;for(u&&Cr(n[0],n[1],u)&&(o=3>i?W:o,i=1),e=Qi(e);++r<i;){(u=n[r])&&t(e,u,r,o);}return e;});}function Bn(t,e){return function(n,r){if(null==n)return n;if(!ui(n))return t(n,r);for(var i=n.length,o=e?i:-1,u=Qi(n);(e?o--:++o<i)&&!1!==r(u[o],o,u);){}return n;};}function Nn(t){return function(e,n,r){for(var i=-1,o=Qi(e),u=(r=r(e)).length;u--;){var a=r[t?u:++i];if(!1===n(o[a],a,o))break;}return e;};}function Mn(t,e,n){function r(){return(this&&this!==Wt&&this instanceof r?o:t).apply(i?n:this,arguments);}var i=1&e,o=Hn(t);return r;}function Vn(t){return function(e){e=Ei(e);var n=Pt.test(e)?H(e):W,r=n?n[0]:e.charAt(0);return e=n?Cn(n,1).join(""):e.slice(1),r[t]()+e;};}function zn(t){return function(e){return d(Pi(Ri(e).replace(At,"")),t,"");};}function Hn(t){return function(){var e=arguments;switch(e.length){case 0:return new t();case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);}var n=Yo(t.prototype);return hi(e=t.apply(n,e))?e:n;};}function Wn(t,e,n){function r(){for(var u=arguments.length,a=zi(u),c=u,s=_r(r);c--;){a[c]=arguments[c];}return c=3>u&&a[0]!==s&&a[u-1]!==s?[]:N(a,s),(u-=c.length)<n?er(t,e,Qn,r.placeholder,W,a,c,W,W,n-u):o(this&&this!==Wt&&this instanceof r?i:t,this,a);}var i=Hn(t);return r;}function $n(t){return function(e,n,r){var i=Qi(e);if(!ui(e)){var o=dr(n,3);e=Fi(e),n=function n(t){return o(i[t],t,i);};}return-1<(n=t(e,n,r))?i[o?e[n]:n]:W;};}function qn(t){return lr(function(e){var n=e.length,r=n,i=Tt.prototype.thru;for(t&&e.reverse();r--;){if("function"!=typeof(o=e[r]))throw new Xi("Expected a function");if(i&&!a&&"wrapper"==pr(o))a=new Tt([],!0);}for(r=a?r:n;++r<n;){var o=e[r],u="wrapper"==(i=pr(o))?cu(o):W,a=u&&Fr(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?a[pr(u[0])].apply(a,u[3]):1==o.length&&Fr(o)?a[i]():a.thru(o);}return function(){var t=(i=arguments)[0];if(a&&1==i.length&&ea(t))return a.plant(t).value();for(var r=0,i=n?e[r].apply(this,i):t;++r<n;){i=e[r].call(this,i);}return i;};});}function Qn(t,e,n,r,i,o,u,a,c,s){function l(){for(var y=arguments.length,g=zi(y),m=y;m--;){g[m]=arguments[m];}if(_){var b,w=_r(l),m=g.length;for(b=0;m--;){g[m]===w&&++b;}}if(r&&(g=Sn(g,r,i,_)),o&&(g=On(g,o,u,_)),y-=b,_&&y<s)return w=N(g,w),er(t,e,Qn,l.placeholder,n,g,w,a,c,s-y);if(w=h?n:this,m=p?w[t]:t,y=g.length,a){b=g.length;for(var j=Ro(a.length,b),x=Rn(g);j--;){var E=a[j];g[j]=Er(E,b)?x[E]:W;}}else d&&1<y&&g.reverse();return f&&c<y&&(g.length=c),this&&this!==Wt&&this instanceof l&&(m=v||Hn(m)),m.apply(w,g);}var f=128&e,h=1&e,p=2&e,_=24&e,d=512&e,v=p?W:Hn(t);return l;}function Gn(t,e){return function(n,r){return Ie(n,t,e(r));};}function Zn(t,e){return function(n,r){var i;if(n===W&&r===W)return e;if(n!==W&&(i=n),r!==W){if(i===W)return r;"string"==typeof n||"string"==typeof r?(n=dn(n),r=dn(r)):(n=_n(n),r=_n(r)),i=t(n,r);}return i;};}function Xn(t){return lr(function(e){return e=p(e,O(dr())),rn(function(n){var r=this;return t(e,function(t){return o(t,r,n);});});});}function Kn(t,e){var n=(e=e===W?" ":dn(e)).length;return 2>n?n?nn(e,t):e:(n=nn(e,Eo(t/z(e))),Pt.test(e)?Cn(H(n),0,t).join(""):n.slice(0,t));}function Jn(t,e,n,r){function i(){for(var e=-1,c=arguments.length,s=-1,l=r.length,f=zi(l+c),h=this&&this!==Wt&&this instanceof i?a:t;++s<l;){f[s]=r[s];}for(;c--;){f[s++]=arguments[++e];}return o(h,u?n:this,f);}var u=1&e,a=Hn(t);return i;}function Yn(t){return function(e,n,r){r&&"number"!=typeof r&&Cr(e,n,r)&&(n=r=W),e=mi(e),n===W?(n=e,e=0):n=mi(n),r=r===W?e<n?1:-1:mi(r);var i=-1;n=Oo(Eo((n-e)/(r||1)),0);for(var o=zi(n);n--;){o[t?n:++i]=e,e+=r;}return o;};}function tr(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=ji(e),n=ji(n)),t(e,n);};}function er(t,e,n,r,i,o,u,a,c,s){var l=8&e,f=l?u:W;u=l?W:u;var h=l?o:W;return o=l?W:o,4&(e=(e|(l?32:64))&~(l?64:32))||(e&=-4),i=[t,e,i,h,f,o,u,a,c,s],n=n.apply(W,i),Fr(t)&&pu(n,i),n.placeholder=r,Or(n,t,e);}function nr(t){var e=qi[t];return function(t,n){if(t=ji(t),n=null==n?0:Ro(bi(n),292)){var r=(Ei(t)+"e").split("e");return+((r=(Ei(r=e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n));}return e(t);};}function rr(t){return function(e){var n=fu(e);return"[object Map]"==n?U(e):"[object Set]"==n?V(e):S(e,t(e));};}function ir(t,e,n,r,i,o,u,a){var c=2&e;if(!c&&"function"!=typeof t)throw new Xi("Expected a function");var s=r?r.length:0;if(s||(e&=-97,r=i=W),u=u===W?u:Oo(bi(u),0),a=a===W?a:bi(a),s-=i?i.length:0,64&e){var l=r,f=i;r=i=W;}var h=c?W:cu(t);return o=[t,e,n,r,i,l,f,o,u,a],h&&(n=o[1],t=h[1],e=n|t,r=128==t&&8==n||128==t&&256==n&&o[7].length<=h[8]||384==t&&h[7].length<=h[8]&&8==n,131>e||r)&&(1&t&&(o[2]=h[2],e|=1&n?0:4),(n=h[3])&&(r=o[3],o[3]=r?Sn(r,n,h[4]):n,o[4]=r?N(o[3],"__lodash_placeholder__"):h[4]),(n=h[5])&&(r=o[5],o[5]=r?On(r,n,h[6]):n,o[6]=r?N(o[5],"__lodash_placeholder__"):h[6]),(n=h[7])&&(o[7]=n),128&t&&(o[8]=null==o[8]?h[8]:Ro(o[8],h[8])),null==o[9]&&(o[9]=h[9]),o[0]=h[0],o[1]=e),t=o[0],e=o[1],n=o[2],r=o[3],i=o[4],!(a=o[9]=o[9]===W?c?0:t.length:Oo(o[9]-s,0))&&24&e&&(e&=-25),Or((h?iu:pu)(e&&1!=e?8==e||16==e?Wn(t,e,a):32!=e&&33!=e||i.length?Qn.apply(W,o):Jn(t,e,n,r):Mn(t,e,n),o),t,e);}function or(t,e,n,r){return t===W||oi(t,Ji[n])&&!eo.call(r,n)?e:t;}function ur(t,e,n,r,i,o){return hi(t)&&hi(e)&&(o.set(e,t),Qe(t,e,W,ur,o),o.delete(e)),t;}function ar(t){return di(t)?W:t;}function cr(t,e,n,r,i,o){var u=1&n,a=t.length;if(a!=(c=e.length)&&!(u&&c>a))return!1;if((c=o.get(t))&&o.get(e))return c==e;var c=-1,s=!0,l=2&n?new Ht():W;for(o.set(t,e),o.set(e,t);++c<a;){var f=t[c],h=e[c];if(r)var p=u?r(h,f,c,e,t,o):r(f,h,c,t,e,o);if(p!==W){if(p)continue;s=!1;break;}if(l){if(!y(e,function(t,e){if(!P(l,e)&&(f===t||i(f,t,n,r,o)))return l.push(e);})){s=!1;break;}}else if(f!==h&&!i(f,h,n,r,o)){s=!1;break;}}return o.delete(t),o.delete(e),s;}function sr(t,e,n,r,i,o,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!o(new lo(t),new lo(e)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return oi(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=U;case"[object Set]":if(a||(a=M),t.size!=e.size&&!(1&r))break;return(n=u.get(t))?n==e:(r|=2,u.set(t,e),e=cr(a(t),a(e),r,i,o,u),u.delete(t),e);case"[object Symbol]":if(Ko)return Ko.call(t)==Ko.call(e);}return!1;}function lr(t){return du(Sr(t,W,Mr),t+"");}function fr(t){return Ae(t,Fi,su);}function hr(t){return Ae(t,Ti,lu);}function pr(t){for(var e=t.name+"",n=Wo[e],r=eo.call(Wo,e)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==t)return i.name;}return e;}function _r(t){return(eo.call(n,"placeholder")?n:t).placeholder;}function dr(){var t=(t=n.iteratee||Di)===Di?Ve:t;return arguments.length?t(arguments[0],arguments[1]):t;}function vr(t,e){var n=t.__data__,r=void 0===e?"undefined":_typeof2(e);return("string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?n["string"==typeof e?"string":"hash"]:n.map;}function yr(t){for(var e=Fi(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,i===i&&!hi(i)];}return e;}function gr(t,e){var n=null==t?W:t[e];return Me(n)?n:W;}function mr(t,e,n){for(var r=-1,i=(e=En(e,t)).length,o=!1;++r<i;){var u=Lr(e[r]);if(!(o=null!=t&&n(t,u)))break;t=t[u];}return o||++r!=i?o:!!(i=null==t?0:t.length)&&fi(i)&&Er(u,i)&&(ea(t)||ta(t));}function br(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&eo.call(t,"index")&&(n.index=t.index,n.input=t.input),n;}function wr(t){return"function"!=typeof t.constructor||Tr(t)?{}:Yo(ho(t));}function jr(t,e,n,o){var u=t.constructor;switch(e){case"[object ArrayBuffer]":return Fn(t);case"[object Boolean]":case"[object Date]":return new u(+t);case"[object DataView]":return e=o?Fn(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Tn(t,o);case"[object Map]":return e=o?n(U(t),1):U(t),d(e,r,new t.constructor());case"[object Number]":case"[object String]":return new u(t);case"[object RegExp]":return e=new t.constructor(t.source,mt.exec(t)),e.lastIndex=t.lastIndex,e;case"[object Set]":return e=o?n(M(t),1):M(t),d(e,i,new t.constructor());case"[object Symbol]":return Ko?Qi(Ko.call(t)):{};}}function xr(t){return ea(t)||ta(t)||!!(yo&&t&&t[yo]);}function Er(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||Et.test(t))&&-1<t&&0==t%1&&t<e;}function Cr(t,e,n){if(!hi(n))return!1;var r=void 0===e?"undefined":_typeof2(e);return!!("number"==r?ui(n)&&Er(e,n.length):"string"==r&&e in n)&&oi(n[e],t);}function kr(t,e){if(ea(t))return!1;var n=void 0===t?"undefined":_typeof2(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!yi(t))||ot.test(t)||!it.test(t)||null!=e&&t in Qi(e);}function Fr(t){var e=pr(t),r=n[e];return"function"==typeof r&&e in Ot.prototype&&(t===r||!!(e=cu(r))&&t===e[0]);}function Tr(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ji);}function Ar(t,e){return function(n){return null!=n&&n[t]===e&&(e!==W||t in Qi(n));};}function Sr(t,e,n){return e=Oo(e===W?t.length-1:e,0),function(){for(var r=arguments,i=-1,u=Oo(r.length-e,0),a=zi(u);++i<u;){a[i]=r[e+i];}for(i=-1,u=zi(e+1);++i<e;){u[i]=r[i];}return u[e]=n(a),o(t,this,u);};}function Or(t,e,n){var r=e+"";e=du;var i,o=Dr;return i=(i=r.match(_t))?i[1].split(dt):[],n=o(i,n),(o=n.length)&&(i=o-1,n[i]=(1<o?"& ":"")+n[i],n=n.join(2<o?", ":" "),r=r.replace(pt,"{\n/* [wrapped with "+n+"] */\n")),e(t,r);}function Rr(t){var e=0,n=0;return function(){var r=Po(),i=16-(r-n);if(n=r,0<i){if(800<=++e)return arguments[0];}else e=0;return t.apply(W,arguments);};}function Pr(t,e){var n=-1,r=t.length,i=r-1;for(e=e===W?r:e;++n<e;){var o=t[r=en(n,i)];t[r]=t[n],t[n]=o;}return t.length=e,t;}function Lr(t){if("string"==typeof t||yi(t))return t;var e=t+"";return"0"==e&&1/t==-$?"-0":e;}function Ir(t){if(null!=t){try{return to.call(t);}catch(t){}return t+"";}return"";}function Dr(t,e){return a(Q,function(n){var r="_."+n[0];e&n[1]&&!f(t,r)&&t.push(r);}),t.sort();}function Ur(t){if(t instanceof Ot)return t.clone();var e=new Tt(t.__wrapped__,t.__chain__);return e.__actions__=Rn(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e;}function Br(t,e,n){var r=null==t?0:t.length;return r?(0>(n=null==n?0:bi(n))&&(n=Oo(r+n,0)),m(t,dr(e,3),n)):-1;}function Nr(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return n!==W&&(i=bi(n),i=0>n?Oo(r+i,0):Ro(i,r-1)),m(t,dr(e,3),i,!0);}function Mr(t){return(null==t?0:t.length)?Ee(t,1):[];}function Vr(t){return t&&t.length?t[0]:W;}function zr(t){var e=null==t?0:t.length;return e?t[e-1]:W;}function Hr(t,e){return t&&t.length&&e&&e.length?Ye(t,e):t;}function Wr(t){return null==t?t:Do.call(t);}function $r(t){if(!t||!t.length)return[];var e=0;return t=l(t,function(t){if(ai(t))return e=Oo(t.length,e),!0;}),A(e,function(e){return p(t,E(e));});}function qr(t,e){if(!t||!t.length)return[];var n=$r(t);return null==e?n:p(n,function(t){return o(e,W,t);});}function Qr(t){return t=n(t),t.__chain__=!0,t;}function Gr(t,e){return e(t);}function Zr(t,e){return(ea(t)?a:tu)(t,dr(e,3));}function Xr(t,e){return(ea(t)?c:eu)(t,dr(e,3));}function Kr(t,e){return(ea(t)?p:We)(t,dr(e,3));}function Jr(t,e,n){return e=n?W:e,e=t&&null==e?t.length:e,ir(t,128,W,W,W,W,e);}function Yr(t,e){var n;if("function"!=typeof e)throw new Xi("Expected a function");return t=bi(t),function(){return 0<--t&&(n=e.apply(this,arguments)),1>=t&&(e=W),n;};}function ti(t,e,n){return e=n?W:e,t=ir(t,8,W,W,W,W,W,e),t.placeholder=ti.placeholder,t;}function ei(t,e,n){return e=n?W:e,t=ir(t,16,W,W,W,W,W,e),t.placeholder=ei.placeholder,t;}function ni(t,e,n){function r(e){var n=c,r=s;return c=s=W,_=e,f=t.apply(r,n);}function i(t){var n=t-p;return t-=_,p===W||n>=e||0>n||v&&t>=l;}function o(){var t=Hu();if(i(t))return u(t);var n,r=_u;n=t-_,t=e-(t-p),n=v?Ro(t,l-n):t,h=r(o,n);}function u(t){return h=W,y&&c?r(t):(c=s=W,f);}function a(){var t=Hu(),n=i(t);if(c=arguments,s=this,p=t,n){if(h===W)return _=t=p,h=_u(o,e),d?r(t):f;if(v)return h=_u(o,e),r(p);}return h===W&&(h=_u(o,e)),f;}var c,s,l,f,h,p,_=0,d=!1,v=!1,y=!0;if("function"!=typeof t)throw new Xi("Expected a function");return e=ji(e)||0,hi(n)&&(d=!!n.leading,l=(v="maxWait"in n)?Oo(ji(n.maxWait)||0,e):l,y="trailing"in n?!!n.trailing:y),a.cancel=function(){h!==W&&uu(h),_=0,c=p=s=h=W;},a.flush=function(){return h===W?f:u(Hu());},a;}function ri(t,e){function n(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;return o.has(i)?o.get(i):(r=t.apply(this,r),n.cache=o.set(i,r)||o,r);}if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new Xi("Expected a function");return n.cache=new(ri.Cache||zt)(),n;}function ii(t){if("function"!=typeof t)throw new Xi("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2]);}return!t.apply(this,e);};}function oi(t,e){return t===e||t!==t&&e!==e;}function ui(t){return null!=t&&fi(t.length)&&!si(t);}function ai(t){return pi(t)&&ui(t);}function ci(t){if(!pi(t))return!1;var e=Se(t);return"[object Error]"==e||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!di(t);}function si(t){return!!hi(t)&&("[object Function]"==(t=Se(t))||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t);}function li(t){return"number"==typeof t&&t==bi(t);}function fi(t){return"number"==typeof t&&-1<t&&0==t%1&&9007199254740991>=t;}function hi(t){var e=void 0===t?"undefined":_typeof2(t);return null!=t&&("object"==e||"function"==e);}function pi(t){return null!=t&&"object"==(void 0===t?"undefined":_typeof2(t));}function _i(t){return"number"==typeof t||pi(t)&&"[object Number]"==Se(t);}function di(t){return!(!pi(t)||"[object Object]"!=Se(t))&&(null===(t=ho(t))||"function"==typeof(t=eo.call(t,"constructor")&&t.constructor)&&t instanceof t&&to.call(t)==oo);}function vi(t){return"string"==typeof t||!ea(t)&&pi(t)&&"[object String]"==Se(t);}function yi(t){return"symbol"==(void 0===t?"undefined":_typeof2(t))||pi(t)&&"[object Symbol]"==Se(t);}function gi(t){if(!t)return[];if(ui(t))return vi(t)?H(t):Rn(t);if(go&&t[go]){t=t[go]();for(var e,n=[];!(e=t.next()).done;){n.push(e.value);}return n;}return("[object Map]"==(e=fu(t))?U:"[object Set]"==e?M:Si)(t);}function mi(t){return t?(t=ji(t))===$||t===-$?1.7976931348623157e308*(0>t?-1:1):t===t?t:0:0===t?t:0;}function bi(t){var e=(t=mi(t))%1;return t===t?e?t-e:t:0;}function wi(t){return t?de(bi(t),0,4294967295):0;}function ji(t){if("number"==typeof t)return t;if(yi(t))return q;if(hi(t)&&(t="function"==typeof t.valueOf?t.valueOf():t,t=hi(t)?t+"":t),"string"!=typeof t)return 0===t?t:+t;t=t.replace(lt,"");var e=wt.test(t);return e||xt.test(t)?Vt(t.slice(2),e?2:8):bt.test(t)?q:+t;}function xi(t){return Pn(t,Ti(t));}function Ei(t){return null==t?"":dn(t);}function Ci(t,e,n){return(t=null==t?W:Te(t,e))===W?n:t;}function ki(t,e){return null!=t&&mr(t,e,Pe);}function Fi(t){return ui(t)?qt(t):ze(t);}function Ti(t){if(ui(t))t=qt(t,!0);else if(hi(t)){var e,n=Tr(t),r=[];for(e in t){("constructor"!=e||!n&&eo.call(t,e))&&r.push(e);}t=r;}else{if(e=[],null!=t)for(n in Qi(t)){e.push(n);}t=e;}return t;}function Ai(t,e){if(null==t)return{};var n=p(hr(t),function(t){return[t];});return e=dr(e),Ke(t,n,function(t,n){return e(t,n[0]);});}function Si(t){return null==t?[]:R(t,Fi(t));}function Oi(t){return La(Ei(t).toLowerCase());}function Ri(t){return(t=Ei(t))&&t.replace(Ct,ne).replace(St,"");}function Pi(t,e,n){return t=Ei(t),(e=n?W:e)===W?Lt.test(t)?t.match(Rt)||[]:t.match(vt)||[]:t.match(e)||[];}function Li(t){return function(){return t;};}function Ii(t){return t;}function Di(t){return Ve("function"==typeof t?t:ve(t,1));}function Ui(t,e,n){var r=Fi(e),i=Fe(e,r);null!=n||hi(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Fe(e,Fi(e)));var o=!(hi(n)&&"chain"in n&&!n.chain),u=si(t);return a(i,function(n){var r=e[n];t[n]=r,u&&(t.prototype[n]=function(){var e=this.__chain__;if(o||e){var n=t(this.__wrapped__);return(n.__actions__=Rn(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n;}return r.apply(t,_([this.value()],arguments));});}),t;}function Bi(){}function Ni(t){return kr(t)?E(Lr(t)):Je(t);}function Mi(){return[];}function Vi(){return!1;}var zi=(e=null==e?Wt:oe.defaults(Wt.Object(),e,oe.pick(Wt,It))).Array,Hi=e.Date,Wi=e.Error,$i=e.Function,qi=e.Math,Qi=e.Object,Gi=e.RegExp,Zi=e.String,Xi=e.TypeError,Ki=zi.prototype,Ji=Qi.prototype,Yi=e["__core-js_shared__"],to=$i.prototype.toString,eo=Ji.hasOwnProperty,no=0,ro=function(){var t=/[^.]+$/.exec(Yi&&Yi.keys&&Yi.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:"";}(),io=Ji.toString,oo=to.call(Qi),uo=Wt._,ao=Gi("^"+to.call(eo).replace(ct,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),co=Qt?e.Buffer:W,so=e.Symbol,lo=e.Uint8Array,fo=co?co.f:W,ho=B(Qi.getPrototypeOf,Qi),po=Qi.create,_o=Ji.propertyIsEnumerable,vo=Ki.splice,yo=so?so.isConcatSpreadable:W,go=so?so.iterator:W,mo=so?so.toStringTag:W,bo=function(){try{var t=gr(Qi,"defineProperty");return t({},"",{}),t;}catch(t){}}(),wo=e.clearTimeout!==Wt.clearTimeout&&e.clearTimeout,jo=Hi&&Hi.now!==Wt.Date.now&&Hi.now,xo=e.setTimeout!==Wt.setTimeout&&e.setTimeout,Eo=qi.ceil,Co=qi.floor,ko=Qi.getOwnPropertySymbols,Fo=co?co.isBuffer:W,To=e.isFinite,Ao=Ki.join,So=B(Qi.keys,Qi),Oo=qi.max,Ro=qi.min,Po=Hi.now,Lo=e.parseInt,Io=qi.random,Do=Ki.reverse,Uo=gr(e,"DataView"),Bo=gr(e,"Map"),No=gr(e,"Promise"),Mo=gr(e,"Set"),Vo=gr(e,"WeakMap"),zo=gr(Qi,"create"),Ho=Vo&&new Vo(),Wo={},$o=Ir(Uo),qo=Ir(Bo),Qo=Ir(No),Go=Ir(Mo),Zo=Ir(Vo),Xo=so?so.prototype:W,Ko=Xo?Xo.valueOf:W,Jo=Xo?Xo.toString:W,Yo=function(){function t(){}return function(e){return hi(e)?po?po(e):(t.prototype=e,e=new t(),t.prototype=W,e):{};};}();n.templateSettings={escape:et,evaluate:nt,interpolate:rt,variable:"",imports:{_:n}},n.prototype=C.prototype,n.prototype.constructor=n,Tt.prototype=Yo(C.prototype),Tt.prototype.constructor=Tt,Ot.prototype=Yo(C.prototype),Ot.prototype.constructor=Ot,Bt.prototype.clear=function(){this.__data__=zo?zo(null):{},this.size=0;},Bt.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t;},Bt.prototype.get=function(t){var e=this.__data__;return zo?"__lodash_hash_undefined__"===(t=e[t])?W:t:eo.call(e,t)?e[t]:W;},Bt.prototype.has=function(t){var e=this.__data__;return zo?e[t]!==W:eo.call(e,t);},Bt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=zo&&e===W?"__lodash_hash_undefined__":e,this;},Nt.prototype.clear=function(){this.__data__=[],this.size=0;},Nt.prototype.delete=function(t){var e=this.__data__;return!(0>(t=se(e,t))||(t==e.length-1?e.pop():vo.call(e,t,1),--this.size,0));},Nt.prototype.get=function(t){var e=this.__data__;return 0>(t=se(e,t))?W:e[t][1];},Nt.prototype.has=function(t){return-1<se(this.__data__,t);},Nt.prototype.set=function(t,e){var n=this.__data__,r=se(n,t);return 0>r?(++this.size,n.push([t,e])):n[r][1]=e,this;},zt.prototype.clear=function(){this.size=0,this.__data__={hash:new Bt(),map:new(Bo||Nt)(),string:new Bt()};},zt.prototype.delete=function(t){return t=vr(this,t).delete(t),this.size-=t?1:0,t;},zt.prototype.get=function(t){return vr(this,t).get(t);},zt.prototype.has=function(t){return vr(this,t).has(t);},zt.prototype.set=function(t,e){var n=vr(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this;},Ht.prototype.add=Ht.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this;},Ht.prototype.has=function(t){return this.__data__.has(t);},$t.prototype.clear=function(){this.__data__=new Nt(),this.size=0;},$t.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t;},$t.prototype.get=function(t){return this.__data__.get(t);},$t.prototype.has=function(t){return this.__data__.has(t);},$t.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Nt){var r=n.__data__;if(!Bo||199>r.length)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new zt(r);}return n.set(t,e),this.size=n.size,this;};var tu=Bn(Ce),eu=Bn(ke,!0),nu=Nn(),ru=Nn(!0),iu=Ho?function(t,e){return Ho.set(t,e),t;}:Ii,ou=bo?function(t,e){return bo(t,"toString",{configurable:!0,enumerable:!1,value:Li(e),writable:!0});}:Ii,uu=wo||function(t){return Wt.clearTimeout(t);},au=Mo&&1/M(new Mo([,-0]))[1]==$?function(t){return new Mo(t);}:Bi,cu=Ho?function(t){return Ho.get(t);}:Bi,su=ko?function(t){return null==t?[]:(t=Qi(t),l(ko(t),function(e){return _o.call(t,e);}));}:Mi,lu=ko?function(t){for(var e=[];t;){_(e,su(t)),t=ho(t);}return e;}:Mi,fu=Se;(Uo&&"[object DataView]"!=fu(new Uo(new ArrayBuffer(1)))||Bo&&"[object Map]"!=fu(new Bo())||No&&"[object Promise]"!=fu(No.resolve())||Mo&&"[object Set]"!=fu(new Mo())||Vo&&"[object WeakMap]"!=fu(new Vo()))&&(fu=function fu(t){var e=Se(t);if(t=(t="[object Object]"==e?t.constructor:W)?Ir(t):"")switch(t){case $o:return"[object DataView]";case qo:return"[object Map]";case Qo:return"[object Promise]";case Go:return"[object Set]";case Zo:return"[object WeakMap]";}return e;});var hu=Yi?si:Vi,pu=Rr(iu),_u=xo||function(t,e){return Wt.setTimeout(t,e);},du=Rr(ou),vu=function(t){var e=(t=ri(t,function(t){return 500===e.size&&e.clear(),t;})).cache;return t;}(function(t){var e=[];return ut.test(t)&&e.push(""),t.replace(at,function(t,n,r,i){e.push(r?i.replace(yt,"$1"):n||t);}),e;}),yu=rn(function(t,e){return ai(t)?be(t,Ee(e,1,ai,!0)):[];}),gu=rn(function(t,e){var n=zr(e);return ai(n)&&(n=W),ai(t)?be(t,Ee(e,1,ai,!0),dr(n,2)):[];}),mu=rn(function(t,e){var n=zr(e);return ai(n)&&(n=W),ai(t)?be(t,Ee(e,1,ai,!0),W,n):[];}),bu=rn(function(t){var e=p(t,jn);return e.length&&e[0]===t[0]?Le(e):[];}),wu=rn(function(t){var e=zr(t),n=p(t,jn);return e===zr(n)?e=W:n.pop(),n.length&&n[0]===t[0]?Le(n,dr(e,2)):[];}),ju=rn(function(t){var e=zr(t),n=p(t,jn);return(e="function"==typeof e?e:W)&&n.pop(),n.length&&n[0]===t[0]?Le(n,W,e):[];}),xu=rn(Hr),Eu=lr(function(t,e){var n=null==t?0:t.length,r=_e(t,e);return tn(t,p(e,function(t){return Er(t,n)?+t:t;}).sort(An)),r;}),Cu=rn(function(t){return vn(Ee(t,1,ai,!0));}),ku=rn(function(t){var e=zr(t);return ai(e)&&(e=W),vn(Ee(t,1,ai,!0),dr(e,2));}),Fu=rn(function(t){var e="function"==typeof(e=zr(t))?e:W;return vn(Ee(t,1,ai,!0),W,e);}),Tu=rn(function(t,e){return ai(t)?be(t,e):[];}),Au=rn(function(t){return bn(l(t,ai));}),Su=rn(function(t){var e=zr(t);return ai(e)&&(e=W),bn(l(t,ai),dr(e,2));}),Ou=rn(function(t){var e="function"==typeof(e=zr(t))?e:W;return bn(l(t,ai),W,e);}),Ru=rn($r),Pu=rn(function(t){var e=t.length;return qr(t,e="function"==typeof(e=1<e?t[e-1]:W)?(t.pop(),e):W);}),Lu=lr(function(t){function e(e){return _e(e,t);}var n=t.length,r=n?t[0]:0,i=this.__wrapped__;return!(1<n||this.__actions__.length)&&i instanceof Ot&&Er(r)?((i=i.slice(r,+r+(n?1:0))).__actions__.push({func:Gr,args:[e],thisArg:W}),new Tt(i,this.__chain__).thru(function(t){return n&&!t.length&&t.push(W),t;})):this.thru(e);}),Iu=Dn(function(t,e,n){eo.call(t,n)?++t[n]:pe(t,n,1);}),Du=$n(Br),Uu=$n(Nr),Bu=Dn(function(t,e,n){eo.call(t,n)?t[n].push(e):pe(t,n,[e]);}),Nu=rn(function(t,e,n){var r=-1,i="function"==typeof e,u=ui(t)?zi(t.length):[];return tu(t,function(t){u[++r]=i?o(e,t,n):De(t,e,n);}),u;}),Mu=Dn(function(t,e,n){pe(t,n,e);}),Vu=Dn(function(t,e,n){t[n?0:1].push(e);},function(){return[[],[]];}),zu=rn(function(t,e){if(null==t)return[];var n=e.length;return 1<n&&Cr(t,e[0],e[1])?e=[]:2<n&&Cr(e[0],e[1],e[2])&&(e=[e[0]]),Ze(t,Ee(e,1),[]);}),Hu=jo||function(){return Wt.Date.now();},Wu=rn(function(t,e,n){i=1;if(n.length)var r=N(n,_r(Wu)),i=32|i;return ir(t,i,e,n,r);}),$u=rn(function(t,e,n){i=3;if(n.length)var r=N(n,_r($u)),i=32|i;return ir(e,i,t,n,r);}),qu=rn(function(t,e){return me(t,1,e);}),Qu=rn(function(t,e,n){return me(t,ji(e)||0,n);});ri.Cache=zt;var Gu=rn(function(t,e){var n=(e=1==e.length&&ea(e[0])?p(e[0],O(dr())):p(Ee(e,1),O(dr()))).length;return rn(function(r){for(var i=-1,u=Ro(r.length,n);++i<u;){r[i]=e[i].call(this,r[i]);}return o(t,this,r);});}),Zu=rn(function(t,e){return ir(t,32,W,e,N(e,_r(Zu)));}),Xu=rn(function(t,e){return ir(t,64,W,e,N(e,_r(Xu)));}),Ku=lr(function(t,e){return ir(t,256,W,W,W,e);}),Ju=tr(Oe),Yu=tr(function(t,e){return t>=e;}),ta=Ue(function(){return arguments;}())?Ue:function(t){return pi(t)&&eo.call(t,"callee")&&!_o.call(t,"callee");},ea=zi.isArray,na=Zt?O(Zt):function(t){return pi(t)&&"[object ArrayBuffer]"==Se(t);},ra=Fo||Vi,ia=Xt?O(Xt):function(t){return pi(t)&&"[object Date]"==Se(t);},oa=Kt?O(Kt):function(t){return pi(t)&&"[object Map]"==fu(t);},ua=Jt?O(Jt):function(t){return pi(t)&&"[object RegExp]"==Se(t);},aa=Yt?O(Yt):function(t){return pi(t)&&"[object Set]"==fu(t);},ca=te?O(te):function(t){return pi(t)&&fi(t.length)&&!!Dt[Se(t)];},sa=tr(He),la=tr(function(t,e){return t<=e;}),fa=Un(function(t,e){if(Tr(e)||ui(e))Pn(e,Fi(e),t);else for(var n in e){eo.call(e,n)&&ce(t,n,e[n]);}}),ha=Un(function(t,e){Pn(e,Ti(e),t);}),pa=Un(function(t,e,n,r){Pn(e,Ti(e),t,r);}),_a=Un(function(t,e,n,r){Pn(e,Fi(e),t,r);}),da=lr(_e),va=rn(function(t){return t.push(W,or),o(pa,W,t);}),ya=rn(function(t){return t.push(W,ur),o(ja,W,t);}),ga=Gn(function(t,e,n){t[e]=n;},Li(Ii)),ma=Gn(function(t,e,n){eo.call(t,e)?t[e].push(n):t[e]=[n];},dr),ba=rn(De),wa=Un(function(t,e,n){Qe(t,e,n);}),ja=Un(function(t,e,n,r){Qe(t,e,n,r);}),xa=lr(function(t,e){var n={};if(null==t)return n;var r=!1;e=p(e,function(e){return e=En(e,t),r||(r=1<e.length),e;}),Pn(t,hr(t),n),r&&(n=ve(n,7,ar));for(var i=e.length;i--;){yn(n,e[i]);}return n;}),Ea=lr(function(t,e){return null==t?{}:Xe(t,e);}),Ca=rr(Fi),ka=rr(Ti),Fa=zn(function(t,e,n){return e=e.toLowerCase(),t+(n?Oi(e):e);}),Ta=zn(function(t,e,n){return t+(n?"-":"")+e.toLowerCase();}),Aa=zn(function(t,e,n){return t+(n?" ":"")+e.toLowerCase();}),Sa=Vn("toLowerCase"),Oa=zn(function(t,e,n){return t+(n?"_":"")+e.toLowerCase();}),Ra=zn(function(t,e,n){return t+(n?" ":"")+La(e);}),Pa=zn(function(t,e,n){return t+(n?" ":"")+e.toUpperCase();}),La=Vn("toUpperCase"),Ia=rn(function(t,e){try{return o(t,W,e);}catch(t){return ci(t)?t:new Wi(t);}}),Da=lr(function(t,e){return a(e,function(e){e=Lr(e),pe(t,e,Wu(t[e],t));}),t;}),Ua=qn(),Ba=qn(!0),Na=rn(function(t,e){return function(n){return De(n,t,e);};}),Ma=rn(function(t,e){return function(n){return De(t,n,e);};}),Va=Xn(p),za=Xn(s),Ha=Xn(y),Wa=Yn(),$a=Yn(!0),qa=Zn(function(t,e){return t+e;},0),Qa=nr("ceil"),Ga=Zn(function(t,e){return t/e;},1),Za=nr("floor"),Xa=Zn(function(t,e){return t*e;},1),Ka=nr("round"),Ja=Zn(function(t,e){return t-e;},0);return n.after=function(t,e){if("function"!=typeof e)throw new Xi("Expected a function");return t=bi(t),function(){if(1>--t)return e.apply(this,arguments);};},n.ary=Jr,n.assign=fa,n.assignIn=ha,n.assignInWith=pa,n.assignWith=_a,n.at=da,n.before=Yr,n.bind=Wu,n.bindAll=Da,n.bindKey=$u,n.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return ea(t)?t:[t];},n.chain=Qr,n.chunk=function(t,e,n){if(e=(n?Cr(t,e,n):e===W)?1:Oo(bi(e),0),!(n=null==t?0:t.length)||1>e)return[];for(var r=0,i=0,o=zi(Eo(n/e));r<n;){o[i++]=sn(t,r,r+=e);}return o;},n.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var o=t[e];o&&(i[r++]=o);}return i;},n.concat=function(){var t=arguments.length;if(!t)return[];for(var e=zi(t-1),n=arguments[0];t--;){e[t-1]=arguments[t];}return _(ea(n)?Rn(n):[n],Ee(e,1));},n.cond=function(t){var e=null==t?0:t.length,n=dr();return t=e?p(t,function(t){if("function"!=typeof t[1])throw new Xi("Expected a function");return[n(t[0]),t[1]];}):[],rn(function(n){for(var r=-1;++r<e;){var i=t[r];if(o(i[0],this,n))return o(i[1],this,n);}});},n.conforms=function(t){return ye(ve(t,1));},n.constant=Li,n.countBy=Iu,n.create=function(t,e){var n=Yo(t);return null==e?n:fe(n,e);},n.curry=ti,n.curryRight=ei,n.debounce=ni,n.defaults=va,n.defaultsDeep=ya,n.defer=qu,n.delay=Qu,n.difference=yu,n.differenceBy=gu,n.differenceWith=mu,n.drop=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===W?1:bi(e),sn(t,0>e?0:e,r)):[];},n.dropRight=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===W?1:bi(e),e=r-e,sn(t,0,0>e?0:e)):[];},n.dropRightWhile=function(t,e){return t&&t.length?gn(t,dr(e,3),!0,!0):[];},n.dropWhile=function(t,e){return t&&t.length?gn(t,dr(e,3),!0):[];},n.fill=function(t,e,n,r){var i=null==t?0:t.length;if(!i)return[];for(n&&"number"!=typeof n&&Cr(t,e,n)&&(n=0,r=i),i=t.length,0>(n=bi(n))&&(n=-n>i?0:i+n),0>(r=r===W||r>i?i:bi(r))&&(r+=i),r=n>r?0:wi(r);n<r;){t[n++]=e;}return t;},n.filter=function(t,e){return(ea(t)?l:xe)(t,dr(e,3));},n.flatMap=function(t,e){return Ee(Kr(t,e),1);},n.flatMapDeep=function(t,e){return Ee(Kr(t,e),$);},n.flatMapDepth=function(t,e,n){return n=n===W?1:bi(n),Ee(Kr(t,e),n);},n.flatten=Mr,n.flattenDeep=function(t){return(null==t?0:t.length)?Ee(t,$):[];},n.flattenDepth=function(t,e){return null!=t&&t.length?(e=e===W?1:bi(e),Ee(t,e)):[];},n.flip=function(t){return ir(t,512);},n.flow=Ua,n.flowRight=Ba,n.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e];r[i[0]]=i[1];}return r;},n.functions=function(t){return null==t?[]:Fe(t,Fi(t));},n.functionsIn=function(t){return null==t?[]:Fe(t,Ti(t));},n.groupBy=Bu,n.initial=function(t){return(null==t?0:t.length)?sn(t,0,-1):[];},n.intersection=bu,n.intersectionBy=wu,n.intersectionWith=ju,n.invert=ga,n.invertBy=ma,n.invokeMap=Nu,n.iteratee=Di,n.keyBy=Mu,n.keys=Fi,n.keysIn=Ti,n.map=Kr,n.mapKeys=function(t,e){var n={};return e=dr(e,3),Ce(t,function(t,r,i){pe(n,e(t,r,i),t);}),n;},n.mapValues=function(t,e){var n={};return e=dr(e,3),Ce(t,function(t,r,i){pe(n,r,e(t,r,i));}),n;},n.matches=function(t){return $e(ve(t,1));},n.matchesProperty=function(t,e){return qe(t,ve(e,1));},n.memoize=ri,n.merge=wa,n.mergeWith=ja,n.method=Na,n.methodOf=Ma,n.mixin=Ui,n.negate=ii,n.nthArg=function(t){return t=bi(t),rn(function(e){return Ge(e,t);});},n.omit=xa,n.omitBy=function(t,e){return Ai(t,ii(dr(e)));},n.once=function(t){return Yr(2,t);},n.orderBy=function(t,e,n,r){return null==t?[]:(ea(e)||(e=null==e?[]:[e]),n=r?W:n,ea(n)||(n=null==n?[]:[n]),Ze(t,e,n));},n.over=Va,n.overArgs=Gu,n.overEvery=za,n.overSome=Ha,n.partial=Zu,n.partialRight=Xu,n.partition=Vu,n.pick=Ea,n.pickBy=Ai,n.property=Ni,n.propertyOf=function(t){return function(e){return null==t?W:Te(t,e);};},n.pull=xu,n.pullAll=Hr,n.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?Ye(t,e,dr(n,2)):t;},n.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?Ye(t,e,W,n):t;},n.pullAt=Eu,n.range=Wa,n.rangeRight=$a,n.rearg=Ku,n.reject=function(t,e){return(ea(t)?l:xe)(t,ii(dr(e,3)));},n.remove=function(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;for(e=dr(e,3);++r<o;){var u=t[r];e(u,r,t)&&(n.push(u),i.push(r));}return tn(t,i),n;},n.rest=function(t,e){if("function"!=typeof t)throw new Xi("Expected a function");return e=e===W?e:bi(e),rn(t,e);},n.reverse=Wr,n.sampleSize=function(t,e,n){return e=(n?Cr(t,e,n):e===W)?1:bi(e),(ea(t)?ee:un)(t,e);},n.set=function(t,e,n){return null==t?t:an(t,e,n);},n.setWith=function(t,e,n,r){return r="function"==typeof r?r:W,null==t?t:an(t,e,n,r);},n.shuffle=function(t){return(ea(t)?ue:cn)(t);},n.slice=function(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&Cr(t,e,n)?(e=0,n=r):(e=null==e?0:bi(e),n=n===W?r:bi(n)),sn(t,e,n)):[];},n.sortBy=zu,n.sortedUniq=function(t){return t&&t.length?pn(t):[];},n.sortedUniqBy=function(t,e){return t&&t.length?pn(t,dr(e,2)):[];},n.split=function(t,e,n){return n&&"number"!=typeof n&&Cr(t,e,n)&&(e=n=W),(n=n===W?4294967295:n>>>0)?(t=Ei(t))&&("string"==typeof e||null!=e&&!ua(e))&&!(e=dn(e))&&Pt.test(t)?Cn(H(t),0,n):t.split(e,n):[];},n.spread=function(t,e){if("function"!=typeof t)throw new Xi("Expected a function");return e=null==e?0:Oo(bi(e),0),rn(function(n){var r=n[e];return n=Cn(n,0,e),r&&_(n,r),o(t,this,n);});},n.tail=function(t){var e=null==t?0:t.length;return e?sn(t,1,e):[];},n.take=function(t,e,n){return t&&t.length?(e=n||e===W?1:bi(e),sn(t,0,0>e?0:e)):[];},n.takeRight=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===W?1:bi(e),e=r-e,sn(t,0>e?0:e,r)):[];},n.takeRightWhile=function(t,e){return t&&t.length?gn(t,dr(e,3),!1,!0):[];},n.takeWhile=function(t,e){return t&&t.length?gn(t,dr(e,3)):[];},n.tap=function(t,e){return e(t),t;},n.throttle=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new Xi("Expected a function");return hi(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ni(t,e,{leading:r,maxWait:e,trailing:i});},n.thru=Gr,n.toArray=gi,n.toPairs=Ca,n.toPairsIn=ka,n.toPath=function(t){return ea(t)?p(t,Lr):yi(t)?[t]:Rn(vu(Ei(t)));},n.toPlainObject=xi,n.transform=function(t,e,n){var r=ea(t),i=r||ra(t)||ca(t);if(e=dr(e,4),null==n){var o=t&&t.constructor;n=i?r?new o():[]:hi(t)&&si(o)?Yo(ho(t)):{};}return(i?a:Ce)(t,function(t,r,i){return e(n,t,r,i);}),n;},n.unary=function(t){return Jr(t,1);},n.union=Cu,n.unionBy=ku,n.unionWith=Fu,n.uniq=function(t){return t&&t.length?vn(t):[];},n.uniqBy=function(t,e){return t&&t.length?vn(t,dr(e,2)):[];},n.uniqWith=function(t,e){return e="function"==typeof e?e:W,t&&t.length?vn(t,W,e):[];},n.unset=function(t,e){return null==t||yn(t,e);},n.unzip=$r,n.unzipWith=qr,n.update=function(t,e,n){return null==t?t:an(t,e,xn(n)(Te(t,e)),void 0);},n.updateWith=function(t,e,n,r){return r="function"==typeof r?r:W,null!=t&&(t=an(t,e,xn(n)(Te(t,e)),r)),t;},n.values=Si,n.valuesIn=function(t){return null==t?[]:R(t,Ti(t));},n.without=Tu,n.words=Pi,n.wrap=function(t,e){return Zu(xn(e),t);},n.xor=Au,n.xorBy=Su,n.xorWith=Ou,n.zip=Ru,n.zipObject=function(t,e){return wn(t||[],e||[],ce);},n.zipObjectDeep=function(t,e){return wn(t||[],e||[],an);},n.zipWith=Pu,n.entries=Ca,n.entriesIn=ka,n.extend=ha,n.extendWith=pa,Ui(n,n),n.add=qa,n.attempt=Ia,n.camelCase=Fa,n.capitalize=Oi,n.ceil=Qa,n.clamp=function(t,e,n){return n===W&&(n=e,e=W),n!==W&&(n=ji(n),n=n===n?n:0),e!==W&&(e=ji(e),e=e===e?e:0),de(ji(t),e,n);},n.clone=function(t){return ve(t,4);},n.cloneDeep=function(t){return ve(t,5);},n.cloneDeepWith=function(t,e){return e="function"==typeof e?e:W,ve(t,5,e);},n.cloneWith=function(t,e){return e="function"==typeof e?e:W,ve(t,4,e);},n.conformsTo=function(t,e){return null==e||ge(t,e,Fi(e));},n.deburr=Ri,n.defaultTo=function(t,e){return null==t||t!==t?e:t;},n.divide=Ga,n.endsWith=function(t,e,n){t=Ei(t),e=dn(e);var r=t.length,r=n=n===W?r:de(bi(n),0,r);return 0<=(n-=e.length)&&t.slice(n,r)==e;},n.eq=oi,n.escape=function(t){return(t=Ei(t))&&tt.test(t)?t.replace(J,re):t;},n.escapeRegExp=function(t){return(t=Ei(t))&&st.test(t)?t.replace(ct,"\\$&"):t;},n.every=function(t,e,n){var r=ea(t)?s:we;return n&&Cr(t,e,n)&&(e=W),r(t,dr(e,3));},n.find=Du,n.findIndex=Br,n.findKey=function(t,e){return g(t,dr(e,3),Ce);},n.findLast=Uu,n.findLastIndex=Nr,n.findLastKey=function(t,e){return g(t,dr(e,3),ke);},n.floor=Za,n.forEach=Zr,n.forEachRight=Xr,n.forIn=function(t,e){return null==t?t:nu(t,dr(e,3),Ti);},n.forInRight=function(t,e){return null==t?t:ru(t,dr(e,3),Ti);},n.forOwn=function(t,e){return t&&Ce(t,dr(e,3));},n.forOwnRight=function(t,e){return t&&ke(t,dr(e,3));},n.get=Ci,n.gt=Ju,n.gte=Yu,n.has=function(t,e){return null!=t&&mr(t,e,Re);},n.hasIn=ki,n.head=Vr,n.identity=Ii,n.includes=function(t,e,n,r){return t=ui(t)?t:Si(t),n=n&&!r?bi(n):0,r=t.length,0>n&&(n=Oo(r+n,0)),vi(t)?n<=r&&-1<t.indexOf(e,n):!!r&&-1<b(t,e,n);},n.indexOf=function(t,e,n){var r=null==t?0:t.length;return r?(0>(n=null==n?0:bi(n))&&(n=Oo(r+n,0)),b(t,e,n)):-1;},n.inRange=function(t,e,n){return e=mi(e),n===W?(n=e,e=0):n=mi(n),(t=ji(t))>=Ro(e,n)&&t<Oo(e,n);},n.invoke=ba,n.isArguments=ta,n.isArray=ea,n.isArrayBuffer=na,n.isArrayLike=ui,n.isArrayLikeObject=ai,n.isBoolean=function(t){return!0===t||!1===t||pi(t)&&"[object Boolean]"==Se(t);},n.isBuffer=ra,n.isDate=ia,n.isElement=function(t){return pi(t)&&1===t.nodeType&&!di(t);},n.isEmpty=function(t){if(null==t)return!0;if(ui(t)&&(ea(t)||"string"==typeof t||"function"==typeof t.splice||ra(t)||ca(t)||ta(t)))return!t.length;var e=fu(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(Tr(t))return!ze(t).length;for(var n in t){if(eo.call(t,n))return!1;}return!0;},n.isEqual=function(t,e){return Be(t,e);},n.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:W)?n(t,e):W;return r===W?Be(t,e,W,n):!!r;},n.isError=ci,n.isFinite=function(t){return"number"==typeof t&&To(t);},n.isFunction=si,n.isInteger=li,n.isLength=fi,n.isMap=oa,n.isMatch=function(t,e){return t===e||Ne(t,e,yr(e));},n.isMatchWith=function(t,e,n){return n="function"==typeof n?n:W,Ne(t,e,yr(e),n);},n.isNaN=function(t){return _i(t)&&t!=+t;},n.isNative=function(t){if(hu(t))throw new Wi("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Me(t);},n.isNil=function(t){return null==t;},n.isNull=function(t){return null===t;},n.isNumber=_i,n.isObject=hi,n.isObjectLike=pi,n.isPlainObject=di,n.isRegExp=ua,n.isSafeInteger=function(t){return li(t)&&-9007199254740991<=t&&9007199254740991>=t;},n.isSet=aa,n.isString=vi,n.isSymbol=yi,n.isTypedArray=ca,n.isUndefined=function(t){return t===W;},n.isWeakMap=function(t){return pi(t)&&"[object WeakMap]"==fu(t);},n.isWeakSet=function(t){return pi(t)&&"[object WeakSet]"==Se(t);},n.join=function(t,e){return null==t?"":Ao.call(t,e);},n.kebabCase=Ta,n.last=zr,n.lastIndexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r;if(n!==W&&(i=bi(n),i=0>i?Oo(r+i,0):Ro(i,r-1)),e===e){for(n=i+1;n--&&t[n]!==e;){}t=n;}else t=m(t,j,i,!0);return t;},n.lowerCase=Aa,n.lowerFirst=Sa,n.lt=sa,n.lte=la,n.max=function(t){return t&&t.length?je(t,Ii,Oe):W;},n.maxBy=function(t,e){return t&&t.length?je(t,dr(e,2),Oe):W;},n.mean=function(t){return x(t,Ii);},n.meanBy=function(t,e){return x(t,dr(e,2));},n.min=function(t){return t&&t.length?je(t,Ii,He):W;},n.minBy=function(t,e){return t&&t.length?je(t,dr(e,2),He):W;},n.stubArray=Mi,n.stubFalse=Vi,n.stubObject=function(){return{};},n.stubString=function(){return"";},n.stubTrue=function(){return!0;},n.multiply=Xa,n.nth=function(t,e){return t&&t.length?Ge(t,bi(e)):W;},n.noConflict=function(){return Wt._===this&&(Wt._=uo),this;},n.noop=Bi,n.now=Hu,n.pad=function(t,e,n){t=Ei(t);var r=(e=bi(e))?z(t):0;return!e||r>=e?t:(e=(e-r)/2,Kn(Co(e),n)+t+Kn(Eo(e),n));},n.padEnd=function(t,e,n){t=Ei(t);var r=(e=bi(e))?z(t):0;return e&&r<e?t+Kn(e-r,n):t;},n.padStart=function(t,e,n){t=Ei(t);var r=(e=bi(e))?z(t):0;return e&&r<e?Kn(e-r,n)+t:t;},n.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),Lo(Ei(t).replace(ft,""),e||0);},n.random=function(t,e,n){if(n&&"boolean"!=typeof n&&Cr(t,e,n)&&(e=n=W),n===W&&("boolean"==typeof e?(n=e,e=W):"boolean"==typeof t&&(n=t,t=W)),t===W&&e===W?(t=0,e=1):(t=mi(t),e===W?(e=t,t=0):e=mi(e)),t>e){var r=t;t=e,e=r;}return n||t%1||e%1?(n=Io(),Ro(t+n*(e-t+Mt("1e-"+((n+"").length-1))),e)):en(t,e);},n.reduce=function(t,e,n){var r=ea(t)?d:k,i=3>arguments.length;return r(t,dr(e,4),n,i,tu);},n.reduceRight=function(t,e,n){var r=ea(t)?v:k,i=3>arguments.length;return r(t,dr(e,4),n,i,eu);},n.repeat=function(t,e,n){return e=(n?Cr(t,e,n):e===W)?1:bi(e),nn(Ei(t),e);},n.replace=function(){var t=arguments,e=Ei(t[0]);return 3>t.length?e:e.replace(t[1],t[2]);},n.result=function(t,e,n){var r=-1,i=(e=En(e,t)).length;for(i||(i=1,t=W);++r<i;){var o=null==t?W:t[Lr(e[r])];o===W&&(r=i,o=n),t=si(o)?o.call(t):o;}return t;},n.round=Ka,n.runInContext=t,n.sample=function(t){return(ea(t)?Gt:on)(t);},n.size=function(t){if(null==t)return 0;if(ui(t))return vi(t)?z(t):t.length;var e=fu(t);return"[object Map]"==e||"[object Set]"==e?t.size:ze(t).length;},n.snakeCase=Oa,n.some=function(t,e,n){var r=ea(t)?y:ln;return n&&Cr(t,e,n)&&(e=W),r(t,dr(e,3));},n.sortedIndex=function(t,e){return fn(t,e);},n.sortedIndexBy=function(t,e,n){return hn(t,e,dr(n,2));},n.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var r=fn(t,e);if(r<n&&oi(t[r],e))return r;}return-1;},n.sortedLastIndex=function(t,e){return fn(t,e,!0);},n.sortedLastIndexBy=function(t,e,n){return hn(t,e,dr(n,2),!0);},n.sortedLastIndexOf=function(t,e){if(null==t?0:t.length){var n=fn(t,e,!0)-1;if(oi(t[n],e))return n;}return-1;},n.startCase=Ra,n.startsWith=function(t,e,n){return t=Ei(t),n=null==n?0:de(bi(n),0,t.length),e=dn(e),t.slice(n,n+e.length)==e;},n.subtract=Ja,n.sum=function(t){return t&&t.length?T(t,Ii):0;},n.sumBy=function(t,e){return t&&t.length?T(t,dr(e,2)):0;},n.template=function(t,e,r){var i=n.templateSettings;r&&Cr(t,e,r)&&(e=W),t=Ei(t),e=pa({},e,i,or);var o,u,a=Fi(r=pa({},e.imports,i.imports,or)),c=R(r,a),s=0;r=e.interpolate||kt;var l="__p+='";r=Gi((e.escape||kt).source+"|"+r.source+"|"+(r===rt?gt:kt).source+"|"+(e.evaluate||kt).source+"|$","g");var f="sourceURL"in e?"//# sourceURL="+e.sourceURL+"\n":"";if(t.replace(r,function(e,n,r,i,a,c){return r||(r=i),l+=t.slice(s,c).replace(Ft,D),n&&(o=!0,l+="'+__e("+n+")+'"),a&&(u=!0,l+="';"+a+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),s=c+e.length,e;}),l+="';",(e=e.variable)||(l="with(obj){"+l+"}"),l=(u?l.replace(G,""):l).replace(Z,"$1").replace(X,"$1;"),l="function("+(e||"obj")+"){"+(e?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",e=Ia(function(){return $i(a,f+"return "+l).apply(W,c);}),e.source=l,ci(e))throw e;return e;},n.times=function(t,e){if(1>(t=bi(t))||9007199254740991<t)return[];var n=4294967295,r=Ro(t,4294967295);for(t-=4294967295,r=A(r,e=dr(e));++n<t;){e(n);}return r;},n.toFinite=mi,n.toInteger=bi,n.toLength=wi,n.toLower=function(t){return Ei(t).toLowerCase();},n.toNumber=ji,n.toSafeInteger=function(t){return t?de(bi(t),-9007199254740991,9007199254740991):0===t?t:0;},n.toString=Ei,n.toUpper=function(t){return Ei(t).toUpperCase();},n.trim=function(t,e,n){return(t=Ei(t))&&(n||e===W)?t.replace(lt,""):t&&(e=dn(e))?(t=H(t),n=H(e),e=L(t,n),n=I(t,n)+1,Cn(t,e,n).join("")):t;},n.trimEnd=function(t,e,n){return(t=Ei(t))&&(n||e===W)?t.replace(ht,""):t&&(e=dn(e))?(t=H(t),e=I(t,H(e))+1,Cn(t,0,e).join("")):t;},n.trimStart=function(t,e,n){return(t=Ei(t))&&(n||e===W)?t.replace(ft,""):t&&(e=dn(e))?(t=H(t),e=L(t,H(e)),Cn(t,e).join("")):t;},n.truncate=function(t,e){var n=30,r="...";if(hi(e))var i="separator"in e?e.separator:i,n="length"in e?bi(e.length):n,r="omission"in e?dn(e.omission):r;u=(t=Ei(t)).length;if(Pt.test(t))var o=H(t),u=o.length;if(n>=u)return t;if(1>(u=n-z(r)))return r;if(n=o?Cn(o,0,u).join(""):t.slice(0,u),i===W)return n+r;if(o&&(u+=n.length-u),ua(i)){if(t.slice(u).search(i)){var a=n;for(i.global||(i=Gi(i.source,Ei(mt.exec(i))+"g")),i.lastIndex=0;o=i.exec(a);){var c=o.index;}n=n.slice(0,c===W?u:c);}}else t.indexOf(dn(i),u)!=u&&-1<(i=n.lastIndexOf(i))&&(n=n.slice(0,i));return n+r;},n.unescape=function(t){return(t=Ei(t))&&Y.test(t)?t.replace(K,ie):t;},n.uniqueId=function(t){var e=++no;return Ei(t)+e;},n.upperCase=Pa,n.upperFirst=La,n.each=Zr,n.eachRight=Xr,n.first=Vr,Ui(n,function(){var t={};return Ce(n,function(e,r){eo.call(n.prototype,r)||(t[r]=e);}),t;}(),{chain:!1}),n.VERSION="4.17.4",a("bind bindKey curry curryRight partial partialRight".split(" "),function(t){n[t].placeholder=n;}),a(["drop","take"],function(t,e){Ot.prototype[t]=function(n){n=n===W?1:Oo(bi(n),0);var r=this.__filtered__&&!e?new Ot(this):this.clone();return r.__filtered__?r.__takeCount__=Ro(n,r.__takeCount__):r.__views__.push({size:Ro(n,4294967295),type:t+(0>r.__dir__?"Right":"")}),r;},Ot.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse();};}),a(["filter","map","takeWhile"],function(t,e){var n=e+1,r=1==n||3==n;Ot.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:dr(t,3),type:n}),e.__filtered__=e.__filtered__||r,e;};}),a(["head","last"],function(t,e){var n="take"+(e?"Right":"");Ot.prototype[t]=function(){return this[n](1).value()[0];};}),a(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right");Ot.prototype[t]=function(){return this.__filtered__?new Ot(this):this[n](1);};}),Ot.prototype.compact=function(){return this.filter(Ii);},Ot.prototype.find=function(t){return this.filter(t).head();},Ot.prototype.findLast=function(t){return this.reverse().find(t);},Ot.prototype.invokeMap=rn(function(t,e){return"function"==typeof t?new Ot(this):this.map(function(n){return De(n,t,e);});}),Ot.prototype.reject=function(t){return this.filter(ii(dr(t)));},Ot.prototype.slice=function(t,e){t=bi(t);var n=this;return n.__filtered__&&(0<t||0>e)?new Ot(n):(0>t?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==W&&(e=bi(e),n=0>e?n.dropRight(-e):n.take(e-t)),n);},Ot.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse();},Ot.prototype.toArray=function(){return this.take(4294967295);},Ce(Ot.prototype,function(t,e){var r=/^(?:filter|find|map|reject)|While$/.test(e),i=/^(?:head|last)$/.test(e),o=n[i?"take"+("last"==e?"Right":""):e],u=i||/^find/.test(e);o&&(n.prototype[e]=function(){function e(t){return t=o.apply(n,_([t],c)),i&&h?t[0]:t;}var a=this.__wrapped__,c=i?[1]:arguments,s=a instanceof Ot,l=c[0],f=s||ea(a);f&&r&&"function"==typeof l&&1!=l.length&&(s=f=!1);var h=this.__chain__,p=!!this.__actions__.length,l=u&&!h,s=s&&!p;return!u&&f?(a=s?a:new Ot(this),(a=t.apply(a,c)).__actions__.push({func:Gr,args:[e],thisArg:W}),new Tt(a,h)):l&&s?t.apply(this,c):(a=this.thru(e),l?i?a.value()[0]:a.value():a);});}),a("pop push shift sort splice unshift".split(" "),function(t){var e=Ki[t],r=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|shift)$/.test(t);n.prototype[t]=function(){var t=arguments;if(i&&!this.__chain__){var n=this.value();return e.apply(ea(n)?n:[],t);}return this[r](function(n){return e.apply(ea(n)?n:[],t);});};}),Ce(Ot.prototype,function(t,e){var r=n[e];if(r){var i=r.name+"";(Wo[i]||(Wo[i]=[])).push({name:e,func:r});}}),Wo[Qn(W,2).name]=[{name:"wrapper",func:W}],Ot.prototype.clone=function(){var t=new Ot(this.__wrapped__);return t.__actions__=Rn(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Rn(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Rn(this.__views__),t;},Ot.prototype.reverse=function(){if(this.__filtered__){var t=new Ot(this);t.__dir__=-1,t.__filtered__=!0;}else t=this.clone(),t.__dir__*=-1;return t;},Ot.prototype.value=function(){var t,e=this.__wrapped__.value(),n=this.__dir__,r=ea(e),i=0>n,o=r?e.length:0;t=o;for(var u=this.__views__,a=0,c=-1,s=u.length;++c<s;){var l=u[c],f=l.size;switch(l.type){case"drop":a+=f;break;case"dropRight":t-=f;break;case"take":t=Ro(t,a+f);break;case"takeRight":a=Oo(a,t-f);}}if(t={start:a,end:t},u=t.start,a=t.end,t=a-u,u=i?a:u-1,a=this.__iteratees__,c=a.length,s=0,l=Ro(t,this.__takeCount__),!r||!i&&o==t&&l==t)return mn(e,this.__actions__);r=[];t:for(;t--&&s<l;){for(i=-1,o=e[u+=n];++i<c;){var f=(h=a[i]).type,h=(0,h.iteratee)(o);if(2==f)o=h;else if(!h){if(1==f)continue t;break t;}}r[s++]=o;}return r;},n.prototype.at=Lu,n.prototype.chain=function(){return Qr(this);},n.prototype.commit=function(){return new Tt(this.value(),this.__chain__);},n.prototype.next=function(){this.__values__===W&&(this.__values__=gi(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?W:this.__values__[this.__index__++]};},n.prototype.plant=function(t){for(var e,n=this;n instanceof C;){var r=Ur(n);r.__index__=0,r.__values__=W,e?i.__wrapped__=r:e=r;var i=r,n=n.__wrapped__;}return i.__wrapped__=t,e;},n.prototype.reverse=function(){var t=this.__wrapped__;return t instanceof Ot?(this.__actions__.length&&(t=new Ot(this)),(t=t.reverse()).__actions__.push({func:Gr,args:[Wr],thisArg:W}),new Tt(t,this.__chain__)):this.thru(Wr);},n.prototype.toJSON=n.prototype.valueOf=n.prototype.value=function(){return mn(this.__wrapped__,this.__actions__);},n.prototype.first=n.prototype.head,go&&(n.prototype[go]=function(){return this;}),n;}();"function"==typeof define&&"object"==_typeof2(define.amd)&&define.amd?(Wt._=oe,define(function(){return oe;})):qt?((qt.exports=oe)._=oe,$t._=oe):Wt._=oe;}).call(this);}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],3:[function(t,e,n){function r(){throw new Error("setTimeout has not been defined");}function i(){throw new Error("clearTimeout has not been defined");}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0);}catch(e){try{return f.call(null,t,0);}catch(e){return f.call(this,t,0);}}}function u(t){if(h===clearTimeout)return clearTimeout(t);if((h===i||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t);}catch(e){try{return h.call(null,t);}catch(e){return h.call(this,t);}}}function a(){v&&_&&(v=!1,_.length?d=_.concat(d):y=-1,d.length&&c());}function c(){if(!v){var t=o(a);v=!0;for(var e=d.length;e;){for(_=d,d=[];++y<e;){_&&_[y].run();}y=-1,e=d.length;}_=null,v=!1,u(t);}}function s(t,e){this.fun=t,this.array=e;}function l(){}var f,h,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r;}catch(t){f=r;}try{h="function"==typeof clearTimeout?clearTimeout:i;}catch(t){h=i;}}();var _,d=[],v=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n];}d.push(new s(t,e)),1!==d.length||v||o(c);},s.prototype.run=function(){this.fun.apply(null,this.array);},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(t){return[];},p.binding=function(t){throw new Error("process.binding is not supported");},p.cwd=function(){return"/";},p.chdir=function(t){throw new Error("process.chdir is not supported");},p.umask=function(){return 0;};},{}],4:[function(t,e,n){(function(r){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":_typeof2(e))&&"function"!=typeof e?t:e;}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":_typeof2(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),c="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof2(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof2(t);};!function(t){"object"===(void 0===n?"undefined":c(n))&&void 0!==e?e.exports=t():"function"==typeof define&&define.amd?define([],t):("undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:this).SequentialEvent=t();}(function(){return function e(n,r,i){function o(a,c){if(!r[a]){if(!n[a]){var s="function"==typeof t&&t;if(!c&&s)return s(a,!0);if(u)return u(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l;}var f=r[a]={exports:{}};n[a][0].call(f.exports,function(t){return o(n[a][1][t]||t);},f,f.exports,e,n,r,i);}return r[a].exports;}for(var u="function"==typeof t&&t,a=0;a<i.length;a++){o(i[a]);}return o;}({1:[function(t,e,n){(function(n){function r(t,e,n){if("function"==typeof t)return s(t,e,n);var r=0,i=t.length;return new Promise(function(o,u){function a(c){if(!(r<i))return o.call(null,c);var l=void 0!==c?n.concat([c]):n.slice(0);s(t[r],e,l).then(a).catch(u),r++;}a();});}function s(t,e,n){try{var r=t.apply(e,n);return"object"===(void 0===r?"undefined":c(r))&&"function"==typeof r.then?r:Promise.resolve(r);}catch(t){return Promise.reject(t);}}var l=t("events").EventEmitter,f=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));}return u(e,l),a(e,[{key:"emit",value:function value(t){for(var e=arguments.length,i=Array(e>1?e-1:0),o=1;o<e;o++){i[o-1]=arguments[o];}var u=!1,a="error"===t,s=this._events;if(s)a=a&&null==s.error;else if(!a)return!1;var l=this.domain;if(a){var f=void 0;if(arguments.length>1&&(f=arguments[1]),!l){if(f instanceof Error)throw f;var h=new Error('Unhandled "error" event. ('+f+")");throw h.context=f,h;}return f||(f=new Error('Unhandled "error" event')),"object"===(void 0===f?"undefined":c(f))&&null!==f&&(f.domainEmitter=this,f.domain=l,f.domainThrown=!1),l.emit("error",f),!1;}var p=s[t];if(!p)return Promise.resolve();void 0!==n&&l&&this!==n&&(l.enter(),u=!0);var _=r(p,this,i);return u&&l.exit(),_;}}]),e;}();e.exports=f;}).call(this,t("_process"));},{_process:3,events:2}],2:[function(t,e,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0;}function i(t){return"function"==typeof t;}function o(t){return"number"==typeof t;}function u(t){return"object"===(void 0===t?"undefined":c(t))&&null!==t;}function a(t){return void 0===t;}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(t){if(!o(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this;},r.prototype.emit=function(t){var e,n,r,o,c,s;if(this._events||(this._events={}),"error"===t&&(!this._events.error||u(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var l=new Error('Uncaught, unspecified "error" event. ('+e+")");throw l.context=e,l;}if(n=this._events[t],a(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o);}else if(u(n))for(o=Array.prototype.slice.call(arguments,1),r=(s=n.slice()).length,c=0;c<r;c++){s[c].apply(this,o);}return!0;},r.prototype.addListener=function(t,e){var n;if(!i(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?u(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,u(this._events[t])&&!this._events[t].warned&&(n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this;},r.prototype.on=r.prototype.addListener,r.prototype.once=function(t,e){function n(){this.removeListener(t,n),r||(r=!0,e.apply(this,arguments));}if(!i(e))throw TypeError("listener must be a function");var r=!1;return n.listener=e,this.on(t,n),this;},r.prototype.removeListener=function(t,e){var n,r,o,a;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],o=n.length,r=-1,n===e||i(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(u(n)){for(a=o;a-->0;){if(n[a]===e||n[a].listener&&n[a].listener===e){r=a;break;}}if(r<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",t,e);}return this;},r.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events){"removeListener"!==e&&this.removeAllListeners(e);}return this.removeAllListeners("removeListener"),this._events={},this;}if(n=this._events[t],i(n))this.removeListener(t,n);else if(n)for(;n.length;){this.removeListener(t,n[n.length-1]);}return delete this._events[t],this;},r.prototype.listeners=function(t){return this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[];},r.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(i(e))return 1;if(e)return e.length;}return 0;},r.listenerCount=function(t,e){return t.listenerCount(e);};},{}],3:[function(t,e,n){function r(){throw new Error("setTimeout has not been defined");}function i(){throw new Error("clearTimeout has not been defined");}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0);}catch(e){try{return f.call(null,t,0);}catch(e){return f.call(this,t,0);}}}function u(t){if(h===clearTimeout)return clearTimeout(t);if((h===i||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t);}catch(e){try{return h.call(null,t);}catch(e){return h.call(this,t);}}}function a(){v&&_&&(v=!1,_.length?d=_.concat(d):y=-1,d.length&&c());}function c(){if(!v){var t=o(a);v=!0;for(var e=d.length;e;){for(_=d,d=[];++y<e;){_&&_[y].run();}y=-1,e=d.length;}_=null,v=!1,u(t);}}function s(t,e){this.fun=t,this.array=e;}function l(){}var f,h,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r;}catch(t){f=r;}try{h="function"==typeof clearTimeout?clearTimeout:i;}catch(t){h=i;}}();var _,d=[],v=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n];}d.push(new s(t,e)),1!==d.length||v||o(c);},s.prototype.run=function(){this.fun.apply(null,this.array);},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(t){return[];},p.binding=function(t){throw new Error("process.binding is not supported");},p.cwd=function(){return"/";},p.chdir=function(t){throw new Error("process.chdir is not supported");},p.umask=function(){return 0;};},{}]},{},[1])(1);});}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}]},{},[2,4,1]);}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],2:[function(require,module,exports){'use strict';var Diaspora=require('./lib/diaspora');module.exports=Diaspora;},{"./lib/diaspora":10}],3:[function(require,module,exports){'use strict';var _require=require('../dependencies'),_=_require._,Promise=_require.Promise,SequentialEvent=_require.SequentialEvent;/**
 * @namespace ConstrainedTypes
 * @description Namespace for types with constraints, like <code>[0, Infinity]</code>, <code>]0, Infinity[</code>, etc etc
 *//**
 * @typedef {Integer} AbsInt0
 * @memberof ConstrainedTypes
 * @description Integer equal or above 0
 *//**
 * @typedef {Integer} AbsInt
 * @memberof ConstrainedTypes
 * @description Integer above 0
 *//**
 * @typedef {Integer} AbsIntInf
 * @memberof ConstrainedTypes
 * @description Integer above 0, may be integer
 *//**
 * @typedef {Integer} AbsIntInf0
 * @memberof ConstrainedTypes
 * @description Integer equal or above 0, may be integer
 *//**
 * @namespace QueryLanguage
 *//**
 * @typedef {Object} QueryOptions
 * @description All properties are optional
 * @memberof QueryLanguage
 * @public
 * @instance
 * @author gerkin
 * @property {ConstrainedTypes.AbsInt0} skip=0 Number of items to skip
 * @property {ConstrainedTypes.AbsIntInf0} limit=Infinity Number of items to get
 * @property {ConstrainedTypes.AbsInt0} page To use with {@link QueryOptions.limit `limit`} and without {@link QueryOptions.skip `skip`}. Skips `page` pages of `limit` elements
 * @property {Boolean} remapInput=true Flag indicating if adapter input should be remapped or not. TODO Remapping doc
 * @property {Boolean} remapOutput=true Flag indicating if adapter output should be remapped or not. TODO Remapping doc
 *//**
 * @typedef {Object} SelectQuery
 * @memberof QueryLanguage
 * @public
 * @instance
 * @author gerkin
 * @property {Any|SelectQueryCondition} * Fields to search. If not providing an object, find items with a property value that equals this value
 *//**
 * By default, all conditions in a single SelectQueryCondition are combined with an `AND` operator.
 *
 * @typedef {Object} QueryLanguage.SelectQueryCondition
 * @author gerkin
 * @property {Any}                                      $equals       - Match if item value is equal to this. Objects and array are compared deeply. **Alias: `==`**
 * @property {Any}                                      $diff         - Match if item value is different to this. Objects and array are compared deeply. **Alias: `!=`**
 * @property {boolean}                                  $exists       - If `true`, match items where this prop is defined. If `false`, match when prop is null or not set. **Alias: `~`**
 * @property {integer}                                  $less         - Match if item value is less than this. **Alias: `<`**
 * @property {integer}                                  $lessEqual    - Match if item value is less than this or equals to this. **Alias: `<=`**
 * @property {integer}                                  $greater      - Match if item value is greater than this. **Alias: `>`**
 * @property {integer}                                  $greaterEqual - Match if item value is greater than this or equals to this. **Alias: `>=`**
 * @property {QueryLanguage#SelectQueryOrCondition[]}   $or           - Match if *one of* the conditions in the array is true. **Alias: `||`** **NOT IMPLEMENTED YET**
 * @property {QueryLanguage#SelectQueryOrCondition[]}   $and          - Match if *all* the conditions in the array are true. Optional, because several conditions in a single SelectQueryCondition are combined with an `AND` operator. **Alias: `&&`** **NOT IMPLEMENTED YET**
 * @property {QueryLanguage#SelectQueryOrCondition[]}   $xor          - Match if *a single* of the conditions in the array is true. **Alias: `^^`** **NOT IMPLEMENTED YET**
 * @property {QueryLanguage#SelectQueryOrCondition}     $not          - Invert the condition **Alias: `!`** **NOT IMPLEMENTED YET**
 * @property {string}                                   $contains     - On *string*, it will check if query is included in item using GLOB. **NOT IMPLEMENTED YET**
 * @property {QueryLanguage#SelectQueryOrCondition|Any} $contains     - On *array*, it will check if item contains the query. **NOT IMPLEMENTED YET**
 * @property {Any[]}                                    $in           - Check if item value is contained (using deep comparaison) in query. **NOT IMPLEMENTED YET**
 *//**
 * @typedef {QueryLanguage#SelectQuery|QueryLanguage#SelectQueryCondition} SelectQueryOrCondition
 * @memberof QueryLanguage
 * @public
 * @instance
 * @author gerkin
 *//**
 * @namespace Adapters
 *//**
 * DiasporaAdapter is the base class of adapters. Adapters are components that are in charge to interact with data sources (files, databases, etc etc) with standardized methods. You should not use this class directly: extend this class and re-implement some methods to build an adapter. See the (upcoming) tutorial section.
 * @extends SequentialEvent
 * @memberof Adapters
 * @author gerkin
 */var DiasporaAdapter=function(_SequentialEvent){_inherits(DiasporaAdapter,_SequentialEvent);// -----
// ### Initialization
/**
	 * Create a new instance of adapter. This base class should be used by all other adapters.
	 *
	 * @public
	 * @author gerkin
	 * @param {DataStoreEntities.DataStoreEntity} classEntity - Entity to spawn with this adapter.
	 */function DiasporaAdapter(classEntity){_classCallCheck(this,DiasporaAdapter);/**
		 * Describe current adapter status.
		 *
		 * @type {string}
		 * @author Gerkin
		 */var _this=_possibleConstructorReturn(this,(DiasporaAdapter.__proto__||Object.getPrototypeOf(DiasporaAdapter)).call(this));_this.state='preparing';/**
		 * Hash to transform entity fields to data store fields.
		 *
		 * @type {Object}
		 * @property {string} * - Data store field associated with this entity field.
		 * @author Gerkin
		 */_this.remaps={};/**
		 * Hash to transform data store fields to entity fields.
		 *
		 * @type {Object}
		 * @property {string} * - Entity field associated with this data store field.
		 * @author Gerkin
		 */_this.remapsInverted={};/**
		 * Hash of functions to cast data store values to JSON standard values in entity.
		 *
		 * @type {Object}
		 * @property {Function} * - Filter to execute to get standard JSON value.
		 * @author Gerkin
		 */_this.filters={};/**
		 * Link to the constructor of the class generated by this adapter.
		 *
		 * @type {DataStoreEntities.DataStoreEntity}
		 * @author Gerkin
		 */_this.classEntity=classEntity;/**
		 * Error triggered by adapter initialization.
		 *
		 * @type {Error}
		 * @author Gerkin
		 */_this.error=undefined;// Bind events
_this.on('ready',function(){_this.state='ready';}).on('error',function(err){_this.state='error';_this.error=err;});return _this;}/**
	 * Saves the remapping table, the reversed remapping table and the filter table in the adapter. Those tables will be used later when manipulating models & entities.
	 *
	 * @author gerkin
	 * @param   {string} tableName    - Name of the table (usually, model name).
	 * @param   {Object} remaps       - Associative hash that links entity field names with data source field names.
	 * @param   {Object} [filters={}] - Not used yet...
	 * @returns {undefined} This function does not return anything.
	 */_createClass(DiasporaAdapter,[{key:"configureCollection",value:function configureCollection(tableName,remaps){var filters=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.remaps[tableName]=remaps;this.remapsInverted[tableName]=_.invert(remaps);this.filters=filters||{};}// -----
// ### Events
/**
	 * Fired when the adapter is ready to use. You should not try to use the adapter before this event is emitted.
	 *
	 * @event Adapters.DiasporaAdapter#ready
	 * @type {undefined}
	 * @see {@link Adapters.DiasporaAdapter#waitReady waitReady} Convinience method to wait for state change.
	 *//**
	 * Fired if the adapter failed to initialize or changed to `error` state. Called with the triggering `error`.
	 *
	 * @event Adapters.DiasporaAdapter#error
	 * @type {Error}
	 * @see {@link Adapters.DiasporaAdapter#waitReady waitReady} Convinience method to wait for state change.
	 */// -----
// ### Utils
/**
	 * Returns a promise resolved once adapter state is ready.
	 *
	 * @author gerkin
	 * @listens Adapters.DiasporaAdapter#error
	 * @listens Adapters.DiasporaAdapter#ready
	 * @returns {Promise} Promise resolved when adapter is ready, and rejected if an error occured.
	 */},{key:"waitReady",value:function waitReady(){var _this2=this;return new Promise(function(resolve,reject){if('ready'===_this2.state){return resolve(_this2);}else if('error'===_this2.state){return reject(_this2.error);}_this2.on('ready',function(){return resolve(_this2);}).on('error',function(err){return reject(err);});});}/**
	 * Cast entity field names to table field name, or the opposite.
	 *
	 * @author gerkin
	 * @param   {string}  tableName      - Name of the table we are remapping for.
	 * @param   {Object}  query          - Hash representing the raw query to remap.
	 * @param   {boolean} [invert=false] - `false` to cast to `table` field names, `true` to cast to `entity` field name.
	 * @returns {Object} Remapped object.
	 */},{key:"remapFields",value:function remapFields(tableName,query){var invert=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var keysMap=(invert?this.remapsInverted:this.remaps)[tableName];if(_.isNil(keysMap)){return query;}return _.mapKeys(query,function(value,key){if(keysMap.hasOwnProperty(key)){return keysMap[key];}return key;});}/**
	 * TODO.
	 *
	 * @author gerkin
	 * @see TODO remapping.
	 * @param   {string} tableName - Name of the table for which we remap.
	 * @param   {Object} query     - Hash representing the entity to remap.
	 * @returns {Object} Remapped object.
	 */},{key:"remapInput",value:function remapInput(tableName,query){var _this3=this;if(_.isNil(query)){return query;}var filtered=_.mapValues(query,function(value,key){if(_.isObject(_.get(_this3,'filters.input'))&&_this3.filters.input.hasOwnProperty(key)){return _this3.filters.input[key](value);}return value;});var remaped=_.mapKeys(filtered,function(value,key){if(_this3.remaps.hasOwnProperty(key)){return _this3.remaps[key];}return key;});return remaped;}/**
	 * TODO.
	 *
	 * @author gerkin
	 * @see TODO remapping.
	 * @param   {string} tableName - Name of the table for which we remap.
	 * @param   {Object} query     - Hash representing the entity to remap.
	 * @returns {Object} Remapped object.
	 */},{key:"remapOutput",value:function remapOutput(tableName,query){var _this4=this;if(_.isNil(query)){return query;}var filtered=_.mapValues(query,function(value,key){if(_.isObject(_.get(_this4,'filters.output'))&&_this4.filters.output.hasOwnProperty(key)){return _this4.filters.output[key](value);}return value;});var remaped=_.mapKeys(filtered,function(value,key){if(_this4.remapsInverted.hasOwnProperty(key)){return _this4.remapsInverted[key];}return key;});return remaped;}/**
	 * Refresh the `idHash` with current adapter's `id` injected.
	 *
	 * @author gerkin
	 * @param   {Object} entity          - Object containing attributes of the entity.
	 * @param   {string} [propName='id'] - Name of the `id` field.
	 * @returns {Object} Modified entity (for chaining).
	 */},{key:"setIdHash",value:function setIdHash(entity){var propName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'id';entity.idHash=_.assign({},entity.idHash,_defineProperty({},this.name,entity[propName]));return entity;}/**
	 * Check if provided `entity` is matched by the query. Query must be in its canonical form before using this function.
	 *
	 * @author gerkin
	 * @param   {QueryLanguage#SelectQuery} query  - Query to match against.
	 * @param   {Object}                    entity - Entity to test.
	 * @returns {boolean} `true` if query matches, `false` otherwise.
	 */},{key:"matchEntity",value:function matchEntity(query,entity){var matchResult=_.every(_.toPairs(query),function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],desc=_ref2[1];if(_.isObject(desc)){var entityVal=entity[key];return _.every(desc,function(val,operation){switch(operation){case'$exists':{return val===!_.isUndefined(entityVal);}case'$equal':{return!_.isUndefined(entityVal)&&entityVal===val;}case'$diff':{return!_.isUndefined(entityVal)&&entityVal!==val;}case'$less':{return!_.isUndefined(entityVal)&&entityVal<val;}case'$lessEqual':{return!_.isUndefined(entityVal)&&entityVal<=val;}case'$greater':{return!_.isUndefined(entityVal)&&entityVal>val;}case'$greaterEqual':{return!_.isUndefined(entityVal)&&entityVal>=val;}}return false;});}return false;});return matchResult;}/**
	 * Merge update query with the entity. This operation allows to delete fields.
	 *
	 * @author gerkin
	 * @param   {Object} update - Hash representing modified values. A field with an `undefined` value deletes this field from the entity.
	 * @param   {Object} entity - Entity to update.
	 * @returns {Object} Entity modified.
	 */},{key:"applyUpdateEntity",value:function applyUpdateEntity(update,entity){_.forEach(update,function(val,key){if(_.isUndefined(val)){delete entity[key];}else{entity[key]=val;}});return entity;}/**
	 * Transform options to their canonical form. This function must be applied before calling adapters' methods.
	 *
	 * @author gerkin
	 * @throws  {TypeError} Thrown if an option does not have an acceptable type.
	 * @throws  {ReferenceError} Thrown if a required option is not present.
	 * @throws  {Error} Thrown when there isn't more precise description of the error is available (eg. when conflicts occurs) .
	 * @param   {Object} [opts={}] - Options to transform.
	 * @returns {Object} Transformed options (also called `canonical options`).
	 */},{key:"normalizeOptions",value:function normalizeOptions(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};opts=_.cloneDeep(opts);if(opts.hasOwnProperty('limit')){var limitOpt=opts.limit;if(_.isString(limitOpt)){limitOpt=parseInt(limitOpt);}if(!(_.isInteger(limitOpt)||Infinity===limitOpt)||limitOpt<0){throw new TypeError("Expect \"options.limit\" to be an integer equal to or above 0, have "+limitOpt);}opts.limit=limitOpt;}if(opts.hasOwnProperty('skip')){var skipOpt=opts.skip;if(_.isString(skipOpt)){skipOpt=parseInt(skipOpt);}if(!_.isInteger(skipOpt)||skipOpt<0||!isFinite(skipOpt)){throw new TypeError("Expect \"options.skip\" to be a finite integer equal to or above 0, have "+skipOpt);}opts.skip=skipOpt;}if(opts.hasOwnProperty('page')){if(!opts.hasOwnProperty('limit')){throw new ReferenceError('Usage of "options.page" requires "options.limit" to be defined.');}if(!isFinite(opts.limit)){throw new ReferenceError('Usage of "options.page" requires "options.limit" to not be infinite');}if(opts.hasOwnProperty('skip')){throw new Error('Use either "options.page" or "options.skip"');}var pageOpt=opts.page;if(_.isString(pageOpt)){pageOpt=parseInt(pageOpt);}if(!_.isInteger(pageOpt)||pageOpt<0){throw new TypeError("Expect \"options.page\" to be an integer equal to or above 0, have "+pageOpt);}opts.skip=pageOpt*opts.limit;delete opts.page;}_.defaults(opts,{skip:0,remapInput:true,remapOutput:true});return opts;}/**
	 * Transform a search query to its canonical form, replacing aliases or shorthands by full query.
	 *
	 * @author gerkin
	 * @param   {QueryLanguage#SelectQueryOrCondition} originalQuery - Query to cast to its canonical form.
	 * @param   {QueryLanguage#Options}                options       - Options for this query.
	 * @returns {QueryLanguage#SelectQueryOrCondition} Query in its canonical form.
	 */},{key:"normalizeQuery",value:function normalizeQuery(originalQuery,options){var canonicalOperations={'~':'$exists','==':'$equal','!=':'$diff','<':'$less','<=':'$lessEqual','>':'$greater','>=':'$greaterEqual'};var normalizedQuery=true===options.remapInput?_(_.cloneDeep(originalQuery)).mapValues(function(attrSearch){if(!(!_.isNil(attrSearch)&&attrSearch instanceof Object)){if(!_.isNil(attrSearch)){return{$equal:attrSearch};}else{return{$exists:false};}}else{// Replace operations alias by canonical expressions
_.forEach(canonicalOperations,function(canon,alias){// If the currently checked alias is in the search hash...
if(attrSearch.hasOwnProperty(alias)){// ... check for conflict with canonical operation name...
if(attrSearch.hasOwnProperty(canon)){throw new Error("Search can't have both \""+alias+"\" and \""+canon+"\" keys, as they are synonyms");}else{// ... and replace alias by canonical
attrSearch[canon]=attrSearch[alias];delete attrSearch[alias];}}});// For arithmetic comparison, check if values are numeric (TODO later: support date)
_.forEach(['$less','$lessEqual','$greater','$greaterEqual'],function(operation){if(attrSearch.hasOwnProperty(operation)&&!_.isNumber(attrSearch[operation])){throw new TypeError("Expect \""+operation+"\" in "+JSON.stringify(attrSearch)+" to be a numeric value");}});return attrSearch;}}).value():_.cloneDeep(originalQuery);return normalizedQuery;}// -----
// ### Insert
/**
	 * Insert a single entity in the data store. This function is a default polyfill if the inheriting adapter does not provide `insertOne` itself.
	 *
	 * @summary At least one of {@link insertOne} or {@link insertMany} must be reimplemented by adapter.
	 * @author gerkin
	 * @param   {string} table  - Name of the table to insert data in.
	 * @param   {Object} entity - Hash representing the entity to insert.
	 * @returns {Promise} Promise resolved once insertion is done. Called with (*{@link DataStoreEntity}* entity).
	 */},{key:"insertOne",value:function insertOne(table,entity){return this.insertMany(table,[entity]).then(function(entities){return Promise.resolve(_.first(entities));});}/**
	 * Insert several entities in the data store. This function is a default polyfill if the inheriting adapter does not provide `insertMany` itself.
	 *
	 * @summary At least one of {@link insertOne} or {@link insertMany} must be reimplemented by adapter.
	 * @author gerkin
	 * @param   {string}   table    - Name of the table to insert data in.
	 * @param   {Object[]} entities - Array of hashs representing the entities to insert.
	 * @returns {Promise} Promise resolved once insertion is done. Called with (*{@link DataStoreEntity}[]* entities).
	 */},{key:"insertMany",value:function insertMany(table,entities){var _this5=this;return Promise.mapSeries(entities,function(entity){return _this5.insertOne(table,entity||{});});}// -----
// ### Find
/**
	 * Retrieve a single entity from the data store. This function is a default polyfill if the inheriting adapter does not provide `findOne` itself.
	 *
	 * @summary At least one of {@link findOne} or {@link findMany} must be reimplemented by adapter.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to retrieve data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entity to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is found. Called with (*{@link DataStoreEntity}* `entity`).
	 */},{key:"findOne",value:function findOne(table,queryFind){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};options.limit=1;return this.findMany(table,queryFind,options).then(function(entities){return Promise.resolve(_.first(entities));});}/**
	 * Retrieve several entities from the data store. This function is a default polyfill if the inheriting adapter does not provide `findMany` itself.
	 *
	 * @summary At least one of {@link findOne} or {@link findMany} must be reimplemented by adapter.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to retrieve data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing entities to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is found. Called with (*{@link DataStoreEntity}[]* `entities`).
	 */},{key:"findMany",value:function findMany(table,queryFind){var _this6=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var foundEntities=[];options=this.normalizeOptions(options);var foundCount=0;var origSkip=options.skip;// We are going to loop until we find enough items
var loopFind=function loopFind(found){// If the search returned nothing, then just finish the findMany
if(_.isNil(found)){return Promise.resolve(foundEntities);// Else, if this is a value and not the initial `true`, add it to the list
}else if(found!==true){foundEntities.push(found);}// If we found enough items, return them
if(foundCount===options.limit){return Promise.resolve(foundEntities);}options.skip=origSkip+foundCount;// Next time we'll skip 1 more item
foundCount++;// Do the query & loop
return _this6.findOne(table,queryFind,options).then(loopFind);};return loopFind(true);}// -----
// ### Update
/**
	 * Update a single entity from the data store. This function is a default polyfill if the inheriting adapter does not provide `updateOne` itself.
	 *
	 * @summary At least one of {@link updateOne} or {@link updateMany} must be reimplemented by adapter.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to retrieve data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entity to find.
	 * @param   {Object}                               update       - Object properties to set.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is found. Called with (*{@link DataStoreEntity}* `entity`).
	 */},{key:"updateOne",value:function updateOne(table,queryFind,update){var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};options.limit=1;return this.updateMany(table,queryFind,update,options).then(function(entities){return Promise.resolve(_.first(entities));});}/**
	 * Update several entities from the data store. This function is a default polyfill if the inheriting adapter does not provide `updateMany` itself.
	 *
	 * @summary At least one of {@link updateOne} or {@link updateMany} must be reimplemented by adapter.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to retrieve data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing entities to find.
	 * @param   {Object}                               update       - Object properties to set.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is found. Called with (*{@link DataStoreEntity}[]* `entities`).
	 */},{key:"updateMany",value:function updateMany(table,queryFind,update){var _this7=this;var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var foundEntities=[];var skip=0;// We are going to loop until we find enough items
var loopFind=function loopFind(found){// If the search returned nothing, then just finish the findMany
if(_.isNil(found)){return Promise.resolve(foundEntities);// Else, if this is a value and not the initial `true`, add it to the list
}else if(found!==true){foundEntities.push(found);}// If we found enough items, return them
if(skip===options.limit){return Promise.resolve(foundEntities);}options.skip=skip;// Next time we'll skip 1 more item
skip++;// Do the query & loop
return _this7.updateOne(table,queryFind,update,options).then(loopFind);};return loopFind(true);}// -----
// ### Delete
/**
	 * Delete a single entity from the data store. This function is a default polyfill if the inheriting adapter does not provide `deleteOne` itself.
	 *
	 * @summary At least one of {@link deleteOne} or {@link deleteMany} must be reimplemented by adapter.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to delete data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entities to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is found. Called with (*{@link DataStoreEntity}* `entity`).
	 */},{key:"deleteOne",value:function deleteOne(table,queryFind){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};options.limit=1;return this.deleteMany(table,queryFind,options);}/**
	 * Delete several entities from the data store. This function is a default polyfill if the inheriting adapter does not provide `deleteMany` itself.
	 *
	 * @summary At least one of {@link deleteOne} or {@link deleteMany} must be reimplemented by adapter.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to delete data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entities to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is found. Called with (*{@link DataStoreEntity}[]* `entities`).
	 */},{key:"deleteMany",value:function deleteMany(table,queryFind){var _this8=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var count=0;// We are going to loop until we find enough items
var loopFind=function loopFind(){// First, search for the item.
return _this8.findOne(table,queryFind,options).then(function(found){// If the search returned nothing, then just finish the findMany
if(_.isNil(found)){return Promise.resolve();// Else, if this is a value and not the initial `true`, add it to the list
}// If we found enough items, return them
if(count===options.limit){return Promise.resolve();}// Increase our counter
count++;// Do the deletion & loop
return _this8.deleteOne(table,queryFind,options).then(loopFind);});};return loopFind(true);}}]);return DiasporaAdapter;}(SequentialEvent);module.exports=DiasporaAdapter;},{"../dependencies":9}],4:[function(require,module,exports){(function(global){'use strict';var _require2=require('../dependencies'),_=_require2._,Promise=_require2.Promise;var DiasporaAdapter=require('./baseAdapter.js');var BrowserStorageEntity=require('../dataStoreEntities/browserStorageEntity.js');/**
 * This class is used to use local storage or session storage as a data store. This adapter should be used only by the browser.
 * 
 * @extends Adapters.DiasporaAdapter
 * @memberof Adapters
 */var BrowserStorageDiasporaAdapter=function(_DiasporaAdapter){_inherits(BrowserStorageDiasporaAdapter,_DiasporaAdapter);/**
	 * Create a new instance of local storage adapter.
	 * 
	 * @author gerkin
	 * @param {Object}  config                 - Configuration object.
	 * @param {boolean} [config.session=false] - Set to true to use sessionStorage instead of localStorage.
	 */function BrowserStorageDiasporaAdapter(config){_classCallCheck(this,BrowserStorageDiasporaAdapter);var _this9=_possibleConstructorReturn(this,(BrowserStorageDiasporaAdapter.__proto__||Object.getPrototypeOf(BrowserStorageDiasporaAdapter)).call(this,BrowserStorageEntity));/**
		 * Link to the BrowserStorageEntity.
		 * 
		 * @name classEntity
		 * @type {DataStoreEntities.BrowserStorageEntity}
		 * @memberof Adapters.BrowserStorageDiasporaAdapter
		 * @instance
		 * @author Gerkin
		 */_.defaults(config,{session:false});_this9.state='ready';/**
		 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Storage Storage api} where to store data.
		 * 
		 * @type {Storage}
		 * @author Gerkin
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage localStorage} and {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage sessionStorage} on MDN web docs.
		 * @see {@link Adapters.BrowserStorageDiasporaAdapter}:config.session parameter.
		 */_this9.source=true===config.session?global.sessionStorage:global.localStorage;return _this9;}/**
	 * Create the collection index and call {@link Adapters.DiasporaAdapter#configureCollection}.
	 * 
	 * @author gerkin
	 * @param {string} tableName - Name of the table (usually, model name).
	 * @param {Object} remaps    - Associative hash that links entity field names with data source field names.
	 * @returns {undefined} This function does not return anything.
	 */_createClass(BrowserStorageDiasporaAdapter,[{key:"configureCollection",value:function configureCollection(tableName,remaps){_get(BrowserStorageDiasporaAdapter.prototype.__proto__||Object.getPrototypeOf(BrowserStorageDiasporaAdapter.prototype),"configureCollection",this).call(this,tableName,remaps);this.ensureCollectionExists(tableName);}// -----
// ### Utils
/**
	 * Create a new unique id for this store's entity.
	 * 
	 * @author gerkin
	 * @returns {string} Generated unique id.
	 */},{key:"generateUUID",value:function generateUUID(){var d=new Date().getTime();if(global.performance&&'function'===typeof global.performance.now){d+=global.performance.now();//use high-precision timer if available
}var uuid='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=(d+Math.random()*16)%16|0;d=Math.floor(d/16);return('x'===c?r:r&0x3|0x8).toString(16);});return uuid;}/**
	 * Create the table key if it does not exist.
	 * 
	 * @author gerkin
	 * @param   {string} table - Name of the table.
	 * @returns {string[]} Index of the collection.
	 */},{key:"ensureCollectionExists",value:function ensureCollectionExists(table){var index=this.source.getItem(table);if(_.isNil(index)){index=[];this.source.setItem(table,JSON.stringify(index));}else{index=JSON.parse(index);}return index;}/**
	 * Reduce, offset or sort provided set.
	 * 
	 * @author gerkin
	 * @param   {Object[]} set     - Objects retrieved from memory store.
	 * @param   {Object}   options - Options to apply to the set.
	 * @returns {Object[]} Set with options applied.
	 */},{key:"getItemName",/**
	 * Deduce the item name from table name and item ID.
	 * 
	 * @author gerkin
	 * @param   {string} table - Name of the table to construct name for.
	 * @param   {string} id    - Id of the item to find.
	 * @returns {string} Name of the item.
	 */value:function getItemName(table,id){return table+".id="+id;}// -----
// ### Insert
/**
	 * Insert a single entity in the local storage.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#insertOne}, modified for local storage or session storage interactions.
	 * @author gerkin
	 * @param   {string} table  - Name of the table to insert data in.
	 * @param   {Object} entity - Hash representing the entity to insert.
	 * @returns {Promise} Promise resolved once insertion is done. Called with (*{@link DataStoreEntities.BrowserStorageEntity}* `entity`).
	 */},{key:"insertOne",value:function insertOne(table,entity){entity=_.cloneDeep(entity||{});entity.id=this.generateUUID();this.setIdHash(entity);try{var tableIndex=this.ensureCollectionExists(table);tableIndex.push(entity.id);this.source.setItem(table,JSON.stringify(tableIndex));this.source.setItem(this.getItemName(table,entity.id),JSON.stringify(entity));}catch(error){return Promise.reject(error);}return Promise.resolve(new this.classEntity(entity,this));}/**
	 * Insert several entities in the local storage.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#insertMany}, modified for local storage or session storage interactions.
	 * @author gerkin
	 * @param   {string}   table    - Name of the table to insert data in.
	 * @param   {Object[]} entities - Array of hashes representing entities to insert.
	 * @returns {Promise} Promise resolved once insertion is done. Called with (*{@link DataStoreEntities.BrowserStorageEntity}[]* `entities`).
	 */},{key:"insertMany",value:function insertMany(table,entities){var _this10=this;entities=_.cloneDeep(entities);try{var tableIndex=this.ensureCollectionExists(table);entities=entities.map(function(){var entity=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};entity.id=_this10.generateUUID();_this10.setIdHash(entity);tableIndex.push(entity.id);_this10.source.setItem(_this10.getItemName(table,entity.id),JSON.stringify(entity));return new _this10.classEntity(entity,_this10);});this.source.setItem(table,JSON.stringify(tableIndex));}catch(error){return Promise.reject(error);}return Promise.resolve(entities);}// -----
// ### Find
/**
	 * Find a single local storage entity using its id.
	 * 
	 * @author gerkin
	 * @param   {string} table - Name of the collection to search entity in.
	 * @param   {string} id    - Id of the entity to search.
	 * @returns {DataStoreEntities.BrowserStorageEntity|undefined} Found entity, or undefined if not found.
	 */},{key:"findOneById",value:function findOneById(table,id){var item=this.source.getItem(this.getItemName(table,id));if(!_.isNil(item)){return Promise.resolve(new this.classEntity(JSON.parse(item),this));}return Promise.resolve();}/**
	 * Retrieve a single entity from the local storage.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#findOne}, modified for local storage or session storage interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the model to retrieve data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entity to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is found. Called with (*{@link DataStoreEntities.BrowserStorageEntity}* `entity`).
	 */},{key:"findOne",value:function findOne(table,queryFind){var _this11=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};_.defaults(options,{skip:0});if(!_.isObject(queryFind)){return this.findOneById(table,queryFind);}else if(_.isEqual(_.keys(queryFind),['id'])&&_.isEqual(_.keys(queryFind.id),['$equal'])){return this.findOneById(table,queryFind.id.$equal);}var items=this.ensureCollectionExists(table);var returnedItem=void 0;var matched=0;_.each(items,function(itemId){var item=JSON.parse(_this11.source.getItem(_this11.getItemName(table,itemId)));if(_this11.matchEntity(queryFind,item)){matched++;// If we matched enough items
if(matched>options.skip){returnedItem=item;return false;}}});return Promise.resolve(!_.isNil(returnedItem)?new this.classEntity(returnedItem,this):undefined);}// -----
// ### Update
/**
	 * Update a single entity in the memory.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#updateOne}, modified for local storage or session storage interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to update data in.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entity to find.
	 * @param   {Object}                               update       - Object properties to set.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once update is done. Called with (*{@link DataStoreEntities.BrowserStorageEntity}* `entity`).
	 */},{key:"updateOne",value:function updateOne(table,queryFind,update,options){var _this12=this;_.defaults(options,{skip:0});return this.findOne(table,queryFind,options).then(function(entity){if(_.isNil(entity)){return Promise.resolve();}_this12.applyUpdateEntity(update,entity);try{_this12.source.setItem(_this12.getItemName(table,entity.id),JSON.stringify(entity));return Promise.resolve(entity);}catch(error){return Promise.reject(error);}});}// -----
// ### Delete
/**
	 * Delete a single entity from the local storage.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#deleteOne}, modified for local storage or session storage interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to delete data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entity to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is deleted. Called with (*undefined*).
	 */},{key:"deleteOne",value:function deleteOne(table,queryFind){var _this13=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return this.findOne(table,queryFind,options).then(function(entityToDelete){try{var tableIndex=_this13.ensureCollectionExists(table);_.pull(tableIndex,entityToDelete.id);_this13.source.setItem(table,JSON.stringify(tableIndex));_this13.source.removeItem(_this13.getItemName(table,entityToDelete.id));}catch(error){return Promise.reject(error);}return Promise.resolve();});}/**
	 * Delete several entities from the local storage.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#deleteMany}, modified for local storage or session storage interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to delete data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing entities to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once items are deleted. Called with (*undefined*).
	 */},{key:"deleteMany",value:function deleteMany(table,queryFind){var _this14=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};try{return this.findMany(table,queryFind,options).then(function(entitiesToDelete){var tableIndex=_this14.ensureCollectionExists(table);_.pullAll(tableIndex,_.map(entitiesToDelete,'id'));_this14.source.setItem(table,JSON.stringify(tableIndex));_.forEach(entitiesToDelete,function(entityToDelete){_this14.source.removeItem(_this14.getItemName(table,entityToDelete.id));});return Promise.resolve();});}catch(error){return Promise.reject(error);}}}],[{key:"applyOptionsToSet",value:function applyOptionsToSet(set,options){_.defaults(options,{limit:Infinity,skip:0});set=set.slice(options.skip);if(set.length>options.limit){set=set.slice(0,options.limit);}return set;}}]);return BrowserStorageDiasporaAdapter;}(DiasporaAdapter);module.exports=BrowserStorageDiasporaAdapter;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"../dataStoreEntities/browserStorageEntity.js":7,"../dependencies":9,"./baseAdapter.js":3}],5:[function(require,module,exports){(function(global){'use strict';var _require3=require('../dependencies'),_=_require3._,Promise=_require3.Promise;var DiasporaAdapter=require('./baseAdapter.js');var InMemoryEntity=require('../dataStoreEntities/inMemoryEntity.js');/**
 * This class is used to use the memory as a data store. Every data you insert are stored in an array contained by this class. This adapter can be used by both the browser & Node.JS.
 * 
 * @extends Adapters.DiasporaAdapter
 * @memberof Adapters
 */var InMemoryDiasporaAdapter=function(_DiasporaAdapter2){_inherits(InMemoryDiasporaAdapter,_DiasporaAdapter2);/**
	 * Create a new instance of in memory adapter.
	 * 
	 * @author gerkin
	 */function InMemoryDiasporaAdapter(){_classCallCheck(this,InMemoryDiasporaAdapter);var _this15=_possibleConstructorReturn(this,(InMemoryDiasporaAdapter.__proto__||Object.getPrototypeOf(InMemoryDiasporaAdapter)).call(this,InMemoryEntity));/**
		 * Link to the InMemoryEntity.
		 * 
		 * @name classEntity
		 * @type {DataStoreEntities.InMemoryEntity}
		 * @memberof Adapters.InMemoryDiasporaAdapter
		 * @instance
		 * @author Gerkin
		 */_this15.state='ready';/**
		 * Plain old javascript object used as data store.
		 * 
		 * @author Gerkin
		 */_this15.store={};return _this15;}/**
	 * Create the data store and call {@link Adapters.DiasporaAdapter#configureCollection}.
	 * 
	 * @author gerkin
	 * @param   {string} tableName - Name of the table (usually, model name).
	 * @param   {Object} remaps    - Associative hash that links entity field names with data source field names.
	 * @returns {undefined} This function does not return anything.
	 */_createClass(InMemoryDiasporaAdapter,[{key:"configureCollection",value:function configureCollection(tableName,remaps){_get(InMemoryDiasporaAdapter.prototype.__proto__||Object.getPrototypeOf(InMemoryDiasporaAdapter.prototype),"configureCollection",this).call(this,tableName,remaps);this.ensureCollectionExists(tableName);}// -----
// ### Utils
/**
	 * Create a new unique id for this store's entity.
	 * 
	 * @author gerkin
	 * @returns {string} Generated unique id.
	 */},{key:"generateUUID",value:function generateUUID(){var d=new Date().getTime();// Use high-precision timer if available
if(global.performance&&'function'===typeof global.performance.now){d+=global.performance.now();}var uuid='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=(d+Math.random()*16)%16|0;d=Math.floor(d/16);return('x'===c?r:r&0x3|0x8).toString(16);});return uuid;}/**
	 * Get or create the store hash.
	 * 
	 * @author gerkin
	 * @param   {string} table - Name of the table.
	 * @returns {DataStoreTable} In memory table to use.
	 */},{key:"ensureCollectionExists",value:function ensureCollectionExists(table){if(this.store.hasOwnProperty(table)){return this.store[table];}else{return this.store[table]={items:[]};}}/**
	 * Reduce, offset or sort provided set.
	 * 
	 * @author gerkin
	 * @param   {Object[]} set     - Objects retrieved from memory store.
	 * @param   {Object}   options - Options to apply to the set.
	 * @returns {Object[]} Set with options applied.
	 */},{key:"insertOne",// -----
// ### Insert
/**
	 * Insert a single entity in the memory store.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#insertOne}, modified for in-memory interactions.
	 * @author gerkin
	 * @param   {string} table  - Name of the table to insert data in.
	 * @param   {Object} entity - Hash representing the entity to insert.
	 * @returns {Promise} Promise resolved once insertion is done. Called with (*{@link InMemoryEntity}* `entity`).
	 */value:function insertOne(table,entity){entity=_.cloneDeep(entity);var storeTable=this.ensureCollectionExists(table);entity.id=this.generateUUID();this.setIdHash(entity);storeTable.items.push(entity);return Promise.resolve(new this.classEntity(entity,this));}// -----
// ### Find
/**
	 * Retrieve a single entity from the memory.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#findOne}, modified for in-memory interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to retrieve data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entity to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is found. Called with (*{@link InMemoryEntity}* `entity`).
	 */},{key:"findOne",value:function findOne(table,queryFind){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var storeTable=this.ensureCollectionExists(table);var matches=_.filter(storeTable.items,_.partial(this.matchEntity,queryFind));var reducedMatches=this.constructor.applyOptionsToSet(matches,options);return Promise.resolve(reducedMatches.length>0?new this.classEntity(_.first(reducedMatches),this):undefined);}/**
	 * Retrieve several entities from the memory.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#findMany}, modified for in-memory interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to retrieve data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing entities to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once items are found. Called with (*{@link InMemoryEntity}[]* `entities`).
	 */},{key:"findMany",value:function findMany(table,queryFind){var _this16=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var storeTable=this.ensureCollectionExists(table);var matches=_.filter(storeTable.items,_.partial(this.matchEntity,queryFind));var reducedMatches=this.constructor.applyOptionsToSet(matches,options);return Promise.resolve(_.map(reducedMatches,function(entity){return new _this16.classEntity(entity,_this16);}));}// -----
// ### Update
/**
	 * Update a single entity in the memory.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#updateOne}, modified for in-memory interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to update data in.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entity to find.
	 * @param   {Object}                               update       - Object properties to set.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once update is done. Called with (*{@link InMemoryEntity}* `entity`).
	 */},{key:"updateOne",value:function updateOne(table,queryFind,update){var _this17=this;var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};return this.findOne(table,queryFind,options).then(function(found){if(!_.isNil(found)){var storeTable=_this17.ensureCollectionExists(table);var match=_.find(storeTable.items,{id:found.id});_this17.applyUpdateEntity(update,match);return Promise.resolve(new _this17.classEntity(match,_this17));}else{return Promise.resolve();}});}/**
	 * Update several entities in the memory.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#updateMany}, modified for in-memory interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to update data in.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing entities to find.
	 * @param   {Object}                               update       - Object properties to set.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once update is done. Called with (*{@link InMemoryEntity}[]* `entities`).
	 */},{key:"updateMany",value:function updateMany(table,queryFind,update){var _this18=this;var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};return this.findMany(table,queryFind,options).then(function(found){if(!_.isNil(found)&&found.length>0){var storeTable=_this18.ensureCollectionExists(table);var foundIds=_.map(found,'id');var matches=_.filter(storeTable.items,function(item){return-1!==foundIds.indexOf(item.id);});return Promise.resolve(_.map(matches,function(item){_this18.applyUpdateEntity(update,item);return new _this18.classEntity(item,_this18);}));}else{return Promise.resolve();}});}// -----
// ### Delete
/**
	 * Delete a single entity from the memory.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#deleteOne}, modified for in-memory interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to delete data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing the entity to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once item is found. Called with (*undefined*).
	 */},{key:"deleteOne",value:function deleteOne(table,queryFind){var _this19=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var storeTable=this.ensureCollectionExists(table);return this.findOne(table,queryFind,options).then(function(entityToDelete){storeTable.items=_.reject(storeTable.items,function(entity){return entity.id===entityToDelete.idHash[_this19.name];});return Promise.resolve();});}/**
	 * Delete several entities from the memory.
	 * 
	 * @summary This reimplements {@link Adapters.DiasporaAdapter#deleteMany}, modified for in-memory interactions.
	 * @author gerkin
	 * @param   {string}                               table        - Name of the table to delete data from.
	 * @param   {QueryLanguage#SelectQueryOrCondition} queryFind    - Hash representing entities to find.
	 * @param   {QueryLanguage#QueryOptions}           [options={}] - Hash of options.
	 * @returns {Promise} Promise resolved once items are deleted. Called with (*undefined*).
	 */},{key:"deleteMany",value:function deleteMany(table,queryFind){var _this20=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var storeTable=this.ensureCollectionExists(table);return this.findMany(table,queryFind,options).then(function(entitiesToDelete){var entitiesIds=_.map(entitiesToDelete,function(entity){return _.get(entity,"idHash."+_this20.name);});storeTable.items=_.reject(storeTable.items,function(entity){return _.includes(entitiesIds,entity.id);});return Promise.resolve();});}}],[{key:"applyOptionsToSet",value:function applyOptionsToSet(set,options){_.defaults(options,{limit:Infinity,skip:0});set=set.slice(options.skip);if(set.length>options.limit){set=set.slice(0,options.limit);}return set;}}]);return InMemoryDiasporaAdapter;}(DiasporaAdapter);module.exports=InMemoryDiasporaAdapter;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"../dataStoreEntities/inMemoryEntity.js":8,"../dependencies":9,"./baseAdapter.js":3}],6:[function(require,module,exports){'use strict';var _require4=require('../dependencies'),_=_require4._;/**
 * @namespace DataStoreEntities
 *//**
 * DataStoreEntity is the sub-entity reflecting a single source content. Values may differ from the Entity itself.
 * @memberof DataStoreEntities
 */var DataStoreEntity=function(){/**
	 * Construct a new data source entity with specified content & parent.
	 * 
	 * @author gerkin
	 * @param {Object}                   entity     - Object containing attributes to inject in this entity. The only **reserved key** is `dataSource`.
	 * @param {Adapters.DiasporaAdapter} dataSource - Adapter that spawn this entity.
	 */function DataStoreEntity(entity,dataSource){_classCallCheck(this,DataStoreEntity);if(_.isNil(entity)){return undefined;}if(_.isNil(dataSource)){throw new TypeError("Expect 2nd argument to be the parent of this entity, have \""+dataSource+"\"");}Object.defineProperties(this,{dataSource:{value:dataSource,enumerable:false,configurable:false}});_.assign(this,entity);}/**
	 * Returns a plain object corresponding to this entity attributes.
	 * 
	 * @author gerkin
	 * @returns {Object} Plain object representing this entity.
	 */_createClass(DataStoreEntity,[{key:"toObject",value:function toObject(){return _.omit(this,['dataSource','id']);}}]);return DataStoreEntity;}();module.exports=DataStoreEntity;},{"../dependencies":9}],7:[function(require,module,exports){'use strict';var DataStoreEntity=require('./baseEntity.js');/**
 * Entity stored in {@link Adapters.BrowserStorageDiasporaAdapter the local storage adapter}.
 * 
 * @extends DataStoreEntities.DataStoreEntity
 * @memberof DataStoreEntities
 */var BrowserStorageEntity=function(_DataStoreEntity){_inherits(BrowserStorageEntity,_DataStoreEntity);/**
	 * Construct a local storage entity with specified content & parent.
	 * 
	 * @author gerkin
	 * @param {Object}                   entity     - Object containing attributes to inject in this entity. The only **reserved key** is `dataSource`.
	 * @param {Adapters.DiasporaAdapter} dataSource - Adapter that spawn this entity.
	 */function BrowserStorageEntity(entity,dataSource){_classCallCheck(this,BrowserStorageEntity);return _possibleConstructorReturn(this,(BrowserStorageEntity.__proto__||Object.getPrototypeOf(BrowserStorageEntity)).call(this,entity,dataSource));}return BrowserStorageEntity;}(DataStoreEntity);module.exports=BrowserStorageEntity;},{"./baseEntity.js":6}],8:[function(require,module,exports){'use strict';var DataStoreEntity=require('./baseEntity.js');/**
 * Entity stored in {@link Adapters.InMemoryDiasporaAdapter the in-memory adapter}.
 * @extends DataStoreEntities.DataStoreEntity
 * @memberof DataStoreEntities
 */var InMemoryEntity=function(_DataStoreEntity2){_inherits(InMemoryEntity,_DataStoreEntity2);/**
	 * Construct a in memory entity with specified content & parent.
	 * 
	 * @author gerkin
	 * @param {Object}                   entity     - Object containing attributes to inject in this entity. The only **reserved key** is `dataSource`.
	 * @param {Adapters.DiasporaAdapter} dataSource - Adapter that spawn this entity.
	 */function InMemoryEntity(entity,dataSource){_classCallCheck(this,InMemoryEntity);return _possibleConstructorReturn(this,(InMemoryEntity.__proto__||Object.getPrototypeOf(InMemoryEntity)).call(this,entity,dataSource));}return InMemoryEntity;}(DataStoreEntity);module.exports=InMemoryEntity;},{"./baseEntity.js":6}],9:[function(require,module,exports){(function(global){'use strict';module.exports={_:function(){return global._||require('lodash');}(),SequentialEvent:function(){return global.SequentialEvent||require('sequential-event');}(),Promise:function(){return global.Promise&&global.Promise.version?global.Promise:require('bluebird');}()};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"bluebird":18,"lodash":20,"sequential-event":22}],10:[function(require,module,exports){(function(process){'use strict';var dependencies=require('./dependencies');var _=dependencies._,Promise=dependencies.Promise;var logger=function(){if(!process.browser){var winston=require('winston');var log=winston.createLogger({level:'silly',format:winston.format.json(),transports:[//
// - Write to all logs with level `info` and below to `combined.log`
// - Write all logs error (and below) to `error.log`.
//
]});//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if(process.env.NODE_ENV!=='production'){log.add(new winston.transports.Console({format:winston.format.simple()}));}return log;}else{return console;}}();var adapters={};var dataSources={};var models={};var wrapDataSourceAction=function wrapDataSourceAction(callback,queryType,adapter){return function(table){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}// Filter our results
var filterResults=function filterResults(entity){// Remap fields
entity=adapter.remapFields(table,entity,true);// Force results to be class instances
if(!(entity instanceof adapter.classEntity)&&!_.isNil(entity)){return new adapter.classEntity(entity,adapter);}return entity;};// Transform arguments for find, update & delete
var optIndex=false;var upd=false;if(['find','delete'].indexOf(queryType.query)>=0){// For find & delete, options are 3rd argument (so 2nd item in `args`)
optIndex=1;}else if('update'===queryType.query){// For update, options are 4th argument (so 3nd item in `args`), and `upd` flag is toggled on.
optIndex=2;upd=true;}try{//console.log('Before query transformed', args[0]);
if(false!==optIndex){// Options to canonical
args[optIndex]=adapter.normalizeOptions(args[optIndex]);// Remap input objects
if(true===args[optIndex].remapInput){args[0]=adapter.remapFields(table,args[0],false);if(true===upd){args[1]=adapter.remapFields(table,args[1],false);}}// Query search to cannonical
args[0]=adapter.normalizeQuery(args[0],args[optIndex]);args[optIndex].remapInput=false;}else if('insert'===queryType.query){// If inserting, then, we'll need to know if we are inserting *several* entities or a *single* one.
if('many'===queryType.number){// If inserting *several* entities, map the array to remap each entity objects...
args[0]=_.map(args[0],function(insertion){return adapter.remapFields(table,insertion,false);});}else{// ... or we are inserting a *single* one. We still need to remap entity.
args[0]=adapter.remapFields(table,args[0],false);}}//console.log('Query transformed:', args[0]);
}catch(err){return Promise.reject(err);}// Hook after promise resolution
var queryPromise=callback.call.apply(callback,[adapter,table].concat(args));return queryPromise.then(function(results){if(_.isArrayLike(results)){results=_.map(results,filterResults);}else if(!_.isNil(results)){results=filterResults(results);}return Promise.resolve(results);});};};/**
 * Diaspora main namespace
 * @namespace Diaspora
 * @public
 * @author gerkin
 */var Diaspora={/**
	 * Check if the value matches the field description provided, thus verify if it is valid.
	 *
	 * @author gerkin
	 * @param   {Object}                               entity    - Entity to check.
	 * @param   {module:ModelExtension.ModelPrototype} modelDesc - Model description.
	 * @returns {Error[]} Array of errors.
	 */check:function check(entity){var _this23=this;var modelDesc=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};// Apply method `checkField` on each field described
var checkResults=_(modelDesc).mapValues(function(fieldDesc,field){return _this23.checkField.call(_this23,entity[field],fieldDesc,_.concat([],[field]));}).omitBy(_.isEmpty).value();return checkResults;},/**
	 * Check if the value matches the field description provided, thus verify if it is valid.
	 *
	 * @author gerkin
	 * @param   {Any}                                   value     - Value to check.
	 * @param   {module:ModelExtension.FieldDescriptor} fieldDesc - Description of the field to check with.
	 * @param   {String[]}                              keys      - Array of keys from highest ancestor to this property.
	 * @returns {Object} Hash describing errors.
	 */checkField:function checkField(value,fieldDesc,keys){var _this24=this;if(!_.isObject(fieldDesc)){return;}_.defaults(fieldDesc,{required:false});var error={};// It the field has a `validate` property, try to use it
if(fieldDesc.validate){if(!fieldDesc.validate.call(this,value,fieldDesc)){error.validate=keys.join('.')+" custom validation failed";}}// Check the type and the required status
if(!_.isNil(fieldDesc.type)&&!_.isNil(fieldDesc.model)){error.spec=keys.join('.')+" spec can't have both a type and a model";// Apply the `required` modifier
}else if(true===fieldDesc.required&&_.isNil(value)){error.required=keys.join('.')+" is a required property of type \""+fieldDesc.type+"\"";}else if(!_.isNil(value)){if(_.isString(fieldDesc.type)){switch(fieldDesc.type){case'string':{if(!_.isString(value)){error.type=keys.join('.')+" expected to be a \""+fieldDesc.type+"\"";}}break;case'integer':{if(!_.isInteger(value)){error.type=keys.join('.')+" expected to be a \""+fieldDesc.type+"\"";}}break;case'float':{if(!_.isNumber(value)){error.type=keys.join('.')+" expected to be a \""+fieldDesc.type+"\"";}}break;case'date':{if(!_.isDate(value)){error.type=keys.join('.')+" expected to be a \""+fieldDesc.type+"\"";}}break;case'object':{if(!_.isObject(value)){error.type=keys.join('.')+" expected to be a \""+fieldDesc.type+"\"";}else{var deepTest=_.isObject(fieldDesc.attributes)?_(value).mapValues(function(propVal,propName){return _this24.checkField(propVal,fieldDesc.attributes[propName],_.concat(keys,[propName]));}).omitBy(_.isEmpty).value():{};if(!_.isEmpty(deepTest)){error.children=deepTest;}}}break;case'array':{if(!_.isArray(value)){error.type=keys.join('.')+" expected to be a \""+fieldDesc.type+"\"";}else{var _deepTest=_.isObject(fieldDesc.of)?_(value).map(function(propVal,propName){if(_.isArrayLike(fieldDesc.of)){var subErrors=_(fieldDesc.of).map(function(desc){return _this24.checkField(propVal,desc,_.concat(keys,[propName]));});if(!_.find(subErrors,function(v){return 0===v.length;})){return subErrors;}}else{return _this24.checkField(propVal,fieldDesc.of,_.concat(keys,[propName]));}}).omitBy(_.isEmpty).value():{};if(!_.isEmpty(_deepTest)){error.children=_deepTest;}}}break;case'any':{if(!_.stubTrue(value)){error.type=keys.join('.')+" expected to be assigned with any type";}}break;default:{error.type=keys.join('.')+" requires to be unhandled type \""+fieldDesc.type+"\"";}break;}}else{error.spec=keys.join('.')+" spec \"type\" must be a string";}}// Check enum values
if(!_.isNil(fieldDesc.enum)){var result=_.some(fieldDesc.enum,function(enumVal){if(enumVal instanceof RegExp){return null!==value.match(enumVal);}else{return value===enumVal;}});if(false===result){error.enum=keys.join('.')+" expected to have one of enumerated values \""+JSON.stringify(fieldDesc.enum)+"\"";}}if(!_.isEmpty(error)){error.value=value;return error;}else{return undefined;}},/**
	 * Set default values if required.
	 *
	 * @author gerkin
	 * @param   {Object}         entity    - Entity to set defaults in.
	 * @param   {ModelPrototype} modelDesc - Model description.
	 * @returns {Object} Entity merged with default values.
	 */default:function _default(entity,modelDesc){var _this25=this;// Apply method `defaultField` on each field described
return _.defaults(entity,_.mapValues(modelDesc,function(fieldDesc,field){return _this25.defaultField(entity[field],fieldDesc);}));},/**
	 * Set the default on a single field according to its description.
	 *
	 * @author gerkin
	 * @param   {Any}             value     - Value to default.
	 * @param   {FieldDescriptor} fieldDesc - Description of the field to default.
	 * @returns {Any} Defaulted value.
	 */defaultField:function defaultField(value,fieldDesc){var out=void 0;if(!_.isUndefined(value)){out=value;}else{out=_.isFunction(fieldDesc.default)?fieldDesc.default():fieldDesc.default;}if('object'===fieldDesc.type&&_.isObject(fieldDesc.attributes)&&_.keys(fieldDesc.attributes).length>0&&!_.isNil(out)){return this.default(out,fieldDesc.attributes);}else{return out;}},/**
	 * Create a data source (usually, a database connection) that may be used by models.
	 *
	 * @author gerkin
	 * @throws  {Error} Thrown if provided `adapter` label does not correspond to any adapter registered.
	 * @param   {string} adapterLabel - Label of the adapter used to create the data source.
	 * @param   {Object} config       - Configuration hash. This configuration hash depends on the adapter we want to use.
	 * @returns {Adapters.DiasporaAdapter} New adapter spawned.
	 */createDataSource:function createDataSource(adapterLabel,config){if(!adapters.hasOwnProperty(adapterLabel)){throw new Error("Unknown adapter \""+adapterLabel+"\". Available currently are "+Object.keys(adapters).join(', '));}var baseAdapter=new adapters[adapterLabel](config);var newDataSource=new Proxy(baseAdapter,{get:function get(target,key){// If this is an adapter action method, wrap it with filters. Our method keys are only string, not tags
if(_.isString(key)){var method=key.match(/^(find|update|insert|delete)(Many|One)$/);if(null!==method){method[2]=method[2].toLowerCase();method=_.mapKeys(method.slice(0,3),function(val,key){return['full','query','number'][key];});return wrapDataSourceAction(target[key],method,target);}}return target[key];}});return newDataSource;},/**
	 * Stores the data source with provided label.
	 *
	 * @author gerkin
	 * @throws  {Error} Error is thrown if parameters are incorrect or the name is already used or `dataSource` is not an adapter.
	 * @param   {string}          name       - Name associated with this datasource.
	 * @param   {DiasporaAdapter} dataSource - Datasource itself.
	 * @returns {undefined} This function does not return anything.
	 */registerDataSource:function registerDataSource(name,dataSource){if(!_.isString(name)&&name.length>0){throw new Error("DataSource name must be a non empty string, had \""+name+"\"");}if(dataSources.hasOwnProperty(name)){throw new Error("DataSource name already used, had \""+name+"\"");}if(!(dataSource instanceof Diaspora.components.DiasporaAdapter)){throw new Error('DataSource must be an instance inheriting "DiasporaAdapter"');}dataSource.name=name;_.merge(dataSources,_defineProperty({},name,dataSource));},/**
	 * Create a data source (usually, a database connection) that may be used by models.
	 *
	 * @author gerkin
	 * @throws  {Error} Thrown if provided `adapter` label does not correspond to any adapter registered.
	 * @param   {string} name         - Name associated with this datasource.
	 * @param   {string} adapterLabel - Label of the adapter used to create the data source.
	 * @param   {Object} config       - Configuration hash. This configuration hash depends on the adapter we want to use.
	 * @returns {Adapters.DiasporaAdapter} New adapter spawned.
	 */createNamedDataSource:function createNamedDataSource(name,adapterLabel,config){var dataSource=Diaspora.createDataSource(adapterLabel,config);Diaspora.registerDataSource(name,dataSource);},/**
	 * Create a new Model with provided description.
	 *
	 * @author gerkin
	 * @throws  {Error} Thrown if parameters are incorrect.
	 * @param   {string} name      - Name associated with this datasource.
	 * @param   {Object} modelDesc - Description of the model to define.
	 * @returns {Model} Model created.
	 */declareModel:function declareModel(name,modelDesc){if(!_.isString(name)&&name.length>0){throw new Error("DataSource name must be a non empty string, had \""+name+"\"");}if(!_.isObject(modelDesc)){throw new Error('"modelDesc" must be an object');}var model=new Diaspora.components.Model(name,modelDesc);_.assign(models,_defineProperty({},name,model));return model;},/**
	 * Register a new adapter and make it available to use by models.
	 *
	 * @author gerkin
	 * @throws  {Error} Thrown if an adapter already exists with same label.
	 * @throws  {TypeError} Thrown if adapter does not extends {@link Adapters.DiasporaAdapter}.
	 * @param   {string}                   label   - Label of the adapter to register.
	 * @param   {Adapters.DiasporaAdapter} adapter - The adapter to register.
	 * @returns {undefined} This function does not return anything.
	 */registerAdapter:function registerAdapter(label,adapter){if(adapters[label]){throw new Error("Adapter with label \""+label+"\" already exists.");}// Check inheritance of adapter
if(!(adapter.prototype instanceof Diaspora.components.DiasporaAdapter)){throw new TypeError("Trying to register an adapter with label \""+label+"\", but it does not extends DiasporaAdapter.");}adapters[label]=adapter;},/**
	 * Hash containing all available models.
	 *
	 * @type {Object}
	 * @property {Model} * - Model associated with that name.
	 * @memberof Diaspora
	 * @public
	 * @author gerkin
	 * @see Use {@link Diaspora.declareModel} to add models.
	 */models:models,/**
	 * Hash containing all available data sources.
	 *
	 * @type {Object}
	 * @property {Adapters.DiasporaAdapter} * - Instances of adapters declared.
	 * @memberof Diaspora
	 * @private
	 * @author gerkin
	 * @see Use {@link Diaspora.createNamedDataSource} or {@link Diaspora.registerDataSource} to make data sources available for models.
	 */dataSources:dataSources,/**
	 * Hash containing all available adapters. The only universal adapter is `inMemory`.
	 *
	 * @type {Object}
	 * @property {Adapters.DiasporaAdapter}        *        - Adapter constructor. Those constructors must be subclasses of DiasporaAdapter.
	 * @property {Adapters.InMemorDiasporaAdapter} inMemory - InMemoryDiasporaAdapter constructor.
	 * @memberof Diaspora
	 * @private
	 * @author gerkin
	 * @see Use {@link Diaspora.registerAdapter} to add adapters.
	 */adapters:adapters,/**
	 * Dependencies of Diaspora.
	 *
	 * @type {Object}
	 * @property {Bluebird}        Promise          - Bluebird lib.
	 * @property {Lodash}          _                - Lodash lib.
	 * @property {SequentialEvent} sequential-event - SequentialEvent lib.
	 * @memberof Diaspora
	 * @private
	 * @author gerkin
	 */dependencies:dependencies,/**
	 * Logger used by Diaspora and its adapters. You can use this property to configure winston. On brower environment, this is replaced by a reference to global {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/console Console}.
	 *
	 * @type {Winston|Console}
	 * @memberof Diaspora
	 * @public
	 * @author gerkin
	 */logger:logger};module.exports=Diaspora;// Load components after export, so requires of Diaspora returns a complete object
/**
 * Hash of components exposed by Diaspora.
 *
 * @type {Object}
 * @memberof Diaspora
 * @private
 * @author gerkin
 */Diaspora.components={Entity:require('./entityFactory')(null,{},null),Set:require('./set'),Model:require('./model'),Errors:{ValidationError:require('./errors/validationError'),EntityStateError:require('./errors/entityStateError')},DiasporaAdapter:require('./adapters/baseAdapter'),DataStoreEntity:require('./dataStoreEntities/baseEntity')};// Register available built-in adapters
Diaspora.registerAdapter('inMemory',require('./adapters/inMemoryAdapter'));// Register browserStorage only if in browser
if(process.browser){Diaspora.registerAdapter('browserStorage',require('./adapters/browserStorageAdapter'));}}).call(this,require('_process'));},{"./adapters/baseAdapter":3,"./adapters/browserStorageAdapter":4,"./adapters/inMemoryAdapter":5,"./dataStoreEntities/baseEntity":6,"./dependencies":9,"./entityFactory":11,"./errors/entityStateError":12,"./errors/validationError":14,"./model":15,"./set":16,"_process":21,"winston":undefined}],11:[function(require,module,exports){'use strict';var _require5=require('./dependencies'),_=_require5._,Promise=_require5.Promise,SequentialEvent=_require5.SequentialEvent;var Diaspora=require('./diaspora');var DataStoreEntity=require('./dataStoreEntities/baseEntity');var ValidationError=require('./errors/validationError');var EntityStateError=require('./errors/entityStateError');var Utils=require('./utils');/**
 * @namespace EntityFactory
 *//**
 * This factory function generate a new class constructor, prepared for a specific model.
 * 
 * @memberof EntityFactory
 * @param   {string}           name       - Name of this model.
 * @param   {ModelDescription} modelDesc  - Model configuration that generated the associated `model`.
 * @param   {Model}            model      - Model that will spawn entities.
 * @returns {Entity} Entity constructor to use with this model.
 */function EntityFactory(name,modelDesc,model){var modelAttrsKeys=_.keys(modelDesc.attributes);/**
	 * The entity is the class you use to manage a single document in all data sources managed by your model.
	 * > Note that this class is proxied: you may try to access to undocumented class properties to get entity's data attributes
	 * @summary An entity is a document in the population of all your datas of the same type
	 * @extends SequentialEvent
	 * @memberof EntityFactory
	 */var Entity=function(_SequentialEvent2){_inherits(Entity,_SequentialEvent2);/**
		 * Create a new entity.
		 * 
		 * @author gerkin
		 * @param {Object|DataStoreEntities.DataStoreEntity} [source={}] - Hash with properties to copy on the new object.  
		 *        If provided object inherits DataStoreEntity, the constructed entity is built in `sync` state.
		 */function Entity(){var _ret;var source=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Entity);// Stores the object state
var _this26=_possibleConstructorReturn(this,(Entity.__proto__||Object.getPrototypeOf(Entity)).call(this));var state='orphan';var lastDataSource=null;var dataSources=Object.seal(_.mapValues(model.dataSources,function(){return undefined;}));var entityPrototype={/**
				 * Hash that links each data source with its name. This object is prepared with keys from model sources, and sealed.
				 * 
				 * @name dataSources
				 * @readonly
				 * @type {Object}
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @author gerkin
				 */dataSources:{value:dataSources},/**
				 * Returns a copy of this entity attributes.
				 * 
				 * @method toObject
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @author gerkin
				 * @returns {Object} Attributes of this entity.
				 */toObject:function toObject(){return _.omit(attributes,entityPrototypeProperties);},/**
				 * Save this entity in specified data source.
				 * 
				 * @method persist
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @fires EntityFactory.Entity#beforeUpdate
				 * @fires EntityFactory.Entity#afterUpdate
				 * @author gerkin
				 * @param   {string}  sourceName                 - Name of the data source to persist entity in.
				 * @param   {Object}  [options]                  - Hash of options for this query. You should not use this parameter yourself: Diaspora uses it internally.
				 * @param   {boolean} [options.skipEvents=false] - If true, won't trigger events `beforeUpdate` and `afterUpdate`.
				 * @returns {Promise} Promise resolved once entity is saved. Resolved with `this`.
				 */persist:function persist(sourceName){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_.defaults(options,{skipEvents:false});var dataSource=_this26.constructor.model.getDataSource(sourceName);var beforeState=state;state='syncing';// Args are always the same.
var eventsArgs=[sourceName];var promise=void 0;// Get suffix. If entity was orphan, we are creating. Otherwise, we are updating
var suffix='orphan'===beforeState?'Create':'Update';if(options.skipEvents){promise=Promise.resolve();}else{promise=_this26.emit.apply(_this26,['beforePersist'].concat(eventsArgs)).then(function(){return _this26.emit.apply(_this26,['beforeValidate'].concat(eventsArgs));}).then(function(){_this26.validate();return _this26.emit.apply(_this26,['afterValidate'].concat(eventsArgs));}).then(function(){return _this26.emit.apply(_this26,["beforePersist"+suffix].concat(eventsArgs));});}return promise.then(function(){lastDataSource=dataSource.name;// Depending on state, we are going to perform a different operation
if('orphan'===beforeState){return dataSource.insertOne(_this26.table(sourceName),_this26.toObject());}else{return dataSource.updateOne(_this26.table(sourceName),_this26.uidQuery(dataSource),_this26.toObject());}}).then(function(dataStoreEntity){if(options.skipEvents){return Promise.resolve(dataStoreEntity);}else{return _this26.emit.apply(_this26,["afterPersist"+suffix].concat(eventsArgs)).then(function(){return _this26.emit.apply(_this26,['afterPersist'].concat(eventsArgs));}).then(function(){return Promise.resolve(dataStoreEntity);});}}).then(function(dataStoreEntity){state='sync';entityDefined.dataSources[dataSource.name]=dataStoreEntity;attributes=dataStoreEntity.toObject();return Promise.resolve(entityProxied);});},/**
				 * Reload this entity from specified data source.
				 * 
				 * @method fetch
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @fires EntityFactory.Entity#beforeFind
				 * @fires EntityFactory.Entity#afterFind
				 * @author gerkin
				 * @param   {string}  sourceName                 - Name of the data source to fetch entity from.
				 * @param   {Object}  [options]                  - Hash of options for this query. You should not use this parameter yourself: Diaspora uses it internally.
				 * @param   {boolean} [options.skipEvents=false] - If true, won't trigger events `beforeFind` and `afterFind`.
				 * @returns {Promise} Promise resolved once entity is reloaded. Resolved with `this`.
				 */fetch:function fetch(sourceName){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_.defaults(options,{skipEvents:false});var dataSource=_this26.constructor.model.getDataSource(sourceName);var beforeState=state;state='syncing';var promise=void 0;if(options.skipEvents){promise=Promise.resolve();}else{promise=_this26.emit('beforeFetch',sourceName);}return promise.then(function(){// Depending on state, we are going to perform a different operation
if('orphan'===beforeState){return Promise.reject(new EntityStateError('Can\'t fetch an orphan entity.'));}else{lastDataSource=dataSource.name;return dataSource.findOne(_this26.table(sourceName),_this26.uidQuery(dataSource));}}).then(function(dataStoreEntity){state='sync';entityDefined.dataSources[dataSource.name]=dataStoreEntity;attributes=dataStoreEntity.toObject();if(options.skipEvents){return Promise.resolve(entityProxied);}else{return _this26.emit('afterFetch',sourceName).then(function(){return Promise.resolve(entityProxied);});}});},/**
				 * Delete this entity from the specified data source.
				 * 
				 * @method destroy
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @fires EntityFactory.Entity#beforeDelete
				 * @fires EntityFactory.Entity#afterDelete
				 * @author gerkin
				 * @param   {string}  sourceName                 - Name of the data source to delete entity from.
				 * @param   {Object}  [options]                  - Hash of options for this query. You should not use this parameter yourself: Diaspora uses it internally.
				 * @param   {boolean} [options.skipEvents=false] - If true, won't trigger events `beforeDelete` and `afterDelete`.
				 * @returns {Promise} Promise resolved once entity is destroyed. Resolved with `this`.
				 */destroy:function destroy(sourceName){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_.defaults(options,{skipEvents:false});var dataSource=_this26.constructor.model.getDataSource(sourceName);var beforeState=state;state='syncing';var promise=void 0;if(options.skipEvents){promise=Promise.resolve();}else{promise=_this26.emit('beforeDestroy',sourceName);}return promise.then(function(){if('orphan'===beforeState){return Promise.reject(new EntityStateError('Can\'t fetch an orphan entity.'));}else{lastDataSource=dataSource.name;return dataSource.deleteOne(_this26.table(sourceName),_this26.uidQuery(dataSource));}}).then(function(){// If this was our only data source, then go back to orphan state
if(0===_.without(model.dataSources,dataSource.name).length){state='orphan';}else{state='sync';delete attributes.idHash[dataSource.name];}entityDefined.dataSources[dataSource.name]=undefined;if(options.skipEvents){return Promise.resolve(entityProxied);}else{return _this26.emit('afterDestroy',sourceName).then(function(){return Promise.resolve(entityProxied);});}});},/**
				 * Get entity's current state.
				 * 
				 * @name dataSources
				 * @readonly
				 * @type {Entity.State}
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @author gerkin
				 */state:{get:function get(){return state;}},/**
				 * Get entity's last data source.
				 * 
				 * @name dataSources
				 * @readonly
				 * @type {null|string}
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @author gerkin
				 */lastDataSource:{get:function get(){return lastDataSource;}},/**
				 * Generate the query to get this unique entity in the desired data source.
				 * 
				 * @method uidQuery
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @author gerkin
				 * @param   {Adapters.DiasporaAdapter} dataSource - Name of the data source to get query for.
				 * @returns {Object} Query to find this entity.
				 */uidQuery:function uidQuery(dataSource){return{id:attributes.idHash[dataSource.name]};},/**
				 * Return the table of this entity in the specified data source.
				 * 
				 * @method table
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @author gerkin
				 * @returns {string} Name of the table.
				 */table:function table()/*sourceName*/{// Will be used later
return name;},/**
				 * Check if the entity matches model description.
				 * 
				 * @memberof EntityFactory.Entity
				 * @instance
				 * @author gerkin
				 * @throws ValidationError Thrown if validation failed. This breaks event chain and prevent persistance.
				 * @returns {undefined} This function does not return anything.
				 * @see Diaspora.check
				 */validate:function validate(){var validationErrors=Diaspora.check(attributes,modelDesc.attributes);if(!_.isEmpty(validationErrors)){throw new ValidationError(validationErrors,'Validation failed');}}};var entityPrototypeProperties=_.keys(entityPrototype);// If we construct our Entity from a datastore entity (that can happen internally in Diaspora), set it to `sync` state
if(source instanceof DataStoreEntity){state='sync';lastDataSource=source.dataSource.name;dataSources[lastDataSource]=source;source=_.omit(source.toObject(),['id']);}// Check keys provided in source
var sourceKeys=_.keys(source);// Check if there is an intersection with reserved, and have differences with model attributes
var sourceUReserved=_.intersection(sourceKeys,entityPrototypeProperties);if(0!==sourceUReserved.length){throw new Error("Source has reserved keys: "+JSON.stringify(sourceUReserved)+" in "+JSON.stringify(source));}var sourceDModel=_.difference(source,modelAttrsKeys);if(0!==sourceDModel.length){// Later, add a criteria for schemaless models
throw new Error("Source has unknown keys: "+JSON.stringify(sourceDModel)+" in "+JSON.stringify(source));}// Now we know that the source is valid. First, deeply clone to detach object values from entity
var attributes=_.cloneDeep(source);// Free the source
source=null;// Default model attributes with our model desc
Diaspora.default(attributes,modelDesc.attributes);// Bind events
_.forEach(modelDesc.events,function(eventFunctions,eventName){// Iterate on each event functions. `_.castArray` will ensure we iterate on an array if a single function is provided.
_.forEach(_.castArray(eventFunctions),function(eventFunction){_this26.on(eventName,eventFunction);});});// Define getters & setters
var entityDefined=Utils.defineEnumerableProperties(_this26,entityPrototype);var entityProxied=new Proxy(entityDefined,{get:function get(obj,key){if('constructor'===key){return entityDefined[key];}if(key in entityDefined){return entityDefined[key];}return attributes[key];},set:function set(obj,key,value){if(key in entityDefined&&!_get(Entity.prototype.__proto__||Object.getPrototypeOf(Entity.prototype),"hasOwnProperty",_this26).call(_this26,key)){console.warn("Trying to define read-only key "+key+".");return value;}return attributes[key]=value;},enumerate:function enumerate(){return _.keys(attributes);},ownKeys:function ownKeys(){return _(attributes).keys().concat(entityPrototypeProperties).value();},has:function has(obj,key){return attributes.hasOwnProperty(key);}});return _ret=entityProxied,_possibleConstructorReturn(_this26,_ret);}return Entity;}(SequentialEvent);var EntityWrapped=Object.defineProperties(Entity,{/**
		 * Name of the class.
		 * 
		 * @type {string}
		 * @readonly
		 * @memberof EntityFactory.Entity
		 * @static
		 * @author gerkin
		 */name:{value:name+"Entity",writable:false,enumerable:true},/**
		 * Reference to this entity's model.
		 * 
		 * @type {Model}
		 * @readonly
		 * @memberof EntityFactory.Entity
		 * @static
		 * @author gerkin
		 */model:{value:model,writable:false,enumerable:true}});// We use keys `methods` and not `functions` as explained in this [StackOverflow thread](https://stackoverflow.com/a/155655/4839162).
// Extend prototype with methods in our model description
_.forEach(modelDesc.methods,function(methodName,method){Entity.prototype[methodName]=method;});// Add static methods
_.forEach(modelDesc.staticMethods,function(staticMethodName,staticMethod){Entity[staticMethodName]=staticMethod;});return EntityWrapped;}// =====
// ## Lifecycle Events
// -----
// ### Persist
/**
 * @event EntityFactory.Entity#beforePersist
 * @type {String}
 *//**
 * @event EntityFactory.Entity#beforeValidate
 * @type {String}
 *//**
 * @event EntityFactory.Entity#afterValidate
 * @type {String}
 *//**
 * @event EntityFactory.Entity#beforePersistCreate
 * @type {String}
 *//**
 * @event EntityFactory.Entity#beforePersistUpdate
 * @type {String}
 *//**
 * @event EntityFactory.Entity#afterPersistCreate
 * @type {String}
 *//**
 * @event EntityFactory.Entity#afterPersistUpdate
 * @type {String}
 *//**
 * @event EntityFactory.Entity#afterPersist
 * @type {String}
 */// -----
// ### Find
/**
 * @event EntityFactory.Entity#beforeFind
 * @type {String}
 *//**
 * @event EntityFactory.Entity#afterFind
 * @type {String}
 */// -----
// ### Destroy
/**
 * @event EntityFactory.Entity#beforeDestroy
 * @type {String}
 *//**
 * @event EntityFactory.Entity#afterDestroy
 * @type {String}
 */module.exports=EntityFactory;},{"./dataStoreEntities/baseEntity":6,"./dependencies":9,"./diaspora":10,"./errors/entityStateError":12,"./errors/validationError":14,"./utils":17}],12:[function(require,module,exports){'use strict';var ExtendableError=require('./extendableError');/**
 * This class represents an error related to validation.
 * @extends Error
 */var EntityStateError=function(_ExtendableError){_inherits(EntityStateError,_ExtendableError);/**
	 * Construct a new error related to an invalide state of the entity.
	 * 
	 * @author gerkin
	 * @memberof Errors
	 * @param {*}      errorArgs        - Arguments to transfer to parent Error.
	 */function EntityStateError(){var _ref3;_classCallCheck(this,EntityStateError);for(var _len2=arguments.length,errorArgs=Array(_len2),_key2=0;_key2<_len2;_key2++){errorArgs[_key2]=arguments[_key2];}return _possibleConstructorReturn(this,(_ref3=EntityStateError.__proto__||Object.getPrototypeOf(EntityStateError)).call.apply(_ref3,[this].concat(errorArgs)));}return EntityStateError;}(ExtendableError);module.exports=EntityStateError;},{"./extendableError":13}],13:[function(require,module,exports){'use strict';/**
 * @namespace Errors
 *//**
 * This class is the base class for custom Diaspora errors
 * @extends Error
 */var ExtendableError=function(_Error){_inherits(ExtendableError,_Error);/**
	 * Construct a new extendable error.
	 * 
	 * @author gerkin
	 * @param {string} message          - Message of this error.
	 * @param {*}      errorArgs        - Arguments to transfer to parent Error.
	 */function ExtendableError(message){var _ref4;_classCallCheck(this,ExtendableError);for(var _len3=arguments.length,errorArgs=Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){errorArgs[_key3-1]=arguments[_key3];}var _this28=_possibleConstructorReturn(this,(_ref4=ExtendableError.__proto__||Object.getPrototypeOf(ExtendableError)).call.apply(_ref4,[this,message].concat(errorArgs)));_this28.constructor=_get(ExtendableError.prototype.__proto__||Object.getPrototypeOf(ExtendableError.prototype),"target",_this28);if('function'===typeof Error.captureStackTrace){Error.captureStackTrace(_this28,_get(ExtendableError.prototype.__proto__||Object.getPrototypeOf(ExtendableError.prototype),"target",_this28));}else{_this28.stack=new Error(message).stack;}return _this28;}return ExtendableError;}(Error);module.exports=ExtendableError;},{}],14:[function(require,module,exports){'use strict';var _require6=require('../dependencies'),_=_require6._;var ExtendableError=require('./extendableError');var stringifyValidationObject=function stringifyValidationObject(validationErrors){return _(validationErrors).mapValues(function(error,key){return key+" => "+JSON.stringify(error.value)+"\n* "+_(error).omit(['value']).values().map(_.identity).value();}).values().join('\n* ');};/**
 * This class represents an error related to validation.
 * @extends Error
 */var ValidationError=function(_ExtendableError2){_inherits(ValidationError,_ExtendableError2);/**
	 * Construct a new validation error.
	 * 
	 * @author gerkin
	 * @see Diaspora.check
	 * @memberof Errors
	 * @param {Object} validationErrors - Object describing validation errors, usually returned by {@link Diaspora.check}.
	 * @param {string} message          - Message of this error.
	 * @param {*}      errorArgs        - Arguments to transfer to parent Error.
	 */function ValidationError(validationErrors,message){var _ref5;_classCallCheck(this,ValidationError);message+="\n"+stringifyValidationObject(validationErrors);for(var _len4=arguments.length,errorArgs=Array(_len4>2?_len4-2:0),_key4=2;_key4<_len4;_key4++){errorArgs[_key4-2]=arguments[_key4];}var _this29=_possibleConstructorReturn(this,(_ref5=ValidationError.__proto__||Object.getPrototypeOf(ValidationError)).call.apply(_ref5,[this,message].concat(errorArgs)));_this29.validationErrors=validationErrors;return _this29;}return ValidationError;}(ExtendableError);module.exports=ValidationError;},{"../dependencies":9,"./extendableError":13}],15:[function(require,module,exports){'use strict';var _require7=require('./dependencies'),_=_require7._,Promise=_require7.Promise;var EntityFactory=require('./entityFactory');var Diaspora=require('./diaspora');var Set=require('./set');var entityPrototypeProperties=EntityFactory.entityPrototypeProperties;/**
 * @namespace ModelConfiguration
 *//**
 * Object describing a model.
 * 
 * @typedef  {Object} ModelConfiguration.ModelDescription
 * @author gerkin
 * @property {ModelConfiguration.SourcesDescriptor}    sources       - List of sources to use with this model.
 * @property {ModelConfiguration.AttributesDescriptor} attributes    - Attributes of the model.
 * @property {Object<string, Function>}                methods       - Methods to add to entities prototype.
 * @property {Object<string, Function>}                staticMethods - Static methods to add to entities.
 * @property {Object<string, Function|Function[]>}     events        - Events to bind on entities.
 *//**
 * The model class is used to interact with the population of all data of the same type.
 */var Model=function(){/**
	 * Create a new Model that is allowed to interact with all entities of data sources tables selected.
	 * 
	 * @author gerkin
	 * @param {string}                              name      - Name of the model.
	 * @param {ModelConfiguration.ModelDescription} modelDesc - Hash representing the configuration of the model.
	 */function Model(name,modelDesc){_classCallCheck(this,Model);var reservedPropIntersect=_.intersection(entityPrototypeProperties,_.keys(modelDesc.attributes));if(0!==reservedPropIntersect.length){throw new Error(JSON.stringify(reservedPropIntersect)+" is/are reserved property names. To match those column names in data source, please use the data source mapper property");}if(!modelDesc.hasOwnProperty('sources')||!(_.isArrayLike(modelDesc.sources)||_.isObject(modelDesc.sources))){throw new TypeError("Expect model sources to be either an array or an object, had "+JSON.stringify(modelDesc.sources)+".");}// Normalize our sources: normalized form is an object with keys corresponding to source name, and key corresponding to remaps
var sourcesNormalized=_.isArrayLike(modelDesc.sources)?_.zipObject(modelDesc.sources,_.times(modelDesc.sources.length,_.constant({}))):_.mapValues(modelDesc.sources,function(remap,dataSourceName){if(true===remap){return{};}else if(_.isObject(remap)){return remap;}else{throw new TypeError("Datasource \""+dataSourceName+"\" value is invalid: expect `true` or a remap hash, but have "+JSON.stringify(remap));}});// List sources required by this model
var sourceNames=_.keys(sourcesNormalized);var scopeAvailableSources=Diaspora.dataSources;var modelSources=_.pick(scopeAvailableSources,sourceNames);var missingSources=_.difference(sourceNames,_.keys(modelSources));if(0!==missingSources.length){throw new Error("Missing data sources "+missingSources.map(function(v){return"\""+v+"\"";}).join(', '));}// Now, we are sure that config is valid. We can configure our datasources with model options, and set `this` properties.
_.forEach(sourcesNormalized,function(remap,sourceName){var sourceConfiguring=modelSources[sourceName];sourceConfiguring.configureCollection(name,remap);});this.dataSources=modelSources;this.defaultDataSource=sourceNames[0];this.name=name;this.entityFactory=EntityFactory(name,modelDesc,this);}/**
	 * Create a new Model that is allowed to interact with all entities of data sources tables selected.
	 * 
	 * @author gerkin
	 * @throws  {Error} Thrown if requested source name does not exists.
	 * @param   {string} [sourceName=Model.defaultDataSource] - Name of the source to get. It corresponds to one of the sources you set in {@link Model#modelDesc}.sources.
	 * @returns {Adapters.DiasporaAdapter} Source adapter with requested name.
	 */_createClass(Model,[{key:"getDataSource",value:function getDataSource(sourceName){if(_.isNil(sourceName)){sourceName=this.defaultDataSource;}else if(!this.dataSources.hasOwnProperty(sourceName)){throw new Error("Unknown data source \""+sourceName+"\" in model \""+this.name+"\", available are "+_.keys(this.dataSources).map(function(v){return"\""+v+"\"";}).join(', '));}return this.dataSources[sourceName];}/**
	 * Create a new *orphan* {@link Entity entity}.
	 * 
	 * @author gerkin
	 * @param   {Object} source - Object to copy attributes from.
	 * @returns {Entity} New *orphan* entity.
	 */},{key:"spawn",value:function spawn(source){var newEntity=new this.entityFactory(source);return newEntity;}/**
	 * Create multiple new *orphan* {@link Entity entities}.
	 * 
	 * @author gerkin
	 * @param   {Object[]} sources - Array of objects to copy attributes from.
	 * @returns {Set} Set with new *orphan* entities.
	 */},{key:"spawnMulti",value:function spawnMulti(sources){var _this30=this;return new Set(this,_.map(sources,function(source){return _this30.spawn(source);}));}/**
	 * Insert a raw source object in the data store.
	 * 
	 * @author gerkin
	 * @param   {Object} source                                   - Object to copy attributes from.
	 * @param   {string} [dataSourceName=Model.defaultDataSource] - Name of the data source to insert in.
	 * @returns {Promise} Promise resolved with new *sync* {@link Entity entity}.
	 */},{key:"insert",value:function insert(source,dataSourceName){var _this31=this;var dataSource=this.getDataSource(dataSourceName);return dataSource.insertOne(this.name,source).then(function(entity){return Promise.resolve(new _this31.entityFactory(entity));});}/**
	 * Insert multiple raw source objects in the data store.
	 * 
	 * @author gerkin
	 * @param   {Object[]} sources                                  - Array of object to copy attributes from.
	 * @param   {string}   [dataSourceName=Model.defaultDataSource] - Name of the data source to insert in.
	 * @returns {Promise} Promise resolved with a {@link Set set} containing new *sync* entities.
	 */},{key:"insertMany",value:function insertMany(sources,dataSourceName){var _this32=this;var dataSource=this.getDataSource(dataSourceName);return dataSource.insertMany(this.name,sources).then(function(entities){var newEntities=_.map(entities,function(entity){return new _this32.entityFactory(entity);});var collection=new Set(_this32,newEntities);return Promise.resolve(collection);});}/**
	 * Retrieve a single entity from specified data source that matches provided `queryFind` and `options`.
	 * 
	 * @author gerkin
	 * @param   {QueryLanguage#SelectQueryOrCondition} [queryFind={}]                           - Query to get desired entity.
	 * @param   {QueryLanguage#QueryOptions}           [options={}]                             - Options for this query.
	 * @param   {string}                               [dataSourceName=Model.defaultDataSource] - Name of the data source to get entity from.
	 * @returns {Promise} Promise resolved with the found {@link Entity entity} in *sync* state.
	 */},{key:"find",value:function find(){var queryFind=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _this33=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var dataSourceName=arguments[2];if(_.isString(options)&&!!_.isNil(dataSourceName)){dataSourceName=options;options={};}else if(_.isString(queryFind)&&!!_.isNil(options)&&!!_.isNil(dataSourceName)){dataSourceName=queryFind;queryFind={};options={};}var dataSource=this.getDataSource(dataSourceName);return dataSource.findOne(this.name,queryFind,options).then(function(dataSourceEntity){if(_.isNil(dataSourceEntity)){return Promise.resolve();}var newEntity=new _this33.entityFactory(dataSourceEntity);newEntity.dataSources[dataSource.name]=dataSourceEntity;return Promise.resolve(newEntity);});}/**
	 * Retrieve multiple entities from specified data source that matches provided `queryFind` and `options`.
	 * 
	 * @author gerkin
	 * @param   {QueryLanguage#SelectQueryOrCondition} [queryFind={}]                           - Query to get desired entities.
	 * @param   {QueryLanguage#QueryOptions}           [options={}]                             - Options for this query.
	 * @param   {string}                               [dataSourceName=Model.defaultDataSource] - Name of the data source to get entities from.
	 * @returns {Promise} Promise resolved with a {@link Set set} of found entities in *sync* state.
	 */},{key:"findMany",value:function findMany(){var queryFind=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _this34=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var dataSourceName=arguments[2];if(_.isString(options)&&!!_.isNil(dataSourceName)){dataSourceName=options;options={};}else if(_.isString(queryFind)&&!!_.isNil(options)&&!!_.isNil(dataSourceName)){dataSourceName=queryFind;queryFind={};options={};}var dataSource=this.getDataSource(dataSourceName);return dataSource.findMany(this.name,queryFind,options).then(function(entities){var newEntities=_.map(entities,function(entity){return new _this34.entityFactory(entity);});var collection=new Set(_this34,newEntities);return Promise.resolve(collection);});}/**
	 * Update a single entity from specified data source that matches provided `queryFind` and `options`.
	 * 
	 * @author gerkin
	 * @param   {QueryLanguage#SelectQueryOrCondition} [queryFind={}]                           - Query to get desired entity.
	 * @param   {Object}                               update                                   - Attributes to update on matched set.
	 * @param   {QueryLanguage#QueryOptions}           [options={}]                             - Options for this query.
	 * @param   {string}                               [dataSourceName=Model.defaultDataSource] - Name of the data source to get entity from.
	 * @returns {Promise} Promise resolved with the updated {@link Entity entity} in *sync* state.
	 */},{key:"update",value:function update(queryFind,_update){var _this35=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var dataSourceName=arguments[3];if(_.isString(options)&&!!_.isNil(dataSourceName)){dataSourceName=options;options={};}var dataSource=this.getDataSource(dataSourceName);return dataSource.updateOne(this.name,queryFind,_update,options).then(function(dataSourceEntity){if(_.isNil(dataSourceEntity)){return Promise.resolve();}var newEntity=new _this35.entityFactory(dataSourceEntity);return Promise.resolve(newEntity);});}/**
	 * Update multiple entities from specified data source that matches provided `queryFind` and `options`.
	 * 
	 * @author gerkin
	 * @param   {QueryLanguage#SelectQueryOrCondition} [queryFind={}]                           - Query to get desired entities.
	 * @param   {Object}                               update                                   - Attributes to update on matched set.
	 * @param   {QueryLanguage#QueryOptions}           [options={}]                             - Options for this query.
	 * @param   {string}                               [dataSourceName=Model.defaultDataSource] - Name of the data source to get entities from.
	 * @returns {Promise} Promise resolved with the {@link Set set} of found entities in *sync* state.
	 */},{key:"updateMany",value:function updateMany(queryFind,update){var _this36=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var dataSourceName=arguments[3];if(_.isString(options)&&!!_.isNil(dataSourceName)){dataSourceName=options;options={};}var dataSource=this.getDataSource(dataSourceName);return dataSource.updateMany(this.name,queryFind,update,options).then(function(entities){var newEntities=_.map(entities,function(entity){return new _this36.entityFactory(entity);});var collection=new Set(_this36,newEntities);return Promise.resolve(collection);});}/**
	 * Delete a single entity from specified data source that matches provided `queryFind` and `options`.
	 * 
	 * @author gerkin
	 * @param   {QueryLanguage#SelectQueryOrCondition} [queryFind={}]                           - Query to get desired entity.
	 * @param   {QueryLanguage#QueryOptions}           [options={}]                             - Options for this query.
	 * @param   {string}                               [dataSourceName=Model.defaultDataSource] - Name of the data source to get entity from.
	 * @returns {Promise} Promise resolved with `undefined`.
	 */},{key:"delete",value:function _delete(){var queryFind=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var dataSourceName=arguments[2];if(_.isString(options)&&!!_.isNil(dataSourceName)){dataSourceName=options;options={};}var dataSource=this.getDataSource(dataSourceName);return dataSource.deleteOne(this.name,queryFind,options);}/**
	 * Delete multiple entities from specified data source that matches provided `queryFind` and `options`.
	 * 
	 * @author gerkin
	 * @param   {QueryLanguage#SelectQueryOrCondition} [queryFind={}]                           - Query to get desired entities.
	 * @param   {QueryLanguage#QueryOptions}           [options={}]                             - Options for this query.
	 * @param   {string}                               [dataSourceName=Model.defaultDataSource] - Name of the data source to get entities from.
	 * @returns {Promise} Promise resolved with `undefined`.
	 */},{key:"deleteMany",value:function deleteMany(){var queryFind=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var dataSourceName=arguments[2];if(_.isString(options)&&!!_.isNil(dataSourceName)){dataSourceName=options;options={};}var dataSource=this.getDataSource(dataSourceName);return dataSource.deleteMany(this.name,queryFind,options);}}]);return Model;}();module.exports=Model;},{"./dependencies":9,"./diaspora":10,"./entityFactory":11,"./set":16}],16:[function(require,module,exports){'use strict';var _require8=require('./dependencies'),_=_require8._,Promise=_require8.Promise;var Utils=require('./utils');/**
 * Collections are used to manage multiple entities at the same time. You may try to use this class as an array.
 */var Set=function(){/**
	 * Create a new set, managing provided `entities` that must be generated from provided `model`.
	 * 
	 * @param {Model}           model    - Model describing entities managed by this set.
	 * @param {Entity|Entity[]} entities - Entities to manage with this set. Arguments are flattened, so you can provide as many nested arrays as you want.
	 */function Set(model){for(var _len5=arguments.length,entities=Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){entities[_key5-1]=arguments[_key5];}_classCallCheck(this,Set);// Flatten arguments
entities=_(entities).flatten();// Check if each entity is from the expected model
Set.checkEntitiesFromModel(entities.value(),model);var defined=Utils.defineEnumerableProperties(this,{/**
			 * List entities of this set.
			 * 
			 * @name entities
			 * @readonly
			 * @memberof Set
			 * @instance
			 * @type {LodashWrapper<Entity>}
			 * @author Gerkin
			 */entities:entities,/**
			 * Model that generated this set.
			 * 
			 * @name model
			 * @readonly
			 * @memberof Set
			 * @instance
			 * @type {Model}
			 * @author Gerkin
			 */model:model,/**
			 * Number of entities in this set.
			 * 
			 * @name length
			 * @readonly
			 * @memberof Set
			 * @instance
			 * @type {Integer}
			 * @author Gerkin
			 */length:{get:function get(){return this.entities.size();}}});return new Proxy(defined,{get:function get(target,prop){if(prop in target){return target[prop];}else if(prop in target.entities){return target.entities[prop];}else if('string'===typeof prop&&prop.match(/^-?\d+$/)&&target.entities.nth(parseInt(prop))){return target.entities.nth(parseInt(prop));}},set:function set(target,prop,val){if('model'===prop){return new Error('Can\'t assign to read-only property "model".');}else if('entities'===prop){Set.checkEntitiesFromModel(val,target.model);target.entities=_(val);}}});}/**
	 * Check if all entities in the first argument are from the expected model.
	 * 
	 * @author gerkin
	 * @throws {TypeError} Thrown if one of the entity is not from provided `model`.
	 * @param {Entity[]} entities - Array of entities to check.
	 * @param {Model}    model    - Model expected to be the source of all entities.
	 * @returns {undefined} This function does not return anything.
	 */_createClass(Set,[{key:"persist",/**
	 * Persist all entities of this collection.
	 * 
	 * @fires EntityFactory.Entity#beforeUpdate
	 * @fires EntityFactory.Entity#afterUpdate
	 * @author gerkin
	 * @param {string} sourceName - Data source name to persist in.
	 * @returns {Promise} Promise resolved once all items are persisted.
	 * @see {@link EntityFactory.Entity#persist}
	 */value:function persist(sourceName){var _this37=this;var suffixes=this.entities.map(function(entity){return'orphan'===entity.state?'Create':'Update';}).value();return Promise.all(this.entities.map(function(entity){return entity.emit('beforePersist');})).then(function(){return Promise.all(_this37.entities.map(function(entity){return entity.emit('beforeValidate');}));}).then(function(){return _this37.entities.map(function(entity){return entity.validate();});}).then(function(){return Promise.all(_this37.entities.map(function(entity){return entity.emit('afterValidate');}));}).then(function(){return Promise.all(_this37.entities.map(function(entity,index){return entity.emit("beforePersist"+suffixes[index]);}));}).then(function(){return Promise.all(_this37.entities.map(function(entity){return entity.persist(sourceName,{skipEvents:true});}));}).then(function(){return Promise.all(_this37.entities.map(function(entity,index){return entity.emit("afterPersist"+suffixes[index]);}));}).then(function(){return Promise.all(_this37.entities.map(function(entity){return entity.emit('afterPersist');}));}).then(function(){return _this37;});}/**
	 * Reload all entities of this collection.
	 * 
	 * @fires EntityFactory.Entity#beforeFind
	 * @fires EntityFactory.Entity#afterFind
	 * @author gerkin
	 * @param {string} sourceName - Data source name to reload entities from.
	 * @returns {Promise} Promise resolved once all items are reloaded.
	 * @see {@link EntityFactory.Entity#fetch}
	 */},{key:"fetch",value:function fetch(sourceName){var _this38=this;return Promise.all(this.entities.map(function(entity){return entity.emit('beforeFetch');})).then(function(){return Promise.all(_this38.entities.map(function(entity){return entity.fetch(sourceName,{skipEvents:true});}));}).then(function(){return Promise.all(_this38.entities.map(function(entity){return entity.emit('afterFetch');}));}).then(function(){return _this38;});}/**
	 * Destroy all entities from this collection.
	 * 
	 * @fires EntityFactory.Entity#beforeDelete
	 * @fires EntityFactory.Entity#afterDelete
	 * @author gerkin
	 * @param {string} sourceName - Name of the data source to delete entities from.
	 * @returns {Promise} Promise resolved once all items are destroyed.
	 * @see {@link EntityFactory.Entity#destroy}
	 */},{key:"destroy",value:function destroy(sourceName){var _this39=this;return Promise.all(this.entities.map(function(entity){return entity.emit('beforeDestroy');})).then(function(){return Promise.all(_this39.entities.map(function(entity){return entity.destroy(sourceName,{skipEvents:true});}));}).then(function(){return Promise.all(_this39.entities.map(function(entity){return entity.emit('afterDestroy');}));}).then(function(){return _this39;});}/**
	 * Update all entities in the set with given object.
	 * 
	 * @author gerkin
	 * @param   {Object} newData - Attributes to change in each entity of the collection.
	 * @returns {Collection} `this`.
	 */},{key:"update",value:function update(newData){this.entities.forEach(function(entity){_.forEach(newData,function(val,key){if(_.isUndefined(val)){delete entity[key];}else{entity[key]=val;}});});return this;}}],[{key:"checkEntitiesFromModel",value:function checkEntitiesFromModel(entities,model){entities.forEach(function(entity,index){if(entity.constructor.model!==model){throw new TypeError("Provided entity n\xB0"+index+" "+entity+" is not from model "+model+" ("+model.modelName+")");}});}}]);return Set;}();module.exports=Set;},{"./dependencies":9,"./utils":17}],17:[function(require,module,exports){'use strict';var _require9=require('./dependencies'),_=_require9._;module.exports={defineEnumerableProperties:function defineEnumerableProperties(subject,handlers){var remappedHandlers=_.mapValues(handlers,function(handler){if(_.isNil(handler)||'object'!==(typeof handler==="undefined"?"undefined":_typeof(handler))||Object.getPrototypeOf(handler)!==Object.prototype){handler={value:handler};}var defaults={enumerable:true};if(!handler.hasOwnProperty('get')){defaults.writable=false;}_.defaults(handler,defaults);return handler;});return Object.defineProperties(subject,remappedHandlers);}};},{"./dependencies":9}],18:[function(require,module,exports){(function(process,global){/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2017 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 *//**
 * bluebird build version 3.5.1
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/!function(e){if("object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e();}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){var SomePromiseArray=Promise._SomePromiseArray;function any(promises){var ret=new SomePromiseArray(promises);var promise=ret.promise();ret.setHowMany(1);ret.setUnwrap();ret.init();return promise;}Promise.any=function(promises){return any(promises);};Promise.prototype.any=function(){return any(this);};};},{}],2:[function(_dereq_,module,exports){"use strict";var firstLineError;try{throw new Error();}catch(e){firstLineError=e;}var schedule=_dereq_("./schedule");var Queue=_dereq_("./queue");var util=_dereq_("./util");function Async(){this._customScheduler=false;this._isTickUsed=false;this._lateQueue=new Queue(16);this._normalQueue=new Queue(16);this._haveDrainedQueues=false;this._trampolineEnabled=true;var self=this;this.drainQueues=function(){self._drainQueues();};this._schedule=schedule;}Async.prototype.setScheduler=function(fn){var prev=this._schedule;this._schedule=fn;this._customScheduler=true;return prev;};Async.prototype.hasCustomScheduler=function(){return this._customScheduler;};Async.prototype.enableTrampoline=function(){this._trampolineEnabled=true;};Async.prototype.disableTrampolineIfNecessary=function(){if(util.hasDevTools){this._trampolineEnabled=false;}};Async.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues;};Async.prototype.fatalError=function(e,isNode){if(isNode){process.stderr.write("Fatal "+(e instanceof Error?e.stack:e)+"\n");process.exit(2);}else{this.throwLater(e);}};Async.prototype.throwLater=function(fn,arg){if(arguments.length===1){arg=fn;fn=function fn(){throw arg;};}if(typeof setTimeout!=="undefined"){setTimeout(function(){fn(arg);},0);}else try{this._schedule(function(){fn(arg);});}catch(e){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");}};function AsyncInvokeLater(fn,receiver,arg){this._lateQueue.push(fn,receiver,arg);this._queueTick();}function AsyncInvoke(fn,receiver,arg){this._normalQueue.push(fn,receiver,arg);this._queueTick();}function AsyncSettlePromises(promise){this._normalQueue._pushOne(promise);this._queueTick();}if(!util.hasDevTools){Async.prototype.invokeLater=AsyncInvokeLater;Async.prototype.invoke=AsyncInvoke;Async.prototype.settlePromises=AsyncSettlePromises;}else{Async.prototype.invokeLater=function(fn,receiver,arg){if(this._trampolineEnabled){AsyncInvokeLater.call(this,fn,receiver,arg);}else{this._schedule(function(){setTimeout(function(){fn.call(receiver,arg);},100);});}};Async.prototype.invoke=function(fn,receiver,arg){if(this._trampolineEnabled){AsyncInvoke.call(this,fn,receiver,arg);}else{this._schedule(function(){fn.call(receiver,arg);});}};Async.prototype.settlePromises=function(promise){if(this._trampolineEnabled){AsyncSettlePromises.call(this,promise);}else{this._schedule(function(){promise._settlePromises();});}};}Async.prototype._drainQueue=function(queue){while(queue.length()>0){var fn=queue.shift();if(typeof fn!=="function"){fn._settlePromises();continue;}var receiver=queue.shift();var arg=queue.shift();fn.call(receiver,arg);}};Async.prototype._drainQueues=function(){this._drainQueue(this._normalQueue);this._reset();this._haveDrainedQueues=true;this._drainQueue(this._lateQueue);};Async.prototype._queueTick=function(){if(!this._isTickUsed){this._isTickUsed=true;this._schedule(this.drainQueues);}};Async.prototype._reset=function(){this._isTickUsed=false;};module.exports=Async;module.exports.firstLineError=firstLineError;},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,debug){var calledBind=false;var rejectThis=function rejectThis(_,e){this._reject(e);};var targetRejected=function targetRejected(e,context){context.promiseRejectionQueued=true;context.bindingPromise._then(rejectThis,rejectThis,null,this,e);};var bindingResolved=function bindingResolved(thisArg,context){if((this._bitField&50397184)===0){this._resolveCallback(context.target);}};var bindingRejected=function bindingRejected(e,context){if(!context.promiseRejectionQueued)this._reject(e);};Promise.prototype.bind=function(thisArg){if(!calledBind){calledBind=true;Promise.prototype._propagateFrom=debug.propagateFromFunction();Promise.prototype._boundValue=debug.boundValueFunction();}var maybePromise=tryConvertToPromise(thisArg);var ret=new Promise(INTERNAL);ret._propagateFrom(this,1);var target=this._target();ret._setBoundTo(maybePromise);if(maybePromise instanceof Promise){var context={promiseRejectionQueued:false,promise:ret,target:target,bindingPromise:maybePromise};target._then(INTERNAL,targetRejected,undefined,ret,context);maybePromise._then(bindingResolved,bindingRejected,undefined,ret,context);ret._setOnCancel(maybePromise);}else{ret._resolveCallback(target);}return ret;};Promise.prototype._setBoundTo=function(obj){if(obj!==undefined){this._bitField=this._bitField|2097152;this._boundTo=obj;}else{this._bitField=this._bitField&~2097152;}};Promise.prototype._isBound=function(){return(this._bitField&2097152)===2097152;};Promise.bind=function(thisArg,value){return Promise.resolve(value).bind(thisArg);};};},{}],4:[function(_dereq_,module,exports){"use strict";var old;if(typeof Promise!=="undefined")old=Promise;function noConflict(){try{if(Promise===bluebird)Promise=old;}catch(e){}return bluebird;}var bluebird=_dereq_("./promise")();bluebird.noConflict=noConflict;module.exports=bluebird;},{"./promise":22}],5:[function(_dereq_,module,exports){"use strict";var cr=Object.create;if(cr){var callerCache=cr(null);var getterCache=cr(null);callerCache[" size"]=getterCache[" size"]=0;}module.exports=function(Promise){var util=_dereq_("./util");var canEvaluate=util.canEvaluate;var isIdentifier=util.isIdentifier;var getMethodCaller;var getGetter;if(!true){var makeMethodCaller=function makeMethodCaller(methodName){return new Function("ensureMethod","                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g,methodName))(ensureMethod);};var makeGetter=function makeGetter(propertyName){return new Function("obj","                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName",propertyName));};var getCompiled=function getCompiled(name,compiler,cache){var ret=cache[name];if(typeof ret!=="function"){if(!isIdentifier(name)){return null;}ret=compiler(name);cache[name]=ret;cache[" size"]++;if(cache[" size"]>512){var keys=Object.keys(cache);for(var i=0;i<256;++i){delete cache[keys[i]];}cache[" size"]=keys.length-256;}}return ret;};getMethodCaller=function getMethodCaller(name){return getCompiled(name,makeMethodCaller,callerCache);};getGetter=function getGetter(name){return getCompiled(name,makeGetter,getterCache);};}function ensureMethod(obj,methodName){var fn;if(obj!=null)fn=obj[methodName];if(typeof fn!=="function"){var message="Object "+util.classString(obj)+" has no method '"+util.toString(methodName)+"'";throw new Promise.TypeError(message);}return fn;}function caller(obj){var methodName=this.pop();var fn=ensureMethod(obj,methodName);return fn.apply(obj,this);}Promise.prototype.call=function(methodName){var args=[].slice.call(arguments,1);;if(!true){if(canEvaluate){var maybeCaller=getMethodCaller(methodName);if(maybeCaller!==null){return this._then(maybeCaller,undefined,undefined,args,undefined);}}}args.push(methodName);return this._then(caller,undefined,undefined,args,undefined);};function namedGetter(obj){return obj[this];}function indexedGetter(obj){var index=+this;if(index<0)index=Math.max(0,index+obj.length);return obj[index];}Promise.prototype.get=function(propertyName){var isIndex=typeof propertyName==="number";var getter;if(!isIndex){if(canEvaluate){var maybeGetter=getGetter(propertyName);getter=maybeGetter!==null?maybeGetter:namedGetter;}else{getter=namedGetter;}}else{getter=indexedGetter;}return this._then(getter,undefined,undefined,propertyName,undefined);};};},{"./util":36}],6:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection,debug){var util=_dereq_("./util");var tryCatch=util.tryCatch;var errorObj=util.errorObj;var async=Promise._async;Promise.prototype["break"]=Promise.prototype.cancel=function(){if(!debug.cancellation())return this._warn("cancellation is disabled");var promise=this;var child=promise;while(promise._isCancellable()){if(!promise._cancelBy(child)){if(child._isFollowing()){child._followee().cancel();}else{child._cancelBranched();}break;}var parent=promise._cancellationParent;if(parent==null||!parent._isCancellable()){if(promise._isFollowing()){promise._followee().cancel();}else{promise._cancelBranched();}break;}else{if(promise._isFollowing())promise._followee().cancel();promise._setWillBeCancelled();child=promise;promise=parent;}}};Promise.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--;};Promise.prototype._enoughBranchesHaveCancelled=function(){return this._branchesRemainingToCancel===undefined||this._branchesRemainingToCancel<=0;};Promise.prototype._cancelBy=function(canceller){if(canceller===this){this._branchesRemainingToCancel=0;this._invokeOnCancel();return true;}else{this._branchHasCancelled();if(this._enoughBranchesHaveCancelled()){this._invokeOnCancel();return true;}}return false;};Promise.prototype._cancelBranched=function(){if(this._enoughBranchesHaveCancelled()){this._cancel();}};Promise.prototype._cancel=function(){if(!this._isCancellable())return;this._setCancelled();async.invoke(this._cancelPromises,this,undefined);};Promise.prototype._cancelPromises=function(){if(this._length()>0)this._settlePromises();};Promise.prototype._unsetOnCancel=function(){this._onCancelField=undefined;};Promise.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled();};Promise.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled();};Promise.prototype._doInvokeOnCancel=function(onCancelCallback,internalOnly){if(util.isArray(onCancelCallback)){for(var i=0;i<onCancelCallback.length;++i){this._doInvokeOnCancel(onCancelCallback[i],internalOnly);}}else if(onCancelCallback!==undefined){if(typeof onCancelCallback==="function"){if(!internalOnly){var e=tryCatch(onCancelCallback).call(this._boundValue());if(e===errorObj){this._attachExtraTrace(e.e);async.throwLater(e.e);}}}else{onCancelCallback._resultCancelled(this);}}};Promise.prototype._invokeOnCancel=function(){var onCancelCallback=this._onCancel();this._unsetOnCancel();async.invoke(this._doInvokeOnCancel,this,onCancelCallback);};Promise.prototype._invokeInternalOnCancel=function(){if(this._isCancellable()){this._doInvokeOnCancel(this._onCancel(),true);this._unsetOnCancel();}};Promise.prototype._resultCancelled=function(){this.cancel();};};},{"./util":36}],7:[function(_dereq_,module,exports){"use strict";module.exports=function(NEXT_FILTER){var util=_dereq_("./util");var getKeys=_dereq_("./es5").keys;var tryCatch=util.tryCatch;var errorObj=util.errorObj;function catchFilter(instances,cb,promise){return function(e){var boundTo=promise._boundValue();predicateLoop:for(var i=0;i<instances.length;++i){var item=instances[i];if(item===Error||item!=null&&item.prototype instanceof Error){if(e instanceof item){return tryCatch(cb).call(boundTo,e);}}else if(typeof item==="function"){var matchesPredicate=tryCatch(item).call(boundTo,e);if(matchesPredicate===errorObj){return matchesPredicate;}else if(matchesPredicate){return tryCatch(cb).call(boundTo,e);}}else if(util.isObject(e)){var keys=getKeys(item);for(var j=0;j<keys.length;++j){var key=keys[j];if(item[key]!=e[key]){continue predicateLoop;}}return tryCatch(cb).call(boundTo,e);}}return NEXT_FILTER;};}return catchFilter;};},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){var longStackTraces=false;var contextStack=[];Promise.prototype._promiseCreated=function(){};Promise.prototype._pushContext=function(){};Promise.prototype._popContext=function(){return null;};Promise._peekContext=Promise.prototype._peekContext=function(){};function Context(){this._trace=new Context.CapturedTrace(peekContext());}Context.prototype._pushContext=function(){if(this._trace!==undefined){this._trace._promiseCreated=null;contextStack.push(this._trace);}};Context.prototype._popContext=function(){if(this._trace!==undefined){var trace=contextStack.pop();var ret=trace._promiseCreated;trace._promiseCreated=null;return ret;}return null;};function createContext(){if(longStackTraces)return new Context();}function peekContext(){var lastIndex=contextStack.length-1;if(lastIndex>=0){return contextStack[lastIndex];}return undefined;}Context.CapturedTrace=null;Context.create=createContext;Context.deactivateLongStackTraces=function(){};Context.activateLongStackTraces=function(){var Promise_pushContext=Promise.prototype._pushContext;var Promise_popContext=Promise.prototype._popContext;var Promise_PeekContext=Promise._peekContext;var Promise_peekContext=Promise.prototype._peekContext;var Promise_promiseCreated=Promise.prototype._promiseCreated;Context.deactivateLongStackTraces=function(){Promise.prototype._pushContext=Promise_pushContext;Promise.prototype._popContext=Promise_popContext;Promise._peekContext=Promise_PeekContext;Promise.prototype._peekContext=Promise_peekContext;Promise.prototype._promiseCreated=Promise_promiseCreated;longStackTraces=false;};longStackTraces=true;Promise.prototype._pushContext=Context.prototype._pushContext;Promise.prototype._popContext=Context.prototype._popContext;Promise._peekContext=Promise.prototype._peekContext=peekContext;Promise.prototype._promiseCreated=function(){var ctx=this._peekContext();if(ctx&&ctx._promiseCreated==null)ctx._promiseCreated=this;};};return Context;};},{}],9:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,Context){var getDomain=Promise._getDomain;var async=Promise._async;var Warning=_dereq_("./errors").Warning;var util=_dereq_("./util");var canAttachTrace=util.canAttachTrace;var unhandledRejectionHandled;var possiblyUnhandledRejection;var bluebirdFramePattern=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;var nodeFramePattern=/\((?:timers\.js):\d+:\d+\)/;var parseLinePattern=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;var stackFramePattern=null;var formatStack=null;var indentStackFrames=false;var printWarning;var debugging=!!(util.env("BLUEBIRD_DEBUG")!=0&&(true||util.env("BLUEBIRD_DEBUG")||util.env("NODE_ENV")==="development"));var warnings=!!(util.env("BLUEBIRD_WARNINGS")!=0&&(debugging||util.env("BLUEBIRD_WARNINGS")));var longStackTraces=!!(util.env("BLUEBIRD_LONG_STACK_TRACES")!=0&&(debugging||util.env("BLUEBIRD_LONG_STACK_TRACES")));var wForgottenReturn=util.env("BLUEBIRD_W_FORGOTTEN_RETURN")!=0&&(warnings||!!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));Promise.prototype.suppressUnhandledRejections=function(){var target=this._target();target._bitField=target._bitField&~1048576|524288;};Promise.prototype._ensurePossibleRejectionHandled=function(){if((this._bitField&524288)!==0)return;this._setRejectionIsUnhandled();var self=this;setTimeout(function(){self._notifyUnhandledRejection();},1);};Promise.prototype._notifyUnhandledRejectionIsHandled=function(){fireRejectionEvent("rejectionHandled",unhandledRejectionHandled,undefined,this);};Promise.prototype._setReturnedNonUndefined=function(){this._bitField=this._bitField|268435456;};Promise.prototype._returnedNonUndefined=function(){return(this._bitField&268435456)!==0;};Promise.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var reason=this._settledValue();this._setUnhandledRejectionIsNotified();fireRejectionEvent("unhandledRejection",possiblyUnhandledRejection,reason,this);}};Promise.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=this._bitField|262144;};Promise.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=this._bitField&~262144;};Promise.prototype._isUnhandledRejectionNotified=function(){return(this._bitField&262144)>0;};Promise.prototype._setRejectionIsUnhandled=function(){this._bitField=this._bitField|1048576;};Promise.prototype._unsetRejectionIsUnhandled=function(){this._bitField=this._bitField&~1048576;if(this._isUnhandledRejectionNotified()){this._unsetUnhandledRejectionIsNotified();this._notifyUnhandledRejectionIsHandled();}};Promise.prototype._isRejectionUnhandled=function(){return(this._bitField&1048576)>0;};Promise.prototype._warn=function(message,shouldUseOwnTrace,promise){return warn(message,shouldUseOwnTrace,promise||this);};Promise.onPossiblyUnhandledRejection=function(fn){var domain=getDomain();possiblyUnhandledRejection=typeof fn==="function"?domain===null?fn:util.domainBind(domain,fn):undefined;};Promise.onUnhandledRejectionHandled=function(fn){var domain=getDomain();unhandledRejectionHandled=typeof fn==="function"?domain===null?fn:util.domainBind(domain,fn):undefined;};var disableLongStackTraces=function disableLongStackTraces(){};Promise.longStackTraces=function(){if(async.haveItemsQueued()&&!config.longStackTraces){throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");}if(!config.longStackTraces&&longStackTracesIsSupported()){var Promise_captureStackTrace=Promise.prototype._captureStackTrace;var Promise_attachExtraTrace=Promise.prototype._attachExtraTrace;config.longStackTraces=true;disableLongStackTraces=function disableLongStackTraces(){if(async.haveItemsQueued()&&!config.longStackTraces){throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");}Promise.prototype._captureStackTrace=Promise_captureStackTrace;Promise.prototype._attachExtraTrace=Promise_attachExtraTrace;Context.deactivateLongStackTraces();async.enableTrampoline();config.longStackTraces=false;};Promise.prototype._captureStackTrace=longStackTracesCaptureStackTrace;Promise.prototype._attachExtraTrace=longStackTracesAttachExtraTrace;Context.activateLongStackTraces();async.disableTrampolineIfNecessary();}};Promise.hasLongStackTraces=function(){return config.longStackTraces&&longStackTracesIsSupported();};var fireDomEvent=function(){try{if(typeof CustomEvent==="function"){var event=new CustomEvent("CustomEvent");util.global.dispatchEvent(event);return function(name,event){var domEvent=new CustomEvent(name.toLowerCase(),{detail:event,cancelable:true});return!util.global.dispatchEvent(domEvent);};}else if(typeof Event==="function"){var event=new Event("CustomEvent");util.global.dispatchEvent(event);return function(name,event){var domEvent=new Event(name.toLowerCase(),{cancelable:true});domEvent.detail=event;return!util.global.dispatchEvent(domEvent);};}else{var event=document.createEvent("CustomEvent");event.initCustomEvent("testingtheevent",false,true,{});util.global.dispatchEvent(event);return function(name,event){var domEvent=document.createEvent("CustomEvent");domEvent.initCustomEvent(name.toLowerCase(),false,true,event);return!util.global.dispatchEvent(domEvent);};}}catch(e){}return function(){return false;};}();var fireGlobalEvent=function(){if(util.isNode){return function(){return process.emit.apply(process,arguments);};}else{if(!util.global){return function(){return false;};}return function(name){var methodName="on"+name.toLowerCase();var method=util.global[methodName];if(!method)return false;method.apply(util.global,[].slice.call(arguments,1));return true;};}}();function generatePromiseLifecycleEventObject(name,promise){return{promise:promise};}var eventToObjectGenerator={promiseCreated:generatePromiseLifecycleEventObject,promiseFulfilled:generatePromiseLifecycleEventObject,promiseRejected:generatePromiseLifecycleEventObject,promiseResolved:generatePromiseLifecycleEventObject,promiseCancelled:generatePromiseLifecycleEventObject,promiseChained:function promiseChained(name,promise,child){return{promise:promise,child:child};},warning:function warning(name,_warning){return{warning:_warning};},unhandledRejection:function unhandledRejection(name,reason,promise){return{reason:reason,promise:promise};},rejectionHandled:generatePromiseLifecycleEventObject};var activeFireEvent=function activeFireEvent(name){var globalEventFired=false;try{globalEventFired=fireGlobalEvent.apply(null,arguments);}catch(e){async.throwLater(e);globalEventFired=true;}var domEventFired=false;try{domEventFired=fireDomEvent(name,eventToObjectGenerator[name].apply(null,arguments));}catch(e){async.throwLater(e);domEventFired=true;}return domEventFired||globalEventFired;};Promise.config=function(opts){opts=Object(opts);if("longStackTraces"in opts){if(opts.longStackTraces){Promise.longStackTraces();}else if(!opts.longStackTraces&&Promise.hasLongStackTraces()){disableLongStackTraces();}}if("warnings"in opts){var warningsOption=opts.warnings;config.warnings=!!warningsOption;wForgottenReturn=config.warnings;if(util.isObject(warningsOption)){if("wForgottenReturn"in warningsOption){wForgottenReturn=!!warningsOption.wForgottenReturn;}}}if("cancellation"in opts&&opts.cancellation&&!config.cancellation){if(async.haveItemsQueued()){throw new Error("cannot enable cancellation after promises are in use");}Promise.prototype._clearCancellationData=cancellationClearCancellationData;Promise.prototype._propagateFrom=cancellationPropagateFrom;Promise.prototype._onCancel=cancellationOnCancel;Promise.prototype._setOnCancel=cancellationSetOnCancel;Promise.prototype._attachCancellationCallback=cancellationAttachCancellationCallback;Promise.prototype._execute=cancellationExecute;_propagateFromFunction=cancellationPropagateFrom;config.cancellation=true;}if("monitoring"in opts){if(opts.monitoring&&!config.monitoring){config.monitoring=true;Promise.prototype._fireEvent=activeFireEvent;}else if(!opts.monitoring&&config.monitoring){config.monitoring=false;Promise.prototype._fireEvent=defaultFireEvent;}}return Promise;};function defaultFireEvent(){return false;}Promise.prototype._fireEvent=defaultFireEvent;Promise.prototype._execute=function(executor,resolve,reject){try{executor(resolve,reject);}catch(e){return e;}};Promise.prototype._onCancel=function(){};Promise.prototype._setOnCancel=function(handler){;};Promise.prototype._attachCancellationCallback=function(onCancel){;};Promise.prototype._captureStackTrace=function(){};Promise.prototype._attachExtraTrace=function(){};Promise.prototype._clearCancellationData=function(){};Promise.prototype._propagateFrom=function(parent,flags){;;};function cancellationExecute(executor,resolve,reject){var promise=this;try{executor(resolve,reject,function(onCancel){if(typeof onCancel!=="function"){throw new TypeError("onCancel must be a function, got: "+util.toString(onCancel));}promise._attachCancellationCallback(onCancel);});}catch(e){return e;}}function cancellationAttachCancellationCallback(onCancel){if(!this._isCancellable())return this;var previousOnCancel=this._onCancel();if(previousOnCancel!==undefined){if(util.isArray(previousOnCancel)){previousOnCancel.push(onCancel);}else{this._setOnCancel([previousOnCancel,onCancel]);}}else{this._setOnCancel(onCancel);}}function cancellationOnCancel(){return this._onCancelField;}function cancellationSetOnCancel(onCancel){this._onCancelField=onCancel;}function cancellationClearCancellationData(){this._cancellationParent=undefined;this._onCancelField=undefined;}function cancellationPropagateFrom(parent,flags){if((flags&1)!==0){this._cancellationParent=parent;var branchesRemainingToCancel=parent._branchesRemainingToCancel;if(branchesRemainingToCancel===undefined){branchesRemainingToCancel=0;}parent._branchesRemainingToCancel=branchesRemainingToCancel+1;}if((flags&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}}function bindingPropagateFrom(parent,flags){if((flags&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}}var _propagateFromFunction=bindingPropagateFrom;function _boundValueFunction(){var ret=this._boundTo;if(ret!==undefined){if(ret instanceof Promise){if(ret.isFulfilled()){return ret.value();}else{return undefined;}}}return ret;}function longStackTracesCaptureStackTrace(){this._trace=new CapturedTrace(this._peekContext());}function longStackTracesAttachExtraTrace(error,ignoreSelf){if(canAttachTrace(error)){var trace=this._trace;if(trace!==undefined){if(ignoreSelf)trace=trace._parent;}if(trace!==undefined){trace.attachExtraTrace(error);}else if(!error.__stackCleaned__){var parsed=parseStackAndMessage(error);util.notEnumerableProp(error,"stack",parsed.message+"\n"+parsed.stack.join("\n"));util.notEnumerableProp(error,"__stackCleaned__",true);}}}function checkForgottenReturns(returnValue,promiseCreated,name,promise,parent){if(returnValue===undefined&&promiseCreated!==null&&wForgottenReturn){if(parent!==undefined&&parent._returnedNonUndefined())return;if((promise._bitField&65535)===0)return;if(name)name=name+" ";var handlerLine="";var creatorLine="";if(promiseCreated._trace){var traceLines=promiseCreated._trace.stack.split("\n");var stack=cleanStack(traceLines);for(var i=stack.length-1;i>=0;--i){var line=stack[i];if(!nodeFramePattern.test(line)){var lineMatches=line.match(parseLinePattern);if(lineMatches){handlerLine="at "+lineMatches[1]+":"+lineMatches[2]+":"+lineMatches[3]+" ";}break;}}if(stack.length>0){var firstUserLine=stack[0];for(var i=0;i<traceLines.length;++i){if(traceLines[i]===firstUserLine){if(i>0){creatorLine="\n"+traceLines[i-1];}break;}}}}var msg="a promise was created in a "+name+"handler "+handlerLine+"but was not returned from it, "+"see http://goo.gl/rRqMUw"+creatorLine;promise._warn(msg,true,promiseCreated);}}function deprecated(name,replacement){var message=name+" is deprecated and will be removed in a future version.";if(replacement)message+=" Use "+replacement+" instead.";return warn(message);}function warn(message,shouldUseOwnTrace,promise){if(!config.warnings)return;var warning=new Warning(message);var ctx;if(shouldUseOwnTrace){promise._attachExtraTrace(warning);}else if(config.longStackTraces&&(ctx=Promise._peekContext())){ctx.attachExtraTrace(warning);}else{var parsed=parseStackAndMessage(warning);warning.stack=parsed.message+"\n"+parsed.stack.join("\n");}if(!activeFireEvent("warning",warning)){formatAndLogError(warning,"",true);}}function reconstructStack(message,stacks){for(var i=0;i<stacks.length-1;++i){stacks[i].push("From previous event:");stacks[i]=stacks[i].join("\n");}if(i<stacks.length){stacks[i]=stacks[i].join("\n");}return message+"\n"+stacks.join("\n");}function removeDuplicateOrEmptyJumps(stacks){for(var i=0;i<stacks.length;++i){if(stacks[i].length===0||i+1<stacks.length&&stacks[i][0]===stacks[i+1][0]){stacks.splice(i,1);i--;}}}function removeCommonRoots(stacks){var current=stacks[0];for(var i=1;i<stacks.length;++i){var prev=stacks[i];var currentLastIndex=current.length-1;var currentLastLine=current[currentLastIndex];var commonRootMeetPoint=-1;for(var j=prev.length-1;j>=0;--j){if(prev[j]===currentLastLine){commonRootMeetPoint=j;break;}}for(var j=commonRootMeetPoint;j>=0;--j){var line=prev[j];if(current[currentLastIndex]===line){current.pop();currentLastIndex--;}else{break;}}current=prev;}}function cleanStack(stack){var ret=[];for(var i=0;i<stack.length;++i){var line=stack[i];var isTraceLine="    (No stack trace)"===line||stackFramePattern.test(line);var isInternalFrame=isTraceLine&&shouldIgnore(line);if(isTraceLine&&!isInternalFrame){if(indentStackFrames&&line.charAt(0)!==" "){line="    "+line;}ret.push(line);}}return ret;}function stackFramesAsArray(error){var stack=error.stack.replace(/\s+$/g,"").split("\n");for(var i=0;i<stack.length;++i){var line=stack[i];if("    (No stack trace)"===line||stackFramePattern.test(line)){break;}}if(i>0&&error.name!="SyntaxError"){stack=stack.slice(i);}return stack;}function parseStackAndMessage(error){var stack=error.stack;var message=error.toString();stack=typeof stack==="string"&&stack.length>0?stackFramesAsArray(error):["    (No stack trace)"];return{message:message,stack:error.name=="SyntaxError"?stack:cleanStack(stack)};}function formatAndLogError(error,title,isSoft){if(typeof console!=="undefined"){var message;if(util.isObject(error)){var stack=error.stack;message=title+formatStack(stack,error);}else{message=title+String(error);}if(typeof printWarning==="function"){printWarning(message,isSoft);}else if(typeof console.log==="function"||_typeof(console.log)==="object"){console.log(message);}}}function fireRejectionEvent(name,localHandler,reason,promise){var localEventFired=false;try{if(typeof localHandler==="function"){localEventFired=true;if(name==="rejectionHandled"){localHandler(promise);}else{localHandler(reason,promise);}}}catch(e){async.throwLater(e);}if(name==="unhandledRejection"){if(!activeFireEvent(name,reason,promise)&&!localEventFired){formatAndLogError(reason,"Unhandled rejection ");}}else{activeFireEvent(name,promise);}}function formatNonError(obj){var str;if(typeof obj==="function"){str="[function "+(obj.name||"anonymous")+"]";}else{str=obj&&typeof obj.toString==="function"?obj.toString():util.toString(obj);var ruselessToString=/\[object [a-zA-Z0-9$_]+\]/;if(ruselessToString.test(str)){try{var newStr=JSON.stringify(obj);str=newStr;}catch(e){}}if(str.length===0){str="(empty array)";}}return"(<"+snip(str)+">, no stack trace)";}function snip(str){var maxChars=41;if(str.length<maxChars){return str;}return str.substr(0,maxChars-3)+"...";}function longStackTracesIsSupported(){return typeof captureStackTrace==="function";}var shouldIgnore=function shouldIgnore(){return false;};var parseLineInfoRegex=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function parseLineInfo(line){var matches=line.match(parseLineInfoRegex);if(matches){return{fileName:matches[1],line:parseInt(matches[2],10)};}}function setBounds(firstLineError,lastLineError){if(!longStackTracesIsSupported())return;var firstStackLines=firstLineError.stack.split("\n");var lastStackLines=lastLineError.stack.split("\n");var firstIndex=-1;var lastIndex=-1;var firstFileName;var lastFileName;for(var i=0;i<firstStackLines.length;++i){var result=parseLineInfo(firstStackLines[i]);if(result){firstFileName=result.fileName;firstIndex=result.line;break;}}for(var i=0;i<lastStackLines.length;++i){var result=parseLineInfo(lastStackLines[i]);if(result){lastFileName=result.fileName;lastIndex=result.line;break;}}if(firstIndex<0||lastIndex<0||!firstFileName||!lastFileName||firstFileName!==lastFileName||firstIndex>=lastIndex){return;}shouldIgnore=function shouldIgnore(line){if(bluebirdFramePattern.test(line))return true;var info=parseLineInfo(line);if(info){if(info.fileName===firstFileName&&firstIndex<=info.line&&info.line<=lastIndex){return true;}}return false;};}function CapturedTrace(parent){this._parent=parent;this._promisesCreated=0;var length=this._length=1+(parent===undefined?0:parent._length);captureStackTrace(this,CapturedTrace);if(length>32)this.uncycle();}util.inherits(CapturedTrace,Error);Context.CapturedTrace=CapturedTrace;CapturedTrace.prototype.uncycle=function(){var length=this._length;if(length<2)return;var nodes=[];var stackToIndex={};for(var i=0,node=this;node!==undefined;++i){nodes.push(node);node=node._parent;}length=this._length=i;for(var i=length-1;i>=0;--i){var stack=nodes[i].stack;if(stackToIndex[stack]===undefined){stackToIndex[stack]=i;}}for(var i=0;i<length;++i){var currentStack=nodes[i].stack;var index=stackToIndex[currentStack];if(index!==undefined&&index!==i){if(index>0){nodes[index-1]._parent=undefined;nodes[index-1]._length=1;}nodes[i]._parent=undefined;nodes[i]._length=1;var cycleEdgeNode=i>0?nodes[i-1]:this;if(index<length-1){cycleEdgeNode._parent=nodes[index+1];cycleEdgeNode._parent.uncycle();cycleEdgeNode._length=cycleEdgeNode._parent._length+1;}else{cycleEdgeNode._parent=undefined;cycleEdgeNode._length=1;}var currentChildLength=cycleEdgeNode._length+1;for(var j=i-2;j>=0;--j){nodes[j]._length=currentChildLength;currentChildLength++;}return;}}};CapturedTrace.prototype.attachExtraTrace=function(error){if(error.__stackCleaned__)return;this.uncycle();var parsed=parseStackAndMessage(error);var message=parsed.message;var stacks=[parsed.stack];var trace=this;while(trace!==undefined){stacks.push(cleanStack(trace.stack.split("\n")));trace=trace._parent;}removeCommonRoots(stacks);removeDuplicateOrEmptyJumps(stacks);util.notEnumerableProp(error,"stack",reconstructStack(message,stacks));util.notEnumerableProp(error,"__stackCleaned__",true);};var captureStackTrace=function stackDetection(){var v8stackFramePattern=/^\s*at\s*/;var v8stackFormatter=function v8stackFormatter(stack,error){if(typeof stack==="string")return stack;if(error.name!==undefined&&error.message!==undefined){return error.toString();}return formatNonError(error);};if(typeof Error.stackTraceLimit==="number"&&typeof Error.captureStackTrace==="function"){Error.stackTraceLimit+=6;stackFramePattern=v8stackFramePattern;formatStack=v8stackFormatter;var captureStackTrace=Error.captureStackTrace;shouldIgnore=function shouldIgnore(line){return bluebirdFramePattern.test(line);};return function(receiver,ignoreUntil){Error.stackTraceLimit+=6;captureStackTrace(receiver,ignoreUntil);Error.stackTraceLimit-=6;};}var err=new Error();if(typeof err.stack==="string"&&err.stack.split("\n")[0].indexOf("stackDetection@")>=0){stackFramePattern=/@/;formatStack=v8stackFormatter;indentStackFrames=true;return function captureStackTrace(o){o.stack=new Error().stack;};}var hasStackAfterThrow;try{throw new Error();}catch(e){hasStackAfterThrow="stack"in e;}if(!("stack"in err)&&hasStackAfterThrow&&typeof Error.stackTraceLimit==="number"){stackFramePattern=v8stackFramePattern;formatStack=v8stackFormatter;return function captureStackTrace(o){Error.stackTraceLimit+=6;try{throw new Error();}catch(e){o.stack=e.stack;}Error.stackTraceLimit-=6;};}formatStack=function formatStack(stack,error){if(typeof stack==="string")return stack;if(((typeof error==="undefined"?"undefined":_typeof(error))==="object"||typeof error==="function")&&error.name!==undefined&&error.message!==undefined){return error.toString();}return formatNonError(error);};return null;}([]);if(typeof console!=="undefined"&&typeof console.warn!=="undefined"){printWarning=function printWarning(message){console.warn(message);};if(util.isNode&&process.stderr.isTTY){printWarning=function printWarning(message,isSoft){var color=isSoft?"\x1B[33m":"\x1B[31m";console.warn(color+message+"\x1B[0m\n");};}else if(!util.isNode&&typeof new Error().stack==="string"){printWarning=function printWarning(message,isSoft){console.warn("%c"+message,isSoft?"color: darkorange":"color: red");};}}var config={warnings:warnings,longStackTraces:false,cancellation:false,monitoring:false};if(longStackTraces)Promise.longStackTraces();return{longStackTraces:function longStackTraces(){return config.longStackTraces;},warnings:function warnings(){return config.warnings;},cancellation:function cancellation(){return config.cancellation;},monitoring:function monitoring(){return config.monitoring;},propagateFromFunction:function propagateFromFunction(){return _propagateFromFunction;},boundValueFunction:function boundValueFunction(){return _boundValueFunction;},checkForgottenReturns:checkForgottenReturns,setBounds:setBounds,warn:warn,deprecated:deprecated,CapturedTrace:CapturedTrace,fireDomEvent:fireDomEvent,fireGlobalEvent:fireGlobalEvent};};},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){function returner(){return this.value;}function thrower(){throw this.reason;}Promise.prototype["return"]=Promise.prototype.thenReturn=function(value){if(value instanceof Promise)value.suppressUnhandledRejections();return this._then(returner,undefined,undefined,{value:value},undefined);};Promise.prototype["throw"]=Promise.prototype.thenThrow=function(reason){return this._then(thrower,undefined,undefined,{reason:reason},undefined);};Promise.prototype.catchThrow=function(reason){if(arguments.length<=1){return this._then(undefined,thrower,undefined,{reason:reason},undefined);}else{var _reason=arguments[1];var handler=function handler(){throw _reason;};return this.caught(reason,handler);}};Promise.prototype.catchReturn=function(value){if(arguments.length<=1){if(value instanceof Promise)value.suppressUnhandledRejections();return this._then(undefined,returner,undefined,{value:value},undefined);}else{var _value=arguments[1];if(_value instanceof Promise)_value.suppressUnhandledRejections();var handler=function handler(){return _value;};return this.caught(value,handler);}};};},{}],11:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var PromiseReduce=Promise.reduce;var PromiseAll=Promise.all;function promiseAllThis(){return PromiseAll(this);}function PromiseMapSeries(promises,fn){return PromiseReduce(promises,fn,INTERNAL,INTERNAL);}Promise.prototype.each=function(fn){return PromiseReduce(this,fn,INTERNAL,0)._then(promiseAllThis,undefined,undefined,this,undefined);};Promise.prototype.mapSeries=function(fn){return PromiseReduce(this,fn,INTERNAL,INTERNAL);};Promise.each=function(promises,fn){return PromiseReduce(promises,fn,INTERNAL,0)._then(promiseAllThis,undefined,undefined,promises,undefined);};Promise.mapSeries=PromiseMapSeries;};},{}],12:[function(_dereq_,module,exports){"use strict";var es5=_dereq_("./es5");var Objectfreeze=es5.freeze;var util=_dereq_("./util");var inherits=util.inherits;var notEnumerableProp=util.notEnumerableProp;function subError(nameProperty,defaultMessage){function SubError(message){if(!(this instanceof SubError))return new SubError(message);notEnumerableProp(this,"message",typeof message==="string"?message:defaultMessage);notEnumerableProp(this,"name",nameProperty);if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}else{Error.call(this);}}inherits(SubError,Error);return SubError;}var _TypeError,_RangeError;var Warning=subError("Warning","warning");var CancellationError=subError("CancellationError","cancellation error");var TimeoutError=subError("TimeoutError","timeout error");var AggregateError=subError("AggregateError","aggregate error");try{_TypeError=TypeError;_RangeError=RangeError;}catch(e){_TypeError=subError("TypeError","type error");_RangeError=subError("RangeError","range error");}var methods=("join pop push shift unshift slice filter forEach some "+"every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");for(var i=0;i<methods.length;++i){if(typeof Array.prototype[methods[i]]==="function"){AggregateError.prototype[methods[i]]=Array.prototype[methods[i]];}}es5.defineProperty(AggregateError.prototype,"length",{value:0,configurable:false,writable:true,enumerable:true});AggregateError.prototype["isOperational"]=true;var level=0;AggregateError.prototype.toString=function(){var indent=Array(level*4+1).join(" ");var ret="\n"+indent+"AggregateError of:"+"\n";level++;indent=Array(level*4+1).join(" ");for(var i=0;i<this.length;++i){var str=this[i]===this?"[Circular AggregateError]":this[i]+"";var lines=str.split("\n");for(var j=0;j<lines.length;++j){lines[j]=indent+lines[j];}str=lines.join("\n");ret+=str+"\n";}level--;return ret;};function OperationalError(message){if(!(this instanceof OperationalError))return new OperationalError(message);notEnumerableProp(this,"name","OperationalError");notEnumerableProp(this,"message",message);this.cause=message;this["isOperational"]=true;if(message instanceof Error){notEnumerableProp(this,"message",message.message);notEnumerableProp(this,"stack",message.stack);}else if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}}inherits(OperationalError,Error);var errorTypes=Error["__BluebirdErrorTypes__"];if(!errorTypes){errorTypes=Objectfreeze({CancellationError:CancellationError,TimeoutError:TimeoutError,OperationalError:OperationalError,RejectionError:OperationalError,AggregateError:AggregateError});es5.defineProperty(Error,"__BluebirdErrorTypes__",{value:errorTypes,writable:false,enumerable:false,configurable:false});}module.exports={Error:Error,TypeError:_TypeError,RangeError:_RangeError,CancellationError:errorTypes.CancellationError,OperationalError:errorTypes.OperationalError,TimeoutError:errorTypes.TimeoutError,AggregateError:errorTypes.AggregateError,Warning:Warning};},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){var isES5=function(){"use strict";return this===undefined;}();if(isES5){module.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:isES5,propertyIsWritable:function propertyIsWritable(obj,prop){var descriptor=Object.getOwnPropertyDescriptor(obj,prop);return!!(!descriptor||descriptor.writable||descriptor.set);}};}else{var has={}.hasOwnProperty;var str={}.toString;var proto={}.constructor.prototype;var ObjectKeys=function ObjectKeys(o){var ret=[];for(var key in o){if(has.call(o,key)){ret.push(key);}}return ret;};var ObjectGetDescriptor=function ObjectGetDescriptor(o,key){return{value:o[key]};};var ObjectDefineProperty=function ObjectDefineProperty(o,key,desc){o[key]=desc.value;return o;};var ObjectFreeze=function ObjectFreeze(obj){return obj;};var ObjectGetPrototypeOf=function ObjectGetPrototypeOf(obj){try{return Object(obj).constructor.prototype;}catch(e){return proto;}};var ArrayIsArray=function ArrayIsArray(obj){try{return str.call(obj)==="[object Array]";}catch(e){return false;}};module.exports={isArray:ArrayIsArray,keys:ObjectKeys,names:ObjectKeys,defineProperty:ObjectDefineProperty,getDescriptor:ObjectGetDescriptor,freeze:ObjectFreeze,getPrototypeOf:ObjectGetPrototypeOf,isES5:isES5,propertyIsWritable:function propertyIsWritable(){return true;}};}},{}],14:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var PromiseMap=Promise.map;Promise.prototype.filter=function(fn,options){return PromiseMap(this,fn,options,INTERNAL);};Promise.filter=function(promises,fn,options){return PromiseMap(promises,fn,options,INTERNAL);};};},{}],15:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,tryConvertToPromise,NEXT_FILTER){var util=_dereq_("./util");var CancellationError=Promise.CancellationError;var errorObj=util.errorObj;var catchFilter=_dereq_("./catch_filter")(NEXT_FILTER);function PassThroughHandlerContext(promise,type,handler){this.promise=promise;this.type=type;this.handler=handler;this.called=false;this.cancelPromise=null;}PassThroughHandlerContext.prototype.isFinallyHandler=function(){return this.type===0;};function FinallyHandlerCancelReaction(finallyHandler){this.finallyHandler=finallyHandler;}FinallyHandlerCancelReaction.prototype._resultCancelled=function(){checkCancel(this.finallyHandler);};function checkCancel(ctx,reason){if(ctx.cancelPromise!=null){if(arguments.length>1){ctx.cancelPromise._reject(reason);}else{ctx.cancelPromise._cancel();}ctx.cancelPromise=null;return true;}return false;}function succeed(){return finallyHandler.call(this,this.promise._target()._settledValue());}function fail(reason){if(checkCancel(this,reason))return;errorObj.e=reason;return errorObj;}function finallyHandler(reasonOrValue){var promise=this.promise;var handler=this.handler;if(!this.called){this.called=true;var ret=this.isFinallyHandler()?handler.call(promise._boundValue()):handler.call(promise._boundValue(),reasonOrValue);if(ret===NEXT_FILTER){return ret;}else if(ret!==undefined){promise._setReturnedNonUndefined();var maybePromise=tryConvertToPromise(ret,promise);if(maybePromise instanceof Promise){if(this.cancelPromise!=null){if(maybePromise._isCancelled()){var reason=new CancellationError("late cancellation observer");promise._attachExtraTrace(reason);errorObj.e=reason;return errorObj;}else if(maybePromise.isPending()){maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));}}return maybePromise._then(succeed,fail,undefined,this,undefined);}}}if(promise.isRejected()){checkCancel(this);errorObj.e=reasonOrValue;return errorObj;}else{checkCancel(this);return reasonOrValue;}}Promise.prototype._passThrough=function(handler,type,success,fail){if(typeof handler!=="function")return this.then();return this._then(success,fail,undefined,new PassThroughHandlerContext(this,type,handler),undefined);};Promise.prototype.lastly=Promise.prototype["finally"]=function(handler){return this._passThrough(handler,0,finallyHandler,finallyHandler);};Promise.prototype.tap=function(handler){return this._passThrough(handler,1,finallyHandler);};Promise.prototype.tapCatch=function(handlerOrPredicate){var len=arguments.length;if(len===1){return this._passThrough(handlerOrPredicate,1,undefined,finallyHandler);}else{var catchInstances=new Array(len-1),j=0,i;for(i=0;i<len-1;++i){var item=arguments[i];if(util.isObject(item)){catchInstances[j++]=item;}else{return Promise.reject(new TypeError("tapCatch statement predicate: "+"expecting an object but got "+util.classString(item)));}}catchInstances.length=j;var handler=arguments[i];return this._passThrough(catchFilter(catchInstances,handler,this),1,undefined,finallyHandler);}};return PassThroughHandlerContext;};},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,apiRejection,INTERNAL,tryConvertToPromise,Proxyable,debug){var errors=_dereq_("./errors");var TypeError=errors.TypeError;var util=_dereq_("./util");var errorObj=util.errorObj;var tryCatch=util.tryCatch;var yieldHandlers=[];function promiseFromYieldHandler(value,yieldHandlers,traceParent){for(var i=0;i<yieldHandlers.length;++i){traceParent._pushContext();var result=tryCatch(yieldHandlers[i])(value);traceParent._popContext();if(result===errorObj){traceParent._pushContext();var ret=Promise.reject(errorObj.e);traceParent._popContext();return ret;}var maybePromise=tryConvertToPromise(result,traceParent);if(maybePromise instanceof Promise)return maybePromise;}return null;}function PromiseSpawn(generatorFunction,receiver,yieldHandler,stack){if(debug.cancellation()){var internal=new Promise(INTERNAL);var _finallyPromise=this._finallyPromise=new Promise(INTERNAL);this._promise=internal.lastly(function(){return _finallyPromise;});internal._captureStackTrace();internal._setOnCancel(this);}else{var promise=this._promise=new Promise(INTERNAL);promise._captureStackTrace();}this._stack=stack;this._generatorFunction=generatorFunction;this._receiver=receiver;this._generator=undefined;this._yieldHandlers=typeof yieldHandler==="function"?[yieldHandler].concat(yieldHandlers):yieldHandlers;this._yieldedPromise=null;this._cancellationPhase=false;}util.inherits(PromiseSpawn,Proxyable);PromiseSpawn.prototype._isResolved=function(){return this._promise===null;};PromiseSpawn.prototype._cleanup=function(){this._promise=this._generator=null;if(debug.cancellation()&&this._finallyPromise!==null){this._finallyPromise._fulfill();this._finallyPromise=null;}};PromiseSpawn.prototype._promiseCancelled=function(){if(this._isResolved())return;var implementsReturn=typeof this._generator["return"]!=="undefined";var result;if(!implementsReturn){var reason=new Promise.CancellationError("generator .return() sentinel");Promise.coroutine.returnSentinel=reason;this._promise._attachExtraTrace(reason);this._promise._pushContext();result=tryCatch(this._generator["throw"]).call(this._generator,reason);this._promise._popContext();}else{this._promise._pushContext();result=tryCatch(this._generator["return"]).call(this._generator,undefined);this._promise._popContext();}this._cancellationPhase=true;this._yieldedPromise=null;this._continue(result);};PromiseSpawn.prototype._promiseFulfilled=function(value){this._yieldedPromise=null;this._promise._pushContext();var result=tryCatch(this._generator.next).call(this._generator,value);this._promise._popContext();this._continue(result);};PromiseSpawn.prototype._promiseRejected=function(reason){this._yieldedPromise=null;this._promise._attachExtraTrace(reason);this._promise._pushContext();var result=tryCatch(this._generator["throw"]).call(this._generator,reason);this._promise._popContext();this._continue(result);};PromiseSpawn.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof Promise){var promise=this._yieldedPromise;this._yieldedPromise=null;promise.cancel();}};PromiseSpawn.prototype.promise=function(){return this._promise;};PromiseSpawn.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver);this._receiver=this._generatorFunction=undefined;this._promiseFulfilled(undefined);};PromiseSpawn.prototype._continue=function(result){var promise=this._promise;if(result===errorObj){this._cleanup();if(this._cancellationPhase){return promise.cancel();}else{return promise._rejectCallback(result.e,false);}}var value=result.value;if(result.done===true){this._cleanup();if(this._cancellationPhase){return promise.cancel();}else{return promise._resolveCallback(value);}}else{var maybePromise=tryConvertToPromise(value,this._promise);if(!(maybePromise instanceof Promise)){maybePromise=promiseFromYieldHandler(maybePromise,this._yieldHandlers,this._promise);if(maybePromise===null){this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s",String(value))+"From coroutine:\n"+this._stack.split("\n").slice(1,-7).join("\n")));return;}}maybePromise=maybePromise._target();var bitField=maybePromise._bitField;;if((bitField&50397184)===0){this._yieldedPromise=maybePromise;maybePromise._proxy(this,null);}else if((bitField&33554432)!==0){Promise._async.invoke(this._promiseFulfilled,this,maybePromise._value());}else if((bitField&16777216)!==0){Promise._async.invoke(this._promiseRejected,this,maybePromise._reason());}else{this._promiseCancelled();}}};Promise.coroutine=function(generatorFunction,options){if(typeof generatorFunction!=="function"){throw new TypeError("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");}var yieldHandler=Object(options).yieldHandler;var PromiseSpawn$=PromiseSpawn;var stack=new Error().stack;return function(){var generator=generatorFunction.apply(this,arguments);var spawn=new PromiseSpawn$(undefined,undefined,yieldHandler,stack);var ret=spawn.promise();spawn._generator=generator;spawn._promiseFulfilled(undefined);return ret;};};Promise.coroutine.addYieldHandler=function(fn){if(typeof fn!=="function"){throw new TypeError("expecting a function but got "+util.classString(fn));}yieldHandlers.push(fn);};Promise.spawn=function(generatorFunction){debug.deprecated("Promise.spawn()","Promise.coroutine()");if(typeof generatorFunction!=="function"){return apiRejection("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");}var spawn=new PromiseSpawn(generatorFunction,this);var ret=spawn.promise();spawn._run(Promise.spawn);return ret;};};},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,tryConvertToPromise,INTERNAL,async,getDomain){var util=_dereq_("./util");var canEvaluate=util.canEvaluate;var tryCatch=util.tryCatch;var errorObj=util.errorObj;var reject;if(!true){if(canEvaluate){var thenCallback=function thenCallback(i){return new Function("value","holder","                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g,i));};var promiseSetter=function promiseSetter(i){return new Function("promise","holder","                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g,i));};var generateHolderClass=function generateHolderClass(total){var props=new Array(total);for(var i=0;i<props.length;++i){props[i]="this.p"+(i+1);}var assignment=props.join(" = ")+" = null;";var cancellationCode="var promise;\n"+props.map(function(prop){return"                                                         \n\
                promise = "+prop+";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";}).join("\n");var passedArguments=props.join(", ");var name="Holder$"+total;var code="return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";code=code.replace(/\[TheName\]/g,name).replace(/\[TheTotal\]/g,total).replace(/\[ThePassedArguments\]/g,passedArguments).replace(/\[TheProperties\]/g,assignment).replace(/\[CancellationCode\]/g,cancellationCode);return new Function("tryCatch","errorObj","Promise","async",code)(tryCatch,errorObj,Promise,async);};var holderClasses=[];var thenCallbacks=[];var promiseSetters=[];for(var i=0;i<8;++i){holderClasses.push(generateHolderClass(i+1));thenCallbacks.push(thenCallback(i+1));promiseSetters.push(promiseSetter(i+1));}reject=function reject(reason){this._reject(reason);};}}Promise.join=function(){var last=arguments.length-1;var fn;if(last>0&&typeof arguments[last]==="function"){fn=arguments[last];if(!true){if(last<=8&&canEvaluate){var ret=new Promise(INTERNAL);ret._captureStackTrace();var HolderClass=holderClasses[last-1];var holder=new HolderClass(fn);var callbacks=thenCallbacks;for(var i=0;i<last;++i){var maybePromise=tryConvertToPromise(arguments[i],ret);if(maybePromise instanceof Promise){maybePromise=maybePromise._target();var bitField=maybePromise._bitField;;if((bitField&50397184)===0){maybePromise._then(callbacks[i],reject,undefined,ret,holder);promiseSetters[i](maybePromise,holder);holder.asyncNeeded=false;}else if((bitField&33554432)!==0){callbacks[i].call(ret,maybePromise._value(),holder);}else if((bitField&16777216)!==0){ret._reject(maybePromise._reason());}else{ret._cancel();}}else{callbacks[i].call(ret,maybePromise,holder);}}if(!ret._isFateSealed()){if(holder.asyncNeeded){var domain=getDomain();if(domain!==null){holder.fn=util.domainBind(domain,holder.fn);}}ret._setAsyncGuaranteed();ret._setOnCancel(holder);}return ret;}}}var args=[].slice.call(arguments);;if(fn)args.pop();var ret=new PromiseArray(args).promise();return fn!==undefined?ret.spread(fn):ret;};};},{"./util":36}],18:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug){var getDomain=Promise._getDomain;var util=_dereq_("./util");var tryCatch=util.tryCatch;var errorObj=util.errorObj;var async=Promise._async;function MappingPromiseArray(promises,fn,limit,_filter){this.constructor$(promises);this._promise._captureStackTrace();var domain=getDomain();this._callback=domain===null?fn:util.domainBind(domain,fn);this._preservedValues=_filter===INTERNAL?new Array(this.length()):null;this._limit=limit;this._inFlight=0;this._queue=[];async.invoke(this._asyncInit,this,undefined);}util.inherits(MappingPromiseArray,PromiseArray);MappingPromiseArray.prototype._asyncInit=function(){this._init$(undefined,-2);};MappingPromiseArray.prototype._init=function(){};MappingPromiseArray.prototype._promiseFulfilled=function(value,index){var values=this._values;var length=this.length();var preservedValues=this._preservedValues;var limit=this._limit;if(index<0){index=index*-1-1;values[index]=value;if(limit>=1){this._inFlight--;this._drainQueue();if(this._isResolved())return true;}}else{if(limit>=1&&this._inFlight>=limit){values[index]=value;this._queue.push(index);return false;}if(preservedValues!==null)preservedValues[index]=value;var promise=this._promise;var callback=this._callback;var receiver=promise._boundValue();promise._pushContext();var ret=tryCatch(callback).call(receiver,value,index,length);var promiseCreated=promise._popContext();debug.checkForgottenReturns(ret,promiseCreated,preservedValues!==null?"Promise.filter":"Promise.map",promise);if(ret===errorObj){this._reject(ret.e);return true;}var maybePromise=tryConvertToPromise(ret,this._promise);if(maybePromise instanceof Promise){maybePromise=maybePromise._target();var bitField=maybePromise._bitField;;if((bitField&50397184)===0){if(limit>=1)this._inFlight++;values[index]=maybePromise;maybePromise._proxy(this,(index+1)*-1);return false;}else if((bitField&33554432)!==0){ret=maybePromise._value();}else if((bitField&16777216)!==0){this._reject(maybePromise._reason());return true;}else{this._cancel();return true;}}values[index]=ret;}var totalResolved=++this._totalResolved;if(totalResolved>=length){if(preservedValues!==null){this._filter(values,preservedValues);}else{this._resolve(values);}return true;}return false;};MappingPromiseArray.prototype._drainQueue=function(){var queue=this._queue;var limit=this._limit;var values=this._values;while(queue.length>0&&this._inFlight<limit){if(this._isResolved())return;var index=queue.pop();this._promiseFulfilled(values[index],index);}};MappingPromiseArray.prototype._filter=function(booleans,values){var len=values.length;var ret=new Array(len);var j=0;for(var i=0;i<len;++i){if(booleans[i])ret[j++]=values[i];}ret.length=j;this._resolve(ret);};MappingPromiseArray.prototype.preservedValues=function(){return this._preservedValues;};function map(promises,fn,options,_filter){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var limit=0;if(options!==undefined){if((typeof options==="undefined"?"undefined":_typeof(options))==="object"&&options!==null){if(typeof options.concurrency!=="number"){return Promise.reject(new TypeError("'concurrency' must be a number but it is "+util.classString(options.concurrency)));}limit=options.concurrency;}else{return Promise.reject(new TypeError("options argument must be an object but it is "+util.classString(options)));}}limit=typeof limit==="number"&&isFinite(limit)&&limit>=1?limit:0;return new MappingPromiseArray(promises,fn,limit,_filter).promise();}Promise.prototype.map=function(fn,options){return map(this,fn,options,null);};Promise.map=function(promises,fn,options,_filter){return map(promises,fn,options,_filter);};};},{"./util":36}],19:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,apiRejection,debug){var util=_dereq_("./util");var tryCatch=util.tryCatch;Promise.method=function(fn){if(typeof fn!=="function"){throw new Promise.TypeError("expecting a function but got "+util.classString(fn));}return function(){var ret=new Promise(INTERNAL);ret._captureStackTrace();ret._pushContext();var value=tryCatch(fn).apply(this,arguments);var promiseCreated=ret._popContext();debug.checkForgottenReturns(value,promiseCreated,"Promise.method",ret);ret._resolveFromSyncValue(value);return ret;};};Promise.attempt=Promise["try"]=function(fn){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var ret=new Promise(INTERNAL);ret._captureStackTrace();ret._pushContext();var value;if(arguments.length>1){debug.deprecated("calling Promise.try with more than 1 argument");var arg=arguments[1];var ctx=arguments[2];value=util.isArray(arg)?tryCatch(fn).apply(ctx,arg):tryCatch(fn).call(ctx,arg);}else{value=tryCatch(fn)();}var promiseCreated=ret._popContext();debug.checkForgottenReturns(value,promiseCreated,"Promise.try",ret);ret._resolveFromSyncValue(value);return ret;};Promise.prototype._resolveFromSyncValue=function(value){if(value===util.errorObj){this._rejectCallback(value.e,false);}else{this._resolveCallback(value,true);}};};},{"./util":36}],20:[function(_dereq_,module,exports){"use strict";var util=_dereq_("./util");var maybeWrapAsError=util.maybeWrapAsError;var errors=_dereq_("./errors");var OperationalError=errors.OperationalError;var es5=_dereq_("./es5");function isUntypedError(obj){return obj instanceof Error&&es5.getPrototypeOf(obj)===Error.prototype;}var rErrorKey=/^(?:name|message|stack|cause)$/;function wrapAsOperationalError(obj){var ret;if(isUntypedError(obj)){ret=new OperationalError(obj);ret.name=obj.name;ret.message=obj.message;ret.stack=obj.stack;var keys=es5.keys(obj);for(var i=0;i<keys.length;++i){var key=keys[i];if(!rErrorKey.test(key)){ret[key]=obj[key];}}return ret;}util.markAsOriginatingFromRejection(obj);return obj;}function nodebackForPromise(promise,multiArgs){return function(err,value){if(promise===null)return;if(err){var wrapped=wrapAsOperationalError(maybeWrapAsError(err));promise._attachExtraTrace(wrapped);promise._reject(wrapped);}else if(!multiArgs){promise._fulfill(value);}else{var args=[].slice.call(arguments,1);;promise._fulfill(args);}promise=null;};}module.exports=nodebackForPromise;},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){var util=_dereq_("./util");var async=Promise._async;var tryCatch=util.tryCatch;var errorObj=util.errorObj;function spreadAdapter(val,nodeback){var promise=this;if(!util.isArray(val))return successAdapter.call(promise,val,nodeback);var ret=tryCatch(nodeback).apply(promise._boundValue(),[null].concat(val));if(ret===errorObj){async.throwLater(ret.e);}}function successAdapter(val,nodeback){var promise=this;var receiver=promise._boundValue();var ret=val===undefined?tryCatch(nodeback).call(receiver,null):tryCatch(nodeback).call(receiver,null,val);if(ret===errorObj){async.throwLater(ret.e);}}function errorAdapter(reason,nodeback){var promise=this;if(!reason){var newReason=new Error(reason+"");newReason.cause=reason;reason=newReason;}var ret=tryCatch(nodeback).call(promise._boundValue(),reason);if(ret===errorObj){async.throwLater(ret.e);}}Promise.prototype.asCallback=Promise.prototype.nodeify=function(nodeback,options){if(typeof nodeback=="function"){var adapter=successAdapter;if(options!==undefined&&Object(options).spread){adapter=spreadAdapter;}this._then(adapter,errorAdapter,undefined,this,nodeback);}return this;};};},{"./util":36}],22:[function(_dereq_,module,exports){"use strict";module.exports=function(){var makeSelfResolutionError=function makeSelfResolutionError(){return new TypeError("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");};var reflectHandler=function reflectHandler(){return new Promise.PromiseInspection(this._target());};var apiRejection=function apiRejection(msg){return Promise.reject(new TypeError(msg));};function Proxyable(){}var UNDEFINED_BINDING={};var util=_dereq_("./util");var getDomain;if(util.isNode){getDomain=function getDomain(){var ret=process.domain;if(ret===undefined)ret=null;return ret;};}else{getDomain=function getDomain(){return null;};}util.notEnumerableProp(Promise,"_getDomain",getDomain);var es5=_dereq_("./es5");var Async=_dereq_("./async");var async=new Async();es5.defineProperty(Promise,"_async",{value:async});var errors=_dereq_("./errors");var TypeError=Promise.TypeError=errors.TypeError;Promise.RangeError=errors.RangeError;var CancellationError=Promise.CancellationError=errors.CancellationError;Promise.TimeoutError=errors.TimeoutError;Promise.OperationalError=errors.OperationalError;Promise.RejectionError=errors.OperationalError;Promise.AggregateError=errors.AggregateError;var INTERNAL=function INTERNAL(){};var APPLY={};var NEXT_FILTER={};var tryConvertToPromise=_dereq_("./thenables")(Promise,INTERNAL);var PromiseArray=_dereq_("./promise_array")(Promise,INTERNAL,tryConvertToPromise,apiRejection,Proxyable);var Context=_dereq_("./context")(Promise);/*jshint unused:false*/var createContext=Context.create;var debug=_dereq_("./debuggability")(Promise,Context);var CapturedTrace=debug.CapturedTrace;var PassThroughHandlerContext=_dereq_("./finally")(Promise,tryConvertToPromise,NEXT_FILTER);var catchFilter=_dereq_("./catch_filter")(NEXT_FILTER);var nodebackForPromise=_dereq_("./nodeback");var errorObj=util.errorObj;var tryCatch=util.tryCatch;function check(self,executor){if(self==null||self.constructor!==Promise){throw new TypeError("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");}if(typeof executor!=="function"){throw new TypeError("expecting a function but got "+util.classString(executor));}}function Promise(executor){if(executor!==INTERNAL){check(this,executor);}this._bitField=0;this._fulfillmentHandler0=undefined;this._rejectionHandler0=undefined;this._promise0=undefined;this._receiver0=undefined;this._resolveFromExecutor(executor);this._promiseCreated();this._fireEvent("promiseCreated",this);}Promise.prototype.toString=function(){return"[object Promise]";};Promise.prototype.caught=Promise.prototype["catch"]=function(fn){var len=arguments.length;if(len>1){var catchInstances=new Array(len-1),j=0,i;for(i=0;i<len-1;++i){var item=arguments[i];if(util.isObject(item)){catchInstances[j++]=item;}else{return apiRejection("Catch statement predicate: "+"expecting an object but got "+util.classString(item));}}catchInstances.length=j;fn=arguments[i];return this.then(undefined,catchFilter(catchInstances,fn,this));}return this.then(undefined,fn);};Promise.prototype.reflect=function(){return this._then(reflectHandler,reflectHandler,undefined,this,undefined);};Promise.prototype.then=function(didFulfill,didReject){if(debug.warnings()&&arguments.length>0&&typeof didFulfill!=="function"&&typeof didReject!=="function"){var msg=".then() only accepts functions but was passed: "+util.classString(didFulfill);if(arguments.length>1){msg+=", "+util.classString(didReject);}this._warn(msg);}return this._then(didFulfill,didReject,undefined,undefined,undefined);};Promise.prototype.done=function(didFulfill,didReject){var promise=this._then(didFulfill,didReject,undefined,undefined,undefined);promise._setIsFinal();};Promise.prototype.spread=function(fn){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}return this.all()._then(fn,undefined,undefined,APPLY,undefined);};Promise.prototype.toJSON=function(){var ret={isFulfilled:false,isRejected:false,fulfillmentValue:undefined,rejectionReason:undefined};if(this.isFulfilled()){ret.fulfillmentValue=this.value();ret.isFulfilled=true;}else if(this.isRejected()){ret.rejectionReason=this.reason();ret.isRejected=true;}return ret;};Promise.prototype.all=function(){if(arguments.length>0){this._warn(".all() was passed arguments but it does not take any");}return new PromiseArray(this).promise();};Promise.prototype.error=function(fn){return this.caught(util.originatesFromRejection,fn);};Promise.getNewLibraryCopy=module.exports;Promise.is=function(val){return val instanceof Promise;};Promise.fromNode=Promise.fromCallback=function(fn){var ret=new Promise(INTERNAL);ret._captureStackTrace();var multiArgs=arguments.length>1?!!Object(arguments[1]).multiArgs:false;var result=tryCatch(fn)(nodebackForPromise(ret,multiArgs));if(result===errorObj){ret._rejectCallback(result.e,true);}if(!ret._isFateSealed())ret._setAsyncGuaranteed();return ret;};Promise.all=function(promises){return new PromiseArray(promises).promise();};Promise.cast=function(obj){var ret=tryConvertToPromise(obj);if(!(ret instanceof Promise)){ret=new Promise(INTERNAL);ret._captureStackTrace();ret._setFulfilled();ret._rejectionHandler0=obj;}return ret;};Promise.resolve=Promise.fulfilled=Promise.cast;Promise.reject=Promise.rejected=function(reason){var ret=new Promise(INTERNAL);ret._captureStackTrace();ret._rejectCallback(reason,true);return ret;};Promise.setScheduler=function(fn){if(typeof fn!=="function"){throw new TypeError("expecting a function but got "+util.classString(fn));}return async.setScheduler(fn);};Promise.prototype._then=function(didFulfill,didReject,_,receiver,internalData){var haveInternalData=internalData!==undefined;var promise=haveInternalData?internalData:new Promise(INTERNAL);var target=this._target();var bitField=target._bitField;if(!haveInternalData){promise._propagateFrom(this,3);promise._captureStackTrace();if(receiver===undefined&&(this._bitField&2097152)!==0){if(!((bitField&50397184)===0)){receiver=this._boundValue();}else{receiver=target===this?undefined:this._boundTo;}}this._fireEvent("promiseChained",this,promise);}var domain=getDomain();if(!((bitField&50397184)===0)){var handler,value,settler=target._settlePromiseCtx;if((bitField&33554432)!==0){value=target._rejectionHandler0;handler=didFulfill;}else if((bitField&16777216)!==0){value=target._fulfillmentHandler0;handler=didReject;target._unsetRejectionIsUnhandled();}else{settler=target._settlePromiseLateCancellationObserver;value=new CancellationError("late cancellation observer");target._attachExtraTrace(value);handler=didReject;}async.invoke(settler,target,{handler:domain===null?handler:typeof handler==="function"&&util.domainBind(domain,handler),promise:promise,receiver:receiver,value:value});}else{target._addCallbacks(didFulfill,didReject,promise,receiver,domain);}return promise;};Promise.prototype._length=function(){return this._bitField&65535;};Promise.prototype._isFateSealed=function(){return(this._bitField&117506048)!==0;};Promise.prototype._isFollowing=function(){return(this._bitField&67108864)===67108864;};Promise.prototype._setLength=function(len){this._bitField=this._bitField&-65536|len&65535;};Promise.prototype._setFulfilled=function(){this._bitField=this._bitField|33554432;this._fireEvent("promiseFulfilled",this);};Promise.prototype._setRejected=function(){this._bitField=this._bitField|16777216;this._fireEvent("promiseRejected",this);};Promise.prototype._setFollowing=function(){this._bitField=this._bitField|67108864;this._fireEvent("promiseResolved",this);};Promise.prototype._setIsFinal=function(){this._bitField=this._bitField|4194304;};Promise.prototype._isFinal=function(){return(this._bitField&4194304)>0;};Promise.prototype._unsetCancelled=function(){this._bitField=this._bitField&~65536;};Promise.prototype._setCancelled=function(){this._bitField=this._bitField|65536;this._fireEvent("promiseCancelled",this);};Promise.prototype._setWillBeCancelled=function(){this._bitField=this._bitField|8388608;};Promise.prototype._setAsyncGuaranteed=function(){if(async.hasCustomScheduler())return;this._bitField=this._bitField|134217728;};Promise.prototype._receiverAt=function(index){var ret=index===0?this._receiver0:this[index*4-4+3];if(ret===UNDEFINED_BINDING){return undefined;}else if(ret===undefined&&this._isBound()){return this._boundValue();}return ret;};Promise.prototype._promiseAt=function(index){return this[index*4-4+2];};Promise.prototype._fulfillmentHandlerAt=function(index){return this[index*4-4+0];};Promise.prototype._rejectionHandlerAt=function(index){return this[index*4-4+1];};Promise.prototype._boundValue=function(){};Promise.prototype._migrateCallback0=function(follower){var bitField=follower._bitField;var fulfill=follower._fulfillmentHandler0;var reject=follower._rejectionHandler0;var promise=follower._promise0;var receiver=follower._receiverAt(0);if(receiver===undefined)receiver=UNDEFINED_BINDING;this._addCallbacks(fulfill,reject,promise,receiver,null);};Promise.prototype._migrateCallbackAt=function(follower,index){var fulfill=follower._fulfillmentHandlerAt(index);var reject=follower._rejectionHandlerAt(index);var promise=follower._promiseAt(index);var receiver=follower._receiverAt(index);if(receiver===undefined)receiver=UNDEFINED_BINDING;this._addCallbacks(fulfill,reject,promise,receiver,null);};Promise.prototype._addCallbacks=function(fulfill,reject,promise,receiver,domain){var index=this._length();if(index>=65535-4){index=0;this._setLength(0);}if(index===0){this._promise0=promise;this._receiver0=receiver;if(typeof fulfill==="function"){this._fulfillmentHandler0=domain===null?fulfill:util.domainBind(domain,fulfill);}if(typeof reject==="function"){this._rejectionHandler0=domain===null?reject:util.domainBind(domain,reject);}}else{var base=index*4-4;this[base+2]=promise;this[base+3]=receiver;if(typeof fulfill==="function"){this[base+0]=domain===null?fulfill:util.domainBind(domain,fulfill);}if(typeof reject==="function"){this[base+1]=domain===null?reject:util.domainBind(domain,reject);}}this._setLength(index+1);return index;};Promise.prototype._proxy=function(proxyable,arg){this._addCallbacks(undefined,undefined,arg,proxyable,null);};Promise.prototype._resolveCallback=function(value,shouldBind){if((this._bitField&117506048)!==0)return;if(value===this)return this._rejectCallback(makeSelfResolutionError(),false);var maybePromise=tryConvertToPromise(value,this);if(!(maybePromise instanceof Promise))return this._fulfill(value);if(shouldBind)this._propagateFrom(maybePromise,2);var promise=maybePromise._target();if(promise===this){this._reject(makeSelfResolutionError());return;}var bitField=promise._bitField;if((bitField&50397184)===0){var len=this._length();if(len>0)promise._migrateCallback0(this);for(var i=1;i<len;++i){promise._migrateCallbackAt(this,i);}this._setFollowing();this._setLength(0);this._setFollowee(promise);}else if((bitField&33554432)!==0){this._fulfill(promise._value());}else if((bitField&16777216)!==0){this._reject(promise._reason());}else{var reason=new CancellationError("late cancellation observer");promise._attachExtraTrace(reason);this._reject(reason);}};Promise.prototype._rejectCallback=function(reason,synchronous,ignoreNonErrorWarnings){var trace=util.ensureErrorObject(reason);var hasStack=trace===reason;if(!hasStack&&!ignoreNonErrorWarnings&&debug.warnings()){var message="a promise was rejected with a non-error: "+util.classString(reason);this._warn(message,true);}this._attachExtraTrace(trace,synchronous?hasStack:false);this._reject(reason);};Promise.prototype._resolveFromExecutor=function(executor){if(executor===INTERNAL)return;var promise=this;this._captureStackTrace();this._pushContext();var synchronous=true;var r=this._execute(executor,function(value){promise._resolveCallback(value);},function(reason){promise._rejectCallback(reason,synchronous);});synchronous=false;this._popContext();if(r!==undefined){promise._rejectCallback(r,true);}};Promise.prototype._settlePromiseFromHandler=function(handler,receiver,value,promise){var bitField=promise._bitField;if((bitField&65536)!==0)return;promise._pushContext();var x;if(receiver===APPLY){if(!value||typeof value.length!=="number"){x=errorObj;x.e=new TypeError("cannot .spread() a non-array: "+util.classString(value));}else{x=tryCatch(handler).apply(this._boundValue(),value);}}else{x=tryCatch(handler).call(receiver,value);}var promiseCreated=promise._popContext();bitField=promise._bitField;if((bitField&65536)!==0)return;if(x===NEXT_FILTER){promise._reject(value);}else if(x===errorObj){promise._rejectCallback(x.e,false);}else{debug.checkForgottenReturns(x,promiseCreated,"",promise,this);promise._resolveCallback(x);}};Promise.prototype._target=function(){var ret=this;while(ret._isFollowing()){ret=ret._followee();}return ret;};Promise.prototype._followee=function(){return this._rejectionHandler0;};Promise.prototype._setFollowee=function(promise){this._rejectionHandler0=promise;};Promise.prototype._settlePromise=function(promise,handler,receiver,value){var isPromise=promise instanceof Promise;var bitField=this._bitField;var asyncGuaranteed=(bitField&134217728)!==0;if((bitField&65536)!==0){if(isPromise)promise._invokeInternalOnCancel();if(receiver instanceof PassThroughHandlerContext&&receiver.isFinallyHandler()){receiver.cancelPromise=promise;if(tryCatch(handler).call(receiver,value)===errorObj){promise._reject(errorObj.e);}}else if(handler===reflectHandler){promise._fulfill(reflectHandler.call(receiver));}else if(receiver instanceof Proxyable){receiver._promiseCancelled(promise);}else if(isPromise||promise instanceof PromiseArray){promise._cancel();}else{receiver.cancel();}}else if(typeof handler==="function"){if(!isPromise){handler.call(receiver,value,promise);}else{if(asyncGuaranteed)promise._setAsyncGuaranteed();this._settlePromiseFromHandler(handler,receiver,value,promise);}}else if(receiver instanceof Proxyable){if(!receiver._isResolved()){if((bitField&33554432)!==0){receiver._promiseFulfilled(value,promise);}else{receiver._promiseRejected(value,promise);}}}else if(isPromise){if(asyncGuaranteed)promise._setAsyncGuaranteed();if((bitField&33554432)!==0){promise._fulfill(value);}else{promise._reject(value);}}};Promise.prototype._settlePromiseLateCancellationObserver=function(ctx){var handler=ctx.handler;var promise=ctx.promise;var receiver=ctx.receiver;var value=ctx.value;if(typeof handler==="function"){if(!(promise instanceof Promise)){handler.call(receiver,value,promise);}else{this._settlePromiseFromHandler(handler,receiver,value,promise);}}else if(promise instanceof Promise){promise._reject(value);}};Promise.prototype._settlePromiseCtx=function(ctx){this._settlePromise(ctx.promise,ctx.handler,ctx.receiver,ctx.value);};Promise.prototype._settlePromise0=function(handler,value,bitField){var promise=this._promise0;var receiver=this._receiverAt(0);this._promise0=undefined;this._receiver0=undefined;this._settlePromise(promise,handler,receiver,value);};Promise.prototype._clearCallbackDataAtIndex=function(index){var base=index*4-4;this[base+2]=this[base+3]=this[base+0]=this[base+1]=undefined;};Promise.prototype._fulfill=function(value){var bitField=this._bitField;if((bitField&117506048)>>>16)return;if(value===this){var err=makeSelfResolutionError();this._attachExtraTrace(err);return this._reject(err);}this._setFulfilled();this._rejectionHandler0=value;if((bitField&65535)>0){if((bitField&134217728)!==0){this._settlePromises();}else{async.settlePromises(this);}}};Promise.prototype._reject=function(reason){var bitField=this._bitField;if((bitField&117506048)>>>16)return;this._setRejected();this._fulfillmentHandler0=reason;if(this._isFinal()){return async.fatalError(reason,util.isNode);}if((bitField&65535)>0){async.settlePromises(this);}else{this._ensurePossibleRejectionHandled();}};Promise.prototype._fulfillPromises=function(len,value){for(var i=1;i<len;i++){var handler=this._fulfillmentHandlerAt(i);var promise=this._promiseAt(i);var receiver=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(promise,handler,receiver,value);}};Promise.prototype._rejectPromises=function(len,reason){for(var i=1;i<len;i++){var handler=this._rejectionHandlerAt(i);var promise=this._promiseAt(i);var receiver=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(promise,handler,receiver,reason);}};Promise.prototype._settlePromises=function(){var bitField=this._bitField;var len=bitField&65535;if(len>0){if((bitField&16842752)!==0){var reason=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,reason,bitField);this._rejectPromises(len,reason);}else{var value=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,value,bitField);this._fulfillPromises(len,value);}this._setLength(0);}this._clearCancellationData();};Promise.prototype._settledValue=function(){var bitField=this._bitField;if((bitField&33554432)!==0){return this._rejectionHandler0;}else if((bitField&16777216)!==0){return this._fulfillmentHandler0;}};function deferResolve(v){this.promise._resolveCallback(v);}function deferReject(v){this.promise._rejectCallback(v,false);}Promise.defer=Promise.pending=function(){debug.deprecated("Promise.defer","new Promise");var promise=new Promise(INTERNAL);return{promise:promise,resolve:deferResolve,reject:deferReject};};util.notEnumerableProp(Promise,"_makeSelfResolutionError",makeSelfResolutionError);_dereq_("./method")(Promise,INTERNAL,tryConvertToPromise,apiRejection,debug);_dereq_("./bind")(Promise,INTERNAL,tryConvertToPromise,debug);_dereq_("./cancel")(Promise,PromiseArray,apiRejection,debug);_dereq_("./direct_resolve")(Promise);_dereq_("./synchronous_inspection")(Promise);_dereq_("./join")(Promise,PromiseArray,tryConvertToPromise,INTERNAL,async,getDomain);Promise.Promise=Promise;Promise.version="3.5.1";_dereq_('./map.js')(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug);_dereq_('./call_get.js')(Promise);_dereq_('./using.js')(Promise,apiRejection,tryConvertToPromise,createContext,INTERNAL,debug);_dereq_('./timers.js')(Promise,INTERNAL,debug);_dereq_('./generators.js')(Promise,apiRejection,INTERNAL,tryConvertToPromise,Proxyable,debug);_dereq_('./nodeify.js')(Promise);_dereq_('./promisify.js')(Promise,INTERNAL);_dereq_('./props.js')(Promise,PromiseArray,tryConvertToPromise,apiRejection);_dereq_('./race.js')(Promise,INTERNAL,tryConvertToPromise,apiRejection);_dereq_('./reduce.js')(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug);_dereq_('./settle.js')(Promise,PromiseArray,debug);_dereq_('./some.js')(Promise,PromiseArray,apiRejection);_dereq_('./filter.js')(Promise,INTERNAL);_dereq_('./each.js')(Promise,INTERNAL);_dereq_('./any.js')(Promise);util.toFastProperties(Promise);util.toFastProperties(Promise.prototype);function fillTypes(value){var p=new Promise(INTERNAL);p._fulfillmentHandler0=value;p._rejectionHandler0=value;p._promise0=value;p._receiver0=value;}// Complete slack tracking, opt out of field-type tracking and           
// stabilize map                                                         
fillTypes({a:1});fillTypes({b:2});fillTypes({c:3});fillTypes(1);fillTypes(function(){});fillTypes(undefined);fillTypes(false);fillTypes(new Promise(INTERNAL));debug.setBounds(Async.firstLineError,util.lastLineError);return Promise;};},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,apiRejection,Proxyable){var util=_dereq_("./util");var isArray=util.isArray;function toResolutionValue(val){switch(val){case-2:return[];case-3:return{};case-6:return new Map();}}function PromiseArray(values){var promise=this._promise=new Promise(INTERNAL);if(values instanceof Promise){promise._propagateFrom(values,3);}promise._setOnCancel(this);this._values=values;this._length=0;this._totalResolved=0;this._init(undefined,-2);}util.inherits(PromiseArray,Proxyable);PromiseArray.prototype.length=function(){return this._length;};PromiseArray.prototype.promise=function(){return this._promise;};PromiseArray.prototype._init=function init(_,resolveValueIfEmpty){var values=tryConvertToPromise(this._values,this._promise);if(values instanceof Promise){values=values._target();var bitField=values._bitField;;this._values=values;if((bitField&50397184)===0){this._promise._setAsyncGuaranteed();return values._then(init,this._reject,undefined,this,resolveValueIfEmpty);}else if((bitField&33554432)!==0){values=values._value();}else if((bitField&16777216)!==0){return this._reject(values._reason());}else{return this._cancel();}}values=util.asArray(values);if(values===null){var err=apiRejection("expecting an array or an iterable object but got "+util.classString(values)).reason();this._promise._rejectCallback(err,false);return;}if(values.length===0){if(resolveValueIfEmpty===-5){this._resolveEmptyArray();}else{this._resolve(toResolutionValue(resolveValueIfEmpty));}return;}this._iterate(values);};PromiseArray.prototype._iterate=function(values){var len=this.getActualLength(values.length);this._length=len;this._values=this.shouldCopyValues()?new Array(len):this._values;var result=this._promise;var isResolved=false;var bitField=null;for(var i=0;i<len;++i){var maybePromise=tryConvertToPromise(values[i],result);if(maybePromise instanceof Promise){maybePromise=maybePromise._target();bitField=maybePromise._bitField;}else{bitField=null;}if(isResolved){if(bitField!==null){maybePromise.suppressUnhandledRejections();}}else if(bitField!==null){if((bitField&50397184)===0){maybePromise._proxy(this,i);this._values[i]=maybePromise;}else if((bitField&33554432)!==0){isResolved=this._promiseFulfilled(maybePromise._value(),i);}else if((bitField&16777216)!==0){isResolved=this._promiseRejected(maybePromise._reason(),i);}else{isResolved=this._promiseCancelled(i);}}else{isResolved=this._promiseFulfilled(maybePromise,i);}}if(!isResolved)result._setAsyncGuaranteed();};PromiseArray.prototype._isResolved=function(){return this._values===null;};PromiseArray.prototype._resolve=function(value){this._values=null;this._promise._fulfill(value);};PromiseArray.prototype._cancel=function(){if(this._isResolved()||!this._promise._isCancellable())return;this._values=null;this._promise._cancel();};PromiseArray.prototype._reject=function(reason){this._values=null;this._promise._rejectCallback(reason,false);};PromiseArray.prototype._promiseFulfilled=function(value,index){this._values[index]=value;var totalResolved=++this._totalResolved;if(totalResolved>=this._length){this._resolve(this._values);return true;}return false;};PromiseArray.prototype._promiseCancelled=function(){this._cancel();return true;};PromiseArray.prototype._promiseRejected=function(reason){this._totalResolved++;this._reject(reason);return true;};PromiseArray.prototype._resultCancelled=function(){if(this._isResolved())return;var values=this._values;this._cancel();if(values instanceof Promise){values.cancel();}else{for(var i=0;i<values.length;++i){if(values[i]instanceof Promise){values[i].cancel();}}}};PromiseArray.prototype.shouldCopyValues=function(){return true;};PromiseArray.prototype.getActualLength=function(len){return len;};return PromiseArray;};},{"./util":36}],24:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var THIS={};var util=_dereq_("./util");var nodebackForPromise=_dereq_("./nodeback");var withAppended=util.withAppended;var maybeWrapAsError=util.maybeWrapAsError;var canEvaluate=util.canEvaluate;var TypeError=_dereq_("./errors").TypeError;var defaultSuffix="Async";var defaultPromisified={__isPromisified__:true};var noCopyProps=["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"];var noCopyPropsPattern=new RegExp("^(?:"+noCopyProps.join("|")+")$");var defaultFilter=function defaultFilter(name){return util.isIdentifier(name)&&name.charAt(0)!=="_"&&name!=="constructor";};function propsFilter(key){return!noCopyPropsPattern.test(key);}function isPromisified(fn){try{return fn.__isPromisified__===true;}catch(e){return false;}}function hasPromisified(obj,key,suffix){var val=util.getDataPropertyOrDefault(obj,key+suffix,defaultPromisified);return val?isPromisified(val):false;}function checkValid(ret,suffix,suffixRegexp){for(var i=0;i<ret.length;i+=2){var key=ret[i];if(suffixRegexp.test(key)){var keyWithoutAsyncSuffix=key.replace(suffixRegexp,"");for(var j=0;j<ret.length;j+=2){if(ret[j]===keyWithoutAsyncSuffix){throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s",suffix));}}}}}function promisifiableMethods(obj,suffix,suffixRegexp,filter){var keys=util.inheritedDataKeys(obj);var ret=[];for(var i=0;i<keys.length;++i){var key=keys[i];var value=obj[key];var passesDefaultFilter=filter===defaultFilter?true:defaultFilter(key,value,obj);if(typeof value==="function"&&!isPromisified(value)&&!hasPromisified(obj,key,suffix)&&filter(key,value,obj,passesDefaultFilter)){ret.push(key,value);}}checkValid(ret,suffix,suffixRegexp);return ret;}var escapeIdentRegex=function escapeIdentRegex(str){return str.replace(/([$])/,"\\$");};var makeNodePromisifiedEval;if(!true){var switchCaseArgumentOrder=function switchCaseArgumentOrder(likelyArgumentCount){var ret=[likelyArgumentCount];var min=Math.max(0,likelyArgumentCount-1-3);for(var i=likelyArgumentCount-1;i>=min;--i){ret.push(i);}for(var i=likelyArgumentCount+1;i<=3;++i){ret.push(i);}return ret;};var argumentSequence=function argumentSequence(argumentCount){return util.filledRange(argumentCount,"_arg","");};var parameterDeclaration=function parameterDeclaration(parameterCount){return util.filledRange(Math.max(parameterCount,3),"_arg","");};var parameterCount=function parameterCount(fn){if(typeof fn.length==="number"){return Math.max(Math.min(fn.length,1023+1),0);}return 0;};makeNodePromisifiedEval=function makeNodePromisifiedEval(callback,receiver,originalName,fn,_,multiArgs){var newParameterCount=Math.max(0,parameterCount(fn)-1);var argumentOrder=switchCaseArgumentOrder(newParameterCount);var shouldProxyThis=typeof callback==="string"||receiver===THIS;function generateCallForArgumentCount(count){var args=argumentSequence(count).join(", ");var comma=count>0?", ":"";var ret;if(shouldProxyThis){ret="ret = callback.call(this, {{args}}, nodeback); break;\n";}else{ret=receiver===undefined?"ret = callback({{args}}, nodeback); break;\n":"ret = callback.call(receiver, {{args}}, nodeback); break;\n";}return ret.replace("{{args}}",args).replace(", ",comma);}function generateArgumentSwitchCase(){var ret="";for(var i=0;i<argumentOrder.length;++i){ret+="case "+argumentOrder[i]+":"+generateCallForArgumentCount(argumentOrder[i]);}ret+="                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]",shouldProxyThis?"ret = callback.apply(this, args);\n":"ret = callback.apply(receiver, args);\n");return ret;}var getFunctionCode=typeof callback==="string"?"this != null ? this['"+callback+"'] : fn":"fn";var body="'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, "+multiArgs+");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]",generateArgumentSwitchCase()).replace("[GetFunctionCode]",getFunctionCode);body=body.replace("Parameters",parameterDeclaration(newParameterCount));return new Function("Promise","fn","receiver","withAppended","maybeWrapAsError","nodebackForPromise","tryCatch","errorObj","notEnumerableProp","INTERNAL",body)(Promise,fn,receiver,withAppended,maybeWrapAsError,nodebackForPromise,util.tryCatch,util.errorObj,util.notEnumerableProp,INTERNAL);};}function makeNodePromisifiedClosure(callback,receiver,_,fn,__,multiArgs){var defaultThis=function(){return this;}();var method=callback;if(typeof method==="string"){callback=fn;}function promisified(){var _receiver=receiver;if(receiver===THIS)_receiver=this;var promise=new Promise(INTERNAL);promise._captureStackTrace();var cb=typeof method==="string"&&this!==defaultThis?this[method]:callback;var fn=nodebackForPromise(promise,multiArgs);try{cb.apply(_receiver,withAppended(arguments,fn));}catch(e){promise._rejectCallback(maybeWrapAsError(e),true,true);}if(!promise._isFateSealed())promise._setAsyncGuaranteed();return promise;}util.notEnumerableProp(promisified,"__isPromisified__",true);return promisified;}var makeNodePromisified=canEvaluate?makeNodePromisifiedEval:makeNodePromisifiedClosure;function promisifyAll(obj,suffix,filter,promisifier,multiArgs){var suffixRegexp=new RegExp(escapeIdentRegex(suffix)+"$");var methods=promisifiableMethods(obj,suffix,suffixRegexp,filter);for(var i=0,len=methods.length;i<len;i+=2){var key=methods[i];var fn=methods[i+1];var promisifiedKey=key+suffix;if(promisifier===makeNodePromisified){obj[promisifiedKey]=makeNodePromisified(key,THIS,key,fn,suffix,multiArgs);}else{var promisified=promisifier(fn,function(){return makeNodePromisified(key,THIS,key,fn,suffix,multiArgs);});util.notEnumerableProp(promisified,"__isPromisified__",true);obj[promisifiedKey]=promisified;}}util.toFastProperties(obj);return obj;}function promisify(callback,receiver,multiArgs){return makeNodePromisified(callback,receiver,undefined,callback,null,multiArgs);}Promise.promisify=function(fn,options){if(typeof fn!=="function"){throw new TypeError("expecting a function but got "+util.classString(fn));}if(isPromisified(fn)){return fn;}options=Object(options);var receiver=options.context===undefined?THIS:options.context;var multiArgs=!!options.multiArgs;var ret=promisify(fn,receiver,multiArgs);util.copyDescriptors(fn,ret,propsFilter);return ret;};Promise.promisifyAll=function(target,options){if(typeof target!=="function"&&(typeof target==="undefined"?"undefined":_typeof(target))!=="object"){throw new TypeError("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");}options=Object(options);var multiArgs=!!options.multiArgs;var suffix=options.suffix;if(typeof suffix!=="string")suffix=defaultSuffix;var filter=options.filter;if(typeof filter!=="function")filter=defaultFilter;var promisifier=options.promisifier;if(typeof promisifier!=="function")promisifier=makeNodePromisified;if(!util.isIdentifier(suffix)){throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");}var keys=util.inheritedDataKeys(target);for(var i=0;i<keys.length;++i){var value=target[keys[i]];if(keys[i]!=="constructor"&&util.isClass(value)){promisifyAll(value.prototype,suffix,filter,promisifier,multiArgs);promisifyAll(value,suffix,filter,promisifier,multiArgs);}}return promisifyAll(target,suffix,filter,promisifier,multiArgs);};};},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,tryConvertToPromise,apiRejection){var util=_dereq_("./util");var isObject=util.isObject;var es5=_dereq_("./es5");var Es6Map;if(typeof Map==="function")Es6Map=Map;var mapToEntries=function(){var index=0;var size=0;function extractEntry(value,key){this[index]=value;this[index+size]=key;index++;}return function mapToEntries(map){size=map.size;index=0;var ret=new Array(map.size*2);map.forEach(extractEntry,ret);return ret;};}();var entriesToMap=function entriesToMap(entries){var ret=new Es6Map();var length=entries.length/2|0;for(var i=0;i<length;++i){var key=entries[length+i];var value=entries[i];ret.set(key,value);}return ret;};function PropertiesPromiseArray(obj){var isMap=false;var entries;if(Es6Map!==undefined&&obj instanceof Es6Map){entries=mapToEntries(obj);isMap=true;}else{var keys=es5.keys(obj);var len=keys.length;entries=new Array(len*2);for(var i=0;i<len;++i){var key=keys[i];entries[i]=obj[key];entries[i+len]=key;}}this.constructor$(entries);this._isMap=isMap;this._init$(undefined,isMap?-6:-3);}util.inherits(PropertiesPromiseArray,PromiseArray);PropertiesPromiseArray.prototype._init=function(){};PropertiesPromiseArray.prototype._promiseFulfilled=function(value,index){this._values[index]=value;var totalResolved=++this._totalResolved;if(totalResolved>=this._length){var val;if(this._isMap){val=entriesToMap(this._values);}else{val={};var keyOffset=this.length();for(var i=0,len=this.length();i<len;++i){val[this._values[i+keyOffset]]=this._values[i];}}this._resolve(val);return true;}return false;};PropertiesPromiseArray.prototype.shouldCopyValues=function(){return false;};PropertiesPromiseArray.prototype.getActualLength=function(len){return len>>1;};function props(promises){var ret;var castValue=tryConvertToPromise(promises);if(!isObject(castValue)){return apiRejection("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");}else if(castValue instanceof Promise){ret=castValue._then(Promise.props,undefined,undefined,undefined,undefined);}else{ret=new PropertiesPromiseArray(castValue).promise();}if(castValue instanceof Promise){ret._propagateFrom(castValue,2);}return ret;}Promise.prototype.props=function(){return props(this);};Promise.props=function(promises){return props(promises);};};},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){"use strict";function arrayMove(src,srcIndex,dst,dstIndex,len){for(var j=0;j<len;++j){dst[j+dstIndex]=src[j+srcIndex];src[j+srcIndex]=void 0;}}function Queue(capacity){this._capacity=capacity;this._length=0;this._front=0;}Queue.prototype._willBeOverCapacity=function(size){return this._capacity<size;};Queue.prototype._pushOne=function(arg){var length=this.length();this._checkCapacity(length+1);var i=this._front+length&this._capacity-1;this[i]=arg;this._length=length+1;};Queue.prototype.push=function(fn,receiver,arg){var length=this.length()+3;if(this._willBeOverCapacity(length)){this._pushOne(fn);this._pushOne(receiver);this._pushOne(arg);return;}var j=this._front+length-3;this._checkCapacity(length);var wrapMask=this._capacity-1;this[j+0&wrapMask]=fn;this[j+1&wrapMask]=receiver;this[j+2&wrapMask]=arg;this._length=length;};Queue.prototype.shift=function(){var front=this._front,ret=this[front];this[front]=undefined;this._front=front+1&this._capacity-1;this._length--;return ret;};Queue.prototype.length=function(){return this._length;};Queue.prototype._checkCapacity=function(size){if(this._capacity<size){this._resizeTo(this._capacity<<1);}};Queue.prototype._resizeTo=function(capacity){var oldCapacity=this._capacity;this._capacity=capacity;var front=this._front;var length=this._length;var moveItemsCount=front+length&oldCapacity-1;arrayMove(this,0,this,oldCapacity,moveItemsCount);};module.exports=Queue;},{}],27:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,apiRejection){var util=_dereq_("./util");var raceLater=function raceLater(promise){return promise.then(function(array){return race(array,promise);});};function race(promises,parent){var maybePromise=tryConvertToPromise(promises);if(maybePromise instanceof Promise){return raceLater(maybePromise);}else{promises=util.asArray(promises);if(promises===null)return apiRejection("expecting an array or an iterable object but got "+util.classString(promises));}var ret=new Promise(INTERNAL);if(parent!==undefined){ret._propagateFrom(parent,3);}var fulfill=ret._fulfill;var reject=ret._reject;for(var i=0,len=promises.length;i<len;++i){var val=promises[i];if(val===undefined&&!(i in promises)){continue;}Promise.cast(val)._then(fulfill,reject,undefined,ret,null);}return ret;}Promise.race=function(promises){return race(promises,undefined);};Promise.prototype.race=function(){return race(this,undefined);};};},{"./util":36}],28:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug){var getDomain=Promise._getDomain;var util=_dereq_("./util");var tryCatch=util.tryCatch;function ReductionPromiseArray(promises,fn,initialValue,_each){this.constructor$(promises);var domain=getDomain();this._fn=domain===null?fn:util.domainBind(domain,fn);if(initialValue!==undefined){initialValue=Promise.resolve(initialValue);initialValue._attachCancellationCallback(this);}this._initialValue=initialValue;this._currentCancellable=null;if(_each===INTERNAL){this._eachValues=Array(this._length);}else if(_each===0){this._eachValues=null;}else{this._eachValues=undefined;}this._promise._captureStackTrace();this._init$(undefined,-5);}util.inherits(ReductionPromiseArray,PromiseArray);ReductionPromiseArray.prototype._gotAccum=function(accum){if(this._eachValues!==undefined&&this._eachValues!==null&&accum!==INTERNAL){this._eachValues.push(accum);}};ReductionPromiseArray.prototype._eachComplete=function(value){if(this._eachValues!==null){this._eachValues.push(value);}return this._eachValues;};ReductionPromiseArray.prototype._init=function(){};ReductionPromiseArray.prototype._resolveEmptyArray=function(){this._resolve(this._eachValues!==undefined?this._eachValues:this._initialValue);};ReductionPromiseArray.prototype.shouldCopyValues=function(){return false;};ReductionPromiseArray.prototype._resolve=function(value){this._promise._resolveCallback(value);this._values=null;};ReductionPromiseArray.prototype._resultCancelled=function(sender){if(sender===this._initialValue)return this._cancel();if(this._isResolved())return;this._resultCancelled$();if(this._currentCancellable instanceof Promise){this._currentCancellable.cancel();}if(this._initialValue instanceof Promise){this._initialValue.cancel();}};ReductionPromiseArray.prototype._iterate=function(values){this._values=values;var value;var i;var length=values.length;if(this._initialValue!==undefined){value=this._initialValue;i=0;}else{value=Promise.resolve(values[0]);i=1;}this._currentCancellable=value;if(!value.isRejected()){for(;i<length;++i){var ctx={accum:null,value:values[i],index:i,length:length,array:this};value=value._then(gotAccum,undefined,undefined,ctx,undefined);}}if(this._eachValues!==undefined){value=value._then(this._eachComplete,undefined,undefined,this,undefined);}value._then(completed,completed,undefined,value,this);};Promise.prototype.reduce=function(fn,initialValue){return reduce(this,fn,initialValue,null);};Promise.reduce=function(promises,fn,initialValue,_each){return reduce(promises,fn,initialValue,_each);};function completed(valueOrReason,array){if(this.isFulfilled()){array._resolve(valueOrReason);}else{array._reject(valueOrReason);}}function reduce(promises,fn,initialValue,_each){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var array=new ReductionPromiseArray(promises,fn,initialValue,_each);return array.promise();}function gotAccum(accum){this.accum=accum;this.array._gotAccum(accum);var value=tryConvertToPromise(this.value,this.array._promise);if(value instanceof Promise){this.array._currentCancellable=value;return value._then(gotValue,undefined,undefined,this,undefined);}else{return gotValue.call(this,value);}}function gotValue(value){var array=this.array;var promise=array._promise;var fn=tryCatch(array._fn);promise._pushContext();var ret;if(array._eachValues!==undefined){ret=fn.call(promise._boundValue(),value,this.index,this.length);}else{ret=fn.call(promise._boundValue(),this.accum,value,this.index,this.length);}if(ret instanceof Promise){array._currentCancellable=ret;}var promiseCreated=promise._popContext();debug.checkForgottenReturns(ret,promiseCreated,array._eachValues!==undefined?"Promise.each":"Promise.reduce",promise);return ret;}};},{"./util":36}],29:[function(_dereq_,module,exports){"use strict";var util=_dereq_("./util");var schedule;var noAsyncScheduler=function noAsyncScheduler(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");};var NativePromise=util.getNativePromise();if(util.isNode&&typeof MutationObserver==="undefined"){var GlobalSetImmediate=global.setImmediate;var ProcessNextTick=process.nextTick;schedule=util.isRecentNode?function(fn){GlobalSetImmediate.call(global,fn);}:function(fn){ProcessNextTick.call(process,fn);};}else if(typeof NativePromise==="function"&&typeof NativePromise.resolve==="function"){var nativePromise=NativePromise.resolve();schedule=function schedule(fn){nativePromise.then(fn);};}else if(typeof MutationObserver!=="undefined"&&!(typeof window!=="undefined"&&window.navigator&&(window.navigator.standalone||window.cordova))){schedule=function(){var div=document.createElement("div");var opts={attributes:true};var toggleScheduled=false;var div2=document.createElement("div");var o2=new MutationObserver(function(){div.classList.toggle("foo");toggleScheduled=false;});o2.observe(div2,opts);var scheduleToggle=function scheduleToggle(){if(toggleScheduled)return;toggleScheduled=true;div2.classList.toggle("foo");};return function schedule(fn){var o=new MutationObserver(function(){o.disconnect();fn();});o.observe(div,opts);scheduleToggle();};}();}else if(typeof setImmediate!=="undefined"){schedule=function schedule(fn){setImmediate(fn);};}else if(typeof setTimeout!=="undefined"){schedule=function schedule(fn){setTimeout(fn,0);};}else{schedule=noAsyncScheduler;}module.exports=schedule;},{"./util":36}],30:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,debug){var PromiseInspection=Promise.PromiseInspection;var util=_dereq_("./util");function SettledPromiseArray(values){this.constructor$(values);}util.inherits(SettledPromiseArray,PromiseArray);SettledPromiseArray.prototype._promiseResolved=function(index,inspection){this._values[index]=inspection;var totalResolved=++this._totalResolved;if(totalResolved>=this._length){this._resolve(this._values);return true;}return false;};SettledPromiseArray.prototype._promiseFulfilled=function(value,index){var ret=new PromiseInspection();ret._bitField=33554432;ret._settledValueField=value;return this._promiseResolved(index,ret);};SettledPromiseArray.prototype._promiseRejected=function(reason,index){var ret=new PromiseInspection();ret._bitField=16777216;ret._settledValueField=reason;return this._promiseResolved(index,ret);};Promise.settle=function(promises){debug.deprecated(".settle()",".reflect()");return new SettledPromiseArray(promises).promise();};Promise.prototype.settle=function(){return Promise.settle(this);};};},{"./util":36}],31:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection){var util=_dereq_("./util");var RangeError=_dereq_("./errors").RangeError;var AggregateError=_dereq_("./errors").AggregateError;var isArray=util.isArray;var CANCELLATION={};function SomePromiseArray(values){this.constructor$(values);this._howMany=0;this._unwrap=false;this._initialized=false;}util.inherits(SomePromiseArray,PromiseArray);SomePromiseArray.prototype._init=function(){if(!this._initialized){return;}if(this._howMany===0){this._resolve([]);return;}this._init$(undefined,-5);var isArrayResolved=isArray(this._values);if(!this._isResolved()&&isArrayResolved&&this._howMany>this._canPossiblyFulfill()){this._reject(this._getRangeError(this.length()));}};SomePromiseArray.prototype.init=function(){this._initialized=true;this._init();};SomePromiseArray.prototype.setUnwrap=function(){this._unwrap=true;};SomePromiseArray.prototype.howMany=function(){return this._howMany;};SomePromiseArray.prototype.setHowMany=function(count){this._howMany=count;};SomePromiseArray.prototype._promiseFulfilled=function(value){this._addFulfilled(value);if(this._fulfilled()===this.howMany()){this._values.length=this.howMany();if(this.howMany()===1&&this._unwrap){this._resolve(this._values[0]);}else{this._resolve(this._values);}return true;}return false;};SomePromiseArray.prototype._promiseRejected=function(reason){this._addRejected(reason);return this._checkOutcome();};SomePromiseArray.prototype._promiseCancelled=function(){if(this._values instanceof Promise||this._values==null){return this._cancel();}this._addRejected(CANCELLATION);return this._checkOutcome();};SomePromiseArray.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){var e=new AggregateError();for(var i=this.length();i<this._values.length;++i){if(this._values[i]!==CANCELLATION){e.push(this._values[i]);}}if(e.length>0){this._reject(e);}else{this._cancel();}return true;}return false;};SomePromiseArray.prototype._fulfilled=function(){return this._totalResolved;};SomePromiseArray.prototype._rejected=function(){return this._values.length-this.length();};SomePromiseArray.prototype._addRejected=function(reason){this._values.push(reason);};SomePromiseArray.prototype._addFulfilled=function(value){this._values[this._totalResolved++]=value;};SomePromiseArray.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected();};SomePromiseArray.prototype._getRangeError=function(count){var message="Input array must contain at least "+this._howMany+" items but contains only "+count+" items";return new RangeError(message);};SomePromiseArray.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0));};function some(promises,howMany){if((howMany|0)!==howMany||howMany<0){return apiRejection("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");}var ret=new SomePromiseArray(promises);var promise=ret.promise();ret.setHowMany(howMany);ret.init();return promise;}Promise.some=function(promises,howMany){return some(promises,howMany);};Promise.prototype.some=function(howMany){return some(this,howMany);};Promise._SomePromiseArray=SomePromiseArray;};},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){function PromiseInspection(promise){if(promise!==undefined){promise=promise._target();this._bitField=promise._bitField;this._settledValueField=promise._isFateSealed()?promise._settledValue():undefined;}else{this._bitField=0;this._settledValueField=undefined;}}PromiseInspection.prototype._settledValue=function(){return this._settledValueField;};var value=PromiseInspection.prototype.value=function(){if(!this.isFulfilled()){throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");}return this._settledValue();};var reason=PromiseInspection.prototype.error=PromiseInspection.prototype.reason=function(){if(!this.isRejected()){throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");}return this._settledValue();};var isFulfilled=PromiseInspection.prototype.isFulfilled=function(){return(this._bitField&33554432)!==0;};var isRejected=PromiseInspection.prototype.isRejected=function(){return(this._bitField&16777216)!==0;};var isPending=PromiseInspection.prototype.isPending=function(){return(this._bitField&50397184)===0;};var isResolved=PromiseInspection.prototype.isResolved=function(){return(this._bitField&50331648)!==0;};PromiseInspection.prototype.isCancelled=function(){return(this._bitField&8454144)!==0;};Promise.prototype.__isCancelled=function(){return(this._bitField&65536)===65536;};Promise.prototype._isCancelled=function(){return this._target().__isCancelled();};Promise.prototype.isCancelled=function(){return(this._target()._bitField&8454144)!==0;};Promise.prototype.isPending=function(){return isPending.call(this._target());};Promise.prototype.isRejected=function(){return isRejected.call(this._target());};Promise.prototype.isFulfilled=function(){return isFulfilled.call(this._target());};Promise.prototype.isResolved=function(){return isResolved.call(this._target());};Promise.prototype.value=function(){return value.call(this._target());};Promise.prototype.reason=function(){var target=this._target();target._unsetRejectionIsUnhandled();return reason.call(target);};Promise.prototype._value=function(){return this._settledValue();};Promise.prototype._reason=function(){this._unsetRejectionIsUnhandled();return this._settledValue();};Promise.PromiseInspection=PromiseInspection;};},{}],33:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var util=_dereq_("./util");var errorObj=util.errorObj;var isObject=util.isObject;function tryConvertToPromise(obj,context){if(isObject(obj)){if(obj instanceof Promise)return obj;var then=getThen(obj);if(then===errorObj){if(context)context._pushContext();var ret=Promise.reject(then.e);if(context)context._popContext();return ret;}else if(typeof then==="function"){if(isAnyBluebirdPromise(obj)){var ret=new Promise(INTERNAL);obj._then(ret._fulfill,ret._reject,undefined,ret,null);return ret;}return doThenable(obj,then,context);}}return obj;}function doGetThen(obj){return obj.then;}function getThen(obj){try{return doGetThen(obj);}catch(e){errorObj.e=e;return errorObj;}}var hasProp={}.hasOwnProperty;function isAnyBluebirdPromise(obj){try{return hasProp.call(obj,"_promise0");}catch(e){return false;}}function doThenable(x,then,context){var promise=new Promise(INTERNAL);var ret=promise;if(context)context._pushContext();promise._captureStackTrace();if(context)context._popContext();var synchronous=true;var result=util.tryCatch(then).call(x,resolve,reject);synchronous=false;if(promise&&result===errorObj){promise._rejectCallback(result.e,true,true);promise=null;}function resolve(value){if(!promise)return;promise._resolveCallback(value);promise=null;}function reject(reason){if(!promise)return;promise._rejectCallback(reason,synchronous,true);promise=null;}return ret;}return tryConvertToPromise;};},{"./util":36}],34:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,debug){var util=_dereq_("./util");var TimeoutError=Promise.TimeoutError;function HandleWrapper(handle){this.handle=handle;}HandleWrapper.prototype._resultCancelled=function(){clearTimeout(this.handle);};var afterValue=function afterValue(value){return delay(+this).thenReturn(value);};var delay=Promise.delay=function(ms,value){var ret;var handle;if(value!==undefined){ret=Promise.resolve(value)._then(afterValue,null,null,ms,undefined);if(debug.cancellation()&&value instanceof Promise){ret._setOnCancel(value);}}else{ret=new Promise(INTERNAL);handle=setTimeout(function(){ret._fulfill();},+ms);if(debug.cancellation()){ret._setOnCancel(new HandleWrapper(handle));}ret._captureStackTrace();}ret._setAsyncGuaranteed();return ret;};Promise.prototype.delay=function(ms){return delay(ms,this);};var afterTimeout=function afterTimeout(promise,message,parent){var err;if(typeof message!=="string"){if(message instanceof Error){err=message;}else{err=new TimeoutError("operation timed out");}}else{err=new TimeoutError(message);}util.markAsOriginatingFromRejection(err);promise._attachExtraTrace(err);promise._reject(err);if(parent!=null){parent.cancel();}};function successClear(value){clearTimeout(this.handle);return value;}function failureClear(reason){clearTimeout(this.handle);throw reason;}Promise.prototype.timeout=function(ms,message){ms=+ms;var ret,parent;var handleWrapper=new HandleWrapper(setTimeout(function timeoutTimeout(){if(ret.isPending()){afterTimeout(ret,message,parent);}},ms));if(debug.cancellation()){parent=this.then();ret=parent._then(successClear,failureClear,undefined,handleWrapper,undefined);ret._setOnCancel(handleWrapper);}else{ret=this._then(successClear,failureClear,undefined,handleWrapper,undefined);}return ret;};};},{"./util":36}],35:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,apiRejection,tryConvertToPromise,createContext,INTERNAL,debug){var util=_dereq_("./util");var TypeError=_dereq_("./errors").TypeError;var inherits=_dereq_("./util").inherits;var errorObj=util.errorObj;var tryCatch=util.tryCatch;var NULL={};function thrower(e){setTimeout(function(){throw e;},0);}function castPreservingDisposable(thenable){var maybePromise=tryConvertToPromise(thenable);if(maybePromise!==thenable&&typeof thenable._isDisposable==="function"&&typeof thenable._getDisposer==="function"&&thenable._isDisposable()){maybePromise._setDisposable(thenable._getDisposer());}return maybePromise;}function dispose(resources,inspection){var i=0;var len=resources.length;var ret=new Promise(INTERNAL);function iterator(){if(i>=len)return ret._fulfill();var maybePromise=castPreservingDisposable(resources[i++]);if(maybePromise instanceof Promise&&maybePromise._isDisposable()){try{maybePromise=tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection),resources.promise);}catch(e){return thrower(e);}if(maybePromise instanceof Promise){return maybePromise._then(iterator,thrower,null,null,null);}}iterator();}iterator();return ret;}function Disposer(data,promise,context){this._data=data;this._promise=promise;this._context=context;}Disposer.prototype.data=function(){return this._data;};Disposer.prototype.promise=function(){return this._promise;};Disposer.prototype.resource=function(){if(this.promise().isFulfilled()){return this.promise().value();}return NULL;};Disposer.prototype.tryDispose=function(inspection){var resource=this.resource();var context=this._context;if(context!==undefined)context._pushContext();var ret=resource!==NULL?this.doDispose(resource,inspection):null;if(context!==undefined)context._popContext();this._promise._unsetDisposable();this._data=null;return ret;};Disposer.isDisposer=function(d){return d!=null&&typeof d.resource==="function"&&typeof d.tryDispose==="function";};function FunctionDisposer(fn,promise,context){this.constructor$(fn,promise,context);}inherits(FunctionDisposer,Disposer);FunctionDisposer.prototype.doDispose=function(resource,inspection){var fn=this.data();return fn.call(resource,resource,inspection);};function maybeUnwrapDisposer(value){if(Disposer.isDisposer(value)){this.resources[this.index]._setDisposable(value);return value.promise();}return value;}function ResourceList(length){this.length=length;this.promise=null;this[length-1]=null;}ResourceList.prototype._resultCancelled=function(){var len=this.length;for(var i=0;i<len;++i){var item=this[i];if(item instanceof Promise){item.cancel();}}};Promise.using=function(){var len=arguments.length;if(len<2)return apiRejection("you must pass at least 2 arguments to Promise.using");var fn=arguments[len-1];if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var input;var spreadArgs=true;if(len===2&&Array.isArray(arguments[0])){input=arguments[0];len=input.length;spreadArgs=false;}else{input=arguments;len--;}var resources=new ResourceList(len);for(var i=0;i<len;++i){var resource=input[i];if(Disposer.isDisposer(resource)){var disposer=resource;resource=resource.promise();resource._setDisposable(disposer);}else{var maybePromise=tryConvertToPromise(resource);if(maybePromise instanceof Promise){resource=maybePromise._then(maybeUnwrapDisposer,null,null,{resources:resources,index:i},undefined);}}resources[i]=resource;}var reflectedResources=new Array(resources.length);for(var i=0;i<reflectedResources.length;++i){reflectedResources[i]=Promise.resolve(resources[i]).reflect();}var resultPromise=Promise.all(reflectedResources).then(function(inspections){for(var i=0;i<inspections.length;++i){var inspection=inspections[i];if(inspection.isRejected()){errorObj.e=inspection.error();return errorObj;}else if(!inspection.isFulfilled()){resultPromise.cancel();return;}inspections[i]=inspection.value();}promise._pushContext();fn=tryCatch(fn);var ret=spreadArgs?fn.apply(undefined,inspections):fn(inspections);var promiseCreated=promise._popContext();debug.checkForgottenReturns(ret,promiseCreated,"Promise.using",promise);return ret;});var promise=resultPromise.lastly(function(){var inspection=new Promise.PromiseInspection(resultPromise);return dispose(resources,inspection);});resources.promise=promise;promise._setOnCancel(resources);return promise;};Promise.prototype._setDisposable=function(disposer){this._bitField=this._bitField|131072;this._disposer=disposer;};Promise.prototype._isDisposable=function(){return(this._bitField&131072)>0;};Promise.prototype._getDisposer=function(){return this._disposer;};Promise.prototype._unsetDisposable=function(){this._bitField=this._bitField&~131072;this._disposer=undefined;};Promise.prototype.disposer=function(fn){if(typeof fn==="function"){return new FunctionDisposer(fn,this,createContext());}throw new TypeError();};};},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){"use strict";var es5=_dereq_("./es5");var canEvaluate=typeof navigator=="undefined";var errorObj={e:{}};var tryCatchTarget;var globalObject=typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:this!==undefined?this:null;function tryCatcher(){try{var target=tryCatchTarget;tryCatchTarget=null;return target.apply(this,arguments);}catch(e){errorObj.e=e;return errorObj;}}function tryCatch(fn){tryCatchTarget=fn;return tryCatcher;}var inherits=function inherits(Child,Parent){var hasProp={}.hasOwnProperty;function T(){this.constructor=Child;this.constructor$=Parent;for(var propertyName in Parent.prototype){if(hasProp.call(Parent.prototype,propertyName)&&propertyName.charAt(propertyName.length-1)!=="$"){this[propertyName+"$"]=Parent.prototype[propertyName];}}}T.prototype=Parent.prototype;Child.prototype=new T();return Child.prototype;};function isPrimitive(val){return val==null||val===true||val===false||typeof val==="string"||typeof val==="number";}function isObject(value){return typeof value==="function"||(typeof value==="undefined"?"undefined":_typeof(value))==="object"&&value!==null;}function maybeWrapAsError(maybeError){if(!isPrimitive(maybeError))return maybeError;return new Error(safeToString(maybeError));}function withAppended(target,appendee){var len=target.length;var ret=new Array(len+1);var i;for(i=0;i<len;++i){ret[i]=target[i];}ret[i]=appendee;return ret;}function getDataPropertyOrDefault(obj,key,defaultValue){if(es5.isES5){var desc=Object.getOwnPropertyDescriptor(obj,key);if(desc!=null){return desc.get==null&&desc.set==null?desc.value:defaultValue;}}else{return{}.hasOwnProperty.call(obj,key)?obj[key]:undefined;}}function notEnumerableProp(obj,name,value){if(isPrimitive(obj))return obj;var descriptor={value:value,configurable:true,enumerable:false,writable:true};es5.defineProperty(obj,name,descriptor);return obj;}function thrower(r){throw r;}var inheritedDataKeys=function(){var excludedPrototypes=[Array.prototype,Object.prototype,Function.prototype];var isExcludedProto=function isExcludedProto(val){for(var i=0;i<excludedPrototypes.length;++i){if(excludedPrototypes[i]===val){return true;}}return false;};if(es5.isES5){var getKeys=Object.getOwnPropertyNames;return function(obj){var ret=[];var visitedKeys=Object.create(null);while(obj!=null&&!isExcludedProto(obj)){var keys;try{keys=getKeys(obj);}catch(e){return ret;}for(var i=0;i<keys.length;++i){var key=keys[i];if(visitedKeys[key])continue;visitedKeys[key]=true;var desc=Object.getOwnPropertyDescriptor(obj,key);if(desc!=null&&desc.get==null&&desc.set==null){ret.push(key);}}obj=es5.getPrototypeOf(obj);}return ret;};}else{var hasProp={}.hasOwnProperty;return function(obj){if(isExcludedProto(obj))return[];var ret=[];/*jshint forin:false */enumeration:for(var key in obj){if(hasProp.call(obj,key)){ret.push(key);}else{for(var i=0;i<excludedPrototypes.length;++i){if(hasProp.call(excludedPrototypes[i],key)){continue enumeration;}}ret.push(key);}}return ret;};}}();var thisAssignmentPattern=/this\s*\.\s*\S+\s*=/;function isClass(fn){try{if(typeof fn==="function"){var keys=es5.names(fn.prototype);var hasMethods=es5.isES5&&keys.length>1;var hasMethodsOtherThanConstructor=keys.length>0&&!(keys.length===1&&keys[0]==="constructor");var hasThisAssignmentAndStaticMethods=thisAssignmentPattern.test(fn+"")&&es5.names(fn).length>0;if(hasMethods||hasMethodsOtherThanConstructor||hasThisAssignmentAndStaticMethods){return true;}}return false;}catch(e){return false;}}function toFastProperties(obj){/*jshint -W027,-W055,-W031*/function FakeConstructor(){}FakeConstructor.prototype=obj;var l=8;while(l--){new FakeConstructor();}return obj;eval(obj);}var rident=/^[a-z$_][a-z$_0-9]*$/i;function isIdentifier(str){return rident.test(str);}function filledRange(count,prefix,suffix){var ret=new Array(count);for(var i=0;i<count;++i){ret[i]=prefix+i+suffix;}return ret;}function safeToString(obj){try{return obj+"";}catch(e){return"[no string representation]";}}function isError(obj){return obj instanceof Error||obj!==null&&(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"&&typeof obj.message==="string"&&typeof obj.name==="string";}function markAsOriginatingFromRejection(e){try{notEnumerableProp(e,"isOperational",true);}catch(ignore){}}function originatesFromRejection(e){if(e==null)return false;return e instanceof Error["__BluebirdErrorTypes__"].OperationalError||e["isOperational"]===true;}function canAttachTrace(obj){return isError(obj)&&es5.propertyIsWritable(obj,"stack");}var ensureErrorObject=function(){if(!("stack"in new Error())){return function(value){if(canAttachTrace(value))return value;try{throw new Error(safeToString(value));}catch(err){return err;}};}else{return function(value){if(canAttachTrace(value))return value;return new Error(safeToString(value));};}}();function classString(obj){return{}.toString.call(obj);}function copyDescriptors(from,to,filter){var keys=es5.names(from);for(var i=0;i<keys.length;++i){var key=keys[i];if(filter(key)){try{es5.defineProperty(to,key,es5.getDescriptor(from,key));}catch(ignore){}}}}var asArray=function asArray(v){if(es5.isArray(v)){return v;}return null;};if(typeof Symbol!=="undefined"&&Symbol.iterator){var ArrayFrom=typeof Array.from==="function"?function(v){return Array.from(v);}:function(v){var ret=[];var it=v[Symbol.iterator]();var itResult;while(!(itResult=it.next()).done){ret.push(itResult.value);}return ret;};asArray=function asArray(v){if(es5.isArray(v)){return v;}else if(v!=null&&typeof v[Symbol.iterator]==="function"){return ArrayFrom(v);}return null;};}var isNode=typeof process!=="undefined"&&classString(process).toLowerCase()==="[object process]";var hasEnvVariables=typeof process!=="undefined"&&typeof process.env!=="undefined";function env(key){return hasEnvVariables?process.env[key]:undefined;}function getNativePromise(){if(typeof Promise==="function"){try{var promise=new Promise(function(){});if({}.toString.call(promise)==="[object Promise]"){return Promise;}}catch(e){}}}function domainBind(self,cb){return self.bind(cb);}var ret={isClass:isClass,isIdentifier:isIdentifier,inheritedDataKeys:inheritedDataKeys,getDataPropertyOrDefault:getDataPropertyOrDefault,thrower:thrower,isArray:es5.isArray,asArray:asArray,notEnumerableProp:notEnumerableProp,isPrimitive:isPrimitive,isObject:isObject,isError:isError,canEvaluate:canEvaluate,errorObj:errorObj,tryCatch:tryCatch,inherits:inherits,withAppended:withAppended,maybeWrapAsError:maybeWrapAsError,toFastProperties:toFastProperties,filledRange:filledRange,toString:safeToString,canAttachTrace:canAttachTrace,ensureErrorObject:ensureErrorObject,originatesFromRejection:originatesFromRejection,markAsOriginatingFromRejection:markAsOriginatingFromRejection,classString:classString,copyDescriptors:copyDescriptors,hasDevTools:typeof chrome!=="undefined"&&chrome&&typeof chrome.loadTimes==="function",isNode:isNode,hasEnvVariables:hasEnvVariables,env:env,global:globalObject,getNativePromise:getNativePromise,domainBind:domainBind};ret.isRecentNode=ret.isNode&&function(){var version=process.versions.node.split(".").map(Number);return version[0]===0&&version[1]>10||version[0]>0;}();if(ret.isNode)ret.toFastProperties(process);try{throw new Error();}catch(e){ret.lastLineError=e;}module.exports=ret;},{"./es5":13}]},{},[4])(4);});;if(typeof window!=='undefined'&&window!==null){window.P=window.Promise;}else if(typeof self!=='undefined'&&self!==null){self.P=self.Promise;}}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"_process":21}],19:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter(){this._events=this._events||{};this._maxListeners=this._maxListeners||undefined;}module.exports=EventEmitter;// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners=10;// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||n<0||isNaN(n))throw TypeError('n must be a positive number');this._maxListeners=n;return this;};EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(!this._events)this._events={};// If there is no 'error' event listener then throw.
if(type==='error'){if(!this._events.error||isObject(this._events.error)&&!this._events.error.length){er=arguments[1];if(er instanceof Error){throw er;// Unhandled 'error' event
}else{// At least give some kind of context to the user
var err=new Error('Uncaught, unspecified "error" event. ('+er+')');err.context=er;throw err;}}}handler=this._events[type];if(isUndefined(handler))return false;if(isFunction(handler)){switch(arguments.length){// fast cases
case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;// slower
default:args=Array.prototype.slice.call(arguments,1);handler.apply(this,args);}}else if(isObject(handler)){args=Array.prototype.slice.call(arguments,1);listeners=handler.slice();len=listeners.length;for(i=0;i<len;i++){listeners[i].apply(this,args);}}return true;};EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events)this._events={};// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(this._events.newListener)this.emit('newListener',type,isFunction(listener.listener)?listener.listener:listener);if(!this._events[type])// Optimize the case of one listener. Don't need the extra array object.
this._events[type]=listener;else if(isObject(this._events[type]))// If we've already got an array, just append.
this._events[type].push(listener);else// Adding the second element, need to change to array.
this._events[type]=[this._events[type],listener];// Check for listener leak
if(isObject(this._events[type])&&!this._events[type].warned){if(!isUndefined(this._maxListeners)){m=this._maxListeners;}else{m=EventEmitter.defaultMaxListeners;}if(m&&m>0&&this._events[type].length>m){this._events[type].warned=true;console.error('(node) warning: possible EventEmitter memory '+'leak detected. %d listeners added. '+'Use emitter.setMaxListeners() to increase limit.',this._events[type].length);if(typeof console.trace==='function'){// not supported in IE 10
console.trace();}}}return this;};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.once=function(type,listener){if(!isFunction(listener))throw TypeError('listener must be a function');var fired=false;function g(){this.removeListener(type,g);if(!fired){fired=true;listener.apply(this,arguments);}}g.listener=listener;this.on(type,g);return this;};// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events||!this._events[type])return this;list=this._events[type];length=list.length;position=-1;if(list===listener||isFunction(list.listener)&&list.listener===listener){delete this._events[type];if(this._events.removeListener)this.emit('removeListener',type,listener);}else if(isObject(list)){for(i=length;i-->0;){if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break;}}if(position<0)return this;if(list.length===1){list.length=0;delete this._events[type];}else{list.splice(position,1);}if(this._events.removeListener)this.emit('removeListener',type,listener);}return this;};EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;// not listening for removeListener, no need to emit
if(!this._events.removeListener){if(arguments.length===0)this._events={};else if(this._events[type])delete this._events[type];return this;}// emit removeListener for all listeners on all events
if(arguments.length===0){for(key in this._events){if(key==='removeListener')continue;this.removeAllListeners(key);}this.removeAllListeners('removeListener');this._events={};return this;}listeners=this._events[type];if(isFunction(listeners)){this.removeListener(type,listeners);}else if(listeners){// LIFO order
while(listeners.length){this.removeListener(type,listeners[listeners.length-1]);}}delete this._events[type];return this;};EventEmitter.prototype.listeners=function(type){var ret;if(!this._events||!this._events[type])ret=[];else if(isFunction(this._events[type]))ret=[this._events[type]];else ret=this._events[type].slice();return ret;};EventEmitter.prototype.listenerCount=function(type){if(this._events){var evlistener=this._events[type];if(isFunction(evlistener))return 1;else if(evlistener)return evlistener.length;}return 0;};EventEmitter.listenerCount=function(emitter,type){return emitter.listenerCount(type);};function isFunction(arg){return typeof arg==='function';}function isNumber(arg){return typeof arg==='number';}function isObject(arg){return(typeof arg==="undefined"?"undefined":_typeof(arg))==='object'&&arg!==null;}function isUndefined(arg){return arg===void 0;}},{}],20:[function(require,module,exports){(function(global){/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */;(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined;/** Used as the semantic version number. */var VERSION='4.17.4';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Error message constants. */var CORE_ERROR_TEXT='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',WRAP_ARY_FLAG],['bind',WRAP_BIND_FLAG],['bindKey',WRAP_BIND_KEY_FLAG],['curry',WRAP_CURRY_FLAG],['curryRight',WRAP_CURRY_RIGHT_FLAG],['flip',WRAP_FLIP_FLAG],['partial',WRAP_PARTIAL_FLAG],['partialRight',WRAP_PARTIAL_RIGHT_FLAG],['rearg',WRAP_REARG_FLAG]];/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',domExcTag='[object DOMException]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to compose unicode character classes. */var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos="['\u2019]",rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper='['+rsUpperRange+']',rsZWJ="\\u200d";/** Used to compose unicode regexes. */var rsMiscLower='(?:'+rsLower+'|'+rsMisc+')',rsMiscUpper='(?:'+rsUpper+'|'+rsMisc+')',rsOptContrLower='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptContrUpper='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsOrdLower='\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',rsOrdUpper='\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */var reComboMark=RegExp(rsCombo,'g');/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptContrLower+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsMiscUpper+'+'+rsOptContrUpper+'(?='+[rsBreak,rsUpper+rsMiscLower,'$'].join('|')+')',rsUpper+'?'+rsMiscLower+'+'+rsOptContrLower,rsUpper+'+'+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join('|'),'g');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/** Used to assign default `context` object properties. */var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={// Latin-1 Supplement block.
'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
"\u0100":'A',"\u0102":'A',"\u0104":'A',"\u0101":'a',"\u0103":'a',"\u0105":'a',"\u0106":'C',"\u0108":'C',"\u010A":'C',"\u010C":'C',"\u0107":'c',"\u0109":'c',"\u010B":'c',"\u010D":'c',"\u010E":'D',"\u0110":'D',"\u010F":'d',"\u0111":'d',"\u0112":'E',"\u0114":'E',"\u0116":'E',"\u0118":'E',"\u011A":'E',"\u0113":'e',"\u0115":'e',"\u0117":'e',"\u0119":'e',"\u011B":'e',"\u011C":'G',"\u011E":'G',"\u0120":'G',"\u0122":'G',"\u011D":'g',"\u011F":'g',"\u0121":'g',"\u0123":'g',"\u0124":'H',"\u0126":'H',"\u0125":'h',"\u0127":'h',"\u0128":'I',"\u012A":'I',"\u012C":'I',"\u012E":'I',"\u0130":'I',"\u0129":'i',"\u012B":'i',"\u012D":'i',"\u012F":'i',"\u0131":'i',"\u0134":'J',"\u0135":'j',"\u0136":'K',"\u0137":'k',"\u0138":'k',"\u0139":'L',"\u013B":'L',"\u013D":'L',"\u013F":'L',"\u0141":'L',"\u013A":'l',"\u013C":'l',"\u013E":'l',"\u0140":'l',"\u0142":'l',"\u0143":'N',"\u0145":'N',"\u0147":'N',"\u014A":'N',"\u0144":'n',"\u0146":'n',"\u0148":'n',"\u014B":'n',"\u014C":'O',"\u014E":'O',"\u0150":'O',"\u014D":'o',"\u014F":'o',"\u0151":'o',"\u0154":'R',"\u0156":'R',"\u0158":'R',"\u0155":'r',"\u0157":'r',"\u0159":'r',"\u015A":'S',"\u015C":'S',"\u015E":'S',"\u0160":'S',"\u015B":'s',"\u015D":'s',"\u015F":'s',"\u0161":'s',"\u0162":'T',"\u0164":'T',"\u0166":'T',"\u0163":'t',"\u0165":'t',"\u0167":'t',"\u0168":'U',"\u016A":'U',"\u016C":'U',"\u016E":'U',"\u0170":'U',"\u0172":'U',"\u0169":'u',"\u016B":'u',"\u016D":'u',"\u016F":'u',"\u0171":'u',"\u0173":'u',"\u0174":'W',"\u0175":'w',"\u0176":'Y',"\u0177":'y',"\u0178":'Y',"\u0179":'Z',"\u017B":'Z',"\u017D":'Z',"\u017A":'z',"\u017C":'z',"\u017E":'z',"\u0132":'IJ',"\u0133":'ij',"\u0152":'Oe',"\u0153":'oe',"\u0149":"'n","\u017F":'s'};/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/** Used to map HTML entities to characters. */var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r',"\u2028":'u2028',"\u2029":'u2029'};/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=(typeof exports==="undefined"?"undefined":_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==="undefined"?"undefined":_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*//**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break;}}return array;}/**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator;}/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */var asciiSize=baseProperty('length');/**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function asciiToArray(string){return string.split('');}/**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function asciiWords(string){return string.match(reAsciiWord)||[];}/**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}/**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}return-1;}/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */function baseIsNaN(value){return value!==value;}/**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */function baseMean(array,iteratee){var length=array==null?0:array.length;return length?baseSum(array,iteratee)/length:NAN;}/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:result+current;}}return result;}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function baseUnary(func){return function(value){return func(value);};}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function cacheHas(cache,key){return cache.has(key);}/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}return result;}/**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */var deburrLetter=basePropertyOf(deburredLetters);/**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */var escapeHtmlChar=basePropertyOf(htmlEscapes);/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */function escapeStringChar(chr){return'\\'+stringEscapes[chr];}/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */function getValue(object,key){return object==null?undefined:object[key];}/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function hasUnicode(string){return reHasUnicode.test(string);}/**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index;}}return index;}/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);/**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result;}/**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function unicodeToArray(string){return string.match(reUnicode)||[];}/**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function unicodeWords(string){return string.match(reUnicodeWord)||[];}/*--------------------------------------------------------------------------*//**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */var runInContext=function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=context['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to generate unique IDs. */var idCounter=0;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */var nativeObjectToString=objectProto.toString;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined,_Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=_Symbol?_Symbol.isConcatSpreadable:undefined,symIterator=_Symbol?_Symbol.iterator:undefined,symToStringTag=_Symbol?_Symbol.toStringTag:undefined;var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;/* Built-in method references that are verified to be native. */var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap();/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/*------------------------------------------------------------------------*//**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}return new LodashWrapper(value);}/**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */function baseLodash(){}// No operation performed.
/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */lodash.templateSettings={/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'escape':reEscape,/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'evaluate':reEvaluate,/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'interpolate':reInterpolate,/**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */'variable':'',/**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */'imports':{/**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */'_':lodash}};// Ensure wrappers are instances of `baseLodash`.
lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;/*------------------------------------------------------------------------*//**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}return result;}/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||!isRight&&arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__);}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else{break outer;}}}result[resIndex++]=value;}return result;}// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;/*------------------------------------------------------------------------*//**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*//**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */function listCacheClear(){this.__data__=[];this.size=0;}/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*//**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*//**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*//**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}/**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function stackGet(key){return this.__data__.get(key);}/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function stackHas(key){return this.__data__.has(key);}/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*//**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined;}/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length));}/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function arrayShuffle(array){return shuffleSelf(copyArray(array));}/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined:get(object,paths[index]);}return result;}/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}if(lower!==undefined){number=number>=lower?number:lower;}}return number;}/**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}/**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length;}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined&&!(key in object)||!predicate(value)){return false;}}return true;}/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function(){func.apply(undefined,args);},wait);}/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEach=createBaseEach(baseForOwn);/**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEachRight=createBaseEach(baseForOwnRight,true);/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array;}/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseFor=createBaseFor();/**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseForRight=createBaseFor(true);/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */function baseGt(value,other){return value>other;}/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined:apply(func,object,args);}/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag;}/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag;}/**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==="undefined"?"undefined":_typeof(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */function baseLt(value,other){return value<other;}/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){if(isObject(srcValue)){stack||(stack=new Stack());baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(object[key],srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}/**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */function baseNth(array,n){var length=array.length;if(!length){return;}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined;}/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}/**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}/**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}/**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}splice.call(array,fromIndex,1);}}return array;}/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else{baseUnset(array,index);}}}return array;}/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;}/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do{if(n%2){result+=string;}n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */function baseSample(collection){return arraySample(values(collection));}/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length));}/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};/**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function baseShuffle(collection){return shuffleSelf(values(collection));}/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}/**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else{high=mid;}}return high;}return baseSortedIndexBy(array,value,identity,retHighest);}/**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array==null?0:array.length,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else{high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX);}/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result;}/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */function baseToNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}return+value;}/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);}/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[];}var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator);}}}return baseUniq(baseFlatten(result,1),iteratee,comparator);}/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}return result;}/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */function castFunction(value){return typeof value=='function'?value:identity;}/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}/**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */var castRest=baseRest;/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return!start&&end>=length?array:baseSlice(array,start,end);}/**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),CLONE_DEEP_FLAG):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),CLONE_DEEP_FLAG):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1;}}return 0;}/**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return object.index-other.index;}/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}/**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator);};}/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return isObject(result)?result:thisBinding;};}/**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function predicate(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG|WRAP_CURRY_FLAG|WRAP_PARTIAL_FLAG|WRAP_REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value();}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result;};});}/**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG,isBind=bitmask&WRAP_BIND_FLAG,isBindKey=bitmask&WRAP_BIND_KEY_FLAG,isCurried=bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue;}if(value!==undefined){result=value;}if(other!==undefined){if(result===undefined){return other;}if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result;};}/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */function createPadding(length,chars){chars=chars===undefined?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}/**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined;}// Ensure the sign of `-0` is preserved.
start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}step=step===undefined?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight);};}/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}return operator(value,other);};}/**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin(toInteger(precision),292);if(precision){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}return func(number);};}/**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object);}if(tag==setTag){return setToPairs(object);}return baseToPairs(object,keysFunc(object));};}/**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined;}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}/**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,customDefaultsMerge,stack);stack['delete'](srcValue);}return objValue;}/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */function customOmitClone(value){return isPlainObject(value)?undefined:value;}/**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */function flatRest(func){return setToString(overRest(func,undefined,flatten),func+'');}/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */var getData=!metaMap?noop:function(func){return metaMap.get(func);};/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */function getFuncName(func){var result=func.name+'',array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}return result;}/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */function getHolder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};/**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};/**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case'drop':start+=size;break;case'dropRight':end-=size;break;case'take':end=nativeMin(end,start+size);break;case'takeRight':start=nativeMax(start,end-size);break;}}return{'start':start,'end':end};}/**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */function insertWrapDetails(source,details){var length=details.length;if(!length){return source;}var lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==="undefined"?"undefined":_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==="undefined"?"undefined":_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */function isKeyable(value){var type=typeof value==="undefined"?"undefined":_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}if(func===other){return true;}var data=getData(other);return!!data&&func===data[0];}/**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */var isMaskable=coreJsData?isFunction:stubFalse;/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */function isStrictComparable(value){return value===value&&!isObject(value);}/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG);var isCombo=srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_CURRY_FLAG||srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(WRAP_ARY_FLAG|WRAP_REARG_FLAG)&&source[7].length<=source[8]&&bitmask==WRAP_CURRY_FLAG;// Exit early if metadata can't be merged.
if(!(isCommon||isCombo)){return data;}// Use source `thisArg` if available.
if(srcBitmask&WRAP_BIND_FLAG){data[2]=source[2];// Set when currying a bound function.
newBitmask|=bitmask&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG;}// Compose partial arguments.
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}// Compose partial right arguments.
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}// Use source `argPos` if available.
value=source[7];if(value){data[7]=value;}// Use source `ary` if it's smaller.
if(srcBitmask&WRAP_ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}// Use source `arity` if one is not provided.
if(data[9]==null){data[9]=source[9];}// Use source `func` and merge bitmasks.
data[0]=source[0];data[1]=newBitmask;return data;}/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */function objectToString(value){return nativeObjectToString.call(value);}/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}return array;}/**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var setData=shortOut(baseSetData);/**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait);};/**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var setToString=shortOut(baseSetToString);/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */function setWrapToString(wrapper,reference,bitmask){var source=reference+'';return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)));}/**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}array.length=size;return array;}/**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */var stringToPath=memoizeCapped(function(string){var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}/*------------------------------------------------------------------------*//**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined){size=1;}else{size=nativeMax(toInteger(size),0);}var length=array==null?0:array.length;if(!length||size<1){return[];}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result;}/**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */function concat(){var length=arguments.length;if(!length){return[];}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1));}/**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});/**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[];});/**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[];});/**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[];}/**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[];}/**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return[];}if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end);}/**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index);}/**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}return baseFindIndex(array,getIteratee(predicate,3),index,true);}/**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}/**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY):[];}/**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return[];}depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth);}/**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result;}/**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */function head(array){return array&&array.length?array[0]:undefined;}/**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}/**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[];}/**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});/**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[];});/**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=='function'?comparator:undefined;if(comparator){mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined,comparator):[];});/**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */function join(array,separator){return array==null?'':nativeJoin.call(array,separator);}/**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}/**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1);}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true);}/**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined;}/**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */var pull=baseRest(pullAll);/**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array;}/**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array;}/**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined,comparator):array;}/**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});/**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}/**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function reverse(array){return array==null?array:nativeReverse.call(array);}/**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function slice(array,start,end){var length=array==null?0:array.length;if(!length){return[];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}return baseSlice(array,start,end);}/**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */function sortedIndex(array,value){return baseSortedIndex(array,value);}/**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2));}/**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}/**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true);}/**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}/**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[];}/**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[];}/**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */function take(array,n,guard){if(!(array&&array.length)){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[];}/**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[];}/**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});/**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2));});/**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);});/**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */function uniq(array){return array&&array.length?baseUniq(array):[];}/**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[];}/**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */function uniqWith(array,comparator){comparator=typeof comparator=='function'?comparator:undefined;return array&&array.length?baseUniq(array,undefined,comparator):[];}/**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */function unzip(array){if(!(array&&array.length)){return[];}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}/**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}var result=unzip(array);if(iteratee==null){return result;}return arrayMap(result,function(group){return apply(iteratee,undefined,group);});}/**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});/**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});/**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2));});/**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);});/**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */var zip=baseRest(unzip);/**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}/**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}/**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee);});/*------------------------------------------------------------------------*//**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */function chain(value){var result=lodash(value);result.__chain__=true;return result;}/**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */function tap(value,interceptor){interceptor(value);return value;}/**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */function thru(value,interceptor){return interceptor(value);}/**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function interceptor(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}return array;});});/**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */function wrapperChain(){return chain(this);}/**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}/**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{'done':done,'value':value};}/**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */function wrapperToIterator(){return this;}/**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result;}/**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined});return new LodashWrapper(wrapped,this.__chain__);}return this.thru(reverse);}/**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}/*------------------------------------------------------------------------*//**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key];}else{baseAssignValue(result,key,1);}});/**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */var find=createFind(findIndex);/**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */var findLast=createFind(findLastIndex);/**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}/**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});/**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}/**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args);});return result;});/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});/**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders);}/**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});/**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}/**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}/**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)));}/**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}/**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined){n=1;}else{n=toInteger(n);}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n);}/**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection);}/**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}return baseKeys(collection).length;}/**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});/*------------------------------------------------------------------------*//**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */var now=ctxNow||function(){return root.Date.now();};/*------------------------------------------------------------------------*//**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}/**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */function ary(func,n,guard){n=guard?undefined:n;n=func&&n==null?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined,undefined,undefined,undefined,n);}/**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined;}return result;};}/**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders);});/**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(key,bitmask,object,partials,holders);});/**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}/**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result;}/**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}/**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */var defer=baseRest(function(func,args){return baseDelay(func,1,args);});/**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});/**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */function flip(func){return createWrap(func,WRAP_FLIP_FLAG);}/**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}return!predicate.apply(this,args);};}/**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */function once(func){return before(2,func);}/**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args);});});/**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined,partials,holders);});/**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG,undefined,partials,holders);});/**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG,undefined,undefined,undefined,indexes);});/**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined?start:toInteger(start);return baseRest(func,start);}/**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start==null?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs);});}/**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}/**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */function unary(func){return ary(func,1);}/**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */function wrap(value,wrapper){return partial(castFunction(wrapper),value);}/*------------------------------------------------------------------------*//**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */function castArray(){if(!arguments.length){return[];}var value=arguments[0];return isArray(value)?value:[value];}/**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */function cloneWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_SYMBOLS_FLAG,customizer);}/**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */function cloneDeepWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer);}/**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}/**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */function eq(value,other){return value===other||value!==value&&other!==other;}/**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */var gt=createRelationalOperation(baseGt);/**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */var gte=createRelationalOperation(function(value,other){return value>=other;});/**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */var isArray=Array.isArray;/**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;/**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&baseGetTag(value)==boolTag;}/**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */var isBuffer=nativeIsBuffer||stubFalse;/**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;/**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value);}/**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */function isEqual(value,other){return baseIsEqual(value,other);}/**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,undefined,customizer):!!result;}/**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */function isError(value){if(!isObjectLike(value)){return false;}var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||typeof value.message=='string'&&typeof value.name=='string'&&!isPlainObject(value);}/**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}/**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */function isInteger(value){return typeof value=='number'&&value==toInteger(value);}/**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */function isObject(value){var type=typeof value==="undefined"?"undefined":_typeof(value);return value!=null&&(type=='object'||type=='function');}/**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */function isObjectLike(value){return value!=null&&(typeof value==="undefined"?"undefined":_typeof(value))=='object';}/**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;/**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}/**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer);}/**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */function isNaN(value){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return isNumber(value)&&value!=+value;}/**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT);}return baseIsNative(value);}/**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */function isNull(value){return value===null;}/**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */function isNil(value){return value==null;}/**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&baseGetTag(value)==numberTag;}/**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;/**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}/**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */function isSymbol(value){return(typeof value==="undefined"?"undefined":_typeof(value))=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */function isUndefined(value){return value===undefined;}/**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}/**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag;}/**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */var lt=createRelationalOperation(baseLt);/**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */var lte=createRelationalOperation(function(value,other){return value<=other;});/**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */function toArray(value){if(!value){return[];}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]());}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value);}/**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}/**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER):value===0?value:0;}/**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */function toString(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*//**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});/**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});/**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});/**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */var at=flatRest(baseAt);/**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties);}/**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var defaults=baseRest(function(args){args.push(undefined,customDefaultsAssignIn);return apply(assignInWith,undefined,args);});/**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */var defaultsDeep=baseRest(function(args){args.push(undefined,customDefaultsMerge);return apply(mergeWith,undefined,args);});/**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}/**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight);}/**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}/**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn);}/**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}/**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3));}/**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */function functions(object){return object==null?[]:baseFunctions(object,keys(object));}/**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */var invert=createInverter(function(result,value,key){result[value]=key;},constant(identity));/**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */var invertBy=createInverter(function(result,value,key){if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);/**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */var invoke=baseRest(baseInvoke);/**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result;}/**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result;}/**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});/**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */var omit=flatRest(function(object,paths){var result={};if(object==null){return result;}var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path;});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG|CLONE_FLAT_FLAG|CLONE_SYMBOLS_FLAG,customOmitClone);}var length=paths.length;while(length--){baseUnset(result,paths[length]);}return result;});/**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)));}/**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});/**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */function pickBy(object,predicate){if(object==null){return{};}var props=arrayMap(getAllKeysIn(object),function(prop){return[prop];});predicate=getIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}/**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
if(!length){length=1;object=undefined;}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}/**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */function set(object,path,value){return object==null?object:baseSet(object,path,value);}/**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer);}/**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */var toPairs=createToPairs(keys);/**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */var toPairsIn=createToPairs(keysIn);/**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor():[];}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}else{accumulator={};}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}/**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */function unset(object,path){return object==null?true:baseUnset(object,path);}/**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}/**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}/**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */function values(object){return object==null?[]:baseValues(object,keys(object));}/**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}/*------------------------------------------------------------------------*//**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper);}/**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end);}/**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}if(floating===undefined){if(typeof upper=='boolean'){floating=upper;upper=undefined;}else if(typeof lower=='boolean'){floating=lower;lower=undefined;}}if(lower===undefined&&upper===undefined){lower=0;upper=1;}else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0;}else{upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);}return baseRandom(lower,upper);}/*------------------------------------------------------------------------*//**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});/**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */function capitalize(string){return upperFirst(toString(string).toLowerCase());}/**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}/**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}/**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}/**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,'\\$&'):string;}/**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});/**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});/**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */var lowerFirst=createCaseFirst('toLowerCase');/**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars);}/**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string;}/**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string;}/**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}return nativeParseInt(toString(string).replace(reTrimStart,''),radix||0);}/**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined){n=1;}else{n=toInteger(n);}return baseRepeat(toString(string),n);}/**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}/**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});/**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[];}string=toString(string);if(string&&(typeof separator=='string'||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}return string.split(separator,limit);}/**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});/**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}/**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
var sourceURL='//# sourceURL='+('sourceURL'in options?options.sourceURL:'lodash.templateSources['+ ++templateCounter+']')+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var variable=options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Cleanup code by stripping empty strings.
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
result.source=source;if(isError(result)){throw result;}return result;}/**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */function toLower(value){return toString(value).toLowerCase();}/**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */function toUpper(value){return toString(value).toUpperCase();}/**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}/**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}/**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}/**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}/**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;}/**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});/**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */var upperFirst=createCaseFirst('toUpperCase');/**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern)||[];}/*------------------------------------------------------------------------*//**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */var attempt=baseRest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});/**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object;});/**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return[toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}/**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */function constant(value){return function(){return value;};}/**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value;}/**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */var flow=createFlow();/**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */var flowRight=createFlow(true);/**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */function identity(value){return value;}/**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG));}/**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});/**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});/**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}/**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */function noConflict(){if(root._===this){root._=oldDash;}return this;}/**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */function noop(){}// No operation performed.
/**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}/**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */var over=createOver(arrayMap);/**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */var overEvery=createOver(arrayEvery);/**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */var overSome=createOver(arraySome);/**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path);};}/**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */var range=createRange();/**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */var rangeRight=createRange(true);/**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */function stubArray(){return[];}/**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */function stubFalse(){return false;}/**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */function stubObject(){return{};}/**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */function stubString(){return'';}/**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */function stubTrue(){return true;}/**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[];}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result;}/**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)));}/**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}/*------------------------------------------------------------------------*//**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */var add=createMathOperation(function(augend,addend){return augend+addend;},0);/**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */var ceil=createRound('ceil');/**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);/**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */var floor=createRound('floor');/**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined;}/**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined;}/**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */function mean(array){return baseMean(array,identity);}/**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2));}/**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined;}/**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined;}/**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);/**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */var round=createRound('round');/**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);/**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */function sum(array){return array&&array.length?baseSum(array,identity):0;}/**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0;}/*------------------------------------------------------------------------*/// Add methods that return wrapped values in chain sequences.
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;// Add aliases.
lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;// Add methods to `lodash.prototype`.
mixin(lodash,lodash);/*------------------------------------------------------------------------*/// Add methods that return unwrapped values in chain sequences.
lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;// Add aliases.
lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}(),{'chain':false});/*------------------------------------------------------------------------*//**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */lodash.VERSION=VERSION;// Assign default placeholders.
arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined?1:nativeMax(toInteger(n),0);var result=this.__filtered__&&!index?new LazyWrapper(this):this.clone();if(result.__filtered__){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `iteratee` value.
arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});// Add `LazyWrapper` methods for `_.head` and `_.last`.
arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};// Add `LazyWrapper` methods to `lodash.prototype`.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function interceptor(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){// Avoid lazy use if the iteratee has a "length" value other than `1`.
isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(result,chainAll);}if(isUnwrapped&&onlyLazy){return func.apply(this,args);}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result;};});// Add `Array` methods to `lodash.prototype`.
arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});// Map minified method names to their real names.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'',names=realNames[key]||(realNames[key]=[]);names.push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined,WRAP_BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined}];// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;// Add lazy aliases.
lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator;}return lodash;};/*--------------------------------------------------------------------------*/// Export lodash.
var _=runInContext();// Some AMD build optimizers, like r.js, check for condition patterns like:
if(typeof define=='function'&&_typeof(define.amd)=='object'&&define.amd){// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
root._=_;// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
define(function(){return _;});}// Check for `exports` after `define` in case a build optimizer adds it.
else if(freeModule){// Export for Node.js.
(freeModule.exports=_)._=_;// Export for CommonJS support.
freeExports._=_;}else{// Export to the global object.
root._=_;}}).call(this);}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],21:[function(require,module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],22:[function(require,module,exports){module.exports=require('./lib/sequential-event.js');},{"./lib/sequential-event.js":23}],23:[function(require,module,exports){(function(process){'use strict';/**
 * @file File defining the SequentialEvent class
 * @licence GPLv3
 * @author Gerkin
 */var EventEmitter=require('events').EventEmitter;/**
 * Handle execution of all handlers in sequence.
 * 
 * @param   {Function|Function[]} handlers - Function(s) to execute. Each function may return a Promise.
 * @param   {EventEmitter}        object   - Objecto call event on.
 * @param   {Any[]}               [args]   - Arguments to pass to each called function.
 * @returns {Promise} Promise resolved once each function is executed.
 * @memberof SequentialEvent
 * @author Gerkin
 * @private
 */function emitHandlers(handlers,object,args){// Check if the provided handler is a single function or an array of functions
if('function'===typeof handlers){return emitHandler(handlers,object,args);}else{var i=0;var handlersLength=handlers.length;var sourcePromise=new Promise(function(resolve,reject){/**
			 * Generate next promise for sequence.
			 * 
			 * @param   {Any} prevResolve - Event chain resolved value.
			 * @returns {undefined} *This function does not return anything*.
			 * @memberof SequentialEvent
			 * @author Gerkin
			 * @inner
			 */function getNextPromise(prevResolve){if(i<handlersLength){var stepArgs='undefined'!==typeof prevResolve?args.concat([prevResolve]):args.slice(0);var newPromise=emitHandler(handlers[i],object,stepArgs);newPromise.then(getNextPromise).catch(reject);i++;}else{return resolve.call(null,prevResolve);}}getNextPromise();});return sourcePromise;}}/**
 * Handle execution of a single handler.
 * 
 * @param   {Function}     handler - Function to execute. It may return a Promise.
 * @param   {EventEmitter} object  - Object to call event on.
 * @param   {Any[]}        [args]  - Arguments to pass to each called function.
 * @returns {Promise} Promise resolved once this function is done.
 * @memberof SequentialEvent
 * @author Gerkin
 * @private
 */function emitHandler(handler,object,args){try{var retVal=handler.apply(object,args);if('object'===(typeof retVal==="undefined"?"undefined":_typeof(retVal))&&'function'===typeof retVal.then){return retVal;}else{return Promise.resolve(retVal);}}catch(e){return Promise.reject(e);}}/**
 * Event emitter that guarantees sequential execution of handlers. Each handler may return a **Promise**.
 * 
 * @extends EventEmitter
 * @see {@link https://nodejs.org/api/events.html Node EventEmitter}.
 */var SequentialEvent=function(_EventEmitter){_inherits(SequentialEvent,_EventEmitter);/**
	 * Constructs a new SequentialEvent.
	 * 
	 * @author Gerkin
	 */function SequentialEvent(){_classCallCheck(this,SequentialEvent);return _possibleConstructorReturn(this,(SequentialEvent.__proto__||Object.getPrototypeOf(SequentialEvent)).call(this));}/**
	 * SequentialEvents each corresponding handlers in sequence.
	 * 
	 * @param   {Any}   type   - Name of the event to sequential-event.
	 * @param   {Any[]} [args] - Parameters to pass to handlers.
	 * @returns {Promise} Returns a Promise resolved when then chain is done.
	 * @author Gerkin
	 */_createClass(SequentialEvent,[{key:"emit",value:function emit(type){for(var _len6=arguments.length,args=Array(_len6>1?_len6-1:0),_key6=1;_key6<_len6;_key6++){args[_key6-1]=arguments[_key6];}var needDomainExit=false;var doError='error'===type;var events=this._events;if(events){doError=doError&&null==events.error;}else if(!doError){return false;}var domain=this.domain;// If there is no 'error' event listener then throw.
if(doError){var er=void 0;if(arguments.length>1){er=arguments[1];}if(domain){if(!er){er=new Error('Unhandled "error" event');}if('object'===(typeof er==="undefined"?"undefined":_typeof(er))&&er!==null){er.domainEmitter=this;er.domain=domain;er.domainThrown=false;}domain.emit('error',er);}else if(er instanceof Error){throw er;// Unhandled 'error' event
}else{// At least give some kind of context to the user
var err=new Error("Unhandled \"error\" event. ("+er+")");err.context=er;throw err;}return false;}var handler=events[type];if(!handler){return Promise.resolve();}if('undefined'!==typeof process&&domain&&this!==process){domain.enter();needDomainExit=true;}var retPromise=emitHandlers(handler,this,args);if(needDomainExit){domain.exit();}return retPromise;}}]);return SequentialEvent;}(EventEmitter);module.exports=SequentialEvent;}).call(this,require('_process'));},{"_process":21,"events":19}]},{},[2,1])(2);});