import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t();function i(e){let t=Array.from(e),n=[],r=0,i=0;for(let e=t.length-1;e>=0;e--){let a=t[e];a>=`0`&&a<=`9`?n.unshift({key:`d${r++}`,digit:a.charCodeAt(0)-48}):n.unshift({key:`s${i++}`,char:a})}return n}var a=e=>(e%10+10)%10,o=e=>1-(1-e)**4,s=(e,t)=>{e.style.transform=`translateY(${-a(t)/11*100}%)`};function c({value:e,format:t,locale:c,duration:u=900,delay:d=0,className:f}){let p=JSON.stringify(t??{}),m=(0,n.useMemo)(()=>new Intl.NumberFormat(c,t).format(e),[e,c,p]),h=(0,n.useMemo)(()=>i(m),[m]),g=(0,n.useRef)(null),_=(0,n.useRef)(new Map),v=(0,n.useRef)(new Map),y=(0,n.useRef)(0),b=(0,n.useRef)(!0),x=(0,n.useRef)(!1),S=(0,n.useRef)(new Set),C=(0,n.useRef)(new Set),[w,T]=(0,n.useState)(!1),E=new Set(h.filter(e=>`digit`in e).map(e=>e.key));for(let e of E)x.current&&!C.current.has(e)&&S.current.add(e);for(let e of S.current)E.has(e)||S.current.delete(e);return C.current=E,(0,n.useEffect)(()=>{x.current=!0;let e=g.current;if(!e||typeof IntersectionObserver>`u`){T(!0);return}let t=0,n=new IntersectionObserver(([e])=>{e.isIntersecting&&(n.disconnect(),t=window.setTimeout(()=>T(!0),d))},{threshold:.3});return n.observe(e),()=>{n.disconnect(),clearTimeout(t)}},[]),(0,n.useEffect)(()=>{if(!w)return;e!==y.current&&(b.current=e>y.current),y.current=e;let t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,n=new Set;for(let e of h){if(!(`digit`in e))continue;n.add(e.key);let r=_.current.get(e.key)??{pos:0,from:0,to:0},i=b.current?a(e.digit-r.pos):-a(r.pos-e.digit);r.from=r.pos,r.to=r.pos+i,t&&(r.pos=r.from=r.to),_.current.set(e.key,r)}for(let e of _.current.keys())n.has(e)||_.current.delete(e);let r=()=>{for(let[e,t]of _.current){let n=v.current.get(e);n&&s(n,t.pos)}};if(t)return r();let i=0,c=performance.now(),l=e=>{let t=Math.min(1,(e-c)/u),n=o(t);for(let e of _.current.values())e.pos=e.from+(e.to-e.from)*n;r(),t<1&&(i=requestAnimationFrame(l))};return i=requestAnimationFrame(l),()=>cancelAnimationFrame(i)},[h,w,e,u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`style`,{href:`ui-number-ticker`,precedence:`default`,children:l}),(0,r.jsxs)(`span`,{ref:g,className:[`ui-nt`,f].filter(Boolean).join(` `),"aria-live":`polite`,children:[(0,r.jsx)(`span`,{className:`ui-nt__sr`,children:m}),(0,r.jsx)(`span`,{className:`ui-nt__track`,"aria-hidden":`true`,children:h.map(e=>`digit`in e?(0,r.jsx)(`span`,{className:`ui-nt__col`,"data-enter":S.current.has(e.key)||void 0,children:(0,r.jsx)(`span`,{className:`ui-nt__stack`,ref:t=>{if(t)return v.current.set(e.key,t),s(t,_.current.get(e.key)?.pos??0),()=>{v.current.get(e.key)===t&&v.current.delete(e.key)}},children:[0,1,2,3,4,5,6,7,8,9,0].map((e,t)=>(0,r.jsx)(`span`,{className:`ui-nt__cell`,children:e},t))})},e.key):(0,r.jsx)(`span`,{className:`ui-nt__static`,children:e.char},e.key))})]})]})}var l=`
.ui-nt {
  --ui-nt-lh: 1.15em;
  --ui-nt-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: inline-flex;
  line-height: var(--ui-nt-lh);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ui-nt__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
.ui-nt__track {
  display: inline-flex;
  align-items: flex-start;
  height: var(--ui-nt-lh);
  line-height: var(--ui-nt-lh);
}
.ui-nt__col {
  display: inline-block;
  height: var(--ui-nt-lh);
  overflow: hidden;
  /* Soft top and bottom edges while digits pass through */
  -webkit-mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
  mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
}
.ui-nt__col[data-enter] { animation: ui-nt-in 450ms var(--ui-nt-ease) both; }
.ui-nt__stack {
  display: flex;
  flex-direction: column;
  will-change: transform;
}
.ui-nt__cell,
.ui-nt__static {
  display: block;
  height: var(--ui-nt-lh);
  text-align: center;
}
.ui-nt__static { white-space: pre; }

@keyframes ui-nt-in {
  from { opacity: 0; transform: translateY(-35%); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-nt__col[data-enter] { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html>.
   The ticker inherits its color, so nothing needs to change here. */
:where(.dark, [data-theme="dark"]) .ui-nt {
  --ui-nt-lh: 1.15em;
}
`,u={style:`currency`,currency:`USD`,maximumFractionDigits:0},d={style:`percent`,minimumFractionDigits:1,maximumFractionDigits:1,signDisplay:`exceptZero`},f=(e,t)=>Math.round(e+Math.random()*(t-e));function p(){let[e,t]=(0,n.useState)(48240),[i,a]=(0,n.useState)(.124),o=e=>{t(t=>Math.max(0,t+e*f(600,6400))),a(t=>Math.round((t+e*f(8,46)/1e3)*1e3)/1e3)};return(0,r.jsx)(`div`,{className:`number-ticker-demo`,children:(0,r.jsxs)(`div`,{className:`ntd-card`,children:[(0,r.jsxs)(`div`,{className:`ntd-head`,children:[(0,r.jsx)(`span`,{className:`ntd-label`,children:`Revenue`}),(0,r.jsx)(`span`,{className:`ntd-period`,children:`This month`})]}),(0,r.jsx)(`div`,{className:`ntd-value`,children:(0,r.jsx)(c,{value:e,format:u,locale:`en-US`})}),(0,r.jsxs)(`div`,{className:`ntd-meta`,children:[(0,r.jsxs)(`span`,{className:`ntd-delta`,"data-down":i<0||void 0,children:[(0,r.jsx)(`svg`,{viewBox:`0 0 12 12`,width:`10`,height:`10`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M6 2.5v7M2.75 5.75 6 2.5l3.25 3.25`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,r.jsx)(c,{value:i,format:d,locale:`en-US`,duration:700,delay:150})]}),(0,r.jsx)(`span`,{className:`ntd-vs`,children:`vs last month`})]}),(0,r.jsxs)(`div`,{className:`ntd-actions`,children:[(0,r.jsx)(`button`,{type:`button`,className:`ntd-btn`,"aria-label":`Decrease revenue`,onClick:()=>o(-1),children:`−`}),(0,r.jsx)(`button`,{type:`button`,className:`ntd-btn`,"aria-label":`Increase revenue`,onClick:()=>o(1),children:`+`})]})]})})}export{p as default};