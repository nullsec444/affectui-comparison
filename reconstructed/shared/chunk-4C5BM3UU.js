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

// reconstructed/demo-tcGbF7g2.jsx
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
function L1Component({
  option
}) {
  if (option.icon) {
    return /* @__PURE__ */ jsx("span", { className: `ui-cbx__icon`, children: option.icon });
  }
  if (typeof option.avatar == `string`) {
    return /* @__PURE__ */ jsx("img", { className: `ui-cbx__avatar`, src: option.avatar, alt: `` });
  }
  if (option.avatar) {
    return /* @__PURE__ */ jsx("span", { className: `ui-cbx__avatar`, "aria-hidden": `true`, children: s(option.label) });
  }
  if (option.color) {
    return /* @__PURE__ */ jsx("span", { className: `ui-cbx__dot`, style: {
      background: option.color
    }, "aria-hidden": `true` });
  }
  return null;
}
var U1Component = ({
  d: d2,
  className
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: [`ui-cbx__glyph`, className].filter(Boolean).join(` `), "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: d2 }) });
var d = {
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
  return /* @__PURE__ */ jsx("li", { ref: lRef, className: `ui-cbx__chip`, "data-leaving": leaving || void 0, "data-armed": armed || void 0, "data-plain": plain || void 0, children });
}
function F1Component({
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
  let g = `ui-cbx` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  let [se, setSe] = n3.useState(defaultValue ?? []);
  let _ = value ?? se;
  let [le, setLe] = n3.useState([]);
  let [v, setV] = n3.useState(defaultOpen);
  let [b, setB] = n3.useState(``);
  let [S, setS] = n3.useState(null);
  let [w, setW] = n3.useState(null);
  let [de, setDe] = n3.useState(``);
  let DRef = n3.useRef(null);
  let feRef = n3.useRef(null);
  let peRef = n3.useRef(null);
  let ORef = n3.useRef(null);
  let kRef = n3.useRef(null);
  let meRef = n3.useRef(null);
  let heRef = n3.useRef(null);
  let ARef = n3.useRef(false);
  let j = n3.useMemo(() => [...options2, ...le.filter((t) => !options2.some((e) => e.value === t.value))], [options2, le]);
  let ge = n3.useMemo(() => new Map(j.map((e) => [e.value, e])), [j]);
  let M = (e) => ge.get(e) ?? {
    value: e,
    label: e
  };
  let N = b.trim();
  let P = N.toLowerCase();
  let F = n3.useMemo(() => {
    let e = [];
    for (let t of j) {
      if (P && !`${t.label} ${t.hint ?? ``} ${t.keywords ?? ``}`.toLowerCase().includes(P)) {
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
  }, [j, P]);
  let I = creatable && !!N && !j.some((e) => e.label.toLowerCase() === P);
  let L = [...F.flatMap((e) => e.options.map((e2) => e2.value)), ...I ? [i] : []];
  let R = S !== null && L.includes(S) ? S : L[0];
  let z = (e) => `${g}-o${L.indexOf(e)}`;
  let [B, setB_1] = n3.useState(() => _.map((value_1) => ({
    value: value_1
  })));
  let HRef = n3.useRef(B);
  HRef.current = B;
  let URef = n3.useRef(/* @__PURE__ */ new Map());
  let WRef = n3.useRef(false);
  let _e = _.join(``);
  n3.useEffect(() => {
    let HRef_current = HRef.current;
    let t = false;
    let n4 = HRef_current.map((e) => {
      let n5 = _.includes(e.value);
      if (n5 && e.leaving) {
        t = true;
        window.clearTimeout(URef.current.get(e.value));
        URef.current.delete(e.value);
        return {
          value: e.value
        };
      }
      if (!n5 && !e.leaving) {
        t = true;
        URef.current.set(e.value, window.setTimeout(() => {
          URef.current.delete(e.value);
          setB_1((t2) => t2.filter((t3) => !(t3.value === e.value && t3.leaving)));
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
      setB_1(n4);
    }
  }, [_e]);
  n3.useEffect(() => {
    WRef.current = true;
    let URef_current = URef.current;
    return () => URef_current.forEach((e) => window.clearTimeout(e));
  }, []);
  let G = maxVisibleTags ?? Infinity;
  let ve = 0;
  let K = B.filter((e) => {
    if (e.leaving) {
      return ve < G;
    }
    return ve++ < G;
  });
  let q = Math.max(0, B.filter((e) => !e.leaving).length - G);
  let JRef = n3.useRef(q);
  let yeRef = n3.useRef(`up`);
  if (q !== JRef.current && q > 0) {
    yeRef.current = q > JRef.current ? `up` : `down`;
  }
  if (q > 0) {
    JRef.current = q;
  }
  let be = q || JRef.current;
  let xe = !!w && q > 0 && !K.some((e) => e.value === w);
  let YRef = n3.useRef(_.length);
  let SeRef = n3.useRef(`up`);
  if (_.length !== YRef.current) {
    SeRef.current = _.length > YRef.current ? `up` : `down`;
    YRef.current = _.length;
  }
  let Ce = (e, t) => {
    if (value === void 0) {
      setSe(e);
    }
    onChange?.(e, e.map((e2) => {
      if (t?.value === e2) {
        return t;
      }
      return M(e2);
    }));
  };
  let X = (e, n4) => setDe(multiple ? `${e}. ${n4} selected` : e);
  let Z = (e) => {
    let n4 = _.includes(e.value);
    let r2 = multiple ? n4 ? _.filter((t) => t !== e.value) : [..._, e.value] : [e.value];
    Ce(r2, e);
    X(`${e.label} ${n4 && multiple ? `removed` : `selected`}`, r2.length);
    setW(null);
    if (b) {
      setB(``);
    }
    if (!multiple) {
      setV(false);
    }
  };
  let onClick = () => {
    let e = onCreate?.(N) || {
      value: N,
      label: N
    };
    setLe((t) => [...t.filter((t2) => t2.value !== e.value), e]);
    setS(e.value);
    Z(e);
  };
  let Q = (e) => {
    let t = _.filter((t2) => t2 !== e);
    Ce(t);
    X(`${M(e).label} removed`, t.length);
    setW(null);
  };
  let Te = (e) => {
    if (e === i) {
      onClick();
    } else {
      Z(M(e));
    }
  };
  n3.useLayoutEffect(() => {
    let feRef_current = feRef.current;
    let peRef_current = peRef.current;
    if (!feRef_current || !peRef_current) {
      return;
    }
    let n4 = () => feRef_current.style.height = `${peRef_current.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(peRef_current);
    return () => r2.disconnect();
  }, []);
  n3.useLayoutEffect(() => {
    let kRef_current = kRef.current;
    let meRef_current = meRef.current;
    if (!v || !kRef_current || !meRef_current) {
      return;
    }
    let n4 = () => {
      let n5 = getComputedStyle(kRef_current);
      let r3 = parseFloat(n5.paddingTop) + parseFloat(n5.paddingBottom);
      let i2 = parseFloat(n5.maxHeight) || Infinity;
      kRef_current.style.height = `${Math.min(meRef_current.offsetHeight + r3, i2)}px`;
    };
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(meRef_current);
    return () => r2.disconnect();
  }, [v]);
  n3.useLayoutEffect(() => {
    let kRef_current = kRef.current;
    let heRef_current = heRef.current;
    if (!v || !kRef_current || !heRef_current) {
      return;
    }
    let n4 = kRef_current.querySelector(`[data-active]`);
    if (!n4) {
      heRef_current.style.opacity = `0`;
      return;
    }
    let r2 = !heRef_current.dataset.ready;
    if (r2) {
      heRef_current.style.transition = `none`;
    }
    heRef_current.style.opacity = `1`;
    heRef_current.style.height = `${n4.offsetHeight}px`;
    heRef_current.style.transform = `translateY(${n4.offsetTop}px)`;
    if (r2) {
      heRef_current.dataset.ready = `1`;
      heRef_current.offsetWidth;
      heRef_current.style.transition = ``;
    }
    if (!ARef.current) {
      return;
    }
    ARef.current = false;
    let n_previousElementSibling = n4.previousElementSibling;
    let a = n_previousElementSibling?.classList.contains(`ui-cbx__group-label`) ? n_previousElementSibling.offsetHeight : 0;
    let o2 = n4.offsetTop - 6 - a;
    let s2 = n4.offsetTop + n4.offsetHeight + 6;
    if (o2 < kRef_current.scrollTop) {
      kRef_current.scrollTop = o2;
    } else if (s2 > kRef_current.scrollTop + kRef_current.clientHeight) {
      kRef_current.scrollTop = s2 - kRef_current.clientHeight;
    }
  });
  n3.useEffect(() => {
    if (!v) {
      return;
    }
    let e = (e2) => {
      if (DRef.current && !DRef.current.contains(e2.target)) {
        setV(false);
        setW(null);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [v]);
  let Ee = (e) => {
    if (!L.length) {
      return;
    }
    ARef.current = true;
    let t = Math.max(0, L.indexOf(R));
    setS(L[(t + e + L.length) % L.length]);
  };
  let onKeyDown = (e) => {
    if (e.key !== `Backspace`) {
      setW(null);
    }
    if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
      e.preventDefault();
      if (!v) {
        setV(true);
        return;
      }
      Ee(e.key === `ArrowDown` ? 1 : -1);
    } else if (e.key === `Enter`) {
      if (!v || !R) {
        return;
      }
      e.preventDefault();
      Te(R);
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
      if (w === t) {
        Q(t);
      } else {
        setW(t);
        setDe(`${M(t).label} \u2013 press Backspace again to remove`);
      }
    }
  };
  let Oe = (e) => {
    if (!e.target.closest(`button`)) {
      if (e.target !== ORef.current) {
        e.preventDefault();
      }
      ORef.current?.focus();
      setW(null);
      setV(true);
    }
  };
  let onBlur = (e) => {
    if (!DRef.current?.contains(e.relatedTarget)) {
      setV(false);
      setW(null);
    }
  };
  let $ = (e) => e.preventDefault();
  return /* @__PURE__ */ jsxs("div", { ref: DRef, className: [`ui-cbx`, className].filter(Boolean).join(` `), "data-open": v || void 0, onBlur, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-combobox`, precedence: `default`, children: te }),
    label_1 && /* @__PURE__ */ jsx("label", { className: `ui-cbx__label`, id: `${g}-label`, htmlFor: `${g}-input`, children: label_1 }),
    /* @__PURE__ */ jsxs("div", { ref: feRef, className: `ui-cbx__field`, onMouseDown: Oe, children: [
      /* @__PURE__ */ jsxs("div", { ref: peRef, className: `ui-cbx__field-inner`, children: [
        (K.length > 0 || maxVisibleTags !== void 0) && /* @__PURE__ */ jsxs("ul", { className: `ui-cbx__chips`, role: `list`, "aria-label": `Selected`, children: [
          K.map((e) => {
            let t = M(e.value);
            let plain = !t.icon && !t.avatar && !t.color;
            return /* @__PURE__ */ jsx(Ee1Component, { animate: WRef.current, leaving: e.leaving, armed: w === e.value, plain, children: /* @__PURE__ */ jsxs("span", { className: `ui-cbx__chip-body`, children: [
              /* @__PURE__ */ jsx(L1Component, { option: t }),
              /* @__PURE__ */ jsx("span", { className: `ui-cbx__chip-label`, children: t.label }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cbx__chip-x`, tabIndex: -1, "aria-label": `Remove ${t.label}`, onMouseDown: $, onClick: () => Q(e.value), children: /* @__PURE__ */ jsx(U1Component, { d: d.close }) })
            ] }) }, e.value);
          }),
          maxVisibleTags !== void 0 && /* @__PURE__ */ jsx("li", { className: `ui-cbx__chip ui-cbx__more`, "data-hidden": !q || void 0, "data-armed": xe || void 0, "aria-hidden": !q || void 0, children: /* @__PURE__ */ jsxs("span", { className: `ui-cbx__chip-body`, children: [
            `+`,
            /* @__PURE__ */ jsx("span", { className: `ui-cbx__roll`, children: /* @__PURE__ */ jsx("span", { "data-dir": yeRef.current, children: be }, be) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("input", { ref: ORef, id: `${g}-input`, className: `ui-cbx__input`, value: b, placeholder: _.length ? void 0 : placeholder, autoComplete: `off`, spellCheck: false, role: `combobox`, "aria-expanded": v, "aria-controls": `${g}-list`, "aria-autocomplete": `list`, "aria-activedescendant": v && R ? z(R) : void 0, "aria-label": label_1 ? void 0 : placeholder, onChange: (e) => {
          setB(e.target.value);
          setS(null);
          setW(null);
          setV(true);
        }, onKeyDown })
      ] }),
      /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cbx__toggle`, tabIndex: -1, "aria-label": v ? `Close list` : `Open list`, onMouseDown: $, onClick: () => {
        ORef.current?.focus();
        setV((e) => !e);
      }, children: /* @__PURE__ */ jsx(U1Component, { d: d.chevron }) })
    ] }),
    v && /* @__PURE__ */ jsxs("div", { className: `ui-cbx__pop`, onMouseDown: $, children: [
      /* @__PURE__ */ jsx("div", { className: `ui-cbx__card`, children: /* @__PURE__ */ jsxs("div", { ref: kRef, id: `${g}-list`, className: `ui-cbx__list`, role: `listbox`, "aria-multiselectable": multiple || void 0, "aria-labelledby": label_1 ? `${g}-label` : void 0, "aria-label": label_1 ? void 0 : `Options`, children: [
        /* @__PURE__ */ jsx("span", { ref: heRef, className: `ui-cbx__pill`, "aria-hidden": `true` }),
        /* @__PURE__ */ jsxs("div", { ref: meRef, className: `ui-cbx__list-inner`, children: [
          F.map((e, t) => /* @__PURE__ */ jsxs("div", { role: `group`, "aria-labelledby": e.name ? `${g}-g${t}` : void 0, className: `ui-cbx__group`, children: [
            e.name && /* @__PURE__ */ jsx("div", { className: `ui-cbx__group-label`, id: `${g}-g${t}`, children: e.name }),
            e.options.map((e2) => {
              let t2 = _.includes(e2.value);
              return /* @__PURE__ */ jsxs("div", { id: z(e2.value), role: `option`, "aria-selected": t2, "data-active": R === e2.value || void 0, className: `ui-cbx__option`, onMouseDown: $, onMouseMove: () => R !== e2.value && setS(e2.value), onClick: () => {
                setS(e2.value);
                Z(e2);
              }, children: [
                /* @__PURE__ */ jsx(L1Component, { option: e2 }),
                /* @__PURE__ */ jsxs("span", { className: `ui-cbx__text`, children: [
                  /* @__PURE__ */ jsx("span", { className: `ui-cbx__name`, children: /* @__PURE__ */ jsx(C1Component, { text: e2.label, query: N }) }),
                  e2.hint && /* @__PURE__ */ jsx("span", { className: `ui-cbx__hint`, children: /* @__PURE__ */ jsx(C1Component, { text: e2.hint, query: N }) })
                ] }),
                /* @__PURE__ */ jsx(U1Component, { d: d.check, className: `ui-cbx__check` })
              ] }, e2.value);
            })
          ] }, e.name || `_`)),
          !F.length && /* @__PURE__ */ jsxs("div", { className: `ui-cbx__empty`, children: [
            emptyText,
            N && /* @__PURE__ */ jsxs(Fragment, { children: [
              ` for \u201C`,
              N,
              `\u201D`
            ] })
          ] }, N),
          I && /* @__PURE__ */ jsxs("div", { id: z(i), role: `option`, "aria-selected": false, "data-active": R === i || void 0, className: `ui-cbx__option ui-cbx__create`, onMouseDown: $, onMouseMove: () => R !== i && setS(i), onClick, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-cbx__plus`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(U1Component, { d: d.plus }) }),
            /* @__PURE__ */ jsx("span", { className: `ui-cbx__name`, children: createLabel(N) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: `ui-cbx__foot`, "aria-hidden": `true`, children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-cbx__count`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-cbx__roll`, children: /* @__PURE__ */ jsx("span", { "data-dir": SeRef.current, children: _.length }, _.length) }),
          (multiple || _.length, `\xA0selected`)
        ] }),
        /* @__PURE__ */ jsxs("span", { className: `ui-cbx__keys`, children: [
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
    /* @__PURE__ */ jsx("span", { className: `ui-cbx__live`, "aria-live": `polite`, children: de })
  ] });
}
var te = `.ui-cbx{--ui-cbx-tray: #f0f0f0;--ui-cbx-card: #ffffff;--ui-cbx-line: #ececec;--ui-cbx-ink: #171717;--ui-cbx-text: #404040;--ui-cbx-muted: #8f8f8f;--ui-cbx-faint: #b5b5b5;--ui-cbx-edge: #d4d4d8;--ui-cbx-active: #f0f0f1;--ui-cbx-chip: #f4f4f5;--ui-cbx-chip-line: #e6e6e8;--ui-cbx-armed: #e4e4e7;--ui-cbx-flash: #d9d9dd;--ui-cbx-avatar: #e9e9ec;--ui-cbx-avatar-ink: #5b5b62;--ui-cbx-mark: rgba(47, 107, 255, 0.14);--ui-cbx-accent: #2f6bff;--ui-cbx-ring: rgba(23, 23, 23, 0.08);--ui-cbx-focus: rgba(23, 23, 23, 0.22);--ui-cbx-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06);--ui-cbx-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-cbx-spring: cubic-bezier(0.34, 1.56, 0.64, 1);position: relative;display: block;width: 100%;max-width: 440px;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.4;color: var(--ui-cbx-text);-webkit-font-smoothing: antialiased}.ui-cbx *, .ui-cbx *::before, .ui-cbx *::after{box-sizing: border-box}:where(.ui-cbx) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cbx) svg{display: block;flex: none}.ui-cbx__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-cbx__label{display: block;margin: 0 0 7px 2px;font-size: 13px;font-weight: 500;color: var(--ui-cbx-ink)}.ui-cbx__field{position: relative;overflow: hidden;border-radius: 12px;background: var(--ui-cbx-card);box-shadow: 0 0 0 1px var(--ui-cbx-line), 0 1px 2px rgba(0, 0, 0, 0.04);cursor: text;transition: height 300ms var(--ui-cbx-ease), box-shadow 160ms ease}.ui-cbx__field:hover{box-shadow: 0 0 0 1px var(--ui-cbx-edge), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-cbx__field:focus-within{box-shadow: 0 0 0 1px var(--ui-cbx-edge), 0 0 0 4px var(--ui-cbx-ring)}.ui-cbx__field-inner{display: flex;flex-wrap: wrap;align-items: center;row-gap: 4px;min-height: 40px;padding: 6px 40px 6px 6px}.ui-cbx__chips{display: contents;margin: 0;padding: 0;list-style: none}.ui-cbx__chip{display: grid;grid-template-columns: 1fr;min-width: 0;max-width: 100%;overflow: hidden;margin-right: 4px;transition: grid-template-columns 260ms var(--ui-cbx-ease) 160ms, margin-right 260ms var(--ui-cbx-ease) 160ms, opacity 200ms ease 140ms}.ui-cbx__chip[data-leaving]{grid-template-columns: 0fr;margin-right: 0;opacity: 0;pointer-events: none}.ui-cbx__chip-body{display: inline-flex;align-items: center;gap: 6px;min-width: 0;height: 28px;overflow: hidden;padding: 0 3px 0 5px;border-radius: 8px;background: var(--ui-cbx-chip);box-shadow: inset 0 0 0 1px var(--ui-cbx-chip-line);white-space: nowrap;color: var(--ui-cbx-ink);font-size: 13px;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-cbx__chip[data-plain] .ui-cbx__chip-body{padding-left: 9px}.ui-cbx__chip[data-armed] .ui-cbx__chip-body{background: var(--ui-cbx-armed);box-shadow: inset 0 0 0 1px var(--ui-cbx-faint)}.ui-cbx__chip[data-leaving] .ui-cbx__chip-body{animation: ui-cbx-flash 300ms ease-out both}.ui-cbx__chip-label{min-width: 0;max-width: 168px;overflow: hidden;text-overflow: ellipsis}.ui-cbx__chip-x{display: grid;place-items: center;flex: none;width: 20px;height: 20px;border-radius: 6px;color: var(--ui-cbx-muted);transition: background-color 140ms ease, color 140ms ease}.ui-cbx__chip-x:hover{background: var(--ui-cbx-armed);color: var(--ui-cbx-ink)}.ui-cbx__chip-x .ui-cbx__glyph{width: 13px;height: 13px;stroke-width: 2}.ui-cbx__chip .ui-cbx__avatar{width: 18px;height: 18px;font-size: 8.5px}.ui-cbx__chip .ui-cbx__dot{margin: 0 2px}.ui-cbx__more .ui-cbx__chip-body{padding: 0 9px;color: var(--ui-cbx-text);font-variant-numeric: tabular-nums}.ui-cbx__more{transition-delay: 0ms}.ui-cbx__more[data-hidden]{grid-template-columns: 0fr;margin-right: 0;opacity: 0}.ui-cbx__roll{display: inline-grid;overflow: hidden}.ui-cbx__roll > span{animation: ui-cbx-roll-up 300ms var(--ui-cbx-ease) both}.ui-cbx__roll > span[data-dir="down"]{animation-name: ui-cbx-roll-down}.ui-cbx__input{flex: 1 0 72px;min-width: 72px;height: 28px;margin: 0;padding: 0 4px 0 6px;border: 0;background: transparent;font: inherit;color: var(--ui-cbx-ink);outline: none}.ui-cbx__input::placeholder{color: var(--ui-cbx-faint)}.ui-cbx__toggle{position: absolute;top: 6px;right: 6px;display: grid;place-items: center;width: 28px;height: 28px;border-radius: 8px;color: var(--ui-cbx-muted);transition: background-color 140ms ease, color 140ms ease}.ui-cbx__toggle:hover{background: var(--ui-cbx-active);color: var(--ui-cbx-ink)}.ui-cbx__toggle .ui-cbx__glyph{transition: transform 260ms var(--ui-cbx-ease)}.ui-cbx[data-open] .ui-cbx__toggle .ui-cbx__glyph{transform: rotate(180deg)}.ui-cbx__avatar{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 50%;object-fit: cover;background: var(--ui-cbx-avatar);color: var(--ui-cbx-avatar-ink);font-size: 9.5px;font-weight: 600;letter-spacing: 0.02em}.ui-cbx__dot{flex: none;width: 8px;height: 8px;margin: 0 4px;border-radius: 50%}.ui-cbx__icon{display: grid;place-items: center;flex: none;width: 18px;height: 18px;color: var(--ui-cbx-muted)}.ui-cbx__icon svg{width: 16px;height: 16px}.ui-cbx__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;right: 0;padding: 4px;border-radius: 18px;background: var(--ui-cbx-tray);box-shadow: var(--ui-cbx-shadow);transform-origin: top center;animation: ui-cbx-open 240ms var(--ui-cbx-ease) both}.ui-cbx__card{overflow: hidden;border-radius: 14px;background: var(--ui-cbx-card);box-shadow: 0 0 0 1px var(--ui-cbx-line)}.ui-cbx__list{position: relative;max-height: 300px;padding: 4px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;transition: height 300ms var(--ui-cbx-ease)}.ui-cbx__pill{position: absolute;top: 0;left: 4px;right: 4px;border-radius: 9px;background: var(--ui-cbx-active);opacity: 0;pointer-events: none;transition: transform 220ms var(--ui-cbx-ease), height 220ms var(--ui-cbx-ease), opacity 160ms ease}.ui-cbx__group-label{padding: 9px 8px 4px;font-size: 11.5px;font-weight: 500;color: var(--ui-cbx-faint)}.ui-cbx__group:first-child .ui-cbx__group-label{padding-top: 5px}.ui-cbx__option{position: relative;display: flex;align-items: center;gap: 10px;height: 36px;padding: 0 8px;border-radius: 9px;cursor: pointer;user-select: none;-webkit-tap-highlight-color: transparent}.ui-cbx__text{display: flex;flex: 1;align-items: baseline;gap: 8px;min-width: 0}.ui-cbx__name{flex: 0 0 auto;max-width: 100%;min-width: 0;overflow: hidden;color: var(--ui-cbx-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cbx__hint{flex: 0 100 auto;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-cbx-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cbx mark{border-radius: 3px;background: var(--ui-cbx-mark);color: inherit}.ui-cbx__check{width: 16px;height: 16px;margin-left: auto;color: var(--ui-cbx-ink);stroke-width: 2.2;opacity: 0;transform: scale(0.4);transition: opacity 120ms ease, transform 160ms ease}.ui-cbx__option[aria-selected="true"] .ui-cbx__check{opacity: 1;transform: none;transition: opacity 160ms ease, transform 380ms var(--ui-cbx-spring)}.ui-cbx__empty{padding: 14px 10px 10px;text-align: center;color: var(--ui-cbx-muted);animation: ui-cbx-in 240ms var(--ui-cbx-ease) both}.ui-cbx__create{animation: ui-cbx-in 240ms var(--ui-cbx-ease) both}.ui-cbx__plus{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 50%;color: var(--ui-cbx-muted);box-shadow: inset 0 0 0 1px var(--ui-cbx-edge)}.ui-cbx__plus .ui-cbx__glyph{width: 13px;height: 13px;stroke-width: 2}.ui-cbx__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 10px;font-size: 12px;color: var(--ui-cbx-muted)}.ui-cbx__count{display: inline-flex;font-variant-numeric: tabular-nums}.ui-cbx__keys{display: inline-flex;align-items: center;gap: 3px;white-space: nowrap}.ui-cbx kbd{display: inline-grid;place-items: center;min-width: 18px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-cbx-card);box-shadow: inset 0 0 0 1px var(--ui-cbx-line), 0 1px 0 var(--ui-cbx-line);font-family: inherit;font-size: 10.5px;font-weight: 500;color: var(--ui-cbx-muted)}.ui-cbx__keys > span{margin: 0 6px 0 2px}.ui-cbx__keys > span:last-child{margin-right: 0}.ui-cbx__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-cbx-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-cbx-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-cbx-flash{0%{background-color: var(--ui-cbx-chip)}35%{background-color: var(--ui-cbx-flash)}100%{background-color: var(--ui-cbx-flash);transform: scale(0.92)}}@keyframes ui-cbx-roll-up{from{opacity: 0;transform: translateY(70%)}to{opacity: 1;transform: none}}@keyframes ui-cbx-roll-down{from{opacity: 0;transform: translateY(-70%)}to{opacity: 1;transform: none}}@container (max-width: 380px){.ui-cbx__keys{display: none}.ui-cbx__chip-label{max-width: 132px}.ui-cbx__hint{font-size: 12px}.ui-cbx__input{flex-basis: 44px;min-width: 44px}}@media (hover: none) and (pointer: coarse){.ui-cbx__field-inner{min-height: 44px;padding-right: 44px}.ui-cbx__chip-body{height: 32px}.ui-cbx__chip-x{width: 26px;height: 26px}.ui-cbx__input{height: 32px;font-size: 16px}.ui-cbx__toggle{width: 32px;height: 32px}.ui-cbx__option{height: 44px}.ui-cbx__list{max-height: 340px}.ui-cbx__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-cbx *, .ui-cbx *::before, .ui-cbx *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cbx{--ui-cbx-tray: #111113;--ui-cbx-card: #19191b;--ui-cbx-line: #2a2a2e;--ui-cbx-ink: #ededed;--ui-cbx-text: #c8c8cc;--ui-cbx-muted: #8b8b92;--ui-cbx-faint: #5c5c63;--ui-cbx-edge: #3a3a40;--ui-cbx-active: #26262a;--ui-cbx-chip: #232326;--ui-cbx-chip-line: #2f2f34;--ui-cbx-armed: #303035;--ui-cbx-flash: #3a3a40;--ui-cbx-avatar: #2c2c31;--ui-cbx-avatar-ink: #b4b4bb;--ui-cbx-mark: rgba(109, 139, 255, 0.24);--ui-cbx-accent: #6d8bff;--ui-cbx-ring: rgba(255, 255, 255, 0.07);--ui-cbx-focus: rgba(255, 255, 255, 0.3);--ui-cbx-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6)}`;
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
function NeComponent() {
  return /* @__PURE__ */ jsx("div", { className: `combobox-demo`, children: /* @__PURE__ */ jsx(F1Component, { label: `Reviewers`, options, defaultValue: [`maya`, `sara`], placeholder: `Add reviewers\u2026`, maxVisibleTags: 4, creatable: true, createLabel: (e) => `Invite \u201C${e}\u201D`, defaultOpen: true }) });
}

export {
  NeComponent
};
