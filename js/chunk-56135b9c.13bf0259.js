(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56135b9c","chunk-2d225b8b"],{"4bdc":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$vuetify.breakpoint.xsOnly?"py-2":"px-2 py-4"},[e("div",[e("h3",{staticClass:"px-3",staticStyle:{"font-family":"Nunito"}},[t._v(t._s(t.titulo)+" "),t.verMas?e("span",{staticClass:"caption font-weight-bold primary--text",staticStyle:{cursor:"pointer"},on:{click:function(n){return t.verMas()}}},[t._v("Ver más")]):t._e()])]),e("section",{key:t.numChildren+t.optionsStr+t.$vuetify.breakpoint.xsOnly,ref:"splide",staticClass:"splide",attrs:{"aria-label":"Carrusel","data-splide":t.optionsStr}},[e("div",{staticClass:"splide__track"},[e("ul",{staticClass:"splide__list"},[t._t("default")],2)])])])},r=[];e("a9e3"),e("e9c4");function o(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}
/*!
 * Splide.js
 * Version  : 4.0.1
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var a="(prefers-reduced-motion: reduce)",s=1,c=2,l=3,f=4,d=5,p=6,v=7,h={CREATED:s,MOUNTED:c,IDLE:l,MOVING:f,SCROLLING:d,DRAGGING:p,DESTROYED:v};function g(t){t.length=0}function m(t,n,e){return Array.prototype.slice.call(t,n,e)}function y(t){return t.bind.apply(t,[null].concat(m(arguments,1)))}var b=setTimeout,w=function(){};function E(t){return requestAnimationFrame(t)}function _(t,n){return typeof n===t}function S(t){return!L(t)&&_("object",t)}var x=Array.isArray,C=y(_,"function"),k=y(_,"string"),P=y(_,"undefined");function L(t){return null===t}function A(t){return t instanceof HTMLElement}function M(t){return x(t)?t:[t]}function D(t,n){M(t).forEach(n)}function O(t,n){return t.indexOf(n)>-1}function N(t,n){return t.push.apply(t,M(n)),t}function z(t,n,e){t&&D(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function I(t,n){z(t,k(n)?n.split(" "):n,!0)}function R(t,n){D(n,t.appendChild.bind(t))}function T(t,n){D(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function F(t,n){return A(t)&&(t["msMatchesSelector"]||t.matches).call(t,n)}function j(t,n){var e=t?m(t.children):[];return n?e.filter((function(t){return F(t,n)})):e}function B(t,n){return n?j(t,n)[0]:t.firstElementChild}var U=Object.keys;function W(t,n,e){if(t){var i=U(t);i=e?i.reverse():i;for(var r=0;r<i.length;r++){var o=i[r];if("__proto__"!==o&&!1===n(t[o],o))break}}return t}function $(t){return m(arguments,1).forEach((function(n){W(n,(function(e,i){t[i]=n[i]}))})),t}function G(t){return m(arguments,1).forEach((function(n){W(n,(function(n,e){x(n)?t[e]=n.slice():S(n)?t[e]=G({},S(t[e])?t[e]:{},n):t[e]=n}))})),t}function X(t,n){M(n||U(t)).forEach((function(n){delete t[n]}))}function H(t,n){D(t,(function(t){D(n,(function(n){t&&t.removeAttribute(n)}))}))}function q(t,n,e){S(n)?W(n,(function(n,e){q(t,e,n)})):D(t,(function(t){L(e)||""===e?H(t,n):t.setAttribute(n,String(e))}))}function J(t,n,e){var i=document.createElement(t);return n&&(k(n)?I(i,n):q(i,n)),e&&R(e,i),i}function Y(t,n,e){if(P(e))return getComputedStyle(t)[n];L(e)||(t.style[n]=""+e)}function K(t,n){Y(t,"display",n)}function V(t){t["setActive"]&&t["setActive"]()||t.focus({preventScroll:!0})}function Q(t,n){return t.getAttribute(n)}function Z(t,n){return t&&t.classList.contains(n)}function tt(t){return t.getBoundingClientRect()}function nt(t){D(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function et(t){return B((new DOMParser).parseFromString(t,"text/html").body)}function it(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function rt(t,n){return t&&t.querySelector(n)}function ot(t,n){return n?m(t.querySelectorAll(n)):[]}function ut(t,n){z(t,n,!1)}function at(t){return t.timeStamp}function st(t){return k(t)?t:t?t+"px":""}var ct="splide",lt="data-"+ct;function ft(t,n){if(!t)throw new Error("["+ct+"] "+(n||""))}var dt=Math.min,pt=Math.max,vt=Math.floor,ht=Math.ceil,gt=Math.abs;function mt(t,n,e){return gt(t-n)<e}function yt(t,n,e,i){var r=dt(n,e),o=pt(n,e);return i?r<t&&t<o:r<=t&&t<=o}function bt(t,n,e){var i=dt(n,e),r=pt(n,e);return dt(pt(i,t),r)}function wt(t){return+(t>0)-+(t<0)}function Et(t,n){return D(n,(function(n){t=t.replace("%s",""+n)})),t}function _t(t){return t<10?"0"+t:""+t}var St={};function xt(t){return""+t+_t(St[t]=(St[t]||0)+1)}function Ct(){var t=[];function n(n,e,i,o){r(n,e,(function(n,e,r){var u="addEventListener"in n,a=u?n.removeEventListener.bind(n,e,i,o):n["removeListener"].bind(n,i);u?n.addEventListener(e,i,o):n["addListener"](i),t.push([n,e,r,i,a])}))}function e(n,e,i){r(n,e,(function(n,e,r){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==r||i&&t[3]!==i)||(t[4](),!1)}))}))}function i(t,n,e){var i,r=!0;return"function"===typeof CustomEvent?i=new CustomEvent(n,{bubbles:r,detail:e}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(n,r,!1,e)),t.dispatchEvent(i),i}function r(t,n,e){D(t,(function(t){t&&D(n,(function(n){n.split(" ").forEach((function(n){var i=n.split(".");e(t,i[0],i[1])}))}))}))}function o(){t.forEach((function(t){t[4]()})),g(t)}return{bind:n,unbind:e,dispatch:i,destroy:o}}var kt="mounted",Pt="ready",Lt="move",At="moved",Mt="shifted",Dt="click",Ot="active",Nt="inactive",zt="visible",It="hidden",Rt="slide:keydown",Tt="refresh",Ft="updated",jt="resize",Bt="resized",Ut="drag",Wt="dragging",$t="dragged",Gt="scroll",Xt="scrolled",Ht="destroy",qt="arrows:mounted",Jt="arrows:updated",Yt="pagination:mounted",Kt="pagination:updated",Vt="navigation:mounted",Qt="autoplay:play",Zt="autoplay:playing",tn="autoplay:pause",nn="lazyload:loaded";function en(t){var n=t?t.event.bus:document.createDocumentFragment(),e=Ct();function i(t,i){e.bind(n,M(t).join(" "),(function(t){i.apply(i,x(t.detail)?t.detail:[])}))}function r(t){e.dispatch(n,t,m(arguments,1))}return t&&t.event.on(Ht,e.destroy),$(e,{bus:n,on:i,off:y(e.unbind,n),emit:r})}function rn(t,n,e,i){var r,o,u=Date.now,a=0,s=!0,c=0;function l(){if(!s){if(a=t?dt((u()-r)/t,1):1,e&&e(a),a>=1&&(n(),r=u(),i&&++c>=i))return d();E(l)}}function f(n){!n&&v(),r=u()-(n?a*t:0),s=!1,E(l)}function d(){s=!0}function p(){r=u(),a=0,e&&e(a)}function v(){o&&cancelAnimationFrame(o),a=0,o=0,s=!0}function h(n){t=n}function g(){return s}return{start:f,rewind:p,pause:d,cancel:v,set:h,isPaused:g}}function on(t){var n=t;function e(t){n=t}function i(t){return O(M(t),n)}return{set:e,is:i}}function un(t,n){var e;function i(){e||(e=rn(n||0,(function(){t(),e=null}),null,1),e.start())}return i}function an(t,n,e){var i=t.state,r=e.breakpoints||{},o=e.reducedMotion||{},u=Ct(),c=[];function l(){var t="min"===e.mediaQuery;U(r).sort((function(n,e){return t?+n-+e:+e-+n})).forEach((function(n){d(r[n],"("+(t?"min":"max")+"-width:"+n+"px)")})),d(o,a),p()}function f(t){t&&u.destroy()}function d(t,n){var e=matchMedia(n);u.bind(e,"change",p),c.push([t,e])}function p(){var n=i.is(v),r=e.direction,o=c.reduce((function(t,n){return G(t,n[1].matches?n[0]:{})}),{});X(e),g(o),e.destroy?t.destroy("completely"===e.destroy):n?(f(!0),t.mount()):r!==e.direction&&t.refresh()}function h(t){matchMedia(a).matches&&(t?G(e,o):X(e,U(o)))}function g(n,r){G(e,n),r&&G(Object.getPrototypeOf(e),n),i.is(s)||t.emit(Ft,e)}return{setup:l,destroy:f,reduce:h,set:g}}var sn="Arrow",cn=sn+"Left",ln=sn+"Right",fn=sn+"Up",dn=sn+"Down",pn="rtl",vn="ttb",hn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[fn,ln],ArrowRight:[dn,cn]};function gn(t,n,e){function i(t,n,i){i=i||e.direction;var r=i!==pn||n?i===vn?0:-1:1;return hn[t]&&hn[t][r]||t.replace(/width|left|right/i,(function(t,n){var e=hn[t.toLowerCase()][r]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e}))}function r(t){return t*(e.direction===pn?1:-1)}return{resolve:i,orient:r}}var mn="role",yn="tabindex",bn="disabled",wn="aria-",En=wn+"controls",_n=wn+"current",Sn=wn+"selected",xn=wn+"label",Cn=wn+"labelledby",kn=wn+"hidden",Pn=wn+"orientation",Ln=wn+"roledescription",An=wn+"live",Mn=wn+"relevant",Dn=[mn,yn,bn,En,_n,xn,Cn,kn,Pn,Ln],On=ct,Nn=ct+"__track",zn=ct+"__list",In=ct+"__slide",Rn=In+"--clone",Tn=In+"__container",Fn=ct+"__arrows",jn=ct+"__arrow",Bn=jn+"--prev",Un=jn+"--next",Wn=ct+"__pagination",$n=Wn+"__page",Gn=ct+"__progress",Xn=Gn+"__bar",Hn=ct+"__toggle",qn=ct+"__spinner",Jn=ct+"__sr",Yn="is-initialized",Kn="is-active",Vn="is-prev",Qn="is-next",Zn="is-visible",te="is-loading",ne="is-focus-in",ee=[Kn,Zn,Vn,Qn,te,ne],ie={slide:In,clone:Rn,arrows:Fn,arrow:jn,prev:Bn,next:Un,pagination:Wn,page:$n,spinner:qn};function re(t,n){if(C(t.closest))return t.closest(n);var e=t;while(e&&1===e.nodeType){if(F(e,n))break;e=e.parentElement}return e}var oe=5,ue=200,ae="touchstart mousedown",se="touchmove mousemove",ce="touchend touchcancel mouseup";function le(t,n,e){var i,r,o,u=en(t),a=u.on,s=u.bind,c=t.root,l=e.i18n,f={},d=[],p=[],v=[];function h(){w(),E(),b()}function m(){a(Tt,y),a(Tt,h),a(Ft,b),s(document,ae+" keydown",(function(t){o="keydown"===t.type}),{capture:!0}),s(c,"focusin",(function(){z(c,ne,!!o)}))}function y(t){var n=Dn.concat("style");g(d),ut(c,p),ut(i,v),H([i,r],n),H(c,t?n:["style",Ln])}function b(){ut(c,p),ut(i,v),p=S(On),v=S(Nn),I(c,p),I(i,v),q(c,xn,e.label),q(c,Cn,e.labelledby)}function w(){i=_("."+Nn),r=B(i,"."+zn),ft(i&&r,"A track/list element is missing."),N(d,j(r,"."+In+":not(."+Rn+")")),W({arrows:Fn,pagination:Wn,prev:Bn,next:Un,bar:Xn,toggle:Hn},(function(t,n){f[n]=_("."+t)})),$(f,{root:c,track:i,list:r,slides:d})}function E(){var t=c.id||xt(ct),n=e.role;c.id=t,i.id=i.id||t+"-track",r.id=r.id||t+"-list",!Q(c,mn)&&"SECTION"!==c.tagName&&n&&q(c,mn,n),q(c,Ln,l.carousel),q(r,mn,"presentation")}function _(t){var n=rt(c,t);return n&&re(n,"."+On)===c?n:void 0}function S(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===On&&Kn]}return $(f,{setup:h,mount:m,destroy:y})}var fe="slide",de="loop",pe="fade";function ve(t,n,e,i){var r,o=en(t),u=o.on,a=o.emit,s=o.bind,c=t.Components,l=t.root,p=t.options,v=p.isNavigation,h=p.updateOnMove,g=p.i18n,m=p.pagination,b=p.slideFocus,w=c.Direction.resolve,E=Q(i,"style"),_=Q(i,xn),S=e>-1,x=B(i,"."+Tn),C=ot(i,p.focusableNodes||"");function k(){S||(i.id=l.id+"-slide"+_t(n+1),q(i,mn,m?"tabpanel":"group"),q(i,Ln,g.slide),q(i,xn,_||Et(g.slideLabel,[n+1,t.length]))),P()}function P(){s(i,"click",y(a,Dt,j)),s(i,"keydown",y(a,Rt,j)),u([At,Mt,Xt],D),u(Vt,A),h&&u(Lt,M)}function L(){r=!0,o.destroy(),ut(i,ee),H(i,Dn),q(i,"style",E),q(i,xn,_||"")}function A(){var r=t.splides.map((function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""})).join(" ");q(i,xn,Et(g.slideX,(S?e:n)+1)),q(i,En,r),q(i,mn,b?"button":""),b&&H(i,Ln)}function M(){r||D()}function D(){if(!r){var e=t.index;O(),N(),z(i,Vn,n===e-1),z(i,Qn,n===e+1)}}function O(){var t=R();t!==Z(i,Kn)&&(z(i,Kn,t),q(i,_n,v&&t||""),a(t?Ot:Nt,j))}function N(){var n=T(),e=!n&&(!R()||S);if(t.state.is([f,d])||q(i,kn,e||""),q(C,yn,e?-1:""),b&&q(i,yn,e?-1:0),n!==Z(i,Zn)&&(z(i,Zn,n),a(n?zt:It,j)),!n&&document.activeElement===i){var r=c.Slides.getAt(t.index);r&&V(r.slide)}}function I(t,n,e){Y(e&&x||i,t,n)}function R(){var i=t.index;return i===n||p.cloneStatus&&i===e}function T(){if(t.is(pe))return R();var n=tt(c.Elements.track),e=tt(i),r=w("left"),o=w("right");return vt(n[r])<=ht(e[r])&&vt(e[o])<=ht(n[o])}function F(e,i){var r=gt(e-n);return S||!p.rewind&&!t.is(de)||(r=dt(r,t.length-r)),r<=i}var j={index:n,slideIndex:e,slide:i,container:x,isClone:S,mount:k,destroy:L,update:D,style:I,isWithin:F};return j}function he(t,n,e){var i=en(t),r=i.on,o=i.emit,u=i.bind,a=n.Elements,s=a.slides,c=a.list,l=[];function f(){d(),r(Tt,p),r(Tt,d),r([kt,Tt],(function(){l.sort((function(t,n){return t.index-n.index}))}))}function d(){s.forEach((function(t,n){h(t,n,-1)}))}function p(){S((function(t){t.destroy()})),g(l)}function v(){S((function(t){t.update()}))}function h(n,e,i){var r=ve(t,e,i,n);r.mount(),l.push(r)}function m(t){return t?x((function(t){return!t.isClone})):l}function b(t){var i=n.Controller,r=i.toIndex(t),o=i.hasFocus()?1:e.perPage;return x((function(t){return yt(t.index,r,r+o-1)}))}function w(t){return x(t)[0]}function E(t,n){D(t,(function(t){if(k(t)&&(t=et(t)),A(t)){var i=s[n];i?T(t,i):R(c,t),I(t,e.classes.slide),L(t,y(o,jt))}})),o(Tt)}function _(t){nt(x(t).map((function(t){return t.slide}))),o(Tt)}function S(t,n){m(n).forEach(t)}function x(t){return l.filter(C(t)?t:function(n){return k(t)?F(n.slide,t):O(M(t),n.index)})}function P(t,n,e){S((function(i){i.style(t,n,e)}))}function L(t,n){var e=ot(t,"img"),i=e.length;i?e.forEach((function(t){u(t,"load error",(function(){--i||n()}))})):n()}function N(t){return t?s.length:l.length}function z(){return l.length>e.perPage}return{mount:f,destroy:p,update:v,register:h,get:m,getIn:b,getAt:w,add:E,remove:_,forEach:S,filter:x,style:P,getLength:N,isEnough:z}}function ge(t,n,e){var i,r,o=en(t),u=o.on,a=o.bind,s=o.emit,c=n.Slides,l=n.Direction.resolve,f=n.Elements,d=f.root,p=f.track,v=f.list,h=c.getAt,g=c.style;function m(){b(),a(window,"resize load",un(y(s,jt))),u([Ft,Tt],b),u(jt,w)}function b(){r=null,i=e.direction===vn,Y(d,"maxWidth",st(e.width)),Y(p,l("paddingLeft"),E(!1)),Y(p,l("paddingRight"),E(!0)),w()}function w(){var t=tt(d);r&&r.width===t.width&&r.height===t.height||(Y(p,"height",_()),g(l("marginRight"),st(e.gap)),g("width",C()),g("height",k(),!0),r=t,s(Bt))}function E(t){var n=e.padding,i=l(t?"right":"left");return n&&st(n[i]||(S(n)?0:n))||"0px"}function _(){var t="";return i&&(t=x(),ft(t,"height or heightRatio is missing."),t="calc("+t+" - "+E(!1)+" - "+E(!0)+")"),t}function x(){return st(e.height||tt(v).width*e.heightRatio)}function C(){return e.autoWidth?null:st(e.fixedWidth)||(i?"":P())}function k(){return st(e.fixedHeight)||(i?e.autoHeight?null:P():x())}function P(){var t=st(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function L(){return tt(v)[l("width")]}function A(t,n){var e=h(t||0);return e?tt(e.slide)[l("width")]+(n?0:O()):0}function M(t,n){var e=h(t);if(e){var i=tt(e.slide)[l("right")],r=tt(v)[l("left")];return gt(i-r)+(n?0:O())}return 0}function D(){return M(t.length-1,!0)-M(-1,!0)}function O(){var t=h(0);return t&&parseFloat(Y(t.slide,l("marginRight")))||0}function N(t){return parseFloat(Y(p,l("padding"+(t?"Right":"Left"))))||0}return{mount:m,listSize:L,slideSize:A,sliderSize:D,totalSize:M,getPadding:N}}var me=2;function ye(t,n,e){var i,r=en(t),o=r.on,u=r.emit,a=n.Elements,s=n.Slides,c=n.Direction.resolve,l=[];function f(){d(),o(Tt,p),o(Tt,d),o([Ft,jt],v)}function d(){(i=y())&&(h(i),u(jt))}function p(){nt(l),g(l)}function v(){i<y()&&u(Tt)}function h(t){var n=s.get().slice(),e=n.length;if(e){while(n.length<t)N(n,n);N(n.slice(-t),n.slice(0,t)).forEach((function(i,r){var o=r<t,u=m(i.slide,r);o?T(u,n[0].slide):R(a.list,u),N(l,u),s.register(u,r-t+(o?0:e),i.index)}))}}function m(n,i){var r=n.cloneNode(!0);return I(r,e.classes.clone),r.id=t.root.id+"-clone"+_t(i+1),r}function y(){var i=e.clones;if(t.is(de)){if(!i){var r=e[c("fixedWidth")]&&n.Layout.slideSize(0),o=r&&ht(tt(a.track)[c("width")]/r);i=o||e[c("autoWidth")]&&t.length||e.perPage*me}}else i=0;return i}return{mount:f,destroy:p}}function be(t,n,e){var i,r=en(t),o=r.on,u=r.emit,a=t.state.set,s=n.Layout,c=s.slideSize,d=s.getPadding,p=s.totalSize,v=s.listSize,h=s.sliderSize,g=n.Direction,m=g.resolve,y=g.orient,b=n.Elements,w=b.list,E=b.track;function _(){i=n.Transition,o([kt,Bt,Ft,Tt],S)}function S(){n.Controller.isBusy()||(n.Scroll.cancel(),C(t.index),n.Slides.update())}function x(t,n,e,r){var o=N();t!==n&&T(t>n)&&(M(),k(A(o,t>n),!0)),a(f),u(Lt,n,e,t),i.start(n,(function(){a(l),u(At,n,e,t),r&&r()}))}function C(t){k(O(t,!0))}function k(n,e){if(!t.is(pe)){var i=e?n:L(n);Y(w,"transform","translate"+m("X")+"("+i+"px)"),n!==i&&u(Mt)}}function L(n){if(t.is(de)){var e=y(n-N()),i=F(!1,n)&&e<0,r=F(!0,n)&&e>0;(i||r)&&(n=A(n,r))}return n}function A(t,n){var e=t-R(n),i=h();return t-=y(i*(ht(gt(e)/i)||1))*(n?1:-1),t}function M(){k(N()),i.cancel()}function D(t){for(var e=n.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var u=e[o].index,a=gt(O(u,!0)-t);if(!(a<=r))break;r=a,i=u}return i}function O(t,n){var e=y(p(t-1)-I(t));return n?z(e):e}function N(){var t=m("left");return tt(w)[t]-tt(E)[t]+y(d(!1))}function z(n){return e.trimSpace&&t.is(fe)&&(n=bt(n,0,y(h()-v()))),n}function I(t){var n=e.focus;return"center"===n?(v()-c(t,!0))/2:+n*c(t)||0}function R(t){return O(t?n.Controller.getEnd():0,!!e.trimSpace)}function T(t){var n=y(A(N(),t));return t?n>=0:n<=w["scroll"+m("Width")]-tt(E)[m("width")]}function F(t,n){n=P(n)?N():n;var e=!0!==t&&y(n)<y(R(!1)),i=!1!==t&&y(n)>y(R(!0));return e||i}return{mount:_,move:x,jump:C,translate:k,shift:A,cancel:M,toIndex:D,toPosition:O,getPosition:N,getLimit:R,exceededLimit:F,reposition:S}}function we(t,n,e){var i,r,o,u=en(t),a=u.on,s=n.Move,c=s.getPosition,l=s.getLimit,p=s.toPosition,v=n.Slides,h=v.isEnough,g=v.getLength,m=t.is(de),b=t.is(fe),w=y(D,!1),E=y(D,!0),_=e.start||0,S=_;function x(){C(),a([Ft,Tt],C)}function C(){i=g(!0),r=e.perMove,o=e.perPage;var t=bt(_,0,i-1);t!==_&&(_=t,s.reposition())}function L(t,n,e){if(!W()){var i=M(t),r=z(i);r>-1&&(n||r!==_)&&(j(r),s.move(i,r,S,e))}}function A(t,e,i,r){n.Scroll.scroll(t,e,i,(function(){j(z(s.toIndex(s.getPosition()))),r&&r()}))}function M(t){var n=_;if(k(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],i=e[1],r=e[2];"+"===i||"-"===i?n=O(_+ +(""+i+(+r||1)),_):">"===i?n=r?R(+r):w(!0):"<"===i&&(n=E(!0))}else n=m?t:bt(t,0,I());return n}function D(t,n){var e=r||(U()?1:o),i=O(_+e*(t?-1:1),_,!(r||U()));return-1===i&&b&&!mt(c(),l(!t),1)?t?0:I():n?i:z(i)}function O(t,n,r){if(h()){var u=I(),a=N(t);a!==t&&(n=t,t=a,r=!1),t<0||t>u?t=yt(0,t,n,!0)||yt(u,n,t,!0)?R(T(t)):m?r?t<0?-(i%o||o):i:t:e.rewind?t<0?u:0:-1:r&&t!==n&&(t=R(T(n)+(t<n?-1:1)))}else t=-1;return t}function N(n){if(b&&"move"===e.trimSpace&&n!==_){var i=c();while(i===p(n,!0)&&yt(n,0,t.length-1,!e.rewind))n<_?--n:++n}return n}function z(t){return m?(t+i)%i||0:t}function I(){return pt(i-(U()||m&&r?1:o),0)}function R(t){return bt(U()?t:o*t,0,I())}function T(t){return U()?t:vt((t>=I()?i-1:t)/o)}function F(t){var n=s.toIndex(t);return b?bt(n,0,I()):n}function j(t){t!==_&&(S=_,_=t)}function B(t){return t?S:_}function U(){return!P(e.focus)||e.isNavigation}function W(){return t.state.is([f,d])&&!!e.waitForTransition}return{mount:x,go:L,scroll:A,getNext:w,getPrev:E,getAdjacent:D,getEnd:I,setIndex:j,getIndex:B,toIndex:R,toPage:T,toDest:F,hasFocus:U,isBusy:W}}var Ee="http://www.w3.org/2000/svg",_e="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Se=40;function xe(t,n,e){var i,r,o=en(t),u=o.on,a=o.bind,s=o.emit,c=e.classes,l=e.i18n,f=n.Elements,d=n.Controller,p=f.arrows,v=f.track,h=p,g=f.prev,m=f.next,b={};function w(){_(),u(Ft,E)}function E(){S(),w()}function _(){var t=e.arrows;!t||g&&m||k(),g&&m&&($(b,{prev:g,next:m}),K(h,t?"":"none"),I(h,r=Fn+"--"+e.direction),t&&(x(),L(),q([g,m],En,v.id),s(qt,g,m)))}function S(){o.destroy(),ut(h,r),i?(nt(p?[g,m]:h),g=m=null):H([g,m],Dn)}function x(){u([At,Tt,Xt],L),a(m,"click",y(C,">")),a(g,"click",y(C,"<"))}function C(t){d.go(t,!0)}function k(){h=p||J("div",c.arrows),g=P(!0),m=P(!1),i=!0,R(h,[g,m]),!p&&T(h,v)}function P(t){var n='<button class="'+c.arrow+" "+(t?c.prev:c.next)+'" type="button"><svg xmlns="'+Ee+'" viewBox="0 0 '+Se+" "+Se+'" width="'+Se+'" height="'+Se+'" focusable="false"><path d="'+(e.arrowPath||_e)+'" />';return et(n)}function L(){var n=t.index,e=d.getPrev(),i=d.getNext(),r=e>-1&&n<e?l.last:l.prev,o=i>-1&&n>i?l.first:l.next;g.disabled=e<0,m.disabled=i<0,q(g,xn,r),q(m,xn,o),s(Jt,g,m,e,i)}return{arrows:b,mount:w,destroy:S}}var Ce=lt+"-interval";function ke(t,n,e){var i,r,o=en(t),u=o.on,a=o.bind,s=o.emit,c=rn(e.interval,t.go.bind(t,">"),S),l=c.isPaused,f=n.Elements,d=n.Elements,p=d.root,v=d.toggle,h=e.autoplay,g="pause"===h;function m(){h&&(y(),v&&q(v,En,f.track.id),g||b(),_())}function y(){e.pauseOnHover&&a(p,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,E()})),e.pauseOnFocus&&a(p,"focusin focusout",(function(t){r="focusin"===t.type,E()})),v&&a(v,"click",(function(){g?b():w(!0)})),u([Lt,Gt,Tt],c.rewind),u(Lt,x)}function b(){l()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=g=!1,_(),s(Qt))}function w(t){void 0===t&&(t=!0),g=!!t,_(),l()||(c.pause(),s(tn))}function E(){g||(i||r?w(!1):b())}function _(){v&&(z(v,Kn,!g),q(v,xn,e.i18n[g?"play":"pause"]))}function S(t){var n=f.bar;n&&Y(n,"width",100*t+"%"),s(Zt,t)}function x(t){var i=n.Slides.getAt(t);c.set(i&&+Q(i.slide,Ce)||e.interval)}return{mount:m,destroy:c.cancel,play:b,pause:w,isPaused:l}}function Pe(t,n,e){var i=en(t),r=i.on;function o(){e.cover&&(r(nn,y(a,!0)),r([kt,Ft,Tt],y(u,!0)))}function u(t){n.Slides.forEach((function(n){var e=B(n.container||n.slide,"img");e&&e.src&&a(t,e,n)}))}function a(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),K(n,t?"none":"")}return{mount:o,destroy:y(u,!1)}}var Le=10,Ae=600,Me=.6,De=1.5,Oe=800;function Ne(t,n,e){var i,r,o=en(t),u=o.on,a=o.emit,s=t.state.set,c=n.Move,f=c.getPosition,p=c.getLimit,v=c.exceededLimit,h=c.translate,g=1;function m(){u(Lt,_),u([Ft,Tt],S)}function b(t,e,o,u,l){var p=f();if(_(),o){var v=n.Layout.sliderSize(),h=wt(t)*v*vt(gt(t)/v)||0;t=c.toPosition(n.Controller.toDest(t%v))+h}var m=mt(p,t,1);g=1,e=m?0:e||pt(gt(t-p)/De,Oe),r=u,i=rn(e,w,y(E,p,t,l),1),s(d),a(Gt),i.start()}function w(){s(l),r&&r(),a(Xt)}function E(n,e,i,r){var o=f(),u=n+(e-n)*x(r),a=(u-o)*g;h(o+a),t.is(fe)&&!i&&v()&&(g*=Me,gt(a)<Le&&b(p(v(!0)),Ae,!1,void 0,!0))}function _(){i&&i.cancel()}function S(){i&&!i.isPaused()&&(_(),w())}function x(t){var n=e.easingFunc;return n?n(t):1-Math.pow(1-t,4)}return{mount:m,destroy:_,scroll:b,cancel:S}}var ze={passive:!1,capture:!0};function Ie(t,n,e){var i,r,o,u,a,s,c,v,h=en(t),g=h.on,m=h.emit,y=h.bind,b=h.unbind,E=t.state,_=n.Move,x=n.Scroll,C=n.Controller,k=n.Elements.track,P=n.Media.reduce,L=n.Direction,A=L.resolve,M=L.orient,D=_.getPosition,O=_.exceededLimit,N=!1;function z(){y(k,se,w,ze),y(k,ce,w,ze),y(k,ae,R,ze),y(k,"click",B,{capture:!0}),y(k,"dragstart",it),g([kt,Ft],I)}function I(){var t=e.drag;nt(!t),u="free"===t}function R(t){if(s=!1,!c){var n=Z(t);!Q(t.target)||!n&&t.button||(C.isBusy()?it(t,!0):(v=n?k:window,a=E.is([f,d]),o=null,y(v,se,T,ze),y(v,ce,j,ze),_.cancel(),x.cancel(),U(t)))}}function T(t){if(E.is(p)||(E.set(p),m(Ut)),t.cancelable)if(a){_.translate(i+V(q(t)));var n=J(t)>ue,e=N!==(N=O());(n||e)&&U(t),s=!0,m(Wt),it(t)}else G(t)&&(a=$(t),it(t))}function j(t){E.is(p)&&(E.set(l),m($t)),a&&(W(t),it(t)),b(v,se,T),b(v,ce,j),a=!1}function B(t){!c&&s&&it(t,!0)}function U(t){o=r,r=t,i=D()}function W(n){var i=X(n),r=H(i),o=e.rewind&&e.rewindByDrag;P(!1),u?C.scroll(r,0,e.snap):t.is(pe)?C.go(M(wt(i))<0?o?"<":"-":o?">":"+"):t.is(fe)&&N&&o?C.go(O(!0)?">":"<"):C.go(C.toDest(r),!0),P(!0)}function $(t){var n=e.dragMinThreshold,i=S(n),r=i&&n.mouse||0,o=(i?n.touch:+n)||10;return gt(q(t))>(Z(t)?o:r)}function G(t){return gt(q(t))>gt(q(t,!0))}function X(n){if(t.is(de)||!N){var e=J(n);if(e&&e<ue)return q(n)/e}return 0}function H(t){return D()+wt(t)*dt(gt(t)*(e.flickPower||600),u?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}function q(t,n){return K(t,n)-K(Y(t),n)}function J(t){return at(t)-at(Y(t))}function Y(t){return r===t&&o||r}function K(t,n){return(Z(t)?t.changedTouches[0]:t)["page"+A(n?"Y":"X")]}function V(n){return n/(N&&t.is(fe)?oe:1)}function Q(t){var n=e.noDrag;return!F(t,"."+$n+", ."+jn)&&(!n||!F(t,n))}function Z(t){return"undefined"!==typeof TouchEvent&&t instanceof TouchEvent}function tt(){return a}function nt(t){c=t}return{mount:z,disable:nt,isDragging:tt}}var Re={Spacebar:" ",Right:ln,Left:cn,Up:fn,Down:dn};function Te(t){return t=k(t)?t:t.key,Re[t]||t}var Fe="keydown";function je(t,n,e){var i,r,o=en(t),u=o.on,a=o.bind,s=o.unbind,c=t.root,l=n.Direction.resolve;function f(){d(),u(Ft,p),u(Ft,d),u(Lt,h)}function d(){var t=e.keyboard;t&&(i="global"===t?window:c,a(i,Fe,g))}function p(){s(i,Fe)}function v(t){r=t}function h(){var t=r;r=!0,b((function(){r=t}))}function g(n){if(!r){var e=Te(n);e===l(cn)?t.go("<"):e===l(ln)&&t.go(">")}}return{mount:f,destroy:p,disable:v}}var Be=lt+"-lazy",Ue=Be+"-srcset",We="["+Be+"], ["+Ue+"]";function $e(t,n,e){var i=en(t),r=i.on,o=i.off,u=i.bind,a=i.emit,s="sequential"===e.lazyLoad,c=[kt,Tt,At,Xt],l=[];function f(){e.lazyLoad&&(d(),r(Tt,d),s||r(c,p))}function d(){g(l),n.Slides.forEach((function(t){ot(t.slide,We).forEach((function(n){var i=Q(n,Be),r=Q(n,Ue);if(i!==n.src||r!==n.srcset){var o=e.classes.spinner,u=n.parentElement,a=B(u,"."+o)||J("span",o,u);l.push([n,t,a]),n.src||K(n,"none")}}))})),s&&m()}function p(){l=l.filter((function(n){var i=e.perPage*((e.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,i)||v(n)})),l.length||o(c)}function v(t){var n=t[0];I(t[1].slide,te),u(n,"load error",y(h,t)),q(n,"src",Q(n,Be)),q(n,"srcset",Q(n,Ue)),H(n,Be),H(n,Ue)}function h(t,n){var e=t[0],i=t[1];ut(i.slide,te),"error"!==n.type&&(nt(t[2]),K(e,""),a(nn,e,i),a(jt)),s&&m()}function m(){l.length&&v(l.shift())}return{mount:f,destroy:y(g,l)}}function Ge(t,n,e){var i,r,o=en(t),u=o.on,a=o.emit,s=o.bind,c=n.Slides,l=n.Elements,f=n.Controller,d=f.hasFocus,p=f.getIndex,v=f.go,h=n.Direction.resolve,b=[];function w(){E(),u([Ft,Tt],w),e.pagination&&c.isEnough()&&(u([Lt,Gt,Xt],P),_(),P(),a(Yt,{list:i,items:b},k(t.index)))}function E(){i&&(nt(l.pagination?m(i.children):i),ut(i,r),g(b),i=null),o.destroy()}function _(){var n=t.length,o=e.classes,u=e.i18n,a=e.perPage,f=d()?n:ht(n/a);i=l.pagination||J("ul",o.pagination,l.track.parentElement),I(i,r=Wn+"--"+C()),q(i,mn,"tablist"),q(i,xn,u.select),q(i,Pn,C()===vn?"vertical":"");for(var p=0;p<f;p++){var v=J("li",null,i),h=J("button",{class:o.page,type:"button"},v),g=c.getIn(p).map((function(t){return t.slide.id})),m=!d()&&a>1?u.pageX:u.slideX;s(h,"click",y(S,p)),e.paginationKeyboard&&s(h,"keydown",y(x,p)),q(v,mn,"presentation"),q(h,mn,"tab"),q(h,En,g.join(" ")),q(h,xn,Et(m,p+1)),q(h,yn,-1),b.push({li:v,button:h,page:p})}}function S(t){v(">"+t,!0)}function x(t,n){var e=b.length,i=Te(n),r=C(),o=-1;i===h(ln,!1,r)?o=++t%e:i===h(cn,!1,r)?o=(--t+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var u=b[o];u&&(V(u.button),v(">"+o),it(n,!0))}function C(){return e.paginationDirection||e.direction}function k(t){return b[f.toPage(t)]}function P(){var t=k(p(!0)),n=k(p());if(t){var e=t.button;ut(e,Kn),H(e,Sn),q(e,yn,-1)}if(n){var r=n.button;I(r,Kn),q(r,Sn,!0),q(r,yn,"")}a(Kt,{list:i,items:b},t,n)}return{items:b,mount:w,destroy:E,getAt:k,update:P}}var Xe=[" ","Enter"];function He(t,n,e){var i=e.isNavigation,r=e.slideFocus,o=[];function u(){t.options={slideFocus:P(r)?i:r}}function a(){t.splides.forEach((function(n){n.isParent||(l(t,n.splide),l(n.splide,t))})),i&&f()}function s(){o.forEach((function(t){t.destroy()})),g(o)}function c(){s(),a()}function l(t,n){var e=en(t);e.on(Lt,(function(t,e,i){n.go(n.is(de)?i:t)})),o.push(e)}function f(){var n=en(t),e=n.on;e(Dt,p),e(Rt,v),e([kt,Ft],d),o.push(n),n.emit(Vt,t.splides)}function d(){q(n.Elements.list,Pn,e.direction===vn?"vertical":"")}function p(n){t.go(n.index)}function v(t,n){O(Xe,Te(n))&&(p(t),it(n))}return{setup:u,mount:a,destroy:s,remount:c}}function qe(t,n,e){var i=en(t),r=i.bind,o=0;function u(){e.wheel&&r(n.Elements.track,"wheel",a,ze)}function a(n){if(n.cancelable){var i=n.deltaY,r=i<0,u=at(n),a=e.wheelMinThreshold||0,c=e.wheelSleep||0;gt(i)>a&&u-o>c&&(t.go(r?"<":">"),o=u),s(r)&&it(n)}}function s(i){return!e.releaseWheel||t.state.is(f)||-1!==n.Controller.getAdjacent(i)}return{mount:u}}function Je(t,n,e){var i=en(t),r=i.on,o=n.Elements.track,u=e.live,a=u&&!e.isNavigation,s=J("span",Jn);function c(){a&&(f(!n.Autoplay.isPaused()),q(o,Mn,"additions"),s.textContent="…",r(Qt,y(f,!0)),r(tn,y(f,!1)),r([At,Xt],y(R,o,s)))}function l(){H(o,[An,Mn]),nt(s)}function f(t){a&&q(o,An,t?"off":"polite")}return{mount:c,disable:f,destroy:l}}var Ye=Object.freeze({__proto__:null,Media:an,Direction:gn,Elements:le,Slides:he,Layout:ge,Clones:ye,Move:be,Controller:we,Arrows:xe,Autoplay:ke,Cover:Pe,Scroll:Ne,Drag:Ie,Keyboard:je,LazyLoad:$e,Pagination:Ge,Sync:He,Wheel:qe,Live:Je}),Ke={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},Ve={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:ie,i18n:Ke,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Qe(t,n,e){var i=en(t),r=i.on;function o(){r([kt,Tt],(function(){b((function(){n.Slides.style("transition","opacity "+e.speed+"ms "+e.easing)}))}))}function u(t,e){var i=n.Elements.track;Y(i,"height",st(tt(i).height)),b((function(){e(),Y(i,"height","")}))}return{mount:o,start:u,cancel:w}}function Ze(t,n,e){var i,r=en(t),o=r.bind,u=n.Move,a=n.Controller,s=n.Scroll,c=n.Elements.list,l=y(Y,c,"transition");function f(){o(c,"transitionend",(function(t){t.target===c&&i&&(p(),i())}))}function d(t,n){var r=u.toPosition(t,!0),o=u.getPosition(),a=v(t);gt(r-o)>=1&&a>=1?e.useScroll?s.scroll(r,a,!1,n):(l("transform "+a+"ms "+e.easing),u.translate(r,!0),i=n):(u.jump(t),n())}function p(){l(""),s.cancel()}function v(n){var i=e.rewindSpeed;if(t.is(fe)&&i){var r=a.getIndex(!0),o=a.getEnd();if(0===r&&n>=o||r>=o&&0===n)return i}return e.speed}return{mount:f,start:d,cancel:p}}var ti=function(){function t(n,e){this.event=en(),this.Components={},this.state=on(s),this.splides=[],this._o={},this._E={};var i=k(n)?rt(document,n):n;ft(i,i+" is invalid."),this.root=i,e=G({label:Q(i,xn)||"",labelledby:Q(i,Cn)||""},Ve,t.defaults,e||{});try{G(e,JSON.parse(Q(i,lt)))}catch(r){ft(!1,"Invalid JSON")}this._o=Object.create(G({},e))}var n=t.prototype;return n.mount=function(t,n){var e=this,i=this.state,r=this.Components;ft(i.is([s,v]),"Already mounted!"),i.set(s),this._C=r,this._T=n||this._T||(this.is(pe)?Qe:Ze),this._E=t||this._E;var o=$({},Ye,this._E,{Transition:this._T});return W(o,(function(t,n){var i=t(e,r,e._o);r[n]=i,i.setup&&i.setup()})),W(r,(function(t){t.mount&&t.mount()})),this.emit(kt),I(this.root,Yn),i.set(l),this.emit(Pt),this},n.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(l)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},n.go=function(t){return this._C.Controller.go(t),this},n.on=function(t,n){return this.event.on(t,n),this},n.off=function(t){return this.event.off(t),this},n.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(m(arguments,1))),this},n.add=function(t,n){return this._C.Slides.add(t,n),this},n.remove=function(t){return this._C.Slides.remove(t),this},n.is=function(t){return this._o.type===t},n.refresh=function(){return this.emit(Tt),this},n.destroy=function(t){void 0===t&&(t=!0);var n=this.event,e=this.state;return e.is(s)?en(this).on(Pt,this.destroy.bind(this,t)):(W(this._C,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit(Ht),n.destroy(),t&&g(this.splides),e.set(v)),this},u(t,[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),t}(),ni=ti;ni.defaults={},ni.STATES=h;e("c89d");var ei={name:"Carrusel",props:{elementos:{type:Number,default:0},titulo:{type:String,required:!1},verMas:{type:Function},perPageEscritorio:{type:[Number,String],default:2},autoplay:{type:Boolean}},data:function(){return{splide:null}},mounted:function(){this.splide=new ni(this.$refs.splide).mount()},computed:{optionsStr:function(){var t=ri(this)>1,n={type:"loop",height:"100%",autoplay:this.autoplay,perPage:!this.$vuetify.breakpoint.xsOnly&&t?this.perPageEscritorio:1,arrows:t,pagination:t,gap:8,classes:{pagination:"splide__pagination ma-0 pa-0"}};return JSON.stringify(n)},numChildren:function(){return ri(this)}},watch:{optionsStr:function(){ii(this)},numChildren:function(){ii(this)},"$vuetify.breakpoint.xsOnly":function(){ii(this)}},beforeDestroy:function(){this.splide.destroy()}};function ii(t){t.$refs.splide&&t.$nextTick((function(){t.splide.destroy(),t.splide=new ni(t.$refs.splide).mount()}))}function ri(t){return t.splide?t.splide.Components.Slides.getLength(!0):0}var oi=ei,ui=e("2877"),ai=Object(ui["a"])(oi,i,r,!1,null,"3bce612c",null);n["a"]=ai.exports},c89d:function(t,n,e){},cc46:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"splide__slide"},[e("div",{staticClass:"splide__slide__container"},[t._t("default")],2)])},r=[],o=(e("c89d"),{name:"CarruselItem"}),u=o,a=e("2877"),s=Object(a["a"])(u,i,r,!1,null,"5c3b83d8",null);n["a"]=s.exports},e637:function(t,n,e){"use strict";var i=e("20aa"),r=e("0dcc"),o=function(t){var n=i["a"].BASE_URL+"/cafeterias/id-cliente/"+t;return r["a"].get(n)},u=function(t){var n=i["a"].BASE_URL+"/cafeterias/id-encargado/"+t;return r["a"].get(n)},a=function(t,n){var e=i["a"].BASE_URL+"/cafeterias/"+t+"/saldo-alumno/"+n;return r["a"].get(e)},s=function(t,n){var e=i["a"].BASE_URL+"/cafeterias/id-cliente/"+t+"/saldo-alumno/"+n;return r["a"].get(e)},c=function(t){var n=i["a"].BASE_URL+"/cafeterias";return r["a"].post(n,t)},l=function(t){var n=i["a"].BASE_URL+"/cafeterias";return r["a"].put(n,t)},f=function(t){var n=i["a"].BASE_URL+"/cafeterias/"+t;return r["a"].remove(n)};n["a"]={getCafeterias:o,getByEncargado:u,getConSaldoAlumno:a,getSaldoPorCafeteria:s,createCafeteria:c,updateCafeteria:l,deleteCafeteria:f}}}]);
//# sourceMappingURL=chunk-56135b9c.13bf0259.js.map