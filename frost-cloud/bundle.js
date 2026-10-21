import{a as ue}from"../shared/chunk-PWBCLQI6.js";import{a as k}from"../shared/chunk-LKG2PFLG.js";import{a as N}from"../shared/chunk-KHKHHDEU.js";import{b as d}from"../shared/chunk-MOQMIKSW.js";var ae=d(k()),oe=d(ue());var de=d(k()),he=d(N()),e=d(N()),ie=d(k()),v=he,c=de,ge=[{cx:115,cy:93,r:43},{cx:163,cy:111,r:39},{cx:156,cy:155,r:31},{cx:107,cy:155,r:35},{cx:72,cy:126,r:34}],V={x:80,y:100,width:80,height:65},a={y:106,w:18,h:31,left:96.5,right:127.5},p=120,ee=120,ye=180,te=[{x:0,y:0},{x:-1,y:.05},{x:1,y:-.05},{x:0,y:0},{x:.65,y:-.55},{x:-.7,y:.35}],m=(h,g,y)=>`translate(${h} ${g}) ${y} translate(${-h} ${-g})`,$=({offset:h,color:g,opacity:y})=>(0,e.jsx)("stop",{offset:h,style:{stopColor:`var(--ui-fc-${g})`,stopOpacity:y}});function me({background:h=!0,color:g="orange",followPointer:y=!0,className:se,label:le="A frosted white cloud with eyes that floats, looks around and blinks"}){let fe=(0,c.useId)().replace(/[^a-zA-Z0-9_-]/g,""),t=o=>`fc${fe}-${o}`,O=(0,c.useRef)(null),E=(0,c.useRef)(null),B=(0,c.useRef)(null),D=(0,c.useRef)(null),G=(0,c.useRef)(null),S=(0,c.useRef)(null),P=(0,c.useRef)(null),_=(0,c.useRef)(null);(0,c.useEffect)(()=>{let o=O.current;if(!o)return;let u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r={x:0,y:0,vx:0,vy:0},l={x:0,y:0},n={p:0,v:0},M=!1,F=1.2,L=1.8,b=-1,C=!1,T=-1,x=0,A=0,f=0,U=(s,i=.16)=>s<0||s>i?1:1-.9*Math.sin(s/i*Math.PI),q=()=>{let s=u?0:Math.sin(f*1.1)*5,i=u?0:Math.sin(f*1.1+Math.PI/2)*.012,w=1+i-n.p*.12,ce=1-i+n.p*.1;E.current?.setAttribute("transform",`translate(0 ${s.toFixed(2)}) ${m(p,ye,`scale(${ce.toFixed(4)} ${w.toFixed(4)})`)}`),B.current?.setAttribute("transform",`translate(${(r.x*4).toFixed(2)} ${(r.y*2).toFixed(2)}) ${m(p,ee,`rotate(${(r.x*2.5).toFixed(2)}) scale(${(1-Math.abs(r.x)*.025).toFixed(4)} 1)`)}`),D.current?.setAttribute("transform",`translate(${(r.x*12).toFixed(2)} ${(r.y*7).toFixed(2)})`),P.current?.setAttribute("transform",`translate(${(-r.x*7).toFixed(2)} ${(-r.y*3).toFixed(2)})`);let J=b<0?1:Math.min(U(f-b),C?U(f-b-.26):1),ne=U(f-T,.34),K=a.y+a.h/2;G.current?.setAttribute("transform",m(a.left+a.w/2,K,`scale(1 ${J.toFixed(3)})`)),S.current?.setAttribute("transform",m(a.right+a.w/2,K,`scale(1 ${Math.min(J,ne).toFixed(3)})`));let Q=(s+5)/10;_.current?.setAttribute("transform",m(p,210,`scale(${(1-Q*.12).toFixed(3)} 1)`)),_.current?.setAttribute("opacity",(.34-Q*.1).toFixed(3))},z=s=>{let i=Math.min(.05,(s-(A||s))/1e3);if(A=s,f+=i,!M&&f>F){let w=te[Math.floor(Math.random()*te.length)];l.x=w.x,l.y=w.y,F=f+1.4+Math.random()*2.2}f>L&&(b=f,C=Math.random()<.25,L=f+2.4+Math.random()*3),r.vx+=((l.x-r.x)*70-r.vx*13)*i,r.vy+=((l.y-r.y)*70-r.vy*13)*i,r.x+=r.vx*i,r.y+=r.vy*i,n.v+=(-n.p*220-n.v*9)*i,n.p+=n.v*i,q(),x=requestAnimationFrame(z)},W=()=>{x||u||(A=0,x=requestAnimationFrame(z))},R=()=>{cancelAnimationFrame(x),x=0},X=new IntersectionObserver(([s])=>s.isIntersecting?W():R());X.observe(o);let Y=s=>{if(!y)return;let i=o.getBoundingClientRect();M=!0,l.x=Math.max(-1,Math.min(1,((s.clientX-i.left)/i.width-.5)*2.4)),l.y=Math.max(-1,Math.min(1,((s.clientY-i.top)/i.height-.5)*2.4))},Z=()=>{M=!1,l.x=0,l.y=0,F=f+1.2},H=()=>{n.p=.9,n.v=0,T=f+.12,u&&(W(),window.setTimeout(R,1200))};return o.addEventListener("pointermove",Y),o.addEventListener("pointerleave",Z),o.addEventListener("pointerdown",H),q(),()=>{R(),X.disconnect(),o.removeEventListener("pointermove",Y),o.removeEventListener("pointerleave",Z),o.removeEventListener("pointerdown",H)}},[y]);let j=ge.map((o,u)=>(0,ie.createElement)("circle",{...o,key:u})),I=(o,u,r)=>{let l={x:o,y:a.y,width:a.w,height:a.h,rx:a.w/2};return(0,e.jsxs)("g",{ref:u,children:[(0,e.jsx)("rect",{...l,x:o-1.5,y:a.y-1,width:a.w+3,height:a.h+3,rx:a.w/2+1.5,className:"ui-fc__eye-drop",filter:`url(#${t("edge")})`}),(0,e.jsx)("rect",{...l,fill:`url(#${t("hole")})`}),(0,e.jsx)("clipPath",{id:t(`clip-${r}`),children:(0,e.jsx)("rect",{...l})}),(0,e.jsx)("rect",{...l,y:a.y+2.5,className:"ui-fc__eye-shade",fill:"none",strokeWidth:"5",filter:`url(#${t("edge")})`,clipPath:`url(#${t(`clip-${r}`)})`})]})};return(0,e.jsxs)("div",{ref:O,className:["ui-fc",se].filter(Boolean).join(" "),"data-bg":h||void 0,"data-color":g,role:"img","aria-label":le,children:[(0,e.jsx)("style",{href:"ui-frost-cloud",precedence:"default",children:xe}),(0,e.jsxs)("svg",{viewBox:"0 0 240 240","aria-hidden":"true",children:[(0,e.jsxs)("defs",{children:[(0,e.jsxs)("filter",{id:t("goo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:[(0,e.jsx)("feGaussianBlur",{stdDeviation:"3.5"}),(0,e.jsx)("feColorMatrix",{values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12"})]}),(0,e.jsx)("filter",{id:t("soft"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"12"})}),(0,e.jsx)("filter",{id:t("halo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"9"})}),(0,e.jsx)("filter",{id:t("edge"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"1.6"})}),(0,e.jsx)("filter",{id:t("shade"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"5"})}),(0,e.jsxs)("g",{id:t("shape"),filter:`url(#${t("goo")})`,children:[j,(0,e.jsx)("rect",{...V})]}),(0,e.jsx)("mask",{id:t("mask"),maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"240",height:"240",children:(0,e.jsx)("use",{href:`#${t("shape")}`,fill:"#fff"})}),(0,e.jsxs)("linearGradient",{id:t("frost"),x1:"0",y1:"50",x2:"0",y2:"192",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)($,{offset:0,color:"white"}),(0,v.jsx)($,{offset:1,color:"frost",opacity:.97})]}),(0,e.jsxs)("linearGradient",{id:t("hole"),x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,v.jsx)($,{offset:0,color:"hole-1"}),(0,v.jsx)($,{offset:1,color:"hole-2"})]})]}),(0,e.jsx)("ellipse",{ref:_,className:"ui-fc__shadow",cx:p,cy:"210",rx:"54",ry:"7",filter:`url(#${t("shade")})`}),(0,e.jsx)("g",{ref:E,children:(0,e.jsxs)("g",{ref:B,children:[(0,e.jsx)("use",{href:`#${t("shape")}`,className:"ui-fc__halo",filter:`url(#${t("halo")})`}),(0,e.jsx)("use",{href:`#${t("shape")}`,className:"ui-fc__edge",filter:`url(#${t("edge")})`}),(0,e.jsxs)("g",{mask:`url(#${t("mask")})`,children:[(0,e.jsx)("rect",{width:"240",height:"240",fill:`url(#${t("frost")})`}),(0,e.jsxs)("g",{filter:`url(#${t("soft")})`,className:"ui-fc__tint",transform:`translate(-6 18) ${m(p,ee,"scale(0.84 0.78)")}`,children:[j,(0,e.jsx)("rect",{...V})]}),(0,e.jsx)("ellipse",{ref:P,cx:"108",cy:"78",rx:"34",ry:"14",fill:"#fff",opacity:"0.75",filter:`url(#${t("shade")})`})]}),(0,e.jsxs)("g",{ref:D,children:[I(a.left,G,"l"),I(a.right,S,"r")]})]})})]})]})}var xe=`
/* Palette as variables \u2013 blue, or red-orange via data-color="orange" */
.ui-fc {
  --ui-fc-sky-top: #2475ea;
  --ui-fc-sky-bottom: #4ac8f5;
  --ui-fc-sky-light: rgba(110, 225, 255, 0.55);
  --ui-fc-white: #ffffff;
  --ui-fc-frost: #eef8ff;
  --ui-fc-tint: rgba(70, 165, 235, 0.2);
  --ui-fc-hole-1: #3aaef2;
  --ui-fc-hole-2: #62cdfa;
  --ui-fc-eye-drop: rgba(40, 130, 210, 0.1);
  --ui-fc-eye-shade: rgba(10, 90, 190, 0.24);
  --ui-fc-halo: rgba(30, 150, 255, 0.2);
  --ui-fc-edge: rgba(20, 120, 240, 0.4);
  --ui-fc-shadow: rgba(10, 90, 200, 0.55);
  --ui-fc-ground: rgba(10, 80, 190, 0.4);
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
.ui-fc[data-color="orange"] {
  --ui-fc-sky-top: #e94135;
  --ui-fc-sky-bottom: #fa9842;
  --ui-fc-sky-light: rgba(255, 205, 150, 0.5);
  --ui-fc-frost: #fff5f0;
  --ui-fc-tint: rgba(235, 110, 70, 0.2);
  --ui-fc-hole-1: #f05f42;
  --ui-fc-hole-2: #fba05b;
  --ui-fc-eye-drop: rgba(200, 70, 40, 0.1);
  --ui-fc-eye-shade: rgba(170, 40, 20, 0.24);
  --ui-fc-halo: rgba(240, 100, 60, 0.2);
  --ui-fc-edge: rgba(220, 80, 40, 0.4);
  --ui-fc-shadow: rgba(170, 50, 20, 0.5);
  --ui-fc-ground: rgba(150, 30, 10, 0.36);
}
.ui-fc svg { display: block; width: 100%; max-width: 320px; overflow: visible; }
.ui-fc__halo { fill: var(--ui-fc-halo); }
.ui-fc__edge { fill: var(--ui-fc-edge); }
.ui-fc__shadow { fill: var(--ui-fc-shadow); }
.ui-fc__tint { fill: var(--ui-fc-tint); }
.ui-fc__eye-drop { fill: var(--ui-fc-eye-drop); }
.ui-fc__eye-shade { stroke: var(--ui-fc-eye-shade); }

/* The sky: darker at the top, lighter at the bottom, a brighter patch behind the cloud \u2013 fills the whole box */
.ui-fc[data-bg] {
  --ui-fc-halo: rgba(255, 255, 255, 0.75);
  --ui-fc-edge: rgba(255, 255, 255, 0.5);
  --ui-fc-shadow: var(--ui-fc-ground);
  background:
    radial-gradient(60% 55% at 62% 42%, var(--ui-fc-sky-light), transparent 70%),
    linear-gradient(180deg, var(--ui-fc-sky-top), var(--ui-fc-sky-bottom));
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> \u2013 a deeper sky */
:where(.dark, [data-theme="dark"]) .ui-fc {
  --ui-fc-sky-top: #1659c8;
  --ui-fc-sky-bottom: #2aa6e6;
  --ui-fc-sky-light: rgba(90, 205, 255, 0.45);
  --ui-fc-ground: rgba(5, 50, 140, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-fc[data-color="orange"] {
  --ui-fc-sky-top: #bf2722;
  --ui-fc-sky-bottom: #ed701d;
  --ui-fc-sky-light: rgba(255, 175, 120, 0.42);
  --ui-fc-ground: rgba(110, 15, 5, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-fc:not([data-bg]) {
  --ui-fc-halo: rgba(255, 255, 255, 0.35);
  --ui-fc-edge: rgba(255, 255, 255, 0.25);
}
`;function re(){return(0,e.jsx)("div",{className:"frost-cloud-demo",children:(0,v.jsx)(me,{})})}(0,oe.createRoot)(document.getElementById("root")).render(ae.default.createElement(re));
