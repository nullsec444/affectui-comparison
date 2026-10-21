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

// reconstructed/demo.clean-BmiiHyGl.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => new Intl.NumberFormat(`en-US`, {
  maximumFractionDigits: 0
}).format(e);
var a = [`var(--ui-cbc-c1)`, `var(--ui-cbc-c2)`, `var(--ui-cbc-c3)`, `var(--ui-cbc-c4)`, `var(--ui-cbc-c5)`];
var easing = `cubic-bezier(0.22, 1, 0.36, 1)`;
var s = (e) => 1 - (1 - e) ** 4;
var c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var l = (e) => e.id ?? e.label;
function useU(e, t, r2) {
  let [i2, setI] = n3.useState(() => Object.fromEntries(Object.keys(e).map((e2) => [e2, 0])));
  let oRef = n3.useRef(i2);
  let lRef = n3.useRef(false);
  let u = JSON.stringify(e);
  n3.useEffect(() => {
    let e2 = JSON.parse(u);
    let n4 = {
      ...oRef.current
    };
    if (c()) {
      oRef.current = e2;
      setI(e2);
      return;
    }
    let i3 = lRef.current ? r2 : t;
    lRef.current = true;
    let d = performance.now();
    let f2 = 0;
    let p = (t2) => {
      let r3 = Math.min(1, (t2 - d) / i3);
      let c2 = s(r3);
      let l2 = {};
      for (let t3 in e2) {
        l2[t3] = (n4[t3] ?? 0) + (e2[t3] - (n4[t3] ?? 0)) * c2;
      }
      oRef.current = l2;
      setI(l2);
      if (r3 < 1) {
        f2 = requestAnimationFrame(p);
      }
    };
    f2 = requestAnimationFrame(p);
    return () => cancelAnimationFrame(f2);
  }, [u]);
  return i2;
}
function D1Component({
  title = `Breakdown`,
  items,
  periods: periods2,
  period,
  defaultPeriod,
  onPeriodChange,
  delta,
  format: format2 = i,
  totalLabel = `Total`,
  footer,
  className
}) {
  let b = n3.useId();
  let [x, setX] = n3.useState(defaultPeriod ?? periods2?.[0]?.id);
  let C = period ?? x;
  let [w, setW] = n3.useState(null);
  let ERef = n3.useRef([]);
  for (let e of items) {
    let t = l(e);
    let n4 = ERef.current.find((e2) => e2.key === t);
    if (n4) {
      n4.label = e.label;
      if (e.color) {
        n4.color = e.color;
      }
    } else {
      ERef.current.push({
        key: t,
        label: e.label,
        color: e.color ?? a[ERef.current.length] ?? `var(--ui-cbc-c5)`
      });
    }
  }
  let D = new Map(items.map((e) => [l(e), Math.max(0, e.value)]));
  let O = [...D.values()].reduce((acc, item) => acc + item, 0);
  let k = w !== null && D.has(w) ? w : null;
  let A = {
    "#total": O,
    "#figure": k ? D.get(k) ?? 0 : O
  };
  for (let e of ERef.current) {
    A[e.key] = D.get(e.key) ?? 0;
  }
  let j = useU(A, 900, 620);
  let M = Math.max(j[`#total`] ?? 0, 1e-4);
  let N = ERef.current.map((e) => ({
    ...e,
    value: D.get(e.key) ?? 0,
    leaving: !D.has(e.key)
  })).filter((e) => !e.leaving || (j[e.key] ?? 0) > 0.5).sort((e, t) => Number(e.leaving) - Number(t.leaving) || t.value - e.value);
  let P = N.map((e) => e.key).join(`|`);
  let F = N.find((e) => !e.leaving);
  let IRef = n3.useRef(/* @__PURE__ */ new Map());
  let LRef = n3.useRef(/* @__PURE__ */ new Map());
  n3.useLayoutEffect(() => {
    let e = /* @__PURE__ */ new Map();
    IRef.current.forEach((t, n4) => e.set(n4, t.offsetTop));
    if (!c()) {
      e.forEach((e2, t) => {
        let n4 = LRef.current.get(t);
        let r2 = IRef.current.get(t);
        if (r2 && n4 !== void 0 && n4 !== e2) {
          r2.animate([{
            transform: `translateY(${n4 - e2}px)`
          }, {
            transform: `none`
          }], {
            duration: 560,
            easing
          });
        }
      });
    }
    LRef.current = e;
  }, [P]);
  let RRef = n3.useRef(null);
  let zRef = n3.useRef(null);
  let BRef = n3.useRef(false);
  n3.useLayoutEffect(() => {
    let RRef_current = RRef.current;
    let zRef_current = zRef.current;
    let n4 = RRef_current?.querySelector(`[aria-checked="true"]`);
    if (!RRef_current || !zRef_current || !n4) {
      return;
    }
    let r2 = () => {
      if (!BRef.current) {
        zRef_current.style.transition = `none`;
      }
      zRef_current.style.width = `${n4.offsetWidth}px`;
      zRef_current.style.height = `${n4.offsetHeight}px`;
      zRef_current.style.transform = `translate(${n4.offsetLeft}px, ${n4.offsetTop}px)`;
      zRef_current.style.opacity = `1`;
      BRef.current ||= (zRef_current.offsetWidth, zRef_current.style.transition = ``, true);
    };
    r2();
    let i2 = new ResizeObserver(r2);
    i2.observe(RRef_current);
    return () => i2.disconnect();
  }, [C, periods2?.length]);
  let V = (e) => {
    if (period === void 0) {
      setX(e);
    }
    onPeriodChange?.(e);
  };
  let onKeyDown = (e) => {
    if (!periods2?.length) {
      return;
    }
    let t = periods2.findIndex((e2) => e2.id === C);
    let n4 = e.key === `ArrowRight` || e.key === `ArrowDown` ? t + 1 : e.key === `ArrowLeft` || e.key === `ArrowUp` ? t - 1 : e.key === `Home` ? 0 : e.key === `End` ? periods2.length - 1 : null;
    if (n4 === null) {
      return;
    }
    e.preventDefault();
    let r2 = periods2[(n4 + periods2.length) % periods2.length];
    V(r2.id);
    requestAnimationFrame(() => RRef.current?.querySelector(`[aria-checked="true"]`)?.focus());
  };
  let U = k ? N.find((e) => e.key === k) : void 0;
  let W = (key) => (j[key] ?? 0) / M * 100;
  let G = (delta ?? 0) >= 0;
  return /* @__PURE__ */ jsxs("div", { className: [`ui-cbc`, className].filter(Boolean).join(` `), role: `group`, "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-compact-breakdown-clean`, precedence: `default`, children: f }),
    /* @__PURE__ */ jsxs("div", { className: `ui-cbc__body`, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-cbc__head`, children: [
        /* @__PURE__ */ jsx("h3", { id: `${b}-title`, className: `ui-cbc__title`, children: title }),
        periods2 && periods2.length > 1 && /* @__PURE__ */ jsxs("div", { ref: RRef, className: `ui-cbc__switch`, role: `radiogroup`, "aria-label": `Period`, onKeyDown, children: [
          /* @__PURE__ */ jsx("span", { ref: zRef, className: `ui-cbc__pill`, "aria-hidden": `true` }),
          periods2.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "aria-checked": e.id === C, tabIndex: e.id === C ? 0 : -1, className: `ui-cbc__option`, onClick: () => V(e.id), children: e.label }, e.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-cbc__figure`, children: [
        /* @__PURE__ */ jsx("p", { className: `ui-cbc__big`, "aria-hidden": `true`, children: format2(j[`#figure`] ?? 0) }),
        delta !== void 0 && !U && /* @__PURE__ */ jsxs("span", { className: `ui-cbc__delta`, "data-up": G || void 0, children: [
          /* @__PURE__ */ jsx("svg", { viewBox: `0 0 12 12`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: G ? `M6 9.5v-7M2.8 5.6 6 2.4l3.2 3.2` : `M6 2.5v7M2.8 6.4 6 9.6l3.2-3.2` }) }),
          Math.abs(delta).toLocaleString(`en-US`, {
            maximumFractionDigits: 1
          }),
          `%`
        ] }, `${C}-${delta}`)
      ] }),
      /* @__PURE__ */ jsx("p", { className: `ui-cbc__caption`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("span", { className: `ui-cbc__caption-in`, children: U ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("i", { className: `ui-cbc__swatch`, style: {
          background: U.color
        } }),
        U.label,
        ` \xB7 `,
        W(U.key).toFixed(0),
        `%`
      ] }) : totalLabel }, U?.key ?? `#total`) }),
      /* @__PURE__ */ jsxs("p", { className: `ui-cbc__sr`, children: [
        totalLabel,
        `: `,
        format2(O),
        delta === void 0 ? `` : `, ${G ? `up` : `down`} ${Math.abs(delta)}% against the previous period`
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-cbc__bar`, "data-active": k ? `` : void 0, "aria-hidden": `true`, onPointerLeave: () => setW(null), children: ERef.current.map((e) => {
        let flexGrow = W(e.key);
        if (flexGrow > 0.05) {
          return /* @__PURE__ */ jsx("span", { className: `ui-cbc__seg`, "data-active": e.key === k || void 0, style: {
            flexGrow,
            background: e.color
          }, onPointerEnter: () => D.has(e.key) && setW(e.key) }, e.key);
        }
        return null;
      }) }),
      /* @__PURE__ */ jsx("ul", { className: `ui-cbc__list`, "data-active": k ? `` : void 0, onPointerLeave: () => setW(null), children: N.map((e) => /* @__PURE__ */ jsx("li", { ref: (t) => {
        if (t) {
          IRef.current.set(e.key, t);
        } else {
          IRef.current.delete(e.key);
        }
      }, className: `ui-cbc__row`, "data-leaving": e.leaving || void 0, children: /* @__PURE__ */ jsxs("div", { className: `ui-cbc__item`, tabIndex: e.leaving ? -1 : 0, "data-active": e.key === k || void 0, onPointerEnter: () => !e.leaving && setW(e.key), onFocus: () => !e.leaving && setW(e.key), onBlur: () => setW(null), children: [
        /* @__PURE__ */ jsx("i", { className: `ui-cbc__swatch`, style: {
          background: e.color
        } }),
        /* @__PURE__ */ jsx("span", { className: `ui-cbc__label`, children: e.label }),
        /* @__PURE__ */ jsx("span", { className: `ui-cbc__value`, children: format2(j[e.key] ?? 0) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-cbc__share`, children: [
          W(e.key).toFixed(0),
          `%`
        ] })
      ] }) }, e.key)) })
    ] }),
    footer !== null && /* @__PURE__ */ jsx("div", { className: `ui-cbc__foot`, children: footer ?? (F && /* @__PURE__ */ jsxs("span", { className: `ui-cbc__foot-in`, children: [
      `Largest: `,
      /* @__PURE__ */ jsx("b", { children: F.label })
    ] }, F.key)) })
  ] });
}
var f = `.ui-cbc{--ui-cbc-card: #ffffff;--ui-cbc-ink: rgba(0, 0, 0, 0.88);--ui-cbc-strong: #000000;--ui-cbc-text: rgba(0, 0, 0, 0.61);--ui-cbc-muted: rgba(0, 0, 0, 0.45);--ui-cbc-faint: rgba(0, 0, 0, 0.27);--ui-cbc-line: rgba(0, 0, 0, 0.06);--ui-cbc-wash: rgba(0, 0, 0, 0.03);--ui-cbc-fill: rgba(0, 0, 0, 0.06);--ui-cbc-up: #1a9a52;--ui-cbc-up-bg: rgba(26, 154, 82, 0.08);--ui-cbc-down: #e5484d;--ui-cbc-down-bg: rgba(229, 72, 77, 0.08);--ui-cbc-c1: rgba(0, 96, 226, 0.765);--ui-cbc-c2: rgba(0, 96, 226, 0.5);--ui-cbc-c3: rgba(0, 96, 226, 0.32);--ui-cbc-c4: rgba(0, 96, 226, 0.18);--ui-cbc-c5: rgba(0, 0, 0, 0.14);--ui-cbc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cbc-focus: rgba(0, 96, 226, 0.35);--ui-cbc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-cbc-snap: cubic-bezier(0.25, 0.9, 0.3, 1);box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 360px;overflow: hidden;border-radius: 10px;background: var(--ui-cbc-card);box-shadow: var(--ui-cbc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-cbc-ink);-webkit-font-smoothing: antialiased}.ui-cbc *, .ui-cbc *::before, .ui-cbc *::after{box-sizing: border-box}:where(.ui-cbc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cbc) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-cbc) ul{list-style: none}:where(.ui-cbc) svg{display: block;flex: none}.ui-cbc :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-cbc-focus);outline-offset: 1px}.ui-cbc b{font-weight: 500;color: var(--ui-cbc-ink)}.ui-cbc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}.ui-cbc__body{padding: 16px 16px 10px}.ui-cbc__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 28px}.ui-cbc__title{overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-cbc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-cbc__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;gap: 4px;flex: none}.ui-cbc__pill{position: absolute;top: 0;left: 0;border-radius: 6px;background: var(--ui-cbc-fill);opacity: 0;pointer-events: none;transition: transform 200ms var(--ui-cbc-snap), width 200ms var(--ui-cbc-snap)}.ui-cbc__option{position: relative;z-index: 1;height: 28px;padding: 4px 10px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cbc-line);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cbc-text);white-space: nowrap;transition: color 90ms ease, background-color 90ms ease}.ui-cbc__option[aria-checked="true"]{color: var(--ui-cbc-ink)}@media (hover: hover){.ui-cbc__option[aria-checked="false"]:hover{background: var(--ui-cbc-wash)}}.ui-cbc__figure{display: flex;align-items: center;gap: 8px;margin-top: 14px}.ui-cbc__big{font-size: 24px;font-weight: 500;line-height: 32px;letter-spacing: -0.02em;color: var(--ui-cbc-strong);font-variant-numeric: tabular-nums}.ui-cbc__delta{display: inline-flex;align-items: center;gap: 2px;height: 20px;padding: 0 6px 0 4px;border-radius: 5px;background: var(--ui-cbc-down-bg);color: var(--ui-cbc-down);font-size: 12px;font-weight: 500;line-height: 16px;font-variant-numeric: tabular-nums;animation: ui-cbc-pop 380ms var(--ui-cbc-ease) both}.ui-cbc__delta[data-up]{background: var(--ui-cbc-up-bg);color: var(--ui-cbc-up)}.ui-cbc__delta svg{width: 12px;height: 12px;fill: none;stroke: currentColor;stroke-width: 1.3;stroke-linecap: round;stroke-linejoin: round}.ui-cbc__caption{height: 16px;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cbc-muted);font-variant-numeric: tabular-nums}.ui-cbc__caption-in{display: inline-flex;align-items: center;gap: 6px;animation: ui-cbc-in 260ms var(--ui-cbc-ease) both}.ui-cbc__bar{display: flex;gap: 2px;height: 6px;margin-top: 16px;padding: 0;border-radius: 3px}.ui-cbc__seg{flex: 0 1 0;height: 100%;min-width: 2px;border-radius: 1.5px;transition: opacity 160ms ease, transform 200ms var(--ui-cbc-ease)}.ui-cbc__seg:first-child{border-radius: 3px 1.5px 1.5px 3px}.ui-cbc__seg:last-child{border-radius: 1.5px 3px 3px 1.5px}.ui-cbc__bar[data-active] .ui-cbc__seg:not([data-active]){opacity: 0.3}.ui-cbc__seg[data-active]{transform: scaleY(1.5)}.ui-cbc__list{position: relative;display: grid;margin-top: 10px}.ui-cbc__row{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 320ms var(--ui-cbc-ease), opacity 200ms ease}.ui-cbc__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-cbc__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 32px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 6px;cursor: default;transition: background-color 90ms ease-out, opacity 160ms ease}.ui-cbc__item[data-active]{background: var(--ui-cbc-wash)}.ui-cbc__list[data-active] .ui-cbc__item:not([data-active]){opacity: 0.45}.ui-cbc__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-cbc__label{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-cbc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cbc__value{color: var(--ui-cbc-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-cbc__share{width: 34px;font-size: 12px;line-height: 16px;text-align: right;color: var(--ui-cbc-muted);font-variant-numeric: tabular-nums}.ui-cbc__foot{display: flex;align-items: center;min-height: 40px;padding: 0 16px;overflow: hidden;border-top: 0.5px solid var(--ui-cbc-line);font-size: 12px;line-height: 16px;color: var(--ui-cbc-muted);white-space: nowrap}.ui-cbc__foot-in{overflow: hidden;text-overflow: ellipsis;animation: ui-cbc-in 320ms var(--ui-cbc-ease) both}@keyframes ui-cbc-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-cbc-pop{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@container (max-width: 320px){.ui-cbc__body{padding: 14px 14px 8px}.ui-cbc__foot{padding: 0 14px}.ui-cbc__switch{gap: 2px}.ui-cbc__option{padding: 4px 8px}}@container (max-width: 250px){.ui-cbc__share{display: none}.ui-cbc__option{padding: 4px 6px}}@media (hover: none) and (pointer: coarse){.ui-cbc__option{height: 32px;padding: 6px 10px}.ui-cbc__item{height: 40px}.ui-cbc__foot{min-height: 44px}}@media (prefers-reduced-motion: reduce){.ui-cbc *, .ui-cbc *::before, .ui-cbc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cbc{--ui-cbc-card: #1c1c1e;--ui-cbc-ink: rgba(255, 255, 255, 0.9);--ui-cbc-strong: #ffffff;--ui-cbc-text: rgba(255, 255, 255, 0.62);--ui-cbc-muted: rgba(255, 255, 255, 0.46);--ui-cbc-faint: rgba(255, 255, 255, 0.3);--ui-cbc-line: rgba(255, 255, 255, 0.08);--ui-cbc-wash: rgba(255, 255, 255, 0.04);--ui-cbc-fill: rgba(255, 255, 255, 0.08);--ui-cbc-up: #3ec27a;--ui-cbc-up-bg: rgba(62, 194, 122, 0.14);--ui-cbc-down: #ff6b70;--ui-cbc-down-bg: rgba(229, 72, 77, 0.14);--ui-cbc-c1: #4d8dff;--ui-cbc-c2: rgba(77, 141, 255, 0.62);--ui-cbc-c3: rgba(77, 141, 255, 0.4);--ui-cbc-c4: rgba(77, 141, 255, 0.22);--ui-cbc-c5: rgba(255, 255, 255, 0.16);--ui-cbc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cbc-focus: rgba(77, 141, 255, 0.5)}`;
var periods = [{
  id: `7d`,
  label: `7d`
}, {
  id: `30d`,
  label: `30d`
}, {
  id: `90d`,
  label: `90d`
}];
var m = {
  "7d": {
    delta: 12.4,
    items: [{
      label: `Direct`,
      value: 4820
    }, {
      label: `Organic search`,
      value: 3910
    }, {
      label: `Referrals`,
      value: 2240
    }, {
      label: `Social`,
      value: 1680
    }, {
      label: `Email`,
      value: 940
    }]
  },
  "30d": {
    delta: 8.1,
    items: [{
      label: `Organic search`,
      value: 18400
    }, {
      label: `Direct`,
      value: 16900
    }, {
      label: `Social`,
      value: 9800
    }, {
      label: `Referrals`,
      value: 7300
    }, {
      label: `Email`,
      value: 5200
    }]
  },
  "90d": {
    delta: -3.2,
    items: [{
      label: `Organic search`,
      value: 51200
    }, {
      label: `Social`,
      value: 38600
    }, {
      label: `Direct`,
      value: 36100
    }, {
      label: `Email`,
      value: 21400
    }, {
      label: `Referrals`,
      value: 16900
    }]
  }
};
var format = (e) => `$${Math.round(e).toLocaleString(`en-US`)}`;
function GComponent() {
  let [e, setE] = n3.useState(`7d`);
  let iRef = n3.useRef(false);
  n3.useEffect(() => {
    let e2 = window.setInterval(() => {
      if (!iRef.current) {
        setE((e3) => periods[(periods.findIndex((t) => t.id === e3) + 1) % periods.length].id);
      }
    }, 2800);
    return () => window.clearInterval(e2);
  }, []);
  let a2 = () => iRef.current = true;
  return /* @__PURE__ */ jsx("div", { className: `cb-demo`, onPointerEnter: a2, onPointerDownCapture: a2, onKeyDownCapture: a2, onFocusCapture: a2, children: /* @__PURE__ */ jsx(D1Component, { title: `Revenue by channel`, periods, period: e, onPeriodChange: setE, items: m[e].items, delta: m[e].delta, format, totalLabel: `Total revenue` }) });
}

export {
  GComponent
};
