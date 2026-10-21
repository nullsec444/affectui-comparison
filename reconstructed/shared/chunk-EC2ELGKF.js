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

// reconstructed/demo-Ytbb4Swi.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{
  key: `7d`,
  label: `Week`,
  days: 7
}, {
  key: `30d`,
  label: `Month`,
  days: 30
}, {
  key: `90d`,
  label: `Quarter`,
  days: 90
}];
var a = [{
  key: `revenue`,
  label: `Revenue`,
  kind: `money`,
  zoom: false,
  goodWhen: `up`
}, {
  key: `orders`,
  label: `Orders`,
  kind: `count`,
  zoom: false,
  goodWhen: `up`
}, {
  key: `aov`,
  label: `Avg. order`,
  kind: `money`,
  zoom: true,
  goodWhen: `up`
}, {
  key: `refunds`,
  label: `Refund rate`,
  kind: `rate`,
  zoom: true,
  goodWhen: `down`
}];
var o = [[`Linen overshirt`, 0.22], [`Everyday tote`, 0.16], [`Merino crew`, 0.13], [`Canvas sneaker`, 0.09], [`Wool beanie`, 0.06]];
var s = [[`Online store`, 0.46], [`Instagram`, 0.21], [`Marketplace`, 0.14], [`Wholesale`, 0.11], [`Pop-up`, 0.05]];
function c() {
  let e = 7;
  let t = () => {
    e = e * 16807 % 2147483647;
    return (e - 1) / 2147483646;
  };
  let n4 = /* @__PURE__ */ new Date();
  n4.setHours(12, 0, 0, 0);
  return Array.from({
    length: 180
  }, (e2, r2) => {
    let date = new Date(n4);
    date.setDate(n4.getDate() - (179 - r2));
    let a2 = 92 + r2 * 0.32;
    let o2 = [1.22, 0.82, 0.86, 0.9, 0.96, 1.1, 1.3][date.getDay()];
    let orders = Math.round(a2 * o2 * (0.88 + t() * 0.24));
    let c2 = 61 + r2 * 0.03 + (t() - 0.5) * 8;
    return {
      date,
      revenue: Math.round(orders * c2),
      orders,
      refunded: Math.round(orders * (0.026 - r2 * 3e-5 + (t() - 0.5) * 0.012))
    };
  });
}
function l(e, t) {
  let n4 = e.reduce((acc, item) => acc + item.revenue, 0);
  let r2 = e.reduce((acc, item) => acc + item.orders, 0);
  let i2 = e.reduce((acc, item) => acc + item.refunded, 0);
  if (t === `revenue`) {
    return n4;
  }
  if (t === `orders`) {
    return r2;
  }
  if (t === `aov`) {
    if (r2) {
      return n4 / r2;
    }
    return 0;
  }
  if (r2) {
    return i2 / r2 * 100;
  }
  return 0;
}
var u = (date) => date.toLocaleDateString(`en-US`, {
  month: `short`,
  day: `numeric`
});
function d(e, days, n4) {
  let r2 = e.slice(-days);
  let i2 = e.slice(-days * 2, -days);
  let a2 = days > 31 ? 7 : 1;
  let o2 = [];
  for (let e2 = 0; e2 < r2.length; e2 += a2) {
    let t = r2.slice(e2, e2 + a2);
    let s2 = i2.slice(e2, e2 + a2);
    o2.push({
      label: u(t[0].date),
      value: l(t, n4),
      previous: l(s2, n4)
    });
  }
  return o2;
}
var f = (e, t) => {
  if (e === `refunds`) {
    return `${t.toFixed(1)}%`;
  }
  if (e === `aov`) {
    return `$${t.toFixed(2)}`;
  }
  if (e === `revenue`) {
    return `$${Math.round(t).toLocaleString(`en-US`)}`;
  }
  return Math.round(t).toLocaleString(`en-US`);
};
var ee = (e, t) => {
  let n4 = t >= 1e3 ? `${+(t / 1e3).toFixed(1)}K` : `${+t.toFixed(+(t < 10))}`;
  if (e === `refunds`) {
    return `${n4}%`;
  }
  if (e === `revenue` || e === `aov`) {
    return `$${n4}`;
  }
  return n4;
};
function te(e) {
  let t = 10 ** Math.floor(Math.log10(e / 4));
  return ([1, 2, 2.5, 5, 10].map((e2) => e2 * t).find((t2) => t2 * 4 >= e * 1.08) ?? t * 10) * 4;
}
function p(e) {
  if (e.length < 2) {
    return ``;
  }
  let e_length = e.length;
  let n4 = [];
  let r2 = [];
  for (let r3 = 0; r3 < e_length - 1; r3++) {
    n4.push((e[r3 + 1][1] - e[r3][1]) / (e[r3 + 1][0] - e[r3][0]));
  }
  r2.push(n4[0]);
  for (let e2 = 1; e2 < e_length - 1; e2++) {
    r2.push(n4[e2 - 1] * n4[e2] <= 0 ? 0 : (n4[e2 - 1] + n4[e2]) / 2);
  }
  r2.push(n4[e_length - 2]);
  for (let e2 = 0; e2 < e_length - 1; e2++) {
    if (n4[e2] === 0) {
      r2[e2] = r2[e2 + 1] = 0;
      continue;
    }
    let t = r2[e2] / n4[e2];
    let i3 = r2[e2 + 1] / n4[e2];
    let a2 = t * t + i3 * i3;
    if (a2 > 9) {
      let o2 = 3 / Math.sqrt(a2);
      r2[e2] = o2 * t * n4[e2];
      r2[e2 + 1] = o2 * i3 * n4[e2];
    }
  }
  let i2 = `M${e[0][0]},${e[0][1]}`;
  for (let n5 = 0; n5 < e_length - 1; n5++) {
    let [t, a2] = e[n5];
    let [o2, s2] = e[n5 + 1];
    let c2 = (o2 - t) / 3;
    i2 += `C${t + c2},${a2 + r2[n5] * c2} ${o2 - c2},${s2 - r2[n5 + 1] * c2} ${o2},${s2}`;
  }
  return i2;
}
function useM(e, t = 600) {
  let [r2, setR] = n3.useState(e);
  let aRef = n3.useRef(e);
  n3.useEffect(() => {
    if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      aRef.current = e;
      setR(e);
      return;
    }
    let n4 = performance.now();
    let aRef_current = aRef.current;
    let o2 = 0;
    let s2 = (c2) => {
      let l2 = Math.min(1, (c2 - n4) / t);
      let u2 = 1 - (1 - l2) ** 3;
      let d2 = aRef_current + (e - aRef_current) * u2;
      aRef.current = d2;
      setR(d2);
      if (l2 < 1) {
        o2 = requestAnimationFrame(s2);
      }
    };
    o2 = requestAnimationFrame(s2);
    return () => cancelAnimationFrame(o2);
  }, [e, t]);
  return r2;
}
var x2 = 600;
var y2 = 200;
function Component({
  title = `Sales`,
  site = `Northwind Store`,
  defaultRange = `30d`,
  defaultMetric = `revenue`,
  onExport,
  className
}) {
  let b = `ui-md` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  let x = n3.useMemo(c, []);
  let [S, setS] = n3.useState(defaultRange);
  let [w, setW] = n3.useState(defaultMetric);
  let [T, setT] = n3.useState(false);
  let [D, setD] = n3.useState(`line`);
  let [k, setK] = n3.useState(null);
  let [j, setJ] = n3.useState(false);
  let NRef = n3.useRef(null);
  let days = i.find((e) => e.key === S).days;
  let F = x.slice(-days);
  let I = x.slice(-days * 2, -days);
  let L = n3.useMemo(() => d(x, days, w), [x, days, w]);
  let R = a.find((e) => e.key === w);
  let z = L.flatMap((e) => {
    if (T) {
      return [e.value, e.previous];
    }
    return [e.value];
  });
  let [B, V] = (() => {
    if (!R.zoom || D === `bars`) {
      return [0, te(Math.max(...z))];
    }
    let e = Math.min(...z);
    let t = Math.max(...z);
    let n4 = Math.max((t - e) * 0.8, t * 0.02);
    let r2 = (t + n4 - Math.max(0, e - n4)) / 4;
    let i2 = r2 >= 1 ? Math.ceil(r2) : Math.ceil(r2 * 10) / 10;
    let a2 = Math.max(0, Math.floor((e - n4) / i2) * i2);
    return [a2, a2 + i2 * 4];
  })();
  let H = (e) => (e - B) / (V - B);
  let U = (e, t) => [e / (L.length - 1) * x2, y2 - H(t) * y2];
  let W = p(L.map((e, t) => U(t, e.value)));
  let G = p(L.map((e, t) => U(t, e.previous)));
  let K = `${W}L${x2},${y2}L0,${y2}Z`;
  let q = [0, 1, 2, 3, 4].map((e) => B + (V - B) / 4 * e);
  let J = Math.ceil(L.length / 6);
  let Y = k !== null && k < L.length ? k : null;
  let total = l(F, `revenue`);
  let Z = (e) => e / (L.length - 1) * 100;
  let ae = 100 / L.length;
  let Q = (e) => {
    if (D === `bars`) {
      return ae * (e + 0.5);
    }
    return Z(e);
  };
  n3.useEffect(() => setK(null), [S, w, D]);
  let $ = (clientX) => {
    let NRef_current = NRef.current;
    if (!NRef_current) {
      return;
    }
    let n4 = NRef_current.getBoundingClientRect();
    let r2 = (clientX - n4.left) / n4.width;
    let i2 = D === `bars` ? Math.floor(r2 * L.length) : Math.round(r2 * (L.length - 1));
    setK(Math.max(0, Math.min(L.length - 1, i2)));
  };
  let onKeyDown = (e) => {
    let t = L.length - 1;
    let n4 = k ?? t;
    let r2 = e.key === `ArrowLeft` ? n4 - 1 : e.key === `ArrowRight` ? n4 + 1 : e.key === `Home` ? 0 : e.key === `End` ? t : null;
    if (r2 !== null) {
      e.preventDefault();
      setK(Math.max(0, Math.min(t, r2)));
    }
  };
  let se = i.findIndex((e) => e.key === S);
  return /* @__PURE__ */ jsxs("div", { className: [`ui-md`, className].filter(Boolean).join(` `), children: [
    /* @__PURE__ */ jsx("style", { href: `ui-metrics-dashboard`, precedence: `default`, children: re }),
    /* @__PURE__ */ jsxs("div", { className: `ui-md__bar`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-md__heading`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-md__title`, children: title }),
        /* @__PURE__ */ jsxs("span", { className: `ui-md__site`, children: [
          site,
          ` \xB7 Last `,
          days,
          ` days`
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-md__actions`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-md__range`, role: `group`, "aria-label": `Period`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-md__range-thumb`, "aria-hidden": `true`, style: {
            transform: `translateX(${se * 100}%)`
          } }),
          i.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, "aria-pressed": S === e.key, onClick: () => setS(e.key), children: e.label }, e.key))
        ] }),
        /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-md__export`, onClick: () => {
          onExport?.(S, w);
          setJ(true);
          window.setTimeout(() => setJ(false), 1600);
        }, children: [
          /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: j ? /* @__PURE__ */ jsx("path", { d: `m5 12.5 4.5 4.5L19 7.5` }) : /* @__PURE__ */ jsx("path", { d: `M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14` }) }),
          /* @__PURE__ */ jsx("span", { "aria-live": `polite`, children: j ? `Exported` : `Export` })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-md__kpis`, role: `tablist`, "aria-label": `Metric`, children: a.map((meta) => /* @__PURE__ */ jsx(NeComponent, { meta, selected: w === meta.key, value: l(F, meta.key), before: l(I, meta.key), onSelect: () => setW(meta.key) }, meta.key)) }),
    /* @__PURE__ */ jsxs("div", { className: `ui-md__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-md__chart`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-md__chart-head`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-md__legend`, children: [
            /* @__PURE__ */ jsx("i", { "aria-hidden": `true` }),
            R.label
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `ui-md__chart-tools`, children: [
            /* @__PURE__ */ jsxs("div", { className: `ui-md__kind`, role: `group`, "aria-label": `Chart type`, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-md__kind-thumb`, "aria-hidden": `true`, style: {
                transform: D === `bars` ? `translateX(100%)` : void 0
              } }),
              /* @__PURE__ */ jsx("button", { type: `button`, "aria-pressed": D === `line`, "aria-label": `Line chart`, onClick: () => setD(`line`), children: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: [
                /* @__PURE__ */ jsx("path", { d: `M3.5 16.5 9 11l4 3.5 7.5-8` }),
                /* @__PURE__ */ jsx("circle", { cx: `9`, cy: `11`, r: `1.6` }),
                /* @__PURE__ */ jsx("circle", { cx: `13`, cy: `14.5`, r: `1.6` })
              ] }) }),
              /* @__PURE__ */ jsx("button", { type: `button`, "aria-pressed": D === `bars`, "aria-label": `Bar chart`, onClick: () => setD(`bars`), children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M5.5 19.5v-6M10 19.5V8M14.5 19.5v-9M19 19.5V5` }) }) })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: `ui-md__compare`, children: [
              /* @__PURE__ */ jsx("input", { type: `checkbox`, checked: T, onChange: (e) => setT(e.target.checked) }),
              /* @__PURE__ */ jsx("span", { className: `ui-md__switch`, "aria-hidden": `true` }),
              `Compare to previous period`
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-md__plot-wrap`, children: [
          /* @__PURE__ */ jsx("div", { className: `ui-md__axis`, "aria-hidden": `true`, children: [...q].reverse().map((e) => /* @__PURE__ */ jsx("span", { children: ee(w, e) }, e)) }),
          /* @__PURE__ */ jsxs("div", { ref: NRef, className: `ui-md__plot`, tabIndex: 0, role: `img`, "aria-label": `${R.label} over the last ${days} days, from ${f(w, L[0].value)} to ${f(w, L[L.length - 1].value)}. Use the arrow keys to inspect points.`, onPointerMove: (e) => e.pointerType === `mouse` && $(e.clientX), onPointerDown: (e) => $(e.clientX), onPointerLeave: (e) => e.pointerType === `mouse` && setK(null), onKeyDown, onBlur: () => setK(null), children: [
            /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${x2} ${y2}`, preserveAspectRatio: `none`, "aria-hidden": `true`, children: [
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: `${b}-area`, x1: `0`, y1: `0`, x2: `0`, y2: `1`, children: [
                /* @__PURE__ */ jsx("stop", { offset: `0%`, className: `ui-md__area-a` }),
                /* @__PURE__ */ jsx("stop", { offset: `100%`, className: `ui-md__area-b` })
              ] }) }),
              q.map((e) => /* @__PURE__ */ jsx("line", { className: e === B ? `ui-md__base` : `ui-md__grid`, x1: `0`, x2, y1: y2 - H(e) * y2, y2: y2 - H(e) * y2 }, e)),
              D === `line` && /* @__PURE__ */ jsxs("g", { className: `ui-md__series`, children: [
                /* @__PURE__ */ jsx("path", { className: `ui-md__area`, d: K, fill: `url(#${b}-area)` }),
                T && /* @__PURE__ */ jsx("path", { className: `ui-md__prev`, d: G }),
                /* @__PURE__ */ jsx("path", { className: `ui-md__line`, d: W })
              ] }, `${S}-${w}`),
              Y !== null && D === `line` && /* @__PURE__ */ jsx("line", { className: `ui-md__guide`, x1: U(Y, 0)[0], x2: U(Y, 0)[0], y1: `0`, y2 })
            ] }),
            D === `line` && /* @__PURE__ */ jsx("div", { className: `ui-md__dots`, "aria-hidden": `true`, children: L.map((e, t) => /* @__PURE__ */ jsx("span", { style: {
              left: `${Z(t)}%`,
              top: `${(1 - H(e.value)) * 100}%`,
              animationDelay: `${t / L.length * 700}ms`
            } }, t)) }, `dots-${S}-${w}`),
            D === `bars` && /* @__PURE__ */ jsx("div", { className: `ui-md__bars`, "data-compare": T ? `` : void 0, "aria-hidden": `true`, children: L.map((e, t) => /* @__PURE__ */ jsxs("div", { className: `ui-md__bar-slot`, "data-active": Y === t ? `` : void 0, style: {
              "--d": `${t / L.length * 400}ms`
            }, children: [
              T && /* @__PURE__ */ jsx("span", { className: `ui-md__col ui-md__col--prev`, style: {
                height: `${H(e.previous) * 100}%`
              } }),
              /* @__PURE__ */ jsx("span", { className: `ui-md__col`, style: {
                height: `${H(e.value) * 100}%`
              } })
            ] }, t)) }, `bars-${S}-${w}`),
            Y !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
              D === `line` && T && /* @__PURE__ */ jsx("span", { className: `ui-md__dot ui-md__dot--prev`, style: {
                left: `${Z(Y)}%`,
                top: `${(1 - H(L[Y].previous)) * 100}%`
              } }),
              D === `line` && /* @__PURE__ */ jsx("span", { className: `ui-md__dot`, style: {
                left: `${Z(Y)}%`,
                top: `${(1 - H(L[Y].value)) * 100}%`
              } }),
              /* @__PURE__ */ jsxs("div", { className: `ui-md__tip`, role: `status`, "data-side": Y > (L.length - 1) / 2 ? `left` : `right`, style: {
                left: `${Q(Y)}%`
              }, children: [
                /* @__PURE__ */ jsx("span", { className: `ui-md__tip-date`, children: days > 31 ? `Week of ${L[Y].label}` : L[Y].label }),
                /* @__PURE__ */ jsxs("span", { className: `ui-md__tip-row`, children: [
                  /* @__PURE__ */ jsx("i", { "aria-hidden": `true` }),
                  R.label,
                  /* @__PURE__ */ jsx("b", { children: f(w, L[Y].value) })
                ] }),
                T && /* @__PURE__ */ jsxs("span", { className: `ui-md__tip-row ui-md__tip-row--prev`, children: [
                  /* @__PURE__ */ jsx("i", { "aria-hidden": `true` }),
                  `Previous`,
                  /* @__PURE__ */ jsx("b", { children: f(w, L[Y].previous) })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `ui-md__dates`, "aria-hidden": `true`, children: L.map((e, t) => {
            if (t % J === 0) {
              return /* @__PURE__ */ jsx("span", { "data-start": D === `line` && t === 0 ? `` : void 0, "data-end": Q(t) > 88 ? `` : void 0, style: {
                left: `${Q(t)}%`
              }, children: e.label }, t);
            }
            return null;
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-md__lists`, children: [
        /* @__PURE__ */ jsx(V1Component, { title: `Top products`, rows: o, total }),
        /* @__PURE__ */ jsx(V1Component, { title: `Channels`, rows: s, total })
      ] })
    ] })
  ] });
}
function NeComponent({
  meta,
  selected,
  value,
  before,
  onSelect
}) {
  let o2 = useM(value);
  let s2 = meta.kind === `rate`;
  let c2 = s2 ? value - before : before ? (value - before) / before * 100 : 0;
  let l2 = c2 >= 0;
  let u2 = (l2 ? `up` : `down`) === meta.goodWhen;
  let d2 = s2 ? `${Math.abs(c2).toFixed(1)} pts` : `${Math.abs(c2).toFixed(1)}%`;
  return /* @__PURE__ */ jsxs("button", { type: `button`, role: `tab`, "aria-selected": selected, className: `ui-md__kpi`, onClick: onSelect, children: [
    /* @__PURE__ */ jsx("span", { className: `ui-md__kpi-label`, children: meta.label }),
    /* @__PURE__ */ jsx("span", { className: `ui-md__kpi-value`, children: f(meta.key, o2) }),
    /* @__PURE__ */ jsxs("span", { className: `ui-md__delta`, "data-good": u2 ? `` : void 0, children: [
      /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, style: {
        transform: l2 ? void 0 : `rotate(180deg)`
      }, children: /* @__PURE__ */ jsx("path", { d: `M7 14.5 12 9.5l5 5` }) }),
      d2,
      /* @__PURE__ */ jsxs("span", { className: `ui-md__sr`, children: [
        ` `,
        l2 ? `up` : `down`,
        ` versus the previous period`
      ] })
    ] })
  ] });
}
function V1Component({
  title,
  rows,
  total
}) {
  let i2 = rows[0][1];
  return /* @__PURE__ */ jsxs("div", { className: `ui-md__list`, children: [
    /* @__PURE__ */ jsxs("div", { className: `ui-md__list-head`, children: [
      /* @__PURE__ */ jsx("span", { children: title }),
      /* @__PURE__ */ jsx("span", { children: `Revenue` })
    ] }),
    /* @__PURE__ */ jsx("ul", { children: rows.map(([e, t]) => /* @__PURE__ */ jsx(Y1Component, { name: e, value: total * t, width: t / i2 * 100 }, e)) })
  ] });
}
function Y1Component({
  name,
  value,
  width: width2
}) {
  let i2 = useM(value);
  return /* @__PURE__ */ jsxs("li", { className: `ui-md__row`, children: [
    /* @__PURE__ */ jsx("span", { className: `ui-md__row-bar`, style: {
      width: `${width2}%`
    }, "aria-hidden": `true` }),
    /* @__PURE__ */ jsx("span", { className: `ui-md__row-name`, children: name }),
    /* @__PURE__ */ jsxs("span", { className: `ui-md__row-value`, children: [
      `$`,
      Math.round(i2).toLocaleString(`en-US`)
    ] })
  ] });
}
var re = `.ui-md{--ui-md-tray: #f0f0f0;--ui-md-card: #ffffff;--ui-md-card-line: #e5e5e5;--ui-md-line: #ececec;--ui-md-ink: #171717;--ui-md-text: #404040;--ui-md-muted: #8f8f8f;--ui-md-accent: #2f6bff;--ui-md-area: rgba(47, 107, 255, 0.16);--ui-md-prev: #b5b5b5;--ui-md-good: #1f8a4c;--ui-md-good-bg: #e9f6ee;--ui-md-bad: #d92d5c;--ui-md-bad-bg: #fdecf1;--ui-md-bar: #f3f6ff;--ui-md-chip: #ffffff;--ui-md-thumb: #ffffff;--ui-md-hover: rgba(0, 0, 0, 0.04);--ui-md-tip: #171717;--ui-md-tip-text: #ffffff;--ui-md-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-md-ease: cubic-bezier(0.65, 0, 0.25, 1);--ui-md-spring: cubic-bezier(0.34, 1.3, 0.64, 1);container-type: inline-size;padding: 0 6px 6px;border-radius: 24px;background: var(--ui-md-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-md-ink);-webkit-font-smoothing: antialiased}.ui-md *, .ui-md *::before, .ui-md *::after{box-sizing: border-box}.ui-md button{font: inherit;color: inherit;margin: 0;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-md :focus-visible{outline: 2px solid var(--ui-md-accent);outline-offset: 2px}.ui-md__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}.ui-md__bar{display: flex;align-items: center;justify-content: space-between;gap: 12px;padding: 12px 8px 12px 14px}.ui-md__heading{display: flex;flex-direction: column;gap: 1px;min-width: 0}.ui-md__title{font-size: 15px;font-weight: 600;letter-spacing: -0.01em}.ui-md__site{font-size: 12.5px;color: var(--ui-md-muted);white-space: nowrap}.ui-md__actions{display: flex;align-items: center;gap: 8px}.ui-md__range{position: relative;display: grid;grid-template-columns: repeat(3, 64px);padding: 3px;border-radius: 10px;background: rgba(0, 0, 0, 0.05)}.ui-md__range-thumb{position: absolute;top: 3px;left: 3px;width: 64px;height: calc(100% - 6px);border-radius: 7px;background: var(--ui-md-thumb);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);transition: transform 420ms var(--ui-md-spring)}.ui-md__range button{position: relative;height: 28px;padding: 0;border: 0;border-radius: 7px;background: none;font-size: 12.5px;font-weight: 500;color: var(--ui-md-muted);transition: color 200ms ease}.ui-md__range button[aria-pressed="true"]{color: var(--ui-md-ink)}.ui-md__export{display: inline-flex;align-items: center;gap: 6px;height: 34px;padding: 0 12px 0 10px;border: 0;border-radius: 10px;background: var(--ui-md-chip);box-shadow: 0 0 0 1px var(--ui-md-card-line), var(--ui-md-shadow);font-size: 13px;font-weight: 500;transition: background-color 160ms ease}.ui-md__export:hover{background: color-mix(in srgb, var(--ui-md-chip) 92%, var(--ui-md-ink))}.ui-md__export svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-md__card{overflow: hidden;border: 1px solid var(--ui-md-card-line);border-radius: 20px;background: var(--ui-md-card);box-shadow: var(--ui-md-shadow)}.ui-md__kpis{display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: 6px;margin-bottom: 6px}.ui-md__kpi{display: flex;flex-direction: column;align-items: flex-start;gap: 4px;min-width: 0;padding: 14px 16px 13px;border: 1px solid var(--ui-md-card-line);border-radius: 16px;background: var(--ui-md-card);box-shadow: var(--ui-md-shadow);text-align: left;opacity: 0.5;filter: saturate(0.2);transition: opacity 260ms ease, filter 260ms ease, transform 260ms var(--ui-md-spring)}.ui-md__kpi:hover{opacity: 0.8}.ui-md__kpi[aria-selected="true"]{opacity: 1;filter: none}.ui-md__kpi:active{transform: scale(0.98)}.ui-md__kpi-label{font-size: 12.5px;color: var(--ui-md-text)}.ui-md__kpi-value{font-size: 24px;font-weight: 600;letter-spacing: -0.02em;line-height: 1.15;font-variant-numeric: tabular-nums}.ui-md__delta{display: inline-flex;align-items: center;gap: 2px;height: 20px;padding: 0 7px 0 4px;border-radius: 999px;background: var(--ui-md-bad-bg);font-size: 11.5px;font-weight: 500;font-variant-numeric: tabular-nums;color: var(--ui-md-bad)}.ui-md__delta[data-good]{background: var(--ui-md-good-bg);color: var(--ui-md-good)}.ui-md__delta svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 2;stroke-linecap: round;stroke-linejoin: round}.ui-md__chart{padding: 16px 18px 12px;border-bottom: 1px solid var(--ui-md-line)}.ui-md__chart-head{display: flex;align-items: center;justify-content: space-between;gap: 12px;margin-bottom: 14px}.ui-md__legend{display: inline-flex;align-items: center;gap: 7px;font-size: 12.5px;font-weight: 500;color: var(--ui-md-text)}.ui-md__legend i{width: 14px;height: 2.5px;border-radius: 2px;background: var(--ui-md-accent)}.ui-md__chart-tools{display: flex;align-items: center;gap: 14px}.ui-md__kind{position: relative;display: grid;grid-template-columns: 30px 30px;padding: 2px;border-radius: 9px;background: rgba(0, 0, 0, 0.05)}.ui-md__kind-thumb{position: absolute;top: 2px;left: 2px;width: 30px;height: calc(100% - 4px);border-radius: 7px;background: var(--ui-md-thumb);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);transition: transform 380ms var(--ui-md-spring)}.ui-md__kind button{position: relative;display: grid;place-items: center;height: 24px;padding: 0;border: 0;background: none;color: var(--ui-md-muted);transition: color 200ms ease}.ui-md__kind button[aria-pressed="true"]{color: var(--ui-md-ink)}.ui-md__kind svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-md__kind circle{fill: var(--ui-md-thumb)}.ui-md__compare{display: inline-flex;align-items: center;gap: 8px;font-size: 12.5px;color: var(--ui-md-muted);cursor: pointer;user-select: none}.ui-md__compare input{position: absolute;opacity: 0;pointer-events: none}.ui-md__switch{position: relative;width: 28px;height: 16px;border-radius: 999px;background: #d9d9d9;transition: background-color 200ms ease}.ui-md__switch::after{content: "";position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 50%;background: #fff;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);transition: transform 300ms var(--ui-md-spring)}.ui-md__compare input:checked + .ui-md__switch{background: var(--ui-md-accent)}.ui-md__compare input:checked + .ui-md__switch::after{transform: translateX(12px)}.ui-md__compare input:focus-visible + .ui-md__switch{outline: 2px solid var(--ui-md-accent);outline-offset: 2px}.ui-md__plot-wrap{display: grid;grid-template-columns: auto minmax(0, 1fr);grid-template-rows: 200px auto;column-gap: 10px}.ui-md__axis{display: flex;flex-direction: column;justify-content: space-between;margin: -7px 0;font-size: 11px;font-variant-numeric: tabular-nums;text-align: right;color: var(--ui-md-muted)}.ui-md__plot{position: relative;outline-offset: 4px;border-radius: 4px;touch-action: pan-y}.ui-md__plot svg{display: block;width: 100%;height: 100%;overflow: visible}.ui-md__grid{stroke: var(--ui-md-line);stroke-width: 1;stroke-dasharray: 3 4;vector-effect: non-scaling-stroke}.ui-md__base{stroke: var(--ui-md-line);stroke-width: 1;vector-effect: non-scaling-stroke}.ui-md__area-a{stop-color: var(--ui-md-area)}.ui-md__area-b{stop-color: var(--ui-md-area);stop-opacity: 0}.ui-md__series{animation: ui-md-reveal 900ms var(--ui-md-ease) both}.ui-md__line{fill: none;stroke: var(--ui-md-accent);stroke-width: 2;stroke-linejoin: round;stroke-linecap: round;vector-effect: non-scaling-stroke}.ui-md__prev{fill: none;stroke: var(--ui-md-prev);stroke-width: 1.5;stroke-dasharray: 4 4;vector-effect: non-scaling-stroke;animation: ui-md-fade 400ms ease both}.ui-md__dots{position: absolute;inset: 0;pointer-events: none}.ui-md__dots span{position: absolute;width: 7px;height: 7px;margin: -3.5px 0 0 -3.5px;border: 1.5px solid var(--ui-md-accent);border-radius: 50%;background: var(--ui-md-card);animation: ui-md-pop 360ms var(--ui-md-spring) both}.ui-md__bars{position: absolute;inset: 0;display: flex;align-items: flex-end;pointer-events: none}.ui-md__bar-slot{flex: 1;display: flex;align-items: flex-end;justify-content: center;gap: 2px;min-width: 0;height: 100%}.ui-md__col{width: 56%;max-width: 22px;border-radius: 5px 5px 2px 2px;background: linear-gradient(180deg, var(--ui-md-accent), color-mix(in srgb, var(--ui-md-accent) 55%, var(--ui-md-card)));transform-origin: bottom;animation: ui-md-grow 620ms var(--ui-md-ease) both;animation-delay: var(--d);transition: opacity 200ms ease}.ui-md__bars[data-compare] .ui-md__col{width: 34%;max-width: 12px}.ui-md__col--prev{background: var(--ui-md-prev);opacity: 0.55}.ui-md__bars:has([data-active]) .ui-md__bar-slot:not([data-active]) .ui-md__col{opacity: 0.45}.ui-md__guide{stroke: var(--ui-md-muted);stroke-width: 1;stroke-dasharray: 2 3;opacity: 0.6;vector-effect: non-scaling-stroke}.ui-md__dot{position: absolute;width: 10px;height: 10px;margin: -5px 0 0 -5px;border: 2px solid var(--ui-md-card);border-radius: 50%;background: var(--ui-md-accent);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);pointer-events: none}.ui-md__dot--prev{background: var(--ui-md-prev)}.ui-md__tip{position: absolute;top: 6px;z-index: 2;display: grid;gap: 4px;min-width: 150px;padding: 9px 11px;border-radius: 10px;background: var(--ui-md-tip);box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);font-size: 12px;color: var(--ui-md-tip-text);pointer-events: none}.ui-md__tip[data-side="right"]{transform: translateX(14px)}.ui-md__tip[data-side="left"]{transform: translateX(calc(-100% - 14px))}.ui-md__tip-date{font-size: 11.5px;opacity: 0.6}.ui-md__tip-row{display: flex;align-items: center;gap: 7px}.ui-md__tip-row i{width: 8px;height: 8px;border-radius: 50%;background: var(--ui-md-accent)}.ui-md__tip-row--prev i{background: var(--ui-md-prev)}.ui-md__tip-row b{margin-left: auto;padding-left: 12px;font-weight: 600;font-variant-numeric: tabular-nums}.ui-md__dates{position: relative;grid-column: 2;height: 26px;font-size: 11px;color: var(--ui-md-muted)}.ui-md__dates span{position: absolute;top: 9px;transform: translateX(-50%);white-space: nowrap}.ui-md__dates span[data-start]{transform: none}.ui-md__dates span[data-end]{transform: translateX(-100%)}.ui-md__lists{display: grid;grid-template-columns: 1fr 1fr}.ui-md__list{min-width: 0;padding: 14px 12px 12px}.ui-md__list + .ui-md__list{border-left: 1px solid var(--ui-md-line)}.ui-md__list-head{display: flex;justify-content: space-between;padding: 0 8px 8px;font-size: 12.5px;font-weight: 500}.ui-md__list-head span + span{font-weight: 400;color: var(--ui-md-muted)}.ui-md__list ul{display: grid;gap: 2px;margin: 0;padding: 0;list-style: none}.ui-md__row{position: relative;display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 8px;font-size: 13px}.ui-md__row-bar{position: absolute;inset: 0 auto 0 0;border-radius: 8px;background: var(--ui-md-bar);transition: width 600ms var(--ui-md-ease)}.ui-md__row-name{position: relative;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-md-text)}.ui-md__row-value{position: relative;font-variant-numeric: tabular-nums;color: var(--ui-md-ink)}@keyframes ui-md-reveal{from{clip-path: inset(-10% 100% -10% 0)}to{clip-path: inset(-10% -1% -10% 0)}}@keyframes ui-md-fade{from{opacity: 0}}@keyframes ui-md-pop{from{transform: scale(0)}}@keyframes ui-md-grow{from{transform: scaleY(0)}}@container (max-width: 640px){.ui-md__kpis{grid-template-columns: 1fr 1fr}.ui-md__lists{grid-template-columns: 1fr}.ui-md__list + .ui-md__list{border-left: 0;border-top: 1px solid var(--ui-md-line)}.ui-md__compare{font-size: 0;gap: 0}.ui-md__compare::after{content: "Compare";font-size: 12.5px;margin-left: 8px}}@container (max-width: 460px){.ui-md__bar{flex-wrap: wrap;padding: 12px 4px 12px 10px}.ui-md__actions{width: 100%}.ui-md__range{flex: 1;grid-template-columns: repeat(3, 1fr)}.ui-md__range-thumb{width: calc((100% - 6px) / 3)}.ui-md__kpi{padding: 12px 14px}.ui-md__kpi-value{font-size: 20px}.ui-md__chart{padding: 14px 12px 10px}.ui-md__plot-wrap{grid-template-rows: 168px auto}.ui-md__dates span:nth-child(even){display: none}}@media (prefers-reduced-motion: reduce){.ui-md__range-thumb, .ui-md__kind-thumb, .ui-md__kpi, .ui-md__row-bar, .ui-md__switch::after{transition: none}.ui-md__series, .ui-md__prev, .ui-md__dots span, .ui-md__col{animation: none}}.ui-md input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-md textarea:focus-visible, .ui-md [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-md{--ui-md-tray: #161618;--ui-md-card: #232326;--ui-md-card-line: rgba(255, 255, 255, 0.08);--ui-md-line: rgba(255, 255, 255, 0.07);--ui-md-ink: #ededed;--ui-md-text: #c4c4c4;--ui-md-muted: #8f8f8f;--ui-md-accent: #4d82ff;--ui-md-area: rgba(77, 130, 255, 0.2);--ui-md-prev: #5c5c61;--ui-md-good: #3fbf74;--ui-md-good-bg: rgba(63, 191, 116, 0.14);--ui-md-bad: #f2777b;--ui-md-bad-bg: rgba(242, 119, 123, 0.14);--ui-md-bar: rgba(77, 130, 255, 0.12);--ui-md-chip: #2a2a2d;--ui-md-thumb: #313135;--ui-md-hover: rgba(255, 255, 255, 0.04);--ui-md-tip: #ededed;--ui-md-tip-text: #121213;--ui-md-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-md__range, :where(.dark, [data-theme="dark"]) .ui-md__kind{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-md__switch{background: #3a3a3e}`;
var width = 880;
function XComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(null);
  n3.useLayoutEffect(() => {
    let eRef_current = eRef.current;
    let n4 = eRef_current?.closest(`.card__preview`);
    let r2 = n4 ?? eRef_current?.closest(`.stage`);
    if (!eRef_current || !r2) {
      return;
    }
    let a2 = () => {
      let r_clientWidth = r2.clientWidth;
      if (n4) {
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
    a2();
    let o2 = new ResizeObserver(a2);
    o2.observe(r2);
    return () => o2.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `metrics-demo`, "data-fit": t ? t.card ? `card` : `stage` : void 0, children: /* @__PURE__ */ jsx("div", { className: `metrics-demo__frame`, style: t ? t.card ? {
    width,
    transform: `scale(${t.scale})`
  } : {
    width,
    zoom: t.scale
  } : void 0, children: /* @__PURE__ */ jsx(Component, {}) }) });
}

export {
  XComponent
};
