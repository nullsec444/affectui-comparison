import{a as c}from"./chunk-BBLBVXTT.js";import{a as m}from"./chunk-VXCLO5JM.js";import"./chunk-LKG2PFLG.js";import"./chunk-KHKHHDEU.js";import"./chunk-MOQMIKSW.js";var l=c(),e=m(),d=s=>typeof s=="number"?`${s}px`:s,x=()=>(0,e.jsx)("style",{href:"ui-shimmer-loader",precedence:"default",children:f});function t({width:s,height:i,radius:r,circle:n,className:a,style:h}){let o=d(s);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x,{}),(0,e.jsx)("span",{className:["ui-shm",a].filter(Boolean).join(" "),"aria-hidden":"true",style:{width:o,height:n?o??d(i):d(i),borderRadius:n?"50%":d(r),...h}})]})}function g({children:s,duration:i=2,className:r}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x,{}),(0,e.jsx)("span",{className:["ui-shm-text",r].filter(Boolean).join(" "),style:{"--ui-shm-text-dur":`${i}s`},children:s})]})}var f=`
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
`,u=["#ffd6a8, #ff9f6b","#c7d7ff, #8aa7ff","#cdeccf, #7fcf9a"];function k(){let[s,i]=(0,l.useState)(!0),[r,n]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let a=setTimeout(()=>i(h=>!h),s?2500:3200);return()=>clearTimeout(a)},[s,r]),(0,e.jsxs)("div",{className:"shimmer-loader-demo",children:[(0,e.jsxs)("div",{className:"shd-top",children:[(0,e.jsx)(g,{className:"shd-label",children:"Generating summary\u2026"}),(0,e.jsx)("button",{type:"button",className:"shd-btn",onClick:()=>{i(!0),n(a=>a+1)},children:"Reload"})]}),(0,e.jsx)("div",{className:"shd-card","aria-busy":s,children:s?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"shd-row",children:[(0,e.jsx)(t,{circle:!0,width:36}),(0,e.jsxs)("div",{className:"shd-meta",children:[(0,e.jsx)(t,{width:96,height:10,radius:5}),(0,e.jsx)(t,{width:64,height:8,radius:4})]})]}),(0,e.jsxs)("div",{className:"shd-lines",children:[(0,e.jsx)(t,{height:10,radius:5}),(0,e.jsx)(t,{width:"72%",height:10,radius:5})]}),(0,e.jsx)("div",{className:"shd-tiles",children:u.map(a=>(0,e.jsx)(t,{height:56,radius:10},a))})]}):(0,e.jsxs)("div",{className:"shd-loaded",children:[(0,e.jsxs)("div",{className:"shd-row",children:[(0,e.jsx)("span",{className:"shd-avatar",children:"MC"}),(0,e.jsxs)("div",{className:"shd-meta",children:[(0,e.jsx)("span",{className:"shd-name",children:"Maya Chen"}),(0,e.jsx)("span",{className:"shd-sub",children:"Product design \xB7 2h"})]})]}),(0,e.jsx)("p",{className:"shd-text",children:"New onboarding flow is live \u2013 activation is up 18% in the first week."}),(0,e.jsx)("div",{className:"shd-tiles",children:u.map(a=>(0,e.jsx)("span",{className:"shd-tile",style:{background:`linear-gradient(135deg, ${a})`}},a))})]})})]})}export{k as default};
