import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-C2jfF4UB.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 110;
function a({ items: e, index: t, defaultIndex: a2, onIndexChange: s2, onSelect: c2, itemWidth: l = 280, itemHeight: u = 280, angle: d = 50, reflection: f = true, caption: p = true, renderCaption: m, controls: h = true, ticks: g = true, sound: _ = false, "aria-label": v = `Cover flow`, className: y }) {
  let b = e.length, x = Math.max(b - 1, 0), S = ((e2) => Math.min(Math.max(e2, 0), x))(t ?? a2 ?? Math.floor(x / 2)), [C, w] = (0, n3.useState)(S), [T, E] = (0, n3.useState)(1), [D, O] = (0, n3.useState)(1), k = (0, n3.useRef)(null), A = (0, n3.useRef)([]), j = (0, n3.useRef)({ pos: S, target: S, vel: 0, raf: 0, last: 0, active: S }), M = (0, n3.useRef)({ angle: d, scale: D, itemWidth: l, onIndexChange: s2, sound: _, count: b });
  M.current = { angle: d, scale: D, itemWidth: l, onIndexChange: s2, sound: _, count: b };
  let N = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let e2 = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    N.current = e2.matches;
    let t2 = () => N.current = e2.matches;
    return e2.addEventListener(`change`, t2), () => e2.removeEventListener(`change`, t2);
  }, []);
  let P = (0, n3.useRef)(null), F = () => {
    let e2 = P.current;
    if (!e2 || e2.state !== `running`) return;
    let t2 = e2.currentTime, n4 = e2.createOscillator(), r2 = e2.createGain();
    n4.type = `triangle`, n4.frequency.setValueAtTime(2200, t2), n4.frequency.exponentialRampToValueAtTime(900, t2 + 0.03), r2.gain.setValueAtTime(1e-4, t2), r2.gain.exponentialRampToValueAtTime(0.05, t2 + 4e-3), r2.gain.exponentialRampToValueAtTime(1e-4, t2 + 0.045), n4.connect(r2).connect(e2.destination), n4.start(t2), n4.stop(t2 + 0.05);
  }, I = () => {
    if (!M.current.sound) return;
    let e2 = window.AudioContext ?? window.webkitAudioContext;
    !P.current && e2 && (P.current = new e2()), P.current?.state === `suspended` && P.current.resume();
  };
  (0, n3.useEffect)(() => () => void P.current?.close(), []);
  let L = (0, n3.useCallback)(() => {
    let { pos: e2 } = j.current, { angle: t2, scale: n4, itemWidth: r2 } = M.current, i2 = r2 * 0.78 * n4, a3 = r2 * 0.27 * n4, o2 = r2 * 0.7 * n4;
    A.current.forEach((n5, r3) => {
      if (!n5) return;
      let s4 = r3 - e2, c3 = Math.abs(s4);
      if (c3 > 8) {
        n5.style.visibility = `hidden`;
        return;
      }
      let l2 = Math.min(c3, 1), u2 = Math.sign(s4), d2 = u2 * (l2 * i2 + Math.max(c3 - 1, 0) * a3);
      n5.style.visibility = ``;
      let f2 = 1 - l2 * 0.08 - Math.min(Math.max(c3 - 1, 0), 4) * 0.015;
      n5.style.transform = `translate3d(${d2}px, 0, ${-l2 * o2}px) rotateY(${-u2 * l2 * t2}deg) scale(${f2.toFixed(4)})`, n5.style.zIndex = String(1e3 - Math.round(c3 * 10)), n5.style.setProperty(`--ui-cf-t`, l2.toFixed(3)), n5.style.setProperty(`--ui-cf-d`, Math.min(Math.max(s4, -1.5), 1.5).toFixed(3)), n5.dataset.side = s4 < 0 ? `left` : `right`;
    });
    let s3 = Math.round(Math.min(Math.max(e2, 0), M.current.count - 1));
    s3 !== j.current.active && (E(s3 > j.current.active ? 1 : -1), j.current.active = s3, w(s3), M.current.onIndexChange?.(s3), F());
  }, []), R = (0, n3.useCallback)(() => {
    let e2 = j.current;
    if (e2.raf) return;
    e2.last = performance.now();
    let t2 = (n4) => {
      let r2 = Math.min(n4 - e2.last, 32) / 1e3;
      e2.last = n4;
      let i2 = 2 * Math.sqrt(190) * 0.92;
      if (e2.vel += (190 * (e2.target - e2.pos) - i2 * e2.vel) * r2, e2.pos += e2.vel * r2, Math.abs(e2.target - e2.pos) < 6e-4 && Math.abs(e2.vel) < 2e-3) {
        e2.pos = e2.target, e2.vel = 0, e2.raf = 0, L();
        return;
      }
      L(), e2.raf = requestAnimationFrame(t2);
    };
    e2.raf = requestAnimationFrame(t2);
  }, [L]), z = (0, n3.useCallback)((e2) => {
    let t2 = j.current;
    t2.target = Math.min(Math.max(Math.round(e2), 0), M.current.count - 1), N.current ? (t2.pos = t2.target, t2.vel = 0, L()) : R();
  }, [L, R]);
  (0, n3.useEffect)(() => () => cancelAnimationFrame(j.current.raf), []), (0, n3.useEffect)(() => {
    t !== void 0 && t !== Math.round(j.current.target) && z(t);
  }, [t, z]), (0, n3.useEffect)(() => {
    j.current.target > x ? z(x) : L();
  }, [x, z, L]), (0, n3.useLayoutEffect)(() => {
    let e2 = k.current;
    if (!e2) return;
    let t2 = () => O(Math.min(1, Math.max(0.5, e2.clientWidth / (l * 3.2))));
    t2();
    let n4 = new ResizeObserver(t2);
    return n4.observe(e2), () => n4.disconnect();
  }, [l]), (0, n3.useLayoutEffect)(L);
  let B = (0, n3.useRef)(0);
  (0, n3.useEffect)(() => {
    let e2 = k.current;
    if (!e2) return;
    let t2 = (e3) => {
      let t3 = e3.shiftKey && !e3.deltaX ? e3.deltaY : e3.deltaX;
      if (Math.abs(t3) <= Math.abs(e3.deltaY) && !e3.shiftKey) return;
      e3.preventDefault(), I();
      let n4 = j.current, r2 = i * M.current.scale * 1.4;
      n4.target = Math.min(Math.max(n4.target + t3 / r2, -0.35), M.current.count - 1 + 0.35), R(), window.clearTimeout(B.current), B.current = window.setTimeout(() => z(n4.target + Math.sign(t3) * 0.3), 110);
    };
    return e2.addEventListener(`wheel`, t2, { passive: false }), () => {
      e2.removeEventListener(`wheel`, t2), window.clearTimeout(B.current);
    };
  }, [R, z]);
  let V = (0, n3.useRef)(null), H = (e2) => {
    if (e2.button !== 0) return;
    I();
    let t2 = e2.target.closest(`[data-cf-index]`);
    V.current = { id: e2.pointerId, x: e2.clientX, from: j.current.pos, moved: false, hit: t2 ? Number(t2.dataset.cfIndex) : null, samples: [{ x: e2.clientX, t: performance.now() }] };
  }, U = (e2) => {
    let t2 = V.current;
    if (!t2 || t2.id !== e2.pointerId) return;
    let n4 = e2.clientX - t2.x;
    if (!t2.moved) {
      if (Math.abs(n4) < 6) return;
      t2.moved = true, e2.currentTarget.setPointerCapture(e2.pointerId), e2.currentTarget.dataset.dragging = ``;
    }
    let r2 = j.current;
    cancelAnimationFrame(r2.raf), r2.raf = 0;
    let a3 = t2.from - n4 / (i * M.current.scale), o2 = M.current.count - 1;
    a3 < 0 && (a3 *= 0.3), a3 > o2 && (a3 = o2 + (a3 - o2) * 0.3), r2.pos = r2.target = a3, r2.vel = 0, t2.samples.push({ x: e2.clientX, t: performance.now() }), t2.samples.length > 6 && t2.samples.shift(), L();
  }, W = (t2) => {
    let n4 = V.current;
    if (!n4 || n4.id !== t2.pointerId) return;
    if (V.current = null, delete t2.currentTarget.dataset.dragging, !n4.moved) {
      if (n4.hit === null) return;
      n4.hit === Math.round(j.current.target) ? c2?.(e[n4.hit], n4.hit) : z(n4.hit);
      return;
    }
    let r2 = n4.samples[0], a3 = n4.samples[n4.samples.length - 1], o2 = Math.max(a3.t - r2.t, 1), s3 = -((a3.x - r2.x) / o2) * 1e3 / (i * M.current.scale), l2 = j.current;
    l2.vel = N.current ? 0 : s3;
    let u2 = Math.round(l2.pos + s3 * 0.18);
    Math.abs(s3) > 0.8 && u2 === Math.round(n4.from) && (u2 += Math.sign(s3)), z(u2);
  }, G = (t2) => {
    let n4 = Math.round(j.current.target), r2 = { ArrowLeft: n4 - 1, ArrowRight: n4 + 1, Home: 0, End: x };
    t2.key in r2 ? (t2.preventDefault(), I(), z(r2[t2.key])) : (t2.key === `Enter` || t2.key === ` `) && c2 && t2.target === t2.currentTarget && (t2.preventDefault(), c2(e[n4], n4));
  }, K = e[C], q = Math.round(l * D), J = Math.round(u * D), Y = (e2, t2 = false) => (0, r.jsx)(`div`, { className: `ui-cf__media`, children: e2.cover ?? (e2.image ? (0, r.jsx)(`img`, { src: e2.image, alt: t2 ? `` : e2.alt ?? e2.title ?? ``, draggable: false, loading: `lazy`, decoding: `async` }) : null) });
  return (0, r.jsxs)(`div`, { className: [`ui-cf`, y].filter(Boolean).join(` `), style: { "--ui-cf-w": `${q}px`, "--ui-cf-h": `${J}px` }, "data-reflection": f || void 0, children: [(0, r.jsx)(`style`, { href: `ui-cover-flow`, precedence: `default`, children: o }), (0, r.jsx)(`div`, { ref: k, className: `ui-cf__viewport`, role: `region`, "aria-roledescription": `carousel`, "aria-label": v, tabIndex: 0, onKeyDown: G, onPointerDown: H, onPointerMove: U, onPointerUp: W, onPointerCancel: W, "data-selectable": c2 ? `` : void 0, children: (0, r.jsx)(`div`, { className: `ui-cf__stage`, style: { perspective: `${Math.round(1e3 * D)}px` }, children: e.map((e2, t2) => (0, r.jsxs)(`div`, { ref: (e3) => {
    A.current[t2] = e3;
  }, className: `ui-cf__item`, "data-cf-index": t2, "data-active": t2 === C || void 0, role: `group`, "aria-roledescription": `slide`, "aria-label": `${t2 + 1} of ${b}${e2.title ? `: ${e2.title}` : ``}`, "aria-hidden": t2 !== C || void 0, children: [(0, r.jsx)(`div`, { className: `ui-cf__ground`, "aria-hidden": `true` }), (0, r.jsx)(`div`, { className: `ui-cf__card`, children: Y(e2) }), f && (0, r.jsx)(`div`, { className: `ui-cf__reflection`, "aria-hidden": `true`, inert: true, children: (0, r.jsx)(`div`, { className: `ui-cf__card`, children: Y(e2, true) }) })] }, e2.id)) }) }), (p || h || g) && (0, r.jsxs)(`div`, { className: `ui-cf__footer`, children: [(0, r.jsxs)(`div`, { className: `ui-cf__row`, children: [h && (0, r.jsx)(`button`, { type: `button`, className: `ui-cf__nav`, "aria-label": `Previous`, disabled: C === 0, onClick: () => z(Math.round(j.current.target) - 1), children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M10 3.5 5.5 8l4.5 4.5` }) }) }), p && (0, r.jsx)(`div`, { className: `ui-cf__caption`, "aria-live": `polite`, children: (0, r.jsx)(`div`, { className: `ui-cf__caption-in`, "data-dir": T > 0 ? `next` : `prev`, children: K && (m ? m(K, C) : (0, r.jsxs)(r.Fragment, { children: [K.title && (0, r.jsx)(`div`, { className: `ui-cf__title`, children: K.title }), K.subtitle && (0, r.jsx)(`div`, { className: `ui-cf__subtitle`, children: K.subtitle })] })) }, K?.id) }), h && (0, r.jsx)(`button`, { type: `button`, className: `ui-cf__nav`, "aria-label": `Next`, disabled: C === x, onClick: () => z(Math.round(j.current.target) + 1), children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6 3.5 10.5 8 6 12.5` }) }) })] }), g && b > 1 && (0, r.jsx)(`div`, { className: `ui-cf__ticks`, children: e.map((e2, t2) => (0, r.jsx)(`button`, { type: `button`, tabIndex: -1, className: `ui-cf__tick`, "aria-label": `Show ${e2.title ?? `cover ${t2 + 1}`}`, "aria-current": t2 === C || void 0, onClick: () => z(t2) }, e2.id)) })] })] });
}
var o = `
.ui-cf {
  --ui-cf-ink: #171717;
  --ui-cf-muted: #8a8a8a;
  --ui-cf-card: #f1f1f1;
  --ui-cf-edge: rgba(0, 0, 0, 0.08);
  --ui-cf-dim: rgba(255, 255, 255, 0.24);
  --ui-cf-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 10px 20px -12px rgba(0, 0, 0, 0.18);
  --ui-cf-reflect: 0.22;
  --ui-cf-ground: rgba(0, 0, 0, 0.16);
  --ui-cf-tick: rgba(0, 0, 0, 0.16);
  --ui-cf-nav: #ffffff;
  --ui-cf-nav-line: #e7e7e7;
  --ui-cf-focus: rgba(23, 23, 23, 0.25);
  --ui-cf-ease: cubic-bezier(0.22, 1, 0.36, 1);
  display: grid;
  gap: 4px;
  width: 100%;
  min-width: 0;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Soft fade on both sides, so the stacks run out instead of being cut off */
.ui-cf__viewport {
  position: relative;
  overflow: hidden;
  padding: calc(var(--ui-cf-h) * 0.08) 0 0;
  height: calc(var(--ui-cf-h) * 1.08);
  border-radius: 12px;
  outline: none;
  cursor: grab;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent);
}
.ui-cf[data-reflection] .ui-cf__viewport { height: calc(var(--ui-cf-h) * 1.4); }
.ui-cf__viewport[data-dragging] { cursor: grabbing; }
.ui-cf__viewport:focus-visible .ui-cf__item[data-active] .ui-cf__card {
  box-shadow: var(--ui-cf-shadow), 0 0 0 3px var(--ui-cf-focus);
}

.ui-cf__stage {
  position: relative;
  height: var(--ui-cf-h);
  transform-style: preserve-3d;
}
.ui-cf__item {
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--ui-cf-w);
  height: var(--ui-cf-h);
  margin-left: calc(var(--ui-cf-w) / -2);
  transform-style: preserve-3d;
  will-change: transform;
}
.ui-cf__viewport[data-selectable] .ui-cf__item[data-active] { cursor: pointer; }
.ui-cf__card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: var(--ui-cf-card);
  box-shadow: var(--ui-cf-shadow);
}
.ui-cf__media {
  position: absolute;
  inset: 0 -8%;
  transform: translateX(calc(var(--ui-cf-d, 0) * -5%));
}
.ui-cf__media > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
/* A soft shadow on the floor that fades as a cover turns away */
.ui-cf__ground {
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: -3px;
  height: 8px;
  border-radius: 50%;
  background: var(--ui-cf-ground);
  filter: blur(5px);
  opacity: calc(1 - var(--ui-cf-t, 0) * 0.7);
  pointer-events: none;
}
/* Hairline edge, a dim that grows as a cover turns away, and a sheen on the side facing the light */
.ui-cf__card::before,
.ui-cf__card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}
.ui-cf__card::before {
  z-index: 2;
  box-shadow: inset 0 0 0 1px var(--ui-cf-edge);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.22), transparent 45%);
  opacity: calc(var(--ui-cf-t, 0) * 0.9);
}
.ui-cf__item[data-side="right"] .ui-cf__card::before {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.22), transparent 45%);
}
.ui-cf__card::after {
  z-index: 1;
  background: var(--ui-cf-dim);
  opacity: var(--ui-cf-t, 0);
}

/* The floor: a flipped copy that fades out \u2013 a mask, so it works on any background */
.ui-cf__reflection {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 32%;
  margin-top: 2px;
  overflow: hidden;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, var(--ui-cf-reflect)), transparent 85%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, var(--ui-cf-reflect)), transparent 85%);
}
.ui-cf__reflection > .ui-cf__card {
  height: var(--ui-cf-h);
  transform: scaleY(-1);
  transform-origin: 50% calc(var(--ui-cf-h) / 2);
  box-shadow: none;
}
.ui-cf__reflection > .ui-cf__card {
  position: absolute;
  bottom: auto;
  top: 0;
}

/* Caption with previous / next on either side, position ticks below */
.ui-cf__footer {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 14px;
  margin-top: calc(var(--ui-cf-h) * -0.04);
}
.ui-cf:not([data-reflection]) .ui-cf__footer { margin-top: 12px; }
.ui-cf__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 44px;
}
.ui-cf__ticks {
  display: flex;
  align-items: center;
  gap: 2px;
}
.ui-cf__tick {
  display: grid;
  place-items: center;
  width: 14px;
  height: 14px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}
.ui-cf__tick::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: var(--ui-cf-tick);
  transition: width 320ms var(--ui-cf-ease), background-color 200ms ease;
}
.ui-cf__tick[aria-current]::before {
  width: 14px;
  background: var(--ui-cf-ink);
}
.ui-cf__tick:hover::before { background: var(--ui-cf-muted); }
.ui-cf__tick[aria-current]:hover::before { background: var(--ui-cf-ink); }
.ui-cf__caption {
  display: grid;
  min-width: min(220px, 50vw);
  text-align: center;
}
.ui-cf__caption-in { animation: ui-cf-in 420ms var(--ui-cf-ease) both; }
.ui-cf__caption-in[data-dir="prev"] { animation-name: ui-cf-in-prev; }
.ui-cf__title {
  color: var(--ui-cf-ink);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.35;
}
.ui-cf__subtitle {
  color: var(--ui-cf-muted);
  font-size: 13px;
  line-height: 1.4;
}
.ui-cf__nav {
  display: grid;
  place-items: center;
  flex: none;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--ui-cf-nav);
  box-shadow: inset 0 0 0 1px var(--ui-cf-nav-line), 0 1px 2px rgba(0, 0, 0, 0.05);
  color: var(--ui-cf-ink);
  cursor: pointer;
  transition: transform 160ms var(--ui-cf-ease), opacity 160ms ease;
}
.ui-cf__nav:active { transform: scale(0.92); }
.ui-cf__nav:disabled { opacity: 0.35; cursor: default; transform: none; }
.ui-cf__nav:focus-visible { outline: 2px solid var(--ui-cf-focus); outline-offset: 2px; }
.ui-cf__nav svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}
@media (pointer: coarse) {
  .ui-cf__nav { width: 40px; height: 40px; }
}

/* The caption rises in from the direction of travel */
@keyframes ui-cf-in {
  from { opacity: 0; transform: translate(14px, 4px); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-cf-in-prev {
  from { opacity: 0; transform: translate(-14px, 4px); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-cf__caption-in { animation: none; }
  .ui-cf__media { transform: none; }
  .ui-cf__tick::before { transition: none; }
  .ui-cf__nav { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-cf {
  --ui-cf-ink: #ededed;
  --ui-cf-muted: #8f8f8f;
  --ui-cf-card: #1d1d20;
  --ui-cf-edge: rgba(255, 255, 255, 0.1);
  --ui-cf-dim: rgba(0, 0, 0, 0.5);
  --ui-cf-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 12px 24px -14px rgba(0, 0, 0, 0.6);
  --ui-cf-reflect: 0.3;
  --ui-cf-ground: rgba(0, 0, 0, 0.45);
  --ui-cf-tick: rgba(255, 255, 255, 0.2);
  --ui-cf-nav: #1d1d20;
  --ui-cf-nav-line: rgba(255, 255, 255, 0.1);
  --ui-cf-focus: rgba(255, 255, 255, 0.35);
}
`;
var s = [[`Stone`, `#f4f4f5`, `#d4d4d8`], [`Mint`, `#f0fbf7`, `#b6e4d3`], [`Sky`, `#eff6ff`, `#bcd6fb`], [`Sage`, `#f0f7f2`, `#bfdcc8`], [`Blush`, `#fdf2f8`, `#f5b5d6`], [`Sand`, `#fdfaf3`, `#ead9b8`], [`Lilac`, `#f5f3ff`, `#cdc3f5`], [`Ice`, `#f0faff`, `#b8e0f0`], [`Peach`, `#fff7ed`, `#f6c9a4`], [`Mist`, `#f8fafc`, `#cbd5e1`]].map(([e, t, n4]) => ({ id: e, title: e, subtitle: `${t} \u2192 ${n4}`.toUpperCase(), cover: (0, r.jsx)(`div`, { className: `cf-demo__gradient`, style: { background: `linear-gradient(160deg, ${t}, ${n4})` } }) }));
function c() {
  return (0, r.jsx)(`div`, { className: `cf-demo`, children: (0, r.jsx)(a, { items: s, defaultIndex: 4, itemWidth: 240, itemHeight: 320, "aria-label": `Gradient collection` }) });
}
export {
  c as default
};
