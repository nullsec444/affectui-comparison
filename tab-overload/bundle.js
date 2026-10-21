import{a as m}from"../shared/chunk-PWBCLQI6.js";import{a as l}from"../shared/chunk-LKG2PFLG.js";import{a as s}from"../shared/chunk-KHKHHDEU.js";import{b as r}from"../shared/chunk-MOQMIKSW.js";var u=r(l()),d=r(m());var b=r(l()),y=r(s()),t=r(s()),p=y,F=b,n=[{n:1,x:30,y:68},{n:2,x:125,y:56},{n:3,x:220,y:44}];function g({className:h,label:f="Three overlapping browser windows full of placeholder content"}){let i="ui-to"+(0,F.useId)().replace(/[^a-zA-Z0-9_-]/g,"");return(0,t.jsxs)("div",{className:["ui-to",h].filter(Boolean).join(" "),role:"img","aria-label":f,children:[(0,t.jsx)("style",{href:"ui-tab-overload",precedence:"default",children:x}),(0,t.jsxs)("svg",{className:"ui-to-art",viewBox:"0 0 360 240","aria-hidden":"true",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:`${i}-blob-h`,x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"#FFB89E",stopOpacity:"0.3"}),(0,t.jsx)("stop",{offset:"50%",stopColor:"#C8A8E5",stopOpacity:"0.3"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"#A8B5FF",stopOpacity:"0.3"})]}),(0,t.jsxs)("linearGradient",{id:`${i}-blob-v`,x1:"0%",y1:"100%",x2:"0%",y2:"0%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"#FF6B5C",stopOpacity:"0.3"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"#FFB89E",stopOpacity:"0.3"})]}),(0,t.jsx)("filter",{id:`${i}-blur`,x:"-200%",y:"-200%",width:"500%",height:"500%",children:(0,t.jsx)("feGaussianBlur",{stdDeviation:"12"})}),(0,t.jsxs)("linearGradient",{id:`${i}-stroke`,x1:"100%",y1:"0%",x2:"0%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"#B5C0FF"}),(0,t.jsx)("stop",{offset:"40%",stopColor:"#D5BBEF"}),(0,t.jsx)("stop",{offset:"75%",stopColor:"#FFC5AB"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"#FFB5BC"})]})]}),n.map(({n:a,x:o,y:e})=>(0,t.jsxs)("g",{children:[(0,t.jsxs)("g",{className:`ui-to-blobs ui-to-blobs-${a}`,children:[(0,t.jsx)("ellipse",{cx:o+70,cy:e+8,rx:"90",ry:"14",fill:`url(#${i}-blob-h)`,filter:`url(#${i}-blur)`}),(0,t.jsx)("ellipse",{cx:o+8,cy:e+96,rx:"14",ry:"90",fill:`url(#${i}-blob-v)`,filter:`url(#${i}-blur)`})]}),(0,t.jsxs)("g",{className:`ui-to-tab ui-to-tab-${a}`,transform:`translate(${o} ${e})`,children:[(0,t.jsx)("rect",{className:"ui-to-frame",width:"380",height:"300",rx:"6",fill:"#F4F5F7",stroke:"#E4E7EC",strokeWidth:"0.7"}),(0,t.jsx)("circle",{className:"ui-to-dot",cx:"14",cy:"14",r:"3",fill:"#CCCCCC"}),(0,t.jsx)("circle",{className:"ui-to-dot",cx:"24",cy:"14",r:"3",fill:"#CCCCCC"}),(0,t.jsx)("circle",{className:"ui-to-dot",cx:"34",cy:"14",r:"3",fill:"#CCCCCC"}),(0,t.jsx)("rect",{className:"ui-to-page",x:"4",y:"24",width:"372",height:"272",rx:"5",fill:"#FFFFFF",stroke:"#E4E7EC",strokeWidth:"0.7"})]}),(0,t.jsxs)("g",{className:`ui-to-content ui-to-content-${a}`,transform:`translate(${o} ${e})`,children:[(0,t.jsx)("rect",{className:"ui-to-bar",x:"12",y:"36",width:"30",height:"30",rx:"4",fill:"#EFF1F4"}),(0,t.jsx)("rect",{className:"ui-to-bar",x:"52",y:"38",width:"100",height:"6",rx:"2",fill:"#EFF1F4"}),(0,t.jsx)("rect",{className:"ui-to-bar",x:"52",y:"46",width:"100",height:"6",rx:"2",fill:"#EFF1F4"}),(0,t.jsx)("rect",{className:"ui-to-bar",x:"52",y:"54",width:"35",height:"6",rx:"2",fill:"#EFF1F4"}),(0,t.jsx)("rect",{className:"ui-to-bar",x:"12",y:"72",width:"140",height:"6",rx:"2",fill:"#EFF1F4"}),(0,t.jsx)("rect",{className:"ui-to-bar",x:"12",y:"80",width:"140",height:"6",rx:"2",fill:"#EFF1F4"}),(0,t.jsx)("rect",{className:"ui-to-bar",x:"12",y:"88",width:"55",height:"6",rx:"2",fill:"#EFF1F4"})]})]},a)),n.map(({n:a,x:o,y:e})=>(0,t.jsxs)("g",{className:`ui-to-front ui-to-front-${a}`,children:[(0,t.jsx)("circle",{cx:o+14,cy:e+14,r:"3",fill:"#FF6B5C"}),(0,t.jsx)("circle",{cx:o+24,cy:e+14,r:"3",fill:"#FFB89E"}),(0,t.jsx)("circle",{cx:o+34,cy:e+14,r:"3",fill:"#A8B5FF"}),(0,t.jsx)("path",{d:`M ${o} 240 L ${o} ${e+6} A 6 6 0 0 1 ${o+6} ${e} L ${a===3?360:o+95} ${e}`,fill:"none",stroke:`url(#${i}-stroke)`,strokeWidth:"0.8"})]},a))]})]})}var x=`
.ui-to {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  /* Fade out towards the right and bottom edge */
  -webkit-mask-image:
    linear-gradient(to right, #000 70%, transparent 100%),
    linear-gradient(to bottom, #000 70%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, #000 70%, transparent 100%),
    linear-gradient(to bottom, #000 70%, transparent 100%);
  mask-composite: intersect;
}
.ui-to-art {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

/* Placeholder blocks shimmer softly */
.ui-to-bar { animation: ui-to-shimmer 2.4s ease-in-out infinite; }
@keyframes ui-to-shimmer {
  0%, 100% { fill: #EFF1F4; }
  50% { fill: #DDE1E5; }
}

/* The highlight follows the hovered window; the front window is active by default */
.ui-to-blobs,
.ui-to-front {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.ui-to-content {
  opacity: 0.2;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.ui-to-blobs-3,
.ui-to-front-3,
.ui-to-content-3 { opacity: 1; }

.ui-to-art:has(.ui-to-tab-1:hover) .ui-to-blobs-1,
.ui-to-art:has(.ui-to-tab-1:hover) .ui-to-front-1,
.ui-to-art:has(.ui-to-tab-1:hover) .ui-to-content-1,
.ui-to-art:has(.ui-to-tab-2:hover) .ui-to-blobs-2,
.ui-to-art:has(.ui-to-tab-2:hover) .ui-to-front-2,
.ui-to-art:has(.ui-to-tab-2:hover) .ui-to-content-2 { opacity: 1; }

.ui-to-art:has(.ui-to-tab-1:hover, .ui-to-tab-2:hover) .ui-to-blobs-3,
.ui-to-art:has(.ui-to-tab-1:hover, .ui-to-tab-2:hover) .ui-to-front-3 { opacity: 0; }
.ui-to-art:has(.ui-to-tab-1:hover, .ui-to-tab-2:hover) .ui-to-content-3 { opacity: 0.2; }

@media (prefers-reduced-motion: reduce) {
  .ui-to-bar { animation: none; }
  .ui-to-blobs, .ui-to-front, .ui-to-content { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-to-frame { fill: #1b1b1d; stroke: rgba(255, 255, 255, 0.1); }
:where(.dark, [data-theme="dark"]) .ui-to-dot { fill: #3a3a3f; }
:where(.dark, [data-theme="dark"]) .ui-to-page { fill: #232326; stroke: rgba(255, 255, 255, 0.08); }
:where(.dark, [data-theme="dark"]) .ui-to-bar { fill: #2e2e32; }
@media (prefers-reduced-motion: no-preference) {
  :where(.dark, [data-theme="dark"]) .ui-to-bar { animation-name: ui-to-shimmer-dark; }
}
@keyframes ui-to-shimmer-dark {
  0%, 100% { fill: #2e2e32; }
  50% { fill: #3a3a3f; }
}
`;function c(){return(0,t.jsx)("div",{className:"tab-overload-demo",children:(0,p.jsx)(g,{})})}(0,d.createRoot)(document.getElementById("root")).render(u.default.createElement(c));
