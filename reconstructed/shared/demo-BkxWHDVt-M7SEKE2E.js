import {
  IComponent
} from "./chunk-IUQR2T6R.js";
import "./chunk-BEJH6NDY.js";
import {
  jsx,
  n
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/demo-BkxWHDVt.jsx
var n2 = n();
var groups = [{
  id: `stage`,
  label: `Stage`,
  options: [{
    id: `new`,
    label: `New lead`
  }, {
    id: `qualified`,
    label: `Qualified`
  }, {
    id: `proposal`,
    label: `Proposal sent`
  }, {
    id: `negotiation`,
    label: `Negotiation`
  }]
}, {
  id: `value`,
  label: `Deal size`,
  chipPrefix: `Deal: `,
  options: [{
    id: `s`,
    label: `Under $5k`
  }, {
    id: `m`,
    label: `$5k\u201320k`
  }, {
    id: `l`,
    label: `$20k\u201350k`
  }, {
    id: `xl`,
    label: `Over $50k`
  }]
}, {
  id: `region`,
  label: `Region`,
  options: [{
    id: `dach`,
    label: `DACH`
  }, {
    id: `nordics`,
    label: `Nordics`
  }, {
    id: `uk`,
    label: `UK & Ireland`
  }, {
    id: `na`,
    label: `North America`
  }, {
    id: `apac`,
    label: `APAC`
  }]
}];
function IComponent2() {
  return /* @__PURE__ */ jsx("div", { className: `filter-menu-demo`, children: /* @__PURE__ */ jsx(IComponent, { groups, defaultValue: {
    stage: [`qualified`],
    value: [`m`],
    region: [`dach`]
  } }) });
}
export {
  IComponent2 as default
};
