import{a as $}from"../shared/chunk-PWBCLQI6.js";import{a as T}from"../shared/chunk-LKG2PFLG.js";import{a as b}from"../shared/chunk-KHKHHDEU.js";import{b as s}from"../shared/chunk-MOQMIKSW.js";var E=s(T()),M=s($());var A=s(T()),Y=s(b()),t=s(b()),L=Y,e=A,q=["Thinking","Searching the web","Reading sources","Writing response"],O=Array.from({length:8},(i,l)=>l);function U({phases:i=q,interval:l=2200,phase:c,loop:u=!1,done:n=!1,doneLabel:d=h=>`Thought for ${h}s`,size:p="md",variant:z="pill",className:B}){let[h,k]=(0,e.useState)(0),[I,j]=(0,e.useState)(()=>Date.now()),[m,y]=(0,e.useState)(null),w=m??Math.max(1,Math.round((Date.now()-I)/1e3));n&&m===null&&y(w),!n&&m!==null&&(y(null),j(Date.now()),k(0)),(0,e.useEffect)(()=>{if(n||c!==void 0||i.length<2)return;let a=window.setInterval(()=>{k(r=>r+1<i.length?r+1:u?0:r)},l);return()=>window.clearInterval(a)},[n,c,i.length,l,u]);let C=Math.min(Math.max(c??h,0),Math.max(i.length-1,0)),f=n?typeof d=="function"?d(w):d:i[C]??"",[o,W]=(0,e.useState)({key:0,text:f}),[g,v]=(0,e.useState)(null);f!==o.text&&(v(o),W({key:o.key+1,text:f}));let S=(0,e.useRef)(null),N=(0,e.useRef)(null),R=(0,e.useRef)(!1);return(0,e.useLayoutEffect)(()=>{let a=S.current,r=N.current;a&&r&&(R.current||(a.style.transition="none"),a.style.width=`${r.offsetWidth+1}px`,R.current||=(a.getBoundingClientRect(),a.style.transition="",!0))},[o.key]),(0,t.jsxs)("span",{className:["ui-tlc",B].filter(Boolean).join(" "),"data-size":p,"data-variant":z,"data-done":n||void 0,role:"status","aria-live":"polite",children:[(0,t.jsx)("style",{href:"ui-thinking-loader-clean",precedence:"default",children:V}),(0,t.jsxs)("span",{className:"ui-tlc__icon","aria-hidden":"true",children:[(0,t.jsx)("svg",{className:"ui-tlc__spinner",viewBox:"0 0 16 16",children:O.map(a=>(0,t.jsx)("line",{x1:"8",y1:"1.75",x2:"8",y2:"4.75",transform:`rotate(${a*45} 8 8)`,style:{animationDelay:`${(a-8)*100}ms`}},a))}),(0,t.jsx)("svg",{className:"ui-tlc__check",viewBox:"0 0 16 16",children:(0,t.jsx)("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9",pathLength:1})})]}),(0,t.jsxs)("span",{ref:S,className:"ui-tlc__text",children:[g&&(0,t.jsx)("span",{className:"ui-tlc__label ui-tlc__label--out","aria-hidden":"true",onAnimationEnd:()=>v(null),children:g.text},g.key),(0,t.jsx)("span",{ref:N,className:["ui-tlc__label",o.key>0&&"ui-tlc__label--in",!n&&"ui-tlc__shine"].filter(Boolean).join(" "),"data-text":o.text,children:o.text},o.key)]})]})}var V=`
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
`,x=["Thinking","Searching the web","Reading 12 sources","Comparing pricing","Writing response"],_=2e3,F=2600;function D(){let[i,l]=(0,e.useState)(0),[c,u]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{let n=window.setTimeout(()=>u(!0),x.length*_),d=window.setTimeout(()=>{u(!1),l(p=>p+1)},x.length*_+F);return()=>{window.clearTimeout(n),window.clearTimeout(d)}},[i]),(0,t.jsx)("div",{className:"tl-demo tl-demo--clean",children:(0,t.jsxs)("div",{className:"tl-demo__chat",children:[(0,t.jsx)("p",{className:"tl-demo__you",children:"Which CRM fits a 10-person sales team best?"}),(0,L.jsx)(U,{phases:x,interval:_,done:c},i)]})})}(0,M.createRoot)(document.getElementById("root")).render(E.default.createElement(D));
