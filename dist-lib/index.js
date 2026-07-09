import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { Component as n, Fragment as r, createContext as i, createElement as a, forwardRef as o, useCallback as s, useContext as c, useEffect as l, useId as u, useInsertionEffect as d, useLayoutEffect as f, useMemo as p, useRef as m, useState as h } from "react";
//#region \0rolldown/runtime.js
var g = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, v = Object.getOwnPropertyNames, y = Object.prototype.hasOwnProperty, b = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, x = (e, t) => {
	let n = {};
	for (var r in e) g(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || g(n, Symbol.toStringTag, { value: "Module" }), n;
}, S = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = v(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !y.call(e, s) && s !== n && g(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = _(t, s)) || r.enumerable
	});
	return e;
}, C = (e) => y.call(e, "module.exports") ? e["module.exports"] : S(g({}, "__esModule", { value: !0 }), e), ee = ({ width: t = "500px", height: n = "500px", background: r = "#000", borderRadius: i = "10px", borderColor: a = "#333", children: o, glareColor: s = "#ffffff", glareOpacity: c = .5, glareAngle: l = -45, glareSize: u = 250, transitionDuration: d = 650, playOnce: f = !1, className: p = "", style: m = {} }) => {
	let h = s.replace("#", ""), g = s;
	/^[0-9A-Fa-f]{6}$/.test(h) ? g = `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${c})` : /^[0-9A-Fa-f]{3}$/.test(h) && (g = `rgba(${parseInt(h[0] + h[0], 16)}, ${parseInt(h[1] + h[1], 16)}, ${parseInt(h[2] + h[2], 16)}, ${c})`);
	let _ = {
		"--gh-width": t,
		"--gh-height": n,
		"--gh-bg": r,
		"--gh-br": i,
		"--gh-angle": `${l}deg`,
		"--gh-duration": `${d}ms`,
		"--gh-size": `${u}%`,
		"--gh-rgba": g,
		"--gh-border": a
	};
	return /* @__PURE__ */ e("div", {
		className: `glare-hover ${f ? "glare-hover--play-once" : ""} ${p}`,
		style: {
			..._,
			...m
		},
		children: o
	});
}, te = i({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-constant.mjs
function w(e) {
	let t = m(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var ne = typeof window < "u" ? f : l, re = /* @__PURE__ */ i(null);
//#endregion
//#region node_modules/motion-utils/dist/es/array.mjs
function ie(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function ae(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/motion-utils/dist/es/clamp.mjs
var T = (e, t, n) => n > t ? t : n < e ? e : n;
//#endregion
//#region node_modules/motion-utils/dist/es/format-error-message.mjs
function oe(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
//#endregion
//#region node_modules/motion-utils/dist/es/errors.mjs
var se = () => {}, E = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (se = (e, t, n) => {
	!e && typeof console < "u" && console.warn(oe(t, n));
}, E = (e, t, n) => {
	if (!e) throw Error(oe(t, n));
});
//#endregion
//#region node_modules/motion-utils/dist/es/global-config.mjs
var D = {}, ce = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), le = (e) => typeof e == "object" && !!e, ue = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function de(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/motion-utils/dist/es/noop.mjs
var O = /* @__NO_SIDE_EFFECTS__ */ (e) => e, fe = (...e) => e.reduce((e, t) => (n) => t(e(n))), pe = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, me = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return ie(this.subscriptions, e), () => ae(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, k = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, A = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, he = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? 1e3 / t * e : 0, ge = /* @__PURE__ */ new Set();
function _e(e, t, n) {
	e || ge.has(t) || (console.warn(oe(t, n)), ge.add(t));
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var ve = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, ye = 1e-7, be = 12;
function xe(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = ve(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > ye && ++s < be);
	return o;
}
/*#__NO_SIDE_EFFECTS__*/
function Se(e, t, n, r) {
	if (e === t && n === r) return O;
	let i = (t) => xe(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : ve(i(e), t, r);
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var Ce = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, we = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), Te = /*@__PURE__*/ Se(.33, 1.53, .69, .99), Ee = /*@__PURE__*/ we(Te), De = /*@__PURE__*/ Ce(Ee), Oe = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * Ee(e) : .5 * (2 - 2 ** (-10 * (e - 1))), ke = (e) => 1 - Math.sin(Math.acos(e)), Ae = /* @__PURE__ */ we(ke), je = /* @__PURE__ */ Ce(ke), Me = /*@__PURE__*/ Se(.42, 0, 1, 1), Ne = /*@__PURE__*/ Se(0, 0, .58, 1), Pe = /*@__PURE__*/ Se(.42, 0, .58, 1), Fe = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number", Ie = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", Le = {
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
}, Re = (e) => typeof e == "string", ze = (e) => {
	if (/* @__PURE__ */ Ie(e)) {
		E(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return /* @__PURE__ */ Se(t, n, r, i);
	} else if (Re(e)) return E(Le[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Le[e];
	return e;
}, Be = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function Ve(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1, a = /* @__PURE__ */ new WeakSet(), o = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};
	function s(t) {
		a.has(t) && (c.schedule(t), e()), t(o);
	}
	let c = {
		schedule: (e, i = !1, o = !1) => {
			let s = o && r ? t : n;
			return i && a.add(e), s.add(e), e;
		},
		cancel: (e) => {
			n.delete(e), a.delete(e);
		},
		process: (e) => {
			if (o = e, r) {
				i = !0;
				return;
			}
			r = !0;
			let a = t;
			t = n, n = a, t.forEach(s), t.clear(), r = !1, i && (i = !1, c.process(e));
		}
	};
	return c;
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var He = 40;
function Ue(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = Be.reduce((e, t) => (e[t] = Ve(a), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = D.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, He), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: Be.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < Be.length; t++) o[Be[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: j, cancel: M, state: N, steps: We } = /* @__PURE__ */ Ue(typeof requestAnimationFrame < "u" ? requestAnimationFrame : O, !0), Ge;
function Ke() {
	Ge = void 0;
}
var P = {
	now: () => (Ge === void 0 && P.set(N.isProcessing || D.useManualTiming ? N.timestamp : performance.now()), Ge),
	set: (e) => {
		Ge = e, queueMicrotask(Ke);
	}
}, qe = (e) => (t) => typeof t == "string" && t.startsWith(e), Je = /*@__PURE__*/ qe("--"), Ye = /*@__PURE__*/ qe("var(--"), Xe = (e) => Ye(e) ? Ze.test(e.split("/*")[0].trim()) : !1, Ze = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Qe(e) {
	return typeof e == "string" && e.split("/*")[0].includes("var(--");
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var $e = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, et = {
	...$e,
	transform: (e) => T(0, 1, e)
}, tt = {
	...$e,
	default: 1
}, nt = (e) => Math.round(e * 1e5) / 1e5, rt = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function it(e) {
	return e == null;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var at = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ot = (e, t) => (n) => !!(typeof n == "string" && at.test(n) && n.startsWith(e) || t && !it(n) && Object.prototype.hasOwnProperty.call(n, t)), st = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(rt);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, ct = (e) => T(0, 255, e), lt = {
	...$e,
	transform: (e) => Math.round(ct(e))
}, F = {
	test: /*@__PURE__*/ ot("rgb", "red"),
	parse: /*@__PURE__*/ st("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + lt.transform(e) + ", " + lt.transform(t) + ", " + lt.transform(n) + ", " + nt(et.transform(r)) + ")"
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function ut(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var dt = {
	test: /*@__PURE__*/ ot("#"),
	parse: ut,
	transform: F.transform
}, ft = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), I = /*@__PURE__*/ ft("deg"), L = /*@__PURE__*/ ft("%"), R = /*@__PURE__*/ ft("px"), pt = /*@__PURE__*/ ft("vh"), mt = /*@__PURE__*/ ft("vw"), ht = {
	...L,
	parse: (e) => L.parse(e) / 100,
	transform: (e) => L.transform(e * 100)
}, gt = {
	test: /*@__PURE__*/ ot("hsl", "hue"),
	parse: /*@__PURE__*/ st("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + L.transform(nt(t)) + ", " + L.transform(nt(n)) + ", " + nt(et.transform(r)) + ")"
}, z = {
	test: (e) => F.test(e) || dt.test(e) || gt.test(e),
	parse: (e) => F.test(e) ? F.parse(e) : gt.test(e) ? gt.parse(e) : dt.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? F.transform(e) : gt.transform(e),
	getAnimatableNone: (e) => {
		let t = z.parse(e);
		return t.alpha = 0, z.transform(t);
	}
}, _t = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function vt(e) {
	return isNaN(e) && typeof e == "string" && (e.match(rt)?.length || 0) + (e.match(_t)?.length || 0) > 0;
}
var yt = "number", bt = "color", xt = "var", St = "var(", Ct = "${}", wt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Tt(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(wt, (e) => (z.test(e) ? (r.color.push(a), i.push(bt), n.push(z.parse(e))) : e.startsWith(St) ? (r.var.push(a), i.push(xt), n.push(e)) : (r.number.push(a), i.push(yt), n.push(parseFloat(e))), ++a, Ct)).split(Ct),
		indexes: r,
		types: i
	};
}
function Et(e) {
	return Tt(e).values;
}
function Dt({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === yt ? i += nt(r[a]) : e === bt ? i += z.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function Ot(e) {
	return Dt(Tt(e));
}
var kt = (e) => typeof e == "number" ? 0 : z.test(e) ? z.getAnimatableNone(e) : e, At = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : kt(e);
function jt(e) {
	let t = Tt(e);
	return Dt(t)(t.values.map((e, n) => At(e, t.split[n])));
}
var B = {
	test: vt,
	parse: Et,
	createTransformer: Ot,
	getAnimatableNone: jt
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function Mt(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Nt({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Mt(s, r, e + 1 / 3), a = Mt(s, r, e), o = Mt(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function Pt(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/number.mjs
var V = (e, t, n) => e + (t - e) * n, Ft = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, It = [
	dt,
	F,
	gt
], Lt = (e) => It.find((t) => t.test(e));
function Rt(e) {
	let t = Lt(e);
	if (se(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === gt && (n = Nt(n)), n;
}
var zt = (e, t) => {
	let n = Rt(e), r = Rt(t);
	if (!n || !r) return Pt(e, t);
	let i = { ...n };
	return (e) => (i.red = Ft(n.red, r.red, e), i.green = Ft(n.green, r.green, e), i.blue = Ft(n.blue, r.blue, e), i.alpha = V(n.alpha, r.alpha, e), F.transform(i));
}, Bt = /* @__PURE__ */ new Set(["none", "hidden"]);
function Vt(e, t) {
	return Bt.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function Ht(e, t) {
	return (n) => V(e, t, n);
}
function Ut(e) {
	return typeof e == "number" ? Ht : typeof e == "string" ? Xe(e) ? Pt : z.test(e) ? zt : qt : Array.isArray(e) ? Wt : typeof e == "object" ? z.test(e) ? zt : Gt : Pt;
}
function Wt(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Ut(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function Gt(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ut(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Kt(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var qt = (e, t) => {
	let n = B.createTransformer(t), r = Tt(e), i = Tt(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Bt.has(e) && !i.values.length || Bt.has(t) && !r.values.length ? Vt(e, t) : fe(Wt(Kt(r, i), i.values), n) : (se(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Pt(e, t));
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/index.mjs
function Jt(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? V(e, t, n) : Ut(e)(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var Yt = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => j.update(t, e),
		stop: () => M(t),
		now: () => N.isProcessing ? N.timestamp : P.now()
	};
}, Xt = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Zt = 2e4;
function Qt(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function $t(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Qt(r), Zt);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ A(i)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var H = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function en(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var tn = 12;
function nn(e, t, n) {
	let r = n;
	for (let n = 1; n < tn; n++) r -= e(r) / t(r);
	return r;
}
var rn = .001;
function an({ duration: e = H.duration, bounce: t = H.bounce, velocity: n = H.velocity, mass: r = H.mass }) {
	let i, a;
	se(e <= /* @__PURE__ */ k(H.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = T(H.minDamping, H.maxDamping, o), e = T(H.minDuration, H.maxDuration, /* @__PURE__ */ A(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = en(t, o), c = Math.exp(-i);
		return rn - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = en(t ** 2, o);
		return (-i(t) + rn > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = nn(i, a, s);
	if (e = /* @__PURE__ */ k(e), isNaN(c)) return {
		stiffness: H.stiffness,
		damping: H.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var on = ["duration", "bounce"], sn = [
	"stiffness",
	"damping",
	"mass"
];
function cn(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function ln(e) {
	let t = {
		velocity: H.velocity,
		stiffness: H.stiffness,
		damping: H.damping,
		mass: H.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!cn(e, sn) && cn(e, on)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * T(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: H.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = an({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: H.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function un(e = H.visualDuration, t = H.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = ln({
		...n,
		velocity: -/* @__PURE__ */ A(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ A(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? H.restSpeed.granular : H.restSpeed.default, i ||= v ? H.restDelta.granular : H.restDelta.default;
	let y, b, x, S, C, ee;
	if (h < 1) x = en(_, h), S = (m + h * _ * g) / x, y = (e) => {
		let t = Math.exp(-h * _ * e);
		return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
	}, C = h * _ * S + g * x, ee = h * _ * g - S * x, b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + ee * Math.cos(x * e));
	else if (h === 1) {
		y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		b = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let te = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ k(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ k(t * (C * n + ee * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ k(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Qt(te), Zt), t = Xt((t) => te.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return te;
}
un.applyToOptions = (e) => {
	let t = $t(e, 100, un);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ k(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var dn = 5;
function fn(e, t, n) {
	let r = Math.max(t - dn, 0);
	return /* @__PURE__ */ he(n - e(r), t - r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function pn({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = un({
			keyframes: [f.value, m(f.value)],
			velocity: fn(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/interpolate.mjs
function mn(e, t, n) {
	let r = [], i = n || D.mix || Jt, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = fe(Array.isArray(t) ? t[n] || O : t, a)), r.push(a);
	}
	return r;
}
function hn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (E(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = mn(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ pe(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(T(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function gn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ pe(0, t, r);
		e.push(V(n, 1, i));
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function _n(e) {
	let t = [0];
	return gn(t, e.length - 1), t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function vn(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function yn(e, t) {
	return e.map(() => t || Pe).splice(0, e.length - 1);
}
function bn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = /* @__PURE__ */ Fe(r) ? r.map(ze) : ze(r), a = {
		done: !1,
		value: t[0]
	}, o = hn(vn(n && n.length === t.length ? n : _n(t), e), t, { ease: Array.isArray(i) ? i : yn(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var xn = (e) => e !== null;
function Sn(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(xn), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Cn = {
	decay: pn,
	inertia: pn,
	tween: bn,
	keyframes: bn,
	spring: un
};
function wn(e) {
	typeof e.type == "string" && (e.type = Cn[e.type]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var Tn = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, En = (e) => e / 100, Dn = class extends Tn {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== P.now() && this.tick(P.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		wn(e);
		let { type: t = bn, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || bn;
		process.env.NODE_ENV !== "production" && s !== bn && E(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), s !== bn && typeof o[0] != "number" && (this.mixKeyframes = fe(En, Jt(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Qt(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = T(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== pn && (b.value = Sn(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ A(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ A(e);
	}
	get time() {
		return /* @__PURE__ */ A(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ k(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return fn((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(P.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ A(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Yt, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
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
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function On(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var kn = (e) => e * 180 / Math.PI, An = (e) => Mn(kn(Math.atan2(e[1], e[0]))), jn = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: An,
	rotateZ: An,
	skewX: (e) => kn(Math.atan(e[1])),
	skewY: (e) => kn(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Mn = (e) => (e %= 360, e < 0 && (e += 360), e), Nn = An, Pn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Fn = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), In = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Pn,
	scaleY: Fn,
	scale: (e) => (Pn(e) + Fn(e)) / 2,
	rotateX: (e) => Mn(kn(Math.atan2(e[6], e[5]))),
	rotateY: (e) => Mn(kn(Math.atan2(-e[2], e[0]))),
	rotateZ: Nn,
	rotate: Nn,
	skewX: (e) => kn(Math.atan(e[4])),
	skewY: (e) => kn(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Ln(e) {
	return +!!e.includes("scale");
}
function Rn(e, t) {
	if (!e || e === "none") return Ln(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = In, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = jn, i = t;
	}
	if (!i) return Ln(t);
	let a = r[t], o = i[1].split(",").map(Bn);
	return typeof a == "function" ? a(o) : o[a];
}
var zn = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return Rn(n, t);
};
function Bn(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
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
], Hn = /* @__PURE__ */ new Set([...Vn, "pathRotation"]), Un = (e) => e === $e || e === R, Wn = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), Gn = Vn.filter((e) => !Wn.has(e));
function Kn(e) {
	let t = [];
	return Gn.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var U = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => Rn(t, "x"),
	y: (e, { transform: t }) => Rn(t, "y")
};
U.translateX = U.x, U.translateY = U.y;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var qn = /* @__PURE__ */ new Set(), Jn = !1, Yn = !1, Xn = !1;
function Zn() {
	if (Yn) {
		let e = Array.from(qn).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = Kn(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Yn = !1, Jn = !1, qn.forEach((e) => e.complete(Xn)), qn.clear();
}
function Qn() {
	qn.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Yn = !0);
	});
}
function $n() {
	Xn = !0, Qn(), Zn(), Xn = !1;
}
var er = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (qn.add(this), Jn || (Jn = !0, j.read(Qn), j.resolveKeyframes(Zn))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		On(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), qn.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (qn.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, tr = (e) => e.startsWith("--");
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function nr(e, t, n) {
	tr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var rr = {};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function ir(e, t) {
	let n = /* @__PURE__ */ de(e);
	return () => rr[t] ?? n();
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var ar = /* @__PURE__ */ ir(() => window.ScrollTimeline !== void 0, "scrollTimeline"), or = /*@__PURE__*/ ir(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), sr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, cr = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ sr([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ sr([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ sr([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ sr([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function lr(e, t) {
	if (e) return typeof e == "function" ? or() ? Xt(e, t) : "ease-out" : /* @__PURE__ */ Ie(e) ? sr(e) : Array.isArray(e) ? e.map((e) => lr(e, t) || cr.easeOut) : cr[e];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function ur(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = lr(s, i);
	Array.isArray(d) && (u.easing = d);
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	return l && (f.pseudoElement = l), e.animate(u, f);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function dr(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function fr({ type: e, ...t }) {
	return dr(e) && or() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var pr = class extends Tn {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, E(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let c = fr(e);
		this.animation = ur(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Sn(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), nr(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
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
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ A(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ A(e);
	}
	get time() {
		return /* @__PURE__ */ A(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ k(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && ar() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), O) : r(this);
	}
}, mr = {
	anticipate: Oe,
	backInOut: De,
	circInOut: je
};
function hr(e) {
	return e in mr;
}
function gr(e) {
	typeof e.ease == "string" && hr(e.ease) && (e.ease = mr[e.ease]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var _r = 10, vr = class extends pr {
	constructor(e) {
		gr(e), wn(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new Dn({
			...a,
			autoplay: !1
		}), s = Math.max(_r, P.now() - this.startTime), c = T(0, _r, s - _r), l = o.sample(s).value, { name: u } = this.options;
		i && u && nr(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, yr = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (B.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function br(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function xr(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = yr(i, t), s = yr(a, t);
	return se(o === s, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !s ? !1 : br(e) || (n === "spring" || dr(n)) && r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Sr(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var Cr = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), wr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Tr(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && wr.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
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
]), Dr = /*@__PURE__*/ de(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Or(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return Dr() && n && (Cr.has(n) || Er.has(n) && Tr(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var kr = 40, Ar = class extends Tn {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = P.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || er;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = P.now();
		let u = !0;
		xr(e, i, a, o) || (u = !1, (D.instantAnimations || !s) && l?.(Sn(e, n, t)), e[0] = e[e.length - 1], Sr(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > kr ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && Or(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new vr({
				...d,
				element: p
			});
		} catch {
			m = new Dn(d);
		}
		else m = new Dn(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(O), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
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
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
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
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function jr(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/index.mjs
var Mr = 30, Nr = (e) => !isNaN(parseFloat(e)), Pr = { current: void 0 }, Fr = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = P.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = P.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Nr(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && _e(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new me());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), j.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return Pr.current && Pr.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = P.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Mr) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, Mr);
		return /* @__PURE__ */ he(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
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
function Ir(e, t) {
	return new Fr(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function Lr(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function Rr(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : Lr(n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var zr = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Br = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Vr = {
	type: "keyframes",
	duration: .8
}, Hr = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, Ur = (e, { keyframes: t }) => t.length > 2 ? Vr : Hn.has(e) ? e.startsWith("scale") ? Br(t[1]) : zr : Hr, Wr = /* @__PURE__ */ new Set([
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
function Gr(e) {
	for (let t in e) if (!Wr.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Kr = (e, t, n, r = {}, i, a) => (o) => {
	let s = Rr(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ k(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	Gr(s) || Object.assign(u, Ur(e, u)), u.duration &&= /* @__PURE__ */ k(u.duration), u.repeatDelay &&= /* @__PURE__ */ k(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Sr(u), u.delay === 0 && (d = !0)), (D.instantAnimations || D.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, Sr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = Sn(u.keyframes, s);
		if (e !== void 0) {
			j.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new Dn(u) : new Ar(u);
}, qr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Jr(e) {
	let t = qr.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var Yr = 4;
function Xr(e, t, n = 1) {
	E(n <= Yr, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = Jr(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return ce(e) ? parseFloat(e) : e;
	}
	return Xe(i) ? Xr(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function Zr(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function Qr(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = Zr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = Zr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function W(e, t, n) {
	let r = e.getProps();
	return Qr(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var $r = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...Vn
]), ei = (e) => Array.isArray(e);
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/setters.mjs
function ti(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ir(n));
}
function ni(e) {
	return ei(e) ? e[e.length - 1] || 0 : e;
}
function ri(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = W(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) ti(e, t, ni(i[t]));
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var G = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/is.mjs
function ii(e) {
	return !!(G(e) && e.add);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function ai(e, t) {
	let n = e.getValue("willChange");
	if (ii(n)) return n.add(t);
	if (!n && D.WillChange) {
		let n = new D.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function oi(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var si = "data-" + oi("framerAppearId");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function ci(e) {
	return e.props[si];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function li({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function ui(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? Lr(a, c) : c;
	let l = a?.reduceMotion, u = a?.skipAnimations;
	r && (a = r);
	let d = [], f = i && e.animationState && e.animationState.getState()[i], p = a?.path;
	p && p.animateVisualElement(e, s, a, n, d);
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || f && li(f, t)) continue;
		let o = {
			delay: n,
			...Rr(a || {}, t)
		};
		u && (o.skipAnimations = !0);
		let c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			j.update(() => r.set(i));
			continue;
		}
		let p = !1;
		if (window.MotionHandoffAnimation) {
			let n = ci(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, j);
				e !== null && (o.startTime = e, p = !0);
			}
		}
		ai(e, t);
		let m = l ?? e.shouldReduceMotion;
		r.start(Kr(t, r, i, m && $r.has(t) ? { type: !1 } : o, e, p));
		let h = r.animation;
		h && d.push(h);
	}
	if (o) {
		let t = () => j.update(() => {
			o && ri(e, o);
		});
		d.length ? Promise.all(d).then(t) : t();
	}
	return d;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function di(e, t, n = {}) {
	let r = W(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(ui(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return fi(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function fi(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(di(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + jr(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function pi(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => di(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = di(e, t, n);
	else {
		let i = typeof t == "function" ? W(e, t, n.custom) : t;
		r = Promise.all(ui(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/auto.mjs
var mi = {
	test: (e) => e === "auto",
	parse: (e) => e
}, hi = (e) => (t) => t.test(e), gi = [
	$e,
	R,
	L,
	I,
	mt,
	pt,
	mi
], _i = (e) => gi.find(hi(e));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function vi(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || ue(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var yi = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function bi(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(rt) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!yi.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var xi = /\b([a-z-]*)\(.*?\)/gu, Si = {
	...B,
	getAnimatableNone: (e) => {
		let t = e.match(xi);
		return t ? t.map(bi).join(" ") : e;
	}
}, Ci = {
	...B,
	getAnimatableNone: (e) => {
		let t = B.parse(e);
		return B.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, wi = {
	...$e,
	transform: Math.round
}, Ti = {
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
}, Ei = {
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
}, Di = (e) => Ei[e], Oi = /*@__PURE__*/ new Set([Si, Ci]);
function ki(e, t) {
	let n = Di(e);
	return Oi.has(n) || (n = B), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Ai = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function ji(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Ai.has(t) && Tt(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = ki(n, i);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var Mi = class extends er {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), Xe(r))) {
				let i = Xr(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !$r.has(n) || e.length !== 2) return;
		let [r, i] = e, a = _i(r), o = _i(i);
		if (Qe(r) !== Qe(i) && U[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (Un(a) && Un(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else U[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || vi(e[t])) && n.push(t);
		n.length && ji(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = U[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = U[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
}, Ni = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomRightRadius",
	"borderBottomLeftRadius"
];
//#endregion
//#region node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function Pi(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var Fi = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function Ii(e) {
	return le(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: Li, cancel: Ri } = /* @__PURE__ */ Ue(queueMicrotask, !1), K = {
	x: !1,
	y: !1
};
function zi() {
	return K.x || K.y;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function Bi(e) {
	return e === "x" || e === "y" ? K[e] ? null : (K[e] = !0, () => {
		K[e] = !1;
	}) : K.x || K.y ? null : (K.x = K.y = !0, () => {
		K.x = K.y = !1;
	});
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function Vi(e, t) {
	let n = Pi(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/hover.mjs
function Hi(e) {
	return !(e.pointerType === "touch" || zi());
}
function Ui(e, t, n = {}) {
	let [r, i, a] = Vi(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!Hi(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var Wi = (e, t) => t ? e === t || Wi(e, t.parentElement) : !1, Gi = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Ki = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function qi(e) {
	return Ki.has(e.tagName) || e.isContentEditable === !0;
}
var Ji = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function Yi(e) {
	return Ji.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var Xi = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function Zi(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Qi(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var $i = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = Zi(() => {
		if (Xi.has(n)) return;
		Qi(n, "down");
		let e = Zi(() => {
			Qi(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Qi(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/index.mjs
function ea(e) {
	return Gi(e) && !zi();
}
var ta = /* @__PURE__ */ new WeakSet();
function na(e, t, n = {}) {
	let [r, i, a] = Vi(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!ea(e) || ta.has(e)) return;
		Xi.add(r), n.stopPropagation && ta.add(e);
		let a = t(r, e), o = {
			...i,
			capture: !0
		}, s = (e, t) => {
			window.removeEventListener("pointerup", c, o), window.removeEventListener("pointercancel", l, o), Xi.has(r) && Xi.delete(r), ea(e) && typeof a == "function" && a(e, { success: t });
		}, c = (e) => {
			s(e, r === window || r === document || n.useGlobalTarget || Wi(r, e.target));
		}, l = (e) => {
			s(e, !1);
		};
		window.addEventListener("pointerup", c, o), window.addEventListener("pointercancel", l, o);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), Ii(e) && (e.addEventListener("focus", (e) => $i(e, i)), !qi(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function ra(e) {
	return le(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-element.mjs
var ia = /* @__PURE__ */ new WeakMap(), aa, oa = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : ra(r) && "getBBox" in r ? r.getBBox()[t] : r[n], sa = /*@__PURE__*/ oa("inline", "width", "offsetWidth"), ca = /*@__PURE__*/ oa("block", "height", "offsetHeight");
function la({ target: e, borderBoxSize: t }) {
	ia.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return sa(e, t);
			},
			get height() {
				return ca(e, t);
			}
		});
	});
}
function ua(e) {
	e.forEach(la);
}
function da() {
	typeof ResizeObserver > "u" || (aa = new ResizeObserver(ua));
}
function fa(e, t) {
	aa || da();
	let n = Pi(e);
	return n.forEach((e) => {
		let n = ia.get(e);
		n || (n = /* @__PURE__ */ new Set(), ia.set(e, n)), n.add(t), aa?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = ia.get(e);
			n?.delete(t), n?.size || aa?.unobserve(e);
		});
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-window.mjs
var pa = /* @__PURE__ */ new Set(), ma;
function ha() {
	ma = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		pa.forEach((t) => t(e));
	}, window.addEventListener("resize", ma);
}
function ga(e) {
	return pa.add(e), ma || ha(), () => {
		pa.delete(e), !pa.size && typeof ma == "function" && (window.removeEventListener("resize", ma), ma = void 0);
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/index.mjs
function _a(e, t) {
	return typeof e == "function" ? ga(e) : fa(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/stats/buffer.mjs
var va = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function ya(e) {
	return ra(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/transform.mjs
function ba(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = hn(i, a, o);
	return t ? s(r) : s;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/follow-value.mjs
function xa(e, t, n = {}) {
	let r = e.get(), i = null, a = r, o, s = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, c = () => {
		i &&= (i.stop(), null), e.animation = void 0;
	}, l = () => {
		let t = Ca(e.get()), r = Ca(a);
		if (t === r) {
			c();
			return;
		}
		let s = i ? i.getGeneratorVelocity() : e.getVelocity();
		c(), i = new Dn({
			keyframes: [t, r],
			velocity: s,
			type: "spring",
			restDelta: .001,
			restSpeed: .01,
			...n,
			onUpdate: o
		});
	}, u = () => {
		l(), e.animation = i ?? void 0, e.events.animationStart?.notify(), i?.then(() => {
			e.animation = void 0, e.events.animationComplete?.notify();
		});
	};
	if (e.attach((e, t) => {
		a = e, o = (e) => t(Sa(e, s)), j.postRender(u);
	}, c), G(t)) {
		let r = n.skipInitialAnimation === !0, i = t.on("change", (t) => {
			r ? (r = !1, e.jump(Sa(t, s), !1)) : e.set(Sa(t, s));
		}), a = e.on("destroy", i);
		return () => {
			i(), a();
		};
	}
	return c;
}
function Sa(e, t) {
	return t ? e + t : e;
}
function Ca(e) {
	return typeof e == "number" ? e : parseFloat(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var wa = [
	...gi,
	z,
	B
], Ta = (e) => wa.find(hi(e)), Ea = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), Da = () => ({
	x: Ea(),
	y: Ea()
}), Oa = () => ({
	min: 0,
	max: 0
}), q = () => ({
	x: Oa(),
	y: Oa()
}), ka = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function Aa(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function ja(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var Ma = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], Na = ["initial", ...Ma];
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function Pa(e) {
	return Aa(e.animate) || Na.some((t) => ja(e[t]));
}
function Fa(e) {
	return !!(Pa(e) || e.variants);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function Ia(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (G(i)) e.addValue(r, i);
		else if (G(a)) e.addValue(r, Ir(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, Ir(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var La = { current: null }, Ra = { current: !1 }, za = typeof window < "u";
function Ba() {
	if (Ra.current = !0, za) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => La.current = e.matches;
		e.addEventListener("change", t), t();
	} else La.current = !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/VisualElement.mjs
var Va = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Ha = {};
function Ua(e) {
	Ha = e;
}
function Wa() {
	return Ha;
}
var Ga = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = er, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = P.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, j.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = Pa(t), this.isVariantNode = Fa(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && G(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, ka.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Ra.current || Ba(), this.shouldReduceMotion = La.current), process.env.NODE_ENV !== "production" && _e(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), M(this.notifyUpdate), M(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && Cr.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new pr({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ k(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = Hn.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && j.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in Ha) {
			let t = Ha[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : q();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < Va.length; t++) {
			let n = Va[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Ia(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
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
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = Ir(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (ce(n) || ue(n)) ? n = parseFloat(n) : !Ta(n) && B.test(t) && (n = ki(e, t)), this.setBaseTarget(e, G(n) ? n.get() : n)), G(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = Qr(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !G(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new me()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		Li.render(this.render);
	}
}, Ka = class extends Ga {
	constructor() {
		super(...arguments), this.KeyframeResolver = Mi;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		G(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, J = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function qa({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function Ja({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function Ya(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function Xa(e) {
	return e === void 0 || e === 1;
}
function Za({ scale: e, scaleX: t, scaleY: n }) {
	return !Xa(e) || !Xa(t) || !Xa(n);
}
function Qa(e) {
	return Za(e) || $a(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function $a(e) {
	return eo(e.x) || eo(e.y);
}
function eo(e) {
	return e && e !== "0%";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function to(e, t, n) {
	return n + t * (e - n);
}
function no(e, t, n, r, i) {
	return i !== void 0 && (e = to(e, i, r)), to(e, n, r) + t;
}
function ro(e, t = 0, n = 1, r, i) {
	e.min = no(e.min, t, n, r, i), e.max = no(e.max, t, n, r, i);
}
function io(e, { x: t, y: n }) {
	ro(e.x, t.translate, t.scale, t.originPoint), ro(e.y, n.translate, n.scale, n.originPoint);
}
var ao = .999999999999, oo = 1.0000000000001;
function so(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (Y(e.x, -a.scroll.offset.x), Y(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, io(e, o)), r && Qa(a.latestValues) && uo(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < oo && t.x > ao && (t.x = 1), t.y < oo && t.y > ao && (t.y = 1);
}
function Y(e, t) {
	e.min += t, e.max += t;
}
function co(e, t, n, r, i = .5) {
	ro(e, t, n, V(e.min, e.max, i), r);
}
function lo(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function uo(e, t, n) {
	let r = n ?? e;
	co(e.x, lo(t.x, r.x), t.scaleX, t.scale, t.originX), co(e.y, lo(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function fo(e, t) {
	return qa(Ya(e.getBoundingClientRect(), t));
}
function po(e, t, n) {
	let r = fo(e, n), { scroll: i } = t;
	return i && (Y(r.x, i.offset.x), Y(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var mo = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, ho = Vn.length;
function go(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < ho; a++) {
		let o = Vn[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = Fi(s, Ti[o]);
			if (!c) {
				i = !1;
				let t = mo[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	let a = e.pathRotation;
	return a && (i = !1, r += `rotate(${Fi(a, Ti.pathRotation)}) `), r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function _o(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (Hn.has(e)) {
			o = !0;
			continue;
		} else if (Je(e)) {
			i[e] = n;
			continue;
		} else {
			let t = Fi(n, Ti[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = go(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function vo(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function yo(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var bo = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (R.test(e)) e = parseFloat(e);
	else return e;
	return `${yo(e, t.target.x)}% ${yo(e, t.target.y)}%`;
} }, xo = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = B.parse(e);
	if (i.length > 5) return r;
	let a = B.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = V(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, So = {
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
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function Co(e, { layout: t, layoutId: n }) {
	return Hn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!So[e] || e === "opacity");
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function wo(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (G(r[t]) || i && G(i[t]) || Co(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function To(e) {
	return window.getComputedStyle(e);
}
var Eo = class extends Ka {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = vo;
	}
	readValueFromInstance(e, t) {
		if (Hn.has(t)) return this.projection?.isProjecting ? Ln(t) : zn(e, t);
		{
			let n = To(e), r = (Je(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return fo(e, t);
	}
	build(e, t, n) {
		_o(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return wo(e, t, n);
	}
}, Do = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, Oo = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function ko(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? Do : Oo;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var Ao = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function jo(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (_o(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of Ao) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && ko(d, i, a, o, !1);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
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
]), No = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function Po(e, t, n, r) {
	vo(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(Mo.has(n) ? n : oi(n), t.attrs[n]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function Fo(e, t, n) {
	let r = wo(e, t, n);
	for (let n in e) if (G(e[n]) || G(t[n])) {
		let t = Vn.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var Io = class extends Ka {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = q;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (Hn.has(t)) {
			let e = Di(t);
			return e && e.default || 0;
		}
		return t = Mo.has(t) ? t : oi(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Fo(e, t, n);
	}
	build(e, t, n) {
		jo(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		Po(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = No(e.tagName), super.mount(e);
	}
}, Lo = Na.length;
function Ro(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Ro(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Lo; n++) {
		let r = Na[n], i = e.props[r];
		(ja(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function zo(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var Bo = [...Ma].reverse(), Vo = Ma.length;
function Ho(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => pi(e, t, n)));
}
function Uo(e) {
	let t = Ho(e), n = Ko(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = W(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = Ro(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < Vo; t++) {
			let p = Bo[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = ja(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || Aa(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = Wo(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: ee = {} } = m, te = {
				...ee,
				...C
			}, w = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in te) {
				let t = C[e], n = ee[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = ei(t) && ei(n) ? !zo(t, n) || y : t !== n, r ? t == null ? u.add(e) : w(e) : t !== void 0 && u.has(e) ? w(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let ne = v && y;
			b && (!ne || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !ne && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = W(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = jr(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != "boolean") {
				let n = W(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = Ko(), i = !0;
		}
	};
}
function Wo(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !zo(t, e) : !1;
}
function Go(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Ko() {
	return {
		animate: Go(!0),
		whileInView: Go(),
		whileHover: Go(),
		whileTap: Go(),
		whileDrag: Go(),
		whileFocus: Go(),
		exit: Go()
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function qo(e, t) {
	e.min = t.min, e.max = t.max;
}
function X(e, t) {
	qo(e.x, t.x), qo(e.y, t.y);
}
function Jo(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var Yo = .9999, Xo = 1.0001, Zo = -.01, Qo = .01;
function Z(e) {
	return e.max - e.min;
}
function $o(e, t, n) {
	return Math.abs(e - t) <= n;
}
function es(e, t, n, r = .5) {
	e.origin = r, e.originPoint = V(t.min, t.max, e.origin), e.scale = Z(n) / Z(t), e.translate = V(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Yo && e.scale <= Xo || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Zo && e.translate <= Qo || isNaN(e.translate)) && (e.translate = 0);
}
function ts(e, t, n, r) {
	es(e.x, t.x, n.x, r ? r.originX : void 0), es(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ns(e, t, n, r = 0) {
	e.min = (r ? V(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Z(t);
}
function rs(e, t, n, r) {
	ns(e.x, t.x, n.x, r?.x), ns(e.y, t.y, n.y, r?.y);
}
function is(e, t, n, r = 0) {
	let i = r ? V(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + Z(t);
}
function as(e, t, n, r) {
	is(e.x, t.x, n.x, r?.x), is(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function os(e, t, n, r, i) {
	return e -= t, e = to(e, 1 / n, r), i !== void 0 && (e = to(e, 1 / i, r)), e;
}
function ss(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (L.test(t) && (t = parseFloat(t), t = V(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = V(a.min, a.max, r);
	e === a && (s -= t), e.min = os(e.min, t, n, s, i), e.max = os(e.max, t, n, s, i);
}
function cs(e, t, [n, r, i], a, o) {
	ss(e, t[n], t[r], t[i], t.scale, a, o);
}
var ls = [
	"x",
	"scaleX",
	"originX"
], us = [
	"y",
	"scaleY",
	"originY"
];
function ds(e, t, n, r) {
	cs(e.x, t, ls, n ? n.x : void 0, r ? r.x : void 0), cs(e.y, t, us, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function fs(e) {
	return e.translate === 0 && e.scale === 1;
}
function ps(e) {
	return fs(e.x) && fs(e.y);
}
function ms(e, t) {
	return e.min === t.min && e.max === t.max;
}
function hs(e, t) {
	return ms(e.x, t.x) && ms(e.y, t.y);
}
function gs(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function _s(e, t) {
	return gs(e.x, t.x) && gs(e.y, t.y);
}
function vs(e) {
	return Z(e.x) / Z(e.y);
}
function ys(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function Q(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function bs(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, pathRotation: i, rotateX: a, rotateY: o, skewX: s, skewY: c } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotate(${i}deg) `), a && (r += `rotateX(${a}deg) `), o && (r += `rotateY(${o}deg) `), s && (r += `skewX(${s}deg) `), c && (r += `skewY(${c}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var xs = Ni.length, Ss = (e) => typeof e == "string" ? parseFloat(e) : e, Cs = (e) => typeof e == "number" || R.test(e);
function ws(e, t, n, r, i, a) {
	i ? (e.opacity = V(0, n.opacity ?? 1, Es(r)), e.opacityExit = V(t.opacity ?? 1, 0, Ds(r))) : a && (e.opacity = V(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < xs; i++) {
		let a = Ni[i], o = Ts(t, a), s = Ts(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || Cs(o) === Cs(s) ? (e[a] = Math.max(V(Ss(o), Ss(s), r), 0), (L.test(s) || L.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = V(t.rotate || 0, n.rotate || 0, r));
}
function Ts(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Es = /*@__PURE__*/ Os(0, .5, Ae), Ds = /*@__PURE__*/ Os(.5, .95, O);
function Os(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ pe(e, t, r));
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function ks(e, t, n) {
	let r = G(e) ? e : Ir(e);
	return r.start(Kr("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function As(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var js = (e, t) => e.depth - t.depth, Ms = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		ie(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		ae(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(js), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/delay.mjs
function Ns(e, t) {
	let n = P.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (M(r), e(a - t));
	};
	return j.setup(r, !0), () => M(r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function Ps(e) {
	return G(e) ? e.get() : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var Fs = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		ie(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (ae(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (ae(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
}, Is = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, $ = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, Ls = [
	"",
	"X",
	"Y",
	"Z"
], Rs = 1e3, zs = 0;
function Bs(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Vs(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = ci(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", j, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && Vs(r);
}
function Hs({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = zs++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, va.value && ($.nodes = $.calculatedTargetDeltas = $.calculatedProjections = 0), this.nodes.forEach(Gs), this.nodes.forEach(ec), this.nodes.forEach(tc), this.nodes.forEach(Ks), va.addProjectionMetrics && va.addProjectionMetrics($);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Ms());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new me()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = ra(t) && !ya(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				j.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = Ns(i, 250), Is.hasAnimatedSinceResize && (Is.hasAnimatedSinceResize = !1, this.nodes.forEach($s)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || cc, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !_s(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...Rr(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l, t.path);
				} else t || $s(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), M(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(nc), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Vs(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, (typeof t.latestValues.x == "string" || typeof t.latestValues.y == "string") && (t.isLayoutDirty = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Ys), this.nodes.forEach(Js);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Xs);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Zs), this.nodes.forEach(Qs), this.nodes.forEach(Us), this.nodes.forEach(Ws)) : this.nodes.forEach(Xs), this.clearAllSnapshots();
			let e = P.now();
			N.delta = T(0, 1e3 / 60, e - N.timestamp), N.timestamp = e, N.isProcessing = !0, We.update.process(N), We.preRender.process(N), We.render.process(N), N.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, Li.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(qs), this.sharedNodes.forEach(rc);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, j.preRender(this.updateProjection, !1, !0));
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
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= q(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !ps(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Qa(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), fc(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return q();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(mc))) {
				let { scroll: e } = this.root;
				e && (Y(t.x, e.offset.x), Y(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = q();
			if (X(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && X(t, e), Y(t.x, i.offset.x), Y(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || q();
			X(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (Y(r.x, -n.scroll.offset.x), Y(r.y, -n.scroll.offset.y)), Qa(n.latestValues) && uo(r, n.latestValues, n.layout?.layoutBox);
			}
			return Qa(this.latestValues) && uo(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = q();
			X(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!Qa(n.latestValues)) continue;
				let r;
				n.instance && (Za(n.latestValues) && n.updateSnapshot(), r = q(), X(r, n.measurePageBox())), ds(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return Qa(this.latestValues) && ds(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 || e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== N.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = N.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = q(), this.targetWithTransforms = q()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), rs(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : X(this.target, this.layout.layoutBox), io(this.target, this.targetDelta)) : X(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), va.value && $.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Za(this.parent.latestValues) || $a(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = q(), this.relativeTargetOrigin = q(), as(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), X(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === N.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			X(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			so(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = q());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Jo(this.prevProjectionDelta.x, this.projectionDelta.x), Jo(this.prevProjectionDelta.y, this.projectionDelta.y)), ts(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !ys(this.projectionDelta.x, this.prevProjectionDelta.x) || !ys(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), va.value && $.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = Da(), this.projectionDelta = Da(), this.projectionDeltaWithTransform = Da();
		}
		setAnimationOrigin(e, t = !1, n) {
			let r = this.snapshot, i = r ? r.latestValues : {}, a = { ...this.latestValues }, o = Da();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let s = q(), c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0), l = this.getStack(), u = !l || l.members.length <= 1, d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(sc));
			this.animationProgress = 0;
			let f, p = n?.interpolateProjection(e);
			this.mixTargetDelta = (t) => {
				let n = t / 1e3, r = p?.(n);
				r ? (o.x.translate = r.x, o.x.scale = V(e.x.scale, 1, n), o.x.origin = e.x.origin, o.x.originPoint = e.x.originPoint, o.y.translate = r.y, o.y.scale = V(e.y.scale, 1, n), o.y.origin = e.y.origin, o.y.originPoint = e.y.originPoint) : (ic(o.x, e.x, n), ic(o.y, e.y, n)), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (as(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), oc(this.relativeTarget, this.relativeTargetOrigin, s, n), f && hs(this.relativeTarget, f) && (this.isProjectionDirty = !1), f ||= q(), X(f, this.relativeTarget)), c && (this.animationValues = a, ws(a, i, this.latestValues, n, d, u)), r && r.rotate !== void 0 && (this.animationValues ||= a, this.animationValues.pathRotation = r.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (M(this.pendingAnimation), void 0), this.pendingAnimation = j.update(() => {
				Is.hasAnimatedSinceResize = !0, this.motionValue ||= Ir(0), this.motionValue.jump(0, !1), this.currentAnimation = ks(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onComplete: () => {
						e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Rs), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && pc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || q();
					let t = Z(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Z(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				X(t, n), uo(t, i), ts(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new Fs()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return !e || e.lead === this;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && Bs("z", e, r, this.animationValues);
			for (let t = 0; t < Ls.length; t++) Bs(`rotate${Ls[t]}`, e, r, this.animationValues), Bs(`skew${Ls[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = "hidden";
				return;
			}
			let n = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = Ps(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = Ps(t?.pointerEvents) || ""), this.hasProjected && !Qa(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = bs(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in So) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = So[t], c = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? Ps(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(Js), this.root.sharedNodes.clear();
		}
	};
}
function Us(e) {
	e.updateLayout();
}
function Ws(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") Q((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Z(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			qo(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else pc(i, t.layoutBox, n) && Q((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Z(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = Da();
		ts(o, n, t.layoutBox);
		let s = Da();
		a ? ts(s, e.applyTransform(r, !0), t.measuredBox) : ts(s, n, t.layoutBox);
		let c = !ps(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = q();
					as(s, t.layoutBox, i.layoutBox, o);
					let c = q();
					as(c, n, a.layoutBox, o), _s(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function Gs(e) {
	va.value && $.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Ks(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function qs(e) {
	e.clearSnapshot();
}
function Js(e) {
	e.clearMeasurements();
}
function Ys(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function Xs(e) {
	e.isLayoutDirty = !1;
}
function Zs(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Qs(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function $s(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function ec(e) {
	e.resolveTargetDelta();
}
function tc(e) {
	e.calcProjection();
}
function nc(e) {
	e.resetSkewAndRotation();
}
function rc(e) {
	e.removeLeadSnapshot();
}
function ic(e, t, n) {
	e.translate = V(t.translate, 0, n), e.scale = V(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ac(e, t, n, r) {
	e.min = V(t.min, n.min, r), e.max = V(t.max, n.max, r);
}
function oc(e, t, n, r) {
	ac(e.x, t.x, n.x, r), ac(e.y, t.y, n.y, r);
}
function sc(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var cc = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, lc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), uc = lc("applewebkit/") && !lc("chrome/") ? Math.round : O;
function dc(e) {
	e.min = uc(e.min), e.max = uc(e.max);
}
function fc(e) {
	dc(e.x), dc(e.y);
}
function pc(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !$o(vs(t), vs(n), .2);
}
function mc(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var hc = Hs({
	attachResizeListener: (e, t) => As(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), gc = { current: void 0 }, _c = Hs({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!gc.current) {
			let e = new hc({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), gc.current = e;
		}
		return gc.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), vc = i({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function yc(e = !0) {
	let t = c(re);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = u();
	l(() => {
		if (e) return i(a);
	}, [e]);
	let o = s(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/LazyContext.mjs
var bc = i({ strict: !1 }), xc = {
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
}, Sc = !1;
function Cc() {
	if (Sc) return;
	let e = {};
	for (let t in xc) e[t] = { isEnabled: (e) => xc[t].some((t) => !!e[t]) };
	Ua(e), Sc = !0;
}
function wc() {
	return Cc(), Wa();
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function Tc(e) {
	let t = wc();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	Ua(t);
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var Ec = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function Dc(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Ec.has(e);
}
//#endregion
//#region __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var Oc = /* @__PURE__ */ x({ default: () => kc }), kc, Ac = b((() => {
	throw kc = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), jc = (e) => !Dc(e);
function Mc(e) {
	typeof e == "function" && (jc = (t) => t.startsWith("on") ? !Dc(t) : e(t));
}
try {
	Mc((Ac(), C(Oc)).default);
} catch {}
function Nc(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || G(e[i]) || (jc(i) || n === !0 && Dc(i) || !t && !Dc(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var Pc = /* @__PURE__ */ i({});
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function Fc(e, t) {
	if (Pa(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || ja(t) ? t : void 0,
			animate: ja(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function Ic(e) {
	let { initial: t, animate: n } = Fc(e, c(Pc));
	return p(() => ({
		initial: t,
		animate: n
	}), [Lc(t), Lc(n)]);
}
function Lc(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var Rc = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/use-props.mjs
function zc(e, t, n) {
	for (let r in t) !G(t[r]) && !Co(r, n) && (e[r] = t[r]);
}
function Bc({ transformTemplate: e }, t) {
	return p(() => {
		let n = Rc();
		return _o(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Vc(e, t) {
	let n = e.style || {}, r = {};
	return zc(r, n, e), Object.assign(r, Bc(e, t)), r;
}
function Hc(e, t) {
	let n = {}, r = Vc(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var Uc = () => ({
	...Rc(),
	attrs: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function Wc(e, t, n, r) {
	let i = p(() => {
		let n = Uc();
		return jo(n, t, No(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		zc(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
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
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function Kc(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(Gc.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function qc(e, t, n, { latestValues: i }, o, s = !1, c) {
	let l = (c ?? Kc(e) ? Wc : Hc)(t, i, o, e), u = Nc(t, typeof e == "string", s), d = e === r ? {} : {
		...u,
		...l,
		ref: n
	}, { children: f } = t, m = p(() => G(f) ? f.get() : f, [f]);
	return a(e, {
		...d,
		children: m
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function Jc({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: Yc(n, r, i, e),
		renderState: t()
	};
}
function Yc(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = Ps(a[e]);
	let { initial: o, animate: s } = e, c = Pa(e), l = Fa(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !Aa(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = Qr(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var Xc = (e) => (t, n) => {
	let r = c(Pc), i = c(re), a = () => Jc(e, t, r, i);
	return n ? a() : w(a);
}, Zc = /*@__PURE__*/ Xc({
	scrapeMotionValuesFromProps: wo,
	createRenderState: Rc
}), Qc = /*@__PURE__*/ Xc({
	scrapeMotionValuesFromProps: Fo,
	createRenderState: Uc
}), $c = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function el(e, t, n) {
	let r = m(n);
	d(() => {
		r.current = n;
	});
	let i = m(null);
	return s((n) => {
		n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
		let a = r.current;
		if (typeof a == "function") if (n) {
			let e = a(n);
			typeof e == "function" && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
	}, [t]);
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var tl = i({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function nl(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function rl(e, t, n, r, i, a) {
	let { visualElement: o } = c(Pc), s = c(bc), u = c(re), f = c(vc), p = f.reducedMotion, h = f.skipAnimations, g = m(null), _ = m(!1);
	r ||= s.renderer, !g.current && r && (g.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: u,
		blockInitialAnimation: u ? u.initial === !1 : !1,
		reducedMotionConfig: p,
		skipAnimations: h,
		isSVG: a
	}), _.current && g.current && (g.current.manuallyAnimateOnMount = !0));
	let v = g.current, y = c(tl);
	v && !v.projection && i && (v.type === "html" || v.type === "svg") && il(g.current, n, i, y);
	let b = m(!1);
	d(() => {
		v && b.current && v.update(n, u);
	});
	let x = n[si], S = m(!!x && typeof window < "u" && !window.MotionHandoffIsComplete?.(x) && window.MotionHasOptimisedAnimation?.(x));
	return ne(() => {
		_.current = !0, v && (b.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), S.current && v.animationState && v.animationState.animateChanges());
	}), l(() => {
		v && (!S.current && v.animationState && v.animationState.animateChanges(), S.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(x);
		}), !1), v.enteringChildren = void 0);
	}), v;
}
function il(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : al(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && nl(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function al(e) {
	if (e) return e.options.allowProjection === !1 ? al(e.parent) : e.projection;
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/index.mjs
function ol(n, { forwardMotionProps: r = !1, type: i } = {}, a, s) {
	a && Tc(a);
	let l = i ? i === "svg" : Kc(n), u = l ? Qc : Zc;
	function d(i, o) {
		let d, f = {
			...c(vc),
			...i,
			layoutId: sl(i)
		}, { isStatic: p } = f, m = Ic(i), h = u(i, p);
		if (!p && typeof window < "u") {
			cl(f, a);
			let e = ll(f);
			d = e.MeasureLayout, m.visualElement = rl(n, h, f, s, e.ProjectionNode, l);
		}
		return t(Pc.Provider, {
			value: m,
			children: [d && m.visualElement ? e(d, {
				visualElement: m.visualElement,
				...f
			}) : null, qc(n, i, el(h, m.visualElement, o), h, p, r, l)]
		});
	}
	d.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
	let f = o(d);
	return f[$c] = n, f;
}
function sl({ layoutId: e }) {
	let t = c(te).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function cl(e, t) {
	let n = c(bc).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? se(!1, t, "lazy-strict-mode") : E(!1, t, "lazy-strict-mode");
	}
}
function ll(e) {
	let { drag: t, layout: n } = wc();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function ul(e, t) {
	if (typeof Proxy > "u") return ol;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => ol(n, r, e, t);
	return new Proxy((e, t) => (process.env.NODE_ENV !== "production" && _e(!1, "motion() is deprecated. Use motion.create() instead."), r(e, t)), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, ol(a, void 0, e, t)), n.get(a)) });
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var dl = (e, t) => t.isSVG ?? Kc(e) ? new Io(t) : new Eo(t, { allowProjection: e !== r }), fl = class extends J {
	constructor(e) {
		super(e), e.animationState ||= Uo(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		Aa(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, pl = 0, ml = {
	animation: { Feature: fl },
	exit: { Feature: class extends J {
		constructor() {
			super(...arguments), this.id = pl++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string" || typeof e == "object" && e && !Array.isArray(e)) {
						let n = W(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive("exit", !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region node_modules/framer-motion/dist/es/events/event-info.mjs
function hl(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var gl = (e) => (t) => Gi(t) && e(t, hl(t));
//#endregion
//#region node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function _l(e, t, n, r) {
	return As(e, t, gl(n), r);
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var vl = ({ current: e }) => e ? e.ownerDocument.defaultView : null, yl = (e, t) => Math.abs(e - t);
function bl(e, t) {
	let n = yl(e.x, t.x), r = yl(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var xl = /*#__PURE__*/ new Set(["auto", "scroll"]), Sl = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Cl(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = Tl(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = bl(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = N;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = Cl(t, this.transformPagePoint), j.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = Tl(e.type === "pointercancel" ? this.lastMoveEventInfo : Cl(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !Gi(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = Cl(hl(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = N;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, Tl(s, this.history));
		let d = {
			passive: !0,
			capture: !0
		};
		this.removeListeners = fe(_l(this.contextWindow, "pointermove", this.handlePointerMove, d), _l(this.contextWindow, "pointerup", this.handlePointerUp, d), _l(this.contextWindow, "pointercancel", this.handlePointerUp, d)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(xl.has(e.overflowX) || xl.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), j.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), M(this.updatePoint);
	}
};
function Cl(e, t) {
	return t ? { point: t(e.point) } : e;
}
function wl(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function Tl({ point: e }, t) {
	return {
		point: e,
		delta: wl(e, Dl(t)),
		offset: wl(e, El(t)),
		velocity: Ol(t, .1)
	};
}
function El(e) {
	return e[0];
}
function Dl(e) {
	return e[e.length - 1];
}
function Ol(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = Dl(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ k(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ k(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ A(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function kl(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? V(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? V(n, e, r.max) : Math.min(e, n)), e;
}
function Al(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function jl(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: Al(e.x, n, i),
		y: Al(e.y, t, r)
	};
}
function Ml(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function Nl(e, t) {
	return {
		x: Ml(e.x, t.x),
		y: Ml(e.y, t.y)
	};
}
function Pl(e, t) {
	let n = .5, r = Z(e), i = Z(t);
	return i > r ? n = /* @__PURE__ */ pe(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ pe(e.min, e.max - i, t.min)), T(0, 1, n);
}
function Fl(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Il = .35;
function Ll(e = Il) {
	return e === !1 ? e = 0 : e === !0 && (e = Il), {
		x: Rl(e, "left", "right"),
		y: Rl(e, "top", "bottom")
	};
}
function Rl(e, t, n) {
	return {
		min: zl(e, t),
		max: zl(e, n)
	};
}
function zl(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var Bl = /* @__PURE__ */ new WeakMap(), Vl = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = q(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(hl(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = Bi(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Q((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (L.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = Z(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && j.update(() => i(e, t), !1, !0), ai(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = Gl(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && j.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new Sl(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: vl(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && j.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !Wl(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = kl(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && nl(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = jl(n.layoutBox, e) : this.constraints = !1, this.elastic = Ll(t), r !== this.constraints && !nl(e) && n && this.constraints && !this.hasMutatedConstraints && Q((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = Fl(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !nl(e)) return !1;
		let n = e.current;
		E(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		r.root && (r.root.scroll = void 0, r.root.updateScroll());
		let i = po(n, r.root, this.visualElement.getTransformPagePoint()), a = Nl(r.layout.layoutBox, i);
		if (t) {
			let e = t(Ja(a));
			this.hasMutatedConstraints = !!e, e && (a = qa(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = Q((o) => {
			if (!Wl(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			(a === !0 || a === o) && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return ai(this.visualElement, e), n.start(Kr(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		Q((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`;
		return this.visualElement.getProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
	}
	snapToCursor(e) {
		Q((t) => {
			let { drag: n } = this.getProps();
			if (!Wl(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - V(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!nl(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		Q((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = Pl({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), Q((t) => {
			if (!Wl(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(V(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Bl.set(this.visualElement, this);
		let e = this.visualElement.current, t = _l(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && Yi(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			nl(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Ul(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), j.read(r);
		let o = As(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (Q((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s && s(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Il, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function Hl(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function Ul(e, t, n) {
	let r = _a(e, Hl(n)), i = _a(t, Hl(n));
	return () => {
		r(), i();
	};
}
function Wl(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function Gl(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var Kl = class extends J {
	constructor(e) {
		super(e), this.removeGroupControls = O, this.removeListeners = O, this.controls = new Vl(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || O;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, ql = (e) => (t, n) => {
	e && j.update(() => e(t, n), !1, !0);
}, Jl = class extends J {
	constructor() {
		super(...arguments), this.removePointerDownListener = O;
	}
	onPointerDown(e) {
		this.session = new Sl(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: vl(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: ql(e),
			onStart: ql(t),
			onMove: ql(n),
			onEnd: (e, t) => {
				delete this.session, r && j.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = _l(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, Yl = !1, Xl = class extends n {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), Yl && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), Is.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), Yl = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || j.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), Li.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		Yl = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Zl(t) {
	let [n, r] = yc(), i = c(te);
	return e(Xl, {
		...t,
		layoutGroup: i,
		switchLayoutGroup: c(tl),
		isPresent: n,
		safeToRemove: r
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/drag.mjs
var Ql = {
	pan: { Feature: Jl },
	drag: {
		Feature: Kl,
		ProjectionNode: _c,
		MeasureLayout: Zl
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/hover.mjs
function $l(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && j.postRender(() => i(t, hl(t)));
}
var eu = class extends J {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = Ui(e, (e, t) => ($l(this.node, t, "Start"), (e) => $l(this.node, e, "End"))));
	}
	unmount() {}
}, tu = class extends J {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = fe(As(this.node.current, "focus", () => this.onFocus()), As(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/press.mjs
function nu(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && j.postRender(() => i(t, hl(t)));
}
var ru = class extends J {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = na(e, (e, t) => (nu(this.node, t, "Start"), (e, { success: t }) => nu(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, iu = /* @__PURE__ */ new WeakMap(), au = /* @__PURE__ */ new WeakMap(), ou = (e) => {
	let t = iu.get(e.target);
	t && t(e);
}, su = (e) => {
	e.forEach(ou);
};
function cu({ root: e, ...t }) {
	let n = e || document;
	au.has(n) || au.set(n, {});
	let r = au.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(su, {
		root: e,
		...t
	})), r[i];
}
function lu(e, t, n) {
	let r = cu(t);
	return iu.set(e, n), r.observe(e), () => {
		iu.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var uu = {
	some: 0,
	all: 1
}, du = class extends J {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : uu[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = lu(this.node.current, a, o);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(fu(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function fu({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var pu = {
	inView: { Feature: du },
	tap: { Feature: ru },
	focus: { Feature: tu },
	hover: { Feature: eu }
}, mu = { layout: {
	ProjectionNode: _c,
	MeasureLayout: Zl
} }, hu = /*@__PURE__*/ ul({
	...ml,
	...pu,
	...Ql,
	...mu
}, dl);
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function gu(e) {
	let t = w(() => Ir(e)), { isStatic: n } = c(vc);
	if (n) {
		let [, n] = h(e);
		l(() => t.on("change", n), []);
	}
	return t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function _u(e, t) {
	let n = gu(t()), r = () => n.set(t());
	return r(), ne(() => {
		let t = () => j.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), M(r);
		};
	}), n;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-computed.mjs
function vu(e) {
	Pr.current = [], e();
	let t = _u(Pr.current, e);
	return Pr.current = void 0, t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-transform.mjs
function yu(e, t, n, r) {
	if (typeof e == "function") return vu(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return xu(e, t, n, r);
	let i = typeof t == "function" ? t : ba(t, n, r), a = Array.isArray(e) ? bu(e, i) : bu([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	return o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
		...o,
		times: t,
		keyframes: n,
		isTransformed: !0,
		...r?.ease ? { ease: r.ease } : {}
	}), a;
}
function bu(e, t) {
	let n = w(() => []);
	return _u(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function xu(e, t, n, r) {
	let i = w(() => Object.keys(n)), a = w(() => ({}));
	for (let o of i) a[o] = yu(e, t, n[o], r);
	return a;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-follow-value.mjs
function Su(e, t = {}) {
	let { isStatic: n } = c(vc), r = () => G(e) ? e.get() : e;
	if (n) return yu(r);
	let i = gu(r());
	return d(() => xa(i, e, t), [i, JSON.stringify(t)]), i;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-spring.mjs
function Cu(e, t = {}) {
	return Su(e, {
		type: "spring",
		...t
	});
}
//#endregion
//#region node_modules/motion/dist/es/react.mjs
var wu = hu;
//#endregion
//#region src/GameCard.jsx
function Tu({ game: n, onClick: r, onDelete: i }) {
	let a = m(null), o = gu(.5), s = gu(.5), c = Cu(yu(s, [0, 1], [7, -7]), {
		stiffness: 200,
		damping: 20
	}), l = Cu(yu(o, [0, 1], [-7, 7]), {
		stiffness: 200,
		damping: 20
	}), u = n.cover && n.cover.trim();
	function d(e) {
		let t = a.current.getBoundingClientRect();
		o.set((e.clientX - t.left) / t.width), s.set((e.clientY - t.top) / t.height);
	}
	function f() {
		o.set(.5), s.set(.5);
	}
	return /* @__PURE__ */ t("div", {
		ref: a,
		className: "game-card",
		onClick: () => r(n.id),
		onMouseMove: d,
		onMouseLeave: f,
		style: { cursor: "pointer" },
		children: [
			/* @__PURE__ */ e(wu.div, { style: {
				position: "absolute",
				top: "5%",
				left: "5%",
				width: "90%",
				height: "90%",
				background: "rgba(0,0,0,0.5)",
				borderRadius: "var(--radius)",
				transformOrigin: "top center",
				rotateX: c,
				scale: yu(c, [
					7,
					0,
					-7
				], [
					1.05,
					1,
					1.05
				]),
				opacity: yu(c, [
					7,
					0,
					-7
				], [
					.6,
					.5,
					.6
				])
			} }),
			/* @__PURE__ */ e(wu.div, {
				style: {
					position: "absolute",
					inset: 0,
					zIndex: 1,
					transformOrigin: "top center",
					rotateX: c,
					rotateY: l
				},
				children: /* @__PURE__ */ t(ee, {
					width: "100%",
					height: "100%",
					background: u ? "transparent" : n.color,
					borderRadius: "var(--radius)",
					borderColor: "transparent",
					glareColor: "#ffffff",
					glareOpacity: .4,
					glareAngle: -30,
					glareSize: 300,
					transitionDuration: 800,
					playOnce: !1,
					style: u ? {
						backgroundImage: `url('${n.cover}')`,
						backgroundSize: "cover",
						backgroundPosition: "center"
					} : {},
					children: [
						!u && /* @__PURE__ */ t("div", {
							className: "game-card-generated",
							children: [/* @__PURE__ */ e("div", {
								className: "game-card-generated-icon",
								children: n.icon
							}), /* @__PURE__ */ e("div", {
								className: "game-card-generated-name",
								children: n.name
							})]
						}),
						/* @__PURE__ */ e("div", { className: "game-card-scrim" }),
						/* @__PURE__ */ e("div", {
							className: "game-card-title",
							children: n.name
						})
					]
				})
			}),
			/* @__PURE__ */ e(wu.button, {
				className: "game-card-delete",
				onClick: (e) => {
					e.stopPropagation(), i(n.id);
				},
				title: "Delete",
				initial: { opacity: 0 },
				whileHover: {
					opacity: 1,
					background: "var(--danger)",
					color: "#fff"
				},
				style: { opacity: 0 },
				onMouseEnter: (e) => {
					e.currentTarget.style.opacity = 1;
				},
				onMouseLeave: (e) => {
					e.currentTarget.style.opacity = 0;
				},
				children: "✕"
			})
		]
	});
}
//#endregion
export { Tu as GameCard, ee as GlareHover };
