import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t();function i({title:e=`Getting started`,steps:t,autoPlay:i=!1,interval:o=2200,onChange:s,className:c}){let[l,u]=(0,n.useState)(()=>new Set(t.filter(e=>e.done).map(e=>e.id))),[d,f]=(0,n.useState)(i),p=t.length,m=l.size,h=p?m/p:0,g=e=>u(n=>{let r=new Set(n);return r.has(e)?r.delete(e):r.add(e),s?.(t.map(e=>({...e,done:r.has(e.id)}))),r});return(0,n.useEffect)(()=>{if(!d)return;let e=t.find(e=>!l.has(e.id)),n=window.setTimeout(()=>{e?g(e.id):u(new Set(t.filter(e=>e.done).map(e=>e.id)))},e?o:o*2);return()=>clearTimeout(n)},[d,l]),(0,r.jsxs)(`div`,{className:[`ui-progressc`,c].filter(Boolean).join(` `),"data-complete":m===p||void 0,onPointerDown:()=>f(!1),onKeyDown:()=>f(!1),children:[(0,r.jsx)(`style`,{href:`ui-progress-tracker-clean`,precedence:`default`,children:a}),(0,r.jsxs)(`div`,{className:`ui-progressc__head`,children:[(0,r.jsx)(`h3`,{className:`ui-progressc__title`,children:e}),(0,r.jsxs)(`span`,{className:`ui-progressc__count`,"aria-hidden":`true`,children:[(0,r.jsx)(`span`,{className:`ui-progressc__digit`,children:m},m),`/`,p]})]}),(0,r.jsx)(`div`,{className:`ui-progressc__bar`,role:`progressbar`,"aria-label":e,"aria-valuemin":0,"aria-valuemax":p,"aria-valuenow":m,"aria-valuetext":`${m} of ${p} done`,children:(0,r.jsx)(`span`,{className:`ui-progressc__fill`,style:{transform:`scaleX(${h})`},children:(0,r.jsx)(`span`,{className:`ui-progressc__shine`},m)})}),(0,r.jsx)(`ul`,{className:`ui-progressc__list`,children:t.map((e,t)=>{let n=l.has(e.id);return(0,r.jsx)(`li`,{style:{animationDelay:`${180+t*90}ms`},children:(0,r.jsxs)(`button`,{type:`button`,role:`checkbox`,"aria-checked":n,className:`ui-progressc__step`,onClick:()=>g(e.id),children:[(0,r.jsx)(`span`,{className:`ui-progressc__check`,"aria-hidden":`true`,children:(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,children:(0,r.jsx)(`path`,{d:`M6.5 12.5l3.5 3.5 7.5-8`,pathLength:1})})}),(0,r.jsx)(`span`,{className:`ui-progressc__label`,children:(0,r.jsx)(`span`,{children:e.label})}),e.icon&&(0,r.jsx)(`span`,{className:`ui-progressc__icon`,"aria-hidden":`true`,children:e.icon})]})},e.id)})})]})}var a=`
/* Colors and motion as variables – override them on .ui-progressc (see Theming in the docs) */
.ui-progressc {
  --ui-pgc-card: #ffffff;
  --ui-pgc-strong: #000000;
  --ui-pgc-ink: rgba(0, 0, 0, 0.88);
  --ui-pgc-muted: rgba(0, 0, 0, 0.45);
  --ui-pgc-faint: rgba(0, 0, 0, 0.27);
  --ui-pgc-icon: rgba(0, 0, 0, 0.447);
  --ui-pgc-ring: rgba(0, 0, 0, 0.2);
  --ui-pgc-track: rgba(0, 0, 0, 0.06);
  --ui-pgc-hover: rgba(0, 0, 0, 0.03);
  --ui-pgc-accent: rgba(0, 96, 226, 0.765);
  --ui-pgc-on-accent: #ffffff;
  --ui-pgc-shine: rgba(255, 255, 255, 0.82);
  --ui-pgc-focus: rgba(0, 96, 226, 0.35);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-pgc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-pgc-ease: cubic-bezier(0.22, 1, 0.36, 1);

  container-type: inline-size;
  box-sizing: border-box;
  width: 100%;
  max-width: 340px;
  padding: 14px 6px 6px;
  background: var(--ui-pgc-card);
  border-radius: 10px;
  box-shadow: var(--ui-pgc-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--ui-pgc-ink);
  text-align: left;
  -webkit-font-smoothing: antialiased;
}
.ui-progressc *,
.ui-progressc *::before,
.ui-progressc *::after {
  box-sizing: border-box;
}
:where(.ui-progressc) button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  letter-spacing: inherit;
  color: inherit;
  cursor: pointer;
}

/* Header: the title and a quiet counter */
.ui-progressc__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 0 10px;
}
.ui-progressc__title {
  margin: 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--ui-pgc-strong);
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
}
.ui-progressc__count {
  font-size: 12px;
  line-height: 16px;
  color: var(--ui-pgc-muted);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
/* The number rolls in from below whenever it changes */
.ui-progressc__digit {
  display: inline-block;
  color: var(--ui-pgc-ink);
  animation: ui-progressc-roll 560ms var(--ui-pgc-ease);
}

/* A thin blue bar on a gray track */
.ui-progressc__bar {
  position: relative;
  height: 4px;
  margin: 10px 10px 8px;
  border-radius: 2px;
  background: var(--ui-pgc-track);
  overflow: hidden;
}
.ui-progressc__fill {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--ui-pgc-accent);
  transform-origin: 0 50%;
  overflow: hidden;
  transition: transform 1100ms var(--ui-pgc-ease);
}
/* A light band – always lighter than the bar – sweeps across */
.ui-progressc__shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 30%, var(--ui-pgc-shine) 50%, transparent 70%) 0 0 / 220% 100%
    no-repeat;
  animation: ui-progressc-shine 1400ms ease-out both;
}

.ui-progressc__list {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* On mount the card settles in, then the rows fade up one after another */
.ui-progressc {
  animation: ui-progressc-in 520ms var(--ui-pgc-ease) both;
}
.ui-progressc__list > li {
  position: relative;
  animation: ui-progressc-row-in 640ms var(--ui-pgc-ease) both;
}

.ui-progressc__step {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 6px 10px;
  border-radius: 6px;
  background: transparent;
  font-size: 13px;
  line-height: 20px;
  text-align: left;
  transition: background-color 90ms ease-out;
}
.ui-progressc__step:hover {
  background: var(--ui-pgc-hover);
}
.ui-progressc__step:focus-visible {
  outline: 2px solid var(--ui-pgc-focus);
  outline-offset: 0;
}

/* Checkbox: a hairline ring that fills blue and pops, then the tick draws itself */
.ui-progressc__check {
  position: relative;
  flex: none;
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: transparent;
  box-shadow: inset 0 0 0 1px var(--ui-pgc-ring);
  transition:
    background-color 220ms var(--ui-pgc-ease),
    box-shadow 220ms var(--ui-pgc-ease);
}
.ui-progressc__check svg {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: var(--ui-pgc-on-accent);
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 120ms ease-in;
}
.ui-progressc__step[aria-checked="true"] .ui-progressc__check {
  background: var(--ui-pgc-accent);
  box-shadow: inset 0 0 0 1px transparent;
  animation: ui-progressc-pop 560ms var(--ui-pgc-ease);
}
.ui-progressc__step[aria-checked="true"] .ui-progressc__check svg {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 420ms var(--ui-pgc-ease) 160ms;
}

/* Label: grays out while a thin line strikes through it */
.ui-progressc__label {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 300ms ease;
}
.ui-progressc__label > span {
  background: linear-gradient(var(--ui-pgc-faint), var(--ui-pgc-faint)) 0 60% / 0% 1px no-repeat;
  transition: background-size 380ms var(--ui-pgc-ease);
}
.ui-progressc__step[aria-checked="true"] .ui-progressc__label {
  color: var(--ui-pgc-muted);
}
.ui-progressc__step[aria-checked="true"] .ui-progressc__label > span {
  background-size: 100% 1px;
  transition: background-size 620ms var(--ui-pgc-ease) 220ms;
}

.ui-progressc__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  color: var(--ui-pgc-icon);
  transition: opacity 300ms ease;
}
.ui-progressc__icon > svg {
  width: 100%;
  height: 100%;
}
.ui-progressc__step[aria-checked="true"] .ui-progressc__icon {
  opacity: 0.45;
}

/* Touch screens: taller rows */
@media (pointer: coarse) {
  .ui-progressc__step {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
/* Narrow cards: a little less inset */
@container (max-width: 300px) {
  .ui-progressc__head { padding: 0 8px; }
  .ui-progressc__bar { margin-left: 8px; margin-right: 8px; }
  .ui-progressc__step { padding-left: 8px; padding-right: 8px; }
}

@keyframes ui-progressc-pop {
  0% { transform: scale(0.9); }
  60% { transform: scale(1.08); }
  100% { transform: scale(1); }
}
@keyframes ui-progressc-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}
@keyframes ui-progressc-row-in {
  from {
    opacity: 0;
    filter: blur(3px);
    transform: translateY(8px);
  }
}
@keyframes ui-progressc-roll {
  from { opacity: 0; transform: translateY(60%); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-progressc-shine {
  from { background-position: 120% 0; opacity: 1; }
  to { background-position: -20% 0; opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-progressc,
  .ui-progressc *,
  .ui-progressc *::before,
  .ui-progressc *::after {
    animation: none !important;
    transition-duration: 1ms !important;
    transition-delay: 0ms !important;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-progressc {
  --ui-pgc-card: #1c1c1e;
  --ui-pgc-strong: #ffffff;
  --ui-pgc-ink: rgba(255, 255, 255, 0.9);
  --ui-pgc-muted: rgba(255, 255, 255, 0.46);
  --ui-pgc-faint: rgba(255, 255, 255, 0.3);
  --ui-pgc-icon: rgba(255, 255, 255, 0.5);
  --ui-pgc-ring: rgba(255, 255, 255, 0.24);
  --ui-pgc-track: rgba(255, 255, 255, 0.08);
  --ui-pgc-hover: rgba(255, 255, 255, 0.04);
  --ui-pgc-accent: #4d8dff;
  --ui-pgc-on-accent: #ffffff;
  --ui-pgc-shine: #ffffff;
  --ui-pgc-focus: rgba(77, 141, 255, 0.5);
  --ui-pgc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
}
`,o=[{id:`tools`,label:`Connect your tools`},{id:`notify`,label:`Turn on notifications`},{id:`updates`,label:`Catch up on blockers`},{id:`priorities`,label:`Summarize priorities`},{id:`project`,label:`Create a project`,done:!0}];function s(){return(0,r.jsx)(`div`,{className:`progress-demo`,children:(0,r.jsx)(i,{steps:o,autoPlay:!0})})}export{s as default};