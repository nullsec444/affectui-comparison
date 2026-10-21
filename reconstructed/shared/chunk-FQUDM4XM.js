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

// reconstructed/demo-B3RzKcXL.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = {
  idle: `Tap to speak`,
  listening: `Listening`,
  thinking: `Thinking`,
  speaking: `Speaking`
};
var a = [`idle`, `listening`, `thinking`, `speaking`];
var o = {
  idle: 0.16,
  listening: 0.3,
  thinking: 1.9,
  speaking: 0.42
};
var s = (e, t = 0, n4 = 1) => Math.min(n4, Math.max(t, e));
var c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function l(e, t) {
  t.style.color = e;
  let n4 = getComputedStyle(t).color.match(/[\d.]+/g);
  if (n4) {
    return [Number(n4[0]), Number(n4[1]), Number(n4[2])];
  }
  return [23, 23, 23];
}
function U1Component({
  state = `idle`,
  level,
  size = 220,
  dots = 520,
  accent,
  label = true,
  interactive = true,
  onPress,
  className,
  style: style_1
}) {
  let yRef = n3.useRef(null);
  let bRef = n3.useRef({
    state,
    level,
    interactive
  });
  bRef.current = {
    state,
    level,
    interactive
  };
  let xRef = n3.useRef(() => {
  });
  n3.useEffect(() => {
    let yRef_current = yRef.current;
    let t = yRef_current?.getContext(`2d`);
    if (!yRef_current || !t) {
      return;
    }
    let n4 = Math.max(60, Math.round(dots));
    let r2 = new Float32Array(n4 * 3);
    let i2 = Math.PI * (3 - Math.sqrt(5));
    for (let e = 0; e < n4; e++) {
      let t2 = 1 - e / (n4 - 1) * 2;
      let a2 = Math.sqrt(1 - t2 * t2);
      r2[e * 3] = Math.cos(i2 * e) * a2;
      r2[e * 3 + 1] = t2;
      r2[e * 3 + 2] = Math.sin(i2 * e) * a2;
    }
    let d2 = Math.min(window.devicePixelRatio || 1, 2.5);
    yRef_current.width = Math.round(size * d2);
    yRef_current.height = Math.round(size * d2);
    let p = document.createElement(`span`);
    p.style.display = `none`;
    yRef_current.parentElement?.appendChild(p);
    let m = [23, 23, 23];
    let h = [47, 107, 255];
    let g = () => {
      let t2 = getComputedStyle(yRef_current);
      m = l(t2.color, p);
      h = l(t2.getPropertyValue(`--ui-vo-accent`).trim() || `#2f6bff`, p);
    };
    g();
    let _ = {
      idle: 0,
      listening: 0,
      thinking: 0,
      speaking: 0
    };
    _[bRef.current.state] = 1;
    let v = 0;
    let S2 = 0;
    let C = {
      x: 0,
      y: 0,
      on: false,
      strength: 0
    };
    let w2 = performance.now();
    let T = 0;
    let E = 0;
    let D = true;
    let O = c();
    let k = (e) => {
      let i3 = Math.min(0.05, (e - w2) / 1e3);
      w2 = e;
      let c2 = e / 1e3;
      let bRef_current = bRef.current;
      if (++E % 30 == 0) {
        g();
      }
      let f2 = 0;
      for (let e2 of a) {
        _[e2] += (+(e2 === bRef_current.state) - _[e2]) * Math.min(1, i3 * 5);
        f2 += _[e2] * o[e2];
      }
      v += f2 * i3;
      let p2 = bRef_current.state === `listening` ? s(0.35 + 0.35 * Math.sin(c2 * 2.1) * Math.sin(c2 * 5.3) + 0.3 * Math.sin(c2 * 9.7 + 1) * Math.sin(c2 * 0.9)) : s(0.3 + 0.7 * Math.abs(Math.sin(c2 * 4.1)) * (0.5 + 0.5 * Math.sin(c2 * 1.3 + 2)));
      let y = bRef_current.level === void 0 ? p2 : s(bRef_current.level);
      S2 += (y - S2) * Math.min(1, i3 * 12);
      C.strength += ((C.on && bRef_current.interactive ? 1 : 0) - C.strength) * Math.min(1, i3 * 8);
      let x = size;
      let A2 = x / 2;
      let j2 = x * 0.32;
      let M2 = 0.32 + _.thinking * 0.55;
      let N2 = Math.sin(M2);
      let P2 = Math.cos(M2);
      let F = Math.sin(v);
      let I = Math.cos(v);
      let L = x * 0.2;
      let R = Math.max(0.9, x / 190);
      t.setTransform(d2, 0, 0, d2, 0, 0);
      t.clearRect(0, 0, x, x);
      let z = (_.listening + _.speaking) * S2 * 0.16 + _.thinking * 0.05;
      if (z > 4e-3) {
        let e2 = t.createRadialGradient(A2, A2, j2 * 0.2, A2, A2, j2 * 1.55);
        e2.addColorStop(0, `rgba(${h[0]}, ${h[1]}, ${h[2]}, ${z})`);
        e2.addColorStop(1, `rgba(${h[0]}, ${h[1]}, ${h[2]}, 0)`);
        t.fillStyle = e2;
        t.fillRect(0, 0, x, x);
      }
      for (let e2 = 0; e2 < n4; e2++) {
        let n5 = r2[e2 * 3];
        let i4 = r2[e2 * 3 + 1];
        let a2 = r2[e2 * 3 + 2];
        let o2 = (Math.sin(n5 * 3.1 + c2 * 2.3) + Math.sin(i4 * 4.3 - c2 * 1.7) + Math.sin(a2 * 5.2 + c2 * 2.9)) / 3;
        let l2 = _.idle * 0.022 * Math.sin(c2 * 1.3 + i4 * 2);
        let u = _.listening * S2 * 0.3 * Math.max(0, o2) ** 1.4;
        let d3 = _.speaking * S2 * 0.13 * Math.sin(i4 * 7.5 - c2 * 7);
        let f3 = l2 + u + d3;
        let p3 = n5 * (1 + f3);
        let g2 = i4 * (1 + f3);
        let y2 = a2 * (1 + f3);
        let b = 0;
        let w3 = 1;
        if (_.thinking > 1e-3) {
          let t2 = Math.hypot(n5, a2) || 1;
          let r3 = 1 + 0.035 * Math.sin(c2 * 3 + e2 * 0.7);
          let o3 = _.thinking;
          p3 += (n5 / t2 * r3 - p3) * o3;
          g2 += (i4 * 0.2 - g2) * o3;
          w3 = 1 - o3 * (1 - s((Math.hypot(n5, a2) - 0.25) * 2.2));
          y2 += (a2 / t2 * r3 - y2) * o3;
          let l3 = Math.atan2(a2, n5) + v;
          b = o3 * Math.max(0, Math.cos(l3 - c2 * 2.2)) ** 6;
        }
        let T2 = p3 * I + y2 * F;
        let E2 = -p3 * F + y2 * I;
        let D2 = g2 * P2 - E2 * N2;
        let O2 = g2 * N2 + E2 * P2;
        let k2 = 3.4 / (3.4 - O2);
        let M3 = A2 + T2 * j2 * k2;
        let z2 = A2 + D2 * j2 * k2;
        if (C.strength > 0.01) {
          let e3 = M3 - C.x;
          let t2 = z2 - C.y;
          let n6 = Math.hypot(e3, t2) || 1;
          if (n6 < L) {
            let r3 = (1 - n6 / L) ** 2 * x * 0.07 * C.strength;
            M3 += e3 / n6 * r3;
            z2 += t2 / n6 * r3;
          }
        }
        let B = (O2 + 1.3) / 2.6;
        let V = s(Math.abs(u + d3) * 9 + b);
        let H = R * (0.55 + 0.75 * B) * k2 * (1 + V * 0.5);
        let U = s(0.12 + 0.88 * B ** 1.6 + V * 0.3) * w3;
        if (U < 0.01) {
          continue;
        }
        let W = Math.round(m[0] + (h[0] - m[0]) * V);
        let G = Math.round(m[1] + (h[1] - m[1]) * V);
        let K = Math.round(m[2] + (h[2] - m[2]) * V);
        t.fillStyle = `rgba(${W}, ${G}, ${K}, ${U.toFixed(3)})`;
        t.beginPath();
        t.arc(M3, z2, H, 0, Math.PI * 2);
        t.fill();
      }
      if (!O && D) {
        T = requestAnimationFrame(k);
      }
    };
    xRef.current = () => {
      if (O) {
        for (let e of a) {
          _[e] = +(e === bRef.current.state);
        }
        S2 = bRef.current.level ?? 0.6;
        w2 = performance.now();
        k(w2);
      }
    };
    let A = () => {
      cancelAnimationFrame(T);
      w2 = performance.now();
      T = requestAnimationFrame(k);
    };
    let j = `IntersectionObserver` in window ? new IntersectionObserver(([e]) => {
      D = e.isIntersecting && !document.hidden;
      if (D) {
        A();
      }
    }) : null;
    j?.observe(yRef_current);
    let M = () => {
      D = !document.hidden;
      if (D) {
        A();
      }
    };
    document.addEventListener(`visibilitychange`, M);
    A();
    let N = (t2) => {
      let n5 = yRef_current.getBoundingClientRect();
      let r3 = size / (n5.width || size);
      C.x = (t2.clientX - n5.left) * r3;
      C.y = (t2.clientY - n5.top) * r3;
      C.on = t2.pointerType === `mouse`;
    };
    let P = () => C.on = false;
    yRef_current.addEventListener(`pointermove`, N);
    yRef_current.addEventListener(`pointerleave`, P);
    return () => {
      cancelAnimationFrame(T);
      j?.disconnect();
      document.removeEventListener(`visibilitychange`, M);
      yRef_current.removeEventListener(`pointermove`, N);
      yRef_current.removeEventListener(`pointerleave`, P);
      p.remove();
    };
  }, [size, dots]);
  n3.useEffect(() => xRef.current(), [state, level]);
  let S = label === false ? null : {
    ...i,
    ...typeof label == `object` ? label : {}
  }[state];
  let style_2 = {
    ...style_1,
    "--ui-vo-size": `${size}px`,
    ...accent ? {
      "--ui-vo-accent": accent
    } : {}
  };
  let w = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("canvas", { ref: yRef, className: `ui-vo__canvas`, "aria-hidden": `true` }),
    S !== null && /* @__PURE__ */ jsx("span", { className: `ui-vo__label`, "aria-live": `polite`, children: /* @__PURE__ */ jsxs("span", { children: [
      S,
      state !== `idle` && /* @__PURE__ */ jsxs("span", { className: `ui-vo__dots`, "aria-hidden": `true`, children: [
        /* @__PURE__ */ jsx("i", {}),
        /* @__PURE__ */ jsx("i", {}),
        /* @__PURE__ */ jsx("i", {})
      ] })
    ] }, state) })
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-voice-orb`, precedence: `default`, children: d }),
    onPress ? /* @__PURE__ */ jsx("button", { type: `button`, className: [`ui-vo`, className].filter(Boolean).join(` `), "data-state": state, style: style_2, "aria-label": S ? void 0 : `Voice assistant: ${i[state]}`, onClick: onPress, children: w }) : /* @__PURE__ */ jsx("div", { className: [`ui-vo`, className].filter(Boolean).join(` `), "data-state": state, style: style_2, role: `img`, "aria-label": `Voice assistant: ${S ?? i[state]}`, children: w })
  ] });
}
var d = `.ui-vo{--ui-vo-ink: #171717;--ui-vo-muted: #8f8f8f;--ui-vo-accent: #2f6bff;--ui-vo-focus: rgba(23, 23, 23, 0.22);display: inline-grid;justify-items: center;gap: 2px;margin: 0;padding: 0;border: 0;background: none;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-vo-ink);-webkit-font-smoothing: antialiased;-webkit-tap-highlight-color: transparent}button.ui-vo{border-radius: 24px;cursor: pointer}button.ui-vo:focus-visible{outline: 2px solid var(--ui-vo-focus);outline-offset: 4px}.ui-vo__canvas{display: block;width: var(--ui-vo-size);height: var(--ui-vo-size);color: var(--ui-vo-ink);transition: transform 500ms cubic-bezier(0.32, 0.72, 0.24, 1)}button.ui-vo:active .ui-vo__canvas{transform: scale(0.97)}.ui-vo__label{height: 20px;overflow: hidden;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-vo-muted);white-space: nowrap}.ui-vo__label > span{display: inline-flex;align-items: baseline;gap: 1px;animation: ui-vo-in 360ms cubic-bezier(0.32, 0.72, 0.24, 1) both}.ui-vo[data-state="listening"] .ui-vo__label, .ui-vo[data-state="speaking"] .ui-vo__label{color: var(--ui-vo-ink)}.ui-vo__dots{display: inline-flex;gap: 2px;margin-left: 2px}.ui-vo__dots i{width: 2.5px;height: 2.5px;border-radius: 50%;background: currentColor;animation: ui-vo-blink 1.2s ease-in-out infinite}.ui-vo__dots i:nth-child(2){animation-delay: 0.16s}.ui-vo__dots i:nth-child(3){animation-delay: 0.32s}@keyframes ui-vo-in{from{opacity: 0;transform: translateY(5px);filter: blur(3px)}}@keyframes ui-vo-blink{0%, 100%{opacity: 0.25}40%{opacity: 1}}@media (prefers-reduced-motion: reduce){.ui-vo *, .ui-vo *::before, .ui-vo *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-vo{--ui-vo-ink: #ededed;--ui-vo-muted: #8b8b92;--ui-vo-accent: #6f9bff;--ui-vo-focus: rgba(255, 255, 255, 0.3)}`;
var f = [{
  state: `idle`,
  label: `Idle`,
  ms: 2e3
}, {
  state: `listening`,
  label: `Listening`,
  ms: 3200
}, {
  state: `thinking`,
  label: `Thinking`,
  ms: 2600
}, {
  state: `speaking`,
  label: `Speaking`,
  ms: 3600
}];
function PComponent() {
  let [e, setE] = n3.useState(0);
  let iRef = n3.useRef(false);
  n3.useEffect(() => {
    if (iRef.current) {
      return;
    }
    let n4 = window.setTimeout(() => setE((e2) => (e2 + 1) % f.length), f[e].ms);
    return () => window.clearTimeout(n4);
  }, [e]);
  let a2 = (e2) => {
    iRef.current = true;
    setE(e2);
  };
  return /* @__PURE__ */ jsxs("div", { className: `vo-demo`, children: [
    /* @__PURE__ */ jsx(U1Component, { state: f[e].state, onPress: () => a2((e + 1) % f.length) }),
    /* @__PURE__ */ jsx("div", { className: `segmented vo-demo__states`, role: `radiogroup`, "aria-label": `State`, children: f.map((t, n4) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "aria-checked": n4 === e, onClick: () => a2(n4), children: t.label }, t.state)) })
  ] });
}

export {
  PComponent
};
