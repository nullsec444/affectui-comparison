import{a as zt}from"../shared/chunk-PWBCLQI6.js";import{a as pt}from"../shared/chunk-LKG2PFLG.js";import{a as H}from"../shared/chunk-KHKHHDEU.js";import{b as y}from"../shared/chunk-MOQMIKSW.js";var ct=y(pt()),ft=y(zt());var St=y(pt()),Tt=y(H()),i=y(H()),Mt=Tt,a=St,$t=r=>`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,Et=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ut={check:"M5.5 12.5l4 4L18.5 8",alert:"M12 8v4.5M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"};function Ct({length:r=6,separator:f=!1,numeric:m=!0,value:d,defaultValue:L="",onChange:w,onComplete:k,status:s="idle",errorMessage:c="That code didn't work. Try again.",clearOnError:T=!0,successLabel:b="Verified",onResend:x,resendIn:p=30,align:h="start",disabled:g=!1,autoFocus:v=!1,label:j="Verification code",className:mt}){let N=t=>{let e="";for(let o of t){let u=m?/[0-9]/.test(o)?o:"":/[a-z0-9]/i.test(o)?o.toUpperCase():"";u&&e.length<r&&(e+=u)}return e},[ht,gt]=(0,a.useState)(()=>N(L)),n=N(d??ht),[P,q]=(0,a.useState)(Math.min(n.length,r-1)),[G,J]=(0,a.useState)(!1),[Q,I]=(0,a.useState)(!1),[_t,Z]=(0,a.useState)(!1),[tt,et]=(0,a.useState)(!1),[$,it]=(0,a.useState)(p),[xt,R]=(0,a.useState)(""),W=(0,a.useRef)(null),E=(0,a.useRef)(null),K=(0,a.useRef)(null),C=(0,a.useRef)(null),O=(0,a.useRef)(null),D=(0,a.useRef)([]),at=(0,a.useRef)([]),ot=(0,a.useId)(),V=(0,a.useRef)(n),rt=(0,a.useRef)([]),nt=(0,a.useRef)([]),bt=(0,a.useRef)(0);if(V.current!==n){let t=V.current,e=[...n].map((_,M)=>_!==t[M]),o=e.indexOf(!0),u=e.filter(Boolean).length>1;e.forEach((_,M)=>{_&&(rt.current[M]=++bt.current,nt.current[M]=u?(M-o)*45:0)}),V.current=n}let l=Math.min(P,n.length,r-1),z=f===!0?Math.floor(r/2):typeof f=="number"?f:0,A=s==="verifying"||s==="success",F=A||tt||g,X=s==="error"&&Q,vt=!A&&!g&&(G||n.length>0&&n.length<r),B=(t,e,o=!0)=>{d===void 0&&gt(t),t!==n&&w?.(t),q(Math.max(0,Math.min(e,t.length,r-1))),o&&(Q&&t.length&&I(!1),t.length===r&&t!==n&&k?.(t))},yt=t=>{if(F)return;let e=t.value,o=t.selectionStart??e.length,u=N(e),_=N(e.slice(0,o)).length;if(u===n){t.value=n,S();return}B(u,_)},wt=t=>{if(t.preventDefault(),F)return;let e=N(t.clipboardData.getData("text"));if(!e)return;if(e.length>=r)return B(e.slice(0,r),r-1);let o=(n.slice(0,l)+e+n.slice(l+e.length)).slice(0,r);B(o,l+e.length)},kt=t=>{let e=Math.min(n.length,r-1),o={ArrowLeft:l-1,ArrowRight:l+1,Home:0,End:e,ArrowUp:0,ArrowDown:e};t.key in o&&!t.shiftKey&&!t.metaKey&&(t.preventDefault(),q(Math.max(0,Math.min(o[t.key],e))))},Nt=t=>{let e=D.current.findIndex(o=>o&&t<o.getBoundingClientRect().right+4);e<0&&(e=r-1),q(Math.min(e,n.length,r-1)),requestAnimationFrame(S)},S=()=>{let t=W.current;if(!t||document.activeElement!==t)return;let e=Math.min(P,n.length,r-1);e<n.length?t.setSelectionRange(e,e+1):t.setSelectionRange(e,e)};(0,a.useLayoutEffect)(S),(0,a.useEffect)(()=>{v&&W.current?.focus({preventScroll:!0})},[v]),(0,a.useLayoutEffect)(()=>{let t=K.current,e=D.current[l];if(t&&e){let _=!t.dataset.ready;_&&(t.style.transition="none"),t.style.width=`${e.offsetWidth}px`,t.style.height=`${e.offsetHeight}px`,t.style.transform=`translate(${e.offsetLeft}px, ${e.offsetTop}px)`,_&&(t.dataset.ready="1",t.offsetWidth,t.style.transition="")}let o=C.current,u=E.current;o&&u&&O.current&&(o.style.width=`${s==="success"?O.current.offsetWidth:u.offsetWidth}px`)}),(0,a.useEffect)(()=>{let t=E.current;if(!t)return;let e=new ResizeObserver(()=>{let o=K.current,u=D.current[l];o&&u&&(o.style.width=`${u.offsetWidth}px`,o.style.height=`${u.offsetHeight}px`,o.style.transform=`translate(${u.offsetLeft}px, ${u.offsetTop}px)`),C.current&&s!=="success"&&(C.current.style.width=`${t.offsetWidth}px`)});return e.observe(t),()=>e.disconnect()},[l,s]);let st=(0,a.useRef)(s);(0,a.useEffect)(()=>{let t=st.current;if(st.current=s,s!==t){if(s==="verifying"&&R("Verifying code"),s==="success"&&R(b),s!=="error"){I(!1);return}I(!0),R(typeof c=="string"?c:"That code didn't work"),Et()||E.current?.animate([{transform:"none"},{transform:"translateX(-6px)"},{transform:"translateX(5px)"},{transform:"translateX(-3px)"},{transform:"translateX(2px)"},{transform:"none"}],{duration:420,easing:"ease-out"}),T&&(et(!0),at.current.push(window.setTimeout(()=>Z(!0),700),window.setTimeout(()=>{Z(!1),et(!1),B("",0,!1)},980)))}},[s]),(0,a.useEffect)(()=>()=>at.current.forEach(clearTimeout),[]),(0,a.useEffect)(()=>{if($<=0){x&&p>0&&R("You can resend the code now");return}let t=window.setTimeout(()=>it(e=>e-1),1e3);return()=>clearTimeout(t)},[$]);let Rt=()=>{x?.(),it(p),R("A new code is on its way")},Y=[];for(let t=0;t<r;t++){z>0&&z<r&&t===z&&Y.push((0,i.jsx)("span",{className:"ui-otp__sep"},"sep"));let e=n[t];Y.push((0,i.jsx)("span",{ref:o=>{D.current[t]=o},className:"ui-otp__box","data-filled":e?"":void 0,style:{"--i":t},children:e&&(0,i.jsx)("span",{className:"ui-otp__char",style:{animationDelay:`${nt.current[t]??0}ms`},children:e},rt.current[t])},t))}return(0,i.jsxs)("div",{className:["ui-otp",mt].filter(Boolean).join(" "),"data-status":s,"data-error":X||void 0,"data-align":h,"data-disabled":g||void 0,children:[(0,i.jsx)("style",{href:"ui-otp-input",precedence:"default",children:Dt}),(0,i.jsx)("div",{className:"ui-otp__field",children:(0,i.jsxs)("div",{ref:E,className:"ui-otp__slots","data-clearing":_t||void 0,style:{"--n":r,"--sep-w":z>0&&z<r?"calc(var(--ui-otp-gap) + 10px)":"0px"},children:[Y,(0,i.jsx)("span",{ref:K,className:"ui-otp__ring","data-show":vt||void 0,"aria-hidden":"true",children:(0,i.jsx)("span",{className:"ui-otp__caret","data-show":G&&!n[l]&&!F||void 0})}),(0,i.jsx)("span",{ref:C,className:"ui-otp__pill","aria-hidden":"true",children:(0,i.jsxs)("span",{ref:O,className:"ui-otp__pill-inner",children:[(0,i.jsx)("svg",{viewBox:"0 0 24 24",className:"ui-otp__check","aria-hidden":"true",children:(0,i.jsx)("path",{d:ut.check,pathLength:1})}),b]})}),(0,i.jsx)("input",{ref:W,className:"ui-otp__input",type:"text",value:n,inputMode:m?"numeric":"text",pattern:m?"[0-9]*":void 0,autoComplete:"one-time-code",autoCapitalize:m?"off":"characters",autoCorrect:"off",spellCheck:!1,enterKeyHint:"done","aria-label":`${j}, ${r} ${m?"digits":"characters"}`,"aria-invalid":X||void 0,"aria-describedby":X?`${ot}-msg`:void 0,disabled:g,readOnly:A||tt,onChange:t=>yt(t.currentTarget),onPaste:wt,onKeyDown:kt,onFocus:()=>{J(!0),requestAnimationFrame(S)},onBlur:()=>J(!1),onPointerUp:t=>Nt(t.clientX),onSelect:t=>{let e=t.currentTarget,o=l<n.length?[l,l+1]:[l,l];(e.selectionStart!==o[0]||e.selectionEnd!==o[1])&&S()}})]})}),(0,i.jsx)("div",{className:"ui-otp__msg","data-show":X||void 0,children:(0,i.jsx)("div",{className:"ui-otp__msg-inner",children:(0,i.jsxs)("p",{id:`${ot}-msg`,className:"ui-otp__msg-text",children:[(0,i.jsx)("svg",{viewBox:"0 0 24 24",className:"ui-otp__alert","aria-hidden":"true",children:(0,i.jsx)("path",{d:ut.alert})}),(0,i.jsx)("span",{children:c})]})})}),x&&(0,i.jsxs)("div",{className:"ui-otp__resend","data-hidden":s==="success"||void 0,children:[(0,i.jsx)("span",{className:"ui-otp__resend-q",children:"Didn't get a code?"})," ",$>0?(0,i.jsxs)("span",{className:"ui-otp__swap ui-otp__wait",children:["Resend in","\xA0",(0,i.jsx)("span",{className:"ui-otp__time",children:$t($)})]},"wait"):(0,i.jsx)("button",{type:"button",className:"ui-otp__swap ui-otp__resend-btn",onClick:Rt,disabled:g||A,children:"Resend code"},"go")]}),(0,i.jsx)("span",{className:"ui-otp__live","aria-live":"polite",children:xt})]})}var Dt=`
/* Colors, size and motion as variables \u2013 override them on .ui-otp */
.ui-otp {
  --ui-otp-box: 48px;
  --ui-otp-gap: 8px;
  --ui-otp-bg: #fafafa;
  --ui-otp-card: #ffffff;
  --ui-otp-line: #e4e4e7;
  --ui-otp-line-strong: #cfcfd4;
  --ui-otp-ink: #171717;
  --ui-otp-text: #404040;
  --ui-otp-muted: #8f8f8f;
  --ui-otp-faint: #c4c4c8;
  --ui-otp-halo: rgba(23, 23, 23, 0.07);
  --ui-otp-wait: #f2f2f3;
  --ui-otp-shine: rgba(255, 255, 255, 0.95);
  --ui-otp-danger: #e5484d;
  --ui-otp-danger-line: rgba(229, 72, 77, 0.6);
  --ui-otp-danger-halo: rgba(229, 72, 77, 0.12);
  --ui-otp-success: #2f9e5b;
  --ui-otp-accent: #2f6bff;
  --ui-otp-focus: rgba(23, 23, 23, 0.22);
  --ui-otp-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  container-type: inline-size;
  display: grid;
  justify-self: stretch; /* it sizes the boxes from its own width, so it must never shrink to fit them */
  width: 100%;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13.5px;
  line-height: 1.45;
  color: var(--ui-otp-text);
  -webkit-font-smoothing: antialiased;
}
.ui-otp *, .ui-otp *::before, .ui-otp *::after { box-sizing: border-box; }
.ui-otp[data-align="center"] { justify-items: center; text-align: center; }
.ui-otp[data-disabled] { opacity: 0.55; }

.ui-otp__field { display: flex; min-width: 0; }
.ui-otp[data-align="center"] .ui-otp__field { justify-content: center; }

/* The boxes scale down to fit their container (phones at 320px), up to --ui-otp-box */
.ui-otp__slots {
  --size: min(var(--ui-otp-box), calc((100cqi - (var(--n) - 1) * var(--ui-otp-gap) - var(--sep-w)) / var(--n)));
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--ui-otp-gap);
}
.ui-otp__box {
  position: relative;
  display: grid;
  place-items: center;
  flex: none;
  width: var(--size);
  height: calc(var(--size) * 1.18);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.24);
  background: var(--ui-otp-bg);
  box-shadow: inset 0 0 0 1px var(--ui-otp-line);
  font-size: calc(var(--size) * 0.46);
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--ui-otp-ink);
  transition: box-shadow 220ms ease, background-color 220ms ease, transform 380ms var(--ui-otp-ease), opacity 260ms ease;
}
.ui-otp__box[data-filled] { background: var(--ui-otp-card); box-shadow: inset 0 0 0 1px var(--ui-otp-line-strong); }
.ui-otp__sep { flex: none; width: 10px; height: 2px; border-radius: 1px; background: var(--ui-otp-faint); transition: opacity 200ms ease; }

/* Digits pop in \u2013 a small lift out of a blur, no bounce */
.ui-otp__char { display: block; animation: ui-otp-pop 280ms var(--ui-otp-ease) both; }
.ui-otp__slots[data-clearing] .ui-otp__char { animation: ui-otp-out 240ms ease both; animation-delay: calc((var(--n) - var(--i)) * 22ms) !important; }

/* One ring glides from box to box; its caret blinks softly in an empty box */
.ui-otp__ring {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  border-radius: calc(var(--size) * 0.24);
  box-shadow: inset 0 0 0 1.5px var(--ui-otp-ink), 0 0 0 4px var(--ui-otp-halo);
  opacity: 0;
  pointer-events: none;
  transition: transform 260ms var(--ui-otp-ease), width 260ms var(--ui-otp-ease), opacity 180ms ease, box-shadow 220ms ease;
}
.ui-otp__ring[data-show] { opacity: 1; }
.ui-otp__caret { width: 1.5px; height: 40%; border-radius: 1px; background: var(--ui-otp-ink); opacity: 0; }
.ui-otp__caret[data-show] { animation: ui-otp-blink 1.1s ease-in-out infinite; }

/* The real input lies over the boxes, invisible \u2013 it takes taps, keys, paste and SMS autofill */
.ui-otp__input {
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
.ui-otp__input::selection { background: transparent; }
.ui-otp__input:-webkit-autofill { -webkit-box-shadow: 0 0 0 100px transparent inset; transition: background-color 9999s; }
.ui-otp__input[readonly], .ui-otp__input:disabled { cursor: default; }
/* Keyboard focus is shown by the ring \u2013 a thin outline joins it for keyboard users */
.ui-otp__slots:has(.ui-otp__input:focus-visible) .ui-otp__ring { box-shadow: inset 0 0 0 1.5px var(--ui-otp-ink), 0 0 0 4px var(--ui-otp-halo), 0 0 0 6px var(--ui-otp-focus); }

/* Verifying: a soft light passes over the boxes, one after another */
.ui-otp__box::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 20%, var(--ui-otp-shine) 50%, transparent 80%);
  transform: translateX(-120%);
  opacity: 0;
  pointer-events: none;
}
.ui-otp[data-status="verifying"] .ui-otp__box::after { opacity: 1; animation: ui-otp-shimmer 1.3s ease-in-out infinite; animation-delay: calc(var(--i) * 70ms); }
.ui-otp[data-status="verifying"] .ui-otp__box { background: var(--ui-otp-wait); box-shadow: inset 0 0 0 1px var(--ui-otp-line); color: var(--ui-otp-text); }

/* Error: only the borders turn red */
.ui-otp[data-error] .ui-otp__box { box-shadow: inset 0 0 0 1px var(--ui-otp-danger-line); }
.ui-otp[data-error] .ui-otp__ring { box-shadow: inset 0 0 0 1.5px var(--ui-otp-danger), 0 0 0 4px var(--ui-otp-danger-halo); }
.ui-otp[data-error] .ui-otp__caret { background: var(--ui-otp-danger); }

/* Success: the boxes slide together and fade while one frame morphs into the "Verified" pill */
.ui-otp__pill {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  place-items: center;
  height: calc(var(--size) * 1.18);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.24);
  background: var(--ui-otp-card);
  box-shadow: inset 0 0 0 1px var(--ui-otp-line-strong);
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 300ms var(--ui-otp-ease), height 300ms var(--ui-otp-ease), border-radius 300ms var(--ui-otp-ease), opacity 160ms ease 140ms;
}
.ui-otp__pill-inner {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 15px 0 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  color: var(--ui-otp-ink);
  opacity: 0;
  transition: opacity 160ms ease;
}
.ui-otp__check { flex: none; width: 17px; height: 17px; fill: none; stroke: var(--ui-otp-success); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
.ui-otp__check path { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 120ms ease; }
.ui-otp[data-status="success"] .ui-otp__box {
  transform: translateX(calc(((var(--n) - 1) / 2 - var(--i)) * (var(--size) + var(--ui-otp-gap)))) scale(0.7);
  opacity: 0;
  transition: transform 340ms var(--ui-otp-ease), opacity 220ms ease 120ms;
}
.ui-otp[data-status="success"] .ui-otp__sep { opacity: 0; }
/* The pill settles at a compact height, not the height of the boxes */
.ui-otp[data-status="success"] .ui-otp__pill {
  height: 36px;
  border-radius: 999px;
  opacity: 1;
  transition: width 460ms var(--ui-otp-ease) 220ms, height 460ms var(--ui-otp-ease) 220ms, border-radius 460ms var(--ui-otp-ease) 220ms, opacity 160ms ease 120ms;
}
.ui-otp[data-status="success"] .ui-otp__pill-inner { opacity: 1; transition: opacity 240ms ease 460ms; }
.ui-otp[data-status="success"] .ui-otp__check path { stroke-dashoffset: 0; transition: stroke-dashoffset 380ms var(--ui-otp-ease) 560ms; }

/* The error message grows in below, then folds away */
.ui-otp__msg { display: grid; grid-template-rows: 0fr; width: 100%; transition: grid-template-rows 300ms var(--ui-otp-ease); }
.ui-otp__msg[data-show] { grid-template-rows: 1fr; }
.ui-otp__msg-inner { min-height: 0; overflow: hidden; }
.ui-otp__msg-text {
  margin: 0;
  padding-top: 10px;
  font-size: 13px;
  text-wrap: balance;
  color: var(--ui-otp-text);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 200ms ease, transform 300ms var(--ui-otp-ease);
}
.ui-otp__msg[data-show] .ui-otp__msg-text { opacity: 1; transform: none; transition-delay: 60ms; }
/* The icon sits inline, so a wrapped message stays centered with it */
.ui-otp__alert { display: inline-block; width: 15px; height: 15px; margin-right: 6px; vertical-align: -3px; fill: none; stroke: var(--ui-otp-danger); stroke-width: 2; stroke-linecap: round; }

/* Resend: a countdown that turns into a button */
.ui-otp__resend { margin-top: 14px; font-size: 13px; font-variant-numeric: tabular-nums; color: var(--ui-otp-muted); transition: opacity 220ms ease; }
.ui-otp__resend[data-hidden] { opacity: 0; visibility: hidden; transition: opacity 220ms ease, visibility 0s 220ms; }
.ui-otp__swap { display: inline-block; animation: ui-otp-in 260ms var(--ui-otp-ease) both; }
.ui-otp__wait { color: var(--ui-otp-text); }
.ui-otp__time { display: inline-block; min-width: 3.4ch; text-align: left; }
.ui-otp__resend-btn {
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-weight: 500;
  color: var(--ui-otp-accent);
  cursor: pointer;
}
.ui-otp__resend-btn::before { content: ""; position: absolute; inset: -6px -8px; border-radius: 8px; }
.ui-otp__resend-btn:hover { text-decoration: underline; text-underline-offset: 3px; }
.ui-otp__resend-btn:focus-visible { outline: 2px solid var(--ui-otp-focus); outline-offset: 3px; border-radius: 4px; }
.ui-otp__resend-btn:disabled { color: var(--ui-otp-muted); cursor: default; text-decoration: none; }
.ui-otp__live { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@keyframes ui-otp-pop { from { opacity: 0; transform: translateY(4px) scale(0.7); filter: blur(3px); } to { opacity: 1; transform: none; filter: none; } }
@keyframes ui-otp-out { to { opacity: 0; transform: translateY(-4px) scale(0.8); filter: blur(2px); } }
@keyframes ui-otp-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes ui-otp-shimmer { 0% { transform: translateX(-120%); } 55%, 100% { transform: translateX(120%); } }
@keyframes ui-otp-in { from { opacity: 0; transform: translateY(3px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Narrow containers (phones): tighter gaps, the question before "Resend" drops first */
@container (max-width: 360px) {
  .ui-otp__slots { --ui-otp-gap: 6px; }
  .ui-otp__sep { width: 8px; }
}
@container (max-width: 250px) {
  .ui-otp__resend-q { display: none; }
}
/* Touch screens: a bigger target for Resend */
@media (hover: none) and (pointer: coarse) {
  .ui-otp__resend-btn::before { inset: -11px -12px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-otp *, .ui-otp *::before, .ui-otp *::after { animation: none !important; transition: none !important; }
  .ui-otp__caret[data-show] { opacity: 1; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-otp {
  --ui-otp-bg: #1d1d20;
  --ui-otp-card: #19191b;
  --ui-otp-line: #2a2a2e;
  --ui-otp-line-strong: #3a3a40;
  --ui-otp-ink: #ededed;
  --ui-otp-text: #c8c8cc;
  --ui-otp-muted: #8b8b92;
  --ui-otp-faint: #4a4a50;
  --ui-otp-halo: rgba(255, 255, 255, 0.08);
  --ui-otp-wait: #1d1d20;
  --ui-otp-shine: rgba(255, 255, 255, 0.07);
  --ui-otp-danger: #ff6369;
  --ui-otp-danger-line: rgba(255, 99, 105, 0.55);
  --ui-otp-danger-halo: rgba(255, 99, 105, 0.14);
  --ui-otp-success: #4cc38a;
  --ui-otp-accent: #6d8bff;
  --ui-otp-focus: rgba(255, 255, 255, 0.3);
}
`,U="482913",lt="481973",At=r=>r>0?`That code didn't work. ${r} ${r===1?"try":"tries"} left.`:"That code didn't work. Request a new code.";function dt(){let[r,f]=(0,a.useState)(""),[m,d]=(0,a.useState)("idle"),[L,w]=(0,a.useState)(3),k=(0,a.useRef)([]),s=(0,a.useRef)(!0),c=(p,h)=>k.current.push(window.setTimeout(h,p)),T=()=>{k.current.forEach(clearTimeout),k.current=[]},b=p=>{d("verifying"),c(1e3,()=>{p===U?(d("success"),c(3200,()=>{f(""),d("idle"),w(3)})):(w(h=>Math.max(0,h-1)),d("error"))})};(0,a.useEffect)(()=>{let p=700,h=g=>{for(let v=1;v<=g.length;v++){let j=g.slice(0,v);c(p,()=>f(j)),p+=150}};return h(lt),c(p+150,()=>b(lt)),p+=2850,c(p,()=>d("idle")),h(U),c(p+150,()=>{s.current=!1,b(U)}),T},[]);let x=()=>{s.current&&(s.current=!1,T(),f(""),d("idle"))};return(0,i.jsx)("div",{className:"otp-demo",onPointerDownCapture:x,onKeyDownCapture:x,onFocusCapture:x,children:(0,i.jsxs)("div",{className:"otp-demo__tray",children:[(0,i.jsxs)("div",{className:"otp-demo__card",children:[(0,i.jsx)("span",{className:"otp-demo__icon","aria-hidden":"true",children:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,i.jsx)("rect",{x:"3.5",y:"5.5",width:"17",height:"13",rx:"2.5"}),(0,i.jsx)("path",{d:"M4.5 7.5l7.5 5.5 7.5-5.5"})]})}),(0,i.jsx)("h3",{className:"otp-demo__title",children:"Check your email"}),(0,i.jsxs)("p",{className:"otp-demo__text",children:["We sent a code to ",(0,i.jsx)("strong",{children:"maya@acme.com"})]}),(0,Mt.jsx)(Ct,{className:"otp-demo__otp",separator:!0,align:"center",value:r,status:m,errorMessage:At(L),onChange:p=>{f(p),m==="error"&&p&&d("idle")},onComplete:b,onResend:()=>w(3),resendIn:30})]}),(0,i.jsxs)("p",{className:"otp-demo__hint",children:["Demo code: ",(0,i.jsxs)("span",{children:["482","\xA0","913"]})]})]})})}(0,ft.createRoot)(document.getElementById("root")).render(ct.default.createElement(dt));
