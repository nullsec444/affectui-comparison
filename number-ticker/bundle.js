import{a as z}from"../shared/chunk-PWBCLQI6.js";import{a as T}from"../shared/chunk-LKG2PFLG.js";import{a as R}from"../shared/chunk-KHKHHDEU.js";import{b as v}from"../shared/chunk-MOQMIKSW.js";var q=v(T()),L=v(z());var J=v(T()),W=v(R()),t=v(R()),b=W,r=J;function Z(n){let o=Array.from(n),c=[],p=0,f=0;for(let u=o.length-1;u>=0;u--){let l=o[u];l>="0"&&l<="9"?c.unshift({key:`d${p++}`,digit:l.charCodeAt(0)-48}):c.unshift({key:`s${f++}`,char:l})}return c}var M=n=>(n%10+10)%10,G=n=>1-(1-n)**4,B=(n,o)=>{n.style.transform=`translateY(${-M(o)/11*100}%)`};function O({value:n,format:o,locale:c,duration:p=900,delay:f=0,className:u}){let l=JSON.stringify(o??{}),N=(0,r.useMemo)(()=>new Intl.NumberFormat(c,o).format(n),[n,c,l]),y=(0,r.useMemo)(()=>Z(N),[N]),D=(0,r.useRef)(null),m=(0,r.useRef)(new Map),k=(0,r.useRef)(new Map),x=(0,r.useRef)(0),F=(0,r.useRef)(!0),I=(0,r.useRef)(!1),_=(0,r.useRef)(new Set),j=(0,r.useRef)(new Set),[A,C]=(0,r.useState)(!1),S=new Set(y.filter(e=>"digit"in e).map(e=>e.key));for(let e of S)I.current&&!j.current.has(e)&&_.current.add(e);for(let e of _.current)S.has(e)||_.current.delete(e);return j.current=S,(0,r.useEffect)(()=>{I.current=!0;let e=D.current;if(!e||typeof IntersectionObserver>"u"){C(!0);return}let s=0,d=new IntersectionObserver(([g])=>{g.isIntersecting&&(d.disconnect(),s=window.setTimeout(()=>C(!0),f))},{threshold:.3});return d.observe(e),()=>{d.disconnect(),clearTimeout(s)}},[]),(0,r.useEffect)(()=>{if(!A)return;n!==x.current&&(F.current=n>x.current),x.current=n;let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=new Set;for(let i of y){if(!("digit"in i))continue;s.add(i.key);let a=m.current.get(i.key)??{pos:0,from:0,to:0},h=F.current?M(i.digit-a.pos):-M(a.pos-i.digit);a.from=a.pos,a.to=a.pos+h,e&&(a.pos=a.from=a.to),m.current.set(i.key,a)}for(let i of m.current.keys())s.has(i)||m.current.delete(i);let d=()=>{for(let[i,a]of m.current){let h=k.current.get(i);h&&B(h,a.pos)}};if(e)return d();let g=0,Y=performance.now(),E=i=>{let a=Math.min(1,(i-Y)/p),h=G(a);for(let w of m.current.values())w.pos=w.from+(w.to-w.from)*h;d(),a<1&&(g=requestAnimationFrame(E))};return g=requestAnimationFrame(E),()=>cancelAnimationFrame(g)},[y,A,n,p]),(0,b.jsxs)(b.Fragment,{children:[(0,t.jsx)("style",{href:"ui-number-ticker",precedence:"default",children:H}),(0,t.jsxs)("span",{ref:D,className:["ui-nt",u].filter(Boolean).join(" "),"aria-live":"polite",children:[(0,t.jsx)("span",{className:"ui-nt__sr",children:N}),(0,t.jsx)("span",{className:"ui-nt__track","aria-hidden":"true",children:y.map(e=>"digit"in e?(0,t.jsx)("span",{className:"ui-nt__col","data-enter":_.current.has(e.key)||void 0,children:(0,t.jsx)("span",{className:"ui-nt__stack",ref:s=>{if(s)return k.current.set(e.key,s),B(s,m.current.get(e.key)?.pos??0),()=>{k.current.get(e.key)===s&&k.current.delete(e.key)}},children:[0,1,2,3,4,5,6,7,8,9,0].map((s,d)=>(0,t.jsx)("span",{className:"ui-nt__cell",children:s},d))})},e.key):(0,t.jsx)("span",{className:"ui-nt__static",children:e.char},e.key))})]})]})}var H=`
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
`,K={style:"currency",currency:"USD",maximumFractionDigits:0},P={style:"percent",minimumFractionDigits:1,maximumFractionDigits:1,signDisplay:"exceptZero"},U=(n,o)=>Math.round(n+Math.random()*(o-n));function $(){let[n,o]=(0,r.useState)(48240),[c,p]=(0,r.useState)(.124),f=u=>{o(l=>Math.max(0,l+u*U(600,6400))),p(l=>Math.round((l+u*U(8,46)/1e3)*1e3)/1e3)};return(0,t.jsx)("div",{className:"number-ticker-demo",children:(0,t.jsxs)("div",{className:"ntd-card",children:[(0,t.jsxs)("div",{className:"ntd-head",children:[(0,t.jsx)("span",{className:"ntd-label",children:"Revenue"}),(0,t.jsx)("span",{className:"ntd-period",children:"This month"})]}),(0,t.jsx)("div",{className:"ntd-value",children:(0,b.jsx)(O,{value:n,format:K,locale:"en-US"})}),(0,t.jsxs)("div",{className:"ntd-meta",children:[(0,t.jsxs)("span",{className:"ntd-delta","data-down":c<0||void 0,children:[(0,t.jsx)("svg",{viewBox:"0 0 12 12",width:"10",height:"10","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M6 2.5v7M2.75 5.75 6 2.5l3.25 3.25",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,b.jsx)(O,{value:c,format:P,locale:"en-US",duration:700,delay:150})]}),(0,t.jsx)("span",{className:"ntd-vs",children:"vs last month"})]}),(0,t.jsxs)("div",{className:"ntd-actions",children:[(0,t.jsx)("button",{type:"button",className:"ntd-btn","aria-label":"Decrease revenue",onClick:()=>f(-1),children:"\u2212"}),(0,t.jsx)("button",{type:"button",className:"ntd-btn","aria-label":"Increase revenue",onClick:()=>f(1),children:"+"})]})]})})}(0,L.createRoot)(document.getElementById("root")).render(q.default.createElement($));
