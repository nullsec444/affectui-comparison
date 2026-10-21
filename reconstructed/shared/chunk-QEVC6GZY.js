import {
  UComponent
} from "./chunk-NVSAAHAD.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-Y9Qip8LJ.jsx
init_react_BkAXpnfr();
var r = n();
var i = n2();
var original = `Hi everyone, we are very excited to announce that the new dashboard is now available for all users. It loads a lot faster than before, and you can now export any report to CSV with just a single click. Let us know what you think!`;
var suggested = `Hi everyone, the new dashboard is now live for all users. It loads twice as fast, and you can now export any report to CSV in one click. Let us know what you think!`;
var s = [`accept`, `reject`, `accept`, `accept`];
var c = 1200;
var l = 450;
var u = 2800;
function DComponent() {
  let eRef = r.useRef(null);
  let [t, setT] = r.useState(true);
  r.useEffect(() => {
    if (!t) {
      return;
    }
    let n3 = [];
    let r2 = 900;
    let i2 = (e, t2) => n3.push(window.setTimeout(t2, e));
    let a = () => {
      s.forEach((t2, n4) => {
        i2(r2, () => eRef.current?.highlight(n4));
        r2 += c;
        i2(r2, () => {
          if (t2 === `accept`) {
            return eRef.current?.accept(n4);
          }
          return eRef.current?.reject(n4);
        });
        r2 += l;
      });
      r2 += u;
      i2(r2, () => eRef.current?.reset());
      r2 += 900;
      i2(r2, () => {
        r2 = 0;
        n3.length = 0;
        a();
      });
    };
    a();
    return () => n3.forEach((e) => window.clearTimeout(e));
  }, [t]);
  let f = () => {
    if (t) {
      setT(false);
      eRef.current?.highlight(null);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: `df-demo`, onPointerDown: f, onKeyDown: f, onFocus: f, onPointerOver: (e) => {
    if (e.target.closest?.(`.ui-df__chg, .ui-df__pop, button`)) {
      f();
    }
  }, children: /* @__PURE__ */ jsx(UComponent, { ref: eRef, label: `Suggested by AI \xB7 Make it shorter`, original, suggested }) });
}

export {
  DComponent
};
