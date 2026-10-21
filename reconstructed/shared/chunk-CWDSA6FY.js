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

// reconstructed/demo-BOLhhfTT.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (...e) => e.filter(Boolean).join(` `);
var a = (e) => !!e && Object.values(e).some(Boolean);
var o = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function s(e) {
  if (e && !o() && e.animate) {
    e.animate([{
      transform: `none`
    }, {
      transform: `translateX(-4px)`
    }, {
      transform: `translateX(4px)`
    }, {
      transform: `translateX(-2px)`
    }, {
      transform: `none`
    }], {
      duration: 340,
      easing: `ease-out`
    });
  }
}
function c(e, t, n4) {
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
var L1Component = ({
  d,
  className
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: i(`ui-sf__glyph`, className), "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var u = {
  check: `M5.5 12.5l4 4L18.5 8`,
  close: `M7 7l10 10M17 7 7 17`,
  back: `M14.5 6l-6 6 6 6`
};
var D1Component = ({
  className
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: i(`ui-sf__draw`, className), "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: u.check, pathLength: 1 }) });
var FContext = n3.createContext({
  errors: {},
  shake: 0,
  report: () => {
  }
});
var PContext = n3.createContext(null);
function M1Component({
  steps,
  initialValues,
  onComplete,
  initialStep = 0,
  step,
  onStepChange,
  submitLabel = `Finish`,
  submittingLabel = `Creating\u2026`,
  success,
  className
}) {
  let steps_length = steps.length;
  let [y, setY] = n3.useState(initialStep);
  let C2 = Math.max(0, Math.min(steps_length - 1, step ?? y));
  let [w, setW] = n3.useState(initialValues);
  let ERef = n3.useRef(w);
  let [D, setD] = n3.useState(C2);
  let k = Math.max(D, C2);
  let [ee, setEe] = n3.useState({});
  let [j, setJ] = n3.useState(0);
  let [M, setM] = n3.useState(null);
  let [P, setP] = n3.useState(false);
  let [I, setI] = n3.useState(``);
  let [R, setR] = n3.useState(false);
  let [ne, setNe] = n3.useState(``);
  let VRef = n3.useRef(null);
  let HRef = n3.useRef(null);
  let URef = n3.useRef(null);
  let WRef = n3.useRef(null);
  let GRef = n3.useRef(false);
  let KRef = n3.useRef(false);
  let qRef = n3.useRef({});
  let report = n3.useCallback((e, t) => {
    qRef.current = {
      ...qRef.current,
      [e]: t ?? void 0
    };
  }, []);
  let J = n3.useId();
  let index = R ? steps_length : C2;
  let [X, setX] = n3.useState({
    index,
    from: null,
    dir: 1
  });
  if (X.index !== index) {
    setX({
      index,
      from: X.index,
      dir: index > X.index ? 1 : -1
    });
  }
  n3.useEffect(() => {
    if (X.from === null) {
      return;
    }
    let e = window.setTimeout(() => setX((e2) => ({
      ...e2,
      from: null
    })), 420);
    return () => clearTimeout(e);
  }, [X.index, X.from]);
  let setValues = n3.useCallback((e) => {
    ERef.current = {
      ...ERef.current,
      ...e
    };
    setW(ERef.current);
  }, []);
  let Q = (t) => {
    let n4 = Math.max(0, Math.min(steps_length - 1, t));
    if (n4 !== C2) {
      GRef.current = true;
      KRef.current = true;
      qRef.current = {};
      if (step === void 0) {
        setY(n4);
      }
      onStepChange?.(n4);
      setD((e) => Math.max(e, n4));
      setI(``);
      setNe(`Step ${n4 + 1} of ${steps_length}: ${steps[n4].title}`);
    }
  };
  let ae = () => {
    let t = {
      ...qRef.current,
      ...steps[C2].validate?.(ERef.current)
    };
    if (a(t)) {
      setEe((e) => ({
        ...e,
        [C2]: true
      }));
      setJ((e) => e + 1);
      setNe(Object.values(t).find(Boolean) ?? `Check this step`);
      return false;
    }
    setEe((e) => ({
      ...e,
      [C2]: false
    }));
    return true;
  };
  let onSubmit = async (e) => {
    e?.preventDefault();
    if (!(P || R || !ae())) {
      if (C2 < steps_length - 1) {
        if (M !== null && M > C2) {
          setM(null);
          Q(M);
        } else {
          Q(C2 + 1);
        }
        return;
      }
      setP(true);
      setI(``);
      try {
        await onComplete?.(ERef.current);
        GRef.current = true;
        KRef.current = true;
        setR(true);
        setNe(`All done`);
      } catch (error) {
        let t = error instanceof Error && error.message ? error.message : `Something went wrong \u2013 try again`;
        setI(t);
        setNe(t);
      } finally {
        setP(false);
      }
    }
  };
  let onClick = () => {
    setM(null);
    Q(C2 - 1);
  };
  let goTo = (t) => {
    let n4 = steps.findIndex((e) => e.id === t);
    if (!(n4 < 0 || n4 === C2 || n4 > C2 && !ae())) {
      setM(n4 < C2 ? C2 : null);
      Q(n4);
    }
  };
  let le = () => {
    ERef.current = initialValues;
    setW(initialValues);
    setEe({});
    setM(null);
    setD(initialStep);
    setR(false);
    setI(``);
    GRef.current = true;
    KRef.current = true;
    qRef.current = {};
    if (step === void 0) {
      setY(initialStep);
    }
    onStepChange?.(initialStep);
  };
  n3.useEffect(() => {
    if (!GRef.current) {
      return;
    }
    GRef.current = false;
    let e = HRef.current?.querySelector(`[data-pane="current"]`);
    (e?.querySelector(`input:not([type="hidden"]):not(:disabled), textarea, select`) ?? e?.querySelector(`.ui-sf__heading`))?.focus({
      preventScroll: true
    });
  }, [index]);
  n3.useEffect(() => {
    if (j) {
      HRef.current?.querySelector(`[data-pane="current"] [aria-invalid="true"]`)?.focus({
        preventScroll: true
      });
    }
  }, [j]);
  n3.useLayoutEffect(() => {
    let HRef_current = HRef.current;
    let t = HRef_current?.querySelector(`[data-pane="current"]`);
    if (!HRef_current || !t) {
      return;
    }
    let n4 = !HRef_current.dataset.ready;
    let r2 = () => HRef_current.style.height = `${t.offsetHeight}px`;
    if (n4) {
      HRef_current.style.transition = `none`;
    }
    r2();
    if (n4) {
      HRef_current.dataset.ready = `1`;
      HRef_current.offsetWidth;
      HRef_current.style.transition = ``;
    }
    let i2 = new ResizeObserver(r2);
    i2.observe(t);
    return () => i2.disconnect();
  }, [index]);
  n3.useLayoutEffect(() => {
    let URef_current = URef.current;
    let WRef_current = WRef.current;
    if (!URef_current || !WRef_current) {
      return;
    }
    let n4 = () => URef_current.style.width = `${WRef_current.offsetWidth}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(WRef_current);
    return () => r2.disconnect();
  }, []);
  let $ = steps[C2];
  let errors = ee[C2] ? $.validate?.(w) ?? {} : {};
  let de = !a($.validate?.(w));
  let fe = C2 === steps_length - 1;
  let pe = P ? submittingLabel : fe ? submitLabel : M !== null && M > C2 ? `Back to ${steps[M].title.toLowerCase()}` : `Continue`;
  let me = {
    values: w,
    setValues,
    errors,
    goTo,
    next: () => VRef.current?.requestSubmit()
  };
  let HeComponent = (t) => {
    if (t >= steps_length) {
      if (success) {
        return success(w, le);
      }
      return /* @__PURE__ */ jsx(X1Component, { title: `All set`, description: `Everything is saved. You can change it any time.` });
    }
    let n4 = steps[t];
    let i2 = t === C2 ? me : {
      ...me,
      errors: {}
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { className: `ui-sf__heading`, tabIndex: -1, id: `${J}-h${t}`, children: n4.heading ?? n4.title }),
      n4.description && /* @__PURE__ */ jsx("p", { className: `ui-sf__desc`, children: n4.description }),
      /* @__PURE__ */ jsx("div", { className: `ui-sf__body`, children: n4.render(i2) })
    ] });
  };
  let ge = X.from !== null && X.from !== X.index ? [X.from, X.index] : [X.index];
  return /* @__PURE__ */ jsxs("div", { className: i(`ui-sf`, className), style: {
    "--ui-sf-n": steps_length
  }, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-stepper-form`, precedence: `default`, children: S }),
    /* @__PURE__ */ jsxs("div", { className: `ui-sf__head`, children: [
      /* @__PURE__ */ jsx("div", { className: `ui-sf__steps`, children: /* @__PURE__ */ jsx("ol", { className: `ui-sf__list`, "aria-label": `Progress`, children: steps.map((e, t) => {
        let n4 = R || t < k && t !== C2 ? `done` : t === C2 ? `current` : `upcoming`;
        let i2 = !R && !P && t !== C2 && t <= k;
        let a2 = /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: `ui-sf__mark`, children: n4 === `done` ? /* @__PURE__ */ jsx(D1Component, {}, `check`) : /* @__PURE__ */ jsxs("span", { children: [
            t + 1,
            `.`
          ] }, `num`) }),
          /* @__PURE__ */ jsx("span", { className: `ui-sf__step-label`, children: e.title }),
          /* @__PURE__ */ jsx("span", { className: `ui-sf__sr`, children: n4 === `done` ? ` (done)` : n4 === `current` ? ` (current)` : `` })
        ] });
        return /* @__PURE__ */ jsx("li", { className: `ui-sf__step`, "data-state": n4, "aria-current": !R && t === C2 ? `step` : void 0, children: i2 ? /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sf__step-btn`, onClick: () => goTo(e.id), children: a2 }) : /* @__PURE__ */ jsx("span", { className: `ui-sf__step-btn`, children: a2 }) }, e.id);
      }) }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-sf__compact`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("span", { className: `ui-sf__compact-text`, children: R ? /* @__PURE__ */ jsxs(Fragment, { children: [
        `All `,
        steps_length,
        ` steps done`
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        `Step `,
        C2 + 1,
        ` of `,
        steps_length,
        /* @__PURE__ */ jsx("span", { className: `ui-sf__compact-dot`, children: `\xB7` }),
        /* @__PURE__ */ jsx("span", { className: `ui-sf__compact-title`, children: $.title })
      ] }) }, R ? `done` : C2) })
    ] }),
    /* @__PURE__ */ jsxs("form", { ref: VRef, className: `ui-sf__card`, noValidate: true, onSubmit, "aria-labelledby": R ? void 0 : `${J}-h${C2}`, children: [
      /* @__PURE__ */ jsx("div", { ref: HRef, className: `ui-sf__viewport`, children: ge.map((e) => {
        let t = e === X.index;
        return /* @__PURE__ */ jsx("div", { className: `ui-sf__pane`, "data-pane": t ? `current` : `leaving`, "data-dir": X.dir, "data-first": !KRef.current || void 0, inert: !t, "aria-hidden": !t || void 0, children: /* @__PURE__ */ jsx(FContext.Provider, { value: {
          errors: t && e === C2 ? errors : {},
          shake: t ? j : 0,
          report
        }, children: HeComponent(e) }) }, e);
      }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-sf__foot-fold`, "data-hidden": R || void 0, children: /* @__PURE__ */ jsxs("div", { className: `ui-sf__foot`, inert: R, children: [
        /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-sf__btn ui-sf__btn-ghost`, "data-hidden": C2 === 0 || void 0, disabled: C2 === 0 || P, onClick, children: [
          /* @__PURE__ */ jsx(L1Component, { d: u.back }),
          `Back`
        ] }),
        I && /* @__PURE__ */ jsx("span", { className: `ui-sf__submit-error`, role: `alert`, children: I }),
        /* @__PURE__ */ jsx("button", { ref: URef, type: `submit`, className: `ui-sf__btn ui-sf__btn-primary`, "aria-disabled": !de || P || void 0, "data-busy": P || void 0, children: /* @__PURE__ */ jsxs("span", { ref: WRef, className: `ui-sf__btn-inner`, children: [
          P && /* @__PURE__ */ jsx("span", { className: `ui-sf__spinner`, "aria-hidden": `true` }),
          /* @__PURE__ */ jsx("span", { className: `ui-sf__btn-label`, children: pe }, pe)
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-sf__sr`, "aria-live": `polite`, children: ne })
  ] });
}
function H1Component({
  name,
  label: label_1,
  hint,
  optional,
  children
}) {
  let {
    errors,
    shake,
    report
  } = n3.useContext(FContext);
  let [d, setD] = n3.useState(null);
  let [h, setH] = n3.useState(0);
  let _2 = n3.useId();
  let vRef = n3.useRef(null);
  let y = errors[name] ?? d ?? ``;
  let bRef = n3.useRef(y);
  if (y) {
    bRef.current = y;
  }
  let invalid = !!y;
  n3.useEffect(() => {
    if (shake && (errors[name] || d)) {
      s(vRef.current);
    }
  }, [shake]);
  n3.useEffect(() => {
    if (h) {
      s(vRef.current);
    }
  }, [h]);
  let flag = n3.useCallback((t) => {
    setD(t);
    report(name, t);
    if (t) {
      setH((e) => e + 1);
    }
  }, [name, report]);
  return /* @__PURE__ */ jsxs("div", { className: `ui-sf__field`, "data-invalid": invalid || void 0, children: [
    /* @__PURE__ */ jsxs("label", { className: `ui-sf__label`, htmlFor: _2, children: [
      label_1,
      optional && /* @__PURE__ */ jsx("span", { className: `ui-sf__optional`, children: `Optional` })
    ] }),
    /* @__PURE__ */ jsx("div", { ref: vRef, className: `ui-sf__control`, children: /* @__PURE__ */ jsx(PContext.Provider, { value: {
      id: _2,
      invalid,
      describedBy: invalid ? `${_2}-msg` : hint ? `${_2}-hint` : void 0,
      flag
    }, children }) }),
    /* @__PURE__ */ jsx("div", { className: `ui-sf__fold`, "data-open": invalid || void 0, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: `ui-sf__msg`, id: `${_2}-msg`, children: bRef.current }, bRef.current) }) }),
    hint && /* @__PURE__ */ jsx("div", { className: `ui-sf__fold`, "data-open": !invalid || void 0, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: `ui-sf__hint`, id: `${_2}-hint`, children: hint }) }) })
  ] });
}
function G1Component({
  prefix,
  className,
  ...rest
}) {
  let o2 = n3.useContext(PContext);
  return /* @__PURE__ */ jsxs("div", { className: i(`ui-sf__input`, className), "data-invalid": o2?.invalid || void 0, children: [
    prefix && /* @__PURE__ */ jsx("span", { className: `ui-sf__prefix`, "aria-hidden": `true`, children: prefix }),
    /* @__PURE__ */ jsx("input", { id: o2?.id, "aria-invalid": o2?.invalid || void 0, "aria-describedby": o2?.describedBy, autoComplete: `off`, spellCheck: false, ...rest })
  ] });
}
var _ = /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]{2,}$/;
function V1Component({
  value,
  onChange,
  placeholder = `name@company.com`,
  validate = (e, t) => {
    if (_.test(e)) {
      if (t.includes(e)) {
        return `Already on the list`;
      }
      return null;
    }
    return `That doesn't look like an email address`;
  },
  max
}) {
  let c2 = n3.useContext(PContext);
  let [d, setD] = n3.useState(``);
  let [m, setM] = n3.useState([]);
  let gRef = n3.useRef(null);
  let vRef = n3.useRef(null);
  let yRef = n3.useRef(value);
  yRef.current = value;
  let b = (e) => {
    let n4 = e.split(/[\s,;]+/).map((e2) => e2.trim().toLowerCase()).filter(Boolean);
    if (!n4.length) {
      return true;
    }
    let r2 = [...yRef.current];
    let i2 = [];
    let o2 = null;
    for (let e2 of n4) {
      let t = max !== void 0 && r2.length >= max ? `Up to ${max}` : validate(e2, r2);
      if (t) {
        o2 ??= t;
        i2.push(e2);
      } else {
        r2.push(e2);
      }
    }
    if (r2.length !== yRef.current.length) {
      yRef.current = r2;
      onChange(r2);
    }
    setD(i2.join(`, `));
    c2?.flag(o2);
    return !o2;
  };
  let x = (e) => {
    if (m.includes(e)) {
      return;
    }
    setM((t) => [...t, e]);
    let n4 = vRef.current?.querySelector(`[data-entry="${CSS.escape(e)}"]`);
    let r2 = () => {
      setM((t) => t.filter((t2) => t2 !== e));
      onChange(yRef.current.filter((t) => t !== e));
    };
    if (n4 && n4.animate && !o()) {
      n4.animate([{
        width: `${n4.offsetWidth}px`,
        marginRight: `0px`,
        opacity: 1,
        transform: `none`
      }, {
        width: `0px`,
        marginRight: `-6px`,
        opacity: 0,
        transform: `scale(0.85)`
      }], {
        duration: 240,
        easing: `cubic-bezier(0.22, 1, 0.36, 1)`,
        fill: `forwards`
      }).onfinish = r2;
    } else {
      r2();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `ui-sf__tags`, "data-invalid": c2?.invalid || void 0, onClick: (e) => e.target === e.currentTarget && gRef.current?.focus(), children: [
    value.length > 0 && /* @__PURE__ */ jsx("ul", { ref: vRef, className: `ui-sf__chips`, "aria-label": `Added`, children: value.map((e) => /* @__PURE__ */ jsxs("li", { className: `ui-sf__chip`, "data-entry": e, "data-leaving": m.includes(e) || void 0, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-sf__chip-text`, title: e, children: e }),
      /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sf__chip-x`, "aria-label": `Remove ${e}`, onClick: () => x(e), children: /* @__PURE__ */ jsx(L1Component, { d: u.close }) })
    ] }, e)) }),
    /* @__PURE__ */ jsx("input", { ref: gRef, id: c2?.id, type: `email`, inputMode: `email`, autoComplete: `off`, spellCheck: false, className: `ui-sf__tags-input`, placeholder: value.length ? `Add another` : placeholder, value: d, "aria-invalid": c2?.invalid || void 0, "aria-describedby": c2?.describedBy, onChange: (e) => {
      setD(e.target.value);
      c2?.flag(null);
    }, onKeyDown: (t) => {
      if (t.key === `Enter` && d.trim() || t.key === `,` || t.key === `;`) {
        t.preventDefault();
        b(d);
      } else if (t.key === `Backspace` && !d && value.length) {
        t.preventDefault();
        x(value[value.length - 1]);
      }
    }, onPaste: (e) => {
      let t = e.clipboardData.getData(`text`);
      if (/[\s,;]/.test(t.trim())) {
        e.preventDefault();
        b(`${d} ${t}`);
      }
    }, onBlur: () => d.trim() && b(d) })
  ] });
}
function Y1Component({
  value,
  onChange,
  options: options2,
  label
}) {
  let oRef = n3.useRef(null);
  let sRef = n3.useRef(null);
  n3.useLayoutEffect(() => {
    c(oRef.current, sRef.current, `[aria-checked="true"]`);
  });
  n3.useEffect(() => {
    let oRef_current = oRef.current;
    if (!oRef_current) {
      return;
    }
    let t = new ResizeObserver(() => c(oRef_current, sRef.current, `[aria-checked="true"]`));
    t.observe(oRef_current);
    return () => t.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { ref: oRef, className: `ui-sf__choices`, role: `radiogroup`, "aria-label": label, onKeyDown: (n4) => {
    let r2 = options2.findIndex((t) => t.value === value);
    let a2 = n4.key === `ArrowRight` || n4.key === `ArrowDown` ? 1 : n4.key === `ArrowLeft` || n4.key === `ArrowUp` ? -1 : 0;
    if (a2) {
      n4.preventDefault();
      let e = options2[(r2 + a2 + options2.length) % options2.length];
      onChange(e.value);
      oRef.current?.querySelector(`[data-value="${CSS.escape(e.value)}"]`)?.focus();
    } else {
      if (n4.key === `Enter`) {
        n4.preventDefault();
        n4.currentTarget.closest(`form`)?.requestSubmit();
      }
    }
  }, children: [
    /* @__PURE__ */ jsx("span", { ref: sRef, className: `ui-sf__ring`, "aria-hidden": `true` }),
    options2.map((n4) => {
      let i2 = n4.value === value;
      return /* @__PURE__ */ jsxs("button", { type: `button`, role: `radio`, "aria-checked": i2, tabIndex: i2 ? 0 : -1, "data-value": n4.value, className: `ui-sf__choice`, onClick: () => onChange(n4.value), children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-sf__choice-top`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-sf__choice-title`, children: n4.title }),
          n4.badge && /* @__PURE__ */ jsx("span", { className: `ui-sf__badge`, children: n4.badge }),
          /* @__PURE__ */ jsx("span", { className: `ui-sf__radio`, "aria-hidden": `true` })
        ] }),
        n4.aside && /* @__PURE__ */ jsx("span", { className: `ui-sf__choice-aside`, children: n4.aside }),
        n4.description && /* @__PURE__ */ jsx("span", { className: `ui-sf__choice-desc`, children: n4.description })
      ] }, n4.value);
    })
  ] });
}
function B1Component({
  rows,
  onEdit
}) {
  return /* @__PURE__ */ jsx("dl", { className: `ui-sf__review`, children: rows.map((e) => /* @__PURE__ */ jsxs("div", { className: `ui-sf__review-row`, children: [
    /* @__PURE__ */ jsx("dt", { children: e.label }),
    /* @__PURE__ */ jsx("dd", { children: e.value }),
    e.step && onEdit && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sf__edit`, "aria-label": `Edit ${e.label.toLowerCase()}`, onClick: () => onEdit(e.step), children: `Edit` })
  ] }, e.label)) });
}
function X1Component({
  title,
  description,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: `ui-sf__success`, children: [
    /* @__PURE__ */ jsx("span", { className: `ui-sf__success-check`, children: /* @__PURE__ */ jsx(D1Component, {}) }),
    /* @__PURE__ */ jsx("h2", { className: `ui-sf__heading`, tabIndex: -1, children: title }),
    description && /* @__PURE__ */ jsx("p", { className: `ui-sf__desc`, children: description }),
    children && /* @__PURE__ */ jsx("div", { className: `ui-sf__success-actions`, children })
  ] });
}
var S = `.ui-sf{--ui-sf-tray: #f0f0f0;--ui-sf-card: #ffffff;--ui-sf-line: #ececec;--ui-sf-ink: #171717;--ui-sf-text: #404040;--ui-sf-muted: #8f8f8f;--ui-sf-faint: #b5b5b5;--ui-sf-edge: #dcdcdf;--ui-sf-field: #ffffff;--ui-sf-hover: #f2f2f3;--ui-sf-chip: #f2f2f3;--ui-sf-track: #e2e2e5;--ui-sf-accent: #2f6bff;--ui-sf-accent-soft: rgba(47, 107, 255, 0.05);--ui-sf-danger: #e5484d;--ui-sf-on-ink: #ffffff;--ui-sf-focus: rgba(23, 23, 23, 0.22);--ui-sf-ring: rgba(23, 23, 23, 0.08);--ui-sf-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 520px;padding: 4px;border-radius: 20px;background: var(--ui-sf-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-sf-text);-webkit-font-smoothing: antialiased}.ui-sf *, .ui-sf *::before, .ui-sf *::after{box-sizing: border-box}:where(.ui-sf) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-sf) svg{display: block;flex: none}:where(.ui-sf) :is(h2, p, dl, dd, ul, ol){margin: 0}.ui-sf button:focus-visible{outline: 2px solid var(--ui-sf-focus);outline-offset: 2px}.ui-sf__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-sf__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-sf__draw{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 2.6;stroke-linecap: round;stroke-linejoin: round}.ui-sf__draw path{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-sf-draw 360ms var(--ui-sf-ease) 80ms forwards}.ui-sf__head{padding: 6px 6px 4px}.ui-sf__steps{position: relative}.ui-sf__list{display: grid;grid-template-columns: repeat(var(--ui-sf-n), minmax(0, 1fr));padding: 0;list-style: none}.ui-sf__step{position: relative;display: grid;justify-items: center;min-width: 0}.ui-sf__step-btn{display: inline-flex;align-items: center;gap: 5px;min-width: 0;max-width: 100%;height: 26px;padding: 0 6px;border-radius: 8px;line-height: 1;cursor: default;transition: background-color 200ms ease}button.ui-sf__step-btn{cursor: pointer}button.ui-sf__step-btn:hover{background: var(--ui-sf-ring)}.ui-sf__mark{display: inline-flex;flex: none;align-items: center;justify-content: center;min-width: 14px;font-size: 12.5px;line-height: 1;font-variant-numeric: tabular-nums;color: var(--ui-sf-faint);transition: color 260ms ease}.ui-sf__mark > span{line-height: 1;animation: ui-sf-in 260ms var(--ui-sf-ease) both}.ui-sf__mark .ui-sf__draw{width: 13px;height: 13px;stroke-width: 2.4}.ui-sf__step[data-state="current"] .ui-sf__mark{color: var(--ui-sf-ink)}.ui-sf__step[data-state="done"] .ui-sf__mark{color: var(--ui-sf-ink)}.ui-sf__step-label{overflow: hidden;max-width: 100%;font-size: 12.5px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-sf-muted);transition: color 260ms ease}.ui-sf__step[data-state="done"] .ui-sf__step-label{color: var(--ui-sf-text)}.ui-sf__step[data-state="current"] .ui-sf__step-label{color: var(--ui-sf-ink);font-weight: 500}button.ui-sf__step-btn:hover .ui-sf__step-label{color: var(--ui-sf-ink)}.ui-sf__compact{display: none;gap: 8px;padding: 0 6px}.ui-sf__compact-text{display: flex;align-items: baseline;min-width: 0;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-sf-muted);white-space: nowrap;animation: ui-sf-in 280ms var(--ui-sf-ease) both}.ui-sf__compact-dot{margin: 0 6px;color: var(--ui-sf-faint)}.ui-sf__compact-title{overflow: hidden;text-overflow: ellipsis;color: var(--ui-sf-ink);font-weight: 500}.ui-sf__card{display: grid;border-radius: 16px;background: var(--ui-sf-card);box-shadow: 0 0 0 1px var(--ui-sf-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-sf__viewport{position: relative;overflow: hidden;transition: height 380ms var(--ui-sf-ease)}.ui-sf__pane{padding: 20px 20px 8px;animation: ui-sf-enter 380ms var(--ui-sf-ease) both}.ui-sf__pane[data-dir="-1"]{animation-name: ui-sf-enter-back}.ui-sf__pane[data-first]{animation: none}.ui-sf__pane[data-pane="leaving"]{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-sf-leave 300ms var(--ui-sf-ease) both}.ui-sf__pane[data-pane="leaving"][data-dir="-1"]{animation-name: ui-sf-leave-back}.ui-sf__heading{font-size: 16px;font-weight: 600;line-height: 1.3;letter-spacing: -0.01em;color: var(--ui-sf-ink);outline: none}.ui-sf__desc{margin-top: 4px;color: var(--ui-sf-muted);text-wrap: pretty}.ui-sf__body{display: grid;gap: 14px;margin-top: 18px}.ui-sf__field{display: grid;min-width: 0}.ui-sf__label{display: flex;align-items: baseline;justify-content: space-between;gap: 8px;margin-bottom: 6px;font-size: 12.5px;font-weight: 500;color: var(--ui-sf-ink)}.ui-sf__optional{font-weight: 400;color: var(--ui-sf-muted)}.ui-sf__control{min-width: 0}.ui-sf__input, .ui-sf__tags{display: flex;align-items: center;min-width: 0;min-height: 38px;border-radius: 10px;background: var(--ui-sf-field);box-shadow: inset 0 0 0 1px var(--ui-sf-edge), 0 1px 2px rgba(0, 0, 0, 0.03);transition: box-shadow 180ms ease;cursor: text}.ui-sf__input:hover, .ui-sf__tags:hover{box-shadow: inset 0 0 0 1px var(--ui-sf-faint), 0 1px 2px rgba(0, 0, 0, 0.03)}.ui-sf__input:focus-within, .ui-sf__tags:focus-within{box-shadow: inset 0 0 0 1px var(--ui-sf-ink), 0 0 0 3px var(--ui-sf-ring)}.ui-sf__input[data-invalid], .ui-sf__tags[data-invalid]{box-shadow: inset 0 0 0 1px var(--ui-sf-danger)}.ui-sf__input[data-invalid]:focus-within, .ui-sf__tags[data-invalid]:focus-within{box-shadow: inset 0 0 0 1px var(--ui-sf-danger), 0 0 0 3px rgba(229, 72, 77, 0.12)}.ui-sf__input input, .ui-sf__tags-input{flex: 1;min-width: 0;height: 36px;padding: 0 12px;border: 0;outline: none;background: none;font: inherit;font-size: 14px;color: var(--ui-sf-ink)}.ui-sf__input input::placeholder, .ui-sf__tags-input::placeholder{color: var(--ui-sf-faint)}.ui-sf__prefix{flex: none;padding-left: 12px;font-size: 14px;color: var(--ui-sf-muted);white-space: nowrap;user-select: none}.ui-sf__prefix + input{padding-left: 1px}.ui-sf__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-sf-ease), opacity 200ms ease}.ui-sf__fold[data-open]{grid-template-rows: 1fr;opacity: 1}.ui-sf__fold > div{min-height: 0;overflow: hidden}.ui-sf__msg, .ui-sf__hint{padding-top: 6px;font-size: 12.5px;text-wrap: pretty}.ui-sf__msg{color: var(--ui-sf-danger);animation: ui-sf-in 240ms var(--ui-sf-ease) both}.ui-sf__hint{color: var(--ui-sf-muted)}.ui-sf__tags{flex-wrap: wrap;gap: 6px;padding: 5px}.ui-sf__chips{display: contents;padding: 0;list-style: none}.ui-sf__chip{display: inline-flex;align-items: center;gap: 2px;min-width: 0;max-width: 100%;height: 28px;padding: 0 2px 0 10px;overflow: hidden;border-radius: 8px;background: var(--ui-sf-chip);font-size: 13px;color: var(--ui-sf-ink);white-space: nowrap;animation: ui-sf-chip 300ms var(--ui-sf-ease) both}.ui-sf__chip[data-leaving]{pointer-events: none}.ui-sf__chip-text{overflow: hidden;text-overflow: ellipsis}.ui-sf__chip-x{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 6px;color: var(--ui-sf-muted);transition: background-color 140ms ease, color 140ms ease}.ui-sf__chip-x .ui-sf__glyph{width: 13px;height: 13px}.ui-sf__chip-x:hover{background: var(--ui-sf-track);color: var(--ui-sf-ink)}.ui-sf__chip[data-leaving] .ui-sf__chip-x{background: none}.ui-sf__tags-input{flex: 1 1 140px;height: 28px;padding: 0 7px}.ui-sf__choices{position: relative;display: grid;grid-auto-columns: minmax(0, 1fr);grid-auto-flow: column;gap: 8px}.ui-sf__ring{position: absolute;top: 0;left: 0;z-index: 2;border-radius: 12px;box-shadow: inset 0 0 0 1.5px var(--ui-sf-accent), 0 0 0 3px rgba(47, 107, 255, 0.1);opacity: 0;pointer-events: none;transition: transform 380ms var(--ui-sf-ease), width 380ms var(--ui-sf-ease), height 380ms var(--ui-sf-ease), opacity 200ms ease}.ui-sf__choice{position: relative;display: grid;align-content: start;gap: 2px;min-width: 0;padding: 12px;border-radius: 12px;background: var(--ui-sf-field);box-shadow: inset 0 0 0 1px var(--ui-sf-edge);text-align: left;transition: background-color 200ms ease, box-shadow 200ms ease}.ui-sf__choice:hover{box-shadow: inset 0 0 0 1px var(--ui-sf-faint)}.ui-sf__choice[aria-checked="true"]{background: var(--ui-sf-accent-soft);box-shadow: inset 0 0 0 1px transparent}.ui-sf__choice:focus-visible{outline-offset: 3px}.ui-sf__choice-top{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-sf__choice-title{overflow: hidden;font-weight: 600;color: var(--ui-sf-ink);white-space: nowrap;text-overflow: ellipsis}.ui-sf__badge{flex: none;padding: 1px 6px;border-radius: 6px;background: var(--ui-sf-chip);font-size: 11px;font-weight: 500;color: var(--ui-sf-text)}.ui-sf__radio{position: relative;flex: none;width: 16px;height: 16px;margin-left: auto;border-radius: 50%;box-shadow: inset 0 0 0 1.5px var(--ui-sf-edge);transition: box-shadow 220ms ease}.ui-sf__radio::after{content: "";position: absolute;inset: 4px;border-radius: 50%;background: var(--ui-sf-accent);transform: scale(0);transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-sf__choice[aria-checked="true"] .ui-sf__radio{box-shadow: inset 0 0 0 1.5px var(--ui-sf-accent)}.ui-sf__choice[aria-checked="true"] .ui-sf__radio::after{transform: scale(1)}.ui-sf__choice-aside{font-size: 13px;font-variant-numeric: tabular-nums;color: var(--ui-sf-ink)}.ui-sf__choice-desc{margin-top: 4px;font-size: 12px;line-height: 1.4;color: var(--ui-sf-muted);text-wrap: pretty}.ui-sf__review{display: grid;border-radius: 12px;box-shadow: inset 0 0 0 1px var(--ui-sf-line)}.ui-sf__review-row{display: grid;grid-template-columns: 96px minmax(0, 1fr) auto;align-items: baseline;gap: 12px;padding: 11px 8px 11px 14px}.ui-sf__review-row + .ui-sf__review-row{border-top: 1px solid var(--ui-sf-line)}.ui-sf__review dt{font-size: 12.5px;color: var(--ui-sf-muted)}.ui-sf__review dd{min-width: 0;color: var(--ui-sf-ink);overflow-wrap: break-word}.ui-sf__edit{height: 26px;margin: -4px 0;padding: 0 8px;border-radius: 7px;font-size: 12.5px;font-weight: 500;color: var(--ui-sf-text);transition: background-color 140ms ease, color 140ms ease}.ui-sf__edit:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__success{display: grid;justify-items: center;padding: 20px 0 14px;text-align: center}.ui-sf__success-check{display: grid;place-items: center;width: 44px;height: 44px;margin-bottom: 14px;border-radius: 50%;background: var(--ui-sf-ink);color: var(--ui-sf-on-ink);box-shadow: 0 0 0 6px var(--ui-sf-ring);animation: ui-sf-pop 520ms cubic-bezier(0.34, 1.56, 0.64, 1) 120ms both}.ui-sf__success-check .ui-sf__draw{width: 20px;height: 20px}.ui-sf__success-check .ui-sf__draw path{animation-delay: 320ms}.ui-sf__success .ui-sf__heading{animation: ui-sf-in 340ms var(--ui-sf-ease) 220ms both}.ui-sf__success .ui-sf__desc{max-width: 40ch;text-wrap: balance;animation: ui-sf-in 340ms var(--ui-sf-ease) 290ms both}.ui-sf__success-actions{display: flex;flex-wrap: wrap;justify-content: center;gap: 8px;margin-top: 16px;animation: ui-sf-in 340ms var(--ui-sf-ease) 360ms both}.ui-sf__foot-fold{position: sticky;bottom: 0;z-index: 3;display: grid;grid-template-rows: 1fr;border-radius: 0 0 16px 16px;background: var(--ui-sf-card);transition: grid-template-rows 360ms var(--ui-sf-ease), opacity 220ms ease}.ui-sf__foot-fold[data-hidden]{grid-template-rows: 0fr;opacity: 0}.ui-sf__foot{display: flex;align-items: center;gap: 10px;min-height: 0;overflow: hidden;padding: 12px 16px 16px}.ui-sf__btn{display: inline-flex;align-items: center;justify-content: center;flex: none;height: 36px;border-radius: 10px;font-weight: 500;white-space: nowrap;transition: background-color 140ms ease, opacity 200ms ease, transform 140ms ease, width 320ms var(--ui-sf-ease), visibility 200ms}.ui-sf__btn-ghost{gap: 4px;padding: 0 12px 0 8px;color: var(--ui-sf-text)}.ui-sf__btn-ghost:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__btn-ghost[data-hidden]{opacity: 0;visibility: hidden}.ui-sf__btn-primary{margin-left: auto;overflow: hidden;background: var(--ui-sf-ink);color: var(--ui-sf-on-ink)}.ui-sf__btn-primary:hover{opacity: 0.88}.ui-sf__btn-primary:active{transform: scale(0.97)}.ui-sf__btn-primary[aria-disabled="true"]{opacity: 0.4}.ui-sf__btn-primary[data-busy]{opacity: 0.75;cursor: progress}.ui-sf__btn-inner{display: inline-flex;flex: none;align-items: center;gap: 8px;padding: 0 15px}.ui-sf__btn-label{animation: ui-sf-in 260ms var(--ui-sf-ease) both}.ui-sf__btn-secondary{padding: 0 14px;color: var(--ui-sf-text);box-shadow: inset 0 0 0 1px var(--ui-sf-edge)}.ui-sf__btn-secondary:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__spinner{width: 13px;height: 13px;border-radius: 50%;border: 1.8px solid currentColor;border-right-color: transparent;animation: ui-sf-spin 700ms linear infinite}.ui-sf__submit-error{min-width: 0;font-size: 12.5px;color: var(--ui-sf-danger);animation: ui-sf-in 240ms var(--ui-sf-ease) both}@keyframes ui-sf-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-sf-enter{from{opacity: 0;transform: translateX(28px)}to{opacity: 1;transform: none}}@keyframes ui-sf-enter-back{from{opacity: 0;transform: translateX(-28px)}to{opacity: 1;transform: none}}@keyframes ui-sf-leave{to{opacity: 0;transform: translateX(-28px)}}@keyframes ui-sf-leave-back{to{opacity: 0;transform: translateX(28px)}}@keyframes ui-sf-draw{to{stroke-dashoffset: 0}}@keyframes ui-sf-pop{0%{opacity: 0;transform: scale(0.4)}60%{opacity: 1;transform: scale(1.08)}100%{opacity: 1;transform: scale(1)}}@keyframes ui-sf-chip{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@keyframes ui-sf-spin{to{transform: rotate(360deg)}}@container (max-width: 420px){.ui-sf__head{padding: 12px 8px 12px}.ui-sf__steps{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%)}.ui-sf__compact{display: grid}.ui-sf__pane{padding: 18px 16px 6px}.ui-sf__foot{padding: 12px 12px 12px}.ui-sf__btn{height: 40px}.ui-sf__choices{grid-template-columns: minmax(0, 1fr);grid-auto-flow: row}.ui-sf__choice{grid-template-columns: minmax(0, 1fr) auto;column-gap: 10px}.ui-sf__choice-top{grid-column: 1}.ui-sf__choice-aside{grid-column: 2;grid-row: 1;align-self: center}.ui-sf__choice-desc{grid-column: 1 / -1;margin-top: 2px}.ui-sf__radio{order: -1;margin-left: 0;margin-right: 2px}.ui-sf__review-row{grid-template-columns: minmax(0, 1fr) auto;row-gap: 2px;padding-left: 12px}.ui-sf__review dt{grid-column: 1}.ui-sf__review dd{grid-column: 1;grid-row: 2}.ui-sf__edit{grid-column: 2;grid-row: 1 / span 2;align-self: center;margin: 0}}@media (hover: none) and (pointer: coarse){.ui-sf__input input, .ui-sf__tags-input, .ui-sf__prefix{font-size: 16px}.ui-sf__input, .ui-sf__tags{min-height: 44px}.ui-sf__input input{height: 42px}.ui-sf__chip{height: 32px}.ui-sf__chip-x{width: 30px;height: 30px}.ui-sf__btn{height: 42px}.ui-sf__edit{height: 36px;padding: 0 12px}.ui-sf__step-btn{padding: 4px;margin: -4px 0}}@media (prefers-reduced-motion: reduce){.ui-sf *, .ui-sf *::before, .ui-sf *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-sf{--ui-sf-tray: #111113;--ui-sf-card: #19191b;--ui-sf-line: #2a2a2e;--ui-sf-ink: #ededed;--ui-sf-text: #c8c8cc;--ui-sf-muted: #8b8b92;--ui-sf-faint: #5c5c63;--ui-sf-edge: #34343a;--ui-sf-field: #1d1d20;--ui-sf-hover: #232326;--ui-sf-chip: #2a2a2e;--ui-sf-track: #2e2e33;--ui-sf-accent: #6d8bff;--ui-sf-accent-soft: rgba(109, 139, 255, 0.08);--ui-sf-danger: #ff6369;--ui-sf-on-ink: #111113;--ui-sf-focus: rgba(255, 255, 255, 0.3);--ui-sf-ring: rgba(255, 255, 255, 0.08)}`;
var C = (e) => e.toLowerCase().normalize(`NFKD`).replace(/[̀-ͯ]/g, ``).replace(/[^a-z0-9]+/g, `-`).replace(/^-+|-+$/g, ``).slice(0, 32);
var options = [{
  value: `free`,
  title: `Free`,
  aside: `$0`,
  description: `Up to 3 members and 5 projects`
}, {
  value: `pro`,
  title: `Pro`,
  aside: `$12\xA0/\xA0seat`,
  description: `Unlimited projects, guests and history`,
  badge: `Popular`
}, {
  value: `business`,
  title: `Business`,
  aside: `$24\xA0/\xA0seat`,
  description: `SSO, audit log and priority support`
}];
var T = `Northwind Studio`;
function EComponent({
  ctx,
  autoplay
}) {
  let {
    values,
    setValues
  } = ctx;
  let oRef = n3.useRef(0);
  let onFocus = () => {
    clearTimeout(oRef.current);
    autoplay.current = false;
  };
  let c2 = (e) => setValues({
    name: e,
    ...values.slugEdited ? {} : {
      slug: C(e)
    }
  });
  n3.useEffect(() => {
    if (!autoplay.current) {
      return;
    }
    let e = 0;
    let n4 = () => {
      e += 1;
      setValues({
        name: T.slice(0, e),
        slug: C(T.slice(0, e))
      });
      if (e < 16) {
        oRef.current = window.setTimeout(n4, 55 + Math.random() * 45);
      } else {
        autoplay.current = false;
      }
    };
    oRef.current = window.setTimeout(n4, 650);
    return () => clearTimeout(oRef.current);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(H1Component, { name: `name`, label: `Workspace name`, children: /* @__PURE__ */ jsx(G1Component, { value: values.name, placeholder: `Acme Inc.`, maxLength: 48, onFocus, onChange: (e) => c2(e.target.value) }) }),
    /* @__PURE__ */ jsx(H1Component, { name: `slug`, label: `Workspace URL`, hint: `Lowercase letters, numbers and dashes`, children: /* @__PURE__ */ jsx(G1Component, { prefix: `affect.app/`, value: values.slug, placeholder: `acme`, maxLength: 32, onFocus, onChange: (e) => setValues({
      slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ``),
      slugEdited: true
    }) }) })
  ] });
}
function DComponent() {
  let eRef = n3.useRef(true);
  return /* @__PURE__ */ jsx("div", { className: `stepper-form-demo`, children: /* @__PURE__ */ jsx(M1Component, { steps: [{
    id: `workspace`,
    title: `Workspace`,
    heading: `Name your workspace`,
    description: `This is where your team's projects live.`,
    render: (ctx) => /* @__PURE__ */ jsx(EComponent, { ctx, autoplay: eRef }),
    validate: (e) => ({
      name: e.name.trim().length < 2 ? `Give your workspace a name` : void 0,
      slug: e.slug.length < 3 ? `Use at least 3 characters` : void 0
    })
  }, {
    id: `team`,
    title: `Team`,
    heading: `Invite your teammates`,
    description: `They'll get an email with a link to join.`,
    render: ({
      values,
      setValues
    }) => /* @__PURE__ */ jsx(H1Component, { name: `invites`, label: `Email addresses`, hint: `Press Enter or comma to add`, optional: true, children: /* @__PURE__ */ jsx(V1Component, { value: values.invites, max: 20, onChange: (invites) => setValues({
      invites
    }) }) })
  }, {
    id: `plan`,
    title: `Plan`,
    heading: `Pick a plan`,
    description: `Every plan starts with a 14\u2011day trial.`,
    render: ({
      values,
      setValues
    }) => /* @__PURE__ */ jsx(Y1Component, { label: `Plan`, value: values.plan, options, onChange: (plan) => setValues({
      plan
    }) })
  }, {
    id: `review`,
    title: `Review`,
    heading: `Review and create`,
    description: `Everything can be changed later in settings.`,
    render: ({
      values,
      goTo
    }) => {
      let n4 = options.find((t) => t.value === values.plan);
      let length = values.invites.length;
      return /* @__PURE__ */ jsx(B1Component, { onEdit: goTo, rows: [{
        label: `Workspace`,
        value: /* @__PURE__ */ jsxs(Fragment, { children: [
          values.name,
          /* @__PURE__ */ jsxs("span", { className: `sf-demo__sub`, children: [
            `affect.app/`,
            values.slug
          ] })
        ] }),
        step: `workspace`
      }, {
        label: `Teammates`,
        value: length ? /* @__PURE__ */ jsxs(Fragment, { children: [
          length,
          ` `,
          length === 1 ? `invite` : `invites`,
          /* @__PURE__ */ jsx("span", { className: `sf-demo__sub`, children: values.invites.join(`, `) })
        ] }) : `Just you for now`,
        step: `team`
      }, {
        label: `Plan`,
        value: /* @__PURE__ */ jsxs(Fragment, { children: [
          n4.title,
          /* @__PURE__ */ jsxs("span", { className: `sf-demo__muted`, children: [
            ` \xB7 `,
            n4.aside
          ] })
        ] }),
        step: `plan`
      }] });
    }
  }], initialValues: {
    name: ``,
    slug: ``,
    slugEdited: false,
    invites: [`maya@northwind.studio`, `leo@northwind.studio`],
    plan: `pro`
  }, submitLabel: `Create workspace`, onComplete: () => new Promise((resolve) => setTimeout(resolve, 1100)), success: (t, n4) => /* @__PURE__ */ jsx(X1Component, { title: `${t.name} is ready`, description: t.invites.length ? `${t.invites.length} ${t.invites.length === 1 ? `invite is` : `invites are`} on the way. Your trial runs for 14\xA0days.` : `Your trial runs for 14\xA0days.`, children: /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sf__btn ui-sf__btn-secondary`, onClick: () => {
    eRef.current = true;
    n4();
  }, children: `Start over` }) }) }) });
}

export {
  DComponent
};
