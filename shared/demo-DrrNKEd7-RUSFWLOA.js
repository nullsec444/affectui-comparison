import{a as O}from"./chunk-BBLBVXTT.js";import{a as B}from"./chunk-VXCLO5JM.js";import"./chunk-LKG2PFLG.js";import"./chunk-KHKHHDEU.js";import"./chunk-MOQMIKSW.js";var c=O(),r=B(),X=[1,-.84,1.12],Z=[0,.42,.18],ee=(p,h)=>h>0?(p%h+h)%h:0,E=(p,h,_)=>Math.min(_,Math.max(h,p)),te=p=>p.split(/\s+/).filter(Boolean).slice(0,2).map(h=>h[0].toUpperCase()).join(""),ae=(p,h)=>Math.min(h,p>=740?3:p>=480?2:1);function ie({items:p,columns:h=3,speed:_=28,pauseOnHover:R=!0,label:D="What customers say",className:F}){let k=(0,c.useRef)(null),b=(0,c.useRef)([]),L=(0,c.useRef)([]),j=(0,c.useRef)([]),w=(0,c.useRef)([]),M=(0,c.useRef)([]),T=(0,c.useRef)([]),y=(0,c.useRef)([]),[f,C]=(0,c.useState)(h),[W,Y]=(0,c.useState)([]),[v,$]=(0,c.useState)(!1),N=Array.from({length:f},(a,e)=>p.filter((t,i)=>i%f===e)),I=(0,c.useRef)({speed:_,pauseOnHover:R,count:f});I.current={speed:_,pauseOnHover:R,count:f},(0,c.useEffect)(()=>{let a=window.matchMedia("(prefers-reduced-motion: reduce)"),e=()=>$(a.matches);return e(),a.addEventListener("change",e),()=>a.removeEventListener("change",e)},[]),(0,c.useLayoutEffect)(()=>{let a=k.current;if(!a)return;let e=()=>C(ae(a.clientWidth,h));e();let t=new ResizeObserver(e);return t.observe(a),()=>t.disconnect()},[h]),(0,c.useEffect)(()=>{if(v)return;let a=()=>{let t=N.map((i,n)=>{let s=j.current[n],o=b.current[n];if(!s||!o)return 2;let u=o.getBoundingClientRect().height/(o.offsetHeight||1)||1,d=s.getBoundingClientRect().height/u,m=w.current[n]??={y:d*(Z[n]??0),v:0,h:d,drag:null,seek:0};return m.h>0&&d>0&&m.h!==d&&(m.y=m.y/m.h*d),m.h=d,d>0?Math.min(12,Math.ceil(o.clientHeight/d)+1):2});w.current.length=N.length,Y(i=>i.length===t.length&&i.every((n,s)=>n===t[s])?i:t)};a();let e=new ResizeObserver(a);for(let t of[...j.current.slice(0,f),...b.current.slice(0,f)])t&&e.observe(t);return()=>e.disconnect()},[v,f,p]),(0,c.useEffect)(()=>{let a=k.current;if(v||!a)return;let e=0,t=0,i=!1,n=o=>{let u=t?Math.min(.05,(o-t)/1e3):0;t=o;let{speed:d,pauseOnHover:m,count:x}=I.current;for(let g=0;g<x;g++){let l=w.current[g],S=L.current[g];if(!l||!S||l.h<=0)continue;let V=x===1?1:X[g%3],A=T.current[g]||y.current[g]||m&&M.current[g];if(!l.drag){let z=A?0:d*V,G=Math.abs(l.v-z)>Math.max(120,d*2)?.55:A?.32:.7;if(l.v+=(z-l.v)*(1-Math.exp(-u/G)),l.y+=l.v*u,l.seek){let q=l.seek*(1-Math.exp(-u/.12));l.y+=q,l.seek=Math.abs(l.seek-q)<.5?0:l.seek-q}}l.y=y.current[g]?E(l.y,-l.h,l.h*2):ee(l.y,l.h),S.style.transform=`translate3d(0, ${-(l.h+l.y)}px, 0)`}e=i?requestAnimationFrame(n):0},s=new IntersectionObserver(([o])=>{i=o.isIntersecting,i&&!e&&(t=0,e=requestAnimationFrame(n))});return s.observe(a),()=>{s.disconnect(),cancelAnimationFrame(e)}},[v]);let U=a=>e=>{let t=w.current[a];if(t){if(e.pointerType==="touch"){T.current[a]=!0;return}e.button===0&&(t.drag={id:e.pointerId,lastY:e.clientY,lastT:e.timeStamp,moved:0,captured:!1},t.v=0)}},K=a=>e=>{let t=w.current[a],i=t?.drag;if(!t||!i||i.id!==e.pointerId)return;let n=e.currentTarget,s=n.getBoundingClientRect().height/(n.offsetHeight||1)||1,o=(e.clientY-i.lastY)/s,u=Math.max(1,e.timeStamp-i.lastT)/1e3;i.moved+=Math.abs(o),!i.captured&&i.moved>4&&(i.captured=!0,n.setPointerCapture(e.pointerId),n.setAttribute("data-dragging","")),t.y-=o,t.v=t.v*.6+-o/u*.4,i.lastY=e.clientY,i.lastT=e.timeStamp},H=a=>e=>{T.current[a]=!1;let t=w.current[a],i=t?.drag;if(t&&i&&i.id===e.pointerId&&(e.timeStamp-i.lastT>80&&(t.v=0),t.v=E(t.v,-2400,2400),t.drag=null,e.currentTarget.removeAttribute("data-dragging"),i.captured)){let n=e.currentTarget,s=o=>{o.preventDefault(),o.stopPropagation()};n.addEventListener("click",s,{capture:!0,once:!0}),setTimeout(()=>n.removeEventListener("click",s,{capture:!0}),0)}},J=a=>e=>{let t=w.current[a],i=b.current[a];if(v||!t||!i||t.h<=0||!e.currentTarget.matches(":focus-visible"))return;let n=e.currentTarget.parentElement.offsetTop,s=e.currentTarget.offsetHeight,o=i.clientHeight,u=Math.min(56,o*.12);t.y=[t.y-t.h,t.y,t.y+t.h].reduce((m,x)=>Math.abs(n-x-o/2)<Math.abs(n-m-o/2)?x:m);let d=n-t.y;t.seek=s>o-u*2||d<u?d-u:d+s>o-u?d+s-(o-u):0},P=(a,e,t,i)=>{let n=[a.role,a.company].filter(Boolean).join("\xA0\xB7 "),s=a.rating?E(Math.round(a.rating),1,5):0;return(0,r.jsx)("li",{className:"ui-tw__item",children:(0,r.jsxs)("figure",{className:"ui-tw__card",tabIndex:t?0:void 0,onFocus:t?J(e):void 0,children:[s?(0,r.jsx)("div",{className:"ui-tw__stars",role:"img","aria-label":`Rated ${s} out of 5`,children:Array.from({length:5},(o,u)=>(0,r.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true","data-on":u<s||void 0,children:(0,r.jsx)("path",{d:"M8 1.6l1.9 3.95 4.35.6-3.17 3.03.78 4.32L8 11.43 4.14 13.5l.78-4.32L1.75 6.15l4.35-.6L8 1.6z"})},u))}):null,(0,r.jsx)("blockquote",{className:"ui-tw__quote",children:(0,r.jsx)("p",{children:a.quote})}),(0,r.jsxs)("figcaption",{className:"ui-tw__who",children:[a.avatar?(0,r.jsx)("img",{className:"ui-tw__avatar",src:a.avatar,alt:"",width:36,height:36,loading:"lazy",decoding:"async",draggable:!1}):(0,r.jsx)("span",{className:"ui-tw__avatar ui-tw__avatar--initials","aria-hidden":"true",children:te(a.name)}),(0,r.jsxs)("span",{className:"ui-tw__id",children:[(0,r.jsxs)("span",{className:"ui-tw__name",children:[(0,r.jsx)("span",{className:"ui-tw__name-text",children:a.name}),a.verified?(0,r.jsxs)("svg",{className:"ui-tw__verified",viewBox:"0 0 16 16",role:"img","aria-label":"Verified customer",children:[(0,r.jsx)("circle",{cx:"8",cy:"8",r:"7"}),(0,r.jsx)("path",{d:"M5.2 8.1l1.9 1.9 3.7-3.8",fill:"none",stroke:"var(--ui-tw-card)",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]}):null]}),n?(0,r.jsx)("span",{className:"ui-tw__meta",children:n}):null]})]})]})},i)},Q=["ui-tw",F].filter(Boolean).join(" ");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{href:"ui-testimonial-wall",precedence:"default",children:re}),(0,r.jsx)("div",{ref:k,className:Q,role:"region","aria-label":D,"data-cols":f,"data-static":v||void 0,style:{"--ui-tw-cols":f},children:N.map((a,e)=>v?(0,r.jsx)("div",{className:"ui-tw__col",children:(0,r.jsx)("ul",{className:"ui-tw__set",children:a.map((t,i)=>P(t,e,!0,String(i)))})},e):(0,r.jsx)("div",{ref:t=>{b.current[e]=t},className:"ui-tw__col",onPointerEnter:t=>{t.pointerType!=="touch"&&(M.current[e]=!0)},onPointerLeave:()=>M.current[e]=!1,onPointerDown:U(e),onPointerMove:K(e),onPointerUp:H(e),onPointerCancel:H(e),onFocus:t=>y.current[e]=t.target.matches(":focus-visible"),onBlur:t=>{t.currentTarget.contains(t.relatedTarget)||(y.current[e]=!1)},children:(0,r.jsx)("div",{ref:t=>{L.current[e]=t},className:"ui-tw__track",style:{transform:`translate3d(0, ${-((w.current[e]?.h??0)+(w.current[e]?.y??0))}px, 0)`},children:Array.from({length:1+Math.max(2,W[e]??2)},(t,i)=>{let n=i===1;return(0,r.jsx)("ul",{ref:n?s=>{j.current[e]=s}:void 0,className:"ui-tw__set","aria-hidden":!n||void 0,inert:!n||void 0,children:a.map((s,o)=>P(s,e,n,`${i}-${o}`))},n?"real":i)})})},e))})]})}var re=`
.ui-tw {
  --ui-tw-card: #ffffff;
  --ui-tw-line: #ececec;
  --ui-tw-ink: #171717;
  --ui-tw-text: #404040;
  --ui-tw-muted: #8f8f8f;
  --ui-tw-faint: #b5b5b5;
  --ui-tw-star: #a3a3a8;
  --ui-tw-star-off: #e2e2e5;
  --ui-tw-initials: #f0f0f1;
  --ui-tw-shadow: 0 0 0 1px var(--ui-tw-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  --ui-tw-lift: 0 0 0 1px var(--ui-tw-line), 0 2px 4px rgba(0, 0, 0, 0.03), 0 12px 28px -10px rgba(0, 0, 0, 0.14);
  --ui-tw-focus: #2f6bff;
  --ui-tw-gap: 16px;
  --ui-tw-fade: 96px;
  --ui-tw-dim: 0.62;
  --ui-tw-ease: cubic-bezier(0.22, 1, 0.36, 1);
  container-type: inline-size;
  display: grid;
  grid-template-columns: repeat(var(--ui-tw-cols, 3), minmax(0, 1fr));
  /* One row exactly as tall as the wall, so a column's height never follows its (repeated) content */
  grid-template-rows: minmax(0, 1fr);
  gap: var(--ui-tw-gap);
  width: 100%;
  min-width: 0;
  height: var(--ui-tw-height, 600px);
  /* Room at the sides for the lifted card's shadow; the wall clips everything else */
  padding-inline: 12px;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, transparent, #000 var(--ui-tw-fade), #000 calc(100% - var(--ui-tw-fade)), transparent);
  mask-image: linear-gradient(180deg, transparent, #000 var(--ui-tw-fade), #000 calc(100% - var(--ui-tw-fade)), transparent);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.ui-tw__col {
  position: relative;
  min-width: 0;
  min-height: 0;
  height: 100%;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.ui-tw__col[data-dragging] { cursor: grabbing; }
.ui-tw__track { will-change: transform; }
.ui-tw__set {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* Every card carries its gap below, so one set's height is exactly the wrap distance */
.ui-tw__item { margin-bottom: var(--ui-tw-gap); }

.ui-tw__card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 18px 20px 18px;
  border-radius: 16px;
  background: var(--ui-tw-card);
  box-shadow: var(--ui-tw-shadow);
  color: var(--ui-tw-text);
  transition: transform 320ms var(--ui-tw-ease), box-shadow 320ms var(--ui-tw-ease), opacity 320ms var(--ui-tw-ease);
}
.ui-tw__card:focus { outline: none; }
.ui-tw__card:focus-visible { outline: 2px solid var(--ui-tw-focus); outline-offset: 2px; }

.ui-tw__stars { display: flex; gap: 2px; margin-bottom: -4px; }
.ui-tw__stars svg { width: 13px; height: 13px; fill: var(--ui-tw-star-off); }
.ui-tw__stars svg[data-on] { fill: var(--ui-tw-star); }

.ui-tw__quote { margin: 0; }
.ui-tw__quote p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: -0.006em;
  text-wrap: pretty;
  overflow-wrap: break-word;
}

.ui-tw__who { display: flex; align-items: center; gap: 10px; min-width: 0; }
.ui-tw__avatar {
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--ui-tw-initials);
  /* A hairline ring keeps light photos from melting into the card */
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  pointer-events: none;
}
.ui-tw__avatar--initials {
  display: grid;
  place-items: center;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--ui-tw-muted);
}
.ui-tw__id { display: grid; gap: 1px; min-width: 0; }
.ui-tw__name {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 18px;
  color: var(--ui-tw-ink);
}
/* The name wins over the role: it shrinks last and only then truncates */
.ui-tw__name-text { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ui-tw__verified { flex: none; width: 14px; height: 14px; fill: var(--ui-tw-faint); }
.ui-tw__meta {
  min-width: 0;
  overflow-wrap: break-word;
  font-size: 12.5px;
  line-height: 17px;
  color: var(--ui-tw-muted);
}

/* Hover: the card under the pointer lifts a little, the rest of the wall steps back */
@media (hover: hover) {
  .ui-tw__col:not([data-dragging]) .ui-tw__card:hover { transform: translateY(-3px); box-shadow: var(--ui-tw-lift); }
  .ui-tw:has(.ui-tw__col:not([data-dragging]) .ui-tw__card:hover) .ui-tw__card:not(:hover) { opacity: var(--ui-tw-dim); }
}
/* Keyboard focus gets the same lift */
.ui-tw__card:focus-visible { transform: translateY(-3px); box-shadow: var(--ui-tw-lift); }

/* Narrow walls (one column on phones): roomier, more readable quotes */
@container (max-width: 479px) {
  .ui-tw__card { padding: 18px 18px 18px; }
  .ui-tw__quote p { font-size: 15px; line-height: 1.58; }
}
@container (max-width: 739px) {
  .ui-tw__col { --ui-tw-gap: 14px; }
}

/* Reduced motion: a static masonry that shows every quote \u2013 no fixed height, no fade */
.ui-tw[data-static] {
  height: auto;
  grid-template-rows: auto;
  overflow: visible;
  -webkit-mask-image: none;
  mask-image: none;
}
.ui-tw[data-static] .ui-tw__col { height: auto; cursor: auto; user-select: auto; -webkit-user-select: auto; }

@media (prefers-reduced-motion: reduce) {
  .ui-tw__card { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tw {
  --ui-tw-card: #19191b;
  --ui-tw-line: #2a2a2e;
  --ui-tw-ink: #ededed;
  --ui-tw-text: #c8c8cc;
  --ui-tw-muted: #8b8b92;
  --ui-tw-faint: #6b6b72;
  --ui-tw-star: #7a7a82;
  --ui-tw-star-off: #2f2f34;
  --ui-tw-initials: #232327;
  --ui-tw-shadow: 0 0 0 1px var(--ui-tw-line);
  --ui-tw-lift: 0 0 0 1px #34343a, 0 12px 28px -10px rgba(0, 0, 0, 0.6);
  --ui-tw-focus: #6d8bff;
}
:where(.dark, [data-theme="dark"]) .ui-tw__avatar { box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06); }
`,ne=[{quote:"We replaced three half-finished internal kits with it in a sprint. Our product finally looks like one product.",name:"Lena Hartmann",role:"Design Lead",company:"Fieldnote",avatar:"/avatars/lena.jpg",rating:5},{quote:"The motion is the part nobody notices \u2013 which is exactly the point.",name:"Jonas Weber",role:"Staff Engineer",company:"Ledgerline",avatar:"/avatars/jonas.jpg",verified:!0},{quote:"I opened the date range picker expecting to fix the keyboard handling. There was nothing to fix. Focus, arrows, Escape, screen reader labels \u2013 all there, and it still felt light.",name:"Priya Raman",role:"Frontend Engineer",company:"Tidepool Health",verified:!0},{quote:"Copy, paste, ship. Then actually read the code and learn something.",name:"Mara Lindqvist",role:"Product Designer",company:"Kitewise",avatar:"/avatars/mara.jpg",rating:5},{quote:"Our designers stopped redlining spacing in reviews. The defaults are calm and consistent, and dark mode just works without a second pass.",name:"Daniel Okafor",role:"Head of Design",company:"Northpeak"},{quote:"Every component is one file with no dependencies. Our bundle audit took five minutes.",name:"Noah Fischer",role:"Tech Lead",company:"Parcelwise",avatar:"/avatars/noah.jpg",verified:!0},{quote:"It feels like it was built by people who care about the last 5%.",name:"Camille Roux",role:"Design Engineer",company:"Sundial",rating:5},{quote:"We shipped a new onboarding flow in two days. The dropzone and the command menu alone saved us a week of polish \u2013 the empty states and the little transitions were already better than what we had planned.",name:"Sofia Marino",role:"Product Manager",company:"Brightloop",avatar:"/avatars/sofia.jpg",verified:!0},{quote:"Finally a library that doesn't look like every other AI-generated dashboard.",name:"Elif Demir",role:"Brand Designer",company:"Harbor Studio",rating:5},{quote:"The phone layouts are the real surprise. Everything holds up at 320 pixels, which I can't say about our own app.",name:"Theo Brandt",role:"Mobile Engineer",company:"Copperleaf",avatar:"/avatars/theo.jpg"},{quote:"Accessible by default, without me having to argue for it in planning.",name:"Marcus Lee",role:"Accessibility Lead",company:"Quillstack",verified:!0},{quote:"I use it as a reference as much as a library. When a junior asks how a height animation should feel, I just send them the source.",name:"Hana Sato",role:"Principal Designer",company:"Plainview",rating:5}];function le(){return(0,r.jsxs)("div",{className:"testimonial-wall-demo",children:[(0,r.jsxs)("header",{className:"testimonial-wall-demo__head",children:[(0,r.jsx)("p",{className:"testimonial-wall-demo__eyebrow",children:"Testimonials"}),(0,r.jsx)("h2",{className:"testimonial-wall-demo__title",children:"Loved by product teams"})]}),(0,r.jsx)(ie,{items:ne,speed:26,label:"What product teams say"})]})}export{le as default};
