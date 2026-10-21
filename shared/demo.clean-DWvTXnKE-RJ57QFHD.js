import{a as S}from"./chunk-BBLBVXTT.js";import{a as N}from"./chunk-VXCLO5JM.js";import"./chunk-LKG2PFLG.js";import"./chunk-KHKHHDEU.js";import"./chunk-MOQMIKSW.js";var e=S(),t=N(),E=["Thinking","Searching the web","Reading sources","Writing response"],I=Array.from({length:8},(a,r)=>r);function C({phases:a=E,interval:r=2200,phase:s,loop:c=!1,done:n=!1,doneLabel:u=h=>`Thought for ${h}s`,size:d="md",variant:T="pill",className:R}){let[h,b]=(0,e.useState)(0),[M,z]=(0,e.useState)(()=>Date.now()),[p,_]=(0,e.useState)(null),k=p??Math.max(1,Math.round((Date.now()-M)/1e3));n&&p===null&&_(k),!n&&p!==null&&(_(null),z(Date.now()),b(0)),(0,e.useEffect)(()=>{if(n||s!==void 0||a.length<2)return;let i=window.setInterval(()=>{b(o=>o+1<a.length?o+1:c?0:o)},r);return()=>window.clearInterval(i)},[n,s,a.length,r,c]);let D=Math.min(Math.max(s??h,0),Math.max(a.length-1,0)),f=n?typeof u=="function"?u(k):u:a[D]??"",[l,B]=(0,e.useState)({key:0,text:f}),[m,w]=(0,e.useState)(null);f!==l.text&&(w(l),B({key:l.key+1,text:f}));let y=(0,e.useRef)(null),v=(0,e.useRef)(null),j=(0,e.useRef)(!1);return(0,e.useLayoutEffect)(()=>{let i=y.current,o=v.current;i&&o&&(j.current||(i.style.transition="none"),i.style.width=`${o.offsetWidth+1}px`,j.current||=(i.getBoundingClientRect(),i.style.transition="",!0))},[l.key]),(0,t.jsxs)("span",{className:["ui-tlc",R].filter(Boolean).join(" "),"data-size":d,"data-variant":T,"data-done":n||void 0,role:"status","aria-live":"polite",children:[(0,t.jsx)("style",{href:"ui-thinking-loader-clean",precedence:"default",children:W}),(0,t.jsxs)("span",{className:"ui-tlc__icon","aria-hidden":"true",children:[(0,t.jsx)("svg",{className:"ui-tlc__spinner",viewBox:"0 0 16 16",children:I.map(i=>(0,t.jsx)("line",{x1:"8",y1:"1.75",x2:"8",y2:"4.75",transform:`rotate(${i*45} 8 8)`,style:{animationDelay:`${(i-8)*100}ms`}},i))}),(0,t.jsx)("svg",{className:"ui-tlc__check",viewBox:"0 0 16 16",children:(0,t.jsx)("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9",pathLength:1})})]}),(0,t.jsxs)("span",{ref:y,className:"ui-tlc__text",children:[m&&(0,t.jsx)("span",{className:"ui-tlc__label ui-tlc__label--out","aria-hidden":"true",onAnimationEnd:()=>w(null),children:m.text},m.key),(0,t.jsx)("span",{ref:v,className:["ui-tlc__label",l.key>0&&"ui-tlc__label--in",!n&&"ui-tlc__shine"].filter(Boolean).join(" "),"data-text":l.text,children:l.text},l.key)]})]})}var W=`
.ui-tlc {
  --ui-tlc-ink: rgba(0, 0, 0, 0.88);
  --ui-tlc-text: rgba(0, 0, 0, 0.61);
  --ui-tlc-accent: rgba(0, 96, 226, 0.765);
  --ui-tlc-bg: #ffffff;
  --ui-tlc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-tlc-shine: rgba(255, 255, 255, 0.82);
  --ui-tlc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tlc-h: 32px;
  --ui-tlc-font: 13px;
  --ui-tlc-lh: 20px;
  --ui-tlc-icon: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;
  height: var(--ui-tlc-h);
  padding: 0 10px 0 8px;
  border-radius: 8px;
  background: var(--ui-tlc-bg);
  box-shadow: var(--ui-tlc-shadow);
  color: var(--ui-tlc-text);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--ui-tlc-font);
  font-weight: 500;
  line-height: var(--ui-tlc-lh);
  letter-spacing: -0.003em;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
}
.ui-tlc[data-size="sm"] {
  --ui-tlc-h: 26px;
  --ui-tlc-font: 12px;
  --ui-tlc-lh: 16px;
  --ui-tlc-icon: 14px;
  gap: 5px;
  padding: 0 8px 0 6px;
  border-radius: 6px;
}
.ui-tlc[data-variant="plain"] {
  height: auto;
  padding: 0;
  background: none;
  box-shadow: none;
}

/* Spinner and check share one square and swap with a little scale */
.ui-tlc__icon {
  position: relative;
  flex: none;
  width: var(--ui-tlc-icon);
  height: var(--ui-tlc-icon);
}
.ui-tlc__icon svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  transition: opacity 240ms ease, transform 420ms var(--ui-tlc-ease);
}
/* Thin rays in the accent blue \u2013 they fade one after another, so the spinner turns without rotating */
.ui-tlc__spinner line {
  stroke: var(--ui-tlc-accent);
  stroke-width: 1.1;
  stroke-linecap: round;
  opacity: 0.2;
  animation: ui-tlc-ray 800ms linear infinite;
}
.ui-tlc__check {
  opacity: 0;
  transform: scale(0.6);
  fill: none;
  stroke: var(--ui-tlc-accent);
  stroke-width: 1.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ui-tlc__check path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}
.ui-tlc[data-done] .ui-tlc__spinner {
  opacity: 0;
  transform: scale(0.6) rotate(-45deg);
}
.ui-tlc[data-done] .ui-tlc__check {
  opacity: 1;
  transform: none;
}
.ui-tlc[data-done] .ui-tlc__check path {
  animation: ui-tlc-draw 360ms var(--ui-tlc-ease) 120ms forwards;
}

/* The text box glides to the width of the incoming label; labels roll through it */
.ui-tlc__text {
  position: relative;
  display: block;
  height: var(--ui-tlc-lh);
  overflow: hidden;
  transition: width 460ms var(--ui-tlc-ease);
}
.ui-tlc__label {
  position: absolute;
  top: 0;
  left: 0;
  line-height: var(--ui-tlc-lh);
  white-space: nowrap;
}
.ui-tlc[data-done] .ui-tlc__label {
  color: var(--ui-tlc-ink);
}
.ui-tlc__label--in {
  animation: ui-tlc-in 460ms var(--ui-tlc-ease) both;
}
.ui-tlc__label--out {
  animation: ui-tlc-out 320ms var(--ui-tlc-ease) both;
}

/* A darker band sweeping through the gray label while it works */
.ui-tlc__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tlc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tlc-sweep 1.6s linear infinite;
  pointer-events: none;
}

@keyframes ui-tlc-ray {
  0% { opacity: 1; }
  100% { opacity: 0.2; }
}
@keyframes ui-tlc-in {
  from { opacity: 0; transform: translateY(70%); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tlc-out {
  from { opacity: 1; transform: none; filter: none; }
  to { opacity: 0; transform: translateY(-70%); filter: blur(3px); }
}
@keyframes ui-tlc-draw {
  to { stroke-dashoffset: 0; }
}
@keyframes ui-tlc-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tlc *,
  .ui-tlc *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tlc__spinner line { opacity: 0.6; }
  .ui-tlc__shine::after { display: none; }
  .ui-tlc__check path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tlc {
  --ui-tlc-ink: rgba(255, 255, 255, 0.9);
  --ui-tlc-text: rgba(255, 255, 255, 0.62);
  --ui-tlc-accent: #4d8dff;
  --ui-tlc-bg: #1c1c1e;
  --ui-tlc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-tlc-shine: #ffffff;
}
`,g=["Thinking","Searching the web","Reading 12 sources","Comparing pricing","Writing response"],x=2e3,$=2600;function Y(){let[a,r]=(0,e.useState)(0),[s,c]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{let n=window.setTimeout(()=>c(!0),g.length*x),u=window.setTimeout(()=>{c(!1),r(d=>d+1)},g.length*x+$);return()=>{window.clearTimeout(n),window.clearTimeout(u)}},[a]),(0,t.jsx)("div",{className:"tl-demo tl-demo--clean",children:(0,t.jsxs)("div",{className:"tl-demo__chat",children:[(0,t.jsx)("p",{className:"tl-demo__you",children:"Which CRM fits a 10-person sales team best?"}),(0,t.jsx)(C,{phases:g,interval:x,done:s},a)]})})}export{Y as default};
