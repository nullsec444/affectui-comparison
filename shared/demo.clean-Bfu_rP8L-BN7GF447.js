import{a as u}from"./chunk-BBLBVXTT.js";import{a as h}from"./chunk-VXCLO5JM.js";import"./chunk-LKG2PFLG.js";import"./chunk-KHKHHDEU.js";import"./chunk-MOQMIKSW.js";var a=u(),t=h();function g({title:i="Tips",tips:r,onClose:n,closeLabel:d="Close",className:l}){let[p,c]=(0,a.useState)(new Set);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{href:"ui-tips-panel-clean",precedence:"default",children:_}),(0,t.jsxs)("section",{className:["ui-tpc",l].filter(Boolean).join(" "),"aria-label":i,children:[(0,t.jsxs)("header",{className:"ui-tpc__head",children:[(0,t.jsx)("h3",{className:"ui-tpc__title",children:i}),(0,t.jsxs)("span",{className:"ui-tpc__count","aria-live":"polite",children:[p.size,"/",r.length," done"]})]}),(0,t.jsx)("div",{className:"ui-tpc__body",children:(0,t.jsx)("ul",{className:"ui-tpc__grid",children:r.map((e,s)=>{let o=p.has(e.id);return(0,t.jsxs)("li",{className:"ui-tpc__tip","data-done":o||void 0,style:{animationDelay:`${80+s*50}ms`},children:[(0,t.jsx)("p",{className:"ui-tpc__tip-title",children:e.title}),(0,t.jsx)("p",{className:"ui-tpc__tip-text",children:e.description}),o?(0,t.jsxs)("span",{className:"ui-tpc__done",role:"status",children:[(0,t.jsx)(f,{}),e.doneLabel??"Done"]}):(0,t.jsx)("button",{type:"button",className:["ui-tpc__btn",e.primary&&"ui-tpc__btn--primary"].filter(Boolean).join(" "),onClick:()=>{c(m=>new Set(m).add(e.id)),e.onAction?.()},children:e.action})]},e.id)})})}),n&&(0,t.jsx)("footer",{className:"ui-tpc__foot",children:(0,t.jsx)("button",{type:"button",className:"ui-tpc__btn",onClick:n,children:d})})]})]})}var b=({children:i})=>(0,t.jsx)("kbd",{className:"ui-tpc__kbd",children:i}),f=()=>(0,t.jsxs)("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:[(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6.5",fill:"currentColor"}),(0,t.jsx)("path",{d:"m5.6 8.1 1.7 1.7 3.2-3.4",fill:"none",stroke:"#fff",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),_=`
/* Colors and motion as variables \u2013 override them on .ui-tpc */
.ui-tpc {
  --ui-tpc-card: #ffffff;
  --ui-tpc-strong: #000000;
  --ui-tpc-ink: rgba(0, 0, 0, 0.88);
  --ui-tpc-text: rgba(0, 0, 0, 0.61);
  --ui-tpc-muted: rgba(0, 0, 0, 0.45);
  --ui-tpc-line: rgba(0, 0, 0, 0.06);
  --ui-tpc-wash: rgba(0, 0, 0, 0.015);
  --ui-tpc-hover: rgba(0, 0, 0, 0.03);
  --ui-tpc-ok: #1a9a52;
  --ui-tpc-primary: rgba(0, 0, 0, 0.88);
  --ui-tpc-primary-hover: rgba(0, 0, 0, 0.8);
  --ui-tpc-on-primary: #fcfcfc;
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-tpc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-tpc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  --ui-tpc-focus: rgba(0, 96, 226, 0.35);
  /* Height of the tip list before it scrolls */
  --ui-tpc-max-height: 420px;
  --ui-tpc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 760px;
  /* One white card \u2013 the edge is a shadow, not a border */
  border-radius: 10px;
  background: var(--ui-tpc-card);
  box-shadow: var(--ui-tpc-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-tpc-ink);
  text-align: left;
  -webkit-font-smoothing: antialiased;
}
.ui-tpc *, .ui-tpc *::before, .ui-tpc *::after { box-sizing: border-box; }
:where(.ui-tpc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.ui-tpc button:focus-visible { outline: 2px solid var(--ui-tpc-focus); outline-offset: 1px; }
:where(.ui-tpc) svg { display: block; flex: none; }

/* ----- Head ----- */
.ui-tpc__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 0.5px solid var(--ui-tpc-line);
}
.ui-tpc__title {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: var(--ui-tpc-strong);
}
.ui-tpc__count {
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
  color: var(--ui-tpc-muted);
  white-space: nowrap;
}

/* ----- The tip list: the only part that scrolls ----- */
.ui-tpc__body {
  container-type: inline-size;
  max-height: var(--ui-tpc-max-height);
  overflow-y: auto;
  scrollbar-width: thin;
}
.ui-tpc__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin: 0;
  padding: 12px;
  list-style: none;
}
@container (max-width: 560px) { .ui-tpc__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@container (max-width: 380px) { .ui-tpc__grid { grid-template-columns: minmax(0, 1fr); } }

/* Each tip is a quiet tile: a hairline drawn as an inset shadow */
.ui-tpc__tip {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border-radius: 8px;
  box-shadow: inset 0 0 0 0.5px var(--ui-tpc-line);
  animation: ui-tpc-in 480ms var(--ui-tpc-ease) both;
  transition: background-color 260ms ease;
}
.ui-tpc__tip[data-done] { background: var(--ui-tpc-wash); }
.ui-tpc__tip-title {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-tpc-strong);
}
.ui-tpc__tip-text {
  flex: 1;
  margin: 2px 0 12px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-tpc-text);
}
.ui-tpc__kbd {
  display: inline-grid;
  place-items: center;
  min-width: 20px;
  height: 18px;
  padding: 0 5px;
  border-radius: 5px;
  background: var(--ui-tpc-card);
  box-shadow: var(--ui-tpc-shadow);
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  color: var(--ui-tpc-ink);
  vertical-align: 1px;
}

/* Secondary: white with the card shadow */
.ui-tpc__btn {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  background: var(--ui-tpc-card);
  box-shadow: var(--ui-tpc-shadow);
  font-size: 13px !important;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-tpc-strong);
  white-space: nowrap;
  transition: box-shadow 140ms ease, background-color 140ms ease, transform 160ms var(--ui-tpc-ease);
}
.ui-tpc__btn:hover { box-shadow: var(--ui-tpc-shadow-hover); }
.ui-tpc__btn:active { transform: scale(0.98); }
/* Primary: the dark chip */
.ui-tpc__btn--primary {
  background: var(--ui-tpc-primary);
  box-shadow: none;
  color: var(--ui-tpc-on-primary);
}
.ui-tpc__btn--primary:hover { background: var(--ui-tpc-primary-hover); box-shadow: none; }

.ui-tpc__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-tpc-ok);
  animation: ui-tpc-pop 360ms var(--ui-tpc-ease);
}

/* ----- The last row inside the card ----- */
.ui-tpc__foot {
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  border-top: 0.5px solid var(--ui-tpc-line);
}

@keyframes ui-tpc-in {
  from { opacity: 0; transform: translateY(4px); }
}
@keyframes ui-tpc-pop {
  from { opacity: 0; transform: scale(0.94); }
}

@media (pointer: coarse) {
  .ui-tpc__btn, .ui-tpc__done { height: 34px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tpc__tip, .ui-tpc__done { animation: none; }
  .ui-tpc__tip, .ui-tpc__btn { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tpc {
  --ui-tpc-card: #1c1c1e;
  --ui-tpc-strong: #ffffff;
  --ui-tpc-ink: rgba(255, 255, 255, 0.9);
  --ui-tpc-text: rgba(255, 255, 255, 0.62);
  --ui-tpc-muted: rgba(255, 255, 255, 0.46);
  --ui-tpc-line: rgba(255, 255, 255, 0.08);
  --ui-tpc-wash: rgba(255, 255, 255, 0.03);
  --ui-tpc-hover: rgba(255, 255, 255, 0.04);
  --ui-tpc-ok: #5fd394;
  --ui-tpc-primary: rgba(255, 255, 255, 0.9);
  --ui-tpc-primary-hover: rgba(255, 255, 255, 0.8);
  --ui-tpc-on-primary: #1c1c1e;
  --ui-tpc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tpc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tpc-focus: rgba(77, 141, 255, 0.5);
  color-scheme: dark;
}
:where(.dark, [data-theme="dark"]) .ui-tpc__btn:not(.ui-tpc__btn--primary) { background: #232326; }
`,w=[{id:"invite",title:"Invite your team",description:"Work on projects together and keep feedback in one place.",action:"Invite",doneLabel:"Invite sent"},{id:"search",title:"Quick search",description:(0,t.jsxs)(t.Fragment,{children:["Press ",(0,t.jsx)(b,{children:"\u2318K"})," to jump to any page, project or setting."]}),action:"Try it",doneLabel:"Got it"},{id:"digest",title:"Weekly digest",description:"Get a short summary of what changed every Monday morning.",action:"Turn on",doneLabel:"Turned on"},{id:"slack",title:"Connect Slack",description:"Post an update to a channel when something needs your attention.",action:"Connect",doneLabel:"Connected"},{id:"mobile",title:"Mobile app",description:"Check activity and approve requests while you're on the go.",action:"Get the app",doneLabel:"Link sent"},{id:"pro",title:"Ready for Pro?",description:"Unlimited projects, priority support and advanced analytics.",action:"See plans",doneLabel:"Opened",primary:!0},{id:"theme",title:"Dark mode",description:"Switch the theme or follow your system setting automatically.",action:"Switch",doneLabel:"Switched"},{id:"api",title:"API keys",description:"Automate your workflow and pull data into your own tools.",action:"Create key",doneLabel:"Key created"},{id:"export",title:"Export data",description:"Download every project as CSV whenever you need a copy.",action:"Export",doneLabel:"Export started"}],x={width:720,height:410};function k(){let i=(0,a.useRef)(null),[r,n]=(0,a.useState)(null),[d,l]=(0,a.useState)(0),[p,c]=(0,a.useState)(!1);return(0,a.useLayoutEffect)(()=>{let e=i.current?.closest(".card__preview");if(!e)return;let s=()=>n(Math.min((e.clientWidth-48)/x.width,(e.clientHeight-80)/x.height));s();let o=new ResizeObserver(s);return o.observe(e),()=>o.disconnect()},[]),(0,t.jsx)("div",{ref:i,className:"tips-demo","data-closing":p||void 0,style:r===null?void 0:{"--fit":r},children:(0,t.jsx)(g,{tips:w,onClose:()=>{c(!0),window.setTimeout(()=>{l(e=>e+1),c(!1)},900)}},d)})}export{k as default};
