import { t as t_1 } from "./rolldown-runtime-BpQH8Ho1.js";
const t = t_1((e)=>{
    var t = Symbol.for(`react.transitional.element`);
    var n = Symbol.for(`react.portal`);
    var r = Symbol.for(`react.fragment`);
    var i = Symbol.for(`react.strict_mode`);
    var a = Symbol.for(`react.profiler`);
    var o = Symbol.for(`react.consumer`);
    var s = Symbol.for(`react.context`);
    var c = Symbol.for(`react.forward_ref`);
    var l = Symbol.for(`react.suspense`);
    var u = Symbol.for(`react.memo`);
    var d = Symbol.for(`react.lazy`);
    var f = Symbol.for(`react.activity`);
    var p = Symbol.for(`react.view_transition`);
    var Symbol_iterator = Symbol.iterator;
    function h(e) {
        if (typeof e != `object` || !e) {
            return null;
        }
        e = Symbol_iterator && e[Symbol_iterator] || e[`@@iterator`];
        if (typeof e == `function`) {
            return e;
        }
        return null;
    }
    var g = {
        isMounted: function() {
            return false;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    };
    var Object_assign = Object.assign;
    var v = {};
    class y {
        constructor(e, t, n){
            this.props = e;
            this.context = t;
            this.refs = v;
            this.updater = n || g;
        }
        setState(e, t) {
            if (typeof e != `object` && typeof e != `function` && e != null) {
                throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
            }
            this.updater.enqueueSetState(this, e, t, `setState`);
        }
        forceUpdate(e) {
            this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
        }
    }
    y.prototype.isReactComponent = {};
    function b() {}
    b.prototype = y.prototype;
    function x(e, t, n) {
        this.props = e;
        this.context = t;
        this.refs = v;
        this.updater = n || g;
    }
    var S = x.prototype = new b;
    S.constructor = x;
    Object_assign(S, y.prototype);
    S.isPureReactComponent = true;
    var Array_isArray = Array.isArray;
    function w() {}
    var T = {
        H: null,
        A: null,
        T: null,
        S: null
    };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function D(e, key, props) {
        const r_ref = props.ref;
        return {
            $$typeof: t,
            type: e,
            key,
            ref: r_ref === undefined ? null : r_ref,
            props
        };
    }
    function O(e, t) {
        return D(e.type, t, e.props);
    }
    function k(e) {
        return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function A(e) {
        const t = {
            "=": `=0`,
            ":": `=2`
        };
        return `$` + e.replace(/[=:]/g, (e)=>t[e]);
    }
    var j = /\/+/g;
    function M(e, t) {
        if (typeof e == `object` && e && e.key != null) {
            return A(`` + e.key);
        }
        return t.toString(36);
    }
    function N(e) {
        switch(e.status){
            case `fulfilled`:
                return e.value;
            case `rejected`:
                throw e.reason;
            default:
                if (typeof e.status == `string`) {
                    e.then(w, w);
                } else {
                    e.status = `pending`;
                    e.then((t)=>{
                        if (e.status === `pending`) {
                            e.status = `fulfilled`;
                            e.value = t;
                        }
                    }, (t)=>{
                        if (e.status === `pending`) {
                            e.status = `rejected`;
                            e.reason = t;
                        }
                    });
                }
                switch(e.status){
                    case `fulfilled`:
                        return e.value;
                    case `rejected`:
                        throw e.reason;
                }
        }
        throw e;
    }
    function P(e, r, i, a, o) {
        let s = typeof e;
        if (s === `undefined` || s === `boolean`) {
            e = null;
        }
        let c = false;
        if (e === null) {
            c = true;
        } else {
            switch(s){
                case `bigint`:
                case `string`:
                case `number`:
                    c = true;
                    break;
                case `object`:
                    switch(e.$$typeof){
                        case t:
                        case n:
                            c = true;
                            break;
                        case d:
                            c = e._init;
                            return P(c(e._payload), r, i, a, o);
                    }
            }
        }
        if (c) {
            o = o(e);
            c = a === `` ? `.` + M(e, 0) : a;
            if (Array_isArray(o)) {
                i = ``;
                if (c != null) {
                    i = c.replace(j, `$&/`) + `/`;
                }
                P(o, r, i, ``, function(e) {
                    return e;
                });
            } else if (o != null) {
                if (k(o)) {
                    o = O(o, i + (o.key == null || e && e.key === o.key ? `` : (`` + o.key).replace(j, `$&/`) + `/`) + c);
                }
                r.push(o);
            }
            return 1;
        }
        c = 0;
        const l = a === `` ? `.` : a + `:`;
        if (Array_isArray(e)) {
            for(var u = 0; u < e.length; u++){
                a = e[u];
                s = l + M(a, u);
                c += P(a, r, i, s, o);
            }
        } else {
            u = h(e);
            if (typeof u == `function`) {
                e = u.call(e);
                for(u = 0; !(a = e.next()).done;){
                    a = a.value;
                    s = l + M(a, u++);
                    c += P(a, r, i, s, o);
                }
            } else if (s === `object`) {
                if (typeof e.then == `function`) {
                    return P(N(e), r, i, a, o);
                }
                r = String(e);
                throw Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`);
            }
        }
        return c;
    }
    function map(e, t, n) {
        if (e == null) {
            return e;
        }
        const r = [];
        let i = 0;
        P(e, r, ``, ``, function(e) {
            return t.call(n, e, i++);
        });
        return r;
    }
    function _init(e) {
        if (e._status === -1) {
            const t = e._result;
            const n = t();
            n.then((t)=>{
                if (e._status === 0 || e._status === -1) {
                    e._status = 1;
                    e._result = t;
                    if (n.status === undefined) {
                        n.status = `fulfilled`;
                        n.value = t;
                    }
                }
            }, (t)=>{
                if (e._status === 0 || e._status === -1) {
                    e._status = 2;
                    e._result = t;
                    if (n.status === undefined) {
                        n.status = `rejected`;
                        n.reason = t;
                    }
                }
            });
            if (e._status === -1) {
                e._status = 0;
                e._result = n;
            }
        }
        if (e._status === 1) {
            return e._result.default;
        }
        throw e._result;
    }
    var L = typeof reportError == `function` ? reportError : function(error) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
            const t = new window.ErrorEvent(`error`, {
                bubbles: true,
                cancelable: true,
                message: typeof error == `object` && error && typeof error.message == `string` ? String(error.message) : String(error),
                error
            });
            if (!window.dispatchEvent(t)) {
                return;
            }
        } else if (typeof process == `object` && typeof process.emit == `function`) {
            process.emit(`uncaughtException`, error);
            return;
        }
        console.error(error);
    };
    function R(e) {
        const t = T.T;
        const n = {};
        n.types = t === null ? null : t.types;
        T.T = n;
        try {
            const r = e();
            const i = T.S;
            if (i !== null) {
                i(n, r);
            }
            if (typeof r == `object` && r && typeof r.then == `function`) {
                r.then(w, L);
            }
        } catch (error) {
            L(error);
        } finally{
            if (t !== null && n.types !== null) {
                t.types = n.types;
            }
            T.T = t;
        }
    }
    function z(e) {
        const t = T.T;
        if (t !== null) {
            const n = t.types;
            if (n === null) {
                t.types = [
                    e
                ];
            } else if (n.indexOf(e) === -1) {
                n.push(e);
            }
        } else {
            R(z.bind(null, e));
        }
    }
    var B = {
        map,
        forEach: function(e, t, n) {
            map(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            let t = 0;
            map(e, ()=>{
                t++;
            });
            return t;
        },
        toArray: function(e) {
            return map(e, (e)=>e) || [];
        },
        only: function(e) {
            if (!k(e)) {
                throw Error(`React.Children.only expected to receive a single React element child.`);
            }
            return e;
        }
    };
    e.Activity = f;
    e.Children = B;
    e.Component = y;
    e.Fragment = r;
    e.Profiler = a;
    e.PureComponent = x;
    e.StrictMode = i;
    e.Suspense = l;
    e.ViewTransition = p;
    e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T;
    e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return T.H.useMemoCache(e);
        }
    };
    e.addTransitionType = z;
    e.cache = function(e) {
        return function() {
            return e(...arguments);
        };
    };
    e.cacheSignal = function() {
        return null;
    };
    e.cloneElement = function(e, t, n) {
        if (e == null) {
            throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        }
        const r = Object_assign({}, e.props);
        let e_key = e.key;
        if (t != null) {
            if (t.key !== undefined) {
                e_key = `` + t.key;
            }
            for(a in t){
                if (!(!hasOwnProperty.call(t, a) || a === `key` || a === `__self` || a === `__source` || a === `ref` && t.ref === undefined)) {
                    r[a] = t[a];
                }
            }
        }
        var a = arguments.length - 2;
        if (a === 1) {
            r.children = n;
        } else if (a > 1) {
            const o = Array(a);
            for(let s = 0; s < a; s++){
                o[s] = arguments[s + 2];
            }
            r.children = o;
        }
        return D(e.type, e_key, r);
    };
    e.createContext = function(e) {
        e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        e.Provider = e;
        e.Consumer = {
            $$typeof: o,
            _context: e
        };
        return e;
    };
    e.createElement = function(e, t, n) {
        let r;
        const i = {};
        let a = null;
        if (t != null) {
            if (t.key !== undefined) {
                a = `` + t.key;
            }
            for(r in t){
                if (hasOwnProperty.call(t, r) && r !== `key` && r !== `__self` && r !== `__source`) {
                    i[r] = t[r];
                }
            }
        }
        let o = arguments.length - 2;
        if (o === 1) {
            i.children = n;
        } else if (o > 1) {
            const s = Array(o);
            for(let c = 0; c < o; c++){
                s[c] = arguments[c + 2];
            }
            i.children = s;
        }
        if (e && e.defaultProps) {
            o = e.defaultProps;
            for(r in o){
                if (i[r] === undefined) {
                    i[r] = o[r];
                }
            }
        }
        return D(e, a, i);
    };
    e.createRef = function() {
        return {
            current: null
        };
    };
    e.forwardRef = function(render) {
        return {
            $$typeof: c,
            render
        };
    };
    e.isValidElement = k;
    e.lazy = function(_result) {
        return {
            $$typeof: d,
            _payload: {
                _status: -1,
                _result
            },
            _init
        };
    };
    e.memo = function(e, t) {
        return {
            $$typeof: u,
            type: e,
            compare: t === undefined ? null : t
        };
    };
    e.startTransition = R;
    e.unstable_useCacheRefresh = function() {
        return T.H.useCacheRefresh();
    };
    e.use = function(e) {
        return T.H.use(e);
    };
    e.useActionState = function(e, t, n) {
        return T.H.useActionState(e, t, n);
    };
    e.useCallback = function(e, t) {
        return T.H.useCallback(e, t);
    };
    e.useContext = function(e) {
        return T.H.useContext(e);
    };
    e.useDebugValue = function() {};
    e.useDeferredValue = function(e, t) {
        return T.H.useDeferredValue(e, t);
    };
    e.useEffect = function(e, t) {
        return T.H.useEffect(e, t);
    };
    e.useEffectEvent = function(e) {
        return T.H.useEffectEvent(e);
    };
    e.useId = function() {
        return T.H.useId();
    };
    e.useImperativeHandle = function(e, t, n) {
        return T.H.useImperativeHandle(e, t, n);
    };
    e.useInsertionEffect = function(e, t) {
        return T.H.useInsertionEffect(e, t);
    };
    e.useLayoutEffect = function(e, t) {
        return T.H.useLayoutEffect(e, t);
    };
    e.useMemo = function(e, t) {
        return T.H.useMemo(e, t);
    };
    e.useOptimistic = function(e, t) {
        return T.H.useOptimistic(e, t);
    };
    e.useReducer = function(e, t, n) {
        return T.H.useReducer(e, t, n);
    };
    e.useRef = function(e) {
        return T.H.useRef(e);
    };
    e.useState = function(e) {
        return T.H.useState(e);
    };
    e.useSyncExternalStore = function(e, t, n) {
        return T.H.useSyncExternalStore(e, t, n);
    };
    e.useTransition = function() {
        return T.H.useTransition();
    };
    e.version = `19.3.0`;
});
const n = t_1((e, n)=>{
    n.exports = t();
});
export { n as t };
