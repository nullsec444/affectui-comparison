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
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/demo-C2jfF4UB.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 110;
function A1Component({
  items: items2,
  index,
  defaultIndex,
  onIndexChange,
  onSelect,
  itemWidth = 280,
  itemHeight = 280,
  angle = 50,
  reflection = true,
  caption = true,
  renderCaption,
  controls = true,
  ticks = true,
  sound = false,
  "aria-label": aria_label = `Cover flow`,
  className
}) {
  let items_length = items2.length;
  let End = Math.max(items_length - 1, 0);
  let S = ((e) => Math.min(Math.max(e, 0), End))(index ?? defaultIndex ?? Math.floor(End / 2));
  let [C, setC] = n3.useState(S);
  let [T, setT] = n3.useState(1);
  let [D, setD] = n3.useState(1);
  let kRef = n3.useRef(null);
  let ARef = n3.useRef([]);
  let jRef = n3.useRef({
    pos: S,
    target: S,
    vel: 0,
    raf: 0,
    last: 0,
    active: S
  });
  let MRef = n3.useRef({
    angle,
    scale: D,
    itemWidth,
    onIndexChange,
    sound,
    count: items_length
  });
  MRef.current = {
    angle,
    scale: D,
    itemWidth,
    onIndexChange,
    sound,
    count: items_length
  };
  let NRef = n3.useRef(false);
  n3.useEffect(() => {
    let e = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    NRef.current = e.matches;
    let t = () => NRef.current = e.matches;
    e.addEventListener(`change`, t);
    return () => e.removeEventListener(`change`, t);
  }, []);
  let PRef = n3.useRef(null);
  let F = () => {
    let PRef_current = PRef.current;
    if (!PRef_current || PRef_current.state !== `running`) {
      return;
    }
    let e_currentTime = PRef_current.currentTime;
    let n4 = PRef_current.createOscillator();
    let r2 = PRef_current.createGain();
    n4.type = `triangle`;
    n4.frequency.setValueAtTime(2200, e_currentTime);
    n4.frequency.exponentialRampToValueAtTime(900, e_currentTime + 0.03);
    r2.gain.setValueAtTime(1e-4, e_currentTime);
    r2.gain.exponentialRampToValueAtTime(0.05, e_currentTime + 4e-3);
    r2.gain.exponentialRampToValueAtTime(1e-4, e_currentTime + 0.045);
    n4.connect(r2).connect(PRef_current.destination);
    n4.start(e_currentTime);
    n4.stop(e_currentTime + 0.05);
  };
  let I = () => {
    if (!MRef.current.sound) {
      return;
    }
    let e = window.AudioContext ?? window.webkitAudioContext;
    if (!PRef.current && e) {
      PRef.current = new e();
    }
    if (PRef.current?.state === `suspended`) {
      PRef.current.resume();
    }
  };
  n3.useEffect(() => () => void PRef.current?.close(), []);
  let L = n3.useCallback(() => {
    let {
      pos
    } = jRef.current;
    let {
      angle: angle2,
      scale,
      itemWidth: itemWidth2
    } = MRef.current;
    let i2 = itemWidth2 * 0.78 * scale;
    let a = itemWidth2 * 0.27 * scale;
    let o2 = itemWidth2 * 0.7 * scale;
    ARef.current.forEach((n4, r2) => {
      if (!n4) {
        return;
      }
      let s2 = r2 - pos;
      let c = Math.abs(s2);
      if (c > 8) {
        n4.style.visibility = `hidden`;
        return;
      }
      let l = Math.min(c, 1);
      let u = Math.sign(s2);
      let d = u * (l * i2 + Math.max(c - 1, 0) * a);
      n4.style.visibility = ``;
      let f = 1 - l * 0.08 - Math.min(Math.max(c - 1, 0), 4) * 0.015;
      n4.style.transform = `translate3d(${d}px, 0, ${-l * o2}px) rotateY(${-u * l * angle2}deg) scale(${f.toFixed(4)})`;
      n4.style.zIndex = String(1e3 - Math.round(c * 10));
      n4.style.setProperty(`--ui-cf-t`, l.toFixed(3));
      n4.style.setProperty(`--ui-cf-d`, Math.min(Math.max(s2, -1.5), 1.5).toFixed(3));
      n4.dataset.side = s2 < 0 ? `left` : `right`;
    });
    let s = Math.round(Math.min(Math.max(pos, 0), MRef.current.count - 1));
    if (s !== jRef.current.active) {
      setT(s > jRef.current.active ? 1 : -1);
      jRef.current.active = s;
      setC(s);
      MRef.current.onIndexChange?.(s);
      F();
    }
  }, []);
  let R = n3.useCallback(() => {
    let jRef_current = jRef.current;
    if (jRef_current.raf) {
      return;
    }
    jRef_current.last = performance.now();
    let t = (n4) => {
      let r2 = Math.min(n4 - jRef_current.last, 32) / 1e3;
      jRef_current.last = n4;
      let i2 = 2 * Math.sqrt(190) * 0.92;
      jRef_current.vel += (190 * (jRef_current.target - jRef_current.pos) - i2 * jRef_current.vel) * r2;
      jRef_current.pos += jRef_current.vel * r2;
      if (Math.abs(jRef_current.target - jRef_current.pos) < 6e-4 && Math.abs(jRef_current.vel) < 2e-3) {
        jRef_current.pos = jRef_current.target;
        jRef_current.vel = 0;
        jRef_current.raf = 0;
        L();
        return;
      }
      L();
      jRef_current.raf = requestAnimationFrame(t);
    };
    jRef_current.raf = requestAnimationFrame(t);
  }, [L]);
  let z = n3.useCallback((e) => {
    let jRef_current = jRef.current;
    jRef_current.target = Math.min(Math.max(Math.round(e), 0), MRef.current.count - 1);
    if (NRef.current) {
      jRef_current.pos = jRef_current.target;
      jRef_current.vel = 0;
      L();
    } else {
      R();
    }
  }, [L, R]);
  n3.useEffect(() => () => cancelAnimationFrame(jRef.current.raf), []);
  n3.useEffect(() => {
    if (index !== void 0 && index !== Math.round(jRef.current.target)) {
      z(index);
    }
  }, [index, z]);
  n3.useEffect(() => {
    if (jRef.current.target > End) {
      z(End);
    } else {
      L();
    }
  }, [End, z, L]);
  n3.useLayoutEffect(() => {
    let kRef_current = kRef.current;
    if (!kRef_current) {
      return;
    }
    let t = () => setD(Math.min(1, Math.max(0.5, kRef_current.clientWidth / (itemWidth * 3.2))));
    t();
    let n4 = new ResizeObserver(t);
    n4.observe(kRef_current);
    return () => n4.disconnect();
  }, [itemWidth]);
  n3.useLayoutEffect(L);
  let BRef = n3.useRef(0);
  n3.useEffect(() => {
    let kRef_current = kRef.current;
    if (!kRef_current) {
      return;
    }
    let t = (e) => {
      let t2 = e.shiftKey && !e.deltaX ? e.deltaY : e.deltaX;
      if (Math.abs(t2) <= Math.abs(e.deltaY) && !e.shiftKey) {
        return;
      }
      e.preventDefault();
      I();
      let jRef_current = jRef.current;
      let r2 = i * MRef.current.scale * 1.4;
      jRef_current.target = Math.min(Math.max(jRef_current.target + t2 / r2, -0.35), MRef.current.count - 1 + 0.35);
      R();
      window.clearTimeout(BRef.current);
      BRef.current = window.setTimeout(() => z(jRef_current.target + Math.sign(t2) * 0.3), 110);
    };
    kRef_current.addEventListener(`wheel`, t, {
      passive: false
    });
    return () => {
      kRef_current.removeEventListener(`wheel`, t);
      window.clearTimeout(BRef.current);
    };
  }, [R, z]);
  let VRef = n3.useRef(null);
  let onPointerDown = (e) => {
    if (e.button !== 0) {
      return;
    }
    I();
    let t = e.target.closest(`[data-cf-index]`);
    VRef.current = {
      id: e.pointerId,
      x: e.clientX,
      from: jRef.current.pos,
      moved: false,
      hit: t ? Number(t.dataset.cfIndex) : null,
      samples: [{
        x: e.clientX,
        t: performance.now()
      }]
    };
  };
  let onPointerMove = (e) => {
    let VRef_current = VRef.current;
    if (!VRef_current || VRef_current.id !== e.pointerId) {
      return;
    }
    let n4 = e.clientX - VRef_current.x;
    if (!VRef_current.moved) {
      if (Math.abs(n4) < 6) {
        return;
      }
      VRef_current.moved = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget.dataset.dragging = ``;
    }
    let jRef_current = jRef.current;
    cancelAnimationFrame(jRef_current.raf);
    jRef_current.raf = 0;
    let a = VRef_current.from - n4 / (i * MRef.current.scale);
    let o2 = MRef.current.count - 1;
    if (a < 0) {
      a *= 0.3;
    }
    if (a > o2) {
      a = o2 + (a - o2) * 0.3;
    }
    jRef_current.pos = jRef_current.target = a;
    jRef_current.vel = 0;
    VRef_current.samples.push({
      x: e.clientX,
      t: performance.now()
    });
    if (VRef_current.samples.length > 6) {
      VRef_current.samples.shift();
    }
    L();
  };
  let W = (t) => {
    let VRef_current = VRef.current;
    if (!VRef_current || VRef_current.id !== t.pointerId) {
      return;
    }
    VRef.current = null;
    delete t.currentTarget.dataset.dragging;
    if (!VRef_current.moved) {
      if (VRef_current.hit === null) {
        return;
      }
      if (VRef_current.hit === Math.round(jRef.current.target)) {
        onSelect?.(items2[VRef_current.hit], VRef_current.hit);
      } else {
        z(VRef_current.hit);
      }
      return;
    }
    let r2 = VRef_current.samples[0];
    let a = VRef_current.samples[VRef_current.samples.length - 1];
    let o2 = Math.max(a.t - r2.t, 1);
    let s = -((a.x - r2.x) / o2) * 1e3 / (i * MRef.current.scale);
    let jRef_current = jRef.current;
    jRef_current.vel = NRef.current ? 0 : s;
    let u = Math.round(jRef_current.pos + s * 0.18);
    if (Math.abs(s) > 0.8 && u === Math.round(VRef_current.from)) {
      u += Math.sign(s);
    }
    z(u);
  };
  let onKeyDown = (t) => {
    let n4 = Math.round(jRef.current.target);
    let r2 = {
      ArrowLeft: n4 - 1,
      ArrowRight: n4 + 1,
      Home: 0,
      End
    };
    if (t.key in r2) {
      t.preventDefault();
      I();
      z(r2[t.key]);
    } else if ((t.key === `Enter` || t.key === ` `) && onSelect && t.target === t.currentTarget) {
      t.preventDefault();
      onSelect(items2[n4], n4);
    }
  };
  let K = items2[C];
  let q = Math.round(itemWidth * D);
  let J = Math.round(itemHeight * D);
  let YComponent = (e, t = false) => /* @__PURE__ */ jsx("div", { className: `ui-cf__media`, children: e.cover ?? (e.image ? /* @__PURE__ */ jsx("img", { src: e.image, alt: t ? `` : e.alt ?? e.title ?? ``, draggable: false, loading: `lazy`, decoding: `async` }) : null) });
  return /* @__PURE__ */ jsxs("div", { className: [`ui-cf`, className].filter(Boolean).join(` `), style: {
    "--ui-cf-w": `${q}px`,
    "--ui-cf-h": `${J}px`
  }, "data-reflection": reflection || void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-cover-flow`, precedence: `default`, children: o }),
    /* @__PURE__ */ jsx("div", { ref: kRef, className: `ui-cf__viewport`, role: `region`, "aria-roledescription": `carousel`, "aria-label": aria_label, tabIndex: 0, onKeyDown, onPointerDown, onPointerMove, onPointerUp: W, onPointerCancel: W, "data-selectable": onSelect ? `` : void 0, children: /* @__PURE__ */ jsx("div", { className: `ui-cf__stage`, style: {
      perspective: `${Math.round(1e3 * D)}px`
    }, children: items2.map((e, t) => /* @__PURE__ */ jsxs("div", { ref: (e2) => {
      ARef.current[t] = e2;
    }, className: `ui-cf__item`, "data-cf-index": t, "data-active": t === C || void 0, role: `group`, "aria-roledescription": `slide`, "aria-label": `${t + 1} of ${items_length}${e.title ? `: ${e.title}` : ``}`, "aria-hidden": t !== C || void 0, children: [
      /* @__PURE__ */ jsx("div", { className: `ui-cf__ground`, "aria-hidden": `true` }),
      /* @__PURE__ */ jsx("div", { className: `ui-cf__card`, children: YComponent(e) }),
      reflection && /* @__PURE__ */ jsx("div", { className: `ui-cf__reflection`, "aria-hidden": `true`, inert: true, children: /* @__PURE__ */ jsx("div", { className: `ui-cf__card`, children: YComponent(e, true) }) })
    ] }, e.id)) }) }),
    (caption || controls || ticks) && /* @__PURE__ */ jsxs("div", { className: `ui-cf__footer`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-cf__row`, children: [
        controls && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cf__nav`, "aria-label": `Previous`, disabled: C === 0, onClick: () => z(Math.round(jRef.current.target) - 1), children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M10 3.5 5.5 8l4.5 4.5` }) }) }),
        caption && /* @__PURE__ */ jsx("div", { className: `ui-cf__caption`, "aria-live": `polite`, children: /* @__PURE__ */ jsx("div", { className: `ui-cf__caption-in`, "data-dir": T > 0 ? `next` : `prev`, children: K && (renderCaption ? renderCaption(K, C) : /* @__PURE__ */ jsxs(Fragment, { children: [
          K.title && /* @__PURE__ */ jsx("div", { className: `ui-cf__title`, children: K.title }),
          K.subtitle && /* @__PURE__ */ jsx("div", { className: `ui-cf__subtitle`, children: K.subtitle })
        ] })) }, K?.id) }),
        controls && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cf__nav`, "aria-label": `Next`, disabled: C === End, onClick: () => z(Math.round(jRef.current.target) + 1), children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M6 3.5 10.5 8 6 12.5` }) }) })
      ] }),
      ticks && items_length > 1 && /* @__PURE__ */ jsx("div", { className: `ui-cf__ticks`, children: items2.map((e, t) => /* @__PURE__ */ jsx("button", { type: `button`, tabIndex: -1, className: `ui-cf__tick`, "aria-label": `Show ${e.title ?? `cover ${t + 1}`}`, "aria-current": t === C || void 0, onClick: () => z(t) }, e.id)) })
    ] })
  ] });
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
var items = [[`Stone`, `#f4f4f5`, `#d4d4d8`], [`Mint`, `#f0fbf7`, `#b6e4d3`], [`Sky`, `#eff6ff`, `#bcd6fb`], [`Sage`, `#f0f7f2`, `#bfdcc8`], [`Blush`, `#fdf2f8`, `#f5b5d6`], [`Sand`, `#fdfaf3`, `#ead9b8`], [`Lilac`, `#f5f3ff`, `#cdc3f5`], [`Ice`, `#f0faff`, `#b8e0f0`], [`Peach`, `#fff7ed`, `#f6c9a4`], [`Mist`, `#f8fafc`, `#cbd5e1`]].map(([e, t, n4]) => ({
  id: e,
  title: e,
  subtitle: `${t} \u2192 ${n4}`.toUpperCase(),
  cover: /* @__PURE__ */ jsx("div", { className: `cf-demo__gradient`, style: {
    background: `linear-gradient(160deg, ${t}, ${n4})`
  } })
}));
function CComponent() {
  return /* @__PURE__ */ jsx("div", { className: `cf-demo`, children: /* @__PURE__ */ jsx(A1Component, { items, defaultIndex: 4, itemWidth: 240, itemHeight: 320, "aria-label": `Gradient collection` }) });
}
export {
  CComponent as default
};
