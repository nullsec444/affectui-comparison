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

// reconstructed/demo.clean-Vp-K1jMG.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`var(--ui-xcc-c1)`, `var(--ui-xcc-c2)`, `var(--ui-xcc-c3)`, `var(--ui-xcc-c4)`];
var a = (e) => new Intl.NumberFormat(`en-US`, {
  maximumFractionDigits: 1
}).format(e);
var o = (e) => new Intl.NumberFormat(`en-US`, {
  maximumFractionDigits: 0
}).format(e);
var s = (e) => 1 - (1 - e) ** 4;
var c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function useL(e, t) {
  let [r2, setR] = n3.useState(e);
  let aRef = n3.useRef(e);
  let o2 = JSON.stringify(e);
  n3.useEffect(() => {
    let e2 = JSON.parse(o2);
    let n4 = {
      ...aRef.current
    };
    if (c() || Object.keys(e2).every((t2) => n4[t2] === e2[t2])) {
      aRef.current = e2;
      setR(e2);
      return;
    }
    let r3 = performance.now();
    let l = 0;
    let u2 = (o3) => {
      let c2 = Math.min(1, (o3 - r3) / t);
      let d = s(c2);
      let f = {};
      for (let t2 in e2) {
        f[t2] = (n4[t2] ?? e2[t2]) + (e2[t2] - (n4[t2] ?? e2[t2])) * d;
      }
      aRef.current = f;
      setR(f);
      if (c2 < 1) {
        l = requestAnimationFrame(u2);
      }
    };
    l = requestAnimationFrame(u2);
    return () => cancelAnimationFrame(l);
  }, [o2, t]);
  return r2;
}
var u = {
  stroke: `currentColor`,
  strokeWidth: 1.1,
  strokeLinecap: `round`,
  strokeLinejoin: `round`
};
var D1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m3 6.2 2 2 4-4.4`, ...u, strokeWidth: 1.5 }) });
var F1Component = () => /* @__PURE__ */ jsx("svg", { width: `16`, height: `16`, viewBox: `0 0 16 16`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M3.5 8h9M9 4.5 12.5 8 9 11.5`, ...u, strokeWidth: 1.2 }) });
var EeComponent = ({
  down
}) => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, style: down ? {
  transform: `scaleY(-1)`
} : void 0, children: /* @__PURE__ */ jsx("path", { d: `M1.5 8.5 4.5 5.5l2 2 4-4M8 3.5h2.5V6`, ...u, strokeWidth: 1.2 }) });
var TeComponent = () => /* @__PURE__ */ jsxs("svg", { width: `10`, height: `10`, viewBox: `0 0 10 10`, fill: `none`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `5`, cy: `5`, r: `4.5`, fill: `currentColor`, opacity: `0.22` }),
  /* @__PURE__ */ jsx("circle", { cx: `5`, cy: `5`, r: `2.25`, fill: `currentColor` })
] });
function P1Component({
  title,
  variants: variants2,
  metrics: metrics2,
  metric,
  defaultMetric,
  onMetricChange,
  winner,
  defaultWinner = null,
  onWinnerChange,
  status,
  note,
  action,
  hint,
  trigger = `hover`,
  open,
  defaultOpen = false,
  onOpenChange,
  className
}) {
  let x = n3.useId();
  let [ce, setCe] = n3.useState(defaultOpen);
  let C = open ?? ce;
  let [le, setLe] = n3.useState(defaultMetric ?? metrics2[0]?.id);
  let w = metrics2.find((e) => e.id === (metric ?? le)) ?? metrics2[0];
  let [de, setDe] = n3.useState(defaultWinner);
  let T = winner === void 0 ? de : winner;
  let [E, setE] = n3.useState(null);
  let ORef = n3.useRef(null);
  let k = w?.format ?? a;
  let pe = !!w?.lowerIsBetter;
  let A = (e) => e.values[w?.id ?? ``] ?? 0;
  let j = variants2.find((e) => e.control) ?? variants2[0];
  let M = j ? A(j) : 0;
  let N = (e) => {
    if (M) {
      return (A(e) - M) / Math.abs(M) * 100;
    }
    return 0;
  };
  let P = (e) => N(e) * (pe ? -1 : 1);
  let F = (e) => `${e >= 0 ? `+` : `\u2212`}${Math.abs(e).toFixed(1)}%`;
  let I = variants2.reduce((acc, variant) => {
    if (!acc || P(variant) > P(acc)) {
      return variant;
    }
    return acc;
  }, void 0);
  let L = Math.max(...variants2.map(A), 1e-4);
  let R = Math.min(...variants2.map(A));
  let z = (e) => {
    if (L > R) {
      return 0.38 + 0.62 * ((A(e) - R) / (L - R));
    }
    return 0.7;
  };
  let B = (e) => e.color ?? (e === j ? `var(--ui-xcc-c0)` : i[variants2.filter((e2) => e2 !== j).indexOf(e) % i.length]);
  let me = useL(Object.fromEntries(variants2.map((e) => [e.id, A(e)])), 620);
  let VRef = n3.useRef(0);
  let H = (e) => {
    window.clearTimeout(VRef.current);
    if (e !== C) {
      if (!e) {
        setE(null);
      }
      setCe(e);
      onOpenChange?.(e);
    }
  };
  let U = (e, t) => {
    window.clearTimeout(VRef.current);
    VRef.current = window.setTimeout(() => H(e), t);
  };
  n3.useEffect(() => () => window.clearTimeout(VRef.current), []);
  let W = trigger === `hover`;
  let onPointerEnter = (e) => {
    if (W && e.pointerType === `mouse`) {
      U(true, 90);
    }
  };
  let onPointerLeave = (e) => {
    if (W && e.pointerType === `mouse`) {
      U(false, 220);
    }
  };
  n3.useEffect(() => {
    if (!C) {
      return;
    }
    let e = (e2) => {
      if (!ORef.current?.contains(e2.target)) {
        H(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  });
  let _e = (e) => {
    if (e.key === `Escape` && C) {
      e.stopPropagation();
      H(false);
      ORef.current?.querySelector(`.ui-xcc__toggle`)?.focus({
        preventScroll: true
      });
    }
  };
  let GRef = n3.useRef(null);
  let [K, setK] = n3.useState(null);
  n3.useLayoutEffect(() => {
    let e = GRef.current?.querySelector(`[aria-checked="true"]`);
    if (e) {
      setK({
        left: e.offsetLeft,
        width: e.offsetWidth
      });
    }
  }, [w?.id, metrics2.length, C]);
  let q = (e) => {
    setLe(e);
    onMetricChange?.(e);
  };
  let ye = (e) => {
    let t = metrics2.findIndex((e2) => e2.id === w?.id);
    let n4 = e.key === `ArrowRight` ? t + 1 : e.key === `ArrowLeft` ? t - 1 : e.key === `Home` ? 0 : e.key === `End` ? metrics2.length - 1 : null;
    if (n4 === null) {
      return;
    }
    e.preventDefault();
    let r2 = metrics2[(n4 + metrics2.length) % metrics2.length];
    q(r2.id);
    requestAnimationFrame(() => GRef.current?.querySelector(`[aria-checked="true"]`)?.focus());
  };
  let J = (e) => {
    let t = T === e ? null : e;
    setDe(t);
    onWinnerChange?.(t);
  };
  let Y = I && I !== j && P(I) > 0 ? I : null;
  let X = variants2.find((e) => e.id === T) ?? null;
  let Z = variants2.find((e) => e.id === E) ?? null ?? null;
  let Q = hint ?? (X ? null : `Pick a winner`);
  let $ = `rest`;
  if (Z) {
    let e = Z.confidence?.[w?.id ?? ``];
    Q = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: Z.key }),
      Z.visitors !== void 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        ` \xB7 `,
        o(Z.visitors),
        ` visitors`
      ] }),
      Z === j ? /* @__PURE__ */ jsx(Fragment, { children: ` \xB7 baseline` }) : e !== void 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        ` \xB7 `,
        o(e),
        `% confidence`
      ] })
    ] });
    $ = `hot-${Z.id}-${w?.id}`;
  } else {
    if (X) {
      Q = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: X.name }),
        ` picked`
      ] });
      $ = `picked-${X.id}`;
    }
  }
  let be = X && action ? typeof action.label == `function` ? action.label(X) : action.label : null;
  return /* @__PURE__ */ jsxs("div", { ref: ORef, className: [`ui-xcc`, className].filter(Boolean).join(` `), "data-open": C ? `` : void 0, onPointerEnter, onPointerLeave, onKeyDown: _e, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-experiment-card-clean`, precedence: `default`, children: ne }),
    /* @__PURE__ */ jsxs("div", { className: `ui-xcc__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-xcc__head`, children: [
        /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-xcc__toggle`, "aria-expanded": C, "aria-controls": `${x}-body`, "aria-label": `${title}${status ? `, ${status.label}` : ``}${Y ? `, ${Y.name} is ahead by ${Math.abs(N(Y)).toFixed(1)} percent` : ``}`, onClick: () => H(!C) }),
        /* @__PURE__ */ jsx("span", { className: `ui-xcc__chart`, "aria-hidden": `true`, onPointerLeave: () => setE(null), children: variants2.map((e) => /* @__PURE__ */ jsx("span", { className: `ui-xcc__col`, "data-hot": E === e.id ? `` : void 0, "data-dim": E && E !== e.id ? `` : void 0, "data-picked": T === e.id ? `` : void 0, "data-passed": T && T !== e.id ? `` : void 0, style: {
          "--ui-xcc-color": B(e),
          "--ui-xcc-size": z(e)
        }, onPointerEnter: (t) => t.pointerType === `mouse` && setE(e.id), onClick: () => J(e.id) }, e.id)) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-xcc__titles`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-xcc__name`, children: title }),
          /* @__PURE__ */ jsxs("span", { className: `ui-xcc__sub`, children: [
            status && /* @__PURE__ */ jsxs("span", { className: `ui-xcc__tag`, "data-tone": status.tone ?? `gray`, children: [
              /* @__PURE__ */ jsx(TeComponent, {}),
              status.label
            ] }),
            note && /* @__PURE__ */ jsx("span", { className: `ui-xcc__note`, children: note })
          ] })
        ] }),
        Y ? /* @__PURE__ */ jsxs("span", { className: `ui-xcc__lead`, "data-tone": `green`, children: [
          /* @__PURE__ */ jsx("b", { children: Y.key }),
          /* @__PURE__ */ jsx(EeComponent, { down: N(Y) < 0 }),
          F(N(Y))
        ] }, `${Y.id}-${w?.id}`) : /* @__PURE__ */ jsx("span", { className: `ui-xcc__lead`, "data-tone": `gray`, children: `No lift yet` }, `none-${w?.id}`)
      ] }),
      /* @__PURE__ */ jsx("div", { id: `${x}-body`, className: `ui-xcc__fold`, inert: !C, children: /* @__PURE__ */ jsx("div", { className: `ui-xcc__clip`, children: /* @__PURE__ */ jsxs("div", { className: `ui-xcc__body`, children: [
        metrics2.length > 1 && /* @__PURE__ */ jsxs("div", { ref: GRef, className: `ui-xcc__switch`, role: `radiogroup`, "aria-label": `Metric`, onKeyDown: ye, children: [
          K && /* @__PURE__ */ jsx("span", { className: `ui-xcc__thumb`, style: {
            transform: `translateX(${K.left}px)`,
            width: K.width
          } }),
          metrics2.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "aria-checked": e.id === w?.id, tabIndex: e.id === w?.id ? 0 : -1, className: `ui-xcc__metric`, onClick: () => q(e.id), children: e.label }, e.id))
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-xcc__rows`, role: `radiogroup`, "aria-label": `Winner`, onPointerLeave: () => setE(null), children: variants2.map((e) => {
          let t = P(e);
          let n4 = e === j;
          return /* @__PURE__ */ jsxs("button", { type: `button`, role: `radio`, "aria-checked": T === e.id, "aria-label": `${e.name}: ${k(A(e))}${n4 ? `, baseline` : `, ${N(e) >= 0 ? `up` : `down`} ${Math.abs(N(e)).toFixed(1)} percent`}`, className: `ui-xcc__row`, "data-hot": E === e.id ? `` : void 0, "data-dim": E && E !== e.id ? `` : void 0, style: {
            "--ui-xcc-color": B(e)
          }, onPointerEnter: (t2) => t2.pointerType === `mouse` && setE(e.id), onFocus: () => setE(e.id), onBlur: () => setE(null), onClick: () => J(e.id), children: [
            /* @__PURE__ */ jsxs("span", { className: `ui-xcc__badge`, children: [
              /* @__PURE__ */ jsx("span", { children: e.key }),
              /* @__PURE__ */ jsx(D1Component, {})
            ] }),
            /* @__PURE__ */ jsx("span", { className: `ui-xcc__label`, children: e.name }),
            /* @__PURE__ */ jsx("span", { className: `ui-xcc__value`, children: k(me[e.id] ?? A(e)) }),
            n4 ? /* @__PURE__ */ jsx("span", { className: `ui-xcc__lift`, "data-tone": `gray`, children: `Base` }) : /* @__PURE__ */ jsx("span", { className: `ui-xcc__lift`, "data-tone": t > 0.05 ? `green` : t < -0.05 ? `red` : `gray`, children: F(N(e)) }),
            /* @__PURE__ */ jsx("span", { className: `ui-xcc__track`, children: /* @__PURE__ */ jsx("span", { className: `ui-xcc__bar`, style: {
              transform: `scaleX(${Math.max(0.02, A(e) / L)})`
            } }) })
          ] }, e.id);
        }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-xcc__fold`, inert: !C, children: /* @__PURE__ */ jsx("div", { className: `ui-xcc__clip`, children: /* @__PURE__ */ jsxs("div", { className: `ui-xcc__foot`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-xcc__caption`, "aria-live": `polite`, children: /* @__PURE__ */ jsx("span", { children: Q }, $) }),
        X && action && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-xcc__action`, onClick: () => action.onClick(X), children: [
          be,
          /* @__PURE__ */ jsx(F1Component, {})
        ] }, X.id)
      ] }) }) })
    ] })
  ] });
}
var ne = `.ui-xcc{--ui-xcc-card: #ffffff;--ui-xcc-ink: rgba(0, 0, 0, 0.88);--ui-xcc-strong: #000000;--ui-xcc-text: rgba(0, 0, 0, 0.61);--ui-xcc-muted: rgba(0, 0, 0, 0.45);--ui-xcc-faint: rgba(0, 0, 0, 0.27);--ui-xcc-icon: rgba(0, 0, 0, 0.447);--ui-xcc-line: rgba(0, 0, 0, 0.06);--ui-xcc-fill: rgba(0, 0, 0, 0.06);--ui-xcc-wash: rgba(0, 0, 0, 0.03);--ui-xcc-track: rgba(0, 0, 0, 0.06);--ui-xcc-pick: rgba(0, 96, 226, 0.05);--ui-xcc-pick-line: rgba(0, 96, 226, 0.35);--ui-xcc-primary: rgba(0, 0, 0, 0.88);--ui-xcc-on-primary: #fcfcfc;--ui-xcc-c0: rgba(0, 0, 0, 0.22);--ui-xcc-c1: rgba(0, 96, 226, 0.765);--ui-xcc-c2: #5b5bd6;--ui-xcc-c3: #e8a20c;--ui-xcc-c4: #1a9a52;--ui-xcc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-xcc-focus: rgba(0, 96, 226, 0.35);--ui-xcc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-xcc-time: 520ms;box-sizing: border-box;width: 100%;max-width: 340px;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-xcc-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-xcc *, .ui-xcc *::before, .ui-xcc *::after{box-sizing: border-box}:where(.ui-xcc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-xcc button:focus-visible{outline: 2px solid var(--ui-xcc-focus);outline-offset: 1px}:where(.ui-xcc) svg{display: block;flex: none}.ui-xcc b{font-weight: 500;color: var(--ui-xcc-ink)}.ui-xcc [data-tone="red"]{--ui-xcc-tag: #d93d42;--ui-xcc-tag-bg: rgba(229, 72, 77, 0.08)}.ui-xcc [data-tone="amber"]{--ui-xcc-tag: #a86f00;--ui-xcc-tag-bg: rgba(232, 162, 12, 0.1)}.ui-xcc [data-tone="green"]{--ui-xcc-tag: #1a9a52;--ui-xcc-tag-bg: rgba(26, 154, 82, 0.08)}.ui-xcc [data-tone="blue"]{--ui-xcc-tag: rgba(0, 96, 226, 0.9);--ui-xcc-tag-bg: rgba(0, 96, 226, 0.06)}.ui-xcc [data-tone="violet"]{--ui-xcc-tag: #5b5bd6;--ui-xcc-tag-bg: rgba(91, 91, 214, 0.08)}.ui-xcc [data-tone="gray"]{--ui-xcc-tag: rgba(0, 0, 0, 0.61);--ui-xcc-tag-bg: rgba(0, 0, 0, 0.05)}.ui-xcc__card{border-radius: 10px;background: var(--ui-xcc-card);box-shadow: var(--ui-xcc-shadow)}.ui-xcc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows var(--ui-xcc-time) var(--ui-xcc-ease), opacity 260ms ease}.ui-xcc__clip{min-height: 0;overflow: hidden}.ui-xcc[data-open] > .ui-xcc__card > .ui-xcc__fold{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows var(--ui-xcc-time) var(--ui-xcc-ease), opacity 380ms ease 120ms}.ui-xcc__head{position: relative;display: flex;align-items: center;gap: 10px;padding: 12px}.ui-xcc__toggle{position: absolute;inset: 0;border-radius: 10px}.ui-xcc__head > :not(.ui-xcc__toggle){position: relative;pointer-events: none}.ui-xcc[data-open] .ui-xcc__chart{pointer-events: auto}.ui-xcc__chart{display: flex;flex: none;align-items: flex-end;justify-content: center;gap: 3px;width: 36px;height: 36px;padding: 7px 6px 6px;border-radius: 8px;background: var(--ui-xcc-wash);box-shadow: inset 0 0 0 0.5px var(--ui-xcc-line)}.ui-xcc__col{flex: 1;max-width: 6px;height: calc(var(--ui-xcc-size) * 100%);border-radius: 1.5px;background: var(--ui-xcc-color);cursor: pointer;transition: height 620ms var(--ui-xcc-ease), opacity 220ms ease, transform 260ms var(--ui-xcc-ease);transform-origin: 50% 100%}.ui-xcc__col[data-hot]{transform: scaleX(1.25)}.ui-xcc__col[data-dim]{opacity: 0.3}.ui-xcc__col[data-passed]:not([data-hot]){opacity: 0.35}.ui-xcc__titles{display: grid;grid-template-columns: minmax(0, 1fr);flex: 1;min-width: 0}.ui-xcc__name{overflow: hidden;font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-xcc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-xcc__sub{display: flex;align-items: center;gap: 6px;min-width: 0;height: 20px;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-xcc-muted);white-space: nowrap}.ui-xcc__tag{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 20px;padding: 0 6px 0 5px;border-radius: 5px;background: var(--ui-xcc-tag-bg);font-size: 12px;font-weight: 500;color: var(--ui-xcc-tag)}.ui-xcc__note{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-xcc__lead{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 24px;padding: 0 7px;border-radius: 6px;background: var(--ui-xcc-tag-bg);font-size: 12px;line-height: 16px;font-weight: 500;color: var(--ui-xcc-tag);white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-xcc-pop 360ms var(--ui-xcc-ease) both}.ui-xcc__lead b{color: inherit}.ui-xcc__body{padding: 0 12px 10px}.ui-xcc__switch{position: relative;display: flex;gap: 4px}.ui-xcc__thumb{position: absolute;top: 0;left: 0;height: 100%;border-radius: 6px;background: var(--ui-xcc-fill);transition: transform 90ms ease-out, width 90ms ease-out}.ui-xcc__metric{position: relative;height: 28px;padding: 4px 10px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-xcc-line);font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-xcc-text);text-align: center;white-space: nowrap;transition: color 140ms ease, background-color 140ms ease}.ui-xcc__metric:hover{background: var(--ui-xcc-wash);color: var(--ui-xcc-ink)}.ui-xcc__metric[aria-checked="true"]{background: none;color: var(--ui-xcc-ink)}.ui-xcc__rows{display: grid;gap: 2px;margin-top: 8px}.ui-xcc__row{display: grid;grid-template-columns: auto minmax(0, 1fr) auto auto;align-items: center;column-gap: 8px;row-gap: 6px;width: calc(100% + 12px);margin: 0 -6px;padding: 7px 6px 8px;border-radius: 6px;transition: background-color 120ms ease-out, opacity 220ms ease, box-shadow 160ms ease}.ui-xcc__row[data-hot]{background: var(--ui-xcc-wash)}.ui-xcc__row[data-dim]{opacity: 0.55}.ui-xcc__row[aria-checked="true"]{background: var(--ui-xcc-pick);box-shadow: 0 0 0 0.5px var(--ui-xcc-pick-line)}.ui-xcc__badge{display: grid;place-items: center;width: 20px;height: 20px;border-radius: 5px;background: color-mix(in srgb, var(--ui-xcc-color) 14%, transparent);font-size: 11px;font-weight: 500;line-height: 1;color: color-mix(in srgb, var(--ui-xcc-color) 80%, var(--ui-xcc-strong));transition: background-color 220ms ease, color 220ms ease}.ui-xcc__badge > *{grid-area: 1 / 1;transition: opacity 180ms ease, transform 260ms var(--ui-xcc-ease)}.ui-xcc__badge svg{opacity: 0;transform: scale(0.5)}.ui-xcc__row[aria-checked="true"] .ui-xcc__badge{background: var(--ui-xcc-color);color: #fff}.ui-xcc__row[aria-checked="true"] .ui-xcc__badge span{opacity: 0;transform: scale(0.5)}.ui-xcc__row[aria-checked="true"] .ui-xcc__badge svg{opacity: 1;transform: none}.ui-xcc__label{overflow: hidden;color: var(--ui-xcc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-xcc__value{font-weight: 500;color: var(--ui-xcc-strong);font-variant-numeric: tabular-nums}.ui-xcc__lift{min-width: 50px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-xcc-tag-bg);font-size: 11px;font-weight: 500;line-height: 20px;color: var(--ui-xcc-tag);text-align: center;font-variant-numeric: tabular-nums;transition: background-color 240ms ease, color 240ms ease}.ui-xcc__track{grid-column: 2 / -1;height: 3px;overflow: hidden;border-radius: 1.5px;background: var(--ui-xcc-track)}.ui-xcc__bar{display: block;width: 100%;height: 100%;border-radius: 1.5px;background: var(--ui-xcc-color);transform-origin: 0 50%;transition: transform 620ms var(--ui-xcc-ease)}.ui-xcc__foot{display: flex;align-items: center;gap: 8px;height: 44px;padding: 0 8px 0 12px;border-top: 0.5px solid var(--ui-xcc-line)}.ui-xcc__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-xcc-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-xcc__caption > span{display: inline-block;animation: ui-xcc-in 280ms var(--ui-xcc-ease) both}.ui-xcc__action{display: inline-flex;align-items: center;gap: 4px;flex: none;height: 28px;padding: 0 7px 0 10px;border-radius: 6px;background: var(--ui-xcc-primary);font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-xcc-on-primary);white-space: nowrap;animation: ui-xcc-pop 360ms var(--ui-xcc-ease) both;transition: opacity 160ms ease}.ui-xcc__action:hover{opacity: 0.9}.ui-xcc__action svg{transition: transform 220ms var(--ui-xcc-ease)}.ui-xcc__action:hover svg{transform: translateX(2px)}@keyframes ui-xcc-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-xcc-pop{from{opacity: 0;transform: scale(0.94)}}@container (max-width: 300px){.ui-xcc__head{gap: 8px;padding: 10px}.ui-xcc__chart{width: 32px;height: 32px;padding: 6px 5px 5px;gap: 2.5px}.ui-xcc__note{display: none}.ui-xcc__lead{gap: 3px;padding: 0 6px}.ui-xcc__lead svg{display: none}.ui-xcc__body{padding: 0 10px 10px}.ui-xcc__switch{gap: 2px}.ui-xcc__metric{flex: 1;padding: 4px 6px}.ui-xcc__row{column-gap: 7px}.ui-xcc__lift{min-width: 44px;padding: 0 4px}.ui-xcc__foot{padding: 0 8px 0 10px}}@media (pointer: coarse){.ui-xcc__metric{height: 34px;padding: 7px 12px}.ui-xcc__row{padding: 10px 6px 11px}.ui-xcc__foot{height: 52px}.ui-xcc__action{height: 34px}}@media (prefers-reduced-motion: reduce){.ui-xcc *, .ui-xcc *::before, .ui-xcc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-xcc{--ui-xcc-card: #1c1c1e;--ui-xcc-ink: rgba(255, 255, 255, 0.9);--ui-xcc-strong: #ffffff;--ui-xcc-text: rgba(255, 255, 255, 0.62);--ui-xcc-muted: rgba(255, 255, 255, 0.46);--ui-xcc-faint: rgba(255, 255, 255, 0.3);--ui-xcc-icon: rgba(255, 255, 255, 0.5);--ui-xcc-line: rgba(255, 255, 255, 0.08);--ui-xcc-fill: rgba(255, 255, 255, 0.08);--ui-xcc-wash: rgba(255, 255, 255, 0.04);--ui-xcc-track: rgba(255, 255, 255, 0.08);--ui-xcc-pick: rgba(77, 141, 255, 0.14);--ui-xcc-pick-line: rgba(77, 141, 255, 0.4);--ui-xcc-primary: rgba(255, 255, 255, 0.9);--ui-xcc-on-primary: #1c1c1e;--ui-xcc-c0: rgba(255, 255, 255, 0.3);--ui-xcc-c1: #4d8dff;--ui-xcc-c2: #8585f0;--ui-xcc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-xcc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-xcc [data-tone="red"]{--ui-xcc-tag: #ff8a8d;--ui-xcc-tag-bg: rgba(229, 72, 77, 0.14)}:where(.dark, [data-theme="dark"]) .ui-xcc [data-tone="amber"]{--ui-xcc-tag: #f5c264;--ui-xcc-tag-bg: rgba(232, 162, 12, 0.14)}:where(.dark, [data-theme="dark"]) .ui-xcc [data-tone="green"]{--ui-xcc-tag: #5fd394;--ui-xcc-tag-bg: rgba(26, 154, 82, 0.14)}:where(.dark, [data-theme="dark"]) .ui-xcc [data-tone="blue"]{--ui-xcc-tag: #8fb6ff;--ui-xcc-tag-bg: rgba(77, 141, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-xcc [data-tone="violet"]{--ui-xcc-tag: #ababf5;--ui-xcc-tag-bg: rgba(91, 91, 214, 0.18)}:where(.dark, [data-theme="dark"]) .ui-xcc [data-tone="gray"]{--ui-xcc-tag: rgba(255, 255, 255, 0.62);--ui-xcc-tag-bg: rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-xcc__badge{color: color-mix(in srgb, var(--ui-xcc-color) 75%, #fff)}:where(.dark, [data-theme="dark"]) .ui-xcc__row[aria-checked="true"] .ui-xcc__badge{color: #1c1c1e}`;
var metrics = [{
  id: `conversion`,
  label: `Conversion`,
  format: (e) => `${e.toFixed(1)}%`
}, {
  id: `revenue`,
  label: `Revenue`,
  format: (e) => `$${e.toFixed(2)}`
}, {
  id: `bounce`,
  label: `Bounce`,
  format: (e) => `${e.toFixed(1)}%`,
  lowerIsBetter: true
}];
var variants = [{
  id: `a`,
  key: `A`,
  name: `Start free trial`,
  control: true,
  visitors: 4790,
  values: {
    conversion: 4.2,
    revenue: 18.4,
    bounce: 41.3
  }
}, {
  id: `b`,
  key: `B`,
  name: `Try it free`,
  visitors: 4812,
  values: {
    conversion: 4.7,
    revenue: 19.1,
    bounce: 38.2
  },
  confidence: {
    conversion: 96,
    revenue: 81,
    bounce: 93
  }
}, {
  id: `c`,
  key: `C`,
  name: `Get started \u2013 $0`,
  visitors: 4755,
  values: {
    conversion: 4,
    revenue: 21.6,
    bounce: 43.9
  },
  confidence: {
    conversion: 62,
    revenue: 97,
    bounce: 71
  }
}];
function GComponent() {
  let [open, setOpen] = n3.useState(false);
  let [metric, setMetric] = n3.useState(`conversion`);
  let oRef = n3.useRef(false);
  n3.useEffect(() => {
    let e = 0;
    let n4 = () => {
      if (!oRef.current) {
        e = (e + 1) % 5;
        switch (e) {
          case 1:
            setOpen(true);
            break;
          case 2:
            setMetric(`revenue`);
            break;
          case 3:
            setMetric(`bounce`);
            break;
          case 4:
            setMetric(`conversion`);
            break;
          default:
            setOpen(false);
        }
      }
    };
    let r2 = 0;
    let i2 = window.setTimeout(() => {
      n4();
      r2 = window.setInterval(n4, 2200);
    }, 700);
    return () => {
      window.clearTimeout(i2);
      window.clearInterval(r2);
    };
  }, []);
  let s2 = () => oRef.current = true;
  return /* @__PURE__ */ jsx("div", { className: `xc-demo`, onPointerEnter: s2, onPointerDownCapture: s2, onKeyDownCapture: s2, onFocusCapture: s2, children: /* @__PURE__ */ jsx(P1Component, { title: `Signup button copy`, status: {
    label: `Running`,
    tone: `green`
  }, note: `Day 9 of 14`, metrics, metric, onMetricChange: setMetric, variants, action: {
    label: (e) => `Ship ${e.key}`,
    onClick: () => {
    }
  }, open, onOpenChange: setOpen }) });
}

export {
  GComponent
};
