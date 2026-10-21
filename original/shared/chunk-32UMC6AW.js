import {
  u
} from "./chunk-7JKEIRZB.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-Y9Qip8LJ.js
init_react_BkAXpnfr();
var r = n();
var i = n2();
var a = `Hi everyone, we are very excited to announce that the new dashboard is now available for all users. It loads a lot faster than before, and you can now export any report to CSV with just a single click. Let us know what you think!`;
var o = `Hi everyone, the new dashboard is now live for all users. It loads twice as fast, and you can now export any report to CSV in one click. Let us know what you think!`;
var s = [`accept`, `reject`, `accept`, `accept`];
var c = 1200;
var l = 450;
var u2 = 2800;
function d() {
  let e = (0, r.useRef)(null), [t, d2] = (0, r.useState)(true);
  (0, r.useEffect)(() => {
    if (!t) return;
    let n3 = [], r2 = 900, i2 = (e2, t2) => n3.push(window.setTimeout(t2, e2)), a2 = () => {
      s.forEach((t2, n4) => {
        i2(r2, () => e.current?.highlight(n4)), r2 += c, i2(r2, () => t2 === `accept` ? e.current?.accept(n4) : e.current?.reject(n4)), r2 += l;
      }), r2 += u2, i2(r2, () => e.current?.reset()), r2 += 900, i2(r2, () => {
        r2 = 0, n3.length = 0, a2();
      });
    };
    return a2(), () => n3.forEach((e2) => window.clearTimeout(e2));
  }, [t]);
  let f = () => {
    t && (d2(false), e.current?.highlight(null));
  };
  return (0, i.jsx)(`div`, { className: `df-demo`, onPointerDown: f, onKeyDown: f, onFocus: f, onPointerOver: (e2) => {
    e2.target.closest?.(`.ui-df__chg, .ui-df__pop, button`) && f();
  }, children: (0, i.jsx)(u, { ref: e, label: `Suggested by AI \xB7 Make it shorter`, original: a, suggested: o }) });
}

export {
  d
};
