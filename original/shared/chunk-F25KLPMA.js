import{a as _}from"./chunk-BBLBVXTT.js";import{a as w}from"./chunk-H7MXNYVQ.js";var c=_(),i=w(),v=12;function z({notices:r,onDismiss:t,className:u}){let[o,x]=(0,c.useState)(r),[k,m]=(0,c.useState)(new Set),[f,y]=(0,c.useState)({}),h=(0,c.useRef)(new Map),l=o.filter(e=>!k.has(e.id)),j=Math.min(l.length-1,2);(0,c.useLayoutEffect)(()=>{let e=()=>{let n={};h.current.forEach((s,p)=>n[p]=s.offsetHeight),y(n)};e();let a=new ResizeObserver(e);return h.current.forEach(n=>a.observe(n)),()=>a.disconnect()},[o]);let N=e=>{m(a=>new Set(a).add(e.id)),t?.(e),window.setTimeout(()=>{x(a=>a.filter(n=>n.id!==e.id)),m(a=>{let n=new Set(a);return n.delete(e.id),n})},320)},g=l[0]?f[l[0].id]??0:0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{href:"ui-notification-stack-clean",precedence:"default",children:D}),(0,i.jsx)("section",{className:["ui-nsc",u].filter(Boolean).join(" "),"aria-label":"Notifications",style:{height:l.length?g+j*v:0},children:o.map(e=>{let a=l.findIndex(d=>d.id===e.id),n=a===-1,s=Math.max(0,a),p=!n&&s>0,M=n||s===0?0:g-(f[e.id]??g)+Math.min(s,2)*v,S=n?1:1-Math.min(s,2)*.05;return(0,i.jsxs)("article",{ref:d=>{d?h.current.set(e.id,d):h.current.delete(e.id)},className:"ui-nsc__card","data-depth":n?void 0:s,"data-leaving":n||void 0,"aria-labelledby":`${e.id}-title`,"aria-hidden":p||void 0,inert:p||n,style:{zIndex:n?10:10-s,transform:n?void 0:`translateY(${M}px) scale(${S})`,opacity:s>2?0:void 0},children:[(0,i.jsx)($,{kind:e.pattern??"orbit"}),(0,i.jsxs)("div",{className:"ui-nsc__body",children:[(0,i.jsxs)("div",{className:"ui-nsc__top",children:[e.badge?(0,i.jsx)("span",{className:"ui-nsc__badge",children:e.badge}):(0,i.jsx)("span",{}),(0,i.jsx)("button",{type:"button",className:"ui-nsc__close","aria-label":`Dismiss ${e.title}`,onClick:d=>{d.stopPropagation(),N(e)},children:(0,i.jsx)(C,{})})]}),(0,i.jsx)("h3",{id:`${e.id}-title`,className:"ui-nsc__title",children:e.title}),(0,i.jsx)("p",{className:"ui-nsc__text",children:e.text}),e.action&&(e.action.href?(0,i.jsxs)("a",{className:"ui-nsc__btn",href:e.action.href,onClick:e.action.onClick,...e.action.external?{target:"_blank",rel:"noreferrer"}:{},children:[e.action.label,e.action.external&&(0,i.jsx)(I,{})]}):(0,i.jsx)("button",{type:"button",className:"ui-nsc__btn",onClick:e.action.onClick,children:e.action.label}))]})]},e.id)})})]})}function $({kind:r}){return(0,i.jsxs)("svg",{className:"ui-nsc__pattern",viewBox:"0 0 220 160",fill:"none","aria-hidden":"true",children:[r==="orbit"&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("circle",{cx:"190",cy:"10",r:"46"}),(0,i.jsx)("circle",{cx:"190",cy:"10",r:"86"}),(0,i.jsx)("circle",{cx:"190",cy:"10",r:"128"}),(0,i.jsx)("path",{d:"M60 160 220 0M0 58h220M150 0v160"}),(0,i.jsx)("circle",{cx:"150",cy:"58",r:"3.5",className:"ui-nsc__dot"})]}),r==="grid"&&(0,i.jsxs)(i.Fragment,{children:[[30,60,90,120,150,180,210].map(t=>(0,i.jsx)("path",{d:`M${t} 0v160`},`x${t}`)),[20,50,80,110,140].map(t=>(0,i.jsx)("path",{d:`M0 ${t}h220`},`y${t}`)),(0,i.jsx)("rect",{x:"150",y:"50",width:"30",height:"30",className:"ui-nsc__fill"}),(0,i.jsx)("circle",{cx:"180",cy:"50",r:"3.5",className:"ui-nsc__dot"})]}),r==="rays"&&(0,i.jsxs)(i.Fragment,{children:[[0,1,2,3,4,5,6,7].map(t=>(0,i.jsx)("path",{d:`M210 6 L${210-Math.cos(t*Math.PI/16)*230} ${6+Math.sin(t*Math.PI/16)*230}`},t)),(0,i.jsx)("path",{d:"M120 6a90 90 0 0 0 90 90"}),(0,i.jsx)("circle",{cx:"146",cy:"70",r:"3.5",className:"ui-nsc__dot"})]})]})}var C=()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round","aria-hidden":"true",children:(0,i.jsx)("path",{d:"m4 4 8 8M12 4l-8 8"})}),I=()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M5 11 11 5M6 5h5v5"})}),D=`
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
`,b=[{id:"dark-mode",badge:"New",title:"Dark mode is here",text:"Every screen now follows your system theme \u2013 or pick one yourself in settings.",action:{label:"Try it"},pattern:"orbit"},{id:"maintenance",badge:"Notice",title:"Scheduled maintenance",text:"We'll be offline on Sunday from 02:00 to 03:00 UTC. Your data stays safe.",action:{label:"View status",href:"#",external:!0},pattern:"grid"},{id:"invite",badge:"Invite",title:"Mara invited you to Design Ops",text:"Join the workspace to see shared projects, files and comments.",action:{label:"Accept invite"},pattern:"rays"}];function B(){let[r,t]=(0,c.useState)(0),[u,o]=(0,c.useState)(b.length);return(0,i.jsx)("div",{className:"notice-demo",children:(0,i.jsx)(z,{notices:b,onDismiss:()=>{if(u>1)return o(u-1);window.setTimeout(()=>{o(b.length),t(x=>x+1)},1200)}},r)})}export{B as a};
