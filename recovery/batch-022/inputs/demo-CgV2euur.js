import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t(),i=()=>typeof window<`u`&&window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;function a({id:e,children:t,className:i}){let a=(0,n.useRef)({id:e,node:t}),[o,s]=(0,n.useState)(e),[c,l]=(0,n.useState)(null);return o!==e&&(s(e),l(a.current)),a.current={id:e,node:t},(0,n.useEffect)(()=>{if(!c)return;let e=window.setTimeout(()=>l(null),300);return()=>window.clearTimeout(e)},[c]),(0,r.jsxs)(`span`,{className:[`ui-ma__swap`,i].filter(Boolean).join(` `),children:[c&&(0,r.jsx)(`span`,{className:`ui-ma__swap-item`,"data-out":``,"aria-hidden":`true`,children:c.node},`out-${c.id}`),(0,r.jsx)(`span`,{className:`ui-ma__swap-item`,children:t},e)]})}function o({version:e,children:t,className:i}){let o=(0,n.useRef)(null),[s,c]=(0,n.useState)(void 0);return(0,n.useEffect)(()=>{let e=o.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>c(e.offsetHeight));return t.observe(e),()=>t.disconnect()},[]),(0,r.jsxs)(`div`,{className:[`ui-ma-text`,i].filter(Boolean).join(` `),style:{height:s},children:[(0,r.jsx)(`style`,{href:`ui-message-actions`,precedence:`default`,children:f}),(0,r.jsx)(`div`,{ref:o,className:`ui-ma-text__inner`,children:(0,r.jsx)(a,{id:String(e),className:`ui-ma-text__swap`,children:t})})]})}var s=({d:e})=>(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`ui-ma__glyph`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:e})}),c={copy:`M9 9.5A1.5 1.5 0 0 1 10.5 8h8A1.5 1.5 0 0 1 20 9.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 9 18.5zM15 8V5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H9`,check:`M5.5 12.5l4.2 4.2L18.5 7.8`,redo:`M19.5 12a7.5 7.5 0 1 1-2.2-5.3L19.5 9M19.5 4.5V9H15`,thumb:`M7.5 10.5v9M7.5 10.5l3.3-6a1.8 1.8 0 0 1 3.3 1.2l-.6 3.8H18a2 2 0 0 1 2 2.3l-1.2 6.4a2 2 0 0 1-2 1.8H5a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1z`,speaker:`M11 5.5 6.8 9H4v6h2.8l4.2 3.5zM15.2 9.2a4 4 0 0 1 0 5.6M17.9 6.6a7.8 7.8 0 0 1 0 10.8`,prev:`m14.5 7-5 5 5 5`,next:`m9.5 7 5 5-5 5`,close:`m7.5 7.5 9 9m0-9-9 9`},l=[`copy`,`regenerate`,`feedback`,`speak`],u=[`Not accurate`,`Too long`,`Didn't follow instructions`,`Other`];function d({text:e,actions:t=l,versions:o,version:d,defaultVersion:p,onVersionChange:m,onCopy:h,onRegenerate:g,regenerating:_=!1,onFeedback:v,reasons:y=u,onSpeak:b,speaking:x,speakDuration:ee,quiet:te=!0,label:ne=`Message actions`,className:re}){let S=(0,n.useId)(),C=Math.max(1,typeof o==`number`?Math.floor(o):o?.length??1),[w,T]=(0,n.useState)(()=>Math.min(C-1,Math.max(0,p??C-1))),[E,D]=(0,n.useState)(C),[O,k]=(0,n.useState)(null),[A,j]=(0,n.useState)(!1),[M,N]=(0,n.useState)(null),[P,F]=(0,n.useState)(``),[I,L]=(0,n.useState)(!1);E!==C&&(C>E&&(T(C-1),k(null),j(!1)),D(C));let R=Math.min(C-1,Math.max(0,d??w)),z=e=>{let t=Math.min(C-1,Math.max(0,e));t!==R&&(d===void 0&&T(t),m?.(t),H(`Version ${t+1} of ${C}`))},[B,V]=(0,n.useState)(``),H=e=>V(t=>t===e?`${e} `:e),[U,W]=(0,n.useState)(0);(0,n.useEffect)(()=>{if(!U)return;let e=window.setTimeout(()=>W(0),1600);return()=>window.clearTimeout(e)},[U]);let ie=()=>{e!==void 0&&navigator.clipboard?.writeText(e).catch(()=>{}),h?.(e),W(Date.now()),H(`Copied`)},[G,ae]=(0,n.useState)(0),oe=()=>{ae(e=>e+1),g?.(),H(`Regenerating`)},se=()=>{if(O===`up`){k(null),v?.(null);return}k(`up`),j(!1),v?.(`up`),H(`Marked as good response`)},ce=()=>{if(O===`down`){k(null),j(!1),v?.(null);return}k(`down`),j(!0),L(!1),N(null),F(``),v?.(`down`),H(`Marked as bad response. Tell us what went wrong below`)},K=()=>{M&&!I&&(v?.(`down`,M===`Other`?P.trim()||`Other`:M),L(!0),H(`Thanks for the feedback`))};(0,n.useEffect)(()=>{if(!I)return;let e=window.setTimeout(()=>j(!1),i()?1200:1500);return()=>window.clearTimeout(e)},[I]);let q=(0,n.useRef)(null),J=()=>{j(!1),q.current?.focus()},[Y,X]=(0,n.useState)(!1),Z=x??Y,le=e?e.trim().split(/\s+/).length:0,Q=ee??Math.max(2600,le*380);(0,n.useEffect)(()=>{if(x!==void 0||!Y)return;let e=window.setTimeout(()=>{X(!1),b?.(!1),H(`Finished reading`)},Q);return()=>window.clearTimeout(e)},[Y,x,Q]);let ue=()=>{let e=!Z;x===void 0&&X(e),b?.(e),H(e?`Reading aloud`:`Stopped reading`)},de=!!U||A||Z||_,$=e=>(0,r.jsxs)(`span`,{className:`ui-ma__item`,"data-flash":e.flash?``:void 0,children:[(0,r.jsx)(`button`,{ref:e.refEl,type:`button`,className:`ui-ma__btn ui-ma__btn--${e.key}`,"aria-label":e.labelText,"aria-pressed":e.pressed,"aria-expanded":e.expanded,"aria-controls":e.controls,onClick:e.onClick,...e.extra,children:e.children}),(0,r.jsx)(`span`,{className:`ui-ma__tip`,"aria-hidden":`true`,children:(0,r.jsx)(a,{id:e.tip,children:e.tip})})]},e.key),fe=t.map(e=>e===`copy`?$({key:`copy`,tip:U?`Copied`:`Copy`,labelText:U?`Copied`:`Copy message`,onClick:ie,flash:!!U,extra:{"data-done":U?``:void 0},children:(0,r.jsxs)(`span`,{className:`ui-ma__icon ui-ma__morph`,children:[(0,r.jsx)(`span`,{className:`ui-ma__layer`,"data-on":U?void 0:``,children:(0,r.jsx)(s,{d:c.copy})}),(0,r.jsx)(`span`,{className:`ui-ma__layer ui-ma__layer--check`,"data-on":U?``:void 0,children:(0,r.jsx)(s,{d:c.check})})]})}):e===`regenerate`?(0,r.jsxs)(`span`,{className:`ui-ma__regen`,children:[$({key:`regenerate`,tip:_?`Writing…`:`Regenerate`,labelText:`Regenerate response`,onClick:oe,extra:{"data-busy":_?``:void 0},children:(0,r.jsx)(`span`,{className:`ui-ma__icon`,children:(0,r.jsx)(`span`,{className:`ui-ma__spin`,"data-spin":G?``:void 0,children:(0,r.jsx)(s,{d:c.redo})},G)})}),(0,r.jsx)(`span`,{className:`ui-ma__versions`,"data-open":C>1?``:void 0,inert:C<2,children:(0,r.jsxs)(`span`,{className:`ui-ma__versions-clip`,role:`group`,"aria-label":`Versions`,children:[(0,r.jsx)(`button`,{type:`button`,className:`ui-ma__step`,"data-dir":`prev`,"aria-label":`Previous version`,disabled:R===0,onClick:()=>z(R-1),children:(0,r.jsx)(s,{d:c.prev})}),(0,r.jsxs)(`span`,{className:`ui-ma__count`,"aria-label":`Version ${R+1} of ${C}`,children:[(0,r.jsx)(a,{id:String(R),className:`ui-ma__count-now`,children:R+1}),(0,r.jsx)(`span`,{"aria-hidden":`true`,children:`/`}),(0,r.jsx)(a,{id:String(C),children:C})]}),(0,r.jsx)(`button`,{type:`button`,className:`ui-ma__step`,"data-dir":`next`,"aria-label":`Next version`,disabled:R>=C-1,onClick:()=>z(R+1),children:(0,r.jsx)(s,{d:c.next})})]})})]},`regenerate`):e===`feedback`?(0,r.jsxs)(n.Fragment,{children:[$({key:`up`,tip:O===`up`?`Thanks!`:`Good response`,labelText:`Good response`,pressed:O===`up`,onClick:se,children:(0,r.jsx)(`span`,{className:`ui-ma__icon ui-ma__thumb`,children:(0,r.jsx)(s,{d:c.thumb})})}),$({key:`down`,tip:`Bad response`,labelText:`Bad response`,pressed:O===`down`,expanded:A,controls:`${S}-feedback`,onClick:ce,refEl:q,children:(0,r.jsx)(`span`,{className:`ui-ma__icon ui-ma__thumb`,children:(0,r.jsx)(s,{d:c.thumb})})})]},`feedback`):$({key:`speak`,tip:Z?`Stop`:`Read aloud`,labelText:Z?`Stop reading`:`Read aloud`,pressed:Z,onClick:ue,children:(0,r.jsxs)(`span`,{className:`ui-ma__icon ui-ma__morph`,children:[(0,r.jsx)(`span`,{className:`ui-ma__layer`,"data-on":Z?void 0:``,children:(0,r.jsx)(s,{d:c.speaker})}),(0,r.jsxs)(`span`,{className:`ui-ma__layer ui-ma__eq`,"data-on":Z?``:void 0,children:[(0,r.jsx)(`i`,{}),(0,r.jsx)(`i`,{}),(0,r.jsx)(`i`,{}),(0,r.jsx)(`i`,{})]})]})}));return(0,r.jsxs)(`div`,{className:[`ui-ma`,re].filter(Boolean).join(` `),"data-quiet":te?``:void 0,"data-active":de?``:void 0,children:[(0,r.jsx)(`style`,{href:`ui-message-actions`,precedence:`default`,children:f}),(0,r.jsx)(`div`,{className:`ui-ma__bar`,role:`group`,"aria-label":ne,children:fe}),t.includes(`feedback`)&&(0,r.jsx)(`div`,{id:`${S}-feedback`,className:`ui-ma__fold`,"data-open":A?``:void 0,inert:!A,children:(0,r.jsx)(`div`,{className:`ui-ma__clip`,children:(0,r.jsxs)(`div`,{className:`ui-ma__panel`,role:`group`,"aria-labelledby":`${S}-ask`,onKeyDown:e=>{e.key===`Escape`&&(e.stopPropagation(),J())},children:[(0,r.jsxs)(`div`,{className:`ui-ma__panel-head`,children:[(0,r.jsx)(`span`,{id:`${S}-ask`,className:`ui-ma__ask`,children:`What went wrong?`}),(0,r.jsx)(`button`,{type:`button`,className:`ui-ma__close`,"aria-label":`Close feedback`,onClick:J,children:(0,r.jsx)(s,{d:c.close})})]}),(0,r.jsxs)(`div`,{className:`ui-ma__chips`,children:[y.map(e=>(0,r.jsx)(`button`,{type:`button`,className:`ui-ma__chip`,"aria-pressed":M===e,disabled:I,onClick:()=>N(M===e?null:e),children:e},e)),(0,r.jsx)(`button`,{type:`button`,className:`ui-ma__send`,"data-sent":I?``:void 0,disabled:!M,"aria-disabled":I||void 0,onClick:K,children:(0,r.jsx)(a,{id:I?`sent`:`send`,children:I?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{d:c.check}),`Thanks!`]}):`Send`})})]}),y.includes(`Other`)&&(0,r.jsx)(`div`,{className:`ui-ma__fold`,"data-open":M===`Other`&&!I?``:void 0,inert:M!==`Other`||I,children:(0,r.jsx)(`div`,{className:`ui-ma__clip`,children:(0,r.jsx)(`input`,{className:`ui-ma__input`,value:P,placeholder:`Tell us more (optional)`,"aria-label":`What went wrong, in your words`,onChange:e=>F(e.target.value),onKeyDown:e=>{e.key===`Enter`&&K()}})})})]})})}),(0,r.jsx)(`span`,{className:`ui-ma__sr`,"aria-live":`polite`,children:B})]})}var f=`
.ui-ma {
  --ui-ma-card: #ffffff;
  --ui-ma-line: #ececec;
  --ui-ma-ink: #171717;
  --ui-ma-text: #404040;
  --ui-ma-muted: #8f8f8f;
  --ui-ma-well: #f4f4f5;
  --ui-ma-hover: rgba(23, 23, 23, 0.06);
  --ui-ma-accent: #2f6bff;
  --ui-ma-accent-bg: rgba(47, 107, 255, 0.1);
  --ui-ma-ok: #18794e;
  --ui-ma-ok-bg: rgba(34, 160, 90, 0.11);
  --ui-ma-tip-bg: #171717;
  --ui-ma-tip-text: #ffffff;
  --ui-ma-focus: rgba(23, 23, 23, 0.22);
  --ui-ma-ease: cubic-bezier(0.32, 0.72, 0.24, 1);
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-width: 0;
  container-type: inline-size;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-ma-text);
  text-align: left;
  -webkit-font-smoothing: antialiased;
}
.ui-ma *, .ui-ma *::before, .ui-ma *::after { box-sizing: border-box; }
:where(.ui-ma) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; text-align: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.ui-ma button:focus-visible, .ui-ma input:focus-visible { outline: 2px solid var(--ui-ma-focus); outline-offset: 2px; }
.ui-ma svg { display: block; flex: none; }
.ui-ma__sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

/* ----- The bar: quiet until the message is hovered, something inside is focused or busy ----- */
.ui-ma__bar { display: flex; align-items: center; gap: 2px; min-height: 30px; transition: opacity 240ms ease; }
.ui-ma[data-quiet] .ui-ma__bar { opacity: 0.6; }
.ui-ma[data-quiet]:hover .ui-ma__bar,
.ui-ma[data-quiet]:focus-within .ui-ma__bar,
.ui-ma[data-quiet][data-active] .ui-ma__bar,
:where([data-ui-message]:hover, [data-ui-message]:focus-within) .ui-ma[data-quiet] .ui-ma__bar { opacity: 1; }

.ui-ma__item { position: relative; display: inline-flex; flex: none; }
.ui-ma__btn { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; color: var(--ui-ma-muted); transition: background-color 160ms ease, color 160ms ease; }
.ui-ma__btn:hover { background: var(--ui-ma-hover); color: var(--ui-ma-ink); }
.ui-ma__btn:active .ui-ma__icon { transform: scale(0.9); }
.ui-ma__btn[aria-pressed="true"] { color: var(--ui-ma-ink); }
.ui-ma__btn--speak[aria-pressed="true"] { color: var(--ui-ma-accent); background: var(--ui-ma-accent-bg); }
.ui-ma__btn--copy[data-done] { color: var(--ui-ma-ok); }

.ui-ma__icon { position: relative; display: grid; place-items: center; width: 16px; height: 16px; transition: transform 160ms var(--ui-ma-ease); }
.ui-ma__glyph { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }

/* Two icons on top of each other – one blurs away while the other comes in */
.ui-ma__morph { display: grid; }
.ui-ma__layer { grid-area: 1 / 1; display: grid; place-items: center; opacity: 0; transform: scale(0.6); filter: blur(2px); transition: opacity 200ms ease, transform 300ms var(--ui-ma-ease), filter 200ms ease; }
.ui-ma__layer[data-on] { opacity: 1; transform: none; filter: none; }
.ui-ma__layer--check .ui-ma__glyph { stroke-width: 2; stroke-dasharray: 22; stroke-dashoffset: 22; }
.ui-ma__layer--check[data-on] .ui-ma__glyph { stroke-dashoffset: 0; transition: stroke-dashoffset 340ms var(--ui-ma-ease) 60ms; }

/* Regenerate spins once per press, and keeps going while busy */
.ui-ma__spin { display: grid; place-items: center; }
.ui-ma__spin[data-spin] { animation: ui-ma-spin 640ms var(--ui-ma-ease); }
.ui-ma__btn[data-busy] { color: var(--ui-ma-ink); }
.ui-ma__btn[data-busy] .ui-ma__spin { animation: ui-ma-spin 900ms linear infinite; }

/* Thumbs: down is the same glyph turned around; a vote fills it with a little pop */
.ui-ma__btn--down .ui-ma__glyph { transform: rotate(180deg); }
.ui-ma__thumb .ui-ma__glyph { transition: fill 200ms ease; }
.ui-ma__btn[aria-pressed="true"] .ui-ma__thumb { animation: ui-ma-pop 420ms var(--ui-ma-ease); }
.ui-ma__btn[aria-pressed="true"] .ui-ma__thumb .ui-ma__glyph { fill: currentColor; }

/* Read aloud: four bars that bounce while it plays */
.ui-ma__eq { display: flex; align-items: center; justify-content: center; gap: 2px; width: 16px; height: 16px; }
.ui-ma__eq i { display: block; width: 2px; height: 12px; border-radius: 1px; background: currentColor; transform: scaleY(0.3); }
.ui-ma__eq[data-on] i { animation: ui-ma-eq 900ms ease-in-out infinite; }
.ui-ma__eq[data-on] i:nth-child(2) { animation-delay: -300ms; animation-duration: 760ms; }
.ui-ma__eq[data-on] i:nth-child(3) { animation-delay: -520ms; animation-duration: 1000ms; }
.ui-ma__eq[data-on] i:nth-child(4) { animation-delay: -140ms; animation-duration: 820ms; }

/* ----- Tooltips: above the button, on hover after a beat, on keyboard focus, and briefly after Copy ----- */
.ui-ma__tip { position: absolute; bottom: calc(100% + 6px); left: 50%; z-index: 3; display: block; width: max-content; padding: 3px 7px; border-radius: 6px; background: var(--ui-ma-tip-bg); font-size: 11.5px; font-weight: 500; line-height: 16px; color: var(--ui-ma-tip-text); white-space: nowrap; pointer-events: none; opacity: 0; transform: translate(-50%, 3px); transition: opacity 140ms ease, transform 200ms var(--ui-ma-ease); }
.ui-ma__btn:focus-visible + .ui-ma__tip,
.ui-ma__item[data-flash] .ui-ma__tip { opacity: 1; transform: translate(-50%, 0); transition-delay: 0ms; }
@media (hover: hover) {
  .ui-ma__item:hover .ui-ma__tip { opacity: 1; transform: translate(-50%, 0); transition-delay: 380ms; }
}

/* ----- Version switcher: unfolds next to Regenerate once there are two versions ----- */
.ui-ma__regen { display: inline-flex; align-items: center; flex: none; }
.ui-ma__versions { display: grid; grid-template-columns: 0fr; opacity: 0; transition: grid-template-columns 420ms var(--ui-ma-ease), opacity 220ms ease; }
.ui-ma__versions[data-open] { grid-template-columns: 1fr; opacity: 1; transition: grid-template-columns 420ms var(--ui-ma-ease), opacity 320ms ease 100ms; }
.ui-ma__versions-clip { display: flex; align-items: center; min-width: 0; overflow: hidden; padding-right: 2px; }
.ui-ma__step { display: grid; flex: none; place-items: center; width: 20px; height: 30px; border-radius: 7px; color: var(--ui-ma-muted); transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease; }
.ui-ma__step .ui-ma__glyph { width: 14px; height: 14px; }
.ui-ma__step:hover:not(:disabled) { background: var(--ui-ma-hover); color: var(--ui-ma-ink); }
.ui-ma__step:disabled { cursor: default; opacity: 0.4; }
.ui-ma__count { display: inline-flex; align-items: center; gap: 2px; padding: 0 1px; font-size: 12px; color: var(--ui-ma-muted); white-space: nowrap; font-variant-numeric: tabular-nums; }
.ui-ma__count-now { color: var(--ui-ma-ink); font-weight: 500; }

/* ----- Swapping text ----- */
.ui-ma__swap { display: inline-grid; min-width: 0; }
.ui-ma__swap-item { grid-area: 1 / 1; display: inline-flex; align-items: center; justify-content: center; gap: 4px; min-width: 0; animation: ui-ma-in 300ms ease both; }
.ui-ma__swap-item[data-out] { animation: ui-ma-out 220ms ease both; }

/* ----- Feedback row: unfolds below the bar ----- */
.ui-ma__fold { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows 420ms var(--ui-ma-ease), opacity 220ms ease; }
.ui-ma__fold[data-open] { grid-template-rows: 1fr; opacity: 1; transition: grid-template-rows 420ms var(--ui-ma-ease), opacity 320ms ease 80ms; }
.ui-ma__clip { min-height: 0; overflow: hidden; margin: -1px; padding: 1px; }  /* the 1px keeps the card's hairline from being clipped */
.ui-ma__panel { max-width: 440px; margin: 6px 0 0; padding: 12px 14px 14px; border-radius: 16px; background: var(--ui-ma-card); box-shadow: 0 0 0 1px var(--ui-ma-line), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-ma__panel-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 24px; }
.ui-ma__ask { font-size: 12.5px; font-weight: 500; color: var(--ui-ma-ink); }
.ui-ma__close { display: grid; flex: none; place-items: center; width: 24px; height: 24px; margin-right: -4px; border-radius: 7px; color: var(--ui-ma-muted); transition: background-color 160ms ease, color 160ms ease; }
.ui-ma__close .ui-ma__glyph { width: 14px; height: 14px; }
.ui-ma__close:hover { background: var(--ui-ma-hover); color: var(--ui-ma-ink); }
.ui-ma__chips { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 6px; }
.ui-ma__chip { height: 26px; padding: 0 9px; border-radius: 8px; background: var(--ui-ma-well); font-size: 12px; color: var(--ui-ma-text); white-space: nowrap; transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease, opacity 200ms ease; }
.ui-ma__chip:hover:not(:disabled) { background: var(--ui-ma-line); color: var(--ui-ma-ink); }
.ui-ma__chip[aria-pressed="true"], .ui-ma__chip[aria-pressed="true"]:hover:not(:disabled) { background: var(--ui-ma-accent-bg); color: var(--ui-ma-accent); }
.ui-ma__chip:disabled { cursor: default; }
.ui-ma__chip:disabled:not([aria-pressed="true"]) { opacity: 0.45; }
.ui-ma__send { display: inline-flex; align-items: center; justify-content: center; min-width: 58px; height: 26px; margin-left: auto; padding: 0 11px; border-radius: 8px; background: var(--ui-ma-ink); font-size: 12px; font-weight: 500; color: var(--ui-ma-card); white-space: nowrap; transition: background-color 220ms ease, color 220ms ease, opacity 200ms ease; }
.ui-ma__send:disabled { cursor: default; opacity: 0.32; }
.ui-ma__send[data-sent] { cursor: default; background: var(--ui-ma-ok-bg); color: var(--ui-ma-ok); }
.ui-ma__send .ui-ma__glyph { width: 13px; height: 13px; stroke-width: 2.2; }
.ui-ma__input { display: block; width: 100%; height: 30px; margin-top: 8px; padding: 0 10px; border: 0; border-radius: 8px; background: var(--ui-ma-well); font: inherit; font-size: 12.5px; color: var(--ui-ma-ink); outline: none; }
.ui-ma__input::placeholder { color: var(--ui-ma-muted); }

/* ----- Message text that crossfades between versions (MessageText) ----- */
.ui-ma-text { overflow: hidden; transition: height 360ms var(--ui-ma-ease, cubic-bezier(0.32, 0.72, 0.24, 1)); }
.ui-ma-text__swap { display: grid; }
.ui-ma-text__swap > .ui-ma__swap-item { display: block; animation: ui-ma-text-in 420ms ease both; }
.ui-ma-text__swap > .ui-ma__swap-item[data-out] { animation: ui-ma-out 260ms ease both; }

@keyframes ui-ma-in { from { opacity: 0; filter: blur(2px); } }
@keyframes ui-ma-text-in { from { opacity: 0; filter: blur(3px); } }
@keyframes ui-ma-out { from { opacity: 1; } to { opacity: 0; filter: blur(2px); } }
@keyframes ui-ma-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes ui-ma-pop { 0% { transform: scale(1); } 40% { transform: scale(1.28) rotate(-8deg); } 100% { transform: scale(1); } }
@keyframes ui-ma-eq { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }

/* Narrow: the feedback row stacks its send button under the chips */
@container (max-width: 320px) {
  .ui-ma__send { flex-basis: 100%; }
}

@media (pointer: coarse) {
  .ui-ma[data-quiet] .ui-ma__bar { opacity: 1; }
  .ui-ma__btn { width: 38px; height: 38px; border-radius: 10px; }
  .ui-ma__step { width: 28px; height: 38px; }
  .ui-ma__chip, .ui-ma__send { height: 34px; }
  .ui-ma__close { width: 32px; height: 32px; }
  .ui-ma__input { height: 38px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-ma *, .ui-ma *::before, .ui-ma *::after, .ui-ma-text, .ui-ma-text * { animation: none !important; transition: none !important; }
  .ui-ma__eq[data-on] i:nth-child(odd) { transform: scaleY(0.8); }
  .ui-ma__eq[data-on] i:nth-child(even) { transform: scaleY(0.5); }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ma {
  --ui-ma-card: #19191b;
  --ui-ma-line: #2a2a2e;
  --ui-ma-ink: #ededed;
  --ui-ma-text: #c8c8cc;
  --ui-ma-muted: #8b8b92;
  --ui-ma-well: #222225;
  --ui-ma-hover: rgba(255, 255, 255, 0.07);
  --ui-ma-accent: #8fb1ff;
  --ui-ma-accent-bg: rgba(79, 130, 255, 0.16);
  --ui-ma-ok: #6ee7a8;
  --ui-ma-ok-bg: rgba(110, 231, 168, 0.12);
  --ui-ma-tip-bg: #ededed;
  --ui-ma-tip-text: #171717;
  --ui-ma-focus: rgba(255, 255, 255, 0.3);
}
`,p=[`Version 2.4 adds shared workspaces, cuts sync time in half and fixes the export bug on Windows.`,`Shared workspaces arrive in 2.4, sync is twice as fast, and exports on Windows work again.`,`In short: teams can now share a workspace, syncing takes half as long and Windows exports are fixed.`];function m(){let e=(0,n.useRef)(null),[t,i]=(0,n.useState)(0),[a,s]=(0,n.useState)(1),[c,l]=(0,n.useState)(0),[u,f]=(0,n.useState)(!1),[m,h]=(0,n.useState)(!1),g=(0,n.useRef)(!1),_=()=>{u||(f(!0),window.setTimeout(()=>{f(!1),s(e=>Math.min(p.length,e+1))},1e3))};(0,n.useEffect)(()=>l(a-1),[a]),(0,n.useEffect)(()=>{let t=t=>()=>e.current?.querySelector(t)?.click(),n=[[700,t(`.ui-ma__btn--copy`)],[1e3,t(`.ui-ma__btn--down`)],[700,t(`.ui-ma__chip:nth-child(2)`)],[900,t(`.ui-ma__send`)],[2600,t(`.ui-ma__btn--regenerate`)],[2800,t(`.ui-ma__step[data-dir='prev']`)],[2e3,t(`.ui-ma__step[data-dir='next']`)],[3e3,()=>{s(1),l(0),i(e=>e+1)}]],r=0,a=0,o=()=>{g.current||r>=n.length||(a=window.setTimeout(()=>{g.current||(n[r][1](),r++,o())},n[r][0]))};return o(),()=>window.clearTimeout(a)},[t]);let v=()=>{g.current=!0,h(!0)},y=p[c];return(0,r.jsx)(`div`,{ref:e,className:`ma-demo`,onPointerEnter:v,onPointerDownCapture:v,onKeyDownCapture:v,onFocusCapture:v,children:(0,r.jsxs)(`div`,{className:`ma-demo__message`,"data-ui-message":``,children:[(0,r.jsxs)(`div`,{className:`ma-demo__card`,children:[(0,r.jsx)(`p`,{className:`ma-demo__ask`,children:`Summarize the 2.4 release notes in one sentence.`}),(0,r.jsxs)(`div`,{className:`ma-demo__who`,children:[(0,r.jsx)(`span`,{className:`ma-demo__dot`,"aria-hidden":`true`}),`Sonnet 5.5`]}),(0,r.jsx)(`div`,{className:`ma-demo__answer`,"data-writing":u?``:void 0,children:(0,r.jsx)(o,{version:c,children:y})})]}),(0,r.jsx)(`div`,{className:`ma-demo__tray`,children:(0,r.jsx)(d,{text:m?y:void 0,versions:a,version:c,onVersionChange:l,onRegenerate:_,regenerating:u},t)})]})})}export{m as default};