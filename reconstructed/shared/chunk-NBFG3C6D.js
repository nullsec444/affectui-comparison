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

// reconstructed/demo-mNpCRsfS.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => e.reduce((acc, item) => acc + item, 0);
var a = (e) => new Intl.NumberFormat(`en-US`, {
  maximumFractionDigits: 0
}).format(Math.round(e));
var o = (e) => `$${new Intl.NumberFormat(`en-US`, {
  minimumFractionDigits: Math.abs(e) < 1e4 ? 2 : 0,
  maximumFractionDigits: Math.abs(e) < 1e4 ? 2 : 0
}).format(e)}`;
var s = (e) => 1 - (1 - e) ** 4;
var c = (e, t, n4) => e + (t - e) * n4;
var l = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function u(e, t) {
  if (!e || e.length === 0) {
    return Array(t).fill(0);
  }
  if (e.length === 1) {
    return Array(t).fill(e[0]);
  }
  return Array.from({
    length: t
  }, (n4, r2) => {
    let i2 = r2 / (t - 1) * (e.length - 1);
    let a2 = Math.floor(i2);
    let o2 = Math.min(e.length - 1, a2 + 1);
    return c(e[a2], e[o2], i2 - a2);
  });
}
function d(e, t, n4, r2 = 6, i2 = 94) {
  let a2 = n4 - t || 1;
  let pts = e.map((n5, o2) => [o2 / Math.max(1, e.length - 1) * 100, i2 - (n5 - t) / a2 * (i2 - r2)]);
  let line = pts.map((e2, t2) => `${t2 ? `L` : `M`}${e2[0].toFixed(2)},${e2[1].toFixed(2)}`).join(``);
  return {
    pts,
    line,
    area: `${line}L100,100L0,100Z`
  };
}
var f = (pts, t, n4) => pts[Math.round(t / Math.max(1, n4 - 1) * (pts.length - 1))];
function useP(e, t, r2 = 760) {
  let iRef = n3.useRef(null);
  let aRef = n3.useRef(e);
  let oRef = n3.useRef(null);
  let [c2, setC] = n3.useState({
    key: null,
    t: 0
  });
  if (oRef.current !== t) {
    if (oRef.current !== null) {
      iRef.current = aRef.current;
    }
    oRef.current = t;
  }
  aRef.current = e;
  n3.useEffect(() => {
    if (l()) {
      return setC({
        key: t,
        t: 1
      });
    }
    let e2 = performance.now();
    let n4 = 0;
    let i2 = (a2) => {
      let o2 = Math.min(1, (a2 - e2) / r2);
      setC({
        key: t,
        t: s(o2)
      });
      if (o2 < 1) {
        n4 = requestAnimationFrame(i2);
      }
    };
    n4 = requestAnimationFrame(i2);
    return () => cancelAnimationFrame(n4);
  }, [t, r2]);
  return {
    from: iRef.current,
    t: c2.key === t ? c2.t : 0
  };
}
var EeComponent = () => /* @__PURE__ */ jsx("svg", { width: `10`, height: `10`, viewBox: `0 0 10 10`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m2.5 3.8 2.5 2.5 2.5-2.5`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round` }) });
var M1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m2.6 6.3 2.2 2.2 4.6-5`, stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round` }) });
var H1Component = () => /* @__PURE__ */ jsxs("svg", { width: `13`, height: `13`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M2 4.2h5.2M10.2 4.2H12M2 9.8h1.8M6.8 9.8H12`, stroke: `currentColor`, strokeWidth: `1.3`, strokeLinecap: `round` }),
  /* @__PURE__ */ jsx("circle", { cx: `8.7`, cy: `4.2`, r: `1.5`, stroke: `currentColor`, strokeWidth: `1.3` }),
  /* @__PURE__ */ jsx("circle", { cx: `5.3`, cy: `9.8`, r: `1.5`, stroke: `currentColor`, strokeWidth: `1.3` })
] });
var TeComponent = () => /* @__PURE__ */ jsxs("svg", { width: `16`, height: `16`, viewBox: `0 0 16 16`, fill: `none`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M8 1.9 13.3 4.8v6.4L8 14.1 2.7 11.2V4.8L8 1.9Z`, stroke: `currentColor`, strokeWidth: `1.3`, strokeLinejoin: `round` }),
  /* @__PURE__ */ jsx("path", { d: `M2.9 4.9 8 7.7l5.1-2.8M8 7.7V14`, stroke: `currentColor`, strokeWidth: `1.3`, strokeLinejoin: `round` })
] });
function G1Component({
  up,
  good,
  children
}) {
  return /* @__PURE__ */ jsxs("span", { className: `ui-kb__change`, "data-good": good ? `` : void 0, children: [
    /* @__PURE__ */ jsx("svg", { width: `8`, height: `8`, viewBox: `0 0 8 8`, "aria-hidden": `true`, style: up ? void 0 : {
      transform: `scaleY(-1)`
    }, children: /* @__PURE__ */ jsx("path", { d: `M4 1.2 7.2 6.4H.8L4 1.2Z`, fill: `currentColor` }) }),
    children
  ] });
}
function NeComponent({
  label,
  value,
  options,
  onChange
}) {
  let o2 = n3.useId();
  let sRef = n3.useRef(null);
  let [c2, setC] = n3.useState(false);
  let [u2, setU] = n3.useState(0);
  let f2 = Math.max(0, options.findIndex((e) => e.id === value));
  n3.useEffect(() => {
    if (!c2) {
      return;
    }
    let e = (e2) => {
      if (!sRef.current?.contains(e2.target)) {
        setC(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [c2]);
  let p = () => {
    setU(f2);
    setC(true);
  };
  let h = (e) => {
    setC(false);
    if (options[e] && options[e].id !== value) {
      onChange(options[e].id);
    }
    sRef.current?.querySelector(`button`)?.focus({
      preventScroll: true
    });
  };
  return /* @__PURE__ */ jsxs("div", { ref: sRef, className: `ui-kb__pick`, "data-open": c2 ? `` : void 0, onKeyDown: (e) => {
    if (!c2) {
      if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
        e.preventDefault();
        p();
      }
      return;
    }
    if (e.key === `Escape`) {
      e.preventDefault();
      e.stopPropagation();
      setC(false);
    } else if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
      e.preventDefault();
      setU((t) => (t + (e.key === `ArrowDown` ? 1 : -1) + options.length) % options.length);
    } else if (e.key === `Home` || e.key === `End`) {
      e.preventDefault();
      setU(e.key === `Home` ? 0 : options.length - 1);
    } else if (e.key === `Enter` || e.key === ` `) {
      e.preventDefault();
      h(u2);
    } else if (e.key === `Tab`) {
      setC(false);
    }
  }, children: [
    /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-kb__pick-button`, role: `combobox`, "aria-label": label, "aria-haspopup": `listbox`, "aria-expanded": c2, "aria-controls": `${o2}-list`, "aria-activedescendant": c2 ? `${o2}-${u2}` : void 0, onClick: () => {
      if (c2) {
        return setC(false);
      }
      return p();
    }, children: [
      /* @__PURE__ */ jsx("span", { children: options[f2]?.label }),
      /* @__PURE__ */ jsx(EeComponent, {})
    ] }),
    c2 && /* @__PURE__ */ jsx("ul", { id: `${o2}-list`, className: `ui-kb__menu`, role: `listbox`, "aria-label": label, children: options.map((e, t) => /* @__PURE__ */ jsxs("li", { id: `${o2}-${t}`, role: `option`, "aria-selected": t === f2, className: `ui-kb__option`, "data-active": t === u2 ? `` : void 0, onPointerEnter: () => setU(t), onClick: () => h(t), children: [
      /* @__PURE__ */ jsx("span", { children: e.label }),
      t === f2 && /* @__PURE__ */ jsx(M1Component, {})
    ] }, e.id)) })
  ] });
}
function ReComponent({
  data: data2,
  ranges: ranges2,
  range,
  defaultRange,
  onRangeChange,
  segments: segments2,
  segment,
  defaultSegment,
  onSegmentChange,
  compareLabel = `vs. last period`,
  currentLabel = `This period`,
  previousLabel = `Last period`,
  formatMoney = o,
  icon,
  title,
  setup,
  action,
  className
}) {
  let E = n3.useId().replace(/:/g, ``);
  let [se, setSe] = n3.useState(defaultRange ?? ranges2[0]?.id);
  let D = range ?? se ?? ranges2[0]?.id;
  let [le, setLe] = n3.useState(defaultSegment ?? segments2?.[0]?.id);
  let O = segment ?? le;
  let k = data2[D] ?? Object.values(data2)[0];
  let {
    from,
    t: t_1
  } = useP(k, D);
  let A = O && k.overview.segments?.[O] || k.overview;
  let pe = `${D}/${O ?? ``}`;
  let me = useP(i(A.current), pe);
  let j = (e) => c(from ? e(from) : 0, e(k), t_1);
  let M = (e, t) => {
    let n4 = e(k) ?? [];
    if (n4.length >= 2 && n4.length <= t) {
      return n4;
    }
    return u(n4, t);
  };
  let key = D;
  let P = (kind, t) => {
    if (kind === `count`) {
      return a(t);
    }
    return formatMoney(t);
  };
  let [F, setF] = n3.useState(null);
  let [L, setL] = n3.useState(null);
  let [z, setZ] = n3.useState(null);
  let V = (e) => {
    let t = (t2) => {
      let n5 = t2.currentTarget.getBoundingClientRect();
      e(Math.min(1, Math.max(0, (t2.clientX - n5.left) / n5.width)));
    };
    let n4 = (t2) => {
      if (t2.pointerType !== `mouse`) {
        e(null);
      }
    };
    return {
      onPointerDown: t,
      onPointerMove: t,
      onPointerUp: n4,
      onPointerCancel: n4,
      onPointerLeave: () => e(null)
    };
  };
  let he = (e) => {
    setSe(e);
    setF(null);
    setL(null);
    setZ(null);
    onRangeChange?.(e);
  };
  let ge = (e) => {
    setLe(e);
    setL(null);
    onSegmentChange?.(e);
  };
  let H = M(() => A.current, 72);
  let U = M(() => A.previous, 72);
  let _e = Math.max(...H, ...U, 1) * 1.06;
  let ve = Math.min(...H, ...U) * 0.82;
  let W = d(H, ve, _e);
  let ye = d(U, ve, _e);
  let be = c(me.from ?? 0, i(A.current), me.t);
  let G = i(A.previous) ? (i(A.current) - i(A.previous)) / i(A.previous) * 100 : 0;
  let K = L === null ? null : Math.round(L * (A.current.length - 1));
  let q = K === null ? null : f(W.pts, K, A.current.length);
  let J = K === null ? null : f(ye.pts, K, A.current.length);
  let Y = M((e) => e.focus.values, 48);
  let xe = Math.max(...Y, 1) * 1.05;
  let X = d(Y, Math.min(...Y) * 0.8, xe, 8, 92);
  let Se = j((e) => i(e.focus.values));
  let Z = k.focus.previous ? (i(k.focus.values) - k.focus.previous) / k.focus.previous * 100 : 0;
  let Q = z === null ? null : Math.round(z * (k.focus.values.length - 1));
  let $ = Q === null ? null : f(X.pts, Q, k.focus.values.length);
  return /* @__PURE__ */ jsxs("div", { className: [`ui-kb`, className].filter(Boolean).join(` `), children: [
    /* @__PURE__ */ jsx("style", { href: `ui-kpi-board`, precedence: `default`, children: ie }),
    /* @__PURE__ */ jsxs("div", { className: `ui-kb__bar`, children: [
      title && /* @__PURE__ */ jsx("h2", { className: `ui-kb__heading`, children: title }),
      /* @__PURE__ */ jsx(NeComponent, { label: `Date range`, value: D, options: ranges2, onChange: he })
    ] }),
    k.stats.map((e, t) => {
      let n4 = M((e2) => e2.stats[t]?.values, 48);
      let a2 = Math.max(...n4, 1) * 1.08;
      let o2 = d(n4, Math.min(...n4) * 0.75, a2, 10, 92);
      let s2 = j((e2) => i(e2.stats[t]?.values ?? []));
      let c2 = e.previous === void 0 ? null : i(e.values) - e.previous;
      let l2 = F?.id === e.id ? Math.round(F.at * (e.values.length - 1)) : null;
      let u2 = l2 === null ? null : f(o2.pts, l2, e.values.length);
      return /* @__PURE__ */ jsxs("section", { className: `ui-kb__card ui-kb__stat`, "aria-label": e.label, style: {
        "--n": t
      }, children: [
        /* @__PURE__ */ jsxs("header", { className: `ui-kb__row`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-kb__pair`, children: [
            /* @__PURE__ */ jsx("b", { children: P(e.kind, s2) }),
            /* @__PURE__ */ jsx("span", { children: e.label })
          ] }),
          c2 !== null && /* @__PURE__ */ jsxs("span", { className: `ui-kb__pair ui-kb__pair--end`, children: [
            c2 === 0 ? /* @__PURE__ */ jsx("b", { children: `0` }) : /* @__PURE__ */ jsx(G1Component, { up: c2 > 0, good: e.lowerIsBetter ? c2 < 0 : c2 > 0, children: P(e.kind, Math.abs(c2)) }),
            /* @__PURE__ */ jsx("span", { children: compareLabel })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-kb__plot ui-kb__plot--small`, ...V((at) => setF(at === null ? null : {
          id: e.id,
          at
        })), children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 100 100`, preserveAspectRatio: `none`, "aria-hidden": `true`, children: [
            /* @__PURE__ */ jsx("path", { className: `ui-kb__fill`, d: o2.area }),
            /* @__PURE__ */ jsx("path", { className: `ui-kb__line`, d: o2.line })
          ] }, key),
          u2 && l2 !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: `ui-kb__rule`, style: {
              left: `${u2[0]}%`,
              top: `${u2[1]}%`
            } }),
            /* @__PURE__ */ jsx("span", { className: `ui-kb__dot`, style: {
              left: `${u2[0]}%`,
              top: `${u2[1]}%`
            } }),
            /* @__PURE__ */ jsxs("span", { className: `ui-kb__tag`, "data-side": u2[0] > 62 ? `left` : `right`, style: {
              left: `${u2[0]}%`,
              top: `${u2[1]}%`
            }, children: [
              /* @__PURE__ */ jsx("span", { children: e.labels[l2] }),
              /* @__PURE__ */ jsx("b", { children: P(e.kind, e.values[l2]) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-kb__axis`, "aria-hidden": `true`, children: [
          /* @__PURE__ */ jsx("span", { children: e.labels[0] }),
          /* @__PURE__ */ jsx("span", { children: e.labels[e.labels.length - 1] }),
          u2 && l2 !== null && /* @__PURE__ */ jsx("span", { className: `ui-kb__axis-tag`, style: {
            left: `${Math.min(88, Math.max(12, u2[0]))}%`
          }, children: e.labels[l2] })
        ] })
      ] }, e.id);
    }),
    /* @__PURE__ */ jsxs("section", { className: `ui-kb__card ui-kb__overview`, "aria-label": k.overview.title, style: {
      "--n": 3
    }, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-kb__row ui-kb__row--top`, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: `ui-kb__label`, children: k.overview.title }),
          /* @__PURE__ */ jsxs("div", { className: `ui-kb__figure`, children: [
            /* @__PURE__ */ jsx("b", { children: formatMoney(be) }),
            /* @__PURE__ */ jsxs("span", { className: `ui-kb__vs`, children: [
              /* @__PURE__ */ jsxs("i", { "data-good": G >= 0 ? `` : void 0, children: [
                G >= 0 ? `+` : `\u2212`,
                Math.abs(G).toFixed(1),
                `%`
              ] }),
              ` `,
              compareLabel
            ] })
          ] })
        ] }),
        segments2 && O && /* @__PURE__ */ jsx(NeComponent, { label: `Segment`, value: O, options: segments2, onChange: ge })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-kb__plot ui-kb__plot--large`, ...V(setL), children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 100 100`, preserveAspectRatio: `none`, "aria-hidden": `true`, children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: `${E}-fade`, x1: `0`, y1: `0`, x2: `0`, y2: `1`, children: [
            /* @__PURE__ */ jsx("stop", { offset: `0`, stopColor: `var(--ui-kb-accent)`, stopOpacity: `0.14` }),
            /* @__PURE__ */ jsx("stop", { offset: `1`, stopColor: `var(--ui-kb-accent)`, stopOpacity: `0` })
          ] }) }),
          Array.from({
            length: 19
          }, (e, t) => /* @__PURE__ */ jsx("path", { className: `ui-kb__grid`, d: `M${(t / 18 * 100).toFixed(2)},0V100` }, t)),
          /* @__PURE__ */ jsx("path", { d: W.area, fill: `url(#${E}-fade)` }),
          /* @__PURE__ */ jsx("path", { className: `ui-kb__line ui-kb__line--soft`, d: ye.line }),
          /* @__PURE__ */ jsx("path", { className: `ui-kb__line`, d: W.line })
        ] }, pe),
        q && J && K !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: `ui-kb__rule`, style: {
            left: `${q[0]}%`,
            top: 0
          } }),
          /* @__PURE__ */ jsx("span", { className: `ui-kb__dot ui-kb__dot--soft`, style: {
            left: `${J[0]}%`,
            top: `${J[1]}%`
          } }),
          /* @__PURE__ */ jsx("span", { className: `ui-kb__dot`, style: {
            left: `${q[0]}%`,
            top: `${q[1]}%`
          } }),
          /* @__PURE__ */ jsxs("div", { className: `ui-kb__tip`, "data-side": q[0] > 58 ? `left` : `right`, style: {
            left: `${q[0]}%`,
            top: `${Math.min(q[1], J[1])}%`
          }, children: [
            /* @__PURE__ */ jsxs("div", { className: `ui-kb__tip-head`, children: [
              /* @__PURE__ */ jsx("span", { children: k.overview.labels[K] }),
              /* @__PURE__ */ jsx("b", { children: formatMoney(A.current[K] + (A.previous[K] ?? 0)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `ui-kb__tip-row`, children: [
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("span", { children: currentLabel }),
              /* @__PURE__ */ jsx("b", { children: formatMoney(A.current[K]) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `ui-kb__tip-row`, "data-soft": ``, children: [
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("span", { children: previousLabel }),
              /* @__PURE__ */ jsx("b", { children: formatMoney(A.previous[K] ?? 0) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-kb__axis`, "aria-hidden": `true`, children: [
        /* @__PURE__ */ jsx("span", { children: k.overview.labels[0] }),
        /* @__PURE__ */ jsx("span", { children: k.overview.labels[k.overview.labels.length - 1] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: `ui-kb__card ui-kb__focus`, "aria-label": k.focus.title, style: {
      "--n": 4
    }, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-kb__row ui-kb__row--top`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-kb__product`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-kb__icon`, children: icon ?? /* @__PURE__ */ jsx(TeComponent, {}) }),
          /* @__PURE__ */ jsxs("span", { className: `ui-kb__pair`, children: [
            /* @__PURE__ */ jsx("b", { children: k.focus.title }),
            k.focus.note && /* @__PURE__ */ jsx("span", { children: k.focus.note })
          ] })
        ] }),
        setup && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-kb__setup`, onClick: setup.onClick, children: [
          /* @__PURE__ */ jsx(H1Component, {}),
          setup.label
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-kb__label`, children: k.focus.metric }),
      /* @__PURE__ */ jsxs("div", { className: `ui-kb__figure ui-kb__figure--small`, children: [
        /* @__PURE__ */ jsxs("b", { children: [
          a(Q === null ? Se : k.focus.values[Q]),
          k.focus.unit ? ` ${k.focus.unit}` : ``
        ] }),
        /* @__PURE__ */ jsx("span", { className: `ui-kb__vs`, children: Q === null ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(G1Component, { up: Z >= 0, good: Z >= 0, children: [
            Math.abs(Z).toFixed(0),
            `%`
          ] }),
          ` `,
          compareLabel
        ] }) : k.focus.labels[Q] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-kb__plot ui-kb__plot--small`, ...V(setZ), children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 100 100`, preserveAspectRatio: `none`, "aria-hidden": `true`, children: [
          /* @__PURE__ */ jsx("path", { className: `ui-kb__fill`, d: X.area }),
          /* @__PURE__ */ jsx("path", { className: `ui-kb__line`, d: X.line })
        ] }, key),
        $ && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: `ui-kb__rule`, style: {
            left: `${$[0]}%`,
            top: `${$[1]}%`
          } }),
          /* @__PURE__ */ jsx("span", { className: `ui-kb__dot`, style: {
            left: `${$[0]}%`,
            top: `${$[1]}%`
          } })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-kb__legend`, children: [
        /* @__PURE__ */ jsx("span", { children: previousLabel }),
        /* @__PURE__ */ jsx("b", { "data-soft": ``, children: a(j((e) => e.focus.previous)) }),
        /* @__PURE__ */ jsx("span", { children: currentLabel }),
        /* @__PURE__ */ jsx("b", { children: a(Se) })
      ] }),
      action && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-kb__action`, onClick: action.onClick, children: action.label })
    ] })
  ] });
}
var ie = `.ui-kb{--ui-kb-card: #ffffff;--ui-kb-line: #e7e7ea;--ui-kb-ink: #26262b;--ui-kb-text: #55555c;--ui-kb-muted: #96969e;--ui-kb-well: #f6f6f8;--ui-kb-rule: #a4a4ac;--ui-kb-accent: #2f6bff;--ui-kb-soft: #a9c4ff;--ui-kb-good: #12a36b;--ui-kb-bad: #d6453d;--ui-kb-tip: #1c1c20;--ui-kb-focus: rgba(23, 23, 23, 0.22);--ui-kb-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;display: grid;grid-template-columns: repeat(6, minmax(0, 1fr));gap: 8px;width: 100%;min-width: 0;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 20px;color: var(--ui-kb-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-kb *, .ui-kb *::before, .ui-kb *::after{box-sizing: border-box}:where(.ui-kb) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-kb button:focus-visible{outline: 2px solid var(--ui-kb-focus);outline-offset: 2px}.ui-kb svg{display: block}.ui-kb b{font-weight: 600;color: var(--ui-kb-ink)}.ui-kb i{font-style: normal}.ui-kb__bar{grid-column: 1 / -1;display: flex;align-items: center;justify-content: flex-end;gap: 12px;min-height: 30px}.ui-kb__heading{flex: 1;min-width: 0;margin: 0;overflow: hidden;font-size: 17px;font-weight: 600;line-height: 24px;letter-spacing: -0.01em;color: var(--ui-kb-ink);white-space: nowrap;text-overflow: ellipsis}.ui-kb__card{grid-column: span 2;display: flex;flex-direction: column;min-width: 0;padding: 16px 16px 14px;border: 1px solid var(--ui-kb-line);border-radius: 12px;background: var(--ui-kb-card);box-shadow: 0 1px 2px rgba(16, 16, 24, 0.04);animation: ui-kb-rise 620ms var(--ui-kb-ease) both;animation-delay: calc(var(--n) * 60ms)}.ui-kb__overview{grid-column: span 4}.ui-kb__focus{padding-bottom: 16px}.ui-kb__row{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px;min-width: 0}.ui-kb__pair{display: grid;min-width: 0;font-variant-numeric: tabular-nums}.ui-kb__pair > *{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-kb__pair b{font-size: 14px}.ui-kb__pair span{color: var(--ui-kb-muted)}.ui-kb__pair--end{justify-items: end;flex: none;text-align: right}.ui-kb__change{display: inline-flex;align-items: center;gap: 5px;font-size: 14px;font-weight: 600;color: var(--ui-kb-bad);font-variant-numeric: tabular-nums}.ui-kb__change[data-good]{color: var(--ui-kb-good)}.ui-kb__plot{position: relative;margin-top: 14px;border-bottom: 1px solid var(--ui-kb-line);cursor: crosshair;touch-action: pan-y}.ui-kb__plot--small{height: 64px}.ui-kb__plot--large{flex: 1;min-height: 190px;margin-top: 16px;border-bottom: 0}.ui-kb__plot svg{position: absolute;inset: 0;width: 100%;height: 100%;overflow: visible;animation: ui-kb-draw 1100ms var(--ui-kb-ease) both;animation-delay: calc(120ms + var(--n) * 60ms)}.ui-kb__line{fill: none;stroke: var(--ui-kb-accent);stroke-width: 1.5;stroke-linejoin: miter;stroke-linecap: round;vector-effect: non-scaling-stroke}.ui-kb__line--soft{stroke: var(--ui-kb-soft)}.ui-kb__fill{fill: var(--ui-kb-well)}.ui-kb__grid{fill: none;stroke: var(--ui-kb-line);stroke-width: 1;stroke-dasharray: 4 4;vector-effect: non-scaling-stroke}.ui-kb__axis{position: relative;display: flex;justify-content: space-between;height: 16px;margin-top: 8px;font-size: 12px;line-height: 16px;color: var(--ui-kb-muted);white-space: nowrap}.ui-kb__rule{position: absolute;bottom: 0;width: 0;margin-left: -0.5px;border-left: 1px dashed var(--ui-kb-rule);pointer-events: none}.ui-kb__dot{position: absolute;z-index: 1;width: 8px;height: 8px;margin: -4px 0 0 -4px;border: 1.5px solid var(--ui-kb-accent);border-radius: 50%;background: var(--ui-kb-card);pointer-events: none}.ui-kb__dot--soft{border-color: var(--ui-kb-soft)}.ui-kb__tag{position: absolute;z-index: 2;display: inline-flex;gap: 12px;height: 24px;padding: 0 8px;border: 1px solid var(--ui-kb-line);border-radius: 6px;background: var(--ui-kb-card);box-shadow: 0 2px 6px rgba(16, 16, 24, 0.06);font-size: 12px;line-height: 22px;color: var(--ui-kb-text);white-space: nowrap;pointer-events: none;transform: translate(10px, -130%);font-variant-numeric: tabular-nums;animation: ui-kb-in 160ms ease both}.ui-kb__tag[data-side="left"]{transform: translate(calc(-100% - 10px), -130%)}.ui-kb__tag b{font-weight: 500;color: var(--ui-kb-accent)}.ui-kb__axis-tag{position: absolute;top: -4px;height: 22px;padding: 0 7px;border: 1px solid var(--ui-kb-line);border-radius: 6px;background: var(--ui-kb-card);line-height: 20px;color: var(--ui-kb-ink);transform: translateX(-50%)}.ui-kb__row--top{padding-bottom: 14px;border-bottom: 1px solid var(--ui-kb-line)}.ui-kb__label{font-size: 13px;color: var(--ui-kb-text)}.ui-kb__figure{display: flex;flex-wrap: wrap;align-items: baseline;gap: 2px 10px;margin-top: 4px;font-variant-numeric: tabular-nums}.ui-kb__figure b{font-size: 24px;line-height: 30px;letter-spacing: -0.02em}.ui-kb__figure--small b{font-size: 19px;line-height: 26px}.ui-kb__vs{display: inline-flex;align-items: baseline;gap: 5px;font-size: 13px;color: var(--ui-kb-muted);white-space: nowrap}.ui-kb__vs i{font-weight: 600;color: var(--ui-kb-bad)}.ui-kb__vs i[data-good]{color: var(--ui-kb-good)}.ui-kb__vs .ui-kb__change{font-size: 13px}.ui-kb__pick{position: relative;flex: none}.ui-kb__pick-button{display: inline-flex;align-items: center;gap: 8px;height: 30px;padding: 0 9px 0 11px;border: 1px solid var(--ui-kb-line);border-radius: 8px;background: var(--ui-kb-card);box-shadow: 0 1px 1px rgba(16, 16, 24, 0.04);font-size: 12.5px;color: var(--ui-kb-ink);white-space: nowrap;transition: border-color 160ms ease, background-color 160ms ease}.ui-kb__pick-button:hover, .ui-kb__pick[data-open] .ui-kb__pick-button{border-color: #cfcfd6}.ui-kb__pick[data-open] .ui-kb__pick-button{background: var(--ui-kb-well)}.ui-kb__pick-button svg{color: var(--ui-kb-muted);transition: transform 240ms var(--ui-kb-ease)}.ui-kb__pick[data-open] .ui-kb__pick-button svg{transform: rotate(180deg)}.ui-kb__menu{position: absolute;top: calc(100% + 6px);right: 0;z-index: 10;min-width: max(100%, 148px);margin: 0;padding: 4px;border: 1px solid var(--ui-kb-line);border-radius: 10px;background: var(--ui-kb-card);box-shadow: 0 10px 28px rgba(16, 16, 24, 0.1), 0 2px 6px rgba(16, 16, 24, 0.05);list-style: none;transform-origin: 100% 0;animation: ui-kb-menu 200ms var(--ui-kb-ease) both}.ui-kb__option{display: flex;align-items: center;justify-content: space-between;gap: 14px;height: 30px;padding: 0 8px 0 9px;border-radius: 7px;font-size: 12.5px;color: var(--ui-kb-text);white-space: nowrap;cursor: pointer}.ui-kb__option[data-active]{background: var(--ui-kb-well);color: var(--ui-kb-ink)}.ui-kb__option[aria-selected="true"]{font-weight: 500;color: var(--ui-kb-ink)}.ui-kb__option svg{color: var(--ui-kb-accent)}.ui-kb__tip{position: absolute;z-index: 3;min-width: 168px;padding: 9px 11px 10px;border-radius: 8px;background: var(--ui-kb-tip);box-shadow: 0 8px 24px rgba(16, 16, 24, 0.18);font-size: 12.5px;line-height: 20px;color: rgba(255, 255, 255, 0.72);pointer-events: none;transform: translate(14px, calc(-100% - 12px));font-variant-numeric: tabular-nums;animation: ui-kb-in 160ms ease both}.ui-kb__tip[data-side="left"]{transform: translate(calc(-100% - 14px), calc(-100% - 12px))}.ui-kb__tip b{font-weight: 500;color: #fff}.ui-kb__tip-head{display: flex;justify-content: space-between;gap: 16px;margin-bottom: 6px;color: #fff}.ui-kb__tip-head b{color: #4ade9b}.ui-kb__tip-row{display: flex;align-items: center;gap: 7px}.ui-kb__tip-row span{flex: 1}.ui-kb__tip-row i{width: 7px;height: 7px;border: 1.5px solid #7ea2ff;border-radius: 50%}.ui-kb__tip-row[data-soft] i{border-color: #5a6a96}.ui-kb__focus .ui-kb__row--top{align-items: center;min-height: 69px;margin-bottom: 16px}.ui-kb__focus .ui-kb__plot--small{flex: 1;min-height: 64px;margin-top: 16px}.ui-kb__product{display: flex;align-items: center;gap: 12px;min-width: 0}.ui-kb__product b{font-size: 14.5px;font-weight: 500}.ui-kb__icon{display: grid;flex: none;place-items: center;width: 36px;height: 36px;border: 1px solid var(--ui-kb-line);border-radius: 9px;box-shadow: 0 1px 1px rgba(16, 16, 24, 0.04);color: var(--ui-kb-text)}.ui-kb__focus .ui-kb__label{font-size: 12.5px;color: var(--ui-kb-muted)}.ui-kb__legend{display: flex;flex-wrap: wrap;align-items: baseline;gap: 2px 8px;margin-top: 12px;font-size: 12.5px;color: var(--ui-kb-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-kb__legend b{margin-right: 6px;font-weight: 500;color: var(--ui-kb-accent)}.ui-kb__legend b[data-soft]{color: var(--ui-kb-soft)}.ui-kb__setup{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 30px;padding: 0 11px 0 9px;border: 1px solid var(--ui-kb-line);border-radius: 8px;background: var(--ui-kb-card);box-shadow: 0 1px 1px rgba(16, 16, 24, 0.04);font-size: 12.5px;color: var(--ui-kb-ink);white-space: nowrap;transition: border-color 160ms ease, background-color 160ms ease}.ui-kb__setup:hover{border-color: #cfcfd6;background: var(--ui-kb-well)}.ui-kb__setup svg{color: var(--ui-kb-muted)}.ui-kb__action{height: 34px;margin-top: auto;border: 1px solid var(--ui-kb-line);border-radius: 8px;background: var(--ui-kb-card);box-shadow: 0 1px 2px rgba(16, 16, 24, 0.06);font-size: 13px;font-weight: 500;color: var(--ui-kb-ink);transition: background-color 160ms ease}.ui-kb__legend + .ui-kb__action{margin-top: 16px}.ui-kb__action:hover{background: var(--ui-kb-well)}@keyframes ui-kb-rise{from{opacity: 0;transform: translateY(8px)}}@keyframes ui-kb-draw{from{clip-path: inset(0 100% 0 0)}to{clip-path: inset(-8px -8px -8px -8px)}}@keyframes ui-kb-in{from{opacity: 0}}@keyframes ui-kb-menu{from{opacity: 0;transform: translateY(-4px) scale(0.97)}}@container (max-width: 820px){.ui-kb__overview, .ui-kb__focus{grid-column: span 6}.ui-kb__stat .ui-kb__row{flex-direction: column;gap: 2px}.ui-kb__stat .ui-kb__pair--end{justify-items: start;text-align: left}.ui-kb__stat .ui-kb__change{font-size: 12.5px}.ui-kb__stat .ui-kb__pair--end > span:last-child{display: none}}@container (max-width: 600px){.ui-kb{gap: 8px}.ui-kb__card{grid-column: span 6}.ui-kb__stat .ui-kb__row{flex-direction: row;gap: 12px}.ui-kb__stat .ui-kb__pair--end{justify-items: end;text-align: right}.ui-kb__stat .ui-kb__change{font-size: 14px}.ui-kb__stat .ui-kb__pair--end > span:last-child{display: block}.ui-kb__row--top{flex-wrap: wrap}.ui-kb__plot--large{min-height: 160px}}@media (pointer: coarse){.ui-kb__pick-button, .ui-kb__setup{height: 36px}.ui-kb__option{height: 38px}.ui-kb__action{height: 40px}}@media (prefers-reduced-motion: reduce){.ui-kb *, .ui-kb *::before, .ui-kb *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-kb{--ui-kb-card: #19191b;--ui-kb-line: #2a2a2e;--ui-kb-ink: #ededed;--ui-kb-text: #b9b9bf;--ui-kb-muted: #84848c;--ui-kb-well: #202024;--ui-kb-rule: #6a6a72;--ui-kb-accent: #5b8cff;--ui-kb-soft: #37508f;--ui-kb-good: #4ade9b;--ui-kb-bad: #ff8f86;--ui-kb-tip: #2c2c32;--ui-kb-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-kb__pick-button:hover, :where(.dark, [data-theme="dark"]) .ui-kb__pick[data-open] .ui-kb__pick-button{border-color: #45454c}:where(.dark, [data-theme="dark"]) .ui-kb__menu{box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5)}`;
var width = 960;
var ranges = [{
  id: `7d`,
  label: `Last 7 days`
}, {
  id: `30d`,
  label: `Last 30 days`
}, {
  id: `90d`,
  label: `Last 90 days`
}];
var segments = [{
  id: `all`,
  label: `All items`
}, {
  id: `pro`,
  label: `Pro`
}, {
  id: `team`,
  label: `Team`
}];
var b = (e) => {
  let t = e;
  return () => {
    t = (t * 9301 + 49297) % 233280;
    return t / 233280;
  };
};
var x = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
var S = new Date(2026, 9, 12);
var ae = (e, t) => Array.from({
  length: e
}, (n4, r2) => {
  if (r2 === e - 1) {
    return `Today`;
  }
  let i2 = new Date(S.getTime() - (e - 1 - r2) * t * 864e5);
  return `${i2.getDate()} ${x[i2.getMonth()]}`;
});
var C = (e, t, n4, r2, i2) => {
  let a2 = b(i2);
  let o2 = 0;
  return Array.from({
    length: e
  }, (i3, s2) => {
    let c2 = a2();
    if (c2 > 0.22) {
      o2 = o2 * 0.45 + (a2() - 0.5) * r2 * 0.5;
    }
    let l2 = c2 > 0.92 ? r2 * 0.22 : c2 < 0.06 ? -r2 * 0.18 : 0;
    return Math.max(0, Math.round(t * (1 + n4 * s2 / e + o2 + l2)));
  });
};
function w(e, t, n4, r2) {
  let labels = ae(e, t);
  let a2 = C(e, 156 * t * n4, 0.5, 0.5, r2);
  let o2 = C(e, 24 * t * n4, 0.45, 0.5, r2 + 4);
  return {
    stats: [{
      id: `revenue`,
      label: `Total revenue`,
      kind: `money`,
      labels,
      values: a2,
      previous: Math.round(a2.reduce((acc, item) => acc + item, 0) * 0.83)
    }, {
      id: `emails`,
      label: `Emails sent`,
      kind: `count`,
      labels,
      values: C(e, 1620 * t * n4, 0.1, 0.7, r2 + 2),
      previous: Math.round(1540 * t * e * n4)
    }, {
      id: `refunds`,
      label: `Refunds`,
      kind: `count`,
      labels,
      values: C(e, Math.max(3, 4 * t) * n4, -0.3, 1.5, r2 + 3),
      previous: Math.round(Math.max(3, 4 * t) * 1.2 * e * n4),
      lowerIsBetter: true
    }],
    overview: {
      title: `Sales overview`,
      labels,
      current: C(e, 122 * t * n4, 0.9, 0.42, r2 + 1),
      previous: C(e, 98 * t * n4, 0.45, 0.3, r2 + 7)
    },
    focus: {
      title: `Pro license`,
      note: `One-time`,
      metric: `Licenses sold`,
      unit: `licenses`,
      labels,
      values: o2,
      previous: Math.round(o2.reduce((acc, item) => acc + item, 0) * 0.89)
    }
  };
}
function T(e, t, n4) {
  let r2 = w(e, t, 1, n4);
  let overview = w(e, t, 0.64, n4 + 1).overview;
  let overview_1 = w(e, t, 0.36, n4 + 2).overview;
  return {
    ...r2,
    overview: {
      ...r2.overview,
      segments: {
        pro: {
          current: overview.current,
          previous: overview.previous
        },
        team: {
          current: overview_1.current,
          previous: overview_1.previous
        }
      }
    }
  };
}
var data = {
  "7d": T(21, 1 / 3, 11),
  "30d": T(30, 1, 23),
  "90d": T(45, 2, 37)
};
function EComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(null);
  let [range, setRange] = n3.useState(`30d`);
  let sRef = n3.useRef(false);
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
        scale: Math.min(0.82, (r_clientWidth - 168) / width),
        card: false
      });
    };
    a2();
    let o2 = new ResizeObserver(a2);
    o2.observe(r2);
    return () => o2.disconnect();
  }, []);
  n3.useEffect(() => {
    let e = window.setInterval(() => {
      if (!sRef.current) {
        setRange((e2) => ranges[(ranges.findIndex((t2) => t2.id === e2) + 1) % ranges.length].id);
      }
    }, 3600);
    return () => window.clearInterval(e);
  }, []);
  let c2 = () => sRef.current = true;
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `kb-demo`, "data-fit": t ? t.card ? `card` : `stage` : void 0, onPointerEnter: c2, onPointerDownCapture: c2, onKeyDownCapture: c2, onFocusCapture: c2, children: /* @__PURE__ */ jsx("div", { className: `kb-demo__frame`, style: t ? t.card ? {
    width,
    transform: `scale(${t.scale})`
  } : {
    width,
    zoom: t.scale
  } : void 0, children: /* @__PURE__ */ jsx(ReComponent, { data, ranges, range, onRangeChange: setRange, segments, compareLabel: `vs. last period`, title: `Dashboard`, setup: {
    label: `Set up`,
    onClick: () => {
    }
  }, action: {
    label: `See full analytics`,
    onClick: () => {
    }
  } }) }) });
}

export {
  EComponent
};
