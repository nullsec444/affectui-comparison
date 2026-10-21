// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./rolldown-runtime-BpQH8Ho1.jsx";
const t = t_1(e => {
  var $$typeof = Symbol.for(`react.transitional.element`);
  var n = Symbol.for(`react.fragment`);
  function r(type, n, props) {
    let i = null;
    if (props !== undefined) {
      i = `` + props;
    }
    if (n.key !== undefined) {
      i = `` + n.key;
    }
    if (`key` in n) {
      props = {};
      for (const a in n) {
        if (a !== `key`) {
          props[a] = n[a];
        }
      }
    } else {
      props = n;
    }
    n = props.ref;
    return {
      $$typeof,
      type,
      key: i,
      ref: n === undefined ? null : n,
      props
    };
  }
  e.Fragment = n;
  e.jsx = r;
  e.jsxs = r;
});
const n = t_1((e, n) => {
  n.exports = t();
});
export { n as t };
