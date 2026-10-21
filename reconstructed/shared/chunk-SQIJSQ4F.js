import {
  DComponent
} from "./chunk-57EJWLHW.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-crn6hRBF.jsx
init_react_BkAXpnfr();
var r = n();
var i = n2();
var a = [{
  id: `revenue`,
  title: `Pull Q3 revenue and ARR`,
  detail: `Monthly revenue, ARR and net retention`,
  tool: `stripe.query`
}, {
  id: `launches`,
  title: `Summarize product launches`,
  detail: `Shipped projects and adoption`,
  tool: `linear.search`
}, {
  id: `slides`,
  title: `Build the KPI slides`,
  detail: `Six charts in the board template`,
  tool: `slides.create`
}, {
  id: `memo`,
  title: `Draft the board memo`,
  detail: `One page, wins, risks and asks`,
  tool: `docs.write`
}, {
  id: `email`,
  title: `Send the draft to Maya for review`,
  tool: `gmail.draft`
}];
var o = {
  revenue: 1300,
  launches: 1100,
  slides: 1400,
  memo: 1250,
  email: 900
};
var s = `slides`;
function CComponent() {
  let [steps, setSteps] = r.useState(a);
  let [c, setC] = r.useState(`draft`);
  let uRef = r.useRef(null);
  let dRef = r.useRef(true);
  let fRef = r.useRef([]);
  let pRef = r.useRef([]);
  let mRef = r.useRef(c);
  mRef.current = c;
  let hRef = r.useRef(true);
  let g = (e, t, n3) => {
    e.current.push(window.setTimeout(t, n3));
  };
  let _ = (e) => {
    e.current.forEach((e2) => window.clearTimeout(e2));
    e.current = [];
  };
  let v = (e) => uRef.current?.querySelector(e)?.click();
  let y = (e, n3) => setSteps((t) => t.map((t2) => {
    if (t2.id === e) {
      return {
        ...t2,
        ...n3
      };
    }
    return t2;
  }));
  let b = (e, t) => {
    if (t >= e.length) {
      setC(`done`);
      if (dRef.current) {
        g(fRef, w, 3600);
      } else {
        g(pRef, C, 3200);
      }
      return;
    }
    let n3 = e[t];
    y(n3.id, {
      status: `active`,
      error: void 0
    });
    let r2 = o[n3.id] ?? 1200;
    g(pRef, () => {
      if (n3.id === s && hRef.current) {
        hRef.current = false;
        y(n3.id, {
          status: `failed`,
          error: `Slides API timed out after 30s`
        });
        if (dRef.current) {
          g(fRef, () => v(`.ui-pl__retry`), 1700);
        }
        return;
      }
      y(n3.id, {
        status: `done`
      });
      b(e, t + 1);
    }, r2);
  };
  let onRun = (e) => {
    _(pRef);
    hRef.current = true;
    let n3 = e.map(({
      status,
      error,
      duration,
      ...rest
    }) => rest);
    setSteps(n3);
    setC(`running`);
    g(pRef, () => b(n3, 0), 350);
  };
  let onRetry = (e) => {
    _(pRef);
    let n3 = [];
    setSteps((t) => {
      let r2 = t.findIndex((t2) => t2.id === e);
      n3 = t.map((e2, t2) => {
        if (t2 >= r2) {
          return {
            ...e2,
            status: `pending`,
            error: void 0
          };
        }
        return e2;
      });
      return n3;
    });
    g(pRef, () => b(n3, n3.findIndex((t) => t.id === e)), 250);
  };
  let C = () => {
    setSteps((e) => e.map(({
      status,
      error,
      duration,
      ...rest
    }) => rest));
    setC(`draft`);
  };
  let w = () => {
    _(pRef);
    setSteps(a);
    setC(`draft`);
    g(fRef, () => setSteps((e) => {
      let t = e.findIndex((e2) => e2.id === `memo`);
      if (t < 1) {
        return e;
      }
      let n3 = e.slice();
      let [r2] = n3.splice(t, 1);
      n3.splice(t - 1, 0, r2);
      return n3;
    }), 1500);
    g(fRef, () => v(`.ui-pl__run`), 3e3);
  };
  r.useEffect(() => {
    w();
    return () => {
      _(fRef);
      _(pRef);
    };
  }, []);
  let T = (isTrusted) => {
    if (isTrusted && dRef.current) {
      dRef.current = false;
      _(fRef);
      if (mRef.current === `done`) {
        g(pRef, C, 1200);
      }
    }
  };
  return /* @__PURE__ */ jsx("div", { ref: uRef, className: `pl-demo`, onPointerDownCapture: (e) => T(e.nativeEvent.isTrusted), onKeyDownCapture: (e) => T(e.nativeEvent.isTrusted), children: /* @__PURE__ */ jsx(DComponent, { title: `Prepare the Q3 board update`, estimate: `~2 min`, steps, status: c, onChange: setSteps, onRun, onCancel: () => {
    _(pRef);
    setSteps(a);
    setC(`draft`);
  }, onRetry }) });
}

export {
  CComponent
};
