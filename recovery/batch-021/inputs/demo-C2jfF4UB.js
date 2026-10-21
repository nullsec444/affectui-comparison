import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t(),i=110;function a({items:e,index:t,defaultIndex:a,onIndexChange:s,onSelect:c,itemWidth:l=280,itemHeight:u=280,angle:d=50,reflection:f=!0,caption:p=!0,renderCaption:m,controls:h=!0,ticks:g=!0,sound:_=!1,"aria-label":v=`Cover flow`,className:y}){let b=e.length,x=Math.max(b-1,0),S=(e=>Math.min(Math.max(e,0),x))(t??a??Math.floor(x/2)),[C,w]=(0,n.useState)(S),[T,E]=(0,n.useState)(1),[D,O]=(0,n.useState)(1),k=(0,n.useRef)(null),A=(0,n.useRef)([]),j=(0,n.useRef)({pos:S,target:S,vel:0,raf:0,last:0,active:S}),M=(0,n.useRef)({angle:d,scale:D,itemWidth:l,onIndexChange:s,sound:_,count:b});M.current={angle:d,scale:D,itemWidth:l,onIndexChange:s,sound:_,count:b};let N=(0,n.useRef)(!1);(0,n.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);N.current=e.matches;let t=()=>N.current=e.matches;return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);let P=(0,n.useRef)(null),F=()=>{let e=P.current;if(!e||e.state!==`running`)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`triangle`,n.frequency.setValueAtTime(2200,t),n.frequency.exponentialRampToValueAtTime(900,t+.03),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.05,t+.004),r.gain.exponentialRampToValueAtTime(1e-4,t+.045),n.connect(r).connect(e.destination),n.start(t),n.stop(t+.05)},I=()=>{if(!M.current.sound)return;let e=window.AudioContext??window.webkitAudioContext;!P.current&&e&&(P.current=new e),P.current?.state===`suspended`&&P.current.resume()};(0,n.useEffect)(()=>()=>void P.current?.close(),[]);let L=(0,n.useCallback)(()=>{let{pos:e}=j.current,{angle:t,scale:n,itemWidth:r}=M.current,i=r*.78*n,a=r*.27*n,o=r*.7*n;A.current.forEach((n,r)=>{if(!n)return;let s=r-e,c=Math.abs(s);if(c>8){n.style.visibility=`hidden`;return}let l=Math.min(c,1),u=Math.sign(s),d=u*(l*i+Math.max(c-1,0)*a);n.style.visibility=``;let f=1-l*.08-Math.min(Math.max(c-1,0),4)*.015;n.style.transform=`translate3d(${d}px, 0, ${-l*o}px) rotateY(${-u*l*t}deg) scale(${f.toFixed(4)})`,n.style.zIndex=String(1e3-Math.round(c*10)),n.style.setProperty(`--ui-cf-t`,l.toFixed(3)),n.style.setProperty(`--ui-cf-d`,Math.min(Math.max(s,-1.5),1.5).toFixed(3)),n.dataset.side=s<0?`left`:`right`});let s=Math.round(Math.min(Math.max(e,0),M.current.count-1));s!==j.current.active&&(E(s>j.current.active?1:-1),j.current.active=s,w(s),M.current.onIndexChange?.(s),F())},[]),R=(0,n.useCallback)(()=>{let e=j.current;if(e.raf)return;e.last=performance.now();let t=n=>{let r=Math.min(n-e.last,32)/1e3;e.last=n;let i=2*Math.sqrt(190)*.92;if(e.vel+=(190*(e.target-e.pos)-i*e.vel)*r,e.pos+=e.vel*r,Math.abs(e.target-e.pos)<6e-4&&Math.abs(e.vel)<.002){e.pos=e.target,e.vel=0,e.raf=0,L();return}L(),e.raf=requestAnimationFrame(t)};e.raf=requestAnimationFrame(t)},[L]),z=(0,n.useCallback)(e=>{let t=j.current;t.target=Math.min(Math.max(Math.round(e),0),M.current.count-1),N.current?(t.pos=t.target,t.vel=0,L()):R()},[L,R]);(0,n.useEffect)(()=>()=>cancelAnimationFrame(j.current.raf),[]),(0,n.useEffect)(()=>{t!==void 0&&t!==Math.round(j.current.target)&&z(t)},[t,z]),(0,n.useEffect)(()=>{j.current.target>x?z(x):L()},[x,z,L]),(0,n.useLayoutEffect)(()=>{let e=k.current;if(!e)return;let t=()=>O(Math.min(1,Math.max(.5,e.clientWidth/(l*3.2))));t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[l]),(0,n.useLayoutEffect)(L);let B=(0,n.useRef)(0);(0,n.useEffect)(()=>{let e=k.current;if(!e)return;let t=e=>{let t=e.shiftKey&&!e.deltaX?e.deltaY:e.deltaX;if(Math.abs(t)<=Math.abs(e.deltaY)&&!e.shiftKey)return;e.preventDefault(),I();let n=j.current,r=i*M.current.scale*1.4;n.target=Math.min(Math.max(n.target+t/r,-.35),M.current.count-1+.35),R(),window.clearTimeout(B.current),B.current=window.setTimeout(()=>z(n.target+Math.sign(t)*.3),110)};return e.addEventListener(`wheel`,t,{passive:!1}),()=>{e.removeEventListener(`wheel`,t),window.clearTimeout(B.current)}},[R,z]);let V=(0,n.useRef)(null),H=e=>{if(e.button!==0)return;I();let t=e.target.closest(`[data-cf-index]`);V.current={id:e.pointerId,x:e.clientX,from:j.current.pos,moved:!1,hit:t?Number(t.dataset.cfIndex):null,samples:[{x:e.clientX,t:performance.now()}]}},U=e=>{let t=V.current;if(!t||t.id!==e.pointerId)return;let n=e.clientX-t.x;if(!t.moved){if(Math.abs(n)<6)return;t.moved=!0,e.currentTarget.setPointerCapture(e.pointerId),e.currentTarget.dataset.dragging=``}let r=j.current;cancelAnimationFrame(r.raf),r.raf=0;let a=t.from-n/(i*M.current.scale),o=M.current.count-1;a<0&&(a*=.3),a>o&&(a=o+(a-o)*.3),r.pos=r.target=a,r.vel=0,t.samples.push({x:e.clientX,t:performance.now()}),t.samples.length>6&&t.samples.shift(),L()},W=t=>{let n=V.current;if(!n||n.id!==t.pointerId)return;if(V.current=null,delete t.currentTarget.dataset.dragging,!n.moved){if(n.hit===null)return;n.hit===Math.round(j.current.target)?c?.(e[n.hit],n.hit):z(n.hit);return}let r=n.samples[0],a=n.samples[n.samples.length-1],o=Math.max(a.t-r.t,1),s=-((a.x-r.x)/o)*1e3/(i*M.current.scale),l=j.current;l.vel=N.current?0:s;let u=Math.round(l.pos+s*.18);Math.abs(s)>.8&&u===Math.round(n.from)&&(u+=Math.sign(s)),z(u)},G=t=>{let n=Math.round(j.current.target),r={ArrowLeft:n-1,ArrowRight:n+1,Home:0,End:x};t.key in r?(t.preventDefault(),I(),z(r[t.key])):(t.key===`Enter`||t.key===` `)&&c&&t.target===t.currentTarget&&(t.preventDefault(),c(e[n],n))},K=e[C],q=Math.round(l*D),J=Math.round(u*D),Y=(e,t=!1)=>(0,r.jsx)(`div`,{className:`ui-cf__media`,children:e.cover??(e.image?(0,r.jsx)(`img`,{src:e.image,alt:t?``:e.alt??e.title??``,draggable:!1,loading:`lazy`,decoding:`async`}):null)});return(0,r.jsxs)(`div`,{className:[`ui-cf`,y].filter(Boolean).join(` `),style:{"--ui-cf-w":`${q}px`,"--ui-cf-h":`${J}px`},"data-reflection":f||void 0,children:[(0,r.jsx)(`style`,{href:`ui-cover-flow`,precedence:`default`,children:o}),(0,r.jsx)(`div`,{ref:k,className:`ui-cf__viewport`,role:`region`,"aria-roledescription":`carousel`,"aria-label":v,tabIndex:0,onKeyDown:G,onPointerDown:H,onPointerMove:U,onPointerUp:W,onPointerCancel:W,"data-selectable":c?``:void 0,children:(0,r.jsx)(`div`,{className:`ui-cf__stage`,style:{perspective:`${Math.round(1e3*D)}px`},children:e.map((e,t)=>(0,r.jsxs)(`div`,{ref:e=>{A.current[t]=e},className:`ui-cf__item`,"data-cf-index":t,"data-active":t===C||void 0,role:`group`,"aria-roledescription":`slide`,"aria-label":`${t+1} of ${b}${e.title?`: ${e.title}`:``}`,"aria-hidden":t!==C||void 0,children:[(0,r.jsx)(`div`,{className:`ui-cf__ground`,"aria-hidden":`true`}),(0,r.jsx)(`div`,{className:`ui-cf__card`,children:Y(e)}),f&&(0,r.jsx)(`div`,{className:`ui-cf__reflection`,"aria-hidden":`true`,inert:!0,children:(0,r.jsx)(`div`,{className:`ui-cf__card`,children:Y(e,!0)})})]},e.id))})}),(p||h||g)&&(0,r.jsxs)(`div`,{className:`ui-cf__footer`,children:[(0,r.jsxs)(`div`,{className:`ui-cf__row`,children:[h&&(0,r.jsx)(`button`,{type:`button`,className:`ui-cf__nav`,"aria-label":`Previous`,disabled:C===0,onClick:()=>z(Math.round(j.current.target)-1),children:(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M10 3.5 5.5 8l4.5 4.5`})})}),p&&(0,r.jsx)(`div`,{className:`ui-cf__caption`,"aria-live":`polite`,children:(0,r.jsx)(`div`,{className:`ui-cf__caption-in`,"data-dir":T>0?`next`:`prev`,children:K&&(m?m(K,C):(0,r.jsxs)(r.Fragment,{children:[K.title&&(0,r.jsx)(`div`,{className:`ui-cf__title`,children:K.title}),K.subtitle&&(0,r.jsx)(`div`,{className:`ui-cf__subtitle`,children:K.subtitle})]}))},K?.id)}),h&&(0,r.jsx)(`button`,{type:`button`,className:`ui-cf__nav`,"aria-label":`Next`,disabled:C===x,onClick:()=>z(Math.round(j.current.target)+1),children:(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M6 3.5 10.5 8 6 12.5`})})})]}),g&&b>1&&(0,r.jsx)(`div`,{className:`ui-cf__ticks`,children:e.map((e,t)=>(0,r.jsx)(`button`,{type:`button`,tabIndex:-1,className:`ui-cf__tick`,"aria-label":`Show ${e.title??`cover ${t+1}`}`,"aria-current":t===C||void 0,onClick:()=>z(t)},e.id))})]})]})}var o=`
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

/* The floor: a flipped copy that fades out – a mask, so it works on any background */
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
`,s=[[`Stone`,`#f4f4f5`,`#d4d4d8`],[`Mint`,`#f0fbf7`,`#b6e4d3`],[`Sky`,`#eff6ff`,`#bcd6fb`],[`Sage`,`#f0f7f2`,`#bfdcc8`],[`Blush`,`#fdf2f8`,`#f5b5d6`],[`Sand`,`#fdfaf3`,`#ead9b8`],[`Lilac`,`#f5f3ff`,`#cdc3f5`],[`Ice`,`#f0faff`,`#b8e0f0`],[`Peach`,`#fff7ed`,`#f6c9a4`],[`Mist`,`#f8fafc`,`#cbd5e1`]].map(([e,t,n])=>({id:e,title:e,subtitle:`${t} → ${n}`.toUpperCase(),cover:(0,r.jsx)(`div`,{className:`cf-demo__gradient`,style:{background:`linear-gradient(160deg, ${t}, ${n})`}})}));function c(){return(0,r.jsx)(`div`,{className:`cf-demo`,children:(0,r.jsx)(a,{items:s,defaultIndex:4,itemWidth:240,itemHeight:320,"aria-label":`Gradient collection`})})}export{c as default};