import{a as ue}from"../shared/chunk-PWBCLQI6.js";import{a as $}from"../shared/chunk-LKG2PFLG.js";import{a as O}from"../shared/chunk-KHKHHDEU.js";import{b as g}from"../shared/chunk-MOQMIKSW.js";var ae=g($()),oe=g(ue());var ge=g($()),fe=g(O()),e=g(O()),ie=g($()),f=fe,n=ge,he=[{cx:115,cy:93,r:43},{cx:163,cy:111,r:39},{cx:156,cy:155,r:31},{cx:107,cy:155,r:35},{cx:72,cy:126,r:34}],V={x:80,y:100,width:80,height:65},l={y:106,w:18,h:31,left:96.5,right:127.5},v=120,ee=120,ye=180,te=[{x:0,y:0},{x:-1,y:.05},{x:1,y:-.05},{x:0,y:0},{x:.65,y:-.55},{x:-.7,y:.35}],b=(y,m,x)=>`translate(${y} ${m}) ${x} translate(${-y} ${-m})`,h=({offset:y,color:m,opacity:x})=>(0,e.jsx)("stop",{offset:y,style:{stopColor:`var(--ui-gc-${m})`,stopOpacity:x}});function me({background:y=!0,color:m="blue",followPointer:x=!0,className:se,label:le="A glowing cloud with eyes that floats, looks around and blinks"}){let ce=(0,n.useId)().replace(/[^a-zA-Z0-9_-]/g,""),t=a=>`gc${ce}-${a}`,G=(0,n.useRef)(null),j=(0,n.useRef)(null),E=(0,n.useRef)(null),S=(0,n.useRef)(null),B=(0,n.useRef)(null),D=(0,n.useRef)(null),N=(0,n.useRef)(null),M=(0,n.useRef)(null);(0,n.useEffect)(()=>{let a=G.current;if(!a)return;let u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r={x:0,y:0,vx:0,vy:0},c={x:0,y:0},d={p:0,v:0},_=!1,F=1.2,L=1.8,w=-1,C=!1,T=-1,p=0,U=0,s=0,A=(o,i=.16)=>o<0||o>i?1:1-.9*Math.sin(o/i*Math.PI),q=()=>{let o=u?0:Math.sin(s*1.1)*5,i=u?0:Math.sin(s*1.1+Math.PI/2)*.012,k=1+i-d.p*.12,ne=1-i+d.p*.1;j.current?.setAttribute("transform",`translate(0 ${o.toFixed(2)}) ${b(v,ye,`scale(${ne.toFixed(4)} ${k.toFixed(4)})`)}`),E.current?.setAttribute("transform",`translate(${(r.x*4).toFixed(2)} ${(r.y*2).toFixed(2)}) ${b(v,ee,`rotate(${(r.x*2.5).toFixed(2)}) scale(${(1-Math.abs(r.x)*.025).toFixed(4)} 1)`)}`),S.current?.setAttribute("transform",`translate(${(r.x*12).toFixed(2)} ${(r.y*7).toFixed(2)})`),N.current?.setAttribute("transform",`translate(${(-r.x*7).toFixed(2)} ${(-r.y*3).toFixed(2)})`);let J=w<0?1:Math.min(A(s-w),C?A(s-w-.26):1),de=A(s-T,.34),K=l.y+l.h/2;B.current?.setAttribute("transform",b(l.left+l.w/2,K,`scale(1 ${J.toFixed(3)})`)),D.current?.setAttribute("transform",b(l.right+l.w/2,K,`scale(1 ${Math.min(J,de).toFixed(3)})`));let Q=(o+5)/10;M.current?.setAttribute("transform",b(v,210,`scale(${(1-Q*.12).toFixed(3)} 1)`)),M.current?.setAttribute("opacity",(.34-Q*.1).toFixed(3))},z=o=>{let i=Math.min(.05,(o-(U||o))/1e3);if(U=o,s+=i,!_&&s>F){let k=te[Math.floor(Math.random()*te.length)];c.x=k.x,c.y=k.y,F=s+1.4+Math.random()*2.2}s>L&&(w=s,C=Math.random()<.25,L=s+2.4+Math.random()*3),r.vx+=((c.x-r.x)*70-r.vx*13)*i,r.vy+=((c.y-r.y)*70-r.vy*13)*i,r.x+=r.vx*i,r.y+=r.vy*i,d.v+=(-d.p*220-d.v*9)*i,d.p+=d.v*i,q(),p=requestAnimationFrame(z)},W=()=>{p||u||(U=0,p=requestAnimationFrame(z))},R=()=>{cancelAnimationFrame(p),p=0},X=new IntersectionObserver(([o])=>o.isIntersecting?W():R());X.observe(a);let Y=o=>{if(!x)return;let i=a.getBoundingClientRect();_=!0,c.x=Math.max(-1,Math.min(1,((o.clientX-i.left)/i.width-.5)*2.4)),c.y=Math.max(-1,Math.min(1,((o.clientY-i.top)/i.height-.5)*2.4))},Z=()=>{_=!1,c.x=0,c.y=0,F=s+1.2},H=()=>{d.p=.9,d.v=0,T=s+.12,u&&(W(),window.setTimeout(R,1200))};return a.addEventListener("pointermove",Y),a.addEventListener("pointerleave",Z),a.addEventListener("pointerdown",H),q(),()=>{R(),X.disconnect(),a.removeEventListener("pointermove",Y),a.removeEventListener("pointerleave",Z),a.removeEventListener("pointerdown",H)}},[x]);let P=he.map((a,u)=>(0,ie.createElement)("circle",{...a,key:u})),I=(a,u,r)=>{let c={x:a,y:l.y,width:l.w,height:l.h,rx:l.w/2};return(0,e.jsxs)("g",{ref:u,children:[(0,e.jsx)("rect",{...c,fill:`url(#${t("eye")})`}),(0,e.jsx)("clipPath",{id:t(`clip-${r}`),children:(0,e.jsx)("rect",{...c})}),(0,e.jsx)("rect",{...c,y:l.y+2.5,className:"ui-gc__eye-shade",fill:"none",strokeWidth:"5",filter:`url(#${t("edge")})`,clipPath:`url(#${t(`clip-${r}`)})`})]})};return(0,e.jsxs)("div",{ref:G,className:["ui-gc",se].filter(Boolean).join(" "),"data-bg":y||void 0,"data-color":m,role:"img","aria-label":le,children:[(0,e.jsx)("style",{href:"ui-glow-cloud",precedence:"default",children:xe}),(0,e.jsxs)("svg",{viewBox:"0 0 240 240","aria-hidden":"true",children:[(0,e.jsxs)("defs",{children:[(0,e.jsxs)("filter",{id:t("goo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:[(0,e.jsx)("feGaussianBlur",{stdDeviation:"3.5"}),(0,e.jsx)("feColorMatrix",{values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12"})]}),(0,e.jsx)("filter",{id:t("soft"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"7"})}),(0,e.jsx)("filter",{id:t("halo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"9"})}),(0,e.jsx)("filter",{id:t("edge"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"1.6"})}),(0,e.jsx)("filter",{id:t("shade"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"5"})}),(0,e.jsxs)("g",{id:t("shape"),filter:`url(#${t("goo")})`,children:[P,(0,e.jsx)("rect",{...V})]}),(0,e.jsx)("mask",{id:t("mask"),maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"240",height:"240",children:(0,e.jsx)("use",{href:`#${t("shape")}`,fill:"#fff"})}),(0,e.jsxs)("linearGradient",{id:t("rim"),x1:"0",y1:"56",x2:"0",y2:"182",gradientUnits:"userSpaceOnUse",children:[(0,f.jsx)(h,{offset:0,color:"rim"}),(0,f.jsx)(h,{offset:1,color:"white"})]}),(0,e.jsxs)("radialGradient",{id:t("body"),cx:"120",cy:"108",r:"78",gradientUnits:"userSpaceOnUse",children:[(0,f.jsx)(h,{offset:0,color:"body-1"}),(0,f.jsx)(h,{offset:.6,color:"body-2"}),(0,f.jsx)(h,{offset:1,color:"body-3"})]}),(0,e.jsxs)("linearGradient",{id:t("eye"),x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,f.jsx)(h,{offset:0,color:"white"}),(0,f.jsx)(h,{offset:1,color:"eye"})]})]}),(0,e.jsx)("ellipse",{ref:M,className:"ui-gc__shadow",cx:v,cy:"210",rx:"54",ry:"7",filter:`url(#${t("shade")})`}),(0,e.jsx)("g",{ref:j,children:(0,e.jsxs)("g",{ref:E,children:[(0,e.jsx)("use",{href:`#${t("shape")}`,className:"ui-gc__halo",filter:`url(#${t("halo")})`}),(0,e.jsx)("use",{href:`#${t("shape")}`,className:"ui-gc__edge",filter:`url(#${t("edge")})`}),(0,e.jsxs)("g",{mask:`url(#${t("mask")})`,children:[(0,e.jsx)("rect",{width:"240",height:"240",fill:`url(#${t("rim")})`}),(0,e.jsxs)("g",{filter:`url(#${t("soft")})`,fill:`url(#${t("body")})`,transform:`translate(0 2) ${b(v,ee,"scale(0.9 0.87)")}`,children:[P,(0,e.jsx)("rect",{...V})]}),(0,e.jsx)("ellipse",{ref:N,cx:"104",cy:"80",rx:"30",ry:"12",fill:"#fff",opacity:"0.32",filter:`url(#${t("shade")})`})]}),(0,e.jsxs)("g",{ref:S,children:[I(l.left,B,"l"),I(l.right,D,"r")]})]})})]})]})}var xe=`
/* Palette as variables \u2013 blue, or red-orange via data-color="orange" */
.ui-gc {
  --ui-gc-sky-top: #2475ea;
  --ui-gc-sky-bottom: #4ac8f5;
  --ui-gc-sky-light: rgba(110, 225, 255, 0.55);
  --ui-gc-white: #ffffff;
  --ui-gc-rim: #f4fcff;
  --ui-gc-body-1: #06a3ff;
  --ui-gc-body-2: #18b2ff;
  --ui-gc-body-3: #58cdff;
  --ui-gc-eye: #cdeeff;
  --ui-gc-eye-shade: rgba(30, 140, 230, 0.3);
  --ui-gc-halo: rgba(30, 150, 255, 0.2);
  --ui-gc-edge: rgba(20, 120, 240, 0.4);
  --ui-gc-shadow: rgba(10, 90, 200, 0.55);
  --ui-gc-ground: rgba(10, 80, 190, 0.4);
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
.ui-gc[data-color="orange"] {
  --ui-gc-sky-top: #e94135;
  --ui-gc-sky-bottom: #fa9842;
  --ui-gc-sky-light: rgba(255, 205, 150, 0.5);
  --ui-gc-rim: #fff9f5;
  --ui-gc-body-1: #f45434;
  --ui-gc-body-2: #fa7342;
  --ui-gc-body-3: #ffb175;
  --ui-gc-eye: #ffe8db;
  --ui-gc-eye-shade: rgba(230, 90, 50, 0.3);
  --ui-gc-halo: rgba(240, 100, 60, 0.2);
  --ui-gc-edge: rgba(220, 80, 40, 0.4);
  --ui-gc-shadow: rgba(170, 50, 20, 0.5);
  --ui-gc-ground: rgba(150, 30, 10, 0.36);
}
.ui-gc svg { display: block; width: 100%; max-width: 320px; overflow: visible; }
.ui-gc__halo { fill: var(--ui-gc-halo); }
.ui-gc__edge { fill: var(--ui-gc-edge); }
.ui-gc__shadow { fill: var(--ui-gc-shadow); }
.ui-gc__eye-shade { stroke: var(--ui-gc-eye-shade); }

/* The sky: darker at the top, lighter at the bottom, a brighter patch behind the cloud \u2013 fills the whole box */
.ui-gc[data-bg] {
  --ui-gc-halo: rgba(255, 255, 255, 0.55);
  --ui-gc-edge: rgba(255, 255, 255, 0.3);
  --ui-gc-shadow: var(--ui-gc-ground);
  background:
    radial-gradient(60% 55% at 62% 42%, var(--ui-gc-sky-light), transparent 70%),
    linear-gradient(180deg, var(--ui-gc-sky-top), var(--ui-gc-sky-bottom));
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> \u2013 a deeper sky */
:where(.dark, [data-theme="dark"]) .ui-gc {
  --ui-gc-sky-top: #1659c8;
  --ui-gc-sky-bottom: #2aa6e6;
  --ui-gc-sky-light: rgba(90, 205, 255, 0.45);
  --ui-gc-ground: rgba(5, 50, 140, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-gc[data-color="orange"] {
  --ui-gc-sky-top: #bf2722;
  --ui-gc-sky-bottom: #ed701d;
  --ui-gc-sky-light: rgba(255, 175, 120, 0.42);
  --ui-gc-ground: rgba(110, 15, 5, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-gc:not([data-bg]) {
  --ui-gc-halo: rgba(255, 255, 255, 0.35);
  --ui-gc-edge: rgba(255, 255, 255, 0.25);
}
`;function re(){return(0,e.jsx)("div",{className:"glow-cloud-demo",children:(0,f.jsx)(me,{})})}(0,oe.createRoot)(document.getElementById("root")).render(ae.default.createElement(re));
