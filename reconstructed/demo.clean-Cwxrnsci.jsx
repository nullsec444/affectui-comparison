// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
function IComponent({
  decisions,
  onDecide,
  className
}) {
  let [c, setC] = n.useState(() => Object.fromEntries(decisions.map(e => [e.id, {
    open: !e.collapsed
  }])));
  let u = (e, t) => setC(n => ({
    ...n,
    [e]: {
      ...n[e],
      ...t
    }
  }));
  let length = decisions.filter(e => !c[e.id]?.answered).length;
  let f = (n, r) => {
    u(n.id, {
      answered: r === `primary` ? n.primary : n.secondary
    });
    onDecide?.(n, r);
    window.setTimeout(() => {
      setC(t => {
        let r = {
          ...t,
          [n.id]: {
            ...t[n.id],
            gone: true
          }
        };
        let i = decisions.find(e => e.id !== n.id && !r[e.id]?.open && !r[e.id]?.answered);
        if (i) {
          r[i.id] = {
            ...r[i.id],
            open: true
          };
        }
        return r;
      });
    }, 1100);
  };
  return <><style href={`ui-decision-inbox-clean`} precedence={`default`}>{s}</style><section className={[`ui-dic`, className].filter(Boolean).join(` `)} data-clear={length === 0 || undefined}><header className={`ui-dic__head`} aria-live={`polite`}>{length > 0 ? <><AComponent /><span>{length}{` `}{length === 1 ? `needs` : `need`}{` your input`}</span></> : <><OComponent /><span>{`All caught up`}</span></>}</header><div className={`ui-dic__card`}>{decisions.map(e => {
          let t = c[e.id] ?? {
            open: true
          };
          return <div key={e.id} className={`ui-dic__row`} data-gone={t.gone || undefined} inert={t.gone}><div className={`ui-dic__row-inner`}><div className={`ui-dic__item`} data-open={t.open || undefined} data-answered={t.answered ? true : undefined}>{t.open ? <p className={`ui-dic__title`}>{e.title}</p> : <button type={`button`} className={`ui-dic__title ui-dic__title--folded`} onClick={() => u(e.id, {
                  open: true
                })}>{e.title}</button>}<div className={`ui-dic__body`} data-open={t.open || undefined}><div className={`ui-dic__body-inner`}>{e.detail && <p className={`ui-dic__detail`}>{e.detail}</p>}<div className={`ui-dic__actions`}>{t.answered ? <span className={`ui-dic__done`} role={`status`}><OComponent />{t.answered}</span> : <><button type={`button`} className={`ui-dic__btn ui-dic__btn--primary`} onClick={() => f(e, `primary`)}>{e.primary}</button><button type={`button`} className={`ui-dic__btn`} onClick={() => f(e, `secondary`)}>{e.secondary}</button></>}</div></div></div></div></div></div>;
        })}<p className={`ui-dic__empty`}>{`Nothing waiting on you – new decisions show up here.`}</p></div></section></>;
}
var AComponent = () => <svg className={`ui-dic__glyph`} viewBox={`0 0 16 16`} width={`16`} height={`16`} aria-hidden={`true`}><path d={`M6.7 2.3a1.5 1.5 0 0 1 2.6 0l5.4 9.4A1.5 1.5 0 0 1 13.4 14H2.6a1.5 1.5 0 0 1-1.3-2.3Z`} fill={`currentColor`} /><path className={`ui-dic__cut`} d={`M8 5.8v3.2`} strokeWidth={`1.4`} strokeLinecap={`round`} fill={`none`} /><circle className={`ui-dic__cut-dot`} cx={`8`} cy={`11.3`} r={`0.8`} /></svg>;
var OComponent = () => <svg className={`ui-dic__glyph`} viewBox={`0 0 16 16`} width={`16`} height={`16`} aria-hidden={`true`}><circle cx={`8`} cy={`8`} r={`6.5`} fill={`currentColor`} /><path className={`ui-dic__cut`} d={`m5.3 8.2 1.8 1.8 3.6-3.8`} fill={`none`} strokeWidth={`1.4`} strokeLinecap={`round`} strokeLinejoin={`round`} /></svg>;
var s = `
/* Colors and motion as variables – override them on .ui-dic */
.ui-dic {
  --ui-dic-card: #ffffff;
  --ui-dic-strong: #000000;
  --ui-dic-ink: rgba(0, 0, 0, 0.88);
  --ui-dic-text: rgba(0, 0, 0, 0.61);
  --ui-dic-muted: rgba(0, 0, 0, 0.45);
  --ui-dic-faint: rgba(0, 0, 0, 0.27);
  --ui-dic-line: rgba(0, 0, 0, 0.06);
  --ui-dic-wash: rgba(0, 0, 0, 0.03);
  --ui-dic-alert: #e8a20c;
  --ui-dic-ok: #1a9a52;
  --ui-dic-ok-bg: rgba(26, 154, 82, 0.08);
  --ui-dic-solid: rgba(0, 0, 0, 0.88);
  --ui-dic-solid-hover: rgba(0, 0, 0, 0.8);
  --ui-dic-on-solid: #fcfcfc;
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-dic-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-dic-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  --ui-dic-focus: rgba(0, 96, 226, 0.35);
  --ui-dic-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  container-type: inline-size;
  width: 100%;
  max-width: 440px;
  overflow: hidden;
  /* One white card – the edge is a shadow, not a border */
  border-radius: 10px;
  background: var(--ui-dic-card);
  box-shadow: var(--ui-dic-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--ui-dic-ink);
  text-align: left;
  -webkit-font-smoothing: antialiased;
}
.ui-dic *, .ui-dic *::before, .ui-dic *::after { box-sizing: border-box; }
:where(.ui-dic) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
:where(.ui-dic) svg { display: block; flex: none; }
.ui-dic button:focus-visible { outline: 2px solid var(--ui-dic-focus); outline-offset: 1px; }

.ui-dic__glyph { width: 16px; height: 16px; }
.ui-dic__cut { stroke: var(--ui-dic-card); }
.ui-dic__cut-dot { fill: var(--ui-dic-card); }

/* The heading row at the top of the card: an amber mark while something waits, a green one when all is done */
.ui-dic__head {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 16px;
  border-bottom: 0.5px solid var(--ui-dic-line);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-dic-ink);
}
.ui-dic__head .ui-dic__glyph { color: var(--ui-dic-alert); animation: ui-dic-pop 360ms var(--ui-dic-ease) both; }
.ui-dic[data-clear] .ui-dic__head .ui-dic__glyph { color: var(--ui-dic-ok); }
.ui-dic__head span { animation: ui-dic-in 320ms var(--ui-dic-ease) both; }

/* Rows fold away with a height transition once answered */
.ui-dic__row {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 460ms var(--ui-dic-ease), opacity 300ms ease;
}
.ui-dic__row[data-gone] { grid-template-rows: 0fr; opacity: 0; }
.ui-dic__row-inner { min-height: 0; overflow: hidden; }
.ui-dic__row + .ui-dic__row .ui-dic__item { border-top: 0.5px solid var(--ui-dic-line); }
.ui-dic__row[data-gone] + .ui-dic__row .ui-dic__item { border-top-color: transparent; }

.ui-dic__item { padding: 14px 16px 16px; }
.ui-dic__item:not([data-open]) { padding: 0; }
.ui-dic__title {
  display: block;
  width: 100%;
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: var(--ui-dic-strong);
}
/* A folded decision: one muted line that opens on click */
:where(.ui-dic) .ui-dic__title--folded {
  padding: 14px 16px;
  font-weight: 400;
  color: var(--ui-dic-muted);
  transition: color 140ms ease, background-color 140ms ease;
}
.ui-dic__title--folded:hover { background: var(--ui-dic-wash); color: var(--ui-dic-ink); }
.ui-dic button.ui-dic__title--folded:focus-visible { outline-offset: -2px; }

.ui-dic__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 420ms var(--ui-dic-ease);
}
.ui-dic__body[data-open] { grid-template-rows: 1fr; }
/* Room around the buttons so the clipping for the fold never cuts their focus ring and shadow */
.ui-dic__body-inner {
  min-height: 0;
  overflow: hidden;
  margin: 0 -4px -4px;
  padding: 0 4px 4px;
}
.ui-dic__detail {
  margin: 2px 0 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-dic-text);
}
.ui-dic__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 28px;
  margin-top: 12px;
}

/* Secondary: white with the card's hairline shadow */
.ui-dic__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  transition: background-color 140ms ease, box-shadow 140ms ease, transform 160ms var(--ui-dic-ease);
}
:where(.ui-dic) .ui-dic__btn { background: var(--ui-dic-card); box-shadow: var(--ui-dic-shadow); color: var(--ui-dic-strong); }
.ui-dic__btn:hover { box-shadow: var(--ui-dic-shadow-hover); }
.ui-dic__btn:active { transform: scale(0.97); }
/* Primary: a dark chip */
:where(.ui-dic) .ui-dic__btn--primary { background: var(--ui-dic-solid); box-shadow: none; color: var(--ui-dic-on-solid); }
.ui-dic__btn--primary:hover { background: var(--ui-dic-solid-hover); box-shadow: none; }

/* The answer: a minimal green fill in the place of the buttons */
.ui-dic__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px 0 8px;
  border-radius: 6px;
  background: var(--ui-dic-ok-bg);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-dic-ok);
  animation: ui-dic-in 360ms var(--ui-dic-ease);
}

.ui-dic__empty {
  display: none;
  margin: 0;
  padding: 14px 16px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-dic-muted);
}
.ui-dic[data-clear] .ui-dic__empty { display: block; animation: ui-dic-in 420ms var(--ui-dic-ease) 300ms both; }

@keyframes ui-dic-in {
  from { opacity: 0; transform: translateY(3px); }
}
@keyframes ui-dic-pop {
  from { opacity: 0; transform: scale(0.6); }
}

/* Narrow cards (phones) */
@container (max-width: 340px) {
  .ui-dic__head { padding: 0 14px; }
  .ui-dic__item { padding: 12px 14px 14px; }
  :where(.ui-dic) .ui-dic__title--folded { padding: 14px 14px; }
  .ui-dic__empty { padding: 14px; }
}
/* Touch screens: bigger tap targets */
@media (pointer: coarse) {
  .ui-dic__btn, .ui-dic__done { height: 36px; padding: 0 14px; }
  .ui-dic__done { padding: 0 14px 0 12px; }
  .ui-dic__actions { min-height: 36px; }
  :where(.ui-dic) .ui-dic__title--folded { padding-top: 14px; padding-bottom: 14px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-dic__row, .ui-dic__body { transition: none; }
  .ui-dic__done, .ui-dic__empty, .ui-dic__head .ui-dic__glyph, .ui-dic__head span { animation: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-dic {
  --ui-dic-card: #1c1c1e;
  --ui-dic-strong: #ffffff;
  --ui-dic-ink: rgba(255, 255, 255, 0.9);
  --ui-dic-text: rgba(255, 255, 255, 0.62);
  --ui-dic-muted: rgba(255, 255, 255, 0.46);
  --ui-dic-faint: rgba(255, 255, 255, 0.3);
  --ui-dic-line: rgba(255, 255, 255, 0.08);
  --ui-dic-wash: rgba(255, 255, 255, 0.04);
  --ui-dic-alert: #f0b232;
  --ui-dic-ok: #3ec27a;
  --ui-dic-ok-bg: rgba(26, 154, 82, 0.14);
  /* The primary inverts: a light chip with dark text */
  --ui-dic-solid: rgba(255, 255, 255, 0.9);
  --ui-dic-solid-hover: rgba(255, 255, 255, 0.82);
  --ui-dic-on-solid: #161618;
  --ui-dic-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-dic-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-dic-focus: rgba(77, 141, 255, 0.5);
}
`;
const decisions = [{
  id: `rollout`,
  title: `Roll out the new onboarding to everyone?`,
  detail: `Test won with +8% activation · 2 weeks of data`,
  primary: `Roll out`,
  secondary: `Keep testing`
}, {
  id: `renewal`,
  title: `Renew Figma for the design team?`,
  detail: `12 seats · $1,800 per year · renews in 5 days`,
  primary: `Renew`,
  secondary: `Change seats`
}];
function LComponent() {
  let [key, setKey] = n.useState(0);
  let [a, setA] = n.useState(decisions.length);
  return <div className={`decision-demo`}><IComponent key={key} decisions={decisions} onDecide={() => {
      if (a > 1) {
        return setA(a - 1);
      }
      window.setTimeout(() => {
        setA(decisions.length);
        setKey(e => e + 1);
      }, 3200);
    }} /></div>;
}
export { LComponent as default };
