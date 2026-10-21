import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t(),i=12;function a({notices:e,onDismiss:t,className:a}){let[u,d]=(0,n.useState)(e),[f,p]=(0,n.useState)(new Set),[m,h]=(0,n.useState)({}),g=(0,n.useRef)(new Map),_=u.filter(e=>!f.has(e.id)),v=Math.min(_.length-1,2);(0,n.useLayoutEffect)(()=>{let e=()=>{let e={};g.current.forEach((t,n)=>e[n]=t.offsetHeight),h(e)};e();let t=new ResizeObserver(e);return g.current.forEach(e=>t.observe(e)),()=>t.disconnect()},[u]);let y=e=>{p(t=>new Set(t).add(e.id)),t?.(e),window.setTimeout(()=>{d(t=>t.filter(t=>t.id!==e.id)),p(t=>{let n=new Set(t);return n.delete(e.id),n})},320)},b=_[0]?m[_[0].id]??0:0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`style`,{href:`ui-notification-stack`,precedence:`default`,children:l}),(0,r.jsx)(`section`,{className:[`ui-ns`,a].filter(Boolean).join(` `),"aria-label":`Notifications`,style:{height:_.length?b+v*i:0},children:u.map(e=>{let t=_.findIndex(t=>t.id===e.id),n=t===-1,a=Math.max(0,t),l=!n&&a>0,u=n||a===0?0:b-(m[e.id]??b)+Math.min(a,2)*i,d=n?1:1-Math.min(a,2)*.05;return(0,r.jsxs)(`article`,{ref:t=>{t?g.current.set(e.id,t):g.current.delete(e.id)},className:`ui-ns__card`,"data-depth":n?void 0:a,"data-leaving":n||void 0,"aria-labelledby":`${e.id}-title`,"aria-hidden":l||void 0,inert:l||n,style:{zIndex:n?10:10-a,transform:n?void 0:`translateY(${u}px) scale(${d})`,opacity:a>2?0:void 0},children:[(0,r.jsx)(o,{kind:e.pattern??`orbit`}),(0,r.jsxs)(`div`,{className:`ui-ns__body`,children:[(0,r.jsxs)(`div`,{className:`ui-ns__top`,children:[e.badge?(0,r.jsx)(`span`,{className:`ui-ns__badge`,children:e.badge}):(0,r.jsx)(`span`,{}),(0,r.jsx)(`button`,{type:`button`,className:`ui-ns__close`,"aria-label":`Dismiss ${e.title}`,onClick:t=>{t.stopPropagation(),y(e)},children:(0,r.jsx)(s,{})})]}),(0,r.jsx)(`h3`,{id:`${e.id}-title`,className:`ui-ns__title`,children:e.title}),(0,r.jsx)(`p`,{className:`ui-ns__text`,children:e.text}),e.action&&(e.action.href?(0,r.jsxs)(`a`,{className:`ui-ns__btn`,href:e.action.href,onClick:e.action.onClick,...e.action.external?{target:`_blank`,rel:`noreferrer`}:{},children:[e.action.label,e.action.external&&(0,r.jsx)(c,{})]}):(0,r.jsx)(`button`,{type:`button`,className:`ui-ns__btn`,onClick:e.action.onClick,children:e.action.label}))]})]},e.id)})})]})}function o({kind:e}){return(0,r.jsxs)(`svg`,{className:`ui-ns__pattern`,viewBox:`0 0 220 160`,fill:`none`,"aria-hidden":`true`,children:[e===`orbit`&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`circle`,{cx:`190`,cy:`10`,r:`46`}),(0,r.jsx)(`circle`,{cx:`190`,cy:`10`,r:`86`}),(0,r.jsx)(`circle`,{cx:`190`,cy:`10`,r:`128`}),(0,r.jsx)(`path`,{d:`M60 160 220 0M0 58h220M150 0v160`}),(0,r.jsx)(`circle`,{cx:`150`,cy:`58`,r:`3.5`,className:`ui-ns__dot`})]}),e===`grid`&&(0,r.jsxs)(r.Fragment,{children:[[30,60,90,120,150,180,210].map(e=>(0,r.jsx)(`path`,{d:`M${e} 0v160`},`x${e}`)),[20,50,80,110,140].map(e=>(0,r.jsx)(`path`,{d:`M0 ${e}h220`},`y${e}`)),(0,r.jsx)(`rect`,{x:`150`,y:`50`,width:`30`,height:`30`,className:`ui-ns__fill`}),(0,r.jsx)(`circle`,{cx:`180`,cy:`50`,r:`3.5`,className:`ui-ns__dot`})]}),e===`rays`&&(0,r.jsxs)(r.Fragment,{children:[[0,1,2,3,4,5,6,7].map(e=>(0,r.jsx)(`path`,{d:`M210 6 L${210-Math.cos(e*Math.PI/16)*230} ${6+Math.sin(e*Math.PI/16)*230}`},e)),(0,r.jsx)(`path`,{d:`M120 6a90 90 0 0 0 90 90`}),(0,r.jsx)(`circle`,{cx:`146`,cy:`70`,r:`3.5`,className:`ui-ns__dot`})]})]})}var s=()=>(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`m4 4 8 8M12 4l-8 8`})}),c=()=>(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M5 11 11 5M6 5h5v5`})}),l=`
.ui-ns {
  --ui-ns-card: #ffffff;
  --ui-ns-line: #e5e5e5;
  --ui-ns-ink: #171717;
  --ui-ns-muted: #737373;
  --ui-ns-art: #e3e3e3;
  --ui-ns-accent: #2f6bff;
  --ui-ns-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 380px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-ns-ink);
  -webkit-font-smoothing: antialiased;
  transition: height 460ms var(--ui-ns-ease);
}
.ui-ns *, .ui-ns *::before, .ui-ns *::after { box-sizing: border-box; }

.ui-ns__card {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: var(--ui-ns-card);
  border: 1px solid var(--ui-ns-line);
  border-radius: 20px;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    0 8px 24px rgba(0, 0, 0, 0.035);
  transform-origin: 50% 100%;
  transition:
    transform 460ms var(--ui-ns-ease),
    opacity 300ms ease,
    box-shadow 300ms ease;
}
/* Cards behind show only their edge */
.ui-ns__card > * { transition: opacity 260ms ease; }
.ui-ns__card:not([data-depth="0"]) > * { opacity: 0; }
.ui-ns__card[data-leaving] {
  opacity: 0;
  transform: translateX(40px) scale(0.98) !important;
  transition: transform 320ms var(--ui-ns-ease), opacity 240ms ease;
}

.ui-ns__pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  height: 160px;
  stroke: var(--ui-ns-art);
  stroke-width: 1;
  pointer-events: none;
  /* Only the top-right corner, fading out towards the text */
  -webkit-mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
  mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
}
.ui-ns__dot { fill: #d4d4d4; stroke: none; }
.ui-ns__fill { fill: #f5f5f5; }

.ui-ns__body {
  position: relative;
  padding: 18px 20px 20px;
}
.ui-ns__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 26px;
  margin-bottom: 14px;
}
.ui-ns__badge {
  padding: 2px 9px;
  border-radius: 999px;
  background: #fff;
  box-shadow: inset 0 0 0 1px var(--ui-ns-line);
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #525252;
}
.ui-ns__close {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  margin: -2px -6px 0 0;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--ui-ns-muted);
  cursor: pointer;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-ns__close:hover { background: rgba(0, 0, 0, 0.05); color: var(--ui-ns-ink); }
.ui-ns__title {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.01em;
}
.ui-ns__text {
  margin: 6px 0 0;
  max-width: 34ch;
  font-size: 14px;
  line-height: 21px;
  color: var(--ui-ns-muted);
}
.ui-ns__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  margin-top: 16px;
  padding: 0 12px;
  border: 0;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 0 0 1px var(--ui-ns-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-ns-ink);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-ns__btn:hover { background: #f7f7f7; }
.ui-ns__btn:active { transform: scale(0.98); }
.ui-ns__btn svg { color: var(--ui-ns-muted); }
.ui-ns button:focus-visible,
.ui-ns a:focus-visible { outline: 2px solid var(--ui-ns-accent); outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  .ui-ns, .ui-ns__card, .ui-ns__card > * { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ns {
  --ui-ns-card: #232326;
  --ui-ns-line: rgba(255, 255, 255, 0.1);
  --ui-ns-ink: #ededed;
  --ui-ns-muted: #8f8f8f;
  --ui-ns-art: rgba(255, 255, 255, 0.08);
}
:where(.dark, [data-theme="dark"]) .ui-ns__card {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.4),
    0 8px 24px rgba(0, 0, 0, 0.35);
}
:where(.dark, [data-theme="dark"]) .ui-ns__dot { fill: rgba(255, 255, 255, 0.22); }
:where(.dark, [data-theme="dark"]) .ui-ns__fill { fill: rgba(255, 255, 255, 0.04); }
:where(.dark, [data-theme="dark"]) .ui-ns__badge { background: #2a2a2d; color: #c4c4c4; }
:where(.dark, [data-theme="dark"]) .ui-ns__close:hover { background: rgba(255, 255, 255, 0.06); }
:where(.dark, [data-theme="dark"]) .ui-ns__btn {
  background: #2a2a2d;
  box-shadow: 0 0 0 1px var(--ui-ns-line), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-ns__btn:hover { background: #313135; }
`,u=[{id:`dark-mode`,badge:`New`,title:`Dark mode is here`,text:`Every screen now follows your system theme – or pick one yourself in settings.`,action:{label:`Try it`},pattern:`orbit`},{id:`maintenance`,badge:`Notice`,title:`Scheduled maintenance`,text:`We'll be offline on Sunday from 02:00 to 03:00 UTC. Your data stays safe.`,action:{label:`View status`,href:`#`,external:!0},pattern:`grid`},{id:`invite`,badge:`Invite`,title:`Mara invited you to Design Ops`,text:`Join the workspace to see shared projects, files and comments.`,action:{label:`Accept invite`},pattern:`rays`}];function d(){let[e,t]=(0,n.useState)(0),[i,o]=(0,n.useState)(u.length);return(0,r.jsx)(`div`,{className:`notice-demo`,children:(0,r.jsx)(a,{notices:u,onDismiss:()=>{if(i>1)return o(i-1);window.setTimeout(()=>{o(u.length),t(e=>e+1)},1200)}},e)})}export{d as default};