import{a as P}from"../shared/chunk-PWBCLQI6.js";import{a as T}from"../shared/chunk-LKG2PFLG.js";import{a as M}from"../shared/chunk-KHKHHDEU.js";import{b as w}from"../shared/chunk-MOQMIKSW.js";var q=w(T()),V=w(P());var W=w(T()),Y=w(M()),t=w(M()),l=Y,o=W;function R({name:i,summary:c,icon:a,status:e,args:r,result:s,error:n,startedAt:m,duration:u,defaultOpen:x=!1,open:_,onOpenChange:g,openOnError:d=!0,onRetry:p,maxCodeHeight:f=220,className:N}){let S=(0,o.useId)(),[y,b]=(0,o.useState)(x),v=_??y,j=E=>{_===void 0&&b(E),g?.(E)},[h,k]=(0,o.useState)(e),[G,C]=(0,o.useState)(!1);e!==h&&(k(e),_===void 0&&d&&(e==="error"&&!y?(b(!0),C(!0)):h==="error"&&G&&(b(!1),C(!1))));let $=H(e==="running",m,!1),z=e==="running"?$??0:u??$,J=e==="running"?`${i} running`:e==="success"?`${i} finished`:`${i} failed${n?`: ${n}`:""}`;return(0,t.jsxs)("div",{className:["ui-tcc",N].filter(Boolean).join(" "),"data-status":e,"data-open":v||void 0,children:[(0,t.jsx)("style",{href:"ui-tool-call-clean",precedence:"default",children:U}),(0,t.jsx)("span",{className:"ui-tcc-sr",role:"status","aria-live":"polite",children:J}),(0,t.jsxs)("button",{type:"button",className:"ui-tcc__head","aria-expanded":v,"aria-controls":`${S}-body`,onClick:()=>{C(!1),j(!v)},children:[(0,t.jsx)("span",{className:"ui-tcc__icon","aria-hidden":"true",children:a??(0,l.jsx)(D,{})}),(0,t.jsxs)("span",{className:"ui-tcc__main",children:[(0,t.jsx)("code",{className:"ui-tcc__name",children:i}),c!=null&&(0,t.jsx)("span",{className:"ui-tcc__summary",title:typeof c=="string"?c:void 0,children:c})]}),(0,t.jsxs)("span",{className:"ui-tcc__status",children:[e==="running"&&(0,l.jsx)(Q,{}),e==="success"&&(0,t.jsxs)("svg",{className:"ui-tcc__ok",viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,t.jsx)("circle",{cx:"8",cy:"8",r:"7"}),(0,t.jsx)("path",{d:"M5.1 8.2 7.1 10.1 10.9 6",pathLength:1})]}),e==="error"&&(0,l.jsx)(O,{}),(0,t.jsx)("span",{className:"ui-tcc__time",children:e==="error"?"Failed":z==null?null:I(z,e==="running")})]},e),(0,l.jsx)(A,{})]}),(0,t.jsx)("div",{className:"ui-tcc__body",id:`${S}-body`,inert:!v,children:(0,t.jsx)("div",{className:"ui-tcc__clip",children:(0,t.jsxs)("div",{className:"ui-tcc__sections",children:[e==="error"&&(0,t.jsxs)("div",{className:"ui-tcc__error",children:[(0,l.jsx)(O,{}),(0,t.jsx)("p",{className:"ui-tcc__error-text",children:n??"The tool call failed."}),p&&(0,t.jsxs)("button",{type:"button",className:"ui-tcc__retry",onClick:p,children:[(0,t.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M2.75 8a5.25 5.25 0 1 0 1.6-3.77"}),(0,t.jsx)("path",{d:"M2.5 2.5v2.75h2.75"})]}),"Retry"]})]}),r!==void 0&&(0,l.jsx)(B,{label:"Arguments",value:r,cap:f}),s===void 0?e==="running"?(0,t.jsxs)("div",{className:"ui-tcc__section",children:[(0,t.jsx)("div",{className:"ui-tcc__section-head",children:(0,t.jsx)("span",{className:"ui-tcc__label",children:"Result"})}),(0,t.jsx)("p",{className:"ui-tcc__pending",children:"Waiting for result\u2026"})]}):null:(0,l.jsx)(B,{label:"Result",value:s,cap:f}),r===void 0&&s===void 0&&e==="success"&&(0,t.jsx)("p",{className:"ui-tcc__pending",children:"No arguments or result."})]})})})]})}function Z({children:i,label:c,runningLabel:a="Using tools\u2026",duration:e,defaultOpen:r=!1,open:s,onOpenChange:n,className:m}){let u=(0,o.useId)(),[x,_]=(0,o.useState)(r),g=s??x,d=o.Children.toArray(i).filter(o.isValidElement).map(h=>h.props),p=d.some(h=>h.status==="running"),f=d.filter(h=>h.status==="error").length,N=H(p,void 0,!0),S=d.length&&d.every(h=>h.duration!=null)?d.reduce((h,k)=>h+(k.duration??0),0):null,y=p?N:e??S??N,b=`Used ${d.length} ${d.length===1?"tool":"tools"}`,v=p?a:c??b,j=d.slice(-3);return(0,t.jsxs)("div",{className:["ui-tcc-group",m].filter(Boolean).join(" "),"data-running":p||void 0,"data-open":g||void 0,children:[(0,t.jsx)("style",{href:"ui-tool-call-clean",precedence:"default",children:U}),(0,t.jsx)("span",{className:"ui-tcc-sr",role:"status","aria-live":"polite",children:p?a:`${b}${f?`, ${f} failed`:""}`}),(0,t.jsxs)("button",{type:"button",className:"ui-tcc-group__head","aria-expanded":g,"aria-controls":`${u}-list`,onClick:()=>{s===void 0&&_(!g),n?.(!g)},children:[(0,t.jsx)("span",{className:"ui-tcc-group__stack","aria-hidden":"true",children:j.map((h,k)=>(0,t.jsx)("span",{className:"ui-tcc__icon",children:h.icon??(0,l.jsx)(D,{})},d.length-j.length+k))}),(0,t.jsxs)("span",{className:"ui-tcc-group__title",children:[(0,t.jsx)("span",{className:p?"ui-tcc-group__label ui-tcc__shine":"ui-tcc-group__label","data-text":v,children:v}),!p&&f>0&&(0,t.jsxs)("span",{className:"ui-tcc-group__failed",children:["\xB7 ",f," failed"]}),y!=null&&(0,t.jsxs)("span",{className:"ui-tcc-group__time",children:["\xB7 ",I(y,p)]})]},p?"busy":"done"),(0,l.jsx)(A,{})]}),(0,t.jsx)("div",{className:"ui-tcc__body",id:`${u}-list`,inert:!g,children:(0,t.jsx)("div",{className:"ui-tcc__clip",children:(0,t.jsx)("div",{className:"ui-tcc-group__list",children:i})})})]})}function B({label:i,value:c,cap:a}){let{text:e,json:r}=X(c),s=(0,o.useRef)(null),[n,m]=(0,o.useState)(!1),[u,x]=(0,o.useState)(0);(0,o.useLayoutEffect)(()=>{let g=s.current,d=g?.firstElementChild;if(!g||!d)return;let p=()=>x(g.scrollHeight);p();let f=new ResizeObserver(p);return f.observe(d),()=>f.disconnect()},[e]);let _=u>a+24;return(0,t.jsxs)("div",{className:"ui-tcc__section",children:[(0,t.jsxs)("div",{className:"ui-tcc__section-head",children:[(0,t.jsx)("span",{className:"ui-tcc__label",children:i}),(0,l.jsx)(K,{text:e,label:i.toLowerCase()})]}),(0,t.jsx)("pre",{ref:s,className:"ui-tcc__code","data-capped":_&&!n||void 0,style:_?{maxHeight:n?u:a}:void 0,children:(0,t.jsx)("code",{children:r?et(e):e})}),_&&(0,t.jsx)("button",{type:"button",className:"ui-tcc__more","aria-expanded":n,onClick:()=>m(!n),children:n?"Show less":"Show all"})]})}function K({text:i,label:c}){let[a,e]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(!a)return;let r=window.setTimeout(()=>e(!1),1400);return()=>window.clearTimeout(r)},[a]),(0,t.jsxs)("button",{type:"button",className:"ui-tcc__copy","data-copied":a||void 0,"aria-label":a?"Copied":`Copy ${c}`,title:a?"Copied":`Copy ${c}`,onClick:()=>it(i).then(r=>r&&e(!0)),children:[(0,t.jsxs)("svg",{className:"ui-tcc__copy-icon",viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,t.jsx)("rect",{x:"5.5",y:"5.5",width:"8.5",height:"8.5",rx:"2"}),(0,t.jsx)("path",{d:"M10.5 3.75v-.25A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5h.25"})]}),(0,t.jsx)("svg",{className:"ui-tcc__copy-done",viewBox:"0 0 16 16","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9",pathLength:1})})]})}function Q(){return(0,t.jsxs)("svg",{className:"ui-tcc__spinner",viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6"}),(0,t.jsx)("path",{d:"M8 2a6 6 0 0 1 6 6"})]})}function O(){return(0,t.jsxs)("svg",{className:"ui-tcc__err",viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,t.jsx)("circle",{cx:"8",cy:"8",r:"7"}),(0,t.jsx)("path",{d:"M8 4.9v3.5M8 10.9v.1"})]})}function A(){return(0,t.jsx)("svg",{className:"ui-tcc__chevron",viewBox:"0 0 12 12","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M3.5 5.25 6 7.75l2.5-2.5"})})}function D(){return(0,t.jsx)("svg",{viewBox:"0 0 16 16",children:(0,t.jsx)("path",{d:"M10.2 2.4a3.5 3.5 0 0 0-4.3 4.6L2.6 10.3a1.4 1.4 0 0 0 2 2L7.9 9a3.5 3.5 0 0 0 4.6-4.3l-2 2-1.6-.4-.4-1.6 1.7-2.3Z"})})}function H(i,c,a){let e=(0,o.useRef)(null),r=(0,o.useRef)(0),[s,n]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!i){e.current!==null&&(r.current+=Date.now()-e.current,e.current=null,n(r.current));return}a||(r.current=0),e.current=c??Date.now();let m=()=>n(r.current+Date.now()-(e.current??Date.now()));m();let u=window.setInterval(m,100);return()=>window.clearInterval(u)},[i,c,a]),s}function I(i,c){if(!c&&i<1e3)return`${Math.max(1,Math.round(i))}ms`;if(i<6e4)return`${(Math.floor(i/100)/10).toFixed(1)}s`;let a=Math.floor(i/1e3);return`${Math.floor(a/60)}m ${String(a%60).padStart(2,"0")}s`}function X(i){if(typeof i=="string"){let c=i.trim();if(c.startsWith("{")||c.startsWith("["))try{return{text:JSON.stringify(JSON.parse(c),null,2),json:!0}}catch{}return{text:i,json:!1}}try{let c=JSON.stringify(i,null,2);return c===void 0?{text:String(i),json:!1}:{text:c,json:!0}}catch{return{text:String(i),json:!1}}}var tt=/("(?:[^"\\]|\\.)*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;function et(i){let c=[],a=new RegExp(tt.source,"g"),e=0,r;for(;r=a.exec(i);){if(r.index>e&&c.push(i.slice(e,r.index)),r[1]&&r[2])c.push((0,t.jsx)("span",{className:"ui-tcc__t-key",children:r[1]},r.index),r[2]);else{let s=r[1]?"str":/^[tfn]/.test(r[0])?"lit":"num";c.push((0,t.jsx)("span",{className:`ui-tcc__t-${s}`,children:r[0]},r.index))}e=r.index+r[0].length}return e<i.length&&c.push(i.slice(e)),c}async function it(i){try{return await navigator.clipboard.writeText(i),!0}catch{let c=document.createElement("textarea");c.value=i,c.style.cssText="position:fixed;opacity:0",document.body.appendChild(c),c.select();let a=document.execCommand("copy");return c.remove(),a}}var U=`
/* Colors and motion as variables \u2013 override them on .ui-tcc / .ui-tcc-group */
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

/* Header row: icon, name + summary, status, chevron \u2013 everything truncates before it overflows */
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

/* A soft light sweeping over "Using tools\u2026" */
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
`,L=[0,1500,2700,4300,5400,6700,8e3],ct=11500,at={results:[{title:"HubSpot Sales Hub pricing",url:"https://www.hubspot.com/pricing/sales",price_per_seat:90},{title:"Pipedrive plans and pricing",url:"https://www.pipedrive.com/en/pricing",price_per_seat:49},{title:"Attio pricing",url:"https://attio.com/pricing",price_per_seat:59},{title:"Salesforce Starter Suite",url:"https://www.salesforce.com/sales/pricing",price_per_seat:25},{title:"Close CRM pricing",url:"https://www.close.com/pricing",price_per_seat:49}],total:5,cached:!1};function F(){let[i,c]=(0,o.useState)(0),[a,e]=(0,o.useState)(0),[r,s]=(0,o.useState)(!0),n=(0,o.useRef)(!1);(0,o.useEffect)(()=>{n.current=!1,e(0),s(!0);let u=L.slice(1).map((x,_)=>window.setTimeout(()=>e(g=>Math.max(g,_+1)),x));return u.push(window.setTimeout(()=>!n.current&&s(!1),L[6])),u.push(window.setTimeout(()=>!n.current&&c(x=>x+1),ct)),()=>u.forEach(clearTimeout)},[i]);let m=a===2?"error":a>=4?"success":"running";return(0,t.jsx)("div",{className:"tc-demo",children:(0,t.jsxs)("div",{className:"tc-demo__chat",children:[(0,t.jsx)("p",{className:"tc-demo__you",children:"Compare CRM pricing for our 10-person team and check open deals."}),(0,l.jsxs)(Z,{open:r,onOpenChange:u=>{n.current=!0,s(u)},children:[(0,l.jsx)(R,{name:"search_web",icon:(0,l.jsx)(rt,{}),status:a>=1?"success":"running",summary:a>=1?"Searched the web for 'CRM pricing 2026'":"Searching the web for 'CRM pricing 2026'",args:{query:"CRM pricing 2026 small sales team",max_results:5},result:a>=1?at:void 0}),a>=1&&(0,l.jsx)(R,{name:"fetch_page",icon:(0,l.jsx)(ot,{}),status:m,summary:m==="success"?"Read hubspot.com/pricing":"Reading hubspot.com/pricing",args:{url:"https://www.hubspot.com/pricing/sales",timeout_ms:8e3},result:m==="success"?{status:200,title:"Sales Hub Pricing",words:2140}:void 0,error:"Request timed out after 8s \u2013 hubspot.com didn't respond.",onRetry:()=>e(u=>Math.max(u,3))}),a>=4&&(0,l.jsx)(R,{name:"crm.list_deals",icon:(0,l.jsx)(nt,{}),status:a>=5?"success":"running",summary:a>=5?"Found 4 open deals in negotiation":"Looking up open deals",args:{stage:"negotiation",owner:"me",limit:10},result:a>=5?{count:4,deals:[{name:"Northwind",value:18400},{name:"Globex",value:9600}]}:void 0})]},i)]})})}function rt(){return(0,t.jsxs)("svg",{viewBox:"0 0 16 16",children:[(0,t.jsx)("circle",{cx:"7",cy:"7",r:"4.25"}),(0,t.jsx)("path",{d:"m10.25 10.25 3 3"})]})}function ot(){return(0,t.jsxs)("svg",{viewBox:"0 0 16 16",children:[(0,t.jsx)("path",{d:"M4 2.75h5l3 3v7.5H4z"}),(0,t.jsx)("path",{d:"M9 2.75v3h3M6 9h4M6 11h3"})]})}function nt(){return(0,t.jsxs)("svg",{viewBox:"0 0 16 16",children:[(0,t.jsx)("ellipse",{cx:"8",cy:"4",rx:"4.75",ry:"1.75"}),(0,t.jsx)("path",{d:"M3.25 4v8c0 .97 2.13 1.75 4.75 1.75s4.75-.78 4.75-1.75V4M3.25 8c0 .97 2.13 1.75 4.75 1.75S12.75 8.97 12.75 8"})]})}(0,V.createRoot)(document.getElementById("root")).render(q.default.createElement(F));
