import {
  FaComponent,
  J1Component,
  Lc1Component,
  M,
  Qi,
  Ri,
  i,
  t
} from "./chunk-4F2T52KM.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  Fragment,
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/PartnerPage-BKenGWHF.jsx
init_react_BkAXpnfr();
var u = n();
var d = n2();
var f = [{
  days: 7,
  label: `7 days`
}, {
  days: 30,
  label: `30 days`
}, {
  days: null,
  label: `All time`
}];
var p = (e) => e.toLocaleString(`en-US`, {
  style: `currency`,
  currency: `USD`,
  minimumFractionDigits: e % 1 ? 2 : 0
});
var m = (e, t2) => {
  if (t2) {
    if (e) {
      return `${(e / t2 * 100).toFixed(+(e / t2 < 0.1))}%`;
    }
    return `0%`;
  }
  return `\u2013`;
};
function PartnerPage({
  code
}) {
  let p_key = u.useMemo(() => new URLSearchParams(window.location.search).get(`key`) ?? ``, []);
  let [i2, setI] = u.useState(30);
  let [s, setS] = u.useState(void 0);
  u.useEffect(() => {
    let e = Object.assign(document.createElement(`meta`), {
      name: `robots`,
      content: `noindex, nofollow`
    });
    document.head.append(e);
    document.title = `Partner dashboard \xB7 ${t.name}`;
    return () => e.remove();
  }, []);
  u.useEffect(() => {
    let n3 = true;
    i().then((t2) => t2.rpc(`partner_stats`, {
      p_code: code,
      p_key,
      p_days: i2
    })).then(({
      data,
      error
    }) => n3 && setS(error ? null : data ?? null)).catch(() => n3 && setS(null));
    return () => {
      n3 = false;
    };
  }, [code, p_key, i2]);
  return /* @__PURE__ */ jsxs("div", { className: `pp`, children: [
    /* @__PURE__ */ jsxs("header", { className: `pp__top`, children: [
      /* @__PURE__ */ jsxs(M, { to: `/`, className: `logo`, "aria-label": `${t.name} home`, children: [
        /* @__PURE__ */ jsx(FaComponent, {}),
        /* @__PURE__ */ jsx("span", { className: `logo__name`, children: t.name })
      ] }),
      /* @__PURE__ */ jsx("span", { className: `pp__badge`, children: `Partner` }),
      /* @__PURE__ */ jsx("div", { className: `pp__top-end`, children: /* @__PURE__ */ jsx(Lc1Component, {}) })
    ] }),
    /* @__PURE__ */ jsx("main", { className: `pp__main`, children: s === null ? /* @__PURE__ */ jsxs("div", { className: `pp__empty`, children: [
      /* @__PURE__ */ jsx("h1", { children: `This link isn't valid` }),
      /* @__PURE__ */ jsx("p", { children: `Check that you opened the full link you received. If it still doesn't work, get in touch.` }),
      /* @__PURE__ */ jsx(M, { to: `/contact`, className: `btn btn--secondary`, children: `Contact` })
    ] }) : /* @__PURE__ */ jsx(GComponent, { stats: s, days: i2, setDays: setI }) })
  ] });
}
function GComponent({
  stats,
  days,
  setDays
}) {
  let i2 = stats?.period;
  let a = stats ? Math.max(stats.total.commission - stats.total.paid, 0) : 0;
  return /* @__PURE__ */ jsxs("div", { className: `pp__dash`, "data-loading": !stats || void 0, children: [
    /* @__PURE__ */ jsxs("div", { className: `pp__head`, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: `pp__title`, children: stats ? `Hi ${stats.name}` : `Partner dashboard` }),
        /* @__PURE__ */ jsxs("p", { className: `pp__sub`, children: [
          `Your clicks and sales on `,
          t.name,
          stats ? ` \xB7 ${Math.round(stats.rate * 100)}% commission on every sale` : ``
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `segmented`, role: `tablist`, "aria-label": `Period`, children: f.map((e) => /* @__PURE__ */ jsx("button", { role: `tab`, "aria-selected": days === e.days, onClick: () => setDays(e.days), children: e.label }, e.label)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: `pp__kpis`, "aria-label": `Key numbers`, children: [
      /* @__PURE__ */ jsx(Component, { label: `Visits`, value: i2 ? i2.clicks + (i2.returns ?? 0) : void 0, note: i2 ? `${i2.clicks} via your link \xB7 ${i2.returns ?? 0} came back directly` : void 0 }),
      /* @__PURE__ */ jsx(Component, { label: `Sales`, value: i2?.sales, note: i2 ? `${m(i2.sales, i2.visitors || i2.clicks)} of ${i2.visitors} unique visitors bought` : void 0 }),
      /* @__PURE__ */ jsx(Component, { label: `Commission`, value: i2 ? p(i2.commission) : void 0, note: i2 ? `in ${f.find((e) => e.days === days)?.label.toLowerCase()}` : void 0, strong: true }),
      /* @__PURE__ */ jsx(Component, { label: `Open payout`, value: stats ? p(a) : void 0, note: stats ? `${p(stats.total.paid)} paid so far` : void 0 })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: `pp__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `pp__card-head`, children: [
        /* @__PURE__ */ jsx("h2", { children: `Visits and sales per day` }),
        /* @__PURE__ */ jsxs("span", { className: `pp__legend`, children: [
          /* @__PURE__ */ jsx("i", { className: `pp__dot pp__dot--clicks` }),
          ` Visits `,
          /* @__PURE__ */ jsx("i", { className: `pp__dot pp__dot--sales` }),
          ` Sales`
        ] })
      ] }),
      /* @__PURE__ */ jsx(VComponent, { daily: stats?.daily ?? [] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: `pp__card`, children: [
      /* @__PURE__ */ jsx("div", { className: `pp__card-head`, children: /* @__PURE__ */ jsx("h2", { children: `From click to sale` }) }),
      /* @__PURE__ */ jsx(BComponent, { steps: [{
        label: `Clicked your link`,
        value: i2?.clicks ?? 0
      }, {
        label: `Browsed the library`,
        value: i2?.browse ?? 0
      }, {
        label: `Looked at Pro`,
        value: i2?.get_pro ?? 0
      }, {
        label: `Started checkout`,
        value: i2?.checkouts ?? 0
      }, {
        label: `Bought`,
        value: i2?.sales ?? 0
      }] })
    ] }),
    stats && /* @__PURE__ */ jsx(XComponent, { code: stats.code }),
    /* @__PURE__ */ jsxs("section", { className: `pp__card`, children: [
      /* @__PURE__ */ jsx("div", { className: `pp__card-head`, children: /* @__PURE__ */ jsx("h2", { children: `Earnings` }) }),
      /* @__PURE__ */ jsxs("dl", { className: `pp__earn`, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: `Sales in total` }),
          /* @__PURE__ */ jsx("dd", { children: stats?.total.sales ?? `\u2013` })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: `Commission in total` }),
          /* @__PURE__ */ jsx("dd", { children: stats ? p(stats.total.commission) : `\u2013` })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: `Paid out` }),
          /* @__PURE__ */ jsx("dd", { children: stats ? p(stats.total.paid) : `\u2013` })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: `Open` }),
          /* @__PURE__ */ jsx("dd", { children: stats ? p(a) : `\u2013` })
        ] })
      ] }),
      stats && stats.payouts.length > 0 && /* @__PURE__ */ jsx("ul", { className: `pp__payouts`, children: stats.payouts.map((e) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { children: new Date(e.paid_at).toLocaleDateString(`en-US`, {
          month: `short`,
          day: `numeric`,
          year: `numeric`
        }) }),
        /* @__PURE__ */ jsx("b", { children: p(e.amount) })
      ] }, e.paid_at)) }),
      /* @__PURE__ */ jsx("p", { className: `pp__hint`, children: `Sales count for you when a visitor bought within 30 days of clicking your link. Refunded orders drop out automatically.` })
    ] })
  ] });
}
function Component({
  label,
  value,
  note,
  strong
}) {
  return /* @__PURE__ */ jsxs("div", { className: `pp__kpi`, "data-strong": strong || void 0, children: [
    /* @__PURE__ */ jsx("span", { className: `pp__kpi-label`, children: label }),
    /* @__PURE__ */ jsx("span", { className: `pp__kpi-value`, children: value ?? `\u2013` }),
    /* @__PURE__ */ jsx("span", { className: `pp__kpi-note`, children: note ?? `\xA0` })
  ] });
}
function VComponent({
  daily
}) {
  let [t2, setT] = u.useState(null);
  let r = daily.map((e) => ({
    ...e,
    visits: e.clicks + (e.returns ?? 0)
  }));
  let i2 = Math.max(1, ...r.map((e) => e.visits));
  let a = Math.max(r.length - 1, 1);
  let o = r.map((e, t3) => ({
    x: t3 / a * 100,
    y: 100 - e.visits / i2 * 92 - 4
  }));
  let d_2 = o.map((e, t3) => `${t3 ? `L` : `M`}${e.x},${e.y}`).join(` `);
  let d_1 = o.length ? `${d_2} L100,100 L0,100 Z` : ``;
  let l = t2 === null ? null : r[t2];
  return /* @__PURE__ */ jsxs("div", { className: `pp__chart`, children: [
    /* @__PURE__ */ jsxs("div", { className: `pp__plot`, onPointerMove: (e) => {
      let t3 = e.currentTarget.getBoundingClientRect();
      setT(Math.round((e.clientX - t3.left) / t3.width * a));
    }, onPointerLeave: () => setT(null), children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 100 100`, preserveAspectRatio: `none`, "aria-hidden": `true`, children: [
        [25, 50, 75].map((e) => /* @__PURE__ */ jsx("line", { className: `pp__grid-line`, x1: `0`, x2: `100`, y1: e, y2: e }, e)),
        /* @__PURE__ */ jsx("path", { className: `pp__area`, d: d_1 }),
        /* @__PURE__ */ jsx("path", { className: `pp__line`, d: d_2 })
      ] }),
      r.map((e, t3) => {
        if (e.sales > 0) {
          return /* @__PURE__ */ jsx("span", { className: `pp__point pp__point--sale`, style: {
            left: `${o[t3].x}%`,
            top: `${o[t3].y}%`
          } }, e.day);
        }
        return null;
      }),
      l && t2 !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: `pp__guide`, style: {
          left: `${o[t2].x}%`
        } }),
        /* @__PURE__ */ jsx("span", { className: `pp__point`, style: {
          left: `${o[t2].x}%`,
          top: `${o[t2].y}%`
        } }),
        /* @__PURE__ */ jsxs("span", { className: `pp__tip`, style: {
          left: `${Math.min(Math.max(o[t2].x, 12), 88)}%`
        }, children: [
          /* @__PURE__ */ jsx("b", { children: y(l.day) }),
          l.visits,
          ` visit`,
          l.visits === 1 ? `` : `s`,
          l.returns ? ` (${l.returns} returning)` : ``,
          ` \xB7 `,
          l.sales,
          ` sale`,
          l.sales === 1 ? `` : `s`
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `pp__axis`, children: [
      /* @__PURE__ */ jsx("span", { children: r[0] ? y(r[0].day) : `` }),
      /* @__PURE__ */ jsx("span", { children: r.length ? y(r[r.length - 1].day) : `` })
    ] })
  ] });
}
var y = (day) => (/* @__PURE__ */ new Date(`${day}T12:00:00`)).toLocaleDateString(`en-US`, {
  month: `short`,
  day: `numeric`
});
function BComponent({
  steps
}) {
  let t2 = Math.max(1, steps[0].value);
  return /* @__PURE__ */ jsx("ol", { className: `pp__funnel`, children: steps.map((n3, r) => /* @__PURE__ */ jsxs("li", { children: [
    /* @__PURE__ */ jsxs("div", { className: `pp__funnel-row`, children: [
      /* @__PURE__ */ jsx("span", { children: n3.label }),
      /* @__PURE__ */ jsx("b", { children: n3.value }),
      /* @__PURE__ */ jsx("em", { children: r === 0 ? `` : m(n3.value, steps[r - 1].value) })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `pp__bar`, style: {
      "--w": `${n3.value / t2 * 100}%`
    } })
  ] }, n3.label)) });
}
function XComponent({
  code
}) {
  let value = `${t.url}/?ref=${code}&v=2`;
  return /* @__PURE__ */ jsxs("section", { className: `pp__card`, children: [
    /* @__PURE__ */ jsx("div", { className: `pp__card-head`, children: /* @__PURE__ */ jsx("h2", { children: `Your link` }) }),
    /* @__PURE__ */ jsx(SComponent, { label: `Share this link`, value })
  ] });
}
function SComponent({
  label,
  value
}) {
  let [n3, setN] = u.useState(false);
  u.useEffect(() => {
    if (!n3) {
      return;
    }
    let e = window.setTimeout(() => setN(false), 1500);
    return () => window.clearTimeout(e);
  }, [n3]);
  return /* @__PURE__ */ jsxs("div", { className: `pp__copy`, children: [
    /* @__PURE__ */ jsx("span", { className: `pp__copy-label`, children: label }),
    /* @__PURE__ */ jsx("code", { children: value }),
    /* @__PURE__ */ jsxs("button", { type: `button`, className: `btn btn--secondary`, onClick: () => void navigator.clipboard?.writeText(value).then(() => setN(true), () => void 0), children: [
      /* @__PURE__ */ jsx(J1Component, { icon: n3 ? Qi : Ri, size: 14 }),
      n3 ? `Copied` : `Copy`
    ] })
  ] });
}
export {
  PartnerPage
};
