(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{25614:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calendar",function(){return e(50922)}])},41031:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var r=e(85893),i=e(72185);function a(t){var n=t.children,e=t.breadcrumb;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("br",{}),e&&(0,r.jsx)(i.Z,{}),(0,r.jsx)("br",{}),(0,r.jsx)("h1",{className:" -mt-[20px] link link--metis text-center font-bold tracking-tighter leading-tight text-4xl mm:text-5xl 5h:text-6xl md:text-7xl lg:text-8xl lg:mb-3 lg:w-auto ",children:n})]})})}},50922:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return h}});var r=e(85893),i=e(66503),a=e(41031),c=e(67280),s=e.n(c),l=(e(42630),e(67294)),o=e(83253),u=e.n(o),d={content:{top:"25%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}};var h=!0;n.default=function(t){var n,e=t.calendarPreData,o=function(){T(!1)},h=function(t,n){n.forEach((function(n){f(t,n.calendar_id)||(N.push(n.calendar_id),t.push({id:n.calendar_id,startAt:n.event_date_starts,endAt:n.event_date_ends,summary:n.title,description:""}),t=x(t))})),k(t)},f=function(t,n){return t.filter((function(t){t.id})).length>0},x=function(t){var n=new Set;return t.filter((function(t){var e=n.has(t.id);return n.add(t.id),!e}))},m=(0,l.useState)(null),_=(m[0],m[1]),v=(0,l.useState)(!1),p=v[0],j=v[1],b=(0,l.useState)([{}]),g=b[0],k=b[1],N=[],S=(0,l.useState)({}),w=S[0],E=S[1],C=(0,l.useState)(!1),y=C[0],T=C[1],M=(0,l.useState)("Title"),O=M[0],P=M[1],R=(0,l.useState)(""),Z=R[0],V=R[1],A=(0,l.useState)("Description"),D=A[0],F=A[1];return(0,l.useEffect)((function(){j(!0),h(g,e),fetch("https://admin.brooklynslcouncil.com/public/api/events-calendar").then((function(t){return t.json()})).then((function(t){_(t),h(g,t)})),fetch("https://admin.brooklynslcouncil.com/public/api/events").then((function(t){return t.json()})).then((function(t){!function(t){var n=w;t.forEach((function(t){n[t.title]={title:t.title,description:t.description,item_link:t.item_link}})),E(n)}(t),_(t)}))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{breadcrumb:!0,children:"Calendar"}),(0,r.jsxs)("div",{className:"pt-10",children:[p&&(0,r.jsx)("div",{className:"h-[500px]",children:(0,r.jsx)(s(),{initialView:c.CalendarView.MONTH,events:g,onEventClick:function(t){return function(t){T(!0);var n=w[t.summary];n&&(F(n.description),P(n.title),V(n.item_link))}(t)}})}),!p&&(0,r.jsx)("div",{className:"h-[500px] content-center center-content",children:(0,r.jsx)("div",{children:"Retrieving Calendar Events..."})})]})]}),(0,r.jsxs)(u(),{isOpen:y,onRequestClose:o,style:d,contentLabel:"Example Modal",children:[(0,r.jsx)("button",{className:"float-right",onClick:o,children:"Close"}),(0,r.jsx)("h2",{ref:function(t){return t},children:O}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{dangerouslySetInnerHTML:(n=D,{__html:n})}),Z&&(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:Z,children:"RSVP/More Info"})]})]})]})}}},function(t){t.O(0,[809,602,262,285,253,18,774,888,179],(function(){return n=25614,t(t.s=n);var n}));var n=t.O();_N_E=n}]);