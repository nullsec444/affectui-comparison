import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-C580yDTY.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{
  id: `low`,
  label: `Low`
}, {
  id: `medium`,
  label: `Medium`
}, {
  id: `high`,
  label: `High`
}];
var a = {
  low: 1.6,
  medium: 2.5,
  high: 4
};
var o = [{
  key: `speed`,
  label: `Speed`
}, {
  key: `quality`,
  label: `Quality`
}, {
  key: `cost`,
  label: `Cost`
}];
var s = (e) => 1 - (1 - e) ** 4;
var c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var l = (e) => Math.max(0, Math.min(5, Math.round(e)));
var u = (e) => `${(e / 1e3).toFixed(1)}s`;
var d = (e, price) => `$${e.toFixed(Number.isInteger(price) ? 0 : 2)}`;
function useF(e, t) {
  let [r2, setR] = n3.useState(e);
  let aRef = n3.useRef(e);
  let o2 = JSON.stringify(e);
  n3.useEffect(() => {
    let e2 = JSON.parse(o2);
    let n4 = {
      ...aRef.current
    };
    if (c() || Object.keys(e2).every((t2) => n4[t2] === e2[t2])) {
      aRef.current = e2;
      setR(e2);
      return;
    }
    let r3 = performance.now();
    let l2 = 0;
    let u2 = (o3) => {
      let c2 = Math.min(1, (o3 - r3) / t);
      let d2 = s(c2);
      let f = {};
      for (let t2 in e2) {
        f[t2] = (n4[t2] ?? e2[t2]) + (e2[t2] - (n4[t2] ?? e2[t2])) * d2;
      }
      aRef.current = f;
      setR(f);
      if (c2 < 1) {
        l2 = requestAnimationFrame(u2);
      }
    };
    l2 = requestAnimationFrame(u2);
    return () => cancelAnimationFrame(l2);
  }, [o2, t]);
  return r2;
}
function P1Component({
  id,
  children
}) {
  let iRef = n3.useRef({
    id,
    node: children
  });
  let [a2, setA] = n3.useState(id);
  let [s2, setS] = n3.useState(null);
  if (a2 !== id) {
    setA(id);
    setS(iRef.current);
  }
  iRef.current = {
    id,
    node: children
  };
  n3.useEffect(() => {
    if (!s2) {
      return;
    }
    let e = window.setTimeout(() => setS(null), 260);
    return () => window.clearTimeout(e);
  }, [s2]);
  return /* @__PURE__ */ jsxs("span", { className: `ui-mdp__swap`, children: [
    s2 && /* @__PURE__ */ jsx("span", { className: `ui-mdp__swap-item`, "data-out": ``, "aria-hidden": `true`, children: s2.node }, `out-${s2.id}`),
    /* @__PURE__ */ jsx("span", { className: `ui-mdp__swap-item`, children }, id)
  ] });
}
var m = {
  stroke: `currentColor`,
  strokeWidth: 1.4,
  strokeLinecap: `round`,
  strokeLinejoin: `round`
};
var Ee1Component = () => /* @__PURE__ */ jsx("svg", { className: `ui-mdp__chevron`, width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m3 4.5 3 3 3-3`, ...m }) });
var Te1Component = () => /* @__PURE__ */ jsx("svg", { className: `ui-mdp__check`, width: `14`, height: `14`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m3.4 7.3 2.4 2.4 4.8-5.2`, ...m, strokeWidth: 1.6 }) });
var H1Component = () => /* @__PURE__ */ jsx("svg", { width: `14`, height: `14`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M5.3 10.6h3.4M5.8 12.3h2.4M7 1.7a3.9 3.9 0 0 0-2.3 7c.4.3.6.7.6 1.1v.1h3.4v-.1c0-.4.2-.8.6-1.1A3.9 3.9 0 0 0 7 1.7Z`, ...m }) });
var NeComponent = () => /* @__PURE__ */ jsxs("svg", { width: `14`, height: `14`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `7`, cy: `7`, r: `5.3`, ...m }),
  /* @__PURE__ */ jsx("path", { d: `M1.9 7h10.2M7 1.7c1.4 1.5 2 3.3 2 5.3s-.6 3.8-2 5.3c-1.4-1.5-2-3.3-2-5.3s.6-3.8 2-5.3Z`, ...m })
] });
function G1Component({
  model
}) {
  return /* @__PURE__ */ jsx("span", { className: `ui-mdp__glyph`, "aria-hidden": `true`, children: model.icon ?? model.name.trim().charAt(0).toUpperCase() });
}
function Component({
  models: models2,
  value,
  defaultValue,
  onChange,
  thinking,
  defaultThinking = false,
  onThinkingChange,
  webSearch,
  defaultWebSearch = false,
  onWebSearchChange,
  effort,
  defaultEffort = `medium`,
  onEffortChange,
  open,
  defaultOpen = false,
  onOpenChange,
  align = `start`,
  side = `bottom`,
  className
}) {
  let w = n3.useId();
  let TRef = n3.useRef(null);
  let ERef = n3.useRef(null);
  let DRef = n3.useRef(null);
  let [de, setDe] = n3.useState(defaultValue ?? models2[0]?.id);
  let [pe, setPe] = n3.useState(defaultThinking);
  let [he, setHe] = n3.useState(defaultWebSearch);
  let [_e, set_e] = n3.useState(defaultEffort);
  let [ye, setYe] = n3.useState(defaultOpen);
  let O = value ?? de;
  let k = thinking ?? pe;
  let A = webSearch ?? he;
  let j = effort ?? _e;
  let M = open ?? ye;
  let N = Math.max(0, models2.findIndex((e) => e.id === O));
  let P = models2[N];
  let [F, setF] = n3.useState(N);
  let [L, setL] = n3.useState(false);
  let [xe, setXe] = n3.useState(null);
  let B = models2[L ? F : N] ?? P;
  let V = (e, t) => {
    if (e !== M) {
      if (e) {
        setF(N);
        setL(false);
      } else {
        setXe(null);
      }
      setYe(e);
      onOpenChange?.(e);
    }
    if (t === `list`) {
      requestAnimationFrame(() => DRef.current?.focus({
        preventScroll: true
      }));
    }
    if (t === `trigger`) {
      ERef.current?.focus({
        preventScroll: true
      });
    }
  };
  let HRef = n3.useRef(M);
  n3.useEffect(() => {
    if (M && !HRef.current) {
      setF(N);
      setL(false);
    }
    HRef.current = M;
  }, [M, N]);
  let URef = n3.useRef(null);
  let [W, setW] = n3.useState(0);
  n3.useLayoutEffect(() => {
    if (!M) {
      return;
    }
    let e = () => {
      let e2 = ERef.current?.getBoundingClientRect();
      let t = URef.current?.offsetWidth ?? 0;
      if (!e2 || !t) {
        return;
      }
      let clientWidth = document.documentElement.clientWidth;
      let r2 = align === `end` ? e2.right - t : e2.left;
      setW(r2 < 12 ? 12 - r2 : r2 + t > clientWidth - 12 ? Math.min(0, clientWidth - 12 - (r2 + t)) : 0);
    };
    e();
    window.addEventListener(`resize`, e);
    return () => window.removeEventListener(`resize`, e);
  }, [M, align]);
  n3.useEffect(() => {
    if (!M) {
      return;
    }
    let e = (e2) => {
      if (!TRef.current?.contains(e2.target)) {
        V(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  });
  let Ce = () => TRef.current?.contains(document.activeElement) ?? false;
  let G = (t) => {
    let n4 = models2[t];
    if (n4) {
      setDe(n4.id);
      if (n4.id !== O) {
        onChange?.(n4.id);
      }
      V(false, Ce() ? `trigger` : void 0);
    }
  };
  let we = () => {
    setPe(!k);
    onThinkingChange?.(!k);
  };
  let Te = () => {
    setHe(!A);
    onWebSearchChange?.(!A);
  };
  let K = (e) => {
    set_e(e);
    if (e !== j) {
      onEffortChange?.(e);
    }
  };
  let Ee = (e) => {
    if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
      e.preventDefault();
      V(true, `list`);
    }
  };
  let q = (t) => {
    let models_length = models2.length;
    if (!models_length) {
      return;
    }
    let r2 = (e) => {
      t.preventDefault();
      setF((e % models_length + models_length) % models_length);
      setL(true);
    };
    if (t.key === `ArrowDown`) {
      r2(F + 1);
    } else if (t.key === `ArrowUp`) {
      r2(F - 1);
    } else if (t.key === `Home`) {
      r2(0);
    } else if (t.key === `End`) {
      r2(models_length - 1);
    } else if (t.key === `Enter` || t.key === ` `) {
      t.preventDefault();
      G(F);
    }
  };
  let De = (e) => {
    let t = i.findIndex((e2) => e2.id === j);
    let n4 = e.key === `ArrowRight` || e.key === `ArrowDown` ? 1 : e.key === `ArrowLeft` || e.key === `ArrowUp` ? -1 : 0;
    if (!n4) {
      return;
    }
    e.preventDefault();
    let r2 = i[(t + n4 + i.length) % i.length];
    K(r2.id);
    TRef.current?.querySelector(`[data-effort="${r2.id}"]`)?.focus();
  };
  let Oe = (e) => {
    if (e.key === `Escape` && M) {
      e.stopPropagation();
      V(false, `trigger`);
    }
  };
  let ke = k ? a[j] : 1;
  let latency = (B?.latencyMs ?? 0) * ke;
  let price = B?.pricePerM ?? 0;
  let X = useF({
    latency,
    price
  }, 560);
  let Ae = B?.latencyMs !== void 0 || B?.pricePerM !== void 0;
  let Z;
  let id;
  let $;
  if (xe === `search`) {
    Z = A ? `Looks things up on the web when it helps` : `Answers from what it already knows`;
    id = `search-${A}`;
    $ = Z;
  } else if (!Ae) {
    Z = B?.description ?? B?.name ?? ``;
    id = `plain-${B?.id}`;
    $ = `${B?.name ?? ``}: ${Z}`;
  } else {
    let e = [];
    let t = [];
    if (B.latencyMs !== void 0) {
      e.push(/* @__PURE__ */ jsxs("span", { children: [
        `~`,
        /* @__PURE__ */ jsx("b", { children: u(X.latency ?? latency) }),
        ` first token`
      ] }, `l`));
      t.push(`about ${u(latency)} to the first token`);
    }
    if (B.pricePerM !== void 0) {
      e.push(/* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("b", { children: d(X.price ?? price, price) }),
        ` / M tokens`
      ] }, `p`));
      t.push(`${d(price, price)} per million tokens`);
    }
    Z = e.flatMap((e2, t2) => {
      if (t2) {
        return [/* @__PURE__ */ jsx("span", { className: `ui-mdp__dot`, children: ` \xB7 ` }, `d${t2}`), e2];
      }
      return [e2];
    });
    id = `stats`;
    $ = `${B.name}: ${t.join(`, `)}`;
  }
  let je = models2[F] ? `${w}-opt-${models2[F].id}` : void 0;
  return /* @__PURE__ */ jsxs("div", { ref: TRef, className: [`ui-mdp`, className].filter(Boolean).join(` `), "data-open": M ? `` : void 0, "data-align": align, "data-side": side, onKeyDown: Oe, onBlur: (e) => {
    if (M && e.relatedTarget && !TRef.current?.contains(e.relatedTarget)) {
      V(false);
    }
  }, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-model-picker`, precedence: `default`, children: re }),
    /* @__PURE__ */ jsxs("button", { ref: ERef, type: `button`, className: `ui-mdp__trigger`, "aria-haspopup": `dialog`, "aria-expanded": M, "aria-controls": `${w}-menu`, "aria-label": `Model: ${P?.name ?? `none`}${k ? `, extended thinking` : ``}`, onClick: () => V(!M, M ? void 0 : `list`), onKeyDown: Ee, children: [
      P && /* @__PURE__ */ jsx(G1Component, { model: P }),
      /* @__PURE__ */ jsx("span", { className: `ui-mdp__name`, children: /* @__PURE__ */ jsx(P1Component, { id: P?.id ?? `none`, children: P?.name ?? `Choose a model` }) }),
      /* @__PURE__ */ jsx("span", { className: `ui-mdp__flag`, "data-on": k ? `` : void 0, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(H1Component, {}) }) }),
      /* @__PURE__ */ jsx(Ee1Component, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { id: `${w}-menu`, ref: URef, className: `ui-mdp__pop`, style: W ? {
      translate: `${W}px 0`
    } : void 0, role: `dialog`, "aria-label": `Model settings`, inert: !M, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-mdp__card`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-mdp__head`, "aria-hidden": `true`, children: [
          /* @__PURE__ */ jsx("span", { children: `Model` }),
          /* @__PURE__ */ jsx("span", { className: `ui-mdp__cols`, children: o.map((e) => /* @__PURE__ */ jsx("span", { children: e.label }, e.key)) })
        ] }),
        /* @__PURE__ */ jsx("div", { ref: DRef, className: `ui-mdp__list`, role: `listbox`, "aria-label": `Model`, tabIndex: 0, "aria-activedescendant": M ? je : void 0, "data-pointing": L ? `` : void 0, onKeyDown: q, onPointerLeave: () => setL(false), children: models2.map((e, t) => {
          let n4 = e.speed !== void 0 || e.quality !== void 0 || e.cost !== void 0;
          return /* @__PURE__ */ jsxs("div", { id: `${w}-opt-${e.id}`, role: `option`, "aria-selected": t === N, "aria-label": `${e.name}${e.description ? `, ${e.description}` : ``}${n4 ? `. Speed ${e.speed ?? 0}, quality ${e.quality ?? 0}, cost ${e.cost ?? 0} of 5` : ``}`, className: `ui-mdp__option`, "data-active": t === F ? `` : void 0, "data-lit": e.id === B?.id ? `` : void 0, onPointerEnter: (e2) => {
            if (e2.pointerType === `mouse`) {
              setF(t);
              setL(true);
            }
          }, onClick: () => G(t), children: [
            /* @__PURE__ */ jsx(G1Component, { model: e }),
            /* @__PURE__ */ jsxs("span", { className: `ui-mdp__text`, children: [
              /* @__PURE__ */ jsxs("span", { className: `ui-mdp__title`, children: [
                /* @__PURE__ */ jsx("span", { className: `ui-mdp__title-name`, children: e.name }),
                t === N && /* @__PURE__ */ jsx(Te1Component, {})
              ] }),
              e.description && /* @__PURE__ */ jsx("span", { className: `ui-mdp__desc`, children: e.description })
            ] }),
            n4 ? /* @__PURE__ */ jsx("span", { className: `ui-mdp__bars`, "aria-hidden": `true`, children: o.map((t2, n5) => {
              let i2 = l(e[t2.key] ?? 0);
              return /* @__PURE__ */ jsx("span", { className: `ui-mdp__meter`, style: {
                "--c": n5
              }, children: [0, 1, 2, 3, 4].map((e2) => /* @__PURE__ */ jsx("span", { className: `ui-mdp__seg`, "data-on": e2 < i2 ? `` : void 0, style: {
                "--s": e2
              } }, e2)) }, t2.key);
            }) }) : /* @__PURE__ */ jsx("span", { className: `ui-mdp__varies`, "aria-hidden": `true`, children: `Varies` })
          ] }, e.id);
        }) }),
        /* @__PURE__ */ jsxs("div", { className: `ui-mdp__settings`, children: [
          /* @__PURE__ */ jsxs("button", { type: `button`, role: `switch`, "aria-checked": k, className: `ui-mdp__toggle`, onClick: we, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-mdp__toggle-icon`, children: /* @__PURE__ */ jsx(H1Component, {}) }),
            /* @__PURE__ */ jsx("span", { className: `ui-mdp__toggle-label`, children: `Extended thinking` }),
            /* @__PURE__ */ jsx("span", { className: `ui-mdp__switch`, "aria-hidden": `true` })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `ui-mdp__fold`, "data-open": k ? `` : void 0, inert: !k, children: /* @__PURE__ */ jsx("div", { className: `ui-mdp__clip`, children: /* @__PURE__ */ jsxs("div", { className: `ui-mdp__effort`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-mdp__effort-label`, id: `${w}-effort`, children: `Effort` }),
            /* @__PURE__ */ jsxs("div", { className: `ui-mdp__segmented`, role: `radiogroup`, "aria-labelledby": `${w}-effort`, style: {
              "--i": i.findIndex((e) => e.id === j)
            }, onKeyDown: De, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-mdp__thumb`, "aria-hidden": `true` }),
              i.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "aria-checked": e.id === j, tabIndex: e.id === j ? 0 : -1, "data-effort": e.id, className: `ui-mdp__seg-btn`, onClick: () => K(e.id), children: e.label }, e.id))
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxs("button", { type: `button`, role: `switch`, "aria-checked": A, className: `ui-mdp__toggle`, onClick: Te, onPointerEnter: (e) => e.pointerType === `mouse` && setXe(`search`), onPointerLeave: () => setXe(null), onFocus: () => setXe(`search`), onBlur: () => setXe(null), children: [
            /* @__PURE__ */ jsx("span", { className: `ui-mdp__toggle-icon`, children: /* @__PURE__ */ jsx(NeComponent, {}) }),
            /* @__PURE__ */ jsx("span", { className: `ui-mdp__toggle-label`, children: `Web search` }),
            /* @__PURE__ */ jsx("span", { className: `ui-mdp__switch`, "aria-hidden": `true` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-mdp__foot`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-mdp__caption`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(P1Component, { id, children: Z }) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-mdp__keys`, "aria-hidden": `true`, children: [
          /* @__PURE__ */ jsx("kbd", { children: `\u2191\u2193` }),
          /* @__PURE__ */ jsx("kbd", { children: `\u21B5` })
        ] }),
        /* @__PURE__ */ jsx("span", { className: `ui-mdp__sr`, "aria-live": `polite`, children: M ? $ : `` })
      ] })
    ] })
  ] });
}
var re = `.ui-mdp{--ui-mdp-tray: #f0f0f0;--ui-mdp-card: #ffffff;--ui-mdp-line: #ececec;--ui-mdp-ink: #171717;--ui-mdp-text: #404040;--ui-mdp-muted: #8f8f8f;--ui-mdp-well: #f4f4f5;--ui-mdp-bar: #d4d4d9;--ui-mdp-bar-off: #e6e6ea;--ui-mdp-switch: #dcdce0;--ui-mdp-knob: #ffffff;--ui-mdp-focus: rgba(23, 23, 23, 0.22);--ui-mdp-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;display: inline-block;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-mdp-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-mdp *, .ui-mdp *::before, .ui-mdp *::after{box-sizing: border-box}:where(.ui-mdp) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-mdp button:focus-visible, .ui-mdp__list:focus-visible{outline: 2px solid var(--ui-mdp-focus);outline-offset: 2px}.ui-mdp svg{display: block;flex: none}.ui-mdp b{font-weight: 500;color: var(--ui-mdp-ink)}.ui-mdp__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-mdp__trigger{display: inline-flex;align-items: center;gap: 7px;max-width: 100%;height: 30px;padding: 0 8px 0 6px;border-radius: 10px;font-weight: 500;color: var(--ui-mdp-ink);white-space: nowrap;transition: background-color 160ms ease}.ui-mdp__trigger:hover, .ui-mdp[data-open] .ui-mdp__trigger{background: var(--ui-mdp-well)}.ui-mdp__trigger .ui-mdp__glyph{width: 18px;height: 18px}.ui-mdp__name{display: grid;min-width: 0}.ui-mdp__chevron{color: var(--ui-mdp-muted);transition: transform 300ms var(--ui-mdp-ease)}.ui-mdp[data-open] .ui-mdp__chevron{transform: rotate(180deg)}.ui-mdp__flag{display: grid;grid-template-columns: 0fr;margin-left: -7px;opacity: 0;color: var(--ui-mdp-muted);transition: grid-template-columns 360ms var(--ui-mdp-ease), margin 360ms var(--ui-mdp-ease), opacity 220ms ease}.ui-mdp__flag > span{min-width: 0;overflow: hidden}.ui-mdp__flag[data-on]{grid-template-columns: 1fr;margin-left: -3px;opacity: 1;transition: grid-template-columns 360ms var(--ui-mdp-ease), margin 360ms var(--ui-mdp-ease), opacity 280ms ease 80ms}.ui-mdp__glyph{display: grid;flex: none;place-items: center;width: 22px;height: 22px;overflow: hidden;border-radius: 6px;background: var(--ui-mdp-card);box-shadow: inset 0 0 0 1px var(--ui-mdp-line);font-size: 10.5px;font-weight: 600;line-height: 1;color: var(--ui-mdp-ink)}.ui-mdp__glyph > svg, .ui-mdp__glyph > img{width: 12px;height: 12px}.ui-mdp__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;width: min(320px, calc(100vw - 32px));container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-mdp-tray);box-shadow: 0 12px 32px -12px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.04);transform-origin: top left;opacity: 0;visibility: hidden;transform: translateY(-4px) scale(0.96);transition: opacity 160ms ease, transform 220ms var(--ui-mdp-ease), visibility 0s linear 220ms}.ui-mdp[data-align="end"] .ui-mdp__pop{left: auto;right: 0;transform-origin: top right}.ui-mdp[data-side="top"] .ui-mdp__pop{top: auto;bottom: calc(100% + 6px);transform-origin: bottom left;transform: translateY(4px) scale(0.96)}.ui-mdp[data-side="top"][data-align="end"] .ui-mdp__pop{transform-origin: bottom right}.ui-mdp[data-open] .ui-mdp__pop{opacity: 1;visibility: visible;transform: none;transition: opacity 200ms ease, transform 320ms var(--ui-mdp-ease), visibility 0s}.ui-mdp__card{padding: 6px;border-radius: 16px;background: var(--ui-mdp-card);box-shadow: 0 0 0 1px var(--ui-mdp-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-mdp__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 24px;padding: 0 10px;font-size: 11px;line-height: 16px;color: var(--ui-mdp-muted)}.ui-mdp__cols{display: grid;grid-template-columns: repeat(3, 34px);gap: 8px}.ui-mdp__cols > span{display: flex;justify-content: center;white-space: nowrap}.ui-mdp__list{display: grid;gap: 1px;border-radius: 10px}.ui-mdp__option{display: flex;align-items: center;gap: 10px;min-height: 48px;padding: 6px 10px;border-radius: 10px;cursor: pointer;transition: background-color 160ms ease, opacity 220ms ease}.ui-mdp__list[data-pointing] .ui-mdp__option[data-active]{background: var(--ui-mdp-well)}.ui-mdp__list:focus-visible{outline: none}.ui-mdp__list:focus-visible .ui-mdp__option[data-active]{background: var(--ui-mdp-well);box-shadow: inset 0 0 0 1.5px var(--ui-mdp-focus)}.ui-mdp__list[data-pointing] .ui-mdp__option:not([data-active]){opacity: 0.5}.ui-mdp__text{display: grid;flex: 1;min-width: 0}.ui-mdp__title{display: flex;align-items: center;gap: 4px;min-width: 0;font-weight: 500;color: var(--ui-mdp-ink)}.ui-mdp__title-name{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mdp__check{color: var(--ui-mdp-ink);animation: ui-mdp-pop 320ms var(--ui-mdp-ease) both}.ui-mdp__desc{overflow: hidden;font-size: 12px;line-height: 17px;color: var(--ui-mdp-muted);white-space: nowrap;text-overflow: ellipsis}.ui-mdp__bars{display: grid;flex: none;grid-template-columns: repeat(3, 34px);gap: 8px}.ui-mdp__meter{display: grid;grid-template-columns: repeat(5, 1fr);gap: 2px;height: 5px}.ui-mdp__seg{border-radius: 1.5px;background: var(--ui-mdp-bar-off);transition: background-color 180ms ease, transform 260ms var(--ui-mdp-ease)}.ui-mdp__seg[data-on]{background: var(--ui-mdp-bar)}.ui-mdp__option[data-lit] .ui-mdp__seg[data-on]{background: var(--ui-mdp-ink);transition-delay: calc(var(--c) * 70ms + var(--s) * 45ms);animation: ui-mdp-fill 360ms var(--ui-mdp-ease) both;animation-delay: calc(var(--c) * 70ms + var(--s) * 45ms)}.ui-mdp__varies{flex: none;width: 118px;font-size: 11.5px;color: var(--ui-mdp-muted);text-align: center}.ui-mdp__settings{margin-top: 6px;padding-top: 6px;border-top: 1px solid var(--ui-mdp-line)}.ui-mdp__toggle{display: flex;align-items: center;gap: 10px;width: 100%;height: 34px;padding: 0 10px;border-radius: 10px;color: var(--ui-mdp-text);transition: background-color 160ms ease}.ui-mdp__toggle:hover{background: var(--ui-mdp-well)}.ui-mdp__toggle-icon{display: grid;flex: none;place-items: center;width: 22px;color: var(--ui-mdp-muted);transition: color 200ms ease}.ui-mdp__toggle[aria-checked="true"] .ui-mdp__toggle-icon{color: var(--ui-mdp-ink)}.ui-mdp__toggle-label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mdp__switch{position: relative;flex: none;width: 28px;height: 16px;border-radius: 8px;background: var(--ui-mdp-switch);transition: background-color 220ms ease}.ui-mdp__switch::after{content: "";position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 50%;background: var(--ui-mdp-knob);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);transition: transform 280ms var(--ui-mdp-ease)}.ui-mdp__toggle[aria-checked="true"] .ui-mdp__switch{background: var(--ui-mdp-ink)}.ui-mdp__toggle[aria-checked="true"] .ui-mdp__switch::after{transform: translateX(12px)}.ui-mdp__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-mdp-ease), opacity 220ms ease}.ui-mdp__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-mdp-ease), opacity 320ms ease 100ms}.ui-mdp__clip{min-height: 0;overflow: hidden}.ui-mdp__effort{display: flex;align-items: center;gap: 10px;padding: 2px 10px 6px 42px}.ui-mdp__effort-label{flex: 1;min-width: 0;font-size: 12.5px;color: var(--ui-mdp-muted)}.ui-mdp__segmented{position: relative;display: grid;flex: none;grid-template-columns: repeat(3, 58px);padding: 2px;border-radius: 9px;background: var(--ui-mdp-well);box-shadow: inset 0 0 0 1px var(--ui-mdp-line)}.ui-mdp__thumb{position: absolute;top: 2px;bottom: 2px;left: 2px;width: 58px;border-radius: 7px;background: var(--ui-mdp-card);box-shadow: 0 0 0 1px var(--ui-mdp-line), 0 1px 2px rgba(0, 0, 0, 0.06);transform: translateX(calc(var(--i) * 100%));transition: transform 320ms var(--ui-mdp-ease)}.ui-mdp__seg-btn{position: relative;height: 24px;border-radius: 7px;font-size: 12px;font-weight: 500;color: var(--ui-mdp-muted);text-align: center !important;transition: color 200ms ease}.ui-mdp__seg-btn[aria-checked="true"]{color: var(--ui-mdp-ink)}.ui-mdp__seg-btn:hover{color: var(--ui-mdp-ink)}.ui-mdp__foot{display: flex;align-items: center;gap: 8px;height: 38px;padding: 4px 8px 0 12px}.ui-mdp__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-mdp-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-mdp__dot{color: var(--ui-mdp-muted)}.ui-mdp__swap{display: grid;min-width: 0}.ui-mdp__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;animation: ui-mdp-swap-in 320ms ease both}.ui-mdp__swap-item[data-out]{animation: ui-mdp-swap-out 220ms ease both}.ui-mdp__keys{display: flex;flex: none;gap: 3px}.ui-mdp__keys kbd{display: grid;place-items: center;min-width: 20px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-mdp-card);box-shadow: 0 0 0 1px var(--ui-mdp-line);font-family: inherit;font-size: 10.5px;line-height: 1;color: var(--ui-mdp-muted)}@keyframes ui-mdp-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-mdp-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-mdp-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-mdp-fill{0%{transform: scaleY(1)}45%{transform: scaleY(1.6)}100%{transform: scaleY(1)}}@container (max-width: 300px){.ui-mdp__option .ui-mdp__glyph{display: none}.ui-mdp__cols, .ui-mdp__bars{grid-template-columns: repeat(3, 30px);gap: 6px}.ui-mdp__varies{width: 102px}.ui-mdp__keys{display: none}.ui-mdp__effort{padding-left: 10px}.ui-mdp__segmented{grid-template-columns: repeat(3, 52px)}.ui-mdp__thumb{width: 52px}}@media (pointer: coarse){.ui-mdp__trigger{height: 36px}.ui-mdp__option{min-height: 54px}.ui-mdp__toggle{height: 42px}.ui-mdp__seg-btn{height: 30px}.ui-mdp__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-mdp *, .ui-mdp *::before, .ui-mdp *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-mdp{--ui-mdp-tray: #111113;--ui-mdp-card: #19191b;--ui-mdp-line: #2a2a2e;--ui-mdp-ink: #ededed;--ui-mdp-text: #c8c8cc;--ui-mdp-muted: #8b8b92;--ui-mdp-well: #222225;--ui-mdp-bar: #55555c;--ui-mdp-bar-off: #303035;--ui-mdp-switch: #3a3a40;--ui-mdp-knob: #ededed;--ui-mdp-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-mdp__pop{box-shadow: 0 0 0 1px #222225, 0 12px 32px -12px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-mdp__toggle[aria-checked="true"] .ui-mdp__switch::after{background: #19191b}`;
var InlineComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M6 1.5 7.1 4.9 10.5 6 7.1 7.1 6 10.5 4.9 7.1 1.5 6 4.9 4.9Z`, fill: `currentColor` }) });
var models = [{
  id: `opus`,
  name: `Opus 5.5`,
  description: `Hardest problems`,
  speed: 2,
  quality: 5,
  cost: 5,
  latencyMs: 2100,
  pricePerM: 25
}, {
  id: `sonnet`,
  name: `Sonnet 5.5`,
  description: `Everyday work`,
  speed: 4,
  quality: 4,
  cost: 3,
  latencyMs: 900,
  pricePerM: 15
}, {
  id: `haiku`,
  name: `Haiku 5.5`,
  description: `Quick and light`,
  speed: 5,
  quality: 3,
  cost: 1,
  latencyMs: 400,
  pricePerM: 4
}, {
  id: `auto`,
  name: `Auto`,
  description: `Picks per message`,
  icon: /* @__PURE__ */ jsx(InlineComponent, {})
}];
function YComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(0);
  let [open, setOpen] = n3.useState(false);
  let sRef = n3.useRef(false);
  let cRef = n3.useRef(false);
  n3.useEffect(() => {
    let t2 = (t3) => eRef.current?.querySelector(t3) ?? null;
    let n4 = (e, t3, n5 = {}) => {
      if (e) {
        cRef.current = true;
        e.dispatchEvent(new PointerEvent(t3, {
          bubbles: true,
          pointerType: `mouse`,
          ...n5
        }));
        cRef.current = false;
      }
    };
    let r2 = (e) => t2(`.ui-mdp__option:nth-child(${e})`);
    let a2 = (e) => () => n4(r2(e), `pointerover`);
    let l3 = () => n4(t2(`.ui-mdp__option[data-active]`), `pointerout`, {
      relatedTarget: t2(`.ui-mdp__settings`)
    });
    let u2 = [[700, () => setOpen(true)], [800, a2(1)], [2800, a2(3)], [1200, a2(1)], [1300, () => {
      l3();
      t2(`.ui-mdp__toggle`)?.click();
    }], [1400, () => t2(`[data-effort="high"]`)?.click()], [1400, a2(1)], [1100, () => r2(1)?.click()], [3200, () => setT((e) => e + 1)]];
    let d2 = 0;
    let f = 0;
    let p = () => {
      if (!(sRef.current || d2 >= u2.length)) {
        f = window.setTimeout(() => {
          if (!sRef.current) {
            u2[d2][1]();
            d2++;
            p();
          }
        }, u2[d2][0]);
      }
    };
    p();
    return () => window.clearTimeout(f);
  }, [t]);
  let l2 = () => {
    if (!cRef.current) {
      sRef.current = true;
    }
  };
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `mdp-demo`, onPointerEnter: l2, onPointerDownCapture: l2, onKeyDownCapture: l2, onFocusCapture: l2, onClick: (e) => e.target.closest(`.ui-mdp__pop`) && e.stopPropagation(), children: /* @__PURE__ */ jsxs("div", { className: `mdp-demo__composer`, children: [
    /* @__PURE__ */ jsx("div", { className: `mdp-demo__text`, children: `Ask anything\u2026` }),
    /* @__PURE__ */ jsxs("div", { className: `mdp-demo__bar`, children: [
      /* @__PURE__ */ jsx(Component, { models, defaultValue: `sonnet`, open, onOpenChange: setOpen }, t),
      /* @__PURE__ */ jsx("span", { className: `mdp-demo__send`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("svg", { width: `14`, height: `14`, viewBox: `0 0 14 14`, fill: `none`, children: /* @__PURE__ */ jsx("path", { d: `M7 11.5v-9M3.2 6.3 7 2.5l3.8 3.8`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round` }) }) })
    ] })
  ] }) });
}

export {
  YComponent
};
