import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t();function i({options:e,value:t,defaultValue:i,onChange:o,size:s=`md`,variant:c=`tray`,fullWidth:l=!1,kind:u=`radio`,disabled:d=!1,"aria-label":f,"aria-labelledby":p,className:m}){let[h,g]=(0,n.useState)(()=>i??e.find(e=>!e.disabled)?.value),_=t===void 0?h:t,v=(0,n.useRef)(null),y=(0,n.useRef)(null),b=(0,n.useRef)(null),x=(0,n.useRef)(null),S=(0,n.useRef)(_);S.current=_;let C=(0,n.useRef)(!1),w=(0,n.useRef)(0),T=(0,n.useRef)(void 0),E=(0,n.useRef)(null),D=()=>Array.from(b.current?.querySelectorAll(`:scope > .ui-seg__opt`)??[]),O=e.findIndex(e=>e.value===_),k=O>=0?O:e.findIndex(e=>!e.disabled),A=n=>{let r=e.find(e=>e.value===n);!r||r.disabled||d||n===S.current||(S.current=n,t===void 0&&g(n),o?.(n))},j=()=>{let e=D();if(!e.length||!b.current)return;let t=getComputedStyle(e[0]),n=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),r=e.map(e=>e.firstElementChild.offsetWidth+n);l?(b.current.style.setProperty(`--ui-seg-min`,`${Math.max(...r)}px`),e.forEach(e=>e.style.width=``)):e.forEach((e,t)=>e.style.width=`${r[t]}px`)},M=e=>{let t=b.current,n=x.current;if(!t||!n)return;let r=t.querySelector(`:scope > .ui-seg__opt[data-active]`);if(!r||!r.offsetWidth){n.style.opacity=`0`;return}let i=r.offsetLeft,a=r.offsetWidth;if(c===`underline`){let e=r.firstElementChild;i+=e.offsetLeft,a=e.offsetWidth}let o=!n.dataset.ready||!e&&!C.current,s=parseFloat(n.style.left)||0;!o&&i!==s&&(n.dataset.dir=i>s?`right`:`left`),o&&(n.style.transition=`none`),n.style.opacity=`1`,n.style.left=`${i}px`,n.style.right=`${t.clientWidth-i-a}px`,o&&(n.dataset.ready=`1`,n.offsetWidth,n.style.transition=``)},N=()=>{let e=y.current;if(!e)return;let t=e.scrollWidth-e.clientWidth;v.current?.toggleAttribute(`data-overflow`,t>1),e.style.setProperty(`--ui-seg-fade-l`,e.scrollLeft>1?`24px`:`0px`),e.style.setProperty(`--ui-seg-fade-r`,e.scrollLeft<t-1?`24px`:`0px`)},P=e=>{let t=y.current,n=b.current,r=n?.querySelector(`:scope > .ui-seg__opt[data-active]`);if(!t||!n||!r||t.scrollWidth<=t.clientWidth+1)return;let i=n.offsetLeft+r.offsetLeft-(t.clientWidth-r.offsetWidth)/2;t.scrollTo({left:Math.max(0,i),behavior:e?`smooth`:`auto`})};(0,n.useLayoutEffect)(()=>{let e=b.current,t=y.current;if(!e||!t)return;let n=()=>{j(),M(!1),N()};n();let r=requestAnimationFrame(()=>v.current?.setAttribute(`data-ready`,``)),i=0,a=new ResizeObserver(()=>{cancelAnimationFrame(i),i=requestAnimationFrame(n)});return a.observe(t),a.observe(e),e.querySelectorAll(`.ui-seg__opt, .ui-seg__content`).forEach(e=>a.observe(e)),()=>{a.disconnect(),cancelAnimationFrame(i),cancelAnimationFrame(r)}},[e.length,l,c,s]),(0,n.useLayoutEffect)(()=>{if(T.current===_)return;let e=T.current===void 0;T.current=_,e||(C.current=!0,clearTimeout(w.current),w.current=window.setTimeout(()=>C.current=!1,440)),M(!e),P(!e);let t=b.current;!e&&t&&t.contains(document.activeElement)&&D()[O]?.focus({preventScroll:!0})},[_]),(0,n.useEffect)(()=>()=>clearTimeout(w.current),[]);let F=t=>{let n=e.filter(e=>!e.disabled);if(!n.length||d)return;let r=u===`radio`?[`ArrowLeft`,`ArrowUp`]:[`ArrowLeft`],i=u===`radio`?[`ArrowRight`,`ArrowDown`]:[`ArrowRight`],a=n.findIndex(e=>e.value===S.current),o;r.includes(t.key)?o=n[(a-1+n.length)%n.length]:i.includes(t.key)?o=n[(a+1)%n.length]:t.key===`Home`?o=n[0]:t.key===`End`&&(o=n[n.length-1]),o&&(t.preventDefault(),A(o.value),D()[e.indexOf(o)]?.focus())},I=t=>{let n=-1,r=1/0;return D().forEach((e,i)=>{let a=e.getBoundingClientRect(),o=t<a.left?a.left-t:t>a.right?t-a.right:0;o<r&&(r=o,n=i)}),e[n]},L=()=>{E.current=null,v.current?.removeAttribute(`data-pressed`)},R=e=>{if(d||e.button!==0)return;let t=I(e.clientX);if(!t||t.disabled)return;let n=e.pointerType===`touch`,r=!n||t.value===S.current;if(E.current={id:e.pointerId,touch:n,drag:r,x:e.clientX,moved:!1},r&&v.current?.setAttribute(`data-pressed`,``),!n){A(t.value);try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}}},z=e=>{let t=E.current;if(!t||t.id!==e.pointerId||!t.moved&&Math.abs(e.clientX-t.x)<(t.touch?8:3)||(t.moved=!0,!t.drag))return;let n=I(e.clientX);n&&!n.disabled&&A(n.value)},B=e=>{let t=E.current;if(t&&t.id===e.pointerId){if(t.touch&&!t.moved){let t=I(e.clientX);t&&A(t.value)}L()}},V=u===`tabs`;return(0,r.jsxs)(`div`,{ref:v,className:[`ui-seg`,m].filter(Boolean).join(` `),"data-size":s,"data-variant":c,"data-full":l||void 0,"data-disabled":d||void 0,children:[(0,r.jsx)(`style`,{href:`ui-segmented-control`,precedence:`default`,children:a}),(0,r.jsx)(`div`,{ref:y,className:`ui-seg__scroller`,onScroll:N,children:(0,r.jsxs)(`div`,{ref:b,className:`ui-seg__track`,role:V?`tablist`:`radiogroup`,"aria-label":f,"aria-labelledby":p,"aria-disabled":d||void 0,"aria-orientation":V?`horizontal`:void 0,onKeyDown:F,onPointerDown:R,onPointerMove:z,onPointerUp:B,onPointerCancel:L,onLostPointerCapture:L,children:[(0,r.jsx)(`span`,{ref:x,className:`ui-seg__pill`,"aria-hidden":`true`}),e.map((e,t)=>{let n=t===O;return(0,r.jsx)(`button`,{type:`button`,className:`ui-seg__opt`,role:V?`tab`:`radio`,"aria-checked":V?void 0:n,"aria-selected":V?n:void 0,"aria-controls":V?e.controls:void 0,"aria-label":e.ariaLabel,"data-active":n||void 0,disabled:e.disabled||d,tabIndex:t===k?0:-1,onClick:()=>A(e.value),children:(0,r.jsxs)(`span`,{className:`ui-seg__content`,children:[e.icon&&(0,r.jsx)(`span`,{className:`ui-seg__icon`,children:e.icon}),e.label!=null&&(0,r.jsxs)(`span`,{className:`ui-seg__label`,children:[(0,r.jsx)(`span`,{className:`ui-seg__text`,children:e.label}),(0,r.jsx)(`span`,{className:`ui-seg__text ui-seg__text-bold`,"aria-hidden":`true`,children:e.label})]}),e.count!=null&&(0,r.jsx)(`span`,{className:`ui-seg__count`,children:e.count},String(e.count)),e.badge!=null&&(0,r.jsx)(`span`,{className:`ui-seg__badge`,children:e.badge})]})},e.value)})]})})]})}var a=`
/* Animatable custom properties: the equal segment width and the soft edges glide too */
@property --ui-seg-min { syntax: "<length>"; inherits: true; initial-value: 0px; }
@property --ui-seg-fade-l { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --ui-seg-fade-r { syntax: "<length>"; inherits: false; initial-value: 0px; }

.ui-seg {
  --ui-seg-tray: #f0f0f0;
  --ui-seg-pill: #ffffff;
  --ui-seg-line: #ececec;
  --ui-seg-ink: #171717;
  --ui-seg-text: #404040;
  --ui-seg-soft: #737373;
  --ui-seg-muted: #8f8f8f;
  --ui-seg-count: rgba(0, 0, 0, 0.06);
  --ui-seg-accent: #2f6bff;
  --ui-seg-accent-soft: rgba(47, 107, 255, 0.1);
  --ui-seg-pill-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.06);
  --ui-seg-focus: rgba(23, 23, 23, 0.22);
  --ui-seg-ease: cubic-bezier(0.22, 1, 0.36, 1);
  /* Size: md */
  --ui-seg-h: 30px;
  --ui-seg-px: 12px;
  --ui-seg-fs: 13.5px;
  --ui-seg-r: 11px;
  --ui-seg-pad: 3px;
  --ui-seg-icon: 15px;
  --ui-seg-gap: 20px;
  box-sizing: border-box;
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  vertical-align: middle;
  border-radius: var(--ui-seg-r);
  background: var(--ui-seg-tray);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--ui-seg-fs);
  line-height: 1;
  color: var(--ui-seg-soft);
  -webkit-font-smoothing: antialiased;
}
.ui-seg[data-size="sm"] { --ui-seg-h: 26px; --ui-seg-px: 10px; --ui-seg-fs: 12.5px; --ui-seg-r: 9px; --ui-seg-pad: 2px; --ui-seg-icon: 14px; --ui-seg-gap: 16px; }
.ui-seg[data-size="lg"] { --ui-seg-h: 36px; --ui-seg-px: 16px; --ui-seg-fs: 14px; --ui-seg-r: 13px; --ui-seg-pad: 4px; --ui-seg-icon: 16px; --ui-seg-gap: 24px; }
.ui-seg[data-full] { display: flex; width: 100%; }
.ui-seg[data-disabled] { opacity: 0.5; pointer-events: none; }
.ui-seg *, .ui-seg *::before, .ui-seg *::after { box-sizing: border-box; }
:where(.ui-seg) button { margin: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; }
:where(.ui-seg) svg { display: block; flex: none; }

/* Scrolls sideways only when it doesn't fit; the padding keeps focus rings from being cut off */
.ui-seg__scroller {
  position: relative;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: var(--ui-seg-pad);
  border-radius: inherit;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 var(--ui-seg-fade-l), #000 calc(100% - var(--ui-seg-fade-r)), transparent);
  mask-image: linear-gradient(to right, transparent, #000 var(--ui-seg-fade-l), #000 calc(100% - var(--ui-seg-fade-r)), transparent);
  transition: --ui-seg-fade-l 200ms ease, --ui-seg-fade-r 200ms ease;
}
.ui-seg__scroller::-webkit-scrollbar { display: none; }

.ui-seg__track {
  position: relative;
  display: flex;
  width: max-content;
  min-width: 100%;
  /* Horizontal drags move the pill; vertical ones still scroll the page */
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
/* When it scrolls, swipes scroll it instead of dragging the pill */
.ui-seg[data-overflow] .ui-seg__track { touch-action: pan-x pan-y; }
/* Equal segments, each as wide as the widest one needs */
.ui-seg[data-full] .ui-seg__track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(var(--ui-seg-min), 1fr); }
.ui-seg[data-ready] .ui-seg__track { transition: --ui-seg-min 320ms var(--ui-seg-ease); }

/* An option */
.ui-seg__opt {
  position: relative;
  z-index: 1;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: var(--ui-seg-h);
  padding: 0 var(--ui-seg-px);
  overflow: clip;
  border-radius: calc(var(--ui-seg-r) - var(--ui-seg-pad));
  white-space: nowrap;
  transition: color 200ms ease;
}
.ui-seg[data-ready]:not([data-full]) .ui-seg__opt { transition: color 200ms ease, width 320ms var(--ui-seg-ease); }
.ui-seg__opt[data-active] { color: var(--ui-seg-ink); }
.ui-seg__opt:disabled { opacity: 0.4; cursor: not-allowed; }
.ui-seg__opt:focus-visible { outline: 2px solid var(--ui-seg-focus); outline-offset: 0; }
@media (hover: hover) {
  .ui-seg__opt:not([data-active]):not(:disabled):hover { color: var(--ui-seg-text); }
}

.ui-seg__content { display: inline-flex; flex: none; align-items: center; gap: 6px; }
.ui-seg__icon { display: grid; place-items: center; width: var(--ui-seg-icon); height: var(--ui-seg-icon); }
.ui-seg__icon svg { width: 100%; height: 100%; }

/* Regular and semibold copies of the label crossfade */
.ui-seg__label { display: grid; justify-items: center; }
.ui-seg__text { grid-area: 1 / 1; font-weight: 500; transition: opacity 200ms ease; }
.ui-seg__text-bold { font-weight: 600; opacity: 0; }
.ui-seg__opt[data-active] .ui-seg__text { opacity: 0; }
.ui-seg__opt[data-active] .ui-seg__text-bold { opacity: 1; }

.ui-seg__count {
  display: inline-grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--ui-seg-count);
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--ui-seg-text);
  animation: ui-seg-in 260ms var(--ui-seg-ease) both;
}
.ui-seg[data-size="sm"] .ui-seg__count { min-width: 16px; height: 16px; padding: 0 4px; font-size: 10.5px; }
.ui-seg__badge {
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  border-radius: 6px;
  background: var(--ui-seg-accent-soft);
  font-size: 11px;
  font-weight: 500;
  color: var(--ui-seg-accent);
}

/* The indicator: left and right edges glide separately – the one facing the target leads, so it stretches and settles */
.ui-seg__pill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 100%;
  z-index: 0;
  border-radius: calc(var(--ui-seg-r) - var(--ui-seg-pad));
  background: var(--ui-seg-pill);
  box-shadow: var(--ui-seg-pill-shadow);
  opacity: 0;
  pointer-events: none;
  transition: left 380ms var(--ui-seg-ease), right 380ms var(--ui-seg-ease), scale 200ms var(--ui-seg-ease), opacity 160ms ease;
}
.ui-seg__pill[data-dir="right"] { transition-duration: 400ms, 270ms, 200ms, 160ms; }
.ui-seg__pill[data-dir="left"] { transition-duration: 270ms, 400ms, 200ms, 160ms; }
/* Press feedback: the pill gives a little while held or dragged */
.ui-seg[data-pressed]:not([data-variant="underline"]) .ui-seg__pill { scale: 0.97; }

/* Underline variant: text tabs on a hairline */
.ui-seg[data-variant="underline"] { --ui-seg-px: 2px; border-radius: 0; background: none; box-shadow: inset 0 -1px 0 var(--ui-seg-line); }
.ui-seg[data-variant="underline"] .ui-seg__scroller { padding: 0; }
.ui-seg[data-variant="underline"]:not([data-full]) .ui-seg__track { gap: var(--ui-seg-gap); }
.ui-seg[data-variant="underline"][data-full] { --ui-seg-px: 10px; }
.ui-seg[data-variant="underline"] .ui-seg__opt { height: calc(var(--ui-seg-h) + 6px); border-radius: 6px; }
.ui-seg[data-variant="underline"] .ui-seg__opt:focus-visible { outline-offset: -2px; }
.ui-seg[data-variant="underline"] .ui-seg__pill { top: auto; height: 2px; border-radius: 2px 2px 0 0; background: var(--ui-seg-ink); box-shadow: none; }

@keyframes ui-seg-in { from { opacity: 0; transform: translateY(3px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Touch screens: every option at least 40px tall */
@media (hover: none) and (pointer: coarse) {
  .ui-seg[data-size] { --ui-seg-h: 40px; }
  .ui-seg[data-size="lg"] { --ui-seg-h: 44px; }
  .ui-seg[data-variant="underline"] .ui-seg__opt { height: var(--ui-seg-h); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-seg *, .ui-seg *::before, .ui-seg *::after { animation: none !important; transition: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-seg {
  --ui-seg-tray: #111113;
  --ui-seg-pill: #26262a;
  --ui-seg-line: #2a2a2e;
  --ui-seg-ink: #ededed;
  --ui-seg-text: #c8c8cc;
  --ui-seg-soft: #8b8b92;
  --ui-seg-muted: #8b8b92;
  --ui-seg-count: rgba(255, 255, 255, 0.08);
  --ui-seg-accent: #6d8bff;
  --ui-seg-accent-soft: rgba(109, 139, 255, 0.14);
  --ui-seg-pill-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-seg-focus: rgba(255, 255, 255, 0.3);
}
`;export{i as t};