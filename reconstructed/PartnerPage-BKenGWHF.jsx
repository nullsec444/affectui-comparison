// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./supabase-CqDuy7ko.jsx";
import { o } from "./site-D86YA7B9.jsx";
import { t as t_2 } from "./jsx-runtime-CTsRTJUX.jsx";
import { H, J, M, U, j as C, s as L } from "./index-CxCSU7QX.jsx";
const u = t_1();
const d = t_2();
const f = [{
  days: 7,
  label: `7 days`
}, {
  days: 30,
  label: `30 days`
}, {
  days: null,
  label: `All time`
}];
const p = e => e.toLocaleString(`en-US`, {
  style: `currency`,
  currency: `USD`,
  minimumFractionDigits: e % 1 ? 2 : 0
});
const m = (e, t) => {
  if (t) {
    if (e) {
      return `${(e / t * 100).toFixed(+(e / t < 0.1))}%`;
    }
    return `0%`;
  }
  return `–`;
};
export function PartnerPage({
  code
}) {
  let p_key = u.useMemo(() => new URLSearchParams(window.location.search).get(`key`) ?? ``, []);
  let [i, setI] = u.useState(30);
  let [s, setS] = u.useState(undefined);
  u.useEffect(() => {
    let e = Object.assign(document.createElement(`meta`), {
      name: `robots`,
      content: `noindex, nofollow`
    });
    document.head.append(e);
    document.title = `Partner dashboard · ${o.name}`;
    return () => e.remove();
  }, []);
  u.useEffect(() => {
    let n = true;
    t().then(t => t.rpc(`partner_stats`, {
      p_code: code,
      p_key,
      p_days: i
    })).then(({
      data,
      error
    }) => n && setS(error ? null : data ?? null)).catch(() => n && setS(null));
    return () => {
      n = false;
    };
  }, [code, p_key, i]);
  return <div className={`pp`}><header className={`pp__top`}><M to={`/`} className={`logo`} aria-label={`${o.name} home`}><C /><span className={`logo__name`}>{o.name}</span></M><span className={`pp__badge`}>{`Partner`}</span><div className={`pp__top-end`}><L /></div></header><main className={`pp__main`}>{s === null ? <div className={`pp__empty`}><h1>{`This link isn't valid`}</h1><p>{`Check that you opened the full link you received. If it still doesn't work, get in touch.`}</p><M to={`/contact`} className={`btn btn--secondary`}>{`Contact`}</M></div> : <GComponent stats={s} days={i} setDays={setI} />}</main></div>;
}
function GComponent({
  stats,
  days,
  setDays
}) {
  let i = stats?.period;
  let a = stats ? Math.max(stats.total.commission - stats.total.paid, 0) : 0;
  return <div className={`pp__dash`} data-loading={!stats || undefined}><div className={`pp__head`}><div><h1 className={`pp__title`}>{stats ? `Hi ${stats.name}` : `Partner dashboard`}</h1><p className={`pp__sub`}>{`Your clicks and sales on `}{o.name}{stats ? ` · ${Math.round(stats.rate * 100)}% commission on every sale` : ``}</p></div><div className={`segmented`} role={`tablist`} aria-label={`Period`}>{f.map(e => <button key={e.label} role={`tab`} aria-selected={days === e.days} onClick={() => setDays(e.days)}>{e.label}</button>)}</div></div><section className={`pp__kpis`} aria-label={`Key numbers`}><Component label={`Visits`} value={i ? i.clicks + (i.returns ?? 0) : undefined} note={i ? `${i.clicks} via your link · ${i.returns ?? 0} came back directly` : undefined} /><Component label={`Sales`} value={i?.sales} note={i ? `${m(i.sales, i.visitors || i.clicks)} of ${i.visitors} unique visitors bought` : undefined} /><Component label={`Commission`} value={i ? p(i.commission) : undefined} note={i ? `in ${f.find(e => e.days === days)?.label.toLowerCase()}` : undefined} strong /><Component label={`Open payout`} value={stats ? p(a) : undefined} note={stats ? `${p(stats.total.paid)} paid so far` : undefined} /></section><section className={`pp__card`}><div className={`pp__card-head`}><h2>{`Visits and sales per day`}</h2><span className={`pp__legend`}><i className={`pp__dot pp__dot--clicks`} />{` Visits `}<i className={`pp__dot pp__dot--sales`} />{` Sales`}</span></div><VComponent daily={stats?.daily ?? []} /></section><section className={`pp__card`}><div className={`pp__card-head`}><h2>{`From click to sale`}</h2></div><BComponent steps={[{
        label: `Clicked your link`,
        value: i?.clicks ?? 0
      }, {
        label: `Browsed the library`,
        value: i?.browse ?? 0
      }, {
        label: `Looked at Pro`,
        value: i?.get_pro ?? 0
      }, {
        label: `Started checkout`,
        value: i?.checkouts ?? 0
      }, {
        label: `Bought`,
        value: i?.sales ?? 0
      }]} /></section>{stats && <XComponent code={stats.code} />}<section className={`pp__card`}><div className={`pp__card-head`}><h2>{`Earnings`}</h2></div><dl className={`pp__earn`}><div><dt>{`Sales in total`}</dt><dd>{stats?.total.sales ?? `–`}</dd></div><div><dt>{`Commission in total`}</dt><dd>{stats ? p(stats.total.commission) : `–`}</dd></div><div><dt>{`Paid out`}</dt><dd>{stats ? p(stats.total.paid) : `–`}</dd></div><div><dt>{`Open`}</dt><dd>{stats ? p(a) : `–`}</dd></div></dl>{stats && stats.payouts.length > 0 && <ul className={`pp__payouts`}>{stats.payouts.map(e => <li key={e.paid_at}><span>{new Date(e.paid_at).toLocaleDateString(`en-US`, {
              month: `short`,
              day: `numeric`,
              year: `numeric`
            })}</span><b>{p(e.amount)}</b></li>)}</ul>}<p className={`pp__hint`}>{`Sales count for you when a visitor bought within 30 days of clicking your link. Refunded orders drop out automatically.`}</p></section></div>;
}
function Component({
  label,
  value,
  note,
  strong
}) {
  return <div className={`pp__kpi`} data-strong={strong || undefined}><span className={`pp__kpi-label`}>{label}</span><span className={`pp__kpi-value`}>{value ?? `–`}</span><span className={`pp__kpi-note`}>{note ?? `\xA0`}</span></div>;
}
function VComponent({
  daily
}) {
  let [t, setT] = u.useState(null);
  let r = daily.map(e => ({
    ...e,
    visits: e.clicks + (e.returns ?? 0)
  }));
  let i = Math.max(1, ...r.map(e => e.visits));
  let a = Math.max(r.length - 1, 1);
  let o = r.map((e, t) => ({
    x: t / a * 100,
    y: 100 - e.visits / i * 92 - 4
  }));
  let d_2 = o.map((e, t) => `${t ? `L` : `M`}${e.x},${e.y}`).join(` `);
  let d_1 = o.length ? `${d_2} L100,100 L0,100 Z` : ``;
  let l = t === null ? null : r[t];
  return <div className={`pp__chart`}><div className={`pp__plot`} onPointerMove={e => {
      let t = e.currentTarget.getBoundingClientRect();
      setT(Math.round((e.clientX - t.left) / t.width * a));
    }} onPointerLeave={() => setT(null)}><svg viewBox={`0 0 100 100`} preserveAspectRatio={`none`} aria-hidden={`true`}>{[25, 50, 75].map(e => <line key={e} className={`pp__grid-line`} x1={`0`} x2={`100`} y1={e} y2={e} />)}<path className={`pp__area`} d={d_1} /><path className={`pp__line`} d={d_2} /></svg>{r.map((e, t) => {
        if (e.sales > 0) {
          return <span key={e.day} className={`pp__point pp__point--sale`} style={{
            left: `${o[t].x}%`,
            top: `${o[t].y}%`
          }} />;
        }
        return null;
      })}{l && t !== null && <><span className={`pp__guide`} style={{
          left: `${o[t].x}%`
        }} /><span className={`pp__point`} style={{
          left: `${o[t].x}%`,
          top: `${o[t].y}%`
        }} /><span className={`pp__tip`} style={{
          left: `${Math.min(Math.max(o[t].x, 12), 88)}%`
        }}><b>{y(l.day)}</b>{l.visits}{` visit`}{l.visits === 1 ? `` : `s`}{l.returns ? ` (${l.returns} returning)` : ``}{` · `}{l.sales}{` sale`}{l.sales === 1 ? `` : `s`}</span></>}</div><div className={`pp__axis`}><span>{r[0] ? y(r[0].day) : ``}</span><span>{r.length ? y(r[r.length - 1].day) : ``}</span></div></div>;
}
var y = day => new Date(`${day}T12:00:00`).toLocaleDateString(`en-US`, {
  month: `short`,
  day: `numeric`
});
function BComponent({
  steps
}) {
  let t = Math.max(1, steps[0].value);
  return <ol className={`pp__funnel`}>{steps.map((n, r) => <li key={n.label}><div className={`pp__funnel-row`}><span>{n.label}</span><b>{n.value}</b><em>{r === 0 ? `` : m(n.value, steps[r - 1].value)}</em></div><span className={`pp__bar`} style={{
        "--w": `${n.value / t * 100}%`
      }} /></li>)}</ol>;
}
function XComponent({
  code
}) {
  let value = `${o.url}/?ref=${code}&v=2`;
  return <section className={`pp__card`}><div className={`pp__card-head`}><h2>{`Your link`}</h2></div><SComponent label={`Share this link`} value={value} /></section>;
}
function SComponent({
  label,
  value
}) {
  let [n, setN] = u.useState(false);
  u.useEffect(() => {
    if (!n) {
      return;
    }
    let e = window.setTimeout(() => setN(false), 1500);
    return () => window.clearTimeout(e);
  }, [n]);
  return <div className={`pp__copy`}><span className={`pp__copy-label`}>{label}</span><code>{value}</code><button type={`button`} className={`btn btn--secondary`} onClick={() => void navigator.clipboard?.writeText(value).then(() => setN(true), () => undefined)}><H icon={n ? U : J} size={14} />{n ? `Copied` : `Copy`}</button></div>;
}
