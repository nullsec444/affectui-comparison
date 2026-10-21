import{a as q}from"../shared/chunk-PWBCLQI6.js";import{a as j}from"../shared/chunk-LKG2PFLG.js";import{a as v}from"../shared/chunk-KHKHHDEU.js";import{b as d}from"../shared/chunk-MOQMIKSW.js";var A=d(j()),$=d(q());var F=d(j()),G=d(v()),t=d(v()),l=G,n=F;function Y(i,r){let s=Math.max(0,Math.round((r-i)/1e3));if(s<45)return"just now";let a=Math.round(s/60);if(a<60)return`${a}min ago`;let u=Math.round(a/60);return u<24?`${u}h ago`:`${Math.round(u/24)}d ago`}function Z({title:i="Comment",messages:r,currentUser:s,assistant:a,onReply:u,onClose:p,className:_}){let[g,k]=(0,n.useState)(r),[I]=(0,n.useState)(()=>new Set(r.filter(e=>e.author.assistant).map(e=>e.id))),[M,E]=(0,n.useState)(new Set),[x,y]=(0,n.useState)(""),[m,N]=(0,n.useState)(!1),[B,b]=(0,n.useState)(()=>Date.now()),h=(0,n.useRef)(null),H=P(h);(0,n.useEffect)(()=>{let e=window.setInterval(()=>b(Date.now()),3e4);return()=>window.clearInterval(e)},[]),(0,n.useEffect)(()=>{h.current?.scrollTo({top:h.current.scrollHeight,behavior:"smooth"})},[g.length,m]);let O=async()=>{let e=x.trim();if(!e||m)return;y(""),b(Date.now()),S(!0),k(o=>[...o,{id:`m-${Date.now()}`,author:s,createdAt:Date.now(),text:e}]);let c=u?.(e);if(c){N(!0);try{let o=await c;o&&k(f=>[...f,{...o,createdAt:Date.now()}])}finally{N(!1),b(Date.now())}}},S=e=>{let c=h.current;c&&(c.style.maxHeight=e?`${c.offsetHeight}px`:"")},L=e=>{S(!1),E(c=>{let o=new Set(c);return o.has(e)?o.delete(e):o.add(e),o})};return(0,l.jsxs)(l.Fragment,{children:[(0,t.jsx)("style",{href:"ui-comment-thread-clean",precedence:"default",children:V}),(0,t.jsxs)("section",{className:["ui-ctc",_].filter(Boolean).join(" "),"aria-label":i,children:[(0,t.jsxs)("header",{className:"ui-ctc__head",children:[(0,t.jsx)("h3",{className:"ui-ctc__title",children:i}),(0,t.jsxs)("span",{className:"ui-ctc__count",children:[g.length," ",g.length===1?"message":"messages"]}),p&&(0,t.jsx)("button",{type:"button",className:"ui-ctc__icon-btn","aria-label":"Close comment",onClick:p,children:(0,l.jsx)(C,{d:"m4.5 4.5 7 7M11.5 4.5l-7 7"})})]}),(0,t.jsx)("div",{className:"ui-ctc__morph",ref:H,children:(0,t.jsxs)("div",{className:"ui-ctc__scroll",ref:h,"aria-live":"polite",children:[g.map(e=>{let c=M.has(e.id),o=/^\/edit\b/i.test(e.text.trim());return(0,t.jsxs)("article",{className:"ui-ctc__msg","data-delayed":I.has(e.id)||void 0,children:[(0,t.jsxs)("div",{className:"ui-ctc__meta",children:[(0,l.jsx)(z,{author:e.author}),(0,t.jsx)("span",{className:"ui-ctc__name",children:e.author.name}),(0,t.jsx)("time",{className:"ui-ctc__time",dateTime:new Date(e.createdAt).toISOString(),children:Y(+e.createdAt,B)})]}),e.text&&(0,t.jsx)("p",{className:"ui-ctc__text",children:o?(0,l.jsxs)(l.Fragment,{children:[(0,t.jsx)("span",{className:"ui-ctc__command",children:"/edit"})," ",e.text.trim().replace(/^\/edit\s*/i,"")]}):e.text}),e.status&&(0,t.jsxs)("div",{className:"ui-ctc__status",children:[(0,t.jsxs)("button",{type:"button",className:"ui-ctc__status-btn","aria-expanded":c,disabled:!e.details?.length,onClick:()=>L(e.id),children:[(0,t.jsx)("svg",{viewBox:"0 0 16 16",className:"ui-ctc__check","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm8.9-1.2a.5.5 0 0 0-.8-.6L7.44 9.23 6.35 8.15a.5.5 0 1 0-.7.7l1.5 1.5a.5.5 0 0 0 .76-.06l2.5-3.5Z"})}),(0,t.jsx)("span",{className:"ui-ctc__status-text",children:e.status}),!!e.details?.length&&(0,t.jsx)("span",{className:"ui-ctc__chevron",children:(0,l.jsx)(C,{d:"m5 6.5 3 3 3-3"})})]}),!!e.details?.length&&(0,t.jsx)("div",{className:"ui-ctc__details","data-open":c||void 0,inert:!c,children:(0,t.jsx)("ul",{children:e.details.map((f,U)=>(0,t.jsx)("li",{style:{"--i":U},children:f},f))})})]})]},e.id)}),m&&a&&(0,t.jsxs)("article",{className:"ui-ctc__msg","aria-label":`${a.name} is thinking`,children:[(0,t.jsxs)("div",{className:"ui-ctc__meta",children:[(0,l.jsx)(z,{author:a}),(0,t.jsx)("span",{className:"ui-ctc__name",children:a.name})]}),(0,t.jsx)("p",{className:"ui-ctc__text",children:(0,t.jsx)("span",{className:"ui-ctc__thinking","data-text":"Thinking\u2026",children:"Thinking\u2026"})})]})]})}),(0,t.jsxs)("form",{className:"ui-ctc__composer",onSubmit:e=>{e.preventDefault(),O()},children:[(0,t.jsx)("input",{className:"ui-ctc__input",value:x,onChange:e=>y(e.target.value),placeholder:a?`Reply, or ask @${a.name}\u2026`:"Add comment\u2026","aria-label":"Reply"}),(0,t.jsx)("button",{type:"submit",className:"ui-ctc__send","aria-label":"Send reply",disabled:!x.trim()||m,children:(0,t.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M8 12.5v-9M4.25 7.25 8 3.5l3.75 3.75"})})})]})]})]})}function z({author:i}){return i.avatar&&typeof i.avatar!="string"?(0,t.jsx)("span",{className:"ui-ctc__avatar",children:i.avatar}):typeof i.avatar=="string"?(0,t.jsx)("img",{className:"ui-ctc__avatar",src:i.avatar,alt:"",width:20,height:20,loading:"lazy"}):(0,t.jsx)("span",{className:"ui-ctc__avatar ui-ctc__avatar--initials","aria-hidden":"true",children:i.name.split(" ").map(r=>r[0]).slice(0,2).join("")})}function K(){let i=(0,n.useId)();return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:`${i}-fill`,x1:"3",y1:"3",x2:"21",y2:"21",gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#5b9dff"}),(0,t.jsx)("stop",{offset:"0.5",stopColor:"#2f6bff"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#8b5cf6"})]})}),(0,t.jsx)("circle",{cx:"12",cy:"12",r:"12",fill:`url(#${i}-fill)`})]})}var C=({d:i})=>(0,t.jsx)("svg",{viewBox:"0 0 16 16",className:"ui-ctc__glyph","aria-hidden":"true",children:(0,t.jsx)("path",{d:i})});function P(i){let r=(0,n.useRef)(null);return(0,n.useLayoutEffect)(()=>{let s=r.current,a=i.current;if(!s||!a)return;let u=()=>{s.style.height=`${a.offsetHeight}px`};u();let p=new ResizeObserver(u);p.observe(a);let _=requestAnimationFrame(()=>s.setAttribute("data-smooth",""));return()=>{p.disconnect(),cancelAnimationFrame(_)}},[i]),r}var V=`
/* Colors and motion as variables \u2013 override them on .ui-ctc */
.ui-ctc {
  --ui-ctc-card: #ffffff;
  --ui-ctc-strong: #000000;
  --ui-ctc-ink: rgba(0, 0, 0, 0.88);
  --ui-ctc-text: rgba(0, 0, 0, 0.61);
  --ui-ctc-muted: rgba(0, 0, 0, 0.45);
  --ui-ctc-faint: rgba(0, 0, 0, 0.27);
  --ui-ctc-icon: rgba(0, 0, 0, 0.447);
  --ui-ctc-line: rgba(0, 0, 0, 0.06);
  --ui-ctc-tree: rgba(0, 0, 0, 0.1);
  --ui-ctc-fill: rgba(0, 0, 0, 0.06);
  --ui-ctc-wash: rgba(0, 0, 0, 0.03);
  --ui-ctc-solid: rgba(0, 0, 0, 0.88);
  --ui-ctc-on-solid: #fcfcfc;
  --ui-ctc-accent: rgba(0, 96, 226, 0.765);
  --ui-ctc-ok: #1a9a52;
  --ui-ctc-shine: rgba(255, 255, 255, 0.82);
  --ui-ctc-avatar-ring: rgba(0, 0, 0, 0.08);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-ctc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-ctc-focus: rgba(0, 96, 226, 0.35);
  --ui-ctc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ui-ctc-card);
  box-shadow: var(--ui-ctc-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-ctc-ink);
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
.ui-ctc *, .ui-ctc *::before, .ui-ctc *::after { box-sizing: border-box; }
:where(.ui-ctc) button {
  appearance: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
:where(.ui-ctc) svg { display: block; flex: none; }
.ui-ctc button:focus-visible { outline: 2px solid var(--ui-ctc-focus); outline-offset: 1px; }
.ui-ctc__glyph { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linecap: round; stroke-linejoin: round; }

/* ---------- Header ---------- */
.ui-ctc__head {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 10px 10px 10px 16px;
  border-bottom: 0.5px solid var(--ui-ctc-line);
}
.ui-ctc__title { margin: 0; font-size: 13px; font-weight: 500; line-height: 20px; color: var(--ui-ctc-strong); }
.ui-ctc__count { margin-right: auto; font-size: 12px; line-height: 16px; color: var(--ui-ctc-muted); font-variant-numeric: tabular-nums; }
/* Close: a ghost icon button */
.ui-ctc__icon-btn {
  display: grid;
  place-items: center;
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  color: var(--ui-ctc-icon);
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-ctc__icon-btn:hover { background: var(--ui-ctc-wash); color: var(--ui-ctc-ink); }

/* ---------- The conversation ---------- */
.ui-ctc__scroll {
  display: grid;
  gap: 16px;
  align-content: start;
  min-height: var(--ui-ctc-min-height, 0px);
  max-height: var(--ui-ctc-max-height, 340px);
  padding: 16px 16px 12px;
  overflow-y: auto;
  scrollbar-width: none;
  /* Soft edges at the top and towards the reply row, so nothing ends in a hard cut */
  -webkit-mask-image: linear-gradient(transparent, #000 12px, #000 calc(100% - 10px), transparent);
  mask-image: linear-gradient(transparent, #000 12px, #000 calc(100% - 10px), transparent);
}
.ui-ctc__scroll::-webkit-scrollbar { display: none; }
/* Each message builds up piece by piece: name row, text, status \u2013 the assistant's first reply a beat later */
.ui-ctc__msg { --ui-ctc-d: 0ms; min-width: 0; }
.ui-ctc__msg[data-delayed] { --ui-ctc-d: 700ms; }
.ui-ctc__msg > * { animation: ui-ctc-in 420ms var(--ui-ctc-ease) both; animation-delay: var(--ui-ctc-d); }
.ui-ctc__msg > :nth-child(2) { animation-delay: calc(var(--ui-ctc-d) + 80ms); }
.ui-ctc__msg > :nth-child(3) { animation-delay: calc(var(--ui-ctc-d) + 160ms); }
.ui-ctc__meta { display: flex; align-items: center; gap: 8px; min-width: 0; }
.ui-ctc__avatar {
  display: grid;
  place-items: center;
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}
img.ui-ctc__avatar { box-shadow: 0 0 0 0.5px var(--ui-ctc-avatar-ring); }
.ui-ctc__avatar svg { width: 100%; height: 100%; }
.ui-ctc__avatar--initials { background: var(--ui-ctc-fill); font-size: 9px; font-weight: 500; line-height: 1; color: var(--ui-ctc-text); }
.ui-ctc__name { min-width: 0; overflow: hidden; font-size: 13px; font-weight: 500; line-height: 20px; white-space: nowrap; text-overflow: ellipsis; color: var(--ui-ctc-strong); }
.ui-ctc__time { flex: none; margin-left: auto; font-size: 12px; line-height: 16px; white-space: nowrap; color: var(--ui-ctc-faint); font-variant-numeric: tabular-nums; }
/* Text and status line up with the name, not the avatar */
.ui-ctc__text { margin: 4px 0 0 28px; font-size: 13px; line-height: 20px; overflow-wrap: break-word; color: var(--ui-ctc-ink); }
/* "/edit": a small gray tag */
.ui-ctc__command {
  display: inline-block;
  margin-right: 1px;
  padding: 0 5px;
  border-radius: 5px;
  background: var(--ui-ctc-fill);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: var(--ui-ctc-text);
}

/* Status: a ghost row \u2013 a green check, the line, and a chevron to fold the details open */
.ui-ctc__status { margin: 4px 0 0 22px; }
.ui-ctc__status-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  height: 28px;
  padding: 0 4px 0 6px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-ctc-ink);
  transition: background-color 160ms ease;
}
.ui-ctc__status-btn:hover:not(:disabled) { background: var(--ui-ctc-wash); }
.ui-ctc__status-btn:disabled { cursor: default; }
.ui-ctc__status-text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-ctc__check { width: 16px; height: 16px; fill: var(--ui-ctc-ok); }
.ui-ctc__chevron { display: grid; color: var(--ui-ctc-icon); transition: transform 260ms var(--ui-ctc-ease), color 160ms ease; }
.ui-ctc__status-btn:hover .ui-ctc__chevron { color: var(--ui-ctc-ink); }
.ui-ctc__status-btn[aria-expanded="true"] .ui-ctc__chevron { transform: rotate(180deg); }
.ui-ctc__details {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-ctc-ease);
}
.ui-ctc__details[data-open] { grid-template-rows: 1fr; }
.ui-ctc__details ul {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 0 0 28px;
  list-style: none;
}
.ui-ctc__details li {
  position: relative;
  margin-top: 4px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-ctc-text);
  /* Closing: lines fade out quickly while the box folds */
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 160ms ease, transform 220ms var(--ui-ctc-ease);
}
/* Opening: lines come in one after another */
.ui-ctc__details[data-open] li {
  opacity: 1;
  transform: none;
  transition-duration: 320ms, 420ms;
  transition-delay: calc(60ms + var(--i, 0) * 60ms);
}
/* Thin tree lines: each line gets its own corner \u2013 down on the axis of the check icon, then a rounded turn right */
.ui-ctc__details li:first-child { margin-top: 2px; }
.ui-ctc__details li::before {
  content: "";
  position: absolute;
  left: -14.5px;
  top: -3px;
  width: 9px;
  height: 13.5px;
  border-left: 1px solid var(--ui-ctc-tree);
  border-bottom: 1px solid var(--ui-ctc-tree);
  border-bottom-left-radius: 5px;
}
/* The first branch starts with a small gap under the check icon */
.ui-ctc__details li:first-child::before { top: -6px; height: 16.5px; }

/* "Thinking\u2026": a lighter band sweeps across the gray text */
.ui-ctc__thinking { position: relative; display: inline-block; color: var(--ui-ctc-muted); }
.ui-ctc__thinking::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-ctc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-ctc-sweep 1.4s linear infinite;
  pointer-events: none;
}

/* ---------- Reply row: lies right in the card ---------- */
.ui-ctc__composer {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 4px 10px 10px 16px;
}
.ui-ctc__input {
  flex: 1;
  min-width: 0;
  height: 28px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-ctc-strong);
  caret-color: var(--ui-ctc-accent);
}
.ui-ctc__input::placeholder { color: var(--ui-ctc-faint); opacity: 1; }
/* Send: the dark chip \u2013 a quiet gray tile until there is something to send */
.ui-ctc__send {
  display: grid;
  place-items: center;
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--ui-ctc-solid);
  color: var(--ui-ctc-on-solid);
  transition: background-color 180ms ease, color 180ms ease, transform 160ms var(--ui-ctc-ease);
}
.ui-ctc__send:disabled { background: var(--ui-ctc-fill); color: var(--ui-ctc-faint); cursor: default; }
.ui-ctc__send:not(:disabled):active { transform: scale(0.94); }
.ui-ctc__send svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }

@keyframes ui-ctc-in { from { opacity: 0; transform: translateY(4px); } }
@keyframes ui-ctc-sweep { from { background-position: 100% 0; } to { background-position: 0% 0; } }

/* Height changes glide instead of jumping */
.ui-ctc__morph { flex: none; overflow: hidden; }
.ui-ctc__morph[data-smooth] { transition: height 380ms var(--ui-ctc-ease); }

/* Narrow containers: a little less padding */
@container (max-width: 340px) {
  .ui-ctc__head { padding-left: 12px; }
  .ui-ctc__scroll { padding-left: 12px; padding-right: 12px; }
  .ui-ctc__composer { padding-left: 12px; }
}
/* Touch screens: taller hit targets */
@media (pointer: coarse) {
  .ui-ctc__icon-btn, .ui-ctc__send { width: 34px; height: 34px; }
  .ui-ctc__status-btn { height: 34px; }
  .ui-ctc__input { height: 34px; }
  .ui-ctc__details li:first-child::before { top: -9px; height: 19.5px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-ctc__msg > *, .ui-ctc__thinking::after { animation: none; }
  .ui-ctc__details, .ui-ctc__details li, .ui-ctc__chevron, .ui-ctc__morph[data-smooth] { transition: none; }
}

/* Text fields: no focus box while typing \u2013 also against global :focus-visible rules of the host page */
.ui-ctc input:not([type="checkbox"]):not([type="radio"]):focus-visible,
.ui-ctc textarea:focus-visible,
.ui-ctc [contenteditable]:focus-visible { outline: none; }

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ctc {
  --ui-ctc-card: #1c1c1e;
  --ui-ctc-strong: #ffffff;
  --ui-ctc-ink: rgba(255, 255, 255, 0.9);
  --ui-ctc-text: rgba(255, 255, 255, 0.62);
  --ui-ctc-muted: rgba(255, 255, 255, 0.46);
  --ui-ctc-faint: rgba(255, 255, 255, 0.3);
  --ui-ctc-icon: rgba(255, 255, 255, 0.5);
  --ui-ctc-line: rgba(255, 255, 255, 0.08);
  --ui-ctc-tree: rgba(255, 255, 255, 0.14);
  --ui-ctc-fill: rgba(255, 255, 255, 0.08);
  --ui-ctc-wash: rgba(255, 255, 255, 0.04);
  --ui-ctc-solid: rgba(255, 255, 255, 0.92);
  --ui-ctc-on-solid: #161618;
  --ui-ctc-accent: #4d8dff;
  --ui-ctc-ok: #3ec27a;
  --ui-ctc-shine: #ffffff;
  --ui-ctc-avatar-ring: rgba(255, 255, 255, 0.1);
  --ui-ctc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-ctc-focus: rgba(77, 141, 255, 0.5);
}
`,w={name:"Atlas",avatar:(0,l.jsx)(K,{}),assistant:!0},D=i=>Date.now()-i*6e4,J=[{id:"1",author:{name:"Lena Lindqvist",avatar:"/avatars/lena.jpg"},createdAt:D(3),text:"/edit Rename every \u201Ccustomers\u201D to \u201Cmembers\u201D on the pricing page."},{id:"2",author:w,createdAt:D(1),text:"",status:"Edit completed",details:["Renamed 12 mentions in 3 sections","Kept \u201Ccustomer support\u201D as it is","Left the legal pages untouched"]}],R=["Done \u2013 I also updated the meta description.","Good catch. I'll leave a note for the copy review.","On it. You'll see the change in a minute."],Q=0;function T(){return(0,t.jsx)("div",{className:"thread-demo",children:(0,l.jsx)(Z,{messages:J,currentUser:{name:"Sofia Marin",avatar:"/avatars/sofia.jpg"},assistant:w,onClose:()=>{},onReply:i=>{if(!/@atlas/i.test(i))return;let r=R[Q++%R.length];return new Promise(s=>setTimeout(()=>s({id:`a-${Date.now()}`,author:w,createdAt:Date.now(),text:r}),1400))}})})}(0,$.createRoot)(document.getElementById("root")).render(A.default.createElement(T));
