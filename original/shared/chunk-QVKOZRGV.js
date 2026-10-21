import{a as g}from"./chunk-BBLBVXTT.js";import{a as u}from"./chunk-H7MXNYVQ.js";var t=g(),e=u(),c={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0],diagonal:[-1,1]};function j({children:b,size:i=48,color:s,speed:o=3,direction:m="diagonal",reveal:a=!0,fade:v=70,className:h}){let d=(0,t.useRef)(null),[f,r]=(0,t.useState)(!a);(0,t.useEffect)(()=>{if(!a)return r(!0);let l=d.current;if(!l||typeof IntersectionObserver>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(!0);return}let n=new IntersectionObserver(w=>{w.some(y=>y.isIntersecting)&&(r(!0),n.disconnect())},{threshold:.2});return n.observe(l),()=>n.disconnect()},[a]);let[p,k]=c[m]??c.diagonal,x={"--ui-gb-size":`${i}px`,"--ui-gb-dx":`${p*i}px`,"--ui-gb-dy":`${k*i}px`,"--ui-gb-speed":`${Math.max(o,0)}s`,"--ui-gb-fade":`${v}%`,...s?{"--ui-gb-line":s}:{}};return(0,e.jsxs)("div",{ref:d,className:["ui-gb",h].filter(Boolean).join(" "),style:x,"data-reveal":a?"":void 0,"data-shown":f?"":void 0,"data-static":o>0?void 0:"",children:[(0,e.jsx)("style",{href:"ui-grid-background",precedence:"default",children:N}),(0,e.jsx)("div",{className:"ui-gb-grid","aria-hidden":"true",children:(0,e.jsx)("div",{className:"ui-gb-reveal",children:(0,e.jsx)("div",{className:"ui-gb-lines"})})}),(0,e.jsx)("div",{className:"ui-gb-content",children:b})]})}var N=`
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
`;function $(){return(0,e.jsx)("div",{className:"grid-background-demo",children:(0,e.jsx)(j,{className:"grid-background-demo__panel",children:(0,e.jsxs)("div",{className:"grid-background-demo__inner",children:[(0,e.jsx)("span",{className:"grid-background-demo__pill",children:"New"}),(0,e.jsx)("h3",{className:"grid-background-demo__title",children:"Build on a steady grid"}),(0,e.jsx)("p",{className:"grid-background-demo__sub",children:"A quiet backdrop that keeps moving, so your hero never feels static."})]})})})}export{$ as a};
