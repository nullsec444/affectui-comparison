import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-B3RzKcXL.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = { idle: `Tap to speak`, listening: `Listening`, thinking: `Thinking`, speaking: `Speaking` };
var a = [`idle`, `listening`, `thinking`, `speaking`];
var o = { idle: 0.16, listening: 0.3, thinking: 1.9, speaking: 0.42 };
var s = (e, t = 0, n4 = 1) => Math.min(n4, Math.max(t, e));
var c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function l(e, t) {
  t.style.color = e;
  let n4 = getComputedStyle(t).color.match(/[\d.]+/g);
  return n4 ? [Number(n4[0]), Number(n4[1]), Number(n4[2])] : [23, 23, 23];
}
function u({ state: e = `idle`, level: t, size: u2 = 220, dots: f2 = 520, accent: p2, label: m = true, interactive: h = true, onPress: g, className: _, style: v }) {
  let y = (0, n3.useRef)(null), b = (0, n3.useRef)({ state: e, level: t, interactive: h });
  b.current = { state: e, level: t, interactive: h };
  let x = (0, n3.useRef)(() => {
  });
  (0, n3.useEffect)(() => {
    let e2 = y.current, t2 = e2?.getContext(`2d`);
    if (!e2 || !t2) return;
    let n4 = Math.max(60, Math.round(f2)), r2 = new Float32Array(n4 * 3), i2 = Math.PI * (3 - Math.sqrt(5));
    for (let e3 = 0; e3 < n4; e3++) {
      let t3 = 1 - e3 / (n4 - 1) * 2, a2 = Math.sqrt(1 - t3 * t3);
      r2[e3 * 3] = Math.cos(i2 * e3) * a2, r2[e3 * 3 + 1] = t3, r2[e3 * 3 + 2] = Math.sin(i2 * e3) * a2;
    }
    let d2 = Math.min(window.devicePixelRatio || 1, 2.5);
    e2.width = Math.round(u2 * d2), e2.height = Math.round(u2 * d2);
    let p3 = document.createElement(`span`);
    p3.style.display = `none`, e2.parentElement?.appendChild(p3);
    let m2 = [23, 23, 23], h2 = [47, 107, 255], g2 = () => {
      let t3 = getComputedStyle(e2);
      m2 = l(t3.color, p3), h2 = l(t3.getPropertyValue(`--ui-vo-accent`).trim() || `#2f6bff`, p3);
    };
    g2();
    let _2 = { idle: 0, listening: 0, thinking: 0, speaking: 0 };
    _2[b.current.state] = 1;
    let v2 = 0, S2 = 0, C2 = { x: 0, y: 0, on: false, strength: 0 }, w2 = performance.now(), T = 0, E = 0, D = true, O = c(), k = (e3) => {
      let i3 = Math.min(0.05, (e3 - w2) / 1e3);
      w2 = e3;
      let c2 = e3 / 1e3, l2 = b.current;
      ++E % 30 == 0 && g2();
      let f3 = 0;
      for (let e4 of a) _2[e4] += (+(e4 === l2.state) - _2[e4]) * Math.min(1, i3 * 5), f3 += _2[e4] * o[e4];
      v2 += f3 * i3;
      let p4 = l2.state === `listening` ? s(0.35 + 0.35 * Math.sin(c2 * 2.1) * Math.sin(c2 * 5.3) + 0.3 * Math.sin(c2 * 9.7 + 1) * Math.sin(c2 * 0.9)) : s(0.3 + 0.7 * Math.abs(Math.sin(c2 * 4.1)) * (0.5 + 0.5 * Math.sin(c2 * 1.3 + 2))), y2 = l2.level === void 0 ? p4 : s(l2.level);
      S2 += (y2 - S2) * Math.min(1, i3 * 12), C2.strength += ((C2.on && l2.interactive ? 1 : 0) - C2.strength) * Math.min(1, i3 * 8);
      let x2 = u2, A2 = x2 / 2, j2 = x2 * 0.32, M2 = 0.32 + _2.thinking * 0.55, N2 = Math.sin(M2), P2 = Math.cos(M2), F = Math.sin(v2), I = Math.cos(v2), L = x2 * 0.2, R = Math.max(0.9, x2 / 190);
      t2.setTransform(d2, 0, 0, d2, 0, 0), t2.clearRect(0, 0, x2, x2);
      let z = (_2.listening + _2.speaking) * S2 * 0.16 + _2.thinking * 0.05;
      if (z > 4e-3) {
        let e4 = t2.createRadialGradient(A2, A2, j2 * 0.2, A2, A2, j2 * 1.55);
        e4.addColorStop(0, `rgba(${h2[0]}, ${h2[1]}, ${h2[2]}, ${z})`), e4.addColorStop(1, `rgba(${h2[0]}, ${h2[1]}, ${h2[2]}, 0)`), t2.fillStyle = e4, t2.fillRect(0, 0, x2, x2);
      }
      for (let e4 = 0; e4 < n4; e4++) {
        let n5 = r2[e4 * 3], i4 = r2[e4 * 3 + 1], a2 = r2[e4 * 3 + 2], o2 = (Math.sin(n5 * 3.1 + c2 * 2.3) + Math.sin(i4 * 4.3 - c2 * 1.7) + Math.sin(a2 * 5.2 + c2 * 2.9)) / 3, l3 = _2.idle * 0.022 * Math.sin(c2 * 1.3 + i4 * 2), u3 = _2.listening * S2 * 0.3 * Math.max(0, o2) ** 1.4, d3 = _2.speaking * S2 * 0.13 * Math.sin(i4 * 7.5 - c2 * 7), f4 = l3 + u3 + d3, p5 = n5 * (1 + f4), g3 = i4 * (1 + f4), y3 = a2 * (1 + f4), b2 = 0, w3 = 1;
        if (_2.thinking > 1e-3) {
          let t3 = Math.hypot(n5, a2) || 1, r3 = 1 + 0.035 * Math.sin(c2 * 3 + e4 * 0.7), o3 = _2.thinking;
          p5 += (n5 / t3 * r3 - p5) * o3, g3 += (i4 * 0.2 - g3) * o3, w3 = 1 - o3 * (1 - s((Math.hypot(n5, a2) - 0.25) * 2.2)), y3 += (a2 / t3 * r3 - y3) * o3;
          let l4 = Math.atan2(a2, n5) + v2;
          b2 = o3 * Math.max(0, Math.cos(l4 - c2 * 2.2)) ** 6;
        }
        let T2 = p5 * I + y3 * F, E2 = -p5 * F + y3 * I, D2 = g3 * P2 - E2 * N2, O2 = g3 * N2 + E2 * P2, k2 = 3.4 / (3.4 - O2), M3 = A2 + T2 * j2 * k2, z2 = A2 + D2 * j2 * k2;
        if (C2.strength > 0.01) {
          let e5 = M3 - C2.x, t3 = z2 - C2.y, n6 = Math.hypot(e5, t3) || 1;
          if (n6 < L) {
            let r3 = (1 - n6 / L) ** 2 * x2 * 0.07 * C2.strength;
            M3 += e5 / n6 * r3, z2 += t3 / n6 * r3;
          }
        }
        let B = (O2 + 1.3) / 2.6, V = s(Math.abs(u3 + d3) * 9 + b2), H = R * (0.55 + 0.75 * B) * k2 * (1 + V * 0.5), U = s(0.12 + 0.88 * B ** 1.6 + V * 0.3) * w3;
        if (U < 0.01) continue;
        let W = Math.round(m2[0] + (h2[0] - m2[0]) * V), G = Math.round(m2[1] + (h2[1] - m2[1]) * V), K = Math.round(m2[2] + (h2[2] - m2[2]) * V);
        t2.fillStyle = `rgba(${W}, ${G}, ${K}, ${U.toFixed(3)})`, t2.beginPath(), t2.arc(M3, z2, H, 0, Math.PI * 2), t2.fill();
      }
      !O && D && (T = requestAnimationFrame(k));
    };
    x.current = () => {
      if (O) {
        for (let e3 of a) _2[e3] = +(e3 === b.current.state);
        S2 = b.current.level ?? 0.6, w2 = performance.now(), k(w2);
      }
    };
    let A = () => {
      cancelAnimationFrame(T), w2 = performance.now(), T = requestAnimationFrame(k);
    }, j = `IntersectionObserver` in window ? new IntersectionObserver(([e3]) => {
      D = e3.isIntersecting && !document.hidden, D && A();
    }) : null;
    j?.observe(e2);
    let M = () => {
      D = !document.hidden, D && A();
    };
    document.addEventListener(`visibilitychange`, M), A();
    let N = (t3) => {
      let n5 = e2.getBoundingClientRect(), r3 = u2 / (n5.width || u2);
      C2.x = (t3.clientX - n5.left) * r3, C2.y = (t3.clientY - n5.top) * r3, C2.on = t3.pointerType === `mouse`;
    }, P = () => C2.on = false;
    return e2.addEventListener(`pointermove`, N), e2.addEventListener(`pointerleave`, P), () => {
      cancelAnimationFrame(T), j?.disconnect(), document.removeEventListener(`visibilitychange`, M), e2.removeEventListener(`pointermove`, N), e2.removeEventListener(`pointerleave`, P), p3.remove();
    };
  }, [u2, f2]), (0, n3.useEffect)(() => x.current(), [e, t]);
  let S = m === false ? null : { ...i, ...typeof m == `object` ? m : {} }[e], C = { ...v, "--ui-vo-size": `${u2}px`, ...p2 ? { "--ui-vo-accent": p2 } : {} }, w = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`canvas`, { ref: y, className: `ui-vo__canvas`, "aria-hidden": `true` }), S !== null && (0, r.jsx)(`span`, { className: `ui-vo__label`, "aria-live": `polite`, children: (0, r.jsxs)(`span`, { children: [S, e !== `idle` && (0, r.jsxs)(`span`, { className: `ui-vo__dots`, "aria-hidden": `true`, children: [(0, r.jsx)(`i`, {}), (0, r.jsx)(`i`, {}), (0, r.jsx)(`i`, {})] })] }, e) })] });
  return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`style`, { href: `ui-voice-orb`, precedence: `default`, children: d }), g ? (0, r.jsx)(`button`, { type: `button`, className: [`ui-vo`, _].filter(Boolean).join(` `), "data-state": e, style: C, "aria-label": S ? void 0 : `Voice assistant: ${i[e]}`, onClick: g, children: w }) : (0, r.jsx)(`div`, { className: [`ui-vo`, _].filter(Boolean).join(` `), "data-state": e, style: C, role: `img`, "aria-label": `Voice assistant: ${S ?? i[e]}`, children: w })] });
}
var d = `.ui-vo{--ui-vo-ink: #171717;--ui-vo-muted: #8f8f8f;--ui-vo-accent: #2f6bff;--ui-vo-focus: rgba(23, 23, 23, 0.22);display: inline-grid;justify-items: center;gap: 2px;margin: 0;padding: 0;border: 0;background: none;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-vo-ink);-webkit-font-smoothing: antialiased;-webkit-tap-highlight-color: transparent}button.ui-vo{border-radius: 24px;cursor: pointer}button.ui-vo:focus-visible{outline: 2px solid var(--ui-vo-focus);outline-offset: 4px}.ui-vo__canvas{display: block;width: var(--ui-vo-size);height: var(--ui-vo-size);color: var(--ui-vo-ink);transition: transform 500ms cubic-bezier(0.32, 0.72, 0.24, 1)}button.ui-vo:active .ui-vo__canvas{transform: scale(0.97)}.ui-vo__label{height: 20px;overflow: hidden;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-vo-muted);white-space: nowrap}.ui-vo__label > span{display: inline-flex;align-items: baseline;gap: 1px;animation: ui-vo-in 360ms cubic-bezier(0.32, 0.72, 0.24, 1) both}.ui-vo[data-state="listening"] .ui-vo__label, .ui-vo[data-state="speaking"] .ui-vo__label{color: var(--ui-vo-ink)}.ui-vo__dots{display: inline-flex;gap: 2px;margin-left: 2px}.ui-vo__dots i{width: 2.5px;height: 2.5px;border-radius: 50%;background: currentColor;animation: ui-vo-blink 1.2s ease-in-out infinite}.ui-vo__dots i:nth-child(2){animation-delay: 0.16s}.ui-vo__dots i:nth-child(3){animation-delay: 0.32s}@keyframes ui-vo-in{from{opacity: 0;transform: translateY(5px);filter: blur(3px)}}@keyframes ui-vo-blink{0%, 100%{opacity: 0.25}40%{opacity: 1}}@media (prefers-reduced-motion: reduce){.ui-vo *, .ui-vo *::before, .ui-vo *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-vo{--ui-vo-ink: #ededed;--ui-vo-muted: #8b8b92;--ui-vo-accent: #6f9bff;--ui-vo-focus: rgba(255, 255, 255, 0.3)}`;
var f = [{ state: `idle`, label: `Idle`, ms: 2e3 }, { state: `listening`, label: `Listening`, ms: 3200 }, { state: `thinking`, label: `Thinking`, ms: 2600 }, { state: `speaking`, label: `Speaking`, ms: 3600 }];
function p() {
  let [e, t] = (0, n3.useState)(0), i2 = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    if (i2.current) return;
    let n4 = window.setTimeout(() => t((e2) => (e2 + 1) % f.length), f[e].ms);
    return () => window.clearTimeout(n4);
  }, [e]);
  let a2 = (e2) => {
    i2.current = true, t(e2);
  };
  return (0, r.jsxs)(`div`, { className: `vo-demo`, children: [(0, r.jsx)(u, { state: f[e].state, onPress: () => a2((e + 1) % f.length) }), (0, r.jsx)(`div`, { className: `segmented vo-demo__states`, role: `radiogroup`, "aria-label": `State`, children: f.map((t2, n4) => (0, r.jsx)(`button`, { type: `button`, role: `radio`, "aria-checked": n4 === e, onClick: () => a2(n4), children: t2.label }, t2.state)) })] });
}

export {
  p
};
