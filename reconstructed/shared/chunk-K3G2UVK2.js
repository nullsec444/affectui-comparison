import {
  IComponent
} from "./chunk-56YB423F.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-Cb1j7tKz.jsx
init_react_BkAXpnfr();
var r = n();
var i = n2();
var groups = [{
  id: `workspace`,
  title: `Set up your workspace`,
  tasks: [{
    id: `name`,
    label: `Choose a workspace name`
  }, {
    id: `invite`,
    label: `Invite your teammates to collaborate`
  }, {
    id: `calendar`,
    label: `Connect your calendar`
  }]
}, {
  id: `billing`,
  title: `Set up billing`,
  tasks: [{
    id: `card`,
    label: `Add a payment method`
  }, {
    id: `plan`,
    label: `Choose a plan`
  }]
}, {
  id: `verify`,
  title: `Verify your account`,
  tasks: [{
    id: `email`,
    label: `Confirm your email address`,
    done: true
  }]
}];
function OComponent() {
  let [key, setKey] = r.useState(0);
  return /* @__PURE__ */ jsx("div", { className: `setup-demo`, children: /* @__PURE__ */ jsx(IComponent, { groups, onEdit: () => {
  }, onClose: () => setKey((e) => e + 1) }, key) });
}

export {
  OComponent
};
