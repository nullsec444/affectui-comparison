import{a as m}from"./chunk-BBLBVXTT.js";import{a as _}from"./chunk-H7MXNYVQ.js";var n=m(),r=_(),c=["No signal","Weak signal","Good signal","Strong signal"];function C({title:o="Smart recommendation",options:a,onAccept:v,onUndo:k,defaultOpen:w=!0,className:y}){let[h,j]=(0,n.useState)(a[0].id),[N,x]=(0,n.useState)(null),[l,f]=(0,n.useState)(w),[d,t]=(0,n.useState)(!1),g=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!d)return;let i=s=>!g.current?.contains(s.target)&&t(!1),u=s=>s.key==="Escape"&&t(!1);return window.addEventListener("pointerdown",i),window.addEventListener("keydown",u),()=>{window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",u)}},[d]);let e=a.find(i=>i.id===h)??a[0],z=e.id===a[0].id,p=N===e.id;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{href:"ui-smart-recommendation",precedence:"default",children:L}),(0,r.jsxs)("section",{className:["ui-sr",y].filter(Boolean).join(" "),"aria-label":o,"data-accepted":p||void 0,children:[(0,r.jsxs)("div",{className:"ui-sr__card",children:[(0,r.jsxs)("button",{type:"button",className:"ui-sr__head","aria-expanded":l,onClick:()=>f(i=>!i),children:[(0,r.jsx)(S,{}),(0,r.jsx)("span",{className:"ui-sr__title",children:o}),!z&&(0,r.jsx)("span",{className:"ui-sr__pill",children:"Alternative"}),(0,r.jsx)("span",{className:"ui-sr__chevron",children:(0,r.jsx)(b,{d:"m4.5 6.25 3.5 3.5 3.5-3.5"})})]}),(0,r.jsx)("div",{className:"ui-sr__body","data-open":l||void 0,inert:!l,children:(0,r.jsx)("p",{className:"ui-sr__reason",children:e.reason},e.id)})]}),(0,r.jsxs)("footer",{className:"ui-sr__foot",children:[(0,r.jsxs)("span",{className:"ui-sr__signal","data-level":e.signal,title:c[e.signal],children:[(0,r.jsx)("span",{className:"ui-sr__bars","aria-hidden":"true",children:[1,2,3].map(i=>(0,r.jsx)("span",{"data-on":e.signal>=i||void 0},i))}),c[e.signal]]}),(0,r.jsxs)("div",{className:"ui-sr__actions",children:[a.length>1&&!p&&(0,r.jsxs)("div",{className:"ui-sr__alt",ref:g,children:[(0,r.jsx)("button",{type:"button",className:"ui-sr__btn","aria-haspopup":"menu","aria-expanded":d,onClick:()=>t(i=>!i),children:"Alternatives"}),d&&(0,r.jsx)("div",{className:"ui-sr__menu",role:"menu",children:a.map((i,u)=>(0,r.jsxs)("button",{type:"button",role:"menuitemradio","aria-checked":i.id===h,className:"ui-sr__option",onClick:()=>{j(i.id),t(!1),f(!0)},children:[(0,r.jsxs)("span",{className:"ui-sr__option-label",children:[i.label,u===0&&(0,r.jsx)("span",{className:"ui-sr__tag",children:"Recommended"})]}),(0,r.jsx)("span",{className:"ui-sr__mini","data-level":i.signal,"aria-label":c[i.signal],children:[1,2,3].map(s=>(0,r.jsx)("span",{"data-on":i.signal>=s||void 0},s))})]},i.id))})]}),p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:"ui-sr__done",role:"status",children:[(0,r.jsx)(b,{d:"m3.5 8.5 3 3 6-7",size:14}),e.label," accepted"]}),(0,r.jsx)("button",{type:"button",className:"ui-sr__btn",onClick:()=>{x(null),k?.(e)},children:"Undo"})]}):(0,r.jsxs)("button",{type:"button",className:"ui-sr__btn ui-sr__btn--primary",onClick:()=>{x(e.id),t(!1),v?.(e)},children:["Accept ",e.label.toLowerCase()]})]})]})]})]})}var S=()=>(0,r.jsxs)("svg",{className:"ui-sr__spark",viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,r.jsx)("path",{d:"M9 3.5H4A1.5 1.5 0 0 0 2.5 5v7A1.5 1.5 0 0 0 4 13.5h7a1.5 1.5 0 0 0 1.5-1.5V8"}),(0,r.jsx)("path",{d:"M12.5 1.5v4M10.5 3.5h4"})]}),b=({d:o,size:a=16})=>(0,r.jsx)("svg",{viewBox:"0 0 16 16",width:a,height:a,fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,r.jsx)("path",{d:o})}),L=`
.ui-sr {
  --ui-sr-tray: #f0f0f0;
  --ui-sr-card: #ffffff;
  --ui-sr-ink: #171717;
  --ui-sr-text: #404040;
  --ui-sr-muted: #8f8f8f;
  --ui-sr-accent: #2f6bff;
  --ui-sr-ok: #1f8a4c;
  --ui-sr-accent-text: #2f6bff;
  --ui-sr-border: #e5e5e5;
  --ui-sr-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-sr-head-hover: #f8f8f8;
  --ui-sr-pill: #f4f0ff;
  --ui-sr-pill-text: #7c4dff;
  --ui-sr-bar: #d4d4d4;
  --ui-sr-btn: #fff;
  --ui-sr-btn-hover: #f7f7f7;
  --ui-sr-menu: #fff;
  --ui-sr-option-hover: #f5f5f5;
  --ui-sr-option-on: #f5f8ff;
  --ui-sr-tag: #eef3ff;
  --ui-sr-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 440px;
  container-type: inline-size;
  /* Like the Chat Composer: the white card on a gray tray, the actions live in the tray below */
  background: var(--ui-sr-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-sr-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-sr *, .ui-sr *::before, .ui-sr *::after { box-sizing: border-box; }
.ui-sr button { margin: 0; font: inherit; color: inherit; cursor: pointer; }
.ui-sr button:focus-visible { outline: 2px solid var(--ui-sr-accent); outline-offset: 2px; }

.ui-sr__card {
  padding: 6px 8px 8px;
  background: var(--ui-sr-card);
  border: 1px solid var(--ui-sr-border);
  border-radius: 16px;
  box-shadow: var(--ui-sr-shadow);
}
.ui-sr__head {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  text-align: left;
  transition: background-color 140ms ease;
}
.ui-sr__head:hover { background: var(--ui-sr-head-hover); }
.ui-sr__spark { flex: none; color: var(--ui-sr-accent-text); }
.ui-sr__title { font-size: 15px; font-weight: 500; }
.ui-sr__pill {
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--ui-sr-pill);
  font-size: 11.5px;
  font-weight: 500;
  color: var(--ui-sr-pill-text);
}
.ui-sr__chevron { display: grid; margin-left: auto; color: var(--ui-sr-muted); transition: transform 280ms var(--ui-sr-ease); }
.ui-sr__head[aria-expanded="false"] .ui-sr__chevron { transform: rotate(-90deg); }
.ui-sr__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 340ms var(--ui-sr-ease);
}
.ui-sr__body[data-open] { grid-template-rows: 1fr; }
.ui-sr__reason {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 10px;
  font-size: 14px;
  line-height: 21px;
  color: var(--ui-sr-text);
  animation: ui-sr-swap 360ms var(--ui-sr-ease);
}
.ui-sr__body[data-open] .ui-sr__reason { padding-bottom: 8px; }
.ui-sr__reason strong { font-weight: 500; color: var(--ui-sr-ink); }

.ui-sr__foot {
  display: flex;
  align-items: center;
  /* Narrow containers: the actions move below the signal instead of running out of the tray */
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 10px;
  min-height: 50px;
  padding: 8px 8px 8px 16px;
}
.ui-sr__signal {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  white-space: nowrap;
  color: var(--ui-sr-muted);
}
.ui-sr__bars, .ui-sr__mini { display: inline-flex; align-items: flex-end; gap: 2px; }
.ui-sr__bars span, .ui-sr__mini span {
  width: 3px;
  border-radius: 1px;
  background: var(--ui-sr-bar);
  transition: background-color 260ms ease;
}
.ui-sr__bars span:nth-child(1), .ui-sr__mini span:nth-child(1) { height: 6px; }
.ui-sr__bars span:nth-child(2), .ui-sr__mini span:nth-child(2) { height: 9px; }
.ui-sr__bars span:nth-child(3), .ui-sr__mini span:nth-child(3) { height: 12px; }
[data-level="1"] > span[data-on] { background: #f59e0b; }
[data-level="2"] > span[data-on] { background: var(--ui-sr-accent); }
[data-level="3"] > span[data-on] { background: var(--ui-sr-ok); }
.ui-sr__signal[data-level="0"] .ui-sr__bars span:first-child { background: #8f8f8f; }

.ui-sr__actions { display: flex; align-items: center; gap: 6px; margin-left: auto; }
.ui-sr__btn {
  height: 32px;
  padding: 0 12px;
  border: 0;
  border-radius: 10px;
  background: var(--ui-sr-btn);
  box-shadow: 0 0 0 1px var(--ui-sr-border), 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 13px !important;
  font-weight: 500;
  white-space: nowrap;
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-sr__btn:hover { background: var(--ui-sr-btn-hover); }
.ui-sr__btn:active { transform: scale(0.98); }
.ui-sr__btn--primary {
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: #fff !important;
}
.ui-sr__btn--primary:hover { background: linear-gradient(#3b3a41, #26242b); }
.ui-sr__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding-right: 4px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-sr-ok);
  animation: ui-sr-swap 300ms var(--ui-sr-ease);
}

.ui-sr__alt { position: relative; }
.ui-sr__menu {
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  z-index: 5;
  display: grid;
  gap: 2px;
  width: 260px;
  padding: 4px;
  border-radius: 12px;
  background: var(--ui-sr-menu);
  box-shadow: 0 0 0 1px var(--ui-sr-border), 0 12px 30px -8px rgba(0, 0, 0, 0.2);
  animation: ui-sr-drop 180ms var(--ui-sr-ease);
}
/* Narrow: the actions sit on their own row \u2013 the menu lines up with its right edge so it stays inside */
@container (max-width: 420px) {
  .ui-sr__actions { position: relative; }
  .ui-sr__alt { position: static; }
  .ui-sr__menu { width: min(260px, 100cqw - 24px); }
}
.ui-sr__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-height: 34px;
  padding: 0 10px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font-size: 13px !important;
  text-align: left;
}
.ui-sr__option:hover { background: var(--ui-sr-option-hover); }
.ui-sr__option[aria-checked="true"] { background: var(--ui-sr-option-on); }
.ui-sr__option-label { display: inline-flex; align-items: center; gap: 6px; }
.ui-sr__tag { padding: 0 6px; border-radius: 999px; background: var(--ui-sr-tag); font-size: 10.5px; font-weight: 500; line-height: 16px; color: var(--ui-sr-accent-text); }

@keyframes ui-sr-swap { from { opacity: 0; transform: translateY(2px); } }
@keyframes ui-sr-drop { from { opacity: 0; transform: translateY(4px) scale(0.98); } }
@media (prefers-reduced-motion: reduce) {
  .ui-sr__reason, .ui-sr__done, .ui-sr__menu { animation: none; }
  .ui-sr__body, .ui-sr__chevron { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-sr {
  --ui-sr-tray: #161618;
  --ui-sr-card: #232326;
  --ui-sr-ink: #ededed;
  --ui-sr-text: #c4c4c4;
  --ui-sr-muted: #8f8f8f;
  --ui-sr-ok: #3dbb6f;
  --ui-sr-accent-text: #6b95ff;
  --ui-sr-border: rgba(255, 255, 255, 0.08);
  --ui-sr-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-sr-head-hover: rgba(255, 255, 255, 0.06);
  --ui-sr-pill: rgba(139, 92, 246, 0.18);
  --ui-sr-pill-text: #b49cff;
  --ui-sr-bar: rgba(255, 255, 255, 0.14);
  --ui-sr-btn: #2a2a2d;
  --ui-sr-btn-hover: #313135;
  --ui-sr-menu: #2a2a2d;
  --ui-sr-option-hover: #313135;
  --ui-sr-option-on: rgba(47, 107, 255, 0.16);
  --ui-sr-tag: rgba(47, 107, 255, 0.16);
}
:where(.dark, [data-theme="dark"]) .ui-sr__menu {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 12px 30px -8px rgba(0, 0, 0, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-sr__btn--primary {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;
  color: #121213 !important;
}
:where(.dark, [data-theme="dark"]) .ui-sr__btn--primary:hover { background: linear-gradient(#ffffff, #ececef); }
`,F=[{id:"incremental",label:"Incremental sync",reason:(0,r.jsxs)(r.Fragment,{children:["Only 4% of rows changed since yesterday \u2013 switching to ",(0,r.jsx)("strong",{children:"Incremental sync"})," saves about 40 minutes."]}),signal:3},{id:"full",label:"Full refresh",reason:(0,r.jsxs)(r.Fragment,{children:["A ",(0,r.jsx)("strong",{children:"Full refresh"})," rebuilds every table. Safest after schema changes, but takes about 50 minutes."]}),signal:1},{id:"skip",label:"Skip tonight",reason:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("strong",{children:"Skip tonight"})," keeps yesterday's data. Fine if nobody needs fresh numbers tomorrow morning."]}),signal:0}];function I(){return(0,r.jsx)("div",{className:"recommendation-demo",children:(0,r.jsx)(C,{options:F})})}export{I as a};
