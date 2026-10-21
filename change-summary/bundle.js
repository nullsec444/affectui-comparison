import{a as d}from"../shared/chunk-VXCLO5JM.js";import{a as x}from"../shared/chunk-PWBCLQI6.js";import{a as _}from"../shared/chunk-LKG2PFLG.js";import{a as n}from"../shared/chunk-KHKHHDEU.js";import{b as r}from"../shared/chunk-MOQMIKSW.js";var l=r(_()),u=r(x());var e=r(n()),a=d();function b({title:t="What's changed",period:s,icon:h,changes:p,className:f}){return(0,a.jsxs)(a.Fragment,{children:[(0,e.jsx)("style",{href:"ui-change-summary",precedence:"default",children:y}),(0,e.jsxs)("section",{className:["ui-cs",f].filter(Boolean).join(" "),"aria-label":t,children:[(0,e.jsxs)("header",{className:"ui-cs__head",children:[(0,e.jsxs)("span",{className:"ui-cs__title",children:[h??(0,a.jsx)(w,{}),t]}),s&&(0,e.jsx)("span",{className:"ui-cs__period",children:s})]}),(0,e.jsx)("dl",{className:"ui-cs__card",children:p.map((i,m)=>{let o=i.tone??"neutral",g=i.direction??(o==="bad"?"down":"up");return(0,e.jsxs)("div",{className:"ui-cs__row",style:{animationDelay:`${120+m*70}ms`},children:[(0,e.jsx)("dt",{className:"ui-cs__label",children:i.label}),(0,e.jsxs)("dd",{className:"ui-cs__change",children:[(0,e.jsx)("span",{className:"ui-cs__trend","data-tone":o,"aria-hidden":"true",children:o==="neutral"?(0,a.jsx)(v,{}):(0,a.jsx)(k,{down:g==="down"})}),(0,e.jsx)("span",{className:"ui-cs__text",children:i.change})]})]},i.label)})})]})]})}var w=()=>(0,e.jsx)("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M2.5 4h4M2.5 8h8M6.5 12h7M9.5 4h1"})}),k=({down:t})=>(0,e.jsx)("svg",{viewBox:"0 0 12 12",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t?(0,e.jsx)("path",{d:"M6 2.5v7M3 6.5l3 3 3-3"}):(0,e.jsx)("path",{d:"M6 9.5v-7M3 5.5l3-3 3 3"})}),v=()=>(0,e.jsx)("svg",{viewBox:"0 0 12 12",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M3 6h6"})}),y=`
.ui-cs {
  --ui-cs-tray: #f0f0f0;
  --ui-cs-card: #ffffff;
  --ui-cs-line: #f0f0f0;
  --ui-cs-ink: #171717;
  --ui-cs-muted: #737373;
  --ui-cs-accent: #2f6bff;
  --ui-cs-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  container-type: inline-size;
  /* Like the Chat Composer: a gray tray with the heading, the white card sits on top of it */
  background: var(--ui-cs-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-cs-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-cs *, .ui-cs *::before, .ui-cs *::after { box-sizing: border-box; }

.ui-cs__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 18px 10px;
  font-size: 14px;
  line-height: 20px;
}
.ui-cs__title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: var(--ui-cs-accent);
}
.ui-cs__period { font-size: 13px; color: var(--ui-cs-muted); }

.ui-cs__card {
  margin: 0;
  overflow: hidden;
  background: var(--ui-cs-card);
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
.ui-cs__row {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  align-items: center;
  gap: 16px;
  min-height: 52px;
  padding: 0 20px;
  animation: ui-cs-in 520ms var(--ui-cs-ease) both;
  transition: background-color 140ms ease;
}
.ui-cs__row + .ui-cs__row { border-top: 1px solid var(--ui-cs-line); }
.ui-cs__row:hover { background: #fafafa; }
.ui-cs__label {
  overflow: hidden;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-cs__change {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: var(--ui-cs-muted);
}
.ui-cs__text { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
/* Narrow: each metric stacks above its change, so the text wraps instead of being cut off */
@container (max-width: 400px) {
  .ui-cs__row { grid-template-columns: minmax(0, 1fr); gap: 4px; padding: 11px 16px; }
  .ui-cs__label, .ui-cs__text { white-space: normal; }
  .ui-cs__change { align-items: flex-start; }
}
.ui-cs__trend {
  display: grid;
  place-items: center;
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 6px;
}
.ui-cs__trend[data-tone="good"] { background: #edfaf3; color: #1f8a4c; }
.ui-cs__trend[data-tone="bad"] { background: #fff0f0; color: #e5484d; }
.ui-cs__trend[data-tone="neutral"] { background: #f5f5f5; color: #8f8f8f; }

@keyframes ui-cs-in {
  from { opacity: 0; transform: translateY(4px); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-cs__row { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-cs {
  --ui-cs-tray: #161618;
  --ui-cs-card: #232326;
  --ui-cs-line: rgba(255, 255, 255, 0.08);
  --ui-cs-ink: #ededed;
  --ui-cs-muted: #8f8f8f;
  --ui-cs-accent: #6b95ff;
}
:where(.dark, [data-theme="dark"]) .ui-cs__card {
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-cs__row:hover { background: #2a2a2d; }
:where(.dark, [data-theme="dark"]) .ui-cs__trend[data-tone="good"] { background: rgba(31, 138, 76, 0.18); color: #3fbf74; }
:where(.dark, [data-theme="dark"]) .ui-cs__trend[data-tone="bad"] { background: rgba(229, 72, 77, 0.16); color: #f2777b; }
:where(.dark, [data-theme="dark"]) .ui-cs__trend[data-tone="neutral"] { background: #2a2a2d; color: #8f8f8f; }
`,N=[{label:"Active users",change:"Up 6.1% to 18.2K",tone:"good"},{label:"Activation",change:"Climbed to 41%, up 3 pts",tone:"good"},{label:"Churn",change:"Down to 2.1% from 2.6%",tone:"good",direction:"down"},{label:"Support tickets",change:"Up 14% to 312",tone:"bad",direction:"up"}];function c(){return(0,e.jsx)("div",{className:"change-demo",children:(0,a.jsx)(b,{period:"This week",changes:N})})}(0,u.createRoot)(document.getElementById("root")).render(l.default.createElement(c));
