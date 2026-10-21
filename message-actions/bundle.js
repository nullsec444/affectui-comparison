import{a as va}from"../shared/chunk-PWBCLQI6.js";import{a as ia}from"../shared/chunk-LKG2PFLG.js";import{a as W}from"../shared/chunk-KHKHHDEU.js";import{b as q}from"../shared/chunk-MOQMIKSW.js";var oa=q(ia()),ra=q(va());var wa=q(ia()),ya=q(W()),a=q(W()),t=ya,i=wa,ka=()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;function D({id:n,children:m,className:_}){let r=(0,i.useRef)({id:n,node:m}),[b,h]=(0,i.useState)(n),[o,u]=(0,i.useState)(null);return b!==n&&(h(n),u(r.current)),r.current={id:n,node:m},(0,i.useEffect)(()=>{if(!o)return;let x=window.setTimeout(()=>u(null),300);return()=>window.clearTimeout(x)},[o]),(0,a.jsxs)("span",{className:["ui-ma__swap",_].filter(Boolean).join(" "),children:[o&&(0,a.jsx)("span",{className:"ui-ma__swap-item","data-out":"","aria-hidden":"true",children:o.node},`out-${o.id}`),(0,a.jsx)("span",{className:"ui-ma__swap-item",children:m},n)]})}function Na({version:n,children:m,className:_}){let r=(0,i.useRef)(null),[b,h]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{let o=r.current;if(!o||typeof ResizeObserver>"u")return;let u=new ResizeObserver(()=>h(o.offsetHeight));return u.observe(o),()=>u.disconnect()},[]),(0,a.jsxs)("div",{className:["ui-ma-text",_].filter(Boolean).join(" "),style:{height:b},children:[(0,a.jsx)("style",{href:"ui-message-actions",precedence:"default",children:na}),(0,a.jsx)("div",{ref:r,className:"ui-ma-text__inner",children:(0,t.jsx)(D,{id:String(n),className:"ui-ma-text__swap",children:m})})]})}var p=({d:n})=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"ui-ma__glyph","aria-hidden":"true",children:(0,a.jsx)("path",{d:n})}),c={copy:"M9 9.5A1.5 1.5 0 0 1 10.5 8h8A1.5 1.5 0 0 1 20 9.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 9 18.5zM15 8V5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H9",check:"M5.5 12.5l4.2 4.2L18.5 7.8",redo:"M19.5 12a7.5 7.5 0 1 1-2.2-5.3L19.5 9M19.5 4.5V9H15",thumb:"M7.5 10.5v9M7.5 10.5l3.3-6a1.8 1.8 0 0 1 3.3 1.2l-.6 3.8H18a2 2 0 0 1 2 2.3l-1.2 6.4a2 2 0 0 1-2 1.8H5a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1z",speaker:"M11 5.5 6.8 9H4v6h2.8l4.2 3.5zM15.2 9.2a4 4 0 0 1 0 5.6M17.9 6.6a7.8 7.8 0 0 1 0 10.8",prev:"m14.5 7-5 5 5 5",next:"m9.5 7 5 5-5 5",close:"m7.5 7.5 9 9m0-9-9 9"},Sa=["copy","regenerate","feedback","speak"],Ca=["Not accurate","Too long","Didn't follow instructions","Other"];function Ta({text:n,actions:m=Sa,versions:_,version:r,defaultVersion:b,onVersionChange:h,onCopy:o,onRegenerate:u,regenerating:x=!1,onFeedback:k,reasons:O=Ca,onSpeak:S,speaking:C,speakDuration:T,quiet:B=!0,label:d="Message actions",className:z}){let f=(0,i.useId)(),s=Math.max(1,typeof _=="number"?Math.floor(_):_?.length??1),[A,j]=(0,i.useState)(()=>Math.min(s-1,Math.max(0,b??s-1))),[I,ma]=(0,i.useState)(s),[E,$]=(0,i.useState)(null),[F,M]=(0,i.useState)(!1),[v,Y]=(0,i.useState)(null),[P,K]=(0,i.useState)(""),[l,G]=(0,i.useState)(!1);I!==s&&(s>I&&(j(s-1),$(null),M(!1)),ma(s));let w=Math.min(s-1,Math.max(0,r??A)),L=e=>{let R=Math.min(s-1,Math.max(0,e));R!==w&&(r===void 0&&j(R),h?.(R),y(`Version ${R+1} of ${s}`))},[ua,da]=(0,i.useState)(""),y=e=>da(R=>R===e?`${e}\xA0`:e),[g,U]=(0,i.useState)(0);(0,i.useEffect)(()=>{if(!g)return;let e=window.setTimeout(()=>U(0),1600);return()=>window.clearTimeout(e)},[g]);let la=()=>{n!==void 0&&navigator.clipboard?.writeText(n).catch(()=>{}),o?.(n),U(Date.now()),y("Copied")},[J,pa]=(0,i.useState)(0),ca=()=>{pa(e=>e+1),u?.(),y("Regenerating")},_a=()=>{if(E==="up"){$(null),k?.(null);return}$("up"),M(!1),k?.("up"),y("Marked as good response")},ha=()=>{if(E==="down"){$(null),M(!1),k?.(null);return}$("down"),M(!0),G(!1),Y(null),K(""),k?.("down"),y("Marked as bad response. Tell us what went wrong below")},Q=()=>{v&&!l&&(k?.("down",v==="Other"?P.trim()||"Other":v),G(!0),y("Thanks for the feedback"))};(0,i.useEffect)(()=>{if(!l)return;let e=window.setTimeout(()=>M(!1),ka()?1200:1500);return()=>window.clearTimeout(e)},[l]);let X=(0,i.useRef)(null),Z=()=>{M(!1),X.current?.focus()},[H,aa]=(0,i.useState)(!1),N=C??H,fa=n?n.trim().split(/\s+/).length:0,ea=T??Math.max(2600,fa*380);(0,i.useEffect)(()=>{if(C!==void 0||!H)return;let e=window.setTimeout(()=>{aa(!1),S?.(!1),y("Finished reading")},ea);return()=>window.clearTimeout(e)},[H,C,ea]);let ga=()=>{let e=!N;C===void 0&&aa(e),S?.(e),y(e?"Reading aloud":"Stopped reading")},ba=!!g||F||N||x,V=e=>(0,a.jsxs)("span",{className:"ui-ma__item","data-flash":e.flash?"":void 0,children:[(0,a.jsx)("button",{ref:e.refEl,type:"button",className:`ui-ma__btn ui-ma__btn--${e.key}`,"aria-label":e.labelText,"aria-pressed":e.pressed,"aria-expanded":e.expanded,"aria-controls":e.controls,onClick:e.onClick,...e.extra,children:e.children}),(0,a.jsx)("span",{className:"ui-ma__tip","aria-hidden":"true",children:(0,t.jsx)(D,{id:e.tip,children:e.tip})})]},e.key),xa=m.map(e=>e==="copy"?V({key:"copy",tip:g?"Copied":"Copy",labelText:g?"Copied":"Copy message",onClick:la,flash:!!g,extra:{"data-done":g?"":void 0},children:(0,a.jsxs)("span",{className:"ui-ma__icon ui-ma__morph",children:[(0,a.jsx)("span",{className:"ui-ma__layer","data-on":g?void 0:"",children:(0,t.jsx)(p,{d:c.copy})}),(0,a.jsx)("span",{className:"ui-ma__layer ui-ma__layer--check","data-on":g?"":void 0,children:(0,t.jsx)(p,{d:c.check})})]})}):e==="regenerate"?(0,a.jsxs)("span",{className:"ui-ma__regen",children:[V({key:"regenerate",tip:x?"Writing\u2026":"Regenerate",labelText:"Regenerate response",onClick:ca,extra:{"data-busy":x?"":void 0},children:(0,a.jsx)("span",{className:"ui-ma__icon",children:(0,a.jsx)("span",{className:"ui-ma__spin","data-spin":J?"":void 0,children:(0,t.jsx)(p,{d:c.redo})},J)})}),(0,a.jsx)("span",{className:"ui-ma__versions","data-open":s>1?"":void 0,inert:s<2,children:(0,a.jsxs)("span",{className:"ui-ma__versions-clip",role:"group","aria-label":"Versions",children:[(0,a.jsx)("button",{type:"button",className:"ui-ma__step","data-dir":"prev","aria-label":"Previous version",disabled:w===0,onClick:()=>L(w-1),children:(0,t.jsx)(p,{d:c.prev})}),(0,a.jsxs)("span",{className:"ui-ma__count","aria-label":`Version ${w+1} of ${s}`,children:[(0,t.jsx)(D,{id:String(w),className:"ui-ma__count-now",children:w+1}),(0,a.jsx)("span",{"aria-hidden":"true",children:"/"}),(0,t.jsx)(D,{id:String(s),children:s})]}),(0,a.jsx)("button",{type:"button",className:"ui-ma__step","data-dir":"next","aria-label":"Next version",disabled:w>=s-1,onClick:()=>L(w+1),children:(0,t.jsx)(p,{d:c.next})})]})})]},"regenerate"):e==="feedback"?(0,t.jsxs)(i.Fragment,{children:[V({key:"up",tip:E==="up"?"Thanks!":"Good response",labelText:"Good response",pressed:E==="up",onClick:_a,children:(0,a.jsx)("span",{className:"ui-ma__icon ui-ma__thumb",children:(0,t.jsx)(p,{d:c.thumb})})}),V({key:"down",tip:"Bad response",labelText:"Bad response",pressed:E==="down",expanded:F,controls:`${f}-feedback`,onClick:ha,refEl:X,children:(0,a.jsx)("span",{className:"ui-ma__icon ui-ma__thumb",children:(0,t.jsx)(p,{d:c.thumb})})})]},"feedback"):V({key:"speak",tip:N?"Stop":"Read aloud",labelText:N?"Stop reading":"Read aloud",pressed:N,onClick:ga,children:(0,a.jsxs)("span",{className:"ui-ma__icon ui-ma__morph",children:[(0,a.jsx)("span",{className:"ui-ma__layer","data-on":N?void 0:"",children:(0,t.jsx)(p,{d:c.speaker})}),(0,a.jsxs)("span",{className:"ui-ma__layer ui-ma__eq","data-on":N?"":void 0,children:[(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{})]})]})}));return(0,a.jsxs)("div",{className:["ui-ma",z].filter(Boolean).join(" "),"data-quiet":B?"":void 0,"data-active":ba?"":void 0,children:[(0,a.jsx)("style",{href:"ui-message-actions",precedence:"default",children:na}),(0,a.jsx)("div",{className:"ui-ma__bar",role:"group","aria-label":d,children:xa}),m.includes("feedback")&&(0,a.jsx)("div",{id:`${f}-feedback`,className:"ui-ma__fold","data-open":F?"":void 0,inert:!F,children:(0,a.jsx)("div",{className:"ui-ma__clip",children:(0,a.jsxs)("div",{className:"ui-ma__panel",role:"group","aria-labelledby":`${f}-ask`,onKeyDown:e=>{e.key==="Escape"&&(e.stopPropagation(),Z())},children:[(0,a.jsxs)("div",{className:"ui-ma__panel-head",children:[(0,a.jsx)("span",{id:`${f}-ask`,className:"ui-ma__ask",children:"What went wrong?"}),(0,a.jsx)("button",{type:"button",className:"ui-ma__close","aria-label":"Close feedback",onClick:Z,children:(0,t.jsx)(p,{d:c.close})})]}),(0,a.jsxs)("div",{className:"ui-ma__chips",children:[O.map(e=>(0,a.jsx)("button",{type:"button",className:"ui-ma__chip","aria-pressed":v===e,disabled:l,onClick:()=>Y(v===e?null:e),children:e},e)),(0,a.jsx)("button",{type:"button",className:"ui-ma__send","data-sent":l?"":void 0,disabled:!v,"aria-disabled":l||void 0,onClick:Q,children:(0,t.jsx)(D,{id:l?"sent":"send",children:l?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{d:c.check}),"Thanks!"]}):"Send"})})]}),O.includes("Other")&&(0,a.jsx)("div",{className:"ui-ma__fold","data-open":v==="Other"&&!l?"":void 0,inert:v!=="Other"||l,children:(0,a.jsx)("div",{className:"ui-ma__clip",children:(0,a.jsx)("input",{className:"ui-ma__input",value:P,placeholder:"Tell us more (optional)","aria-label":"What went wrong, in your words",onChange:e=>K(e.target.value),onKeyDown:e=>{e.key==="Enter"&&Q()}})})})]})})}),(0,a.jsx)("span",{className:"ui-ma__sr","aria-live":"polite",children:ua})]})}var na=`
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

/* Two icons on top of each other \u2013 one blurs away while the other comes in */
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
`,ta=["Version 2.4 adds shared workspaces, cuts sync time in half and fixes the export bug on Windows.","Shared workspaces arrive in 2.4, sync is twice as fast, and exports on Windows work again.","In short: teams can now share a workspace, syncing takes half as long and Windows exports are fixed."];function sa(){let n=(0,i.useRef)(null),[m,_]=(0,i.useState)(0),[r,b]=(0,i.useState)(1),[h,o]=(0,i.useState)(0),[u,x]=(0,i.useState)(!1),[k,O]=(0,i.useState)(!1),S=(0,i.useRef)(!1),C=()=>{u||(x(!0),window.setTimeout(()=>{x(!1),b(d=>Math.min(ta.length,d+1))},1e3))};(0,i.useEffect)(()=>o(r-1),[r]),(0,i.useEffect)(()=>{let d=j=>()=>n.current?.querySelector(j)?.click(),z=[[700,d(".ui-ma__btn--copy")],[1e3,d(".ui-ma__btn--down")],[700,d(".ui-ma__chip:nth-child(2)")],[900,d(".ui-ma__send")],[2600,d(".ui-ma__btn--regenerate")],[2800,d(".ui-ma__step[data-dir='prev']")],[2e3,d(".ui-ma__step[data-dir='next']")],[3e3,()=>{b(1),o(0),_(j=>j+1)}]],f=0,s=0,A=()=>{S.current||f>=z.length||(s=window.setTimeout(()=>{S.current||(z[f][1](),f++,A())},z[f][0]))};return A(),()=>window.clearTimeout(s)},[m]);let T=()=>{S.current=!0,O(!0)},B=ta[h];return(0,a.jsx)("div",{ref:n,className:"ma-demo",onPointerEnter:T,onPointerDownCapture:T,onKeyDownCapture:T,onFocusCapture:T,children:(0,a.jsxs)("div",{className:"ma-demo__message","data-ui-message":"",children:[(0,a.jsxs)("div",{className:"ma-demo__card",children:[(0,a.jsx)("p",{className:"ma-demo__ask",children:"Summarize the 2.4 release notes in one sentence."}),(0,a.jsxs)("div",{className:"ma-demo__who",children:[(0,a.jsx)("span",{className:"ma-demo__dot","aria-hidden":"true"}),"Sonnet 5.5"]}),(0,a.jsx)("div",{className:"ma-demo__answer","data-writing":u?"":void 0,children:(0,t.jsx)(Na,{version:h,children:B})})]}),(0,a.jsx)("div",{className:"ma-demo__tray",children:(0,t.jsx)(Ta,{text:k?B:void 0,versions:r,version:h,onVersionChange:o,onRegenerate:C,regenerating:u},m)})]})})}(0,ra.createRoot)(document.getElementById("root")).render(oa.default.createElement(sa));
