import {
  MComponent
} from "./chunk-H54JPHMT.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-izlk0-DS.jsx
init_react_BkAXpnfr();
var r = n();
var i = n2();
var periods = [{
  id: `month`,
  label: `This month`
}, {
  id: `last`,
  label: `Last month`
}, {
  id: `7d`,
  label: `7 days`
}];
var o = new Intl.DateTimeFormat(`en-US`, {
  month: `short`,
  day: `numeric`
});
var s = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function c(e, length_1, n3, r2, length = length_1) {
  let a = r2;
  let c2 = () => ((a = a * 16807 % 2147483647) - 1) / 2147483646;
  let l2 = Array.from({
    length: length_1
  }, (n4, r3) => {
    let i2 = s(e, r3).getDay();
    return (i2 === 0 || i2 === 6 ? 0.45 : 1) * (0.7 + c2() * 0.6) * (1 + r3 / length_1 / 3);
  });
  let u = l2.reduce((acc, item) => acc + item, 0);
  let d = l2.map((e2) => Math.round(e2 / u * n3));
  d[d.length - 1] += n3 - d.reduce((acc, item) => acc + item, 0);
  return Array.from({
    length
  }, (n4, r3) => ({
    label: o.format(s(e, r3)),
    value: r3 < length_1 ? d[r3] : null
  }));
}
var l = {
  month: {
    used: [{
      label: `Chat`,
      value: 3980
    }, {
      label: `Search`,
      value: 1640
    }, {
      label: `Image`,
      value: 1120
    }, {
      label: `API`,
      value: 680
    }],
    limits: [{
      label: `Seats`,
      used: 8,
      total: 10
    }, {
      label: `Storage`,
      used: 3.2,
      total: 5,
      unit: `GB`
    }, {
      label: `Projects`,
      used: 12,
      total: null
    }],
    days: (e) => c(s(e, -21), 22, 7420, 11, 30)
  },
  last: {
    used: [{
      label: `Chat`,
      value: 5210
    }, {
      label: `Search`,
      value: 2140
    }, {
      label: `Image`,
      value: 1690
    }, {
      label: `API`,
      value: 960
    }],
    limits: [{
      label: `Seats`,
      used: 10,
      total: 10
    }, {
      label: `Storage`,
      used: 2.9,
      total: 5,
      unit: `GB`
    }, {
      label: `Projects`,
      used: 11,
      total: null
    }],
    days: (e) => c(s(e, -51), 30, 1e4, 29)
  },
  "7d": {
    used: [{
      label: `Chat`,
      value: 1260
    }, {
      label: `Search`,
      value: 540
    }, {
      label: `API`,
      value: 340
    }],
    limits: [{
      label: `Seats`,
      used: 8,
      total: 10
    }, {
      label: `Storage`,
      used: 3.2,
      total: 5,
      unit: `GB`
    }, {
      label: `Projects`,
      used: 12,
      total: null
    }],
    days: (e) => c(s(e, -6), 7, 2140, 5)
  }
};
function UComponent() {
  let [e, setE] = r.useState(`month`);
  let oRef = r.useRef(false);
  let c2 = r.useMemo(() => {
    let e2 = /* @__PURE__ */ new Date();
    return new Date(e2.getFullYear(), e2.getMonth(), e2.getDate());
  }, []);
  let daily = r.useMemo(() => l[e].days(c2), [e, c2]);
  r.useEffect(() => {
    let e2 = [`last`, `7d`, `month`].map((e3, n3) => window.setTimeout(() => !oRef.current && setE(e3), 3600 + n3 * 3200));
    return () => e2.forEach(clearTimeout);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: `usage-demo`, onPointerDown: () => oRef.current = true, onKeyDown: () => oRef.current = true, children: /* @__PURE__ */ jsx(MComponent, { title: `Acme AI`, plan: `Pro plan`, total: 1e4, used: l[e].used, limits: l[e].limits, daily, periods, period: e, onPeriodChange: setE, resetAt: s(c2, 9), onUpgrade: () => {
  } }) });
}

export {
  UComponent
};
