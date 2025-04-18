(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Rf={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function bS(){if(zg)return vo;zg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return vo.Fragment=e,vo.jsx=i,vo.jsxs=i,vo}var Bg;function AS(){return Bg||(Bg=1,Rf.exports=bS()),Rf.exports}var ne=AS(),Cf={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function RS(){if(Ig)return ie;Ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function M(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=M.prototype;function z(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||y}var N=z.prototype=new _;N.constructor=z,A(N,M.prototype),N.isPureReactComponent=!0;var D=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function I(U,$,vt,xt,Q,pt){return vt=pt.ref,{$$typeof:o,type:U,key:$,ref:vt!==void 0?vt:null,props:pt}}function Z(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var B=/\/+/g;function st(U,$){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):$.toString(36)}function nt(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(nt,nt):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ct(U,$,vt,xt,Q){var pt=typeof U;(pt==="undefined"||pt==="boolean")&&(U=null);var St=!1;if(U===null)St=!0;else switch(pt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(U.$$typeof){case o:case e:St=!0;break;case g:return St=U._init,ct(St(U._payload),$,vt,xt,Q)}}if(St)return Q=Q(U),St=xt===""?"."+st(U,0):xt,D(Q)?(vt="",St!=null&&(vt=St.replace(B,"$&/")+"/"),ct(Q,$,vt,"",function(re){return re})):Q!=null&&(w(Q)&&(Q=Z(Q,vt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(B,"$&/")+"/")+St)),$.push(Q)),1;St=0;var bt=xt===""?".":xt+":";if(D(U))for(var Nt=0;Nt<U.length;Nt++)xt=U[Nt],pt=bt+st(xt,Nt),St+=ct(xt,$,vt,pt,Q);else if(Nt=x(U),typeof Nt=="function")for(U=Nt.call(U),Nt=0;!(xt=U.next()).done;)xt=xt.value,pt=bt+st(xt,Nt++),St+=ct(xt,$,vt,pt,Q);else if(pt==="object"){if(typeof U.then=="function")return ct(ft(U),$,vt,xt,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function P(U,$,vt){if(U==null)return U;var xt=[],Q=0;return ct(U,xt,"","",function(pt){return $.call(vt,pt,Q++)}),xt}function j(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return ie.Children={map:P,forEach:function(U,$,vt){P(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return P(U,function(){$++}),$},toArray:function(U){return P(U,function($){return $})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ie.Component=M,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=z,ie.StrictMode=r,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ie.__COMPILER_RUNTIME={__proto__:null,c:function(U){return G.H.useMemoCache(U)}},ie.cache=function(U){return function(){return U.apply(null,arguments)}},ie.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var xt=A({},U.props),Q=U.key,pt=void 0;if($!=null)for(St in $.ref!==void 0&&(pt=void 0),$.key!==void 0&&(Q=""+$.key),$)!V.call($,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&$.ref===void 0||(xt[St]=$[St]);var St=arguments.length-2;if(St===1)xt.children=vt;else if(1<St){for(var bt=Array(St),Nt=0;Nt<St;Nt++)bt[Nt]=arguments[Nt+2];xt.children=bt}return I(U.type,Q,void 0,void 0,pt,xt)},ie.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ie.createElement=function(U,$,vt){var xt,Q={},pt=null;if($!=null)for(xt in $.key!==void 0&&(pt=""+$.key),$)V.call($,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Q[xt]=$[xt]);var St=arguments.length-2;if(St===1)Q.children=vt;else if(1<St){for(var bt=Array(St),Nt=0;Nt<St;Nt++)bt[Nt]=arguments[Nt+2];Q.children=bt}if(U&&U.defaultProps)for(xt in St=U.defaultProps,St)Q[xt]===void 0&&(Q[xt]=St[xt]);return I(U,pt,void 0,void 0,null,Q)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(U){return{$$typeof:d,render:U}},ie.isValidElement=w,ie.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:j}},ie.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},ie.startTransition=function(U){var $=G.T,vt={};G.T=vt;try{var xt=U(),Q=G.S;Q!==null&&Q(vt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(yt,q)}catch(pt){q(pt)}finally{G.T=$}},ie.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ie.use=function(U){return G.H.use(U)},ie.useActionState=function(U,$,vt){return G.H.useActionState(U,$,vt)},ie.useCallback=function(U,$){return G.H.useCallback(U,$)},ie.useContext=function(U){return G.H.useContext(U)},ie.useDebugValue=function(){},ie.useDeferredValue=function(U,$){return G.H.useDeferredValue(U,$)},ie.useEffect=function(U,$,vt){var xt=G.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(U,$)},ie.useId=function(){return G.H.useId()},ie.useImperativeHandle=function(U,$,vt){return G.H.useImperativeHandle(U,$,vt)},ie.useInsertionEffect=function(U,$){return G.H.useInsertionEffect(U,$)},ie.useLayoutEffect=function(U,$){return G.H.useLayoutEffect(U,$)},ie.useMemo=function(U,$){return G.H.useMemo(U,$)},ie.useOptimistic=function(U,$){return G.H.useOptimistic(U,$)},ie.useReducer=function(U,$,vt){return G.H.useReducer(U,$,vt)},ie.useRef=function(U){return G.H.useRef(U)},ie.useState=function(U){return G.H.useState(U)},ie.useSyncExternalStore=function(U,$,vt){return G.H.useSyncExternalStore(U,$,vt)},ie.useTransition=function(){return G.H.useTransition()},ie.version="19.1.0",ie}var Fg;function Qh(){return Fg||(Fg=1,Cf.exports=RS()),Cf.exports}var ds=Qh(),wf={exports:{}},So={},Df={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function CS(){return Hg||(Hg=1,function(o){function e(P,j){var q=P.length;P.push(j);t:for(;0<q;){var yt=q-1>>>1,U=P[yt];if(0<l(U,j))P[yt]=j,P[q]=U,q=yt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],q=P.pop();if(q!==j){P[0]=q;t:for(var yt=0,U=P.length,$=U>>>1;yt<$;){var vt=2*(yt+1)-1,xt=P[vt],Q=vt+1,pt=P[Q];if(0>l(xt,q))Q<U&&0>l(pt,xt)?(P[yt]=pt,P[Q]=q,yt=Q):(P[yt]=xt,P[vt]=q,yt=vt);else if(Q<U&&0>l(pt,q))P[yt]=pt,P[Q]=q,yt=Q;else break t}}return j}function l(P,j){var q=P.sortIndex-j.sortIndex;return q!==0?q:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,y=!1,A=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function G(P){if(C=!1,D(P),!A)if(i(m)!==null)A=!0,V||(V=!0,st());else{var j=i(p);j!==null&&ct(G,j.startTime-P)}}var V=!1,I=-1,Z=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<Z)}function B(){if(M=!1,V){var P=o.unstable_now();w=P;var j=!0;try{t:{A=!1,C&&(C=!1,z(I),I=-1),y=!0;var q=x;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&R());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var U=yt(v.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){v.callback=U,D(P),j=!0;break e}v===i(m)&&r(m),D(P)}else r(m);v=i(m)}if(v!==null)j=!0;else{var $=i(p);$!==null&&ct(G,$.startTime-P),j=!1}}break t}finally{v=null,x=q,y=!1}j=void 0}}finally{j?st():V=!1}}}var st;if(typeof N=="function")st=function(){N(B)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ft=nt.port2;nt.port1.onmessage=B,st=function(){ft.postMessage(null)}}else st=function(){_(B,0)};function ct(P,j){I=_(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var q=x;x=j;try{return P()}finally{x=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return j()}finally{x=q}},o.unstable_scheduleCallback=function(P,j,q){var yt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?yt+q:yt):q=yt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,P={id:g++,callback:j,priorityLevel:P,startTime:q,expirationTime:U,sortIndex:-1},q>yt?(P.sortIndex=q,e(p,P),i(m)===null&&P===i(p)&&(C?(z(I),I=-1):C=!0,ct(G,q-yt))):(P.sortIndex=U,e(m,P),A||y||(A=!0,V||(V=!0,st()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var j=x;return function(){var q=x;x=j;try{return P.apply(this,arguments)}finally{x=q}}}}(Uf)),Uf}var Gg;function wS(){return Gg||(Gg=1,Df.exports=CS()),Df.exports}var Lf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function DS(){if(Vg)return bn;Vg=1;var o=Qh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},bn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.1.0",bn}var kg;function US(){if(kg)return Lf.exports;kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Lf.exports=DS(),Lf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function LS(){if(Xg)return So;Xg=1;var o=wS(),e=Qh(),i=US();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,E=u.child;E;){if(E===a){S=!0,a=u,s=f;break}if(E===s){S=!0,s=u,a=f;break}E=E.sibling}if(!S){for(E=f.child;E;){if(E===a){S=!0,a=f,s=u;break}if(E===s){S=!0,s=f,a=u;break}E=E.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case G:return"Suspense";case V:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case N:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ft(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return ft(t(n))}catch{}}return null}var ct=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function $(t){return{current:t}}function vt(t){0>U||(t.current=yt[U],yt[U]=null,U--)}function xt(t,n){U++,yt[U]=t.current,t.current=n}var Q=$(null),pt=$(null),St=$(null),bt=$(null);function Nt(t,n){switch(xt(St,n),xt(pt,t),xt(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=cg(n),t=fg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(Q),xt(Q,t)}function re(){vt(Q),vt(pt),vt(St)}function Zt(t){t.memoizedState!==null&&xt(bt,t);var n=Q.current,a=fg(n,t.type);n!==a&&(xt(pt,t),xt(Q,a))}function Fe(t){pt.current===t&&(vt(Q),vt(pt)),bt.current===t&&(vt(bt),ho._currentValue=q)}var ze=Object.prototype.hasOwnProperty,ue=o.unstable_scheduleCallback,F=o.unstable_cancelCallback,Ln=o.unstable_shouldYield,pe=o.unstable_requestPaint,te=o.unstable_now,kt=o.unstable_getCurrentPriorityLevel,De=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,L=o.unstable_NormalPriority,T=o.unstable_LowPriority,tt=o.unstable_IdlePriority,_t=o.log,Mt=o.unstable_setDisableYieldValue,ht=null,zt=null;function At(t){if(typeof _t=="function"&&Mt(t),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(ht,t)}catch{}}var Rt=Math.clz32?Math.clz32:It,me=Math.log,Tt=Math.LN2;function It(t){return t>>>=0,t===0?32:31-(me(t)/Tt|0)|0}var qt=256,jt=4194304;function Ot(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function oe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Ot(s):(S&=E,S!==0?u=Ot(S):a||(a=E&~t,a!==0&&(u=Ot(a))))):(E=s&~f,E!==0?u=Ot(E):S!==0?u=Ot(S):a||(a=s&~t,a!==0&&(u=Ot(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=qt;return qt<<=1,(qt&4194048)===0&&(qt=256),t}function Ut(){var t=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),t}function lt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function mt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pt(t,n,a,s,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,J=t.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Rt(a),gt=1<<ut;E[ut]=0,O[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var it=et[ut];it!==null&&(it.lane&=-536870913)}a&=~gt}s!==0&&Lt(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Lt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Rt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function ee(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Rt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function He(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $e(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Me(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:Dg(t.type))}function Hn(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,_n="__reactProps$"+fn,Nn="__reactContainer$"+fn,Ha="__reactEvents$"+fn,Po="__reactListeners$"+fn,zo="__reactHandles$"+fn,Ga="__reactResources$"+fn,ia="__reactMarker$"+fn;function aa(t){delete t[rn],delete t[_n],delete t[Ha],delete t[Po],delete t[zo]}function Ai(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Nn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=mg(t);t!==null;){if(a=t[rn])return a;t=mg(t)}return n}t=a,a=t.parentNode}return null}function Ri(t){if(t=t[rn]||t[Nn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Va(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ra(t){var n=t[Ga];return n||(n=t[Ga]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[ia]=!0}var Bo=new Set,Io={};function Ci(t,n){b(t,n),b(t+"Capture",n)}function b(t,n){for(Io[t]=n,t=0;t<n.length;t++)Bo.add(n[t])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function Y(t){return ze.call(rt,t)?!0:ze.call(at,t)?!1:W.test(t)?rt[t]=!0:(at[t]=!0,!1)}function Et(t,n,a){if(Y(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ct(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function wt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Bt,Qt;function Xt(t){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",Qt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+t+Qt}var Vt=!1;function fe(t,n){if(!t||Vt)return"";Vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(it){var et=it}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(it){et=it}t.call(gt.prototype)}}else{try{throw Error()}catch(it){et=it}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],E=f[1];if(S&&E){var O=S.split(`
`),J=E.split(`
`);for(u=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===O.length||u===J.length)for(s=O.length-1,u=J.length-1;1<=s&&0<=u&&O[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(O[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||O[s]!==J[u]){var ut=`
`+O[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=u);break}}}finally{Vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function ye(t){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return fe(t.type,!1);case 11:return fe(t.type.render,!1);case 1:return fe(t.type,!0);case 31:return Xt("Activity");default:return""}}function Xe(t){try{var n="";do n+=ye(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wt(t){var n=_e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qe(t){t._valueTracker||(t._valueTracker=Wt(t))}function xe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=_e(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var sa=/[\n"\\]/g;function Ge(t){return t.replace(sa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wi(t,n,a,s,u,f,S,E){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ge(n)):t.value!==""+ge(n)&&(t.value=""+ge(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?En(t,S,ge(n)):a!=null?En(t,S,ge(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ge(E):t.removeAttribute("name")}function Be(t,n,a,s,u,f,S,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function En(t,n,a){n==="number"&&yn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function sn(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function hn(t,n,a){if(n!=null&&(n=""+ge(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ge(a):""}function vn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ge(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function mi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Di=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Di.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function fd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&cd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&cd(t,f,n[f])}function bu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(t){return Tv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Au=null;function Ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yr=null,Er=null;function hd(t){var n=Ri(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(wi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[_n]||null;if(!u)throw Error(r(90));wi(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&xe(s)}break t;case"textarea":hn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(t,!!a.multiple,n,!1)}}}var Cu=!1;function dd(t,n,a){if(Cu)return t(n,a);Cu=!0;try{var s=t(n);return s}finally{if(Cu=!1,(yr!==null||Er!==null)&&(Tl(),yr&&(n=yr,t=Er,Er=yr=null,hd(n),t)))for(n=0;n<t.length;n++)hd(t[n])}}function bs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(Ui)try{var As={};Object.defineProperty(As,"passive",{get:function(){wu=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{wu=!1}var oa=null,Du=null,Ho=null;function pd(){if(Ho)return Ho;var t,n=Du,a=n.length,s,u="value"in oa?oa.value:oa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return Ho=u.slice(t,1<s?1-s:void 0)}function Go(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function md(){return!1}function On(t){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vo:md,this.isPropagationStopped=md,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=On(ka),Rs=g({},ka,{view:0,detail:0}),bv=On(Rs),Uu,Lu,Cs,Xo=g({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(Uu=t.screenX-Cs.screenX,Lu=t.screenY-Cs.screenY):Lu=Uu=0,Cs=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),gd=On(Xo),Av=g({},Xo,{dataTransfer:0}),Rv=On(Av),Cv=g({},Rs,{relatedTarget:0}),Nu=On(Cv),wv=g({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=On(wv),Uv=g({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=On(Uv),Nv=g({},ka,{data:0}),_d=On(Nv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=zv[t])?!!n[t]:!1}function Ou(){return Bv}var Iv=g({},Rs,{key:function(t){if(t.key){var n=Ov[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fv=On(Iv),Hv=g({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=On(Hv),Gv=g({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),Vv=On(Gv),kv=g({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=On(kv),Wv=g({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=On(Wv),Yv=g({},ka,{newState:0,oldState:0}),Zv=On(Yv),jv=[9,13,27,32],Pu=Ui&&"CompositionEvent"in window,ws=null;Ui&&"documentMode"in document&&(ws=document.documentMode);var Kv=Ui&&"TextEvent"in window&&!ws,Sd=Ui&&(!Pu||ws&&8<ws&&11>=ws),xd=" ",Md=!1;function yd(t,n){switch(t){case"keyup":return jv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function Qv(t,n){switch(t){case"compositionend":return Ed(n);case"keypress":return n.which!==32?null:(Md=!0,xd);case"textInput":return t=n.data,t===xd&&Md?null:t;default:return null}}function Jv(t,n){if(Tr)return t==="compositionend"||!Pu&&yd(t,n)?(t=pd(),Ho=Du=oa=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sd&&n.locale!=="ko"?null:n.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$v[t.type]:n==="textarea"}function bd(t,n,a,s){yr?Er?Er.push(s):Er=[s]:yr=s,n=Dl(n,"onChange"),0<n.length&&(a=new ko("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ds=null,Us=null;function t0(t){rg(t,0)}function Wo(t){var n=Va(t);if(xe(n))return t}function Ad(t,n){if(t==="change")return n}var Rd=!1;if(Ui){var zu;if(Ui){var Bu="oninput"in document;if(!Bu){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),Bu=typeof Cd.oninput=="function"}zu=Bu}else zu=!1;Rd=zu&&(!document.documentMode||9<document.documentMode)}function wd(){Ds&&(Ds.detachEvent("onpropertychange",Dd),Us=Ds=null)}function Dd(t){if(t.propertyName==="value"&&Wo(Us)){var n=[];bd(n,Us,t,Ru(t)),dd(t0,n)}}function e0(t,n,a){t==="focusin"?(wd(),Ds=n,Us=a,Ds.attachEvent("onpropertychange",Dd)):t==="focusout"&&wd()}function n0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wo(Us)}function i0(t,n){if(t==="click")return Wo(n)}function a0(t,n){if(t==="input"||t==="change")return Wo(n)}function r0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:r0;function Ls(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!ze.call(n,u)||!Gn(t[u],n[u]))return!1}return!0}function Ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,n){var a=Ud(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ud(a)}}function Nd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Nd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Od(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=yn(t.document)}return n}function Iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var s0=Ui&&"documentMode"in document&&11>=document.documentMode,br=null,Fu=null,Ns=null,Hu=!1;function Pd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hu||br==null||br!==yn(s)||(s=br,"selectionStart"in s&&Iu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Ls(Ns,s)||(Ns=s,s=Dl(Fu,"onSelect"),0<s.length&&(n=new ko("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=br)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ar={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},Gu={},zd={};Ui&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Wa(t){if(Gu[t])return Gu[t];if(!Ar[t])return t;var n=Ar[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zd)return Gu[t]=n[a];return t}var Bd=Wa("animationend"),Id=Wa("animationiteration"),Fd=Wa("animationstart"),o0=Wa("transitionrun"),l0=Wa("transitionstart"),u0=Wa("transitioncancel"),Hd=Wa("transitionend"),Gd=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function si(t,n){Gd.set(t,n),Ci(n,[t])}var Vd=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=Vd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},Vd.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var Qn=[],Rr=0,ku=0;function qo(){for(var t=Rr,n=ku=Rr=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var u=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&kd(a,u,f)}}function Yo(t,n,a,s){Qn[Rr++]=t,Qn[Rr++]=n,Qn[Rr++]=a,Qn[Rr++]=s,ku|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Xu(t,n,a,s){return Yo(t,n,a,s),Zo(t)}function Cr(t,n){return Yo(t,null,null,n),Zo(t)}function kd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Rt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Zo(t){if(50<ao)throw ao=0,Kc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var wr={};function c0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new c0(t,n,a,s)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jo(t,n,a,s,u,f){var S=0;if(s=t,typeof t=="function")Wu(t)&&(S=1);else if(typeof t=="string")S=hS(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Vn(31,a,n,u),t.elementType=w,t.lanes=f,t;case A:return qa(a.children,u,f,n);case C:S=8,u|=24;break;case M:return t=Vn(12,a,n,u|2),t.elementType=M,t.lanes=f,t;case G:return t=Vn(13,a,n,u),t.elementType=G,t.lanes=f,t;case V:return t=Vn(19,a,n,u),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case N:S=10;break t;case z:S=9;break t;case D:S=11;break t;case I:S=14;break t;case Z:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(S,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function qa(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function qu(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dr=[],Ur=0,Ko=null,Qo=0,Jn=[],$n=0,Ya=null,Ni=1,Oi="";function Za(t,n){Dr[Ur++]=Qo,Dr[Ur++]=Ko,Ko=t,Qo=n}function Wd(t,n,a){Jn[$n++]=Ni,Jn[$n++]=Oi,Jn[$n++]=Ya,Ya=t;var s=Ni;t=Oi;var u=32-Rt(s)-1;s&=~(1<<u),a+=1;var f=32-Rt(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Ni=1<<32-Rt(n)+u|a<<u|s,Oi=f+t}else Ni=1<<f|a<<u|s,Oi=t}function Zu(t){t.return!==null&&(Za(t,1),Wd(t,1,0))}function ju(t){for(;t===Ko;)Ko=Dr[--Ur],Dr[Ur]=null,Qo=Dr[--Ur],Dr[Ur]=null;for(;t===Ya;)Ya=Jn[--$n],Jn[$n]=null,Oi=Jn[--$n],Jn[$n]=null,Ni=Jn[--$n],Jn[$n]=null}var wn=null,Ye=null,be=!1,ja=null,gi=!1,Ku=Error(r(519));function Ka(t){var n=Error(r(418,""));throw zs(Kn(n,t)),Ku}function qd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[_n]=s,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<so.length;a++)de(so[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Be(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),qe(n);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),vn(n,s.value,s.defaultValue,s.children),qe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||ug(n.textContent,a)?(s.popover!=null&&(de("beforetoggle",n),de("toggle",n)),s.onScroll!=null&&de("scroll",n),s.onScrollEnd!=null&&de("scrollend",n),s.onClick!=null&&(n.onclick=Ul),n=!0):n=!1,n||Ka(t)}function Yd(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:wn=wn.return}}function Os(t){if(t!==wn)return!1;if(!be)return Yd(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||df(t.type,t.memoizedProps)),a=!a),a&&Ye&&Ka(t),Yd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ye=li(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ye=null}}else n===27?(n=Ye,Ea(t.type)?(t=_f,_f=null,Ye=t):Ye=n):Ye=wn?li(t.stateNode.nextSibling):null;return!0}function Ps(){Ye=wn=null,be=!1}function Zd(){var t=ja;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),ja=null),t}function zs(t){ja===null?ja=[t]:ja.push(t)}var Qu=$(null),Qa=null,Pi=null;function la(t,n,a){xt(Qu,n._currentValue),n._currentValue=a}function zi(t){t._currentValue=Qu.current,vt(Qu)}function Ju(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function $u(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var O=0;O<n.length;O++)if(E.context===n[O]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Ju(f.return,a,t),s||(S=null);break t}f=E.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Ju(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Bs(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var E=u.type;Gn(u.pendingProps.value,S.value)||(t!==null?t.push(E):t=[E])}}else if(u===bt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ho):t=[ho])}u=u.return}t!==null&&$u(n,t,a,s),n.flags|=262144}function Jo(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ja(t){Qa=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return jd(Qa,t)}function $o(t,n){return Qa===null&&Ja(t),jd(t,n)}function jd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(r(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var f0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},h0=o.unstable_scheduleCallback,d0=o.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tc(){return{controller:new f0,data:new Map,refCount:0}}function Is(t){t.refCount--,t.refCount===0&&h0(d0,function(){t.controller.abort()})}var Fs=null,ec=0,Lr=0,Nr=null;function p0(t,n){if(Fs===null){var a=Fs=[];ec=0,Lr=af(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ec++,n.then(Kd,Kd),n}function Kd(){if(--ec===0&&Fs!==null){Nr!==null&&(Nr.status="fulfilled");var t=Fs;Fs=null,Lr=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function m0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Qd=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&p0(t,n),Qd!==null&&Qd(t,n)};var $a=$(null);function nc(){var t=$a.current;return t!==null?t:Ve.pooledCache}function tl(t,n){n===null?xt($a,$a.current):xt($a,n.pool)}function Jd(){var t=nc();return t===null?null:{parent:on._currentValue,pool:t}}var Hs=Error(r(460)),$d=Error(r(474)),el=Error(r(542)),ic={then:function(){}};function tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nl(){}function ep(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(nl,nl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ip(t),t;default:if(typeof n.status=="string")n.then(nl,nl);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ip(t),t}throw Gs=n,Hs}}var Gs=null;function np(){if(Gs===null)throw Error(r(459));var t=Gs;return Gs=null,t}function ip(t){if(t===Hs||t===el)throw Error(r(483))}var ua=!1;function ac(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Zo(t),kd(t,null,a),n}return Yo(t,s,n,a),Zo(t)}function Vs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ee(t,a)}}function sc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var oc=!1;function ks(){if(oc){var t=Nr;if(t!==null)throw t}}function Xs(t,n,a,s){oc=!1;var u=t.updateQueue;ua=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var O=E,J=O.next;O.next=null,S===null?f=J:S.next=J,S=O;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==S&&(E===null?ut.firstBaseUpdate=J:E.next=J,ut.lastBaseUpdate=O))}if(f!==null){var gt=u.baseState;S=0,ut=J=O=null,E=f;do{var et=E.lane&-536870913,it=et!==E.lane;if(it?(Se&et)===et:(s&et)===et){et!==0&&et===Lr&&(oc=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Jt=t,Yt=E;et=n;var Oe=a;switch(Yt.tag){case 1:if(Jt=Yt.payload,typeof Jt=="function"){gt=Jt.call(Oe,gt,et);break t}gt=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=Yt.payload,et=typeof Jt=="function"?Jt.call(Oe,gt,et):Jt,et==null)break t;gt=g({},gt,et);break t;case 2:ua=!0}}et=E.callback,et!==null&&(t.flags|=64,it&&(t.flags|=8192),it=u.callbacks,it===null?u.callbacks=[et]:it.push(et))}else it={lane:et,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(J=ut=it,O=gt):ut=ut.next=it,S|=et;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;it=E,E=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ut===null&&(O=gt),u.baseState=O,u.firstBaseUpdate=J,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),Sa|=S,t.lanes=S,t.memoizedState=gt}}function ap(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function rp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ap(a[t],n)}var Or=$(null),il=$(0);function sp(t,n){t=ki,xt(il,t),xt(Or,n),ki=t|n.baseLanes}function lc(){xt(il,ki),xt(Or,Or.current)}function uc(){ki=il.current,vt(Or),vt(il)}var ha=0,le=null,Le=null,en=null,al=!1,Pr=!1,tr=!1,rl=0,Ws=0,zr=null,g0=0;function Qe(){throw Error(r(321))}function cc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function fc(t,n,a,s,u,f){return ha=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?kp:Xp,tr=!1,f=a(s,u),tr=!1,Pr&&(f=lp(n,a,s,u)),op(t),f}function op(t){P.H=fl;var n=Le!==null&&Le.next!==null;if(ha=0,en=Le=le=null,al=!1,Ws=0,zr=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&Jo(t)&&(dn=!0))}function lp(t,n,a,s){le=t;var u=0;do{if(Pr&&(zr=null),Ws=0,Pr=!1,25<=u)throw Error(r(301));if(u+=1,en=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=E0,f=n(a,s)}while(Pr);return f}function _0(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?qs(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(le.flags|=1024),n}function hc(){var t=rl!==0;return rl=0,t}function dc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function pc(t){if(al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}al=!1}ha=0,en=Le=le=null,Pr=!1,Ws=rl=0,zr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?le.memoizedState=en=t:en=en.next=t,en}function nn(){if(Le===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=en===null?le.memoizedState:en.next;if(n!==null)en=n,Le=t;else{if(t===null)throw le.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},en===null?le.memoizedState=en=t:en=en.next=t}return en}function mc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qs(t){var n=Ws;return Ws+=1,zr===null&&(zr=[]),t=ep(zr,t,n),n=le,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?kp:Xp),t}function sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qs(t);if(t.$$typeof===N)return Tn(t)}throw Error(r(438,String(t)))}function gc(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=mc(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Bi(t,n){return typeof n=="function"?n(t):n}function ol(t){var n=nn();return _c(n,Le,t)}function _c(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=S=null,O=null,J=n,ut=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(Se&gt)===gt:(ha&gt)===gt){var et=J.revertLane;if(et===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Lr&&(ut=!0);else if((ha&et)===et){J=J.next,et===Lr&&(ut=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(E=O=gt,S=f):O=O.next=gt,le.lanes|=et,Sa|=et;gt=J.action,tr&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else et={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(E=O=et,S=f):O=O.next=et,le.lanes|=gt,Sa|=gt;J=J.next}while(J!==null&&J!==n);if(O===null?S=f:O.next=E,!Gn(f,t.memoizedState)&&(dn=!0,ut&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=O,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function vc(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Gn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function up(t,n,a){var s=le,u=nn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Gn((Le||u).memoizedState,a);S&&(u.memoizedState=a,dn=!0),u=u.queue;var E=hp.bind(null,s,u,t);if(Ys(2048,8,E,[t]),u.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Br(9,ll(),fp.bind(null,s,u,a,n),null),Ve===null)throw Error(r(349));f||(ha&124)!==0||cp(s,n,a)}return a}function cp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=mc(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fp(t,n,a,s){n.value=a,n.getSnapshot=s,dp(n)&&pp(t)}function hp(t,n,a){return a(function(){dp(n)&&pp(t)})}function dp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function pp(t){var n=Cr(t,2);n!==null&&Yn(n,t,2)}function Sc(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),tr){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:t},n}function mp(t,n,a,s){return t.baseState=a,_c(t,Le,typeof s=="function"?s:Bi)}function v0(t,n,a,s,u){if(cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,gp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var E=a(u,s),O=P.S;O!==null&&O(S,E),_p(t,n,E)}catch(J){xc(t,n,J)}finally{P.T=f}}else try{f=a(u,s),_p(t,n,f)}catch(J){xc(t,n,J)}}function _p(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){vp(t,n,s)},function(s){return xc(t,n,s)}):vp(t,n,a)}function vp(t,n,a){n.status="fulfilled",n.value=a,Sp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gp(t,a)))}function xc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Sp(n),n=n.next;while(n!==s)}t.action=null}function Sp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function xp(t,n){return n}function Mp(t,n){if(be){var a=Ve.formState;if(a!==null){t:{var s=le;if(be){if(Ye){e:{for(var u=Ye,f=gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=li(u.nextSibling),s=u.data==="F!";break t}}Ka(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xp,lastRenderedState:n},a.queue=s,a=Hp.bind(null,le,s),s.dispatch=a,s=Sc(!1),f=bc.bind(null,le,!1,s.queue),s=Pn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=v0.bind(null,le,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function yp(t){var n=nn();return Ep(n,Le,t)}function Ep(t,n,a){if(n=_c(t,n,xp)[0],t=ol(Bi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=qs(n)}catch(S){throw S===Hs?el:S}else s=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Br(9,ll(),S0.bind(null,u,a),null)),[s,f,t]}function S0(t,n){t.action=n}function Tp(t){var n=nn(),a=Le;if(a!==null)return Ep(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=mc(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ll(){return{destroy:void 0,resource:void 0}}function bp(){return nn().memoizedState}function ul(t,n,a,s){var u=Pn();s=s===void 0?null:s,le.flags|=t,u.memoizedState=Br(1|n,ll(),a,s)}function Ys(t,n,a,s){var u=nn();s=s===void 0?null:s;var f=u.memoizedState.inst;Le!==null&&s!==null&&cc(s,Le.memoizedState.deps)?u.memoizedState=Br(n,f,a,s):(le.flags|=t,u.memoizedState=Br(1|n,f,a,s))}function Ap(t,n){ul(8390656,8,t,n)}function Rp(t,n){Ys(2048,8,t,n)}function Cp(t,n){return Ys(4,2,t,n)}function wp(t,n){return Ys(4,4,t,n)}function Dp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Up(t,n,a){a=a!=null?a.concat([t]):null,Ys(4,4,Dp.bind(null,n,t),a)}function Mc(){}function Lp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&cc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Np(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&cc(n,s[1]))return s[0];if(s=t(),tr){At(!0);try{t()}finally{At(!1)}}return a.memoizedState=[s,n],s}function yc(t,n,a){return a===void 0||(ha&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=zm(),le.lanes|=t,Sa|=t,a)}function Op(t,n,a,s){return Gn(a,n)?a:Or.current!==null?(t=yc(t,a,s),Gn(t,n)||(dn=!0),t):(ha&42)===0?(dn=!0,t.memoizedState=a):(t=zm(),le.lanes|=t,Sa|=t,n)}function Pp(t,n,a,s,u){var f=j.p;j.p=f!==0&&8>f?f:8;var S=P.T,E={};P.T=E,bc(t,!1,n,a);try{var O=u(),J=P.S;if(J!==null&&J(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ut=m0(O,s);Zs(t,n,ut,qn(t))}else Zs(t,n,s,qn(t))}catch(gt){Zs(t,n,{then:function(){},status:"rejected",reason:gt},qn())}finally{j.p=f,P.T=S}}function x0(){}function Ec(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=zp(t).queue;Pp(t,u,n,q,a===null?x0:function(){return Bp(t),a(s)})}function zp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Bp(t){var n=zp(t).next.queue;Zs(t,n,{},qn())}function Tc(){return Tn(ho)}function Ip(){return nn().memoizedState}function Fp(){return nn().memoizedState}function M0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=ca(a);var s=fa(n,t,a);s!==null&&(Yn(s,n,a),Vs(s,n,a)),n={cache:tc()},t.payload=n;return}n=n.return}}function y0(t,n,a){var s=qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},cl(t)?Gp(n,a):(a=Xu(t,n,a,s),a!==null&&(Yn(a,t,s),Vp(a,n,s)))}function Hp(t,n,a){var s=qn();Zs(t,n,a,s)}function Zs(t,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(cl(t))Gp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,E=f(S,a);if(u.hasEagerState=!0,u.eagerState=E,Gn(E,S))return Yo(t,n,u,0),Ve===null&&qo(),!1}catch{}finally{}if(a=Xu(t,n,u,s),a!==null)return Yn(a,t,s),Vp(a,n,s),!0}return!1}function bc(t,n,a,s){if(s={lane:2,revertLane:af(),action:s,hasEagerState:!1,eagerState:null,next:null},cl(t)){if(n)throw Error(r(479))}else n=Xu(t,a,s,2),n!==null&&Yn(n,t,2)}function cl(t){var n=t.alternate;return t===le||n!==null&&n===le}function Gp(t,n){Pr=al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ee(t,a)}}var fl={readContext:Tn,use:sl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},kp={readContext:Tn,use:sl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Ap,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,Dp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var s=t();if(tr){At(!0);try{t()}finally{At(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Pn();if(a!==void 0){var u=a(n);if(tr){At(!0);try{a(n)}finally{At(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=y0.bind(null,le,t),[s.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Sc(t);var n=t.queue,a=Hp.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Mc,useDeferredValue:function(t,n){var a=Pn();return yc(a,t,n)},useTransition:function(){var t=Sc(!1);return t=Pp.bind(null,le,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=le,u=Pn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(Se&124)!==0||cp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Ap(hp.bind(null,s,f,t),[t]),s.flags|=2048,Br(9,ll(),fp.bind(null,s,f,a,n),null),a},useId:function(){var t=Pn(),n=Ve.identifierPrefix;if(be){var a=Oi,s=Ni;a=(s&~(1<<32-Rt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=g0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Tc,useFormState:Mp,useActionState:Mp,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bc.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:gc,useCacheRefresh:function(){return Pn().memoizedState=M0.bind(null,le)}},Xp={readContext:Tn,use:sl,useCallback:Lp,useContext:Tn,useEffect:Rp,useImperativeHandle:Up,useInsertionEffect:Cp,useLayoutEffect:wp,useMemo:Np,useReducer:ol,useRef:bp,useState:function(){return ol(Bi)},useDebugValue:Mc,useDeferredValue:function(t,n){var a=nn();return Op(a,Le.memoizedState,t,n)},useTransition:function(){var t=ol(Bi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:qs(t),n]},useSyncExternalStore:up,useId:Ip,useHostTransitionStatus:Tc,useFormState:yp,useActionState:yp,useOptimistic:function(t,n){var a=nn();return mp(a,Le,t,n)},useMemoCache:gc,useCacheRefresh:Fp},E0={readContext:Tn,use:sl,useCallback:Lp,useContext:Tn,useEffect:Rp,useImperativeHandle:Up,useInsertionEffect:Cp,useLayoutEffect:wp,useMemo:Np,useReducer:vc,useRef:bp,useState:function(){return vc(Bi)},useDebugValue:Mc,useDeferredValue:function(t,n){var a=nn();return Le===null?yc(a,t,n):Op(a,Le.memoizedState,t,n)},useTransition:function(){var t=vc(Bi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:qs(t),n]},useSyncExternalStore:up,useId:Ip,useHostTransitionStatus:Tc,useFormState:Tp,useActionState:Tp,useOptimistic:function(t,n){var a=nn();return Le!==null?mp(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:gc,useCacheRefresh:Fp},Ir=null,js=0;function hl(t){var n=js;return js+=1,Ir===null&&(Ir=[]),ep(Ir,t,n)}function Ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function dl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wp(t){var n=t._init;return n(t._payload)}function qp(t){function n(X,H){if(t){var K=X.deletions;K===null?(X.deletions=[H],X.flags|=16):K.push(H)}}function a(X,H){if(!t)return null;for(;H!==null;)n(X,H),H=H.sibling;return null}function s(X){for(var H=new Map;X!==null;)X.key!==null?H.set(X.key,X):H.set(X.index,X),X=X.sibling;return H}function u(X,H){return X=Li(X,H),X.index=0,X.sibling=null,X}function f(X,H,K){return X.index=K,t?(K=X.alternate,K!==null?(K=K.index,K<H?(X.flags|=67108866,H):K):(X.flags|=67108866,H)):(X.flags|=1048576,H)}function S(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function E(X,H,K,dt){return H===null||H.tag!==6?(H=qu(K,X.mode,dt),H.return=X,H):(H=u(H,K),H.return=X,H)}function O(X,H,K,dt){var Ft=K.type;return Ft===A?ut(X,H,K.props.children,dt,K.key):H!==null&&(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&Wp(Ft)===H.type)?(H=u(H,K.props),Ks(H,K),H.return=X,H):(H=jo(K.type,K.key,K.props,null,X.mode,dt),Ks(H,K),H.return=X,H)}function J(X,H,K,dt){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=Yu(K,X.mode,dt),H.return=X,H):(H=u(H,K.children||[]),H.return=X,H)}function ut(X,H,K,dt,Ft){return H===null||H.tag!==7?(H=qa(K,X.mode,dt,Ft),H.return=X,H):(H=u(H,K),H.return=X,H)}function gt(X,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=qu(""+H,X.mode,K),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return K=jo(H.type,H.key,H.props,null,X.mode,K),Ks(K,H),K.return=X,K;case y:return H=Yu(H,X.mode,K),H.return=X,H;case Z:var dt=H._init;return H=dt(H._payload),gt(X,H,K)}if(ct(H)||st(H))return H=qa(H,X.mode,K,null),H.return=X,H;if(typeof H.then=="function")return gt(X,hl(H),K);if(H.$$typeof===N)return gt(X,$o(X,H),K);dl(X,H)}return null}function et(X,H,K,dt){var Ft=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:E(X,H,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ft?O(X,H,K,dt):null;case y:return K.key===Ft?J(X,H,K,dt):null;case Z:return Ft=K._init,K=Ft(K._payload),et(X,H,K,dt)}if(ct(K)||st(K))return Ft!==null?null:ut(X,H,K,dt,null);if(typeof K.then=="function")return et(X,H,hl(K),dt);if(K.$$typeof===N)return et(X,H,$o(X,K),dt);dl(X,K)}return null}function it(X,H,K,dt,Ft){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return X=X.get(K)||null,E(H,X,""+dt,Ft);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return X=X.get(dt.key===null?K:dt.key)||null,O(H,X,dt,Ft);case y:return X=X.get(dt.key===null?K:dt.key)||null,J(H,X,dt,Ft);case Z:var ce=dt._init;return dt=ce(dt._payload),it(X,H,K,dt,Ft)}if(ct(dt)||st(dt))return X=X.get(K)||null,ut(H,X,dt,Ft,null);if(typeof dt.then=="function")return it(X,H,K,hl(dt),Ft);if(dt.$$typeof===N)return it(X,H,K,$o(H,dt),Ft);dl(H,dt)}return null}function Jt(X,H,K,dt){for(var Ft=null,ce=null,Gt=H,Kt=H=0,mn=null;Gt!==null&&Kt<K.length;Kt++){Gt.index>Kt?(mn=Gt,Gt=null):mn=Gt.sibling;var Ee=et(X,Gt,K[Kt],dt);if(Ee===null){Gt===null&&(Gt=mn);break}t&&Gt&&Ee.alternate===null&&n(X,Gt),H=f(Ee,H,Kt),ce===null?Ft=Ee:ce.sibling=Ee,ce=Ee,Gt=mn}if(Kt===K.length)return a(X,Gt),be&&Za(X,Kt),Ft;if(Gt===null){for(;Kt<K.length;Kt++)Gt=gt(X,K[Kt],dt),Gt!==null&&(H=f(Gt,H,Kt),ce===null?Ft=Gt:ce.sibling=Gt,ce=Gt);return be&&Za(X,Kt),Ft}for(Gt=s(Gt);Kt<K.length;Kt++)mn=it(Gt,X,Kt,K[Kt],dt),mn!==null&&(t&&mn.alternate!==null&&Gt.delete(mn.key===null?Kt:mn.key),H=f(mn,H,Kt),ce===null?Ft=mn:ce.sibling=mn,ce=mn);return t&&Gt.forEach(function(Ca){return n(X,Ca)}),be&&Za(X,Kt),Ft}function Yt(X,H,K,dt){if(K==null)throw Error(r(151));for(var Ft=null,ce=null,Gt=H,Kt=H=0,mn=null,Ee=K.next();Gt!==null&&!Ee.done;Kt++,Ee=K.next()){Gt.index>Kt?(mn=Gt,Gt=null):mn=Gt.sibling;var Ca=et(X,Gt,Ee.value,dt);if(Ca===null){Gt===null&&(Gt=mn);break}t&&Gt&&Ca.alternate===null&&n(X,Gt),H=f(Ca,H,Kt),ce===null?Ft=Ca:ce.sibling=Ca,ce=Ca,Gt=mn}if(Ee.done)return a(X,Gt),be&&Za(X,Kt),Ft;if(Gt===null){for(;!Ee.done;Kt++,Ee=K.next())Ee=gt(X,Ee.value,dt),Ee!==null&&(H=f(Ee,H,Kt),ce===null?Ft=Ee:ce.sibling=Ee,ce=Ee);return be&&Za(X,Kt),Ft}for(Gt=s(Gt);!Ee.done;Kt++,Ee=K.next())Ee=it(Gt,X,Kt,Ee.value,dt),Ee!==null&&(t&&Ee.alternate!==null&&Gt.delete(Ee.key===null?Kt:Ee.key),H=f(Ee,H,Kt),ce===null?Ft=Ee:ce.sibling=Ee,ce=Ee);return t&&Gt.forEach(function(TS){return n(X,TS)}),be&&Za(X,Kt),Ft}function Oe(X,H,K,dt){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ft=K.key;H!==null;){if(H.key===Ft){if(Ft=K.type,Ft===A){if(H.tag===7){a(X,H.sibling),dt=u(H,K.props.children),dt.return=X,X=dt;break t}}else if(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&Wp(Ft)===H.type){a(X,H.sibling),dt=u(H,K.props),Ks(dt,K),dt.return=X,X=dt;break t}a(X,H);break}else n(X,H);H=H.sibling}K.type===A?(dt=qa(K.props.children,X.mode,dt,K.key),dt.return=X,X=dt):(dt=jo(K.type,K.key,K.props,null,X.mode,dt),Ks(dt,K),dt.return=X,X=dt)}return S(X);case y:t:{for(Ft=K.key;H!==null;){if(H.key===Ft)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(X,H.sibling),dt=u(H,K.children||[]),dt.return=X,X=dt;break t}else{a(X,H);break}else n(X,H);H=H.sibling}dt=Yu(K,X.mode,dt),dt.return=X,X=dt}return S(X);case Z:return Ft=K._init,K=Ft(K._payload),Oe(X,H,K,dt)}if(ct(K))return Jt(X,H,K,dt);if(st(K)){if(Ft=st(K),typeof Ft!="function")throw Error(r(150));return K=Ft.call(K),Yt(X,H,K,dt)}if(typeof K.then=="function")return Oe(X,H,hl(K),dt);if(K.$$typeof===N)return Oe(X,H,$o(X,K),dt);dl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(X,H.sibling),dt=u(H,K),dt.return=X,X=dt):(a(X,H),dt=qu(K,X.mode,dt),dt.return=X,X=dt),S(X)):a(X,H)}return function(X,H,K,dt){try{js=0;var Ft=Oe(X,H,K,dt);return Ir=null,Ft}catch(Gt){if(Gt===Hs||Gt===el)throw Gt;var ce=Vn(29,Gt,null,X.mode);return ce.lanes=dt,ce.return=X,ce}finally{}}}var Fr=qp(!0),Yp=qp(!1),ti=$(null),_i=null;function da(t){var n=t.alternate;xt(ln,ln.current&1),xt(ti,t),_i===null&&(n===null||Or.current!==null||n.memoizedState!==null)&&(_i=t)}function Zp(t){if(t.tag===22){if(xt(ln,ln.current),xt(ti,t),_i===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(_i=t)}}else pa()}function pa(){xt(ln,ln.current),xt(ti,ti.current)}function Ii(t){vt(ti),_i===t&&(_i=null),vt(ln)}var ln=$(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ac(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Rc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=qn(),u=ca(s);u.payload=n,a!=null&&(u.callback=a),n=fa(t,u,s),n!==null&&(Yn(n,t,s),Vs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=qn(),u=ca(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=fa(t,u,s),n!==null&&(Yn(n,t,s),Vs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),s=ca(a);s.tag=2,n!=null&&(s.callback=n),n=fa(t,s,a),n!==null&&(Yn(n,t,a),Vs(n,t,a))}};function jp(t,n,a,s,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ls(a,s)||!Ls(u,f):!0}function Kp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Rc.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qp(t){ml(t)}function Jp(t){console.error(t)}function $p(t){ml(t)}function gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function tm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cc(t,n,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(t,n)},a}function em(t){return t=ca(t),t.tag=3,t}function nm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){tm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){tm(n,a,s),typeof u!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function T0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 13:return _i===null?Jc():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ic?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),tf(t,s,u)),!1;case 22:return a.flags|=65536,s===ic?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),tf(t,s,u)),!1}throw Error(r(435,a.tag))}return tf(t,s,u),Jc(),!1}if(be)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Ku&&(t=Error(r(422),{cause:s}),zs(Kn(t,a)))):(s!==Ku&&(n=Error(r(423),{cause:s}),zs(Kn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Kn(s,a),u=Cc(t.stateNode,s,u),sc(t,u),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),io===null?io=[f]:io.push(f),Ze!==4&&(Ze=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Cc(a.stateNode,s,t),sc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=em(u),nm(u,t,a,s),sc(a,u),!1}a=a.return}while(a!==null);return!1}var im=Error(r(461)),dn=!1;function Sn(t,n,a,s){n.child=t===null?Yp(n,null,a,s):Fr(n,t.child,a,s)}function am(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var E in s)E!=="ref"&&(S[E]=s[E])}else S=s;return Ja(n),s=fc(t,n,a,S,f,u),E=hc(),t!==null&&!dn?(dc(t,n,u),Fi(t,n,u)):(be&&E&&Zu(n),n.flags|=1,Sn(t,n,s,u),n.child)}function rm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,sm(t,n,f,s,u)):(t=jo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!zc(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(S,s)&&t.ref===n.ref)return Fi(t,n,u)}return n.flags|=1,t=Li(f,s),t.ref=n.ref,t.return=n,n.child=t}function sm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Ls(f,s)&&t.ref===n.ref)if(dn=!1,n.pendingProps=s=f,zc(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Fi(t,n,u)}return wc(t,n,a,s,u)}function om(t,n,a){var s=n.pendingProps,u=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return lm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tl(n,f!==null?f.cachePool:null),f!==null?sp(n,f):lc(),Zp(n);else return n.lanes=n.childLanes=536870912,lm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(tl(n,f.cachePool),sp(n,f),pa(),n.memoizedState=null):(t!==null&&tl(n,null),lc(),pa());return Sn(t,n,u,a),n.child}function lm(t,n,a,s){var u=nc();return u=u===null?null:{parent:on._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&tl(n,null),lc(),Zp(n),t!==null&&Bs(t,n,s,!0),null}function _l(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function wc(t,n,a,s,u){return Ja(n),a=fc(t,n,a,s,void 0,u),s=hc(),t!==null&&!dn?(dc(t,n,u),Fi(t,n,u)):(be&&s&&Zu(n),n.flags|=1,Sn(t,n,a,u),n.child)}function um(t,n,a,s,u,f){return Ja(n),n.updateQueue=null,a=lp(n,s,a,u),op(t),s=hc(),t!==null&&!dn?(dc(t,n,f),Fi(t,n,f)):(be&&s&&Zu(n),n.flags|=1,Sn(t,n,a,f),n.child)}function cm(t,n,a,s,u){if(Ja(n),n.stateNode===null){var f=wr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Rc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},ac(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):wr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ac(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Rc.enqueueReplaceState(f,f.state,null),Xs(n,s,f,u),ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,O=er(a,E);f.props=O;var J=f.context,ut=a.contextType;S=wr,typeof ut=="object"&&ut!==null&&(S=Tn(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==S)&&Kp(n,f,s,S),ua=!1;var et=n.memoizedState;f.state=et,Xs(n,s,f,u),ks(),J=n.memoizedState,E||et!==J||ua?(typeof gt=="function"&&(Ac(n,a,gt,s),J=n.memoizedState),(O=ua||jp(n,a,O,s,et,J,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,rc(t,n),S=n.memoizedProps,ut=er(a,S),f.props=ut,gt=n.pendingProps,et=f.context,J=a.contextType,O=wr,typeof J=="object"&&J!==null&&(O=Tn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||et!==O)&&Kp(n,f,s,O),ua=!1,et=n.memoizedState,f.state=et,Xs(n,s,f,u),ks();var it=n.memoizedState;S!==gt||et!==it||ua||t!==null&&t.dependencies!==null&&Jo(t.dependencies)?(typeof E=="function"&&(Ac(n,a,E,s),it=n.memoizedState),(ut=ua||jp(n,a,ut,s,et,it,O)||t!==null&&t.dependencies!==null&&Jo(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=O,s=ut):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,_l(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Fr(n,t.child,null,u),n.child=Fr(n,null,a,u)):Sn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Fi(t,n,u),t}function fm(t,n,a,s){return Ps(),n.flags|=256,Sn(t,n,a,s),n.child}var Dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(t){return{baseLanes:t,cachePool:Jd()}}function Lc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function hm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(u?da(n):pa(),be){var E=Ye,O;if(O=E){t:{for(O=E,E=gi;O.nodeType!==8;){if(!E){E=null;break t}if(O=li(O.nextSibling),O===null){E=null;break t}}E=O}E!==null?(n.memoizedState={dehydrated:E,treeContext:Ya!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},O=Vn(18,null,null,0),O.stateNode=E,O.return=n,n.child=O,wn=n,Ye=null,O=!0):O=!1}O||Ka(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return gf(E)?n.lanes=32:n.lanes=536870912,null;Ii(n)}return E=s.children,s=s.fallback,u?(pa(),u=n.mode,E=vl({mode:"hidden",children:E},u),s=qa(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,u=n.child,u.memoizedState=Uc(a),u.childLanes=Lc(t,S,a),n.memoizedState=Dc,s):(da(n),Nc(n,E))}if(O=t.memoizedState,O!==null&&(E=O.dehydrated,E!==null)){if(f)n.flags&256?(da(n),n.flags&=-257,n=Oc(t,n,a)):n.memoizedState!==null?(pa(),n.child=t.child,n.flags|=128,n=null):(pa(),u=s.fallback,E=n.mode,s=vl({mode:"visible",children:s.children},E),u=qa(u,E,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Fr(n,t.child,null,a),s=n.child,s.memoizedState=Uc(a),s.childLanes=Lc(t,S,a),n.memoizedState=Dc,n=u);else if(da(n),gf(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,zs({value:s,source:null,stack:null}),n=Oc(t,n,a)}else if(dn||Bs(t,n,a,!1),S=(a&t.childLanes)!==0,dn||S){if(S=Ve,S!==null&&(s=a&-a,s=(s&42)!==0?1:He(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,Cr(t,s),Yn(S,t,s),im;E.data==="$?"||Jc(),n=Oc(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,Ye=li(E.nextSibling),wn=n,be=!0,ja=null,gi=!1,t!==null&&(Jn[$n++]=Ni,Jn[$n++]=Oi,Jn[$n++]=Ya,Ni=t.id,Oi=t.overflow,Ya=n),n=Nc(n,s.children),n.flags|=4096);return n}return u?(pa(),u=s.fallback,E=n.mode,O=t.child,J=O.sibling,s=Li(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,J!==null?u=Li(J,u):(u=qa(u,E,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,E=t.child.memoizedState,E===null?E=Uc(a):(O=E.cachePool,O!==null?(J=on._currentValue,O=O.parent!==J?{parent:J,pool:J}:O):O=Jd(),E={baseLanes:E.baseLanes|a,cachePool:O}),u.memoizedState=E,u.childLanes=Lc(t,S,a),n.memoizedState=Dc,s):(da(n),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Nc(t,n){return n=vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vl(t,n){return t=Vn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Oc(t,n,a){return Fr(n,t.child,null,a),t=Nc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function dm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Ju(t.return,n,a)}function Pc(t,n,a,s,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function pm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(Sn(t,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,a,n);else if(t.tag===19)dm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(xt(ln,s),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Pc(n,!0,a,null,f);break;case"together":Pc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Li(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function zc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jo(t)))}function b0(t,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),la(n,on,t.memoizedState.cache),Ps();break;case 27:case 5:Zt(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:la(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?hm(t,n,a):(da(n),t=Fi(t,n,a),t!==null?t.sibling:null);da(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Bs(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return pm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,om(t,n,a);case 24:la(n,on,t.memoizedState.cache)}return Fi(t,n,a)}function mm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!zc(t,a)&&(n.flags&128)===0)return dn=!1,b0(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,be&&(n.flags&1048576)!==0&&Wd(n,Qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Wu(s)?(t=er(s,t),n.tag=1,n=cm(null,n,s,t,a)):(n.tag=0,n=wc(null,n,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===D){n.tag=11,n=am(null,n,s,t,a);break t}else if(u===I){n.tag=14,n=rm(null,n,s,t,a);break t}}throw n=ft(s)||s,Error(r(306,n,""))}}return n;case 0:return wc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=er(s,n.pendingProps),cm(t,n,s,u,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,rc(t,n),Xs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,la(n,on,s),s!==f.cache&&$u(n,[on],a,!0),ks(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=fm(t,n,s,a);break t}else if(s!==u){u=Kn(Error(r(424)),n),zs(u),n=fm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ye=li(t.firstChild),wn=n,be=!0,ja=null,gi=!0,a=Yp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ps(),s===u){n=Fi(t,n,a);break t}Sn(t,n,s,a)}n=n.child}return n;case 26:return _l(t,n),t===null?(a=Sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Ll(St.current).createElement(a),s[rn]=n,s[_n]=t,Mn(s,a,t),tn(s),n.stateNode=s):n.memoizedState=Sg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&be&&(s=n.stateNode=gg(n.type,n.pendingProps,St.current),wn=n,gi=!0,u=Ye,Ea(n.type)?(_f=u,Ye=li(s.firstChild)):Ye=u),Sn(t,n,n.pendingProps.children,a),_l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((u=s=Ye)&&(s=$0(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,wn=n,Ye=li(s.firstChild),gi=!1,u=!0):u=!1),u||Ka(n)),Zt(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,df(u,f)?s=null:S!==null&&df(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=fc(t,n,_0,null,null,a),ho._currentValue=u),_l(t,n),Sn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=Ye)&&(a=tS(a,n.pendingProps,gi),a!==null?(n.stateNode=a,wn=n,Ye=null,t=!0):t=!1),t||Ka(n)),null;case 13:return hm(t,n,a);case 4:return Nt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Fr(n,null,s,a):Sn(t,n,s,a),n.child;case 11:return am(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,la(n,n.type,s.value),Sn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Ja(n),u=Tn(u),s=s(u),n.flags|=1,Sn(t,n,s,a),n.child;case 14:return rm(t,n,n.type,n.pendingProps,a);case 15:return sm(t,n,n.type,n.pendingProps,a);case 19:return pm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=vl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Li(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return om(t,n,a);case 24:return Ja(n),s=Tn(on),t===null?(u=nc(),u===null&&(u=Ve,f=tc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},ac(n),la(n,on,u)):((t.lanes&a)!==0&&(rc(t,n),Xs(n,null,null,a),ks()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),la(n,on,s)):(s=f.cache,la(n,on,s),s!==u.cache&&$u(n,[on],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Hi(t){t.flags|=4}function gm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Tg(n)){if(n=ti.current,n!==null&&((Se&4194048)===Se?_i!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==_i))throw Gs=ic,$d;t.flags|=8192}}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ut():536870912,t.lanes|=n,kr|=n)}function Qs(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function A0(t,n,a){var s=n.pendingProps;switch(ju(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),zi(on),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Os(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zd())),We(n),null;case 26:return a=n.memoizedState,t===null?(Hi(n),a!==null?(We(n),gm(n,a)):(We(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Hi(n),We(n),gm(n,a)):(We(n),n.flags&=-16777217):(t.memoizedProps!==s&&Hi(n),We(n),n.flags&=-16777217),null;case 27:Fe(n),a=St.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=Q.current,Os(n)?qd(n):(t=gg(u,s,a),n.stateNode=t,Hi(n))}return We(n),null;case 5:if(Fe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(t=Q.current,Os(n))qd(n);else{switch(u=Ll(St.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[rn]=n,t[_n]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;t:switch(Mn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Hi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=St.current,Os(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=wn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ug(t.nodeValue,a)),t||Ka(n)}else t=Ll(t).createTextNode(s),t[rn]=n,n.stateNode=t}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Os(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=Zd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),We(n),null;case 4:return re(),t===null&&lf(n.stateNode.containerInfo),We(n),null;case 10:return zi(n.type),We(n),null;case 19:if(vt(ln),u=n.memoizedState,u===null)return We(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)Qs(u,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,Qs(u,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xd(a,t),a=a.sibling;return xt(ln,ln.current&1|2),n.child}t=t.sibling}u.tail!==null&&te()>yl&&(n.flags|=128,s=!0,Qs(u,!1),n.lanes=4194304)}else{if(!s)if(t=pl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),Qs(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!be)return We(n),null}else 2*te()-u.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,s=!0,Qs(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=te(),n.sibling=null,t=ln.current,xt(ln,s?t&1|2:t&1),n):(We(n),null);case 22:case 23:return Ii(n),uc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt($a),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(on),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function R0(t,n){switch(ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return zi(on),re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 13:if(Ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(ln),null;case 4:return re(),null;case 10:return zi(n.type),null;case 22:case 23:return Ii(n),uc(),t!==null&&vt($a),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return zi(on),null;case 25:return null;default:return null}}function _m(t,n){switch(ju(n),n.tag){case 3:zi(on),re();break;case 26:case 27:case 5:Fe(n);break;case 4:re();break;case 13:Ii(n);break;case 19:vt(ln);break;case 10:zi(n.type);break;case 22:case 23:Ii(n),uc(),t!==null&&vt($a);break;case 24:zi(on)}}function Js(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(E){Ie(n,n.return,E)}}function ma(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var S=s.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,u=n;var O=a,J=E;try{J()}catch(ut){Ie(u,O,ut)}}}s=s.next}while(s!==f)}}catch(ut){Ie(n,n.return,ut)}}function vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{rp(n,a)}catch(s){Ie(t,t.return,s)}}}function Sm(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function $s(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ie(t,n,u)}}function vi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ie(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(t,n,u)}else a.current=null}function xm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ie(t,t.return,u)}}function Bc(t,n,a){try{var s=t.stateNode;Z0(s,t.type,a,n),s[_n]=n}catch(u){Ie(t,t.return,u)}}function Mm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function Ic(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Mm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ul));else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Fc(t,n,a),t=t.sibling;t!==null;)Fc(t,n,a),t=t.sibling}function xl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(xl(t,n,a),t=t.sibling;t!==null;)xl(t,n,a),t=t.sibling}function ym(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,s,a),n[rn]=t,n[_n]=a}catch(f){Ie(t,t.return,f)}}var Gi=!1,Je=!1,Hc=!1,Em=typeof WeakSet=="function"?WeakSet:Set,pn=null;function C0(t,n){if(t=t.containerInfo,ff=Il,t=Od(t),Iu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,E=-1,O=-1,J=0,ut=0,gt=t,et=null;e:for(;;){for(var it;gt!==a||u!==0&&gt.nodeType!==3||(E=S+u),gt!==f||s!==0&&gt.nodeType!==3||(O=S+s),gt.nodeType===3&&(S+=gt.nodeValue.length),(it=gt.firstChild)!==null;)et=gt,gt=it;for(;;){if(gt===t)break e;if(et===a&&++J===u&&(E=S),et===f&&++ut===s&&(O=S),(it=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=it}a=E===-1||O===-1?null:{start:E,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(hf={focusedElem:t,selectionRange:a},Il=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Jt=er(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(Jt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){Ie(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Tm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ga(t,a),s&4&&Js(5,a);break;case 1:if(ga(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ie(a,a.return,S)}else{var u=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(a,a.return,S)}}s&64&&vm(a),s&512&&$s(a,a.return);break;case 3:if(ga(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rp(t,n)}catch(S){Ie(a,a.return,S)}}break;case 27:n===null&&s&4&&ym(a);case 26:case 5:ga(t,a),n===null&&s&4&&xm(a),s&512&&$s(a,a.return);break;case 12:ga(t,a);break;case 13:ga(t,a),s&4&&Rm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=B0.bind(null,a),eS(t,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||Je,u=Gi;var f=Je;Gi=s,(Je=n)&&!f?_a(t,a,(a.subtreeFlags&8772)!==0):ga(t,a),Gi=u,Je=f}break;case 30:break;default:ga(t,a)}}function bm(t){var n=t.alternate;n!==null&&(t.alternate=null,bm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&aa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ke=null,zn=!1;function Vi(t,n,a){for(a=a.child;a!==null;)Am(t,n,a),a=a.sibling}function Am(t,n,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:Je||vi(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||vi(a,n);var s=ke,u=zn;Ea(a.type)&&(ke=a.stateNode,zn=!1),Vi(t,n,a),lo(a.stateNode),ke=s,zn=u;break;case 5:Je||vi(a,n);case 6:if(s=ke,u=zn,ke=null,Vi(t,n,a),ke=s,zn=u,ke!==null)if(zn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:ke!==null&&(zn?(t=ke,pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_o(t)):pg(ke,a.stateNode));break;case 4:s=ke,u=zn,ke=a.stateNode.containerInfo,zn=!0,Vi(t,n,a),ke=s,zn=u;break;case 0:case 11:case 14:case 15:Je||ma(2,a,n),Je||ma(4,a,n),Vi(t,n,a);break;case 1:Je||(vi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Sm(a,n,s)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,Vi(t,n,a),Je=s;break;default:Vi(t,n,a)}}function Rm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_o(t)}catch(a){Ie(n,n.return,a)}}function w0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Em),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Em),n;default:throw Error(r(435,t.tag))}}function Gc(t,n){var a=w0(t);n.forEach(function(s){var u=I0.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function kn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,S=n,E=S;t:for(;E!==null;){switch(E.tag){case 27:if(Ea(E.type)){ke=E.stateNode,zn=!1;break t}break;case 5:ke=E.stateNode,zn=!1;break t;case 3:case 4:ke=E.stateNode.containerInfo,zn=!0;break t}E=E.return}if(ke===null)throw Error(r(160));Am(f,S,u),ke=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Cm(n,t),n=n.sibling}var oi=null;function Cm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),s&4&&(ma(3,t,t.return),Js(3,t),ma(5,t,t.return));break;case 1:kn(n,t),Xn(t),s&512&&(Je||a===null||vi(a,a.return)),s&64&&Gi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=oi;if(kn(n,t),Xn(t),s&512&&(Je||a===null||vi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ia]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,s,a),f[rn]=t,tn(f),s=f;break t;case"link":var S=yg("link","href",u).get(s+(a.href||""));if(S){for(var E=0;E<S.length;E++)if(f=S[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(E,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;case"meta":if(S=yg("meta","content",u).get(s+(a.content||""))){for(E=0;E<S.length;E++)if(f=S[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(E,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,tn(f),s=f}t.stateNode=s}else Eg(u,t.type,t.stateNode);else t.stateNode=Mg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Eg(u,t.type,t.stateNode):Mg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Bc(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),s&512&&(Je||a===null||vi(a,a.return)),a!==null&&s&4&&Bc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),s&512&&(Je||a===null||vi(a,a.return)),t.flags&32){u=t.stateNode;try{mi(u,"")}catch(it){Ie(t,t.return,it)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Bc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Hc=!0);break;case 6:if(kn(n,t),Xn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(it){Ie(t,t.return,it)}}break;case 3:if(Pl=null,u=oi,oi=Nl(n.containerInfo),kn(n,t),oi=u,Xn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{_o(n.containerInfo)}catch(it){Ie(t,t.return,it)}Hc&&(Hc=!1,wm(t));break;case 4:s=oi,oi=Nl(t.stateNode.containerInfo),kn(n,t),Xn(t),oi=s;break;case 12:kn(n,t),Xn(t);break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yc=te()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gc(t,s)));break;case 22:u=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,J=Gi,ut=Je;if(Gi=J||u,Je=ut||O,kn(n,t),Je=ut,Gi=J,Xn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||O||Gi||Je||nr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=O.stateNode;var gt=O.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){Ie(O,O.return,it)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=u?"":O.memoizedProps}catch(it){Ie(O,O.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Gc(t,a))));break;case 19:kn(n,t),Xn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gc(t,s)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Mm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Ic(t);xl(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(mi(S,""),a.flags&=-33);var E=Ic(t);xl(t,E,S);break;case 3:case 4:var O=a.stateNode.containerInfo,J=Ic(t);Fc(t,J,O);break;default:throw Error(r(161))}}catch(ut){Ie(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function wm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;wm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ga(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tm(t,n.alternate,n),n=n.sibling}function nr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),nr(n);break;case 1:vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Sm(n,n.return,a),nr(n);break;case 27:lo(n.stateNode);case 26:case 5:vi(n,n.return),nr(n);break;case 22:n.memoizedState===null&&nr(n);break;case 30:nr(n);break;default:nr(n)}t=t.sibling}}function _a(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:_a(u,f,a),Js(4,f);break;case 1:if(_a(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ie(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var O=u.shared.hiddenCallbacks;if(O!==null)for(u.shared.hiddenCallbacks=null,u=0;u<O.length;u++)ap(O[u],E)}catch(J){Ie(s,s.return,J)}}a&&S&64&&vm(f),$s(f,f.return);break;case 27:ym(f);case 26:case 5:_a(u,f,a),a&&s===null&&S&4&&xm(f),$s(f,f.return);break;case 12:_a(u,f,a);break;case 13:_a(u,f,a),a&&S&4&&Rm(u,f);break;case 22:f.memoizedState===null&&_a(u,f,a),$s(f,f.return);break;case 30:break;default:_a(u,f,a)}n=n.sibling}}function Vc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Is(a))}function kc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Is(t))}function Si(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dm(t,n,a,s),n=n.sibling}function Dm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,s),u&2048&&Js(9,n);break;case 1:Si(t,n,a,s);break;case 3:Si(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Is(t)));break;case 12:if(u&2048){Si(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,E=f.onPostCommit;typeof E=="function"&&E(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Ie(n,n.return,O)}}else Si(t,n,a,s);break;case 13:Si(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,s):to(t,n):f._visibility&2?Si(t,n,a,s):(f._visibility|=2,Hr(t,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Vc(S,n);break;case 24:Si(t,n,a,s),u&2048&&kc(n.alternate,n);break;default:Si(t,n,a,s)}}function Hr(t,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,E=a,O=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:Hr(f,S,E,O,u),Js(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Hr(f,S,E,O,u):to(f,S):(ut._visibility|=2,Hr(f,S,E,O,u)),u&&J&2048&&Vc(S.alternate,S);break;case 24:Hr(f,S,E,O,u),u&&J&2048&&kc(S.alternate,S);break;default:Hr(f,S,E,O,u)}n=n.sibling}}function to(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:to(a,s),u&2048&&Vc(s.alternate,s);break;case 24:to(a,s),u&2048&&kc(s.alternate,s);break;default:to(a,s)}n=n.sibling}}var eo=8192;function Gr(t){if(t.subtreeFlags&eo)for(t=t.child;t!==null;)Um(t),t=t.sibling}function Um(t){switch(t.tag){case 26:Gr(t),t.flags&eo&&t.memoizedState!==null&&pS(oi,t.memoizedState,t.memoizedProps);break;case 5:Gr(t);break;case 3:case 4:var n=oi;oi=Nl(t.stateNode.containerInfo),Gr(t),oi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=eo,eo=16777216,Gr(t),eo=n):Gr(t));break;default:Gr(t)}}function Lm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function no(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Om(s,t)}Lm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nm(t),t=t.sibling}function Nm(t){switch(t.tag){case 0:case 11:case 15:no(t),t.flags&2048&&ma(9,t,t.return);break;case 3:no(t);break;case 12:no(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ml(t)):no(t);break;default:no(t)}}function Ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Om(s,t)}Lm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ma(8,n,n.return),Ml(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ml(n));break;default:Ml(n)}t=t.sibling}}function Om(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Is(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(bm(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var D0={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},U0=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ve=null,he=null,Se=0,we=0,Wn=null,va=!1,Vr=!1,Xc=!1,ki=0,Ze=0,Sa=0,ir=0,Wc=0,ei=0,kr=0,io=null,Bn=null,qc=!1,Yc=0,yl=1/0,El=null,xa=null,xn=0,Ma=null,Xr=null,Wr=0,Zc=0,jc=null,Pm=null,ao=0,Kc=null;function qn(){if((Ce&2)!==0&&Se!==0)return Se&-Se;if(P.T!==null){var t=Lr;return t!==0?t:af()}return Me()}function zm(){ei===0&&(ei=(Se&536870912)===0||be?k():536870912);var t=ti.current;return t!==null&&(t.flags|=32),ei}function Yn(t,n,a){(t===Ve&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(qr(t,0),ya(t,Se,ei,!1)),mt(t,a),((Ce&2)===0||t!==Ve)&&(t===Ve&&((Ce&2)===0&&(ir|=a),Ze===4&&ya(t,Se,ei,!1)),xi(t))}function Bm(t,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||$t(t,n),u=s?O0(t,n):$c(t,n,!0),f=s;do{if(u===0){Vr&&!s&&ya(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!L0(a)){u=$c(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var E=t;u=io;var O=E.current.memoizedState.isDehydrated;if(O&&(qr(E,S).flags|=256),S=$c(E,S,!1),S!==2){if(Xc&&!O){E.errorRecoveryDisabledLanes|=f,ir|=f,u=4;break t}f=Bn,Bn=u,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){qr(t,0),ya(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ya(s,n,ei,!va);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Yc+300-te(),10<u)){if(ya(s,n,ei,!va),oe(s,0,!0)!==0)break t;s.timeoutHandle=hg(Im.bind(null,s,a,Bn,El,qc,n,ei,ir,kr,va,f,2,-0,0),u);break t}Im(s,a,Bn,El,qc,n,ei,ir,kr,va,f,0,-0,0)}}break}while(!0);xi(t)}function Im(t,n,a,s,u,f,S,E,O,J,ut,gt,et,it){if(t.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(fo={stylesheets:null,count:0,unsuspend:dS},Um(n),gt=mS(),gt!==null)){t.cancelPendingCommit=gt(Wm.bind(null,t,n,f,a,s,u,S,E,O,ut,1,et,it)),ya(t,f,S,!J);return}Wm(t,n,f,a,s,u,S,E,O)}function L0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Gn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ya(t,n,a,s){n&=~Wc,n&=~ir,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Rt(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&Lt(t,a,n)}function Tl(){return(Ce&6)===0?(ro(0),!1):!0}function Qc(){if(he!==null){if(we===0)var t=he.return;else t=he,Pi=Qa=null,pc(t),Ir=null,js=0,t=he;for(;t!==null;)_m(t.alternate,t),t=t.return;he=null}}function qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,K0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qc(),Ve=t,he=a=Li(t.current,null),Se=n,we=0,Wn=null,va=!1,Vr=$t(t,n),Xc=!1,kr=ei=Wc=ir=Sa=Ze=0,Bn=io=null,qc=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Rt(s),f=1<<u;n|=t[u],s&=~f}return ki=n,qo(),a}function Fm(t,n){le=null,P.H=fl,n===Hs||n===el?(n=np(),we=3):n===$d?(n=np(),we=4):we=n===im?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,he===null&&(Ze=1,gl(t,Kn(n,t.current)))}function Hm(){var t=P.H;return P.H=fl,t===null?fl:t}function Gm(){var t=P.A;return P.A=D0,t}function Jc(){Ze=4,va||(Se&4194048)!==Se&&ti.current!==null||(Vr=!0),(Sa&134217727)===0&&(ir&134217727)===0||Ve===null||ya(Ve,Se,ei,!1)}function $c(t,n,a){var s=Ce;Ce|=2;var u=Hm(),f=Gm();(Ve!==t||Se!==n)&&(El=null,qr(t,n)),n=!1;var S=Ze;t:do try{if(we!==0&&he!==null){var E=he,O=Wn;switch(we){case 8:Qc(),S=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var J=we;if(we=0,Wn=null,Yr(t,E,O,J),a&&Vr){S=0;break t}break;default:J=we,we=0,Wn=null,Yr(t,E,O,J)}}N0(),S=Ze;break}catch(ut){Fm(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Pi=Qa=null,Ce=s,P.H=u,P.A=f,he===null&&(Ve=null,Se=0,qo()),S}function N0(){for(;he!==null;)Vm(he)}function O0(t,n){var a=Ce;Ce|=2;var s=Hm(),u=Gm();Ve!==t||Se!==n?(El=null,yl=te()+500,qr(t,n)):Vr=$t(t,n);t:do try{if(we!==0&&he!==null){n=he;var f=Wn;e:switch(we){case 1:we=0,Wn=null,Yr(t,n,f,1);break;case 2:case 9:if(tp(f)){we=0,Wn=null,km(n);break}n=function(){we!==2&&we!==9||Ve!==t||(we=7),xi(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:tp(f)?(we=0,Wn=null,km(n)):(we=0,Wn=null,Yr(t,n,f,7));break;case 5:var S=null;switch(he.tag){case 26:S=he.memoizedState;case 5:case 27:var E=he;if(!S||Tg(S)){we=0,Wn=null;var O=E.sibling;if(O!==null)he=O;else{var J=E.return;J!==null?(he=J,bl(J)):he=null}break e}}we=0,Wn=null,Yr(t,n,f,5);break;case 6:we=0,Wn=null,Yr(t,n,f,6);break;case 8:Qc(),Ze=6;break t;default:throw Error(r(462))}}P0();break}catch(ut){Fm(t,ut)}while(!0);return Pi=Qa=null,P.H=s,P.A=u,Ce=a,he!==null?0:(Ve=null,Se=0,qo(),Ze)}function P0(){for(;he!==null&&!Ln();)Vm(he)}function Vm(t){var n=mm(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?bl(t):he=n}function km(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=um(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=um(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:pc(n);default:_m(a,n),n=he=Xd(n,ki),n=mm(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?bl(t):he=n}function Yr(t,n,a,s){Pi=Qa=null,pc(n),Ir=null,js=0;var u=n.return;try{if(T0(t,u,n,a,Se)){Ze=1,gl(t,Kn(a,t.current)),he=null;return}}catch(f){if(u!==null)throw he=u,f;Ze=1,gl(t,Kn(a,t.current)),he=null;return}n.flags&32768?(be||s===1?t=!0:Vr||(Se&536870912)!==0?t=!1:(va=t=!0,(s===2||s===9||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),Xm(n,t)):bl(n)}function bl(t){var n=t;do{if((n.flags&32768)!==0){Xm(n,va);return}t=n.return;var a=A0(n.alternate,n,ki);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ze===0&&(Ze=5)}function Xm(t,n){do{var a=R0(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ze=6,he=null}function Wm(t,n,a,s,u,f,S,E,O){t.cancelPendingCommit=null;do Al();while(xn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ku,Pt(t,a,f,S,E,O),t===Ve&&(he=Ve=null,Se=0),Xr=n,Ma=t,Wr=a,Zc=f,jc=u,Pm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,F0(L,function(){return Km(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=j.p,j.p=2,S=Ce,Ce|=4;try{C0(t,n,a)}finally{Ce=S,j.p=u,P.T=s}}xn=1,qm(),Ym(),Zm()}}function qm(){if(xn===1){xn=0;var t=Ma,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=Ce;Ce|=4;try{Cm(n,t);var f=hf,S=Od(t.containerInfo),E=f.focusedElem,O=f.selectionRange;if(S!==E&&E&&E.ownerDocument&&Nd(E.ownerDocument.documentElement,E)){if(O!==null&&Iu(E)){var J=O.start,ut=O.end;if(ut===void 0&&(ut=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ut,E.value.length);else{var gt=E.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var it=et.getSelection(),Jt=E.textContent.length,Yt=Math.min(O.start,Jt),Oe=O.end===void 0?Yt:Math.min(O.end,Jt);!it.extend&&Yt>Oe&&(S=Oe,Oe=Yt,Yt=S);var X=Ld(E,Yt),H=Ld(E,Oe);if(X&&H&&(it.rangeCount!==1||it.anchorNode!==X.node||it.anchorOffset!==X.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var K=gt.createRange();K.setStart(X.node,X.offset),it.removeAllRanges(),Yt>Oe?(it.addRange(K),it.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),it.addRange(K))}}}}for(gt=[],it=E;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var dt=gt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Il=!!ff,hf=ff=null}finally{Ce=u,j.p=s,P.T=a}}t.current=n,xn=2}}function Ym(){if(xn===2){xn=0;var t=Ma,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=Ce;Ce|=4;try{Tm(t,n.alternate,n)}finally{Ce=u,j.p=s,P.T=a}}xn=3}}function Zm(){if(xn===4||xn===3){xn=0,pe();var t=Ma,n=Xr,a=Wr,s=Pm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Xr=Ma=null,jm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(xa=null),$e(a),n=n.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=j.p,j.p=2,P.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var E=s[S];f(E.value,{componentStack:E.stack})}}finally{P.T=n,j.p=u}}(Wr&3)!==0&&Al(),xi(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Kc?ao++:(ao=0,Kc=t):ao=0,ro(0)}}function jm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Is(n)))}function Al(t){return qm(),Ym(),Zm(),Km()}function Km(){if(xn!==5)return!1;var t=Ma,n=Zc;Zc=0;var a=$e(Wr),s=P.T,u=j.p;try{j.p=32>a?32:a,P.T=null,a=jc,jc=null;var f=Ma,S=Wr;if(xn=0,Xr=Ma=null,Wr=0,(Ce&6)!==0)throw Error(r(331));var E=Ce;if(Ce|=4,Nm(f.current),Dm(f,f.current,S,a),Ce=E,ro(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{j.p=u,P.T=s,jm(t,n)}}function Qm(t,n,a){n=Kn(a,n),n=Cc(t.stateNode,n,2),t=fa(t,n,2),t!==null&&(mt(t,2),xi(t))}function Ie(t,n,a){if(t.tag===3)Qm(t,t,a);else for(;n!==null;){if(n.tag===3){Qm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){t=Kn(a,t),a=em(2),s=fa(n,a,2),s!==null&&(nm(a,s,n,t),mt(s,2),xi(s));break}}n=n.return}}function tf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new U0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Xc=!0,u.add(a),t=z0.bind(null,t,n,a),n.then(t,t))}function z0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(Se&a)===a&&(Ze===4||Ze===3&&(Se&62914560)===Se&&300>te()-Yc?(Ce&2)===0&&qr(t,0):Wc|=a,kr===Se&&(kr=0)),xi(t)}function Jm(t,n){n===0&&(n=Ut()),t=Cr(t,n),t!==null&&(mt(t,n),xi(t))}function B0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Jm(t,a)}function I0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Jm(t,a)}function F0(t,n){return ue(t,n)}var Rl=null,Zr=null,ef=!1,Cl=!1,nf=!1,ar=0;function xi(t){t!==Zr&&t.next===null&&(Zr===null?Rl=Zr=t:Zr=Zr.next=t),Cl=!0,ef||(ef=!0,G0())}function ro(t,n){if(!nf&&Cl){nf=!0;do for(var a=!1,s=Rl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Rt(42|t)+1)-1,f&=u&~(S&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ng(s,f))}else f=Se,f=oe(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||$t(s,f)||(a=!0,ng(s,f));s=s.next}while(a);nf=!1}}function H0(){$m()}function $m(){Cl=ef=!1;var t=0;ar!==0&&(j0()&&(t=ar),ar=0);for(var n=te(),a=null,s=Rl;s!==null;){var u=s.next,f=tg(s,n);f===0?(s.next=null,a===null?Rl=u:a.next=u,u===null&&(Zr=a)):(a=s,(t!==0||(f&3)!==0)&&(Cl=!0)),s=u}ro(t)}function tg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Rt(f),E=1<<S,O=u[S];O===-1?((E&a)===0||(E&s)!==0)&&(u[S]=Ue(E,n)):O<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ve,a=Se,a=oe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&F(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&F(s),$e(a)){case 2:case 8:a=Ht;break;case 32:a=L;break;case 268435456:a=tt;break;default:a=L}return s=eg.bind(null,t),a=ue(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&F(s),t.callbackPriority=2,t.callbackNode=null,2}function eg(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Al()&&t.callbackNode!==a)return null;var s=Se;return s=oe(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Bm(t,s,n),tg(t,te()),t.callbackNode!=null&&t.callbackNode===a?eg.bind(null,t):null)}function ng(t,n){if(Al())return null;Bm(t,n,!0)}function G0(){Q0(function(){(Ce&6)!==0?ue(De,H0):$m()})}function af(){return ar===0&&(ar=k()),ar}function ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fo(""+t)}function ag(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function V0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=ig((u[_n]||null).action),S=s.submitter;S&&(n=(n=S[_n]||null)?ig(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var E=new ko("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ar!==0){var O=S?ag(u,S):new FormData(u);Ec(a,{pending:!0,data:O,method:u.method,action:f},null,O)}}else typeof f=="function"&&(E.preventDefault(),O=S?ag(u,S):new FormData(u),Ec(a,{pending:!0,data:O,method:u.method,action:f},f,O))},currentTarget:u}]})}}for(var rf=0;rf<Vu.length;rf++){var sf=Vu[rf],k0=sf.toLowerCase(),X0=sf[0].toUpperCase()+sf.slice(1);si(k0,"on"+X0)}si(Bd,"onAnimationEnd"),si(Id,"onAnimationIteration"),si(Fd,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(o0,"onTransitionRun"),si(l0,"onTransitionStart"),si(u0,"onTransitionCancel"),si(Hd,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(so));function rg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var E=s[S],O=E.instance,J=E.currentTarget;if(E=E.listener,O!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ut){ml(ut)}u.currentTarget=null,f=O}else for(S=0;S<s.length;S++){if(E=s[S],O=E.instance,J=E.currentTarget,E=E.listener,O!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ut){ml(ut)}u.currentTarget=null,f=O}}}}function de(t,n){var a=n[Ha];a===void 0&&(a=n[Ha]=new Set);var s=t+"__bubble";a.has(s)||(sg(n,t,2,!1),a.add(s))}function of(t,n,a){var s=0;n&&(s|=4),sg(a,t,s,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function lf(t){if(!t[wl]){t[wl]=!0,Bo.forEach(function(a){a!=="selectionchange"&&(W0.has(a)||of(a,!1,t),of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[wl]||(n[wl]=!0,of("selectionchange",!1,n))}}function sg(t,n,a,s){switch(Dg(n)){case 2:var u=vS;break;case 8:u=SS;break;default:u=yf}a=u.bind(null,n,a,t),u=void 0,!wu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function uf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var E=s.stateNode.containerInfo;if(E===u)break;if(S===4)for(S=s.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;E!==null;){if(S=Ai(E),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){s=f=S;continue t}E=E.parentNode}}s=s.return}dd(function(){var J=f,ut=Ru(a),gt=[];t:{var et=Gd.get(t);if(et!==void 0){var it=ko,Jt=t;switch(t){case"keypress":if(Go(a)===0)break t;case"keydown":case"keyup":it=Fv;break;case"focusin":Jt="focus",it=Nu;break;case"focusout":Jt="blur",it=Nu;break;case"beforeblur":case"afterblur":it=Nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Vv;break;case Bd:case Id:case Fd:it=Dv;break;case Hd:it=Xv;break;case"scroll":case"scrollend":it=bv;break;case"wheel":it=qv;break;case"copy":case"cut":case"paste":it=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=vd;break;case"toggle":case"beforetoggle":it=Zv}var Yt=(n&4)!==0,Oe=!Yt&&(t==="scroll"||t==="scrollend"),X=Yt?et!==null?et+"Capture":null:et;Yt=[];for(var H=J,K;H!==null;){var dt=H;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||X===null||(dt=bs(H,X),dt!=null&&Yt.push(oo(H,dt,K))),Oe)break;H=H.return}0<Yt.length&&(et=new it(et,Jt,null,a,ut),gt.push({event:et,listeners:Yt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",et&&a!==Au&&(Jt=a.relatedTarget||a.fromElement)&&(Ai(Jt)||Jt[Nn]))break t;if((it||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,it?(Jt=a.relatedTarget||a.toElement,it=J,Jt=Jt?Ai(Jt):null,Jt!==null&&(Oe=c(Jt),Yt=Jt.tag,Jt!==Oe||Yt!==5&&Yt!==27&&Yt!==6)&&(Jt=null)):(it=null,Jt=J),it!==Jt)){if(Yt=gd,dt="onMouseLeave",X="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=vd,dt="onPointerLeave",X="onPointerEnter",H="pointer"),Oe=it==null?et:Va(it),K=Jt==null?et:Va(Jt),et=new Yt(dt,H+"leave",it,a,ut),et.target=Oe,et.relatedTarget=K,dt=null,Ai(ut)===J&&(Yt=new Yt(X,H+"enter",Jt,a,ut),Yt.target=K,Yt.relatedTarget=Oe,dt=Yt),Oe=dt,it&&Jt)e:{for(Yt=it,X=Jt,H=0,K=Yt;K;K=jr(K))H++;for(K=0,dt=X;dt;dt=jr(dt))K++;for(;0<H-K;)Yt=jr(Yt),H--;for(;0<K-H;)X=jr(X),K--;for(;H--;){if(Yt===X||X!==null&&Yt===X.alternate)break e;Yt=jr(Yt),X=jr(X)}Yt=null}else Yt=null;it!==null&&og(gt,et,it,Yt,!1),Jt!==null&&Oe!==null&&og(gt,Oe,Jt,Yt,!0)}}t:{if(et=J?Va(J):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var Ft=Ad;else if(Td(et))if(Rd)Ft=a0;else{Ft=n0;var ce=e0}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&bu(J.elementType)&&(Ft=Ad):Ft=i0;if(Ft&&(Ft=Ft(t,J))){bd(gt,Ft,a,ut);break t}ce&&ce(t,et,J),t==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&En(et,"number",et.value)}switch(ce=J?Va(J):window,t){case"focusin":(Td(ce)||ce.contentEditable==="true")&&(br=ce,Fu=J,Ns=null);break;case"focusout":Ns=Fu=br=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,Pd(gt,a,ut);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":Pd(gt,a,ut)}var Gt;if(Pu)t:{switch(t){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else Tr?yd(t,a)&&(Kt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(Sd&&a.locale!=="ko"&&(Tr||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&Tr&&(Gt=pd()):(oa=ut,Du="value"in oa?oa.value:oa.textContent,Tr=!0)),ce=Dl(J,Kt),0<ce.length&&(Kt=new _d(Kt,t,null,a,ut),gt.push({event:Kt,listeners:ce}),Gt?Kt.data=Gt:(Gt=Ed(a),Gt!==null&&(Kt.data=Gt)))),(Gt=Kv?Qv(t,a):Jv(t,a))&&(Kt=Dl(J,"onBeforeInput"),0<Kt.length&&(ce=new _d("onBeforeInput","beforeinput",null,a,ut),gt.push({event:ce,listeners:Kt}),ce.data=Gt)),V0(gt,t,J,a,ut)}rg(gt,n)})}function oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Dl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=bs(t,a),u!=null&&s.unshift(oo(t,u,f)),u=bs(t,n),u!=null&&s.push(oo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function og(t,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var E=a,O=E.alternate,J=E.stateNode;if(E=E.tag,O!==null&&O===s)break;E!==5&&E!==26&&E!==27||J===null||(O=J,u?(J=bs(a,f),J!=null&&S.unshift(oo(a,J,O))):u||(J=bs(a,f),J!=null&&S.push(oo(a,J,O)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var q0=/\r\n?/g,Y0=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(q0,`
`).replace(Y0,"")}function ug(t,n){return n=lg(n),lg(t)===n}function Ul(){}function Ne(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||mi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&mi(t,""+s);break;case"className":Ct(t,"class",s);break;case"tabIndex":Ct(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(t,a,s);break;case"style":fd(t,s,f);break;case"data":if(n!=="object"){Ct(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(t,n,"name",u.name,u,null),Ne(t,n,"formEncType",u.formEncType,u,null),Ne(t,n,"formMethod",u.formMethod,u,null),Ne(t,n,"formTarget",u.formTarget,u,null)):(Ne(t,n,"encType",u.encType,u,null),Ne(t,n,"method",u.method,u,null),Ne(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Fo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":de("beforetoggle",t),de("toggle",t),Et(t,"popover",s);break;case"xlinkActuate":wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":wt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":wt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":wt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":wt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Et(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ev.get(a)||a,Et(t,a,s))}}function cf(t,n,a,s,u,f){switch(a){case"style":fd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?mi(t,s):(typeof s=="number"||typeof s=="bigint")&&mi(t,""+s);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Io.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Et(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,f,S,a,null)}}u&&Ne(t,n,"srcSet",a.srcSet,a,null),s&&Ne(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var E=f=S=u=null,O=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":u=ut;break;case"type":S=ut;break;case"checked":O=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ne(t,n,s,ut,a,null)}}Be(t,f,E,O,J,S,u,!1),qe(t);return;case"select":de("invalid",t),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":S=E;break;case"multiple":s=E;default:Ne(t,n,u,E,a,null)}n=f,a=S,t.multiple=!!s,n!=null?sn(t,!!s,n,!1):a!=null&&sn(t,!!s,a,!0);return;case"textarea":de("invalid",t),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(E=a[S],E!=null))switch(S){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ne(t,n,S,E,a,null)}vn(t,s,u,f),qe(t);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(t,n,O,s,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(s=0;s<so.length;s++)de(so[s],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,J,s,a,null)}return;default:if(bu(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&cf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ne(t,n,E,s,a,null))}function Z0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,E=null,O=null,J=null,ut=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":O=gt;default:s.hasOwnProperty(it)||Ne(t,n,it,null,s,gt)}}for(var et in s){var it=s[et];if(gt=a[et],s.hasOwnProperty(et)&&(it!=null||gt!=null))switch(et){case"type":f=it;break;case"name":u=it;break;case"checked":J=it;break;case"defaultChecked":ut=it;break;case"value":S=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&Ne(t,n,et,it,s,gt)}}wi(t,S,E,O,J,ut,f,u);return;case"select":it=S=E=et=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":it=O;default:s.hasOwnProperty(f)||Ne(t,n,f,null,s,O)}for(u in s)if(f=s[u],O=a[u],s.hasOwnProperty(u)&&(f!=null||O!=null))switch(u){case"value":et=f;break;case"defaultValue":E=f;break;case"multiple":S=f;default:f!==O&&Ne(t,n,u,f,s,O)}n=E,a=S,s=it,et!=null?sn(t,!!a,et,!1):!!s!=!!a&&(n!=null?sn(t,!!a,n,!0):sn(t,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ne(t,n,E,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":et=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ne(t,n,S,u,s,f)}hn(t,et,it);return;case"option":for(var Jt in a)if(et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!s.hasOwnProperty(Jt))switch(Jt){case"selected":t.selected=!1;break;default:Ne(t,n,Jt,null,s,et)}for(O in s)if(et=s[O],it=a[O],s.hasOwnProperty(O)&&et!==it&&(et!=null||it!=null))switch(O){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ne(t,n,O,et,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)et=a[Yt],a.hasOwnProperty(Yt)&&et!=null&&!s.hasOwnProperty(Yt)&&Ne(t,n,Yt,null,s,et);for(J in s)if(et=s[J],it=a[J],s.hasOwnProperty(J)&&et!==it&&(et!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ne(t,n,J,et,s,it)}return;default:if(bu(n)){for(var Oe in a)et=a[Oe],a.hasOwnProperty(Oe)&&et!==void 0&&!s.hasOwnProperty(Oe)&&cf(t,n,Oe,void 0,s,et);for(ut in s)et=s[ut],it=a[ut],!s.hasOwnProperty(ut)||et===it||et===void 0&&it===void 0||cf(t,n,ut,et,s,it);return}}for(var X in a)et=a[X],a.hasOwnProperty(X)&&et!=null&&!s.hasOwnProperty(X)&&Ne(t,n,X,null,s,et);for(gt in s)et=s[gt],it=a[gt],!s.hasOwnProperty(gt)||et===it||et==null&&it==null||Ne(t,n,gt,et,s,it)}var ff=null,hf=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pf=null;function j0(){var t=window.event;return t&&t.type==="popstate"?t===pf?!1:(pf=t,!0):(pf=null,!1)}var hg=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(J0)}:hg;function J0(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function pg(t,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&lo(S.documentElement),a&2&&lo(S.body),a&4)for(a=S.head,lo(a),S=a.firstChild;S;){var E=S.nextSibling,O=S.nodeName;S[ia]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=E}}if(u===0){t.removeChild(f),_o(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);_o(n)}function mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mf(a),aa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $0(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ia])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function tS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function gf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function eS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var _f=null;function mg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function gg(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function lo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);aa(t)}var ni=new Map,_g=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xi=j.d;j.d={f:nS,r:iS,D:aS,C:rS,L:sS,m:oS,X:uS,S:lS,M:cS};function nS(){var t=Xi.f(),n=Tl();return t||n}function iS(t){var n=Ri(t);n!==null&&n.tag===5&&n.type==="form"?Bp(n):Xi.r(t)}var Kr=typeof document>"u"?null:document;function vg(t,n,a){var s=Kr;if(s&&typeof n=="string"&&n){var u=Ge(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),_g.has(u)||(_g.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Mn(n,"link",t),tn(n),s.head.appendChild(n)))}}function aS(t){Xi.D(t),vg("dns-prefetch",t,null)}function rS(t,n){Xi.C(t,n),vg("preconnect",t,n)}function sS(t,n,a){Xi.L(t,n,a);var s=Kr;if(s&&t&&n){var u='link[rel="preload"][as="'+Ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ge(a.imageSizes)+'"]')):u+='[href="'+Ge(t)+'"]';var f=u;switch(n){case"style":f=Qr(t);break;case"script":f=Jr(t)}ni.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(uo(f))||n==="script"&&s.querySelector(co(f))||(n=s.createElement("link"),Mn(n,"link",t),tn(n),s.head.appendChild(n)))}}function oS(t,n){Xi.m(t,n);var a=Kr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ge(s)+'"][href="'+Ge(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(t)}if(!ni.has(f)&&(t=g({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(f)))return}s=a.createElement("link"),Mn(s,"link",t),tn(s),a.head.appendChild(s)}}}function lS(t,n,a){Xi.S(t,n,a);var s=Kr;if(s&&t){var u=ra(s).hoistableStyles,f=Qr(t);n=n||"default";var S=u.get(f);if(!S){var E={loading:0,preload:null};if(S=s.querySelector(uo(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&vf(t,a);var O=S=s.createElement("link");tn(O),Mn(O,"link",t),O._p=new Promise(function(J,ut){O.onload=J,O.onerror=ut}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ol(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:E},u.set(f,S)}}}function uS(t,n){Xi.X(t,n);var a=Kr;if(a&&t){var s=ra(a).hoistableScripts,u=Jr(t),f=s.get(u);f||(f=a.querySelector(co(u)),f||(t=g({src:t,async:!0},n),(n=ni.get(u))&&Sf(t,n),f=a.createElement("script"),tn(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function cS(t,n){Xi.M(t,n);var a=Kr;if(a&&t){var s=ra(a).hoistableScripts,u=Jr(t),f=s.get(u);f||(f=a.querySelector(co(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ni.get(u))&&Sf(t,n),f=a.createElement("script"),tn(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Sg(t,n,a,s){var u=(u=St.current)?Nl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=ra(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Qr(a.href);var f=ra(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(uo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||fS(u,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=ra(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Qr(t){return'href="'+Ge(t)+'"'}function uo(t){return'link[rel="stylesheet"]['+t+"]"}function xg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function fS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),tn(n),t.head.appendChild(n))}function Jr(t){return'[src="'+Ge(t)+'"]'}function co(t){return"script[async]"+t}function Mg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ge(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tn(s),Mn(s,"style",u),Ol(s,a.precedence,t),n.instance=s;case"stylesheet":u=Qr(a.href);var f=t.querySelector(uo(u));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;s=xg(a),(u=ni.get(u))&&vf(s,u),f=(t.ownerDocument||t).createElement("link"),tn(f);var S=f;return S._p=new Promise(function(E,O){S.onload=E,S.onerror=O}),Mn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,t),n.instance=f;case"script":return f=Jr(a.src),(u=t.querySelector(co(f)))?(n.instance=u,tn(u),u):(s=a,(u=ni.get(f))&&(s=g({},a),Sf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),tn(u),Mn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,t));return n.instance}function Ol(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var E=s[S];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pl=null;function yg(t,n,a){if(Pl===null){var s=new Map,u=Pl=new Map;u.set(a,s)}else u=Pl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ia]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var E=s.get(S);E?E.push(f):s.set(S,[f])}}return s}function Eg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function hS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var fo=null;function dS(){}function pS(t,n,a){if(fo===null)throw Error(r(475));var s=fo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Qr(a.href),f=t.querySelector(uo(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=zl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=xg(a),(u=ni.get(u))&&vf(a,u),f=f.createElement("link"),tn(f);var S=f;S._p=new Promise(function(E,O){S.onload=E,S.onerror=O}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=zl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function mS(){if(fo===null)throw Error(r(475));var t=fo;return t.stylesheets&&t.count===0&&xf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&xf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)xf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function xf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(gS,t),Bl=null,zl.call(t))}function gS(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=zl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ho={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function _S(t,n,a,s,u,f,S,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lt(0),this.hiddenUpdates=lt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function bg(t,n,a,s,u,f,S,E,O,J,ut,gt){return t=new _S(t,n,a,S,E,O,J,gt),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),t.current=f,f.stateNode=t,n=tc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},ac(f),t}function Ag(t){return t?(t=wr,t):wr}function Rg(t,n,a,s,u,f){u=Ag(u),s.context===null?s.context=u:s.pendingContext=u,s=ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=fa(t,s,n),a!==null&&(Yn(a,t,n),Vs(a,t,n))}function Cg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Mf(t,n){Cg(t,n),(t=t.alternate)&&Cg(t,n)}function wg(t){if(t.tag===13){var n=Cr(t,67108864);n!==null&&Yn(n,t,67108864),Mf(t,67108864)}}var Il=!0;function vS(t,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=2,yf(t,n,a,s)}finally{j.p=f,P.T=u}}function SS(t,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=8,yf(t,n,a,s)}finally{j.p=f,P.T=u}}function yf(t,n,a,s){if(Il){var u=Ef(s);if(u===null)uf(t,n,s,Fl,a),Ug(t,s);else if(MS(u,t,n,a,s))s.stopPropagation();else if(Ug(t,s),n&4&&-1<xS.indexOf(t)){for(;u!==null;){var f=Ri(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ot(f.pendingLanes);if(S!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var O=1<<31-Rt(S);E.entanglements[1]|=O,S&=~O}xi(f),(Ce&6)===0&&(yl=te()+500,ro(0))}}break;case 13:E=Cr(f,2),E!==null&&Yn(E,f,2),Tl(),Mf(f,2)}if(f=Ef(s),f===null&&uf(t,n,s,Fl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else uf(t,n,s,null,a)}}function Ef(t){return t=Ru(t),Tf(t)}var Fl=null;function Tf(t){if(Fl=null,t=Ai(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function Dg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case De:return 2;case Ht:return 8;case L:case T:return 32;case tt:return 268435456;default:return 32}default:return 32}}var bf=!1,Ta=null,ba=null,Aa=null,po=new Map,mo=new Map,Ra=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ug(t,n){switch(t){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(n.pointerId)}}function go(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ri(n),n!==null&&wg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function MS(t,n,a,s,u){switch(n){case"focusin":return Ta=go(Ta,t,n,a,s,u),!0;case"dragenter":return ba=go(ba,t,n,a,s,u),!0;case"mouseover":return Aa=go(Aa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return po.set(f,go(po.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,mo.set(f,go(mo.get(f)||null,t,n,a,s,u)),!0}return!1}function Lg(t){var n=Ai(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Hn(t.priority,function(){if(a.tag===13){var s=qn();s=He(s);var u=Cr(a,s);u!==null&&Yn(u,a,s),Mf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ef(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Au=s,a.target.dispatchEvent(s),Au=null}else return n=Ri(a),n!==null&&wg(n),t.blockedOn=a,!1;n.shift()}return!0}function Ng(t,n,a){Hl(t)&&a.delete(n)}function yS(){bf=!1,Ta!==null&&Hl(Ta)&&(Ta=null),ba!==null&&Hl(ba)&&(ba=null),Aa!==null&&Hl(Aa)&&(Aa=null),po.forEach(Ng),mo.forEach(Ng)}function Gl(t,n){t.blockedOn===n&&(t.blockedOn=null,bf||(bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yS)))}var Vl=null;function Og(t){Vl!==t&&(Vl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Tf(s||a)===null)continue;break}var f=Ri(a);f!==null&&(t.splice(n,3),n-=3,Ec(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function _o(t){function n(O){return Gl(O,t)}Ta!==null&&Gl(Ta,t),ba!==null&&Gl(ba,t),Aa!==null&&Gl(Aa,t),po.forEach(n),mo.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Lg(a),a.blockedOn===null&&Ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[_n]||null;if(typeof f=="function")S||Og(a);else if(S){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[_n]||null)E=S.formAction;else if(Tf(u)!==null)continue}else E=S.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Og(a)}}}function Af(t){this._internalRoot=t}kl.prototype.render=Af.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();Rg(a,s,t,n,null,null)},kl.prototype.unmount=Af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Rg(t.current,2,null,t,null,null),Tl(),n[Nn]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Me();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,t),a===0&&Lg(t)}};var Pg=e.version;if(Pg!=="19.1.0")throw Error(r(527,Pg,"19.1.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var ES={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{ht=Xl.inject(ES),zt=Xl}catch{}}return So.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Qp,f=Jp,S=$p,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=bg(t,1,!1,null,null,a,s,u,f,S,E,null),t[Nn]=n.current,lf(t),new Af(n)},So.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Qp,S=Jp,E=$p,O=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=bg(t,1,!0,n,a??null,s,u,f,S,E,O,J),n.context=Ag(null),a=n.current,s=qn(),s=He(s),u=ca(s),u.callback=null,fa(a,u,s),a=s,n.current.lanes=a,mt(n,a),xi(n),t[Nn]=n.current,lf(t),new kl(n)},So.version="19.1.0",So}var Wg;function NS(){if(Wg)return wf.exports;Wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),wf.exports=LS(),wf.exports}var OS=NS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jh="175",PS=0,qg=1,zS=2,W_=1,BS=2,Qi=3,Ia=0,Fn=1,Ji=2,za=0,ms=1,Yg=2,Zg=3,jg=4,IS=5,dr=100,FS=101,HS=102,GS=103,VS=104,kS=200,XS=201,WS=202,qS=203,ch=204,fh=205,YS=206,ZS=207,jS=208,KS=209,QS=210,JS=211,$S=212,tx=213,ex=214,hh=0,dh=1,ph=2,_s=3,mh=4,gh=5,_h=6,vh=7,$h=0,nx=1,ix=2,Ba=0,ax=1,rx=2,sx=3,ox=4,lx=5,ux=6,cx=7,q_=300,vs=301,Ss=302,Sh=303,xh=304,yu=306,Mh=1e3,mr=1001,yh=1002,pi=1003,fx=1004,Wl=1005,yi=1006,Nf=1007,gr=1008,na=1009,Y_=1010,Z_=1011,Ao=1012,td=1013,Sr=1014,$i=1015,Do=1016,ed=1017,nd=1018,Ro=1020,j_=35902,K_=1021,Q_=1022,di=1023,J_=1024,$_=1025,Co=1026,wo=1027,tv=1028,id=1029,ev=1030,ad=1031,rd=1033,hu=33776,du=33777,pu=33778,mu=33779,Eh=35840,Th=35841,bh=35842,Ah=35843,Rh=36196,Ch=37492,wh=37496,Dh=37808,Uh=37809,Lh=37810,Nh=37811,Oh=37812,Ph=37813,zh=37814,Bh=37815,Ih=37816,Fh=37817,Hh=37818,Gh=37819,Vh=37820,kh=37821,gu=36492,Xh=36494,Wh=36495,nv=36283,qh=36284,Yh=36285,Zh=36286,hx=3200,dx=3201,iv=0,px=1,Pa="",ai="srgb",xs="srgb-linear",Su="linear",Pe="srgb",$r=7680,Kg=519,mx=512,gx=513,_x=514,av=515,vx=516,Sx=517,xx=518,Mx=519,Qg=35044,Jg="300 es",ta=2e3,xu=2001;class ys{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=Math.PI/180,jh=180/Math.PI;function Uo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function yx(o,e){return(o%e+e)%e}function Pf(o,e,i){return(1-i)*o+i*e}function xo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,i=0){Re.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(e,i,r,l,c,h,d,m,p){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],A=r[8],C=l[0],M=l[3],_=l[6],z=l[1],N=l[4],D=l[7],G=l[2],V=l[5],I=l[8];return c[0]=h*C+d*z+m*G,c[3]=h*M+d*N+m*V,c[6]=h*_+d*D+m*I,c[1]=p*C+g*z+v*G,c[4]=p*M+g*N+v*V,c[7]=p*_+g*D+v*I,c[2]=x*C+y*z+A*G,c[5]=x*M+y*N+A*V,c[8]=x*_+y*D+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,x=d*m-g*c,y=p*c-h*m,A=i*v+r*x+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(l*p-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(zf.makeScale(e,i)),this}rotate(e){return this.premultiply(zf.makeRotation(-e)),this}translate(e,i){return this.premultiply(zf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zf=new ae;function rv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Mu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ex(){const o=Mu("canvas");return o.style.display="block",o}const $g={};function _u(o){o in $g||($g[o]=!0,console.warn(o))}function Tx(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function bx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ax(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const t_=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e_=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rx(){const o={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Pe&&(l.r=ea(l.r),l.g=ea(l.g),l.b=ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=gs(l.r),l.g=gs(l.g),l.b=gs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Pa?Su:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[xs]:{primaries:e,whitePoint:r,transfer:Su,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const Te=Rx();function ea(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function gs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class Cx{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ts===void 0&&(ts=Mu("canvas")),ts.width=e.width,ts.height=e.height;const l=ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ts}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Mu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ea(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ea(i[r]/255)*255):i[r]=ea(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wx=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Bf(l[h].image)):c.push(Bf(l[h]))}else c=Bf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Bf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Cx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dx=0;class Un extends ys{constructor(e=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=mr,l=mr,c=yi,h=gr,d=di,m=na,p=Un.DEFAULT_ANISOTROPY,g=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Uo(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=q_;Un.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,i=0,r=0,l=1){je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],A=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(y+1)/2,G=(_+1)/2,V=(g+x)/4,I=(v+C)/4,Z=(A+M)/4;return N>D&&N>G?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=V/r,c=I/r):D>G?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=V/l,c=Z/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=I/c,l=Z/c),this.set(r,l,c,i),this}let z=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(M-A)/z,this.y=(v-C)/z,this.z=(x-g)/z,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ux extends ys{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new je(0,0,e,i),this.scissorTest=!1,this.viewport=new je(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Un(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new sd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends Ux{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class sv extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lx extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[h+0],y=c[h+1],A=c[h+2],C=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(v!==C||m!==x||p!==y||g!==A){let M=1-d;const _=m*x+p*y+g*A+v*C,z=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const G=Math.sqrt(N),V=Math.atan2(G,_*z);M=Math.sin(M*V)/G,d=Math.sin(d*V)/G}const D=d*z;if(m=m*M+x*D,p=p*M+y*D,g=g*M+A*D,v=v*M+C*D,M===1-d){const G=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=G,p*=G,g*=G,v*=G}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[h],x=c[h+1],y=c[h+2],A=c[h+3];return e[i]=d*A+g*v+m*y-p*x,e[i+1]=m*A+g*x+p*v-d*y,e[i+2]=p*A+g*y+d*x-m*v,e[i+3]=g*A-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),x=m(r/2),y=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*g*v+p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v-x*y*A;break;case"YXZ":this._x=x*g*v+p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v+x*y*A;break;case"ZXY":this._x=x*g*v-p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v-x*y*A;break;case"ZYX":this._x=x*g*v-p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v+x*y*A;break;case"YZX":this._x=x*g*v+p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v-x*y*A;break;case"XZY":this._x=x*g*v-p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(n_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(n_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return If.copy(this).projectOnVector(e),this.sub(If)}reflect(e){return this.sub(If.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const If=new ot,n_=new Lo;class No{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ui):ui.fromBufferAttribute(c,h),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ql.copy(r.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Yl.subVectors(this.max,Mo),es.subVectors(e.a,Mo),ns.subVectors(e.b,Mo),is.subVectors(e.c,Mo),wa.subVectors(ns,es),Da.subVectors(is,ns),rr.subVectors(es,is);let i=[0,-wa.z,wa.y,0,-Da.z,Da.y,0,-rr.z,rr.y,wa.z,0,-wa.x,Da.z,0,-Da.x,rr.z,0,-rr.x,-wa.y,wa.x,0,-Da.y,Da.x,0,-rr.y,rr.x,0];return!Ff(i,es,ns,is,Yl)||(i=[1,0,0,0,1,0,0,0,1],!Ff(i,es,ns,is,Yl))?!1:(Zl.crossVectors(wa,Da),i=[Zl.x,Zl.y,Zl.z],Ff(i,es,ns,is,Yl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],ui=new ot,ql=new No,es=new ot,ns=new ot,is=new ot,wa=new ot,Da=new ot,rr=new ot,Mo=new ot,Yl=new ot,Zl=new ot,sr=new ot;function Ff(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){sr.fromArray(o,c);const d=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),m=e.dot(sr),p=i.dot(sr),g=r.dot(sr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Nx=new No,yo=new ot,Hf=new ot;class od{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Nx.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const i=yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Hf)),this.expandByPoint(yo.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new ot,Gf=new ot,jl=new ot,Ua=new ot,Vf=new ot,Kl=new ot,kf=new ot;class Ox{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,i),qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Gf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(Gf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Ua.dot(this.direction),m=-Ua.dot(jl),p=Ua.lengthSq(),g=Math.abs(1-h*h);let v,x,y,A;if(g>0)if(v=h*m-d,x=h*d-m,A=c*g,v>=0)if(x>=-A)if(x<=A){const C=1/g;v*=C,x*=C,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Gf).addScaledVector(jl,x),y}intersectSphere(e,i){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),l=qi.dot(qi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,i,r,l,c){Vf.subVectors(i,e),Kl.subVectors(r,e),kf.crossVectors(Vf,Kl);let h=this.direction.dot(kf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,e);const m=d*this.direction.dot(Kl.crossVectors(Ua,Kl));if(m<0)return null;const p=d*this.direction.dot(Vf.cross(Ua));if(p<0||m+p>h)return null;const g=-d*Ua.dot(kf);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,i,r,l,c,h,d,m,p,g,v,x,y,A,C,M){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,g,v,x,y,A,C,M)}set(e,i,r,l,c,h,d,m,p,g,v,x,y,A,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=A,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/as.setFromMatrixColumn(e,0).length(),c=1/as.setFromMatrixColumn(e,1).length(),h=1/as.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=h*g,y=h*v,A=d*g,C=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+A*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=A+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,y=m*v,A=p*g,C=p*v;i[0]=x+C*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-A,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,y=m*v,A=p*g,C=p*v;i[0]=x-C*d,i[4]=-h*v,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*g,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,y=h*v,A=d*g,C=d*v;i[0]=m*g,i[4]=A*p-y,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=C-x*v,i[8]=A*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+A,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+C,i[5]=h*g,i[9]=y*v-A,i[2]=A*v-y,i[6]=d*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Px,e,zx)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),La.crossVectors(r,Zn),La.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),La.crossVectors(r,Zn)),La.normalize(),Ql.crossVectors(Zn,La),l[0]=La.x,l[4]=Ql.x,l[8]=Zn.x,l[1]=La.y,l[5]=Ql.y,l[9]=Zn.y,l[2]=La.z,l[6]=Ql.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],A=r[2],C=r[6],M=r[10],_=r[14],z=r[3],N=r[7],D=r[11],G=r[15],V=l[0],I=l[4],Z=l[8],w=l[12],R=l[1],B=l[5],st=l[9],nt=l[13],ft=l[2],ct=l[6],P=l[10],j=l[14],q=l[3],yt=l[7],U=l[11],$=l[15];return c[0]=h*V+d*R+m*ft+p*q,c[4]=h*I+d*B+m*ct+p*yt,c[8]=h*Z+d*st+m*P+p*U,c[12]=h*w+d*nt+m*j+p*$,c[1]=g*V+v*R+x*ft+y*q,c[5]=g*I+v*B+x*ct+y*yt,c[9]=g*Z+v*st+x*P+y*U,c[13]=g*w+v*nt+x*j+y*$,c[2]=A*V+C*R+M*ft+_*q,c[6]=A*I+C*B+M*ct+_*yt,c[10]=A*Z+C*st+M*P+_*U,c[14]=A*w+C*nt+M*j+_*$,c[3]=z*V+N*R+D*ft+G*q,c[7]=z*I+N*B+D*ct+G*yt,c[11]=z*Z+N*st+D*P+G*U,c[15]=z*w+N*nt+D*j+G*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],y=e[14],A=e[3],C=e[7],M=e[11],_=e[15];return A*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*y-r*m*y)+C*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*g-c*m*g)+M*(+i*p*v-i*d*y-c*h*v+r*h*y+c*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],y=e[11],A=e[12],C=e[13],M=e[14],_=e[15],z=v*M*p-C*x*p+C*m*y-d*M*y-v*m*_+d*x*_,N=A*x*p-g*M*p-A*m*y+h*M*y+g*m*_-h*x*_,D=g*C*p-A*v*p+A*d*y-h*C*y-g*d*_+h*v*_,G=A*v*m-g*C*m-A*d*x+h*C*x+g*d*M-h*v*M,V=i*z+r*N+l*D+c*G;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return e[0]=z*I,e[1]=(C*x*c-v*M*c-C*l*y+r*M*y+v*l*_-r*x*_)*I,e[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*_+r*m*_)*I,e[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*y-r*m*y)*I,e[4]=N*I,e[5]=(g*M*c-A*x*c+A*l*y-i*M*y-g*l*_+i*x*_)*I,e[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*_-i*m*_)*I,e[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*y+i*m*y)*I,e[8]=D*I,e[9]=(A*v*c-g*C*c-A*r*y+i*C*y+g*r*_-i*v*_)*I,e[10]=(h*C*c-A*d*c+A*r*p-i*C*p-h*r*_+i*d*_)*I,e[11]=(g*d*c-h*v*c-g*r*p+i*v*p+h*r*y-i*d*y)*I,e[12]=G*I,e[13]=(g*C*l-A*v*l+A*r*x-i*C*x-g*r*M+i*v*M)*I,e[14]=(A*d*l-h*C*l-A*r*m+i*C*m+h*r*M-i*d*M)*I,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,x=c*p,y=c*g,A=c*v,C=h*g,M=h*v,_=d*v,z=m*p,N=m*g,D=m*v,G=r.x,V=r.y,I=r.z;return l[0]=(1-(C+_))*G,l[1]=(y+D)*G,l[2]=(A-N)*G,l[3]=0,l[4]=(y-D)*V,l[5]=(1-(x+_))*V,l[6]=(M+z)*V,l[7]=0,l[8]=(A+N)*I,l[9]=(M-z)*I,l[10]=(1-(x+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=as.set(l[0],l[1],l[2]).length();const h=as.set(l[4],l[5],l[6]).length(),d=as.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],ci.copy(this);const p=1/c,g=1/h,v=1/d;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=g,ci.elements[5]*=g,ci.elements[6]*=g,ci.elements[8]*=v,ci.elements[9]*=v,ci.elements[10]*=v,i.setFromRotationMatrix(ci),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=ta){const m=this.elements,p=2*c/(i-e),g=2*c/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let y,A;if(d===ta)y=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===xu)y=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=ta){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(h-c),x=(i+e)*p,y=(r+l)*g;let A,C;if(d===ta)A=(h+c)*v,C=-2*v;else if(d===xu)A=c*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const as=new ot,ci=new Ke,Px=new ot(0,0,0),zx=new ot(1,1,1),La=new ot,Ql=new ot,Zn=new ot,i_=new Ke,a_=new Lo;class bi{constructor(e=0,i=0,r=0,l=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return i_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return a_.setFromEuler(this),this.setFromQuaternion(a_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bx=0;const r_=new ot,rs=new Lo,Yi=new Ke,Jl=new ot,Eo=new ot,Ix=new ot,Fx=new Lo,s_=new ot(1,0,0),o_=new ot(0,1,0),l_=new ot(0,0,1),u_={type:"added"},Hx={type:"removed"},ss={type:"childadded",child:null},Xf={type:"childremoved",child:null};class Cn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new ot,i=new bi,r=new Lo,l=new ot(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new ae}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(s_,e)}rotateY(e){return this.rotateOnAxis(o_,e)}rotateZ(e){return this.rotateOnAxis(l_,e)}translateOnAxis(e,i){return r_.copy(e).applyQuaternion(this.quaternion),this.position.add(r_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(s_,e)}translateY(e){return this.translateOnAxis(o_,e)}translateZ(e){return this.translateOnAxis(l_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Jl.copy(e):Jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Eo,Jl,this.up):Yi.lookAt(Jl,Eo,this.up),this.quaternion.setFromRotationMatrix(Yi),l&&(Yi.extractRotation(l.matrixWorld),rs.setFromRotationMatrix(Yi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(u_),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Hx),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(u_),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new ot(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ot,Zi=new ot,Wf=new ot,ji=new ot,os=new ot,ls=new ot,c_=new ot,qf=new ot,Yf=new ot,Zf=new ot,jf=new je,Kf=new je,Qf=new je;class hi{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),fi.subVectors(e,i),l.cross(fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){fi.subVectors(l,i),Zi.subVectors(r,i),Wf.subVectors(e,i);const h=fi.dot(fi),d=fi.dot(Zi),m=fi.dot(Wf),p=Zi.dot(Zi),g=Zi.dot(Wf),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-d*g)*x,A=(h*g-d*m)*x;return c.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ji.x),m.addScaledVector(h,ji.y),m.addScaledVector(d,ji.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return jf.setScalar(0),Kf.setScalar(0),Qf.setScalar(0),jf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,r),Qf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(jf,c.x),h.addScaledVector(Kf,c.y),h.addScaledVector(Qf,c.z),h}static isFrontFacing(e,i,r,l){return fi.subVectors(r,i),Zi.subVectors(e,i),fi.cross(Zi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),fi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return hi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;os.subVectors(l,r),ls.subVectors(c,r),qf.subVectors(e,r);const m=os.dot(qf),p=ls.dot(qf);if(m<=0&&p<=0)return i.copy(r);Yf.subVectors(e,l);const g=os.dot(Yf),v=ls.dot(Yf);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(os,h);Zf.subVectors(e,c);const y=os.dot(Zf),A=ls.dot(Zf);if(A>=0&&y<=A)return i.copy(c);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(ls,d);const M=g*A-y*v;if(M<=0&&v-g>=0&&y-A>=0)return c_.subVectors(c,l),d=(v-g)/(v-g+(y-A)),i.copy(l).addScaledVector(c_,d);const _=1/(M+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(os,h).addScaledVector(ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},$l={h:0,s:0,l:0};function Jf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ae{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=yx(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Jf(h,c,e+1/3),this.g=Jf(h,c,e),this.b=Jf(h,c,e-1/3)}return Te.toWorkingColorSpace(this,l),this}setStyle(e,i=ai){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=lv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Te.fromWorkingColorSpace(Rn.copy(this),e),Math.round(ve(Rn.r*255,0,255))*65536+Math.round(ve(Rn.g*255,0,255))*256+Math.round(ve(Rn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.fromWorkingColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Te.workingColorSpace){return Te.fromWorkingColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=ai){Te.fromWorkingColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+i,Na.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Na),e.getHSL($l);const r=Pf(Na.h,$l.h,i),l=Pf(Na.s,$l.s,i),c=Pf(Na.l,$l.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ae;Ae.NAMES=lv;let Gx=0;class Oo extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=ms,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=fh,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(r.blending=this.blending),this.side!==Ia&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ch&&(r.blendSrc=this.blendSrc),this.blendDst!==fh&&(r.blendDst=this.blendDst),this.blendEquation!==dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uv extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new ot,tu=new Re;let Vx=0;class Ti{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vx++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Qg,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tu.fromBufferAttribute(this,i),tu.applyMatrix3(e),this.setXY(i,tu.x,tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qg&&(e.usage=this.usage),e}}class cv extends Ti{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class fv extends Ti{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vr extends Ti{constructor(e,i,r){super(new Float32Array(e),i,r)}}let kx=0;const ii=new Ke,$f=new Cn,us=new ot,jn=new No,To=new No,gn=new ot;class Mr extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rv(e)?fv:cv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ae().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return $f.lookAt(e),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];jn.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new od);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];To.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(jn.min,To.min),jn.expandByPoint(gn),gn.addVectors(jn.max,To.max),jn.expandByPoint(gn)):(jn.expandByPoint(To.min),jn.expandByPoint(To.max))}jn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)gn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(us.fromBufferAttribute(e,p),gn.add(us)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new ot,m[Z]=new ot;const p=new ot,g=new ot,v=new ot,x=new Re,y=new Re,A=new Re,C=new ot,M=new ot;function _(Z,w,R){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),x.fromBufferAttribute(c,Z),y.fromBufferAttribute(c,w),A.fromBufferAttribute(c,R),g.sub(p),v.sub(p),y.sub(x),A.sub(x);const B=1/(y.x*A.y-A.x*y.y);isFinite(B)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(B),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-A.x).multiplyScalar(B),d[Z].add(C),d[w].add(C),d[R].add(C),m[Z].add(M),m[w].add(M),m[R].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let Z=0,w=z.length;Z<w;++Z){const R=z[Z],B=R.start,st=R.count;for(let nt=B,ft=B+st;nt<ft;nt+=3)_(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const N=new ot,D=new ot,G=new ot,V=new ot;function I(Z){G.fromBufferAttribute(l,Z),V.copy(G);const w=d[Z];N.copy(w),N.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(V,w);const B=D.dot(m[Z])<0?-1:1;h.setXYZW(Z,N.x,N.y,N.z,B)}for(let Z=0,w=z.length;Z<w;++Z){const R=z[Z],B=R.start,st=R.count;for(let nt=B,ft=B+st;nt<ft;nt+=3)I(e.getX(nt+0)),I(e.getX(nt+1)),I(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new ot,c=new ot,h=new ot,d=new ot,m=new ot,p=new ot,g=new ot,v=new ot;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let y=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let _=0;_<g;_++)x[A++]=p[y++]}return new Ti(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Mr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f_=new Ke,or=new Ox,eu=new od,h_=new ot,nu=new ot,iu=new ot,au=new ot,th=new ot,ru=new ot,d_=new ot,su=new ot;class Ei extends Cn{constructor(e=new Mr,i=new uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){ru.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(th.fromBufferAttribute(v,e),h?ru.addScaledVector(th,g):ru.addScaledVector(th.sub(i),g))}i.add(ru)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),eu.copy(r.boundingSphere),eu.applyMatrix4(c),or.copy(e.ray).recast(e.near),!(eu.containsPoint(or.origin)===!1&&(or.intersectSphere(eu,h_)===null||or.origin.distanceToSquared(h_)>(e.far-e.near)**2))&&(f_.copy(c).invert(),or.copy(e.ray).applyMatrix4(f_),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,or)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],_=h[M.materialIndex],z=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=z,G=N;D<G;D+=3){const V=d.getX(D),I=d.getX(D+1),Z=d.getX(D+2);l=ou(this,_,e,r,p,g,v,V,I,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const z=d.getX(M),N=d.getX(M+1),D=d.getX(M+2);l=ou(this,h,e,r,p,g,v,z,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],_=h[M.materialIndex],z=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=z,G=N;D<G;D+=3){const V=D,I=D+1,Z=D+2;l=ou(this,_,e,r,p,g,v,V,I,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const z=M,N=M+1,D=M+2;l=ou(this,h,e,r,p,g,v,z,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Xx(o,e,i,r,l,c,h,d){let m;if(e.side===Fn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Ia,d),m===null)return null;su.copy(d),su.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(su);return p<i.near||p>i.far?null:{distance:p,point:su.clone(),object:o}}function ou(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,nu),o.getVertexPosition(m,iu),o.getVertexPosition(p,au);const g=Xx(o,e,i,r,nu,iu,au,d_);if(g){const v=new ot;hi.getBarycoord(d_,nu,iu,au,v),l&&(g.uv=hi.getInterpolatedAttribute(l,d,m,p,v,new Re)),c&&(g.uv1=hi.getInterpolatedAttribute(c,d,m,p,v,new Re)),h&&(g.normal=hi.getInterpolatedAttribute(h,d,m,p,v,new ot),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ot,materialIndex:0};hi.getNormal(nu,iu,au,x.normal),g.face=x,g.barycoord=v}return g}class Es extends Mr{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,y=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new vr(p,3)),this.setAttribute("normal",new vr(g,3)),this.setAttribute("uv",new vr(v,2));function A(C,M,_,z,N,D,G,V,I,Z,w){const R=D/I,B=G/Z,st=D/2,nt=G/2,ft=V/2,ct=I+1,P=Z+1;let j=0,q=0;const yt=new ot;for(let U=0;U<P;U++){const $=U*B-nt;for(let vt=0;vt<ct;vt++){const xt=vt*R-st;yt[C]=xt*z,yt[M]=$*N,yt[_]=ft,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[_]=V>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(vt/I),v.push(1-U/Z),j+=1}}for(let U=0;U<Z;U++)for(let $=0;$<I;$++){const vt=x+$+ct*U,xt=x+$+ct*(U+1),Q=x+($+1)+ct*(U+1),pt=x+($+1)+ct*U;m.push(vt,xt,pt),m.push(xt,Q,pt),q+=6}d.addGroup(y,q,w),y+=q,x+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=Ms(o[i]);for(const l in r)e[l]=r[l]}return e}function Wx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function hv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const qx={clone:Ms,merge:Dn};var Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fa extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=Zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Wx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class dv extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ta}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new ot,p_=new Re,m_=new Re;class ri extends dv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=jh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jh*2*Math.atan(Math.tan(Of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,i){return this.getViewBounds(e,p_,m_),i.subVectors(m_,p_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Of*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const cs=-90,fs=1;class jx extends Cn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(cs,fs,e,i);l.layers=this.layers,this.add(l);const c=new ri(cs,fs,e,i);c.layers=this.layers,this.add(c);const h=new ri(cs,fs,e,i);h.layers=this.layers,this.add(h);const d=new ri(cs,fs,e,i);d.layers=this.layers,this.add(d);const m=new ri(cs,fs,e,i);m.layers=this.layers,this.add(m);const p=new ri(cs,fs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===ta)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===xu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class pv extends Un{constructor(e=[],i=vs,r,l,c,h,d,m,p,g){super(e,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kx extends xr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new pv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:yi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Es(5,5,5),c=new Fa({name:"CubemapFromEquirect",uniforms:Ms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:za});c.uniforms.tEquirect.value=i;const h=new Ei(l,c),d=i.minFilter;return i.minFilter===gr&&(i.minFilter=yi),new jx(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class _r extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qx={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,A=.005;p.inputState.pinching&&x>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Qx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new _r;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Jx extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const nh=new ot,$x=new ot,tM=new ae;class fr{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=nh.subVectors(r,i).cross($x.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(nh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||tM.getNormalMatrix(e),l=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new od,lu=new ot;class ld{constructor(e=new fr,i=new fr,r=new fr,l=new fr,c=new fr,h=new fr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ta){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],y=l[8],A=l[9],C=l[10],M=l[11],_=l[12],z=l[13],N=l[14],D=l[15];if(r[0].setComponents(m-c,x-p,M-y,D-_).normalize(),r[1].setComponents(m+c,x+p,M+y,D+_).normalize(),r[2].setComponents(m+h,x+g,M+A,D+z).normalize(),r[3].setComponents(m-h,x-g,M-A,D-z).normalize(),r[4].setComponents(m-d,x-v,M-C,D-N).normalize(),i===ta)r[5].setComponents(m+d,x+v,M+C,D+N).normalize();else if(i===xu)r[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lu.x=l.normal.x>0?e.max.x:e.min.x,lu.y=l.normal.y>0?e.max.y:e.min.y,lu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mv extends Un{constructor(e,i,r=Sr,l,c,h,d=pi,m=pi,p,g=Co){if(g!==Co&&g!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Eu extends Mr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,y=[],A=[],C=[],M=[];for(let _=0;_<g;_++){const z=_*x-h;for(let N=0;N<p;N++){const D=N*v-c;A.push(D,-z,0),C.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let z=0;z<d;z++){const N=z+p*_,D=z+p*(_+1),G=z+1+p*(_+1),V=z+1+p*_;y.push(N,D,V),y.push(D,G,V)}this.setIndex(y),this.setAttribute("position",new vr(A,3)),this.setAttribute("normal",new vr(C,3)),this.setAttribute("uv",new vr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.width,e.height,e.widthSegments,e.heightSegments)}}class eM extends Oo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iv,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nM extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iM extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gv extends Cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ih=new Ke,g_=new ot,__=new ot;class aM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ld,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;g_.setFromMatrixPosition(e.matrixWorld),i.position.copy(g_),__.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(__),i.updateMatrixWorld(),ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _v extends dv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rM extends aM{constructor(){super(new _v(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sM extends gv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oM extends gv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class lM extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function v_(o,e,i,r){const l=uM(r);switch(i){case K_:return o*e;case J_:return o*e;case $_:return o*e*2;case tv:return o*e/l.components*l.byteLength;case id:return o*e/l.components*l.byteLength;case ev:return o*e*2/l.components*l.byteLength;case ad:return o*e*2/l.components*l.byteLength;case Q_:return o*e*3/l.components*l.byteLength;case di:return o*e*4/l.components*l.byteLength;case rd:return o*e*4/l.components*l.byteLength;case hu:case du:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Th:case Ah:return Math.max(o,16)*Math.max(e,8)/4;case Eh:case bh:return Math.max(o,8)*Math.max(e,8)/2;case Rh:case Ch:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case gu:case Xh:case Wh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case nv:case qh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Yh:case Zh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function uM(o){switch(o){case na:case Y_:return{byteLength:1,components:1};case Ao:case Z_:case Do:return{byteLength:2,components:1};case ed:case nd:return{byteLength:2,components:4};case Sr:case td:case $i:return{byteLength:4,components:1};case j_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function cM(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,A)=>y.start-A.start);let x=0;for(let y=1;y<v.length;y++){const A=v[x],C=v[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let y=0,A=v.length;y<A;y++){const C=v[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
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
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_M=`#ifdef USE_AOMAP
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
#endif`,vM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TM=`#ifdef USE_IRIDESCENCE
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
#endif`,bM=`#ifdef USE_BUMPMAP
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
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OM=`#define PI 3.141592653589793
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
} // validated`,PM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zM=`vec3 transformedNormal = objectNormal;
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
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
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
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ny=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,iy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ly=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,uy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,cy=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,py=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xy=`#if defined( USE_POINTS_UV )
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
#endif`,My=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,by=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ny=`#ifdef USE_NORMALMAP
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
#endif`,Oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,Jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fE=`uniform sampler2D t2D;
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,_E=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vE=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,SE=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ME=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,bE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,AE=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,RE=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,CE=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,wE=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,DE=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,UE=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LE=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,NE=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,OE=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,PE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zE=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,BE=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,IE=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,FE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,GE=`uniform vec3 color;
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
}`,VE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,kE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,se={alphahash_fragment:fM,alphahash_pars_fragment:hM,alphamap_fragment:dM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:_M,aomap_pars_fragment:vM,batching_pars_vertex:SM,batching_vertex:xM,begin_vertex:MM,beginnormal_vertex:yM,bsdfs:EM,iridescence_fragment:TM,bumpmap_pars_fragment:bM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:wM,color_fragment:DM,color_pars_fragment:UM,color_pars_vertex:LM,color_vertex:NM,common:OM,cube_uv_reflection_fragment:PM,defaultnormal_vertex:zM,displacementmap_pars_vertex:BM,displacementmap_vertex:IM,emissivemap_fragment:FM,emissivemap_pars_fragment:HM,colorspace_fragment:GM,colorspace_pars_fragment:VM,envmap_fragment:kM,envmap_common_pars_fragment:XM,envmap_pars_fragment:WM,envmap_pars_vertex:qM,envmap_physical_pars_fragment:iy,envmap_vertex:YM,fog_vertex:ZM,fog_pars_vertex:jM,fog_fragment:KM,fog_pars_fragment:QM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:$M,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ey,lights_pars_begin:ny,lights_toon_fragment:ay,lights_toon_pars_fragment:ry,lights_phong_fragment:sy,lights_phong_pars_fragment:oy,lights_physical_fragment:ly,lights_physical_pars_fragment:uy,lights_fragment_begin:cy,lights_fragment_maps:fy,lights_fragment_end:hy,logdepthbuf_fragment:dy,logdepthbuf_pars_fragment:py,logdepthbuf_pars_vertex:my,logdepthbuf_vertex:gy,map_fragment:_y,map_pars_fragment:vy,map_particle_fragment:Sy,map_particle_pars_fragment:xy,metalnessmap_fragment:My,metalnessmap_pars_fragment:yy,morphinstance_vertex:Ey,morphcolor_vertex:Ty,morphnormal_vertex:by,morphtarget_pars_vertex:Ay,morphtarget_vertex:Ry,normal_fragment_begin:Cy,normal_fragment_maps:wy,normal_pars_fragment:Dy,normal_pars_vertex:Uy,normal_vertex:Ly,normalmap_pars_fragment:Ny,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:zy,iridescence_pars_fragment:By,opaque_fragment:Iy,packing:Fy,premultiplied_alpha_fragment:Hy,project_vertex:Gy,dithering_fragment:Vy,dithering_pars_fragment:ky,roughnessmap_fragment:Xy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:qy,shadowmap_pars_vertex:Yy,shadowmap_vertex:Zy,shadowmask_pars_fragment:jy,skinbase_vertex:Ky,skinning_pars_vertex:Qy,skinning_vertex:Jy,skinnormal_vertex:$y,specularmap_fragment:tE,specularmap_pars_fragment:eE,tonemapping_fragment:nE,tonemapping_pars_fragment:iE,transmission_fragment:aE,transmission_pars_fragment:rE,uv_pars_fragment:sE,uv_pars_vertex:oE,uv_vertex:lE,worldpos_vertex:uE,background_vert:cE,background_frag:fE,backgroundCube_vert:hE,backgroundCube_frag:dE,cube_vert:pE,cube_frag:mE,depth_vert:gE,depth_frag:_E,distanceRGBA_vert:vE,distanceRGBA_frag:SE,equirect_vert:xE,equirect_frag:ME,linedashed_vert:yE,linedashed_frag:EE,meshbasic_vert:TE,meshbasic_frag:bE,meshlambert_vert:AE,meshlambert_frag:RE,meshmatcap_vert:CE,meshmatcap_frag:wE,meshnormal_vert:DE,meshnormal_frag:UE,meshphong_vert:LE,meshphong_frag:NE,meshphysical_vert:OE,meshphysical_frag:PE,meshtoon_vert:zE,meshtoon_frag:BE,points_vert:IE,points_frag:FE,shadow_vert:HE,shadow_frag:GE,sprite_vert:VE,sprite_frag:kE},Dt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Mi={basic:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Dn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Dn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Dn([Dt.points,Dt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Dn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Dn([Dt.common,Dt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Dn([Dt.sprite,Dt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Dn([Dt.common,Dt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Dn([Dt.lights,Dt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Mi.physical={uniforms:Dn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const uu={r:0,b:0,g:0},ur=new bi,XE=new Ke;function WE(o,e,i,r,l,c,h){const d=new Ae(0);let m=c===!0?0:1,p,g,v=null,x=0,y=null;function A(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:e).get(D)),D}function C(N){let D=!1;const G=A(N);G===null?_(d,m):G&&G.isColor&&(_(G,1),D=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,D){const G=A(D);G&&(G.isCubeTexture||G.mapping===yu)?(g===void 0&&(g=new Ei(new Es(1,1,1),new Fa({name:"BackgroundCubeMaterial",uniforms:Ms(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ur.copy(D.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(ur)),g.material.toneMapped=Te.getTransfer(G.colorSpace)!==Pe,(v!==G||x!==G.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=G,x=G.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Ei(new Eu(2,2),new Fa({name:"BackgroundMaterial",uniforms:Ms(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Te.getTransfer(G.colorSpace)!==Pe,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=G,x=G.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,D){N.getRGB(uu,hv(o)),r.buffers.color.setClear(uu.r,uu.g,uu.b,D,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:C,addToRenderList:M,dispose:z}}function qE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(R,B,st,nt,ft){let ct=!1;const P=v(nt,st,B);c!==P&&(c=P,p(c.object)),ct=y(R,nt,st,ft),ct&&A(R,nt,st,ft),ft!==null&&e.update(ft,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,D(R,B,st,nt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ft).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,B,st){const nt=st.wireframe===!0;let ft=r[R.id];ft===void 0&&(ft={},r[R.id]=ft);let ct=ft[B.id];ct===void 0&&(ct={},ft[B.id]=ct);let P=ct[nt];return P===void 0&&(P=x(m()),ct[nt]=P),P}function x(R){const B=[],st=[],nt=[];for(let ft=0;ft<i;ft++)B[ft]=0,st[ft]=0,nt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:st,attributeDivisors:nt,object:R,attributes:{},index:null}}function y(R,B,st,nt){const ft=c.attributes,ct=B.attributes;let P=0;const j=st.getAttributes();for(const q in j)if(j[q].location>=0){const U=ft[q];let $=ct[q];if($===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;P++}return c.attributesNum!==P||c.index!==nt}function A(R,B,st,nt){const ft={},ct=B.attributes;let P=0;const j=st.getAttributes();for(const q in j)if(j[q].location>=0){let U=ct[q];U===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ft[q]=$,P++}c.attributes=ft,c.attributesNum=P,c.index=nt}function C(){const R=c.newAttributes;for(let B=0,st=R.length;B<st;B++)R[B]=0}function M(R){_(R,0)}function _(R,B){const st=c.newAttributes,nt=c.enabledAttributes,ft=c.attributeDivisors;st[R]=1,nt[R]===0&&(o.enableVertexAttribArray(R),nt[R]=1),ft[R]!==B&&(o.vertexAttribDivisor(R,B),ft[R]=B)}function z(){const R=c.newAttributes,B=c.enabledAttributes;for(let st=0,nt=B.length;st<nt;st++)B[st]!==R[st]&&(o.disableVertexAttribArray(st),B[st]=0)}function N(R,B,st,nt,ft,ct,P){P===!0?o.vertexAttribIPointer(R,B,st,ft,ct):o.vertexAttribPointer(R,B,st,nt,ft,ct)}function D(R,B,st,nt){C();const ft=nt.attributes,ct=st.getAttributes(),P=B.defaultAttributeValues;for(const j in ct){const q=ct[j];if(q.location>=0){let yt=ft[j];if(yt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const U=yt.normalized,$=yt.itemSize,vt=e.get(yt);if(vt===void 0)continue;const xt=vt.buffer,Q=vt.type,pt=vt.bytesPerElement,St=Q===o.INT||Q===o.UNSIGNED_INT||yt.gpuType===td;if(yt.isInterleavedBufferAttribute){const bt=yt.data,Nt=bt.stride,re=yt.offset;if(bt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)_(q.location+Zt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)M(q.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Zt=0;Zt<q.locationSize;Zt++)N(q.location+Zt,$/q.locationSize,Q,U,Nt*pt,(re+$/q.locationSize*Zt)*pt,St)}else{if(yt.isInstancedBufferAttribute){for(let bt=0;bt<q.locationSize;bt++)_(q.location+bt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let bt=0;bt<q.locationSize;bt++)M(q.location+bt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let bt=0;bt<q.locationSize;bt++)N(q.location+bt,$/q.locationSize,Q,U,$*pt,$/q.locationSize*bt*pt,St)}}else if(P!==void 0){const U=P[j];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(q.location,U);break;case 3:o.vertexAttrib3fv(q.location,U);break;case 4:o.vertexAttrib4fv(q.location,U);break;default:o.vertexAttrib1fv(q.location,U)}}}}z()}function G(){Z();for(const R in r){const B=r[R];for(const st in B){const nt=B[st];for(const ft in nt)g(nt[ft].object),delete nt[ft];delete B[st]}delete r[R]}}function V(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const st in B){const nt=B[st];for(const ft in nt)g(nt[ft].object),delete nt[ft];delete B[st]}delete r[R.id]}function I(R){for(const B in r){const st=r[B];if(st[R.id]===void 0)continue;const nt=st[R.id];for(const ft in nt)g(nt[ft].object),delete nt[ft];delete st[R.id]}}function Z(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:V,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:z}}function YE(o,e,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let A=0;A<v;A++)y+=g[A];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],g[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=g[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ZE(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==di&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===Do&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==na&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==$i&&!Z)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=A>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:G,maxSamples:V}}function jE(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new fr,d=new ae,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||c&&!M)c?g(null):p();else{const z=c?0:r,N=z*4;let D=_.clippingState||null;m.value=D,D=g(A,x,N,y);for(let G=0;G!==N;++G)D[G]=i[G];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const _=y+C*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,D=y;N!==C;++N,D+=4)h.copy(v[N]).applyMatrix4(z,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function KE(o){let e=new WeakMap;function i(h,d){return d===Sh?h.mapping=vs:d===xh&&(h.mapping=Ss),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Sh||d===xh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Kx(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ps=4,S_=[.125,.215,.35,.446,.526,.582],pr=20,ah=new _v,x_=new Ae;let rh=null,sh=0,oh=0,lh=!1;const hr=(1+Math.sqrt(5))/2,hs=1/hr,M_=[new ot(-hr,hs,0),new ot(hr,hs,0),new ot(-hs,0,hr),new ot(hs,0,hr),new ot(0,hr,-hs),new ot(0,hr,hs),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],QE=new ot;class y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=QE}=c;rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,sh,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,cu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===vs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Do,format:di,colorSpace:xs,depthBuffer:!1},l=E_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(c)),this._blurMaterial=$E(c,e,i)}return l}_compileMaterial(e){const i=new Ei(this._lodPlanes[0],e);this._renderer.compile(i,ah)}_sceneToCubeUV(e,i,r,l,c){const m=new ri(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(x_),v.toneMapping=Ba,v.autoClear=!1;const A=new uv({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),C=new Ei(new Es,A);let M=!1;const _=e.background;_?_.isColor&&(A.color.copy(_),e.background=null,M=!0):(A.color.copy(x_),M=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):N===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const D=this._cubeSize;cu(l,N*D,z>2?D:0,D,D),v.setRenderTarget(l),M&&v.render(C,m),v.render(e,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===vs||e.mapping===Ss;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ei(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;cu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ah)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=M_[(l-c-1)%M_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ei(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*pr-1),C=c/A,M=isFinite(c)?1+Math.floor(g*C):pr;M>pr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${pr}`);const _=[];let z=0;for(let I=0;I<pr;++I){const Z=I/C,w=Math.exp(-Z*Z/2);_.push(w),I===0?z+=w:I<M&&(z+=2*w)}for(let I=0;I<_.length;I++)_[I]=_[I]/z;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=A,x.mipInt.value=N-r;const D=this._sizeLods[l],G=3*D*(l>N-ps?l-N+ps:0),V=4*(this._cubeSize-D);cu(i,G,V,3*D,2*D),m.setRenderTarget(i),m.render(v,ah)}}function JE(o){const e=[],i=[],r=[];let l=o;const c=o-ps+1+S_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ps?m=S_[h-o+ps-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,A=6,C=3,M=2,_=1,z=new Float32Array(C*A*y),N=new Float32Array(M*A*y),D=new Float32Array(_*A*y);for(let V=0;V<y;V++){const I=V%3*2/3-1,Z=V>2?0:-1,w=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];z.set(w,C*A*V),N.set(x,M*A*V);const R=[V,V,V,V,V,V];D.set(R,_*A*V)}const G=new Mr;G.setAttribute("position",new Ti(z,C)),G.setAttribute("uv",new Ti(N,M)),G.setAttribute("faceIndex",new Ti(D,_)),e.push(G),l>ps&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function E_(o,e,i){const r=new xr(o,e,i);return r.texture.mapping=yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function cu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function $E(o,e,i){const r=new Float32Array(pr),l=new ot(0,1,0);return new Fa({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ud(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function T_(){return new Fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function b_(){return new Fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function ud(){return`

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
	`}function tT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Sh||m===xh,g=m===vs||m===Ss;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new y_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new y_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function eT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_u("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function nT(o,e,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,A=v.attributes.position;let C=0;if(y!==null){const z=y.array;C=y.version;for(let N=0,D=z.length;N<D;N+=3){const G=z[N+0],V=z[N+1],I=z[N+2];x.push(G,V,V,I,I,G)}}else if(A!==void 0){const z=A.array;C=A.version;for(let N=0,D=z.length/3-1;N<D;N+=3){const G=N+0,V=N+1,I=N+2;x.push(G,V,V,I,I,G)}}else return;const M=new(rv(x)?fv:cv)(x,1);M.version=C;const _=c.get(v);_&&e.remove(_),c.set(v,M)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function iT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,A){A!==0&&(o.drawElementsInstanced(r,y,c,x*h,A),i.update(y,r,A))}function g(x,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,r,1)}function v(x,y,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,C,0,A);let _=0;for(let z=0;z<A;z++)_+=y[z]*C[z];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function aT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function rT(o,e,i){const r=new WeakMap,l=new je;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),C===!0&&(D=2),M===!0&&(D=3);let G=d.attributes.position.count*D,V=1;G>e.maxTextureSize&&(V=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*V*4*v),Z=new sv(I,G,V,v);Z.type=$i,Z.needsUpdate=!0;const w=D*4;for(let B=0;B<v;B++){const st=_[B],nt=z[B],ft=N[B],ct=G*V*4*B;for(let P=0;P<st.count;P++){const j=P*w;A===!0&&(l.fromBufferAttribute(st,P),I[ct+j+0]=l.x,I[ct+j+1]=l.y,I[ct+j+2]=l.z,I[ct+j+3]=0),C===!0&&(l.fromBufferAttribute(nt,P),I[ct+j+4]=l.x,I[ct+j+5]=l.y,I[ct+j+6]=l.z,I[ct+j+7]=0),M===!0&&(l.fromBufferAttribute(ft,P),I[ct+j+8]=l.x,I[ct+j+9]=l.y,I[ct+j+10]=l.z,I[ct+j+11]=ft.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new Re(G,V)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function sT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Sv=new Un,A_=new mv(1,1),xv=new sv,Mv=new Lx,yv=new pv,R_=[],C_=[],w_=new Float32Array(16),D_=new Float32Array(9),U_=new Float32Array(4);function Ts(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=R_[l];if(c===void 0&&(c=new Float32Array(l),R_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Tu(o,e){let i=C_[e];i===void 0&&(i=new Int32Array(e),C_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function oT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function fT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;U_.set(r),o.uniformMatrix2fv(this.addr,!1,U_),cn(i,r)}}function hT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;D_.set(r),o.uniformMatrix3fv(this.addr,!1,D_),cn(i,r)}}function dT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;w_.set(r),o.uniformMatrix4fv(this.addr,!1,w_),cn(i,r)}}function pT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function vT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function yT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(A_.compareFunction=av,c=A_):c=Sv,i.setTexture2D(e||c,l)}function ET(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Mv,l)}function TT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||yv,l)}function bT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||xv,l)}function AT(o){switch(o){case 5126:return oT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return ST;case 36295:return xT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return bT}}function RT(o,e){o.uniform1fv(this.addr,e)}function CT(o,e){const i=Ts(e,this.size,2);o.uniform2fv(this.addr,i)}function wT(o,e){const i=Ts(e,this.size,3);o.uniform3fv(this.addr,i)}function DT(o,e){const i=Ts(e,this.size,4);o.uniform4fv(this.addr,i)}function UT(o,e){const i=Ts(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function LT(o,e){const i=Ts(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function NT(o,e){const i=Ts(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function OT(o,e){o.uniform1iv(this.addr,e)}function PT(o,e){o.uniform2iv(this.addr,e)}function zT(o,e){o.uniform3iv(this.addr,e)}function BT(o,e){o.uniform4iv(this.addr,e)}function IT(o,e){o.uniform1uiv(this.addr,e)}function FT(o,e){o.uniform2uiv(this.addr,e)}function HT(o,e){o.uniform3uiv(this.addr,e)}function GT(o,e){o.uniform4uiv(this.addr,e)}function VT(o,e,i){const r=this.cache,l=e.length,c=Tu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Sv,c[h])}function kT(o,e,i){const r=this.cache,l=e.length,c=Tu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Mv,c[h])}function XT(o,e,i){const r=this.cache,l=e.length,c=Tu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||yv,c[h])}function WT(o,e,i){const r=this.cache,l=e.length,c=Tu(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||xv,c[h])}function qT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return BT;case 5125:return IT;case 36294:return FT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}class YT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=AT(i.type)}}class ZT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qT(i.type)}}class jT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function L_(o,e){o.seq.push(e),o.map[e.id]=e}function KT(o,e,i){const r=o.name,l=r.length;for(uh.lastIndex=0;;){const c=uh.exec(r),h=uh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){L_(i,p===void 0?new YT(d,o,e):new ZT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new jT(d),L_(i,v)),i=v}}}class vu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);KT(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function N_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const QT=37297;let JT=0;function $T(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const O_=new ae;function tb(o){Te._getMatrix(O_,Te.workingColorSpace,o);const e=`mat3( ${O_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Su:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function P_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+$T(o.getShaderSource(e),h)}else return l}function eb(o,e){const i=tb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function nb(o,e){let i;switch(e){case ax:i="Linear";break;case rx:i="Reinhard";break;case sx:i="Cineon";break;case ox:i="ACESFilmic";break;case ux:i="AgX";break;case cx:i="Neutral";break;case lx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fu=new ot;function ib(){Te.getLuminanceCoefficients(fu);const o=fu.x.toFixed(4),e=fu.y.toFixed(4),i=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ab(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function rb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function sb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function bo(o){return o!==""}function z_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(o){return o.replace(ob,ub)}const lb=new Map;function ub(o,e){let i=se[e];if(i===void 0){const r=lb.get(e);if(r!==void 0)i=se[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kh(i)}const cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I_(o){return o.replace(cb,fb)}function fb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function F_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===BS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function db(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vs:case Ss:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function mb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $h:e="ENVMAP_BLENDING_MULTIPLY";break;case nx:e="ENVMAP_BLENDING_MIX";break;case ix:e="ENVMAP_BLENDING_ADD";break}return e}function gb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function _b(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=hb(i),p=db(i),g=pb(i),v=mb(i),x=gb(i),y=ab(i),A=rb(c),C=l.createProgram();let M,_,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),_.length>0&&(_+=`
`)):(M=[F_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),_=[F_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?se.tonemapping_pars_fragment:"",i.toneMapping!==Ba?nb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,eb("linearToOutputTexel",i.outputColorSpace),ib(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bo).join(`
`)),h=Kh(h),h=z_(h,i),h=B_(h,i),d=Kh(d),d=z_(d,i),d=B_(d,i),h=I_(h),d=I_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=z+M+h,D=z+_+d,G=N_(l,l.VERTEX_SHADER,N),V=N_(l,l.FRAGMENT_SHADER,D);l.attachShader(C,G),l.attachShader(C,V),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(B){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(C).trim(),nt=l.getShaderInfoLog(G).trim(),ft=l.getShaderInfoLog(V).trim();let ct=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,G,V);else{const j=P_(l,G,"vertex"),q=P_(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+st+`
`+j+`
`+q)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(nt===""||ft==="")&&(P=!1);P&&(B.diagnostics={runnable:ct,programLog:st,vertexShader:{log:nt,prefix:M},fragmentShader:{log:ft,prefix:_}})}l.deleteShader(G),l.deleteShader(V),Z=new vu(l,C),w=sb(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,QT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=V,this}let vb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new xb(e),i.set(e,r)),r}}class xb{constructor(e){this.id=vb++,this.code=e,this.usedTimes=0}}function Mb(o,e,i,r,l,c,h){const d=new ov,m=new Sb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,B,st,nt){const ft=st.fog,ct=nt.geometry,P=w.isMeshStandardMaterial?st.environment:null,j=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),q=j&&j.mapping===yu?j.image.height:null,yt=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const U=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;ct.morphAttributes.position!==void 0&&(vt=1),ct.morphAttributes.normal!==void 0&&(vt=2),ct.morphAttributes.color!==void 0&&(vt=3);let xt,Q,pt,St;if(yt){const Me=Mi[yt];xt=Me.vertexShader,Q=Me.fragmentShader}else xt=w.vertexShader,Q=w.fragmentShader,m.update(w),pt=m.getVertexShaderID(w),St=m.getFragmentShaderID(w);const bt=o.getRenderTarget(),Nt=o.state.buffers.depth.getReversed(),re=nt.isInstancedMesh===!0,Zt=nt.isBatchedMesh===!0,Fe=!!w.map,ze=!!w.matcap,ue=!!j,F=!!w.aoMap,Ln=!!w.lightMap,pe=!!w.bumpMap,te=!!w.normalMap,kt=!!w.displacementMap,De=!!w.emissiveMap,Ht=!!w.metalnessMap,L=!!w.roughnessMap,T=w.anisotropy>0,tt=w.clearcoat>0,_t=w.dispersion>0,Mt=w.iridescence>0,ht=w.sheen>0,zt=w.transmission>0,At=T&&!!w.anisotropyMap,Rt=tt&&!!w.clearcoatMap,me=tt&&!!w.clearcoatNormalMap,Tt=tt&&!!w.clearcoatRoughnessMap,It=Mt&&!!w.iridescenceMap,qt=Mt&&!!w.iridescenceThicknessMap,jt=ht&&!!w.sheenColorMap,Ot=ht&&!!w.sheenRoughnessMap,oe=!!w.specularMap,$t=!!w.specularColorMap,Ue=!!w.specularIntensityMap,k=zt&&!!w.transmissionMap,Ut=zt&&!!w.thicknessMap,lt=!!w.gradientMap,mt=!!w.alphaMap,Pt=w.alphaTest>0,Lt=!!w.alphaHash,ee=!!w.extensions;let He=Ba;w.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(He=o.toneMapping);const $e={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:Q,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:St,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Zt,batchingColor:Zt&&nt._colorsTexture!==null,instancing:re,instancingColor:re&&nt.instanceColor!==null,instancingMorph:re&&nt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:xs,alphaToCoverage:!!w.alphaToCoverage,map:Fe,matcap:ze,envMap:ue,envMapMode:ue&&j.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:Ln,bumpMap:pe,normalMap:te,displacementMap:x&&kt,emissiveMap:De,normalMapObjectSpace:te&&w.normalMapType===px,normalMapTangentSpace:te&&w.normalMapType===iv,metalnessMap:Ht,roughnessMap:L,anisotropy:T,anisotropyMap:At,clearcoat:tt,clearcoatMap:Rt,clearcoatNormalMap:me,clearcoatRoughnessMap:Tt,dispersion:_t,iridescence:Mt,iridescenceMap:It,iridescenceThicknessMap:qt,sheen:ht,sheenColorMap:jt,sheenRoughnessMap:Ot,specularMap:oe,specularColorMap:$t,specularIntensityMap:Ue,transmission:zt,transmissionMap:k,thicknessMap:Ut,gradientMap:lt,opaque:w.transparent===!1&&w.blending===ms&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:Pt,alphaHash:Lt,combine:w.combine,mapUv:Fe&&C(w.map.channel),aoMapUv:F&&C(w.aoMap.channel),lightMapUv:Ln&&C(w.lightMap.channel),bumpMapUv:pe&&C(w.bumpMap.channel),normalMapUv:te&&C(w.normalMap.channel),displacementMapUv:kt&&C(w.displacementMap.channel),emissiveMapUv:De&&C(w.emissiveMap.channel),metalnessMapUv:Ht&&C(w.metalnessMap.channel),roughnessMapUv:L&&C(w.roughnessMap.channel),anisotropyMapUv:At&&C(w.anisotropyMap.channel),clearcoatMapUv:Rt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&C(w.sheenRoughnessMap.channel),specularMapUv:oe&&C(w.specularMap.channel),specularColorMapUv:$t&&C(w.specularColorMap.channel),specularIntensityMapUv:Ue&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Ut&&C(w.thicknessMap.channel),alphaMapUv:mt&&C(w.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(te||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ct.attributes.uv&&(Fe||mt),fog:!!ft,useFog:w.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Nt,skinning:nt.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:Fe&&w.map.isVideoTexture===!0&&Te.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Te.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ji,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ee&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&w.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=p.has(1),$e.vertexUv2s=p.has(2),$e.vertexUv3s=p.has(3),p.clear(),$e}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)R.push(B),R.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(z(R,w),N(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function z(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function N(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=A[w.type];let B;if(R){const st=Mi[R];B=qx.clone(st.uniforms)}else B=w.uniforms;return B}function G(w,R){let B;for(let st=0,nt=g.length;st<nt;st++){const ft=g[st];if(ft.cacheKey===R){B=ft,++B.usedTimes;break}}return B===void 0&&(B=new _b(o,R,w,c),g.push(B)),B}function V(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function I(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:G,releaseProgram:V,releaseShaderCache:I,programs:g,dispose:Z}}function yb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Eb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function H_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function G_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,A,C,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=M),e++,_}function d(v,x,y,A,C,M){const _=h(v,x,y,A,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,A,C,M){const _=h(v,x,y,A,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Eb),r.length>1&&r.sort(x||H_),l.length>1&&l.sort(x||H_)}function g(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function Tb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new G_,o.set(r,[h])):l>=c.length?(h=new G_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function bb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new Ae};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function Ab(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Rb=0;function Cb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function wb(o){const e=new bb,i=Ab(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,c=new Ke,h=new Ke;function d(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,A=0,C=0,M=0,_=0,z=0,N=0,D=0,G=0,V=0,I=0;p.sort(Cb);for(let w=0,R=p.length;w<R;w++){const B=p[w],st=B.color,nt=B.intensity,ft=B.distance,ct=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=st.r*nt,v+=st.g*nt,x+=st.b*nt;else if(B.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(B.sh.coefficients[P],nt);I++}else if(B.isDirectionalLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,q=i.get(B);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=ct,r.directionalShadowMatrix[y]=B.shadow.matrix,z++}r.directional[y]=P,y++}else if(B.isSpotLight){const P=e.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(st).multiplyScalar(nt),P.distance=ft,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,r.spot[C]=P;const j=B.shadow;if(B.map&&(r.spotLightMap[G]=B.map,G++,j.updateMatrices(B),B.castShadow&&V++),r.spotLightMatrix[C]=j.matrix,B.castShadow){const q=i.get(B);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=ct,D++}C++}else if(B.isRectAreaLight){const P=e.get(B);P.color.copy(st).multiplyScalar(nt),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=P,M++}else if(B.isPointLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const j=B.shadow,q=i.get(B);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=ct,r.pointShadowMatrix[A]=B.shadow.matrix,N++}r.point[A]=P,A++}else if(B.isHemisphereLight){const P=e.get(B);P.skyColor.copy(B.color).multiplyScalar(nt),P.groundColor.copy(B.groundColor).multiplyScalar(nt),r.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==y||Z.pointLength!==A||Z.spotLength!==C||Z.rectAreaLength!==M||Z.hemiLength!==_||Z.numDirectionalShadows!==z||Z.numPointShadows!==N||Z.numSpotShadows!==D||Z.numSpotMaps!==G||Z.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=D+G-V,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=I,Z.directionalLength=y,Z.pointLength=A,Z.spotLength=C,Z.rectAreaLength=M,Z.hemiLength=_,Z.numDirectionalShadows=z,Z.numPointShadows=N,Z.numSpotShadows=D,Z.numSpotMaps=G,Z.numLightProbes=I,r.version=Rb++)}function m(p,g){let v=0,x=0,y=0,A=0,C=0;const M=g.matrixWorldInverse;for(let _=0,z=p.length;_<z;_++){const N=p[_];if(N.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(N.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function V_(o){const e=new wb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Db(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new V_(o),e.set(l,[d])):c>=h.length?(d=new V_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`;function Nb(o,e,i){let r=new ld;const l=new Re,c=new Re,h=new je,d=new nM({depthPacking:dx}),m=new iM,p={},g=i.maxTextureSize,v={[Ia]:Fn,[Fn]:Ia,[Ji]:Ji},x=new Fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Ub,fragmentShader:Lb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new Mr;A.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ei(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let _=this.type;this.render=function(V,I,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||V.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),st=o.state;st.setBlending(za),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const nt=_!==Qi&&this.type===Qi,ft=_===Qi&&this.type!==Qi;for(let ct=0,P=V.length;ct<P;ct++){const j=V[ct],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const yt=q.getFrameExtents();if(l.multiply(yt),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,q.mapSize.y=c.y)),q.map===null||nt===!0||ft===!0){const $=this.type!==Qi?{minFilter:pi,magFilter:pi}:{};q.map!==null&&q.map.dispose(),q.map=new xr(l.x,l.y,$),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const U=q.getViewportCount();for(let $=0;$<U;$++){const vt=q.getViewport($);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),st.viewport(h),q.updateMatrices(j,$),r=q.getFrustum(),D(I,Z,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Qi&&z(q,Z),q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,B)};function z(V,I){const Z=e.update(C);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,y.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new xr(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(I,null,Z,x,C,null),y.uniforms.shadow_pass.value=V.mapPass.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(I,null,Z,y,C,null)}function N(V,I,Z,w){let R=null;const B=Z.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(B!==void 0)R=B;else if(R=Z.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const st=R.uuid,nt=I.uuid;let ft=p[st];ft===void 0&&(ft={},p[st]=ft);let ct=ft[nt];ct===void 0&&(ct=R.clone(),ft[nt]=ct,I.addEventListener("dispose",G)),R=ct}if(R.visible=I.visible,R.wireframe=I.wireframe,w===Qi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const st=o.properties.get(R);st.light=Z}return R}function D(V,I,Z,w,R){if(V.visible===!1)return;if(V.layers.test(I.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&R===Qi)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,V.matrixWorld);const nt=e.update(V),ft=V.material;if(Array.isArray(ft)){const ct=nt.groups;for(let P=0,j=ct.length;P<j;P++){const q=ct[P],yt=ft[q.materialIndex];if(yt&&yt.visible){const U=N(V,yt,w,R);V.onBeforeShadow(o,V,I,Z,nt,U,q),o.renderBufferDirect(Z,null,nt,U,V,q),V.onAfterShadow(o,V,I,Z,nt,U,q)}}}else if(ft.visible){const ct=N(V,ft,w,R);V.onBeforeShadow(o,V,I,Z,nt,ct,null),o.renderBufferDirect(Z,null,nt,ct,V,null),V.onAfterShadow(o,V,I,Z,nt,ct,null)}}const st=V.children;for(let nt=0,ft=st.length;nt<ft;nt++)D(st[nt],I,Z,w,R)}function G(V){V.target.removeEventListener("dispose",G);for(const Z in p){const w=p[Z],R=V.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const Ob={[hh]:dh,[ph]:_h,[mh]:vh,[_s]:gh,[dh]:hh,[_h]:ph,[vh]:mh,[gh]:_s};function Pb(o,e){function i(){let k=!1;const Ut=new je;let lt=null;const mt=new je(0,0,0,0);return{setMask:function(Pt){lt!==Pt&&!k&&(o.colorMask(Pt,Pt,Pt,Pt),lt=Pt)},setLocked:function(Pt){k=Pt},setClear:function(Pt,Lt,ee,He,$e){$e===!0&&(Pt*=He,Lt*=He,ee*=He),Ut.set(Pt,Lt,ee,He),mt.equals(Ut)===!1&&(o.clearColor(Pt,Lt,ee,He),mt.copy(Ut))},reset:function(){k=!1,lt=null,mt.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,lt=null,mt=null,Pt=null;return{setReversed:function(Lt){if(Ut!==Lt){const ee=e.get("EXT_clip_control");Lt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Ut=Lt;const He=Pt;Pt=null,this.setClear(He)}},getReversed:function(){return Ut},setTest:function(Lt){Lt?bt(o.DEPTH_TEST):Nt(o.DEPTH_TEST)},setMask:function(Lt){lt!==Lt&&!k&&(o.depthMask(Lt),lt=Lt)},setFunc:function(Lt){if(Ut&&(Lt=Ob[Lt]),mt!==Lt){switch(Lt){case hh:o.depthFunc(o.NEVER);break;case dh:o.depthFunc(o.ALWAYS);break;case ph:o.depthFunc(o.LESS);break;case _s:o.depthFunc(o.LEQUAL);break;case mh:o.depthFunc(o.EQUAL);break;case gh:o.depthFunc(o.GEQUAL);break;case _h:o.depthFunc(o.GREATER);break;case vh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}mt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Pt!==Lt&&(Ut&&(Lt=1-Lt),o.clearDepth(Lt),Pt=Lt)},reset:function(){k=!1,lt=null,mt=null,Pt=null,Ut=!1}}}function l(){let k=!1,Ut=null,lt=null,mt=null,Pt=null,Lt=null,ee=null,He=null,$e=null;return{setTest:function(Me){k||(Me?bt(o.STENCIL_TEST):Nt(o.STENCIL_TEST))},setMask:function(Me){Ut!==Me&&!k&&(o.stencilMask(Me),Ut=Me)},setFunc:function(Me,Hn,fn){(lt!==Me||mt!==Hn||Pt!==fn)&&(o.stencilFunc(Me,Hn,fn),lt=Me,mt=Hn,Pt=fn)},setOp:function(Me,Hn,fn){(Lt!==Me||ee!==Hn||He!==fn)&&(o.stencilOp(Me,Hn,fn),Lt=Me,ee=Hn,He=fn)},setLocked:function(Me){k=Me},setClear:function(Me){$e!==Me&&(o.clearStencil(Me),$e=Me)},reset:function(){k=!1,Ut=null,lt=null,mt=null,Pt=null,Lt=null,ee=null,He=null,$e=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,_=null,z=null,N=null,D=null,G=null,V=null,I=new Ae(0,0,0),Z=0,w=!1,R=null,B=null,st=null,nt=null,ft=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=j>=2);let yt=null,U={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),xt=new je().fromArray($),Q=new je().fromArray(vt);function pt(k,Ut,lt,mt){const Pt=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(k,Lt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ee=0;ee<lt;ee++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,mt,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Ut+ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Lt}const St={};St[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(o.DEPTH_TEST),h.setFunc(_s),pe(!1),te(qg),bt(o.CULL_FACE),F(za);function bt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Nt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function re(k,Ut){return v[k]!==Ut?(o.bindFramebuffer(k,Ut),v[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Zt(k,Ut){let lt=y,mt=!1;if(k){lt=x.get(Ut),lt===void 0&&(lt=[],x.set(Ut,lt));const Pt=k.textures;if(lt.length!==Pt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,ee=Pt.length;Lt<ee;Lt++)lt[Lt]=o.COLOR_ATTACHMENT0+Lt;lt.length=Pt.length,mt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,mt=!0);mt&&o.drawBuffers(lt)}function Fe(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const ze={[dr]:o.FUNC_ADD,[FS]:o.FUNC_SUBTRACT,[HS]:o.FUNC_REVERSE_SUBTRACT};ze[GS]=o.MIN,ze[VS]=o.MAX;const ue={[kS]:o.ZERO,[XS]:o.ONE,[WS]:o.SRC_COLOR,[ch]:o.SRC_ALPHA,[QS]:o.SRC_ALPHA_SATURATE,[jS]:o.DST_COLOR,[YS]:o.DST_ALPHA,[qS]:o.ONE_MINUS_SRC_COLOR,[fh]:o.ONE_MINUS_SRC_ALPHA,[KS]:o.ONE_MINUS_DST_COLOR,[ZS]:o.ONE_MINUS_DST_ALPHA,[JS]:o.CONSTANT_COLOR,[$S]:o.ONE_MINUS_CONSTANT_COLOR,[tx]:o.CONSTANT_ALPHA,[ex]:o.ONE_MINUS_CONSTANT_ALPHA};function F(k,Ut,lt,mt,Pt,Lt,ee,He,$e,Me){if(k===za){C===!0&&(Nt(o.BLEND),C=!1);return}if(C===!1&&(bt(o.BLEND),C=!0),k!==IS){if(k!==M||Me!==w){if((_!==dr||D!==dr)&&(o.blendEquation(o.FUNC_ADD),_=dr,D=dr),Me)switch(k){case ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yg:o.blendFunc(o.ONE,o.ONE);break;case Zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case jg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case jg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}z=null,N=null,G=null,V=null,I.set(0,0,0),Z=0,M=k,w=Me}return}Pt=Pt||Ut,Lt=Lt||lt,ee=ee||mt,(Ut!==_||Pt!==D)&&(o.blendEquationSeparate(ze[Ut],ze[Pt]),_=Ut,D=Pt),(lt!==z||mt!==N||Lt!==G||ee!==V)&&(o.blendFuncSeparate(ue[lt],ue[mt],ue[Lt],ue[ee]),z=lt,N=mt,G=Lt,V=ee),(He.equals(I)===!1||$e!==Z)&&(o.blendColor(He.r,He.g,He.b,$e),I.copy(He),Z=$e),M=k,w=!1}function Ln(k,Ut){k.side===Ji?Nt(o.CULL_FACE):bt(o.CULL_FACE);let lt=k.side===Fn;Ut&&(lt=!lt),pe(lt),k.blending===ms&&k.transparent===!1?F(za):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const mt=k.stencilWrite;d.setTest(mt),mt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Nt(o.SAMPLE_ALPHA_TO_COVERAGE)}function pe(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function te(k){k!==PS?(bt(o.CULL_FACE),k!==B&&(k===qg?o.cullFace(o.BACK):k===zS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Nt(o.CULL_FACE),B=k}function kt(k){k!==st&&(P&&o.lineWidth(k),st=k)}function De(k,Ut,lt){k?(bt(o.POLYGON_OFFSET_FILL),(nt!==Ut||ft!==lt)&&(o.polygonOffset(Ut,lt),nt=Ut,ft=lt)):Nt(o.POLYGON_OFFSET_FILL)}function Ht(k){k?bt(o.SCISSOR_TEST):Nt(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+ct-1),yt!==k&&(o.activeTexture(k),yt=k)}function T(k,Ut,lt){lt===void 0&&(yt===null?lt=o.TEXTURE0+ct-1:lt=yt);let mt=U[lt];mt===void 0&&(mt={type:void 0,texture:void 0},U[lt]=mt),(mt.type!==k||mt.texture!==Ut)&&(yt!==lt&&(o.activeTexture(lt),yt=lt),o.bindTexture(k,Ut||St[k]),mt.type=k,mt.texture=Ut)}function tt(){const k=U[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(k){xt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function Ot(k){Q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function oe(k,Ut){let lt=p.get(Ut);lt===void 0&&(lt=new WeakMap,p.set(Ut,lt));let mt=lt.get(k);mt===void 0&&(mt=o.getUniformBlockIndex(Ut,k.name),lt.set(k,mt))}function $t(k,Ut){const mt=p.get(Ut).get(k);m.get(Ut)!==mt&&(o.uniformBlockBinding(Ut,mt,k.__bindingPointIndex),m.set(Ut,mt))}function Ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},yt=null,U={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,_=null,z=null,N=null,D=null,G=null,V=null,I=new Ae(0,0,0),Z=0,w=!1,R=null,B=null,st=null,nt=null,ft=null,xt.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:bt,disable:Nt,bindFramebuffer:re,drawBuffers:Zt,useProgram:Fe,setBlending:F,setMaterial:Ln,setFlipSided:pe,setCullFace:te,setLineWidth:kt,setPolygonOffset:De,setScissorTest:Ht,activeTexture:L,bindTexture:T,unbindTexture:tt,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:It,texImage3D:qt,updateUBOMapping:oe,uniformBlockBinding:$t,texStorage2D:me,texStorage3D:Tt,texSubImage2D:ht,texSubImage3D:zt,compressedTexSubImage2D:At,compressedTexSubImage3D:Rt,scissor:jt,viewport:Ot,reset:Ue}}function zb(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,T){return y?new OffscreenCanvas(L,T):Mu("canvas")}function C(L,T,tt){let _t=1;const Mt=Ht(L);if((Mt.width>tt||Mt.height>tt)&&(_t=tt/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(_t*Mt.width),zt=Math.floor(_t*Mt.height);v===void 0&&(v=A(ht,zt));const At=T?A(ht,zt):v;return At.width=ht,At.height=zt,At.getContext("2d").drawImage(L,0,0,ht,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+zt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,T,tt,_t,Mt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=T;if(T===o.RED&&(tt===o.FLOAT&&(ht=o.R32F),tt===o.HALF_FLOAT&&(ht=o.R16F),tt===o.UNSIGNED_BYTE&&(ht=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.R8UI),tt===o.UNSIGNED_SHORT&&(ht=o.R16UI),tt===o.UNSIGNED_INT&&(ht=o.R32UI),tt===o.BYTE&&(ht=o.R8I),tt===o.SHORT&&(ht=o.R16I),tt===o.INT&&(ht=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(ht=o.RG32F),tt===o.HALF_FLOAT&&(ht=o.RG16F),tt===o.UNSIGNED_BYTE&&(ht=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RG16UI),tt===o.UNSIGNED_INT&&(ht=o.RG32UI),tt===o.BYTE&&(ht=o.RG8I),tt===o.SHORT&&(ht=o.RG16I),tt===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),tt===o.UNSIGNED_INT&&(ht=o.RGB32UI),tt===o.BYTE&&(ht=o.RGB8I),tt===o.SHORT&&(ht=o.RGB16I),tt===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ht=o.RGBA32UI),tt===o.BYTE&&(ht=o.RGBA8I),tt===o.SHORT&&(ht=o.RGBA16I),tt===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),T===o.RGBA){const zt=Mt?Su:Te.getTransfer(_t);tt===o.FLOAT&&(ht=o.RGBA32F),tt===o.HALF_FLOAT&&(ht=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ht=zt===Pe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function D(L,T){let tt;return L?T===null||T===Sr||T===Ro?tt=o.DEPTH24_STENCIL8:T===$i?tt=o.DEPTH32F_STENCIL8:T===Ao&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Sr||T===Ro?tt=o.DEPTH_COMPONENT24:T===$i?tt=o.DEPTH_COMPONENT32F:T===Ao&&(tt=o.DEPTH_COMPONENT16),tt}function G(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==pi&&L.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function V(L){const T=L.target;T.removeEventListener("dispose",V),Z(T),T.isVideoTexture&&g.delete(T)}function I(L){const T=L.target;T.removeEventListener("dispose",I),R(T)}function Z(L){const T=r.get(L);if(T.__webglInit===void 0)return;const tt=L.source,_t=x.get(tt);if(_t){const Mt=_t[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(L),Object.keys(_t).length===0&&x.delete(tt)}r.remove(L)}function w(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const tt=L.source,_t=x.get(tt);delete _t[T.__cacheKey],h.memory.textures--}function R(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(T.__webglFramebuffer[_t]))for(let Mt=0;Mt<T.__webglFramebuffer[_t].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[_t][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[_t]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[_t])}else{if(Array.isArray(T.__webglFramebuffer))for(let _t=0;_t<T.__webglFramebuffer.length;_t++)o.deleteFramebuffer(T.__webglFramebuffer[_t]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _t=0;_t<T.__webglColorRenderbuffer.length;_t++)T.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[_t]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=L.textures;for(let _t=0,Mt=tt.length;_t<Mt;_t++){const ht=r.get(tt[_t]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),r.remove(tt[_t])}r.remove(L)}let B=0;function st(){B=0}function nt(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function ft(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ct(L,T){const tt=r.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const _t=L.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,L,T);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function P(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Q(tt,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function j(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Q(tt,L,T);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function q(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){pt(tt,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const yt={[Mh]:o.REPEAT,[mr]:o.CLAMP_TO_EDGE,[yh]:o.MIRRORED_REPEAT},U={[pi]:o.NEAREST,[fx]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[yi]:o.LINEAR,[Nf]:o.LINEAR_MIPMAP_NEAREST,[gr]:o.LINEAR_MIPMAP_LINEAR},$={[mx]:o.NEVER,[Mx]:o.ALWAYS,[gx]:o.LESS,[av]:o.LEQUAL,[_x]:o.EQUAL,[xx]:o.GEQUAL,[vx]:o.GREATER,[Sx]:o.NOTEQUAL};function vt(L,T){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===Nf||T.magFilter===Wl||T.magFilter===gr||T.minFilter===yi||T.minFilter===Nf||T.minFilter===Wl||T.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,yt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pi||T.minFilter!==Wl&&T.minFilter!==gr||T.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function xt(L,T){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",V));const _t=T.source;let Mt=x.get(_t);Mt===void 0&&(Mt={},x.set(_t,Mt));const ht=ft(T);if(ht!==L.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),Mt[ht].usedTimes++;const zt=Mt[L.__cacheKey];zt!==void 0&&(Mt[L.__cacheKey].usedTimes--,zt.usedTimes===0&&w(T)),L.__cacheKey=ht,L.__webglTexture=Mt[ht].texture}return tt}function Q(L,T,tt){let _t=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_t=o.TEXTURE_3D);const Mt=xt(L,T),ht=T.source;i.bindTexture(_t,L.__webglTexture,o.TEXTURE0+tt);const zt=r.get(ht);if(ht.version!==zt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+tt);const At=Te.getPrimaries(Te.workingColorSpace),Rt=T.colorSpace===Pa?null:Te.getPrimaries(T.colorSpace),me=T.colorSpace===Pa||At===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Tt=C(T.image,!1,l.maxTextureSize);Tt=De(T,Tt);const It=c.convert(T.format,T.colorSpace),qt=c.convert(T.type);let jt=N(T.internalFormat,It,qt,T.colorSpace,T.isVideoTexture);vt(_t,T);let Ot;const oe=T.mipmaps,$t=T.isVideoTexture!==!0,Ue=zt.__version===void 0||Mt===!0,k=ht.dataReady,Ut=G(T,Tt);if(T.isDepthTexture)jt=D(T.format===wo,T.type),Ue&&($t?i.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,qt,null));else if(T.isDataTexture)if(oe.length>0){$t&&Ue&&i.texStorage2D(o.TEXTURE_2D,Ut,jt,oe[0].width,oe[0].height);for(let lt=0,mt=oe.length;lt<mt;lt++)Ot=oe[lt],$t?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,jt,Ot.width,Ot.height,0,It,qt,Ot.data);T.generateMipmaps=!1}else $t?(Ue&&i.texStorage2D(o.TEXTURE_2D,Ut,jt,Tt.width,Tt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,It,qt,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,qt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$t&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,jt,oe[0].width,oe[0].height,Tt.depth);for(let lt=0,mt=oe.length;lt<mt;lt++)if(Ot=oe[lt],T.format!==di)if(It!==null)if($t){if(k)if(T.layerUpdates.size>0){const Pt=v_(Ot.width,Ot.height,T.format,T.type);for(const Lt of T.layerUpdates){const ee=Ot.data.subarray(Lt*Pt/Ot.data.BYTES_PER_ELEMENT,(Lt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Lt,Ot.width,Ot.height,1,It,ee)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,Tt.depth,It,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,jt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,Tt.depth,It,qt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,jt,Ot.width,Ot.height,Tt.depth,0,It,qt,Ot.data)}else{$t&&Ue&&i.texStorage2D(o.TEXTURE_2D,Ut,jt,oe[0].width,oe[0].height);for(let lt=0,mt=oe.length;lt<mt;lt++)Ot=oe[lt],T.format!==di?It!==null?$t?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,jt,Ot.width,Ot.height,0,It,qt,Ot.data)}else if(T.isDataArrayTexture)if($t){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,jt,Tt.width,Tt.height,Tt.depth),k)if(T.layerUpdates.size>0){const lt=v_(Tt.width,Tt.height,T.format,T.type);for(const mt of T.layerUpdates){const Pt=Tt.data.subarray(mt*lt/Tt.data.BYTES_PER_ELEMENT,(mt+1)*lt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Tt.width,Tt.height,1,It,qt,Pt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,qt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,It,qt,Tt.data);else if(T.isData3DTexture)$t?(Ue&&i.texStorage3D(o.TEXTURE_3D,Ut,jt,Tt.width,Tt.height,Tt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,qt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,It,qt,Tt.data);else if(T.isFramebufferTexture){if(Ue)if($t)i.texStorage2D(o.TEXTURE_2D,Ut,jt,Tt.width,Tt.height);else{let lt=Tt.width,mt=Tt.height;for(let Pt=0;Pt<Ut;Pt++)i.texImage2D(o.TEXTURE_2D,Pt,jt,lt,mt,0,It,qt,null),lt>>=1,mt>>=1}}else if(oe.length>0){if($t&&Ue){const lt=Ht(oe[0]);i.texStorage2D(o.TEXTURE_2D,Ut,jt,lt.width,lt.height)}for(let lt=0,mt=oe.length;lt<mt;lt++)Ot=oe[lt],$t?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,It,qt,Ot):i.texImage2D(o.TEXTURE_2D,lt,jt,It,qt,Ot);T.generateMipmaps=!1}else if($t){if(Ue){const lt=Ht(Tt);i.texStorage2D(o.TEXTURE_2D,Ut,jt,lt.width,lt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,qt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,jt,It,qt,Tt);M(T)&&_(_t),zt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function pt(L,T,tt){if(T.image.length!==6)return;const _t=xt(L,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+tt);const ht=r.get(Mt);if(Mt.version!==ht.__version||_t===!0){i.activeTexture(o.TEXTURE0+tt);const zt=Te.getPrimaries(Te.workingColorSpace),At=T.colorSpace===Pa?null:Te.getPrimaries(T.colorSpace),Rt=T.colorSpace===Pa||zt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let mt=0;mt<6;mt++)!me&&!Tt?It[mt]=C(T.image[mt],!0,l.maxCubemapSize):It[mt]=Tt?T.image[mt].image:T.image[mt],It[mt]=De(T,It[mt]);const qt=It[0],jt=c.convert(T.format,T.colorSpace),Ot=c.convert(T.type),oe=N(T.internalFormat,jt,Ot,T.colorSpace),$t=T.isVideoTexture!==!0,Ue=ht.__version===void 0||_t===!0,k=Mt.dataReady;let Ut=G(T,qt);vt(o.TEXTURE_CUBE_MAP,T);let lt;if(me){$t&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,oe,qt.width,qt.height);for(let mt=0;mt<6;mt++){lt=It[mt].mipmaps;for(let Pt=0;Pt<lt.length;Pt++){const Lt=lt[Pt];T.format!==di?jt!==null?$t?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,0,0,Lt.width,Lt.height,jt,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,oe,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,0,0,Lt.width,Lt.height,jt,Ot,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,oe,Lt.width,Lt.height,0,jt,Ot,Lt.data)}}}else{if(lt=T.mipmaps,$t&&Ue){lt.length>0&&Ut++;const mt=Ht(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,oe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){$t?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,It[mt].width,It[mt].height,jt,Ot,It[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,It[mt].width,It[mt].height,0,jt,Ot,It[mt].data);for(let Pt=0;Pt<lt.length;Pt++){const ee=lt[Pt].image[mt].image;$t?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,0,0,ee.width,ee.height,jt,Ot,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,oe,ee.width,ee.height,0,jt,Ot,ee.data)}}else{$t?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,jt,Ot,It[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,jt,Ot,It[mt]);for(let Pt=0;Pt<lt.length;Pt++){const Lt=lt[Pt];$t?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,0,0,jt,Ot,Lt.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,oe,jt,Ot,Lt.image[mt])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),ht.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function St(L,T,tt,_t,Mt,ht){const zt=c.convert(tt.format,tt.colorSpace),At=c.convert(tt.type),Rt=N(tt.internalFormat,zt,At,tt.colorSpace),me=r.get(T),Tt=r.get(tt);if(Tt.__renderTarget=T,!me.__hasExternalTextures){const It=Math.max(1,T.width>>ht),qt=Math.max(1,T.height>>ht);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,Rt,It,qt,T.depth,0,zt,At,null):i.texImage2D(Mt,ht,Rt,It,qt,0,zt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),te(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Mt,Tt.__webglTexture,0,pe(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Mt,Tt.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(L,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const _t=T.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,ht=D(T.stencilBuffer,Mt),zt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=pe(T);te(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ht,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,L)}else{const _t=T.textures;for(let Mt=0;Mt<_t.length;Mt++){const ht=_t[Mt],zt=c.convert(ht.format,ht.colorSpace),At=c.convert(ht.type),Rt=N(ht.internalFormat,zt,At,ht.colorSpace),me=pe(T);tt&&te(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,Rt,T.width,T.height):te(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,Rt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Nt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(T.depthTexture);_t.__renderTarget=T,(!_t.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ct(T.depthTexture,0);const Mt=_t.__webglTexture,ht=pe(T);if(T.depthTexture.format===Co)te(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===wo)te(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function re(L){const T=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const _t=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_t){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=_t}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Nt(T.__webglFramebuffer,L)}else if(tt){T.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[_t]),T.__webglDepthbuffer[_t]===void 0)T.__webglDepthbuffer[_t]=o.createRenderbuffer(),bt(T.__webglDepthbuffer[_t],L,!1);else{const Mt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),bt(T.__webglDepthbuffer,L,!1);else{const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(L,T,tt){const _t=r.get(L);T!==void 0&&St(_t.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&re(L)}function Fe(L){const T=L.texture,tt=r.get(L),_t=r.get(T);L.addEventListener("dispose",I);const Mt=L.textures,ht=L.isWebGLCubeRenderTarget===!0,zt=Mt.length>1;if(zt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=T.version,h.memory.textures++),ht){tt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[At]=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)tt.__webglFramebuffer[At][Rt]=o.createFramebuffer()}else tt.__webglFramebuffer[At]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let At=0;At<T.mipmaps.length;At++)tt.__webglFramebuffer[At]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(zt)for(let At=0,Rt=Mt.length;At<Rt;At++){const me=r.get(Mt[At]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&te(L)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Rt=Mt[At];tt.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[At]);const me=c.convert(Rt.format,Rt.colorSpace),Tt=c.convert(Rt.type),It=N(Rt.internalFormat,me,Tt,Rt.colorSpace,L.isXRRenderTarget===!0),qt=pe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,It,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,tt.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),bt(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),vt(o.TEXTURE_CUBE_MAP,T);for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0)for(let Rt=0;Rt<T.mipmaps.length;Rt++)St(tt.__webglFramebuffer[At][Rt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt);else St(tt.__webglFramebuffer[At],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let At=0,Rt=Mt.length;At<Rt;At++){const me=Mt[At],Tt=r.get(me);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),vt(o.TEXTURE_2D,me),St(tt.__webglFramebuffer,L,me,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,0),M(me)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,_t.__webglTexture),vt(At,T),T.mipmaps&&T.mipmaps.length>0)for(let Rt=0;Rt<T.mipmaps.length;Rt++)St(tt.__webglFramebuffer[Rt],L,T,o.COLOR_ATTACHMENT0,At,Rt);else St(tt.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,At,0);M(T)&&_(At),i.unbindTexture()}L.depthBuffer&&re(L)}function ze(L){const T=L.textures;for(let tt=0,_t=T.length;tt<_t;tt++){const Mt=T[tt];if(M(Mt)){const ht=z(L),zt=r.get(Mt).__webglTexture;i.bindTexture(ht,zt),_(ht),i.unbindTexture()}}}const ue=[],F=[];function Ln(L){if(L.samples>0){if(te(L)===!1){const T=L.textures,tt=L.width,_t=L.height;let Mt=o.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=r.get(L),At=T.length>1;if(At)for(let Rt=0;Rt<T.length;Rt++)i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Rt]);const me=r.get(T[Rt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,tt,_t,0,0,tt,_t,Mt,o.NEAREST),m===!0&&(ue.length=0,F.length=0,ue.push(o.COLOR_ATTACHMENT0+Rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ue.push(ht),F.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Rt=0;Rt<T.length;Rt++){i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Rt]);const me=r.get(T[Rt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function pe(L){return Math.min(l.maxSamples,L.samples)}function te(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function De(L,T){const tt=L.colorSpace,_t=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==xs&&tt!==Pa&&(Te.getTransfer(tt)===Pe?(_t!==di||Mt!==na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Ht(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=st,this.setTexture2D=ct,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Zt,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=St,this.useMultisampledRTT=te}function Bb(o,e){function i(r,l=Pa){let c;const h=Te.getTransfer(l);if(r===na)return o.UNSIGNED_BYTE;if(r===ed)return o.UNSIGNED_SHORT_4_4_4_4;if(r===nd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===j_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Y_)return o.BYTE;if(r===Z_)return o.SHORT;if(r===Ao)return o.UNSIGNED_SHORT;if(r===td)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===$i)return o.FLOAT;if(r===Do)return o.HALF_FLOAT;if(r===K_)return o.ALPHA;if(r===Q_)return o.RGB;if(r===di)return o.RGBA;if(r===J_)return o.LUMINANCE;if(r===$_)return o.LUMINANCE_ALPHA;if(r===Co)return o.DEPTH_COMPONENT;if(r===wo)return o.DEPTH_STENCIL;if(r===tv)return o.RED;if(r===id)return o.RED_INTEGER;if(r===ev)return o.RG;if(r===ad)return o.RG_INTEGER;if(r===rd)return o.RGBA_INTEGER;if(r===hu||r===du||r===pu||r===mu)if(h===Pe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eh||r===Th||r===bh||r===Ah)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Eh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rh||r===Ch||r===wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Rh||r===Ch)return h===Pe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Bh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Dh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ph)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ih)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gu||r===Xh||r===Wh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===gu)return h===Pe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nv||r===qh||r===Yh||r===Zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===gu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ro?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Un,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Fa({vertexShader:Ib,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new Eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gb extends ys{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,A=null;const C=new Hb,M=i.getContextAttributes();let _=null,z=null;const N=[],D=[],G=new Re;let V=null;const I=new ri;I.viewport=new je;const Z=new ri;Z.viewport=new je;const w=[I,Z],R=new lM;let B=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=N[Q];return pt===void 0&&(pt=new eh,N[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=N[Q];return pt===void 0&&(pt=new eh,N[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=N[Q];return pt===void 0&&(pt=new eh,N[Q]=pt),pt.getHandSpace()};function nt(Q){const pt=D.indexOf(Q.inputSource);if(pt===-1)return;const St=N[pt];St!==void 0&&(St.update(Q.inputSource,Q.frame,p||h),St.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ft(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",ct);for(let Q=0;Q<N.length;Q++){const pt=D[Q];pt!==null&&(D[Q]=null,N[Q].disconnect(pt))}B=null,st=null,C.reset(),e.setRenderTarget(_),y=null,x=null,v=null,l=null,z=null,xt.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",ct),M.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,bt=null,Nt=null;M.depth&&(Nt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?wo:Co,bt=M.stencil?Ro:Sr);const re={colorFormat:i.RGBA8,depthFormat:Nt,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(re),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),z=new xr(x.textureWidth,x.textureHeight,{format:di,type:na,depthTexture:new mv(x.textureWidth,x.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),z=new xr(y.framebufferWidth,y.framebufferHeight,{format:di,type:na,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ct(Q){for(let pt=0;pt<Q.removed.length;pt++){const St=Q.removed[pt],bt=D.indexOf(St);bt>=0&&(D[bt]=null,N[bt].disconnect(St))}for(let pt=0;pt<Q.added.length;pt++){const St=Q.added[pt];let bt=D.indexOf(St);if(bt===-1){for(let re=0;re<N.length;re++)if(re>=D.length){D.push(St),bt=re;break}else if(D[re]===null){D[re]=St,bt=re;break}if(bt===-1)break}const Nt=N[bt];Nt&&Nt.connect(St)}}const P=new ot,j=new ot;function q(Q,pt,St){P.setFromMatrixPosition(pt.matrixWorld),j.setFromMatrixPosition(St.matrixWorld);const bt=P.distanceTo(j),Nt=pt.projectionMatrix.elements,re=St.projectionMatrix.elements,Zt=Nt[14]/(Nt[10]-1),Fe=Nt[14]/(Nt[10]+1),ze=(Nt[9]+1)/Nt[5],ue=(Nt[9]-1)/Nt[5],F=(Nt[8]-1)/Nt[0],Ln=(re[8]+1)/re[0],pe=Zt*F,te=Zt*Ln,kt=bt/(-F+Ln),De=kt*-F;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(De),Q.translateZ(kt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Nt[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Ht=Zt+kt,L=Fe+kt,T=pe-De,tt=te+(bt-De),_t=ze*Fe/L*Ht,Mt=ue*Fe/L*Ht;Q.projectionMatrix.makePerspective(T,tt,_t,Mt,Ht,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,St=Q.far;C.texture!==null&&(C.depthNear>0&&(pt=C.depthNear),C.depthFar>0&&(St=C.depthFar)),R.near=Z.near=I.near=pt,R.far=Z.far=I.far=St,(B!==R.near||st!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,st=R.far),I.layers.mask=Q.layers.mask|2,Z.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|Z.layers.mask;const bt=Q.parent,Nt=R.cameras;yt(R,bt);for(let re=0;re<Nt.length;re++)yt(Nt[re],bt);Nt.length===2?q(R,I,Z):R.projectionMatrix.copy(I.projectionMatrix),U(Q,R,bt)};function U(Q,pt,St){St===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(St.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=jh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let $=null;function vt(Q,pt){if(g=pt.getViewerPose(p||h),A=pt,g!==null){const St=g.views;y!==null&&(e.setRenderTargetFramebuffer(z,y.framebuffer),e.setRenderTarget(z));let bt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,bt=!0);for(let Zt=0;Zt<St.length;Zt++){const Fe=St[Zt];let ze=null;if(y!==null)ze=y.getViewport(Fe);else{const F=v.getViewSubImage(x,Fe);ze=F.viewport,Zt===0&&(e.setRenderTargetTextures(z,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(z))}let ue=w[Zt];ue===void 0&&(ue=new ri,ue.layers.enable(Zt),ue.viewport=new je,w[Zt]=ue),ue.matrix.fromArray(Fe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Fe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(ze.x,ze.y,ze.width,ze.height),Zt===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),bt===!0&&R.cameras.push(ue)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(St[0]);Zt&&Zt.isValid&&Zt.texture&&C.init(e,Zt,l.renderState)}}for(let St=0;St<N.length;St++){const bt=D[St],Nt=N[St];bt!==null&&Nt!==void 0&&Nt.update(bt,pt,p||h)}$&&$(Q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),A=null}const xt=new vv;xt.setAnimationLoop(vt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const cr=new bi,Vb=new Ke;function kb(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,hv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,z,N,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),A(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),C(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,z,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Fn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Fn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const z=e.get(_),N=z.envMap,D=z.envMapRotation;N&&(M.envMap.value=N,cr.copy(D),cr.x*=-1,cr.y*=-1,cr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),M.envMapRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(cr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,z,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*z,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,z){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const z=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Xb(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,N){const D=N.program;r.uniformBlockBinding(z,D)}function p(z,N){let D=l[z.id];D===void 0&&(A(z),D=g(z),l[z.id]=D,z.addEventListener("dispose",M));const G=N.program;r.updateUBOMapping(z,G);const V=e.render.frame;c[z.id]!==V&&(x(z),c[z.id]=V)}function g(z){const N=v();z.__bindingPointIndex=N;const D=o.createBuffer(),G=z.__size,V=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function v(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const N=l[z.id],D=z.uniforms,G=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let V=0,I=D.length;V<I;V++){const Z=Array.isArray(D[V])?D[V]:[D[V]];for(let w=0,R=Z.length;w<R;w++){const B=Z[w];if(y(B,V,w,G)===!0){const st=B.__offset,nt=Array.isArray(B.value)?B.value:[B.value];let ft=0;for(let ct=0;ct<nt.length;ct++){const P=nt[ct],j=C(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,st+ft,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,ft),ft+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(z,N,D,G){const V=z.value,I=N+"_"+D;if(G[I]===void 0)return typeof V=="number"||typeof V=="boolean"?G[I]=V:G[I]=V.clone(),!0;{const Z=G[I];if(typeof V=="number"||typeof V=="boolean"){if(Z!==V)return G[I]=V,!0}else if(Z.equals(V)===!1)return Z.copy(V),!0}return!1}function A(z){const N=z.uniforms;let D=0;const G=16;for(let I=0,Z=N.length;I<Z;I++){const w=Array.isArray(N[I])?N[I]:[N[I]];for(let R=0,B=w.length;R<B;R++){const st=w[R],nt=Array.isArray(st.value)?st.value:[st.value];for(let ft=0,ct=nt.length;ft<ct;ft++){const P=nt[ft],j=C(P),q=D%G,yt=q%j.boundary,U=q+yt;D+=yt,U!==0&&G-U<j.storage&&(D+=G-U),st.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=D,D+=j.storage}}}const V=D%G;return V>0&&(D+=G-V),z.__size=D,z.__cache={},this}function C(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),N}function M(z){const N=z.target;N.removeEventListener("dispose",M);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class Wb{constructor(e={}){const{canvas:i=Ex(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const z=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=ai;let V=0,I=0,Z=null,w=-1,R=null;const B=new je,st=new je;let nt=null;const ft=new Ae(0);let ct=0,P=i.width,j=i.height,q=1,yt=null,U=null;const $=new je(0,0,P,j),vt=new je(0,0,P,j);let xt=!1;const Q=new ld;let pt=!1,St=!1;const bt=new Ke,Nt=new Ke,re=new ot,Zt=new je,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ue(){return Z===null?q:1}let F=r;function Ln(b,W){return i.getContext(b,W)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jh}`),i.addEventListener("webglcontextlost",mt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),F===null){const W="webgl2";if(F=Ln(W,b),F===null)throw Ln(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pe,te,kt,De,Ht,L,T,tt,_t,Mt,ht,zt,At,Rt,me,Tt,It,qt,jt,Ot,oe,$t,Ue,k;function Ut(){pe=new eT(F),pe.init(),$t=new Bb(F,pe),te=new ZE(F,pe,e,$t),kt=new Pb(F,pe),te.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),De=new aT(F),Ht=new yb,L=new zb(F,pe,kt,Ht,te,$t,De),T=new KE(D),tt=new tT(D),_t=new cM(F),Ue=new qE(F,_t),Mt=new nT(F,_t,De,Ue),ht=new sT(F,Mt,_t,De),jt=new rT(F,te,L),Tt=new jE(Ht),zt=new Mb(D,T,tt,pe,te,Ue,Tt),At=new kb(D,Ht),Rt=new Tb,me=new Db(pe),qt=new WE(D,T,tt,kt,ht,y,m),It=new Nb(D,ht,te),k=new Xb(F,De,te,kt),Ot=new YE(F,pe,De),oe=new iT(F,pe,De),De.programs=zt.programs,D.capabilities=te,D.extensions=pe,D.properties=Ht,D.renderLists=Rt,D.shadowMap=It,D.state=kt,D.info=De}Ut();const lt=new Gb(D,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(P,j,!1))},this.getSize=function(b){return b.set(P,j)},this.setSize=function(b,W,at=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=b,j=W,i.width=Math.floor(b*q),i.height=Math.floor(W*q),at===!0&&(i.style.width=b+"px",i.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(P*q,j*q).floor()},this.setDrawingBufferSize=function(b,W,at){P=b,j=W,q=at,i.width=Math.floor(b*at),i.height=Math.floor(W*at),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,W,at,rt){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,W,at,rt),kt.viewport(B.copy($).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,W,at,rt){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,W,at,rt),kt.scissor(st.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){kt.setScissorTest(xt=b)},this.setOpaqueSort=function(b){yt=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,at=!0){let rt=0;if(b){let Y=!1;if(Z!==null){const Et=Z.texture.format;Y=Et===rd||Et===ad||Et===id}if(Y){const Et=Z.texture.type,Ct=Et===na||Et===Sr||Et===Ao||Et===Ro||Et===ed||Et===nd,wt=qt.getClearColor(),Bt=qt.getClearAlpha(),Qt=wt.r,Xt=wt.g,Vt=wt.b;Ct?(A[0]=Qt,A[1]=Xt,A[2]=Vt,A[3]=Bt,F.clearBufferuiv(F.COLOR,0,A)):(C[0]=Qt,C[1]=Xt,C[2]=Vt,C[3]=Bt,F.clearBufferiv(F.COLOR,0,C))}else rt|=F.COLOR_BUFFER_BIT}W&&(rt|=F.DEPTH_BUFFER_BIT),at&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",mt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),qt.dispose(),Rt.dispose(),me.dispose(),Ht.dispose(),T.dispose(),tt.dispose(),ht.dispose(),Ue.dispose(),k.dispose(),zt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",rn),lt.removeEventListener("sessionend",_n),Nn.stop()};function mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const b=De.autoReset,W=It.enabled,at=It.autoUpdate,rt=It.needsUpdate,Y=It.type;Ut(),De.autoReset=b,It.enabled=W,It.autoUpdate=at,It.needsUpdate=rt,It.type=Y}function Lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ee(b){const W=b.target;W.removeEventListener("dispose",ee),He(W)}function He(b){$e(b),Ht.remove(b)}function $e(b){const W=Ht.get(b).programs;W!==void 0&&(W.forEach(function(at){zt.releaseProgram(at)}),b.isShaderMaterial&&zt.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,at,rt,Y,Et){W===null&&(W=Fe);const Ct=Y.isMesh&&Y.matrixWorld.determinant()<0,wt=Va(b,W,at,rt,Y);kt.setMaterial(rt,Ct);let Bt=at.index,Qt=1;if(rt.wireframe===!0){if(Bt=Mt.getWireframeAttribute(at),Bt===void 0)return;Qt=2}const Xt=at.drawRange,Vt=at.attributes.position;let fe=Xt.start*Qt,ye=(Xt.start+Xt.count)*Qt;Et!==null&&(fe=Math.max(fe,Et.start*Qt),ye=Math.min(ye,(Et.start+Et.count)*Qt)),Bt!==null?(fe=Math.max(fe,0),ye=Math.min(ye,Bt.count)):Vt!=null&&(fe=Math.max(fe,0),ye=Math.min(ye,Vt.count));const Xe=ye-fe;if(Xe<0||Xe===1/0)return;Ue.setup(Y,rt,wt,at,Bt);let ge,_e=Ot;if(Bt!==null&&(ge=_t.get(Bt),_e=oe,_e.setIndex(ge)),Y.isMesh)rt.wireframe===!0?(kt.setLineWidth(rt.wireframeLinewidth*ue()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(Y.isLine){let Wt=rt.linewidth;Wt===void 0&&(Wt=1),kt.setLineWidth(Wt*ue()),Y.isLineSegments?_e.setMode(F.LINES):Y.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else Y.isPoints?_e.setMode(F.POINTS):Y.isSprite&&_e.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_u("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Wt=Y._multiDrawStarts,qe=Y._multiDrawCounts,xe=Y._multiDrawCount,yn=Bt?_t.get(Bt).bytesPerElement:1,sa=Ht.get(rt).currentProgram.getUniforms();for(let Ge=0;Ge<xe;Ge++)sa.setValue(F,"_gl_DrawID",Ge),_e.render(Wt[Ge]/yn,qe[Ge])}else if(Y.isInstancedMesh)_e.renderInstances(fe,Xe,Y.count);else if(at.isInstancedBufferGeometry){const Wt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,qe=Math.min(at.instanceCount,Wt);_e.renderInstances(fe,Xe,qe)}else _e.render(fe,Xe)};function Me(b,W,at){b.transparent===!0&&b.side===Ji&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,aa(b,W,at),b.side=Ia,b.needsUpdate=!0,aa(b,W,at),b.side=Ji):aa(b,W,at)}this.compile=function(b,W,at=null){at===null&&(at=b),_=me.get(at),_.init(W),N.push(_),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),b!==at&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const rt=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const wt=Et[Ct];Me(wt,at,Y),rt.add(wt)}else Me(Et,at,Y),rt.add(Et)}),_=N.pop(),rt},this.compileAsync=function(b,W,at=null){const rt=this.compile(b,W,at);return new Promise(Y=>{function Et(){if(rt.forEach(function(Ct){Ht.get(Ct).currentProgram.isReady()&&rt.delete(Ct)}),rt.size===0){Y(b);return}setTimeout(Et,10)}pe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Hn=null;function fn(b){Hn&&Hn(b)}function rn(){Nn.stop()}function _n(){Nn.start()}const Nn=new vv;Nn.setAnimationLoop(fn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(b){Hn=b,lt.setAnimationLoop(b),b===null?Nn.stop():Nn.start()},lt.addEventListener("sessionstart",rn),lt.addEventListener("sessionend",_n),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(W),W=lt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,W,Z),_=me.get(b,N.length),_.init(W),N.push(_),Nt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Nt),St=this.localClippingEnabled,pt=Tt.init(this.clippingPlanes,St),M=Rt.get(b,z.length),M.init(),z.push(M),lt.enabled===!0&&lt.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Ha(Et,W,-1/0,D.sortObjects)}Ha(b,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(yt,U),ze=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,ze&&qt.addToRenderList(M,b),this.info.render.frame++,pt===!0&&Tt.beginShadows();const at=_.state.shadowsArray;It.render(at,b,W),pt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Y=M.transmissive;if(_.setupLights(),W.isArrayCamera){const Et=W.cameras;if(Y.length>0)for(let Ct=0,wt=Et.length;Ct<wt;Ct++){const Bt=Et[Ct];zo(rt,Y,b,Bt)}ze&&qt.render(b);for(let Ct=0,wt=Et.length;Ct<wt;Ct++){const Bt=Et[Ct];Po(M,b,Bt,Bt.viewport)}}else Y.length>0&&zo(rt,Y,b,W),ze&&qt.render(b),Po(M,b,W);Z!==null&&I===0&&(L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z)),b.isScene===!0&&b.onAfterRender(D,b,W),Ue.resetDefaultState(),w=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],pt===!0&&Tt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Ha(b,W,at,rt){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)at=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){rt&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Nt);const Ct=ht.update(b),wt=b.material;wt.visible&&M.push(b,Ct,wt,at,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Ct=ht.update(b),wt=b.material;if(rt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Zt.copy(Ct.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(Nt)),Array.isArray(wt)){const Bt=Ct.groups;for(let Qt=0,Xt=Bt.length;Qt<Xt;Qt++){const Vt=Bt[Qt],fe=wt[Vt.materialIndex];fe&&fe.visible&&M.push(b,Ct,fe,at,Zt.z,Vt)}}else wt.visible&&M.push(b,Ct,wt,at,Zt.z,null)}}const Et=b.children;for(let Ct=0,wt=Et.length;Ct<wt;Ct++)Ha(Et[Ct],W,at,rt)}function Po(b,W,at,rt){const Y=b.opaque,Et=b.transmissive,Ct=b.transparent;_.setupLightsView(at),pt===!0&&Tt.setGlobalState(D.clippingPlanes,at),rt&&kt.viewport(B.copy(rt)),Y.length>0&&Ga(Y,W,at),Et.length>0&&Ga(Et,W,at),Ct.length>0&&Ga(Ct,W,at),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function zo(b,W,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new xr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Do:na,minFilter:gr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Et=_.state.transmissionRenderTarget[rt.id],Ct=rt.viewport||B;Et.setSize(Ct.z*D.transmissionResolutionScale,Ct.w*D.transmissionResolutionScale);const wt=D.getRenderTarget();D.setRenderTarget(Et),D.getClearColor(ft),ct=D.getClearAlpha(),ct<1&&D.setClearColor(16777215,.5),D.clear(),ze&&qt.render(at);const Bt=D.toneMapping;D.toneMapping=Ba;const Qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),pt===!0&&Tt.setGlobalState(D.clippingPlanes,rt),Ga(b,at,rt),L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Vt=0,fe=W.length;Vt<fe;Vt++){const ye=W[Vt],Xe=ye.object,ge=ye.geometry,_e=ye.material,Wt=ye.group;if(_e.side===Ji&&Xe.layers.test(rt.layers)){const qe=_e.side;_e.side=Fn,_e.needsUpdate=!0,ia(Xe,at,rt,ge,_e,Wt),_e.side=qe,_e.needsUpdate=!0,Xt=!0}}Xt===!0&&(L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et))}D.setRenderTarget(wt),D.setClearColor(ft,ct),Qt!==void 0&&(rt.viewport=Qt),D.toneMapping=Bt}function Ga(b,W,at){const rt=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Et=b.length;Y<Et;Y++){const Ct=b[Y],wt=Ct.object,Bt=Ct.geometry,Qt=Ct.group;let Xt=Ct.material;Xt.allowOverride===!0&&rt!==null&&(Xt=rt),wt.layers.test(at.layers)&&ia(wt,W,at,Bt,Xt,Qt)}}function ia(b,W,at,rt,Y,Et){b.onBeforeRender(D,W,at,rt,Y,Et),b.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(D,W,at,rt,b,Et),Y.transparent===!0&&Y.side===Ji&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,D.renderBufferDirect(at,W,rt,Y,b,Et),Y.side=Ia,Y.needsUpdate=!0,D.renderBufferDirect(at,W,rt,Y,b,Et),Y.side=Ji):D.renderBufferDirect(at,W,rt,Y,b,Et),b.onAfterRender(D,W,at,rt,Y,Et)}function aa(b,W,at){W.isScene!==!0&&(W=Fe);const rt=Ht.get(b),Y=_.state.lights,Et=_.state.shadowsArray,Ct=Y.state.version,wt=zt.getParameters(b,Y.state,Et,W,at),Bt=zt.getProgramCacheKey(wt);let Qt=rt.programs;rt.environment=b.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(b.isMeshStandardMaterial?tt:T).get(b.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Qt===void 0&&(b.addEventListener("dispose",ee),Qt=new Map,rt.programs=Qt);let Xt=Qt.get(Bt);if(Xt!==void 0){if(rt.currentProgram===Xt&&rt.lightsStateVersion===Ct)return Ri(b,wt),Xt}else wt.uniforms=zt.getUniforms(b),b.onBeforeCompile(wt,D),Xt=zt.acquireProgram(wt,Bt),Qt.set(Bt,Xt),rt.uniforms=wt.uniforms;const Vt=rt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),Ri(b,wt),rt.needsLights=tn(b),rt.lightsStateVersion=Ct,rt.needsLights&&(Vt.ambientLightColor.value=Y.state.ambient,Vt.lightProbe.value=Y.state.probe,Vt.directionalLights.value=Y.state.directional,Vt.directionalLightShadows.value=Y.state.directionalShadow,Vt.spotLights.value=Y.state.spot,Vt.spotLightShadows.value=Y.state.spotShadow,Vt.rectAreaLights.value=Y.state.rectArea,Vt.ltc_1.value=Y.state.rectAreaLTC1,Vt.ltc_2.value=Y.state.rectAreaLTC2,Vt.pointLights.value=Y.state.point,Vt.pointLightShadows.value=Y.state.pointShadow,Vt.hemisphereLights.value=Y.state.hemi,Vt.directionalShadowMap.value=Y.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Vt.spotShadowMap.value=Y.state.spotShadowMap,Vt.spotLightMatrix.value=Y.state.spotLightMatrix,Vt.spotLightMap.value=Y.state.spotLightMap,Vt.pointShadowMap.value=Y.state.pointShadowMap,Vt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=Xt,rt.uniformsList=null,Xt}function Ai(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=vu.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Ri(b,W){const at=Ht.get(b);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function Va(b,W,at,rt,Y){W.isScene!==!0&&(W=Fe),L.resetTextureUnits();const Et=W.fog,Ct=rt.isMeshStandardMaterial?W.environment:null,wt=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:xs,Bt=(rt.isMeshStandardMaterial?tt:T).get(rt.envMap||Ct),Qt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Xt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Vt=!!at.morphAttributes.position,fe=!!at.morphAttributes.normal,ye=!!at.morphAttributes.color;let Xe=Ba;rt.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Xe=D.toneMapping);const ge=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,_e=ge!==void 0?ge.length:0,Wt=Ht.get(rt),qe=_.state.lights;if(pt===!0&&(St===!0||b!==R)){const hn=b===R&&rt.id===w;Tt.setState(rt,b,hn)}let xe=!1;rt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==qe.state.version||Wt.outputColorSpace!==wt||Y.isBatchedMesh&&Wt.batching===!1||!Y.isBatchedMesh&&Wt.batching===!0||Y.isBatchedMesh&&Wt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Wt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Wt.instancing===!1||!Y.isInstancedMesh&&Wt.instancing===!0||Y.isSkinnedMesh&&Wt.skinning===!1||!Y.isSkinnedMesh&&Wt.skinning===!0||Y.isInstancedMesh&&Wt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Wt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Wt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Wt.instancingMorph===!1&&Y.morphTexture!==null||Wt.envMap!==Bt||rt.fog===!0&&Wt.fog!==Et||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Tt.numPlanes||Wt.numIntersection!==Tt.numIntersection)||Wt.vertexAlphas!==Qt||Wt.vertexTangents!==Xt||Wt.morphTargets!==Vt||Wt.morphNormals!==fe||Wt.morphColors!==ye||Wt.toneMapping!==Xe||Wt.morphTargetsCount!==_e)&&(xe=!0):(xe=!0,Wt.__version=rt.version);let yn=Wt.currentProgram;xe===!0&&(yn=aa(rt,W,Y));let sa=!1,Ge=!1,wi=!1;const Be=yn.getUniforms(),En=Wt.uniforms;if(kt.useProgram(yn.program)&&(sa=!0,Ge=!0,wi=!0),rt.id!==w&&(w=rt.id,Ge=!0),sa||R!==b){kt.buffers.depth.getReversed()?(bt.copy(b.projectionMatrix),bx(bt),Ax(bt),Be.setValue(F,"projectionMatrix",bt)):Be.setValue(F,"projectionMatrix",b.projectionMatrix),Be.setValue(F,"viewMatrix",b.matrixWorldInverse);const vn=Be.map.cameraPosition;vn!==void 0&&vn.setValue(F,re.setFromMatrixPosition(b.matrixWorld)),te.logarithmicDepthBuffer&&Be.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Be.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Ge=!0,wi=!0)}if(Y.isSkinnedMesh){Be.setOptional(F,Y,"bindMatrix"),Be.setOptional(F,Y,"bindMatrixInverse");const hn=Y.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Be.setValue(F,"boneTexture",hn.boneTexture,L))}Y.isBatchedMesh&&(Be.setOptional(F,Y,"batchingTexture"),Be.setValue(F,"batchingTexture",Y._matricesTexture,L),Be.setOptional(F,Y,"batchingIdTexture"),Be.setValue(F,"batchingIdTexture",Y._indirectTexture,L),Be.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Be.setValue(F,"batchingColorTexture",Y._colorsTexture,L));const sn=at.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&jt.update(Y,at,yn),(Ge||Wt.receiveShadow!==Y.receiveShadow)&&(Wt.receiveShadow=Y.receiveShadow,Be.setValue(F,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(En.envMap.value=Bt,En.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(En.envMapIntensity.value=W.environmentIntensity),Ge&&(Be.setValue(F,"toneMappingExposure",D.toneMappingExposure),Wt.needsLights&&ra(En,wi),Et&&rt.fog===!0&&At.refreshFogUniforms(En,Et),At.refreshMaterialUniforms(En,rt,q,j,_.state.transmissionRenderTarget[b.id]),vu.upload(F,Ai(Wt),En,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(vu.upload(F,Ai(Wt),En,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Be.setValue(F,"center",Y.center),Be.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(F,"normalMatrix",Y.normalMatrix),Be.setValue(F,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const hn=rt.uniformsGroups;for(let vn=0,mi=hn.length;vn<mi;vn++){const Di=hn[vn];k.update(Di,yn),k.bind(Di,yn)}}return yn}function ra(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function tn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,W,at){const rt=Ht.get(b);rt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ht.get(b.texture).__webglTexture=W,Ht.get(b.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const at=Ht.get(b);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const Bo=F.createFramebuffer();this.setRenderTarget=function(b,W=0,at=0){Z=b,V=W,I=at;let rt=!0,Y=null,Et=!1,Ct=!1;if(b){const Bt=Ht.get(b);if(Bt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Bt.__hasExternalTextures)L.rebindTextures(b,Ht.get(b.texture).__webglTexture,Ht.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Vt=b.depthTexture;if(Bt.__boundDepthTexture!==Vt){if(Vt!==null&&Ht.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const Qt=b.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ct=!0);const Xt=Ht.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[W])?Y=Xt[W][at]:Y=Xt[W],Et=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?Y=Ht.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?Y=Xt[at]:Y=Xt,B.copy(b.viewport),st.copy(b.scissor),nt=b.scissorTest}else B.copy($).multiplyScalar(q).floor(),st.copy(vt).multiplyScalar(q).floor(),nt=xt;if(at!==0&&(Y=Bo),kt.bindFramebuffer(F.FRAMEBUFFER,Y)&&rt&&kt.drawBuffers(b,Y),kt.viewport(B),kt.scissor(st),kt.setScissorTest(nt),Et){const Bt=Ht.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,at)}else if(Ct){const Bt=Ht.get(b.texture),Qt=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,at,Qt)}else if(b!==null&&at!==0){const Bt=Ht.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(b,W,at,rt,Y,Et,Ct){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){kt.bindFramebuffer(F.FRAMEBUFFER,wt);try{const Bt=b.texture,Qt=Bt.format,Xt=Bt.type;if(!te.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-rt&&at>=0&&at<=b.height-Y&&F.readPixels(W,at,rt,Y,$t.convert(Qt),$t.convert(Xt),Et)}finally{const Bt=Z!==null?Ht.get(Z).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,W,at,rt,Y,Et,Ct){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt)if(W>=0&&W<=b.width-rt&&at>=0&&at<=b.height-Y){kt.bindFramebuffer(F.FRAMEBUFFER,wt);const Bt=b.texture,Qt=Bt.format,Xt=Bt.type;if(!te.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(W,at,rt,Y,$t.convert(Qt),$t.convert(Xt),0);const fe=Z!==null?Ht.get(Z).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,fe);const ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Tx(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.deleteBuffer(Vt),F.deleteSync(ye),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,at=0){const rt=Math.pow(2,-at),Y=Math.floor(b.image.width*rt),Et=Math.floor(b.image.height*rt),Ct=W!==null?W.x:0,wt=W!==null?W.y:0;L.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Ct,wt,Y,Et),kt.unbindTexture()};const Io=F.createFramebuffer(),Ci=F.createFramebuffer();this.copyTextureToTexture=function(b,W,at=null,rt=null,Y=0,Et=null){Et===null&&(Y!==0?(_u("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Y,Y=0):Et=0);let Ct,wt,Bt,Qt,Xt,Vt,fe,ye,Xe;const ge=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(at!==null)Ct=at.max.x-at.min.x,wt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,Qt=at.min.x,Xt=at.min.y,Vt=at.isBox3?at.min.z:0;else{const sn=Math.pow(2,-Y);Ct=Math.floor(ge.width*sn),wt=Math.floor(ge.height*sn),b.isDataArrayTexture?Bt=ge.depth:b.isData3DTexture?Bt=Math.floor(ge.depth*sn):Bt=1,Qt=0,Xt=0,Vt=0}rt!==null?(fe=rt.x,ye=rt.y,Xe=rt.z):(fe=0,ye=0,Xe=0);const _e=$t.convert(W.format),Wt=$t.convert(W.type);let qe;W.isData3DTexture?(L.setTexture3D(W,0),qe=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),qe=F.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),qe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),yn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),sa=F.getParameter(F.UNPACK_SKIP_PIXELS),Ge=F.getParameter(F.UNPACK_SKIP_ROWS),wi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Vt);const Be=b.isDataArrayTexture||b.isData3DTexture,En=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const sn=Ht.get(b),hn=Ht.get(W),vn=Ht.get(sn.__renderTarget),mi=Ht.get(hn.__renderTarget);kt.bindFramebuffer(F.READ_FRAMEBUFFER,vn.__webglFramebuffer),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Di=0;Di<Bt;Di++)Be&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(b).__webglTexture,Y,Vt+Di),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,Et,Xe+Di)),F.blitFramebuffer(Qt,Xt,Ct,wt,fe,ye,Ct,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Ht.has(b)){const sn=Ht.get(b),hn=Ht.get(W);kt.bindFramebuffer(F.READ_FRAMEBUFFER,Io),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ci);for(let vn=0;vn<Bt;vn++)Be?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,sn.__webglTexture,Y,Vt+vn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,sn.__webglTexture,Y),En?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hn.__webglTexture,Et,Xe+vn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hn.__webglTexture,Et),Y!==0?F.blitFramebuffer(Qt,Xt,Ct,wt,fe,ye,Ct,wt,F.COLOR_BUFFER_BIT,F.NEAREST):En?F.copyTexSubImage3D(qe,Et,fe,ye,Xe+vn,Qt,Xt,Ct,wt):F.copyTexSubImage2D(qe,Et,fe,ye,Qt,Xt,Ct,wt);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else En?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(qe,Et,fe,ye,Xe,Ct,wt,Bt,_e,Wt,ge.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(qe,Et,fe,ye,Xe,Ct,wt,Bt,_e,ge.data):F.texSubImage3D(qe,Et,fe,ye,Xe,Ct,wt,Bt,_e,Wt,ge):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,fe,ye,Ct,wt,_e,Wt,ge.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,fe,ye,ge.width,ge.height,_e,ge.data):F.texSubImage2D(F.TEXTURE_2D,Et,fe,ye,Ct,wt,_e,Wt,ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,sa),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,wi),Et===0&&W.generateMipmaps&&F.generateMipmap(qe),kt.unbindTexture()},this.copyTextureToTexture3D=function(b,W,at=null,rt=null,Y=0){return _u('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,at,rt,Y)},this.initRenderTarget=function(b){Ht.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),kt.unbindTexture()},this.resetState=function(){V=0,I=0,Z=null,kt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}function k_({onReady:o}){return ds.useEffect(()=>{let e=window.innerWidth,i=window.innerHeight;const r=6,l=24,c=5,h=10,d=1,m=h-d*2,p=Array.from({length:l},()=>Math.random()>.5?1:0),g=[],v=document.createElement("canvas");v.width=c*(r*h-h),v.height=l*h;const x=v.getContext("2d");x.fillStyle="#999",x.fillRect(0,0,v.width,v.height);for(let R=0;R<c;R++){g[R]=[];for(let B=0;B<l;B++){g[R][B]=[];const st=p[B];let nt=0;for(;nt<r;){let ft=Math.ceil(Math.random()*4);nt+ft>r&&(ft=r-nt),x.fillStyle="#555",x.fillRect(R*(r*h)+(st+nt-1)*h+d,B*h+d,ft*h-d*2,h-d*2),g[R][B].push(ft),nt+=ft}}}const y=new Un(v);y.needsUpdate=!0;const A=new eM({color:9973721,map:y}),C=document.getElementById("bg-container"),M=new Jx,_=new ri(80,e/i,1,1e3);_.position.z=200,M.add(_),M.add(new oM(16777215,.5));const z=new sM(16777215,1);z.position.set(1,1,1).normalize(),M.add(z);const N=new Wb({antialias:!0});N.setSize(e,i),C.appendChild(N.domElement);const D=new _r;M.add(D);const G=1/c*Math.PI*2,V=r*h/(2*Math.tan(G/2)),I=[];for(let R=0;R<c;R++){const B=new _r;B.rotation.set(0,0,R*G),D.add(B),I[R]=[];for(let st=0;st<l;st++){const nt=new _r;nt.position.set(0,0,st*h);let ft=r*h/-2+(p[st]?1:-1)*(h-d)/2;for(let ct=0;ct<g[R][st].length;ct++){const P=g[R][st][ct]*h,j=new Ei(new Es(P-d*2,m+m*Math.random(),m),A);j.position.set(ft+P/2,V,0),j.rotation.set(0,0,.3*(Math.random()-.5)),nt.add(j),ft+=P}B.add(nt),I[R][st]=nt}}const Z=R=>{D.rotation.set(0,0,R*5e-5);for(let B=0;B<l;B++)for(let st=0;st<c;st++){const nt=I[st][B];nt.position.z+=.2,nt.position.z%=h*l}N.render(M,_),requestAnimationFrame(Z)};Z(0);const w=()=>{e=window.innerWidth,i=window.innerHeight,_.aspect=e/i,_.updateProjectionMatrix(),N.setSize(e,i)};return window.addEventListener("resize",w),typeof o=="function"&&setTimeout(()=>o(),0),()=>{window.removeEventListener("resize",w),C.innerHTML=""}},[o]),ne.jsx("div",{id:"bg-container",style:{position:"fixed",inset:0,zIndex:-1,width:"100vw",height:"100vh",overflow:"hidden"}})}function Ki({value:o,onSquareClick:e}){return ne.jsx("button",{className:"square",onClick:e,children:o})}function qb({xIsNext:o,squares:e,onPlay:i}){function r(h){if(X_(e)||e[h])return;const d=e.slice();o?d[h]="X":d[h]="O",i(d)}const l=X_(e);let c;return l?l.winner?c="Winner: "+l.winner:l.draw&&(c="Draw!"):c="Next player: "+(o?"X":"O"),ne.jsxs(ne.Fragment,{children:[ne.jsx("div",{className:"status audiowide-regular",children:c}),ne.jsxs("div",{className:"board-row",children:[ne.jsx(Ki,{value:e[0],onSquareClick:()=>r(0)}),ne.jsx(Ki,{value:e[1],onSquareClick:()=>r(1)}),ne.jsx(Ki,{value:e[2],onSquareClick:()=>r(2)})]}),ne.jsxs("div",{className:"board-row",children:[ne.jsx(Ki,{value:e[3],onSquareClick:()=>r(3)}),ne.jsx(Ki,{value:e[4],onSquareClick:()=>r(4)}),ne.jsx(Ki,{value:e[5],onSquareClick:()=>r(5)})]}),ne.jsxs("div",{className:"board-row",children:[ne.jsx(Ki,{value:e[6],onSquareClick:()=>r(6)}),ne.jsx(Ki,{value:e[7],onSquareClick:()=>r(7)}),ne.jsx(Ki,{value:e[8],onSquareClick:()=>r(8)})]})]})}function Yb(){const[o,e]=ds.useState(!1),[i,r]=ds.useState(!1),[l,c]=ds.useState([Array(9).fill(null)]),[h,d]=ds.useState(0),m=l[h];let p=h%2===0;function g(){r(!0)}function v(){c([Array(9).fill(null)]),d(0)}function x(A){const C=[...l.slice(0,h+1),A];c(C),d(C.length-1),p=!p}function y(A){d(A),p=A%2===0}return l.map((A,C)=>{let M=C>0?"Go to move #"+C:"Go to game start";return ne.jsx("li",{children:ne.jsx("button",{onClick:()=>y(C),children:M})},C)}),o?ne.jsxs(ne.Fragment,{children:[ne.jsx(k_,{}),ne.jsx("div",{className:"game",children:ne.jsx("div",{className:"game-board__container",children:i?ne.jsxs(ne.Fragment,{children:[ne.jsx("div",{className:"game-board",children:ne.jsx(qb,{xIsNext:p,squares:m,onPlay:x})}),ne.jsx("div",{className:"button-section",children:ne.jsx("button",{className:"btn button-section__new-game-btn audiowide-regular",onClick:v,children:"NEW GAME"})})]}):ne.jsxs(ne.Fragment,{children:[ne.jsxs("div",{className:"game-name audiowide-regular",children:[ne.jsx("p",{className:"game-name__word",children:"TIC"}),ne.jsx("p",{className:"game-name__word",children:"TAC"}),ne.jsx("p",{className:"game-name__word",children:"TOE"})]}),ne.jsx("button",{className:"btn audiowide-regular game-start-btn",onClick:g,children:"START GAME"})]})})})]}):ne.jsxs(ne.Fragment,{children:[ne.jsx(k_,{onReady:()=>e(!0)}),ne.jsx("div",{className:"loading-screen",children:ne.jsx("p",{children:"Loading..."})})]})}function X_(o){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let r=0;r<e.length;r++){const[l,c,h]=e[r];if(o[l]&&o[l]===o[c]&&o[l]===o[h])return{winner:o[l],draw:!1}}return o.every(r=>r!==null)?{winner:null,draw:!0}:null}const Zb=OS.createRoot(document.getElementById("root"));Zb.render(ne.jsx(ds.StrictMode,{children:ne.jsx(Yb,{})}));
