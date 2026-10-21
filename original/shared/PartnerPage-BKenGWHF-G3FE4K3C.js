import {
  Fa,
  I,
  Qi,
  Ri,
  i,
  j,
  lc,
  t
} from "./chunk-ODYOY7NB.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/PartnerPage-BKenGWHF.js
init_react_BkAXpnfr();
var u = n();
var d = n2();
var f = [{ days: 7, label: `7 days` }, { days: 30, label: `30 days` }, { days: null, label: `All time` }];
var p = (e) => e.toLocaleString(`en-US`, { style: `currency`, currency: `USD`, minimumFractionDigits: e % 1 ? 2 : 0 });
var m = (e, t2) => t2 ? e ? `${(e / t2 * 100).toFixed(+(e / t2 < 0.1))}%` : `0%` : `\u2013`;
function h({ code: e }) {
  let r = (0, u.useMemo)(() => new URLSearchParams(window.location.search).get(`key`) ?? ``, []), [i2, a] = (0, u.useState)(30), [s, f2] = (0, u.useState)(void 0);
  return (0, u.useEffect)(() => {
    let e2 = Object.assign(document.createElement(`meta`), { name: `robots`, content: `noindex, nofollow` });
    return document.head.append(e2), document.title = `Partner dashboard \xB7 ${t.name}`, () => e2.remove();
  }, []), (0, u.useEffect)(() => {
    let n3 = true;
    return i().then((t2) => t2.rpc(`partner_stats`, { p_code: e, p_key: r, p_days: i2 })).then(({ data: e2, error: t2 }) => n3 && f2(t2 ? null : e2 ?? null)).catch(() => n3 && f2(null)), () => {
      n3 = false;
    };
  }, [e, r, i2]), (0, d.jsxs)(`div`, { className: `pp`, children: [(0, d.jsxs)(`header`, { className: `pp__top`, children: [(0, d.jsxs)(I, { to: `/`, className: `logo`, "aria-label": `${t.name} home`, children: [(0, d.jsx)(Fa, {}), (0, d.jsx)(`span`, { className: `logo__name`, children: t.name })] }), (0, d.jsx)(`span`, { className: `pp__badge`, children: `Partner` }), (0, d.jsx)(`div`, { className: `pp__top-end`, children: (0, d.jsx)(lc, {}) })] }), (0, d.jsx)(`main`, { className: `pp__main`, children: s === null ? (0, d.jsxs)(`div`, { className: `pp__empty`, children: [(0, d.jsx)(`h1`, { children: `This link isn't valid` }), (0, d.jsx)(`p`, { children: `Check that you opened the full link you received. If it still doesn't work, get in touch.` }), (0, d.jsx)(I, { to: `/contact`, className: `btn btn--secondary`, children: `Contact` })] }) : (0, d.jsx)(g, { stats: s, days: i2, setDays: a }) })] });
}
function g({ stats: e, days: t2, setDays: r }) {
  let i2 = e?.period, a = e ? Math.max(e.total.commission - e.total.paid, 0) : 0;
  return (0, d.jsxs)(`div`, { className: `pp__dash`, "data-loading": !e || void 0, children: [(0, d.jsxs)(`div`, { className: `pp__head`, children: [(0, d.jsxs)(`div`, { children: [(0, d.jsx)(`h1`, { className: `pp__title`, children: e ? `Hi ${e.name}` : `Partner dashboard` }), (0, d.jsxs)(`p`, { className: `pp__sub`, children: [`Your clicks and sales on `, t.name, e ? ` \xB7 ${Math.round(e.rate * 100)}% commission on every sale` : ``] })] }), (0, d.jsx)(`div`, { className: `segmented`, role: `tablist`, "aria-label": `Period`, children: f.map((e2) => (0, d.jsx)(`button`, { role: `tab`, "aria-selected": t2 === e2.days, onClick: () => r(e2.days), children: e2.label }, e2.label)) })] }), (0, d.jsxs)(`section`, { className: `pp__kpis`, "aria-label": `Key numbers`, children: [(0, d.jsx)(_, { label: `Visits`, value: i2 ? i2.clicks + (i2.returns ?? 0) : void 0, note: i2 ? `${i2.clicks} via your link \xB7 ${i2.returns ?? 0} came back directly` : void 0 }), (0, d.jsx)(_, { label: `Sales`, value: i2?.sales, note: i2 ? `${m(i2.sales, i2.visitors || i2.clicks)} of ${i2.visitors} unique visitors bought` : void 0 }), (0, d.jsx)(_, { label: `Commission`, value: i2 ? p(i2.commission) : void 0, note: i2 ? `in ${f.find((e2) => e2.days === t2)?.label.toLowerCase()}` : void 0, strong: true }), (0, d.jsx)(_, { label: `Open payout`, value: e ? p(a) : void 0, note: e ? `${p(e.total.paid)} paid so far` : void 0 })] }), (0, d.jsxs)(`section`, { className: `pp__card`, children: [(0, d.jsxs)(`div`, { className: `pp__card-head`, children: [(0, d.jsx)(`h2`, { children: `Visits and sales per day` }), (0, d.jsxs)(`span`, { className: `pp__legend`, children: [(0, d.jsx)(`i`, { className: `pp__dot pp__dot--clicks` }), ` Visits `, (0, d.jsx)(`i`, { className: `pp__dot pp__dot--sales` }), ` Sales`] })] }), (0, d.jsx)(v, { daily: e?.daily ?? [] })] }), (0, d.jsxs)(`section`, { className: `pp__card`, children: [(0, d.jsx)(`div`, { className: `pp__card-head`, children: (0, d.jsx)(`h2`, { children: `From click to sale` }) }), (0, d.jsx)(b, { steps: [{ label: `Clicked your link`, value: i2?.clicks ?? 0 }, { label: `Browsed the library`, value: i2?.browse ?? 0 }, { label: `Looked at Pro`, value: i2?.get_pro ?? 0 }, { label: `Started checkout`, value: i2?.checkouts ?? 0 }, { label: `Bought`, value: i2?.sales ?? 0 }] })] }), e && (0, d.jsx)(x, { code: e.code }), (0, d.jsxs)(`section`, { className: `pp__card`, children: [(0, d.jsx)(`div`, { className: `pp__card-head`, children: (0, d.jsx)(`h2`, { children: `Earnings` }) }), (0, d.jsxs)(`dl`, { className: `pp__earn`, children: [(0, d.jsxs)(`div`, { children: [(0, d.jsx)(`dt`, { children: `Sales in total` }), (0, d.jsx)(`dd`, { children: e?.total.sales ?? `\u2013` })] }), (0, d.jsxs)(`div`, { children: [(0, d.jsx)(`dt`, { children: `Commission in total` }), (0, d.jsx)(`dd`, { children: e ? p(e.total.commission) : `\u2013` })] }), (0, d.jsxs)(`div`, { children: [(0, d.jsx)(`dt`, { children: `Paid out` }), (0, d.jsx)(`dd`, { children: e ? p(e.total.paid) : `\u2013` })] }), (0, d.jsxs)(`div`, { children: [(0, d.jsx)(`dt`, { children: `Open` }), (0, d.jsx)(`dd`, { children: e ? p(a) : `\u2013` })] })] }), e && e.payouts.length > 0 && (0, d.jsx)(`ul`, { className: `pp__payouts`, children: e.payouts.map((e2) => (0, d.jsxs)(`li`, { children: [(0, d.jsx)(`span`, { children: new Date(e2.paid_at).toLocaleDateString(`en-US`, { month: `short`, day: `numeric`, year: `numeric` }) }), (0, d.jsx)(`b`, { children: p(e2.amount) })] }, e2.paid_at)) }), (0, d.jsx)(`p`, { className: `pp__hint`, children: `Sales count for you when a visitor bought within 30 days of clicking your link. Refunded orders drop out automatically.` })] })] });
}
function _({ label: e, value: t2, note: n3, strong: r }) {
  return (0, d.jsxs)(`div`, { className: `pp__kpi`, "data-strong": r || void 0, children: [(0, d.jsx)(`span`, { className: `pp__kpi-label`, children: e }), (0, d.jsx)(`span`, { className: `pp__kpi-value`, children: t2 ?? `\u2013` }), (0, d.jsx)(`span`, { className: `pp__kpi-note`, children: n3 ?? `\xA0` })] });
}
function v({ daily: e }) {
  let [t2, n3] = (0, u.useState)(null), r = e.map((e2) => ({ ...e2, visits: e2.clicks + (e2.returns ?? 0) })), i2 = Math.max(1, ...r.map((e2) => e2.visits)), a = Math.max(r.length - 1, 1), o = r.map((e2, t3) => ({ x: t3 / a * 100, y: 100 - e2.visits / i2 * 92 - 4 })), s = o.map((e2, t3) => `${t3 ? `L` : `M`}${e2.x},${e2.y}`).join(` `), c = o.length ? `${s} L100,100 L0,100 Z` : ``, l = t2 === null ? null : r[t2];
  return (0, d.jsxs)(`div`, { className: `pp__chart`, children: [(0, d.jsxs)(`div`, { className: `pp__plot`, onPointerMove: (e2) => {
    let t3 = e2.currentTarget.getBoundingClientRect();
    n3(Math.round((e2.clientX - t3.left) / t3.width * a));
  }, onPointerLeave: () => n3(null), children: [(0, d.jsxs)(`svg`, { viewBox: `0 0 100 100`, preserveAspectRatio: `none`, "aria-hidden": `true`, children: [[25, 50, 75].map((e2) => (0, d.jsx)(`line`, { className: `pp__grid-line`, x1: `0`, x2: `100`, y1: e2, y2: e2 }, e2)), (0, d.jsx)(`path`, { className: `pp__area`, d: c }), (0, d.jsx)(`path`, { className: `pp__line`, d: s })] }), r.map((e2, t3) => e2.sales > 0 ? (0, d.jsx)(`span`, { className: `pp__point pp__point--sale`, style: { left: `${o[t3].x}%`, top: `${o[t3].y}%` } }, e2.day) : null), l && t2 !== null && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(`span`, { className: `pp__guide`, style: { left: `${o[t2].x}%` } }), (0, d.jsx)(`span`, { className: `pp__point`, style: { left: `${o[t2].x}%`, top: `${o[t2].y}%` } }), (0, d.jsxs)(`span`, { className: `pp__tip`, style: { left: `${Math.min(Math.max(o[t2].x, 12), 88)}%` }, children: [(0, d.jsx)(`b`, { children: y(l.day) }), l.visits, ` visit`, l.visits === 1 ? `` : `s`, l.returns ? ` (${l.returns} returning)` : ``, ` \xB7 `, l.sales, ` sale`, l.sales === 1 ? `` : `s`] })] })] }), (0, d.jsxs)(`div`, { className: `pp__axis`, children: [(0, d.jsx)(`span`, { children: r[0] ? y(r[0].day) : `` }), (0, d.jsx)(`span`, { children: r.length ? y(r[r.length - 1].day) : `` })] })] });
}
var y = (e) => (/* @__PURE__ */ new Date(`${e}T12:00:00`)).toLocaleDateString(`en-US`, { month: `short`, day: `numeric` });
function b({ steps: e }) {
  let t2 = Math.max(1, e[0].value);
  return (0, d.jsx)(`ol`, { className: `pp__funnel`, children: e.map((n3, r) => (0, d.jsxs)(`li`, { children: [(0, d.jsxs)(`div`, { className: `pp__funnel-row`, children: [(0, d.jsx)(`span`, { children: n3.label }), (0, d.jsx)(`b`, { children: n3.value }), (0, d.jsx)(`em`, { children: r === 0 ? `` : m(n3.value, e[r - 1].value) })] }), (0, d.jsx)(`span`, { className: `pp__bar`, style: { "--w": `${n3.value / t2 * 100}%` } })] }, n3.label)) });
}
function x({ code: e }) {
  let t2 = `${t.url}/?ref=${e}&v=2`;
  return (0, d.jsxs)(`section`, { className: `pp__card`, children: [(0, d.jsx)(`div`, { className: `pp__card-head`, children: (0, d.jsx)(`h2`, { children: `Your link` }) }), (0, d.jsx)(S, { label: `Share this link`, value: t2 })] });
}
function S({ label: e, value: t2 }) {
  let [n3, r] = (0, u.useState)(false);
  return (0, u.useEffect)(() => {
    if (!n3) return;
    let e2 = window.setTimeout(() => r(false), 1500);
    return () => window.clearTimeout(e2);
  }, [n3]), (0, d.jsxs)(`div`, { className: `pp__copy`, children: [(0, d.jsx)(`span`, { className: `pp__copy-label`, children: e }), (0, d.jsx)(`code`, { children: t2 }), (0, d.jsxs)(`button`, { type: `button`, className: `btn btn--secondary`, onClick: () => void navigator.clipboard?.writeText(t2).then(() => r(true), () => void 0), children: [(0, d.jsx)(j, { icon: n3 ? Qi : Ri, size: 14 }), n3 ? `Copied` : `Copy`] })] });
}
export {
  h as PartnerPage
};
