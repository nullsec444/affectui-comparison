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

// reconstructed/demo.clean-BjDeSoUM.jsx
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
var c = [`var(--ui-umc-c1)`, `var(--ui-umc-c2)`, `var(--ui-umc-c3)`, `var(--ui-umc-c4)`, `var(--ui-umc-c5)`];
var l = (e) => 1 - (1 - e) ** 4;
var u = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function useEe(e, t, r2) {
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
    let ee = i3 && !sRef.current ? t : r2;
    if (i3) {
      sRef.current = true;
    }
    let d2 = performance.now();
    let f2 = 0;
    let p = (t2) => {
      let r3 = Math.min(1, (t2 - d2) / ee);
      let i4 = l(r3);
      let s2 = {};
      for (let t3 in e2) {
        s2[t3] = (n4[t3] ?? 0) + (e2[t3] - (n4[t3] ?? 0)) * i4;
      }
      oRef.current = s2;
      setI(s2);
      if (r3 < 1) {
        f2 = requestAnimationFrame(p);
      }
    };
    f2 = requestAnimationFrame(p);
    return () => cancelAnimationFrame(f2);
  }, [c2]);
  return (e2) => i2[e2] ?? 0;
}
function d(e, t, n4) {
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
function f(e, t) {
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
function P1Component({
  total,
  used,
  limits = [],
  periods: periods2,
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
  let S = n3.useId();
  let CRef = n3.useRef(null);
  let wRef = n3.useRef(null);
  let TRef = n3.useRef(null);
  let ERef = n3.useRef(null);
  let DRef = n3.useRef(null);
  let oeRef = n3.useRef(null);
  let seRef = n3.useRef(null);
  let [ce, setCe] = n3.useState(defaultPeriod ?? periods2?.[0]?.id);
  let O = period ?? ce;
  let [ue, setUe] = n3.useState(false);
  let [k, setK] = n3.useState(null);
  let [pe, setPe] = n3.useState(null);
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
    setP((e2) => f(e2.filter((e3) => !e3.leaving), N));
    let e = window.setTimeout(() => setP((e2) => e2.filter((e3) => !e3.leaving)), 460);
    return () => clearTimeout(e);
  }, [ve]);
  n3.useEffect(() => {
    let CRef_current = CRef.current;
    if (!CRef_current || typeof IntersectionObserver > `u`) {
      setUe(true);
      return;
    }
    let t = new IntersectionObserver((e) => {
      if (e.some((e2) => e2.isIntersecting)) {
        setUe(true);
        t.disconnect();
      }
    }, {
      threshold: 0.2
    });
    t.observe(CRef_current);
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
  if (!ue) {
    for (let e in B) {
      B[e] = 0;
    }
  }
  let V = useEe(B, 1200, 650);
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
  let W = P.find((e) => e.label === k && !e.leaving);
  let G = P.find((e) => e.label === pe);
  let K = U.find((e) => e.label === pe);
  let be = K ? Math.min(100, Math.max(0, K.left + K.width / 2)) : 50;
  let q = (e) => {
    setK(e);
    if (e) {
      setPe(e);
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
    let n4 = t.findIndex((e2) => e2.label === k);
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
    if (e !== O) {
      if (period === void 0) {
        setCe(e);
      }
      onPeriodChange?.(e);
      setK(null);
      setA(null);
    }
  };
  let ke = (e) => {
    if (!periods2?.length) {
      return;
    }
    let t = periods2.findIndex((e2) => e2.id === O);
    let n4 = -1;
    if (e.key === `ArrowRight` || e.key === `ArrowDown`) {
      n4 = (t + 1) % periods2.length;
    } else if (e.key === `ArrowLeft` || e.key === `ArrowUp`) {
      n4 = (t - 1 + periods2.length) % periods2.length;
    }
    if (!(n4 < 0)) {
      e.preventDefault();
      Oe(periods2[n4].id);
      ERef.current?.querySelectorAll(`[role=radio]`)[n4]?.focus();
    }
  };
  n3.useLayoutEffect(() => {
    d(ERef.current, DRef.current, `[aria-checked="true"]`);
  });
  n3.useLayoutEffect(() => {
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    let t = new ResizeObserver(() => d(ERef_current, DRef.current, `[aria-checked="true"]`));
    t.observe(ERef_current);
    return () => t.disconnect();
  }, []);
  n3.useLayoutEffect(() => {
    let wRef_current = wRef.current;
    let TRef_current = TRef.current;
    if (!wRef_current || !TRef_current) {
      return;
    }
    let n4 = () => wRef_current.style.height = `${TRef_current.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(TRef_current);
    return () => r2.disconnect();
  }, []);
  n3.useLayoutEffect(() => {
    let oeRef_current = oeRef.current;
    let seRef_current = seRef.current;
    if (!oeRef_current || !seRef_current) {
      return;
    }
    let n4 = () => oeRef_current.style.width = `${seRef_current.offsetWidth}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(seRef_current);
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
  return /* @__PURE__ */ jsxs("section", { ref: CRef, className: [`ui-umc`, className].filter(Boolean).join(` `), "aria-labelledby": `${S}-title`, "data-state": z, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-usage-meter-clean`, precedence: `default`, children: te }),
    /* @__PURE__ */ jsx("div", { ref: wRef, className: `ui-umc__card`, children: /* @__PURE__ */ jsxs("div", { ref: TRef, className: `ui-umc__inner`, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-umc__head`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-umc__heading`, children: [
          /* @__PURE__ */ jsx("h3", { id: `${S}-title`, className: `ui-umc__title`, children: title }),
          (plan || Q) && /* @__PURE__ */ jsxs("p", { className: `ui-umc__sub`, children: [
            plan,
            plan && Q && /* @__PURE__ */ jsx("span", { className: `ui-umc__sep`, children: `\xB7` }),
            Q && /* @__PURE__ */ jsx("time", { dateTime: Q.toISOString(), title: `Resets on ${o.format(Q)}`, children: s(Q) })
          ] })
        ] }),
        periods2 && periods2.length > 1 && /* @__PURE__ */ jsxs("div", { ref: ERef, className: `ui-umc__switch`, role: `radiogroup`, "aria-label": `Period`, onKeyDown: ke, children: [
          /* @__PURE__ */ jsx("span", { ref: DRef, className: `ui-umc__pill`, "aria-hidden": `true` }),
          periods2.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "aria-checked": e.id === O, tabIndex: e.id === O ? 0 : -1, className: `ui-umc__option`, onClick: () => Oe(e.id), children: e.label }, e.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-umc__figure`, children: [
        /* @__PURE__ */ jsxs("p", { className: `ui-umc__amount`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-umc__big`, children: i(V(`used`)) }),
          /* @__PURE__ */ jsxs("span", { className: `ui-umc__of`, children: [
            `of `,
            a(i(total), unit)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: `ui-umc__pct`, "data-state": z, children: [
          $ && /* @__PURE__ */ jsx("span", { className: `ui-umc__dot`, "aria-hidden": `true` }),
          i(Math.min(je, 999)),
          `%`
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-umc__bar`, tabIndex: 0, role: `group`, "aria-label": `${i(used_1)} of ${i(total)} ${unit} used \u2013 arrow keys read each category`, "data-active": W ? `` : void 0, onPointerMove: (e) => e.pointerType === `mouse` && q(xe(e)), onPointerLeave: (e) => e.pointerType === `mouse` && q(null), onPointerUp: (e) => {
        if (e.pointerType === `mouse`) {
          return;
        }
        let t = xe(e);
        q(t === k ? null : t);
      }, onKeyDown: Se, onBlur: () => q(null), children: [
        /* @__PURE__ */ jsx("div", { className: `ui-umc__track`, role: `meter`, "aria-valuemin": 0, "aria-valuemax": total, "aria-valuenow": Math.min(used_1, total), "aria-valuetext": `${i(used_1)} of ${i(total)} ${unit}`, children: U.map((e) => /* @__PURE__ */ jsx("span", { className: `ui-umc__seg`, "data-active": e.label === k || void 0, style: {
          width: `${e.width}%`,
          background: e.color
        } }, e.label)) }),
        /* @__PURE__ */ jsx("div", { className: `ui-umc__tip`, "data-open": W ? `` : void 0, style: {
          left: `${be}%`,
          "--ui-umc-tip-x": `${-be}%`
        }, "aria-live": `polite`, children: G && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-umc__tip-label`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-umc__swatch`, style: {
              background: G.color
            } }),
            G.label
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-umc__tip-value`, children: [
            a(i(G.value), unit),
            /* @__PURE__ */ jsxs("span", { className: `ui-umc__muted`, children: [
              ` \xB7 `,
              i(used_1 ? G.value / used_1 * 100 : 0),
              `%`
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: `ui-umc__legend`, "aria-label": `By category`, "data-active": W ? `` : void 0, children: P.map((e) => {
        let t = V(`r:${e.label}`);
        return /* @__PURE__ */ jsx("li", { className: `ui-umc__row`, "data-leaving": e.leaving || void 0, children: /* @__PURE__ */ jsxs("div", { className: `ui-umc__item`, "data-active": e.label === k || void 0, onPointerEnter: (t2) => t2.pointerType === `mouse` && !e.leaving && q(e.label), onPointerLeave: (e2) => e2.pointerType === `mouse` && q(null), onPointerUp: (t2) => t2.pointerType !== `mouse` && !e.leaving && q(e.label === k ? null : e.label), children: [
          /* @__PURE__ */ jsx("span", { className: `ui-umc__swatch`, style: {
            background: e.color
          } }),
          /* @__PURE__ */ jsx("span", { className: `ui-umc__label`, children: e.label }),
          /* @__PURE__ */ jsx("span", { className: `ui-umc__value`, children: i(t) }),
          /* @__PURE__ */ jsxs("span", { className: `ui-umc__share`, children: [
            i(V(`used`) ? t / V(`used`) * 100 : 0),
            `%`
          ] })
        ] }) }, e.label);
      }) }),
      J.length > 0 && /* @__PURE__ */ jsxs("div", { className: `ui-umc__daily`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-umc__daily-head`, children: [
          /* @__PURE__ */ jsx("span", { children: `Per day` }),
          /* @__PURE__ */ jsx("span", { className: `ui-umc__daily-read`, children: Z ? /* @__PURE__ */ jsxs(Fragment, { children: [
            Z.label,
            ` \xB7 `,
            /* @__PURE__ */ jsx("b", { children: Z.value === null ? `\u2013` : a(i(Z.value), unit) })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            `Avg `,
            /* @__PURE__ */ jsx("b", { children: i(X) }),
            ` / day`
          ] }) }, Z ? `d${A}` : `avg`)
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-umc__spark`, tabIndex: 0, role: `img`, "aria-label": `${title} per day, ${i(X)} ${unit} on average \u2013 arrow keys read each day`, "data-hover": A !== null || void 0, "data-regrow": DeRef.current || void 0, "data-few": J.length <= 14 || void 0, onPointerMove: (e) => setA(we(e)), onPointerDown: (e) => setA(we(e)), onPointerLeave: (e) => e.pointerType === `mouse` && setA(null), onKeyDown: Te, onBlur: () => setA(null), children: J.map((e, t) => /* @__PURE__ */ jsx("span", { className: `ui-umc__day`, "data-future": e.value === null || void 0, "data-active": t === A || void 0, style: {
          "--i": t
        }, children: /* @__PURE__ */ jsx("span", { style: {
          height: e.value === null ? void 0 : `${Math.max(4, V(`d:${t}`) / Ce * 100)}%`
        } }) }, t)) }, J.length)
      ] }),
      limits.length > 0 && /* @__PURE__ */ jsx("ul", { className: `ui-umc__limits`, "aria-label": `Plan limits`, style: {
        "--n": Math.min(3, limits.length)
      }, children: limits.map((e) => {
        let t = e.total == null || !isFinite(e.total);
        let n4 = e.decimals ?? (Number.isInteger(e.used) && (t || Number.isInteger(e.total)) ? 0 : 1);
        let o2 = t ? 0 : e.used / Math.max(e.total, 1e-9);
        let s2 = t ? `ok` : o2 >= 1 ? `limit` : o2 >= warnAt ? `warn` : `ok`;
        let c2 = V(`l:${e.label}`);
        let l2 = t ? `\u221E` : i(e.total, Number.isInteger(e.total) ? 0 : n4);
        return /* @__PURE__ */ jsxs("li", { className: `ui-umc__limit`, "data-state": s2, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-umc__limit-label`, children: [
            e.label,
            s2 !== `ok` && /* @__PURE__ */ jsx("span", { className: `ui-umc__dot`, "aria-label": s2 === `limit` ? `At the limit` : `Close to the limit` })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-umc__limit-value`, children: [
            i(c2, n4),
            /* @__PURE__ */ jsxs("span", { className: `ui-umc__muted`, children: [
              ` of `,
              a(l2, t ? void 0 : e.unit)
            ] })
          ] }),
          t ? /* @__PURE__ */ jsx("span", { className: `ui-umc__thin`, "data-unlimited": ``, "aria-label": `${e.label}: ${i(e.used, n4)}, unlimited`, role: `img` }) : /* @__PURE__ */ jsx("span", { className: `ui-umc__thin`, role: `meter`, "aria-label": e.label, "aria-valuemin": 0, "aria-valuemax": e.total, "aria-valuenow": Math.min(e.used, e.total), "aria-valuetext": `${i(e.used, n4)} of ${a(l2, e.unit)}`, children: /* @__PURE__ */ jsx("span", { style: {
            width: `${Math.min(100, c2 / Math.max(e.total, 1e-9) * 100)}%`
          } }) })
        ] }, e.label);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: `ui-umc__foot`, children: [
      /* @__PURE__ */ jsxs("span", { className: `ui-umc__status`, children: [
        $ && /* @__PURE__ */ jsx("span", { className: `ui-umc__dot`, "aria-hidden": `true` }),
        z === `limit` ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("b", { children: `Limit reached` }),
          used_1 > total && /* @__PURE__ */ jsx("span", { className: `ui-umc__muted`, children: a(i(used_1 - total), `over`) })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          z === `warn` && /* @__PURE__ */ jsx("b", { children: `Running low` }),
          /* @__PURE__ */ jsxs("span", { className: z === `warn` ? `ui-umc__muted` : void 0, children: [
            a(i(V(`left`)), unit),
            ` left`
          ] })
        ] })
      ] }, z),
      /* @__PURE__ */ jsx("button", { ref: oeRef, type: `button`, className: `ui-umc__action`, "data-strong": $ || void 0, onClick: () => onUpgrade?.(z), children: /* @__PURE__ */ jsx("span", { ref: seRef, className: `ui-umc__action-inner`, children: /* @__PURE__ */ jsx("span", { className: `ui-umc__action-text`, children: $ ? topUpLabel : upgradeLabel }, $ ? `top-up` : `upgrade`) }) })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-umc__live`, "aria-live": `polite`, children: he })
  ] });
}
var te = `.ui-umc{--ui-umc-card: #ffffff;--ui-umc-strong: #000000;--ui-umc-ink: rgba(0, 0, 0, 0.88);--ui-umc-text: rgba(0, 0, 0, 0.61);--ui-umc-muted: rgba(0, 0, 0, 0.45);--ui-umc-faint: rgba(0, 0, 0, 0.27);--ui-umc-line: rgba(0, 0, 0, 0.06);--ui-umc-wash: rgba(0, 0, 0, 0.03);--ui-umc-fill: rgba(0, 0, 0, 0.06);--ui-umc-track: rgba(0, 0, 0, 0.06);--ui-umc-spark: rgba(0, 0, 0, 0.12);--ui-umc-accent: rgba(0, 96, 226, 0.765);--ui-umc-warn: #e8a20c;--ui-umc-warn-text: #b07800;--ui-umc-warn-bg: rgba(232, 162, 12, 0.12);--ui-umc-full: #e5484d;--ui-umc-full-text: #d63f44;--ui-umc-full-bg: rgba(229, 72, 77, 0.08);--ui-umc-c1: rgba(0, 96, 226, 0.765);--ui-umc-c2: rgba(0, 96, 226, 0.5);--ui-umc-c3: rgba(0, 96, 226, 0.3);--ui-umc-c4: rgba(0, 96, 226, 0.16);--ui-umc-c5: rgba(0, 0, 0, 0.14);--ui-umc-dark: rgba(0, 0, 0, 0.88);--ui-umc-on-dark: #fcfcfc;--ui-umc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-umc-tip-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 8px 20px -8px rgba(0, 0, 0, 0.14);--ui-umc-focus: rgba(0, 96, 226, 0.35);--ui-umc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;position: relative;display: grid;width: 100%;max-width: 460px;border-radius: 10px;background: var(--ui-umc-card);box-shadow: var(--ui-umc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-umc-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-umc *, .ui-umc *::before, .ui-umc *::after{box-sizing: border-box}:where(.ui-umc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-umc) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-umc) ul{list-style: none}.ui-umc :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-umc-focus);outline-offset: 1px}.ui-umc b{font-weight: 500;color: var(--ui-umc-ink)}.ui-umc__muted{color: var(--ui-umc-muted)}.ui-umc__card{overflow: hidden;border-radius: 10px 10px 0 0;transition: height 360ms var(--ui-umc-ease)}.ui-umc__inner{display: flow-root;padding: 16px 16px 16px}.ui-umc__head{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px}.ui-umc__heading{min-width: 0}.ui-umc__title{overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-umc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-umc__sub{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-umc__sep{margin: 0 6px;color: var(--ui-umc-faint)}.ui-umc__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;gap: 8px;flex: none}.ui-umc__pill{position: absolute;top: 0;left: 0;border-radius: 6px;background: var(--ui-umc-fill);opacity: 0;pointer-events: none;transition: transform 320ms var(--ui-umc-ease), width 320ms var(--ui-umc-ease), height 320ms var(--ui-umc-ease), opacity 200ms ease}.ui-umc__option{position: relative;z-index: 1;min-width: 0;height: 28px;padding: 4px 10px;overflow: hidden;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-umc-line);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-umc-text);white-space: nowrap;text-overflow: ellipsis;transition: color 200ms ease, background-color 120ms ease}.ui-umc__option[aria-checked="true"]{color: var(--ui-umc-ink)}@media (hover: hover){.ui-umc__option[aria-checked="false"]:hover{background: var(--ui-umc-wash);color: var(--ui-umc-ink)}}.ui-umc__figure{display: flex;align-items: center;justify-content: space-between;gap: 12px;margin-top: 14px}.ui-umc__amount{display: flex;flex-wrap: wrap;align-items: baseline;column-gap: 8px;min-width: 0}.ui-umc__big{font-size: 24px;font-weight: 500;line-height: 32px;letter-spacing: -0.24px;color: var(--ui-umc-strong);font-variant-numeric: tabular-nums}.ui-umc__of{font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-umc__pct{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-umc-fill);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-umc-text);font-variant-numeric: tabular-nums;transition: color 260ms ease, background-color 260ms ease}.ui-umc__pct[data-state="warn"]{background: var(--ui-umc-warn-bg);color: var(--ui-umc-warn-text)}.ui-umc__pct[data-state="limit"]{background: var(--ui-umc-full-bg);color: var(--ui-umc-full-text)}.ui-umc__dot{display: inline-block;flex: none;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-umc-warn);animation: ui-umc-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-umc[data-state="limit"] :is(.ui-umc__pct, .ui-umc__status) .ui-umc__dot, .ui-umc__limit[data-state="limit"] .ui-umc__dot{background: var(--ui-umc-full)}.ui-umc__bar{position: relative;margin-top: 10px;padding: 4px 0;border-radius: 4px;cursor: default}.ui-umc__track{display: flex;height: 8px;overflow: hidden;border-radius: 4px;background: var(--ui-umc-track)}.ui-umc__seg{position: relative;flex: none;height: 100%;overflow: hidden;transition: opacity 200ms ease}.ui-umc__seg::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: 2px;background: var(--ui-umc-card)}.ui-umc__bar[data-active] .ui-umc__seg:not([data-active]){opacity: 0.3}.ui-umc__tip{position: absolute;bottom: calc(100% + 6px);z-index: 2;display: grid;gap: 2px;padding: 6px 10px 7px;border-radius: 8px;background: var(--ui-umc-card);box-shadow: var(--ui-umc-tip-shadow);white-space: nowrap;pointer-events: none;opacity: 0;transform: translate(var(--ui-umc-tip-x), 4px) scale(0.97);transition: left 260ms var(--ui-umc-ease), transform 260ms var(--ui-umc-ease), opacity 160ms ease}.ui-umc__tip[data-open]{opacity: 1;transform: translate(var(--ui-umc-tip-x), 0)}.ui-umc__tip-label{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted)}.ui-umc__tip-value{font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-umc-ink);font-variant-numeric: tabular-nums}.ui-umc__tip-value .ui-umc__muted{font-weight: 400}.ui-umc__legend{display: grid;margin-top: 10px}.ui-umc__row{display: grid;grid-template-rows: 1fr;animation: ui-umc-grow 380ms var(--ui-umc-ease) both;transition: grid-template-rows 320ms var(--ui-umc-ease) 80ms, opacity 200ms ease}.ui-umc__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-umc__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 32px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 6px;transition: background-color 120ms ease-out, opacity 200ms ease}.ui-umc__row[data-leaving] .ui-umc__item{background: none}.ui-umc__item[data-active]{background: var(--ui-umc-wash)}.ui-umc__legend[data-active] .ui-umc__item:not([data-active]){opacity: 0.45}.ui-umc__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-umc__label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-umc-ink)}.ui-umc__value{color: var(--ui-umc-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-umc__share{width: 40px;font-size: 12px;line-height: 16px;text-align: right;color: var(--ui-umc-muted);font-variant-numeric: tabular-nums}.ui-umc__daily{margin-top: 14px}.ui-umc__daily-head{display: flex;align-items: center;justify-content: space-between;gap: 12px;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);white-space: nowrap}.ui-umc__daily-head > :first-child{font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase}.ui-umc__daily-read{font-variant-numeric: tabular-nums;animation: ui-umc-in 220ms var(--ui-umc-ease) both}.ui-umc__spark{display: flex;align-items: stretch;gap: 2px;height: 32px;margin-top: 8px;border-radius: 4px;cursor: default}.ui-umc__spark[data-few]{gap: 5px}.ui-umc__day{display: flex;flex: 1 1 0;align-items: flex-end;min-width: 0}.ui-umc__day > span{width: 100%;border-radius: 2px;background: var(--ui-umc-spark);transform-origin: bottom;transition: background-color 160ms ease, opacity 160ms ease}.ui-umc__spark[data-regrow] .ui-umc__day > span{animation: ui-umc-rise 520ms var(--ui-umc-ease) both;animation-delay: calc(var(--i) * 18ms)}.ui-umc__day[data-future] > span{height: 2px;background: var(--ui-umc-track)}.ui-umc__spark[data-hover] .ui-umc__day:not([data-active]) > span{opacity: 0.6}.ui-umc__day[data-active] > span{background: var(--ui-umc-accent)}.ui-umc__limits{display: grid;grid-template-columns: repeat(var(--n, 3), minmax(0, 1fr));gap: 12px 18px;margin-top: 16px;padding-top: 14px;border-top: 0.5px solid var(--ui-umc-line)}.ui-umc__limit{display: grid;grid-template-columns: minmax(0, 1fr);align-content: start;min-width: 0}.ui-umc__limit-label{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);white-space: nowrap}.ui-umc__limit-value{overflow: hidden;color: var(--ui-umc-ink);font-weight: 500;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis}.ui-umc__limit-value .ui-umc__muted{font-weight: 400}.ui-umc__thin{position: relative;display: block;height: 4px;margin-top: 6px;overflow: hidden;border-radius: 2px;background: var(--ui-umc-track)}.ui-umc__thin > span{position: absolute;top: 0;bottom: 0;left: 0;border-radius: inherit;background: var(--ui-umc-accent);transition: background-color 260ms ease}.ui-umc__limit[data-state="warn"] .ui-umc__thin > span{background: var(--ui-umc-warn)}.ui-umc__limit[data-state="limit"] .ui-umc__thin > span{background: var(--ui-umc-full)}.ui-umc__thin[data-unlimited]{background: repeating-linear-gradient(-45deg, var(--ui-umc-track) 0 3px, transparent 3px 6px)}.ui-umc__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 0 8px 0 16px;border-top: 0.5px solid var(--ui-umc-line);font-size: 12px;line-height: 16px;color: var(--ui-umc-muted)}.ui-umc__status{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-umc-in 260ms var(--ui-umc-ease) both}.ui-umc__status > :last-child{overflow: hidden;text-overflow: ellipsis}.ui-umc__action{display: inline-flex;flex: none;justify-content: center;height: 28px;overflow: hidden;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-umc-strong);background: var(--ui-umc-card);box-shadow: var(--ui-umc-shadow);transition: background-color 280ms ease, color 280ms ease, box-shadow 280ms ease, width 320ms var(--ui-umc-ease), transform 140ms ease}.ui-umc__action:hover{background: #fafafa}.ui-umc__action:active{transform: scale(0.97)}.ui-umc__action[data-strong]{background: var(--ui-umc-dark);color: var(--ui-umc-on-dark);box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);animation: ui-umc-nudge 520ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-umc__action[data-strong]:hover{background: var(--ui-umc-dark);opacity: 0.88}.ui-umc__action-inner{display: inline-flex;align-items: center;flex: none;height: 100%;padding: 0 10px;white-space: nowrap}.ui-umc__action-text{animation: ui-umc-in 260ms var(--ui-umc-ease) both}.ui-umc__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-umc-in{from{opacity: 0;transform: translateY(3px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-umc-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-umc-rise{from{transform: scaleY(0)}to{transform: none}}@keyframes ui-umc-pop{0%{transform: scale(0.3)}60%{transform: scale(1.25)}100%{transform: scale(1)}}@keyframes ui-umc-nudge{0%{transform: scale(0.94)}60%{transform: scale(1.04)}100%{transform: scale(1)}}@container (max-width: 400px){.ui-umc__inner{padding: 14px 14px 14px}.ui-umc__foot{padding: 0 8px 0 14px}.ui-umc__head{flex-direction: column;align-items: stretch;gap: 12px}.ui-umc__switch{grid-auto-columns: minmax(0, auto);gap: 4px}.ui-umc__option{padding: 4px 8px}.ui-umc__limits{grid-template-columns: minmax(0, 1fr);gap: 12px}.ui-umc__limit{grid-template-columns: minmax(0, 1fr) auto;column-gap: 12px}.ui-umc__limit-value{font-size: 12px;line-height: 16px}.ui-umc__thin{grid-column: 1 / -1;margin-top: 6px}}@container (max-width: 300px){.ui-umc__option{padding: 4px 6px}.ui-umc__share{width: 34px}}@media (hover: none) and (pointer: coarse){.ui-umc__option{height: 34px;padding: 7px 10px}.ui-umc__item{height: 36px}.ui-umc__action{height: 36px}.ui-umc__foot{min-height: 52px}.ui-umc__bar{padding: 10px 0;margin-top: 4px}}@media (prefers-reduced-motion: reduce){.ui-umc *, .ui-umc *::before, .ui-umc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-umc{--ui-umc-card: #1c1c1e;--ui-umc-strong: #ffffff;--ui-umc-ink: rgba(255, 255, 255, 0.9);--ui-umc-text: rgba(255, 255, 255, 0.62);--ui-umc-muted: rgba(255, 255, 255, 0.46);--ui-umc-faint: rgba(255, 255, 255, 0.3);--ui-umc-line: rgba(255, 255, 255, 0.08);--ui-umc-wash: rgba(255, 255, 255, 0.04);--ui-umc-fill: rgba(255, 255, 255, 0.08);--ui-umc-track: rgba(255, 255, 255, 0.08);--ui-umc-spark: rgba(255, 255, 255, 0.16);--ui-umc-accent: #4d8dff;--ui-umc-warn: #f0b43a;--ui-umc-warn-text: #f0b43a;--ui-umc-warn-bg: rgba(232, 162, 12, 0.16);--ui-umc-full: #ff6b70;--ui-umc-full-text: #ff8a8e;--ui-umc-full-bg: rgba(229, 72, 77, 0.14);--ui-umc-c1: #4d8dff;--ui-umc-c2: rgba(77, 141, 255, 0.62);--ui-umc-c3: rgba(77, 141, 255, 0.4);--ui-umc-c4: rgba(77, 141, 255, 0.22);--ui-umc-c5: rgba(255, 255, 255, 0.16);--ui-umc-dark: rgba(255, 255, 255, 0.9);--ui-umc-on-dark: #111113;--ui-umc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-umc-tip-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 8px 20px -8px rgba(0, 0, 0, 0.6);--ui-umc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-umc__action:hover{background: #232326}:where(.dark, [data-theme="dark"]) .ui-umc__tip{background: #2a2a2d}`;
var periods = [{
  id: `month`,
  label: `This month`
}, {
  id: `last`,
  label: `Last month`
}, {
  id: `7d`,
  label: `7 days`
}];
var ne = new Intl.DateTimeFormat(`en-US`, {
  month: `short`,
  day: `numeric`
});
var h = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function g(e, length_1, n4, r2, length = length_1) {
  let a2 = r2;
  let o2 = () => ((a2 = a2 * 16807 % 2147483647) - 1) / 2147483646;
  let s2 = Array.from({
    length: length_1
  }, (n5, r3) => {
    let i2 = h(e, r3).getDay();
    return (i2 === 0 || i2 === 6 ? 0.45 : 1) * (0.7 + o2() * 0.6) * (1 + r3 / length_1 / 3);
  });
  let c2 = s2.reduce((acc, item) => acc + item, 0);
  let l2 = s2.map((e2) => Math.round(e2 / c2 * n4));
  l2[l2.length - 1] += n4 - l2.reduce((acc, item) => acc + item, 0);
  return Array.from({
    length
  }, (n5, r3) => ({
    label: ne.format(h(e, r3)),
    value: r3 < length_1 ? l2[r3] : null
  }));
}
var _ = {
  month: {
    used: [{
      label: `Chat`,
      value: 3980
    }, {
      label: `Search`,
      value: 1640
    }, {
      label: `Image`,
      value: 1120
    }, {
      label: `API`,
      value: 680
    }],
    limits: [{
      label: `Seats`,
      used: 8,
      total: 10
    }, {
      label: `Storage`,
      used: 3.2,
      total: 5,
      unit: `GB`
    }, {
      label: `Projects`,
      used: 12,
      total: null
    }],
    days: (e) => g(h(e, -21), 22, 7420, 11, 30)
  },
  last: {
    used: [{
      label: `Chat`,
      value: 5210
    }, {
      label: `Search`,
      value: 2140
    }, {
      label: `Image`,
      value: 1690
    }, {
      label: `API`,
      value: 960
    }],
    limits: [{
      label: `Seats`,
      used: 10,
      total: 10
    }, {
      label: `Storage`,
      used: 2.9,
      total: 5,
      unit: `GB`
    }, {
      label: `Projects`,
      used: 11,
      total: null
    }],
    days: (e) => g(h(e, -51), 30, 1e4, 29)
  },
  "7d": {
    used: [{
      label: `Chat`,
      value: 1260
    }, {
      label: `Search`,
      value: 540
    }, {
      label: `API`,
      value: 340
    }],
    limits: [{
      label: `Seats`,
      used: 8,
      total: 10
    }, {
      label: `Storage`,
      used: 3.2,
      total: 5,
      unit: `GB`
    }, {
      label: `Projects`,
      used: 12,
      total: null
    }],
    days: (e) => g(h(e, -6), 7, 2140, 5)
  }
};
function VComponent() {
  let [e, setE] = n3.useState(`month`);
  let iRef = n3.useRef(false);
  let a2 = n3.useMemo(() => {
    let e2 = /* @__PURE__ */ new Date();
    return new Date(e2.getFullYear(), e2.getMonth(), e2.getDate());
  }, []);
  let daily = n3.useMemo(() => _[e].days(a2), [e, a2]);
  n3.useEffect(() => {
    let e2 = [`last`, `7d`, `month`].map((e3, n4) => window.setTimeout(() => !iRef.current && setE(e3), 3600 + n4 * 3200));
    return () => e2.forEach(clearTimeout);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: `usage-demo`, onPointerDown: () => iRef.current = true, onKeyDown: () => iRef.current = true, children: /* @__PURE__ */ jsx(P1Component, { title: `Acme AI`, plan: `Pro plan`, total: 1e4, used: _[e].used, limits: _[e].limits, daily, periods, period: e, onPeriodChange: setE, resetAt: h(a2, 9), onUpgrade: () => {
  } }) });
}

export {
  VComponent
};
