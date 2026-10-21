import{a as be}from"../shared/chunk-PWBCLQI6.js";import{a as Q}from"../shared/chunk-LKG2PFLG.js";import{a as j}from"../shared/chunk-KHKHHDEU.js";import{b as x}from"../shared/chunk-MOQMIKSW.js";var ee=x(Q()),te=x(be());var _e=x(Q()),xe=x(j()),a=x(j()),W=xe,n=_e,D=110;function we({items:d,index:m,defaultIndex:C,onIndexChange:X,onSelect:I,itemWidth:w=280,itemHeight:ie=280,angle:q=50,reflection:B=!0,caption:V=!0,renderCaption:H,controls:z=!0,ticks:Y=!0,sound:K=!1,"aria-label":ae="Cover flow",className:re}){let k=d.length,g=Math.max(k-1,0),R=(e=>Math.min(Math.max(e,0),g))(m??C??Math.floor(g/2)),[v,ne]=(0,n.useState)(R),[oe,ce]=(0,n.useState)(1),[y,ue]=(0,n.useState)(1),P=(0,n.useRef)(null),U=(0,n.useRef)([]),o=(0,n.useRef)({pos:R,target:R,vel:0,raf:0,last:0,active:R}),f=(0,n.useRef)({angle:q,scale:y,itemWidth:w,onIndexChange:X,sound:K,count:k});f.current={angle:q,scale:y,itemWidth:w,onIndexChange:X,sound:K,count:k};let T=(0,n.useRef)(!1);(0,n.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)");T.current=e.matches;let t=()=>T.current=e.matches;return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);let _=(0,n.useRef)(null),se=()=>{let e=_.current;if(!e||e.state!=="running")return;let t=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle",i.frequency.setValueAtTime(2200,t),i.frequency.exponentialRampToValueAtTime(900,t+.03),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.05,t+.004),r.gain.exponentialRampToValueAtTime(1e-4,t+.045),i.connect(r).connect(e.destination),i.start(t),i.stop(t+.05)},F=()=>{if(!f.current.sound)return;let e=window.AudioContext??window.webkitAudioContext;!_.current&&e&&(_.current=new e),_.current?.state==="suspended"&&_.current.resume()};(0,n.useEffect)(()=>()=>{_.current?.close()},[]);let l=(0,n.useCallback)(()=>{let{pos:e}=o.current,{angle:t,scale:i,itemWidth:r}=f.current,c=r*.78*i,s=r*.27*i,A=r*.7*i;U.current.forEach((h,he)=>{if(!h)return;let S=he-e,M=Math.abs(S);if(M>8){h.style.visibility="hidden";return}let N=Math.min(M,1),J=Math.sign(S),ge=J*(N*c+Math.max(M-1,0)*s);h.style.visibility="";let ve=1-N*.08-Math.min(Math.max(M-1,0),4)*.015;h.style.transform=`translate3d(${ge}px, 0, ${-N*A}px) rotateY(${-J*N*t}deg) scale(${ve.toFixed(4)})`,h.style.zIndex=String(1e3-Math.round(M*10)),h.style.setProperty("--ui-cf-t",N.toFixed(3)),h.style.setProperty("--ui-cf-d",Math.min(Math.max(S,-1.5),1.5).toFixed(3)),h.dataset.side=S<0?"left":"right"});let p=Math.round(Math.min(Math.max(e,0),f.current.count-1));p!==o.current.active&&(ce(p>o.current.active?1:-1),o.current.active=p,ne(p),f.current.onIndexChange?.(p),se())},[]),E=(0,n.useCallback)(()=>{let e=o.current;if(e.raf)return;e.last=performance.now();let t=i=>{let r=Math.min(i-e.last,32)/1e3;e.last=i;let c=2*Math.sqrt(190)*.92;if(e.vel+=(190*(e.target-e.pos)-c*e.vel)*r,e.pos+=e.vel*r,Math.abs(e.target-e.pos)<6e-4&&Math.abs(e.vel)<.002){e.pos=e.target,e.vel=0,e.raf=0,l();return}l(),e.raf=requestAnimationFrame(t)};e.raf=requestAnimationFrame(t)},[l]),u=(0,n.useCallback)(e=>{let t=o.current;t.target=Math.min(Math.max(Math.round(e),0),f.current.count-1),T.current?(t.pos=t.target,t.vel=0,l()):E()},[l,E]);(0,n.useEffect)(()=>()=>cancelAnimationFrame(o.current.raf),[]),(0,n.useEffect)(()=>{m!==void 0&&m!==Math.round(o.current.target)&&u(m)},[m,u]),(0,n.useEffect)(()=>{o.current.target>g?u(g):l()},[g,u,l]),(0,n.useLayoutEffect)(()=>{let e=P.current;if(!e)return;let t=()=>ue(Math.min(1,Math.max(.5,e.clientWidth/(w*3.2))));t();let i=new ResizeObserver(t);return i.observe(e),()=>i.disconnect()},[w]),(0,n.useLayoutEffect)(l);let L=(0,n.useRef)(0);(0,n.useEffect)(()=>{let e=P.current;if(!e)return;let t=i=>{let r=i.shiftKey&&!i.deltaX?i.deltaY:i.deltaX;if(Math.abs(r)<=Math.abs(i.deltaY)&&!i.shiftKey)return;i.preventDefault(),F();let c=o.current,s=D*f.current.scale*1.4;c.target=Math.min(Math.max(c.target+r/s,-.35),f.current.count-1+.35),E(),window.clearTimeout(L.current),L.current=window.setTimeout(()=>u(c.target+Math.sign(r)*.3),110)};return e.addEventListener("wheel",t,{passive:!1}),()=>{e.removeEventListener("wheel",t),window.clearTimeout(L.current)}},[E,u]);let $=(0,n.useRef)(null),fe=e=>{if(e.button!==0)return;F();let t=e.target.closest("[data-cf-index]");$.current={id:e.pointerId,x:e.clientX,from:o.current.pos,moved:!1,hit:t?Number(t.dataset.cfIndex):null,samples:[{x:e.clientX,t:performance.now()}]}},de=e=>{let t=$.current;if(!t||t.id!==e.pointerId)return;let i=e.clientX-t.x;if(!t.moved){if(Math.abs(i)<6)return;t.moved=!0,e.currentTarget.setPointerCapture(e.pointerId),e.currentTarget.dataset.dragging=""}let r=o.current;cancelAnimationFrame(r.raf),r.raf=0;let c=t.from-i/(D*f.current.scale),s=f.current.count-1;c<0&&(c*=.3),c>s&&(c=s+(c-s)*.3),r.pos=r.target=c,r.vel=0,t.samples.push({x:e.clientX,t:performance.now()}),t.samples.length>6&&t.samples.shift(),l()},G=e=>{let t=$.current;if(!t||t.id!==e.pointerId)return;if($.current=null,delete e.currentTarget.dataset.dragging,!t.moved){if(t.hit===null)return;t.hit===Math.round(o.current.target)?I?.(d[t.hit],t.hit):u(t.hit);return}let i=t.samples[0],r=t.samples[t.samples.length-1],c=Math.max(r.t-i.t,1),s=-((r.x-i.x)/c)*1e3/(D*f.current.scale),A=o.current;A.vel=T.current?0:s;let p=Math.round(A.pos+s*.18);Math.abs(s)>.8&&p===Math.round(t.from)&&(p+=Math.sign(s)),u(p)},le=e=>{let t=Math.round(o.current.target),i={ArrowLeft:t-1,ArrowRight:t+1,Home:0,End:g};e.key in i?(e.preventDefault(),F(),u(i[e.key])):(e.key==="Enter"||e.key===" ")&&I&&e.target===e.currentTarget&&(e.preventDefault(),I(d[t],t))},b=d[v],pe=Math.round(w*y),me=Math.round(ie*y),O=(e,t=!1)=>(0,a.jsx)("div",{className:"ui-cf__media",children:e.cover??(e.image?(0,a.jsx)("img",{src:e.image,alt:t?"":e.alt??e.title??"",draggable:!1,loading:"lazy",decoding:"async"}):null)});return(0,a.jsxs)("div",{className:["ui-cf",re].filter(Boolean).join(" "),style:{"--ui-cf-w":`${pe}px`,"--ui-cf-h":`${me}px`},"data-reflection":B||void 0,children:[(0,a.jsx)("style",{href:"ui-cover-flow",precedence:"default",children:ke}),(0,a.jsx)("div",{ref:P,className:"ui-cf__viewport",role:"region","aria-roledescription":"carousel","aria-label":ae,tabIndex:0,onKeyDown:le,onPointerDown:fe,onPointerMove:de,onPointerUp:G,onPointerCancel:G,"data-selectable":I?"":void 0,children:(0,a.jsx)("div",{className:"ui-cf__stage",style:{perspective:`${Math.round(1e3*y)}px`},children:d.map((e,t)=>(0,a.jsxs)("div",{ref:i=>{U.current[t]=i},className:"ui-cf__item","data-cf-index":t,"data-active":t===v||void 0,role:"group","aria-roledescription":"slide","aria-label":`${t+1} of ${k}${e.title?`: ${e.title}`:""}`,"aria-hidden":t!==v||void 0,children:[(0,a.jsx)("div",{className:"ui-cf__ground","aria-hidden":"true"}),(0,a.jsx)("div",{className:"ui-cf__card",children:O(e)}),B&&(0,a.jsx)("div",{className:"ui-cf__reflection","aria-hidden":"true",inert:!0,children:(0,a.jsx)("div",{className:"ui-cf__card",children:O(e,!0)})})]},e.id))})}),(V||z||Y)&&(0,a.jsxs)("div",{className:"ui-cf__footer",children:[(0,a.jsxs)("div",{className:"ui-cf__row",children:[z&&(0,a.jsx)("button",{type:"button",className:"ui-cf__nav","aria-label":"Previous",disabled:v===0,onClick:()=>u(Math.round(o.current.target)-1),children:(0,a.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M10 3.5 5.5 8l4.5 4.5"})})}),V&&(0,a.jsx)("div",{className:"ui-cf__caption","aria-live":"polite",children:(0,a.jsx)("div",{className:"ui-cf__caption-in","data-dir":oe>0?"next":"prev",children:b&&(H?H(b,v):(0,W.jsxs)(W.Fragment,{children:[b.title&&(0,a.jsx)("div",{className:"ui-cf__title",children:b.title}),b.subtitle&&(0,a.jsx)("div",{className:"ui-cf__subtitle",children:b.subtitle})]}))},b?.id)}),z&&(0,a.jsx)("button",{type:"button",className:"ui-cf__nav","aria-label":"Next",disabled:v===g,onClick:()=>u(Math.round(o.current.target)+1),children:(0,a.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M6 3.5 10.5 8 6 12.5"})})})]}),Y&&k>1&&(0,a.jsx)("div",{className:"ui-cf__ticks",children:d.map((e,t)=>(0,a.jsx)("button",{type:"button",tabIndex:-1,className:"ui-cf__tick","aria-label":`Show ${e.title??`cover ${t+1}`}`,"aria-current":t===v||void 0,onClick:()=>u(t)},e.id))})]})]})}var ke=`
.ui-cf {
  --ui-cf-ink: #171717;
  --ui-cf-muted: #8a8a8a;
  --ui-cf-card: #f1f1f1;
  --ui-cf-edge: rgba(0, 0, 0, 0.08);
  --ui-cf-dim: rgba(255, 255, 255, 0.24);
  --ui-cf-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 10px 20px -12px rgba(0, 0, 0, 0.18);
  --ui-cf-reflect: 0.22;
  --ui-cf-ground: rgba(0, 0, 0, 0.16);
  --ui-cf-tick: rgba(0, 0, 0, 0.16);
  --ui-cf-nav: #ffffff;
  --ui-cf-nav-line: #e7e7e7;
  --ui-cf-focus: rgba(23, 23, 23, 0.25);
  --ui-cf-ease: cubic-bezier(0.22, 1, 0.36, 1);
  display: grid;
  gap: 4px;
  width: 100%;
  min-width: 0;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Soft fade on both sides, so the stacks run out instead of being cut off */
.ui-cf__viewport {
  position: relative;
  overflow: hidden;
  padding: calc(var(--ui-cf-h) * 0.08) 0 0;
  height: calc(var(--ui-cf-h) * 1.08);
  border-radius: 12px;
  outline: none;
  cursor: grab;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent);
}
.ui-cf[data-reflection] .ui-cf__viewport { height: calc(var(--ui-cf-h) * 1.4); }
.ui-cf__viewport[data-dragging] { cursor: grabbing; }
.ui-cf__viewport:focus-visible .ui-cf__item[data-active] .ui-cf__card {
  box-shadow: var(--ui-cf-shadow), 0 0 0 3px var(--ui-cf-focus);
}

.ui-cf__stage {
  position: relative;
  height: var(--ui-cf-h);
  transform-style: preserve-3d;
}
.ui-cf__item {
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--ui-cf-w);
  height: var(--ui-cf-h);
  margin-left: calc(var(--ui-cf-w) / -2);
  transform-style: preserve-3d;
  will-change: transform;
}
.ui-cf__viewport[data-selectable] .ui-cf__item[data-active] { cursor: pointer; }
.ui-cf__card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: var(--ui-cf-card);
  box-shadow: var(--ui-cf-shadow);
}
.ui-cf__media {
  position: absolute;
  inset: 0 -8%;
  transform: translateX(calc(var(--ui-cf-d, 0) * -5%));
}
.ui-cf__media > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
/* A soft shadow on the floor that fades as a cover turns away */
.ui-cf__ground {
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: -3px;
  height: 8px;
  border-radius: 50%;
  background: var(--ui-cf-ground);
  filter: blur(5px);
  opacity: calc(1 - var(--ui-cf-t, 0) * 0.7);
  pointer-events: none;
}
/* Hairline edge, a dim that grows as a cover turns away, and a sheen on the side facing the light */
.ui-cf__card::before,
.ui-cf__card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}
.ui-cf__card::before {
  z-index: 2;
  box-shadow: inset 0 0 0 1px var(--ui-cf-edge);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.22), transparent 45%);
  opacity: calc(var(--ui-cf-t, 0) * 0.9);
}
.ui-cf__item[data-side="right"] .ui-cf__card::before {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.22), transparent 45%);
}
.ui-cf__card::after {
  z-index: 1;
  background: var(--ui-cf-dim);
  opacity: var(--ui-cf-t, 0);
}

/* The floor: a flipped copy that fades out \u2013 a mask, so it works on any background */
.ui-cf__reflection {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 32%;
  margin-top: 2px;
  overflow: hidden;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, var(--ui-cf-reflect)), transparent 85%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, var(--ui-cf-reflect)), transparent 85%);
}
.ui-cf__reflection > .ui-cf__card {
  height: var(--ui-cf-h);
  transform: scaleY(-1);
  transform-origin: 50% calc(var(--ui-cf-h) / 2);
  box-shadow: none;
}
.ui-cf__reflection > .ui-cf__card {
  position: absolute;
  bottom: auto;
  top: 0;
}

/* Caption with previous / next on either side, position ticks below */
.ui-cf__footer {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 14px;
  margin-top: calc(var(--ui-cf-h) * -0.04);
}
.ui-cf:not([data-reflection]) .ui-cf__footer { margin-top: 12px; }
.ui-cf__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 44px;
}
.ui-cf__ticks {
  display: flex;
  align-items: center;
  gap: 2px;
}
.ui-cf__tick {
  display: grid;
  place-items: center;
  width: 14px;
  height: 14px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}
.ui-cf__tick::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: var(--ui-cf-tick);
  transition: width 320ms var(--ui-cf-ease), background-color 200ms ease;
}
.ui-cf__tick[aria-current]::before {
  width: 14px;
  background: var(--ui-cf-ink);
}
.ui-cf__tick:hover::before { background: var(--ui-cf-muted); }
.ui-cf__tick[aria-current]:hover::before { background: var(--ui-cf-ink); }
.ui-cf__caption {
  display: grid;
  min-width: min(220px, 50vw);
  text-align: center;
}
.ui-cf__caption-in { animation: ui-cf-in 420ms var(--ui-cf-ease) both; }
.ui-cf__caption-in[data-dir="prev"] { animation-name: ui-cf-in-prev; }
.ui-cf__title {
  color: var(--ui-cf-ink);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.35;
}
.ui-cf__subtitle {
  color: var(--ui-cf-muted);
  font-size: 13px;
  line-height: 1.4;
}
.ui-cf__nav {
  display: grid;
  place-items: center;
  flex: none;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--ui-cf-nav);
  box-shadow: inset 0 0 0 1px var(--ui-cf-nav-line), 0 1px 2px rgba(0, 0, 0, 0.05);
  color: var(--ui-cf-ink);
  cursor: pointer;
  transition: transform 160ms var(--ui-cf-ease), opacity 160ms ease;
}
.ui-cf__nav:active { transform: scale(0.92); }
.ui-cf__nav:disabled { opacity: 0.35; cursor: default; transform: none; }
.ui-cf__nav:focus-visible { outline: 2px solid var(--ui-cf-focus); outline-offset: 2px; }
.ui-cf__nav svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}
@media (pointer: coarse) {
  .ui-cf__nav { width: 40px; height: 40px; }
}

/* The caption rises in from the direction of travel */
@keyframes ui-cf-in {
  from { opacity: 0; transform: translate(14px, 4px); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-cf-in-prev {
  from { opacity: 0; transform: translate(-14px, 4px); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-cf__caption-in { animation: none; }
  .ui-cf__media { transform: none; }
  .ui-cf__tick::before { transition: none; }
  .ui-cf__nav { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-cf {
  --ui-cf-ink: #ededed;
  --ui-cf-muted: #8f8f8f;
  --ui-cf-card: #1d1d20;
  --ui-cf-edge: rgba(255, 255, 255, 0.1);
  --ui-cf-dim: rgba(0, 0, 0, 0.5);
  --ui-cf-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 12px 24px -14px rgba(0, 0, 0, 0.6);
  --ui-cf-reflect: 0.3;
  --ui-cf-ground: rgba(0, 0, 0, 0.45);
  --ui-cf-tick: rgba(255, 255, 255, 0.2);
  --ui-cf-nav: #1d1d20;
  --ui-cf-nav-line: rgba(255, 255, 255, 0.1);
  --ui-cf-focus: rgba(255, 255, 255, 0.35);
}
`,ye=[["Stone","#f4f4f5","#d4d4d8"],["Mint","#f0fbf7","#b6e4d3"],["Sky","#eff6ff","#bcd6fb"],["Sage","#f0f7f2","#bfdcc8"],["Blush","#fdf2f8","#f5b5d6"],["Sand","#fdfaf3","#ead9b8"],["Lilac","#f5f3ff","#cdc3f5"],["Ice","#f0faff","#b8e0f0"],["Peach","#fff7ed","#f6c9a4"],["Mist","#f8fafc","#cbd5e1"]].map(([d,m,C])=>({id:d,title:d,subtitle:`${m} \u2192 ${C}`.toUpperCase(),cover:(0,a.jsx)("div",{className:"cf-demo__gradient",style:{background:`linear-gradient(160deg, ${m}, ${C})`}})}));function Z(){return(0,a.jsx)("div",{className:"cf-demo",children:(0,W.jsx)(we,{items:ye,defaultIndex:4,itemWidth:240,itemHeight:320,"aria-label":"Gradient collection"})})}(0,te.createRoot)(document.getElementById("root")).render(ee.default.createElement(Z));
