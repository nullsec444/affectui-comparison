import {
  IComponent
} from "./chunk-YFUYMYMJ.js";
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

// reconstructed/demo-Da5-XF-c.jsx
init_react_BkAXpnfr();
var r = n();
var i = n2();
var a = {
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 1.75,
  strokeLinecap: `round`,
  strokeLinejoin: `round`
};
var OComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, ...a, children: [
  /* @__PURE__ */ jsx("path", { d: `M12 5.5V19` }),
  /* @__PURE__ */ jsx("path", { d: `M18 11s-4.42-6-6-6-6 6-6 6` })
] });
var SComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, ...a, children: [
  /* @__PURE__ */ jsx("path", { d: `M18.5 12H5` }),
  /* @__PURE__ */ jsx("path", { d: `M13 18s6-4.42 6-6-6-6-6-6` })
] });
var CComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, ...a, children: /* @__PURE__ */ jsx("path", { d: `M12 4v16M20 12H4` }) });
var LComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, ...a, strokeWidth: 2.5, children: /* @__PURE__ */ jsx("path", { d: `M6 12h.01M12 12h.01M18 12h.01` }) });
var UComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, ...a, children: [
  /* @__PURE__ */ jsx("path", { d: `M7.5 14.5c0-3.3 0-4.95 1.03-5.97C9.55 7.5 11.2 7.5 14.5 7.5s4.95 0 5.97 1.03c1.03 1.02 1.03 2.67 1.03 5.97s0 4.95-1.03 5.97c-1.02 1.03-2.67 1.03-5.97 1.03s-4.95 0-5.97-1.03C7.5 19.45 7.5 17.8 7.5 14.5Z` }),
  /* @__PURE__ */ jsx("path", { d: `M7.5 16.5c-1.4 0-2.1 0-2.66-.2a3 3 0 0 1-2.14-2.14c-.2-.57-.2-1.27-.2-2.66v-2c0-3.3 0-4.95 1.03-5.97C4.55 2.5 6.2 2.5 9.5 2.5h2c1.4 0 2.1 0 2.66.2a3 3 0 0 1 2.14 2.14c.2.57.2 1.27.2 2.66` })
] });
var DComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, ...a, children: [
  /* @__PURE__ */ jsx("path", { d: `M16.5 7.5S13.19 3 12 3 7.5 7.5 7.5 7.5M12 4v11` }),
  /* @__PURE__ */ jsx("path", { d: `M3 16.5v1.5A3 3 0 0 0 6 21h12a3 3 0 0 0 3-3v-1.5` })
] });
var FComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, ...a, children: [
  /* @__PURE__ */ jsx("path", { d: `m19.5 5.5-.62 10.03c-.16 2.56-.24 3.84-.88 4.76a4 4 0 0 1-1.2 1.13C15.84 22 14.56 22 12 22s-3.86 0-4.82-.59a4 4 0 0 1-1.2-1.13c-.64-.92-.72-2.2-.88-4.76L4.5 5.5` }),
  /* @__PURE__ */ jsx("path", { d: `M3 5.5h18M16.06 5.5l-.69-1.41c-.45-.94-.68-1.4-1.07-1.7a2 2 0 0 0-.27-.17C13.6 2 13.07 2 12.03 2c-1.06 0-1.6 0-2.04.23a2 2 0 0 0-.27.18c-.4.3-.62.79-1.06 1.76L8.05 5.5M9.5 16.5v-6M14.5 16.5v-6` })
] });
var PComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, ...a, children: /* @__PURE__ */ jsx("path", { d: `M5 14l3.5 3.5L19 6.5` }) });
function useM(e = 1600) {
  let [t, setT] = r.useState(false);
  let iRef = r.useRef(void 0);
  r.useEffect(() => () => clearTimeout(iRef.current), []);
  return [t, () => {
    clearTimeout(iRef.current);
    setT(true);
    iRef.current = window.setTimeout(() => setT(false), e);
  }];
}
function HComponent({
  children
}) {
  let tRef = r.useRef(null);
  let [n3, setN] = r.useState(0);
  r.useLayoutEffect(() => {
    let e = tRef.current?.firstElementChild;
    if (!e) {
      return;
    }
    let width = e.getBoundingClientRect().width;
    if (width > n3) {
      setN(width);
    }
  });
  return /* @__PURE__ */ jsx("span", { ref: tRef, className: `button-demo__slot`, style: {
    minWidth: n3 || void 0
  }, children });
}
function GComponent() {
  let [e, setE] = r.useState(`idle`);
  r.useEffect(() => {
    if (e !== `loading`) {
      return;
    }
    let n3 = window.setTimeout(() => setE(`done`), 1600);
    return () => clearTimeout(n3);
  }, [e]);
  return /* @__PURE__ */ jsxs("div", { className: `button-demo__row button-demo__compact`, children: [
    /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `ghost`, onClick: () => setE(`idle`), children: `Cancel` }) }),
    /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `secondary`, icon: e === `done` ? /* @__PURE__ */ jsx(PComponent, {}) : /* @__PURE__ */ jsx(DComponent, {}), loading: e === `loading`, onClick: () => setE((e2) => {
      if (e2 === `idle`) {
        return `loading`;
      }
      return e2;
    }), children: e === `done` ? `Done` : `Upload` }) }),
    /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { iconRight: /* @__PURE__ */ jsx(OComponent, {}), children: `Send` }) })
  ] });
}
function Component() {
  let [e, t] = useM();
  let [a2, o] = useM();
  let [g, setG] = r.useState(`idle`);
  r.useEffect(() => {
    if (g !== `loading`) {
      return;
    }
    let e2 = window.setTimeout(() => setG(`done`), 1800);
    return () => clearTimeout(e2);
  }, [g]);
  return /* @__PURE__ */ jsxs("div", { className: `button-demo__showcase`, children: [
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h4", { children: `Styles` }),
      /* @__PURE__ */ jsxs("div", { className: `button-demo__row`, children: [
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { children: `Save changes` }) }),
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `secondary`, children: `Secondary` }) }),
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `ghost`, children: `Ghost` }) }),
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `destructive`, icon: /* @__PURE__ */ jsx(FComponent, {}), children: `Delete` }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h4", { children: `Icons and sizes` }),
      /* @__PURE__ */ jsxs("div", { className: `button-demo__row`, children: [
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `secondary`, size: `sm`, icon: /* @__PURE__ */ jsx(CComponent, {}), children: `Add item` }) }),
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { iconRight: /* @__PURE__ */ jsx(SComponent, {}), children: `Continue` }) }),
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `ghost`, icon: /* @__PURE__ */ jsx(LComponent, {}), "aria-label": `More options` }) }),
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `secondary`, size: `lg`, children: `Large` }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h4", { children: `Feedback and states` }),
      /* @__PURE__ */ jsxs("div", { className: `button-demo__row`, children: [
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `secondary`, icon: e ? /* @__PURE__ */ jsx(PComponent, {}) : /* @__PURE__ */ jsx(UComponent, {}), onClick: t, children: e ? `Copied` : `Copy link` }) }),
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `secondary`, icon: a2 ? /* @__PURE__ */ jsx(PComponent, {}) : /* @__PURE__ */ jsx(UComponent, {}), "aria-label": a2 ? `Copied` : `Copy`, onClick: o }) }),
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `secondary`, icon: g === `done` ? /* @__PURE__ */ jsx(PComponent, {}) : /* @__PURE__ */ jsx(DComponent, {}), loading: g === `loading`, onClick: () => setG((e2) => {
          if (e2 === `loading`) {
            return e2;
          }
          return `loading`;
        }), children: `Upload file` }) }),
        /* @__PURE__ */ jsx(HComponent, { children: /* @__PURE__ */ jsx(IComponent, { variant: `secondary`, disabled: true, children: `Disabled` }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: `button-demo__status`, "aria-live": `polite`, children: g === `loading` ? `Uploading\u2026` : g === `done` ? `Upload complete` : ` ` })
    ] })
  ] });
}
function VComponent() {
  return /* @__PURE__ */ jsxs("div", { className: `button-demo`, children: [
    /* @__PURE__ */ jsx(GComponent, {}),
    /* @__PURE__ */ jsx(Component, {})
  ] });
}
export {
  VComponent as default
};
