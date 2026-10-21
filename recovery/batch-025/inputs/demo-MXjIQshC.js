import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t();function i({className:e,label:t=`Stacked calendar cards marked empty, with a disabled join meeting button`}){let i=`ui-ec`+(0,n.useId)().replace(/[^a-zA-Z0-9_-]/g,``);return(0,r.jsxs)(`div`,{className:[`ui-ec`,e].filter(Boolean).join(` `),role:`img`,"aria-label":t,children:[(0,r.jsx)(`style`,{href:`ui-empty-calendar`,precedence:`default`,children:o}),(0,r.jsxs)(`svg`,{className:`ui-ec-art`,viewBox:`0 0 320 240`,"aria-hidden":`true`,children:[(0,r.jsxs)(`defs`,{children:[(0,r.jsx)(`filter`,{id:`${i}-blur`,x:`-30%`,y:`-100%`,width:`160%`,height:`300%`,children:(0,r.jsx)(`feGaussianBlur`,{stdDeviation:`14`})}),(0,r.jsx)(`filter`,{id:`${i}-shadow`,x:`-20%`,y:`-20%`,width:`140%`,height:`140%`,children:(0,r.jsx)(`feDropShadow`,{className:`ui-ec-drop`,dx:`0`,dy:`3`,stdDeviation:`4`,floodColor:`#000000`,floodOpacity:`0.06`})}),(0,r.jsxs)(`linearGradient`,{id:`${i}-blob`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,r.jsx)(`stop`,{offset:`0%`,stopColor:`#FFA0AB`,stopOpacity:`0.25`}),(0,r.jsx)(`stop`,{offset:`33%`,stopColor:`#FFB89E`,stopOpacity:`0.25`}),(0,r.jsx)(`stop`,{offset:`66%`,stopColor:`#C8A8E5`,stopOpacity:`0.25`}),(0,r.jsx)(`stop`,{offset:`100%`,stopColor:`#A8B5FF`,stopOpacity:`0.25`})]}),(0,r.jsxs)(`linearGradient`,{id:`${i}-stroke`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,r.jsx)(`stop`,{className:`ui-ec-edge`,offset:`0%`,stopColor:`#E4E7EC`}),(0,r.jsx)(`stop`,{offset:`18%`,stopColor:`#FFB5BC`}),(0,r.jsx)(`stop`,{offset:`40%`,stopColor:`#FFC5AB`}),(0,r.jsx)(`stop`,{offset:`60%`,stopColor:`#D5BBEF`}),(0,r.jsx)(`stop`,{offset:`82%`,stopColor:`#B5C0FF`}),(0,r.jsx)(`stop`,{className:`ui-ec-edge`,offset:`100%`,stopColor:`#E4E7EC`})]})]}),(0,r.jsxs)(`g`,{transform:`translate(30 47) scale(0.814)`,children:[(0,r.jsx)(`g`,{className:`ui-ec-back ui-ec-back-left`,children:(0,r.jsx)(a,{shadow:`url(#${i}-shadow)`})}),(0,r.jsx)(`g`,{className:`ui-ec-back ui-ec-back-right`,children:(0,r.jsx)(a,{shadow:`url(#${i}-shadow)`})}),(0,r.jsxs)(`g`,{className:`ui-ec-front`,children:[(0,r.jsx)(`ellipse`,{className:`ui-ec-blob`,cx:`160`,cy:`152`,rx:`125`,ry:`35`,fill:`url(#${i}-blob)`,filter:`url(#${i}-blur)`}),(0,r.jsx)(a,{shadow:`url(#${i}-shadow)`}),(0,r.jsx)(`path`,{d:`M40 150 A 10 10 0 0 0 50 160 L270 160 A 10 10 0 0 0 280 150`,fill:`none`,stroke:`url(#${i}-stroke)`,strokeWidth:`0.5`})]})]})]})]})}function a({shadow:e}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`rect`,{className:`ui-ec-card`,x:`40`,y:`20`,width:`240`,height:`140`,rx:`10`,fill:`#FFFFFF`,stroke:`#E4E7EC`,strokeWidth:`0.5`,filter:e}),(0,r.jsx)(`text`,{className:`ui-ec-title`,x:`56`,y:`48`,fontSize:`13`,fontWeight:`500`,fill:`#8A8A8A`,children:`Calendar`}),(0,r.jsxs)(`g`,{transform:`translate(218 34)`,children:[(0,r.jsx)(`rect`,{className:`ui-ec-badge`,width:`46`,height:`18`,rx:`5`,fill:`#FEF8EF`}),(0,r.jsx)(`text`,{x:`23`,y:`12`,textAnchor:`middle`,fontSize:`9`,fontWeight:`600`,letterSpacing:`0.06em`,fill:`#FAB082`,children:`EMPTY`})]}),(0,r.jsx)(`rect`,{className:`ui-ec-bar`,x:`56`,y:`64`,width:`208`,height:`7`,rx:`2`,fill:`#EFF1F4`}),(0,r.jsx)(`rect`,{className:`ui-ec-bar`,x:`56`,y:`74`,width:`208`,height:`7`,rx:`2`,fill:`#EFF1F4`}),(0,r.jsx)(`rect`,{className:`ui-ec-bar`,x:`56`,y:`84`,width:`168`,height:`7`,rx:`2`,fill:`#EFF1F4`}),(0,r.jsxs)(`g`,{transform:`translate(56 104)`,children:[(0,r.jsx)(`rect`,{className:`ui-ec-btn`,width:`208`,height:`40`,rx:`8`,fill:`#F4F4F6`,stroke:`#E4E7EC`,strokeWidth:`0.5`}),(0,r.jsxs)(`g`,{className:`ui-ec-btn-ink`,transform:`translate(64 14)`,fill:`none`,stroke:`#9A9AA3`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,r.jsx)(`circle`,{cx:`6`,cy:`6`,r:`5`}),(0,r.jsx)(`line`,{x1:`2.5`,y1:`9.5`,x2:`9.5`,y2:`2.5`})]}),(0,r.jsx)(`text`,{className:`ui-ec-btn-label`,x:`84`,y:`24`,fontSize:`10`,fontWeight:`500`,fill:`#9A9AA3`,children:`Join meeting`})]})]})}var o=`
.ui-ec {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
}
.ui-ec-art {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

/* Placeholder lines shimmer softly */
.ui-ec-bar { animation: ui-ec-shimmer 2.4s ease-in-out infinite; }
@keyframes ui-ec-shimmer {
  0%, 100% { fill: #EFF1F4; }
  50% { fill: #DDE1E5; }
}

/* The glow under the front card breathes */
.ui-ec-blob {
  transform-origin: 160px 152px;
  animation: ui-ec-breathe 5s ease-in-out infinite;
}
@keyframes ui-ec-breathe {
  0%, 100% { opacity: 0.85; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.06); }
}

/* Front card: lifts and tilts on hover */
.ui-ec-front {
  transform-origin: 160px 90px;
  transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.ui-ec-front:hover { transform: translate(0, -8px) rotate(2deg); }

/* Back cards: fanned out, slide further on hover */
.ui-ec-back {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.ui-ec-back-left { transform: translate(-22px, 0) rotate(-3deg); }
.ui-ec-back-left:hover { transform: translate(-48px, 4px) rotate(-7deg); }
.ui-ec-back-right { transform: translate(22px, 0) rotate(3deg); }
.ui-ec-back-right:hover { transform: translate(48px, 4px) rotate(7deg); }

@media (prefers-reduced-motion: reduce) {
  .ui-ec-bar, .ui-ec-blob { animation: none; }
  .ui-ec-front, .ui-ec-back { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ec-card { fill: #232326; stroke: rgba(255, 255, 255, 0.08); }
:where(.dark, [data-theme="dark"]) .ui-ec-drop { flood-opacity: 0.4; }
:where(.dark, [data-theme="dark"]) .ui-ec-edge { stop-color: #3a3a3f; }
:where(.dark, [data-theme="dark"]) .ui-ec-title { fill: #8f8f8f; }
:where(.dark, [data-theme="dark"]) .ui-ec-badge { fill: rgba(250, 176, 130, 0.16); }
:where(.dark, [data-theme="dark"]) .ui-ec-bar { fill: #2a2a2d; }
@media (prefers-reduced-motion: no-preference) {
  :where(.dark, [data-theme="dark"]) .ui-ec-bar { animation-name: ui-ec-shimmer-dark; }
}
:where(.dark, [data-theme="dark"]) .ui-ec-btn { fill: #2a2a2d; stroke: rgba(255, 255, 255, 0.08); }
:where(.dark, [data-theme="dark"]) .ui-ec-btn-ink { stroke: #6b6b70; }
:where(.dark, [data-theme="dark"]) .ui-ec-btn-label { fill: #6b6b70; }
@keyframes ui-ec-shimmer-dark {
  0%, 100% { fill: #2a2a2d; }
  50% { fill: #36363b; }
}
`;function s(){return(0,r.jsx)(`div`,{className:`empty-calendar-demo`,children:(0,r.jsx)(i,{})})}export{s as default};