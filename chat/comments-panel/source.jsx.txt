// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = e => /^\/edit\b/i.test(e.text.trim());
const a = e => !i(e) && e.text.trim().endsWith(`?`);
function o(e, t) {
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
function S1Component({
  comments,
  currentUser,
  title = `Comments`,
  onRunEdit,
  onAdd,
  onClose,
  className
}) {
  let [g, setG] = n.useState(comments);
  let [v, setV] = n.useState(`all`);
  let [b, setB] = n.useState(true);
  let [S, setS] = n.useState(false);
  let [w, setW] = n.useState({});
  let [E, setE] = n.useState(new Set());
  let [O, setO] = n.useState(``);
  let [A, setA] = n.useState(() => Date.now());
  let MRef = n.useRef(null);
  let NRef = n.useRef(null);
  let ref = useU(NRef);
  n.useEffect(() => {
    let e = window.setInterval(() => setA(Date.now()), 30000);
    return () => window.clearInterval(e);
  }, []);
  n.useEffect(() => {
    if (!S) {
      return;
    }
    let e = e => !MRef.current?.contains(e.target) && setS(false);
    window.addEventListener(`pointerdown`, e);
    return () => window.removeEventListener(`pointerdown`, e);
  }, [S]);
  let F = g.filter(e => !E.has(e.id));
  let length = F.filter(e => i(e) && w[e.id] !== `done`).length;
  let L = {
    all: F.length,
    questions: F.filter(a).length,
    edits: length
  };
  let R = n.useMemo(() => [...g.filter(e => v === `all` || (v === `questions` ? a(e) : i(e)))].sort((e, t) => (+t.createdAt - e.createdAt) * (b ? 1 : -1)), [g, v, b]);
  let z = async e => {
    setW(t => ({
      ...t,
      [e.id]: `running`
    }));
    try {
      await (onRunEdit ? onRunEdit(e) : new Promise(resolve => setTimeout(resolve, 1100)));
      setW(t => ({
        ...t,
        [e.id]: `done`
      }));
    } catch {
      setW(t => ({
        ...t,
        [e.id]: `idle`
      }));
    }
  };
  let B = () => {
    let text = O.trim();
    if (!text) {
      return;
    }
    let n = {
      id: `c-${Date.now()}`,
      author: currentUser,
      createdAt: Date.now(),
      text
    };
    setG(e => [n, ...e]);
    setO(``);
    setV(`all`);
    setB(true);
    setA(Date.now());
    onAdd?.(n);
    requestAnimationFrame(() => NRef.current?.scrollTo({
      top: 0,
      behavior: `smooth`
    }));
  };
  return <><style href={`ui-comments-panel`} precedence={`default`}>{d}</style><section className={[`ui-cp`, className].filter(Boolean).join(` `)} aria-label={title}><header className={`ui-cp__head`}><h3 className={`ui-cp__title`}>{title}</h3>{onClose && <button type={`button`} className={`ui-cp__icon-btn`} aria-label={`Close ${title.toLowerCase()}`} onClick={onClose}><L1Component d={`m4 4 8 8M12 4l-8 8`} /></button>}</header><div className={`ui-cp__card`}><div className={`ui-cp__bar`}><div className={`ui-cp__tabs`} role={`tablist`} aria-label={`Filter comments`}>{[`all`, `questions`, `edits`].map(e => <button key={e} type={`button`} role={`tab`} aria-selected={v === e} className={`ui-cp__tab`} onClick={() => setV(e)}>{{
                all: `All`,
                questions: `Questions`,
                edits: `Edits`
              }[e]}{e === `edits` && L.edits > 0 && <span className={`ui-cp__badge`}>{L.edits}</span>}</button>)}</div><div className={`ui-cp__sort`} ref={MRef}><button type={`button`} className={`ui-cp__icon-btn`} aria-label={`Sort comments`} aria-haspopup={`menu`} aria-expanded={S} onClick={() => setS(e => !e)}><L1Component d={`M2.5 4.5h11M4.5 8h7M6.5 11.5h3`} /></button>{S && <div className={`ui-cp__menu`} role={`menu`}>{[{
                label: `Newest first`,
                value: true
              }, {
                label: `Oldest first`,
                value: false
              }].map(e => <button key={e.label} type={`button`} role={`menuitemradio`} aria-checked={b === e.value} className={`ui-cp__menu-item`} onClick={() => {
                setB(e.value);
                setS(false);
              }}>{e.label}{b === e.value && <L1Component d={`m3.5 8.5 3 3 6-7`} size={14} />}</button>)}</div>}</div></div><div className={`ui-cp__morph`} ref={ref}><ul className={`ui-cp__list`} ref={NRef} aria-live={`polite`}>{R.length === 0 && <li className={`ui-cp__empty`}>{v === `questions` ? `No open questions.` : `No edits to run.`}</li>}{R.map(e => {
              let t = i(e);
              let n = w[e.id] ?? `idle`;
              let a = E.has(e.id);
              return <li key={e.id} className={`ui-cp__item`} data-resolved={a || undefined}><div className={`ui-cp__meta`}><C1Component author={e.author} /><span className={`ui-cp__name`}>{e.author.name}</span><time className={`ui-cp__time`} dateTime={new Date(e.createdAt).toISOString()}>{o(+e.createdAt, A)}</time><button type={`button`} className={`ui-cp__resolve`} aria-pressed={a} aria-label={a ? `Reopen comment` : `Resolve comment`} title={a ? `Reopen` : `Resolve`} onClick={() => setE(t => {
                    let n = new Set(t);
                    if (n.has(e.id)) {
                      n.delete(e.id);
                    } else {
                      n.add(e.id);
                    }
                    return n;
                  })}><L1Component d={`m3.5 8.5 3 3 6-7`} size={14} /></button></div><p className={`ui-cp__text`}>{t ? <><span className={`ui-cp__command`}>{`/Edit`}</span>{` `}{e.text.trim().replace(/^\/edit\s*/i, ``)}</> : e.text}</p>{t && !a && <div className={`ui-cp__actions`}>{n === `done` ? <><span className={`ui-cp__done`} role={`status`}><L1Component d={`m3.5 8.5 3 3 6-7`} size={14} />{`Edit applied`}</span><button type={`button`} className={`ui-cp__link`} onClick={() => setW(t => ({
                      ...t,
                      [e.id]: `idle`
                    }))}>{`Undo`}</button></> : <button type={`button`} className={`ui-cp__btn`} disabled={n === `running`} onClick={() => z(e)}>{n === `running` ? <><span className={`ui-cp__spinner`} aria-hidden={`true`} />{` Running…`}</> : `Run edit`}</button>}</div>}</li>;
            })}</ul></div></div><form className={`ui-cp__composer`} onSubmit={e => {
        e.preventDefault();
        B();
      }}><C1Component author={currentUser} /><input className={`ui-cp__input`} value={O} onChange={e => setO(e.target.value)} placeholder={`Add a comment or /edit…`} aria-label={`Add a comment`} /><button type={`submit`} className={`ui-cp__send`} aria-label={`Send comment`} disabled={!O.trim()}><L1Component d={`M8 13V3M3.5 7.5 8 3l4.5 4.5`} size={14} /></button></form></section></>;
}
function C1Component({
  author
}) {
  let t = author.name.split(` `).map(e => e[0]).slice(0, 2).join(``);
  if (author.avatar) {
    return <img className={`ui-cp__avatar`} src={author.avatar} alt={``} width={22} height={22} loading={`lazy`} />;
  }
  return <span className={`ui-cp__avatar ui-cp__avatar--initials`} aria-hidden={`true`}>{t}</span>;
}
var L1Component = ({
  d,
  size = 16
}) => <svg viewBox={`0 0 16 16`} width={size} height={size} fill={`none`} stroke={`currentColor`} strokeWidth={`1.5`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}><path d={d} /></svg>;
function useU(NRef) {
  let tRef = n.useRef(null);
  n.useLayoutEffect(() => {
    let tRef_current = tRef.current;
    let e_current = NRef.current;
    if (!tRef_current || !e_current) {
      return;
    }
    let i = () => {
      tRef_current.style.height = `${e_current.offsetHeight}px`;
    };
    i();
    let a = new ResizeObserver(i);
    a.observe(e_current);
    let o = requestAnimationFrame(() => tRef_current.setAttribute(`data-smooth`, ``));
    return () => {
      a.disconnect();
      cancelAnimationFrame(o);
    };
  }, [NRef]);
  return tRef;
}
var d = `.ui-cp{--ui-cp-tray: #f0f0f0;--ui-cp-card: #ffffff;--ui-cp-line: #f0f0f0;--ui-cp-ink: #171717;--ui-cp-text: #404040;--ui-cp-muted: #8f8f8f;--ui-cp-accent: #2f6bff;--ui-cp-ok: #1f8a4c;--ui-cp-accent-text: #2f6bff;--ui-cp-border: #e5e5e5;--ui-cp-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-cp-hover: rgba(0, 0, 0, 0.05);--ui-cp-tab: #f5f5f5;--ui-cp-tab-on: #fff;--ui-cp-menu: #fff;--ui-cp-menu-hover: #f5f5f5;--ui-cp-btn: #f3f3f3;--ui-cp-btn-hover: #ebebeb;--ui-cp-initials: #eef3ff;--ui-cp-ok-soft: #f2fbf6;--ui-cp-ok-tag: rgba(31, 138, 76, 0.1);--ui-cp-track: #d4d4d4;--ui-cp-strike: #c4c4c4;--ui-cp-placeholder: #a3a3a3;--ui-cp-on-ink: #fff;--ui-cp-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 400px;background: var(--ui-cp-tray);padding: 6px;border-radius: 22px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-cp-ink);-webkit-font-smoothing: antialiased}.ui-cp *, .ui-cp *::before, .ui-cp *::after{box-sizing: border-box}.ui-cp button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-cp button:focus-visible, .ui-cp input:focus-visible{outline: 2px solid var(--ui-cp-accent);outline-offset: 2px}.ui-cp__head{display: flex;align-items: center;justify-content: space-between;min-height: 46px;padding: 6px 10px 6px 18px}.ui-cp__title{margin: 0;font-size: 15px;font-weight: 500;line-height: 22px}.ui-cp__icon-btn{display: grid;place-items: center;width: 28px;height: 28px;padding: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-cp-muted) !important;transition: background-color 140ms ease, color 140ms ease}.ui-cp__icon-btn:hover{background: var(--ui-cp-hover);color: var(--ui-cp-ink) !important}.ui-cp__card{overflow: hidden;background: var(--ui-cp-card);border: 1px solid var(--ui-cp-border);border-radius: 16px;box-shadow: var(--ui-cp-shadow)}.ui-cp__bar{display: flex;align-items: center;justify-content: space-between;padding: 12px 12px 12px 14px;border-bottom: 1px solid var(--ui-cp-line)}.ui-cp__tabs{display: flex;gap: 6px}.ui-cp__tab{position: relative;height: 30px;padding: 0 11px;border: 0;border-radius: 9px;background: var(--ui-cp-tab);font-size: 13px !important;color: var(--ui-cp-muted) !important;transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-cp__tab:hover{color: var(--ui-cp-ink) !important}.ui-cp__tab[aria-selected="true"]{background: var(--ui-cp-tab-on);box-shadow: 0 0 0 1px var(--ui-cp-border), 0 1px 2px rgba(0, 0, 0, 0.04);color: var(--ui-cp-ink) !important;font-weight: 500}.ui-cp__badge{position: absolute;top: -5px;right: -5px;display: grid;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 999px;background: var(--ui-cp-ink);box-shadow: 0 0 0 2px var(--ui-cp-card);font-size: 10px;font-weight: 600;line-height: 1;color: var(--ui-cp-on-ink)}.ui-cp__sort{position: relative}.ui-cp__menu{position: absolute;top: calc(100% + 6px);right: 0;z-index: 5;display: grid;gap: 2px;min-width: 160px;padding: 4px;border-radius: 12px;background: var(--ui-cp-menu);box-shadow: 0 0 0 1px var(--ui-cp-border), 0 10px 28px -8px rgba(0, 0, 0, 0.18);animation: ui-cp-drop 180ms var(--ui-cp-ease)}.ui-cp__menu-item{display: flex;align-items: center;justify-content: space-between;height: 30px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left}.ui-cp__menu-item:hover{background: var(--ui-cp-menu-hover)}.ui-cp__menu-item[aria-checked="true"]{color: var(--ui-cp-accent-text) !important;font-weight: 500}.ui-cp__list{max-height: var(--ui-cp-max-height, 360px);margin: 0;padding: 0;overflow-y: auto;list-style: none;scrollbar-width: thin}.ui-cp__item{padding: 14px 16px 16px;border-top: 1px solid var(--ui-cp-line);animation: ui-cp-in 360ms var(--ui-cp-ease) both;transition: opacity 220ms ease}.ui-cp__item:first-child{border-top: 0}.ui-cp__item[data-resolved]{opacity: 0.45}.ui-cp__meta{display: flex;align-items: center;gap: 8px}.ui-cp__avatar{flex: none;width: 22px;height: 22px;border-radius: 50%;object-fit: cover;box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06)}.ui-cp__avatar--initials{display: grid;place-items: center;background: var(--ui-cp-initials);font-size: 9px;font-weight: 600;color: var(--ui-cp-accent-text)}.ui-cp__name{font-size: 14px;font-weight: 500;line-height: 20px}.ui-cp__time{margin-left: auto;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-cp-muted)}.ui-cp__resolve{display: grid;place-items: center;width: 24px;height: 24px;margin-right: -4px;padding: 0;border: 0;border-radius: 7px;background: transparent;color: var(--ui-cp-muted) !important;opacity: 0;transition: opacity 140ms ease, background-color 140ms ease, color 140ms ease}.ui-cp__item:hover .ui-cp__resolve, .ui-cp__resolve:focus-visible, .ui-cp__resolve[aria-pressed="true"]{opacity: 1}.ui-cp__resolve:hover{background: var(--ui-cp-ok-soft);color: var(--ui-cp-ok) !important}.ui-cp__resolve[aria-pressed="true"]{color: var(--ui-cp-ok) !important}.ui-cp__text{margin: 8px 0 0;font-size: 14px;line-height: 21px;color: var(--ui-cp-text)}.ui-cp__item[data-resolved] .ui-cp__text{text-decoration: line-through;text-decoration-color: var(--ui-cp-strike)}.ui-cp__command{color: var(--ui-cp-muted)}.ui-cp__actions{display: flex;align-items: center;gap: 10px;margin-top: 12px}.ui-cp__btn{display: inline-flex;align-items: center;gap: 7px;height: 30px;padding: 0 12px;border: 0;border-radius: 9px;background: var(--ui-cp-btn);font-size: 13px !important;font-weight: 500;transition: background-color 160ms ease}.ui-cp__btn:hover:not(:disabled){background: var(--ui-cp-btn-hover)}.ui-cp__btn:disabled{color: var(--ui-cp-muted) !important;cursor: progress}.ui-cp__spinner{width: 12px;height: 12px;border: 1.5px solid var(--ui-cp-track);border-top-color: var(--ui-cp-ink);border-radius: 50%;animation: ui-cp-spin 700ms linear infinite}.ui-cp__done{display: inline-flex;align-items: center;gap: 5px;height: 26px;padding: 0 10px 0 8px;border-radius: 8px;background: var(--ui-cp-ok-tag);font-size: 13px;font-weight: 500;color: var(--ui-cp-ok);animation: ui-cp-in 300ms var(--ui-cp-ease)}.ui-cp__link{padding: 0;border: 0;background: none;font-size: 13px !important;color: var(--ui-cp-muted) !important;text-decoration: underline;text-underline-offset: 3px}.ui-cp__link:hover{color: var(--ui-cp-ink) !important}.ui-cp__empty{padding: 28px 16px;font-size: 13px;text-align: center;color: var(--ui-cp-muted)}.ui-cp__composer{display: flex;align-items: center;gap: 10px;padding: 9px 9px 9px 16px}.ui-cp__input{flex: 1;min-width: 0;height: 32px;border: 0;outline: none;background: transparent;font: inherit;font-size: 14px;color: var(--ui-cp-ink)}.ui-cp__input::placeholder{color: var(--ui-cp-placeholder)}.ui-cp__input:focus-visible{outline: none}.ui-cp__send{display: grid;place-items: center;flex: none;width: 30px;height: 30px;padding: 0;border: 0;border-radius: 50%;background: linear-gradient(#323137, #201e25);box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1);color: #fff !important;transition: opacity 160ms ease, transform 160ms ease}.ui-cp__send:disabled{opacity: 0.3;cursor: default}.ui-cp__send:not(:disabled):active{transform: scale(0.94)}@keyframes ui-cp-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-cp-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-cp-spin{to{transform: rotate(360deg)}}@media (prefers-reduced-motion: reduce){.ui-cp__item, .ui-cp__menu, .ui-cp__done{animation: none}}.ui-cp__morph{overflow: hidden}.ui-cp__morph[data-smooth]{transition: height 380ms cubic-bezier(0.22, 1, 0.36, 1)}@media (prefers-reduced-motion: reduce){.ui-cp__morph[data-smooth]{transition: none}}.ui-cp input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-cp textarea:focus-visible, .ui-cp [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-cp{--ui-cp-tray: #161618;--ui-cp-card: #232326;--ui-cp-line: rgba(255, 255, 255, 0.08);--ui-cp-ink: #ededed;--ui-cp-text: #c4c4c4;--ui-cp-muted: #8f8f8f;--ui-cp-ok: #3dbb6f;--ui-cp-accent-text: #6b95ff;--ui-cp-border: rgba(255, 255, 255, 0.08);--ui-cp-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);--ui-cp-hover: rgba(255, 255, 255, 0.06);--ui-cp-tab: #2a2a2d;--ui-cp-tab-on: #38383c;--ui-cp-menu: #2a2a2d;--ui-cp-menu-hover: #313135;--ui-cp-btn: #2a2a2d;--ui-cp-btn-hover: #313135;--ui-cp-initials: rgba(47, 107, 255, 0.16);--ui-cp-ok-soft: rgba(61, 187, 111, 0.14);--ui-cp-ok-tag: rgba(61, 187, 111, 0.16);--ui-cp-track: rgba(255, 255, 255, 0.14);--ui-cp-strike: #6b6b70;--ui-cp-placeholder: #6b6b70;--ui-cp-on-ink: #121213}:where(.dark, [data-theme="dark"]) .ui-cp__menu{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 10px 28px -8px rgba(0, 0, 0, 0.5)}:where(.dark, [data-theme="dark"]) .ui-cp__avatar{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-cp__send{background: linear-gradient(#f4f4f5, #e4e4e7);box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;color: #121213 !important}`;
const f = e => Date.now() - e * 60000;
const comments = [{
  id: `1`,
  author: {
    name: `Mara Lindqvist`,
    avatar: `/avatars/mara.jpg`
  },
  createdAt: f(2),
  text: `/edit Rename every “customers” to “members” on the pricing page.`
}, {
  id: `2`,
  author: {
    name: `Jonas Weber`,
    avatar: `/avatars/jonas.jpg`
  },
  createdAt: f(5),
  text: `Should we mention the launch discount in the hero too?`
}, {
  id: `3`,
  author: {
    name: `Lena Hart`,
    avatar: `/avatars/lena.jpg`
  },
  createdAt: f(11),
  text: `The new illustrations look great on mobile.`
}, {
  id: `4`,
  author: {
    name: `Theo Brandt`,
    avatar: `/avatars/theo.jpg`
  },
  createdAt: f(18),
  text: `/edit Shorten every FAQ answer to two sentences.`
}, {
  id: `5`,
  author: {
    name: `Sofia Marin`,
    avatar: `/avatars/sofia.jpg`
  },
  createdAt: f(26),
  text: `Can we ship this before Friday?`
}];
function MComponent() {
  return <div className={`comments-demo`}><S1Component comments={comments} currentUser={{
      name: `Noah Keller`,
      avatar: `/avatars/noah.jpg`
    }} onClose={() => {}} /></div>;
}
export { MComponent as default };
