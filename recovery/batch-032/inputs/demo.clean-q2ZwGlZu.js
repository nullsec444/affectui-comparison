import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t();function i({name:e,summary:t,icon:i,status:a,args:s,result:m,error:h,startedAt:g,duration:_,defaultOpen:y=!1,open:b,onOpenChange:x,openOnError:S=!0,onRetry:C,maxCodeHeight:w=220,className:T}){let E=(0,n.useId)(),[D,O]=(0,n.useState)(y),k=b??D,A=e=>{b===void 0&&O(e),x?.(e)},[j,M]=(0,n.useState)(a),[N,P]=(0,n.useState)(!1);a!==j&&(M(a),b===void 0&&S&&(a===`error`&&!D?(O(!0),P(!0)):j===`error`&&N&&(O(!1),P(!1))));let F=f(a===`running`,g,!1),I=a===`running`?F??0:_??F,L=a===`running`?`${e} running`:a===`success`?`${e} finished`:`${e} failed${h?`: ${h}`:``}`;return(0,r.jsxs)(`div`,{className:[`ui-tcc`,T].filter(Boolean).join(` `),"data-status":a,"data-open":k||void 0,children:[(0,r.jsx)(`style`,{href:`ui-tool-call-clean`,precedence:`default`,children:v}),(0,r.jsx)(`span`,{className:`ui-tcc-sr`,role:`status`,"aria-live":`polite`,children:L}),(0,r.jsxs)(`button`,{type:`button`,className:`ui-tcc__head`,"aria-expanded":k,"aria-controls":`${E}-body`,onClick:()=>{P(!1),A(!k)},children:[(0,r.jsx)(`span`,{className:`ui-tcc__icon`,"aria-hidden":`true`,children:i??(0,r.jsx)(d,{})}),(0,r.jsxs)(`span`,{className:`ui-tcc__main`,children:[(0,r.jsx)(`code`,{className:`ui-tcc__name`,children:e}),t!=null&&(0,r.jsx)(`span`,{className:`ui-tcc__summary`,title:typeof t==`string`?t:void 0,children:t})]}),(0,r.jsxs)(`span`,{className:`ui-tcc__status`,children:[a===`running`&&(0,r.jsx)(c,{}),a===`success`&&(0,r.jsxs)(`svg`,{className:`ui-tcc__ok`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`}),(0,r.jsx)(`path`,{d:`M5.1 8.2 7.1 10.1 10.9 6`,pathLength:1})]}),a===`error`&&(0,r.jsx)(l,{}),(0,r.jsx)(`span`,{className:`ui-tcc__time`,children:a===`error`?`Failed`:I==null?null:p(I,a===`running`)})]},a),(0,r.jsx)(u,{})]}),(0,r.jsx)(`div`,{className:`ui-tcc__body`,id:`${E}-body`,inert:!k,children:(0,r.jsx)(`div`,{className:`ui-tcc__clip`,children:(0,r.jsxs)(`div`,{className:`ui-tcc__sections`,children:[a===`error`&&(0,r.jsxs)(`div`,{className:`ui-tcc__error`,children:[(0,r.jsx)(l,{}),(0,r.jsx)(`p`,{className:`ui-tcc__error-text`,children:h??`The tool call failed.`}),C&&(0,r.jsxs)(`button`,{type:`button`,className:`ui-tcc__retry`,onClick:C,children:[(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`path`,{d:`M2.75 8a5.25 5.25 0 1 0 1.6-3.77`}),(0,r.jsx)(`path`,{d:`M2.5 2.5v2.75h2.75`})]}),`Retry`]})]}),s!==void 0&&(0,r.jsx)(o,{label:`Arguments`,value:s,cap:w}),m===void 0?a===`running`?(0,r.jsxs)(`div`,{className:`ui-tcc__section`,children:[(0,r.jsx)(`div`,{className:`ui-tcc__section-head`,children:(0,r.jsx)(`span`,{className:`ui-tcc__label`,children:`Result`})}),(0,r.jsx)(`p`,{className:`ui-tcc__pending`,children:`Waiting for result…`})]}):null:(0,r.jsx)(o,{label:`Result`,value:m,cap:w}),s===void 0&&m===void 0&&a===`success`&&(0,r.jsx)(`p`,{className:`ui-tcc__pending`,children:`No arguments or result.`})]})})})]})}function a({children:e,label:t,runningLabel:i=`Using tools…`,duration:a,defaultOpen:o=!1,open:s,onOpenChange:c,className:l}){let m=(0,n.useId)(),[h,g]=(0,n.useState)(o),_=s??h,y=n.Children.toArray(e).filter(n.isValidElement).map(e=>e.props),b=y.some(e=>e.status===`running`),x=y.filter(e=>e.status===`error`).length,S=f(b,void 0,!0),C=y.length&&y.every(e=>e.duration!=null)?y.reduce((e,t)=>e+(t.duration??0),0):null,w=b?S:a??C??S,T=`Used ${y.length} ${y.length===1?`tool`:`tools`}`,E=b?i:t??T,D=y.slice(-3);return(0,r.jsxs)(`div`,{className:[`ui-tcc-group`,l].filter(Boolean).join(` `),"data-running":b||void 0,"data-open":_||void 0,children:[(0,r.jsx)(`style`,{href:`ui-tool-call-clean`,precedence:`default`,children:v}),(0,r.jsx)(`span`,{className:`ui-tcc-sr`,role:`status`,"aria-live":`polite`,children:b?i:`${T}${x?`, ${x} failed`:``}`}),(0,r.jsxs)(`button`,{type:`button`,className:`ui-tcc-group__head`,"aria-expanded":_,"aria-controls":`${m}-list`,onClick:()=>{s===void 0&&g(!_),c?.(!_)},children:[(0,r.jsx)(`span`,{className:`ui-tcc-group__stack`,"aria-hidden":`true`,children:D.map((e,t)=>(0,r.jsx)(`span`,{className:`ui-tcc__icon`,children:e.icon??(0,r.jsx)(d,{})},y.length-D.length+t))}),(0,r.jsxs)(`span`,{className:`ui-tcc-group__title`,children:[(0,r.jsx)(`span`,{className:b?`ui-tcc-group__label ui-tcc__shine`:`ui-tcc-group__label`,"data-text":E,children:E}),!b&&x>0&&(0,r.jsxs)(`span`,{className:`ui-tcc-group__failed`,children:[`· `,x,` failed`]}),w!=null&&(0,r.jsxs)(`span`,{className:`ui-tcc-group__time`,children:[`· `,p(w,b)]})]},b?`busy`:`done`),(0,r.jsx)(u,{})]}),(0,r.jsx)(`div`,{className:`ui-tcc__body`,id:`${m}-list`,inert:!_,children:(0,r.jsx)(`div`,{className:`ui-tcc__clip`,children:(0,r.jsx)(`div`,{className:`ui-tcc-group__list`,children:e})})})]})}function o({label:e,value:t,cap:i}){let{text:a,json:o}=m(t),c=(0,n.useRef)(null),[l,u]=(0,n.useState)(!1),[d,f]=(0,n.useState)(0);(0,n.useLayoutEffect)(()=>{let e=c.current,t=e?.firstElementChild;if(!e||!t)return;let n=()=>f(e.scrollHeight);n();let r=new ResizeObserver(n);return r.observe(t),()=>r.disconnect()},[a]);let p=d>i+24;return(0,r.jsxs)(`div`,{className:`ui-tcc__section`,children:[(0,r.jsxs)(`div`,{className:`ui-tcc__section-head`,children:[(0,r.jsx)(`span`,{className:`ui-tcc__label`,children:e}),(0,r.jsx)(s,{text:a,label:e.toLowerCase()})]}),(0,r.jsx)(`pre`,{ref:c,className:`ui-tcc__code`,"data-capped":p&&!l||void 0,style:p?{maxHeight:l?d:i}:void 0,children:(0,r.jsx)(`code`,{children:o?g(a):a})}),p&&(0,r.jsx)(`button`,{type:`button`,className:`ui-tcc__more`,"aria-expanded":l,onClick:()=>u(!l),children:l?`Show less`:`Show all`})]})}function s({text:e,label:t}){let[i,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!i)return;let e=window.setTimeout(()=>a(!1),1400);return()=>window.clearTimeout(e)},[i]),(0,r.jsxs)(`button`,{type:`button`,className:`ui-tcc__copy`,"data-copied":i||void 0,"aria-label":i?`Copied`:`Copy ${t}`,title:i?`Copied`:`Copy ${t}`,onClick:()=>_(e).then(e=>e&&a(!0)),children:[(0,r.jsxs)(`svg`,{className:`ui-tcc__copy-icon`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`rect`,{x:`5.5`,y:`5.5`,width:`8.5`,height:`8.5`,rx:`2`}),(0,r.jsx)(`path`,{d:`M10.5 3.75v-.25A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5h.25`})]}),(0,r.jsx)(`svg`,{className:`ui-tcc__copy-done`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M3.5 8.4 6.6 11.3 12.5 4.9`,pathLength:1})})]})}function c(){return(0,r.jsxs)(`svg`,{className:`ui-tcc__spinner`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6`}),(0,r.jsx)(`path`,{d:`M8 2a6 6 0 0 1 6 6`})]})}function l(){return(0,r.jsxs)(`svg`,{className:`ui-tcc__err`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`}),(0,r.jsx)(`path`,{d:`M8 4.9v3.5M8 10.9v.1`})]})}function u(){return(0,r.jsx)(`svg`,{className:`ui-tcc__chevron`,viewBox:`0 0 12 12`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M3.5 5.25 6 7.75l2.5-2.5`})})}function d(){return(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,children:(0,r.jsx)(`path`,{d:`M10.2 2.4a3.5 3.5 0 0 0-4.3 4.6L2.6 10.3a1.4 1.4 0 0 0 2 2L7.9 9a3.5 3.5 0 0 0 4.6-4.3l-2 2-1.6-.4-.4-1.6 1.7-2.3Z`})})}function f(e,t,r){let i=(0,n.useRef)(null),a=(0,n.useRef)(0),[o,s]=(0,n.useState)(null);return(0,n.useEffect)(()=>{if(!e){i.current!==null&&(a.current+=Date.now()-i.current,i.current=null,s(a.current));return}r||(a.current=0),i.current=t??Date.now();let n=()=>s(a.current+Date.now()-(i.current??Date.now()));n();let o=window.setInterval(n,100);return()=>window.clearInterval(o)},[e,t,r]),o}function p(e,t){if(!t&&e<1e3)return`${Math.max(1,Math.round(e))}ms`;if(e<6e4)return`${(Math.floor(e/100)/10).toFixed(1)}s`;let n=Math.floor(e/1e3);return`${Math.floor(n/60)}m ${String(n%60).padStart(2,`0`)}s`}function m(e){if(typeof e==`string`){let t=e.trim();if(t.startsWith(`{`)||t.startsWith(`[`))try{return{text:JSON.stringify(JSON.parse(t),null,2),json:!0}}catch{}return{text:e,json:!1}}try{let t=JSON.stringify(e,null,2);return t===void 0?{text:String(e),json:!1}:{text:t,json:!0}}catch{return{text:String(e),json:!1}}}var h=/("(?:[^"\\]|\\.)*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;function g(e){let t=[],n=new RegExp(h.source,`g`),i=0,a;for(;a=n.exec(e);){if(a.index>i&&t.push(e.slice(i,a.index)),a[1]&&a[2])t.push((0,r.jsx)(`span`,{className:`ui-tcc__t-key`,children:a[1]},a.index),a[2]);else{let e=a[1]?`str`:/^[tfn]/.test(a[0])?`lit`:`num`;t.push((0,r.jsx)(`span`,{className:`ui-tcc__t-${e}`,children:a[0]},a.index))}i=a.index+a[0].length}return i<e.length&&t.push(e.slice(i)),t}async function _(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.style.cssText=`position:fixed;opacity:0`,document.body.appendChild(t),t.select();let n=document.execCommand(`copy`);return t.remove(),n}}var v=`
/* Colors and motion as variables – override them on .ui-tcc / .ui-tcc-group */
.ui-tcc,
.ui-tcc-group {
  --ui-tcc-card: #ffffff;
  --ui-tcc-strong: #000000;
  --ui-tcc-ink: rgba(0, 0, 0, 0.88);
  --ui-tcc-text: rgba(0, 0, 0, 0.61);
  --ui-tcc-muted: rgba(0, 0, 0, 0.45);
  --ui-tcc-faint: rgba(0, 0, 0, 0.27);
  --ui-tcc-icon: rgba(0, 0, 0, 0.447);
  --ui-tcc-line: rgba(0, 0, 0, 0.06);
  --ui-tcc-wash: rgba(0, 0, 0, 0.03);
  --ui-tcc-wash-big: rgba(0, 0, 0, 0.015);
  /* The code panel: a 2% black frame, kept opaque so the fade of capped blocks can end on it */
  --ui-tcc-code: #fafafa;
  --ui-tcc-accent: rgba(0, 96, 226, 0.765);
  --ui-tcc-red: #d93a2b;
  --ui-tcc-red-bg: rgba(217, 58, 43, 0.04);
  --ui-tcc-red-line: rgba(217, 58, 43, 0.14);
  --ui-tcc-key: rgba(0, 0, 0, 0.88);
  --ui-tcc-str: rgba(0, 123, 172, 0.9);
  --ui-tcc-num: #b25b0c;
  --ui-tcc-lit: #5b5bd6;
  --ui-tcc-shine: rgba(255, 255, 255, 0.82);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-tcc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-tcc-focus: rgba(0, 96, 226, 0.35);
  --ui-tcc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tcc-mono: ui-monospace, "SF Mono", Menlo, monospace;
  box-sizing: border-box;
  container-type: inline-size;
  min-width: 0;
  color: var(--ui-tcc-ink);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
.ui-tcc *,
.ui-tcc-group * { box-sizing: border-box; }

.ui-tcc {
  position: relative;
  border-radius: 10px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
}
.ui-tcc-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Header row: icon, name + summary, status, chevron – everything truncates before it overflows */
.ui-tcc__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 160ms ease, border-radius 0ms linear 380ms;
}
.ui-tcc[data-open] .ui-tcc__head {
  border-radius: 10px 10px 0 0;
  transition: background-color 160ms ease;
}
.ui-tcc__head:focus-visible,
.ui-tcc-group__head:focus-visible,
.ui-tcc__copy:focus-visible,
.ui-tcc__more:focus-visible,
.ui-tcc__retry:focus-visible {
  outline: 2px solid var(--ui-tcc-focus);
  outline-offset: 1px;
}
@media (hover: hover) {
  .ui-tcc__head:hover { background: var(--ui-tcc-wash-big); }
  .ui-tcc__head:hover .ui-tcc__chevron { stroke: var(--ui-tcc-ink); }
  .ui-tcc-group__head:hover { background: var(--ui-tcc-wash); color: var(--ui-tcc-ink); }
  .ui-tcc__copy:hover { background: var(--ui-tcc-wash-big); color: var(--ui-tcc-ink); }
  .ui-tcc__more:hover { color: var(--ui-tcc-ink); }
  .ui-tcc__retry:hover { background: var(--ui-tcc-wash-big); }
}

/* The tool's icon: a plain 16px glyph, no tile */
.ui-tcc__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--ui-tcc-icon);
}
.ui-tcc__icon > svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }

.ui-tcc__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.ui-tcc__name {
  flex: 0 1 auto;
  max-width: 55%;
  overflow: hidden;
  color: var(--ui-tcc-strong);
  font-family: var(--ui-tcc-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ui-tcc__summary {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: var(--ui-tcc-text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-tcc__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  color: var(--ui-tcc-muted);
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation: ui-tcc-in 360ms var(--ui-tcc-ease) both;
}
.ui-tcc[data-status="error"] .ui-tcc__status { color: var(--ui-tcc-red); font-weight: 500; }
.ui-tcc__status > svg { width: 14px; height: 14px; flex: none; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcc__spinner circle { stroke: var(--ui-tcc-line); stroke-width: 1.6; }
.ui-tcc__spinner path { stroke: var(--ui-tcc-accent); stroke-width: 1.6; }
.ui-tcc__spinner { animation: ui-tcc-spin 800ms linear infinite; }
/* Done: a solid blue dot whose white check draws itself */
.ui-tcc__ok { animation: ui-tcc-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both; }
.ui-tcc__ok circle { fill: var(--ui-tcc-accent); }
.ui-tcc__ok path { stroke: #fff; stroke-width: 1.5; stroke-dasharray: 1; stroke-dashoffset: 1; animation: ui-tcc-draw 360ms var(--ui-tcc-ease) 160ms forwards; }
.ui-tcc__err circle { fill: var(--ui-tcc-red); }
.ui-tcc__err path { stroke: #fff; stroke-width: 1.6; stroke-linecap: round; }

.ui-tcc__chevron {
  flex: none;
  width: 12px;
  height: 12px;
  fill: none;
  stroke: var(--ui-tcc-icon);
  stroke-width: 1.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 360ms var(--ui-tcc-ease), stroke 160ms ease;
}
.ui-tcc[data-open] > .ui-tcc__head .ui-tcc__chevron,
.ui-tcc-group[data-open] > .ui-tcc-group__head .ui-tcc__chevron { transform: rotate(180deg); }

/* Body: grows from 0fr to 1fr, so the height animates without measuring */
.ui-tcc__body {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 380ms var(--ui-tcc-ease), opacity 240ms ease;
}
.ui-tcc[data-open] > .ui-tcc__body,
.ui-tcc-group[data-open] > .ui-tcc__body {
  grid-template-rows: 1fr;
  opacity: 1;
}
.ui-tcc__clip { min-height: 0; overflow: hidden; }
.ui-tcc__sections {
  display: grid;
  gap: 14px;
  padding: 12px 14px 14px;
  border-top: 0.5px solid var(--ui-tcc-line);
}

.ui-tcc__section { display: grid; gap: 6px; min-width: 0; }
.ui-tcc__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 28px;
}
/* Tiny uppercase labels: "ARGUMENTS", "RESULT" */
.ui-tcc__label {
  color: var(--ui-tcc-muted);
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.ui-tcc__pending { margin: 0; color: var(--ui-tcc-muted); font-size: 12px; line-height: 16px; }

/* Copy: a small white icon button with the card's hairline */
.ui-tcc__copy {
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
  color: var(--ui-tcc-icon);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcc__copy svg {
  position: absolute;
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 200ms ease, transform 320ms var(--ui-tcc-ease), filter 200ms ease;
}
.ui-tcc__copy-icon rect { fill: currentColor; stroke: none; }
.ui-tcc__copy-done { opacity: 0; transform: scale(0.6); filter: blur(2px); stroke-width: 1.7; }
.ui-tcc__copy[data-copied] { color: var(--ui-tcc-accent); }
.ui-tcc__copy[data-copied] .ui-tcc__copy-icon { opacity: 0; transform: scale(0.6); filter: blur(2px); }
.ui-tcc__copy[data-copied] .ui-tcc__copy-done { opacity: 1; transform: none; filter: none; }

/* Code: a faint panel with a 0.5px frame; wraps instead of scrolling sideways, capped blocks fade out */
.ui-tcc__code {
  position: relative;
  margin: 0;
  padding: 10px 12px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--ui-tcc-code);
  box-shadow: inset 0 0 0 0.5px var(--ui-tcc-line);
  color: var(--ui-tcc-muted);
  font-family: var(--ui-tcc-mono);
  font-size: 12px;
  line-height: 20px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  tab-size: 2;
  transition: max-height 420ms var(--ui-tcc-ease);
}
.ui-tcc__code code { display: block; font: inherit; }
.ui-tcc__code::after {
  content: "";
  position: absolute;
  left: 0.5px;
  right: 0.5px;
  bottom: 0.5px;
  height: 56px;
  border-radius: 0 0 7.5px 7.5px;
  background: linear-gradient(to bottom, transparent, var(--ui-tcc-code));
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}
.ui-tcc__code[data-capped]::after { opacity: 1; }
.ui-tcc__t-key { color: var(--ui-tcc-key); }
.ui-tcc__t-str { color: var(--ui-tcc-str); }
.ui-tcc__t-num { color: var(--ui-tcc-num); }
.ui-tcc__t-lit { color: var(--ui-tcc-lit); }

.ui-tcc__more {
  all: unset;
  justify-self: start;
  padding: 2px 4px;
  margin-left: -4px;
  border-radius: 6px;
  color: var(--ui-tcc-text);
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color 160ms ease;
}

/* Error: the message on a faint red panel and an optional white Retry button */
.ui-tcc__error {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 8px 8px 8px 12px;
  border-radius: 8px;
  background: var(--ui-tcc-red-bg);
  box-shadow: inset 0 0 0 0.5px var(--ui-tcc-red-line);
}
.ui-tcc__error > .ui-tcc__err { flex: none; align-self: flex-start; width: 16px; height: 16px; margin-top: 6px; }
.ui-tcc__error-text {
  flex: 1;
  min-width: 0;
  margin: 0;
  color: var(--ui-tcc-red);
  font-size: 13px;
  line-height: 20px;
  overflow-wrap: anywhere;
}
.ui-tcc__retry {
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  height: 28px;
  padding: 0 10px 0 6px;
  border-radius: 6px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
  color: var(--ui-tcc-strong);
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tcc__retry svg { width: 16px; height: 16px; fill: none; stroke: var(--ui-tcc-icon); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcc__retry:active svg { transform: rotate(-60deg); transition: transform 200ms var(--ui-tcc-ease); }

/* Group: one quiet line with the tool icons stacked on small white tiles, the cards below */
.ui-tcc-group { display: grid; }
.ui-tcc-group__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-self: start;
  max-width: 100%;
  min-height: 32px;
  margin-left: -6px;
  padding: 4px 10px 4px 6px;
  border-radius: 8px;
  color: var(--ui-tcc-ink);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcc-group__stack { display: flex; flex: none; padding: 0.5px; }
.ui-tcc-group__stack .ui-tcc__icon {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
  animation: ui-tcc-pop 420ms var(--ui-tcc-ease) both;
}
.ui-tcc-group__stack .ui-tcc__icon + .ui-tcc__icon { margin-left: -4px; }
.ui-tcc-group__stack .ui-tcc__icon > svg { width: 12px; height: 12px; stroke-width: 1.5; }
.ui-tcc-group__title {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
  white-space: nowrap;
  animation: ui-tcc-in 360ms var(--ui-tcc-ease) both;
}
.ui-tcc-group__label {
  position: relative;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
  font-weight: 500;
}
.ui-tcc-group__label.ui-tcc__shine { color: var(--ui-tcc-muted); }
.ui-tcc-group__failed { flex: none; color: var(--ui-tcc-red); }
.ui-tcc-group__time { flex: none; color: var(--ui-tcc-faint); font-variant-numeric: tabular-nums; }
.ui-tcc-group__list { display: grid; gap: 8px; padding: 6px 0 2px; }

/* A soft light sweeping over "Using tools…" */
.ui-tcc__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tcc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tcc-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tcc-in {
  from { opacity: 0; transform: translateY(3px); filter: blur(2px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tcc-pop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-tcc-spin { to { transform: rotate(360deg); } }
@keyframes ui-tcc-draw { to { stroke-dashoffset: 0; } }
@keyframes ui-tcc-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

/* Narrow (phones): a little less padding, the summary gives way first */
@container (max-width: 360px) {
  .ui-tcc__head { gap: 8px; padding: 0 12px; }
  .ui-tcc__sections { padding: 12px 12px 12px; }
}
/* Touch screens: bigger tap targets */
@media (pointer: coarse) {
  .ui-tcc__head { min-height: 52px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tcc *,
  .ui-tcc-group *,
  .ui-tcc *::after,
  .ui-tcc-group *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tcc__shine::after { display: none; }
  .ui-tcc__ok path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tcc,
:where(.dark, [data-theme="dark"]) .ui-tcc-group {
  --ui-tcc-card: #1c1c1e;
  --ui-tcc-strong: #ffffff;
  --ui-tcc-ink: rgba(255, 255, 255, 0.9);
  --ui-tcc-text: rgba(255, 255, 255, 0.62);
  --ui-tcc-muted: rgba(255, 255, 255, 0.46);
  --ui-tcc-faint: rgba(255, 255, 255, 0.3);
  --ui-tcc-icon: rgba(255, 255, 255, 0.5);
  --ui-tcc-line: rgba(255, 255, 255, 0.08);
  --ui-tcc-wash: rgba(255, 255, 255, 0.04);
  --ui-tcc-wash-big: rgba(255, 255, 255, 0.025);
  --ui-tcc-code: #212123;
  --ui-tcc-accent: #4d8dff;
  --ui-tcc-red: #ff7b72;
  --ui-tcc-red-bg: rgba(255, 110, 100, 0.07);
  --ui-tcc-red-line: rgba(255, 110, 100, 0.18);
  --ui-tcc-key: rgba(255, 255, 255, 0.9);
  --ui-tcc-str: #5fc8e8;
  --ui-tcc-num: #f2a65a;
  --ui-tcc-lit: #a5a5ff;
  --ui-tcc-shine: #ffffff;
  --ui-tcc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tcc-focus: rgba(77, 141, 255, 0.5);
}
`,y=[0,1500,2700,4300,5400,6700,8e3],b=11500,x={results:[{title:`HubSpot Sales Hub pricing`,url:`https://www.hubspot.com/pricing/sales`,price_per_seat:90},{title:`Pipedrive plans and pricing`,url:`https://www.pipedrive.com/en/pricing`,price_per_seat:49},{title:`Attio pricing`,url:`https://attio.com/pricing`,price_per_seat:59},{title:`Salesforce Starter Suite`,url:`https://www.salesforce.com/sales/pricing`,price_per_seat:25},{title:`Close CRM pricing`,url:`https://www.close.com/pricing`,price_per_seat:49}],total:5,cached:!1};function S(){let[e,t]=(0,n.useState)(0),[o,s]=(0,n.useState)(0),[c,l]=(0,n.useState)(!0),u=(0,n.useRef)(!1);(0,n.useEffect)(()=>{u.current=!1,s(0),l(!0);let e=y.slice(1).map((e,t)=>window.setTimeout(()=>s(e=>Math.max(e,t+1)),e));return e.push(window.setTimeout(()=>!u.current&&l(!1),y[6])),e.push(window.setTimeout(()=>!u.current&&t(e=>e+1),b)),()=>e.forEach(clearTimeout)},[e]);let d=o===2?`error`:o>=4?`success`:`running`;return(0,r.jsx)(`div`,{className:`tc-demo`,children:(0,r.jsxs)(`div`,{className:`tc-demo__chat`,children:[(0,r.jsx)(`p`,{className:`tc-demo__you`,children:`Compare CRM pricing for our 10-person team and check open deals.`}),(0,r.jsxs)(a,{open:c,onOpenChange:e=>{u.current=!0,l(e)},children:[(0,r.jsx)(i,{name:`search_web`,icon:(0,r.jsx)(C,{}),status:o>=1?`success`:`running`,summary:o>=1?`Searched the web for 'CRM pricing 2026'`:`Searching the web for 'CRM pricing 2026'`,args:{query:`CRM pricing 2026 small sales team`,max_results:5},result:o>=1?x:void 0}),o>=1&&(0,r.jsx)(i,{name:`fetch_page`,icon:(0,r.jsx)(w,{}),status:d,summary:d===`success`?`Read hubspot.com/pricing`:`Reading hubspot.com/pricing`,args:{url:`https://www.hubspot.com/pricing/sales`,timeout_ms:8e3},result:d===`success`?{status:200,title:`Sales Hub Pricing`,words:2140}:void 0,error:`Request timed out after 8s – hubspot.com didn't respond.`,onRetry:()=>s(e=>Math.max(e,3))}),o>=4&&(0,r.jsx)(i,{name:`crm.list_deals`,icon:(0,r.jsx)(T,{}),status:o>=5?`success`:`running`,summary:o>=5?`Found 4 open deals in negotiation`:`Looking up open deals`,args:{stage:`negotiation`,owner:`me`,limit:10},result:o>=5?{count:4,deals:[{name:`Northwind`,value:18400},{name:`Globex`,value:9600}]}:void 0})]},e)]})})}function C(){return(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,children:[(0,r.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.25`}),(0,r.jsx)(`path`,{d:`m10.25 10.25 3 3`})]})}function w(){return(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,children:[(0,r.jsx)(`path`,{d:`M4 2.75h5l3 3v7.5H4z`}),(0,r.jsx)(`path`,{d:`M9 2.75v3h3M6 9h4M6 11h3`})]})}function T(){return(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,children:[(0,r.jsx)(`ellipse`,{cx:`8`,cy:`4`,rx:`4.75`,ry:`1.75`}),(0,r.jsx)(`path`,{d:`M3.25 4v8c0 .97 2.13 1.75 4.75 1.75s4.75-.78 4.75-1.75V4M3.25 8c0 .97 2.13 1.75 4.75 1.75S12.75 8.97 12.75 8`})]})}export{S as default};