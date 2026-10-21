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

// reconstructed/demo-ik_0XYps.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`var(--ui-xc-c1)`, `var(--ui-xc-c2)`, `var(--ui-xc-c3)`, `var(--ui-xc-c4)`];
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
  strokeWidth: 1.5,
  strokeLinecap: `round`,
  strokeLinejoin: `round`
};
var D1Component = () => /* @__PURE__ */ jsx("svg", { width: `10`, height: `10`, viewBox: `0 0 10 10`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m2.2 5.2 1.9 1.9 3.7-4.1`, ...u, strokeWidth: 1.7 }) });
var F1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M2.5 6h7M6.5 3l3 3-3 3`, ...u, strokeWidth: 1.4 }) });
var EeComponent = ({
  down
}) => /* @__PURE__ */ jsx("svg", { width: `10`, height: `10`, viewBox: `0 0 10 10`, fill: `none`, "aria-hidden": `true`, style: down ? {
  transform: `scaleY(-1)`
} : void 0, children: /* @__PURE__ */ jsx("path", { d: `M1.5 7 4 4.5l1.6 1.6L8.5 3M6.2 3h2.3v2.3`, ...u, strokeWidth: 1.4 }) });
var TeComponent = () => /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `4.25`, ...u }),
  /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `1.5`, fill: `currentColor` })
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
  let B = (e) => e.color ?? (e === j ? `var(--ui-xc-c0)` : i[variants2.filter((e2) => e2 !== j).indexOf(e) % i.length]);
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
      ORef.current?.querySelector(`.ui-xc__toggle`)?.focus({
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
  return /* @__PURE__ */ jsxs("div", { ref: ORef, className: [`ui-xc`, className].filter(Boolean).join(` `), "data-open": C ? `` : void 0, onPointerEnter, onPointerLeave, onKeyDown: _e, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-experiment-card`, precedence: `default`, children: ne }),
    /* @__PURE__ */ jsxs("div", { className: `ui-xc__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-xc__head`, children: [
        /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-xc__toggle`, "aria-expanded": C, "aria-controls": `${x}-body`, "aria-label": `${title}${status ? `, ${status.label}` : ``}${Y ? `, ${Y.name} is ahead by ${Math.abs(N(Y)).toFixed(1)} percent` : ``}`, onClick: () => H(!C) }),
        /* @__PURE__ */ jsx("span", { className: `ui-xc__chart`, "aria-hidden": `true`, onPointerLeave: () => setE(null), children: variants2.map((e) => /* @__PURE__ */ jsx("span", { className: `ui-xc__col`, "data-hot": E === e.id ? `` : void 0, "data-dim": E && E !== e.id ? `` : void 0, "data-picked": T === e.id ? `` : void 0, "data-passed": T && T !== e.id ? `` : void 0, style: {
          "--ui-xc-color": B(e),
          "--ui-xc-size": z(e)
        }, onPointerEnter: (t) => t.pointerType === `mouse` && setE(e.id), onClick: () => J(e.id) }, e.id)) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-xc__titles`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-xc__name`, children: title }),
          /* @__PURE__ */ jsxs("span", { className: `ui-xc__sub`, children: [
            status && /* @__PURE__ */ jsxs("span", { className: `ui-xc__tag`, "data-tone": status.tone ?? `gray`, children: [
              /* @__PURE__ */ jsx(TeComponent, {}),
              status.label
            ] }),
            note && /* @__PURE__ */ jsx("span", { className: `ui-xc__note`, children: note })
          ] })
        ] }),
        Y ? /* @__PURE__ */ jsxs("span", { className: `ui-xc__lead`, "data-tone": `green`, children: [
          /* @__PURE__ */ jsx("b", { children: Y.key }),
          /* @__PURE__ */ jsx(EeComponent, { down: N(Y) < 0 }),
          F(N(Y))
        ] }, `${Y.id}-${w?.id}`) : /* @__PURE__ */ jsx("span", { className: `ui-xc__lead`, "data-tone": `gray`, children: `No lift yet` }, `none-${w?.id}`)
      ] }),
      /* @__PURE__ */ jsx("div", { id: `${x}-body`, className: `ui-xc__fold`, inert: !C, children: /* @__PURE__ */ jsx("div", { className: `ui-xc__clip`, children: /* @__PURE__ */ jsxs("div", { className: `ui-xc__body`, children: [
        metrics2.length > 1 && /* @__PURE__ */ jsxs("div", { ref: GRef, className: `ui-xc__switch`, role: `radiogroup`, "aria-label": `Metric`, onKeyDown: ye, children: [
          K && /* @__PURE__ */ jsx("span", { className: `ui-xc__thumb`, style: {
            transform: `translateX(${K.left}px)`,
            width: K.width
          } }),
          metrics2.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "aria-checked": e.id === w?.id, tabIndex: e.id === w?.id ? 0 : -1, className: `ui-xc__metric`, onClick: () => q(e.id), children: e.label }, e.id))
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-xc__rows`, role: `radiogroup`, "aria-label": `Winner`, onPointerLeave: () => setE(null), children: variants2.map((e) => {
          let t = P(e);
          let n4 = e === j;
          return /* @__PURE__ */ jsxs("button", { type: `button`, role: `radio`, "aria-checked": T === e.id, "aria-label": `${e.name}: ${k(A(e))}${n4 ? `, baseline` : `, ${N(e) >= 0 ? `up` : `down`} ${Math.abs(N(e)).toFixed(1)} percent`}`, className: `ui-xc__row`, "data-hot": E === e.id ? `` : void 0, "data-dim": E && E !== e.id ? `` : void 0, style: {
            "--ui-xc-color": B(e)
          }, onPointerEnter: (t2) => t2.pointerType === `mouse` && setE(e.id), onFocus: () => setE(e.id), onBlur: () => setE(null), onClick: () => J(e.id), children: [
            /* @__PURE__ */ jsxs("span", { className: `ui-xc__badge`, children: [
              /* @__PURE__ */ jsx("span", { children: e.key }),
              /* @__PURE__ */ jsx(D1Component, {})
            ] }),
            /* @__PURE__ */ jsx("span", { className: `ui-xc__label`, children: e.name }),
            /* @__PURE__ */ jsx("span", { className: `ui-xc__value`, children: k(me[e.id] ?? A(e)) }),
            n4 ? /* @__PURE__ */ jsx("span", { className: `ui-xc__lift`, "data-tone": `gray`, children: `Base` }) : /* @__PURE__ */ jsx("span", { className: `ui-xc__lift`, "data-tone": t > 0.05 ? `green` : t < -0.05 ? `red` : `gray`, children: F(N(e)) }),
            /* @__PURE__ */ jsx("span", { className: `ui-xc__track`, children: /* @__PURE__ */ jsx("span", { className: `ui-xc__bar`, style: {
              transform: `scaleX(${Math.max(0.02, A(e) / L)})`
            } }) })
          ] }, e.id);
        }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-xc__fold`, inert: !C, children: /* @__PURE__ */ jsx("div", { className: `ui-xc__clip`, children: /* @__PURE__ */ jsxs("div", { className: `ui-xc__foot`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-xc__caption`, "aria-live": `polite`, children: /* @__PURE__ */ jsx("span", { children: Q }, $) }),
      X && action && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-xc__action`, onClick: () => action.onClick(X), children: [
        be,
        /* @__PURE__ */ jsx(F1Component, {})
      ] }, X.id)
    ] }) }) })
  ] });
}
var ne = `.ui-xc{--ui-xc-tray: #f0f0f0;--ui-xc-card: #ffffff;--ui-xc-line: #ececec;--ui-xc-ink: #171717;--ui-xc-text: #404040;--ui-xc-muted: #8f8f8f;--ui-xc-well: #f4f4f5;--ui-xc-track: #ededf0;--ui-xc-c0: #b4b4ba;--ui-xc-c1: #2f6bff;--ui-xc-c2: #7c5cff;--ui-xc-c3: #f0a020;--ui-xc-c4: #22a05a;--ui-xc-focus: rgba(23, 23, 23, 0.22);--ui-xc-ease: cubic-bezier(0.32, 0.72, 0.24, 1);--ui-xc-time: 520ms;box-sizing: border-box;width: 100%;max-width: 340px;padding: 4px;border-radius: 20px;background: var(--ui-xc-tray);container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-xc-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-xc *, .ui-xc *::before, .ui-xc *::after{box-sizing: border-box}:where(.ui-xc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-xc button:focus-visible{outline: 2px solid var(--ui-xc-focus);outline-offset: 2px}.ui-xc svg{display: block;flex: none}.ui-xc b{font-weight: 600;color: var(--ui-xc-ink)}.ui-xc [data-tone="red"]{--ui-xc-tag: #b42318;--ui-xc-tag-bg: rgba(229, 72, 77, 0.1)}.ui-xc [data-tone="amber"]{--ui-xc-tag: #96590a;--ui-xc-tag-bg: rgba(240, 160, 32, 0.14)}.ui-xc [data-tone="green"]{--ui-xc-tag: #18794e;--ui-xc-tag-bg: rgba(34, 160, 90, 0.11)}.ui-xc [data-tone="blue"]{--ui-xc-tag: #1f55d6;--ui-xc-tag-bg: rgba(47, 107, 255, 0.09)}.ui-xc [data-tone="violet"]{--ui-xc-tag: #6941c6;--ui-xc-tag-bg: rgba(124, 92, 255, 0.1)}.ui-xc [data-tone="gray"]{--ui-xc-tag: #6b6b72;--ui-xc-tag-bg: rgba(110, 110, 120, 0.09)}.ui-xc__card{border-radius: 16px;background: var(--ui-xc-card);box-shadow: 0 0 0 1px var(--ui-xc-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-xc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows var(--ui-xc-time) var(--ui-xc-ease), opacity 260ms ease}.ui-xc__clip{min-height: 0;overflow: hidden}.ui-xc[data-open] > .ui-xc__fold, .ui-xc[data-open] > .ui-xc__card > .ui-xc__fold{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows var(--ui-xc-time) var(--ui-xc-ease), opacity 380ms ease 120ms}.ui-xc__head{position: relative;display: flex;align-items: center;gap: 10px;padding: 10px 12px}.ui-xc__toggle{position: absolute;inset: 0;border-radius: 16px}.ui-xc__head > :not(.ui-xc__toggle){position: relative;pointer-events: none}.ui-xc[data-open] .ui-xc__chart{pointer-events: auto}.ui-xc__chart{display: flex;flex: none;align-items: flex-end;justify-content: center;gap: 3px;width: 34px;height: 34px;padding: 6px 5px 5px;border-radius: 10px;background: var(--ui-xc-well);box-shadow: inset 0 0 0 1px var(--ui-xc-line)}.ui-xc__col{flex: 1;max-width: 7px;height: calc(var(--ui-xc-size) * 100%);border-radius: 2.5px;background: var(--ui-xc-color);cursor: pointer;transition: height 620ms var(--ui-xc-ease), opacity 220ms ease, transform 260ms var(--ui-xc-ease);transform-origin: 50% 100%}.ui-xc__col[data-hot]{transform: scaleX(1.25)}.ui-xc__col[data-dim]{opacity: 0.3}.ui-xc__col[data-passed]:not([data-hot]){opacity: 0.35}.ui-xc__titles{display: grid;grid-template-columns: minmax(0, 1fr);flex: 1;min-width: 0}.ui-xc__name{overflow: hidden;font-size: 13.5px;font-weight: 600;color: var(--ui-xc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-xc__sub{display: flex;align-items: center;gap: 6px;min-width: 0;height: 20px;margin-top: 1px;overflow: hidden;font-size: 12px;line-height: 20px;color: var(--ui-xc-muted);white-space: nowrap}.ui-xc__tag{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 20px;padding: 0 7px 0 5px;border-radius: 5px;background: var(--ui-xc-tag-bg);font-weight: 500;color: var(--ui-xc-tag)}.ui-xc__note{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-xc__lead{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 24px;padding: 0 8px;border-radius: 6px;background: var(--ui-xc-tag-bg);font-size: 12px;font-weight: 500;color: var(--ui-xc-tag);white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-xc-pop 360ms var(--ui-xc-ease) both}.ui-xc__lead b{color: inherit}.ui-xc__body{padding: 0 12px 10px}.ui-xc__switch{position: relative;display: grid;grid-auto-columns: 1fr;grid-auto-flow: column;padding: 2px;border-radius: 10px;background: var(--ui-xc-well);box-shadow: inset 0 0 0 1px var(--ui-xc-line)}.ui-xc__thumb{position: absolute;top: 2px;left: 0;height: calc(100% - 4px);border-radius: 8px;background: var(--ui-xc-card);box-shadow: 0 0 0 1px var(--ui-xc-line), 0 1px 2px rgba(0, 0, 0, 0.06);transition: transform 420ms var(--ui-xc-ease), width 420ms var(--ui-xc-ease)}.ui-xc__metric{position: relative;height: 26px;padding: 0 8px;border-radius: 8px;font-size: 12px;font-weight: 500;color: var(--ui-xc-muted);text-align: center;white-space: nowrap;transition: color 200ms ease}.ui-xc__metric:hover, .ui-xc__metric[aria-checked="true"]{color: var(--ui-xc-ink)}.ui-xc__rows{display: grid;gap: 2px;margin-top: 8px}.ui-xc__row{display: grid;grid-template-columns: auto minmax(0, 1fr) auto auto;align-items: center;column-gap: 9px;row-gap: 6px;width: calc(100% + 12px);margin: 0 -6px;padding: 7px 6px 8px;border-radius: 10px;transition: background-color 160ms ease, opacity 220ms ease, box-shadow 200ms ease}.ui-xc__row[data-hot]{background: var(--ui-xc-well)}.ui-xc__row[data-dim]{opacity: 0.5}.ui-xc__row[aria-checked="true"]{background: var(--ui-xc-well);box-shadow: inset 0 0 0 1px var(--ui-xc-line)}.ui-xc__badge{display: grid;place-items: center;width: 20px;height: 20px;border-radius: 6px;background: color-mix(in srgb, var(--ui-xc-color) 16%, transparent);font-size: 11px;font-weight: 600;line-height: 1;color: color-mix(in srgb, var(--ui-xc-color) 72%, var(--ui-xc-ink));transition: background-color 220ms ease, color 220ms ease}.ui-xc__badge > *{grid-area: 1 / 1;transition: opacity 180ms ease, transform 260ms var(--ui-xc-ease)}.ui-xc__badge svg{opacity: 0;transform: scale(0.5)}.ui-xc__row[aria-checked="true"] .ui-xc__badge{background: var(--ui-xc-color);color: #fff}.ui-xc__row[aria-checked="true"] .ui-xc__badge span{opacity: 0;transform: scale(0.5)}.ui-xc__row[aria-checked="true"] .ui-xc__badge svg{opacity: 1;transform: none}.ui-xc__label{overflow: hidden;color: var(--ui-xc-text);white-space: nowrap;text-overflow: ellipsis}.ui-xc__value{font-weight: 500;color: var(--ui-xc-ink);font-variant-numeric: tabular-nums}.ui-xc__lift{min-width: 50px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-xc-tag-bg);font-size: 11.5px;font-weight: 500;line-height: 20px;color: var(--ui-xc-tag);text-align: center;font-variant-numeric: tabular-nums;transition: background-color 240ms ease, color 240ms ease}.ui-xc__track{grid-column: 2 / -1;height: 4px;overflow: hidden;border-radius: 2px;background: var(--ui-xc-track)}.ui-xc__bar{display: block;width: 100%;height: 100%;border-radius: 2px;background: var(--ui-xc-color);transform-origin: 0 50%;transition: transform 620ms var(--ui-xc-ease)}.ui-xc__foot{display: flex;align-items: center;gap: 8px;height: 38px;padding: 4px 4px 0 10px}.ui-xc__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-xc-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-xc__caption > span{display: inline-block;animation: ui-xc-in 280ms var(--ui-xc-ease) both}.ui-xc__action{display: inline-flex;align-items: center;gap: 4px;flex: none;height: 26px;padding: 0 7px 0 10px;border-radius: 10px;background: var(--ui-xc-ink);font-size: 12.5px;font-weight: 500;color: var(--ui-xc-card);white-space: nowrap;animation: ui-xc-pop 360ms var(--ui-xc-ease) both;transition: opacity 160ms ease}.ui-xc__action:hover{opacity: 0.88}.ui-xc__action svg{transition: transform 220ms var(--ui-xc-ease)}.ui-xc__action:hover svg{transform: translateX(2px)}@keyframes ui-xc-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-xc-pop{from{opacity: 0;transform: scale(0.94)}}@container (max-width: 300px){.ui-xc__head{gap: 8px;padding: 10px}.ui-xc__chart{width: 30px;height: 30px;padding: 5px 4px 4px;gap: 2.5px}.ui-xc__note{display: none}.ui-xc__lead{gap: 3px;padding: 0 6px}.ui-xc__lead svg{display: none}.ui-xc__body{padding: 0 10px 10px}.ui-xc__metric{padding: 0 4px}.ui-xc__row{column-gap: 7px}.ui-xc__lift{min-width: 44px;padding: 0 4px}}@media (pointer: coarse){.ui-xc__metric{height: 32px}.ui-xc__row{padding: 10px 6px 11px}.ui-xc__action{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-xc *, .ui-xc *::before, .ui-xc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-xc{--ui-xc-tray: #111113;--ui-xc-card: #19191b;--ui-xc-line: #2a2a2e;--ui-xc-ink: #ededed;--ui-xc-text: #c8c8cc;--ui-xc-muted: #8b8b92;--ui-xc-well: #222225;--ui-xc-track: #2c2c31;--ui-xc-c0: #6e6e76;--ui-xc-c1: #5b8cff;--ui-xc-c2: #9b83ff;--ui-xc-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="red"]{--ui-xc-tag: #ff9b93}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="amber"]{--ui-xc-tag: #f5c264}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="green"]{--ui-xc-tag: #6ee7a8}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="blue"]{--ui-xc-tag: #9bb8ff}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="violet"]{--ui-xc-tag: #c3b1ff}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="gray"]{--ui-xc-tag: #b4b4bb}:where(.dark, [data-theme="dark"]) .ui-xc__row[aria-checked="true"] .ui-xc__badge{color: #111113}`;
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
