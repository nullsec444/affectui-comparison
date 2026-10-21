import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t(),i=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`,a=()=>typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,o={check:`M5.5 12.5l4 4L18.5 8`,alert:`M12 8v4.5M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z`};function s({length:e=6,separator:t=!1,numeric:s=!0,value:l,defaultValue:u=``,onChange:ee,onComplete:d,status:f=`idle`,errorMessage:p=`That code didn't work. Try again.`,clearOnError:m=!0,successLabel:h=`Verified`,onResend:g,resendIn:_=30,align:te=`start`,disabled:v=!1,autoFocus:y=!1,label:ne=`Verification code`,className:re}){let b=t=>{let n=``;for(let r of t){let t=s?/[0-9]/.test(r)?r:``:/[a-z0-9]/i.test(r)?r.toUpperCase():``;t&&n.length<e&&(n+=t)}return n},[ie,ae]=(0,n.useState)(()=>b(u)),x=b(l??ie),[S,C]=(0,n.useState)(Math.min(x.length,e-1)),[w,T]=(0,n.useState)(!1),[E,D]=(0,n.useState)(!1),[oe,O]=(0,n.useState)(!1),[k,A]=(0,n.useState)(!1),[j,M]=(0,n.useState)(_),[se,N]=(0,n.useState)(``),P=(0,n.useRef)(null),F=(0,n.useRef)(null),I=(0,n.useRef)(null),L=(0,n.useRef)(null),R=(0,n.useRef)(null),z=(0,n.useRef)([]),B=(0,n.useRef)([]),V=(0,n.useId)(),H=(0,n.useRef)(x),U=(0,n.useRef)([]),W=(0,n.useRef)([]),ce=(0,n.useRef)(0);if(H.current!==x){let e=H.current,t=[...x].map((t,n)=>t!==e[n]),n=t.indexOf(!0),r=t.filter(Boolean).length>1;t.forEach((e,t)=>{e&&(U.current[t]=++ce.current,W.current[t]=r?(t-n)*45:0)}),H.current=x}let G=Math.min(S,x.length,e-1),K=t===!0?Math.floor(e/2):typeof t==`number`?t:0,q=f===`verifying`||f===`success`,J=q||k||v,Y=f===`error`&&E,le=!q&&!v&&(w||x.length>0&&x.length<e),X=(t,n,r=!0)=>{l===void 0&&ae(t),t!==x&&ee?.(t),C(Math.max(0,Math.min(n,t.length,e-1))),r&&(E&&t.length&&D(!1),t.length===e&&t!==x&&d?.(t))},ue=e=>{if(J)return;let t=e.value,n=e.selectionStart??t.length,r=b(t),i=b(t.slice(0,n)).length;if(r===x){e.value=x,Z();return}X(r,i)},de=t=>{if(t.preventDefault(),J)return;let n=b(t.clipboardData.getData(`text`));if(!n)return;if(n.length>=e)return X(n.slice(0,e),e-1);let r=(x.slice(0,G)+n+x.slice(G+n.length)).slice(0,e);X(r,G+n.length)},fe=t=>{let n=Math.min(x.length,e-1),r={ArrowLeft:G-1,ArrowRight:G+1,Home:0,End:n,ArrowUp:0,ArrowDown:n};t.key in r&&!t.shiftKey&&!t.metaKey&&(t.preventDefault(),C(Math.max(0,Math.min(r[t.key],n))))},pe=t=>{let n=z.current.findIndex(e=>e&&t<e.getBoundingClientRect().right+4);n<0&&(n=e-1),C(Math.min(n,x.length,e-1)),requestAnimationFrame(Z)},Z=()=>{let t=P.current;if(!t||document.activeElement!==t)return;let n=Math.min(S,x.length,e-1);n<x.length?t.setSelectionRange(n,n+1):t.setSelectionRange(n,n)};(0,n.useLayoutEffect)(Z),(0,n.useEffect)(()=>{y&&P.current?.focus({preventScroll:!0})},[y]),(0,n.useLayoutEffect)(()=>{let e=I.current,t=z.current[G];if(e&&t){let n=!e.dataset.ready;n&&(e.style.transition=`none`),e.style.width=`${t.offsetWidth}px`,e.style.height=`${t.offsetHeight}px`,e.style.transform=`translate(${t.offsetLeft}px, ${t.offsetTop}px)`,n&&(e.dataset.ready=`1`,e.offsetWidth,e.style.transition=``)}let n=L.current,r=F.current;n&&r&&R.current&&(n.style.width=`${f===`success`?R.current.offsetWidth:r.offsetWidth}px`)}),(0,n.useEffect)(()=>{let e=F.current;if(!e)return;let t=new ResizeObserver(()=>{let t=I.current,n=z.current[G];t&&n&&(t.style.width=`${n.offsetWidth}px`,t.style.height=`${n.offsetHeight}px`,t.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`),L.current&&f!==`success`&&(L.current.style.width=`${e.offsetWidth}px`)});return t.observe(e),()=>t.disconnect()},[G,f]);let Q=(0,n.useRef)(f);(0,n.useEffect)(()=>{let e=Q.current;if(Q.current=f,f!==e){if(f===`verifying`&&N(`Verifying code`),f===`success`&&N(h),f!==`error`){D(!1);return}D(!0),N(typeof p==`string`?p:`That code didn't work`),a()||F.current?.animate([{transform:`none`},{transform:`translateX(-6px)`},{transform:`translateX(5px)`},{transform:`translateX(-3px)`},{transform:`translateX(2px)`},{transform:`none`}],{duration:420,easing:`ease-out`}),m&&(A(!0),B.current.push(window.setTimeout(()=>O(!0),700),window.setTimeout(()=>{O(!1),A(!1),X(``,0,!1)},980)))}},[f]),(0,n.useEffect)(()=>()=>B.current.forEach(clearTimeout),[]),(0,n.useEffect)(()=>{if(j<=0){g&&_>0&&N(`You can resend the code now`);return}let e=window.setTimeout(()=>M(e=>e-1),1e3);return()=>clearTimeout(e)},[j]);let me=()=>{g?.(),M(_),N(`A new code is on its way`)},$=[];for(let t=0;t<e;t++){K>0&&K<e&&t===K&&$.push((0,r.jsx)(`span`,{className:`ui-otp__sep`},`sep`));let n=x[t];$.push((0,r.jsx)(`span`,{ref:e=>{z.current[t]=e},className:`ui-otp__box`,"data-filled":n?``:void 0,style:{"--i":t},children:n&&(0,r.jsx)(`span`,{className:`ui-otp__char`,style:{animationDelay:`${W.current[t]??0}ms`},children:n},U.current[t])},t))}return(0,r.jsxs)(`div`,{className:[`ui-otp`,re].filter(Boolean).join(` `),"data-status":f,"data-error":Y||void 0,"data-align":te,"data-disabled":v||void 0,children:[(0,r.jsx)(`style`,{href:`ui-otp-input`,precedence:`default`,children:c}),(0,r.jsx)(`div`,{className:`ui-otp__field`,children:(0,r.jsxs)(`div`,{ref:F,className:`ui-otp__slots`,"data-clearing":oe||void 0,style:{"--n":e,"--sep-w":K>0&&K<e?`calc(var(--ui-otp-gap) + 10px)`:`0px`},children:[$,(0,r.jsx)(`span`,{ref:I,className:`ui-otp__ring`,"data-show":le||void 0,"aria-hidden":`true`,children:(0,r.jsx)(`span`,{className:`ui-otp__caret`,"data-show":w&&!x[G]&&!J||void 0})}),(0,r.jsx)(`span`,{ref:L,className:`ui-otp__pill`,"aria-hidden":`true`,children:(0,r.jsxs)(`span`,{ref:R,className:`ui-otp__pill-inner`,children:[(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`ui-otp__check`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:o.check,pathLength:1})}),h]})}),(0,r.jsx)(`input`,{ref:P,className:`ui-otp__input`,type:`text`,value:x,inputMode:s?`numeric`:`text`,pattern:s?`[0-9]*`:void 0,autoComplete:`one-time-code`,autoCapitalize:s?`off`:`characters`,autoCorrect:`off`,spellCheck:!1,enterKeyHint:`done`,"aria-label":`${ne}, ${e} ${s?`digits`:`characters`}`,"aria-invalid":Y||void 0,"aria-describedby":Y?`${V}-msg`:void 0,disabled:v,readOnly:q||k,onChange:e=>ue(e.currentTarget),onPaste:de,onKeyDown:fe,onFocus:()=>{T(!0),requestAnimationFrame(Z)},onBlur:()=>T(!1),onPointerUp:e=>pe(e.clientX),onSelect:e=>{let t=e.currentTarget,n=G<x.length?[G,G+1]:[G,G];(t.selectionStart!==n[0]||t.selectionEnd!==n[1])&&Z()}})]})}),(0,r.jsx)(`div`,{className:`ui-otp__msg`,"data-show":Y||void 0,children:(0,r.jsx)(`div`,{className:`ui-otp__msg-inner`,children:(0,r.jsxs)(`p`,{id:`${V}-msg`,className:`ui-otp__msg-text`,children:[(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`ui-otp__alert`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:o.alert})}),(0,r.jsx)(`span`,{children:p})]})})}),g&&(0,r.jsxs)(`div`,{className:`ui-otp__resend`,"data-hidden":f===`success`||void 0,children:[(0,r.jsx)(`span`,{className:`ui-otp__resend-q`,children:`Didn't get a code?`}),` `,j>0?(0,r.jsxs)(`span`,{className:`ui-otp__swap ui-otp__wait`,children:[`Resend in`,`\xA0`,(0,r.jsx)(`span`,{className:`ui-otp__time`,children:i(j)})]},`wait`):(0,r.jsx)(`button`,{type:`button`,className:`ui-otp__swap ui-otp__resend-btn`,onClick:me,disabled:v||q,children:`Resend code`},`go`)]}),(0,r.jsx)(`span`,{className:`ui-otp__live`,"aria-live":`polite`,children:se})]})}var c=`
/* Colors, size and motion as variables – override them on .ui-otp */
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

/* Digits pop in – a small lift out of a blur, no bounce */
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

/* The real input lies over the boxes, invisible – it takes taps, keys, paste and SMS autofill */
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
/* Keyboard focus is shown by the ring – a thin outline joins it for keyboard users */
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
`,l=`482913`,u=`481973`,ee=e=>e>0?`That code didn't work. ${e} ${e===1?`try`:`tries`} left.`:`That code didn't work. Request a new code.`;function d(){let[e,t]=(0,n.useState)(``),[i,a]=(0,n.useState)(`idle`),[o,c]=(0,n.useState)(3),d=(0,n.useRef)([]),f=(0,n.useRef)(!0),p=(e,t)=>d.current.push(window.setTimeout(t,e)),m=()=>{d.current.forEach(clearTimeout),d.current=[]},h=e=>{a(`verifying`),p(1e3,()=>{e===l?(a(`success`),p(3200,()=>{t(``),a(`idle`),c(3)})):(c(e=>Math.max(0,e-1)),a(`error`))})};(0,n.useEffect)(()=>{let e=700,n=n=>{for(let r=1;r<=n.length;r++){let i=n.slice(0,r);p(e,()=>t(i)),e+=150}};return n(u),p(e+150,()=>h(u)),e+=2850,p(e,()=>a(`idle`)),n(l),p(e+150,()=>{f.current=!1,h(l)}),m},[]);let g=()=>{f.current&&(f.current=!1,m(),t(``),a(`idle`))};return(0,r.jsx)(`div`,{className:`otp-demo`,onPointerDownCapture:g,onKeyDownCapture:g,onFocusCapture:g,children:(0,r.jsxs)(`div`,{className:`otp-demo__tray`,children:[(0,r.jsxs)(`div`,{className:`otp-demo__card`,children:[(0,r.jsx)(`span`,{className:`otp-demo__icon`,"aria-hidden":`true`,children:(0,r.jsxs)(`svg`,{viewBox:`0 0 24 24`,children:[(0,r.jsx)(`rect`,{x:`3.5`,y:`5.5`,width:`17`,height:`13`,rx:`2.5`}),(0,r.jsx)(`path`,{d:`M4.5 7.5l7.5 5.5 7.5-5.5`})]})}),(0,r.jsx)(`h3`,{className:`otp-demo__title`,children:`Check your email`}),(0,r.jsxs)(`p`,{className:`otp-demo__text`,children:[`We sent a code to `,(0,r.jsx)(`strong`,{children:`maya@acme.com`})]}),(0,r.jsx)(s,{className:`otp-demo__otp`,separator:!0,align:`center`,value:e,status:i,errorMessage:ee(o),onChange:e=>{t(e),i===`error`&&e&&a(`idle`)},onComplete:h,onResend:()=>c(3),resendIn:30})]}),(0,r.jsxs)(`p`,{className:`otp-demo__hint`,children:[`Demo code: `,(0,r.jsxs)(`span`,{children:[`482`,`\xA0`,`913`]})]})]})})}export{d as default};