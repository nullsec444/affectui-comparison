import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t();function i({name:e,email:t,avatar:i,items:o=p,setup:s,className:c}){let l=(0,n.useRef)(null),[u,f]=(0,n.useState)(!1),h=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=h.current;if(!e)return;let t=new IntersectionObserver(([e])=>e.isIntersecting&&(f(!0),t.disconnect()),{threshold:.3});return t.observe(e),()=>t.disconnect()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`style`,{href:`ui-profile-menu-clean`,precedence:`default`,children:m}),(0,r.jsx)(`section`,{ref:h,className:[`ui-pmc`,c].filter(Boolean).join(` `),"data-filled":u||void 0,children:(0,r.jsxs)(`div`,{className:`ui-pmc__card`,children:[(0,r.jsxs)(`header`,{className:`ui-pmc__user`,children:[(0,r.jsx)(`span`,{className:`ui-pmc__avatar`,children:i??(0,r.jsx)(d,{})}),(0,r.jsxs)(`span`,{className:`ui-pmc__who`,children:[(0,r.jsx)(`span`,{className:`ui-pmc__name`,children:e}),(0,r.jsx)(`span`,{className:`ui-pmc__email`,children:t})]})]}),(0,r.jsx)(`div`,{ref:l,className:`ui-pmc__items`,role:`menu`,"aria-label":`Account`,onKeyDown:e=>{let t=[...l.current?.querySelectorAll(`button`)??[]],n=t.indexOf(document.activeElement),r=e.key===`ArrowDown`?(n+1)%t.length:e.key===`ArrowUp`?(n-1+t.length)%t.length:e.key===`Home`?0:e.key===`End`?t.length-1:null;r!==null&&(e.preventDefault(),t[r]?.focus())},children:o.map(e=>(0,r.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`ui-pmc__item`,onClick:e.onSelect,children:[(0,r.jsx)(`span`,{className:`ui-pmc__icon`,children:e.icon}),(0,r.jsx)(`span`,{className:`ui-pmc__label`,children:e.label}),e.badge&&(0,r.jsx)(`span`,{className:`ui-pmc__badge`,children:e.badge})]},e.id))}),s&&(0,r.jsx)(a,{...s})]})})]})}function a({done:e,total:t,next:n,onContinue:i}){let a=t>0?Math.min(1,Math.max(0,e/t)):0,o=Math.round(a*100),s=n&&e<t;return(0,r.jsxs)(`div`,{className:`ui-pmc__setup`,children:[(0,r.jsxs)(`div`,{className:`ui-pmc__setup-head`,children:[(0,r.jsx)(`span`,{className:`ui-pmc__setup-title`,children:`Profile setup`}),(0,r.jsxs)(`span`,{className:`ui-pmc__setup-count`,children:[Math.min(e,t),`/`,t]})]}),(0,r.jsx)(`span`,{className:`ui-pmc__track`,role:`progressbar`,"aria-label":`Profile setup`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o,children:(0,r.jsx)(`span`,{className:`ui-pmc__fill`,style:{transform:`scaleX(${a})`}})}),s&&(0,r.jsxs)(`button`,{type:`button`,className:`ui-pmc__next`,onClick:i,children:[(0,r.jsxs)(`span`,{className:`ui-pmc__next-label`,children:[(0,r.jsx)(`span`,{className:`ui-pmc__next-hint`,children:`Next:`}),` `,n]}),(0,r.jsx)(f,{})]})]})}var o=({children:e})=>(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.1`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:e}),s=()=>(0,r.jsxs)(o,{children:[(0,r.jsx)(`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`}),(0,r.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),c=()=>(0,r.jsxs)(o,{children:[(0,r.jsx)(`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`}),(0,r.jsx)(`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4M16 13H8M16 17H8M10 9H8`})]}),l=()=>(0,r.jsxs)(o,{children:[(0,r.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1.5`}),(0,r.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1.5`}),(0,r.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1.5`}),(0,r.jsx)(`path`,{d:`M17.5 3v7M14 6.5h7`})]}),u=()=>(0,r.jsx)(o,{children:(0,r.jsx)(`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9`})}),d=()=>(0,r.jsxs)(`svg`,{viewBox:`0 0 40 40`,"aria-hidden":`true`,children:[(0,r.jsx)(`circle`,{cx:`20`,cy:`20`,r:`20`,fill:`currentColor`,opacity:`0.1`}),(0,r.jsx)(`circle`,{cx:`20`,cy:`16`,r:`4.75`,fill:`currentColor`}),(0,r.jsx)(`path`,{d:`M11.5 28.25c.9-4 4.3-6.75 8.5-6.75s7.6 2.75 8.5 6.75c.15.7-.4 1.25-1.1 1.25H12.6c-.7 0-1.25-.55-1.1-1.25Z`,fill:`currentColor`})]}),f=()=>(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.1`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M5 12h14M13 6l6 6-6 6`})}),p=[{id:`settings`,label:`Settings`,icon:(0,r.jsx)(s,{})},{id:`docs`,label:`Docs`,icon:(0,r.jsx)(c,{})},{id:`apps`,label:`Apps`,icon:(0,r.jsx)(l,{}),badge:`New`},{id:`logout`,label:`Logout`,icon:(0,r.jsx)(u,{})}],m=`
/* Colors and motion as variables – override them on .ui-pmc */
.ui-pmc {
  --ui-pmc-card: #ffffff;
  --ui-pmc-strong: #000000;
  --ui-pmc-ink: rgba(0, 0, 0, 0.88);
  --ui-pmc-text: rgba(0, 0, 0, 0.61);
  --ui-pmc-muted: rgba(0, 0, 0, 0.45);
  --ui-pmc-faint: rgba(0, 0, 0, 0.27);
  --ui-pmc-icon: rgba(0, 0, 0, 0.447);
  --ui-pmc-line: rgba(0, 0, 0, 0.06);
  --ui-pmc-wash: rgba(0, 0, 0, 0.03);
  --ui-pmc-hover: rgba(0, 0, 0, 0.06);
  --ui-pmc-track: rgba(0, 0, 0, 0.06);
  --ui-pmc-accent: rgba(0, 96, 226, 0.765);
  --ui-pmc-focus: rgba(0, 96, 226, 0.35);
  --ui-pmc-badge: #e11d48;
  --ui-pmc-badge-wash: rgba(225, 29, 72, 0.08);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift, like a popover */
  --ui-pmc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-pmc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  container-type: inline-size;
  width: 100%;
  max-width: 260px;
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-pmc-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-pmc *, .ui-pmc *::before, .ui-pmc *::after { box-sizing: border-box; }
:where(.ui-pmc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; text-align: left; cursor: pointer; }
:where(.ui-pmc) svg { display: block; flex: none; }

/* One white menu card – the edge is a shadow, not a border */
.ui-pmc__card {
  padding: 4px;
  border-radius: 10px;
  background: var(--ui-pmc-card);
  box-shadow: var(--ui-pmc-shadow);
}

/* The signed-in user, separated from the actions by a hairline */
.ui-pmc__user {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 -4px 4px;
  padding: 8px 12px 10px;
  border-bottom: 0.5px solid var(--ui-pmc-line);
}
.ui-pmc__avatar {
  flex: none;
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 50%;
  color: var(--ui-pmc-accent);
}
.ui-pmc__avatar > * { display: block; width: 100%; height: 100%; object-fit: cover; }
.ui-pmc__who { display: grid; min-width: 0; }
.ui-pmc__name {
  overflow: hidden;
  font-weight: 500;
  color: var(--ui-pmc-strong);
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-pmc__email {
  overflow: hidden;
  font-size: 12px;
  line-height: 16px;
  color: var(--ui-pmc-muted);
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Actions: quiet rows, a subtle fill on hover that fades out again */
.ui-pmc__items { display: grid; gap: 0; }
.ui-pmc__item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border-radius: 6px;
  color: var(--ui-pmc-ink);
  transition: background-color 140ms ease;
}
.ui-pmc__item:hover { background: var(--ui-pmc-hover); transition-duration: 60ms; }
.ui-pmc__item:focus-visible { background: var(--ui-pmc-hover); outline: none; }
.ui-pmc__item:active { background: rgba(0, 0, 0, 0.08); }

.ui-pmc__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--ui-pmc-icon);
  transition: color 140ms ease;
}
.ui-pmc__icon svg { width: 16px; height: 16px; }
.ui-pmc__icon svg * { vector-effect: non-scaling-stroke; }
.ui-pmc__item:hover .ui-pmc__icon,
.ui-pmc__item:focus-visible .ui-pmc__icon { color: var(--ui-pmc-ink); }

.ui-pmc__label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-pmc__badge {
  flex: none;
  padding: 0 6px;
  border-radius: 5px;
  background: var(--ui-pmc-badge-wash);
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  color: var(--ui-pmc-badge);
}

/* Profile setup: the last row of the card, under a hairline */
.ui-pmc__setup {
  margin: 4px -4px -4px;
  padding: 10px 12px 12px;
  border-top: 0.5px solid var(--ui-pmc-line);
}
.ui-pmc__setup:has(.ui-pmc__next) { padding-bottom: 6px; }
.ui-pmc__setup-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  line-height: 16px;
}
.ui-pmc__setup-title { color: var(--ui-pmc-text); font-weight: 500; }
.ui-pmc__setup-count { font-variant-numeric: tabular-nums; color: var(--ui-pmc-muted); }
.ui-pmc__track {
  display: block;
  height: 4px;
  margin-top: 8px;
  overflow: hidden;
  border-radius: 2px;
  background: var(--ui-pmc-track);
}
.ui-pmc__fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--ui-pmc-accent);
  transform-origin: left center;
  scale: 0 1;
  transition: scale 900ms var(--ui-pmc-ease) 150ms;
}
.ui-pmc[data-filled] .ui-pmc__fill { scale: 1 1; }
.ui-pmc__next {
  display: flex;
  align-items: center;
  gap: 8px;
  width: calc(100% + 16px);
  height: 28px;
  margin: 6px -8px 0;
  padding: 0 8px;
  border-radius: 6px;
  color: var(--ui-pmc-ink);
  transition: background-color 140ms ease;
}
.ui-pmc__next:hover { background: var(--ui-pmc-wash); }
.ui-pmc__next:focus-visible { outline: 2px solid var(--ui-pmc-focus); outline-offset: 1px; }
.ui-pmc__next-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-pmc__next-hint { color: var(--ui-pmc-muted); }
.ui-pmc__next svg {
  width: 16px;
  height: 16px;
  color: var(--ui-pmc-icon);
  transition: transform 200ms var(--ui-pmc-ease), color 140ms ease;
}
.ui-pmc__next svg * { vector-effect: non-scaling-stroke; }
.ui-pmc__next:hover svg { transform: translateX(2px); color: var(--ui-pmc-ink); }

/* Touch screens: taller rows */
@media (hover: none) and (pointer: coarse) {
  .ui-pmc__item { height: 40px; }
  .ui-pmc__next { height: 36px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-pmc__item, .ui-pmc__icon, .ui-pmc__fill, .ui-pmc__next, .ui-pmc__next svg { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-pmc {
  --ui-pmc-card: #1c1c1e;
  --ui-pmc-strong: #ffffff;
  --ui-pmc-ink: rgba(255, 255, 255, 0.9);
  --ui-pmc-text: rgba(255, 255, 255, 0.62);
  --ui-pmc-muted: rgba(255, 255, 255, 0.46);
  --ui-pmc-faint: rgba(255, 255, 255, 0.3);
  --ui-pmc-icon: rgba(255, 255, 255, 0.46);
  --ui-pmc-line: rgba(255, 255, 255, 0.08);
  --ui-pmc-wash: rgba(255, 255, 255, 0.04);
  --ui-pmc-hover: rgba(255, 255, 255, 0.08);
  --ui-pmc-track: rgba(255, 255, 255, 0.1);
  --ui-pmc-accent: #4d8dff;
  --ui-pmc-focus: rgba(77, 141, 255, 0.45);
  --ui-pmc-badge: #fb7185;
  --ui-pmc-badge-wash: rgba(225, 29, 72, 0.14);
  --ui-pmc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-pmc__item:active { background: rgba(255, 255, 255, 0.1); }
`;function h(){return(0,r.jsx)(`div`,{className:`profile-demo`,children:(0,r.jsx)(i,{name:`Lena Hartmann`,email:`lena.hartmann@fastmail.com`,setup:{done:3,total:5,next:`Add a profile photo`}})})}export{h as default};