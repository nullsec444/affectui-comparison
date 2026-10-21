import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-D-FldunI.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`M160 52 V120`, `M160 52 C 160 86, 72 86, 72 130`, `M160 52 C 160 86, 248 86, 248 130`];
var a = [[128, 120, 64, 14], [44, 130, 56, 12], [220, 130, 56, 12]];
var o = ([e, t, n4, r2], i2) => {
  let a2 = e + n4 / 2;
  if (i2 === `left`) {
    return `H${e + r2} A${r2} ${r2} 0 0 0 ${e} ${t + r2} V${t + n4 - r2} A${r2} ${r2} 0 0 0 ${e + r2} ${t + n4} H${a2}`;
  }
  return `H${e + n4 - r2} A${r2} ${r2} 0 0 1 ${e + n4} ${t + r2} V${t + n4 - r2} A${r2} ${r2} 0 0 1 ${e + n4 - r2} ${t + n4} H${a2}`;
};
var s = i.flatMap((d, branch) => {
  let [n4, r2, i2] = a[branch];
  let s2 = `M${n4 + i2 / 2} ${r2}`;
  return [{
    d,
    branch,
    phase: `line`
  }, {
    d: `${s2} ${o(a[branch], `left`)}`,
    branch,
    phase: `tile`
  }, {
    d: `${s2} ${o(a[branch], `right`)}`,
    branch,
    phase: `tile`
  }];
});
var c = [[36, 0.18], [25, 0.38], [15, 0.7], [7, 1]];
var l = c[0][0];
function UComponent({
  className,
  label = `Lines branching out to Gmail, Slack and Notion tiles`
}) {
  let n4 = useD();
  return /* @__PURE__ */ jsxs("div", { className: [`ui-ob`, className].filter(Boolean).join(` `), role: `img`, "aria-label": label, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-outreach-branches`, precedence: `default`, children: m }),
    /* @__PURE__ */ jsxs("svg", { className: `ui-ob-art`, viewBox: `0 0 320 240`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs("filter", { id: `${n4}-tile`, x: `-30%`, y: `-30%`, width: `160%`, height: `160%`, children: [
          /* @__PURE__ */ jsx("feGaussianBlur", { in: `SourceAlpha`, stdDeviation: `4`, result: `dropBlur` }),
          /* @__PURE__ */ jsx("feOffset", { in: `dropBlur`, dx: `0`, dy: `3`, result: `dropOffset` }),
          /* @__PURE__ */ jsx("feFlood", { className: `ui-ob-drop`, floodColor: `#000000`, floodOpacity: `0.06`, result: `dropColor` }),
          /* @__PURE__ */ jsx("feComposite", { in: `dropColor`, in2: `dropOffset`, operator: `in`, result: `dropShadow` }),
          /* @__PURE__ */ jsx("feOffset", { in: `SourceAlpha`, dx: `0`, dy: `-4`, result: `alphaUp` }),
          /* @__PURE__ */ jsx("feComposite", { in: `SourceAlpha`, in2: `alphaUp`, operator: `out`, result: `sliver` }),
          /* @__PURE__ */ jsx("feFlood", { className: `ui-ob-sliver`, floodColor: `#EAECEF`, floodOpacity: `1`, result: `innerColor` }),
          /* @__PURE__ */ jsx("feComposite", { in: `innerColor`, in2: `sliver`, operator: `in`, result: `innerShadow` }),
          /* @__PURE__ */ jsxs("feMerge", { children: [
            /* @__PURE__ */ jsx("feMergeNode", { in: `dropShadow` }),
            /* @__PURE__ */ jsx("feMergeNode", { in: `SourceGraphic` }),
            /* @__PURE__ */ jsx("feMergeNode", { in: `innerShadow` })
          ] })
        ] }),
        /* @__PURE__ */ jsx("filter", { id: `${n4}-blur`, x: `-60%`, y: `-200%`, width: `220%`, height: `500%`, children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: `11` }) }),
        /* @__PURE__ */ jsxs("linearGradient", { id: `${n4}-blob`, x1: `0%`, y1: `0%`, x2: `100%`, y2: `0%`, children: [
          /* @__PURE__ */ jsx("stop", { offset: `0%`, stopColor: `#FFA0AB`, stopOpacity: `0.55` }),
          /* @__PURE__ */ jsx("stop", { offset: `33%`, stopColor: `#FFB89E`, stopOpacity: `0.55` }),
          /* @__PURE__ */ jsx("stop", { offset: `66%`, stopColor: `#C8A8E5`, stopOpacity: `0.55` }),
          /* @__PURE__ */ jsx("stop", { offset: `100%`, stopColor: `#A8B5FF`, stopOpacity: `0.55` })
        ] }),
        /* @__PURE__ */ jsxs("linearGradient", { id: `${n4}-edge`, x1: `0%`, y1: `0%`, x2: `100%`, y2: `0%`, children: [
          /* @__PURE__ */ jsx("stop", { className: `ui-ob-gray`, offset: `0%`, stopColor: `#E4E7EC` }),
          /* @__PURE__ */ jsx("stop", { offset: `18%`, stopColor: `#FFB5BC` }),
          /* @__PURE__ */ jsx("stop", { offset: `40%`, stopColor: `#FFC5AB` }),
          /* @__PURE__ */ jsx("stop", { offset: `60%`, stopColor: `#D5BBEF` }),
          /* @__PURE__ */ jsx("stop", { offset: `82%`, stopColor: `#B5C0FF` }),
          /* @__PURE__ */ jsx("stop", { className: `ui-ob-gray`, offset: `100%`, stopColor: `#E4E7EC` })
        ] }),
        /* @__PURE__ */ jsxs("linearGradient", { id: `${n4}-pulse`, gradientUnits: `userSpaceOnUse`, x1: `40`, y1: `0`, x2: `280`, y2: `0`, children: [
          /* @__PURE__ */ jsx("stop", { offset: `0%`, stopColor: `#FF8A96` }),
          /* @__PURE__ */ jsx("stop", { offset: `33%`, stopColor: `#FFA77F` }),
          /* @__PURE__ */ jsx("stop", { offset: `66%`, stopColor: `#B98EE5` }),
          /* @__PURE__ */ jsx("stop", { offset: `100%`, stopColor: `#8E9DFF` })
        ] })
      ] }),
      /* @__PURE__ */ jsx("g", { className: `ui-ob-lines`, fill: `none`, stroke: `#E4E7EC`, strokeWidth: `1.2`, strokeLinecap: `round`, children: i.map((e) => /* @__PURE__ */ jsx("path", { d: e }, e)) }),
      /* @__PURE__ */ jsx("rect", { x: `44`, y: `130`, width: `56`, height: `56`, rx: `12`, className: `ui-ob-tile`, fill: `#FFFFFF`, stroke: `#E4E7EC`, strokeWidth: `0.5`, filter: `url(#${n4}-tile)` }),
      /* @__PURE__ */ jsx(FComponent, { x: 57, y: 146.07, width: 30 }),
      /* @__PURE__ */ jsx("rect", { x: `220`, y: `130`, width: `56`, height: `56`, rx: `12`, className: `ui-ob-tile`, fill: `#FFFFFF`, stroke: `#E4E7EC`, strokeWidth: `0.5`, filter: `url(#${n4}-tile)` }),
      /* @__PURE__ */ jsx(HComponent, { x: 235, y: 143, size: 30 }),
      /* @__PURE__ */ jsx("ellipse", { cx: `160`, cy: `184`, rx: `40`, ry: `13`, fill: `url(#${n4}-blob)`, filter: `url(#${n4}-blur)` }),
      /* @__PURE__ */ jsx("rect", { x: `128`, y: `120`, width: `64`, height: `64`, rx: `14`, className: `ui-ob-tile`, fill: `#FFFFFF`, stroke: `#E4E7EC`, strokeWidth: `0.5`, filter: `url(#${n4}-tile)` }),
      /* @__PURE__ */ jsx("path", { d: `M128 170 A 14 14 0 0 0 142 184 L178 184 A 14 14 0 0 0 192 170`, fill: `none`, stroke: `url(#${n4}-edge)`, strokeWidth: `0.5` }),
      /* @__PURE__ */ jsx(PComponent, { x: 146, y: 138, size: 28 }),
      /* @__PURE__ */ jsx("g", { className: `ui-ob-pulses`, stroke: `url(#${n4}-pulse)`, children: s.map((e, t) => c.map(([n5, strokeOpacity]) => /* @__PURE__ */ jsx("path", { className: e.phase === `line` ? `ui-ob-flow` : `ui-ob-wrap`, pathLength: 100, d: e.d, strokeOpacity, style: {
        strokeDasharray: `${n5} 200`,
        "--from": `${n5 / 2 + l / 2}`,
        "--to": `${n5 / 2 - 100 - l / 2}`,
        animationDelay: `${e.branch * 0.6}s`
      } }, `${t}-${n5}`))) })
    ] })
  ] });
}
var useD = () => `ui-ob` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
var FComponent = ({
  x,
  y,
  width
}) => {
  let i2 = useD();
  return /* @__PURE__ */ jsxs("svg", { x, y, width, height: width * 44.8722 / 56.4108, viewBox: `0 0 56.4108 44.8722`, fill: `none`, children: [
    /* @__PURE__ */ jsx("path", { d: `M44.2255 5.76727H56.4051V41.0239C56.4051 43.148 54.683 44.8701 52.5589 44.8701H46.1486C45.8961 44.8701 45.646 44.8204 45.4127 44.7237C45.1794 44.6271 44.9674 44.4854 44.7888 44.3069C44.6102 44.1283 44.4686 43.9163 44.3719 43.683C44.2753 43.4497 44.2255 43.1996 44.2255 42.947V5.76727Z`, fill: `url(#${i2}-0)` }),
    /* @__PURE__ */ jsx("path", { d: `M12.1796 5.76727H0V41.0239C0 43.148 1.72213 44.8701 3.84618 44.8701H10.2565C10.509 44.8701 10.7591 44.8204 10.9924 44.7237C11.2257 44.6271 11.4377 44.4854 11.6163 44.3069C11.7949 44.1283 11.9365 43.9163 12.0332 43.683C12.1298 43.4497 12.1796 43.1996 12.1796 42.947V5.76727Z`, fill: `#FC413D` }),
    /* @__PURE__ */ jsx("path", { d: `M10.0085 1.42778C7.43377 -0.736342 3.5924 -0.403647 1.42828 2.17105C-0.735843 4.74543 -0.403148 8.58681 2.17155 10.7512L26.5557 31.2479C27.0178 31.6362 27.602 31.8492 28.2056 31.8492C28.8091 31.8492 29.3934 31.6362 29.8554 31.2479L54.2396 10.7509C56.814 8.58681 57.1467 4.74543 54.9825 2.17073C52.8184 -0.403648 48.977 -0.736342 46.4027 1.42778L28.2054 16.724L10.0085 1.42778Z`, fill: `url(#${i2}-1)` }),
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsxs("linearGradient", { id: `${i2}-0`, x1: `50.3153`, y1: `5.76727`, x2: `50.3153`, y2: `44.8701`, gradientUnits: `userSpaceOnUse`, children: [
        /* @__PURE__ */ jsx("stop", { stopColor: `#60D673` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.17`, stopColor: `#42C868` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.39`, stopColor: `#0EBC5F` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.62`, stopColor: `#00A9BB` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.86`, stopColor: `#3C90FF` }),
        /* @__PURE__ */ jsx("stop", { offset: `1`, stopColor: `#3186FF` })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: `${i2}-1`, x1: `6.04194e-05`, y1: `6.45153`, x2: `56.4107`, y2: `6.45153`, gradientUnits: `userSpaceOnUse`, children: [
        /* @__PURE__ */ jsx("stop", { offset: `0.08`, stopColor: `#FF63A0` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.3`, stopColor: `#FC413D` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.5`, stopColor: `#FC413D` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.65`, stopColor: `#FC413D` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.72`, stopColor: `#FC5C30` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.86`, stopColor: `#FEB10C` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.91`, stopColor: `#FEC700` }),
        /* @__PURE__ */ jsx("stop", { offset: `0.96`, stopColor: `#FFDB0F` })
      ] })
    ] })
  ] });
};
var PComponent = ({
  x,
  y,
  size
}) => /* @__PURE__ */ jsxs("svg", { x, y, width: size, height: size, viewBox: `0 0 49.883 49.877`, fill: `none`, children: [
  /* @__PURE__ */ jsx("path", { d: `M18.3549 10.4784C15.4713 10.4784 13.1157 8.12279 13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V10.4784H18.3549Z`, fill: `#36C5F0` }),
  /* @__PURE__ */ jsx("path", { d: `M18.3575 13.12C21.2411 13.12 23.5967 15.4756 23.5967 18.3592C23.5967 21.2428 21.2411 23.5984 18.3575 23.5984H5.2392C2.35561 23.5984 0 21.2428 0 18.3592C0 15.4756 2.35561 13.12 5.2392 13.12H18.3575Z`, fill: `#36C5F0` }),
  /* @__PURE__ */ jsxs("g", { transform: `translate(26.28 0)`, children: [
    /* @__PURE__ */ jsx("path", { d: `M13.1244 18.3592C13.1244 15.4756 15.48 13.12 18.3636 13.12C21.2472 13.12 23.6028 15.4756 23.6028 18.3592C23.6028 21.2428 21.2472 23.5984 18.3636 23.5984H13.1244V18.3592Z`, fill: `#2EB67D` }),
    /* @__PURE__ */ jsx("path", { d: `M10.4785 18.3575C10.4785 21.2411 8.12286 23.5967 5.23927 23.5967C2.35568 23.5967 7.4362e-05 21.2411 7.4362e-05 18.3575V5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0C8.12286 0 10.4785 2.35561 10.4785 5.2392V18.3575Z`, fill: `#2EB67D` })
  ] }),
  /* @__PURE__ */ jsxs("g", { transform: `translate(0 26.28)`, children: [
    /* @__PURE__ */ jsx("path", { d: `M10.4784 5.2392C10.4784 8.12279 8.12279 10.4784 5.2392 10.4784C2.35561 10.4784 0 8.12279 0 5.2392C0 2.35561 2.35561 0 5.2392 0H10.4784V5.2392Z`, fill: `#E01E5A` }),
    /* @__PURE__ */ jsx("path", { d: `M13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V18.3575C23.5941 21.2411 21.2385 23.5967 18.3549 23.5967C15.4713 23.5967 13.1157 21.2411 13.1157 18.3575V5.2392Z`, fill: `#E01E5A` })
  ] }),
  /* @__PURE__ */ jsxs("g", { transform: `translate(26.28 26.28)`, children: [
    /* @__PURE__ */ jsx("path", { d: `M5.23927 13.1157C8.12286 13.1157 10.4785 15.4713 10.4785 18.3549C10.4785 21.2385 8.12286 23.5941 5.23927 23.5941C2.35568 23.5941 7.4362e-05 21.2385 7.4362e-05 18.3549V13.1157H5.23927Z`, fill: `#ECB22E` }),
    /* @__PURE__ */ jsx("path", { d: `M5.23927 10.4784C2.35568 10.4784 7.4362e-05 8.12279 7.4362e-05 5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0H18.3576C21.2412 0 23.5968 2.35561 23.5968 5.2392C23.5968 8.12279 21.2412 10.4784 18.3576 10.4784H5.23927Z`, fill: `#ECB22E` })
  ] })
] });
var m = `.ui-ob{position: relative;width: 100%;aspect-ratio: 3 / 2;overflow: hidden}.ui-ob-art{position: absolute;inset: 0;display: block;width: 100%;height: 100%}.ui-ob-flow, .ui-ob-wrap{fill: none;stroke-linecap: round;stroke-dashoffset: var(--from);opacity: 0;animation-duration: 4.2s;animation-iteration-count: infinite}.ui-ob-flow{stroke-width: 1;animation-name: ui-ob-flow}.ui-ob-wrap{stroke-width: 0.8;animation-name: ui-ob-wrap}@keyframes ui-ob-flow{0%{stroke-dashoffset: var(--from);opacity: 0.8;animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1)}40%{stroke-dashoffset: var(--to);opacity: 0.8}40.1%, 100%{stroke-dashoffset: var(--to);opacity: 0}}@keyframes ui-ob-wrap{0%, 23.2%{stroke-dashoffset: var(--from);opacity: 0}23.3%{stroke-dashoffset: var(--from);opacity: 0.45;animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1)}61.8%{stroke-dashoffset: var(--to);opacity: 0.45}61.9%, 100%{stroke-dashoffset: var(--to);opacity: 0}}@media (prefers-reduced-motion: reduce){.ui-ob-flow, .ui-ob-wrap{animation: none;opacity: 0}}:where(.dark, [data-theme="dark"]) .ui-ob-lines{stroke: rgba(255, 255, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-ob-tile{fill: #232326;stroke: rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-ob-drop{flood-opacity: 0.4}:where(.dark, [data-theme="dark"]) .ui-ob-sliver{flood-color: #1a1a1c}:where(.dark, [data-theme="dark"]) .ui-ob-gray{stop-color: #3a3a3f}:where(.dark, [data-theme="dark"]) .ui-ob-notion-page{fill: #191919}:where(.dark, [data-theme="dark"]) .ui-ob-mark{fill: #ededed}`;
var HComponent = ({
  x,
  y,
  size
}) => /* @__PURE__ */ jsxs("svg", { x, y, width: size, height: size, viewBox: `0 0 70.808 74.12`, overflow: `visible`, children: [
  /* @__PURE__ */ jsx("path", { className: `ui-ob-notion-page`, fill: `#ffffff`, d: `M4.49207 3.25638L45.393 0.182895C50.3579 -0.289949 51.6582 0.0646841 54.8499 2.31069L67.9713 11.5311C70.0991 13.0679 70.8084 13.5407 70.8084 15.3139V65.7899C70.8084 68.9816 69.6263 70.873 65.6071 71.1094L18.0863 73.9465C15.0128 74.0647 13.5943 73.7101 12.0576 71.7005L2.48248 59.2883C0.709318 56.9241 5.27941e-05 55.2692 5.27941e-05 53.2596V8.33945C5.27941e-05 5.73881 1.18216 3.4928 4.49207 3.25638Z` }),
  /* @__PURE__ */ jsx("path", { className: `ui-ob-mark`, fill: `#171717`, fillRule: `evenodd`, clipRule: `evenodd`, d: `M45.393 0.182995L4.49201 3.25648C1.18211 3.4929 0 5.73891 0 8.33954V53.2597C0 55.2693 0.709265 57.0424 2.48243 59.2884L12.0575 71.8188C13.5942 73.8284 15.131 74.3012 18.0863 74.0648L65.607 71.2277C69.6262 70.9913 70.8083 69.0999 70.8083 65.9082V15.314C70.8083 13.659 70.2173 13.1862 68.2077 11.7677C68.0895 11.6494 67.9712 11.6494 67.853 11.5312L54.8498 2.429C51.7764 0.0647844 50.476 -0.171637 45.393 0.182995ZM19.1502 14.4865C15.2492 14.7229 14.4217 14.8411 12.1757 12.9498L6.61981 8.57597C6.02875 7.98491 6.26518 7.27565 7.80192 7.15744L47.1661 4.32038C50.476 4.08395 52.131 5.14785 53.4313 6.21175L60.1693 11.0584C60.524 11.1766 61.2332 12.0041 60.2875 12.0041L19.623 14.4865H19.1502ZM14.6581 65.4354V22.5248C14.6581 20.6335 15.2492 19.806 16.9042 19.6878L63.5974 16.9689C65.1342 16.8507 65.8435 17.7964 65.8435 19.6878V62.2437C65.8435 64.1351 65.4888 65.6718 63.0064 65.79L18.3227 68.3907C15.8403 68.6271 14.6581 67.6814 14.6581 65.4354ZM58.7508 24.8891C58.9872 26.1894 58.7508 27.4897 57.4505 27.6079L55.3227 28.0808V59.7613C53.4313 60.8252 51.7764 61.298 50.3578 61.298C48.1118 61.298 47.5208 60.5887 45.7476 58.461L31.5623 36.2373V57.6335L36.0543 58.6974C36.0543 58.6974 36.0543 61.298 32.508 61.298L22.5783 61.8891C22.3419 61.298 22.5783 59.8795 23.524 59.6431L26.1246 58.9338V30.5632L22.5783 30.2086C22.3419 28.9082 23.0511 27.0169 25.0607 26.8987L35.6997 26.1894L50.3578 48.6494V28.79L46.5751 28.3172C46.3387 26.7804 47.4026 25.5983 48.8211 25.4801L58.7508 24.8891Z` })
] });
function GComponent() {
  return /* @__PURE__ */ jsx("div", { className: `outreach-branches-demo`, children: /* @__PURE__ */ jsx(UComponent, {}) });
}

export {
  GComponent
};
