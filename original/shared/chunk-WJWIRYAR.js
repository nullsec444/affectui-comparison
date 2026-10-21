import {
  d
} from "./chunk-ZO7T2RGZ.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-crn6hRBF.js
init_react_BkAXpnfr();
var r = n();
var i = n2();
var a = [{ id: `revenue`, title: `Pull Q3 revenue and ARR`, detail: `Monthly revenue, ARR and net retention`, tool: `stripe.query` }, { id: `launches`, title: `Summarize product launches`, detail: `Shipped projects and adoption`, tool: `linear.search` }, { id: `slides`, title: `Build the KPI slides`, detail: `Six charts in the board template`, tool: `slides.create` }, { id: `memo`, title: `Draft the board memo`, detail: `One page, wins, risks and asks`, tool: `docs.write` }, { id: `email`, title: `Send the draft to Maya for review`, tool: `gmail.draft` }];
var o = { revenue: 1300, launches: 1100, slides: 1400, memo: 1250, email: 900 };
var s = `slides`;
function c() {
  let [e, t] = (0, r.useState)(a), [c2, l] = (0, r.useState)(`draft`), u = (0, r.useRef)(null), d2 = (0, r.useRef)(true), f = (0, r.useRef)([]), p = (0, r.useRef)([]), m = (0, r.useRef)(c2);
  m.current = c2;
  let h = (0, r.useRef)(true), g = (e2, t2, n3) => {
    e2.current.push(window.setTimeout(t2, n3));
  }, _ = (e2) => {
    e2.current.forEach((e3) => window.clearTimeout(e3)), e2.current = [];
  }, v = (e2) => u.current?.querySelector(e2)?.click(), y = (e2, n3) => t((t2) => t2.map((t3) => t3.id === e2 ? { ...t3, ...n3 } : t3)), b = (e2, t2) => {
    if (t2 >= e2.length) {
      l(`done`), d2.current ? g(f, w, 3600) : g(p, C, 3200);
      return;
    }
    let n3 = e2[t2];
    y(n3.id, { status: `active`, error: void 0 });
    let r2 = o[n3.id] ?? 1200;
    g(p, () => {
      if (n3.id === s && h.current) {
        h.current = false, y(n3.id, { status: `failed`, error: `Slides API timed out after 30s` }), d2.current && g(f, () => v(`.ui-pl__retry`), 1700);
        return;
      }
      y(n3.id, { status: `done` }), b(e2, t2 + 1);
    }, r2);
  }, x = (e2) => {
    _(p), h.current = true;
    let n3 = e2.map(({ status: e3, error: t2, duration: n4, ...r2 }) => r2);
    t(n3), l(`running`), g(p, () => b(n3, 0), 350);
  }, S = (e2) => {
    _(p);
    let n3 = [];
    t((t2) => {
      let r2 = t2.findIndex((t3) => t3.id === e2);
      return n3 = t2.map((e3, t3) => t3 >= r2 ? { ...e3, status: `pending`, error: void 0 } : e3), n3;
    }), g(p, () => b(n3, n3.findIndex((t2) => t2.id === e2)), 250);
  }, C = () => {
    t((e2) => e2.map(({ status: e3, error: t2, duration: n3, ...r2 }) => r2)), l(`draft`);
  }, w = () => {
    _(p), t(a), l(`draft`), g(f, () => t((e2) => {
      let t2 = e2.findIndex((e3) => e3.id === `memo`);
      if (t2 < 1) return e2;
      let n3 = e2.slice(), [r2] = n3.splice(t2, 1);
      return n3.splice(t2 - 1, 0, r2), n3;
    }), 1500), g(f, () => v(`.ui-pl__run`), 3e3);
  };
  (0, r.useEffect)(() => (w(), () => {
    _(f), _(p);
  }), []);
  let T = (e2) => {
    e2 && d2.current && (d2.current = false, _(f), m.current === `done` && g(p, C, 1200));
  };
  return (0, i.jsx)(`div`, { ref: u, className: `pl-demo`, onPointerDownCapture: (e2) => T(e2.nativeEvent.isTrusted), onKeyDownCapture: (e2) => T(e2.nativeEvent.isTrusted), children: (0, i.jsx)(d, { title: `Prepare the Q3 board update`, estimate: `~2 min`, steps: e, status: c2, onChange: t, onRun: x, onCancel: () => {
    _(p), t(a), l(`draft`);
  }, onRetry: S }) });
}

export {
  c
};
