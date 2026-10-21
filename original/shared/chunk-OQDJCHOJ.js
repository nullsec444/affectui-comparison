import{a as _}from"./chunk-BBLBVXTT.js";import{a as k}from"./chunk-H7MXNYVQ.js";var o=_(),e=k(),v=12;function $({notices:r,onDismiss:a,className:u}){let[d,x]=(0,o.useState)(r),[w,g]=(0,o.useState)(new Set),[b,y]=(0,o.useState)({}),h=(0,o.useRef)(new Map),c=d.filter(i=>!w.has(i.id)),j=Math.min(c.length-1,2);(0,o.useLayoutEffect)(()=>{let i=()=>{let t={};h.current.forEach((s,p)=>t[p]=s.offsetHeight),y(t)};i();let n=new ResizeObserver(i);return h.current.forEach(t=>n.observe(t)),()=>n.disconnect()},[d]);let M=i=>{g(n=>new Set(n).add(i.id)),a?.(i),window.setTimeout(()=>{x(n=>n.filter(t=>t.id!==i.id)),g(n=>{let t=new Set(n);return t.delete(i.id),t})},320)},m=c[0]?b[c[0].id]??0:0;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{href:"ui-notification-stack",precedence:"default",children:D}),(0,e.jsx)("section",{className:["ui-ns",u].filter(Boolean).join(" "),"aria-label":"Notifications",style:{height:c.length?m+j*v:0},children:d.map(i=>{let n=c.findIndex(l=>l.id===i.id),t=n===-1,s=Math.max(0,n),p=!t&&s>0,N=t||s===0?0:m-(b[i.id]??m)+Math.min(s,2)*v,S=t?1:1-Math.min(s,2)*.05;return(0,e.jsxs)("article",{ref:l=>{l?h.current.set(i.id,l):h.current.delete(i.id)},className:"ui-ns__card","data-depth":t?void 0:s,"data-leaving":t||void 0,"aria-labelledby":`${i.id}-title`,"aria-hidden":p||void 0,inert:p||t,style:{zIndex:t?10:10-s,transform:t?void 0:`translateY(${N}px) scale(${S})`,opacity:s>2?0:void 0},children:[(0,e.jsx)(z,{kind:i.pattern??"orbit"}),(0,e.jsxs)("div",{className:"ui-ns__body",children:[(0,e.jsxs)("div",{className:"ui-ns__top",children:[i.badge?(0,e.jsx)("span",{className:"ui-ns__badge",children:i.badge}):(0,e.jsx)("span",{}),(0,e.jsx)("button",{type:"button",className:"ui-ns__close","aria-label":`Dismiss ${i.title}`,onClick:l=>{l.stopPropagation(),M(i)},children:(0,e.jsx)(C,{})})]}),(0,e.jsx)("h3",{id:`${i.id}-title`,className:"ui-ns__title",children:i.title}),(0,e.jsx)("p",{className:"ui-ns__text",children:i.text}),i.action&&(i.action.href?(0,e.jsxs)("a",{className:"ui-ns__btn",href:i.action.href,onClick:i.action.onClick,...i.action.external?{target:"_blank",rel:"noreferrer"}:{},children:[i.action.label,i.action.external&&(0,e.jsx)(I,{})]}):(0,e.jsx)("button",{type:"button",className:"ui-ns__btn",onClick:i.action.onClick,children:i.action.label}))]})]},i.id)})})]})}function z({kind:r}){return(0,e.jsxs)("svg",{className:"ui-ns__pattern",viewBox:"0 0 220 160",fill:"none","aria-hidden":"true",children:[r==="orbit"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("circle",{cx:"190",cy:"10",r:"46"}),(0,e.jsx)("circle",{cx:"190",cy:"10",r:"86"}),(0,e.jsx)("circle",{cx:"190",cy:"10",r:"128"}),(0,e.jsx)("path",{d:"M60 160 220 0M0 58h220M150 0v160"}),(0,e.jsx)("circle",{cx:"150",cy:"58",r:"3.5",className:"ui-ns__dot"})]}),r==="grid"&&(0,e.jsxs)(e.Fragment,{children:[[30,60,90,120,150,180,210].map(a=>(0,e.jsx)("path",{d:`M${a} 0v160`},`x${a}`)),[20,50,80,110,140].map(a=>(0,e.jsx)("path",{d:`M0 ${a}h220`},`y${a}`)),(0,e.jsx)("rect",{x:"150",y:"50",width:"30",height:"30",className:"ui-ns__fill"}),(0,e.jsx)("circle",{cx:"180",cy:"50",r:"3.5",className:"ui-ns__dot"})]}),r==="rays"&&(0,e.jsxs)(e.Fragment,{children:[[0,1,2,3,4,5,6,7].map(a=>(0,e.jsx)("path",{d:`M210 6 L${210-Math.cos(a*Math.PI/16)*230} ${6+Math.sin(a*Math.PI/16)*230}`},a)),(0,e.jsx)("path",{d:"M120 6a90 90 0 0 0 90 90"}),(0,e.jsx)("circle",{cx:"146",cy:"70",r:"3.5",className:"ui-ns__dot"})]})]})}var C=()=>(0,e.jsx)("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round","aria-hidden":"true",children:(0,e.jsx)("path",{d:"m4 4 8 8M12 4l-8 8"})}),I=()=>(0,e.jsx)("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M5 11 11 5M6 5h5v5"})}),D=`
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
`,f=[{id:"dark-mode",badge:"New",title:"Dark mode is here",text:"Every screen now follows your system theme \u2013 or pick one yourself in settings.",action:{label:"Try it"},pattern:"orbit"},{id:"maintenance",badge:"Notice",title:"Scheduled maintenance",text:"We'll be offline on Sunday from 02:00 to 03:00 UTC. Your data stays safe.",action:{label:"View status",href:"#",external:!0},pattern:"grid"},{id:"invite",badge:"Invite",title:"Mara invited you to Design Ops",text:"Join the workspace to see shared projects, files and comments.",action:{label:"Accept invite"},pattern:"rays"}];function E(){let[r,a]=(0,o.useState)(0),[u,d]=(0,o.useState)(f.length);return(0,e.jsx)("div",{className:"notice-demo",children:(0,e.jsx)($,{notices:f,onDismiss:()=>{if(u>1)return d(u-1);window.setTimeout(()=>{d(f.length),a(x=>x+1)},1200)}},r)})}export{E as a};
