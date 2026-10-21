import{a as r}from"./chunk-BBLBVXTT.js";import{a as t}from"./chunk-H7MXNYVQ.js";var d=r(),e=t(),a="M40 0H290Q330 0 330 40V318Q330 338 344 348L364 362Q380 372 380 396V480Q380 520 340 520H40Q0 520 0 480V40Q0 0 40 0Z",c=[78,180,140,175,126,168,110],o=`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 520' preserveAspectRatio='none'><path d='${a}'/></svg>`)}") 0 0 / 100% 100% no-repeat`;function u({className:n,label:f="Blue folder on its side, with three documents peeking out behind a frosted front pocket"}){let s="ui-sf"+(0,d.useId)().replace(/[^a-zA-Z0-9_-]/g,"");return(0,e.jsxs)("div",{className:["ui-sf",n].filter(Boolean).join(" "),role:"img","aria-label":f,children:[(0,e.jsx)("style",{href:"ui-side-folder",precedence:"default",children:h}),(0,e.jsxs)("div",{className:"ui-sf-icon","aria-hidden":"true",children:[(0,e.jsxs)("svg",{className:"ui-sf-layer ui-sf-back",viewBox:"0 0 440 520",children:[(0,e.jsx)("defs",{children:(0,e.jsxs)("filter",{id:`${s}-hl`,x:"-10%",y:"-10%",width:"120%",height:"120%",children:[(0,e.jsx)("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4",result:"blur"}),(0,e.jsx)("feOffset",{in:"blur",dy:"3",result:"offset"}),(0,e.jsx)("feComposite",{in:"blur",in2:"offset",operator:"arithmetic",k2:"1",k3:"-1",result:"diff"}),(0,e.jsx)("feFlood",{floodColor:"#fff",floodOpacity:"0.65"}),(0,e.jsx)("feComposite",{in2:"diff",operator:"in",result:"light"}),(0,e.jsx)("feComposite",{in:"light",in2:"SourceAlpha",operator:"in"})]})}),(0,e.jsx)("rect",{x:"0",y:"18",width:"440",height:"486",rx:"36",fill:"#5bb7ea"}),(0,e.jsx)("rect",{x:"0",y:"18",width:"440",height:"486",rx:"36",fill:"#000",filter:`url(#${s}-hl)`})]}),(0,e.jsxs)("svg",{className:"ui-sf-layer",viewBox:"0 0 440 520",children:[(0,e.jsxs)("defs",{children:[(0,e.jsxs)("linearGradient",{id:`${s}-paper`,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,e.jsx)("stop",{offset:"0%",stopColor:"#fff"}),(0,e.jsx)("stop",{offset:"100%",stopColor:"#eaf2f8"})]}),(0,e.jsxs)("symbol",{id:`${s}-doc`,overflow:"visible",children:[(0,e.jsx)("rect",{x:"0.6",y:"0.6",width:"278.8",height:"348.8",rx:"19.4",fill:`url(#${s}-paper)`,stroke:"rgba(0,0,0,0.12)",strokeWidth:"1.2"}),c.map((l,i)=>(0,e.jsx)("rect",{x:"30",y:87+i*28,width:l,height:"9",rx:"4.5",fill:"rgba(0,0,0,0.12)"},i))]})]}),(0,e.jsxs)("g",{transform:"scale(1.15)",children:[(0,e.jsx)("use",{className:"ui-sf-doc ui-sf-doc--top",href:`#${s}-doc`}),(0,e.jsx)("use",{className:"ui-sf-doc ui-sf-doc--bottom",href:`#${s}-doc`}),(0,e.jsx)("use",{className:"ui-sf-doc ui-sf-doc--middle",href:`#${s}-doc`})]})]}),(0,e.jsx)("div",{className:"ui-sf-front",children:(0,e.jsx)("svg",{viewBox:"0 0 380 520",children:(0,e.jsx)("path",{d:a,fill:"none",stroke:"rgba(255,255,255,0.3)",strokeWidth:"4"})})})]})]})}var h=`
.ui-sf {
  --ui-sf-ease: cubic-bezier(0.2, 0.85, 0.25, 1);
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  container-type: inline-size;
}

/* The folder is drawn on a 440 \xD7 520 grid; cqw keeps every detail in proportion */
.ui-sf-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 37%;
  aspect-ratio: 440 / 520;
  container-type: inline-size;
  perspective: 260cqw;
  perspective-origin: 40% 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.6s var(--ui-sf-ease);
}
.ui-sf-icon:hover { transform: translate(-50%, -50%) scale(1.03); }

.ui-sf-layer { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.ui-sf-back {
  filter:
    drop-shadow(0 5.4cqw 6.4cqw rgba(60, 130, 180, 0.28))
    drop-shadow(0 1.8cqw 2.7cqw rgba(60, 130, 180, 0.16))
    drop-shadow(0 0.45cqw 0.9cqw rgba(60, 130, 180, 0.1));
}

/* Documents, in the 1.15 scaled space of the stack */
.ui-sf-doc {
  transform-box: fill-box;
  transform-origin: center;
  filter: drop-shadow(0 3px 4px rgba(0, 30, 60, 0.18));
  transition: transform 0.55s var(--ui-sf-ease);
}
.ui-sf-doc--top    { transform: translate(83px, 43px) rotate(3deg); }
.ui-sf-doc--bottom { transform: translate(78px, 68px) rotate(4deg); }
.ui-sf-doc--middle { transform: translate(73px, 56px) rotate(-2deg); }
.ui-sf-icon:hover .ui-sf-doc--top    { transform: translate(100px, 35px) rotate(6deg); }
.ui-sf-icon:hover .ui-sf-doc--bottom { transform: translate(93px, 75px) rotate(7deg); }
.ui-sf-icon:hover .ui-sf-doc--middle { transform: translate(95px, 54px) rotate(0deg); }

/* Pocket: hinged on its left edge, it swings its right edge towards you on hover */
.ui-sf-front {
  position: absolute;
  left: 0;
  top: 0;
  width: 86.3636%;
  height: 100%;
  -webkit-mask: ${o};
  mask: ${o};
  background:
    linear-gradient(180deg, rgba(0, 40, 75, 0) 76%, rgba(0, 40, 75, 0.26) 100%),
    linear-gradient(160deg, rgba(132, 214, 248, 0.45) 0%, rgba(69, 170, 220, 0.45) 100%);
  -webkit-backdrop-filter: blur(4.5cqw) saturate(1.1);
  backdrop-filter: blur(4.5cqw) saturate(1.1);
  transform-origin: 0 50%;
  transition: transform 0.6s var(--ui-sf-ease);
}
.ui-sf-front svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.ui-sf-icon:hover .ui-sf-front { transform: translateZ(3cqw) rotateY(-12deg); }

@media (prefers-reduced-motion: reduce) {
  .ui-sf-icon, .ui-sf-doc, .ui-sf-front { transition: none; }
}
`;function g(){return(0,e.jsx)("div",{className:"side-folder-demo",children:(0,e.jsx)(u,{})})}export{g as a};
