import {
  i
} from "./chunk-BGGGYJPT.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-Cb1j7tKz.js
init_react_BkAXpnfr();
var r = n();
var i2 = n2();
var a = [{ id: `workspace`, title: `Set up your workspace`, tasks: [{ id: `name`, label: `Choose a workspace name` }, { id: `invite`, label: `Invite your teammates to collaborate` }, { id: `calendar`, label: `Connect your calendar` }] }, { id: `billing`, title: `Set up billing`, tasks: [{ id: `card`, label: `Add a payment method` }, { id: `plan`, label: `Choose a plan` }] }, { id: `verify`, title: `Verify your account`, tasks: [{ id: `email`, label: `Confirm your email address`, done: true }] }];
function o() {
  let [e, t] = (0, r.useState)(0);
  return (0, i2.jsx)(`div`, { className: `setup-demo`, children: (0, i2.jsx)(i, { groups: a, onEdit: () => {
  }, onClose: () => t((e2) => e2 + 1) }, e) });
}

export {
  o
};
