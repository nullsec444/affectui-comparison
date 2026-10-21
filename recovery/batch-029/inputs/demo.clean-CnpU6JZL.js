import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t(),i=[`No signal`,`Weak signal`,`Good signal`,`Strong signal`];function a({title:e=`Smart recommendation`,options:t,onAccept:a,onUndo:l,defaultOpen:u=!0,className:d}){let[f,p]=(0,n.useState)(t[0].id),[m,h]=(0,n.useState)(null),[g,_]=(0,n.useState)(u),[v,y]=(0,n.useState)(!1),b=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!v)return;let e=e=>!b.current?.contains(e.target)&&y(!1),t=e=>e.key===`Escape`&&y(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[v]);let x=t.find(e=>e.id===f)??t[0],S=x.id===t[0].id,C=m===x.id;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`style`,{href:`ui-smart-recommendation-clean`,precedence:`default`,children:c}),(0,r.jsxs)(`section`,{className:[`ui-src`,d].filter(Boolean).join(` `),"aria-label":e,"data-accepted":C||void 0,children:[(0,r.jsxs)(`button`,{type:`button`,className:`ui-src__head`,"aria-expanded":g,onClick:()=>_(e=>!e),children:[(0,r.jsx)(o,{}),(0,r.jsx)(`span`,{className:`ui-src__title`,children:e}),!S&&(0,r.jsx)(`span`,{className:`ui-src__pill`,children:`Alternative`}),(0,r.jsx)(`span`,{className:`ui-src__chevron`,children:(0,r.jsx)(s,{d:`m4.5 6.25 3.5 3.5 3.5-3.5`})})]}),(0,r.jsx)(`div`,{className:`ui-src__body`,"data-open":g||void 0,inert:!g,children:(0,r.jsx)(`p`,{className:`ui-src__reason`,children:x.reason},x.id)}),(0,r.jsxs)(`footer`,{className:`ui-src__foot`,children:[(0,r.jsxs)(`span`,{className:`ui-src__signal`,"data-level":x.signal,title:i[x.signal],children:[(0,r.jsx)(`span`,{className:`ui-src__bars`,"aria-hidden":`true`,children:[1,2,3].map(e=>(0,r.jsx)(`span`,{"data-on":x.signal>=e||void 0},e))}),i[x.signal]]}),(0,r.jsxs)(`div`,{className:`ui-src__actions`,children:[t.length>1&&!C&&(0,r.jsxs)(`div`,{className:`ui-src__alt`,ref:b,children:[(0,r.jsxs)(`button`,{type:`button`,className:`ui-src__btn ui-src__btn--icon`,"aria-haspopup":`menu`,"aria-expanded":v,onClick:()=>y(e=>!e),children:[(0,r.jsx)(s,{d:`M5 12.5v-9M2.75 5.75 5 3.5l2.25 2.25M11 3.5v9M8.75 10.25 11 12.5l2.25-2.25`}),`Alternatives`]}),v&&(0,r.jsx)(`div`,{className:`ui-src__menu`,role:`menu`,children:t.map((e,t)=>(0,r.jsxs)(`button`,{type:`button`,role:`menuitemradio`,"aria-checked":e.id===f,className:`ui-src__option`,onClick:()=>{p(e.id),y(!1),_(!0)},children:[(0,r.jsxs)(`span`,{className:`ui-src__option-label`,children:[(0,r.jsx)(`span`,{className:`ui-src__option-name`,children:e.label}),t===0&&(0,r.jsx)(`span`,{className:`ui-src__tag`,children:`Recommended`})]}),(0,r.jsx)(`span`,{className:`ui-src__mini`,"data-level":e.signal,"aria-label":i[e.signal],children:[1,2,3].map(t=>(0,r.jsx)(`span`,{"data-on":e.signal>=t||void 0},t))})]},e.id))})]}),C?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(`span`,{className:`ui-src__done`,role:`status`,children:[(0,r.jsx)(s,{d:`m3.5 8.5 3 3 6-7`}),(0,r.jsxs)(`span`,{className:`ui-src__done-text`,children:[x.label,` accepted`]})]}),(0,r.jsxs)(`button`,{type:`button`,className:`ui-src__btn ui-src__btn--icon`,onClick:()=>{h(null),l?.(x)},children:[(0,r.jsx)(s,{d:`M3.5 6.5h6.25a2.75 2.75 0 0 1 0 5.5H8M5.75 4.25 3.5 6.5l2.25 2.25`}),`Undo`]})]}):(0,r.jsxs)(`button`,{type:`button`,className:`ui-src__btn ui-src__btn--primary`,onClick:()=>{h(x.id),y(!1),a?.(x)},children:[`Accept `,x.label.toLowerCase()]})]})]})]})]})}var o=()=>(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,className:`ui-src__mark`,"aria-hidden":`true`,children:[(0,r.jsx)(`path`,{d:`M6.5 2.2c.2 0 .36.14.4.33.53 2.6 1.4 3.48 4 4.02a.4.4 0 0 1 0 .79c-2.6.53-3.47 1.4-4 4a.4.4 0 0 1-.8 0c-.53-2.6-1.4-3.47-4-4a.4.4 0 0 1 0-.79c2.6-.54 3.47-1.42 4-4.02a.4.4 0 0 1 .4-.33Z`}),(0,r.jsx)(`path`,{d:`M12 9.6c.12 0 .22.08.25.2.28 1.3.72 1.75 2.03 2.03a.25.25 0 0 1 0 .49c-1.31.28-1.75.72-2.03 2.03a.25.25 0 0 1-.5 0c-.28-1.31-.72-1.75-2.03-2.03a.25.25 0 0 1 0-.49c1.31-.28 1.75-.73 2.03-2.03a.25.25 0 0 1 .25-.2Z`})]}),s=({d:e})=>(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.1`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:e})}),c=`
/* Colors and motion as variables – override them on .ui-src */
.ui-src {
  --ui-src-card: #ffffff;
  --ui-src-strong: #000000;
  --ui-src-ink: rgba(0, 0, 0, 0.88);
  --ui-src-text: rgba(0, 0, 0, 0.61);
  --ui-src-muted: rgba(0, 0, 0, 0.45);
  --ui-src-faint: rgba(0, 0, 0, 0.27);
  --ui-src-icon: rgba(0, 0, 0, 0.447);
  --ui-src-line: rgba(0, 0, 0, 0.06);
  --ui-src-wash: rgba(0, 0, 0, 0.03);
  --ui-src-fill: rgba(0, 0, 0, 0.06);
  --ui-src-bar: rgba(0, 0, 0, 0.1);
  --ui-src-accent: rgba(0, 96, 226, 0.765);
  --ui-src-accent-bg: rgba(0, 96, 226, 0.05);
  --ui-src-accent-line: rgba(0, 96, 226, 0.35);
  --ui-src-tag: rgba(0, 96, 226, 0.08);
  --ui-src-alt: #5b5bd6;
  --ui-src-alt-bg: rgba(91, 91, 214, 0.1);
  --ui-src-ok: #1a9a52;
  --ui-src-ok-bg: rgba(26, 154, 82, 0.08);
  --ui-src-warn: #e8a20c;
  --ui-src-solid: rgba(0, 0, 0, 0.88);
  --ui-src-solid-hover: rgba(0, 0, 0, 0.8);
  --ui-src-on-solid: #fcfcfc;
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-src-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-src-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  --ui-src-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-src-focus: rgba(0, 96, 226, 0.35);
  --ui-src-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  container-type: inline-size;
  width: 100%;
  max-width: 440px;
  /* One white card – the edge is a shadow, not a border */
  border-radius: 10px;
  background: var(--ui-src-card);
  box-shadow: var(--ui-src-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--ui-src-ink);
  text-align: left;
  -webkit-font-smoothing: antialiased;
}
.ui-src *, .ui-src *::before, .ui-src *::after { box-sizing: border-box; }
:where(.ui-src) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
:where(.ui-src) svg { display: block; flex: none; }
.ui-src button:focus-visible { outline: 2px solid var(--ui-src-focus); outline-offset: 1px; }

/* The heading row folds the reason in and out */
.ui-src__head {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 44px;
  padding: 0 12px 0 16px;
  border-radius: 10px 10px 0 0;
  text-align: left;
  transition: background-color 140ms ease;
}
.ui-src__head:hover { background: var(--ui-src-wash); }
.ui-src button.ui-src__head:focus-visible { outline-offset: -2px; }
.ui-src__mark { width: 16px; height: 16px; fill: var(--ui-src-accent); }
.ui-src__title { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-weight: 500; color: var(--ui-src-strong); }
.ui-src__pill {
  flex: none;
  padding: 0 6px;
  border-radius: 5px;
  background: var(--ui-src-alt-bg);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-src-alt);
  animation: ui-src-swap 300ms var(--ui-src-ease);
}
.ui-src__chevron {
  display: grid;
  place-items: center;
  flex: none;
  width: 20px;
  height: 20px;
  margin-left: auto;
  color: var(--ui-src-icon);
  transition: transform 280ms var(--ui-src-ease), color 140ms ease;
}
.ui-src__head:hover .ui-src__chevron { color: var(--ui-src-ink); }
.ui-src__head[aria-expanded="false"] .ui-src__chevron { transform: rotate(-90deg); }

/* Only the reason folds – the last row never gets clipped */
.ui-src__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 340ms var(--ui-src-ease);
}
.ui-src__body[data-open] { grid-template-rows: 1fr; }
.ui-src__reason {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 16px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-src-text);
  animation: ui-src-swap 360ms var(--ui-src-ease);
}
.ui-src__body[data-open] .ui-src__reason { padding-bottom: 14px; }
.ui-src__reason strong { font-weight: 500; color: var(--ui-src-ink); }

/* The last row: the signal on the left, the actions on the right */
.ui-src__foot {
  display: flex;
  align-items: center;
  /* Narrow cards: the actions move below the signal instead of running out of the card */
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 10px;
  min-height: 48px;
  padding: 10px 10px 10px 16px;
  border-top: 0.5px solid var(--ui-src-line);
}
.ui-src__signal {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  color: var(--ui-src-text);
}
.ui-src__bars, .ui-src__mini { display: inline-flex; align-items: flex-end; gap: 2px; }
.ui-src__bars span, .ui-src__mini span {
  width: 3px;
  border-radius: 1px;
  background: var(--ui-src-bar);
  transition: background-color 260ms ease;
}
.ui-src__bars span:nth-child(1), .ui-src__mini span:nth-child(1) { height: 5px; }
.ui-src__bars span:nth-child(2), .ui-src__mini span:nth-child(2) { height: 8px; }
.ui-src__bars span:nth-child(3), .ui-src__mini span:nth-child(3) { height: 11px; }
.ui-src [data-level="1"] > span[data-on] { background: var(--ui-src-warn); }
.ui-src [data-level="2"] > span[data-on] { background: var(--ui-src-accent); }
.ui-src [data-level="3"] > span[data-on] { background: var(--ui-src-ok); }
.ui-src [data-level="0"] > span:first-child { background: var(--ui-src-faint); }

.ui-src__actions { display: flex; align-items: center; gap: 8px; margin-left: auto; }

/* Secondary: white with the card's hairline shadow */
.ui-src__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  transition: background-color 140ms ease, box-shadow 140ms ease, transform 160ms var(--ui-src-ease);
}
:where(.ui-src) .ui-src__btn { background: var(--ui-src-card); box-shadow: var(--ui-src-shadow); color: var(--ui-src-strong); }
.ui-src__btn--icon { padding: 0 10px 0 8px; }
.ui-src__btn--icon svg { color: var(--ui-src-icon); }
.ui-src__btn:hover { box-shadow: var(--ui-src-shadow-hover); }
.ui-src__btn[aria-expanded="true"] { background: var(--ui-src-wash); }
.ui-src__btn:active { transform: scale(0.97); }
/* Primary: a dark chip */
:where(.ui-src) .ui-src__btn--primary { background: var(--ui-src-solid); box-shadow: none; color: var(--ui-src-on-solid); }
.ui-src__btn--primary:hover { background: var(--ui-src-solid-hover); box-shadow: none; }

/* Accepted: a minimal green fill in the place of the button */
.ui-src__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  height: 28px;
  padding: 0 10px 0 8px;
  border-radius: 6px;
  background: var(--ui-src-ok-bg);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-src-ok);
  animation: ui-src-swap 300ms var(--ui-src-ease);
}
.ui-src__done-text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }

/* Alternatives: a white popover above the button */
.ui-src__alt { position: relative; }
.ui-src__menu {
  position: absolute;
  bottom: calc(100% + 6px);
  right: 0;
  z-index: 5;
  display: grid;
  gap: 2px;
  width: 248px;
  padding: 4px;
  border-radius: 10px;
  background: var(--ui-src-card);
  box-shadow: var(--ui-src-shadow-pop);
  animation: ui-src-drop 180ms var(--ui-src-ease);
}
/* Narrow: the actions sit on their own row – the menu lines up with its right edge so it stays inside */
@container (max-width: 420px) {
  .ui-src__actions { position: relative; }
  .ui-src__alt { position: static; }
  .ui-src__menu { width: min(248px, 100cqw - 20px); }
}
.ui-src__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  height: 32px;
  padding: 0 10px 0 8px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 20px;
  text-align: left;
  color: var(--ui-src-ink);
  transition: background-color 90ms ease-out;
}
.ui-src__option:hover { background: var(--ui-src-wash); }
/* The chosen one: a light blue fill with a hairline */
.ui-src__option[aria-checked="true"] { background: var(--ui-src-accent-bg); box-shadow: inset 0 0 0 0.5px var(--ui-src-accent-line); }
.ui-src button.ui-src__option:focus-visible { outline-offset: -2px; }
.ui-src__option-label { display: inline-flex; align-items: center; gap: 6px; min-width: 0; }
.ui-src__option-name { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-src__tag {
  flex: none;
  padding: 0 5px;
  border-radius: 5px;
  background: var(--ui-src-tag);
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  color: var(--ui-src-accent);
}

@keyframes ui-src-swap { from { opacity: 0; transform: translateY(2px); } }
@keyframes ui-src-drop { from { opacity: 0; transform: translateY(4px) scale(0.98); } }

/* Narrow cards (phones) */
@container (max-width: 340px) {
  .ui-src__head { padding: 0 10px 0 14px; }
  .ui-src__reason { padding: 0 14px; }
  .ui-src__foot { padding: 10px 10px 10px 14px; }
}
/* Touch screens: bigger tap targets */
@media (pointer: coarse) {
  .ui-src__head { height: 48px; }
  .ui-src__btn, .ui-src__done { height: 36px; }
  .ui-src__btn { padding: 0 14px; }
  .ui-src__btn--icon, .ui-src__done { padding: 0 14px 0 12px; }
  .ui-src__option { height: 40px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-src__reason, .ui-src__done, .ui-src__menu, .ui-src__pill { animation: none; }
  .ui-src__body, .ui-src__chevron { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-src {
  --ui-src-card: #1c1c1e;
  --ui-src-strong: #ffffff;
  --ui-src-ink: rgba(255, 255, 255, 0.9);
  --ui-src-text: rgba(255, 255, 255, 0.62);
  --ui-src-muted: rgba(255, 255, 255, 0.46);
  --ui-src-faint: rgba(255, 255, 255, 0.3);
  --ui-src-icon: rgba(255, 255, 255, 0.46);
  --ui-src-line: rgba(255, 255, 255, 0.08);
  --ui-src-wash: rgba(255, 255, 255, 0.04);
  --ui-src-fill: rgba(255, 255, 255, 0.08);
  --ui-src-bar: rgba(255, 255, 255, 0.14);
  --ui-src-accent: #4d8dff;
  --ui-src-accent-bg: rgba(77, 141, 255, 0.14);
  --ui-src-accent-line: rgba(77, 141, 255, 0.4);
  --ui-src-tag: rgba(77, 141, 255, 0.16);
  --ui-src-alt: #9d9dff;
  --ui-src-alt-bg: rgba(91, 91, 214, 0.22);
  --ui-src-ok: #3ec27a;
  --ui-src-ok-bg: rgba(26, 154, 82, 0.14);
  --ui-src-warn: #f0b232;
  /* The primary inverts: a light chip with dark text */
  --ui-src-solid: rgba(255, 255, 255, 0.9);
  --ui-src-solid-hover: rgba(255, 255, 255, 0.82);
  --ui-src-on-solid: #161618;
  --ui-src-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-src-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-src-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 12px 28px -10px rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-src-focus: rgba(77, 141, 255, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-src__menu { background: #232326; }
`,l=[{id:`incremental`,label:`Incremental sync`,reason:(0,r.jsxs)(r.Fragment,{children:[`Only 4% of rows changed since yesterday – switching to `,(0,r.jsx)(`strong`,{children:`Incremental sync`}),` saves about 40 minutes.`]}),signal:3},{id:`full`,label:`Full refresh`,reason:(0,r.jsxs)(r.Fragment,{children:[`A `,(0,r.jsx)(`strong`,{children:`Full refresh`}),` rebuilds every table. Safest after schema changes, but takes about 50 minutes.`]}),signal:1},{id:`skip`,label:`Skip tonight`,reason:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`strong`,{children:`Skip tonight`}),` keeps yesterday's data. Fine if nobody needs fresh numbers tomorrow morning.`]}),signal:0}];function u(){return(0,r.jsx)(`div`,{className:`recommendation-demo`,children:(0,r.jsx)(a,{options:l})})}export{u as default};