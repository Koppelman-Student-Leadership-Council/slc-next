(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{1e3:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community/contact",function(){return r(7269)}])},634:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893);function s(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{className:"btn-slc",rel:"noopener noreferrer",target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSduZJX1uXg40KQ-RgWO5D15c_Db9krZ0DTKa1uAbeSVzhR18w/viewform?usp=sf_link",children:(0,n.jsx)("span",{children:"Apply "})}),(0,n.jsx)("div",{align:"center",className:"socialbtns"})]})}},1031:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),s=r(2185);function i(e){var t=e.children,r=e.breadcrumb;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("br",{}),r&&(0,n.jsx)(s.Z,{}),(0,n.jsx)("br",{}),(0,n.jsx)("h1",{className:" -mt-[20px] link link--metis text-center font-bold tracking-tighter leading-tight text-4xl mm:text-5xl 5h:text-6xl md:text-7xl lg:text-8xl lg:mb-3 lg:w-auto ",children:t})]})})}},7269:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(4727),s=r(6587),i=r(5893),o=r(6503),a=r(1031);const c={_origin:"https://api.emailjs.com"},d=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e.status,this.text=e.responseText}}const u=(e,t,r={})=>new Promise(((n,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",(({target:e})=>{const t=new l(e);200===t.status||"OK"===t.text?n(t):s(t)})),i.addEventListener("error",(({target:e})=>{s(new l(e))})),i.open("POST",c._origin+e,!0),Object.keys(r).forEach((e=>{i.setRequestHeader(e,r[e])})),i.send(t)}));var m=(e,t,r,n)=>{const s=n||c._userID,i=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(r);d(s,e,t);const o=new FormData(i);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",s),u("/api/v1.0/email/send-form",o)};r(634);var h=function(){return function(){var e=(0,n.Z)((function(e){return(0,s.__generator)(this,(function(t){return event.preventDefault(),m("service_3wgvjnc","template_cgpz9g9",e.target,"user_bUjdCRqLeJSakqKuFlLB7").then((function(e){window.location.reload()}),(function(e){console.log(e.text)})),[2]}))}))}(),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(a.Z,{breadcrumb:!0,children:"Contact  "}),(0,i.jsxs)("p",{className:"pt-10 text-xl",children:["Complete the form below or email us at ",(0,i.jsx)("b",{children:"brooklynslcouncil@gmail.com"})]}),(0,i.jsx)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSc-dDWoygU8spueE5BmVSptBQfrpg7rojw-Qc7fTXDOZrfztw/viewform?embedded=true",width:"100%",height:"1000",frameborder:"0",marginheight:"0",marginwidth:"0",children:"Loading\u2026"}),(0,i.jsxs)("div",{className:"mt-5 mb-3 text-md ml:text-lg",align:"center",children:[(0,i.jsx)("b",{children:" Mailing Address"})," ",(0,i.jsx)("br",{}),"2900 Bedford Ave. Brooklyn, NY 11210 ",(0,i.jsx)("br",{})]})]})})}},4727:function(e,t,r){"use strict";function n(e,t,r,n,s,i,o){try{var a=e[i](o),c=a.value}catch(d){return void r(d)}a.done?t(c):Promise.resolve(c).then(n,s)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(s,i){var o=e.apply(t,r);function a(e){n(o,s,i,a,c,"next",e)}function c(e){n(o,s,i,a,c,"throw",e)}a(void 0)}))}}r.d(t,{Z:function(){return s}})}},function(e){e.O(0,[262,18,774,888,179],(function(){return t=1e3,e(e.s=t);var t}));var t=e.O();_N_E=t}]);