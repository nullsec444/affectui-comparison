import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-Ye53Zfy1.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = () => typeof window < `u` && window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
function a({ id: e, children: t, duration: a2 = 420, blur: s2 = 10, morph: c2 = `height`, as: l = `div`, className: u, style: d }) {
  let f = (0, n3.useRef)(null), p = (0, n3.useRef)(null), [m, h] = (0, n3.useState)(null), g = (0, n3.useRef)(e), _ = (0, n3.useRef)(t), v = (0, n3.useRef)({ w: 0, h: 0 }), y = (0, n3.useRef)(false), b = (0, n3.useRef)(0), x = (0, n3.useRef)(0);
  (0, n3.useLayoutEffect)(() => {
    let n4 = f.current, r2 = p.current;
    if (e === g.current || !n4 || !r2) {
      _.current = t;
      return;
    }
    g.current = e;
    let o2 = _.current;
    _.current = t, window.clearTimeout(b.current);
    let s3 = { w: r2.offsetWidth, h: r2.offsetHeight };
    if (i() || a2 <= 0) {
      h(null), n4.style.height = n4.style.width = n4.style.transition = ``, n4.removeAttribute(`data-busy`), y.current = false, v.current = s3;
      return;
    }
    let l2 = n4.getBoundingClientRect(), u2 = y.current ? { w: l2.width, h: l2.height } : v.current;
    if (h({ id: g.current, node: o2, n: ++x.current, w: v.current.w, h: v.current.h }), v.current = s3, y.current = true, n4.setAttribute(`data-busy`, ``), c2 !== `none`) {
      n4.style.transition = `none`, n4.style.height = `${u2.h}px`, c2 === `both` && (n4.style.width = `${u2.w}px`), n4.offsetHeight;
      let e2 = `${a2}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      n4.style.transition = c2 === `both` ? `height ${e2}, width ${e2}` : `height ${e2}`, n4.style.height = `${s3.h}px`, c2 === `both` && (n4.style.width = `${s3.w}px`);
    }
    b.current = window.setTimeout(() => {
      n4.style.height = n4.style.width = n4.style.transition = ``, n4.removeAttribute(`data-busy`), y.current = false, h(null);
    }, a2 + 30);
  }), (0, n3.useEffect)(() => {
    let e2 = p.current;
    if (!e2 || typeof ResizeObserver > `u`) return;
    let t2 = new ResizeObserver(() => {
      y.current || (v.current = { w: e2.offsetWidth, h: e2.offsetHeight });
    });
    return t2.observe(e2), v.current = { w: e2.offsetWidth, h: e2.offsetHeight }, () => t2.disconnect();
  }, [e]), (0, n3.useEffect)(() => () => window.clearTimeout(b.current), []);
  let S = { "--ui-bx-duration": `${a2}ms`, "--ui-bx-blur": `${s2}px`, ...d }, C = l;
  return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`style`, { href: `ui-blur-crossfade`, precedence: `default`, children: o }), (0, r.jsxs)(l, { ref: f, className: [`ui-bx`, `ui-bx--${c2}`, u].filter(Boolean).join(` `), style: S, children: [(0, r.jsx)(C, { ref: p, className: `ui-bx__layer${m ? ` ui-bx__layer--in` : ``}`, children: t }, `c-${e}`), m && (0, r.jsx)(C, { className: `ui-bx__layer ui-bx__layer--out`, "aria-hidden": `true`, inert: true, style: { width: m.w || void 0 }, children: m.node }, `x-${m.id}-${m.n}`)] })] });
}
var o = `.ui-bx{--ui-bx-duration: 420ms;--ui-bx-blur: 10px;--ui-bx-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;display: block}.ui-bx--both{display: inline-block;vertical-align: top}.ui-bx[data-busy]{overflow: hidden}.ui-bx__layer{display: block}.ui-bx--both > .ui-bx__layer{width: max-content}.ui-bx__layer--out{position: absolute;top: 0;left: 0;pointer-events: none}.ui-bx--height > .ui-bx__layer--out, .ui-bx--none > .ui-bx__layer--out{right: 0}.ui-bx--both > .ui-bx__layer--out{left: 50%;translate: -50% 0}.ui-bx--both > .ui-bx__layer--in{margin-left: 50%;translate: -50% 0}.ui-bx__layer--in{animation: ui-bx-in var(--ui-bx-duration) var(--ui-bx-ease) both}.ui-bx__layer--out{animation: ui-bx-out calc(var(--ui-bx-duration) * 0.8) ease-in both}@keyframes ui-bx-in{from{opacity: 0;filter: blur(var(--ui-bx-blur));transform: scale(0.98)}to{opacity: 1;filter: blur(0);transform: scale(1)}}@keyframes ui-bx-out{from{opacity: 1;filter: blur(0);transform: scale(1)}to{opacity: 0;filter: blur(var(--ui-bx-blur));transform: scale(1.02)}}@media (prefers-reduced-motion: reduce){.ui-bx__layer--in, .ui-bx__layer--out{animation: none}.ui-bx__layer--out{display: none}}:where(.dark, [data-theme="dark"]) .ui-bx{color: inherit}`;
var s = [{ tag: `Shipped`, text: `Dark mode is live for everyone.` }, { tag: `Improved`, text: `Search now looks through comments and attachments too, and results show up while you type \u2013 no more waiting for the full page.` }, { tag: `Fixed`, text: `Exports keep their column order, even with hidden fields in between.` }];
function c() {
  let e = (0, n3.useRef)(null), [t, i2] = (0, n3.useState)(`idle`), [o2, c2] = (0, n3.useState)(0), l = (0, n3.useRef)([]), u = () => {
    t === `idle` && (i2(`busy`), l.current.push(window.setTimeout(() => i2(`done`), 1500), window.setTimeout(() => i2(`idle`), 3600)));
  }, d = () => c2((e2) => (e2 + 1) % s.length);
  (0, n3.useEffect)(() => () => l.current.forEach((e2) => window.clearTimeout(e2)), []), (0, n3.useEffect)(() => {
    if (!e.current?.closest(`.card__preview`)) return;
    let t2 = 0, n4 = window.setInterval(() => {
      t2++, t2 % 2 ? c2((e2) => (e2 + 1) % s.length) : i2((e2) => e2 === `idle` ? `busy` : e2 === `busy` ? `done` : `idle`);
    }, 1300);
    return () => window.clearInterval(n4);
  }, []);
  let f = s[o2];
  return (0, r.jsx)(`div`, { className: `blur-crossfade-demo`, ref: e, children: (0, r.jsxs)(`div`, { className: `bxd-card`, children: [(0, r.jsxs)(`div`, { className: `bxd-head`, children: [(0, r.jsxs)(`div`, { className: `bxd-meta`, children: [(0, r.jsx)(`span`, { className: `bxd-title`, children: `Release 2.4` }), (0, r.jsx)(`span`, { className: `bxd-sub`, children: `3 changes \xB7 draft` })] }), (0, r.jsx)(`button`, { type: `button`, className: `bxd-primary`, "data-status": t, onClick: u, "aria-live": `polite`, children: (0, r.jsxs)(a, { id: t, morph: `both`, as: `span`, blur: 6, duration: 380, children: [t === `idle` && (0, r.jsx)(`span`, { className: `bxd-btn`, children: `Publish` }), t === `busy` && (0, r.jsxs)(`span`, { className: `bxd-btn`, children: [(0, r.jsx)(`span`, { className: `bxd-spin`, "aria-hidden": `true` }), `Publishing\u2026`] }), t === `done` && (0, r.jsxs)(`span`, { className: `bxd-btn`, children: [(0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, width: `14`, height: `14`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.8`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3.5 8.5l3 3 6-7` }) }), `Published`] })] }) })] }), (0, r.jsx)(`div`, { className: `bxd-panel`, children: (0, r.jsx)(a, { id: o2, children: (0, r.jsxs)(`div`, { className: `bxd-note`, children: [(0, r.jsx)(`span`, { className: `bxd-tag`, "data-kind": f.tag, children: f.tag }), (0, r.jsx)(`p`, { children: f.text })] }) }) }), (0, r.jsxs)(`div`, { className: `bxd-foot`, children: [(0, r.jsx)(`span`, { className: `bxd-dots`, "aria-hidden": `true`, children: s.map((e2, t2) => (0, r.jsx)(`i`, { "data-on": t2 === o2 || void 0 }, t2)) }), (0, r.jsx)(`button`, { type: `button`, className: `bxd-chip`, onClick: d, children: `Next` })] })] }) });
}

export {
  c
};
