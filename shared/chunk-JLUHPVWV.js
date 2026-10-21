import{a as F}from"./chunk-BBLBVXTT.js";import{a as T}from"./chunk-VXCLO5JM.js";var n=F(),o=T();function ie({options:u,value:y,defaultValue:q,onChange:D,size:W="md",variant:w="tray",fullWidth:k=!1,kind:z="radio",disabled:g=!1,"aria-label":M,"aria-labelledby":X,className:U}){let[$,B]=(0,n.useState)(()=>q??u.find(e=>!e.disabled)?.value),c=y===void 0?$:y,f=(0,n.useRef)(null),m=(0,n.useRef)(null),d=(0,n.useRef)(null),E=(0,n.useRef)(null),h=(0,n.useRef)(c);h.current=c;let A=(0,n.useRef)(!1),j=(0,n.useRef)(0),R=(0,n.useRef)(void 0),v=(0,n.useRef)(null),b=()=>Array.from(d.current?.querySelectorAll(":scope > .ui-seg__opt")??[]),_=u.findIndex(e=>e.value===c),O=_>=0?_:u.findIndex(e=>!e.disabled),x=e=>{let i=u.find(t=>t.value===e);!i||i.disabled||g||e===h.current||(h.current=e,y===void 0&&B(e),D?.(e))},H=()=>{let e=b();if(!e.length||!d.current)return;let i=getComputedStyle(e[0]),t=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),s=e.map(a=>a.firstElementChild.offsetWidth+t);k?(d.current.style.setProperty("--ui-seg-min",`${Math.max(...s)}px`),e.forEach(a=>a.style.width="")):e.forEach((a,r)=>a.style.width=`${s[r]}px`)},S=e=>{let i=d.current,t=E.current;if(!i||!t)return;let s=i.querySelector(":scope > .ui-seg__opt[data-active]");if(!s||!s.offsetWidth){t.style.opacity="0";return}let a=s.offsetLeft,r=s.offsetWidth;if(w==="underline"){let C=s.firstElementChild;a+=C.offsetLeft,r=C.offsetWidth}let l=!t.dataset.ready||!e&&!A.current,P=parseFloat(t.style.left)||0;!l&&a!==P&&(t.dataset.dir=a>P?"right":"left"),l&&(t.style.transition="none"),t.style.opacity="1",t.style.left=`${a}px`,t.style.right=`${i.clientWidth-a-r}px`,l&&(t.dataset.ready="1",t.offsetWidth,t.style.transition="")},I=()=>{let e=m.current;if(!e)return;let i=e.scrollWidth-e.clientWidth;f.current?.toggleAttribute("data-overflow",i>1),e.style.setProperty("--ui-seg-fade-l",e.scrollLeft>1?"24px":"0px"),e.style.setProperty("--ui-seg-fade-r",e.scrollLeft<i-1?"24px":"0px")},V=e=>{let i=m.current,t=d.current,s=t?.querySelector(":scope > .ui-seg__opt[data-active]");if(!i||!t||!s||i.scrollWidth<=i.clientWidth+1)return;let a=t.offsetLeft+s.offsetLeft-(i.clientWidth-s.offsetWidth)/2;i.scrollTo({left:Math.max(0,a),behavior:e?"smooth":"auto"})};(0,n.useLayoutEffect)(()=>{let e=d.current,i=m.current;if(!e||!i)return;let t=()=>{H(),S(!1),I()};t();let s=requestAnimationFrame(()=>f.current?.setAttribute("data-ready","")),a=0,r=new ResizeObserver(()=>{cancelAnimationFrame(a),a=requestAnimationFrame(t)});return r.observe(i),r.observe(e),e.querySelectorAll(".ui-seg__opt, .ui-seg__content").forEach(l=>r.observe(l)),()=>{r.disconnect(),cancelAnimationFrame(a),cancelAnimationFrame(s)}},[u.length,k,w,W]),(0,n.useLayoutEffect)(()=>{if(R.current===c)return;let e=R.current===void 0;R.current=c,e||(A.current=!0,clearTimeout(j.current),j.current=window.setTimeout(()=>A.current=!1,440)),S(!e),V(!e);let i=d.current;!e&&i&&i.contains(document.activeElement)&&b()[_]?.focus({preventScroll:!0})},[c]),(0,n.useEffect)(()=>()=>clearTimeout(j.current),[]);let K=e=>{let i=u.filter(l=>!l.disabled);if(!i.length||g)return;let t=z==="radio"?["ArrowLeft","ArrowUp"]:["ArrowLeft"],s=z==="radio"?["ArrowRight","ArrowDown"]:["ArrowRight"],a=i.findIndex(l=>l.value===h.current),r;t.includes(e.key)?r=i[(a-1+i.length)%i.length]:s.includes(e.key)?r=i[(a+1)%i.length]:e.key==="Home"?r=i[0]:e.key==="End"&&(r=i[i.length-1]),r&&(e.preventDefault(),x(r.value),b()[u.indexOf(r)]?.focus())},L=e=>{let i=-1,t=1/0;return b().forEach((s,a)=>{let r=s.getBoundingClientRect(),l=e<r.left?r.left-e:e>r.right?e-r.right:0;l<t&&(t=l,i=a)}),u[i]},N=()=>{v.current=null,f.current?.removeAttribute("data-pressed")},Y=e=>{if(g||e.button!==0)return;let i=L(e.clientX);if(!i||i.disabled)return;let t=e.pointerType==="touch",s=!t||i.value===h.current;if(v.current={id:e.pointerId,touch:t,drag:s,x:e.clientX,moved:!1},s&&f.current?.setAttribute("data-pressed",""),!t){x(i.value);try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}}},G=e=>{let i=v.current;if(!i||i.id!==e.pointerId||!i.moved&&Math.abs(e.clientX-i.x)<(i.touch?8:3)||(i.moved=!0,!i.drag))return;let t=L(e.clientX);t&&!t.disabled&&x(t.value)},J=e=>{let i=v.current;if(i&&i.id===e.pointerId){if(i.touch&&!i.moved){let t=L(e.clientX);t&&x(t.value)}N()}},p=z==="tabs";return(0,o.jsxs)("div",{ref:f,className:["ui-seg",U].filter(Boolean).join(" "),"data-size":W,"data-variant":w,"data-full":k||void 0,"data-disabled":g||void 0,children:[(0,o.jsx)("style",{href:"ui-segmented-control",precedence:"default",children:Q}),(0,o.jsx)("div",{ref:m,className:"ui-seg__scroller",onScroll:I,children:(0,o.jsxs)("div",{ref:d,className:"ui-seg__track",role:p?"tablist":"radiogroup","aria-label":M,"aria-labelledby":X,"aria-disabled":g||void 0,"aria-orientation":p?"horizontal":void 0,onKeyDown:K,onPointerDown:Y,onPointerMove:G,onPointerUp:J,onPointerCancel:N,onLostPointerCapture:N,children:[(0,o.jsx)("span",{ref:E,className:"ui-seg__pill","aria-hidden":"true"}),u.map((e,i)=>{let t=i===_;return(0,o.jsx)("button",{type:"button",className:"ui-seg__opt",role:p?"tab":"radio","aria-checked":p?void 0:t,"aria-selected":p?t:void 0,"aria-controls":p?e.controls:void 0,"aria-label":e.ariaLabel,"data-active":t||void 0,disabled:e.disabled||g,tabIndex:i===O?0:-1,onClick:()=>x(e.value),children:(0,o.jsxs)("span",{className:"ui-seg__content",children:[e.icon&&(0,o.jsx)("span",{className:"ui-seg__icon",children:e.icon}),e.label!=null&&(0,o.jsxs)("span",{className:"ui-seg__label",children:[(0,o.jsx)("span",{className:"ui-seg__text",children:e.label}),(0,o.jsx)("span",{className:"ui-seg__text ui-seg__text-bold","aria-hidden":"true",children:e.label})]}),e.count!=null&&(0,o.jsx)("span",{className:"ui-seg__count",children:e.count},String(e.count)),e.badge!=null&&(0,o.jsx)("span",{className:"ui-seg__badge",children:e.badge})]})},e.value)})]})})]})}var Q=`
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

/* The indicator: left and right edges glide separately \u2013 the one facing the target leads, so it stretches and settles */
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
`;export{ie as a};
