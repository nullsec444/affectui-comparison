import{a as h}from"./chunk-BBLBVXTT.js";import{a as f}from"./chunk-VXCLO5JM.js";import"./chunk-LKG2PFLG.js";import"./chunk-KHKHHDEU.js";import"./chunk-MOQMIKSW.js";var o=h(),e=f(),g={like:["Like","likes"],comment:["Comment","comments"],repost:["Repost","reposts"],share:["Share","shares"]},k=i=>i>=1e6?`${+(i/1e6).toFixed(1)}M`:i>=1e4?`${Math.round(i/1e3)}K`:i>=1e3?`${+(i/1e3).toFixed(1)}K`:`${i}`;function v({reactions:i={},onReact:u,actions:l=["like","comment","repost","share"],className:d}){let[c,t]=(0,o.useState)(()=>Object.fromEntries(l.map(r=>[r,{count:i[r]?.count??0,active:i[r]?.active??!1}]))),[n,x]=(0,o.useState)({}),_=r=>{let a=c[r],b={active:!a.active,count:Math.max(0,a.count+(a.active?-1:1))};t(s=>({...s,[r]:b})),x(s=>({...s,[r]:(s[r]??0)+1})),u?.(r,b)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{href:"ui-reaction-bar",precedence:"default",children:y}),(0,e.jsx)("div",{className:["ui-rb",d].filter(Boolean).join(" "),role:"group","aria-label":"Reactions",children:l.map(r=>{let{count:a,active:b}=c[r],[s,m]=g[r];return(0,e.jsxs)("button",{type:"button",className:"ui-rb__btn","data-kind":r,"aria-pressed":b,"aria-label":`${s}${a?`, ${a} ${a===1?m.slice(0,-1):m}`:""}`,onClick:()=>_(r),children:[(0,e.jsx)("span",{className:"ui-rb__icon","data-pop":n[r]?!0:void 0,children:w[r]},n[r]??0),(0,e.jsx)(j,{value:a})]},r)})})]})}function j({value:i}){let u=i>0?k(i):"",l=(0,o.useRef)(null),d=(0,o.useRef)(null),c=(0,o.useRef)(!0);return(0,o.useLayoutEffect)(()=>{let t=l.current,n=d.current;t&&n&&(t.style.width=`${n.offsetWidth}px`,c.current&&(c.current=!1,requestAnimationFrame(()=>t.setAttribute("data-smooth",""))))},[u]),(0,e.jsx)("span",{className:"ui-rb__count",ref:l,"aria-hidden":"true",children:(0,e.jsx)("span",{className:"ui-rb__digits",ref:d,children:u.split("").map((t,n)=>(0,e.jsx)("span",{className:"ui-rb__digit",children:t},`${u.length-n}-${t}`))})})}var p=({children:i})=>(0,e.jsx)("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:i}),w={like:(0,e.jsx)(p,{children:(0,e.jsx)("path",{className:"ui-rb__fill",d:"M19.46 4c-2.68-1.65-5.02-.99-6.43.07-.57.43-.86.65-1.03.65s-.46-.22-1.03-.65C9.56 3.01 7.22 2.35 4.54 4 1.02 6.15.22 13.27 8.34 19.28 9.89 20.43 10.66 21 12 21s2.11-.57 3.66-1.72C23.78 13.27 22.98 6.15 19.46 4Z"})}),comment:(0,e.jsx)(p,{children:(0,e.jsx)("path",{className:"ui-rb__fill",d:"M12 21.5c5.52 0 10-4.25 10-9.5S17.52 2.5 12 2.5 2 6.75 2 12c0 1.36.3 2.65.84 3.82.15.31.2.66.1 1l-.6 2.23a1.08 1.08 0 0 0 1.6 1.59l2.22-.6c.34-.09.69-.04 1 .1 1.17.55 2.46.86 4.84.86Z"})}),repost:(0,e.jsxs)(p,{children:[(0,e.jsx)("path",{d:"M16.5 3.5 19 6l-2.5 2.5"}),(0,e.jsx)("path",{d:"M19 6H8a4 4 0 0 0-4 4v1"}),(0,e.jsx)("path",{d:"M7.5 20.5 5 18l2.5-2.5"}),(0,e.jsx)("path",{d:"M5 18h11a4 4 0 0 0 4-4v-1"})]}),share:(0,e.jsxs)(p,{children:[(0,e.jsx)("path",{d:"M21 3 10.5 13.5"}),(0,e.jsx)("path",{d:"M21 3 14.6 20.6a.5.5 0 0 1-.93.05L10.5 13.5 3.35 10.33a.5.5 0 0 1 .05-.93Z"})]})},y=`
.ui-rb {
  --ui-rb-ink: #404040;
  --ui-rb-like: #ec4899;
  --ui-rb-comment: #2f6bff;
  --ui-rb-repost: #8b5cf6;
  --ui-rb-share: #171717;
  --ui-rb-ease: cubic-bezier(0.85, 0, 0.15, 1);
  --ui-rb-soft: cubic-bezier(0.22, 1, 0.36, 1);
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.ui-rb *, .ui-rb *::before, .ui-rb *::after { box-sizing: border-box; }

.ui-rb__btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-width: 42px;
  height: 42px;
  margin: 0;
  padding: 0 10px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  font: inherit;
  color: var(--ui-rb-ink);
  cursor: pointer;
  transition: background-color 160ms ease;
  -webkit-tap-highlight-color: transparent;
}
.ui-rb__btn:hover { background: #f5f5f5; }
.ui-rb__btn:focus-visible { outline: 2px solid var(--ui-rb-comment); outline-offset: 2px; }
.ui-rb__btn[data-kind="like"] { --ui-rb-tone: var(--ui-rb-like); }
.ui-rb__btn[data-kind="comment"] { --ui-rb-tone: var(--ui-rb-comment); }
.ui-rb__btn[data-kind="repost"] { --ui-rb-tone: var(--ui-rb-repost); }
.ui-rb__btn[data-kind="share"] { --ui-rb-tone: var(--ui-rb-share); }

.ui-rb__icon { display: grid; place-items: center; flex: none; }
.ui-rb__icon svg { transition: color 200ms ease; }
.ui-rb__fill { fill: transparent; transition: fill 200ms ease; }
.ui-rb__btn[aria-pressed="true"] { color: var(--ui-rb-tone); }
.ui-rb__btn[aria-pressed="true"] .ui-rb__fill { fill: currentColor; }
/* Press pop: shrinks, springs past full size, settles */
.ui-rb__icon[data-pop] { animation: ui-rb-pop 320ms cubic-bezier(0.65, 0, 0.35, 1); }

/* Count: the width glides, digits roll */
.ui-rb__count {
  display: inline-block;
  overflow: hidden;
  width: 0;
  height: 20px;
}
.ui-rb__count[data-smooth] { transition: width 400ms var(--ui-rb-ease); }
.ui-rb__digits {
  display: inline-flex;
  padding-left: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ui-rb__digits:empty { padding-left: 0; }
.ui-rb__digit { display: inline-block; animation: ui-rb-roll 400ms var(--ui-rb-ease) both; }

@keyframes ui-rb-pop {
  0% { transform: scale(1); }
  35% { transform: scale(0.75); }
  70% { transform: scale(1.12); }
  100% { transform: scale(1); }
}
@keyframes ui-rb-roll {
  from { opacity: 0; transform: translateY(70%); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-rb__icon[data-pop], .ui-rb__digit { animation: none; }
  .ui-rb__count[data-smooth] { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-rb {
  --ui-rb-ink: #c4c4c4;
  --ui-rb-like: #f472b6;
  --ui-rb-comment: #6b95ff;
  --ui-rb-repost: #a78bfa;
  --ui-rb-share: #ededed;
  background: #232326;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.35);
}
:where(.dark, [data-theme="dark"]) .ui-rb__btn:hover { background: rgba(255, 255, 255, 0.06); }
`;function N(){return(0,e.jsx)("div",{className:"reaction-demo",children:(0,e.jsx)(v,{reactions:{like:{count:128},comment:{count:24},repost:{count:9},share:{count:0}}})})}export{N as default};
