import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t(),i=1500,a=280,o=1500,s=460,c=1400,l=`cubic-bezier(0.22, 1, 0.36, 1)`,u=e=>1-(1-e)**5,d=e=>-(Math.cos(Math.PI*e)-1)/2,f=typeof window>`u`?n.useEffect:n.useLayoutEffect;function p({left:e=_,right:t=v,center:p=g,className:h,label:b}){let x=`ui-ib`+(0,n.useId)().replace(/[^a-zA-Z0-9_-]/g,``),S=[...e,...t],C=S.length,w=e.length,[T,E]=(0,n.useState)(()=>new Set),[D,O]=(0,n.useState)(null),[k,A]=(0,n.useState)(null),[j,M]=(0,n.useState)(!1),[N,P]=(0,n.useState)(``),F=(0,n.useRef)(null),I=(0,n.useRef)(null),L=(0,n.useRef)(null),R=(0,n.useRef)(null),z=(0,n.useRef)(null),B=(0,n.useRef)(null),V=(0,n.useRef)(null),H=(0,n.useRef)([]),U=(0,n.useRef)([]),W=(0,n.useRef)([]),G=(0,n.useRef)([]),K=(0,n.useRef)([]),q=(0,n.useRef)(0),J=(0,n.useRef)(T);J.current=T;let Y=C-T.size,X=Y===0?`All paused`:j?`Syncing…`:`${Y} connected`;f(()=>{let e=F.current,t=I.current,n=L.current,r=R.current;if(!e||!t||!n||!r)return;let c=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,f=[],p=[],m=[],h=0,g=null,_=null,v=[],y=e=>({x:e.offsetLeft+e.offsetWidth/2,y:e.offsetTop+e.offsetHeight/2}),b=(e,t,n)=>{if(n){let n=(e.y+t.y)/2;return[e.x,e.y,e.x,n,t.x,n,t.x,t.y]}let r=(e.x+t.x)/2;return[e.x,e.y,r,e.y,r,t.y,t.x,t.y]},x=e=>{f=e,e.forEach((e,t)=>{let n=`M${e[0]} ${e[1]}C${e[2]} ${e[3]} ${e[4]} ${e[5]} ${e[6]} ${e[7]}`,r=W.current[t];r&&(r.setAttribute(`d`,n),G.current[t]?.querySelectorAll(`path`).forEach(e=>e.setAttribute(`d`,n)),v[t]=r.getTotalLength())})},S=()=>{n.setAttribute(`viewBox`,`0 0 ${e.clientWidth} ${e.clientHeight}`);let i=getComputedStyle(t).getPropertyValue(`--ui-ib-stack`).trim()===`1`,a=[...H.current.slice(0,C),r];if(a.some(e=>!e))return;let o=a.map(e=>y(e)),u=o[C],d=o.slice(0,C).map((e,t)=>t<w?b(e,u,i):b(u,e,i));g&&_!==null&&i!==_&&!c?(a.forEach((e,t)=>{let n=g[t].x-o[t].x,r=g[t].y-o[t].y;(n||r)&&e.animate([{transform:`translate(${n}px, ${r}px)`},{transform:`none`}],{duration:s,easing:l})}),p=f.length===C?f:d,m=d,h=performance.now(),X()):h?m=d:x(d),g=o,_=i},T=Array(C).fill(null),E=[],D=0,O=0,k=0,A=!1,j=!1,N=0,P=e=>{T[e]=null;let t=G.current[e];t&&(t.style.opacity=`0`)},B=e=>e?.animate([{opacity:0,transform:`scale(0.96)`},{opacity:1,transform:`scale(1)`,offset:.3},{opacity:0,transform:`scale(1.14)`}],{duration:760,easing:`ease-out`}),V=e=>{let t=Array.from({length:w},(e,t)=>t).filter(e=>!J.current.has(e)),n=Array.from({length:C-w},(e,t)=>w+t).filter(e=>!J.current.has(e));if(!t.length&&!n.length){D=e+o;return}let r=e,s=t.length?r+i:r;E=[...t.map((e,t)=>({beam:e,at:r+t*a})),...n.map((e,t)=>({beam:e,at:s+t*a}))];let c=Math.max(...E.map(e=>e.at))+i;O=t.length?s:r,k=c,D=c+o},q=(e,t)=>{let n=W.current[e],r=G.current[e],i=K.current[e];if(!n||!r||!i)return;let a=v[e]||0,o=Math.min(84,a*.42),s=d(t)*(a+o);r.querySelectorAll(`path`).forEach(e=>{e.style.strokeDasharray=`${o} ${a+o}`,e.style.strokeDashoffset=`${o-s}`});let c=n.getPointAtLength(Math.max(0,Math.min(a,s-o))),l=n.getPointAtLength(Math.max(0,Math.min(a,s)));i.setAttribute(`x1`,`${c.x}`),i.setAttribute(`y1`,`${c.y}`),i.setAttribute(`x2`,`${l.x+(l.x===c.x&&l.y===c.y?.01:0)}`),i.setAttribute(`y2`,`${l.y}`),r.style.opacity=`1`},Y=e=>{if(N=0,h){let t=Math.min(1,(e-h)/s),n=u(t);x(m.map((e,t)=>e.map((e,r)=>(p[t]?.[r]??e)+(e-(p[t]?.[r]??e))*n))),t>=1&&(h=0)}if(j&&!c){e>=D&&V(e),E=E.filter(t=>t.at>e||(!J.current.has(t.beam)&&T[t.beam]===null&&(T[t.beam]=t.at),!1));for(let t=0;t<C;t++){let n=T[t];if(n===null)continue;if(J.current.has(t)){P(t);continue}let r=(e-n)/i;if(r>=1){P(t),B(t<w?z.current:U.current[t]);continue}q(t,r)}let t=e>=O&&e<k;t!==A&&(A=t,M(t))}(h||j&&!c)&&(N=requestAnimationFrame(Y))},X=()=>{N||=requestAnimationFrame(Y)};S();let Z=new ResizeObserver(S);Z.observe(e);let Q=typeof IntersectionObserver>`u`?null:new IntersectionObserver(([e])=>{if(j=e.isIntersecting,j)D=performance.now()+400,X();else{E=[];for(let e=0;e<C;e++)P(e);k=0,A&&M(A=!1)}});return Q?.observe(e),()=>{Z.disconnect(),Q?.disconnect(),cancelAnimationFrame(N)}},[C,w]),f(()=>{let e=B.current,t=V.current;e&&t&&(e.style.width=`${t.offsetWidth}px`)},[X]),(0,n.useEffect)(()=>()=>window.clearTimeout(q.current),[]);let Z=e=>{let t=!T.has(e),n=new Set(T);t?n.add(e):n.delete(e),E(n),P(`${S[e].name} ${t?`paused`:`connected`}. ${C-n.size} of ${C} connected.`),A(e),window.clearTimeout(q.current),q.current=window.setTimeout(()=>A(null),c)},Q=e=>t=>{t.pointerType===`mouse`&&O(e)},ee=e=>t=>{t.currentTarget.matches(`:focus-visible`)&&O(e)},$=(e,t)=>(0,r.jsxs)(`button`,{ref:e=>{H.current[t]=e},type:`button`,className:`ui-ib__tool`,"aria-pressed":!T.has(t),"aria-label":`${e.name}, ${T.has(t)?`paused`:`connected`}`,"data-off":T.has(t)||void 0,"data-tip":D===t||k===t||void 0,onClick:()=>Z(t),onPointerEnter:Q(t),onPointerLeave:()=>O(null),onFocus:ee(t),onBlur:()=>O(null),children:[(0,r.jsx)(`span`,{className:`ui-ib__ring`,ref:e=>{U.current[t]=e}}),(0,r.jsx)(`span`,{className:`ui-ib__logo`,"aria-hidden":`true`,children:e.logo}),(0,r.jsxs)(`span`,{className:`ui-ib__tip`,"aria-hidden":`true`,children:[e.name,T.has(t)&&(0,r.jsx)(`span`,{className:`ui-ib__tip-state`,children:` · Paused`})]})]},t);return(0,r.jsxs)(`div`,{ref:F,className:[`ui-ib`,h].filter(Boolean).join(` `),role:`group`,"aria-label":b??`${p.name} connected to ${S.map(e=>e.name).join(`, `)}`,"data-focus":D!==null||void 0,children:[(0,r.jsx)(`style`,{href:`ui-integration-beam`,precedence:`default`,children:y}),(0,r.jsxs)(`svg`,{ref:L,className:`ui-ib__beams`,"aria-hidden":`true`,children:[(0,r.jsxs)(`defs`,{children:[(0,r.jsx)(`filter`,{id:`${x}-blur`,filterUnits:`userSpaceOnUse`,x:`-100`,y:`-100`,width:`10000`,height:`10000`,children:(0,r.jsx)(`feGaussianBlur`,{stdDeviation:`3`})}),S.map((e,t)=>(0,r.jsxs)(`linearGradient`,{id:`${x}-g${t}`,gradientUnits:`userSpaceOnUse`,ref:e=>{K.current[t]=e},children:[(0,r.jsx)(`stop`,{offset:`0`,className:`ui-ib__stop-tail`}),(0,r.jsx)(`stop`,{offset:`0.6`,className:`ui-ib__stop-mid`}),(0,r.jsx)(`stop`,{offset:`1`,className:`ui-ib__stop-head`})]},t))]}),S.map((e,t)=>(0,r.jsx)(`path`,{className:`ui-ib__line`,"data-off":T.has(t)||void 0,"data-focus":D===t||void 0,ref:e=>{W.current[t]=e}},t)),S.map((e,t)=>(0,r.jsxs)(`g`,{className:`ui-ib__pulse`,"data-focus":D===t||void 0,ref:e=>{G.current[t]=e},children:[(0,r.jsx)(`path`,{className:`ui-ib__glow`,stroke:`url(#${x}-g${t})`,filter:`url(#${x}-blur)`}),(0,r.jsx)(`path`,{className:`ui-ib__core`,stroke:`url(#${x}-g${t})`})]},t))]}),(0,r.jsxs)(`div`,{ref:I,className:`ui-ib__scene`,children:[(0,r.jsx)(`div`,{className:`ui-ib__group ui-ib__group--in`,children:e.map((e,t)=>$(e,t))}),(0,r.jsxs)(`div`,{ref:R,className:`ui-ib__center`,"data-syncing":j&&Y>0||void 0,children:[(0,r.jsx)(`span`,{className:`ui-ib__ring ui-ib__ring--center`,ref:z}),(0,r.jsx)(`span`,{className:`ui-ib__mark`,"aria-hidden":`true`,children:p.logo??(0,r.jsx)(m,{})}),(0,r.jsx)(`span`,{ref:B,className:`ui-ib__chip`,children:(0,r.jsxs)(`span`,{ref:V,className:`ui-ib__chip-inner`,children:[(0,r.jsx)(`span`,{className:`ui-ib__dot`,"data-idle":Y===0||void 0}),(0,r.jsx)(`span`,{className:`ui-ib__status`,children:X},X)]})})]}),(0,r.jsx)(`div`,{className:`ui-ib__group ui-ib__group--out`,children:t.map((e,t)=>$(e,w+t))})]}),(0,r.jsx)(`span`,{className:`ui-ib__sr`,"aria-live":`polite`,children:N})]})}function m(){let e=`M24 24C17.6 19.6 16.4 9.4 24 3.5C31.6 9.4 30.4 19.6 24 24Z`;return(0,r.jsxs)(`svg`,{viewBox:`0 0 48 48`,"aria-hidden":`true`,children:[(0,r.jsx)(`g`,{opacity:`0.36`,children:[45,135,225,315].map(t=>(0,r.jsx)(`path`,{d:e,transform:`rotate(${t} 24 24)`},t))}),[0,90,180,270].map(t=>(0,r.jsx)(`path`,{d:e,transform:`rotate(${t} 24 24)`},t))]})}var h=({children:e})=>(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:e}),g={name:`Acme`},_=[{name:`Slack`,logo:(0,r.jsx)(h,{children:(0,r.jsx)(`svg`,{x:`2`,y:`2`,width:`20`,height:`20`,viewBox:`0 0 2447.6 2452.5`,children:(0,r.jsxs)(`g`,{clipRule:`evenodd`,fillRule:`evenodd`,children:[(0,r.jsx)(`path`,{d:`m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z`,fill:`#36c5f0`}),(0,r.jsx)(`path`,{d:`m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z`,fill:`#2eb67d`}),(0,r.jsx)(`path`,{d:`m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z`,fill:`#ecb22e`}),(0,r.jsx)(`path`,{d:`m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0`,fill:`#e01e5a`})]})})})},{name:`Notion`,logo:(0,r.jsx)(h,{children:(0,r.jsx)(`path`,{fill:`currentColor`,d:`M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`})})},{name:`Gmail`,logo:(0,r.jsx)(h,{children:(0,r.jsx)(`svg`,{x:`2`,y:`2`,width:`20`,height:`20`,viewBox:`0 49.4 512 399.42`,children:(0,r.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,r.jsxs)(`g`,{fillRule:`nonzero`,children:[(0,r.jsx)(`path`,{fill:`#4285f4`,d:`M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z`}),(0,r.jsx)(`path`,{fill:`#34a853`,d:`M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z`}),(0,r.jsx)(`path`,{fill:`#fbbc04`,d:`M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z`})]}),(0,r.jsx)(`path`,{fill:`#ea4335`,d:`M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z`}),(0,r.jsx)(`path`,{fill:`#c5221f`,fillRule:`nonzero`,d:`M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z`})]})})})}],v=[{name:`HubSpot`,logo:(0,r.jsx)(h,{children:(0,r.jsx)(`path`,{fill:`#FF7A59`,d:`M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z`})})},{name:`Linear`,logo:(0,r.jsx)(h,{children:(0,r.jsx)(`path`,{fill:`#5E6AD2`,d:`M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z`})})},{name:`Google Drive`,logo:(0,r.jsx)(h,{children:(0,r.jsxs)(`svg`,{x:`1`,y:`2`,width:`22`,height:`20`,viewBox:`0 0 87.3 78`,children:[(0,r.jsx)(`path`,{d:`m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z`,fill:`#0066da`}),(0,r.jsx)(`path`,{d:`m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z`,fill:`#00ac47`}),(0,r.jsx)(`path`,{d:`m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z`,fill:`#ea4335`}),(0,r.jsx)(`path`,{d:`m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z`,fill:`#00832d`}),(0,r.jsx)(`path`,{d:`m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z`,fill:`#2684fc`}),(0,r.jsx)(`path`,{d:`m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z`,fill:`#ffba00`})]})})}],y=`
.ui-ib {
  --ui-ib-ink: #171717;
  --ui-ib-text: #404040;
  --ui-ib-muted: #8f8f8f;
  --ui-ib-faint: #b5b5b5;
  --ui-ib-line: #e2e2e2;
  --ui-ib-line-hi: #a9c0ff;
  --ui-ib-card: #ffffff;
  --ui-ib-tray: #f0f0f0;
  --ui-ib-accent: #2f6bff;
  /* Pulse: clear tail, accent body, a pale tip that reads as light */
  --ui-ib-pulse: #2f6bff;
  --ui-ib-tip-color: #b9cdff;
  --ui-ib-ring: rgba(47, 107, 255, 0.2);
  --ui-ib-glow: rgba(47, 107, 255, 0.26);
  --ui-ib-hub: #171717;
  --ui-ib-hub-mark: #ffffff;
  --ui-ib-hub-edge: rgba(0, 0, 0, 0.9);
  --ui-ib-tooltip: #171717;
  --ui-ib-tooltip-text: #ffffff;
  --ui-ib-shadow: 0 0 0 1px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 18px -10px rgba(0, 0, 0, 0.18);
  --ui-ib-focus: rgba(23, 23, 23, 0.22);
  --ui-ib-ease: ${l};
  position: relative;
  width: 100%;
  container-type: inline-size;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 13px;
  color: var(--ui-ib-text);
  -webkit-tap-highlight-color: transparent;
}
.ui-ib *, .ui-ib *::before, .ui-ib *::after { box-sizing: border-box; }

/* ---------- Beams ---------- */

/* Absolute, so it paints below the (positioned) tiles */
.ui-ib__beams {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}
.ui-ib__line {
  fill: none;
  stroke: var(--ui-ib-line);
  stroke-width: 1.5;
  stroke-linecap: round;
  transition: stroke 300ms var(--ui-ib-ease), opacity 300ms var(--ui-ib-ease);
}
.ui-ib__line[data-off] { stroke: var(--ui-ib-faint); stroke-dasharray: 2 5; opacity: 0.75; }
.ui-ib[data-focus] .ui-ib__line:not([data-focus]) { opacity: 0.35; }
.ui-ib__line[data-focus]:not([data-off]) { stroke: var(--ui-ib-line-hi); }

.ui-ib__pulse { opacity: 0; transition: opacity 240ms ease; }
.ui-ib__pulse path { fill: none; stroke-linecap: round; transition: opacity 300ms var(--ui-ib-ease); }
.ui-ib__core { stroke-width: 2; }
.ui-ib__glow { stroke-width: 6; opacity: 0.45; }
.ui-ib[data-focus] .ui-ib__pulse:not([data-focus]) path { opacity: 0.25; }
.ui-ib__pulse[data-focus] .ui-ib__glow { opacity: 0.7; }
.ui-ib__stop-tail { stop-color: var(--ui-ib-pulse); stop-opacity: 0; }
.ui-ib__stop-mid { stop-color: var(--ui-ib-pulse); stop-opacity: 0.9; }
.ui-ib__stop-head { stop-color: var(--ui-ib-tip-color); stop-opacity: 1; }

/* ---------- Layout: side by side, stacked on narrow widths ---------- */

.ui-ib__scene {
  --ui-ib-stack: 0;
  display: grid;
  grid-template-columns: auto minmax(40px, 1fr) auto minmax(40px, 1fr) auto;
  grid-template-areas: "in . hub . out";
  align-items: center;
  padding: 6px 0;
}
.ui-ib__group { display: flex; flex-direction: column; gap: 26px; }
.ui-ib__group--in { grid-area: in; }
.ui-ib__group--out { grid-area: out; }

/* ---------- Tools ---------- */

.ui-ib__tool {
  position: relative;
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  padding: 0;
  border: 0;
  border-radius: 18px;
  background: var(--ui-ib-card);
  box-shadow: var(--ui-ib-shadow);
  color: var(--ui-ib-ink);
  font: inherit;
  cursor: pointer;
  transition: background-color 300ms var(--ui-ib-ease), box-shadow 300ms var(--ui-ib-ease);
}
.ui-ib__tool:focus-visible { outline: 2px solid var(--ui-ib-focus); outline-offset: 3px; }
.ui-ib__logo {
  display: grid;
  width: 28px;
  height: 28px;
  transition: transform 300ms var(--ui-ib-ease), filter 300ms var(--ui-ib-ease), opacity 300ms var(--ui-ib-ease);
}
.ui-ib__logo > svg { width: 100%; height: 100%; }
@media (hover: hover) {
  .ui-ib__tool:hover .ui-ib__logo { transform: scale(1.08); }
}
.ui-ib__tool[data-off] { background: var(--ui-ib-tray); }
.ui-ib__tool[data-off] .ui-ib__logo { filter: grayscale(1); opacity: 0.4; }

/* Arrival glow – played with the Web Animations API */
.ui-ib__ring {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 3px var(--ui-ib-ring), 0 0 22px 2px var(--ui-ib-glow);
  opacity: 0;
  pointer-events: none;
}

/* Tooltip: points toward the centre, so it never leaves the scene */
.ui-ib__tip {
  --ui-ib-tip-from: translate(-4px, -50%);
  position: absolute;
  z-index: 3;
  top: 50%;
  left: calc(100% + 10px);
  padding: 5px 9px;
  border-radius: 8px;
  background: var(--ui-ib-tooltip);
  color: var(--ui-ib-tooltip-text);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: var(--ui-ib-tip-from);
  transition: opacity 180ms ease, transform 260ms var(--ui-ib-ease);
}
.ui-ib__group--out .ui-ib__tip { --ui-ib-tip-from: translate(4px, -50%); left: auto; right: calc(100% + 10px); }
.ui-ib__tip-state { opacity: 0.6; font-weight: 400; }
.ui-ib__tool[data-tip] .ui-ib__tip { opacity: 1; transform: translate(0, -50%); }

/* ---------- Centre ---------- */

.ui-ib__center {
  grid-area: hub;
  position: relative;
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: var(--ui-ib-hub);
  box-shadow: 0 0 0 1px var(--ui-ib-hub-edge), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 14px 28px -12px rgba(0, 0, 0, 0.38);
  color: var(--ui-ib-hub-mark);
}
.ui-ib__mark { display: grid; width: 36px; height: 36px; fill: currentColor; }
.ui-ib__mark > svg { width: 100%; height: 100%; }
.ui-ib__ring--center { inset: -1px; }

/* Status chip under the hub – absolute, so the hub itself stays centred on the beams */
.ui-ib__chip {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  translate: -50% 0;
  display: block;
  height: 26px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--ui-ib-card);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: width 320ms var(--ui-ib-ease);
}
.ui-ib__chip-inner {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: max-content;
  height: 26px;
  padding: 0 11px 0 10px;
  font-size: 12px;
  font-weight: 500;
  color: var(--ui-ib-text);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.ui-ib__status { display: inline-block; animation: ui-ib-in 320ms var(--ui-ib-ease) both; }
.ui-ib__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ui-ib-accent);
  transition: background-color 300ms ease;
}
.ui-ib__dot[data-idle] { background: var(--ui-ib-faint); }
.ui-ib__center[data-syncing] .ui-ib__dot { animation: ui-ib-breathe 1.1s ease-in-out infinite; }

.ui-ib__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@keyframes ui-ib-in { from { opacity: 0; transform: translateY(6px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }
@keyframes ui-ib-breathe { 50% { box-shadow: 0 0 0 3px var(--ui-ib-ring); } }

/* Narrow: senders above, receivers below, vertical beams */
@container (max-width: 459px) {
  .ui-ib__scene {
    --ui-ib-stack: 1;
    grid-template-columns: 1fr;
    grid-template-areas: "in" "hub" "out";
    justify-items: center;
    row-gap: 78px;
    padding: 0 0 4px;
  }
  .ui-ib__group { flex-direction: row; gap: clamp(14px, 7cqw, 34px); }
  .ui-ib__tool { width: 56px; height: 56px; border-radius: 17px; }
  .ui-ib__center { width: 76px; height: 76px; border-radius: 23px; }
  /* Tooltips sit between the rows; the outer tools align theirs to their edge */
  .ui-ib__tip,
  .ui-ib__group--out .ui-ib__tip {
    --ui-ib-tip-from: translate(-50%, -4px);
    top: calc(100% + 8px);
    right: auto;
    left: 50%;
  }
  .ui-ib__group--out .ui-ib__tip { --ui-ib-tip-from: translate(-50%, 4px); top: auto; bottom: calc(100% + 8px); }
  .ui-ib__tool[data-tip] .ui-ib__tip { transform: translate(-50%, 0); }
  .ui-ib__tool:first-child .ui-ib__tip { left: 0; translate: 50% 0; }
  .ui-ib__tool:last-child .ui-ib__tip { left: 100%; translate: -50% 0; }
}

/* Touch: the tiles are already 56px+; tooltips are shown after a tap instead of on hover */
@media (hover: none) and (pointer: coarse) {
  .ui-ib__tool { min-width: 44px; min-height: 44px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-ib__line, .ui-ib__tool, .ui-ib__logo, .ui-ib__tip, .ui-ib__chip, .ui-ib__dot { transition: none; }
  .ui-ib__status, .ui-ib__center[data-syncing] .ui-ib__dot { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ib {
  --ui-ib-ink: #ededed;
  --ui-ib-text: #c8c8cc;
  --ui-ib-muted: #8b8b92;
  --ui-ib-faint: #5c5c63;
  --ui-ib-line: #2e2e33;
  --ui-ib-line-hi: #4b5f9e;
  --ui-ib-card: #19191b;
  --ui-ib-tray: #111113;
  --ui-ib-accent: #6d8bff;
  --ui-ib-pulse: #6d8bff;
  --ui-ib-tip-color: #ffffff;
  --ui-ib-ring: rgba(109, 139, 255, 0.24);
  --ui-ib-glow: rgba(109, 139, 255, 0.3);
  --ui-ib-hub: #26262a;
  --ui-ib-hub-mark: #ffffff;
  --ui-ib-hub-edge: rgba(255, 255, 255, 0.12);
  --ui-ib-tooltip: #ededed;
  --ui-ib-tooltip-text: #111113;
  --ui-ib-shadow: 0 0 0 1px #2a2a2e, 0 1px 2px rgba(0, 0, 0, 0.3), 0 8px 18px -10px rgba(0, 0, 0, 0.6);
  --ui-ib-focus: rgba(255, 255, 255, 0.3);
}
:where(.dark, [data-theme="dark"]) .ui-ib__chip { box-shadow: 0 0 0 1px #2a2a2e, 0 1px 2px rgba(0, 0, 0, 0.3); }
`;function b(){return(0,r.jsx)(`div`,{className:`integration-beam-demo`,children:(0,r.jsx)(p,{})})}export{b as default};