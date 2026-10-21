import{a as M}from"../shared/chunk-PWBCLQI6.js";import{a as _}from"../shared/chunk-LKG2PFLG.js";import{a as f}from"../shared/chunk-KHKHHDEU.js";import{b as s}from"../shared/chunk-MOQMIKSW.js";var v=s(_()),k=s(M());var N=s(_()),R=s(f()),i=s(f()),n=R,u=N,$={like:["Like","likes"],comment:["Comment","comments"],repost:["Repost","reposts"],share:["Share","shares"]},j=e=>e>=1e6?`${+(e/1e6).toFixed(1)}M`:e>=1e4?`${Math.round(e/1e3)}K`:e>=1e3?`${+(e/1e3).toFixed(1)}K`:`${e}`;function C({reactions:e={},onReact:l,actions:b=["like","comment","repost","share"],className:p}){let[d,a]=(0,u.useState)(()=>Object.fromEntries(b.map(r=>[r,{count:e[r]?.count??0,active:e[r]?.active??!1}]))),[o,w]=(0,u.useState)({}),y=r=>{let t=d[r],h={active:!t.active,count:Math.max(0,t.count+(t.active?-1:1))};a(c=>({...c,[r]:h})),w(c=>({...c,[r]:(c[r]??0)+1})),l?.(r,h)};return(0,n.jsxs)(n.Fragment,{children:[(0,i.jsx)("style",{href:"ui-reaction-bar-clean",precedence:"default",children:L}),(0,i.jsx)("div",{className:["ui-rbc",p].filter(Boolean).join(" "),role:"group","aria-label":"Reactions",children:b.map(r=>{let{count:t,active:h}=d[r],[c,g]=$[r];return(0,i.jsxs)("button",{type:"button",className:"ui-rbc__btn","data-kind":r,"aria-pressed":h,"aria-label":`${c}${t?`, ${t} ${t===1?g.slice(0,-1):g}`:""}`,onClick:()=>y(r),children:[(0,i.jsx)("span",{className:"ui-rbc__icon","data-pop":o[r]?!0:void 0,children:z[r]},o[r]??0),(0,n.jsx)(S,{value:t})]},r)})})]})}function S({value:e}){let l=e>0?j(e):"",b=(0,u.useRef)(null),p=(0,u.useRef)(null),d=(0,u.useRef)(!0);return(0,u.useLayoutEffect)(()=>{let a=b.current,o=p.current;a&&o&&(a.style.width=`${o.offsetWidth}px`,d.current&&(d.current=!1,requestAnimationFrame(()=>a.setAttribute("data-smooth",""))))},[l]),(0,i.jsx)("span",{className:"ui-rbc__count",ref:b,"aria-hidden":"true",children:(0,i.jsx)("span",{className:"ui-rbc__digits",ref:p,children:l.split("").map((a,o)=>(0,i.jsx)("span",{className:"ui-rbc__digit",children:a},`${l.length-o}-${a}`))})})}var m=({children:e})=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e}),z={like:(0,n.jsx)(m,{children:(0,i.jsx)("path",{className:"ui-rbc__fill",d:"M19.46 4c-2.68-1.65-5.02-.99-6.43.07-.57.43-.86.65-1.03.65s-.46-.22-1.03-.65C9.56 3.01 7.22 2.35 4.54 4 1.02 6.15.22 13.27 8.34 19.28 9.89 20.43 10.66 21 12 21s2.11-.57 3.66-1.72C23.78 13.27 22.98 6.15 19.46 4Z"})}),comment:(0,n.jsx)(m,{children:(0,i.jsx)("path",{className:"ui-rbc__fill",d:"M12 21.5c5.52 0 10-4.25 10-9.5S17.52 2.5 12 2.5 2 6.75 2 12c0 1.36.3 2.65.84 3.82.15.31.2.66.1 1l-.6 2.23a1.08 1.08 0 0 0 1.6 1.59l2.22-.6c.34-.09.69-.04 1 .1 1.17.55 2.46.86 4.84.86Z"})}),repost:(0,n.jsxs)(m,{children:[(0,i.jsx)("path",{d:"M16.5 3.5 19 6l-2.5 2.5"}),(0,i.jsx)("path",{d:"M19 6H8a4 4 0 0 0-4 4v1"}),(0,i.jsx)("path",{d:"M7.5 20.5 5 18l2.5-2.5"}),(0,i.jsx)("path",{d:"M5 18h11a4 4 0 0 0 4-4v-1"})]}),share:(0,n.jsxs)(m,{children:[(0,i.jsx)("path",{d:"M21 3 10.5 13.5"}),(0,i.jsx)("path",{d:"M21 3 14.6 20.6a.5.5 0 0 1-.93.05L10.5 13.5 3.35 10.33a.5.5 0 0 1 .05-.93Z"})]})},L=`
.ui-rbc {
  --ui-rbc-ink: rgba(0, 0, 0, 0.88);
  --ui-rbc-text: rgba(0, 0, 0, 0.61);
  --ui-rbc-icon: rgba(0, 0, 0, 0.447);
  --ui-rbc-line: rgba(0, 0, 0, 0.06);
  --ui-rbc-wash: rgba(0, 0, 0, 0.03);
  --ui-rbc-accent: rgba(0, 96, 226, 0.765);
  --ui-rbc-mine: rgba(0, 96, 226, 0.05);
  --ui-rbc-mine-line: rgba(0, 96, 226, 0.35);
  --ui-rbc-focus: rgba(0, 96, 226, 0.35);
  --ui-rbc-ease: cubic-bezier(0.85, 0, 0.15, 1);
  --ui-rbc-h: 28px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  max-width: 100%;
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-rbc-text);
  -webkit-font-smoothing: antialiased;
}
.ui-rbc *, .ui-rbc *::before, .ui-rbc *::after { box-sizing: border-box; }
:where(.ui-rbc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; }
:where(.ui-rbc) svg { display: block; flex: none; }

/* A chip: the tab-chip look \u2013 inset hairline, radius 6. Without a count it is a square-ish icon chip */
.ui-rbc__btn {
  position: relative;
  display: inline-flex;
  flex: none;
  align-items: center;
  height: var(--ui-rbc-h);
  padding: 0 8px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 0.5px var(--ui-rbc-line);
  color: var(--ui-rbc-text);
  transition: background-color 90ms ease, box-shadow 160ms ease, color 160ms ease;
  -webkit-tap-highlight-color: transparent;
}
.ui-rbc__btn:focus-visible { outline: 2px solid var(--ui-rbc-focus); outline-offset: 1px; }
@media (hover: hover) {
  .ui-rbc__btn:hover { background-color: var(--ui-rbc-wash); color: var(--ui-rbc-ink); }
  .ui-rbc__btn:hover .ui-rbc__icon { color: var(--ui-rbc-ink); }
}
/* Your own reaction: a minimal blue tint with a light blue hairline */
.ui-rbc__btn[aria-pressed="true"],
.ui-rbc__btn[aria-pressed="true"]:hover {
  background-color: var(--ui-rbc-mine);
  box-shadow: inset 0 0 0 0.5px var(--ui-rbc-mine-line);
  color: var(--ui-rbc-accent);
}

.ui-rbc__icon { display: grid; place-items: center; flex: none; width: 16px; height: 16px; color: var(--ui-rbc-icon); transition: color 160ms ease; }
.ui-rbc__fill { fill: transparent; transition: fill 160ms ease; }
.ui-rbc__btn[aria-pressed="true"] .ui-rbc__icon { color: var(--ui-rbc-accent); }
.ui-rbc__btn[aria-pressed="true"] .ui-rbc__fill { fill: currentColor; }
/* Press pop: shrinks, springs past full size, settles */
.ui-rbc__icon[data-pop] { animation: ui-rbc-pop 320ms cubic-bezier(0.65, 0, 0.35, 1); }

/* Count: the width glides, digits roll */
.ui-rbc__count {
  display: inline-block;
  overflow: hidden;
  width: 0;
  height: 20px;
}
.ui-rbc__count[data-smooth] { transition: width 400ms var(--ui-rbc-ease); }
.ui-rbc__digits {
  display: inline-flex;
  padding: 0 2px 0 6px;
  line-height: 20px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ui-rbc__digits:empty { padding: 0; }
.ui-rbc__digit { display: inline-block; animation: ui-rbc-roll 400ms var(--ui-rbc-ease) both; }

@keyframes ui-rbc-pop {
  0% { transform: scale(1); }
  35% { transform: scale(0.75); }
  70% { transform: scale(1.12); }
  100% { transform: scale(1); }
}
@keyframes ui-rbc-roll {
  from { opacity: 0; transform: translateY(70%); }
}

/* Touch screens: taller chips */
@media (hover: none) and (pointer: coarse) {
  .ui-rbc { --ui-rbc-h: 36px; gap: 6px; }
  .ui-rbc__btn { padding: 0 10px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-rbc__icon[data-pop], .ui-rbc__digit { animation: none; }
  .ui-rbc__count[data-smooth] { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-rbc {
  --ui-rbc-ink: rgba(255, 255, 255, 0.9);
  --ui-rbc-text: rgba(255, 255, 255, 0.62);
  --ui-rbc-icon: rgba(255, 255, 255, 0.46);
  --ui-rbc-line: rgba(255, 255, 255, 0.08);
  --ui-rbc-wash: rgba(255, 255, 255, 0.04);
  --ui-rbc-accent: #4d8dff;
  --ui-rbc-mine: rgba(77, 141, 255, 0.14);
  --ui-rbc-mine-line: rgba(77, 141, 255, 0.4);
  --ui-rbc-focus: rgba(77, 141, 255, 0.45);
}
`;function x(){return(0,i.jsx)("div",{className:"reaction-demo",children:(0,n.jsx)(C,{reactions:{like:{count:128},comment:{count:24},repost:{count:9},share:{count:0}}})})}(0,k.createRoot)(document.getElementById("root")).render(v.default.createElement(x));
