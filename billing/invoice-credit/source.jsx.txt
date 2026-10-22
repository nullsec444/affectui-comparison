// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = [{
  id: `plan`,
  name: `Growth plan`,
  qty: 1,
  rate: 1250,
  tax: 0.2
}, {
  id: `seats`,
  name: `Extra seats`,
  qty: 12,
  rate: 40,
  tax: 0.2
}, {
  id: `api`,
  name: `API calls (per 1k)`,
  qty: 18420,
  rate: 0.42,
  tax: 0.2,
  group: `Metered usage`
}];
function A1Component({
  seller = {
    name: `Lumen Labs, Inc.`,
    lines: [`48 Harbour Street`, `Bristol`, `BS1 4RN`, `United Kingdom`]
  },
  buyer = {
    name: `Northwind Logistics GmbH`,
    lines: [`Speicherstraße 12`, `Hamburg`, `20457`, `Germany`]
  },
  invoiceNo = `INV-2041`,
  creditNo = `CN-0117`,
  invoiceDate = `1 Oct 2026`,
  dueDate = `31 Oct 2026`,
  period = `1 Sep – 30 Sep 2026`,
  lines = i,
  currency = `$`,
  onIssue,
  className
}) {
  let [C, setC] = n.useState(`invoice`);
  let [T, setT] = n.useState(() => Object.fromEntries(lines.map(e => [e.id, true])));
  let [D, setD] = n.useState(() => Object.fromEntries(lines.map(e => [e.id, o(e.qty * e.rate)])));
  let [k, setK] = n.useState(false);
  let j = (e, t = false) => `${t && e > 0 ? `-` : ``}${currency}${Math.abs(e).toLocaleString(`en-US`, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
  let M = lines.reduce((acc, line) => acc + o(line.qty * line.rate), 0);
  let N = lines.reduce((acc, line) => acc + o(line.qty * line.rate) * line.tax, 0);
  let P = M + N;
  let F = lines.reduce((acc, line) => acc + (T[line.id] ? D[line.id] : 0), 0);
  let I = lines.reduce((acc, line) => acc + (T[line.id] ? D[line.id] * line.tax : 0), 0);
  let L = F + I;
  let onClick = () => {
    setK(true);
    onIssue?.(Object.fromEntries(lines.filter(e => T[e.id]).map(e => [e.id, D[e.id]])), o(L));
  };
  let z = [...new Set(lines.map(e => e.group ?? ``))];
  return <section className={[`ui-iv`, className].filter(Boolean).join(` `)} data-view={C}><style href={`ui-invoice-credit`} precedence={`default`}>{m}</style><div className={`ui-iv__bar`}><div className={`ui-iv__seg`} role={`tablist`} aria-label={`Document`}><span className={`ui-iv__seg-thumb`} aria-hidden={`true`} /><button type={`button`} role={`tab`} aria-selected={C === `invoice`} onClick={() => setC(`invoice`)}>{`Invoice`}</button><button type={`button`} role={`tab`} aria-selected={C === `credit`} onClick={() => setC(`credit`)}>{`Credit note`}</button></div><div className={`ui-iv__actions`}><button type={`button`} className={`ui-iv__btn`}><S1Component d={`M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14`} />{`PDF`}</button>{C === `invoice` && <button type={`button`} className={`ui-iv__btn`} onClick={() => setC(`credit`)}><S1Component d={`M9 14 4.5 9.5 9 5M4.5 9.5h10a5 5 0 0 1 0 10H12`} />{`Credit invoice`}</button>}</div></div><div className={`ui-iv__stack`}><article className={`ui-iv__sheet`} data-doc={`invoice`} aria-hidden={C !== `invoice`} inert={C !== `invoice` || undefined}><header className={`ui-iv__head`}><div><p className={`ui-iv__big`}>{j(P)}</p><p className={`ui-iv__due`}>{`Due `}{dueDate}<a href={`#pay`} onClick={e => e.preventDefault()}>{`Pay online`}</a></p></div><C1Component name={seller.name} /></header><div className={`ui-iv__parties`}><L1Component title={`From`} party={seller} /><L1Component title={`To`} party={buyer} /></div><UComponent rows={[[`Invoice no`, <span className={`ui-iv__ref`}>{invoiceNo}</span>], [`Invoice date`, invoiceDate], [`Due date`, dueDate], [`Billing period`, period]]} /><table className={`ui-iv__table`}><thead><tr><th>{`Name`}</th><th>{`Qty`}</th><th className={`ui-iv__num`}>{`Rate`}</th><th className={`ui-iv__num`}>{`Tax`}</th><th className={`ui-iv__num`}>{`Price`}</th></tr></thead><tbody>{z.map(title => <D1Component key={title || `base`} title={title}>{lines.filter(t => (t.group ?? ``) === title).map(t => <tr key={t.id} data-indent={title ? `` : undefined}><td>{t.name}</td><td>{t.qty.toLocaleString(`en-US`)}</td><td className={`ui-iv__num`}>{j(t.rate)}</td><td className={`ui-iv__num`}>{Math.round(t.tax * 100)}{`%`}</td><td className={`ui-iv__num`}>{j(o(t.qty * t.rate))}</td></tr>)}</D1Component>)}</tbody></table><F1Component rows={[[`Subtotal`, j(M)], [`Tax`, j(N)]]} total={[`Total`, j(P)]} /></article><article className={`ui-iv__sheet`} data-doc={`credit`} aria-hidden={C !== `credit`} inert={C !== `credit` || undefined}><header className={`ui-iv__head`}><div><p className={`ui-iv__big`}>{`Credit note`}</p><p className={`ui-iv__due`}>{j(L)}{` credited on `}{invoiceDate}{k && <span className={`ui-iv__badge`}>{`Issued`}</span>}</p></div><C1Component name={seller.name} /></header><UComponent rows={[[`Credit note no`, <span className={`ui-iv__ref`}>{creditNo}</span>], [`Related invoice`, <button type={`button`} className={`ui-iv__ref`} onClick={() => setC(`invoice`)}>{invoiceNo}</button>], [`Billing period`, period], [`Date of issue`, invoiceDate]]} /><div className={`ui-iv__tray`}><p className={`ui-iv__tray-title`}>{`Lines to credit`}</p><div className={`ui-iv__card`}><div className={`ui-iv__crow ui-iv__crow--head`}><span /><span>{`Name`}</span><span className={`ui-iv__num`}>{`Total`}</span><span className={`ui-iv__num`}>{`Credit amount`}</span></div>{lines.map(e => {
              let max = o(e.qty * e.rate);
              let n = T[e.id];
              return <div key={e.id} className={`ui-iv__crow`} data-off={n ? undefined : ``}><button type={`button`} role={`checkbox`} aria-checked={n} aria-label={`Credit ${e.name}`} className={`ui-iv__check`} disabled={k} onClick={() => setT(t => ({
                  ...t,
                  [e.id]: !t[e.id]
                }))}><svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path d={`m6 12.5 4 4 8-9`} /></svg></button><span className={`ui-iv__cname`}>{e.name}</span><span className={`ui-iv__num`}>{j(max)}</span><span className={`ui-iv__num`}><P1Component value={D[e.id]} max={max} currency={currency} disabled={!n || k} label={`Credit amount for ${e.name}`} onChange={t => setD(n => ({
                    ...n,
                    [e.id]: t
                  }))} /></span></div>;
            })}</div></div><F1Component rows={[[`Subtotal`, j(F)], [`Tax`, j(I)]]} total={[`Adjustment total`, j(L, true)]} note={[`Applied to invoice`, `${j(L, true)} USD`]} /><div className={`ui-iv__issue`}>{k ? <button type={`button`} className={`ui-iv__btn`} onClick={() => setK(false)}>{`Edit credit note`}</button> : <button type={`button`} className={`ui-iv__primary`} disabled={L <= 0} onClick={onClick}>{`Issue credit note`}</button>}</div></article></div></section>;
}
var o = e => Math.round(e * 100) / 100;
var S1Component = ({
  d
}) => <svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path d={d} /></svg>;
var C1Component = ({
  name
}) => <span className={`ui-iv__brand`}><span className={`ui-iv__logo`} aria-hidden={`true`} />{name}</span>;
var L1Component = ({
  title,
  party
}) => <div className={`ui-iv__party`}><p className={`ui-iv__label`}>{title}</p><p>{party.name}</p>{party.lines.map(e => <p key={e}>{e}</p>)}</div>;
var UComponent = ({
  rows
}) => <div className={`ui-iv__terms`}><p className={`ui-iv__label`}>{`Terms`}</p><dl>{rows.map(([e, t]) => <div key={e}><dt>{e}</dt><dd>{t}</dd></div>)}</dl></div>;
var D1Component = ({
  title,
  children
}) => <>{title && <tr className={`ui-iv__group`}><td colSpan={5}>{title}</td></tr>}{children}</>;
var F1Component = ({
  rows,
  total,
  note
}) => <div className={`ui-iv__totals`}>{rows.map(([e, t]) => <div key={e}><span>{e}</span><span>{t}</span></div>)}<div className={`ui-iv__total`}><span>{total[0]}</span><b>{total[1]}</b></div>{note && <div className={`ui-iv__note`}><span>{note[0]}</span><span>{note[1]}</span></div>}</div>;
function P1Component({
  value,
  max,
  currency,
  disabled,
  label: label_1,
  onChange
}) {
  let [l, setL] = n.useState(null);
  return <label className={`ui-iv__amount`} data-disabled={disabled ? `` : undefined}><span>{currency}</span><input inputMode={`decimal`} aria-label={label_1} disabled={disabled} value={l ?? value.toLocaleString(`en-US`, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} onFocus={() => setL(String(value))} onChange={e => setL(e.target.value.replace(/[^\d.]/g, ``))} onBlur={() => {
      onChange(Math.max(0, Math.min(max, o(parseFloat(l ?? ``) || 0))));
      setL(null);
    }} onKeyDown={e => e.key === `Enter` && e.target.blur()} /></label>;
}
var m = `.ui-iv{--ui-iv-tray: #f0f0f0;--ui-iv-paper: #ffffff;--ui-iv-card-line: #e5e5e5;--ui-iv-line: #ececec;--ui-iv-inset: #f6f6f6;--ui-iv-ink: #171717;--ui-iv-text: #404040;--ui-iv-muted: #8f8f8f;--ui-iv-accent: #2f6bff;--ui-iv-check: #2f6bff;--ui-iv-ok: #2f7d32;--ui-iv-ok-bg: #e8f5e6;--ui-iv-hover: #f5f5f5;--ui-iv-btn-top: #323137;--ui-iv-btn-bottom: #201e25;--ui-iv-btn-ring: #0d0d0d;--ui-iv-btn-text: #ffffff;--ui-iv-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-iv-ease: cubic-bezier(0.65, 0, 0.25, 1);container-type: inline-size;width: 100%;max-width: 760px;padding: 6px;border-radius: 24px;background: var(--ui-iv-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-iv-ink);-webkit-font-smoothing: antialiased}.ui-iv *, .ui-iv *::before, .ui-iv *::after{box-sizing: border-box}.ui-iv button, .ui-iv input{font: inherit;color: inherit;margin: 0}.ui-iv button{cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-iv :focus-visible{outline: 2px solid var(--ui-iv-accent);outline-offset: 2px}.ui-iv svg{width: 15px;height: 15px;flex: none;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-iv p{margin: 0}.ui-iv__bar{display: flex;align-items: center;justify-content: space-between;gap: 10px;padding: 6px 4px 12px 6px}.ui-iv__seg{position: relative;display: grid;grid-template-columns: 1fr 1fr;padding: 3px;border-radius: 10px;background: rgba(0, 0, 0, 0.05)}.ui-iv__seg-thumb{position: absolute;top: 3px;left: 3px;width: calc(50% - 3px);height: calc(100% - 6px);border-radius: 7px;background: var(--ui-iv-paper);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);transition: transform 420ms var(--ui-iv-ease)}.ui-iv[data-view="credit"] .ui-iv__seg-thumb{transform: translateX(100%)}.ui-iv__seg button{position: relative;height: 30px;padding: 0 16px;white-space: nowrap;border: 0;background: none;font-size: 13px;font-weight: 500;color: var(--ui-iv-muted);transition: color 200ms ease}.ui-iv__seg button[aria-selected="true"]{color: var(--ui-iv-ink)}.ui-iv__actions{display: flex;gap: 6px}.ui-iv__btn{display: inline-flex;align-items: center;gap: 7px;height: 34px;padding: 0 12px;border: 0;border-radius: 10px;background: var(--ui-iv-paper);box-shadow: inset 0 0 0 1px var(--ui-iv-card-line), 0 1px 1px rgba(0, 0, 0, 0.03);font-size: 13px;font-weight: 500;white-space: nowrap;animation: ui-iv-fade 240ms ease both;transition: background-color 160ms ease, transform 160ms ease}.ui-iv__btn:hover{background: var(--ui-iv-hover)}.ui-iv__btn:active{transform: scale(0.98)}.ui-iv__btn svg{color: var(--ui-iv-text)}.ui-iv__stack{position: relative;display: grid;padding-top: 14px}.ui-iv__sheet{grid-area: 1 / 1;min-width: 0;padding: 44px 48px 36px;border: 1px solid var(--ui-iv-card-line);border-radius: 20px;background: var(--ui-iv-paper);box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);transition: transform 620ms var(--ui-iv-ease), opacity 420ms ease, box-shadow 420ms ease}.ui-iv__sheet[aria-hidden="true"]{z-index: 0;transform: translateY(-14px) scale(0.96);transform-origin: top center;pointer-events: none}.ui-iv__sheet[aria-hidden="true"] > *{opacity: 0;transition: opacity 200ms ease}.ui-iv__sheet:not([aria-hidden="true"]){z-index: 1;box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.04)}.ui-iv__sheet:not([aria-hidden="true"]) > *{opacity: 1;transition: opacity 360ms ease 200ms}.ui-iv__head{display: flex;align-items: flex-start;justify-content: space-between;gap: 16px;margin-bottom: 40px}.ui-iv__big{font-size: 40px;font-weight: 500;letter-spacing: -0.035em;line-height: 1.1;font-variant-numeric: tabular-nums}.ui-iv__due{display: flex;align-items: center;gap: 28px;margin-top: 10px !important;font-size: 14px;color: var(--ui-iv-text)}.ui-iv__due a{color: var(--ui-iv-accent);text-decoration: none}.ui-iv__due a:hover{text-decoration: underline}.ui-iv__badge{margin-left: -16px;padding: 2px 8px;border-radius: 8px;background: var(--ui-iv-ok-bg);font-size: 12px;font-weight: 500;color: var(--ui-iv-ok)}.ui-iv__brand{display: inline-flex;align-items: center;gap: 9px;padding-top: 8px;font-size: 15px;color: var(--ui-iv-text);white-space: nowrap}.ui-iv__logo{width: 24px;height: 24px;border-radius: 50%;background: conic-gradient(from 210deg, #2f6bff, #8fb0ff, #2f6bff);-webkit-mask: radial-gradient(circle, transparent 4px, #000 4.5px);mask: radial-gradient(circle, transparent 4px, #000 4.5px)}.ui-iv__label{margin-bottom: 8px !important;font-size: 14px;font-weight: 500;color: var(--ui-iv-ink)}.ui-iv__parties{display: grid;grid-template-columns: 1fr 1fr;gap: 24px;margin-bottom: 36px}.ui-iv__party p:not(.ui-iv__label){font-size: 14px;line-height: 1.6;color: var(--ui-iv-text)}.ui-iv__terms{margin-bottom: 36px}.ui-iv__terms dl{display: grid;gap: 7px;margin: 0}.ui-iv__terms dl > div{display: grid;grid-template-columns: 140px 1fr;font-size: 14px}.ui-iv__terms dt{color: var(--ui-iv-muted)}.ui-iv__terms dd{margin: 0;color: var(--ui-iv-text)}.ui-iv__ref{padding: 0;border: 0;background: none;color: var(--ui-iv-accent) !important;font-variant-numeric: tabular-nums}button.ui-iv__ref:hover{text-decoration: underline}.ui-iv__table{width: 100%;border-collapse: collapse;font-size: 14px}.ui-iv__table th{padding: 0 0 12px;border-bottom: 1px solid var(--ui-iv-line);text-align: left;font-weight: 500;color: var(--ui-iv-ink)}.ui-iv__table td{padding: 14px 0;border-bottom: 1px solid var(--ui-iv-line);color: var(--ui-iv-text);font-variant-numeric: tabular-nums}.ui-iv__table tr[data-indent] td:first-child{padding-left: 24px}.ui-iv__group td{color: var(--ui-iv-ink)}.ui-iv__num{text-align: right !important}.ui-iv__totals{display: grid;gap: 12px;width: min(100%, 300px);margin: 22px 0 0 auto;font-size: 14px}.ui-iv__totals > div{display: flex;justify-content: space-between;gap: 16px;color: var(--ui-iv-muted);font-variant-numeric: tabular-nums}.ui-iv__totals > div span:last-child{color: var(--ui-iv-text)}.ui-iv__total{margin-top: 4px;padding-top: 14px;border-top: 1px solid var(--ui-iv-text)}.ui-iv__total span{font-weight: 500;color: var(--ui-iv-text) !important}.ui-iv__total b{font-size: 16px;font-weight: 600;color: var(--ui-iv-ink)}.ui-iv__note{margin-top: -4px}.ui-iv__tray{padding: 0 6px 6px;border-radius: 18px;background: var(--ui-iv-inset);box-shadow: inset 0 0 0 1px var(--ui-iv-line)}.ui-iv__tray-title{padding: 14px 12px 12px;font-size: 15px;font-weight: 500;color: var(--ui-iv-text)}.ui-iv__card{padding: 4px 14px;border: 1px solid var(--ui-iv-card-line);border-radius: 14px;background: var(--ui-iv-paper);box-shadow: var(--ui-iv-shadow)}.ui-iv__crow{display: grid;grid-template-columns: 22px minmax(0, 1fr) auto minmax(150px, 0.8fr);align-items: center;gap: 14px;min-height: 60px;border-bottom: 1px solid var(--ui-iv-line);font-size: 14.5px;transition: opacity 220ms ease}.ui-iv__crow:last-child{border-bottom: 0}.ui-iv__crow--head{min-height: 46px;font-size: 13.5px;color: var(--ui-iv-muted)}.ui-iv__crow[data-off] .ui-iv__cname, .ui-iv__crow[data-off] > .ui-iv__num:nth-child(3){opacity: 0.45}.ui-iv__crow > .ui-iv__num{font-variant-numeric: tabular-nums;color: var(--ui-iv-ink)}.ui-iv__check{display: grid;place-items: center;width: 20px;height: 20px;padding: 0;border: 0;border-radius: 6px;background: var(--ui-iv-inset);box-shadow: inset 0 0 0 1px var(--ui-iv-card-line);color: #fff !important;transition: background-color 180ms ease, box-shadow 180ms ease}.ui-iv__check svg{width: 13px;height: 13px;stroke-width: 2.4;stroke-dasharray: 20;stroke-dashoffset: 20;transition: stroke-dashoffset 260ms ease}.ui-iv__check[aria-checked="true"]{background: var(--ui-iv-check);box-shadow: inset 0 0 0 1px var(--ui-iv-check)}.ui-iv__check[aria-checked="true"] svg{stroke-dashoffset: 0}.ui-iv__check:disabled{cursor: default}.ui-iv__amount{display: flex;align-items: center;gap: 8px;width: 100%;max-width: 220px;margin-left: auto;height: 44px;padding: 0 14px;border-radius: 12px;background: var(--ui-iv-paper);box-shadow: inset 0 0 0 1px var(--ui-iv-card-line);transition: box-shadow 160ms ease, opacity 200ms ease}.ui-iv__amount:focus-within{box-shadow: inset 0 0 0 1px var(--ui-iv-accent)}.ui-iv__amount span{color: var(--ui-iv-muted)}.ui-iv__amount input{flex: 1;min-width: 0;border: 0;background: none;outline: none;text-align: right;font-size: 14.5px;font-variant-numeric: tabular-nums;color: var(--ui-iv-ink)}.ui-iv__amount[data-disabled]{opacity: 0.5}.ui-iv__issue{display: flex;justify-content: flex-end;margin-top: 24px}.ui-iv__primary{height: 38px;padding: 0 16px;border: 0;border-radius: 10px;background: linear-gradient(180deg, var(--ui-iv-btn-top), var(--ui-iv-btn-bottom));box-shadow: 0 0 0 1px var(--ui-iv-btn-ring), inset 0 1px 0 rgba(255, 255, 255, 0.12);font-size: 14px;font-weight: 500;color: var(--ui-iv-btn-text) !important;transition: filter 160ms ease, opacity 200ms ease, transform 160ms ease}.ui-iv__primary:hover:not(:disabled){filter: brightness(1.12)}.ui-iv__primary:active:not(:disabled){transform: scale(0.98)}.ui-iv__primary:disabled{opacity: 0.4;cursor: default}@keyframes ui-iv-fade{from{opacity: 0}}@container (max-width: 560px){.ui-iv__sheet{padding: 28px 20px 24px}.ui-iv__big{font-size: 30px}.ui-iv__head{flex-direction: column-reverse;margin-bottom: 28px}.ui-iv__parties{grid-template-columns: 1fr}.ui-iv__terms dl > div{grid-template-columns: 120px 1fr}.ui-iv__table th:nth-child(4), .ui-iv__table td:nth-child(4), .ui-iv__table th:nth-child(3), .ui-iv__table td:nth-child(3){display: none}.ui-iv__table th + th, .ui-iv__table td + td{padding-left: 12px}.ui-iv__crow{grid-template-columns: 22px minmax(0, 1fr) minmax(110px, 0.9fr)}.ui-iv__crow > :nth-child(3){display: none}.ui-iv__actions .ui-iv__btn:first-child{display: none}.ui-iv__seg button{padding: 0 11px}.ui-iv__btn{padding: 0 10px}}@container (max-width: 400px){.ui-iv__sheet{padding: 24px 16px 20px}.ui-iv__card{padding: 4px 10px}.ui-iv__crow{gap: 10px}.ui-iv__amount{gap: 4px;padding: 0 10px}.ui-iv__terms dl > div{grid-template-columns: 112px 1fr}}@media (prefers-reduced-motion: reduce){.ui-iv__sheet, .ui-iv__sheet > *, .ui-iv__seg-thumb{transition: none !important}}.ui-iv input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-iv textarea:focus-visible, .ui-iv [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-iv{--ui-iv-tray: #161618;--ui-iv-paper: #232326;--ui-iv-card-line: rgba(255, 255, 255, 0.08);--ui-iv-line: rgba(255, 255, 255, 0.07);--ui-iv-inset: #1c1c1f;--ui-iv-ink: #ededed;--ui-iv-text: #c4c4c4;--ui-iv-muted: #8f8f8f;--ui-iv-accent: #6b95ff;--ui-iv-check: #4d82ff;--ui-iv-ok: #6fd27a;--ui-iv-ok-bg: rgba(111, 210, 122, 0.14);--ui-iv-hover: rgba(255, 255, 255, 0.05);--ui-iv-btn-top: #f4f4f5;--ui-iv-btn-bottom: #e4e4e7;--ui-iv-btn-ring: rgba(0, 0, 0, 0.6);--ui-iv-btn-text: #121213;--ui-iv-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-iv__seg{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-iv__seg-thumb{background: #313135}`;
const width = 760;
function GComponent() {
  let eRef = n.useRef(null);
  let [t, setT] = n.useState(null);
  n.useLayoutEffect(() => {
    let eRef_current = eRef.current;
    let n = eRef_current?.closest(`.card__preview`);
    let r = n ?? eRef_current?.closest(`.stage`);
    if (!eRef_current || !r) {
      return;
    }
    let a = () => {
      let r_clientWidth = r.clientWidth;
      if (n) {
        return setT({
          scale: (r_clientWidth - 48) / width,
          card: true
        });
      }
      if (r_clientWidth < 760) {
        return setT(null);
      }
      setT({
        scale: Math.min(0.82, (r_clientWidth - 140) / width),
        card: false
      });
    };
    a();
    let o = new ResizeObserver(a);
    o.observe(r);
    return () => o.disconnect();
  }, []);
  return <div ref={eRef} className={`invoice-demo`} data-fit={t ? t.card ? `card` : `stage` : undefined}><div className={`invoice-demo__frame`} style={t ? t.card ? {
      width,
      transform: `scale(${t.scale})`
    } : {
      width,
      zoom: t.scale
    } : undefined}><A1Component /></div></div>;
}
export { GComponent as default };
