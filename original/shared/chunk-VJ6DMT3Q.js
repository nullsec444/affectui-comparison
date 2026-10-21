import{a as u}from"./chunk-BBLBVXTT.js";import{a as h}from"./chunk-H7MXNYVQ.js";var a=u(),e=h();function m({title:i="Tips",tips:r,onClose:n,closeLabel:l="Close",className:c}){let[p,d]=(0,a.useState)(new Set);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{href:"ui-tips-panel",precedence:"default",children:_}),(0,e.jsxs)("section",{className:["ui-tp",c].filter(Boolean).join(" "),"aria-label":i,children:[(0,e.jsxs)("header",{className:"ui-tp__head",children:[(0,e.jsx)("h3",{className:"ui-tp__title",children:i}),(0,e.jsxs)("span",{className:"ui-tp__count","aria-live":"polite",children:[p.size,"/",r.length," done"]})]}),(0,e.jsx)("div",{className:"ui-tp__card",children:(0,e.jsx)("ul",{className:"ui-tp__grid",children:r.map((t,s)=>{let o=p.has(t.id);return(0,e.jsxs)("li",{className:"ui-tp__tip","data-done":o||void 0,style:{animationDelay:`${80+s*50}ms`},children:[(0,e.jsx)("p",{className:"ui-tp__tip-title",children:t.title}),(0,e.jsx)("p",{className:"ui-tp__tip-text",children:t.description}),o?(0,e.jsxs)("span",{className:"ui-tp__done",role:"status",children:[(0,e.jsx)(g,{}),t.doneLabel??"Done"]}):(0,e.jsx)("button",{type:"button",className:["ui-tp__btn",t.primary&&"ui-tp__btn--primary"].filter(Boolean).join(" "),onClick:()=>{d(f=>new Set(f).add(t.id)),t.onAction?.()},children:t.action})]},t.id)})})}),n&&(0,e.jsx)("footer",{className:"ui-tp__foot",children:(0,e.jsx)("button",{type:"button",className:"ui-tp__btn",onClick:n,children:l})})]})]})}var b=({children:i})=>(0,e.jsx)("kbd",{className:"ui-tp__kbd",children:i}),g=()=>(0,e.jsxs)("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:[(0,e.jsx)("circle",{cx:"8",cy:"8",r:"7",fill:"currentColor"}),(0,e.jsx)("path",{d:"m5 8.2 2 2 4-4.2",fill:"none",stroke:"#fff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]}),_=`
.ui-tp {
  --ui-tp-tray: #f0f0f0;
  --ui-tp-card: #ffffff;
  --ui-tp-line: #ececec;
  --ui-tp-ink: #171717;
  --ui-tp-muted: #737373;
  --ui-tp-ok: #2f6bff;
  /* Height of the tip list before it scrolls */
  --ui-tp-max-height: 420px;
  --ui-tp-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 760px;
  /* Like the Chat Composer: a gray tray with heading and footer, the white card sits on top of it */
  background: var(--ui-tp-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-tp-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-tp *, .ui-tp *::before, .ui-tp *::after { box-sizing: border-box; }
.ui-tp button { margin: 0; font: inherit; cursor: pointer; }
.ui-tp button:focus-visible { outline: 2px solid var(--ui-tp-ok); outline-offset: 2px; }

.ui-tp__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 20px 12px;
}
.ui-tp__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.01em;
}
.ui-tp__count {
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: var(--ui-tp-muted);
}

.ui-tp__card {
  container-type: inline-size;
  max-height: var(--ui-tp-max-height);
  overflow-y: auto;
  scrollbar-width: thin;
  background: var(--ui-tp-card);
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
.ui-tp__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 14px;
  list-style: none;
}
@container (max-width: 560px) { .ui-tp__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@container (max-width: 380px) { .ui-tp__grid { grid-template-columns: minmax(0, 1fr); } }

.ui-tp__tip {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px 14px;
  border: 1px solid var(--ui-tp-line);
  border-radius: 14px;
  animation: ui-tp-in 480ms var(--ui-tp-ease) both;
  transition: background-color 260ms ease, border-color 260ms ease;
}
.ui-tp__tip[data-done] { background: #fafafa; }
.ui-tp__tip-title {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.ui-tp__tip-text {
  flex: 1;
  margin: 6px 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-tp-muted);
}
.ui-tp__kbd {
  display: inline-grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 0 1px #e5e5e5, 0 1px 0 #e5e5e5;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  color: var(--ui-tp-ink);
  vertical-align: 1px;
}

.ui-tp__btn {
  height: 30px;
  padding: 0 12px;
  border: 0;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 0 0 1px #e5e5e5, 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 13px !important;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-tp-ink);
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-tp__btn:hover { background: #f7f7f7; }
.ui-tp__btn:active { transform: scale(0.98); }
.ui-tp__btn--primary {
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: #fff;
}
.ui-tp__btn--primary:hover { background: linear-gradient(#3b3a41, #26242b); }

.ui-tp__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-tp-ok);
  animation: ui-tp-pop 360ms var(--ui-tp-ease);
}

.ui-tp__foot { padding: 8px 10px 10px; }
.ui-tp:not(:has(.ui-tp__foot)) { padding-bottom: 8px; }

@keyframes ui-tp-in {
  from { opacity: 0; transform: translateY(4px); }
}
@keyframes ui-tp-pop {
  from { opacity: 0; transform: scale(0.94); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tp__tip, .ui-tp__done { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tp {
  --ui-tp-tray: #161618;
  --ui-tp-card: #232326;
  --ui-tp-line: rgba(255, 255, 255, 0.08);
  --ui-tp-ink: #ededed;
  --ui-tp-muted: #8f8f8f;
  --ui-tp-ok: #6b95ff;
}
:where(.dark, [data-theme="dark"]) .ui-tp__card {
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  color-scheme: dark;
}
:where(.dark, [data-theme="dark"]) .ui-tp__tip[data-done] { background: #2a2a2d; }
:where(.dark, [data-theme="dark"]) .ui-tp__kbd {
  background: #2a2a2d;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
}
:where(.dark, [data-theme="dark"]) .ui-tp__btn {
  background: #2a2a2d;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-tp__btn:hover { background: #313135; }
/* The dark primary button inverts, like on the site */
:where(.dark, [data-theme="dark"]) .ui-tp__btn--primary {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 #ffffff;
  color: #121213;
}
:where(.dark, [data-theme="dark"]) .ui-tp__btn--primary:hover { background: linear-gradient(#ffffff, #ececef); }
`,k=[{id:"invite",title:"Invite your team",description:"Work on projects together and keep feedback in one place.",action:"Invite",doneLabel:"Invite sent"},{id:"search",title:"Quick search",description:(0,e.jsxs)(e.Fragment,{children:["Press ",(0,e.jsx)(b,{children:"\u2318K"})," to jump to any page, project or setting."]}),action:"Try it",doneLabel:"Got it"},{id:"digest",title:"Weekly digest",description:"Get a short summary of what changed every Monday morning.",action:"Turn on",doneLabel:"Turned on"},{id:"slack",title:"Connect Slack",description:"Post an update to a channel when something needs your attention.",action:"Connect",doneLabel:"Connected"},{id:"mobile",title:"Mobile app",description:"Check activity and approve requests while you're on the go.",action:"Get the app",doneLabel:"Link sent"},{id:"pro",title:"Ready for Pro?",description:"Unlimited projects, priority support and advanced analytics.",action:"See plans",doneLabel:"Opened",primary:!0},{id:"theme",title:"Dark mode",description:"Switch the theme or follow your system setting automatically.",action:"Switch",doneLabel:"Switched"},{id:"api",title:"API keys",description:"Automate your workflow and pull data into your own tools.",action:"Create key",doneLabel:"Key created"},{id:"export",title:"Export data",description:"Download every project as CSV whenever you need a copy.",action:"Export",doneLabel:"Export started"}],x={width:720,height:410};function v(){let i=(0,a.useRef)(null),[r,n]=(0,a.useState)(null),[l,c]=(0,a.useState)(0),[p,d]=(0,a.useState)(!1);return(0,a.useLayoutEffect)(()=>{let t=i.current?.closest(".card__preview");if(!t)return;let s=()=>n(Math.min((t.clientWidth-48)/x.width,(t.clientHeight-80)/x.height));s();let o=new ResizeObserver(s);return o.observe(t),()=>o.disconnect()},[]),(0,e.jsx)("div",{ref:i,className:"tips-demo","data-closing":p||void 0,style:r===null?void 0:{"--fit":r},children:(0,e.jsx)(m,{tips:k,onClose:()=>{d(!0),window.setTimeout(()=>{c(t=>t+1),d(!1)},900)}},l)})}export{v as a};
