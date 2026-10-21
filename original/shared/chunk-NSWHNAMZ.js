import{a as x}from"./chunk-BBLBVXTT.js";import{a as f}from"./chunk-H7MXNYVQ.js";var p=x(),e=f();function b({name:r,email:t,avatar:s,items:u=z,setup:n,className:d}){let o=(0,p.useRef)(null),[_,g]=(0,p.useState)(!1),c=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let i=c.current;if(!i)return;let a=new IntersectionObserver(([l])=>l.isIntersecting&&(g(!0),a.disconnect()),{threshold:.3});return a.observe(i),()=>a.disconnect()},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{href:"ui-profile-menu",precedence:"default",children:C}),(0,e.jsxs)("section",{ref:c,className:["ui-pm",d].filter(Boolean).join(" "),"data-filled":_||void 0,children:[(0,e.jsxs)("div",{className:"ui-pm__card",children:[(0,e.jsxs)("header",{className:"ui-pm__user",children:[(0,e.jsx)("span",{className:"ui-pm__avatar",children:s??(0,e.jsx)(N,{})}),(0,e.jsxs)("span",{className:"ui-pm__who",children:[(0,e.jsx)("span",{className:"ui-pm__name",children:r}),(0,e.jsx)("span",{className:"ui-pm__email",children:t})]})]}),(0,e.jsx)("div",{ref:o,className:"ui-pm__items",role:"menu","aria-label":"Account",onKeyDown:i=>{let a=[...o.current?.querySelectorAll("button")??[]],l=a.indexOf(document.activeElement),h=i.key==="ArrowDown"?(l+1)%a.length:i.key==="ArrowUp"?(l-1+a.length)%a.length:i.key==="Home"?0:i.key==="End"?a.length-1:null;h!==null&&(i.preventDefault(),a[h]?.focus())},children:u.map(i=>(0,e.jsxs)("button",{type:"button",role:"menuitem",className:"ui-pm__item",onClick:i.onSelect,children:[(0,e.jsx)("span",{className:"ui-pm__icon",children:i.icon}),(0,e.jsx)("span",{className:"ui-pm__label",children:i.label}),i.badge&&(0,e.jsx)("span",{className:"ui-pm__badge",children:i.badge})]},i.id))})]}),n&&(0,e.jsx)(v,{...n})]})]})}function v({done:r,total:t,next:s,onContinue:u}){let n=t>0?Math.min(1,Math.max(0,r/t)):0,d=Math.round(n*100),o=s&&r<t;return(0,e.jsxs)("div",{className:"ui-pm__setup",children:[(0,e.jsxs)("div",{className:"ui-pm__setup-head",children:[(0,e.jsx)("span",{className:"ui-pm__setup-title",children:"Profile setup"}),(0,e.jsxs)("span",{className:"ui-pm__setup-count",children:[Math.min(r,t),"/",t]})]}),(0,e.jsx)("span",{className:"ui-pm__track",role:"progressbar","aria-label":"Profile setup","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":d,children:(0,e.jsx)("span",{className:"ui-pm__fill",style:{transform:`scaleX(${n})`}})}),o&&(0,e.jsxs)("button",{type:"button",className:"ui-pm__next",onClick:u,children:[(0,e.jsxs)("span",{className:"ui-pm__next-label",children:[(0,e.jsx)("span",{className:"ui-pm__next-hint",children:"Next:"})," ",s]}),(0,e.jsx)(M,{})]})]})}var m=({children:r})=>(0,e.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r}),k=()=>(0,e.jsxs)(m,{children:[(0,e.jsx)("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),w=()=>(0,e.jsxs)(m,{children:[(0,e.jsx)("path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}),(0,e.jsx)("path",{d:"M14 2v4a2 2 0 0 0 2 2h4M16 13H8M16 17H8M10 9H8"})]}),j=()=>(0,e.jsxs)(m,{children:[(0,e.jsx)("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),(0,e.jsx)("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),(0,e.jsx)("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"}),(0,e.jsx)("path",{d:"M17.5 3v7M14 6.5h7"})]}),y=()=>(0,e.jsx)(m,{children:(0,e.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"})}),N=()=>(0,e.jsxs)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",children:[(0,e.jsx)("circle",{cx:"20",cy:"20",r:"20",fill:"currentColor",opacity:"0.1"}),(0,e.jsx)("circle",{cx:"20",cy:"16",r:"4.75",fill:"currentColor"}),(0,e.jsx)("path",{d:"M11.5 28.25c.9-4 4.3-6.75 8.5-6.75s7.6 2.75 8.5 6.75c.15.7-.4 1.25-1.1 1.25H12.6c-.7 0-1.25-.55-1.1-1.25Z",fill:"currentColor"})]}),M=()=>(0,e.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M5 12h14M13 6l6 6-6 6"})}),z=[{id:"settings",label:"Settings",icon:(0,e.jsx)(k,{})},{id:"docs",label:"Docs",icon:(0,e.jsx)(w,{})},{id:"apps",label:"Apps",icon:(0,e.jsx)(j,{}),badge:"New"},{id:"logout",label:"Logout",icon:(0,e.jsx)(y,{})}],C=`
.ui-pm {
  --ui-pm-card: #ffffff;
  --ui-pm-line: #ececec;
  --ui-pm-ink: #171717;
  --ui-pm-text: #404040;
  --ui-pm-muted: #8f8f8f;
  --ui-pm-icon: #737373;
  --ui-pm-hover: #f5f5f5;
  --ui-pm-off: #f0f0f0;
  --ui-pm-fill: #2f6bff;
  --ui-pm-badge: #e11d48;
  --ui-pm-badge-wash: #fff0f3;
  --ui-pm-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-pm-tray: #f0f0f0;
  box-sizing: border-box;
  width: 100%;
  max-width: 320px;
  /* Like the Chat Composer: the white menu card sits on a gray tray, the setup progress lives in the tray below */
  background: var(--ui-pm-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-pm-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-pm *, .ui-pm *::before, .ui-pm *::after { box-sizing: border-box; }
.ui-pm__card {
  padding: 16px 8px 8px;
  background: var(--ui-pm-card);
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

.ui-pm__user {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 10px 12px;
}
.ui-pm__avatar {
  flex: none;
  width: 42px;
  height: 42px;
  color: var(--ui-pm-fill);
}
.ui-pm__avatar > * { display: block; width: 100%; height: 100%; }
.ui-pm__who {
  display: grid;
  min-width: 0;
}
.ui-pm__name {
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
}
.ui-pm__email {
  overflow: hidden;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-pm-muted);
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ui-pm__items {
  display: grid;
  gap: 2px;
}
.ui-pm__item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 36px;
  padding: 0 12px;
  border-radius: 12px;
}
.ui-pm__item {
  margin: 0;
  border: 0;
  background: transparent;
  font: inherit;
  text-align: left;
  color: var(--ui-pm-text);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-pm__item:hover,
.ui-pm__item:focus-visible {
  background: var(--ui-pm-hover);
  color: var(--ui-pm-ink);
  outline: none;
}
.ui-pm__item:active { background: #efefef; }

.ui-pm__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 20px;
  height: 20px;
  color: var(--ui-pm-icon);
  transition: color 160ms ease;
}
.ui-pm__icon svg { width: 20px; height: 20px; }
.ui-pm__item:hover .ui-pm__icon,
.ui-pm__item:focus-visible .ui-pm__icon { color: var(--ui-pm-ink); }

.ui-pm__label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-pm__badge {
  flex: none;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--ui-pm-badge-wash);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: var(--ui-pm-badge);
}

/* Profile setup in the gray extension \u2013 kept to two short lines and a bar */
.ui-pm__setup {
  padding: 10px 18px 12px;
}
.ui-pm__setup-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  line-height: 18px;
}
.ui-pm__setup-title { color: var(--ui-pm-text); font-weight: 500; }
.ui-pm__setup-count {
  font-variant-numeric: tabular-nums;
  color: var(--ui-pm-muted);
}
.ui-pm__track {
  display: block;
  height: 4px;
  margin-top: 7px;
  overflow: hidden;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.07);
}
.ui-pm__fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--ui-pm-fill);
  transform-origin: left center;
  scale: 0 1;
  transition: scale 900ms var(--ui-pm-ease) 150ms;
}
.ui-pm[data-filled] .ui-pm__fill { scale: 1 1; }
.ui-pm__next {
  display: flex;
  align-items: center;
  gap: 8px;
  width: calc(100% + 16px);
  margin: 6px -8px 0;
  padding: 3px 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font: inherit;
  text-align: left;
  color: var(--ui-pm-ink);
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-pm__next:hover,
.ui-pm__next:focus-visible {
  background: rgba(0, 0, 0, 0.04);
  outline: none;
}
.ui-pm__next-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 13px;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-pm__next-hint { color: var(--ui-pm-muted); }
.ui-pm__next svg {
  flex: none;
  width: 14px;
  height: 14px;
  color: var(--ui-pm-icon);
  transition: transform 200ms var(--ui-pm-ease), color 160ms ease;
}
.ui-pm__next:hover svg { transform: translateX(2px); color: var(--ui-pm-ink); }

@media (prefers-reduced-motion: reduce) {
  .ui-pm__item, .ui-pm__icon, .ui-pm__fill, .ui-pm__next, .ui-pm__next svg { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-pm {
  --ui-pm-card: #232326;
  --ui-pm-line: rgba(255, 255, 255, 0.08);
  --ui-pm-ink: #ededed;
  --ui-pm-text: #c4c4c4;
  --ui-pm-muted: #8f8f8f;
  --ui-pm-icon: #8f8f8f;
  --ui-pm-hover: #2a2a2d;
  --ui-pm-off: #161618;
  --ui-pm-badge: #fb7185;
  --ui-pm-badge-wash: rgba(225, 29, 72, 0.16);
  --ui-pm-tray: #161618;
}
:where(.dark, [data-theme="dark"]) .ui-pm__card {
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-pm__avatar { color: #6b95ff; }
:where(.dark, [data-theme="dark"]) .ui-pm__item:active { background: #313135; }
:where(.dark, [data-theme="dark"]) .ui-pm__track { background: rgba(255, 255, 255, 0.1); }
:where(.dark, [data-theme="dark"]) .ui-pm__next:hover,
:where(.dark, [data-theme="dark"]) .ui-pm__next:focus-visible { background: rgba(255, 255, 255, 0.06); }
`;function A(){return(0,e.jsx)("div",{className:"profile-demo",children:(0,e.jsx)(b,{name:"Lena Hartmann",email:"lena.hartmann@fastmail.com",setup:{done:3,total:5,next:"Add a profile photo"}})})}export{A as a};
