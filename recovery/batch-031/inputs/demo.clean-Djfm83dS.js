import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t(),i=4;function a({groups:e,value:t,defaultValue:a={},onChange:c,defaultOpen:l,title:u=`Filters`,hints:d=!0,className:f}){let[p,m]=(0,n.useState)(a),h=t??p,[g,_]=(0,n.useState)(()=>new Set(l??e.slice(0,1).map(e=>e.id))),[v,y]=(0,n.useState)(null),b=(0,n.useRef)(null),x=(0,n.useRef)(null),S=o(x),C=(0,n.useRef)(null),[w,T]=(0,n.useState)(1/0),E=e=>{t===void 0&&m(e),c?.(e)},D=(e,t)=>h[e]?.includes(t)??!1,O=(e,t)=>{let n=h[e]??[];E({...h,[e]:n.includes(t)?n.filter(e=>e!==t):[...n,t]})},k=e=>_(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),A=e.flatMap(e=>e.options.filter(t=>D(e.id,t.id)).map(t=>({group:e,option:t,label:`${e.chipPrefix??``}${t.label}`}))),j=A.map(e=>`${e.group.id}:${e.option.id}`).join(`|`);(0,n.useLayoutEffect)(()=>{let e=x.current,t=C.current;if(!e||!t)return;let n=()=>{let n=[...t.children].map(e=>e.offsetWidth+i),r=n.pop()??0,a=getComputedStyle(e),o=e.clientWidth-parseFloat(a.paddingLeft)-parseFloat(a.paddingRight)+i,s=0,c=0;for(;c<n.length;c++){let e=c+1<n.length?r:0;if(s+n[c]+e>o)break;s+=n[c]}T(c)};n();let r=new ResizeObserver(n);return r.observe(e),()=>r.disconnect()},[j]);let M=A.slice(0,w),N=A.slice(w),P=e.flatMap(e=>[{kind:`group`,group:e},...g.has(e.id)?e.options.map(t=>({kind:`option`,group:e,option:t})):[]]),F=e=>e.kind===`group`?`g:${e.group.id}`:`o:${e.group.id}:${e.option.id}`,I=e=>{y(e),b.current?.querySelector(`[data-key="${CSS.escape(e)}"]`)?.focus()};return(0,r.jsxs)(`div`,{className:[`ui-fmc`,f].filter(Boolean).join(` `),children:[(0,r.jsx)(`style`,{href:`ui-filter-menu-clean`,precedence:`default`,children:s}),(0,r.jsxs)(`div`,{className:`ui-fmc__head`,children:[(0,r.jsx)(`span`,{className:`ui-fmc__title`,children:u}),(0,r.jsx)(`button`,{type:`button`,className:`ui-fmc__clear`,disabled:A.length===0,onClick:()=>E({}),children:`Clear all`})]}),(0,r.jsx)(`div`,{className:`ui-fmc__chips-outer`,ref:S,children:(0,r.jsxs)(`div`,{className:`ui-fmc__chips`,ref:x,"data-empty":A.length===0||void 0,"aria-live":`polite`,children:[(0,r.jsxs)(`div`,{className:`ui-fmc__measure`,ref:C,"aria-hidden":`true`,children:[A.map(e=>(0,r.jsxs)(`span`,{className:`ui-fmc__chip`,children:[(0,r.jsx)(`span`,{className:`ui-fmc__chip-label`,children:e.label}),(0,r.jsx)(`span`,{className:`ui-fmc__chip-x`})]},`${e.group.id}:${e.option.id}`)),(0,r.jsx)(`span`,{className:`ui-fmc__chip ui-fmc__more`,children:`+99`})]}),M.map(e=>(0,r.jsxs)(`span`,{className:`ui-fmc__chip`,children:[(0,r.jsx)(`span`,{className:`ui-fmc__chip-label`,children:e.label}),(0,r.jsx)(`button`,{type:`button`,className:`ui-fmc__chip-x`,"aria-label":`Remove ${e.label}`,onClick:()=>O(e.group.id,e.option.id),children:(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M4.5 4.5l7 7M11.5 4.5l-7 7`})})})]},`${e.group.id}:${e.option.id}`)),N.length>0&&(0,r.jsx)(`span`,{className:`ui-fmc__chip ui-fmc__more`,title:N.map(e=>e.label).join(`, `),"aria-label":`${N.length} more: ${N.map(e=>e.label).join(`, `)}`,children:(0,r.jsxs)(`span`,{className:`ui-fmc__roll`,children:[`+`,N.length]},N.length)})]})}),(0,r.jsx)(`div`,{className:`ui-fmc__groups`,ref:b,onKeyDown:e=>{let t=P.findIndex(e=>F(e)===v),n=P[t];if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let n=P[Math.max(0,Math.min(P.length-1,t+(e.key===`ArrowDown`?1:-1)))]??P[0];I(F(n))}else if(e.key===`Home`||e.key===`End`)e.preventDefault(),I(F(P[e.key===`Home`?0:P.length-1]));else if(n&&(e.key===`ArrowRight`||e.key===`ArrowLeft`)){e.preventDefault();let t=n.group.id;e.key===`ArrowRight`&&!g.has(t)&&k(t),e.key===`ArrowLeft`&&(g.has(t)&&k(t),I(`g:${t}`))}else n&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n.kind===`group`?k(n.group.id):O(n.group.id,n.option.id))},children:e.map(t=>{let n=g.has(t.id),i=h[t.id]?.length??0,a=`g:${t.id}`;return(0,r.jsxs)(`section`,{className:`ui-fmc__group`,"data-open":n?``:void 0,children:[(0,r.jsxs)(`button`,{type:`button`,className:`ui-fmc__group-head`,"data-key":a,tabIndex:v===a||v===null&&t===e[0]?0:-1,"aria-expanded":n,"aria-controls":`${t.id}-options`,onFocus:()=>y(a),onClick:()=>k(t.id),children:[(0,r.jsx)(`svg`,{className:`ui-fmc__chevron`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M4.5 6.25 8 9.75l3.5-3.5`})}),(0,r.jsx)(`span`,{className:`ui-fmc__group-label`,children:t.label}),(0,r.jsx)(`span`,{className:`ui-fmc__group-count`,children:t.options.length}),(0,r.jsx)(`span`,{className:`ui-fmc__group-picked`,"aria-live":`polite`,children:i>0&&(0,r.jsx)(`span`,{className:`ui-fmc__roll`,children:`${i} filter${i===1?``:`s`}`},i)})]}),(0,r.jsx)(`div`,{className:`ui-fmc__panel`,id:`${t.id}-options`,role:`group`,"aria-label":t.label,children:(0,r.jsx)(`div`,{className:`ui-fmc__panel-inner`,children:t.options.map(e=>{let i=`o:${t.id}:${e.id}`,a=D(t.id,e.id);return(0,r.jsxs)(`button`,{type:`button`,role:`checkbox`,"aria-checked":a,className:`ui-fmc__option`,"data-key":i,tabIndex:n&&v===i?0:-1,onFocus:()=>y(i),onClick:()=>O(t.id,e.id),children:[(0,r.jsx)(`span`,{className:`ui-fmc__box`,"aria-hidden":`true`,children:(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,children:(0,r.jsx)(`path`,{d:`m4.25 8.25 2.5 2.5 5-5.5`})})}),(0,r.jsx)(`span`,{className:`ui-fmc__option-label`,children:e.label})]},e.id)})})})]},t.id)})}),d&&(0,r.jsxs)(`div`,{className:`ui-fmc__hints`,"aria-hidden":`true`,children:[(0,r.jsxs)(`span`,{className:`ui-fmc__hint`,children:[(0,r.jsx)(`kbd`,{children:`↑`}),(0,r.jsx)(`kbd`,{children:`↓`}),(0,r.jsx)(`span`,{children:`to navigate`})]}),(0,r.jsxs)(`span`,{className:`ui-fmc__hint`,children:[(0,r.jsx)(`kbd`,{children:`↵`}),(0,r.jsx)(`span`,{children:`to select`})]})]})]})}function o(e){let t=(0,n.useRef)(null);return(0,n.useLayoutEffect)(()=>{let n=t.current,r=e.current;if(!n||!r)return;let i=()=>{n.style.height=`${r.offsetHeight}px`};i();let a=new ResizeObserver(i);a.observe(r);let o=requestAnimationFrame(()=>n.setAttribute(`data-smooth`,``));return()=>{a.disconnect(),cancelAnimationFrame(o)}},[e]),t}var s=`
/* Colors and motion as variables – override them on .ui-fmc */
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
`,c=[{id:`stage`,label:`Stage`,options:[{id:`new`,label:`New lead`},{id:`qualified`,label:`Qualified`},{id:`proposal`,label:`Proposal sent`},{id:`negotiation`,label:`Negotiation`}]},{id:`value`,label:`Deal size`,chipPrefix:`Deal: `,options:[{id:`s`,label:`Under $5k`},{id:`m`,label:`$5k–20k`},{id:`l`,label:`$20k–50k`},{id:`xl`,label:`Over $50k`}]},{id:`region`,label:`Region`,options:[{id:`dach`,label:`DACH`},{id:`nordics`,label:`Nordics`},{id:`uk`,label:`UK & Ireland`},{id:`na`,label:`North America`},{id:`apac`,label:`APAC`}]}];function l(){return(0,r.jsx)(`div`,{className:`filter-menu-demo`,children:(0,r.jsx)(a,{groups:c,defaultValue:{stage:[`qualified`],value:[`m`],region:[`dach`]}})})}export{l as default};