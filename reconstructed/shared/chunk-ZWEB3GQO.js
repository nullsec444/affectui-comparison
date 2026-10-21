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

// reconstructed/demo-BgsJzBTE.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => new Intl.NumberFormat(`en-US`, {
  maximumFractionDigits: 0
}).format(e);
var a = [`var(--ui-cb-c1)`, `var(--ui-cb-c2)`, `var(--ui-cb-c3)`, `var(--ui-cb-c4)`, `var(--ui-cb-c5)`];
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
        color: e.color ?? a[ERef.current.length] ?? `var(--ui-cb-c5)`
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
  return /* @__PURE__ */ jsxs("div", { className: [`ui-cb`, className].filter(Boolean).join(` `), role: `group`, "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-compact-breakdown`, precedence: `default`, children: f }),
    /* @__PURE__ */ jsxs("div", { className: `ui-cb__card`, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-cb__head`, children: [
        /* @__PURE__ */ jsx("h3", { id: `${b}-title`, className: `ui-cb__title`, children: title }),
        periods2 && periods2.length > 1 && /* @__PURE__ */ jsxs("div", { ref: RRef, className: `ui-cb__switch`, role: `radiogroup`, "aria-label": `Period`, onKeyDown, children: [
          /* @__PURE__ */ jsx("span", { ref: zRef, className: `ui-cb__pill`, "aria-hidden": `true` }),
          periods2.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "aria-checked": e.id === C, tabIndex: e.id === C ? 0 : -1, className: `ui-cb__option`, onClick: () => V(e.id), children: e.label }, e.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-cb__figure`, children: [
        /* @__PURE__ */ jsx("p", { className: `ui-cb__big`, "aria-hidden": `true`, children: format2(j[`#figure`] ?? 0) }),
        delta !== void 0 && !U && /* @__PURE__ */ jsxs("span", { className: `ui-cb__delta`, "data-up": G || void 0, children: [
          /* @__PURE__ */ jsx("svg", { viewBox: `0 0 12 12`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: G ? `M6 9.5v-7M2.8 5.6 6 2.4l3.2 3.2` : `M6 2.5v7M2.8 6.4 6 9.6l3.2-3.2` }) }),
          Math.abs(delta).toLocaleString(`en-US`, {
            maximumFractionDigits: 1
          }),
          `%`
        ] }, `${C}-${delta}`)
      ] }),
      /* @__PURE__ */ jsx("p", { className: `ui-cb__caption`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("span", { className: `ui-cb__caption-in`, children: U ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("i", { className: `ui-cb__swatch`, style: {
          background: U.color
        } }),
        U.label,
        ` \xB7 `,
        W(U.key).toFixed(0),
        `%`
      ] }) : totalLabel }, U?.key ?? `#total`) }),
      /* @__PURE__ */ jsxs("p", { className: `ui-cb__sr`, children: [
        totalLabel,
        `: `,
        format2(O),
        delta === void 0 ? `` : `, ${G ? `up` : `down`} ${Math.abs(delta)}% against the previous period`
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-cb__bar`, "data-active": k ? `` : void 0, "aria-hidden": `true`, onPointerLeave: () => setW(null), children: ERef.current.map((e) => {
        let flexGrow = W(e.key);
        if (flexGrow > 0.05) {
          return /* @__PURE__ */ jsx("span", { className: `ui-cb__seg`, "data-active": e.key === k || void 0, style: {
            flexGrow,
            background: e.color
          }, onPointerEnter: () => D.has(e.key) && setW(e.key) }, e.key);
        }
        return null;
      }) }),
      /* @__PURE__ */ jsx("ul", { className: `ui-cb__list`, "data-active": k ? `` : void 0, onPointerLeave: () => setW(null), children: N.map((e) => /* @__PURE__ */ jsx("li", { ref: (t) => {
        if (t) {
          IRef.current.set(e.key, t);
        } else {
          IRef.current.delete(e.key);
        }
      }, className: `ui-cb__row`, "data-leaving": e.leaving || void 0, children: /* @__PURE__ */ jsxs("div", { className: `ui-cb__item`, tabIndex: e.leaving ? -1 : 0, "data-active": e.key === k || void 0, onPointerEnter: () => !e.leaving && setW(e.key), onFocus: () => !e.leaving && setW(e.key), onBlur: () => setW(null), children: [
        /* @__PURE__ */ jsx("i", { className: `ui-cb__swatch`, style: {
          background: e.color
        } }),
        /* @__PURE__ */ jsx("span", { className: `ui-cb__label`, children: e.label }),
        /* @__PURE__ */ jsx("span", { className: `ui-cb__value`, children: format2(j[e.key] ?? 0) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-cb__share`, children: [
          W(e.key).toFixed(0),
          `%`
        ] })
      ] }) }, e.key)) })
    ] }),
    footer !== null && /* @__PURE__ */ jsx("div", { className: `ui-cb__foot`, children: footer ?? (F && /* @__PURE__ */ jsxs("span", { className: `ui-cb__foot-in`, children: [
      `Largest: `,
      /* @__PURE__ */ jsx("b", { children: F.label })
    ] }, F.key)) })
  ] });
}
var f = `.ui-cb{--ui-cb-tray: #f0f0f0;--ui-cb-card: #ffffff;--ui-cb-line: #ececec;--ui-cb-ink: #171717;--ui-cb-text: #404040;--ui-cb-muted: #8f8f8f;--ui-cb-well: #f4f4f5;--ui-cb-hover: #f4f4f5;--ui-cb-up: #18794e;--ui-cb-up-bg: rgba(34, 160, 90, 0.1);--ui-cb-down: #b42318;--ui-cb-down-bg: rgba(220, 60, 60, 0.08);--ui-cb-c1: #2f6bff;--ui-cb-c2: #74a0ff;--ui-cb-c3: #b4cbff;--ui-cb-c4: #a8a8ae;--ui-cb-c5: #d4d4d8;--ui-cb-focus: rgba(23, 23, 23, 0.22);--ui-cb-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 360px;padding: 4px;border-radius: 20px;background: var(--ui-cb-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;color: var(--ui-cb-text);-webkit-font-smoothing: antialiased}.ui-cb *, .ui-cb *::before, .ui-cb *::after{box-sizing: border-box}:where(.ui-cb) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cb) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-cb) ul{list-style: none}.ui-cb :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-cb-focus);outline-offset: 2px}.ui-cb b{font-weight: 500;color: var(--ui-cb-ink)}.ui-cb__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}.ui-cb__card{border-radius: 16px;background: var(--ui-cb-card);box-shadow: 0 0 0 1px var(--ui-cb-line), 0 1px 2px rgba(0, 0, 0, 0.04);padding: 12px 14px 8px}.ui-cb__head{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-height: 30px}.ui-cb__title{overflow: hidden;font-size: 13.5px;font-weight: 600;line-height: 20px;color: var(--ui-cb-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cb__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;flex: none;padding: 2px;border-radius: 10px;background: var(--ui-cb-well);box-shadow: inset 0 0 0 1px var(--ui-cb-line)}.ui-cb__pill{position: absolute;top: 0;left: 0;border-radius: 8px;background: var(--ui-cb-card);box-shadow: 0 0 0 1px var(--ui-cb-line), 0 1px 2px rgba(0, 0, 0, 0.06);opacity: 0;pointer-events: none;transition: transform 420ms var(--ui-cb-ease), width 420ms var(--ui-cb-ease)}.ui-cb__option{position: relative;z-index: 1;height: 24px;padding: 0 8px;border-radius: 8px;font-size: 12px;font-weight: 500;color: var(--ui-cb-muted);white-space: nowrap;transition: color 200ms ease}.ui-cb__option:hover, .ui-cb__option[aria-checked="true"]{color: var(--ui-cb-ink)}.ui-cb__figure{display: flex;align-items: center;gap: 8px;margin-top: 12px}.ui-cb__big{font-size: 26px;font-weight: 600;line-height: 32px;letter-spacing: -0.02em;color: var(--ui-cb-ink);font-variant-numeric: tabular-nums}.ui-cb__delta{display: inline-flex;align-items: center;gap: 2px;height: 20px;padding: 0 6px 0 4px;border-radius: 999px;background: var(--ui-cb-down-bg);color: var(--ui-cb-down);font-size: 12px;font-weight: 500;font-variant-numeric: tabular-nums;animation: ui-cb-pop 380ms var(--ui-cb-ease) both}.ui-cb__delta[data-up]{background: var(--ui-cb-up-bg);color: var(--ui-cb-up)}.ui-cb__delta svg{width: 12px;height: 12px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-cb__caption{height: 18px;overflow: hidden;font-size: 12.5px;line-height: 18px;color: var(--ui-cb-muted);font-variant-numeric: tabular-nums}.ui-cb__caption-in{display: inline-flex;align-items: center;gap: 6px;animation: ui-cb-in 260ms var(--ui-cb-ease) both}.ui-cb__bar{display: flex;gap: 2px;height: 8px;margin-top: 12px;padding: 0;border-radius: 4px}.ui-cb__seg{flex: 0 1 0;height: 100%;min-width: 2px;border-radius: 2.5px;transition: opacity 200ms ease, transform 260ms var(--ui-cb-ease)}.ui-cb__seg:first-child{border-radius: 4px 2.5px 2.5px 4px}.ui-cb__seg:last-child{border-radius: 2.5px 4px 4px 2.5px}.ui-cb__bar[data-active] .ui-cb__seg:not([data-active]){opacity: 0.25}.ui-cb__seg[data-active]{transform: scaleY(1.5)}.ui-cb__list{position: relative;display: grid;margin-top: 8px}.ui-cb__row{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 320ms var(--ui-cb-ease), opacity 200ms ease}.ui-cb__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-cb__item{display: flex;align-items: center;gap: 9px;min-height: 0;height: 30px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 8px;cursor: default;transition: background-color 160ms ease, opacity 200ms ease}.ui-cb__item[data-active]{background: var(--ui-cb-hover)}.ui-cb__list[data-active] .ui-cb__item:not([data-active]){opacity: 0.45}.ui-cb__swatch{flex: none;width: 8px;height: 8px;border-radius: 2.5px}.ui-cb__label{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-cb-text);white-space: nowrap;text-overflow: ellipsis}.ui-cb__value{color: var(--ui-cb-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-cb__share{width: 34px;text-align: right;color: var(--ui-cb-muted);font-variant-numeric: tabular-nums}.ui-cb__foot{display: flex;align-items: center;min-height: 34px;padding: 4px 10px 0;overflow: hidden;font-size: 12.5px;color: var(--ui-cb-muted);white-space: nowrap}.ui-cb__foot-in{overflow: hidden;text-overflow: ellipsis;animation: ui-cb-in 320ms var(--ui-cb-ease) both}@keyframes ui-cb-in{from{opacity: 0;transform: translateY(5px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-cb-pop{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@container (max-width: 250px){.ui-cb__share{display: none}.ui-cb__option{padding: 0 6px}}@media (hover: none) and (pointer: coarse){.ui-cb__option{height: 32px;padding: 0 10px}.ui-cb__item{height: 36px}}@media (prefers-reduced-motion: reduce){.ui-cb *, .ui-cb *::before, .ui-cb *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cb{--ui-cb-tray: #111113;--ui-cb-card: #19191b;--ui-cb-line: #2a2a2e;--ui-cb-ink: #ededed;--ui-cb-text: #c8c8cc;--ui-cb-muted: #8b8b92;--ui-cb-well: #222225;--ui-cb-hover: #222225;--ui-cb-up: #6ee7a8;--ui-cb-up-bg: rgba(110, 231, 168, 0.12);--ui-cb-down: #ff8a80;--ui-cb-down-bg: rgba(255, 138, 128, 0.12);--ui-cb-c1: #5b8cff;--ui-cb-c2: #3d63c9;--ui-cb-c3: #2c4388;--ui-cb-c4: #6b6b73;--ui-cb-c5: #3d3d42;--ui-cb-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-cb__pill{background: #2a2a2e;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06)}`;
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
