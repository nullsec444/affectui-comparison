import{a as zt}from"../shared/chunk-PWBCLQI6.js";import{a as ct}from"../shared/chunk-LKG2PFLG.js";import{a as H}from"../shared/chunk-KHKHHDEU.js";import{b as y}from"../shared/chunk-MOQMIKSW.js";var dt=y(ct()),ft=y(zt());var St=y(ct()),Tt=y(H()),i=y(H()),Mt=Tt,a=St,$t=r=>`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,Et=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,pt={check:"M5.5 12.5l4 4L18.5 8",alert:"M12 8v4.5M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"};function Ct({length:r=6,separator:f=!1,numeric:h=!0,value:l,defaultValue:I="",onChange:w,onComplete:k,status:s="idle",errorMessage:d="That code didn't work. Try again.",clearOnError:T=!0,successLabel:b="Verified",onResend:x,resendIn:c=30,align:m="start",disabled:g=!1,autoFocus:v=!1,label:L="Verification code",className:ht}){let N=t=>{let e="";for(let o of t){let p=h?/[0-9]/.test(o)?o:"":/[a-z0-9]/i.test(o)?o.toUpperCase():"";p&&e.length<r&&(e+=p)}return e},[mt,gt]=(0,a.useState)(()=>N(I)),n=N(l??mt),[P,W]=(0,a.useState)(Math.min(n.length,r-1)),[G,J]=(0,a.useState)(!1),[Q,j]=(0,a.useState)(!1),[_t,Z]=(0,a.useState)(!1),[tt,et]=(0,a.useState)(!1),[$,it]=(0,a.useState)(c),[xt,R]=(0,a.useState)(""),q=(0,a.useRef)(null),E=(0,a.useRef)(null),V=(0,a.useRef)(null),C=(0,a.useRef)(null),O=(0,a.useRef)(null),D=(0,a.useRef)([]),at=(0,a.useRef)([]),ot=(0,a.useId)(),F=(0,a.useRef)(n),rt=(0,a.useRef)([]),nt=(0,a.useRef)([]),bt=(0,a.useRef)(0);if(F.current!==n){let t=F.current,e=[...n].map((_,M)=>_!==t[M]),o=e.indexOf(!0),p=e.filter(Boolean).length>1;e.forEach((_,M)=>{_&&(rt.current[M]=++bt.current,nt.current[M]=p?(M-o)*45:0)}),F.current=n}let u=Math.min(P,n.length,r-1),z=f===!0?Math.floor(r/2):typeof f=="number"?f:0,A=s==="verifying"||s==="success",K=A||tt||g,X=s==="error"&&Q,vt=!A&&!g&&(G||n.length>0&&n.length<r),B=(t,e,o=!0)=>{l===void 0&&gt(t),t!==n&&w?.(t),W(Math.max(0,Math.min(e,t.length,r-1))),o&&(Q&&t.length&&j(!1),t.length===r&&t!==n&&k?.(t))},yt=t=>{if(K)return;let e=t.value,o=t.selectionStart??e.length,p=N(e),_=N(e.slice(0,o)).length;if(p===n){t.value=n,S();return}B(p,_)},wt=t=>{if(t.preventDefault(),K)return;let e=N(t.clipboardData.getData("text"));if(!e)return;if(e.length>=r)return B(e.slice(0,r),r-1);let o=(n.slice(0,u)+e+n.slice(u+e.length)).slice(0,r);B(o,u+e.length)},kt=t=>{let e=Math.min(n.length,r-1),o={ArrowLeft:u-1,ArrowRight:u+1,Home:0,End:e,ArrowUp:0,ArrowDown:e};t.key in o&&!t.shiftKey&&!t.metaKey&&(t.preventDefault(),W(Math.max(0,Math.min(o[t.key],e))))},Nt=t=>{let e=D.current.findIndex(o=>o&&t<o.getBoundingClientRect().right+4);e<0&&(e=r-1),W(Math.min(e,n.length,r-1)),requestAnimationFrame(S)},S=()=>{let t=q.current;if(!t||document.activeElement!==t)return;let e=Math.min(P,n.length,r-1);e<n.length?t.setSelectionRange(e,e+1):t.setSelectionRange(e,e)};(0,a.useLayoutEffect)(S),(0,a.useEffect)(()=>{v&&q.current?.focus({preventScroll:!0})},[v]),(0,a.useLayoutEffect)(()=>{let t=V.current,e=D.current[u];if(t&&e){let _=!t.dataset.ready;_&&(t.style.transition="none"),t.style.width=`${e.offsetWidth}px`,t.style.height=`${e.offsetHeight}px`,t.style.transform=`translate(${e.offsetLeft}px, ${e.offsetTop}px)`,_&&(t.dataset.ready="1",t.offsetWidth,t.style.transition="")}let o=C.current,p=E.current;o&&p&&O.current&&(o.style.width=`${s==="success"?O.current.offsetWidth:p.offsetWidth}px`)}),(0,a.useEffect)(()=>{let t=E.current;if(!t)return;let e=new ResizeObserver(()=>{let o=V.current,p=D.current[u];o&&p&&(o.style.width=`${p.offsetWidth}px`,o.style.height=`${p.offsetHeight}px`,o.style.transform=`translate(${p.offsetLeft}px, ${p.offsetTop}px)`),C.current&&s!=="success"&&(C.current.style.width=`${t.offsetWidth}px`)});return e.observe(t),()=>e.disconnect()},[u,s]);let st=(0,a.useRef)(s);(0,a.useEffect)(()=>{let t=st.current;if(st.current=s,s!==t){if(s==="verifying"&&R("Verifying code"),s==="success"&&R(b),s!=="error"){j(!1);return}j(!0),R(typeof d=="string"?d:"That code didn't work"),Et()||E.current?.animate([{transform:"none"},{transform:"translateX(-6px)"},{transform:"translateX(5px)"},{transform:"translateX(-3px)"},{transform:"translateX(2px)"},{transform:"none"}],{duration:420,easing:"ease-out"}),T&&(et(!0),at.current.push(window.setTimeout(()=>Z(!0),700),window.setTimeout(()=>{Z(!1),et(!1),B("",0,!1)},980)))}},[s]),(0,a.useEffect)(()=>()=>at.current.forEach(clearTimeout),[]),(0,a.useEffect)(()=>{if($<=0){x&&c>0&&R("You can resend the code now");return}let t=window.setTimeout(()=>it(e=>e-1),1e3);return()=>clearTimeout(t)},[$]);let Rt=()=>{x?.(),it(c),R("A new code is on its way")},Y=[];for(let t=0;t<r;t++){z>0&&z<r&&t===z&&Y.push((0,i.jsx)("span",{className:"ui-otpc__sep"},"sep"));let e=n[t];Y.push((0,i.jsx)("span",{ref:o=>{D.current[t]=o},className:"ui-otpc__box","data-filled":e?"":void 0,style:{"--i":t},children:e&&(0,i.jsx)("span",{className:"ui-otpc__char",style:{animationDelay:`${nt.current[t]??0}ms`},children:e},rt.current[t])},t))}return(0,i.jsxs)("div",{className:["ui-otpc",ht].filter(Boolean).join(" "),"data-status":s,"data-error":X||void 0,"data-align":m,"data-disabled":g||void 0,children:[(0,i.jsx)("style",{href:"ui-otp-input-clean",precedence:"default",children:Dt}),(0,i.jsx)("div",{className:"ui-otpc__field",children:(0,i.jsxs)("div",{ref:E,className:"ui-otpc__slots","data-clearing":_t||void 0,style:{"--n":r,"--sep-w":z>0&&z<r?"calc(var(--ui-otpc-gap) + 8px)":"0px"},children:[Y,(0,i.jsx)("span",{ref:V,className:"ui-otpc__ring","data-show":vt||void 0,"aria-hidden":"true",children:(0,i.jsx)("span",{className:"ui-otpc__caret","data-show":G&&!n[u]&&!K||void 0})}),(0,i.jsx)("span",{ref:C,className:"ui-otpc__pill","aria-hidden":"true",children:(0,i.jsxs)("span",{ref:O,className:"ui-otpc__pill-inner",children:[(0,i.jsx)("svg",{viewBox:"0 0 24 24",className:"ui-otpc__check","aria-hidden":"true",children:(0,i.jsx)("path",{d:pt.check,pathLength:1})}),b]})}),(0,i.jsx)("input",{ref:q,className:"ui-otpc__input",type:"text",value:n,inputMode:h?"numeric":"text",pattern:h?"[0-9]*":void 0,autoComplete:"one-time-code",autoCapitalize:h?"off":"characters",autoCorrect:"off",spellCheck:!1,enterKeyHint:"done","aria-label":`${L}, ${r} ${h?"digits":"characters"}`,"aria-invalid":X||void 0,"aria-describedby":X?`${ot}-msg`:void 0,disabled:g,readOnly:A||tt,onChange:t=>yt(t.currentTarget),onPaste:wt,onKeyDown:kt,onFocus:()=>{J(!0),requestAnimationFrame(S)},onBlur:()=>J(!1),onPointerUp:t=>Nt(t.clientX),onSelect:t=>{let e=t.currentTarget,o=u<n.length?[u,u+1]:[u,u];(e.selectionStart!==o[0]||e.selectionEnd!==o[1])&&S()}})]})}),(0,i.jsx)("div",{className:"ui-otpc__msg","data-show":X||void 0,children:(0,i.jsx)("div",{className:"ui-otpc__msg-inner",children:(0,i.jsxs)("p",{id:`${ot}-msg`,className:"ui-otpc__msg-text",children:[(0,i.jsx)("svg",{viewBox:"0 0 24 24",className:"ui-otpc__alert","aria-hidden":"true",children:(0,i.jsx)("path",{d:pt.alert})}),(0,i.jsx)("span",{children:d})]})})}),x&&(0,i.jsxs)("div",{className:"ui-otpc__resend","data-hidden":s==="success"||void 0,children:[(0,i.jsx)("span",{className:"ui-otpc__resend-q",children:"Didn't get a code?"})," ",$>0?(0,i.jsxs)("span",{className:"ui-otpc__swap ui-otpc__wait",children:["Resend in","\xA0",(0,i.jsx)("span",{className:"ui-otpc__time",children:$t($)})]},"wait"):(0,i.jsx)("button",{type:"button",className:"ui-otpc__swap ui-otpc__resend-btn",onClick:Rt,disabled:g||A,children:"Resend code"},"go")]}),(0,i.jsx)("span",{className:"ui-otpc__live","aria-live":"polite",children:xt})]})}var Dt=`
/* Colors, size and motion as variables \u2013 override them on .ui-otpc */
.ui-otpc {
  --ui-otpc-box: 40px;
  --ui-otpc-gap: 8px;
  --ui-otpc-card: #ffffff;
  --ui-otpc-ink: rgba(0, 0, 0, 0.88);
  --ui-otpc-strong: #000000;
  --ui-otpc-text: rgba(0, 0, 0, 0.61);
  --ui-otpc-muted: rgba(0, 0, 0, 0.45);
  --ui-otpc-faint: rgba(0, 0, 0, 0.27);
  --ui-otpc-icon: rgba(0, 0, 0, 0.447);
  --ui-otpc-line: rgba(0, 0, 0, 0.06);
  --ui-otpc-fill: rgba(0, 0, 0, 0.06);
  --ui-otpc-wash: rgba(0, 0, 0, 0.03);
  --ui-otpc-shine: rgba(255, 255, 255, 0.82);
  --ui-otpc-accent: rgba(0, 96, 226, 0.765);
  --ui-otpc-focus: rgba(0, 96, 226, 0.35);
  --ui-otpc-danger: #e5484d;
  --ui-otpc-success: #1a9a52;
  --ui-otpc-danger-tint: rgba(229, 72, 77, 0.08);
  --ui-otpc-success-tint: rgba(26, 154, 82, 0.08);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-otpc-lift: 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-otpc-shadow: 0 0 0 0.5px var(--ui-otpc-line), var(--ui-otpc-lift);
  --ui-otpc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  container-type: inline-size;
  display: grid;
  justify-self: stretch; /* it sizes the boxes from its own width, so it must never shrink to fit them */
  width: 100%;
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-otpc-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-otpc *, .ui-otpc *::before, .ui-otpc *::after { box-sizing: border-box; }
:where(.ui-otpc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; }
.ui-otpc[data-align="center"] { justify-items: center; text-align: center; }
.ui-otpc[data-disabled] { opacity: 0.55; }

.ui-otpc__field { display: flex; min-width: 0; padding: 3px 0; }
.ui-otpc[data-align="center"] .ui-otpc__field { justify-content: center; }

/* The cells scale down to fit their container (phones at 320px), up to --ui-otpc-box */
.ui-otpc__slots {
  --size: min(var(--ui-otpc-box), calc((100cqi - 6px - (var(--n) - 1) * var(--ui-otpc-gap) - var(--sep-w)) / var(--n)));
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--ui-otpc-gap);
}
/* White cells with the card's hairline shadow */
.ui-otpc__box {
  position: relative;
  display: grid;
  place-items: center;
  flex: none;
  width: var(--size);
  height: calc(var(--size) * 1.1);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.2);
  background: var(--ui-otpc-card);
  box-shadow: var(--ui-otpc-shadow);
  font-size: min(15px, calc(var(--size) * 0.375));
  line-height: 24px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--ui-otpc-ink);
  transition: box-shadow 220ms ease, background-color 220ms ease, color 220ms ease, transform 380ms var(--ui-otpc-ease), opacity 260ms ease;
}
.ui-otpc__sep { flex: none; width: 8px; height: 1px; border-radius: 1px; background: var(--ui-otpc-faint); transition: opacity 200ms ease; }

/* Digits pop in \u2013 a small lift out of a blur, no bounce */
.ui-otpc__char { display: block; animation: ui-otpc-pop 280ms var(--ui-otpc-ease) both; }
.ui-otpc__slots[data-clearing] .ui-otpc__char { animation: ui-otpc-out 240ms ease both; animation-delay: calc((var(--n) - var(--i)) * 22ms) !important; }

/* One blue outline glides from cell to cell; its thin caret blinks softly in an empty cell */
.ui-otpc__ring {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  border-radius: calc(var(--size) * 0.2);
  box-shadow: 0 0 0 0.5px var(--ui-otpc-accent), 0 0 0 2px var(--ui-otpc-focus);
  opacity: 0;
  pointer-events: none;
  transition: transform 260ms var(--ui-otpc-ease), width 260ms var(--ui-otpc-ease), opacity 180ms ease, box-shadow 220ms ease;
}
.ui-otpc__ring[data-show] { opacity: 1; }
.ui-otpc__caret { width: 1px; height: 18px; max-height: 42%; border-radius: 1px; background: var(--ui-otpc-accent); opacity: 0; }
.ui-otpc__caret[data-show] { animation: ui-otpc-blink 1.1s ease-in-out infinite; }

/* The real input lies over the cells, invisible \u2013 it takes taps, keys, paste and SMS autofill */
.ui-otpc__input {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  color: transparent;
  -webkit-text-fill-color: transparent;
  caret-color: transparent;
  font-size: 16px; /* iOS doesn't zoom into inputs of 16px and up */
  letter-spacing: -1em;
  cursor: text;
  appearance: none;
}
.ui-otpc__input::selection { background: transparent; }
.ui-otpc__input:-webkit-autofill { -webkit-box-shadow: 0 0 0 100px transparent inset; transition: background-color 9999s; }
.ui-otpc__input[readonly], .ui-otpc__input:disabled { cursor: default; }

/* Verifying: the digits turn gray and a lighter band passes over the cells, one after another */
.ui-otpc__box::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 20%, var(--ui-otpc-shine) 50%, transparent 80%);
  transform: translateX(-120%);
  opacity: 0;
  pointer-events: none;
}
.ui-otpc[data-status="verifying"] .ui-otpc__box::after { opacity: 1; animation: ui-otpc-shimmer 1.3s ease-in-out infinite; animation-delay: calc(var(--i) * 70ms); }
.ui-otpc[data-status="verifying"] .ui-otpc__box { background: var(--ui-otpc-wash); box-shadow: 0 0 0 0.5px var(--ui-otpc-line); color: var(--ui-otpc-text); }

/* Error: no red strokes \u2013 the cells get a faint red fill and the digits turn red */
.ui-otpc[data-error] .ui-otpc__box { background: var(--ui-otpc-danger-tint); color: var(--ui-otpc-danger); }

/* Success: the cells slide together and fade while one frame morphs into the "Verified" chip */
.ui-otpc__pill {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  place-items: center;
  height: calc(var(--size) * 1.1);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.2);
  background: var(--ui-otpc-card);
  box-shadow: var(--ui-otpc-shadow);
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 300ms var(--ui-otpc-ease), background-color 300ms ease, opacity 160ms ease 140ms;
}
.ui-otpc__pill-inner {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 14px 0 12px;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--ui-otpc-ink);
  opacity: 0;
  transition: opacity 160ms ease;
}
.ui-otpc__check { width: 16px; height: 16px; flex: none; fill: none; stroke: var(--ui-otpc-success); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.ui-otpc__check path { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 120ms ease; }
.ui-otpc[data-status="success"] .ui-otpc__box {
  transform: translateX(calc(((var(--n) - 1) / 2 - var(--i)) * (var(--size) + var(--ui-otpc-gap)))) scale(0.7);
  opacity: 0;
  transition: transform 340ms var(--ui-otpc-ease), opacity 220ms ease 120ms;
}
.ui-otpc[data-status="success"] .ui-otpc__sep { opacity: 0; }
.ui-otpc[data-status="success"] .ui-otpc__pill {
  background: var(--ui-otpc-success-tint);
  opacity: 1;
  transition: width 460ms var(--ui-otpc-ease) 220ms, background-color 300ms ease 300ms, opacity 160ms ease 120ms;
}
.ui-otpc[data-status="success"] .ui-otpc__pill-inner { opacity: 1; transition: opacity 240ms ease 460ms; }
.ui-otpc[data-status="success"] .ui-otpc__check path { stroke-dashoffset: 0; transition: stroke-dashoffset 380ms var(--ui-otpc-ease) 560ms; }

/* The error message grows in below, then folds away */
.ui-otpc__msg { display: grid; grid-template-rows: 0fr; width: 100%; transition: grid-template-rows 300ms var(--ui-otpc-ease); }
.ui-otpc__msg[data-show] { grid-template-rows: 1fr; }
.ui-otpc__msg-inner { min-height: 0; overflow: hidden; }
.ui-otpc__msg-text {
  margin: 0;
  padding-top: 8px;
  font-size: 12px;
  line-height: 16px;
  text-wrap: balance;
  color: var(--ui-otpc-text);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 200ms ease, transform 300ms var(--ui-otpc-ease);
}
.ui-otpc__msg[data-show] .ui-otpc__msg-text { opacity: 1; transform: none; transition-delay: 60ms; }
/* The icon sits inline, so a wrapped message stays centered with it */
.ui-otpc__alert { display: inline-block; width: 14px; height: 14px; margin-right: 6px; vertical-align: -3px; fill: none; stroke: var(--ui-otpc-danger); stroke-width: 1.7; stroke-linecap: round; }

/* Resend: a countdown that turns into a tab-style button */
.ui-otpc__resend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  min-height: 28px;
  margin-top: 12px;
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
  color: var(--ui-otpc-muted);
  transition: opacity 220ms ease;
}
.ui-otpc[data-align="center"] .ui-otpc__resend { justify-content: center; }
.ui-otpc__resend[data-hidden] { opacity: 0; visibility: hidden; transition: opacity 220ms ease, visibility 0s 220ms; }
.ui-otpc__swap { display: inline-block; animation: ui-otpc-in 260ms var(--ui-otpc-ease) both; }
.ui-otpc__wait { color: var(--ui-otpc-text); }
.ui-otpc__time { display: inline-block; min-width: 3.4ch; text-align: left; color: var(--ui-otpc-ink); }
.ui-otpc__resend-btn {
  position: relative;
  padding: 4px 10px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 0.5px var(--ui-otpc-line);
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  color: var(--ui-otpc-text);
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-otpc__resend-btn:hover { background: var(--ui-otpc-wash); color: var(--ui-otpc-ink); }
.ui-otpc__resend-btn:active { background: var(--ui-otpc-fill); }
.ui-otpc__resend-btn:focus-visible { outline: 2px solid var(--ui-otpc-focus); outline-offset: 1px; }
.ui-otpc__resend-btn:disabled { color: var(--ui-otpc-faint); background: none; cursor: default; }
.ui-otpc__live { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@keyframes ui-otpc-pop { from { opacity: 0; transform: translateY(4px) scale(0.7); filter: blur(3px); } to { opacity: 1; transform: none; filter: none; } }
@keyframes ui-otpc-out { to { opacity: 0; transform: translateY(-4px) scale(0.8); filter: blur(2px); } }
@keyframes ui-otpc-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes ui-otpc-shimmer { 0% { transform: translateX(-120%); } 55%, 100% { transform: translateX(120%); } }
@keyframes ui-otpc-in { from { opacity: 0; transform: translateY(3px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Narrow containers (phones): tighter gaps, the question before "Resend" drops first */
@container (max-width: 340px) {
  .ui-otpc__slots { --ui-otpc-gap: 6px; }
  .ui-otpc__sep { width: 6px; }
}
@container (max-width: 250px) {
  .ui-otpc__resend-q { display: none; }
}
/* Touch screens: a taller Resend button */
@media (hover: none) and (pointer: coarse) {
  .ui-otpc__resend-btn { padding: 7px 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-otpc *, .ui-otpc *::before, .ui-otpc *::after { animation: none !important; transition: none !important; }
  .ui-otpc__caret[data-show] { opacity: 1; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-otpc {
  --ui-otpc-card: #1c1c1e;
  --ui-otpc-ink: rgba(255, 255, 255, 0.9);
  --ui-otpc-strong: #ffffff;
  --ui-otpc-text: rgba(255, 255, 255, 0.62);
  --ui-otpc-muted: rgba(255, 255, 255, 0.46);
  --ui-otpc-faint: rgba(255, 255, 255, 0.3);
  --ui-otpc-icon: rgba(255, 255, 255, 0.5);
  --ui-otpc-line: rgba(255, 255, 255, 0.1);
  --ui-otpc-fill: rgba(255, 255, 255, 0.08);
  --ui-otpc-wash: rgba(255, 255, 255, 0.03);
  --ui-otpc-shine: rgba(255, 255, 255, 0.1);
  --ui-otpc-accent: #4d8dff;
  --ui-otpc-focus: rgba(77, 141, 255, 0.5);
  --ui-otpc-danger: #ff6369;
  --ui-otpc-success: #3ec27a;
  --ui-otpc-danger-tint: rgba(255, 99, 105, 0.14);
  --ui-otpc-success-tint: rgba(62, 194, 122, 0.14);
  --ui-otpc-lift: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
}
`,U="482913",ut="481973",At=r=>r>0?`That code didn't work. ${r} ${r===1?"try":"tries"} left.`:"That code didn't work. Request a new code.";function lt(){let[r,f]=(0,a.useState)(""),[h,l]=(0,a.useState)("idle"),[I,w]=(0,a.useState)(3),k=(0,a.useRef)([]),s=(0,a.useRef)(!0),d=(c,m)=>k.current.push(window.setTimeout(m,c)),T=()=>{k.current.forEach(clearTimeout),k.current=[]},b=c=>{l("verifying"),d(1e3,()=>{c===U?(l("success"),d(3200,()=>{f(""),l("idle"),w(3)})):(w(m=>Math.max(0,m-1)),l("error"))})};(0,a.useEffect)(()=>{let c=700,m=g=>{for(let v=1;v<=g.length;v++){let L=g.slice(0,v);d(c,()=>f(L)),c+=150}};return m(ut),d(c+150,()=>b(ut)),c+=2850,d(c,()=>l("idle")),m(U),d(c+150,()=>{s.current=!1,b(U)}),T},[]);let x=()=>{s.current&&(s.current=!1,T(),f(""),l("idle"))};return(0,i.jsx)("div",{className:"otp-demo",onPointerDownCapture:x,onKeyDownCapture:x,onFocusCapture:x,children:(0,i.jsxs)("div",{className:"otp-democ",children:[(0,i.jsxs)("div",{className:"otp-democ__body",children:[(0,i.jsx)("span",{className:"otp-democ__icon","aria-hidden":"true",children:(0,i.jsxs)("svg",{viewBox:"0 0 16 16",children:[(0,i.jsx)("rect",{x:"1.75",y:"3.25",width:"12.5",height:"9.5",rx:"2"}),(0,i.jsx)("path",{d:"M2.5 4.75l5.5 4 5.5-4"})]})}),(0,i.jsx)("h3",{className:"otp-democ__title",children:"Check your email"}),(0,i.jsxs)("p",{className:"otp-democ__text",children:["We sent a code to ",(0,i.jsx)("strong",{children:"maya@acme.com"})]}),(0,Mt.jsx)(Ct,{className:"otp-demo__otp",separator:!0,align:"center",value:r,status:h,errorMessage:At(I),onChange:c=>{f(c),h==="error"&&c&&l("idle")},onComplete:b,onResend:()=>w(3),resendIn:30})]}),(0,i.jsxs)("p",{className:"otp-democ__hint",children:["Demo code: ",(0,i.jsxs)("span",{children:["482","\xA0","913"]})]})]})})}(0,ft.createRoot)(document.getElementById("root")).render(dt.default.createElement(lt));
