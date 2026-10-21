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

// reconstructed/demo-CU49Fdlm.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`0s`, `-7.33s`, `-14.66s`];
function AComponent({
  className,
  label = `A Grok tile with data nodes orbiting around it`
}) {
  let a = `ui-eo` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  return /* @__PURE__ */ jsxs("div", { className: [`ui-eo`, className].filter(Boolean).join(` `), role: `img`, "aria-label": label, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-enrichment-orbit`, precedence: `default`, children: o }),
    /* @__PURE__ */ jsxs("svg", { className: `ui-eo-art`, viewBox: `0 0 320 240`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs("filter", { id: `${a}-tile`, x: `-30%`, y: `-30%`, width: `160%`, height: `160%`, children: [
          /* @__PURE__ */ jsx("feGaussianBlur", { in: `SourceAlpha`, stdDeviation: `4`, result: `dropBlur` }),
          /* @__PURE__ */ jsx("feOffset", { in: `dropBlur`, dx: `0`, dy: `3`, result: `dropOffset` }),
          /* @__PURE__ */ jsx("feFlood", { className: `ui-eo-drop`, floodColor: `#000000`, floodOpacity: `0.06`, result: `dropColor` }),
          /* @__PURE__ */ jsx("feComposite", { in: `dropColor`, in2: `dropOffset`, operator: `in`, result: `dropShadow` }),
          /* @__PURE__ */ jsx("feOffset", { in: `SourceAlpha`, dx: `0`, dy: `-4`, result: `alphaUp` }),
          /* @__PURE__ */ jsx("feComposite", { in: `SourceAlpha`, in2: `alphaUp`, operator: `out`, result: `sliver` }),
          /* @__PURE__ */ jsx("feFlood", { className: `ui-eo-sliver`, floodColor: `#EAECEF`, floodOpacity: `1`, result: `innerColor` }),
          /* @__PURE__ */ jsx("feComposite", { in: `innerColor`, in2: `sliver`, operator: `in`, result: `innerShadow` }),
          /* @__PURE__ */ jsxs("feMerge", { children: [
            /* @__PURE__ */ jsx("feMergeNode", { in: `dropShadow` }),
            /* @__PURE__ */ jsx("feMergeNode", { in: `SourceGraphic` }),
            /* @__PURE__ */ jsx("feMergeNode", { in: `innerShadow` })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("filter", { id: `${a}-node`, x: `-60%`, y: `-60%`, width: `220%`, height: `220%`, children: [
          /* @__PURE__ */ jsx("feGaussianBlur", { in: `SourceAlpha`, stdDeviation: `2.5`, result: `dropBlur` }),
          /* @__PURE__ */ jsx("feOffset", { in: `dropBlur`, dx: `0`, dy: `2`, result: `dropOffset` }),
          /* @__PURE__ */ jsx("feFlood", { className: `ui-eo-drop`, floodColor: `#000000`, floodOpacity: `0.07`, result: `dropColor` }),
          /* @__PURE__ */ jsx("feComposite", { in: `dropColor`, in2: `dropOffset`, operator: `in`, result: `dropShadow` }),
          /* @__PURE__ */ jsx("feOffset", { in: `SourceAlpha`, dx: `0`, dy: `-3`, result: `alphaUp` }),
          /* @__PURE__ */ jsx("feComposite", { in: `SourceAlpha`, in2: `alphaUp`, operator: `out`, result: `sliver` }),
          /* @__PURE__ */ jsx("feFlood", { className: `ui-eo-sliver`, floodColor: `#EAECEF`, floodOpacity: `1`, result: `innerColor` }),
          /* @__PURE__ */ jsx("feComposite", { in: `innerColor`, in2: `sliver`, operator: `in`, result: `innerShadow` }),
          /* @__PURE__ */ jsxs("feMerge", { children: [
            /* @__PURE__ */ jsx("feMergeNode", { in: `dropShadow` }),
            /* @__PURE__ */ jsx("feMergeNode", { in: `SourceGraphic` }),
            /* @__PURE__ */ jsx("feMergeNode", { in: `innerShadow` })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("linearGradient", { id: `${a}-comet`, children: [
          /* @__PURE__ */ jsx("stop", { offset: `0%`, stopColor: `#FF6B5C`, stopOpacity: `0` }),
          /* @__PURE__ */ jsx("stop", { offset: `22%`, stopColor: `#FFB89E`, stopOpacity: `0.9` }),
          /* @__PURE__ */ jsx("stop", { offset: `50%`, stopColor: `#C8A8E5`, stopOpacity: `0.9` }),
          /* @__PURE__ */ jsx("stop", { offset: `78%`, stopColor: `#A8B5FF`, stopOpacity: `0.9` }),
          /* @__PURE__ */ jsx("stop", { offset: `100%`, stopColor: `#A8B5FF`, stopOpacity: `0` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("g", { className: `ui-eo-rings`, fill: `none`, stroke: `#E4E7EC`, strokeWidth: `1.2`, children: [
        /* @__PURE__ */ jsx("circle", { cx: `160`, cy: `120`, r: `56`, strokeOpacity: `0.45` }),
        /* @__PURE__ */ jsx("circle", { cx: `160`, cy: `120`, r: `80` })
      ] }),
      /* @__PURE__ */ jsx("g", { className: `ui-eo-spin`, children: /* @__PURE__ */ jsx("path", { fill: `none`, stroke: `url(#${a}-comet)`, strokeWidth: `1.6`, strokeLinecap: `round`, d: `M114.1 54.5 A80 80 0 0 1 205.9 54.5` }) }),
      /* @__PURE__ */ jsx("g", { className: `ui-eo-spin ui-eo-reverse`, children: /* @__PURE__ */ jsx("path", { fill: `none`, stroke: `url(#${a}-comet)`, strokeWidth: `1.6`, strokeLinecap: `round`, d: `M120.4 80.4 A56 56 0 0 1 199.6 80.4` }) }),
      /* @__PURE__ */ jsx("rect", { className: `ui-eo-tile`, x: `134`, y: `94`, width: `52`, height: `52`, rx: `12`, fill: `#FFFFFF`, stroke: `#E4E7EC`, strokeWidth: `0.5`, filter: `url(#${a}-tile)` }),
      /* @__PURE__ */ jsx(SComponent, { x: 147, y: 107, size: 26 }),
      i.map((e) => /* @__PURE__ */ jsx("g", { className: `ui-eo-orbit`, style: {
        animationDelay: e
      }, children: /* @__PURE__ */ jsxs("g", { className: `ui-eo-upright`, style: {
        animationDelay: e
      }, children: [
        /* @__PURE__ */ jsx("circle", { className: `ui-eo-tile`, cx: `160`, cy: `40`, r: `17`, fill: `#FFFFFF`, stroke: `#E4E7EC`, strokeWidth: `0.5`, filter: `url(#${a}-node)` }),
        /* @__PURE__ */ jsx("g", { transform: `translate(154 34) scale(0.0288)`, className: `ui-eo-icon`, fill: `#6B6F76`, fillOpacity: `0.55`, children: /* @__PURE__ */ jsx("path", { d: `M278 88C278 115.614 300.386 138 328 138H366C393.614 138 416 160.386 416 188V228C416 255.614 393.614 278 366 278H328C300.386 278 278 300.386 278 328V366C278 393.614 255.614 416 228 416H188C160.386 416 138 393.614 138 366V328C138 300.386 115.614 278 88 278H50C22.3858 278 0 255.614 0 228V188C0 160.386 22.3858 138 50 138H88C115.614 138 138 115.614 138 88V50C138 22.3858 160.386 0 188 0H228C255.614 0 278 22.3858 278 50V88ZM140 226C140 253.614 162.386 276 190 276H226C253.614 276 276 253.614 276 226V190C276 162.386 253.614 140 226 140H190C162.386 140 140 162.386 140 190V226Z` }) })
      ] }) }, e))
    ] })
  ] });
}
var o = `
.ui-eo {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
}
.ui-eo-art {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

/* Comets: one full turn around the center every 7 s */
.ui-eo-spin {
  transform-origin: 160px 120px;
  animation: ui-eo-turn 7s linear infinite;
}
.ui-eo-reverse { animation-direction: reverse; }

/* Nodes: one orbit every 22 s, turned back around their own center to stay upright */
.ui-eo-orbit {
  transform-origin: 160px 120px;
  animation: ui-eo-turn 22s linear infinite;
}
.ui-eo-upright {
  transform-box: fill-box;
  transform-origin: center;
  animation: ui-eo-turn 22s linear infinite reverse;
}
@keyframes ui-eo-turn {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Reduced motion: everything stays put, the nodes keep their staggered spots on the ring */
@media (prefers-reduced-motion: reduce) {
  .ui-eo-spin, .ui-eo-orbit, .ui-eo-upright { animation-play-state: paused; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-eo-rings { stroke: rgba(255, 255, 255, 0.14); }
:where(.dark, [data-theme="dark"]) .ui-eo-tile { fill: #232326; stroke: rgba(255, 255, 255, 0.08); }
:where(.dark, [data-theme="dark"]) .ui-eo-drop { flood-opacity: 0.4; }
:where(.dark, [data-theme="dark"]) .ui-eo-sliver { flood-color: #1a1a1c; }
:where(.dark, [data-theme="dark"]) .ui-eo-icon { fill: #c4c4c4; }
:where(.dark, [data-theme="dark"]) .ui-eo-mark { fill: #ededed; }
`;
var SComponent = ({
  x,
  y,
  size
}) => /* @__PURE__ */ jsxs("svg", { x, y, width: size, height: size, viewBox: `0 0 33.4 32`, overflow: `visible`, children: [
  /* @__PURE__ */ jsx("path", { className: `ui-eo-mark`, fill: `#171717`, d: `M12.8734 20.5407L23.9549 12.3506C24.4982 11.9491 25.2747 12.1057 25.5336 12.7294C26.896 16.0185 26.2873 19.9712 23.5766 22.6851C20.866 25.3989 17.0944 25.9941 13.6471 24.6386L9.88123 26.3843C15.2826 30.0806 21.8416 29.1665 25.9403 25.0601C29.1914 21.8051 30.1983 17.3683 29.2568 13.3673L29.2653 13.3758C27.9 7.49809 29.601 5.14871 33.0853 0.344576C33.1677 0.230667 33.2502 0.116757 33.3327 0L28.7476 4.59055V4.57631L12.8706 20.5436` }),
  /* @__PURE__ */ jsx("path", { className: `ui-eo-mark`, fill: `#171717`, d: `M10.5867 22.5312C6.70979 18.8234 7.37821 13.0852 10.6862 9.77618C13.1323 7.3271 17.14 6.32755 20.6385 7.79698L24.3959 6.05986C23.719 5.57005 22.8514 5.04322 21.8559 4.67301C17.3562 2.81914 11.969 3.7418 8.31115 7.40114C4.79271 10.9238 3.68626 16.3402 5.58628 20.9621C7.0056 24.4164 4.67893 26.8597 2.3352 29.3259C1.50465 30.2001 0.67126 31.0744 0 31.9999L10.5838 22.534` })
] });
function CComponent() {
  return /* @__PURE__ */ jsx("div", { className: `enrichment-orbit-demo`, children: /* @__PURE__ */ jsx(AComponent, {}) });
}
export {
  CComponent as default
};
