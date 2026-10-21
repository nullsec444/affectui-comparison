import{a as k}from"../shared/chunk-PWBCLQI6.js";import{a as g}from"../shared/chunk-LKG2PFLG.js";import{a as l}from"../shared/chunk-KHKHHDEU.js";import{b as r}from"../shared/chunk-MOQMIKSW.js";var b=r(g()),v=r(k());var w=r(g()),N=r(l()),e=r(l()),a=N,u=w,m=t=>typeof t=="number"?`${t}px`:t,p=()=>(0,e.jsx)("style",{href:"ui-shimmer-loader",precedence:"default",children:j});function n({width:t,height:i,radius:d,circle:o,className:s,style:h}){let c=m(t);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{}),(0,e.jsx)("span",{className:["ui-shm",s].filter(Boolean).join(" "),"aria-hidden":"true",style:{width:c,height:o?c??m(i):m(i),borderRadius:o?"50%":m(d),...h}})]})}function y({children:t,duration:i=2,className:d}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{}),(0,e.jsx)("span",{className:["ui-shm-text",d].filter(Boolean).join(" "),style:{"--ui-shm-text-dur":`${i}s`},children:t})]})}var j=`
.ui-shm,
.ui-shm-text {
  --ui-shm-base: #ececec;
  --ui-shm-glow: rgba(255, 255, 255, 0.9);
  --ui-shm-text: #a3a3a3;
  --ui-shm-text-glow: #ffffff;
  --ui-shm-dur: 2.2s;
}

/* Skeleton: one fixed gradient for the whole viewport, so all blocks sweep together */
.ui-shm {
  display: block;
  flex: none;
  width: 100%;
  height: 12px;
  max-width: 100%;
  border-radius: 6px;
  background-color: var(--ui-shm-base);
  background-image: linear-gradient(
    100deg,
    transparent 0%,
    transparent 30%,
    var(--ui-shm-glow) 50%,
    transparent 70%,
    transparent 100%
  );
  background-size: 150vw 100%;
  background-repeat: repeat-x;
  background-attachment: fixed;
  animation: ui-shm-sweep var(--ui-shm-dur) linear infinite;
}
@keyframes ui-shm-sweep {
  from { background-position: -50vw 0; }
  to { background-position: 100vw 0; }
}

/* Text: a highlight band runs through the letters */
.ui-shm-text {
  display: inline-block;
  color: var(--ui-shm-text);
  background-image: linear-gradient(
    90deg,
    var(--ui-shm-text) 0%,
    var(--ui-shm-text) 40%,
    var(--ui-shm-text-glow) 50%,
    var(--ui-shm-text) 60%,
    var(--ui-shm-text) 100%
  );
  background-size: 300% 100%;
  background-position: 100% 0;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ui-shm-text var(--ui-shm-text-dur, 2s) linear infinite;
}
@keyframes ui-shm-text {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-shm { animation: none; background-image: none; }
  .ui-shm-text { animation: none; background-image: none; -webkit-text-fill-color: currentColor; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-shm,
:where(.dark, [data-theme="dark"]) .ui-shm-text {
  --ui-shm-base: #2f2f33;
  --ui-shm-glow: rgba(255, 255, 255, 0.08);
  --ui-shm-text: #6e6e73;
  --ui-shm-text-glow: #f5f5f5;
}
`,f=["#ffd6a8, #ff9f6b","#c7d7ff, #8aa7ff","#cdeccf, #7fcf9a"];function x(){let[t,i]=(0,u.useState)(!0),[d,o]=(0,u.useState)(0);return(0,u.useEffect)(()=>{let s=setTimeout(()=>i(h=>!h),t?2500:3200);return()=>clearTimeout(s)},[t,d]),(0,e.jsxs)("div",{className:"shimmer-loader-demo",children:[(0,e.jsxs)("div",{className:"shd-top",children:[(0,a.jsx)(y,{className:"shd-label",children:"Generating summary\u2026"}),(0,e.jsx)("button",{type:"button",className:"shd-btn",onClick:()=>{i(!0),o(s=>s+1)},children:"Reload"})]}),(0,e.jsx)("div",{className:"shd-card","aria-busy":t,children:t?(0,a.jsxs)(a.Fragment,{children:[(0,e.jsxs)("div",{className:"shd-row",children:[(0,a.jsx)(n,{circle:!0,width:36}),(0,e.jsxs)("div",{className:"shd-meta",children:[(0,a.jsx)(n,{width:96,height:10,radius:5}),(0,a.jsx)(n,{width:64,height:8,radius:4})]})]}),(0,e.jsxs)("div",{className:"shd-lines",children:[(0,a.jsx)(n,{height:10,radius:5}),(0,a.jsx)(n,{width:"72%",height:10,radius:5})]}),(0,e.jsx)("div",{className:"shd-tiles",children:f.map(s=>(0,a.jsx)(n,{height:56,radius:10},s))})]}):(0,e.jsxs)("div",{className:"shd-loaded",children:[(0,e.jsxs)("div",{className:"shd-row",children:[(0,e.jsx)("span",{className:"shd-avatar",children:"MC"}),(0,e.jsxs)("div",{className:"shd-meta",children:[(0,e.jsx)("span",{className:"shd-name",children:"Maya Chen"}),(0,e.jsx)("span",{className:"shd-sub",children:"Product design \xB7 2h"})]})]}),(0,e.jsx)("p",{className:"shd-text",children:"New onboarding flow is live \u2013 activation is up 18% in the first week."}),(0,e.jsx)("div",{className:"shd-tiles",children:f.map(s=>(0,e.jsx)("span",{className:"shd-tile",style:{background:`linear-gradient(135deg, ${s})`}},s))})]})})]})}(0,v.createRoot)(document.getElementById("root")).render(b.default.createElement(x));
