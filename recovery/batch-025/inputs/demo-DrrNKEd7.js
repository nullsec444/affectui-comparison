import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t(),i=[1,-.84,1.12],a=[0,.42,.18],o=(e,t)=>t>0?(e%t+t)%t:0,s=(e,t,n)=>Math.min(n,Math.max(t,e)),c=e=>e.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join(``),l=(e,t)=>Math.min(t,e>=740?3:e>=480?2:1);function u({items:e,columns:t=3,speed:u=28,pauseOnHover:f=!0,label:p=`What customers say`,className:m}){let h=(0,n.useRef)(null),g=(0,n.useRef)([]),_=(0,n.useRef)([]),v=(0,n.useRef)([]),y=(0,n.useRef)([]),b=(0,n.useRef)([]),x=(0,n.useRef)([]),S=(0,n.useRef)([]),[C,w]=(0,n.useState)(t),[T,E]=(0,n.useState)([]),[D,O]=(0,n.useState)(!1),k=Array.from({length:C},(t,n)=>e.filter((e,t)=>t%C===n)),A=(0,n.useRef)({speed:u,pauseOnHover:f,count:C});A.current={speed:u,pauseOnHover:f,count:C},(0,n.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>O(e.matches);return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,n.useLayoutEffect)(()=>{let e=h.current;if(!e)return;let n=()=>w(l(e.clientWidth,t));n();let r=new ResizeObserver(n);return r.observe(e),()=>r.disconnect()},[t]),(0,n.useEffect)(()=>{if(D)return;let e=()=>{let e=k.map((e,t)=>{let n=v.current[t],r=g.current[t];if(!n||!r)return 2;let i=r.getBoundingClientRect().height/(r.offsetHeight||1)||1,o=n.getBoundingClientRect().height/i,s=y.current[t]??={y:o*(a[t]??0),v:0,h:o,drag:null,seek:0};return s.h>0&&o>0&&s.h!==o&&(s.y=s.y/s.h*o),s.h=o,o>0?Math.min(12,Math.ceil(r.clientHeight/o)+1):2});y.current.length=k.length,E(t=>t.length===e.length&&t.every((t,n)=>t===e[n])?t:e)};e();let t=new ResizeObserver(e);for(let e of[...v.current.slice(0,C),...g.current.slice(0,C)])e&&t.observe(e);return()=>t.disconnect()},[D,C,e]),(0,n.useEffect)(()=>{let e=h.current;if(D||!e)return;let t=0,n=0,r=!1,a=e=>{let c=n?Math.min(.05,(e-n)/1e3):0;n=e;let{speed:l,pauseOnHover:u,count:d}=A.current;for(let e=0;e<d;e++){let t=y.current[e],n=_.current[e];if(!t||!n||t.h<=0)continue;let r=d===1?1:i[e%3],a=x.current[e]||S.current[e]||u&&b.current[e];if(!t.drag){let e=a?0:l*r,n=Math.abs(t.v-e)>Math.max(120,l*2)?.55:a?.32:.7;if(t.v+=(e-t.v)*(1-Math.exp(-c/n)),t.y+=t.v*c,t.seek){let e=t.seek*(1-Math.exp(-c/.12));t.y+=e,t.seek=Math.abs(t.seek-e)<.5?0:t.seek-e}}t.y=S.current[e]?s(t.y,-t.h,t.h*2):o(t.y,t.h),n.style.transform=`translate3d(0, ${-(t.h+t.y)}px, 0)`}t=r?requestAnimationFrame(a):0},c=new IntersectionObserver(([e])=>{r=e.isIntersecting,r&&!t&&(n=0,t=requestAnimationFrame(a))});return c.observe(e),()=>{c.disconnect(),cancelAnimationFrame(t)}},[D]);let j=e=>t=>{let n=y.current[e];if(n){if(t.pointerType===`touch`){x.current[e]=!0;return}t.button===0&&(n.drag={id:t.pointerId,lastY:t.clientY,lastT:t.timeStamp,moved:0,captured:!1},n.v=0)}},M=e=>t=>{let n=y.current[e],r=n?.drag;if(!n||!r||r.id!==t.pointerId)return;let i=t.currentTarget,a=i.getBoundingClientRect().height/(i.offsetHeight||1)||1,o=(t.clientY-r.lastY)/a,s=Math.max(1,t.timeStamp-r.lastT)/1e3;r.moved+=Math.abs(o),!r.captured&&r.moved>4&&(r.captured=!0,i.setPointerCapture(t.pointerId),i.setAttribute(`data-dragging`,``)),n.y-=o,n.v=n.v*.6+-o/s*.4,r.lastY=t.clientY,r.lastT=t.timeStamp},N=e=>t=>{x.current[e]=!1;let n=y.current[e],r=n?.drag;if(n&&r&&r.id===t.pointerId&&(t.timeStamp-r.lastT>80&&(n.v=0),n.v=s(n.v,-2400,2400),n.drag=null,t.currentTarget.removeAttribute(`data-dragging`),r.captured)){let e=t.currentTarget,n=e=>{e.preventDefault(),e.stopPropagation()};e.addEventListener(`click`,n,{capture:!0,once:!0}),setTimeout(()=>e.removeEventListener(`click`,n,{capture:!0}),0)}},P=e=>t=>{let n=y.current[e],r=g.current[e];if(D||!n||!r||n.h<=0||!t.currentTarget.matches(`:focus-visible`))return;let i=t.currentTarget.parentElement.offsetTop,a=t.currentTarget.offsetHeight,o=r.clientHeight,s=Math.min(56,o*.12);n.y=[n.y-n.h,n.y,n.y+n.h].reduce((e,t)=>Math.abs(i-t-o/2)<Math.abs(i-e-o/2)?t:e);let c=i-n.y;n.seek=a>o-s*2||c<s?c-s:c+a>o-s?c+a-(o-s):0},F=(e,t,n,i)=>{let a=[e.role,e.company].filter(Boolean).join(`\xA0· `),o=e.rating?s(Math.round(e.rating),1,5):0;return(0,r.jsx)(`li`,{className:`ui-tw__item`,children:(0,r.jsxs)(`figure`,{className:`ui-tw__card`,tabIndex:n?0:void 0,onFocus:n?P(t):void 0,children:[o?(0,r.jsx)(`div`,{className:`ui-tw__stars`,role:`img`,"aria-label":`Rated ${o} out of 5`,children:Array.from({length:5},(e,t)=>(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,"data-on":t<o||void 0,children:(0,r.jsx)(`path`,{d:`M8 1.6l1.9 3.95 4.35.6-3.17 3.03.78 4.32L8 11.43 4.14 13.5l.78-4.32L1.75 6.15l4.35-.6L8 1.6z`})},t))}):null,(0,r.jsx)(`blockquote`,{className:`ui-tw__quote`,children:(0,r.jsx)(`p`,{children:e.quote})}),(0,r.jsxs)(`figcaption`,{className:`ui-tw__who`,children:[e.avatar?(0,r.jsx)(`img`,{className:`ui-tw__avatar`,src:e.avatar,alt:``,width:36,height:36,loading:`lazy`,decoding:`async`,draggable:!1}):(0,r.jsx)(`span`,{className:`ui-tw__avatar ui-tw__avatar--initials`,"aria-hidden":`true`,children:c(e.name)}),(0,r.jsxs)(`span`,{className:`ui-tw__id`,children:[(0,r.jsxs)(`span`,{className:`ui-tw__name`,children:[(0,r.jsx)(`span`,{className:`ui-tw__name-text`,children:e.name}),e.verified?(0,r.jsxs)(`svg`,{className:`ui-tw__verified`,viewBox:`0 0 16 16`,role:`img`,"aria-label":`Verified customer`,children:[(0,r.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`}),(0,r.jsx)(`path`,{d:`M5.2 8.1l1.9 1.9 3.7-3.8`,fill:`none`,stroke:`var(--ui-tw-card)`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})]}):null]}),a?(0,r.jsx)(`span`,{className:`ui-tw__meta`,children:a}):null]})]})]})},i)},I=[`ui-tw`,m].filter(Boolean).join(` `);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`style`,{href:`ui-testimonial-wall`,precedence:`default`,children:d}),(0,r.jsx)(`div`,{ref:h,className:I,role:`region`,"aria-label":p,"data-cols":C,"data-static":D||void 0,style:{"--ui-tw-cols":C},children:k.map((e,t)=>D?(0,r.jsx)(`div`,{className:`ui-tw__col`,children:(0,r.jsx)(`ul`,{className:`ui-tw__set`,children:e.map((e,n)=>F(e,t,!0,String(n)))})},t):(0,r.jsx)(`div`,{ref:e=>{g.current[t]=e},className:`ui-tw__col`,onPointerEnter:e=>{e.pointerType!==`touch`&&(b.current[t]=!0)},onPointerLeave:()=>b.current[t]=!1,onPointerDown:j(t),onPointerMove:M(t),onPointerUp:N(t),onPointerCancel:N(t),onFocus:e=>S.current[t]=e.target.matches(`:focus-visible`),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(S.current[t]=!1)},children:(0,r.jsx)(`div`,{ref:e=>{_.current[t]=e},className:`ui-tw__track`,style:{transform:`translate3d(0, ${-((y.current[t]?.h??0)+(y.current[t]?.y??0))}px, 0)`},children:Array.from({length:1+Math.max(2,T[t]??2)},(n,i)=>{let a=i===1;return(0,r.jsx)(`ul`,{ref:a?e=>{v.current[t]=e}:void 0,className:`ui-tw__set`,"aria-hidden":!a||void 0,inert:!a||void 0,children:e.map((e,n)=>F(e,t,a,`${i}-${n}`))},a?`real`:i)})})},t))})]})}var d=`
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

/* Reduced motion: a static masonry that shows every quote – no fixed height, no fade */
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
`,f=[{quote:`We replaced three half-finished internal kits with it in a sprint. Our product finally looks like one product.`,name:`Lena Hartmann`,role:`Design Lead`,company:`Fieldnote`,avatar:`/avatars/lena.jpg`,rating:5},{quote:`The motion is the part nobody notices – which is exactly the point.`,name:`Jonas Weber`,role:`Staff Engineer`,company:`Ledgerline`,avatar:`/avatars/jonas.jpg`,verified:!0},{quote:`I opened the date range picker expecting to fix the keyboard handling. There was nothing to fix. Focus, arrows, Escape, screen reader labels – all there, and it still felt light.`,name:`Priya Raman`,role:`Frontend Engineer`,company:`Tidepool Health`,verified:!0},{quote:`Copy, paste, ship. Then actually read the code and learn something.`,name:`Mara Lindqvist`,role:`Product Designer`,company:`Kitewise`,avatar:`/avatars/mara.jpg`,rating:5},{quote:`Our designers stopped redlining spacing in reviews. The defaults are calm and consistent, and dark mode just works without a second pass.`,name:`Daniel Okafor`,role:`Head of Design`,company:`Northpeak`},{quote:`Every component is one file with no dependencies. Our bundle audit took five minutes.`,name:`Noah Fischer`,role:`Tech Lead`,company:`Parcelwise`,avatar:`/avatars/noah.jpg`,verified:!0},{quote:`It feels like it was built by people who care about the last 5%.`,name:`Camille Roux`,role:`Design Engineer`,company:`Sundial`,rating:5},{quote:`We shipped a new onboarding flow in two days. The dropzone and the command menu alone saved us a week of polish – the empty states and the little transitions were already better than what we had planned.`,name:`Sofia Marino`,role:`Product Manager`,company:`Brightloop`,avatar:`/avatars/sofia.jpg`,verified:!0},{quote:`Finally a library that doesn't look like every other AI-generated dashboard.`,name:`Elif Demir`,role:`Brand Designer`,company:`Harbor Studio`,rating:5},{quote:`The phone layouts are the real surprise. Everything holds up at 320 pixels, which I can't say about our own app.`,name:`Theo Brandt`,role:`Mobile Engineer`,company:`Copperleaf`,avatar:`/avatars/theo.jpg`},{quote:`Accessible by default, without me having to argue for it in planning.`,name:`Marcus Lee`,role:`Accessibility Lead`,company:`Quillstack`,verified:!0},{quote:`I use it as a reference as much as a library. When a junior asks how a height animation should feel, I just send them the source.`,name:`Hana Sato`,role:`Principal Designer`,company:`Plainview`,rating:5}];function p(){return(0,r.jsxs)(`div`,{className:`testimonial-wall-demo`,children:[(0,r.jsxs)(`header`,{className:`testimonial-wall-demo__head`,children:[(0,r.jsx)(`p`,{className:`testimonial-wall-demo__eyebrow`,children:`Testimonials`}),(0,r.jsx)(`h2`,{className:`testimonial-wall-demo__title`,children:`Loved by product teams`})]}),(0,r.jsx)(u,{items:f,speed:26,label:`What product teams say`})]})}export{p as default};