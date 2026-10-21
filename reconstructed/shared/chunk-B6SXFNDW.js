import {
  CComponent,
  _,
  g,
  v,
  y
} from "./chunk-U3CESDQR.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-DGaVy3XD.jsx
init_react_BkAXpnfr();
var s = n();
var c = n2();
var LComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 38 57`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z`, fill: `#1ABCFE` }),
  /* @__PURE__ */ jsx("path", { d: `M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z`, fill: `#0ACF83` }),
  /* @__PURE__ */ jsx("path", { d: `M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z`, fill: `#FF7262` }),
  /* @__PURE__ */ jsx("path", { d: `M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z`, fill: `#F24E1E` }),
  /* @__PURE__ */ jsx("path", { d: `M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z`, fill: `#A259FF` })
] });
var UComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#5E6AD2`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z` }) });
var DComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#171717`, className: `data-table-demo__mono`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M24 22.525H0l12-21.05 12 21.05z` }) });
var FComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#171717`, className: `data-table-demo__mono`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z` }) });
var PComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#625DF5`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M24 10.665h-7.018l6.078-3.509-1.335-2.312-6.078 3.509 3.508-6.077L16.843.94l-3.508 6.077V0h-2.67v7.018L7.156.94 4.844 2.275l3.509 6.077-6.078-3.508L.94 7.156l6.078 3.509H0v2.67h7.017L.94 16.844l1.335 2.313 6.077-3.508-3.509 6.077 2.312 1.335 3.509-6.078V24h2.67v-7.017l3.508 6.077 2.312-1.335-3.509-6.078 6.078 3.509 1.335-2.313-6.077-3.508h7.017v-2.67H24zm-12 4.966a3.645 3.645 0 1 1 0-7.29 3.645 3.645 0 0 1 0 7.29z` }) });
var MComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 20 20`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { x: `2`, y: `2`, width: `16`, height: `16`, rx: `4.5`, fill: `#2f6bff` }),
  /* @__PURE__ */ jsx("path", { d: `M6 7.5h8M6 10h8M6 12.5h5`, stroke: `#fff`, strokeWidth: `1.4`, strokeLinecap: `round` })
] });
var columns = [{
  key: `tool`,
  label: `Tool`,
  icon: /* @__PURE__ */ jsx(g, {}),
  type: `title`,
  width: `30%`
}, {
  key: `category`,
  label: `Category`,
  icon: /* @__PURE__ */ jsx(_, {}),
  type: `tag`,
  width: `26%`
}, {
  key: `website`,
  label: `Website`,
  icon: /* @__PURE__ */ jsx(v, {}),
  type: `link`
}, {
  key: `renews`,
  label: `Renews`,
  icon: /* @__PURE__ */ jsx(y, {}),
  type: `text`,
  width: `18%`
}];
var rows = [{
  id: `figma`,
  tool: `Figma`,
  logo: /* @__PURE__ */ jsx(LComponent, {}),
  category: `Design`,
  website: `https://figma.com`,
  renews: `Mar 12, 2026`
}, {
  id: `linear`,
  tool: `Linear`,
  logo: /* @__PURE__ */ jsx(UComponent, {}),
  category: `Issue tracking`,
  website: `https://linear.app`,
  renews: `Jan 4, 2026`
}, {
  id: `vercel`,
  tool: `Vercel`,
  logo: /* @__PURE__ */ jsx(DComponent, {}),
  category: `Hosting`,
  website: `https://vercel.com`,
  renews: `Aug 21, 2026`
}, {
  id: `framer`,
  tool: `Framer`,
  logo: /* @__PURE__ */ jsx(FComponent, {}),
  category: `Website`,
  website: `https://framer.com`,
  renews: `May 2, 2026`
}, {
  id: `loom`,
  tool: `Loom`,
  logo: /* @__PURE__ */ jsx(PComponent, {}),
  category: `Video`,
  website: `https://loom.com`,
  renews: `Nov 18, 2026`
}];
var _2 = {
  width: 720,
  height: 352
};
function VComponent() {
  let eRef = s.useRef(null);
  let [t, setT] = s.useState(null);
  s.useLayoutEffect(() => {
    let t2 = eRef.current?.closest(`.card__preview`);
    if (!t2) {
      return;
    }
    let r = () => setT(Math.min((t2.clientWidth - 48) / _2.width, (t2.clientHeight - 80) / _2.height));
    r();
    let i = new ResizeObserver(r);
    i.observe(t2);
    return () => i.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `data-table-demo`, style: t === null ? void 0 : {
    "--fit": t
  }, children: /* @__PURE__ */ jsx(CComponent, { title: `Design Stack`, icon: /* @__PURE__ */ jsx(MComponent, {}), columns, rows, tagTones: {
    Design: `violet`,
    "Issue tracking": `blue`,
    Hosting: `gray`,
    Website: `pink`,
    Video: `green`
  } }) });
}

export {
  VComponent
};
