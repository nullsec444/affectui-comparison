import{a as H}from"./chunk-BBLBVXTT.js";import{a as J}from"./chunk-VXCLO5JM.js";import"./chunk-LKG2PFLG.js";import"./chunk-KHKHHDEU.js";import"./chunk-MOQMIKSW.js";var c=H(),e=J(),se=[{cx:115,cy:93,r:43},{cx:163,cy:111,r:39},{cx:156,cy:155,r:31},{cx:107,cy:155,r:35},{cx:72,cy:126,r:34}],K={x:80,y:100,width:80,height:65},a={y:106,w:18,h:31,left:96.5,right:127.5},m=120,Q=120,le=180,V=[{x:0,y:0},{x:-1,y:.05},{x:1,y:-.05},{x:0,y:0},{x:.65,y:-.55},{x:-.7,y:.35}],g=(u,h,x)=>`translate(${u} ${h}) ${x} translate(${-u} ${-h})`,v=({offset:u,color:h,opacity:x})=>(0,e.jsx)("stop",{offset:u,style:{stopColor:`var(--ui-fc-${h})`,stopOpacity:x}});function oe({background:u=!0,color:h="orange",followPointer:x=!0,className:ee,label:te="A frosted white cloud with eyes that floats, looks around and blinks"}){let re=(0,c.useId)().replace(/[^a-zA-Z0-9_-]/g,""),t=s=>`fc${re}-${s}`,F=(0,c.useRef)(null),A=(0,c.useRef)(null),U=(0,c.useRef)(null),O=(0,c.useRef)(null),N=(0,c.useRef)(null),R=(0,c.useRef)(null),B=(0,c.useRef)(null),j=(0,c.useRef)(null);(0,c.useEffect)(()=>{let s=F.current;if(!s)return;let d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r={x:0,y:0,vx:0,vy:0},o={x:0,y:0},n={p:0,v:0},w=!1,$=1.2,S=1.8,p=-1,G=!1,L=-1,y=0,k=0,f=0,_=(l,i=.16)=>l<0||l>i?1:1-.9*Math.sin(l/i*Math.PI),P=()=>{let l=d?0:Math.sin(f*1.1)*5,i=d?0:Math.sin(f*1.1+Math.PI/2)*.012,b=1+i-n.p*.12,ie=1-i+n.p*.1;A.current?.setAttribute("transform",`translate(0 ${l.toFixed(2)}) ${g(m,le,`scale(${ie.toFixed(4)} ${b.toFixed(4)})`)}`),U.current?.setAttribute("transform",`translate(${(r.x*4).toFixed(2)} ${(r.y*2).toFixed(2)}) ${g(m,Q,`rotate(${(r.x*2.5).toFixed(2)}) scale(${(1-Math.abs(r.x)*.025).toFixed(4)} 1)`)}`),O.current?.setAttribute("transform",`translate(${(r.x*12).toFixed(2)} ${(r.y*7).toFixed(2)})`),B.current?.setAttribute("transform",`translate(${(-r.x*7).toFixed(2)} ${(-r.y*3).toFixed(2)})`);let X=p<0?1:Math.min(_(f-p),G?_(f-p-.26):1),ae=_(f-L,.34),Y=a.y+a.h/2;N.current?.setAttribute("transform",g(a.left+a.w/2,Y,`scale(1 ${X.toFixed(3)})`)),R.current?.setAttribute("transform",g(a.right+a.w/2,Y,`scale(1 ${Math.min(X,ae).toFixed(3)})`));let Z=(l+5)/10;j.current?.setAttribute("transform",g(m,210,`scale(${(1-Z*.12).toFixed(3)} 1)`)),j.current?.setAttribute("opacity",(.34-Z*.1).toFixed(3))},I=l=>{let i=Math.min(.05,(l-(k||l))/1e3);if(k=l,f+=i,!w&&f>$){let b=V[Math.floor(Math.random()*V.length)];o.x=b.x,o.y=b.y,$=f+1.4+Math.random()*2.2}f>S&&(p=f,G=Math.random()<.25,S=f+2.4+Math.random()*3),r.vx+=((o.x-r.x)*70-r.vx*13)*i,r.vy+=((o.y-r.y)*70-r.vy*13)*i,r.x+=r.vx*i,r.y+=r.vy*i,n.v+=(-n.p*220-n.v*9)*i,n.p+=n.v*i,P(),y=requestAnimationFrame(I)},C=()=>{y||d||(k=0,y=requestAnimationFrame(I))},M=()=>{cancelAnimationFrame(y),y=0},T=new IntersectionObserver(([l])=>l.isIntersecting?C():M());T.observe(s);let q=l=>{if(!x)return;let i=s.getBoundingClientRect();w=!0,o.x=Math.max(-1,Math.min(1,((l.clientX-i.left)/i.width-.5)*2.4)),o.y=Math.max(-1,Math.min(1,((l.clientY-i.top)/i.height-.5)*2.4))},z=()=>{w=!1,o.x=0,o.y=0,$=f+1.2},W=()=>{n.p=.9,n.v=0,L=f+.12,d&&(C(),window.setTimeout(M,1200))};return s.addEventListener("pointermove",q),s.addEventListener("pointerleave",z),s.addEventListener("pointerdown",W),P(),()=>{M(),T.disconnect(),s.removeEventListener("pointermove",q),s.removeEventListener("pointerleave",z),s.removeEventListener("pointerdown",W)}},[x]);let D=se.map((s,d)=>(0,e.jsx)("circle",{...s},d)),E=(s,d,r)=>{let o={x:s,y:a.y,width:a.w,height:a.h,rx:a.w/2};return(0,e.jsxs)("g",{ref:d,children:[(0,e.jsx)("rect",{...o,x:s-1.5,y:a.y-1,width:a.w+3,height:a.h+3,rx:a.w/2+1.5,className:"ui-fc__eye-drop",filter:`url(#${t("edge")})`}),(0,e.jsx)("rect",{...o,fill:`url(#${t("hole")})`}),(0,e.jsx)("clipPath",{id:t(`clip-${r}`),children:(0,e.jsx)("rect",{...o})}),(0,e.jsx)("rect",{...o,y:a.y+2.5,className:"ui-fc__eye-shade",fill:"none",strokeWidth:"5",filter:`url(#${t("edge")})`,clipPath:`url(#${t(`clip-${r}`)})`})]})};return(0,e.jsxs)("div",{ref:F,className:["ui-fc",ee].filter(Boolean).join(" "),"data-bg":u||void 0,"data-color":h,role:"img","aria-label":te,children:[(0,e.jsx)("style",{href:"ui-frost-cloud",precedence:"default",children:fe}),(0,e.jsxs)("svg",{viewBox:"0 0 240 240","aria-hidden":"true",children:[(0,e.jsxs)("defs",{children:[(0,e.jsxs)("filter",{id:t("goo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:[(0,e.jsx)("feGaussianBlur",{stdDeviation:"3.5"}),(0,e.jsx)("feColorMatrix",{values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12"})]}),(0,e.jsx)("filter",{id:t("soft"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"12"})}),(0,e.jsx)("filter",{id:t("halo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"9"})}),(0,e.jsx)("filter",{id:t("edge"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"1.6"})}),(0,e.jsx)("filter",{id:t("shade"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:(0,e.jsx)("feGaussianBlur",{stdDeviation:"5"})}),(0,e.jsxs)("g",{id:t("shape"),filter:`url(#${t("goo")})`,children:[D,(0,e.jsx)("rect",{...K})]}),(0,e.jsx)("mask",{id:t("mask"),maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"240",height:"240",children:(0,e.jsx)("use",{href:`#${t("shape")}`,fill:"#fff"})}),(0,e.jsxs)("linearGradient",{id:t("frost"),x1:"0",y1:"50",x2:"0",y2:"192",gradientUnits:"userSpaceOnUse",children:[(0,e.jsx)(v,{offset:0,color:"white"}),(0,e.jsx)(v,{offset:1,color:"frost",opacity:.97})]}),(0,e.jsxs)("linearGradient",{id:t("hole"),x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,e.jsx)(v,{offset:0,color:"hole-1"}),(0,e.jsx)(v,{offset:1,color:"hole-2"})]})]}),(0,e.jsx)("ellipse",{ref:j,className:"ui-fc__shadow",cx:m,cy:"210",rx:"54",ry:"7",filter:`url(#${t("shade")})`}),(0,e.jsx)("g",{ref:A,children:(0,e.jsxs)("g",{ref:U,children:[(0,e.jsx)("use",{href:`#${t("shape")}`,className:"ui-fc__halo",filter:`url(#${t("halo")})`}),(0,e.jsx)("use",{href:`#${t("shape")}`,className:"ui-fc__edge",filter:`url(#${t("edge")})`}),(0,e.jsxs)("g",{mask:`url(#${t("mask")})`,children:[(0,e.jsx)("rect",{width:"240",height:"240",fill:`url(#${t("frost")})`}),(0,e.jsxs)("g",{filter:`url(#${t("soft")})`,className:"ui-fc__tint",transform:`translate(-6 18) ${g(m,Q,"scale(0.84 0.78)")}`,children:[D,(0,e.jsx)("rect",{...K})]}),(0,e.jsx)("ellipse",{ref:B,cx:"108",cy:"78",rx:"34",ry:"14",fill:"#fff",opacity:"0.75",filter:`url(#${t("shade")})`})]}),(0,e.jsxs)("g",{ref:O,children:[E(a.left,N,"l"),E(a.right,R,"r")]})]})})]})]})}var fe=`
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
`;function de(){return(0,e.jsx)("div",{className:"frost-cloud-demo",children:(0,e.jsx)(oe,{})})}export{de as default};
