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

// reconstructed/demo-CctwMXFR.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`blue`, `violet`, `amber`, `green`, `red`, `gray`];
var a = /\{([A-Za-z0-9_-]+)\}/g;
var o = (body) => {
  let t = [];
  let n4 = 0;
  for (let r2 of body.matchAll(a)) {
    if (r2.index > n4) {
      t.push({
        text: body.slice(n4, r2.index)
      });
    }
    let i2 = r2.index + r2[0].length;
    let tail = /^[.,;:!?)\]"'’…]+/.exec(body.slice(i2))?.[0] ?? ``;
    t.push({
      name: r2[1],
      tail
    });
    n4 = i2 + tail.length;
  }
  if (n4 < body.length) {
    t.push({
      text: body.slice(n4)
    });
  }
  return t;
};
var s = (body) => [...new Set([...body.matchAll(a)].map((e) => e[1]))];
var c = (body, values) => body.replace(a, (e, n4) => {
  if (values[n4]?.trim()) {
    return values[n4];
  }
  return e;
});
var l = (e) => Math.max(1, Math.round(e.length / 4));
var u = (e) => {
  let t = {};
  for (let n4 of s(e.body)) {
    t[n4] = e.variables?.[n4]?.default ?? ``;
  }
  return t;
};
var d = (e) => 1 - (1 - e) ** 4;
var f = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function useP(e, t) {
  let [r2, setR] = n3.useState(e);
  let aRef = n3.useRef(e);
  n3.useEffect(() => {
    let aRef_current = aRef.current;
    if (f() || aRef_current === e) {
      aRef.current = e;
      setR(e);
      return;
    }
    let r3 = performance.now();
    let o2 = 0;
    let s2 = (c2) => {
      let l2 = Math.min(1, (c2 - r3) / t);
      aRef.current = aRef_current + (e - aRef_current) * d(l2);
      setR(aRef.current);
      if (l2 < 1) {
        o2 = requestAnimationFrame(s2);
      }
    };
    o2 = requestAnimationFrame(s2);
    return () => cancelAnimationFrame(o2);
  }, [e, t]);
  return r2;
}
function M1Component({
  id,
  tone,
  children
}) {
  let aRef = n3.useRef({
    id,
    tone,
    node: children
  });
  let [o2, setO] = n3.useState(id);
  let [c2, setC] = n3.useState(null);
  if (o2 !== id) {
    setO(id);
    setC(aRef.current);
  }
  aRef.current = {
    id,
    tone,
    node: children
  };
  n3.useEffect(() => {
    if (!c2) {
      return;
    }
    let e = window.setTimeout(() => setC(null), 260);
    return () => window.clearTimeout(e);
  }, [c2]);
  return /* @__PURE__ */ jsxs("span", { className: `ui-pli__swap`, children: [
    c2 && /* @__PURE__ */ jsx("span", { className: `ui-pli__swap-item`, "data-out": ``, "data-tone": c2.tone, "aria-hidden": `true`, children: c2.node }, `out-${c2.id}`),
    /* @__PURE__ */ jsx("span", { className: `ui-pli__swap-item`, "data-tone": tone, children }, id)
  ] });
}
var h = {
  stroke: `currentColor`,
  strokeWidth: 1.4,
  strokeLinecap: `round`,
  strokeLinejoin: `round`
};
var G1Component = () => /* @__PURE__ */ jsxs("svg", { width: `13`, height: `13`, viewBox: `0 0 13 13`, fill: `none`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `5.8`, cy: `5.8`, r: `3.8`, ...h }),
  /* @__PURE__ */ jsx("path", { d: `m8.6 8.6 2.4 2.4`, ...h })
] });
var EeComponent = () => /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { x: `3.8`, y: `3.8`, width: `6.4`, height: `6.4`, rx: `1.6`, ...h }),
  /* @__PURE__ */ jsx("path", { d: `M8.2 3.6V3.2A1.4 1.4 0 0 0 6.8 1.8H3.2a1.4 1.4 0 0 0-1.4 1.4v3.6a1.4 1.4 0 0 0 1.4 1.4h.4`, ...h })
] });
var TeComponent = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m2.6 6.3 2.2 2.2 4.6-5`, ...h, strokeWidth: 1.6 }) });
var NeComponent = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M2.5 6h7M6.5 3l3 3-3 3`, ...h }) });
function Component({
  template,
  tone,
  values,
  flash,
  idBase,
  onChange,
  onHint,
  onEnter,
  out
}) {
  let p = o(template.body);
  let m = s(template.body);
  let length = m.filter((e) => values[e]?.trim()).length;
  let g = (name) => {
    if (flash && flash.name === name) {
      if (flash.n % 2) {
        return `a`;
      }
      return `b`;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `ui-pli__panel`, "data-out": out ? `` : void 0, "aria-hidden": out || void 0, inert: out, children: [
    /* @__PURE__ */ jsxs("div", { className: `ui-pli__panel-head`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-pli__panel-title`, children: template.title }),
      template.category && /* @__PURE__ */ jsx("span", { className: `ui-pli__tag`, "data-tone": tone, children: template.category }),
      m.length > 0 && /* @__PURE__ */ jsxs("span", { className: `ui-pli__count`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-pli__bars`, "aria-hidden": `true`, children: m.map((e) => /* @__PURE__ */ jsx("span", { className: `ui-pli__bar`, "data-on": values[e]?.trim() ? `` : void 0 }, e)) }),
        length,
        ` of `,
        m.length,
        ` filled`
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: `ui-pli__body`, children: p.map((t, a2) => {
      if (`text` in t) {
        return /* @__PURE__ */ jsx(n3.Fragment, { children: t.text }, a2);
      }
      return /* @__PURE__ */ jsxs("span", { className: `ui-pli__glue`, children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-pli__token`, "data-filled": values[t.name]?.trim() ? `` : void 0, "data-flash": g(t.name), onPointerEnter: (e) => e.pointerType === `mouse` && onHint?.(t.name), onPointerLeave: (e) => e.pointerType === `mouse` && onHint?.(null), children: [
          /* @__PURE__ */ jsx("span", { className: `ui-pli__sizer`, "aria-hidden": `true`, children: values[t.name] || t.name }),
          /* @__PURE__ */ jsx("input", { className: `ui-pli__input`, "data-var": t.name, size: 1, value: values[t.name] ?? ``, placeholder: t.name, "aria-label": template.variables?.[t.name]?.description ? `${t.name} \u2013 ${template.variables[t.name].description}` : t.name, spellCheck: false, autoComplete: `off`, onChange: (e) => onChange?.(t.name, e.target.value), onFocus: () => onHint?.(t.name), onBlur: () => onHint?.(null), onKeyDown: (e) => {
            if (e.key === `Enter`) {
              e.preventDefault();
              onEnter?.(t.name);
            }
          } })
        ] }),
        t.tail
      ] }, a2);
    }) }),
    /* @__PURE__ */ jsx("div", { className: `ui-pli__label`, id: `${idBase}-preview`, children: `Preview` }),
    /* @__PURE__ */ jsx("div", { className: `ui-pli__preview`, "aria-labelledby": `${idBase}-preview`, role: `region`, children: p.map((e, t) => {
      if (`text` in e) {
        return /* @__PURE__ */ jsx(n3.Fragment, { children: e.text }, t);
      }
      return /* @__PURE__ */ jsxs("span", { className: `ui-pli__glue`, children: [
        values[e.name]?.trim() ? /* @__PURE__ */ jsx("span", { className: `ui-pli__fill`, "data-flash": g(e.name), children: values[e.name] }) : /* @__PURE__ */ jsx("span", { className: `ui-pli__hole`, children: `{${e.name}}` }),
        e.tail
      ] }, t);
    }) })
  ] });
}
function V1Component({
  templates: templates2,
  value,
  defaultValue,
  onSelect,
  onUse,
  onCopy,
  title = `Prompts`,
  useLabel = `Use prompt`,
  className
}) {
  let idBase = n3.useId();
  let [S, setS] = n3.useState(defaultValue ?? templates2[0]?.id);
  let ae = value ?? S;
  let C = templates2.find((e) => e.id === ae) ?? templates2[0];
  let [w, setW] = n3.useState(``);
  let [oe, setOe] = n3.useState({});
  let E = (e) => ({
    ...u(e),
    ...oe[e.id]
  });
  let [flash, setFlash] = n3.useState(null);
  let [O, setO] = n3.useState(null);
  let [le, setLe] = n3.useState(false);
  let [j, setJ] = n3.useState(null);
  let [N, setN] = n3.useState(``);
  let F = (() => {
    let t = /* @__PURE__ */ new Map();
    for (let n4 of templates2) {
      if (n4.category && !t.has(n4.category)) {
        t.set(n4.category, i[t.size % i.length]);
      }
    }
    return (e) => e.tone ?? t.get(e.category ?? ``) ?? `gray`;
  })();
  let I = w.trim().toLowerCase();
  let L = I ? templates2.filter((e) => [e.title, e.category ?? ``, e.body].some((e2) => e2.toLowerCase().includes(I))) : templates2;
  let R = (e) => {
    if (e !== ae) {
      if (value === void 0) {
        setS(e);
      }
      onSelect?.(e);
    }
  };
  let [z, setZ] = n3.useState(null);
  let [V, setV] = n3.useState(C?.id);
  if (C && V !== C.id) {
    if (V && !f()) {
      setZ({
        id: V,
        key: Date.now()
      });
    }
    setV(C.id);
    setO(null);
    setFlash(null);
  }
  n3.useEffect(() => {
    if (!z) {
      return;
    }
    let e = window.setTimeout(() => setZ(null), 260);
    return () => window.clearTimeout(e);
  }, [z]);
  let H = z ? templates2.find((e) => e.id === z.id) : void 0;
  let URef = n3.useRef(null);
  let WRef = n3.useRef(/* @__PURE__ */ new Map());
  let [G, setG] = n3.useState({
    y: 0,
    h: 0,
    on: false,
    moved: false
  });
  let fe = L.map((e) => e.id).join(`|`);
  n3.useLayoutEffect(() => {
    let e = () => {
      let e2 = C ? WRef.current.get(C.id) : void 0;
      setG((t) => {
        if (e2) {
          return {
            y: e2.offsetTop,
            h: e2.offsetHeight,
            on: true,
            moved: t.on
          };
        }
        return {
          ...t,
          on: false,
          moved: false
        };
      });
    };
    e();
    let URef_current = URef.current;
    if (!URef_current || typeof ResizeObserver > `u`) {
      return;
    }
    let n4 = new ResizeObserver(e);
    n4.observe(URef_current);
    return () => n4.disconnect();
  }, [C?.id, fe]);
  let onKeyDown = (e) => {
    if (!L.length) {
      return;
    }
    let t = L.findIndex((e2) => e2.id === C?.id);
    let n4 = -1;
    if (e.key === `ArrowDown`) {
      n4 = t < 0 ? 0 : Math.min(L.length - 1, t + 1);
    } else if (e.key === `ArrowUp`) {
      n4 = t < 0 ? L.length - 1 : Math.max(0, t - 1);
    } else if (e.key === `Home`) {
      n4 = 0;
    } else if (e.key === `End`) {
      n4 = L.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    R(L[n4].id);
    WRef.current.get(L[n4].id)?.focus();
  };
  let values = C ? E(C) : {};
  let q = C ? s(C.body) : [];
  let J = q.filter((e) => !values[e]?.trim());
  let Y = !!C && J.length === 0;
  let X = C ? c(C.body, values) : ``;
  let me = useP(l(X), 420);
  let onChange = (e, t) => {
    if (!C) {
      return;
    }
    let n4 = C.id;
    setOe((r2) => ({
      ...r2,
      [n4]: {
        ...E(C),
        ...r2[n4],
        [e]: t
      }
    }));
    setFlash((t2) => ({
      name: e,
      n: (t2?.n ?? 0) + 1
    }));
  };
  let [ge, setGe] = n3.useState(0);
  let veRef = n3.useRef(Y);
  let yeRef = n3.useRef(C?.id);
  n3.useEffect(() => {
    if (Y && !veRef.current && yeRef.current === C?.id) {
      setGe((e) => e + 1);
      setN(`All variables filled`);
    }
    veRef.current = Y;
    yeRef.current = C?.id;
  }, [Y, C?.id]);
  let beRef = n3.useRef(null);
  let onEnter = (e) => {
    let t = [...beRef.current?.querySelectorAll(`.ui-pli__panel:not([data-out]) .ui-pli__input`) ?? []];
    let n4 = t.findIndex((t2) => t2.dataset.var === e);
    let r2 = [...t.slice(n4 + 1), ...t.slice(0, n4)].find((e2) => !e2.value.trim());
    if (r2) {
      r2.focus();
    } else if (Y) {
      onClick_1();
    }
  };
  let onClick = async () => {
    try {
      await navigator.clipboard?.writeText(X);
    } catch {
    }
    onCopy?.(X);
    setJ({
      id: Date.now(),
      kind: `copied`
    });
    setN(`Prompt copied`);
  };
  let onClick_1 = () => {
    if (Y && C) {
      onUse?.(X, C, values);
      setJ({
        id: Date.now(),
        kind: `used`
      });
      setN(`${C.title} used`);
    }
  };
  n3.useEffect(() => {
    if (!j) {
      return;
    }
    let e = window.setTimeout(() => setJ(null), 1800);
    return () => window.clearTimeout(e);
  }, [j]);
  n3.useEffect(() => {
    if (!N) {
      return;
    }
    let e = window.setTimeout(() => setN(``), 2e3);
    return () => window.clearTimeout(e);
  }, [N]);
  let Z = /* @__PURE__ */ jsxs(Fragment, { children: [
    `~`,
    Math.round(me),
    ` tokens`
  ] });
  let id = `tokens`;
  let tone;
  let $ = O && q.includes(O) ? O : null;
  if (j) {
    Z = j.kind === `copied` ? `Copied to clipboard` : `Prompt sent`;
    id = `${j.kind}-${j.id}`;
    tone = `ok`;
  } else if ($) {
    let e = C?.variables?.[$]?.description;
    Z = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: $ }),
      ` \xB7 `,
      e ?? (values[$]?.trim() ? `filled` : `fill this in`)
    ] });
    id = `hint-${$}`;
  } else {
    if (le && !Y) {
      Z = `Fill ${J.length} more to use`;
      id = `missing`;
    }
  }
  return /* @__PURE__ */ jsxs("div", { ref: beRef, className: [`ui-pli`, className].filter(Boolean).join(` `), role: `group`, "aria-labelledby": `${idBase}-title`, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-prompt-library`, precedence: `default`, children: re }),
    /* @__PURE__ */ jsxs("div", { className: `ui-pli__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-pli__side`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-pli__side-head`, children: [
          /* @__PURE__ */ jsx("span", { id: `${idBase}-title`, className: `ui-pli__title`, children: title }),
          /* @__PURE__ */ jsx("span", { className: `ui-pli__total`, children: templates2.length })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: `ui-pli__search`, children: [
          /* @__PURE__ */ jsx(G1Component, {}),
          /* @__PURE__ */ jsx("input", { type: `search`, value: w, placeholder: `Search templates`, "aria-label": `Search templates`, "aria-controls": `${idBase}-list`, onChange: (e) => setW(e.target.value), onKeyDown: (e) => {
            if (e.key === `ArrowDown` && L.length) {
              e.preventDefault();
              let t = L.find((e2) => e2.id === C?.id) ?? L[0];
              R(t.id);
              WRef.current.get(t.id)?.focus();
            } else {
              if (e.key === `Escape` && w) {
                e.preventDefault();
                setW(``);
              }
            }
          } })
        ] }),
        /* @__PURE__ */ jsxs("div", { ref: URef, id: `${idBase}-list`, className: `ui-pli__list`, role: `listbox`, "aria-label": `Templates`, onKeyDown, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-pli__glide`, "aria-hidden": `true`, "data-on": G.on ? `` : void 0, "data-moved": G.moved ? `` : void 0, style: {
            transform: `translateY(${G.y}px)`,
            height: G.h
          } }),
          L.map((e) => {
            let t = e.id === C?.id;
            let n4 = t || !L.some((e2) => e2.id === C?.id) && e === L[0];
            return /* @__PURE__ */ jsxs("div", { ref: (t2) => {
              if (t2) {
                WRef.current.set(e.id, t2);
              } else {
                WRef.current.delete(e.id);
              }
            }, className: `ui-pli__option`, role: `option`, "aria-selected": t, tabIndex: n4 ? 0 : -1, onClick: () => R(e.id), onKeyDown: (t2) => {
              if (t2.key === `Enter` || t2.key === ` `) {
                t2.preventDefault();
                R(e.id);
              }
            }, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-pli__option-title`, children: e.title }),
              e.category && /* @__PURE__ */ jsx("span", { className: `ui-pli__tag`, "data-tone": F(e), children: e.category })
            ] }, e.id);
          }),
          L.length === 0 && /* @__PURE__ */ jsx("div", { className: `ui-pli__empty`, children: `No templates match` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-pli__main`, children: [
        H && /* @__PURE__ */ jsx(Component, { template: H, tone: F(H), values: E(H), flash: null, idBase: `${idBase}-out`, out: true }, `out-${z.key}`),
        C && /* @__PURE__ */ jsx(Component, { template: C, tone: F(C), values, flash, idBase, onChange, onHint: setO, onEnter }, C.id)
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ui-pli__foot`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-pli__caption`, children: /* @__PURE__ */ jsx(M1Component, { id, tone, children: Z }) }),
      /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-pli__copy`, onClick, "aria-label": `Copy prompt`, disabled: !C, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-pli__copy-icon`, children: j?.kind === `copied` ? /* @__PURE__ */ jsx(TeComponent, {}) : /* @__PURE__ */ jsx(EeComponent, {}) }, j?.kind === `copied` ? `done` : `copy`),
        /* @__PURE__ */ jsx("span", { className: `ui-pli__copy-text`, children: `Copy` })
      ] }),
      /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-pli__use`, "aria-disabled": !Y, "data-pulse": ge ? ge % 2 ? `a` : `b` : void 0, onClick: onClick_1, onPointerEnter: () => setLe(true), onPointerLeave: () => setLe(false), onFocus: () => setLe(true), onBlur: () => setLe(false), children: [
        useLabel,
        /* @__PURE__ */ jsx(NeComponent, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-pli__sr`, role: `status`, "aria-live": `polite`, children: N })
  ] });
}
var re = `.ui-pli{--ui-pli-tray: #f0f0f0;--ui-pli-card: #ffffff;--ui-pli-line: #ececec;--ui-pli-ink: #171717;--ui-pli-text: #404040;--ui-pli-muted: #8f8f8f;--ui-pli-well: #f4f4f5;--ui-pli-accent: #2f6bff;--ui-pli-accent-ink: #1f55d6;--ui-pli-accent-bg: rgba(47, 107, 255, 0.09);--ui-pli-accent-flash: rgba(47, 107, 255, 0.24);--ui-pli-hole: #b4b4b9;--ui-pli-on-ink: #ffffff;--ui-pli-ok: #18794e;--ui-pli-blue: #2f6bff;--ui-pli-blue-bg: rgba(47, 107, 255, 0.1);--ui-pli-violet: #6941c6;--ui-pli-violet-bg: rgba(105, 65, 198, 0.1);--ui-pli-amber: #96590a;--ui-pli-amber-bg: rgba(240, 160, 32, 0.14);--ui-pli-green: #18794e;--ui-pli-green-bg: rgba(34, 160, 90, 0.11);--ui-pli-red: #b42318;--ui-pli-red-bg: rgba(229, 72, 77, 0.1);--ui-pli-gray: #5f5f66;--ui-pli-gray-bg: #f0f0f2;--ui-pli-focus: rgba(23, 23, 23, 0.22);--ui-pli-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;width: 100%;max-width: 640px;min-width: 0;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-pli-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-pli-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-pli *, .ui-pli *::before, .ui-pli *::after{box-sizing: border-box}:where(.ui-pli) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-pli) input{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;outline: none}.ui-pli button:focus-visible, .ui-pli__option:focus-visible{outline: 2px solid var(--ui-pli-focus);outline-offset: 2px}.ui-pli svg{display: block;flex: none}.ui-pli b{font-weight: 500;color: var(--ui-pli-ink)}.ui-pli p{margin: 0}.ui-pli__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-pli__card{display: grid;grid-template-columns: 220px minmax(0, 1fr);border-radius: 16px;background: var(--ui-pli-card);box-shadow: 0 0 0 1px var(--ui-pli-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-pli__side{min-width: 0;padding: 12px 8px 8px;border-right: 1px solid var(--ui-pli-line)}.ui-pli__side-head{display: flex;align-items: center;gap: 6px;height: 22px;padding: 0 6px}.ui-pli__title{overflow: hidden;font-size: 13px;font-weight: 500;color: var(--ui-pli-text);white-space: nowrap;text-overflow: ellipsis}.ui-pli__total{font-size: 12px;color: var(--ui-pli-muted);font-variant-numeric: tabular-nums}.ui-pli__search{display: flex;align-items: center;gap: 7px;height: 30px;margin-top: 8px;padding: 0 9px;border-radius: 8px;background: var(--ui-pli-well);color: var(--ui-pli-muted);cursor: text;transition: box-shadow 160ms ease}.ui-pli__search:focus-within{box-shadow: 0 0 0 1px var(--ui-pli-line), 0 0 0 3px var(--ui-pli-focus)}.ui-pli__search input{flex: 1;min-width: 0;height: 100%;font-size: 12.5px;color: var(--ui-pli-ink);-webkit-appearance: none;appearance: none}.ui-pli__search input::placeholder{color: var(--ui-pli-muted)}.ui-pli__search input::-webkit-search-cancel-button{-webkit-appearance: none}.ui-pli__list{position: relative;display: flex;flex-direction: column;gap: 2px;margin-top: 6px}.ui-pli__glide{position: absolute;top: 0;left: 0;right: 0;border-radius: 9px;background: var(--ui-pli-well);opacity: 0;pointer-events: none;transition: opacity 180ms ease}.ui-pli__glide[data-on]{opacity: 1}.ui-pli__glide[data-moved]{transition: transform 340ms var(--ui-pli-ease), height 340ms var(--ui-pli-ease), opacity 180ms ease}.ui-pli__option{position: relative;display: flex;align-items: center;gap: 8px;height: 34px;padding: 0 6px 0 8px;border-radius: 9px;color: var(--ui-pli-text);cursor: pointer;user-select: none;transition: color 160ms ease;-webkit-tap-highlight-color: transparent}.ui-pli__option::before{content: "";position: absolute;inset: 0;z-index: -1;border-radius: inherit;transition: background-color 160ms ease}.ui-pli__list{isolation: isolate}.ui-pli__glide{z-index: -1}.ui-pli__option:hover:not([aria-selected="true"])::before{background: color-mix(in srgb, var(--ui-pli-well) 55%, transparent)}.ui-pli__option[aria-selected="true"]{color: var(--ui-pli-ink)}.ui-pli__option-title{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-pli__empty{height: 34px;padding: 0 8px;font-size: 12.5px;line-height: 34px;color: var(--ui-pli-muted)}.ui-pli__tag{flex: none;height: 18px;padding: 0 5px;border-radius: 5px;font-size: 11px;font-weight: 500;line-height: 18px;white-space: nowrap;color: var(--ui-pli-gray);background: var(--ui-pli-gray-bg)}.ui-pli__tag[data-tone="blue"]{color: var(--ui-pli-blue);background: var(--ui-pli-blue-bg)}.ui-pli__tag[data-tone="violet"]{color: var(--ui-pli-violet);background: var(--ui-pli-violet-bg)}.ui-pli__tag[data-tone="amber"]{color: var(--ui-pli-amber);background: var(--ui-pli-amber-bg)}.ui-pli__tag[data-tone="green"]{color: var(--ui-pli-green);background: var(--ui-pli-green-bg)}.ui-pli__tag[data-tone="red"]{color: var(--ui-pli-red);background: var(--ui-pli-red-bg)}.ui-pli__main{display: grid;min-width: 0}.ui-pli__panel{grid-area: 1 / 1;min-width: 0;padding: 12px 14px 14px;animation: ui-pli-in 360ms ease both}.ui-pli__panel[data-out]{animation: ui-pli-out 240ms ease both;pointer-events: none}.ui-pli__panel-head{display: flex;align-items: center;gap: 8px;min-height: 22px}.ui-pli__panel-title{min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 600;color: var(--ui-pli-ink);white-space: nowrap;text-overflow: ellipsis}.ui-pli__count{display: inline-flex;flex: none;align-items: center;gap: 7px;margin-left: auto;font-size: 12px;color: var(--ui-pli-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pli__bars{display: inline-flex;gap: 2px}.ui-pli__bar{width: 8px;height: 4px;border-radius: 2px;background: var(--ui-pli-line);transition: background-color 300ms ease}.ui-pli__bar[data-on]{background: var(--ui-pli-accent)}.ui-pli__body{margin-top: 10px !important;font-size: 13px;line-height: 26px;color: var(--ui-pli-text);overflow-wrap: anywhere}.ui-pli__glue{white-space: nowrap}.ui-pli__preview .ui-pli__glue{white-space: inherit}.ui-pli__token{position: relative;display: inline-grid;vertical-align: top;max-width: 100%;height: 22px;margin: 2px 0;padding: 0 6px;border-radius: 6px;background: var(--ui-pli-well);box-shadow: inset 0 0 0 1px var(--ui-pli-line);line-height: 22px;color: var(--ui-pli-muted);cursor: text;transition: background-color 200ms ease, box-shadow 200ms ease, color 200ms ease}.ui-pli__token:hover{box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ui-pli-muted) 45%, transparent)}.ui-pli__token[data-filled]{background: var(--ui-pli-accent-bg);box-shadow: none;color: var(--ui-pli-accent-ink)}.ui-pli__token:focus-within{box-shadow: inset 0 0 0 1px var(--ui-pli-accent), 0 0 0 3px var(--ui-pli-accent-bg)}.ui-pli__token[data-flash="a"]{animation: ui-pli-flash-a 900ms ease-out}.ui-pli__token[data-flash="b"]{animation: ui-pli-flash-b 900ms ease-out}.ui-pli__sizer, .ui-pli__input{grid-area: 1 / 1;min-width: 2ch;font-size: 13px;line-height: 22px;white-space: pre}.ui-pli__sizer{padding-right: 1px;font-weight: 500;visibility: hidden;overflow: hidden}.ui-pli__input{width: 100%;height: 22px;color: inherit;font-weight: 500;text-overflow: ellipsis}.ui-pli__input::placeholder{color: var(--ui-pli-muted);font-weight: 400;opacity: 1}.ui-pli__label{margin-top: 12px;font-size: 12px;color: var(--ui-pli-muted)}.ui-pli__preview{margin-top: 4px;padding: 9px 11px;border-radius: 10px;background: var(--ui-pli-well);font-size: 12.5px;line-height: 20px;color: var(--ui-pli-text);white-space: pre-wrap;overflow-wrap: anywhere}.ui-pli__fill{border-radius: 4px;color: var(--ui-pli-ink);font-weight: 500;box-decoration-break: clone;-webkit-box-decoration-break: clone}.ui-pli__fill[data-flash="a"]{animation: ui-pli-mark-a 1100ms ease-out}.ui-pli__fill[data-flash="b"]{animation: ui-pli-mark-b 1100ms ease-out}.ui-pli__hole{color: var(--ui-pli-hole)}.ui-pli__foot{display: flex;align-items: center;gap: 4px;min-height: 40px;padding: 4px 2px 0 10px}.ui-pli__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-pli-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-pli__swap{display: grid;min-width: 0}.ui-pli__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-pli-swap-in 320ms ease both}.ui-pli__swap-item[data-out]{animation: ui-pli-swap-out 220ms ease both}.ui-pli__swap-item[data-tone="ok"]{color: var(--ui-pli-ok)}.ui-pli__copy{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 28px;padding: 0 9px 0 8px;border-radius: 10px;font-size: 12.5px;font-weight: 500;color: var(--ui-pli-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-pli__copy:hover:not(:disabled){background: var(--ui-pli-card);color: var(--ui-pli-ink)}.ui-pli__copy-icon{display: grid;place-items: center;width: 12px;height: 12px;animation: ui-pli-swap-in 300ms ease both}.ui-pli__use{position: relative;display: inline-flex;flex: none;align-items: center;gap: 5px;height: 28px;padding: 0 9px 0 11px;border-radius: 10px;background: var(--ui-pli-ink);font-size: 12.5px;font-weight: 500;color: var(--ui-pli-on-ink);white-space: nowrap;transition: background-color 200ms ease, color 200ms ease, opacity 200ms ease}.ui-pli__use svg{transition: transform 220ms var(--ui-pli-ease)}.ui-pli__use:hover:not([aria-disabled="true"]) svg{transform: translateX(2px)}.ui-pli__use[aria-disabled="true"]{background: color-mix(in srgb, var(--ui-pli-ink) 10%, transparent);color: var(--ui-pli-muted);cursor: default}.ui-pli__use[data-pulse="a"]{animation: ui-pli-pulse-a 1400ms ease-out}.ui-pli__use[data-pulse="b"]{animation: ui-pli-pulse-b 1400ms ease-out}@keyframes ui-pli-in{from{opacity: 0;filter: blur(2px);transform: translateY(3px)}}@keyframes ui-pli-out{to{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-flash-a{from{background-color: var(--ui-pli-accent-flash)}}@keyframes ui-pli-flash-b{from{background-color: var(--ui-pli-accent-flash)}}@keyframes ui-pli-mark-a{from{background-color: var(--ui-pli-accent-flash);box-shadow: 0 0 0 2px var(--ui-pli-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-pli-mark-b{from{background-color: var(--ui-pli-accent-flash);box-shadow: 0 0 0 2px var(--ui-pli-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-pli-pulse-a{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-pli-ink) 30%, transparent)}60%, 100%{box-shadow: 0 0 0 8px transparent}}@keyframes ui-pli-pulse-b{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-pli-ink) 30%, transparent)}60%, 100%{box-shadow: 0 0 0 8px transparent}}@container (max-width: 540px){.ui-pli__card{grid-template-columns: minmax(0, 1fr)}.ui-pli__side{border-right: 0;border-bottom: 1px solid var(--ui-pli-line)}}@container (max-width: 360px){.ui-pli__copy{width: 28px;padding: 0;justify-content: center}.ui-pli__copy-text{display: none}.ui-pli__count .ui-pli__bars{display: none}}@media (pointer: coarse){.ui-pli__option{height: 40px}.ui-pli__search{height: 36px}.ui-pli__copy, .ui-pli__use{height: 34px}.ui-pli__body{line-height: 30px}.ui-pli__token, .ui-pli__input, .ui-pli__sizer{height: 26px;line-height: 26px}}@media (prefers-reduced-motion: reduce){.ui-pli *, .ui-pli *::before, .ui-pli *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-pli{--ui-pli-tray: #111113;--ui-pli-card: #19191b;--ui-pli-line: #2a2a2e;--ui-pli-ink: #ededed;--ui-pli-text: #c8c8cc;--ui-pli-muted: #8b8b92;--ui-pli-well: #222225;--ui-pli-accent: #4f82ff;--ui-pli-accent-ink: #9dbbff;--ui-pli-accent-bg: rgba(79, 130, 255, 0.16);--ui-pli-accent-flash: rgba(79, 130, 255, 0.36);--ui-pli-hole: #5c5c63;--ui-pli-on-ink: #111113;--ui-pli-ok: #6ee7a8;--ui-pli-blue: #8fb1ff;--ui-pli-blue-bg: rgba(79, 130, 255, 0.16);--ui-pli-violet: #b9a2f5;--ui-pli-violet-bg: rgba(150, 110, 240, 0.16);--ui-pli-amber: #f5c264;--ui-pli-amber-bg: rgba(240, 160, 32, 0.15);--ui-pli-green: #6ee7a8;--ui-pli-green-bg: rgba(34, 160, 90, 0.16);--ui-pli-red: #ff9b93;--ui-pli-red-bg: rgba(229, 72, 77, 0.16);--ui-pli-gray: #b4b4ba;--ui-pli-gray-bg: #26262a;--ui-pli-focus: rgba(255, 255, 255, 0.3)}`;
var templates = [{
  id: `meeting`,
  title: `Summarize a meeting`,
  category: `Notes`,
  body: `Summarize the meeting below for {audience} in under {length}. Lead with the decisions, then list open questions about {topic}.`,
  variables: {
    audience: {
      description: `Who reads the summary`
    },
    length: {
      description: `How long it may be`,
      default: `150 words`
    },
    topic: {
      description: `What the open questions are about`
    }
  }
}, {
  id: `release`,
  title: `Write release notes`,
  category: `Product`,
  body: `Write release notes for {product} {version} for {audience}. Keep the tone {tone} and group the changes into New, Improved and Fixed.`,
  variables: {
    product: {
      description: `Name of the product`
    },
    version: {
      description: `Version number, e.g. 2.4`
    },
    audience: {
      description: `Who reads the notes`
    },
    tone: {
      description: `How it should sound`,
      default: `friendly`
    }
  }
}, {
  id: `error`,
  title: `Explain an error`,
  category: `Debug`,
  body: `Explain this {language} error in plain words: {error}. Say what most likely caused it and suggest a fix that works with {framework}.`,
  variables: {
    language: {
      description: `Programming language`
    },
    error: {
      description: `The error message`
    },
    framework: {
      description: `Framework or runtime in use`
    }
  }
}, {
  id: `email`,
  title: `Draft a cold email`,
  category: `Sales`,
  body: `Draft a short cold email to {name}, {role} at {company}. Open with {hook} and ask for a 15-minute call. No more than {length}.`,
  variables: {
    name: {
      description: `First name of the person`
    },
    role: {
      description: `Their job title`
    },
    company: {
      description: `Where they work`
    },
    hook: {
      description: `Something specific about them`
    },
    length: {
      description: `How long it may be`,
      default: `120 words`
    }
  }
}];
var b = [{
  id: `release`,
  type: [[`product`, `Relay`], [`version`, `2.4`], [`audience`, `existing customers`]]
}, {
  id: `error`,
  type: [[`language`, `TypeScript`], [`error`, `Cannot read properties of undefined`], [`framework`, `Next.js`]]
}, {
  id: `meeting`,
  type: [[`audience`, `the design team`], [`topic`, `the onboarding flow`]]
}];
function x(e, t) {
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`)?.set?.call(e, t);
  e.dispatchEvent(new Event(`input`, {
    bubbles: true
  }));
}
function SComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(0);
  let [value, setValue] = n3.useState(`meeting`);
  let sRef = n3.useRef(false);
  n3.useEffect(() => {
    let n4 = b[t % b.length];
    let r2 = [[t === 0 ? 700 : 900, () => setValue(n4.id)]];
    n4.type.forEach(([n5, i2], a3) => {
      for (let o2 = 1; o2 <= i2.length; o2++) {
        let s2 = o2 === 1 ? a3 === 0 && t === 0 ? 2500 : 520 : 55 + o2 * 37 % 40;
        r2.push([s2, () => {
          let t2 = eRef.current?.querySelector(`.ui-pli__panel:not([data-out]) .ui-pli__input[data-var="${n5}"]`);
          if (t2) {
            x(t2, i2.slice(0, o2));
          }
        }]);
      }
    });
    r2.push([3600, () => setT((e) => e + 1)]);
    let a2 = 0;
    let c3 = 0;
    let l2 = () => {
      if (!(sRef.current || a2 >= r2.length)) {
        c3 = window.setTimeout(() => {
          if (!sRef.current) {
            r2[a2][1]();
            a2++;
            l2();
          }
        }, r2[a2][0]);
      }
    };
    l2();
    return () => window.clearTimeout(c3);
  }, [t]);
  let c2 = () => sRef.current = true;
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `pli-demo`, onPointerEnter: c2, onPointerDownCapture: c2, onKeyDownCapture: c2, onFocusCapture: c2, children: /* @__PURE__ */ jsx(V1Component, { templates, value, onSelect: setValue, onUse: () => {
  } }, t) });
}

export {
  SComponent
};
