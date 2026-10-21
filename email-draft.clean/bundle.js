import{a as te}from"../shared/chunk-PWBCLQI6.js";import{a as H}from"../shared/chunk-LKG2PFLG.js";import{a as T}from"../shared/chunk-KHKHHDEU.js";import{b as p}from"../shared/chunk-MOQMIKSW.js";var O=p(H()),G=p(te());var ne=p(H()),de=p(T()),e=p(T()),o=de,a=ne,oe=[{name:"Jonas Weber",email:"jonas@northwind.io"},{name:"Lena Hart",email:"lena@northwind.io"},{name:"Finance team",email:"billing@northwind.io"}],z=t=>t.name.split(" ")[0],re=[{id:"friendly",label:"Friendly",body:t=>`Hi ${z(t)}, a heads-up that your Growth plan renews on October 9 for $8,900 a year. If you'd like to add seats or switch to monthly billing, you can review the quote here:`},{id:"short",label:"Short",body:t=>`Hi ${z(t)}, your Growth plan renews on October 9 ($8,900/year). Quote for changes:`},{id:"formal",label:"Formal",body:t=>`Dear ${t.name}, this is a reminder that your Growth subscription is scheduled to renew on October 9 at $8,900 per year. Should you wish to adjust seats or billing, please review the attached quote:`}];function ce({reference:t="SUB-1182",account:f="Northwind Logistics",amount:h="$8,900",status:_="Renews in 5 days",agent:b="Renewal agent",contacts:x=oe,attachment:c="Renewal-quote.pdf",tones:R=re,link:v={label:"Review quote",href:"#"},onSend:K,onDiscard:U,className:Y}){let[d,J]=(0,a.useState)(x[0]),[s,D]=(0,a.useState)(c),[S,P]=(0,a.useState)(R[0].id),[u,w]=(0,a.useState)(null),[E,l]=(0,a.useState)(!1),[m,y]=(0,a.useState)(!1),[n,k]=(0,a.useState)("draft"),[V,W]=(0,a.useState)(0),L=(0,a.useRef)(null),Q=se(L),j=(0,a.useRef)(null),B=(0,a.useRef)(null),F=(0,a.useRef)([]),X=R.find(i=>i.id===S).body(d),N=u??X;(0,a.useEffect)(()=>()=>F.current.forEach(i=>window.clearTimeout(i)),[]),(0,a.useEffect)(()=>{if(!m)return;let i=$=>{B.current?.contains($.target)||y(!1)},r=$=>$.key==="Escape"&&y(!1);return document.addEventListener("pointerdown",i),document.addEventListener("keydown",r),()=>{document.removeEventListener("pointerdown",i),document.removeEventListener("keydown",r)}},[m]),(0,a.useLayoutEffect)(()=>{let i=j.current;i&&(i.style.height="auto",i.style.height=`${i.scrollHeight}px`)},[E,N]);let M=()=>{w(N),l(!0),requestAnimationFrame(()=>{let i=j.current;i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))})},Z=i=>{(i!==S||u!==null)&&(P(i),w(null),l(!1),W(r=>r+1))},ee=i=>{J(i),y(!1),u!==null&&w(u.replace(RegExp(`\\b${z(d)}\\b|${d.name}`,"g"),r=>r===d.name?i.name:z(i)))},q=()=>{n==="draft"&&(l(!1),k("sending"),F.current.push(window.setTimeout(()=>{k("sent"),K?.({to:d,body:`${N} ${v.label}: ${v.href}`,attachment:s})},900)))},ie=()=>{l(!1),k("discarded"),U?.()},ae=()=>k("draft"),A=n==="draft"||n==="sending",C=n==="sent"?{text:"Sent",tone:"ok"}:n==="discarded"?{text:"Discarded",tone:"muted"}:{text:"Ready for review",tone:"ok"};return(0,e.jsxs)("div",{className:["ui-edc",Y].filter(Boolean).join(" "),"data-phase":n,children:[(0,e.jsx)("style",{href:"ui-email-draft-clean",precedence:"default",children:ue}),(0,e.jsxs)("div",{className:"ui-edc__record",children:[(0,e.jsxs)("div",{className:"ui-edc__ref",children:[(0,e.jsx)("span",{className:"ui-edc__id",children:t}),(0,e.jsx)("span",{className:"ui-edc__status",children:_}),(0,e.jsx)("span",{className:"ui-edc__amount",children:h})]}),(0,e.jsx)("span",{className:"ui-edc__account",children:f})]}),(0,e.jsx)("div",{className:"ui-edc__outer",ref:Q,"data-menu":m?"":void 0,children:(0,e.jsx)("div",{ref:L,children:A?(0,e.jsxs)("div",{className:"ui-edc__draft","data-sending":n==="sending"?"":void 0,children:[(0,e.jsxs)("div",{className:"ui-edc__meta",children:[(0,e.jsxs)("div",{className:"ui-edc__to",ref:B,children:[(0,e.jsx)("span",{className:"ui-edc__label",children:"To"}),(0,e.jsxs)("button",{type:"button",className:"ui-edc__recipient","aria-haspopup":"listbox","aria-expanded":m,onClick:()=>y(i=>!i),children:[(0,e.jsx)("span",{className:"ui-edc__name",children:d.name}),(0,e.jsx)("span",{className:"ui-edc__email",children:d.email}),(0,e.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,e.jsx)("path",{d:"m8 10 4 4 4-4"})})]}),m&&(0,e.jsx)("ul",{className:"ui-edc__menu",role:"listbox","aria-label":"Recipient",children:x.map(i=>(0,e.jsx)("li",{children:(0,e.jsxs)("button",{type:"button",role:"option","aria-selected":i.email===d.email,onClick:()=>ee(i),children:[(0,e.jsx)("span",{className:"ui-edc__avatar","aria-hidden":"true",children:i.name.split(" ").map(r=>r[0]).join("").slice(0,2)}),(0,e.jsxs)("span",{className:"ui-edc__menu-text",children:[i.name,(0,e.jsx)("small",{children:i.email})]}),i.email===d.email&&(0,e.jsx)("svg",{className:"ui-edc__tick",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,e.jsx)("path",{d:"m6 12.5 4 4 8-9"})})]})},i.email))})]}),s?(0,e.jsxs)("span",{className:"ui-edc__file",children:[(0,o.jsx)(g,{children:(0,e.jsx)("path",{d:"m15.5 7.5-6.4 6.4a1.8 1.8 0 0 0 2.5 2.5l6.7-6.7a3.5 3.5 0 0 0-5-5l-6.9 6.9a5.2 5.2 0 0 0 7.4 7.4l6-6"})}),(0,e.jsx)("span",{className:"ui-edc__file-name",children:s}),(0,e.jsx)("button",{type:"button","aria-label":`Remove ${s}`,onClick:()=>D(null),children:(0,o.jsx)(g,{children:(0,e.jsx)("path",{d:"M7 7l10 10M17 7 7 17"})})})]}):c&&(0,e.jsxs)("button",{type:"button",className:"ui-edc__attach",onClick:()=>D(c),children:[(0,o.jsx)(g,{children:(0,e.jsx)("path",{d:"M12 6v12M6 12h12"})}),(0,e.jsxs)("span",{className:"ui-edc__file-name",children:["Attach ",c]})]})]}),(0,e.jsx)("div",{className:"ui-edc__body",children:E?(0,e.jsx)("textarea",{ref:j,className:"ui-edc__edit",value:u??"",onChange:i=>w(i.target.value),onKeyDown:i=>{i.key==="Enter"&&(i.metaKey||i.ctrlKey)&&(i.preventDefault(),q()),i.key==="Escape"&&l(!1)},onBlur:()=>l(!1),"aria-label":"Email text"}):(0,e.jsxs)("p",{className:"ui-edc__text",onClick:M,title:"Click to edit",children:[N," ",(0,e.jsx)("a",{href:v.href,onClick:i=>i.stopPropagation(),children:v.label})]},V)}),(0,e.jsxs)("div",{className:"ui-edc__tune",children:[(0,e.jsxs)("div",{className:"ui-edc__tones",role:"group","aria-label":"Tone",children:[R.map(i=>(0,e.jsx)("button",{type:"button","aria-pressed":S===i.id&&u===null,onClick:()=>Z(i.id),children:i.label},i.id)),(0,e.jsx)("button",{type:"button",className:"ui-edc__edit-btn","aria-pressed":E,"aria-label":"Edit text",onClick:M,children:(0,o.jsx)(g,{children:(0,e.jsx)("path",{d:"M14.5 5.5 18.5 9.5M5 19l1-4L15.5 5.5l4 4L10 19l-5 0Z"})})})]}),(0,e.jsx)("span",{className:"ui-edc__hint",children:"\u2318 Enter to send"})]})]}):(0,e.jsxs)("div",{className:"ui-edc__receipt",role:"status",children:[(0,e.jsx)("span",{className:"ui-edc__receipt-icon","data-tone":n==="sent"?"ok":"muted","aria-hidden":"true",children:(0,o.jsx)(g,{children:n==="sent"?(0,e.jsx)("path",{d:"m6 12.5 4 4 8-9"}):(0,e.jsx)("path",{d:"M7 7l10 10M17 7 7 17"})})}),(0,e.jsx)("span",{className:"ui-edc__receipt-text",children:n==="sent"?(0,o.jsxs)(o.Fragment,{children:["Sent to ",(0,e.jsx)("b",{children:d.name}),s?` with ${s}`:""]}):"Draft discarded"}),(0,e.jsx)("button",{type:"button",className:"ui-edc__undo",onClick:ae,children:"Undo"})]})})}),(0,e.jsxs)("div",{className:"ui-edc__foot",children:[(0,e.jsx)("span",{className:"ui-edc__agent",children:b}),(0,e.jsx)("span",{className:"ui-edc__badge","data-tone":C.tone,children:C.text},C.text),A&&(0,e.jsxs)("div",{className:"ui-edc__buttons",children:[(0,e.jsx)("button",{type:"button",className:"ui-edc__secondary",onClick:ie,disabled:n==="sending",children:"Discard"}),(0,e.jsx)("button",{type:"button",className:"ui-edc__primary",onClick:q,disabled:n==="sending",children:n==="sending"?(0,o.jsxs)(o.Fragment,{children:[(0,e.jsx)("span",{className:"ui-edc__spinner","aria-hidden":"true"}),"Sending"]}):"Send email"})]})]})]})}var g=({children:t})=>(0,e.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:t});function se(t){let f=(0,a.useRef)(null);return(0,a.useLayoutEffect)(()=>{let h=f.current,_=t.current;if(!h||!_)return;let b=()=>{h.style.height=`${_.offsetHeight}px`};b();let x=new ResizeObserver(b);x.observe(_);let c=requestAnimationFrame(()=>h.setAttribute("data-smooth",""));return()=>{x.disconnect(),cancelAnimationFrame(c)}},[t]),f}var ue=`
/* Colors and motion as variables \u2013 override them on .ui-edc */
.ui-edc {
  --ui-edc-card: #ffffff;
  --ui-edc-strong: #000000;
  --ui-edc-ink: rgba(0, 0, 0, 0.88);
  --ui-edc-text: rgba(0, 0, 0, 0.61);
  --ui-edc-muted: rgba(0, 0, 0, 0.45);
  --ui-edc-faint: rgba(0, 0, 0, 0.27);
  --ui-edc-icon: rgba(0, 0, 0, 0.447);
  --ui-edc-line: rgba(0, 0, 0, 0.06);
  --ui-edc-fill: rgba(0, 0, 0, 0.06);
  --ui-edc-wash: rgba(0, 0, 0, 0.03);
  --ui-edc-solid: rgba(0, 0, 0, 0.88);
  --ui-edc-on-solid: #fcfcfc;
  --ui-edc-accent: rgba(0, 96, 226, 0.765);
  --ui-edc-ok: #1a9a52;
  --ui-edc-ok-bg: rgba(26, 154, 82, 0.08);
  --ui-edc-warn: #b47a06;
  --ui-edc-warn-bg: rgba(232, 162, 12, 0.12);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-edc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-edc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-edc-focus: rgba(0, 96, 226, 0.35);
  --ui-edc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  box-sizing: border-box;
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  border-radius: 10px;
  background: var(--ui-edc-card);
  box-shadow: var(--ui-edc-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-edc-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-edc *, .ui-edc *::before, .ui-edc *::after { box-sizing: border-box; }
:where(.ui-edc) button {
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
.ui-edc button:focus-visible, .ui-edc a:focus-visible { outline: 2px solid var(--ui-edc-focus); outline-offset: 1px; }
:where(.ui-edc) svg {
  display: block;
  width: 16px;
  height: 16px;
  flex: none;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ---------- The record, heading the card ---------- */

.ui-edc__record { display: grid; padding: 12px 16px; border-bottom: 0.5px solid var(--ui-edc-line); }
.ui-edc__ref { display: flex; align-items: center; gap: 8px; min-width: 0; }
.ui-edc__id { flex: none; font-size: 15px; font-weight: 500; line-height: 24px; color: var(--ui-edc-strong); }
.ui-edc__status {
  min-width: 0;
  overflow: hidden;
  padding: 2px 6px;
  border-radius: 5px;
  background: var(--ui-edc-warn-bg);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: var(--ui-edc-warn);
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-edc__amount {
  flex: none;
  margin-left: auto;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  font-variant-numeric: tabular-nums;
  color: var(--ui-edc-strong);
}
.ui-edc__account { font-size: 12px; line-height: 16px; color: var(--ui-edc-text); }

/* ---------- The email: only this part changes height ---------- */

.ui-edc__outer { position: relative; overflow: hidden; overflow: clip; }
/* The recipient menu may reach out of the card while it's open \u2013 the height doesn't move then */
.ui-edc__outer[data-menu] { overflow: visible; z-index: 2; }
.ui-edc__outer[data-smooth] { transition: height 360ms var(--ui-edc-ease); }

.ui-edc__draft { animation: ui-edc-in 320ms var(--ui-edc-ease) both; transition: opacity 220ms ease; }
.ui-edc__draft[data-sending] { opacity: 0.6; pointer-events: none; }

.ui-edc__meta {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px 10px 16px;
  border-bottom: 0.5px solid var(--ui-edc-line);
}
.ui-edc__to { position: relative; display: flex; align-items: center; gap: 8px; min-width: 0; }
.ui-edc__label { flex: none; font-size: 13px; color: var(--ui-edc-muted); }
/* Recipient: the button-switch look \u2013 a hairline, the address in gray */
.ui-edc__recipient {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  height: 28px;
  padding: 0 6px 0 10px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 0.5px var(--ui-edc-line);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--ui-edc-ink);
  transition: background-color 160ms ease;
}
.ui-edc__recipient:hover,
.ui-edc__recipient[aria-expanded="true"] { background: var(--ui-edc-wash); }
.ui-edc__name { flex: none; }
.ui-edc__email { min-width: 0; overflow: hidden; text-overflow: ellipsis; font-weight: 400; color: var(--ui-edc-muted); }
.ui-edc__recipient svg { color: var(--ui-edc-icon); transition: transform 220ms var(--ui-edc-ease); }
.ui-edc__recipient[aria-expanded="true"] svg { transform: rotate(180deg); }

/* Recipient menu: a white popover */
.ui-edc__menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 26px;
  z-index: 5;
  display: grid;
  gap: 2px;
  width: 260px;
  max-width: calc(100cqw - 40px);
  margin: 0;
  padding: 4px;
  list-style: none;
  border-radius: 10px;
  background: var(--ui-edc-card);
  box-shadow: var(--ui-edc-shadow-pop);
  animation: ui-edc-menu 200ms var(--ui-edc-ease) both;
  transform-origin: top left;
}
.ui-edc__menu button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 6px 8px;
  border-radius: 6px;
  text-align: left;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-edc-ink);
}
.ui-edc__menu button:hover { background: var(--ui-edc-fill); }
.ui-edc__avatar {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  flex: none;
  border-radius: 6px;
  background: var(--ui-edc-fill);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--ui-edc-text);
}
.ui-edc__menu-text { display: grid; flex: 1; min-width: 0; }
.ui-edc__menu-text small { overflow: hidden; font-size: 12px; line-height: 16px; white-space: nowrap; text-overflow: ellipsis; color: var(--ui-edc-muted); }
.ui-edc__tick { color: var(--ui-edc-accent); stroke-width: 1.8; }

/* Attachment */
.ui-edc__file {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  font-size: 13px;
  white-space: nowrap;
  color: var(--ui-edc-text);
}
.ui-edc__file > svg { color: var(--ui-edc-icon); }
.ui-edc__file-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.ui-edc__file button {
  display: grid;
  place-items: center;
  flex: none;
  width: 24px;
  height: 24px;
  margin-left: -2px;
  border-radius: 6px;
  color: var(--ui-edc-icon);
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-edc__file button svg { width: 14px; height: 14px; }
.ui-edc__file button:hover { background: var(--ui-edc-wash); color: var(--ui-edc-ink); }
.ui-edc__attach {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  height: 28px;
  padding: 0 8px 0 6px;
  border-radius: 6px;
  font-size: 13px;
  white-space: nowrap;
  color: var(--ui-edc-text);
  transition: background-color 160ms ease, color 160ms ease;
  animation: ui-edc-fade 220ms ease both;
}
.ui-edc__attach svg { color: var(--ui-edc-icon); }
.ui-edc__attach:hover { background: var(--ui-edc-wash); color: var(--ui-edc-ink); }

/* Body */
.ui-edc__body { padding: 14px 16px 2px; }
.ui-edc__text {
  margin: -4px -6px;
  padding: 4px 6px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-edc-ink);
  cursor: text;
  transition: background-color 160ms ease;
  animation: ui-edc-fade 280ms ease both;
}
.ui-edc__text:hover { background: var(--ui-edc-wash); }
.ui-edc__text a {
  color: var(--ui-edc-strong);
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: var(--ui-edc-faint);
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: text-decoration-color 160ms ease;
}
.ui-edc__text a:hover { text-decoration-color: currentColor; }
.ui-edc__edit {
  display: block;
  width: calc(100% + 12px);
  margin: -4px -6px;
  padding: 4px 6px;
  border: 0;
  border-radius: 6px;
  background: var(--ui-edc-wash);
  box-shadow: inset 0 0 0 0.5px var(--ui-edc-line);
  outline: none;
  resize: none;
  overflow: hidden;
  font: inherit;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-edc-strong);
  caret-color: var(--ui-edc-accent);
}

/* Tones and the pencil */
.ui-edc__tune {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 12px 14px 16px;
}
.ui-edc__tones { display: flex; align-items: center; gap: 4px; min-width: 0; }
.ui-edc__tones button {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 4px 10px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 0.5px var(--ui-edc-line);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  color: var(--ui-edc-text);
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-edc__tones button:hover { background: var(--ui-edc-wash); color: var(--ui-edc-ink); }
.ui-edc__tones button[aria-pressed="true"] { background: var(--ui-edc-fill); color: var(--ui-edc-ink); }
/* Edit: a ghost icon button */
.ui-edc__tones .ui-edc__edit-btn {
  justify-content: center;
  width: 28px;
  margin-left: 4px;
  padding: 0;
  box-shadow: none;
  color: var(--ui-edc-icon);
}
.ui-edc__tones .ui-edc__edit-btn:hover { color: var(--ui-edc-ink); }
.ui-edc__tones .ui-edc__edit-btn[aria-pressed="true"] { background: var(--ui-edc-fill); color: var(--ui-edc-ink); }
.ui-edc__hint { flex: none; font-size: 12px; line-height: 16px; white-space: nowrap; color: var(--ui-edc-faint); }

/* ---------- Receipt after send / discard ---------- */

.ui-edc__receipt {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 12px 12px 16px;
  font-size: 13px;
  color: var(--ui-edc-text);
  animation: ui-edc-in 320ms var(--ui-edc-ease) both;
}
.ui-edc__receipt b { font-weight: 500; color: var(--ui-edc-strong); }
.ui-edc__receipt-icon {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  flex: none;
  border-radius: 6px;
  background: var(--ui-edc-fill);
  color: var(--ui-edc-icon);
}
.ui-edc__receipt-icon[data-tone="ok"] { background: var(--ui-edc-ok-bg); color: var(--ui-edc-ok); }
.ui-edc__receipt-icon svg { width: 14px; height: 14px; stroke-width: 2; }
.ui-edc__receipt-text { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ui-edc__undo {
  flex: none;
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-edc-ink);
  transition: background-color 160ms ease;
}
.ui-edc__undo:hover { background: var(--ui-edc-wash); }

/* ---------- The last row ---------- */

.ui-edc__foot {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 10px 10px 10px 16px;
  border-top: 0.5px solid var(--ui-edc-line);
}
.ui-edc__agent { min-width: 0; overflow: hidden; font-size: 13px; white-space: nowrap; text-overflow: ellipsis; color: var(--ui-edc-ink); }
.ui-edc__badge {
  flex: none;
  padding: 2px 6px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  animation: ui-edc-fade 260ms ease both;
}
.ui-edc__badge[data-tone="ok"] { background: var(--ui-edc-ok-bg); color: var(--ui-edc-ok); }
.ui-edc__badge[data-tone="muted"] { background: var(--ui-edc-fill); color: var(--ui-edc-text); }
.ui-edc__buttons { display: flex; flex: none; gap: 8px; margin-left: auto; }
.ui-edc__secondary,
.ui-edc__primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  transition: background-color 160ms ease, box-shadow 160ms ease, transform 160ms var(--ui-edc-ease);
}
/* Discard: white with the card's hairline shadow */
.ui-edc__secondary { background: var(--ui-edc-card); box-shadow: var(--ui-edc-shadow); color: var(--ui-edc-strong); }
.ui-edc__secondary:hover:not(:disabled) { background: linear-gradient(var(--ui-edc-wash), var(--ui-edc-wash)), var(--ui-edc-card); }
/* Send: the dark chip */
.ui-edc__primary { background: var(--ui-edc-solid); color: var(--ui-edc-on-solid); }
.ui-edc__primary:hover:not(:disabled) { background: var(--ui-edc-strong); }
.ui-edc__secondary:disabled, .ui-edc__primary:disabled { cursor: default; }
.ui-edc__secondary:not(:disabled):active, .ui-edc__primary:not(:disabled):active { transform: scale(0.97); }
.ui-edc__spinner {
  width: 12px;
  height: 12px;
  border: 1.5px solid color-mix(in srgb, var(--ui-edc-on-solid) 30%, transparent);
  border-top-color: var(--ui-edc-on-solid);
  border-radius: 50%;
  animation: ui-edc-spin 700ms linear infinite;
}

@keyframes ui-edc-in { from { opacity: 0; transform: translateY(4px); } }
@keyframes ui-edc-fade { from { opacity: 0; } }
@keyframes ui-edc-menu { from { opacity: 0; transform: scale(0.97) translateY(-4px); } }
@keyframes ui-edc-spin { to { transform: rotate(360deg); } }

/* Narrow containers (phones): the address, hint and author step back */
@container (max-width: 440px) {
  .ui-edc__email, .ui-edc__hint { display: none; }
}
@container (max-width: 380px) {
  .ui-edc__record { padding: 12px 14px; }
  .ui-edc__meta, .ui-edc__tune, .ui-edc__receipt, .ui-edc__foot { padding-left: 14px; }
  .ui-edc__body { padding-left: 14px; padding-right: 14px; }
  .ui-edc[data-phase="draft"] .ui-edc__agent,
  .ui-edc[data-phase="sending"] .ui-edc__agent { display: none; }
  .ui-edc__tones { gap: 2px; }
  .ui-edc__tones button { padding: 4px 8px; }
  .ui-edc__tones .ui-edc__edit-btn { margin-left: 2px; }
}
/* Touch screens: taller hit targets */
@media (pointer: coarse) {
  .ui-edc__recipient, .ui-edc__tones button, .ui-edc__secondary, .ui-edc__primary, .ui-edc__undo, .ui-edc__attach { height: 34px; }
  .ui-edc__tones .ui-edc__edit-btn { width: 34px; }
  .ui-edc__file button { width: 30px; height: 30px; }
  .ui-edc__menu button { padding: 9px 8px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-edc__outer[data-smooth] { transition: none; }
  .ui-edc__draft, .ui-edc__receipt, .ui-edc__text, .ui-edc__badge, .ui-edc__menu, .ui-edc__attach { animation: none; }
}

/* Text fields: no focus box while typing \u2013 also against global :focus-visible rules of the host page */
.ui-edc input:not([type="checkbox"]):not([type="radio"]):focus-visible,
.ui-edc textarea:focus-visible,
.ui-edc [contenteditable]:focus-visible { outline: none; }

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-edc {
  --ui-edc-card: #1c1c1e;
  --ui-edc-strong: #ffffff;
  --ui-edc-ink: rgba(255, 255, 255, 0.9);
  --ui-edc-text: rgba(255, 255, 255, 0.62);
  --ui-edc-muted: rgba(255, 255, 255, 0.46);
  --ui-edc-faint: rgba(255, 255, 255, 0.3);
  --ui-edc-icon: rgba(255, 255, 255, 0.5);
  --ui-edc-line: rgba(255, 255, 255, 0.08);
  --ui-edc-fill: rgba(255, 255, 255, 0.08);
  --ui-edc-wash: rgba(255, 255, 255, 0.04);
  --ui-edc-solid: rgba(255, 255, 255, 0.92);
  --ui-edc-on-solid: #161618;
  --ui-edc-accent: #4d8dff;
  --ui-edc-ok: #3ec27a;
  --ui-edc-ok-bg: rgba(62, 194, 122, 0.14);
  --ui-edc-warn: #f0b43c;
  --ui-edc-warn-bg: rgba(232, 162, 12, 0.14);
  --ui-edc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-edc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);
  --ui-edc-focus: rgba(77, 141, 255, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-edc__primary:hover:not(:disabled) { background: #ffffff; }
`;function I(){return(0,e.jsx)("div",{className:"email-draft-demo",children:(0,o.jsx)(ce,{})})}(0,G.createRoot)(document.getElementById("root")).render(O.default.createElement(I));
