(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&e.push(u)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9274).Z;r(5654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2845).Z,a=r(8774).Z,u=o(r(7294)),c=r(6273),i=r(2725),s=r(3462),f=r(1018),l=r(7190),p=r(1210),d=r(8684),v="undefined"!==typeof u.default.useTransition,y={};function b(e,t,r,n){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,r,n)).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;y[t+"%"+r+(o?"%"+o:"")]=!0}}var m=u.default.forwardRef((function(e,t){var r,o=e.href,m=e.as,h=e.children,g=e.prefetch,O=e.passHref,x=e.replace,C=e.shallow,j=e.scroll,P=e.locale,_=e.onClick,R=e.onMouseEnter,E=e.onTouchStart,w=e.legacyBehavior,M=void 0===w?!0!==Boolean(!1):w,L=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=h,!M||"string"!==typeof r&&"number"!==typeof r||(r=u.default.createElement("a",null,r));var N=!1!==g,k=n(v?u.default.useTransition():[],2)[1],T=u.default.useContext(s.RouterContext),S=u.default.useContext(f.AppRouterContext);S&&(T=S);var I,D=u.default.useMemo((function(){var e=n(c.resolveHref(T,o,!0),2),t=e[0],r=e[1];return{href:t,as:m?c.resolveHref(T,m):r||t}}),[T,o,m]),U=D.href,Z=D.as,H=u.default.useRef(U),A=u.default.useRef(Z);M&&(I=u.default.Children.only(r));var B=M?I&&"object"===typeof I&&I.ref:t,$=n(l.useIntersection({rootMargin:"200px"}),3),K=$[0],W=$[1],q=$[2],F=u.default.useCallback((function(e){A.current===Z&&H.current===U||(q(),A.current=Z,H.current=U),K(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[Z,B,U,q,K]);u.default.useEffect((function(){var e=W&&N&&c.isLocalURL(U),t="undefined"!==typeof P?P:T&&T.locale,r=y[U+"%"+Z+(t?"%"+t:"")];e&&!r&&b(T,U,Z,{locale:t})}),[Z,U,W,P,N,T]);var G={ref:F,onClick:function(e){M||"function"!==typeof _||_(e),M&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,i,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r)){e.preventDefault();var l=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:u}):t[o?"replace":"push"](r,{forceOptimisticNavigation:!f})};s?s(l):l()}}(e,T,U,Z,x,C,j,P,S?k:void 0,N)},onMouseEnter:function(e){M||"function"!==typeof R||R(e),M&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),!N&&S||c.isLocalURL(U)&&b(T,U,Z,{priority:!0})},onTouchStart:function(e){M||"function"!==typeof E||E(e),M&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),!N&&S||c.isLocalURL(U)&&b(T,U,Z,{priority:!0})}};if(!M||O||"a"===I.type&&!("href"in I.props)){var z="undefined"!==typeof P?P:T&&T.locale,V=T&&T.isLocaleDomain&&p.getDomainLocale(Z,z,T.locales,T.domainLocales);G.href=V||d.addBasePath(i.addLocale(Z,z,T&&T.defaultLocale))}return M?u.default.cloneElement(I,G):u.default.createElement("a",Object.assign({},L,G),r)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9274).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,s=e.disabled||!u,f=n(o.useState(!1),2),l=f[0],p=f[1],d=n(o.useState(null),2),v=d[0],y=d[1];o.useEffect((function(){if(u){if(s||l)return;if(v&&v.tagName){var e=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=i.find((function(e){return e.root===r.root&&e.margin===r.margin}));if(n&&(t=c.get(n)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return t={id:r,observer:a,elements:o},i.push(r),c.set(r,t),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),c.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!l){var n=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(n)}}}),[v,s,r,t,l]);var b=o.useCallback((function(){p(!1)}),[]);return[y,l,b]};var o=r(7294),a=r(9311),u="function"===typeof IntersectionObserver,c=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(2845).Z)(r(7294)),o=n.default.createContext(null);t.AppRouterContext=o;var a=n.default.createContext(null);t.LayoutRouterContext=a;var u=n.default.createContext(null);t.GlobalLayoutRouterContext=u},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,u){if(u!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5500:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(4184),o=r.n(n),a=r(7294),u=r(6792),c=/-(.)/g;var i=r(5893);const s=e=>{return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,{displayName:t=s(e),Component:r,defaultProps:n}={}){const c=a.forwardRef((({className:t,bsPrefix:n,as:a=r||"div",...c},s)=>{const f=(0,u.vE)(n,e);return(0,i.jsx)(a,{ref:s,className:o()(t,f),...c})}));return c.defaultProps=n,c.displayName=t,c}var l=e=>a.forwardRef(((t,r)=>(0,i.jsx)("div",{...t,ref:r,className:o()(t.className,e)})));const p=a.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...a},c)=>{const s=(0,u.vE)(e,"card-img");return(0,i.jsx)(n,{ref:c,className:o()(r?`${s}-${r}`:s,t),...a})}));p.displayName="CardImg";var d=p;const v=a.createContext(null);v.displayName="CardHeaderContext";var y=v;const b=a.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},c)=>{const s=(0,u.vE)(e,"card-header"),f=(0,a.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,i.jsx)(y.Provider,{value:f,children:(0,i.jsx)(r,{ref:c,...n,className:o()(t,s)})})}));b.displayName="CardHeader";var m=b;const h=l("h5"),g=l("h6"),O=f("card-body"),x=f("card-title",{Component:h}),C=f("card-subtitle",{Component:g}),j=f("card-link",{Component:"a"}),P=f("card-text",{Component:"p"}),_=f("card-footer"),R=f("card-img-overlay"),E=a.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:a,body:c,children:s,as:f="div",...l},p)=>{const d=(0,u.vE)(e,"card");return(0,i.jsx)(f,{ref:p,...l,className:o()(t,d,r&&`bg-${r}`,n&&`text-${n}`,a&&`border-${a}`),children:c?(0,i.jsx)(O,{children:s}):s})}));E.displayName="Card",E.defaultProps={body:!1};var w=Object.assign(E,{Img:d,Title:x,Subtitle:C,Body:O,Link:j,Text:P,Header:m,Footer:_,ImgOverlay:R})},6792:function(e,t,r){"use strict";r.d(t,{vE:function(){return c}});var n=r(7294);r(5893);const o=n.createContext({prefixes:{}}),{Consumer:a,Provider:u}=o;function c(e,t){const{prefixes:r}=(0,n.useContext)(o);return e||r[t]||t}},2875:function(e,t,r){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return n}})},7877:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(8302);function o(e,t){if(null==e)return{};var r,o,a=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},8302:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})}}]);