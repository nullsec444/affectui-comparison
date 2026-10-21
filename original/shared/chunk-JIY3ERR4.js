import{a as C}from"./chunk-BBLBVXTT.js";import{a as I}from"./chunk-H7MXNYVQ.js";var a=C(),e=I();function $(n){let l=Array.from(n),c=[],h=0,f=0;for(let u=l.length-1;u>=0;u--){let o=l[u];o>="0"&&o<="9"?c.unshift({key:`d${h++}`,digit:o.charCodeAt(0)-48}):c.unshift({key:`s${f++}`,char:o})}return c}var b=n=>(n%10+10)%10,q=n=>1-(1-n)**4,T=(n,l)=>{n.style.transform=`translateY(${-b(l)/11*100}%)`};function E({value:n,format:l,locale:c,duration:h=900,delay:f=0,className:u}){let o=JSON.stringify(l??{}),_=(0,a.useMemo)(()=>new Intl.NumberFormat(c,l).format(n),[n,c,o]),x=(0,a.useMemo)(()=>$(_),[_]),N=(0,a.useRef)(null),m=(0,a.useRef)(new Map),v=(0,a.useRef)(new Map),w=(0,a.useRef)(0),S=(0,a.useRef)(!0),M=(0,a.useRef)(!1),k=(0,a.useRef)(new Set),R=(0,a.useRef)(new Set),[F,D]=(0,a.useState)(!1),j=new Set(x.filter(t=>"digit"in t).map(t=>t.key));for(let t of j)M.current&&!R.current.has(t)&&k.current.add(t);for(let t of k.current)j.has(t)||k.current.delete(t);return R.current=j,(0,a.useEffect)(()=>{M.current=!0;let t=N.current;if(!t||typeof IntersectionObserver>"u"){D(!0);return}let s=0,d=new IntersectionObserver(([g])=>{g.isIntersecting&&(d.disconnect(),s=window.setTimeout(()=>D(!0),f))},{threshold:.3});return d.observe(t),()=>{d.disconnect(),clearTimeout(s)}},[]),(0,a.useEffect)(()=>{if(!F)return;n!==w.current&&(S.current=n>w.current),w.current=n;let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=new Set;for(let i of x){if(!("digit"in i))continue;s.add(i.key);let r=m.current.get(i.key)??{pos:0,from:0,to:0},p=S.current?b(i.digit-r.pos):-b(r.pos-i.digit);r.from=r.pos,r.to=r.pos+p,t&&(r.pos=r.from=r.to),m.current.set(i.key,r)}for(let i of m.current.keys())s.has(i)||m.current.delete(i);let d=()=>{for(let[i,r]of m.current){let p=v.current.get(i);p&&T(p,r.pos)}};if(t)return d();let g=0,U=performance.now(),A=i=>{let r=Math.min(1,(i-U)/h),p=q(r);for(let y of m.current.values())y.pos=y.from+(y.to-y.from)*p;d(),r<1&&(g=requestAnimationFrame(A))};return g=requestAnimationFrame(A),()=>cancelAnimationFrame(g)},[x,F,n,h]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{href:"ui-number-ticker",precedence:"default",children:B}),(0,e.jsxs)("span",{ref:N,className:["ui-nt",u].filter(Boolean).join(" "),"aria-live":"polite",children:[(0,e.jsx)("span",{className:"ui-nt__sr",children:_}),(0,e.jsx)("span",{className:"ui-nt__track","aria-hidden":"true",children:x.map(t=>"digit"in t?(0,e.jsx)("span",{className:"ui-nt__col","data-enter":k.current.has(t.key)||void 0,children:(0,e.jsx)("span",{className:"ui-nt__stack",ref:s=>{if(s)return v.current.set(t.key,s),T(s,m.current.get(t.key)?.pos??0),()=>{v.current.get(t.key)===s&&v.current.delete(t.key)}},children:[0,1,2,3,4,5,6,7,8,9,0].map((s,d)=>(0,e.jsx)("span",{className:"ui-nt__cell",children:s},d))})},t.key):(0,e.jsx)("span",{className:"ui-nt__static",children:t.char},t.key))})]})]})}var B=`
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
`,L={style:"currency",currency:"USD",maximumFractionDigits:0},Y={style:"percent",minimumFractionDigits:1,maximumFractionDigits:1,signDisplay:"exceptZero"},O=(n,l)=>Math.round(n+Math.random()*(l-n));function W(){let[n,l]=(0,a.useState)(48240),[c,h]=(0,a.useState)(.124),f=u=>{l(o=>Math.max(0,o+u*O(600,6400))),h(o=>Math.round((o+u*O(8,46)/1e3)*1e3)/1e3)};return(0,e.jsx)("div",{className:"number-ticker-demo",children:(0,e.jsxs)("div",{className:"ntd-card",children:[(0,e.jsxs)("div",{className:"ntd-head",children:[(0,e.jsx)("span",{className:"ntd-label",children:"Revenue"}),(0,e.jsx)("span",{className:"ntd-period",children:"This month"})]}),(0,e.jsx)("div",{className:"ntd-value",children:(0,e.jsx)(E,{value:n,format:L,locale:"en-US"})}),(0,e.jsxs)("div",{className:"ntd-meta",children:[(0,e.jsxs)("span",{className:"ntd-delta","data-down":c<0||void 0,children:[(0,e.jsx)("svg",{viewBox:"0 0 12 12",width:"10",height:"10","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M6 2.5v7M2.75 5.75 6 2.5l3.25 3.25",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,e.jsx)(E,{value:c,format:Y,locale:"en-US",duration:700,delay:150})]}),(0,e.jsx)("span",{className:"ntd-vs",children:"vs last month"})]}),(0,e.jsxs)("div",{className:"ntd-actions",children:[(0,e.jsx)("button",{type:"button",className:"ntd-btn","aria-label":"Decrease revenue",onClick:()=>f(-1),children:"\u2212"}),(0,e.jsx)("button",{type:"button",className:"ntd-btn","aria-label":"Increase revenue",onClick:()=>f(1),children:"+"})]})]})})}export{W as a};
