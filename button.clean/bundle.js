import{a as Y}from"../shared/chunk-PWBCLQI6.js";import{a as z}from"../shared/chunk-LKG2PFLG.js";import{a as w}from"../shared/chunk-KHKHHDEU.js";import{b as p}from"../shared/chunk-MOQMIKSW.js";var D=p(z()),I=p(Y());var Z=p(z()),q=p(w()),i=p(w()),t=q,e=Z;function c({variant:a="primary",size:o="md",loading:n=!1,icon:d,iconRight:r,children:u,className:h,disabled:U,onClick:W,type:A="button",ref:g,...V}){let k=typeof u=="string"?u:void 0,f=!u&&!!(d||r),j=(0,e.useRef)(null),C=(0,e.useRef)(0),[F,H]=(0,e.useState)(!1);(0,e.useEffect)(()=>H(!0),[]);let M=k??"label",N=n&&d?"spinner":B(d),R=B(r),x=`${M}|${N}|${R}`,S=(0,e.useRef)(x);return(0,e.useLayoutEffect)(()=>{let l=j.current;if(!l)return;let m=l.getBoundingClientRect().width,y=C.current,G=S.current!==x;C.current=m,S.current=x,!(!G||!y||Math.abs(y-m)<.5)&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches||l.animate([{width:`${y}px`},{width:`${m}px`}],{duration:480,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}))}),(0,t.jsxs)(t.Fragment,{children:[(0,i.jsx)("style",{href:"ui-button-clean",precedence:"default",children:O}),(0,i.jsxs)("button",{type:A,className:["ui-buttonc",h].filter(Boolean).join(" "),"data-variant":a,"data-size":o,"data-loading":n||void 0,"data-icon-only":f||void 0,"data-icon-left":!f&&!!d||void 0,"data-icon-right":!f&&!!r||void 0,"data-ready":F||void 0,ref:l=>{j.current=l,typeof g=="function"?g(l):g&&(g.current=l)},disabled:U,"aria-busy":n||void 0,"aria-disabled":n||void 0,onClick:l=>{if(n){l.preventDefault();return}W?.(l)},...V,children:[d&&(0,i.jsx)("span",{className:"ui-buttonc__icon","aria-hidden":"true",children:n?(0,t.jsx)(J,{}):d},`icon-${N}`),u!=null&&(0,i.jsx)("span",{className:"ui-buttonc__label","data-text":k,children:u},`label-${M}`),r&&(0,i.jsx)("span",{className:"ui-buttonc__icon","aria-hidden":"true",children:r},`icon-right-${R}`)]})]})}var J=()=>(0,i.jsxs)("svg",{className:"ui-buttonc__spinner",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",children:[(0,i.jsx)("circle",{cx:"12",cy:"12",r:"8.5",opacity:.2}),(0,i.jsx)("path",{d:"M12 3.5a8.5 8.5 0 0 1 8.5 8.5"})]}),_=new WeakMap,K=1;function B(a){if(!(0,e.isValidElement)(a)||typeof a.type=="string")return 0;let o=a.type;return _.has(o)||_.set(o,K++),_.get(o)}var O=`
/* Colors and motion as variables \u2013 override them on .ui-buttonc (see Theming in the docs) */
.ui-buttonc {
  --ui-btnc-title: #000;
  --ui-btnc-ink: rgba(0, 0, 0, 0.88);
  --ui-btnc-muted: rgba(0, 0, 0, 0.61);
  --ui-btnc-icon: rgba(0, 0, 0, 0.447);
  --ui-btnc-solid: rgba(0, 0, 0, 0.88);
  --ui-btnc-solid-hover: rgba(0, 0, 0, 0.8);
  --ui-btnc-on-solid: #fcfcfc;
  --ui-btnc-surface: #ffffff;
  --ui-btnc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-btnc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  --ui-btnc-wash: rgba(0, 0, 0, 0.03);
  --ui-btnc-danger: #e5484d;
  --ui-btnc-danger-bg: rgba(229, 72, 77, 0.08);
  --ui-btnc-danger-bg-hover: rgba(229, 72, 77, 0.12);
  --ui-btnc-shine: rgba(255, 255, 255, 0.82);
  --ui-btnc-shine-on-solid: #ffffff;
  --ui-btnc-focus: rgba(0, 96, 226, 0.35);
  --ui-btnc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-btnc-load: 650ms;

  --h: 28px;
  --px: 10px;
  --gap: 6px;
  --fs: 13px;
  --lh: 20px;
  --icon: 16px;
  --radius: 6px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
  box-sizing: border-box;
  height: var(--h);
  padding: 0 var(--px);
  margin: 0;
  border: 0;
  border-radius: var(--radius);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--fs);
  font-weight: 500;
  line-height: var(--lh);
  letter-spacing: 0;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  transition:
    background-color 140ms ease,
    color 140ms ease,
    box-shadow 140ms ease,
    transform 160ms var(--ui-btnc-ease),
    opacity 140ms ease;
}

/* Sizes: 24 \xB7 28 \xB7 32 high */
.ui-buttonc[data-size="sm"] {
  --h: 24px;
  --px: 8px;
  --gap: 4px;
  --fs: 12px;
  --lh: 16px;
  --icon: 14px;
  --radius: 6px;
}
.ui-buttonc[data-size="lg"] {
  --h: 32px;
  --px: 12px;
  --gap: 6px;
  --fs: 13px;
  --icon: 16px;
  --radius: 6px;
}
/* An icon sits closer to the edge than the text, so both look evenly spaced */
.ui-buttonc[data-icon-left] {
  padding-left: calc(var(--px) - 2px);
}
.ui-buttonc[data-icon-right] {
  padding-right: calc(var(--px) - 2px);
}
.ui-buttonc[data-icon-only] {
  width: var(--h);
  padding: 0;
}

/* primary: a dark chip */
.ui-buttonc[data-variant="primary"] {
  background: var(--ui-btnc-solid);
  color: var(--ui-btnc-on-solid);
}
.ui-buttonc[data-variant="primary"]:hover:not(:disabled) {
  background: var(--ui-btnc-solid-hover);
}

/* secondary: white with the card's hairline shadow */
.ui-buttonc[data-variant="secondary"] {
  background: var(--ui-btnc-surface);
  color: var(--ui-btnc-title);
  box-shadow: var(--ui-btnc-shadow);
}
.ui-buttonc[data-variant="secondary"] .ui-buttonc__icon {
  color: var(--ui-btnc-icon);
}
.ui-buttonc[data-variant="secondary"]:hover:not(:disabled) {
  box-shadow: var(--ui-btnc-shadow-hover);
}

/* ghost: a muted label, a soft wash appears on hover */
.ui-buttonc[data-variant="ghost"] {
  background: transparent;
  color: var(--ui-btnc-muted);
}
.ui-buttonc[data-variant="ghost"] .ui-buttonc__icon {
  color: var(--ui-btnc-icon);
}
.ui-buttonc[data-variant="ghost"]:hover:not(:disabled) {
  background: var(--ui-btnc-wash);
  color: var(--ui-btnc-ink);
}
.ui-buttonc[data-variant="ghost"]:hover:not(:disabled) .ui-buttonc__icon {
  color: var(--ui-btnc-ink);
}

/* destructive: red label on a minimal red fill, no stroke */
.ui-buttonc[data-variant="destructive"] {
  background: var(--ui-btnc-danger-bg);
  color: var(--ui-btnc-danger);
}
.ui-buttonc[data-variant="destructive"]:hover:not(:disabled) {
  background: var(--ui-btnc-danger-bg-hover);
}

.ui-buttonc .ui-buttonc__icon {
  transition: color 140ms ease;
}
.ui-buttonc:active:not(:disabled):not([data-loading]) {
  transform: scale(0.97);
}
.ui-buttonc:focus-visible {
  outline: 2px solid var(--ui-btnc-focus);
  outline-offset: 1px;
}
.ui-buttonc:disabled {
  opacity: 0.4;
  cursor: default;
}
.ui-buttonc[data-loading] {
  cursor: default;
}

.ui-buttonc__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: var(--icon);
  height: var(--icon);
}
.ui-buttonc__icon > svg {
  width: 100%;
  height: 100%;
}

/* Morph: the button clips while its width glides; changed parts blur in */
.ui-buttonc {
  overflow: clip;
}
.ui-buttonc[data-ready] .ui-buttonc__label {
  animation: ui-buttonc-label-in 480ms cubic-bezier(0.25, 1, 0.5, 1) both;
}
.ui-buttonc[data-ready] .ui-buttonc__icon {
  animation: ui-buttonc-icon-in 520ms cubic-bezier(0.25, 1, 0.5, 1) both;
}

/* Loading: a light band sweeps across a copy of the dimmed label */
.ui-buttonc__label {
  position: relative;
}
.ui-buttonc__label::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-btnc-shine) 50%, transparent 62%) 100% 0 / 300% 100%
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  opacity: 0;
  pointer-events: none;
}
.ui-buttonc[data-variant="primary"] .ui-buttonc__label::after {
  --ui-btnc-shine: var(--ui-btnc-shine-on-solid);
}
.ui-buttonc[data-loading] .ui-buttonc__label {
  color: color-mix(in srgb, currentColor 50%, transparent);
}
.ui-buttonc[data-loading] .ui-buttonc__label::after {
  opacity: 1;
  animation: ui-buttonc-sweep calc(var(--ui-btnc-load) * 1.6) linear infinite;
}
.ui-buttonc__spinner {
  animation: ui-buttonc-spin 900ms linear infinite;
}

@keyframes ui-buttonc-label-in {
  from {
    opacity: 0;
    filter: blur(3px);
    transform: translateY(25%);
  }
}
@keyframes ui-buttonc-icon-in {
  from {
    opacity: 0;
    filter: blur(2px);
    transform: scale(0.7);
  }
}

@keyframes ui-buttonc-spin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes ui-buttonc-sweep {
  from {
    background-position: 100% 0;
  }
  to {
    background-position: 0% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ui-buttonc[data-ready] .ui-buttonc__label,
  .ui-buttonc[data-ready] .ui-buttonc__icon {
    animation: none;
  }
  .ui-buttonc {
    transition-duration: 1ms;
  }
  .ui-buttonc[data-loading] .ui-buttonc__label::after {
    animation: none;
    opacity: 0;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-buttonc {
  /* primary inverts: a light chip with dark text */
  --ui-btnc-solid: rgba(255, 255, 255, 0.9);
  --ui-btnc-solid-hover: rgba(255, 255, 255, 0.82);
  --ui-btnc-on-solid: #161618;
  --ui-btnc-shine-on-solid: #ffffff;

  --ui-btnc-title: rgba(255, 255, 255, 0.9);
  --ui-btnc-ink: rgba(255, 255, 255, 0.9);
  --ui-btnc-muted: rgba(255, 255, 255, 0.62);
  --ui-btnc-icon: rgba(255, 255, 255, 0.5);
  --ui-btnc-surface: #1c1c1e;
  --ui-btnc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-btnc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-btnc-wash: rgba(255, 255, 255, 0.06);
  --ui-btnc-danger: #ff6369;
  --ui-btnc-danger-bg: rgba(229, 72, 77, 0.14);
  --ui-btnc-danger-bg-hover: rgba(229, 72, 77, 0.2);
  --ui-btnc-shine: #ffffff;
  --ui-btnc-focus: rgba(77, 141, 255, 0.5);
}
`,b={fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"},P=()=>(0,i.jsxs)("svg",{viewBox:"0 0 24 24",...b,children:[(0,i.jsx)("path",{d:"M12 5.5V19"}),(0,i.jsx)("path",{d:"M18 11s-4.42-6-6-6-6 6-6 6"})]}),Q=()=>(0,i.jsxs)("svg",{viewBox:"0 0 24 24",...b,children:[(0,i.jsx)("path",{d:"M18.5 12H5"}),(0,i.jsx)("path",{d:"M13 18s6-4.42 6-6-6-6-6-6"})]}),X=()=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",...b,children:(0,i.jsx)("path",{d:"M12 4v16M20 12H4"})}),tt=()=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",...b,strokeWidth:2.5,children:(0,i.jsx)("path",{d:"M6 12h.01M12 12h.01M18 12h.01"})}),E=()=>(0,i.jsxs)("svg",{viewBox:"0 0 24 24",...b,children:[(0,i.jsx)("path",{d:"M7.5 14.5c0-3.3 0-4.95 1.03-5.97C9.55 7.5 11.2 7.5 14.5 7.5s4.95 0 5.97 1.03c1.03 1.02 1.03 2.67 1.03 5.97s0 4.95-1.03 5.97c-1.02 1.03-2.67 1.03-5.97 1.03s-4.95 0-5.97-1.03C7.5 19.45 7.5 17.8 7.5 14.5Z"}),(0,i.jsx)("path",{d:"M7.5 16.5c-1.4 0-2.1 0-2.66-.2a3 3 0 0 1-2.14-2.14c-.2-.57-.2-1.27-.2-2.66v-2c0-3.3 0-4.95 1.03-5.97C4.55 2.5 6.2 2.5 9.5 2.5h2c1.4 0 2.1 0 2.66.2a3 3 0 0 1 2.14 2.14c.2.57.2 1.27.2 2.66"})]}),T=()=>(0,i.jsxs)("svg",{viewBox:"0 0 24 24",...b,children:[(0,i.jsx)("path",{d:"M16.5 7.5S13.19 3 12 3 7.5 7.5 7.5 7.5M12 4v11"}),(0,i.jsx)("path",{d:"M3 16.5v1.5A3 3 0 0 0 6 21h12a3 3 0 0 0 3-3v-1.5"})]}),it=()=>(0,i.jsxs)("svg",{viewBox:"0 0 24 24",...b,children:[(0,i.jsx)("path",{d:"m19.5 5.5-.62 10.03c-.16 2.56-.24 3.84-.88 4.76a4 4 0 0 1-1.2 1.13C15.84 22 14.56 22 12 22s-3.86 0-4.82-.59a4 4 0 0 1-1.2-1.13c-.64-.92-.72-2.2-.88-4.76L4.5 5.5"}),(0,i.jsx)("path",{d:"M3 5.5h18M16.06 5.5l-.69-1.41c-.45-.94-.68-1.4-1.07-1.7a2 2 0 0 0-.27-.17C13.6 2 13.07 2 12.03 2c-1.06 0-1.6 0-2.04.23a2 2 0 0 0-.27.18c-.4.3-.62.79-1.06 1.76L8.05 5.5M9.5 16.5v-6M14.5 16.5v-6"})]}),v=()=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",...b,children:(0,i.jsx)("path",{d:"M5 14l3.5 3.5L19 6.5"})});function L(a=1600){let[o,n]=(0,e.useState)(!1),d=(0,e.useRef)(void 0);return(0,e.useEffect)(()=>()=>clearTimeout(d.current),[]),[o,()=>{clearTimeout(d.current),n(!0),d.current=window.setTimeout(()=>n(!1),a)}]}function s({children:a}){let o=(0,e.useRef)(null),[n,d]=(0,e.useState)(0);return(0,e.useLayoutEffect)(()=>{let r=o.current?.firstElementChild;if(!r)return;let u=r.getBoundingClientRect().width;u>n&&d(u)}),(0,i.jsx)("span",{ref:o,className:"button-demo__slot",style:{minWidth:n||void 0},children:a})}function nt(){let[a,o]=(0,e.useState)("idle");return(0,e.useEffect)(()=>{if(a!=="loading")return;let n=window.setTimeout(()=>o("done"),1600);return()=>clearTimeout(n)},[a]),(0,i.jsxs)("div",{className:"button-demo__row button-demo__compact",children:[(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"ghost",onClick:()=>o("idle"),children:"Cancel"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"secondary",icon:a==="done"?(0,t.jsx)(v,{}):(0,t.jsx)(T,{}),loading:a==="loading",onClick:()=>o(n=>n==="idle"?"loading":n),children:a==="done"?"Done":"Upload"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{iconRight:(0,t.jsx)(P,{}),children:"Send"})})]})}function at(){let[a,o]=L(),[n,d]=L(),[r,u]=(0,e.useState)("idle");return(0,e.useEffect)(()=>{if(r!=="loading")return;let h=window.setTimeout(()=>u("done"),1800);return()=>clearTimeout(h)},[r]),(0,i.jsxs)("div",{className:"button-demo__showcase",children:[(0,i.jsxs)("section",{children:[(0,i.jsx)("h4",{children:"Styles"}),(0,i.jsxs)("div",{className:"button-demo__row",children:[(0,t.jsx)(s,{children:(0,t.jsx)(c,{children:"Save changes"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"secondary",children:"Secondary"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"ghost",children:"Ghost"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"destructive",icon:(0,t.jsx)(it,{}),children:"Delete"})})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h4",{children:"Icons and sizes"}),(0,i.jsxs)("div",{className:"button-demo__row",children:[(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"secondary",size:"sm",icon:(0,t.jsx)(X,{}),children:"Add item"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{iconRight:(0,t.jsx)(Q,{}),children:"Continue"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"ghost",icon:(0,t.jsx)(tt,{}),"aria-label":"More options"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"secondary",size:"lg",children:"Large"})})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h4",{children:"Feedback and states"}),(0,i.jsxs)("div",{className:"button-demo__row",children:[(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"secondary",icon:a?(0,t.jsx)(v,{}):(0,t.jsx)(E,{}),onClick:o,children:a?"Copied":"Copy link"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"secondary",icon:n?(0,t.jsx)(v,{}):(0,t.jsx)(E,{}),"aria-label":n?"Copied":"Copy",onClick:d})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"secondary",icon:r==="done"?(0,t.jsx)(v,{}):(0,t.jsx)(T,{}),loading:r==="loading",onClick:()=>u(h=>h==="loading"?h:"loading"),children:"Upload file"})}),(0,t.jsx)(s,{children:(0,t.jsx)(c,{variant:"secondary",disabled:!0,children:"Disabled"})})]}),(0,i.jsx)("p",{className:"button-demo__status","aria-live":"polite",children:r==="loading"?"Uploading\u2026":r==="done"?"Upload complete":" "})]})]})}function $(){return(0,i.jsxs)("div",{className:"button-demo",children:[(0,t.jsx)(nt,{}),(0,t.jsx)(at,{})]})}(0,I.createRoot)(document.getElementById("root")).render(D.default.createElement($));
