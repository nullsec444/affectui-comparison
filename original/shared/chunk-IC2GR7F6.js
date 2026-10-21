import {
  a
} from "./chunk-ZAMYQ4EA.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-DtfhNS6P.js
init_react_BkAXpnfr();
var r = n();
var i = n2();
var a2 = [`M`, `J`, `S`, `A`];
function o() {
  let [e, t] = (0, r.useState)(`pending`), [o2, s] = (0, r.useState)(false), [c, l] = (0, r.useState)(false), u = (0, r.useRef)(null);
  (0, r.useEffect)(() => {
    if (o2) return;
    let n3 = [];
    if (e === `pending`) {
      if (c) return;
      let e2 = () => u.current?.querySelector(`.ui-ap__approve`);
      n3.push(window.setTimeout(() => e2()?.setAttribute(`data-pressed`, ``), 2800)), n3.push(window.setTimeout(() => {
        e2()?.removeAttribute(`data-pressed`), e2()?.click();
      }, 3e3));
    } else n3.push(window.setTimeout(() => t(`pending`), 3200));
    return () => {
      n3.forEach(clearTimeout), u.current?.querySelector(`.ui-ap__approve`)?.removeAttribute(`data-pressed`);
    };
  }, [e, o2, c]);
  let d = () => s(true);
  return (0, i.jsx)(`div`, { className: `ap-demo`, children: (0, i.jsxs)(`div`, { ref: u, className: `ap-demo__chat`, onPointerDown: d, onKeyDown: d, onPointerEnter: () => l(true), onPointerLeave: () => l(false), children: [(0, i.jsxs)(`div`, { className: `ap-demo__agent`, children: [(0, i.jsx)(`span`, { className: `ap-demo__bot`, "aria-hidden": `true`, children: (0, i.jsx)(`svg`, { viewBox: `0 0 24 24`, children: (0, i.jsx)(`path`, { d: `M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.5l-1.9-5.7-5.6-1.9L10.1 9 12 3.5Z` }) }) }), (0, i.jsx)(`p`, { className: `ap-demo__msg`, children: `I drafted the October newsletter. Ready to send?` })] }), (0, i.jsx)(a, { title: `Send campaign email`, description: `October product update \xB7 Newsletter`, risk: `medium`, icon: (0, i.jsxs)(`svg`, { viewBox: `0 0 24 24`, children: [(0, i.jsx)(`path`, { d: `M4 6.5h16v11H4z` }), (0, i.jsx)(`path`, { d: `m4.5 7 7.5 6 7.5-6` })] }), status: e, onApprove: () => new Promise((e2) => window.setTimeout(e2, 700)).then(() => t(`approved`)), onDeny: () => t(`denied`), details: [{ label: `Subject`, value: `What's new in October` }, { label: `Send`, value: `Today, 9:00 AM` }], children: (0, i.jsxs)(`div`, { className: `ap-demo__people`, children: [(0, i.jsx)(`span`, { className: `ap-demo__avatars`, "aria-hidden": `true`, children: a2.map((e2, t2) => (0, i.jsx)(`span`, { className: `ap-demo__avatar`, "data-i": t2, children: e2 }, e2)) }), (0, i.jsxs)(`span`, { className: `ap-demo__to`, children: [(0, i.jsx)(`span`, { className: `ap-demo__names`, children: `Mia, Jonas, Sara, Alex` }), (0, i.jsx)(`span`, { className: `ap-demo__more`, children: `+38 more` })] })] }) }), o2 && e !== `pending` && (0, i.jsx)(`button`, { type: `button`, className: `ap-demo__replay`, onClick: () => t(`pending`), children: `Replay` })] }) });
}

export {
  o
};
