import{a as G}from"./chunk-BBLBVXTT.js";import{a as O}from"./chunk-VXCLO5JM.js";import"./chunk-LKG2PFLG.js";import"./chunk-KHKHHDEU.js";import"./chunk-MOQMIKSW.js";var n=G(),a=O(),F=110;function he({items:d,index:p,defaultIndex:j,onIndexChange:L,onSelect:N,itemWidth:_=280,itemHeight:J=280,angle:D=50,reflection:W=!0,caption:X=!0,renderCaption:q,controls:R=!0,ticks:V=!0,sound:B=!1,"aria-label":Q="Cover flow",className:Z}){let w=d.length,g=Math.max(w-1,0),C=(e=>Math.min(Math.max(e,0),g))(p??j??Math.floor(g/2)),[v,ee]=(0,n.useState)(C),[te,ie]=(0,n.useState)(1),[k,ae]=(0,n.useState)(1),S=(0,n.useRef)(null),H=(0,n.useRef)([]),c=(0,n.useRef)({pos:C,target:C,vel:0,raf:0,last:0,active:C}),f=(0,n.useRef)({angle:D,scale:k,itemWidth:_,onIndexChange:L,sound:B,count:w});f.current={angle:D,scale:k,itemWidth:_,onIndexChange:L,sound:B,count:w};let T=(0,n.useRef)(!1);(0,n.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)");T.current=e.matches;let t=()=>T.current=e.matches;return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);let b=(0,n.useRef)(null),re=()=>{let e=b.current;if(!e||e.state!=="running")return;let t=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle",i.frequency.setValueAtTime(2200,t),i.frequency.exponentialRampToValueAtTime(900,t+.03),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.05,t+.004),r.gain.exponentialRampToValueAtTime(1e-4,t+.045),i.connect(r).connect(e.destination),i.start(t),i.stop(t+.05)},z=()=>{if(!f.current.sound)return;let e=window.AudioContext??window.webkitAudioContext;!b.current&&e&&(b.current=new e),b.current?.state==="suspended"&&b.current.resume()};(0,n.useEffect)(()=>()=>{b.current?.close()},[]);let l=(0,n.useCallback)(()=>{let{pos:e}=c.current,{angle:t,scale:i,itemWidth:r}=f.current,o=r*.78*i,u=r*.27*i,E=r*.7*i;H.current.forEach((m,fe)=>{if(!m)return;let A=fe-e,y=Math.abs(A);if(y>8){m.style.visibility="hidden";return}let M=Math.min(y,1),U=Math.sign(A),de=U*(M*o+Math.max(y-1,0)*u);m.style.visibility="";let le=1-M*.08-Math.min(Math.max(y-1,0),4)*.015;m.style.transform=`translate3d(${de}px, 0, ${-M*E}px) rotateY(${-U*M*t}deg) scale(${le.toFixed(4)})`,m.style.zIndex=String(1e3-Math.round(y*10)),m.style.setProperty("--ui-cf-t",M.toFixed(3)),m.style.setProperty("--ui-cf-d",Math.min(Math.max(A,-1.5),1.5).toFixed(3)),m.dataset.side=A<0?"left":"right"});let h=Math.round(Math.min(Math.max(e,0),f.current.count-1));h!==c.current.active&&(ie(h>c.current.active?1:-1),c.current.active=h,ee(h),f.current.onIndexChange?.(h),re())},[]),I=(0,n.useCallback)(()=>{let e=c.current;if(e.raf)return;e.last=performance.now();let t=i=>{let r=Math.min(i-e.last,32)/1e3;e.last=i;let o=2*Math.sqrt(190)*.92;if(e.vel+=(190*(e.target-e.pos)-o*e.vel)*r,e.pos+=e.vel*r,Math.abs(e.target-e.pos)<6e-4&&Math.abs(e.vel)<.002){e.pos=e.target,e.vel=0,e.raf=0,l();return}l(),e.raf=requestAnimationFrame(t)};e.raf=requestAnimationFrame(t)},[l]),s=(0,n.useCallback)(e=>{let t=c.current;t.target=Math.min(Math.max(Math.round(e),0),f.current.count-1),T.current?(t.pos=t.target,t.vel=0,l()):I()},[l,I]);(0,n.useEffect)(()=>()=>cancelAnimationFrame(c.current.raf),[]),(0,n.useEffect)(()=>{p!==void 0&&p!==Math.round(c.current.target)&&s(p)},[p,s]),(0,n.useEffect)(()=>{c.current.target>g?s(g):l()},[g,s,l]),(0,n.useLayoutEffect)(()=>{let e=S.current;if(!e)return;let t=()=>ae(Math.min(1,Math.max(.5,e.clientWidth/(_*3.2))));t();let i=new ResizeObserver(t);return i.observe(e),()=>i.disconnect()},[_]),(0,n.useLayoutEffect)(l);let P=(0,n.useRef)(0);(0,n.useEffect)(()=>{let e=S.current;if(!e)return;let t=i=>{let r=i.shiftKey&&!i.deltaX?i.deltaY:i.deltaX;if(Math.abs(r)<=Math.abs(i.deltaY)&&!i.shiftKey)return;i.preventDefault(),z();let o=c.current,u=F*f.current.scale*1.4;o.target=Math.min(Math.max(o.target+r/u,-.35),f.current.count-1+.35),I(),window.clearTimeout(P.current),P.current=window.setTimeout(()=>s(o.target+Math.sign(r)*.3),110)};return e.addEventListener("wheel",t,{passive:!1}),()=>{e.removeEventListener("wheel",t),window.clearTimeout(P.current)}},[I,s]);let $=(0,n.useRef)(null),ne=e=>{if(e.button!==0)return;z();let t=e.target.closest("[data-cf-index]");$.current={id:e.pointerId,x:e.clientX,from:c.current.pos,moved:!1,hit:t?Number(t.dataset.cfIndex):null,samples:[{x:e.clientX,t:performance.now()}]}},ce=e=>{let t=$.current;if(!t||t.id!==e.pointerId)return;let i=e.clientX-t.x;if(!t.moved){if(Math.abs(i)<6)return;t.moved=!0,e.currentTarget.setPointerCapture(e.pointerId),e.currentTarget.dataset.dragging=""}let r=c.current;cancelAnimationFrame(r.raf),r.raf=0;let o=t.from-i/(F*f.current.scale),u=f.current.count-1;o<0&&(o*=.3),o>u&&(o=u+(o-u)*.3),r.pos=r.target=o,r.vel=0,t.samples.push({x:e.clientX,t:performance.now()}),t.samples.length>6&&t.samples.shift(),l()},Y=e=>{let t=$.current;if(!t||t.id!==e.pointerId)return;if($.current=null,delete e.currentTarget.dataset.dragging,!t.moved){if(t.hit===null)return;t.hit===Math.round(c.current.target)?N?.(d[t.hit],t.hit):s(t.hit);return}let i=t.samples[0],r=t.samples[t.samples.length-1],o=Math.max(r.t-i.t,1),u=-((r.x-i.x)/o)*1e3/(F*f.current.scale),E=c.current;E.vel=T.current?0:u;let h=Math.round(E.pos+u*.18);Math.abs(u)>.8&&h===Math.round(t.from)&&(h+=Math.sign(u)),s(h)},oe=e=>{let t=Math.round(c.current.target),i={ArrowLeft:t-1,ArrowRight:t+1,Home:0,End:g};e.key in i?(e.preventDefault(),z(),s(i[e.key])):(e.key==="Enter"||e.key===" ")&&N&&e.target===e.currentTarget&&(e.preventDefault(),N(d[t],t))},x=d[v],se=Math.round(_*k),ue=Math.round(J*k),K=(e,t=!1)=>(0,a.jsx)("div",{className:"ui-cf__media",children:e.cover??(e.image?(0,a.jsx)("img",{src:e.image,alt:t?"":e.alt??e.title??"",draggable:!1,loading:"lazy",decoding:"async"}):null)});return(0,a.jsxs)("div",{className:["ui-cf",Z].filter(Boolean).join(" "),style:{"--ui-cf-w":`${se}px`,"--ui-cf-h":`${ue}px`},"data-reflection":W||void 0,children:[(0,a.jsx)("style",{href:"ui-cover-flow",precedence:"default",children:pe}),(0,a.jsx)("div",{ref:S,className:"ui-cf__viewport",role:"region","aria-roledescription":"carousel","aria-label":Q,tabIndex:0,onKeyDown:oe,onPointerDown:ne,onPointerMove:ce,onPointerUp:Y,onPointerCancel:Y,"data-selectable":N?"":void 0,children:(0,a.jsx)("div",{className:"ui-cf__stage",style:{perspective:`${Math.round(1e3*k)}px`},children:d.map((e,t)=>(0,a.jsxs)("div",{ref:i=>{H.current[t]=i},className:"ui-cf__item","data-cf-index":t,"data-active":t===v||void 0,role:"group","aria-roledescription":"slide","aria-label":`${t+1} of ${w}${e.title?`: ${e.title}`:""}`,"aria-hidden":t!==v||void 0,children:[(0,a.jsx)("div",{className:"ui-cf__ground","aria-hidden":"true"}),(0,a.jsx)("div",{className:"ui-cf__card",children:K(e)}),W&&(0,a.jsx)("div",{className:"ui-cf__reflection","aria-hidden":"true",inert:!0,children:(0,a.jsx)("div",{className:"ui-cf__card",children:K(e,!0)})})]},e.id))})}),(X||R||V)&&(0,a.jsxs)("div",{className:"ui-cf__footer",children:[(0,a.jsxs)("div",{className:"ui-cf__row",children:[R&&(0,a.jsx)("button",{type:"button",className:"ui-cf__nav","aria-label":"Previous",disabled:v===0,onClick:()=>s(Math.round(c.current.target)-1),children:(0,a.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M10 3.5 5.5 8l4.5 4.5"})})}),X&&(0,a.jsx)("div",{className:"ui-cf__caption","aria-live":"polite",children:(0,a.jsx)("div",{className:"ui-cf__caption-in","data-dir":te>0?"next":"prev",children:x&&(q?q(x,v):(0,a.jsxs)(a.Fragment,{children:[x.title&&(0,a.jsx)("div",{className:"ui-cf__title",children:x.title}),x.subtitle&&(0,a.jsx)("div",{className:"ui-cf__subtitle",children:x.subtitle})]}))},x?.id)}),R&&(0,a.jsx)("button",{type:"button",className:"ui-cf__nav","aria-label":"Next",disabled:v===g,onClick:()=>s(Math.round(c.current.target)+1),children:(0,a.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M6 3.5 10.5 8 6 12.5"})})})]}),V&&w>1&&(0,a.jsx)("div",{className:"ui-cf__ticks",children:d.map((e,t)=>(0,a.jsx)("button",{type:"button",tabIndex:-1,className:"ui-cf__tick","aria-label":`Show ${e.title??`cover ${t+1}`}`,"aria-current":t===v||void 0,onClick:()=>s(t)},e.id))})]})]})}var pe=`
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
`,me=[["Stone","#f4f4f5","#d4d4d8"],["Mint","#f0fbf7","#b6e4d3"],["Sky","#eff6ff","#bcd6fb"],["Sage","#f0f7f2","#bfdcc8"],["Blush","#fdf2f8","#f5b5d6"],["Sand","#fdfaf3","#ead9b8"],["Lilac","#f5f3ff","#cdc3f5"],["Ice","#f0faff","#b8e0f0"],["Peach","#fff7ed","#f6c9a4"],["Mist","#f8fafc","#cbd5e1"]].map(([d,p,j])=>({id:d,title:d,subtitle:`${p} \u2192 ${j}`.toUpperCase(),cover:(0,a.jsx)("div",{className:"cf-demo__gradient",style:{background:`linear-gradient(160deg, ${p}, ${j})`}})}));function xe(){return(0,a.jsx)("div",{className:"cf-demo",children:(0,a.jsx)(he,{items:me,defaultIndex:4,itemWidth:240,itemHeight:320,"aria-label":"Gradient collection"})})}export{xe as default};
