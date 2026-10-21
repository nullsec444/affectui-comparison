import{a as E}from"../shared/chunk-PWBCLQI6.js";import{a as y}from"../shared/chunk-LKG2PFLG.js";import{a as v}from"../shared/chunk-KHKHHDEU.js";import{b as a}from"../shared/chunk-MOQMIKSW.js";var b=a(y()),x=a(E());var I=a(y()),$=a(v()),e=a(v()),m=$,s=I;function h({text:i,by:o="word",stagger:n=40,delay:k=0,duration:w=700,as:g="p",once:l=!0,className:N}){let p=(0,s.useRef)(null),[R,u]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let t=p.current;if(!t||typeof IntersectionObserver>"u")return u(!0);let r=new IntersectionObserver(d=>{for(let c of d)c.isIntersecting?(u(!0),l&&r.disconnect()):l||u(!1)},{threshold:.3});return r.observe(t),()=>r.disconnect()},[l]);let f=0,j=i.split(/(\s+)/).map((t,r)=>t===""?null:/^\s+$/.test(t)?t:o==="word"?(0,e.jsx)("span",{className:"ui-trv__p",style:{"--ui-trv-i":f++},children:t},r):(0,e.jsx)("span",{className:"ui-trv__w",children:Array.from(t).map((d,c)=>(0,e.jsx)("span",{className:"ui-trv__p",style:{"--ui-trv-i":f++},children:d},c))},r));return(0,m.jsxs)(g,{ref:p,className:["ui-trv",N].filter(Boolean).join(" "),"data-shown":R?"":void 0,style:{"--ui-trv-stagger":`${n}ms`,"--ui-trv-delay":`${k}ms`,"--ui-trv-duration":`${w}ms`},children:[(0,e.jsx)("style",{href:"ui-text-reveal",precedence:"default",children:S}),(0,e.jsx)("span",{className:"ui-trv__sr",children:i}),(0,e.jsx)("span",{"aria-hidden":"true",children:j})]})}var S=`
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
`;function _(){let[i,o]=(0,s.useState)(0);return(0,e.jsxs)("div",{className:"text-reveal-demo",children:[(0,e.jsxs)("div",{className:"text-reveal-demo__copy",children:[(0,m.jsx)(h,{as:"h2",className:"text-reveal-demo__title",text:"Words that arrive one at a time."}),(0,m.jsx)(h,{className:"text-reveal-demo__body",text:"Each word fades in out of a soft blur and rises into place, so a sentence reads like it is being spoken.",delay:260,stagger:22})]},i),(0,e.jsx)("button",{type:"button",className:"text-reveal-demo__replay",onClick:()=>o(n=>n+1),children:"Replay"})]})}(0,x.createRoot)(document.getElementById("root")).render(b.default.createElement(_));
