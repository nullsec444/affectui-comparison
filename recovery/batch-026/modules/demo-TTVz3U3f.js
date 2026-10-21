import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
function i(e, t) {
    let n = Math.max(0, Math.round((t - e) / 1000));
    if (n < 45) {
        return `just now`;
    }
    let r = Math.round(n / 60);
    if (r < 60) {
        return `${r}min ago`;
    }
    let i = Math.round(r / 60);
    if (i < 24) {
        return `${i}h ago`;
    }
    return `${Math.round(i / 24)}d ago`;
}
function AComponent({ title = `Comment`, messages, currentUser, assistant, onReply, onClose, className }) {
    let [m, setM] = n.useState(messages);
    let [g] = n.useState(()=>new Set(messages.filter((e)=>e.author.assistant).map((e)=>e.id)));
    let [_, set_] = n.useState(new Set);
    let [y, setY] = n.useState(``);
    let [x, setX] = n.useState(false);
    let [C, setC] = n.useState(()=>Date.now());
    let TRef = n.useRef(null);
    let ref = useL(TRef);
    n.useEffect(()=>{
        let e = window.setInterval(()=>setC(Date.now()), 30000);
        return ()=>window.clearInterval(e);
    }, []);
    n.useEffect(()=>{
        TRef.current?.scrollTo({
            top: TRef.current.scrollHeight,
            behavior: `smooth`
        });
    }, [
        m.length,
        x
    ]);
    let D = async ()=>{
        let text = y.trim();
        if (!text || x) {
            return;
        }
        setY(``);
        setC(Date.now());
        O(true);
        setM((t)=>[
                ...t,
                {
                    id: `m-${Date.now()}`,
                    author: currentUser,
                    createdAt: Date.now(),
                    text
                }
            ]);
        let t = onReply?.(text);
        if (t) {
            setX(true);
            try {
                let e = await t;
                if (e) {
                    setM((t)=>[
                            ...t,
                            {
                                ...e,
                                createdAt: Date.now()
                            }
                        ]);
                }
            } finally{
                setX(false);
                setC(Date.now());
            }
        }
    };
    let O = (e)=>{
        let TRef_current = TRef.current;
        if (TRef_current) {
            TRef_current.style.maxHeight = e ? `${TRef_current.offsetHeight}px` : ``;
        }
    };
    let k = (e)=>{
        O(false);
        set_((t)=>{
            let n = new Set(t);
            if (n.has(e)) {
                n.delete(e);
            } else {
                n.add(e);
            }
            return n;
        });
    };
    return <><style href={`ui-comment-thread`} precedence={`default`}>{u}</style><section className={[
        `ui-ct`,
        className
    ].filter(Boolean).join(` `)} aria-label={title}><header className={`ui-ct__head`}><h3 className={`ui-ct__title`}>{title}</h3><span className={`ui-ct__count`}>{m.length}{` `}{m.length === 1 ? `message` : `messages`}</span>{onClose && <button type={`button`} className={`ui-ct__icon-btn`} aria-label={`Close comment`} onClick={onClose}><C1Component d={`m4 4 8 8M12 4l-8 8`}/></button>}</header><div className={`ui-ct__card ui-ct__morph`} ref={ref}><div className={`ui-ct__scroll`} ref={TRef} aria-live={`polite`}>{m.map((e)=>{
        let t = _.has(e.id);
        let n = /^\/edit\b/i.test(e.text.trim());
        return <article key={e.id} className={`ui-ct__msg`} data-delayed={g.has(e.id) || undefined}><div className={`ui-ct__meta`}><O1Component author={e.author}/><span className={`ui-ct__name`}>{e.author.name}</span><time className={`ui-ct__time`} dateTime={new Date(e.createdAt).toISOString()}>{i(+e.createdAt, C)}</time></div>{e.text && <p className={`ui-ct__text`}>{n ? <><span className={`ui-ct__command`}>{`/Edit`}</span>{` `}{e.text.trim().replace(/^\/edit\s*/i, ``)}</> : e.text}</p>}{e.status && <div className={`ui-ct__status`}><button type={`button`} className={`ui-ct__status-btn`} aria-expanded={t} disabled={!e.details?.length} onClick={()=>k(e.id)}><span className={`ui-ct__check`}><C1Component d={`m4 8.3 2.6 2.6L12 5.4`} size={12}/></span>{e.status}{!!e.details?.length && <span className={`ui-ct__chevron`}><C1Component d={`m4.5 6.25 3.5 3.5 3.5-3.5`} size={14}/></span>}</button>{!!e.details?.length && <div className={`ui-ct__details`} data-open={t || undefined} inert={!t}><ul>{e.details.map((e, t)=><li key={e} style={{
                "--i": t
            }}>{e}</li>)}</ul></div>}</div>}</article>;
    })}{x && assistant && <article className={`ui-ct__msg`} aria-label={`${assistant.name} is thinking`}><div className={`ui-ct__meta`}><O1Component author={assistant}/><span className={`ui-ct__name`}>{assistant.name}</span></div><p className={`ui-ct__thinking`}>{`Thinking…`}</p></article>}</div></div><form className={`ui-ct__composer`} onSubmit={(e)=>{
        e.preventDefault();
        D();
    }}><input className={`ui-ct__input`} value={y} onChange={(e)=>setY(e.target.value)} placeholder={assistant ? `Reply, or ask @${assistant.name}…` : `Add comment…`} aria-label={`Reply`}/><button type={`submit`} className={`ui-ct__send`} aria-label={`Send reply`} disabled={!y.trim() || x}><C1Component d={`M8 13V3M3.5 7.5 8 3l4.5 4.5`} size={14}/></button></form></section></>;
}
function O1Component({ author }) {
    if (author.avatar && typeof author.avatar != `string`) {
        return <span className={`ui-ct__avatar`}>{author.avatar}</span>;
    }
    if (typeof author.avatar == `string`) {
        return <img className={`ui-ct__avatar`} src={author.avatar} alt={``} width={24} height={24} loading={`lazy`}/>;
    }
    return <span className={`ui-ct__avatar ui-ct__avatar--initials`} aria-hidden={`true`}>{author.name.split(` `).map((e)=>e[0]).slice(0, 2).join(``)}</span>;
}
function S1Component() {
    let e = n.useId();
    return <svg viewBox={`0 0 24 24`} width={`24`} height={`24`} aria-hidden={`true`}><defs><linearGradient id={`${e}-fill`} x1={`3`} y1={`3`} x2={`21`} y2={`21`} gradientUnits={`userSpaceOnUse`}><stop offset={`0`} stopColor={`#5b9dff`}/><stop offset={`0.5`} stopColor={`#2f6bff`}/><stop offset={`1`} stopColor={`#8b5cf6`}/></linearGradient></defs><circle cx={`12`} cy={`12`} r={`12`} fill={`url(#${e}-fill)`}/></svg>;
}
var C1Component = ({ d, size = 16 })=><svg viewBox={`0 0 16 16`} width={size} height={size} fill={`none`} stroke={`currentColor`} strokeWidth={`1.5`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}><path d={d}/></svg>;
function useL(TRef) {
    let tRef = n.useRef(null);
    n.useLayoutEffect(()=>{
        let tRef_current = tRef.current;
        let e_current = TRef.current;
        if (!tRef_current || !e_current) {
            return;
        }
        let i = ()=>{
            tRef_current.style.height = `${e_current.offsetHeight}px`;
        };
        i();
        let a = new ResizeObserver(i);
        a.observe(e_current);
        let o = requestAnimationFrame(()=>tRef_current.setAttribute(`data-smooth`, ``));
        return ()=>{
            a.disconnect();
            cancelAnimationFrame(o);
        };
    }, [
        TRef
    ]);
    return tRef;
}
var u = `
.ui-ct {
  --ui-ct-tray: #f0f0f0;
  --ui-ct-card: #ffffff;
  --ui-ct-ink: #171717;
  --ui-ct-text: #404040;
  --ui-ct-muted: #8f8f8f;
  --ui-ct-accent: #2f6bff;
  --ui-ct-ok: #1f8a4c;
  --ui-ct-accent-text: #2f6bff;
  --ui-ct-border: #e5e5e5;
  --ui-ct-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-ct-hover: rgba(0, 0, 0, 0.05);
  --ui-ct-row-hover: #f5f5f5;
  --ui-ct-initials: #eef3ff;
  --ui-ct-dot: #d4d4d4;
  --ui-ct-subtle: #a3a3a3;
  --ui-ct-avatar-ring: rgba(0, 0, 0, 0.06);
  --ui-ct-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 420px;
  /* Like the Chat Composer: a gray tray with heading and reply field, the white card sits on top of it */
  background: var(--ui-ct-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-ct-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-ct *, .ui-ct *::before, .ui-ct *::after { box-sizing: border-box; }
.ui-ct button { margin: 0; font: inherit; color: inherit; cursor: pointer; }
.ui-ct button:focus-visible { outline: 2px solid var(--ui-ct-accent); outline-offset: 2px; }

.ui-ct__head {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 46px;
  padding: 6px 10px 6px 18px;
}
.ui-ct__title { margin: 0; font-size: 15px; font-weight: 500; line-height: 22px; }
.ui-ct__count { margin-right: auto; font-size: 12.5px; color: var(--ui-ct-muted); }
.ui-ct__icon-btn {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--ui-ct-muted) !important;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-ct__icon-btn:hover { background: var(--ui-ct-hover); color: var(--ui-ct-ink) !important; }

.ui-ct__card {
  background: var(--ui-ct-card);
  border: 1px solid var(--ui-ct-border);
  border-radius: 16px;
  box-shadow: var(--ui-ct-shadow);
}
.ui-ct__scroll {
  display: grid;
  gap: 18px;
  align-content: start;
  min-height: var(--ui-ct-min-height, 0px);
  max-height: var(--ui-ct-max-height, 340px);
  padding: 16px 18px 18px;
  overflow-y: auto;
  scrollbar-width: thin;
}
/* Each message builds up piece by piece: name row, text, status – the assistant's first reply a beat later */
.ui-ct__msg { --ui-ct-d: 0ms; }
.ui-ct__msg[data-delayed] { --ui-ct-d: 700ms; }
.ui-ct__msg > * { animation: ui-ct-in 420ms var(--ui-ct-ease) both; animation-delay: var(--ui-ct-d); }
.ui-ct__msg > :nth-child(2) { animation-delay: calc(var(--ui-ct-d) + 80ms); }
.ui-ct__msg > :nth-child(3) { animation-delay: calc(var(--ui-ct-d) + 160ms); }
.ui-ct__meta { display: flex; align-items: center; gap: 9px; }
.ui-ct__avatar {
  display: grid;
  place-items: center;
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}
img.ui-ct__avatar { box-shadow: 0 0 0 1px var(--ui-ct-avatar-ring); }
.ui-ct__avatar svg { width: 100%; height: 100%; }
.ui-ct__avatar--initials { background: var(--ui-ct-initials); font-size: 9px; font-weight: 600; color: var(--ui-ct-accent-text); }
.ui-ct__name { font-size: 14px; font-weight: 500; line-height: 20px; }
.ui-ct__time { margin-left: auto; font-size: 12.5px; color: var(--ui-ct-muted); font-variant-numeric: tabular-nums; }
.ui-ct__text { margin: 8px 0 0; font-size: 14px; line-height: 21px; color: var(--ui-ct-text); }
.ui-ct__command { color: var(--ui-ct-muted); }

.ui-ct__status { margin-top: 8px; }
.ui-ct__status-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 26px;
  padding: 0 6px 0 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font-size: 14px !important;
  transition: background-color 140ms ease;
}
/* The global button reset sets margin: 0 – shift the row so the check icon sits centered under the avatars */
.ui-ct .ui-ct__status-btn { margin-left: -4px; }
.ui-ct__status-btn:hover:not(:disabled) { background: var(--ui-ct-row-hover); }
.ui-ct__status-btn:disabled { cursor: default; }
.ui-ct__check {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--ui-ct-ok);
  color: #fff;
}
.ui-ct__chevron { display: grid; color: var(--ui-ct-muted); transition: transform 260ms var(--ui-ct-ease); }
.ui-ct__status-btn[aria-expanded="true"] .ui-ct__chevron { transform: rotate(180deg); }
.ui-ct__details {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-ct-ease);
}
.ui-ct__details[data-open] { grid-template-rows: 1fr; }
.ui-ct__details ul {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 0 0 28px;
  list-style: none;
}
.ui-ct__details li {
  position: relative;
  margin-top: 6px;
  font-size: 13px;
  line-height: 19px;
  color: var(--ui-ct-muted);
  /* Closing: lines fade out quickly while the box folds */
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 160ms ease, transform 220ms var(--ui-ct-ease);
}
/* Opening: lines come in one after another */
.ui-ct__details[data-open] li {
  opacity: 1;
  transform: none;
  transition-duration: 320ms, 420ms;
  transition-delay: calc(60ms + var(--i, 0) * 60ms);
}
/* Tree lines instead of dots: each line gets its own corner – down on the axis of the check icon, then a rounded turn right */
.ui-ct__details li:first-child { margin-top: 5px; }
.ui-ct__details li::before {
  content: "";
  position: absolute;
  left: -16.625px;
  top: -3px;
  width: 10.5px;
  height: 13px;
  border-left: 1.25px solid var(--ui-ct-dot);
  border-bottom: 1.25px solid var(--ui-ct-dot);
  border-bottom-left-radius: 5px;
}
/* The first branch starts with a small gap under the check icon */
.ui-ct__details li:first-child::before {
  top: -5px;
  height: 15px;
}

.ui-ct__thinking {
  display: inline-block;
  margin: 8px 0 0;
  font-size: 14px;
  background: linear-gradient(90deg, var(--ui-ct-subtle) 0%, var(--ui-ct-subtle) 35%, rgba(255, 255, 255, 0.9) 50%, var(--ui-ct-subtle) 65%, var(--ui-ct-subtle) 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ui-ct-shine 1.6s linear infinite;
}

.ui-ct__composer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 9px 9px 18px;
}
.ui-ct__input {
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 0;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 14px;
  color: var(--ui-ct-ink);
}
.ui-ct__input::placeholder { color: var(--ui-ct-subtle); }
.ui-ct__send {
  display: grid;
  place-items: center;
  flex: none;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff !important;
  transition: opacity 160ms ease, transform 160ms ease;
}
.ui-ct__send:disabled { opacity: 0.3; cursor: default; }
.ui-ct__send:not(:disabled):active { transform: scale(0.94); }

@keyframes ui-ct-in { from { opacity: 0; transform: translateY(4px); } }
@keyframes ui-ct-shine { from { background-position: 100% 0; } to { background-position: 0% 0; } }
@media (prefers-reduced-motion: reduce) {
  .ui-ct__msg > *, .ui-ct__thinking { animation: none; }
  .ui-ct__details, .ui-ct__details li, .ui-ct__chevron { transition: none; }
}

/* Height changes glide instead of jumping */
.ui-ct__morph { overflow: hidden; }
.ui-ct__morph[data-smooth] { transition: height 380ms cubic-bezier(0.22, 1, 0.36, 1); }
@media (prefers-reduced-motion: reduce) { .ui-ct__morph[data-smooth] { transition: none; } }


/* Text fields: no focus box while typing – also against global :focus-visible rules of the host page */
.ui-ct input:not([type="checkbox"]):not([type="radio"]):focus-visible,
.ui-ct textarea:focus-visible,
.ui-ct [contenteditable]:focus-visible { outline: none; }
/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ct {
  --ui-ct-tray: #161618;
  --ui-ct-card: #232326;
  --ui-ct-ink: #ededed;
  --ui-ct-text: #c4c4c4;
  --ui-ct-muted: #8f8f8f;
  --ui-ct-ok: #2a9d5c;
  --ui-ct-accent-text: #6b95ff;
  --ui-ct-border: rgba(255, 255, 255, 0.08);
  --ui-ct-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-ct-hover: rgba(255, 255, 255, 0.06);
  --ui-ct-row-hover: rgba(255, 255, 255, 0.06);
  --ui-ct-initials: rgba(47, 107, 255, 0.16);
  --ui-ct-dot: rgba(255, 255, 255, 0.14);
  --ui-ct-subtle: #6b6b70;
  --ui-ct-avatar-ring: rgba(255, 255, 255, 0.08);
}
:where(.dark, [data-theme="dark"]) .ui-ct__send {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;
  color: #121213 !important;
}
`;
const d = {
    name: `Atlas`,
    avatar: <S1Component/>,
    assistant: true
};
const f = (e)=>Date.now() - e * 60000;
const messages = [
    {
        id: `1`,
        author: {
            name: `Lena Lindqvist`,
            avatar: `/avatars/lena.jpg`
        },
        createdAt: f(3),
        text: `/edit Rename every “customers” to “members” on the pricing page.`
    },
    {
        id: `2`,
        author: d,
        createdAt: f(1),
        text: ``,
        status: `Edit completed`,
        details: [
            `Renamed 12 mentions in 3 sections`,
            `Kept “customer support” as it is`,
            `Left the legal pages untouched`
        ]
    }
];
const m = [
    `Done – I also updated the meta description.`,
    `Good catch. I'll leave a note for the copy review.`,
    `On it. You'll see the change in a minute.`
];
let h = 0;
function GComponent() {
    return <div className={`thread-demo`}><AComponent messages={messages} currentUser={{
        name: `Sofia Marin`,
        avatar: `/avatars/sofia.jpg`
    }} assistant={d} onClose={()=>{}} onReply={(e)=>{
        if (!/@atlas/i.test(e)) {
            return;
        }
        let text = m[h++ % m.length];
        return new Promise((resolve)=>setTimeout(()=>resolve({
                    id: `a-${Date.now()}`,
                    author: d,
                    createdAt: Date.now(),
                    text
                }), 1400));
    }}/></div>;
}
export { GComponent as default };
