import {
  init_rolldown_runtime_BpQH8Ho1,
  t
} from "./chunk-IV3FP5QI.js";
import {
  __esm
} from "./chunk-CTH3ASD6.js";

// current-assets/react-BkAXpnfr.js
var t2, n;
var init_react_BkAXpnfr = __esm({
  "current-assets/react-BkAXpnfr.js"() {
    init_rolldown_runtime_BpQH8Ho1();
    t2 = t(((e) => {
      var t3 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n2 = /* @__PURE__ */ Symbol.for(`react.portal`), r = /* @__PURE__ */ Symbol.for(`react.fragment`), i = /* @__PURE__ */ Symbol.for(`react.strict_mode`), a = /* @__PURE__ */ Symbol.for(`react.profiler`), o = /* @__PURE__ */ Symbol.for(`react.consumer`), s = /* @__PURE__ */ Symbol.for(`react.context`), c = /* @__PURE__ */ Symbol.for(`react.forward_ref`), l = /* @__PURE__ */ Symbol.for(`react.suspense`), u = /* @__PURE__ */ Symbol.for(`react.memo`), d = /* @__PURE__ */ Symbol.for(`react.lazy`), f = /* @__PURE__ */ Symbol.for(`react.activity`), p = /* @__PURE__ */ Symbol.for(`react.view_transition`), m = Symbol.iterator;
      function h(e2) {
        return typeof e2 != `object` || !e2 ? null : (e2 = m && e2[m] || e2[`@@iterator`], typeof e2 == `function` ? e2 : null);
      }
      var g = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } }, _ = Object.assign, v = {};
      function y(e2, t4, n3) {
        this.props = e2, this.context = t4, this.refs = v, this.updater = n3 || g;
      }
      y.prototype.isReactComponent = {}, y.prototype.setState = function(e2, t4) {
        if (typeof e2 != `object` && typeof e2 != `function` && e2 != null) throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
        this.updater.enqueueSetState(this, e2, t4, `setState`);
      }, y.prototype.forceUpdate = function(e2) {
        this.updater.enqueueForceUpdate(this, e2, `forceUpdate`);
      };
      function b() {
      }
      b.prototype = y.prototype;
      function x(e2, t4, n3) {
        this.props = e2, this.context = t4, this.refs = v, this.updater = n3 || g;
      }
      var S = x.prototype = new b();
      S.constructor = x, _(S, y.prototype), S.isPureReactComponent = true;
      var C = Array.isArray;
      function w() {
      }
      var T = { H: null, A: null, T: null, S: null }, E = Object.prototype.hasOwnProperty;
      function D(e2, n3, r2) {
        var i2 = r2.ref;
        return { $$typeof: t3, type: e2, key: n3, ref: i2 === void 0 ? null : i2, props: r2 };
      }
      function O(e2, t4) {
        return D(e2.type, t4, e2.props);
      }
      function k(e2) {
        return typeof e2 == `object` && !!e2 && e2.$$typeof === t3;
      }
      function A(e2) {
        var t4 = { "=": `=0`, ":": `=2` };
        return `$` + e2.replace(/[=:]/g, function(e3) {
          return t4[e3];
        });
      }
      var j = /\/+/g;
      function M(e2, t4) {
        return typeof e2 == `object` && e2 && e2.key != null ? A(`` + e2.key) : t4.toString(36);
      }
      function N(e2) {
        switch (e2.status) {
          case `fulfilled`:
            return e2.value;
          case `rejected`:
            throw e2.reason;
          default:
            switch (typeof e2.status == `string` ? e2.then(w, w) : (e2.status = `pending`, e2.then(function(t4) {
              e2.status === `pending` && (e2.status = `fulfilled`, e2.value = t4);
            }, function(t4) {
              e2.status === `pending` && (e2.status = `rejected`, e2.reason = t4);
            })), e2.status) {
              case `fulfilled`:
                return e2.value;
              case `rejected`:
                throw e2.reason;
            }
        }
        throw e2;
      }
      function P(e2, r2, i2, a2, o2) {
        var s2 = typeof e2;
        (s2 === `undefined` || s2 === `boolean`) && (e2 = null);
        var c2 = false;
        if (e2 === null) c2 = true;
        else switch (s2) {
          case `bigint`:
          case `string`:
          case `number`:
            c2 = true;
            break;
          case `object`:
            switch (e2.$$typeof) {
              case t3:
              case n2:
                c2 = true;
                break;
              case d:
                return c2 = e2._init, P(c2(e2._payload), r2, i2, a2, o2);
            }
        }
        if (c2) return o2 = o2(e2), c2 = a2 === `` ? `.` + M(e2, 0) : a2, C(o2) ? (i2 = ``, c2 != null && (i2 = c2.replace(j, `$&/`) + `/`), P(o2, r2, i2, ``, function(e3) {
          return e3;
        })) : o2 != null && (k(o2) && (o2 = O(o2, i2 + (o2.key == null || e2 && e2.key === o2.key ? `` : (`` + o2.key).replace(j, `$&/`) + `/`) + c2)), r2.push(o2)), 1;
        c2 = 0;
        var l2 = a2 === `` ? `.` : a2 + `:`;
        if (C(e2)) for (var u2 = 0; u2 < e2.length; u2++) a2 = e2[u2], s2 = l2 + M(a2, u2), c2 += P(a2, r2, i2, s2, o2);
        else if (u2 = h(e2), typeof u2 == `function`) for (e2 = u2.call(e2), u2 = 0; !(a2 = e2.next()).done; ) a2 = a2.value, s2 = l2 + M(a2, u2++), c2 += P(a2, r2, i2, s2, o2);
        else if (s2 === `object`) {
          if (typeof e2.then == `function`) return P(N(e2), r2, i2, a2, o2);
          throw r2 = String(e2), Error(`Objects are not valid as a React child (found: ` + (r2 === `[object Object]` ? `object with keys {` + Object.keys(e2).join(`, `) + `}` : r2) + `). If you meant to render a collection of children, use an array instead.`);
        }
        return c2;
      }
      function F(e2, t4, n3) {
        if (e2 == null) return e2;
        var r2 = [], i2 = 0;
        return P(e2, r2, ``, ``, function(e3) {
          return t4.call(n3, e3, i2++);
        }), r2;
      }
      function I(e2) {
        if (e2._status === -1) {
          var t4 = e2._result, n3 = t4();
          n3.then(function(t5) {
            (e2._status === 0 || e2._status === -1) && (e2._status = 1, e2._result = t5, n3.status === void 0 && (n3.status = `fulfilled`, n3.value = t5));
          }, function(t5) {
            (e2._status === 0 || e2._status === -1) && (e2._status = 2, e2._result = t5, n3.status === void 0 && (n3.status = `rejected`, n3.reason = t5));
          }), e2._status === -1 && (e2._status = 0, e2._result = n3);
        }
        if (e2._status === 1) return e2._result.default;
        throw e2._result;
      }
      var L = typeof reportError == `function` ? reportError : function(e2) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
          var t4 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e2 == `object` && e2 && typeof e2.message == `string` ? String(e2.message) : String(e2), error: e2 });
          if (!window.dispatchEvent(t4)) return;
        } else if (typeof process == `object` && typeof process.emit == `function`) {
          process.emit(`uncaughtException`, e2);
          return;
        }
        console.error(e2);
      };
      function R(e2) {
        var t4 = T.T, n3 = {};
        n3.types = t4 === null ? null : t4.types, T.T = n3;
        try {
          var r2 = e2(), i2 = T.S;
          i2 !== null && i2(n3, r2), typeof r2 == `object` && r2 && typeof r2.then == `function` && r2.then(w, L);
        } catch (e3) {
          L(e3);
        } finally {
          t4 !== null && n3.types !== null && (t4.types = n3.types), T.T = t4;
        }
      }
      function z(e2) {
        var t4 = T.T;
        if (t4 !== null) {
          var n3 = t4.types;
          n3 === null ? t4.types = [e2] : n3.indexOf(e2) === -1 && n3.push(e2);
        } else R(z.bind(null, e2));
      }
      var B = { map: F, forEach: function(e2, t4, n3) {
        F(e2, function() {
          t4.apply(this, arguments);
        }, n3);
      }, count: function(e2) {
        var t4 = 0;
        return F(e2, function() {
          t4++;
        }), t4;
      }, toArray: function(e2) {
        return F(e2, function(e3) {
          return e3;
        }) || [];
      }, only: function(e2) {
        if (!k(e2)) throw Error(`React.Children.only expected to receive a single React element child.`);
        return e2;
      } };
      e.Activity = f, e.Children = B, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = { __proto__: null, c: function(e2) {
        return T.H.useMemoCache(e2);
      } }, e.addTransitionType = z, e.cache = function(e2) {
        return function() {
          return e2.apply(null, arguments);
        };
      }, e.cacheSignal = function() {
        return null;
      }, e.cloneElement = function(e2, t4, n3) {
        if (e2 == null) throw Error(`The argument must be a React element, but you passed ` + e2 + `.`);
        var r2 = _({}, e2.props), i2 = e2.key;
        if (t4 != null) for (a2 in t4.key !== void 0 && (i2 = `` + t4.key), t4) !E.call(t4, a2) || a2 === `key` || a2 === `__self` || a2 === `__source` || a2 === `ref` && t4.ref === void 0 || (r2[a2] = t4[a2]);
        var a2 = arguments.length - 2;
        if (a2 === 1) r2.children = n3;
        else if (1 < a2) {
          for (var o2 = Array(a2), s2 = 0; s2 < a2; s2++) o2[s2] = arguments[s2 + 2];
          r2.children = o2;
        }
        return D(e2.type, i2, r2);
      }, e.createContext = function(e2) {
        return e2 = { $$typeof: s, _currentValue: e2, _currentValue2: e2, _threadCount: 0, Provider: null, Consumer: null }, e2.Provider = e2, e2.Consumer = { $$typeof: o, _context: e2 }, e2;
      }, e.createElement = function(e2, t4, n3) {
        var r2, i2 = {}, a2 = null;
        if (t4 != null) for (r2 in t4.key !== void 0 && (a2 = `` + t4.key), t4) E.call(t4, r2) && r2 !== `key` && r2 !== `__self` && r2 !== `__source` && (i2[r2] = t4[r2]);
        var o2 = arguments.length - 2;
        if (o2 === 1) i2.children = n3;
        else if (1 < o2) {
          for (var s2 = Array(o2), c2 = 0; c2 < o2; c2++) s2[c2] = arguments[c2 + 2];
          i2.children = s2;
        }
        if (e2 && e2.defaultProps) for (r2 in o2 = e2.defaultProps, o2) i2[r2] === void 0 && (i2[r2] = o2[r2]);
        return D(e2, a2, i2);
      }, e.createRef = function() {
        return { current: null };
      }, e.forwardRef = function(e2) {
        return { $$typeof: c, render: e2 };
      }, e.isValidElement = k, e.lazy = function(e2) {
        return { $$typeof: d, _payload: { _status: -1, _result: e2 }, _init: I };
      }, e.memo = function(e2, t4) {
        return { $$typeof: u, type: e2, compare: t4 === void 0 ? null : t4 };
      }, e.startTransition = R, e.unstable_useCacheRefresh = function() {
        return T.H.useCacheRefresh();
      }, e.use = function(e2) {
        return T.H.use(e2);
      }, e.useActionState = function(e2, t4, n3) {
        return T.H.useActionState(e2, t4, n3);
      }, e.useCallback = function(e2, t4) {
        return T.H.useCallback(e2, t4);
      }, e.useContext = function(e2) {
        return T.H.useContext(e2);
      }, e.useDebugValue = function() {
      }, e.useDeferredValue = function(e2, t4) {
        return T.H.useDeferredValue(e2, t4);
      }, e.useEffect = function(e2, t4) {
        return T.H.useEffect(e2, t4);
      }, e.useEffectEvent = function(e2) {
        return T.H.useEffectEvent(e2);
      }, e.useId = function() {
        return T.H.useId();
      }, e.useImperativeHandle = function(e2, t4, n3) {
        return T.H.useImperativeHandle(e2, t4, n3);
      }, e.useInsertionEffect = function(e2, t4) {
        return T.H.useInsertionEffect(e2, t4);
      }, e.useLayoutEffect = function(e2, t4) {
        return T.H.useLayoutEffect(e2, t4);
      }, e.useMemo = function(e2, t4) {
        return T.H.useMemo(e2, t4);
      }, e.useOptimistic = function(e2, t4) {
        return T.H.useOptimistic(e2, t4);
      }, e.useReducer = function(e2, t4, n3) {
        return T.H.useReducer(e2, t4, n3);
      }, e.useRef = function(e2) {
        return T.H.useRef(e2);
      }, e.useState = function(e2) {
        return T.H.useState(e2);
      }, e.useSyncExternalStore = function(e2, t4, n3) {
        return T.H.useSyncExternalStore(e2, t4, n3);
      }, e.useTransition = function() {
        return T.H.useTransition();
      }, e.version = `19.3.0`;
    }));
    n = t(((e, n2) => {
      n2.exports = t2();
    }));
  }
});

export {
  n,
  init_react_BkAXpnfr
};
