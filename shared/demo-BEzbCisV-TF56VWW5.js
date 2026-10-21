import{a as m}from"./chunk-BBLBVXTT.js";import{a as p}from"./chunk-VXCLO5JM.js";import"./chunk-LKG2PFLG.js";import"./chunk-KHKHHDEU.js";import"./chunk-MOQMIKSW.js";var i=m(),e=p();function h({text:a,by:s="word",stagger:n=40,delay:f=0,duration:x=700,as:y="p",once:o=!0,className:_}){let c=(0,i.useRef)(null),[b,l]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let t=c.current;if(!t||typeof IntersectionObserver>"u")return l(!0);let r=new IntersectionObserver(u=>{for(let d of u)d.isIntersecting?(l(!0),o&&r.disconnect()):o||l(!1)},{threshold:.3});return r.observe(t),()=>r.disconnect()},[o]);let v=0,w=a.split(/(\s+)/).map((t,r)=>t===""?null:/^\s+$/.test(t)?t:s==="word"?(0,e.jsx)("span",{className:"ui-trv__p",style:{"--ui-trv-i":v++},children:t},r):(0,e.jsx)("span",{className:"ui-trv__w",children:Array.from(t).map((u,d)=>(0,e.jsx)("span",{className:"ui-trv__p",style:{"--ui-trv-i":v++},children:u},d))},r));return(0,e.jsxs)(y,{ref:c,className:["ui-trv",_].filter(Boolean).join(" "),"data-shown":b?"":void 0,style:{"--ui-trv-stagger":`${n}ms`,"--ui-trv-delay":`${f}ms`,"--ui-trv-duration":`${x}ms`},children:[(0,e.jsx)("style",{href:"ui-text-reveal",precedence:"default",children:g}),(0,e.jsx)("span",{className:"ui-trv__sr",children:a}),(0,e.jsx)("span",{"aria-hidden":"true",children:w})]})}var g=`
.ui-trv {
  --ui-trv-blur: 8px;
  --ui-trv-rise: 0.35em;
  --ui-trv-ease: cubic-bezier(0.2, 0.7, 0.2, 1);
}
.ui-trv__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
.ui-trv__w {
  display: inline-block;
  white-space: nowrap;
}
.ui-trv__p {
  display: inline-block;
  opacity: 0;
  filter: blur(var(--ui-trv-blur));
  transform: translateY(var(--ui-trv-rise));
  will-change: opacity, filter, transform;
}
.ui-trv[data-shown] .ui-trv__p {
  animation: ui-trv-in var(--ui-trv-duration) var(--ui-trv-ease) both;
  animation-delay: calc(var(--ui-trv-delay) + var(--ui-trv-i) * var(--ui-trv-stagger));
}
@keyframes ui-trv-in {
  from {
    opacity: 0;
    filter: blur(var(--ui-trv-blur));
    transform: translateY(var(--ui-trv-rise));
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: none;
  }
}

/* Reduced motion: the text is simply there */
@media (prefers-reduced-motion: reduce) {
  .ui-trv .ui-trv__p,
  .ui-trv[data-shown] .ui-trv__p {
    opacity: 1;
    filter: none;
    transform: none;
    animation: none;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html>.
   The text takes its color from the parent, so only the blur softens a touch on dark backgrounds */
:where(.dark, [data-theme="dark"]) .ui-trv {
  --ui-trv-blur: 6px;
}
`;function N(){let[a,s]=(0,i.useState)(0);return(0,e.jsxs)("div",{className:"text-reveal-demo",children:[(0,e.jsxs)("div",{className:"text-reveal-demo__copy",children:[(0,e.jsx)(h,{as:"h2",className:"text-reveal-demo__title",text:"Words that arrive one at a time."}),(0,e.jsx)(h,{className:"text-reveal-demo__body",text:"Each word fades in out of a soft blur and rises into place, so a sentence reads like it is being spoken.",delay:260,stagger:22})]},a),(0,e.jsx)("button",{type:"button",className:"text-reveal-demo__replay",onClick:()=>s(n=>n+1),children:"Replay"})]})}export{N as default};
