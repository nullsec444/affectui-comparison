import {
  init_rolldown_runtime_BpQH8Ho1,
  t
} from "./chunk-JTXQSSYA.js";

// reconstructed/jsx-runtime-CTsRTJUX.jsx
init_rolldown_runtime_BpQH8Ho1();
var t2 = t((e) => {
  var $$typeof = /* @__PURE__ */ Symbol.for(`react.transitional.element`);
  var n2 = /* @__PURE__ */ Symbol.for(`react.fragment`);
  function r(type, n3, props) {
    let i = null;
    if (props !== void 0) {
      i = `` + props;
    }
    if (n3.key !== void 0) {
      i = `` + n3.key;
    }
    if (`key` in n3) {
      props = {};
      for (const a in n3) {
        if (a !== `key`) {
          props[a] = n3[a];
        }
      }
    } else {
      props = n3;
    }
    n3 = props.ref;
    return {
      $$typeof,
      type,
      key: i,
      ref: n3 === void 0 ? null : n3,
      props
    };
  }
  e.Fragment = n2;
  e.jsx = r;
  e.jsxs = r;
});
var n = t((e, n2) => {
  n2.exports = t2();
});

// entries/reconstructed-jsx.js
var { jsx, jsxs, Fragment } = n();

export {
  n,
  jsx,
  jsxs,
  Fragment
};
