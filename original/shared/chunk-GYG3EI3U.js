import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-tcGbF7g2.js
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
function l({ option: e }) {
  return e.icon ? (0, r.jsx)(`span`, { className: `ui-cbx__icon`, children: e.icon }) : typeof e.avatar == `string` ? (0, r.jsx)(`img`, { className: `ui-cbx__avatar`, src: e.avatar, alt: `` }) : e.avatar ? (0, r.jsx)(`span`, { className: `ui-cbx__avatar`, "aria-hidden": `true`, children: s(e.label) }) : e.color ? (0, r.jsx)(`span`, { className: `ui-cbx__dot`, style: { background: e.color }, "aria-hidden": `true` }) : null;
}
var u = ({ d: e, className: t }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: [`ui-cbx__glyph`, t].filter(Boolean).join(` `), "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var d = { close: `M7 7l10 10M17 7 7 17`, check: `M5.5 12.5l4 4L18.5 8`, chevron: `M8 10l4 4 4-4`, plus: `M12 6v12M6 12h12` };
function ee({ animate: e, leaving: t, armed: i2, plain: s2, children: c2 }) {
  let l2 = (0, n3.useRef)(null);
  return (0, n3.useLayoutEffect)(() => {
    let t2 = l2.current;
    e && t2 && !o() && (t2.animate([{ gridTemplateColumns: `0fr`, marginRight: `0px` }, { gridTemplateColumns: `1fr`, marginRight: `4px` }], { duration: 260, easing: a }), t2.firstElementChild?.animate([{ opacity: 0, transform: `scale(0.6)` }, { opacity: 1, transform: `scale(1.05)`, offset: 0.6 }, { opacity: 1, transform: `none` }], { duration: 340, easing: a }));
  }, []), (0, r.jsx)(`li`, { ref: l2, className: `ui-cbx__chip`, "data-leaving": t || void 0, "data-armed": i2 || void 0, "data-plain": s2 || void 0, children: c2 });
}
function f({ options: e, multiple: t = true, value: a2, defaultValue: o2, onChange: s2, placeholder: f2 = `Search\u2026`, creatable: p2 = false, onCreate: ne2, createLabel: re = (e2) => `Create \u201C${e2}\u201D`, maxVisibleTags: m, label: h, defaultOpen: ie = false, emptyText: ae = `No results`, className: oe }) {
  let g = `ui-cbx` + (0, n3.useId)().replace(/[^a-zA-Z0-9_-]/g, ``), [se, ce] = (0, n3.useState)(o2 ?? []), _ = a2 ?? se, [le, ue] = (0, n3.useState)([]), [v, y] = (0, n3.useState)(ie), [b, x] = (0, n3.useState)(``), [S, C] = (0, n3.useState)(null), [w, T] = (0, n3.useState)(null), [de, E] = (0, n3.useState)(``), D = (0, n3.useRef)(null), fe = (0, n3.useRef)(null), pe = (0, n3.useRef)(null), O = (0, n3.useRef)(null), k = (0, n3.useRef)(null), me = (0, n3.useRef)(null), he = (0, n3.useRef)(null), A = (0, n3.useRef)(false), j = (0, n3.useMemo)(() => [...e, ...le.filter((t2) => !e.some((e2) => e2.value === t2.value))], [e, le]), ge = (0, n3.useMemo)(() => new Map(j.map((e2) => [e2.value, e2])), [j]), M = (e2) => ge.get(e2) ?? { value: e2, label: e2 }, N = b.trim(), P = N.toLowerCase(), F = (0, n3.useMemo)(() => {
    let e2 = [];
    for (let t2 of j) {
      if (P && !`${t2.label} ${t2.hint ?? ``} ${t2.keywords ?? ``}`.toLowerCase().includes(P)) continue;
      let n4 = t2.group ?? ``, r2 = e2.find((e3) => e3.name === n4);
      r2 || e2.push(r2 = { name: n4, options: [] }), r2.options.push(t2);
    }
    return e2;
  }, [j, P]), I = p2 && !!N && !j.some((e2) => e2.label.toLowerCase() === P), L = [...F.flatMap((e2) => e2.options.map((e3) => e3.value)), ...I ? [i] : []], R = S !== null && L.includes(S) ? S : L[0], z = (e2) => `${g}-o${L.indexOf(e2)}`, [B, V] = (0, n3.useState)(() => _.map((e2) => ({ value: e2 }))), H = (0, n3.useRef)(B);
  H.current = B;
  let U = (0, n3.useRef)(/* @__PURE__ */ new Map()), W = (0, n3.useRef)(false), _e = _.join(``);
  (0, n3.useEffect)(() => {
    let e2 = H.current, t2 = false, n4 = e2.map((e3) => {
      let n5 = _.includes(e3.value);
      return n5 && e3.leaving ? (t2 = true, window.clearTimeout(U.current.get(e3.value)), U.current.delete(e3.value), { value: e3.value }) : !n5 && !e3.leaving ? (t2 = true, U.current.set(e3.value, window.setTimeout(() => {
        U.current.delete(e3.value), V((t3) => t3.filter((t4) => !(t4.value === e3.value && t4.leaving)));
      }, 420)), { value: e3.value, leaving: true }) : e3;
    });
    for (let e3 of _) n4.some((t3) => t3.value === e3) || (n4.push({ value: e3 }), t2 = true);
    t2 && V(n4);
  }, [_e]), (0, n3.useEffect)(() => {
    W.current = true;
    let e2 = U.current;
    return () => e2.forEach((e3) => window.clearTimeout(e3));
  }, []);
  let G = m ?? 1 / 0, ve = 0, K = B.filter((e2) => e2.leaving ? ve < G : ve++ < G), q = Math.max(0, B.filter((e2) => !e2.leaving).length - G), J = (0, n3.useRef)(q), ye = (0, n3.useRef)(`up`);
  q !== J.current && q > 0 && (ye.current = q > J.current ? `up` : `down`), q > 0 && (J.current = q);
  let be = q || J.current, xe = !!w && q > 0 && !K.some((e2) => e2.value === w), Y = (0, n3.useRef)(_.length), Se = (0, n3.useRef)(`up`);
  _.length !== Y.current && (Se.current = _.length > Y.current ? `up` : `down`, Y.current = _.length);
  let Ce = (e2, t2) => {
    a2 === void 0 && ce(e2), s2?.(e2, e2.map((e3) => t2?.value === e3 ? t2 : M(e3)));
  }, X = (e2, n4) => E(t ? `${e2}. ${n4} selected` : e2), Z = (e2) => {
    let n4 = _.includes(e2.value), r2 = t ? n4 ? _.filter((t2) => t2 !== e2.value) : [..._, e2.value] : [e2.value];
    Ce(r2, e2), X(`${e2.label} ${n4 && t ? `removed` : `selected`}`, r2.length), T(null), b && x(``), t || y(false);
  }, we = () => {
    let e2 = ne2?.(N) || { value: N, label: N };
    ue((t2) => [...t2.filter((t3) => t3.value !== e2.value), e2]), C(e2.value), Z(e2);
  }, Q = (e2) => {
    let t2 = _.filter((t3) => t3 !== e2);
    Ce(t2), X(`${M(e2).label} removed`, t2.length), T(null);
  }, Te = (e2) => {
    e2 === i ? we() : Z(M(e2));
  };
  (0, n3.useLayoutEffect)(() => {
    let e2 = fe.current, t2 = pe.current;
    if (!e2 || !t2) return;
    let n4 = () => e2.style.height = `${t2.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []), (0, n3.useLayoutEffect)(() => {
    let e2 = k.current, t2 = me.current;
    if (!v || !e2 || !t2) return;
    let n4 = () => {
      let n5 = getComputedStyle(e2), r3 = parseFloat(n5.paddingTop) + parseFloat(n5.paddingBottom), i2 = parseFloat(n5.maxHeight) || 1 / 0;
      e2.style.height = `${Math.min(t2.offsetHeight + r3, i2)}px`;
    };
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, [v]), (0, n3.useLayoutEffect)(() => {
    let e2 = k.current, t2 = he.current;
    if (!v || !e2 || !t2) return;
    let n4 = e2.querySelector(`[data-active]`);
    if (!n4) {
      t2.style.opacity = `0`;
      return;
    }
    let r2 = !t2.dataset.ready;
    if (r2 && (t2.style.transition = `none`), t2.style.opacity = `1`, t2.style.height = `${n4.offsetHeight}px`, t2.style.transform = `translateY(${n4.offsetTop}px)`, r2 && (t2.dataset.ready = `1`, t2.offsetWidth, t2.style.transition = ``), !A.current) return;
    A.current = false;
    let i2 = n4.previousElementSibling, a3 = i2?.classList.contains(`ui-cbx__group-label`) ? i2.offsetHeight : 0, o3 = n4.offsetTop - 6 - a3, s3 = n4.offsetTop + n4.offsetHeight + 6;
    o3 < e2.scrollTop ? e2.scrollTop = o3 : s3 > e2.scrollTop + e2.clientHeight && (e2.scrollTop = s3 - e2.clientHeight);
  }), (0, n3.useEffect)(() => {
    if (!v) return;
    let e2 = (e3) => {
      D.current && !D.current.contains(e3.target) && (y(false), T(null));
    };
    return document.addEventListener(`pointerdown`, e2), () => document.removeEventListener(`pointerdown`, e2);
  }, [v]);
  let Ee = (e2) => {
    if (!L.length) return;
    A.current = true;
    let t2 = Math.max(0, L.indexOf(R));
    C(L[(t2 + e2 + L.length) % L.length]);
  }, De = (e2) => {
    if (e2.key !== `Backspace` && T(null), e2.key === `ArrowDown` || e2.key === `ArrowUp`) {
      if (e2.preventDefault(), !v) {
        y(true);
        return;
      }
      Ee(e2.key === `ArrowDown` ? 1 : -1);
    } else if (e2.key === `Enter`) {
      if (!v || !R) return;
      e2.preventDefault(), Te(R);
    } else if (e2.key === `Escape`) v ? (e2.preventDefault(), e2.stopPropagation(), y(false)) : b && x(``);
    else if (e2.key === `Tab`) y(false);
    else if (e2.key === `Backspace` && !b && _.length) {
      e2.preventDefault();
      let t2 = _[_.length - 1];
      w === t2 ? Q(t2) : (T(t2), E(`${M(t2).label} \u2013 press Backspace again to remove`));
    }
  }, Oe = (e2) => {
    e2.target.closest(`button`) || (e2.target !== O.current && e2.preventDefault(), O.current?.focus(), T(null), y(true));
  }, ke = (e2) => {
    D.current?.contains(e2.relatedTarget) || (y(false), T(null));
  }, $ = (e2) => e2.preventDefault();
  return (0, r.jsxs)(`div`, { ref: D, className: [`ui-cbx`, oe].filter(Boolean).join(` `), "data-open": v || void 0, onBlur: ke, children: [(0, r.jsx)(`style`, { href: `ui-combobox`, precedence: `default`, children: te }), h && (0, r.jsx)(`label`, { className: `ui-cbx__label`, id: `${g}-label`, htmlFor: `${g}-input`, children: h }), (0, r.jsxs)(`div`, { ref: fe, className: `ui-cbx__field`, onMouseDown: Oe, children: [(0, r.jsxs)(`div`, { ref: pe, className: `ui-cbx__field-inner`, children: [(K.length > 0 || m !== void 0) && (0, r.jsxs)(`ul`, { className: `ui-cbx__chips`, role: `list`, "aria-label": `Selected`, children: [K.map((e2) => {
    let t2 = M(e2.value), n4 = !t2.icon && !t2.avatar && !t2.color;
    return (0, r.jsx)(ee, { animate: W.current, leaving: e2.leaving, armed: w === e2.value, plain: n4, children: (0, r.jsxs)(`span`, { className: `ui-cbx__chip-body`, children: [(0, r.jsx)(l, { option: t2 }), (0, r.jsx)(`span`, { className: `ui-cbx__chip-label`, children: t2.label }), (0, r.jsx)(`button`, { type: `button`, className: `ui-cbx__chip-x`, tabIndex: -1, "aria-label": `Remove ${t2.label}`, onMouseDown: $, onClick: () => Q(e2.value), children: (0, r.jsx)(u, { d: d.close }) })] }) }, e2.value);
  }), m !== void 0 && (0, r.jsx)(`li`, { className: `ui-cbx__chip ui-cbx__more`, "data-hidden": !q || void 0, "data-armed": xe || void 0, "aria-hidden": !q || void 0, children: (0, r.jsxs)(`span`, { className: `ui-cbx__chip-body`, children: [`+`, (0, r.jsx)(`span`, { className: `ui-cbx__roll`, children: (0, r.jsx)(`span`, { "data-dir": ye.current, children: be }, be) })] }) })] }), (0, r.jsx)(`input`, { ref: O, id: `${g}-input`, className: `ui-cbx__input`, value: b, placeholder: _.length ? void 0 : f2, autoComplete: `off`, spellCheck: false, role: `combobox`, "aria-expanded": v, "aria-controls": `${g}-list`, "aria-autocomplete": `list`, "aria-activedescendant": v && R ? z(R) : void 0, "aria-label": h ? void 0 : f2, onChange: (e2) => {
    x(e2.target.value), C(null), T(null), y(true);
  }, onKeyDown: De })] }), (0, r.jsx)(`button`, { type: `button`, className: `ui-cbx__toggle`, tabIndex: -1, "aria-label": v ? `Close list` : `Open list`, onMouseDown: $, onClick: () => {
    O.current?.focus(), y((e2) => !e2);
  }, children: (0, r.jsx)(u, { d: d.chevron }) })] }), v && (0, r.jsxs)(`div`, { className: `ui-cbx__pop`, onMouseDown: $, children: [(0, r.jsx)(`div`, { className: `ui-cbx__card`, children: (0, r.jsxs)(`div`, { ref: k, id: `${g}-list`, className: `ui-cbx__list`, role: `listbox`, "aria-multiselectable": t || void 0, "aria-labelledby": h ? `${g}-label` : void 0, "aria-label": h ? void 0 : `Options`, children: [(0, r.jsx)(`span`, { ref: he, className: `ui-cbx__pill`, "aria-hidden": `true` }), (0, r.jsxs)(`div`, { ref: me, className: `ui-cbx__list-inner`, children: [F.map((e2, t2) => (0, r.jsxs)(`div`, { role: `group`, "aria-labelledby": e2.name ? `${g}-g${t2}` : void 0, className: `ui-cbx__group`, children: [e2.name && (0, r.jsx)(`div`, { className: `ui-cbx__group-label`, id: `${g}-g${t2}`, children: e2.name }), e2.options.map((e3) => {
    let t3 = _.includes(e3.value);
    return (0, r.jsxs)(`div`, { id: z(e3.value), role: `option`, "aria-selected": t3, "data-active": R === e3.value || void 0, className: `ui-cbx__option`, onMouseDown: $, onMouseMove: () => R !== e3.value && C(e3.value), onClick: () => {
      C(e3.value), Z(e3);
    }, children: [(0, r.jsx)(l, { option: e3 }), (0, r.jsxs)(`span`, { className: `ui-cbx__text`, children: [(0, r.jsx)(`span`, { className: `ui-cbx__name`, children: (0, r.jsx)(c, { text: e3.label, query: N }) }), e3.hint && (0, r.jsx)(`span`, { className: `ui-cbx__hint`, children: (0, r.jsx)(c, { text: e3.hint, query: N }) })] }), (0, r.jsx)(u, { d: d.check, className: `ui-cbx__check` })] }, e3.value);
  })] }, e2.name || `_`)), !F.length && (0, r.jsxs)(`div`, { className: `ui-cbx__empty`, children: [ae, N && (0, r.jsxs)(r.Fragment, { children: [` for \u201C`, N, `\u201D`] })] }, N), I && (0, r.jsxs)(`div`, { id: z(i), role: `option`, "aria-selected": false, "data-active": R === i || void 0, className: `ui-cbx__option ui-cbx__create`, onMouseDown: $, onMouseMove: () => R !== i && C(i), onClick: we, children: [(0, r.jsx)(`span`, { className: `ui-cbx__plus`, "aria-hidden": `true`, children: (0, r.jsx)(u, { d: d.plus }) }), (0, r.jsx)(`span`, { className: `ui-cbx__name`, children: re(N) })] })] })] }) }), (0, r.jsxs)(`div`, { className: `ui-cbx__foot`, "aria-hidden": `true`, children: [(0, r.jsxs)(`span`, { className: `ui-cbx__count`, children: [(0, r.jsx)(`span`, { className: `ui-cbx__roll`, children: (0, r.jsx)(`span`, { "data-dir": Se.current, children: _.length }, _.length) }), (t || _.length, `\xA0selected`)] }), (0, r.jsxs)(`span`, { className: `ui-cbx__keys`, children: [(0, r.jsx)(`kbd`, { children: `\u2191` }), (0, r.jsx)(`kbd`, { children: `\u2193` }), (0, r.jsx)(`span`, { children: `to move` }), (0, r.jsx)(`kbd`, { children: `\u21B5` }), (0, r.jsxs)(`span`, { children: [`to `, t ? `toggle` : `pick`] })] })] })] }), (0, r.jsx)(`span`, { className: `ui-cbx__live`, "aria-live": `polite`, children: de })] });
}
var te = `.ui-cbx{--ui-cbx-tray: #f0f0f0;--ui-cbx-card: #ffffff;--ui-cbx-line: #ececec;--ui-cbx-ink: #171717;--ui-cbx-text: #404040;--ui-cbx-muted: #8f8f8f;--ui-cbx-faint: #b5b5b5;--ui-cbx-edge: #d4d4d8;--ui-cbx-active: #f0f0f1;--ui-cbx-chip: #f4f4f5;--ui-cbx-chip-line: #e6e6e8;--ui-cbx-armed: #e4e4e7;--ui-cbx-flash: #d9d9dd;--ui-cbx-avatar: #e9e9ec;--ui-cbx-avatar-ink: #5b5b62;--ui-cbx-mark: rgba(47, 107, 255, 0.14);--ui-cbx-accent: #2f6bff;--ui-cbx-ring: rgba(23, 23, 23, 0.08);--ui-cbx-focus: rgba(23, 23, 23, 0.22);--ui-cbx-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06);--ui-cbx-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-cbx-spring: cubic-bezier(0.34, 1.56, 0.64, 1);position: relative;display: block;width: 100%;max-width: 440px;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.4;color: var(--ui-cbx-text);-webkit-font-smoothing: antialiased}.ui-cbx *, .ui-cbx *::before, .ui-cbx *::after{box-sizing: border-box}:where(.ui-cbx) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cbx) svg{display: block;flex: none}.ui-cbx__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-cbx__label{display: block;margin: 0 0 7px 2px;font-size: 13px;font-weight: 500;color: var(--ui-cbx-ink)}.ui-cbx__field{position: relative;overflow: hidden;border-radius: 12px;background: var(--ui-cbx-card);box-shadow: 0 0 0 1px var(--ui-cbx-line), 0 1px 2px rgba(0, 0, 0, 0.04);cursor: text;transition: height 300ms var(--ui-cbx-ease), box-shadow 160ms ease}.ui-cbx__field:hover{box-shadow: 0 0 0 1px var(--ui-cbx-edge), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-cbx__field:focus-within{box-shadow: 0 0 0 1px var(--ui-cbx-edge), 0 0 0 4px var(--ui-cbx-ring)}.ui-cbx__field-inner{display: flex;flex-wrap: wrap;align-items: center;row-gap: 4px;min-height: 40px;padding: 6px 40px 6px 6px}.ui-cbx__chips{display: contents;margin: 0;padding: 0;list-style: none}.ui-cbx__chip{display: grid;grid-template-columns: 1fr;min-width: 0;max-width: 100%;overflow: hidden;margin-right: 4px;transition: grid-template-columns 260ms var(--ui-cbx-ease) 160ms, margin-right 260ms var(--ui-cbx-ease) 160ms, opacity 200ms ease 140ms}.ui-cbx__chip[data-leaving]{grid-template-columns: 0fr;margin-right: 0;opacity: 0;pointer-events: none}.ui-cbx__chip-body{display: inline-flex;align-items: center;gap: 6px;min-width: 0;height: 28px;overflow: hidden;padding: 0 3px 0 5px;border-radius: 8px;background: var(--ui-cbx-chip);box-shadow: inset 0 0 0 1px var(--ui-cbx-chip-line);white-space: nowrap;color: var(--ui-cbx-ink);font-size: 13px;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-cbx__chip[data-plain] .ui-cbx__chip-body{padding-left: 9px}.ui-cbx__chip[data-armed] .ui-cbx__chip-body{background: var(--ui-cbx-armed);box-shadow: inset 0 0 0 1px var(--ui-cbx-faint)}.ui-cbx__chip[data-leaving] .ui-cbx__chip-body{animation: ui-cbx-flash 300ms ease-out both}.ui-cbx__chip-label{min-width: 0;max-width: 168px;overflow: hidden;text-overflow: ellipsis}.ui-cbx__chip-x{display: grid;place-items: center;flex: none;width: 20px;height: 20px;border-radius: 6px;color: var(--ui-cbx-muted);transition: background-color 140ms ease, color 140ms ease}.ui-cbx__chip-x:hover{background: var(--ui-cbx-armed);color: var(--ui-cbx-ink)}.ui-cbx__chip-x .ui-cbx__glyph{width: 13px;height: 13px;stroke-width: 2}.ui-cbx__chip .ui-cbx__avatar{width: 18px;height: 18px;font-size: 8.5px}.ui-cbx__chip .ui-cbx__dot{margin: 0 2px}.ui-cbx__more .ui-cbx__chip-body{padding: 0 9px;color: var(--ui-cbx-text);font-variant-numeric: tabular-nums}.ui-cbx__more{transition-delay: 0ms}.ui-cbx__more[data-hidden]{grid-template-columns: 0fr;margin-right: 0;opacity: 0}.ui-cbx__roll{display: inline-grid;overflow: hidden}.ui-cbx__roll > span{animation: ui-cbx-roll-up 300ms var(--ui-cbx-ease) both}.ui-cbx__roll > span[data-dir="down"]{animation-name: ui-cbx-roll-down}.ui-cbx__input{flex: 1 0 72px;min-width: 72px;height: 28px;margin: 0;padding: 0 4px 0 6px;border: 0;background: transparent;font: inherit;color: var(--ui-cbx-ink);outline: none}.ui-cbx__input::placeholder{color: var(--ui-cbx-faint)}.ui-cbx__toggle{position: absolute;top: 6px;right: 6px;display: grid;place-items: center;width: 28px;height: 28px;border-radius: 8px;color: var(--ui-cbx-muted);transition: background-color 140ms ease, color 140ms ease}.ui-cbx__toggle:hover{background: var(--ui-cbx-active);color: var(--ui-cbx-ink)}.ui-cbx__toggle .ui-cbx__glyph{transition: transform 260ms var(--ui-cbx-ease)}.ui-cbx[data-open] .ui-cbx__toggle .ui-cbx__glyph{transform: rotate(180deg)}.ui-cbx__avatar{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 50%;object-fit: cover;background: var(--ui-cbx-avatar);color: var(--ui-cbx-avatar-ink);font-size: 9.5px;font-weight: 600;letter-spacing: 0.02em}.ui-cbx__dot{flex: none;width: 8px;height: 8px;margin: 0 4px;border-radius: 50%}.ui-cbx__icon{display: grid;place-items: center;flex: none;width: 18px;height: 18px;color: var(--ui-cbx-muted)}.ui-cbx__icon svg{width: 16px;height: 16px}.ui-cbx__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;right: 0;padding: 4px;border-radius: 18px;background: var(--ui-cbx-tray);box-shadow: var(--ui-cbx-shadow);transform-origin: top center;animation: ui-cbx-open 240ms var(--ui-cbx-ease) both}.ui-cbx__card{overflow: hidden;border-radius: 14px;background: var(--ui-cbx-card);box-shadow: 0 0 0 1px var(--ui-cbx-line)}.ui-cbx__list{position: relative;max-height: 300px;padding: 4px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;transition: height 300ms var(--ui-cbx-ease)}.ui-cbx__pill{position: absolute;top: 0;left: 4px;right: 4px;border-radius: 9px;background: var(--ui-cbx-active);opacity: 0;pointer-events: none;transition: transform 220ms var(--ui-cbx-ease), height 220ms var(--ui-cbx-ease), opacity 160ms ease}.ui-cbx__group-label{padding: 9px 8px 4px;font-size: 11.5px;font-weight: 500;color: var(--ui-cbx-faint)}.ui-cbx__group:first-child .ui-cbx__group-label{padding-top: 5px}.ui-cbx__option{position: relative;display: flex;align-items: center;gap: 10px;height: 36px;padding: 0 8px;border-radius: 9px;cursor: pointer;user-select: none;-webkit-tap-highlight-color: transparent}.ui-cbx__text{display: flex;flex: 1;align-items: baseline;gap: 8px;min-width: 0}.ui-cbx__name{flex: 0 0 auto;max-width: 100%;min-width: 0;overflow: hidden;color: var(--ui-cbx-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cbx__hint{flex: 0 100 auto;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-cbx-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cbx mark{border-radius: 3px;background: var(--ui-cbx-mark);color: inherit}.ui-cbx__check{width: 16px;height: 16px;margin-left: auto;color: var(--ui-cbx-ink);stroke-width: 2.2;opacity: 0;transform: scale(0.4);transition: opacity 120ms ease, transform 160ms ease}.ui-cbx__option[aria-selected="true"] .ui-cbx__check{opacity: 1;transform: none;transition: opacity 160ms ease, transform 380ms var(--ui-cbx-spring)}.ui-cbx__empty{padding: 14px 10px 10px;text-align: center;color: var(--ui-cbx-muted);animation: ui-cbx-in 240ms var(--ui-cbx-ease) both}.ui-cbx__create{animation: ui-cbx-in 240ms var(--ui-cbx-ease) both}.ui-cbx__plus{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 50%;color: var(--ui-cbx-muted);box-shadow: inset 0 0 0 1px var(--ui-cbx-edge)}.ui-cbx__plus .ui-cbx__glyph{width: 13px;height: 13px;stroke-width: 2}.ui-cbx__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 10px;font-size: 12px;color: var(--ui-cbx-muted)}.ui-cbx__count{display: inline-flex;font-variant-numeric: tabular-nums}.ui-cbx__keys{display: inline-flex;align-items: center;gap: 3px;white-space: nowrap}.ui-cbx kbd{display: inline-grid;place-items: center;min-width: 18px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-cbx-card);box-shadow: inset 0 0 0 1px var(--ui-cbx-line), 0 1px 0 var(--ui-cbx-line);font-family: inherit;font-size: 10.5px;font-weight: 500;color: var(--ui-cbx-muted)}.ui-cbx__keys > span{margin: 0 6px 0 2px}.ui-cbx__keys > span:last-child{margin-right: 0}.ui-cbx__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-cbx-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-cbx-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-cbx-flash{0%{background-color: var(--ui-cbx-chip)}35%{background-color: var(--ui-cbx-flash)}100%{background-color: var(--ui-cbx-flash);transform: scale(0.92)}}@keyframes ui-cbx-roll-up{from{opacity: 0;transform: translateY(70%)}to{opacity: 1;transform: none}}@keyframes ui-cbx-roll-down{from{opacity: 0;transform: translateY(-70%)}to{opacity: 1;transform: none}}@container (max-width: 380px){.ui-cbx__keys{display: none}.ui-cbx__chip-label{max-width: 132px}.ui-cbx__hint{font-size: 12px}.ui-cbx__input{flex-basis: 44px;min-width: 44px}}@media (hover: none) and (pointer: coarse){.ui-cbx__field-inner{min-height: 44px;padding-right: 44px}.ui-cbx__chip-body{height: 32px}.ui-cbx__chip-x{width: 26px;height: 26px}.ui-cbx__input{height: 32px;font-size: 16px}.ui-cbx__toggle{width: 32px;height: 32px}.ui-cbx__option{height: 44px}.ui-cbx__list{max-height: 340px}.ui-cbx__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-cbx *, .ui-cbx *::before, .ui-cbx *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cbx{--ui-cbx-tray: #111113;--ui-cbx-card: #19191b;--ui-cbx-line: #2a2a2e;--ui-cbx-ink: #ededed;--ui-cbx-text: #c8c8cc;--ui-cbx-muted: #8b8b92;--ui-cbx-faint: #5c5c63;--ui-cbx-edge: #3a3a40;--ui-cbx-active: #26262a;--ui-cbx-chip: #232326;--ui-cbx-chip-line: #2f2f34;--ui-cbx-armed: #303035;--ui-cbx-flash: #3a3a40;--ui-cbx-avatar: #2c2c31;--ui-cbx-avatar-ink: #b4b4bb;--ui-cbx-mark: rgba(109, 139, 255, 0.24);--ui-cbx-accent: #6d8bff;--ui-cbx-ring: rgba(255, 255, 255, 0.07);--ui-cbx-focus: rgba(255, 255, 255, 0.3);--ui-cbx-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6)}`;
var p = [{ value: `maya`, label: `Maya Chen`, hint: `Product Designer`, avatar: true, group: `Design` }, { value: `jonas`, label: `Jonas Weber`, hint: `Design Lead`, avatar: true, group: `Design` }, { value: `priya`, label: `Priya Raman`, hint: `Brand Designer`, avatar: true, group: `Design` }, { value: `sara`, label: `Sara Okafor`, hint: `Staff Engineer`, avatar: true, group: `Engineering` }, { value: `leo`, label: `Leo Martins`, hint: `Frontend`, avatar: true, group: `Engineering` }, { value: `nina`, label: `Nina Petrova`, hint: `Backend`, avatar: true, group: `Engineering` }, { value: `tom`, label: `Tom Becker`, hint: `iOS`, avatar: true, group: `Engineering` }, { value: `elif`, label: `Elif Yilmaz`, hint: `Head of Product`, avatar: true, group: `Product` }, { value: `daniel`, label: `Daniel Kim`, hint: `Product Manager`, avatar: true, group: `Product` }, { value: `lucas`, label: `Lucas Moreau`, hint: `Product Analyst`, avatar: true, group: `Product` }];
function ne() {
  return (0, r.jsx)(`div`, { className: `combobox-demo`, children: (0, r.jsx)(f, { label: `Reviewers`, options: p, defaultValue: [`maya`, `sara`], placeholder: `Add reviewers\u2026`, maxVisibleTags: 4, creatable: true, createLabel: (e) => `Invite \u201C${e}\u201D`, defaultOpen: true }) });
}

export {
  ne
};
