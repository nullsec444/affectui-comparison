import{a as $}from"../shared/chunk-PWBCLQI6.js";import{a as c}from"../shared/chunk-LKG2PFLG.js";import{a as o}from"../shared/chunk-KHKHHDEU.js";import{b as a}from"../shared/chunk-MOQMIKSW.js";var v=a(c()),p=a($());var E=a(c()),B=a(o()),e=a(o()),I=B,s=E,b={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0],diagonal:[-1,1]};function j({children:f,size:r=48,color:d,speed:l=3,direction:h="diagonal",reveal:i=!0,fade:k=70,className:w}){let g=(0,s.useRef)(null),[y,t]=(0,s.useState)(!i);(0,s.useEffect)(()=>{if(!i)return t(!0);let u=g.current;if(!u||typeof IntersectionObserver>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(!0);return}let n=new IntersectionObserver(z=>{z.some(R=>R.isIntersecting)&&(t(!0),n.disconnect())},{threshold:.2});return n.observe(u),()=>n.disconnect()},[i]);let[x,N]=b[h]??b.diagonal,_={"--ui-gb-size":`${r}px`,"--ui-gb-dx":`${x*r}px`,"--ui-gb-dy":`${N*r}px`,"--ui-gb-speed":`${Math.max(l,0)}s`,"--ui-gb-fade":`${k}%`,...d?{"--ui-gb-line":d}:{}};return(0,e.jsxs)("div",{ref:g,className:["ui-gb",w].filter(Boolean).join(" "),style:_,"data-reveal":i?"":void 0,"data-shown":y?"":void 0,"data-static":l>0?void 0:"",children:[(0,e.jsx)("style",{href:"ui-grid-background",precedence:"default",children:D}),(0,e.jsx)("div",{className:"ui-gb-grid","aria-hidden":"true",children:(0,e.jsx)("div",{className:"ui-gb-reveal",children:(0,e.jsx)("div",{className:"ui-gb-lines"})})}),(0,e.jsx)("div",{className:"ui-gb-content",children:f})]})}var D=`
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
`;function m(){return(0,e.jsx)("div",{className:"grid-background-demo",children:(0,I.jsx)(j,{className:"grid-background-demo__panel",children:(0,e.jsxs)("div",{className:"grid-background-demo__inner",children:[(0,e.jsx)("span",{className:"grid-background-demo__pill",children:"New"}),(0,e.jsx)("h3",{className:"grid-background-demo__title",children:"Build on a steady grid"}),(0,e.jsx)("p",{className:"grid-background-demo__sub",children:"A quiet backdrop that keeps moving, so your hero never feels static."})]})})})}(0,p.createRoot)(document.getElementById("root")).render(v.default.createElement(m));
