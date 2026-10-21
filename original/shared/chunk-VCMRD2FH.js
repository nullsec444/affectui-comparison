import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-DhS0HlaW.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = `\0create`;
var a = `cubic-bezier(0.22, 1, 0.36, 1)`;
var o = () => typeof window < `u` && window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
var s = (e) => {
  let t = e.trim().split(/\s+/);
  return ((t[0]?.[0] ?? ``) + (t.length > 1 ? t[t.length - 1][0] : ``)).toUpperCase();
};
function c({ text: e, query: t }) {
  let n4 = t ? e.toLowerCase().indexOf(t.toLowerCase()) : -1;
  return n4 < 0 ? (0, r.jsx)(r.Fragment, { children: e }) : (0, r.jsxs)(r.Fragment, { children: [e.slice(0, n4), (0, r.jsx)(`mark`, { children: e.slice(n4, n4 + t.length) }), e.slice(n4 + t.length)] });
}
var l = 72;
function u({ option: e }) {
  return e.icon ? (0, r.jsx)(`span`, { className: `ui-cbxc__icon`, children: e.icon }) : typeof e.avatar == `string` ? (0, r.jsx)(`img`, { className: `ui-cbxc__avatar`, src: e.avatar, alt: `` }) : e.avatar ? (0, r.jsx)(`span`, { className: `ui-cbxc__avatar`, "aria-hidden": `true`, children: s(e.label) }) : e.color ? (0, r.jsx)(`span`, { className: `ui-cbxc__dot`, style: { background: e.color }, "aria-hidden": `true` }) : null;
}
var d = ({ d: e, className: t }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: [`ui-cbxc__glyph`, t].filter(Boolean).join(` `), "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var f = { close: `M7 7l10 10M17 7 7 17`, check: `M5.5 12.5l4 4L18.5 8`, chevron: `M8 10l4 4 4-4`, plus: `M12 6v12M6 12h12` };
function ee({ animate: e, leaving: t, armed: i2, plain: s2, children: c2 }) {
  let l2 = (0, n3.useRef)(null);
  return (0, n3.useLayoutEffect)(() => {
    let t2 = l2.current;
    e && t2 && !o() && (t2.animate([{ gridTemplateColumns: `0fr`, marginRight: `0px` }, { gridTemplateColumns: `1fr`, marginRight: `4px` }], { duration: 260, easing: a }), t2.firstElementChild?.animate([{ opacity: 0, transform: `scale(0.6)` }, { opacity: 1, transform: `scale(1.05)`, offset: 0.6 }, { opacity: 1, transform: `none` }], { duration: 340, easing: a }));
  }, []), (0, r.jsx)(`li`, { ref: l2, className: `ui-cbxc__chip`, "data-leaving": t || void 0, "data-armed": i2 || void 0, "data-plain": s2 || void 0, children: c2 });
}
function p({ options: e, multiple: t = true, value: a2, defaultValue: o2, onChange: s2, placeholder: p2 = `Search\u2026`, creatable: ne2 = false, onCreate: m2, createLabel: re = (e2) => `Create \u201C${e2}\u201D`, maxVisibleTags: ie, label: h, defaultOpen: ae = false, emptyText: oe = `No results`, className: se }) {
  let g = `ui-cbxc` + (0, n3.useId)().replace(/[^a-zA-Z0-9_-]/g, ``), [ce, le] = (0, n3.useState)(o2 ?? []), _ = a2 ?? ce, [ue, de] = (0, n3.useState)([]), [v, y] = (0, n3.useState)(ae), [b, x] = (0, n3.useState)(``), [S, C] = (0, n3.useState)(null), [fe, w] = (0, n3.useState)(true), [T, E] = (0, n3.useState)(null), [pe, me] = (0, n3.useState)(``), D = (0, n3.useRef)(null), he = (0, n3.useRef)(null), O = (0, n3.useRef)(null), k = (0, n3.useRef)(null), A = (0, n3.useRef)(null), ge = (0, n3.useRef)(null), _e = (0, n3.useRef)(null), j = (0, n3.useRef)(false), M = (0, n3.useMemo)(() => [...e, ...ue.filter((t2) => !e.some((e2) => e2.value === t2.value))], [e, ue]), ve = (0, n3.useMemo)(() => new Map(M.map((e2) => [e2.value, e2])), [M]), N = (e2) => ve.get(e2) ?? { value: e2, label: e2 }, P = b.trim(), F = P.toLowerCase(), I = (0, n3.useMemo)(() => {
    let e2 = [];
    for (let t2 of M) {
      if (F && !`${t2.label} ${t2.hint ?? ``} ${t2.keywords ?? ``}`.toLowerCase().includes(F)) continue;
      let n4 = t2.group ?? ``, r2 = e2.find((e3) => e3.name === n4);
      r2 || e2.push(r2 = { name: n4, options: [] }), r2.options.push(t2);
    }
    return e2;
  }, [M, F]), L = ne2 && !!P && !M.some((e2) => e2.label.toLowerCase() === F), R = [...I.flatMap((e2) => e2.options.map((e3) => e3.value)), ...L ? [i] : []], z = S !== null && R.includes(S) ? S : R[0], B = (e2) => `${g}-o${R.indexOf(e2)}`, [V, H] = (0, n3.useState)(() => _.map((e2) => ({ value: e2 }))), U = (0, n3.useRef)(V);
  U.current = V;
  let W = (0, n3.useRef)(/* @__PURE__ */ new Map()), G = (0, n3.useRef)(false), ye = _.join(``);
  (0, n3.useEffect)(() => {
    let e2 = U.current, t2 = false, n4 = e2.map((e3) => {
      let n5 = _.includes(e3.value);
      return n5 && e3.leaving ? (t2 = true, window.clearTimeout(W.current.get(e3.value)), W.current.delete(e3.value), { value: e3.value }) : !n5 && !e3.leaving ? (t2 = true, W.current.set(e3.value, window.setTimeout(() => {
        W.current.delete(e3.value), H((t3) => t3.filter((t4) => !(t4.value === e3.value && t4.leaving)));
      }, 420)), { value: e3.value, leaving: true }) : e3;
    });
    for (let e3 of _) n4.some((t3) => t3.value === e3) || (n4.push({ value: e3 }), t2 = true);
    t2 && H(n4);
  }, [ye]), (0, n3.useEffect)(() => {
    G.current = true;
    let e2 = W.current;
    return () => e2.forEach((e3) => window.clearTimeout(e3));
  }, []);
  let K = (0, n3.useRef)(null), [be, xe] = (0, n3.useState)(1 / 0), Se = V.filter((e2) => !e2.leaving).map((e2) => e2.value).join(`|`);
  (0, n3.useLayoutEffect)(() => {
    let e2 = O.current, t2 = K.current;
    if (!e2 || !t2) return;
    let n4 = () => {
      let n5 = [...t2.children].map((e3) => e3.offsetWidth + 4), r3 = n5.pop() ?? 0, i2 = getComputedStyle(e2), a3 = e2.clientWidth - parseFloat(i2.paddingLeft) - parseFloat(i2.paddingRight) - l, o3 = 0, s3 = 0;
      for (; s3 < n5.length; s3++) {
        let e3 = s3 + 1 < n5.length ? r3 : 0;
        if (o3 + n5[s3] + e3 > a3) break;
        o3 += n5[s3];
      }
      xe(s3);
    };
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(e2), () => r2.disconnect();
  }, [Se]);
  let q = Math.min(ie ?? 1 / 0, be), Ce = 0, we = V.filter((e2) => e2.leaving ? Ce < q : Ce++ < q), J = Math.max(0, V.filter((e2) => !e2.leaving).length - q), Y = (0, n3.useRef)(J), Te = (0, n3.useRef)(`up`);
  J !== Y.current && J > 0 && (Te.current = J > Y.current ? `up` : `down`), J > 0 && (Y.current = J);
  let Ee = J || Y.current, De = !!T && J > 0 && !we.some((e2) => e2.value === T), X = (0, n3.useRef)(_.length), Oe = (0, n3.useRef)(`up`);
  _.length !== X.current && (Oe.current = _.length > X.current ? `up` : `down`, X.current = _.length);
  let ke = (e2, t2) => {
    a2 === void 0 && le(e2), s2?.(e2, e2.map((e3) => t2?.value === e3 ? t2 : N(e3)));
  }, Z = (e2, n4) => me(t ? `${e2}. ${n4} selected` : e2), Q = (e2) => {
    let n4 = _.includes(e2.value), r2 = t ? n4 ? _.filter((t2) => t2 !== e2.value) : [..._, e2.value] : [e2.value];
    ke(r2, e2), Z(`${e2.label} ${n4 && t ? `removed` : `selected`}`, r2.length), E(null), b && x(``), t || y(false);
  }, Ae = () => {
    let e2 = m2?.(P) || { value: P, label: P };
    de((t2) => [...t2.filter((t3) => t3.value !== e2.value), e2]), C(e2.value), Q(e2);
  }, je = (e2) => {
    let t2 = _.filter((t3) => t3 !== e2);
    ke(t2), Z(`${N(e2).label} removed`, t2.length), E(null);
  }, Me = (e2) => {
    e2 === i ? Ae() : Q(N(e2));
  };
  (0, n3.useLayoutEffect)(() => {
    let e2 = he.current, t2 = O.current;
    if (!e2 || !t2) return;
    let n4 = () => e2.style.height = `${t2.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []), (0, n3.useLayoutEffect)(() => {
    let e2 = A.current, t2 = ge.current;
    if (!v || !e2 || !t2) return;
    let n4 = () => {
      let n5 = getComputedStyle(e2), r3 = parseFloat(n5.paddingTop) + parseFloat(n5.paddingBottom), i2 = parseFloat(n5.maxHeight) || 1 / 0;
      e2.style.height = `${Math.min(t2.offsetHeight + r3, i2)}px`;
    };
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, [v]), (0, n3.useLayoutEffect)(() => {
    let e2 = A.current, t2 = _e.current;
    if (!v || !e2 || !t2) return;
    let n4 = e2.querySelector(`[data-active]`);
    if (!n4) {
      t2.style.opacity = `0`;
      return;
    }
    let r2 = !t2.dataset.ready;
    if (r2 && (t2.style.transition = `none`), t2.style.opacity = fe ? `1` : `0`, t2.style.height = `${n4.offsetHeight}px`, t2.style.transform = `translateY(${n4.offsetTop}px)`, r2 && (t2.dataset.ready = `1`, t2.offsetWidth, t2.style.transition = ``), !j.current) return;
    j.current = false;
    let i2 = n4.previousElementSibling, a3 = i2?.classList.contains(`ui-cbxc__group-label`) ? i2.offsetHeight : 0, o3 = n4.offsetTop - 6 - a3, s3 = n4.offsetTop + n4.offsetHeight + 6;
    o3 < e2.scrollTop ? e2.scrollTop = o3 : s3 > e2.scrollTop + e2.clientHeight && (e2.scrollTop = s3 - e2.clientHeight);
  }), (0, n3.useEffect)(() => {
    if (!v) return;
    let e2 = (e3) => {
      D.current && !D.current.contains(e3.target) && (y(false), E(null));
    };
    return document.addEventListener(`pointerdown`, e2), () => document.removeEventListener(`pointerdown`, e2);
  }, [v]);
  let Ne = (e2) => {
    if (!R.length) return;
    j.current = true, w(true);
    let t2 = Math.max(0, R.indexOf(z));
    C(R[(t2 + e2 + R.length) % R.length]);
  }, Pe = (e2) => {
    if (e2.key !== `Backspace` && E(null), e2.key === `ArrowDown` || e2.key === `ArrowUp`) {
      if (e2.preventDefault(), !v) {
        y(true);
        return;
      }
      Ne(e2.key === `ArrowDown` ? 1 : -1);
    } else if (e2.key === `Enter`) {
      if (!v || !z) return;
      e2.preventDefault(), Me(z);
    } else if (e2.key === `Escape`) v ? (e2.preventDefault(), e2.stopPropagation(), y(false)) : b && x(``);
    else if (e2.key === `Tab`) y(false);
    else if (e2.key === `Backspace` && !b && _.length) {
      e2.preventDefault();
      let t2 = _[_.length - 1];
      T === t2 ? je(t2) : (E(t2), me(`${N(t2).label} \u2013 press Backspace again to remove`));
    }
  }, Fe = (e2) => {
    e2.target.closest(`button`) || (e2.target !== k.current && e2.preventDefault(), k.current?.focus(), E(null), y(true));
  }, Ie = (e2) => {
    D.current?.contains(e2.relatedTarget) || (y(false), E(null));
  }, $ = (e2) => e2.preventDefault();
  return (0, r.jsxs)(`div`, { ref: D, className: [`ui-cbxc`, se].filter(Boolean).join(` `), "data-open": v || void 0, onBlur: Ie, children: [(0, r.jsx)(`style`, { href: `ui-combobox-clean`, precedence: `default`, children: te }), h && (0, r.jsx)(`label`, { className: `ui-cbxc__label`, id: `${g}-label`, htmlFor: `${g}-input`, children: h }), (0, r.jsxs)(`div`, { ref: he, className: `ui-cbxc__field`, onMouseDown: Fe, children: [(0, r.jsxs)(`div`, { ref: O, className: `ui-cbxc__field-inner`, children: [(0, r.jsxs)(`ul`, { ref: K, className: `ui-cbxc__measure`, "aria-hidden": `true`, children: [V.filter((e2) => !e2.leaving).map((e2) => {
    let t2 = N(e2.value), n4 = !t2.icon && !t2.avatar && !t2.color;
    return (0, r.jsx)(`li`, { className: `ui-cbxc__chip`, "data-plain": n4 || void 0, children: (0, r.jsxs)(`span`, { className: `ui-cbxc__chip-body`, children: [(0, r.jsx)(u, { option: t2 }), (0, r.jsx)(`span`, { className: `ui-cbxc__chip-label`, children: t2.label }), (0, r.jsx)(`span`, { className: `ui-cbxc__chip-x` })] }) }, e2.value);
  }), (0, r.jsx)(`li`, { className: `ui-cbxc__chip ui-cbxc__more`, children: (0, r.jsx)(`span`, { className: `ui-cbxc__chip-body`, children: `+99` }) })] }), V.length > 0 && (0, r.jsxs)(`ul`, { className: `ui-cbxc__chips`, role: `list`, "aria-label": `Selected`, children: [we.map((e2) => {
    let t2 = N(e2.value), n4 = !t2.icon && !t2.avatar && !t2.color;
    return (0, r.jsx)(ee, { animate: G.current, leaving: e2.leaving, armed: T === e2.value, plain: n4, children: (0, r.jsxs)(`span`, { className: `ui-cbxc__chip-body`, children: [(0, r.jsx)(u, { option: t2 }), (0, r.jsx)(`span`, { className: `ui-cbxc__chip-label`, children: t2.label }), (0, r.jsx)(`button`, { type: `button`, className: `ui-cbxc__chip-x`, tabIndex: -1, "aria-label": `Remove ${t2.label}`, onMouseDown: $, onClick: () => je(e2.value), children: (0, r.jsx)(d, { d: f.close }) })] }) }, e2.value);
  }), (0, r.jsx)(`li`, { className: `ui-cbxc__chip ui-cbxc__more`, "data-hidden": !J || void 0, "data-armed": De || void 0, "aria-hidden": !J || void 0, children: (0, r.jsxs)(`span`, { className: `ui-cbxc__chip-body`, children: [`+`, (0, r.jsx)(`span`, { className: `ui-cbxc__roll`, children: (0, r.jsx)(`span`, { "data-dir": Te.current, children: Ee }, Ee) })] }) })] }), (0, r.jsx)(`input`, { ref: k, id: `${g}-input`, className: `ui-cbxc__input`, value: b, placeholder: _.length ? void 0 : p2, autoComplete: `off`, spellCheck: false, role: `combobox`, "aria-expanded": v, "aria-controls": `${g}-list`, "aria-autocomplete": `list`, "aria-activedescendant": v && z ? B(z) : void 0, "aria-label": h ? void 0 : p2, onChange: (e2) => {
    x(e2.target.value), C(null), E(null), y(true);
  }, onKeyDown: Pe })] }), (0, r.jsx)(`button`, { type: `button`, className: `ui-cbxc__toggle`, tabIndex: -1, "aria-label": v ? `Close list` : `Open list`, onMouseDown: $, onClick: () => {
    k.current?.focus(), y((e2) => !e2);
  }, children: (0, r.jsx)(d, { d: f.chevron }) })] }), v && (0, r.jsxs)(`div`, { className: `ui-cbxc__pop`, onMouseDown: $, children: [(0, r.jsxs)(`div`, { ref: A, id: `${g}-list`, className: `ui-cbxc__list`, role: `listbox`, "aria-multiselectable": t || void 0, "aria-labelledby": h ? `${g}-label` : void 0, "aria-label": h ? void 0 : `Options`, onMouseLeave: () => w(false), children: [(0, r.jsx)(`span`, { ref: _e, className: `ui-cbxc__pill`, "aria-hidden": `true` }), (0, r.jsxs)(`div`, { ref: ge, className: `ui-cbxc__list-inner`, children: [I.map((e2, t2) => (0, r.jsxs)(`div`, { role: `group`, "aria-labelledby": e2.name ? `${g}-g${t2}` : void 0, className: `ui-cbxc__group`, children: [e2.name && (0, r.jsx)(`div`, { className: `ui-cbxc__group-label`, id: `${g}-g${t2}`, children: e2.name }), e2.options.map((e3) => {
    let t3 = _.includes(e3.value);
    return (0, r.jsxs)(`div`, { id: B(e3.value), role: `option`, "aria-selected": t3, "data-active": z === e3.value || void 0, className: `ui-cbxc__option`, onMouseDown: $, onMouseMove: () => {
      w(true), z !== e3.value && C(e3.value);
    }, onClick: () => {
      C(e3.value), Q(e3);
    }, children: [(0, r.jsx)(u, { option: e3 }), (0, r.jsxs)(`span`, { className: `ui-cbxc__text`, children: [(0, r.jsx)(`span`, { className: `ui-cbxc__name`, children: (0, r.jsx)(c, { text: e3.label, query: P }) }), e3.hint && (0, r.jsx)(`span`, { className: `ui-cbxc__hint`, children: (0, r.jsx)(c, { text: e3.hint, query: P }) })] }), (0, r.jsx)(d, { d: f.check, className: `ui-cbxc__check` })] }, e3.value);
  })] }, e2.name || `_`)), !I.length && (0, r.jsxs)(`div`, { className: `ui-cbxc__empty`, children: [oe, P && (0, r.jsxs)(r.Fragment, { children: [` for \u201C`, P, `\u201D`] })] }, P), L && (0, r.jsxs)(`div`, { id: B(i), role: `option`, "aria-selected": false, "data-active": z === i || void 0, className: `ui-cbxc__option ui-cbxc__create`, onMouseDown: $, onMouseMove: () => {
    w(true), z !== i && C(i);
  }, onClick: Ae, children: [(0, r.jsx)(`span`, { className: `ui-cbxc__plus`, "aria-hidden": `true`, children: (0, r.jsx)(d, { d: f.plus }) }), (0, r.jsx)(`span`, { className: `ui-cbxc__name`, children: re(P) })] })] })] }), (0, r.jsxs)(`div`, { className: `ui-cbxc__foot`, "aria-hidden": `true`, children: [(0, r.jsxs)(`span`, { className: `ui-cbxc__count`, children: [(0, r.jsx)(`span`, { className: `ui-cbxc__roll`, children: (0, r.jsx)(`span`, { "data-dir": Oe.current, children: _.length }, _.length) }), (t || _.length, `\xA0selected`)] }), (0, r.jsxs)(`span`, { className: `ui-cbxc__keys`, children: [(0, r.jsx)(`kbd`, { children: `\u2191` }), (0, r.jsx)(`kbd`, { children: `\u2193` }), (0, r.jsx)(`span`, { children: `to move` }), (0, r.jsx)(`kbd`, { children: `\u21B5` }), (0, r.jsxs)(`span`, { children: [`to `, t ? `toggle` : `pick`] })] })] })] }), (0, r.jsx)(`span`, { className: `ui-cbxc__live`, "aria-live": `polite`, children: pe })] });
}
var te = `.ui-cbxc{--ui-cbxc-card: #ffffff;--ui-cbxc-ink: rgba(0, 0, 0, 0.88);--ui-cbxc-strong: #000000;--ui-cbxc-text: rgba(0, 0, 0, 0.61);--ui-cbxc-muted: rgba(0, 0, 0, 0.45);--ui-cbxc-faint: rgba(0, 0, 0, 0.27);--ui-cbxc-icon: rgba(0, 0, 0, 0.447);--ui-cbxc-line: rgba(0, 0, 0, 0.06);--ui-cbxc-fill: rgba(0, 0, 0, 0.06);--ui-cbxc-fill-strong: rgba(0, 0, 0, 0.1);--ui-cbxc-wash: rgba(0, 0, 0, 0.03);--ui-cbxc-flash: rgba(0, 0, 0, 0.14);--ui-cbxc-avatar: rgba(0, 0, 0, 0.06);--ui-cbxc-mark: rgba(0, 96, 226, 0.12);--ui-cbxc-accent: rgba(0, 96, 226, 0.765);--ui-cbxc-focus: rgba(0, 96, 226, 0.35);--ui-cbxc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cbxc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cbxc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cbxc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-cbxc-spring: cubic-bezier(0.34, 1.56, 0.64, 1);position: relative;display: block;width: 100%;max-width: 440px;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-cbxc-ink);-webkit-font-smoothing: antialiased}.ui-cbxc *, .ui-cbxc *::before, .ui-cbxc *::after{box-sizing: border-box}:where(.ui-cbxc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cbxc) svg{display: block;flex: none}.ui-cbxc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.65;stroke-linecap: round;stroke-linejoin: round}.ui-cbxc__label{display: block;margin: 0 0 6px 2px;font-size: 12px;line-height: 16px;font-weight: 500;color: var(--ui-cbxc-text)}.ui-cbxc__field{position: relative;overflow: hidden;border-radius: 8px;background: var(--ui-cbxc-card);box-shadow: var(--ui-cbxc-shadow);cursor: text;transition: height 300ms var(--ui-cbxc-ease), box-shadow 160ms ease}.ui-cbxc__field:hover{box-shadow: var(--ui-cbxc-shadow-hover)}.ui-cbxc__field:focus-within{outline: 2px solid var(--ui-cbxc-focus);outline-offset: 1px}.ui-cbxc__field-inner{position: relative;display: flex;flex-wrap: nowrap;align-items: center;min-height: 32px;padding: 4px 32px 4px 4px;overflow: hidden}.ui-cbxc__measure{position: absolute;top: 0;left: 0;display: flex;width: max-content;margin: 0;padding: 0;list-style: none;visibility: hidden;pointer-events: none;white-space: nowrap}.ui-cbxc__chips > .ui-cbxc__chip{flex: none}.ui-cbxc__measure > .ui-cbxc__chip{flex: none;max-width: none}.ui-cbxc__chips{display: contents;margin: 0;padding: 0;list-style: none}.ui-cbxc__chip{display: grid;grid-template-columns: 1fr;min-width: 0;max-width: 100%;overflow: hidden;margin-right: 4px;transition: grid-template-columns 260ms var(--ui-cbxc-ease) 160ms, margin-right 260ms var(--ui-cbxc-ease) 160ms, opacity 200ms ease 140ms}.ui-cbxc__chip[data-leaving]{grid-template-columns: 0fr;margin-right: 0;opacity: 0;pointer-events: none}.ui-cbxc__chip-body{display: inline-flex;align-items: center;gap: 6px;min-width: 0;height: 24px;overflow: hidden;padding: 0 2px 0 4px;border-radius: 6px;background: var(--ui-cbxc-fill);white-space: nowrap;font-size: 12px;line-height: 16px;font-weight: 500;color: var(--ui-cbxc-ink);transition: background-color 160ms ease, box-shadow 160ms ease}.ui-cbxc__chip[data-plain] .ui-cbxc__chip-body{padding-left: 8px}.ui-cbxc__chip[data-armed] .ui-cbxc__chip-body{background: var(--ui-cbxc-fill-strong);box-shadow: inset 0 0 0 0.5px var(--ui-cbxc-faint)}.ui-cbxc__chip[data-leaving] .ui-cbxc__chip-body{animation: ui-cbxc-flash 300ms ease-out both}.ui-cbxc__chip-label{min-width: 0;max-width: 168px;overflow: hidden;text-overflow: ellipsis}.ui-cbxc__chip-x{display: grid;place-items: center;flex: none;width: 18px;height: 18px;border-radius: 4px;color: var(--ui-cbxc-icon);transition: background-color 140ms ease, color 140ms ease}.ui-cbxc__chip-x:hover{background: var(--ui-cbxc-fill);color: var(--ui-cbxc-ink)}.ui-cbxc__chip-x .ui-cbxc__glyph{width: 12px;height: 12px;stroke-width: 1.9}.ui-cbxc__chip .ui-cbxc__avatar{width: 16px;height: 16px;font-size: 7px;background: var(--ui-cbxc-card);box-shadow: 0 0 0 0.5px var(--ui-cbxc-line)}.ui-cbxc__chip .ui-cbxc__dot{margin: 0 1px 0 2px}.ui-cbxc__chip .ui-cbxc__icon{width: 16px;height: 16px}.ui-cbxc__more .ui-cbxc__chip-body{padding: 0 8px;gap: 0;color: var(--ui-cbxc-text);font-variant-numeric: tabular-nums}.ui-cbxc__more{transition-delay: 0ms}.ui-cbxc__more[data-hidden]{grid-template-columns: 0fr;margin-right: 0;opacity: 0}.ui-cbxc__roll{display: inline-grid;overflow: hidden}.ui-cbxc__roll > span{animation: ui-cbxc-roll-up 300ms var(--ui-cbxc-ease) both}.ui-cbxc__roll > span[data-dir="down"]{animation-name: ui-cbxc-roll-down}.ui-cbxc__input{flex: 1 0 72px;min-width: 72px;height: 24px;margin: 0;padding: 0 4px 0 6px;border: 0;background: transparent;font: inherit;color: var(--ui-cbxc-ink);outline: none}.ui-cbxc__input::placeholder{color: var(--ui-cbxc-faint)}.ui-cbxc__toggle{position: absolute;top: 4px;right: 4px;display: grid;place-items: center;width: 24px;height: 24px;border-radius: 6px;color: var(--ui-cbxc-icon);transition: background-color 140ms ease, color 140ms ease}.ui-cbxc__toggle:hover{background: var(--ui-cbxc-wash);color: var(--ui-cbxc-ink)}.ui-cbxc__toggle .ui-cbxc__glyph{transition: transform 260ms var(--ui-cbxc-ease)}.ui-cbxc[data-open] .ui-cbxc__toggle .ui-cbxc__glyph{transform: rotate(180deg)}.ui-cbxc__avatar{display: grid;place-items: center;flex: none;width: 20px;height: 20px;border-radius: 50%;object-fit: cover;background: var(--ui-cbxc-avatar);color: var(--ui-cbxc-text);font-size: 8px;line-height: 1;font-weight: 500;letter-spacing: 0.02em}.ui-cbxc__dot{flex: none;width: 8px;height: 8px;margin: 0 4px;border-radius: 50%}.ui-cbxc__icon{display: grid;place-items: center;flex: none;width: 20px;height: 20px;color: var(--ui-cbxc-icon)}.ui-cbxc__icon svg{width: 16px;height: 16px}.ui-cbxc__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;right: 0;overflow: hidden;border-radius: 10px;background: var(--ui-cbxc-card);box-shadow: var(--ui-cbxc-shadow-pop);transform-origin: top center;animation: ui-cbxc-open 240ms var(--ui-cbxc-ease) both}.ui-cbxc__list{position: relative;max-height: 300px;padding: 4px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;transition: height 300ms var(--ui-cbxc-ease)}.ui-cbxc__pill{position: absolute;top: 0;left: 4px;right: 4px;border-radius: 6px;background: var(--ui-cbxc-fill);opacity: 0;pointer-events: none;transition: transform 90ms ease-out, height 90ms ease-out, opacity 140ms ease}.ui-cbxc__group-label{padding: 8px 8px 4px;font-size: 10px;line-height: 16px;font-weight: 500;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-cbxc-muted)}.ui-cbxc__group:first-child .ui-cbxc__group-label{padding-top: 4px}.ui-cbxc__option{position: relative;display: flex;align-items: center;gap: 8px;height: 32px;padding: 0 8px;border-radius: 6px;cursor: pointer;user-select: none;-webkit-tap-highlight-color: transparent}.ui-cbxc__text{display: flex;flex: 1;align-items: baseline;gap: 8px;min-width: 0}.ui-cbxc__name{flex: 0 0 auto;max-width: 100%;min-width: 0;overflow: hidden;color: var(--ui-cbxc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cbxc__hint{flex: 0 100 auto;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cbxc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cbxc mark{border-radius: 3px;background: var(--ui-cbxc-mark);color: inherit}.ui-cbxc__check{width: 16px;height: 16px;margin-left: auto;color: var(--ui-cbxc-accent);stroke-width: 1.8;opacity: 0;transform: scale(0.4);transition: opacity 120ms ease, transform 160ms ease}.ui-cbxc__option[aria-selected="true"] .ui-cbxc__check{opacity: 1;transform: none;transition: opacity 160ms ease, transform 380ms var(--ui-cbxc-spring)}.ui-cbxc__empty{padding: 12px 8px 10px;text-align: center;color: var(--ui-cbxc-muted);animation: ui-cbxc-in 240ms var(--ui-cbxc-ease) both}.ui-cbxc__create{animation: ui-cbxc-in 240ms var(--ui-cbxc-ease) both}.ui-cbxc__plus{display: grid;place-items: center;flex: none;width: 20px;height: 20px;border-radius: 6px;color: var(--ui-cbxc-icon);box-shadow: inset 0 0 0 0.5px var(--ui-cbxc-fill-strong)}.ui-cbxc__plus .ui-cbxc__glyph{width: 12px;height: 12px;stroke-width: 1.9}.ui-cbxc__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 12px;border-top: 0.5px solid var(--ui-cbxc-line);font-size: 12px;line-height: 16px;color: var(--ui-cbxc-muted)}.ui-cbxc__count{display: inline-flex;font-variant-numeric: tabular-nums}.ui-cbxc__keys{display: inline-flex;align-items: center;gap: 2px;white-space: nowrap}.ui-cbxc kbd{display: inline-grid;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-cbxc-card);box-shadow: var(--ui-cbxc-shadow);font-family: inherit;font-size: 10px;line-height: 16px;font-weight: 500;color: var(--ui-cbxc-text)}.ui-cbxc__keys > span{margin: 0 6px 0 2px}.ui-cbxc__keys > span:last-child{margin-right: 0}.ui-cbxc__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-cbxc-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-cbxc-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-cbxc-flash{0%{background-color: var(--ui-cbxc-fill)}35%{background-color: var(--ui-cbxc-flash)}100%{background-color: var(--ui-cbxc-flash);transform: scale(0.92)}}@keyframes ui-cbxc-roll-up{from{opacity: 0;transform: translateY(70%)}to{opacity: 1;transform: none}}@keyframes ui-cbxc-roll-down{from{opacity: 0;transform: translateY(-70%)}to{opacity: 1;transform: none}}@container (max-width: 380px){.ui-cbxc__keys{display: none}.ui-cbxc__chip-label{max-width: 132px}.ui-cbxc__input{flex-basis: 44px;min-width: 44px}}@media (hover: none) and (pointer: coarse){.ui-cbxc__field-inner{min-height: 40px;padding: 4px 40px 4px 4px}.ui-cbxc__chip-body{height: 32px}.ui-cbxc__chip-x{width: 26px;height: 26px}.ui-cbxc__input{height: 32px;font-size: 16px}.ui-cbxc__toggle{width: 32px;height: 32px}.ui-cbxc__option{height: 44px}.ui-cbxc__list{max-height: 340px}.ui-cbxc__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-cbxc *, .ui-cbxc *::before, .ui-cbxc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cbxc{--ui-cbxc-card: #1c1c1e;--ui-cbxc-ink: rgba(255, 255, 255, 0.9);--ui-cbxc-strong: #ffffff;--ui-cbxc-text: rgba(255, 255, 255, 0.62);--ui-cbxc-muted: rgba(255, 255, 255, 0.46);--ui-cbxc-faint: rgba(255, 255, 255, 0.3);--ui-cbxc-icon: rgba(255, 255, 255, 0.5);--ui-cbxc-line: rgba(255, 255, 255, 0.08);--ui-cbxc-fill: rgba(255, 255, 255, 0.08);--ui-cbxc-fill-strong: rgba(255, 255, 255, 0.13);--ui-cbxc-wash: rgba(255, 255, 255, 0.04);--ui-cbxc-flash: rgba(255, 255, 255, 0.18);--ui-cbxc-avatar: rgba(255, 255, 255, 0.08);--ui-cbxc-mark: rgba(77, 141, 255, 0.24);--ui-cbxc-accent: #4d8dff;--ui-cbxc-focus: rgba(77, 141, 255, 0.5);--ui-cbxc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cbxc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cbxc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6)}`;
var ne = [{ value: `maya`, label: `Maya Chen`, hint: `Product Designer`, avatar: true, group: `Design` }, { value: `jonas`, label: `Jonas Weber`, hint: `Design Lead`, avatar: true, group: `Design` }, { value: `priya`, label: `Priya Raman`, hint: `Brand Designer`, avatar: true, group: `Design` }, { value: `sara`, label: `Sara Okafor`, hint: `Staff Engineer`, avatar: true, group: `Engineering` }, { value: `leo`, label: `Leo Martins`, hint: `Frontend`, avatar: true, group: `Engineering` }, { value: `nina`, label: `Nina Petrova`, hint: `Backend`, avatar: true, group: `Engineering` }, { value: `tom`, label: `Tom Becker`, hint: `iOS`, avatar: true, group: `Engineering` }, { value: `elif`, label: `Elif Yilmaz`, hint: `Head of Product`, avatar: true, group: `Product` }, { value: `daniel`, label: `Daniel Kim`, hint: `Product Manager`, avatar: true, group: `Product` }, { value: `lucas`, label: `Lucas Moreau`, hint: `Product Analyst`, avatar: true, group: `Product` }];
function m() {
  return (0, r.jsx)(`div`, { className: `combobox-demo`, children: (0, r.jsx)(p, { label: `Reviewers`, options: ne, placeholder: `Add reviewers\u2026`, creatable: true, createLabel: (e) => `Invite \u201C${e}\u201D`, defaultOpen: true }) });
}

export {
  m
};
