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

// reconstructed/demo-Ye53Zfy1.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = () => typeof window < `u` && window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
function AComponent({
  id,
  children,
  duration = 420,
  blur = 10,
  morph = `height`,
  as: _Component = `div`,
  className,
  style: style_1
}) {
  let fRef = n3.useRef(null);
  let pRef = n3.useRef(null);
  let [m, setM] = n3.useState(null);
  let gRef = n3.useRef(id);
  let _RefRef = n3.useRef(children);
  let vRef = n3.useRef({
    w: 0,
    h: 0
  });
  let yRef = n3.useRef(false);
  let bRef = n3.useRef(0);
  let xRef = n3.useRef(0);
  n3.useLayoutEffect(() => {
    let fRef_current = fRef.current;
    let pRef_current = pRef.current;
    if (id === gRef.current || !fRef_current || !pRef_current) {
      _RefRef.current = children;
      return;
    }
    gRef.current = id;
    let _Ref_current = _RefRef.current;
    _RefRef.current = children;
    window.clearTimeout(bRef.current);
    let s2 = {
      w: pRef_current.offsetWidth,
      h: pRef_current.offsetHeight
    };
    if (i() || duration <= 0) {
      setM(null);
      fRef_current.style.height = fRef_current.style.width = fRef_current.style.transition = ``;
      fRef_current.removeAttribute(`data-busy`);
      yRef.current = false;
      vRef.current = s2;
      return;
    }
    let l = fRef_current.getBoundingClientRect();
    let u = yRef.current ? {
      w: l.width,
      h: l.height
    } : vRef.current;
    setM({
      id: gRef.current,
      node: _Ref_current,
      n: ++xRef.current,
      w: vRef.current.w,
      h: vRef.current.h
    });
    vRef.current = s2;
    yRef.current = true;
    fRef_current.setAttribute(`data-busy`, ``);
    if (morph !== `none`) {
      fRef_current.style.transition = `none`;
      fRef_current.style.height = `${u.h}px`;
      if (morph === `both`) {
        fRef_current.style.width = `${u.w}px`;
      }
      fRef_current.offsetHeight;
      let e = `${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      fRef_current.style.transition = morph === `both` ? `height ${e}, width ${e}` : `height ${e}`;
      fRef_current.style.height = `${s2.h}px`;
      if (morph === `both`) {
        fRef_current.style.width = `${s2.w}px`;
      }
    }
    bRef.current = window.setTimeout(() => {
      fRef_current.style.height = fRef_current.style.width = fRef_current.style.transition = ``;
      fRef_current.removeAttribute(`data-busy`);
      yRef.current = false;
      setM(null);
    }, duration + 30);
  });
  n3.useEffect(() => {
    let pRef_current = pRef.current;
    if (!pRef_current || typeof ResizeObserver > `u`) {
      return;
    }
    let t = new ResizeObserver(() => {
      if (!yRef.current) {
        vRef.current = {
          w: pRef_current.offsetWidth,
          h: pRef_current.offsetHeight
        };
      }
    });
    t.observe(pRef_current);
    vRef.current = {
      w: pRef_current.offsetWidth,
      h: pRef_current.offsetHeight
    };
    return () => t.disconnect();
  }, [id]);
  n3.useEffect(() => () => window.clearTimeout(bRef.current), []);
  let style_2 = {
    "--ui-bx-duration": `${duration}ms`,
    "--ui-bx-blur": `${blur}px`,
    ...style_1
  };
  let C = _Component;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-blur-crossfade`, precedence: `default`, children: o }),
    /* @__PURE__ */ jsx(_Component, { ref: fRef, className: [`ui-bx`, `ui-bx--${morph}`, className].filter(Boolean).join(` `), style: style_2, children: [/* @__PURE__ */ jsx(C, { ref: pRef, className: `ui-bx__layer${m ? ` ui-bx__layer--in` : ``}`, children }, `c-${id}`), m && /* @__PURE__ */ jsx(C, { className: `ui-bx__layer ui-bx__layer--out`, "aria-hidden": `true`, inert: true, style: {
      width: m.w || void 0
    }, children: m.node }, `x-${m.id}-${m.n}`)] })
  ] });
}
var o = `.ui-bx{--ui-bx-duration: 420ms;--ui-bx-blur: 10px;--ui-bx-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;display: block}.ui-bx--both{display: inline-block;vertical-align: top}.ui-bx[data-busy]{overflow: hidden}.ui-bx__layer{display: block}.ui-bx--both > .ui-bx__layer{width: max-content}.ui-bx__layer--out{position: absolute;top: 0;left: 0;pointer-events: none}.ui-bx--height > .ui-bx__layer--out, .ui-bx--none > .ui-bx__layer--out{right: 0}.ui-bx--both > .ui-bx__layer--out{left: 50%;translate: -50% 0}.ui-bx--both > .ui-bx__layer--in{margin-left: 50%;translate: -50% 0}.ui-bx__layer--in{animation: ui-bx-in var(--ui-bx-duration) var(--ui-bx-ease) both}.ui-bx__layer--out{animation: ui-bx-out calc(var(--ui-bx-duration) * 0.8) ease-in both}@keyframes ui-bx-in{from{opacity: 0;filter: blur(var(--ui-bx-blur));transform: scale(0.98)}to{opacity: 1;filter: blur(0);transform: scale(1)}}@keyframes ui-bx-out{from{opacity: 1;filter: blur(0);transform: scale(1)}to{opacity: 0;filter: blur(var(--ui-bx-blur));transform: scale(1.02)}}@media (prefers-reduced-motion: reduce){.ui-bx__layer--in, .ui-bx__layer--out{animation: none}.ui-bx__layer--out{display: none}}:where(.dark, [data-theme="dark"]) .ui-bx{color: inherit}`;
var s = [{
  tag: `Shipped`,
  text: `Dark mode is live for everyone.`
}, {
  tag: `Improved`,
  text: `Search now looks through comments and attachments too, and results show up while you type \u2013 no more waiting for the full page.`
}, {
  tag: `Fixed`,
  text: `Exports keep their column order, even with hidden fields in between.`
}];
function CComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(`idle`);
  let [o2, setO] = n3.useState(0);
  let lRef = n3.useRef([]);
  let u = () => {
    if (t === `idle`) {
      setT(`busy`);
      lRef.current.push(window.setTimeout(() => setT(`done`), 1500), window.setTimeout(() => setT(`idle`), 3600));
    }
  };
  let d = () => setO((e) => (e + 1) % s.length);
  n3.useEffect(() => () => lRef.current.forEach((e) => window.clearTimeout(e)), []);
  n3.useEffect(() => {
    if (!eRef.current?.closest(`.card__preview`)) {
      return;
    }
    let t2 = 0;
    let n4 = window.setInterval(() => {
      t2++;
      if (t2 % 2) {
        setO((e) => (e + 1) % s.length);
      } else {
        setT((e) => {
          if (e === `idle`) {
            return `busy`;
          }
          if (e === `busy`) {
            return `done`;
          }
          return `idle`;
        });
      }
    }, 1300);
    return () => window.clearInterval(n4);
  }, []);
  let f = s[o2];
  return /* @__PURE__ */ jsx("div", { className: `blur-crossfade-demo`, ref: eRef, children: /* @__PURE__ */ jsxs("div", { className: `bxd-card`, children: [
    /* @__PURE__ */ jsxs("div", { className: `bxd-head`, children: [
      /* @__PURE__ */ jsxs("div", { className: `bxd-meta`, children: [
        /* @__PURE__ */ jsx("span", { className: `bxd-title`, children: `Release 2.4` }),
        /* @__PURE__ */ jsx("span", { className: `bxd-sub`, children: `3 changes \xB7 draft` })
      ] }),
      /* @__PURE__ */ jsx("button", { type: `button`, className: `bxd-primary`, "data-status": t, onClick: u, "aria-live": `polite`, children: /* @__PURE__ */ jsxs(AComponent, { id: t, morph: `both`, as: `span`, blur: 6, duration: 380, children: [
        t === `idle` && /* @__PURE__ */ jsx("span", { className: `bxd-btn`, children: `Publish` }),
        t === `busy` && /* @__PURE__ */ jsxs("span", { className: `bxd-btn`, children: [
          /* @__PURE__ */ jsx("span", { className: `bxd-spin`, "aria-hidden": `true` }),
          `Publishing\u2026`
        ] }),
        t === `done` && /* @__PURE__ */ jsxs("span", { className: `bxd-btn`, children: [
          /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `14`, height: `14`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.8`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M3.5 8.5l3 3 6-7` }) }),
          `Published`
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `bxd-panel`, children: /* @__PURE__ */ jsx(AComponent, { id: o2, children: /* @__PURE__ */ jsxs("div", { className: `bxd-note`, children: [
      /* @__PURE__ */ jsx("span", { className: `bxd-tag`, "data-kind": f.tag, children: f.tag }),
      /* @__PURE__ */ jsx("p", { children: f.text })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: `bxd-foot`, children: [
      /* @__PURE__ */ jsx("span", { className: `bxd-dots`, "aria-hidden": `true`, children: s.map((e, t2) => /* @__PURE__ */ jsx("i", { "data-on": t2 === o2 || void 0 }, t2)) }),
      /* @__PURE__ */ jsx("button", { type: `button`, className: `bxd-chip`, onClick: d, children: `Next` })
    ] })
  ] }) });
}

export {
  CComponent
};
