import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo.clean-DZiTLSj_.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate());
var a = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
var o = (e, t) => new Date(e.getFullYear(), e.getMonth() + t, 1);
var s = (e) => new Date(e.getFullYear(), e.getMonth(), 1);
var c = (e) => new Date(e.getFullYear(), e.getMonth() + 1, 0);
var l = (e, t) => !!e && !!t && e.getTime() === t.getTime();
var u = (e) => Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
var ee = (start, end) => Math.round((u(end) - u(start)) / 864e5) + 1;
var d = (e, t, n4) => {
  if (t && e < t) {
    return t;
  }
  if (n4 && e > n4) {
    return n4;
  }
  return e;
};
var f = (start, t) => {
  if (start <= t) {
    return {
      start,
      end: t
    };
  }
  return {
    start: t,
    end: start
  };
};
var p = new Intl.DateTimeFormat(`en-US`, {
  month: `short`,
  day: `numeric`
});
var m = new Intl.DateTimeFormat(`en-US`, {
  month: `short`,
  day: `numeric`,
  year: `numeric`
});
var te = new Intl.DateTimeFormat(`en-US`, {
  month: `long`,
  year: `numeric`
});
var ne = new Intl.DateTimeFormat(`en-US`, {
  weekday: `long`,
  month: `long`,
  day: `numeric`,
  year: `numeric`
});
function h({
  start,
  end
}) {
  if (l(start, end)) {
    return m.format(start);
  }
  return `${(start.getFullYear() === end.getFullYear() ? p : m).format(start)} \u2013 ${m.format(end)}`;
}
function g(e, t) {
  if (t === `previous`) {
    let t2 = ee(e.start, e.end);
    return {
      start: a(e.start, -t2),
      end: a(e.start, -1)
    };
  }
  if (t === `year`) {
    let t2 = (e2) => new Date(e2.getFullYear() - 1, e2.getMonth(), e2.getDate());
    return {
      start: t2(e.start),
      end: t2(e.end)
    };
  }
  return null;
}
var _ = (e) => new Date(e.getFullYear(), Math.floor(e.getMonth() / 3) * 3, 1);
var re = [{
  id: `today`,
  label: `Today`,
  range: (e) => ({
    start: e,
    end: e
  })
}, {
  id: `yesterday`,
  label: `Yesterday`,
  range: (e) => ({
    start: a(e, -1),
    end: a(e, -1)
  })
}, {
  id: `7d`,
  label: `Last 7 days`,
  range: (e) => ({
    start: a(e, -6),
    end: e
  })
}, {
  id: `30d`,
  label: `Last 30 days`,
  range: (e) => ({
    start: a(e, -29),
    end: e
  })
}, {
  id: `90d`,
  label: `Last 90 days`,
  range: (e) => ({
    start: a(e, -89),
    end: e
  })
}, {
  id: `month`,
  label: `This month`,
  range: (e) => ({
    start: s(e),
    end: e
  })
}, {
  id: `last-month`,
  label: `Last month`,
  range: (e) => ({
    start: o(e, -1),
    end: c(o(e, -1))
  })
}, {
  id: `quarter`,
  label: `This quarter`,
  range: (e) => ({
    start: _(e),
    end: e
  })
}, {
  id: `ytd`,
  label: `Year to date`,
  range: (e) => ({
    start: new Date(e.getFullYear(), 0, 1),
    end: e
  })
}];
var ie = [{
  id: `off`,
  label: `Off`
}, {
  id: `previous`,
  label: `Previous period`
}, {
  id: `year`,
  label: `Previous year`
}];
var V1Component = ({
  d: d2,
  className
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: [`ui-drpc__glyph`, className].filter(Boolean).join(` `), "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: d2 }) });
var y = {
  calendar: `M7 3v3M17 3v3M4.5 9.5h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z`,
  chevron: `M8 10l4 4 4-4`,
  left: `M14.5 6l-6 6 6 6`,
  right: `M9.5 6l6 6-6 6`,
  arrow: `M5 12h14M13 6l6 6-6 6`
};
function ae(e, weekStartsOn) {
  let n4 = (s(e).getDay() - weekStartsOn + 7) % 7;
  let r2 = c(e).getDate();
  let i2 = [];
  for (let e2 = 0; e2 < n4; e2++) {
    i2.push(null);
  }
  for (let t = 1; t <= r2; t++) {
    i2.push(new Date(e.getFullYear(), e.getMonth(), t));
  }
  while (i2.length % 7) {
    i2.push(null);
  }
  let a2 = [];
  for (let e2 = 0; e2 < i2.length; e2 += 7) {
    a2.push(i2.slice(e2, e2 + 7));
  }
  return a2;
}
function B1Component({
  value,
  defaultValue,
  onChange,
  presets = re,
  compare = true,
  defaultCompare = `previous`,
  weekStartsOn = 1,
  max,
  min,
  defaultOpen = false,
  today,
  className
}) {
  let S = n3.useMemo(() => i(today ?? /* @__PURE__ */ new Date()), [today?.getTime()]);
  let C = max ? i(max) : S;
  let w = min ? i(min) : void 0;
  let [de, setDe] = n3.useState(() => defaultValue ?? {
    start: a(S, -29),
    end: S
  });
  let T = value ?? de;
  let [E, setE] = n3.useState(compare ? defaultCompare : `off`);
  let [D, setD] = n3.useState(defaultOpen);
  let [k, setK] = n3.useState(T);
  let [j, setJ] = n3.useState(null);
  let [N, setN] = n3.useState(E);
  let [F, setF] = n3.useState(() => o(T.end, -1));
  let [me, setMe] = n3.useState(1);
  let [R, setR] = n3.useState(T.end);
  let BRef = n3.useRef(null);
  let VRef = n3.useRef(null);
  let HRef = n3.useRef(null);
  let URef = n3.useRef(null);
  let WRef = n3.useRef(false);
  let he = n3.useId();
  let geRef = n3.useRef(null);
  let _eRef = n3.useRef(null);
  let veRef = n3.useRef(null);
  let GRef = n3.useRef(null);
  let ye = () => {
    setK(T);
    setN(E);
    setF(o(T.end, -1));
    setR(T.end);
    setJ(null);
    setD(true);
  };
  let K = (e = true) => {
    setD(false);
    if (e) {
      URef.current?.focus();
    }
  };
  n3.useEffect(() => {
    if (!D) {
      return;
    }
    let e = (e2) => {
      if (BRef.current && !BRef.current.contains(e2.target)) {
        setD(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [D]);
  n3.useLayoutEffect(() => {
    if (D && WRef.current) {
      HRef.current?.querySelector(`[data-day="${R.getTime()}"]`)?.focus();
    }
  }, [R, F, D]);
  let q = k.end ? f(k.start, k.end) : j ? f(k.start, j) : null;
  let J = q ?? {
    start: k.start,
    end: k.start
  };
  let Y = compare && q ? g(q, N) : null;
  let X = k.end ? presets.find((e) => {
    let t = e.range(S);
    return l(i(t.start), J.start) && l(i(t.end), J.end);
  }) : void 0;
  let be = (start) => {
    if (k.end) {
      setK({
        start,
        end: null
      });
    } else {
      let t = f(k.start, start);
      setK(t);
    }
    setJ(null);
    setR(start);
  };
  let xe = (e) => {
    let t = e.range(S);
    let n4 = {
      start: d(i(t.start), w, C),
      end: d(i(t.end), w, C)
    };
    setK(n4);
    setJ(null);
    setR(n4.end);
    let r2 = o(n4.end, -1);
    if (r2.getTime() !== F.getTime()) {
      setMe(r2 > F ? 1 : -1);
      setF(r2);
    }
  };
  let Z = (e) => {
    setMe(e > 0 ? 1 : -1);
    setF((t) => o(t, e));
  };
  let onClick = () => {
    let t = k.end ? f(k.start, k.end) : {
      start: k.start,
      end: k.start
    };
    if (!value) {
      setDe(t);
    }
    setE(N);
    onChange?.(t, compare ? g(t, N) : null, N);
    K();
  };
  let Ce = (e) => e > C || !!w && e < w;
  let onKeyDown = (e) => {
    let t = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -7,
      ArrowDown: 7
    };
    let n4 = null;
    if (e.key in t) {
      n4 = a(R, t[e.key]);
    } else if (e.key === `PageUp`) {
      n4 = new Date(R.getFullYear(), R.getMonth() - 1, Math.min(R.getDate(), 28));
    } else if (e.key === `PageDown`) {
      n4 = new Date(R.getFullYear(), R.getMonth() + 1, Math.min(R.getDate(), 28));
    } else if (e.key === `Home`) {
      n4 = a(R, -((R.getDay() - weekStartsOn + 7) % 7));
    } else if (e.key === `End`) {
      n4 = a(R, 6 - (R.getDay() - weekStartsOn + 7) % 7);
    }
    if (!n4) {
      return;
    }
    e.preventDefault();
    WRef.current = true;
    n4 = d(n4, w, C);
    setR(n4);
    if (!k.end) {
      setJ(n4);
    }
    let r2 = c(o(F, 1));
    if (n4 < F) {
      Z(-1);
    } else if (n4 > r2) {
      Z(1);
    }
  };
  let Te = Array.from({
    length: 7
  }, (e, t) => new Intl.DateTimeFormat(`en-US`, {
    weekday: `short`
  }).format(new Date(2026, 0, 4 + weekStartsOn + t)).slice(0, 2));
  let Ee = [F, o(F, 1)];
  let length = Math.max(...Ee.map((e) => ae(e, weekStartsOn).length));
  let Q = ee(J.start, J.end);
  let Oe = (e, t) => !!t && e >= t.start && e <= t.end;
  if (Y) {
    GRef.current = Y;
  }
  let $RefRef = n3.useRef(false);
  n3.useEffect(() => {
    if (!D) {
      $RefRef.current = false;
      return;
    }
    let veRef_current = veRef.current;
    let t = veRef_current?.querySelector(`[aria-selected="true"]`);
    if (!veRef_current || !t || veRef_current.scrollWidth <= veRef_current.clientWidth) {
      return;
    }
    let left = Math.max(0, t.offsetLeft - (veRef_current.clientWidth - t.offsetWidth) / 2);
    veRef_current.scrollTo({
      left,
      behavior: $RefRef.current ? `smooth` : `auto`
    });
    $RefRef.current = true;
  }, [D, X?.id]);
  n3.useLayoutEffect(() => {
    let VRef_current = VRef.current;
    let geRef_current = geRef.current;
    if (!D || !VRef_current || !geRef_current) {
      return;
    }
    let n4 = () => VRef_current.style.height = `${geRef_current.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(geRef_current);
    return () => r2.disconnect();
  }, [D]);
  n3.useLayoutEffect(() => {
    let URef_current = URef.current;
    let _eRef_current = _eRef.current;
    if (!URef_current || !_eRef_current) {
      return;
    }
    let n4 = () => URef_current.style.width = `${_eRef_current.offsetWidth + 16}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(_eRef_current);
    return () => r2.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { ref: BRef, className: [`ui-drpc`, className].filter(Boolean).join(` `), "data-open": D || void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-date-range-picker-clean`, precedence: `default`, children: oe }),
    /* @__PURE__ */ jsx("button", { ref: URef, type: `button`, className: `ui-drpc__trigger`, "aria-haspopup": `dialog`, "aria-expanded": D, "aria-controls": `${he}-panel`, onClick: () => {
      if (D) {
        return K();
      }
      return ye();
    }, children: /* @__PURE__ */ jsxs("span", { ref: _eRef, className: `ui-drpc__trigger-inner`, children: [
      /* @__PURE__ */ jsx(V1Component, { d: y.calendar }),
      /* @__PURE__ */ jsxs("span", { className: `ui-drpc__trigger-text`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-drpc__trigger-range`, children: h(T) }),
        compare && E !== `off` && /* @__PURE__ */ jsxs("span", { className: `ui-drpc__trigger-compare`, children: [
          `vs. `,
          h(g(T, E))
        ] })
      ] }, `${h(T)}-${E}`),
      /* @__PURE__ */ jsx(V1Component, { d: y.chevron, className: `ui-drpc__chevron` })
    ] }) }),
    D && /* @__PURE__ */ jsxs("div", { id: `${he}-panel`, role: `dialog`, "aria-label": `Choose a date range`, className: `ui-drpc__panel`, onKeyDown: (e) => {
      if (e.key === `Escape`) {
        e.stopPropagation();
        K();
      }
    }, children: [
      /* @__PURE__ */ jsx("div", { ref: VRef, className: `ui-drpc__clip`, children: /* @__PURE__ */ jsxs("div", { ref: geRef, className: `ui-drpc__body`, children: [
        /* @__PURE__ */ jsxs("div", { ref: veRef, className: `ui-drpc__presets`, role: `listbox`, "aria-label": `Presets`, children: [
          presets.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `option`, "aria-selected": X?.id === e.id, className: `ui-drpc__preset`, onClick: () => xe(e), children: e.label }, e.id)),
          /* @__PURE__ */ jsx("span", { className: `ui-drpc__preset ui-drpc__preset-custom`, "aria-hidden": !!X, "data-active": !X || void 0, children: `Custom` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-drpc__cal`, children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-drpc__nav`, children: [
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-drpc__icon-btn`, "aria-label": `Previous month`, onClick: () => Z(-1), children: /* @__PURE__ */ jsx(V1Component, { d: y.left }) }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-drpc__icon-btn`, "aria-label": `Next month`, onClick: () => Z(1), children: /* @__PURE__ */ jsx(V1Component, { d: y.right }) })
          ] }),
          /* @__PURE__ */ jsx("div", { ref: HRef, className: `ui-drpc__months`, "data-dir": me, onKeyDown, onPointerLeave: () => !k.end && setJ(null), onPointerDown: () => WRef.current = false, children: Ee.map((e, t) => /* @__PURE__ */ jsxs("div", { className: `ui-drpc__month`, "data-second": t === 1 || void 0, children: [
            /* @__PURE__ */ jsx("div", { className: `ui-drpc__month-name`, "aria-live": t === 0 ? `polite` : void 0, children: te.format(e) }),
            /* @__PURE__ */ jsxs("div", { role: `grid`, "aria-label": te.format(e), className: `ui-drpc__grid`, children: [
              /* @__PURE__ */ jsx("div", { role: `row`, className: `ui-drpc__weekdays`, children: Te.map((e2) => /* @__PURE__ */ jsx("span", { role: `columnheader`, className: `ui-drpc__weekday`, children: e2 }, e2)) }),
              Array.from({
                length
              }, (t2, n4) => ae(e, weekStartsOn)[n4] ?? Array(7).fill(null)).map((e2, key) => /* @__PURE__ */ jsx("div", { role: `row`, className: `ui-drpc__week`, children: e2.map((e3, t2) => {
                if (!e3) {
                  return /* @__PURE__ */ jsx("span", { className: `ui-drpc__day ui-drpc__day-empty`, role: `gridcell` }, t2);
                }
                let n4 = l(e3, J.start);
                let i2 = l(e3, J.end);
                let a2 = Oe(e3, q);
                let o2 = !a2 && Oe(e3, Y);
                let disabled = Ce(e3);
                return /* @__PURE__ */ jsx("span", { role: `gridcell`, "aria-selected": a2 || n4 || void 0, className: `ui-drpc__day`, "data-range": a2 || void 0, "data-start": n4 || void 0, "data-end": i2 || void 0, "data-preview": !k.end && a2 || void 0, "data-compare": o2 || void 0, "data-compare-start": Y && l(e3, Y.start) || void 0, "data-compare-end": Y && l(e3, Y.end) || void 0, "data-row-start": t2 === 0 || e3.getDate() === 1 || void 0, "data-row-end": t2 === 6 || l(e3, c(e3)) || void 0, children: /* @__PURE__ */ jsx("button", { type: `button`, "data-day": e3.getTime(), tabIndex: l(e3, R) ? 0 : -1, disabled, "aria-label": ne.format(e3), "aria-current": l(e3, S) ? `date` : void 0, onClick: () => be(e3), onPointerEnter: () => !k.end && setJ(e3), onFocus: () => setR(e3), children: e3.getDate() }) }, t2);
              }) }, key))
            ] })
          ] }, e.getTime())) }, F.getTime())
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: `ui-drpc__foot`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-drpc__summary`, children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-drpc__summary-range`, children: [
            /* @__PURE__ */ jsx("span", { children: k.end || j ? h(J) : `${m.format(k.start)} \u2013 pick an end` }, `${J.start.getTime()}-${J.end.getTime()}`),
            /* @__PURE__ */ jsxs("span", { className: `ui-drpc__count`, children: [
              Q,
              ` `,
              Q === 1 ? `day` : `days`
            ] }, Q)
          ] }),
          compare && /* @__PURE__ */ jsxs("div", { className: `ui-drpc__compare`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-drpc__compare-label`, children: `Compare` }),
            /* @__PURE__ */ jsx("div", { className: `ui-drpc__segments`, role: `radiogroup`, "aria-label": `Compare to`, children: ie.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "aria-checked": N === e.id, className: `ui-drpc__segment`, onClick: () => setN(e.id), children: e.label }, e.id)) })
          ] }),
          compare && /* @__PURE__ */ jsx("div", { className: `ui-drpc__fold`, "data-open": !!Y || void 0, children: /* @__PURE__ */ jsx("div", { children: GRef.current && /* @__PURE__ */ jsxs("div", { className: `ui-drpc__compare-range`, children: [
            `vs. `,
            h(GRef.current)
          ] }, `${GRef.current.start.getTime()}-${GRef.current.end.getTime()}`) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-drpc__buttons`, children: [
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-drpc__btn`, onClick: () => K(), children: `Cancel` }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-drpc__btn ui-drpc__btn-primary`, disabled: !k.end, onClick, children: `Apply` })
        ] })
      ] })
    ] })
  ] });
}
var oe = `.ui-drpc{--ui-drpc-card: #ffffff;--ui-drpc-ink: rgba(0, 0, 0, 0.88);--ui-drpc-strong: #000000;--ui-drpc-text: rgba(0, 0, 0, 0.61);--ui-drpc-muted: rgba(0, 0, 0, 0.45);--ui-drpc-faint: rgba(0, 0, 0, 0.27);--ui-drpc-icon: rgba(0, 0, 0, 0.447);--ui-drpc-line: rgba(0, 0, 0, 0.06);--ui-drpc-wash: rgba(0, 0, 0, 0.03);--ui-drpc-fill: rgba(0, 0, 0, 0.06);--ui-drpc-fill-strong: rgba(0, 0, 0, 0.1);--ui-drpc-chip: rgba(0, 0, 0, 0.88);--ui-drpc-chip-hover: rgba(0, 0, 0, 0.78);--ui-drpc-on-chip: #fcfcfc;--ui-drpc-band: rgba(0, 0, 0, 0.06);--ui-drpc-band-preview: rgba(0, 0, 0, 0.04);--ui-drpc-compare: rgba(0, 96, 226, 0.08);--ui-drpc-compare-edge: rgba(0, 96, 226, 0.4);--ui-drpc-accent: rgba(0, 96, 226, 0.765);--ui-drpc-today-on-chip: #6ea2ff;--ui-drpc-focus: rgba(0, 96, 226, 0.35);--ui-drpc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-drpc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-drpc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-drpc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-drpc-spring: cubic-bezier(0.34, 1.56, 0.64, 1);position: relative;display: inline-block;max-width: 100%;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-drpc-ink);-webkit-font-smoothing: antialiased}.ui-drpc *, .ui-drpc *::before, .ui-drpc *::after{box-sizing: border-box}:where(.ui-drpc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-drpc) svg{display: block;flex: none}.ui-drpc button:focus-visible{outline: 2px solid var(--ui-drpc-focus);outline-offset: 1px}.ui-drpc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.65;stroke-linecap: round;stroke-linejoin: round}.ui-drpc__trigger{display: inline-flex;align-items: center;overflow: hidden;max-width: 100%;height: 32px;padding: 0 8px;border-radius: 8px;background: var(--ui-drpc-card);box-shadow: var(--ui-drpc-shadow);text-align: left;transition: box-shadow 160ms ease, width 320ms var(--ui-drpc-ease)}.ui-drpc__trigger:hover{box-shadow: var(--ui-drpc-shadow-hover)}.ui-drpc__trigger-inner{display: inline-flex;flex: none;align-items: center;gap: 8px;max-width: calc(100vw - 56px);color: var(--ui-drpc-icon)}.ui-drpc__trigger-text{display: flex;align-items: baseline;gap: 6px;min-width: 0;white-space: nowrap;animation: ui-drpc-in 240ms var(--ui-drpc-ease) both}.ui-drpc__trigger-range{flex: 0 0 auto;max-width: 100%;overflow: hidden;color: var(--ui-drpc-ink);font-weight: 500;text-overflow: ellipsis}.ui-drpc__trigger-compare{flex: 0 1 auto;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-drpc-muted);text-overflow: ellipsis}.ui-drpc__chevron{transition: transform 260ms var(--ui-drpc-ease)}.ui-drpc[data-open] .ui-drpc__chevron{transform: rotate(180deg)}.ui-drpc__panel{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;container-type: inline-size;width: var(--ui-drpc-panel-width, min(652px, calc(100vw - 32px)));overflow: hidden;border-radius: 10px;background: var(--ui-drpc-card);box-shadow: var(--ui-drpc-shadow-pop);transform-origin: top left;animation: ui-drpc-open 240ms var(--ui-drpc-ease) both}.ui-drpc__clip{overflow: hidden;transition: height 320ms var(--ui-drpc-ease)}.ui-drpc__body{display: grid;grid-template-columns: 140px 1fr}.ui-drpc__presets{position: relative;display: flex;flex-direction: column;gap: 2px;padding: 4px;border-right: 0.5px solid var(--ui-drpc-line)}.ui-drpc__preset{display: flex;align-items: center;flex: none;height: 28px;padding: 0 10px;border-radius: 6px;text-align: left;white-space: nowrap;font-weight: 500;color: var(--ui-drpc-text);transition: background-color 120ms ease, color 120ms ease}button.ui-drpc__preset:hover:not([aria-selected="true"]){background: var(--ui-drpc-wash);color: var(--ui-drpc-ink)}.ui-drpc__preset[aria-selected="true"], .ui-drpc__preset-custom[data-active]{background: var(--ui-drpc-fill);color: var(--ui-drpc-ink)}.ui-drpc__preset-custom{margin-top: auto;color: var(--ui-drpc-faint);cursor: default}.ui-drpc__cal{position: relative;padding: 10px 12px 10px;overflow: hidden}.ui-drpc__nav{position: absolute;top: 10px;left: 12px;right: 12px;z-index: 1;display: flex;justify-content: space-between;pointer-events: none}.ui-drpc__nav > *{pointer-events: auto}.ui-drpc__icon-btn{display: grid;place-items: center;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-drpc-icon);transition: background-color 120ms ease, color 120ms ease}.ui-drpc__icon-btn:hover{background: var(--ui-drpc-wash);color: var(--ui-drpc-ink)}.ui-drpc__months{display: grid;grid-template-columns: repeat(2, auto);justify-content: center;gap: 24px;animation: ui-drpc-slide 320ms var(--ui-drpc-ease) both}.ui-drpc__months[data-dir="-1"]{animation-name: ui-drpc-slide-back}.ui-drpc__month-name{height: 28px;margin-bottom: 4px;font-weight: 500;line-height: 28px;text-align: center;color: var(--ui-drpc-strong)}.ui-drpc__grid{display: grid;gap: 2px}.ui-drpc__weekdays, .ui-drpc__week{display: grid;grid-template-columns: repeat(7, 32px)}.ui-drpc__weekday{height: 24px;font-size: 10px;font-weight: 500;line-height: 24px;letter-spacing: 0.5px;text-transform: uppercase;text-align: center;color: var(--ui-drpc-muted)}.ui-drpc__day{position: relative;display: grid;height: 32px}.ui-drpc__day::before{content: "";position: absolute;inset: 2px 0;transition: background-color 160ms ease, border-radius 220ms var(--ui-drpc-ease), left 220ms var(--ui-drpc-ease), right 220ms var(--ui-drpc-ease)}.ui-drpc__day[data-range]::before{background: var(--ui-drpc-band)}.ui-drpc__day[data-preview]::before{background: var(--ui-drpc-band-preview)}.ui-drpc__day[data-compare]::before{background: var(--ui-drpc-compare)}.ui-drpc__day[data-start]::before, .ui-drpc__day[data-compare-start]::before, .ui-drpc__day[data-row-start]::before{left: 2px;border-top-left-radius: 6px;border-bottom-left-radius: 6px}.ui-drpc__day[data-end]::before, .ui-drpc__day[data-compare-end]::before, .ui-drpc__day[data-row-end]::before{right: 2px;border-top-right-radius: 6px;border-bottom-right-radius: 6px}.ui-drpc__day button{position: relative;margin: 2px;border-radius: 6px;font-size: 13px;line-height: 20px;font-variant-numeric: tabular-nums;color: var(--ui-drpc-ink);transition: background-color 120ms ease, color 120ms ease, box-shadow 120ms ease, transform 160ms var(--ui-drpc-ease)}.ui-drpc__day button:hover:not(:disabled){background: var(--ui-drpc-fill)}.ui-drpc__day button:active:not(:disabled){transform: scale(0.94)}.ui-drpc__day button:disabled{color: var(--ui-drpc-faint);cursor: default}.ui-drpc__day button[aria-current="date"]{color: var(--ui-drpc-accent);font-weight: 500}.ui-drpc__day button[aria-current="date"]::after{content: "";position: absolute;left: 50%;bottom: 3px;width: 4px;height: 4px;margin-left: -2px;border-radius: 50%;background: var(--ui-drpc-accent)}.ui-drpc__day[data-start] button, .ui-drpc__day[data-end] button{background: var(--ui-drpc-chip) !important;color: var(--ui-drpc-on-chip);font-weight: 500;box-shadow: none !important;animation: ui-drpc-pick 380ms var(--ui-drpc-spring)}.ui-drpc__day[data-start] button[aria-current="date"]::after, .ui-drpc__day[data-end] button[aria-current="date"]::after{background: var(--ui-drpc-today-on-chip)}.ui-drpc__day[data-preview][data-end] button{animation: none}.ui-drpc__day[data-compare-start] button, .ui-drpc__day[data-compare-end] button{box-shadow: inset 0 0 0 0.5px var(--ui-drpc-compare-edge)}.ui-drpc__day-empty::before{display: none}.ui-drpc__foot{display: flex;align-items: flex-end;justify-content: space-between;gap: 12px;padding: 10px 10px 10px 14px;border-top: 0.5px solid var(--ui-drpc-line)}.ui-drpc__summary{display: grid;gap: 8px;min-width: 0}.ui-drpc__summary-range{display: flex;align-items: baseline;gap: 8px;min-width: 0;white-space: nowrap;color: var(--ui-drpc-strong);font-weight: 500}.ui-drpc__summary-range > span:first-child{min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-drpc-in 240ms var(--ui-drpc-ease) both}.ui-drpc__count{flex: none;font-size: 12px;line-height: 16px;font-weight: 400;font-variant-numeric: tabular-nums;color: var(--ui-drpc-muted);animation: ui-drpc-in 240ms var(--ui-drpc-ease) both}.ui-drpc__compare{display: flex;align-items: center;gap: 8px}.ui-drpc__compare-label{font-size: 12px;line-height: 16px;color: var(--ui-drpc-muted)}.ui-drpc__segments{display: inline-flex;flex-wrap: wrap;gap: 4px}.ui-drpc__segment{padding: 4px 10px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-drpc-line);font-weight: 500;white-space: nowrap;color: var(--ui-drpc-text);transition: background-color 120ms ease, color 120ms ease}.ui-drpc__segment:hover:not([aria-checked="true"]){background: var(--ui-drpc-wash);color: var(--ui-drpc-ink)}.ui-drpc__segment[aria-checked="true"]{background: var(--ui-drpc-fill);color: var(--ui-drpc-ink)}.ui-drpc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;margin-top: -8px;transition: grid-template-rows 300ms var(--ui-drpc-ease), opacity 200ms ease, margin-top 300ms var(--ui-drpc-ease)}.ui-drpc__fold[data-open]{grid-template-rows: 1fr;opacity: 1;margin-top: 0}.ui-drpc__fold > div{min-height: 0;overflow: hidden}.ui-drpc__compare-range{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-drpc-muted);animation: ui-drpc-in 220ms var(--ui-drpc-ease) both}.ui-drpc__compare-range::before{content: "";flex: none;width: 14px;height: 8px;border-radius: 3px;background: var(--ui-drpc-compare);box-shadow: inset 0 0 0 0.5px var(--ui-drpc-compare-edge)}.ui-drpc__buttons{display: flex;flex: none;gap: 8px}.ui-drpc__btn{display: inline-flex;align-items: center;height: 28px;padding: 0 10px;border-radius: 6px;background: var(--ui-drpc-card);box-shadow: var(--ui-drpc-shadow);font-weight: 500;color: var(--ui-drpc-strong);transition: background-color 140ms ease, box-shadow 140ms ease, opacity 140ms ease, transform 140ms ease}.ui-drpc__btn:not(.ui-drpc__btn-primary):hover{box-shadow: var(--ui-drpc-shadow-hover)}.ui-drpc__btn-primary{background: var(--ui-drpc-chip);box-shadow: none;color: var(--ui-drpc-on-chip)}.ui-drpc__btn-primary:hover:not(:disabled){background: var(--ui-drpc-chip-hover)}.ui-drpc__btn:active:not(:disabled){transform: scale(0.97)}.ui-drpc__btn-primary:disabled{opacity: 0.35;cursor: default}@keyframes ui-drpc-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-drpc-slide{from{opacity: 0;transform: translateX(14px)}to{opacity: 1;transform: none}}@keyframes ui-drpc-slide-back{from{opacity: 0;transform: translateX(-14px)}to{opacity: 1;transform: none}}@keyframes ui-drpc-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-drpc-pick{0%{transform: scale(0.82)}60%{transform: scale(1.06)}100%{transform: scale(1)}}@container (max-width: 600px){.ui-drpc__body{grid-template-columns: 1fr}.ui-drpc__presets{flex-direction: row;gap: 4px;padding: 8px;overflow-x: auto;border-right: 0;border-bottom: 0.5px solid var(--ui-drpc-line);scrollbar-width: none}.ui-drpc__presets::-webkit-scrollbar{display: none}.ui-drpc__preset{height: auto;padding: 4px 10px;box-shadow: inset 0 0 0 0.5px var(--ui-drpc-line)}.ui-drpc__preset-custom{display: none}.ui-drpc__months{grid-template-columns: 1fr;justify-items: center}.ui-drpc__month:not([data-second]){display: none}.ui-drpc__foot{flex-direction: column;align-items: stretch;padding: 10px 10px 10px 12px}.ui-drpc__buttons{justify-content: flex-end}.ui-drpc__compare{flex-wrap: wrap}}@container (max-width: 340px){.ui-drpc__weekdays, .ui-drpc__week{grid-template-columns: repeat(7, 1fr)}.ui-drpc__cal{padding: 10px 8px}.ui-drpc__nav{left: 8px;right: 8px}.ui-drpc__months{justify-items: stretch}}@media (hover: none) and (pointer: coarse){.ui-drpc__trigger{height: 40px}.ui-drpc__day{height: 40px}.ui-drpc__weekdays, .ui-drpc__week{grid-template-columns: repeat(7, minmax(0, 40px))}.ui-drpc__icon-btn{width: 36px;height: 36px}.ui-drpc__month-name{height: 36px;line-height: 36px}.ui-drpc__preset{height: 36px}.ui-drpc__btn{height: 36px;padding: 0 14px}.ui-drpc__segment{padding: 8px 12px}}@media (prefers-reduced-motion: reduce){.ui-drpc *, .ui-drpc *::before, .ui-drpc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-drpc{--ui-drpc-card: #1c1c1e;--ui-drpc-ink: rgba(255, 255, 255, 0.9);--ui-drpc-strong: #ffffff;--ui-drpc-text: rgba(255, 255, 255, 0.62);--ui-drpc-muted: rgba(255, 255, 255, 0.46);--ui-drpc-faint: rgba(255, 255, 255, 0.3);--ui-drpc-icon: rgba(255, 255, 255, 0.5);--ui-drpc-line: rgba(255, 255, 255, 0.08);--ui-drpc-wash: rgba(255, 255, 255, 0.04);--ui-drpc-fill: rgba(255, 255, 255, 0.08);--ui-drpc-fill-strong: rgba(255, 255, 255, 0.13);--ui-drpc-chip: rgba(255, 255, 255, 0.9);--ui-drpc-chip-hover: rgba(255, 255, 255, 0.8);--ui-drpc-on-chip: #111113;--ui-drpc-band: rgba(255, 255, 255, 0.08);--ui-drpc-band-preview: rgba(255, 255, 255, 0.05);--ui-drpc-compare: rgba(77, 141, 255, 0.14);--ui-drpc-compare-edge: rgba(77, 141, 255, 0.55);--ui-drpc-accent: #4d8dff;--ui-drpc-today-on-chip: #0060e2;--ui-drpc-focus: rgba(77, 141, 255, 0.5);--ui-drpc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-drpc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.18), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-drpc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 12px 28px -10px rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}`;
function XComponent() {
  return /* @__PURE__ */ jsx("div", { className: `drp-demo`, children: /* @__PURE__ */ jsx(B1Component, { defaultOpen: true, defaultCompare: `off` }) });
}

export {
  XComponent
};
