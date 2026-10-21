import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-B_Bc7Zla.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 1500;
var a = 280;
var o = 1500;
var s = 460;
var c = 1400;
var l = `cubic-bezier(0.22, 1, 0.36, 1)`;
var u = (e) => 1 - (1 - e) ** 5;
var d = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
var f = typeof window > `u` ? n3.useEffect : n3.useLayoutEffect;
function p({ left: e = _, right: t = v, center: p2 = g, className: h2, label: b2 }) {
  let x = `ui-ib` + (0, n3.useId)().replace(/[^a-zA-Z0-9_-]/g, ``), S = [...e, ...t], C = S.length, w = e.length, [T, E] = (0, n3.useState)(() => /* @__PURE__ */ new Set()), [D, O] = (0, n3.useState)(null), [k, A] = (0, n3.useState)(null), [j, M] = (0, n3.useState)(false), [N, P] = (0, n3.useState)(``), F = (0, n3.useRef)(null), I = (0, n3.useRef)(null), L = (0, n3.useRef)(null), R = (0, n3.useRef)(null), z = (0, n3.useRef)(null), B = (0, n3.useRef)(null), V = (0, n3.useRef)(null), H = (0, n3.useRef)([]), U = (0, n3.useRef)([]), W = (0, n3.useRef)([]), G = (0, n3.useRef)([]), K = (0, n3.useRef)([]), q = (0, n3.useRef)(0), J = (0, n3.useRef)(T);
  J.current = T;
  let Y = C - T.size, X = Y === 0 ? `All paused` : j ? `Syncing\u2026` : `${Y}\xA0connected`;
  f(() => {
    let e2 = F.current, t2 = I.current, n4 = L.current, r2 = R.current;
    if (!e2 || !t2 || !n4 || !r2) return;
    let c2 = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches, f2 = [], p3 = [], m2 = [], h3 = 0, g2 = null, _2 = null, v2 = [], y2 = (e3) => ({ x: e3.offsetLeft + e3.offsetWidth / 2, y: e3.offsetTop + e3.offsetHeight / 2 }), b3 = (e3, t3, n5) => {
      if (n5) {
        let n6 = (e3.y + t3.y) / 2;
        return [e3.x, e3.y, e3.x, n6, t3.x, n6, t3.x, t3.y];
      }
      let r3 = (e3.x + t3.x) / 2;
      return [e3.x, e3.y, r3, e3.y, r3, t3.y, t3.x, t3.y];
    }, x2 = (e3) => {
      f2 = e3, e3.forEach((e4, t3) => {
        let n5 = `M${e4[0]} ${e4[1]}C${e4[2]} ${e4[3]} ${e4[4]} ${e4[5]} ${e4[6]} ${e4[7]}`, r3 = W.current[t3];
        r3 && (r3.setAttribute(`d`, n5), G.current[t3]?.querySelectorAll(`path`).forEach((e5) => e5.setAttribute(`d`, n5)), v2[t3] = r3.getTotalLength());
      });
    }, S2 = () => {
      n4.setAttribute(`viewBox`, `0 0 ${e2.clientWidth} ${e2.clientHeight}`);
      let i2 = getComputedStyle(t2).getPropertyValue(`--ui-ib-stack`).trim() === `1`, a2 = [...H.current.slice(0, C), r2];
      if (a2.some((e3) => !e3)) return;
      let o2 = a2.map((e3) => y2(e3)), u2 = o2[C], d2 = o2.slice(0, C).map((e3, t3) => t3 < w ? b3(e3, u2, i2) : b3(u2, e3, i2));
      g2 && _2 !== null && i2 !== _2 && !c2 ? (a2.forEach((e3, t3) => {
        let n5 = g2[t3].x - o2[t3].x, r3 = g2[t3].y - o2[t3].y;
        (n5 || r3) && e3.animate([{ transform: `translate(${n5}px, ${r3}px)` }, { transform: `none` }], { duration: s, easing: l });
      }), p3 = f2.length === C ? f2 : d2, m2 = d2, h3 = performance.now(), X2()) : h3 ? m2 = d2 : x2(d2), g2 = o2, _2 = i2;
    }, T2 = Array(C).fill(null), E2 = [], D2 = 0, O2 = 0, k2 = 0, A2 = false, j2 = false, N2 = 0, P2 = (e3) => {
      T2[e3] = null;
      let t3 = G.current[e3];
      t3 && (t3.style.opacity = `0`);
    }, B2 = (e3) => e3?.animate([{ opacity: 0, transform: `scale(0.96)` }, { opacity: 1, transform: `scale(1)`, offset: 0.3 }, { opacity: 0, transform: `scale(1.14)` }], { duration: 760, easing: `ease-out` }), V2 = (e3) => {
      let t3 = Array.from({ length: w }, (e4, t4) => t4).filter((e4) => !J.current.has(e4)), n5 = Array.from({ length: C - w }, (e4, t4) => w + t4).filter((e4) => !J.current.has(e4));
      if (!t3.length && !n5.length) {
        D2 = e3 + o;
        return;
      }
      let r3 = e3, s2 = t3.length ? r3 + i : r3;
      E2 = [...t3.map((e4, t4) => ({ beam: e4, at: r3 + t4 * a })), ...n5.map((e4, t4) => ({ beam: e4, at: s2 + t4 * a }))];
      let c3 = Math.max(...E2.map((e4) => e4.at)) + i;
      O2 = t3.length ? s2 : r3, k2 = c3, D2 = c3 + o;
    }, q2 = (e3, t3) => {
      let n5 = W.current[e3], r3 = G.current[e3], i2 = K.current[e3];
      if (!n5 || !r3 || !i2) return;
      let a2 = v2[e3] || 0, o2 = Math.min(84, a2 * 0.42), s2 = d(t3) * (a2 + o2);
      r3.querySelectorAll(`path`).forEach((e4) => {
        e4.style.strokeDasharray = `${o2} ${a2 + o2}`, e4.style.strokeDashoffset = `${o2 - s2}`;
      });
      let c3 = n5.getPointAtLength(Math.max(0, Math.min(a2, s2 - o2))), l2 = n5.getPointAtLength(Math.max(0, Math.min(a2, s2)));
      i2.setAttribute(`x1`, `${c3.x}`), i2.setAttribute(`y1`, `${c3.y}`), i2.setAttribute(`x2`, `${l2.x + (l2.x === c3.x && l2.y === c3.y ? 0.01 : 0)}`), i2.setAttribute(`y2`, `${l2.y}`), r3.style.opacity = `1`;
    }, Y2 = (e3) => {
      if (N2 = 0, h3) {
        let t3 = Math.min(1, (e3 - h3) / s), n5 = u(t3);
        x2(m2.map((e4, t4) => e4.map((e5, r3) => (p3[t4]?.[r3] ?? e5) + (e5 - (p3[t4]?.[r3] ?? e5)) * n5))), t3 >= 1 && (h3 = 0);
      }
      if (j2 && !c2) {
        e3 >= D2 && V2(e3), E2 = E2.filter((t4) => t4.at > e3 || (!J.current.has(t4.beam) && T2[t4.beam] === null && (T2[t4.beam] = t4.at), false));
        for (let t4 = 0; t4 < C; t4++) {
          let n5 = T2[t4];
          if (n5 === null) continue;
          if (J.current.has(t4)) {
            P2(t4);
            continue;
          }
          let r3 = (e3 - n5) / i;
          if (r3 >= 1) {
            P2(t4), B2(t4 < w ? z.current : U.current[t4]);
            continue;
          }
          q2(t4, r3);
        }
        let t3 = e3 >= O2 && e3 < k2;
        t3 !== A2 && (A2 = t3, M(t3));
      }
      (h3 || j2 && !c2) && (N2 = requestAnimationFrame(Y2));
    }, X2 = () => {
      N2 ||= requestAnimationFrame(Y2);
    };
    S2();
    let Z2 = new ResizeObserver(S2);
    Z2.observe(e2);
    let Q2 = typeof IntersectionObserver > `u` ? null : new IntersectionObserver(([e3]) => {
      if (j2 = e3.isIntersecting, j2) D2 = performance.now() + 400, X2();
      else {
        E2 = [];
        for (let e4 = 0; e4 < C; e4++) P2(e4);
        k2 = 0, A2 && M(A2 = false);
      }
    });
    return Q2?.observe(e2), () => {
      Z2.disconnect(), Q2?.disconnect(), cancelAnimationFrame(N2);
    };
  }, [C, w]), f(() => {
    let e2 = B.current, t2 = V.current;
    e2 && t2 && (e2.style.width = `${t2.offsetWidth}px`);
  }, [X]), (0, n3.useEffect)(() => () => window.clearTimeout(q.current), []);
  let Z = (e2) => {
    let t2 = !T.has(e2), n4 = new Set(T);
    t2 ? n4.add(e2) : n4.delete(e2), E(n4), P(`${S[e2].name} ${t2 ? `paused` : `connected`}. ${C - n4.size} of ${C} connected.`), A(e2), window.clearTimeout(q.current), q.current = window.setTimeout(() => A(null), c);
  }, Q = (e2) => (t2) => {
    t2.pointerType === `mouse` && O(e2);
  }, ee = (e2) => (t2) => {
    t2.currentTarget.matches(`:focus-visible`) && O(e2);
  }, $ = (e2, t2) => (0, r.jsxs)(`button`, { ref: (e3) => {
    H.current[t2] = e3;
  }, type: `button`, className: `ui-ib__tool`, "aria-pressed": !T.has(t2), "aria-label": `${e2.name}, ${T.has(t2) ? `paused` : `connected`}`, "data-off": T.has(t2) || void 0, "data-tip": D === t2 || k === t2 || void 0, onClick: () => Z(t2), onPointerEnter: Q(t2), onPointerLeave: () => O(null), onFocus: ee(t2), onBlur: () => O(null), children: [(0, r.jsx)(`span`, { className: `ui-ib__ring`, ref: (e3) => {
    U.current[t2] = e3;
  } }), (0, r.jsx)(`span`, { className: `ui-ib__logo`, "aria-hidden": `true`, children: e2.logo }), (0, r.jsxs)(`span`, { className: `ui-ib__tip`, "aria-hidden": `true`, children: [e2.name, T.has(t2) && (0, r.jsx)(`span`, { className: `ui-ib__tip-state`, children: ` \xB7 Paused` })] })] }, t2);
  return (0, r.jsxs)(`div`, { ref: F, className: [`ui-ib`, h2].filter(Boolean).join(` `), role: `group`, "aria-label": b2 ?? `${p2.name} connected to ${S.map((e2) => e2.name).join(`, `)}`, "data-focus": D !== null || void 0, children: [(0, r.jsx)(`style`, { href: `ui-integration-beam`, precedence: `default`, children: y }), (0, r.jsxs)(`svg`, { ref: L, className: `ui-ib__beams`, "aria-hidden": `true`, children: [(0, r.jsxs)(`defs`, { children: [(0, r.jsx)(`filter`, { id: `${x}-blur`, filterUnits: `userSpaceOnUse`, x: `-100`, y: `-100`, width: `10000`, height: `10000`, children: (0, r.jsx)(`feGaussianBlur`, { stdDeviation: `3` }) }), S.map((e2, t2) => (0, r.jsxs)(`linearGradient`, { id: `${x}-g${t2}`, gradientUnits: `userSpaceOnUse`, ref: (e3) => {
    K.current[t2] = e3;
  }, children: [(0, r.jsx)(`stop`, { offset: `0`, className: `ui-ib__stop-tail` }), (0, r.jsx)(`stop`, { offset: `0.6`, className: `ui-ib__stop-mid` }), (0, r.jsx)(`stop`, { offset: `1`, className: `ui-ib__stop-head` })] }, t2))] }), S.map((e2, t2) => (0, r.jsx)(`path`, { className: `ui-ib__line`, "data-off": T.has(t2) || void 0, "data-focus": D === t2 || void 0, ref: (e3) => {
    W.current[t2] = e3;
  } }, t2)), S.map((e2, t2) => (0, r.jsxs)(`g`, { className: `ui-ib__pulse`, "data-focus": D === t2 || void 0, ref: (e3) => {
    G.current[t2] = e3;
  }, children: [(0, r.jsx)(`path`, { className: `ui-ib__glow`, stroke: `url(#${x}-g${t2})`, filter: `url(#${x}-blur)` }), (0, r.jsx)(`path`, { className: `ui-ib__core`, stroke: `url(#${x}-g${t2})` })] }, t2))] }), (0, r.jsxs)(`div`, { ref: I, className: `ui-ib__scene`, children: [(0, r.jsx)(`div`, { className: `ui-ib__group ui-ib__group--in`, children: e.map((e2, t2) => $(e2, t2)) }), (0, r.jsxs)(`div`, { ref: R, className: `ui-ib__center`, "data-syncing": j && Y > 0 || void 0, children: [(0, r.jsx)(`span`, { className: `ui-ib__ring ui-ib__ring--center`, ref: z }), (0, r.jsx)(`span`, { className: `ui-ib__mark`, "aria-hidden": `true`, children: p2.logo ?? (0, r.jsx)(m, {}) }), (0, r.jsx)(`span`, { ref: B, className: `ui-ib__chip`, children: (0, r.jsxs)(`span`, { ref: V, className: `ui-ib__chip-inner`, children: [(0, r.jsx)(`span`, { className: `ui-ib__dot`, "data-idle": Y === 0 || void 0 }), (0, r.jsx)(`span`, { className: `ui-ib__status`, children: X }, X)] }) })] }), (0, r.jsx)(`div`, { className: `ui-ib__group ui-ib__group--out`, children: t.map((e2, t2) => $(e2, w + t2)) })] }), (0, r.jsx)(`span`, { className: `ui-ib__sr`, "aria-live": `polite`, children: N })] });
}
function m() {
  let e = `M24 24C17.6 19.6 16.4 9.4 24 3.5C31.6 9.4 30.4 19.6 24 24Z`;
  return (0, r.jsxs)(`svg`, { viewBox: `0 0 48 48`, "aria-hidden": `true`, children: [(0, r.jsx)(`g`, { opacity: `0.36`, children: [45, 135, 225, 315].map((t) => (0, r.jsx)(`path`, { d: e, transform: `rotate(${t} 24 24)` }, t)) }), [0, 90, 180, 270].map((t) => (0, r.jsx)(`path`, { d: e, transform: `rotate(${t} 24 24)` }, t))] });
}
var h = ({ children: e }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: e });
var g = { name: `Acme` };
var _ = [{ name: `Slack`, logo: (0, r.jsx)(h, { children: (0, r.jsx)(`svg`, { x: `2`, y: `2`, width: `20`, height: `20`, viewBox: `0 0 2447.6 2452.5`, children: (0, r.jsxs)(`g`, { clipRule: `evenodd`, fillRule: `evenodd`, children: [(0, r.jsx)(`path`, { d: `m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z`, fill: `#36c5f0` }), (0, r.jsx)(`path`, { d: `m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z`, fill: `#2eb67d` }), (0, r.jsx)(`path`, { d: `m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z`, fill: `#ecb22e` }), (0, r.jsx)(`path`, { d: `m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0`, fill: `#e01e5a` })] }) }) }) }, { name: `Notion`, logo: (0, r.jsx)(h, { children: (0, r.jsx)(`path`, { fill: `currentColor`, d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z` }) }) }, { name: `Gmail`, logo: (0, r.jsx)(h, { children: (0, r.jsx)(`svg`, { x: `2`, y: `2`, width: `20`, height: `20`, viewBox: `0 49.4 512 399.42`, children: (0, r.jsxs)(`g`, { fill: `none`, fillRule: `evenodd`, children: [(0, r.jsxs)(`g`, { fillRule: `nonzero`, children: [(0, r.jsx)(`path`, { fill: `#4285f4`, d: `M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z` }), (0, r.jsx)(`path`, { fill: `#34a853`, d: `M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z` }), (0, r.jsx)(`path`, { fill: `#fbbc04`, d: `M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z` })] }), (0, r.jsx)(`path`, { fill: `#ea4335`, d: `M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z` }), (0, r.jsx)(`path`, { fill: `#c5221f`, fillRule: `nonzero`, d: `M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z` })] }) }) }) }];
var v = [{ name: `HubSpot`, logo: (0, r.jsx)(h, { children: (0, r.jsx)(`path`, { fill: `#FF7A59`, d: `M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z` }) }) }, { name: `Linear`, logo: (0, r.jsx)(h, { children: (0, r.jsx)(`path`, { fill: `#5E6AD2`, d: `M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z` }) }) }, { name: `Google Drive`, logo: (0, r.jsx)(h, { children: (0, r.jsxs)(`svg`, { x: `1`, y: `2`, width: `22`, height: `20`, viewBox: `0 0 87.3 78`, children: [(0, r.jsx)(`path`, { d: `m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z`, fill: `#0066da` }), (0, r.jsx)(`path`, { d: `m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z`, fill: `#00ac47` }), (0, r.jsx)(`path`, { d: `m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z`, fill: `#ea4335` }), (0, r.jsx)(`path`, { d: `m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z`, fill: `#00832d` }), (0, r.jsx)(`path`, { d: `m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z`, fill: `#2684fc` }), (0, r.jsx)(`path`, { d: `m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z`, fill: `#ffba00` })] }) }) }];
var y = `
.ui-ib {
  --ui-ib-ink: #171717;
  --ui-ib-text: #404040;
  --ui-ib-muted: #8f8f8f;
  --ui-ib-faint: #b5b5b5;
  --ui-ib-line: #e2e2e2;
  --ui-ib-line-hi: #a9c0ff;
  --ui-ib-card: #ffffff;
  --ui-ib-tray: #f0f0f0;
  --ui-ib-accent: #2f6bff;
  /* Pulse: clear tail, accent body, a pale tip that reads as light */
  --ui-ib-pulse: #2f6bff;
  --ui-ib-tip-color: #b9cdff;
  --ui-ib-ring: rgba(47, 107, 255, 0.2);
  --ui-ib-glow: rgba(47, 107, 255, 0.26);
  --ui-ib-hub: #171717;
  --ui-ib-hub-mark: #ffffff;
  --ui-ib-hub-edge: rgba(0, 0, 0, 0.9);
  --ui-ib-tooltip: #171717;
  --ui-ib-tooltip-text: #ffffff;
  --ui-ib-shadow: 0 0 0 1px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 18px -10px rgba(0, 0, 0, 0.18);
  --ui-ib-focus: rgba(23, 23, 23, 0.22);
  --ui-ib-ease: ${l};
  position: relative;
  width: 100%;
  container-type: inline-size;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 13px;
  color: var(--ui-ib-text);
  -webkit-tap-highlight-color: transparent;
}
.ui-ib *, .ui-ib *::before, .ui-ib *::after { box-sizing: border-box; }

/* ---------- Beams ---------- */

/* Absolute, so it paints below the (positioned) tiles */
.ui-ib__beams {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}
.ui-ib__line {
  fill: none;
  stroke: var(--ui-ib-line);
  stroke-width: 1.5;
  stroke-linecap: round;
  transition: stroke 300ms var(--ui-ib-ease), opacity 300ms var(--ui-ib-ease);
}
.ui-ib__line[data-off] { stroke: var(--ui-ib-faint); stroke-dasharray: 2 5; opacity: 0.75; }
.ui-ib[data-focus] .ui-ib__line:not([data-focus]) { opacity: 0.35; }
.ui-ib__line[data-focus]:not([data-off]) { stroke: var(--ui-ib-line-hi); }

.ui-ib__pulse { opacity: 0; transition: opacity 240ms ease; }
.ui-ib__pulse path { fill: none; stroke-linecap: round; transition: opacity 300ms var(--ui-ib-ease); }
.ui-ib__core { stroke-width: 2; }
.ui-ib__glow { stroke-width: 6; opacity: 0.45; }
.ui-ib[data-focus] .ui-ib__pulse:not([data-focus]) path { opacity: 0.25; }
.ui-ib__pulse[data-focus] .ui-ib__glow { opacity: 0.7; }
.ui-ib__stop-tail { stop-color: var(--ui-ib-pulse); stop-opacity: 0; }
.ui-ib__stop-mid { stop-color: var(--ui-ib-pulse); stop-opacity: 0.9; }
.ui-ib__stop-head { stop-color: var(--ui-ib-tip-color); stop-opacity: 1; }

/* ---------- Layout: side by side, stacked on narrow widths ---------- */

.ui-ib__scene {
  --ui-ib-stack: 0;
  display: grid;
  grid-template-columns: auto minmax(40px, 1fr) auto minmax(40px, 1fr) auto;
  grid-template-areas: "in . hub . out";
  align-items: center;
  padding: 6px 0;
}
.ui-ib__group { display: flex; flex-direction: column; gap: 26px; }
.ui-ib__group--in { grid-area: in; }
.ui-ib__group--out { grid-area: out; }

/* ---------- Tools ---------- */

.ui-ib__tool {
  position: relative;
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  padding: 0;
  border: 0;
  border-radius: 18px;
  background: var(--ui-ib-card);
  box-shadow: var(--ui-ib-shadow);
  color: var(--ui-ib-ink);
  font: inherit;
  cursor: pointer;
  transition: background-color 300ms var(--ui-ib-ease), box-shadow 300ms var(--ui-ib-ease);
}
.ui-ib__tool:focus-visible { outline: 2px solid var(--ui-ib-focus); outline-offset: 3px; }
.ui-ib__logo {
  display: grid;
  width: 28px;
  height: 28px;
  transition: transform 300ms var(--ui-ib-ease), filter 300ms var(--ui-ib-ease), opacity 300ms var(--ui-ib-ease);
}
.ui-ib__logo > svg { width: 100%; height: 100%; }
@media (hover: hover) {
  .ui-ib__tool:hover .ui-ib__logo { transform: scale(1.08); }
}
.ui-ib__tool[data-off] { background: var(--ui-ib-tray); }
.ui-ib__tool[data-off] .ui-ib__logo { filter: grayscale(1); opacity: 0.4; }

/* Arrival glow \u2013 played with the Web Animations API */
.ui-ib__ring {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 3px var(--ui-ib-ring), 0 0 22px 2px var(--ui-ib-glow);
  opacity: 0;
  pointer-events: none;
}

/* Tooltip: points toward the centre, so it never leaves the scene */
.ui-ib__tip {
  --ui-ib-tip-from: translate(-4px, -50%);
  position: absolute;
  z-index: 3;
  top: 50%;
  left: calc(100% + 10px);
  padding: 5px 9px;
  border-radius: 8px;
  background: var(--ui-ib-tooltip);
  color: var(--ui-ib-tooltip-text);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: var(--ui-ib-tip-from);
  transition: opacity 180ms ease, transform 260ms var(--ui-ib-ease);
}
.ui-ib__group--out .ui-ib__tip { --ui-ib-tip-from: translate(4px, -50%); left: auto; right: calc(100% + 10px); }
.ui-ib__tip-state { opacity: 0.6; font-weight: 400; }
.ui-ib__tool[data-tip] .ui-ib__tip { opacity: 1; transform: translate(0, -50%); }

/* ---------- Centre ---------- */

.ui-ib__center {
  grid-area: hub;
  position: relative;
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: var(--ui-ib-hub);
  box-shadow: 0 0 0 1px var(--ui-ib-hub-edge), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 14px 28px -12px rgba(0, 0, 0, 0.38);
  color: var(--ui-ib-hub-mark);
}
.ui-ib__mark { display: grid; width: 36px; height: 36px; fill: currentColor; }
.ui-ib__mark > svg { width: 100%; height: 100%; }
.ui-ib__ring--center { inset: -1px; }

/* Status chip under the hub \u2013 absolute, so the hub itself stays centred on the beams */
.ui-ib__chip {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  translate: -50% 0;
  display: block;
  height: 26px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--ui-ib-card);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: width 320ms var(--ui-ib-ease);
}
.ui-ib__chip-inner {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: max-content;
  height: 26px;
  padding: 0 11px 0 10px;
  font-size: 12px;
  font-weight: 500;
  color: var(--ui-ib-text);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.ui-ib__status { display: inline-block; animation: ui-ib-in 320ms var(--ui-ib-ease) both; }
.ui-ib__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ui-ib-accent);
  transition: background-color 300ms ease;
}
.ui-ib__dot[data-idle] { background: var(--ui-ib-faint); }
.ui-ib__center[data-syncing] .ui-ib__dot { animation: ui-ib-breathe 1.1s ease-in-out infinite; }

.ui-ib__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@keyframes ui-ib-in { from { opacity: 0; transform: translateY(6px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }
@keyframes ui-ib-breathe { 50% { box-shadow: 0 0 0 3px var(--ui-ib-ring); } }

/* Narrow: senders above, receivers below, vertical beams */
@container (max-width: 459px) {
  .ui-ib__scene {
    --ui-ib-stack: 1;
    grid-template-columns: 1fr;
    grid-template-areas: "in" "hub" "out";
    justify-items: center;
    row-gap: 78px;
    padding: 0 0 4px;
  }
  .ui-ib__group { flex-direction: row; gap: clamp(14px, 7cqw, 34px); }
  .ui-ib__tool { width: 56px; height: 56px; border-radius: 17px; }
  .ui-ib__center { width: 76px; height: 76px; border-radius: 23px; }
  /* Tooltips sit between the rows; the outer tools align theirs to their edge */
  .ui-ib__tip,
  .ui-ib__group--out .ui-ib__tip {
    --ui-ib-tip-from: translate(-50%, -4px);
    top: calc(100% + 8px);
    right: auto;
    left: 50%;
  }
  .ui-ib__group--out .ui-ib__tip { --ui-ib-tip-from: translate(-50%, 4px); top: auto; bottom: calc(100% + 8px); }
  .ui-ib__tool[data-tip] .ui-ib__tip { transform: translate(-50%, 0); }
  .ui-ib__tool:first-child .ui-ib__tip { left: 0; translate: 50% 0; }
  .ui-ib__tool:last-child .ui-ib__tip { left: 100%; translate: -50% 0; }
}

/* Touch: the tiles are already 56px+; tooltips are shown after a tap instead of on hover */
@media (hover: none) and (pointer: coarse) {
  .ui-ib__tool { min-width: 44px; min-height: 44px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-ib__line, .ui-ib__tool, .ui-ib__logo, .ui-ib__tip, .ui-ib__chip, .ui-ib__dot { transition: none; }
  .ui-ib__status, .ui-ib__center[data-syncing] .ui-ib__dot { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ib {
  --ui-ib-ink: #ededed;
  --ui-ib-text: #c8c8cc;
  --ui-ib-muted: #8b8b92;
  --ui-ib-faint: #5c5c63;
  --ui-ib-line: #2e2e33;
  --ui-ib-line-hi: #4b5f9e;
  --ui-ib-card: #19191b;
  --ui-ib-tray: #111113;
  --ui-ib-accent: #6d8bff;
  --ui-ib-pulse: #6d8bff;
  --ui-ib-tip-color: #ffffff;
  --ui-ib-ring: rgba(109, 139, 255, 0.24);
  --ui-ib-glow: rgba(109, 139, 255, 0.3);
  --ui-ib-hub: #26262a;
  --ui-ib-hub-mark: #ffffff;
  --ui-ib-hub-edge: rgba(255, 255, 255, 0.12);
  --ui-ib-tooltip: #ededed;
  --ui-ib-tooltip-text: #111113;
  --ui-ib-shadow: 0 0 0 1px #2a2a2e, 0 1px 2px rgba(0, 0, 0, 0.3), 0 8px 18px -10px rgba(0, 0, 0, 0.6);
  --ui-ib-focus: rgba(255, 255, 255, 0.3);
}
:where(.dark, [data-theme="dark"]) .ui-ib__chip { box-shadow: 0 0 0 1px #2a2a2e, 0 1px 2px rgba(0, 0, 0, 0.3); }
`;
function b() {
  return (0, r.jsx)(`div`, { className: `integration-beam-demo`, children: (0, r.jsx)(p, {}) });
}
export {
  b as default
};
