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

// reconstructed/demo-Cc3_N5Az.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => {
  if (typeof e == `number`) {
    return `${e}px`;
  }
  return e;
};
var AComponent = () => /* @__PURE__ */ jsx("style", { href: `ui-shimmer-loader`, precedence: `default`, children: c });
function OComponent({
  width,
  height,
  radius,
  circle,
  className,
  style
}) {
  let width_1 = i(width);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AComponent, {}),
    /* @__PURE__ */ jsx("span", { className: [`ui-shm`, className].filter(Boolean).join(` `), "aria-hidden": `true`, style: {
      width: width_1,
      height: circle ? width_1 ?? i(height) : i(height),
      borderRadius: circle ? `50%` : i(radius),
      ...style
    } })
  ] });
}
function SComponent({
  children,
  duration = 2,
  className
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AComponent, {}),
    /* @__PURE__ */ jsx("span", { className: [`ui-shm-text`, className].filter(Boolean).join(` `), style: {
      "--ui-shm-text-dur": `${duration}s`
    }, children })
  ] });
}
var c = `
.ui-shm,
.ui-shm-text {
  --ui-shm-base: #ececec;
  --ui-shm-glow: rgba(255, 255, 255, 0.9);
  --ui-shm-text: #a3a3a3;
  --ui-shm-text-glow: #ffffff;
  --ui-shm-dur: 2.2s;
}

/* Skeleton: one fixed gradient for the whole viewport, so all blocks sweep together */
.ui-shm {
  display: block;
  flex: none;
  width: 100%;
  height: 12px;
  max-width: 100%;
  border-radius: 6px;
  background-color: var(--ui-shm-base);
  background-image: linear-gradient(
    100deg,
    transparent 0%,
    transparent 30%,
    var(--ui-shm-glow) 50%,
    transparent 70%,
    transparent 100%
  );
  background-size: 150vw 100%;
  background-repeat: repeat-x;
  background-attachment: fixed;
  animation: ui-shm-sweep var(--ui-shm-dur) linear infinite;
}
@keyframes ui-shm-sweep {
  from { background-position: -50vw 0; }
  to { background-position: 100vw 0; }
}

/* Text: a highlight band runs through the letters */
.ui-shm-text {
  display: inline-block;
  color: var(--ui-shm-text);
  background-image: linear-gradient(
    90deg,
    var(--ui-shm-text) 0%,
    var(--ui-shm-text) 40%,
    var(--ui-shm-text-glow) 50%,
    var(--ui-shm-text) 60%,
    var(--ui-shm-text) 100%
  );
  background-size: 300% 100%;
  background-position: 100% 0;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ui-shm-text var(--ui-shm-text-dur, 2s) linear infinite;
}
@keyframes ui-shm-text {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-shm { animation: none; background-image: none; }
  .ui-shm-text { animation: none; background-image: none; -webkit-text-fill-color: currentColor; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-shm,
:where(.dark, [data-theme="dark"]) .ui-shm-text {
  --ui-shm-base: #2f2f33;
  --ui-shm-glow: rgba(255, 255, 255, 0.08);
  --ui-shm-text: #6e6e73;
  --ui-shm-text-glow: #f5f5f5;
}
`;
var l = [`#ffd6a8, #ff9f6b`, `#c7d7ff, #8aa7ff`, `#cdeccf, #7fcf9a`];
function UComponent() {
  let [e, setE] = n3.useState(true);
  let [i2, setI] = n3.useState(0);
  n3.useEffect(() => {
    let n4 = setTimeout(() => setE((e2) => !e2), e ? 2500 : 3200);
    return () => clearTimeout(n4);
  }, [e, i2]);
  return /* @__PURE__ */ jsxs("div", { className: `shimmer-loader-demo`, children: [
    /* @__PURE__ */ jsxs("div", { className: `shd-top`, children: [
      /* @__PURE__ */ jsx(SComponent, { className: `shd-label`, children: `Generating summary\u2026` }),
      /* @__PURE__ */ jsx("button", { type: `button`, className: `shd-btn`, onClick: () => {
        setE(true);
        setI((e2) => e2 + 1);
      }, children: `Reload` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `shd-card`, "aria-busy": e, children: e ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: `shd-row`, children: [
        /* @__PURE__ */ jsx(OComponent, { circle: true, width: 36 }),
        /* @__PURE__ */ jsxs("div", { className: `shd-meta`, children: [
          /* @__PURE__ */ jsx(OComponent, { width: 96, height: 10, radius: 5 }),
          /* @__PURE__ */ jsx(OComponent, { width: 64, height: 8, radius: 4 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `shd-lines`, children: [
        /* @__PURE__ */ jsx(OComponent, { height: 10, radius: 5 }),
        /* @__PURE__ */ jsx(OComponent, { width: `72%`, height: 10, radius: 5 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `shd-tiles`, children: l.map((key) => /* @__PURE__ */ jsx(OComponent, { height: 56, radius: 10 }, key)) })
    ] }) : /* @__PURE__ */ jsxs("div", { className: `shd-loaded`, children: [
      /* @__PURE__ */ jsxs("div", { className: `shd-row`, children: [
        /* @__PURE__ */ jsx("span", { className: `shd-avatar`, children: `MC` }),
        /* @__PURE__ */ jsxs("div", { className: `shd-meta`, children: [
          /* @__PURE__ */ jsx("span", { className: `shd-name`, children: `Maya Chen` }),
          /* @__PURE__ */ jsx("span", { className: `shd-sub`, children: `Product design \xB7 2h` })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: `shd-text`, children: `New onboarding flow is live \u2013 activation is up 18% in the first week.` }),
      /* @__PURE__ */ jsx("div", { className: `shd-tiles`, children: l.map((e2) => /* @__PURE__ */ jsx("span", { className: `shd-tile`, style: {
        background: `linear-gradient(135deg, ${e2})`
      } }, e2)) })
    ] }) })
  ] });
}
export {
  UComponent as default
};
