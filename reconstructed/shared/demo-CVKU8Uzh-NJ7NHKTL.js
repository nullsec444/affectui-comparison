import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/demo-CVKU8Uzh.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{
  n: 1,
  x: 30,
  y: 68
}, {
  n: 2,
  x: 125,
  y: 56
}, {
  n: 3,
  x: 220,
  y: 44
}];
function AComponent({
  className,
  label = `Three overlapping browser windows full of placeholder content`
}) {
  let a = `ui-to` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  return /* @__PURE__ */ jsxs("div", { className: [`ui-to`, className].filter(Boolean).join(` `), role: `img`, "aria-label": label, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-tab-overload`, precedence: `default`, children: o }),
    /* @__PURE__ */ jsxs("svg", { className: `ui-to-art`, viewBox: `0 0 360 240`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs("linearGradient", { id: `${a}-blob-h`, x1: `0%`, y1: `0%`, x2: `100%`, y2: `0%`, children: [
          /* @__PURE__ */ jsx("stop", { offset: `0%`, stopColor: `#FFB89E`, stopOpacity: `0.3` }),
          /* @__PURE__ */ jsx("stop", { offset: `50%`, stopColor: `#C8A8E5`, stopOpacity: `0.3` }),
          /* @__PURE__ */ jsx("stop", { offset: `100%`, stopColor: `#A8B5FF`, stopOpacity: `0.3` })
        ] }),
        /* @__PURE__ */ jsxs("linearGradient", { id: `${a}-blob-v`, x1: `0%`, y1: `100%`, x2: `0%`, y2: `0%`, children: [
          /* @__PURE__ */ jsx("stop", { offset: `0%`, stopColor: `#FF6B5C`, stopOpacity: `0.3` }),
          /* @__PURE__ */ jsx("stop", { offset: `100%`, stopColor: `#FFB89E`, stopOpacity: `0.3` })
        ] }),
        /* @__PURE__ */ jsx("filter", { id: `${a}-blur`, x: `-200%`, y: `-200%`, width: `500%`, height: `500%`, children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: `12` }) }),
        /* @__PURE__ */ jsxs("linearGradient", { id: `${a}-stroke`, x1: `100%`, y1: `0%`, x2: `0%`, y2: `100%`, children: [
          /* @__PURE__ */ jsx("stop", { offset: `0%`, stopColor: `#B5C0FF` }),
          /* @__PURE__ */ jsx("stop", { offset: `40%`, stopColor: `#D5BBEF` }),
          /* @__PURE__ */ jsx("stop", { offset: `75%`, stopColor: `#FFC5AB` }),
          /* @__PURE__ */ jsx("stop", { offset: `100%`, stopColor: `#FFB5BC` })
        ] })
      ] }),
      i.map(({
        n: n_1,
        x,
        y
      }) => /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsxs("g", { className: `ui-to-blobs ui-to-blobs-${n_1}`, children: [
          /* @__PURE__ */ jsx("ellipse", { cx: x + 70, cy: y + 8, rx: `90`, ry: `14`, fill: `url(#${a}-blob-h)`, filter: `url(#${a}-blur)` }),
          /* @__PURE__ */ jsx("ellipse", { cx: x + 8, cy: y + 96, rx: `14`, ry: `90`, fill: `url(#${a}-blob-v)`, filter: `url(#${a}-blur)` })
        ] }),
        /* @__PURE__ */ jsxs("g", { className: `ui-to-tab ui-to-tab-${n_1}`, transform: `translate(${x} ${y})`, children: [
          /* @__PURE__ */ jsx("rect", { className: `ui-to-frame`, width: `380`, height: `300`, rx: `6`, fill: `#F4F5F7`, stroke: `#E4E7EC`, strokeWidth: `0.7` }),
          /* @__PURE__ */ jsx("circle", { className: `ui-to-dot`, cx: `14`, cy: `14`, r: `3`, fill: `#CCCCCC` }),
          /* @__PURE__ */ jsx("circle", { className: `ui-to-dot`, cx: `24`, cy: `14`, r: `3`, fill: `#CCCCCC` }),
          /* @__PURE__ */ jsx("circle", { className: `ui-to-dot`, cx: `34`, cy: `14`, r: `3`, fill: `#CCCCCC` }),
          /* @__PURE__ */ jsx("rect", { className: `ui-to-page`, x: `4`, y: `24`, width: `372`, height: `272`, rx: `5`, fill: `#FFFFFF`, stroke: `#E4E7EC`, strokeWidth: `0.7` })
        ] }),
        /* @__PURE__ */ jsxs("g", { className: `ui-to-content ui-to-content-${n_1}`, transform: `translate(${x} ${y})`, children: [
          /* @__PURE__ */ jsx("rect", { className: `ui-to-bar`, x: `12`, y: `36`, width: `30`, height: `30`, rx: `4`, fill: `#EFF1F4` }),
          /* @__PURE__ */ jsx("rect", { className: `ui-to-bar`, x: `52`, y: `38`, width: `100`, height: `6`, rx: `2`, fill: `#EFF1F4` }),
          /* @__PURE__ */ jsx("rect", { className: `ui-to-bar`, x: `52`, y: `46`, width: `100`, height: `6`, rx: `2`, fill: `#EFF1F4` }),
          /* @__PURE__ */ jsx("rect", { className: `ui-to-bar`, x: `52`, y: `54`, width: `35`, height: `6`, rx: `2`, fill: `#EFF1F4` }),
          /* @__PURE__ */ jsx("rect", { className: `ui-to-bar`, x: `12`, y: `72`, width: `140`, height: `6`, rx: `2`, fill: `#EFF1F4` }),
          /* @__PURE__ */ jsx("rect", { className: `ui-to-bar`, x: `12`, y: `80`, width: `140`, height: `6`, rx: `2`, fill: `#EFF1F4` }),
          /* @__PURE__ */ jsx("rect", { className: `ui-to-bar`, x: `12`, y: `88`, width: `55`, height: `6`, rx: `2`, fill: `#EFF1F4` })
        ] })
      ] }, n_1)),
      i.map(({
        n: n_1,
        x,
        y
      }) => /* @__PURE__ */ jsxs("g", { className: `ui-to-front ui-to-front-${n_1}`, children: [
        /* @__PURE__ */ jsx("circle", { cx: x + 14, cy: y + 14, r: `3`, fill: `#FF6B5C` }),
        /* @__PURE__ */ jsx("circle", { cx: x + 24, cy: y + 14, r: `3`, fill: `#FFB89E` }),
        /* @__PURE__ */ jsx("circle", { cx: x + 34, cy: y + 14, r: `3`, fill: `#A8B5FF` }),
        /* @__PURE__ */ jsx("path", { d: `M ${x} 240 L ${x} ${y + 6} A 6 6 0 0 1 ${x + 6} ${y} L ${n_1 === 3 ? 360 : x + 95} ${y}`, fill: `none`, stroke: `url(#${a}-stroke)`, strokeWidth: `0.8` })
      ] }, n_1))
    ] })
  ] });
}
var o = `
.ui-to {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  /* Fade out towards the right and bottom edge */
  -webkit-mask-image:
    linear-gradient(to right, #000 70%, transparent 100%),
    linear-gradient(to bottom, #000 70%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, #000 70%, transparent 100%),
    linear-gradient(to bottom, #000 70%, transparent 100%);
  mask-composite: intersect;
}
.ui-to-art {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

/* Placeholder blocks shimmer softly */
.ui-to-bar { animation: ui-to-shimmer 2.4s ease-in-out infinite; }
@keyframes ui-to-shimmer {
  0%, 100% { fill: #EFF1F4; }
  50% { fill: #DDE1E5; }
}

/* The highlight follows the hovered window; the front window is active by default */
.ui-to-blobs,
.ui-to-front {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.ui-to-content {
  opacity: 0.2;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.ui-to-blobs-3,
.ui-to-front-3,
.ui-to-content-3 { opacity: 1; }

.ui-to-art:has(.ui-to-tab-1:hover) .ui-to-blobs-1,
.ui-to-art:has(.ui-to-tab-1:hover) .ui-to-front-1,
.ui-to-art:has(.ui-to-tab-1:hover) .ui-to-content-1,
.ui-to-art:has(.ui-to-tab-2:hover) .ui-to-blobs-2,
.ui-to-art:has(.ui-to-tab-2:hover) .ui-to-front-2,
.ui-to-art:has(.ui-to-tab-2:hover) .ui-to-content-2 { opacity: 1; }

.ui-to-art:has(.ui-to-tab-1:hover, .ui-to-tab-2:hover) .ui-to-blobs-3,
.ui-to-art:has(.ui-to-tab-1:hover, .ui-to-tab-2:hover) .ui-to-front-3 { opacity: 0; }
.ui-to-art:has(.ui-to-tab-1:hover, .ui-to-tab-2:hover) .ui-to-content-3 { opacity: 0.2; }

@media (prefers-reduced-motion: reduce) {
  .ui-to-bar { animation: none; }
  .ui-to-blobs, .ui-to-front, .ui-to-content { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-to-frame { fill: #1b1b1d; stroke: rgba(255, 255, 255, 0.1); }
:where(.dark, [data-theme="dark"]) .ui-to-dot { fill: #3a3a3f; }
:where(.dark, [data-theme="dark"]) .ui-to-page { fill: #232326; stroke: rgba(255, 255, 255, 0.08); }
:where(.dark, [data-theme="dark"]) .ui-to-bar { fill: #2e2e32; }
@media (prefers-reduced-motion: no-preference) {
  :where(.dark, [data-theme="dark"]) .ui-to-bar { animation-name: ui-to-shimmer-dark; }
}
@keyframes ui-to-shimmer-dark {
  0%, 100% { fill: #2e2e32; }
  50% { fill: #3a3a3f; }
}
`;
function SComponent() {
  return /* @__PURE__ */ jsx("div", { className: `tab-overload-demo`, children: /* @__PURE__ */ jsx(AComponent, {}) });
}
export {
  SComponent as default
};
