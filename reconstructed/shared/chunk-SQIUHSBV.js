import {
  DComponent,
  SComponent
} from "./chunk-KCKKNLM6.js";
import {
  jsx,
  n
} from "./chunk-57INBORX.js";

// reconstructed/demo-BXlx9pcF.jsx
var r = n();
var i = {
  Backlog: `#a3a3a3`,
  Todo: `#8f8f8f`,
  "In progress": `#7aa2ff`,
  "In review": `#8b5cf6`,
  Done: `#2f6bff`,
  Canceled: `#c4c4c4`
};
var dimensions = [{
  key: `status`,
  label: `Status`,
  values: [`Backlog`, `Todo`, `In progress`, `In review`, `Done`, `Canceled`],
  icons: {
    Backlog: /* @__PURE__ */ jsx(DComponent, { kind: `backlog`, color: i.Backlog }),
    Todo: /* @__PURE__ */ jsx(DComponent, { kind: `todo`, color: i.Todo }),
    "In progress": /* @__PURE__ */ jsx(DComponent, { kind: `progress`, color: i[`In progress`] }),
    "In review": /* @__PURE__ */ jsx(DComponent, { kind: `review`, color: i[`In review`] }),
    Done: /* @__PURE__ */ jsx(DComponent, { kind: `done`, color: i.Done }),
    Canceled: /* @__PURE__ */ jsx(DComponent, { kind: `canceled`, color: i.Canceled })
  }
}, {
  key: `priority`,
  label: `Priority`,
  values: [`Urgent`, `High`, `Medium`, `Low`, `None`],
  colors: {
    Urgent: `#ec4899`,
    High: `#8b5cf6`,
    Medium: `#2f6bff`,
    Low: `#a9c1ff`,
    None: `#dedede`
  }
}, {
  key: `team`,
  label: `Team`,
  values: [`Design`, `Web`, `Mobile`, `Platform`],
  colors: {
    Design: `#ec4899`,
    Web: `#2f6bff`,
    Mobile: `#8b5cf6`,
    Platform: `#a9c1ff`
  }
}, {
  key: `type`,
  label: `Type`,
  values: [`Feature`, `Bug`, `Chore`],
  colors: {
    Feature: `#2f6bff`,
    Bug: `#ec4899`,
    Chore: `#d4d4d4`
  }
}];
var measures = [{
  key: `count`,
  label: `Task count`,
  unit: `tasks`
}, {
  key: `points`,
  label: `Story points`,
  unit: `points`,
  field: `points`
}];
var records = (() => {
  let e = 7;
  let t = () => ((e = e * 16807 % 2147483647) - 1) / 2147483646;
  let n2 = (e2, n3) => {
    let r2 = t() * n3.reduce((acc, item) => acc + item, 0);
    for (let t2 = 0; t2 < e2.length; t2++) {
      if ((r2 -= n3[t2]) < 0) {
        return e2[t2];
      }
    }
    return e2[e2.length - 1];
  };
  return Array.from({
    length: 212
  }, () => ({
    status: n2(dimensions[0].values, [16, 30, 22, 12, 48, 6]),
    priority: n2(dimensions[1].values, [6, 18, 34, 22, 20]),
    team: n2(dimensions[2].values, [18, 34, 22, 26]),
    type: n2(dimensions[3].values, [52, 30, 18]),
    points: n2([1, 2, 3, 5, 8], [18, 30, 26, 18, 8])
  }));
})();
function CComponent() {
  return /* @__PURE__ */ jsx("div", { className: `breakdown-demo`, children: /* @__PURE__ */ jsx(SComponent, { title: `Sprint 24`, records, dimensions, measures }) });
}

export {
  CComponent
};
