import {
  AComponent
} from "./chunk-RQ6MJ3TR.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-DtfhNS6P.jsx
init_react_BkAXpnfr();
var r = n();
var i = n2();
var a = [`M`, `J`, `S`, `A`];
function OComponent() {
  let [e, setE] = r.useState(`pending`);
  let [o, setO] = r.useState(false);
  let [c, setC] = r.useState(false);
  let uRef = r.useRef(null);
  r.useEffect(() => {
    if (o) {
      return;
    }
    let n3 = [];
    if (e === `pending`) {
      if (c) {
        return;
      }
      let e2 = () => uRef.current?.querySelector(`.ui-ap__approve`);
      n3.push(window.setTimeout(() => e2()?.setAttribute(`data-pressed`, ``), 2800));
      n3.push(window.setTimeout(() => {
        e2()?.removeAttribute(`data-pressed`);
        e2()?.click();
      }, 3e3));
    } else {
      n3.push(window.setTimeout(() => setE(`pending`), 3200));
    }
    return () => {
      n3.forEach(clearTimeout);
      uRef.current?.querySelector(`.ui-ap__approve`)?.removeAttribute(`data-pressed`);
    };
  }, [e, o, c]);
  let d = () => setO(true);
  return /* @__PURE__ */ jsx("div", { className: `ap-demo`, children: /* @__PURE__ */ jsxs("div", { ref: uRef, className: `ap-demo__chat`, onPointerDown: d, onKeyDown: d, onPointerEnter: () => setC(true), onPointerLeave: () => setC(false), children: [
    /* @__PURE__ */ jsxs("div", { className: `ap-demo__agent`, children: [
      /* @__PURE__ */ jsx("span", { className: `ap-demo__bot`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, children: /* @__PURE__ */ jsx("path", { d: `M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.5l-1.9-5.7-5.6-1.9L10.1 9 12 3.5Z` }) }) }),
      /* @__PURE__ */ jsx("p", { className: `ap-demo__msg`, children: `I drafted the October newsletter. Ready to send?` })
    ] }),
    /* @__PURE__ */ jsx(AComponent, { title: `Send campaign email`, description: `October product update \xB7 Newsletter`, risk: `medium`, icon: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, children: [
      /* @__PURE__ */ jsx("path", { d: `M4 6.5h16v11H4z` }),
      /* @__PURE__ */ jsx("path", { d: `m4.5 7 7.5 6 7.5-6` })
    ] }), status: e, onApprove: () => new Promise((resolve) => window.setTimeout(resolve, 700)).then(() => setE(`approved`)), onDeny: () => setE(`denied`), details: [{
      label: `Subject`,
      value: `What's new in October`
    }, {
      label: `Send`,
      value: `Today, 9:00 AM`
    }], children: /* @__PURE__ */ jsxs("div", { className: `ap-demo__people`, children: [
      /* @__PURE__ */ jsx("span", { className: `ap-demo__avatars`, "aria-hidden": `true`, children: a.map((e2, t) => /* @__PURE__ */ jsx("span", { className: `ap-demo__avatar`, "data-i": t, children: e2 }, e2)) }),
      /* @__PURE__ */ jsxs("span", { className: `ap-demo__to`, children: [
        /* @__PURE__ */ jsx("span", { className: `ap-demo__names`, children: `Mia, Jonas, Sara, Alex` }),
        /* @__PURE__ */ jsx("span", { className: `ap-demo__more`, children: `+38 more` })
      ] })
    ] }) }),
    o && e !== `pending` && /* @__PURE__ */ jsx("button", { type: `button`, className: `ap-demo__replay`, onClick: () => setE(`pending`), children: `Replay` })
  ] }) });
}

export {
  OComponent
};
