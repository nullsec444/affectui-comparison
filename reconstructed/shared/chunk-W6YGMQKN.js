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

// reconstructed/demo.clean-DhS0HlaW.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = `\0create`;
var easing = `cubic-bezier(0.22, 1, 0.36, 1)`;
var o = () => typeof window < `u` && window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
var s = (label) => {
  let t = label.trim().split(/\s+/);
  return ((t[0]?.[0] ?? ``) + (t.length > 1 ? t[t.length - 1][0] : ``)).toUpperCase();
};
function C1Component({
  text,
  query
}) {
  let n4 = query ? text.toLowerCase().indexOf(query.toLowerCase()) : -1;
  if (n4 < 0) {
    return /* @__PURE__ */ jsx(Fragment, { children: text });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    text.slice(0, n4),
    /* @__PURE__ */ jsx("mark", { children: text.slice(n4, n4 + query.length) }),
    text.slice(n4 + query.length)
  ] });
}
var l = 72;
function U1Component({
  option
}) {
  if (option.icon) {
    return /* @__PURE__ */ jsx("span", { className: `ui-cbxc__icon`, children: option.icon });
  }
  if (typeof option.avatar == `string`) {
    return /* @__PURE__ */ jsx("img", { className: `ui-cbxc__avatar`, src: option.avatar, alt: `` });
  }
  if (option.avatar) {
    return /* @__PURE__ */ jsx("span", { className: `ui-cbxc__avatar`, "aria-hidden": `true`, children: s(option.label) });
  }
  if (option.color) {
    return /* @__PURE__ */ jsx("span", { className: `ui-cbxc__dot`, style: {
      background: option.color
    }, "aria-hidden": `true` });
  }
  return null;
}
var D1Component = ({
  d,
  className
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: [`ui-cbxc__glyph`, className].filter(Boolean).join(` `), "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var f = {
  close: `M7 7l10 10M17 7 7 17`,
  check: `M5.5 12.5l4 4L18.5 8`,
  chevron: `M8 10l4 4 4-4`,
  plus: `M12 6v12M6 12h12`
};
function Ee1Component({
  animate,
  leaving,
  armed,
  plain,
  children
}) {
  let lRef = n3.useRef(null);
  n3.useLayoutEffect(() => {
    let lRef_current = lRef.current;
    if (animate && lRef_current && !o()) {
      lRef_current.animate([{
        gridTemplateColumns: `0fr`,
        marginRight: `0px`
      }, {
        gridTemplateColumns: `1fr`,
        marginRight: `4px`
      }], {
        duration: 260,
        easing
      });
      lRef_current.firstElementChild?.animate([{
        opacity: 0,
        transform: `scale(0.6)`
      }, {
        opacity: 1,
        transform: `scale(1.05)`,
        offset: 0.6
      }, {
        opacity: 1,
        transform: `none`
      }], {
        duration: 340,
        easing
      });
    }
  }, []);
  return /* @__PURE__ */ jsx("li", { ref: lRef, className: `ui-cbxc__chip`, "data-leaving": leaving || void 0, "data-armed": armed || void 0, "data-plain": plain || void 0, children });
}
function P1Component({
  options: options2,
  multiple = true,
  value,
  defaultValue,
  onChange,
  placeholder = `Search\u2026`,
  creatable = false,
  onCreate,
  createLabel = (e) => `Create \u201C${e}\u201D`,
  maxVisibleTags,
  label: label_1,
  defaultOpen = false,
  emptyText = `No results`,
  className
}) {
  let g = `ui-cbxc` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  let [ce, setCe] = n3.useState(defaultValue ?? []);
  let _ = value ?? ce;
  let [ue, setUe] = n3.useState([]);
  let [v, setV] = n3.useState(defaultOpen);
  let [b, setB] = n3.useState(``);
  let [S, setS] = n3.useState(null);
  let [fe, setFe] = n3.useState(true);
  let [T, setT] = n3.useState(null);
  let [pe, setPe] = n3.useState(``);
  let DRef = n3.useRef(null);
  let heRef = n3.useRef(null);
  let ORef = n3.useRef(null);
  let kRef = n3.useRef(null);
  let ARef = n3.useRef(null);
  let geRef = n3.useRef(null);
  let _eRef = n3.useRef(null);
  let jRef = n3.useRef(false);
  let M = n3.useMemo(() => [...options2, ...ue.filter((t) => !options2.some((e) => e.value === t.value))], [options2, ue]);
  let ve = n3.useMemo(() => new Map(M.map((e) => [e.value, e])), [M]);
  let N = (e) => ve.get(e) ?? {
    value: e,
    label: e
  };
  let P = b.trim();
  let F = P.toLowerCase();
  let I = n3.useMemo(() => {
    let e = [];
    for (let t of M) {
      if (F && !`${t.label} ${t.hint ?? ``} ${t.keywords ?? ``}`.toLowerCase().includes(F)) {
        continue;
      }
      let n4 = t.group ?? ``;
      let r2 = e.find((e2) => e2.name === n4);
      if (!r2) {
        e.push(r2 = {
          name: n4,
          options: []
        });
      }
      r2.options.push(t);
    }
    return e;
  }, [M, F]);
  let L = creatable && !!P && !M.some((e) => e.label.toLowerCase() === F);
  let R = [...I.flatMap((e) => e.options.map((e2) => e2.value)), ...L ? [i] : []];
  let z = S !== null && R.includes(S) ? S : R[0];
  let B = (e) => `${g}-o${R.indexOf(e)}`;
  let [V, setV_1] = n3.useState(() => _.map((value_1) => ({
    value: value_1
  })));
  let URef = n3.useRef(V);
  URef.current = V;
  let WRef = n3.useRef(/* @__PURE__ */ new Map());
  let GRef = n3.useRef(false);
  let ye = _.join(``);
  n3.useEffect(() => {
    let URef_current = URef.current;
    let t = false;
    let n4 = URef_current.map((e) => {
      let n5 = _.includes(e.value);
      if (n5 && e.leaving) {
        t = true;
        window.clearTimeout(WRef.current.get(e.value));
        WRef.current.delete(e.value);
        return {
          value: e.value
        };
      }
      if (!n5 && !e.leaving) {
        t = true;
        WRef.current.set(e.value, window.setTimeout(() => {
          WRef.current.delete(e.value);
          setV_1((t2) => t2.filter((t3) => !(t3.value === e.value && t3.leaving)));
        }, 420));
        return {
          value: e.value,
          leaving: true
        };
      }
      return e;
    });
    for (let e of _) {
      if (!n4.some((t2) => t2.value === e)) {
        n4.push({
          value: e
        });
        t = true;
      }
    }
    if (t) {
      setV_1(n4);
    }
  }, [ye]);
  n3.useEffect(() => {
    GRef.current = true;
    let WRef_current = WRef.current;
    return () => WRef_current.forEach((e) => window.clearTimeout(e));
  }, []);
  let KRef = n3.useRef(null);
  let [be, setBe] = n3.useState(Infinity);
  let Se = V.filter((e) => !e.leaving).map((e) => e.value).join(`|`);
  n3.useLayoutEffect(() => {
    let ORef_current = ORef.current;
    let KRef_current = KRef.current;
    if (!ORef_current || !KRef_current) {
      return;
    }
    let n4 = () => {
      let n5 = [...KRef_current.children].map((e) => e.offsetWidth + 4);
      let r3 = n5.pop() ?? 0;
      let i2 = getComputedStyle(ORef_current);
      let a = ORef_current.clientWidth - parseFloat(i2.paddingLeft) - parseFloat(i2.paddingRight) - l;
      let o2 = 0;
      let s2 = 0;
      for (; s2 < n5.length; s2++) {
        let e = s2 + 1 < n5.length ? r3 : 0;
        if (o2 + n5[s2] + e > a) {
          break;
        }
        o2 += n5[s2];
      }
      setBe(s2);
    };
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(ORef_current);
    return () => r2.disconnect();
  }, [Se]);
  let q = Math.min(maxVisibleTags ?? Infinity, be);
  let Ce = 0;
  let we = V.filter((e) => {
    if (e.leaving) {
      return Ce < q;
    }
    return Ce++ < q;
  });
  let J = Math.max(0, V.filter((e) => !e.leaving).length - q);
  let YRef = n3.useRef(J);
  let TeRef = n3.useRef(`up`);
  if (J !== YRef.current && J > 0) {
    TeRef.current = J > YRef.current ? `up` : `down`;
  }
  if (J > 0) {
    YRef.current = J;
  }
  let Ee = J || YRef.current;
  let De = !!T && J > 0 && !we.some((e) => e.value === T);
  let XRef = n3.useRef(_.length);
  let OeRef = n3.useRef(`up`);
  if (_.length !== XRef.current) {
    OeRef.current = _.length > XRef.current ? `up` : `down`;
    XRef.current = _.length;
  }
  let ke = (e, t) => {
    if (value === void 0) {
      setCe(e);
    }
    onChange?.(e, e.map((e2) => {
      if (t?.value === e2) {
        return t;
      }
      return N(e2);
    }));
  };
  let Z = (e, n4) => setPe(multiple ? `${e}. ${n4} selected` : e);
  let Q = (e) => {
    let n4 = _.includes(e.value);
    let r2 = multiple ? n4 ? _.filter((t) => t !== e.value) : [..._, e.value] : [e.value];
    ke(r2, e);
    Z(`${e.label} ${n4 && multiple ? `removed` : `selected`}`, r2.length);
    setT(null);
    if (b) {
      setB(``);
    }
    if (!multiple) {
      setV(false);
    }
  };
  let onClick = () => {
    let e = onCreate?.(P) || {
      value: P,
      label: P
    };
    setUe((t) => [...t.filter((t2) => t2.value !== e.value), e]);
    setS(e.value);
    Q(e);
  };
  let je = (e) => {
    let t = _.filter((t2) => t2 !== e);
    ke(t);
    Z(`${N(e).label} removed`, t.length);
    setT(null);
  };
  let Me = (e) => {
    if (e === i) {
      onClick();
    } else {
      Q(N(e));
    }
  };
  n3.useLayoutEffect(() => {
    let heRef_current = heRef.current;
    let ORef_current = ORef.current;
    if (!heRef_current || !ORef_current) {
      return;
    }
    let n4 = () => heRef_current.style.height = `${ORef_current.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(ORef_current);
    return () => r2.disconnect();
  }, []);
  n3.useLayoutEffect(() => {
    let ARef_current = ARef.current;
    let geRef_current = geRef.current;
    if (!v || !ARef_current || !geRef_current) {
      return;
    }
    let n4 = () => {
      let n5 = getComputedStyle(ARef_current);
      let r3 = parseFloat(n5.paddingTop) + parseFloat(n5.paddingBottom);
      let i2 = parseFloat(n5.maxHeight) || Infinity;
      ARef_current.style.height = `${Math.min(geRef_current.offsetHeight + r3, i2)}px`;
    };
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(geRef_current);
    return () => r2.disconnect();
  }, [v]);
  n3.useLayoutEffect(() => {
    let ARef_current = ARef.current;
    let _eRef_current = _eRef.current;
    if (!v || !ARef_current || !_eRef_current) {
      return;
    }
    let n4 = ARef_current.querySelector(`[data-active]`);
    if (!n4) {
      _eRef_current.style.opacity = `0`;
      return;
    }
    let r2 = !_eRef_current.dataset.ready;
    if (r2) {
      _eRef_current.style.transition = `none`;
    }
    _eRef_current.style.opacity = fe ? `1` : `0`;
    _eRef_current.style.height = `${n4.offsetHeight}px`;
    _eRef_current.style.transform = `translateY(${n4.offsetTop}px)`;
    if (r2) {
      _eRef_current.dataset.ready = `1`;
      _eRef_current.offsetWidth;
      _eRef_current.style.transition = ``;
    }
    if (!jRef.current) {
      return;
    }
    jRef.current = false;
    let n_previousElementSibling = n4.previousElementSibling;
    let a = n_previousElementSibling?.classList.contains(`ui-cbxc__group-label`) ? n_previousElementSibling.offsetHeight : 0;
    let o2 = n4.offsetTop - 6 - a;
    let s2 = n4.offsetTop + n4.offsetHeight + 6;
    if (o2 < ARef_current.scrollTop) {
      ARef_current.scrollTop = o2;
    } else if (s2 > ARef_current.scrollTop + ARef_current.clientHeight) {
      ARef_current.scrollTop = s2 - ARef_current.clientHeight;
    }
  });
  n3.useEffect(() => {
    if (!v) {
      return;
    }
    let e = (e2) => {
      if (DRef.current && !DRef.current.contains(e2.target)) {
        setV(false);
        setT(null);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [v]);
  let Ne = (e) => {
    if (!R.length) {
      return;
    }
    jRef.current = true;
    setFe(true);
    let t = Math.max(0, R.indexOf(z));
    setS(R[(t + e + R.length) % R.length]);
  };
  let onKeyDown = (e) => {
    if (e.key !== `Backspace`) {
      setT(null);
    }
    if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
      e.preventDefault();
      if (!v) {
        setV(true);
        return;
      }
      Ne(e.key === `ArrowDown` ? 1 : -1);
    } else if (e.key === `Enter`) {
      if (!v || !z) {
        return;
      }
      e.preventDefault();
      Me(z);
    } else if (e.key === `Escape`) {
      if (v) {
        e.preventDefault();
        e.stopPropagation();
        setV(false);
      } else if (b) {
        setB(``);
      }
    } else if (e.key === `Tab`) {
      setV(false);
    } else if (e.key === `Backspace` && !b && _.length) {
      e.preventDefault();
      let t = _[_.length - 1];
      if (T === t) {
        je(t);
      } else {
        setT(t);
        setPe(`${N(t).label} \u2013 press Backspace again to remove`);
      }
    }
  };
  let Fe = (e) => {
    if (!e.target.closest(`button`)) {
      if (e.target !== kRef.current) {
        e.preventDefault();
      }
      kRef.current?.focus();
      setT(null);
      setV(true);
    }
  };
  let onBlur = (e) => {
    if (!DRef.current?.contains(e.relatedTarget)) {
      setV(false);
      setT(null);
    }
  };
  let $ = (e) => e.preventDefault();
  return /* @__PURE__ */ jsxs("div", { ref: DRef, className: [`ui-cbxc`, className].filter(Boolean).join(` `), "data-open": v || void 0, onBlur, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-combobox-clean`, precedence: `default`, children: te }),
    label_1 && /* @__PURE__ */ jsx("label", { className: `ui-cbxc__label`, id: `${g}-label`, htmlFor: `${g}-input`, children: label_1 }),
    /* @__PURE__ */ jsxs("div", { ref: heRef, className: `ui-cbxc__field`, onMouseDown: Fe, children: [
      /* @__PURE__ */ jsxs("div", { ref: ORef, className: `ui-cbxc__field-inner`, children: [
        /* @__PURE__ */ jsxs("ul", { ref: KRef, className: `ui-cbxc__measure`, "aria-hidden": `true`, children: [
          V.filter((e) => !e.leaving).map((e) => {
            let t = N(e.value);
            let n4 = !t.icon && !t.avatar && !t.color;
            return /* @__PURE__ */ jsx("li", { className: `ui-cbxc__chip`, "data-plain": n4 || void 0, children: /* @__PURE__ */ jsxs("span", { className: `ui-cbxc__chip-body`, children: [
              /* @__PURE__ */ jsx(U1Component, { option: t }),
              /* @__PURE__ */ jsx("span", { className: `ui-cbxc__chip-label`, children: t.label }),
              /* @__PURE__ */ jsx("span", { className: `ui-cbxc__chip-x` })
            ] }) }, e.value);
          }),
          /* @__PURE__ */ jsx("li", { className: `ui-cbxc__chip ui-cbxc__more`, children: /* @__PURE__ */ jsx("span", { className: `ui-cbxc__chip-body`, children: `+99` }) })
        ] }),
        V.length > 0 && /* @__PURE__ */ jsxs("ul", { className: `ui-cbxc__chips`, role: `list`, "aria-label": `Selected`, children: [
          we.map((e) => {
            let t = N(e.value);
            let plain = !t.icon && !t.avatar && !t.color;
            return /* @__PURE__ */ jsx(Ee1Component, { animate: GRef.current, leaving: e.leaving, armed: T === e.value, plain, children: /* @__PURE__ */ jsxs("span", { className: `ui-cbxc__chip-body`, children: [
              /* @__PURE__ */ jsx(U1Component, { option: t }),
              /* @__PURE__ */ jsx("span", { className: `ui-cbxc__chip-label`, children: t.label }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cbxc__chip-x`, tabIndex: -1, "aria-label": `Remove ${t.label}`, onMouseDown: $, onClick: () => je(e.value), children: /* @__PURE__ */ jsx(D1Component, { d: f.close }) })
            ] }) }, e.value);
          }),
          /* @__PURE__ */ jsx("li", { className: `ui-cbxc__chip ui-cbxc__more`, "data-hidden": !J || void 0, "data-armed": De || void 0, "aria-hidden": !J || void 0, children: /* @__PURE__ */ jsxs("span", { className: `ui-cbxc__chip-body`, children: [
            `+`,
            /* @__PURE__ */ jsx("span", { className: `ui-cbxc__roll`, children: /* @__PURE__ */ jsx("span", { "data-dir": TeRef.current, children: Ee }, Ee) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("input", { ref: kRef, id: `${g}-input`, className: `ui-cbxc__input`, value: b, placeholder: _.length ? void 0 : placeholder, autoComplete: `off`, spellCheck: false, role: `combobox`, "aria-expanded": v, "aria-controls": `${g}-list`, "aria-autocomplete": `list`, "aria-activedescendant": v && z ? B(z) : void 0, "aria-label": label_1 ? void 0 : placeholder, onChange: (e) => {
          setB(e.target.value);
          setS(null);
          setT(null);
          setV(true);
        }, onKeyDown })
      ] }),
      /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cbxc__toggle`, tabIndex: -1, "aria-label": v ? `Close list` : `Open list`, onMouseDown: $, onClick: () => {
        kRef.current?.focus();
        setV((e) => !e);
      }, children: /* @__PURE__ */ jsx(D1Component, { d: f.chevron }) })
    ] }),
    v && /* @__PURE__ */ jsxs("div", { className: `ui-cbxc__pop`, onMouseDown: $, children: [
      /* @__PURE__ */ jsxs("div", { ref: ARef, id: `${g}-list`, className: `ui-cbxc__list`, role: `listbox`, "aria-multiselectable": multiple || void 0, "aria-labelledby": label_1 ? `${g}-label` : void 0, "aria-label": label_1 ? void 0 : `Options`, onMouseLeave: () => setFe(false), children: [
        /* @__PURE__ */ jsx("span", { ref: _eRef, className: `ui-cbxc__pill`, "aria-hidden": `true` }),
        /* @__PURE__ */ jsxs("div", { ref: geRef, className: `ui-cbxc__list-inner`, children: [
          I.map((e, t) => /* @__PURE__ */ jsxs("div", { role: `group`, "aria-labelledby": e.name ? `${g}-g${t}` : void 0, className: `ui-cbxc__group`, children: [
            e.name && /* @__PURE__ */ jsx("div", { className: `ui-cbxc__group-label`, id: `${g}-g${t}`, children: e.name }),
            e.options.map((e2) => {
              let t2 = _.includes(e2.value);
              return /* @__PURE__ */ jsxs("div", { id: B(e2.value), role: `option`, "aria-selected": t2, "data-active": z === e2.value || void 0, className: `ui-cbxc__option`, onMouseDown: $, onMouseMove: () => {
                setFe(true);
                if (z !== e2.value) {
                  setS(e2.value);
                }
              }, onClick: () => {
                setS(e2.value);
                Q(e2);
              }, children: [
                /* @__PURE__ */ jsx(U1Component, { option: e2 }),
                /* @__PURE__ */ jsxs("span", { className: `ui-cbxc__text`, children: [
                  /* @__PURE__ */ jsx("span", { className: `ui-cbxc__name`, children: /* @__PURE__ */ jsx(C1Component, { text: e2.label, query: P }) }),
                  e2.hint && /* @__PURE__ */ jsx("span", { className: `ui-cbxc__hint`, children: /* @__PURE__ */ jsx(C1Component, { text: e2.hint, query: P }) })
                ] }),
                /* @__PURE__ */ jsx(D1Component, { d: f.check, className: `ui-cbxc__check` })
              ] }, e2.value);
            })
          ] }, e.name || `_`)),
          !I.length && /* @__PURE__ */ jsxs("div", { className: `ui-cbxc__empty`, children: [
            emptyText,
            P && /* @__PURE__ */ jsxs(Fragment, { children: [
              ` for \u201C`,
              P,
              `\u201D`
            ] })
          ] }, P),
          L && /* @__PURE__ */ jsxs("div", { id: B(i), role: `option`, "aria-selected": false, "data-active": z === i || void 0, className: `ui-cbxc__option ui-cbxc__create`, onMouseDown: $, onMouseMove: () => {
            setFe(true);
            if (z !== i) {
              setS(i);
            }
          }, onClick, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-cbxc__plus`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(D1Component, { d: f.plus }) }),
            /* @__PURE__ */ jsx("span", { className: `ui-cbxc__name`, children: createLabel(P) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-cbxc__foot`, "aria-hidden": `true`, children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-cbxc__count`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-cbxc__roll`, children: /* @__PURE__ */ jsx("span", { "data-dir": OeRef.current, children: _.length }, _.length) }),
          (multiple || _.length, `\xA0selected`)
        ] }),
        /* @__PURE__ */ jsxs("span", { className: `ui-cbxc__keys`, children: [
          /* @__PURE__ */ jsx("kbd", { children: `\u2191` }),
          /* @__PURE__ */ jsx("kbd", { children: `\u2193` }),
          /* @__PURE__ */ jsx("span", { children: `to move` }),
          /* @__PURE__ */ jsx("kbd", { children: `\u21B5` }),
          /* @__PURE__ */ jsxs("span", { children: [
            `to `,
            multiple ? `toggle` : `pick`
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-cbxc__live`, "aria-live": `polite`, children: pe })
  ] });
}
var te = `.ui-cbxc{--ui-cbxc-card: #ffffff;--ui-cbxc-ink: rgba(0, 0, 0, 0.88);--ui-cbxc-strong: #000000;--ui-cbxc-text: rgba(0, 0, 0, 0.61);--ui-cbxc-muted: rgba(0, 0, 0, 0.45);--ui-cbxc-faint: rgba(0, 0, 0, 0.27);--ui-cbxc-icon: rgba(0, 0, 0, 0.447);--ui-cbxc-line: rgba(0, 0, 0, 0.06);--ui-cbxc-fill: rgba(0, 0, 0, 0.06);--ui-cbxc-fill-strong: rgba(0, 0, 0, 0.1);--ui-cbxc-wash: rgba(0, 0, 0, 0.03);--ui-cbxc-flash: rgba(0, 0, 0, 0.14);--ui-cbxc-avatar: rgba(0, 0, 0, 0.06);--ui-cbxc-mark: rgba(0, 96, 226, 0.12);--ui-cbxc-accent: rgba(0, 96, 226, 0.765);--ui-cbxc-focus: rgba(0, 96, 226, 0.35);--ui-cbxc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cbxc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cbxc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cbxc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-cbxc-spring: cubic-bezier(0.34, 1.56, 0.64, 1);position: relative;display: block;width: 100%;max-width: 440px;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-cbxc-ink);-webkit-font-smoothing: antialiased}.ui-cbxc *, .ui-cbxc *::before, .ui-cbxc *::after{box-sizing: border-box}:where(.ui-cbxc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cbxc) svg{display: block;flex: none}.ui-cbxc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.65;stroke-linecap: round;stroke-linejoin: round}.ui-cbxc__label{display: block;margin: 0 0 6px 2px;font-size: 12px;line-height: 16px;font-weight: 500;color: var(--ui-cbxc-text)}.ui-cbxc__field{position: relative;overflow: hidden;border-radius: 8px;background: var(--ui-cbxc-card);box-shadow: var(--ui-cbxc-shadow);cursor: text;transition: height 300ms var(--ui-cbxc-ease), box-shadow 160ms ease}.ui-cbxc__field:hover{box-shadow: var(--ui-cbxc-shadow-hover)}.ui-cbxc__field:focus-within{outline: 2px solid var(--ui-cbxc-focus);outline-offset: 1px}.ui-cbxc__field-inner{position: relative;display: flex;flex-wrap: nowrap;align-items: center;min-height: 32px;padding: 4px 32px 4px 4px;overflow: hidden}.ui-cbxc__measure{position: absolute;top: 0;left: 0;display: flex;width: max-content;margin: 0;padding: 0;list-style: none;visibility: hidden;pointer-events: none;white-space: nowrap}.ui-cbxc__chips > .ui-cbxc__chip{flex: none}.ui-cbxc__measure > .ui-cbxc__chip{flex: none;max-width: none}.ui-cbxc__chips{display: contents;margin: 0;padding: 0;list-style: none}.ui-cbxc__chip{display: grid;grid-template-columns: 1fr;min-width: 0;max-width: 100%;overflow: hidden;margin-right: 4px;transition: grid-template-columns 260ms var(--ui-cbxc-ease) 160ms, margin-right 260ms var(--ui-cbxc-ease) 160ms, opacity 200ms ease 140ms}.ui-cbxc__chip[data-leaving]{grid-template-columns: 0fr;margin-right: 0;opacity: 0;pointer-events: none}.ui-cbxc__chip-body{display: inline-flex;align-items: center;gap: 6px;min-width: 0;height: 24px;overflow: hidden;padding: 0 2px 0 4px;border-radius: 6px;background: var(--ui-cbxc-fill);white-space: nowrap;font-size: 12px;line-height: 16px;font-weight: 500;color: var(--ui-cbxc-ink);transition: background-color 160ms ease, box-shadow 160ms ease}.ui-cbxc__chip[data-plain] .ui-cbxc__chip-body{padding-left: 8px}.ui-cbxc__chip[data-armed] .ui-cbxc__chip-body{background: var(--ui-cbxc-fill-strong);box-shadow: inset 0 0 0 0.5px var(--ui-cbxc-faint)}.ui-cbxc__chip[data-leaving] .ui-cbxc__chip-body{animation: ui-cbxc-flash 300ms ease-out both}.ui-cbxc__chip-label{min-width: 0;max-width: 168px;overflow: hidden;text-overflow: ellipsis}.ui-cbxc__chip-x{display: grid;place-items: center;flex: none;width: 18px;height: 18px;border-radius: 4px;color: var(--ui-cbxc-icon);transition: background-color 140ms ease, color 140ms ease}.ui-cbxc__chip-x:hover{background: var(--ui-cbxc-fill);color: var(--ui-cbxc-ink)}.ui-cbxc__chip-x .ui-cbxc__glyph{width: 12px;height: 12px;stroke-width: 1.9}.ui-cbxc__chip .ui-cbxc__avatar{width: 16px;height: 16px;font-size: 7px;background: var(--ui-cbxc-card);box-shadow: 0 0 0 0.5px var(--ui-cbxc-line)}.ui-cbxc__chip .ui-cbxc__dot{margin: 0 1px 0 2px}.ui-cbxc__chip .ui-cbxc__icon{width: 16px;height: 16px}.ui-cbxc__more .ui-cbxc__chip-body{padding: 0 8px;gap: 0;color: var(--ui-cbxc-text);font-variant-numeric: tabular-nums}.ui-cbxc__more{transition-delay: 0ms}.ui-cbxc__more[data-hidden]{grid-template-columns: 0fr;margin-right: 0;opacity: 0}.ui-cbxc__roll{display: inline-grid;overflow: hidden}.ui-cbxc__roll > span{animation: ui-cbxc-roll-up 300ms var(--ui-cbxc-ease) both}.ui-cbxc__roll > span[data-dir="down"]{animation-name: ui-cbxc-roll-down}.ui-cbxc__input{flex: 1 0 72px;min-width: 72px;height: 24px;margin: 0;padding: 0 4px 0 6px;border: 0;background: transparent;font: inherit;color: var(--ui-cbxc-ink);outline: none}.ui-cbxc__input::placeholder{color: var(--ui-cbxc-faint)}.ui-cbxc__toggle{position: absolute;top: 4px;right: 4px;display: grid;place-items: center;width: 24px;height: 24px;border-radius: 6px;color: var(--ui-cbxc-icon);transition: background-color 140ms ease, color 140ms ease}.ui-cbxc__toggle:hover{background: var(--ui-cbxc-wash);color: var(--ui-cbxc-ink)}.ui-cbxc__toggle .ui-cbxc__glyph{transition: transform 260ms var(--ui-cbxc-ease)}.ui-cbxc[data-open] .ui-cbxc__toggle .ui-cbxc__glyph{transform: rotate(180deg)}.ui-cbxc__avatar{display: grid;place-items: center;flex: none;width: 20px;height: 20px;border-radius: 50%;object-fit: cover;background: var(--ui-cbxc-avatar);color: var(--ui-cbxc-text);font-size: 8px;line-height: 1;font-weight: 500;letter-spacing: 0.02em}.ui-cbxc__dot{flex: none;width: 8px;height: 8px;margin: 0 4px;border-radius: 50%}.ui-cbxc__icon{display: grid;place-items: center;flex: none;width: 20px;height: 20px;color: var(--ui-cbxc-icon)}.ui-cbxc__icon svg{width: 16px;height: 16px}.ui-cbxc__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;right: 0;overflow: hidden;border-radius: 10px;background: var(--ui-cbxc-card);box-shadow: var(--ui-cbxc-shadow-pop);transform-origin: top center;animation: ui-cbxc-open 240ms var(--ui-cbxc-ease) both}.ui-cbxc__list{position: relative;max-height: 300px;padding: 4px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;transition: height 300ms var(--ui-cbxc-ease)}.ui-cbxc__pill{position: absolute;top: 0;left: 4px;right: 4px;border-radius: 6px;background: var(--ui-cbxc-fill);opacity: 0;pointer-events: none;transition: transform 90ms ease-out, height 90ms ease-out, opacity 140ms ease}.ui-cbxc__group-label{padding: 8px 8px 4px;font-size: 10px;line-height: 16px;font-weight: 500;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-cbxc-muted)}.ui-cbxc__group:first-child .ui-cbxc__group-label{padding-top: 4px}.ui-cbxc__option{position: relative;display: flex;align-items: center;gap: 8px;height: 32px;padding: 0 8px;border-radius: 6px;cursor: pointer;user-select: none;-webkit-tap-highlight-color: transparent}.ui-cbxc__text{display: flex;flex: 1;align-items: baseline;gap: 8px;min-width: 0}.ui-cbxc__name{flex: 0 0 auto;max-width: 100%;min-width: 0;overflow: hidden;color: var(--ui-cbxc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cbxc__hint{flex: 0 100 auto;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cbxc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cbxc mark{border-radius: 3px;background: var(--ui-cbxc-mark);color: inherit}.ui-cbxc__check{width: 16px;height: 16px;margin-left: auto;color: var(--ui-cbxc-accent);stroke-width: 1.8;opacity: 0;transform: scale(0.4);transition: opacity 120ms ease, transform 160ms ease}.ui-cbxc__option[aria-selected="true"] .ui-cbxc__check{opacity: 1;transform: none;transition: opacity 160ms ease, transform 380ms var(--ui-cbxc-spring)}.ui-cbxc__empty{padding: 12px 8px 10px;text-align: center;color: var(--ui-cbxc-muted);animation: ui-cbxc-in 240ms var(--ui-cbxc-ease) both}.ui-cbxc__create{animation: ui-cbxc-in 240ms var(--ui-cbxc-ease) both}.ui-cbxc__plus{display: grid;place-items: center;flex: none;width: 20px;height: 20px;border-radius: 6px;color: var(--ui-cbxc-icon);box-shadow: inset 0 0 0 0.5px var(--ui-cbxc-fill-strong)}.ui-cbxc__plus .ui-cbxc__glyph{width: 12px;height: 12px;stroke-width: 1.9}.ui-cbxc__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 12px;border-top: 0.5px solid var(--ui-cbxc-line);font-size: 12px;line-height: 16px;color: var(--ui-cbxc-muted)}.ui-cbxc__count{display: inline-flex;font-variant-numeric: tabular-nums}.ui-cbxc__keys{display: inline-flex;align-items: center;gap: 2px;white-space: nowrap}.ui-cbxc kbd{display: inline-grid;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-cbxc-card);box-shadow: var(--ui-cbxc-shadow);font-family: inherit;font-size: 10px;line-height: 16px;font-weight: 500;color: var(--ui-cbxc-text)}.ui-cbxc__keys > span{margin: 0 6px 0 2px}.ui-cbxc__keys > span:last-child{margin-right: 0}.ui-cbxc__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-cbxc-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-cbxc-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-cbxc-flash{0%{background-color: var(--ui-cbxc-fill)}35%{background-color: var(--ui-cbxc-flash)}100%{background-color: var(--ui-cbxc-flash);transform: scale(0.92)}}@keyframes ui-cbxc-roll-up{from{opacity: 0;transform: translateY(70%)}to{opacity: 1;transform: none}}@keyframes ui-cbxc-roll-down{from{opacity: 0;transform: translateY(-70%)}to{opacity: 1;transform: none}}@container (max-width: 380px){.ui-cbxc__keys{display: none}.ui-cbxc__chip-label{max-width: 132px}.ui-cbxc__input{flex-basis: 44px;min-width: 44px}}@media (hover: none) and (pointer: coarse){.ui-cbxc__field-inner{min-height: 40px;padding: 4px 40px 4px 4px}.ui-cbxc__chip-body{height: 32px}.ui-cbxc__chip-x{width: 26px;height: 26px}.ui-cbxc__input{height: 32px;font-size: 16px}.ui-cbxc__toggle{width: 32px;height: 32px}.ui-cbxc__option{height: 44px}.ui-cbxc__list{max-height: 340px}.ui-cbxc__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-cbxc *, .ui-cbxc *::before, .ui-cbxc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cbxc{--ui-cbxc-card: #1c1c1e;--ui-cbxc-ink: rgba(255, 255, 255, 0.9);--ui-cbxc-strong: #ffffff;--ui-cbxc-text: rgba(255, 255, 255, 0.62);--ui-cbxc-muted: rgba(255, 255, 255, 0.46);--ui-cbxc-faint: rgba(255, 255, 255, 0.3);--ui-cbxc-icon: rgba(255, 255, 255, 0.5);--ui-cbxc-line: rgba(255, 255, 255, 0.08);--ui-cbxc-fill: rgba(255, 255, 255, 0.08);--ui-cbxc-fill-strong: rgba(255, 255, 255, 0.13);--ui-cbxc-wash: rgba(255, 255, 255, 0.04);--ui-cbxc-flash: rgba(255, 255, 255, 0.18);--ui-cbxc-avatar: rgba(255, 255, 255, 0.08);--ui-cbxc-mark: rgba(77, 141, 255, 0.24);--ui-cbxc-accent: #4d8dff;--ui-cbxc-focus: rgba(77, 141, 255, 0.5);--ui-cbxc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cbxc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cbxc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6)}`;
var options = [{
  value: `maya`,
  label: `Maya Chen`,
  hint: `Product Designer`,
  avatar: true,
  group: `Design`
}, {
  value: `jonas`,
  label: `Jonas Weber`,
  hint: `Design Lead`,
  avatar: true,
  group: `Design`
}, {
  value: `priya`,
  label: `Priya Raman`,
  hint: `Brand Designer`,
  avatar: true,
  group: `Design`
}, {
  value: `sara`,
  label: `Sara Okafor`,
  hint: `Staff Engineer`,
  avatar: true,
  group: `Engineering`
}, {
  value: `leo`,
  label: `Leo Martins`,
  hint: `Frontend`,
  avatar: true,
  group: `Engineering`
}, {
  value: `nina`,
  label: `Nina Petrova`,
  hint: `Backend`,
  avatar: true,
  group: `Engineering`
}, {
  value: `tom`,
  label: `Tom Becker`,
  hint: `iOS`,
  avatar: true,
  group: `Engineering`
}, {
  value: `elif`,
  label: `Elif Yilmaz`,
  hint: `Head of Product`,
  avatar: true,
  group: `Product`
}, {
  value: `daniel`,
  label: `Daniel Kim`,
  hint: `Product Manager`,
  avatar: true,
  group: `Product`
}, {
  value: `lucas`,
  label: `Lucas Moreau`,
  hint: `Product Analyst`,
  avatar: true,
  group: `Product`
}];
function MComponent() {
  return /* @__PURE__ */ jsx("div", { className: `combobox-demo`, children: /* @__PURE__ */ jsx(P1Component, { label: `Reviewers`, options, placeholder: `Add reviewers\u2026`, creatable: true, createLabel: (e) => `Invite \u201C${e}\u201D`, defaultOpen: true }) });
}

export {
  MComponent
};
