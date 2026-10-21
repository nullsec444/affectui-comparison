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

// reconstructed/demo.clean-CnchuWt9.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`blue`, `violet`, `green`, `amber`, `gray`];
var a = (site) => i[[...site].reduce((acc, item) => (acc * 31 + item.charCodeAt(0)) % 997, 7) % i.length];
var o = (url) => {
  if (!url) {
    return ``;
  }
  try {
    return new URL(url).hostname.replace(/^www\./, ``);
  } catch {
    return url;
  }
};
var s = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
var c = /* @__PURE__ */ new Set([`about`, `after`, `again`, `their`, `there`, `these`, `those`, `which`, `while`, `would`, `could`, `should`, `every`, `other`, `being`, `still`, `where`, `until`, `since`, `under`, `first`, `people`, `thing`, `things`]);
function l(quote, highlight, n4) {
  let i2 = null;
  if (highlight?.length) {
    let e = highlight.filter((e2) => e2.trim()).map(s);
    if (e.length) {
      i2 = RegExp(`(${e.join(`|`)})`, `gi`);
    }
  } else {
    let e = [...new Set((n4.toLowerCase().match(/[a-z0-9%]+/g) ?? []).filter((e2) => (e2.length >= 5 || /\d/.test(e2)) && !c.has(e2)))];
    if (e.length) {
      i2 = RegExp(`\\b(${e.map(s).join(`|`)})\\b`, `gi`);
    }
  }
  if (i2) {
    return quote.split(i2).map((e, t) => {
      if (t % 2) {
        return /* @__PURE__ */ jsx("mark", { children: e }, t);
      }
      return e;
    });
  }
  return quote;
}
function U1Component({
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
  return /* @__PURE__ */ jsxs("span", { className: `ui-cac__swap`, children: [
    c2 && /* @__PURE__ */ jsx("span", { className: `ui-cac__swap-item`, "data-out": ``, "data-tone": c2.tone, "aria-hidden": `true`, children: c2.node }, `out-${c2.id}`),
    /* @__PURE__ */ jsx("span", { className: `ui-cac__swap-item`, "data-tone": tone, children }, id)
  ] });
}
var D1Component = ({
  d
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-cac__icon`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var f = {
  close: `M4.75 4.75l6.5 6.5m0-6.5-6.5 6.5`,
  out: `M6.5 4.5h5v5M11.25 4.75 4.5 11.5`,
  copy: `M6.75 5.5h5c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25ZM10.5 3.5A1.25 1.25 0 0 0 9.25 3h-5C3.56 3 3 3.56 3 4.25v5c0 .54.34 1 .82 1.17`,
  done: `M3.75 8.4 6.6 11.2 12.25 5`,
  arrow: `M3.5 8h9M8.75 4.25 12.5 8l-3.75 3.75`
};
function P1Component({
  source
}) {
  return /* @__PURE__ */ jsx("span", { className: `ui-cac__glyph`, "data-tone": a(source.site), "aria-hidden": `true`, children: source.icon ?? source.site.trim().charAt(0).toUpperCase() });
}
var m = 4;
function H1Component({
  segments: segments2,
  sources: sources2,
  pagesRead,
  defaultOpen,
  onOpenSource,
  onPreviewChange,
  action,
  className
}) {
  let v = n3.useId();
  let [y, setY] = n3.useState(null);
  let [x, setX] = n3.useState(defaultOpen && sources2.some((e) => e.id === defaultOpen) ? defaultOpen : null);
  let CRef = n3.useRef(x);
  if (x) {
    CRef.current = x;
  }
  let [w, setW] = n3.useState(null);
  let ERef = n3.useRef(null);
  let DRef = n3.useRef(null);
  let [ee, setEe] = n3.useState(sources2.length);
  let [k, setK] = n3.useState(false);
  let j = (e) => sources2.findIndex((t) => t.id === e) + 1;
  let M = (e) => sources2.find((t) => t.id === e) ?? null;
  let N = (e) => sources2.some((t) => t.id === e);
  n3.useLayoutEffect(() => {
    let ERef_current = ERef.current;
    let DRef_current = DRef.current;
    if (!ERef_current || !DRef_current) {
      return;
    }
    let n4 = () => {
      let n5 = [...DRef_current.querySelectorAll(`[data-chip]`)].map((e) => e.offsetWidth);
      let r3 = DRef_current.querySelector(`[data-more]`)?.offsetWidth ?? 36;
      let ERef_current_clientWidth = ERef_current.clientWidth;
      if (n5.reduce((acc, item) => acc + item, 0) + m * Math.max(0, n5.length - 1) <= ERef_current_clientWidth + 0.5) {
        return setEe(n5.length);
      }
      let a2 = 0;
      let o2 = 0;
      for (; o2 < n5.length; o2++) {
        let e = a2 + (o2 ? m : 0) + n5[o2];
        if (e + m + r3 > ERef_current_clientWidth) {
          break;
        }
        a2 = e;
      }
      setEe(Math.max(1, o2));
    };
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(ERef_current);
    document.fonts?.ready.then(n4).catch(() => {
    });
    return () => r2.disconnect();
  }, [sources2]);
  let P = k ? sources2.length : Math.min(ee, sources2.length);
  let F = sources2.length - P;
  let I = [];
  segments2.forEach((seg, index) => {
    if (seg.paragraph || I.length === 0) {
      I.push([]);
    }
    I[I.length - 1].push({
      seg,
      index
    });
  });
  let length = segments2.filter((e) => e.text.trim()).length;
  let length_1 = segments2.filter((e) => e.text.trim() && e.cite?.some(N)).length;
  let z = (t) => segments2.filter((e) => e.cite?.includes(t));
  let B = (e) => {
    let t = x === e ? null : e;
    setX(t);
    onPreviewChange?.(t);
  };
  let onClick = () => {
    if (!x) {
      return;
    }
    let e = x;
    setX(null);
    onPreviewChange?.(null);
    ERef.current?.querySelector(`[data-source="${CSS.escape(e)}"]`)?.focus({
      preventScroll: true
    });
  };
  let H = (e) => {
    let t = `\u201C${e.quote ?? e.title}\u201D \u2013 ${e.title}, ${e.site}${e.url ? ` (${e.url})` : ``}`;
    navigator.clipboard?.writeText(t).catch(() => {
    });
    setW({
      id: Date.now(),
      source: e.id
    });
  };
  n3.useEffect(() => {
    if (!w) {
      return;
    }
    let e = window.setTimeout(() => setW(null), 1800);
    return () => window.clearTimeout(e);
  }, [w]);
  let U = (e) => {
    if (e.key === `Escape` && x) {
      e.stopPropagation();
      onClick();
    }
  };
  let W = (e) => {
    let t = [...ERef.current?.querySelectorAll(`.ui-cac__chip, .ui-cac__more`) ?? []];
    let n4 = t.indexOf(e.currentTarget);
    let r2 = t.length - 1;
    let i2 = e.key === `ArrowRight` ? Math.min(r2, n4 + 1) : e.key === `ArrowLeft` ? Math.max(0, n4 - 1) : e.key === `Home` ? 0 : e.key === `End` ? r2 : null;
    if (!(i2 === null || n4 < 0)) {
      e.preventDefault();
      t[i2]?.focus();
    }
  };
  let G = y?.source ?? null;
  let K = (seg, index) => {
    if (y) {
      if (y.segment === void 0) {
        if (seg.cite?.includes(y.source)) {
          return `hl`;
        }
        return `dim`;
      }
      if (y.segment === index) {
        return `hl`;
      }
      return void 0;
    }
    if (x && seg.cite?.includes(x)) {
      return `hl`;
    }
  };
  let q = M(G);
  let J = M(x);
  let Y = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: length_1 }),
    ` of `,
    length,
    ` `,
    length === 1 ? `sentence` : `sentences`,
    ` backed by a source`
  ] });
  let X = `rest`;
  let tone;
  if (w) {
    Y = `Quote copied`;
    X = `copied-${w.id}`;
    tone = `ok`;
  } else if (q && y?.segment !== void 0) {
    Y = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: q.site }),
      ` `,
      /* @__PURE__ */ jsx("span", { className: `ui-cac__dot`, children: `\xB7` }),
      ` `,
      q.title
    ] });
    X = `mark-${y.segment}-${q.id}`;
  } else if (q) {
    let e = z(q.id).length;
    Y = e ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: q.site }),
      ` `,
      /* @__PURE__ */ jsx("span", { className: `ui-cac__dot`, children: `\xB7` }),
      ` cited in `,
      e,
      ` `,
      e === 1 ? `sentence` : `sentences`
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: q.site }),
      ` `,
      /* @__PURE__ */ jsx("span", { className: `ui-cac__dot`, children: `\xB7` }),
      ` read, not cited`
    ] });
    X = `src-${q.id}`;
  } else {
    if (J) {
      Y = /* @__PURE__ */ jsxs(Fragment, { children: [
        `Quote from `,
        /* @__PURE__ */ jsx("b", { children: J.site })
      ] });
      X = `open-${J.id}`;
    }
  }
  let Q = M(x ?? CRef.current);
  let $ = `${v}-preview`;
  let te = [`${sources2.length} ${sources2.length === 1 ? `source` : `sources`}`, pagesRead === void 0 ? null : `${pagesRead} ${pagesRead === 1 ? `page` : `pages`} read`].filter(Boolean);
  return /* @__PURE__ */ jsxs("div", { className: [`ui-cac`, className].filter(Boolean).join(` `), role: `group`, "aria-label": `Answer with sources`, "data-hot": y ? y.segment === void 0 ? `source` : `mark` : void 0, onKeyDown: U, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-cited-answer-clean`, precedence: `default`, children: g }),
    /* @__PURE__ */ jsxs("div", { className: `ui-cac__body`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-cac__head`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-cac__stack`, "aria-hidden": `true`, children: sources2.slice(0, 3).map((e) => /* @__PURE__ */ jsx(P1Component, { source: e }, e.id)) }),
        /* @__PURE__ */ jsx("span", { className: `ui-cac__meta`, children: te.map((e, t) => /* @__PURE__ */ jsxs("span", { children: [
          t > 0 && /* @__PURE__ */ jsx("span", { className: `ui-cac__dot`, children: ` \xB7 ` }),
          e
        ] }, e)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-cac__text`, onPointerLeave: () => setY(null), children: I.map((e, key) => /* @__PURE__ */ jsx("p", { className: `ui-cac__p`, children: e.map(({
        seg,
        index
      }) => {
        let [, n4, i2, a2] = seg.text.match(/^(\s*)([\s\S]*?)(\s*)$/) ?? [``, ``, seg.text, ``];
        let o2 = (seg.cite ?? []).filter(N);
        let s2 = K(seg, index);
        let c2 = o2.length ? Math.max(0, i2.search(/\S+$/)) : i2.length;
        return /* @__PURE__ */ jsxs("span", { children: [
          n4,
          /* @__PURE__ */ jsxs("span", { className: `ui-cac__seg`, "data-hl": s2 === `hl` ? `` : void 0, "data-dim": s2 === `dim` ? `` : void 0, children: [
            i2.slice(0, c2),
            /* @__PURE__ */ jsxs("span", { className: `ui-cac__keep`, children: [
              i2.slice(c2),
              o2.map((e2) => {
                let n5 = M(e2);
                let i3 = y?.segment === index && y.source === e2 || y?.segment === void 0 && y?.source === e2;
                return /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cac__marker`, "data-source": e2, "data-lit": i3 ? `` : void 0, "data-dim": y && !i3 ? `` : void 0, "aria-expanded": x === e2, "aria-controls": $, "aria-label": `Source ${j(e2)}: ${n5.site} \u2013 ${n5.title}`, onPointerEnter: (n6) => n6.pointerType === `mouse` && setY({
                  source: e2,
                  segment: index
                }), onPointerLeave: (e3) => e3.pointerType === `mouse` && setY(null), onFocus: () => setY({
                  source: e2,
                  segment: index
                }), onBlur: () => setY(null), onClick: () => B(e2), children: j(e2) }, e2);
              })
            ] })
          ] }),
          a2
        ] }, index);
      }) }, key)) }),
      /* @__PURE__ */ jsxs("div", { className: `ui-cac__chips`, "data-all": k ? `` : void 0, ref: ERef, role: `list`, "aria-label": `Sources`, onPointerLeave: () => setY(null), children: [
        sources2.slice(0, P).map((e, t) => {
          let n4 = G === e.id;
          return /* @__PURE__ */ jsx("span", { role: `listitem`, className: `ui-cac__chip-item`, children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cac__chip`, "data-source": e.id, "data-lit": n4 ? `` : void 0, "data-dim": G && !n4 ? `` : void 0, "aria-expanded": x === e.id, "aria-controls": $, "aria-label": `Source ${t + 1}: ${e.site} \u2013 ${e.title}`, onPointerEnter: (t2) => t2.pointerType === `mouse` && setY({
            source: e.id
          }), onFocus: () => setY({
            source: e.id
          }), onBlur: () => setY(null), onKeyDown: W, onClick: () => B(e.id), children: [
            /* @__PURE__ */ jsx(P1Component, { source: e }),
            /* @__PURE__ */ jsx("span", { className: `ui-cac__chip-name`, children: e.site }),
            /* @__PURE__ */ jsx("span", { className: `ui-cac__chip-num`, children: t + 1 })
          ] }) }, e.id);
        }),
        F > 0 && /* @__PURE__ */ jsx("span", { role: `listitem`, className: `ui-cac__chip-item`, children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cac__more`, "aria-label": `Show ${F} more ${F === 1 ? `source` : `sources`}`, onKeyDown: W, onClick: () => setK(true), children: [
          `+`,
          F
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-cac__ruler`, ref: DRef, "aria-hidden": `true`, children: [
        sources2.map((e, t) => /* @__PURE__ */ jsxs("span", { className: `ui-cac__chip`, "data-chip": ``, children: [
          /* @__PURE__ */ jsx(P1Component, { source: e }),
          /* @__PURE__ */ jsx("span", { className: `ui-cac__chip-name`, children: e.site }),
          /* @__PURE__ */ jsx("span", { className: `ui-cac__chip-num`, children: t + 1 })
        ] }, e.id)),
        /* @__PURE__ */ jsxs("span", { className: `ui-cac__more`, "data-more": ``, children: [
          `+`,
          sources2.length
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { id: $, className: `ui-cac__fold`, "data-open": x ? `` : void 0, inert: !x, role: `region`, "aria-label": Q ? `Source ${j(Q.id)}: ${Q.site}` : `Source`, children: /* @__PURE__ */ jsx("div", { className: `ui-cac__clip`, children: Q && /* @__PURE__ */ jsxs("div", { className: `ui-cac__preview`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-cac__pv-head`, children: [
          /* @__PURE__ */ jsx(P1Component, { source: Q }),
          /* @__PURE__ */ jsxs("span", { className: `ui-cac__pv-meta`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-cac__pv-domain`, children: o(Q.url) || Q.site }),
            Q.date && /* @__PURE__ */ jsxs("span", { className: `ui-cac__pv-date`, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-cac__dot`, children: ` \xB7 ` }),
              Q.date
            ] })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `ui-cac__pv-num`, children: j(Q.id) }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cac__close`, "aria-label": `Close source`, onClick, children: /* @__PURE__ */ jsx(D1Component, { d: f.close }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-cac__pv-title`, children: Q.title }),
        Q.quote && /* @__PURE__ */ jsx("blockquote", { className: `ui-cac__quote`, children: l(Q.quote, Q.highlight, z(Q.id).map((e) => e.text).join(` `)) }),
        /* @__PURE__ */ jsxs("div", { className: `ui-cac__pv-actions`, children: [
          Q.url ? /* @__PURE__ */ jsxs("a", { className: `ui-cac__btn ui-cac__btn--main`, href: Q.url, target: `_blank`, rel: `noreferrer noopener`, onClick: (e) => {
            if (onOpenSource) {
              e.preventDefault();
              onOpenSource(Q);
            }
          }, children: [
            /* @__PURE__ */ jsx(D1Component, { d: f.out }),
            `Open source`
          ] }) : onOpenSource && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cac__btn ui-cac__btn--main`, onClick: () => onOpenSource(Q), children: [
            /* @__PURE__ */ jsx(D1Component, { d: f.out }),
            `Open source`
          ] }),
          Q.quote && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cac__btn`, "data-done": w?.source === Q.id ? `` : void 0, "aria-label": `Copy quote`, onClick: () => H(Q), children: [
            /* @__PURE__ */ jsx("span", { className: `ui-cac__btn-icon`, children: /* @__PURE__ */ jsx(D1Component, { d: w?.source === Q.id ? f.done : f.copy }) }, w?.source === Q.id ? `done` : `idle`),
            /* @__PURE__ */ jsx("span", { className: `ui-cac__btn-text`, children: w?.source === Q.id ? `Copied` : `Copy quote` })
          ] })
        ] })
      ] }, Q.id) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ui-cac__foot`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-cac__caption`, "aria-live": `polite`, children: /* @__PURE__ */ jsx(U1Component, { id: X, tone, children: Y }) }),
      action && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cac__action`, onClick: action.onClick, children: [
        action.label,
        /* @__PURE__ */ jsx(D1Component, { d: f.arrow })
      ] })
    ] })
  ] });
}
var g = `.ui-cac{--ui-cac-card: #ffffff;--ui-cac-ink: rgba(0, 0, 0, 0.88);--ui-cac-strong: #000000;--ui-cac-text: rgba(0, 0, 0, 0.61);--ui-cac-muted: rgba(0, 0, 0, 0.45);--ui-cac-faint: rgba(0, 0, 0, 0.27);--ui-cac-icon: rgba(0, 0, 0, 0.447);--ui-cac-line: rgba(0, 0, 0, 0.06);--ui-cac-fill: rgba(0, 0, 0, 0.06);--ui-cac-fill-strong: rgba(0, 0, 0, 0.1);--ui-cac-wash: rgba(0, 0, 0, 0.03);--ui-cac-hl: rgba(0, 96, 226, 0.07);--ui-cac-mark: rgba(0, 96, 226, 0.1);--ui-cac-ok: #1a9a52;--ui-cac-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cac-focus: rgba(0, 96, 226, 0.35);--ui-cac-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;max-width: 460px;min-width: 0;container-type: inline-size;border-radius: 10px;background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-cac-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-cac *, .ui-cac *::before, .ui-cac *::after{box-sizing: border-box}:where(.ui-cac) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-cac :is(button, a):focus-visible{outline: 2px solid var(--ui-cac-focus);outline-offset: 1px}.ui-cac svg{display: block;flex: none}.ui-cac b{font-weight: 500;color: var(--ui-cac-ink)}.ui-cac__dot{color: var(--ui-cac-faint)}.ui-cac__icon{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-cac [data-tone="blue"]{--ui-cac-g: #1f5fd1;--ui-cac-g-bg: rgba(0, 96, 226, 0.08)}.ui-cac [data-tone="violet"]{--ui-cac-g: #6a4fd0;--ui-cac-g-bg: rgba(110, 86, 230, 0.09)}.ui-cac [data-tone="green"]{--ui-cac-g: #1a8a4a;--ui-cac-g-bg: rgba(26, 154, 82, 0.09)}.ui-cac [data-tone="amber"]{--ui-cac-g: #a46a06;--ui-cac-g-bg: rgba(232, 162, 12, 0.12)}.ui-cac [data-tone="gray"]{--ui-cac-g: rgba(0, 0, 0, 0.55);--ui-cac-g-bg: rgba(0, 0, 0, 0.06)}.ui-cac__glyph{display: grid;flex: none;place-items: center;width: 16px;height: 16px;overflow: hidden;border-radius: 4px;background: var(--ui-cac-g-bg);font-size: 9.5px;font-weight: 500;line-height: 1;color: var(--ui-cac-g)}.ui-cac__glyph > :is(img, svg){width: 100%;height: 100%;object-fit: cover}.ui-cac__body{padding: 16px 20px 16px}.ui-cac__head{display: flex;align-items: center;gap: 8px;height: 16px}.ui-cac__stack{display: flex;flex: none}.ui-cac__stack .ui-cac__glyph{box-shadow: 0 0 0 1.5px var(--ui-cac-card)}.ui-cac__stack .ui-cac__glyph + .ui-cac__glyph{margin-left: -4px}.ui-cac__meta{min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cac-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-cac__text{margin-top: 12px;color: var(--ui-cac-ink)}.ui-cac__p{margin: 0;font-size: 13px;line-height: 22px}.ui-cac__p + .ui-cac__p{margin-top: 10px}.ui-cac__seg{margin: 0 -2px;padding: 2px 2px;border-radius: 4px;-webkit-box-decoration-break: clone;box-decoration-break: clone;transition: background-color 200ms ease, color 200ms ease}.ui-cac__seg[data-hl]{background: var(--ui-cac-hl);color: var(--ui-cac-strong)}.ui-cac__seg[data-dim]{color: var(--ui-cac-faint)}.ui-cac__keep{white-space: nowrap}.ui-cac__marker{position: relative;display: inline-grid;place-items: center;min-width: 16px;height: 16px;margin-left: 3px;padding: 0 4px;border-radius: 4px;background: var(--ui-cac-fill);box-shadow: inset 0 0 0 0.5px var(--ui-cac-line);font-size: 10px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);vertical-align: 1px;font-variant-numeric: tabular-nums;transition: background-color 160ms ease, color 160ms ease, opacity 200ms ease}.ui-cac__marker + .ui-cac__marker{margin-left: 2px}.ui-cac__marker::after{content: "";position: absolute;inset: -4px -2px}.ui-cac__marker:hover, .ui-cac__marker[data-lit], .ui-cac__marker[aria-expanded="true"]{background: var(--ui-cac-fill-strong);color: var(--ui-cac-ink)}.ui-cac__marker[data-dim]:not([aria-expanded="true"]){opacity: 0.5}.ui-cac__chips{display: flex;gap: ${m}px;margin-top: 16px;min-width: 0}.ui-cac__chips[data-all]{flex-wrap: wrap}.ui-cac__chip-item{display: flex;flex: none;min-width: 0;max-width: 100%}.ui-cac__chip-item:only-child, .ui-cac__chips:not([data-all]) .ui-cac__chip-item:first-child:nth-last-child(2){flex: 0 1 auto}.ui-cac__chip{display: inline-flex;align-items: center;gap: 6px;min-width: 0;max-width: 100%;height: 28px;padding: 0 8px 0 6px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cac-line);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);white-space: nowrap;transition: background-color 140ms ease, color 140ms ease, opacity 200ms ease}.ui-cac__chip:hover, .ui-cac__chip[data-lit]{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__chip[aria-expanded="true"]{background: var(--ui-cac-fill);color: var(--ui-cac-ink)}.ui-cac__chip[data-dim]:not([aria-expanded="true"]){opacity: 0.5}.ui-cac__chip-name{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-cac__chip-num{flex: none;margin-left: -1px;font-size: 11px;font-weight: 400;color: var(--ui-cac-faint);font-variant-numeric: tabular-nums}.ui-cac__more{display: inline-grid;flex: none;place-items: center;height: 28px;padding: 0 8px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cac-line);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);font-variant-numeric: tabular-nums;transition: background-color 140ms ease, color 140ms ease}.ui-cac__more:hover{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__ruler{position: absolute;top: 0;left: 0;display: flex;gap: ${m}px;height: 0;overflow: hidden;visibility: hidden;pointer-events: none}.ui-cac__ruler > *{flex: none}.ui-cac__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-cac-ease), opacity 220ms ease}.ui-cac__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-cac-ease), opacity 320ms ease 80ms}.ui-cac__clip{min-height: 0;overflow: hidden;margin: 0 -4px -4px;padding: 0 4px 4px}.ui-cac__preview{margin-top: 12px;padding: 10px 12px 12px;border-radius: 8px;background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);animation: ui-cac-swap-in 320ms ease both}.ui-cac__pv-head{display: flex;align-items: center;gap: 8px;height: 24px}.ui-cac__pv-meta{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cac-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cac__pv-domain{color: var(--ui-cac-text)}.ui-cac__pv-num{display: grid;flex: none;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-cac-fill);font-size: 10px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);font-variant-numeric: tabular-nums}.ui-cac__close{display: grid;flex: none;place-items: center;width: 24px;height: 24px;margin-right: -6px;border-radius: 6px;color: var(--ui-cac-icon);transition: background-color 140ms ease, color 140ms ease}.ui-cac__close:hover{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__pv-title{display: -webkit-box;margin-top: 6px;overflow: hidden;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cac-strong);-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-cac__quote{margin: 8px 0 0;padding: 0 0 0 10px;border-left: 2px solid var(--ui-cac-fill);font-size: 12px;line-height: 20px;color: var(--ui-cac-text)}.ui-cac__quote mark{margin: 0 -1px;padding: 1px 1px;border-radius: 3px;background: var(--ui-cac-mark);color: var(--ui-cac-ink);-webkit-box-decoration-break: clone;box-decoration-break: clone}.ui-cac__pv-actions{display: flex;flex-wrap: wrap;align-items: center;gap: 8px;margin-top: 12px}.ui-cac__btn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cac-text);text-decoration: none;white-space: nowrap;transition: background-color 140ms ease, color 140ms ease}.ui-cac__btn .ui-cac__icon{color: var(--ui-cac-icon);transition: color 140ms ease, transform 220ms var(--ui-cac-ease)}.ui-cac__btn:hover{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__btn:hover .ui-cac__icon{color: var(--ui-cac-ink)}.ui-cac__btn--main{background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);color: var(--ui-cac-strong)}.ui-cac__btn--main:hover{background: #fafafa;color: var(--ui-cac-strong)}.ui-cac__btn--main:hover .ui-cac__icon{transform: translate(1px, -1px)}.ui-cac__btn[data-done], .ui-cac__btn[data-done] .ui-cac__icon{color: var(--ui-cac-ok)}.ui-cac__btn-icon{display: grid;place-items: center;width: 16px;height: 16px;animation: ui-cac-swap-in 280ms ease both}.ui-cac__foot{display: flex;align-items: center;gap: 12px;height: 44px;padding: 0 8px 0 20px;border-top: 0.5px solid var(--ui-cac-line)}.ui-cac__foot:not(:has(.ui-cac__action)){padding-right: 20px}.ui-cac__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cac-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-cac__swap{display: grid;min-width: 0}.ui-cac__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-cac-swap-in 320ms ease both}.ui-cac__swap-item[data-out]{animation: ui-cac-swap-out 220ms ease both}.ui-cac__swap-item[data-tone="ok"]{color: var(--ui-cac-ok)}.ui-cac__action{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 28px;padding: 0 8px 0 10px;border-radius: 6px;background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cac-strong);white-space: nowrap;transition: background-color 140ms ease}.ui-cac__action .ui-cac__icon{color: var(--ui-cac-icon);transition: transform 220ms var(--ui-cac-ease), color 140ms ease}.ui-cac__action:hover{background: #fafafa}.ui-cac__action:hover .ui-cac__icon{color: var(--ui-cac-ink);transform: translateX(2px)}@keyframes ui-cac-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-cac-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@container (max-width: 400px){.ui-cac__body{padding: 14px 16px 16px}.ui-cac__foot{padding-left: 16px}}@container (max-width: 360px){.ui-cac__pv-num{display: none}}@container (max-width: 280px){.ui-cac__btn-text{display: none}}@media (pointer: coarse){.ui-cac__marker::after{inset: -8px -5px}.ui-cac__chip, .ui-cac__more{height: 34px}.ui-cac__btn{height: 34px}.ui-cac__close{width: 32px;height: 32px;margin-right: -8px}.ui-cac__action{height: 34px}.ui-cac__foot{height: 52px}}@media (prefers-reduced-motion: reduce){.ui-cac *, .ui-cac *::before, .ui-cac *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cac{--ui-cac-card: #1c1c1e;--ui-cac-ink: rgba(255, 255, 255, 0.9);--ui-cac-strong: #ffffff;--ui-cac-text: rgba(255, 255, 255, 0.62);--ui-cac-muted: rgba(255, 255, 255, 0.46);--ui-cac-faint: rgba(255, 255, 255, 0.3);--ui-cac-icon: rgba(255, 255, 255, 0.5);--ui-cac-line: rgba(255, 255, 255, 0.08);--ui-cac-fill: rgba(255, 255, 255, 0.08);--ui-cac-fill-strong: rgba(255, 255, 255, 0.14);--ui-cac-wash: rgba(255, 255, 255, 0.04);--ui-cac-hl: rgba(77, 141, 255, 0.14);--ui-cac-mark: rgba(77, 141, 255, 0.24);--ui-cac-ok: #3ec27a;--ui-cac-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cac-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-cac__btn--main:hover, :where(.dark, [data-theme="dark"]) .ui-cac__action:hover{background: #232326}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="blue"]{--ui-cac-g: #9bbcff;--ui-cac-g-bg: rgba(77, 141, 255, 0.16)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="violet"]{--ui-cac-g: #c3b4ff;--ui-cac-g-bg: rgba(124, 92, 255, 0.18)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="green"]{--ui-cac-g: #6ee7a8;--ui-cac-g-bg: rgba(34, 160, 90, 0.16)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="amber"]{--ui-cac-g: #f5c264;--ui-cac-g-bg: rgba(240, 160, 32, 0.16)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="gray"]{--ui-cac-g: rgba(255, 255, 255, 0.62);--ui-cac-g-bg: rgba(255, 255, 255, 0.08)}`;
var sources = [{
  id: `caching`,
  site: `Tokenwise`,
  title: `Prompt caching, explained: what gets stored and for how long`,
  url: `https://tokenwise.dev/blog/prompt-caching`,
  date: `Sep 18, 2026`,
  quote: `A cached prefix is read instead of recomputed. On prompts over 10,000 tokens this cut time to first token by up to 80% in our tests, and cached input is billed at a fraction of the normal rate.`,
  highlight: [`read instead of recomputed`, `cut time to first token by up to 80%`]
}, {
  id: `prompts`,
  site: `Latency Notes`,
  title: `Designing cache-friendly prompts`,
  url: `https://latencynotes.io/cache-friendly-prompts`,
  date: `Aug 2, 2026`,
  quote: `Keep the stable part \u2013 system prompt, tool definitions, long documents \u2013 at the very start, and put anything that changes per request after it. A single changed character early on invalidates everything behind it.`,
  highlight: [`at the very start`, `anything that changes per request after it`, `invalidates everything behind it`]
}, {
  id: `semantic`,
  site: `Inference Weekly`,
  title: `Semantic caching for LLM apps in production`,
  url: `https://inferenceweekly.com/semantic-caching`,
  date: `Jul 24, 2026`,
  quote: `For FAQ-style traffic, the semantic cache answered 31% of requests without calling the model at all, at a median of 40 ms. We only serve a stored answer above a similarity of 0.92.`,
  highlight: [`31% of requests`, `median of 40 ms`]
}];
var segments = [{
  text: `The biggest win is prompt caching: the provider reuses the processed start of your prompt, so a long system prompt isn't recomputed on every call.`,
  cite: [`caching`]
}, {
  text: ` On prompts over 10K tokens that can cut time to first token by up to 80%.`,
  cite: [`caching`]
}, {
  text: ` It only works while that start stays identical, so put the system prompt, tools and long documents first and anything that changes per request last.`,
  cite: [`prompts`, `caching`]
}, {
  text: `For repeated questions, add a semantic cache in front of the model: close matches get a stored answer in about 40 ms,`,
  cite: [`semantic`],
  paragraph: true
}, {
  text: ` which covered nearly a third of FAQ-style traffic in one production setup.`,
  cite: [`semantic`]
}, {
  text: ` Stream the rest, so people see the first words while the answer is still being written.`
}];
function YComponent() {
  let eRef = n3.useRef(null);
  let tRef = n3.useRef(false);
  let iRef = n3.useRef(false);
  n3.useEffect(() => {
    let n4 = (t) => eRef.current?.querySelector(t);
    let r2 = (t, n5) => {
      if (t) {
        iRef.current = true;
        t.dispatchEvent(new PointerEvent(n5, {
          bubbles: true,
          pointerType: `mouse`,
          relatedTarget: n5 === `pointerout` ? eRef.current : null
        }));
        iRef.current = false;
      }
    };
    let a3 = (e) => n4(`.ui-cac__marker[data-source="${e}"]`);
    let o2 = [[700, () => r2(a3(`caching`), `pointerover`)], [2600, () => r2(a3(`caching`), `pointerout`)], [500, () => a3(`prompts`)?.click()], [3800, () => n4(`.ui-cac__close`)?.click()], [1800, () => {
    }]];
    let s2 = 0;
    let c2 = 0;
    let l2 = () => {
      if (!tRef.current) {
        c2 = window.setTimeout(() => {
          if (!tRef.current) {
            o2[s2][1]();
            s2 = (s2 + 1) % o2.length;
            l2();
          }
        }, o2[s2][0]);
      }
    };
    l2();
    return () => window.clearTimeout(c2);
  }, []);
  let a2 = () => {
    if (!iRef.current) {
      tRef.current = true;
    }
  };
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `ca-demo`, onPointerEnter: a2, onPointerDownCapture: a2, onKeyDownCapture: a2, onFocusCapture: a2, children: /* @__PURE__ */ jsx(H1Component, { segments, sources, pagesRead: 12, onOpenSource: () => {
  }, action: {
    label: `Follow up`,
    onClick: () => {
    }
  } }) });
}

export {
  YComponent
};
