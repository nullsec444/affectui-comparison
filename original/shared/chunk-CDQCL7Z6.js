import {
  m
} from "./chunk-EUJYVE6L.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-izlk0-DS.js
init_react_BkAXpnfr();
var r = n();
var i = n2();
var a = [{ id: `month`, label: `This month` }, { id: `last`, label: `Last month` }, { id: `7d`, label: `7 days` }];
var o = new Intl.DateTimeFormat(`en-US`, { month: `short`, day: `numeric` });
var s = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function c(e, t, n3, r2, i2 = t) {
  let a2 = r2, c2 = () => ((a2 = a2 * 16807 % 2147483647) - 1) / 2147483646, l2 = Array.from({ length: t }, (n4, r3) => {
    let i3 = s(e, r3).getDay();
    return (i3 === 0 || i3 === 6 ? 0.45 : 1) * (0.7 + c2() * 0.6) * (1 + r3 / t / 3);
  }), u2 = l2.reduce((e2, t2) => e2 + t2, 0), d = l2.map((e2) => Math.round(e2 / u2 * n3));
  return d[d.length - 1] += n3 - d.reduce((e2, t2) => e2 + t2, 0), Array.from({ length: i2 }, (n4, r3) => ({ label: o.format(s(e, r3)), value: r3 < t ? d[r3] : null }));
}
var l = { month: { used: [{ label: `Chat`, value: 3980 }, { label: `Search`, value: 1640 }, { label: `Image`, value: 1120 }, { label: `API`, value: 680 }], limits: [{ label: `Seats`, used: 8, total: 10 }, { label: `Storage`, used: 3.2, total: 5, unit: `GB` }, { label: `Projects`, used: 12, total: null }], days: (e) => c(s(e, -21), 22, 7420, 11, 30) }, last: { used: [{ label: `Chat`, value: 5210 }, { label: `Search`, value: 2140 }, { label: `Image`, value: 1690 }, { label: `API`, value: 960 }], limits: [{ label: `Seats`, used: 10, total: 10 }, { label: `Storage`, used: 2.9, total: 5, unit: `GB` }, { label: `Projects`, used: 11, total: null }], days: (e) => c(s(e, -51), 30, 1e4, 29) }, "7d": { used: [{ label: `Chat`, value: 1260 }, { label: `Search`, value: 540 }, { label: `API`, value: 340 }], limits: [{ label: `Seats`, used: 8, total: 10 }, { label: `Storage`, used: 3.2, total: 5, unit: `GB` }, { label: `Projects`, used: 12, total: null }], days: (e) => c(s(e, -6), 7, 2140, 5) } };
function u() {
  let [e, t] = (0, r.useState)(`month`), o2 = (0, r.useRef)(false), c2 = (0, r.useMemo)(() => {
    let e2 = /* @__PURE__ */ new Date();
    return new Date(e2.getFullYear(), e2.getMonth(), e2.getDate());
  }, []), u2 = (0, r.useMemo)(() => l[e].days(c2), [e, c2]);
  return (0, r.useEffect)(() => {
    let e2 = [`last`, `7d`, `month`].map((e3, n3) => window.setTimeout(() => !o2.current && t(e3), 3600 + n3 * 3200));
    return () => e2.forEach(clearTimeout);
  }, []), (0, i.jsx)(`div`, { className: `usage-demo`, onPointerDown: () => o2.current = true, onKeyDown: () => o2.current = true, children: (0, i.jsx)(m, { title: `Acme AI`, plan: `Pro plan`, total: 1e4, used: l[e].used, limits: l[e].limits, daily: u2, periods: a, period: e, onPeriodChange: t, resetAt: s(c2, 9), onUpgrade: () => {
  } }) });
}

export {
  u
};
