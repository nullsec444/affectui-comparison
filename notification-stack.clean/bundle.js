import{a as R}from"../shared/chunk-PWBCLQI6.js";import{a as k}from"../shared/chunk-LKG2PFLG.js";import{a as f}from"../shared/chunk-KHKHHDEU.js";import{b as u}from"../shared/chunk-MOQMIKSW.js";var M=u(k()),S=u(R());var E=u(k()),T=u(f()),i=u(f()),a=T,c=E,y=12;function B({notices:o,onDismiss:n,className:h}){let[d,b]=(0,c.useState)(o),[j,v]=(0,c.useState)(new Set),[w,z]=(0,c.useState)({}),g=(0,c.useRef)(new Map),p=d.filter(e=>!j.has(e.id)),$=Math.min(p.length-1,2);(0,c.useLayoutEffect)(()=>{let e=()=>{let t={};g.current.forEach((r,x)=>t[x]=r.offsetHeight),z(t)};e();let s=new ResizeObserver(e);return g.current.forEach(t=>s.observe(t)),()=>s.disconnect()},[d]);let C=e=>{v(s=>new Set(s).add(e.id)),n?.(e),window.setTimeout(()=>{b(s=>s.filter(t=>t.id!==e.id)),v(s=>{let t=new Set(s);return t.delete(e.id),t})},320)},m=p[0]?w[p[0].id]??0:0;return(0,a.jsxs)(a.Fragment,{children:[(0,i.jsx)("style",{href:"ui-notification-stack-clean",precedence:"default",children:P}),(0,i.jsx)("section",{className:["ui-nsc",h].filter(Boolean).join(" "),"aria-label":"Notifications",style:{height:p.length?m+$*y:0},children:d.map(e=>{let s=p.findIndex(l=>l.id===e.id),t=s===-1,r=Math.max(0,s),x=!t&&r>0,I=t||r===0?0:m-(w[e.id]??m)+Math.min(r,2)*y,D=t?1:1-Math.min(r,2)*.05;return(0,i.jsxs)("article",{ref:l=>{l?g.current.set(e.id,l):g.current.delete(e.id)},className:"ui-nsc__card","data-depth":t?void 0:r,"data-leaving":t||void 0,"aria-labelledby":`${e.id}-title`,"aria-hidden":x||void 0,inert:x||t,style:{zIndex:t?10:10-r,transform:t?void 0:`translateY(${I}px) scale(${D})`,opacity:r>2?0:void 0},children:[(0,a.jsx)(L,{kind:e.pattern??"orbit"}),(0,i.jsxs)("div",{className:"ui-nsc__body",children:[(0,i.jsxs)("div",{className:"ui-nsc__top",children:[e.badge?(0,i.jsx)("span",{className:"ui-nsc__badge",children:e.badge}):(0,i.jsx)("span",{}),(0,i.jsx)("button",{type:"button",className:"ui-nsc__close","aria-label":`Dismiss ${e.title}`,onClick:l=>{l.stopPropagation(),C(e)},children:(0,a.jsx)(F,{})})]}),(0,i.jsx)("h3",{id:`${e.id}-title`,className:"ui-nsc__title",children:e.title}),(0,i.jsx)("p",{className:"ui-nsc__text",children:e.text}),e.action&&(e.action.href?(0,i.jsxs)("a",{className:"ui-nsc__btn",href:e.action.href,onClick:e.action.onClick,...e.action.external?{target:"_blank",rel:"noreferrer"}:{},children:[e.action.label,e.action.external&&(0,a.jsx)(O,{})]}):(0,i.jsx)("button",{type:"button",className:"ui-nsc__btn",onClick:e.action.onClick,children:e.action.label}))]})]},e.id)})})]})}function L({kind:o}){return(0,i.jsxs)("svg",{className:"ui-nsc__pattern",viewBox:"0 0 220 160",fill:"none","aria-hidden":"true",children:[o==="orbit"&&(0,a.jsxs)(a.Fragment,{children:[(0,i.jsx)("circle",{cx:"190",cy:"10",r:"46"}),(0,i.jsx)("circle",{cx:"190",cy:"10",r:"86"}),(0,i.jsx)("circle",{cx:"190",cy:"10",r:"128"}),(0,i.jsx)("path",{d:"M60 160 220 0M0 58h220M150 0v160"}),(0,i.jsx)("circle",{cx:"150",cy:"58",r:"3.5",className:"ui-nsc__dot"})]}),o==="grid"&&(0,a.jsxs)(a.Fragment,{children:[[30,60,90,120,150,180,210].map(n=>(0,i.jsx)("path",{d:`M${n} 0v160`},`x${n}`)),[20,50,80,110,140].map(n=>(0,i.jsx)("path",{d:`M0 ${n}h220`},`y${n}`)),(0,i.jsx)("rect",{x:"150",y:"50",width:"30",height:"30",className:"ui-nsc__fill"}),(0,i.jsx)("circle",{cx:"180",cy:"50",r:"3.5",className:"ui-nsc__dot"})]}),o==="rays"&&(0,a.jsxs)(a.Fragment,{children:[[0,1,2,3,4,5,6,7].map(n=>(0,i.jsx)("path",{d:`M210 6 L${210-Math.cos(n*Math.PI/16)*230} ${6+Math.sin(n*Math.PI/16)*230}`},n)),(0,i.jsx)("path",{d:"M120 6a90 90 0 0 0 90 90"}),(0,i.jsx)("circle",{cx:"146",cy:"70",r:"3.5",className:"ui-nsc__dot"})]})]})}var F=()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round","aria-hidden":"true",children:(0,i.jsx)("path",{d:"m4 4 8 8M12 4l-8 8"})}),O=()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M5 11 11 5M6 5h5v5"})}),P=`
/* Colors and motion as variables \u2013 override them on .ui-nsc */
.ui-nsc {
  --ui-nsc-card: #ffffff;
  --ui-nsc-strong: #000000;
  --ui-nsc-ink: rgba(0, 0, 0, 0.88);
  --ui-nsc-text: rgba(0, 0, 0, 0.61);
  --ui-nsc-icon: rgba(0, 0, 0, 0.447);
  --ui-nsc-line: rgba(0, 0, 0, 0.06);
  --ui-nsc-wash: rgba(0, 0, 0, 0.03);
  --ui-nsc-fill: rgba(0, 0, 0, 0.06);
  --ui-nsc-art: rgba(0, 0, 0, 0.07);
  --ui-nsc-accent: rgba(0, 96, 226, 0.765);
  --ui-nsc-accent-bg: rgba(0, 96, 226, 0.05);
  --ui-nsc-focus: rgba(0, 96, 226, 0.35);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-nsc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-nsc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  --ui-nsc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  box-sizing: border-box;
  container-type: inline-size;
  width: 100%;
  max-width: 380px;
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--ui-nsc-ink);
  text-align: left;
  -webkit-font-smoothing: antialiased;
  transition: height 460ms var(--ui-nsc-ease);
}
.ui-nsc *, .ui-nsc *::before, .ui-nsc *::after { box-sizing: border-box; }
:where(.ui-nsc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
:where(.ui-nsc) svg { flex: none; }
.ui-nsc button:focus-visible,
.ui-nsc a:focus-visible { outline: 2px solid var(--ui-nsc-focus); outline-offset: 1px; }

/* One white card per notice \u2013 the edge is a shadow, not a border */
.ui-nsc__card {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ui-nsc-card);
  box-shadow: var(--ui-nsc-shadow);
  transform-origin: 50% 100%;
  transition:
    transform 460ms var(--ui-nsc-ease),
    opacity 300ms ease,
    box-shadow 300ms ease;
}
/* Cards behind show only their edge */
.ui-nsc__card > * { transition: opacity 260ms ease; }
.ui-nsc__card:not([data-depth="0"]) > * { opacity: 0; }
.ui-nsc__card[data-leaving] {
  opacity: 0;
  transform: translateX(40px) scale(0.98) !important;
  transition: transform 320ms var(--ui-nsc-ease), opacity 240ms ease;
}

/* Quiet hairline art in the top-right corner, with one blue mark */
.ui-nsc__pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  height: 160px;
  stroke: var(--ui-nsc-art);
  stroke-width: 0.75;
  pointer-events: none;
  -webkit-mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
  mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
}
.ui-nsc__dot { fill: var(--ui-nsc-accent); stroke: none; }
.ui-nsc__fill { fill: var(--ui-nsc-accent-bg); }

.ui-nsc__body {
  position: relative;
  padding: 12px 12px 16px 16px;
}
.ui-nsc__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 28px;
  margin-bottom: 8px;
}
/* Tiny label: tinted fill, 10px uppercase */
.ui-nsc__badge {
  padding: 2px 6px;
  border-radius: 5px;
  background: var(--ui-nsc-fill);
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--ui-nsc-text);
}
/* Ghost icon button */
.ui-nsc__close {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  transition: background-color 140ms ease, color 140ms ease;
}
:where(.ui-nsc) .ui-nsc__close { color: var(--ui-nsc-icon); }
.ui-nsc__close:hover { background: var(--ui-nsc-wash); color: var(--ui-nsc-ink); }
.ui-nsc__title {
  margin: 0;
  padding-right: 4px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: var(--ui-nsc-strong);
}
.ui-nsc__text {
  margin: 2px 0 0;
  padding-right: 4px;
  max-width: 38ch;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-nsc-text);
}
/* Secondary button: white with the card's hairline shadow */
.ui-nsc__btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  margin-top: 12px;
  padding: 0 10px;
  border-radius: 6px;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  transition: background-color 140ms ease, box-shadow 140ms ease, transform 160ms var(--ui-nsc-ease);
}
:where(.ui-nsc) .ui-nsc__btn { background: var(--ui-nsc-card); box-shadow: var(--ui-nsc-shadow); color: var(--ui-nsc-strong); }
.ui-nsc__btn:has(svg) { padding: 0 8px 0 10px; }
.ui-nsc__btn:hover { box-shadow: var(--ui-nsc-shadow-hover); }
.ui-nsc__btn:active { transform: scale(0.97); }
.ui-nsc__btn svg { color: var(--ui-nsc-icon); }

/* Narrow stacks (phones) */
@container (max-width: 340px) {
  .ui-nsc__body { padding: 10px 10px 14px 14px; }
  .ui-nsc__text { max-width: none; }
}
/* Touch screens: bigger tap targets */
@media (pointer: coarse) {
  .ui-nsc__close { width: 36px; height: 36px; margin: -4px -4px -4px 0; }
  .ui-nsc__btn { height: 36px; padding: 0 14px; }
  .ui-nsc__btn:has(svg) { padding: 0 12px 0 14px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-nsc, .ui-nsc__card, .ui-nsc__card > * { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-nsc {
  --ui-nsc-card: #1c1c1e;
  --ui-nsc-strong: #ffffff;
  --ui-nsc-ink: rgba(255, 255, 255, 0.9);
  --ui-nsc-text: rgba(255, 255, 255, 0.62);
  --ui-nsc-icon: rgba(255, 255, 255, 0.46);
  --ui-nsc-line: rgba(255, 255, 255, 0.08);
  --ui-nsc-wash: rgba(255, 255, 255, 0.04);
  --ui-nsc-fill: rgba(255, 255, 255, 0.08);
  --ui-nsc-art: rgba(255, 255, 255, 0.07);
  --ui-nsc-accent: #4d8dff;
  --ui-nsc-accent-bg: rgba(77, 141, 255, 0.1);
  --ui-nsc-focus: rgba(77, 141, 255, 0.5);
  --ui-nsc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-nsc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-nsc .ui-nsc__btn { background: rgba(255, 255, 255, 0.04); }
`,_=[{id:"dark-mode",badge:"New",title:"Dark mode is here",text:"Every screen now follows your system theme \u2013 or pick one yourself in settings.",action:{label:"Try it"},pattern:"orbit"},{id:"maintenance",badge:"Notice",title:"Scheduled maintenance",text:"We'll be offline on Sunday from 02:00 to 03:00 UTC. Your data stays safe.",action:{label:"View status",href:"#",external:!0},pattern:"grid"},{id:"invite",badge:"Invite",title:"Mara invited you to Design Ops",text:"Join the workspace to see shared projects, files and comments.",action:{label:"Accept invite"},pattern:"rays"}];function N(){let[o,n]=(0,c.useState)(0),[h,d]=(0,c.useState)(_.length);return(0,i.jsx)("div",{className:"notice-demo",children:(0,a.jsx)(B,{notices:_,onDismiss:()=>{if(h>1)return d(h-1);window.setTimeout(()=>{d(_.length),n(b=>b+1)},1200)}},o)})}(0,S.createRoot)(document.getElementById("root")).render(M.default.createElement(N));
