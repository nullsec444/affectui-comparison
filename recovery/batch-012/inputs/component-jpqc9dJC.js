import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t(),i=[`Thinking`,`Searching the web`,`Reading sources`,`Writing response`],a=Array.from({length:8},(e,t)=>t);function o({phases:e=i,interval:t=2200,phase:o,loop:c=!1,done:l=!1,doneLabel:u=e=>`Thought for ${e}s`,size:d=`md`,variant:f=`pill`,className:p}){let[m,h]=(0,n.useState)(0),[g,_]=(0,n.useState)(()=>Date.now()),[v,y]=(0,n.useState)(null),b=v??Math.max(1,Math.round((Date.now()-g)/1e3));l&&v===null&&y(b),!l&&v!==null&&(y(null),_(Date.now()),h(0)),(0,n.useEffect)(()=>{if(l||o!==void 0||e.length<2)return;let n=window.setInterval(()=>{h(t=>t+1<e.length?t+1:c?0:t)},t);return()=>window.clearInterval(n)},[l,o,e.length,t,c]);let x=Math.min(Math.max(o??m,0),Math.max(e.length-1,0)),S=l?typeof u==`function`?u(b):u:e[x]??``,[C,w]=(0,n.useState)({key:0,text:S}),[T,E]=(0,n.useState)(null);S!==C.text&&(E(C),w({key:C.key+1,text:S}));let D=(0,n.useRef)(null),O=(0,n.useRef)(null),k=(0,n.useRef)(!1);return(0,n.useLayoutEffect)(()=>{let e=D.current,t=O.current;e&&t&&(k.current||(e.style.transition=`none`),e.style.width=`${t.offsetWidth+1}px`,k.current||=(e.getBoundingClientRect(),e.style.transition=``,!0))},[C.key]),(0,r.jsxs)(`span`,{className:[`ui-tl`,p].filter(Boolean).join(` `),"data-size":d,"data-variant":f,"data-done":l||void 0,role:`status`,"aria-live":`polite`,children:[(0,r.jsx)(`style`,{href:`ui-thinking-loader`,precedence:`default`,children:s}),(0,r.jsxs)(`span`,{className:`ui-tl__icon`,"aria-hidden":`true`,children:[(0,r.jsx)(`svg`,{className:`ui-tl__spinner`,viewBox:`0 0 16 16`,children:a.map(e=>(0,r.jsx)(`line`,{x1:`8`,y1:`1.75`,x2:`8`,y2:`4.75`,transform:`rotate(${e*45} 8 8)`,style:{animationDelay:`${(e-8)*100}ms`}},e))}),(0,r.jsx)(`svg`,{className:`ui-tl__check`,viewBox:`0 0 16 16`,children:(0,r.jsx)(`path`,{d:`M3.5 8.4 6.6 11.3 12.5 4.9`,pathLength:1})})]}),(0,r.jsxs)(`span`,{ref:D,className:`ui-tl__text`,children:[T&&(0,r.jsx)(`span`,{className:`ui-tl__label ui-tl__label--out`,"aria-hidden":`true`,onAnimationEnd:()=>E(null),children:T.text},T.key),(0,r.jsx)(`span`,{ref:O,className:[`ui-tl__label`,C.key>0&&`ui-tl__label--in`,!l&&`ui-tl__shine`].filter(Boolean).join(` `),"data-text":C.text,children:C.text},C.key)]})]})}var s=`
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
`;export{o as t};