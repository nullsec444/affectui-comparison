import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t(),i={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0],diagonal:[-1,1]};function a({children:e,size:t=48,color:a,speed:s=3,direction:c=`diagonal`,reveal:l=!0,fade:u=70,className:d}){let f=(0,n.useRef)(null),[p,m]=(0,n.useState)(!l);(0,n.useEffect)(()=>{if(!l)return m(!0);let e=f.current;if(!e||typeof IntersectionObserver>`u`||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){m(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(m(!0),t.disconnect())},{threshold:.2});return t.observe(e),()=>t.disconnect()},[l]);let[h,g]=i[c]??i.diagonal,_={"--ui-gb-size":`${t}px`,"--ui-gb-dx":`${h*t}px`,"--ui-gb-dy":`${g*t}px`,"--ui-gb-speed":`${Math.max(s,0)}s`,"--ui-gb-fade":`${u}%`,...a?{"--ui-gb-line":a}:{}};return(0,r.jsxs)(`div`,{ref:f,className:[`ui-gb`,d].filter(Boolean).join(` `),style:_,"data-reveal":l?``:void 0,"data-shown":p?``:void 0,"data-static":s>0?void 0:``,children:[(0,r.jsx)(`style`,{href:`ui-grid-background`,precedence:`default`,children:o}),(0,r.jsx)(`div`,{className:`ui-gb-grid`,"aria-hidden":`true`,children:(0,r.jsx)(`div`,{className:`ui-gb-reveal`,children:(0,r.jsx)(`div`,{className:`ui-gb-lines`})})}),(0,r.jsx)(`div`,{className:`ui-gb-content`,children:e})]})}var o=`
@property --ui-gb-r {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}

.ui-gb {
  --ui-gb-color: rgba(0, 0, 0, 0.07);
  --ui-gb-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

/* Edge fade: a still radial mask, so the drifting lines dissolve towards the sides */
.ui-gb-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  -webkit-mask-image: radial-gradient(ellipse at center, #000 20%, transparent var(--ui-gb-fade));
  mask-image: radial-gradient(ellipse at center, #000 20%, transparent var(--ui-gb-fade));
}

/* Reveal: a circle from the center grows until it reaches the corners */
.ui-gb-reveal {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.ui-gb[data-reveal] .ui-gb-reveal {
  --ui-gb-r: 0%;
  -webkit-mask-image: radial-gradient(circle farthest-corner at center, #000 var(--ui-gb-r), transparent calc(var(--ui-gb-r) + 12%));
  mask-image: radial-gradient(circle farthest-corner at center, #000 var(--ui-gb-r), transparent calc(var(--ui-gb-r) + 12%));
}
.ui-gb[data-reveal][data-shown] .ui-gb-reveal {
  animation: ui-gb-reveal 1.6s var(--ui-gb-ease) forwards;
}

/* The lines: one cell larger on every side, so a shift by one cell loops seamlessly */
.ui-gb-lines {
  position: absolute;
  inset: calc(var(--ui-gb-size) * -1);
  background-image:
    linear-gradient(to right, var(--ui-gb-line, var(--ui-gb-color)) 1px, transparent 1px),
    linear-gradient(to bottom, var(--ui-gb-line, var(--ui-gb-color)) 1px, transparent 1px);
  background-size: var(--ui-gb-size) var(--ui-gb-size);
  animation: ui-gb-drift var(--ui-gb-speed) linear infinite;
}
.ui-gb[data-static] .ui-gb-lines {
  animation: none;
}

.ui-gb-content {
  position: relative;
  z-index: 1;
  height: 100%;
}

@keyframes ui-gb-drift {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(var(--ui-gb-dx), var(--ui-gb-dy), 0); }
}
@keyframes ui-gb-reveal {
  from { --ui-gb-r: 0%; }
  to { --ui-gb-r: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-gb-lines { animation: none; }
  .ui-gb[data-reveal] .ui-gb-reveal { -webkit-mask-image: none; mask-image: none; animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-gb {
  --ui-gb-color: rgba(255, 255, 255, 0.07);
}
`;function s(){return(0,r.jsx)(`div`,{className:`grid-background-demo`,children:(0,r.jsx)(a,{className:`grid-background-demo__panel`,children:(0,r.jsxs)(`div`,{className:`grid-background-demo__inner`,children:[(0,r.jsx)(`span`,{className:`grid-background-demo__pill`,children:`New`}),(0,r.jsx)(`h3`,{className:`grid-background-demo__title`,children:`Build on a steady grid`}),(0,r.jsx)(`p`,{className:`grid-background-demo__sub`,children:`A quiet backdrop that keeps moving, so your hero never feels static.`})]})})})}export{s as default};