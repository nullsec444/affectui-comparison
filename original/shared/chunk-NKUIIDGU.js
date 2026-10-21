import{a as v}from"./chunk-BBLBVXTT.js";import{a as w}from"./chunk-H7MXNYVQ.js";var e=v(),i=w(),B=["Thinking","Searching the web","Reading sources","Writing response"],E=Array.from({length:8},(l,r)=>r);function A({phases:l=B,interval:r=2200,phase:s,loop:f=!1,done:n=!1,doneLabel:u=d=>`Thought for ${d}s`,size:j="md",variant:S="pill",className:N}){let[d,m]=(0,e.useState)(0),[z,D]=(0,e.useState)(()=>Date.now()),[p,x]=(0,e.useState)(null),g=p??Math.max(1,Math.round((Date.now()-z)/1e3));n&&p===null&&x(g),!n&&p!==null&&(x(null),D(Date.now()),m(0)),(0,e.useEffect)(()=>{if(n||s!==void 0||l.length<2)return;let t=window.setInterval(()=>{m(o=>o+1<l.length?o+1:f?0:o)},r);return()=>window.clearInterval(t)},[n,s,l.length,r,f]);let M=Math.min(Math.max(s??d,0),Math.max(l.length-1,0)),h=n?typeof u=="function"?u(g):u:l[M]??"",[a,R]=(0,e.useState)({key:0,text:h}),[c,_]=(0,e.useState)(null);h!==a.text&&(_(a),R({key:a.key+1,text:h}));let b=(0,e.useRef)(null),k=(0,e.useRef)(null),y=(0,e.useRef)(!1);return(0,e.useLayoutEffect)(()=>{let t=b.current,o=k.current;t&&o&&(y.current||(t.style.transition="none"),t.style.width=`${o.offsetWidth+1}px`,y.current||=(t.getBoundingClientRect(),t.style.transition="",!0))},[a.key]),(0,i.jsxs)("span",{className:["ui-tl",N].filter(Boolean).join(" "),"data-size":j,"data-variant":S,"data-done":n||void 0,role:"status","aria-live":"polite",children:[(0,i.jsx)("style",{href:"ui-thinking-loader",precedence:"default",children:I}),(0,i.jsxs)("span",{className:"ui-tl__icon","aria-hidden":"true",children:[(0,i.jsx)("svg",{className:"ui-tl__spinner",viewBox:"0 0 16 16",children:E.map(t=>(0,i.jsx)("line",{x1:"8",y1:"1.75",x2:"8",y2:"4.75",transform:`rotate(${t*45} 8 8)`,style:{animationDelay:`${(t-8)*100}ms`}},t))}),(0,i.jsx)("svg",{className:"ui-tl__check",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9",pathLength:1})})]}),(0,i.jsxs)("span",{ref:b,className:"ui-tl__text",children:[c&&(0,i.jsx)("span",{className:"ui-tl__label ui-tl__label--out","aria-hidden":"true",onAnimationEnd:()=>_(null),children:c.text},c.key),(0,i.jsx)("span",{ref:k,className:["ui-tl__label",a.key>0&&"ui-tl__label--in",!n&&"ui-tl__shine"].filter(Boolean).join(" "),"data-text":a.text,children:a.text},a.key)]})]})}var I=`
.ui-tl {
  --ui-tl-ink: #171717;
  --ui-tl-text: #6b6b6b;
  --ui-tl-ray: #171717;
  --ui-tl-bg: #ffffff;
  --ui-tl-line: #e7e7e7;
  --ui-tl-shine: rgba(255, 255, 255, 0.82);
  --ui-tl-done: #171717;
  --ui-tl-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tl-h: 34px;
  --ui-tl-font: 14px;
  --ui-tl-icon: 15px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  height: var(--ui-tl-h);
  padding: 0 15px 0 12px;
  border-radius: 999px;
  background: var(--ui-tl-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tl-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  color: var(--ui-tl-text);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--ui-tl-font);
  font-weight: 450;
  line-height: 1;
  letter-spacing: -0.006em;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
}
.ui-tl[data-size="sm"] {
  --ui-tl-h: 28px;
  --ui-tl-font: 13px;
  --ui-tl-icon: 13px;
  gap: 7px;
  padding: 0 12px 0 10px;
}
.ui-tl[data-variant="plain"] {
  padding: 0;
  background: none;
  box-shadow: none;
}

/* Spinner and check share one square and swap with a little scale */
.ui-tl__icon {
  position: relative;
  flex: none;
  width: var(--ui-tl-icon);
  height: var(--ui-tl-icon);
}
.ui-tl__icon svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  transition: opacity 240ms ease, transform 420ms var(--ui-tl-ease);
}
.ui-tl__spinner line {
  stroke: var(--ui-tl-ray);
  stroke-width: 1.6;
  stroke-linecap: round;
  opacity: 0.18;
  animation: ui-tl-ray 800ms linear infinite;
}
.ui-tl__check {
  opacity: 0;
  transform: scale(0.6);
  fill: none;
  stroke: var(--ui-tl-done);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ui-tl__check path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}
.ui-tl[data-done] .ui-tl__spinner {
  opacity: 0;
  transform: scale(0.6) rotate(-45deg);
}
.ui-tl[data-done] .ui-tl__check {
  opacity: 1;
  transform: none;
}
.ui-tl[data-done] .ui-tl__check path {
  animation: ui-tl-draw 360ms var(--ui-tl-ease) 120ms forwards;
}

/* The text box glides to the width of the incoming label; labels roll through it */
.ui-tl__text {
  position: relative;
  display: block;
  height: 1.3em;
  overflow: hidden;
  transition: width 460ms var(--ui-tl-ease);
}
.ui-tl__label {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1.3em;
  white-space: nowrap;
}
.ui-tl[data-done] .ui-tl__label {
  color: var(--ui-tl-ink);
}
.ui-tl__label--in {
  animation: ui-tl-in 460ms var(--ui-tl-ease) both;
}
.ui-tl__label--out {
  animation: ui-tl-out 320ms var(--ui-tl-ease) both;
}

/* A soft light sweeping over the label while it works */
.ui-tl__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tl-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tl-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tl-ray {
  0% { opacity: 1; }
  100% { opacity: 0.18; }
}
@keyframes ui-tl-in {
  from { opacity: 0; transform: translateY(70%); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tl-out {
  from { opacity: 1; transform: none; filter: none; }
  to { opacity: 0; transform: translateY(-70%); filter: blur(3px); }
}
@keyframes ui-tl-draw {
  to { stroke-dashoffset: 0; }
}
@keyframes ui-tl-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tl *,
  .ui-tl *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tl__spinner line { opacity: 0.6; }
  .ui-tl__shine::after { display: none; }
  .ui-tl__check path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tl {
  --ui-tl-ink: #ededed;
  --ui-tl-text: #8f8f8f;
  --ui-tl-ray: #ededed;
  --ui-tl-bg: #161618;
  --ui-tl-line: rgba(255, 255, 255, 0.1);
  --ui-tl-shine: rgba(255, 255, 255, 0.95);
  --ui-tl-done: #ededed;
}
`;export{A as a};
