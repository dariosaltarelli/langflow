"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1488],{82237:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});t(96540);var n=t(21312),i=t(1003),r=t(71539),s=t(23363),o=t(74848);function d(){const e=(0,n.T)({id:"theme.NotFound.title",message:"Page Not Found"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.be,{title:e}),(0,o.jsx)(r.A,{children:(0,o.jsx)(s.A,{})})]})}},38417:(e,a,t)=>{t.r(a),t.d(a,{default:()=>R});var n=t(96540),i=t(22831),r=t(56347),s=t(21312),o=t(28453),d=t(3408),c=t(32270),l=t(85861),p=t(71539),u=t(72774),f=t(82237),h=t(20053);const b="apiPage_KQrU",x="apiMainContainer_L2xG",A="apiSidebarContainer_Korj",m="apiMainContainerEnhanced_KekW",j="apiSidebarContainerHidden_KLHn",g="collapsedApiSidebar_Ic1j",v="expandSidebarButtonIcon_Z2po",C="apiItemWrapperEnhanced_aX4w";var M=t(74848);function _(e){let{currentApiRoute:a,apiMetadata:t}=e;const n=a.sidebar;return n?t.apiSidebars[n]:void 0}function k(e){let a=[];for(let t of e)switch(t.type){case"link":a.push(t.href);break;case"category":a.push(...k(t.items))}return a}function w(e){let{currentApiRoute:a,apiMetadata:t}=e;const n=_({currentApiRoute:a,apiMetadata:t});return n?k(n):[]}function N(e){let{currentApiRoute:a,apiMetadata:t,children:i}=e;const r=_({currentApiRoute:a,apiMetadata:t}),[f,k]=(0,n.useState)(!1),[w,N]=(0,n.useState)(!1),R=(0,n.useCallback)((()=>{w&&N(!1),k((e=>!e))}),[w]);return(0,M.jsx)(p.A,{wrapperClassName:"api-wrapper",children:(0,M.jsxs)("div",{className:b,children:[(0,M.jsx)(d.A,{}),r&&(0,M.jsxs)("aside",{className:(0,h.A)(A,{[j]:f}),onTransitionEnd:e=>{e.currentTarget.classList.contains(A)&&f&&N(!0)},children:[(0,M.jsx)(c.A,{sidebar:r,path:a.path,onCollapse:R,isHidden:w},a.sidebar),w&&(0,M.jsx)("div",{className:g,title:(0,s.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,s.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:R,onClick:R,children:(0,M.jsx)(l.A,{className:v})})]}),(0,M.jsx)("main",{className:(0,h.A)(x,{[m]:f||!r}),children:(0,M.jsx)("div",{className:(0,h.A)("container padding-top--md padding-bottom--lg",{[C]:f}),children:(0,M.jsx)(o.x,{components:u.A,children:i})})})]})})}const R=function(e){const{route:{routes:a},apiMetadata:t,location:n}=e;let s=a.find((e=>(0,r.B6)(n.pathname,e)));if(!s)return(0,M.jsx)(f.default,{});const o=w({currentApiRoute:s,apiMetadata:t});return o.find((e=>(0,r.B6)(n.pathname,e)))||(s={...s,path:o[0]}),(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(N,{currentApiRoute:s,apiMetadata:t,children:(0,i.v)(a)})})}},20053:(e,a,t)=>{function n(e){var a,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(i&&(i+=" "),i+=t);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}t.d(a,{A:()=>i});const i=function(){for(var e,a,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(i&&(i+=" "),i+=a);return i}}}]);