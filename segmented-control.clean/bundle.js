import{a as se}from"../shared/chunk-PWBCLQI6.js";import{a as X}from"../shared/chunk-LKG2PFLG.js";import{a as j}from"../shared/chunk-KHKHHDEU.js";import{b}from"../shared/chunk-MOQMIKSW.js";var U=b(X()),K=b(se());var ne=b(X()),oe=b(j()),t=b(j()),m=oe,o=ne;function D({options:c,value:h,defaultValue:S,onChange:L,size:k="md",variant:x="buttons",fullWidth:p=!1,kind:u="radio",disabled:d=!1,"aria-label":M,"aria-labelledby":C,className:Y}){let[G,J]=(0,o.useState)(()=>S??c.find(e=>!e.disabled)?.value),f=h===void 0?G:h,_=(0,o.useRef)(null),z=(0,o.useRef)(null),g=(0,o.useRef)(null),F=(0,o.useRef)(null),y=(0,o.useRef)(f);y.current=f;let E=(0,o.useRef)(!1),W=(0,o.useRef)(0),I=(0,o.useRef)(void 0),A=(0,o.useRef)(null),N=()=>Array.from(g.current?.querySelectorAll(":scope > .ui-segc__opt")??[]),R=c.findIndex(e=>e.value===f),Q=R>=0?R:c.findIndex(e=>!e.disabled),w=e=>{let a=c.find(i=>i.value===e);!a||a.disabled||d||e===y.current||(y.current=e,h===void 0&&J(e),L?.(e))},Z=()=>{let e=N();if(!e.length||!g.current)return;let a=getComputedStyle(e[0]),i=parseFloat(a.paddingLeft)+parseFloat(a.paddingRight),n=e.map(r=>r.firstElementChild.offsetWidth+i);p?(g.current.style.setProperty("--ui-segc-min",`${Math.max(...n)}px`),e.forEach(r=>r.style.width="")):e.forEach((r,s)=>r.style.width=`${n[s]}px`)},q=e=>{let a=g.current,i=F.current;if(!a||!i)return;let n=a.querySelector(":scope > .ui-segc__opt[data-active]");if(!n||!n.offsetWidth){i.style.opacity="0";return}let r=n.offsetLeft,s=n.offsetWidth;if(x==="underline"){let H=n.firstElementChild;r+=H.offsetLeft,s=H.offsetWidth}let l=!i.dataset.ready||!e&&!E.current,V=parseFloat(i.style.left)||0;!l&&r!==V&&(i.dataset.dir=r>V?"right":"left"),l&&(i.style.transition="none"),i.style.opacity="1",i.style.left=`${r}px`,i.style.right=`${a.clientWidth-r-s}px`,l&&(i.dataset.ready="1",i.offsetWidth,i.style.transition="")},B=()=>{let e=z.current;if(!e)return;let a=e.scrollWidth-e.clientWidth;_.current?.toggleAttribute("data-overflow",a>1),e.style.setProperty("--ui-segc-fade-l",e.scrollLeft>1?"24px":"0px"),e.style.setProperty("--ui-segc-fade-r",e.scrollLeft<a-1?"24px":"0px")},ee=e=>{let a=z.current,i=g.current,n=i?.querySelector(":scope > .ui-segc__opt[data-active]");if(!a||!i||!n||a.scrollWidth<=a.clientWidth+1)return;let r=i.offsetLeft+n.offsetLeft-(a.clientWidth-n.offsetWidth)/2;a.scrollTo({left:Math.max(0,r),behavior:e?"smooth":"auto"})};(0,o.useLayoutEffect)(()=>{let e=g.current,a=z.current;if(!e||!a)return;let i=()=>{Z(),q(!1),B()};i();let n=requestAnimationFrame(()=>_.current?.setAttribute("data-ready","")),r=0,s=new ResizeObserver(()=>{cancelAnimationFrame(r),r=requestAnimationFrame(i)});return s.observe(a),s.observe(e),e.querySelectorAll(".ui-segc__opt, .ui-segc__content").forEach(l=>s.observe(l)),()=>{s.disconnect(),cancelAnimationFrame(r),cancelAnimationFrame(n)}},[c.length,p,x,k]),(0,o.useLayoutEffect)(()=>{if(I.current===f)return;let e=I.current===void 0;I.current=f,e||(E.current=!0,clearTimeout(W.current),W.current=window.setTimeout(()=>E.current=!1,240)),q(!e),ee(!e);let a=g.current;!e&&a&&a.contains(document.activeElement)&&N()[R]?.focus({preventScroll:!0})},[f]),(0,o.useEffect)(()=>()=>clearTimeout(W.current),[]);let ae=e=>{let a=c.filter(l=>!l.disabled);if(!a.length||d)return;let i=u==="radio"?["ArrowLeft","ArrowUp"]:["ArrowLeft"],n=u==="radio"?["ArrowRight","ArrowDown"]:["ArrowRight"],r=a.findIndex(l=>l.value===y.current),s;i.includes(e.key)?s=a[(r-1+a.length)%a.length]:n.includes(e.key)?s=a[(r+1)%a.length]:e.key==="Home"?s=a[0]:e.key==="End"&&(s=a[a.length-1]),s&&(e.preventDefault(),w(s.value),N()[c.indexOf(s)]?.focus())},T=e=>{let a=-1,i=1/0;return N().forEach((n,r)=>{let s=n.getBoundingClientRect(),l=e<s.left?s.left-e:e>s.right?e-s.right:0;l<i&&(i=l,a=r)}),c[a]},P=()=>{A.current=null,_.current?.removeAttribute("data-pressed")},ie=e=>{if(d||e.button!==0)return;let a=T(e.clientX);if(!a||a.disabled)return;let i=e.pointerType==="touch",n=!i||a.value===y.current;if(A.current={id:e.pointerId,touch:i,drag:n,x:e.clientX,moved:!1},n&&_.current?.setAttribute("data-pressed",""),!i){w(a.value);try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}}},te=e=>{let a=A.current;if(!a||a.id!==e.pointerId||!a.moved&&Math.abs(e.clientX-a.x)<(a.touch?8:3)||(a.moved=!0,!a.drag))return;let i=T(e.clientX);i&&!i.disabled&&w(i.value)},re=e=>{let a=A.current;if(a&&a.id===e.pointerId){if(a.touch&&!a.moved){let i=T(e.clientX);i&&w(i.value)}P()}},v=u==="tabs";return(0,t.jsxs)("div",{ref:_,className:["ui-segc",Y].filter(Boolean).join(" "),"data-size":k,"data-variant":x,"data-full":p||void 0,"data-disabled":d||void 0,children:[(0,t.jsx)("style",{href:"ui-segmented-control-clean",precedence:"default",children:ce}),(0,t.jsx)("div",{ref:z,className:"ui-segc__scroller",onScroll:B,children:(0,t.jsxs)("div",{ref:g,className:"ui-segc__track",role:v?"tablist":"radiogroup","aria-label":M,"aria-labelledby":C,"aria-disabled":d||void 0,"aria-orientation":v?"horizontal":void 0,onKeyDown:ae,onPointerDown:ie,onPointerMove:te,onPointerUp:re,onPointerCancel:P,onLostPointerCapture:P,children:[(0,t.jsx)("span",{ref:F,className:"ui-segc__pill","aria-hidden":"true"}),c.map((e,a)=>{let i=a===R;return(0,t.jsx)("button",{type:"button",className:"ui-segc__opt",role:v?"tab":"radio","aria-checked":v?void 0:i,"aria-selected":v?i:void 0,"aria-controls":v?e.controls:void 0,"aria-label":e.ariaLabel,"data-active":i||void 0,disabled:e.disabled||d,tabIndex:a===Q?0:-1,onClick:()=>w(e.value),children:(0,t.jsxs)("span",{className:"ui-segc__content",children:[e.icon&&(0,t.jsx)("span",{className:"ui-segc__icon",children:e.icon}),e.label!=null&&(0,t.jsx)("span",{className:"ui-segc__label",children:e.label}),e.count!=null&&(0,t.jsx)("span",{className:"ui-segc__count",children:e.count},String(e.count)),e.badge!=null&&(0,t.jsx)("span",{className:"ui-segc__badge",children:e.badge})]})},e.value)})]})})]})}var ce=`
/* Animatable custom properties: the equal segment width and the soft edges glide too */
@property --ui-segc-min { syntax: "<length>"; inherits: true; initial-value: 0px; }
@property --ui-segc-fade-l { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --ui-segc-fade-r { syntax: "<length>"; inherits: false; initial-value: 0px; }

.ui-segc {
  --ui-segc-ink: rgba(0, 0, 0, 0.88);
  --ui-segc-text: rgba(0, 0, 0, 0.61);
  --ui-segc-hover-text: rgba(0, 0, 0, 0.75);
  --ui-segc-line: rgba(0, 0, 0, 0.06);
  --ui-segc-wash: rgba(0, 0, 0, 0.03);
  --ui-segc-fill: rgba(0, 0, 0, 0.06);
  --ui-segc-track: rgba(0, 0, 0, 0.04);
  --ui-segc-card: #ffffff;
  --ui-segc-card-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-segc-accent: rgba(0, 96, 226, 0.765);
  --ui-segc-accent-soft: rgba(0, 96, 226, 0.08);
  --ui-segc-focus: rgba(0, 96, 226, 0.35);
  --ui-segc-ease: cubic-bezier(0.25, 0.9, 0.3, 1);
  /* Size: md \u2013 28px chips, 4px 10px */
  --ui-segc-h: 28px;
  --ui-segc-px: 10px;
  --ui-segc-fs: 13px;
  --ui-segc-lh: 20px;
  --ui-segc-icon: 16px;
  --ui-segc-gap: 8px;
  --ui-segc-pad: 2px;
  --ui-segc-ring: 3px;
  box-sizing: border-box;
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  vertical-align: middle;
  border-radius: 8px;
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--ui-segc-fs);
  font-weight: 500;
  line-height: var(--ui-segc-lh);
  color: var(--ui-segc-text);
  -webkit-font-smoothing: antialiased;
}
.ui-segc[data-size="sm"] { --ui-segc-h: 24px; --ui-segc-px: 8px; --ui-segc-fs: 12px; --ui-segc-lh: 16px; --ui-segc-icon: 14px; --ui-segc-gap: 6px; }
.ui-segc[data-size="lg"] { --ui-segc-h: 32px; --ui-segc-px: 12px; --ui-segc-icon: 16px; --ui-segc-gap: 8px; }
.ui-segc[data-full] { display: flex; width: 100%; }
.ui-segc[data-disabled] { opacity: 0.5; pointer-events: none; }
.ui-segc *, .ui-segc *::before, .ui-segc *::after { box-sizing: border-box; }
:where(.ui-segc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; }
:where(.ui-segc) svg { display: block; flex: none; }

/* Scrolls sideways only when it doesn't fit; the padding keeps focus rings from being cut off */
.ui-segc__scroller {
  position: relative;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: var(--ui-segc-pad);
  border-radius: inherit;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 var(--ui-segc-fade-l), #000 calc(100% - var(--ui-segc-fade-r)), transparent);
  mask-image: linear-gradient(to right, transparent, #000 var(--ui-segc-fade-l), #000 calc(100% - var(--ui-segc-fade-r)), transparent);
  transition: --ui-segc-fade-l 160ms ease, --ui-segc-fade-r 160ms ease;
}
.ui-segc__scroller::-webkit-scrollbar { display: none; }

.ui-segc__track {
  position: relative;
  display: flex;
  width: max-content;
  min-width: 100%;
  /* Horizontal drags move the indicator; vertical ones still scroll the page */
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
/* When it scrolls, swipes scroll it instead of dragging the indicator */
.ui-segc[data-overflow] .ui-segc__track { touch-action: pan-x pan-y; }
/* Equal segments, each as wide as the widest one needs */
.ui-segc[data-full] .ui-segc__track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(var(--ui-segc-min), 1fr); }
.ui-segc[data-ready] .ui-segc__track { transition: --ui-segc-min 200ms var(--ui-segc-ease); }

/* An option */
.ui-segc__opt {
  position: relative;
  z-index: 1;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: var(--ui-segc-h);
  padding: 0 var(--ui-segc-px);
  overflow: clip;
  border-radius: 6px;
  white-space: nowrap;
  /* Hover washes are short and crisp, in and out */
  transition: color 90ms ease, background-color 90ms ease;
}
.ui-segc[data-ready]:not([data-full]) .ui-segc__opt { transition: color 90ms ease, background-color 90ms ease, width 200ms var(--ui-segc-ease); }
.ui-segc__opt[data-active] { color: var(--ui-segc-ink); }
.ui-segc__opt:disabled { opacity: 0.4; cursor: not-allowed; }
.ui-segc__opt:focus-visible { outline: 2px solid var(--ui-segc-focus); outline-offset: 1px; }
@media (hover: hover) {
  .ui-segc__opt:not([data-active]):not(:disabled):hover { background-color: var(--ui-segc-wash); }
}

.ui-segc__content { display: inline-flex; flex: none; align-items: center; gap: 6px; }
.ui-segc[data-size="sm"] .ui-segc__content { gap: 5px; }
.ui-segc__icon { display: grid; place-items: center; width: var(--ui-segc-icon); height: var(--ui-segc-icon); color: rgba(0, 0, 0, 0.447); transition: color 90ms ease; }
.ui-segc__opt[data-active] .ui-segc__icon { color: var(--ui-segc-ink); }
.ui-segc__icon svg { width: 100%; height: 100%; }
.ui-segc__label { display: block; }

.ui-segc__count {
  display: inline-grid;
  place-items: center;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 5px;
  background: var(--ui-segc-fill);
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--ui-segc-text);
  animation: ui-segc-in 200ms var(--ui-segc-ease) both;
}
.ui-segc__opt[data-active] .ui-segc__count { background: var(--ui-segc-card); box-shadow: 0 0 0 0.5px var(--ui-segc-line); color: var(--ui-segc-ink); }
.ui-segc[data-size="sm"] .ui-segc__count { min-width: 14px; height: 14px; padding: 0 3px; border-radius: 4px; font-size: 10px; line-height: 14px; }
.ui-segc__badge {
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  border-radius: 5px;
  background: var(--ui-segc-accent-soft);
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  color: var(--ui-segc-accent);
}
.ui-segc[data-size="sm"] .ui-segc__badge { height: 16px; padding: 0 5px; font-size: 10px; }

/* The indicator: left and right edges slide separately \u2013 the one facing the target leads a touch. Short and crisp */
.ui-segc__pill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 100%;
  z-index: 0;
  border-radius: 6px;
  background: var(--ui-segc-fill);
  opacity: 0;
  pointer-events: none;
  transition: left 200ms var(--ui-segc-ease), right 200ms var(--ui-segc-ease), scale 120ms var(--ui-segc-ease), opacity 120ms ease;
}
.ui-segc__pill[data-dir="right"] { transition-duration: 220ms, 160ms, 120ms, 120ms; }
.ui-segc__pill[data-dir="left"] { transition-duration: 160ms, 220ms, 120ms, 120ms; }
/* Press feedback: the indicator gives a little while held or dragged */
.ui-segc[data-pressed]:not([data-variant="underline"]) .ui-segc__pill { scale: 0.97; }

/* Buttons (default): separate chips with a hairline; the light-gray fill slides to the active one.
   The control reaches a few px past its box so focus rings are never clipped, and still lines up with its neighbours */
.ui-segc[data-variant="buttons"] { --ui-segc-pad: var(--ui-segc-ring); margin: calc(var(--ui-segc-ring) * -1); max-width: calc(100% + var(--ui-segc-ring) * 2); }
.ui-segc[data-variant="buttons"][data-full] { width: calc(100% + var(--ui-segc-ring) * 2); }
.ui-segc[data-variant="buttons"] .ui-segc__track { gap: var(--ui-segc-gap); }
.ui-segc[data-variant="buttons"] .ui-segc__opt { box-shadow: inset 0 0 0 0.5px var(--ui-segc-line); }

/* Tray: a compact light-gray track with a white raised pill */
.ui-segc[data-variant="tray"] { background: var(--ui-segc-track); }
.ui-segc[data-variant="tray"] .ui-segc__opt { height: calc(var(--ui-segc-h) - var(--ui-segc-pad) * 2); }
.ui-segc[data-variant="tray"] .ui-segc__pill { background: var(--ui-segc-card); box-shadow: var(--ui-segc-card-shadow); }

/* Underline: text tabs on a hairline */
.ui-segc[data-variant="underline"] { --ui-segc-px: 2px; --ui-segc-gap: 20px; border-radius: 0; box-shadow: inset 0 -0.5px 0 var(--ui-segc-line); }
.ui-segc[data-variant="underline"] .ui-segc__scroller { padding: 0; }
.ui-segc[data-variant="underline"]:not([data-full]) .ui-segc__track { gap: var(--ui-segc-gap); }
.ui-segc[data-variant="underline"][data-full] { --ui-segc-px: 10px; }
.ui-segc[data-variant="underline"] .ui-segc__opt { height: calc(var(--ui-segc-h) + 6px); }
.ui-segc[data-variant="underline"] .ui-segc__opt:focus-visible { outline-offset: -2px; }
.ui-segc[data-variant="underline"] .ui-segc__pill { top: auto; height: 1.5px; border-radius: 1.5px 1.5px 0 0; background: var(--ui-segc-ink); }
@media (hover: hover) {
  .ui-segc[data-variant="underline"] .ui-segc__opt:not([data-active]):not(:disabled):hover { background-color: transparent; color: var(--ui-segc-hover-text); }
}

@keyframes ui-segc-in { from { opacity: 0; transform: translateY(2px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Touch screens: every option at least 40px tall */
@media (hover: none) and (pointer: coarse) {
  .ui-segc[data-size] { --ui-segc-h: 40px; }
  .ui-segc[data-size="lg"] { --ui-segc-h: 44px; }
  .ui-segc[data-variant="tray"][data-size] { --ui-segc-h: 44px; }
  .ui-segc[data-variant="underline"] .ui-segc__opt { height: var(--ui-segc-h); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-segc *, .ui-segc *::before, .ui-segc *::after { animation: none !important; transition: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-segc {
  --ui-segc-ink: rgba(255, 255, 255, 0.9);
  --ui-segc-text: rgba(255, 255, 255, 0.62);
  --ui-segc-hover-text: rgba(255, 255, 255, 0.78);
  --ui-segc-line: rgba(255, 255, 255, 0.08);
  --ui-segc-wash: rgba(255, 255, 255, 0.04);
  --ui-segc-fill: rgba(255, 255, 255, 0.08);
  --ui-segc-track: rgba(255, 255, 255, 0.05);
  --ui-segc-card: #2c2c2f;
  --ui-segc-card-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-segc-accent: #4d8dff;
  --ui-segc-accent-soft: rgba(77, 141, 255, 0.14);
  --ui-segc-focus: rgba(77, 141, 255, 0.45);
}
:where(.dark, [data-theme="dark"]) .ui-segc__icon { color: rgba(255, 255, 255, 0.46); }
:where(.dark, [data-theme="dark"]) .ui-segc__opt[data-active] .ui-segc__icon { color: var(--ui-segc-ink); }
`,$=({d:c})=>(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,t.jsx)("path",{d:c})}),le=[{value:"overview",label:"Overview"},{value:"analytics",label:"Analytics"},{value:"reports",label:"Reports"},{value:"notifications",label:"Notifications",count:3}],ue=[{value:"list",label:"List",icon:(0,m.jsx)($,{d:"M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"})},{value:"board",label:"Board",icon:(0,m.jsx)($,{d:"M5 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM15 4h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"})},{value:"calendar",label:"Calendar",icon:(0,m.jsx)($,{d:"M8 3v3M16 3v3M4 9.5h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"})}],de=[{value:"monthly",label:"Monthly"},{value:"yearly",label:"Yearly",badge:"Save 20%"}],ge=["analytics","reports","notifications","overview"];function O(){let[c,h]=(0,o.useState)("overview"),[S,L]=(0,o.useState)("board"),[k,x]=(0,o.useState)("yearly"),p=(0,o.useRef)([]),u=(0,o.useId)(),d=()=>{p.current.forEach(clearTimeout),p.current=[]};return(0,o.useEffect)(()=>(p.current=ge.map((M,C)=>window.setTimeout(()=>h(M),1e3+C*1400)),d),[]),(0,t.jsx)("div",{className:"seg-demo seg-demo--clean",onPointerDownCapture:d,onKeyDownCapture:d,children:(0,t.jsxs)("div",{className:"seg-demo__card",children:[(0,t.jsxs)("div",{className:"seg-demo__row",children:[(0,t.jsx)("span",{className:"seg-demo__label",id:`${u}-section`,children:"Dashboard"}),(0,m.jsx)(D,{options:le,value:c,onChange:h,"aria-labelledby":`${u}-section`})]}),(0,t.jsxs)("div",{className:"seg-demo__row",children:[(0,t.jsx)("span",{className:"seg-demo__label",id:`${u}-view`,children:"Layout"}),(0,m.jsx)(D,{options:ue,value:S,onChange:L,size:"sm",variant:"tray","aria-labelledby":`${u}-view`})]}),(0,t.jsxs)("div",{className:"seg-demo__row",children:[(0,t.jsx)("span",{className:"seg-demo__label",id:`${u}-billing`,children:"Billing"}),(0,m.jsx)(D,{options:de,value:k,onChange:x,variant:"underline","aria-labelledby":`${u}-billing`})]})]})})}(0,K.createRoot)(document.getElementById("root")).render(U.default.createElement(O));
