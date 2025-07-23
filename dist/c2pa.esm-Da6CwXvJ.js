/*!*************************************************************************
 * Copyright 2021 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it. 
 **************************************************************************/
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, as = { exports: {} }, ia, Cg;
function Gv() {
  if (Cg)
    return ia;
  Cg = 1;
  var t = 1e3, n = t * 60, r = n * 60, s = r * 24, g = s * 7, l = s * 365.25;
  ia = function(E, u) {
    u = u || {};
    var w = typeof E;
    if (w === "string" && E.length > 0)
      return C(E);
    if (w === "number" && isFinite(E))
      return u.long ? f(E) : B(E);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(E)
    );
  };
  function C(E) {
    if (E = String(E), !(E.length > 100)) {
      var u = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        E
      );
      if (u) {
        var w = parseFloat(u[1]), _ = (u[2] || "ms").toLowerCase();
        switch (_) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return w * l;
          case "weeks":
          case "week":
          case "w":
            return w * g;
          case "days":
          case "day":
          case "d":
            return w * s;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return w * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return w * n;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return w * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return w;
          default:
            return;
        }
      }
    }
  }
  function B(E) {
    var u = Math.abs(E);
    return u >= s ? Math.round(E / s) + "d" : u >= r ? Math.round(E / r) + "h" : u >= n ? Math.round(E / n) + "m" : u >= t ? Math.round(E / t) + "s" : E + "ms";
  }
  function f(E) {
    var u = Math.abs(E);
    return u >= s ? p(E, u, s, "day") : u >= r ? p(E, u, r, "hour") : u >= n ? p(E, u, n, "minute") : u >= t ? p(E, u, t, "second") : E + " ms";
  }
  function p(E, u, w, _) {
    var k = u >= w * 1.5;
    return Math.round(E / w) + " " + _ + (k ? "s" : "");
  }
  return ia;
}
function Sv(t) {
  r.debug = r, r.default = r, r.coerce = f, r.disable = l, r.enable = g, r.enabled = C, r.humanize = Gv(), r.destroy = p, Object.keys(t).forEach((E) => {
    r[E] = t[E];
  }), r.names = [], r.skips = [], r.formatters = {};
  function n(E) {
    let u = 0;
    for (let w = 0; w < E.length; w++)
      u = (u << 5) - u + E.charCodeAt(w), u |= 0;
    return r.colors[Math.abs(u) % r.colors.length];
  }
  r.selectColor = n;
  function r(E) {
    let u, w = null, _, k;
    function N(...R) {
      if (!N.enabled)
        return;
      const M = N, x = Number(/* @__PURE__ */ new Date()), eA = x - (u || x);
      M.diff = eA, M.prev = u, M.curr = x, u = x, R[0] = r.coerce(R[0]), typeof R[0] != "string" && R.unshift("%O");
      let AA = 0;
      R[0] = R[0].replace(/%([a-zA-Z%])/g, (QA, CA) => {
        if (QA === "%%")
          return "%";
        AA++;
        const vA = r.formatters[CA];
        if (typeof vA == "function") {
          const xe = R[AA];
          QA = vA.call(M, xe), R.splice(AA, 1), AA--;
        }
        return QA;
      }), r.formatArgs.call(M, R), (M.log || r.log).apply(M, R);
    }
    return N.namespace = E, N.useColors = r.useColors(), N.color = r.selectColor(E), N.extend = s, N.destroy = r.destroy, Object.defineProperty(N, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => w !== null ? w : (_ !== r.namespaces && (_ = r.namespaces, k = r.enabled(E)), k),
      set: (R) => {
        w = R;
      }
    }), typeof r.init == "function" && r.init(N), N;
  }
  function s(E, u) {
    const w = r(this.namespace + (typeof u > "u" ? ":" : u) + E);
    return w.log = this.log, w;
  }
  function g(E) {
    r.save(E), r.namespaces = E, r.names = [], r.skips = [];
    let u;
    const w = (typeof E == "string" ? E : "").split(/[\s,]+/), _ = w.length;
    for (u = 0; u < _; u++)
      w[u] && (E = w[u].replace(/\*/g, ".*?"), E[0] === "-" ? r.skips.push(new RegExp("^" + E.slice(1) + "$")) : r.names.push(new RegExp("^" + E + "$")));
  }
  function l() {
    const E = [
      ...r.names.map(B),
      ...r.skips.map(B).map((u) => "-" + u)
    ].join(",");
    return r.enable(""), E;
  }
  function C(E) {
    if (E[E.length - 1] === "*")
      return !0;
    let u, w;
    for (u = 0, w = r.skips.length; u < w; u++)
      if (r.skips[u].test(E))
        return !1;
    for (u = 0, w = r.names.length; u < w; u++)
      if (r.names[u].test(E))
        return !0;
    return !1;
  }
  function B(E) {
    return E.toString().substring(2, E.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function f(E) {
    return E instanceof Error ? E.stack || E.message : E;
  }
  function p() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var Nv = Sv;
(function(t, n) {
  n.formatArgs = s, n.save = g, n.load = l, n.useColors = r, n.storage = C(), n.destroy = /* @__PURE__ */ (() => {
    let f = !1;
    return () => {
      f || (f = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), n.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function s(f) {
    if (f[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + f[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const p = "color: " + this.color;
    f.splice(1, 0, p, "color: inherit");
    let E = 0, u = 0;
    f[0].replace(/%[a-zA-Z%]/g, (w) => {
      w !== "%%" && (E++, w === "%c" && (u = E));
    }), f.splice(u, 0, p);
  }
  n.log = console.debug || console.log || (() => {
  });
  function g(f) {
    try {
      f ? n.storage.setItem("debug", f) : n.storage.removeItem("debug");
    } catch {
    }
  }
  function l() {
    let f;
    try {
      f = n.storage.getItem("debug");
    } catch {
    }
    return !f && typeof process < "u" && "env" in process && (f = process.env.DEBUG), f;
  }
  function C() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = Nv(n);
  const { formatters: B } = t.exports;
  B.j = function(f) {
    try {
      return JSON.stringify(f);
    } catch (p) {
      return "[UnexpectedJSONParseError]: " + p.message;
    }
  };
})(as, as.exports);
var _e = as.exports, vt = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(t, n) {
  (function() {
    var r, s = "4.17.21", g = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", C = "Expected a function", B = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", p = 500, E = "__lodash_placeholder__", u = 1, w = 2, _ = 4, k = 1, N = 2, R = 1, M = 2, x = 4, eA = 8, AA = 16, dA = 32, QA = 64, CA = 128, vA = 256, xe = 512, Ii = 30, _r = "...", Rr = 800, Gr = 16, Nt = 1, Ci = 2, Sr = 3, it = 1 / 0, Qe = 9007199254740991, Nr = 17976931348623157e292, rt = NaN, qA = 4294967295, ui = qA - 1, RA = qA >>> 1, He = [
      ["ary", CA],
      ["bind", R],
      ["bindKey", M],
      ["curry", eA],
      ["curryRight", AA],
      ["flip", xe],
      ["partial", dA],
      ["partialRight", QA],
      ["rearg", vA]
    ], Y = "[object Arguments]", S = "[object Array]", U = "[object AsyncFunction]", K = "[object Boolean]", z = "[object Date]", hA = "[object DOMException]", GA = "[object Error]", wA = "[object Function]", KA = "[object GeneratorFunction]", MA = "[object Map]", Te = "[object Number]", zI = "[object Null]", fe = "[object Object]", Us = "[object Promise]", $I = "[object Proxy]", Lt = "[object RegExp]", se = "[object Set]", Mt = "[object String]", Bi = "[object Symbol]", jI = "[object Undefined]", Ut = "[object WeakMap]", ZI = "[object WeakSet]", Yt = "[object ArrayBuffer]", nt = "[object DataView]", Lr = "[object Float32Array]", Mr = "[object Float64Array]", Ur = "[object Int8Array]", Yr = "[object Int16Array]", Jr = "[object Int32Array]", xr = "[object Uint8Array]", Hr = "[object Uint8ClampedArray]", Tr = "[object Uint16Array]", qr = "[object Uint32Array]", XI = /\b__p \+= '';/g, VI = /\b(__p \+=) '' \+/g, AC = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ys = /&(?:amp|lt|gt|quot|#39);/g, Js = /[&<>"']/g, eC = RegExp(Ys.source), tC = RegExp(Js.source), iC = /<%-([\s\S]+?)%>/g, rC = /<%([\s\S]+?)%>/g, xs = /<%=([\s\S]+?)%>/g, nC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, aC = /^\w*$/, sC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kr = /[\\^$.*+?()[\]{}|]/g, oC = RegExp(Kr.source), Or = /^\s+/, cC = /\s/, gC = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, dC = /\{\n\/\* \[wrapped with (.+)\] \*/, lC = /,? & /, IC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, CC = /[()=,{}\[\]\/\s]/, uC = /\\(\\)?/g, BC = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Hs = /\w*$/, QC = /^[-+]0x[0-9a-f]+$/i, fC = /^0b[01]+$/i, EC = /^\[object .+?Constructor\]$/, pC = /^0o[0-7]+$/i, vC = /^(?:0|[1-9]\d*)$/, yC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Qi = /($^)/, hC = /['\n\r\u2028\u2029\\]/g, fi = "\\ud800-\\udfff", wC = "\\u0300-\\u036f", bC = "\\ufe20-\\ufe2f", DC = "\\u20d0-\\u20ff", Ts = wC + bC + DC, qs = "\\u2700-\\u27bf", Ks = "a-z\\xdf-\\xf6\\xf8-\\xff", mC = "\\xac\\xb1\\xd7\\xf7", FC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", kC = "\\u2000-\\u206f", _C = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Os = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ws = "\\ufe0e\\ufe0f", Ps = mC + FC + kC + _C, Wr = "['’]", RC = "[" + fi + "]", zs = "[" + Ps + "]", Ei = "[" + Ts + "]", $s = "\\d+", GC = "[" + qs + "]", js = "[" + Ks + "]", Zs = "[^" + fi + Ps + $s + qs + Ks + Os + "]", Pr = "\\ud83c[\\udffb-\\udfff]", SC = "(?:" + Ei + "|" + Pr + ")", Xs = "[^" + fi + "]", zr = "(?:\\ud83c[\\udde6-\\uddff]){2}", $r = "[\\ud800-\\udbff][\\udc00-\\udfff]", at = "[" + Os + "]", Vs = "\\u200d", Ao = "(?:" + js + "|" + Zs + ")", NC = "(?:" + at + "|" + Zs + ")", eo = "(?:" + Wr + "(?:d|ll|m|re|s|t|ve))?", to = "(?:" + Wr + "(?:D|LL|M|RE|S|T|VE))?", io = SC + "?", ro = "[" + Ws + "]?", LC = "(?:" + Vs + "(?:" + [Xs, zr, $r].join("|") + ")" + ro + io + ")*", MC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", UC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", no = ro + io + LC, YC = "(?:" + [GC, zr, $r].join("|") + ")" + no, JC = "(?:" + [Xs + Ei + "?", Ei, zr, $r, RC].join("|") + ")", xC = RegExp(Wr, "g"), HC = RegExp(Ei, "g"), jr = RegExp(Pr + "(?=" + Pr + ")|" + JC + no, "g"), TC = RegExp([
      at + "?" + js + "+" + eo + "(?=" + [zs, at, "$"].join("|") + ")",
      NC + "+" + to + "(?=" + [zs, at + Ao, "$"].join("|") + ")",
      at + "?" + Ao + "+" + eo,
      at + "+" + to,
      UC,
      MC,
      $s,
      YC
    ].join("|"), "g"), qC = RegExp("[" + Vs + fi + Ts + Ws + "]"), KC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, OC = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], WC = -1, oA = {};
    oA[Lr] = oA[Mr] = oA[Ur] = oA[Yr] = oA[Jr] = oA[xr] = oA[Hr] = oA[Tr] = oA[qr] = !0, oA[Y] = oA[S] = oA[Yt] = oA[K] = oA[nt] = oA[z] = oA[GA] = oA[wA] = oA[MA] = oA[Te] = oA[fe] = oA[Lt] = oA[se] = oA[Mt] = oA[Ut] = !1;
    var aA = {};
    aA[Y] = aA[S] = aA[Yt] = aA[nt] = aA[K] = aA[z] = aA[Lr] = aA[Mr] = aA[Ur] = aA[Yr] = aA[Jr] = aA[MA] = aA[Te] = aA[fe] = aA[Lt] = aA[se] = aA[Mt] = aA[Bi] = aA[xr] = aA[Hr] = aA[Tr] = aA[qr] = !0, aA[GA] = aA[wA] = aA[Ut] = !1;
    var PC = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, zC = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, $C = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, jC = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ZC = parseFloat, XC = parseInt, ao = typeof ke == "object" && ke && ke.Object === Object && ke, VC = typeof self == "object" && self && self.Object === Object && self, bA = ao || VC || Function("return this")(), Zr = n && !n.nodeType && n, qe = Zr && !0 && t && !t.nodeType && t, so = qe && qe.exports === Zr, Xr = so && ao.process, ZA = function() {
      try {
        var v = qe && qe.require && qe.require("util").types;
        return v || Xr && Xr.binding && Xr.binding("util");
      } catch {
      }
    }(), oo = ZA && ZA.isArrayBuffer, co = ZA && ZA.isDate, go = ZA && ZA.isMap, lo = ZA && ZA.isRegExp, Io = ZA && ZA.isSet, Co = ZA && ZA.isTypedArray;
    function OA(v, b, h) {
      switch (h.length) {
        case 0:
          return v.call(b);
        case 1:
          return v.call(b, h[0]);
        case 2:
          return v.call(b, h[0], h[1]);
        case 3:
          return v.call(b, h[0], h[1], h[2]);
      }
      return v.apply(b, h);
    }
    function Au(v, b, h, L) {
      for (var O = -1, tA = v == null ? 0 : v.length; ++O < tA; ) {
        var fA = v[O];
        b(L, fA, h(fA), v);
      }
      return L;
    }
    function XA(v, b) {
      for (var h = -1, L = v == null ? 0 : v.length; ++h < L && b(v[h], h, v) !== !1; )
        ;
      return v;
    }
    function eu(v, b) {
      for (var h = v == null ? 0 : v.length; h-- && b(v[h], h, v) !== !1; )
        ;
      return v;
    }
    function uo(v, b) {
      for (var h = -1, L = v == null ? 0 : v.length; ++h < L; )
        if (!b(v[h], h, v))
          return !1;
      return !0;
    }
    function Re(v, b) {
      for (var h = -1, L = v == null ? 0 : v.length, O = 0, tA = []; ++h < L; ) {
        var fA = v[h];
        b(fA, h, v) && (tA[O++] = fA);
      }
      return tA;
    }
    function pi(v, b) {
      var h = v == null ? 0 : v.length;
      return !!h && st(v, b, 0) > -1;
    }
    function Vr(v, b, h) {
      for (var L = -1, O = v == null ? 0 : v.length; ++L < O; )
        if (h(b, v[L]))
          return !0;
      return !1;
    }
    function gA(v, b) {
      for (var h = -1, L = v == null ? 0 : v.length, O = Array(L); ++h < L; )
        O[h] = b(v[h], h, v);
      return O;
    }
    function Ge(v, b) {
      for (var h = -1, L = b.length, O = v.length; ++h < L; )
        v[O + h] = b[h];
      return v;
    }
    function An(v, b, h, L) {
      var O = -1, tA = v == null ? 0 : v.length;
      for (L && tA && (h = v[++O]); ++O < tA; )
        h = b(h, v[O], O, v);
      return h;
    }
    function tu(v, b, h, L) {
      var O = v == null ? 0 : v.length;
      for (L && O && (h = v[--O]); O--; )
        h = b(h, v[O], O, v);
      return h;
    }
    function en(v, b) {
      for (var h = -1, L = v == null ? 0 : v.length; ++h < L; )
        if (b(v[h], h, v))
          return !0;
      return !1;
    }
    var iu = tn("length");
    function ru(v) {
      return v.split("");
    }
    function nu(v) {
      return v.match(IC) || [];
    }
    function Bo(v, b, h) {
      var L;
      return h(v, function(O, tA, fA) {
        if (b(O, tA, fA))
          return L = tA, !1;
      }), L;
    }
    function vi(v, b, h, L) {
      for (var O = v.length, tA = h + (L ? 1 : -1); L ? tA-- : ++tA < O; )
        if (b(v[tA], tA, v))
          return tA;
      return -1;
    }
    function st(v, b, h) {
      return b === b ? Qu(v, b, h) : vi(v, Qo, h);
    }
    function au(v, b, h, L) {
      for (var O = h - 1, tA = v.length; ++O < tA; )
        if (L(v[O], b))
          return O;
      return -1;
    }
    function Qo(v) {
      return v !== v;
    }
    function fo(v, b) {
      var h = v == null ? 0 : v.length;
      return h ? nn(v, b) / h : rt;
    }
    function tn(v) {
      return function(b) {
        return b == null ? r : b[v];
      };
    }
    function rn(v) {
      return function(b) {
        return v == null ? r : v[b];
      };
    }
    function Eo(v, b, h, L, O) {
      return O(v, function(tA, fA, nA) {
        h = L ? (L = !1, tA) : b(h, tA, fA, nA);
      }), h;
    }
    function su(v, b) {
      var h = v.length;
      for (v.sort(b); h--; )
        v[h] = v[h].value;
      return v;
    }
    function nn(v, b) {
      for (var h, L = -1, O = v.length; ++L < O; ) {
        var tA = b(v[L]);
        tA !== r && (h = h === r ? tA : h + tA);
      }
      return h;
    }
    function an(v, b) {
      for (var h = -1, L = Array(v); ++h < v; )
        L[h] = b(h);
      return L;
    }
    function ou(v, b) {
      return gA(b, function(h) {
        return [h, v[h]];
      });
    }
    function po(v) {
      return v && v.slice(0, wo(v) + 1).replace(Or, "");
    }
    function WA(v) {
      return function(b) {
        return v(b);
      };
    }
    function sn(v, b) {
      return gA(b, function(h) {
        return v[h];
      });
    }
    function Jt(v, b) {
      return v.has(b);
    }
    function vo(v, b) {
      for (var h = -1, L = v.length; ++h < L && st(b, v[h], 0) > -1; )
        ;
      return h;
    }
    function yo(v, b) {
      for (var h = v.length; h-- && st(b, v[h], 0) > -1; )
        ;
      return h;
    }
    function cu(v, b) {
      for (var h = v.length, L = 0; h--; )
        v[h] === b && ++L;
      return L;
    }
    var gu = rn(PC), du = rn(zC);
    function lu(v) {
      return "\\" + jC[v];
    }
    function Iu(v, b) {
      return v == null ? r : v[b];
    }
    function ot(v) {
      return qC.test(v);
    }
    function Cu(v) {
      return KC.test(v);
    }
    function uu(v) {
      for (var b, h = []; !(b = v.next()).done; )
        h.push(b.value);
      return h;
    }
    function on(v) {
      var b = -1, h = Array(v.size);
      return v.forEach(function(L, O) {
        h[++b] = [O, L];
      }), h;
    }
    function ho(v, b) {
      return function(h) {
        return v(b(h));
      };
    }
    function Se(v, b) {
      for (var h = -1, L = v.length, O = 0, tA = []; ++h < L; ) {
        var fA = v[h];
        (fA === b || fA === E) && (v[h] = E, tA[O++] = h);
      }
      return tA;
    }
    function yi(v) {
      var b = -1, h = Array(v.size);
      return v.forEach(function(L) {
        h[++b] = L;
      }), h;
    }
    function Bu(v) {
      var b = -1, h = Array(v.size);
      return v.forEach(function(L) {
        h[++b] = [L, L];
      }), h;
    }
    function Qu(v, b, h) {
      for (var L = h - 1, O = v.length; ++L < O; )
        if (v[L] === b)
          return L;
      return -1;
    }
    function fu(v, b, h) {
      for (var L = h + 1; L--; )
        if (v[L] === b)
          return L;
      return L;
    }
    function ct(v) {
      return ot(v) ? pu(v) : iu(v);
    }
    function oe(v) {
      return ot(v) ? vu(v) : ru(v);
    }
    function wo(v) {
      for (var b = v.length; b-- && cC.test(v.charAt(b)); )
        ;
      return b;
    }
    var Eu = rn($C);
    function pu(v) {
      for (var b = jr.lastIndex = 0; jr.test(v); )
        ++b;
      return b;
    }
    function vu(v) {
      return v.match(jr) || [];
    }
    function yu(v) {
      return v.match(TC) || [];
    }
    var hu = function v(b) {
      b = b == null ? bA : gt.defaults(bA.Object(), b, gt.pick(bA, OC));
      var h = b.Array, L = b.Date, O = b.Error, tA = b.Function, fA = b.Math, nA = b.Object, cn = b.RegExp, wu = b.String, VA = b.TypeError, hi = h.prototype, bu = tA.prototype, dt = nA.prototype, wi = b["__core-js_shared__"], bi = bu.toString, rA = dt.hasOwnProperty, Du = 0, bo = function() {
        var A = /[^.]+$/.exec(wi && wi.keys && wi.keys.IE_PROTO || "");
        return A ? "Symbol(src)_1." + A : "";
      }(), Di = dt.toString, mu = bi.call(nA), Fu = bA._, ku = cn(
        "^" + bi.call(rA).replace(Kr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), mi = so ? b.Buffer : r, Ne = b.Symbol, Fi = b.Uint8Array, Do = mi ? mi.allocUnsafe : r, ki = ho(nA.getPrototypeOf, nA), mo = nA.create, Fo = dt.propertyIsEnumerable, _i = hi.splice, ko = Ne ? Ne.isConcatSpreadable : r, xt = Ne ? Ne.iterator : r, Ke = Ne ? Ne.toStringTag : r, Ri = function() {
        try {
          var A = $e(nA, "defineProperty");
          return A({}, "", {}), A;
        } catch {
        }
      }(), _u = b.clearTimeout !== bA.clearTimeout && b.clearTimeout, Ru = L && L.now !== bA.Date.now && L.now, Gu = b.setTimeout !== bA.setTimeout && b.setTimeout, Gi = fA.ceil, Si = fA.floor, gn = nA.getOwnPropertySymbols, Su = mi ? mi.isBuffer : r, _o = b.isFinite, Nu = hi.join, Lu = ho(nA.keys, nA), EA = fA.max, FA = fA.min, Mu = L.now, Uu = b.parseInt, Ro = fA.random, Yu = hi.reverse, dn = $e(b, "DataView"), Ht = $e(b, "Map"), ln = $e(b, "Promise"), lt = $e(b, "Set"), Tt = $e(b, "WeakMap"), qt = $e(nA, "create"), Ni = Tt && new Tt(), It = {}, Ju = je(dn), xu = je(Ht), Hu = je(ln), Tu = je(lt), qu = je(Tt), Li = Ne ? Ne.prototype : r, Kt = Li ? Li.valueOf : r, Go = Li ? Li.toString : r;
      function c(A) {
        if (IA(A) && !W(A) && !(A instanceof X)) {
          if (A instanceof Ae)
            return A;
          if (rA.call(A, "__wrapped__"))
            return Sc(A);
        }
        return new Ae(A);
      }
      var Ct = /* @__PURE__ */ function() {
        function A() {
        }
        return function(e) {
          if (!lA(e))
            return {};
          if (mo)
            return mo(e);
          A.prototype = e;
          var i = new A();
          return A.prototype = r, i;
        };
      }();
      function Mi() {
      }
      function Ae(A, e) {
        this.__wrapped__ = A, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = r;
      }
      c.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: iC,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: rC,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: xs,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: c
        }
      }, c.prototype = Mi.prototype, c.prototype.constructor = c, Ae.prototype = Ct(Mi.prototype), Ae.prototype.constructor = Ae;
      function X(A) {
        this.__wrapped__ = A, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = qA, this.__views__ = [];
      }
      function Ku() {
        var A = new X(this.__wrapped__);
        return A.__actions__ = UA(this.__actions__), A.__dir__ = this.__dir__, A.__filtered__ = this.__filtered__, A.__iteratees__ = UA(this.__iteratees__), A.__takeCount__ = this.__takeCount__, A.__views__ = UA(this.__views__), A;
      }
      function Ou() {
        if (this.__filtered__) {
          var A = new X(this);
          A.__dir__ = -1, A.__filtered__ = !0;
        } else
          A = this.clone(), A.__dir__ *= -1;
        return A;
      }
      function Wu() {
        var A = this.__wrapped__.value(), e = this.__dir__, i = W(A), a = e < 0, o = i ? A.length : 0, d = rQ(0, o, this.__views__), I = d.start, Q = d.end, y = Q - I, D = a ? Q : I - 1, m = this.__iteratees__, F = m.length, G = 0, J = FA(y, this.__takeCount__);
        if (!i || !a && o == y && J == y)
          return tc(A, this.__actions__);
        var T = [];
        A:
          for (; y-- && G < J; ) {
            D += e;
            for (var $ = -1, q = A[D]; ++$ < F; ) {
              var Z = m[$], V = Z.iteratee, $A = Z.type, LA = V(q);
              if ($A == Ci)
                q = LA;
              else if (!LA) {
                if ($A == Nt)
                  continue A;
                break A;
              }
            }
            T[G++] = q;
          }
        return T;
      }
      X.prototype = Ct(Mi.prototype), X.prototype.constructor = X;
      function Oe(A) {
        var e = -1, i = A == null ? 0 : A.length;
        for (this.clear(); ++e < i; ) {
          var a = A[e];
          this.set(a[0], a[1]);
        }
      }
      function Pu() {
        this.__data__ = qt ? qt(null) : {}, this.size = 0;
      }
      function zu(A) {
        var e = this.has(A) && delete this.__data__[A];
        return this.size -= e ? 1 : 0, e;
      }
      function $u(A) {
        var e = this.__data__;
        if (qt) {
          var i = e[A];
          return i === f ? r : i;
        }
        return rA.call(e, A) ? e[A] : r;
      }
      function ju(A) {
        var e = this.__data__;
        return qt ? e[A] !== r : rA.call(e, A);
      }
      function Zu(A, e) {
        var i = this.__data__;
        return this.size += this.has(A) ? 0 : 1, i[A] = qt && e === r ? f : e, this;
      }
      Oe.prototype.clear = Pu, Oe.prototype.delete = zu, Oe.prototype.get = $u, Oe.prototype.has = ju, Oe.prototype.set = Zu;
      function Ee(A) {
        var e = -1, i = A == null ? 0 : A.length;
        for (this.clear(); ++e < i; ) {
          var a = A[e];
          this.set(a[0], a[1]);
        }
      }
      function Xu() {
        this.__data__ = [], this.size = 0;
      }
      function Vu(A) {
        var e = this.__data__, i = Ui(e, A);
        if (i < 0)
          return !1;
        var a = e.length - 1;
        return i == a ? e.pop() : _i.call(e, i, 1), --this.size, !0;
      }
      function AB(A) {
        var e = this.__data__, i = Ui(e, A);
        return i < 0 ? r : e[i][1];
      }
      function eB(A) {
        return Ui(this.__data__, A) > -1;
      }
      function tB(A, e) {
        var i = this.__data__, a = Ui(i, A);
        return a < 0 ? (++this.size, i.push([A, e])) : i[a][1] = e, this;
      }
      Ee.prototype.clear = Xu, Ee.prototype.delete = Vu, Ee.prototype.get = AB, Ee.prototype.has = eB, Ee.prototype.set = tB;
      function pe(A) {
        var e = -1, i = A == null ? 0 : A.length;
        for (this.clear(); ++e < i; ) {
          var a = A[e];
          this.set(a[0], a[1]);
        }
      }
      function iB() {
        this.size = 0, this.__data__ = {
          hash: new Oe(),
          map: new (Ht || Ee)(),
          string: new Oe()
        };
      }
      function rB(A) {
        var e = $i(this, A).delete(A);
        return this.size -= e ? 1 : 0, e;
      }
      function nB(A) {
        return $i(this, A).get(A);
      }
      function aB(A) {
        return $i(this, A).has(A);
      }
      function sB(A, e) {
        var i = $i(this, A), a = i.size;
        return i.set(A, e), this.size += i.size == a ? 0 : 1, this;
      }
      pe.prototype.clear = iB, pe.prototype.delete = rB, pe.prototype.get = nB, pe.prototype.has = aB, pe.prototype.set = sB;
      function We(A) {
        var e = -1, i = A == null ? 0 : A.length;
        for (this.__data__ = new pe(); ++e < i; )
          this.add(A[e]);
      }
      function oB(A) {
        return this.__data__.set(A, f), this;
      }
      function cB(A) {
        return this.__data__.has(A);
      }
      We.prototype.add = We.prototype.push = oB, We.prototype.has = cB;
      function ce(A) {
        var e = this.__data__ = new Ee(A);
        this.size = e.size;
      }
      function gB() {
        this.__data__ = new Ee(), this.size = 0;
      }
      function dB(A) {
        var e = this.__data__, i = e.delete(A);
        return this.size = e.size, i;
      }
      function lB(A) {
        return this.__data__.get(A);
      }
      function IB(A) {
        return this.__data__.has(A);
      }
      function CB(A, e) {
        var i = this.__data__;
        if (i instanceof Ee) {
          var a = i.__data__;
          if (!Ht || a.length < g - 1)
            return a.push([A, e]), this.size = ++i.size, this;
          i = this.__data__ = new pe(a);
        }
        return i.set(A, e), this.size = i.size, this;
      }
      ce.prototype.clear = gB, ce.prototype.delete = dB, ce.prototype.get = lB, ce.prototype.has = IB, ce.prototype.set = CB;
      function So(A, e) {
        var i = W(A), a = !i && Ze(A), o = !i && !a && Je(A), d = !i && !a && !o && ft(A), I = i || a || o || d, Q = I ? an(A.length, wu) : [], y = Q.length;
        for (var D in A)
          (e || rA.call(A, D)) && !(I && // Safari 9 has enumerable `arguments.length` in strict mode.
          (D == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          o && (D == "offset" || D == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          d && (D == "buffer" || D == "byteLength" || D == "byteOffset") || // Skip index properties.
          we(D, y))) && Q.push(D);
        return Q;
      }
      function No(A) {
        var e = A.length;
        return e ? A[hn(0, e - 1)] : r;
      }
      function uB(A, e) {
        return ji(UA(A), Pe(e, 0, A.length));
      }
      function BB(A) {
        return ji(UA(A));
      }
      function In(A, e, i) {
        (i !== r && !ge(A[e], i) || i === r && !(e in A)) && ve(A, e, i);
      }
      function Ot(A, e, i) {
        var a = A[e];
        (!(rA.call(A, e) && ge(a, i)) || i === r && !(e in A)) && ve(A, e, i);
      }
      function Ui(A, e) {
        for (var i = A.length; i--; )
          if (ge(A[i][0], e))
            return i;
        return -1;
      }
      function QB(A, e, i, a) {
        return Le(A, function(o, d, I) {
          e(a, o, i(o), I);
        }), a;
      }
      function Lo(A, e) {
        return A && Ce(e, yA(e), A);
      }
      function fB(A, e) {
        return A && Ce(e, JA(e), A);
      }
      function ve(A, e, i) {
        e == "__proto__" && Ri ? Ri(A, e, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : A[e] = i;
      }
      function Cn(A, e) {
        for (var i = -1, a = e.length, o = h(a), d = A == null; ++i < a; )
          o[i] = d ? r : zn(A, e[i]);
        return o;
      }
      function Pe(A, e, i) {
        return A === A && (i !== r && (A = A <= i ? A : i), e !== r && (A = A >= e ? A : e)), A;
      }
      function ee(A, e, i, a, o, d) {
        var I, Q = e & u, y = e & w, D = e & _;
        if (i && (I = o ? i(A, a, o, d) : i(A)), I !== r)
          return I;
        if (!lA(A))
          return A;
        var m = W(A);
        if (m) {
          if (I = aQ(A), !Q)
            return UA(A, I);
        } else {
          var F = kA(A), G = F == wA || F == KA;
          if (Je(A))
            return nc(A, Q);
          if (F == fe || F == Y || G && !o) {
            if (I = y || G ? {} : wc(A), !Q)
              return y ? $B(A, fB(I, A)) : zB(A, Lo(I, A));
          } else {
            if (!aA[F])
              return o ? A : {};
            I = sQ(A, F, Q);
          }
        }
        d || (d = new ce());
        var J = d.get(A);
        if (J)
          return J;
        d.set(A, I), Vc(A) ? A.forEach(function(q) {
          I.add(ee(q, e, i, q, A, d));
        }) : Zc(A) && A.forEach(function(q, Z) {
          I.set(Z, ee(q, e, i, Z, A, d));
        });
        var T = D ? y ? Nn : Sn : y ? JA : yA, $ = m ? r : T(A);
        return XA($ || A, function(q, Z) {
          $ && (Z = q, q = A[Z]), Ot(I, Z, ee(q, e, i, Z, A, d));
        }), I;
      }
      function EB(A) {
        var e = yA(A);
        return function(i) {
          return Mo(i, A, e);
        };
      }
      function Mo(A, e, i) {
        var a = i.length;
        if (A == null)
          return !a;
        for (A = nA(A); a--; ) {
          var o = i[a], d = e[o], I = A[o];
          if (I === r && !(o in A) || !d(I))
            return !1;
        }
        return !0;
      }
      function Uo(A, e, i) {
        if (typeof A != "function")
          throw new VA(C);
        return Xt(function() {
          A.apply(r, i);
        }, e);
      }
      function Wt(A, e, i, a) {
        var o = -1, d = pi, I = !0, Q = A.length, y = [], D = e.length;
        if (!Q)
          return y;
        i && (e = gA(e, WA(i))), a ? (d = Vr, I = !1) : e.length >= g && (d = Jt, I = !1, e = new We(e));
        A:
          for (; ++o < Q; ) {
            var m = A[o], F = i == null ? m : i(m);
            if (m = a || m !== 0 ? m : 0, I && F === F) {
              for (var G = D; G--; )
                if (e[G] === F)
                  continue A;
              y.push(m);
            } else
              d(e, F, a) || y.push(m);
          }
        return y;
      }
      var Le = gc(Ie), Yo = gc(Bn, !0);
      function pB(A, e) {
        var i = !0;
        return Le(A, function(a, o, d) {
          return i = !!e(a, o, d), i;
        }), i;
      }
      function Yi(A, e, i) {
        for (var a = -1, o = A.length; ++a < o; ) {
          var d = A[a], I = e(d);
          if (I != null && (Q === r ? I === I && !zA(I) : i(I, Q)))
            var Q = I, y = d;
        }
        return y;
      }
      function vB(A, e, i, a) {
        var o = A.length;
        for (i = P(i), i < 0 && (i = -i > o ? 0 : o + i), a = a === r || a > o ? o : P(a), a < 0 && (a += o), a = i > a ? 0 : eg(a); i < a; )
          A[i++] = e;
        return A;
      }
      function Jo(A, e) {
        var i = [];
        return Le(A, function(a, o, d) {
          e(a, o, d) && i.push(a);
        }), i;
      }
      function DA(A, e, i, a, o) {
        var d = -1, I = A.length;
        for (i || (i = cQ), o || (o = []); ++d < I; ) {
          var Q = A[d];
          e > 0 && i(Q) ? e > 1 ? DA(Q, e - 1, i, a, o) : Ge(o, Q) : a || (o[o.length] = Q);
        }
        return o;
      }
      var un = dc(), xo = dc(!0);
      function Ie(A, e) {
        return A && un(A, e, yA);
      }
      function Bn(A, e) {
        return A && xo(A, e, yA);
      }
      function Ji(A, e) {
        return Re(e, function(i) {
          return be(A[i]);
        });
      }
      function ze(A, e) {
        e = Ue(e, A);
        for (var i = 0, a = e.length; A != null && i < a; )
          A = A[ue(e[i++])];
        return i && i == a ? A : r;
      }
      function Ho(A, e, i) {
        var a = e(A);
        return W(A) ? a : Ge(a, i(A));
      }
      function SA(A) {
        return A == null ? A === r ? jI : zI : Ke && Ke in nA(A) ? iQ(A) : BQ(A);
      }
      function Qn(A, e) {
        return A > e;
      }
      function yB(A, e) {
        return A != null && rA.call(A, e);
      }
      function hB(A, e) {
        return A != null && e in nA(A);
      }
      function wB(A, e, i) {
        return A >= FA(e, i) && A < EA(e, i);
      }
      function fn(A, e, i) {
        for (var a = i ? Vr : pi, o = A[0].length, d = A.length, I = d, Q = h(d), y = 1 / 0, D = []; I--; ) {
          var m = A[I];
          I && e && (m = gA(m, WA(e))), y = FA(m.length, y), Q[I] = !i && (e || o >= 120 && m.length >= 120) ? new We(I && m) : r;
        }
        m = A[0];
        var F = -1, G = Q[0];
        A:
          for (; ++F < o && D.length < y; ) {
            var J = m[F], T = e ? e(J) : J;
            if (J = i || J !== 0 ? J : 0, !(G ? Jt(G, T) : a(D, T, i))) {
              for (I = d; --I; ) {
                var $ = Q[I];
                if (!($ ? Jt($, T) : a(A[I], T, i)))
                  continue A;
              }
              G && G.push(T), D.push(J);
            }
          }
        return D;
      }
      function bB(A, e, i, a) {
        return Ie(A, function(o, d, I) {
          e(a, i(o), d, I);
        }), a;
      }
      function Pt(A, e, i) {
        e = Ue(e, A), A = Fc(A, e);
        var a = A == null ? A : A[ue(ie(e))];
        return a == null ? r : OA(a, A, i);
      }
      function To(A) {
        return IA(A) && SA(A) == Y;
      }
      function DB(A) {
        return IA(A) && SA(A) == Yt;
      }
      function mB(A) {
        return IA(A) && SA(A) == z;
      }
      function zt(A, e, i, a, o) {
        return A === e ? !0 : A == null || e == null || !IA(A) && !IA(e) ? A !== A && e !== e : FB(A, e, i, a, zt, o);
      }
      function FB(A, e, i, a, o, d) {
        var I = W(A), Q = W(e), y = I ? S : kA(A), D = Q ? S : kA(e);
        y = y == Y ? fe : y, D = D == Y ? fe : D;
        var m = y == fe, F = D == fe, G = y == D;
        if (G && Je(A)) {
          if (!Je(e))
            return !1;
          I = !0, m = !1;
        }
        if (G && !m)
          return d || (d = new ce()), I || ft(A) ? vc(A, e, i, a, o, d) : eQ(A, e, y, i, a, o, d);
        if (!(i & k)) {
          var J = m && rA.call(A, "__wrapped__"), T = F && rA.call(e, "__wrapped__");
          if (J || T) {
            var $ = J ? A.value() : A, q = T ? e.value() : e;
            return d || (d = new ce()), o($, q, i, a, d);
          }
        }
        return G ? (d || (d = new ce()), tQ(A, e, i, a, o, d)) : !1;
      }
      function kB(A) {
        return IA(A) && kA(A) == MA;
      }
      function En(A, e, i, a) {
        var o = i.length, d = o, I = !a;
        if (A == null)
          return !d;
        for (A = nA(A); o--; ) {
          var Q = i[o];
          if (I && Q[2] ? Q[1] !== A[Q[0]] : !(Q[0] in A))
            return !1;
        }
        for (; ++o < d; ) {
          Q = i[o];
          var y = Q[0], D = A[y], m = Q[1];
          if (I && Q[2]) {
            if (D === r && !(y in A))
              return !1;
          } else {
            var F = new ce();
            if (a)
              var G = a(D, m, y, A, e, F);
            if (!(G === r ? zt(m, D, k | N, a, F) : G))
              return !1;
          }
        }
        return !0;
      }
      function qo(A) {
        if (!lA(A) || dQ(A))
          return !1;
        var e = be(A) ? ku : EC;
        return e.test(je(A));
      }
      function _B(A) {
        return IA(A) && SA(A) == Lt;
      }
      function RB(A) {
        return IA(A) && kA(A) == se;
      }
      function GB(A) {
        return IA(A) && tr(A.length) && !!oA[SA(A)];
      }
      function Ko(A) {
        return typeof A == "function" ? A : A == null ? xA : typeof A == "object" ? W(A) ? Po(A[0], A[1]) : Wo(A) : lg(A);
      }
      function pn(A) {
        if (!Zt(A))
          return Lu(A);
        var e = [];
        for (var i in nA(A))
          rA.call(A, i) && i != "constructor" && e.push(i);
        return e;
      }
      function SB(A) {
        if (!lA(A))
          return uQ(A);
        var e = Zt(A), i = [];
        for (var a in A)
          a == "constructor" && (e || !rA.call(A, a)) || i.push(a);
        return i;
      }
      function vn(A, e) {
        return A < e;
      }
      function Oo(A, e) {
        var i = -1, a = YA(A) ? h(A.length) : [];
        return Le(A, function(o, d, I) {
          a[++i] = e(o, d, I);
        }), a;
      }
      function Wo(A) {
        var e = Mn(A);
        return e.length == 1 && e[0][2] ? Dc(e[0][0], e[0][1]) : function(i) {
          return i === A || En(i, A, e);
        };
      }
      function Po(A, e) {
        return Yn(A) && bc(e) ? Dc(ue(A), e) : function(i) {
          var a = zn(i, A);
          return a === r && a === e ? $n(i, A) : zt(e, a, k | N);
        };
      }
      function xi(A, e, i, a, o) {
        A !== e && un(e, function(d, I) {
          if (o || (o = new ce()), lA(d))
            NB(A, e, I, i, xi, a, o);
          else {
            var Q = a ? a(xn(A, I), d, I + "", A, e, o) : r;
            Q === r && (Q = d), In(A, I, Q);
          }
        }, JA);
      }
      function NB(A, e, i, a, o, d, I) {
        var Q = xn(A, i), y = xn(e, i), D = I.get(y);
        if (D) {
          In(A, i, D);
          return;
        }
        var m = d ? d(Q, y, i + "", A, e, I) : r, F = m === r;
        if (F) {
          var G = W(y), J = !G && Je(y), T = !G && !J && ft(y);
          m = y, G || J || T ? W(Q) ? m = Q : uA(Q) ? m = UA(Q) : J ? (F = !1, m = nc(y, !0)) : T ? (F = !1, m = ac(y, !0)) : m = [] : Vt(y) || Ze(y) ? (m = Q, Ze(Q) ? m = tg(Q) : (!lA(Q) || be(Q)) && (m = wc(y))) : F = !1;
        }
        F && (I.set(y, m), o(m, y, a, d, I), I.delete(y)), In(A, i, m);
      }
      function zo(A, e) {
        var i = A.length;
        if (i)
          return e += e < 0 ? i : 0, we(e, i) ? A[e] : r;
      }
      function $o(A, e, i) {
        e.length ? e = gA(e, function(d) {
          return W(d) ? function(I) {
            return ze(I, d.length === 1 ? d[0] : d);
          } : d;
        }) : e = [xA];
        var a = -1;
        e = gA(e, WA(H()));
        var o = Oo(A, function(d, I, Q) {
          var y = gA(e, function(D) {
            return D(d);
          });
          return { criteria: y, index: ++a, value: d };
        });
        return su(o, function(d, I) {
          return PB(d, I, i);
        });
      }
      function LB(A, e) {
        return jo(A, e, function(i, a) {
          return $n(A, a);
        });
      }
      function jo(A, e, i) {
        for (var a = -1, o = e.length, d = {}; ++a < o; ) {
          var I = e[a], Q = ze(A, I);
          i(Q, I) && $t(d, Ue(I, A), Q);
        }
        return d;
      }
      function MB(A) {
        return function(e) {
          return ze(e, A);
        };
      }
      function yn(A, e, i, a) {
        var o = a ? au : st, d = -1, I = e.length, Q = A;
        for (A === e && (e = UA(e)), i && (Q = gA(A, WA(i))); ++d < I; )
          for (var y = 0, D = e[d], m = i ? i(D) : D; (y = o(Q, m, y, a)) > -1; )
            Q !== A && _i.call(Q, y, 1), _i.call(A, y, 1);
        return A;
      }
      function Zo(A, e) {
        for (var i = A ? e.length : 0, a = i - 1; i--; ) {
          var o = e[i];
          if (i == a || o !== d) {
            var d = o;
            we(o) ? _i.call(A, o, 1) : Dn(A, o);
          }
        }
        return A;
      }
      function hn(A, e) {
        return A + Si(Ro() * (e - A + 1));
      }
      function UB(A, e, i, a) {
        for (var o = -1, d = EA(Gi((e - A) / (i || 1)), 0), I = h(d); d--; )
          I[a ? d : ++o] = A, A += i;
        return I;
      }
      function wn(A, e) {
        var i = "";
        if (!A || e < 1 || e > Qe)
          return i;
        do
          e % 2 && (i += A), e = Si(e / 2), e && (A += A);
        while (e);
        return i;
      }
      function j(A, e) {
        return Hn(mc(A, e, xA), A + "");
      }
      function YB(A) {
        return No(Et(A));
      }
      function JB(A, e) {
        var i = Et(A);
        return ji(i, Pe(e, 0, i.length));
      }
      function $t(A, e, i, a) {
        if (!lA(A))
          return A;
        e = Ue(e, A);
        for (var o = -1, d = e.length, I = d - 1, Q = A; Q != null && ++o < d; ) {
          var y = ue(e[o]), D = i;
          if (y === "__proto__" || y === "constructor" || y === "prototype")
            return A;
          if (o != I) {
            var m = Q[y];
            D = a ? a(m, y, Q) : r, D === r && (D = lA(m) ? m : we(e[o + 1]) ? [] : {});
          }
          Ot(Q, y, D), Q = Q[y];
        }
        return A;
      }
      var Xo = Ni ? function(A, e) {
        return Ni.set(A, e), A;
      } : xA, xB = Ri ? function(A, e) {
        return Ri(A, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Zn(e),
          writable: !0
        });
      } : xA;
      function HB(A) {
        return ji(Et(A));
      }
      function te(A, e, i) {
        var a = -1, o = A.length;
        e < 0 && (e = -e > o ? 0 : o + e), i = i > o ? o : i, i < 0 && (i += o), o = e > i ? 0 : i - e >>> 0, e >>>= 0;
        for (var d = h(o); ++a < o; )
          d[a] = A[a + e];
        return d;
      }
      function TB(A, e) {
        var i;
        return Le(A, function(a, o, d) {
          return i = e(a, o, d), !i;
        }), !!i;
      }
      function Hi(A, e, i) {
        var a = 0, o = A == null ? a : A.length;
        if (typeof e == "number" && e === e && o <= RA) {
          for (; a < o; ) {
            var d = a + o >>> 1, I = A[d];
            I !== null && !zA(I) && (i ? I <= e : I < e) ? a = d + 1 : o = d;
          }
          return o;
        }
        return bn(A, e, xA, i);
      }
      function bn(A, e, i, a) {
        var o = 0, d = A == null ? 0 : A.length;
        if (d === 0)
          return 0;
        e = i(e);
        for (var I = e !== e, Q = e === null, y = zA(e), D = e === r; o < d; ) {
          var m = Si((o + d) / 2), F = i(A[m]), G = F !== r, J = F === null, T = F === F, $ = zA(F);
          if (I)
            var q = a || T;
          else
            D ? q = T && (a || G) : Q ? q = T && G && (a || !J) : y ? q = T && G && !J && (a || !$) : J || $ ? q = !1 : q = a ? F <= e : F < e;
          q ? o = m + 1 : d = m;
        }
        return FA(d, ui);
      }
      function Vo(A, e) {
        for (var i = -1, a = A.length, o = 0, d = []; ++i < a; ) {
          var I = A[i], Q = e ? e(I) : I;
          if (!i || !ge(Q, y)) {
            var y = Q;
            d[o++] = I === 0 ? 0 : I;
          }
        }
        return d;
      }
      function Ac(A) {
        return typeof A == "number" ? A : zA(A) ? rt : +A;
      }
      function PA(A) {
        if (typeof A == "string")
          return A;
        if (W(A))
          return gA(A, PA) + "";
        if (zA(A))
          return Go ? Go.call(A) : "";
        var e = A + "";
        return e == "0" && 1 / A == -1 / 0 ? "-0" : e;
      }
      function Me(A, e, i) {
        var a = -1, o = pi, d = A.length, I = !0, Q = [], y = Q;
        if (i)
          I = !1, o = Vr;
        else if (d >= g) {
          var D = e ? null : VB(A);
          if (D)
            return yi(D);
          I = !1, o = Jt, y = new We();
        } else
          y = e ? [] : Q;
        A:
          for (; ++a < d; ) {
            var m = A[a], F = e ? e(m) : m;
            if (m = i || m !== 0 ? m : 0, I && F === F) {
              for (var G = y.length; G--; )
                if (y[G] === F)
                  continue A;
              e && y.push(F), Q.push(m);
            } else
              o(y, F, i) || (y !== Q && y.push(F), Q.push(m));
          }
        return Q;
      }
      function Dn(A, e) {
        return e = Ue(e, A), A = Fc(A, e), A == null || delete A[ue(ie(e))];
      }
      function ec(A, e, i, a) {
        return $t(A, e, i(ze(A, e)), a);
      }
      function Ti(A, e, i, a) {
        for (var o = A.length, d = a ? o : -1; (a ? d-- : ++d < o) && e(A[d], d, A); )
          ;
        return i ? te(A, a ? 0 : d, a ? d + 1 : o) : te(A, a ? d + 1 : 0, a ? o : d);
      }
      function tc(A, e) {
        var i = A;
        return i instanceof X && (i = i.value()), An(e, function(a, o) {
          return o.func.apply(o.thisArg, Ge([a], o.args));
        }, i);
      }
      function mn(A, e, i) {
        var a = A.length;
        if (a < 2)
          return a ? Me(A[0]) : [];
        for (var o = -1, d = h(a); ++o < a; )
          for (var I = A[o], Q = -1; ++Q < a; )
            Q != o && (d[o] = Wt(d[o] || I, A[Q], e, i));
        return Me(DA(d, 1), e, i);
      }
      function ic(A, e, i) {
        for (var a = -1, o = A.length, d = e.length, I = {}; ++a < o; ) {
          var Q = a < d ? e[a] : r;
          i(I, A[a], Q);
        }
        return I;
      }
      function Fn(A) {
        return uA(A) ? A : [];
      }
      function kn(A) {
        return typeof A == "function" ? A : xA;
      }
      function Ue(A, e) {
        return W(A) ? A : Yn(A, e) ? [A] : Gc(iA(A));
      }
      var qB = j;
      function Ye(A, e, i) {
        var a = A.length;
        return i = i === r ? a : i, !e && i >= a ? A : te(A, e, i);
      }
      var rc = _u || function(A) {
        return bA.clearTimeout(A);
      };
      function nc(A, e) {
        if (e)
          return A.slice();
        var i = A.length, a = Do ? Do(i) : new A.constructor(i);
        return A.copy(a), a;
      }
      function _n(A) {
        var e = new A.constructor(A.byteLength);
        return new Fi(e).set(new Fi(A)), e;
      }
      function KB(A, e) {
        var i = e ? _n(A.buffer) : A.buffer;
        return new A.constructor(i, A.byteOffset, A.byteLength);
      }
      function OB(A) {
        var e = new A.constructor(A.source, Hs.exec(A));
        return e.lastIndex = A.lastIndex, e;
      }
      function WB(A) {
        return Kt ? nA(Kt.call(A)) : {};
      }
      function ac(A, e) {
        var i = e ? _n(A.buffer) : A.buffer;
        return new A.constructor(i, A.byteOffset, A.length);
      }
      function sc(A, e) {
        if (A !== e) {
          var i = A !== r, a = A === null, o = A === A, d = zA(A), I = e !== r, Q = e === null, y = e === e, D = zA(e);
          if (!Q && !D && !d && A > e || d && I && y && !Q && !D || a && I && y || !i && y || !o)
            return 1;
          if (!a && !d && !D && A < e || D && i && o && !a && !d || Q && i && o || !I && o || !y)
            return -1;
        }
        return 0;
      }
      function PB(A, e, i) {
        for (var a = -1, o = A.criteria, d = e.criteria, I = o.length, Q = i.length; ++a < I; ) {
          var y = sc(o[a], d[a]);
          if (y) {
            if (a >= Q)
              return y;
            var D = i[a];
            return y * (D == "desc" ? -1 : 1);
          }
        }
        return A.index - e.index;
      }
      function oc(A, e, i, a) {
        for (var o = -1, d = A.length, I = i.length, Q = -1, y = e.length, D = EA(d - I, 0), m = h(y + D), F = !a; ++Q < y; )
          m[Q] = e[Q];
        for (; ++o < I; )
          (F || o < d) && (m[i[o]] = A[o]);
        for (; D--; )
          m[Q++] = A[o++];
        return m;
      }
      function cc(A, e, i, a) {
        for (var o = -1, d = A.length, I = -1, Q = i.length, y = -1, D = e.length, m = EA(d - Q, 0), F = h(m + D), G = !a; ++o < m; )
          F[o] = A[o];
        for (var J = o; ++y < D; )
          F[J + y] = e[y];
        for (; ++I < Q; )
          (G || o < d) && (F[J + i[I]] = A[o++]);
        return F;
      }
      function UA(A, e) {
        var i = -1, a = A.length;
        for (e || (e = h(a)); ++i < a; )
          e[i] = A[i];
        return e;
      }
      function Ce(A, e, i, a) {
        var o = !i;
        i || (i = {});
        for (var d = -1, I = e.length; ++d < I; ) {
          var Q = e[d], y = a ? a(i[Q], A[Q], Q, i, A) : r;
          y === r && (y = A[Q]), o ? ve(i, Q, y) : Ot(i, Q, y);
        }
        return i;
      }
      function zB(A, e) {
        return Ce(A, Un(A), e);
      }
      function $B(A, e) {
        return Ce(A, yc(A), e);
      }
      function qi(A, e) {
        return function(i, a) {
          var o = W(i) ? Au : QB, d = e ? e() : {};
          return o(i, A, H(a, 2), d);
        };
      }
      function ut(A) {
        return j(function(e, i) {
          var a = -1, o = i.length, d = o > 1 ? i[o - 1] : r, I = o > 2 ? i[2] : r;
          for (d = A.length > 3 && typeof d == "function" ? (o--, d) : r, I && NA(i[0], i[1], I) && (d = o < 3 ? r : d, o = 1), e = nA(e); ++a < o; ) {
            var Q = i[a];
            Q && A(e, Q, a, d);
          }
          return e;
        });
      }
      function gc(A, e) {
        return function(i, a) {
          if (i == null)
            return i;
          if (!YA(i))
            return A(i, a);
          for (var o = i.length, d = e ? o : -1, I = nA(i); (e ? d-- : ++d < o) && a(I[d], d, I) !== !1; )
            ;
          return i;
        };
      }
      function dc(A) {
        return function(e, i, a) {
          for (var o = -1, d = nA(e), I = a(e), Q = I.length; Q--; ) {
            var y = I[A ? Q : ++o];
            if (i(d[y], y, d) === !1)
              break;
          }
          return e;
        };
      }
      function jB(A, e, i) {
        var a = e & R, o = jt(A);
        function d() {
          var I = this && this !== bA && this instanceof d ? o : A;
          return I.apply(a ? i : this, arguments);
        }
        return d;
      }
      function lc(A) {
        return function(e) {
          e = iA(e);
          var i = ot(e) ? oe(e) : r, a = i ? i[0] : e.charAt(0), o = i ? Ye(i, 1).join("") : e.slice(1);
          return a[A]() + o;
        };
      }
      function Bt(A) {
        return function(e) {
          return An(gg(cg(e).replace(xC, "")), A, "");
        };
      }
      function jt(A) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new A();
            case 1:
              return new A(e[0]);
            case 2:
              return new A(e[0], e[1]);
            case 3:
              return new A(e[0], e[1], e[2]);
            case 4:
              return new A(e[0], e[1], e[2], e[3]);
            case 5:
              return new A(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new A(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new A(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var i = Ct(A.prototype), a = A.apply(i, e);
          return lA(a) ? a : i;
        };
      }
      function ZB(A, e, i) {
        var a = jt(A);
        function o() {
          for (var d = arguments.length, I = h(d), Q = d, y = Qt(o); Q--; )
            I[Q] = arguments[Q];
          var D = d < 3 && I[0] !== y && I[d - 1] !== y ? [] : Se(I, y);
          if (d -= D.length, d < i)
            return Qc(
              A,
              e,
              Ki,
              o.placeholder,
              r,
              I,
              D,
              r,
              r,
              i - d
            );
          var m = this && this !== bA && this instanceof o ? a : A;
          return OA(m, this, I);
        }
        return o;
      }
      function Ic(A) {
        return function(e, i, a) {
          var o = nA(e);
          if (!YA(e)) {
            var d = H(i, 3);
            e = yA(e), i = function(Q) {
              return d(o[Q], Q, o);
            };
          }
          var I = A(e, i, a);
          return I > -1 ? o[d ? e[I] : I] : r;
        };
      }
      function Cc(A) {
        return he(function(e) {
          var i = e.length, a = i, o = Ae.prototype.thru;
          for (A && e.reverse(); a--; ) {
            var d = e[a];
            if (typeof d != "function")
              throw new VA(C);
            if (o && !I && zi(d) == "wrapper")
              var I = new Ae([], !0);
          }
          for (a = I ? a : i; ++a < i; ) {
            d = e[a];
            var Q = zi(d), y = Q == "wrapper" ? Ln(d) : r;
            y && Jn(y[0]) && y[1] == (CA | eA | dA | vA) && !y[4].length && y[9] == 1 ? I = I[zi(y[0])].apply(I, y[3]) : I = d.length == 1 && Jn(d) ? I[Q]() : I.thru(d);
          }
          return function() {
            var D = arguments, m = D[0];
            if (I && D.length == 1 && W(m))
              return I.plant(m).value();
            for (var F = 0, G = i ? e[F].apply(this, D) : m; ++F < i; )
              G = e[F].call(this, G);
            return G;
          };
        });
      }
      function Ki(A, e, i, a, o, d, I, Q, y, D) {
        var m = e & CA, F = e & R, G = e & M, J = e & (eA | AA), T = e & xe, $ = G ? r : jt(A);
        function q() {
          for (var Z = arguments.length, V = h(Z), $A = Z; $A--; )
            V[$A] = arguments[$A];
          if (J)
            var LA = Qt(q), jA = cu(V, LA);
          if (a && (V = oc(V, a, o, J)), d && (V = cc(V, d, I, J)), Z -= jA, J && Z < D) {
            var BA = Se(V, LA);
            return Qc(
              A,
              e,
              Ki,
              q.placeholder,
              i,
              V,
              BA,
              Q,
              y,
              D - Z
            );
          }
          var de = F ? i : this, me = G ? de[A] : A;
          return Z = V.length, Q ? V = QQ(V, Q) : T && Z > 1 && V.reverse(), m && y < Z && (V.length = y), this && this !== bA && this instanceof q && (me = $ || jt(me)), me.apply(de, V);
        }
        return q;
      }
      function uc(A, e) {
        return function(i, a) {
          return bB(i, A, e(a), {});
        };
      }
      function Oi(A, e) {
        return function(i, a) {
          var o;
          if (i === r && a === r)
            return e;
          if (i !== r && (o = i), a !== r) {
            if (o === r)
              return a;
            typeof i == "string" || typeof a == "string" ? (i = PA(i), a = PA(a)) : (i = Ac(i), a = Ac(a)), o = A(i, a);
          }
          return o;
        };
      }
      function Rn(A) {
        return he(function(e) {
          return e = gA(e, WA(H())), j(function(i) {
            var a = this;
            return A(e, function(o) {
              return OA(o, a, i);
            });
          });
        });
      }
      function Wi(A, e) {
        e = e === r ? " " : PA(e);
        var i = e.length;
        if (i < 2)
          return i ? wn(e, A) : e;
        var a = wn(e, Gi(A / ct(e)));
        return ot(e) ? Ye(oe(a), 0, A).join("") : a.slice(0, A);
      }
      function XB(A, e, i, a) {
        var o = e & R, d = jt(A);
        function I() {
          for (var Q = -1, y = arguments.length, D = -1, m = a.length, F = h(m + y), G = this && this !== bA && this instanceof I ? d : A; ++D < m; )
            F[D] = a[D];
          for (; y--; )
            F[D++] = arguments[++Q];
          return OA(G, o ? i : this, F);
        }
        return I;
      }
      function Bc(A) {
        return function(e, i, a) {
          return a && typeof a != "number" && NA(e, i, a) && (i = a = r), e = De(e), i === r ? (i = e, e = 0) : i = De(i), a = a === r ? e < i ? 1 : -1 : De(a), UB(e, i, a, A);
        };
      }
      function Pi(A) {
        return function(e, i) {
          return typeof e == "string" && typeof i == "string" || (e = re(e), i = re(i)), A(e, i);
        };
      }
      function Qc(A, e, i, a, o, d, I, Q, y, D) {
        var m = e & eA, F = m ? I : r, G = m ? r : I, J = m ? d : r, T = m ? r : d;
        e |= m ? dA : QA, e &= ~(m ? QA : dA), e & x || (e &= -4);
        var $ = [
          A,
          e,
          o,
          J,
          F,
          T,
          G,
          Q,
          y,
          D
        ], q = i.apply(r, $);
        return Jn(A) && kc(q, $), q.placeholder = a, _c(q, A, e);
      }
      function Gn(A) {
        var e = fA[A];
        return function(i, a) {
          if (i = re(i), a = a == null ? 0 : FA(P(a), 292), a && _o(i)) {
            var o = (iA(i) + "e").split("e"), d = e(o[0] + "e" + (+o[1] + a));
            return o = (iA(d) + "e").split("e"), +(o[0] + "e" + (+o[1] - a));
          }
          return e(i);
        };
      }
      var VB = lt && 1 / yi(new lt([, -0]))[1] == it ? function(A) {
        return new lt(A);
      } : Aa;
      function fc(A) {
        return function(e) {
          var i = kA(e);
          return i == MA ? on(e) : i == se ? Bu(e) : ou(e, A(e));
        };
      }
      function ye(A, e, i, a, o, d, I, Q) {
        var y = e & M;
        if (!y && typeof A != "function")
          throw new VA(C);
        var D = a ? a.length : 0;
        if (D || (e &= -97, a = o = r), I = I === r ? I : EA(P(I), 0), Q = Q === r ? Q : P(Q), D -= o ? o.length : 0, e & QA) {
          var m = a, F = o;
          a = o = r;
        }
        var G = y ? r : Ln(A), J = [
          A,
          e,
          i,
          a,
          o,
          m,
          F,
          d,
          I,
          Q
        ];
        if (G && CQ(J, G), A = J[0], e = J[1], i = J[2], a = J[3], o = J[4], Q = J[9] = J[9] === r ? y ? 0 : A.length : EA(J[9] - D, 0), !Q && e & (eA | AA) && (e &= -25), !e || e == R)
          var T = jB(A, e, i);
        else
          e == eA || e == AA ? T = ZB(A, e, Q) : (e == dA || e == (R | dA)) && !o.length ? T = XB(A, e, i, a) : T = Ki.apply(r, J);
        var $ = G ? Xo : kc;
        return _c($(T, J), A, e);
      }
      function Ec(A, e, i, a) {
        return A === r || ge(A, dt[i]) && !rA.call(a, i) ? e : A;
      }
      function pc(A, e, i, a, o, d) {
        return lA(A) && lA(e) && (d.set(e, A), xi(A, e, r, pc, d), d.delete(e)), A;
      }
      function AQ(A) {
        return Vt(A) ? r : A;
      }
      function vc(A, e, i, a, o, d) {
        var I = i & k, Q = A.length, y = e.length;
        if (Q != y && !(I && y > Q))
          return !1;
        var D = d.get(A), m = d.get(e);
        if (D && m)
          return D == e && m == A;
        var F = -1, G = !0, J = i & N ? new We() : r;
        for (d.set(A, e), d.set(e, A); ++F < Q; ) {
          var T = A[F], $ = e[F];
          if (a)
            var q = I ? a($, T, F, e, A, d) : a(T, $, F, A, e, d);
          if (q !== r) {
            if (q)
              continue;
            G = !1;
            break;
          }
          if (J) {
            if (!en(e, function(Z, V) {
              if (!Jt(J, V) && (T === Z || o(T, Z, i, a, d)))
                return J.push(V);
            })) {
              G = !1;
              break;
            }
          } else if (!(T === $ || o(T, $, i, a, d))) {
            G = !1;
            break;
          }
        }
        return d.delete(A), d.delete(e), G;
      }
      function eQ(A, e, i, a, o, d, I) {
        switch (i) {
          case nt:
            if (A.byteLength != e.byteLength || A.byteOffset != e.byteOffset)
              return !1;
            A = A.buffer, e = e.buffer;
          case Yt:
            return !(A.byteLength != e.byteLength || !d(new Fi(A), new Fi(e)));
          case K:
          case z:
          case Te:
            return ge(+A, +e);
          case GA:
            return A.name == e.name && A.message == e.message;
          case Lt:
          case Mt:
            return A == e + "";
          case MA:
            var Q = on;
          case se:
            var y = a & k;
            if (Q || (Q = yi), A.size != e.size && !y)
              return !1;
            var D = I.get(A);
            if (D)
              return D == e;
            a |= N, I.set(A, e);
            var m = vc(Q(A), Q(e), a, o, d, I);
            return I.delete(A), m;
          case Bi:
            if (Kt)
              return Kt.call(A) == Kt.call(e);
        }
        return !1;
      }
      function tQ(A, e, i, a, o, d) {
        var I = i & k, Q = Sn(A), y = Q.length, D = Sn(e), m = D.length;
        if (y != m && !I)
          return !1;
        for (var F = y; F--; ) {
          var G = Q[F];
          if (!(I ? G in e : rA.call(e, G)))
            return !1;
        }
        var J = d.get(A), T = d.get(e);
        if (J && T)
          return J == e && T == A;
        var $ = !0;
        d.set(A, e), d.set(e, A);
        for (var q = I; ++F < y; ) {
          G = Q[F];
          var Z = A[G], V = e[G];
          if (a)
            var $A = I ? a(V, Z, G, e, A, d) : a(Z, V, G, A, e, d);
          if (!($A === r ? Z === V || o(Z, V, i, a, d) : $A)) {
            $ = !1;
            break;
          }
          q || (q = G == "constructor");
        }
        if ($ && !q) {
          var LA = A.constructor, jA = e.constructor;
          LA != jA && "constructor" in A && "constructor" in e && !(typeof LA == "function" && LA instanceof LA && typeof jA == "function" && jA instanceof jA) && ($ = !1);
        }
        return d.delete(A), d.delete(e), $;
      }
      function he(A) {
        return Hn(mc(A, r, Mc), A + "");
      }
      function Sn(A) {
        return Ho(A, yA, Un);
      }
      function Nn(A) {
        return Ho(A, JA, yc);
      }
      var Ln = Ni ? function(A) {
        return Ni.get(A);
      } : Aa;
      function zi(A) {
        for (var e = A.name + "", i = It[e], a = rA.call(It, e) ? i.length : 0; a--; ) {
          var o = i[a], d = o.func;
          if (d == null || d == A)
            return o.name;
        }
        return e;
      }
      function Qt(A) {
        var e = rA.call(c, "placeholder") ? c : A;
        return e.placeholder;
      }
      function H() {
        var A = c.iteratee || Xn;
        return A = A === Xn ? Ko : A, arguments.length ? A(arguments[0], arguments[1]) : A;
      }
      function $i(A, e) {
        var i = A.__data__;
        return gQ(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
      }
      function Mn(A) {
        for (var e = yA(A), i = e.length; i--; ) {
          var a = e[i], o = A[a];
          e[i] = [a, o, bc(o)];
        }
        return e;
      }
      function $e(A, e) {
        var i = Iu(A, e);
        return qo(i) ? i : r;
      }
      function iQ(A) {
        var e = rA.call(A, Ke), i = A[Ke];
        try {
          A[Ke] = r;
          var a = !0;
        } catch {
        }
        var o = Di.call(A);
        return a && (e ? A[Ke] = i : delete A[Ke]), o;
      }
      var Un = gn ? function(A) {
        return A == null ? [] : (A = nA(A), Re(gn(A), function(e) {
          return Fo.call(A, e);
        }));
      } : ea, yc = gn ? function(A) {
        for (var e = []; A; )
          Ge(e, Un(A)), A = ki(A);
        return e;
      } : ea, kA = SA;
      (dn && kA(new dn(new ArrayBuffer(1))) != nt || Ht && kA(new Ht()) != MA || ln && kA(ln.resolve()) != Us || lt && kA(new lt()) != se || Tt && kA(new Tt()) != Ut) && (kA = function(A) {
        var e = SA(A), i = e == fe ? A.constructor : r, a = i ? je(i) : "";
        if (a)
          switch (a) {
            case Ju:
              return nt;
            case xu:
              return MA;
            case Hu:
              return Us;
            case Tu:
              return se;
            case qu:
              return Ut;
          }
        return e;
      });
      function rQ(A, e, i) {
        for (var a = -1, o = i.length; ++a < o; ) {
          var d = i[a], I = d.size;
          switch (d.type) {
            case "drop":
              A += I;
              break;
            case "dropRight":
              e -= I;
              break;
            case "take":
              e = FA(e, A + I);
              break;
            case "takeRight":
              A = EA(A, e - I);
              break;
          }
        }
        return { start: A, end: e };
      }
      function nQ(A) {
        var e = A.match(dC);
        return e ? e[1].split(lC) : [];
      }
      function hc(A, e, i) {
        e = Ue(e, A);
        for (var a = -1, o = e.length, d = !1; ++a < o; ) {
          var I = ue(e[a]);
          if (!(d = A != null && i(A, I)))
            break;
          A = A[I];
        }
        return d || ++a != o ? d : (o = A == null ? 0 : A.length, !!o && tr(o) && we(I, o) && (W(A) || Ze(A)));
      }
      function aQ(A) {
        var e = A.length, i = new A.constructor(e);
        return e && typeof A[0] == "string" && rA.call(A, "index") && (i.index = A.index, i.input = A.input), i;
      }
      function wc(A) {
        return typeof A.constructor == "function" && !Zt(A) ? Ct(ki(A)) : {};
      }
      function sQ(A, e, i) {
        var a = A.constructor;
        switch (e) {
          case Yt:
            return _n(A);
          case K:
          case z:
            return new a(+A);
          case nt:
            return KB(A, i);
          case Lr:
          case Mr:
          case Ur:
          case Yr:
          case Jr:
          case xr:
          case Hr:
          case Tr:
          case qr:
            return ac(A, i);
          case MA:
            return new a();
          case Te:
          case Mt:
            return new a(A);
          case Lt:
            return OB(A);
          case se:
            return new a();
          case Bi:
            return WB(A);
        }
      }
      function oQ(A, e) {
        var i = e.length;
        if (!i)
          return A;
        var a = i - 1;
        return e[a] = (i > 1 ? "& " : "") + e[a], e = e.join(i > 2 ? ", " : " "), A.replace(gC, `{
/* [wrapped with ` + e + `] */
`);
      }
      function cQ(A) {
        return W(A) || Ze(A) || !!(ko && A && A[ko]);
      }
      function we(A, e) {
        var i = typeof A;
        return e = e ?? Qe, !!e && (i == "number" || i != "symbol" && vC.test(A)) && A > -1 && A % 1 == 0 && A < e;
      }
      function NA(A, e, i) {
        if (!lA(i))
          return !1;
        var a = typeof e;
        return (a == "number" ? YA(i) && we(e, i.length) : a == "string" && e in i) ? ge(i[e], A) : !1;
      }
      function Yn(A, e) {
        if (W(A))
          return !1;
        var i = typeof A;
        return i == "number" || i == "symbol" || i == "boolean" || A == null || zA(A) ? !0 : aC.test(A) || !nC.test(A) || e != null && A in nA(e);
      }
      function gQ(A) {
        var e = typeof A;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? A !== "__proto__" : A === null;
      }
      function Jn(A) {
        var e = zi(A), i = c[e];
        if (typeof i != "function" || !(e in X.prototype))
          return !1;
        if (A === i)
          return !0;
        var a = Ln(i);
        return !!a && A === a[0];
      }
      function dQ(A) {
        return !!bo && bo in A;
      }
      var lQ = wi ? be : ta;
      function Zt(A) {
        var e = A && A.constructor, i = typeof e == "function" && e.prototype || dt;
        return A === i;
      }
      function bc(A) {
        return A === A && !lA(A);
      }
      function Dc(A, e) {
        return function(i) {
          return i == null ? !1 : i[A] === e && (e !== r || A in nA(i));
        };
      }
      function IQ(A) {
        var e = Ar(A, function(a) {
          return i.size === p && i.clear(), a;
        }), i = e.cache;
        return e;
      }
      function CQ(A, e) {
        var i = A[1], a = e[1], o = i | a, d = o < (R | M | CA), I = a == CA && i == eA || a == CA && i == vA && A[7].length <= e[8] || a == (CA | vA) && e[7].length <= e[8] && i == eA;
        if (!(d || I))
          return A;
        a & R && (A[2] = e[2], o |= i & R ? 0 : x);
        var Q = e[3];
        if (Q) {
          var y = A[3];
          A[3] = y ? oc(y, Q, e[4]) : Q, A[4] = y ? Se(A[3], E) : e[4];
        }
        return Q = e[5], Q && (y = A[5], A[5] = y ? cc(y, Q, e[6]) : Q, A[6] = y ? Se(A[5], E) : e[6]), Q = e[7], Q && (A[7] = Q), a & CA && (A[8] = A[8] == null ? e[8] : FA(A[8], e[8])), A[9] == null && (A[9] = e[9]), A[0] = e[0], A[1] = o, A;
      }
      function uQ(A) {
        var e = [];
        if (A != null)
          for (var i in nA(A))
            e.push(i);
        return e;
      }
      function BQ(A) {
        return Di.call(A);
      }
      function mc(A, e, i) {
        return e = EA(e === r ? A.length - 1 : e, 0), function() {
          for (var a = arguments, o = -1, d = EA(a.length - e, 0), I = h(d); ++o < d; )
            I[o] = a[e + o];
          o = -1;
          for (var Q = h(e + 1); ++o < e; )
            Q[o] = a[o];
          return Q[e] = i(I), OA(A, this, Q);
        };
      }
      function Fc(A, e) {
        return e.length < 2 ? A : ze(A, te(e, 0, -1));
      }
      function QQ(A, e) {
        for (var i = A.length, a = FA(e.length, i), o = UA(A); a--; ) {
          var d = e[a];
          A[a] = we(d, i) ? o[d] : r;
        }
        return A;
      }
      function xn(A, e) {
        if (!(e === "constructor" && typeof A[e] == "function") && e != "__proto__")
          return A[e];
      }
      var kc = Rc(Xo), Xt = Gu || function(A, e) {
        return bA.setTimeout(A, e);
      }, Hn = Rc(xB);
      function _c(A, e, i) {
        var a = e + "";
        return Hn(A, oQ(a, fQ(nQ(a), i)));
      }
      function Rc(A) {
        var e = 0, i = 0;
        return function() {
          var a = Mu(), o = Gr - (a - i);
          if (i = a, o > 0) {
            if (++e >= Rr)
              return arguments[0];
          } else
            e = 0;
          return A.apply(r, arguments);
        };
      }
      function ji(A, e) {
        var i = -1, a = A.length, o = a - 1;
        for (e = e === r ? a : e; ++i < e; ) {
          var d = hn(i, o), I = A[d];
          A[d] = A[i], A[i] = I;
        }
        return A.length = e, A;
      }
      var Gc = IQ(function(A) {
        var e = [];
        return A.charCodeAt(0) === 46 && e.push(""), A.replace(sC, function(i, a, o, d) {
          e.push(o ? d.replace(uC, "$1") : a || i);
        }), e;
      });
      function ue(A) {
        if (typeof A == "string" || zA(A))
          return A;
        var e = A + "";
        return e == "0" && 1 / A == -1 / 0 ? "-0" : e;
      }
      function je(A) {
        if (A != null) {
          try {
            return bi.call(A);
          } catch {
          }
          try {
            return A + "";
          } catch {
          }
        }
        return "";
      }
      function fQ(A, e) {
        return XA(He, function(i) {
          var a = "_." + i[0];
          e & i[1] && !pi(A, a) && A.push(a);
        }), A.sort();
      }
      function Sc(A) {
        if (A instanceof X)
          return A.clone();
        var e = new Ae(A.__wrapped__, A.__chain__);
        return e.__actions__ = UA(A.__actions__), e.__index__ = A.__index__, e.__values__ = A.__values__, e;
      }
      function EQ(A, e, i) {
        (i ? NA(A, e, i) : e === r) ? e = 1 : e = EA(P(e), 0);
        var a = A == null ? 0 : A.length;
        if (!a || e < 1)
          return [];
        for (var o = 0, d = 0, I = h(Gi(a / e)); o < a; )
          I[d++] = te(A, o, o += e);
        return I;
      }
      function pQ(A) {
        for (var e = -1, i = A == null ? 0 : A.length, a = 0, o = []; ++e < i; ) {
          var d = A[e];
          d && (o[a++] = d);
        }
        return o;
      }
      function vQ() {
        var A = arguments.length;
        if (!A)
          return [];
        for (var e = h(A - 1), i = arguments[0], a = A; a--; )
          e[a - 1] = arguments[a];
        return Ge(W(i) ? UA(i) : [i], DA(e, 1));
      }
      var yQ = j(function(A, e) {
        return uA(A) ? Wt(A, DA(e, 1, uA, !0)) : [];
      }), hQ = j(function(A, e) {
        var i = ie(e);
        return uA(i) && (i = r), uA(A) ? Wt(A, DA(e, 1, uA, !0), H(i, 2)) : [];
      }), wQ = j(function(A, e) {
        var i = ie(e);
        return uA(i) && (i = r), uA(A) ? Wt(A, DA(e, 1, uA, !0), r, i) : [];
      });
      function bQ(A, e, i) {
        var a = A == null ? 0 : A.length;
        return a ? (e = i || e === r ? 1 : P(e), te(A, e < 0 ? 0 : e, a)) : [];
      }
      function DQ(A, e, i) {
        var a = A == null ? 0 : A.length;
        return a ? (e = i || e === r ? 1 : P(e), e = a - e, te(A, 0, e < 0 ? 0 : e)) : [];
      }
      function mQ(A, e) {
        return A && A.length ? Ti(A, H(e, 3), !0, !0) : [];
      }
      function FQ(A, e) {
        return A && A.length ? Ti(A, H(e, 3), !0) : [];
      }
      function kQ(A, e, i, a) {
        var o = A == null ? 0 : A.length;
        return o ? (i && typeof i != "number" && NA(A, e, i) && (i = 0, a = o), vB(A, e, i, a)) : [];
      }
      function Nc(A, e, i) {
        var a = A == null ? 0 : A.length;
        if (!a)
          return -1;
        var o = i == null ? 0 : P(i);
        return o < 0 && (o = EA(a + o, 0)), vi(A, H(e, 3), o);
      }
      function Lc(A, e, i) {
        var a = A == null ? 0 : A.length;
        if (!a)
          return -1;
        var o = a - 1;
        return i !== r && (o = P(i), o = i < 0 ? EA(a + o, 0) : FA(o, a - 1)), vi(A, H(e, 3), o, !0);
      }
      function Mc(A) {
        var e = A == null ? 0 : A.length;
        return e ? DA(A, 1) : [];
      }
      function _Q(A) {
        var e = A == null ? 0 : A.length;
        return e ? DA(A, it) : [];
      }
      function RQ(A, e) {
        var i = A == null ? 0 : A.length;
        return i ? (e = e === r ? 1 : P(e), DA(A, e)) : [];
      }
      function GQ(A) {
        for (var e = -1, i = A == null ? 0 : A.length, a = {}; ++e < i; ) {
          var o = A[e];
          a[o[0]] = o[1];
        }
        return a;
      }
      function Uc(A) {
        return A && A.length ? A[0] : r;
      }
      function SQ(A, e, i) {
        var a = A == null ? 0 : A.length;
        if (!a)
          return -1;
        var o = i == null ? 0 : P(i);
        return o < 0 && (o = EA(a + o, 0)), st(A, e, o);
      }
      function NQ(A) {
        var e = A == null ? 0 : A.length;
        return e ? te(A, 0, -1) : [];
      }
      var LQ = j(function(A) {
        var e = gA(A, Fn);
        return e.length && e[0] === A[0] ? fn(e) : [];
      }), MQ = j(function(A) {
        var e = ie(A), i = gA(A, Fn);
        return e === ie(i) ? e = r : i.pop(), i.length && i[0] === A[0] ? fn(i, H(e, 2)) : [];
      }), UQ = j(function(A) {
        var e = ie(A), i = gA(A, Fn);
        return e = typeof e == "function" ? e : r, e && i.pop(), i.length && i[0] === A[0] ? fn(i, r, e) : [];
      });
      function YQ(A, e) {
        return A == null ? "" : Nu.call(A, e);
      }
      function ie(A) {
        var e = A == null ? 0 : A.length;
        return e ? A[e - 1] : r;
      }
      function JQ(A, e, i) {
        var a = A == null ? 0 : A.length;
        if (!a)
          return -1;
        var o = a;
        return i !== r && (o = P(i), o = o < 0 ? EA(a + o, 0) : FA(o, a - 1)), e === e ? fu(A, e, o) : vi(A, Qo, o, !0);
      }
      function xQ(A, e) {
        return A && A.length ? zo(A, P(e)) : r;
      }
      var HQ = j(Yc);
      function Yc(A, e) {
        return A && A.length && e && e.length ? yn(A, e) : A;
      }
      function TQ(A, e, i) {
        return A && A.length && e && e.length ? yn(A, e, H(i, 2)) : A;
      }
      function qQ(A, e, i) {
        return A && A.length && e && e.length ? yn(A, e, r, i) : A;
      }
      var KQ = he(function(A, e) {
        var i = A == null ? 0 : A.length, a = Cn(A, e);
        return Zo(A, gA(e, function(o) {
          return we(o, i) ? +o : o;
        }).sort(sc)), a;
      });
      function OQ(A, e) {
        var i = [];
        if (!(A && A.length))
          return i;
        var a = -1, o = [], d = A.length;
        for (e = H(e, 3); ++a < d; ) {
          var I = A[a];
          e(I, a, A) && (i.push(I), o.push(a));
        }
        return Zo(A, o), i;
      }
      function Tn(A) {
        return A == null ? A : Yu.call(A);
      }
      function WQ(A, e, i) {
        var a = A == null ? 0 : A.length;
        return a ? (i && typeof i != "number" && NA(A, e, i) ? (e = 0, i = a) : (e = e == null ? 0 : P(e), i = i === r ? a : P(i)), te(A, e, i)) : [];
      }
      function PQ(A, e) {
        return Hi(A, e);
      }
      function zQ(A, e, i) {
        return bn(A, e, H(i, 2));
      }
      function $Q(A, e) {
        var i = A == null ? 0 : A.length;
        if (i) {
          var a = Hi(A, e);
          if (a < i && ge(A[a], e))
            return a;
        }
        return -1;
      }
      function jQ(A, e) {
        return Hi(A, e, !0);
      }
      function ZQ(A, e, i) {
        return bn(A, e, H(i, 2), !0);
      }
      function XQ(A, e) {
        var i = A == null ? 0 : A.length;
        if (i) {
          var a = Hi(A, e, !0) - 1;
          if (ge(A[a], e))
            return a;
        }
        return -1;
      }
      function VQ(A) {
        return A && A.length ? Vo(A) : [];
      }
      function Af(A, e) {
        return A && A.length ? Vo(A, H(e, 2)) : [];
      }
      function ef(A) {
        var e = A == null ? 0 : A.length;
        return e ? te(A, 1, e) : [];
      }
      function tf(A, e, i) {
        return A && A.length ? (e = i || e === r ? 1 : P(e), te(A, 0, e < 0 ? 0 : e)) : [];
      }
      function rf(A, e, i) {
        var a = A == null ? 0 : A.length;
        return a ? (e = i || e === r ? 1 : P(e), e = a - e, te(A, e < 0 ? 0 : e, a)) : [];
      }
      function nf(A, e) {
        return A && A.length ? Ti(A, H(e, 3), !1, !0) : [];
      }
      function af(A, e) {
        return A && A.length ? Ti(A, H(e, 3)) : [];
      }
      var sf = j(function(A) {
        return Me(DA(A, 1, uA, !0));
      }), of = j(function(A) {
        var e = ie(A);
        return uA(e) && (e = r), Me(DA(A, 1, uA, !0), H(e, 2));
      }), cf = j(function(A) {
        var e = ie(A);
        return e = typeof e == "function" ? e : r, Me(DA(A, 1, uA, !0), r, e);
      });
      function gf(A) {
        return A && A.length ? Me(A) : [];
      }
      function df(A, e) {
        return A && A.length ? Me(A, H(e, 2)) : [];
      }
      function lf(A, e) {
        return e = typeof e == "function" ? e : r, A && A.length ? Me(A, r, e) : [];
      }
      function qn(A) {
        if (!(A && A.length))
          return [];
        var e = 0;
        return A = Re(A, function(i) {
          if (uA(i))
            return e = EA(i.length, e), !0;
        }), an(e, function(i) {
          return gA(A, tn(i));
        });
      }
      function Jc(A, e) {
        if (!(A && A.length))
          return [];
        var i = qn(A);
        return e == null ? i : gA(i, function(a) {
          return OA(e, r, a);
        });
      }
      var If = j(function(A, e) {
        return uA(A) ? Wt(A, e) : [];
      }), Cf = j(function(A) {
        return mn(Re(A, uA));
      }), uf = j(function(A) {
        var e = ie(A);
        return uA(e) && (e = r), mn(Re(A, uA), H(e, 2));
      }), Bf = j(function(A) {
        var e = ie(A);
        return e = typeof e == "function" ? e : r, mn(Re(A, uA), r, e);
      }), Qf = j(qn);
      function ff(A, e) {
        return ic(A || [], e || [], Ot);
      }
      function Ef(A, e) {
        return ic(A || [], e || [], $t);
      }
      var pf = j(function(A) {
        var e = A.length, i = e > 1 ? A[e - 1] : r;
        return i = typeof i == "function" ? (A.pop(), i) : r, Jc(A, i);
      });
      function xc(A) {
        var e = c(A);
        return e.__chain__ = !0, e;
      }
      function vf(A, e) {
        return e(A), A;
      }
      function Zi(A, e) {
        return e(A);
      }
      var yf = he(function(A) {
        var e = A.length, i = e ? A[0] : 0, a = this.__wrapped__, o = function(d) {
          return Cn(d, A);
        };
        return e > 1 || this.__actions__.length || !(a instanceof X) || !we(i) ? this.thru(o) : (a = a.slice(i, +i + (e ? 1 : 0)), a.__actions__.push({
          func: Zi,
          args: [o],
          thisArg: r
        }), new Ae(a, this.__chain__).thru(function(d) {
          return e && !d.length && d.push(r), d;
        }));
      });
      function hf() {
        return xc(this);
      }
      function wf() {
        return new Ae(this.value(), this.__chain__);
      }
      function bf() {
        this.__values__ === r && (this.__values__ = Ag(this.value()));
        var A = this.__index__ >= this.__values__.length, e = A ? r : this.__values__[this.__index__++];
        return { done: A, value: e };
      }
      function Df() {
        return this;
      }
      function mf(A) {
        for (var e, i = this; i instanceof Mi; ) {
          var a = Sc(i);
          a.__index__ = 0, a.__values__ = r, e ? o.__wrapped__ = a : e = a;
          var o = a;
          i = i.__wrapped__;
        }
        return o.__wrapped__ = A, e;
      }
      function Ff() {
        var A = this.__wrapped__;
        if (A instanceof X) {
          var e = A;
          return this.__actions__.length && (e = new X(this)), e = e.reverse(), e.__actions__.push({
            func: Zi,
            args: [Tn],
            thisArg: r
          }), new Ae(e, this.__chain__);
        }
        return this.thru(Tn);
      }
      function kf() {
        return tc(this.__wrapped__, this.__actions__);
      }
      var _f = qi(function(A, e, i) {
        rA.call(A, i) ? ++A[i] : ve(A, i, 1);
      });
      function Rf(A, e, i) {
        var a = W(A) ? uo : pB;
        return i && NA(A, e, i) && (e = r), a(A, H(e, 3));
      }
      function Gf(A, e) {
        var i = W(A) ? Re : Jo;
        return i(A, H(e, 3));
      }
      var Sf = Ic(Nc), Nf = Ic(Lc);
      function Lf(A, e) {
        return DA(Xi(A, e), 1);
      }
      function Mf(A, e) {
        return DA(Xi(A, e), it);
      }
      function Uf(A, e, i) {
        return i = i === r ? 1 : P(i), DA(Xi(A, e), i);
      }
      function Hc(A, e) {
        var i = W(A) ? XA : Le;
        return i(A, H(e, 3));
      }
      function Tc(A, e) {
        var i = W(A) ? eu : Yo;
        return i(A, H(e, 3));
      }
      var Yf = qi(function(A, e, i) {
        rA.call(A, i) ? A[i].push(e) : ve(A, i, [e]);
      });
      function Jf(A, e, i, a) {
        A = YA(A) ? A : Et(A), i = i && !a ? P(i) : 0;
        var o = A.length;
        return i < 0 && (i = EA(o + i, 0)), ir(A) ? i <= o && A.indexOf(e, i) > -1 : !!o && st(A, e, i) > -1;
      }
      var xf = j(function(A, e, i) {
        var a = -1, o = typeof e == "function", d = YA(A) ? h(A.length) : [];
        return Le(A, function(I) {
          d[++a] = o ? OA(e, I, i) : Pt(I, e, i);
        }), d;
      }), Hf = qi(function(A, e, i) {
        ve(A, i, e);
      });
      function Xi(A, e) {
        var i = W(A) ? gA : Oo;
        return i(A, H(e, 3));
      }
      function Tf(A, e, i, a) {
        return A == null ? [] : (W(e) || (e = e == null ? [] : [e]), i = a ? r : i, W(i) || (i = i == null ? [] : [i]), $o(A, e, i));
      }
      var qf = qi(function(A, e, i) {
        A[i ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function Kf(A, e, i) {
        var a = W(A) ? An : Eo, o = arguments.length < 3;
        return a(A, H(e, 4), i, o, Le);
      }
      function Of(A, e, i) {
        var a = W(A) ? tu : Eo, o = arguments.length < 3;
        return a(A, H(e, 4), i, o, Yo);
      }
      function Wf(A, e) {
        var i = W(A) ? Re : Jo;
        return i(A, er(H(e, 3)));
      }
      function Pf(A) {
        var e = W(A) ? No : YB;
        return e(A);
      }
      function zf(A, e, i) {
        (i ? NA(A, e, i) : e === r) ? e = 1 : e = P(e);
        var a = W(A) ? uB : JB;
        return a(A, e);
      }
      function $f(A) {
        var e = W(A) ? BB : HB;
        return e(A);
      }
      function jf(A) {
        if (A == null)
          return 0;
        if (YA(A))
          return ir(A) ? ct(A) : A.length;
        var e = kA(A);
        return e == MA || e == se ? A.size : pn(A).length;
      }
      function Zf(A, e, i) {
        var a = W(A) ? en : TB;
        return i && NA(A, e, i) && (e = r), a(A, H(e, 3));
      }
      var Xf = j(function(A, e) {
        if (A == null)
          return [];
        var i = e.length;
        return i > 1 && NA(A, e[0], e[1]) ? e = [] : i > 2 && NA(e[0], e[1], e[2]) && (e = [e[0]]), $o(A, DA(e, 1), []);
      }), Vi = Ru || function() {
        return bA.Date.now();
      };
      function Vf(A, e) {
        if (typeof e != "function")
          throw new VA(C);
        return A = P(A), function() {
          if (--A < 1)
            return e.apply(this, arguments);
        };
      }
      function qc(A, e, i) {
        return e = i ? r : e, e = A && e == null ? A.length : e, ye(A, CA, r, r, r, r, e);
      }
      function Kc(A, e) {
        var i;
        if (typeof e != "function")
          throw new VA(C);
        return A = P(A), function() {
          return --A > 0 && (i = e.apply(this, arguments)), A <= 1 && (e = r), i;
        };
      }
      var Kn = j(function(A, e, i) {
        var a = R;
        if (i.length) {
          var o = Se(i, Qt(Kn));
          a |= dA;
        }
        return ye(A, a, e, i, o);
      }), Oc = j(function(A, e, i) {
        var a = R | M;
        if (i.length) {
          var o = Se(i, Qt(Oc));
          a |= dA;
        }
        return ye(e, a, A, i, o);
      });
      function Wc(A, e, i) {
        e = i ? r : e;
        var a = ye(A, eA, r, r, r, r, r, e);
        return a.placeholder = Wc.placeholder, a;
      }
      function Pc(A, e, i) {
        e = i ? r : e;
        var a = ye(A, AA, r, r, r, r, r, e);
        return a.placeholder = Pc.placeholder, a;
      }
      function zc(A, e, i) {
        var a, o, d, I, Q, y, D = 0, m = !1, F = !1, G = !0;
        if (typeof A != "function")
          throw new VA(C);
        e = re(e) || 0, lA(i) && (m = !!i.leading, F = "maxWait" in i, d = F ? EA(re(i.maxWait) || 0, e) : d, G = "trailing" in i ? !!i.trailing : G);
        function J(BA) {
          var de = a, me = o;
          return a = o = r, D = BA, I = A.apply(me, de), I;
        }
        function T(BA) {
          return D = BA, Q = Xt(Z, e), m ? J(BA) : I;
        }
        function $(BA) {
          var de = BA - y, me = BA - D, Ig = e - de;
          return F ? FA(Ig, d - me) : Ig;
        }
        function q(BA) {
          var de = BA - y, me = BA - D;
          return y === r || de >= e || de < 0 || F && me >= d;
        }
        function Z() {
          var BA = Vi();
          if (q(BA))
            return V(BA);
          Q = Xt(Z, $(BA));
        }
        function V(BA) {
          return Q = r, G && a ? J(BA) : (a = o = r, I);
        }
        function $A() {
          Q !== r && rc(Q), D = 0, a = y = o = Q = r;
        }
        function LA() {
          return Q === r ? I : V(Vi());
        }
        function jA() {
          var BA = Vi(), de = q(BA);
          if (a = arguments, o = this, y = BA, de) {
            if (Q === r)
              return T(y);
            if (F)
              return rc(Q), Q = Xt(Z, e), J(y);
          }
          return Q === r && (Q = Xt(Z, e)), I;
        }
        return jA.cancel = $A, jA.flush = LA, jA;
      }
      var AE = j(function(A, e) {
        return Uo(A, 1, e);
      }), eE = j(function(A, e, i) {
        return Uo(A, re(e) || 0, i);
      });
      function tE(A) {
        return ye(A, xe);
      }
      function Ar(A, e) {
        if (typeof A != "function" || e != null && typeof e != "function")
          throw new VA(C);
        var i = function() {
          var a = arguments, o = e ? e.apply(this, a) : a[0], d = i.cache;
          if (d.has(o))
            return d.get(o);
          var I = A.apply(this, a);
          return i.cache = d.set(o, I) || d, I;
        };
        return i.cache = new (Ar.Cache || pe)(), i;
      }
      Ar.Cache = pe;
      function er(A) {
        if (typeof A != "function")
          throw new VA(C);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !A.call(this);
            case 1:
              return !A.call(this, e[0]);
            case 2:
              return !A.call(this, e[0], e[1]);
            case 3:
              return !A.call(this, e[0], e[1], e[2]);
          }
          return !A.apply(this, e);
        };
      }
      function iE(A) {
        return Kc(2, A);
      }
      var rE = qB(function(A, e) {
        e = e.length == 1 && W(e[0]) ? gA(e[0], WA(H())) : gA(DA(e, 1), WA(H()));
        var i = e.length;
        return j(function(a) {
          for (var o = -1, d = FA(a.length, i); ++o < d; )
            a[o] = e[o].call(this, a[o]);
          return OA(A, this, a);
        });
      }), On = j(function(A, e) {
        var i = Se(e, Qt(On));
        return ye(A, dA, r, e, i);
      }), $c = j(function(A, e) {
        var i = Se(e, Qt($c));
        return ye(A, QA, r, e, i);
      }), nE = he(function(A, e) {
        return ye(A, vA, r, r, r, e);
      });
      function aE(A, e) {
        if (typeof A != "function")
          throw new VA(C);
        return e = e === r ? e : P(e), j(A, e);
      }
      function sE(A, e) {
        if (typeof A != "function")
          throw new VA(C);
        return e = e == null ? 0 : EA(P(e), 0), j(function(i) {
          var a = i[e], o = Ye(i, 0, e);
          return a && Ge(o, a), OA(A, this, o);
        });
      }
      function oE(A, e, i) {
        var a = !0, o = !0;
        if (typeof A != "function")
          throw new VA(C);
        return lA(i) && (a = "leading" in i ? !!i.leading : a, o = "trailing" in i ? !!i.trailing : o), zc(A, e, {
          leading: a,
          maxWait: e,
          trailing: o
        });
      }
      function cE(A) {
        return qc(A, 1);
      }
      function gE(A, e) {
        return On(kn(e), A);
      }
      function dE() {
        if (!arguments.length)
          return [];
        var A = arguments[0];
        return W(A) ? A : [A];
      }
      function lE(A) {
        return ee(A, _);
      }
      function IE(A, e) {
        return e = typeof e == "function" ? e : r, ee(A, _, e);
      }
      function CE(A) {
        return ee(A, u | _);
      }
      function uE(A, e) {
        return e = typeof e == "function" ? e : r, ee(A, u | _, e);
      }
      function BE(A, e) {
        return e == null || Mo(A, e, yA(e));
      }
      function ge(A, e) {
        return A === e || A !== A && e !== e;
      }
      var QE = Pi(Qn), fE = Pi(function(A, e) {
        return A >= e;
      }), Ze = To(/* @__PURE__ */ function() {
        return arguments;
      }()) ? To : function(A) {
        return IA(A) && rA.call(A, "callee") && !Fo.call(A, "callee");
      }, W = h.isArray, EE = oo ? WA(oo) : DB;
      function YA(A) {
        return A != null && tr(A.length) && !be(A);
      }
      function uA(A) {
        return IA(A) && YA(A);
      }
      function pE(A) {
        return A === !0 || A === !1 || IA(A) && SA(A) == K;
      }
      var Je = Su || ta, vE = co ? WA(co) : mB;
      function yE(A) {
        return IA(A) && A.nodeType === 1 && !Vt(A);
      }
      function hE(A) {
        if (A == null)
          return !0;
        if (YA(A) && (W(A) || typeof A == "string" || typeof A.splice == "function" || Je(A) || ft(A) || Ze(A)))
          return !A.length;
        var e = kA(A);
        if (e == MA || e == se)
          return !A.size;
        if (Zt(A))
          return !pn(A).length;
        for (var i in A)
          if (rA.call(A, i))
            return !1;
        return !0;
      }
      function wE(A, e) {
        return zt(A, e);
      }
      function bE(A, e, i) {
        i = typeof i == "function" ? i : r;
        var a = i ? i(A, e) : r;
        return a === r ? zt(A, e, r, i) : !!a;
      }
      function Wn(A) {
        if (!IA(A))
          return !1;
        var e = SA(A);
        return e == GA || e == hA || typeof A.message == "string" && typeof A.name == "string" && !Vt(A);
      }
      function DE(A) {
        return typeof A == "number" && _o(A);
      }
      function be(A) {
        if (!lA(A))
          return !1;
        var e = SA(A);
        return e == wA || e == KA || e == U || e == $I;
      }
      function jc(A) {
        return typeof A == "number" && A == P(A);
      }
      function tr(A) {
        return typeof A == "number" && A > -1 && A % 1 == 0 && A <= Qe;
      }
      function lA(A) {
        var e = typeof A;
        return A != null && (e == "object" || e == "function");
      }
      function IA(A) {
        return A != null && typeof A == "object";
      }
      var Zc = go ? WA(go) : kB;
      function mE(A, e) {
        return A === e || En(A, e, Mn(e));
      }
      function FE(A, e, i) {
        return i = typeof i == "function" ? i : r, En(A, e, Mn(e), i);
      }
      function kE(A) {
        return Xc(A) && A != +A;
      }
      function _E(A) {
        if (lQ(A))
          throw new O(l);
        return qo(A);
      }
      function RE(A) {
        return A === null;
      }
      function GE(A) {
        return A == null;
      }
      function Xc(A) {
        return typeof A == "number" || IA(A) && SA(A) == Te;
      }
      function Vt(A) {
        if (!IA(A) || SA(A) != fe)
          return !1;
        var e = ki(A);
        if (e === null)
          return !0;
        var i = rA.call(e, "constructor") && e.constructor;
        return typeof i == "function" && i instanceof i && bi.call(i) == mu;
      }
      var Pn = lo ? WA(lo) : _B;
      function SE(A) {
        return jc(A) && A >= -9007199254740991 && A <= Qe;
      }
      var Vc = Io ? WA(Io) : RB;
      function ir(A) {
        return typeof A == "string" || !W(A) && IA(A) && SA(A) == Mt;
      }
      function zA(A) {
        return typeof A == "symbol" || IA(A) && SA(A) == Bi;
      }
      var ft = Co ? WA(Co) : GB;
      function NE(A) {
        return A === r;
      }
      function LE(A) {
        return IA(A) && kA(A) == Ut;
      }
      function ME(A) {
        return IA(A) && SA(A) == ZI;
      }
      var UE = Pi(vn), YE = Pi(function(A, e) {
        return A <= e;
      });
      function Ag(A) {
        if (!A)
          return [];
        if (YA(A))
          return ir(A) ? oe(A) : UA(A);
        if (xt && A[xt])
          return uu(A[xt]());
        var e = kA(A), i = e == MA ? on : e == se ? yi : Et;
        return i(A);
      }
      function De(A) {
        if (!A)
          return A === 0 ? A : 0;
        if (A = re(A), A === it || A === -1 / 0) {
          var e = A < 0 ? -1 : 1;
          return e * Nr;
        }
        return A === A ? A : 0;
      }
      function P(A) {
        var e = De(A), i = e % 1;
        return e === e ? i ? e - i : e : 0;
      }
      function eg(A) {
        return A ? Pe(P(A), 0, qA) : 0;
      }
      function re(A) {
        if (typeof A == "number")
          return A;
        if (zA(A))
          return rt;
        if (lA(A)) {
          var e = typeof A.valueOf == "function" ? A.valueOf() : A;
          A = lA(e) ? e + "" : e;
        }
        if (typeof A != "string")
          return A === 0 ? A : +A;
        A = po(A);
        var i = fC.test(A);
        return i || pC.test(A) ? XC(A.slice(2), i ? 2 : 8) : QC.test(A) ? rt : +A;
      }
      function tg(A) {
        return Ce(A, JA(A));
      }
      function JE(A) {
        return A ? Pe(P(A), -9007199254740991, Qe) : A === 0 ? A : 0;
      }
      function iA(A) {
        return A == null ? "" : PA(A);
      }
      var xE = ut(function(A, e) {
        if (Zt(e) || YA(e)) {
          Ce(e, yA(e), A);
          return;
        }
        for (var i in e)
          rA.call(e, i) && Ot(A, i, e[i]);
      }), ig = ut(function(A, e) {
        Ce(e, JA(e), A);
      }), rr = ut(function(A, e, i, a) {
        Ce(e, JA(e), A, a);
      }), HE = ut(function(A, e, i, a) {
        Ce(e, yA(e), A, a);
      }), TE = he(Cn);
      function qE(A, e) {
        var i = Ct(A);
        return e == null ? i : Lo(i, e);
      }
      var KE = j(function(A, e) {
        A = nA(A);
        var i = -1, a = e.length, o = a > 2 ? e[2] : r;
        for (o && NA(e[0], e[1], o) && (a = 1); ++i < a; )
          for (var d = e[i], I = JA(d), Q = -1, y = I.length; ++Q < y; ) {
            var D = I[Q], m = A[D];
            (m === r || ge(m, dt[D]) && !rA.call(A, D)) && (A[D] = d[D]);
          }
        return A;
      }), OE = j(function(A) {
        return A.push(r, pc), OA(rg, r, A);
      });
      function WE(A, e) {
        return Bo(A, H(e, 3), Ie);
      }
      function PE(A, e) {
        return Bo(A, H(e, 3), Bn);
      }
      function zE(A, e) {
        return A == null ? A : un(A, H(e, 3), JA);
      }
      function $E(A, e) {
        return A == null ? A : xo(A, H(e, 3), JA);
      }
      function jE(A, e) {
        return A && Ie(A, H(e, 3));
      }
      function ZE(A, e) {
        return A && Bn(A, H(e, 3));
      }
      function XE(A) {
        return A == null ? [] : Ji(A, yA(A));
      }
      function VE(A) {
        return A == null ? [] : Ji(A, JA(A));
      }
      function zn(A, e, i) {
        var a = A == null ? r : ze(A, e);
        return a === r ? i : a;
      }
      function Ap(A, e) {
        return A != null && hc(A, e, yB);
      }
      function $n(A, e) {
        return A != null && hc(A, e, hB);
      }
      var ep = uc(function(A, e, i) {
        e != null && typeof e.toString != "function" && (e = Di.call(e)), A[e] = i;
      }, Zn(xA)), tp = uc(function(A, e, i) {
        e != null && typeof e.toString != "function" && (e = Di.call(e)), rA.call(A, e) ? A[e].push(i) : A[e] = [i];
      }, H), ip = j(Pt);
      function yA(A) {
        return YA(A) ? So(A) : pn(A);
      }
      function JA(A) {
        return YA(A) ? So(A, !0) : SB(A);
      }
      function rp(A, e) {
        var i = {};
        return e = H(e, 3), Ie(A, function(a, o, d) {
          ve(i, e(a, o, d), a);
        }), i;
      }
      function np(A, e) {
        var i = {};
        return e = H(e, 3), Ie(A, function(a, o, d) {
          ve(i, o, e(a, o, d));
        }), i;
      }
      var ap = ut(function(A, e, i) {
        xi(A, e, i);
      }), rg = ut(function(A, e, i, a) {
        xi(A, e, i, a);
      }), sp = he(function(A, e) {
        var i = {};
        if (A == null)
          return i;
        var a = !1;
        e = gA(e, function(d) {
          return d = Ue(d, A), a || (a = d.length > 1), d;
        }), Ce(A, Nn(A), i), a && (i = ee(i, u | w | _, AQ));
        for (var o = e.length; o--; )
          Dn(i, e[o]);
        return i;
      });
      function op(A, e) {
        return ng(A, er(H(e)));
      }
      var cp = he(function(A, e) {
        return A == null ? {} : LB(A, e);
      });
      function ng(A, e) {
        if (A == null)
          return {};
        var i = gA(Nn(A), function(a) {
          return [a];
        });
        return e = H(e), jo(A, i, function(a, o) {
          return e(a, o[0]);
        });
      }
      function gp(A, e, i) {
        e = Ue(e, A);
        var a = -1, o = e.length;
        for (o || (o = 1, A = r); ++a < o; ) {
          var d = A == null ? r : A[ue(e[a])];
          d === r && (a = o, d = i), A = be(d) ? d.call(A) : d;
        }
        return A;
      }
      function dp(A, e, i) {
        return A == null ? A : $t(A, e, i);
      }
      function lp(A, e, i, a) {
        return a = typeof a == "function" ? a : r, A == null ? A : $t(A, e, i, a);
      }
      var ag = fc(yA), sg = fc(JA);
      function Ip(A, e, i) {
        var a = W(A), o = a || Je(A) || ft(A);
        if (e = H(e, 4), i == null) {
          var d = A && A.constructor;
          o ? i = a ? new d() : [] : lA(A) ? i = be(d) ? Ct(ki(A)) : {} : i = {};
        }
        return (o ? XA : Ie)(A, function(I, Q, y) {
          return e(i, I, Q, y);
        }), i;
      }
      function Cp(A, e) {
        return A == null ? !0 : Dn(A, e);
      }
      function up(A, e, i) {
        return A == null ? A : ec(A, e, kn(i));
      }
      function Bp(A, e, i, a) {
        return a = typeof a == "function" ? a : r, A == null ? A : ec(A, e, kn(i), a);
      }
      function Et(A) {
        return A == null ? [] : sn(A, yA(A));
      }
      function Qp(A) {
        return A == null ? [] : sn(A, JA(A));
      }
      function fp(A, e, i) {
        return i === r && (i = e, e = r), i !== r && (i = re(i), i = i === i ? i : 0), e !== r && (e = re(e), e = e === e ? e : 0), Pe(re(A), e, i);
      }
      function Ep(A, e, i) {
        return e = De(e), i === r ? (i = e, e = 0) : i = De(i), A = re(A), wB(A, e, i);
      }
      function pp(A, e, i) {
        if (i && typeof i != "boolean" && NA(A, e, i) && (e = i = r), i === r && (typeof e == "boolean" ? (i = e, e = r) : typeof A == "boolean" && (i = A, A = r)), A === r && e === r ? (A = 0, e = 1) : (A = De(A), e === r ? (e = A, A = 0) : e = De(e)), A > e) {
          var a = A;
          A = e, e = a;
        }
        if (i || A % 1 || e % 1) {
          var o = Ro();
          return FA(A + o * (e - A + ZC("1e-" + ((o + "").length - 1))), e);
        }
        return hn(A, e);
      }
      var vp = Bt(function(A, e, i) {
        return e = e.toLowerCase(), A + (i ? og(e) : e);
      });
      function og(A) {
        return jn(iA(A).toLowerCase());
      }
      function cg(A) {
        return A = iA(A), A && A.replace(yC, gu).replace(HC, "");
      }
      function yp(A, e, i) {
        A = iA(A), e = PA(e);
        var a = A.length;
        i = i === r ? a : Pe(P(i), 0, a);
        var o = i;
        return i -= e.length, i >= 0 && A.slice(i, o) == e;
      }
      function hp(A) {
        return A = iA(A), A && tC.test(A) ? A.replace(Js, du) : A;
      }
      function wp(A) {
        return A = iA(A), A && oC.test(A) ? A.replace(Kr, "\\$&") : A;
      }
      var bp = Bt(function(A, e, i) {
        return A + (i ? "-" : "") + e.toLowerCase();
      }), Dp = Bt(function(A, e, i) {
        return A + (i ? " " : "") + e.toLowerCase();
      }), mp = lc("toLowerCase");
      function Fp(A, e, i) {
        A = iA(A), e = P(e);
        var a = e ? ct(A) : 0;
        if (!e || a >= e)
          return A;
        var o = (e - a) / 2;
        return Wi(Si(o), i) + A + Wi(Gi(o), i);
      }
      function kp(A, e, i) {
        A = iA(A), e = P(e);
        var a = e ? ct(A) : 0;
        return e && a < e ? A + Wi(e - a, i) : A;
      }
      function _p(A, e, i) {
        A = iA(A), e = P(e);
        var a = e ? ct(A) : 0;
        return e && a < e ? Wi(e - a, i) + A : A;
      }
      function Rp(A, e, i) {
        return i || e == null ? e = 0 : e && (e = +e), Uu(iA(A).replace(Or, ""), e || 0);
      }
      function Gp(A, e, i) {
        return (i ? NA(A, e, i) : e === r) ? e = 1 : e = P(e), wn(iA(A), e);
      }
      function Sp() {
        var A = arguments, e = iA(A[0]);
        return A.length < 3 ? e : e.replace(A[1], A[2]);
      }
      var Np = Bt(function(A, e, i) {
        return A + (i ? "_" : "") + e.toLowerCase();
      });
      function Lp(A, e, i) {
        return i && typeof i != "number" && NA(A, e, i) && (e = i = r), i = i === r ? qA : i >>> 0, i ? (A = iA(A), A && (typeof e == "string" || e != null && !Pn(e)) && (e = PA(e), !e && ot(A)) ? Ye(oe(A), 0, i) : A.split(e, i)) : [];
      }
      var Mp = Bt(function(A, e, i) {
        return A + (i ? " " : "") + jn(e);
      });
      function Up(A, e, i) {
        return A = iA(A), i = i == null ? 0 : Pe(P(i), 0, A.length), e = PA(e), A.slice(i, i + e.length) == e;
      }
      function Yp(A, e, i) {
        var a = c.templateSettings;
        i && NA(A, e, i) && (e = r), A = iA(A), e = rr({}, e, a, Ec);
        var o = rr({}, e.imports, a.imports, Ec), d = yA(o), I = sn(o, d), Q, y, D = 0, m = e.interpolate || Qi, F = "__p += '", G = cn(
          (e.escape || Qi).source + "|" + m.source + "|" + (m === xs ? BC : Qi).source + "|" + (e.evaluate || Qi).source + "|$",
          "g"
        ), J = "//# sourceURL=" + (rA.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++WC + "]") + `
`;
        A.replace(G, function(q, Z, V, $A, LA, jA) {
          return V || (V = $A), F += A.slice(D, jA).replace(hC, lu), Z && (Q = !0, F += `' +
__e(` + Z + `) +
'`), LA && (y = !0, F += `';
` + LA + `;
__p += '`), V && (F += `' +
((__t = (` + V + `)) == null ? '' : __t) +
'`), D = jA + q.length, q;
        }), F += `';
`;
        var T = rA.call(e, "variable") && e.variable;
        if (!T)
          F = `with (obj) {
` + F + `
}
`;
        else if (CC.test(T))
          throw new O(B);
        F = (y ? F.replace(XI, "") : F).replace(VI, "$1").replace(AC, "$1;"), F = "function(" + (T || "obj") + `) {
` + (T ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Q ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
        var $ = dg(function() {
          return tA(d, J + "return " + F).apply(r, I);
        });
        if ($.source = F, Wn($))
          throw $;
        return $;
      }
      function Jp(A) {
        return iA(A).toLowerCase();
      }
      function xp(A) {
        return iA(A).toUpperCase();
      }
      function Hp(A, e, i) {
        if (A = iA(A), A && (i || e === r))
          return po(A);
        if (!A || !(e = PA(e)))
          return A;
        var a = oe(A), o = oe(e), d = vo(a, o), I = yo(a, o) + 1;
        return Ye(a, d, I).join("");
      }
      function Tp(A, e, i) {
        if (A = iA(A), A && (i || e === r))
          return A.slice(0, wo(A) + 1);
        if (!A || !(e = PA(e)))
          return A;
        var a = oe(A), o = yo(a, oe(e)) + 1;
        return Ye(a, 0, o).join("");
      }
      function qp(A, e, i) {
        if (A = iA(A), A && (i || e === r))
          return A.replace(Or, "");
        if (!A || !(e = PA(e)))
          return A;
        var a = oe(A), o = vo(a, oe(e));
        return Ye(a, o).join("");
      }
      function Kp(A, e) {
        var i = Ii, a = _r;
        if (lA(e)) {
          var o = "separator" in e ? e.separator : o;
          i = "length" in e ? P(e.length) : i, a = "omission" in e ? PA(e.omission) : a;
        }
        A = iA(A);
        var d = A.length;
        if (ot(A)) {
          var I = oe(A);
          d = I.length;
        }
        if (i >= d)
          return A;
        var Q = i - ct(a);
        if (Q < 1)
          return a;
        var y = I ? Ye(I, 0, Q).join("") : A.slice(0, Q);
        if (o === r)
          return y + a;
        if (I && (Q += y.length - Q), Pn(o)) {
          if (A.slice(Q).search(o)) {
            var D, m = y;
            for (o.global || (o = cn(o.source, iA(Hs.exec(o)) + "g")), o.lastIndex = 0; D = o.exec(m); )
              var F = D.index;
            y = y.slice(0, F === r ? Q : F);
          }
        } else if (A.indexOf(PA(o), Q) != Q) {
          var G = y.lastIndexOf(o);
          G > -1 && (y = y.slice(0, G));
        }
        return y + a;
      }
      function Op(A) {
        return A = iA(A), A && eC.test(A) ? A.replace(Ys, Eu) : A;
      }
      var Wp = Bt(function(A, e, i) {
        return A + (i ? " " : "") + e.toUpperCase();
      }), jn = lc("toUpperCase");
      function gg(A, e, i) {
        return A = iA(A), e = i ? r : e, e === r ? Cu(A) ? yu(A) : nu(A) : A.match(e) || [];
      }
      var dg = j(function(A, e) {
        try {
          return OA(A, r, e);
        } catch (i) {
          return Wn(i) ? i : new O(i);
        }
      }), Pp = he(function(A, e) {
        return XA(e, function(i) {
          i = ue(i), ve(A, i, Kn(A[i], A));
        }), A;
      });
      function zp(A) {
        var e = A == null ? 0 : A.length, i = H();
        return A = e ? gA(A, function(a) {
          if (typeof a[1] != "function")
            throw new VA(C);
          return [i(a[0]), a[1]];
        }) : [], j(function(a) {
          for (var o = -1; ++o < e; ) {
            var d = A[o];
            if (OA(d[0], this, a))
              return OA(d[1], this, a);
          }
        });
      }
      function $p(A) {
        return EB(ee(A, u));
      }
      function Zn(A) {
        return function() {
          return A;
        };
      }
      function jp(A, e) {
        return A == null || A !== A ? e : A;
      }
      var Zp = Cc(), Xp = Cc(!0);
      function xA(A) {
        return A;
      }
      function Xn(A) {
        return Ko(typeof A == "function" ? A : ee(A, u));
      }
      function Vp(A) {
        return Wo(ee(A, u));
      }
      function Av(A, e) {
        return Po(A, ee(e, u));
      }
      var ev = j(function(A, e) {
        return function(i) {
          return Pt(i, A, e);
        };
      }), tv = j(function(A, e) {
        return function(i) {
          return Pt(A, i, e);
        };
      });
      function Vn(A, e, i) {
        var a = yA(e), o = Ji(e, a);
        i == null && !(lA(e) && (o.length || !a.length)) && (i = e, e = A, A = this, o = Ji(e, yA(e)));
        var d = !(lA(i) && "chain" in i) || !!i.chain, I = be(A);
        return XA(o, function(Q) {
          var y = e[Q];
          A[Q] = y, I && (A.prototype[Q] = function() {
            var D = this.__chain__;
            if (d || D) {
              var m = A(this.__wrapped__), F = m.__actions__ = UA(this.__actions__);
              return F.push({ func: y, args: arguments, thisArg: A }), m.__chain__ = D, m;
            }
            return y.apply(A, Ge([this.value()], arguments));
          });
        }), A;
      }
      function iv() {
        return bA._ === this && (bA._ = Fu), this;
      }
      function Aa() {
      }
      function rv(A) {
        return A = P(A), j(function(e) {
          return zo(e, A);
        });
      }
      var nv = Rn(gA), av = Rn(uo), sv = Rn(en);
      function lg(A) {
        return Yn(A) ? tn(ue(A)) : MB(A);
      }
      function ov(A) {
        return function(e) {
          return A == null ? r : ze(A, e);
        };
      }
      var cv = Bc(), gv = Bc(!0);
      function ea() {
        return [];
      }
      function ta() {
        return !1;
      }
      function dv() {
        return {};
      }
      function lv() {
        return "";
      }
      function Iv() {
        return !0;
      }
      function Cv(A, e) {
        if (A = P(A), A < 1 || A > Qe)
          return [];
        var i = qA, a = FA(A, qA);
        e = H(e), A -= qA;
        for (var o = an(a, e); ++i < A; )
          e(i);
        return o;
      }
      function uv(A) {
        return W(A) ? gA(A, ue) : zA(A) ? [A] : UA(Gc(iA(A)));
      }
      function Bv(A) {
        var e = ++Du;
        return iA(A) + e;
      }
      var Qv = Oi(function(A, e) {
        return A + e;
      }, 0), fv = Gn("ceil"), Ev = Oi(function(A, e) {
        return A / e;
      }, 1), pv = Gn("floor");
      function vv(A) {
        return A && A.length ? Yi(A, xA, Qn) : r;
      }
      function yv(A, e) {
        return A && A.length ? Yi(A, H(e, 2), Qn) : r;
      }
      function hv(A) {
        return fo(A, xA);
      }
      function wv(A, e) {
        return fo(A, H(e, 2));
      }
      function bv(A) {
        return A && A.length ? Yi(A, xA, vn) : r;
      }
      function Dv(A, e) {
        return A && A.length ? Yi(A, H(e, 2), vn) : r;
      }
      var mv = Oi(function(A, e) {
        return A * e;
      }, 1), Fv = Gn("round"), kv = Oi(function(A, e) {
        return A - e;
      }, 0);
      function _v(A) {
        return A && A.length ? nn(A, xA) : 0;
      }
      function Rv(A, e) {
        return A && A.length ? nn(A, H(e, 2)) : 0;
      }
      return c.after = Vf, c.ary = qc, c.assign = xE, c.assignIn = ig, c.assignInWith = rr, c.assignWith = HE, c.at = TE, c.before = Kc, c.bind = Kn, c.bindAll = Pp, c.bindKey = Oc, c.castArray = dE, c.chain = xc, c.chunk = EQ, c.compact = pQ, c.concat = vQ, c.cond = zp, c.conforms = $p, c.constant = Zn, c.countBy = _f, c.create = qE, c.curry = Wc, c.curryRight = Pc, c.debounce = zc, c.defaults = KE, c.defaultsDeep = OE, c.defer = AE, c.delay = eE, c.difference = yQ, c.differenceBy = hQ, c.differenceWith = wQ, c.drop = bQ, c.dropRight = DQ, c.dropRightWhile = mQ, c.dropWhile = FQ, c.fill = kQ, c.filter = Gf, c.flatMap = Lf, c.flatMapDeep = Mf, c.flatMapDepth = Uf, c.flatten = Mc, c.flattenDeep = _Q, c.flattenDepth = RQ, c.flip = tE, c.flow = Zp, c.flowRight = Xp, c.fromPairs = GQ, c.functions = XE, c.functionsIn = VE, c.groupBy = Yf, c.initial = NQ, c.intersection = LQ, c.intersectionBy = MQ, c.intersectionWith = UQ, c.invert = ep, c.invertBy = tp, c.invokeMap = xf, c.iteratee = Xn, c.keyBy = Hf, c.keys = yA, c.keysIn = JA, c.map = Xi, c.mapKeys = rp, c.mapValues = np, c.matches = Vp, c.matchesProperty = Av, c.memoize = Ar, c.merge = ap, c.mergeWith = rg, c.method = ev, c.methodOf = tv, c.mixin = Vn, c.negate = er, c.nthArg = rv, c.omit = sp, c.omitBy = op, c.once = iE, c.orderBy = Tf, c.over = nv, c.overArgs = rE, c.overEvery = av, c.overSome = sv, c.partial = On, c.partialRight = $c, c.partition = qf, c.pick = cp, c.pickBy = ng, c.property = lg, c.propertyOf = ov, c.pull = HQ, c.pullAll = Yc, c.pullAllBy = TQ, c.pullAllWith = qQ, c.pullAt = KQ, c.range = cv, c.rangeRight = gv, c.rearg = nE, c.reject = Wf, c.remove = OQ, c.rest = aE, c.reverse = Tn, c.sampleSize = zf, c.set = dp, c.setWith = lp, c.shuffle = $f, c.slice = WQ, c.sortBy = Xf, c.sortedUniq = VQ, c.sortedUniqBy = Af, c.split = Lp, c.spread = sE, c.tail = ef, c.take = tf, c.takeRight = rf, c.takeRightWhile = nf, c.takeWhile = af, c.tap = vf, c.throttle = oE, c.thru = Zi, c.toArray = Ag, c.toPairs = ag, c.toPairsIn = sg, c.toPath = uv, c.toPlainObject = tg, c.transform = Ip, c.unary = cE, c.union = sf, c.unionBy = of, c.unionWith = cf, c.uniq = gf, c.uniqBy = df, c.uniqWith = lf, c.unset = Cp, c.unzip = qn, c.unzipWith = Jc, c.update = up, c.updateWith = Bp, c.values = Et, c.valuesIn = Qp, c.without = If, c.words = gg, c.wrap = gE, c.xor = Cf, c.xorBy = uf, c.xorWith = Bf, c.zip = Qf, c.zipObject = ff, c.zipObjectDeep = Ef, c.zipWith = pf, c.entries = ag, c.entriesIn = sg, c.extend = ig, c.extendWith = rr, Vn(c, c), c.add = Qv, c.attempt = dg, c.camelCase = vp, c.capitalize = og, c.ceil = fv, c.clamp = fp, c.clone = lE, c.cloneDeep = CE, c.cloneDeepWith = uE, c.cloneWith = IE, c.conformsTo = BE, c.deburr = cg, c.defaultTo = jp, c.divide = Ev, c.endsWith = yp, c.eq = ge, c.escape = hp, c.escapeRegExp = wp, c.every = Rf, c.find = Sf, c.findIndex = Nc, c.findKey = WE, c.findLast = Nf, c.findLastIndex = Lc, c.findLastKey = PE, c.floor = pv, c.forEach = Hc, c.forEachRight = Tc, c.forIn = zE, c.forInRight = $E, c.forOwn = jE, c.forOwnRight = ZE, c.get = zn, c.gt = QE, c.gte = fE, c.has = Ap, c.hasIn = $n, c.head = Uc, c.identity = xA, c.includes = Jf, c.indexOf = SQ, c.inRange = Ep, c.invoke = ip, c.isArguments = Ze, c.isArray = W, c.isArrayBuffer = EE, c.isArrayLike = YA, c.isArrayLikeObject = uA, c.isBoolean = pE, c.isBuffer = Je, c.isDate = vE, c.isElement = yE, c.isEmpty = hE, c.isEqual = wE, c.isEqualWith = bE, c.isError = Wn, c.isFinite = DE, c.isFunction = be, c.isInteger = jc, c.isLength = tr, c.isMap = Zc, c.isMatch = mE, c.isMatchWith = FE, c.isNaN = kE, c.isNative = _E, c.isNil = GE, c.isNull = RE, c.isNumber = Xc, c.isObject = lA, c.isObjectLike = IA, c.isPlainObject = Vt, c.isRegExp = Pn, c.isSafeInteger = SE, c.isSet = Vc, c.isString = ir, c.isSymbol = zA, c.isTypedArray = ft, c.isUndefined = NE, c.isWeakMap = LE, c.isWeakSet = ME, c.join = YQ, c.kebabCase = bp, c.last = ie, c.lastIndexOf = JQ, c.lowerCase = Dp, c.lowerFirst = mp, c.lt = UE, c.lte = YE, c.max = vv, c.maxBy = yv, c.mean = hv, c.meanBy = wv, c.min = bv, c.minBy = Dv, c.stubArray = ea, c.stubFalse = ta, c.stubObject = dv, c.stubString = lv, c.stubTrue = Iv, c.multiply = mv, c.nth = xQ, c.noConflict = iv, c.noop = Aa, c.now = Vi, c.pad = Fp, c.padEnd = kp, c.padStart = _p, c.parseInt = Rp, c.random = pp, c.reduce = Kf, c.reduceRight = Of, c.repeat = Gp, c.replace = Sp, c.result = gp, c.round = Fv, c.runInContext = v, c.sample = Pf, c.size = jf, c.snakeCase = Np, c.some = Zf, c.sortedIndex = PQ, c.sortedIndexBy = zQ, c.sortedIndexOf = $Q, c.sortedLastIndex = jQ, c.sortedLastIndexBy = ZQ, c.sortedLastIndexOf = XQ, c.startCase = Mp, c.startsWith = Up, c.subtract = kv, c.sum = _v, c.sumBy = Rv, c.template = Yp, c.times = Cv, c.toFinite = De, c.toInteger = P, c.toLength = eg, c.toLower = Jp, c.toNumber = re, c.toSafeInteger = JE, c.toString = iA, c.toUpper = xp, c.trim = Hp, c.trimEnd = Tp, c.trimStart = qp, c.truncate = Kp, c.unescape = Op, c.uniqueId = Bv, c.upperCase = Wp, c.upperFirst = jn, c.each = Hc, c.eachRight = Tc, c.first = Uc, Vn(c, function() {
        var A = {};
        return Ie(c, function(e, i) {
          rA.call(c.prototype, i) || (A[i] = e);
        }), A;
      }(), { chain: !1 }), c.VERSION = s, XA(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(A) {
        c[A].placeholder = c;
      }), XA(["drop", "take"], function(A, e) {
        X.prototype[A] = function(i) {
          i = i === r ? 1 : EA(P(i), 0);
          var a = this.__filtered__ && !e ? new X(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = FA(i, a.__takeCount__) : a.__views__.push({
            size: FA(i, qA),
            type: A + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, X.prototype[A + "Right"] = function(i) {
          return this.reverse()[A](i).reverse();
        };
      }), XA(["filter", "map", "takeWhile"], function(A, e) {
        var i = e + 1, a = i == Nt || i == Sr;
        X.prototype[A] = function(o) {
          var d = this.clone();
          return d.__iteratees__.push({
            iteratee: H(o, 3),
            type: i
          }), d.__filtered__ = d.__filtered__ || a, d;
        };
      }), XA(["head", "last"], function(A, e) {
        var i = "take" + (e ? "Right" : "");
        X.prototype[A] = function() {
          return this[i](1).value()[0];
        };
      }), XA(["initial", "tail"], function(A, e) {
        var i = "drop" + (e ? "" : "Right");
        X.prototype[A] = function() {
          return this.__filtered__ ? new X(this) : this[i](1);
        };
      }), X.prototype.compact = function() {
        return this.filter(xA);
      }, X.prototype.find = function(A) {
        return this.filter(A).head();
      }, X.prototype.findLast = function(A) {
        return this.reverse().find(A);
      }, X.prototype.invokeMap = j(function(A, e) {
        return typeof A == "function" ? new X(this) : this.map(function(i) {
          return Pt(i, A, e);
        });
      }), X.prototype.reject = function(A) {
        return this.filter(er(H(A)));
      }, X.prototype.slice = function(A, e) {
        A = P(A);
        var i = this;
        return i.__filtered__ && (A > 0 || e < 0) ? new X(i) : (A < 0 ? i = i.takeRight(-A) : A && (i = i.drop(A)), e !== r && (e = P(e), i = e < 0 ? i.dropRight(-e) : i.take(e - A)), i);
      }, X.prototype.takeRightWhile = function(A) {
        return this.reverse().takeWhile(A).reverse();
      }, X.prototype.toArray = function() {
        return this.take(qA);
      }, Ie(X.prototype, function(A, e) {
        var i = /^(?:filter|find|map|reject)|While$/.test(e), a = /^(?:head|last)$/.test(e), o = c[a ? "take" + (e == "last" ? "Right" : "") : e], d = a || /^find/.test(e);
        o && (c.prototype[e] = function() {
          var I = this.__wrapped__, Q = a ? [1] : arguments, y = I instanceof X, D = Q[0], m = y || W(I), F = function(Z) {
            var V = o.apply(c, Ge([Z], Q));
            return a && G ? V[0] : V;
          };
          m && i && typeof D == "function" && D.length != 1 && (y = m = !1);
          var G = this.__chain__, J = !!this.__actions__.length, T = d && !G, $ = y && !J;
          if (!d && m) {
            I = $ ? I : new X(this);
            var q = A.apply(I, Q);
            return q.__actions__.push({ func: Zi, args: [F], thisArg: r }), new Ae(q, G);
          }
          return T && $ ? A.apply(this, Q) : (q = this.thru(F), T ? a ? q.value()[0] : q.value() : q);
        });
      }), XA(["pop", "push", "shift", "sort", "splice", "unshift"], function(A) {
        var e = hi[A], i = /^(?:push|sort|unshift)$/.test(A) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(A);
        c.prototype[A] = function() {
          var o = arguments;
          if (a && !this.__chain__) {
            var d = this.value();
            return e.apply(W(d) ? d : [], o);
          }
          return this[i](function(I) {
            return e.apply(W(I) ? I : [], o);
          });
        };
      }), Ie(X.prototype, function(A, e) {
        var i = c[e];
        if (i) {
          var a = i.name + "";
          rA.call(It, a) || (It[a] = []), It[a].push({ name: e, func: i });
        }
      }), It[Ki(r, M).name] = [{
        name: "wrapper",
        func: r
      }], X.prototype.clone = Ku, X.prototype.reverse = Ou, X.prototype.value = Wu, c.prototype.at = yf, c.prototype.chain = hf, c.prototype.commit = wf, c.prototype.next = bf, c.prototype.plant = mf, c.prototype.reverse = Ff, c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = kf, c.prototype.first = c.prototype.head, xt && (c.prototype[xt] = Df), c;
    }, gt = hu();
    qe ? ((qe.exports = gt)._ = gt, Zr._ = gt) : bA._ = gt;
  }).call(ke);
})(vt, vt.exports);
var Ve = { exports: {} };
(function(t, n) {
  var r = typeof Reflect < "u" ? Reflect.construct : void 0, s = Object.defineProperty, g = Error.captureStackTrace;
  g === void 0 && (g = function(p) {
    var E = new Error();
    s(p, "stack", {
      configurable: !0,
      get: function() {
        var w = E.stack;
        return s(this, "stack", {
          configurable: !0,
          value: w,
          writable: !0
        }), w;
      },
      set: function(w) {
        s(p, "stack", {
          configurable: !0,
          value: w,
          writable: !0
        });
      }
    });
  });
  function l(f) {
    f !== void 0 && s(this, "message", {
      configurable: !0,
      value: f,
      writable: !0
    });
    var p = this.constructor.name;
    p !== void 0 && p !== this.name && s(this, "name", {
      configurable: !0,
      value: p,
      writable: !0
    }), g(this, this.constructor);
  }
  l.prototype = Object.create(Error.prototype, {
    // See: https://github.com/JsCommunity/make-error/issues/4
    constructor: {
      configurable: !0,
      value: l,
      writable: !0
    }
  });
  var C = function() {
    function f(E, u) {
      return s(E, "name", {
        configurable: !0,
        value: u
      });
    }
    try {
      var p = function() {
      };
      if (f(p, "foo"), p.name === "foo")
        return f;
    } catch {
    }
  }();
  function B(f, p) {
    if (p == null || p === Error)
      p = l;
    else if (typeof p != "function")
      throw new TypeError("super_ should be a function");
    var E;
    if (typeof f == "string")
      E = f, f = r !== void 0 ? function() {
        return r(p, arguments, this.constructor);
      } : function() {
        p.apply(this, arguments);
      }, C !== void 0 && (C(f, E), E = void 0);
    else if (typeof f != "function")
      throw new TypeError("constructor should be either a string or a function");
    f.super_ = f.super = p;
    var u = {
      constructor: {
        configurable: !0,
        value: f,
        writable: !0
      }
    };
    return E !== void 0 && (u.name = {
      configurable: !0,
      value: E,
      writable: !0
    }), f.prototype = Object.create(p.prototype, u), f;
  }
  n = t.exports = B, n.BaseError = l;
})(Ve, Ve.exports);
class Lv extends Ve.exports.BaseError {
  constructor() {
    super("The browser you are using isn't compatible with this application, or HTTPS is not being used on a non-localhost domain.");
  }
}
class Mv extends Ve.exports.BaseError {
  constructor(n, r, s) {
    super(`Could not fetch web worker from ${n}`), this.url = n, this.response = r, this.originalError = s ?? null;
  }
}
class vl extends Ve.exports.BaseError {
  constructor() {
    super("Invalid input passed");
  }
}
class yl extends Ve.exports.BaseError {
  constructor(n) {
    super("Invalid mime type found on asset"), this.mimeType = n;
  }
}
class ug extends Ve.exports.BaseError {
  constructor(n, r, s) {
    super(`Could not fetch resource from ${n}`), this.url = n, this.response = r, this.originalError = s ?? null;
  }
}
const Uv = [
  "ArrayBuffer",
  "File",
  "FileReader",
  "SubtleCrypto",
  "Uint8Array",
  "WebAssembly",
  "fetch"
];
function Yv() {
  return Uv.every((t) => t in self);
}
function Jv() {
  if (!Yv())
    throw new Lv();
}
function _A(t, n, r, s) {
  if (typeof n == "function" ? t !== n || !s : !n.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? s : r === "a" ? s.call(t) : s ? s.value : n.get(t);
}
function ii(t, n, r, s, g) {
  if (typeof n == "function" ? t !== n || !0 : !n.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n.set(t, r), r;
}
function xv(t, n, r, s) {
  function g(E, u, w) {
    var _ = w ? WebAssembly.compileStreaming : WebAssembly.compile;
    return _(E);
  }
  var l = null, C = typeof process < "u" && process.versions != null && process.versions.node != null;
  if (C)
    l = Buffer.from(r, "base64");
  else {
    var B = globalThis.atob(r), f = B.length;
    l = new Uint8Array(new ArrayBuffer(f));
    for (var p = 0; p < f; p++)
      l[p] = B.charCodeAt(p);
  }
  return g(l, s, !1);
}
function Hv(t) {
  return xv(0, null, "AGFzbQEAAAAB0gEfYAJ/fwF/YAN/f38Bf2ACf38AYAN/f38AYAF/AGABbwF/YAF/AX9gBH9/f38AYAAAYAJ/bwBgBX9/f39/AGAGf39/f39/AGAFf39/f38Bf2ACf38Bb2AAAW9gAW8Bb2AGf39/f39/AX9gAm9/AW9gA29vfwBgAm9vAX9gCX9/f39/f35+fgBgB39/f39/f38Bf2ADfn9/AX9gAAF/YAR/f39/AX9gBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACjQYXA3diZx5fX3diZ19pc0FycmF5XzI3YzQ2YzY3ZjQ5OGUxNWQABQN3YmcdX193YmdfbGVuZ3RoXzZlM2JiZTdjOGJkNGRiZDgABQN3YmcaX193YmdfZ2V0XzU3MjQ1Y2M3ZDdjNzYxOWQAEQN3YmckX193YmdfaXNTYWZlSW50ZWdlcl9kZmEwNTkzZThkN2FjMzVhAAUDd2JnFV9fd2JpbmRnZW5fc3RyaW5nX25ldwANA3diZxpfX3diZ19uZXdfYWJkYTc2ZTg4M2JhOGE1ZgAOA3diZxxfX3diZ19zdGFja182NTgyNzlmZTQ0NTQxY2Y2AAkDd2JnHF9fd2JnX2Vycm9yX2Y4NTE2NjdhZjcxYmNmYzYAAgN3YmcdX193YmdfbGVuZ3RoXzllMWFlMTkwMGNiMGZiZDUABQN3YmcRX193YmluZGdlbl9tZW1vcnkADgN3YmcdX193YmdfYnVmZmVyXzNmM2Q3NjRkNDc0N2Q1NjQADwN3YmcaX193YmdfbmV3XzhjM2YwMDUyMjcyYTQ1N2EADwN3YmcaX193Ymdfc2V0XzgzZGI5NjkwZjkzNTNlNzkAEgN3YmcUX193YmluZGdlbl9lcnJvcl9uZXcADQN3YmcZX193YmluZGdlbl9qc3ZhbF9sb29zZV9lcQATA3diZxZfX3diaW5kZ2VuX2Jvb2xlYW5fZ2V0AAUDd2JnFV9fd2JpbmRnZW5fc3RyaW5nX2dldAAJA3diZxVfX3diaW5kZ2VuX251bWJlcl9nZXQACQN3YmcsX193YmdfaW5zdGFuY2VvZl9VaW50OEFycmF5Xzk3MWVlZGE2OWViNzUwMDMABQN3YmctX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl9lNWU0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IANBADYCDAJ/AkACQAJAIAIoAhAiCkUEQCACKAIMIgBFDQEgAigCCCEBIABBA3QhBSAAQQFrQf////8BcUEBaiEHIAIoAgAhAANAIABBBGooAgAiBARAIAMoAiAgACgCACAEIAMoAiQoAgwRAQANBAsgASgCACADQQxqIAEoAgQRAAANAyABQQhqIQEgAEEIaiEAIAVBCGsiBQ0ACwwBCyACKAIUIgBFDQAgAEEFdCELIABBAWtB////P3FBAWohByACKAIIIQggAigCACEAA0AgAEEEaigCACIBBEAgAygCICAAKAIAIAEgAygCJCgCDBEBAA0DCyADIAUgCmoiAUEQaigCADYCHCADIAFBHGotAAA6ACwgAyABQRhqKAIANgIoIAFBDGooAgAhBEEAIQlBACEGAkACQAJAIAFBCGooAgBBAWsOAgACAQsgBEEDdCAIaiIMKAIEDQEgDCgCACEEC0EBIQYLIAMgBDYCECADIAY2AgwgAUEEaigCACEEAkACQAJAIAEoAgBBAWsOAgACAQsgBEEDdCAIaiIGKAIEDQEgBigCACEEC0EBIQkLIAMgBDYCGCADIAk2AhQgCCABQRRqKAIAQQN0aiIBKAIAIANBDGogASgCBBEAAA0CIABBCGohACALIAVBIGoiBUcNAAsLIAcgAigCBE8NASADKAIgIAIoAgAgB0EDdGoiACgCACAAKAIEIAMoAiQoAgwRAQBFDQELQQEMAQtBAAsgA0EwaiQAC7gEAQl/IwBBEGsiBCQAAkACQAJ/AkAgACgCAARAIAAoAgQhBiAEIAEoAgwiAzYCDCAEIAEoAggiAjYCCCAEIAEoAgQiBTYCBCAEIAEoAgAiATYCACAALQAgIQkgACgCECEKIAAtABxBCHENASAKIQggCQwCCyAAKAIUIAAoAhggARAlIQIMAwsgACgCFCABIAUgACgCGCgCDBEBAA0BIABBAToAIEEwIQggAEEwNgIQIARCATcCACAGIAVrIQFBACEFIAFBACABIAZNGyEGQQELIQcgAwRAIANBDGwhAwNAAn8CQAJAAkAgAi8BAEEBaw4CAgEACyACKAIEDAILIAIoAggMAQsgAi8BAiIBQegHTwRAQQRBBSABQZDOAEkbDAELQQEgAUEKSQ0AGkECQQMgAUHkAEkbCyACQQxqIQIgBWohBSADQQxrIgMN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FCABKAIUIAEoAhggAkEMahAiIAAQaiACQUBrJAALjwECA38BfiMAQSBrIgIkACABKAIAQYCAgIB4RgRAIAEoAgwhAyACQRxqIgRBADYCACACQoCAgIAQNwIUIAJBFGpBkLfAACADECIaIAJBEGogBCgCACIDNgIAIAIgAikCFCIFNwMIIAFBCGogAzYCACABIAU3AgALIABByLnAADYCBCAAIAE2AgAgAkEgaiQAC3kBAn8jAEEQayICJAAgAAJ/IAFFBEAgAEKAgICAEDcCBEEADAELIAFBAEgEQCAAQQA2AgRBAQwBCyACQQhqIAEQaCACKAIIIgMEQCAAIAM2AgggACABNgIEQQAMAQsgACABNgIIIABBATYCBEEBCzYCACACQRBqJAALewEBfyMAQUBqIgUkACAFIAE2AgwgBSAANgIIIAUgAzYCFCAFIAI2AhAgBUECNgIcIAVB6JjAADYCGCAFQgI3AiQgBSAFQRBqrUKAgICAwAGENwM4IAUgBUEIaq1CgICAgKABhDcDMCAFIAVBMGo2AiAgBUEYaiAEEFUAC3gBAn8jAEEQayIDJAACQCACIAFrIgQgACgCACAAKAIIIgJrSwRAIANBCGogACACIAQQOyADKAIIIgJBgYCAgHhHDQEgACgCCCECCyAAKAIEIAJqIAEgBBCMARogACACIARqNgIIIANBEGokAA8LIAIgAygCDBB4AAuVAQEDfwJAIABBJE8EQCAA0G8mARBiQfC/wAAoAgAhA0H0v8AAKAIAIQFB8L/AAEIANwIAQey/wAAoAgAhAkHsv8AAQQA2AgAgACABSQ0BIAAgAWsiACACTw0BQei/wAAoAgAgAEECdGogAzYCAEH0v8AAIAE2AgBB8L/AACAANgIAQey/wAAgAjYCAEEAQQQQbAsPCwALlAECBn8BbyMAQRBrIgIkACACQQRqIAEQjwEQRSACKAIIIQMgAigCBARAIAMgAigCDBB4AAsgAigCDCEEEAkhCBAwIgUgCCYBIAUlARAKIQgQMCIGIAgmASAGEG0hByAGEHQgByUBIAElASAEEAwgBxB0IAUQdCAAIAEQjwE2AgggACAENgIEIAAgAzYCACACQRBqJAALggEBAX8jAEEgayIAJAACQAJAQZC8wAAoAgBB/////wdxBEBB2L/AACgCAA0BC0GIvMAAKAIADQFBjLzAAEEBNgIAQYi8wABBADYCACAAQSBqJAAPCyAAQQA2AhggAEEBNgIMIABBhLnAADYCCCAAQgQ3AhAgAEEIakGoucAAEFUACwALaQIBfwF+IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0ECNgIMIANBvJfAADYCCCADQgI3AhQgA0KAgICAsAEiBCADrYQ3AyggAyAEIANBBGqthDcDICADIANBIGo2AhAgA0EIaiACEFUAC2oBAX8jAEEwayIDJAAgAyACNgIEIAMgATYCACADQSxqQQE2AgAgA0ECNgIMIANB+LbAADYCCCADQgI3AhQgA0ECNgIkIAMgADYCICADIANBIGo2AhAgAyADNgIoIANBCGoQVyADQTBqJAALaQEDfwJAIAEoAgAiAiABKAIIIgNLBEAgASgCBCEEAkAgA0UEQCAEIAIQTkEBIQIMAQsgBCACIAMQHiICRQ0CCyABIAM2AgAgASACNgIECyAAIAM2AgQgACABKAIENgIADwtBASADEHgAC1sBAn8CQCAAQQRrKAIAIgJBeHEiA0EEQQggAkEDcSICGyABak8EQCACQQAgAyABQSdqSxsNASAAECAPC0HRt8AAQS5BgLjAABBSAAtBkLjAAEEuQcC4wAAQUgALQgEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhA8IAAoAgghAwsgACgCBCADaiABIAIQjAEaIAAgAiADajYCCEEAC0IBAX8gAiAAKAIAIAAoAggiA2tLBEAgACADIAIQPSAAKAIIIQMLIAAoAgQgA2ogASACEIwBGiAAIAIgA2o2AghBAAs/AQF/IwBBEGsiASQAIAFBCGogACAAKAIAQQEQOyABKAIIIgBBgYCAgHhHBEAgACABKAIMEHgACyABQRBqJAALQQEBfyMAQSBrIgMkACADQQA2AhAgA0EBNgIEIANCBDcCCCADIAE2AhwgAyAANgIYIAMgA0EYajYCACADIAIQVQALOQACQAJ/IAJBgIDEAEcEQEEBIAAgAiABKAIQEQAADQEaCyADDQFBAAsPCyAAIAMgBCABKAIMEQEAC0UBAn9B3b/AAC0AABogASgCBCECIAEoAgAhA0EIEBciAUUEQAALIAEgAjYCBCABIAM2AgAgAEHYucAANgIEIAAgATYCAAuqAgECfyMAQSBrIgIkACACQQE7ARwgAiABNgIYIAIgADYCFCACQfiWwAA2AhAgAkEBNgIMIwBBEGsiASQAIAJBDGoiACgCCCICRQRAQbi5wAAQhQEACyABIAAoAgw2AgwgASAANgIIIAEgAjYCBCMAQRBrIgAkACABQQRqIgEoAgAiAigCDCEDAkACQAJAAkAgAigCBA4CAAECCyADDQFBASECQQAhAwwCCyADDQAgAigCACICKAIEIQMgAigCACECDAELIAAgAjYCDCAAQYCAgIB4NgIAIABB/LnAACABKAIEIgAoAgggASgCCCAALQAQIAAtABEQPgALIAAgAzYCBCAAIAI2AgAgAEHoucAAIAEoAgQiACgCCCABKAIIIAAtABAgAC0AERA+AAs4AQF/IwBBEGsiAiQAIAIgASUBEBEgAigCACEBIAAgAisDCDkDCCAAIAFBAEetNwMAIAJBEGokAAs9AgJ/AW8jAEEQayIBJAAgAUEEaiICIAAQJiABKAIIIAEoAgwQDSEDEDAiACADJgEgAhBqIAFBEGokACAAC6FwAx1/G34BfCABKAIcQQFxIQIgACsDACE6AkACQCABKAIIBEACfyABIQogASgCDCESIwBB0A5rIgUkAAJ/AkACQCA6IDphBEAgOr0iH0L/////////B4MiI0KAgICAgICACIQgH0IBhkL+////////D4MgH0I0iKdB/w9xIgEbIiBCAYMhJCAfQoCAgICAgID4/wCDISECQCAjUARAQQNBBCAhQoCAgICAgID4/wBRGyEAICFQRQ0BDAQLICFCAFINAiABQbMIayEGICRQIQAMAwsgIUKAgICAgICA+P8AUg0BDAILQQIhAEEBDAILQoCAgICAgIAgICBCAYYgIEKAgICAgICACFEiAxshICAkUCEAQct3Qcx3IAMbIAFqIQYLIAJFBEAgH0I/iKchGEGzlcAAQQEgH0IAUxsMAQtBASEYQbOVwABBtJXAACAfQgBTGwshEwJAAkACQAJAAn8CQAJAAkACQAJAQQMgAEECa0H/AXEiACAAQQNPG0EBaw4DAQIDAAsgBUEDNgK0DSAFQbWVwAA2ArANIAVBAjsBrA1BASEAIAVBrA1qDAQLIAVBAzYCtA0gBUG4lcAANgKwDSAFQQI7AawNQQEhACAFQawNagwDC0ECIQAgBUECOwGsDSASRQ0BIAVBvA1qIBI2AgAgBUEAOwG4DSAFQQI2ArQNIAVBsZXAADYCsA0gBUGsDWoMAgsCQAJAAkACQAJAAkACQAJ/AkACQEF0QQUgBsEiCEEASBsgCGwiAEHA/QBJBEAgIFANASAAQQR2Ig1BFWohC0GAgH5BACASayASQYCAAk8bwSEQQaB/IAZBIGsgBiAgQoCAgIAQVCIAGyIBQRBrIAEgIEIghiAgIAAbIh9CgICAgICAwABUIgAbIgFBCGsgASAfQhCGIB8gABsiH0KAgICAgICAgAFUIgAbIgFBBGsgASAfQgiGIB8gABsiH0KAgICAgICAgBBUIgAbIgFBAmsgASAfQgSGIB8gABsiH0KAgICAgICAgMAAVCIAGyAfQgKGIB8gABsiH0IAWSIBayICa8FB0ABsQbCnBWpBzhBuQQR0IgBBsIjAAGopAwAiIUL/////D4MiJCAfIAGthiIfQiCIIiN+IiJCIIggIUIgiCIhICN+fCAhIB9C/////w+DIh9+IiFCIIh8ICJC/////w+DIB8gJH5CIIh8ICFC/////w+DfEKAgICACHxCIIh8Ih9CAUFAIAIgAEG4iMAAai8BAGprIgNBP3GtIiGGIiNCAX0iIoMiJFAEQCAFQQA2ApAIDAULIABBuojAAGovAQAhAiAfICGIpyIBQZDOAE8EQCABQcCEPUkNAyABQYDC1y9PBEBBCEEJIAFBgJTr3ANJIgAbIQxBgMLXL0GAlOvcAyAAGwwFC0EGQQcgAUGAreIESSIAGyEMQcCEPUGAreIEIAAbDAQLIAFB5ABPBEBBAkEDIAFB6AdJIgAbIQxB5ABB6AcgABsMBAtBCkEBIAFBCUsiDBsMAwtBvJXAAEElQeSVwAAQUgALQZOHwABBHEHEk8AAEFIAC0EEQQUgAUGgjQZJIgAbIQxBkM4AQaCNBiAAGwshAAJAIBAgDCACa0EBasEiAkgEQCADQf//A3EhBCACIBBrIgPBIAsgAyALSRsiA0EBayEHAkACQAJAA0AgBUEQaiAJaiABIABuIg5BMGo6AAAgASAAIA5sayEBIAcgCUYNAiAJIAxGDQEgCUEBaiEJIABBCkkgAEEKbiEARQ0AC0H8k8AAEFoACyAJQQFqIQBBbCANayEBIARBAWtBP3GtISVCASEfA0AgHyAliFBFBEAgBUEANgKQCAwGCyAAIAFqQQFGDQIgBUEQaiINIABqICRCCn4iJCAhiKdBMGo6AAAgH0IKfiEfICIgJIMhJCADIABBAWoiAEcNAAsgBUGQCGogDSALIAMgAiAQICQgIyAfECkMAwsgBUGQCGogBUEQaiALIAMgAiAQIAGtICGGICR8IACtICGGICMQKQwCCyAAIAtBjJTAABBLAAsgBUGQCGogBUEQaiALQQAgAiAQIB9CCoAgAK0gIYYgIxApCyAFKAKQCCIADQELIAUgID4CnAggBUEBQQIgIEKAgICAEFQiABs2ArwJIAVBACAgQiCIpyAAGzYCoAggBUGkCGpBAEGYARCNARogBUHECWpBAEGcARCNARogBUEBNgLACSAFQQE2AuAKIAatwyAgQgF9eX1CwprB6AR+QoChzaC0AnxCIIinIgDBIQ4CQCAIQQBOBEAgBUGcCGogBkH//wNxECcaDAELIAVBwAlqQQAgBmvBECcaCwJAIA5BAEgEQCAFQZwIakEAIA5rQf//A3EQHQwBCyAFQcAJaiAAQf//A3EQHQsgBSgC4AohDSAFQawNaiAFQcAJakGgARCMARogBSANNgLMDiAFQaQNaiECIA0hACALIQgDQCAAQSlPDQ8CQCAARQ0AIABBAnQhAQJ/IABB/////wNqIgNB/////wNxIgZFBEBCACEfIAVBrA1qIAFqDAELIAEgAmohACAGQQFqQf7///8HcSEJQgAhHwNAIABBBGoiASABNQIAIB9CIIaEIh9CgJTr3AOAIiA+AgAgACAANQIAICBCgOyUo3x+IB98QiCGhCIfQoCU69wDgCIgPgIAICBCgOyUo3x+IB98IR8gAEEIayEAIAlBAmsiCQ0ACyAAQQhqCyADQQFxDQBBBGsiACAANQIAIB9CIIaEQoCU69wDgD4CAAsgCEEJayIIQQlLBEAgBSgCzA4hAAwBCwsgCEECdEHkhMAAaigCACIBRQ0BIAUoAswOIglBKU8NCCAJBH8gCUECdCEAIAGtIR8CfyAJQf////8DaiIBQf////8DcSICRQRAQgAhICAFQawNaiAAagwBCyACQQFqQf7///8HcSEJIAAgBWpBpA1qIQBCACEgA0AgAEEEaiICIAI1AgAgIEIghoQiICAfgCIhPgIAIAAgADUCACAgIB8gIX59QiCGhCIgIB+AIiE+AgAgICAfICF+fSEgIABBCGshACAJQQJrIgkN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SwRAIAEhAAwBCwJAIABFDQBBASEKQQAhBgJAIABBAUcEQCAAQQFxIABBPnEhCSAEQawFaiEHIARBHGohAgNAIAIgCiACKAIAIhEgBygCAEF/c2oiAWoiCjYCACACQQRqIgMgAygCACITIAdBBGooAgBBf3NqIgMgASARSSABIApLcmoiATYCACABIANJIAMgE0lyIQogAkEIaiECIAdBCGohByAJIAZBAmoiBkcNAAtFDQELIAZBAnQiASAEQRxqaiICIAIoAgAiAiABIBhqKAIAQX9zaiIBIApqIgM2AgAgASACSSABIANLcg0BDBELIApFDRALIAQgADYCvAEgBUECaiEFCyAAIBAgACAQSxsiA0EpTw0NIANBAnQhAgJAA0AgAgRAQX8gAkEEayICIARBiARqaigCACIBIAIgBEEcamooAgAiBkcgASAGSxsiB0UNAQwCCwtBf0EAIAIgBEGIBGoiAWogAUcbIQcLAkAgB0EBSwRAIAAhAwwBCwJAIANFDQBBASEKQQAhBgJAIANBAUcEQCADQQFxIANBPnEhCSAEQYgEaiEHIARBHGohAgNAIAIgCiACKAIAIhEgBygCAEF/c2oiAGoiCjYCACACQQRqIgEgASgCACITIAdBBGooAgBBf3NqIgEgACARSSAAIApLcmoiADYCACAAIAFJIAEgE0lyIQogAkEIaiECIAdBCGohByAJIAZBAmoiBkcNAAtFDQELIAZBAnQiACAEQRxqaiIBIAEoAgAiASAEQYgEaiAAaigCAEF/c2oiACAKaiICNgIAIAAgAUkgACACS3INAQwRCyAKRQ0QCyAEIAM2ArwBIAVBAWohBQsgCEERRg0BIARBC2ogCGogBUEwajoAACADIAQoAuACIgsgAyALSxsiAkEpTw0RIAhBAWohACACQQJ0IQICQANAIAIEQEF/IAJBBGsiAiAEQcABamooAgAiASACIARBHGpqKAIAIgZHIAEgBksbIgFFDQEMAgsLQX9BACACIARBwAFqIgFqIAFHGyEBCyAEQZwJaiAEQRxqQaABEIwBGiAEIAM2ArwKIAMgBCgChAQiCSADIAlLGyIFQShLDQICQCAFRQRAQQAhBQwBC0EAIQZBACEKAkACQCAFQQFHBEAgBUEBcSAFQT5xIR4gBEHkAmohByAEQZwJaiECA0AgAiAKIAIoAgAi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ACABQQhqNgIIIABBzJfAADYCFCAAIAFBDGo2AhAgAEECNgIcIABB3JfAADYCGAJAIARBnAlqIgEoAgBFBEAgAEEDNgJcIABBkJjAADYCWCAAQgM3AmQgACAAQRBqrUKAgICAwAGENwNIIAAgAEEIaq1CgICAgMABhDcDQAwBCyAAQTBqIAFBEGopAgA3AwAgAEEoaiABQQhqKQIANwMAIAAgASkCADcDICAAQQQ2AlwgAEHEmMAANgJYIABCBDcCZCAAIABBEGqtQoCAgIDAAYQ3A1AgACAAQQhqrUKAgICAwAGENwNIIAAgAEEgaq1CgICAgNABhDcDQAsgACAAQRhqrUKAgICAoAGENwM4IAAgAEE4ajYCYCAAQdgAakHUhMAAEFUAC0EoQShB2KvAABBLAAsgA0EoQdirwAAQgwEAC0Hoq8AAQRpB2KvAABBSAAsPCyAAQShB2KvAABCDAQALIAJBKEHYq8AAEIMBAAs5AQF/IwBBIGsiACQAIABBADYCGCAAQQE2AgwgAEGYgcAANgIIIABCBDcCECAAQQhqQbyBwAAQVQALNgEBfyMAQSBrIgEkACABQQA2AhggAUEBNgIMIAFB1KzAADYCCCABQgQ3AhAgAUEIaiAAEFUACzwBAX9BASECAkAgACgCACABEDQNACABKAIUQY+WwABBAiABKAIYKAIMEQEADQAgACgCBCABEDQhAgsgAgsnAAJAIABB/P///wdLDQAgAEUEQEEEDwsgABCHASIARQ0AIAAPCwALHwECfiAAKQMAIgIgAkI/hyIDhSADfSACQgBZIAEQLQsgAAJAIAFB/P///wdNBEAgACABIAIQHiIADQELAAsgAAsiACAALQAARQRAIAFBrpvAAEEFEBgPCyABQbObwABBBBAYCx4AIABFBEAQigEACyAAIAIgAyAEIAUgASgCEBEMAAslAQF/IAAoAgAiAUGAgICAeHJBgICAgHhHBEAgACgCBCABEE4LCywAQeC/wAAoAgBFBEBB8L/AAEIANwIAQei/wABCBDcCAEHgv8AAQgE3AgALCxwAIABFBEAQigEACyAAIAIgAyAEIAEoAhARBwALHAAgAEUEQBCKAQALIAAgAiADIAQgASgCEBEYAAscACAARQRAEIoBAAsgACACIAMgBCABKAIQERoACxwAIABFBEAQigEACyAAIAIg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AQsgAkHUAGogAkGfAWpBgIDAABAkIQVBACEDDAELIAtCgAJUIgNFBEAgAkEBOgBYIAIgCzcDYCACQYCAwAA2AnAgAiACQZ8BajYCbCACQQI2AnggAkGwgMAANgJ0IAJCAjcCgAEgAkEBNgKYASACQQI2ApABIAIgAkGMAWo2AnwgAiACQewAajYClAEgAiACQdgAajYCjAEgAkH0AGoQVyEFDAELIAunIQgLIAIoAlQQdCADBEAgAigCSCAERgRAIAJByABqEFEgAigCTCEHCyAEIAdqIAg6AAAgBEEBaiEEDAIFIAJByABqEGpBgICAgHghAwwECwALCyACKAJMIQUgAigCSCEDIAAhBAwBCyACQThqIAJBnwFqQZCAwAAQJCEFQYCAgIB4IQMLIAYQdCADQYCAgIB4Rg0BIAIgBDYCNCACIAU2AjAgAiADNgIsIAJBEGogBSAEQcCAwABBEBAbQQEhA0EAAn8gAigCEEEBRgRAIAIoAhQMAQsgAkEIaiAFIARB0IDAAEESEBsgAigCCEEBRgRAIAIoAgwMAQtBACEDQeKAwABBCRAEIQEQMCIAIAEmASAACyIFIAMbIQQgAkEsahBqIANBAXMMAgtBASADEHgACyAFIQRBAQs2AgggCSAENgIEIAkgBTYCACACQaABaiQACwwAIABFBEAQWQALAAsQACABIAAoAgAgACgCBBAYCw0AIAAgASABIAJqEEcLIgAgAELPy6PHk5zOpf8ANwMIIABC1OaQ0afAveaEfzcDAAsQACABKAIUIAEoAhggABAiCxMAIABB2LnAADYCBCAAIAE2AgALIgAgAELtuq22zYXU9eMANwMIIABC+IKZvZXuxsW5fzcDAAshACAAQqjQ7/OplKTBVjcDCCAAQpH16+W8g/S2jX83AwALEAAgASAAKAIEIAAoAggQGAsMACAAIAEgAhB6QQALDQAgADUCAEEBIAEQLQtqAQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0ECNgIMIANBrJzAADYCCCADQgI3AhQgAyADQQRqrUKAgICAsAGENwMoIAMgA61CgICAgLABhDcDICADIANBIGo2AhAgA0EIaiACEFUAC2oBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQQI2AgwgA0HgnMAANgIIIANCAjcCFCADIANBBGqt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YWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlAAAAAQAAAAAAAAAhCxAAAQAAACELEAABAAAAcGFuaWNrZWQgYXQgCgAAACQAAAAAAAAAAQAAACsAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAiAsQACAAAACoCxAAEgAAACwAAAAEAAAABAAAAC0AAAA9PWFzc2VydGlvbiBgbGVmdCAgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IAogcmlnaHQ6IAAA3gsQABAAAADuCxAAFwAAAAUMEAAJAAAAIHJpZ2h0YCBmYWlsZWQ6IAogIGxlZnQ6IAAAAN4LEAAQAAAAKAwQABAAAAA4DBAACQAAAAUMEAAJAAAAOiAAAAEAAAAAAAAAZAwQAAIAAABsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMAeAwQABsAAABpAAAAFwAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZmFsc2V0cnVlAPQKEAAbAAAAZgkAABoAAAD0ChAAGwAAAF8JAAAiAAAAcmFuZ2Ugc3RhcnQgaW5kZXggIG91dCBvZiByYW5nZSBmb3Igc2xpY2Ugb2YgbGVuZ3RoINgNEAASAAAA6g0QACIAAAByYW5nZSBlbmQgaW5kZXggHA4QABAAAADqDRAAIgAAAHNsaWNlIGluZGV4IHN0YXJ0cyBhdCAgYnV0IGVuZHMgYXQgADwOEAAWAAAAUg4QAA0AAABbLi4uXWJlZ2luIDw9IGVuZCAoIDw9ICkgd2hlbiBzbGljaW5nIGAAdQ4QAA4AAACDDhAABAAA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", t);
}
var ar, ti;
const Bg = _e("c2pa:Validator");
class At {
  constructor(n, r) {
    ar.set(this, void 0), ti.set(this, void 0), ii(this, ar, n), ii(this, ti, r ?? At.DEFAULT_DETECTION_LENGTH);
  }
  /**
   * Sanitizes mime type strings for proper file type checking
   *
   * @remarks
   * We need to do this since some Content-Types can coming in such as `image/jpeg; charset=utf-8`.
   *
   * @param type - The mime type of the asset
   */
  static sanitizeMimeType(n) {
    return n.split(";")[0];
  }
  /**
   * Checks if the asset has a mime type that is compatible with C2PA
   *
   * @param type - The mime type of the asset to check
   */
  static isValidMimeType(n) {
    return this.VALID_MIME_TYPES.includes(this.sanitizeMimeType(n));
  }
  /**
   * Scans an individual binary chunk for a C2PA metadata marker
   *
   * @param chunk - the chunk to check for the metadata marker
   */
  async scanChunk(n) {
    const r = await Hv();
    Bg("Scanning buffer for C2PA marker with length %d", n.byteLength);
    const s = await _A(this, ar, "f").scanInput(r, n);
    return Bg("Scanned buffer and got result", s), s;
  }
  /**
   * Scans a buffer/Blob for a C2PA metadata marker
   *
   * @remarks
   * This will automatically handle both a `ArrayBuffer` or a `Blob` as input
   * and automatically decide if it should be passed as a transferable object or not.
   * It will then pass it to `scanChunk` for the actual processing.
   *
   * @param input - The buffer/blob to scan
   */
  async scanInput(n) {
    let r = null;
    if (n instanceof ArrayBuffer)
      r = n;
    else if (n instanceof Blob) {
      const s = await n.arrayBuffer();
      _A(this, ti, "f") > 0 ? r = s.slice(0, _A(this, ti, "f")) : r = s;
    }
    if (!r)
      throw new vl();
    return this.scanChunk(r);
  }
}
ar = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap();
At.VALID_MIME_TYPES = [
  "application/c2pa",
  "application/mp4",
  "application/pdf",
  "application/x-c2pa-manifest-store",
  "audio/mp4",
  "audio/mpeg",
  "audio/vnd.wave",
  "audio/wav",
  "audio/x-wav",
  "image/avif",
  "image/heic",
  "image/heif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-adobe-dng",
  "image/x-sony-arw",
  "video/mp4",
  "video/quicktime",
  "video/x-msvideo"
];
At.DEFAULT_DETECTION_LENGTH = 65535;
function Tv() {
  this.__data__ = [], this.size = 0;
}
var qv = Tv;
function Kv(t, n) {
  return t === n || t !== t && n !== n;
}
var ni = Kv, Ov = ni;
function Wv(t, n) {
  for (var r = t.length; r--; )
    if (Ov(t[r][0], n))
      return r;
  return -1;
}
var lr = Wv, Pv = lr, zv = Array.prototype, $v = zv.splice;
function jv(t) {
  var n = this.__data__, r = Pv(n, t);
  if (r < 0)
    return !1;
  var s = n.length - 1;
  return r == s ? n.pop() : $v.call(n, r, 1), --this.size, !0;
}
var Zv = jv, Xv = lr;
function Vv(t) {
  var n = this.__data__, r = Xv(n, t);
  return r < 0 ? void 0 : n[r][1];
}
var Ay = Vv, ey = lr;
function ty(t) {
  return ey(this.__data__, t) > -1;
}
var iy = ty, ry = lr;
function ny(t, n) {
  var r = this.__data__, s = ry(r, t);
  return s < 0 ? (++this.size, r.push([t, n])) : r[s][1] = n, this;
}
var ay = ny, sy = qv, oy = Zv, cy = Ay, gy = iy, dy = ay;
function wt(t) {
  var n = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var s = t[n];
    this.set(s[0], s[1]);
  }
}
wt.prototype.clear = sy;
wt.prototype.delete = oy;
wt.prototype.get = cy;
wt.prototype.has = gy;
wt.prototype.set = dy;
var Ir = wt, ly = Ir;
function Iy() {
  this.__data__ = new ly(), this.size = 0;
}
var Cy = Iy;
function uy(t) {
  var n = this.__data__, r = n.delete(t);
  return this.size = n.size, r;
}
var By = uy;
function Qy(t) {
  return this.__data__.get(t);
}
var fy = Qy;
function Ey(t) {
  return this.__data__.has(t);
}
var py = Ey, vy = typeof ke == "object" && ke && ke.Object === Object && ke, hl = vy, yy = hl, hy = typeof self == "object" && self && self.Object === Object && self, wy = yy || hy || Function("return this")(), TA = wy, ra, Qg;
function bt() {
  if (Qg)
    return ra;
  Qg = 1;
  var t = TA, n = t.Symbol;
  return ra = n, ra;
}
var fg = bt(), wl = Object.prototype, by = wl.hasOwnProperty, Dy = wl.toString, Ai = fg ? fg.toStringTag : void 0;
function my(t) {
  var n = by.call(t, Ai), r = t[Ai];
  try {
    t[Ai] = void 0;
    var s = !0;
  } catch {
  }
  var g = Dy.call(t);
  return s && (n ? t[Ai] = r : delete t[Ai]), g;
}
var Fy = my, ky = Object.prototype, _y = ky.toString;
function Ry(t) {
  return _y.call(t);
}
var Gy = Ry, Eg = bt(), Sy = Fy, Ny = Gy, Ly = "[object Null]", My = "[object Undefined]", pg = Eg ? Eg.toStringTag : void 0;
function Uy(t) {
  return t == null ? t === void 0 ? My : Ly : pg && pg in Object(t) ? Sy(t) : Ny(t);
}
var et = Uy;
function Yy(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var le = Yy, Jy = et, xy = le, Hy = "[object AsyncFunction]", Ty = "[object Function]", qy = "[object GeneratorFunction]", Ky = "[object Proxy]";
function Oy(t) {
  if (!xy(t))
    return !1;
  var n = Jy(t);
  return n == Ty || n == qy || n == Hy || n == Ky;
}
var Cr = Oy, Wy = TA, Py = Wy["__core-js_shared__"], zy = Py, na = zy, vg = function() {
  var t = /[^.]+$/.exec(na && na.keys && na.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function $y(t) {
  return !!vg && vg in t;
}
var jy = $y, Zy = Function.prototype, Xy = Zy.toString;
function Vy(t) {
  if (t != null) {
    try {
      return Xy.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var bl = Vy, Ah = Cr, eh = jy, th = le, ih = bl, rh = /[\\^$.*+?()[\]{}|]/g, nh = /^\[object .+?Constructor\]$/, ah = Function.prototype, sh = Object.prototype, oh = ah.toString, ch = sh.hasOwnProperty, gh = RegExp(
  "^" + oh.call(ch).replace(rh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function dh(t) {
  if (!th(t) || eh(t))
    return !1;
  var n = Ah(t) ? gh : nh;
  return n.test(ih(t));
}
var lh = dh;
function Ih(t, n) {
  return t == null ? void 0 : t[n];
}
var Ch = Ih, uh = lh, Bh = Ch;
function Qh(t, n) {
  var r = Bh(t, n);
  return uh(r) ? r : void 0;
}
var tt = Qh, fh = tt, Eh = TA, ph = fh(Eh, "Map"), Is = ph, vh = tt, yh = vh(Object, "create"), ur = yh, yg = ur;
function hh() {
  this.__data__ = yg ? yg(null) : {}, this.size = 0;
}
var wh = hh;
function bh(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Dh = bh, mh = ur, Fh = "__lodash_hash_undefined__", kh = Object.prototype, _h = kh.hasOwnProperty;
function Rh(t) {
  var n = this.__data__;
  if (mh) {
    var r = n[t];
    return r === Fh ? void 0 : r;
  }
  return _h.call(n, t) ? n[t] : void 0;
}
var Gh = Rh, Sh = ur, Nh = Object.prototype, Lh = Nh.hasOwnProperty;
function Mh(t) {
  var n = this.__data__;
  return Sh ? n[t] !== void 0 : Lh.call(n, t);
}
var Uh = Mh, Yh = ur, Jh = "__lodash_hash_undefined__";
function xh(t, n) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = Yh && n === void 0 ? Jh : n, this;
}
var Hh = xh, Th = wh, qh = Dh, Kh = Gh, Oh = Uh, Wh = Hh;
function Dt(t) {
  var n = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var s = t[n];
    this.set(s[0], s[1]);
  }
}
Dt.prototype.clear = Th;
Dt.prototype.delete = qh;
Dt.prototype.get = Kh;
Dt.prototype.has = Oh;
Dt.prototype.set = Wh;
var Ph = Dt, hg = Ph, zh = Ir, $h = Is;
function jh() {
  this.size = 0, this.__data__ = {
    hash: new hg(),
    map: new ($h || zh)(),
    string: new hg()
  };
}
var Zh = jh;
function Xh(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
var Vh = Xh, Aw = Vh;
function ew(t, n) {
  var r = t.__data__;
  return Aw(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
var Br = ew, tw = Br;
function iw(t) {
  var n = tw(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
var rw = iw, nw = Br;
function aw(t) {
  return nw(this, t).get(t);
}
var sw = aw, ow = Br;
function cw(t) {
  return ow(this, t).has(t);
}
var gw = cw, dw = Br;
function lw(t, n) {
  var r = dw(this, t), s = r.size;
  return r.set(t, n), this.size += r.size == s ? 0 : 1, this;
}
var Iw = lw, Cw = Zh, uw = rw, Bw = sw, Qw = gw, fw = Iw;
function mt(t) {
  var n = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var s = t[n];
    this.set(s[0], s[1]);
  }
}
mt.prototype.clear = Cw;
mt.prototype.delete = uw;
mt.prototype.get = Bw;
mt.prototype.has = Qw;
mt.prototype.set = fw;
var Cs = mt, Ew = Ir, pw = Is, vw = Cs, yw = 200;
function hw(t, n) {
  var r = this.__data__;
  if (r instanceof Ew) {
    var s = r.__data__;
    if (!pw || s.length < yw - 1)
      return s.push([t, n]), this.size = ++r.size, this;
    r = this.__data__ = new vw(s);
  }
  return r.set(t, n), this.size = r.size, this;
}
var ww = hw, bw = Ir, Dw = Cy, mw = By, Fw = fy, kw = py, _w = ww;
function Ft(t) {
  var n = this.__data__ = new bw(t);
  this.size = n.size;
}
Ft.prototype.clear = Dw;
Ft.prototype.delete = mw;
Ft.prototype.get = Fw;
Ft.prototype.has = kw;
Ft.prototype.set = _w;
var Qr = Ft, Rw = tt, Gw = function() {
  try {
    var t = Rw(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Dl = Gw, wg = Dl;
function Sw(t, n, r) {
  n == "__proto__" && wg ? wg(t, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[n] = r;
}
var fr = Sw, Nw = fr, Lw = ni;
function Mw(t, n, r) {
  (r !== void 0 && !Lw(t[n], r) || r === void 0 && !(n in t)) && Nw(t, n, r);
}
var ml = Mw;
function Uw(t) {
  return function(n, r, s) {
    for (var g = -1, l = Object(n), C = s(n), B = C.length; B--; ) {
      var f = C[t ? B : ++g];
      if (r(l[f], f, l) === !1)
        break;
    }
    return n;
  };
}
var Yw = Uw, Jw = Yw, xw = Jw(), Fl = xw, dr = { exports: {} };
(function(t, n) {
  var r = TA, s = n && !n.nodeType && n, g = s && !0 && t && !t.nodeType && t, l = g && g.exports === s, C = l ? r.Buffer : void 0, B = C ? C.allocUnsafe : void 0;
  function f(p, E) {
    if (E)
      return p.slice();
    var u = p.length, w = B ? B(u) : new p.constructor(u);
    return p.copy(w), w;
  }
  t.exports = f;
})(dr, dr.exports);
var Hw = TA, Tw = Hw.Uint8Array, kl = Tw, bg = kl;
function qw(t) {
  var n = new t.constructor(t.byteLength);
  return new bg(n).set(new bg(t)), n;
}
var us = qw, Kw = us;
function Ow(t, n) {
  var r = n ? Kw(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var _l = Ow;
function Ww(t, n) {
  var r = -1, s = t.length;
  for (n || (n = Array(s)); ++r < s; )
    n[r] = t[r];
  return n;
}
var ai = Ww, Pw = le, Dg = Object.create, zw = /* @__PURE__ */ function() {
  function t() {
  }
  return function(n) {
    if (!Pw(n))
      return {};
    if (Dg)
      return Dg(n);
    t.prototype = n;
    var r = new t();
    return t.prototype = void 0, r;
  };
}(), Er = zw;
function $w(t, n) {
  return function(r) {
    return t(n(r));
  };
}
var Rl = $w, jw = Rl, Zw = jw(Object.getPrototypeOf, Object), Bs = Zw, Xw = Object.prototype;
function Vw(t) {
  var n = t && t.constructor, r = typeof n == "function" && n.prototype || Xw;
  return t === r;
}
var Qs = Vw, Ab = Er, eb = Bs, tb = Qs;
function ib(t) {
  return typeof t.constructor == "function" && !tb(t) ? Ab(eb(t)) : {};
}
var Gl = ib;
function rb(t) {
  return t != null && typeof t == "object";
}
var ae = rb, nb = et, ab = ae, sb = "[object Arguments]";
function ob(t) {
  return ab(t) && nb(t) == sb;
}
var cb = ob, mg = cb, gb = ae, Sl = Object.prototype, db = Sl.hasOwnProperty, lb = Sl.propertyIsEnumerable, Ib = mg(/* @__PURE__ */ function() {
  return arguments;
}()) ? mg : function(t) {
  return gb(t) && db.call(t, "callee") && !lb.call(t, "callee");
}, pr = Ib, Cb = Array.isArray, mA = Cb, ub = 9007199254740991;
function Bb(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ub;
}
var fs = Bb, Qb = Cr, fb = fs;
function Eb(t) {
  return t != null && fb(t.length) && !Qb(t);
}
var kt = Eb, pb = kt, vb = ae;
function yb(t) {
  return vb(t) && pb(t);
}
var hb = yb, ht = { exports: {} };
function wb() {
  return !1;
}
var bb = wb;
(function(t, n) {
  var r = TA, s = bb, g = n && !n.nodeType && n, l = g && !0 && t && !t.nodeType && t, C = l && l.exports === g, B = C ? r.Buffer : void 0, f = B ? B.isBuffer : void 0, p = f || s;
  t.exports = p;
})(ht, ht.exports);
var Db = et, mb = Bs, Fb = ae, kb = "[object Object]", _b = Function.prototype, Rb = Object.prototype, Nl = _b.toString, Gb = Rb.hasOwnProperty, Sb = Nl.call(Object);
function Nb(t) {
  if (!Fb(t) || Db(t) != kb)
    return !1;
  var n = mb(t);
  if (n === null)
    return !0;
  var r = Gb.call(n, "constructor") && n.constructor;
  return typeof r == "function" && r instanceof r && Nl.call(r) == Sb;
}
var Ll = Nb, Lb = et, Mb = fs, Ub = ae, Yb = "[object Arguments]", Jb = "[object Array]", xb = "[object Boolean]", Hb = "[object Date]", Tb = "[object Error]", qb = "[object Function]", Kb = "[object Map]", Ob = "[object Number]", Wb = "[object Object]", Pb = "[object RegExp]", zb = "[object Set]", $b = "[object String]", jb = "[object WeakMap]", Zb = "[object ArrayBuffer]", Xb = "[object DataView]", Vb = "[object Float32Array]", A2 = "[object Float64Array]", e2 = "[object Int8Array]", t2 = "[object Int16Array]", i2 = "[object Int32Array]", r2 = "[object Uint8Array]", n2 = "[object Uint8ClampedArray]", a2 = "[object Uint16Array]", s2 = "[object Uint32Array]", cA = {};
cA[Vb] = cA[A2] = cA[e2] = cA[t2] = cA[i2] = cA[r2] = cA[n2] = cA[a2] = cA[s2] = !0;
cA[Yb] = cA[Jb] = cA[Zb] = cA[xb] = cA[Xb] = cA[Hb] = cA[Tb] = cA[qb] = cA[Kb] = cA[Ob] = cA[Wb] = cA[Pb] = cA[zb] = cA[$b] = cA[jb] = !1;
function o2(t) {
  return Ub(t) && Mb(t.length) && !!cA[Lb(t)];
}
var c2 = o2, aa, Fg;
function vr() {
  if (Fg)
    return aa;
  Fg = 1;
  function t(n) {
    return function(r) {
      return n(r);
    };
  }
  return aa = t, aa;
}
var ri = { exports: {} };
(function(t, n) {
  var r = hl, s = n && !n.nodeType && n, g = s && !0 && t && !t.nodeType && t, l = g && g.exports === s, C = l && r.process, B = function() {
    try {
      var f = g && g.require && g.require("util").types;
      return f || C && C.binding && C.binding("util");
    } catch {
    }
  }();
  t.exports = B;
})(ri, ri.exports);
var g2 = c2, d2 = vr(), kg = ri.exports, _g = kg && kg.isTypedArray, l2 = _g ? d2(_g) : g2, Es = l2;
function I2(t, n) {
  if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
    return t[n];
}
var Ml = I2, C2 = fr, u2 = ni, B2 = Object.prototype, Q2 = B2.hasOwnProperty;
function f2(t, n, r) {
  var s = t[n];
  (!(Q2.call(t, n) && u2(s, r)) || r === void 0 && !(n in t)) && C2(t, n, r);
}
var Ul = f2, E2 = Ul, p2 = fr;
function v2(t, n, r, s) {
  var g = !r;
  r || (r = {});
  for (var l = -1, C = n.length; ++l < C; ) {
    var B = n[l], f = s ? s(r[B], t[B], B, r, t) : void 0;
    f === void 0 && (f = t[B]), g ? p2(r, B, f) : E2(r, B, f);
  }
  return r;
}
var si = v2;
function y2(t, n) {
  for (var r = -1, s = Array(t); ++r < t; )
    s[r] = n(r);
  return s;
}
var h2 = y2, w2 = 9007199254740991, b2 = /^(?:0|[1-9]\d*)$/;
function D2(t, n) {
  var r = typeof t;
  return n = n ?? w2, !!n && (r == "number" || r != "symbol" && b2.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
var yr = D2, m2 = h2, F2 = pr, k2 = mA, _2 = ht.exports, R2 = yr, G2 = Es, S2 = Object.prototype, N2 = S2.hasOwnProperty;
function L2(t, n) {
  var r = k2(t), s = !r && F2(t), g = !r && !s && _2(t), l = !r && !s && !g && G2(t), C = r || s || g || l, B = C ? m2(t.length, String) : [], f = B.length;
  for (var p in t)
    (n || N2.call(t, p)) && !(C && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    g && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    R2(p, f))) && B.push(p);
  return B;
}
var Yl = L2;
function M2(t) {
  var n = [];
  if (t != null)
    for (var r in Object(t))
      n.push(r);
  return n;
}
var U2 = M2, Y2 = le, J2 = Qs, x2 = U2, H2 = Object.prototype, T2 = H2.hasOwnProperty;
function q2(t) {
  if (!Y2(t))
    return x2(t);
  var n = J2(t), r = [];
  for (var s in t)
    s == "constructor" && (n || !T2.call(t, s)) || r.push(s);
  return r;
}
var K2 = q2, O2 = Yl, W2 = K2, P2 = kt;
function z2(t) {
  return P2(t) ? O2(t, !0) : W2(t);
}
var oi = z2, $2 = si, j2 = oi;
function Z2(t) {
  return $2(t, j2(t));
}
var X2 = Z2, Rg = ml, V2 = dr.exports, A0 = _l, e0 = ai, t0 = Gl, Gg = pr, Sg = mA, i0 = hb, r0 = ht.exports, n0 = Cr, a0 = le, s0 = Ll, o0 = Es, Ng = Ml, c0 = X2;
function g0(t, n, r, s, g, l, C) {
  var B = Ng(t, r), f = Ng(n, r), p = C.get(f);
  if (p) {
    Rg(t, r, p);
    return;
  }
  var E = l ? l(B, f, r + "", t, n, C) : void 0, u = E === void 0;
  if (u) {
    var w = Sg(f), _ = !w && r0(f), k = !w && !_ && o0(f);
    E = f, w || _ || k ? Sg(B) ? E = B : i0(B) ? E = e0(B) : _ ? (u = !1, E = V2(f, !0)) : k ? (u = !1, E = A0(f, !0)) : E = [] : s0(f) || Gg(f) ? (E = B, Gg(B) ? E = c0(B) : (!a0(B) || n0(B)) && (E = t0(f))) : u = !1;
  }
  u && (C.set(f, E), g(E, f, s, l, C), C.delete(f)), Rg(t, r, E);
}
var d0 = g0, l0 = Qr, I0 = ml, C0 = Fl, u0 = d0, B0 = le, Q0 = oi, f0 = Ml;
function Jl(t, n, r, s, g) {
  t !== n && C0(n, function(l, C) {
    if (g || (g = new l0()), B0(l))
      u0(t, n, C, r, Jl, s, g);
    else {
      var B = s ? s(f0(t, C), l, C + "", t, n, g) : void 0;
      B === void 0 && (B = l), I0(t, C, B);
    }
  }, Q0);
}
var E0 = Jl;
function p0(t) {
  return t;
}
var _t = p0;
function v0(t, n, r) {
  switch (r.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, r[0]);
    case 2:
      return t.call(n, r[0], r[1]);
    case 3:
      return t.call(n, r[0], r[1], r[2]);
  }
  return t.apply(n, r);
}
var ps = v0, y0 = ps, Lg = Math.max;
function h0(t, n, r) {
  return n = Lg(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var s = arguments, g = -1, l = Lg(s.length - n, 0), C = Array(l); ++g < l; )
      C[g] = s[n + g];
    g = -1;
    for (var B = Array(n + 1); ++g < n; )
      B[g] = s[g];
    return B[n] = r(C), y0(t, this, B);
  };
}
var xl = h0;
function w0(t) {
  return function() {
    return t;
  };
}
var b0 = w0, D0 = b0, Mg = Dl, m0 = _t, F0 = Mg ? function(t, n) {
  return Mg(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: D0(n),
    writable: !0
  });
} : m0, k0 = F0, _0 = 800, R0 = 16, G0 = Date.now;
function S0(t) {
  var n = 0, r = 0;
  return function() {
    var s = G0(), g = R0 - (s - r);
    if (r = s, g > 0) {
      if (++n >= _0)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
var Hl = S0, N0 = k0, L0 = Hl, M0 = L0(N0), vs = M0, U0 = _t, Y0 = xl, J0 = vs;
function x0(t, n) {
  return J0(Y0(t, n, U0), t + "");
}
var Tl = x0, H0 = ni, T0 = kt, q0 = yr, K0 = le;
function O0(t, n, r) {
  if (!K0(r))
    return !1;
  var s = typeof n;
  return (s == "number" ? T0(r) && q0(n, r.length) : s == "string" && n in r) ? H0(r[n], t) : !1;
}
var ql = O0, W0 = Tl, P0 = ql;
function z0(t) {
  return W0(function(n, r) {
    var s = -1, g = r.length, l = g > 1 ? r[g - 1] : void 0, C = g > 2 ? r[2] : void 0;
    for (l = t.length > 3 && typeof l == "function" ? (g--, l) : void 0, C && P0(r[0], r[1], C) && (l = g < 3 ? void 0 : l, g = 1), n = Object(n); ++s < g; ) {
      var B = r[s];
      B && t(n, B, s, l);
    }
    return n;
  });
}
var $0 = z0, j0 = E0, Z0 = $0, X0 = Z0(function(t, n, r) {
  j0(t, n, r);
}), Ug = X0, pt, Fe, sr, or, cr, Kl, Ol;
const HA = _e("c2pa:Downloader"), sa = _e("c2pa:Downloader:Cache");
class Be {
  constructor(n, r = {}) {
    Fe.set(this, void 0), sr.set(this, void 0), or.set(this, void 0), ii(this, Fe, { ..._A(Be, pt, "f", Kl), ...r }), ii(this, sr, n), ii(this, or, new At(_A(this, sr, "f"), _A(this, Fe, "f").inspectSize));
  }
  /**
   * Wrapper around `fetch` to download an asset
   *
   * @remarks
   * This has convenience logic for range requests
   *
   * @param url - The URL to fetch
   * @param fetchOptions - Options for this particular request
   */
  static async download(n, r = {}) {
    HA("Downloading", n);
    try {
      const s = _A(Be, pt, "f", Ol), g = Ug({}, s, r), l = g.rangeStart !== s.rangeStart || g.rangeEnd !== s.rangeEnd, C = [g.rangeStart, g.rangeEnd ?? ""].join("-"), B = l ? { headers: { range: `bytes=${C}` } } : null, f = await fetch(n, Ug({}, g.fetchConfig, B));
      if (f.ok)
        return f;
      throw new ug(n, f);
    } catch (s) {
      throw new ug(n, null, s);
    }
  }
  /**
   * This allows us to inspect the image to see if the header contains C2PA data
   *
   * @remarks
   * We will request a download to the server requesting the first `inspectSize` bytes. From there:
   * - if the server responds with a payload less than the content-length, we will inspect that chunk and
   *   download the rest if the content-type matches and that chunk contains metadata
   * - if it responds with a payload equal to or greater than the content-length, we will inspect that the
   *   content type matches, scan the chunk, and return the data
   * - we'll return `null` if the content-type is invalid or if CAI data does not exist
   *
   * @param url - The URL to fetch
   */
  async inspect(n) {
    HA("Inspecting", n);
    let r, s = null;
    const g = _A(this, Fe, "f").inspectSize > 0;
    if (g)
      try {
        r = await Be.download(n, {
          rangeEnd: _A(this, Fe, "f").inspectSize
        }), s = r.headers.get("content-type"), r.status === 206 ? HA("Successfully downloaded first part of url (supports range requests)", n, r) : HA("Successfully downloaded complete url (server does not support range requests)", n, r);
      } catch (p) {
        HA("Attempting to download with a range header failed, trying again without one", p);
      }
    else
      HA("inspectSize of 0 given, downloading entire file");
    if (!r)
      try {
        s = (await Be.download(n, {
          fetchConfig: {
            method: "HEAD"
          }
        })).headers.get("content-type"), HA("Performed HEAD request and got content-type", n, s);
      } catch {
        HA("HEAD request to check for content-type failed, downloading entire file");
      }
    if (s && !At.isValidMimeType(s))
      throw HA("Resource has invalid content type", s), new yl(s);
    r || (r = await Be.download(n));
    const l = await r.blob();
    if (!g)
      return HA("Skipping inspection due to disabling the config"), l;
    const C = await l.arrayBuffer(), { found: B } = await _A(this, or, "f").scanChunk(C);
    if (B)
      HA("C2PA metadata found for url", n);
    else
      return HA("No C2PA metadata found for url", n), null;
    if (r.status === 206 && C.byteLength === _A(this, Fe, "f").inspectSize + 1) {
      HA("Continuing download at offset %d", _A(this, Fe, "f").inspectSize);
      const E = await (await Be.download(n, {
        // We need to start the range at the next byte
        rangeStart: _A(this, Fe, "f").inspectSize + 1
      })).arrayBuffer();
      return HA("Successfully downloaded rest of file (%d bytes)", E.byteLength), new Blob([C, E], { type: l.type });
    }
    return l;
  }
  /**
   * Fetches a JSON payload and caches it, using the requested URL as the key
   *
   * @param url - The URL to fetch and cache
   */
  static async cachedGetJson(n) {
    if (!_A(this, pt, "f", cr).get(n)) {
      sa("No cache found for %s", n);
      const s = await (await Be.download(n, {
        fetchConfig: {
          credentials: "omit",
          headers: {
            Accept: "application/json"
          }
        }
      })).json();
      sa("Saving data for %s", n, s), _A(this, pt, "f", cr).set(n, s);
    }
    return sa("Returning cached data for %s", n), _A(this, pt, "f", cr).get(n);
  }
}
pt = Be, Fe = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap();
cr = { value: /* @__PURE__ */ new Map() };
Kl = { value: {
  inspectSize: 0
} };
Ol = { value: {
  rangeStart: 0,
  rangeEnd: void 0,
  fetchConfig: {}
} };
function V0(t) {
  for (var n = new Error(""), r = Object.keys(t), s = 0; s < r.length; s++)
    n[r[s]] = t[r[s]];
  return n;
}
function AD(t) {
  const n = new Worker(t);
  let r = !1;
  return {
    execute: async (C) => (n.postMessage(C), r = !0, new Promise((B, f) => {
      n.onmessage = function(p) {
        p.data.type === "success" ? B(p.data.data) : f(V0(p.data.error)), r = !1;
      }, n.onerror = function(p) {
        r = !1, f(p);
      };
    })),
    isWorking: () => r,
    terminate: () => n.terminate()
  };
}
function eD(t) {
  const n = [], r = [], s = () => {
    for (const B of n)
      if (!B.isWorking())
        return B;
    if (n.length < t.maxWorkers) {
      const B = AD(t.scriptSrc);
      return n.push(B), B;
    }
    return null;
  }, g = async () => {
    const B = s();
    if (!B)
      return;
    const f = r.pop();
    if (f)
      try {
        const p = await B.execute(f.request);
        f.resolve(p);
      } catch (p) {
        f.reject(p);
      }
  };
  return {
    execute: (B, f) => new Promise((p, E) => {
      const u = {
        request: {
          method: B,
          args: f
        },
        resolve: (w) => {
          p(w), g();
        },
        reject: (w) => {
          E(w), g();
        }
      };
      r.push(u), g();
    }),
    terminate: () => {
      n.forEach((B) => B.terminate());
    }
  };
}
const tD = _e("c2pa:workers");
async function iD(t) {
  const n = await fetch(t.scriptSrc);
  if (!n.ok)
    throw new Mv(t.scriptSrc, n);
  const r = await n.text();
  tD("Fetched worker from %s (%d bytes)", t.scriptSrc, r.length);
  const s = new Blob([r], { type: "application/javascript" }), g = URL.createObjectURL(s), l = eD({
    ...t,
    scriptSrc: g
  });
  return {
    ...{
      compileWasm: async (...B) => l.execute("compileWasm", B),
      getReport: async (...B) => l.execute("getReport", B),
      getReportFromAssetAndManifestBuffer: async (...B) => l.execute("getReportFromAssetAndManifestBuffer", B),
      scanInput: async (...B) => l.execute("scanInput", B)
    },
    dispose: () => (URL.revokeObjectURL(g), l.terminate())
  };
}
const oa = _e("c2pa:wasm");
async function rD(t, n) {
  const r = { "toolkit_bg.wasm": "sha512-XJTjRsnFDqtH9tCtsJtHn9UbmjDJ9idKdlRsM5N+QaGJ0b8DAU3e1AquERCNL/aVbqqWCzl+x1kKFNCKQQq5dw==" }, s = r == null ? void 0 : r["toolkit_bg.wasm"];
  oa("Fetching WASM binary from url %s", n, {
    expectedIntegrity: s
  });
  const l = await (await fetch(n, {
    integrity: s
  })).arrayBuffer();
  oa("Sending WASM binary buffer to worker for compilation", {
    size: l.byteLength
  });
  const C = await t.compileWasm(l);
  return oa("Compilation finished"), C;
}
function Rt(t) {
  return Object.prototype.toString.call(t);
}
function nD(t) {
  return Rt(t) === "[object Date]";
}
function aD(t) {
  return Rt(t) === "[object RegExp]";
}
function sD(t) {
  return Rt(t) === "[object Error]";
}
function oD(t) {
  return Rt(t) === "[object Boolean]";
}
function cD(t) {
  return Rt(t) === "[object Number]";
}
function gD(t) {
  return Rt(t) === "[object String]";
}
var Wl = Array.isArray || function(n) {
  return Object.prototype.toString.call(n) === "[object Array]";
};
function hr(t, n) {
  if (t.forEach)
    return t.forEach(n);
  for (var r = 0; r < t.length; r++)
    n(t[r], r, t);
}
var wr = Object.keys || function(n) {
  var r = [];
  for (var s in n)
    r.push(s);
  return r;
}, br = Object.prototype.hasOwnProperty || function(t, n) {
  return n in t;
};
function Pl(t) {
  if (typeof t == "object" && t !== null) {
    var n;
    if (Wl(t))
      n = [];
    else if (nD(t))
      n = new Date(t.getTime ? t.getTime() : t);
    else if (aD(t))
      n = new RegExp(t);
    else if (sD(t))
      n = { message: t.message };
    else if (oD(t) || cD(t) || gD(t))
      n = Object(t);
    else if (Object.create && Object.getPrototypeOf)
      n = Object.create(Object.getPrototypeOf(t));
    else if (t.constructor === Object)
      n = {};
    else {
      var r = t.constructor && t.constructor.prototype || t.__proto__ || {}, s = function() {
      };
      s.prototype = r, n = new s();
    }
    return hr(wr(t), function(g) {
      n[g] = t[g];
    }), n;
  }
  return t;
}
function zl(t, n, r) {
  var s = [], g = [], l = !0;
  return function C(B) {
    var f = r ? Pl(B) : B, p = {}, E = !0, u = {
      node: f,
      node_: B,
      path: [].concat(s),
      parent: g[g.length - 1],
      parents: g,
      key: s[s.length - 1],
      isRoot: s.length === 0,
      level: s.length,
      circular: null,
      update: function(k, N) {
        u.isRoot || (u.parent.node[u.key] = k), u.node = k, N && (E = !1);
      },
      delete: function(k) {
        delete u.parent.node[u.key], k && (E = !1);
      },
      remove: function(k) {
        Wl(u.parent.node) ? u.parent.node.splice(u.key, 1) : delete u.parent.node[u.key], k && (E = !1);
      },
      keys: null,
      before: function(k) {
        p.before = k;
      },
      after: function(k) {
        p.after = k;
      },
      pre: function(k) {
        p.pre = k;
      },
      post: function(k) {
        p.post = k;
      },
      stop: function() {
        l = !1;
      },
      block: function() {
        E = !1;
      }
    };
    if (!l)
      return u;
    function w() {
      if (typeof u.node == "object" && u.node !== null) {
        (!u.keys || u.node_ !== u.node) && (u.keys = wr(u.node)), u.isLeaf = u.keys.length === 0;
        for (var k = 0; k < g.length; k++)
          if (g[k].node_ === B) {
            u.circular = g[k];
            break;
          }
      } else
        u.isLeaf = !0, u.keys = null;
      u.notLeaf = !u.isLeaf, u.notRoot = !u.isRoot;
    }
    w();
    var _ = n.call(u, u.node);
    return _ !== void 0 && u.update && u.update(_), p.before && p.before.call(u, u.node), E && (typeof u.node == "object" && u.node !== null && !u.circular && (g.push(u), w(), hr(u.keys, function(k, N) {
      s.push(k), p.pre && p.pre.call(u, u.node[k], k);
      var R = C(u.node[k]);
      r && br.call(u.node, k) && (u.node[k] = R.node), R.isLast = N === u.keys.length - 1, R.isFirst = N === 0, p.post && p.post.call(u, R), s.pop();
    }), g.pop()), p.after && p.after.call(u, u.node)), u;
  }(t).node;
}
function ne(t) {
  this.value = t;
}
ne.prototype.get = function(t) {
  for (var n = this.value, r = 0; r < t.length; r++) {
    var s = t[r];
    if (!n || !br.call(n, s))
      return;
    n = n[s];
  }
  return n;
};
ne.prototype.has = function(t) {
  for (var n = this.value, r = 0; r < t.length; r++) {
    var s = t[r];
    if (!n || !br.call(n, s))
      return !1;
    n = n[s];
  }
  return !0;
};
ne.prototype.set = function(t, n) {
  for (var r = this.value, s = 0; s < t.length - 1; s++) {
    var g = t[s];
    br.call(r, g) || (r[g] = {}), r = r[g];
  }
  return r[t[s]] = n, n;
};
ne.prototype.map = function(t) {
  return zl(this.value, t, !0);
};
ne.prototype.forEach = function(t) {
  return this.value = zl(this.value, t, !1), this.value;
};
ne.prototype.reduce = function(t, n) {
  var r = arguments.length === 1, s = r ? this.value : n;
  return this.forEach(function(g) {
    (!this.isRoot || !r) && (s = t.call(this, s, g));
  }), s;
};
ne.prototype.paths = function() {
  var t = [];
  return this.forEach(function() {
    t.push(this.path);
  }), t;
};
ne.prototype.nodes = function() {
  var t = [];
  return this.forEach(function() {
    t.push(this.node);
  }), t;
};
ne.prototype.clone = function() {
  var t = [], n = [];
  return function r(s) {
    for (var g = 0; g < t.length; g++)
      if (t[g] === s)
        return n[g];
    if (typeof s == "object" && s !== null) {
      var l = Pl(s);
      return t.push(s), n.push(l), hr(wr(s), function(C) {
        l[C] = r(s[C]);
      }), t.pop(), n.pop(), l;
    }
    return s;
  }(this.value);
};
function $l(t) {
  return new ne(t);
}
hr(wr(ne.prototype), function(t) {
  $l[t] = function(n) {
    var r = [].slice.call(arguments, 1), s = new ne(n);
    return s[t].apply(s, r);
  };
});
var dD = $l;
function lD(t) {
  const n = t.sort((r, s) => ((r == null ? void 0 : r.instance) ?? 0) - ((s == null ? void 0 : s.instance) ?? 0));
  return {
    data: n,
    get: (r) => n.filter((s) => s.label === r)
  };
}
async function jl(t, n = "SHA-1") {
  const r = t instanceof ArrayBuffer ? t : await t.arrayBuffer(), s = await crypto.subtle.digest(n, r);
  return Array.from(new Uint8Array(s)).map((l) => l.toString(16).padStart(2, "0")).join("");
}
function ID(t, n) {
  var l;
  const { format: r, identifier: s } = n, g = (l = t.resources) == null ? void 0 : l[s];
  return g ? new Blob([Uint8Array.from(g)], {
    type: r
  }) : null;
}
function ys(t, n) {
  if (!t || !n)
    return null;
  const r = ID(t, n);
  return r ? {
    blob: r,
    contentType: r.type,
    hash: () => jl(r),
    getUrl: () => Zl(r)
  } : null;
}
function CD(t, n) {
  return {
    blob: t,
    contentType: n,
    hash: () => jl(t),
    getUrl: () => Zl(t)
  };
}
function uD(t) {
  return {
    contentType: void 0,
    getUrl: () => ({
      url: t,
      dispose: () => {
      }
    })
  };
}
function Zl(t) {
  const n = URL.createObjectURL(t);
  return {
    url: n,
    dispose: () => URL.revokeObjectURL(n)
  };
}
function BD(t, n) {
  return {
    title: t.title,
    format: t.format,
    documentId: t.document_id ?? null,
    instanceId: t.instance_id,
    provenance: t.provenance ?? null,
    hash: t.hash ?? null,
    isParent: t.relationship === "parentOf",
    validationStatus: t.validation_status ?? [],
    metadata: t.metadata ?? null,
    manifest: n ?? null,
    thumbnail: ys(t.resources, t.thumbnail)
  };
}
function QD(t, n) {
  return n ? n.map((r) => ({
    ...r,
    icon: r.icon ? ys(t, r.icon) : null
  })) : [];
}
function fD(t, n) {
  const r = t.ingredients.map((s) => BD(s, s.active_manifest ? n[s.active_manifest] : void 0));
  return {
    title: t.title,
    format: t.format,
    vendor: t.vendor ?? null,
    claimGenerator: t.claim_generator,
    claimGeneratorHints: t.claim_generator_hints ?? null,
    claimGeneratorInfo: QD(t.resources, t.claim_generator_info),
    instanceId: t.instance_id,
    signatureInfo: t.signature_info ?? null,
    credentials: t.credentials ?? [],
    ingredients: r,
    redactions: t.redactions ?? [],
    parent: null,
    thumbnail: ys(t.resources, t.thumbnail),
    assertions: lD(t.assertions)
  };
}
const ca = _e("c2pa:manifestStore"), Yg = "$serde_json::private::Number";
function ED(t) {
  return dD(t).forEach(function(n) {
    if (typeof n == "object" && n.constructor === Object && n.hasOwnProperty(Yg)) {
      const r = n[Yg];
      r > Number.MAX_SAFE_INTEGER ? this.update(BigInt(r)) : this.update(parseInt(r, 10));
    }
  });
}
function Xl(t) {
  const n = pD(ED(t));
  return {
    manifests: n,
    activeManifest: n[t.active_manifest],
    validationStatus: (t == null ? void 0 : t.validation_status) ?? []
  };
}
function pD(t) {
  var B, f;
  const { manifests: n, active_manifest: r } = t;
  ca("Received manifest store from toolkit", t);
  const s = [
    {
      data: n[r],
      label: r
    }
  ], g = [];
  for (; s.length; ) {
    const p = s.pop();
    g.unshift(p);
    const { data: E } = p;
    (B = E == null ? void 0 : E.ingredients) == null || B.forEach(({ active_manifest: u }) => {
      u && (t.manifests[u] ? s.push({
        data: t.manifests[u],
        label: u
      }) : ca("No manifest found for id", u));
    });
  }
  const l = g.reduce((p, E) => {
    const { data: u, label: w } = E;
    ca("Creating manifest with data", u);
    const _ = fD(u, p);
    return p[w] = _, p;
  }, {}), C = [l[r]];
  for (; C.length; ) {
    const p = C.pop();
    (f = p.ingredients) == null || f.forEach(({ manifest: E }) => {
      if (E) {
        const u = E;
        u.parent = p, C.push(u);
      }
    });
  }
  return l;
}
async function vD(t, n, r) {
  const { blob: s, metadata: g } = await yD(t, n, {});
  if (!s)
    return {
      thumbnail: uD(n),
      metadata: { ...g, ...r },
      type: "",
      blob: null,
      arrayBuffer: async () => new ArrayBuffer(0)
    };
  if (!At.isValidMimeType(s.type))
    throw new yl(s.type);
  return {
    thumbnail: CD(s, s.type),
    metadata: { ...g, ...r },
    type: s.type,
    blob: s,
    arrayBuffer: () => s.arrayBuffer()
  };
}
async function yD(t, n, r) {
  if (n instanceof Blob) {
    const s = {
      ...r,
      filename: n instanceof File ? n.name : void 0
    };
    return {
      blob: n,
      metadata: s
    };
  } else {
    const s = typeof n == "string" ? n : n.src, g = await t.inspect(s);
    let l = s;
    try {
      const { pathname: B } = new URL(s);
      l = B;
    } catch {
    }
    const C = l.split("/").pop() ?? "";
    return {
      blob: g,
      metadata: { ...r, filename: C }
    };
  }
}
const yt = _e("c2pa"), ga = _e("c2pa:task");
function hD(t) {
  if (!t)
    return;
  const n = vt.exports.reduce(t, (r, s, g) => ({
    ...r,
    [vt.exports.snakeCase(g)]: vt.exports.mapKeys(s, (l, C) => vt.exports.snakeCase(C))
  }), {});
  return JSON.stringify(n);
}
async function nM(t) {
  let n = 0;
  yt("Creating c2pa with config", t), Jv();
  const r = await iD({
    scriptSrc: t.workerSrc,
    maxWorkers: navigator.hardwareConcurrency || 4
  }), s = new Be(r, t.downloaderOptions), g = t.wasmSrc instanceof WebAssembly.Module ? t.wasmSrc : await rD(r, t.wasmSrc), l = async (B, f) => {
    const p = ++n;
    ga("[%s] Reading from input", p, B);
    const E = await vD(s, B), u = hD((f == null ? void 0 : f.settings) ?? t.settings);
    if (ga("[%s] Processing input", p, B, {
      settings: u && JSON.parse(u)
    }), !E.blob)
      return {
        manifestStore: null,
        source: E
      };
    const w = await E.arrayBuffer();
    try {
      const _ = await r.getReport(g, w, E.type, u);
      return ga("[%s] Received worker result", p, _), {
        manifestStore: Xl(_),
        source: E
      };
    } catch (_) {
      return {
        manifestStore: await bD(E, _, r, g, t, u),
        source: E
      };
    }
  };
  return {
    read: l,
    readAll: async (B, f) => Promise.all(B.map((p) => l(p, f))),
    dispose: () => r.dispose()
  };
}
const wD = [
  // No embedded or remote provenance found in the asset
  /^C2pa\(ProvenanceMissing\)$/,
  // Could not parse JUMBF data
  /^C2pa\(JumbfParseError\([^\)]+\)\)$/,
  // JUMBF or required box not found
  /^C2pa\(Jumbf(?:Box)?NotFound\)$/
];
function bD(t, n, r, s, g, l) {
  const C = g.fetchRemoteManifests ?? !0;
  if (n.name === "Toolkit(RemoteManifestUrl)")
    return C && n.url ? DD(t, n.url, r, s, l) : null;
  if (wD.some((B) => B.test(n.name)))
    return yt("Missing or invalid provenance data found", { error: n.name }), null;
  throw n;
}
async function DD(t, n, r, s, g) {
  try {
    const l = new URL(n);
    if (yt("Fetching remote manifest from", l), !t.blob)
      throw yt("No blob found on source, skipping remote manifest loading", t), new vl();
    const f = await (await (await fetch(l.toString())).blob()).arrayBuffer(), p = await r.getReportFromAssetAndManifestBuffer(s, f, t.blob, g);
    return Xl(p);
  } catch (l) {
    if (l instanceof TypeError)
      return yt("Invalid URL given, skipping remote manifest loading", n), null;
    throw yt("Error loading remote manifest from", n, l), l;
  }
}
function aM(t) {
  var s;
  const [n] = t.assertions.get("stds.schema-org.CreativeWork");
  return n ? ((s = n.data.author) == null ? void 0 : s.find((g) => !g.hasOwnProperty("@id"))) ?? null : null;
}
var mD = { exports: {} };
function FD(t, n) {
  for (var r = -1, s = t == null ? 0 : t.length; ++r < s && n(t[r], r, t) !== !1; )
    ;
  return t;
}
var Dr = FD, kD = Rl, _D = kD(Object.keys, Object), RD = _D, GD = Qs, SD = RD, ND = Object.prototype, LD = ND.hasOwnProperty;
function MD(t) {
  if (!GD(t))
    return SD(t);
  var n = [];
  for (var r in Object(t))
    LD.call(t, r) && r != "constructor" && n.push(r);
  return n;
}
var Vl = MD, UD = Yl, YD = Vl, JD = kt;
function xD(t) {
  return JD(t) ? UD(t) : YD(t);
}
var ci = xD, HD = Fl, TD = ci;
function qD(t, n) {
  return t && HD(t, n, TD);
}
var AI = qD, KD = kt;
function OD(t, n) {
  return function(r, s) {
    if (r == null)
      return r;
    if (!KD(r))
      return t(r, s);
    for (var g = r.length, l = n ? g : -1, C = Object(r); (n ? l-- : ++l < g) && s(C[l], l, C) !== !1; )
      ;
    return r;
  };
}
var WD = OD, PD = AI, zD = WD, $D = zD(PD), eI = $D, jD = _t;
function ZD(t) {
  return typeof t == "function" ? t : jD;
}
var XD = ZD, VD = Dr, Am = eI, em = XD, tm = mA;
function im(t, n) {
  var r = tm(t) ? VD : Am;
  return r(t, em(n));
}
var rm = im;
(function(t) {
  t.exports = rm;
})(mD);
var tI = {};
(function(t) {
  t.aliasToReal = {
    // Lodash aliases.
    each: "forEach",
    eachRight: "forEachRight",
    entries: "toPairs",
    entriesIn: "toPairsIn",
    extend: "assignIn",
    extendAll: "assignInAll",
    extendAllWith: "assignInAllWith",
    extendWith: "assignInWith",
    first: "head",
    // Methods that are curried variants of others.
    conforms: "conformsTo",
    matches: "isMatch",
    property: "get",
    // Ramda aliases.
    __: "placeholder",
    F: "stubFalse",
    T: "stubTrue",
    all: "every",
    allPass: "overEvery",
    always: "constant",
    any: "some",
    anyPass: "overSome",
    apply: "spread",
    assoc: "set",
    assocPath: "set",
    complement: "negate",
    compose: "flowRight",
    contains: "includes",
    dissoc: "unset",
    dissocPath: "unset",
    dropLast: "dropRight",
    dropLastWhile: "dropRightWhile",
    equals: "isEqual",
    identical: "eq",
    indexBy: "keyBy",
    init: "initial",
    invertObj: "invert",
    juxt: "over",
    omitAll: "omit",
    nAry: "ary",
    path: "get",
    pathEq: "matchesProperty",
    pathOr: "getOr",
    paths: "at",
    pickAll: "pick",
    pipe: "flow",
    pluck: "map",
    prop: "get",
    propEq: "matchesProperty",
    propOr: "getOr",
    props: "at",
    symmetricDifference: "xor",
    symmetricDifferenceBy: "xorBy",
    symmetricDifferenceWith: "xorWith",
    takeLast: "takeRight",
    takeLastWhile: "takeRightWhile",
    unapply: "rest",
    unnest: "flatten",
    useWith: "overArgs",
    where: "conformsTo",
    whereEq: "isMatch",
    zipObj: "zipObject"
  }, t.aryMethod = {
    1: [
      "assignAll",
      "assignInAll",
      "attempt",
      "castArray",
      "ceil",
      "create",
      "curry",
      "curryRight",
      "defaultsAll",
      "defaultsDeepAll",
      "floor",
      "flow",
      "flowRight",
      "fromPairs",
      "invert",
      "iteratee",
      "memoize",
      "method",
      "mergeAll",
      "methodOf",
      "mixin",
      "nthArg",
      "over",
      "overEvery",
      "overSome",
      "rest",
      "reverse",
      "round",
      "runInContext",
      "spread",
      "template",
      "trim",
      "trimEnd",
      "trimStart",
      "uniqueId",
      "words",
      "zipAll"
    ],
    2: [
      "add",
      "after",
      "ary",
      "assign",
      "assignAllWith",
      "assignIn",
      "assignInAllWith",
      "at",
      "before",
      "bind",
      "bindAll",
      "bindKey",
      "chunk",
      "cloneDeepWith",
      "cloneWith",
      "concat",
      "conformsTo",
      "countBy",
      "curryN",
      "curryRightN",
      "debounce",
      "defaults",
      "defaultsDeep",
      "defaultTo",
      "delay",
      "difference",
      "divide",
      "drop",
      "dropRight",
      "dropRightWhile",
      "dropWhile",
      "endsWith",
      "eq",
      "every",
      "filter",
      "find",
      "findIndex",
      "findKey",
      "findLast",
      "findLastIndex",
      "findLastKey",
      "flatMap",
      "flatMapDeep",
      "flattenDepth",
      "forEach",
      "forEachRight",
      "forIn",
      "forInRight",
      "forOwn",
      "forOwnRight",
      "get",
      "groupBy",
      "gt",
      "gte",
      "has",
      "hasIn",
      "includes",
      "indexOf",
      "intersection",
      "invertBy",
      "invoke",
      "invokeMap",
      "isEqual",
      "isMatch",
      "join",
      "keyBy",
      "lastIndexOf",
      "lt",
      "lte",
      "map",
      "mapKeys",
      "mapValues",
      "matchesProperty",
      "maxBy",
      "meanBy",
      "merge",
      "mergeAllWith",
      "minBy",
      "multiply",
      "nth",
      "omit",
      "omitBy",
      "overArgs",
      "pad",
      "padEnd",
      "padStart",
      "parseInt",
      "partial",
      "partialRight",
      "partition",
      "pick",
      "pickBy",
      "propertyOf",
      "pull",
      "pullAll",
      "pullAt",
      "random",
      "range",
      "rangeRight",
      "rearg",
      "reject",
      "remove",
      "repeat",
      "restFrom",
      "result",
      "sampleSize",
      "some",
      "sortBy",
      "sortedIndex",
      "sortedIndexOf",
      "sortedLastIndex",
      "sortedLastIndexOf",
      "sortedUniqBy",
      "split",
      "spreadFrom",
      "startsWith",
      "subtract",
      "sumBy",
      "take",
      "takeRight",
      "takeRightWhile",
      "takeWhile",
      "tap",
      "throttle",
      "thru",
      "times",
      "trimChars",
      "trimCharsEnd",
      "trimCharsStart",
      "truncate",
      "union",
      "uniqBy",
      "uniqWith",
      "unset",
      "unzipWith",
      "without",
      "wrap",
      "xor",
      "zip",
      "zipObject",
      "zipObjectDeep"
    ],
    3: [
      "assignInWith",
      "assignWith",
      "clamp",
      "differenceBy",
      "differenceWith",
      "findFrom",
      "findIndexFrom",
      "findLastFrom",
      "findLastIndexFrom",
      "getOr",
      "includesFrom",
      "indexOfFrom",
      "inRange",
      "intersectionBy",
      "intersectionWith",
      "invokeArgs",
      "invokeArgsMap",
      "isEqualWith",
      "isMatchWith",
      "flatMapDepth",
      "lastIndexOfFrom",
      "mergeWith",
      "orderBy",
      "padChars",
      "padCharsEnd",
      "padCharsStart",
      "pullAllBy",
      "pullAllWith",
      "rangeStep",
      "rangeStepRight",
      "reduce",
      "reduceRight",
      "replace",
      "set",
      "slice",
      "sortedIndexBy",
      "sortedLastIndexBy",
      "transform",
      "unionBy",
      "unionWith",
      "update",
      "xorBy",
      "xorWith",
      "zipWith"
    ],
    4: [
      "fill",
      "setWith",
      "updateWith"
    ]
  }, t.aryRearg = {
    2: [1, 0],
    3: [2, 0, 1],
    4: [3, 2, 0, 1]
  }, t.iterateeAry = {
    dropRightWhile: 1,
    dropWhile: 1,
    every: 1,
    filter: 1,
    find: 1,
    findFrom: 1,
    findIndex: 1,
    findIndexFrom: 1,
    findKey: 1,
    findLast: 1,
    findLastFrom: 1,
    findLastIndex: 1,
    findLastIndexFrom: 1,
    findLastKey: 1,
    flatMap: 1,
    flatMapDeep: 1,
    flatMapDepth: 1,
    forEach: 1,
    forEachRight: 1,
    forIn: 1,
    forInRight: 1,
    forOwn: 1,
    forOwnRight: 1,
    map: 1,
    mapKeys: 1,
    mapValues: 1,
    partition: 1,
    reduce: 2,
    reduceRight: 2,
    reject: 1,
    remove: 1,
    some: 1,
    takeRightWhile: 1,
    takeWhile: 1,
    times: 1,
    transform: 2
  }, t.iterateeRearg = {
    mapKeys: [1],
    reduceRight: [1, 0]
  }, t.methodRearg = {
    assignInAllWith: [1, 0],
    assignInWith: [1, 2, 0],
    assignAllWith: [1, 0],
    assignWith: [1, 2, 0],
    differenceBy: [1, 2, 0],
    differenceWith: [1, 2, 0],
    getOr: [2, 1, 0],
    intersectionBy: [1, 2, 0],
    intersectionWith: [1, 2, 0],
    isEqualWith: [1, 2, 0],
    isMatchWith: [2, 1, 0],
    mergeAllWith: [1, 0],
    mergeWith: [1, 2, 0],
    padChars: [2, 1, 0],
    padCharsEnd: [2, 1, 0],
    padCharsStart: [2, 1, 0],
    pullAllBy: [2, 1, 0],
    pullAllWith: [2, 1, 0],
    rangeStep: [1, 2, 0],
    rangeStepRight: [1, 2, 0],
    setWith: [3, 1, 2, 0],
    sortedIndexBy: [2, 1, 0],
    sortedLastIndexBy: [2, 1, 0],
    unionBy: [1, 2, 0],
    unionWith: [1, 2, 0],
    updateWith: [3, 1, 2, 0],
    xorBy: [1, 2, 0],
    xorWith: [1, 2, 0],
    zipWith: [1, 2, 0]
  }, t.methodSpread = {
    assignAll: { start: 0 },
    assignAllWith: { start: 0 },
    assignInAll: { start: 0 },
    assignInAllWith: { start: 0 },
    defaultsAll: { start: 0 },
    defaultsDeepAll: { start: 0 },
    invokeArgs: { start: 2 },
    invokeArgsMap: { start: 2 },
    mergeAll: { start: 0 },
    mergeAllWith: { start: 0 },
    partial: { start: 1 },
    partialRight: { start: 1 },
    without: { start: 1 },
    zipAll: { start: 0 }
  }, t.mutate = {
    array: {
      fill: !0,
      pull: !0,
      pullAll: !0,
      pullAllBy: !0,
      pullAllWith: !0,
      pullAt: !0,
      remove: !0,
      reverse: !0
    },
    object: {
      assign: !0,
      assignAll: !0,
      assignAllWith: !0,
      assignIn: !0,
      assignInAll: !0,
      assignInAllWith: !0,
      assignInWith: !0,
      assignWith: !0,
      defaults: !0,
      defaultsAll: !0,
      defaultsDeep: !0,
      defaultsDeepAll: !0,
      merge: !0,
      mergeAll: !0,
      mergeAllWith: !0,
      mergeWith: !0
    },
    set: {
      set: !0,
      setWith: !0,
      unset: !0,
      update: !0,
      updateWith: !0
    }
  }, t.realToAlias = function() {
    var n = Object.prototype.hasOwnProperty, r = t.aliasToReal, s = {};
    for (var g in r) {
      var l = r[g];
      n.call(s, l) ? s[l].push(g) : s[l] = [g];
    }
    return s;
  }(), t.remap = {
    assignAll: "assign",
    assignAllWith: "assignWith",
    assignInAll: "assignIn",
    assignInAllWith: "assignInWith",
    curryN: "curry",
    curryRightN: "curryRight",
    defaultsAll: "defaults",
    defaultsDeepAll: "defaultsDeep",
    findFrom: "find",
    findIndexFrom: "findIndex",
    findLastFrom: "findLast",
    findLastIndexFrom: "findLastIndex",
    getOr: "get",
    includesFrom: "includes",
    indexOfFrom: "indexOf",
    invokeArgs: "invoke",
    invokeArgsMap: "invokeMap",
    lastIndexOfFrom: "lastIndexOf",
    mergeAll: "merge",
    mergeAllWith: "mergeWith",
    padChars: "pad",
    padCharsEnd: "padEnd",
    padCharsStart: "padStart",
    propertyOf: "get",
    rangeStep: "range",
    rangeStepRight: "rangeRight",
    restFrom: "rest",
    spreadFrom: "spread",
    trimChars: "trim",
    trimCharsEnd: "trimEnd",
    trimCharsStart: "trimStart",
    zipAll: "zip"
  }, t.skipFixed = {
    castArray: !0,
    flow: !0,
    flowRight: !0,
    iteratee: !0,
    mixin: !0,
    rearg: !0,
    runInContext: !0
  }, t.skipRearg = {
    add: !0,
    assign: !0,
    assignIn: !0,
    bind: !0,
    bindKey: !0,
    concat: !0,
    difference: !0,
    divide: !0,
    eq: !0,
    gt: !0,
    gte: !0,
    isEqual: !0,
    lt: !0,
    lte: !0,
    matchesProperty: !0,
    merge: !0,
    multiply: !0,
    overArgs: !0,
    partial: !0,
    partialRight: !0,
    propertyOf: !0,
    random: !0,
    range: !0,
    rangeRight: !0,
    subtract: !0,
    zip: !0,
    zipObject: !0,
    zipObjectDeep: !0
  };
})(tI);
var da, Jg;
function gi() {
  return Jg || (Jg = 1, da = {}), da;
}
var pA = tI, nm = gi(), xg = Array.prototype.push;
function am(t, n) {
  return n == 2 ? function(r, s) {
    return t.apply(void 0, arguments);
  } : function(r) {
    return t.apply(void 0, arguments);
  };
}
function la(t, n) {
  return n == 2 ? function(r, s) {
    return t(r, s);
  } : function(r) {
    return t(r);
  };
}
function Hg(t) {
  for (var n = t ? t.length : 0, r = Array(n); n--; )
    r[n] = t[n];
  return r;
}
function sm(t) {
  return function(n) {
    return t({}, n);
  };
}
function om(t, n) {
  return function() {
    for (var r = arguments.length, s = r - 1, g = Array(r); r--; )
      g[r] = arguments[r];
    var l = g[n], C = g.slice(0, n);
    return l && xg.apply(C, l), n != s && xg.apply(C, g.slice(n + 1)), t.apply(this, C);
  };
}
function Ia(t, n) {
  return function() {
    var r = arguments.length;
    if (r) {
      for (var s = Array(r); r--; )
        s[r] = arguments[r];
      var g = s[0] = n.apply(void 0, s);
      return t.apply(void 0, s), g;
    }
  };
}
function ss(t, n, r, s) {
  var g = typeof n == "function", l = n === Object(n);
  if (l && (s = r, r = n, n = void 0), r == null)
    throw new TypeError();
  s || (s = {});
  var C = {
    cap: "cap" in s ? s.cap : !0,
    curry: "curry" in s ? s.curry : !0,
    fixed: "fixed" in s ? s.fixed : !0,
    immutable: "immutable" in s ? s.immutable : !0,
    rearg: "rearg" in s ? s.rearg : !0
  }, B = g ? r : nm, f = "curry" in s && s.curry, p = "fixed" in s && s.fixed, E = "rearg" in s && s.rearg, u = g ? r.runInContext() : void 0, w = g ? r : {
    ary: t.ary,
    assign: t.assign,
    clone: t.clone,
    curry: t.curry,
    forEach: t.forEach,
    isArray: t.isArray,
    isError: t.isError,
    isFunction: t.isFunction,
    isWeakMap: t.isWeakMap,
    iteratee: t.iteratee,
    keys: t.keys,
    rearg: t.rearg,
    toInteger: t.toInteger,
    toPath: t.toPath
  }, _ = w.ary, k = w.assign, N = w.clone, R = w.curry, M = w.forEach, x = w.isArray, eA = w.isError, AA = w.isFunction, dA = w.isWeakMap, QA = w.keys, CA = w.rearg, vA = w.toInteger, xe = w.toPath, Ii = QA(pA.aryMethod), _r = {
    castArray: function(Y) {
      return function() {
        var S = arguments[0];
        return x(S) ? Y(Hg(S)) : Y.apply(void 0, arguments);
      };
    },
    iteratee: function(Y) {
      return function() {
        var S = arguments[0], U = arguments[1], K = Y(S, U), z = K.length;
        return C.cap && typeof U == "number" ? (U = U > 2 ? U - 2 : 1, z && z <= U ? K : la(K, U)) : K;
      };
    },
    mixin: function(Y) {
      return function(S) {
        var U = this;
        if (!AA(U))
          return Y(U, Object(S));
        var K = [];
        return M(QA(S), function(z) {
          AA(S[z]) && K.push([z, U.prototype[z]]);
        }), Y(U, Object(S)), M(K, function(z) {
          var hA = z[1];
          AA(hA) ? U.prototype[z[0]] = hA : delete U.prototype[z[0]];
        }), U;
      };
    },
    nthArg: function(Y) {
      return function(S) {
        var U = S < 0 ? 1 : vA(S) + 1;
        return R(Y(S), U);
      };
    },
    rearg: function(Y) {
      return function(S, U) {
        var K = U ? U.length : 0;
        return R(Y(S, U), K);
      };
    },
    runInContext: function(Y) {
      return function(S) {
        return ss(t, Y(S), s);
      };
    }
  };
  function Rr(Y, S) {
    if (C.cap) {
      var U = pA.iterateeRearg[Y];
      if (U)
        return rt(S, U);
      var K = !g && pA.iterateeAry[Y];
      if (K)
        return Nr(S, K);
    }
    return S;
  }
  function Gr(Y, S, U) {
    return f || C.curry && U > 1 ? R(S, U) : S;
  }
  function Nt(Y, S, U) {
    if (C.fixed && (p || !pA.skipFixed[Y])) {
      var K = pA.methodSpread[Y], z = K && K.start;
      return z === void 0 ? _(S, U) : om(S, z);
    }
    return S;
  }
  function Ci(Y, S, U) {
    return C.rearg && U > 1 && (E || !pA.skipRearg[Y]) ? CA(S, pA.methodRearg[Y] || pA.aryRearg[U]) : S;
  }
  function Sr(Y, S) {
    S = xe(S);
    for (var U = -1, K = S.length, z = K - 1, hA = N(Object(Y)), GA = hA; GA != null && ++U < K; ) {
      var wA = S[U], KA = GA[wA];
      KA != null && !(AA(KA) || eA(KA) || dA(KA)) && (GA[wA] = N(U == z ? KA : Object(KA))), GA = GA[wA];
    }
    return hA;
  }
  function it(Y) {
    return RA.runInContext.convert(Y)(void 0);
  }
  function Qe(Y, S) {
    var U = pA.aliasToReal[Y] || Y, K = pA.remap[U] || U, z = s;
    return function(hA) {
      var GA = g ? u : w, wA = g ? u[K] : S, KA = k(k({}, z), hA);
      return ss(GA, U, wA, KA);
    };
  }
  function Nr(Y, S) {
    return qA(Y, function(U) {
      return typeof U == "function" ? la(U, S) : U;
    });
  }
  function rt(Y, S) {
    return qA(Y, function(U) {
      var K = S.length;
      return am(CA(la(U, K), S), K);
    });
  }
  function qA(Y, S) {
    return function() {
      var U = arguments.length;
      if (!U)
        return Y();
      for (var K = Array(U); U--; )
        K[U] = arguments[U];
      var z = C.rearg ? 0 : U - 1;
      return K[z] = S(K[z]), Y.apply(void 0, K);
    };
  }
  function ui(Y, S, U) {
    var K, z = pA.aliasToReal[Y] || Y, hA = S, GA = _r[z];
    return GA ? hA = GA(S) : C.immutable && (pA.mutate.array[z] ? hA = Ia(S, Hg) : pA.mutate.object[z] ? hA = Ia(S, sm(S)) : pA.mutate.set[z] && (hA = Ia(S, Sr))), M(Ii, function(wA) {
      return M(pA.aryMethod[wA], function(KA) {
        if (z == KA) {
          var MA = pA.methodSpread[z], Te = MA && MA.afterRearg;
          return K = Te ? Nt(z, Ci(z, hA, wA), wA) : Ci(z, Nt(z, hA, wA), wA), K = Rr(z, K), K = Gr(z, K, wA), !1;
        }
      }), !K;
    }), K || (K = hA), K == S && (K = f ? R(K, 1) : function() {
      return S.apply(this, arguments);
    }), K.convert = Qe(z, S), K.placeholder = S.placeholder = U, K;
  }
  if (!l)
    return ui(n, r, B);
  var RA = r, He = [];
  return M(Ii, function(Y) {
    M(pA.aryMethod[Y], function(S) {
      var U = RA[pA.remap[S] || S];
      U && He.push([S, ui(S, U, RA)]);
    });
  }), M(QA(RA), function(Y) {
    var S = RA[Y];
    if (typeof S == "function") {
      for (var U = He.length; U--; )
        if (He[U][0] == Y)
          return;
      S.convert = Qe(Y, S), He.push([Y, S]);
    }
  }), M(He, function(Y) {
    RA[Y[0]] = Y[1];
  }), RA.convert = it, RA.placeholder = RA, M(QA(RA), function(Y) {
    M(pA.realToAlias[Y] || [], function(S) {
      RA[S] = RA[Y];
    });
  }), RA;
}
var cm = ss, gm = tt, dm = TA, lm = gm(dm, "WeakMap"), iI = lm, Ca, Tg;
function rI() {
  if (Tg)
    return Ca;
  Tg = 1;
  var t = iI, n = t && new t();
  return Ca = n, Ca;
}
var Im = _t, qg = rI(), Cm = qg ? function(t, n) {
  return qg.set(t, n), t;
} : Im, nI = Cm, um = Er, Bm = le;
function Qm(t) {
  return function() {
    var n = arguments;
    switch (n.length) {
      case 0:
        return new t();
      case 1:
        return new t(n[0]);
      case 2:
        return new t(n[0], n[1]);
      case 3:
        return new t(n[0], n[1], n[2]);
      case 4:
        return new t(n[0], n[1], n[2], n[3]);
      case 5:
        return new t(n[0], n[1], n[2], n[3], n[4]);
      case 6:
        return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
      case 7:
        return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
    }
    var r = um(t.prototype), s = t.apply(r, n);
    return Bm(s) ? s : r;
  };
}
var mr = Qm, fm = mr, Em = TA, pm = 1;
function vm(t, n, r) {
  var s = n & pm, g = fm(t);
  function l() {
    var C = this && this !== Em && this instanceof l ? g : t;
    return C.apply(s ? r : this, arguments);
  }
  return l;
}
var ym = vm, hm = Math.max;
function wm(t, n, r, s) {
  for (var g = -1, l = t.length, C = r.length, B = -1, f = n.length, p = hm(l - C, 0), E = Array(f + p), u = !s; ++B < f; )
    E[B] = n[B];
  for (; ++g < C; )
    (u || g < l) && (E[r[g]] = t[g]);
  for (; p--; )
    E[B++] = t[g++];
  return E;
}
var aI = wm, bm = Math.max;
function Dm(t, n, r, s) {
  for (var g = -1, l = t.length, C = -1, B = r.length, f = -1, p = n.length, E = bm(l - B, 0), u = Array(E + p), w = !s; ++g < E; )
    u[g] = t[g];
  for (var _ = g; ++f < p; )
    u[_ + f] = n[f];
  for (; ++C < B; )
    (w || g < l) && (u[_ + r[C]] = t[g++]);
  return u;
}
var sI = Dm;
function mm(t, n) {
  for (var r = t.length, s = 0; r--; )
    t[r] === n && ++s;
  return s;
}
var Fm = mm, ua, Kg;
function hs() {
  if (Kg)
    return ua;
  Kg = 1;
  function t() {
  }
  return ua = t, ua;
}
var Ba, Og;
function ws() {
  if (Og)
    return Ba;
  Og = 1;
  var t = Er, n = hs(), r = 4294967295;
  function s(g) {
    this.__wrapped__ = g, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = r, this.__views__ = [];
  }
  return s.prototype = t(n.prototype), s.prototype.constructor = s, Ba = s, Ba;
}
var Qa, Wg;
function oI() {
  if (Wg)
    return Qa;
  Wg = 1;
  function t() {
  }
  return Qa = t, Qa;
}
var fa, Pg;
function bs() {
  if (Pg)
    return fa;
  Pg = 1;
  var t = rI(), n = oI(), r = t ? function(s) {
    return t.get(s);
  } : n;
  return fa = r, fa;
}
var Ea, zg;
function km() {
  if (zg)
    return Ea;
  zg = 1;
  var t = {};
  return Ea = t, Ea;
}
var pa, $g;
function cI() {
  if ($g)
    return pa;
  $g = 1;
  var t = km(), n = Object.prototype, r = n.hasOwnProperty;
  function s(g) {
    for (var l = g.name + "", C = t[l], B = r.call(t, l) ? C.length : 0; B--; ) {
      var f = C[B], p = f.func;
      if (p == null || p == g)
        return f.name;
    }
    return l;
  }
  return pa = s, pa;
}
var va, jg;
function Ds() {
  if (jg)
    return va;
  jg = 1;
  var t = Er, n = hs();
  function r(s, g) {
    this.__wrapped__ = s, this.__actions__ = [], this.__chain__ = !!g, this.__index__ = 0, this.__values__ = void 0;
  }
  return r.prototype = t(n.prototype), r.prototype.constructor = r, va = r, va;
}
var ya, Zg;
function _m() {
  if (Zg)
    return ya;
  Zg = 1;
  var t = ws(), n = Ds(), r = ai;
  function s(g) {
    if (g instanceof t)
      return g.clone();
    var l = new n(g.__wrapped__, g.__chain__);
    return l.__actions__ = r(g.__actions__), l.__index__ = g.__index__, l.__values__ = g.__values__, l;
  }
  return ya = s, ya;
}
var ha, Xg;
function Rm() {
  if (Xg)
    return ha;
  Xg = 1;
  var t = ws(), n = Ds(), r = hs(), s = mA, g = ae, l = _m(), C = Object.prototype, B = C.hasOwnProperty;
  function f(p) {
    if (g(p) && !s(p) && !(p instanceof t)) {
      if (p instanceof n)
        return p;
      if (B.call(p, "__wrapped__"))
        return l(p);
    }
    return new n(p);
  }
  return f.prototype = r.prototype, f.prototype.constructor = f, ha = f, ha;
}
var wa, Vg;
function gI() {
  if (Vg)
    return wa;
  Vg = 1;
  var t = ws(), n = bs(), r = cI(), s = Rm();
  function g(l) {
    var C = r(l), B = s[C];
    if (typeof B != "function" || !(C in t.prototype))
      return !1;
    if (l === B)
      return !0;
    var f = n(B);
    return !!f && l === f[0];
  }
  return wa = g, wa;
}
var Gm = nI, Sm = Hl, Nm = Sm(Gm), dI = Nm, Lm = /\{\n\/\* \[wrapped with (.+)\] \*/, Mm = /,? & /;
function Um(t) {
  var n = t.match(Lm);
  return n ? n[1].split(Mm) : [];
}
var Ym = Um, Jm = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function xm(t, n) {
  var r = n.length;
  if (!r)
    return t;
  var s = r - 1;
  return n[s] = (r > 1 ? "& " : "") + n[s], n = n.join(r > 2 ? ", " : " "), t.replace(Jm, `{
/* [wrapped with ` + n + `] */
`);
}
var Hm = xm, ba, Ad;
function Tm() {
  if (Ad)
    return ba;
  Ad = 1;
  function t(n, r, s, g) {
    for (var l = n.length, C = s + (g ? 1 : -1); g ? C-- : ++C < l; )
      if (r(n[C], C, n))
        return C;
    return -1;
  }
  return ba = t, ba;
}
var Da, ed;
function qm() {
  if (ed)
    return Da;
  ed = 1;
  function t(n) {
    return n !== n;
  }
  return Da = t, Da;
}
var ma, td;
function Km() {
  if (td)
    return ma;
  td = 1;
  function t(n, r, s) {
    for (var g = s - 1, l = n.length; ++g < l; )
      if (n[g] === r)
        return g;
    return -1;
  }
  return ma = t, ma;
}
var Fa, id;
function Om() {
  if (id)
    return Fa;
  id = 1;
  var t = Tm(), n = qm(), r = Km();
  function s(g, l, C) {
    return l === l ? r(g, l, C) : t(g, n, C);
  }
  return Fa = s, Fa;
}
var ka, rd;
function lI() {
  if (rd)
    return ka;
  rd = 1;
  var t = Om();
  function n(r, s) {
    var g = r == null ? 0 : r.length;
    return !!g && t(r, s, 0) > -1;
  }
  return ka = n, ka;
}
var Wm = Dr, Pm = lI(), zm = 1, $m = 2, jm = 8, Zm = 16, Xm = 32, Vm = 64, AF = 128, eF = 256, tF = 512, iF = [
  ["ary", AF],
  ["bind", zm],
  ["bindKey", $m],
  ["curry", jm],
  ["curryRight", Zm],
  ["flip", tF],
  ["partial", Xm],
  ["partialRight", Vm],
  ["rearg", eF]
];
function rF(t, n) {
  return Wm(iF, function(r) {
    var s = "_." + r[0];
    n & r[1] && !Pm(t, s) && t.push(s);
  }), t.sort();
}
var nF = rF, aF = Ym, sF = Hm, oF = vs, cF = nF;
function gF(t, n, r) {
  var s = n + "";
  return oF(t, sF(s, cF(aF(s), r)));
}
var II = gF, dF = gI(), lF = dI, IF = II, CF = 4, uF = 8, nd = 32, ad = 64;
function BF(t, n, r, s, g, l, C, B, f, p) {
  var E = n & uF, u = E ? C : void 0, w = E ? void 0 : C, _ = E ? l : void 0, k = E ? void 0 : l;
  n |= E ? nd : ad, n &= ~(E ? ad : nd), n & CF || (n &= -4);
  var N = [
    t,
    n,
    g,
    _,
    u,
    k,
    w,
    B,
    f,
    p
  ], R = r.apply(void 0, N);
  return dF(t) && lF(R, N), R.placeholder = s, IF(R, t, n);
}
var CI = BF;
function QF(t) {
  var n = t;
  return n.placeholder;
}
var uI = QF, fF = ai, EF = yr, pF = Math.min;
function vF(t, n) {
  for (var r = t.length, s = pF(n.length, r), g = fF(t); s--; ) {
    var l = n[s];
    t[s] = EF(l, r) ? g[l] : void 0;
  }
  return t;
}
var yF = vF, sd = "__lodash_placeholder__";
function hF(t, n) {
  for (var r = -1, s = t.length, g = 0, l = []; ++r < s; ) {
    var C = t[r];
    (C === n || C === sd) && (t[r] = sd, l[g++] = r);
  }
  return l;
}
var ms = hF, wF = aI, bF = sI, DF = Fm, od = mr, mF = CI, FF = uI, kF = yF, _F = ms, RF = TA, GF = 1, SF = 2, NF = 8, LF = 16, MF = 128, UF = 512;
function BI(t, n, r, s, g, l, C, B, f, p) {
  var E = n & MF, u = n & GF, w = n & SF, _ = n & (NF | LF), k = n & UF, N = w ? void 0 : od(t);
  function R() {
    for (var M = arguments.length, x = Array(M), eA = M; eA--; )
      x[eA] = arguments[eA];
    if (_)
      var AA = FF(R), dA = DF(x, AA);
    if (s && (x = wF(x, s, g, _)), l && (x = bF(x, l, C, _)), M -= dA, _ && M < p) {
      var QA = _F(x, AA);
      return mF(
        t,
        n,
        BI,
        R.placeholder,
        r,
        x,
        QA,
        B,
        f,
        p - M
      );
    }
    var CA = u ? r : this, vA = w ? CA[t] : t;
    return M = x.length, B ? x = kF(x, B) : k && M > 1 && x.reverse(), E && f < M && (x.length = f), this && this !== RF && this instanceof R && (vA = N || od(vA)), vA.apply(CA, x);
  }
  return R;
}
var QI = BI, YF = ps, JF = mr, xF = QI, HF = CI, TF = uI, qF = ms, KF = TA;
function OF(t, n, r) {
  var s = JF(t);
  function g() {
    for (var l = arguments.length, C = Array(l), B = l, f = TF(g); B--; )
      C[B] = arguments[B];
    var p = l < 3 && C[0] !== f && C[l - 1] !== f ? [] : qF(C, f);
    if (l -= p.length, l < r)
      return HF(
        t,
        n,
        xF,
        g.placeholder,
        void 0,
        C,
        p,
        void 0,
        void 0,
        r - l
      );
    var E = this && this !== KF && this instanceof g ? s : t;
    return YF(E, this, C);
  }
  return g;
}
var WF = OF, PF = ps, zF = mr, $F = TA, jF = 1;
function ZF(t, n, r, s) {
  var g = n & jF, l = zF(t);
  function C() {
    for (var B = -1, f = arguments.length, p = -1, E = s.length, u = Array(E + f), w = this && this !== $F && this instanceof C ? l : t; ++p < E; )
      u[p] = s[p];
    for (; f--; )
      u[p++] = arguments[++B];
    return PF(w, g ? r : this, u);
  }
  return C;
}
var XF = ZF, VF = aI, Ak = sI, cd = ms, gd = "__lodash_placeholder__", _a = 1, ek = 2, tk = 4, dd = 8, ei = 128, ld = 256, ik = Math.min;
function rk(t, n) {
  var r = t[1], s = n[1], g = r | s, l = g < (_a | ek | ei), C = s == ei && r == dd || s == ei && r == ld && t[7].length <= n[8] || s == (ei | ld) && n[7].length <= n[8] && r == dd;
  if (!(l || C))
    return t;
  s & _a && (t[2] = n[2], g |= r & _a ? 0 : tk);
  var B = n[3];
  if (B) {
    var f = t[3];
    t[3] = f ? VF(f, B, n[4]) : B, t[4] = f ? cd(t[3], gd) : n[4];
  }
  return B = n[5], B && (f = t[5], t[5] = f ? Ak(f, B, n[6]) : B, t[6] = f ? cd(t[5], gd) : n[6]), B = n[7], B && (t[7] = B), s & ei && (t[8] = t[8] == null ? n[8] : ik(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = g, t;
}
var nk = rk, ak = /\s/;
function sk(t) {
  for (var n = t.length; n-- && ak.test(t.charAt(n)); )
    ;
  return n;
}
var ok = sk, ck = ok, gk = /^\s+/;
function dk(t) {
  return t && t.slice(0, ck(t) + 1).replace(gk, "");
}
var lk = dk, Ik = et, Ck = ae, uk = "[object Symbol]";
function Bk(t) {
  return typeof t == "symbol" || Ck(t) && Ik(t) == uk;
}
var Gt = Bk, Qk = lk, Id = le, fk = Gt, Cd = NaN, Ek = /^[-+]0x[0-9a-f]+$/i, pk = /^0b[01]+$/i, vk = /^0o[0-7]+$/i, yk = parseInt;
function hk(t) {
  if (typeof t == "number")
    return t;
  if (fk(t))
    return Cd;
  if (Id(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Id(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Qk(t);
  var r = pk.test(t);
  return r || vk.test(t) ? yk(t.slice(2), r ? 2 : 8) : Ek.test(t) ? Cd : +t;
}
var wk = hk, bk = wk, Dk = 1 / 0, mk = 17976931348623157e292;
function Fk(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = bk(t), t === Dk || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * mk;
  }
  return t === t ? t : 0;
}
var kk = Fk, _k = kk;
function Rk(t) {
  var n = _k(t), r = n % 1;
  return n === n ? r ? n - r : n : 0;
}
var fI = Rk, Gk = nI, Sk = ym, Nk = WF, Lk = QI, Mk = XF, Uk = bs(), Yk = nk, Jk = dI, xk = II, ud = fI, Hk = "Expected a function", Bd = 1, Tk = 2, Qd = 8, fd = 16, Ed = 32, qk = 64, pd = Math.max;
function Kk(t, n, r, s, g, l, C, B) {
  var f = n & Tk;
  if (!f && typeof t != "function")
    throw new TypeError(Hk);
  var p = s ? s.length : 0;
  if (p || (n &= -97, s = g = void 0), C = C === void 0 ? C : pd(ud(C), 0), B = B === void 0 ? B : ud(B), p -= g ? g.length : 0, n & qk) {
    var E = s, u = g;
    s = g = void 0;
  }
  var w = f ? void 0 : Uk(t), _ = [
    t,
    n,
    r,
    s,
    g,
    E,
    u,
    l,
    C,
    B
  ];
  if (w && Yk(_, w), t = _[0], n = _[1], r = _[2], s = _[3], g = _[4], B = _[9] = _[9] === void 0 ? f ? 0 : t.length : pd(_[9] - p, 0), !B && n & (Qd | fd) && (n &= -25), !n || n == Bd)
    var k = Sk(t, n, r);
  else
    n == Qd || n == fd ? k = Nk(t, n, B) : (n == Ed || n == (Bd | Ed)) && !g.length ? k = Mk(t, n, r, s) : k = Lk.apply(void 0, _);
  var N = w ? Gk : Jk;
  return xk(N(k, _), t, n);
}
var Fs = Kk, Ok = Fs, Wk = 128;
function Pk(t, n, r) {
  return n = r ? void 0 : n, n = t && n == null ? t.length : n, Ok(t, Wk, void 0, void 0, void 0, void 0, n);
}
var zk = Pk, $k = si, jk = ci;
function Zk(t, n) {
  return t && $k(n, jk(n), t);
}
var EI = Zk, Xk = si, Vk = oi;
function A_(t, n) {
  return t && Xk(n, Vk(n), t);
}
var e_ = A_;
function t_(t, n) {
  for (var r = -1, s = t == null ? 0 : t.length, g = 0, l = []; ++r < s; ) {
    var C = t[r];
    n(C, r, t) && (l[g++] = C);
  }
  return l;
}
var i_ = t_;
function r_() {
  return [];
}
var pI = r_, n_ = i_, a_ = pI, s_ = Object.prototype, o_ = s_.propertyIsEnumerable, vd = Object.getOwnPropertySymbols, c_ = vd ? function(t) {
  return t == null ? [] : (t = Object(t), n_(vd(t), function(n) {
    return o_.call(t, n);
  }));
} : a_, ks = c_, g_ = si, d_ = ks;
function l_(t, n) {
  return g_(t, d_(t), n);
}
var I_ = l_, Ra, yd;
function _s() {
  if (yd)
    return Ra;
  yd = 1;
  function t(n, r) {
    for (var s = -1, g = r.length, l = n.length; ++s < g; )
      n[l + s] = r[s];
    return n;
  }
  return Ra = t, Ra;
}
var C_ = _s(), u_ = Bs, B_ = ks, Q_ = pI, f_ = Object.getOwnPropertySymbols, E_ = f_ ? function(t) {
  for (var n = []; t; )
    C_(n, B_(t)), t = u_(t);
  return n;
} : Q_, vI = E_, p_ = si, v_ = vI;
function y_(t, n) {
  return p_(t, v_(t), n);
}
var h_ = y_, w_ = _s(), b_ = mA;
function D_(t, n, r) {
  var s = n(t);
  return b_(t) ? s : w_(s, r(t));
}
var yI = D_, m_ = yI, F_ = ks, k_ = ci;
function __(t) {
  return m_(t, k_, F_);
}
var hI = __, R_ = yI, G_ = vI, S_ = oi;
function N_(t) {
  return R_(t, S_, G_);
}
var L_ = N_, M_ = tt, U_ = TA, Y_ = M_(U_, "DataView"), J_ = Y_, x_ = tt, H_ = TA, T_ = x_(H_, "Promise"), q_ = T_, Ga, hd;
function wI() {
  if (hd)
    return Ga;
  hd = 1;
  var t = tt, n = TA, r = t(n, "Set");
  return Ga = r, Ga;
}
var os = J_, cs = Is, gs = q_, ds = wI(), ls = iI, bI = et, St = bl, wd = "[object Map]", K_ = "[object Object]", bd = "[object Promise]", Dd = "[object Set]", md = "[object WeakMap]", Fd = "[object DataView]", O_ = St(os), W_ = St(cs), P_ = St(gs), z_ = St(ds), $_ = St(ls), Xe = bI;
(os && Xe(new os(new ArrayBuffer(1))) != Fd || cs && Xe(new cs()) != wd || gs && Xe(gs.resolve()) != bd || ds && Xe(new ds()) != Dd || ls && Xe(new ls()) != md) && (Xe = function(t) {
  var n = bI(t), r = n == K_ ? t.constructor : void 0, s = r ? St(r) : "";
  if (s)
    switch (s) {
      case O_:
        return Fd;
      case W_:
        return wd;
      case P_:
        return bd;
      case z_:
        return Dd;
      case $_:
        return md;
    }
  return n;
});
var di = Xe, j_ = Object.prototype, Z_ = j_.hasOwnProperty;
function X_(t) {
  var n = t.length, r = new t.constructor(n);
  return n && typeof t[0] == "string" && Z_.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var V_ = X_, AR = us;
function eR(t, n) {
  var r = n ? AR(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var tR = eR, iR = /\w*$/;
function rR(t) {
  var n = new t.constructor(t.source, iR.exec(t));
  return n.lastIndex = t.lastIndex, n;
}
var nR = rR, kd = bt(), _d = kd ? kd.prototype : void 0, Rd = _d ? _d.valueOf : void 0;
function aR(t) {
  return Rd ? Object(Rd.call(t)) : {};
}
var sR = aR, oR = us, cR = tR, gR = nR, dR = sR, lR = _l, IR = "[object Boolean]", CR = "[object Date]", uR = "[object Map]", BR = "[object Number]", QR = "[object RegExp]", fR = "[object Set]", ER = "[object String]", pR = "[object Symbol]", vR = "[object ArrayBuffer]", yR = "[object DataView]", hR = "[object Float32Array]", wR = "[object Float64Array]", bR = "[object Int8Array]", DR = "[object Int16Array]", mR = "[object Int32Array]", FR = "[object Uint8Array]", kR = "[object Uint8ClampedArray]", _R = "[object Uint16Array]", RR = "[object Uint32Array]";
function GR(t, n, r) {
  var s = t.constructor;
  switch (n) {
    case vR:
      return oR(t);
    case IR:
    case CR:
      return new s(+t);
    case yR:
      return cR(t, r);
    case hR:
    case wR:
    case bR:
    case DR:
    case mR:
    case FR:
    case kR:
    case _R:
    case RR:
      return lR(t, r);
    case uR:
      return new s();
    case BR:
    case ER:
      return new s(t);
    case QR:
      return gR(t);
    case fR:
      return new s();
    case pR:
      return dR(t);
  }
}
var SR = GR, NR = di, LR = ae, MR = "[object Map]";
function UR(t) {
  return LR(t) && NR(t) == MR;
}
var YR = UR, JR = YR, xR = vr(), Gd = ri.exports, Sd = Gd && Gd.isMap, HR = Sd ? xR(Sd) : JR, TR = HR, qR = di, KR = ae, OR = "[object Set]";
function WR(t) {
  return KR(t) && qR(t) == OR;
}
var PR = WR, zR = PR, $R = vr(), Nd = ri.exports, Ld = Nd && Nd.isSet, jR = Ld ? $R(Ld) : zR, ZR = jR, XR = Qr, VR = Dr, AG = Ul, eG = EI, tG = e_, iG = dr.exports, rG = ai, nG = I_, aG = h_, sG = hI, oG = L_, cG = di, gG = V_, dG = SR, lG = Gl, IG = mA, CG = ht.exports, uG = TR, BG = le, QG = ZR, fG = ci, EG = oi, pG = 1, vG = 2, yG = 4, DI = "[object Arguments]", hG = "[object Array]", wG = "[object Boolean]", bG = "[object Date]", DG = "[object Error]", mI = "[object Function]", mG = "[object GeneratorFunction]", FG = "[object Map]", kG = "[object Number]", FI = "[object Object]", _G = "[object RegExp]", RG = "[object Set]", GG = "[object String]", SG = "[object Symbol]", NG = "[object WeakMap]", LG = "[object ArrayBuffer]", MG = "[object DataView]", UG = "[object Float32Array]", YG = "[object Float64Array]", JG = "[object Int8Array]", xG = "[object Int16Array]", HG = "[object Int32Array]", TG = "[object Uint8Array]", qG = "[object Uint8ClampedArray]", KG = "[object Uint16Array]", OG = "[object Uint32Array]", sA = {};
sA[DI] = sA[hG] = sA[LG] = sA[MG] = sA[wG] = sA[bG] = sA[UG] = sA[YG] = sA[JG] = sA[xG] = sA[HG] = sA[FG] = sA[kG] = sA[FI] = sA[_G] = sA[RG] = sA[GG] = sA[SG] = sA[TG] = sA[qG] = sA[KG] = sA[OG] = !0;
sA[DG] = sA[mI] = sA[NG] = !1;
function gr(t, n, r, s, g, l) {
  var C, B = n & pG, f = n & vG, p = n & yG;
  if (r && (C = g ? r(t, s, g, l) : r(t)), C !== void 0)
    return C;
  if (!BG(t))
    return t;
  var E = IG(t);
  if (E) {
    if (C = gG(t), !B)
      return rG(t, C);
  } else {
    var u = cG(t), w = u == mI || u == mG;
    if (CG(t))
      return iG(t, B);
    if (u == FI || u == DI || w && !g) {
      if (C = f || w ? {} : lG(t), !B)
        return f ? aG(t, tG(C, t)) : nG(t, eG(C, t));
    } else {
      if (!sA[u])
        return g ? t : {};
      C = dG(t, u, B);
    }
  }
  l || (l = new XR());
  var _ = l.get(t);
  if (_)
    return _;
  l.set(t, C), QG(t) ? t.forEach(function(R) {
    C.add(gr(R, n, r, R, t, l));
  }) : uG(t) && t.forEach(function(R, M) {
    C.set(M, gr(R, n, r, M, t, l));
  });
  var k = p ? f ? oG : sG : f ? EG : fG, N = E ? void 0 : k(t);
  return VR(N || t, function(R, M) {
    N && (M = R, R = t[M]), AG(C, M, gr(R, n, r, M, t, l));
  }), C;
}
var kI = gr, WG = kI, PG = 4;
function zG(t) {
  return WG(t, PG);
}
var $G = zG, jG = Fs, ZG = 8;
function Rs(t, n, r) {
  n = r ? void 0 : n;
  var s = jG(t, ZG, void 0, void 0, void 0, void 0, void 0, n);
  return s.placeholder = Rs.placeholder, s;
}
Rs.placeholder = {};
var XG = Rs, VG = et, A1 = ae, e1 = Ll, t1 = "[object DOMException]", i1 = "[object Error]";
function r1(t) {
  if (!A1(t))
    return !1;
  var n = VG(t);
  return n == i1 || n == t1 || typeof t.message == "string" && typeof t.name == "string" && !e1(t);
}
var n1 = r1, a1 = di, s1 = ae, o1 = "[object WeakMap]";
function c1(t) {
  return s1(t) && a1(t) == o1;
}
var g1 = c1, Sa, Md;
function d1() {
  if (Md)
    return Sa;
  Md = 1;
  var t = "__lodash_hash_undefined__";
  function n(r) {
    return this.__data__.set(r, t), this;
  }
  return Sa = n, Sa;
}
var Na, Ud;
function l1() {
  if (Ud)
    return Na;
  Ud = 1;
  function t(n) {
    return this.__data__.has(n);
  }
  return Na = t, Na;
}
var La, Yd;
function _I() {
  if (Yd)
    return La;
  Yd = 1;
  var t = Cs, n = d1(), r = l1();
  function s(g) {
    var l = -1, C = g == null ? 0 : g.length;
    for (this.__data__ = new t(); ++l < C; )
      this.add(g[l]);
  }
  return s.prototype.add = s.prototype.push = n, s.prototype.has = r, La = s, La;
}
function I1(t, n) {
  for (var r = -1, s = t == null ? 0 : t.length; ++r < s; )
    if (n(t[r], r, t))
      return !0;
  return !1;
}
var C1 = I1, Ma, Jd;
function RI() {
  if (Jd)
    return Ma;
  Jd = 1;
  function t(n, r) {
    return n.has(r);
  }
  return Ma = t, Ma;
}
var u1 = _I(), B1 = C1, Q1 = RI(), f1 = 1, E1 = 2;
function p1(t, n, r, s, g, l) {
  var C = r & f1, B = t.length, f = n.length;
  if (B != f && !(C && f > B))
    return !1;
  var p = l.get(t), E = l.get(n);
  if (p && E)
    return p == n && E == t;
  var u = -1, w = !0, _ = r & E1 ? new u1() : void 0;
  for (l.set(t, n), l.set(n, t); ++u < B; ) {
    var k = t[u], N = n[u];
    if (s)
      var R = C ? s(N, k, u, n, t, l) : s(k, N, u, t, n, l);
    if (R !== void 0) {
      if (R)
        continue;
      w = !1;
      break;
    }
    if (_) {
      if (!B1(n, function(M, x) {
        if (!Q1(_, x) && (k === M || g(k, M, r, s, l)))
          return _.push(x);
      })) {
        w = !1;
        break;
      }
    } else if (!(k === N || g(k, N, r, s, l))) {
      w = !1;
      break;
    }
  }
  return l.delete(t), l.delete(n), w;
}
var GI = p1;
function v1(t) {
  var n = -1, r = Array(t.size);
  return t.forEach(function(s, g) {
    r[++n] = [g, s];
  }), r;
}
var y1 = v1, Ua, xd;
function Gs() {
  if (xd)
    return Ua;
  xd = 1;
  function t(n) {
    var r = -1, s = Array(n.size);
    return n.forEach(function(g) {
      s[++r] = g;
    }), s;
  }
  return Ua = t, Ua;
}
var Hd = bt(), Td = kl, h1 = ni, w1 = GI, b1 = y1, D1 = Gs(), m1 = 1, F1 = 2, k1 = "[object Boolean]", _1 = "[object Date]", R1 = "[object Error]", G1 = "[object Map]", S1 = "[object Number]", N1 = "[object RegExp]", L1 = "[object Set]", M1 = "[object String]", U1 = "[object Symbol]", Y1 = "[object ArrayBuffer]", J1 = "[object DataView]", qd = Hd ? Hd.prototype : void 0, Ya = qd ? qd.valueOf : void 0;
function x1(t, n, r, s, g, l, C) {
  switch (r) {
    case J1:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Y1:
      return !(t.byteLength != n.byteLength || !l(new Td(t), new Td(n)));
    case k1:
    case _1:
    case S1:
      return h1(+t, +n);
    case R1:
      return t.name == n.name && t.message == n.message;
    case N1:
    case M1:
      return t == n + "";
    case G1:
      var B = b1;
    case L1:
      var f = s & m1;
      if (B || (B = D1), t.size != n.size && !f)
        return !1;
      var p = C.get(t);
      if (p)
        return p == n;
      s |= F1, C.set(t, n);
      var E = w1(B(t), B(n), s, g, l, C);
      return C.delete(t), E;
    case U1:
      if (Ya)
        return Ya.call(t) == Ya.call(n);
  }
  return !1;
}
var H1 = x1, Kd = hI, T1 = 1, q1 = Object.prototype, K1 = q1.hasOwnProperty;
function O1(t, n, r, s, g, l) {
  var C = r & T1, B = Kd(t), f = B.length, p = Kd(n), E = p.length;
  if (f != E && !C)
    return !1;
  for (var u = f; u--; ) {
    var w = B[u];
    if (!(C ? w in n : K1.call(n, w)))
      return !1;
  }
  var _ = l.get(t), k = l.get(n);
  if (_ && k)
    return _ == n && k == t;
  var N = !0;
  l.set(t, n), l.set(n, t);
  for (var R = C; ++u < f; ) {
    w = B[u];
    var M = t[w], x = n[w];
    if (s)
      var eA = C ? s(x, M, w, n, t, l) : s(M, x, w, t, n, l);
    if (!(eA === void 0 ? M === x || g(M, x, r, s, l) : eA)) {
      N = !1;
      break;
    }
    R || (R = w == "constructor");
  }
  if (N && !R) {
    var AA = t.constructor, dA = n.constructor;
    AA != dA && "constructor" in t && "constructor" in n && !(typeof AA == "function" && AA instanceof AA && typeof dA == "function" && dA instanceof dA) && (N = !1);
  }
  return l.delete(t), l.delete(n), N;
}
var W1 = O1, Ja = Qr, P1 = GI, z1 = H1, $1 = W1, Od = di, Wd = mA, Pd = ht.exports, j1 = Es, Z1 = 1, zd = "[object Arguments]", $d = "[object Array]", nr = "[object Object]", X1 = Object.prototype, jd = X1.hasOwnProperty;
function V1(t, n, r, s, g, l) {
  var C = Wd(t), B = Wd(n), f = C ? $d : Od(t), p = B ? $d : Od(n);
  f = f == zd ? nr : f, p = p == zd ? nr : p;
  var E = f == nr, u = p == nr, w = f == p;
  if (w && Pd(t)) {
    if (!Pd(n))
      return !1;
    C = !0, E = !1;
  }
  if (w && !E)
    return l || (l = new Ja()), C || j1(t) ? P1(t, n, r, s, g, l) : z1(t, n, f, r, s, g, l);
  if (!(r & Z1)) {
    var _ = E && jd.call(t, "__wrapped__"), k = u && jd.call(n, "__wrapped__");
    if (_ || k) {
      var N = _ ? t.value() : t, R = k ? n.value() : n;
      return l || (l = new Ja()), g(N, R, r, s, l);
    }
  }
  return w ? (l || (l = new Ja()), $1(t, n, r, s, g, l)) : !1;
}
var AS = V1, eS = AS, Zd = ae;
function SI(t, n, r, s, g) {
  return t === n ? !0 : t == null || n == null || !Zd(t) && !Zd(n) ? t !== t && n !== n : eS(t, n, r, s, SI, g);
}
var NI = SI, tS = Qr, iS = NI, rS = 1, nS = 2;
function aS(t, n, r, s) {
  var g = r.length, l = g, C = !s;
  if (t == null)
    return !l;
  for (t = Object(t); g--; ) {
    var B = r[g];
    if (C && B[2] ? B[1] !== t[B[0]] : !(B[0] in t))
      return !1;
  }
  for (; ++g < l; ) {
    B = r[g];
    var f = B[0], p = t[f], E = B[1];
    if (C && B[2]) {
      if (p === void 0 && !(f in t))
        return !1;
    } else {
      var u = new tS();
      if (s)
        var w = s(p, E, f, t, n, u);
      if (!(w === void 0 ? iS(E, p, rS | nS, s, u) : w))
        return !1;
    }
  }
  return !0;
}
var sS = aS, oS = le;
function cS(t) {
  return t === t && !oS(t);
}
var LI = cS, gS = LI, dS = ci;
function lS(t) {
  for (var n = dS(t), r = n.length; r--; ) {
    var s = n[r], g = t[s];
    n[r] = [s, g, gS(g)];
  }
  return n;
}
var IS = lS;
function CS(t, n) {
  return function(r) {
    return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
  };
}
var MI = CS, uS = sS, BS = IS, QS = MI;
function fS(t) {
  var n = BS(t);
  return n.length == 1 && n[0][2] ? QS(n[0][0], n[0][1]) : function(r) {
    return r === t || uS(r, t, n);
  };
}
var ES = fS, pS = mA, vS = Gt, yS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hS = /^\w*$/;
function wS(t, n) {
  if (pS(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || vS(t) ? !0 : hS.test(t) || !yS.test(t) || n != null && t in Object(n);
}
var Ss = wS, UI = Cs, bS = "Expected a function";
function Ns(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(bS);
  var r = function() {
    var s = arguments, g = n ? n.apply(this, s) : s[0], l = r.cache;
    if (l.has(g))
      return l.get(g);
    var C = t.apply(this, s);
    return r.cache = l.set(g, C) || l, C;
  };
  return r.cache = new (Ns.Cache || UI)(), r;
}
Ns.Cache = UI;
var DS = Ns, mS = DS, FS = 500;
function kS(t) {
  var n = mS(t, function(s) {
    return r.size === FS && r.clear(), s;
  }), r = n.cache;
  return n;
}
var _S = kS, RS = _S, GS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, SS = /\\(\\)?/g, NS = RS(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(GS, function(r, s, g, l) {
    n.push(g ? l.replace(SS, "$1") : s || r);
  }), n;
}), YI = NS, xa, Xd;
function Ls() {
  if (Xd)
    return xa;
  Xd = 1;
  function t(n, r) {
    for (var s = -1, g = n == null ? 0 : n.length, l = Array(g); ++s < g; )
      l[s] = r(n[s], s, n);
    return l;
  }
  return xa = t, xa;
}
var Vd = bt(), LS = Ls(), MS = mA, US = Gt, Al = Vd ? Vd.prototype : void 0, el = Al ? Al.toString : void 0;
function JI(t) {
  if (typeof t == "string")
    return t;
  if (MS(t))
    return LS(t, JI) + "";
  if (US(t))
    return el ? el.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var YS = JI, JS = YS;
function xS(t) {
  return t == null ? "" : JS(t);
}
var xI = xS, HS = mA, TS = Ss, qS = YI, KS = xI;
function OS(t, n) {
  return HS(t) ? t : TS(t, n) ? [t] : qS(KS(t));
}
var HI = OS, WS = Gt;
function PS(t) {
  if (typeof t == "string" || WS(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var li = PS, Ha, tl;
function Ms() {
  if (tl)
    return Ha;
  tl = 1;
  var t = HI, n = li;
  function r(s, g) {
    g = t(g, s);
    for (var l = 0, C = g.length; s != null && l < C; )
      s = s[n(g[l++])];
    return l && l == C ? s : void 0;
  }
  return Ha = r, Ha;
}
var zS = Ms();
function $S(t, n, r) {
  var s = t == null ? void 0 : zS(t, n);
  return s === void 0 ? r : s;
}
var jS = $S;
function ZS(t, n) {
  return t != null && n in Object(t);
}
var XS = ZS, VS = HI, AN = pr, eN = mA, tN = yr, iN = fs, rN = li;
function nN(t, n, r) {
  n = VS(n, t);
  for (var s = -1, g = n.length, l = !1; ++s < g; ) {
    var C = rN(n[s]);
    if (!(l = t != null && r(t, C)))
      break;
    t = t[C];
  }
  return l || ++s != g ? l : (g = t == null ? 0 : t.length, !!g && iN(g) && tN(C, g) && (eN(t) || AN(t)));
}
var aN = nN, sN = XS, oN = aN;
function cN(t, n) {
  return t != null && oN(t, n, sN);
}
var gN = cN, dN = NI, lN = jS, IN = gN, CN = Ss, uN = LI, BN = MI, QN = li, fN = 1, EN = 2;
function pN(t, n) {
  return CN(t) && uN(n) ? BN(QN(t), n) : function(r) {
    var s = lN(r, t);
    return s === void 0 && s === n ? IN(r, t) : dN(n, s, fN | EN);
  };
}
var vN = pN;
function yN(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
var hN = yN, wN = Ms();
function bN(t) {
  return function(n) {
    return wN(n, t);
  };
}
var DN = bN, mN = hN, FN = DN, kN = Ss, _N = li;
function RN(t) {
  return kN(t) ? mN(_N(t)) : FN(t);
}
var GN = RN, SN = ES, NN = vN, LN = _t, MN = mA, UN = GN;
function YN(t) {
  return typeof t == "function" ? t : t == null ? LN : typeof t == "object" ? MN(t) ? NN(t[0], t[1]) : SN(t) : UN(t);
}
var Fr = YN, JN = kI, xN = Fr, HN = 1;
function TN(t) {
  return xN(typeof t == "function" ? t : JN(t, HN));
}
var qN = TN, Ta, il;
function KN() {
  if (il)
    return Ta;
  il = 1;
  var t = bt(), n = pr, r = mA, s = t ? t.isConcatSpreadable : void 0;
  function g(l) {
    return r(l) || n(l) || !!(s && l && l[s]);
  }
  return Ta = g, Ta;
}
var qa, rl;
function TI() {
  if (rl)
    return qa;
  rl = 1;
  var t = _s(), n = KN();
  function r(s, g, l, C, B) {
    var f = -1, p = s.length;
    for (l || (l = n), B || (B = []); ++f < p; ) {
      var E = s[f];
      g > 0 && l(E) ? g > 1 ? r(E, g - 1, l, C, B) : t(B, E) : C || (B[B.length] = E);
    }
    return B;
  }
  return qa = r, qa;
}
var Ka, nl;
function ON() {
  if (nl)
    return Ka;
  nl = 1;
  var t = TI();
  function n(r) {
    var s = r == null ? 0 : r.length;
    return s ? t(r, 1) : [];
  }
  return Ka = n, Ka;
}
var Oa, al;
function qI() {
  if (al)
    return Oa;
  al = 1;
  var t = ON(), n = xl, r = vs;
  function s(g) {
    return r(n(g, void 0, t), g + "");
  }
  return Oa = s, Oa;
}
var WN = Fs, PN = qI(), zN = 256, $N = PN(function(t, n) {
  return WN(t, zN, void 0, void 0, void 0, n);
}), jN = $N, ZN = Ls(), XN = ai, VN = mA, AL = Gt, eL = YI, tL = li, iL = xI;
function rL(t) {
  return VN(t) ? ZN(t, tL) : AL(t) ? [t] : XN(eL(iL(t)));
}
var nL = rL, aL = {
  ary: zk,
  assign: EI,
  clone: $G,
  curry: XG,
  forEach: Dr,
  isArray: mA,
  isError: n1,
  isFunction: Cr,
  isWeakMap: g1,
  iteratee: qN,
  keys: Vl,
  rearg: jN,
  toInteger: fI,
  toPath: nL
}, sL = cm, oL = aL;
function cL(t, n, r) {
  return sL(oL, t, n, r);
}
var kr = cL, Wa, sl;
function gL() {
  if (sl)
    return Wa;
  sl = 1;
  function t(n) {
    for (var r = -1, s = n == null ? 0 : n.length, g = 0, l = []; ++r < s; ) {
      var C = n[r];
      C && (l[g++] = C);
    }
    return l;
  }
  return Wa = t, Wa;
}
var Pa, ol;
function dL() {
  return ol || (ol = 1, Pa = {
    cap: !1,
    curry: !1,
    fixed: !1,
    immutable: !1,
    rearg: !1
  }), Pa;
}
var lL = kr, KI = lL("compact", gL(), dL());
KI.placeholder = gi();
var IL = KI, za, cl;
function CL() {
  if (cl)
    return za;
  cl = 1;
  var t = Ds(), n = qI(), r = bs(), s = cI(), g = mA, l = gI(), C = "Expected a function", B = 8, f = 32, p = 128, E = 256;
  function u(w) {
    return n(function(_) {
      var k = _.length, N = k, R = t.prototype.thru;
      for (w && _.reverse(); N--; ) {
        var M = _[N];
        if (typeof M != "function")
          throw new TypeError(C);
        if (R && !x && s(M) == "wrapper")
          var x = new t([], !0);
      }
      for (N = x ? N : k; ++N < k; ) {
        M = _[N];
        var eA = s(M), AA = eA == "wrapper" ? r(M) : void 0;
        AA && l(AA[0]) && AA[1] == (p | B | f | E) && !AA[4].length && AA[9] == 1 ? x = x[s(AA[0])].apply(x, AA[3]) : x = M.length == 1 && l(M) ? x[eA]() : x.thru(M);
      }
      return function() {
        var dA = arguments, QA = dA[0];
        if (x && dA.length == 1 && g(QA))
          return x.plant(QA).value();
        for (var CA = 0, vA = k ? _[CA].apply(this, dA) : QA; ++CA < k; )
          vA = _[CA].call(this, vA);
        return vA;
      };
    });
  }
  return za = u, za;
}
var $a, gl;
function uL() {
  if (gl)
    return $a;
  gl = 1;
  var t = CL(), n = t();
  return $a = n, $a;
}
var BL = kr, OI = BL("flow", uL());
OI.placeholder = gi();
var QL = OI, ja, dl;
function fL() {
  if (dl)
    return ja;
  dl = 1;
  var t = eI, n = kt;
  function r(s, g) {
    var l = -1, C = n(s) ? Array(s.length) : [];
    return t(s, function(B, f, p) {
      C[++l] = g(B, f, p);
    }), C;
  }
  return ja = r, ja;
}
var Za, ll;
function EL() {
  if (ll)
    return Za;
  ll = 1;
  function t(n, r) {
    var s = n.length;
    for (n.sort(r); s--; )
      n[s] = n[s].value;
    return n;
  }
  return Za = t, Za;
}
var Xa, Il;
function pL() {
  if (Il)
    return Xa;
  Il = 1;
  var t = Gt;
  function n(r, s) {
    if (r !== s) {
      var g = r !== void 0, l = r === null, C = r === r, B = t(r), f = s !== void 0, p = s === null, E = s === s, u = t(s);
      if (!p && !u && !B && r > s || B && f && E && !p && !u || l && f && E || !g && E || !C)
        return 1;
      if (!l && !B && !u && r < s || u && g && C && !l && !B || p && g && C || !f && C || !E)
        return -1;
    }
    return 0;
  }
  return Xa = n, Xa;
}
var Va, Cl;
function vL() {
  if (Cl)
    return Va;
  Cl = 1;
  var t = pL();
  function n(r, s, g) {
    for (var l = -1, C = r.criteria, B = s.criteria, f = C.length, p = g.length; ++l < f; ) {
      var E = t(C[l], B[l]);
      if (E) {
        if (l >= p)
          return E;
        var u = g[l];
        return E * (u == "desc" ? -1 : 1);
      }
    }
    return r.index - s.index;
  }
  return Va = n, Va;
}
var As, ul;
function yL() {
  if (ul)
    return As;
  ul = 1;
  var t = Ls(), n = Ms(), r = Fr, s = fL(), g = EL(), l = vr(), C = vL(), B = _t, f = mA;
  function p(E, u, w) {
    u.length ? u = t(u, function(N) {
      return f(N) ? function(R) {
        return n(R, N.length === 1 ? N[0] : N);
      } : N;
    }) : u = [B];
    var _ = -1;
    u = t(u, l(r));
    var k = s(E, function(N, R, M) {
      var x = t(u, function(eA) {
        return eA(N);
      });
      return { criteria: x, index: ++_, value: N };
    });
    return g(k, function(N, R) {
      return C(N, R, w);
    });
  }
  return As = p, As;
}
var es, Bl;
function hL() {
  if (Bl)
    return es;
  Bl = 1;
  var t = TI(), n = yL(), r = Tl, s = ql, g = r(function(l, C) {
    if (l == null)
      return [];
    var B = C.length;
    return B > 1 && s(l, C[0], C[1]) ? C = [] : B > 2 && s(C[0], C[1], C[2]) && (C = [C[0]]), n(l, t(C, 1), []);
  });
  return es = g, es;
}
var wL = kr, WI = wL("sortBy", hL());
WI.placeholder = gi();
var bL = WI, ts, Ql;
function DL() {
  if (Ql)
    return ts;
  Ql = 1;
  function t(n, r, s) {
    for (var g = -1, l = n == null ? 0 : n.length; ++g < l; )
      if (s(r, n[g]))
        return !0;
    return !1;
  }
  return ts = t, ts;
}
var is, fl;
function mL() {
  if (fl)
    return is;
  fl = 1;
  var t = wI(), n = oI(), r = Gs(), s = 1 / 0, g = t && 1 / r(new t([, -0]))[1] == s ? function(l) {
    return new t(l);
  } : n;
  return is = g, is;
}
var rs, El;
function FL() {
  if (El)
    return rs;
  El = 1;
  var t = _I(), n = lI(), r = DL(), s = RI(), g = mL(), l = Gs(), C = 200;
  function B(f, p, E) {
    var u = -1, w = n, _ = f.length, k = !0, N = [], R = N;
    if (E)
      k = !1, w = r;
    else if (_ >= C) {
      var M = p ? null : g(f);
      if (M)
        return l(M);
      k = !1, w = s, R = new t();
    } else
      R = p ? [] : N;
    A:
      for (; ++u < _; ) {
        var x = f[u], eA = p ? p(x) : x;
        if (x = E || x !== 0 ? x : 0, k && eA === eA) {
          for (var AA = R.length; AA--; )
            if (R[AA] === eA)
              continue A;
          p && R.push(eA), N.push(x);
        } else
          w(R, eA, E) || (R !== N && R.push(eA), N.push(x));
      }
    return N;
  }
  return rs = B, rs;
}
var ns, pl;
function kL() {
  if (pl)
    return ns;
  pl = 1;
  var t = Fr, n = FL();
  function r(s, g) {
    return s && s.length ? n(s, t(g)) : [];
  }
  return ns = r, ns;
}
var _L = kr, PI = _L("uniqBy", kL());
PI.placeholder = gi();
var RL = PI, GL = fr, SL = AI, NL = Fr;
function LL(t, n) {
  var r = {};
  return n = NL(n), SL(t, function(s, g, l) {
    GL(r, n(s, g, l), s);
  }), r;
}
var ML = LL, UL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Byly upraveny vlastnosti, jako je tón, sytost, křivky, stíny nebo světla",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Úpravy barev nebo expozice",
  "selectors.editsAndActivity.c2pa.converted.description": "Formát datového zdroje byl změněn",
  "selectors.editsAndActivity.c2pa.converted.label": "Převedený datový zdroj",
  "selectors.editsAndActivity.c2pa.created.description": "Byl vytvořen nový soubor nebo obsah",
  "selectors.editsAndActivity.c2pa.created.label": "Vytvořeno",
  "selectors.editsAndActivity.c2pa.cropped.description": "Byly použity nástroje pro oříznutí, zmenšení nebo rozšíření viditelné oblasti obsahu",
  "selectors.editsAndActivity.c2pa.cropped.label": "Úpravy oříznutí",
  "selectors.editsAndActivity.c2pa.deleted.description": "Odstraněné vizuální oblasti nebo doby trvání obsahu",
  "selectors.editsAndActivity.c2pa.deleted.label": "Odstraněný obsah",
  "selectors.editsAndActivity.c2pa.drawing.description": "Byly použity nástroje, jako jsou tužky, štětce, gumy nebo nástroje tvar, cesta nebo pero",
  "selectors.editsAndActivity.c2pa.drawing.label": "Úpravy kresby",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Nahrazený zvuk",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Dublováno",
  "selectors.editsAndActivity.c2pa.edited.description": "Byly provedeny další změny",
  "selectors.editsAndActivity.c2pa.edited.label": "Další úpravy",
  "selectors.editsAndActivity.c2pa.filtered.description": "Byly použity nástroje, jako jsou filtry, styly nebo efekty, ke změně vzhledu",
  "selectors.editsAndActivity.c2pa.filtered.label": "Úpravy filtrů nebo stylů",
  "selectors.editsAndActivity.c2pa.opened.description": "Byl otevřen existující soubor",
  "selectors.editsAndActivity.c2pa.opened.label": "Otevřeno",
  "selectors.editsAndActivity.c2pa.orientation.description": "Byla změněna poloha nebo orientace (otočení, převrácení atd.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Orientace úpravy",
  "selectors.editsAndActivity.c2pa.placed.description": "Do tohoto souboru byl přidán existující obsah",
  "selectors.editsAndActivity.c2pa.placed.label": "Importováno",
  "selectors.editsAndActivity.c2pa.published.description": "Obdržený a distribuovaný obrázek",
  "selectors.editsAndActivity.c2pa.published.label": "Publikovaný obrázek",
  "selectors.editsAndActivity.c2pa.removed.description": "Ze souboru byl odstraněn jeden nebo více datových zdrojů",
  "selectors.editsAndActivity.c2pa.removed.label": "Datový zdroj byl odstraněn",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Datový zdroj byl přebalen, aniž by byl zpracován",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Přebalený datový zdroj",
  "selectors.editsAndActivity.c2pa.resized.description": "Byly změněny rozměry nebo velikost souboru",
  "selectors.editsAndActivity.c2pa.resized.label": "Změny velikosti",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Zpracování nebo komprimace datového zdroje za účelem optimalizace pro zobrazení",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Zpracovaný datový zdroj",
  "selectors.editsAndActivity.c2pa.translated.description": "Přeložený obsah",
  "selectors.editsAndActivity.c2pa.translated.label": "Přeloženo",
  "selectors.editsAndActivity.c2pa.unknown.description": "Byly provedeny další úpravy nebo aktivita, kterou nebylo možné rozpoznat",
  "selectors.editsAndActivity.c2pa.unknown.label": "Neznámé úpravy nebo aktivita",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Provedli změny v metadatech souboru",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Změny metadat"
}, YL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Justerede egenskaber såsom tone, mætning, kurver, skygger eller fremhævninger",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Farve- eller eksponeringsredigeringer",
  "selectors.editsAndActivity.c2pa.converted.description": "Aktivets format blev ændret",
  "selectors.editsAndActivity.c2pa.converted.label": "Konverteret aktiv",
  "selectors.editsAndActivity.c2pa.created.description": "Oprettede en ny fil eller nyt indhold",
  "selectors.editsAndActivity.c2pa.created.label": "Oprettede",
  "selectors.editsAndActivity.c2pa.cropped.description": "Brugte beskæringsværktøjer til at reducere eller udvide synligt indholdsområde",
  "selectors.editsAndActivity.c2pa.cropped.label": "Beskæringsredigeringer",
  "selectors.editsAndActivity.c2pa.deleted.description": "Slettede visuelle områder eller varigheder af indhold",
  "selectors.editsAndActivity.c2pa.deleted.label": "Slettet indhold",
  "selectors.editsAndActivity.c2pa.drawing.description": "Brugte værktøjer såsom blyanter, pensler, viskelædere eller form-, sti- eller penneværktøjer",
  "selectors.editsAndActivity.c2pa.drawing.label": "Tegneredigeringer",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Erstattet lyd",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Tilnavn givet",
  "selectors.editsAndActivity.c2pa.edited.description": "Foretog andre ændringer",
  "selectors.editsAndActivity.c2pa.edited.label": "Andre redigeringer",
  "selectors.editsAndActivity.c2pa.filtered.description": "Brugte værktøjer såsom filtre, formater eller effekter til at ændre udseende",
  "selectors.editsAndActivity.c2pa.filtered.label": "Filter- eller formatredigeringer",
  "selectors.editsAndActivity.c2pa.opened.description": "Åbnede en allerede eksisterende fil",
  "selectors.editsAndActivity.c2pa.opened.label": "Åbnede",
  "selectors.editsAndActivity.c2pa.orientation.description": "Ændrede placering eller retning (roteret, vendt osv.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Retningsredigeringer",
  "selectors.editsAndActivity.c2pa.placed.description": "Føjede allerede eksisterende indhold til denne fil",
  "selectors.editsAndActivity.c2pa.placed.label": "Importerede",
  "selectors.editsAndActivity.c2pa.published.description": "Modtaget og distribueret billede",
  "selectors.editsAndActivity.c2pa.published.label": "Udgivet billede",
  "selectors.editsAndActivity.c2pa.removed.description": "Ét eller flere aktiver blev fjernet fra filen",
  "selectors.editsAndActivity.c2pa.removed.label": "Aktiv fjernet",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Aktivet blev ompakket uden at blive behandlet",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Ompakket aktiv",
  "selectors.editsAndActivity.c2pa.resized.description": "Ændrede dimensioner eller filstørrelse",
  "selectors.editsAndActivity.c2pa.resized.label": "Ændring af størrelse på redigeringer",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Behandlede eller komprimerede et aktiv for at optimere til visning",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Behandlet aktiv",
  "selectors.editsAndActivity.c2pa.translated.description": "Oversat indhold",
  "selectors.editsAndActivity.c2pa.translated.label": "Oversat",
  "selectors.editsAndActivity.c2pa.unknown.description": "Foretog andre redigeringer eller aktiviteter, der ikke kunne genkendes",
  "selectors.editsAndActivity.c2pa.unknown.label": "Ukendte redigeringer eller ukendt aktivitet",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Foretog ændringer af filmetadata",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Ændringer af metadata"
}, JL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Angepasste Eigenschaften wie Farbton, Sättigung, Kurven, Schatten oder Glanzlichter",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Änderung von Farbe oder Belichtung",
  "selectors.editsAndActivity.c2pa.converted.description": "Das Format des Assets wurde geändert",
  "selectors.editsAndActivity.c2pa.converted.label": "Konvertiertes Asset",
  "selectors.editsAndActivity.c2pa.created.description": "Neue Datei oder neuen Inhalt erstellt",
  "selectors.editsAndActivity.c2pa.created.label": "Erstellt",
  "selectors.editsAndActivity.c2pa.cropped.description": "Verwendete Zuschneidewerkzeuge, Verkleinerung oder Erweiterung des sichtbaren Inhaltsbereichs",
  "selectors.editsAndActivity.c2pa.cropped.label": "Zuschneiden von Änderungen",
  "selectors.editsAndActivity.c2pa.deleted.description": "Gelöschte visuelle Bereiche oder Inhaltsdauern",
  "selectors.editsAndActivity.c2pa.deleted.label": "Gelöschter Inhalt",
  "selectors.editsAndActivity.c2pa.drawing.description": "Verwendete Werkzeuge wie Stifte, Pinsel, Radierer oder Form-, Pfad- oder Zeichenstift-Werkzeuge",
  "selectors.editsAndActivity.c2pa.drawing.label": "Zeichnungsänderungen",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Ersetztes Audio",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Synchronisiert",
  "selectors.editsAndActivity.c2pa.edited.description": "Vorgenommene sonstige Änderungen",
  "selectors.editsAndActivity.c2pa.edited.label": "Sonstige Änderungen",
  "selectors.editsAndActivity.c2pa.filtered.description": "Verwendete Tools wie Filter, Stile, Formate oder Effekte, die das Erscheinungsbild ändern",
  "selectors.editsAndActivity.c2pa.filtered.label": "Änderungen filtern oder gestalten",
  "selectors.editsAndActivity.c2pa.opened.description": "Vorhandene Datei geöffnet",
  "selectors.editsAndActivity.c2pa.opened.label": "Geöffnet",
  "selectors.editsAndActivity.c2pa.orientation.description": "Position oder Ausrichtung geändert (gedreht, gespiegelt usw.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Ausrichtungsänderungen",
  "selectors.editsAndActivity.c2pa.placed.description": "Vorhandenen Inhalt zu dieser Datei hinzugefügt",
  "selectors.editsAndActivity.c2pa.placed.label": "Importiert",
  "selectors.editsAndActivity.c2pa.published.description": "Bild empfangen und weiterverteilt",
  "selectors.editsAndActivity.c2pa.published.label": "Bild veröffentlicht",
  "selectors.editsAndActivity.c2pa.removed.description": "Ein oder mehrere Assets wurden aus der Datei entfernt",
  "selectors.editsAndActivity.c2pa.removed.label": "Asset entfernt",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Asset wurde unbearbeitet neu verpackt",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Neu verpacktes Asset",
  "selectors.editsAndActivity.c2pa.resized.description": "Geänderte Abmessungen oder Dateigröße",
  "selectors.editsAndActivity.c2pa.resized.label": "Größenänderungen",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Ein Asset wurde verarbeitet oder komprimiert, um es für die Anzeige zu optimieren",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Verarbeitetes Asset",
  "selectors.editsAndActivity.c2pa.translated.description": "Übersetzter Inhalt",
  "selectors.editsAndActivity.c2pa.translated.label": "Übersetzt",
  "selectors.editsAndActivity.c2pa.unknown.description": "Andere Änderungen oder Aktivitäten durchgeführt, die nicht erkannt werden konnten",
  "selectors.editsAndActivity.c2pa.unknown.label": "Unbekannte Änderungen oder Aktivitäten",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Änderungen an den Dateimetadaten vorgenommen",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Metadatenänderungen"
}, xL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Adjusted properties like tone, saturation, curves, shadows, or highlights",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Color or exposure edits",
  "selectors.editsAndActivity.c2pa.converted.description": "The format of the asset was changed",
  "selectors.editsAndActivity.c2pa.converted.label": "Converted asset",
  "selectors.editsAndActivity.c2pa.created.description": "Created a new file or content",
  "selectors.editsAndActivity.c2pa.created.label": "Created",
  "selectors.editsAndActivity.c2pa.cropped.description": "Used cropping tools, reducing or expanding visible content area",
  "selectors.editsAndActivity.c2pa.cropped.label": "Cropping edits",
  "selectors.editsAndActivity.c2pa.deleted.description": "Deleted visual areas or durations of content",
  "selectors.editsAndActivity.c2pa.deleted.label": "Deleted content",
  "selectors.editsAndActivity.c2pa.drawing.description": "Used tools like pencils, brushes, erasers, or shape, path, or pen tools",
  "selectors.editsAndActivity.c2pa.drawing.label": "Drawing edits",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Replaced audio",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Dubbed",
  "selectors.editsAndActivity.c2pa.edited.description": "Made other changes",
  "selectors.editsAndActivity.c2pa.edited.label": "Other edits",
  "selectors.editsAndActivity.c2pa.filtered.description": "Used tools like filters, styles, or effects to change appearance",
  "selectors.editsAndActivity.c2pa.filtered.label": "Filter or style edits",
  "selectors.editsAndActivity.c2pa.opened.description": "Opened a pre-existing file",
  "selectors.editsAndActivity.c2pa.opened.label": "Opened",
  "selectors.editsAndActivity.c2pa.orientation.description": "Changed position or orientation (rotated, flipped, etc.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Orientation edits",
  "selectors.editsAndActivity.c2pa.placed.description": "Added pre-existing content to this file",
  "selectors.editsAndActivity.c2pa.placed.label": "Imported",
  "selectors.editsAndActivity.c2pa.published.description": "Received and distributed image",
  "selectors.editsAndActivity.c2pa.published.label": "Published image",
  "selectors.editsAndActivity.c2pa.removed.description": "One or more assets were removed from the file",
  "selectors.editsAndActivity.c2pa.removed.label": "Asset removed",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Asset was repackaged without being processed",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Repackaged asset",
  "selectors.editsAndActivity.c2pa.resized.description": "Changed dimensions or file size",
  "selectors.editsAndActivity.c2pa.resized.label": "Resizing edits",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Processed or compressed an asset to optimize for display",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Processed asset",
  "selectors.editsAndActivity.c2pa.translated.description": "Translated content",
  "selectors.editsAndActivity.c2pa.translated.label": "Translated",
  "selectors.editsAndActivity.c2pa.unknown.description": "Performed other edits or activity that couldn't be recognized",
  "selectors.editsAndActivity.c2pa.unknown.label": "Unknown edits or activity",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Made changes to file metadata",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Metadata changes"
}, HL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Se han ajustado propiedades como el tono, la saturación, las curvas, las sombras o las luces",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Ediciones de color o exposición",
  "selectors.editsAndActivity.c2pa.converted.description": "Se ha cambiado el formato del recurso",
  "selectors.editsAndActivity.c2pa.converted.label": "Recurso convertido",
  "selectors.editsAndActivity.c2pa.created.description": "Se ha creado un nuevo archivo o contenido",
  "selectors.editsAndActivity.c2pa.created.label": "Fecha de creación",
  "selectors.editsAndActivity.c2pa.cropped.description": "Se han usado herramientas de recorte, lo que reduce o expande el área de contenido visible",
  "selectors.editsAndActivity.c2pa.cropped.label": "Ediciones de recorte",
  "selectors.editsAndActivity.c2pa.deleted.description": "Áreas visuales o duraciones de contenido eliminadas",
  "selectors.editsAndActivity.c2pa.deleted.label": "Contenido eliminado",
  "selectors.editsAndActivity.c2pa.drawing.description": "Se han usado herramientas como lápices, pinceles, borradores o herramientas de formas, trazados o bolígrafos",
  "selectors.editsAndActivity.c2pa.drawing.label": "Ediciones de dibujo",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Audio reemplazado",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Doblado",
  "selectors.editsAndActivity.c2pa.edited.description": "Se han hecho otros cambios",
  "selectors.editsAndActivity.c2pa.edited.label": "Otras ediciones",
  "selectors.editsAndActivity.c2pa.filtered.description": "Se han usado herramientas como filtros, estilos o efectos para cambiar la apariencia",
  "selectors.editsAndActivity.c2pa.filtered.label": "Ediciones de filtro o estilo",
  "selectors.editsAndActivity.c2pa.opened.description": "Se ha abierto un archivo preexistente",
  "selectors.editsAndActivity.c2pa.opened.label": "Abierto",
  "selectors.editsAndActivity.c2pa.orientation.description": "Se ha cambiado la posición u orientación (girado, volteado, etc.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Ediciones de orientación",
  "selectors.editsAndActivity.c2pa.placed.description": "Se ha añadido contenido preexistente a este archivo",
  "selectors.editsAndActivity.c2pa.placed.label": "Importado",
  "selectors.editsAndActivity.c2pa.published.description": "Imagen recibida y distribuida",
  "selectors.editsAndActivity.c2pa.published.label": "Imagen publicada",
  "selectors.editsAndActivity.c2pa.removed.description": "Uno o más recursos se han eliminado del archivo",
  "selectors.editsAndActivity.c2pa.removed.label": "Recurso eliminado",
  "selectors.editsAndActivity.c2pa.repackaged.description": "El recurso se ha reempaquetado sin procesarse",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Recurso reempaquetado",
  "selectors.editsAndActivity.c2pa.resized.description": "Se han modificado las dimensiones o el tamaño del archivo",
  "selectors.editsAndActivity.c2pa.resized.label": "Ediciones de cambio de tamaño",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Se ha procesado o comprimido un recurso para optimizarlo para su visualización",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Recurso procesado",
  "selectors.editsAndActivity.c2pa.translated.description": "Contenido traducido",
  "selectors.editsAndActivity.c2pa.translated.label": "Traducido",
  "selectors.editsAndActivity.c2pa.unknown.description": "Se han realizado otras ediciones o actividades que no se han podido reconocer",
  "selectors.editsAndActivity.c2pa.unknown.label": "Ediciones o actividad desconocidas",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Se han hecho cambios en los metadatos del archivo",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Cambios de metadatos"
}, TL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Säädetty ominaisuuksia, kuten sävyä, kylläisyyttä, käyriä, varjoja tai kohokohtia",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Väreihin tai valotukseen liittyvät muokkaukset",
  "selectors.editsAndActivity.c2pa.converted.description": "Resurssin muoto on muuttunut.",
  "selectors.editsAndActivity.c2pa.converted.label": "Resurssi muunnettu",
  "selectors.editsAndActivity.c2pa.created.description": "Luotu uusi tiedosto tai uutta sisältöä",
  "selectors.editsAndActivity.c2pa.created.label": "Luotu",
  "selectors.editsAndActivity.c2pa.cropped.description": "Käytetty rajaustyökaluja, vähennetty tai laajennettu näkyvää sisältöaluetta",
  "selectors.editsAndActivity.c2pa.cropped.label": "Rajaukseen liittyvät muokkaukset",
  "selectors.editsAndActivity.c2pa.deleted.description": "Sisällön visuaalisia alueita tai kestoja poistettu",
  "selectors.editsAndActivity.c2pa.deleted.label": "Sisältö poistettu",
  "selectors.editsAndActivity.c2pa.drawing.description": "Käytetty työkaluja, kuten kyniä, siveltimiä, pyyhekumeja tai muoto-, reitti- tai kynätyökaluja",
  "selectors.editsAndActivity.c2pa.drawing.label": "Piirtämiseen liittyvät muokkaukset",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Ääni korvattu",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Dubattu",
  "selectors.editsAndActivity.c2pa.edited.description": "Tehty muita muutoksia",
  "selectors.editsAndActivity.c2pa.edited.label": "Muut muokkaukset",
  "selectors.editsAndActivity.c2pa.filtered.description": "Käytetty työkaluja, kuten ulkoasun muuttamiseen tarkoitettuja suodattimia, tyylejä tai tehosteita",
  "selectors.editsAndActivity.c2pa.filtered.label": "Suodattimeen tai tyyliin liittyvät muokkaukset",
  "selectors.editsAndActivity.c2pa.opened.description": "Avattu olemassa oleva tiedosto",
  "selectors.editsAndActivity.c2pa.opened.label": "Avattu",
  "selectors.editsAndActivity.c2pa.orientation.description": "Muutettu paikkaa tai suuntaa (kierretty, käännetty jne.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Suuntaan liittyvät muokkaukset",
  "selectors.editsAndActivity.c2pa.placed.description": "Lisätty olemassa olevaa sisältöä tähän tiedostoon",
  "selectors.editsAndActivity.c2pa.placed.label": "Tuotu",
  "selectors.editsAndActivity.c2pa.published.description": "Vastaanotettu ja julkaistu kuva",
  "selectors.editsAndActivity.c2pa.published.label": "Julkaistu kuva",
  "selectors.editsAndActivity.c2pa.removed.description": "Yksi tai useampi resurssi poistettiin tiedostosta",
  "selectors.editsAndActivity.c2pa.removed.label": "Resurssi poistettu",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Resurssi pakattiin uudelleen sitä käsittelemättä",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Resurssi pakattu uudelleen",
  "selectors.editsAndActivity.c2pa.resized.description": "Muutettu mittasuhteita tai tiedostokokoa",
  "selectors.editsAndActivity.c2pa.resized.label": "Koon muuttamiseen liittyvät muokkaukset",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Resurssi käsitelty tai pakattu sen optimoimiseksi näyttöä varten",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Resurssi käsitelty",
  "selectors.editsAndActivity.c2pa.translated.description": "Sisältö käännetty",
  "selectors.editsAndActivity.c2pa.translated.label": "Käännetty",
  "selectors.editsAndActivity.c2pa.unknown.description": "Suoritettu muita muokkauksia tai toimintoja, joita ei tunnistettu",
  "selectors.editsAndActivity.c2pa.unknown.label": "Tuntemattomat muokkaukset tai tuntematon toiminta",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Tiedoston metatietoihin tehty muutoksia",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Metatietojen muutokset"
}, qL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Ajustement des propriétés, comme la tonalité, la saturation, les courbes, les ombres ou les tons clairs",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Modifications de la couleur ou de l’exposition",
  "selectors.editsAndActivity.c2pa.converted.description": "Le format de la ressource a été modifié",
  "selectors.editsAndActivity.c2pa.converted.label": "Ressource convertie",
  "selectors.editsAndActivity.c2pa.created.description": "Création d’un fichier ou contenu",
  "selectors.editsAndActivity.c2pa.created.label": "Créé",
  "selectors.editsAndActivity.c2pa.cropped.description": "Utilisation d’outils de recadrage, réduisant ou élargissant la zone de contenu visible",
  "selectors.editsAndActivity.c2pa.cropped.label": "Modifications de recadrage",
  "selectors.editsAndActivity.c2pa.deleted.description": "Zones visuelles ou durées de contenu supprimées",
  "selectors.editsAndActivity.c2pa.deleted.label": "Contenu supprimé",
  "selectors.editsAndActivity.c2pa.drawing.description": "Utilisation d’outils, comme des crayons, des pinceaux, des gommes ou des outils de forme, de tracé ou de plume",
  "selectors.editsAndActivity.c2pa.drawing.label": "Modifications du dessin",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Son remplacé",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Doublé",
  "selectors.editsAndActivity.c2pa.edited.description": "Réalisation d’autres modifications",
  "selectors.editsAndActivity.c2pa.edited.label": "Autres modifications",
  "selectors.editsAndActivity.c2pa.filtered.description": "Utilisation d’outils tels que des filtres, des styles ou des effets pour modifier l’apparence",
  "selectors.editsAndActivity.c2pa.filtered.label": "Modifications du filtre ou du style",
  "selectors.editsAndActivity.c2pa.opened.description": "Ouverture d’un fichier préexistant",
  "selectors.editsAndActivity.c2pa.opened.label": "Ouvert",
  "selectors.editsAndActivity.c2pa.orientation.description": "Modifications de la position ou de l’orientation (rotation, renversement, etc.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Modifications de l’orientation",
  "selectors.editsAndActivity.c2pa.placed.description": "Ajout du contenu préexistant à ce fichier",
  "selectors.editsAndActivity.c2pa.placed.label": "Importé",
  "selectors.editsAndActivity.c2pa.published.description": "Réception et distribution d’une image",
  "selectors.editsAndActivity.c2pa.published.label": "Image publiée",
  "selectors.editsAndActivity.c2pa.removed.description": "Une ou plusieurs ressources ont été supprimées du fichier",
  "selectors.editsAndActivity.c2pa.removed.label": "Ressource supprimée",
  "selectors.editsAndActivity.c2pa.repackaged.description": "La ressource a été reconditionnée sans être traitée",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Ressource reconditionnée",
  "selectors.editsAndActivity.c2pa.resized.description": "Modification des dimensions ou de la taille du fichier",
  "selectors.editsAndActivity.c2pa.resized.label": "Modifications du redimensionnement",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Ressource traitée ou compressée pour optimiser pour l’affichage",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Ressource traitée",
  "selectors.editsAndActivity.c2pa.translated.description": "Contenu traduit",
  "selectors.editsAndActivity.c2pa.translated.label": "Traduit",
  "selectors.editsAndActivity.c2pa.unknown.description": "Réalisation d’autres modifications ou activités qui n’ont pas pu être reconnues",
  "selectors.editsAndActivity.c2pa.unknown.label": "Modifications ou activité inconnues",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Modifications apportées aux métadonnées du fichier",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Modifications des métadonnées"
}, KL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Beállított olyan tulajdonságokat mint árnyalat, telítettség, görbék, árnyékok vagy csúcsfények",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Szín vagy expozíció szerkesztése",
  "selectors.editsAndActivity.c2pa.converted.description": "A kellék formátuma módosítva",
  "selectors.editsAndActivity.c2pa.converted.label": "Konvertált kellék",
  "selectors.editsAndActivity.c2pa.created.description": "Létrehozott egy új fájlt vagy tartalmat",
  "selectors.editsAndActivity.c2pa.created.label": "Létrehozva",
  "selectors.editsAndActivity.c2pa.cropped.description": "Használt vágóeszközöket, amelyek csökkentik vagy bővítik a tartalom látható területét",
  "selectors.editsAndActivity.c2pa.cropped.label": "Vágást használó szerkesztések",
  "selectors.editsAndActivity.c2pa.deleted.description": "A tartalom vizuális területei vagy időtartama törölve",
  "selectors.editsAndActivity.c2pa.deleted.label": "Törölt tartalom",
  "selectors.editsAndActivity.c2pa.drawing.description": "Használt olyan eszközöket mint ceruzák, ecsetek, radírok vagy alakzat-, görbe- vagy tolleszközök",
  "selectors.editsAndActivity.c2pa.drawing.label": "Rajzolást használó szerkesztések",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Hang lecserélve",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Szinkronizálva",
  "selectors.editsAndActivity.c2pa.edited.description": "Egyéb módosítások végrehajtva",
  "selectors.editsAndActivity.c2pa.edited.label": "Egyéb szerkesztések",
  "selectors.editsAndActivity.c2pa.filtered.description": "Használt olyan eszközöket mint szűrők, stílusok vagy effektusok a megjelenés megváltoztatására",
  "selectors.editsAndActivity.c2pa.filtered.label": "Szűrőt vagy stílust használó szerkesztések",
  "selectors.editsAndActivity.c2pa.opened.description": "Megnyitott egy már létező fájlt",
  "selectors.editsAndActivity.c2pa.opened.label": "Megnyitva",
  "selectors.editsAndActivity.c2pa.orientation.description": "Módosította a pozíciót vagy tájolást (elforgatva, megfordítva stb.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Tájolási szerkesztések",
  "selectors.editsAndActivity.c2pa.placed.description": "Már létező tartalmat adott hozzá ehhez a fájlhoz",
  "selectors.editsAndActivity.c2pa.placed.label": "Importálva",
  "selectors.editsAndActivity.c2pa.published.description": "Kapott és terjesztett kép",
  "selectors.editsAndActivity.c2pa.published.label": "Közzétett kép",
  "selectors.editsAndActivity.c2pa.removed.description": "Egy vagy több kellék eltávolítva a fájlból",
  "selectors.editsAndActivity.c2pa.removed.label": "Kellék eltávolítva",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Kellék feldolgozás nélkül újracsomagolva",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Újracsomagolt kellék",
  "selectors.editsAndActivity.c2pa.resized.description": "A méretek vagy a fájl mérete módosult",
  "selectors.editsAndActivity.c2pa.resized.label": "Szerkesztések átméretezése",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Egy kellék feldolgozva vagy tömörítve a megjelenítésre való optimalizáláshoz",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Feldolgozott kellék",
  "selectors.editsAndActivity.c2pa.translated.description": "Lefordított tartalom",
  "selectors.editsAndActivity.c2pa.translated.label": "Lefordítva",
  "selectors.editsAndActivity.c2pa.unknown.description": "Más szerkesztéseket vagy műveleteket hajtott végre, amelyeket nem lehetett felismerni",
  "selectors.editsAndActivity.c2pa.unknown.label": "Ismeretlen szerkesztések vagy tevékenység",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Módosítások elvégezve a fájl metaadataiban",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Metaadatok módosításai"
}, OL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Proprietà regolate come tono, saturazione, curve, ombre o luci",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Modifiche del colore o dell'esposizione",
  "selectors.editsAndActivity.c2pa.converted.description": "Il formato della risorsa è stato modificato",
  "selectors.editsAndActivity.c2pa.converted.label": "Risorsa convertita",
  "selectors.editsAndActivity.c2pa.created.description": "È stato creato un nuovo file o contenuto",
  "selectors.editsAndActivity.c2pa.created.label": "Creato",
  "selectors.editsAndActivity.c2pa.cropped.description": "Strumenti di ritaglio utilizzati, riducendo o espandendo l'area del contenuto visibile",
  "selectors.editsAndActivity.c2pa.cropped.label": "Modifiche di ritaglio",
  "selectors.editsAndActivity.c2pa.deleted.description": "Aree visive o durate dei contenuti eliminate",
  "selectors.editsAndActivity.c2pa.deleted.label": "Contenuto eliminato",
  "selectors.editsAndActivity.c2pa.drawing.description": "Strumenti usati come matite, pennelli, gomme o strumenti forma, tracciato o penna",
  "selectors.editsAndActivity.c2pa.drawing.label": "Modifiche del disegno",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Audio sostituito",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Doppiato",
  "selectors.editsAndActivity.c2pa.edited.description": "Sono state apportate altre modifiche",
  "selectors.editsAndActivity.c2pa.edited.label": "Altre modifiche",
  "selectors.editsAndActivity.c2pa.filtered.description": "Strumenti utilizzati come filtri, stili o effetti per modificare l'aspetto",
  "selectors.editsAndActivity.c2pa.filtered.label": "Modifiche di filtro o stile",
  "selectors.editsAndActivity.c2pa.opened.description": "È stato aperto un file preesistente",
  "selectors.editsAndActivity.c2pa.opened.label": "Aperto",
  "selectors.editsAndActivity.c2pa.orientation.description": "Posizione o orientamento modificati (ruotati, capovolti e così via)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Orientamento modifiche",
  "selectors.editsAndActivity.c2pa.placed.description": "Aggiunto contenuto preesistente a questo file",
  "selectors.editsAndActivity.c2pa.placed.label": "Importato",
  "selectors.editsAndActivity.c2pa.published.description": "Immagine ricevuta e distribuita",
  "selectors.editsAndActivity.c2pa.published.label": "Immagine pubblicata",
  "selectors.editsAndActivity.c2pa.removed.description": "Una o più risorse sono state rimosse dal file",
  "selectors.editsAndActivity.c2pa.removed.label": "Risorsa rimossa",
  "selectors.editsAndActivity.c2pa.repackaged.description": "La risorsa è stata riprogettata senza essere elaborata",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Risorsa riprogettata",
  "selectors.editsAndActivity.c2pa.resized.description": "Dimensioni o grandezza del file modificate",
  "selectors.editsAndActivity.c2pa.resized.label": "Modifiche del ridimensionamento",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Una risorsa è stata elaborata o compressa per essere ottimizzata per la visualizzazione",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Risorsa elaborata",
  "selectors.editsAndActivity.c2pa.translated.description": "Contenuto tradotto",
  "selectors.editsAndActivity.c2pa.translated.label": "Tradotto",
  "selectors.editsAndActivity.c2pa.unknown.description": "Sono state eseguite altre modifiche o attività che non è stato possibile riconoscere",
  "selectors.editsAndActivity.c2pa.unknown.label": "Modifiche o attività sconosciute",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Modifiche apportate ai metadati del file",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Modifiche metadati"
}, WL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "トーン、彩度、カーブ、シャドウ、ハイライトなどのプロパティを調整",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "カラーまたは露出の編集",
  "selectors.editsAndActivity.c2pa.converted.description": "アセットの形式が変更されました",
  "selectors.editsAndActivity.c2pa.converted.label": "変換されたアセット",
  "selectors.editsAndActivity.c2pa.created.description": "新しいファイルまたはコンテンツを作成",
  "selectors.editsAndActivity.c2pa.created.label": "作成済み",
  "selectors.editsAndActivity.c2pa.cropped.description": "切り抜きツールを使用、表示されているコンテンツ領域の縮小または拡大",
  "selectors.editsAndActivity.c2pa.cropped.label": "切り抜きの編集",
  "selectors.editsAndActivity.c2pa.deleted.description": "削除された視覚領域またはコンテンツの継続時間",
  "selectors.editsAndActivity.c2pa.deleted.label": "削除されたコンテンツ",
  "selectors.editsAndActivity.c2pa.drawing.description": "鉛筆、ブラシ、消しゴム、シェイプ、パス、ペンツールなどのツールを使用",
  "selectors.editsAndActivity.c2pa.drawing.label": "描画の編集",
  "selectors.editsAndActivity.c2pa.dubbed.description": "オーディオを置換しました",
  "selectors.editsAndActivity.c2pa.dubbed.label": "吹き替え済み",
  "selectors.editsAndActivity.c2pa.edited.description": "その他の変更",
  "selectors.editsAndActivity.c2pa.edited.label": "その他の編集",
  "selectors.editsAndActivity.c2pa.filtered.description": "フィルター、スタイル、効果などのツールを使用して外観を変更",
  "selectors.editsAndActivity.c2pa.filtered.label": "フィルターまたはスタイルの編集",
  "selectors.editsAndActivity.c2pa.opened.description": "既存のファイルを開いた",
  "selectors.editsAndActivity.c2pa.opened.label": "開いた",
  "selectors.editsAndActivity.c2pa.orientation.description": "位置または方向を変更 (回転、反転など)",
  "selectors.editsAndActivity.c2pa.orientation.label": "画像方向編集",
  "selectors.editsAndActivity.c2pa.placed.description": "このファイルに既存のコンテンツを追加",
  "selectors.editsAndActivity.c2pa.placed.label": "読み込み済み",
  "selectors.editsAndActivity.c2pa.published.description": "受信および配信した画像",
  "selectors.editsAndActivity.c2pa.published.label": "公開した画像",
  "selectors.editsAndActivity.c2pa.removed.description": "1 つ以上のアセットがファイルから削除されました",
  "selectors.editsAndActivity.c2pa.removed.label": "アセットが削除されました",
  "selectors.editsAndActivity.c2pa.repackaged.description": "アセットは処理されずに再パッケージ化されました",
  "selectors.editsAndActivity.c2pa.repackaged.label": "再パッケージ化されたアセット",
  "selectors.editsAndActivity.c2pa.resized.description": "寸法またはファイルサイズを変更",
  "selectors.editsAndActivity.c2pa.resized.label": "サイズ変更の編集",
  "selectors.editsAndActivity.c2pa.transcoded.description": "表示を最適化するためにアセットを処理または圧縮しました",
  "selectors.editsAndActivity.c2pa.transcoded.label": "処理済みアセット",
  "selectors.editsAndActivity.c2pa.translated.description": "翻訳されたコンテンツ",
  "selectors.editsAndActivity.c2pa.translated.label": "翻訳済み",
  "selectors.editsAndActivity.c2pa.unknown.description": "認識できない他の編集またはアクティビティを実行",
  "selectors.editsAndActivity.c2pa.unknown.label": "不明な編集またはアクティビティ",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "ファイルのメタデータに変更を加えました",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "メタデータの変更"
}, PL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "톤, 채도, 곡선, 그림자 또는 하이라이트와 같은 조정된 속성",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "색상 또는 노출 편집",
  "selectors.editsAndActivity.c2pa.converted.description": "자산 포맷이 변경됨",
  "selectors.editsAndActivity.c2pa.converted.label": "변환된 자산",
  "selectors.editsAndActivity.c2pa.created.description": "새 파일 또는 콘텐츠 생성됨",
  "selectors.editsAndActivity.c2pa.created.label": "생성됨",
  "selectors.editsAndActivity.c2pa.cropped.description": "사용된 자르기 도구, 보이는 콘텐츠 영역 축소 또는 확장",
  "selectors.editsAndActivity.c2pa.cropped.label": "자르기 편집",
  "selectors.editsAndActivity.c2pa.deleted.description": "삭제된 시각적 영역 또는 콘텐츠의 기간",
  "selectors.editsAndActivity.c2pa.deleted.label": "삭제된 콘텐츠",
  "selectors.editsAndActivity.c2pa.drawing.description": "연필, 브러시, 지우개 또는 모양, 경로 또는 펜 도구와 같은 사용된 도구",
  "selectors.editsAndActivity.c2pa.drawing.label": "그리기 편집",
  "selectors.editsAndActivity.c2pa.dubbed.description": "교체된 오디오",
  "selectors.editsAndActivity.c2pa.dubbed.label": "더빙됨",
  "selectors.editsAndActivity.c2pa.edited.description": "기타 변경 사항 적용됨",
  "selectors.editsAndActivity.c2pa.edited.label": "기타 편집",
  "selectors.editsAndActivity.c2pa.filtered.description": "필터, 스타일 또는 효과와 같은 모양 변경에 사용된 도구",
  "selectors.editsAndActivity.c2pa.filtered.label": "필터 또는 스타일 편집",
  "selectors.editsAndActivity.c2pa.opened.description": "기존 파일 열림",
  "selectors.editsAndActivity.c2pa.opened.label": "열림",
  "selectors.editsAndActivity.c2pa.orientation.description": "변경된 위치 또는 방향 (회전, 반전 등)",
  "selectors.editsAndActivity.c2pa.orientation.label": "방향 편집",
  "selectors.editsAndActivity.c2pa.placed.description": "이 파일에 기존 콘텐츠 추가됨",
  "selectors.editsAndActivity.c2pa.placed.label": "가져옴",
  "selectors.editsAndActivity.c2pa.published.description": "접수 및 배포된 이미지",
  "selectors.editsAndActivity.c2pa.published.label": "게시된 이미지",
  "selectors.editsAndActivity.c2pa.removed.description": "하나 이상의 자산이 파일에서 제거됨",
  "selectors.editsAndActivity.c2pa.removed.label": "에셋 제거됨",
  "selectors.editsAndActivity.c2pa.repackaged.description": "자산이 처리되지 않고 다시 패키징됨",
  "selectors.editsAndActivity.c2pa.repackaged.label": "다시 패키징된 자산",
  "selectors.editsAndActivity.c2pa.resized.description": "변경된 치수 또는 파일 크기",
  "selectors.editsAndActivity.c2pa.resized.label": "크기 조정 편집",
  "selectors.editsAndActivity.c2pa.transcoded.description": "최적화된 표시를 위해 자산을 처리하거나 압축했습니다",
  "selectors.editsAndActivity.c2pa.transcoded.label": "처리된 자산",
  "selectors.editsAndActivity.c2pa.translated.description": "번역된 콘텐츠",
  "selectors.editsAndActivity.c2pa.translated.label": "번역됨",
  "selectors.editsAndActivity.c2pa.unknown.description": "수행되었으나 인식할 수 없는 기타 편집 또는 활동",
  "selectors.editsAndActivity.c2pa.unknown.label": "알 수 없는 편집 또는 활동",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "파일 메타데이터가 변경됨",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "메타데이터 변경 사항"
}, zL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Justerte egenskaper som tone, metning, kurver, skygger eller høylys",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Farge- eller eksponeringsredigeringer",
  "selectors.editsAndActivity.c2pa.converted.description": "Formatet til ressursen ble endret",
  "selectors.editsAndActivity.c2pa.converted.label": "Konvertert ressurs",
  "selectors.editsAndActivity.c2pa.created.description": "Opprettet en ny fil eller nytt innhold",
  "selectors.editsAndActivity.c2pa.created.label": "Opprettet",
  "selectors.editsAndActivity.c2pa.cropped.description": "Brukte beskjæringsverktøy for å redusere eller utvide synlig innholdsområde",
  "selectors.editsAndActivity.c2pa.cropped.label": "Beskjæringsredigeringer",
  "selectors.editsAndActivity.c2pa.deleted.description": "Slettede visuelle områder eller innholdsvarighet",
  "selectors.editsAndActivity.c2pa.deleted.label": "Slettet innhold",
  "selectors.editsAndActivity.c2pa.drawing.description": "Brukte verktøy som blyanter, pensler, viskelær eller form-, bane- eller pennverktøy",
  "selectors.editsAndActivity.c2pa.drawing.label": "Tegneredigeringer",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Erstattet lyd",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Dubbet",
  "selectors.editsAndActivity.c2pa.edited.description": "Gjorde andre endringer",
  "selectors.editsAndActivity.c2pa.edited.label": "Andre redigeringer",
  "selectors.editsAndActivity.c2pa.filtered.description": "Brukte verktøy som filtre, stiler eller effekter for å endre utseende",
  "selectors.editsAndActivity.c2pa.filtered.label": "Filter- eller stilredigeringer",
  "selectors.editsAndActivity.c2pa.opened.description": "Åpnet en eksisterende fil",
  "selectors.editsAndActivity.c2pa.opened.label": "Åpnet",
  "selectors.editsAndActivity.c2pa.orientation.description": "Endret posisjon eller retning (rotert, snudd osv.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Retnings- redigeringer",
  "selectors.editsAndActivity.c2pa.placed.description": "La til eksisterende innhold i denne filen",
  "selectors.editsAndActivity.c2pa.placed.label": "Importert",
  "selectors.editsAndActivity.c2pa.published.description": "Mottatt og distribuert bilde",
  "selectors.editsAndActivity.c2pa.published.label": "Publisert bilde",
  "selectors.editsAndActivity.c2pa.removed.description": "Én eller flere ressurser ble fjernet fra filen",
  "selectors.editsAndActivity.c2pa.removed.label": "Ressursen er fjernet",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Ressursen ble ompakket uten å bli behandlet",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Ompakket ressurs",
  "selectors.editsAndActivity.c2pa.resized.description": "Endret dimensjoner eller filstørrelse",
  "selectors.editsAndActivity.c2pa.resized.label": "Størrelsesendringer",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Behandlet eller komprimert en ressurs for å optimalisere for visning",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Behandlet ressurs",
  "selectors.editsAndActivity.c2pa.translated.description": "Oversatt innhold",
  "selectors.editsAndActivity.c2pa.translated.label": "Oversatt",
  "selectors.editsAndActivity.c2pa.unknown.description": "Utførte andre redigeringer eller aktiviteter som ikke gjenkjennes",
  "selectors.editsAndActivity.c2pa.unknown.label": "Ukjent endring eller aktivitet",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Gjorde endringer i fil-metadata",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Endringer i metadata"
}, $L = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Eigenschappen zoals tint, verzadiging, curven, schaduwen of hooglichten aangepast",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Kleur- of belichtingsbewerkingen",
  "selectors.editsAndActivity.c2pa.converted.description": "De indeling van het asset is gewijzigd",
  "selectors.editsAndActivity.c2pa.converted.label": "Asset geconverteerd",
  "selectors.editsAndActivity.c2pa.created.description": "Een nieuw bestand of nieuwe content gemaakt",
  "selectors.editsAndActivity.c2pa.created.label": "Gemaakt",
  "selectors.editsAndActivity.c2pa.cropped.description": "Uitsnedegereedschappen gebruikt om het zichtbare deel van de content te beperken of uit te breiden",
  "selectors.editsAndActivity.c2pa.cropped.label": "Uitsnedebewerkingen",
  "selectors.editsAndActivity.c2pa.deleted.description": "Visuele delen of duur van content verwijderd",
  "selectors.editsAndActivity.c2pa.deleted.label": "Content verwijderd",
  "selectors.editsAndActivity.c2pa.drawing.description": "Gereedschappen gebruikt zoals potloden, penselen, gummetjes, pennen of vorm- of padgereedschappen",
  "selectors.editsAndActivity.c2pa.drawing.label": "Tekenbewerkingen",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Audio vervangen",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Nagesynchroniseerd",
  "selectors.editsAndActivity.c2pa.edited.description": "Andere wijzigingen aangebracht",
  "selectors.editsAndActivity.c2pa.edited.label": "Andere bewerkingen",
  "selectors.editsAndActivity.c2pa.filtered.description": "Gereedschappen zoals filters, stijlen of effecten gebruikt om het uiterlijk te veranderen",
  "selectors.editsAndActivity.c2pa.filtered.label": "Filter- of stijlbewerkingen",
  "selectors.editsAndActivity.c2pa.opened.description": "Een bestaand bestand geopend",
  "selectors.editsAndActivity.c2pa.opened.label": "Geopend",
  "selectors.editsAndActivity.c2pa.orientation.description": "Positie of stand gewijzigd (gedraaid, gespiegeld etc.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Bewerkingen in afdrukstand",
  "selectors.editsAndActivity.c2pa.placed.description": "Bestaande content aan dit bestand toegevoegd",
  "selectors.editsAndActivity.c2pa.placed.label": "Geïmporteerd",
  "selectors.editsAndActivity.c2pa.published.description": "Afbeelding ontvangen en verspreid",
  "selectors.editsAndActivity.c2pa.published.label": "Afbeelding gepubliceerd",
  "selectors.editsAndActivity.c2pa.removed.description": "Een of meer assets zijn uit het bestand verwijderd",
  "selectors.editsAndActivity.c2pa.removed.label": "Asset verwijderd",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Nieuw pakket van asset gemaakt zonder verwerking",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Nieuw pakket van asset gemaakt",
  "selectors.editsAndActivity.c2pa.resized.description": "Afmetingen of bestandsgrootte gewijzigd",
  "selectors.editsAndActivity.c2pa.resized.label": "Formaatbewerkingen",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Een asset is verwerkt of gecomprimeerd om het te optimaliseren voor weergave",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Asset verwerkt",
  "selectors.editsAndActivity.c2pa.translated.description": "Content vertaald",
  "selectors.editsAndActivity.c2pa.translated.label": "Vertaald",
  "selectors.editsAndActivity.c2pa.unknown.description": "Andere bewerkingen of activiteiten uitgevoerd die niet konden worden herkend",
  "selectors.editsAndActivity.c2pa.unknown.label": "Onbekende bewerkingen of activiteiten",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Wijzigingen aangebracht in metadata van bestand",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Wijzigingen in metadata"
}, jL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Zmodyfikowano właściwości, takie jak tonacja, nasycenie, krzywe, cienie lub światła",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Wprowadzono zmiany kolorów lub ekspozycji",
  "selectors.editsAndActivity.c2pa.converted.description": "Zmieniono format zasobu",
  "selectors.editsAndActivity.c2pa.converted.label": "Przekonwertowano zasób",
  "selectors.editsAndActivity.c2pa.created.description": "Utworzono nowy plik lub zawartość",
  "selectors.editsAndActivity.c2pa.created.label": "Utworzono",
  "selectors.editsAndActivity.c2pa.cropped.description": "Użyto narzędzi do kadrowania w celu zmniejszenia lub rozszerzenia widocznego obszaru zawartości",
  "selectors.editsAndActivity.c2pa.cropped.label": "Modyfikacje polegające na kadrowaniu",
  "selectors.editsAndActivity.c2pa.deleted.description": "Usunięte obszary wizualne lub czasy trwania treści",
  "selectors.editsAndActivity.c2pa.deleted.label": "Usunięto treść",
  "selectors.editsAndActivity.c2pa.drawing.description": "Użyto takich narzędzi, jak ołówki, pędzle i gumki albo narzędzi kształtów, ścieżek lub pióra",
  "selectors.editsAndActivity.c2pa.drawing.label": "Modyfikacje rysunkowe",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Wymienione audio",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Zdubbingowano",
  "selectors.editsAndActivity.c2pa.edited.description": "Wprowadzono inne zmiany",
  "selectors.editsAndActivity.c2pa.edited.label": "Inne modyfikacje",
  "selectors.editsAndActivity.c2pa.filtered.description": "Użyto narzędzi, takich jak filtry, style lub efekty, aby zmienić wygląd",
  "selectors.editsAndActivity.c2pa.filtered.label": "Edycje filtrów lub stylów",
  "selectors.editsAndActivity.c2pa.opened.description": "Otwarto wcześniej istniejący plik",
  "selectors.editsAndActivity.c2pa.opened.label": "Otwarto",
  "selectors.editsAndActivity.c2pa.orientation.description": "Zmieniono pozycję lub orientację (obrócono, odwrócono itp.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Orientacja modyfikacje",
  "selectors.editsAndActivity.c2pa.placed.description": "Dodano wcześniej istniejącą zawartość do tego pliku",
  "selectors.editsAndActivity.c2pa.placed.label": "Zaimportowano",
  "selectors.editsAndActivity.c2pa.published.description": "Otrzymano i rozpowszechniono obraz",
  "selectors.editsAndActivity.c2pa.published.label": "Opublikowano obraz",
  "selectors.editsAndActivity.c2pa.removed.description": "Z pliku usunięto co najmniej jeden zasób",
  "selectors.editsAndActivity.c2pa.removed.label": "Usunięto zasób",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Zasób został przepakowany bez przetworzenia",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Przepakowano zasób",
  "selectors.editsAndActivity.c2pa.resized.description": "Zmieniono wymiary lub rozmiar pliku",
  "selectors.editsAndActivity.c2pa.resized.label": "Modyfikacje polegające na zmianie rozmiaru",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Przetworzono lub skompresowano zasób w celu optymalizacji pod kątem wyświetlania",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Przetworzono zasób",
  "selectors.editsAndActivity.c2pa.translated.description": "Przetłumaczono treść",
  "selectors.editsAndActivity.c2pa.translated.label": "Przetłumaczono",
  "selectors.editsAndActivity.c2pa.unknown.description": "Dokonano innych zmian lub wykonano operacje, których nie można rozpoznać",
  "selectors.editsAndActivity.c2pa.unknown.label": "Nieznane zmiany lub operacje",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Wprowadzono zmiany w metadanych pliku",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Zmiany metadanych"
}, ZL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Propriedades como tom, saturação, curvas, sombras ou realces ajustadas",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Edições de cor ou exposição",
  "selectors.editsAndActivity.c2pa.converted.description": "O formato do ativo foi alterado",
  "selectors.editsAndActivity.c2pa.converted.label": "Ativo convertido",
  "selectors.editsAndActivity.c2pa.created.description": "Arquivo ou conteúdo criado",
  "selectors.editsAndActivity.c2pa.created.label": "Criado",
  "selectors.editsAndActivity.c2pa.cropped.description": "Ferramentas de corte usadas, reduzindo ou expandindo a área de conteúdo visível",
  "selectors.editsAndActivity.c2pa.cropped.label": "Edições de corte",
  "selectors.editsAndActivity.c2pa.deleted.description": "Áreas visuais ou durações de conteúdo excluídas",
  "selectors.editsAndActivity.c2pa.deleted.label": "Conteúdo excluído",
  "selectors.editsAndActivity.c2pa.drawing.description": "Ferramentas como lápis, pincéis, borrachas ou ferramentas de forma, caminho ou caneta usadas",
  "selectors.editsAndActivity.c2pa.drawing.label": "Edições de desenho",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Áudio substituído",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Apelidado",
  "selectors.editsAndActivity.c2pa.edited.description": "Outras alterações feitas",
  "selectors.editsAndActivity.c2pa.edited.label": "Outras edições",
  "selectors.editsAndActivity.c2pa.filtered.description": "Ferramentas como filtros, estilos ou efeitos usadas para alterar a aparência",
  "selectors.editsAndActivity.c2pa.filtered.label": "Edições de filtro ou estilo",
  "selectors.editsAndActivity.c2pa.opened.description": "Arquivo pré-existente aberto",
  "selectors.editsAndActivity.c2pa.opened.label": "Aberto",
  "selectors.editsAndActivity.c2pa.orientation.description": "Posição ou orientação alterada (girado, invertido etc.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Edições de orientação",
  "selectors.editsAndActivity.c2pa.placed.description": "Conteúdo pré-existente adicionado a este arquivo",
  "selectors.editsAndActivity.c2pa.placed.label": "Importado",
  "selectors.editsAndActivity.c2pa.published.description": "Imagem recebida e distribuída",
  "selectors.editsAndActivity.c2pa.published.label": "Imagem publicada",
  "selectors.editsAndActivity.c2pa.removed.description": "Um ou mais ativos foram removidos do arquivo",
  "selectors.editsAndActivity.c2pa.removed.label": "Ativo removido",
  "selectors.editsAndActivity.c2pa.repackaged.description": "O ativo foi reempacotado sem ser processado",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Ativo reempacotado",
  "selectors.editsAndActivity.c2pa.resized.description": "Dimensões ou tamanho do arquivo alterados",
  "selectors.editsAndActivity.c2pa.resized.label": "Edições de redimensionamento",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Ativo processado ou compactado para otimizar a exibição",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Ativo processado",
  "selectors.editsAndActivity.c2pa.translated.description": "Conteúdo traduzido",
  "selectors.editsAndActivity.c2pa.translated.label": "Traduzido",
  "selectors.editsAndActivity.c2pa.unknown.description": "Não foi possível reconhecer outras edições ou atividades realizadas",
  "selectors.editsAndActivity.c2pa.unknown.label": "Edições ou atividades desconhecidas",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Alterações feitas nos metadados do arquivo",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Alterações de metadados"
}, XL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Измененные свойства, например тон, насыщенность, кривые, тени или блики.",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Редактирование цвета или экспозиции",
  "selectors.editsAndActivity.c2pa.converted.description": "Формат ресурса изменен",
  "selectors.editsAndActivity.c2pa.converted.label": "Конвертированный ресурс",
  "selectors.editsAndActivity.c2pa.created.description": "Создан новый файл или контент",
  "selectors.editsAndActivity.c2pa.created.label": "Создано",
  "selectors.editsAndActivity.c2pa.cropped.description": "Используемые инструменты обрезки, уменьшение или расширение видимой области содержимого",
  "selectors.editsAndActivity.c2pa.cropped.label": "Редактирование обрезки",
  "selectors.editsAndActivity.c2pa.deleted.description": "Удалены визуальные области или продолжительность контента",
  "selectors.editsAndActivity.c2pa.deleted.label": "Удаленный контент",
  "selectors.editsAndActivity.c2pa.drawing.description": "Используемые инструменты, например карандаши, кисти, ластики или другие инструменты (форма, контур или перо)",
  "selectors.editsAndActivity.c2pa.drawing.label": "Редактирование чертежа",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Заменено аудио",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Дублированный",
  "selectors.editsAndActivity.c2pa.edited.description": "Внесены другие изменения",
  "selectors.editsAndActivity.c2pa.edited.label": "Другие изменения",
  "selectors.editsAndActivity.c2pa.filtered.description": "Используемые инструменты для изменения внешнего вида, например фильтры, стили или эффекты",
  "selectors.editsAndActivity.c2pa.filtered.label": "Редактирование фильтров или стилей",
  "selectors.editsAndActivity.c2pa.opened.description": "Открыт ранее созданный файл",
  "selectors.editsAndActivity.c2pa.opened.label": "Открыто",
  "selectors.editsAndActivity.c2pa.orientation.description": "Изменено положение или ориентация (повернуто, перевернуто и т. д.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Ориентация правки",
  "selectors.editsAndActivity.c2pa.placed.description": "В этот файл добавлен уже существующий контент",
  "selectors.editsAndActivity.c2pa.placed.label": "Импортировано",
  "selectors.editsAndActivity.c2pa.published.description": "Изображение, которое получено и распространено",
  "selectors.editsAndActivity.c2pa.published.label": "Опубликованное изображение",
  "selectors.editsAndActivity.c2pa.removed.description": "Один или несколько ресурсов удалены из файла",
  "selectors.editsAndActivity.c2pa.removed.label": "Ресурс удален",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Ресурс переупакован без обработки",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Переупакованный ресурс",
  "selectors.editsAndActivity.c2pa.resized.description": "Изменены размеры изображения или размер файла",
  "selectors.editsAndActivity.c2pa.resized.label": "Изменение размеров",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Обработан или сжат ресурс для оптимизации при отображении",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Обработанный ресурс",
  "selectors.editsAndActivity.c2pa.translated.description": "Переведенный контент",
  "selectors.editsAndActivity.c2pa.translated.label": "Переведенный",
  "selectors.editsAndActivity.c2pa.unknown.description": "Внесены другие правки или выполнены иные действия, которые не удалось распознать",
  "selectors.editsAndActivity.c2pa.unknown.label": "Неизвестные изменения или действия",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Внесены изменения в метаданные файла",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Изменения метаданных"
}, VL = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Justerade egenskaper som ton, mättnad, kurvor, skuggor och högdagrar",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Ändringar av färg eller exponering",
  "selectors.editsAndActivity.c2pa.converted.description": "Formatet på mediefilen ändrades",
  "selectors.editsAndActivity.c2pa.converted.label": "Konverterade mediefilen",
  "selectors.editsAndActivity.c2pa.created.description": "Skapade en ny fil eller nytt innehåll",
  "selectors.editsAndActivity.c2pa.created.label": "Skapat",
  "selectors.editsAndActivity.c2pa.cropped.description": "Använde beskärningsverktyg, minskade eller utökade synligt innehållsområde",
  "selectors.editsAndActivity.c2pa.cropped.label": "Beskärningsändringar",
  "selectors.editsAndActivity.c2pa.deleted.description": "Raderade visuella områden eller innehållets varaktighet",
  "selectors.editsAndActivity.c2pa.deleted.label": "Raderade innehåll",
  "selectors.editsAndActivity.c2pa.drawing.description": "Använde verktyg som pennor, penslar, suddgummin eller verktygen form, bana eller penna",
  "selectors.editsAndActivity.c2pa.drawing.label": "Teckningsändringar",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Ersatte ljud",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Dubbade",
  "selectors.editsAndActivity.c2pa.edited.description": "Gjorde andra ändringar",
  "selectors.editsAndActivity.c2pa.edited.label": "Andra ändringar",
  "selectors.editsAndActivity.c2pa.filtered.description": "Använde verktyg som filter, stilar eller effekter för att ändra utseende",
  "selectors.editsAndActivity.c2pa.filtered.label": "Redigering av filter eller stil",
  "selectors.editsAndActivity.c2pa.opened.description": "Öppnade en befintlig fil",
  "selectors.editsAndActivity.c2pa.opened.label": "Öppnat",
  "selectors.editsAndActivity.c2pa.orientation.description": "Ändrade placering eller orientering (roterad, vänd osv.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Orienteringsändringar",
  "selectors.editsAndActivity.c2pa.placed.description": "Lade till befintligt innehåll i den här filen",
  "selectors.editsAndActivity.c2pa.placed.label": "Importerat",
  "selectors.editsAndActivity.c2pa.published.description": "Mottagen och distribuerad bild",
  "selectors.editsAndActivity.c2pa.published.label": "Publicerade bild",
  "selectors.editsAndActivity.c2pa.removed.description": "En eller flera mediefiler togs bort från filen",
  "selectors.editsAndActivity.c2pa.removed.label": "Mediefilen togs bort",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Mediefilen packades om utan att bearbetas",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Paketerade om mediefilen",
  "selectors.editsAndActivity.c2pa.resized.description": "Ändrade mått eller filstorlek",
  "selectors.editsAndActivity.c2pa.resized.label": "Storleksändringar",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Bearbetade eller komprimerade en mediefil för att optimera för visning",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Bearbetade mediefilen",
  "selectors.editsAndActivity.c2pa.translated.description": "Översatte innehåll",
  "selectors.editsAndActivity.c2pa.translated.label": "Översatte",
  "selectors.editsAndActivity.c2pa.unknown.description": "Utförde andra redigeringar eller aktiviteter som inte kunde identifieras",
  "selectors.editsAndActivity.c2pa.unknown.label": "Okänd redigering eller aktivitet",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Ändrade i filmetadata",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Metadataändringar"
}, AM = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Ton, doygunluk, eğriler, gölgeler veya vurgular gibi ayarlanmış özellikler",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Renk veya pozlama düzenlemeleri",
  "selectors.editsAndActivity.c2pa.converted.description": "Varlığın formatı değiştirildi",
  "selectors.editsAndActivity.c2pa.converted.label": "Varlık dönüştürüldü",
  "selectors.editsAndActivity.c2pa.created.description": "Yeni bir dosya veya içerik oluşturuldu",
  "selectors.editsAndActivity.c2pa.created.label": "Oluşturuldu",
  "selectors.editsAndActivity.c2pa.cropped.description": "Kırpma araçları kullanılarak görünür içerik alanı küçültüldü veya genişletildi",
  "selectors.editsAndActivity.c2pa.cropped.label": "Kırpma düzenlemeleri",
  "selectors.editsAndActivity.c2pa.deleted.description": "İçeriğin görsel alanları veya süreleri silindi",
  "selectors.editsAndActivity.c2pa.deleted.label": "İçerik silindi",
  "selectors.editsAndActivity.c2pa.drawing.description": "Kurşun kalem, fırça, silgi veya şekil, yol ya da kalem araçları gibi araçlar kullanıldı",
  "selectors.editsAndActivity.c2pa.drawing.label": "Çizim düzenlemeleri",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Ses içeriği değiştirildi",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Dublajı yapıldı",
  "selectors.editsAndActivity.c2pa.edited.description": "Diğer değişiklikler yapıldı",
  "selectors.editsAndActivity.c2pa.edited.label": "Diğer düzenlemeler",
  "selectors.editsAndActivity.c2pa.filtered.description": "Görünümü değiştirmek için filtre, stil veya efekt gibi araçlar kullanıldı",
  "selectors.editsAndActivity.c2pa.filtered.label": "Filtre veya stil düzenlemeleri",
  "selectors.editsAndActivity.c2pa.opened.description": "Mevcut bir dosya açıldı",
  "selectors.editsAndActivity.c2pa.opened.label": "Açıldı",
  "selectors.editsAndActivity.c2pa.orientation.description": "Konum veya yönlendirme değiştirildi (döndürüldü, ters çevrildi vb.)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Yönlendirme düzenlemeleri",
  "selectors.editsAndActivity.c2pa.placed.description": "Mevcut içerik bu dosyaya eklendi",
  "selectors.editsAndActivity.c2pa.placed.label": "İçe aktarıldı",
  "selectors.editsAndActivity.c2pa.published.description": "Görüntü alındı ve dağıtıldı",
  "selectors.editsAndActivity.c2pa.published.label": "Görüntü yayımlandığında",
  "selectors.editsAndActivity.c2pa.removed.description": "Dosyadan bir veya daha fazla varlık kaldırıldı",
  "selectors.editsAndActivity.c2pa.removed.label": "Varlık kaldırıldı",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Varlık işlenmeden yeniden paketlendi",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Varlık yeniden paketlendi",
  "selectors.editsAndActivity.c2pa.resized.description": "Boyutlar veya dosya boyutu değiştirildi",
  "selectors.editsAndActivity.c2pa.resized.label": "Yeniden boyutlandırma düzenlemeleri",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Ekran için optimize etmek üzere varlık işlendi veya sıkıştırıldı",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Varlık işlendi",
  "selectors.editsAndActivity.c2pa.translated.description": "İçerik çevrildi",
  "selectors.editsAndActivity.c2pa.translated.label": "Çevrildi",
  "selectors.editsAndActivity.c2pa.unknown.description": "Algılanamayan başka düzenlemeler veya etkinlikler gerçekleştirildi",
  "selectors.editsAndActivity.c2pa.unknown.label": "Bilinmeyen düzenlemeler veya etkinlikler",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Dosya meta verilerinde değişiklikler yapıldı",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Meta veri değişiklikleri"
}, eM = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "Скориговано властивості, як-от тон, насиченість, криві, тіні або підсвічування",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "Зміни кольору або експозиції",
  "selectors.editsAndActivity.c2pa.converted.description": "Формат ресурсу змінено",
  "selectors.editsAndActivity.c2pa.converted.label": "Перетворений ресурс",
  "selectors.editsAndActivity.c2pa.created.description": "Створено новий файл або вміст",
  "selectors.editsAndActivity.c2pa.created.label": "Створено",
  "selectors.editsAndActivity.c2pa.cropped.description": "Використано інструменти кадрування, зменшення або розширення області видимого вмісту",
  "selectors.editsAndActivity.c2pa.cropped.label": "Зміни кадрування",
  "selectors.editsAndActivity.c2pa.deleted.description": "Видалено візуальні області або тривалість вмісту",
  "selectors.editsAndActivity.c2pa.deleted.label": "Видалений вміст",
  "selectors.editsAndActivity.c2pa.drawing.description": "Використано інструменти, як-от олівці, пензлі, гумки, або інструменти для форм, контурів або пера",
  "selectors.editsAndActivity.c2pa.drawing.label": "Зміни малювання",
  "selectors.editsAndActivity.c2pa.dubbed.description": "Замінене аудіо",
  "selectors.editsAndActivity.c2pa.dubbed.label": "Дубльовано",
  "selectors.editsAndActivity.c2pa.edited.description": "Внесено інші зміни",
  "selectors.editsAndActivity.c2pa.edited.label": "Інші зміни",
  "selectors.editsAndActivity.c2pa.filtered.description": "Використано інструменти, як-от фільтри, стилі чи ефекти для зміни вигляду",
  "selectors.editsAndActivity.c2pa.filtered.label": "Зміни фільтру або стилю",
  "selectors.editsAndActivity.c2pa.opened.description": "Відкрито вже існуючий файл",
  "selectors.editsAndActivity.c2pa.opened.label": "Відкрито",
  "selectors.editsAndActivity.c2pa.orientation.description": "Змінено положення або орієнтація (повернуто, віддзеркалено тощо)",
  "selectors.editsAndActivity.c2pa.orientation.label": "Зміни орієнтації",
  "selectors.editsAndActivity.c2pa.placed.description": "Додано вже існуючий вміст до цього файлу",
  "selectors.editsAndActivity.c2pa.placed.label": "Імпортовано",
  "selectors.editsAndActivity.c2pa.published.description": "Отримане й розповсюджене зображення",
  "selectors.editsAndActivity.c2pa.published.label": "Опубліковане зображення",
  "selectors.editsAndActivity.c2pa.removed.description": "Один або більше ресурсів видалено з файлу",
  "selectors.editsAndActivity.c2pa.removed.label": "Ресурс видалено",
  "selectors.editsAndActivity.c2pa.repackaged.description": "Ресурс було запаковано повторно без обробки",
  "selectors.editsAndActivity.c2pa.repackaged.label": "Повторно упакований ресурс",
  "selectors.editsAndActivity.c2pa.resized.description": "Змінено геометричні розміри або розмір файлу",
  "selectors.editsAndActivity.c2pa.resized.label": "Зміни розміру",
  "selectors.editsAndActivity.c2pa.transcoded.description": "Оброблений або стиснутий ресурс для оптимізації під час відображення",
  "selectors.editsAndActivity.c2pa.transcoded.label": "Оброблений ресурс",
  "selectors.editsAndActivity.c2pa.translated.description": "Перекладений вміст",
  "selectors.editsAndActivity.c2pa.translated.label": "Перекладено",
  "selectors.editsAndActivity.c2pa.unknown.description": "Виконано інші зміни або дії, які не вдалося розпізнати",
  "selectors.editsAndActivity.c2pa.unknown.label": "Невідомі зміни чи дії",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "Внесено зміни в метадані файлу",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "Зміни метаданих"
}, tM = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "调整后的属性，如色调、饱和度、曲线、阴影或高光",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "颜色或曝光度编辑",
  "selectors.editsAndActivity.c2pa.converted.description": "资产格式已更改",
  "selectors.editsAndActivity.c2pa.converted.label": "已转换的资产",
  "selectors.editsAndActivity.c2pa.created.description": "已创建新文件或内容",
  "selectors.editsAndActivity.c2pa.created.label": "已创建",
  "selectors.editsAndActivity.c2pa.cropped.description": "已使用的裁切工具（用于减少或扩大可见内容区域）",
  "selectors.editsAndActivity.c2pa.cropped.label": "裁切编辑",
  "selectors.editsAndActivity.c2pa.deleted.description": "删除了可视区域或内容时长",
  "selectors.editsAndActivity.c2pa.deleted.label": "删除的内容",
  "selectors.editsAndActivity.c2pa.drawing.description": "已使用的工具，如铅笔、画笔、橡皮擦、形状、路径或钢笔工具",
  "selectors.editsAndActivity.c2pa.drawing.label": "绘图编辑",
  "selectors.editsAndActivity.c2pa.dubbed.description": "替换的音频",
  "selectors.editsAndActivity.c2pa.dubbed.label": "已配音",
  "selectors.editsAndActivity.c2pa.edited.description": "已执行其他更改",
  "selectors.editsAndActivity.c2pa.edited.label": "其他编辑",
  "selectors.editsAndActivity.c2pa.filtered.description": "已使用过滤器、样式或效果等工具来更改外观",
  "selectors.editsAndActivity.c2pa.filtered.label": "过滤器或样式编辑",
  "selectors.editsAndActivity.c2pa.opened.description": "已打开一个预先存在的文件",
  "selectors.editsAndActivity.c2pa.opened.label": "已打开",
  "selectors.editsAndActivity.c2pa.orientation.description": "已改变位置或方向（旋转、翻转等）",
  "selectors.editsAndActivity.c2pa.orientation.label": "方向编辑",
  "selectors.editsAndActivity.c2pa.placed.description": "已向此文件添加预先存在的内容",
  "selectors.editsAndActivity.c2pa.placed.label": "已导入",
  "selectors.editsAndActivity.c2pa.published.description": "收到和分发了图像",
  "selectors.editsAndActivity.c2pa.published.label": "发布了图像",
  "selectors.editsAndActivity.c2pa.removed.description": "已从文件中移除一个或多个资产",
  "selectors.editsAndActivity.c2pa.removed.label": "资产已移除",
  "selectors.editsAndActivity.c2pa.repackaged.description": "资产已在未经处理的情况下重新包装",
  "selectors.editsAndActivity.c2pa.repackaged.label": "重新包装的资产",
  "selectors.editsAndActivity.c2pa.resized.description": "已更改尺寸或文件大小",
  "selectors.editsAndActivity.c2pa.resized.label": "调整编辑大小",
  "selectors.editsAndActivity.c2pa.transcoded.description": "已处理或压缩资产，以优化显示",
  "selectors.editsAndActivity.c2pa.transcoded.label": "已处理的资产",
  "selectors.editsAndActivity.c2pa.translated.description": "翻译的内容",
  "selectors.editsAndActivity.c2pa.translated.label": "已翻译",
  "selectors.editsAndActivity.c2pa.unknown.description": "已执行其他无法识别的编辑或活动",
  "selectors.editsAndActivity.c2pa.unknown.label": "未知的编辑或活动",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "更改了文件元数据",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "元数据更改"
}, iM = {
  "selectors.editsAndActivity.c2pa.color_adjustments.description": "調整了屬性，如色調、飽和度、曲線、陰影或亮部",
  "selectors.editsAndActivity.c2pa.color_adjustments.label": "顏色或曝光編輯",
  "selectors.editsAndActivity.c2pa.converted.description": "資產的格式已變更",
  "selectors.editsAndActivity.c2pa.converted.label": "轉換了資產",
  "selectors.editsAndActivity.c2pa.created.description": "建立了新檔案或內容",
  "selectors.editsAndActivity.c2pa.created.label": "已建立",
  "selectors.editsAndActivity.c2pa.cropped.description": "使用了裁切工具，縮減或擴大可見內容區域",
  "selectors.editsAndActivity.c2pa.cropped.label": "裁切編輯",
  "selectors.editsAndActivity.c2pa.deleted.description": "刪除了內容的視覺區域或持續時間",
  "selectors.editsAndActivity.c2pa.deleted.label": "刪除了內容",
  "selectors.editsAndActivity.c2pa.drawing.description": "使用了鉛筆、筆刷、橡皮擦等工具，或是形狀、路徑或筆型工具",
  "selectors.editsAndActivity.c2pa.drawing.label": "繪圖編輯",
  "selectors.editsAndActivity.c2pa.dubbed.description": "取代了音訊",
  "selectors.editsAndActivity.c2pa.dubbed.label": "已配音",
  "selectors.editsAndActivity.c2pa.edited.description": "進行了其他變更",
  "selectors.editsAndActivity.c2pa.edited.label": "其他編輯",
  "selectors.editsAndActivity.c2pa.filtered.description": "使用了濾鏡、樣式或效果等工具來變更外觀",
  "selectors.editsAndActivity.c2pa.filtered.label": "濾鏡或風格編輯",
  "selectors.editsAndActivity.c2pa.opened.description": "開啟了已存在的檔案",
  "selectors.editsAndActivity.c2pa.opened.label": "已開啟",
  "selectors.editsAndActivity.c2pa.orientation.description": "變更了位置或方向 (旋轉、翻轉等)",
  "selectors.editsAndActivity.c2pa.orientation.label": "方向編輯",
  "selectors.editsAndActivity.c2pa.placed.description": "對此檔案新增了已存在的內容",
  "selectors.editsAndActivity.c2pa.placed.label": "已讀入",
  "selectors.editsAndActivity.c2pa.published.description": "接收和散發了影像",
  "selectors.editsAndActivity.c2pa.published.label": "發佈了影像",
  "selectors.editsAndActivity.c2pa.removed.description": "一項或多項資產已從檔案中移除",
  "selectors.editsAndActivity.c2pa.removed.label": "移除的資產",
  "selectors.editsAndActivity.c2pa.repackaged.description": "資產未經處理就重新封裝",
  "selectors.editsAndActivity.c2pa.repackaged.label": "重新封裝了資產",
  "selectors.editsAndActivity.c2pa.resized.description": "變更了尺寸或檔案大小",
  "selectors.editsAndActivity.c2pa.resized.label": "調整大小編輯",
  "selectors.editsAndActivity.c2pa.transcoded.description": "處理或壓縮了要最佳化顯示的資產",
  "selectors.editsAndActivity.c2pa.transcoded.label": "處理了資產",
  "selectors.editsAndActivity.c2pa.translated.description": "翻譯了內容",
  "selectors.editsAndActivity.c2pa.translated.label": "已翻譯",
  "selectors.editsAndActivity.c2pa.unknown.description": "執行了其他無法辨識的編輯或活動",
  "selectors.editsAndActivity.c2pa.unknown.label": "未知的編輯或活動",
  "selectors.editsAndActivity.c2pa.watermarked.description": "Applied an invisible watermark to improve this Content Credential's durability",
  "selectors.editsAndActivity.c2pa.watermarked.label": "Watermarked",
  "selectors.editsAndActivity.c2pa.edited.metadata.description": "對檔案中繼資料進行了變更",
  "selectors.editsAndActivity.c2pa.edited.metadata.label": "中繼資料變更"
}, rM = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  cs_CZ: UL,
  da_DK: YL,
  de_DE: JL,
  en_US: xL,
  es_ES: HL,
  fi_FI: TL,
  fr_FR: qL,
  hu_HU: KL,
  it_IT: OL,
  ja_JP: WL,
  ko_KR: PL,
  nb_NO: zL,
  nl_NL: $L,
  pl_PL: jL,
  pt_BR: ZL,
  ru_RU: XL,
  sv_SE: VL,
  tr_TR: AM,
  uk_UA: eM,
  zh_CN: tM,
  zh_TW: iM
});
_e("c2pa:selector:editsAndActivity");
ML(rM, (t, n) => n.replace("_", "-"));
QL(IL, RL((t) => t.id), bL((t) => t.label));
export {
  nM as createC2pa,
  Xl as createManifestStore,
  aM as selectProducer
};
