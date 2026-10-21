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

// reconstructed/demo.clean-dYQPE1hb.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{
  id: `milestone`,
  label: `Milestone`,
  months: 0
}, {
  id: `1m`,
  label: `1 month`,
  months: 1
}, {
  id: `3m`,
  label: `3 months`,
  months: 3
}, {
  id: `6m`,
  label: `6 months`,
  months: 6
}, {
  id: `12m`,
  label: `12 months`,
  months: 12
}];
var a = [{
  id: `once`,
  label: `Once`,
  perYear: 0
}, {
  id: `monthly`,
  label: `Monthly`,
  perYear: 12
}, {
  id: `quarterly`,
  label: `Quarterly`,
  perYear: 4
}, {
  id: `yearly`,
  label: `Yearly`,
  perYear: 1
}];
var o = [{
  name: `Set-up fee`,
  repeat: `once`,
  price: 4999
}, {
  name: `Platform licence`,
  repeat: `monthly`,
  price: 1200
}, {
  name: `Premium support`,
  repeat: `monthly`,
  price: 350
}, {
  name: `Extra seats (10)`,
  repeat: `monthly`,
  price: 240
}, {
  name: `Onboarding workshop`,
  repeat: `once`,
  price: 1500
}];
var s = 0;
var c = () => `l${++s}`;
function L1Component({
  title = `Create a billing schedule`,
  phase = `Build-out phase`,
  currency = `$`,
  catalog = o,
  defaultLines = [{
    id: `seed-1`,
    kind: `product`,
    name: `Set-up fee`,
    repeat: `once`,
    price: 4999,
    timing: `advance`
  }],
  defaultStart = `2026-01-01`,
  onChange,
  className
}) {
  let [S, setS] = n3.useState(phase);
  let [w, setW] = n3.useState(defaultStart);
  let [E, setE] = n3.useState(`milestone`);
  let [O, setO] = n3.useState(defaultLines);
  let [A, setA] = n3.useState(null);
  let MRef = n3.useRef(null);
  let ref = useG(MRef);
  n3.useEffect(() => {
    onChange?.({
      phase: S,
      start: w,
      duration: E,
      lines: O
    });
  }, [S, w, E, O, onChange]);
  let P = (e) => `${currency}${e.toLocaleString(`en-US`, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
  let F = (e) => {
    let t = /* @__PURE__ */ new Date(`${e}T12:00:00`);
    if (isNaN(t.getTime())) {
      return `\u2013`;
    }
    return t.toLocaleDateString(`en-GB`, {
      day: `numeric`,
      month: `short`,
      year: `numeric`
    });
  };
  let I = i.find((e) => e.id === E);
  let L = (() => {
    if (!I.months) {
      return `Milestone`;
    }
    let e = /* @__PURE__ */ new Date(`${w}T12:00:00`);
    if (isNaN(e.getTime())) {
      return `\u2013`;
    }
    e.setMonth(e.getMonth() + I.months);
    e.setDate(e.getDate() - 1);
    return F(e.toISOString().slice(0, 10));
  })();
  let R = (e, t) => setO((n4) => n4.map((n5) => {
    if (n5.id === e) {
      return {
        ...n5,
        ...t
      };
    }
    return n5;
  }));
  let z = (e) => setO((t) => t.filter((t2) => t2.id !== e));
  let B = (e) => {
    setO((t) => [...t.filter((e2) => e2.kind === `product`), {
      id: c(),
      kind: `product`,
      ...e,
      timing: `advance`
    }, ...t.filter((e2) => e2.kind !== `product`)]);
    setA(null);
  };
  let V = O.some((e) => e.kind === `discount`);
  let H = O.some((e) => e.kind === `minimum`);
  let U = O.filter((e) => e.kind === `product`);
  let W = O.find((e) => e.kind === `discount`);
  let G = O.find((e) => e.kind === `minimum`);
  let K = 1 - (W?.percent ?? 0) / 100;
  let q = U.filter((e) => e.timing === `advance`).reduce((acc, item) => acc + item.price, 0) * K;
  let J = I.months || 1;
  let Y = U.reduce((acc, item) => {
    let perYear = a.find((e) => e.id === item.repeat).perYear;
    return acc + (perYear ? item.price * Math.max(1, Math.round(perYear * J / 12)) : item.price);
  }, 0) * K;
  let X = Math.max(Y, G?.amount ?? 0);
  return /* @__PURE__ */ jsxs("div", { className: [`ui-bsc`, className].filter(Boolean).join(` `), children: [
    /* @__PURE__ */ jsx("style", { href: `ui-billing-schedule-clean`, precedence: `default`, children: _ }),
    /* @__PURE__ */ jsxs("div", { className: `ui-bsc__head`, children: [
      /* @__PURE__ */ jsx("p", { className: `ui-bsc__title`, children: title }),
      /* @__PURE__ */ jsxs("div", { className: `ui-bsc__summary`, children: [
        /* @__PURE__ */ jsx("input", { className: `ui-bsc__phase`, value: S, onChange: (e) => setS(e.target.value), "aria-label": `Phase name`, size: Math.max(6, S.length) }),
        /* @__PURE__ */ jsx("span", { className: `ui-bsc__dot`, "aria-hidden": `true`, children: `\xB7` }),
        /* @__PURE__ */ jsx("span", { className: `ui-bsc__date`, children: F(w) }),
        /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M5 12h14m0 0-5-5m5 5-5 5` }) }),
        /* @__PURE__ */ jsx("span", { className: `ui-bsc__end`, children: L }, L)
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ui-bsc__fields`, children: [
      /* @__PURE__ */ jsxs("label", { className: `ui-bsc__field`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-bsc__label`, children: `Start date` }),
        /* @__PURE__ */ jsxs("span", { className: `ui-bsc__input`, children: [
          /* @__PURE__ */ jsx("input", { type: `date`, value: w, onChange: (e) => setW(e.target.value) }),
          /* @__PURE__ */ jsx(P1Component, { d: `M7 4v3M17 4v3M4.5 9.5h15M6 6h12a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 18 20H6a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 6 6Z` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-bsc__field`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-bsc__label`, id: `ui-bsc-duration`, children: `Duration` }),
        /* @__PURE__ */ jsx(H1Component, { open: A === `duration`, onOpenChange: (e) => setA(e ? `duration` : null), label: I.label, labelledBy: `ui-bsc-duration`, children: i.map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `option`, "aria-selected": e.id === E, onClick: () => {
          setE(e.id);
          return setA(null);
        }, children: [
          e.label,
          e.id === E && /* @__PURE__ */ jsx(P1Component, { d: `m6 12.5 4 4 8-9` })
        ] }, e.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ui-bsc__table`, role: `table`, "aria-label": `Billing lines`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-bsc__row ui-bsc__row--head`, role: `row`, children: [
        /* @__PURE__ */ jsx("span", { role: `columnheader`, children: `Name` }),
        /* @__PURE__ */ jsx("span", { role: `columnheader`, children: `Repeats` }),
        /* @__PURE__ */ jsx("span", { role: `columnheader`, className: `ui-bsc__right`, children: `Price` })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-bsc__rows-outer`, ref, children: /* @__PURE__ */ jsxs("div", { ref: MRef, children: [
        O.length === 0 && /* @__PURE__ */ jsx("p", { className: `ui-bsc__empty`, children: `No products yet \u2013 add one below.` }),
        O.map((e) => /* @__PURE__ */ jsxs("div", { className: `ui-bsc__row`, role: `row`, "data-kind": e.kind, children: [
          /* @__PURE__ */ jsxs("span", { role: `cell`, className: `ui-bsc__name`, children: [
            e.kind !== `product` && /* @__PURE__ */ jsx("span", { className: `ui-bsc__tag`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(P1Component, { d: e.kind === `discount` ? d : d_2 }) }),
            /* @__PURE__ */ jsx("span", { className: `ui-bsc__name-text`, children: e.name })
          ] }),
          /* @__PURE__ */ jsx("span", { role: `cell`, children: e.kind === `product` ? /* @__PURE__ */ jsxs("label", { className: `ui-bsc__repeat`, children: [
            /* @__PURE__ */ jsx(P1Component, { d: d_1 }),
            /* @__PURE__ */ jsx("select", { value: e.repeat, onChange: (t) => R(e.id, {
              repeat: t.target.value
            }), "aria-label": `${e.name} repeats`, children: a.map((e2) => /* @__PURE__ */ jsx("option", { value: e2.id, children: e2.label }, e2.id)) })
          ] }) : /* @__PURE__ */ jsx("span", { className: `ui-bsc__muted`, children: e.kind === `discount` ? `Whole phase` : `Per phase` }) }),
          /* @__PURE__ */ jsxs("span", { role: `cell`, className: `ui-bsc__price`, children: [
            /* @__PURE__ */ jsxs("span", { className: `ui-bsc__price-main`, children: [
              e.kind === `product` && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(M1Component, { value: e.price, prefix: currency, onChange: (price) => R(e.id, {
                  price
                }), label: `${e.name} price` }),
                /* @__PURE__ */ jsxs("span", { className: `ui-bsc__muted`, children: [
                  `/ `,
                  e.repeat === `once` ? `once` : a.find((t) => t.id === e.repeat).label.toLowerCase().replace(`ly`, ``)
                ] })
              ] }),
              e.kind === `discount` && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(M1Component, { value: e.percent, suffix: `%`, max: 100, onChange: (percent) => R(e.id, {
                  percent
                }), label: `Discount percent` }),
                /* @__PURE__ */ jsx("span", { className: `ui-bsc__muted`, children: `off` })
              ] }),
              e.kind === `minimum` && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(M1Component, { value: e.amount, prefix: currency, onChange: (amount) => R(e.id, {
                  amount
                }), label: `Minimum commitment` }),
                /* @__PURE__ */ jsx("span", { className: `ui-bsc__muted`, children: `minimum` })
              ] }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-bsc__remove`, "aria-label": `Remove ${e.name}`, onClick: () => z(e.id), children: /* @__PURE__ */ jsx(P1Component, { d: `M7 7l10 10M17 7 7 17` }) })
            ] }),
            e.kind === `product` && /* @__PURE__ */ jsxs("select", { className: `ui-bsc__timing`, value: e.timing, onChange: (t) => R(e.id, {
              timing: t.target.value
            }), "aria-label": `${e.name} billed`, children: [
              /* @__PURE__ */ jsx("option", { value: `advance`, children: `Billed in advance` }),
              /* @__PURE__ */ jsx("option", { value: `arrears`, children: `Billed in arrears` })
            ] })
          ] })
        ] }, e.id))
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ui-bsc__actions`, children: [
      /* @__PURE__ */ jsx(H1Component, { open: A === `product`, onOpenChange: (e) => setA(e ? `product` : null), label: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(P1Component, { d: `M12 5.5v13M5.5 12h13` }),
        `Add product`
      ] }), button: true, up: true, children: catalog.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `option`, "aria-selected": false, onClick: () => B(e), children: /* @__PURE__ */ jsxs("span", { children: [
        e.name,
        /* @__PURE__ */ jsxs("small", { children: [
          P(e.price),
          ` \xB7 `,
          a.find((t) => t.id === e.repeat).label.toLowerCase()
        ] })
      ] }) }, e.name)) }),
      /* @__PURE__ */ jsx("span", { className: `ui-bsc__spacer` }),
      /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-bsc__btn`, disabled: V, onClick: () => setO((e) => [...e, {
        id: c(),
        kind: `discount`,
        name: `Discount`,
        percent: 10
      }]), children: [
        /* @__PURE__ */ jsx(P1Component, { d }),
        `Add discount`
      ] }),
      /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-bsc__btn`, disabled: H, onClick: () => setO((e) => [...e, {
        id: c(),
        kind: `minimum`,
        name: `Minimum commitment`,
        amount: 1e4
      }]), children: [
        /* @__PURE__ */ jsx(P1Component, { d: d_2 }),
        `Add minimum`
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ui-bsc__totals`, "aria-live": `polite`, children: [
      /* @__PURE__ */ jsxs("span", { className: `ui-bsc__total`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-bsc__total-label`, children: `First invoice` }),
        /* @__PURE__ */ jsx("b", { children: P(q) })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: `ui-bsc__total ui-bsc__total--phase`, children: [
        G && X === G.amount && Y < G.amount && /* @__PURE__ */ jsx("em", { children: `Minimum applies` }),
        /* @__PURE__ */ jsx("span", { className: `ui-bsc__total-label`, children: I.months ? `Phase total (${I.label})` : `Phase total` }),
        /* @__PURE__ */ jsx("b", { children: P(X) })
      ] })
    ] })
  ] });
}
var d_1 = `M17 3.5 19.5 6 17 8.5M19.5 6H9a5 5 0 0 0-5 5M7 20.5 4.5 18 7 15.5M4.5 18H15a5 5 0 0 0 5-5`;
var d = `M9 15 15 9M9.5 9.5h.01M14.5 14.5h.01M12 3l2.1 1.6 2.6-.2.9 2.5 2.3 1.2-.4 2.6L21 12.6l-1.5 2.1.4 2.6-2.3 1.2-.9 2.5-2.6-.2L12 21.4l-2.1-1.6-2.6.2-.9-2.5L4.1 16.3l.4-2.6L3 12l1.5-2.1-.4-2.6 2.3-1.2.9-2.5 2.6.2Z`;
var d_2 = `M5 19.5h14M7 15.5h10M9 11.5h6M10 7.5h4M12 4v1`;
var P1Component = ({
  d: d2
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: d2 }) });
function M1Component({
  value,
  onChange,
  prefix,
  suffix,
  max,
  label
}) {
  let [c2, setC] = n3.useState(null);
  let u = c2 ?? value.toLocaleString(`en-US`, {
    minimumFractionDigits: suffix ? 0 : 2,
    maximumFractionDigits: 2
  });
  return /* @__PURE__ */ jsxs("span", { className: `ui-bsc__num`, children: [
    prefix,
    /* @__PURE__ */ jsx("input", { value: u, inputMode: `decimal`, "aria-label": label, size: Math.max(2, u.length), onFocus: () => setC(String(value)), onChange: (e) => setC(e.target.value.replace(/[^\d.]/g, ``)), onBlur: () => {
      onChange(Math.max(0, Math.min(max ?? Infinity, parseFloat(c2 ?? ``) || 0)));
      setC(null);
    }, onKeyDown: (e) => e.key === `Enter` && e.target.blur() }),
    suffix
  ] });
}
function H1Component({
  open,
  onOpenChange,
  label,
  labelledBy,
  accent,
  button: button_1,
  up,
  children
}) {
  let uRef = n3.useRef(null);
  n3.useEffect(() => {
    if (!open) {
      return;
    }
    let n4 = (e) => !uRef.current?.contains(e.target) && onOpenChange(false);
    let r2 = (e) => e.key === `Escape` && onOpenChange(false);
    document.addEventListener(`pointerdown`, n4);
    document.addEventListener(`keydown`, r2);
    return () => {
      document.removeEventListener(`pointerdown`, n4);
      document.removeEventListener(`keydown`, r2);
    };
  }, [open, onOpenChange]);
  return /* @__PURE__ */ jsxs("div", { className: `ui-bsc__dd`, ref: uRef, children: [
    /* @__PURE__ */ jsxs("button", { type: `button`, className: button_1 ? `ui-bsc__btn` : accent ? `ui-bsc__select ui-bsc__select--accent` : `ui-bsc__select`, "aria-haspopup": `listbox`, "aria-expanded": open, "aria-labelledby": labelledBy, onClick: () => onOpenChange(!open), children: [
      /* @__PURE__ */ jsx("span", { className: `ui-bsc__select-label`, children: label }),
      !button_1 && /* @__PURE__ */ jsx(P1Component, { d: `m7 10 5 5 5-5` })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: `ui-bsc__menu`, role: `listbox`, "data-up": up ? `` : void 0, children })
  ] });
}
function useG(MRef) {
  let tRef = n3.useRef(null);
  n3.useLayoutEffect(() => {
    let tRef_current = tRef.current;
    let e_current = MRef.current;
    if (!tRef_current || !e_current) {
      return;
    }
    let i2 = () => {
      tRef_current.style.height = `${e_current.offsetHeight}px`;
    };
    i2();
    let a2 = new ResizeObserver(i2);
    a2.observe(e_current);
    let o2 = requestAnimationFrame(() => tRef_current.setAttribute(`data-smooth`, ``));
    return () => {
      a2.disconnect();
      cancelAnimationFrame(o2);
    };
  }, [MRef]);
  return tRef;
}
var _ = `.ui-bsc{--ui-bsc-card: #ffffff;--ui-bsc-ink: rgba(0, 0, 0, 0.88);--ui-bsc-strong: #000000;--ui-bsc-text: rgba(0, 0, 0, 0.61);--ui-bsc-muted: rgba(0, 0, 0, 0.45);--ui-bsc-faint: rgba(0, 0, 0, 0.27);--ui-bsc-icon: rgba(0, 0, 0, 0.447);--ui-bsc-line: rgba(0, 0, 0, 0.06);--ui-bsc-wash: rgba(0, 0, 0, 0.03);--ui-bsc-fill: rgba(0, 0, 0, 0.06);--ui-bsc-accent: rgba(0, 96, 226, 0.765);--ui-bsc-pick: rgba(0, 96, 226, 0.05);--ui-bsc-pick-edge: rgba(0, 96, 226, 0.35);--ui-bsc-focus: rgba(0, 96, 226, 0.35);--ui-bsc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-bsc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-bsc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-bsc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;width: 100%;max-width: 560px;border-radius: 10px;background: var(--ui-bsc-card);box-shadow: var(--ui-bsc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-bsc-ink);-webkit-font-smoothing: antialiased}.ui-bsc *, .ui-bsc *::before, .ui-bsc *::after{box-sizing: border-box}:where(.ui-bsc) button, :where(.ui-bsc) select, :where(.ui-bsc) input{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit}:where(.ui-bsc) button{cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-bsc button:focus-visible, .ui-bsc select:focus-visible{outline: 2px solid var(--ui-bsc-focus);outline-offset: 1px}.ui-bsc svg{display: block;width: 16px;height: 16px;flex: none;fill: none;stroke: currentColor;stroke-width: 1.65;stroke-linecap: round;stroke-linejoin: round}.ui-bsc__head{display: grid;gap: 2px;padding: 14px 14px 12px}.ui-bsc__title{margin: 0;font-size: 15px;line-height: 24px;font-weight: 500;color: var(--ui-bsc-strong)}.ui-bsc__summary{display: flex;align-items: center;gap: 6px;min-width: 0;color: var(--ui-bsc-text);white-space: nowrap}.ui-bsc__phase{min-width: 0;max-width: 100%;margin-left: -4px;padding: 0 4px;border-radius: 5px;font-weight: 500;color: var(--ui-bsc-ink);outline: none;text-overflow: ellipsis;field-sizing: content;transition: background-color 120ms ease, box-shadow 120ms ease}.ui-bsc__phase:hover{background: var(--ui-bsc-wash)}.ui-bsc__phase:focus{background: var(--ui-bsc-pick);box-shadow: inset 0 0 0 0.5px var(--ui-bsc-pick-edge)}.ui-bsc__dot{color: var(--ui-bsc-faint)}.ui-bsc__summary svg{width: 14px;height: 14px;color: var(--ui-bsc-faint)}.ui-bsc__end{animation: ui-bsc-fade 260ms ease both}.ui-bsc__fields{display: grid;grid-template-columns: 1fr 1fr;gap: 10px;padding: 0 14px 14px}.ui-bsc__field{display: grid;gap: 6px;min-width: 0}.ui-bsc__label{font-size: 12px;line-height: 16px;color: var(--ui-bsc-text)}.ui-bsc__input, .ui-bsc__select{position: relative;display: flex;align-items: center;justify-content: space-between;gap: 8px;width: 100%;height: 32px;padding: 0 8px 0 10px;border-radius: 8px;background: var(--ui-bsc-card);box-shadow: var(--ui-bsc-shadow);color: var(--ui-bsc-ink);text-align: left;transition: box-shadow 140ms ease}.ui-bsc__select:hover, .ui-bsc__input:hover{box-shadow: var(--ui-bsc-shadow-hover)}.ui-bsc__input input{flex: 1;min-width: 0;height: 100%;outline: none;font-variant-numeric: tabular-nums}.ui-bsc__input input::-webkit-calendar-picker-indicator{position: absolute;inset: 0;width: auto;height: auto;opacity: 0;cursor: pointer}.ui-bsc__input svg{color: var(--ui-bsc-icon);pointer-events: none}.ui-bsc__input:focus-within{outline: 2px solid var(--ui-bsc-focus);outline-offset: 1px}.ui-bsc__select svg{color: var(--ui-bsc-icon);transition: transform 220ms var(--ui-bsc-ease)}.ui-bsc__select[aria-expanded="true"] svg{transform: rotate(180deg)}.ui-bsc__select--accent{background: var(--ui-bsc-pick);box-shadow: inset 0 0 0 0.5px var(--ui-bsc-pick-edge)}.ui-bsc__dd{position: relative}.ui-bsc__menu{position: absolute;top: calc(100% + 6px);left: 0;right: 0;z-index: 5;display: grid;gap: 1px;min-width: 220px;padding: 4px;border-radius: 10px;background: var(--ui-bsc-card);box-shadow: var(--ui-bsc-shadow-pop);animation: ui-bsc-menu 200ms var(--ui-bsc-ease) both;transform-origin: top}.ui-bsc__menu[data-up]{top: auto;bottom: calc(100% + 6px);right: auto;transform-origin: bottom left}.ui-bsc__menu button{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-height: 28px;padding: 4px 8px;border-radius: 6px;text-align: left;color: var(--ui-bsc-ink);transition: background-color 90ms ease-out}.ui-bsc__menu button:hover{background: var(--ui-bsc-fill)}.ui-bsc__menu button svg{color: var(--ui-bsc-accent)}.ui-bsc__menu small{display: block;font-size: 12px;line-height: 16px;color: var(--ui-bsc-muted)}.ui-bsc__table{border-top: 0.5px solid var(--ui-bsc-line)}.ui-bsc__row{display: grid;grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr) 216px;align-items: center;gap: 12px;min-height: 48px;padding: 6px 10px 6px 14px;border-bottom: 0.5px solid var(--ui-bsc-line);transition: background-color 120ms ease;animation: ui-bsc-row 320ms var(--ui-bsc-ease) both}.ui-bsc__rows-outer .ui-bsc__row:hover{background: var(--ui-bsc-wash)}.ui-bsc__row--head{min-height: 32px;padding-top: 8px;padding-bottom: 8px;font-size: 10px;line-height: 16px;font-weight: 500;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-bsc-muted);animation: none}.ui-bsc__right{text-align: right;padding-right: 36px}.ui-bsc__rows-outer{overflow: hidden}.ui-bsc__rows-outer[data-smooth]{transition: height 320ms var(--ui-bsc-ease)}.ui-bsc__empty{margin: 0;padding: 14px;border-bottom: 0.5px solid var(--ui-bsc-line);color: var(--ui-bsc-muted)}.ui-bsc__name{display: flex;align-items: center;gap: 8px;min-width: 0;font-weight: 500;color: var(--ui-bsc-ink)}.ui-bsc__name-text{min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-bsc__tag{display: grid;place-items: center;width: 20px;height: 20px;flex: none;border-radius: 5px;background: var(--ui-bsc-fill);color: var(--ui-bsc-icon)}.ui-bsc__tag svg{width: 14px;height: 14px}.ui-bsc__muted{font-size: 12px;line-height: 16px;color: var(--ui-bsc-muted);white-space: nowrap}.ui-bsc__repeat{position: relative;display: inline-flex;align-items: center;gap: 4px;color: var(--ui-bsc-icon)}.ui-bsc__repeat select{color: var(--ui-bsc-text)}.ui-bsc__repeat select, .ui-bsc__timing{height: 24px;padding: 0 6px;border-radius: 6px;appearance: none;cursor: pointer;transition: background-color 120ms ease, color 120ms ease}.ui-bsc__repeat select:hover, .ui-bsc__timing:hover{background: var(--ui-bsc-fill);color: var(--ui-bsc-ink)}.ui-bsc__timing{height: 20px;margin: 0 30px 0 0;padding: 0 4px;font-size: 12px;line-height: 16px;color: var(--ui-bsc-muted);text-align: right}.ui-bsc__price{display: grid;justify-items: end;min-width: 0}.ui-bsc__price-main{display: flex;align-items: center;gap: 4px;white-space: nowrap}.ui-bsc__num{display: inline-flex;align-items: center;font-weight: 500;color: var(--ui-bsc-ink);font-variant-numeric: tabular-nums}.ui-bsc__num input{height: 24px;padding: 0 1px;border-radius: 5px;outline: none;font-weight: 500;text-align: right;font-variant-numeric: tabular-nums;field-sizing: content;min-width: 2ch;transition: background-color 120ms ease, box-shadow 120ms ease}.ui-bsc__num input:hover{background: var(--ui-bsc-fill)}.ui-bsc__num input:focus{background: var(--ui-bsc-pick);box-shadow: inset 0 0 0 0.5px var(--ui-bsc-pick-edge)}.ui-bsc__remove{display: grid;place-items: center;width: 28px;height: 28px;margin-left: 2px;border-radius: 6px;color: var(--ui-bsc-icon);opacity: 0;transition: opacity 120ms ease, background-color 120ms ease, color 120ms ease}.ui-bsc__row:hover .ui-bsc__remove, .ui-bsc__remove:focus-visible{opacity: 1}.ui-bsc__remove:hover{background: var(--ui-bsc-wash);color: var(--ui-bsc-ink)}.ui-bsc__actions{display: flex;align-items: center;gap: 8px;padding: 10px 14px 12px}.ui-bsc__spacer{flex: 1}.ui-bsc__btn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;background: var(--ui-bsc-card);box-shadow: var(--ui-bsc-shadow);font-weight: 500;color: var(--ui-bsc-strong);white-space: nowrap;transition: box-shadow 140ms ease, opacity 200ms ease, transform 140ms ease}.ui-bsc__btn:hover:not(:disabled){box-shadow: var(--ui-bsc-shadow-hover)}.ui-bsc__btn:active:not(:disabled){transform: scale(0.97)}.ui-bsc__btn:disabled{opacity: 0.4;cursor: default}.ui-bsc__btn svg{color: var(--ui-bsc-icon)}.ui-bsc__select-label{display: inline-flex;align-items: center;gap: 6px;min-width: 0}.ui-bsc__totals{display: flex;align-items: center;justify-content: space-between;gap: 6px 16px;flex-wrap: wrap;padding: 10px 14px;border-top: 0.5px solid var(--ui-bsc-line)}.ui-bsc__total{display: inline-flex;align-items: baseline;gap: 8px;min-width: 0;white-space: nowrap}.ui-bsc__total-label{font-size: 12px;line-height: 16px;color: var(--ui-bsc-muted)}.ui-bsc__total b{font-size: 15px;line-height: 24px;font-weight: 500;color: var(--ui-bsc-strong);font-variant-numeric: tabular-nums}.ui-bsc__total em{align-self: center;padding: 2px 6px;border-radius: 5px;background: var(--ui-bsc-pick);font-size: 11px;line-height: 16px;font-style: normal;font-weight: 500;color: var(--ui-bsc-accent);animation: ui-bsc-fade 220ms ease both}@keyframes ui-bsc-fade{from{opacity: 0}}@keyframes ui-bsc-row{from{opacity: 0;transform: translateY(-4px)}}@keyframes ui-bsc-menu{from{opacity: 0;transform: scale(0.97) translateY(-4px)}}@container (max-width: 500px){.ui-bsc__fields{grid-template-columns: 1fr}.ui-bsc__summary{flex-wrap: wrap;row-gap: 0}.ui-bsc__row{grid-template-columns: minmax(0, 1fr);gap: 2px;padding: 10px 8px 10px 14px}.ui-bsc__row > :nth-child(2){display: none}.ui-bsc__row--head{display: none}.ui-bsc__price{justify-items: stretch}.ui-bsc__price-main{justify-content: flex-start}.ui-bsc__num{margin-left: -2px}.ui-bsc__timing{justify-self: start;margin: 0 0 0 -4px}.ui-bsc__remove{opacity: 1;margin-left: auto}.ui-bsc__actions{flex-wrap: wrap}.ui-bsc__spacer{display: none}.ui-bsc__totals{flex-direction: column;align-items: stretch}.ui-bsc__total{justify-content: space-between}.ui-bsc__total--phase .ui-bsc__total-label{margin-right: auto;order: -1}}@media (hover: none) and (pointer: coarse){.ui-bsc__input, .ui-bsc__select{height: 40px}.ui-bsc__btn{height: 36px;padding: 0 12px 0 10px}.ui-bsc__menu button{min-height: 40px}.ui-bsc__remove{width: 36px;height: 36px;opacity: 1}.ui-bsc__repeat select{height: 32px}.ui-bsc__num input{height: 32px}}@media (prefers-reduced-motion: reduce){.ui-bsc__rows-outer[data-smooth]{transition: none}.ui-bsc__row, .ui-bsc__menu, .ui-bsc__end, .ui-bsc__total em{animation: none}}.ui-bsc input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-bsc textarea:focus-visible, .ui-bsc [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-bsc{--ui-bsc-card: #1c1c1e;--ui-bsc-ink: rgba(255, 255, 255, 0.9);--ui-bsc-strong: #ffffff;--ui-bsc-text: rgba(255, 255, 255, 0.62);--ui-bsc-muted: rgba(255, 255, 255, 0.46);--ui-bsc-faint: rgba(255, 255, 255, 0.3);--ui-bsc-icon: rgba(255, 255, 255, 0.5);--ui-bsc-line: rgba(255, 255, 255, 0.08);--ui-bsc-wash: rgba(255, 255, 255, 0.04);--ui-bsc-fill: rgba(255, 255, 255, 0.08);--ui-bsc-accent: #4d8dff;--ui-bsc-pick: rgba(77, 141, 255, 0.14);--ui-bsc-pick-edge: rgba(77, 141, 255, 0.5);--ui-bsc-focus: rgba(77, 141, 255, 0.5);--ui-bsc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-bsc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.18), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-bsc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 12px 28px -10px rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-bsc__input input{color-scheme: dark}:where(.dark, [data-theme="dark"]) .ui-bsc select option{background: #1c1c1e;color: rgba(255, 255, 255, 0.9)}`;
function VComponent() {
  return /* @__PURE__ */ jsx("div", { className: `billing-schedule-demo`, children: /* @__PURE__ */ jsx(L1Component, {}) });
}

export {
  VComponent
};
