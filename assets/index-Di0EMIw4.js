(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function bE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dx={exports:{}},Qf={},hx={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu=Symbol.for("react.element"),PE=Symbol.for("react.portal"),LE=Symbol.for("react.fragment"),DE=Symbol.for("react.strict_mode"),NE=Symbol.for("react.profiler"),UE=Symbol.for("react.provider"),IE=Symbol.for("react.context"),OE=Symbol.for("react.forward_ref"),FE=Symbol.for("react.suspense"),kE=Symbol.for("react.memo"),zE=Symbol.for("react.lazy"),Z_=Symbol.iterator;function BE(n){return n===null||typeof n!="object"?null:(n=Z_&&n[Z_]||n["@@iterator"],typeof n=="function"?n:null)}var px={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mx=Object.assign,_x={};function Qa(n,e,t){this.props=n,this.context=e,this.refs=_x,this.updater=t||px}Qa.prototype.isReactComponent={};Qa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Qa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function gx(){}gx.prototype=Qa.prototype;function ym(n,e,t){this.props=n,this.context=e,this.refs=_x,this.updater=t||px}var Sm=ym.prototype=new gx;Sm.constructor=ym;mx(Sm,Qa.prototype);Sm.isPureReactComponent=!0;var Q_=Array.isArray,vx=Object.prototype.hasOwnProperty,Mm={current:null},xx={key:!0,ref:!0,__self:!0,__source:!0};function yx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vx.call(e,i)&&!xx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bu,type:n,key:s,ref:o,props:r,_owner:Mm.current}}function HE(n,e){return{$$typeof:bu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Em(n){return typeof n=="object"&&n!==null&&n.$$typeof===bu}function GE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var J_=/\/+/g;function Cd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?GE(""+n.key):e.toString(36)}function Bc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case bu:case PE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Cd(o,0):i,Q_(r)?(t="",n!=null&&(t=n.replace(J_,"$&/")+"/"),Bc(r,e,t,"",function(u){return u})):r!=null&&(Em(r)&&(r=HE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(J_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Q_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Cd(s,a);o+=Bc(s,e,t,l,r)}else if(l=BE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Cd(s,a++),o+=Bc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bu(n,e,t){if(n==null)return n;var i=[],r=0;return Bc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function VE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var jn={current:null},Hc={transition:null},WE={ReactCurrentDispatcher:jn,ReactCurrentBatchConfig:Hc,ReactCurrentOwner:Mm};function Sx(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Bu,forEach:function(n,e,t){Bu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Bu(n,function(){e++}),e},toArray:function(n){return Bu(n,function(e){return e})||[]},only:function(n){if(!Em(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=Qa;st.Fragment=LE;st.Profiler=NE;st.PureComponent=ym;st.StrictMode=DE;st.Suspense=FE;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WE;st.act=Sx;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=mx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)vx.call(e,l)&&!xx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:bu,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:IE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:UE,_context:n},n.Consumer=n};st.createElement=yx;st.createFactory=function(n){var e=yx.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:OE,render:n}};st.isValidElement=Em;st.lazy=function(n){return{$$typeof:zE,_payload:{_status:-1,_result:n},_init:VE}};st.memo=function(n,e){return{$$typeof:kE,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=Hc.transition;Hc.transition={};try{n()}finally{Hc.transition=e}};st.unstable_act=Sx;st.useCallback=function(n,e){return jn.current.useCallback(n,e)};st.useContext=function(n){return jn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return jn.current.useDeferredValue(n)};st.useEffect=function(n,e){return jn.current.useEffect(n,e)};st.useId=function(){return jn.current.useId()};st.useImperativeHandle=function(n,e,t){return jn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return jn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return jn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return jn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return jn.current.useReducer(n,e,t)};st.useRef=function(n){return jn.current.useRef(n)};st.useState=function(n){return jn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return jn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return jn.current.useTransition()};st.version="18.3.1";hx.exports=st;var Ln=hx.exports;const XE=bE(Ln);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE=Ln,YE=Symbol.for("react.element"),qE=Symbol.for("react.fragment"),$E=Object.prototype.hasOwnProperty,KE=jE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZE={key:!0,ref:!0,__self:!0,__source:!0};function Mx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)$E.call(e,i)&&!ZE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:YE,type:n,key:s,ref:o,props:r,_owner:KE.current}}Qf.Fragment=qE;Qf.jsx=Mx;Qf.jsxs=Mx;dx.exports=Qf;var J=dx.exports,jh={},Ex={exports:{}},Ri={},Tx={exports:{}},wx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,k){var R=N.length;N.push(k);e:for(;0<R;){var $=R-1>>>1,Q=N[$];if(0<r(Q,k))N[$]=k,N[R]=Q,R=$;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var k=N[0],R=N.pop();if(R!==k){N[0]=R;e:for(var $=0,Q=N.length,q=Q>>>1;$<q;){var K=2*($+1)-1,se=N[K],me=K+1,de=N[me];if(0>r(se,R))me<Q&&0>r(de,se)?(N[$]=de,N[me]=R,$=me):(N[$]=se,N[K]=R,$=K);else if(me<Q&&0>r(de,R))N[$]=de,N[me]=R,$=me;else break e}}return k}function r(N,k){var R=N.sortIndex-k.sortIndex;return R!==0?R:N.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var k=t(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=N)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=t(u)}}function y(N){if(_=!1,v(N),!x)if(t(l)!==null)x=!0,H(w);else{var k=t(u);k!==null&&j(y,k.startTime-N)}}function w(N,k){x=!1,_&&(_=!1,f(P),P=-1),p=!0;var R=h;try{for(v(k),d=t(l);d!==null&&(!(d.expirationTime>k)||N&&!I());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var Q=$(d.expirationTime<=k);k=n.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(l)&&i(l),v(k)}else i(l);d=t(l)}if(d!==null)var q=!0;else{var K=t(u);K!==null&&j(y,K.startTime-k),q=!1}return q}finally{d=null,h=R,p=!1}}var T=!1,M=null,P=-1,S=5,E=-1;function I(){return!(n.unstable_now()-E<S)}function U(){if(M!==null){var N=n.unstable_now();E=N;var k=!0;try{k=M(!0,N)}finally{k?Z():(T=!1,M=null)}}else T=!1}var Z;if(typeof g=="function")Z=function(){g(U)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,F=L.port2;L.port1.onmessage=U,Z=function(){F.postMessage(null)}}else Z=function(){m(U,0)};function H(N){M=N,T||(T=!0,Z())}function j(N,k){P=m(function(){N(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,H(w))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var R=h;h=k;try{return N()}finally{h=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,k){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=h;h=N;try{return k()}finally{h=R}},n.unstable_scheduleCallback=function(N,k,R){var $=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=R+Q,N={id:c++,callback:k,priorityLevel:N,startTime:R,expirationTime:Q,sortIndex:-1},R>$?(N.sortIndex=R,e(u,N),t(l)===null&&N===t(u)&&(_?(f(P),P=-1):_=!0,j(y,R-$))):(N.sortIndex=Q,e(l,N),x||p||(x=!0,H(w))),N},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(N){var k=h;return function(){var R=h;h=k;try{return N.apply(this,arguments)}finally{h=R}}}})(wx);Tx.exports=wx;var QE=Tx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JE=Ln,wi=QE;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ax=new Set,tu={};function Do(n,e){Ua(n,e),Ua(n+"Capture",e)}function Ua(n,e){for(tu[n]=e,n=0;n<e.length;n++)Ax.add(e[n])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yh=Object.prototype.hasOwnProperty,e1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eg={},tg={};function t1(n){return Yh.call(tg,n)?!0:Yh.call(eg,n)?!1:e1.test(n)?tg[n]=!0:(eg[n]=!0,!1)}function n1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function i1(n,e,t,i){if(e===null||typeof e>"u"||n1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){xn[n]=new Yn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];xn[e]=new Yn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){xn[n]=new Yn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){xn[n]=new Yn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){xn[n]=new Yn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){xn[n]=new Yn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){xn[n]=new Yn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){xn[n]=new Yn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){xn[n]=new Yn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Tm=/[\-:]([a-z])/g;function wm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Tm,wm);xn[e]=new Yn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Tm,wm);xn[e]=new Yn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Tm,wm);xn[e]=new Yn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){xn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!1,!1)});xn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){xn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Am(n,e,t,i){var r=xn.hasOwnProperty(e)?xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i1(e,t,r,i)&&(t=null),i||r===null?t1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var qr=JE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hu=Symbol.for("react.element"),ia=Symbol.for("react.portal"),ra=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),qh=Symbol.for("react.profiler"),Cx=Symbol.for("react.provider"),Rx=Symbol.for("react.context"),Rm=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),Kh=Symbol.for("react.suspense_list"),bm=Symbol.for("react.memo"),ns=Symbol.for("react.lazy"),bx=Symbol.for("react.offscreen"),ng=Symbol.iterator;function rl(n){return n===null||typeof n!="object"?null:(n=ng&&n[ng]||n["@@iterator"],typeof n=="function"?n:null)}var zt=Object.assign,Rd;function yl(n){if(Rd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Rd=e&&e[1]||""}return`
`+Rd+n}var bd=!1;function Pd(n,e){if(!n||bd)return"";bd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{bd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?yl(n):""}function r1(n){switch(n.tag){case 5:return yl(n.type);case 16:return yl("Lazy");case 13:return yl("Suspense");case 19:return yl("SuspenseList");case 0:case 2:case 15:return n=Pd(n.type,!1),n;case 11:return n=Pd(n.type.render,!1),n;case 1:return n=Pd(n.type,!0),n;default:return""}}function Zh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ra:return"Fragment";case ia:return"Portal";case qh:return"Profiler";case Cm:return"StrictMode";case $h:return"Suspense";case Kh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Rx:return(n.displayName||"Context")+".Consumer";case Cx:return(n._context.displayName||"Context")+".Provider";case Rm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case bm:return e=n.displayName||null,e!==null?e:Zh(n.type)||"Memo";case ns:e=n._payload,n=n._init;try{return Zh(n(e))}catch{}}return null}function s1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zh(e);case 8:return e===Cm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ps(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Px(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o1(n){var e=Px(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Gu(n){n._valueTracker||(n._valueTracker=o1(n))}function Lx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Px(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function uf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Qh(n,e){var t=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function ig(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ps(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dx(n,e){e=e.checked,e!=null&&Am(n,"checked",e,!1)}function Jh(n,e){Dx(n,e);var t=Ps(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ep(n,e.type,t):e.hasOwnProperty("defaultValue")&&ep(n,e.type,Ps(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function rg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ep(n,e,t){(e!=="number"||uf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Sl=Array.isArray;function ya(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ps(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function tp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function sg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(Sl(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ps(t)}}function Nx(n,e){var t=Ps(e.value),i=Ps(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function og(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ux(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ux(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vu,Ix=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Vu=Vu||document.createElement("div"),Vu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function nu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Dl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a1=["Webkit","ms","Moz","O"];Object.keys(Dl).forEach(function(n){a1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Dl[e]=Dl[n]})});function Ox(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Dl.hasOwnProperty(n)&&Dl[n]?(""+e).trim():e+"px"}function Fx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ox(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var l1=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ip(n,e){if(e){if(l1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function rp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sp=null;function Pm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var op=null,Sa=null,Ma=null;function ag(n){if(n=Du(n)){if(typeof op!="function")throw Error(re(280));var e=n.stateNode;e&&(e=id(e),op(n.stateNode,n.type,e))}}function kx(n){Sa?Ma?Ma.push(n):Ma=[n]:Sa=n}function zx(){if(Sa){var n=Sa,e=Ma;if(Ma=Sa=null,ag(n),e)for(n=0;n<e.length;n++)ag(e[n])}}function Bx(n,e){return n(e)}function Hx(){}var Ld=!1;function Gx(n,e,t){if(Ld)return n(e,t);Ld=!0;try{return Bx(n,e,t)}finally{Ld=!1,(Sa!==null||Ma!==null)&&(Hx(),zx())}}function iu(n,e){var t=n.stateNode;if(t===null)return null;var i=id(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var ap=!1;if(Hr)try{var sl={};Object.defineProperty(sl,"passive",{get:function(){ap=!0}}),window.addEventListener("test",sl,sl),window.removeEventListener("test",sl,sl)}catch{ap=!1}function u1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Nl=!1,cf=null,ff=!1,lp=null,c1={onError:function(n){Nl=!0,cf=n}};function f1(n,e,t,i,r,s,o,a,l){Nl=!1,cf=null,u1.apply(c1,arguments)}function d1(n,e,t,i,r,s,o,a,l){if(f1.apply(this,arguments),Nl){if(Nl){var u=cf;Nl=!1,cf=null}else throw Error(re(198));ff||(ff=!0,lp=u)}}function No(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Vx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function lg(n){if(No(n)!==n)throw Error(re(188))}function h1(n){var e=n.alternate;if(!e){if(e=No(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return lg(r),n;if(s===i)return lg(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function Wx(n){return n=h1(n),n!==null?Xx(n):null}function Xx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Xx(n);if(e!==null)return e;n=n.sibling}return null}var jx=wi.unstable_scheduleCallback,ug=wi.unstable_cancelCallback,p1=wi.unstable_shouldYield,m1=wi.unstable_requestPaint,Wt=wi.unstable_now,_1=wi.unstable_getCurrentPriorityLevel,Lm=wi.unstable_ImmediatePriority,Yx=wi.unstable_UserBlockingPriority,df=wi.unstable_NormalPriority,g1=wi.unstable_LowPriority,qx=wi.unstable_IdlePriority,Jf=null,xr=null;function v1(n){if(xr&&typeof xr.onCommitFiberRoot=="function")try{xr.onCommitFiberRoot(Jf,n,void 0,(n.current.flags&128)===128)}catch{}}var rr=Math.clz32?Math.clz32:S1,x1=Math.log,y1=Math.LN2;function S1(n){return n>>>=0,n===0?32:31-(x1(n)/y1|0)|0}var Wu=64,Xu=4194304;function Ml(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ml(a):(s&=o,s!==0&&(i=Ml(s)))}else o=t&~r,o!==0?i=Ml(o):s!==0&&(i=Ml(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-rr(e),r=1<<t,i|=n[t],e&=~r;return i}function M1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-rr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=M1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function up(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $x(){var n=Wu;return Wu<<=1,!(Wu&4194240)&&(Wu=64),n}function Dd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Pu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-rr(e),n[e]=t}function T1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-rr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Dm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-rr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var gt=0;function Kx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Zx,Nm,Qx,Jx,ey,cp=!1,ju=[],_s=null,gs=null,vs=null,ru=new Map,su=new Map,rs=[],w1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cg(n,e){switch(n){case"focusin":case"focusout":_s=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":vs=null;break;case"pointerover":case"pointerout":ru.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":su.delete(e.pointerId)}}function ol(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Du(e),e!==null&&Nm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function A1(n,e,t,i,r){switch(e){case"focusin":return _s=ol(_s,n,e,t,i,r),!0;case"dragenter":return gs=ol(gs,n,e,t,i,r),!0;case"mouseover":return vs=ol(vs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ru.set(s,ol(ru.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,su.set(s,ol(su.get(s)||null,n,e,t,i,r)),!0}return!1}function ty(n){var e=ro(n.target);if(e!==null){var t=No(e);if(t!==null){if(e=t.tag,e===13){if(e=Vx(t),e!==null){n.blockedOn=e,ey(n.priority,function(){Qx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Gc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=fp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);sp=i,t.target.dispatchEvent(i),sp=null}else return e=Du(t),e!==null&&Nm(e),n.blockedOn=t,!1;e.shift()}return!0}function fg(n,e,t){Gc(n)&&t.delete(e)}function C1(){cp=!1,_s!==null&&Gc(_s)&&(_s=null),gs!==null&&Gc(gs)&&(gs=null),vs!==null&&Gc(vs)&&(vs=null),ru.forEach(fg),su.forEach(fg)}function al(n,e){n.blockedOn===e&&(n.blockedOn=null,cp||(cp=!0,wi.unstable_scheduleCallback(wi.unstable_NormalPriority,C1)))}function ou(n){function e(r){return al(r,n)}if(0<ju.length){al(ju[0],n);for(var t=1;t<ju.length;t++){var i=ju[t];i.blockedOn===n&&(i.blockedOn=null)}}for(_s!==null&&al(_s,n),gs!==null&&al(gs,n),vs!==null&&al(vs,n),ru.forEach(e),su.forEach(e),t=0;t<rs.length;t++)i=rs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<rs.length&&(t=rs[0],t.blockedOn===null);)ty(t),t.blockedOn===null&&rs.shift()}var Ea=qr.ReactCurrentBatchConfig,pf=!0;function R1(n,e,t,i){var r=gt,s=Ea.transition;Ea.transition=null;try{gt=1,Um(n,e,t,i)}finally{gt=r,Ea.transition=s}}function b1(n,e,t,i){var r=gt,s=Ea.transition;Ea.transition=null;try{gt=4,Um(n,e,t,i)}finally{gt=r,Ea.transition=s}}function Um(n,e,t,i){if(pf){var r=fp(n,e,t,i);if(r===null)Gd(n,e,i,mf,t),cg(n,i);else if(A1(r,n,e,t,i))i.stopPropagation();else if(cg(n,i),e&4&&-1<w1.indexOf(n)){for(;r!==null;){var s=Du(r);if(s!==null&&Zx(s),s=fp(n,e,t,i),s===null&&Gd(n,e,i,mf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gd(n,e,i,null,t)}}var mf=null;function fp(n,e,t,i){if(mf=null,n=Pm(i),n=ro(n),n!==null)if(e=No(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Vx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return mf=n,null}function ny(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_1()){case Lm:return 1;case Yx:return 4;case df:case g1:return 16;case qx:return 536870912;default:return 16}default:return 16}}var os=null,Im=null,Vc=null;function iy(){if(Vc)return Vc;var n,e=Im,t=e.length,i,r="value"in os?os.value:os.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Vc=r.slice(n,1<i?1-i:void 0)}function Wc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Yu(){return!0}function dg(){return!1}function bi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yu:dg,this.isPropagationStopped=dg,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yu)},persist:function(){},isPersistent:Yu}),e}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Om=bi(Ja),Lu=zt({},Ja,{view:0,detail:0}),P1=bi(Lu),Nd,Ud,ll,ed=zt({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ll&&(ll&&n.type==="mousemove"?(Nd=n.screenX-ll.screenX,Ud=n.screenY-ll.screenY):Ud=Nd=0,ll=n),Nd)},movementY:function(n){return"movementY"in n?n.movementY:Ud}}),hg=bi(ed),L1=zt({},ed,{dataTransfer:0}),D1=bi(L1),N1=zt({},Lu,{relatedTarget:0}),Id=bi(N1),U1=zt({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),I1=bi(U1),O1=zt({},Ja,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),F1=bi(O1),k1=zt({},Ja,{data:0}),pg=bi(k1),z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=H1[n])?!!e[n]:!1}function Fm(){return G1}var V1=zt({},Lu,{key:function(n){if(n.key){var e=z1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Wc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?B1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fm,charCode:function(n){return n.type==="keypress"?Wc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),W1=bi(V1),X1=zt({},ed,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mg=bi(X1),j1=zt({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fm}),Y1=bi(j1),q1=zt({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),$1=bi(q1),K1=zt({},ed,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Z1=bi(K1),Q1=[9,13,27,32],km=Hr&&"CompositionEvent"in window,Ul=null;Hr&&"documentMode"in document&&(Ul=document.documentMode);var J1=Hr&&"TextEvent"in window&&!Ul,ry=Hr&&(!km||Ul&&8<Ul&&11>=Ul),_g=" ",gg=!1;function sy(n,e){switch(n){case"keyup":return Q1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var sa=!1;function eT(n,e){switch(n){case"compositionend":return oy(e);case"keypress":return e.which!==32?null:(gg=!0,_g);case"textInput":return n=e.data,n===_g&&gg?null:n;default:return null}}function tT(n,e){if(sa)return n==="compositionend"||!km&&sy(n,e)?(n=iy(),Vc=Im=os=null,sa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ry&&e.locale!=="ko"?null:e.data;default:return null}}var nT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!nT[n.type]:e==="textarea"}function ay(n,e,t,i){kx(i),e=_f(e,"onChange"),0<e.length&&(t=new Om("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Il=null,au=null;function iT(n){vy(n,0)}function td(n){var e=la(n);if(Lx(e))return n}function rT(n,e){if(n==="change")return e}var ly=!1;if(Hr){var Od;if(Hr){var Fd="oninput"in document;if(!Fd){var xg=document.createElement("div");xg.setAttribute("oninput","return;"),Fd=typeof xg.oninput=="function"}Od=Fd}else Od=!1;ly=Od&&(!document.documentMode||9<document.documentMode)}function yg(){Il&&(Il.detachEvent("onpropertychange",uy),au=Il=null)}function uy(n){if(n.propertyName==="value"&&td(au)){var e=[];ay(e,au,n,Pm(n)),Gx(iT,e)}}function sT(n,e,t){n==="focusin"?(yg(),Il=e,au=t,Il.attachEvent("onpropertychange",uy)):n==="focusout"&&yg()}function oT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return td(au)}function aT(n,e){if(n==="click")return td(e)}function lT(n,e){if(n==="input"||n==="change")return td(e)}function uT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ar=typeof Object.is=="function"?Object.is:uT;function lu(n,e){if(ar(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Yh.call(e,r)||!ar(n[r],e[r]))return!1}return!0}function Sg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mg(n,e){var t=Sg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Sg(t)}}function cy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?cy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function fy(){for(var n=window,e=uf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=uf(n.document)}return e}function zm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function cT(n){var e=fy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&cy(t.ownerDocument.documentElement,t)){if(i!==null&&zm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Mg(t,s);var o=Mg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fT=Hr&&"documentMode"in document&&11>=document.documentMode,oa=null,dp=null,Ol=null,hp=!1;function Eg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hp||oa==null||oa!==uf(i)||(i=oa,"selectionStart"in i&&zm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ol&&lu(Ol,i)||(Ol=i,i=_f(dp,"onSelect"),0<i.length&&(e=new Om("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=oa)))}function qu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var aa={animationend:qu("Animation","AnimationEnd"),animationiteration:qu("Animation","AnimationIteration"),animationstart:qu("Animation","AnimationStart"),transitionend:qu("Transition","TransitionEnd")},kd={},dy={};Hr&&(dy=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function nd(n){if(kd[n])return kd[n];if(!aa[n])return n;var e=aa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in dy)return kd[n]=e[t];return n}var hy=nd("animationend"),py=nd("animationiteration"),my=nd("animationstart"),_y=nd("transitionend"),gy=new Map,Tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fs(n,e){gy.set(n,e),Do(e,[n])}for(var zd=0;zd<Tg.length;zd++){var Bd=Tg[zd],dT=Bd.toLowerCase(),hT=Bd[0].toUpperCase()+Bd.slice(1);Fs(dT,"on"+hT)}Fs(hy,"onAnimationEnd");Fs(py,"onAnimationIteration");Fs(my,"onAnimationStart");Fs("dblclick","onDoubleClick");Fs("focusin","onFocus");Fs("focusout","onBlur");Fs(_y,"onTransitionEnd");Ua("onMouseEnter",["mouseout","mouseover"]);Ua("onMouseLeave",["mouseout","mouseover"]);Ua("onPointerEnter",["pointerout","pointerover"]);Ua("onPointerLeave",["pointerout","pointerover"]);Do("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Do("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Do("onBeforeInput",["compositionend","keypress","textInput","paste"]);Do("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pT=new Set("cancel close invalid load scroll toggle".split(" ").concat(El));function wg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,d1(i,e,void 0,n),n.currentTarget=null}function vy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;wg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;wg(r,a,u),s=l}}}if(ff)throw n=lp,ff=!1,lp=null,n}function Ct(n,e){var t=e[vp];t===void 0&&(t=e[vp]=new Set);var i=n+"__bubble";t.has(i)||(xy(e,n,2,!1),t.add(i))}function Hd(n,e,t){var i=0;e&&(i|=4),xy(t,n,i,e)}var $u="_reactListening"+Math.random().toString(36).slice(2);function uu(n){if(!n[$u]){n[$u]=!0,Ax.forEach(function(t){t!=="selectionchange"&&(pT.has(t)||Hd(t,!1,n),Hd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[$u]||(e[$u]=!0,Hd("selectionchange",!1,e))}}function xy(n,e,t,i){switch(ny(e)){case 1:var r=R1;break;case 4:r=b1;break;default:r=Um}t=r.bind(null,e,t,n),r=void 0,!ap||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Gd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ro(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Gx(function(){var u=s,c=Pm(t),d=[];e:{var h=gy.get(n);if(h!==void 0){var p=Om,x=n;switch(n){case"keypress":if(Wc(t)===0)break e;case"keydown":case"keyup":p=W1;break;case"focusin":x="focus",p=Id;break;case"focusout":x="blur",p=Id;break;case"beforeblur":case"afterblur":p=Id;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=D1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Y1;break;case hy:case py:case my:p=I1;break;case _y:p=$1;break;case"scroll":p=P1;break;case"wheel":p=Z1;break;case"copy":case"cut":case"paste":p=F1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=mg}var _=(e&4)!==0,m=!_&&n==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var g=u,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=iu(g,f),y!=null&&_.push(cu(g,y,v)))),m)break;g=g.return}0<_.length&&(h=new p(h,x,null,t,c),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==sp&&(x=t.relatedTarget||t.fromElement)&&(ro(x)||x[Gr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?ro(x):null,x!==null&&(m=No(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(_=hg,y="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=mg,y="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:la(p),v=x==null?h:la(x),h=new _(y,g+"leave",p,t,c),h.target=m,h.relatedTarget=v,y=null,ro(c)===u&&(_=new _(f,g+"enter",x,t,c),_.target=v,_.relatedTarget=m,y=_),m=y,p&&x)t:{for(_=p,f=x,g=0,v=_;v;v=Io(v))g++;for(v=0,y=f;y;y=Io(y))v++;for(;0<g-v;)_=Io(_),g--;for(;0<v-g;)f=Io(f),v--;for(;g--;){if(_===f||f!==null&&_===f.alternate)break t;_=Io(_),f=Io(f)}_=null}else _=null;p!==null&&Ag(d,h,p,_,!1),x!==null&&m!==null&&Ag(d,m,x,_,!0)}}e:{if(h=u?la(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=rT;else if(vg(h))if(ly)w=lT;else{w=oT;var T=sT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=aT);if(w&&(w=w(n,u))){ay(d,w,t,c);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ep(h,"number",h.value)}switch(T=u?la(u):window,n){case"focusin":(vg(T)||T.contentEditable==="true")&&(oa=T,dp=u,Ol=null);break;case"focusout":Ol=dp=oa=null;break;case"mousedown":hp=!0;break;case"contextmenu":case"mouseup":case"dragend":hp=!1,Eg(d,t,c);break;case"selectionchange":if(fT)break;case"keydown":case"keyup":Eg(d,t,c)}var M;if(km)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else sa?sy(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(ry&&t.locale!=="ko"&&(sa||P!=="onCompositionStart"?P==="onCompositionEnd"&&sa&&(M=iy()):(os=c,Im="value"in os?os.value:os.textContent,sa=!0)),T=_f(u,P),0<T.length&&(P=new pg(P,n,null,t,c),d.push({event:P,listeners:T}),M?P.data=M:(M=oy(t),M!==null&&(P.data=M)))),(M=J1?eT(n,t):tT(n,t))&&(u=_f(u,"onBeforeInput"),0<u.length&&(c=new pg("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}vy(d,e)})}function cu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function _f(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=iu(n,t),s!=null&&i.unshift(cu(n,s,r)),s=iu(n,e),s!=null&&i.push(cu(n,s,r))),n=n.return}return i}function Io(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ag(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=iu(t,s),l!=null&&o.unshift(cu(t,l,a))):r||(l=iu(t,s),l!=null&&o.push(cu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var mT=/\r\n?/g,_T=/\u0000|\uFFFD/g;function Cg(n){return(typeof n=="string"?n:""+n).replace(mT,`
`).replace(_T,"")}function Ku(n,e,t){if(e=Cg(e),Cg(n)!==e&&t)throw Error(re(425))}function gf(){}var pp=null,mp=null;function _p(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gp=typeof setTimeout=="function"?setTimeout:void 0,gT=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,vT=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(n){return Rg.resolve(null).then(n).catch(xT)}:gp;function xT(n){setTimeout(function(){throw n})}function Vd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ou(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ou(e)}function xs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function bg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var el=Math.random().toString(36).slice(2),pr="__reactFiber$"+el,fu="__reactProps$"+el,Gr="__reactContainer$"+el,vp="__reactEvents$"+el,yT="__reactListeners$"+el,ST="__reactHandles$"+el;function ro(n){var e=n[pr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Gr]||t[pr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=bg(n);n!==null;){if(t=n[pr])return t;n=bg(n)}return e}n=t,t=n.parentNode}return null}function Du(n){return n=n[pr]||n[Gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function la(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function id(n){return n[fu]||null}var xp=[],ua=-1;function ks(n){return{current:n}}function bt(n){0>ua||(n.current=xp[ua],xp[ua]=null,ua--)}function wt(n,e){ua++,xp[ua]=n.current,n.current=e}var Ls={},Nn=ks(Ls),Jn=ks(!1),Mo=Ls;function Ia(n,e){var t=n.type.contextTypes;if(!t)return Ls;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ei(n){return n=n.childContextTypes,n!=null}function vf(){bt(Jn),bt(Nn)}function Pg(n,e,t){if(Nn.current!==Ls)throw Error(re(168));wt(Nn,e),wt(Jn,t)}function yy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,s1(n)||"Unknown",r));return zt({},t,i)}function xf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ls,Mo=Nn.current,wt(Nn,n),wt(Jn,Jn.current),!0}function Lg(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=yy(n,e,Mo),i.__reactInternalMemoizedMergedChildContext=n,bt(Jn),bt(Nn),wt(Nn,n)):bt(Jn),wt(Jn,t)}var Lr=null,rd=!1,Wd=!1;function Sy(n){Lr===null?Lr=[n]:Lr.push(n)}function MT(n){rd=!0,Sy(n)}function zs(){if(!Wd&&Lr!==null){Wd=!0;var n=0,e=gt;try{var t=Lr;for(gt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Lr=null,rd=!1}catch(r){throw Lr!==null&&(Lr=Lr.slice(n+1)),jx(Lm,zs),r}finally{gt=e,Wd=!1}}return null}var ca=[],fa=0,yf=null,Sf=0,Ni=[],Ui=0,Eo=null,Ir=1,Or="";function $s(n,e){ca[fa++]=Sf,ca[fa++]=yf,yf=n,Sf=e}function My(n,e,t){Ni[Ui++]=Ir,Ni[Ui++]=Or,Ni[Ui++]=Eo,Eo=n;var i=Ir;n=Or;var r=32-rr(i)-1;i&=~(1<<r),t+=1;var s=32-rr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ir=1<<32-rr(e)+r|t<<r|i,Or=s+n}else Ir=1<<s|t<<r|i,Or=n}function Bm(n){n.return!==null&&($s(n,1),My(n,1,0))}function Hm(n){for(;n===yf;)yf=ca[--fa],ca[fa]=null,Sf=ca[--fa],ca[fa]=null;for(;n===Eo;)Eo=Ni[--Ui],Ni[Ui]=null,Or=Ni[--Ui],Ni[Ui]=null,Ir=Ni[--Ui],Ni[Ui]=null}var Si=null,vi=null,Lt=!1,er=null;function Ey(n,e){var t=Bi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Dg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Si=n,vi=xs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Si=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Eo!==null?{id:Ir,overflow:Or}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Bi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Si=n,vi=null,!0):!1;default:return!1}}function yp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Sp(n){if(Lt){var e=vi;if(e){var t=e;if(!Dg(n,e)){if(yp(n))throw Error(re(418));e=xs(t.nextSibling);var i=Si;e&&Dg(n,e)?Ey(i,t):(n.flags=n.flags&-4097|2,Lt=!1,Si=n)}}else{if(yp(n))throw Error(re(418));n.flags=n.flags&-4097|2,Lt=!1,Si=n}}}function Ng(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Si=n}function Zu(n){if(n!==Si)return!1;if(!Lt)return Ng(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!_p(n.type,n.memoizedProps)),e&&(e=vi)){if(yp(n))throw Ty(),Error(re(418));for(;e;)Ey(n,e),e=xs(e.nextSibling)}if(Ng(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=xs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=Si?xs(n.stateNode.nextSibling):null;return!0}function Ty(){for(var n=vi;n;)n=xs(n.nextSibling)}function Oa(){vi=Si=null,Lt=!1}function Gm(n){er===null?er=[n]:er.push(n)}var ET=qr.ReactCurrentBatchConfig;function ul(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function Qu(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ug(n){var e=n._init;return e(n._payload)}function wy(n){function e(f,g){if(n){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Es(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,n?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,g,v,y){return g===null||g.tag!==6?(g=Zd(v,f.mode,y),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,y){var w=v.type;return w===ra?c(f,g,v.props.children,y,v.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ns&&Ug(w)===g.type)?(y=r(g,v.props),y.ref=ul(f,g,v),y.return=f,y):(y=Zc(v.type,v.key,v.props,null,f.mode,y),y.ref=ul(f,g,v),y.return=f,y)}function u(f,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Qd(v,f.mode,y),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function c(f,g,v,y,w){return g===null||g.tag!==7?(g=co(v,f.mode,y,w),g.return=f,g):(g=r(g,v),g.return=f,g)}function d(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Zd(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Hu:return v=Zc(g.type,g.key,g.props,null,f.mode,v),v.ref=ul(f,null,g),v.return=f,v;case ia:return g=Qd(g,f.mode,v),g.return=f,g;case ns:var y=g._init;return d(f,y(g._payload),v)}if(Sl(g)||rl(g))return g=co(g,f.mode,v,null),g.return=f,g;Qu(f,g)}return null}function h(f,g,v,y){var w=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return w!==null?null:a(f,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Hu:return v.key===w?l(f,g,v,y):null;case ia:return v.key===w?u(f,g,v,y):null;case ns:return w=v._init,h(f,g,w(v._payload),y)}if(Sl(v)||rl(v))return w!==null?null:c(f,g,v,y,null);Qu(f,v)}return null}function p(f,g,v,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(g,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Hu:return f=f.get(y.key===null?v:y.key)||null,l(g,f,y,w);case ia:return f=f.get(y.key===null?v:y.key)||null,u(g,f,y,w);case ns:var T=y._init;return p(f,g,v,T(y._payload),w)}if(Sl(y)||rl(y))return f=f.get(v)||null,c(g,f,y,w,null);Qu(g,y)}return null}function x(f,g,v,y){for(var w=null,T=null,M=g,P=g=0,S=null;M!==null&&P<v.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var E=h(f,M,v[P],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(f,M),g=s(E,g,P),T===null?w=E:T.sibling=E,T=E,M=S}if(P===v.length)return t(f,M),Lt&&$s(f,P),w;if(M===null){for(;P<v.length;P++)M=d(f,v[P],y),M!==null&&(g=s(M,g,P),T===null?w=M:T.sibling=M,T=M);return Lt&&$s(f,P),w}for(M=i(f,M);P<v.length;P++)S=p(M,f,P,v[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),g=s(S,g,P),T===null?w=S:T.sibling=S,T=S);return n&&M.forEach(function(I){return e(f,I)}),Lt&&$s(f,P),w}function _(f,g,v,y){var w=rl(v);if(typeof w!="function")throw Error(re(150));if(v=w.call(v),v==null)throw Error(re(151));for(var T=w=null,M=g,P=g=0,S=null,E=v.next();M!==null&&!E.done;P++,E=v.next()){M.index>P?(S=M,M=null):S=M.sibling;var I=h(f,M,E.value,y);if(I===null){M===null&&(M=S);break}n&&M&&I.alternate===null&&e(f,M),g=s(I,g,P),T===null?w=I:T.sibling=I,T=I,M=S}if(E.done)return t(f,M),Lt&&$s(f,P),w;if(M===null){for(;!E.done;P++,E=v.next())E=d(f,E.value,y),E!==null&&(g=s(E,g,P),T===null?w=E:T.sibling=E,T=E);return Lt&&$s(f,P),w}for(M=i(f,M);!E.done;P++,E=v.next())E=p(M,f,P,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?P:E.key),g=s(E,g,P),T===null?w=E:T.sibling=E,T=E);return n&&M.forEach(function(U){return e(f,U)}),Lt&&$s(f,P),w}function m(f,g,v,y){if(typeof v=="object"&&v!==null&&v.type===ra&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Hu:e:{for(var w=v.key,T=g;T!==null;){if(T.key===w){if(w=v.type,w===ra){if(T.tag===7){t(f,T.sibling),g=r(T,v.props.children),g.return=f,f=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ns&&Ug(w)===T.type){t(f,T.sibling),g=r(T,v.props),g.ref=ul(f,T,v),g.return=f,f=g;break e}t(f,T);break}else e(f,T);T=T.sibling}v.type===ra?(g=co(v.props.children,f.mode,y,v.key),g.return=f,f=g):(y=Zc(v.type,v.key,v.props,null,f.mode,y),y.ref=ul(f,g,v),y.return=f,f=y)}return o(f);case ia:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{t(f,g);break}else e(f,g);g=g.sibling}g=Qd(v,f.mode,y),g.return=f,f=g}return o(f);case ns:return T=v._init,m(f,g,T(v._payload),y)}if(Sl(v))return x(f,g,v,y);if(rl(v))return _(f,g,v,y);Qu(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(f,g.sibling),g=r(g,v),g.return=f,f=g):(t(f,g),g=Zd(v,f.mode,y),g.return=f,f=g),o(f)):t(f,g)}return m}var Fa=wy(!0),Ay=wy(!1),Mf=ks(null),Ef=null,da=null,Vm=null;function Wm(){Vm=da=Ef=null}function Xm(n){var e=Mf.current;bt(Mf),n._currentValue=e}function Mp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ta(n,e){Ef=n,Vm=da=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Xi(n){var e=n._currentValue;if(Vm!==n)if(n={context:n,memoizedValue:e,next:null},da===null){if(Ef===null)throw Error(re(308));da=n,Ef.dependencies={lanes:0,firstContext:n}}else da=da.next=n;return e}var so=null;function jm(n){so===null?so=[n]:so.push(n)}function Cy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,jm(e)):(t.next=r.next,r.next=t),e.interleaved=t,Vr(n,i)}function Vr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var is=!1;function Ym(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ry(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ys(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vr(n,t)}return r=i.interleaved,r===null?(e.next=e,jm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vr(n,t)}function Xc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Dm(n,t)}}function Ig(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Tf(n,e,t,i){var r=n.updateQueue;is=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,_=a;switch(h=e,p=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=zt({},d,h);break e;case 2:is=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wo|=o,n.lanes=o,n.memoizedState=d}}function Og(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Nu={},yr=ks(Nu),du=ks(Nu),hu=ks(Nu);function oo(n){if(n===Nu)throw Error(re(174));return n}function qm(n,e){switch(wt(hu,e),wt(du,n),wt(yr,Nu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:np(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=np(e,n)}bt(yr),wt(yr,e)}function ka(){bt(yr),bt(du),bt(hu)}function by(n){oo(hu.current);var e=oo(yr.current),t=np(e,n.type);e!==t&&(wt(du,n),wt(yr,t))}function $m(n){du.current===n&&(bt(yr),bt(du))}var It=ks(0);function wf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xd=[];function Km(){for(var n=0;n<Xd.length;n++)Xd[n]._workInProgressVersionPrimary=null;Xd.length=0}var jc=qr.ReactCurrentDispatcher,jd=qr.ReactCurrentBatchConfig,To=0,kt=null,en=null,un=null,Af=!1,Fl=!1,pu=0,TT=0;function Sn(){throw Error(re(321))}function Zm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ar(n[t],e[t]))return!1;return!0}function Qm(n,e,t,i,r,s){if(To=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jc.current=n===null||n.memoizedState===null?RT:bT,n=t(i,r),Fl){s=0;do{if(Fl=!1,pu=0,25<=s)throw Error(re(301));s+=1,un=en=null,e.updateQueue=null,jc.current=PT,n=t(i,r)}while(Fl)}if(jc.current=Cf,e=en!==null&&en.next!==null,To=0,un=en=kt=null,Af=!1,e)throw Error(re(300));return n}function Jm(){var n=pu!==0;return pu=0,n}function cr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?kt.memoizedState=un=n:un=un.next=n,un}function ji(){if(en===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var e=un===null?kt.memoizedState:un.next;if(e!==null)un=e,en=n;else{if(n===null)throw Error(re(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},un===null?kt.memoizedState=un=n:un=un.next=n}return un}function mu(n,e){return typeof e=="function"?e(n):e}function Yd(n){var e=ji(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=en,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((To&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,kt.lanes|=c,wo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ar(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,kt.lanes|=s,wo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function qd(n){var e=ji(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ar(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Py(){}function Ly(n,e){var t=kt,i=ji(),r=e(),s=!ar(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,e_(Uy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||un!==null&&un.memoizedState.tag&1){if(t.flags|=2048,_u(9,Ny.bind(null,t,i,r,e),void 0,null),fn===null)throw Error(re(349));To&30||Dy(t,e,r)}return r}function Dy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ny(n,e,t,i){e.value=t,e.getSnapshot=i,Iy(e)&&Oy(n)}function Uy(n,e,t){return t(function(){Iy(e)&&Oy(n)})}function Iy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ar(n,t)}catch{return!0}}function Oy(n){var e=Vr(n,1);e!==null&&sr(e,n,1,-1)}function Fg(n){var e=cr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mu,lastRenderedState:n},e.queue=n,n=n.dispatch=CT.bind(null,kt,n),[e.memoizedState,n]}function _u(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Fy(){return ji().memoizedState}function Yc(n,e,t,i){var r=cr();kt.flags|=n,r.memoizedState=_u(1|e,t,void 0,i===void 0?null:i)}function sd(n,e,t,i){var r=ji();i=i===void 0?null:i;var s=void 0;if(en!==null){var o=en.memoizedState;if(s=o.destroy,i!==null&&Zm(i,o.deps)){r.memoizedState=_u(e,t,s,i);return}}kt.flags|=n,r.memoizedState=_u(1|e,t,s,i)}function kg(n,e){return Yc(8390656,8,n,e)}function e_(n,e){return sd(2048,8,n,e)}function ky(n,e){return sd(4,2,n,e)}function zy(n,e){return sd(4,4,n,e)}function By(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Hy(n,e,t){return t=t!=null?t.concat([n]):null,sd(4,4,By.bind(null,e,n),t)}function t_(){}function Gy(n,e){var t=ji();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Zm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Vy(n,e){var t=ji();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Zm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Wy(n,e,t){return To&21?(ar(t,e)||(t=$x(),kt.lanes|=t,wo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function wT(n,e){var t=gt;gt=t!==0&&4>t?t:4,n(!0);var i=jd.transition;jd.transition={};try{n(!1),e()}finally{gt=t,jd.transition=i}}function Xy(){return ji().memoizedState}function AT(n,e,t){var i=Ms(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},jy(n))Yy(e,t);else if(t=Cy(n,e,t,i),t!==null){var r=Xn();sr(t,n,i,r),qy(t,e,i)}}function CT(n,e,t){var i=Ms(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(jy(n))Yy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ar(a,o)){var l=e.interleaved;l===null?(r.next=r,jm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Cy(n,e,r,i),t!==null&&(r=Xn(),sr(t,n,i,r),qy(t,e,i))}}function jy(n){var e=n.alternate;return n===kt||e!==null&&e===kt}function Yy(n,e){Fl=Af=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function qy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Dm(n,t)}}var Cf={readContext:Xi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},RT={readContext:Xi,useCallback:function(n,e){return cr().memoizedState=[n,e===void 0?null:e],n},useContext:Xi,useEffect:kg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Yc(4194308,4,By.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Yc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Yc(4,2,n,e)},useMemo:function(n,e){var t=cr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=cr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=AT.bind(null,kt,n),[i.memoizedState,n]},useRef:function(n){var e=cr();return n={current:n},e.memoizedState=n},useState:Fg,useDebugValue:t_,useDeferredValue:function(n){return cr().memoizedState=n},useTransition:function(){var n=Fg(!1),e=n[0];return n=wT.bind(null,n[1]),cr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=kt,r=cr();if(Lt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),fn===null)throw Error(re(349));To&30||Dy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,kg(Uy.bind(null,i,s,n),[n]),i.flags|=2048,_u(9,Ny.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=cr(),e=fn.identifierPrefix;if(Lt){var t=Or,i=Ir;t=(i&~(1<<32-rr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=pu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=TT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},bT={readContext:Xi,useCallback:Gy,useContext:Xi,useEffect:e_,useImperativeHandle:Hy,useInsertionEffect:ky,useLayoutEffect:zy,useMemo:Vy,useReducer:Yd,useRef:Fy,useState:function(){return Yd(mu)},useDebugValue:t_,useDeferredValue:function(n){var e=ji();return Wy(e,en.memoizedState,n)},useTransition:function(){var n=Yd(mu)[0],e=ji().memoizedState;return[n,e]},useMutableSource:Py,useSyncExternalStore:Ly,useId:Xy,unstable_isNewReconciler:!1},PT={readContext:Xi,useCallback:Gy,useContext:Xi,useEffect:e_,useImperativeHandle:Hy,useInsertionEffect:ky,useLayoutEffect:zy,useMemo:Vy,useReducer:qd,useRef:Fy,useState:function(){return qd(mu)},useDebugValue:t_,useDeferredValue:function(n){var e=ji();return en===null?e.memoizedState=n:Wy(e,en.memoizedState,n)},useTransition:function(){var n=qd(mu)[0],e=ji().memoizedState;return[n,e]},useMutableSource:Py,useSyncExternalStore:Ly,useId:Xy,unstable_isNewReconciler:!1};function Qi(n,e){if(n&&n.defaultProps){e=zt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ep(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:zt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var od={isMounted:function(n){return(n=n._reactInternals)?No(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Xn(),r=Ms(n),s=zr(i,r);s.payload=e,t!=null&&(s.callback=t),e=ys(n,s,r),e!==null&&(sr(e,n,r,i),Xc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Xn(),r=Ms(n),s=zr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ys(n,s,r),e!==null&&(sr(e,n,r,i),Xc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Xn(),i=Ms(n),r=zr(t,i);r.tag=2,e!=null&&(r.callback=e),e=ys(n,r,i),e!==null&&(sr(e,n,i,t),Xc(e,n,i))}};function zg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!lu(t,i)||!lu(r,s):!0}function $y(n,e,t){var i=!1,r=Ls,s=e.contextType;return typeof s=="object"&&s!==null?s=Xi(s):(r=ei(e)?Mo:Nn.current,i=e.contextTypes,s=(i=i!=null)?Ia(n,r):Ls),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=od,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Bg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&od.enqueueReplaceState(e,e.state,null)}function Tp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ym(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xi(s):(s=ei(e)?Mo:Nn.current,r.context=Ia(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ep(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&od.enqueueReplaceState(r,r.state,null),Tf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function za(n,e){try{var t="",i=e;do t+=r1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function $d(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function wp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var LT=typeof WeakMap=="function"?WeakMap:Map;function Ky(n,e,t){t=zr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){bf||(bf=!0,Ip=i),wp(n,e)},t}function Zy(n,e,t){t=zr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){wp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){wp(n,e),typeof i!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Hg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new LT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=XT.bind(null,n,e,t),e.then(n,n))}function Gg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Vg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=zr(-1,1),e.tag=2,ys(t,e,1))),t.lanes|=1),n)}var DT=qr.ReactCurrentOwner,Qn=!1;function zn(n,e,t,i){e.child=n===null?Ay(e,null,t,i):Fa(e,n.child,t,i)}function Wg(n,e,t,i,r){t=t.render;var s=e.ref;return Ta(e,r),i=Qm(n,e,t,i,s,r),t=Jm(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wr(n,e,r)):(Lt&&t&&Bm(e),e.flags|=1,zn(n,e,i,r),e.child)}function Xg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!u_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Qy(n,e,s,i,r)):(n=Zc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:lu,t(o,i)&&n.ref===e.ref)return Wr(n,e,r)}return e.flags|=1,n=Es(s,i),n.ref=e.ref,n.return=e,e.child=n}function Qy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(lu(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,Wr(n,e,r)}return Ap(n,e,t,i,r)}function Jy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(pa,di),di|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(pa,di),di|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(pa,di),di|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(pa,di),di|=i;return zn(n,e,r,t),e.child}function eS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ap(n,e,t,i,r){var s=ei(t)?Mo:Nn.current;return s=Ia(e,s),Ta(e,r),t=Qm(n,e,t,i,s,r),i=Jm(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wr(n,e,r)):(Lt&&i&&Bm(e),e.flags|=1,zn(n,e,t,r),e.child)}function jg(n,e,t,i,r){if(ei(t)){var s=!0;xf(e)}else s=!1;if(Ta(e,r),e.stateNode===null)qc(n,e),$y(e,t,i),Tp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Xi(u):(u=ei(t)?Mo:Nn.current,u=Ia(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Bg(e,o,i,u),is=!1;var h=e.memoizedState;o.state=h,Tf(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jn.current||is?(typeof c=="function"&&(Ep(e,t,c,i),l=e.memoizedState),(a=is||zg(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ry(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qi(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Xi(l):(l=ei(t)?Mo:Nn.current,l=Ia(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Bg(e,o,i,l),is=!1,h=e.memoizedState,o.state=h,Tf(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||Jn.current||is?(typeof p=="function"&&(Ep(e,t,p,i),x=e.memoizedState),(u=is||zg(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Cp(n,e,t,i,s,r)}function Cp(n,e,t,i,r,s){eS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lg(e,t,!1),Wr(n,e,s);i=e.stateNode,DT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Fa(e,n.child,null,s),e.child=Fa(e,null,a,s)):zn(n,e,a,s),e.memoizedState=i.state,r&&Lg(e,t,!0),e.child}function tS(n){var e=n.stateNode;e.pendingContext?Pg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Pg(n,e.context,!1),qm(n,e.containerInfo)}function Yg(n,e,t,i,r){return Oa(),Gm(r),e.flags|=256,zn(n,e,t,i),e.child}var Rp={dehydrated:null,treeContext:null,retryLane:0};function bp(n){return{baseLanes:n,cachePool:null,transitions:null}}function nS(n,e,t){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(It,r&1),n===null)return Sp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ud(o,i,0,null),n=co(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=bp(t),e.memoizedState=Rp,n):n_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return NT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Es(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Es(a,s):(s=co(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?bp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Rp,i}return s=n.child,n=s.sibling,i=Es(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function n_(n,e){return e=ud({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ju(n,e,t,i){return i!==null&&Gm(i),Fa(e,n.child,null,t),n=n_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function NT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=$d(Error(re(422))),Ju(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ud({mode:"visible",children:i.children},r,0,null),s=co(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fa(e,n.child,null,o),e.child.memoizedState=bp(o),e.memoizedState=Rp,s);if(!(e.mode&1))return Ju(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=$d(s,i,void 0),Ju(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=fn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vr(n,r),sr(i,n,r,-1))}return l_(),i=$d(Error(re(421))),Ju(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=jT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=xs(r.nextSibling),Si=e,Lt=!0,er=null,n!==null&&(Ni[Ui++]=Ir,Ni[Ui++]=Or,Ni[Ui++]=Eo,Ir=n.id,Or=n.overflow,Eo=e),e=n_(e,i.children),e.flags|=4096,e)}function qg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Mp(n.return,e,t)}function Kd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function iS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zn(n,e,i.children,t),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qg(n,t,e);else if(n.tag===19)qg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&wf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Kd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&wf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Kd(e,!0,t,null,s);break;case"together":Kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Wr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),wo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=Es(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Es(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function UT(n,e,t){switch(e.tag){case 3:tS(e),Oa();break;case 5:by(e);break;case 1:ei(e.type)&&xf(e);break;case 4:qm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(Mf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(It,It.current&1),e.flags|=128,null):t&e.child.childLanes?nS(n,e,t):(wt(It,It.current&1),n=Wr(n,e,t),n!==null?n.sibling:null);wt(It,It.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return iS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,Jy(n,e,t)}return Wr(n,e,t)}var rS,Pp,sS,oS;rS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pp=function(){};sS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,oo(yr.current);var s=null;switch(t){case"input":r=Qh(n,r),i=Qh(n,i),s=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),s=[];break;case"textarea":r=tp(n,r),i=tp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=gf)}ip(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(tu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(tu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};oS=function(n,e,t,i){t!==i&&(e.flags|=4)};function cl(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function IT(n,e,t){var i=e.pendingProps;switch(Hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return ei(e.type)&&vf(),Mn(e),null;case 3:return i=e.stateNode,ka(),bt(Jn),bt(Nn),Km(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Zu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,er!==null&&(kp(er),er=null))),Pp(n,e),Mn(e),null;case 5:$m(e);var r=oo(hu.current);if(t=e.type,n!==null&&e.stateNode!=null)sS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Mn(e),null}if(n=oo(yr.current),Zu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[pr]=e,i[fu]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<El.length;r++)Ct(El[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":ig(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":sg(i,s),Ct("invalid",i)}ip(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ku(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ku(i.textContent,a,n),r=["children",""+a]):tu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":Gu(i),rg(i,s,!0);break;case"textarea":Gu(i),og(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ux(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[pr]=e,n[fu]=i,rS(n,e,!1,!1),e.stateNode=n;e:{switch(o=rp(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<El.length;r++)Ct(El[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":ig(n,i),r=Qh(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":sg(n,i),r=tp(n,i),Ct("invalid",n);break;default:r=i}ip(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ix(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&nu(n,l):typeof l=="number"&&nu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&Am(n,s,l,o))}switch(t){case"input":Gu(n),rg(n,i,!1);break;case"textarea":Gu(n),og(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ps(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ya(n,!!i.multiple,s,!1):i.defaultValue!=null&&ya(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=gf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)oS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=oo(hu.current),oo(yr.current),Zu(e)){if(i=e.stateNode,t=e.memoizedProps,i[pr]=e,(s=i.nodeValue!==t)&&(n=Si,n!==null))switch(n.tag){case 3:Ku(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ku(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[pr]=e,e.stateNode=i}return Mn(e),null;case 13:if(bt(It),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&vi!==null&&e.mode&1&&!(e.flags&128))Ty(),Oa(),e.flags|=98560,s=!1;else if(s=Zu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[pr]=e}else Oa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mn(e),s=!1}else er!==null&&(kp(er),er=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||It.current&1?nn===0&&(nn=3):l_())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return ka(),Pp(n,e),n===null&&uu(e.stateNode.containerInfo),Mn(e),null;case 10:return Xm(e.type._context),Mn(e),null;case 17:return ei(e.type)&&vf(),Mn(e),null;case 19:if(bt(It),s=e.memoizedState,s===null)return Mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)cl(s,!1);else{if(nn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=wf(n),o!==null){for(e.flags|=128,cl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(It,It.current&1|2),e.child}n=n.sibling}s.tail!==null&&Wt()>Ba&&(e.flags|=128,i=!0,cl(s,!1),e.lanes=4194304)}else{if(!i)if(n=wf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),cl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Mn(e),null}else 2*Wt()-s.renderingStartTime>Ba&&t!==1073741824&&(e.flags|=128,i=!0,cl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,t=It.current,wt(It,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return a_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?di&1073741824&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function OT(n,e){switch(Hm(e),e.tag){case 1:return ei(e.type)&&vf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ka(),bt(Jn),bt(Nn),Km(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return $m(e),null;case 13:if(bt(It),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Oa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(It),null;case 4:return ka(),null;case 10:return Xm(e.type._context),null;case 22:case 23:return a_(),null;case 24:return null;default:return null}}var ec=!1,Cn=!1,FT=typeof WeakSet=="function"?WeakSet:Set,Se=null;function ha(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function Lp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var $g=!1;function kT(n,e){if(pp=pf,n=fy(),zm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(mp={focusedElem:n,selectionRange:t},pf=!1,Se=e;Se!==null;)if(e=Se,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Se=n;else for(;Se!==null;){e=Se;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:Qi(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Ht(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}return x=$g,$g=!1,x}function kl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lp(e,t,s)}r=r.next}while(r!==i)}}function ad(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Dp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function aS(n){var e=n.alternate;e!==null&&(n.alternate=null,aS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[pr],delete e[fu],delete e[vp],delete e[yT],delete e[ST])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lS(n){return n.tag===5||n.tag===3||n.tag===4}function Kg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Np(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=gf));else if(i!==4&&(n=n.child,n!==null))for(Np(n,e,t),n=n.sibling;n!==null;)Np(n,e,t),n=n.sibling}function Up(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Up(n,e,t),n=n.sibling;n!==null;)Up(n,e,t),n=n.sibling}var hn=null,Ji=!1;function $r(n,e,t){for(t=t.child;t!==null;)uS(n,e,t),t=t.sibling}function uS(n,e,t){if(xr&&typeof xr.onCommitFiberUnmount=="function")try{xr.onCommitFiberUnmount(Jf,t)}catch{}switch(t.tag){case 5:Cn||ha(t,e);case 6:var i=hn,r=Ji;hn=null,$r(n,e,t),hn=i,Ji=r,hn!==null&&(Ji?(n=hn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):hn.removeChild(t.stateNode));break;case 18:hn!==null&&(Ji?(n=hn,t=t.stateNode,n.nodeType===8?Vd(n.parentNode,t):n.nodeType===1&&Vd(n,t),ou(n)):Vd(hn,t.stateNode));break;case 4:i=hn,r=Ji,hn=t.stateNode.containerInfo,Ji=!0,$r(n,e,t),hn=i,Ji=r;break;case 0:case 11:case 14:case 15:if(!Cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lp(t,e,o),r=r.next}while(r!==i)}$r(n,e,t);break;case 1:if(!Cn&&(ha(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}$r(n,e,t);break;case 21:$r(n,e,t);break;case 22:t.mode&1?(Cn=(i=Cn)||t.memoizedState!==null,$r(n,e,t),Cn=i):$r(n,e,t);break;default:$r(n,e,t)}}function Zg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new FT),e.forEach(function(i){var r=YT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Yi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:hn=a.stateNode,Ji=!1;break e;case 3:hn=a.stateNode.containerInfo,Ji=!0;break e;case 4:hn=a.stateNode.containerInfo,Ji=!0;break e}a=a.return}if(hn===null)throw Error(re(160));uS(s,o,r),hn=null,Ji=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cS(e,n),e=e.sibling}function cS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Yi(e,n),ur(n),i&4){try{kl(3,n,n.return),ad(3,n)}catch(_){Ht(n,n.return,_)}try{kl(5,n,n.return)}catch(_){Ht(n,n.return,_)}}break;case 1:Yi(e,n),ur(n),i&512&&t!==null&&ha(t,t.return);break;case 5:if(Yi(e,n),ur(n),i&512&&t!==null&&ha(t,t.return),n.flags&32){var r=n.stateNode;try{nu(r,"")}catch(_){Ht(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dx(r,s),rp(a,o);var u=rp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Fx(r,d):c==="dangerouslySetInnerHTML"?Ix(r,d):c==="children"?nu(r,d):Am(r,c,d,u)}switch(a){case"input":Jh(r,s);break;case"textarea":Nx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ya(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ya(r,!!s.multiple,s.defaultValue,!0):ya(r,!!s.multiple,s.multiple?[]:"",!1))}r[fu]=s}catch(_){Ht(n,n.return,_)}}break;case 6:if(Yi(e,n),ur(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Ht(n,n.return,_)}}break;case 3:if(Yi(e,n),ur(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ou(e.containerInfo)}catch(_){Ht(n,n.return,_)}break;case 4:Yi(e,n),ur(n);break;case 13:Yi(e,n),ur(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(s_=Wt())),i&4&&Zg(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Cn=(u=Cn)||c,Yi(e,n),Cn=u):Yi(e,n),ur(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Se=n,c=n.child;c!==null;){for(d=Se=c;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:kl(4,h,h.return);break;case 1:ha(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){Ht(i,t,_)}}break;case 5:ha(h,h.return);break;case 22:if(h.memoizedState!==null){Jg(d);continue}}p!==null?(p.return=h,Se=p):Jg(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ox("display",o))}catch(_){Ht(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ht(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yi(e,n),ur(n),i&4&&Zg(n);break;case 21:break;default:Yi(e,n),ur(n)}}function ur(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(lS(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(nu(r,""),i.flags&=-33);var s=Kg(n);Up(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kg(n);Np(n,a,o);break;default:throw Error(re(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function zT(n,e,t){Se=n,fS(n)}function fS(n,e,t){for(var i=(n.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ec;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Cn;a=ec;var u=Cn;if(ec=o,(Cn=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?e0(r):l!==null?(l.return=o,Se=l):e0(r);for(;s!==null;)Se=s,fS(s),s=s.sibling;Se=r,ec=a,Cn=u}Qg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Qg(n)}}function Qg(n){for(;Se!==null;){var e=Se;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Cn||ad(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Qi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Og(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Og(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ou(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Cn||e.flags&512&&Dp(e)}catch(h){Ht(e,e.return,h)}}if(e===n){Se=null;break}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}}function Jg(n){for(;Se!==null;){var e=Se;if(e===n){Se=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Se=t;break}Se=e.return}}function e0(n){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ad(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{Dp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{Dp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var BT=Math.ceil,Rf=qr.ReactCurrentDispatcher,i_=qr.ReactCurrentOwner,Vi=qr.ReactCurrentBatchConfig,ut=0,fn=null,$t=null,_n=0,di=0,pa=ks(0),nn=0,gu=null,wo=0,ld=0,r_=0,zl=null,Kn=null,s_=0,Ba=1/0,br=null,bf=!1,Ip=null,Ss=null,tc=!1,as=null,Pf=0,Bl=0,Op=null,$c=-1,Kc=0;function Xn(){return ut&6?Wt():$c!==-1?$c:$c=Wt()}function Ms(n){return n.mode&1?ut&2&&_n!==0?_n&-_n:ET.transition!==null?(Kc===0&&(Kc=$x()),Kc):(n=gt,n!==0||(n=window.event,n=n===void 0?16:ny(n.type)),n):1}function sr(n,e,t,i){if(50<Bl)throw Bl=0,Op=null,Error(re(185));Pu(n,t,i),(!(ut&2)||n!==fn)&&(n===fn&&(!(ut&2)&&(ld|=t),nn===4&&ss(n,_n)),ti(n,i),t===1&&ut===0&&!(e.mode&1)&&(Ba=Wt()+500,rd&&zs()))}function ti(n,e){var t=n.callbackNode;E1(n,e);var i=hf(n,n===fn?_n:0);if(i===0)t!==null&&ug(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&ug(t),e===1)n.tag===0?MT(t0.bind(null,n)):Sy(t0.bind(null,n)),vT(function(){!(ut&6)&&zs()}),t=null;else{switch(Kx(i)){case 1:t=Lm;break;case 4:t=Yx;break;case 16:t=df;break;case 536870912:t=qx;break;default:t=df}t=xS(t,dS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function dS(n,e){if($c=-1,Kc=0,ut&6)throw Error(re(327));var t=n.callbackNode;if(wa()&&n.callbackNode!==t)return null;var i=hf(n,n===fn?_n:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Lf(n,i);else{e=i;var r=ut;ut|=2;var s=pS();(fn!==n||_n!==e)&&(br=null,Ba=Wt()+500,uo(n,e));do try{VT();break}catch(a){hS(n,a)}while(!0);Wm(),Rf.current=s,ut=r,$t!==null?e=0:(fn=null,_n=0,e=nn)}if(e!==0){if(e===2&&(r=up(n),r!==0&&(i=r,e=Fp(n,r))),e===1)throw t=gu,uo(n,0),ss(n,i),ti(n,Wt()),t;if(e===6)ss(n,i);else{if(r=n.current.alternate,!(i&30)&&!HT(r)&&(e=Lf(n,i),e===2&&(s=up(n),s!==0&&(i=s,e=Fp(n,s))),e===1))throw t=gu,uo(n,0),ss(n,i),ti(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Ks(n,Kn,br);break;case 3:if(ss(n,i),(i&130023424)===i&&(e=s_+500-Wt(),10<e)){if(hf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Xn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=gp(Ks.bind(null,n,Kn,br),e);break}Ks(n,Kn,br);break;case 4:if(ss(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-rr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*BT(i/1960))-i,10<i){n.timeoutHandle=gp(Ks.bind(null,n,Kn,br),i);break}Ks(n,Kn,br);break;case 5:Ks(n,Kn,br);break;default:throw Error(re(329))}}}return ti(n,Wt()),n.callbackNode===t?dS.bind(null,n):null}function Fp(n,e){var t=zl;return n.current.memoizedState.isDehydrated&&(uo(n,e).flags|=256),n=Lf(n,e),n!==2&&(e=Kn,Kn=t,e!==null&&kp(e)),n}function kp(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function HT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ar(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ss(n,e){for(e&=~r_,e&=~ld,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-rr(e),i=1<<t;n[t]=-1,e&=~i}}function t0(n){if(ut&6)throw Error(re(327));wa();var e=hf(n,0);if(!(e&1))return ti(n,Wt()),null;var t=Lf(n,e);if(n.tag!==0&&t===2){var i=up(n);i!==0&&(e=i,t=Fp(n,i))}if(t===1)throw t=gu,uo(n,0),ss(n,e),ti(n,Wt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ks(n,Kn,br),ti(n,Wt()),null}function o_(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(Ba=Wt()+500,rd&&zs())}}function Ao(n){as!==null&&as.tag===0&&!(ut&6)&&wa();var e=ut;ut|=1;var t=Vi.transition,i=gt;try{if(Vi.transition=null,gt=1,n)return n()}finally{gt=i,Vi.transition=t,ut=e,!(ut&6)&&zs()}}function a_(){di=pa.current,bt(pa)}function uo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,gT(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(Hm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vf();break;case 3:ka(),bt(Jn),bt(Nn),Km();break;case 5:$m(i);break;case 4:ka();break;case 13:bt(It);break;case 19:bt(It);break;case 10:Xm(i.type._context);break;case 22:case 23:a_()}t=t.return}if(fn=n,$t=n=Es(n.current,null),_n=di=e,nn=0,gu=null,r_=ld=wo=0,Kn=zl=null,so!==null){for(e=0;e<so.length;e++)if(t=so[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}so=null}return n}function hS(n,e){do{var t=$t;try{if(Wm(),jc.current=Cf,Af){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Af=!1}if(To=0,un=en=kt=null,Fl=!1,pu=0,i_.current=null,t===null||t.return===null){nn=1,gu=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Gg(o);if(p!==null){p.flags&=-257,Vg(p,o,a,s,e),p.mode&1&&Hg(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Hg(s,u,e),l_();break e}l=Error(re(426))}}else if(Lt&&a.mode&1){var m=Gg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vg(m,o,a,s,e),Gm(za(l,a));break e}}s=l=za(l,a),nn!==4&&(nn=2),zl===null?zl=[s]:zl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Ky(s,l,e);Ig(s,f);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ss===null||!Ss.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Zy(s,a,e);Ig(s,y);break e}}s=s.return}while(s!==null)}_S(t)}catch(w){e=w,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function pS(){var n=Rf.current;return Rf.current=Cf,n===null?Cf:n}function l_(){(nn===0||nn===3||nn===2)&&(nn=4),fn===null||!(wo&268435455)&&!(ld&268435455)||ss(fn,_n)}function Lf(n,e){var t=ut;ut|=2;var i=pS();(fn!==n||_n!==e)&&(br=null,uo(n,e));do try{GT();break}catch(r){hS(n,r)}while(!0);if(Wm(),ut=t,Rf.current=i,$t!==null)throw Error(re(261));return fn=null,_n=0,nn}function GT(){for(;$t!==null;)mS($t)}function VT(){for(;$t!==null&&!p1();)mS($t)}function mS(n){var e=vS(n.alternate,n,di);n.memoizedProps=n.pendingProps,e===null?_S(n):$t=e,i_.current=null}function _S(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=OT(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,$t=null;return}}else if(t=IT(t,e,di),t!==null){$t=t;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);nn===0&&(nn=5)}function Ks(n,e,t){var i=gt,r=Vi.transition;try{Vi.transition=null,gt=1,WT(n,e,t,i)}finally{Vi.transition=r,gt=i}return null}function WT(n,e,t,i){do wa();while(as!==null);if(ut&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(T1(n,s),n===fn&&($t=fn=null,_n=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||tc||(tc=!0,xS(df,function(){return wa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vi.transition,Vi.transition=null;var o=gt;gt=1;var a=ut;ut|=4,i_.current=null,kT(n,t),cS(t,n),cT(mp),pf=!!pp,mp=pp=null,n.current=t,zT(t),m1(),ut=a,gt=o,Vi.transition=s}else n.current=t;if(tc&&(tc=!1,as=n,Pf=r),s=n.pendingLanes,s===0&&(Ss=null),v1(t.stateNode),ti(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(bf)throw bf=!1,n=Ip,Ip=null,n;return Pf&1&&n.tag!==0&&wa(),s=n.pendingLanes,s&1?n===Op?Bl++:(Bl=0,Op=n):Bl=0,zs(),null}function wa(){if(as!==null){var n=Kx(Pf),e=Vi.transition,t=gt;try{if(Vi.transition=null,gt=16>n?16:n,as===null)var i=!1;else{if(n=as,as=null,Pf=0,ut&6)throw Error(re(331));var r=ut;for(ut|=4,Se=n.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:kl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Se=d;else for(;Se!==null;){c=Se;var h=c.sibling,p=c.return;if(aS(c),c===u){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:kl(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var g=n.current;for(Se=g;Se!==null;){o=Se;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Se=v;else e:for(o=g;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ad(9,a)}}catch(w){Ht(a,a.return,w)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(ut=r,zs(),xr&&typeof xr.onPostCommitFiberRoot=="function")try{xr.onPostCommitFiberRoot(Jf,n)}catch{}i=!0}return i}finally{gt=t,Vi.transition=e}}return!1}function n0(n,e,t){e=za(t,e),e=Ky(n,e,1),n=ys(n,e,1),e=Xn(),n!==null&&(Pu(n,1,e),ti(n,e))}function Ht(n,e,t){if(n.tag===3)n0(n,n,t);else for(;e!==null;){if(e.tag===3){n0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ss===null||!Ss.has(i))){n=za(t,n),n=Zy(e,n,1),e=ys(e,n,1),n=Xn(),e!==null&&(Pu(e,1,n),ti(e,n));break}}e=e.return}}function XT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Xn(),n.pingedLanes|=n.suspendedLanes&t,fn===n&&(_n&t)===t&&(nn===4||nn===3&&(_n&130023424)===_n&&500>Wt()-s_?uo(n,0):r_|=t),ti(n,e)}function gS(n,e){e===0&&(n.mode&1?(e=Xu,Xu<<=1,!(Xu&130023424)&&(Xu=4194304)):e=1);var t=Xn();n=Vr(n,e),n!==null&&(Pu(n,e,t),ti(n,t))}function jT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),gS(n,t)}function YT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),gS(n,t)}var vS;vS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,UT(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,Lt&&e.flags&1048576&&My(e,Sf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qc(n,e),n=e.pendingProps;var r=Ia(e,Nn.current);Ta(e,t),r=Qm(null,e,i,n,r,t);var s=Jm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ei(i)?(s=!0,xf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ym(e),r.updater=od,e.stateNode=r,r._reactInternals=e,Tp(e,i,n,t),e=Cp(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&Bm(e),zn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(qc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$T(i),n=Qi(i,n),r){case 0:e=Ap(null,e,i,n,t);break e;case 1:e=jg(null,e,i,n,t);break e;case 11:e=Wg(null,e,i,n,t);break e;case 14:e=Xg(null,e,i,Qi(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Ap(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),jg(n,e,i,r,t);case 3:e:{if(tS(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ry(n,e),Tf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=za(Error(re(423)),e),e=Yg(n,e,i,t,r);break e}else if(i!==r){r=za(Error(re(424)),e),e=Yg(n,e,i,t,r);break e}else for(vi=xs(e.stateNode.containerInfo.firstChild),Si=e,Lt=!0,er=null,t=Ay(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Oa(),i===r){e=Wr(n,e,t);break e}zn(n,e,i,t)}e=e.child}return e;case 5:return by(e),n===null&&Sp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,_p(i,r)?o=null:s!==null&&_p(i,s)&&(e.flags|=32),eS(n,e),zn(n,e,o,t),e.child;case 6:return n===null&&Sp(e),null;case 13:return nS(n,e,t);case 4:return qm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Fa(e,null,i,t):zn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Wg(n,e,i,r,t);case 7:return zn(n,e,e.pendingProps,t),e.child;case 8:return zn(n,e,e.pendingProps.children,t),e.child;case 12:return zn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(Mf,i._currentValue),i._currentValue=o,s!==null)if(ar(s.value,o)){if(s.children===r.children&&!Jn.current){e=Wr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Mp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Mp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ta(e,t),r=Xi(r),i=i(r),e.flags|=1,zn(n,e,i,t),e.child;case 14:return i=e.type,r=Qi(i,e.pendingProps),r=Qi(i.type,r),Xg(n,e,i,r,t);case 15:return Qy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),qc(n,e),e.tag=1,ei(i)?(n=!0,xf(e)):n=!1,Ta(e,t),$y(e,i,r),Tp(e,i,r,t),Cp(null,e,i,!0,n,t);case 19:return iS(n,e,t);case 22:return Jy(n,e,t)}throw Error(re(156,e.tag))};function xS(n,e){return jx(n,e)}function qT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bi(n,e,t,i){return new qT(n,e,t,i)}function u_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $T(n){if(typeof n=="function")return u_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Rm)return 11;if(n===bm)return 14}return 2}function Es(n,e){var t=n.alternate;return t===null?(t=Bi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Zc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")u_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ra:return co(t.children,r,s,e);case Cm:o=8,r|=8;break;case qh:return n=Bi(12,t,e,r|2),n.elementType=qh,n.lanes=s,n;case $h:return n=Bi(13,t,e,r),n.elementType=$h,n.lanes=s,n;case Kh:return n=Bi(19,t,e,r),n.elementType=Kh,n.lanes=s,n;case bx:return ud(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Cx:o=10;break e;case Rx:o=9;break e;case Rm:o=11;break e;case bm:o=14;break e;case ns:o=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=Bi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function co(n,e,t,i){return n=Bi(7,n,i,e),n.lanes=t,n}function ud(n,e,t,i){return n=Bi(22,n,i,e),n.elementType=bx,n.lanes=t,n.stateNode={isHidden:!1},n}function Zd(n,e,t){return n=Bi(6,n,null,e),n.lanes=t,n}function Qd(n,e,t){return e=Bi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function KT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dd(0),this.expirationTimes=Dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function c_(n,e,t,i,r,s,o,a,l){return n=new KT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ym(s),n}function ZT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ia,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function yS(n){if(!n)return Ls;n=n._reactInternals;e:{if(No(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ei(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(ei(t))return yy(n,t,e)}return e}function SS(n,e,t,i,r,s,o,a,l){return n=c_(t,i,!0,n,r,s,o,a,l),n.context=yS(null),t=n.current,i=Xn(),r=Ms(t),s=zr(i,r),s.callback=e??null,ys(t,s,r),n.current.lanes=r,Pu(n,r,i),ti(n,i),n}function cd(n,e,t,i){var r=e.current,s=Xn(),o=Ms(r);return t=yS(t),e.context===null?e.context=t:e.pendingContext=t,e=zr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ys(r,e,o),n!==null&&(sr(n,r,o,s),Xc(n,r,o)),o}function Df(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function i0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function f_(n,e){i0(n,e),(n=n.alternate)&&i0(n,e)}function QT(){return null}var MS=typeof reportError=="function"?reportError:function(n){console.error(n)};function d_(n){this._internalRoot=n}fd.prototype.render=d_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));cd(n,e,null,null)};fd.prototype.unmount=d_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ao(function(){cd(null,n,null,null)}),e[Gr]=null}};function fd(n){this._internalRoot=n}fd.prototype.unstable_scheduleHydration=function(n){if(n){var e=Jx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<rs.length&&e!==0&&e<rs[t].priority;t++);rs.splice(t,0,n),t===0&&ty(n)}};function h_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function r0(){}function JT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Df(o);s.call(u)}}var o=SS(e,i,n,0,null,!1,!1,"",r0);return n._reactRootContainer=o,n[Gr]=o.current,uu(n.nodeType===8?n.parentNode:n),Ao(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Df(l);a.call(u)}}var l=c_(n,0,!1,null,null,!1,!1,"",r0);return n._reactRootContainer=l,n[Gr]=l.current,uu(n.nodeType===8?n.parentNode:n),Ao(function(){cd(e,l,t,i)}),l}function hd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Df(o);a.call(l)}}cd(e,o,n,r)}else o=JT(t,e,n,r,i);return Df(o)}Zx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ml(e.pendingLanes);t!==0&&(Dm(e,t|1),ti(e,Wt()),!(ut&6)&&(Ba=Wt()+500,zs()))}break;case 13:Ao(function(){var i=Vr(n,1);if(i!==null){var r=Xn();sr(i,n,1,r)}}),f_(n,1)}};Nm=function(n){if(n.tag===13){var e=Vr(n,134217728);if(e!==null){var t=Xn();sr(e,n,134217728,t)}f_(n,134217728)}};Qx=function(n){if(n.tag===13){var e=Ms(n),t=Vr(n,e);if(t!==null){var i=Xn();sr(t,n,e,i)}f_(n,e)}};Jx=function(){return gt};ey=function(n,e){var t=gt;try{return gt=n,e()}finally{gt=t}};op=function(n,e,t){switch(e){case"input":if(Jh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=id(i);if(!r)throw Error(re(90));Lx(i),Jh(i,r)}}}break;case"textarea":Nx(n,t);break;case"select":e=t.value,e!=null&&ya(n,!!t.multiple,e,!1)}};Bx=o_;Hx=Ao;var ew={usingClientEntryPoint:!1,Events:[Du,la,id,kx,zx,o_]},fl={findFiberByHostInstance:ro,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tw={bundleType:fl.bundleType,version:fl.version,rendererPackageName:fl.rendererPackageName,rendererConfig:fl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wx(n),n===null?null:n.stateNode},findFiberByHostInstance:fl.findFiberByHostInstance||QT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{Jf=nc.inject(tw),xr=nc}catch{}}Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ew;Ri.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h_(e))throw Error(re(200));return ZT(n,e,null,t)};Ri.createRoot=function(n,e){if(!h_(n))throw Error(re(299));var t=!1,i="",r=MS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=c_(n,1,!1,null,null,t,!1,i,r),n[Gr]=e.current,uu(n.nodeType===8?n.parentNode:n),new d_(e)};Ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=Wx(e),n=n===null?null:n.stateNode,n};Ri.flushSync=function(n){return Ao(n)};Ri.hydrate=function(n,e,t){if(!dd(e))throw Error(re(200));return hd(null,n,e,!0,t)};Ri.hydrateRoot=function(n,e,t){if(!h_(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=MS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=SS(e,null,n,1,t??null,r,!1,s,o),n[Gr]=e.current,uu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new fd(e)};Ri.render=function(n,e,t){if(!dd(e))throw Error(re(200));return hd(null,n,e,!1,t)};Ri.unmountComponentAtNode=function(n){if(!dd(n))throw Error(re(40));return n._reactRootContainer?(Ao(function(){hd(null,null,n,!1,function(){n._reactRootContainer=null,n[Gr]=null})}),!0):!1};Ri.unstable_batchedUpdates=o_;Ri.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!dd(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return hd(n,e,t,!1,i)};Ri.version="18.3.1-next-f1338f8080-20240426";function ES(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ES)}catch(n){console.error(n)}}ES(),Ex.exports=Ri;var nw=Ex.exports,s0=nw;jh.createRoot=s0.createRoot,jh.hydrateRoot=s0.hydrateRoot;function Pr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function TS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ha={duration:.5,overwrite:!1,delay:0},p_,gn,Dt,Hi=1e8,St=1/Hi,zp=Math.PI*2,iw=zp/4,rw=0,wS=Math.sqrt,sw=Math.cos,ow=Math.sin,dn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},Xr=function(e){return typeof e=="number"},m_=function(e){return typeof e>"u"},Mr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},__=function(){return typeof window<"u"},ic=function(e){return Gt(e)||dn(e)},AS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,aw=/random\([^)]+\)/g,lw=/,\s*/g,o0=/(?:-?\.?\d|\.)+/gi,CS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,RS=/[+-]=-?[.\d]+/,uw=/[^,'"\[\]\s]+/gi,cw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,fr,Bp,g_,Ai={},Nf={},bS,PS=function(e){return(Nf=Ga(e,Ai))&&ai},v_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},vu=function(e,t){return!t&&console.warn(e)},LS=function(e,t){return e&&(Ai[e]=t)&&Nf&&(Nf[e]=t)||Ai},xu=function(){return 0},fw={suppressEvents:!0,isStart:!0,kill:!1},Qc={suppressEvents:!0,kill:!1},dw={suppressEvents:!0},x_={},Ts=[],Hp={},DS,pi={},eh={},a0=30,Jc=[],y_="",S_=function(e){var t=e[0],i,r;if(Mr(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Jc.length;r--&&!Jc[r].targetTest(t););i=Jc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new nM(e[r],i)))||e.splice(r,1);return e},fo=function(e){return e._gsap||S_(Gi(e))[0]._gsap},NS=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():m_(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},Aa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},hw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Uf=function(){var e=Ts.length,t=Ts.slice(0),i,r;for(Hp={},Ts.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},M_=function(e){return!!(e._initted||e._startAt||e.add)},US=function(e,t,i,r){Ts.length&&!gn&&Uf(),e.render(t,i,!!(gn&&t<0&&M_(e))),Ts.length&&!gn&&Uf()},IS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(uw).length<2?t:dn(e)?e.trim():e},OS=function(e){return e},Ci=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},pw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ga=function(e,t){for(var i in t)e[i]=t[i];return e},l0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Mr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},If=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Hl=function(e){var t=e.parent||Ot,i=e.keyframes?pw(Dn(e.keyframes)):Ci;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},mw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},FS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},pd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ds=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ho=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},_w=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gp=function(e,t,i,r){return e._startAt&&(gn?e._startAt.revert(Qc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},gw=function n(e){return!e||e._ts&&n(e.parent)},u0=function(e){return e._repeat?Va(e._tTime,e=e.duration()+e._rDelay)*e:0},Va=function(e,t){var i=Math.floor(e=Ut(e/t));return e&&i===e?i-1:i},Of=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},md=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},_d=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ut(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),md(e),i._dirty||ho(i,e)),e},kS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Of(e.rawTime(),t),(!t._dur||Uu(0,t.totalDuration(),i)-t._tTime>St)&&t.render(i,!0)),ho(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-St}},mr=function(e,t,i,r){return t.parent&&Ds(t),t._start=Ut((Xr(i)?i:i||e!==Ot?Di(e,i,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),FS(e,t,"_first","_last",e._sort?"_start":0),Vp(t)||(e._recent=t),r||kS(e,t),e._ts<0&&_d(e,e._tTime),e},zS=function(e,t){return(Ai.ScrollTrigger||v_("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},BS=function(e,t,i,r,s){if(T_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&DS!==_i.frame)return Ts.push(e),e._lazy=[s,r],1},vw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Vp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},xw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&vw(e)&&!(!e._initted&&Vp(e))||(e._ts<0||e._dp._ts<0)&&!Vp(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Uu(0,e._tDur,t),c=Va(l,a),e._yoyo&&c&1&&(o=1-o),c!==Va(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||gn||r||e._zTime===St||!t&&e._zTime){if(!e._initted&&BS(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?St:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Gp(e,t,i,!0),e._onUpdate&&!i&&xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ds(e,1),!i&&!gn&&(xi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Wa=function(e,t,i,r){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!r&&_d(e,e._tTime=e._tDur*a),e.parent&&md(e),i||ho(e.parent,e),e},c0=function(e){return e instanceof Vn?ho(e):Wa(e,e._dur)},Sw={_start:0,endTime:xu,totalDuration:xu},Di=function n(e,t,i){var r=e.labels,s=e._recent||Sw,o=e.duration()>=Hi?s.endTime(!1):e._dur,a,l,u;return dn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Dn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Gl=function(e,t,i){var r=Xr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},Bs=function(e,t){return e||e===0?t(e):t},Uu=function(e,t,i){return i<e?e:i>t?t:i},bn=function(e,t){return!dn(e)||!(t=cw.exec(e))?"":t[1]},Mw=function(e,t,i){return Bs(i,function(r){return Uu(e,t,r)})},Wp=[].slice,HS=function(e,t){return e&&Mr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mr(e[0]))&&!e.nodeType&&e!==fr},Ew=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return dn(r)&&!t||HS(r,1)?(s=i).push.apply(s,Gi(r)):i.push(r)})||i},Gi=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):dn(e)&&!i&&(Bp||!Xa())?Wp.call((t||g_).querySelectorAll(e),0):Dn(e)?Ew(e,i):HS(e)?Wp.call(e,0):e?[e]:[]},Xp=function(e){return e=Gi(e)[0]||vu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Gi(t,i.querySelectorAll?i:i===e?vu("Invalid scope")||g_.createElement("div"):e)}},GS=function(e){return e.sort(function(){return .5-Math.random()})},VS=function(e){if(Gt(e))return e;var t=Mr(e)?e:{each:e},i=po(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return dn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,x){var _=(x||t).length,m=o[_],f,g,v,y,w,T,M,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Hi])[1],!S){for(M=-Hi;M<(M=x[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],f=l?Math.min(S,_)*c-.5:r%S,g=S===Hi?0:l?_*d/S-.5:r/S|0,M=0,P=Hi,T=0;T<_;T++)v=T%S-f,y=g-(T/S|0),m[T]=w=u?Math.abs(u==="y"?y:v):wS(v*v+y*y),w>M&&(M=w),w<P&&(P=w);r==="random"&&GS(m),m.max=M-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:u?u==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(t.amount||t.each)||0,i=i&&_<0?JS(i):i}return _=(m[h]-m.min)/m.max||0,Ut(m.b+(i?i(_):_)*m.v)+m.u}},jp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ut(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Xr(i)?0:bn(i))}},WS=function(e,t){var i=Dn(e),r,s;return!i&&Mr(e)&&(r=i=e.radius||Hi,e.values?(e=Gi(e.values),(s=!Xr(e[0]))&&(r*=r)):e=jp(e.increment)),Bs(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Hi,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Xr(o)?c:c+bn(o)}:jp(e))},XS=function(e,t,i,r){return Bs(Dn(e)?!t:i===!0?!!(i=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Tw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},ww=function(e,t){return function(i){return e(parseFloat(i))+(t||bn(i))}},Aw=function(e,t,i){return YS(e,t,0,1,i)},jS=function(e,t,i){return Bs(i,function(r){return e[~~t(r)]})},Cw=function n(e,t,i){var r=t-e;return Dn(e)?jS(e,n(0,e.length),t):Bs(i,function(s){return(r+(s-e)%r)%r+e})},Rw=function n(e,t,i){var r=t-e,s=r*2;return Dn(e)?jS(e,n(0,e.length-1),t):Bs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},yu=function(e){return e.replace(aw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(lw);return XS(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},YS=function(e,t,i,r,s){var o=t-e,a=r-i;return Bs(s,function(l){return i+((l-e)/o*a||0)})},bw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=dn(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(x){x*=d;var _=Math.min(h,~~x);return c[_](x-_)},i=t}else r||(e=Ga(Dn(e)?[]:{},e));if(!c){for(l in t)E_.call(a,e,l,"get",t[l]);s=function(x){return C_(x,a)||(o?e.p:e)}}}return Bs(i,s)},f0=function(e,t,i){var r=e.labels,s=Hi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xi=function(e,t,i){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ts.length&&Uf(),a&&(Dt=a),c=l?s.apply(u,l):s.call(u),Dt=o,c},Tl=function(e){return Ds(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&xi(e,"onInterrupt"),e},_a,qS=[],$S=function(e){if(e)if(e=!e.name&&e.default||e,__()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:xu,render:C_,add:E_,kill:Xw,modifier:Ww,rawVars:0},o={targetTest:0,get:0,getSetter:A_,aliases:{},register:0};if(Xa(),e!==r){if(pi[t])return;Ci(r,Ci(If(e,s),o)),Ga(r.prototype,Ga(s,If(e,o))),pi[r.prop=t]=r,e.targetTest&&(Jc.push(r),x_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}LS(t,r),e.register&&e.register(ai,r,ri)}else qS.push(e)},yt=255,wl={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},th=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*yt+.5|0},KS=function(e,t,i){var r=e?Xr(e)?[e>>16,e>>8&yt,e&yt]:0:wl.black,s,o,a,l,u,c,d,h,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),wl[e])r=wl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&yt,r&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(o0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=th(l+1/3,s,o),r[1]=th(l,s,o),r[2]=th(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(CS),i&&r.length<4&&(r[3]=1),r}else r=e.match(o0)||wl.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/yt,o=r[1]/yt,a=r[2]/yt,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ZS=function(e){var t=[],i=[],r=-1;return e.split(ws).forEach(function(s){var o=s.match(ma)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},d0=function(e,t,i){var r="",s=(e+r).match(ws),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=KS(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=ZS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(ws,"1").split(ma),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(ws),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},ws=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in wl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Pw=/hsl[a]?\(/,QS=function(e){var t=e.join(" "),i;if(ws.lastIndex=0,ws.test(t))return i=Pw.test(t),e[1]=d0(e[1],i),e[0]=d0(e[0],i,ZS(e[1])),!0},Su,_i=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,x=function _(m){var f=n()-r,g=m===!0,v,y,w,T;if((f>e||f<0)&&(i+=f-t),r+=f,w=r-i,v=w-o,(v>0||g)&&(T=++d.frame,h=w-d.time*1e3,d.time=w=w/1e3,o+=v+(v>=s?4:s-v),y=1),g||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](w,h,T,m)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){bS&&(!Bp&&__()&&(fr=Bp=window,g_=fr.document||{},Ai.gsap=ai,(fr.gsapVersions||(fr.gsapVersions=[])).push(ai.version),PS(Nf||fr.GreenSockGlobals||!fr.gsap&&fr||{}),qS.forEach($S)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Su=1,x(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Su=0,u=xu},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,g){var v=f?function(y,w,T,M){m(y,w,T,M),d.remove(v)}:m;return d.remove(m),a[g?"unshift":"push"](v),Xa(),v},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),Xa=function(){return!Su&&_i.wake()},at={},Lw=/^[\d.\-M][\d.\-,\s]/,Dw=/["']/g,Nw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Dw,"").trim():+u,r=l.substr(a+1).trim();return t},Uw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Iw=function(e){var t=(e+"").split("("),i=at[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Nw(t[1])]:Uw(e).split(",").map(IS)):at._CE&&Lw.test(e)?at._CE("",e):i},JS=function(e){return function(t){return 1-e(1-t)}},eM=function n(e,t){for(var i=e._first,r;i;)i instanceof Vn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},po=function(e,t){return e&&(Gt(e)?e:at[e]||Iw(e))||t},Uo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){at[a]=Ai[a]=s,at[o=a.toLowerCase()]=i;for(var l in s)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=s[l]}),s},tM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/zp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*ow((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:tM(a);return s=zp/s,l.config=function(u,c){return n(e,u,c)},l},ih=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:tM(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Uo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Uo("Elastic",nh("in"),nh("out"),nh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Uo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Uo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Uo("Circ",function(n){return-(wS(1-n*n)-1)});Uo("Sine",function(n){return n===1?1:-sw(n*iw)+1});Uo("Back",ih("in"),ih("out"),ih());at.SteppedEase=at.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-St;return function(a){return((r*Uu(0,o,a)|0)+s)*i}}};Ha.ease=at["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return y_+=n+","+n+"Params,"});var nM=function(e,t){this.id=rw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:NS,this.set=t?t.getSetter:A_},Mu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wa(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Su||_i.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Wa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Xa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_d(this,i),!s._dp||s.parent||kS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),US(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+u0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+u0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Va(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Of(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-St?0:this._rts,this.totalTime(Uu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),md(this),_w(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ut(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&mr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Of(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=dw);var r=gn;return gn=i,M_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),gn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,c0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,c0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Di(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-St),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-St)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(i)?i:OS,l=function(){var c=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Tl(this)},n}();Ci(Mu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Vn=function(n){TS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),Ot&&mr(i.parent||Ot,Pr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&zS(Pr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Gl(0,arguments,this),this},t.from=function(r,s,o){return Gl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Gl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Hl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,Di(this,o),1),this},t.call=function(r,s,o){return mr(this,qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new qt(r,o,Di(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Hl(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Hl(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ut(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,x,_,m,f,g,v,y,w,T,M;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,f=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Ut(c%m),c===l?(_=this._repeat,h=u):(w=Ut(c/m),_=~~w,_&&_===w&&(h=u,_--),h>u&&(h=u)),w=Va(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),T&&_&1&&(h=u-h,M=1),_!==w&&!this._lock){var P=T&&w&1,S=P===(T&&_&1);if(_<w&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ut(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;eM(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=yw(this,Ut(a),Ut(h)),g&&(c-=h-(h=g._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!w&&(xi(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||h>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){g=0,x&&(c+=this._zTime=-St);break}}p=x}else{p=this._last;for(var E=r<0?r:h;p;){if(x=p._prev,(p._act||E<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||gn&&M_(p)),h!==this._time||!this._ts&&!f){g=0,x&&(c+=this._zTime=E?-St:St);break}}p=x}}if(g&&!s&&(this.pause(),g.render(h>=a?0:-St)._zTime=h>=a?1:-1,this._ts))return this._start=y,md(this),this.render(r,s,o);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ds(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(xi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Xr(s)||(s=Di(this,s,r)),!(r instanceof Mu)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(dn(r))return this.addLabel(r,s);if(Gt(r))r=qt.delayedCall(0,r);else return this}return this!==r?mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Hi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return dn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&pd(this,r),r===this._recent&&(this._recent=this._last),ho(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Di(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=qt.delayedCall(0,s||xu,o);return a.data="isPause",this._hasPause=1,mr(this,a,Di(this,r))},t.removePause=function(r){var s=this._first;for(r=Di(this,r);s;)s._start===r&&s.data==="isPause"&&Ds(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ls!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Gi(r),l=this._first,u=Xr(s),c;l;)l instanceof qt?hw(l._targets,a)&&(u?(!ls||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Di(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,x=qt.to(o,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==m&&Wa(x,m,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,d||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ci({startAt:{time:Di(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),f0(this,Di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),f0(this,Di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ut(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ho(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ho(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Hi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,mr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ut(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Wa(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(US(Ot,Of(r,Ot)),DS=_i.frame),_i.frame>=a0){a0+=Mi.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&Mi.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(Mu);Ci(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ow=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,lM,null,s),u=0,c=0,d,h,p,x,_,m,f,g;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=yu(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),h=i.match(Jd)||[];d=Jd.exec(r);)x=d[0],_=r.substring(u,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),x!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:x.charAt(1)==="="?Aa(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},u=Jd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(RS.test(r)||f)&&(l.e=0),this._pt=l,l},E_=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:Gt(d)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Gt(d)?u?Hw:oM:w_,x;if(dn(r)&&(~r.indexOf("random(")&&(r=yu(r)),r.charAt(1)==="="&&(x=Aa(h,r)+(bn(h)||0),(x||x===0)&&(r=x))),!c||h!==r||Yp)return!isNaN(h*r)&&r!==""?(x=new ri(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?Vw:aM,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!d&&!(t in e)&&v_(t,r),Ow.call(this,e,t,h,r,p,l||Mi.stringFilter,u))},Fw=function(e,t,i,r,s){if(Gt(e)&&(e=Vl(e,s,t,i,r)),!Mr(e)||e.style&&e.nodeType||Dn(e)||AS(e))return dn(e)?Vl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Vl(e[a],s,t,i,r);return o},iM=function(e,t,i,r,s,o){var a,l,u,c;if(pi[e]&&(a=new pi[e]).init(s,a.rawVars?t[e]:Fw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==_a))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ls,Yp,T_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,x=e._dur,_=e._startAt,m=e._targets,f=e.parent,g=f&&f.data==="nested"?f.vars.targets:m,v=e._overwrite==="auto"&&!p_,y=e.timeline,w,T,M,P,S,E,I,U,Z,L,F,H,j;if(y&&(!h||!s)&&(s="none"),e._ease=po(s,Ha.ease),e._yEase=d?JS(po(d===!0?s:d,Ha.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(U=m[0]?fo(m[0]).harness:0,H=U&&r[U.prop],w=If(r,x_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&x?Qc:fw),_._lazy=0),o){if(Ds(e._startAt=qt.set(m,Ci({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return xi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!p)&&e._startAt.revert(Qc),a&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&x&&!_){if(t&&(a=!1),M=Ci({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:f},w),H&&(M[U.prop]=H),Ds(e._startAt=qt.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Qc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&ni(l)||l&&!x,T=0;T<m.length;T++){if(S=m[T],I=S._gsap||S_(m)[T]._gsap,e._ptLookup[T]=L={},Hp[I.id]&&Ts.length&&Uf(),F=g===m?T:g.indexOf(S),U&&(Z=new U).init(S,H||w,e,F,g)!==!1&&(e._pt=P=new ri(e._pt,S,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(N){L[N]=P}),Z.priority&&(E=1)),!U||H)for(M in w)pi[M]&&(Z=iM(M,w,e,F,S,g))?Z.priority&&(E=1):L[M]=P=E_.call(e,S,M,"get",w[M],F,g,0,r.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),v&&e._pt&&(ls=e,Ot.killTweensOf(S,L,e.globalTime(t)),j=!e.parent,ls=0),e._pt&&l&&(Hp[I.id]=1)}E&&uM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!j,h&&t<=0&&y.render(Hi,!0,!0)},kw=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Yp=1,e.vars[t]="+=0",T_(e,a),Yp=0,l?vu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Vt(i)+bn(d.e)),d.b&&(d.b=c.s+bn(d.b))},zw=function(e,t){var i=e[0]?fo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ga({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Bw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Vl=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):dn(e)&&~e.indexOf("random(")?yu(e):e},rM=y_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",sM={};ii(rM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return sM[n]=1});var qt=function(n){TS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Hl(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,x=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,g=r.parent||Ot,v=(Dn(i)||AS(i)?Xr(i[0]):"length"in r)?[i]:Gi(i),y,w,T,M,P,S,E,I;if(a._targets=v.length?S_(v):vu("GSAP target "+i+" not found. https://gsap.com",!Mi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||h||ic(u)||ic(c)){if(r=a.vars,y=a.timeline=new Vn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),y.kill(),y.parent=y._dp=Pr(a),y._start=0,h||ic(u)||ic(c)){if(M=v.length,E=h&&VS(h),Mr(h))for(P in h)~rM.indexOf(P)&&(I||(I={}),I[P]=h[P]);for(w=0;w<M;w++)T=If(r,sM),T.stagger=0,f&&(T.yoyoEase=f),I&&Ga(T,I),S=v[w],T.duration=+Vl(u,Pr(a),w,S,v),T.delay=(+Vl(c,Pr(a),w,S,v)||0)-a._delay,!h&&M===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(S,T,E?E(w,S,v):0),y._ease=at.none;y.duration()?u=c=0:a.timeline=0}else if(x){Hl(Ci(y.vars.defaults,{ease:"none"})),y._ease=po(x.ease||r.ease||"none");var U=0,Z,L,F;if(Dn(x))x.forEach(function(H){return y.to(v,H,">")}),y.duration();else{T={};for(P in x)P==="ease"||P==="easeEach"||Bw(P,x[P],T,x.easeEach);for(P in T)for(Z=T[P].sort(function(H,j){return H.t-j.t}),U=0,w=0;w<Z.length;w++)L=Z[w],F={ease:L.e,duration:(L.t-(w?Z[w-1].t:0))/100*u},F[P]=L.v,y.to(v,F,U),U+=F.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!p_&&(ls=Pr(a),Ot.killTweensOf(v),ls=0),mr(g,Pr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!x&&a._start===Ut(g._time)&&ni(d)&&gw(Pr(a))&&g.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-c)||0)),m&&zS(Pr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-St&&!c?l:r<St?0:r,h,p,x,_,m,f,g,v,y;if(!u)xw(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,v=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=Ut(d%_),d===l?(x=this._repeat,h=u):(m=Ut(d/_),x=~~m,x&&x===m?(h=u,x--):h>u&&(h=u)),f=this._yoyo&&x&1,f&&(y=this._yEase,h=u-h),m=Va(this._tTime,_),h===a&&!o&&this._initted&&x===m)return this._tTime=d,this;x!==m&&(v&&this._yEase&&eM(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*x),!0).invalidate()._lock=0))}if(!this._initted){if(BS(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&x!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(y||this._ease)(h/u),this._from&&(this.ratio=g=1-g),!a&&d&&!s&&!m&&(xi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Gp(this,r,s,o),xi(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Gp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ds(this,1),!s&&!(c&&!a)&&(d||a||f)&&(xi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Su||_i.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||T_(this,u),c=this._ease(u/this._dur),kw(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(_d(this,0),this.parent||FS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Tl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ls&&ls.vars.overwrite!==!0)._first||Tl(this),this.parent&&o!==this.timeline.totalDuration()&&Wa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gi(r):a,u=this._ptLookup,c=this._pt,d,h,p,x,_,m,f;if((!s||s==="all")&&mw(a,l))return s==="all"&&(this._pt=0),Tl(this);for(d=this._op=this._op||[],s!=="all"&&(dn(s)&&(_={},ii(s,function(g){return _[g]=1}),s=_),s=zw(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,x=h,p={}):(p=d[f]=d[f]||{},x=s);for(_ in x)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&pd(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Tl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Gl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Gl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Mu);Ci(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var e=new Vn,t=Wp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var w_=function(e,t,i){return e[t]=i},oM=function(e,t,i){return e[t](i)},Hw=function(e,t,i,r){return e[t](r.fp,i)},Gw=function(e,t,i){return e.setAttribute(t,i)},A_=function(e,t){return Gt(e[t])?oM:m_(e[t])&&e.setAttribute?Gw:w_},aM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Vw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},C_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Ww=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Xw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?pd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},jw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},uM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||aM,this.d=l||this,this.set=u||w_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=jw,this.m=i,this.mt=s,this.tween=r},n}();ii(y_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return x_[n]=1});Ai.TweenMax=Ai.TweenLite=qt;Ai.TimelineLite=Ai.TimelineMax=Vn;Ot=new Vn({sortChildren:!1,defaults:Ha,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mi.stringFilter=QS;var mo=[],ef={},Yw=[],h0=0,qw=0,rh=function(e){return(ef[e]||Yw).map(function(t){return t()})},qp=function(){var e=Date.now(),t=[];e-h0>2&&(rh("matchMediaInit"),mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=fr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),rh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),h0=e,rh("matchMedia"))},cM=function(){function n(t,i){this.selector=i&&Xp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=qw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Dt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Xp(s)),Dt=o,d=r.apply(o,arguments),Gt(d)&&o._r.push(d),Dt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Dt;Dt=null,i(this),Dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Vn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=mo.length;o--;)mo[o].id===this.id&&mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),$w=function(){function n(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Mr(i)||(i={matches:i});var o=new cM(0,s||this.scope),a=o.conditions={},l,u,c;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=fr.matchMedia(i[u]),l&&(mo.indexOf(o)<0&&mo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(qp):l.addEventListener("change",qp)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Ff={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return $S(r)})},timeline:function(e){return new Vn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){dn(e)&&(e=Gi(e)[0]);var s=fo(e||{}).get,o=i?OS:IS;return i==="native"&&(i=""),e&&(t?o((pi[t]&&pi[t].get||s)(e,t,i,r)):function(a,l,u){return o((pi[a]&&pi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Gi(e),e.length>1){var r=e.map(function(c){return ai.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=pi[t],a=fo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;_a._pt=0,d.init(e,i?c+i:c,_a,0,[e]),d.render(1,d),_a._pt&&C_(1,_a)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ai.to(e,Ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=po(e.ease,Ha.ease)),l0(Ha,e||{})},config:function(e){return l0(Mi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!pi[a]&&!Ai[a]&&vu(t+" effect requires "+a+" plugin.")}),eh[t]=function(a,l,u){return i(Gi(a),Ci(l||{},s),u)},o&&(Vn.prototype[t]=function(a,l,u){return this.add(eh[t](a,Mr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){at[e]=po(t)},parseEase:function(e,t){return arguments.length?po(e,t):at},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Vn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&mr(i,r,r._start-r._delay),r=s;return mr(Ot,i,0),i},context:function(e,t){return e?new cM(e,t):Dt},matchMedia:function(e){return new $w(e)},matchMediaRefresh:function(){return mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||qp()},addEventListener:function(e,t){var i=ef[e]||(ef[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=ef[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Cw,wrapYoyo:Rw,distribute:VS,random:XS,snap:WS,normalize:Aw,getUnit:bn,clamp:Mw,splitColor:KS,toArray:Gi,selector:Xp,mapRange:YS,pipe:Tw,unitize:ww,interpolate:bw,shuffle:GS},install:PS,effects:eh,ticker:_i,updateRoot:Vn.updateRoot,plugins:pi,globalTimeline:Ot,core:{PropTween:ri,globals:LS,Tween:qt,Timeline:Vn,Animation:Mu,getCache:fo,_removeLinkedListItem:pd,reverting:function(){return gn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return p_=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ff[n]=qt[n]});_i.add(Vn.updateRoot);_a=Ff.to({},{duration:0});var Kw=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Zw=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Kw(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},sh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(dn(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Zw(a,s)}}}},ai=Ff.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)gn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},sh("roundProps",jp),sh("modifiers"),sh("snap",WS))||Ff;qt.version=Vn.version=ai.version="3.14.2";bS=1;__()&&Xa();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var p0,us,Ca,R_,ao,m0,b_,Qw=function(){return typeof window<"u"},jr={},Zs=180/Math.PI,Ra=Math.PI/180,Oo=Math.atan2,_0=1e8,P_=/([A-Z])/g,Jw=/(left|right|width|margin|padding|x)/i,eA=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$p=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},fM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sA=function(e,t,i){return e.style[t]=i},oA=function(e,t,i){return e.style.setProperty(t,i)},aA=function(e,t,i){return e._gsap[t]=i},lA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},uA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},cA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",si=Ft+"Origin",fA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in jr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Dr(r,a)}):this.tfm[e]=o.x?o[e]:Dr(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return _r.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},hM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},dA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(P_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=b_(),(!s||!s.isStart)&&!i[Ft]&&(hM(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},pM=function(e,t){var i={target:e,props:[],revert:dA,save:fA};return e._gsap||ai.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},mM,Kp=function(e,t){var i=us.createElementNS?us.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):us.createElement(e);return i&&i.style?i:us.createElement(e)},yi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(P_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ja(t)||t,1)||""},g0="O,Moz,ms,Ms,Webkit".split(","),ja=function(e,t,i){var r=t||ao,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(g0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?g0[o]:"")+e},Zp=function(){Qw()&&window.document&&(p0=window,us=p0.document,Ca=us.documentElement,ao=Kp("div")||{style:{}},Kp("div"),Ft=ja(Ft),si=Ft+"Origin",ao.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mM=!!ja("perspective"),b_=ai.core.reverting,R_=1)},v0=function(e){var t=e.ownerSVGElement,i=Kp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ca.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ca.removeChild(i),s},x0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},_M=function(e){var t,i;try{t=e.getBBox()}catch{t=v0(e),i=1}return t&&(t.width||t.height)||i||(t=v0(e)),t&&!t.width&&!t.x&&!t.y?{x:+x0(e,["x","cx","x1"])||0,y:+x0(e,["y","cy","y1"])||0,width:0,height:0}:t},gM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_M(e))},Ns=function(e,t){if(t){var i=e.style,r;t in jr&&t!==si&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(P_,"-$1").toLowerCase())):i.removeAttribute(t)}},cs=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?dM:fM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},y0={deg:1,rad:1,turn:1},hA={grid:1,flex:1},Us=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ao.style,l=Jw.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",x,_,m,f;if(r===o||!s||y0[r]||y0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&gM(e),(p||o==="%")&&(jr[t]||~t.indexOf("adius")))return x=f?e.getBBox()[l?"width":"height"]:e[c],Vt(p?s/x*d:s/100*x);if(a[l?"width":"height"]=d+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===us||!_.appendChild)&&(_=us.body),m=_._gsap,m&&p&&m.width&&l&&m.time===_i.time&&!m.uncache)return Vt(s/m.width*d);if(p&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=d+r,x=e[c],g?e.style[t]=g:Ns(e,t)}else(p||o==="%")&&!hA[yi(_,"display")]&&(a.position=yi(e,"position")),_===e&&(a.position="static"),_.appendChild(ao),x=ao[c],_.removeChild(ao),a.position="absolute";return l&&p&&(m=fo(_),m.time=_i.time,m.width=_[c]),Vt(h?x*s/d:x&&s?d/x*s:0)},Dr=function(e,t,i,r){var s;return R_||Zp(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),jr[t]&&t!=="transform"?(s=Tu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zf(yi(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=kf[t]&&kf[t](e,t,i)||yi(e,t)||NS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Us(e,t,s,i)+i:s},pA=function(e,t,i,r){if(!i||i==="none"){var s=ja(t,e,1),o=s&&yi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=yi(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,lM),l=0,u=0,c,d,h,p,x,_,m,f,g,v,y,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=yi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=yi(e,t)||r,_?e.style[t]=_:Ns(e,t)),c=[i,r],QS(c),i=c[0],r=c[1],h=i.match(ma)||[],w=r.match(ma)||[],w.length){for(;d=ma.exec(r);)m=d[0],g=r.substring(l,d.index),x?x=(x+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(x=1),m!==(_=h[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Aa(p,m)+y),f=parseFloat(m),v=m.substr((f+"").length),l=ma.lastIndex-v.length,v||(v=v||Mi.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Us(e,t,_,v)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:p,c:f-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?dM:fM;return RS.test(r)&&(a.e=0),this._pt=a,a},S0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=S0[i]||i,t[1]=S0[r]||r,t.join(" ")},_A=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],jr[a]&&(l=1,a=a==="transformOrigin"?si:Ft),Ns(i,a);l&&(Ns(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Tu(i,1),o.uncache=1,hM(r)))}},kf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,_A);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Eu=[1,0,0,1,0,0],vM={},xM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},M0=function(e){var t=yi(e,Ft);return xM(t)?Eu:t.substr(7).match(CS).map(Vt)},L_=function(e,t){var i=e._gsap||fo(e),r=e.style,s=M0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Eu:s):(s===Eu&&!e.offsetParent&&e!==Ca&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ca.appendChild(e)),s=M0(e),l?r.display=l:Ns(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ca.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qp=function(e,t,i,r,s,o){var a=e._gsap,l=s||L_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],x=l[1],_=l[2],m=l[3],f=l[4],g=l[5],v=t.split(" "),y=parseFloat(v[0])||0,w=parseFloat(v[1])||0,T,M,P,S;i?l!==Eu&&(M=p*m-x*_)&&(P=y*(m/M)+w*(-_/M)+(_*g-m*f)/M,S=y*(-x/M)+w*(p/M)-(p*g-x*f)/M,y=P,w=S):(T=_M(e),y=T.x+(~v[0].indexOf("%")?y/100*T.width:y),w=T.y+(~(v[1]||v[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(f=y-u,g=w-c,a.xOffset=d+(f*p+g*_)-f,a.yOffset=h+(f*x+g*m)-g):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(cs(o,a,"xOrigin",u,y),cs(o,a,"yOrigin",c,w),cs(o,a,"xOffset",d,a.xOffset),cs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Tu=function(e,t){var i=e._gsap||new nM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=yi(e,si)||"0",c,d,h,p,x,_,m,f,g,v,y,w,T,M,P,S,E,I,U,Z,L,F,H,j,N,k,R,$,Q,q,K,se;return c=d=h=_=m=f=g=v=y=0,p=x=1,i.svg=!!(e.getCTM&&gM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=L_(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Qp(e,j||u,!!j||i.originIsAbsolute,i.smooth!==!1,M)),w=i.xOrigin||0,T=i.yOrigin||0,M!==Eu&&(I=M[0],U=M[1],Z=M[2],L=M[3],c=F=M[4],d=H=M[5],M.length===6?(p=Math.sqrt(I*I+U*U),x=Math.sqrt(L*L+Z*Z),_=I||U?Oo(U,I)*Zs:0,g=Z||L?Oo(Z,L)*Zs+_:0,g&&(x*=Math.abs(Math.cos(g*Ra))),i.svg&&(c-=w-(w*I+T*Z),d-=T-(w*U+T*L))):(se=M[6],q=M[7],R=M[8],$=M[9],Q=M[10],K=M[11],c=M[12],d=M[13],h=M[14],P=Oo(se,Q),m=P*Zs,P&&(S=Math.cos(-P),E=Math.sin(-P),j=F*S+R*E,N=H*S+$*E,k=se*S+Q*E,R=F*-E+R*S,$=H*-E+$*S,Q=se*-E+Q*S,K=q*-E+K*S,F=j,H=N,se=k),P=Oo(-Z,Q),f=P*Zs,P&&(S=Math.cos(-P),E=Math.sin(-P),j=I*S-R*E,N=U*S-$*E,k=Z*S-Q*E,K=L*E+K*S,I=j,U=N,Z=k),P=Oo(U,I),_=P*Zs,P&&(S=Math.cos(P),E=Math.sin(P),j=I*S+U*E,N=F*S+H*E,U=U*S-I*E,H=H*S-F*E,I=j,F=N),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=Vt(Math.sqrt(I*I+U*U+Z*Z)),x=Vt(Math.sqrt(H*H+se*se)),P=Oo(F,H),g=Math.abs(P)>2e-4?P*Zs:0,y=K?1/(K<0?-K:K):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!xM(yi(e,Ft)),j&&e.setAttribute("transform",j))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Vt(p),i.scaleY=Vt(x),i.rotation=Vt(_)+a,i.rotationX=Vt(m)+a,i.rotationY=Vt(f)+a,i.skewX=g+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=zf(u)),i.xOffset=i.yOffset=0,i.force3D=Mi.force3D,i.renderTransform=i.svg?vA:mM?yM:gA,i.uncache=0,i},zf=function(e){return(e=e.split(" "))[0]+" "+e[1]},oh=function(e,t,i){var r=bn(t);return Vt(parseFloat(t)+parseFloat(Us(e,"x",i+"px",r)))+r},gA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yM(e,t)},Vs="0deg",dl="0px",Ws=") ",yM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,x=i.scaleX,_=i.scaleY,m=i.transformPerspective,f=i.force3D,g=i.target,v=i.zOrigin,y="",w=f==="auto"&&e&&e!==1||f===!0;if(v&&(d!==Vs||c!==Vs)){var T=parseFloat(c)*Ra,M=Math.sin(T),P=Math.cos(T),S;T=parseFloat(d)*Ra,S=Math.cos(T),o=oh(g,o,M*S*-v),a=oh(g,a,-Math.sin(T)*-v),l=oh(g,l,P*S*-v+v)}m!==dl&&(y+="perspective("+m+Ws),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||o!==dl||a!==dl||l!==dl)&&(y+=l!==dl||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ws),u!==Vs&&(y+="rotate("+u+Ws),c!==Vs&&(y+="rotateY("+c+Ws),d!==Vs&&(y+="rotateX("+d+Ws),(h!==Vs||p!==Vs)&&(y+="skew("+h+", "+p+Ws),(x!==1||_!==1)&&(y+="scale("+x+", "+_+Ws),g.style[Ft]=y||"translate(0, 0)"},vA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,x=i.xOrigin,_=i.yOrigin,m=i.xOffset,f=i.yOffset,g=i.forceCSS,v=parseFloat(o),y=parseFloat(a),w,T,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ra,u*=Ra,w=Math.cos(l)*d,T=Math.sin(l)*d,M=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=Ra,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),w*=S,T*=S)),w=Vt(w),T=Vt(T),M=Vt(M),P=Vt(P)):(w=d,P=h,T=M=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Us(p,"x",o,"px"),y=Us(p,"y",a,"px")),(x||_||m||f)&&(v=Vt(v+x-(x*w+_*M)+m),y=Vt(y+_-(x*T+_*P)+f)),(r||s)&&(S=p.getBBox(),v=Vt(v+r/100*S.width),y=Vt(y+s/100*S.height)),S="matrix("+w+","+T+","+M+","+P+","+v+","+y+")",p.setAttribute("transform",S),g&&(p.style[Ft]=S)},xA=function(e,t,i,r,s){var o=360,a=dn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zs:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*_0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*_0)%o-~~(u/o)*o)),e._pt=h=new ri(e._pt,t,i,r,u,tA),h.e=c,h.u="deg",e._props.push(i),h},E0=function(e,t){for(var i in t)e[i]=t[i];return e},yA=function(e,t,i){var r=E0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Tu(i,1),Ns(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Tu(i,1),o[Ft]=u);for(l in jr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=bn(u),x=bn(c),d=p!==x?Us(i,l,u,x):parseFloat(u),h=parseFloat(c),e._pt=new ri(e._pt,a,l,d,h-d,$p),e._pt.u=x||0,e._props.push(l));E0(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});kf[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(x){return Dr(a,x,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(x,_){return p[x]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,d)}});var SM={name:"css",register:Zp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,x,_,m,f,g,v,y,w,T,M,P,S;R_||Zp(),this.styles=this.styles||pM(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(pi[_]&&iM(_,t,i,r,e,s)))){if(p=typeof c,x=kf[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=yu(c)),x)x(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",ws.lastIndex=0,ws.test(u)||(m=bn(u),f=bn(c),f?m!==f&&(u=Us(e,_,u,f)+f):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],dn(u)&&~u.indexOf("random(")&&(u=yu(u)),bn(u+"")||u==="auto"||(u+=Mi.units[_]||bn(Dr(e,_))||""),(u+"").charAt(1)==="="&&(u=Dr(e,_))):u=Dr(e,_),h=parseFloat(u),g=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),d=parseFloat(c),_ in _r&&(_==="autoAlpha"&&(h===1&&Dr(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),cs(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=_r[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in jr,v){if(this.styles.save(_),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=yi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=yi(e,"perspective"),E?e.style.perspective=E:Ns(e,"perspective")}d=parseFloat(c)}if(y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Tu(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new ri(this._pt,a,Ft,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new ri(this._pt,w,"scaleY",w.scaleY,(g?Aa(w.scaleY,g+d):d)-w.scaleY||0,$p),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(si,0,a[si]),c=mA(c),w.svg?Qp(e,c,0,T,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==w.zOrigin&&cs(this,w,"zOrigin",w.zOrigin,f),cs(this,a,_,zf(u),zf(c)));continue}else if(_==="svgOrigin"){Qp(e,c,1,T,0,this);continue}else if(_ in vM){xA(this,w,_,h,g?Aa(h,g+c):c);continue}else if(_==="smoothOrigin"){cs(this,w,"smooth",w.smooth,c);continue}else if(_==="force3D"){w[_]=c;continue}else if(_==="transform"){yA(this,c,e);continue}}else _ in a||(_=ja(_)||_);if(v||(d||d===0)&&(h||h===0)&&!eA.test(c)&&_ in a)m=(u+"").substr((h+"").length),d||(d=0),f=bn(c)||(_ in Mi.units?Mi.units[_]:m),m!==f&&(h=Us(e,_,u,f)),this._pt=new ri(this._pt,v?w:a,_,h,(g?Aa(h,g+d):d)-h,!v&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?rA:$p),this._pt.u=f||0,v&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=iA):m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=nA);else if(_ in a)pA.call(this,e,_,u,g?g+c:c);else if(_ in e)this.add(e,_,u||e[_],g?g+c:c,r,s);else if(_!=="parseTransform"){v_(_,c);continue}v||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,u||e[_])),o.push(_)}}M&&uM(this)},render:function(e,t){if(t.tween._time||!b_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Dr,aliases:_r,getSetter:function(e,t,i){var r=_r[t];return r&&r.indexOf(",")<0&&(t=r),t in jr&&t!==si&&(e._gsap.x||Dr(e,"x"))?i&&m0===i?t==="scale"?lA:aA:(m0=i||{})&&(t==="scale"?uA:cA):e.style&&!m_(e.style[t])?sA:~t.indexOf("-")?oA:A_(e,t)},core:{_removeProperty:Ns,_getMatrix:L_}};ai.utils.checkPrefix=ja;ai.core.getStyleSaver=pM;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){jr[s]=1});ii(e,function(s){Mi.units[s]="deg",vM[s]=1}),_r[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");_r[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Mi.units[n]="px"});ai.registerPlugin(SM);var Rn=ai.registerPlugin(SM)||ai;Rn.core.Tween;const SA=()=>{const n=Ln.useRef(null),e=Ln.useRef(null);return Ln.useEffect(()=>{const t=l=>{Rn.to(n.current,{x:l.clientX,y:l.clientY,duration:.1}),Rn.to(e.current,{x:l.clientX,y:l.clientY,duration:.5,ease:"power2.out"})},i=()=>{Rn.to(e.current,{scale:3,backgroundColor:"rgba(255,255,255,0.1)",mixBlendMode:"difference",duration:.3}),Rn.to(n.current,{scale:0,duration:.3})},r=()=>{Rn.to(e.current,{scale:1,backgroundColor:"transparent",mixBlendMode:"normal",duration:.3}),Rn.to(n.current,{scale:1,duration:.3})};window.addEventListener("mousemove",t),document.querySelectorAll("a, button, .interactive").forEach(l=>{l.addEventListener("mouseenter",i),l.addEventListener("mouseleave",r)});const o=l=>{(l.target.closest(".interactive")||l.target.closest("a")||l.target.closest("button"))&&i()},a=l=>{(l.target.closest(".interactive")||l.target.closest("a")||l.target.closest("button"))&&r()};return document.body.addEventListener("mouseover",o),document.body.addEventListener("mouseout",a),()=>{window.removeEventListener("mousemove",t),document.body.removeEventListener("mouseover",o),document.body.removeEventListener("mouseout",a)}},[]),J.jsxs(J.Fragment,{children:[J.jsx("div",{ref:n,className:"fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"}),J.jsx("div",{ref:e,className:"fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-colors"})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const D_="160",MA=0,T0=1,EA=2,MM=1,TA=2,Rr=3,Is=0,oi=1,Nr=2,As=0,ba=1,w0=2,A0=3,C0=4,wA=5,no=100,AA=101,CA=102,R0=103,b0=104,RA=200,bA=201,PA=202,LA=203,Jp=204,em=205,DA=206,NA=207,UA=208,IA=209,OA=210,FA=211,kA=212,zA=213,BA=214,HA=0,GA=1,VA=2,Bf=3,WA=4,XA=5,jA=6,YA=7,EM=0,qA=1,$A=2,Cs=0,KA=1,ZA=2,QA=3,JA=4,eC=5,tC=6,TM=300,Ya=301,qa=302,tm=303,nm=304,gd=306,im=1e3,nr=1001,rm=1002,Gn=1003,P0=1004,ah=1005,Ii=1006,nC=1007,wu=1008,Rs=1009,iC=1010,rC=1011,N_=1012,wM=1013,fs=1014,ds=1015,Au=1016,AM=1017,CM=1018,_o=1020,sC=1021,ir=1023,oC=1024,aC=1025,go=1026,$a=1027,lC=1028,RM=1029,uC=1030,bM=1031,PM=1033,lh=33776,uh=33777,ch=33778,fh=33779,L0=35840,D0=35841,N0=35842,U0=35843,LM=36196,I0=37492,O0=37496,F0=37808,k0=37809,z0=37810,B0=37811,H0=37812,G0=37813,V0=37814,W0=37815,X0=37816,j0=37817,Y0=37818,q0=37819,$0=37820,K0=37821,dh=36492,Z0=36494,Q0=36495,cC=36283,J0=36284,ev=36285,tv=36286,DM=3e3,vo=3001,fC=3200,dC=3201,hC=0,pC=1,zi="",pn="srgb",Yr="srgb-linear",U_="display-p3",vd="display-p3-linear",Hf="linear",Rt="srgb",Gf="rec709",Vf="p3",Fo=7680,nv=519,mC=512,_C=513,gC=514,NM=515,vC=516,xC=517,yC=518,SC=519,iv=35044,rv="300 es",sm=1035,Fr=2e3,Wf=2001;class tl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=Math.PI/180,om=180/Math.PI;function Iu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function Zn(n,e,t){return Math.max(e,Math.min(t,n))}function MC(n,e){return(n%e+e)%e}function ph(n,e,t){return(1-t)*n+t*e}function sv(n){return(n&n-1)===0&&n!==0}function am(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,i,r,s,o,a,l,u){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],x=i[8],_=r[0],m=r[3],f=r[6],g=r[1],v=r[4],y=r[7],w=r[2],T=r[5],M=r[8];return s[0]=o*_+a*g+l*w,s[3]=o*m+a*v+l*T,s[6]=o*f+a*y+l*M,s[1]=u*_+c*g+d*w,s[4]=u*m+c*v+d*T,s[7]=u*f+c*y+d*M,s[2]=h*_+p*g+x*w,s[5]=h*m+p*v+x*T,s[8]=h*f+p*y+x*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=t*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mh.makeScale(e,t)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new nt;function UM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function EC(){const n=Xf("canvas");return n.style.display="block",n}const ov={};function Wl(n){n in ov||(ov[n]=!0,console.warn(n))}const av=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lv=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rc={[Yr]:{transfer:Hf,primaries:Gf,toReference:n=>n,fromReference:n=>n},[pn]:{transfer:Rt,primaries:Gf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[vd]:{transfer:Hf,primaries:Vf,toReference:n=>n.applyMatrix3(lv),fromReference:n=>n.applyMatrix3(av)},[U_]:{transfer:Rt,primaries:Vf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(lv),fromReference:n=>n.applyMatrix3(av).convertLinearToSRGB()}},TC=new Set([Yr,vd]),xt={enabled:!0,_workingColorSpace:Yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!TC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=rc[e].toReference,r=rc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return rc[n].primaries},getTransfer:function(n){return n===zi?Hf:rc[n].transfer}};function Pa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _h(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ko;class IM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ko===void 0&&(ko=Xf("canvas")),ko.width=e.width,ko.height=e.height;const i=ko.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ko}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pa(t[i]/255)*255):t[i]=Pa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wC=0;class OM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wC++}),this.uuid=Iu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gh(r[o].image)):s.push(gh(r[o]))}else s=gh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?IM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AC=0;class Ei extends tl{constructor(e=Ei.DEFAULT_IMAGE,t=Ei.DEFAULT_MAPPING,i=nr,r=nr,s=Ii,o=wu,a=ir,l=Rs,u=Ei.DEFAULT_ANISOTROPY,c=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AC++}),this.uuid=Iu(),this.name="",this.source=new OM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Wl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===vo?pn:zi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==TM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case im:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case rm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case im:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case rm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pn?vo:DM}set encoding(e){Wl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vo?pn:zi}}Ei.DEFAULT_IMAGE=null;Ei.DEFAULT_MAPPING=TM;Ei.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,i=0,r=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],x=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,w=(f+1)/2,T=(c+h)/4,M=(d+_)/4,P=(x+m)/4;return v>y&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=M/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=P/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-_)/g,this.z=(h-c)/g,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CC extends tl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Wl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vo?pn:zi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ei(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new OM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Co extends CC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class FM extends Ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class RC extends Ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ou{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(d!==_||l!==h||u!==p||c!==x){let m=1-a;const f=l*h+u*p+c*x+d*_,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const w=Math.sqrt(v),T=Math.atan2(w,f*g);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const y=a*g;if(l=l*m+h*y,u=u*m+p*y,c=c*m+x*y,d=d*m+_*y,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=w,u*=w,c*=w,d*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*p-u*h,e[t+1]=l*x+c*h+u*d-a*p,e[t+2]=u*x+c*p+a*h-l*d,e[t+3]=c*x-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"YXZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"ZXY":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"ZYX":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"YZX":this._x=h*c*d+u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d-h*p*x;break;case"XZY":this._x=h*c*d-u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new X,uv=new Ou;class Fu{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(s,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sc.copy(i.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),oc.subVectors(this.max,pl),zo.subVectors(e.a,pl),Bo.subVectors(e.b,pl),Ho.subVectors(e.c,pl),Kr.subVectors(Bo,zo),Zr.subVectors(Ho,Bo),Xs.subVectors(zo,Ho);let t=[0,-Kr.z,Kr.y,0,-Zr.z,Zr.y,0,-Xs.z,Xs.y,Kr.z,0,-Kr.x,Zr.z,0,-Zr.x,Xs.z,0,-Xs.x,-Kr.y,Kr.x,0,-Zr.y,Zr.x,0,-Xs.y,Xs.x,0];return!xh(t,zo,Bo,Ho,oc)||(t=[1,0,0,0,1,0,0,0,1],!xh(t,zo,Bo,Ho,oc))?!1:(ac.crossVectors(Kr,Zr),t=[ac.x,ac.y,ac.z],xh(t,zo,Bo,Ho,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Er=[new X,new X,new X,new X,new X,new X,new X,new X],qi=new X,sc=new Fu,zo=new X,Bo=new X,Ho=new X,Kr=new X,Zr=new X,Xs=new X,pl=new X,oc=new X,ac=new X,js=new X;function xh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){js.fromArray(n,s);const a=r.x*Math.abs(js.x)+r.y*Math.abs(js.y)+r.z*Math.abs(js.z),l=e.dot(js),u=t.dot(js),c=i.dot(js);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const bC=new Fu,ml=new X,yh=new X;class xd{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const t=ml.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ml,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(yh)),this.expandByPoint(ml.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tr=new X,Sh=new X,lc=new X,Qr=new X,Mh=new X,uc=new X,Eh=new X;class kM{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sh.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Sh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(lc),a=Qr.dot(this.direction),l=-Qr.dot(lc),u=Qr.lengthSq(),c=Math.abs(1-o*o);let d,h,p,x;if(c>0)if(d=o*l-a,h=o*a-l,x=s*c,d>=0)if(h>=-x)if(h<=x){const _=1/c;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sh).addScaledVector(lc,h),p}intersectSphere(e,t){Tr.subVectors(e.center,this.origin);const i=Tr.dot(this.direction),r=Tr.dot(Tr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,i,r,s){Mh.subVectors(t,e),uc.subVectors(i,e),Eh.crossVectors(Mh,uc);let o=this.direction.dot(Eh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qr.subVectors(this.origin,e);const l=a*this.direction.dot(uc.crossVectors(Qr,uc));if(l<0)return null;const u=a*this.direction.dot(Mh.cross(Qr));if(u<0||l+u>o)return null;const c=-a*Qr.dot(Eh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,x,_,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,_,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Go.setFromMatrixColumn(e,0).length(),s=1/Go.setFromMatrixColumn(e,1).length(),o=1/Go.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,x=a*c,_=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+x*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,x=u*c,_=u*d;t[0]=h+_*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-x,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,x=u*c,_=u*d;t[0]=h-_*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,x=a*c,_=a*d;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+_,t[1]=l*d,t[5]=_*u+h,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*c,t[4]=_-h*d,t[8]=x*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+x,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+_,t[5]=o*c,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*c,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PC,e,LC)}lookAt(e,t,i){const r=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Jr.crossVectors(i,ui),Jr.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Jr.crossVectors(i,ui)),Jr.normalize(),cc.crossVectors(ui,Jr),r[0]=Jr.x,r[4]=cc.x,r[8]=ui.x,r[1]=Jr.y,r[5]=cc.y,r[9]=ui.y,r[2]=Jr.z,r[6]=cc.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],x=i[2],_=i[6],m=i[10],f=i[14],g=i[3],v=i[7],y=i[11],w=i[15],T=r[0],M=r[4],P=r[8],S=r[12],E=r[1],I=r[5],U=r[9],Z=r[13],L=r[2],F=r[6],H=r[10],j=r[14],N=r[3],k=r[7],R=r[11],$=r[15];return s[0]=o*T+a*E+l*L+u*N,s[4]=o*M+a*I+l*F+u*k,s[8]=o*P+a*U+l*H+u*R,s[12]=o*S+a*Z+l*j+u*$,s[1]=c*T+d*E+h*L+p*N,s[5]=c*M+d*I+h*F+p*k,s[9]=c*P+d*U+h*H+p*R,s[13]=c*S+d*Z+h*j+p*$,s[2]=x*T+_*E+m*L+f*N,s[6]=x*M+_*I+m*F+f*k,s[10]=x*P+_*U+m*H+f*R,s[14]=x*S+_*Z+m*j+f*$,s[3]=g*T+v*E+y*L+w*N,s[7]=g*M+v*I+y*F+w*k,s[11]=g*P+v*U+y*H+w*R,s[15]=g*S+v*Z+y*j+w*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],x=e[3],_=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],x=e[12],_=e[13],m=e[14],f=e[15],g=d*m*u-_*h*u+_*l*p-a*m*p-d*l*f+a*h*f,v=x*h*u-c*m*u-x*l*p+o*m*p+c*l*f-o*h*f,y=c*_*u-x*d*u+x*a*p-o*_*p-c*a*f+o*d*f,w=x*d*l-c*_*l-x*a*h+o*_*h+c*a*m-o*d*m,T=t*g+i*v+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=g*M,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*f+i*l*f)*M,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(c*m*s-x*h*s+x*r*p-t*m*p-c*r*f+t*h*f)*M,e[6]=(x*l*s-o*m*s-x*r*u+t*m*u+o*r*f-t*l*f)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(x*d*s-c*_*s-x*i*p+t*_*p+c*i*f-t*d*f)*M,e[10]=(o*_*s-x*a*s+x*i*u-t*_*u-o*i*f+t*a*f)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=w*M,e[13]=(c*_*r-x*d*r+x*i*h-t*_*h-c*i*m+t*d*m)*M,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,x=s*d,_=o*c,m=o*d,f=a*d,g=l*u,v=l*c,y=l*d,w=i.x,T=i.y,M=i.z;return r[0]=(1-(_+f))*w,r[1]=(p+y)*w,r[2]=(x-v)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(h+f))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(x+v)*M,r[9]=(m-g)*M,r[10]=(1-(h+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Go.set(r[0],r[1],r[2]).length();const o=Go.set(r[4],r[5],r[6]).length(),a=Go.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$i.copy(this);const u=1/s,c=1/o,d=1/a;return $i.elements[0]*=u,$i.elements[1]*=u,$i.elements[2]*=u,$i.elements[4]*=c,$i.elements[5]*=c,$i.elements[6]*=c,$i.elements[8]*=d,$i.elements[9]*=d,$i.elements[10]*=d,t.setFromRotationMatrix($i),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Fr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,x;if(a===Fr)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Wf)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Fr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let x,_;if(a===Fr)x=(o+s)*d,_=-2*d;else if(a===Wf)x=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Go=new X,$i=new Kt,PC=new X(0,0,0),LC=new X(1,1,1),Jr=new X,cc=new X,ui=new X,cv=new Kt,fv=new Ou;class yd{constructor(e=0,t=0,i=0,r=yd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fv.setFromEuler(this),this.setFromQuaternion(fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yd.DEFAULT_ORDER="XYZ";class zM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DC=0;const dv=new X,Vo=new Ou,wr=new Kt,fc=new X,_l=new X,NC=new X,UC=new Ou,hv=new X(1,0,0),pv=new X(0,1,0),mv=new X(0,0,1),IC={type:"added"},OC={type:"removed"};class vn extends tl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=Iu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new X,t=new yd,i=new Ou,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new nt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vo.setFromAxisAngle(e,t),this.quaternion.multiply(Vo),this}rotateOnWorldAxis(e,t){return Vo.setFromAxisAngle(e,t),this.quaternion.premultiply(Vo),this}rotateX(e){return this.rotateOnAxis(hv,e)}rotateY(e){return this.rotateOnAxis(pv,e)}rotateZ(e){return this.rotateOnAxis(mv,e)}translateOnAxis(e,t){return dv.copy(e).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hv,e)}translateY(e){return this.translateOnAxis(pv,e)}translateZ(e){return this.translateOnAxis(mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fc.copy(e):fc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(_l,fc,this.up):wr.lookAt(fc,_l,this.up),this.quaternion.setFromRotationMatrix(wr),r&&(wr.extractRotation(r.matrixWorld),Vo.setFromRotationMatrix(wr),this.quaternion.premultiply(Vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(OC)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,NC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,UC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new X(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new X,Ar=new X,Th=new X,Cr=new X,Wo=new X,Xo=new X,_v=new X,wh=new X,Ah=new X,Ch=new X;let dc=!1;class tr{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ki.subVectors(e,t),r.cross(Ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ki.subVectors(r,t),Ar.subVectors(i,t),Th.subVectors(e,t);const o=Ki.dot(Ki),a=Ki.dot(Ar),l=Ki.dot(Th),u=Ar.dot(Ar),c=Ar.dot(Th),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getUV(e,t,i,r,s,o,a,l){return dc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cr.x),l.addScaledVector(o,Cr.y),l.addScaledVector(a,Cr.z),l)}static isFrontFacing(e,t,i,r){return Ki.subVectors(i,t),Ar.subVectors(e,t),Ki.cross(Ar).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),Ki.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return dc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dc=!0),tr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return tr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Wo.subVectors(r,i),Xo.subVectors(s,i),wh.subVectors(e,i);const l=Wo.dot(wh),u=Xo.dot(wh);if(l<=0&&u<=0)return t.copy(i);Ah.subVectors(e,r);const c=Wo.dot(Ah),d=Xo.dot(Ah);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Wo,o);Ch.subVectors(e,s);const p=Wo.dot(Ch),x=Xo.dot(Ch);if(x>=0&&p<=x)return t.copy(s);const _=p*u-l*x;if(_<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Xo,a);const m=c*x-p*d;if(m<=0&&d-c>=0&&p-x>=0)return _v.subVectors(s,r),a=(d-c)/(d-c+(p-x)),t.copy(r).addScaledVector(_v,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Wo,o).addScaledVector(Xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const BM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Rh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=MC(e,1),t=Zn(t,0,1),i=Zn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Rh(o,s,e+1/3),this.g=Rh(o,s,e),this.b=Rh(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=BM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=_h(e.r),this.g=_h(e.g),this.b=_h(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return xt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(Zn(Tn.r*255,0,255))*65536+Math.round(Zn(Tn.g*255,0,255))*256+Math.round(Zn(Tn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=pn){xt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(hc);const i=ph(es.h,hc.h,t),r=ph(es.s,hc.s,t),s=ph(es.l,hc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new dt;dt.NAMES=BM;let FC=0;class ku extends tl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FC++}),this.uuid=Iu(),this.name="",this.type="Material",this.blending=ba,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jp,this.blendDst=em,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Bf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(i.blending=this.blending),this.side!==Is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jp&&(i.blendSrc=this.blendSrc),this.blendDst!==em&&(i.blendDst=this.blendDst),this.blendEquation!==no&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jf extends ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=EM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new X,pc=new ct;class or{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=iv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ds,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hl(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hl(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hl(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array),s=qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iv&&(e.usage=this.usage),e}}class HM extends or{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class GM extends or{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ti extends or{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kC=0;const Li=new Kt,bh=new vn,jo=new X,ci=new Fu,gl=new Fu,on=new X;class lr extends tl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kC++}),this.uuid=Iu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(UM(e)?GM:HM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gl.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(ci.min,gl.min),ci.expandByPoint(on),on.addVectors(ci.max,gl.max),ci.expandByPoint(on)):(ci.expandByPoint(gl.min),ci.expandByPoint(gl.max))}ci.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(on));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)on.fromBufferAttribute(a,u),l&&(jo.fromBufferAttribute(e,u),on.add(jo)),r=Math.max(r,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new or(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new X,c[E]=new X;const d=new X,h=new X,p=new X,x=new ct,_=new ct,m=new ct,f=new X,g=new X;function v(E,I,U){d.fromArray(r,E*3),h.fromArray(r,I*3),p.fromArray(r,U*3),x.fromArray(o,E*2),_.fromArray(o,I*2),m.fromArray(o,U*2),h.sub(d),p.sub(d),_.sub(x),m.sub(x);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Z),g.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(Z),u[E].add(f),u[I].add(f),u[U].add(f),c[E].add(g),c[I].add(g),c[U].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,I=y.length;E<I;++E){const U=y[E],Z=U.start,L=U.count;for(let F=Z,H=Z+L;F<H;F+=3)v(i[F+0],i[F+1],i[F+2])}const w=new X,T=new X,M=new X,P=new X;function S(E){M.fromArray(s,E*3),P.copy(M);const I=u[E];w.copy(I),w.sub(M.multiplyScalar(M.dot(I))).normalize(),T.crossVectors(P,I);const Z=T.dot(c[E])<0?-1:1;l[E*4]=w.x,l[E*4+1]=w.y,l[E*4+2]=w.z,l[E*4+3]=Z}for(let E=0,I=y.length;E<I;++E){const U=y[E],Z=U.start,L=U.count;for(let F=Z,H=Z+L;F<H;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new or(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,c=new X,d=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let f=0;f<c;f++)h[x++]=u[p++]}return new or(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gv=new Kt,Ys=new kM,mc=new xd,vv=new X,Yo=new X,qo=new X,$o=new X,Ph=new X,_c=new X,gc=new ct,vc=new ct,xc=new ct,xv=new X,yv=new X,Sv=new X,yc=new X,Sc=new X;class gr extends vn{constructor(e=new lr,t=new jf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_c.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Ph.fromBufferAttribute(d,e),o?_c.addScaledVector(Ph,c):_c.addScaledVector(Ph.sub(t),c))}t.add(_c)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(mc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(mc,vv)===null||Ys.origin.distanceToSquared(vv)>(e.far-e.near)**2))&&(gv.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(gv),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,w=v;y<w;y+=3){const T=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=Mc(this,f,e,i,u,c,d,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const g=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Mc(this,o,e,i,u,c,d,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,w=v;y<w;y+=3){const T=y,M=y+1,P=y+2;r=Mc(this,f,e,i,u,c,d,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const g=m,v=m+1,y=m+2;r=Mc(this,o,e,i,u,c,d,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function zC(n,e,t,i,r,s,o,a){let l;if(e.side===oi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Is,a),l===null)return null;Sc.copy(a),Sc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Sc);return u<t.near||u>t.far?null:{distance:u,point:Sc.clone(),object:n}}function Mc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Yo),n.getVertexPosition(l,qo),n.getVertexPosition(u,$o);const c=zC(n,e,t,i,Yo,qo,$o,yc);if(c){r&&(gc.fromBufferAttribute(r,a),vc.fromBufferAttribute(r,l),xc.fromBufferAttribute(r,u),c.uv=tr.getInterpolation(yc,Yo,qo,$o,gc,vc,xc,new ct)),s&&(gc.fromBufferAttribute(s,a),vc.fromBufferAttribute(s,l),xc.fromBufferAttribute(s,u),c.uv1=tr.getInterpolation(yc,Yo,qo,$o,gc,vc,xc,new ct),c.uv2=c.uv1),o&&(xv.fromBufferAttribute(o,a),yv.fromBufferAttribute(o,l),Sv.fromBufferAttribute(o,u),c.normal=tr.getInterpolation(yc,Yo,qo,$o,xv,yv,Sv,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new X,materialIndex:0};tr.getNormal(Yo,qo,$o,d.normal),c.face=d}return c}class zu extends lr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ti(u,3)),this.setAttribute("normal",new Ti(c,3)),this.setAttribute("uv",new Ti(d,2));function x(_,m,f,g,v,y,w,T,M,P,S){const E=y/M,I=w/P,U=y/2,Z=w/2,L=T/2,F=M+1,H=P+1;let j=0,N=0;const k=new X;for(let R=0;R<H;R++){const $=R*I-Z;for(let Q=0;Q<F;Q++){const q=Q*E-U;k[_]=q*g,k[m]=$*v,k[f]=L,u.push(k.x,k.y,k.z),k[_]=0,k[m]=0,k[f]=T>0?1:-1,c.push(k.x,k.y,k.z),d.push(Q/M),d.push(1-R/P),j+=1}}for(let R=0;R<P;R++)for(let $=0;$<M;$++){const Q=h+$+F*R,q=h+$+F*(R+1),K=h+($+1)+F*(R+1),se=h+($+1)+F*R;l.push(Q,q,se),l.push(q,K,se),N+=6}a.addGroup(p,N,S),p+=N,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ka(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=Ka(n[t]);for(const r in i)e[r]=i[r]}return e}function BC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function VM(n){return n.getRenderTarget()===null?n.outputColorSpace:xt.workingColorSpace}const HC={clone:Ka,merge:Fn};var GC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ro extends ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GC,this.fragmentShader=VC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ka(e.uniforms),this.uniformsGroups=BC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class WM extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Fr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oi extends WM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=om*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return om*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ko=-90,Zo=1;class WC extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oi(Ko,Zo,e,t);r.layers=this.layers,this.add(r);const s=new Oi(Ko,Zo,e,t);s.layers=this.layers,this.add(s);const o=new Oi(Ko,Zo,e,t);o.layers=this.layers,this.add(o);const a=new Oi(Ko,Zo,e,t);a.layers=this.layers,this.add(a);const l=new Oi(Ko,Zo,e,t);l.layers=this.layers,this.add(l);const u=new Oi(Ko,Zo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Fr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class XM extends Ei{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ya,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XC extends Co{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Wl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vo?pn:zi),this.texture=new XM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zu(5,5,5),s=new Ro({name:"CubemapFromEquirect",uniforms:Ka(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:As});s.uniforms.tEquirect.value=t;const o=new gr(r,s),a=t.minFilter;return t.minFilter===wu&&(t.minFilter=Ii),new WC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Lh=new X,jC=new X,YC=new nt;class Qs{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Lh.subVectors(i,t).cross(jC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||YC.getNormalMatrix(e),r=this.coplanarPoint(Lh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new xd,Ec=new X;class I_{constructor(e=new Qs,t=new Qs,i=new Qs,r=new Qs,s=new Qs,o=new Qs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],x=r[9],_=r[10],m=r[11],f=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+x,y+g).normalize(),i[3].setComponents(l-o,h-c,m-x,y-g).normalize(),i[4].setComponents(l-a,h-d,m-_,y-v).normalize(),t===Fr)i[5].setComponents(l+a,h+d,m+_,y+v).normalize();else if(t===Wf)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ec.x=r.normal.x>0?e.max.x:e.min.x,Ec.y=r.normal.y>0?e.max.y:e.min.y,Ec.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qC(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,x=n.createBuffer();n.bindBuffer(c,x),n.bufferData(c,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const h=c.array,p=c._updateRange,x=c.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&x.length===0&&n.bufferSubData(d,0,h),x.length!==0){for(let _=0,m=x.length;_<m;_++){const f=x[_];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class O_ extends lr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],x=[],_=[],m=[];for(let f=0;f<c;f++){const g=f*h-o;for(let v=0;v<u;v++){const y=v*d-s;x.push(y,-g,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const v=g+u*f,y=g+u*(f+1),w=g+1+u*(f+1),T=g+1+u*f;p.push(v,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new Ti(x,3)),this.setAttribute("normal",new Ti(_,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new O_(e.width,e.height,e.widthSegments,e.heightSegments)}}var $C=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_R=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ER=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wR="gl_FragColor = linearToOutputTexel( gl_FragColor );",AR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,CR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$R=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_P=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:$C,alphahash_pars_fragment:KC,alphamap_fragment:ZC,alphamap_pars_fragment:QC,alphatest_fragment:JC,alphatest_pars_fragment:eR,aomap_fragment:tR,aomap_pars_fragment:nR,batching_pars_vertex:iR,batching_vertex:rR,begin_vertex:sR,beginnormal_vertex:oR,bsdfs:aR,iridescence_fragment:lR,bumpmap_pars_fragment:uR,clipping_planes_fragment:cR,clipping_planes_pars_fragment:fR,clipping_planes_pars_vertex:dR,clipping_planes_vertex:hR,color_fragment:pR,color_pars_fragment:mR,color_pars_vertex:_R,color_vertex:gR,common:vR,cube_uv_reflection_fragment:xR,defaultnormal_vertex:yR,displacementmap_pars_vertex:SR,displacementmap_vertex:MR,emissivemap_fragment:ER,emissivemap_pars_fragment:TR,colorspace_fragment:wR,colorspace_pars_fragment:AR,envmap_fragment:CR,envmap_common_pars_fragment:RR,envmap_pars_fragment:bR,envmap_pars_vertex:PR,envmap_physical_pars_fragment:GR,envmap_vertex:LR,fog_vertex:DR,fog_pars_vertex:NR,fog_fragment:UR,fog_pars_fragment:IR,gradientmap_pars_fragment:OR,lightmap_fragment:FR,lightmap_pars_fragment:kR,lights_lambert_fragment:zR,lights_lambert_pars_fragment:BR,lights_pars_begin:HR,lights_toon_fragment:VR,lights_toon_pars_fragment:WR,lights_phong_fragment:XR,lights_phong_pars_fragment:jR,lights_physical_fragment:YR,lights_physical_pars_fragment:qR,lights_fragment_begin:$R,lights_fragment_maps:KR,lights_fragment_end:ZR,logdepthbuf_fragment:QR,logdepthbuf_pars_fragment:JR,logdepthbuf_pars_vertex:eb,logdepthbuf_vertex:tb,map_fragment:nb,map_pars_fragment:ib,map_particle_fragment:rb,map_particle_pars_fragment:sb,metalnessmap_fragment:ob,metalnessmap_pars_fragment:ab,morphcolor_vertex:lb,morphnormal_vertex:ub,morphtarget_pars_vertex:cb,morphtarget_vertex:fb,normal_fragment_begin:db,normal_fragment_maps:hb,normal_pars_fragment:pb,normal_pars_vertex:mb,normal_vertex:_b,normalmap_pars_fragment:gb,clearcoat_normal_fragment_begin:vb,clearcoat_normal_fragment_maps:xb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:Sb,opaque_fragment:Mb,packing:Eb,premultiplied_alpha_fragment:Tb,project_vertex:wb,dithering_fragment:Ab,dithering_pars_fragment:Cb,roughnessmap_fragment:Rb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:Lb,shadowmap_vertex:Db,shadowmask_pars_fragment:Nb,skinbase_vertex:Ub,skinning_pars_vertex:Ib,skinning_vertex:Ob,skinnormal_vertex:Fb,specularmap_fragment:kb,specularmap_pars_fragment:zb,tonemapping_fragment:Bb,tonemapping_pars_fragment:Hb,transmission_fragment:Gb,transmission_pars_fragment:Vb,uv_pars_fragment:Wb,uv_pars_vertex:Xb,uv_vertex:jb,worldpos_vertex:Yb,background_vert:qb,background_frag:$b,backgroundCube_vert:Kb,backgroundCube_frag:Zb,cube_vert:Qb,cube_frag:Jb,depth_vert:eP,depth_frag:tP,distanceRGBA_vert:nP,distanceRGBA_frag:iP,equirect_vert:rP,equirect_frag:sP,linedashed_vert:oP,linedashed_frag:aP,meshbasic_vert:lP,meshbasic_frag:uP,meshlambert_vert:cP,meshlambert_frag:fP,meshmatcap_vert:dP,meshmatcap_frag:hP,meshnormal_vert:pP,meshnormal_frag:mP,meshphong_vert:_P,meshphong_frag:gP,meshphysical_vert:vP,meshphysical_frag:xP,meshtoon_vert:yP,meshtoon_frag:SP,points_vert:MP,points_frag:EP,shadow_vert:TP,shadow_frag:wP,sprite_vert:AP,sprite_frag:CP},pe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},hr={basic:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Fn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Fn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Fn([pe.points,pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Fn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Fn([pe.common,pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Fn([pe.sprite,pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Fn([pe.common,pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Fn([pe.lights,pe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};hr.physical={uniforms:Fn([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Tc={r:0,b:0,g:0};function RP(n,e,t,i,r,s,o){const a=new dt(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function x(m,f){let g=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),g=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gd)?(c===void 0&&(c=new gr(new zu(1,1,1),new Ro({name:"BackgroundCubeMaterial",uniforms:Ka(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=xt.getTransfer(v.colorSpace)!==Rt,(d!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new gr(new O_(2,2),new Ro({name:"BackgroundMaterial",uniforms:Ka(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=xt.getTransfer(v.colorSpace)!==Rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,f){m.getRGB(Tc,VM(n)),i.buffers.color.setClear(Tc.r,Tc.g,Tc.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:x}}function bP(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(L,F,H,j,N){let k=!1;if(o){const R=_(j,H,F);u!==R&&(u=R,p(u.object)),k=f(L,j,H,N),k&&g(L,j,H,N)}else{const R=F.wireframe===!0;(u.geometry!==j.id||u.program!==H.id||u.wireframe!==R)&&(u.geometry=j.id,u.program=H.id,u.wireframe=R,k=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(k||c)&&(c=!1,P(L,F,H,j),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,F,H){const j=H.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let k=N[F.id];k===void 0&&(k={},N[F.id]=k);let R=k[j];return R===void 0&&(R=m(h()),k[j]=R),R}function m(L){const F=[],H=[],j=[];for(let N=0;N<r;N++)F[N]=0,H[N]=0,j[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:j,object:L,attributes:{},index:null}}function f(L,F,H,j){const N=u.attributes,k=F.attributes;let R=0;const $=H.getAttributes();for(const Q in $)if($[Q].location>=0){const K=N[Q];let se=k[Q];if(se===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;R++}return u.attributesNum!==R||u.index!==j}function g(L,F,H,j){const N={},k=F.attributes;let R=0;const $=H.getAttributes();for(const Q in $)if($[Q].location>=0){let K=k[Q];K===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),N[Q]=se,R++}u.attributes=N,u.attributesNum=R,u.index=j}function v(){const L=u.newAttributes;for(let F=0,H=L.length;F<H;F++)L[F]=0}function y(L){w(L,0)}function w(L,F){const H=u.newAttributes,j=u.enabledAttributes,N=u.attributeDivisors;H[L]=1,j[L]===0&&(n.enableVertexAttribArray(L),j[L]=1),N[L]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),N[L]=F)}function T(){const L=u.newAttributes,F=u.enabledAttributes;for(let H=0,j=F.length;H<j;H++)F[H]!==L[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function M(L,F,H,j,N,k,R){R===!0?n.vertexAttribIPointer(L,F,H,N,k):n.vertexAttribPointer(L,F,H,j,N,k)}function P(L,F,H,j){if(i.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=j.attributes,k=H.getAttributes(),R=F.defaultAttributeValues;for(const $ in k){const Q=k[$];if(Q.location>=0){let q=N[$];if(q===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const K=q.normalized,se=q.itemSize,me=t.get(q);if(me===void 0)continue;const de=me.buffer,De=me.type,Ne=me.bytesPerElement,Oe=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||q.gpuType===wM);if(q.isInterleavedBufferAttribute){const We=q.data,G=We.stride,Xe=q.offset;if(We.isInstancedInterleavedBuffer){for(let ve=0;ve<Q.locationSize;ve++)w(Q.location+ve,We.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ve=0;ve<Q.locationSize;ve++)y(Q.location+ve);n.bindBuffer(n.ARRAY_BUFFER,de);for(let ve=0;ve<Q.locationSize;ve++)M(Q.location+ve,se/Q.locationSize,De,K,G*Ne,(Xe+se/Q.locationSize*ve)*Ne,Oe)}else{if(q.isInstancedBufferAttribute){for(let We=0;We<Q.locationSize;We++)w(Q.location+We,q.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let We=0;We<Q.locationSize;We++)y(Q.location+We);n.bindBuffer(n.ARRAY_BUFFER,de);for(let We=0;We<Q.locationSize;We++)M(Q.location+We,se/Q.locationSize,De,K,se*Ne,se/Q.locationSize*We*Ne,Oe)}}else if(R!==void 0){const K=R[$];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(Q.location,K);break;case 3:n.vertexAttrib3fv(Q.location,K);break;case 4:n.vertexAttrib4fv(Q.location,K);break;default:n.vertexAttrib1fv(Q.location,K)}}}}T()}function S(){U();for(const L in a){const F=a[L];for(const H in F){const j=F[H];for(const N in j)x(j[N].object),delete j[N];delete F[H]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const H in F){const j=F[H];for(const N in j)x(j[N].object),delete j[N];delete F[H]}delete a[L.id]}function I(L){for(const F in a){const H=a[F];if(H[L.id]===void 0)continue;const j=H[L.id];for(const N in j)x(j[N].object),delete j[N];delete H[L.id]}}function U(){Z(),c=!0,u!==l&&(u=l,p(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function PP(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,h){if(h===0)return;let p,x;if(r)p=n,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,c,d,h),t.update(d,s,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(c[x],d[x]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,h);let x=0;for(let _=0;_<h;_++)x+=d[_];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function LP(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),w=v&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function DP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qs,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,v=g*4;let y=f.clippingState||null;l.value=y,y=c(x,h,v,p);for(let w=0;w!==v;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,x){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const f=p+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function NP(n){let e=new WeakMap;function t(o,a){return a===tm?o.mapping=Ya:a===nm&&(o.mapping=qa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===tm||a===nm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new XC(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class YM extends WM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ga=4,Mv=[.125,.215,.35,.446,.526,.582],io=20,Dh=new YM,Ev=new dt;let Nh=null,Uh=0,Ih=0;const Js=(1+Math.sqrt(5))/2,Qo=1/Js,Tv=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Js,Qo),new X(0,Js,-Qo),new X(Qo,0,Js),new X(-Qo,0,Js),new X(Js,Qo,0),new X(-Js,Qo,0)];class wv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Nh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Uh,Ih),e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ya||e.mapping===qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Au,format:ir,colorSpace:Yr,depthBuffer:!1},r=Av(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Av(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UP(s)),this._blurMaterial=IP(s,e,t)}return r}_compileMaterial(e){const t=new gr(this._lodPlanes[0],e);this._renderer.compile(t,Dh)}_sceneToCubeUV(e,t,i,r){const a=new Oi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Ev),c.toneMapping=Cs,c.autoClear=!1;const p=new jf({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),x=new gr(new zu,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ev),_=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;wc(r,g*v,f>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ya||e.mapping===qa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Dh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tv[(r-1)%Tv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new gr(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*io-1),_=s/x,m=isFinite(s)?1+Math.floor(c*_):io;m>io&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${io}`);const f=[];let g=0;for(let M=0;M<io;++M){const P=M/_,S=Math.exp(-P*P/2);f.push(S),M===0?g+=S:M<m&&(g+=2*S)}for(let M=0;M<f.length;M++)f[M]=f[M]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],w=3*y*(r>v-ga?r-v+ga:0),T=4*(this._cubeSize-y);wc(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(d,Dh)}}function UP(n){const e=[],t=[],i=[];let r=n;const s=n-ga+1+Mv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ga?l=Mv[o-n+ga-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,x=6,_=3,m=2,f=1,g=new Float32Array(_*x*p),v=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let T=0;T<p;T++){const M=T%3*2/3-1,P=T>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];g.set(S,_*x*T),v.set(h,m*x*T);const E=[T,T,T,T,T,T];y.set(E,f*x*T)}const w=new lr;w.setAttribute("position",new or(g,_)),w.setAttribute("uv",new or(v,m)),w.setAttribute("faceIndex",new or(y,f)),e.push(w),r>ga&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Av(n,e,t){const i=new Co(n,e,t);return i.texture.mapping=gd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function IP(n,e,t){const i=new Float32Array(io),r=new X(0,1,0);return new Ro({name:"SphericalGaussianBlur",defines:{n:io,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:F_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function Cv(){return new Ro({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:F_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function Rv(){return new Ro({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:F_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function F_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===tm||l===nm,c=l===Ya||l===qa;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new wv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new wv(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function FP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kP(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const _=p[x];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,x=d.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let v=0,y=g.length;v<y;v+=3){const w=g[v+0],T=g[v+1],M=g[v+2];h.push(w,T,T,M,M,w)}}else if(x!==void 0){const g=x.array;_=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const w=v+0,T=v+1,M=v+2;h.push(w,T,T,M,M,w)}}else return;const m=new(UM(h)?GM:HM)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function zP(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,x){n.drawElements(s,x,a,p*l),t.update(x,s,1)}function d(p,x,_){if(_===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,x,a,p*l,_),t.update(x,s,_)}function h(p,x,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,_);let f=0;for(let g=0;g<_;g++)f+=x[g];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function BP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function HP(n,e){return n[0]-e[0]}function GP(n,e){return Math.abs(e[1])-Math.abs(n[1])}function VP(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new cn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=x!==void 0?x.length:0;let m=s.get(c);if(m===void 0||m.count!==_){let F=function(){Z.dispose(),s.delete(c),c.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),w===!0&&(S=3);let E=c.attributes.position.count*S,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*I*4*_),Z=new FM(U,E,I,_);Z.type=ds,Z.needsUpdate=!0;const L=S*4;for(let H=0;H<_;H++){const j=T[H],N=M[H],k=P[H],R=E*I*4*H;for(let $=0;$<j.count;$++){const Q=$*L;v===!0&&(o.fromBufferAttribute(j,$),U[R+Q+0]=o.x,U[R+Q+1]=o.y,U[R+Q+2]=o.z,U[R+Q+3]=0),y===!0&&(o.fromBufferAttribute(N,$),U[R+Q+4]=o.x,U[R+Q+5]=o.y,U[R+Q+6]=o.z,U[R+Q+7]=0),w===!0&&(o.fromBufferAttribute(k,$),U[R+Q+8]=o.x,U[R+Q+9]=o.y,U[R+Q+10]=o.z,U[R+Q+11]=k.itemSize===4?o.w:1)}}m={count:_,texture:Z,size:new ct(E,I)},s.set(c,m),c.addEventListener("dispose",F)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const g=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let _=i[c.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<x;y++){const w=_[y];w[0]=y,w[1]=h[y]}_.sort(GP);for(let y=0;y<8;y++)y<x&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(HP);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],M=w[1];T!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[T]&&c.setAttribute("morphTarget"+y,m[T]),f&&c.getAttribute("morphNormal"+y)!==f[T]&&c.setAttribute("morphNormal"+y,f[T]),r[y]=M,g+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function WP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class qM extends Ei{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:go,c!==go&&c!==$a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===go&&(i=fs),i===void 0&&c===$a&&(i=_o),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $M=new Ei,KM=new qM(1,1);KM.compareFunction=NM;const ZM=new FM,QM=new RC,JM=new XM,bv=[],Pv=[],Lv=new Float32Array(16),Dv=new Float32Array(9),Nv=new Float32Array(4);function nl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bv[r];if(s===void 0&&(s=new Float32Array(r),bv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sd(n,e){let t=Pv[e];t===void 0&&(t=new Int32Array(e),Pv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function XP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function YP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function qP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function $P(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Nv.set(i),n.uniformMatrix2fv(this.addr,!1,Nv),sn(t,i)}}function KP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Dv.set(i),n.uniformMatrix3fv(this.addr,!1,Dv),sn(t,i)}}function ZP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Lv.set(i),n.uniformMatrix4fv(this.addr,!1,Lv),sn(t,i)}}function QP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function JP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function e2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function t2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function n2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function i2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function r2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function s2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function o2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?KM:$M;t.setTexture2D(e||s,r)}function a2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||QM,r)}function l2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||JM,r)}function u2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ZM,r)}function c2(n){switch(n){case 5126:return XP;case 35664:return jP;case 35665:return YP;case 35666:return qP;case 35674:return $P;case 35675:return KP;case 35676:return ZP;case 5124:case 35670:return QP;case 35667:case 35671:return JP;case 35668:case 35672:return e2;case 35669:case 35673:return t2;case 5125:return n2;case 36294:return i2;case 36295:return r2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return o2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return l2;case 36289:case 36303:case 36311:case 36292:return u2}}function f2(n,e){n.uniform1fv(this.addr,e)}function d2(n,e){const t=nl(e,this.size,2);n.uniform2fv(this.addr,t)}function h2(n,e){const t=nl(e,this.size,3);n.uniform3fv(this.addr,t)}function p2(n,e){const t=nl(e,this.size,4);n.uniform4fv(this.addr,t)}function m2(n,e){const t=nl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _2(n,e){const t=nl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function g2(n,e){const t=nl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function v2(n,e){n.uniform1iv(this.addr,e)}function x2(n,e){n.uniform2iv(this.addr,e)}function y2(n,e){n.uniform3iv(this.addr,e)}function S2(n,e){n.uniform4iv(this.addr,e)}function M2(n,e){n.uniform1uiv(this.addr,e)}function E2(n,e){n.uniform2uiv(this.addr,e)}function T2(n,e){n.uniform3uiv(this.addr,e)}function w2(n,e){n.uniform4uiv(this.addr,e)}function A2(n,e,t){const i=this.cache,r=e.length,s=Sd(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$M,s[o])}function C2(n,e,t){const i=this.cache,r=e.length,s=Sd(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||QM,s[o])}function R2(n,e,t){const i=this.cache,r=e.length,s=Sd(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||JM,s[o])}function b2(n,e,t){const i=this.cache,r=e.length,s=Sd(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ZM,s[o])}function P2(n){switch(n){case 5126:return f2;case 35664:return d2;case 35665:return h2;case 35666:return p2;case 35674:return m2;case 35675:return _2;case 35676:return g2;case 5124:case 35670:return v2;case 35667:case 35671:return x2;case 35668:case 35672:return y2;case 35669:case 35673:return S2;case 5125:return M2;case 36294:return E2;case 36295:return T2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return A2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return b2}}class L2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=c2(t.type)}}class D2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P2(t.type)}}class N2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function Uv(n,e){n.seq.push(e),n.map[e.id]=e}function U2(n,e,t){const i=n.name,r=i.length;for(Oh.lastIndex=0;;){const s=Oh.exec(i),o=Oh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Uv(t,u===void 0?new L2(a,n,e):new D2(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new N2(a),Uv(t,d)),t=d}}}class tf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);U2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Iv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const I2=37297;let O2=0;function F2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function k2(n){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n);let i;switch(e===t?i="":e===Vf&&t===Gf?i="LinearDisplayP3ToLinearSRGB":e===Gf&&t===Vf&&(i="LinearSRGBToLinearDisplayP3"),n){case Yr:case vd:return[i,"LinearTransferOETF"];case pn:case U_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ov(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+F2(n.getShaderSource(e),o)}else return r}function z2(n,e){const t=k2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function B2(n,e){let t;switch(e){case KA:t="Linear";break;case ZA:t="Reinhard";break;case QA:t="OptimizedCineon";break;case JA:t="ACESFilmic";break;case tC:t="AgX";break;case eC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function H2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(va).join(`
`)}function G2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(va).join(`
`)}function V2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function W2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function va(n){return n!==""}function Fv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function lm(n){return n.replace(X2,Y2)}const j2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Y2(n,e){let t=Ze[e];if(t===void 0){const i=j2.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lm(t)}const q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zv(n){return n.replace(q2,$2)}function $2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bv(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===MM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===TA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rr&&(e="SHADOWMAP_TYPE_VSM"),e}function Z2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ya:case qa:e="ENVMAP_TYPE_CUBE";break;case gd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qa:e="ENVMAP_MODE_REFRACTION";break}return e}function J2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case EM:e="ENVMAP_BLENDING_MULTIPLY";break;case qA:e="ENVMAP_BLENDING_MIX";break;case $A:e="ENVMAP_BLENDING_ADD";break}return e}function eL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=K2(t),u=Z2(t),c=Q2(t),d=J2(t),h=eL(t),p=t.isWebGL2?"":H2(t),x=G2(t),_=V2(s),m=r.createProgram();let f,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(va).join(`
`),f.length>0&&(f+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(va).join(`
`),g.length>0&&(g+=`
`)):(f=[Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),g=[p,Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Cs?B2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,z2("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),o=lm(o),o=Fv(o,t),o=kv(o,t),a=lm(a),a=Fv(a,t),a=kv(a,t),o=zv(o),a=zv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+f+o,w=v+g+a,T=Iv(r,r.VERTEX_SHADER,y),M=Iv(r,r.FRAGMENT_SHADER,w);r.attachShader(m,T),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(U){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(T).trim(),F=r.getShaderInfoLog(M).trim();let H=!0,j=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,M);else{const N=Ov(r,T,"vertex"),k=Ov(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+N+`
`+k)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||F==="")&&(j=!1);j&&(U.diagnostics={runnable:H,programLog:Z,vertexShader:{log:L,prefix:f},fragmentShader:{log:F,prefix:g}})}r.deleteShader(T),r.deleteShader(M),S=new tf(r,m),E=W2(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(m,I2)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=M,this}let nL=0;class iL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rL(e),t.set(e,i)),i}}class rL{constructor(e){this.id=nL++,this.code=e,this.usedTimes=0}}function sL(n,e,t,i,r,s,o){const a=new zM,l=new iL,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,E,I,U,Z){const L=U.fog,F=Z.geometry,H=S.isMeshStandardMaterial?U.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),N=j&&j.mapping===gd?j.image.height:null,k=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const R=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$=R!==void 0?R.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let q,K,se,me;if(k){const Me=hr[k];q=Me.vertexShader,K=Me.fragmentShader}else q=S.vertexShader,K=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const de=n.getRenderTarget(),De=Z.isInstancedMesh===!0,Ne=Z.isBatchedMesh===!0,Oe=!!S.map,We=!!S.matcap,G=!!j,Xe=!!S.aoMap,ve=!!S.lightMap,Ue=!!S.bumpMap,xe=!!S.normalMap,V=!!S.displacementMap,Be=!!S.emissiveMap,b=!!S.metalnessMap,A=!!S.roughnessMap,z=S.anisotropy>0,ne=S.clearcoat>0,te=S.iridescence>0,ie=S.sheen>0,ge=S.transmission>0,he=z&&!!S.anisotropyMap,fe=ne&&!!S.clearcoatMap,Re=ne&&!!S.clearcoatNormalMap,Ve=ne&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,lt=te&&!!S.iridescenceThicknessMap,Pe=ie&&!!S.sheenColorMap,je=ie&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,ye=!!S.specularColorMap,Ye=!!S.specularIntensityMap,Je=ge&&!!S.transmissionMap,ht=ge&&!!S.thicknessMap,_e=!!S.gradientMap,ae=!!S.alphaMap,D=S.alphaTest>0,le=!!S.alphaHash,ue=!!S.extensions,ke=!!F.attributes.uv1,Ie=!!F.attributes.uv2,ot=!!F.attributes.uv3;let ft=Cs;return S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ft=n.toneMapping),{isWebGL2:c,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:K,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ne,instancing:De,instancingColor:De&&Z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Yr,map:Oe,matcap:We,envMap:G,envMapMode:G&&j.mapping,envMapCubeUVHeight:N,aoMap:Xe,lightMap:ve,bumpMap:Ue,normalMap:xe,displacementMap:h&&V,emissiveMap:Be,normalMapObjectSpace:xe&&S.normalMapType===pC,normalMapTangentSpace:xe&&S.normalMapType===hC,metalnessMap:b,roughnessMap:A,anisotropy:z,anisotropyMap:he,clearcoat:ne,clearcoatMap:fe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ve,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:lt,sheen:ie,sheenColorMap:Pe,sheenRoughnessMap:je,specularMap:Ae,specularColorMap:ye,specularIntensityMap:Ye,transmission:ge,transmissionMap:Je,thicknessMap:ht,gradientMap:_e,opaque:S.transparent===!1&&S.blending===ba,alphaMap:ae,alphaTest:D,alphaHash:le,combine:S.combine,mapUv:Oe&&_(S.map.channel),aoMapUv:Xe&&_(S.aoMap.channel),lightMapUv:ve&&_(S.lightMap.channel),bumpMapUv:Ue&&_(S.bumpMap.channel),normalMapUv:xe&&_(S.normalMap.channel),displacementMapUv:V&&_(S.displacementMap.channel),emissiveMapUv:Be&&_(S.emissiveMap.channel),metalnessMapUv:b&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:he&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&_(S.sheenRoughnessMap.channel),specularMapUv:Ae&&_(S.specularMap.channel),specularColorMapUv:ye&&_(S.specularColorMap.channel),specularIntensityMapUv:Ye&&_(S.specularIntensityMap.channel),transmissionMapUv:Je&&_(S.transmissionMap.channel),thicknessMapUv:ht&&_(S.thicknessMap.channel),alphaMapUv:ae&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Ie,vertexUv3s:ot,pointsUvs:Z.isPoints===!0&&!!F.attributes.uv&&(Oe||ae),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nr,flipSided:S.side===oi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(g(E,S),v(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function g(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=x[S.type];let I;if(E){const U=hr[E];I=HC.clone(U.uniforms)}else I=S.uniforms;return I}function w(S,E){let I;for(let U=0,Z=u.length;U<Z;U++){const L=u[U];if(L.cacheKey===E){I=L,++I.usedTimes;break}}return I===void 0&&(I=new tL(n,E,S,s),u.push(I)),I}function T(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:P}}function oL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function aL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,x,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,x,_,m){const f=o(d,h,p,x,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,x,_,m){const f=o(d,h,p,x,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||aL),i.length>1&&i.sort(h||Hv),r.length>1&&r.sort(h||Hv)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function lL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Gv,n.set(i,[o])):r>=s.length?(o=new Gv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function uL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new dt};break;case"SpotLight":t={position:new X,direction:new X,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function cL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fL=0;function dL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hL(n,e){const t=new uL,i=cL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const s=new X,o=new Kt,a=new Kt;function l(c,d){let h=0,p=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,m=0,f=0,g=0,v=0,y=0,w=0,T=0,M=0,P=0,S=0;c.sort(dL);const E=d===!0?Math.PI:1;for(let U=0,Z=c.length;U<Z;U++){const L=c[U],F=L.color,H=L.intensity,j=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*H*E,p+=F.g*H*E,x+=F.b*H*E;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],H);S++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.directionalShadow[_]=$,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=k,_++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(F).multiplyScalar(H*E),k.distance=j,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[f]=k;const R=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,R.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=R.matrix,L.castShadow){const $=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=N,T++}f++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(F).multiplyScalar(H),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=k,g++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*E),k.distance=L.distance,k.decay=L.decay,L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,$.shadowCameraNear=R.camera.near,$.shadowCameraFar=R.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=L.shadow.matrix,w++}r.point[m]=k,m++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(H*E),k.groundColor.copy(L.groundColor).multiplyScalar(H*E),r.hemi[v]=k,v++}}g>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==_||I.pointLength!==m||I.spotLength!==f||I.rectAreaLength!==g||I.hemiLength!==v||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==T||I.numSpotMaps!==M||I.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=g,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,I.directionalLength=_,I.pointLength=m,I.spotLength=f,I.rectAreaLength=g,I.hemiLength=v,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=T,I.numSpotMaps=M,I.numLightProbes=S,r.version=fL++)}function u(c,d){let h=0,p=0,x=0,_=0,m=0;const f=d.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const y=c[g];if(y.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),h++}else if(y.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function Vv(n,e){const t=new hL(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function pL(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Vv(n,e),t.set(s,[l])):o>=a.length?(l=new Vv(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class mL extends ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _L extends ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xL(n,e,t){let i=new I_;const r=new ct,s=new ct,o=new cn,a=new mL({depthPacking:dC}),l=new _L,u={},c=t.maxTextureSize,d={[Is]:oi,[oi]:Is,[Nr]:Nr},h=new Ro({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:gL,fragmentShader:vL}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new lr;x.setAttribute("position",new or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gr(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=MM;let f=this.type;this.render=function(T,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(As),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Z=f!==Rr&&this.type===Rr,L=f===Rr&&this.type!==Rr;for(let F=0,H=T.length;F<H;F++){const j=T[F],N=j.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const k=N.getFrameExtents();if(r.multiply(k),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/k.x),r.x=s.x*k.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/k.y),r.y=s.y*k.y,N.mapSize.y=s.y)),N.map===null||Z===!0||L===!0){const $=this.type!==Rr?{minFilter:Gn,magFilter:Gn}:{};N.map!==null&&N.map.dispose(),N.map=new Co(r.x,r.y,$),N.map.texture.name=j.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const R=N.getViewportCount();for(let $=0;$<R;$++){const Q=N.getViewport($);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),U.viewport(o),N.updateMatrices(j,$),i=N.getFrustum(),y(M,P,N.camera,j,this.type)}N.isPointLightShadow!==!0&&this.type===Rr&&g(N,P),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,I)};function g(T,M){const P=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Co(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(M,null,P,h,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(M,null,P,p,_,null)}function v(T,M,P,S){let E=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)E=I;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=E.uuid,Z=M.uuid;let L=u[U];L===void 0&&(L={},u[U]=L);let F=L[Z];F===void 0&&(F=E.clone(),L[Z]=F,M.addEventListener("dispose",w)),E=F}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Rr?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:d[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=n.properties.get(E);U.light=P}return E}function y(T,M,P,S,E){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Rr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const Z=e.update(T),L=T.material;if(Array.isArray(L)){const F=Z.groups;for(let H=0,j=F.length;H<j;H++){const N=F[H],k=L[N.materialIndex];if(k&&k.visible){const R=v(T,k,S,E);T.onBeforeShadow(n,T,M,P,Z,R,N),n.renderBufferDirect(P,null,Z,R,T,N),T.onAfterShadow(n,T,M,P,Z,R,N)}}}else if(L.visible){const F=v(T,L,S,E);T.onBeforeShadow(n,T,M,P,Z,F,null),n.renderBufferDirect(P,null,Z,F,T,null),T.onAfterShadow(n,T,M,P,Z,F,null)}}const U=T.children;for(let Z=0,L=U.length;Z<L;Z++)y(U[Z],M,P,S,E)}function w(T){T.target.removeEventListener("dispose",w);for(const P in u){const S=u[P],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function yL(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const le=new cn;let ue=null;const ke=new cn(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!D&&(n.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){D=Ie},setClear:function(Ie,ot,ft,Ce,Me){Me===!0&&(Ie*=Ce,ot*=Ce,ft*=Ce),le.set(Ie,ot,ft,Ce),ke.equals(le)===!1&&(n.clearColor(Ie,ot,ft,Ce),ke.copy(le))},reset:function(){D=!1,ue=null,ke.set(-1,0,0,0)}}}function s(){let D=!1,le=null,ue=null,ke=null;return{setTest:function(Ie){Ie?Ne(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Ie){le!==Ie&&!D&&(n.depthMask(Ie),le=Ie)},setFunc:function(Ie){if(ue!==Ie){switch(Ie){case HA:n.depthFunc(n.NEVER);break;case GA:n.depthFunc(n.ALWAYS);break;case VA:n.depthFunc(n.LESS);break;case Bf:n.depthFunc(n.LEQUAL);break;case WA:n.depthFunc(n.EQUAL);break;case XA:n.depthFunc(n.GEQUAL);break;case jA:n.depthFunc(n.GREATER);break;case YA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ie}},setLocked:function(Ie){D=Ie},setClear:function(Ie){ke!==Ie&&(n.clearDepth(Ie),ke=Ie)},reset:function(){D=!1,le=null,ue=null,ke=null}}}function o(){let D=!1,le=null,ue=null,ke=null,Ie=null,ot=null,ft=null,Ce=null,Me=null;return{setTest:function(Le){D||(Le?Ne(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Le){le!==Le&&!D&&(n.stencilMask(Le),le=Le)},setFunc:function(Le,oe,ze){(ue!==Le||ke!==oe||Ie!==ze)&&(n.stencilFunc(Le,oe,ze),ue=Le,ke=oe,Ie=ze)},setOp:function(Le,oe,ze){(ot!==Le||ft!==oe||Ce!==ze)&&(n.stencilOp(Le,oe,ze),ot=Le,ft=oe,Ce=ze)},setLocked:function(Le){D=Le},setClear:function(Le){Me!==Le&&(n.clearStencil(Le),Me=Le)},reset:function(){D=!1,le=null,ue=null,ke=null,Ie=null,ot=null,ft=null,Ce=null,Me=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,_=[],m=null,f=!1,g=null,v=null,y=null,w=null,T=null,M=null,P=null,S=new dt(0,0,0),E=0,I=!1,U=null,Z=null,L=null,F=null,H=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(R)[1]),N=k>=1):R.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),N=k>=2);let $=null,Q={};const q=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),se=new cn().fromArray(q),me=new cn().fromArray(K);function de(D,le,ue,ke){const Ie=new Uint8Array(4),ot=n.createTexture();n.bindTexture(D,ot),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<ue;ft++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(le+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return ot}const De={};De[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(Bf),Be(!1),b(T0),Ne(n.CULL_FACE),xe(As);function Ne(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Oe(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function We(D,le){return p[D]!==le?(n.bindFramebuffer(D,le),p[D]=le,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function G(D,le){let ue=_,ke=!1;if(D)if(ue=x.get(le),ue===void 0&&(ue=[],x.set(le,ue)),D.isWebGLMultipleRenderTargets){const Ie=D.texture;if(ue.length!==Ie.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,ft=Ie.length;ot<ft;ot++)ue[ot]=n.COLOR_ATTACHMENT0+ot;ue.length=Ie.length,ke=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,ke=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,ke=!0);ke&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Xe(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const ve={[no]:n.FUNC_ADD,[AA]:n.FUNC_SUBTRACT,[CA]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[R0]=n.MIN,ve[b0]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ve[R0]=D.MIN_EXT,ve[b0]=D.MAX_EXT)}const Ue={[RA]:n.ZERO,[bA]:n.ONE,[PA]:n.SRC_COLOR,[Jp]:n.SRC_ALPHA,[OA]:n.SRC_ALPHA_SATURATE,[UA]:n.DST_COLOR,[DA]:n.DST_ALPHA,[LA]:n.ONE_MINUS_SRC_COLOR,[em]:n.ONE_MINUS_SRC_ALPHA,[IA]:n.ONE_MINUS_DST_COLOR,[NA]:n.ONE_MINUS_DST_ALPHA,[FA]:n.CONSTANT_COLOR,[kA]:n.ONE_MINUS_CONSTANT_COLOR,[zA]:n.CONSTANT_ALPHA,[BA]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(D,le,ue,ke,Ie,ot,ft,Ce,Me,Le){if(D===As){f===!0&&(Oe(n.BLEND),f=!1);return}if(f===!1&&(Ne(n.BLEND),f=!0),D!==wA){if(D!==g||Le!==I){if((v!==no||T!==no)&&(n.blendEquation(n.FUNC_ADD),v=no,T=no),Le)switch(D){case ba:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case w0:n.blendFunc(n.ONE,n.ONE);break;case A0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case C0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case w0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case A0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case C0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,w=null,M=null,P=null,S.set(0,0,0),E=0,g=D,I=Le}return}Ie=Ie||le,ot=ot||ue,ft=ft||ke,(le!==v||Ie!==T)&&(n.blendEquationSeparate(ve[le],ve[Ie]),v=le,T=Ie),(ue!==y||ke!==w||ot!==M||ft!==P)&&(n.blendFuncSeparate(Ue[ue],Ue[ke],Ue[ot],Ue[ft]),y=ue,w=ke,M=ot,P=ft),(Ce.equals(S)===!1||Me!==E)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Me),S.copy(Ce),E=Me),g=D,I=!1}function V(D,le){D.side===Nr?Oe(n.CULL_FACE):Ne(n.CULL_FACE);let ue=D.side===oi;le&&(ue=!ue),Be(ue),D.blending===ba&&D.transparent===!1?xe(As):xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ke=D.stencilWrite;u.setTest(ke),ke&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){U!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),U=D)}function b(D){D!==MA?(Ne(n.CULL_FACE),D!==Z&&(D===T0?n.cullFace(n.BACK):D===EA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),Z=D}function A(D){D!==L&&(N&&n.lineWidth(D),L=D)}function z(D,le,ue){D?(Ne(n.POLYGON_OFFSET_FILL),(F!==le||H!==ue)&&(n.polygonOffset(le,ue),F=le,H=ue)):Oe(n.POLYGON_OFFSET_FILL)}function ne(D){D?Ne(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function te(D){D===void 0&&(D=n.TEXTURE0+j-1),$!==D&&(n.activeTexture(D),$=D)}function ie(D,le,ue){ue===void 0&&($===null?ue=n.TEXTURE0+j-1:ue=$);let ke=Q[ue];ke===void 0&&(ke={type:void 0,texture:void 0},Q[ue]=ke),(ke.type!==D||ke.texture!==le)&&($!==ue&&(n.activeTexture(ue),$=ue),n.bindTexture(D,le||De[D]),ke.type=D,ke.texture=le)}function ge(){const D=Q[$];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(D){se.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function Je(D){me.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),me.copy(D))}function ht(D,le){let ue=d.get(le);ue===void 0&&(ue=new WeakMap,d.set(le,ue));let ke=ue.get(D);ke===void 0&&(ke=n.getUniformBlockIndex(le,D.name),ue.set(D,ke))}function _e(D,le){const ke=d.get(le).get(D);c.get(le)!==ke&&(n.uniformBlockBinding(le,ke,D.__bindingPointIndex),c.set(le,ke))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,Q={},p={},x=new WeakMap,_=[],m=null,f=!1,g=null,v=null,y=null,w=null,T=null,M=null,P=null,S=new dt(0,0,0),E=0,I=!1,U=null,Z=null,L=null,F=null,H=null,se.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ne,disable:Oe,bindFramebuffer:We,drawBuffers:G,useProgram:Xe,setBlending:xe,setMaterial:V,setFlipSided:Be,setCullFace:b,setLineWidth:A,setPolygonOffset:z,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:ge,compressedTexImage2D:he,compressedTexImage3D:fe,texImage2D:Ae,texImage3D:ye,updateUBOMapping:ht,uniformBlockBinding:_e,texStorage2D:Pe,texStorage3D:je,texSubImage2D:Re,texSubImage3D:Ve,compressedTexSubImage2D:ee,compressedTexSubImage3D:lt,scissor:Ye,viewport:Je,reset:ae}}function SL(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,A){return p?new OffscreenCanvas(b,A):Xf("canvas")}function _(b,A,z,ne){let te=1;if((b.width>ne||b.height>ne)&&(te=ne/Math.max(b.width,b.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=A?am:Math.floor,ge=ie(te*b.width),he=ie(te*b.height);d===void 0&&(d=x(ge,he));const fe=z?x(ge,he):d;return fe.width=ge,fe.height=he,fe.getContext("2d").drawImage(b,0,0,ge,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+he+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return sv(b.width)&&sv(b.height)}function f(b){return a?!1:b.wrapS!==nr||b.wrapT!==nr||b.minFilter!==Gn&&b.minFilter!==Ii}function g(b,A){return b.generateMipmaps&&A&&b.minFilter!==Gn&&b.minFilter!==Ii}function v(b){n.generateMipmap(b)}function y(b,A,z,ne,te=!1){if(a===!1)return A;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=A;if(A===n.RED&&(z===n.FLOAT&&(ie=n.R32F),z===n.HALF_FLOAT&&(ie=n.R16F),z===n.UNSIGNED_BYTE&&(ie=n.R8)),A===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ie=n.R8UI),z===n.UNSIGNED_SHORT&&(ie=n.R16UI),z===n.UNSIGNED_INT&&(ie=n.R32UI),z===n.BYTE&&(ie=n.R8I),z===n.SHORT&&(ie=n.R16I),z===n.INT&&(ie=n.R32I)),A===n.RG&&(z===n.FLOAT&&(ie=n.RG32F),z===n.HALF_FLOAT&&(ie=n.RG16F),z===n.UNSIGNED_BYTE&&(ie=n.RG8)),A===n.RGBA){const ge=te?Hf:xt.getTransfer(ne);z===n.FLOAT&&(ie=n.RGBA32F),z===n.HALF_FLOAT&&(ie=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ie=ge===Rt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(b,A,z){return g(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==Gn&&b.minFilter!==Ii?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function T(b){return b===Gn||b===P0||b===ah?n.NEAREST:n.LINEAR}function M(b){const A=b.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function P(b){const A=b.target;A.removeEventListener("dispose",P),I(A)}function S(b){const A=i.get(b);if(A.__webglInit===void 0)return;const z=b.source,ne=h.get(z);if(ne){const te=ne[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(ne).length===0&&h.delete(z)}i.remove(b)}function E(b){const A=i.get(b);n.deleteTexture(A.__webglTexture);const z=b.source,ne=h.get(z);delete ne[A.__cacheKey],o.memory.textures--}function I(b){const A=b.texture,z=i.get(b),ne=i.get(A);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let ie=0;ie<z.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(z.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)n.deleteFramebuffer(z.__webglFramebuffer[te]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,ie=A.length;te<ie;te++){const ge=i.get(A[te]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(b)}let U=0;function Z(){U=0}function L(){const b=U;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),U+=1,b}function F(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function H(b,A){const z=i.get(b);if(b.isVideoTexture&&V(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,b,A);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+A)}function j(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){se(z,b,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+A)}function N(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){se(z,b,A);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+A)}function k(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){me(z,b,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+A)}const R={[im]:n.REPEAT,[nr]:n.CLAMP_TO_EDGE,[rm]:n.MIRRORED_REPEAT},$={[Gn]:n.NEAREST,[P0]:n.NEAREST_MIPMAP_NEAREST,[ah]:n.NEAREST_MIPMAP_LINEAR,[Ii]:n.LINEAR,[nC]:n.LINEAR_MIPMAP_NEAREST,[wu]:n.LINEAR_MIPMAP_LINEAR},Q={[mC]:n.NEVER,[SC]:n.ALWAYS,[_C]:n.LESS,[NM]:n.LEQUAL,[gC]:n.EQUAL,[yC]:n.GEQUAL,[vC]:n.GREATER,[xC]:n.NOTEQUAL};function q(b,A,z){if(z?(n.texParameteri(b,n.TEXTURE_WRAP_S,R[A.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,R[A.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,R[A.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,$[A.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,$[A.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==nr||A.wrapT!==nr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Gn&&A.minFilter!==Ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Gn||A.minFilter!==ah&&A.minFilter!==wu||A.type===ds&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Au&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function K(b,A){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",M));const ne=A.source;let te=h.get(ne);te===void 0&&(te={},h.set(ne,te));const ie=F(A);if(ie!==b.__cacheKey){te[ie]===void 0&&(te[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[ie].usedTimes++;const ge=te[b.__cacheKey];ge!==void 0&&(te[b.__cacheKey].usedTimes--,ge.usedTimes===0&&E(A)),b.__cacheKey=ie,b.__webglTexture=te[ie].texture}return z}function se(b,A,z){let ne=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=n.TEXTURE_3D);const te=K(b,A),ie=A.source;t.bindTexture(ne,b.__webglTexture,n.TEXTURE0+z);const ge=i.get(ie);if(ie.version!==ge.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const he=xt.getPrimaries(xt.workingColorSpace),fe=A.colorSpace===zi?null:xt.getPrimaries(A.colorSpace),Re=A.colorSpace===zi||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ve=f(A)&&m(A.image)===!1;let ee=_(A.image,Ve,!1,r.maxTextureSize);ee=Be(A,ee);const lt=m(ee)||a,Pe=s.convert(A.format,A.colorSpace);let je=s.convert(A.type),Ae=y(A.internalFormat,Pe,je,A.colorSpace,A.isVideoTexture);q(ne,A,lt);let ye;const Ye=A.mipmaps,Je=a&&A.isVideoTexture!==!0&&Ae!==LM,ht=ge.__version===void 0||te===!0,_e=w(A,ee,lt);if(A.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?A.type===ds?Ae=n.DEPTH_COMPONENT32F:A.type===fs?Ae=n.DEPTH_COMPONENT24:A.type===_o?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:A.type===ds&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===go&&Ae===n.DEPTH_COMPONENT&&A.type!==N_&&A.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=fs,je=s.convert(A.type)),A.format===$a&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,A.type!==_o&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=_o,je=s.convert(A.type))),ht&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ee.width,ee.height,0,Pe,je,null));else if(A.isDataTexture)if(Ye.length>0&&lt){Je&&ht&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,Ye[0].width,Ye[0].height);for(let ae=0,D=Ye.length;ae<D;ae++)ye=Ye[ae],Je?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,Pe,je,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Ae,ye.width,ye.height,0,Pe,je,ye.data);A.generateMipmaps=!1}else Je?(ht&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Pe,je,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ee.width,ee.height,0,Pe,je,ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Je&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ae,Ye[0].width,Ye[0].height,ee.depth);for(let ae=0,D=Ye.length;ae<D;ae++)ye=Ye[ae],A.format!==ir?Pe!==null?Je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ee.depth,Pe,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ae,ye.width,ye.height,ee.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ee.depth,Pe,je,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ae,ye.width,ye.height,ee.depth,0,Pe,je,ye.data)}else{Je&&ht&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,Ye[0].width,Ye[0].height);for(let ae=0,D=Ye.length;ae<D;ae++)ye=Ye[ae],A.format!==ir?Pe!==null?Je?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,Pe,je,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Ae,ye.width,ye.height,0,Pe,je,ye.data)}else if(A.isDataArrayTexture)Je?(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ae,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Pe,je,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,Pe,je,ee.data);else if(A.isData3DTexture)Je?(ht&&t.texStorage3D(n.TEXTURE_3D,_e,Ae,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Pe,je,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,Pe,je,ee.data);else if(A.isFramebufferTexture){if(ht)if(Je)t.texStorage2D(n.TEXTURE_2D,_e,Ae,ee.width,ee.height);else{let ae=ee.width,D=ee.height;for(let le=0;le<_e;le++)t.texImage2D(n.TEXTURE_2D,le,Ae,ae,D,0,Pe,je,null),ae>>=1,D>>=1}}else if(Ye.length>0&&lt){Je&&ht&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,Ye[0].width,Ye[0].height);for(let ae=0,D=Ye.length;ae<D;ae++)ye=Ye[ae],Je?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Pe,je,ye):t.texImage2D(n.TEXTURE_2D,ae,Ae,Pe,je,ye);A.generateMipmaps=!1}else Je?(ht&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,je,ee)):t.texImage2D(n.TEXTURE_2D,0,Ae,Pe,je,ee);g(A,lt)&&v(ne),ge.__version=ie.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function me(b,A,z){if(A.image.length!==6)return;const ne=K(b,A),te=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+z);const ie=i.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const ge=xt.getPrimaries(xt.workingColorSpace),he=A.colorSpace===zi?null:xt.getPrimaries(A.colorSpace),fe=A.colorSpace===zi||ge===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Re=A.isCompressedTexture||A.image[0].isCompressedTexture,Ve=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!Re&&!Ve?ee[ae]=_(A.image[ae],!1,!0,r.maxCubemapSize):ee[ae]=Ve?A.image[ae].image:A.image[ae],ee[ae]=Be(A,ee[ae]);const lt=ee[0],Pe=m(lt)||a,je=s.convert(A.format,A.colorSpace),Ae=s.convert(A.type),ye=y(A.internalFormat,je,Ae,A.colorSpace),Ye=a&&A.isVideoTexture!==!0,Je=ie.__version===void 0||ne===!0;let ht=w(A,lt,Pe);q(n.TEXTURE_CUBE_MAP,A,Pe);let _e;if(Re){Ye&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,ye,lt.width,lt.height);for(let ae=0;ae<6;ae++){_e=ee[ae].mipmaps;for(let D=0;D<_e.length;D++){const le=_e[D];A.format!==ir?je!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,0,0,le.width,le.height,je,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,0,0,le.width,le.height,je,Ae,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,ye,le.width,le.height,0,je,Ae,le.data)}}}else{_e=A.mipmaps,Ye&&Je&&(_e.length>0&&ht++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,ye,ee[0].width,ee[0].height));for(let ae=0;ae<6;ae++)if(Ve){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,je,Ae,ee[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,ee[ae].width,ee[ae].height,0,je,Ae,ee[ae].data);for(let D=0;D<_e.length;D++){const ue=_e[D].image[ae].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,0,0,ue.width,ue.height,je,Ae,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,ye,ue.width,ue.height,0,je,Ae,ue.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,je,Ae,ee[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,je,Ae,ee[ae]);for(let D=0;D<_e.length;D++){const le=_e[D];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,0,0,je,Ae,le.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,ye,je,Ae,le.image[ae])}}}g(A,Pe)&&v(n.TEXTURE_CUBE_MAP),ie.__version=te.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function de(b,A,z,ne,te,ie){const ge=s.convert(z.format,z.colorSpace),he=s.convert(z.type),fe=y(z.internalFormat,ge,he,z.colorSpace);if(!i.get(A).__hasExternalTextures){const Ve=Math.max(1,A.width>>ie),ee=Math.max(1,A.height>>ie);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,fe,Ve,ee,A.depth,0,ge,he,null):t.texImage2D(te,ie,fe,Ve,ee,0,ge,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,0,Ue(A)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(b,A,z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||xe(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===ds?ne=n.DEPTH_COMPONENT32F:te.type===fs&&(ne=n.DEPTH_COMPONENT24));const ie=Ue(A);xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const ne=Ue(A);z&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],ge=s.convert(ie.format,ie.colorSpace),he=s.convert(ie.type),fe=y(ie.internalFormat,ge,he,ie.colorSpace),Re=Ue(A);z&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,fe,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,fe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,fe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);const ne=i.get(A.depthTexture).__webglTexture,te=Ue(A);if(A.depthTexture.format===go)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(A.depthTexture.format===$a)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(b){const A=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ne(A.__webglFramebuffer,b)}else if(z){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=n.createRenderbuffer(),De(A.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),De(A.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(b,A,z){const ne=i.get(b);A!==void 0&&de(ne.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Oe(b)}function G(b){const A=b.texture,z=i.get(b),ne=i.get(A);b.addEventListener("dispose",P),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=A.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,ge=m(b)||a;if(te){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let fe=0;fe<A.mipmaps.length;fe++)z.__webglFramebuffer[he][fe]=n.createFramebuffer()}else z.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)z.__webglFramebuffer[he]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const he=b.texture;for(let fe=0,Re=he.length;fe<Re;fe++){const Ve=i.get(he[fe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&xe(b)===!1){const he=ie?A:[A];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const Re=he[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Ve=s.convert(Re.format,Re.colorSpace),ee=s.convert(Re.type),lt=y(Re.internalFormat,Ve,ee,Re.colorSpace,b.isXRRenderTarget===!0),Pe=Ue(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,lt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),De(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),q(n.TEXTURE_CUBE_MAP,A,ge);for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)de(z.__webglFramebuffer[he][fe],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else de(z.__webglFramebuffer[he],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(A,ge)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const he=b.texture;for(let fe=0,Re=he.length;fe<Re;fe++){const Ve=he[fe],ee=i.get(Ve);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),q(n.TEXTURE_2D,Ve,ge),de(z.__webglFramebuffer,b,Ve,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(Ve,ge)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),q(he,A,ge),a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)de(z.__webglFramebuffer[fe],b,A,n.COLOR_ATTACHMENT0,he,fe);else de(z.__webglFramebuffer,b,A,n.COLOR_ATTACHMENT0,he,0);g(A,ge)&&v(he),t.unbindTexture()}b.depthBuffer&&Oe(b)}function Xe(b){const A=m(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,te=z.length;ne<te;ne++){const ie=z[ne];if(g(ie,A)){const ge=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ie).__webglTexture;t.bindTexture(ge,he),v(ge),t.unbindTexture()}}}function ve(b){if(a&&b.samples>0&&xe(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,ne=b.height;let te=n.COLOR_BUFFER_BIT;const ie=[],ge=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(b),fe=b.isWebGLMultipleRenderTargets===!0;if(fe)for(let Re=0;Re<A.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){ie.push(n.COLOR_ATTACHMENT0+Re),b.depthBuffer&&ie.push(ge);const Ve=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ve===!1&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Re]),Ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),fe){const ee=i.get(A[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<A.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,he.__webglColorRenderbuffer[Re]);const Ve=i.get(A[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ue(b){return Math.min(r.maxSamples,b.samples)}function xe(b){const A=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function V(b){const A=o.render.frame;c.get(b)!==A&&(c.set(b,A),b.update())}function Be(b,A){const z=b.colorSpace,ne=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===sm||z!==Yr&&z!==zi&&(xt.getTransfer(z)===Rt?a===!1?e.has("EXT_sRGB")===!0&&ne===ir?(b.format=sm,b.minFilter=Ii,b.generateMipmaps=!1):A=IM.sRGBToLinear(A):(ne!==ir||te!==Rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),A}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=N,this.setTextureCube=k,this.rebindTextures=We,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xe}function ML(n,e,t){const i=t.isWebGL2;function r(s,o=zi){let a;const l=xt.getTransfer(o);if(s===Rs)return n.UNSIGNED_BYTE;if(s===AM)return n.UNSIGNED_SHORT_4_4_4_4;if(s===CM)return n.UNSIGNED_SHORT_5_5_5_1;if(s===iC)return n.BYTE;if(s===rC)return n.SHORT;if(s===N_)return n.UNSIGNED_SHORT;if(s===wM)return n.INT;if(s===fs)return n.UNSIGNED_INT;if(s===ds)return n.FLOAT;if(s===Au)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===sC)return n.ALPHA;if(s===ir)return n.RGBA;if(s===oC)return n.LUMINANCE;if(s===aC)return n.LUMINANCE_ALPHA;if(s===go)return n.DEPTH_COMPONENT;if(s===$a)return n.DEPTH_STENCIL;if(s===sm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===lC)return n.RED;if(s===RM)return n.RED_INTEGER;if(s===uC)return n.RG;if(s===bM)return n.RG_INTEGER;if(s===PM)return n.RGBA_INTEGER;if(s===lh||s===uh||s===ch||s===fh)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===lh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ch)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===lh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ch)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===L0||s===D0||s===N0||s===U0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===L0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===D0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===N0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===U0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===LM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===I0||s===O0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===I0)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===O0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===F0||s===k0||s===z0||s===B0||s===H0||s===G0||s===V0||s===W0||s===X0||s===j0||s===Y0||s===q0||s===$0||s===K0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===F0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===k0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===z0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===B0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===H0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===G0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===V0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===W0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===X0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===j0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Y0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===q0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===K0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dh||s===Z0||s===Q0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===dh)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Z0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Q0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cC||s===J0||s===ev||s===tv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===dh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===J0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ev)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_o?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class EL extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Al extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TL={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Al;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wL extends tl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,x=null;const _=t.getContextAttributes();let m=null,f=null;const g=[],v=[],y=new ct;let w=null;const T=new Oi;T.layers.enable(1),T.viewport=new cn;const M=new Oi;M.layers.enable(2),M.viewport=new cn;const P=[T,M],S=new EL;S.layers.enable(1),S.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=g[q];return K===void 0&&(K=new Fh,g[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=g[q];return K===void 0&&(K=new Fh,g[q]=K),K.getGripSpace()},this.getHand=function(q){let K=g[q];return K===void 0&&(K=new Fh,g[q]=K),K.getHandSpace()};function U(q){const K=v.indexOf(q.inputSource);if(K===-1)return;const se=g[K];se!==void 0&&(se.update(q.inputSource,q.frame,u||o),se.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",L);for(let q=0;q<g.length;q++){const K=v[q];K!==null&&(v[q]=null,g[q].disconnect(K))}E=null,I=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Co(p.framebufferWidth,p.framebufferHeight,{format:ir,type:Rs,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,se=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?$a:go,se=_.stencil?_o:fs);const de={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Co(h.textureWidth,h.textureHeight,{format:ir,type:Rs,depthTexture:new qM(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(f);De.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let K=0;K<q.removed.length;K++){const se=q.removed[K],me=v.indexOf(se);me>=0&&(v[me]=null,g[me].disconnect(se))}for(let K=0;K<q.added.length;K++){const se=q.added[K];let me=v.indexOf(se);if(me===-1){for(let De=0;De<g.length;De++)if(De>=v.length){v.push(se),me=De;break}else if(v[De]===null){v[De]=se,me=De;break}if(me===-1)break}const de=g[me];de&&de.connect(se)}}const F=new X,H=new X;function j(q,K,se){F.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(se.matrixWorld);const me=F.distanceTo(H),de=K.projectionMatrix.elements,De=se.projectionMatrix.elements,Ne=de[14]/(de[10]-1),Oe=de[14]/(de[10]+1),We=(de[9]+1)/de[5],G=(de[9]-1)/de[5],Xe=(de[8]-1)/de[0],ve=(De[8]+1)/De[0],Ue=Ne*Xe,xe=Ne*ve,V=me/(-Xe+ve),Be=V*-Xe;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(V),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=Ne+V,A=Oe+V,z=Ue-Be,ne=xe+(me-Be),te=We*Oe/A*b,ie=G*Oe/A*b;q.projectionMatrix.makePerspective(z,ne,te,ie,b,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function N(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=M.near=T.near=q.near,S.far=M.far=T.far=q.far,(E!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,I=S.far);const K=q.parent,se=S.cameras;N(S,K);for(let me=0;me<se.length;me++)N(se[me],K);se.length===2?j(S,T,M):S.projectionMatrix.copy(T.projectionMatrix),k(q,S,K)};function k(q,K,se){se===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(se.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=om*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let R=null;function $(q,K){if(c=K.getViewerPose(u||o),x=K,c!==null){const se=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let me=!1;se.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let de=0;de<se.length;de++){const De=se[de];let Ne=null;if(p!==null)Ne=p.getViewport(De);else{const We=d.getViewSubImage(h,De);Ne=We.viewport,de===0&&(e.setRenderTargetTextures(f,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Oe=P[de];Oe===void 0&&(Oe=new Oi,Oe.layers.enable(de),Oe.viewport=new cn,P[de]=Oe),Oe.matrix.fromArray(De.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(De.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),de===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(Oe)}}for(let se=0;se<g.length;se++){const me=v[se],de=g[se];me!==null&&de!==void 0&&de.update(me,K,u||o)}R&&R(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const Q=new jM;Q.setAnimationLoop($),this.setAnimationLoop=function(q){R=q},this.dispose=function(){}}}function AL(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,VM(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===oi&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===oi&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===oi&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CL(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function u(g,v){let y=r[g.id];y===void 0&&(x(g),y=c(g),r[g.id]=y,g.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(g,w);const T=e.render.frame;s[g.id]!==T&&(h(g),s[g.id]=T)}function c(g){const v=d();g.__bindingPointIndex=v;const y=n.createBuffer(),w=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,w=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,M=y.length;T<M;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,E=P.length;S<E;S++){const I=P[S];if(p(I,T,S,w)===!0){const U=I.__offset,Z=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let F=0;F<Z.length;F++){const H=Z[F],j=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+L,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,v,y,w){const T=g.value,M=v+"_"+y;if(w[M]===void 0)return typeof T=="number"||typeof T=="boolean"?w[M]=T:w[M]=T.clone(),!0;{const P=w[M];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[M]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function x(g){const v=g.uniforms;let y=0;const w=16;for(let M=0,P=v.length;M<P;M++){const S=Array.isArray(v[M])?v[M]:[v[M]];for(let E=0,I=S.length;E<I;E++){const U=S[E],Z=Array.isArray(U.value)?U.value:[U.value];for(let L=0,F=Z.length;L<F;L++){const H=Z[L],j=_(H),N=y%w;N!==0&&w-N<j.boundary&&(y+=w-N),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=j.storage}}}const T=y%w;return T>0&&(y+=w-T),g.__size=y,g.__cache={},this}function _(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class eE{constructor(e={}){const{canvas:t=EC(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this._useLegacyLights=!1,this.toneMapping=Cs,this.toneMappingExposure=1;const v=this;let y=!1,w=0,T=0,M=null,P=-1,S=null;const E=new cn,I=new cn;let U=null;const Z=new dt(0);let L=0,F=t.width,H=t.height,j=1,N=null,k=null;const R=new cn(0,0,F,H),$=new cn(0,0,F,H);let Q=!1;const q=new I_;let K=!1,se=!1,me=null;const de=new Kt,De=new ct,Ne=new X,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return M===null?j:1}let G=i;function Xe(C,O){for(let Y=0;Y<C.length;Y++){const W=C[Y],B=t.getContext(W,O);if(B!==null)return B}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${D_}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",le,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),G=Xe(O,C),G===null)throw Xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,Ue,xe,V,Be,b,A,z,ne,te,ie,ge,he,fe,Re,Ve,ee,lt,Pe,je,Ae,ye,Ye,Je;function ht(){ve=new FP(G),Ue=new LP(G,ve,e),ve.init(Ue),ye=new ML(G,ve,Ue),xe=new yL(G,ve,Ue),V=new BP(G),Be=new oL,b=new SL(G,ve,xe,Be,Ue,ye,V),A=new NP(v),z=new OP(v),ne=new qC(G,Ue),Ye=new bP(G,ve,ne,Ue),te=new kP(G,ne,V,Ye),ie=new WP(G,te,ne,V),Pe=new VP(G,Ue,b),Ve=new DP(Be),ge=new sL(v,A,z,ve,Ue,Ye,Ve),he=new AL(v,Be),fe=new lL,Re=new pL(ve,Ue),lt=new RP(v,A,z,xe,ie,h,l),ee=new xL(v,ie,Ue),Je=new CL(G,V,Ue,xe),je=new PP(G,ve,V,Ue),Ae=new zP(G,ve,V,Ue),V.programs=ge.programs,v.capabilities=Ue,v.extensions=ve,v.properties=Be,v.renderLists=fe,v.shadowMap=ee,v.state=xe,v.info=V}ht();const _e=new wL(v,G);this.xr=_e,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(F,H,!1))},this.getSize=function(C){return C.set(F,H)},this.setSize=function(C,O,Y=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,H=O,t.width=Math.floor(C*j),t.height=Math.floor(O*j),Y===!0&&(t.style.width=C+"px",t.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(F*j,H*j).floor()},this.setDrawingBufferSize=function(C,O,Y){F=C,H=O,j=Y,t.width=Math.floor(C*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,O,Y,W){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,O,Y,W),xe.viewport(E.copy(R).multiplyScalar(j).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,O,Y,W){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,O,Y,W),xe.scissor(I.copy($).multiplyScalar(j).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){xe.setScissorTest(Q=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(C=!0,O=!0,Y=!0){let W=0;if(C){let B=!1;if(M!==null){const ce=M.texture.format;B=ce===PM||ce===bM||ce===RM}if(B){const ce=M.texture.type,Te=ce===Rs||ce===fs||ce===N_||ce===_o||ce===AM||ce===CM,He=lt.getClearColor(),we=lt.getClearAlpha(),be=He.r,Ge=He.g,Ke=He.b;Te?(p[0]=be,p[1]=Ge,p[2]=Ke,p[3]=we,G.clearBufferuiv(G.COLOR,0,p)):(x[0]=be,x[1]=Ge,x[2]=Ke,x[3]=we,G.clearBufferiv(G.COLOR,0,x))}else W|=G.COLOR_BUFFER_BIT}O&&(W|=G.DEPTH_BUFFER_BIT),Y&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Re.dispose(),Be.dispose(),A.dispose(),z.dispose(),ie.dispose(),Ye.dispose(),Je.dispose(),ge.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Me),_e.removeEventListener("sessionend",Le),me&&(me.dispose(),me=null),oe.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=V.autoReset,O=ee.enabled,Y=ee.autoUpdate,W=ee.needsUpdate,B=ee.type;ht(),V.autoReset=C,ee.enabled=O,ee.autoUpdate=Y,ee.needsUpdate=W,ee.type=B}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ue(C){const O=C.target;O.removeEventListener("dispose",ue),ke(O)}function ke(C){Ie(C),Be.remove(C)}function Ie(C){const O=Be.get(C).programs;O!==void 0&&(O.forEach(function(Y){ge.releaseProgram(Y)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,Y,W,B,ce){O===null&&(O=Oe);const Te=B.isMesh&&B.matrixWorld.determinant()<0,He=Et(C,O,Y,W,B);xe.setMaterial(W,Te);let we=Y.index,be=1;if(W.wireframe===!0){if(we=te.getWireframeAttribute(Y),we===void 0)return;be=2}const Ge=Y.drawRange,Ke=Y.attributes.position;let Pt=Ge.start*be,Qt=(Ge.start+Ge.count)*be;ce!==null&&(Pt=Math.max(Pt,ce.start*be),Qt=Math.min(Qt,(ce.start+ce.count)*be)),we!==null?(Pt=Math.max(Pt,0),Qt=Math.min(Qt,we.count)):Ke!=null&&(Pt=Math.max(Pt,0),Qt=Math.min(Qt,Ke.count));const _t=Qt-Pt;if(_t<0||_t===1/0)return;Ye.setup(B,W,He,Y,we);let Un,vt=je;if(we!==null&&(Un=ne.get(we),vt=Ae,vt.setIndex(Un)),B.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*We()),vt.setMode(G.LINES)):vt.setMode(G.TRIANGLES);else if(B.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),xe.setLineWidth(qe*We()),B.isLineSegments?vt.setMode(G.LINES):B.isLineLoop?vt.setMode(G.LINE_LOOP):vt.setMode(G.LINE_STRIP)}else B.isPoints?vt.setMode(G.POINTS):B.isSprite&&vt.setMode(G.TRIANGLES);if(B.isBatchedMesh)vt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)vt.renderInstances(Pt,_t,B.count);else if(Y.isInstancedBufferGeometry){const qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ed=Math.min(Y.instanceCount,qe);vt.renderInstances(Pt,_t,Ed)}else vt.render(Pt,_t)};function ot(C,O,Y){C.transparent===!0&&C.side===Nr&&C.forceSinglePass===!1?(C.side=oi,C.needsUpdate=!0,Mt(C,O,Y),C.side=Is,C.needsUpdate=!0,Mt(C,O,Y),C.side=Nr):Mt(C,O,Y)}this.compile=function(C,O,Y=null){Y===null&&(Y=C),m=Re.get(Y),m.init(),g.push(m),Y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),C!==Y&&C.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);const W=new Set;return C.traverse(function(B){const ce=B.material;if(ce)if(Array.isArray(ce))for(let Te=0;Te<ce.length;Te++){const He=ce[Te];ot(He,Y,B),W.add(He)}else ot(ce,Y,B),W.add(ce)}),g.pop(),m=null,W},this.compileAsync=function(C,O,Y=null){const W=this.compile(C,O,Y);return new Promise(B=>{function ce(){if(W.forEach(function(Te){Be.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){B(C);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ft=null;function Ce(C){ft&&ft(C)}function Me(){oe.stop()}function Le(){oe.start()}const oe=new jM;oe.setAnimationLoop(Ce),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(C){ft=C,_e.setAnimationLoop(C),C===null?oe.stop():oe.start()},_e.addEventListener("sessionstart",Me),_e.addEventListener("sessionend",Le),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(O),O=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,O,M),m=Re.get(C,g.length),m.init(),g.push(m),de.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(de),se=this.localClippingEnabled,K=Ve.init(this.clippingPlanes,se),_=fe.get(C,f.length),_.init(),f.push(_),ze(C,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,k),this.info.render.frame++,K===!0&&Ve.beginShadows();const Y=m.state.shadowsArray;if(ee.render(Y,C,O),K===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(_,C),m.setupLights(v._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let B=0,ce=W.length;B<ce;B++){const Te=W[B];Fe(_,C,Te,Te.viewport)}}else Fe(_,C,O);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(v,C,O),Ye.resetDefaultState(),P=-1,S=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ze(C,O,Y,W){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){W&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);const Te=ie.update(C),He=C.material;He.visible&&_.push(C,Te,He,Y,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Te=ie.update(C),He=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(He)){const we=Te.groups;for(let be=0,Ge=we.length;be<Ge;be++){const Ke=we[be],Pt=He[Ke.materialIndex];Pt&&Pt.visible&&_.push(C,Te,Pt,Y,Ne.z,Ke)}}else He.visible&&_.push(C,Te,He,Y,Ne.z,null)}}const ce=C.children;for(let Te=0,He=ce.length;Te<He;Te++)ze(ce[Te],O,Y,W)}function Fe(C,O,Y,W){const B=C.opaque,ce=C.transmissive,Te=C.transparent;m.setupLightsView(Y),K===!0&&Ve.setGlobalState(v.clippingPlanes,Y),ce.length>0&&$e(B,ce,O,Y),W&&xe.viewport(E.copy(W)),B.length>0&&Nt(B,O,Y),ce.length>0&&Nt(ce,O,Y),Te.length>0&&Nt(Te,O,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function $e(C,O,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const ce=Ue.isWebGL2;me===null&&(me=new Co(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Au:Rs,minFilter:wu,samples:ce?4:0})),v.getDrawingBufferSize(De),ce?me.setSize(De.x,De.y):me.setSize(am(De.x),am(De.y));const Te=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(Z),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const He=v.toneMapping;v.toneMapping=Cs,Nt(C,Y,W),b.updateMultisampleRenderTarget(me),b.updateRenderTargetMipmap(me);let we=!1;for(let be=0,Ge=O.length;be<Ge;be++){const Ke=O[be],Pt=Ke.object,Qt=Ke.geometry,_t=Ke.material,Un=Ke.group;if(_t.side===Nr&&Pt.layers.test(W.layers)){const vt=_t.side;_t.side=oi,_t.needsUpdate=!0,et(Pt,Y,W,Qt,_t,Un),_t.side=vt,_t.needsUpdate=!0,we=!0}}we===!0&&(b.updateMultisampleRenderTarget(me),b.updateRenderTargetMipmap(me)),v.setRenderTarget(Te),v.setClearColor(Z,L),v.toneMapping=He}function Nt(C,O,Y){const W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ce=C.length;B<ce;B++){const Te=C[B],He=Te.object,we=Te.geometry,be=W===null?Te.material:W,Ge=Te.group;He.layers.test(Y.layers)&&et(He,O,Y,we,be,Ge)}}function et(C,O,Y,W,B,ce){C.onBeforeRender(v,O,Y,W,B,ce),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(v,O,Y,W,C,ce),B.transparent===!0&&B.side===Nr&&B.forceSinglePass===!1?(B.side=oi,B.needsUpdate=!0,v.renderBufferDirect(Y,O,W,B,C,ce),B.side=Is,B.needsUpdate=!0,v.renderBufferDirect(Y,O,W,B,C,ce),B.side=Nr):v.renderBufferDirect(Y,O,W,B,C,ce),C.onAfterRender(v,O,Y,W,B,ce)}function Mt(C,O,Y){O.isScene!==!0&&(O=Oe);const W=Be.get(C),B=m.state.lights,ce=m.state.shadowsArray,Te=B.state.version,He=ge.getParameters(C,B.state,ce,O,Y),we=ge.getProgramCacheKey(He);let be=W.programs;W.environment=C.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(C.isMeshStandardMaterial?z:A).get(C.envMap||W.environment),be===void 0&&(C.addEventListener("dispose",ue),be=new Map,W.programs=be);let Ge=be.get(we);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Te)return At(C,He),Ge}else He.uniforms=ge.getUniforms(C),C.onBuild(Y,He,v),C.onBeforeCompile(He,v),Ge=ge.acquireProgram(He,we),be.set(we,Ge),W.uniforms=He.uniforms;const Ke=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Ve.uniform),At(C,He),W.needsLights=li(C),W.lightsStateVersion=Te,W.needsLights&&(Ke.ambientLightColor.value=B.state.ambient,Ke.lightProbe.value=B.state.probe,Ke.directionalLights.value=B.state.directional,Ke.directionalLightShadows.value=B.state.directionalShadow,Ke.spotLights.value=B.state.spot,Ke.spotLightShadows.value=B.state.spotShadow,Ke.rectAreaLights.value=B.state.rectArea,Ke.ltc_1.value=B.state.rectAreaLTC1,Ke.ltc_2.value=B.state.rectAreaLTC2,Ke.pointLights.value=B.state.point,Ke.pointLightShadows.value=B.state.pointShadow,Ke.hemisphereLights.value=B.state.hemi,Ke.directionalShadowMap.value=B.state.directionalShadowMap,Ke.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ke.spotShadowMap.value=B.state.spotShadowMap,Ke.spotLightMatrix.value=B.state.spotLightMatrix,Ke.spotLightMap.value=B.state.spotLightMap,Ke.pointShadowMap.value=B.state.pointShadowMap,Ke.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function Zt(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=tf.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function At(C,O){const Y=Be.get(C);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Et(C,O,Y,W,B){O.isScene!==!0&&(O=Oe),b.resetTextureUnits();const ce=O.fog,Te=W.isMeshStandardMaterial?O.environment:null,He=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Yr,we=(W.isMeshStandardMaterial?z:A).get(W.envMap||Te),be=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ke=!!Y.morphAttributes.position,Pt=!!Y.morphAttributes.normal,Qt=!!Y.morphAttributes.color;let _t=Cs;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(_t=v.toneMapping);const Un=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=Un!==void 0?Un.length:0,qe=Be.get(W),Ed=m.state.lights;if(K===!0&&(se===!0||C!==S)){const Pi=C===S&&W.id===P;Ve.setState(W,C,Pi)}let Bt=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ed.state.version||qe.outputColorSpace!==He||B.isBatchedMesh&&qe.batching===!1||!B.isBatchedMesh&&qe.batching===!0||B.isInstancedMesh&&qe.instancing===!1||!B.isInstancedMesh&&qe.instancing===!0||B.isSkinnedMesh&&qe.skinning===!1||!B.isSkinnedMesh&&qe.skinning===!0||B.isInstancedMesh&&qe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&qe.instancingColor===!1&&B.instanceColor!==null||qe.envMap!==we||W.fog===!0&&qe.fog!==ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ve.numPlanes||qe.numIntersection!==Ve.numIntersection)||qe.vertexAlphas!==be||qe.vertexTangents!==Ge||qe.morphTargets!==Ke||qe.morphNormals!==Pt||qe.morphColors!==Qt||qe.toneMapping!==_t||Ue.isWebGL2===!0&&qe.morphTargetsCount!==vt)&&(Bt=!0):(Bt=!0,qe.__version=W.version);let Hs=qe.currentProgram;Bt===!0&&(Hs=Mt(W,O,B));let $_=!1,il=!1,Td=!1;const yn=Hs.getUniforms(),Gs=qe.uniforms;if(xe.useProgram(Hs.program)&&($_=!0,il=!0,Td=!0),W.id!==P&&(P=W.id,il=!0),$_||S!==C){yn.setValue(G,"projectionMatrix",C.projectionMatrix),yn.setValue(G,"viewMatrix",C.matrixWorldInverse);const Pi=yn.map.cameraPosition;Pi!==void 0&&Pi.setValue(G,Ne.setFromMatrixPosition(C.matrixWorld)),Ue.logarithmicDepthBuffer&&yn.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yn.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,il=!0,Td=!0)}if(B.isSkinnedMesh){yn.setOptional(G,B,"bindMatrix"),yn.setOptional(G,B,"bindMatrixInverse");const Pi=B.skeleton;Pi&&(Ue.floatVertexTextures?(Pi.boneTexture===null&&Pi.computeBoneTexture(),yn.setValue(G,"boneTexture",Pi.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(yn.setOptional(G,B,"batchingTexture"),yn.setValue(G,"batchingTexture",B._matricesTexture,b));const wd=Y.morphAttributes;if((wd.position!==void 0||wd.normal!==void 0||wd.color!==void 0&&Ue.isWebGL2===!0)&&Pe.update(B,Y,Hs),(il||qe.receiveShadow!==B.receiveShadow)&&(qe.receiveShadow=B.receiveShadow,yn.setValue(G,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Gs.envMap.value=we,Gs.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),il&&(yn.setValue(G,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&mt(Gs,Td),ce&&W.fog===!0&&he.refreshFogUniforms(Gs,ce),he.refreshMaterialUniforms(Gs,W,j,H,me),tf.upload(G,Zt(qe),Gs,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(tf.upload(G,Zt(qe),Gs,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yn.setValue(G,"center",B.center),yn.setValue(G,"modelViewMatrix",B.modelViewMatrix),yn.setValue(G,"normalMatrix",B.normalMatrix),yn.setValue(G,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pi=W.uniformsGroups;for(let Ad=0,RE=Pi.length;Ad<RE;Ad++)if(Ue.isWebGL2){const K_=Pi[Ad];Je.update(K_,Hs),Je.bind(K_,Hs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hs}function mt(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function li(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,O,Y){Be.get(C.texture).__webglTexture=O,Be.get(C.depthTexture).__webglTexture=Y;const W=Be.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Y===void 0,W.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,O){const Y=Be.get(C);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,Y=0){M=C,w=O,T=Y;let W=!0,B=null,ce=!1,Te=!1;if(C){const we=Be.get(C);we.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(G.FRAMEBUFFER,null),W=!1):we.__webglFramebuffer===void 0?b.setupRenderTarget(C):we.__hasExternalTextures&&b.rebindTextures(C,Be.get(C.texture).__webglTexture,Be.get(C.depthTexture).__webglTexture);const be=C.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Te=!0);const Ge=Be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?B=Ge[O][Y]:B=Ge[O],ce=!0):Ue.isWebGL2&&C.samples>0&&b.useMultisampledRTT(C)===!1?B=Be.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[Y]:B=Ge,E.copy(C.viewport),I.copy(C.scissor),U=C.scissorTest}else E.copy(R).multiplyScalar(j).floor(),I.copy($).multiplyScalar(j).floor(),U=Q;if(xe.bindFramebuffer(G.FRAMEBUFFER,B)&&Ue.drawBuffers&&W&&xe.drawBuffers(C,B),xe.viewport(E),xe.scissor(I),xe.setScissorTest(U),ce){const we=Be.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,Y)}else if(Te){const we=Be.get(C.texture),be=O||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,we.__webglTexture,Y||0,be)}P=-1},this.readRenderTargetPixels=function(C,O,Y,W,B,ce,Te){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(He=He[Te]),He){xe.bindFramebuffer(G.FRAMEBUFFER,He);try{const we=C.texture,be=we.format,Ge=we.type;if(be!==ir&&ye.convert(be)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ge===Au&&(ve.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ge!==Rs&&ye.convert(Ge)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ds&&(Ue.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-W&&Y>=0&&Y<=C.height-B&&G.readPixels(O,Y,W,B,ye.convert(be),ye.convert(Ge),ce)}finally{const we=M!==null?Be.get(M).__webglFramebuffer:null;xe.bindFramebuffer(G.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(C,O,Y=0){const W=Math.pow(2,-Y),B=Math.floor(O.image.width*W),ce=Math.floor(O.image.height*W);b.setTexture2D(O,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,C.x,C.y,B,ce),xe.unbindTexture()},this.copyTextureToTexture=function(C,O,Y,W=0){const B=O.image.width,ce=O.image.height,Te=ye.convert(Y.format),He=ye.convert(Y.type);b.setTexture2D(Y,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment),O.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,W,C.x,C.y,B,ce,Te,He,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,W,C.x,C.y,O.mipmaps[0].width,O.mipmaps[0].height,Te,O.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,W,C.x,C.y,Te,He,O.image),W===0&&Y.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,O,Y,W,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=C.max.x-C.min.x+1,Te=C.max.y-C.min.y+1,He=C.max.z-C.min.z+1,we=ye.convert(W.format),be=ye.convert(W.type);let Ge;if(W.isData3DTexture)b.setTexture3D(W,0),Ge=G.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),Ge=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const Ke=G.getParameter(G.UNPACK_ROW_LENGTH),Pt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Qt=G.getParameter(G.UNPACK_SKIP_PIXELS),_t=G.getParameter(G.UNPACK_SKIP_ROWS),Un=G.getParameter(G.UNPACK_SKIP_IMAGES),vt=Y.isCompressedTexture?Y.mipmaps[B]:Y.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,vt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?G.texSubImage3D(Ge,B,O.x,O.y,O.z,ce,Te,He,we,be,vt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ge,B,O.x,O.y,O.z,ce,Te,He,we,vt.data)):G.texSubImage3D(Ge,B,O.x,O.y,O.z,ce,Te,He,we,be,vt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ke),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,_t),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Un),B===0&&W.generateMipmaps&&G.generateMipmap(Ge),xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){w=0,T=0,M=null,xe.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===U_?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===vd?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pn?vo:DM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vo?pn:Yr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class RL extends eE{}RL.prototype.isWebGL1Renderer=!0;class k_{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(e),this.density=t}clone(){return new k_(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}let bL=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};class tE extends ku{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wv=new Kt,um=new kM,Ac=new xd,Cc=new X;class PL extends vn{constructor(e=new lr,t=new tE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(r),Ac.radius+=s,e.ray.intersectsSphere(Ac)===!1)return;Wv.copy(r).invert(),um.copy(e.ray).applyMatrix4(Wv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,_=p;x<_;x++){const m=u.getX(x);Cc.fromBufferAttribute(d,m),Xv(Cc,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,_=p;x<_;x++)Cc.fromBufferAttribute(d,x),Xv(Cc,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xv(n,e,t,i,r,s,o){const a=um.distanceSqToPoint(n);if(a<t){const l=new X;um.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class z_ extends lr{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Ti(s,3)),this.setAttribute("normal",new Ti(s.slice(),3)),this.setAttribute("uv",new Ti(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new X,y=new X,w=new X;for(let T=0;T<t.length;T+=3)p(t[T+0],v),p(t[T+1],y),p(t[T+2],w),l(v,y,w,g)}function l(g,v,y,w){const T=w+1,M=[];for(let P=0;P<=T;P++){M[P]=[];const S=g.clone().lerp(y,P/T),E=v.clone().lerp(y,P/T),I=T-P;for(let U=0;U<=I;U++)U===0&&P===T?M[P][U]=S:M[P][U]=S.clone().lerp(E,U/I)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const E=Math.floor(S/2);S%2===0?(h(M[P][E+1]),h(M[P+1][E]),h(M[P][E])):(h(M[P][E+1]),h(M[P+1][E+1]),h(M[P+1][E]))}}function u(g){const v=new X;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(g),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function c(){const g=new X;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const y=m(g)/2/Math.PI+.5,w=f(g)/Math.PI+.5;o.push(y,1-w)}x(),d()}function d(){for(let g=0;g<o.length;g+=6){const v=o[g+0],y=o[g+2],w=o[g+4],T=Math.max(v,y,w),M=Math.min(v,y,w);T>.9&&M<.1&&(v<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),w<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,v){const y=g*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function x(){const g=new X,v=new X,y=new X,w=new X,T=new ct,M=new ct,P=new ct;for(let S=0,E=0;S<s.length;S+=9,E+=6){g.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),T.set(o[E+0],o[E+1]),M.set(o[E+2],o[E+3]),P.set(o[E+4],o[E+5]),w.copy(g).add(v).add(y).divideScalar(3);const I=m(w);_(T,E+0,g,I),_(M,E+2,v,I),_(P,E+4,y,I)}}function _(g,v,y,w){w<0&&g.x===1&&(o[v]=g.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new z_(e.vertices,e.indices,e.radius,e.details)}}class Yf extends z_{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yf(e.radius,e.detail)}}class B_ extends lr{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new X,h=new X,p=[],x=[],_=[],m=[];for(let f=0;f<=i;f++){const g=[],v=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(T+y,1-v),g.push(u++)}c.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){const v=c[f][g+1],y=c[f][g],w=c[f+1][g],T=c[f+1][g+1];(f!==0||o>0)&&p.push(v,y,T),(f!==i-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new Ti(x,3)),this.setAttribute("normal",new Ti(_,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new B_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nE extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const kh=new Kt,jv=new X,Yv=new X;class LL{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new I_,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jv.setFromMatrixPosition(e.matrixWorld),t.position.copy(jv),Yv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yv),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DL extends LL{constructor(){super(new YM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NL extends nE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new DL}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UL extends nE{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:D_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=D_);function IL(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function OL(n,e,t){return e&&IL(n.prototype,e),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mn,nf,gi,hs,ps,La,iE,eo,Xl,rE,kr,Zi,sE,oE=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},aE=1,xa=[],it=[],Sr=[],jl=Date.now,cm=function(e,t){return t},FL=function(){var e=Xl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,it),r.push.apply(r,Sr),it=i,Sr=r,cm=function(o,a){return t[o](a)}},bs=function(e,t){return~Sr.indexOf(e)&&Sr[Sr.indexOf(e)+1][t]},Yl=function(e){return!!~rE.indexOf(e)},On=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},In=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Rc="scrollLeft",bc="scrollTop",fm=function(){return kr&&kr.isPressed||it.cache++},qf=function(e,t){var i=function r(s){if(s||s===0){aE&&(gi.history.scrollRestoration="manual");var o=kr&&kr.isPressed;s=r.v=Math.round(s)||(kr&&kr.iOS?1:0),e(s),r.cacheID=it.cache,o&&cm("ss",s)}else(t||it.cache!==r.cacheID||cm("ref"))&&(r.cacheID=it.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Wn={s:Rc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qf(function(n){return arguments.length?gi.scrollTo(n,tn.sc()):gi.pageXOffset||hs[Rc]||ps[Rc]||La[Rc]||0})},tn={s:bc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Wn,sc:qf(function(n){return arguments.length?gi.scrollTo(Wn.sc(),n):gi.pageYOffset||hs[bc]||ps[bc]||La[bc]||0})},$n=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},kL=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Os=function(e,t){var i=t.s,r=t.sc;Yl(e)&&(e=hs.scrollingElement||ps);var s=it.indexOf(e),o=r===tn.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||On(e,"scroll",fm);var a=it[s+o],l=a||(it[s+o]=qf(bs(e,i),!0)||(Yl(e)?r:qf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},dm=function(e,t,i){var r=e,s=e,o=jl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(x,_){var m=jl();_||m-o>l?(s=r,r=x,a=o,o=m):i?r+=x:r=s+(x-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},h=function(x){var _=a,m=s,f=jl();return(x||x===0)&&x!==r&&c(x),o===a||f-a>u?0:(r+(i?m:-m))/((i?f:o)-_)*1e3};return{update:c,reset:d,getVelocity:h}},vl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},qv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},lE=function(){Xl=mn.core.globals().ScrollTrigger,Xl&&Xl.core&&FL()},uE=function(e){return mn=e||oE(),!nf&&mn&&typeof document<"u"&&document.body&&(gi=window,hs=document,ps=hs.documentElement,La=hs.body,rE=[gi,hs,ps,La],mn.utils.clamp,sE=mn.core.context||function(){},eo="onpointerenter"in La?"pointer":"mouse",iE=Xt.isTouch=gi.matchMedia&&gi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=Xt.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return aE=0},500),lE(),nf=1),nf};Wn.op=tn;it.cache=0;var Xt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){nf||uE(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Xl||lE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,h=i.onStopDelay,p=i.ignore,x=i.wheelSpeed,_=i.event,m=i.onDragStart,f=i.onDragEnd,g=i.onDrag,v=i.onPress,y=i.onRelease,w=i.onRight,T=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,E=i.onChangeY,I=i.onChange,U=i.onToggleX,Z=i.onToggleY,L=i.onHover,F=i.onHoverEnd,H=i.onMove,j=i.ignoreCheck,N=i.isNormalizer,k=i.onGestureStart,R=i.onGestureEnd,$=i.onWheel,Q=i.onEnable,q=i.onDisable,K=i.onClick,se=i.scrollSpeed,me=i.capture,de=i.allowClicks,De=i.lockAxis,Ne=i.onLockAxis;this.target=a=$n(a)||ps,this.vars=i,p&&(p=mn.utils.toArray(p)),r=r||1e-9,s=s||0,x=x||1,se=se||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(gi.getComputedStyle(La).lineHeight)||22);var Oe,We,G,Xe,ve,Ue,xe,V=this,Be=0,b=0,A=i.passive||!c&&i.passive!==!1,z=Os(a,Wn),ne=Os(a,tn),te=z(),ie=ne(),ge=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Zi[0]==="pointerdown",he=Yl(a),fe=a.ownerDocument||hs,Re=[0,0,0],Ve=[0,0,0],ee=0,lt=function(){return ee=jl()},Pe=function(Me,Le){return(V.event=Me)&&p&&kL(Me.target,p)||Le&&ge&&Me.pointerType!=="touch"||j&&j(Me,Le)},je=function(){V._vx.reset(),V._vy.reset(),We.pause(),d&&d(V)},Ae=function(){var Me=V.deltaX=qv(Re),Le=V.deltaY=qv(Ve),oe=Math.abs(Me)>=r,ze=Math.abs(Le)>=r;I&&(oe||ze)&&I(V,Me,Le,Re,Ve),oe&&(w&&V.deltaX>0&&w(V),T&&V.deltaX<0&&T(V),S&&S(V),U&&V.deltaX<0!=Be<0&&U(V),Be=V.deltaX,Re[0]=Re[1]=Re[2]=0),ze&&(P&&V.deltaY>0&&P(V),M&&V.deltaY<0&&M(V),E&&E(V),Z&&V.deltaY<0!=b<0&&Z(V),b=V.deltaY,Ve[0]=Ve[1]=Ve[2]=0),(Xe||G)&&(H&&H(V),G&&(m&&G===1&&m(V),g&&g(V),G=0),Xe=!1),Ue&&!(Ue=!1)&&Ne&&Ne(V),ve&&($(V),ve=!1),Oe=0},ye=function(Me,Le,oe){Re[oe]+=Me,Ve[oe]+=Le,V._vx.update(Me),V._vy.update(Le),u?Oe||(Oe=requestAnimationFrame(Ae)):Ae()},Ye=function(Me,Le){De&&!xe&&(V.axis=xe=Math.abs(Me)>Math.abs(Le)?"x":"y",Ue=!0),xe!=="y"&&(Re[2]+=Me,V._vx.update(Me,!0)),xe!=="x"&&(Ve[2]+=Le,V._vy.update(Le,!0)),u?Oe||(Oe=requestAnimationFrame(Ae)):Ae()},Je=function(Me){if(!Pe(Me,1)){Me=vl(Me,c);var Le=Me.clientX,oe=Me.clientY,ze=Le-V.x,Fe=oe-V.y,$e=V.isDragging;V.x=Le,V.y=oe,($e||(ze||Fe)&&(Math.abs(V.startX-Le)>=s||Math.abs(V.startY-oe)>=s))&&(G||(G=$e?2:1),$e||(V.isDragging=!0),Ye(ze,Fe))}},ht=V.onPress=function(Ce){Pe(Ce,1)||Ce&&Ce.button||(V.axis=xe=null,We.pause(),V.isPressed=!0,Ce=vl(Ce),Be=b=0,V.startX=V.x=Ce.clientX,V.startY=V.y=Ce.clientY,V._vx.reset(),V._vy.reset(),On(N?a:fe,Zi[1],Je,A,!0),V.deltaX=V.deltaY=0,v&&v(V))},_e=V.onRelease=function(Ce){if(!Pe(Ce,1)){In(N?a:fe,Zi[1],Je,!0);var Me=!isNaN(V.y-V.startY),Le=V.isDragging,oe=Le&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),ze=vl(Ce);!oe&&Me&&(V._vx.reset(),V._vy.reset(),c&&de&&mn.delayedCall(.08,function(){if(jl()-ee>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(fe.createEvent){var Fe=fe.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,gi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(Fe)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Le&&!N&&We.restart(!0),G&&Ae(),f&&Le&&f(V),y&&y(V,oe)}},ae=function(Me){return Me.touches&&Me.touches.length>1&&(V.isGesturing=!0)&&k(Me,V.isDragging)},D=function(){return(V.isGesturing=!1)||R(V)},le=function(Me){if(!Pe(Me)){var Le=z(),oe=ne();ye((Le-te)*se,(oe-ie)*se,1),te=Le,ie=oe,d&&We.restart(!0)}},ue=function(Me){if(!Pe(Me)){Me=vl(Me,c),$&&(ve=!0);var Le=(Me.deltaMode===1?l:Me.deltaMode===2?gi.innerHeight:1)*x;ye(Me.deltaX*Le,Me.deltaY*Le,0),d&&!N&&We.restart(!0)}},ke=function(Me){if(!Pe(Me)){var Le=Me.clientX,oe=Me.clientY,ze=Le-V.x,Fe=oe-V.y;V.x=Le,V.y=oe,Xe=!0,d&&We.restart(!0),(ze||Fe)&&Ye(ze,Fe)}},Ie=function(Me){V.event=Me,L(V)},ot=function(Me){V.event=Me,F(V)},ft=function(Me){return Pe(Me)||vl(Me,c)&&K(V)};We=V._dc=mn.delayedCall(h||.25,je).pause(),V.deltaX=V.deltaY=0,V._vx=dm(0,50,!0),V._vy=dm(0,50,!0),V.scrollX=z,V.scrollY=ne,V.isDragging=V.isGesturing=V.isPressed=!1,sE(this),V.enable=function(Ce){return V.isEnabled||(On(he?fe:a,"scroll",fm),o.indexOf("scroll")>=0&&On(he?fe:a,"scroll",le,A,me),o.indexOf("wheel")>=0&&On(a,"wheel",ue,A,me),(o.indexOf("touch")>=0&&iE||o.indexOf("pointer")>=0)&&(On(a,Zi[0],ht,A,me),On(fe,Zi[2],_e),On(fe,Zi[3],_e),de&&On(a,"click",lt,!0,!0),K&&On(a,"click",ft),k&&On(fe,"gesturestart",ae),R&&On(fe,"gestureend",D),L&&On(a,eo+"enter",Ie),F&&On(a,eo+"leave",ot),H&&On(a,eo+"move",ke)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Xe=G=!1,V._vx.reset(),V._vy.reset(),te=z(),ie=ne(),Ce&&Ce.type&&ht(Ce),Q&&Q(V)),V},V.disable=function(){V.isEnabled&&(xa.filter(function(Ce){return Ce!==V&&Yl(Ce.target)}).length||In(he?fe:a,"scroll",fm),V.isPressed&&(V._vx.reset(),V._vy.reset(),In(N?a:fe,Zi[1],Je,!0)),In(he?fe:a,"scroll",le,me),In(a,"wheel",ue,me),In(a,Zi[0],ht,me),In(fe,Zi[2],_e),In(fe,Zi[3],_e),In(a,"click",lt,!0),In(a,"click",ft),In(fe,"gesturestart",ae),In(fe,"gestureend",D),In(a,eo+"enter",Ie),In(a,eo+"leave",ot),In(a,eo+"move",ke),V.isEnabled=V.isPressed=V.isDragging=!1,q&&q(V))},V.kill=V.revert=function(){V.disable();var Ce=xa.indexOf(V);Ce>=0&&xa.splice(Ce,1),kr===V&&(kr=0)},xa.push(V),N&&Yl(a)&&(kr=V),V.enable(_)},OL(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Xt.version="3.14.2";Xt.create=function(n){return new Xt(n)};Xt.register=uE;Xt.getAll=function(){return xa.slice()};Xt.getById=function(n){return xa.filter(function(e){return e.vars.id===n})[0]};oE()&&mn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,ta,tt,Tt,mi,pt,H_,$f,Cu,ql,Cl,Pc,wn,Md,hm,Bn,$v,Kv,na,cE,zh,fE,kn,pm,dE,hE,ts,mm,G_,Da,V_,$l,_m,Bh,Lc=1,An=Date.now,Hh=An(),Wi=0,Rl=0,Zv=function(e,t,i){var r=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Qv=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},zL=function n(){return Rl&&requestAnimationFrame(n)},Jv=function(){return Md=1},ex=function(){return Md=0},dr=function(e){return e},bl=function(e){return Math.round(e*1e5)/1e5||0},pE=function(){return typeof window<"u"},mE=function(){return Ee||pE()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},bo=function(e){return!!~H_.indexOf(e)},_E=function(e){return(e==="Height"?V_:tt["inner"+e])||mi["client"+e]||pt["client"+e]},gE=function(e){return bs(e,"getBoundingClientRect")||(bo(e)?function(){return lf.width=tt.innerWidth,lf.height=V_,lf}:function(){return Ur(e)})},BL=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=bs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?_E(s):e["client"+s])||0}},HL=function(e,t){return!t||~Sr.indexOf(e)?gE(e):function(){return lf}},vr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=bs(e,i))?o()-gE(e)()[s]:bo(e)?(mi[i]||pt[i])-_E(r):e[i]-e["offset"+r])},Dc=function(e,t){for(var i=0;i<na.length;i+=3)(!t||~t.indexOf(na[i+1]))&&e(na[i],na[i+1],na[i+2])},hi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},Pl=function(e){return typeof e=="number"},to=function(e){return typeof e=="object"},xl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Gh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Jo=Math.abs,vE="left",xE="top",W_="right",X_="bottom",xo="width",yo="height",Kl="Right",Zl="Left",Ql="Top",Jl="Bottom",Yt="padding",Fi="margin",Za="Width",j_="Height",Jt="px",ki=function(e){return tt.getComputedStyle(e)},GL=function(e){var t=ki(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},tx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ur=function(e,t){var i=t&&ki(e)[hm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Kf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},yE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},VL=function(e){return function(t){return Ee.utils.snap(yE(e),t)}},Y_=function(e){var t=Ee.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},WL=function(e){return function(t,i){return Y_(yE(e))(t,i.direction)}},Nc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},ln=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},an=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Uc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},nx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ic={toggleActions:"play",anticipatePin:0},Zf={top:0,left:0,center:.5,bottom:1,right:1},rf=function(e,t){if(hi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Zf?Zf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Oc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,h=s.indent,p=s.fontWeight,x=Tt.createElement("div"),_=bo(i)||bs(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,f=_?pt:i,g=e.indexOf("start")!==-1,v=g?u:c,y="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===tn?W_:X_)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),x._isStart=g,x.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),x.style.cssText=y,x.innerText=t||t===0?e+"-"+t:e,f.children[0]?f.insertBefore(x,f.children[0]):f.appendChild(x),x._offset=x["offset"+r.op.d2],sf(x,0,r,g),x},sf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Za]=1,s["border"+a+Za]=0,s[i.p]=t+"px",Ee.set(e,s)},Qe=[],gm={},Ru,ix=function(){return An()-Wi>34&&(Ru||(Ru=requestAnimationFrame(Br)))},ea=function(){(!kn||!kn.isPressed||kn.startX>pt.clientWidth)&&(it.cache++,kn?Ru||(Ru=requestAnimationFrame(Br)):Br(),Wi||Lo("scrollStart"),Wi=An())},Vh=function(){hE=tt.innerWidth,dE=tt.innerHeight},Ll=function(e){it.cache++,(e===!0||!wn&&!fE&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!pm||hE!==tt.innerWidth||Math.abs(tt.innerHeight-dE)>tt.innerHeight*.25))&&$f.restart(!0)},Po={},XL=[],SE=function n(){return an(rt,"scrollEnd",n)||lo(!0)},Lo=function(e){return Po[e]&&Po[e].map(function(t){return t()})||XL},fi=[],ME=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},EE=function(){return it.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},q_=function(e,t){var i;for(Bn=0;Bn<Qe.length;Bn++)i=Qe[Bn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));$l=!0,t&&ME(t),t||Lo("revert")},TE=function(e,t){it.cache++,(t||!Hn)&&it.forEach(function(i){return Pn(i)&&i.cacheID++&&(i.rec=0)}),hi(e)&&(tt.history.scrollRestoration=G_=e)},Hn,So=0,rx,jL=function(){if(rx!==So){var e=rx=So;requestAnimationFrame(function(){return e===So&&lo(!0)})}},wE=function(){pt.appendChild(Da),V_=!kn&&Da.offsetHeight||tt.innerHeight,pt.removeChild(Da)},sx=function(e){return Cu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},lo=function(e,t){if(mi=Tt.documentElement,pt=Tt.body,H_=[tt,Tt,mi,pt],Wi&&!e&&!$l){ln(rt,"scrollEnd",SE);return}wE(),Hn=rt.isRefreshing=!0,$l||EE();var i=Lo("refreshInit");cE&&rt.sort(),t||q_(),it.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Qe.slice(0).forEach(function(r){return r.refresh()}),$l=!1,Qe.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),_m=1,sx(!0),Qe.forEach(function(r){var s=vr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),sx(!1),_m=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),it.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),TE(G_,1),$f.pause(),So++,Hn=2,Br(2),Qe.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Hn=rt.isRefreshing=!1,Lo("refresh")},vm=0,of=1,eu,Br=function(e){if(e===2||!Hn&&!$l){rt.isUpdating=!0,eu&&eu.update(0);var t=Qe.length,i=An(),r=i-Hh>=50,s=t&&Qe[0].scroll();if(of=vm>s?-1:1,Hn||(vm=s),r&&(Wi&&!Md&&i-Wi>200&&(Wi=0,Lo("scrollEnd")),Cl=Hh,Hh=i),of<0){for(Bn=t;Bn-- >0;)Qe[Bn]&&Qe[Bn].update(0,r);of=1}else for(Bn=0;Bn<t;Bn++)Qe[Bn]&&Qe[Bn].update(0,r);rt.isUpdating=!1}Ru=0},xm=[vE,xE,X_,W_,Fi+Jl,Fi+Kl,Fi+Ql,Fi+Zl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],af=xm.concat([xo,yo,"boxSizing","max"+Za,"max"+j_,"position",Fi,Yt,Yt+Ql,Yt+Kl,Yt+Jl,Yt+Zl]),YL=function(e,t,i){Na(i);var r=e._gsap;if(r.spacerIsNative)Na(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Wh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=xm.length,o=t.style,a=e.style,l;s--;)l=xm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[X_]=a[W_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[xo]=Kf(e,Wn)+Jt,o[yo]=Kf(e,tn)+Jt,o[Yt]=a[Fi]=a[xE]=a[vE]="0",Na(r),a[xo]=a["max"+Za]=i[xo],a[yo]=a["max"+j_]=i[yo],a[Yt]=i[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},qL=/([A-Z])/g,Na=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(qL,"-$1").toLowerCase())}},Fc=function(e){for(var t=af.length,i=e.style,r=[],s=0;s<t;s++)r.push(af[s],i[af[s]]);return r.t=e,r},$L=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},lf={left:0,top:0},ox=function(e,t,i,r,s,o,a,l,u,c,d,h,p,x){Pn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?rf("0"+e.substr(3),i):0));var _=p?p.time():0,m,f,g;if(p&&p.seek(0),isNaN(e)||(e=+e),Pl(e))p&&(e=Ee.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&sf(a,i,r,!0);else{Pn(t)&&(t=t(l));var v=(e||"0").split(" "),y,w,T,M;g=$n(t,l)||pt,y=Ur(g)||{},(!y||!y.left&&!y.top)&&ki(g).display==="none"&&(M=g.style.display,g.style.display="block",y=Ur(g),M?g.style.display=M:g.style.removeProperty("display")),w=rf(v[0],y[r.d]),T=rf(v[1]||"0",i),e=y[r.p]-u[r.p]-c+w+s-T,a&&sf(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(x&&(l[x]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;m="scroll"+r.d2,sf(o,P,r,S&&P>20||!S&&(d?Math.max(pt[m],mi[m]):o.parentNode[m])<=P+1),d&&(u=Ur(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Jt))}return p&&g&&(m=Ur(g),p.seek(h),f=Ur(g),p._caScrollDist=m[r.p]-f[r.p],e=e/p._caScrollDist*h),p&&p.seek(_),p?e:Math.round(e)},KL=/(webkit|moz|length|cssText|inset)/i,ax=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=ki(e);for(o in a)!+o&&!KL.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},AE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},kc=function(e,t,i){var r={};r[t.p]="+="+i,Ee.set(e,r)},lx=function(e,t){var i=Os(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var h=o.tween,p=l.onComplete,x={};u=u||i();var _=AE(i,u,function(){h.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=x,x[r]=function(){return _(u+c*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){it.cache++,o.tween&&Br()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=Ee.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(e,"wheel",i.wheelHandler),rt.isTouch&&ln(e,"touchmove",i.wheelHandler),s},rt=function(){function n(t,i){ta||n.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Rl){this.update=this.refresh=this.kill=dr;return}i=tx(hi(i)||Pl(i)||i.nodeType?{trigger:i}:i,Ic);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,h=s.trigger,p=s.pin,x=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,f=s.onScrubComplete,g=s.onSnapComplete,v=s.once,y=s.snap,w=s.pinReparent,T=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Wn:tn,I=!d&&d!==0,U=$n(i.scroller||tt),Z=Ee.core.getCache(U),L=bo(U),F=("pinType"in i?i.pinType:bs(U,"pinType")||L&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],j=I&&i.toggleActions.split(" "),N="markers"in i?i.markers:Ic.markers,k=L?0:parseFloat(ki(U)["border"+E.p2+Za])||0,R=this,$=i.onRefreshInit&&function(){return i.onRefreshInit(R)},Q=BL(U,L,E),q=HL(U,L),K=0,se=0,me=0,de=Os(U,E),De,Ne,Oe,We,G,Xe,ve,Ue,xe,V,Be,b,A,z,ne,te,ie,ge,he,fe,Re,Ve,ee,lt,Pe,je,Ae,ye,Ye,Je,ht,_e,ae,D,le,ue,ke,Ie,ot;if(R._startClamp=R._endClamp=!1,R._dir=E,m*=45,R.scroller=U,R.scroll=M?M.time.bind(M):de,We=de(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(cE=1,i.refreshPriority===-9999&&(eu=R)),Z.tweenScroll=Z.tweenScroll||{top:lx(U,tn),left:lx(U,Wn)},R.tweenTo=De=Z.tweenScroll[E.p],R.scrubDuration=function(oe){ae=Pl(oe)&&oe,ae?_e?_e.duration(oe):_e=Ee.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return f&&f(R)}}):(_e&&_e.progress(1).kill(),_e=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),Je=0,l||(l=r.vars.id)),y&&((!to(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&Ee.set(L?[pt,mi]:U,{scrollBehavior:"auto"}),it.forEach(function(oe){return Pn(oe)&&oe.target===(L?Tt.scrollingElement||mi:U)&&(oe.smooth=!1)}),Oe=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?VL(r):y.snapTo==="labelsDirectional"?WL(r):y.directional!==!1?function(oe,ze){return Y_(y.snapTo)(oe,An()-se<500?0:ze.direction)}:Ee.utils.snap(y.snapTo),D=y.duration||{min:.1,max:2},D=to(D)?ql(D.min,D.max):ql(D,D),le=Ee.delayedCall(y.delay||ae/2||.1,function(){var oe=de(),ze=An()-se<500,Fe=De.tween;if((ze||Math.abs(R.getVelocity())<10)&&!Fe&&!Md&&K!==oe){var $e=(oe-Xe)/z,Nt=r&&!I?r.totalProgress():$e,et=ze?0:(Nt-ht)/(An()-Cl)*1e3||0,Mt=Ee.utils.clamp(-$e,1-$e,Jo(et/2)*et/.185),Zt=$e+(y.inertia===!1?0:Mt),At,Et,mt=y,li=mt.onStart,C=mt.onInterrupt,O=mt.onComplete;if(At=Oe(Zt,R),Pl(At)||(At=Zt),Et=Math.max(0,Math.round(Xe+At*z)),oe<=ve&&oe>=Xe&&Et!==oe){if(Fe&&!Fe._initted&&Fe.data<=Jo(Et-oe))return;y.inertia===!1&&(Mt=At-$e),De(Et,{duration:D(Jo(Math.max(Jo(Zt-Nt),Jo(At-Nt))*.185/et/.05||0)),ease:y.ease||"power3",data:Jo(Et-oe),onInterrupt:function(){return le.restart(!0)&&C&&C(R)},onComplete:function(){R.update(),K=de(),r&&!I&&(_e?_e.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),Je=ht=r&&!I?r.totalProgress():R.progress,g&&g(R),O&&O(R)}},oe,Mt*z,Et-oe-Mt*z),li&&li(R,De.tween)}}else R.isActive&&K!==oe&&le.restart(!0)}).pause()),l&&(gm[l]=R),h=R.trigger=$n(h||p!==!0&&p),ot=h&&h._gsap&&h._gsap.stRevert,ot&&(ot=ot(R)),p=p===!0?h:$n(p),hi(a)&&(a={targets:h,className:a}),p&&(x===!1||x===Fi||(x=!x&&p.parentNode&&p.parentNode.style&&ki(p.parentNode).display==="flex"?!1:Yt),R.pin=p,Ne=Ee.core.getCache(p),Ne.spacer?ne=Ne.pinState:(T&&(T=$n(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ne.spacerIsNative=!!T,T&&(Ne.spacerState=Fc(T))),Ne.spacer=ge=T||Tt.createElement("div"),ge.classList.add("pin-spacer"),l&&ge.classList.add("pin-spacer-"+l),Ne.pinState=ne=Fc(p)),i.force3D!==!1&&Ee.set(p,{force3D:!0}),R.spacer=ge=Ne.spacer,Ye=ki(p),lt=Ye[x+E.os2],fe=Ee.getProperty(p),Re=Ee.quickSetter(p,E.a,Jt),Wh(p,ge,Ye),ie=Fc(p)),N){b=to(N)?tx(N,nx):nx,V=Oc("scroller-start",l,U,E,b,0),Be=Oc("scroller-end",l,U,E,b,0,V),he=V["offset"+E.op.d2];var ft=$n(bs(U,"content")||U);Ue=this.markerStart=Oc("start",l,ft,E,b,he,0,M),xe=this.markerEnd=Oc("end",l,ft,E,b,he,0,M),M&&(Ie=Ee.quickSetter([Ue,xe],E.a,Jt)),!F&&!(Sr.length&&bs(U,"fixedMarkers")===!0)&&(GL(L?pt:U),Ee.set([V,Be],{force3D:!0}),je=Ee.quickSetter(V,E.a,Jt),ye=Ee.quickSetter(Be,E.a,Jt))}if(M){var Ce=M.vars.onUpdate,Me=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Ce&&Ce.apply(M,Me||[])})}if(R.previous=function(){return Qe[Qe.indexOf(R)-1]},R.next=function(){return Qe[Qe.indexOf(R)+1]},R.revert=function(oe,ze){if(!ze)return R.kill(!0);var Fe=oe!==!1||!R.enabled,$e=wn;Fe!==R.isReverted&&(Fe&&(ue=Math.max(de(),R.scroll.rec||0),me=R.progress,ke=r&&r.progress()),Ue&&[Ue,xe,V,Be].forEach(function(Nt){return Nt.style.display=Fe?"none":"block"}),Fe&&(wn=R,R.update(Fe)),p&&(!w||!R.isActive)&&(Fe?YL(p,ge,ne):Wh(p,ge,ki(p),Pe)),Fe||R.update(Fe),wn=$e,R.isReverted=Fe)},R.refresh=function(oe,ze,Fe,$e){if(!((wn||!R.enabled)&&!ze)){if(p&&oe&&Wi){ln(n,"scrollEnd",SE);return}!Hn&&$&&$(R),wn=R,De.tween&&!Fe&&(De.tween.kill(),De.tween=0),_e&&_e.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Nt=Q(),et=q(),Mt=M?M.duration():vr(U,E),Zt=z<=.01||!z,At=0,Et=$e||0,mt=to(Fe)?Fe.end:i.end,li=i.endTrigger||h,C=to(Fe)?Fe.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),O=R.pinnedContainer=i.pinnedContainer&&$n(i.pinnedContainer,R),Y=h&&Math.max(0,Qe.indexOf(R))||0,W=Y,B,ce,Te,He,we,be,Ge,Ke,Pt,Qt,_t,Un,vt;for(N&&to(Fe)&&(Un=Ee.getProperty(V,E.p),vt=Ee.getProperty(Be,E.p));W-- >0;)be=Qe[W],be.end||be.refresh(0,1)||(wn=R),Ge=be.pin,Ge&&(Ge===h||Ge===p||Ge===O)&&!be.isReverted&&(Qt||(Qt=[]),Qt.unshift(be),be.revert(!0,!0)),be!==Qe[W]&&(Y--,W--);for(Pn(C)&&(C=C(R)),C=Zv(C,"start",R),Xe=ox(C,h,Nt,E,de(),Ue,V,R,et,k,F,Mt,M,R._startClamp&&"_startClamp")||(p?-.001:0),Pn(mt)&&(mt=mt(R)),hi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(hi(C)?C.split(" ")[0]:"")+mt:(At=rf(mt.substr(2),Nt),mt=hi(C)?C:(M?Ee.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Xe):Xe)+At,li=h)),mt=Zv(mt,"end",R),ve=Math.max(Xe,ox(mt||(li?"100% 0":Mt),li,Nt,E,de()+At,xe,Be,R,et,k,F,Mt,M,R._endClamp&&"_endClamp"))||-.001,At=0,W=Y;W--;)be=Qe[W]||{},Ge=be.pin,Ge&&be.start-be._pinPush<=Xe&&!M&&be.end>0&&(B=be.end-(R._startClamp?Math.max(0,be.start):be.start),(Ge===h&&be.start-be._pinPush<Xe||Ge===O)&&isNaN(C)&&(At+=B*(1-be.progress)),Ge===p&&(Et+=B));if(Xe+=At,ve+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!Hn&&(R._endClamp=ve||-.001,ve=Math.min(ve,vr(U,E))),z=ve-Xe||(Xe-=.01)&&.001,Zt&&(me=Ee.utils.clamp(0,1,Ee.utils.normalize(Xe,ve,ue))),R._pinPush=Et,Ue&&At&&(B={},B[E.a]="+="+At,O&&(B[E.p]="-="+de()),Ee.set([Ue,xe],B)),p&&!(_m&&R.end>=vr(U,E)))B=ki(p),He=E===tn,Te=de(),Ve=parseFloat(fe(E.a))+Et,!Mt&&ve>1&&(_t=(L?Tt.scrollingElement||mi:U).style,_t={style:_t,value:_t["overflow"+E.a.toUpperCase()]},L&&ki(pt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(_t.style["overflow"+E.a.toUpperCase()]="scroll")),Wh(p,ge,B),ie=Fc(p),ce=Ur(p,!0),Ke=F&&Os(U,He?Wn:tn)(),x?(Pe=[x+E.os2,z+Et+Jt],Pe.t=ge,W=x===Yt?Kf(p,E)+z+Et:0,W&&(Pe.push(E.d,W+Jt),ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=W+Jt)),Na(Pe),O&&Qe.forEach(function(qe){qe.pin===O&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),F&&de(ue)):(W=Kf(p,E),W&&ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=W+Jt)),F&&(we={top:ce.top+(He?Te-Xe:Ke)+Jt,left:ce.left+(He?Ke:Te-Xe)+Jt,boxSizing:"border-box",position:"fixed"},we[xo]=we["max"+Za]=Math.ceil(ce.width)+Jt,we[yo]=we["max"+j_]=Math.ceil(ce.height)+Jt,we[Fi]=we[Fi+Ql]=we[Fi+Kl]=we[Fi+Jl]=we[Fi+Zl]="0",we[Yt]=B[Yt],we[Yt+Ql]=B[Yt+Ql],we[Yt+Kl]=B[Yt+Kl],we[Yt+Jl]=B[Yt+Jl],we[Yt+Zl]=B[Yt+Zl],te=$L(ne,we,w),Hn&&de(0)),r?(Pt=r._initted,zh(1),r.render(r.duration(),!0,!0),ee=fe(E.a)-Ve+z+Et,Ae=Math.abs(z-ee)>1,F&&Ae&&te.splice(te.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),zh(0)):ee=z,_t&&(_t.value?_t.style["overflow"+E.a.toUpperCase()]=_t.value:_t.style.removeProperty("overflow-"+E.a));else if(h&&de()&&!M)for(ce=h.parentNode;ce&&ce!==pt;)ce._pinOffset&&(Xe-=ce._pinOffset,ve-=ce._pinOffset),ce=ce.parentNode;Qt&&Qt.forEach(function(qe){return qe.revert(!1,!0)}),R.start=Xe,R.end=ve,We=G=Hn?ue:de(),!M&&!Hn&&(We<ue&&de(ue),R.scroll.rec=0),R.revert(!1,!0),se=An(),le&&(K=-1,le.restart(!0)),wn=0,r&&I&&(r._initted||ke)&&r.progress()!==ke&&r.progress(ke||0,!0).render(r.time(),!0,!0),(Zt||me!==R.progress||M||_||r&&!r._initted)&&(r&&!I&&(r._initted||me||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Xe<-.001&&!me?Ee.utils.normalize(Xe,ve,0):me,!0),R.progress=Zt||(We-Xe)/z===me?0:me),p&&x&&(ge._pinOffset=Math.round(R.progress*ee)),_e&&_e.invalidate(),isNaN(Un)||(Un-=Ee.getProperty(V,E.p),vt-=Ee.getProperty(Be,E.p),kc(V,E,Un),kc(Ue,E,Un-($e||0)),kc(Be,E,vt),kc(xe,E,vt-($e||0))),Zt&&!Hn&&R.update(),c&&!Hn&&!A&&(A=!0,c(R),A=!1)}},R.getVelocity=function(){return(de()-G)/(An()-Cl)*1e3||0},R.endAnimation=function(){xl(R.callbackAnimation),r&&(_e?_e.progress(1):r.paused()?I||xl(r,R.direction<0,1):xl(r,r.reversed()))},R.labelToScroll=function(oe){return r&&r.labels&&(Xe||R.refresh()||Xe)+r.labels[oe]/r.duration()*z||0},R.getTrailing=function(oe){var ze=Qe.indexOf(R),Fe=R.direction>0?Qe.slice(0,ze).reverse():Qe.slice(ze+1);return(hi(oe)?Fe.filter(function($e){return $e.vars.preventOverlaps===oe}):Fe).filter(function($e){return R.direction>0?$e.end<=Xe:$e.start>=ve})},R.update=function(oe,ze,Fe){if(!(M&&!Fe&&!oe)){var $e=Hn===!0?ue:R.scroll(),Nt=oe?0:($e-Xe)/z,et=Nt<0?0:Nt>1?1:Nt||0,Mt=R.progress,Zt,At,Et,mt,li,C,O,Y;if(ze&&(G=We,We=M?de():$e,y&&(ht=Je,Je=r&&!I?r.totalProgress():et)),m&&p&&!wn&&!Lc&&Wi&&(!et&&Xe<$e+($e-G)/(An()-Cl)*m?et=1e-4:et===1&&ve>$e+($e-G)/(An()-Cl)*m&&(et=.9999)),et!==Mt&&R.enabled){if(Zt=R.isActive=!!et&&et<1,At=!!Mt&&Mt<1,C=Zt!==At,li=C||!!et!=!!Mt,R.direction=et>Mt?1:-1,R.progress=et,li&&!wn&&(Et=et&&!Mt?0:et===1?1:Mt===1?2:3,I&&(mt=!C&&j[Et+1]!=="none"&&j[Et+1]||j[Et],Y=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(C||Y)&&(Y||d||!r)&&(Pn(S)?S(R):R.getTrailing(S).forEach(function(Te){return Te.endAnimation()})),I||(_e&&!wn&&!Lc?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",et,r._tTime/r._tDur):(_e.vars.totalProgress=et,_e.invalidate().restart())):r&&r.totalProgress(et,!!(wn&&(se||oe)))),p){if(oe&&x&&(ge.style[x+E.os2]=lt),!F)Re(bl(Ve+ee*et));else if(li){if(O=!oe&&et>Mt&&ve+1>$e&&$e+1>=vr(U,E),w)if(!oe&&(Zt||O)){var W=Ur(p,!0),B=$e-Xe;ax(p,pt,W.top+(E===tn?B:0)+Jt,W.left+(E===tn?0:B)+Jt)}else ax(p,ge);Na(Zt||O?te:ie),Ae&&et<1&&Zt||Re(Ve+(et===1&&!O?ee:0))}}y&&!De.tween&&!wn&&!Lc&&le.restart(!0),a&&(C||v&&et&&(et<1||!Bh))&&Cu(a.targets).forEach(function(Te){return Te.classList[Zt||v?"add":"remove"](a.className)}),o&&!I&&!oe&&o(R),li&&!wn?(I&&(Y&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(R)),(C||!Bh)&&(u&&C&&Gh(R,u),H[Et]&&Gh(R,H[Et]),v&&(et===1?R.kill(!1,1):H[Et]=0),C||(Et=et===1?1:3,H[Et]&&Gh(R,H[Et]))),P&&!Zt&&Math.abs(R.getVelocity())>(Pl(P)?P:2500)&&(xl(R.callbackAnimation),_e?_e.progress(1):xl(r,mt==="reverse"?1:!et,1))):I&&o&&!wn&&o(R)}if(ye){var ce=M?$e/M.duration()*(M._caScrollDist||0):$e;je(ce+(V._isFlipped?1:0)),ye(ce)}Ie&&Ie(-$e/M.duration()*(M._caScrollDist||0))}},R.enable=function(oe,ze){R.enabled||(R.enabled=!0,ln(U,"resize",Ll),L||ln(U,"scroll",ea),$&&ln(n,"refreshInit",$),oe!==!1&&(R.progress=me=0,We=G=K=de()),ze!==!1&&R.refresh())},R.getTween=function(oe){return oe&&De?De.tween:_e},R.setPositions=function(oe,ze,Fe,$e){if(M){var Nt=M.scrollTrigger,et=M.duration(),Mt=Nt.end-Nt.start;oe=Nt.start+Mt*oe/et,ze=Nt.start+Mt*ze/et}R.refresh(!1,!1,{start:Qv(oe,Fe&&!!R._startClamp),end:Qv(ze,Fe&&!!R._endClamp)},$e),R.update()},R.adjustPinSpacing=function(oe){if(Pe&&oe){var ze=Pe.indexOf(E.d)+1;Pe[ze]=parseFloat(Pe[ze])+oe+Jt,Pe[1]=parseFloat(Pe[1])+oe+Jt,Na(Pe)}},R.disable=function(oe,ze){if(oe!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,ze||_e&&_e.pause(),ue=0,Ne&&(Ne.uncache=1),$&&an(n,"refreshInit",$),le&&(le.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!L)){for(var Fe=Qe.length;Fe--;)if(Qe[Fe].scroller===U&&Qe[Fe]!==R)return;an(U,"resize",Ll),L||an(U,"scroll",ea)}},R.kill=function(oe,ze){R.disable(oe,ze),_e&&!ze&&_e.kill(),l&&delete gm[l];var Fe=Qe.indexOf(R);Fe>=0&&Qe.splice(Fe,1),Fe===Bn&&of>0&&Bn--,Fe=0,Qe.forEach(function($e){return $e.scroller===R.scroller&&(Fe=1)}),Fe||Hn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,oe&&r.revert({kill:!1}),ze||r.kill()),Ue&&[Ue,xe,V,Be].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),eu===R&&(eu=0),p&&(Ne&&(Ne.uncache=1),Fe=0,Qe.forEach(function($e){return $e.pin===p&&Fe++}),Fe||(Ne.spacer=0)),i.onKill&&i.onKill(R)},Qe.push(R),R.enable(!1,!1),ot&&ot(R),r&&r.add&&!z){var Le=R.update;R.update=function(){R.update=Le,it.cache++,Xe||ve||R.refresh()},Ee.delayedCall(.01,R.update),z=.01,Xe=ve=0}else R.refresh();p&&jL()},n.register=function(i){return ta||(Ee=i||mE(),pE()&&window.document&&n.enable(),ta=Rl),ta},n.defaults=function(i){if(i)for(var r in i)Ic[r]=i[r];return Ic},n.disable=function(i,r){Rl=0,Qe.forEach(function(o){return o[r?"kill":"disable"](i)}),an(tt,"wheel",ea),an(Tt,"scroll",ea),clearInterval(Pc),an(Tt,"touchcancel",dr),an(pt,"touchstart",dr),Nc(an,Tt,"pointerdown,touchstart,mousedown",Jv),Nc(an,Tt,"pointerup,touchend,mouseup",ex),$f.kill(),Dc(an);for(var s=0;s<it.length;s+=3)Uc(an,it[s],it[s+1]),Uc(an,it[s],it[s+2])},n.enable=function(){if(tt=window,Tt=document,mi=Tt.documentElement,pt=Tt.body,Ee&&(Cu=Ee.utils.toArray,ql=Ee.utils.clamp,mm=Ee.core.context||dr,zh=Ee.core.suppressOverwrites||dr,G_=tt.history.scrollRestoration||"auto",vm=tt.pageYOffset||0,Ee.core.globals("ScrollTrigger",n),pt)){Rl=1,Da=document.createElement("div"),Da.style.height="100vh",Da.style.position="absolute",wE(),zL(),Xt.register(Ee),n.isTouch=Xt.isTouch,ts=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pm=Xt.isTouch===1,ln(tt,"wheel",ea),H_=[tt,Tt,mi,pt],Ee.matchMedia?(n.matchMedia=function(u){var c=Ee.matchMedia(),d;for(d in u)c.add(d,u[d]);return c},Ee.addEventListener("matchMediaInit",function(){EE(),q_()}),Ee.addEventListener("matchMediaRevert",function(){return ME()}),Ee.addEventListener("matchMedia",function(){lo(0,1),Lo("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return Vh(),Vh})):console.warn("Requires GSAP 3.11.0 or later"),Vh(),ln(Tt,"scroll",ea);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ur(pt),tn.m=Math.round(a.top+tn.sc())||0,Wn.m=Math.round(a.left+Wn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),Pc=setInterval(ix,250),Ee.delayedCall(.5,function(){return Lc=0}),ln(Tt,"touchcancel",dr),ln(pt,"touchstart",dr),Nc(ln,Tt,"pointerdown,touchstart,mousedown",Jv),Nc(ln,Tt,"pointerup,touchend,mouseup",ex),hm=Ee.utils.checkPrefix("transform"),af.push(hm),ta=An(),$f=Ee.delayedCall(.2,lo).pause(),na=[Tt,"visibilitychange",function(){var u=tt.innerWidth,c=tt.innerHeight;Tt.hidden?($v=u,Kv=c):($v!==u||Kv!==c)&&Ll()},Tt,"DOMContentLoaded",lo,tt,"load",lo,tt,"resize",Ll],Dc(ln),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<it.length;l+=3)Uc(an,it[l],it[l+1]),Uc(an,it[l],it[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Bh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Pc)||(Pc=r)&&setInterval(ix,r),"ignoreMobileResize"in i&&(pm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Dc(an)||Dc(ln,i.autoRefreshEvents||"none"),fE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=$n(i),o=it.indexOf(s),a=bo(s);~o&&it.splice(o,a?6:2),r&&(a?Sr.unshift(tt,r,pt,r,mi,r):Sr.unshift(s,r))},n.clearMatchMedia=function(i){Qe.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(hi(i)?$n(i):i).getBoundingClientRect(),a=o[s?xo:yo]*r||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},n.positionInViewport=function(i,r,s){hi(i)&&(i=$n(i));var o=i.getBoundingClientRect(),a=o[s?xo:yo],l=r==null?a/2:r in Zf?Zf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},n.killAll=function(i){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Po.killAll||[];Po={},r.forEach(function(s){return s()})}},n}();rt.version="3.14.2";rt.saveStyles=function(n){return n?Cu(n).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),mm())}}):fi};rt.revert=function(n,e){return q_(!n,e)};rt.create=function(n,e){return new rt(n,e)};rt.refresh=function(n){return n?Ll(!0):(ta||rt.register())&&lo(!0)};rt.update=function(n){return++it.cache&&Br(n===!0?2:0)};rt.clearScrollMemory=TE;rt.maxScroll=function(n,e){return vr(n,e?Wn:tn)};rt.getScrollFunc=function(n,e){return Os($n(n),e?Wn:tn)};rt.getById=function(n){return gm[n]};rt.getAll=function(){return Qe.filter(function(n){return n.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Wi};rt.snapDirectional=Y_;rt.addEventListener=function(n,e){var t=Po[n]||(Po[n]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(n,e){var t=Po[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};rt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],h=[],p=Ee.delayedCall(r,function(){c(d,h),d=[],h=[]}).pause();return function(x){d.length||p.restart(!0),d.push(x.trigger),h.push(x),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),ln(rt,"refresh",function(){return s=e.batchMax()})),Cu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(rt.create(u))}),t};var ux=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Xh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===mi&&n(pt,t)},zc={auto:1,scroll:1},ZL=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(zc[(l=ki(s)).overflowY]||zc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!bo(s)&&(zc[(l=ki(s)).overflowY]||zc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},CE=function(e,t,i,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&ZL,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&ln(Tt,Xt.eventTypes[0],fx,!1,!0)},onDisable:function(){return an(Tt,Xt.eventTypes[0],fx,!0)}})},QL=/(input|label|select|textarea)/i,cx,fx=function(e){var t=QL.test(e.target.tagName);(t||cx)&&(e._gsapAllow=!0,cx=t)},JL=function(e){to(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=$n(e.target)||mi,c=Ee.core.globals().ScrollSmoother,d=c&&c.get(),h=ts&&(e.content&&$n(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Os(u,tn),x=Os(u,Wn),_=1,m=(Xt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,f=0,g=Pn(r)?function(){return r(a)}:function(){return r||2.8},v,y,w=CE(u,e.type,!0,s),T=function(){return y=!1},M=dr,P=dr,S=function(){l=vr(u,tn),P=ql(ts?1:0,l),i&&(M=ql(0,vr(u,Wn))),v=So},E=function(){h._gsap.y=bl(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},I=function(){if(y){requestAnimationFrame(T);var N=bl(a.deltaY/2),k=P(p.v-N);if(h&&k!==p.v+p.offset){p.offset=k-p.v;var R=bl((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",p.cacheID=it.cache,Br()}return!0}p.offset&&E(),y=!0},U,Z,L,F,H=function(){S(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return h&&Ee.set(h,{y:"+=0"}),e.ignoreCheck=function(j){return ts&&j.type==="touchmove"&&I()||_>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){y=!1;var j=_;_=bl((tt.visualViewport&&tt.visualViewport.scale||1)/m),U.pause(),j!==_&&Xh(u,_>1.01?!0:i?!1:"x"),Z=x(),L=p(),S(),v=So},e.onRelease=e.onGestureStart=function(j,N){if(p.offset&&E(),!N)F.restart(!0);else{it.cache++;var k=g(),R,$;i&&(R=x(),$=R+k*.05*-j.velocityX/.227,k*=ux(x,R,$,vr(u,Wn)),U.vars.scrollX=M($)),R=p(),$=R+k*.05*-j.velocityY/.227,k*=ux(p,R,$,vr(u,tn)),U.vars.scrollY=P($),U.invalidate().duration(k).play(.01),(ts&&U.vars.scrollY>=l||R>=l-1)&&Ee.to({},{onUpdate:H,duration:k})}o&&o(j)},e.onWheel=function(){U._ts&&U.pause(),An()-f>1e3&&(v=0,f=An())},e.onChange=function(j,N,k,R,$){if(So!==v&&S(),N&&i&&x(M(R[2]===N?Z+(j.startX-j.x):x()+N-R[1])),k){p.offset&&E();var Q=$[2]===k,q=Q?L+j.startY-j.y:p()+k-$[1],K=P(q);Q&&q!==K&&(L+=K-q),p(K)}(k||N)&&Br()},e.onEnable=function(){Xh(u,i?!1:"x"),rt.addEventListener("refresh",H),ln(tt,"resize",H),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=x.smooth=!1),w.enable()},e.onDisable=function(){Xh(u,!0),an(tt,"resize",H),rt.removeEventListener("refresh",H),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=ts,ts&&!p()&&p(1),ts&&Ee.ticker.add(dr),F=a._dc,U=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:AE(p,p(),function(){return U.pause()})},onUpdate:Br,onComplete:F.vars.onComplete}),a};rt.sort=function(n){if(Pn(n))return Qe.sort(n);var e=tt.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),Qe.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};rt.observe=function(n){return new Xt(n)};rt.normalizeScroll=function(n){if(typeof n>"u")return kn;if(n===!0&&kn)return kn.enable();if(n===!1){kn&&kn.kill(),kn=n;return}var e=n instanceof Xt?n:JL(n);return kn&&kn.target===e.target&&kn.kill(),bo(e.target)&&(kn=e),e};rt.core={_getVelocityProp:dm,_inputObserver:CE,_scrollers:it,_proxies:Sr,bridge:{ss:function(){Wi||Lo("scrollStart"),Wi=An()},ref:function(){return wn}}};mE()&&Ee.registerPlugin(rt);Rn.registerPlugin(rt);const eD=()=>{const n=Ln.useRef(null);return Ln.useEffect(()=>{const e=new bL;e.fog=new k_(328965,.03);const t=new Oi(45,window.innerWidth/window.innerHeight,.1,100);t.position.z=8,t.position.y=0;const i=new eE({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current&&n.current.appendChild(i.domElement);const r=new Al,s=new Yf(1.5,1),o=new jf({color:4872025,wireframe:!0,transparent:!0,opacity:.3}),a=new gr(s,o);r.add(a);const u=new Yf(2.2,2).attributes.position.array,c=new lr;c.setAttribute("position",new or(u,3));const d=new tE({size:.03,color:13217191}),h=new PL(c,d);r.add(h);const p=new B_(.8,32,32),x=new jf({color:0}),_=new gr(p,x);r.add(_),e.add(r);const m=new UL(16777215,.5);e.add(m);const f=new NL(16777215,2);f.position.set(5,5,5),e.add(f);let g=0,v=0;const y=P=>{g=(P.clientX-window.innerWidth/2)*.001,v=(P.clientY-window.innerHeight/2)*.001};window.addEventListener("mousemove",y);const w=Rn.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:1.5}});w.to(r.rotation,{x:1,y:2,duration:10},0).to(r.position,{x:2,z:-2,duration:10},0).to(t.position,{z:6,duration:10},0),w.to(r.rotation,{x:3,y:0,duration:10},10).to(r.position,{x:-2.5,y:1,duration:10},10).to(a.material,{opacity:.1,duration:5},10),w.to(r.position,{x:0,y:0,z:0,duration:10},20).to(h.material,{size:.08,color:16777215,duration:5},20).to(r.rotation,{y:4,duration:10},20);const T=()=>{n.current&&(requestAnimationFrame(T),r.rotation.x+=(v-r.rotation.x)*.05,r.rotation.y+=(g-r.rotation.y)*.05,a.rotation.z+=.002,h.rotation.y-=.001,i.render(e,t))};T();const M=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M),window.removeEventListener("mousemove",y),n.current&&n.current.contains(i.domElement)&&n.current.removeChild(i.domElement),w.kill()}},[]),J.jsx("div",{ref:n,className:"fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none"})},ms=({children:n,href:e})=>{const t=Ln.useRef(null);return Ln.useEffect(()=>{const i=t.current,r=Rn.quickTo(i,"x",{duration:.4,ease:"power3"}),s=Rn.quickTo(i,"y",{duration:.4,ease:"power3"}),o=l=>{const{clientX:u,clientY:c}=l,{height:d,width:h,left:p,top:x}=i.getBoundingClientRect(),_=u-(p+h/2),m=c-(x+d/2);r(_*.3),s(m*.3)},a=()=>{r(0),s(0)};return i.addEventListener("mousemove",o),i.addEventListener("mouseleave",a),()=>{i.removeEventListener("mousemove",o),i.removeEventListener("mouseleave",a)}},[]),J.jsx("a",{ref:t,href:e,className:"interactive text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors py-2 px-4 block",children:n})},tD=()=>J.jsxs("nav",{className:"fixed top-0 left-0 w-full z-40 py-8 px-8 flex justify-between items-start mix-blend-difference",children:[J.jsxs("div",{className:"flex flex-col gap-1",children:[J.jsx("span",{className:"text-white text-sm font-helvetica tracking-wide uppercase interactive",children:"Akash Popat."}),J.jsx("span",{className:"text-[10px] text-zinc-400 font-mono",children:"Design Portfolio"})]}),J.jsxs("div",{className:"hidden md:flex flex-col gap-1 items-end",children:[J.jsx(ms,{href:"#writing",children:"Recent Writing"}),J.jsx(ms,{href:"#work",children:"Projects"}),J.jsx(ms,{href:"#experience",children:"Experience"}),J.jsx(ms,{href:"#contact",children:"Contact"})]})]}),nD=()=>{const n=Ln.useRef(null);return Ln.useLayoutEffect(()=>{const e=Rn.context(()=>{Rn.from(".hero-line",{y:150,skewY:7,duration:1.8,stagger:.1,ease:"power4.out",delay:.2}),Rn.from(".hero-sub",{opacity:0,y:20,duration:1,delay:1,ease:"power2.out"})},n);return()=>e.revert()},[]),J.jsxs("section",{ref:n,className:"min-h-screen flex flex-col justify-start pt-28 md:pt-36 pb-section px-6 md:px-12 max-w-screen-2xl mx-auto relative",children:[J.jsxs("div",{className:"relative z-10 mix-blend-screen space-y-2",children:[J.jsx("div",{className:"clip-text-reveal",children:J.jsx("h1",{className:"hero-line text-[12vw] md:text-[8vw] font-departure text-white tracking-tighter leading-[0.85] text-glow",children:"Product Designer"})}),J.jsx("div",{className:"clip-text-reveal",children:J.jsx("h1",{className:"hero-line text-[12vw] md:text-[8vw] font-chakra text-zinc-600 tracking-tighter leading-[0.85]",children:"Creative Technologist"})}),J.jsx("div",{className:"",children:J.jsx("h1",{className:"hero-line text-[12vw] md:text-[8vw] font-medium text-white tracking-tighter leading-[0.85] text-glow"})})]}),J.jsxs("div",{className:"hero-sub mt-12 md:mt-16 max-w-2xl",children:[J.jsxs("p",{className:"text-lg font-chakra font-normal leading-relaxed max-w text-glow",children:["Hi, I am Akash. I am a designer who is all about solving complex problems, reverse-engineering things, and taking extensive notes. I view AI as a collaborative, creative partner that requires human oversight; my foundational knowledge is essential for shaping its output and steering the underlying conceptual framework.",J.jsx("br",{}),J.jsx("br",{}),"Please check out:"]}),J.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3",children:[J.jsxs(ms,{href:"#",children:["Resume",J.jsx("span",{className:"inline-block align-middle ml-1","aria-hidden":"true",children:J.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",className:"inline",xmlns:"http://www.w3.org/2000/svg",children:J.jsx("path",{d:"M7 13L13 7M13 7H7M13 7V13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),J.jsxs(ms,{href:"#",children:["About Me",J.jsx("span",{className:"inline-block align-middle ml-1","aria-hidden":"true",children:J.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",className:"inline",xmlns:"http://www.w3.org/2000/svg",children:J.jsx("path",{d:"M7 13L13 7M13 7H7M13 7V13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),J.jsxs(ms,{href:"https://akashtattva.github.io/",children:["Notes",J.jsx("span",{className:"inline-block align-middle ml-1","aria-hidden":"true",children:J.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",className:"inline",xmlns:"http://www.w3.org/2000/svg",children:J.jsx("path",{d:"M7 13L13 7M13 7H7M13 7V13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),J.jsxs(ms,{href:"https://akashspace.substack.com/",children:["Blog",J.jsx("span",{className:"inline-block align-middle ml-1","aria-hidden":"true",children:J.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",className:"inline",xmlns:"http://www.w3.org/2000/svg",children:J.jsx("path",{d:"M7 13L13 7M13 7H7M13 7V13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})},iD=()=>{const n=[{title:"Designing with AI as a Collaborative Partner",meta:"Substack · Essay",href:"https://akashspace.substack.com/"},{title:"Notes from the Infinite Canvas",meta:"Substack · Notes",href:"https://akashspace.substack.com/"},{title:"Building Tools for Thinking with WebGL",meta:"Substack · Article",href:"https://akashspace.substack.com/"},{title:"Why I Take Obsessive Notes",meta:"Substack · Reflection",href:"https://akashspace.substack.com/"}];return J.jsx("section",{id:"writing",className:"py-section px-6 md:px-12 max-w-screen-2xl mx-auto",children:J.jsxs("div",{className:"max-w-4xl",children:[J.jsx("h2",{className:"text-5xl md:text-7xl lg:text-8xl font-departure text-zinc-800 tracking-tighter mb-8 leading-none select-none opacity-90",children:"Recent Writing"}),J.jsx("div",{className:"rounded-xl border border-zinc-900/80 overflow-hidden bg-zinc-950/40",children:n.map((e,t)=>J.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",className:`interactive group block transition-colors duration-500 ${t<n.length-1?"border-b border-zinc-900 hover:bg-zinc-900/20":"hover:bg-zinc-900/20"}`,children:J.jsxs("div",{className:"px-4 py-4 flex items-center justify-between gap-4",children:[J.jsxs("div",{children:[J.jsx("p",{className:"text-sm md:text-base text-zinc-300 group-hover:text-white font-helvetica",children:e.title}),J.jsx("p",{className:"text-[11px] text-zinc-500 font-mono mt-1 uppercase tracking-widest",children:e.meta})]}),J.jsx("span",{className:"text-xs text-zinc-600 group-hover:text-zinc-300 font-mono uppercase tracking-widest",children:"Read"})]})},t))})]})})},rD=({name:n,category:e,year:t,index:i,isOpen:r,onToggle:s})=>{const o=`project-panel-${i}`,a=`project-header-${i}`,[l,u]=Ln.useState(0),c=d=>{const h=d.target,p=h.scrollWidth-h.clientWidth;if(p<=0){u(0);return}u(h.scrollLeft/p)};return J.jsxs("div",{className:"interactive group relative border-t border-zinc-900 cursor-none",children:[J.jsx("button",{type:"button",id:a,"aria-expanded":r,"aria-controls":o,onClick:s,className:"w-full py-10 md:py-16 text-left focus:outline-none",children:J.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-baseline px-4 relative z-10 hover:bg-transparent",children:[J.jsxs("div",{className:"flex items-baseline gap-8 md:gap-16",children:[J.jsxs("span",{className:"text-xs font-mono text-zinc-700 group-hover:text-zinc-400 transition-colors",children:["0",i+1]}),J.jsx("h3",{className:"text-4xl md:text-6xl text-zinc-400 group-hover:text-white font-helvetica font-normal tracking-tighter transition-all duration-300 group-hover:translate-x-4",children:n})]}),J.jsxs("div",{className:"mt-4 md:mt-0 flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0",children:[J.jsx("span",{className:"text-sm text-zinc-500 font-mono",children:e}),J.jsx("span",{className:"text-xs text-white border border-white/20 px-3 py-1 rounded-full",children:t})]})]})}),J.jsx("div",{id:o,role:"region","aria-labelledby":a,className:`overflow-hidden transition-all duration-300 bg-zinc-950/60 border-t border-zinc-900/60 ${r?"max-h-[1000px] opacity-100":"max-h-0 opacity-0"}`,children:J.jsxs("div",{className:"px-4 pt-8 pb-10 md:pb-12",children:[J.jsx("p",{className:"text-xs font-mono uppercase tracking-widest text-zinc-500",children:"Designs — scroll horizontally —"}),J.jsxs("div",{className:"mt-4 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory",onScroll:c,children:[J.jsx("div",{className:"min-w-[70%] md:min-w-[320px] lg:min-w-[420px] aspect-video rounded-lg border border-zinc-800 bg-zinc-900/40 snap-start shrink-0"}),J.jsx("div",{className:"min-w-[70%] md:min-w-[320px] lg:min-w-[420px] aspect-video rounded-lg border border-zinc-800 bg-zinc-900/40 snap-start shrink-0"}),J.jsx("div",{className:"min-w-[70%] md:min-w-[320px] lg:min-w-[420px] aspect-video rounded-lg border border-zinc-800 bg-zinc-900/40 snap-start shrink-0"}),J.jsx("div",{className:"min-w-[70%] md:min-w-[320px] lg:min-w-[420px] aspect-video rounded-lg border border-zinc-800 bg-zinc-900/40 snap-start shrink-0"})]}),J.jsx("div",{className:"mt-3 h-px bg-zinc-900/80 overflow-hidden",children:J.jsx("div",{className:"h-full bg-zinc-500 transition-all duration-200",style:{width:`${Math.max(l*100,8)}%`}})})]})})]})},sD=()=>{const n=Ln.useRef(null),[e,t]=Ln.useState(null);Ln.useLayoutEffect(()=>{const s=Rn.context(()=>{rt.create({trigger:n.current,start:"top bottom",onEnter:()=>Rn.to(n.current,{opacity:1,y:0,duration:1})})},n);return()=>s.revert()},[]);const i=[{name:"Chronos OS",category:"Spatial Interface • CLICK TO OPEN",year:"2024"},{name:"Nebula AI",category:"Generative Engine • CLICK TO OPEN",year:"2023"},{name:"Vanguard",category:"Fintech 3D Viz • CLICK TO OPEN",year:"2023"},{name:"Lumina",category:"WebGL Experience • CLICK TO OPEN",year:"2022"}],r=s=>{t(o=>o===s?null:s)};return J.jsxs("section",{id:"work",ref:n,className:"py-section px-6 max-w-screen-2xl mx-auto opacity-0 translate-y-20",children:[J.jsx("div",{children:J.jsx("h2",{className:"text-5xl md:text-7xl lg:text-8xl font-departure text-zinc-800 tracking-tighter mb-8 leading-none select-none opacity-90",children:"Selected Works"})}),J.jsx("br",{}),J.jsx("div",{className:"flex flex-col",children:i.map((s,o)=>J.jsx(rD,{...s,index:o,isOpen:e===o,onToggle:()=>r(o)},o))})]})},oD=()=>J.jsx("section",{id:"experience",className:"py-section px-6 max-w-screen-xl mx-auto",children:J.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32",children:[J.jsxs("div",{children:[J.jsx("h2",{className:"text-5xl md:text-7xl lg:text-8xl text-zinc-800 font-departure tracking-tighter mb-8 leading-none select-none opacity-90",children:"Experience"}),J.jsx("p",{className:"text-lg font-chakra font-normal leading-relaxed max-w text-glow",children:"Delivering robust, scalable, and beautiful software solutions for industry leaders. Focusing on the intersection of design systems and WebGL."})]}),J.jsx("div",{className:"space-y-12 mt-12 md:mt-0",children:[{company:"Stripe",role:"Senior Creative Engineer",period:"2022 — Present"},{company:"Vercel",role:"Design Engineer",period:"2020 — 2022"},{company:"Agency",role:"WebGL Developer",period:"2018 — 2020"}].map((n,e)=>J.jsxs("div",{className:"group interactive",children:[J.jsxs("div",{className:"flex justify-between items-end border-b border-zinc-900 pb-4 mb-4 font-helvetica group-hover:border-zinc-700 transition-colors",children:[J.jsx("h4",{className:"text-2xl text-white font-helvetica font-normal tracking-tight",children:n.company}),J.jsx("span",{className:"text-xs text-zinc-600 font-mono",children:n.period})]}),J.jsx("p",{className:"text-sm text-zinc-500 font-helvetica font-normal",children:n.role})]},e))})]})}),aD=()=>J.jsxs("section",{id:"contact",className:"min-h-screen flex items-center justify-center px-6 py-section relative overflow-hidden",children:[J.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-zinc-900/20 to-transparent opacity-50 pointer-events-none"}),J.jsxs("div",{className:"text-center relative z-10 max-w-4xl mx-auto",children:[J.jsx("span",{className:"text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 block",children:"happy to chat with interesting people"}),J.jsxs("h2",{className:"text-6xl md:text-9xl text-white font-departure tracking-tighter mb-8 mix-blend-difference",children:["let's build",J.jsx("br",{}),J.jsx("span",{className:"text-zinc-800 font-chakra",children:"something great"})]}),J.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-8 mt-16",children:[J.jsx("a",{href:"mailto:hello@alex.dev",className:"interactive px-12 py-4 bg-white text-black font-medium text-sm rounded-full hover:scale-105 transition-transform duration-300",children:"Email Me"}),J.jsx("a",{href:"#",className:"interactive px-12 py-4 border border-zinc-800 text-zinc-400 font-medium text-sm rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-300",children:"view_resume.pdf"})]})]}),J.jsx("footer",{className:"absolute bottom-8 w-full text-center",children:J.jsx("p",{className:"text-[10px] text-zinc-700 font-mono uppercase tracking-widest",children:"© 2025 Akash Popat. / Portfolio built with React, Tailwind CSS, GSAP, Three.js, Cursor Agent"})})]}),lD=()=>J.jsxs("div",{className:"relative",children:[J.jsx(SA,{}),J.jsx(eD,{}),J.jsx(tD,{}),J.jsxs("main",{className:"relative z-10",children:[J.jsx(nD,{}),J.jsx(iD,{}),J.jsx(sD,{}),J.jsx(oD,{}),J.jsx(aD,{})]})]});jh.createRoot(document.getElementById("root")).render(J.jsx(XE.StrictMode,{children:J.jsx(lD,{})}));
