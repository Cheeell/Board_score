/* @ds-bundle: {"namespace":"ScoreBar","components":[{"name":"GameCard","sourcePath":"components/general/GameCard/GameCard.jsx"},{"name":"GlareHover","sourcePath":"components/general/GlareHover/GlareHover.jsx"}],"sourceHashes":{"components/general/GameCard/GameCard.jsx":"fa23873ee9ca","components/general/GameCard/GameCard.d.ts":"b3d0659efa05","components/general/GameCard/GameCard.prompt.md":"420467037993","components/general/GlareHover/GlareHover.jsx":"5012c011c28c","components/general/GlareHover/GlareHover.d.ts":"5663a1aa201e","components/general/GlareHover/GlareHover.prompt.md":"80f730d24c77"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
var ScoreBar = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
    } catch (e2) {
      throw err = [e2], e2;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e2) {
      throw mod = 0, e2;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R2 = window.React;
      function np(p2, k2) {
        var o2 = {};
        for (var x2 in p2) if (x2 !== "children") o2[x2] = p2[x2];
        if (k2 !== void 0) o2.key = k2;
        return o2;
      }
      function jsx(t2, p2, k2) {
        var c2 = p2 && p2.children;
        return c2 === void 0 ? R2.createElement(t2, np(p2, k2)) : R2.createElement(t2, np(p2, k2), c2);
      }
      function jsxs(t2, p2, k2) {
        return R2.createElement.apply(R2, [t2, np(p2, k2)].concat(p2.children));
      }
      module.exports = R2;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t2, p2, k2, s2) {
        return (s2 ? jsxs : jsx)(t2, p2, k2);
      };
      module.exports.Fragment = R2.Fragment;
    }
  });

  // dist-lib/index.js
  var index_exports = {};
  __export(index_exports, {
    GameCard: () => Tu,
    GlareHover: () => ee
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var import_react = __toESM(require_react_shim(), 1);
  var g = Object.defineProperty;
  var _ = Object.getOwnPropertyDescriptor;
  var v = Object.getOwnPropertyNames;
  var y = Object.prototype.hasOwnProperty;
  var b = (e2, t2, n2) => () => {
    if (n2) throw n2[0];
    try {
      return e2 && (t2 = e2(e2 = 0)), t2;
    } catch (e3) {
      throw n2 = [e3], e3;
    }
  };
  var x = (e2, t2) => {
    let n2 = {};
    for (var r2 in e2) g(n2, r2, {
      get: e2[r2],
      enumerable: true
    });
    return t2 || g(n2, Symbol.toStringTag, { value: "Module" }), n2;
  };
  var S = (e2, t2, n2, r2) => {
    if (t2 && typeof t2 == "object" || typeof t2 == "function") for (var i2 = v(t2), a2 = 0, o2 = i2.length, s2; a2 < o2; a2++) s2 = i2[a2], !y.call(e2, s2) && s2 !== n2 && g(e2, s2, {
      get: ((e3) => t2[e3]).bind(null, s2),
      enumerable: !(r2 = _(t2, s2)) || r2.enumerable
    });
    return e2;
  };
  var C = (e2) => y.call(e2, "module.exports") ? e2["module.exports"] : S(g({}, "__esModule", { value: true }), e2);
  var ee = ({ width: t2 = "500px", height: n2 = "500px", background: r2 = "#000", borderRadius: i2 = "10px", borderColor: a2 = "#333", children: o2, glareColor: s2 = "#ffffff", glareOpacity: c2 = 0.5, glareAngle: l2 = -45, glareSize: u2 = 250, transitionDuration: d2 = 650, playOnce: f2 = false, className: p2 = "", style: m2 = {} }) => {
    let h2 = s2.replace("#", ""), g2 = s2;
    /^[0-9A-Fa-f]{6}$/.test(h2) ? g2 = `rgba(${parseInt(h2.slice(0, 2), 16)}, ${parseInt(h2.slice(2, 4), 16)}, ${parseInt(h2.slice(4, 6), 16)}, ${c2})` : /^[0-9A-Fa-f]{3}$/.test(h2) && (g2 = `rgba(${parseInt(h2[0] + h2[0], 16)}, ${parseInt(h2[1] + h2[1], 16)}, ${parseInt(h2[2] + h2[2], 16)}, ${c2})`);
    let _2 = {
      "--gh-width": t2,
      "--gh-height": n2,
      "--gh-bg": r2,
      "--gh-br": i2,
      "--gh-angle": `${l2}deg`,
      "--gh-duration": `${d2}ms`,
      "--gh-size": `${u2}%`,
      "--gh-rgba": g2,
      "--gh-border": a2
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: `glare-hover ${f2 ? "glare-hover--play-once" : ""} ${p2}`,
      style: {
        ..._2,
        ...m2
      },
      children: o2
    });
  };
  var te = (0, import_react.createContext)({});
  function w(e2) {
    let t2 = (0, import_react.useRef)(null);
    return t2.current === null && (t2.current = e2()), t2.current;
  }
  var ne = typeof window < "u" ? import_react.useLayoutEffect : import_react.useEffect;
  var re = /* @__PURE__ */ (0, import_react.createContext)(null);
  function ie(e2, t2) {
    e2.indexOf(t2) === -1 && e2.push(t2);
  }
  function ae(e2, t2) {
    let n2 = e2.indexOf(t2);
    n2 > -1 && e2.splice(n2, 1);
  }
  var T = (e2, t2, n2) => n2 > t2 ? t2 : n2 < e2 ? e2 : n2;
  function oe(e2, t2) {
    return t2 ? `${e2}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t2}` : e2;
  }
  var se = () => {
  };
  var E = () => {
  };
  typeof process < "u" && true && (se = (e2, t2, n2) => {
    !e2 && typeof console < "u" && console.warn(oe(t2, n2));
  }, E = (e2, t2, n2) => {
    if (!e2) throw Error(oe(t2, n2));
  });
  var D = {};
  var ce = (e2) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e2);
  var le = (e2) => typeof e2 == "object" && !!e2;
  var ue = (e2) => /^0[^.\s]+$/u.test(e2);
  // @__NO_SIDE_EFFECTS__
  function de(e2) {
    let t2;
    return () => (t2 === void 0 && (t2 = e2()), t2);
  }
  var O = /* @__NO_SIDE_EFFECTS__ */ (e2) => e2;
  var fe = (...e2) => e2.reduce((e3, t2) => (n2) => t2(e3(n2)));
  var pe = /* @__NO_SIDE_EFFECTS__ */ (e2, t2, n2) => {
    let r2 = t2 - e2;
    return r2 ? (n2 - e2) / r2 : 1;
  };
  var me = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e2) {
      return ie(this.subscriptions, e2), () => ae(this.subscriptions, e2);
    }
    notify(e2, t2, n2) {
      let r2 = this.subscriptions.length;
      if (r2) if (r2 === 1) this.subscriptions[0](e2, t2, n2);
      else for (let i2 = 0; i2 < r2; i2++) {
        let r3 = this.subscriptions[i2];
        r3 && r3(e2, t2, n2);
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  };
  var k = /* @__NO_SIDE_EFFECTS__ */ (e2) => e2 * 1e3;
  var A = /* @__NO_SIDE_EFFECTS__ */ (e2) => e2 / 1e3;
  var he = /* @__NO_SIDE_EFFECTS__ */ (e2, t2) => t2 ? 1e3 / t2 * e2 : 0;
  var ge = /* @__PURE__ */ new Set();
  function _e(e2, t2, n2) {
    e2 || ge.has(t2) || (console.warn(oe(t2, n2)), ge.add(t2));
  }
  var ve = (e2, t2, n2) => (((1 - 3 * n2 + 3 * t2) * e2 + (3 * n2 - 6 * t2)) * e2 + 3 * t2) * e2;
  var ye = 1e-7;
  var be = 12;
  function xe(e2, t2, n2, r2, i2) {
    let a2, o2, s2 = 0;
    do
      o2 = t2 + (n2 - t2) / 2, a2 = ve(o2, r2, i2) - e2, a2 > 0 ? n2 = o2 : t2 = o2;
    while (Math.abs(a2) > ye && ++s2 < be);
    return o2;
  }
  // @__NO_SIDE_EFFECTS__
  function Se(e2, t2, n2, r2) {
    if (e2 === t2 && n2 === r2) return O;
    let i2 = (t3) => xe(t3, 0, 1, e2, n2);
    return (e3) => e3 === 0 || e3 === 1 ? e3 : ve(i2(e3), t2, r2);
  }
  var Ce = /* @__NO_SIDE_EFFECTS__ */ (e2) => (t2) => t2 <= 0.5 ? e2(2 * t2) / 2 : (2 - e2(2 * (1 - t2))) / 2;
  var we = /* @__NO_SIDE_EFFECTS__ */ (e2) => (t2) => 1 - e2(1 - t2);
  var Te = /* @__PURE__ */ Se(0.33, 1.53, 0.69, 0.99);
  var Ee = /* @__PURE__ */ we(Te);
  var De = /* @__PURE__ */ Ce(Ee);
  var Oe = (e2) => e2 >= 1 ? 1 : (e2 *= 2) < 1 ? 0.5 * Ee(e2) : 0.5 * (2 - 2 ** (-10 * (e2 - 1)));
  var ke = (e2) => 1 - Math.sin(Math.acos(e2));
  var Ae = /* @__PURE__ */ we(ke);
  var je = /* @__PURE__ */ Ce(ke);
  var Me = /* @__PURE__ */ Se(0.42, 0, 1, 1);
  var Ne = /* @__PURE__ */ Se(0, 0, 0.58, 1);
  var Pe = /* @__PURE__ */ Se(0.42, 0, 0.58, 1);
  var Fe = /* @__NO_SIDE_EFFECTS__ */ (e2) => Array.isArray(e2) && typeof e2[0] != "number";
  var Ie = /* @__NO_SIDE_EFFECTS__ */ (e2) => Array.isArray(e2) && typeof e2[0] == "number";
  var Le = {
    linear: O,
    easeIn: Me,
    easeInOut: Pe,
    easeOut: Ne,
    circIn: ke,
    circInOut: je,
    circOut: Ae,
    backIn: Ee,
    backInOut: De,
    backOut: Te,
    anticipate: Oe
  };
  var Re = (e2) => typeof e2 == "string";
  var ze = (e2) => {
    if (/* @__PURE__ */ Ie(e2)) {
      E(e2.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
      let [t2, n2, r2, i2] = e2;
      return /* @__PURE__ */ Se(t2, n2, r2, i2);
    } else if (Re(e2)) return E(Le[e2] !== void 0, `Invalid easing type '${e2}'`, "invalid-easing-type"), Le[e2];
    return e2;
  };
  var Be = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender"
  ];
  function Ve(e2) {
    let t2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), r2 = false, i2 = false, a2 = /* @__PURE__ */ new WeakSet(), o2 = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    function s2(t3) {
      a2.has(t3) && (c2.schedule(t3), e2()), t3(o2);
    }
    let c2 = {
      schedule: (e3, i3 = false, o3 = false) => {
        let s3 = o3 && r2 ? t2 : n2;
        return i3 && a2.add(e3), s3.add(e3), e3;
      },
      cancel: (e3) => {
        n2.delete(e3), a2.delete(e3);
      },
      process: (e3) => {
        if (o2 = e3, r2) {
          i2 = true;
          return;
        }
        r2 = true;
        let a3 = t2;
        t2 = n2, n2 = a3, t2.forEach(s2), t2.clear(), r2 = false, i2 && (i2 = false, c2.process(e3));
      }
    };
    return c2;
  }
  var He = 40;
  function Ue(e2, t2) {
    let n2 = false, r2 = true, i2 = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    }, a2 = () => n2 = true, o2 = Be.reduce((e3, t3) => (e3[t3] = Ve(a2), e3), {}), { setup: s2, read: c2, resolveKeyframes: l2, preUpdate: u2, update: d2, preRender: f2, render: p2, postRender: m2 } = o2, h2 = () => {
      let a3 = D.useManualTiming, o3 = a3 ? i2.timestamp : performance.now();
      n2 = false, a3 || (i2.delta = r2 ? 1e3 / 60 : Math.max(Math.min(o3 - i2.timestamp, He), 1)), i2.timestamp = o3, i2.isProcessing = true, s2.process(i2), c2.process(i2), l2.process(i2), u2.process(i2), d2.process(i2), f2.process(i2), p2.process(i2), m2.process(i2), i2.isProcessing = false, n2 && t2 && (r2 = false, e2(h2));
    }, g2 = () => {
      n2 = true, r2 = true, i2.isProcessing || e2(h2);
    };
    return {
      schedule: Be.reduce((e3, t3) => {
        let r3 = o2[t3];
        return e3[t3] = (e4, t4 = false, i3 = false) => (n2 || g2(), r3.schedule(e4, t4, i3)), e3;
      }, {}),
      cancel: (e3) => {
        for (let t3 = 0; t3 < Be.length; t3++) o2[Be[t3]].cancel(e3);
      },
      state: i2,
      steps: o2
    };
  }
  var { schedule: j, cancel: M, state: N, steps: We } = /* @__PURE__ */ Ue(typeof requestAnimationFrame < "u" ? requestAnimationFrame : O, true);
  var Ge;
  function Ke() {
    Ge = void 0;
  }
  var P = {
    now: () => (Ge === void 0 && P.set(N.isProcessing || D.useManualTiming ? N.timestamp : performance.now()), Ge),
    set: (e2) => {
      Ge = e2, queueMicrotask(Ke);
    }
  };
  var qe = (e2) => (t2) => typeof t2 == "string" && t2.startsWith(e2);
  var Je = /* @__PURE__ */ qe("--");
  var Ye = /* @__PURE__ */ qe("var(--");
  var Xe = (e2) => Ye(e2) ? Ze.test(e2.split("/*")[0].trim()) : false;
  var Ze = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function Qe(e2) {
    return typeof e2 == "string" && e2.split("/*")[0].includes("var(--");
  }
  var $e = {
    test: (e2) => typeof e2 == "number",
    parse: parseFloat,
    transform: (e2) => e2
  };
  var et = {
    ...$e,
    transform: (e2) => T(0, 1, e2)
  };
  var tt = {
    ...$e,
    default: 1
  };
  var nt = (e2) => Math.round(e2 * 1e5) / 1e5;
  var rt = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function it(e2) {
    return e2 == null;
  }
  var at = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
  var ot = (e2, t2) => (n2) => !!(typeof n2 == "string" && at.test(n2) && n2.startsWith(e2) || t2 && !it(n2) && Object.prototype.hasOwnProperty.call(n2, t2));
  var st = (e2, t2, n2) => (r2) => {
    if (typeof r2 != "string") return r2;
    let [i2, a2, o2, s2] = r2.match(rt);
    return {
      [e2]: parseFloat(i2),
      [t2]: parseFloat(a2),
      [n2]: parseFloat(o2),
      alpha: s2 === void 0 ? 1 : parseFloat(s2)
    };
  };
  var ct = (e2) => T(0, 255, e2);
  var lt = {
    ...$e,
    transform: (e2) => Math.round(ct(e2))
  };
  var F = {
    test: /* @__PURE__ */ ot("rgb", "red"),
    parse: /* @__PURE__ */ st("red", "green", "blue"),
    transform: ({ red: e2, green: t2, blue: n2, alpha: r2 = 1 }) => "rgba(" + lt.transform(e2) + ", " + lt.transform(t2) + ", " + lt.transform(n2) + ", " + nt(et.transform(r2)) + ")"
  };
  function ut(e2) {
    let t2 = "", n2 = "", r2 = "", i2 = "";
    return e2.length > 5 ? (t2 = e2.substring(1, 3), n2 = e2.substring(3, 5), r2 = e2.substring(5, 7), i2 = e2.substring(7, 9)) : (t2 = e2.substring(1, 2), n2 = e2.substring(2, 3), r2 = e2.substring(3, 4), i2 = e2.substring(4, 5), t2 += t2, n2 += n2, r2 += r2, i2 += i2), {
      red: parseInt(t2, 16),
      green: parseInt(n2, 16),
      blue: parseInt(r2, 16),
      alpha: i2 ? parseInt(i2, 16) / 255 : 1
    };
  }
  var dt = {
    test: /* @__PURE__ */ ot("#"),
    parse: ut,
    transform: F.transform
  };
  var ft = /* @__NO_SIDE_EFFECTS__ */ (e2) => ({
    test: (t2) => typeof t2 == "string" && t2.endsWith(e2) && t2.split(" ").length === 1,
    parse: parseFloat,
    transform: (t2) => `${t2}${e2}`
  });
  var I = /* @__PURE__ */ ft("deg");
  var L = /* @__PURE__ */ ft("%");
  var R = /* @__PURE__ */ ft("px");
  var pt = /* @__PURE__ */ ft("vh");
  var mt = /* @__PURE__ */ ft("vw");
  var ht = {
    ...L,
    parse: (e2) => L.parse(e2) / 100,
    transform: (e2) => L.transform(e2 * 100)
  };
  var gt = {
    test: /* @__PURE__ */ ot("hsl", "hue"),
    parse: /* @__PURE__ */ st("hue", "saturation", "lightness"),
    transform: ({ hue: e2, saturation: t2, lightness: n2, alpha: r2 = 1 }) => "hsla(" + Math.round(e2) + ", " + L.transform(nt(t2)) + ", " + L.transform(nt(n2)) + ", " + nt(et.transform(r2)) + ")"
  };
  var z = {
    test: (e2) => F.test(e2) || dt.test(e2) || gt.test(e2),
    parse: (e2) => F.test(e2) ? F.parse(e2) : gt.test(e2) ? gt.parse(e2) : dt.parse(e2),
    transform: (e2) => typeof e2 == "string" ? e2 : e2.hasOwnProperty("red") ? F.transform(e2) : gt.transform(e2),
    getAnimatableNone: (e2) => {
      let t2 = z.parse(e2);
      return t2.alpha = 0, z.transform(t2);
    }
  };
  var _t = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function vt(e2) {
    return isNaN(e2) && typeof e2 == "string" && (e2.match(rt)?.length || 0) + (e2.match(_t)?.length || 0) > 0;
  }
  var yt = "number";
  var bt = "color";
  var xt = "var";
  var St = "var(";
  var Ct = "${}";
  var wt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function Tt(e2) {
    let t2 = e2.toString(), n2 = [], r2 = {
      color: [],
      number: [],
      var: []
    }, i2 = [], a2 = 0;
    return {
      values: n2,
      split: t2.replace(wt, (e3) => (z.test(e3) ? (r2.color.push(a2), i2.push(bt), n2.push(z.parse(e3))) : e3.startsWith(St) ? (r2.var.push(a2), i2.push(xt), n2.push(e3)) : (r2.number.push(a2), i2.push(yt), n2.push(parseFloat(e3))), ++a2, Ct)).split(Ct),
      indexes: r2,
      types: i2
    };
  }
  function Et(e2) {
    return Tt(e2).values;
  }
  function Dt({ split: e2, types: t2 }) {
    let n2 = e2.length;
    return (r2) => {
      let i2 = "";
      for (let a2 = 0; a2 < n2; a2++) if (i2 += e2[a2], r2[a2] !== void 0) {
        let e3 = t2[a2];
        e3 === yt ? i2 += nt(r2[a2]) : e3 === bt ? i2 += z.transform(r2[a2]) : i2 += r2[a2];
      }
      return i2;
    };
  }
  function Ot(e2) {
    return Dt(Tt(e2));
  }
  var kt = (e2) => typeof e2 == "number" ? 0 : z.test(e2) ? z.getAnimatableNone(e2) : e2;
  var At = (e2, t2) => typeof e2 == "number" ? t2?.trim().endsWith("/") ? e2 : 0 : kt(e2);
  function jt(e2) {
    let t2 = Tt(e2);
    return Dt(t2)(t2.values.map((e3, n2) => At(e3, t2.split[n2])));
  }
  var B = {
    test: vt,
    parse: Et,
    createTransformer: Ot,
    getAnimatableNone: jt
  };
  function Mt(e2, t2, n2) {
    return n2 < 0 && (n2 += 1), n2 > 1 && --n2, n2 < 1 / 6 ? e2 + (t2 - e2) * 6 * n2 : n2 < 1 / 2 ? t2 : n2 < 2 / 3 ? e2 + (t2 - e2) * (2 / 3 - n2) * 6 : e2;
  }
  function Nt({ hue: e2, saturation: t2, lightness: n2, alpha: r2 }) {
    e2 /= 360, t2 /= 100, n2 /= 100;
    let i2 = 0, a2 = 0, o2 = 0;
    if (!t2) i2 = a2 = o2 = n2;
    else {
      let r3 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, s2 = 2 * n2 - r3;
      i2 = Mt(s2, r3, e2 + 1 / 3), a2 = Mt(s2, r3, e2), o2 = Mt(s2, r3, e2 - 1 / 3);
    }
    return {
      red: Math.round(i2 * 255),
      green: Math.round(a2 * 255),
      blue: Math.round(o2 * 255),
      alpha: r2
    };
  }
  function Pt(e2, t2) {
    return (n2) => n2 > 0 ? t2 : e2;
  }
  var V = (e2, t2, n2) => e2 + (t2 - e2) * n2;
  var Ft = (e2, t2, n2) => {
    let r2 = e2 * e2, i2 = n2 * (t2 * t2 - r2) + r2;
    return i2 < 0 ? 0 : Math.sqrt(i2);
  };
  var It = [
    dt,
    F,
    gt
  ];
  var Lt = (e2) => It.find((t2) => t2.test(e2));
  function Rt(e2) {
    let t2 = Lt(e2);
    if (se(!!t2, `'${e2}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t2) return false;
    let n2 = t2.parse(e2);
    return t2 === gt && (n2 = Nt(n2)), n2;
  }
  var zt = (e2, t2) => {
    let n2 = Rt(e2), r2 = Rt(t2);
    if (!n2 || !r2) return Pt(e2, t2);
    let i2 = { ...n2 };
    return (e3) => (i2.red = Ft(n2.red, r2.red, e3), i2.green = Ft(n2.green, r2.green, e3), i2.blue = Ft(n2.blue, r2.blue, e3), i2.alpha = V(n2.alpha, r2.alpha, e3), F.transform(i2));
  };
  var Bt = /* @__PURE__ */ new Set(["none", "hidden"]);
  function Vt(e2, t2) {
    return Bt.has(e2) ? (n2) => n2 <= 0 ? e2 : t2 : (n2) => n2 >= 1 ? t2 : e2;
  }
  function Ht(e2, t2) {
    return (n2) => V(e2, t2, n2);
  }
  function Ut(e2) {
    return typeof e2 == "number" ? Ht : typeof e2 == "string" ? Xe(e2) ? Pt : z.test(e2) ? zt : qt : Array.isArray(e2) ? Wt : typeof e2 == "object" ? z.test(e2) ? zt : Gt : Pt;
  }
  function Wt(e2, t2) {
    let n2 = [...e2], r2 = n2.length, i2 = e2.map((e3, n3) => Ut(e3)(e3, t2[n3]));
    return (e3) => {
      for (let t3 = 0; t3 < r2; t3++) n2[t3] = i2[t3](e3);
      return n2;
    };
  }
  function Gt(e2, t2) {
    let n2 = {
      ...e2,
      ...t2
    }, r2 = {};
    for (let i2 in n2) e2[i2] !== void 0 && t2[i2] !== void 0 && (r2[i2] = Ut(e2[i2])(e2[i2], t2[i2]));
    return (e3) => {
      for (let t3 in r2) n2[t3] = r2[t3](e3);
      return n2;
    };
  }
  function Kt(e2, t2) {
    let n2 = [], r2 = {
      color: 0,
      var: 0,
      number: 0
    };
    for (let i2 = 0; i2 < t2.values.length; i2++) {
      let a2 = t2.types[i2], o2 = e2.indexes[a2][r2[a2]];
      n2[i2] = e2.values[o2] ?? 0, r2[a2]++;
    }
    return n2;
  }
  var qt = (e2, t2) => {
    let n2 = B.createTransformer(t2), r2 = Tt(e2), i2 = Tt(t2);
    return r2.indexes.var.length === i2.indexes.var.length && r2.indexes.color.length === i2.indexes.color.length && r2.indexes.number.length >= i2.indexes.number.length ? Bt.has(e2) && !i2.values.length || Bt.has(t2) && !r2.values.length ? Vt(e2, t2) : fe(Wt(Kt(r2, i2), i2.values), n2) : (se(true, `Complex values '${e2}' and '${t2}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Pt(e2, t2));
  };
  function Jt(e2, t2, n2) {
    return typeof e2 == "number" && typeof t2 == "number" && typeof n2 == "number" ? V(e2, t2, n2) : Ut(e2)(e2, t2);
  }
  var Yt = (e2) => {
    let t2 = ({ timestamp: t3 }) => e2(t3);
    return {
      start: (e3 = true) => j.update(t2, e3),
      stop: () => M(t2),
      now: () => N.isProcessing ? N.timestamp : P.now()
    };
  };
  var Xt = (e2, t2, n2 = 10) => {
    let r2 = "", i2 = Math.max(Math.round(t2 / n2), 2);
    for (let t3 = 0; t3 < i2; t3++) r2 += Math.round(e2(t3 / (i2 - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r2.substring(0, r2.length - 2)})`;
  };
  var Zt = 2e4;
  function Qt(e2) {
    let t2 = 0, n2 = e2.next(t2);
    for (; !n2.done && t2 < 2e4; ) t2 += 50, n2 = e2.next(t2);
    return t2 >= 2e4 ? Infinity : t2;
  }
  function $t(e2, t2 = 100, n2) {
    let r2 = n2({
      ...e2,
      keyframes: [0, t2]
    }), i2 = Math.min(Qt(r2), Zt);
    return {
      type: "keyframes",
      ease: (e3) => r2.next(i2 * e3).value / t2,
      duration: /* @__PURE__ */ A(i2)
    };
  }
  var H = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: {
      granular: 0.01,
      default: 2
    },
    restDelta: {
      granular: 5e-3,
      default: 0.5
    },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1
  };
  function en(e2, t2) {
    return e2 * Math.sqrt(1 - t2 * t2);
  }
  var tn = 12;
  function nn(e2, t2, n2) {
    let r2 = n2;
    for (let n3 = 1; n3 < tn; n3++) r2 -= e2(r2) / t2(r2);
    return r2;
  }
  var rn = 1e-3;
  function an({ duration: e2 = H.duration, bounce: t2 = H.bounce, velocity: n2 = H.velocity, mass: r2 = H.mass }) {
    let i2, a2;
    se(e2 <= /* @__PURE__ */ k(H.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let o2 = 1 - t2;
    o2 = T(H.minDamping, H.maxDamping, o2), e2 = T(H.minDuration, H.maxDuration, /* @__PURE__ */ A(e2)), o2 < 1 ? (i2 = (t3) => {
      let r3 = t3 * o2, i3 = r3 * e2, a3 = r3 - n2, s3 = en(t3, o2), c3 = Math.exp(-i3);
      return rn - a3 / s3 * c3;
    }, a2 = (t3) => {
      let r3 = t3 * o2 * e2, a3 = r3 * n2 + n2, s3 = o2 ** 2 * t3 ** 2 * e2, c3 = Math.exp(-r3), l2 = en(t3 ** 2, o2);
      return (-i2(t3) + rn > 0 ? -1 : 1) * ((a3 - s3) * c3) / l2;
    }) : (i2 = (t3) => -1e-3 + Math.exp(-t3 * e2) * ((t3 - n2) * e2 + 1), a2 = (t3) => Math.exp(-t3 * e2) * ((n2 - t3) * (e2 * e2)));
    let s2 = 5 / e2, c2 = nn(i2, a2, s2);
    if (e2 = /* @__PURE__ */ k(e2), isNaN(c2)) return {
      stiffness: H.stiffness,
      damping: H.damping,
      duration: e2
    };
    {
      let t3 = c2 ** 2 * r2;
      return {
        stiffness: t3,
        damping: o2 * 2 * Math.sqrt(r2 * t3),
        duration: e2
      };
    }
  }
  var on = ["duration", "bounce"];
  var sn = [
    "stiffness",
    "damping",
    "mass"
  ];
  function cn(e2, t2) {
    return t2.some((t3) => e2[t3] !== void 0);
  }
  function ln(e2) {
    let t2 = {
      velocity: H.velocity,
      stiffness: H.stiffness,
      damping: H.damping,
      mass: H.mass,
      isResolvedFromDuration: false,
      ...e2
    };
    if (!cn(e2, sn) && cn(e2, on)) if (t2.velocity = 0, e2.visualDuration) {
      let n2 = e2.visualDuration, r2 = 2 * Math.PI / (n2 * 1.2), i2 = r2 * r2, a2 = 2 * T(0.05, 1, 1 - (e2.bounce || 0)) * Math.sqrt(i2);
      t2 = {
        ...t2,
        mass: H.mass,
        stiffness: i2,
        damping: a2
      };
    } else {
      let n2 = an({
        ...e2,
        velocity: 0
      });
      t2 = {
        ...t2,
        ...n2,
        mass: H.mass
      }, t2.isResolvedFromDuration = true;
    }
    return t2;
  }
  function un(e2 = H.visualDuration, t2 = H.bounce) {
    let n2 = typeof e2 == "object" ? e2 : {
      visualDuration: e2,
      keyframes: [0, 1],
      bounce: t2
    }, { restSpeed: r2, restDelta: i2 } = n2, a2 = n2.keyframes[0], o2 = n2.keyframes[n2.keyframes.length - 1], s2 = {
      done: false,
      value: a2
    }, { stiffness: c2, damping: l2, mass: u2, duration: d2, velocity: f2, isResolvedFromDuration: p2 } = ln({
      ...n2,
      velocity: -/* @__PURE__ */ A(n2.velocity || 0)
    }), m2 = f2 || 0, h2 = l2 / (2 * Math.sqrt(c2 * u2)), g2 = o2 - a2, _2 = /* @__PURE__ */ A(Math.sqrt(c2 / u2)), v2 = Math.abs(g2) < 5;
    r2 || (r2 = v2 ? H.restSpeed.granular : H.restSpeed.default), i2 || (i2 = v2 ? H.restDelta.granular : H.restDelta.default);
    let y2, b2, x2, S2, C2, ee2;
    if (h2 < 1) x2 = en(_2, h2), S2 = (m2 + h2 * _2 * g2) / x2, y2 = (e3) => {
      let t3 = Math.exp(-h2 * _2 * e3);
      return o2 - t3 * (S2 * Math.sin(x2 * e3) + g2 * Math.cos(x2 * e3));
    }, C2 = h2 * _2 * S2 + g2 * x2, ee2 = h2 * _2 * g2 - S2 * x2, b2 = (e3) => Math.exp(-h2 * _2 * e3) * (C2 * Math.sin(x2 * e3) + ee2 * Math.cos(x2 * e3));
    else if (h2 === 1) {
      y2 = (e4) => o2 - Math.exp(-_2 * e4) * (g2 + (m2 + _2 * g2) * e4);
      let e3 = m2 + _2 * g2;
      b2 = (t3) => Math.exp(-_2 * t3) * (_2 * e3 * t3 - m2);
    } else {
      let e3 = _2 * Math.sqrt(h2 * h2 - 1);
      y2 = (t4) => {
        let n4 = Math.exp(-h2 * _2 * t4), r4 = Math.min(e3 * t4, 300);
        return o2 - n4 * ((m2 + h2 * _2 * g2) * Math.sinh(r4) + e3 * g2 * Math.cosh(r4)) / e3;
      };
      let t3 = (m2 + h2 * _2 * g2) / e3, n3 = h2 * _2 * t3 - g2 * e3, r3 = h2 * _2 * g2 - t3 * e3;
      b2 = (t4) => {
        let i3 = Math.exp(-h2 * _2 * t4), a3 = Math.min(e3 * t4, 300);
        return i3 * (n3 * Math.sinh(a3) + r3 * Math.cosh(a3));
      };
    }
    let te2 = {
      calculatedDuration: p2 && d2 || null,
      velocity: (e3) => /* @__PURE__ */ k(b2(e3)),
      next: (e3) => {
        if (!p2 && h2 < 1) {
          let t4 = Math.exp(-h2 * _2 * e3), n3 = Math.sin(x2 * e3), a3 = Math.cos(x2 * e3), c3 = o2 - t4 * (S2 * n3 + g2 * a3), l3 = /* @__PURE__ */ k(t4 * (C2 * n3 + ee2 * a3));
          return s2.done = Math.abs(l3) <= r2 && Math.abs(o2 - c3) <= i2, s2.value = s2.done ? o2 : c3, s2;
        }
        let t3 = y2(e3);
        if (p2) s2.done = e3 >= d2;
        else {
          let n3 = /* @__PURE__ */ k(b2(e3));
          s2.done = Math.abs(n3) <= r2 && Math.abs(o2 - t3) <= i2;
        }
        return s2.value = s2.done ? o2 : t3, s2;
      },
      toString: () => {
        let e3 = Math.min(Qt(te2), Zt), t3 = Xt((t4) => te2.next(e3 * t4).value, e3, 30);
        return e3 + "ms " + t3;
      },
      toTransition: () => {
      }
    };
    return te2;
  }
  un.applyToOptions = (e2) => {
    let t2 = $t(e2, 100, un);
    return e2.ease = t2.ease, e2.duration = /* @__PURE__ */ k(t2.duration), e2.type = "keyframes", e2;
  };
  var dn = 5;
  function fn(e2, t2, n2) {
    let r2 = Math.max(t2 - dn, 0);
    return /* @__PURE__ */ he(n2 - e2(r2), t2 - r2);
  }
  function pn({ keyframes: e2, velocity: t2 = 0, power: n2 = 0.8, timeConstant: r2 = 325, bounceDamping: i2 = 10, bounceStiffness: a2 = 500, modifyTarget: o2, min: s2, max: c2, restDelta: l2 = 0.5, restSpeed: u2 }) {
    let d2 = e2[0], f2 = {
      done: false,
      value: d2
    }, p2 = (e3) => s2 !== void 0 && e3 < s2 || c2 !== void 0 && e3 > c2, m2 = (e3) => s2 === void 0 ? c2 : c2 === void 0 || Math.abs(s2 - e3) < Math.abs(c2 - e3) ? s2 : c2, h2 = n2 * t2, g2 = d2 + h2, _2 = o2 === void 0 ? g2 : o2(g2);
    _2 !== g2 && (h2 = _2 - d2);
    let v2 = (e3) => -h2 * Math.exp(-e3 / r2), y2 = (e3) => _2 + v2(e3), b2 = (e3) => {
      let t3 = v2(e3), n3 = y2(e3);
      f2.done = Math.abs(t3) <= l2, f2.value = f2.done ? _2 : n3;
    }, x2, S2, C2 = (e3) => {
      p2(f2.value) && (x2 = e3, S2 = un({
        keyframes: [f2.value, m2(f2.value)],
        velocity: fn(y2, e3, f2.value),
        damping: i2,
        stiffness: a2,
        restDelta: l2,
        restSpeed: u2
      }));
    };
    return C2(0), {
      calculatedDuration: null,
      next: (e3) => {
        let t3 = false;
        return !S2 && x2 === void 0 && (t3 = true, b2(e3), C2(e3)), x2 !== void 0 && e3 >= x2 ? S2.next(e3 - x2) : (!t3 && b2(e3), f2);
      }
    };
  }
  function mn(e2, t2, n2) {
    let r2 = [], i2 = n2 || D.mix || Jt, a2 = e2.length - 1;
    for (let n3 = 0; n3 < a2; n3++) {
      let a3 = i2(e2[n3], e2[n3 + 1]);
      t2 && (a3 = fe(Array.isArray(t2) ? t2[n3] || O : t2, a3)), r2.push(a3);
    }
    return r2;
  }
  function hn(e2, t2, { clamp: n2 = true, ease: r2, mixer: i2 } = {}) {
    let a2 = e2.length;
    if (E(a2 === t2.length, "Both input and output ranges must be the same length", "range-length"), a2 === 1) return () => t2[0];
    if (a2 === 2 && t2[0] === t2[1]) return () => t2[1];
    let o2 = e2[0] === e2[1];
    e2[0] > e2[a2 - 1] && (e2 = [...e2].reverse(), t2 = [...t2].reverse());
    let s2 = mn(t2, r2, i2), c2 = s2.length, l2 = (n3) => {
      if (o2 && n3 < e2[0]) return t2[0];
      let r3 = 0;
      if (c2 > 1) for (; r3 < e2.length - 2 && !(n3 < e2[r3 + 1]); r3++) ;
      let i3 = /* @__PURE__ */ pe(e2[r3], e2[r3 + 1], n3);
      return s2[r3](i3);
    };
    return n2 ? (t3) => l2(T(e2[0], e2[a2 - 1], t3)) : l2;
  }
  function gn(e2, t2) {
    let n2 = e2[e2.length - 1];
    for (let r2 = 1; r2 <= t2; r2++) {
      let i2 = /* @__PURE__ */ pe(0, t2, r2);
      e2.push(V(n2, 1, i2));
    }
  }
  function _n(e2) {
    let t2 = [0];
    return gn(t2, e2.length - 1), t2;
  }
  function vn(e2, t2) {
    return e2.map((e3) => e3 * t2);
  }
  function yn(e2, t2) {
    return e2.map(() => t2 || Pe).splice(0, e2.length - 1);
  }
  function bn({ duration: e2 = 300, keyframes: t2, times: n2, ease: r2 = "easeInOut" }) {
    let i2 = /* @__PURE__ */ Fe(r2) ? r2.map(ze) : ze(r2), a2 = {
      done: false,
      value: t2[0]
    }, o2 = hn(vn(n2 && n2.length === t2.length ? n2 : _n(t2), e2), t2, { ease: Array.isArray(i2) ? i2 : yn(t2, i2) });
    return {
      calculatedDuration: e2,
      next: (t3) => (a2.value = o2(t3), a2.done = t3 >= e2, a2)
    };
  }
  var xn = (e2) => e2 !== null;
  function Sn(e2, { repeat: t2, repeatType: n2 = "loop" }, r2, i2 = 1) {
    let a2 = e2.filter(xn), o2 = i2 < 0 || t2 && n2 !== "loop" && t2 % 2 == 1 ? 0 : a2.length - 1;
    return !o2 || r2 === void 0 ? a2[o2] : r2;
  }
  var Cn = {
    decay: pn,
    inertia: pn,
    tween: bn,
    keyframes: bn,
    spring: un
  };
  function wn(e2) {
    typeof e2.type == "string" && (e2.type = Cn[e2.type]);
  }
  var Tn = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((e2) => {
        this.resolve = e2;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(e2, t2) {
      return this.finished.then(e2, t2);
    }
  };
  var En = (e2) => e2 / 100;
  var Dn = class extends Tn {
    constructor(e2) {
      super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
        done: false,
        value: void 0
      }, this.stop = () => {
        let { motionValue: e3 } = this.options;
        e3 && e3.updatedAt !== P.now() && this.tick(P.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
      }, this.options = e2, this.initAnimation(), this.play(), e2.autoplay === false && this.pause();
    }
    initAnimation() {
      let { options: e2 } = this;
      wn(e2);
      let { type: t2 = bn, repeat: n2 = 0, repeatDelay: r2 = 0, repeatType: i2, velocity: a2 = 0 } = e2, { keyframes: o2 } = e2, s2 = t2 || bn;
      s2 !== bn && E(o2.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o2}`, "spring-two-frames"), s2 !== bn && typeof o2[0] != "number" && (this.mixKeyframes = fe(En, Jt(o2[0], o2[1])), o2 = [0, 100]);
      let c2 = s2({
        ...e2,
        keyframes: o2
      });
      i2 === "mirror" && (this.mirroredGenerator = s2({
        ...e2,
        keyframes: [...o2].reverse(),
        velocity: -a2
      })), c2.calculatedDuration === null && (c2.calculatedDuration = Qt(c2));
      let { calculatedDuration: l2 } = c2;
      this.calculatedDuration = l2, this.resolvedDuration = l2 + r2, this.totalDuration = this.resolvedDuration * (n2 + 1) - r2, this.generator = c2;
    }
    updateTime(e2) {
      let t2 = Math.round(e2 - this.startTime) * this.playbackSpeed;
      this.holdTime === null ? this.currentTime = t2 : this.currentTime = this.holdTime;
    }
    tick(e2, t2 = false) {
      let { generator: n2, totalDuration: r2, mixKeyframes: i2, mirroredGenerator: a2, resolvedDuration: o2, calculatedDuration: s2 } = this;
      if (this.startTime === null) return n2.next(0);
      let { delay: c2 = 0, keyframes: l2, repeat: u2, repeatType: d2, repeatDelay: f2, type: p2, onUpdate: m2, finalKeyframe: h2 } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e2) : this.speed < 0 && (this.startTime = Math.min(e2 - r2 / this.speed, this.startTime)), t2 ? this.currentTime = e2 : this.updateTime(e2);
      let g2 = this.currentTime - c2 * (this.playbackSpeed >= 0 ? 1 : -1), _2 = this.playbackSpeed >= 0 ? g2 < 0 : g2 > r2;
      this.currentTime = Math.max(g2, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r2);
      let v2 = this.currentTime, y2 = n2;
      if (u2) {
        let e3 = Math.min(this.currentTime, r2) / o2, t3 = Math.floor(e3), n3 = e3 % 1;
        !n3 && e3 >= 1 && (n3 = 1), n3 === 1 && t3--, t3 = Math.min(t3, u2 + 1), t3 % 2 && (d2 === "reverse" ? (n3 = 1 - n3, f2 && (n3 -= f2 / o2)) : d2 === "mirror" && (y2 = a2)), v2 = T(0, 1, n3) * o2;
      }
      let b2;
      _2 ? (this.delayState.value = l2[0], b2 = this.delayState) : b2 = y2.next(v2), i2 && !_2 && (b2.value = i2(b2.value));
      let { done: x2 } = b2;
      !_2 && s2 !== null && (x2 = this.playbackSpeed >= 0 ? this.currentTime >= r2 : this.currentTime <= 0);
      let S2 = this.holdTime === null && (this.state === "finished" || this.state === "running" && x2);
      return S2 && p2 !== pn && (b2.value = Sn(l2, this.options, h2, this.speed)), m2 && m2(b2.value), S2 && this.finish(), b2;
    }
    then(e2, t2) {
      return this.finished.then(e2, t2);
    }
    get duration() {
      return /* @__PURE__ */ A(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e2 = 0 } = this.options || {};
      return this.duration + /* @__PURE__ */ A(e2);
    }
    get time() {
      return /* @__PURE__ */ A(this.currentTime);
    }
    set time(e2) {
      e2 = /* @__PURE__ */ k(e2), this.currentTime = e2, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e2 : this.driver && (this.startTime = this.driver.now() - e2 / this.playbackSpeed), this.driver ? this.driver.start(false) : (this.startTime = 0, this.state = "paused", this.holdTime = e2, this.tick(e2));
    }
    getGeneratorVelocity() {
      let e2 = this.currentTime;
      if (e2 <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(e2);
      let t2 = this.generator.next(e2).value;
      return fn((e3) => this.generator.next(e3).value, e2, t2);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e2) {
      let t2 = this.playbackSpeed !== e2;
      t2 && this.driver && this.updateTime(P.now()), this.playbackSpeed = e2, t2 && this.driver && (this.time = /* @__PURE__ */ A(this.currentTime));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e2 = Yt, startTime: t2 } = this.options;
      this.driver || (this.driver = e2((e3) => this.tick(e3))), this.options.onPlay?.();
      let n2 = this.driver.now();
      this.state === "finished" ? (this.updateFinished(), this.startTime = n2) : this.holdTime === null ? this.startTime || (this.startTime = t2 ?? n2) : this.startTime = n2 - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      this.state = "paused", this.updateTime(P.now()), this.holdTime = this.currentTime;
    }
    complete() {
      this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
    }
    finish() {
      this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
    }
    cancel() {
      this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
    }
    stopDriver() {
      this.driver && (this.driver = (this.driver.stop(), void 0));
    }
    sample(e2) {
      return this.startTime = 0, this.tick(e2, true);
    }
    attachTimeline(e2) {
      return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e2.observe(this);
    }
  };
  function On(e2) {
    for (let t2 = 1; t2 < e2.length; t2++) e2[t2] ?? (e2[t2] = e2[t2 - 1]);
  }
  var kn = (e2) => e2 * 180 / Math.PI;
  var An = (e2) => Mn(kn(Math.atan2(e2[1], e2[0])));
  var jn = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e2) => (Math.abs(e2[0]) + Math.abs(e2[3])) / 2,
    rotate: An,
    rotateZ: An,
    skewX: (e2) => kn(Math.atan(e2[1])),
    skewY: (e2) => kn(Math.atan(e2[2])),
    skew: (e2) => (Math.abs(e2[1]) + Math.abs(e2[2])) / 2
  };
  var Mn = (e2) => (e2 %= 360, e2 < 0 && (e2 += 360), e2);
  var Nn = An;
  var Pn = (e2) => Math.sqrt(e2[0] * e2[0] + e2[1] * e2[1]);
  var Fn = (e2) => Math.sqrt(e2[4] * e2[4] + e2[5] * e2[5]);
  var In = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Pn,
    scaleY: Fn,
    scale: (e2) => (Pn(e2) + Fn(e2)) / 2,
    rotateX: (e2) => Mn(kn(Math.atan2(e2[6], e2[5]))),
    rotateY: (e2) => Mn(kn(Math.atan2(-e2[2], e2[0]))),
    rotateZ: Nn,
    rotate: Nn,
    skewX: (e2) => kn(Math.atan(e2[4])),
    skewY: (e2) => kn(Math.atan(e2[1])),
    skew: (e2) => (Math.abs(e2[1]) + Math.abs(e2[4])) / 2
  };
  function Ln(e2) {
    return +!!e2.includes("scale");
  }
  function Rn(e2, t2) {
    if (!e2 || e2 === "none") return Ln(t2);
    let n2 = e2.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r2, i2;
    if (n2) r2 = In, i2 = n2;
    else {
      let t3 = e2.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      r2 = jn, i2 = t3;
    }
    if (!i2) return Ln(t2);
    let a2 = r2[t2], o2 = i2[1].split(",").map(Bn);
    return typeof a2 == "function" ? a2(o2) : o2[a2];
  }
  var zn = (e2, t2) => {
    let { transform: n2 = "none" } = getComputedStyle(e2);
    return Rn(n2, t2);
  };
  function Bn(e2) {
    return parseFloat(e2.trim());
  }
  var Vn = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
  ];
  var Hn = /* @__PURE__ */ new Set([...Vn, "pathRotation"]);
  var Un = (e2) => e2 === $e || e2 === R;
  var Wn = /* @__PURE__ */ new Set([
    "x",
    "y",
    "z"
  ]);
  var Gn = Vn.filter((e2) => !Wn.has(e2));
  function Kn(e2) {
    let t2 = [];
    return Gn.forEach((n2) => {
      let r2 = e2.getValue(n2);
      r2 !== void 0 && (t2.push([n2, r2.get()]), r2.set(+!!n2.startsWith("scale")));
    }), t2;
  }
  var U = {
    width: ({ x: e2 }, { paddingLeft: t2 = "0", paddingRight: n2 = "0", boxSizing: r2 }) => {
      let i2 = e2.max - e2.min;
      return r2 === "border-box" ? i2 : i2 - parseFloat(t2) - parseFloat(n2);
    },
    height: ({ y: e2 }, { paddingTop: t2 = "0", paddingBottom: n2 = "0", boxSizing: r2 }) => {
      let i2 = e2.max - e2.min;
      return r2 === "border-box" ? i2 : i2 - parseFloat(t2) - parseFloat(n2);
    },
    top: (e2, { top: t2 }) => parseFloat(t2),
    left: (e2, { left: t2 }) => parseFloat(t2),
    bottom: ({ y: e2 }, { top: t2 }) => parseFloat(t2) + (e2.max - e2.min),
    right: ({ x: e2 }, { left: t2 }) => parseFloat(t2) + (e2.max - e2.min),
    x: (e2, { transform: t2 }) => Rn(t2, "x"),
    y: (e2, { transform: t2 }) => Rn(t2, "y")
  };
  U.translateX = U.x, U.translateY = U.y;
  var qn = /* @__PURE__ */ new Set();
  var Jn = false;
  var Yn = false;
  var Xn = false;
  function Zn() {
    if (Yn) {
      let e2 = Array.from(qn).filter((e3) => e3.needsMeasurement), t2 = new Set(e2.map((e3) => e3.element)), n2 = /* @__PURE__ */ new Map();
      t2.forEach((e3) => {
        let t3 = Kn(e3);
        t3.length && (n2.set(e3, t3), e3.render());
      }), e2.forEach((e3) => e3.measureInitialState()), t2.forEach((e3) => {
        e3.render();
        let t3 = n2.get(e3);
        t3 && t3.forEach(([t4, n3]) => {
          e3.getValue(t4)?.set(n3);
        });
      }), e2.forEach((e3) => e3.measureEndState()), e2.forEach((e3) => {
        e3.suspendedScrollY !== void 0 && window.scrollTo(0, e3.suspendedScrollY);
      });
    }
    Yn = false, Jn = false, qn.forEach((e2) => e2.complete(Xn)), qn.clear();
  }
  function Qn() {
    qn.forEach((e2) => {
      e2.readKeyframes(), e2.needsMeasurement && (Yn = true);
    });
  }
  function $n() {
    Xn = true, Qn(), Zn(), Xn = false;
  }
  var er = class {
    constructor(e2, t2, n2, r2, i2, a2 = false) {
      this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...e2], this.onComplete = t2, this.name = n2, this.motionValue = r2, this.element = i2, this.isAsync = a2;
    }
    scheduleResolve() {
      this.state = "scheduled", this.isAsync ? (qn.add(this), Jn || (Jn = true, j.read(Qn), j.resolveKeyframes(Zn))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      let { unresolvedKeyframes: e2, name: t2, element: n2, motionValue: r2 } = this;
      if (e2[0] === null) {
        let i2 = r2?.get(), a2 = e2[e2.length - 1];
        if (i2 !== void 0) e2[0] = i2;
        else if (n2 && t2) {
          let r3 = n2.readValue(t2, a2);
          r3 != null && (e2[0] = r3);
        }
        e2[0] === void 0 && (e2[0] = a2), r2 && i2 === void 0 && r2.set(e2[0]);
      }
      On(e2);
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(e2 = false) {
      this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e2), qn.delete(this);
    }
    cancel() {
      this.state === "scheduled" && (qn.delete(this), this.state = "pending");
    }
    resume() {
      this.state === "pending" && this.scheduleResolve();
    }
  };
  var tr = (e2) => e2.startsWith("--");
  function nr(e2, t2, n2) {
    tr(t2) ? e2.style.setProperty(t2, n2) : e2.style[t2] = n2;
  }
  var rr = {};
  function ir(e2, t2) {
    let n2 = /* @__PURE__ */ de(e2);
    return () => rr[t2] ?? n2();
  }
  var ar = /* @__PURE__ */ ir(() => window.ScrollTimeline !== void 0, "scrollTimeline");
  var or = /* @__PURE__ */ ir(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return false;
    }
    return true;
  }, "linearEasing");
  var sr = ([e2, t2, n2, r2]) => `cubic-bezier(${e2}, ${t2}, ${n2}, ${r2})`;
  var cr = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /* @__PURE__ */ sr([
      0,
      0.65,
      0.55,
      1
    ]),
    circOut: /* @__PURE__ */ sr([
      0.55,
      0,
      1,
      0.45
    ]),
    backIn: /* @__PURE__ */ sr([
      0.31,
      0.01,
      0.66,
      -0.59
    ]),
    backOut: /* @__PURE__ */ sr([
      0.33,
      1.53,
      0.69,
      0.99
    ])
  };
  function lr(e2, t2) {
    if (e2) return typeof e2 == "function" ? or() ? Xt(e2, t2) : "ease-out" : /* @__PURE__ */ Ie(e2) ? sr(e2) : Array.isArray(e2) ? e2.map((e3) => lr(e3, t2) || cr.easeOut) : cr[e2];
  }
  function ur(e2, t2, n2, { delay: r2 = 0, duration: i2 = 300, repeat: a2 = 0, repeatType: o2 = "loop", ease: s2 = "easeOut", times: c2 } = {}, l2 = void 0) {
    let u2 = { [t2]: n2 };
    c2 && (u2.offset = c2);
    let d2 = lr(s2, i2);
    Array.isArray(d2) && (u2.easing = d2);
    let f2 = {
      delay: r2,
      duration: i2,
      easing: Array.isArray(d2) ? "linear" : d2,
      fill: "both",
      iterations: a2 + 1,
      direction: o2 === "reverse" ? "alternate" : "normal"
    };
    return l2 && (f2.pseudoElement = l2), e2.animate(u2, f2);
  }
  function dr(e2) {
    return typeof e2 == "function" && "applyToOptions" in e2;
  }
  function fr({ type: e2, ...t2 }) {
    return dr(e2) && or() ? e2.applyToOptions(t2) : (t2.duration ?? (t2.duration = 300), t2.ease ?? (t2.ease = "easeOut"), t2);
  }
  var pr = class extends Tn {
    constructor(e2) {
      if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !e2) return;
      let { element: t2, name: n2, keyframes: r2, pseudoElement: i2, allowFlatten: a2 = false, finalKeyframe: o2, onComplete: s2 } = e2;
      this.isPseudoElement = !!i2, this.allowFlatten = a2, this.options = e2, E(typeof e2.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
      let c2 = fr(e2);
      this.animation = ur(t2, n2, r2, c2, i2), c2.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !i2) {
          let e3 = Sn(r2, this.options, o2, this.speed);
          this.updateMotionValue && this.updateMotionValue(e3), nr(t2, n2, e3), this.animation.cancel();
        }
        s2?.(), this.notifyFinished();
      };
    }
    play() {
      this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {
      }
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = true;
      let { state: e2 } = this;
      e2 === "idle" || e2 === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let e2 = this.options?.element;
      !this.isPseudoElement && e2?.isConnected && this.animation.commitStyles?.();
    }
    get duration() {
      let e2 = this.animation.effect?.getComputedTiming?.().duration || 0;
      return /* @__PURE__ */ A(Number(e2));
    }
    get iterationDuration() {
      let { delay: e2 = 0 } = this.options || {};
      return this.duration + /* @__PURE__ */ A(e2);
    }
    get time() {
      return /* @__PURE__ */ A(Number(this.animation.currentTime) || 0);
    }
    set time(e2) {
      let t2 = this.finishedTime !== null;
      this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ k(e2), t2 && this.animation.pause();
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e2) {
      e2 < 0 && (this.finishedTime = null), this.animation.playbackRate = e2;
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : "finished";
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e2) {
      this.manualStartTime = this.animation.startTime = e2;
    }
    attachTimeline({ timeline: e2, rangeStart: t2, rangeEnd: n2, observe: r2 }) {
      return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e2 && ar() ? (this.animation.timeline = e2, t2 && (this.animation.rangeStart = t2), n2 && (this.animation.rangeEnd = n2), O) : r2(this);
    }
  };
  var mr = {
    anticipate: Oe,
    backInOut: De,
    circInOut: je
  };
  function hr(e2) {
    return e2 in mr;
  }
  function gr(e2) {
    typeof e2.ease == "string" && hr(e2.ease) && (e2.ease = mr[e2.ease]);
  }
  var _r = 10;
  var vr = class extends pr {
    constructor(e2) {
      gr(e2), wn(e2), super(e2), e2.startTime !== void 0 && e2.autoplay !== false && (this.startTime = e2.startTime), this.options = e2;
    }
    updateMotionValue(e2) {
      let { motionValue: t2, onUpdate: n2, onComplete: r2, element: i2, ...a2 } = this.options;
      if (!t2) return;
      if (e2 !== void 0) {
        t2.set(e2);
        return;
      }
      let o2 = new Dn({
        ...a2,
        autoplay: false
      }), s2 = Math.max(_r, P.now() - this.startTime), c2 = T(0, _r, s2 - _r), l2 = o2.sample(s2).value, { name: u2 } = this.options;
      i2 && u2 && nr(i2, u2, l2), t2.setWithVelocity(o2.sample(Math.max(0, s2 - c2)).value, l2, c2), o2.stop();
    }
  };
  var yr = (e2, t2) => t2 !== "zIndex" && !!(typeof e2 == "number" || Array.isArray(e2) || typeof e2 == "string" && (B.test(e2) || e2 === "0") && !e2.startsWith("url("));
  function br(e2) {
    let t2 = e2[0];
    if (e2.length === 1) return true;
    for (let n2 = 0; n2 < e2.length; n2++) if (e2[n2] !== t2) return true;
  }
  function xr(e2, t2, n2, r2) {
    let i2 = e2[0];
    if (i2 === null) return false;
    if (t2 === "display" || t2 === "visibility") return true;
    let a2 = e2[e2.length - 1], o2 = yr(i2, t2), s2 = yr(a2, t2);
    return se(o2 === s2, `You are trying to animate ${t2} from "${i2}" to "${a2}". "${o2 ? a2 : i2}" is not an animatable value.`, "value-not-animatable"), !o2 || !s2 ? false : br(e2) || (n2 === "spring" || dr(n2)) && r2;
  }
  function Sr(e2) {
    e2.duration = 0, e2.type = "keyframes";
  }
  var Cr = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
  ]);
  var wr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
  function Tr(e2) {
    for (let t2 = 0; t2 < e2.length; t2++) if (typeof e2[t2] == "string" && wr.test(e2[t2])) return true;
    return false;
  }
  var Er = /* @__PURE__ */ new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor"
  ]);
  var Dr = /* @__PURE__ */ de(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function Or(e2) {
    let { motionValue: t2, name: n2, repeatDelay: r2, repeatType: i2, damping: a2, type: o2, keyframes: s2 } = e2;
    if (!(t2?.owner?.current instanceof HTMLElement)) return false;
    let { onUpdate: c2, transformTemplate: l2 } = t2.owner.getProps();
    return Dr() && n2 && (Cr.has(n2) || Er.has(n2) && Tr(s2)) && (n2 !== "transform" || !l2) && !c2 && !r2 && i2 !== "mirror" && a2 !== 0 && o2 !== "inertia";
  }
  var kr = 40;
  var Ar = class extends Tn {
    constructor({ autoplay: e2 = true, delay: t2 = 0, type: n2 = "keyframes", repeat: r2 = 0, repeatDelay: i2 = 0, repeatType: a2 = "loop", keyframes: o2, name: s2, motionValue: c2, element: l2, ...u2 }) {
      super(), this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
      }, this.createdAt = P.now();
      let d2 = {
        autoplay: e2,
        delay: t2,
        type: n2,
        repeat: r2,
        repeatDelay: i2,
        repeatType: a2,
        name: s2,
        motionValue: c2,
        element: l2,
        ...u2
      }, f2 = l2?.KeyframeResolver || er;
      this.keyframeResolver = new f2(o2, (e3, t3, n3) => this.onKeyframesResolved(e3, t3, d2, !n3), s2, c2, l2), this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(e2, t2, n2, r2) {
      this.keyframeResolver = void 0;
      let { name: i2, type: a2, velocity: o2, delay: s2, isHandoff: c2, onUpdate: l2 } = n2;
      this.resolvedAt = P.now();
      let u2 = true;
      xr(e2, i2, a2, o2) || (u2 = false, (D.instantAnimations || !s2) && l2?.(Sn(e2, n2, t2)), e2[0] = e2[e2.length - 1], Sr(n2), n2.repeat = 0);
      let d2 = {
        startTime: r2 ? this.resolvedAt && this.resolvedAt - this.createdAt > kr ? this.resolvedAt : this.createdAt : void 0,
        finalKeyframe: t2,
        ...n2,
        keyframes: e2
      }, f2 = u2 && !c2 && Or(d2), p2 = d2.motionValue?.owner?.current, m2;
      if (f2) try {
        m2 = new vr({
          ...d2,
          element: p2
        });
      } catch {
        m2 = new Dn(d2);
      }
      else m2 = new Dn(d2);
      m2.finished.then(() => {
        this.notifyFinished();
      }).catch(O), this.pendingTimeline && (this.pendingTimeline = (this.stopTimeline = m2.attachTimeline(this.pendingTimeline), void 0)), this._animation = m2;
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e2, t2) {
      return this.finished.finally(e2).then(() => {
      });
    }
    get animation() {
      return this._animation || (this.keyframeResolver?.resume(), $n()), this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e2) {
      this.animation.time = e2;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e2) {
      this.animation.speed = e2;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e2) {
      return this._animation ? this.stopTimeline = this.animation.attachTimeline(e2) : this.pendingTimeline = e2, () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
    }
  };
  function jr(e2, t2, n2, r2 = 0, i2 = 1) {
    let a2 = Array.from(e2).sort((e3, t3) => e3.sortNodePosition(t3)).indexOf(t2), o2 = e2.size, s2 = (o2 - 1) * r2;
    return typeof n2 == "function" ? n2(a2, o2) : i2 === 1 ? a2 * r2 : s2 - a2 * r2;
  }
  var Mr = 30;
  var Nr = (e2) => !isNaN(parseFloat(e2));
  var Pr = { current: void 0 };
  var Fr = class {
    constructor(e2, t2 = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e3) => {
        let t3 = P.now();
        if (this.updatedAt !== t3 && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e3), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e4 of this.dependents) e4.dirty();
      }, this.hasAnimated = false, this.setCurrent(e2), this.owner = t2.owner;
    }
    setCurrent(e2) {
      this.current = e2, this.updatedAt = P.now(), this.canTrackVelocity === null && e2 !== void 0 && (this.canTrackVelocity = Nr(this.current));
    }
    setPrevFrameValue(e2 = this.current) {
      this.prevFrameValue = e2, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(e2) {
      return _e(false, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e2);
    }
    on(e2, t2) {
      this.events[e2] || (this.events[e2] = new me());
      let n2 = this.events[e2].add(t2);
      return e2 === "change" ? () => {
        n2(), j.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : n2;
    }
    clearListeners() {
      for (let e2 in this.events) this.events[e2].clear();
    }
    attach(e2, t2) {
      this.passiveEffect = e2, this.stopPassiveEffect = t2;
    }
    set(e2) {
      this.passiveEffect ? this.passiveEffect(e2, this.updateAndNotify) : this.updateAndNotify(e2);
    }
    setWithVelocity(e2, t2, n2) {
      this.set(t2), this.prev = void 0, this.prevFrameValue = e2, this.prevUpdatedAt = this.updatedAt - n2;
    }
    jump(e2, t2 = true) {
      this.updateAndNotify(e2), this.prev = e2, this.prevUpdatedAt = this.prevFrameValue = void 0, t2 && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(e2) {
      this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e2);
    }
    removeDependent(e2) {
      this.dependents && this.dependents.delete(e2);
    }
    get() {
      return Pr.current && Pr.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e2 = P.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e2 - this.updatedAt > Mr) return 0;
      let t2 = Math.min(this.updatedAt - this.prevUpdatedAt, Mr);
      return /* @__PURE__ */ he(parseFloat(this.current) - parseFloat(this.prevFrameValue), t2);
    }
    start(e2) {
      return this.stop(), new Promise((t2) => {
        this.hasAnimated = true, this.animation = e2(t2), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
  function Ir(e2, t2) {
    return new Fr(e2, t2);
  }
  function Lr(e2, t2) {
    if (e2?.inherit && t2) {
      let { inherit: n2, ...r2 } = e2;
      return {
        ...t2,
        ...r2
      };
    }
    return e2;
  }
  function Rr(e2, t2) {
    let n2 = e2?.[t2] ?? e2?.default ?? e2;
    return n2 === e2 ? n2 : Lr(n2, e2);
  }
  var zr = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
  var Br = (e2) => ({
    type: "spring",
    stiffness: 550,
    damping: e2 === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  });
  var Vr = {
    type: "keyframes",
    duration: 0.8
  };
  var Hr = {
    type: "keyframes",
    ease: [
      0.25,
      0.1,
      0.35,
      1
    ],
    duration: 0.3
  };
  var Ur = (e2, { keyframes: t2 }) => t2.length > 2 ? Vr : Hn.has(e2) ? e2.startsWith("scale") ? Br(t2[1]) : zr : Hr;
  var Wr = /* @__PURE__ */ new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed"
  ]);
  function Gr(e2) {
    for (let t2 in e2) if (!Wr.has(t2)) return true;
    return false;
  }
  var Kr = (e2, t2, n2, r2 = {}, i2, a2) => (o2) => {
    let s2 = Rr(r2, e2) || {}, c2 = s2.delay || r2.delay || 0, { elapsed: l2 = 0 } = r2;
    l2 -= /* @__PURE__ */ k(c2);
    let u2 = {
      keyframes: Array.isArray(n2) ? n2 : [null, n2],
      ease: "easeOut",
      velocity: t2.getVelocity(),
      ...s2,
      delay: -l2,
      onUpdate: (e3) => {
        t2.set(e3), s2.onUpdate && s2.onUpdate(e3);
      },
      onComplete: () => {
        o2(), s2.onComplete && s2.onComplete();
      },
      name: e2,
      motionValue: t2,
      element: a2 ? void 0 : i2
    };
    Gr(s2) || Object.assign(u2, Ur(e2, u2)), u2.duration && (u2.duration = /* @__PURE__ */ k(u2.duration)), u2.repeatDelay && (u2.repeatDelay = /* @__PURE__ */ k(u2.repeatDelay)), u2.from !== void 0 && (u2.keyframes[0] = u2.from);
    let d2 = false;
    if ((u2.type === false || u2.duration === 0 && !u2.repeatDelay) && (Sr(u2), u2.delay === 0 && (d2 = true)), (D.instantAnimations || D.skipAnimations || i2?.shouldSkipAnimations || s2.skipAnimations) && (d2 = true, Sr(u2), u2.delay = 0), u2.allowFlatten = !s2.type && !s2.ease, d2 && !a2 && t2.get() !== void 0) {
      let e3 = Sn(u2.keyframes, s2);
      if (e3 !== void 0) {
        j.update(() => {
          u2.onUpdate(e3), u2.onComplete();
        });
        return;
      }
    }
    return s2.isSync ? new Dn(u2) : new Ar(u2);
  };
  var qr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function Jr(e2) {
    let t2 = qr.exec(e2);
    if (!t2) return [,];
    let [, n2, r2, i2] = t2;
    return [`--${n2 ?? r2}`, i2];
  }
  var Yr = 4;
  function Xr(e2, t2, n2 = 1) {
    E(n2 <= Yr, `Max CSS variable fallback depth detected in property "${e2}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    let [r2, i2] = Jr(e2);
    if (!r2) return;
    let a2 = window.getComputedStyle(t2).getPropertyValue(r2);
    if (a2) {
      let e3 = a2.trim();
      return ce(e3) ? parseFloat(e3) : e3;
    }
    return Xe(i2) ? Xr(i2, t2, n2 + 1) : i2;
  }
  function Zr(e2) {
    let t2 = [{}, {}];
    return e2?.values.forEach((e3, n2) => {
      t2[0][n2] = e3.get(), t2[1][n2] = e3.getVelocity();
    }), t2;
  }
  function Qr(e2, t2, n2, r2) {
    if (typeof t2 == "function") {
      let [i2, a2] = Zr(r2);
      t2 = t2(n2 === void 0 ? e2.custom : n2, i2, a2);
    }
    if (typeof t2 == "string" && (t2 = e2.variants && e2.variants[t2]), typeof t2 == "function") {
      let [i2, a2] = Zr(r2);
      t2 = t2(n2 === void 0 ? e2.custom : n2, i2, a2);
    }
    return t2;
  }
  function W(e2, t2, n2) {
    let r2 = e2.getProps();
    return Qr(r2, t2, n2 === void 0 ? r2.custom : n2, e2);
  }
  var $r = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Vn
  ]);
  var ei = (e2) => Array.isArray(e2);
  function ti(e2, t2, n2) {
    e2.hasValue(t2) ? e2.getValue(t2).set(n2) : e2.addValue(t2, Ir(n2));
  }
  function ni(e2) {
    return ei(e2) ? e2[e2.length - 1] || 0 : e2;
  }
  function ri(e2, t2) {
    let { transitionEnd: n2 = {}, transition: r2 = {}, ...i2 } = W(e2, t2) || {};
    i2 = {
      ...i2,
      ...n2
    };
    for (let t3 in i2) ti(e2, t3, ni(i2[t3]));
  }
  var G = (e2) => !!(e2 && e2.getVelocity);
  function ii(e2) {
    return !!(G(e2) && e2.add);
  }
  function ai(e2, t2) {
    let n2 = e2.getValue("willChange");
    if (ii(n2)) return n2.add(t2);
    if (!n2 && D.WillChange) {
      let n3 = new D.WillChange("auto");
      e2.addValue("willChange", n3), n3.add(t2);
    }
  }
  function oi(e2) {
    return e2.replace(/([A-Z])/g, (e3) => `-${e3.toLowerCase()}`);
  }
  var si = "data-" + oi("framerAppearId");
  function ci(e2) {
    return e2.props[si];
  }
  function li({ protectedKeys: e2, needsAnimating: t2 }, n2) {
    let r2 = e2.hasOwnProperty(n2) && t2[n2] !== true;
    return t2[n2] = false, r2;
  }
  function ui(e2, t2, { delay: n2 = 0, transitionOverride: r2, type: i2 } = {}) {
    let { transition: a2, transitionEnd: o2, ...s2 } = t2, c2 = e2.getDefaultTransition();
    a2 = a2 ? Lr(a2, c2) : c2;
    let l2 = a2?.reduceMotion, u2 = a2?.skipAnimations;
    r2 && (a2 = r2);
    let d2 = [], f2 = i2 && e2.animationState && e2.animationState.getState()[i2], p2 = a2?.path;
    p2 && p2.animateVisualElement(e2, s2, a2, n2, d2);
    for (let t3 in s2) {
      let r3 = e2.getValue(t3, e2.latestValues[t3] ?? null), i3 = s2[t3];
      if (i3 === void 0 || f2 && li(f2, t3)) continue;
      let o3 = {
        delay: n2,
        ...Rr(a2 || {}, t3)
      };
      u2 && (o3.skipAnimations = true);
      let c3 = r3.get();
      if (c3 !== void 0 && !r3.isAnimating() && !Array.isArray(i3) && i3 === c3 && !o3.velocity) {
        j.update(() => r3.set(i3));
        continue;
      }
      let p3 = false;
      if (window.MotionHandoffAnimation) {
        let n3 = ci(e2);
        if (n3) {
          let e3 = window.MotionHandoffAnimation(n3, t3, j);
          e3 !== null && (o3.startTime = e3, p3 = true);
        }
      }
      ai(e2, t3);
      let m2 = l2 ?? e2.shouldReduceMotion;
      r3.start(Kr(t3, r3, i3, m2 && $r.has(t3) ? { type: false } : o3, e2, p3));
      let h2 = r3.animation;
      h2 && d2.push(h2);
    }
    if (o2) {
      let t3 = () => j.update(() => {
        o2 && ri(e2, o2);
      });
      d2.length ? Promise.all(d2).then(t3) : t3();
    }
    return d2;
  }
  function di(e2, t2, n2 = {}) {
    let r2 = W(e2, t2, n2.type === "exit" ? e2.presenceContext?.custom : void 0), { transition: i2 = e2.getDefaultTransition() || {} } = r2 || {};
    n2.transitionOverride && (i2 = n2.transitionOverride);
    let a2 = r2 ? () => Promise.all(ui(e2, r2, n2)) : () => Promise.resolve(), o2 = e2.variantChildren && e2.variantChildren.size ? (r3 = 0) => {
      let { delayChildren: a3 = 0, staggerChildren: o3, staggerDirection: s3 } = i2;
      return fi(e2, t2, r3, a3, o3, s3, n2);
    } : () => Promise.resolve(), { when: s2 } = i2;
    if (s2) {
      let [e3, t3] = s2 === "beforeChildren" ? [a2, o2] : [o2, a2];
      return e3().then(() => t3());
    } else return Promise.all([a2(), o2(n2.delay)]);
  }
  function fi(e2, t2, n2 = 0, r2 = 0, i2 = 0, a2 = 1, o2) {
    let s2 = [];
    for (let c2 of e2.variantChildren) c2.notify("AnimationStart", t2), s2.push(di(c2, t2, {
      ...o2,
      delay: n2 + (typeof r2 == "function" ? 0 : r2) + jr(e2.variantChildren, c2, r2, i2, a2)
    }).then(() => c2.notify("AnimationComplete", t2)));
    return Promise.all(s2);
  }
  function pi(e2, t2, n2 = {}) {
    e2.notify("AnimationStart", t2);
    let r2;
    if (Array.isArray(t2)) {
      let i2 = t2.map((t3) => di(e2, t3, n2));
      r2 = Promise.all(i2);
    } else if (typeof t2 == "string") r2 = di(e2, t2, n2);
    else {
      let i2 = typeof t2 == "function" ? W(e2, t2, n2.custom) : t2;
      r2 = Promise.all(ui(e2, i2, n2));
    }
    return r2.then(() => {
      e2.notify("AnimationComplete", t2);
    });
  }
  var mi = {
    test: (e2) => e2 === "auto",
    parse: (e2) => e2
  };
  var hi = (e2) => (t2) => t2.test(e2);
  var gi = [
    $e,
    R,
    L,
    I,
    mt,
    pt,
    mi
  ];
  var _i = (e2) => gi.find(hi(e2));
  function vi(e2) {
    return typeof e2 == "number" ? e2 === 0 : e2 === null || e2 === "none" || e2 === "0" || ue(e2);
  }
  var yi = /* @__PURE__ */ new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
  ]);
  function bi(e2) {
    let [t2, n2] = e2.slice(0, -1).split("(");
    if (t2 === "drop-shadow") return e2;
    let [r2] = n2.match(rt) || [];
    if (!r2) return e2;
    let i2 = n2.replace(r2, ""), a2 = +!!yi.has(t2);
    return r2 !== n2 && (a2 *= 100), t2 + "(" + a2 + i2 + ")";
  }
  var xi = /\b([a-z-]*)\(.*?\)/gu;
  var Si = {
    ...B,
    getAnimatableNone: (e2) => {
      let t2 = e2.match(xi);
      return t2 ? t2.map(bi).join(" ") : e2;
    }
  };
  var Ci = {
    ...B,
    getAnimatableNone: (e2) => {
      let t2 = B.parse(e2);
      return B.createTransformer(e2)(t2.map((e3) => typeof e3 == "number" ? 0 : typeof e3 == "object" ? {
        ...e3,
        alpha: 1
      } : e3));
    }
  };
  var wi = {
    ...$e,
    transform: Math.round
  };
  var Ti = {
    borderWidth: R,
    borderTopWidth: R,
    borderRightWidth: R,
    borderBottomWidth: R,
    borderLeftWidth: R,
    borderRadius: R,
    borderTopLeftRadius: R,
    borderTopRightRadius: R,
    borderBottomRightRadius: R,
    borderBottomLeftRadius: R,
    width: R,
    maxWidth: R,
    height: R,
    maxHeight: R,
    top: R,
    right: R,
    bottom: R,
    left: R,
    inset: R,
    insetBlock: R,
    insetBlockStart: R,
    insetBlockEnd: R,
    insetInline: R,
    insetInlineStart: R,
    insetInlineEnd: R,
    padding: R,
    paddingTop: R,
    paddingRight: R,
    paddingBottom: R,
    paddingLeft: R,
    paddingBlock: R,
    paddingBlockStart: R,
    paddingBlockEnd: R,
    paddingInline: R,
    paddingInlineStart: R,
    paddingInlineEnd: R,
    margin: R,
    marginTop: R,
    marginRight: R,
    marginBottom: R,
    marginLeft: R,
    marginBlock: R,
    marginBlockStart: R,
    marginBlockEnd: R,
    marginInline: R,
    marginInlineStart: R,
    marginInlineEnd: R,
    fontSize: R,
    backgroundPositionX: R,
    backgroundPositionY: R,
    rotate: I,
    pathRotation: I,
    rotateX: I,
    rotateY: I,
    rotateZ: I,
    scale: tt,
    scaleX: tt,
    scaleY: tt,
    scaleZ: tt,
    skew: I,
    skewX: I,
    skewY: I,
    distance: R,
    translateX: R,
    translateY: R,
    translateZ: R,
    x: R,
    y: R,
    z: R,
    perspective: R,
    transformPerspective: R,
    opacity: et,
    originX: ht,
    originY: ht,
    originZ: R,
    zIndex: wi,
    fillOpacity: et,
    strokeOpacity: et,
    numOctaves: wi
  };
  var Ei = {
    ...Ti,
    color: z,
    backgroundColor: z,
    outlineColor: z,
    fill: z,
    stroke: z,
    borderColor: z,
    borderTopColor: z,
    borderRightColor: z,
    borderBottomColor: z,
    borderLeftColor: z,
    filter: Si,
    WebkitFilter: Si,
    mask: Ci,
    WebkitMask: Ci
  };
  var Di = (e2) => Ei[e2];
  var Oi = /* @__PURE__ */ new Set([Si, Ci]);
  function ki(e2, t2) {
    let n2 = Di(e2);
    return Oi.has(n2) || (n2 = B), n2.getAnimatableNone ? n2.getAnimatableNone(t2) : void 0;
  }
  var Ai = /* @__PURE__ */ new Set([
    "auto",
    "none",
    "0"
  ]);
  function ji(e2, t2, n2) {
    let r2 = 0, i2;
    for (; r2 < e2.length && !i2; ) {
      let t3 = e2[r2];
      typeof t3 == "string" && !Ai.has(t3) && Tt(t3).values.length && (i2 = e2[r2]), r2++;
    }
    if (i2 && n2) for (let r3 of t2) e2[r3] = ki(n2, i2);
  }
  var Mi = class extends er {
    constructor(e2, t2, n2, r2, i2) {
      super(e2, t2, n2, r2, i2, true);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e2, element: t2, name: n2 } = this;
      if (!t2 || !t2.current) return;
      super.readKeyframes();
      for (let n3 = 0; n3 < e2.length; n3++) {
        let r3 = e2[n3];
        if (typeof r3 == "string" && (r3 = r3.trim(), Xe(r3))) {
          let i3 = Xr(r3, t2.current);
          i3 !== void 0 && (e2[n3] = i3), n3 === e2.length - 1 && (this.finalKeyframe = r3);
        }
      }
      if (this.resolveNoneKeyframes(), !$r.has(n2) || e2.length !== 2) return;
      let [r2, i2] = e2, a2 = _i(r2), o2 = _i(i2);
      if (Qe(r2) !== Qe(i2) && U[n2]) {
        this.needsMeasurement = true;
        return;
      }
      if (a2 !== o2) if (Un(a2) && Un(o2)) for (let t3 = 0; t3 < e2.length; t3++) {
        let n3 = e2[t3];
        typeof n3 == "string" && (e2[t3] = parseFloat(n3));
      }
      else U[n2] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e2, name: t2 } = this, n2 = [];
      for (let t3 = 0; t3 < e2.length; t3++) (e2[t3] === null || vi(e2[t3])) && n2.push(t3);
      n2.length && ji(e2, n2, t2);
    }
    measureInitialState() {
      let { element: e2, unresolvedKeyframes: t2, name: n2 } = this;
      if (!e2 || !e2.current) return;
      n2 === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = U[n2](e2.measureViewportBox(), window.getComputedStyle(e2.current)), t2[0] = this.measuredOrigin;
      let r2 = t2[t2.length - 1];
      r2 !== void 0 && e2.getValue(n2, r2).jump(r2, false);
    }
    measureEndState() {
      let { element: e2, name: t2, unresolvedKeyframes: n2 } = this;
      if (!e2 || !e2.current) return;
      let r2 = e2.getValue(t2);
      r2 && r2.jump(this.measuredOrigin, false);
      let i2 = n2.length - 1, a2 = n2[i2];
      n2[i2] = U[t2](e2.measureViewportBox(), window.getComputedStyle(e2.current)), a2 !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a2), this.removedTransforms?.length && this.removedTransforms.forEach(([t3, n3]) => {
        e2.getValue(t3).set(n3);
      }), this.resolveNoneKeyframes();
    }
  };
  var Ni = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius"
  ];
  function Pi(e2, t2, n2) {
    if (e2 == null) return [];
    if (e2 instanceof EventTarget) return [e2];
    if (typeof e2 == "string") {
      let r2 = document;
      t2 && (r2 = t2.current);
      let i2 = n2?.[e2] ?? r2.querySelectorAll(e2);
      return i2 ? Array.from(i2) : [];
    }
    return Array.from(e2).filter((e3) => e3 != null);
  }
  var Fi = (e2, t2) => t2 && typeof e2 == "number" ? t2.transform(e2) : e2;
  function Ii(e2) {
    return le(e2) && "offsetHeight" in e2 && !("ownerSVGElement" in e2);
  }
  var { schedule: Li, cancel: Ri } = /* @__PURE__ */ Ue(queueMicrotask, false);
  var K = {
    x: false,
    y: false
  };
  function zi() {
    return K.x || K.y;
  }
  function Bi(e2) {
    return e2 === "x" || e2 === "y" ? K[e2] ? null : (K[e2] = true, () => {
      K[e2] = false;
    }) : K.x || K.y ? null : (K.x = K.y = true, () => {
      K.x = K.y = false;
    });
  }
  function Vi(e2, t2) {
    let n2 = Pi(e2), r2 = new AbortController();
    return [
      n2,
      {
        passive: true,
        ...t2,
        signal: r2.signal
      },
      () => r2.abort()
    ];
  }
  function Hi(e2) {
    return !(e2.pointerType === "touch" || zi());
  }
  function Ui(e2, t2, n2 = {}) {
    let [r2, i2, a2] = Vi(e2, n2);
    return r2.forEach((e3) => {
      let n3 = false, r3 = false, a3, o2 = () => {
        e3.removeEventListener("pointerleave", u2);
      }, s2 = (e4) => {
        a3 && (a3 = (a3(e4), void 0)), o2();
      }, c2 = (e4) => {
        n3 = false, window.removeEventListener("pointerup", c2), window.removeEventListener("pointercancel", c2), r3 && (r3 = false, s2(e4));
      }, l2 = () => {
        n3 = true, window.addEventListener("pointerup", c2, i2), window.addEventListener("pointercancel", c2, i2);
      }, u2 = (e4) => {
        if (e4.pointerType !== "touch") {
          if (n3) {
            r3 = true;
            return;
          }
          s2(e4);
        }
      };
      e3.addEventListener("pointerenter", (n4) => {
        if (!Hi(n4)) return;
        r3 = false;
        let o3 = t2(e3, n4);
        typeof o3 == "function" && (a3 = o3, e3.addEventListener("pointerleave", u2, i2));
      }, i2), e3.addEventListener("pointerdown", l2, i2);
    }), a2;
  }
  var Wi = (e2, t2) => t2 ? e2 === t2 || Wi(e2, t2.parentElement) : false;
  var Gi = (e2) => e2.pointerType === "mouse" ? typeof e2.button != "number" || e2.button <= 0 : e2.isPrimary !== false;
  var Ki = /* @__PURE__ */ new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
  ]);
  function qi(e2) {
    return Ki.has(e2.tagName) || e2.isContentEditable === true;
  }
  var Ji = /* @__PURE__ */ new Set([
    "INPUT",
    "SELECT",
    "TEXTAREA"
  ]);
  function Yi(e2) {
    return Ji.has(e2.tagName) || e2.isContentEditable === true;
  }
  var Xi = /* @__PURE__ */ new WeakSet();
  function Zi(e2) {
    return (t2) => {
      t2.key === "Enter" && e2(t2);
    };
  }
  function Qi(e2, t2) {
    e2.dispatchEvent(new PointerEvent("pointer" + t2, {
      isPrimary: true,
      bubbles: true
    }));
  }
  var $i = (e2, t2) => {
    let n2 = e2.currentTarget;
    if (!n2) return;
    let r2 = Zi(() => {
      if (Xi.has(n2)) return;
      Qi(n2, "down");
      let e3 = Zi(() => {
        Qi(n2, "up");
      });
      n2.addEventListener("keyup", e3, t2), n2.addEventListener("blur", () => Qi(n2, "cancel"), t2);
    });
    n2.addEventListener("keydown", r2, t2), n2.addEventListener("blur", () => n2.removeEventListener("keydown", r2), t2);
  };
  function ea(e2) {
    return Gi(e2) && !zi();
  }
  var ta = /* @__PURE__ */ new WeakSet();
  function na(e2, t2, n2 = {}) {
    let [r2, i2, a2] = Vi(e2, n2), o2 = (e3) => {
      let r3 = e3.currentTarget;
      if (!ea(e3) || ta.has(e3)) return;
      Xi.add(r3), n2.stopPropagation && ta.add(e3);
      let a3 = t2(r3, e3), o3 = {
        ...i2,
        capture: true
      }, s2 = (e4, t3) => {
        window.removeEventListener("pointerup", c2, o3), window.removeEventListener("pointercancel", l2, o3), Xi.has(r3) && Xi.delete(r3), ea(e4) && typeof a3 == "function" && a3(e4, { success: t3 });
      }, c2 = (e4) => {
        s2(e4, r3 === window || r3 === document || n2.useGlobalTarget || Wi(r3, e4.target));
      }, l2 = (e4) => {
        s2(e4, false);
      };
      window.addEventListener("pointerup", c2, o3), window.addEventListener("pointercancel", l2, o3);
    };
    return r2.forEach((e3) => {
      (n2.useGlobalTarget ? window : e3).addEventListener("pointerdown", o2, i2), Ii(e3) && (e3.addEventListener("focus", (e4) => $i(e4, i2)), !qi(e3) && !e3.hasAttribute("tabindex") && (e3.tabIndex = 0));
    }), a2;
  }
  function ra(e2) {
    return le(e2) && "ownerSVGElement" in e2;
  }
  var ia = /* @__PURE__ */ new WeakMap();
  var aa;
  var oa = (e2, t2, n2) => (r2, i2) => i2 && i2[0] ? i2[0][e2 + "Size"] : ra(r2) && "getBBox" in r2 ? r2.getBBox()[t2] : r2[n2];
  var sa = /* @__PURE__ */ oa("inline", "width", "offsetWidth");
  var ca = /* @__PURE__ */ oa("block", "height", "offsetHeight");
  function la({ target: e2, borderBoxSize: t2 }) {
    ia.get(e2)?.forEach((n2) => {
      n2(e2, {
        get width() {
          return sa(e2, t2);
        },
        get height() {
          return ca(e2, t2);
        }
      });
    });
  }
  function ua(e2) {
    e2.forEach(la);
  }
  function da() {
    typeof ResizeObserver > "u" || (aa = new ResizeObserver(ua));
  }
  function fa(e2, t2) {
    aa || da();
    let n2 = Pi(e2);
    return n2.forEach((e3) => {
      let n3 = ia.get(e3);
      n3 || (n3 = /* @__PURE__ */ new Set(), ia.set(e3, n3)), n3.add(t2), aa?.observe(e3);
    }), () => {
      n2.forEach((e3) => {
        let n3 = ia.get(e3);
        n3?.delete(t2), n3?.size || aa?.unobserve(e3);
      });
    };
  }
  var pa = /* @__PURE__ */ new Set();
  var ma;
  function ha() {
    ma = () => {
      let e2 = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        }
      };
      pa.forEach((t2) => t2(e2));
    }, window.addEventListener("resize", ma);
  }
  function ga(e2) {
    return pa.add(e2), ma || ha(), () => {
      pa.delete(e2), !pa.size && typeof ma == "function" && (window.removeEventListener("resize", ma), ma = void 0);
    };
  }
  function _a(e2, t2) {
    return typeof e2 == "function" ? ga(e2) : fa(e2, t2);
  }
  var va = {
    value: null,
    addProjectionMetrics: null
  };
  function ya(e2) {
    return ra(e2) && e2.tagName === "svg";
  }
  function ba(...e2) {
    let t2 = !Array.isArray(e2[0]), n2 = t2 ? 0 : -1, r2 = e2[0 + n2], i2 = e2[1 + n2], a2 = e2[2 + n2], o2 = e2[3 + n2], s2 = hn(i2, a2, o2);
    return t2 ? s2(r2) : s2;
  }
  function xa(e2, t2, n2 = {}) {
    let r2 = e2.get(), i2 = null, a2 = r2, o2, s2 = typeof r2 == "string" ? r2.replace(/[\d.-]/g, "") : void 0, c2 = () => {
      i2 && (i2 = (i2.stop(), null)), e2.animation = void 0;
    }, l2 = () => {
      let t3 = Ca(e2.get()), r3 = Ca(a2);
      if (t3 === r3) {
        c2();
        return;
      }
      let s3 = i2 ? i2.getGeneratorVelocity() : e2.getVelocity();
      c2(), i2 = new Dn({
        keyframes: [t3, r3],
        velocity: s3,
        type: "spring",
        restDelta: 1e-3,
        restSpeed: 0.01,
        ...n2,
        onUpdate: o2
      });
    }, u2 = () => {
      l2(), e2.animation = i2 ?? void 0, e2.events.animationStart?.notify(), i2?.then(() => {
        e2.animation = void 0, e2.events.animationComplete?.notify();
      });
    };
    if (e2.attach((e3, t3) => {
      a2 = e3, o2 = (e4) => t3(Sa(e4, s2)), j.postRender(u2);
    }, c2), G(t2)) {
      let r3 = n2.skipInitialAnimation === true, i3 = t2.on("change", (t3) => {
        r3 ? (r3 = false, e2.jump(Sa(t3, s2), false)) : e2.set(Sa(t3, s2));
      }), a3 = e2.on("destroy", i3);
      return () => {
        i3(), a3();
      };
    }
    return c2;
  }
  function Sa(e2, t2) {
    return t2 ? e2 + t2 : e2;
  }
  function Ca(e2) {
    return typeof e2 == "number" ? e2 : parseFloat(e2);
  }
  var wa = [
    ...gi,
    z,
    B
  ];
  var Ta = (e2) => wa.find(hi(e2));
  var Ea = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  });
  var Da = () => ({
    x: Ea(),
    y: Ea()
  });
  var Oa = () => ({
    min: 0,
    max: 0
  });
  var q = () => ({
    x: Oa(),
    y: Oa()
  });
  var ka = /* @__PURE__ */ new WeakMap();
  function Aa(e2) {
    return typeof e2 == "object" && !!e2 && typeof e2.start == "function";
  }
  function ja(e2) {
    return typeof e2 == "string" || Array.isArray(e2);
  }
  var Ma = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ];
  var Na = ["initial", ...Ma];
  function Pa(e2) {
    return Aa(e2.animate) || Na.some((t2) => ja(e2[t2]));
  }
  function Fa(e2) {
    return !!(Pa(e2) || e2.variants);
  }
  function Ia(e2, t2, n2) {
    for (let r2 in t2) {
      let i2 = t2[r2], a2 = n2[r2];
      if (G(i2)) e2.addValue(r2, i2);
      else if (G(a2)) e2.addValue(r2, Ir(i2, { owner: e2 }));
      else if (a2 !== i2) if (e2.hasValue(r2)) {
        let t3 = e2.getValue(r2);
        t3.liveStyle === true ? t3.jump(i2) : t3.hasAnimated || t3.set(i2);
      } else {
        let t3 = e2.getStaticValue(r2);
        e2.addValue(r2, Ir(t3 === void 0 ? i2 : t3, { owner: e2 }));
      }
    }
    for (let r2 in n2) t2[r2] === void 0 && e2.removeValue(r2);
    return t2;
  }
  var La = { current: null };
  var Ra = { current: false };
  var za = typeof window < "u";
  function Ba() {
    if (Ra.current = true, za) if (window.matchMedia) {
      let e2 = window.matchMedia("(prefers-reduced-motion)"), t2 = () => La.current = e2.matches;
      e2.addEventListener("change", t2), t2();
    } else La.current = false;
  }
  var Va = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  var Ha = {};
  function Ua(e2) {
    Ha = e2;
  }
  function Wa() {
    return Ha;
  }
  var Ga = class {
    scrapeMotionValuesFromProps(e2, t2, n2) {
      return {};
    }
    constructor({ parent: e2, props: t2, presenceContext: n2, reducedMotionConfig: r2, skipAnimations: i2, blockInitialAnimation: a2, visualState: o2 }, s2 = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = er, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        let e3 = P.now();
        this.renderScheduledAt < e3 && (this.renderScheduledAt = e3, j.render(this.render, false, true));
      };
      let { latestValues: c2, renderState: l2 } = o2;
      this.latestValues = c2, this.baseTarget = { ...c2 }, this.initialValues = t2.initial ? { ...c2 } : {}, this.renderState = l2, this.parent = e2, this.props = t2, this.presenceContext = n2, this.depth = e2 ? e2.depth + 1 : 0, this.reducedMotionConfig = r2, this.skipAnimationsConfig = i2, this.options = s2, this.blockInitialAnimation = !!a2, this.isControllingVariants = Pa(t2), this.isVariantNode = Fa(t2), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e2 && e2.current);
      let { willChange: u2, ...d2 } = this.scrapeMotionValuesFromProps(t2, {}, this);
      for (let e3 in d2) {
        let t3 = d2[e3];
        c2[e3] !== void 0 && G(t3) && t3.set(c2[e3]);
      }
    }
    mount(e2) {
      if (this.hasBeenMounted) for (let e3 in this.initialValues) this.values.get(e3)?.jump(this.initialValues[e3]), this.latestValues[e3] = this.initialValues[e3];
      this.current = e2, ka.set(e2, this), this.projection && !this.projection.instance && this.projection.mount(e2), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e3, t2) => this.bindToMotionValue(t2, e3)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = false : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = true : (Ra.current || Ba(), this.shouldReduceMotion = La.current), _e(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
    }
    unmount() {
      this.projection && this.projection.unmount(), M(this.notifyUpdate), M(this.render), this.valueSubscriptions.forEach((e2) => e2()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
      for (let e2 in this.events) this.events[e2].clear();
      for (let e2 in this.features) {
        let t2 = this.features[e2];
        t2 && (t2.unmount(), t2.isMounted = false);
      }
      this.current = null;
    }
    addChild(e2) {
      this.children.add(e2), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e2);
    }
    removeChild(e2) {
      this.children.delete(e2), this.enteringChildren && this.enteringChildren.delete(e2);
    }
    bindToMotionValue(e2, t2) {
      if (this.valueSubscriptions.has(e2) && this.valueSubscriptions.get(e2)(), t2.accelerate && Cr.has(e2) && this.current instanceof HTMLElement) {
        let { factory: n3, keyframes: r3, times: i3, ease: a2, duration: o2 } = t2.accelerate, s2 = new pr({
          element: this.current,
          name: e2,
          keyframes: r3,
          times: i3,
          ease: a2,
          duration: /* @__PURE__ */ k(o2)
        }), c2 = n3(s2);
        this.valueSubscriptions.set(e2, () => {
          c2(), s2.cancel();
        });
        return;
      }
      let n2 = Hn.has(e2);
      n2 && this.onBindTransform && this.onBindTransform();
      let r2 = t2.on("change", (t3) => {
        this.latestValues[e2] = t3, this.props.onUpdate && j.preRender(this.notifyUpdate), n2 && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
      }), i2;
      typeof window < "u" && window.MotionCheckAppearSync && (i2 = window.MotionCheckAppearSync(this, e2, t2)), this.valueSubscriptions.set(e2, () => {
        r2(), i2 && i2();
      });
    }
    sortNodePosition(e2) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== e2.type ? 0 : this.sortInstanceNodePosition(this.current, e2.current);
    }
    updateFeatures() {
      let e2 = "animation";
      for (e2 in Ha) {
        let t2 = Ha[e2];
        if (!t2) continue;
        let { isEnabled: n2, Feature: r2 } = t2;
        if (!this.features[e2] && r2 && n2(this.props) && (this.features[e2] = new r2(this)), this.features[e2]) {
          let t3 = this.features[e2];
          t3.isMounted ? t3.update() : (t3.mount(), t3.isMounted = true);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : q();
    }
    getStaticValue(e2) {
      return this.latestValues[e2];
    }
    setStaticValue(e2, t2) {
      this.latestValues[e2] = t2;
    }
    update(e2, t2) {
      (e2.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e2, this.prevPresenceContext = this.presenceContext, this.presenceContext = t2;
      for (let t3 = 0; t3 < Va.length; t3++) {
        let n2 = Va[t3];
        this.propEventSubscriptions[n2] && (this.propEventSubscriptions[n2](), delete this.propEventSubscriptions[n2]);
        let r2 = e2["on" + n2];
        r2 && (this.propEventSubscriptions[n2] = this.on(n2, r2));
      }
      this.prevMotionValues = Ia(this, this.scrapeMotionValuesFromProps(e2, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e2) {
      return this.props.variants ? this.props.variants[e2] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(e2) {
      let t2 = this.getClosestVariantNode();
      if (t2) return t2.variantChildren && t2.variantChildren.add(e2), () => t2.variantChildren.delete(e2);
    }
    addValue(e2, t2) {
      let n2 = this.values.get(e2);
      t2 !== n2 && (n2 && this.removeValue(e2), this.bindToMotionValue(e2, t2), this.values.set(e2, t2), this.latestValues[e2] = t2.get());
    }
    removeValue(e2) {
      this.values.delete(e2);
      let t2 = this.valueSubscriptions.get(e2);
      t2 && (t2(), this.valueSubscriptions.delete(e2)), delete this.latestValues[e2], this.removeValueFromRenderState(e2, this.renderState);
    }
    hasValue(e2) {
      return this.values.has(e2);
    }
    getValue(e2, t2) {
      if (this.props.values && this.props.values[e2]) return this.props.values[e2];
      let n2 = this.values.get(e2);
      return n2 === void 0 && t2 !== void 0 && (n2 = Ir(t2 === null ? void 0 : t2, { owner: this }), this.addValue(e2, n2)), n2;
    }
    readValue(e2, t2) {
      let n2 = this.latestValues[e2] !== void 0 || !this.current ? this.latestValues[e2] : this.getBaseTargetFromProps(this.props, e2) ?? this.readValueFromInstance(this.current, e2, this.options);
      return n2 != null && (typeof n2 == "string" && (ce(n2) || ue(n2)) ? n2 = parseFloat(n2) : !Ta(n2) && B.test(t2) && (n2 = ki(e2, t2)), this.setBaseTarget(e2, G(n2) ? n2.get() : n2)), G(n2) ? n2.get() : n2;
    }
    setBaseTarget(e2, t2) {
      this.baseTarget[e2] = t2;
    }
    getBaseTarget(e2) {
      let { initial: t2 } = this.props, n2;
      if (typeof t2 == "string" || typeof t2 == "object") {
        let r3 = Qr(this.props, t2, this.presenceContext?.custom);
        r3 && (n2 = r3[e2]);
      }
      if (t2 && n2 !== void 0) return n2;
      let r2 = this.getBaseTargetFromProps(this.props, e2);
      return r2 !== void 0 && !G(r2) ? r2 : this.initialValues[e2] !== void 0 && n2 === void 0 ? void 0 : this.baseTarget[e2];
    }
    on(e2, t2) {
      return this.events[e2] || (this.events[e2] = new me()), this.events[e2].add(t2);
    }
    notify(e2, ...t2) {
      this.events[e2] && this.events[e2].notify(...t2);
    }
    scheduleRenderMicrotask() {
      Li.render(this.render);
    }
  };
  var Ka = class extends Ga {
    constructor() {
      super(...arguments), this.KeyframeResolver = Mi;
    }
    sortInstanceNodePosition(e2, t2) {
      return e2.compareDocumentPosition(t2) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e2, t2) {
      let n2 = e2.style;
      return n2 ? n2[t2] : void 0;
    }
    removeValueFromRenderState(e2, { vars: t2, style: n2 }) {
      delete t2[e2], delete n2[e2];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let { children: e2 } = this.props;
      G(e2) && (this.childSubscription = e2.on("change", (e3) => {
        this.current && (this.current.textContent = `${e3}`);
      }));
    }
  };
  var J = class {
    constructor(e2) {
      this.isMounted = false, this.node = e2;
    }
    update() {
    }
  };
  function qa({ top: e2, left: t2, right: n2, bottom: r2 }) {
    return {
      x: {
        min: t2,
        max: n2
      },
      y: {
        min: e2,
        max: r2
      }
    };
  }
  function Ja({ x: e2, y: t2 }) {
    return {
      top: t2.min,
      right: e2.max,
      bottom: t2.max,
      left: e2.min
    };
  }
  function Ya(e2, t2) {
    if (!t2) return e2;
    let n2 = t2({
      x: e2.left,
      y: e2.top
    }), r2 = t2({
      x: e2.right,
      y: e2.bottom
    });
    return {
      top: n2.y,
      left: n2.x,
      bottom: r2.y,
      right: r2.x
    };
  }
  function Xa(e2) {
    return e2 === void 0 || e2 === 1;
  }
  function Za({ scale: e2, scaleX: t2, scaleY: n2 }) {
    return !Xa(e2) || !Xa(t2) || !Xa(n2);
  }
  function Qa(e2) {
    return Za(e2) || $a(e2) || e2.z || e2.rotate || e2.rotateX || e2.rotateY || e2.skewX || e2.skewY;
  }
  function $a(e2) {
    return eo(e2.x) || eo(e2.y);
  }
  function eo(e2) {
    return e2 && e2 !== "0%";
  }
  function to(e2, t2, n2) {
    return n2 + t2 * (e2 - n2);
  }
  function no(e2, t2, n2, r2, i2) {
    return i2 !== void 0 && (e2 = to(e2, i2, r2)), to(e2, n2, r2) + t2;
  }
  function ro(e2, t2 = 0, n2 = 1, r2, i2) {
    e2.min = no(e2.min, t2, n2, r2, i2), e2.max = no(e2.max, t2, n2, r2, i2);
  }
  function io(e2, { x: t2, y: n2 }) {
    ro(e2.x, t2.translate, t2.scale, t2.originPoint), ro(e2.y, n2.translate, n2.scale, n2.originPoint);
  }
  var ao = 0.999999999999;
  var oo = 1.0000000000001;
  function so(e2, t2, n2, r2 = false) {
    let i2 = n2.length;
    if (!i2) return;
    t2.x = t2.y = 1;
    let a2, o2;
    for (let s2 = 0; s2 < i2; s2++) {
      a2 = n2[s2], o2 = a2.projectionDelta;
      let { visualElement: i3 } = a2.options;
      i3 && i3.props.style && i3.props.style.display === "contents" || (r2 && a2.options.layoutScroll && a2.scroll && a2 !== a2.root && (Y(e2.x, -a2.scroll.offset.x), Y(e2.y, -a2.scroll.offset.y)), o2 && (t2.x *= o2.x.scale, t2.y *= o2.y.scale, io(e2, o2)), r2 && Qa(a2.latestValues) && uo(e2, a2.latestValues, a2.layout?.layoutBox));
    }
    t2.x < oo && t2.x > ao && (t2.x = 1), t2.y < oo && t2.y > ao && (t2.y = 1);
  }
  function Y(e2, t2) {
    e2.min += t2, e2.max += t2;
  }
  function co(e2, t2, n2, r2, i2 = 0.5) {
    ro(e2, t2, n2, V(e2.min, e2.max, i2), r2);
  }
  function lo(e2, t2) {
    return typeof e2 == "string" ? parseFloat(e2) / 100 * (t2.max - t2.min) : e2;
  }
  function uo(e2, t2, n2) {
    let r2 = n2 ?? e2;
    co(e2.x, lo(t2.x, r2.x), t2.scaleX, t2.scale, t2.originX), co(e2.y, lo(t2.y, r2.y), t2.scaleY, t2.scale, t2.originY);
  }
  function fo(e2, t2) {
    return qa(Ya(e2.getBoundingClientRect(), t2));
  }
  function po(e2, t2, n2) {
    let r2 = fo(e2, n2), { scroll: i2 } = t2;
    return i2 && (Y(r2.x, i2.offset.x), Y(r2.y, i2.offset.y)), r2;
  }
  var mo = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  var ho = Vn.length;
  function go(e2, t2, n2) {
    let r2 = "", i2 = true;
    for (let a3 = 0; a3 < ho; a3++) {
      let o2 = Vn[a3], s2 = e2[o2];
      if (s2 === void 0) continue;
      let c2 = true;
      if (typeof s2 == "number") c2 = s2 === +!!o2.startsWith("scale");
      else {
        let e3 = parseFloat(s2);
        c2 = o2.startsWith("scale") ? e3 === 1 : e3 === 0;
      }
      if (!c2 || n2) {
        let e3 = Fi(s2, Ti[o2]);
        if (!c2) {
          i2 = false;
          let t3 = mo[o2] || o2;
          r2 += `${t3}(${e3}) `;
        }
        n2 && (t2[o2] = e3);
      }
    }
    let a2 = e2.pathRotation;
    return a2 && (i2 = false, r2 += `rotate(${Fi(a2, Ti.pathRotation)}) `), r2 = r2.trim(), n2 ? r2 = n2(t2, i2 ? "" : r2) : i2 && (r2 = "none"), r2;
  }
  function _o(e2, t2, n2) {
    let { style: r2, vars: i2, transformOrigin: a2 } = e2, o2 = false, s2 = false;
    for (let e3 in t2) {
      let n3 = t2[e3];
      if (Hn.has(e3)) {
        o2 = true;
        continue;
      } else if (Je(e3)) {
        i2[e3] = n3;
        continue;
      } else {
        let t3 = Fi(n3, Ti[e3]);
        e3.startsWith("origin") ? (s2 = true, a2[e3] = t3) : r2[e3] = t3;
      }
    }
    if (t2.transform || (o2 || n2 ? r2.transform = go(t2, e2.transform, n2) : r2.transform && (r2.transform = "none")), s2) {
      let { originX: e3 = "50%", originY: t3 = "50%", originZ: n3 = 0 } = a2;
      r2.transformOrigin = `${e3} ${t3} ${n3}`;
    }
  }
  function vo(e2, { style: t2, vars: n2 }, r2, i2) {
    let a2 = e2.style, o2;
    for (o2 in t2) a2[o2] = t2[o2];
    for (o2 in i2?.applyProjectionStyles(a2, r2), n2) a2.setProperty(o2, n2[o2]);
  }
  function yo(e2, t2) {
    return t2.max === t2.min ? 0 : e2 / (t2.max - t2.min) * 100;
  }
  var bo = { correct: (e2, t2) => {
    if (!t2.target) return e2;
    if (typeof e2 == "string") if (R.test(e2)) e2 = parseFloat(e2);
    else return e2;
    return `${yo(e2, t2.target.x)}% ${yo(e2, t2.target.y)}%`;
  } };
  var xo = { correct: (e2, { treeScale: t2, projectionDelta: n2 }) => {
    let r2 = e2, i2 = B.parse(e2);
    if (i2.length > 5) return r2;
    let a2 = B.createTransformer(e2), o2 = typeof i2[0] == "number" ? 0 : 1, s2 = n2.x.scale * t2.x, c2 = n2.y.scale * t2.y;
    i2[0 + o2] /= s2, i2[1 + o2] /= c2;
    let l2 = V(s2, c2, 0.5);
    return typeof i2[2 + o2] == "number" && (i2[2 + o2] /= l2), typeof i2[3 + o2] == "number" && (i2[3 + o2] /= l2), a2(i2);
  } };
  var So = {
    borderRadius: {
      ...bo,
      applyTo: [...Ni]
    },
    borderTopLeftRadius: bo,
    borderTopRightRadius: bo,
    borderBottomLeftRadius: bo,
    borderBottomRightRadius: bo,
    boxShadow: xo
  };
  function Co(e2, { layout: t2, layoutId: n2 }) {
    return Hn.has(e2) || e2.startsWith("origin") || (t2 || n2 !== void 0) && (!!So[e2] || e2 === "opacity");
  }
  function wo(e2, t2, n2) {
    let r2 = e2.style, i2 = t2?.style, a2 = {};
    if (!r2) return a2;
    for (let t3 in r2) (G(r2[t3]) || i2 && G(i2[t3]) || Co(t3, e2) || n2?.getValue(t3)?.liveStyle !== void 0) && (a2[t3] = r2[t3]);
    return a2;
  }
  function To(e2) {
    return window.getComputedStyle(e2);
  }
  var Eo = class extends Ka {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = vo;
    }
    readValueFromInstance(e2, t2) {
      if (Hn.has(t2)) return this.projection?.isProjecting ? Ln(t2) : zn(e2, t2);
      {
        let n2 = To(e2), r2 = (Je(t2) ? n2.getPropertyValue(t2) : n2[t2]) || 0;
        return typeof r2 == "string" ? r2.trim() : r2;
      }
    }
    measureInstanceViewportBox(e2, { transformPagePoint: t2 }) {
      return fo(e2, t2);
    }
    build(e2, t2, n2) {
      _o(e2, t2, n2.transformTemplate);
    }
    scrapeMotionValuesFromProps(e2, t2, n2) {
      return wo(e2, t2, n2);
    }
  };
  var Do = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  var Oo = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function ko(e2, t2, n2 = 1, r2 = 0, i2 = true) {
    e2.pathLength = 1;
    let a2 = i2 ? Do : Oo;
    e2[a2.offset] = `${-r2}`, e2[a2.array] = `${t2} ${n2}`;
  }
  var Ao = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
  ];
  function jo(e2, { attrX: t2, attrY: n2, attrScale: r2, pathLength: i2, pathSpacing: a2 = 1, pathOffset: o2 = 0, ...s2 }, c2, l2, u2) {
    if (_o(e2, s2, l2), c2) {
      e2.style.viewBox && (e2.attrs.viewBox = e2.style.viewBox);
      return;
    }
    e2.attrs = e2.style, e2.style = {};
    let { attrs: d2, style: f2 } = e2;
    d2.transform && (f2.transform = d2.transform, delete d2.transform), (f2.transform || d2.transformOrigin) && (f2.transformOrigin = d2.transformOrigin ?? "50% 50%", delete d2.transformOrigin), f2.transform && (f2.transformBox = u2?.transformBox ?? "fill-box", delete d2.transformBox);
    for (let e3 of Ao) d2[e3] !== void 0 && (f2[e3] = d2[e3], delete d2[e3]);
    t2 !== void 0 && (d2.x = t2), n2 !== void 0 && (d2.y = n2), r2 !== void 0 && (d2.scale = r2), i2 !== void 0 && ko(d2, i2, a2, o2, false);
  }
  var Mo = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]);
  var No = (e2) => typeof e2 == "string" && e2.toLowerCase() === "svg";
  function Po(e2, t2, n2, r2) {
    vo(e2, t2, void 0, r2);
    for (let n3 in t2.attrs) e2.setAttribute(Mo.has(n3) ? n3 : oi(n3), t2.attrs[n3]);
  }
  function Fo(e2, t2, n2) {
    let r2 = wo(e2, t2, n2);
    for (let n3 in e2) if (G(e2[n3]) || G(t2[n3])) {
      let t3 = Vn.indexOf(n3) === -1 ? n3 : "attr" + n3.charAt(0).toUpperCase() + n3.substring(1);
      r2[t3] = e2[n3];
    }
    return r2;
  }
  var Io = class extends Ka {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = q;
    }
    getBaseTargetFromProps(e2, t2) {
      return e2[t2];
    }
    readValueFromInstance(e2, t2) {
      if (Hn.has(t2)) {
        let e3 = Di(t2);
        return e3 && e3.default || 0;
      }
      return t2 = Mo.has(t2) ? t2 : oi(t2), e2.getAttribute(t2);
    }
    scrapeMotionValuesFromProps(e2, t2, n2) {
      return Fo(e2, t2, n2);
    }
    build(e2, t2, n2) {
      jo(e2, t2, this.isSVGTag, n2.transformTemplate, n2.style);
    }
    renderInstance(e2, t2, n2, r2) {
      Po(e2, t2, n2, r2);
    }
    mount(e2) {
      this.isSVGTag = No(e2.tagName), super.mount(e2);
    }
  };
  var Lo = Na.length;
  function Ro(e2) {
    if (!e2) return;
    if (!e2.isControllingVariants) {
      let t3 = e2.parent && Ro(e2.parent) || {};
      return e2.props.initial !== void 0 && (t3.initial = e2.props.initial), t3;
    }
    let t2 = {};
    for (let n2 = 0; n2 < Lo; n2++) {
      let r2 = Na[n2], i2 = e2.props[r2];
      (ja(i2) || i2 === false) && (t2[r2] = i2);
    }
    return t2;
  }
  function zo(e2, t2) {
    if (!Array.isArray(t2)) return false;
    let n2 = t2.length;
    if (n2 !== e2.length) return false;
    for (let r2 = 0; r2 < n2; r2++) if (t2[r2] !== e2[r2]) return false;
    return true;
  }
  var Bo = [...Ma].reverse();
  var Vo = Ma.length;
  function Ho(e2) {
    return (t2) => Promise.all(t2.map(({ animation: t3, options: n2 }) => pi(e2, t3, n2)));
  }
  function Uo(e2) {
    let t2 = Ho(e2), n2 = Ko(), r2 = true, i2 = false, a2 = (t3) => (n3, r3) => {
      let i3 = W(e2, r3, t3 === "exit" ? e2.presenceContext?.custom : void 0);
      if (i3) {
        let { transition: e3, transitionEnd: t4, ...r4 } = i3;
        n3 = {
          ...n3,
          ...r4,
          ...t4
        };
      }
      return n3;
    };
    function o2(n3) {
      t2 = n3(e2);
    }
    function s2(o3) {
      let { props: s3 } = e2, c3 = Ro(e2.parent) || {}, l2 = [], u2 = /* @__PURE__ */ new Set(), d2 = {}, f2 = Infinity;
      for (let t3 = 0; t3 < Vo; t3++) {
        let p3 = Bo[t3], m2 = n2[p3], h2 = s3[p3] === void 0 ? c3[p3] : s3[p3], g2 = ja(h2), _2 = p3 === o3 ? m2.isActive : null;
        _2 === false && (f2 = t3);
        let v2 = h2 === c3[p3] && h2 !== s3[p3] && g2;
        if (v2 && (r2 || i2) && e2.manuallyAnimateOnMount && (v2 = false), m2.protectedKeys = { ...d2 }, !m2.isActive && _2 === null || !h2 && !m2.prevProp || Aa(h2) || typeof h2 == "boolean") continue;
        if (p3 === "exit" && m2.isActive && _2 !== true) {
          m2.prevResolvedValues && (d2 = {
            ...d2,
            ...m2.prevResolvedValues
          });
          continue;
        }
        let y2 = Wo(m2.prevProp, h2), b2 = y2 || p3 === o3 && m2.isActive && !v2 && g2 || t3 > f2 && g2, x2 = false, S2 = Array.isArray(h2) ? h2 : [h2], C2 = S2.reduce(a2(p3), {});
        _2 === false && (C2 = {});
        let { prevResolvedValues: ee2 = {} } = m2, te2 = {
          ...ee2,
          ...C2
        }, w2 = (t4) => {
          b2 = true, u2.has(t4) && (x2 = true, u2.delete(t4)), m2.needsAnimating[t4] = true;
          let n3 = e2.getValue(t4);
          n3 && (n3.liveStyle = false);
        };
        for (let e3 in te2) {
          let t4 = C2[e3], n3 = ee2[e3];
          if (d2.hasOwnProperty(e3)) continue;
          let r3 = false;
          r3 = ei(t4) && ei(n3) ? !zo(t4, n3) || y2 : t4 !== n3, r3 ? t4 == null ? u2.add(e3) : w2(e3) : t4 !== void 0 && u2.has(e3) ? w2(e3) : m2.protectedKeys[e3] = true;
        }
        m2.prevProp = h2, m2.prevResolvedValues = C2, m2.isActive && (d2 = {
          ...d2,
          ...C2
        }), (r2 || i2) && e2.blockInitialAnimation && (b2 = false);
        let ne2 = v2 && y2;
        b2 && (!ne2 || x2) && l2.push(...S2.map((t4) => {
          let n3 = { type: p3 };
          if (typeof t4 == "string" && (r2 || i2) && !ne2 && e2.manuallyAnimateOnMount && e2.parent) {
            let { parent: r3 } = e2, i3 = W(r3, t4);
            if (r3.enteringChildren && i3) {
              let { delayChildren: t5 } = i3.transition || {};
              n3.delay = jr(r3.enteringChildren, e2, t5);
            }
          }
          return {
            animation: t4,
            options: n3
          };
        }));
      }
      if (u2.size) {
        let t3 = {};
        if (typeof s3.initial != "boolean") {
          let n3 = W(e2, Array.isArray(s3.initial) ? s3.initial[0] : s3.initial);
          n3 && n3.transition && (t3.transition = n3.transition);
        }
        u2.forEach((n3) => {
          let r3 = e2.getBaseTarget(n3), i3 = e2.getValue(n3);
          i3 && (i3.liveStyle = true), t3[n3] = r3 ?? null;
        }), l2.push({ animation: t3 });
      }
      let p2 = !!l2.length;
      return r2 && (s3.initial === false || s3.initial === s3.animate) && !e2.manuallyAnimateOnMount && (p2 = false), r2 = false, i2 = false, p2 ? t2(l2) : Promise.resolve();
    }
    function c2(t3, r3) {
      if (n2[t3].isActive === r3) return Promise.resolve();
      e2.variantChildren?.forEach((e3) => e3.animationState?.setActive(t3, r3)), n2[t3].isActive = r3;
      let i3 = s2(t3);
      for (let e3 in n2) n2[e3].protectedKeys = {};
      return i3;
    }
    return {
      animateChanges: s2,
      setActive: c2,
      setAnimateFunction: o2,
      getState: () => n2,
      reset: () => {
        n2 = Ko(), i2 = true;
      }
    };
  }
  function Wo(e2, t2) {
    return typeof t2 == "string" ? t2 !== e2 : Array.isArray(t2) ? !zo(t2, e2) : false;
  }
  function Go(e2 = false) {
    return {
      isActive: e2,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function Ko() {
    return {
      animate: Go(true),
      whileInView: Go(),
      whileHover: Go(),
      whileTap: Go(),
      whileDrag: Go(),
      whileFocus: Go(),
      exit: Go()
    };
  }
  function qo(e2, t2) {
    e2.min = t2.min, e2.max = t2.max;
  }
  function X(e2, t2) {
    qo(e2.x, t2.x), qo(e2.y, t2.y);
  }
  function Jo(e2, t2) {
    e2.translate = t2.translate, e2.scale = t2.scale, e2.originPoint = t2.originPoint, e2.origin = t2.origin;
  }
  var Yo = 0.9999;
  var Xo = 1.0001;
  var Zo = -0.01;
  var Qo = 0.01;
  function Z(e2) {
    return e2.max - e2.min;
  }
  function $o(e2, t2, n2) {
    return Math.abs(e2 - t2) <= n2;
  }
  function es(e2, t2, n2, r2 = 0.5) {
    e2.origin = r2, e2.originPoint = V(t2.min, t2.max, e2.origin), e2.scale = Z(n2) / Z(t2), e2.translate = V(n2.min, n2.max, e2.origin) - e2.originPoint, (e2.scale >= Yo && e2.scale <= Xo || isNaN(e2.scale)) && (e2.scale = 1), (e2.translate >= Zo && e2.translate <= Qo || isNaN(e2.translate)) && (e2.translate = 0);
  }
  function ts(e2, t2, n2, r2) {
    es(e2.x, t2.x, n2.x, r2 ? r2.originX : void 0), es(e2.y, t2.y, n2.y, r2 ? r2.originY : void 0);
  }
  function ns(e2, t2, n2, r2 = 0) {
    e2.min = (r2 ? V(n2.min, n2.max, r2) : n2.min) + t2.min, e2.max = e2.min + Z(t2);
  }
  function rs(e2, t2, n2, r2) {
    ns(e2.x, t2.x, n2.x, r2?.x), ns(e2.y, t2.y, n2.y, r2?.y);
  }
  function is(e2, t2, n2, r2 = 0) {
    let i2 = r2 ? V(n2.min, n2.max, r2) : n2.min;
    e2.min = t2.min - i2, e2.max = e2.min + Z(t2);
  }
  function as(e2, t2, n2, r2) {
    is(e2.x, t2.x, n2.x, r2?.x), is(e2.y, t2.y, n2.y, r2?.y);
  }
  function os(e2, t2, n2, r2, i2) {
    return e2 -= t2, e2 = to(e2, 1 / n2, r2), i2 !== void 0 && (e2 = to(e2, 1 / i2, r2)), e2;
  }
  function ss(e2, t2 = 0, n2 = 1, r2 = 0.5, i2, a2 = e2, o2 = e2) {
    if (L.test(t2) && (t2 = parseFloat(t2), t2 = V(o2.min, o2.max, t2 / 100) - o2.min), typeof t2 != "number") return;
    let s2 = V(a2.min, a2.max, r2);
    e2 === a2 && (s2 -= t2), e2.min = os(e2.min, t2, n2, s2, i2), e2.max = os(e2.max, t2, n2, s2, i2);
  }
  function cs(e2, t2, [n2, r2, i2], a2, o2) {
    ss(e2, t2[n2], t2[r2], t2[i2], t2.scale, a2, o2);
  }
  var ls = [
    "x",
    "scaleX",
    "originX"
  ];
  var us = [
    "y",
    "scaleY",
    "originY"
  ];
  function ds(e2, t2, n2, r2) {
    cs(e2.x, t2, ls, n2 ? n2.x : void 0, r2 ? r2.x : void 0), cs(e2.y, t2, us, n2 ? n2.y : void 0, r2 ? r2.y : void 0);
  }
  function fs(e2) {
    return e2.translate === 0 && e2.scale === 1;
  }
  function ps(e2) {
    return fs(e2.x) && fs(e2.y);
  }
  function ms(e2, t2) {
    return e2.min === t2.min && e2.max === t2.max;
  }
  function hs(e2, t2) {
    return ms(e2.x, t2.x) && ms(e2.y, t2.y);
  }
  function gs(e2, t2) {
    return Math.round(e2.min) === Math.round(t2.min) && Math.round(e2.max) === Math.round(t2.max);
  }
  function _s(e2, t2) {
    return gs(e2.x, t2.x) && gs(e2.y, t2.y);
  }
  function vs(e2) {
    return Z(e2.x) / Z(e2.y);
  }
  function ys(e2, t2) {
    return e2.translate === t2.translate && e2.scale === t2.scale && e2.originPoint === t2.originPoint;
  }
  function Q(e2) {
    return [e2("x"), e2("y")];
  }
  function bs(e2, t2, n2) {
    let r2 = "", i2 = e2.x.translate / t2.x, a2 = e2.y.translate / t2.y, o2 = n2?.z || 0;
    if ((i2 || a2 || o2) && (r2 = `translate3d(${i2}px, ${a2}px, ${o2}px) `), (t2.x !== 1 || t2.y !== 1) && (r2 += `scale(${1 / t2.x}, ${1 / t2.y}) `), n2) {
      let { transformPerspective: e3, rotate: t3, pathRotation: i3, rotateX: a3, rotateY: o3, skewX: s3, skewY: c3 } = n2;
      e3 && (r2 = `perspective(${e3}px) ${r2}`), t3 && (r2 += `rotate(${t3}deg) `), i3 && (r2 += `rotate(${i3}deg) `), a3 && (r2 += `rotateX(${a3}deg) `), o3 && (r2 += `rotateY(${o3}deg) `), s3 && (r2 += `skewX(${s3}deg) `), c3 && (r2 += `skewY(${c3}deg) `);
    }
    let s2 = e2.x.scale * t2.x, c2 = e2.y.scale * t2.y;
    return (s2 !== 1 || c2 !== 1) && (r2 += `scale(${s2}, ${c2})`), r2 || "none";
  }
  var xs = Ni.length;
  var Ss = (e2) => typeof e2 == "string" ? parseFloat(e2) : e2;
  var Cs = (e2) => typeof e2 == "number" || R.test(e2);
  function ws(e2, t2, n2, r2, i2, a2) {
    i2 ? (e2.opacity = V(0, n2.opacity ?? 1, Es(r2)), e2.opacityExit = V(t2.opacity ?? 1, 0, Ds(r2))) : a2 && (e2.opacity = V(t2.opacity ?? 1, n2.opacity ?? 1, r2));
    for (let i3 = 0; i3 < xs; i3++) {
      let a3 = Ni[i3], o2 = Ts(t2, a3), s2 = Ts(n2, a3);
      o2 === void 0 && s2 === void 0 || (o2 || (o2 = 0), s2 || (s2 = 0), o2 === 0 || s2 === 0 || Cs(o2) === Cs(s2) ? (e2[a3] = Math.max(V(Ss(o2), Ss(s2), r2), 0), (L.test(s2) || L.test(o2)) && (e2[a3] += "%")) : e2[a3] = s2);
    }
    (t2.rotate || n2.rotate) && (e2.rotate = V(t2.rotate || 0, n2.rotate || 0, r2));
  }
  function Ts(e2, t2) {
    return e2[t2] === void 0 ? e2.borderRadius : e2[t2];
  }
  var Es = /* @__PURE__ */ Os(0, 0.5, Ae);
  var Ds = /* @__PURE__ */ Os(0.5, 0.95, O);
  function Os(e2, t2, n2) {
    return (r2) => r2 < e2 ? 0 : r2 > t2 ? 1 : n2(/* @__PURE__ */ pe(e2, t2, r2));
  }
  function ks(e2, t2, n2) {
    let r2 = G(e2) ? e2 : Ir(e2);
    return r2.start(Kr("", r2, t2, n2)), r2.animation;
  }
  function As(e2, t2, n2, r2 = { passive: true }) {
    return e2.addEventListener(t2, n2, r2), () => e2.removeEventListener(t2, n2, r2);
  }
  var js = (e2, t2) => e2.depth - t2.depth;
  var Ms = class {
    constructor() {
      this.children = [], this.isDirty = false;
    }
    add(e2) {
      ie(this.children, e2), this.isDirty = true;
    }
    remove(e2) {
      ae(this.children, e2), this.isDirty = true;
    }
    forEach(e2) {
      this.isDirty && this.children.sort(js), this.isDirty = false, this.children.forEach(e2);
    }
  };
  function Ns(e2, t2) {
    let n2 = P.now(), r2 = ({ timestamp: i2 }) => {
      let a2 = i2 - n2;
      a2 >= t2 && (M(r2), e2(a2 - t2));
    };
    return j.setup(r2, true), () => M(r2);
  }
  function Ps(e2) {
    return G(e2) ? e2.get() : e2;
  }
  var Fs = class {
    constructor() {
      this.members = [];
    }
    add(e2) {
      ie(this.members, e2);
      for (let t2 = this.members.length - 1; t2 >= 0; t2--) {
        let n2 = this.members[t2];
        if (n2 === e2 || n2 === this.lead || n2 === this.prevLead) continue;
        let r2 = n2.instance;
        (!r2 || r2.isConnected === false) && !n2.snapshot && (ae(this.members, n2), n2.unmount());
      }
      e2.scheduleRender();
    }
    remove(e2) {
      if (ae(this.members, e2), e2 === this.prevLead && (this.prevLead = void 0), e2 === this.lead) {
        let e3 = this.members[this.members.length - 1];
        e3 && this.promote(e3);
      }
    }
    relegate(e2) {
      for (let t2 = this.members.indexOf(e2) - 1; t2 >= 0; t2--) {
        let e3 = this.members[t2];
        if (e3.isPresent !== false && e3.instance?.isConnected !== false) return this.promote(e3), true;
      }
      return false;
    }
    promote(e2, t2) {
      let n2 = this.lead;
      if (e2 !== n2 && (this.prevLead = n2, this.lead = e2, e2.show(), n2)) {
        n2.updateSnapshot(), e2.scheduleRender();
        let { layoutDependency: r2 } = n2.options, { layoutDependency: i2 } = e2.options;
        (r2 === void 0 || r2 !== i2) && (e2.resumeFrom = n2, t2 && (n2.preserveOpacity = true), n2.snapshot && (e2.snapshot = n2.snapshot, e2.snapshot.latestValues = n2.animationValues || n2.latestValues), e2.root?.isUpdating && (e2.isLayoutDirty = true)), e2.options.crossfade === false && n2.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e2) => {
        e2.options.onExitComplete?.(), e2.resumingFrom?.options.onExitComplete?.();
      });
    }
    scheduleRender() {
      this.members.forEach((e2) => e2.instance && e2.scheduleRender(false));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  };
  var Is = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  };
  var $ = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0
  };
  var Ls = [
    "",
    "X",
    "Y",
    "Z"
  ];
  var Rs = 1e3;
  var zs = 0;
  function Bs(e2, t2, n2, r2) {
    let { latestValues: i2 } = t2;
    i2[e2] && (n2[e2] = i2[e2], t2.setStaticValue(e2, 0), r2 && (r2[e2] = 0));
  }
  function Vs(e2) {
    if (e2.hasCheckedOptimisedAppear = true, e2.root === e2) return;
    let { visualElement: t2 } = e2.options;
    if (!t2) return;
    let n2 = ci(t2);
    if (window.MotionHasOptimisedAnimation(n2, "transform")) {
      let { layout: t3, layoutId: r3 } = e2.options;
      window.MotionCancelOptimisedAnimation(n2, "transform", j, !(t3 || r3));
    }
    let { parent: r2 } = e2;
    r2 && !r2.hasCheckedOptimisedAppear && Vs(r2);
  }
  function Hs({ attachResizeListener: e2, defaultParent: t2, measureScroll: n2, checkIsScrollRoot: r2, resetTransform: i2 }) {
    return class {
      constructor(e3 = {}, n3 = t2?.()) {
        this.id = zs++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = {
          x: 1,
          y: 1
        }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, va.value && ($.nodes = $.calculatedTargetDeltas = $.calculatedProjections = 0), this.nodes.forEach(Gs), this.nodes.forEach(ec), this.nodes.forEach(tc), this.nodes.forEach(Ks), va.addProjectionMetrics && va.addProjectionMetrics($);
        }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e3, this.root = n3 ? n3.root || n3 : this, this.path = n3 ? [...n3.path, n3] : [], this.parent = n3, this.depth = n3 ? n3.depth + 1 : 0;
        for (let e4 = 0; e4 < this.path.length; e4++) this.path[e4].shouldResetTransform = true;
        this.root === this && (this.nodes = new Ms());
      }
      addEventListener(e3, t3) {
        return this.eventHandlers.has(e3) || this.eventHandlers.set(e3, new me()), this.eventHandlers.get(e3).add(t3);
      }
      notifyListeners(e3, ...t3) {
        let n3 = this.eventHandlers.get(e3);
        n3 && n3.notify(...t3);
      }
      hasListeners(e3) {
        return this.eventHandlers.has(e3);
      }
      mount(t3) {
        if (this.instance) return;
        this.isSVG = ra(t3) && !ya(t3), this.instance = t3;
        let { layoutId: n3, layout: r3, visualElement: i3 } = this.options;
        if (i3 && !i3.current && i3.mount(t3), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r3 || n3) && (this.isLayoutDirty = true), e2) {
          let n4, r4 = 0, i4 = () => this.root.updateBlockedByResize = false;
          j.read(() => {
            r4 = window.innerWidth;
          }), e2(t3, () => {
            let e3 = window.innerWidth;
            e3 !== r4 && (r4 = e3, this.root.updateBlockedByResize = true, n4 && n4(), n4 = Ns(i4, 250), Is.hasAnimatedSinceResize && (Is.hasAnimatedSinceResize = false, this.nodes.forEach($s)));
          });
        }
        n3 && this.root.registerSharedNode(n3, this), this.options.animate !== false && i3 && (n3 || r3) && this.addEventListener("didUpdate", ({ delta: e3, hasLayoutChanged: t4, hasRelativeLayoutChanged: n4, layout: r4 }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          let a2 = this.options.transition || i3.getDefaultTransition() || cc, { onLayoutAnimationStart: o2, onLayoutAnimationComplete: s2 } = i3.getProps(), c2 = !this.targetLayout || !_s(this.targetLayout, r4), l2 = !t4 && n4;
          if (this.options.layoutRoot || this.resumeFrom || l2 || t4 && (c2 || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
            let t5 = {
              ...Rr(a2, "layout"),
              onPlay: o2,
              onComplete: s2
            };
            (i3.shouldReduceMotion || this.options.layoutRoot) && (t5.delay = 0, t5.type = false), this.startAnimation(t5), this.setAnimationOrigin(e3, l2, t5.path);
          } else t4 || $s(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = r4;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        let e3 = this.getStack();
        e3 && e3.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), M(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      startUpdate() {
        this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(nc), this.animationId++);
      }
      getTransformTemplate() {
        let { visualElement: e3 } = this.options;
        return e3 && e3.getProps().transformTemplate;
      }
      willUpdate(e3 = true) {
        if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Vs(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
        this.isLayoutDirty = true;
        for (let e4 = 0; e4 < this.path.length; e4++) {
          let t4 = this.path[e4];
          t4.shouldResetTransform = true, (typeof t4.latestValues.x == "string" || typeof t4.latestValues.y == "string") && (t4.isLayoutDirty = true), t4.updateScroll("snapshot"), t4.options.layoutRoot && t4.willUpdate(false);
        }
        let { layoutId: t3, layout: n3 } = this.options;
        if (t3 === void 0 && !n3) return;
        let r3 = this.getTransformTemplate();
        this.prevTransformTemplateValue = r3 ? r3(this.latestValues, "") : void 0, this.updateSnapshot(), e3 && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = false, this.isUpdateBlocked()) {
          let e4 = this.updateBlockedByResize;
          this.unblockUpdate(), this.updateBlockedByResize = false, this.clearAllSnapshots(), e4 && this.nodes.forEach(Ys), this.nodes.forEach(Js);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(Xs);
          return;
        }
        this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(Zs), this.nodes.forEach(Qs), this.nodes.forEach(Us), this.nodes.forEach(Ws)) : this.nodes.forEach(Xs), this.clearAllSnapshots();
        let e3 = P.now();
        N.delta = T(0, 1e3 / 60, e3 - N.timestamp), N.timestamp = e3, N.isProcessing = true, We.update.process(N), We.preRender.process(N), We.render.process(N), N.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, Li.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(qs), this.sharedNodes.forEach(rc);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, j.preRender(this.updateProjection, false, true));
      }
      scheduleCheckAfterUnmount() {
        j.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Z(this.snapshot.measuredBox.x) && !Z(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
        if (this.resumeFrom && !this.resumeFrom.instance) for (let e4 = 0; e4 < this.path.length; e4++) this.path[e4].updateScroll();
        let e3 = this.layout;
        this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = q()), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        let { visualElement: t3 } = this.options;
        t3 && t3.notify("LayoutMeasure", this.layout.layoutBox, e3 ? e3.layoutBox : void 0);
      }
      updateScroll(e3 = "measure") {
        let t3 = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e3 && (t3 = false), t3 && this.instance) {
          let t4 = r2(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: e3,
            isRoot: t4,
            offset: n2(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : t4
          };
        }
      }
      resetTransform() {
        if (!i2) return;
        let e3 = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t3 = this.projectionDelta && !ps(this.projectionDelta), n3 = this.getTransformTemplate(), r3 = n3 ? n3(this.latestValues, "") : void 0, a2 = r3 !== this.prevTransformTemplateValue;
        e3 && this.instance && (t3 || Qa(this.latestValues) || a2) && (i2(this.instance, r3), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure(e3 = true) {
        let t3 = this.measurePageBox(), n3 = this.removeElementScroll(t3);
        return e3 && (n3 = this.removeTransform(n3)), fc(n3), {
          animationId: this.root.animationId,
          measuredBox: t3,
          layoutBox: n3,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        let { visualElement: e3 } = this.options;
        if (!e3) return q();
        let t3 = e3.measureViewportBox();
        if (!(this.scroll?.wasRoot || this.path.some(mc))) {
          let { scroll: e4 } = this.root;
          e4 && (Y(t3.x, e4.offset.x), Y(t3.y, e4.offset.y));
        }
        return t3;
      }
      removeElementScroll(e3) {
        let t3 = q();
        if (X(t3, e3), this.scroll?.wasRoot) return t3;
        for (let n3 = 0; n3 < this.path.length; n3++) {
          let r3 = this.path[n3], { scroll: i3, options: a2 } = r3;
          r3 !== this.root && i3 && a2.layoutScroll && (i3.wasRoot && X(t3, e3), Y(t3.x, i3.offset.x), Y(t3.y, i3.offset.y));
        }
        return t3;
      }
      applyTransform(e3, t3 = false, n3) {
        let r3 = n3 || q();
        X(r3, e3);
        for (let e4 = 0; e4 < this.path.length; e4++) {
          let n4 = this.path[e4];
          !t3 && n4.options.layoutScroll && n4.scroll && n4 !== n4.root && (Y(r3.x, -n4.scroll.offset.x), Y(r3.y, -n4.scroll.offset.y)), Qa(n4.latestValues) && uo(r3, n4.latestValues, n4.layout?.layoutBox);
        }
        return Qa(this.latestValues) && uo(r3, this.latestValues, this.layout?.layoutBox), r3;
      }
      removeTransform(e3) {
        let t3 = q();
        X(t3, e3);
        for (let e4 = 0; e4 < this.path.length; e4++) {
          let n3 = this.path[e4];
          if (!Qa(n3.latestValues)) continue;
          let r3;
          n3.instance && (Za(n3.latestValues) && n3.updateSnapshot(), r3 = q(), X(r3, n3.measurePageBox())), ds(t3, n3.latestValues, n3.snapshot?.layoutBox, r3);
        }
        return Qa(this.latestValues) && ds(t3, this.latestValues), t3;
      }
      setTargetDelta(e3) {
        this.targetDelta = e3, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
      }
      setOptions(e3) {
        this.options = {
          ...this.options,
          ...e3,
          crossfade: e3.crossfade === void 0 || e3.crossfade
        };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== N.timestamp && this.relativeParent.resolveTargetDelta(true);
      }
      resolveTargetDelta(e3 = false) {
        let t3 = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = t3.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = t3.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = t3.isSharedProjectionDirty);
        let n3 = !!this.resumingFrom || this !== t3;
        if (!(e3 || n3 && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        let { layout: r3, layoutId: i3 } = this.options;
        if (!this.layout || !(r3 || i3)) return;
        this.resolvedRelativeTargetAt = N.timestamp;
        let a2 = this.getClosestProjectingParent();
        a2 && this.linkedParentVersion !== a2.layoutVersion && !a2.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== false && a2 && a2.layout ? this.createRelativeTarget(a2, this.layout.layoutBox, a2.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = q(), this.targetWithTransforms = q()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), rs(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, false, this.target) : X(this.target, this.layout.layoutBox), io(this.target, this.targetDelta)) : X(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, this.options.layoutAnchor !== false && a2 && !!a2.resumingFrom == !!this.resumingFrom && !a2.options.layoutScroll && a2.target && this.animationProgress !== 1 ? this.createRelativeTarget(a2, this.target, a2.target) : this.relativeParent = this.relativeTarget = void 0), va.value && $.calculatedTargetDeltas++);
      }
      getClosestProjectingParent() {
        if (!(!this.parent || Za(this.parent.latestValues) || $a(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      createRelativeTarget(e3, t3, n3) {
        this.relativeParent = e3, this.linkedParentVersion = e3.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = q(), this.relativeTargetOrigin = q(), as(this.relativeTargetOrigin, t3, n3, this.options.layoutAnchor || void 0), X(this.relativeTarget, this.relativeTargetOrigin);
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        let e3 = this.getLead(), t3 = !!this.resumingFrom || this !== e3, n3 = true;
        if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n3 = false), t3 && (this.isSharedProjectionDirty || this.isTransformDirty) && (n3 = false), this.resolvedRelativeTargetAt === N.timestamp && (n3 = false), n3) return;
        let { layout: r3, layoutId: i3 } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r3 || i3)) return;
        X(this.layoutCorrected, this.layout.layoutBox);
        let a2 = this.treeScale.x, o2 = this.treeScale.y;
        so(this.layoutCorrected, this.treeScale, this.path, t3), e3.layout && !e3.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e3.target = e3.layout.layoutBox, e3.targetWithTransforms = q());
        let { target: s2 } = e3;
        if (!s2) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Jo(this.prevProjectionDelta.x, this.projectionDelta.x), Jo(this.prevProjectionDelta.y, this.projectionDelta.y)), ts(this.projectionDelta, this.layoutCorrected, s2, this.latestValues), (this.treeScale.x !== a2 || this.treeScale.y !== o2 || !ys(this.projectionDelta.x, this.prevProjectionDelta.x) || !ys(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", s2)), va.value && $.calculatedProjections++;
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(e3 = true) {
        if (this.options.visualElement?.scheduleRender(), e3) {
          let e4 = this.getStack();
          e4 && e4.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = Da(), this.projectionDelta = Da(), this.projectionDeltaWithTransform = Da();
      }
      setAnimationOrigin(e3, t3 = false, n3) {
        let r3 = this.snapshot, i3 = r3 ? r3.latestValues : {}, a2 = { ...this.latestValues }, o2 = Da();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t3;
        let s2 = q(), c2 = (r3 ? r3.source : void 0) !== (this.layout ? this.layout.source : void 0), l2 = this.getStack(), u2 = !l2 || l2.members.length <= 1, d2 = !!(c2 && !u2 && this.options.crossfade === true && !this.path.some(sc));
        this.animationProgress = 0;
        let f2, p2 = n3?.interpolateProjection(e3);
        this.mixTargetDelta = (t4) => {
          let n4 = t4 / 1e3, r4 = p2?.(n4);
          r4 ? (o2.x.translate = r4.x, o2.x.scale = V(e3.x.scale, 1, n4), o2.x.origin = e3.x.origin, o2.x.originPoint = e3.x.originPoint, o2.y.translate = r4.y, o2.y.scale = V(e3.y.scale, 1, n4), o2.y.origin = e3.y.origin, o2.y.originPoint = e3.y.originPoint) : (ic(o2.x, e3.x, n4), ic(o2.y, e3.y, n4)), this.setTargetDelta(o2), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (as(s2, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), oc(this.relativeTarget, this.relativeTargetOrigin, s2, n4), f2 && hs(this.relativeTarget, f2) && (this.isProjectionDirty = false), f2 || (f2 = q()), X(f2, this.relativeTarget)), c2 && (this.animationValues = a2, ws(a2, i3, this.latestValues, n4, d2, u2)), r4 && r4.rotate !== void 0 && (this.animationValues || (this.animationValues = a2), this.animationValues.pathRotation = r4.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n4;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(e3) {
        this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (this.pendingAnimation = (M(this.pendingAnimation), void 0)), this.pendingAnimation = j.update(() => {
          Is.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = Ir(0)), this.motionValue.jump(0, false), this.currentAnimation = ks(this.motionValue, [0, 1e3], {
            ...e3,
            velocity: 0,
            isSync: true,
            onUpdate: (t3) => {
              this.mixTargetDelta(t3), e3.onUpdate && e3.onUpdate(t3);
            },
            onComplete: () => {
              e3.onComplete && e3.onComplete(), this.completeAnimation();
            }
          }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        let e3 = this.getStack();
        e3 && e3.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Rs), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        let e3 = this.getLead(), { targetWithTransforms: t3, target: n3, layout: r3, latestValues: i3 } = e3;
        if (!(!t3 || !n3 || !r3)) {
          if (this !== e3 && this.layout && r3 && pc(this.options.animationType, this.layout.layoutBox, r3.layoutBox)) {
            n3 = this.target || q();
            let t4 = Z(this.layout.layoutBox.x);
            n3.x.min = e3.target.x.min, n3.x.max = n3.x.min + t4;
            let r4 = Z(this.layout.layoutBox.y);
            n3.y.min = e3.target.y.min, n3.y.max = n3.y.min + r4;
          }
          X(t3, n3), uo(t3, i3), ts(this.projectionDeltaWithTransform, this.layoutCorrected, t3, i3);
        }
      }
      registerSharedNode(e3, t3) {
        this.sharedNodes.has(e3) || this.sharedNodes.set(e3, new Fs()), this.sharedNodes.get(e3).add(t3);
        let n3 = t3.options.initialPromotionConfig;
        t3.promote({
          transition: n3 ? n3.transition : void 0,
          preserveFollowOpacity: n3 && n3.shouldPreserveFollowOpacity ? n3.shouldPreserveFollowOpacity(t3) : void 0
        });
      }
      isLead() {
        let e3 = this.getStack();
        return !e3 || e3.lead === this;
      }
      getLead() {
        let { layoutId: e3 } = this.options;
        return e3 && this.getStack()?.lead || this;
      }
      getPrevLead() {
        let { layoutId: e3 } = this.options;
        return e3 ? this.getStack()?.prevLead : void 0;
      }
      getStack() {
        let { layoutId: e3 } = this.options;
        if (e3) return this.root.sharedNodes.get(e3);
      }
      promote({ needsReset: e3, transition: t3, preserveFollowOpacity: n3 } = {}) {
        let r3 = this.getStack();
        r3 && r3.promote(this, n3), e3 && (this.projectionDelta = void 0, this.needsReset = true), t3 && this.setOptions({ transition: t3 });
      }
      relegate() {
        let e3 = this.getStack();
        return e3 ? e3.relegate(this) : false;
      }
      resetSkewAndRotation() {
        let { visualElement: e3 } = this.options;
        if (!e3) return;
        let t3 = false, { latestValues: n3 } = e3;
        if ((n3.z || n3.rotate || n3.rotateX || n3.rotateY || n3.rotateZ || n3.skewX || n3.skewY) && (t3 = true), !t3) return;
        let r3 = {};
        n3.z && Bs("z", e3, r3, this.animationValues);
        for (let t4 = 0; t4 < Ls.length; t4++) Bs(`rotate${Ls[t4]}`, e3, r3, this.animationValues), Bs(`skew${Ls[t4]}`, e3, r3, this.animationValues);
        e3.render();
        for (let t4 in r3) e3.setStaticValue(t4, r3[t4]), this.animationValues && (this.animationValues[t4] = r3[t4]);
        e3.scheduleRender();
      }
      applyProjectionStyles(e3, t3) {
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) {
          e3.visibility = "hidden";
          return;
        }
        let n3 = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false, e3.visibility = "", e3.opacity = "", e3.pointerEvents = Ps(t3?.pointerEvents) || "", e3.transform = n3 ? n3(this.latestValues, "") : "none";
          return;
        }
        let r3 = this.getLead();
        if (!this.projectionDelta || !this.layout || !r3.target) {
          this.options.layoutId && (e3.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e3.pointerEvents = Ps(t3?.pointerEvents) || ""), this.hasProjected && !Qa(this.latestValues) && (e3.transform = n3 ? n3({}, "") : "none", this.hasProjected = false);
          return;
        }
        e3.visibility = "";
        let i3 = r3.animationValues || r3.latestValues;
        this.applyTransformsToTarget();
        let a2 = bs(this.projectionDeltaWithTransform, this.treeScale, i3);
        n3 && (a2 = n3(i3, a2)), e3.transform = a2;
        let { x: o2, y: s2 } = this.projectionDelta;
        e3.transformOrigin = `${o2.origin * 100}% ${s2.origin * 100}% 0`, r3.animationValues ? e3.opacity = r3 === this ? i3.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i3.opacityExit : e3.opacity = r3 === this ? i3.opacity === void 0 ? "" : i3.opacity : i3.opacityExit === void 0 ? 0 : i3.opacityExit;
        for (let t4 in So) {
          if (i3[t4] === void 0) continue;
          let { correct: n4, applyTo: o3, isCSSVariable: s3 } = So[t4], c2 = a2 === "none" ? i3[t4] : n4(i3[t4], r3);
          if (o3) {
            let t5 = o3.length;
            for (let n5 = 0; n5 < t5; n5++) e3[o3[n5]] = c2;
          } else s3 ? this.options.visualElement.renderState.vars[t4] = c2 : e3[t4] = c2;
        }
        this.options.layoutId && (e3.pointerEvents = r3 === this ? Ps(t3?.pointerEvents) || "" : "none");
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((e3) => e3.currentAnimation?.stop()), this.root.nodes.forEach(Js), this.root.sharedNodes.clear();
      }
    };
  }
  function Us(e2) {
    e2.updateLayout();
  }
  function Ws(e2) {
    let t2 = e2.resumeFrom?.snapshot || e2.snapshot;
    if (e2.isLead() && e2.layout && t2 && e2.hasListeners("didUpdate")) {
      let { layoutBox: n2, measuredBox: r2 } = e2.layout, { animationType: i2 } = e2.options, a2 = t2.source !== e2.layout.source;
      if (i2 === "size") Q((e3) => {
        let r3 = a2 ? t2.measuredBox[e3] : t2.layoutBox[e3], i3 = Z(r3);
        r3.min = n2[e3].min, r3.max = r3.min + i3;
      });
      else if (i2 === "x" || i2 === "y") {
        let e3 = i2 === "x" ? "y" : "x";
        qo(a2 ? t2.measuredBox[e3] : t2.layoutBox[e3], n2[e3]);
      } else pc(i2, t2.layoutBox, n2) && Q((r3) => {
        let i3 = a2 ? t2.measuredBox[r3] : t2.layoutBox[r3], o3 = Z(n2[r3]);
        i3.max = i3.min + o3, e2.relativeTarget && !e2.currentAnimation && (e2.isProjectionDirty = true, e2.relativeTarget[r3].max = e2.relativeTarget[r3].min + o3);
      });
      let o2 = Da();
      ts(o2, n2, t2.layoutBox);
      let s2 = Da();
      a2 ? ts(s2, e2.applyTransform(r2, true), t2.measuredBox) : ts(s2, n2, t2.layoutBox);
      let c2 = !ps(o2), l2 = false;
      if (!e2.resumeFrom) {
        let r3 = e2.getClosestProjectingParent();
        if (r3 && !r3.resumeFrom) {
          let { snapshot: i3, layout: a3 } = r3;
          if (i3 && a3) {
            let o3 = e2.options.layoutAnchor || void 0, s3 = q();
            as(s3, t2.layoutBox, i3.layoutBox, o3);
            let c3 = q();
            as(c3, n2, a3.layoutBox, o3), _s(s3, c3) || (l2 = true), r3.options.layoutRoot && (e2.relativeTarget = c3, e2.relativeTargetOrigin = s3, e2.relativeParent = r3);
          }
        }
      }
      e2.notifyListeners("didUpdate", {
        layout: n2,
        snapshot: t2,
        delta: s2,
        layoutDelta: o2,
        hasLayoutChanged: c2,
        hasRelativeLayoutChanged: l2
      });
    } else if (e2.isLead()) {
      let { onExitComplete: t3 } = e2.options;
      t3 && t3();
    }
    e2.options.transition = void 0;
  }
  function Gs(e2) {
    va.value && $.nodes++, e2.parent && (e2.isProjecting() || (e2.isProjectionDirty = e2.parent.isProjectionDirty), e2.isSharedProjectionDirty || (e2.isSharedProjectionDirty = !!(e2.isProjectionDirty || e2.parent.isProjectionDirty || e2.parent.isSharedProjectionDirty)), e2.isTransformDirty || (e2.isTransformDirty = e2.parent.isTransformDirty));
  }
  function Ks(e2) {
    e2.isProjectionDirty = e2.isSharedProjectionDirty = e2.isTransformDirty = false;
  }
  function qs(e2) {
    e2.clearSnapshot();
  }
  function Js(e2) {
    e2.clearMeasurements();
  }
  function Ys(e2) {
    e2.isLayoutDirty = true, e2.updateLayout();
  }
  function Xs(e2) {
    e2.isLayoutDirty = false;
  }
  function Zs(e2) {
    e2.isAnimationBlocked && e2.layout && !e2.isLayoutDirty && (e2.snapshot = e2.layout, e2.isLayoutDirty = true);
  }
  function Qs(e2) {
    let { visualElement: t2 } = e2.options;
    t2 && t2.getProps().onBeforeLayoutMeasure && t2.notify("BeforeLayoutMeasure"), e2.resetTransform();
  }
  function $s(e2) {
    e2.finishAnimation(), e2.targetDelta = e2.relativeTarget = e2.target = void 0, e2.isProjectionDirty = true;
  }
  function ec(e2) {
    e2.resolveTargetDelta();
  }
  function tc(e2) {
    e2.calcProjection();
  }
  function nc(e2) {
    e2.resetSkewAndRotation();
  }
  function rc(e2) {
    e2.removeLeadSnapshot();
  }
  function ic(e2, t2, n2) {
    e2.translate = V(t2.translate, 0, n2), e2.scale = V(t2.scale, 1, n2), e2.origin = t2.origin, e2.originPoint = t2.originPoint;
  }
  function ac(e2, t2, n2, r2) {
    e2.min = V(t2.min, n2.min, r2), e2.max = V(t2.max, n2.max, r2);
  }
  function oc(e2, t2, n2, r2) {
    ac(e2.x, t2.x, n2.x, r2), ac(e2.y, t2.y, n2.y, r2);
  }
  function sc(e2) {
    return e2.animationValues && e2.animationValues.opacityExit !== void 0;
  }
  var cc = {
    duration: 0.45,
    ease: [
      0.4,
      0,
      0.1,
      1
    ]
  };
  var lc = (e2) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e2);
  var uc = lc("applewebkit/") && !lc("chrome/") ? Math.round : O;
  function dc(e2) {
    e2.min = uc(e2.min), e2.max = uc(e2.max);
  }
  function fc(e2) {
    dc(e2.x), dc(e2.y);
  }
  function pc(e2, t2, n2) {
    return e2 === "position" || e2 === "preserve-aspect" && !$o(vs(t2), vs(n2), 0.2);
  }
  function mc(e2) {
    return e2 !== e2.root && e2.scroll?.wasRoot;
  }
  var hc = Hs({
    attachResizeListener: (e2, t2) => As(e2, "resize", t2),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0
    }),
    checkIsScrollRoot: () => true
  });
  var gc = { current: void 0 };
  var _c = Hs({
    measureScroll: (e2) => ({
      x: e2.scrollLeft,
      y: e2.scrollTop
    }),
    defaultParent: () => {
      if (!gc.current) {
        let e2 = new hc({});
        e2.mount(window), e2.setOptions({ layoutScroll: true }), gc.current = e2;
      }
      return gc.current;
    },
    resetTransform: (e2, t2) => {
      e2.style.transform = t2 === void 0 ? "none" : t2;
    },
    checkIsScrollRoot: (e2) => window.getComputedStyle(e2).position === "fixed"
  });
  var vc = (0, import_react.createContext)({
    transformPagePoint: (e2) => e2,
    isStatic: false,
    reducedMotion: "never"
  });
  function yc(e2 = true) {
    let t2 = (0, import_react.useContext)(re);
    if (t2 === null) return [true, null];
    let { isPresent: n2, onExitComplete: r2, register: i2 } = t2, a2 = (0, import_react.useId)();
    (0, import_react.useEffect)(() => {
      if (e2) return i2(a2);
    }, [e2]);
    let o2 = (0, import_react.useCallback)(() => e2 && r2 && r2(a2), [
      a2,
      r2,
      e2
    ]);
    return !n2 && r2 ? [false, o2] : [true];
  }
  var bc = (0, import_react.createContext)({ strict: false });
  var xc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: [
      "whileHover",
      "onHoverStart",
      "onHoverEnd"
    ],
    tap: [
      "whileTap",
      "onTap",
      "onTapStart",
      "onTapCancel"
    ],
    pan: [
      "onPan",
      "onPanStart",
      "onPanSessionStart",
      "onPanEnd"
    ],
    inView: [
      "whileInView",
      "onViewportEnter",
      "onViewportLeave"
    ],
    layout: ["layout", "layoutId"]
  };
  var Sc = false;
  function Cc() {
    if (Sc) return;
    let e2 = {};
    for (let t2 in xc) e2[t2] = { isEnabled: (e3) => xc[t2].some((t3) => !!e3[t3]) };
    Ua(e2), Sc = true;
  }
  function wc() {
    return Cc(), Wa();
  }
  function Tc(e2) {
    let t2 = wc();
    for (let n2 in e2) t2[n2] = {
      ...t2[n2],
      ...e2[n2]
    };
    Ua(t2);
  }
  var Ec = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
  function Dc(e2) {
    return e2.startsWith("while") || e2.startsWith("drag") && e2 !== "draggable" || e2.startsWith("layout") || e2.startsWith("onTap") || e2.startsWith("onPan") || e2.startsWith("onLayout") || Ec.has(e2);
  }
  var Oc = /* @__PURE__ */ x({ default: () => kc });
  var kc;
  var Ac = b((() => {
    throw kc = {}, Error('Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?');
  }));
  var jc = (e2) => !Dc(e2);
  function Mc(e2) {
    typeof e2 == "function" && (jc = (t2) => t2.startsWith("on") ? !Dc(t2) : e2(t2));
  }
  try {
    Mc((Ac(), C(Oc)).default);
  } catch {
  }
  function Nc(e2, t2, n2) {
    let r2 = {};
    for (let i2 in e2) i2 === "values" && typeof e2.values == "object" || G(e2[i2]) || (jc(i2) || n2 === true && Dc(i2) || !t2 && !Dc(i2) || e2.draggable && i2.startsWith("onDrag")) && (r2[i2] = e2[i2]);
    return r2;
  }
  var Pc = /* @__PURE__ */ (0, import_react.createContext)({});
  function Fc(e2, t2) {
    if (Pa(e2)) {
      let { initial: t3, animate: n2 } = e2;
      return {
        initial: t3 === false || ja(t3) ? t3 : void 0,
        animate: ja(n2) ? n2 : void 0
      };
    }
    return e2.inherit === false ? {} : t2;
  }
  function Ic(e2) {
    let { initial: t2, animate: n2 } = Fc(e2, (0, import_react.useContext)(Pc));
    return (0, import_react.useMemo)(() => ({
      initial: t2,
      animate: n2
    }), [Lc(t2), Lc(n2)]);
  }
  function Lc(e2) {
    return Array.isArray(e2) ? e2.join(" ") : e2;
  }
  var Rc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function zc(e2, t2, n2) {
    for (let r2 in t2) !G(t2[r2]) && !Co(r2, n2) && (e2[r2] = t2[r2]);
  }
  function Bc({ transformTemplate: e2 }, t2) {
    return (0, import_react.useMemo)(() => {
      let n2 = Rc();
      return _o(n2, t2, e2), Object.assign({}, n2.vars, n2.style);
    }, [t2]);
  }
  function Vc(e2, t2) {
    let n2 = e2.style || {}, r2 = {};
    return zc(r2, n2, e2), Object.assign(r2, Bc(e2, t2)), r2;
  }
  function Hc(e2, t2) {
    let n2 = {}, r2 = Vc(e2, t2);
    return e2.drag && e2.dragListener !== false && (n2.draggable = false, r2.userSelect = r2.WebkitUserSelect = r2.WebkitTouchCallout = "none", r2.touchAction = e2.drag === true ? "none" : `pan-${e2.drag === "x" ? "y" : "x"}`), e2.tabIndex === void 0 && (e2.onTap || e2.onTapStart || e2.whileTap) && (n2.tabIndex = 0), n2.style = r2, n2;
  }
  var Uc = () => ({
    ...Rc(),
    attrs: {}
  });
  function Wc(e2, t2, n2, r2) {
    let i2 = (0, import_react.useMemo)(() => {
      let n3 = Uc();
      return jo(n3, t2, No(r2), e2.transformTemplate, e2.style), {
        ...n3.attrs,
        style: { ...n3.style }
      };
    }, [t2]);
    if (e2.style) {
      let t3 = {};
      zc(t3, e2.style, e2), i2.style = {
        ...t3,
        ...i2.style
      };
    }
    return i2;
  }
  var Gc = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
  ];
  function Kc(e2) {
    return typeof e2 != "string" || e2.includes("-") ? false : !!(Gc.indexOf(e2) > -1 || /[A-Z]/u.test(e2));
  }
  function qc(e2, t2, n2, { latestValues: i2 }, o2, s2 = false, c2) {
    let l2 = (c2 ?? Kc(e2) ? Wc : Hc)(t2, i2, o2, e2), u2 = Nc(t2, typeof e2 == "string", s2), d2 = e2 === import_react.Fragment ? {} : {
      ...u2,
      ...l2,
      ref: n2
    }, { children: f2 } = t2, m2 = (0, import_react.useMemo)(() => G(f2) ? f2.get() : f2, [f2]);
    return (0, import_react.createElement)(e2, {
      ...d2,
      children: m2
    });
  }
  function Jc({ scrapeMotionValuesFromProps: e2, createRenderState: t2 }, n2, r2, i2) {
    return {
      latestValues: Yc(n2, r2, i2, e2),
      renderState: t2()
    };
  }
  function Yc(e2, t2, n2, r2) {
    let i2 = {}, a2 = r2(e2, {});
    for (let e3 in a2) i2[e3] = Ps(a2[e3]);
    let { initial: o2, animate: s2 } = e2, c2 = Pa(e2), l2 = Fa(e2);
    t2 && l2 && !c2 && e2.inherit !== false && (o2 === void 0 && (o2 = t2.initial), s2 === void 0 && (s2 = t2.animate));
    let u2 = n2 ? n2.initial === false : false;
    u2 || (u2 = o2 === false);
    let d2 = u2 ? s2 : o2;
    if (d2 && typeof d2 != "boolean" && !Aa(d2)) {
      let t3 = Array.isArray(d2) ? d2 : [d2];
      for (let n3 = 0; n3 < t3.length; n3++) {
        let r3 = Qr(e2, t3[n3]);
        if (r3) {
          let { transitionEnd: e3, transition: t4, ...n4 } = r3;
          for (let e4 in n4) {
            let t5 = n4[e4];
            if (Array.isArray(t5)) {
              let e5 = u2 ? t5.length - 1 : 0;
              t5 = t5[e5];
            }
            t5 !== null && (i2[e4] = t5);
          }
          for (let t5 in e3) i2[t5] = e3[t5];
        }
      }
    }
    return i2;
  }
  var Xc = (e2) => (t2, n2) => {
    let r2 = (0, import_react.useContext)(Pc), i2 = (0, import_react.useContext)(re), a2 = () => Jc(e2, t2, r2, i2);
    return n2 ? a2() : w(a2);
  };
  var Zc = /* @__PURE__ */ Xc({
    scrapeMotionValuesFromProps: wo,
    createRenderState: Rc
  });
  var Qc = /* @__PURE__ */ Xc({
    scrapeMotionValuesFromProps: Fo,
    createRenderState: Uc
  });
  var $c = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
  function el(e2, t2, n2) {
    let r2 = (0, import_react.useRef)(n2);
    (0, import_react.useInsertionEffect)(() => {
      r2.current = n2;
    });
    let i2 = (0, import_react.useRef)(null);
    return (0, import_react.useCallback)((n3) => {
      n3 && e2.onMount?.(n3), t2 && (n3 ? t2.mount(n3) : t2.unmount());
      let a2 = r2.current;
      if (typeof a2 == "function") if (n3) {
        let e3 = a2(n3);
        typeof e3 == "function" && (i2.current = e3);
      } else i2.current ? (i2.current(), i2.current = null) : a2(n3);
      else a2 && (a2.current = n3);
    }, [t2]);
  }
  var tl = (0, import_react.createContext)({});
  function nl(e2) {
    return e2 && typeof e2 == "object" && Object.prototype.hasOwnProperty.call(e2, "current");
  }
  function rl(e2, t2, n2, r2, i2, a2) {
    let { visualElement: o2 } = (0, import_react.useContext)(Pc), s2 = (0, import_react.useContext)(bc), u2 = (0, import_react.useContext)(re), f2 = (0, import_react.useContext)(vc), p2 = f2.reducedMotion, h2 = f2.skipAnimations, g2 = (0, import_react.useRef)(null), _2 = (0, import_react.useRef)(false);
    r2 || (r2 = s2.renderer), !g2.current && r2 && (g2.current = r2(e2, {
      visualState: t2,
      parent: o2,
      props: n2,
      presenceContext: u2,
      blockInitialAnimation: u2 ? u2.initial === false : false,
      reducedMotionConfig: p2,
      skipAnimations: h2,
      isSVG: a2
    }), _2.current && g2.current && (g2.current.manuallyAnimateOnMount = true));
    let v2 = g2.current, y2 = (0, import_react.useContext)(tl);
    v2 && !v2.projection && i2 && (v2.type === "html" || v2.type === "svg") && il(g2.current, n2, i2, y2);
    let b2 = (0, import_react.useRef)(false);
    (0, import_react.useInsertionEffect)(() => {
      v2 && b2.current && v2.update(n2, u2);
    });
    let x2 = n2[si], S2 = (0, import_react.useRef)(!!x2 && typeof window < "u" && !window.MotionHandoffIsComplete?.(x2) && window.MotionHasOptimisedAnimation?.(x2));
    return ne(() => {
      _2.current = true, v2 && (b2.current = true, window.MotionIsMounted = true, v2.updateFeatures(), v2.scheduleRenderMicrotask(), S2.current && v2.animationState && v2.animationState.animateChanges());
    }), (0, import_react.useEffect)(() => {
      v2 && (!S2.current && v2.animationState && v2.animationState.animateChanges(), S2.current && (S2.current = (queueMicrotask(() => {
        window.MotionHandoffMarkAsComplete?.(x2);
      }), false)), v2.enteringChildren = void 0);
    }), v2;
  }
  function il(e2, t2, n2, r2) {
    let { layoutId: i2, layout: a2, drag: o2, dragConstraints: s2, layoutScroll: c2, layoutRoot: l2, layoutAnchor: u2, layoutCrossfade: d2 } = t2;
    e2.projection = new n2(e2.latestValues, t2["data-framer-portal-id"] ? void 0 : al(e2.parent)), e2.projection.setOptions({
      layoutId: i2,
      layout: a2,
      alwaysMeasureLayout: !!o2 || s2 && nl(s2),
      visualElement: e2,
      animationType: typeof a2 == "string" ? a2 : "both",
      initialPromotionConfig: r2,
      crossfade: d2,
      layoutScroll: c2,
      layoutRoot: l2,
      layoutAnchor: u2
    });
  }
  function al(e2) {
    if (e2) return e2.options.allowProjection === false ? al(e2.parent) : e2.projection;
  }
  function ol(n2, { forwardMotionProps: r2 = false, type: i2 } = {}, a2, s2) {
    a2 && Tc(a2);
    let l2 = i2 ? i2 === "svg" : Kc(n2), u2 = l2 ? Qc : Zc;
    function d2(i3, o2) {
      let d3, f3 = {
        ...(0, import_react.useContext)(vc),
        ...i3,
        layoutId: sl(i3)
      }, { isStatic: p2 } = f3, m2 = Ic(i3), h2 = u2(i3, p2);
      if (!p2 && typeof window < "u") {
        cl(f3, a2);
        let e2 = ll(f3);
        d3 = e2.MeasureLayout, m2.visualElement = rl(n2, h2, f3, s2, e2.ProjectionNode, l2);
      }
      return (0, import_jsx_runtime.jsxs)(Pc.Provider, {
        value: m2,
        children: [d3 && m2.visualElement ? (0, import_jsx_runtime.jsx)(d3, {
          visualElement: m2.visualElement,
          ...f3
        }) : null, qc(n2, i3, el(h2, m2.visualElement, o2), h2, p2, r2, l2)]
      });
    }
    d2.displayName = `motion.${typeof n2 == "string" ? n2 : `create(${n2.displayName ?? n2.name ?? ""})`}`;
    let f2 = (0, import_react.forwardRef)(d2);
    return f2[$c] = n2, f2;
  }
  function sl({ layoutId: e2 }) {
    let t2 = (0, import_react.useContext)(te).id;
    return t2 && e2 !== void 0 ? t2 + "-" + e2 : e2;
  }
  function cl(e2, t2) {
    let n2 = (0, import_react.useContext)(bc).strict;
    if (t2 && n2) {
      let t3 = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      e2.ignoreStrict ? se(false, t3, "lazy-strict-mode") : E(false, t3, "lazy-strict-mode");
    }
  }
  function ll(e2) {
    let { drag: t2, layout: n2 } = wc();
    if (!t2 && !n2) return {};
    let r2 = {
      ...t2,
      ...n2
    };
    return {
      MeasureLayout: t2?.isEnabled(e2) || n2?.isEnabled(e2) ? r2.MeasureLayout : void 0,
      ProjectionNode: r2.ProjectionNode
    };
  }
  function ul(e2, t2) {
    if (typeof Proxy > "u") return ol;
    let n2 = /* @__PURE__ */ new Map(), r2 = (n3, r3) => ol(n3, r3, e2, t2);
    return new Proxy((e3, t3) => (_e(false, "motion() is deprecated. Use motion.create() instead."), r2(e3, t3)), { get: (i2, a2) => a2 === "create" ? r2 : (n2.has(a2) || n2.set(a2, ol(a2, void 0, e2, t2)), n2.get(a2)) });
  }
  var dl = (e2, t2) => t2.isSVG ?? Kc(e2) ? new Io(t2) : new Eo(t2, { allowProjection: e2 !== import_react.Fragment });
  var fl = class extends J {
    constructor(e2) {
      super(e2), e2.animationState || (e2.animationState = Uo(e2));
    }
    updateAnimationControlsSubscription() {
      let { animate: e2 } = this.node.getProps();
      Aa(e2) && (this.unmountControls = e2.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e2 } = this.node.getProps(), { animate: t2 } = this.node.prevProps || {};
      e2 !== t2 && this.updateAnimationControlsSubscription();
    }
    unmount() {
      this.node.animationState.reset(), this.unmountControls?.();
    }
  };
  var pl = 0;
  var ml = {
    animation: { Feature: fl },
    exit: { Feature: class extends J {
      constructor() {
        super(...arguments), this.id = pl++, this.isExitComplete = false;
      }
      update() {
        if (!this.node.presenceContext) return;
        let { isPresent: e2, onExitComplete: t2 } = this.node.presenceContext, { isPresent: n2 } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e2 === n2) return;
        if (e2 && n2 === false) {
          if (this.isExitComplete) {
            let { initial: e3, custom: t3 } = this.node.getProps();
            if (typeof e3 == "string" || typeof e3 == "object" && e3 && !Array.isArray(e3)) {
              let n3 = W(this.node, e3, t3);
              if (n3) {
                let { transition: e4, transitionEnd: t4, ...r3 } = n3;
                for (let e5 in r3) this.node.getValue(e5)?.jump(r3[e5]);
              }
            }
            this.node.animationState.reset(), this.node.animationState.animateChanges();
          } else this.node.animationState.setActive("exit", false);
          this.isExitComplete = false;
          return;
        }
        let r2 = this.node.animationState.setActive("exit", !e2);
        t2 && !e2 && r2.then(() => {
          this.isExitComplete = true, t2(this.id);
        });
      }
      mount() {
        let { register: e2, onExitComplete: t2 } = this.node.presenceContext || {};
        t2 && t2(this.id), e2 && (this.unmount = e2(this.id));
      }
      unmount() {
      }
    } }
  };
  function hl(e2) {
    return { point: {
      x: e2.pageX,
      y: e2.pageY
    } };
  }
  var gl = (e2) => (t2) => Gi(t2) && e2(t2, hl(t2));
  function _l(e2, t2, n2, r2) {
    return As(e2, t2, gl(n2), r2);
  }
  var vl = ({ current: e2 }) => e2 ? e2.ownerDocument.defaultView : null;
  var yl = (e2, t2) => Math.abs(e2 - t2);
  function bl(e2, t2) {
    let n2 = yl(e2.x, t2.x), r2 = yl(e2.y, t2.y);
    return Math.sqrt(n2 ** 2 + r2 ** 2);
  }
  var xl = /* @__PURE__ */ new Set(["auto", "scroll"]);
  var Sl = class {
    constructor(e2, t2, { transformPagePoint: n2, contextWindow: r2 = window, dragSnapToOrigin: i2 = false, distanceThreshold: a2 = 3, element: o2 } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e3) => {
        this.handleScroll(e3.target);
      }, this.onWindowScroll = () => {
        this.handleScroll(window);
      }, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Cl(this.lastRawMoveEventInfo, this.transformPagePoint));
        let e3 = Tl(this.lastMoveEventInfo, this.history), t3 = this.startEvent !== null, n3 = bl(e3.offset, {
          x: 0,
          y: 0
        }) >= this.distanceThreshold;
        if (!t3 && !n3) return;
        let { point: r3 } = e3, { timestamp: i3 } = N;
        this.history.push({
          ...r3,
          timestamp: i3
        });
        let { onStart: a3, onMove: o3 } = this.handlers;
        t3 || (a3 && a3(this.lastMoveEvent, e3), this.startEvent = this.lastMoveEvent), o3 && o3(this.lastMoveEvent, e3);
      }, this.handlePointerMove = (e3, t3) => {
        this.lastMoveEvent = e3, this.lastRawMoveEventInfo = t3, this.lastMoveEventInfo = Cl(t3, this.transformPagePoint), j.update(this.updatePoint, true);
      }, this.handlePointerUp = (e3, t3) => {
        this.end();
        let { onEnd: n3, onSessionEnd: r3, resumeAnimation: i3 } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && i3 && i3(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let a3 = Tl(e3.type === "pointercancel" ? this.lastMoveEventInfo : Cl(t3, this.transformPagePoint), this.history);
        this.startEvent && n3 && n3(e3, a3), r3 && r3(e3, a3);
      }, !Gi(e2)) return;
      this.dragSnapToOrigin = i2, this.handlers = t2, this.transformPagePoint = n2, this.distanceThreshold = a2, this.contextWindow = r2 || window;
      let s2 = Cl(hl(e2), this.transformPagePoint), { point: c2 } = s2, { timestamp: l2 } = N;
      this.history = [{
        ...c2,
        timestamp: l2
      }];
      let { onSessionStart: u2 } = t2;
      u2 && u2(e2, Tl(s2, this.history));
      let d2 = {
        passive: true,
        capture: true
      };
      this.removeListeners = fe(_l(this.contextWindow, "pointermove", this.handlePointerMove, d2), _l(this.contextWindow, "pointerup", this.handlePointerUp, d2), _l(this.contextWindow, "pointercancel", this.handlePointerUp, d2)), o2 && this.startScrollTracking(o2);
    }
    startScrollTracking(e2) {
      let t2 = e2.parentElement;
      for (; t2; ) {
        let e3 = getComputedStyle(t2);
        (xl.has(e3.overflowX) || xl.has(e3.overflowY)) && this.scrollPositions.set(t2, {
          x: t2.scrollLeft,
          y: t2.scrollTop
        }), t2 = t2.parentElement;
      }
      this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY
      }), window.addEventListener("scroll", this.onElementScroll, { capture: true }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, { capture: true }), window.removeEventListener("scroll", this.onWindowScroll);
      };
    }
    handleScroll(e2) {
      let t2 = this.scrollPositions.get(e2);
      if (!t2) return;
      let n2 = e2 === window, r2 = n2 ? {
        x: window.scrollX,
        y: window.scrollY
      } : {
        x: e2.scrollLeft,
        y: e2.scrollTop
      }, i2 = {
        x: r2.x - t2.x,
        y: r2.y - t2.y
      };
      i2.x === 0 && i2.y === 0 || (n2 ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i2.x, this.lastMoveEventInfo.point.y += i2.y) : this.history.length > 0 && (this.history[0].x -= i2.x, this.history[0].y -= i2.y), this.scrollPositions.set(e2, r2), j.update(this.updatePoint, true));
    }
    updateHandlers(e2) {
      this.handlers = e2;
    }
    end() {
      this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), M(this.updatePoint);
    }
  };
  function Cl(e2, t2) {
    return t2 ? { point: t2(e2.point) } : e2;
  }
  function wl(e2, t2) {
    return {
      x: e2.x - t2.x,
      y: e2.y - t2.y
    };
  }
  function Tl({ point: e2 }, t2) {
    return {
      point: e2,
      delta: wl(e2, Dl(t2)),
      offset: wl(e2, El(t2)),
      velocity: Ol(t2, 0.1)
    };
  }
  function El(e2) {
    return e2[0];
  }
  function Dl(e2) {
    return e2[e2.length - 1];
  }
  function Ol(e2, t2) {
    if (e2.length < 2) return {
      x: 0,
      y: 0
    };
    let n2 = e2.length - 1, r2 = null, i2 = Dl(e2);
    for (; n2 >= 0 && (r2 = e2[n2], !(i2.timestamp - r2.timestamp > /* @__PURE__ */ k(t2))); ) n2--;
    if (!r2) return {
      x: 0,
      y: 0
    };
    r2 === e2[0] && e2.length > 2 && i2.timestamp - r2.timestamp > /* @__PURE__ */ k(t2) * 2 && (r2 = e2[1]);
    let a2 = /* @__PURE__ */ A(i2.timestamp - r2.timestamp);
    if (a2 === 0) return {
      x: 0,
      y: 0
    };
    let o2 = {
      x: (i2.x - r2.x) / a2,
      y: (i2.y - r2.y) / a2
    };
    return o2.x === Infinity && (o2.x = 0), o2.y === Infinity && (o2.y = 0), o2;
  }
  function kl(e2, { min: t2, max: n2 }, r2) {
    return t2 !== void 0 && e2 < t2 ? e2 = r2 ? V(t2, e2, r2.min) : Math.max(e2, t2) : n2 !== void 0 && e2 > n2 && (e2 = r2 ? V(n2, e2, r2.max) : Math.min(e2, n2)), e2;
  }
  function Al(e2, t2, n2) {
    return {
      min: t2 === void 0 ? void 0 : e2.min + t2,
      max: n2 === void 0 ? void 0 : e2.max + n2 - (e2.max - e2.min)
    };
  }
  function jl(e2, { top: t2, left: n2, bottom: r2, right: i2 }) {
    return {
      x: Al(e2.x, n2, i2),
      y: Al(e2.y, t2, r2)
    };
  }
  function Ml(e2, t2) {
    let n2 = t2.min - e2.min, r2 = t2.max - e2.max;
    return t2.max - t2.min < e2.max - e2.min && ([n2, r2] = [r2, n2]), {
      min: n2,
      max: r2
    };
  }
  function Nl(e2, t2) {
    return {
      x: Ml(e2.x, t2.x),
      y: Ml(e2.y, t2.y)
    };
  }
  function Pl(e2, t2) {
    let n2 = 0.5, r2 = Z(e2), i2 = Z(t2);
    return i2 > r2 ? n2 = /* @__PURE__ */ pe(t2.min, t2.max - r2, e2.min) : r2 > i2 && (n2 = /* @__PURE__ */ pe(e2.min, e2.max - i2, t2.min)), T(0, 1, n2);
  }
  function Fl(e2, t2) {
    let n2 = {};
    return t2.min !== void 0 && (n2.min = t2.min - e2.min), t2.max !== void 0 && (n2.max = t2.max - e2.min), n2;
  }
  var Il = 0.35;
  function Ll(e2 = Il) {
    return e2 === false ? e2 = 0 : e2 === true && (e2 = Il), {
      x: Rl(e2, "left", "right"),
      y: Rl(e2, "top", "bottom")
    };
  }
  function Rl(e2, t2, n2) {
    return {
      min: zl(e2, t2),
      max: zl(e2, n2)
    };
  }
  function zl(e2, t2) {
    return typeof e2 == "number" ? e2 : e2[t2] || 0;
  }
  var Bl = /* @__PURE__ */ new WeakMap();
  var Vl = class {
    constructor(e2) {
      this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = {
        x: 0,
        y: 0
      }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = q(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e2;
    }
    start(e2, { snapToCursor: t2 = false, distanceThreshold: n2 } = {}) {
      let { presenceContext: r2 } = this.visualElement;
      if (r2 && r2.isPresent === false) return;
      let i2 = (e3) => {
        t2 && this.snapToCursor(hl(e3).point), this.stopAnimation();
      }, a2 = (e3, t3) => {
        let { drag: n3, dragPropagation: r3, onDragStart: i3 } = this.getProps();
        if (n3 && !r3 && (this.openDragLock && this.openDragLock(), this.openDragLock = Bi(n3), !this.openDragLock)) return;
        this.latestPointerEvent = e3, this.latestPanInfo = t3, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), Q((e4) => {
          let t4 = this.getAxisMotionValue(e4).get() || 0;
          if (L.test(t4)) {
            let { projection: n4 } = this.visualElement;
            if (n4 && n4.layout) {
              let r4 = n4.layout.layoutBox[e4];
              r4 && (t4 = Z(r4) * (parseFloat(t4) / 100));
            }
          }
          this.originPoint[e4] = t4;
        }), i3 && j.update(() => i3(e3, t3), false, true), ai(this.visualElement, "transform");
        let { animationState: a3 } = this.visualElement;
        a3 && a3.setActive("whileDrag", true);
      }, o2 = (e3, t3) => {
        this.latestPointerEvent = e3, this.latestPanInfo = t3;
        let { dragPropagation: n3, dragDirectionLock: r3, onDirectionLock: i3, onDrag: a3 } = this.getProps();
        if (!n3 && !this.openDragLock) return;
        let { offset: o3 } = t3;
        if (r3 && this.currentDirection === null) {
          this.currentDirection = Gl(o3), this.currentDirection !== null && i3 && i3(this.currentDirection);
          return;
        }
        this.updateAxis("x", t3.point, o3), this.updateAxis("y", t3.point, o3), this.visualElement.render(), a3 && j.update(() => a3(e3, t3), false, true);
      }, s2 = (e3, t3) => {
        this.latestPointerEvent = e3, this.latestPanInfo = t3, this.stop(e3, t3), this.latestPointerEvent = null, this.latestPanInfo = null;
      }, c2 = () => {
        let { dragSnapToOrigin: e3 } = this.getProps();
        (e3 || this.constraints) && this.startAnimation({
          x: 0,
          y: 0
        });
      }, { dragSnapToOrigin: l2 } = this.getProps();
      this.panSession = new Sl(e2, {
        onSessionStart: i2,
        onStart: a2,
        onMove: o2,
        onSessionEnd: s2,
        resumeAnimation: c2
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: l2,
        distanceThreshold: n2,
        contextWindow: vl(this.visualElement),
        element: this.visualElement.current
      });
    }
    stop(e2, t2) {
      let n2 = e2 || this.latestPointerEvent, r2 = t2 || this.latestPanInfo, i2 = this.isDragging;
      if (this.cancel(), !i2 || !r2 || !n2) return;
      let { velocity: a2 } = r2;
      this.startAnimation(a2);
      let { onDragEnd: o2 } = this.getProps();
      o2 && j.postRender(() => o2(n2, r2));
    }
    cancel() {
      this.isDragging = false;
      let { projection: e2, animationState: t2 } = this.visualElement;
      e2 && (e2.isAnimationBlocked = false), this.endPanSession();
      let { dragPropagation: n2 } = this.getProps();
      !n2 && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t2 && t2.setActive("whileDrag", false);
    }
    endPanSession() {
      this.panSession && this.panSession.end(), this.panSession = void 0;
    }
    updateAxis(e2, t2, n2) {
      let { drag: r2 } = this.getProps();
      if (!n2 || !Wl(e2, r2, this.currentDirection)) return;
      let i2 = this.getAxisMotionValue(e2), a2 = this.originPoint[e2] + n2[e2];
      this.constraints && this.constraints[e2] && (a2 = kl(a2, this.constraints[e2], this.elastic[e2])), i2.set(a2);
    }
    resolveConstraints() {
      let { dragConstraints: e2, dragElastic: t2 } = this.getProps(), n2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout, r2 = this.constraints;
      e2 && nl(e2) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e2 && n2 ? this.constraints = jl(n2.layoutBox, e2) : this.constraints = false, this.elastic = Ll(t2), r2 !== this.constraints && !nl(e2) && n2 && this.constraints && !this.hasMutatedConstraints && Q((e3) => {
        this.constraints !== false && this.getAxisMotionValue(e3) && (this.constraints[e3] = Fl(n2.layoutBox[e3], this.constraints[e3]));
      });
    }
    resolveRefConstraints() {
      let { dragConstraints: e2, onMeasureDragConstraints: t2 } = this.getProps();
      if (!e2 || !nl(e2)) return false;
      let n2 = e2.current;
      E(n2 !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
      let { projection: r2 } = this.visualElement;
      if (!r2 || !r2.layout) return false;
      r2.root && (r2.root.scroll = void 0, r2.root.updateScroll());
      let i2 = po(n2, r2.root, this.visualElement.getTransformPagePoint()), a2 = Nl(r2.layout.layoutBox, i2);
      if (t2) {
        let e3 = t2(Ja(a2));
        this.hasMutatedConstraints = !!e3, e3 && (a2 = qa(e3));
      }
      return a2;
    }
    startAnimation(e2) {
      let { drag: t2, dragMomentum: n2, dragElastic: r2, dragTransition: i2, dragSnapToOrigin: a2, onDragTransitionEnd: o2 } = this.getProps(), s2 = this.constraints || {}, c2 = Q((o3) => {
        if (!Wl(o3, t2, this.currentDirection)) return;
        let c3 = s2 && s2[o3] || {};
        (a2 === true || a2 === o3) && (c3 = {
          min: 0,
          max: 0
        });
        let l2 = r2 ? 200 : 1e6, u2 = r2 ? 40 : 1e7, d2 = {
          type: "inertia",
          velocity: n2 ? e2[o3] : 0,
          bounceStiffness: l2,
          bounceDamping: u2,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...i2,
          ...c3
        };
        return this.startAxisValueAnimation(o3, d2);
      });
      return Promise.all(c2).then(o2);
    }
    startAxisValueAnimation(e2, t2) {
      let n2 = this.getAxisMotionValue(e2);
      return ai(this.visualElement, e2), n2.start(Kr(e2, n2, 0, t2, this.visualElement, false));
    }
    stopAnimation() {
      Q((e2) => this.getAxisMotionValue(e2).stop());
    }
    getAxisMotionValue(e2) {
      let t2 = `_drag${e2.toUpperCase()}`;
      return this.visualElement.getProps()[t2] || this.visualElement.getValue(e2, this.visualElement.latestValues[e2] ?? 0);
    }
    snapToCursor(e2) {
      Q((t2) => {
        let { drag: n2 } = this.getProps();
        if (!Wl(t2, n2, this.currentDirection)) return;
        let { projection: r2 } = this.visualElement, i2 = this.getAxisMotionValue(t2);
        if (r2 && r2.layout) {
          let { min: n3, max: a2 } = r2.layout.layoutBox[t2], o2 = i2.get() || 0;
          i2.set(e2[t2] - V(n3, a2, 0.5) + o2);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e2, dragConstraints: t2 } = this.getProps(), { projection: n2 } = this.visualElement;
      if (!nl(t2) || !n2 || !this.constraints) return;
      this.stopAnimation();
      let r2 = {
        x: 0,
        y: 0
      };
      Q((e3) => {
        let t3 = this.getAxisMotionValue(e3);
        if (t3 && this.constraints !== false) {
          let n3 = t3.get();
          r2[e3] = Pl({
            min: n3,
            max: n3
          }, this.constraints[e3]);
        }
      });
      let { transformTemplate: i2 } = this.visualElement.getProps();
      this.visualElement.current.style.transform = i2 ? i2({}, "") : "none", n2.root && n2.root.updateScroll(), n2.updateLayout(), this.constraints = false, this.resolveConstraints(), Q((t3) => {
        if (!Wl(t3, e2, null)) return;
        let n3 = this.getAxisMotionValue(t3), { min: i3, max: a2 } = this.constraints[t3];
        n3.set(V(i3, a2, r2[t3]));
      }), this.visualElement.render();
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Bl.set(this.visualElement, this);
      let e2 = this.visualElement.current, t2 = _l(e2, "pointerdown", (t3) => {
        let { drag: n3, dragListener: r3 = true } = this.getProps(), i3 = t3.target, a3 = i3 !== e2 && Yi(i3);
        n3 && r3 && !a3 && this.start(t3);
      }), n2, r2 = () => {
        let { dragConstraints: t3 } = this.getProps();
        nl(t3) && t3.current && (this.constraints = this.resolveRefConstraints(), n2 || (n2 = Ul(e2, t3.current, () => this.scalePositionWithinConstraints())));
      }, { projection: i2 } = this.visualElement, a2 = i2.addEventListener("measure", r2);
      i2 && !i2.layout && (i2.root && i2.root.updateScroll(), i2.updateLayout()), j.read(r2);
      let o2 = As(window, "resize", () => this.scalePositionWithinConstraints()), s2 = i2.addEventListener("didUpdate", (({ delta: e3, hasLayoutChanged: t3 }) => {
        this.isDragging && t3 && (Q((t4) => {
          let n3 = this.getAxisMotionValue(t4);
          n3 && (this.originPoint[t4] += e3[t4].translate, n3.set(n3.get() + e3[t4].translate));
        }), this.visualElement.render());
      }));
      return () => {
        o2(), t2(), a2(), s2 && s2(), n2 && n2();
      };
    }
    getProps() {
      let e2 = this.visualElement.getProps(), { drag: t2 = false, dragDirectionLock: n2 = false, dragPropagation: r2 = false, dragConstraints: i2 = false, dragElastic: a2 = Il, dragMomentum: o2 = true } = e2;
      return {
        ...e2,
        drag: t2,
        dragDirectionLock: n2,
        dragPropagation: r2,
        dragConstraints: i2,
        dragElastic: a2,
        dragMomentum: o2
      };
    }
  };
  function Hl(e2) {
    let t2 = true;
    return () => {
      if (t2) {
        t2 = false;
        return;
      }
      e2();
    };
  }
  function Ul(e2, t2, n2) {
    let r2 = _a(e2, Hl(n2)), i2 = _a(t2, Hl(n2));
    return () => {
      r2(), i2();
    };
  }
  function Wl(e2, t2, n2) {
    return (t2 === true || t2 === e2) && (n2 === null || n2 === e2);
  }
  function Gl(e2, t2 = 10) {
    let n2 = null;
    return Math.abs(e2.y) > t2 ? n2 = "y" : Math.abs(e2.x) > t2 && (n2 = "x"), n2;
  }
  var Kl = class extends J {
    constructor(e2) {
      super(e2), this.removeGroupControls = O, this.removeListeners = O, this.controls = new Vl(e2);
    }
    mount() {
      let { dragControls: e2 } = this.node.getProps();
      e2 && (this.removeGroupControls = e2.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || O;
    }
    update() {
      let { dragControls: e2 } = this.node.getProps(), { dragControls: t2 } = this.node.prevProps || {};
      e2 !== t2 && (this.removeGroupControls(), e2 && (this.removeGroupControls = e2.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
  };
  var ql = (e2) => (t2, n2) => {
    e2 && j.update(() => e2(t2, n2), false, true);
  };
  var Jl = class extends J {
    constructor() {
      super(...arguments), this.removePointerDownListener = O;
    }
    onPointerDown(e2) {
      this.session = new Sl(e2, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: vl(this.node)
      });
    }
    createPanHandlers() {
      let { onPanSessionStart: e2, onPanStart: t2, onPan: n2, onPanEnd: r2 } = this.node.getProps();
      return {
        onSessionStart: ql(e2),
        onStart: ql(t2),
        onMove: ql(n2),
        onEnd: (e3, t3) => {
          delete this.session, r2 && j.postRender(() => r2(e3, t3));
        }
      };
    }
    mount() {
      this.removePointerDownListener = _l(this.node.current, "pointerdown", (e2) => this.onPointerDown(e2));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  };
  var Yl = false;
  var Xl = class extends import_react.Component {
    componentDidMount() {
      let { visualElement: e2, layoutGroup: t2, switchLayoutGroup: n2, layoutId: r2 } = this.props, { projection: i2 } = e2;
      i2 && (t2.group && t2.group.add(i2), n2 && n2.register && r2 && n2.register(i2), Yl && i2.root.didUpdate(), i2.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), i2.setOptions({
        ...i2.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      })), Is.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(e2) {
      let { layoutDependency: t2, visualElement: n2, drag: r2, isPresent: i2 } = this.props, { projection: a2 } = n2;
      return a2 ? (a2.isPresent = i2, e2.layoutDependency !== t2 && a2.setOptions({
        ...a2.options,
        layoutDependency: t2
      }), Yl = true, r2 || e2.layoutDependency !== t2 || t2 === void 0 || e2.isPresent !== i2 ? a2.willUpdate() : this.safeToRemove(), e2.isPresent !== i2 && (i2 ? a2.promote() : a2.relegate() || j.postRender(() => {
        let e3 = a2.getStack();
        (!e3 || !e3.members.length) && this.safeToRemove();
      })), null) : null;
    }
    componentDidUpdate() {
      let { visualElement: e2, layoutAnchor: t2 } = this.props, { projection: n2 } = e2;
      n2 && (n2.options.layoutAnchor = t2, n2.root.didUpdate(), Li.postRender(() => {
        !n2.currentAnimation && n2.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      let { visualElement: e2, layoutGroup: t2, switchLayoutGroup: n2 } = this.props, { projection: r2 } = e2;
      Yl = true, r2 && (r2.scheduleCheckAfterUnmount(), t2 && t2.group && t2.group.remove(r2), n2 && n2.deregister && n2.deregister(r2));
    }
    safeToRemove() {
      let { safeToRemove: e2 } = this.props;
      e2 && e2();
    }
    render() {
      return null;
    }
  };
  function Zl(t2) {
    let [n2, r2] = yc(), i2 = (0, import_react.useContext)(te);
    return (0, import_jsx_runtime.jsx)(Xl, {
      ...t2,
      layoutGroup: i2,
      switchLayoutGroup: (0, import_react.useContext)(tl),
      isPresent: n2,
      safeToRemove: r2
    });
  }
  var Ql = {
    pan: { Feature: Jl },
    drag: {
      Feature: Kl,
      ProjectionNode: _c,
      MeasureLayout: Zl
    }
  };
  function $l(e2, t2, n2) {
    let { props: r2 } = e2;
    e2.animationState && r2.whileHover && e2.animationState.setActive("whileHover", n2 === "Start");
    let i2 = r2["onHover" + n2];
    i2 && j.postRender(() => i2(t2, hl(t2)));
  }
  var eu = class extends J {
    mount() {
      let { current: e2 } = this.node;
      e2 && (this.unmount = Ui(e2, (e3, t2) => ($l(this.node, t2, "Start"), (e4) => $l(this.node, e4, "End"))));
    }
    unmount() {
    }
  };
  var tu = class extends J {
    constructor() {
      super(...arguments), this.isActive = false;
    }
    onFocus() {
      let e2 = false;
      try {
        e2 = this.node.current.matches(":focus-visible");
      } catch {
        e2 = true;
      }
      !e2 || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
    }
    onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
    }
    mount() {
      this.unmount = fe(As(this.node.current, "focus", () => this.onFocus()), As(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  };
  function nu(e2, t2, n2) {
    let { props: r2 } = e2;
    if (e2.current instanceof HTMLButtonElement && e2.current.disabled) return;
    e2.animationState && r2.whileTap && e2.animationState.setActive("whileTap", n2 === "Start");
    let i2 = r2["onTap" + (n2 === "End" ? "" : n2)];
    i2 && j.postRender(() => i2(t2, hl(t2)));
  }
  var ru = class extends J {
    mount() {
      let { current: e2 } = this.node;
      if (!e2) return;
      let { globalTapTarget: t2, propagate: n2 } = this.node.props;
      this.unmount = na(e2, (e3, t3) => (nu(this.node, t3, "Start"), (e4, { success: t4 }) => nu(this.node, e4, t4 ? "End" : "Cancel")), {
        useGlobalTarget: t2,
        stopPropagation: n2?.tap === false
      });
    }
    unmount() {
    }
  };
  var iu = /* @__PURE__ */ new WeakMap();
  var au = /* @__PURE__ */ new WeakMap();
  var ou = (e2) => {
    let t2 = iu.get(e2.target);
    t2 && t2(e2);
  };
  var su = (e2) => {
    e2.forEach(ou);
  };
  function cu({ root: e2, ...t2 }) {
    let n2 = e2 || document;
    au.has(n2) || au.set(n2, {});
    let r2 = au.get(n2), i2 = JSON.stringify(t2);
    return r2[i2] || (r2[i2] = new IntersectionObserver(su, {
      root: e2,
      ...t2
    })), r2[i2];
  }
  function lu(e2, t2, n2) {
    let r2 = cu(t2);
    return iu.set(e2, n2), r2.observe(e2), () => {
      iu.delete(e2), r2.unobserve(e2);
    };
  }
  var uu = {
    some: 0,
    all: 1
  };
  var du = class extends J {
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
    startObserver() {
      this.stopObserver?.();
      let { viewport: e2 = {} } = this.node.getProps(), { root: t2, margin: n2, amount: r2 = "some", once: i2 } = e2, a2 = {
        root: t2 ? t2.current : void 0,
        rootMargin: n2,
        threshold: typeof r2 == "number" ? r2 : uu[r2]
      }, o2 = (e3) => {
        let { isIntersecting: t3 } = e3;
        if (this.isInView === t3 || (this.isInView = t3, i2 && !t3 && this.hasEnteredView)) return;
        t3 && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", t3);
        let { onViewportEnter: n3, onViewportLeave: r3 } = this.node.getProps(), a3 = t3 ? n3 : r3;
        a3 && a3(e3);
      };
      this.stopObserver = lu(this.node.current, a2, o2);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e2, prevProps: t2 } = this.node;
      [
        "amount",
        "margin",
        "root"
      ].some(fu(e2, t2)) && this.startObserver();
    }
    unmount() {
      this.stopObserver?.(), this.hasEnteredView = false, this.isInView = false;
    }
  };
  function fu({ viewport: e2 = {} }, { viewport: t2 = {} } = {}) {
    return (n2) => e2[n2] !== t2[n2];
  }
  var pu = {
    inView: { Feature: du },
    tap: { Feature: ru },
    focus: { Feature: tu },
    hover: { Feature: eu }
  };
  var mu = { layout: {
    ProjectionNode: _c,
    MeasureLayout: Zl
  } };
  var hu = /* @__PURE__ */ ul({
    ...ml,
    ...pu,
    ...Ql,
    ...mu
  }, dl);
  function gu(e2) {
    let t2 = w(() => Ir(e2)), { isStatic: n2 } = (0, import_react.useContext)(vc);
    if (n2) {
      let [, n3] = (0, import_react.useState)(e2);
      (0, import_react.useEffect)(() => t2.on("change", n3), []);
    }
    return t2;
  }
  function _u(e2, t2) {
    let n2 = gu(t2()), r2 = () => n2.set(t2());
    return r2(), ne(() => {
      let t3 = () => j.preRender(r2, false, true), n3 = e2.map((e3) => e3.on("change", t3));
      return () => {
        n3.forEach((e3) => e3()), M(r2);
      };
    }), n2;
  }
  function vu(e2) {
    Pr.current = [], e2();
    let t2 = _u(Pr.current, e2);
    return Pr.current = void 0, t2;
  }
  function yu(e2, t2, n2, r2) {
    if (typeof e2 == "function") return vu(e2);
    if (n2 !== void 0 && !Array.isArray(n2) && typeof t2 != "function") return xu(e2, t2, n2, r2);
    let i2 = typeof t2 == "function" ? t2 : ba(t2, n2, r2), a2 = Array.isArray(e2) ? bu(e2, i2) : bu([e2], ([e3]) => i2(e3)), o2 = Array.isArray(e2) ? void 0 : e2.accelerate;
    return o2 && !o2.isTransformed && typeof t2 != "function" && Array.isArray(n2) && r2?.clamp !== false && (a2.accelerate = {
      ...o2,
      times: t2,
      keyframes: n2,
      isTransformed: true,
      ...r2?.ease ? { ease: r2.ease } : {}
    }), a2;
  }
  function bu(e2, t2) {
    let n2 = w(() => []);
    return _u(e2, () => {
      n2.length = 0;
      let r2 = e2.length;
      for (let t3 = 0; t3 < r2; t3++) n2[t3] = e2[t3].get();
      return t2(n2);
    });
  }
  function xu(e2, t2, n2, r2) {
    let i2 = w(() => Object.keys(n2)), a2 = w(() => ({}));
    for (let o2 of i2) a2[o2] = yu(e2, t2, n2[o2], r2);
    return a2;
  }
  function Su(e2, t2 = {}) {
    let { isStatic: n2 } = (0, import_react.useContext)(vc), r2 = () => G(e2) ? e2.get() : e2;
    if (n2) return yu(r2);
    let i2 = gu(r2());
    return (0, import_react.useInsertionEffect)(() => xa(i2, e2, t2), [i2, JSON.stringify(t2)]), i2;
  }
  function Cu(e2, t2 = {}) {
    return Su(e2, {
      type: "spring",
      ...t2
    });
  }
  var wu = hu;
  function Tu({ game: n2, onClick: r2, onDelete: i2 }) {
    let a2 = (0, import_react.useRef)(null), o2 = gu(0.5), s2 = gu(0.5), c2 = Cu(yu(s2, [0, 1], [7, -7]), {
      stiffness: 200,
      damping: 20
    }), l2 = Cu(yu(o2, [0, 1], [-7, 7]), {
      stiffness: 200,
      damping: 20
    }), u2 = n2.cover && n2.cover.trim();
    function d2(e2) {
      let t2 = a2.current.getBoundingClientRect();
      o2.set((e2.clientX - t2.left) / t2.width), s2.set((e2.clientY - t2.top) / t2.height);
    }
    function f2() {
      o2.set(0.5), s2.set(0.5);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      ref: a2,
      className: "game-card",
      onClick: () => r2(n2.id),
      onMouseMove: d2,
      onMouseLeave: f2,
      style: { cursor: "pointer" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(wu.div, { style: {
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "90%",
          height: "90%",
          background: "rgba(0,0,0,0.5)",
          borderRadius: "var(--radius)",
          transformOrigin: "top center",
          rotateX: c2,
          scale: yu(c2, [
            7,
            0,
            -7
          ], [
            1.05,
            1,
            1.05
          ]),
          opacity: yu(c2, [
            7,
            0,
            -7
          ], [
            0.6,
            0.5,
            0.6
          ])
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(wu.div, {
          style: {
            position: "absolute",
            inset: 0,
            zIndex: 1,
            transformOrigin: "top center",
            rotateX: c2,
            rotateY: l2
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ee, {
            width: "100%",
            height: "100%",
            background: u2 ? "transparent" : n2.color,
            borderRadius: "var(--radius)",
            borderColor: "transparent",
            glareColor: "#ffffff",
            glareOpacity: 0.4,
            glareAngle: -30,
            glareSize: 300,
            transitionDuration: 800,
            playOnce: false,
            style: u2 ? {
              backgroundImage: `url('${n2.cover}')`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            } : {},
            children: [
              !u2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "game-card-generated",
                children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "game-card-generated-icon",
                  children: n2.icon
                }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "game-card-generated-name",
                  children: n2.name
                })]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "game-card-scrim" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "game-card-title",
                children: n2.name
              })
            ]
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(wu.button, {
          className: "game-card-delete",
          onClick: (e2) => {
            e2.stopPropagation(), i2(n2.id);
          },
          title: "Delete",
          initial: { opacity: 0 },
          whileHover: {
            opacity: 1,
            background: "var(--danger)",
            color: "#fff"
          },
          style: { opacity: 0 },
          onMouseEnter: (e2) => {
            e2.currentTarget.style.opacity = 1;
          },
          onMouseLeave: (e2) => {
            e2.currentTarget.style.opacity = 0;
          },
          children: "\u2715"
        })
      ]
    });
  }
  return __toCommonJS(index_exports);
})();
window.ScoreBar=ScoreBar.__dsMainNs?Object.assign({},ScoreBar,ScoreBar.__dsMainNs,{__dsMainNs:undefined}):ScoreBar;
