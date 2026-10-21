import{a as n}from"../shared/chunk-VXCLO5JM.js";import{a as x}from"../shared/chunk-PWBCLQI6.js";import{a as b}from"../shared/chunk-LKG2PFLG.js";import{a as t}from"../shared/chunk-KHKHHDEU.js";import{b as s}from"../shared/chunk-MOQMIKSW.js";var l=s(b()),u=s(x());var e=s(t()),i=n();function _({title:c="What's changed",period:o,icon:p,changes:g,className:h}){return(0,i.jsxs)(i.Fragment,{children:[(0,e.jsx)("style",{href:"ui-change-summary-clean",precedence:"default",children:y}),(0,e.jsxs)("section",{className:["ui-csc",h].filter(Boolean).join(" "),"aria-label":c,children:[(0,e.jsxs)("header",{className:"ui-csc__head",children:[(0,e.jsxs)("span",{className:"ui-csc__title",children:[(0,e.jsx)("span",{className:"ui-csc__icon",children:p??(0,i.jsx)(w,{})}),c]}),o&&(0,e.jsx)("span",{className:"ui-csc__period",children:o})]}),(0,e.jsx)("dl",{className:"ui-csc__list",children:g.map((a,m)=>{let r=a.tone??"neutral",f=a.direction??(r==="bad"?"down":"up");return(0,e.jsxs)("div",{className:"ui-csc__row",style:{animationDelay:`${120+m*70}ms`},children:[(0,e.jsx)("dt",{className:"ui-csc__label",children:a.label}),(0,e.jsxs)("dd",{className:"ui-csc__change",children:[(0,e.jsx)("span",{className:"ui-csc__trend","data-tone":r,"aria-hidden":"true",children:r==="neutral"?(0,i.jsx)(k,{}):(0,i.jsx)(v,{down:f==="down"})}),(0,e.jsx)("span",{className:"ui-csc__text",children:a.change})]})]},a.label)})})]})]})}var w=()=>(0,e.jsx)("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M2.5 4h4M2.5 8h8M6.5 12h7M9.5 4h1"})}),v=({down:c})=>(0,e.jsx)("svg",{viewBox:"0 0 12 12",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:c?(0,e.jsx)("path",{d:"M6 2.5v7M3 6.5l3 3 3-3"}):(0,e.jsx)("path",{d:"M6 9.5v-7M3 5.5l3-3 3 3"})}),k=()=>(0,e.jsx)("svg",{viewBox:"0 0 12 12",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M3 6h6"})}),y=`
/* Colors and motion as variables \u2013 override them on .ui-csc */
.ui-csc {
  --ui-csc-card: #ffffff;
  --ui-csc-ink: rgba(0, 0, 0, 0.88);
  --ui-csc-strong: #000000;
  --ui-csc-text: rgba(0, 0, 0, 0.61);
  --ui-csc-muted: rgba(0, 0, 0, 0.45);
  --ui-csc-icon: rgba(0, 0, 0, 0.447);
  --ui-csc-line: rgba(0, 0, 0, 0.06);
  --ui-csc-wash: rgba(0, 0, 0, 0.015);
  --ui-csc-good: #1a9a52;
  --ui-csc-good-fill: rgba(26, 154, 82, 0.08);
  --ui-csc-bad: #e5484d;
  --ui-csc-bad-fill: rgba(229, 72, 77, 0.08);
  --ui-csc-neutral-fill: rgba(0, 0, 0, 0.04);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-csc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-csc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  container-type: inline-size;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ui-csc-card);
  box-shadow: var(--ui-csc-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-csc-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-csc *, .ui-csc *::before, .ui-csc *::after { box-sizing: border-box; }
:where(.ui-csc) svg { display: block; flex: none; }

/* Heading row: icon + title, the period on the right */
.ui-csc__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 44px;
  padding: 0 16px;
}
.ui-csc__title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-weight: 500;
  white-space: nowrap;
  color: var(--ui-csc-strong);
}
.ui-csc__icon { display: grid; place-items: center; flex: none; width: 16px; height: 16px; color: var(--ui-csc-icon); }
.ui-csc__period { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-csc-muted); }

/* One row per metric, each under a hairline */
.ui-csc__list { margin: 0; }
.ui-csc__row {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  align-items: center;
  gap: 16px;
  min-height: 48px;
  padding: 0 16px;
  border-top: 0.5px solid var(--ui-csc-line);
  animation: ui-csc-in 520ms var(--ui-csc-ease) both;
  transition: background-color 140ms ease;
}
.ui-csc__row:hover { background: var(--ui-csc-wash); }
.ui-csc__label {
  overflow: hidden;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--ui-csc-ink);
}
.ui-csc__change {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  margin: 0;
  color: var(--ui-csc-text);
}
.ui-csc__text { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }

/* Trend mark: a small tinted square, no strokes */
.ui-csc__trend {
  display: grid;
  place-items: center;
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 5px;
}
.ui-csc__trend[data-tone="good"] { background: var(--ui-csc-good-fill); color: var(--ui-csc-good); }
.ui-csc__trend[data-tone="bad"] { background: var(--ui-csc-bad-fill); color: var(--ui-csc-bad); }
.ui-csc__trend[data-tone="neutral"] { background: var(--ui-csc-neutral-fill); color: var(--ui-csc-icon); }

/* Narrow: each metric stacks above its change, so the text wraps instead of being cut off */
@container (max-width: 400px) {
  .ui-csc__head { padding: 0 14px; }
  .ui-csc__row { grid-template-columns: minmax(0, 1fr); gap: 4px; padding: 10px 14px; }
  .ui-csc__label, .ui-csc__text { white-space: normal; }
  .ui-csc__change { align-items: flex-start; }
}
/* Touch screens: a little more room per row */
@media (pointer: coarse) {
  .ui-csc__row { min-height: 52px; }
}

@keyframes ui-csc-in {
  from { opacity: 0; transform: translateY(4px); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-csc__row { animation: none; transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-csc {
  --ui-csc-card: #1c1c1e;
  --ui-csc-ink: rgba(255, 255, 255, 0.9);
  --ui-csc-strong: #ffffff;
  --ui-csc-text: rgba(255, 255, 255, 0.62);
  --ui-csc-muted: rgba(255, 255, 255, 0.46);
  --ui-csc-icon: rgba(255, 255, 255, 0.5);
  --ui-csc-line: rgba(255, 255, 255, 0.08);
  --ui-csc-wash: rgba(255, 255, 255, 0.025);
  --ui-csc-good: #3ec27a;
  --ui-csc-good-fill: rgba(62, 194, 122, 0.14);
  --ui-csc-bad: #f2777b;
  --ui-csc-bad-fill: rgba(229, 72, 77, 0.14);
  --ui-csc-neutral-fill: rgba(255, 255, 255, 0.08);
  --ui-csc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
}
`,N=[{label:"Active users",change:"Up 6.1% to 18.2K",tone:"good"},{label:"Activation",change:"Climbed to 41%, up 3 pts",tone:"good"},{label:"Churn",change:"Down to 2.1% from 2.6%",tone:"good",direction:"down"},{label:"Support tickets",change:"Up 14% to 312",tone:"bad",direction:"up"}];function d(){return(0,e.jsx)("div",{className:"change-demo",children:(0,i.jsx)(_,{period:"This week",changes:N})})}(0,u.createRoot)(document.getElementById("root")).render(l.default.createElement(d));
