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

// reconstructed/component-DxL4SVuQ.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e, t = 0) => new Intl.NumberFormat(`en-US`, {
  minimumFractionDigits: t,
  maximumFractionDigits: t
}).format(e);
var a = (e, t) => {
  if (t) {
    return `${e}\xA0${t}`;
  }
  return e;
};
var o = new Intl.DateTimeFormat(`en-US`, {
  month: `short`,
  day: `numeric`
});
function s(e) {
  let t = Math.ceil((e.getTime() - Date.now()) / 864e5);
  if (t <= 0) {
    return `Resets today`;
  }
  if (t === 1) {
    return `Resets tomorrow`;
  }
  return `Resets in ${t}\xA0days`;
}
var c = [`var(--ui-um-c1)`, `var(--ui-um-c2)`, `var(--ui-um-c3)`, `var(--ui-um-c4)`, `var(--ui-um-c5)`];
var l = (e) => 1 - (1 - e) ** 4;
var u = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function useD(e, t, r2) {
  let [i2, setI] = n3.useState(() => Object.fromEntries(Object.keys(e).map((e2) => [e2, 0])));
  let oRef = n3.useRef(i2);
  let sRef = n3.useRef(false);
  let c2 = JSON.stringify(e);
  n3.useEffect(() => {
    let e2 = JSON.parse(c2);
    let n4 = {
      ...oRef.current
    };
    if (u()) {
      oRef.current = e2;
      setI(e2);
      return;
    }
    let i3 = Object.values(e2).some((e3) => e3 !== 0);
    let d = i3 && !sRef.current ? t : r2;
    if (i3) {
      sRef.current = true;
    }
    let f2 = performance.now();
    let p2 = 0;
    let m = (t2) => {
      let r3 = Math.min(1, (t2 - f2) / d);
      let i4 = l(r3);
      let s2 = {};
      for (let t3 in e2) {
        s2[t3] = (n4[t3] ?? 0) + (e2[t3] - (n4[t3] ?? 0)) * i4;
      }
      oRef.current = s2;
      setI(s2);
      if (r3 < 1) {
        p2 = requestAnimationFrame(m);
      }
    };
    p2 = requestAnimationFrame(m);
    return () => cancelAnimationFrame(p2);
  }, [c2]);
  return (e2) => i2[e2] ?? 0;
}
function f(e, t, n4) {
  if (!e || !t) {
    return;
  }
  let r2 = e.querySelector(n4);
  if (!r2 || !r2.offsetWidth) {
    t.style.opacity = `0`;
    return;
  }
  let i2 = !t.dataset.ready;
  if (i2) {
    t.style.transition = `none`;
  }
  t.style.opacity = `1`;
  t.style.width = `${r2.offsetWidth}px`;
  t.style.height = `${r2.offsetHeight}px`;
  t.style.transform = `translate(${r2.offsetLeft}px, ${r2.offsetTop}px)`;
  if (i2) {
    t.dataset.ready = `1`;
    t.offsetWidth;
    t.style.transition = ``;
  }
}
function p(e, t) {
  let n4 = [...t];
  e.forEach((e2, r2) => {
    if (!t.some((t2) => t2.label === e2.label)) {
      n4.splice(Math.min(r2, n4.length), 0, {
        ...e2,
        value: 0,
        leaving: true
      });
    }
  });
  return n4;
}
function MComponent({
  total,
  used,
  limits = [],
  periods,
  period,
  defaultPeriod,
  onPeriodChange,
  resetAt,
  daily,
  onUpgrade,
  title = `Usage`,
  plan,
  unit = `credits`,
  warnAt = 0.8,
  upgradeLabel = `Upgrade`,
  topUpLabel = `Add credits`,
  className
}) {
  let b = n3.useId();
  let xRef = n3.useRef(null);
  let SRef = n3.useRef(null);
  let CRef = n3.useRef(null);
  let wRef = n3.useRef(null);
  let TRef = n3.useRef(null);
  let ceRef = n3.useRef(null);
  let leRef = n3.useRef(null);
  let [ue, setUe] = n3.useState(defaultPeriod ?? periods?.[0]?.id);
  let E = period ?? ue;
  let [fe, setFe] = n3.useState(false);
  let [D, setD] = n3.useState(null);
  let [k, setK] = n3.useState(null);
  let [A, setA] = n3.useState(null);
  let [he, setHe] = n3.useState(``);
  let MRef = n3.useRef(/* @__PURE__ */ new Map());
  let _e = (e) => {
    if (e.color) {
      return e.color;
    }
    if (!MRef.current.has(e.label)) {
      MRef.current.set(e.label, c[MRef.current.size % c.length]);
    }
    return MRef.current.get(e.label);
  };
  let N = used.map((e) => ({
    ...e,
    color: _e(e)
  }));
  let [P, setP] = n3.useState(N);
  let ve = used.map((e) => `${e.label}:${e.value}:${e.color ?? ``}`).join(`|`);
  let IRef = n3.useRef(true);
  n3.useLayoutEffect(() => {
    if (IRef.current) {
      IRef.current = false;
      return;
    }
    setP((e2) => p(e2.filter((e3) => !e3.leaving), N));
    let e = window.setTimeout(() => setP((e2) => e2.filter((e3) => !e3.leaving)), 460);
    return () => clearTimeout(e);
  }, [ve]);
  n3.useEffect(() => {
    let xRef_current = xRef.current;
    if (!xRef_current || typeof IntersectionObserver > `u`) {
      setFe(true);
      return;
    }
    let t = new IntersectionObserver((e) => {
      if (e.some((e2) => e2.isIntersecting)) {
        setFe(true);
        t.disconnect();
      }
    }, {
      threshold: 0.2
    });
    t.observe(xRef_current);
    return () => t.disconnect();
  }, []);
  let used_1 = used.reduce((acc, item) => acc + Math.max(0, item.value), 0);
  let R = total > 0 ? used_1 / total : 0;
  let z = R >= 1 ? `limit` : R >= warnAt ? `warn` : `ok`;
  let ye = Math.max(total, used_1) || 1;
  let B = {
    used: used_1,
    left: Math.max(0, total - used_1),
    pct: R * 100
  };
  P.forEach((e) => B[`r:${e.label}`] = e.leaving ? 0 : Math.max(0, e.value));
  limits.forEach((e) => B[`l:${e.label}`] = e.used);
  daily?.forEach((e, t) => B[`d:${t}`] = e.value ?? 0);
  if (!fe) {
    for (let e in B) {
      B[e] = 0;
    }
  }
  let V = useD(B, 1200, 650);
  let left = 0;
  let U = P.map((e) => {
    let width = V(`r:${e.label}`) / ye * 100;
    let n4 = {
      ...e,
      left,
      width
    };
    left += width;
    return n4;
  });
  let W = P.find((e) => e.label === D && !e.leaving);
  let G = P.find((e) => e.label === k);
  let K = U.find((e) => e.label === k);
  let be = K ? Math.min(100, Math.max(0, K.left + K.width / 2)) : 50;
  let q = (e) => {
    setD(e);
    if (e) {
      setK(e);
    }
  };
  let xe = (e) => {
    let t = e.currentTarget.getBoundingClientRect();
    let n4 = (e.clientX - t.left) / t.width * 100;
    return U.find((e2) => !e2.leaving && e2.width > 0 && n4 >= e2.left && n4 <= e2.left + e2.width)?.label ?? null;
  };
  let Se = (e) => {
    let t = P.filter((e2) => !e2.leaving && e2.value > 0);
    if (!t.length) {
      return;
    }
    let n4 = t.findIndex((e2) => e2.label === D);
    if (e.key === `ArrowRight`) {
      q(t[(n4 + 1) % t.length].label);
    } else if (e.key === `ArrowLeft`) {
      q(t[(n4 - 1 + t.length) % t.length].label);
    } else if (e.key === `Escape`) {
      q(null);
    } else {
      return;
    }
    e.preventDefault();
  };
  let J = daily ?? [];
  let Ce = Math.max(1, ...J.map((e) => e.value ?? 0));
  let Y = J.filter((e) => e.value !== null);
  let X = Y.length ? Y.reduce((acc, item) => acc + (item.value ?? 0), 0) / Y.length : 0;
  let we = (e) => {
    let t = e.currentTarget.getBoundingClientRect();
    let n4 = Math.floor((e.clientX - t.left) / t.width * J.length);
    return Math.min(J.length - 1, Math.max(0, n4));
  };
  let Te = (e) => {
    if (J.length) {
      if (e.key === `ArrowRight`) {
        setA((e2) => Math.min(J.length - 1, e2 === null ? 0 : e2 + 1));
      } else if (e.key === `ArrowLeft`) {
        setA((e2) => Math.max(0, e2 === null ? J.length - 1 : e2 - 1));
      } else if (e.key === `Escape`) {
        setA(null);
      } else {
        return;
      }
      e.preventDefault();
    }
  };
  let Z = A === null ? void 0 : J[A];
  let EeRef = n3.useRef(J.length);
  let DeRef = n3.useRef(false);
  if (EeRef.current !== J.length) {
    EeRef.current = J.length;
    DeRef.current = true;
  }
  let Oe = (e) => {
    if (e !== E) {
      if (period === void 0) {
        setUe(e);
      }
      onPeriodChange?.(e);
      setD(null);
      setA(null);
    }
  };
  let ke = (e) => {
    if (!periods?.length) {
      return;
    }
    let t = periods.findIndex((e2) => e2.id === E);
    let n4 = -1;
    if (e.key === `ArrowRight` || e.key === `ArrowDown`) {
      n4 = (t + 1) % periods.length;
    } else if (e.key === `ArrowLeft` || e.key === `ArrowUp`) {
      n4 = (t - 1 + periods.length) % periods.length;
    }
    if (!(n4 < 0)) {
      e.preventDefault();
      Oe(periods[n4].id);
      wRef.current?.querySelectorAll(`[role=radio]`)[n4]?.focus();
    }
  };
  n3.useLayoutEffect(() => {
    f(wRef.current, TRef.current, `[aria-checked="true"]`);
  });
  n3.useLayoutEffect(() => {
    let wRef_current = wRef.current;
    if (!wRef_current) {
      return;
    }
    let t = new ResizeObserver(() => f(wRef_current, TRef.current, `[aria-checked="true"]`));
    t.observe(wRef_current);
    return () => t.disconnect();
  }, []);
  n3.useLayoutEffect(() => {
    let SRef_current = SRef.current;
    let CRef_current = CRef.current;
    if (!SRef_current || !CRef_current) {
      return;
    }
    let n4 = () => SRef_current.style.height = `${CRef_current.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(CRef_current);
    return () => r2.disconnect();
  }, []);
  n3.useLayoutEffect(() => {
    let ceRef_current = ceRef.current;
    let leRef_current = leRef.current;
    if (!ceRef_current || !leRef_current) {
      return;
    }
    let n4 = () => ceRef_current.style.width = `${leRef_current.offsetWidth}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(leRef_current);
    return () => r2.disconnect();
  }, []);
  let AeRef = n3.useRef(z);
  n3.useEffect(() => {
    if (AeRef.current !== z) {
      AeRef.current = z;
      setHe(z === `limit` ? `${title}: limit reached, ${i(used_1)} of ${i(total)} ${unit} used` : z === `warn` ? `${title}: running low, ${Math.round(R * 100)}% of ${unit} used` : `${title}: ${i(used_1)} of ${i(total)} ${unit} used`);
    }
  }, [z]);
  let Q = resetAt === void 0 ? null : new Date(resetAt);
  let $ = z !== `ok`;
  let je = V(`pct`);
  return /* @__PURE__ */ jsxs("section", { ref: xRef, className: [`ui-um`, className].filter(Boolean).join(` `), "aria-labelledby": `${b}-title`, "data-state": z, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-usage-meter`, precedence: `default`, children: ee }),
    /* @__PURE__ */ jsx("div", { ref: SRef, className: `ui-um__card`, children: /* @__PURE__ */ jsxs("div", { ref: CRef, className: `ui-um__inner`, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-um__head`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-um__heading`, children: [
          /* @__PURE__ */ jsx("h3", { id: `${b}-title`, className: `ui-um__title`, children: title }),
          (plan || Q) && /* @__PURE__ */ jsxs("p", { className: `ui-um__sub`, children: [
            plan,
            plan && Q && /* @__PURE__ */ jsx("span", { className: `ui-um__sep`, children: `\xB7` }),
            Q && /* @__PURE__ */ jsx("time", { dateTime: Q.toISOString(), title: `Resets on ${o.format(Q)}`, children: s(Q) })
          ] })
        ] }),
        periods && periods.length > 1 && /* @__PURE__ */ jsxs("div", { ref: wRef, className: `ui-um__switch`, role: `radiogroup`, "aria-label": `Period`, onKeyDown: ke, children: [
          /* @__PURE__ */ jsx("span", { ref: TRef, className: `ui-um__pill`, "aria-hidden": `true` }),
          periods.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "aria-checked": e.id === E, tabIndex: e.id === E ? 0 : -1, className: `ui-um__option`, onClick: () => Oe(e.id), children: e.label }, e.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-um__figure`, children: [
        /* @__PURE__ */ jsxs("p", { className: `ui-um__amount`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-um__big`, children: i(V(`used`)) }),
          /* @__PURE__ */ jsxs("span", { className: `ui-um__of`, children: [
            `of `,
            a(i(total), unit)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: `ui-um__pct`, "data-state": z, children: [
          $ && /* @__PURE__ */ jsx("span", { className: `ui-um__dot`, "aria-hidden": `true` }),
          i(Math.min(je, 999)),
          `%`
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-um__bar`, tabIndex: 0, role: `group`, "aria-label": `${i(used_1)} of ${i(total)} ${unit} used \u2013 arrow keys read each category`, "data-active": W ? `` : void 0, onPointerMove: (e) => e.pointerType === `mouse` && q(xe(e)), onPointerLeave: (e) => e.pointerType === `mouse` && q(null), onPointerUp: (e) => {
        if (e.pointerType === `mouse`) {
          return;
        }
        let t = xe(e);
        q(t === D ? null : t);
      }, onKeyDown: Se, onBlur: () => q(null), children: [
        /* @__PURE__ */ jsx("div", { className: `ui-um__track`, role: `meter`, "aria-valuemin": 0, "aria-valuemax": total, "aria-valuenow": Math.min(used_1, total), "aria-valuetext": `${i(used_1)} of ${i(total)} ${unit}`, children: U.map((e) => /* @__PURE__ */ jsx("span", { className: `ui-um__seg`, "data-active": e.label === D || void 0, style: {
          width: `${e.width}%`,
          background: e.color
        } }, e.label)) }),
        /* @__PURE__ */ jsx("div", { className: `ui-um__tip`, "data-open": W ? `` : void 0, style: {
          left: `${be}%`,
          "--ui-um-tip-x": `${-be}%`
        }, "aria-live": `polite`, children: G && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-um__tip-label`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-um__swatch`, style: {
              background: G.color
            } }),
            G.label
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-um__tip-value`, children: [
            a(i(G.value), unit),
            /* @__PURE__ */ jsxs("span", { className: `ui-um__muted`, children: [
              ` \xB7 `,
              i(used_1 ? G.value / used_1 * 100 : 0),
              `%`
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: `ui-um__legend`, "aria-label": `By category`, "data-active": W ? `` : void 0, children: P.map((e) => {
        let t = V(`r:${e.label}`);
        return /* @__PURE__ */ jsx("li", { className: `ui-um__row`, "data-leaving": e.leaving || void 0, children: /* @__PURE__ */ jsxs("div", { className: `ui-um__item`, "data-active": e.label === D || void 0, onPointerEnter: (t2) => t2.pointerType === `mouse` && !e.leaving && q(e.label), onPointerLeave: (e2) => e2.pointerType === `mouse` && q(null), onPointerUp: (t2) => t2.pointerType !== `mouse` && !e.leaving && q(e.label === D ? null : e.label), children: [
          /* @__PURE__ */ jsx("span", { className: `ui-um__swatch`, style: {
            background: e.color
          } }),
          /* @__PURE__ */ jsx("span", { className: `ui-um__label`, children: e.label }),
          /* @__PURE__ */ jsx("span", { className: `ui-um__value`, children: i(t) }),
          /* @__PURE__ */ jsxs("span", { className: `ui-um__share`, children: [
            i(V(`used`) ? t / V(`used`) * 100 : 0),
            `%`
          ] })
        ] }) }, e.label);
      }) }),
      J.length > 0 && /* @__PURE__ */ jsxs("div", { className: `ui-um__daily`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-um__daily-head`, children: [
          /* @__PURE__ */ jsx("span", { children: `Per day` }),
          /* @__PURE__ */ jsx("span", { className: `ui-um__daily-read`, children: Z ? /* @__PURE__ */ jsxs(Fragment, { children: [
            Z.label,
            ` \xB7 `,
            /* @__PURE__ */ jsx("b", { children: Z.value === null ? `\u2013` : a(i(Z.value), unit) })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            `Avg `,
            /* @__PURE__ */ jsx("b", { children: i(X) }),
            ` / day`
          ] }) }, Z ? `d${A}` : `avg`)
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-um__spark`, tabIndex: 0, role: `img`, "aria-label": `${title} per day, ${i(X)} ${unit} on average \u2013 arrow keys read each day`, "data-hover": A !== null || void 0, "data-regrow": DeRef.current || void 0, "data-few": J.length <= 14 || void 0, onPointerMove: (e) => setA(we(e)), onPointerDown: (e) => setA(we(e)), onPointerLeave: (e) => e.pointerType === `mouse` && setA(null), onKeyDown: Te, onBlur: () => setA(null), children: J.map((e, t) => /* @__PURE__ */ jsx("span", { className: `ui-um__day`, "data-future": e.value === null || void 0, "data-active": t === A || void 0, style: {
          "--i": t
        }, children: /* @__PURE__ */ jsx("span", { style: {
          height: e.value === null ? void 0 : `${Math.max(4, V(`d:${t}`) / Ce * 100)}%`
        } }) }, t)) }, J.length)
      ] }),
      limits.length > 0 && /* @__PURE__ */ jsx("ul", { className: `ui-um__limits`, "aria-label": `Plan limits`, style: {
        "--n": Math.min(3, limits.length)
      }, children: limits.map((e) => {
        let t = e.total == null || !isFinite(e.total);
        let n4 = e.decimals ?? (Number.isInteger(e.used) && (t || Number.isInteger(e.total)) ? 0 : 1);
        let o2 = t ? 0 : e.used / Math.max(e.total, 1e-9);
        let s2 = t ? `ok` : o2 >= 1 ? `limit` : o2 >= warnAt ? `warn` : `ok`;
        let c2 = V(`l:${e.label}`);
        let l2 = t ? `\u221E` : i(e.total, Number.isInteger(e.total) ? 0 : n4);
        return /* @__PURE__ */ jsxs("li", { className: `ui-um__limit`, "data-state": s2, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-um__limit-label`, children: [
            e.label,
            s2 !== `ok` && /* @__PURE__ */ jsx("span", { className: `ui-um__dot`, "aria-label": s2 === `limit` ? `At the limit` : `Close to the limit` })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-um__limit-value`, children: [
            i(c2, n4),
            /* @__PURE__ */ jsxs("span", { className: `ui-um__muted`, children: [
              ` of `,
              a(l2, t ? void 0 : e.unit)
            ] })
          ] }),
          t ? /* @__PURE__ */ jsx("span", { className: `ui-um__thin`, "data-unlimited": ``, "aria-label": `${e.label}: ${i(e.used, n4)}, unlimited`, role: `img` }) : /* @__PURE__ */ jsx("span", { className: `ui-um__thin`, role: `meter`, "aria-label": e.label, "aria-valuemin": 0, "aria-valuemax": e.total, "aria-valuenow": Math.min(e.used, e.total), "aria-valuetext": `${i(e.used, n4)} of ${a(l2, e.unit)}`, children: /* @__PURE__ */ jsx("span", { style: {
            width: `${Math.min(100, c2 / Math.max(e.total, 1e-9) * 100)}%`
          } }) })
        ] }, e.label);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: `ui-um__foot`, children: [
      /* @__PURE__ */ jsxs("span", { className: `ui-um__status`, children: [
        $ && /* @__PURE__ */ jsx("span", { className: `ui-um__dot`, "aria-hidden": `true` }),
        z === `limit` ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("b", { children: `Limit reached` }),
          used_1 > total && /* @__PURE__ */ jsx("span", { className: `ui-um__muted`, children: a(i(used_1 - total), `over`) })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          z === `warn` && /* @__PURE__ */ jsx("b", { children: `Running low` }),
          /* @__PURE__ */ jsxs("span", { className: z === `warn` ? `ui-um__muted` : void 0, children: [
            a(i(V(`left`)), unit),
            ` left`
          ] })
        ] })
      ] }, z),
      /* @__PURE__ */ jsx("button", { ref: ceRef, type: `button`, className: `ui-um__action`, "data-strong": $ || void 0, onClick: () => onUpgrade?.(z), children: /* @__PURE__ */ jsx("span", { ref: leRef, className: `ui-um__action-inner`, children: /* @__PURE__ */ jsx("span", { className: `ui-um__action-text`, children: $ ? topUpLabel : upgradeLabel }, $ ? `top-up` : `upgrade`) }) })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-um__live`, "aria-live": `polite`, children: he })
  ] });
}
var ee = `.ui-um{--ui-um-tray: #f0f0f0;--ui-um-card: #ffffff;--ui-um-line: #ececec;--ui-um-ink: #171717;--ui-um-text: #404040;--ui-um-muted: #8f8f8f;--ui-um-faint: #b5b5b5;--ui-um-well: #f4f4f5;--ui-um-hover: #f4f4f5;--ui-um-track: #efeff1;--ui-um-fill: #4a4a4f;--ui-um-spark: #dcdce0;--ui-um-accent: #2f6bff;--ui-um-warn: #f59e0b;--ui-um-warn-text: #b45309;--ui-um-c1: #2f6bff;--ui-um-c2: #74a0ff;--ui-um-c3: #b4cbff;--ui-um-c4: #a8a8ae;--ui-um-c5: #d4d4d8;--ui-um-focus: rgba(23, 23, 23, 0.22);--ui-um-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.06);--ui-um-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;position: relative;display: grid;width: 100%;max-width: 460px;padding: 4px;border-radius: 20px;background: var(--ui-um-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;color: var(--ui-um-text);-webkit-font-smoothing: antialiased}.ui-um *, .ui-um *::before, .ui-um *::after{box-sizing: border-box}:where(.ui-um) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-um) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-um) ul{list-style: none}.ui-um :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-um-focus);outline-offset: 2px}.ui-um b{font-weight: 500;color: var(--ui-um-ink)}.ui-um__muted{color: var(--ui-um-muted)}.ui-um__card{overflow: hidden;border-radius: 16px;background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: height 360ms var(--ui-um-ease)}.ui-um__inner{display: flow-root;padding: 14px 16px 18px}.ui-um__head{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px}.ui-um__heading{min-width: 0;padding-top: 2px}.ui-um__title{overflow: hidden;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-um-ink);white-space: nowrap;text-overflow: ellipsis}.ui-um__sub{font-size: 12.5px;color: var(--ui-um-muted);white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-um__sep{margin: 0 6px;color: var(--ui-um-faint)}.ui-um__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;flex: none;padding: 2px;border-radius: 10px;background: var(--ui-um-well);box-shadow: inset 0 0 0 1px var(--ui-um-line)}.ui-um__pill{position: absolute;top: 0;left: 0;border-radius: 8px;background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.06);opacity: 0;pointer-events: none;transition: transform 320ms var(--ui-um-ease), width 320ms var(--ui-um-ease), height 320ms var(--ui-um-ease), opacity 200ms ease}.ui-um__option{position: relative;z-index: 1;min-width: 0;height: 26px;padding: 0 9px;overflow: hidden;border-radius: 8px;font-size: 12px;font-weight: 500;color: var(--ui-um-muted);white-space: nowrap;text-overflow: ellipsis;transition: color 200ms ease}.ui-um__option:hover, .ui-um__option[aria-checked="true"]{color: var(--ui-um-ink)}.ui-um__figure{display: flex;align-items: baseline;justify-content: space-between;gap: 12px;margin-top: 18px}.ui-um__amount{display: flex;flex-wrap: wrap;align-items: baseline;column-gap: 6px;min-width: 0}.ui-um__big{font-size: 28px;font-weight: 600;line-height: 34px;letter-spacing: -0.02em;color: var(--ui-um-ink);font-variant-numeric: tabular-nums}.ui-um__of{font-size: 13px;color: var(--ui-um-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-um__pct{display: inline-flex;flex: none;align-items: center;gap: 6px;font-size: 13px;font-weight: 500;color: var(--ui-um-text);font-variant-numeric: tabular-nums;transition: color 260ms ease}.ui-um__pct[data-state="warn"]{color: var(--ui-um-warn-text)}.ui-um__pct[data-state="limit"]{color: var(--ui-um-ink)}.ui-um__dot{display: inline-block;flex: none;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-um-warn);animation: ui-um-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-um[data-state="limit"] .ui-um__pct .ui-um__dot, .ui-um[data-state="limit"] .ui-um__status .ui-um__dot, .ui-um__limit[data-state="limit"] .ui-um__dot{box-shadow: 0 0 0 3px color-mix(in srgb, var(--ui-um-warn) 22%, transparent)}.ui-um__bar{position: relative;margin-top: 10px;padding: 4px 0;border-radius: 6px;cursor: default}.ui-um__track{display: flex;height: 10px;overflow: hidden;border-radius: 5px;background: var(--ui-um-track)}.ui-um__seg{position: relative;flex: none;height: 100%;overflow: hidden;transition: opacity 200ms ease}.ui-um__seg::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: 2px;background: var(--ui-um-card)}.ui-um__bar[data-active] .ui-um__seg:not([data-active]){opacity: 0.28}.ui-um__tip{position: absolute;bottom: calc(100% + 6px);z-index: 2;display: grid;gap: 1px;padding: 7px 10px 8px;border: 1px solid var(--ui-um-line);border-radius: 10px;background: var(--ui-um-card);box-shadow: var(--ui-um-tip-shadow);white-space: nowrap;pointer-events: none;opacity: 0;transform: translate(var(--ui-um-tip-x), 4px) scale(0.97);transition: left 260ms var(--ui-um-ease), transform 260ms var(--ui-um-ease), opacity 160ms ease}.ui-um__tip[data-open]{opacity: 1;transform: translate(var(--ui-um-tip-x), 0)}.ui-um__tip-label{display: flex;align-items: center;gap: 7px;font-size: 12px;color: var(--ui-um-muted)}.ui-um__tip-value{font-size: 13px;font-weight: 500;color: var(--ui-um-ink);font-variant-numeric: tabular-nums}.ui-um__tip-value .ui-um__muted{font-weight: 400}.ui-um__legend{display: grid;margin-top: 10px}.ui-um__row{display: grid;grid-template-rows: 1fr;animation: ui-um-grow 380ms var(--ui-um-ease) both;transition: grid-template-rows 320ms var(--ui-um-ease) 80ms, opacity 200ms ease}.ui-um__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-um__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 30px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 8px;transition: background-color 160ms ease, opacity 200ms ease}.ui-um__row[data-leaving] .ui-um__item{background: none}.ui-um__item[data-active]{background: var(--ui-um-hover)}.ui-um__legend[data-active] .ui-um__item:not([data-active]){opacity: 0.45}.ui-um__swatch{flex: none;width: 8px;height: 8px;border-radius: 2.5px}.ui-um__label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-um-text)}.ui-um__value{color: var(--ui-um-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-um__share{width: 40px;text-align: right;color: var(--ui-um-muted);font-variant-numeric: tabular-nums}.ui-um__daily{margin-top: 12px}.ui-um__daily-head{display: flex;justify-content: space-between;gap: 12px;font-size: 12px;color: var(--ui-um-muted);white-space: nowrap}.ui-um__daily-read{font-variant-numeric: tabular-nums;animation: ui-um-in 220ms var(--ui-um-ease) both}.ui-um__spark{display: flex;align-items: stretch;gap: 2px;height: 34px;margin-top: 8px;border-radius: 4px;cursor: default}.ui-um__spark[data-few]{gap: 5px}.ui-um__day{display: flex;flex: 1 1 0;align-items: flex-end;min-width: 0}.ui-um__day > span{width: 100%;border-radius: 2px;background: var(--ui-um-spark);transform-origin: bottom;transition: background-color 160ms ease, opacity 160ms ease}.ui-um__spark[data-regrow] .ui-um__day > span{animation: ui-um-rise 520ms var(--ui-um-ease) both;animation-delay: calc(var(--i) * 18ms)}.ui-um__day[data-future] > span{height: 2px;background: var(--ui-um-track)}.ui-um__spark[data-hover] .ui-um__day:not([data-active]) > span{opacity: 0.6}.ui-um__day[data-active] > span{background: var(--ui-um-accent)}.ui-um__limits{display: grid;grid-template-columns: repeat(var(--n, 3), minmax(0, 1fr));gap: 12px 18px;margin-top: 16px;padding-top: 14px;border-top: 1px solid var(--ui-um-line)}.ui-um__limit{display: grid;grid-template-columns: minmax(0, 1fr);align-content: start;min-width: 0}.ui-um__limit-label{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;font-size: 12px;color: var(--ui-um-muted);white-space: nowrap}.ui-um__limit-value{overflow: hidden;color: var(--ui-um-ink);font-weight: 500;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis}.ui-um__limit-value .ui-um__muted{font-weight: 400}.ui-um__thin{position: relative;display: block;height: 4px;margin-top: 7px;overflow: hidden;border-radius: 2px;background: var(--ui-um-track)}.ui-um__thin > span{position: absolute;top: 0;bottom: 0;left: 0;border-radius: inherit;background: var(--ui-um-fill)}.ui-um__thin[data-unlimited]{background: repeating-linear-gradient(-45deg, var(--ui-um-track) 0 3px, transparent 3px 6px)}.ui-um__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 6px 2px 2px 12px;font-size: 12.5px;color: var(--ui-um-muted)}.ui-um__status{display: flex;align-items: center;gap: 7px;min-width: 0;overflow: hidden;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-um-in 260ms var(--ui-um-ease) both}.ui-um__status > :last-child{overflow: hidden;text-overflow: ellipsis}.ui-um__action{display: inline-flex;flex: none;justify-content: center;height: 32px;overflow: hidden;border-radius: 14px;font-size: 13px;font-weight: 500;color: var(--ui-um-ink);background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: background-color 280ms ease, color 280ms ease, box-shadow 280ms ease, width 320ms var(--ui-um-ease), transform 140ms ease}.ui-um__action:hover{background: var(--ui-um-hover)}.ui-um__action:active{transform: scale(0.97)}.ui-um__action[data-strong]{background: var(--ui-um-ink);color: var(--ui-um-card);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 6px 14px -6px rgba(0, 0, 0, 0.35);animation: ui-um-nudge 520ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-um__action[data-strong]:hover{background: var(--ui-um-ink);opacity: 0.88}.ui-um__action-inner{display: inline-flex;align-items: center;flex: none;height: 100%;padding: 0 14px;white-space: nowrap}.ui-um__action-text{animation: ui-um-in 260ms var(--ui-um-ease) both}.ui-um__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-um-in{from{opacity: 0;transform: translateY(3px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-um-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-um-rise{from{transform: scaleY(0)}to{transform: none}}@keyframes ui-um-pop{0%{transform: scale(0.3)}60%{transform: scale(1.25)}100%{transform: scale(1)}}@keyframes ui-um-nudge{0%{transform: scale(0.94)}60%{transform: scale(1.04)}100%{transform: scale(1)}}@container (max-width: 400px){.ui-um__inner{padding: 12px 14px 16px}.ui-um__head{flex-direction: column;align-items: stretch;gap: 12px}.ui-um__switch{grid-auto-columns: minmax(0, auto)}.ui-um__option{padding: 0 6px}.ui-um__big{font-size: 26px}.ui-um__limits{grid-template-columns: minmax(0, 1fr);gap: 12px}.ui-um__limit{grid-template-columns: minmax(0, 1fr) auto;column-gap: 12px}.ui-um__limit-value{font-size: 12.5px}.ui-um__thin{grid-column: 1 / -1;margin-top: 6px}}@container (max-width: 300px){.ui-um__of{font-size: 12px}.ui-um__share{width: 34px}}@media (hover: none) and (pointer: coarse){.ui-um__option{height: 34px}.ui-um__item{height: 36px}.ui-um__action{height: 38px;border-radius: 13px}.ui-um__foot{min-height: 50px}.ui-um__bar{padding: 10px 0;margin-top: 4px}}@media (prefers-reduced-motion: reduce){.ui-um *, .ui-um *::before, .ui-um *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-um{--ui-um-tray: #111113;--ui-um-card: #19191b;--ui-um-line: #2a2a2e;--ui-um-ink: #ededed;--ui-um-text: #c8c8cc;--ui-um-muted: #8b8b92;--ui-um-faint: #5c5c63;--ui-um-well: #111113;--ui-um-hover: #232326;--ui-um-track: #2a2a2e;--ui-um-fill: #b4b4ba;--ui-um-spark: #3a3a40;--ui-um-accent: #6d8bff;--ui-um-warn: #f5a524;--ui-um-warn-text: #f5b350;--ui-um-c1: #6d8bff;--ui-um-c2: #4c66c9;--ui-um-c3: #34468a;--ui-um-c4: #6b6b72;--ui-um-c5: #45454b;--ui-um-focus: rgba(255, 255, 255, 0.3);--ui-um-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.35)}:where(.dark, [data-theme="dark"]) .ui-um__pill{background: #2a2a2e;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-um__tip{background: #2a2a2d;border-color: rgba(255, 255, 255, 0.1)}`;

export {
  MComponent
};
