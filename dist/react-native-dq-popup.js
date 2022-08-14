import N, { useReducer as pr, useRef as H, useEffect as se, useState as We, useLayoutEffect as $e } from "react";
import { Animated as g, Dimensions as Ae, TouchableWithoutFeedback as Fe, ScrollView as Rr, View as oe } from "react-native";
const Ye = N.createContext(null), Er = N.createContext(null), _r = N.createContext(null), Cr = (n) => (n + 1) % 1e6;
function ue() {
  const [, n] = pr(Cr, 0);
  return n;
}
function wr({
  position: n,
  duration: c
}) {
  const l = H(new g.Value(100)).current, v = H(new g.Value(0)).current;
  return n === "top" ? {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    },
    innerStyle: {
      position: "relative",
      left: 0,
      right: 0,
      bottom: l.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"]
      })
    },
    show: () => {
      g.timing(l, {
        toValue: 0,
        duration: c,
        useNativeDriver: !1
      }).start();
    },
    hide: () => {
      g.timing(l, {
        toValue: 100,
        duration: c,
        useNativeDriver: !1
      }).start();
    }
  } : n === "bottom" ? {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0
    },
    innerStyle: {
      position: "relative",
      left: 0,
      right: 0,
      top: l.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"]
      })
    },
    show: () => {
      g.timing(l, {
        toValue: 0,
        duration: c,
        useNativeDriver: !1
      }).start();
    },
    hide: () => {
      g.timing(l, {
        toValue: 100,
        duration: c,
        useNativeDriver: !1
      }).start();
    }
  } : n === "right" ? {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0
    },
    innerStyle: {
      position: "relative",
      top: 0,
      bottom: 0,
      left: l.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"]
      })
    },
    show: () => {
      g.timing(l, {
        toValue: 0,
        duration: c,
        useNativeDriver: !1
      }).start();
    },
    hide: () => {
      g.timing(l, {
        toValue: 100,
        duration: c,
        useNativeDriver: !1
      }).start();
    }
  } : n === "left" ? {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0
    },
    innerStyle: {
      position: "relative",
      top: 0,
      bottom: 0,
      right: l.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"]
      })
    },
    show: () => {
      g.timing(l, {
        toValue: 0,
        duration: c,
        useNativeDriver: !1
      }).start();
    },
    hide: () => {
      g.timing(l, {
        toValue: 100,
        duration: c,
        useNativeDriver: !1
      }).start();
    }
  } : {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    innerStyle: {
      opacity: v
    },
    show: () => {
      g.timing(v, {
        toValue: 1,
        duration: c,
        useNativeDriver: !0
      }).start();
    },
    hide: () => {
      g.timing(v, {
        toValue: 0,
        duration: c,
        useNativeDriver: !0
      }).start();
    }
  };
}
var K = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Pr() {
  if (Ve)
    return Y;
  Ve = 1;
  var n = N, c = Symbol.for("react.element"), l = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(S, m, R) {
    var b, E = {}, _ = null, k = null;
    R !== void 0 && (_ = "" + R), m.key !== void 0 && (_ = "" + m.key), m.ref !== void 0 && (k = m.ref);
    for (b in m)
      v.call(m, b) && !P.hasOwnProperty(b) && (E[b] = m[b]);
    if (S && S.defaultProps)
      for (b in m = S.defaultProps, m)
        E[b] === void 0 && (E[b] = m[b]);
    return { $$typeof: c, type: S, key: _, ref: k, props: E, _owner: y.current };
  }
  return Y.Fragment = l, Y.jsx = A, Y.jsxs = A, Y;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Tr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var n = N, c = Symbol.for("react.element"), l = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), S = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), L = Symbol.iterator, X = "@@iterator";
    function U(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[X];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        T("error", e, t);
      }
    }
    function T(e, r, t) {
      {
        var a = j.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var F = !1, Le = !1, Ue = !1, ze = !1, Be = !1, le;
    le = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === P || Be || e === y || e === R || e === b || ze || e === k || F || Le || Ue || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === E || e.$$typeof === A || e.$$typeof === S || e.$$typeof === m || e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Je(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case l:
          return "Portal";
        case P:
          return "Profiler";
        case y:
          return "StrictMode";
        case R:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return ce(r) + ".Consumer";
          case A:
            var t = e;
            return ce(t._context) + ".Provider";
          case m:
            return Je(e, e.render, "ForwardRef");
          case E:
            var a = e.displayName || null;
            return a !== null ? a : O(e.type) || "Memo";
          case _: {
            var s = e, u = s._payload, o = s._init;
            try {
              return O(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, W = 0, fe, de, ve, me, he, ge, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ge() {
      {
        if (W === 0) {
          fe = console.log, de = console.info, ve = console.warn, me = console.error, he = console.group, ge = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function He() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: fe
            }),
            info: D({}, e, {
              value: de
            }),
            warn: D({}, e, {
              value: ve
            }),
            error: D({}, e, {
              value: me
            }),
            group: D({}, e, {
              value: he
            }),
            groupCollapsed: D({}, e, {
              value: ge
            }),
            groupEnd: D({}, e, {
              value: be
            })
          });
        }
        W < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = j.ReactCurrentDispatcher, Q;
    function z(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            Q = a && a[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, B;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ke();
    }
    function pe(e, r) {
      if (!e || ee)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ee = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = Z.current, Z.current = null, Ge();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (x) {
              a = x;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (x) {
              a = x;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            a = x;
          }
          e();
        }
      } catch (x) {
        if (x && a && typeof x.stack == "string") {
          for (var i = x.stack.split(`
`), p = a.stack.split(`
`), f = i.length - 1, d = p.length - 1; f >= 1 && d >= 0 && i[f] !== p[d]; )
            d--;
          for (; f >= 1 && d >= 0; f--, d--)
            if (i[f] !== p[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, d < 0 || i[f] !== p[d]) {
                    var C = `
` + i[f].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, C), C;
                  }
                while (f >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = u, He(), Error.prepareStackTrace = s;
      }
      var I = e ? e.displayName || e.name : "", De = I ? z(I) : "";
      return typeof e == "function" && B.set(e, De), De;
    }
    function Xe(e, r, t) {
      return pe(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ze(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case R:
          return z("Suspense");
        case b:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Xe(e.render);
          case E:
            return q(e.type, r, t);
          case _: {
            var a = e, s = a._payload, u = a._init;
            try {
              return q(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Re = {}, Ee = j.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Qe(e, r, t, a, s) {
      {
        var u = Function.call.bind(J);
        for (var o in e)
          if (u(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              i = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              i = f;
            }
            i && !(i instanceof Error) && (G(s), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof i), G(null)), i instanceof Error && !(i.message in Re) && (Re[i.message] = !0, G(s), h("Failed %s type: %s", t, i.message), G(null));
          }
      }
    }
    var er = Array.isArray;
    function re(e) {
      return er(e);
    }
    function rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function tr(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Ce(e) {
      if (tr(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), _e(e);
    }
    var $ = j.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Pe, te;
    te = {};
    function ar(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = O($.current.type);
        te[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O($.current.type), e.ref), te[t] = !0);
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          we || (we = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, t, a, s, u, o) {
      var i = {
        $$typeof: c,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: u
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function cr(e, r, t, a, s) {
      {
        var u, o = {}, i = null, p = null;
        t !== void 0 && (Ce(t), i = "" + t), ir(r) && (Ce(r.key), i = "" + r.key), ar(r) && (p = r.ref, or(r, s));
        for (u in r)
          J.call(r, u) && !nr.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            o[u] === void 0 && (o[u] = f[u]);
        }
        if (i || p) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && sr(o, d), p && ur(o, d);
        }
        return lr(e, i, p, s, a, $.current, o);
      }
    }
    var ne = j.ReactCurrentOwner, Te = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function Se() {
      {
        if (ne.current) {
          var e = O(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function fr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function dr(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = dr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ne.current && (a = " It was passed a child from " + O(e._owner.type) + "."), V(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), V(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ie(a) && xe(a, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = U(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              ie(o.value) && xe(o.value, r);
        }
      }
    }
    function vr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = O(r);
          Qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var s = O(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            V(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function je(e, r, t, a, s, u) {
      {
        var o = qe(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = fr(s);
          p ? i += p : i += Se();
          var f;
          e === null ? f = "null" : re(e) ? f = "array" : e !== void 0 && e.$$typeof === c ? (f = "<" + (O(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, i);
        }
        var d = cr(e, r, t, s, u);
        if (d == null)
          return d;
        if (o) {
          var C = r.children;
          if (C !== void 0)
            if (a)
              if (re(C)) {
                for (var I = 0; I < C.length; I++)
                  ke(C[I], e);
                Object.freeze && Object.freeze(C);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(C, e);
        }
        return e === v ? mr(d) : vr(d), d;
      }
    }
    function hr(e, r, t) {
      return je(e, r, t, !0);
    }
    function gr(e, r, t) {
      return je(e, r, t, !1);
    }
    var br = gr, yr = hr;
    M.Fragment = v, M.jsx = br, M.jsxs = yr;
  }()), M;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Pr() : n.exports = Tr();
})(K);
const Sr = K.exports.Fragment, w = K.exports.jsx, Ne = K.exports.jsxs, Me = (n) => {
  const {
    visible: c,
    position: l,
    duration: v,
    zIndex: y,
    onClose: P,
    destroyOnClose: A,
    children: S
  } = n, m = ue();
  let R = H();
  R.current === void 0 && (R.current = Ae.get("screen")), se(() => {
    const T = Ae.addEventListener("change", ({
      screen: F
    }) => {
      R.current = F, m();
    });
    return () => T == null ? void 0 : T.remove();
  }, []);
  const [b, E] = We(c), _ = wr({
    position: l,
    duration: v
  }), k = H(new g.Value(0)).current, L = () => {
    if (n.mask === !1)
      return;
    const T = n.mask === !0 || n.mask === void 0 ? 0.73 : n.mask;
    g.timing(k, {
      toValue: T,
      duration: v,
      useNativeDriver: !0
    }).start(() => {
      var F;
      (F = n.onOpened) == null || F.call(n);
    });
  }, X = () => {
    n.mask !== !1 && g.timing(k, {
      toValue: 0,
      duration: v,
      useNativeDriver: !0
    }).start(() => {
      var T;
      E(!1), (T = n.onClosed) == null || T.call(n);
    });
  };
  $e(() => {
    c ? (E(!0), L(), _.show()) : (X(), _.hide());
  }, [c]);
  const U = () => {
    n.maskClosable && (P == null || P());
  }, j = () => b === !1 || n.mask === !1 ? null : /* @__PURE__ */ w(Fe, {
    onPress: U,
    children: /* @__PURE__ */ w(g.View, {
      style: [{
        zIndex: y,
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        opacity: k,
        backgroundColor: "#000000"
      }, n.maskStyle]
    })
  }), h = () => b === !1 ? null : /* @__PURE__ */ w(Rr, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: y
    },
    children: /* @__PURE__ */ Ne(oe, {
      style: {
        position: "relative",
        width: R.current.width,
        height: R.current.height,
        zIndex: y
      },
      children: [/* @__PURE__ */ w(Fe, {
        onPress: U,
        children: /* @__PURE__ */ w(oe, {
          style: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        })
      }), /* @__PURE__ */ w(oe, {
        style: _.style,
        children: /* @__PURE__ */ w(g.View, {
          style: [{
            zIndex: y
          }, _.innerStyle, n.style],
          children: S
        })
      })]
    })
  });
  return /* @__PURE__ */ Ne(Sr, {
    children: [j(), h()]
  });
};
Me.defaultProps = {
  visible: !1,
  duration: 300,
  zIndex: 999,
  mask: !0,
  position: "bottom",
  destroyOnClose: !1,
  maskClosable: !0
};
const Or = ({
  popup: n
}) => {
  const c = ue();
  return se(() => {
    n.updateState("beforeMount");
    const l = () => {
      c();
    };
    return n.on("change", l), () => n.off("change", l);
  }, []), $e(() => {
    n.updateState("mounted");
  }, []), /* @__PURE__ */ w(Me, {
    visible: n.visible,
    position: n.position,
    duration: n.duration,
    zIndex: n.zIndex,
    mask: n.mask,
    maskClosable: n.maskClosable,
    onOpened: () => {
      var l, v;
      return (v = (l = n.callbacks).onOpened) == null ? void 0 : v.call(l);
    },
    onClose: n.onClose,
    onClosed: n.onClosed,
    children: /* @__PURE__ */ w(_r.Provider, {
      value: n,
      children: /* @__PURE__ */ w(Ye.Provider, {
        value: n.controller,
        children: n.el
      })
    })
  });
}, jr = ({
  manager: n
}) => {
  const [c, l] = We([]), v = ue();
  return se(() => {
    const y = (P) => {
      l(P), v();
    };
    return n.on("change", y), () => n.off("change", y);
  }, []), /* @__PURE__ */ w(Er.Provider, {
    value: n,
    children: c.map((y) => /* @__PURE__ */ w(Or, {
      popup: y
    }, y.key))
  });
}, Dr = () => N.useContext(Ye);
export {
  jr as ManagerProvider,
  Me as PopupComponent,
  Dr as useController
};
