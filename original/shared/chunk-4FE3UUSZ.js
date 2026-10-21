import{a as se}from"./chunk-BBLBVXTT.js";import{a as ne}from"./chunk-H7MXNYVQ.js";var a=se(),i=ne(),we=r=>`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,ke=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,pe={check:"M5.5 12.5l4 4L18.5 8",alert:"M12 8v4.5M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"};function je({length:r=6,separator:h=!1,numeric:f=!0,value:d,defaultValue:X="",onChange:y,onComplete:w,status:n="idle",errorMessage:c="That code didn't work. Try again.",clearOnError:S=!0,successLabel:b="Verified",onResend:_,resendIn:p=30,align:m="start",disabled:x=!1,autoFocus:v=!1,label:L="Verification code",className:le}){let k=e=>{let t="";for(let o of e){let u=f?/[0-9]/.test(o)?o:"":/[a-z0-9]/i.test(o)?o.toUpperCase():"";u&&t.length<r&&(t+=u)}return t},[de,ce]=(0,a.useState)(()=>k(X)),s=k(d??de),[H,q]=(0,a.useState)(Math.min(s.length,r-1)),[U,P]=(0,a.useState)(!1),[G,B]=(0,a.useState)(!1),[he,J]=(0,a.useState)(!1),[Q,Z]=(0,a.useState)(!1),[M,ee]=(0,a.useState)(p),[fe,j]=(0,a.useState)(""),W=(0,a.useRef)(null),T=(0,a.useRef)(null),I=(0,a.useRef)(null),$=(0,a.useRef)(null),K=(0,a.useRef)(null),C=(0,a.useRef)([]),te=(0,a.useRef)([]),ie=(0,a.useId)(),O=(0,a.useRef)(s),ae=(0,a.useRef)([]),oe=(0,a.useRef)([]),me=(0,a.useRef)(0);if(O.current!==s){let e=O.current,t=[...s].map((g,R)=>g!==e[R]),o=t.indexOf(!0),u=t.filter(Boolean).length>1;t.forEach((g,R)=>{g&&(ae.current[R]=++me.current,oe.current[R]=u?(R-o)*45:0)}),O.current=s}let l=Math.min(H,s.length,r-1),N=h===!0?Math.floor(r/2):typeof h=="number"?h:0,E=n==="verifying"||n==="success",V=E||Q||x,D=n==="error"&&G,xe=!E&&!x&&(U||s.length>0&&s.length<r),A=(e,t,o=!0)=>{d===void 0&&ce(e),e!==s&&y?.(e),q(Math.max(0,Math.min(t,e.length,r-1))),o&&(G&&e.length&&B(!1),e.length===r&&e!==s&&w?.(e))},ge=e=>{if(V)return;let t=e.value,o=e.selectionStart??t.length,u=k(t),g=k(t.slice(0,o)).length;if(u===s){e.value=s,z();return}A(u,g)},_e=e=>{if(e.preventDefault(),V)return;let t=k(e.clipboardData.getData("text"));if(!t)return;if(t.length>=r)return A(t.slice(0,r),r-1);let o=(s.slice(0,l)+t+s.slice(l+t.length)).slice(0,r);A(o,l+t.length)},be=e=>{let t=Math.min(s.length,r-1),o={ArrowLeft:l-1,ArrowRight:l+1,Home:0,End:t,ArrowUp:0,ArrowDown:t};e.key in o&&!e.shiftKey&&!e.metaKey&&(e.preventDefault(),q(Math.max(0,Math.min(o[e.key],t))))},ve=e=>{let t=C.current.findIndex(o=>o&&e<o.getBoundingClientRect().right+4);t<0&&(t=r-1),q(Math.min(t,s.length,r-1)),requestAnimationFrame(z)},z=()=>{let e=W.current;if(!e||document.activeElement!==e)return;let t=Math.min(H,s.length,r-1);t<s.length?e.setSelectionRange(t,t+1):e.setSelectionRange(t,t)};(0,a.useLayoutEffect)(z),(0,a.useEffect)(()=>{v&&W.current?.focus({preventScroll:!0})},[v]),(0,a.useLayoutEffect)(()=>{let e=I.current,t=C.current[l];if(e&&t){let g=!e.dataset.ready;g&&(e.style.transition="none"),e.style.width=`${t.offsetWidth}px`,e.style.height=`${t.offsetHeight}px`,e.style.transform=`translate(${t.offsetLeft}px, ${t.offsetTop}px)`,g&&(e.dataset.ready="1",e.offsetWidth,e.style.transition="")}let o=$.current,u=T.current;o&&u&&K.current&&(o.style.width=`${n==="success"?K.current.offsetWidth:u.offsetWidth}px`)}),(0,a.useEffect)(()=>{let e=T.current;if(!e)return;let t=new ResizeObserver(()=>{let o=I.current,u=C.current[l];o&&u&&(o.style.width=`${u.offsetWidth}px`,o.style.height=`${u.offsetHeight}px`,o.style.transform=`translate(${u.offsetLeft}px, ${u.offsetTop}px)`),$.current&&n!=="success"&&($.current.style.width=`${e.offsetWidth}px`)});return t.observe(e),()=>t.disconnect()},[l,n]);let re=(0,a.useRef)(n);(0,a.useEffect)(()=>{let e=re.current;if(re.current=n,n!==e){if(n==="verifying"&&j("Verifying code"),n==="success"&&j(b),n!=="error"){B(!1);return}B(!0),j(typeof c=="string"?c:"That code didn't work"),ke()||T.current?.animate([{transform:"none"},{transform:"translateX(-6px)"},{transform:"translateX(5px)"},{transform:"translateX(-3px)"},{transform:"translateX(2px)"},{transform:"none"}],{duration:420,easing:"ease-out"}),S&&(Z(!0),te.current.push(window.setTimeout(()=>J(!0),700),window.setTimeout(()=>{J(!1),Z(!1),A("",0,!1)},980)))}},[n]),(0,a.useEffect)(()=>()=>te.current.forEach(clearTimeout),[]),(0,a.useEffect)(()=>{if(M<=0){_&&p>0&&j("You can resend the code now");return}let e=window.setTimeout(()=>ee(t=>t-1),1e3);return()=>clearTimeout(e)},[M]);let ye=()=>{_?.(),ee(p),j("A new code is on its way")},F=[];for(let e=0;e<r;e++){N>0&&N<r&&e===N&&F.push((0,i.jsx)("span",{className:"ui-otp__sep"},"sep"));let t=s[e];F.push((0,i.jsx)("span",{ref:o=>{C.current[e]=o},className:"ui-otp__box","data-filled":t?"":void 0,style:{"--i":e},children:t&&(0,i.jsx)("span",{className:"ui-otp__char",style:{animationDelay:`${oe.current[e]??0}ms`},children:t},ae.current[e])},e))}return(0,i.jsxs)("div",{className:["ui-otp",le].filter(Boolean).join(" "),"data-status":n,"data-error":D||void 0,"data-align":m,"data-disabled":x||void 0,children:[(0,i.jsx)("style",{href:"ui-otp-input",precedence:"default",children:Ne}),(0,i.jsx)("div",{className:"ui-otp__field",children:(0,i.jsxs)("div",{ref:T,className:"ui-otp__slots","data-clearing":he||void 0,style:{"--n":r,"--sep-w":N>0&&N<r?"calc(var(--ui-otp-gap) + 10px)":"0px"},children:[F,(0,i.jsx)("span",{ref:I,className:"ui-otp__ring","data-show":xe||void 0,"aria-hidden":"true",children:(0,i.jsx)("span",{className:"ui-otp__caret","data-show":U&&!s[l]&&!V||void 0})}),(0,i.jsx)("span",{ref:$,className:"ui-otp__pill","aria-hidden":"true",children:(0,i.jsxs)("span",{ref:K,className:"ui-otp__pill-inner",children:[(0,i.jsx)("svg",{viewBox:"0 0 24 24",className:"ui-otp__check","aria-hidden":"true",children:(0,i.jsx)("path",{d:pe.check,pathLength:1})}),b]})}),(0,i.jsx)("input",{ref:W,className:"ui-otp__input",type:"text",value:s,inputMode:f?"numeric":"text",pattern:f?"[0-9]*":void 0,autoComplete:"one-time-code",autoCapitalize:f?"off":"characters",autoCorrect:"off",spellCheck:!1,enterKeyHint:"done","aria-label":`${L}, ${r} ${f?"digits":"characters"}`,"aria-invalid":D||void 0,"aria-describedby":D?`${ie}-msg`:void 0,disabled:x,readOnly:E||Q,onChange:e=>ge(e.currentTarget),onPaste:_e,onKeyDown:be,onFocus:()=>{P(!0),requestAnimationFrame(z)},onBlur:()=>P(!1),onPointerUp:e=>ve(e.clientX),onSelect:e=>{let t=e.currentTarget,o=l<s.length?[l,l+1]:[l,l];(t.selectionStart!==o[0]||t.selectionEnd!==o[1])&&z()}})]})}),(0,i.jsx)("div",{className:"ui-otp__msg","data-show":D||void 0,children:(0,i.jsx)("div",{className:"ui-otp__msg-inner",children:(0,i.jsxs)("p",{id:`${ie}-msg`,className:"ui-otp__msg-text",children:[(0,i.jsx)("svg",{viewBox:"0 0 24 24",className:"ui-otp__alert","aria-hidden":"true",children:(0,i.jsx)("path",{d:pe.alert})}),(0,i.jsx)("span",{children:c})]})})}),_&&(0,i.jsxs)("div",{className:"ui-otp__resend","data-hidden":n==="success"||void 0,children:[(0,i.jsx)("span",{className:"ui-otp__resend-q",children:"Didn't get a code?"})," ",M>0?(0,i.jsxs)("span",{className:"ui-otp__swap ui-otp__wait",children:["Resend in","\xA0",(0,i.jsx)("span",{className:"ui-otp__time",children:we(M)})]},"wait"):(0,i.jsx)("button",{type:"button",className:"ui-otp__swap ui-otp__resend-btn",onClick:ye,disabled:x||E,children:"Resend code"},"go")]}),(0,i.jsx)("span",{className:"ui-otp__live","aria-live":"polite",children:fe})]})}var Ne=`
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
`,Y="482913",ue="481973",ze=r=>r>0?`That code didn't work. ${r} ${r===1?"try":"tries"} left.`:"That code didn't work. Request a new code.";function Me(){let[r,h]=(0,a.useState)(""),[f,d]=(0,a.useState)("idle"),[X,y]=(0,a.useState)(3),w=(0,a.useRef)([]),n=(0,a.useRef)(!0),c=(p,m)=>w.current.push(window.setTimeout(m,p)),S=()=>{w.current.forEach(clearTimeout),w.current=[]},b=p=>{d("verifying"),c(1e3,()=>{p===Y?(d("success"),c(3200,()=>{h(""),d("idle"),y(3)})):(y(m=>Math.max(0,m-1)),d("error"))})};(0,a.useEffect)(()=>{let p=700,m=x=>{for(let v=1;v<=x.length;v++){let L=x.slice(0,v);c(p,()=>h(L)),p+=150}};return m(ue),c(p+150,()=>b(ue)),p+=2850,c(p,()=>d("idle")),m(Y),c(p+150,()=>{n.current=!1,b(Y)}),S},[]);let _=()=>{n.current&&(n.current=!1,S(),h(""),d("idle"))};return(0,i.jsx)("div",{className:"otp-demo",onPointerDownCapture:_,onKeyDownCapture:_,onFocusCapture:_,children:(0,i.jsxs)("div",{className:"otp-demo__tray",children:[(0,i.jsxs)("div",{className:"otp-demo__card",children:[(0,i.jsx)("span",{className:"otp-demo__icon","aria-hidden":"true",children:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,i.jsx)("rect",{x:"3.5",y:"5.5",width:"17",height:"13",rx:"2.5"}),(0,i.jsx)("path",{d:"M4.5 7.5l7.5 5.5 7.5-5.5"})]})}),(0,i.jsx)("h3",{className:"otp-demo__title",children:"Check your email"}),(0,i.jsxs)("p",{className:"otp-demo__text",children:["We sent a code to ",(0,i.jsx)("strong",{children:"maya@acme.com"})]}),(0,i.jsx)(je,{className:"otp-demo__otp",separator:!0,align:"center",value:r,status:f,errorMessage:ze(X),onChange:p=>{h(p),f==="error"&&p&&d("idle")},onComplete:b,onResend:()=>y(3),resendIn:30})]}),(0,i.jsxs)("p",{className:"otp-demo__hint",children:["Demo code: ",(0,i.jsxs)("span",{children:["482","\xA0","913"]})]})]})})}export{Me as a};
