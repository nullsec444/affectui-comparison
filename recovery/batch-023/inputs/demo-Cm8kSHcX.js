import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t(),i=[{cx:115,cy:93,r:43},{cx:163,cy:111,r:39},{cx:156,cy:155,r:31},{cx:107,cy:155,r:35},{cx:72,cy:126,r:34}],a={x:80,y:100,width:80,height:65},o={y:106,w:18,h:31,left:96.5,right:127.5},s=120,c=120,l=180,u=[{x:0,y:0},{x:-1,y:.05},{x:1,y:-.05},{x:0,y:0},{x:.65,y:-.55},{x:-.7,y:.35}],d=(e,t,n)=>`translate(${e} ${t}) ${n} translate(${-e} ${-t})`,f=({offset:e,color:t,opacity:n})=>(0,r.jsx)(`stop`,{offset:e,style:{stopColor:`var(--ui-gc-${t})`,stopOpacity:n}});function p({background:e=!0,color:t=`blue`,followPointer:p=!0,className:h,label:g=`A glowing cloud with eyes that floats, looks around and blinks`}){let _=(0,n.useId)().replace(/[^a-zA-Z0-9_-]/g,``),v=e=>`gc${_}-${e}`,y=(0,n.useRef)(null),b=(0,n.useRef)(null),x=(0,n.useRef)(null),S=(0,n.useRef)(null),C=(0,n.useRef)(null),w=(0,n.useRef)(null),T=(0,n.useRef)(null),E=(0,n.useRef)(null);(0,n.useEffect)(()=>{let e=y.current;if(!e)return;let t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,n={x:0,y:0,vx:0,vy:0},r={x:0,y:0},i={p:0,v:0},a=!1,f=1.2,m=1.8,h=-1,g=!1,_=-1,v=0,D=0,O=0,k=(e,t=.16)=>e<0||e>t?1:1-.9*Math.sin(e/t*Math.PI),A=()=>{let e=t?0:Math.sin(O*1.1)*5,r=t?0:Math.sin(O*1.1+Math.PI/2)*.012,a=1+r-i.p*.12,u=1-r+i.p*.1;b.current?.setAttribute(`transform`,`translate(0 ${e.toFixed(2)}) ${d(s,l,`scale(${u.toFixed(4)} ${a.toFixed(4)})`)}`),x.current?.setAttribute(`transform`,`translate(${(n.x*4).toFixed(2)} ${(n.y*2).toFixed(2)}) ${d(s,c,`rotate(${(n.x*2.5).toFixed(2)}) scale(${(1-Math.abs(n.x)*.025).toFixed(4)} 1)`)}`),S.current?.setAttribute(`transform`,`translate(${(n.x*12).toFixed(2)} ${(n.y*7).toFixed(2)})`),T.current?.setAttribute(`transform`,`translate(${(-n.x*7).toFixed(2)} ${(-n.y*3).toFixed(2)})`);let f=h<0?1:Math.min(k(O-h),g?k(O-h-.26):1),p=k(O-_,.34),m=o.y+o.h/2;C.current?.setAttribute(`transform`,d(o.left+o.w/2,m,`scale(1 ${f.toFixed(3)})`)),w.current?.setAttribute(`transform`,d(o.right+o.w/2,m,`scale(1 ${Math.min(f,p).toFixed(3)})`));let v=(e+5)/10;E.current?.setAttribute(`transform`,d(s,210,`scale(${(1-v*.12).toFixed(3)} 1)`)),E.current?.setAttribute(`opacity`,(.34-v*.1).toFixed(3))},j=e=>{let t=Math.min(.05,(e-(D||e))/1e3);if(D=e,O+=t,!a&&O>f){let e=u[Math.floor(Math.random()*u.length)];r.x=e.x,r.y=e.y,f=O+1.4+Math.random()*2.2}O>m&&(h=O,g=Math.random()<.25,m=O+2.4+Math.random()*3),n.vx+=((r.x-n.x)*70-n.vx*13)*t,n.vy+=((r.y-n.y)*70-n.vy*13)*t,n.x+=n.vx*t,n.y+=n.vy*t,i.v+=(-i.p*220-i.v*9)*t,i.p+=i.v*t,A(),v=requestAnimationFrame(j)},M=()=>{v||t||(D=0,v=requestAnimationFrame(j))},N=()=>{cancelAnimationFrame(v),v=0},P=new IntersectionObserver(([e])=>e.isIntersecting?M():N());P.observe(e);let F=t=>{if(!p)return;let n=e.getBoundingClientRect();a=!0,r.x=Math.max(-1,Math.min(1,((t.clientX-n.left)/n.width-.5)*2.4)),r.y=Math.max(-1,Math.min(1,((t.clientY-n.top)/n.height-.5)*2.4))},I=()=>{a=!1,r.x=0,r.y=0,f=O+1.2},L=()=>{i.p=.9,i.v=0,_=O+.12,t&&(M(),window.setTimeout(N,1200))};return e.addEventListener(`pointermove`,F),e.addEventListener(`pointerleave`,I),e.addEventListener(`pointerdown`,L),A(),()=>{N(),P.disconnect(),e.removeEventListener(`pointermove`,F),e.removeEventListener(`pointerleave`,I),e.removeEventListener(`pointerdown`,L)}},[p]);let D=i.map((e,t)=>(0,r.jsx)(`circle`,{...e},t)),O=(e,t,n)=>{let i={x:e,y:o.y,width:o.w,height:o.h,rx:o.w/2};return(0,r.jsxs)(`g`,{ref:t,children:[(0,r.jsx)(`rect`,{...i,fill:`url(#${v(`eye`)})`}),(0,r.jsx)(`clipPath`,{id:v(`clip-${n}`),children:(0,r.jsx)(`rect`,{...i})}),(0,r.jsx)(`rect`,{...i,y:o.y+2.5,className:`ui-gc__eye-shade`,fill:`none`,strokeWidth:`5`,filter:`url(#${v(`edge`)})`,clipPath:`url(#${v(`clip-${n}`)})`})]})};return(0,r.jsxs)(`div`,{ref:y,className:[`ui-gc`,h].filter(Boolean).join(` `),"data-bg":e||void 0,"data-color":t,role:`img`,"aria-label":g,children:[(0,r.jsx)(`style`,{href:`ui-glow-cloud`,precedence:`default`,children:m}),(0,r.jsxs)(`svg`,{viewBox:`0 0 240 240`,"aria-hidden":`true`,children:[(0,r.jsxs)(`defs`,{children:[(0,r.jsxs)(`filter`,{id:v(`goo`),x:`0`,y:`0`,width:`240`,height:`240`,filterUnits:`userSpaceOnUse`,children:[(0,r.jsx)(`feGaussianBlur`,{stdDeviation:`3.5`}),(0,r.jsx)(`feColorMatrix`,{values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12`})]}),(0,r.jsx)(`filter`,{id:v(`soft`),x:`0`,y:`0`,width:`240`,height:`240`,filterUnits:`userSpaceOnUse`,children:(0,r.jsx)(`feGaussianBlur`,{stdDeviation:`7`})}),(0,r.jsx)(`filter`,{id:v(`halo`),x:`0`,y:`0`,width:`240`,height:`240`,filterUnits:`userSpaceOnUse`,children:(0,r.jsx)(`feGaussianBlur`,{stdDeviation:`9`})}),(0,r.jsx)(`filter`,{id:v(`edge`),x:`0`,y:`0`,width:`240`,height:`240`,filterUnits:`userSpaceOnUse`,children:(0,r.jsx)(`feGaussianBlur`,{stdDeviation:`1.6`})}),(0,r.jsx)(`filter`,{id:v(`shade`),x:`0`,y:`0`,width:`240`,height:`240`,filterUnits:`userSpaceOnUse`,children:(0,r.jsx)(`feGaussianBlur`,{stdDeviation:`5`})}),(0,r.jsxs)(`g`,{id:v(`shape`),filter:`url(#${v(`goo`)})`,children:[D,(0,r.jsx)(`rect`,{...a})]}),(0,r.jsx)(`mask`,{id:v(`mask`),maskUnits:`userSpaceOnUse`,x:`0`,y:`0`,width:`240`,height:`240`,children:(0,r.jsx)(`use`,{href:`#${v(`shape`)}`,fill:`#fff`})}),(0,r.jsxs)(`linearGradient`,{id:v(`rim`),x1:`0`,y1:`56`,x2:`0`,y2:`182`,gradientUnits:`userSpaceOnUse`,children:[(0,r.jsx)(f,{offset:0,color:`rim`}),(0,r.jsx)(f,{offset:1,color:`white`})]}),(0,r.jsxs)(`radialGradient`,{id:v(`body`),cx:`120`,cy:`108`,r:`78`,gradientUnits:`userSpaceOnUse`,children:[(0,r.jsx)(f,{offset:0,color:`body-1`}),(0,r.jsx)(f,{offset:.6,color:`body-2`}),(0,r.jsx)(f,{offset:1,color:`body-3`})]}),(0,r.jsxs)(`linearGradient`,{id:v(`eye`),x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,r.jsx)(f,{offset:0,color:`white`}),(0,r.jsx)(f,{offset:1,color:`eye`})]})]}),(0,r.jsx)(`ellipse`,{ref:E,className:`ui-gc__shadow`,cx:s,cy:`210`,rx:`54`,ry:`7`,filter:`url(#${v(`shade`)})`}),(0,r.jsx)(`g`,{ref:b,children:(0,r.jsxs)(`g`,{ref:x,children:[(0,r.jsx)(`use`,{href:`#${v(`shape`)}`,className:`ui-gc__halo`,filter:`url(#${v(`halo`)})`}),(0,r.jsx)(`use`,{href:`#${v(`shape`)}`,className:`ui-gc__edge`,filter:`url(#${v(`edge`)})`}),(0,r.jsxs)(`g`,{mask:`url(#${v(`mask`)})`,children:[(0,r.jsx)(`rect`,{width:`240`,height:`240`,fill:`url(#${v(`rim`)})`}),(0,r.jsxs)(`g`,{filter:`url(#${v(`soft`)})`,fill:`url(#${v(`body`)})`,transform:`translate(0 2) ${d(s,c,`scale(0.9 0.87)`)}`,children:[D,(0,r.jsx)(`rect`,{...a})]}),(0,r.jsx)(`ellipse`,{ref:T,cx:`104`,cy:`80`,rx:`30`,ry:`12`,fill:`#fff`,opacity:`0.32`,filter:`url(#${v(`shade`)})`})]}),(0,r.jsxs)(`g`,{ref:S,children:[O(o.left,C,`l`),O(o.right,w,`r`)]})]})})]})]})}var m=`
/* Palette as variables – blue, or red-orange via data-color="orange" */
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

/* The sky: darker at the top, lighter at the bottom, a brighter patch behind the cloud – fills the whole box */
.ui-gc[data-bg] {
  --ui-gc-halo: rgba(255, 255, 255, 0.55);
  --ui-gc-edge: rgba(255, 255, 255, 0.3);
  --ui-gc-shadow: var(--ui-gc-ground);
  background:
    radial-gradient(60% 55% at 62% 42%, var(--ui-gc-sky-light), transparent 70%),
    linear-gradient(180deg, var(--ui-gc-sky-top), var(--ui-gc-sky-bottom));
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> – a deeper sky */
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
`;function h(){return(0,r.jsx)(`div`,{className:`glow-cloud-demo`,children:(0,r.jsx)(p,{})})}export{h as default};