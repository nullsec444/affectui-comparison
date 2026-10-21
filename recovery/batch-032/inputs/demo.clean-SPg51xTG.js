import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t(),i=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`,a=()=>typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,o={check:`M5.5 12.5l4 4L18.5 8`,alert:`M12 8v4.5M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z`};function s({length:e=6,separator:t=!1,numeric:s=!0,value:l,defaultValue:u=``,onChange:ee,onComplete:d,status:f=`idle`,errorMessage:p=`That code didn't work. Try again.`,clearOnError:m=!0,successLabel:h=`Verified`,onResend:g,resendIn:_=30,align:te=`start`,disabled:v=!1,autoFocus:y=!1,label:ne=`Verification code`,className:re}){let b=t=>{let n=``;for(let r of t){let t=s?/[0-9]/.test(r)?r:``:/[a-z0-9]/i.test(r)?r.toUpperCase():``;t&&n.length<e&&(n+=t)}return n},[ie,ae]=(0,n.useState)(()=>b(u)),x=b(l??ie),[S,C]=(0,n.useState)(Math.min(x.length,e-1)),[w,T]=(0,n.useState)(!1),[E,D]=(0,n.useState)(!1),[oe,O]=(0,n.useState)(!1),[k,A]=(0,n.useState)(!1),[j,M]=(0,n.useState)(_),[se,N]=(0,n.useState)(``),P=(0,n.useRef)(null),F=(0,n.useRef)(null),I=(0,n.useRef)(null),L=(0,n.useRef)(null),R=(0,n.useRef)(null),z=(0,n.useRef)([]),B=(0,n.useRef)([]),V=(0,n.useId)(),H=(0,n.useRef)(x),U=(0,n.useRef)([]),W=(0,n.useRef)([]),ce=(0,n.useRef)(0);if(H.current!==x){let e=H.current,t=[...x].map((t,n)=>t!==e[n]),n=t.indexOf(!0),r=t.filter(Boolean).length>1;t.forEach((e,t)=>{e&&(U.current[t]=++ce.current,W.current[t]=r?(t-n)*45:0)}),H.current=x}let G=Math.min(S,x.length,e-1),K=t===!0?Math.floor(e/2):typeof t==`number`?t:0,q=f===`verifying`||f===`success`,J=q||k||v,Y=f===`error`&&E,le=!q&&!v&&(w||x.length>0&&x.length<e),X=(t,n,r=!0)=>{l===void 0&&ae(t),t!==x&&ee?.(t),C(Math.max(0,Math.min(n,t.length,e-1))),r&&(E&&t.length&&D(!1),t.length===e&&t!==x&&d?.(t))},ue=e=>{if(J)return;let t=e.value,n=e.selectionStart??t.length,r=b(t),i=b(t.slice(0,n)).length;if(r===x){e.value=x,Z();return}X(r,i)},de=t=>{if(t.preventDefault(),J)return;let n=b(t.clipboardData.getData(`text`));if(!n)return;if(n.length>=e)return X(n.slice(0,e),e-1);let r=(x.slice(0,G)+n+x.slice(G+n.length)).slice(0,e);X(r,G+n.length)},fe=t=>{let n=Math.min(x.length,e-1),r={ArrowLeft:G-1,ArrowRight:G+1,Home:0,End:n,ArrowUp:0,ArrowDown:n};t.key in r&&!t.shiftKey&&!t.metaKey&&(t.preventDefault(),C(Math.max(0,Math.min(r[t.key],n))))},pe=t=>{let n=z.current.findIndex(e=>e&&t<e.getBoundingClientRect().right+4);n<0&&(n=e-1),C(Math.min(n,x.length,e-1)),requestAnimationFrame(Z)},Z=()=>{let t=P.current;if(!t||document.activeElement!==t)return;let n=Math.min(S,x.length,e-1);n<x.length?t.setSelectionRange(n,n+1):t.setSelectionRange(n,n)};(0,n.useLayoutEffect)(Z),(0,n.useEffect)(()=>{y&&P.current?.focus({preventScroll:!0})},[y]),(0,n.useLayoutEffect)(()=>{let e=I.current,t=z.current[G];if(e&&t){let n=!e.dataset.ready;n&&(e.style.transition=`none`),e.style.width=`${t.offsetWidth}px`,e.style.height=`${t.offsetHeight}px`,e.style.transform=`translate(${t.offsetLeft}px, ${t.offsetTop}px)`,n&&(e.dataset.ready=`1`,e.offsetWidth,e.style.transition=``)}let n=L.current,r=F.current;n&&r&&R.current&&(n.style.width=`${f===`success`?R.current.offsetWidth:r.offsetWidth}px`)}),(0,n.useEffect)(()=>{let e=F.current;if(!e)return;let t=new ResizeObserver(()=>{let t=I.current,n=z.current[G];t&&n&&(t.style.width=`${n.offsetWidth}px`,t.style.height=`${n.offsetHeight}px`,t.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`),L.current&&f!==`success`&&(L.current.style.width=`${e.offsetWidth}px`)});return t.observe(e),()=>t.disconnect()},[G,f]);let Q=(0,n.useRef)(f);(0,n.useEffect)(()=>{let e=Q.current;if(Q.current=f,f!==e){if(f===`verifying`&&N(`Verifying code`),f===`success`&&N(h),f!==`error`){D(!1);return}D(!0),N(typeof p==`string`?p:`That code didn't work`),a()||F.current?.animate([{transform:`none`},{transform:`translateX(-6px)`},{transform:`translateX(5px)`},{transform:`translateX(-3px)`},{transform:`translateX(2px)`},{transform:`none`}],{duration:420,easing:`ease-out`}),m&&(A(!0),B.current.push(window.setTimeout(()=>O(!0),700),window.setTimeout(()=>{O(!1),A(!1),X(``,0,!1)},980)))}},[f]),(0,n.useEffect)(()=>()=>B.current.forEach(clearTimeout),[]),(0,n.useEffect)(()=>{if(j<=0){g&&_>0&&N(`You can resend the code now`);return}let e=window.setTimeout(()=>M(e=>e-1),1e3);return()=>clearTimeout(e)},[j]);let me=()=>{g?.(),M(_),N(`A new code is on its way`)},$=[];for(let t=0;t<e;t++){K>0&&K<e&&t===K&&$.push((0,r.jsx)(`span`,{className:`ui-otpc__sep`},`sep`));let n=x[t];$.push((0,r.jsx)(`span`,{ref:e=>{z.current[t]=e},className:`ui-otpc__box`,"data-filled":n?``:void 0,style:{"--i":t},children:n&&(0,r.jsx)(`span`,{className:`ui-otpc__char`,style:{animationDelay:`${W.current[t]??0}ms`},children:n},U.current[t])},t))}return(0,r.jsxs)(`div`,{className:[`ui-otpc`,re].filter(Boolean).join(` `),"data-status":f,"data-error":Y||void 0,"data-align":te,"data-disabled":v||void 0,children:[(0,r.jsx)(`style`,{href:`ui-otp-input-clean`,precedence:`default`,children:c}),(0,r.jsx)(`div`,{className:`ui-otpc__field`,children:(0,r.jsxs)(`div`,{ref:F,className:`ui-otpc__slots`,"data-clearing":oe||void 0,style:{"--n":e,"--sep-w":K>0&&K<e?`calc(var(--ui-otpc-gap) + 8px)`:`0px`},children:[$,(0,r.jsx)(`span`,{ref:I,className:`ui-otpc__ring`,"data-show":le||void 0,"aria-hidden":`true`,children:(0,r.jsx)(`span`,{className:`ui-otpc__caret`,"data-show":w&&!x[G]&&!J||void 0})}),(0,r.jsx)(`span`,{ref:L,className:`ui-otpc__pill`,"aria-hidden":`true`,children:(0,r.jsxs)(`span`,{ref:R,className:`ui-otpc__pill-inner`,children:[(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`ui-otpc__check`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:o.check,pathLength:1})}),h]})}),(0,r.jsx)(`input`,{ref:P,className:`ui-otpc__input`,type:`text`,value:x,inputMode:s?`numeric`:`text`,pattern:s?`[0-9]*`:void 0,autoComplete:`one-time-code`,autoCapitalize:s?`off`:`characters`,autoCorrect:`off`,spellCheck:!1,enterKeyHint:`done`,"aria-label":`${ne}, ${e} ${s?`digits`:`characters`}`,"aria-invalid":Y||void 0,"aria-describedby":Y?`${V}-msg`:void 0,disabled:v,readOnly:q||k,onChange:e=>ue(e.currentTarget),onPaste:de,onKeyDown:fe,onFocus:()=>{T(!0),requestAnimationFrame(Z)},onBlur:()=>T(!1),onPointerUp:e=>pe(e.clientX),onSelect:e=>{let t=e.currentTarget,n=G<x.length?[G,G+1]:[G,G];(t.selectionStart!==n[0]||t.selectionEnd!==n[1])&&Z()}})]})}),(0,r.jsx)(`div`,{className:`ui-otpc__msg`,"data-show":Y||void 0,children:(0,r.jsx)(`div`,{className:`ui-otpc__msg-inner`,children:(0,r.jsxs)(`p`,{id:`${V}-msg`,className:`ui-otpc__msg-text`,children:[(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`ui-otpc__alert`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:o.alert})}),(0,r.jsx)(`span`,{children:p})]})})}),g&&(0,r.jsxs)(`div`,{className:`ui-otpc__resend`,"data-hidden":f===`success`||void 0,children:[(0,r.jsx)(`span`,{className:`ui-otpc__resend-q`,children:`Didn't get a code?`}),` `,j>0?(0,r.jsxs)(`span`,{className:`ui-otpc__swap ui-otpc__wait`,children:[`Resend in`,`\xA0`,(0,r.jsx)(`span`,{className:`ui-otpc__time`,children:i(j)})]},`wait`):(0,r.jsx)(`button`,{type:`button`,className:`ui-otpc__swap ui-otpc__resend-btn`,onClick:me,disabled:v||q,children:`Resend code`},`go`)]}),(0,r.jsx)(`span`,{className:`ui-otpc__live`,"aria-live":`polite`,children:se})]})}var c=`
/* Colors, size and motion as variables – override them on .ui-otpc */
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

/* Digits pop in – a small lift out of a blur, no bounce */
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

/* The real input lies over the cells, invisible – it takes taps, keys, paste and SMS autofill */
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

/* Error: no red strokes – the cells get a faint red fill and the digits turn red */
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
`,l=`482913`,u=`481973`,ee=e=>e>0?`That code didn't work. ${e} ${e===1?`try`:`tries`} left.`:`That code didn't work. Request a new code.`;function d(){let[e,t]=(0,n.useState)(``),[i,a]=(0,n.useState)(`idle`),[o,c]=(0,n.useState)(3),d=(0,n.useRef)([]),f=(0,n.useRef)(!0),p=(e,t)=>d.current.push(window.setTimeout(t,e)),m=()=>{d.current.forEach(clearTimeout),d.current=[]},h=e=>{a(`verifying`),p(1e3,()=>{e===l?(a(`success`),p(3200,()=>{t(``),a(`idle`),c(3)})):(c(e=>Math.max(0,e-1)),a(`error`))})};(0,n.useEffect)(()=>{let e=700,n=n=>{for(let r=1;r<=n.length;r++){let i=n.slice(0,r);p(e,()=>t(i)),e+=150}};return n(u),p(e+150,()=>h(u)),e+=2850,p(e,()=>a(`idle`)),n(l),p(e+150,()=>{f.current=!1,h(l)}),m},[]);let g=()=>{f.current&&(f.current=!1,m(),t(``),a(`idle`))};return(0,r.jsx)(`div`,{className:`otp-demo`,onPointerDownCapture:g,onKeyDownCapture:g,onFocusCapture:g,children:(0,r.jsxs)(`div`,{className:`otp-democ`,children:[(0,r.jsxs)(`div`,{className:`otp-democ__body`,children:[(0,r.jsx)(`span`,{className:`otp-democ__icon`,"aria-hidden":`true`,children:(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,children:[(0,r.jsx)(`rect`,{x:`1.75`,y:`3.25`,width:`12.5`,height:`9.5`,rx:`2`}),(0,r.jsx)(`path`,{d:`M2.5 4.75l5.5 4 5.5-4`})]})}),(0,r.jsx)(`h3`,{className:`otp-democ__title`,children:`Check your email`}),(0,r.jsxs)(`p`,{className:`otp-democ__text`,children:[`We sent a code to `,(0,r.jsx)(`strong`,{children:`maya@acme.com`})]}),(0,r.jsx)(s,{className:`otp-demo__otp`,separator:!0,align:`center`,value:e,status:i,errorMessage:ee(o),onChange:e=>{t(e),i===`error`&&e&&a(`idle`)},onComplete:h,onResend:()=>c(3),resendIn:30})]}),(0,r.jsxs)(`p`,{className:`otp-democ__hint`,children:[`Demo code: `,(0,r.jsxs)(`span`,{children:[`482`,`\xA0`,`913`]})]})]})})}export{d as default};