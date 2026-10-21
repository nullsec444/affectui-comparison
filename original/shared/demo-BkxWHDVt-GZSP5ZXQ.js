import {
  i
} from "./chunk-WFGXI776.js";
import "./chunk-C7RUFYJH.js";
import {
  n
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-BkxWHDVt.js
var n2 = n();
var r = [{ id: `stage`, label: `Stage`, options: [{ id: `new`, label: `New lead` }, { id: `qualified`, label: `Qualified` }, { id: `proposal`, label: `Proposal sent` }, { id: `negotiation`, label: `Negotiation` }] }, { id: `value`, label: `Deal size`, chipPrefix: `Deal: `, options: [{ id: `s`, label: `Under $5k` }, { id: `m`, label: `$5k\u201320k` }, { id: `l`, label: `$20k\u201350k` }, { id: `xl`, label: `Over $50k` }] }, { id: `region`, label: `Region`, options: [{ id: `dach`, label: `DACH` }, { id: `nordics`, label: `Nordics` }, { id: `uk`, label: `UK & Ireland` }, { id: `na`, label: `North America` }, { id: `apac`, label: `APAC` }] }];
function i2() {
  return (0, n2.jsx)(`div`, { className: `filter-menu-demo`, children: (0, n2.jsx)(i, { groups: r, defaultValue: { stage: [`qualified`], value: [`m`], region: [`dach`] } }) });
}
export {
  i2 as default
};
