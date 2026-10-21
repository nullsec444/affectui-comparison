import{a as X}from"../shared/chunk-PWBCLQI6.js";import{a as O}from"../shared/chunk-LKG2PFLG.js";import{a as D}from"../shared/chunk-KHKHHDEU.js";import{b as f}from"../shared/chunk-MOQMIKSW.js";var L=f(O()),P=f(X());var Z=f(O()),ei=f(D()),e=f(D()),ii=ei,r=Z,q=4;function ai({groups:s,value:d,defaultValue:m={},onChange:h,defaultOpen:b,title:_="Filters",hints:N=!0,className:U}){let[K,V]=(0,r.useState)(m),x=d??K,[v,T]=(0,r.useState)(()=>new Set(b??s.slice(0,1).map(i=>i.id))),[k,$]=(0,r.useState)(null),j=(0,r.useRef)(null),z=(0,r.useRef)(null),W=ti(z),I=(0,r.useRef)(null),[F,G]=(0,r.useState)(1/0),M=i=>{d===void 0&&V(i),h?.(i)},E=(i,a)=>x[i]?.includes(a)??!1,C=(i,a)=>{let t=x[i]??[];M({...x,[i]:t.includes(a)?t.filter(o=>o!==a):[...t,a]})},w=i=>T(a=>{let t=new Set(a);return t.has(i)?t.delete(i):t.add(i),t}),l=s.flatMap(i=>i.options.filter(a=>E(i.id,a.id)).map(a=>({group:i,option:a,label:`${i.chipPrefix??""}${a.label}`}))),Q=l.map(i=>`${i.group.id}:${i.option.id}`).join("|");(0,r.useLayoutEffect)(()=>{let i=z.current,a=I.current;if(!i||!a)return;let t=()=>{let n=[...a.children].map(S=>S.offsetWidth+q),g=n.pop()??0,y=getComputedStyle(i),J=i.clientWidth-parseFloat(y.paddingLeft)-parseFloat(y.paddingRight)+q,H=0,u=0;for(;u<n.length;u++){let S=u+1<n.length?g:0;if(H+n[u]+S>J)break;H+=n[u]}G(u)};t();let o=new ResizeObserver(t);return o.observe(i),()=>o.disconnect()},[Q]);let Y=l.slice(0,F),p=l.slice(F),c=s.flatMap(i=>[{kind:"group",group:i},...v.has(i.id)?i.options.map(a=>({kind:"option",group:i,option:a})):[]]),R=i=>i.kind==="group"?`g:${i.group.id}`:`o:${i.group.id}:${i.option.id}`,A=i=>{$(i),j.current?.querySelector(`[data-key="${CSS.escape(i)}"]`)?.focus()};return(0,e.jsxs)("div",{className:["ui-fmc",U].filter(Boolean).join(" "),children:[(0,e.jsx)("style",{href:"ui-filter-menu-clean",precedence:"default",children:oi}),(0,e.jsxs)("div",{className:"ui-fmc__head",children:[(0,e.jsx)("span",{className:"ui-fmc__title",children:_}),(0,e.jsx)("button",{type:"button",className:"ui-fmc__clear",disabled:l.length===0,onClick:()=>M({}),children:"Clear all"})]}),(0,e.jsx)("div",{className:"ui-fmc__chips-outer",ref:W,children:(0,e.jsxs)("div",{className:"ui-fmc__chips",ref:z,"data-empty":l.length===0||void 0,"aria-live":"polite",children:[(0,e.jsxs)("div",{className:"ui-fmc__measure",ref:I,"aria-hidden":"true",children:[l.map(i=>(0,e.jsxs)("span",{className:"ui-fmc__chip",children:[(0,e.jsx)("span",{className:"ui-fmc__chip-label",children:i.label}),(0,e.jsx)("span",{className:"ui-fmc__chip-x"})]},`${i.group.id}:${i.option.id}`)),(0,e.jsx)("span",{className:"ui-fmc__chip ui-fmc__more",children:"+99"})]}),Y.map(i=>(0,e.jsxs)("span",{className:"ui-fmc__chip",children:[(0,e.jsx)("span",{className:"ui-fmc__chip-label",children:i.label}),(0,e.jsx)("button",{type:"button",className:"ui-fmc__chip-x","aria-label":`Remove ${i.label}`,onClick:()=>C(i.group.id,i.option.id),children:(0,e.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M4.5 4.5l7 7M11.5 4.5l-7 7"})})})]},`${i.group.id}:${i.option.id}`)),p.length>0&&(0,e.jsx)("span",{className:"ui-fmc__chip ui-fmc__more",title:p.map(i=>i.label).join(", "),"aria-label":`${p.length} more: ${p.map(i=>i.label).join(", ")}`,children:(0,e.jsxs)("span",{className:"ui-fmc__roll",children:["+",p.length]},p.length)})]})}),(0,e.jsx)("div",{className:"ui-fmc__groups",ref:j,onKeyDown:i=>{let a=c.findIndex(o=>R(o)===k),t=c[a];if(i.key==="ArrowDown"||i.key==="ArrowUp"){i.preventDefault();let o=c[Math.max(0,Math.min(c.length-1,a+(i.key==="ArrowDown"?1:-1)))]??c[0];A(R(o))}else if(i.key==="Home"||i.key==="End")i.preventDefault(),A(R(c[i.key==="Home"?0:c.length-1]));else if(t&&(i.key==="ArrowRight"||i.key==="ArrowLeft")){i.preventDefault();let o=t.group.id;i.key==="ArrowRight"&&!v.has(o)&&w(o),i.key==="ArrowLeft"&&(v.has(o)&&w(o),A(`g:${o}`))}else t&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),t.kind==="group"?w(t.group.id):C(t.group.id,t.option.id))},children:s.map(i=>{let a=v.has(i.id),t=x[i.id]?.length??0,o=`g:${i.id}`;return(0,e.jsxs)("section",{className:"ui-fmc__group","data-open":a?"":void 0,children:[(0,e.jsxs)("button",{type:"button",className:"ui-fmc__group-head","data-key":o,tabIndex:k===o||k===null&&i===s[0]?0:-1,"aria-expanded":a,"aria-controls":`${i.id}-options`,onFocus:()=>$(o),onClick:()=>w(i.id),children:[(0,e.jsx)("svg",{className:"ui-fmc__chevron",viewBox:"0 0 16 16","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M4.5 6.25 8 9.75l3.5-3.5"})}),(0,e.jsx)("span",{className:"ui-fmc__group-label",children:i.label}),(0,e.jsx)("span",{className:"ui-fmc__group-count",children:i.options.length}),(0,e.jsx)("span",{className:"ui-fmc__group-picked","aria-live":"polite",children:t>0&&(0,e.jsx)("span",{className:"ui-fmc__roll",children:`${t} filter${t===1?"":"s"}`},t)})]}),(0,e.jsx)("div",{className:"ui-fmc__panel",id:`${i.id}-options`,role:"group","aria-label":i.label,children:(0,e.jsx)("div",{className:"ui-fmc__panel-inner",children:i.options.map(n=>{let g=`o:${i.id}:${n.id}`,y=E(i.id,n.id);return(0,e.jsxs)("button",{type:"button",role:"checkbox","aria-checked":y,className:"ui-fmc__option","data-key":g,tabIndex:a&&k===g?0:-1,onFocus:()=>$(g),onClick:()=>C(i.id,n.id),children:[(0,e.jsx)("span",{className:"ui-fmc__box","aria-hidden":"true",children:(0,e.jsx)("svg",{viewBox:"0 0 16 16",children:(0,e.jsx)("path",{d:"m4.25 8.25 2.5 2.5 5-5.5"})})}),(0,e.jsx)("span",{className:"ui-fmc__option-label",children:n.label})]},n.id)})})})]},i.id)})}),N&&(0,e.jsxs)("div",{className:"ui-fmc__hints","aria-hidden":"true",children:[(0,e.jsxs)("span",{className:"ui-fmc__hint",children:[(0,e.jsx)("kbd",{children:"\u2191"}),(0,e.jsx)("kbd",{children:"\u2193"}),(0,e.jsx)("span",{children:"to navigate"})]}),(0,e.jsxs)("span",{className:"ui-fmc__hint",children:[(0,e.jsx)("kbd",{children:"\u21B5"}),(0,e.jsx)("span",{children:"to select"})]})]})]})}function ti(s){let d=(0,r.useRef)(null);return(0,r.useLayoutEffect)(()=>{let m=d.current,h=s.current;if(!m||!h)return;let b=()=>{m.style.height=`${h.offsetHeight}px`};b();let _=new ResizeObserver(b);_.observe(h);let N=requestAnimationFrame(()=>m.setAttribute("data-smooth",""));return()=>{_.disconnect(),cancelAnimationFrame(N)}},[s]),d}var oi=`
/* Colors and motion as variables \u2013 override them on .ui-fmc */
.ui-fmc {
  --ui-fmc-card: #ffffff;
  --ui-fmc-ink: rgba(0, 0, 0, 0.88);
  --ui-fmc-strong: #000000;
  --ui-fmc-text: rgba(0, 0, 0, 0.61);
  --ui-fmc-muted: rgba(0, 0, 0, 0.45);
  --ui-fmc-faint: rgba(0, 0, 0, 0.27);
  --ui-fmc-icon: rgba(0, 0, 0, 0.447);
  --ui-fmc-line: rgba(0, 0, 0, 0.06);
  --ui-fmc-fill: rgba(0, 0, 0, 0.06);
  --ui-fmc-fill-strong: rgba(0, 0, 0, 0.1);
  --ui-fmc-wash: rgba(0, 0, 0, 0.03);
  --ui-fmc-box-ring: rgba(0, 0, 0, 0.22);
  --ui-fmc-accent: rgba(0, 96, 226, 0.765);
  --ui-fmc-check: #ffffff;
  --ui-fmc-focus: rgba(0, 96, 226, 0.35);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-fmc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-fmc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-fmc-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  container-type: inline-size;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ui-fmc-card);
  box-shadow: var(--ui-fmc-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-fmc-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-fmc *, .ui-fmc *::before, .ui-fmc *::after { box-sizing: border-box; }
:where(.ui-fmc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; text-align: left; cursor: pointer; -webkit-tap-highlight-color: transparent; }
:where(.ui-fmc) svg { display: block; flex: none; }
.ui-fmc button:focus-visible { outline: 2px solid var(--ui-fmc-focus); outline-offset: 1px; }

/* ---------- Header ---------- */

.ui-fmc__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 10px 8px 16px; }
.ui-fmc__title { font-size: 15px; line-height: 24px; font-weight: 500; color: var(--ui-fmc-strong); }
/* Clear all: a quiet ghost button */
.ui-fmc__clear {
  height: 28px;
  padding: 0 8px !important;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-fmc-text);
  transition: color 160ms ease, background-color 160ms ease;
}
.ui-fmc__clear:hover:not(:disabled) { background: var(--ui-fmc-wash); color: var(--ui-fmc-ink); }
.ui-fmc__clear:disabled { color: var(--ui-fmc-faint); cursor: default; }

/* ---------- Chips: one line, the rest go into "+N" ---------- */

.ui-fmc__chips-outer { overflow: hidden; }
.ui-fmc__chips-outer[data-smooth] { transition: height 320ms var(--ui-fmc-ease); }
.ui-fmc__chips { position: relative; display: flex; flex-wrap: nowrap; gap: 4px; padding: 0 16px 12px; overflow: hidden; }
.ui-fmc__chips[data-empty] { padding-bottom: 0; }
.ui-fmc__measure { position: absolute; top: 0; left: 0; display: flex; gap: 4px; width: max-content; visibility: hidden; pointer-events: none; }
.ui-fmc__chip {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 2px;
  height: 24px;
  padding: 0 3px 0 8px;
  border-radius: 6px;
  background: var(--ui-fmc-fill);
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: var(--ui-fmc-ink);
  white-space: nowrap;
  animation: ui-fmc-chip-in 260ms var(--ui-fmc-ease) both;
}
.ui-fmc__chip-label { max-width: 180px; overflow: hidden; text-overflow: ellipsis; }
.ui-fmc__chip-x {
  display: grid;
  place-items: center;
  flex: none;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  color: var(--ui-fmc-icon);
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-fmc__chip-x:hover { background: var(--ui-fmc-fill); color: var(--ui-fmc-ink); }
.ui-fmc__chip-x svg { width: 12px; height: 12px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; }
.ui-fmc__more { padding: 0 8px; color: var(--ui-fmc-text); font-variant-numeric: tabular-nums; cursor: default; }
.ui-fmc__roll { display: inline-block; animation: ui-fmc-roll 300ms var(--ui-fmc-ease) both; }

/* ---------- Groups ---------- */

.ui-fmc__groups { display: grid; padding: 4px; border-top: 0.5px solid var(--ui-fmc-line); }
.ui-fmc__group-head {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 32px;
  padding: 0 8px !important;
  border-radius: 6px;
  /* Hover comes in crisp and fades out when the pointer moves on */
  transition: background-color 140ms ease;
}
.ui-fmc__group-head:hover { background: var(--ui-fmc-wash); transition-duration: 90ms; }
.ui-fmc__group-head:focus-visible, .ui-fmc__option:focus-visible { outline-offset: -2px; }
.ui-fmc__chevron {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--ui-fmc-icon);
  stroke-width: 1.1;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-90deg);
  transition: transform 260ms var(--ui-fmc-ease);
}
.ui-fmc__group[data-open] .ui-fmc__chevron { transform: none; }
.ui-fmc__group-label { font-weight: 500; color: var(--ui-fmc-ink); white-space: nowrap; }
.ui-fmc__group-count { font-size: 12px; line-height: 16px; color: var(--ui-fmc-faint); font-variant-numeric: tabular-nums; }
.ui-fmc__group-picked { display: inline-flex; margin-left: auto; overflow: hidden; font-size: 12px; line-height: 16px; color: var(--ui-fmc-muted); font-variant-numeric: tabular-nums; white-space: nowrap; }

.ui-fmc__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-fmc-ease);
}
.ui-fmc__group[data-open] .ui-fmc__panel { grid-template-rows: 1fr; }
.ui-fmc__panel-inner {
  display: grid;
  min-height: 0;
  overflow: hidden;
  padding: 0;
  opacity: 0;
  transition: opacity 220ms ease, padding 320ms var(--ui-fmc-ease);
}
.ui-fmc__group[data-open] .ui-fmc__panel-inner { opacity: 1; padding: 0 0 4px; }

/* Options sit under the group's label, the checkbox lined up with its text */
.ui-fmc__option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 32px;
  padding: 0 8px 0 32px !important;
  border-radius: 6px;
  color: var(--ui-fmc-ink);
  transition: background-color 140ms ease;
}
.ui-fmc__option:hover { background: var(--ui-fmc-wash); transition-duration: 90ms; }
.ui-fmc__option-label { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
/* Checkbox: 14px with a hairline, blue when picked; the check draws itself in */
.ui-fmc__box {
  display: grid;
  place-items: center;
  flex: none;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  background: var(--ui-fmc-card);
  box-shadow: inset 0 0 0 0.5px var(--ui-fmc-box-ring), 0 1px 1px 0 rgba(0, 0, 0, 0.04);
  transition: background-color 160ms ease, box-shadow 160ms ease;
}
.ui-fmc__box svg {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: var(--ui-fmc-check);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 12;
  stroke-dashoffset: 12;
  transition: stroke-dashoffset 240ms var(--ui-fmc-ease);
}
.ui-fmc__option[aria-checked="true"] .ui-fmc__box { background: var(--ui-fmc-accent); box-shadow: none; }
.ui-fmc__option[aria-checked="true"] .ui-fmc__box svg { stroke-dashoffset: 0; transition-delay: 40ms; }

/* ---------- Keyboard hints: the last row of the card ---------- */

.ui-fmc__hints {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 32px;
  padding: 0 12px;
  border-top: 0.5px solid var(--ui-fmc-line);
  font-size: 12px;
  line-height: 16px;
  color: var(--ui-fmc-muted);
}
.ui-fmc__hint { display: inline-flex; align-items: center; gap: 2px; white-space: nowrap; }
.ui-fmc__hint > span { margin-left: 4px; }
.ui-fmc kbd {
  display: inline-grid;
  place-items: center;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 4px;
  background: var(--ui-fmc-card);
  box-shadow: var(--ui-fmc-shadow);
  font-family: inherit;
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
  color: var(--ui-fmc-text);
}

@keyframes ui-fmc-chip-in { from { opacity: 0; transform: scale(0.9); } }
@keyframes ui-fmc-roll { from { opacity: 0; transform: translateY(60%); } to { opacity: 1; transform: none; } }

/* Narrow: a bit less side padding, shorter chips */
@container (max-width: 320px) {
  .ui-fmc__head { padding-left: 14px; }
  .ui-fmc__chips { padding-left: 14px; padding-right: 14px; }
  .ui-fmc__chip-label { max-width: 132px; }
}
/* Touch screens: taller rows and buttons */
@media (hover: none) and (pointer: coarse) {
  .ui-fmc__clear { height: 36px; }
  .ui-fmc__chip { height: 32px; }
  .ui-fmc__chip-x { width: 26px; height: 26px; }
  .ui-fmc__group-head { height: 44px; }
  .ui-fmc__option { height: 44px; }
  .ui-fmc__box { width: 18px; height: 18px; border-radius: 5px; }
  .ui-fmc__box svg { width: 14px; height: 14px; }
  .ui-fmc__hints { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-fmc *, .ui-fmc *::before, .ui-fmc *::after { animation: none !important; transition: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-fmc {
  --ui-fmc-card: #1c1c1e;
  --ui-fmc-ink: rgba(255, 255, 255, 0.9);
  --ui-fmc-strong: #ffffff;
  --ui-fmc-text: rgba(255, 255, 255, 0.62);
  --ui-fmc-muted: rgba(255, 255, 255, 0.46);
  --ui-fmc-faint: rgba(255, 255, 255, 0.3);
  --ui-fmc-icon: rgba(255, 255, 255, 0.5);
  --ui-fmc-line: rgba(255, 255, 255, 0.08);
  --ui-fmc-fill: rgba(255, 255, 255, 0.08);
  --ui-fmc-fill-strong: rgba(255, 255, 255, 0.13);
  --ui-fmc-wash: rgba(255, 255, 255, 0.04);
  --ui-fmc-box-ring: rgba(255, 255, 255, 0.28);
  --ui-fmc-accent: #4d8dff;
  --ui-fmc-check: #ffffff;
  --ui-fmc-focus: rgba(77, 141, 255, 0.5);
  --ui-fmc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
}
`,ni=[{id:"stage",label:"Stage",options:[{id:"new",label:"New lead"},{id:"qualified",label:"Qualified"},{id:"proposal",label:"Proposal sent"},{id:"negotiation",label:"Negotiation"}]},{id:"value",label:"Deal size",chipPrefix:"Deal: ",options:[{id:"s",label:"Under $5k"},{id:"m",label:"$5k\u201320k"},{id:"l",label:"$20k\u201350k"},{id:"xl",label:"Over $50k"}]},{id:"region",label:"Region",options:[{id:"dach",label:"DACH"},{id:"nordics",label:"Nordics"},{id:"uk",label:"UK & Ireland"},{id:"na",label:"North America"},{id:"apac",label:"APAC"}]}];function B(){return(0,e.jsx)("div",{className:"filter-menu-demo",children:(0,ii.jsx)(ai,{groups:ni,defaultValue:{stage:["qualified"],value:["m"],region:["dach"]}})})}(0,P.createRoot)(document.getElementById("root")).render(L.default.createElement(B));
