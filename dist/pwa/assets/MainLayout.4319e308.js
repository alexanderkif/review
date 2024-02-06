import{c as X,h as pt,u as gt,a as Ye,b as Ve,d as bt,Q as yt,v as wt,e as Me,g as qt,f as kt,i as Ct,j as Be,k as xt}from"./QBtn.4c0288b2.js";import{r as V,i as Ue,o as K,a as N,n as $e,b as G,h as k,g as R,l as P,c as Ee,e as D,d as ce,f as v,w as C,t as Y,s as se,H as Pe,j as B,k as St,m as Tt,p as Lt,q as ne,u as ge,v as He,x as be,y as Te,z as ye,A as Vt,B as Ke,C as $t,D as le,E as Et,_ as zt,F as _t,G as Ot,I as Mt,J as Bt,K as ie,L as U,M as Pt,N as Ht,O as Dt}from"./index.48c73816.js";import{u as Ge,a as Je,g as De,s as Re,c as Rt,b as Ft}from"./use-quasar.59c8eead.js";function Wt(){const e=V(!Ue.value);return e.value===!1&&K(()=>{e.value=!0}),e}const Ze=typeof ResizeObserver!="undefined",Fe=Ze===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Le=X({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let o=null,i,t={width:-1,height:-1};function l(d){d===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),i){const{offsetWidth:d,offsetHeight:c}=i;(d!==t.width||c!==t.height)&&(t={width:d,height:c},n("resize",t))}}const{proxy:f}=R();if(f.trigger=l,Ze===!0){let d;const c=a=>{i=f.$el.parentNode,i?(d=new ResizeObserver(l),d.observe(i),u()):a!==!0&&G(()=>{c(!0)})};return K(()=>{c()}),N(()=>{o!==null&&clearTimeout(o),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),$e}else{let a=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",l,P.passive),c=void 0)},q=function(){a(),i&&i.contentDocument&&(c=i.contentDocument.defaultView,c.addEventListener("resize",l,P.passive),u())};const d=Wt();let c;return K(()=>{G(()=>{i=f.$el,i&&q()})}),N(a),()=>{if(d.value===!0)return k("object",{style:Fe.style,tabindex:-1,type:"text/html",data:Fe.url,"aria-hidden":"true",onLoad:q})}}}}),At=X({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=R(),t=Ee(ce,D);if(t===D)return console.error("QHeader needs to be child of QLayout"),D;const l=V(parseInt(e.heightHint,10)),u=V(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?l.value:0;const s=l.value-t.scroll.value.position;return s>0?s:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),a=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),q=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),g=v(()=>{const s=t.rows.value.top,x={};return s[0]==="l"&&t.left.space===!0&&(x[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(x[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),x});function h(s,x){t.update("header",s,x)}function m(s,x){s.value!==x&&(s.value=x)}function L({height:s}){m(l,s),h("size",s)}function S(s){a.value===!0&&m(u,!0),o("focusin",s)}C(()=>e.modelValue,s=>{h("space",s),m(u,!0),t.animate()}),C(d,s=>{h("offset",s)}),C(()=>e.reveal,s=>{s===!1&&m(u,e.modelValue)}),C(u,s=>{t.animate(),o("reveal",s)}),C(t.scroll,s=>{e.reveal===!0&&m(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&h("size",l.value),h("space",e.modelValue),h("offset",d.value),N(()=>{t.instances.header===y&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const s=pt(n.default,[]);return e.elevated===!0&&s.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(k(Le,{debounce:0,onResize:L})),k("header",{class:q.value,style:g.value,onFocusin:S},s)}}});function It(e,n){const o=V(null),i=v(()=>e.disable===!0?null:k("span",{ref:o,class:"no-outline",tabindex:-1}));function t(l){const u=n.value;l!==void 0&&l.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():o.value!==null&&(l===void 0||u!==null&&u.contains(l.target)===!0)&&o.value.focus()}return{refocusTargetEl:i,refocusTarget:t}}const Qt={name:String};function Nt(e={}){return(n,o,i)=>{n[o](k("input",{class:"hidden"+(i||""),...e.value}))}}var Xt={xs:30,sm:35,md:40,lg:50,xl:60};const jt={...Je,...bt,...Qt,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Yt=["update:modelValue"];function Ut(e,n){const{props:o,slots:i,emit:t,proxy:l}=R(),{$q:u}=l,f=Ge(o,u),d=V(null),{refocusTargetEl:c,refocusTarget:a}=It(o,d),q=gt(o,Xt),g=v(()=>o.val!==void 0&&Array.isArray(o.modelValue)),h=v(()=>{const w=Y(o.val);return g.value===!0?o.modelValue.findIndex(E=>Y(E)===w):-1}),m=v(()=>g.value===!0?h.value>-1:Y(o.modelValue)===Y(o.trueValue)),L=v(()=>g.value===!0?h.value===-1:Y(o.modelValue)===Y(o.falseValue)),S=v(()=>m.value===!1&&L.value===!1),y=v(()=>o.disable===!0?-1:o.tabindex||0),s=v(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(o.disable===!0?" disabled":"")+(f.value===!0?` q-${e}--dark`:"")+(o.dense===!0?` q-${e}--dense`:"")+(o.leftLabel===!0?" reverse":"")),x=v(()=>{const w=m.value===!0?"truthy":L.value===!0?"falsy":"indet",E=o.color!==void 0&&(o.keepColor===!0||(e==="toggle"?m.value===!0:L.value!==!0))?` text-${o.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${w}${E}`}),p=v(()=>{const w={type:"checkbox"};return o.name!==void 0&&Object.assign(w,{".checked":m.value,"^checked":m.value===!0?"checked":void 0,name:o.name,value:g.value===!0?o.val:o.trueValue}),w}),T=Nt(p),$=v(()=>{const w={tabindex:y.value,role:e==="toggle"?"switch":"checkbox","aria-label":o.label,"aria-checked":S.value===!0?"mixed":m.value===!0?"true":"false"};return o.disable===!0&&(w["aria-disabled"]="true"),w});function O(w){w!==void 0&&(se(w),a(w)),o.disable!==!0&&t("update:modelValue",I(),w)}function I(){if(g.value===!0){if(m.value===!0){const w=o.modelValue.slice();return w.splice(h.value,1),w}return o.modelValue.concat([o.val])}if(m.value===!0){if(o.toggleOrder!=="ft"||o.toggleIndeterminate===!1)return o.falseValue}else if(L.value===!0){if(o.toggleOrder==="ft"||o.toggleIndeterminate===!1)return o.trueValue}else return o.toggleOrder!=="ft"?o.trueValue:o.falseValue;return o.indeterminateValue}function H(w){(w.keyCode===13||w.keyCode===32)&&se(w)}function M(w){(w.keyCode===13||w.keyCode===32)&&O(w)}const F=n(m,S);return Object.assign(l,{toggle:O}),()=>{const w=F();o.disable!==!0&&T(w,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const E=[k("div",{class:x.value,style:q.value,"aria-hidden":"true"},w)];c.value!==null&&E.push(c.value);const j=o.label!==void 0?Ye(i.default,[o.label]):Ve(i.default);return j!==void 0&&E.push(k("div",{class:`q-${e}__label q-anchor--skip`},j)),k("div",{ref:d,class:s.value,...$.value,onClick:O,onKeydown:H,onKeyup:M},E)}}const Kt=k("div",{key:"svg",class:"q-checkbox__bg absolute"},[k("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[k("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),k("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var Gt=X({name:"QCheckbox",props:jt,emits:Yt,setup(e){function n(o,i){const t=v(()=>(o.value===!0?e.checkedIcon:i.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>t.value!==null?[k("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[k(yt,{class:"q-checkbox__icon",name:t.value})])]:[Kt]}return Ut("checkbox",n)}});function Jt(e,n,o){let i;function t(){i!==void 0&&(Pe.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>o.value===!0,handler:n},Pe.add(i)}}}const Zt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},eo=["beforeShow","show","beforeHide","hide"];function to({showing:e,canShow:n,hideOnRouteChange:o,handleShow:i,handleHide:t,processOnMount:l}){const u=R(),{props:f,emit:d,proxy:c}=u;let a;function q(s){e.value===!0?m(s):g(s)}function g(s){if(f.disable===!0||s!==void 0&&s.qAnchorHandled===!0||n!==void 0&&n(s)!==!0)return;const x=f["onUpdate:modelValue"]!==void 0;x===!0&&(d("update:modelValue",!0),a=s,G(()=>{a===s&&(a=void 0)})),(f.modelValue===null||x===!1)&&h(s)}function h(s){e.value!==!0&&(e.value=!0,d("beforeShow",s),i!==void 0?i(s):d("show",s))}function m(s){if(f.disable===!0)return;const x=f["onUpdate:modelValue"]!==void 0;x===!0&&(d("update:modelValue",!1),a=s,G(()=>{a===s&&(a=void 0)})),(f.modelValue===null||x===!1)&&L(s)}function L(s){e.value!==!1&&(e.value=!1,d("beforeHide",s),t!==void 0?t(s):d("hide",s))}function S(s){f.disable===!0&&s===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):s===!0!==e.value&&(s===!0?h:L)(a)}C(()=>f.modelValue,S),o!==void 0&&wt(u)===!0&&C(()=>c.$route.fullPath,()=>{o.value===!0&&e.value===!0&&m()}),l===!0&&K(()=>{S(f.modelValue)});const y={show:g,hide:m,toggle:q};return Object.assign(c,y),y}const oo=[null,document,document.body,document.scrollingElement,document.documentElement];function no(e,n){let o=qt(n);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return oo.includes(o)?window:o}function et(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function tt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let re;function we(){if(re!==void 0)return re;const e=document.createElement("p"),n=document.createElement("div");Me(e,{width:"100%",height:"200px"}),Me(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const o=e.offsetWidth;n.style.overflow="scroll";let i=e.offsetWidth;return o===i&&(i=n.clientWidth),n.remove(),re=o-i,re}function lo(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let Z=0,qe,ke,ee,Ce=!1,We,Ae,Ie,Q=null;function io(e){ro(e)&&se(e)}function ro(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=St(e),o=e.shiftKey&&!e.deltaX,i=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=o||i?e.deltaY:e.deltaX;for(let l=0;l<n.length;l++){const u=n[l];if(lo(u,i))return i?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function Qe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:n}=e.target,{clientHeight:o,scrollTop:i}=document.scrollingElement;(ee===void 0||n!==window.innerHeight)&&(ee=o-n,document.scrollingElement.scrollTop=i),i>ee&&(document.scrollingElement.scrollTop-=Math.ceil((i-ee)/8))}))}function Ne(e){const n=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(n);qe=tt(window),ke=et(window),We=n.style.left,Ae=n.style.top,Ie=window.location.href,n.style.left=`-${qe}px`,n.style.top=`-${ke}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,B.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,P.passiveCapture),window.visualViewport.addEventListener("scroll",ae,P.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Qe,P.passiveCapture))}B.is.desktop===!0&&B.is.mac===!0&&window[`${e}EventListener`]("wheel",io,P.notPassive),e==="remove"&&(B.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",ae,P.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,P.passiveCapture)):window.removeEventListener("scroll",Qe,P.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=We,n.style.top=Ae,window.location.href===Ie&&window.scrollTo(qe,ke),ee=void 0)}function ao(e){let n="add";if(e===!0){if(Z++,Q!==null){clearTimeout(Q),Q=null;return}if(Z>1)return}else{if(Z===0||(Z--,Z>0))return;if(n="remove",B.is.ios===!0&&B.is.nativeMobile===!0){Q!==null&&clearTimeout(Q),Q=setTimeout(()=>{Ne(n),Q=null},100);return}}Ne(n)}function uo(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,ao(n))}}}function so(){let e=null;const n=R();function o(){e!==null&&(clearTimeout(e),e=null)}return Tt(o),N(o),{removeTimeout:o,registerTimeout(i,t){o(),kt(n)===!1&&(e=setTimeout(i,t))}}}function xe(e,n,o){const i=Te(e);let t,l=i.left-n.event.x,u=i.top-n.event.y,f=Math.abs(l),d=Math.abs(u);const c=n.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=u<0?"up":"down":c.up===!0&&u<0?(t="up",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&u>0?(t="down",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",f<d&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down"))):c.right===!0&&l>0&&(t="right",f<d&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down")));let a=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=l,f=0,l=0):(i.top-=u,d=0,u=0)}return{synthetic:a,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:i,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:f,y:d},offset:{x:l,y:u},delta:{x:i.left-n.event.lastX,y:i.top-n.event.lastY}}}}let co=0;var Se=Ct({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&B.has.touch!==!0)return;function i(l,u){o.mouse===!0&&u===!0?se(l):(o.stop===!0&&be(l),o.prevent===!0&&He(l))}const t={uid:"qvtp_"+co++,handler:n,modifiers:o,direction:De(o),noop:$e,mouseStart(l){Re(l,t)&&Lt(l)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Re(l,t)){const u=l.target;ne(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,u){if(B.is.firefox===!0&&ge(e,!0),t.lastEvt=l,u===!0||o.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&He(c),l.cancelBubble===!0&&be(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}be(l)}const{left:f,top:d}=Te(l);t.event={x:f,y:d,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(l){if(t.event===void 0)return;const u=Te(l),f=u.left-t.event.x,d=u.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=l;const c=t.event.mouse===!0,a=()=>{i(l,c);let h;o.preserveCursor!==!0&&o.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Rt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),c===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{L(),m()},50):L()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:h,synthetic:m}=xe(l,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=m===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(l);return}const q=Math.abs(f),g=Math.abs(d);q!==g&&(t.direction.horizontal===!0&&q>g||t.direction.vertical===!0&&q<g||t.direction.up===!0&&q<g&&d<0||t.direction.down===!0&&q<g&&d>0||t.direction.left===!0&&q>g&&f<0||t.direction.right===!0&&q>g&&f>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,u){if(t.event!==void 0){if(ye(t,"temp"),B.is.firefox===!0&&ge(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(xe(l===void 0?t.lastEvt:l,t).payload);const{payload:f}=xe(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const l=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";ne(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}B.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=De(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ye(n,"main"),ye(n,"temp"),B.is.firefox===!0&&ge(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function ue(e,n,o){return o<=n?n:Math.min(o,Math.max(n,e))}const Xe=150;var fo=X({name:"QDrawer",inheritAttrs:!1,props:{...Zt,...Je,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...eo,"onLayout","miniState"],setup(e,{slots:n,emit:o,attrs:i}){const t=R(),{proxy:{$q:l}}=t,u=Ge(e,l),{preventBodyScroll:f}=uo(),{registerTimeout:d,removeTimeout:c}=so(),a=Ee(ce,D);if(a===D)return console.error("QDrawer needs to be child of QLayout"),D;let q,g=null,h;const m=V(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),L=v(()=>e.mini===!0&&m.value!==!0),S=v(()=>L.value===!0?e.miniWidth:e.width),y=V(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),s=v(()=>e.persistent!==!0&&(m.value===!0||ot.value===!0));function x(r,b){if(O(),r!==!1&&a.animate(),_(0),m.value===!0){const z=a.instances[te.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),W(1),a.isContainer.value!==!0&&f(!0)}else W(0),r!==!1&&me(!1);d(()=>{r!==!1&&me(!0),b!==!0&&o("show",r)},Xe)}function p(r,b){I(),r!==!1&&a.animate(),W(0),_(F.value*S.value),he(),b!==!0?d(()=>{o("hide",r)},Xe):c()}const{show:T,hide:$}=to({showing:y,hideOnRouteChange:s,handleShow:x,handleHide:p}),{addToHistory:O,removeFromHistory:I}=Jt(y,$,s),H={belowBreakpoint:m,hide:$},M=v(()=>e.side==="right"),F=v(()=>(l.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),w=V(0),E=V(!1),j=V(!1),ze=V(S.value*F.value),te=v(()=>M.value===!0?"left":"right"),de=v(()=>y.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),fe=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(M.value?"R":"L")>-1||l.platform.is.ios===!0&&a.isContainer.value===!0),J=v(()=>e.overlay===!1&&y.value===!0&&m.value===!1),ot=v(()=>e.overlay===!0&&y.value===!0&&m.value===!1),nt=v(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&E.value===!1?" hidden":"")),lt=v(()=>({backgroundColor:`rgba(0,0,0,${w.value*.4})`})),_e=v(()=>M.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),it=v(()=>M.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),rt=v(()=>{const r={};return a.header.space===!0&&_e.value===!1&&(fe.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&it.value===!1&&(fe.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),at=v(()=>{const r={width:`${S.value}px`,transform:`translateX(${ze.value}px)`};return m.value===!0?r:Object.assign(r,rt.value)}),ut=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),st=v(()=>`q-drawer q-drawer--${e.side}`+(j.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(E.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(fe.value===!0||J.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(_e.value===!0?" q-drawer--top-padding":""))),ct=v(()=>{const r=l.lang.rtl===!0?e.side:te.value;return[[Se,mt,void 0,{[r]:!0,mouse:!0}]]}),dt=v(()=>{const r=l.lang.rtl===!0?te.value:e.side;return[[Se,Oe,void 0,{[r]:!0,mouse:!0}]]}),ft=v(()=>{const r=l.lang.rtl===!0?te.value:e.side;return[[Se,Oe,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){ht(m,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}C(m,r=>{r===!0?(q=y.value,y.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(y.value===!0?(_(0),W(0),he()):T(!1))}),C(()=>e.side,(r,b)=>{a.instances[b]===H&&(a.instances[b]=void 0,a[b].space=!1,a[b].offset=0),a.instances[r]=H,a[r].size=S.value,a[r].space=J.value,a[r].offset=de.value}),C(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),C(()=>e.behavior+e.breakpoint,ve),C(a.isContainer,r=>{y.value===!0&&f(r!==!0),r===!0&&ve()}),C(a.scrollbarWidth,()=>{_(y.value===!0?0:void 0)}),C(de,r=>{A("offset",r)}),C(J,r=>{o("onLayout",r),A("space",r)}),C(M,()=>{_()}),C(S,r=>{_(),pe(e.miniToOverlay,r)}),C(()=>e.miniToOverlay,r=>{pe(r,S.value)}),C(()=>l.lang.rtl,()=>{_()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(vt(),a.animate())}),C(L,r=>{o("miniState",r)});function _(r){r===void 0?G(()=>{r=y.value===!0?0:S.value,_(F.value*r)}):(a.isContainer.value===!0&&M.value===!0&&(m.value===!0||Math.abs(r)===S.value)&&(r+=F.value*a.scrollbarWidth.value),ze.value=r)}function W(r){w.value=r}function me(r){const b=r===!0?"remove":a.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function vt(){g!==null&&clearTimeout(g),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),j.value=!0,g=setTimeout(()=>{g=null,j.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function mt(r){if(y.value!==!1)return;const b=S.value,z=ue(r.distance.x,0,b);if(r.isFinal===!0){z>=Math.min(75,b)===!0?T():(a.animate(),W(0),_(F.value*b)),E.value=!1;return}_((l.lang.rtl===!0?M.value!==!0:M.value)?Math.max(b-z,0):Math.min(0,z-b)),W(ue(z/b,0,1)),r.isFirst===!0&&(E.value=!0)}function Oe(r){if(y.value!==!0)return;const b=S.value,z=r.direction===e.side,oe=(l.lang.rtl===!0?z!==!0:z)?ue(r.distance.x,0,b):0;if(r.isFinal===!0){Math.abs(oe)<Math.min(75,b)===!0?(a.animate(),W(1),_(0)):$(),E.value=!1;return}_(F.value*oe),W(ue(1-oe/b,0,1)),r.isFirst===!0&&(E.value=!0)}function he(){f(!1),me(!0)}function A(r,b){a.update(e.side,r,b)}function ht(r,b){r.value!==b&&(r.value=b)}function pe(r,b){A("size",r===!0?e.miniWidth:b)}return a.instances[e.side]=H,pe(e.miniToOverlay,S.value),A("space",J.value),A("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),K(()=>{o("onLayout",J.value),o("miniState",L.value),q=e.showIfAbove===!0;const r=()=>{(y.value===!0?x:p)(!1,!0)};if(a.totalWidth.value!==0){G(r);return}h=C(a.totalWidth,()=>{h(),h=void 0,y.value===!1&&e.showIfAbove===!0&&m.value===!1?T(!1):r()})}),N(()=>{h!==void 0&&h(),g!==null&&(clearTimeout(g),g=null),y.value===!0&&he(),a.instances[e.side]===H&&(a.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const r=[];m.value===!0&&(e.noSwipeOpen===!1&&r.push(Vt(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ct.value)),r.push(Be("div",{ref:"backdrop",class:nt.value,style:lt.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>ft.value)));const b=L.value===!0&&n.mini!==void 0,z=[k("div",{...i,key:""+b,class:[ut.value,i.class]},b===!0?n.mini():Ve(n.default))];return e.elevated===!0&&y.value===!0&&z.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Be("aside",{ref:"content",class:st.value,style:at.value},z,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>dt.value)),k("div",{class:"q-drawer-container"},r)}}}),vo=X({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=R(),i=Ee(ce,D);if(i===D)return console.error("QPageContainer needs to be child of QLayout"),D;Ke($t,!0);const t=v(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>k("div",{class:"q-page-container",style:t.value},Ve(n.default))}});const{passive:je}=P,mo=["both","horizontal","vertical"];var ho=X({name:"QScrollObserver",props:{axis:{type:String,validator:e=>mo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;C(()=>e.scrollTarget,()=>{d(),f()});function u(){i!==null&&i();const q=Math.max(0,et(t)),g=tt(t),h={top:q-o.position.top,left:g-o.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const m=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";o.position={top:q,left:g},o.directionChanged=o.direction!==m,o.delta=h,o.directionChanged===!0&&(o.direction=m,o.inflectionPoint=o.position),n("scroll",{...o})}function f(){t=no(l,e.scrollTarget),t.addEventListener("scroll",c,je),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,je),t=void 0)}function c(q){if(q===!0||e.debounce===0||e.debounce==="0")u();else if(i===null){const[g,h]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];i=()=>{h(g),i=null}}}const{proxy:a}=R();return C(()=>a.$q.lang.rtl,u),K(()=>{l=a.$el.parentNode,f()}),N(()=>{i!==null&&i(),d()}),Object.assign(a,{trigger:c,getPosition:()=>o}),$e}}),po=X({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=R(),t=V(null),l=V(i.screen.height),u=V(e.container===!0?0:i.screen.width),f=V({position:0,direction:"down",inflectionPoint:0}),d=V(0),c=V(Ue.value===!0?0:we()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),q=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),g=v(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),h=v(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function m(p){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};f.value=T,e.onScroll!==void 0&&o("scroll",T)}}function L(p){const{height:T,width:$}=p;let O=!1;l.value!==T&&(O=!0,l.value=T,e.onScrollHeight!==void 0&&o("scrollHeight",T),y()),u.value!==$&&(O=!0,u.value=$),O===!0&&e.onResize!==void 0&&o("resize",p)}function S({height:p}){d.value!==p&&(d.value=p,y())}function y(){if(e.container===!0){const p=l.value>d.value?we():0;c.value!==p&&(c.value=p)}}let s=null;const x={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>u.value+c.value),rows:v(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:f,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,T,$){x[p][T]=$}};if(Ke(ce,x),we()>0){let $=function(){p=null,T.classList.remove("hide-scrollbar")},O=function(){if(p===null){if(T.scrollHeight>i.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout($,300)},I=function(H){p!==null&&H==="remove"&&(clearTimeout(p),$()),window[`${H}EventListener`]("resize",O)},p=null;const T=document.body;C(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),Et(()=>{I("remove")})}return()=>{const p=Ye(n.default,[k(ho,{onScroll:m}),k(Le,{onResize:L})]),T=k("div",{class:a.value,style:q.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(Le,{onResize:S}),k("div",{class:"absolute-full",style:g.value},[k("div",{class:"scroll",style:h.value},[T])])]):T}}});const go=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],bo=_t({name:"MainLayout",components:{},setup(){const e=V(!1),n=V(!1),o=Ft(),i=v(()=>o.platform.is.mobile);return{essentialLinks:go,drawerRight:n,leftDrawerOpen:e,isMobile:i,toggleLeftDrawer(){e.value=!e.value}}}});function yo(e,n,o,i,t,l){const u=Ot("router-view");return Mt(),Bt(po,{view:"LHR lpr lfr"},{default:ie(()=>[U(At,{class:"bg-primary text-white"},{default:ie(()=>[U(xt,{class:Pt(["q-ma-md",e.drawerRight?"absolute-top-right":"absolute-top-left"]),dense:"",flat:"",round:"",icon:"menu",onClick:e.toggleLeftDrawer,color:"grey-10"},null,8,["class","onClick"])]),_:1}),U(fo,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[1]||(n[1]=f=>e.leftDrawerOpen=f),side:e.drawerRight?"right":"left",bordered:""},{default:ie(()=>[U(Gt,{modelValue:e.drawerRight,"onUpdate:modelValue":n[0]||(n[0]=f=>e.drawerRight=f),label:`Menu to the ${e.drawerRight?"right":"left"}`,"checked-icon":"switch_right","unchecked-icon":"switch_left",color:"green","keep-color":""},null,8,["modelValue","label"]),Ht(" "+Dt(e.isMobile),1)]),_:1},8,["modelValue","side"]),U(vo,null,{default:ie(()=>[U(u)]),_:1})]),_:1})}var xo=zt(bo,[["render",yo]]);export{xo as default};