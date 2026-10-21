import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t();function i({name:e,summary:t,icon:i,status:a,args:s,result:m,error:h,startedAt:g,duration:_,defaultOpen:y=!1,open:b,onOpenChange:x,openOnError:S=!0,onRetry:C,maxCodeHeight:w=220,className:T}){let E=(0,n.useId)(),[D,O]=(0,n.useState)(y),k=b??D,A=e=>{b===void 0&&O(e),x?.(e)},[j,M]=(0,n.useState)(a),[N,P]=(0,n.useState)(!1);a!==j&&(M(a),b===void 0&&S&&(a===`error`&&!D?(O(!0),P(!0)):j===`error`&&N&&(O(!1),P(!1))));let F=f(a===`running`,g,!1),I=a===`running`?F??0:_??F,L=a===`running`?`${e} running`:a===`success`?`${e} finished`:`${e} failed${h?`: ${h}`:``}`;return(0,r.jsxs)(`div`,{className:[`ui-tc`,T].filter(Boolean).join(` `),"data-status":a,"data-open":k||void 0,children:[(0,r.jsx)(`style`,{href:`ui-tool-call`,precedence:`default`,children:v}),(0,r.jsx)(`span`,{className:`ui-tc-sr`,role:`status`,"aria-live":`polite`,children:L}),(0,r.jsxs)(`button`,{type:`button`,className:`ui-tc__head`,"aria-expanded":k,"aria-controls":`${E}-body`,onClick:()=>{P(!1),A(!k)},children:[(0,r.jsx)(`span`,{className:`ui-tc__icon`,"aria-hidden":`true`,children:i??(0,r.jsx)(d,{})}),(0,r.jsxs)(`span`,{className:`ui-tc__main`,children:[(0,r.jsx)(`code`,{className:`ui-tc__name`,children:e}),t!=null&&(0,r.jsx)(`span`,{className:`ui-tc__summary`,title:typeof t==`string`?t:void 0,children:t})]}),(0,r.jsxs)(`span`,{className:`ui-tc__status`,children:[a===`running`&&(0,r.jsx)(c,{}),a===`success`&&(0,r.jsx)(`svg`,{className:`ui-tc__ok`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M3.5 8.4 6.6 11.3 12.5 4.9`,pathLength:1})}),a===`error`&&(0,r.jsx)(l,{}),(0,r.jsx)(`span`,{className:`ui-tc__time`,children:a===`error`?`Failed`:I==null?null:p(I,a===`running`)})]},a),(0,r.jsx)(u,{})]}),(0,r.jsx)(`div`,{className:`ui-tc__body`,id:`${E}-body`,inert:!k,children:(0,r.jsx)(`div`,{className:`ui-tc__clip`,children:(0,r.jsxs)(`div`,{className:`ui-tc__sections`,children:[a===`error`&&(0,r.jsxs)(`div`,{className:`ui-tc__error`,children:[(0,r.jsx)(l,{}),(0,r.jsx)(`p`,{className:`ui-tc__error-text`,children:h??`The tool call failed.`}),C&&(0,r.jsxs)(`button`,{type:`button`,className:`ui-tc__retry`,onClick:C,children:[(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`path`,{d:`M2.75 8a5.25 5.25 0 1 0 1.6-3.77`}),(0,r.jsx)(`path`,{d:`M2.5 2.5v2.75h2.75`})]}),`Retry`]})]}),s!==void 0&&(0,r.jsx)(o,{label:`Arguments`,value:s,cap:w}),m===void 0?a===`running`?(0,r.jsxs)(`div`,{className:`ui-tc__section`,children:[(0,r.jsx)(`div`,{className:`ui-tc__section-head`,children:(0,r.jsx)(`span`,{className:`ui-tc__label`,children:`Result`})}),(0,r.jsx)(`p`,{className:`ui-tc__pending`,children:`Waiting for result…`})]}):null:(0,r.jsx)(o,{label:`Result`,value:m,cap:w}),s===void 0&&m===void 0&&a===`success`&&(0,r.jsx)(`p`,{className:`ui-tc__pending`,children:`No arguments or result.`})]})})})]})}function a({children:e,label:t,runningLabel:i=`Using tools…`,duration:a,defaultOpen:o=!1,open:s,onOpenChange:c,className:l}){let m=(0,n.useId)(),[h,g]=(0,n.useState)(o),_=s??h,y=n.Children.toArray(e).filter(n.isValidElement).map(e=>e.props),b=y.some(e=>e.status===`running`),x=y.filter(e=>e.status===`error`).length,S=f(b,void 0,!0),C=y.length&&y.every(e=>e.duration!=null)?y.reduce((e,t)=>e+(t.duration??0),0):null,w=b?S:a??C??S,T=`Used ${y.length} ${y.length===1?`tool`:`tools`}`,E=b?i:t??T,D=y.slice(-3);return(0,r.jsxs)(`div`,{className:[`ui-tc-group`,l].filter(Boolean).join(` `),"data-running":b||void 0,"data-open":_||void 0,children:[(0,r.jsx)(`style`,{href:`ui-tool-call`,precedence:`default`,children:v}),(0,r.jsx)(`span`,{className:`ui-tc-sr`,role:`status`,"aria-live":`polite`,children:b?i:`${T}${x?`, ${x} failed`:``}`}),(0,r.jsxs)(`button`,{type:`button`,className:`ui-tc-group__head`,"aria-expanded":_,"aria-controls":`${m}-list`,onClick:()=>{s===void 0&&g(!_),c?.(!_)},children:[(0,r.jsx)(`span`,{className:`ui-tc-group__stack`,"aria-hidden":`true`,children:D.map((e,t)=>(0,r.jsx)(`span`,{className:`ui-tc__icon`,children:e.icon??(0,r.jsx)(d,{})},y.length-D.length+t))}),(0,r.jsxs)(`span`,{className:`ui-tc-group__title`,children:[(0,r.jsx)(`span`,{className:b?`ui-tc-group__label ui-tc__shine`:`ui-tc-group__label`,"data-text":E,children:E}),!b&&x>0&&(0,r.jsxs)(`span`,{className:`ui-tc-group__failed`,children:[`· `,x,` failed`]}),w!=null&&(0,r.jsxs)(`span`,{className:`ui-tc-group__time`,children:[`· `,p(w,b)]})]},b?`busy`:`done`),(0,r.jsx)(u,{})]}),(0,r.jsx)(`div`,{className:`ui-tc__body`,id:`${m}-list`,inert:!_,children:(0,r.jsx)(`div`,{className:`ui-tc__clip`,children:(0,r.jsx)(`div`,{className:`ui-tc-group__list`,children:e})})})]})}function o({label:e,value:t,cap:i}){let{text:a,json:o}=m(t),c=(0,n.useRef)(null),[l,u]=(0,n.useState)(!1),[d,f]=(0,n.useState)(0);(0,n.useLayoutEffect)(()=>{let e=c.current,t=e?.firstElementChild;if(!e||!t)return;let n=()=>f(e.scrollHeight);n();let r=new ResizeObserver(n);return r.observe(t),()=>r.disconnect()},[a]);let p=d>i+24;return(0,r.jsxs)(`div`,{className:`ui-tc__section`,children:[(0,r.jsxs)(`div`,{className:`ui-tc__section-head`,children:[(0,r.jsx)(`span`,{className:`ui-tc__label`,children:e}),(0,r.jsx)(s,{text:a,label:e.toLowerCase()})]}),(0,r.jsx)(`pre`,{ref:c,className:`ui-tc__code`,"data-capped":p&&!l||void 0,style:p?{maxHeight:l?d:i}:void 0,children:(0,r.jsx)(`code`,{children:o?g(a):a})}),p&&(0,r.jsx)(`button`,{type:`button`,className:`ui-tc__more`,"aria-expanded":l,onClick:()=>u(!l),children:l?`Show less`:`Show all`})]})}function s({text:e,label:t}){let[i,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!i)return;let e=window.setTimeout(()=>a(!1),1400);return()=>window.clearTimeout(e)},[i]),(0,r.jsxs)(`button`,{type:`button`,className:`ui-tc__copy`,"data-copied":i||void 0,"aria-label":i?`Copied`:`Copy ${t}`,title:i?`Copied`:`Copy ${t}`,onClick:()=>_(e).then(e=>e&&a(!0)),children:[(0,r.jsxs)(`svg`,{className:`ui-tc__copy-icon`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`rect`,{x:`5.25`,y:`5.25`,width:`8`,height:`8`,rx:`2`}),(0,r.jsx)(`path`,{d:`M10.75 5.25v-1a1.5 1.5 0 0 0-1.5-1.5h-4.5a2 2 0 0 0-2 2v4.5a1.5 1.5 0 0 0 1.5 1.5h1`})]}),(0,r.jsx)(`svg`,{className:`ui-tc__copy-done`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M3.5 8.4 6.6 11.3 12.5 4.9`,pathLength:1})})]})}function c(){return(0,r.jsxs)(`svg`,{className:`ui-tc__spinner`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`circle`,{cx:`8`,cy:`8`,r:`5.75`}),(0,r.jsx)(`path`,{d:`M8 2.25a5.75 5.75 0 0 1 5.75 5.75`})]})}function l(){return(0,r.jsxs)(`svg`,{className:`ui-tc__err`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6`}),(0,r.jsx)(`path`,{d:`M8 5v3.4M8 10.9v.1`})]})}function u(){return(0,r.jsx)(`svg`,{className:`ui-tc__chevron`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M4.5 6.25 8 9.75l3.5-3.5`})})}function d(){return(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,children:(0,r.jsx)(`path`,{d:`M10.2 2.4a3.5 3.5 0 0 0-4.3 4.6L2.6 10.3a1.4 1.4 0 0 0 2 2L7.9 9a3.5 3.5 0 0 0 4.6-4.3l-2 2-1.6-.4-.4-1.6 1.7-2.3Z`})})}function f(e,t,r){let i=(0,n.useRef)(null),a=(0,n.useRef)(0),[o,s]=(0,n.useState)(null);return(0,n.useEffect)(()=>{if(!e){i.current!==null&&(a.current+=Date.now()-i.current,i.current=null,s(a.current));return}r||(a.current=0),i.current=t??Date.now();let n=()=>s(a.current+Date.now()-(i.current??Date.now()));n();let o=window.setInterval(n,100);return()=>window.clearInterval(o)},[e,t,r]),o}function p(e,t){if(!t&&e<1e3)return`${Math.max(1,Math.round(e))}ms`;if(e<6e4)return`${(Math.floor(e/100)/10).toFixed(1)}s`;let n=Math.floor(e/1e3);return`${Math.floor(n/60)}m ${String(n%60).padStart(2,`0`)}s`}function m(e){if(typeof e==`string`){let t=e.trim();if(t.startsWith(`{`)||t.startsWith(`[`))try{return{text:JSON.stringify(JSON.parse(t),null,2),json:!0}}catch{}return{text:e,json:!1}}try{let t=JSON.stringify(e,null,2);return t===void 0?{text:String(e),json:!1}:{text:t,json:!0}}catch{return{text:String(e),json:!1}}}var h=/("(?:[^"\\]|\\.)*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;function g(e){let t=[],n=new RegExp(h.source,`g`),i=0,a;for(;a=n.exec(e);){if(a.index>i&&t.push(e.slice(i,a.index)),a[1]&&a[2])t.push((0,r.jsx)(`span`,{className:`ui-tc__t-key`,children:a[1]},a.index),a[2]);else{let e=a[1]?`str`:/^[tfn]/.test(a[0])?`lit`:`num`;t.push((0,r.jsx)(`span`,{className:`ui-tc__t-${e}`,children:a[0]},a.index))}i=a.index+a[0].length}return i<e.length&&t.push(e.slice(i)),t}async function _(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.style.cssText=`position:fixed;opacity:0`,document.body.appendChild(t),t.select();let n=document.execCommand(`copy`);return t.remove(),n}}var v=`
.ui-tc,
.ui-tc-group {
  --ui-tc-ink: #171717;
  --ui-tc-text: #6b6b6b;
  --ui-tc-muted: #8a8a8a;
  --ui-tc-bg: #ffffff;
  --ui-tc-line: #e7e7e7;
  --ui-tc-hover: #fafafa;
  --ui-tc-tile: #f5f5f5;
  --ui-tc-code: #fafafa;
  --ui-tc-ring: #ffffff;
  --ui-tc-red: #c8372d;
  --ui-tc-red-bg: rgba(200, 55, 45, 0.06);
  --ui-tc-red-line: rgba(200, 55, 45, 0.16);
  --ui-tc-key: #171717;
  --ui-tc-str: #0f7b6c;
  --ui-tc-num: #b25b0c;
  --ui-tc-lit: #6e56cf;
  --ui-tc-shine: rgba(255, 255, 255, 0.82);
  --ui-tc-focus: rgba(23, 23, 23, 0.22);
  --ui-tc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tc-mono: ui-monospace, "SF Mono", Menlo, monospace;
  box-sizing: border-box;
  min-width: 0;
  color: var(--ui-tc-text);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13.5px;
  line-height: 1.4;
  letter-spacing: -0.006em;
  -webkit-font-smoothing: antialiased;
}
.ui-tc *,
.ui-tc-group * { box-sizing: border-box; }

.ui-tc {
  position: relative;
  border-radius: 12px;
  background: var(--ui-tc-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line), 0 1px 2px rgba(0, 0, 0, 0.04);
}
.ui-tc-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Header: icon, name + summary, status, chevron – everything truncates before it overflows */
.ui-tc__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 8px 10px 8px 9px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tc[data-open] .ui-tc__head { border-radius: 12px 12px 0 0; }
.ui-tc__head:focus-visible,
.ui-tc-group__head:focus-visible,
.ui-tc__copy:focus-visible,
.ui-tc__more:focus-visible,
.ui-tc__retry:focus-visible {
  outline: 2px solid var(--ui-tc-focus);
  outline-offset: 2px;
}
@media (hover: hover) {
  .ui-tc__head:hover { background: var(--ui-tc-hover); }
  .ui-tc-group__head:hover { background: var(--ui-tc-hover); color: var(--ui-tc-ink); }
  .ui-tc__copy:hover { background: var(--ui-tc-hover); color: var(--ui-tc-ink); }
  .ui-tc__more:hover { color: var(--ui-tc-ink); }
  .ui-tc__retry:hover { background: var(--ui-tc-hover); }
}

.ui-tc__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: var(--ui-tc-tile);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line);
  color: var(--ui-tc-ink);
}
.ui-tc__icon > svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }

.ui-tc__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.ui-tc__name {
  flex: 0 1 auto;
  max-width: 55%;
  overflow: hidden;
  color: var(--ui-tc-ink);
  font-family: var(--ui-tc-mono);
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ui-tc__summary {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: var(--ui-tc-text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-tc__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  color: var(--ui-tc-muted);
  font-size: 12.5px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation: ui-tc-in 360ms var(--ui-tc-ease) both;
}
.ui-tc[data-status="error"] .ui-tc__status { color: var(--ui-tc-red); }
.ui-tc__status > svg { width: 14px; height: 14px; flex: none; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ui-tc__spinner circle { stroke: currentColor; stroke-width: 1.6; opacity: 0.22; }
.ui-tc__spinner path { stroke: var(--ui-tc-ink); stroke-width: 1.6; }
.ui-tc__spinner { animation: ui-tc-spin 800ms linear infinite; }
.ui-tc__ok { stroke: var(--ui-tc-ink); stroke-width: 1.8; }
.ui-tc__ok path { stroke-dasharray: 1; stroke-dashoffset: 1; animation: ui-tc-draw 360ms var(--ui-tc-ease) 80ms forwards; }
.ui-tc__err { stroke: var(--ui-tc-red); stroke-width: 1.5; }

.ui-tc__chevron {
  flex: none;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--ui-tc-muted);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 360ms var(--ui-tc-ease);
}
.ui-tc[data-open] > .ui-tc__head .ui-tc__chevron,
.ui-tc-group[data-open] > .ui-tc-group__head .ui-tc__chevron { transform: rotate(180deg); }

/* Body: grows from 0fr to 1fr, so the height animates without measuring */
.ui-tc__body {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 380ms var(--ui-tc-ease), opacity 240ms ease;
}
.ui-tc[data-open] > .ui-tc__body,
.ui-tc-group[data-open] > .ui-tc__body {
  grid-template-rows: 1fr;
  opacity: 1;
}
.ui-tc__clip { min-height: 0; overflow: hidden; }
.ui-tc__sections {
  display: grid;
  gap: 12px;
  padding: 12px;
  border-top: 1px solid var(--ui-tc-line);
}

.ui-tc__section { display: grid; gap: 6px; min-width: 0; }
.ui-tc__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 24px;
}
.ui-tc__label { color: var(--ui-tc-muted); font-size: 12px; font-weight: 500; }
.ui-tc__pending { margin: 0; color: var(--ui-tc-muted); font-size: 12.5px; }

.ui-tc__copy {
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  color: var(--ui-tc-muted);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tc__copy svg {
  position: absolute;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 200ms ease, transform 320ms var(--ui-tc-ease), filter 200ms ease;
}
.ui-tc__copy-done { opacity: 0; transform: scale(0.6); filter: blur(2px); stroke-width: 1.7; }
.ui-tc__copy[data-copied] { color: var(--ui-tc-ink); }
.ui-tc__copy[data-copied] .ui-tc__copy-icon { opacity: 0; transform: scale(0.6); filter: blur(2px); }
.ui-tc__copy[data-copied] .ui-tc__copy-done { opacity: 1; transform: none; filter: none; }

/* Code: wraps instead of scrolling sideways; capped blocks fade out at the bottom */
.ui-tc__code {
  position: relative;
  margin: 0;
  padding: 10px 12px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--ui-tc-code);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line);
  color: var(--ui-tc-muted);
  font-family: var(--ui-tc-mono);
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  tab-size: 2;
  transition: max-height 420ms var(--ui-tc-ease);
}
.ui-tc__code code { display: block; font: inherit; }
.ui-tc__code::after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  bottom: 1px;
  height: 56px;
  border-radius: 0 0 7px 7px;
  background: linear-gradient(to bottom, transparent, var(--ui-tc-code));
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}
.ui-tc__code[data-capped]::after { opacity: 1; }
.ui-tc__t-key { color: var(--ui-tc-key); }
.ui-tc__t-str { color: var(--ui-tc-str); }
.ui-tc__t-num { color: var(--ui-tc-num); }
.ui-tc__t-lit { color: var(--ui-tc-lit); }

.ui-tc__more {
  all: unset;
  justify-self: start;
  padding: 2px 4px;
  margin-left: -4px;
  border-radius: 5px;
  color: var(--ui-tc-text);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: color 160ms ease;
}

/* Error: the message and an optional retry */
.ui-tc__error {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 9px 10px 9px 11px;
  border-radius: 8px;
  background: var(--ui-tc-red-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tc-red-line);
}
.ui-tc__error > .ui-tc__err { flex: none; width: 14px; height: 14px; margin-top: 2px; fill: none; stroke-linecap: round; }
.ui-tc__error-text {
  flex: 1;
  min-width: 0;
  margin: 0;
  color: var(--ui-tc-red);
  font-size: 13px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}
.ui-tc__retry {
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex: none;
  height: 26px;
  margin: -3px 0;
  padding: 0 10px 0 8px;
  border-radius: 7px;
  background: var(--ui-tc-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  color: var(--ui-tc-ink);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tc__retry svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.ui-tc__retry:active svg { transform: rotate(-60deg); transition: transform 200ms var(--ui-tc-ease); }

/* Group: one quiet line with the tool icons stacked, the cards below */
.ui-tc-group { display: grid; }
.ui-tc-group__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 9px;
  justify-self: start;
  max-width: 100%;
  min-height: 36px;
  padding: 4px 10px 4px 5px;
  border-radius: 10px;
  color: var(--ui-tc-text);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tc-group__stack { display: flex; flex: none; }
.ui-tc-group__stack .ui-tc__icon {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  box-shadow: inset 0 0 0 1px var(--ui-tc-line), 0 0 0 2px var(--ui-tc-ring);
  animation: ui-tc-pop 420ms var(--ui-tc-ease) both;
}
.ui-tc-group__stack .ui-tc__icon + .ui-tc__icon { margin-left: -5px; }
.ui-tc-group__stack .ui-tc__icon > svg { width: 13px; height: 13px; }
.ui-tc-group__title {
  display: flex;
  align-items: baseline;
  gap: 5px;
  min-width: 0;
  white-space: nowrap;
  animation: ui-tc-in 360ms var(--ui-tc-ease) both;
}
.ui-tc-group__label {
  position: relative;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
  font-weight: 500;
}
.ui-tc-group__failed { flex: none; color: var(--ui-tc-red); }
.ui-tc-group__time { flex: none; color: var(--ui-tc-muted); font-variant-numeric: tabular-nums; }
.ui-tc-group__list { display: grid; gap: 8px; padding-top: 8px; }

/* A soft light sweeping over "Using tools…" */
.ui-tc__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tc-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tc-in {
  from { opacity: 0; transform: translateY(3px); filter: blur(2px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tc-pop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-tc-spin { to { transform: rotate(360deg); } }
@keyframes ui-tc-draw { to { stroke-dashoffset: 0; } }
@keyframes ui-tc-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tc *,
  .ui-tc-group *,
  .ui-tc *::after,
  .ui-tc-group *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tc__shine::after { display: none; }
  .ui-tc__ok path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tc,
:where(.dark, [data-theme="dark"]) .ui-tc-group {
  --ui-tc-ink: #ededed;
  --ui-tc-text: #a1a1a1;
  --ui-tc-muted: #7c7c7c;
  --ui-tc-bg: #161618;
  --ui-tc-line: rgba(255, 255, 255, 0.1);
  --ui-tc-hover: rgba(255, 255, 255, 0.035);
  --ui-tc-tile: #1d1d20;
  --ui-tc-code: #1d1d20;
  --ui-tc-ring: #161618;
  --ui-tc-red: #ff7b72;
  --ui-tc-red-bg: rgba(255, 110, 100, 0.08);
  --ui-tc-red-line: rgba(255, 110, 100, 0.2);
  --ui-tc-key: #ededed;
  --ui-tc-str: #5fd4b8;
  --ui-tc-num: #f2a65a;
  --ui-tc-lit: #b5a4ff;
  --ui-tc-shine: rgba(255, 255, 255, 0.95);
  --ui-tc-focus: rgba(255, 255, 255, 0.3);
}
:where(.dark, [data-theme="dark"]) .ui-tc { box-shadow: inset 0 0 0 1px var(--ui-tc-line); }
`;export{a as n,i as t};