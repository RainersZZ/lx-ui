var xm = Object.defineProperty;
var Cm = (d, t, e) => t in d ? xm(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var F = (d, t, e) => (Cm(d, typeof t != "symbol" ? t + "" : t, e), e), _u = (d, t, e) => {
  if (!t.has(d))
    throw TypeError("Cannot " + e);
};
var n = (d, t, e) => (_u(d, t, "read from private field"), e ? e.call(d) : t.get(d)), u = (d, t, e) => {
  if (t.has(d))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(d) : t.set(d, e);
}, p = (d, t, e, s) => (_u(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e);
var zt = (d, t, e, s) => ({
  set _(i) {
    p(d, t, i, e);
  },
  get _() {
    return n(d, t, s);
  }
}), b = (d, t, e) => (_u(d, t, "access private method"), e);
var _o = {};
_o.d = (d, t) => {
  for (var e in t)
    _o.o(t, e) && !_o.o(d, e) && Object.defineProperty(d, e, { enumerable: !0, get: t[e] });
};
_o.o = (d, t) => Object.prototype.hasOwnProperty.call(d, t);
var H = globalThis.pdfjsLib = {};
_o.d(H, {
  AbortException: () => (
    /* reexport */
    Ii
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    Of
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    j
  ),
  AnnotationEditorType: () => (
    /* reexport */
    B
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    ar
  ),
  AnnotationLayer: () => (
    /* reexport */
    wA
  ),
  AnnotationMode: () => (
    /* reexport */
    Ys
  ),
  ColorPicker: () => (
    /* reexport */
    xc
  ),
  DOMSVGFactory: () => (
    /* reexport */
    Qf
  ),
  DrawLayer: () => (
    /* reexport */
    $f
  ),
  FeatureTest: () => (
    /* reexport */
    qt
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    Xs
  ),
  ImageKind: () => (
    /* reexport */
    Vh
  ),
  InvalidPDFException: () => (
    /* reexport */
    Ru
  ),
  MissingPDFException: () => (
    /* reexport */
    vo
  ),
  OPS: () => (
    /* reexport */
    Re
  ),
  OutputScale: () => (
    /* reexport */
    Mu
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    Tg
  ),
  PDFDateString: () => (
    /* reexport */
    Xf
  ),
  PDFWorker: () => (
    /* reexport */
    wr
  ),
  PasswordResponses: () => (
    /* reexport */
    km
  ),
  PermissionFlag: () => (
    /* reexport */
    Rm
  ),
  PixelsPerInch: () => (
    /* reexport */
    Di
  ),
  RenderingCancelledException: () => (
    /* reexport */
    jf
  ),
  TextLayer: () => (
    /* reexport */
    So
  ),
  TouchManager: () => (
    /* reexport */
    Sc
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    _c
  ),
  Util: () => (
    /* reexport */
    I
  ),
  VerbosityLevel: () => (
    /* reexport */
    uu
  ),
  XfaLayer: () => (
    /* reexport */
    Rg
  ),
  build: () => (
    /* reexport */
    eA
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    Dm
  ),
  fetchData: () => (
    /* reexport */
    mu
  ),
  getDocument: () => (
    /* reexport */
    Wb
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    Um
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    Vm
  ),
  getXfaPageViewport: () => (
    /* reexport */
    jm
  ),
  isDataScheme: () => (
    /* reexport */
    bu
  ),
  isPdfFile: () => (
    /* reexport */
    Wf
  ),
  noContextMenu: () => (
    /* reexport */
    Ve
  ),
  normalizeUnicode: () => (
    /* reexport */
    $m
  ),
  setLayerDimensions: () => (
    /* reexport */
    rr
  ),
  shadow: () => (
    /* reexport */
    U
  ),
  stopEvent: () => (
    /* reexport */
    be
  ),
  version: () => (
    /* reexport */
    tA
  )
});
const $t = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), Cp = [1, 0, 0, 1, 0, 0], Pu = [1e-3, 0, 0, 1e-3, 0, 0], Tm = 1e7, wu = 1.35, me = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Ys = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Pm = "pdfjs_internal_editor_", B = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, j = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35,
  DRAW_STEP: 41
}, Rm = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Lt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Vh = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, gt = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  WIDGET: 20
}, Za = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, uu = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Re = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93
}, km = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let fu = uu.WARNINGS;
function Mm(d) {
  Number.isInteger(d) && (fu = d);
}
function Lm() {
  return fu;
}
function pu(d) {
  fu >= uu.INFOS && console.log(`Info: ${d}`);
}
function $(d) {
  fu >= uu.WARNINGS && console.log(`Warning: ${d}`);
}
function Q(d) {
  throw new Error(d);
}
function ft(d, t) {
  d || Q(t);
}
function Im(d) {
  switch (d == null ? void 0 : d.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function Dm(d, t = null, e = null) {
  if (!d)
    return null;
  try {
    if (e && typeof d == "string") {
      if (e.addDefaultProtocol && d.startsWith("www.")) {
        const i = d.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
      }
      if (e.tryConvertEncoding)
        try {
          d = Bm(d);
        } catch {
        }
    }
    const s = t ? new URL(d, t) : new URL(d);
    if (Im(s))
      return s;
  } catch {
  }
  return null;
}
function U(d, t, e, s = !1) {
  return Object.defineProperty(d, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const Fi = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class ap extends Fi {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class vu extends Fi {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class Ru extends Fi {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class vo extends Fi {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class _c extends Fi {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class Fm extends Fi {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Ii extends Fi {
  constructor(t) {
    super(t, "AbortException");
  }
}
function Tp(d) {
  (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && Q("Invalid argument for bytesToString");
  const t = d.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, d);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const r = Math.min(i + e, t), a = d.subarray(i, r);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
function gu(d) {
  typeof d != "string" && Q("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = d.charCodeAt(s) & 255;
  return e;
}
function Nm(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function Uf(d) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, s] of d)
    t[e] = s;
  return t;
}
function Om() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function Hm() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class qt {
  static get isLittleEndian() {
    return U(this, "isLittleEndian", Om());
  }
  static get isEvalSupported() {
    return U(this, "isEvalSupported", Hm());
  }
  static get isOffscreenCanvasSupported() {
    return U(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return U(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? U(this, "platform", {
      isMac: navigator.platform.includes("Mac"),
      isWindows: navigator.platform.includes("Win"),
      isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox")
    }) : U(this, "platform", {
      isMac: !1,
      isWindows: !1,
      isFirefox: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return U(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const Su = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var vr, jh, xo, ku;
class I {
  static makeHexColor(t, e, s) {
    return `#${Su[t]}${Su[e]}${Su[s]}`;
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const s = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
    return [s, i];
  }
  static applyInverseTransform(t, e) {
    const s = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s, r = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s;
    return [i, r];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const s = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), r = this.applyTransform([t[0], t[3]], e), a = this.applyTransform([t[2], t[1]], e);
    return [Math.min(s[0], i[0], r[0], a[0]), Math.min(s[1], i[1], r[1], a[1]), Math.max(s[0], i[0], r[0], a[0]), Math.max(s[1], i[1], r[1], a[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], s = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], r = t[2] * e[0] + t[3] * e[2], a = t[2] * e[1] + t[3] * e[3], o = (s + a) / 2, l = Math.sqrt((s + a) ** 2 - 4 * (s * a - r * i)) / 2, h = o + l || 1, c = o - l || 1;
    return [Math.sqrt(h), Math.sqrt(c)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i)
      return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [s, r, i, a];
  }
  static bezierBoundingBox(t, e, s, i, r, a, o, l, h) {
    return h ? (h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l)) : h = [Math.min(t, o), Math.min(e, l), Math.max(t, o), Math.max(e, l)], b(this, xo, ku).call(this, t, s, r, o, e, i, a, l, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), h), b(this, xo, ku).call(this, t, s, r, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h), h;
  }
}
vr = new WeakSet(), jh = function(t, e, s, i, r, a, o, l, h, c) {
  if (h <= 0 || h >= 1)
    return;
  const f = 1 - h, g = h * h, m = g * h, A = f * (f * (f * t + 3 * h * e) + 3 * g * s) + m * i, y = f * (f * (f * r + 3 * h * a) + 3 * g * o) + m * l;
  c[0] = Math.min(c[0], A), c[1] = Math.min(c[1], y), c[2] = Math.max(c[2], A), c[3] = Math.max(c[3], y);
}, xo = new WeakSet(), ku = function(t, e, s, i, r, a, o, l, h, c, f, g) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && b(this, vr, jh).call(this, t, e, s, i, r, a, o, l, -f / c, g);
    return;
  }
  const m = c ** 2 - 4 * f * h;
  if (m < 0)
    return;
  const A = Math.sqrt(m), y = 2 * h;
  b(this, vr, jh).call(this, t, e, s, i, r, a, o, l, (-c + A) / y, g), b(this, vr, jh).call(this, t, e, s, i, r, a, o, l, (-c - A) / y, g);
}, u(I, vr), u(I, xo);
function Bm(d) {
  return decodeURIComponent(escape(d));
}
let Eu = null, op = null;
function $m(d) {
  return Eu || (Eu = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, op = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(Eu, (t, e, s) => e ? e.normalize("NFKC") : op.get(s));
}
function Gm() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const d = new Uint8Array(32);
  return crypto.getRandomValues(d), Tp(d);
}
const Vf = "pdfjs_internal_id_";
function zm(d) {
  return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(Tp(d));
}
typeof Promise.try != "function" && (Promise.try = function(d, ...t) {
  return new Promise((e) => {
    e(d(...t));
  });
});
const ps = "http://www.w3.org/2000/svg", Bi = class Bi {
};
F(Bi, "CSS", 96), F(Bi, "PDF", 72), F(Bi, "PDF_TO_CSS_UNITS", Bi.CSS / Bi.PDF);
let Di = Bi;
async function mu(d, t = "text") {
  if (io(d, document.baseURI)) {
    const e = await fetch(d);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", d, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class Oh {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: s,
    rotation: i,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = i, this.offsetX = r, this.offsetY = a, s *= e;
    const l = (t[2] + t[0]) / 2, h = (t[3] + t[1]) / 2;
    let c, f, g, m;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        c = -1, f = 0, g = 0, m = 1;
        break;
      case 90:
        c = 0, f = 1, g = 1, m = 0;
        break;
      case 270:
        c = 0, f = -1, g = -1, m = 0;
        break;
      case 0:
        c = 1, f = 0, g = 0, m = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (g = -g, m = -m);
    let A, y, w, _;
    c === 0 ? (A = Math.abs(h - t[1]) * s + r, y = Math.abs(l - t[0]) * s + a, w = (t[3] - t[1]) * s, _ = (t[2] - t[0]) * s) : (A = Math.abs(l - t[0]) * s + r, y = Math.abs(h - t[1]) * s + a, w = (t[2] - t[0]) * s, _ = (t[3] - t[1]) * s), this.transform = [c * s, f * s, g * s, m * s, A - c * s * l - g * s * h, y - f * s * l - m * s * h], this.width = w, this.height = _;
  }
  get rawDims() {
    const {
      userUnit: t,
      viewBox: e
    } = this, s = e.map((i) => i * t);
    return U(this, "rawDims", {
      pageWidth: s[2] - s[0],
      pageHeight: s[3] - s[1],
      pageX: s[0],
      pageY: s[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: r = !1
  } = {}) {
    return new Oh({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: r
    });
  }
  convertToViewportPoint(t, e) {
    return I.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = I.applyTransform([t[0], t[1]], this.transform), s = I.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    return I.applyInverseTransform([t, e], this.transform);
  }
}
class jf extends Fi {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function bu(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; )
    e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function Wf(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function Um(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function Vm(d, t = "document.pdf") {
  if (typeof d != "string")
    return t;
  if (bu(d))
    return $('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(d);
  let r = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
  if (r && (r = r[0], r.includes("%")))
    try {
      r = s.exec(decodeURIComponent(r))[0];
    } catch {
    }
  return r || t;
}
class lp {
  constructor() {
    F(this, "started", /* @__PURE__ */ Object.create(null));
    F(this, "times", []);
  }
  time(t) {
    t in this.started && $(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || $(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: s
    } of this.times)
      e = Math.max(s.length, e);
    for (const {
      name: s,
      start: i,
      end: r
    } of this.times)
      t.push(`${s.padEnd(e)} ${r - i}ms
`);
    return t.join("");
  }
}
function io(d, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(d, t) : new URL(d);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function Ve(d) {
  d.preventDefault();
}
function be(d) {
  d.preventDefault(), d.stopPropagation();
}
var Co;
class Xf {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    n(this, Co) || p(this, Co, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, Co).exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = e[7] || "Z";
    let c = parseInt(e[8], 10);
    c = c >= 0 && c <= 23 ? c : 0;
    let f = parseInt(e[9], 10) || 0;
    return f = f >= 0 && f <= 59 ? f : 0, h === "-" ? (a += c, o += f) : h === "+" && (a -= c, o -= f), new Date(Date.UTC(s, i, r, a, o, l));
  }
}
Co = new WeakMap(), u(Xf, Co, void 0);
function jm(d, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = d.attributes.style, r = [0, 0, parseInt(s), parseInt(i)];
  return new Oh({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function qf(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : ($(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function Wm(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, qf(s));
  }
  t.remove();
}
function st(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = d.getTransform();
  return [t, e, s, i, r, a];
}
function We(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = d.getTransform().invertSelf();
  return [t, e, s, i, r, a];
}
function rr(d, t, e = !1, s = !0) {
  if (t instanceof Oh) {
    const {
      pageWidth: i,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = d, o = qt.isCSSRoundSupported, l = `var(--scale-factor) * ${i}px`, h = `var(--scale-factor) * ${r}px`, c = o ? `round(down, ${l}, var(--scale-round-x, 1px))` : `calc(${l})`, f = o ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = f) : (a.width = f, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class Mu {
  constructor() {
    const t = window.devicePixelRatio || 1;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
}
var Ks, Gi, ke, zi, To, Po, Pc, Pp, Rc, Rp, kc, kp, Sr, Wh, Mc, Mp, Ro, Iu;
const bs = class bs {
  constructor(t) {
    u(this, Rc);
    u(this, kc);
    u(this, Sr);
    u(this, Mc);
    u(this, Ro);
    u(this, Ks, null);
    u(this, Gi, null);
    u(this, ke, void 0);
    u(this, zi, null);
    u(this, To, null);
    p(this, ke, t), n(bs, Po) || p(bs, Po, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const t = p(this, Ks, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, ke)._uiManager._signal;
    t.addEventListener("contextmenu", Ve, {
      signal: e
    }), t.addEventListener("pointerdown", b(bs, Pc, Pp), {
      signal: e
    });
    const s = p(this, zi, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = n(this, ke).toolbarPosition;
    if (i) {
      const {
        style: r
      } = t, a = n(this, ke)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return b(this, Mc, Mp).call(this), t;
  }
  get div() {
    return n(this, Ks);
  }
  hide() {
    var t;
    n(this, Ks).classList.add("hidden"), (t = n(this, Gi)) == null || t.hideDropdown();
  }
  show() {
    var t;
    n(this, Ks).classList.remove("hidden"), (t = n(this, To)) == null || t.shown();
  }
  async addAltText(t) {
    const e = await t.render();
    b(this, Sr, Wh).call(this, e), n(this, zi).prepend(e, n(this, Ro, Iu)), p(this, To, t);
  }
  addColorPicker(t) {
    p(this, Gi, t);
    const e = t.renderButton();
    b(this, Sr, Wh).call(this, e), n(this, zi).prepend(e, n(this, Ro, Iu));
  }
  remove() {
    var t;
    n(this, Ks).remove(), (t = n(this, Gi)) == null || t.destroy(), p(this, Gi, null);
  }
};
Ks = new WeakMap(), Gi = new WeakMap(), ke = new WeakMap(), zi = new WeakMap(), To = new WeakMap(), Po = new WeakMap(), Pc = new WeakSet(), Pp = function(t) {
  t.stopPropagation();
}, Rc = new WeakSet(), Rp = function(t) {
  n(this, ke)._focusEventsAllowed = !1, be(t);
}, kc = new WeakSet(), kp = function(t) {
  n(this, ke)._focusEventsAllowed = !0, be(t);
}, Sr = new WeakSet(), Wh = function(t) {
  const e = n(this, ke)._uiManager._signal;
  t.addEventListener("focusin", b(this, Rc, Rp).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", b(this, kc, kp).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", Ve, {
    signal: e
  });
}, Mc = new WeakSet(), Mp = function() {
  const {
    editorType: t,
    _uiManager: e
  } = n(this, ke), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", n(bs, Po)[t]), b(this, Sr, Wh).call(this, s), s.addEventListener("click", (i) => {
    e.delete();
  }, {
    signal: e._signal
  }), n(this, zi).append(s);
}, Ro = new WeakSet(), Iu = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, u(bs, Pc), u(bs, Po, null);
let Lu = bs;
var ko, Ui, Vi, Lc, Lp, Ic, Ip, Dc, Dp;
class Xm {
  constructor(t) {
    u(this, Lc);
    u(this, Ic);
    u(this, Dc);
    u(this, ko, null);
    u(this, Ui, null);
    u(this, Vi, void 0);
    p(this, Vi, t);
  }
  show(t, e, s) {
    const [i, r] = b(this, Ic, Ip).call(this, e, s), {
      style: a
    } = n(this, Ui) || p(this, Ui, b(this, Lc, Lp).call(this));
    t.append(n(this, Ui)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, Ui).remove();
  }
}
ko = new WeakMap(), Ui = new WeakMap(), Vi = new WeakMap(), Lc = new WeakSet(), Lp = function() {
  const t = p(this, Ui, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Ve, {
    signal: n(this, Vi)._signal
  });
  const e = p(this, ko, document.createElement("div"));
  return e.className = "buttons", t.append(e), b(this, Dc, Dp).call(this), t;
}, Ic = new WeakSet(), Ip = function(t, e) {
  let s = 0, i = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < s)
      continue;
    const o = r.x + (e ? r.width : 0);
    if (a > s) {
      i = o, s = a;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, Dc = new WeakSet(), Dp = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = n(this, Vi)._signal;
  t.addEventListener("contextmenu", Ve, {
    signal: s
  }), t.addEventListener("click", () => {
    n(this, Vi).highlightSelection("floating_button");
  }, {
    signal: s
  }), n(this, ko).append(t);
};
function wc(d, t, e) {
  for (const s of e)
    t.addEventListener(s, d[s].bind(d));
}
var Fc;
class qm {
  constructor() {
    u(this, Fc, 0);
  }
  get id() {
    return `${Pm}${zt(this, Fc)._++}`;
  }
}
Fc = new WeakMap();
var Er, Mo, Ft, xr, Xh;
const Zf = class Zf {
  constructor() {
    u(this, xr);
    u(this, Er, Gm());
    u(this, Mo, 0);
    u(this, Ft, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const r = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return U(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: r
    } = t;
    return b(this, xr, Xh).call(this, `${e}_${s}_${i}_${r}`, t);
  }
  async getFromUrl(t) {
    return b(this, xr, Xh).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return b(this, xr, Xh).call(this, t, s);
  }
  async getFromId(t) {
    n(this, Ft) || p(this, Ft, /* @__PURE__ */ new Map());
    const e = n(this, Ft).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: s
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, s);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    n(this, Ft) || p(this, Ft, /* @__PURE__ */ new Map());
    let s = n(this, Ft).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${n(this, Er)}_${zt(this, Mo)._++}`,
      refCounter: 1,
      isSvg: !1
    }, n(this, Ft).set(t, s), n(this, Ft).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = n(this, Ft).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    n(this, Ft) || p(this, Ft, /* @__PURE__ */ new Map());
    const e = n(this, Ft).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(s.width, s.height);
      r.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = r.convertToBlob();
    }
    (i = s.close) == null || i.call(s), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${n(this, Er)}_`);
  }
};
Er = new WeakMap(), Mo = new WeakMap(), Ft = new WeakMap(), xr = new WeakSet(), Xh = async function(t, e) {
  n(this, Ft) || p(this, Ft, /* @__PURE__ */ new Map());
  let s = n(this, Ft).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${n(this, Er)}_${zt(this, Mo)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await mu(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const r = Zf._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, h();
        }, a.onload = async () => {
          const f = s.svgUrl = a.result;
          o.src = await r ? `${f}#svgView(preserveAspectRatio(none))` : f;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(i), await l;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    $(i), s = null;
  }
  return n(this, Ft).set(t, s), s && n(this, Ft).set(s.id, s), s;
};
let Du = Zf;
var ht, Qs, Lo, it;
class Ym {
  constructor(t = 128) {
    u(this, ht, []);
    u(this, Qs, !1);
    u(this, Lo, void 0);
    u(this, it, -1);
    p(this, Lo, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (i && t(), n(this, Qs))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: r
    };
    if (n(this, it) === -1) {
      n(this, ht).length > 0 && (n(this, ht).length = 0), p(this, it, 0), n(this, ht).push(l);
      return;
    }
    if (a && n(this, ht)[n(this, it)].type === r) {
      o && (l.undo = n(this, ht)[n(this, it)].undo), n(this, ht)[n(this, it)] = l;
      return;
    }
    const h = n(this, it) + 1;
    h === n(this, Lo) ? n(this, ht).splice(0, 1) : (p(this, it, h), h < n(this, ht).length && n(this, ht).splice(h)), n(this, ht).push(l);
  }
  undo() {
    if (n(this, it) === -1)
      return;
    p(this, Qs, !0);
    const {
      undo: t,
      post: e
    } = n(this, ht)[n(this, it)];
    t(), e == null || e(), p(this, Qs, !1), p(this, it, n(this, it) - 1);
  }
  redo() {
    if (n(this, it) < n(this, ht).length - 1) {
      p(this, it, n(this, it) + 1), p(this, Qs, !0);
      const {
        cmd: t,
        post: e
      } = n(this, ht)[n(this, it)];
      t(), e == null || e(), p(this, Qs, !1);
    }
  }
  hasSomethingToUndo() {
    return n(this, it) !== -1;
  }
  hasSomethingToRedo() {
    return n(this, it) < n(this, ht).length - 1;
  }
  cleanType(t) {
    if (n(this, it) !== -1) {
      for (let e = n(this, it); e >= 0; e--)
        if (n(this, ht)[e].type !== t) {
          n(this, ht).splice(e + 1, n(this, it) - e), p(this, it, e);
          return;
        }
      n(this, ht).length = 0, p(this, it, -1);
    }
  }
  destroy() {
    p(this, ht, null);
  }
}
ht = new WeakMap(), Qs = new WeakMap(), Lo = new WeakMap(), it = new WeakMap();
var Nc, Fp;
class Hh {
  constructor(t) {
    u(this, Nc);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = qt.platform;
    for (const [s, i, r = {}] of t)
      for (const a of s) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const s = this.callbacks.get(b(this, Nc, Fp).call(this, e));
    if (!s)
      return;
    const {
      callback: i,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null
      }
    } = s;
    o && !o(t, e) || (i.bind(t, ...a, e)(), r || be(e));
  }
}
Nc = new WeakSet(), Fp = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Oc = class Oc {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Wm(t), U(this, "_colors", t);
  }
  convert(t) {
    const e = qf(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((r, a) => r === e[a]))
        return Oc._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? I.makeHexColor(...e) : t;
  }
};
F(Oc, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Fu = Oc;
var Cr, ne, mt, xt, Tr, ys, Pr, _e, Js, ji, Rr, Wi, Ye, Me, Xi, Io, Do, kr, Fo, Ke, Zs, Mr, ti, Qe, Hc, ei, No, si, qi, Oo, Ho, At, q, _s, Yi, Bo, $o, ii, Je, ws, Go, we, Lr, qh, zo, Nu, Bc, Np, $c, Op, Ir, Yh, Gc, Hp, zc, Bp, Uc, $p, Uo, Ou, Vc, Gp, Vo, Hu, jo, Bu, jc, zp, Ct, Ut, Le, gs, Wc, Up, Xc, Vp, Wo, $u, qc, jp, Ki, no, Xo, Gu;
const Ar = class Ar {
  constructor(t, e, s, i, r, a, o, l, h, c, f, g, m) {
    u(this, Lr);
    u(this, zo);
    u(this, Bc);
    u(this, $c);
    u(this, Ir);
    u(this, Gc);
    u(this, zc);
    u(this, Uc);
    u(this, Uo);
    u(this, Vc);
    u(this, Vo);
    u(this, jo);
    u(this, jc);
    u(this, Ct);
    u(this, Le);
    u(this, Wc);
    u(this, Xc);
    u(this, Wo);
    u(this, qc);
    u(this, Ki);
    u(this, Xo);
    u(this, Cr, new AbortController());
    u(this, ne, null);
    u(this, mt, /* @__PURE__ */ new Map());
    u(this, xt, /* @__PURE__ */ new Map());
    u(this, Tr, null);
    u(this, ys, null);
    u(this, Pr, null);
    u(this, _e, new Ym());
    u(this, Js, null);
    u(this, ji, null);
    u(this, Rr, 0);
    u(this, Wi, /* @__PURE__ */ new Set());
    u(this, Ye, null);
    u(this, Me, null);
    u(this, Xi, /* @__PURE__ */ new Set());
    F(this, "_editorUndoBar", null);
    u(this, Io, !1);
    u(this, Do, !1);
    u(this, kr, !1);
    u(this, Fo, null);
    u(this, Ke, null);
    u(this, Zs, null);
    u(this, Mr, null);
    u(this, ti, !1);
    u(this, Qe, null);
    u(this, Hc, new qm());
    u(this, ei, !1);
    u(this, No, !1);
    u(this, si, null);
    u(this, qi, null);
    u(this, Oo, null);
    u(this, Ho, null);
    u(this, At, B.NONE);
    u(this, q, /* @__PURE__ */ new Set());
    u(this, _s, null);
    u(this, Yi, null);
    u(this, Bo, null);
    u(this, $o, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    u(this, ii, [0, 0]);
    u(this, Je, null);
    u(this, ws, null);
    u(this, Go, null);
    u(this, we, null);
    const A = this._signal = n(this, Cr).signal;
    p(this, ws, t), p(this, Go, e), p(this, Tr, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
      signal: A
    }), i._on("pagechanging", this.onPageChanging.bind(this), {
      signal: A
    }), i._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: A
    }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: A
    }), i._on("setpreference", this.onSetPreference.bind(this), {
      signal: A
    }), i._on("switchannotationeditorparams", (y) => this.updateParams(y.type, y.value), {
      signal: A
    }), b(this, Gc, Hp).call(this), b(this, jc, zp).call(this), b(this, Uo, Ou).call(this), p(this, ys, r.annotationStorage), p(this, Fo, r.filterFactory), p(this, Yi, a), p(this, Mr, o || null), p(this, Io, l), p(this, Do, h), p(this, kr, c), p(this, Ho, f || null), this.viewParameters = {
      realScale: Di.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = g || null, this._supportsPinchToZoom = m !== !1;
  }
  static get _keyboardManager() {
    const t = Ar.prototype, e = (a) => n(a, ws).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return U(this, "_keyboardManager", new Hh([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, ws).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, ws).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, s, i, r;
    (t = n(this, we)) == null || t.resolve(), p(this, we, null), (e = n(this, Cr)) == null || e.abort(), p(this, Cr, null), this._signal = null;
    for (const a of n(this, xt).values())
      a.destroy();
    n(this, xt).clear(), n(this, mt).clear(), n(this, Xi).clear(), p(this, ne, null), n(this, q).clear(), n(this, _e).destroy(), (s = n(this, Tr)) == null || s.destroy(), (i = n(this, Qe)) == null || i.hide(), p(this, Qe, null), n(this, Ke) && (clearTimeout(n(this, Ke)), p(this, Ke, null)), n(this, Je) && (clearTimeout(n(this, Je)), p(this, Je, null)), (r = this._editorUndoBar) == null || r.destroy();
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, Ho);
  }
  get useNewAltTextFlow() {
    return n(this, Do);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, kr);
  }
  get hcmFilter() {
    return U(this, "hcmFilter", n(this, Yi) ? n(this, Fo).addHCMFilter(n(this, Yi).foreground, n(this, Yi).background) : "none");
  }
  get direction() {
    return U(this, "direction", getComputedStyle(n(this, ws)).direction);
  }
  get highlightColors() {
    return U(this, "highlightColors", n(this, Mr) ? new Map(n(this, Mr).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return U(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), p(this, ji, t);
  }
  setMainHighlightColorPicker(t) {
    p(this, Oo, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = n(this, Tr)) == null || s.editAltText(this, t, e);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        p(this, kr, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    p(this, Rr, t - 1);
  }
  focusMainContainer() {
    n(this, ws).focus();
  }
  findParent(t, e) {
    for (const s of n(this, xt).values()) {
      const {
        x: i,
        y: r,
        width: a,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= r && e <= r + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    n(this, Go).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, Xi).add(t);
  }
  removeShouldRescale(t) {
    n(this, Xi).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Di.PDF_TO_CSS_UNITS;
    for (const s of n(this, Xi))
      s.onScaleChanging();
    (e = n(this, ji)) == null || e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: s,
      anchorOffset: i,
      focusNode: r,
      focusOffset: a
    } = e, o = e.toString(), h = b(this, Lr, qh).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(h);
    if (!c)
      return;
    e.empty();
    const f = b(this, zo, Nu).call(this, h), g = n(this, At) === B.NONE, m = () => {
      f == null || f.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: c,
        anchorNode: s,
        anchorOffset: i,
        focusNode: r,
        focusOffset: a,
        text: o
      }), g && this.showAllEditors("highlight", !0, !0);
    };
    if (g) {
      this.switchToMode(B.HIGHLIGHT, m);
      return;
    }
    m();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, ys) && !n(this, ys).has(t.id) && n(this, ys).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, n(this, ti) && (p(this, ti, !1), b(this, Ir, Yh).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of n(this, q))
      if (e.div.contains(t)) {
        p(this, qi, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!n(this, qi))
      return;
    const [t, e] = n(this, qi);
    p(this, qi, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    b(this, Uo, Ou).call(this), b(this, Vo, Hu).call(this);
  }
  removeEditListeners() {
    b(this, Vc, Gp).call(this), b(this, jo, Bu).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of n(this, Me))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of n(this, Me))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = n(this, ne)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of n(this, q)) {
      const r = i.serialize(!0);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const r of e.items)
      for (const a of n(this, Me))
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
    let s = e.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (r) {
      $(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const r = [];
      for (const l of s) {
        const h = await i.deserialize(l);
        if (!h)
          return;
        r.push(h);
      }
      const a = () => {
        for (const l of r)
          b(this, Wo, $u).call(this, l);
        b(this, Xo, Gu).call(this, r);
      }, o = () => {
        for (const l of r)
          l.remove();
      };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (r) {
      $(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, At) !== B.NONE && !this.isEditorHandlingKeyboard && Ar._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, n(this, ti) && (p(this, ti, !1), b(this, Ir, Yh).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (b(this, zc, Bp).call(this), b(this, Vo, Hu).call(this), b(this, Ct, Ut).call(this, {
      isEditing: n(this, At) !== B.NONE,
      isEmpty: b(this, Ki, no).call(this),
      hasSomethingToUndo: n(this, _e).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, _e).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (b(this, Uc, $p).call(this), b(this, jo, Bu).call(this), b(this, Ct, Ut).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!n(this, Me)) {
      p(this, Me, t);
      for (const e of n(this, Me))
        b(this, Le, gs).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, Hc).id;
  }
  get currentLayer() {
    return n(this, xt).get(n(this, Rr));
  }
  getLayer(t) {
    return n(this, xt).get(t);
  }
  get currentPageIndex() {
    return n(this, Rr);
  }
  addLayer(t) {
    n(this, xt).set(t.pageIndex, t), n(this, ei) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, xt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1) {
    var i;
    if (n(this, At) !== t && !(n(this, we) && (await n(this, we).promise, !n(this, we)))) {
      if (p(this, we, Promise.withResolvers()), p(this, At, t), t === B.NONE) {
        this.setEditingState(!1), b(this, Xc, Vp).call(this), (i = this._editorUndoBar) == null || i.hide(), n(this, we).resolve();
        return;
      }
      this.setEditingState(!0), await b(this, Wc, Up).call(this), this.unselectAll();
      for (const r of n(this, xt).values())
        r.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), n(this, we).resolve();
        return;
      }
      for (const r of n(this, mt).values())
        r.annotationElementId === e ? (this.setSelected(r), r.enterInEditMode()) : r.unselect();
      n(this, we).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== n(this, At) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var s;
    if (n(this, Me)) {
      switch (t) {
        case j.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case j.HIGHLIGHT_DEFAULT_COLOR:
          (s = n(this, Oo)) == null || s.updateColor(e);
          break;
        case j.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (n(this, Bo) || p(this, Bo, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of n(this, q))
        i.updateParams(t, e);
      for (const i of n(this, Me))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var r;
    for (const a of n(this, mt).values())
      a.editorType === t && a.show(e);
    (((r = n(this, Bo)) == null ? void 0 : r.get(j.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && b(this, Le, gs).call(this, [[j.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (n(this, No) !== t) {
      p(this, No, t);
      for (const e of n(this, xt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of n(this, mt).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return n(this, mt).get(t);
  }
  addEditor(t) {
    n(this, mt).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (n(this, Ke) && clearTimeout(n(this, Ke)), p(this, Ke, setTimeout(() => {
      this.focusMainContainer(), p(this, Ke, null);
    }, 0))), n(this, mt).delete(t.id), this.unselect(t), (!t.annotationElementId || !n(this, Wi).has(t.annotationElementId)) && ((e = n(this, ys)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    n(this, Wi).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return n(this, Wi).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, Wi).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    n(this, ne) !== t && (p(this, ne, t), t && b(this, Le, gs).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, qc, jp) === t && b(this, Le, gs).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    b(this, Le, gs).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, q).has(t)) {
      n(this, q).delete(t), t.unselect(), b(this, Ct, Ut).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    n(this, q).add(t), t.select(), b(this, Le, gs).call(this, t.propertiesToUpdate), b(this, Ct, Ut).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    (e = n(this, ji)) == null || e.commitOrRemove();
    for (const s of n(this, q))
      s !== t && s.unselect();
    n(this, q).clear(), n(this, q).add(t), t.select(), b(this, Le, gs).call(this, t.propertiesToUpdate), b(this, Ct, Ut).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return n(this, q).has(t);
  }
  get firstSelectedEditor() {
    return n(this, q).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, q).delete(t), b(this, Ct, Ut).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return n(this, q).size !== 0;
  }
  get isEnterHandled() {
    return n(this, q).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    n(this, _e).undo(), b(this, Ct, Ut).call(this, {
      hasSomethingToUndo: n(this, _e).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: b(this, Ki, no).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    n(this, _e).redo(), b(this, Ct, Ut).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, _e).hasSomethingToRedo(),
      isEmpty: b(this, Ki, no).call(this)
    });
  }
  addCommands(t) {
    n(this, _e).add(t), b(this, Ct, Ut).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: b(this, Ki, no).call(this)
    });
  }
  cleanUndoStack(t) {
    n(this, _e).cleanType(t);
  }
  delete() {
    var r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...n(this, q)], s = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, i = () => {
      for (const a of e)
        b(this, Wo, $u).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = n(this, ne)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, ne) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, q))
      t.commit();
    b(this, Xo, Gu).call(this, n(this, mt).values());
  }
  unselectAll() {
    var t;
    if (!(n(this, ne) && (n(this, ne).commitOrRemove(), n(this, At) !== B.NONE)) && !((t = n(this, ji)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, q))
        e.unselect();
      n(this, q).clear(), b(this, Ct, Ut).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    n(this, ii)[0] += t, n(this, ii)[1] += e;
    const [i, r] = n(this, ii), a = [...n(this, q)], o = 1e3;
    n(this, Je) && clearTimeout(n(this, Je)), p(this, Je, setTimeout(() => {
      p(this, Je, null), n(this, ii)[0] = n(this, ii)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            n(this, mt).has(l.id) && l.translateInPage(i, r);
        },
        undo: () => {
          for (const l of a)
            n(this, mt).has(l.id) && l.translateInPage(-i, -r);
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), p(this, Ye, /* @__PURE__ */ new Map());
      for (const t of n(this, q))
        n(this, Ye).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!n(this, Ye))
      return !1;
    this.disableUserSelect(!1);
    const t = n(this, Ye);
    p(this, Ye, null);
    let e = !1;
    for (const [{
      x: i,
      y: r,
      pageIndex: a
    }, o] of t)
      o.newX = i, o.newY = r, o.newPageIndex = a, e || (e = i !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e)
      return !1;
    const s = (i, r, a, o) => {
      if (n(this, mt).has(i.id)) {
        const l = n(this, xt).get(o);
        l ? i._setParentAndPosition(l, r, a) : (i.pageIndex = o, i.x = r, i.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: r,
          newY: a,
          newPageIndex: o
        }] of t)
          s(i, r, a, o);
      },
      undo: () => {
        for (const [i, {
          savedX: r,
          savedY: a,
          savedPageIndex: o
        }] of t)
          s(i, r, a, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (n(this, Ye))
      for (const s of n(this, Ye).keys())
        s.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, q).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, ne) === t;
  }
  getActive() {
    return n(this, ne);
  }
  getMode() {
    return n(this, At);
  }
  get imageManager() {
    return U(this, "imageManager", new Du());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let h = 0, c = e.rangeCount; h < c; h++)
      if (!t.contains(e.getRangeAt(h).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: i,
      width: r,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, c, f, g) => ({
          x: (c - i) / a,
          y: 1 - (h + f - s) / r,
          width: g / a,
          height: f / r
        });
        break;
      case "180":
        o = (h, c, f, g) => ({
          x: 1 - (h + f - s) / r,
          y: 1 - (c + g - i) / a,
          width: f / r,
          height: g / a
        });
        break;
      case "270":
        o = (h, c, f, g) => ({
          x: 1 - (c + g - i) / a,
          y: (h - s) / r,
          width: g / a,
          height: f / r
        });
        break;
      default:
        o = (h, c, f, g) => ({
          x: (h - s) / r,
          y: (c - i) / a,
          width: f / r,
          height: g / a
        });
        break;
    }
    const l = [];
    for (let h = 0, c = e.rangeCount; h < c; h++) {
      const f = e.getRangeAt(h);
      if (!f.collapsed)
        for (const {
          x: g,
          y: m,
          width: A,
          height: y
        } of f.getClientRects())
          A === 0 || y === 0 || l.push(o(g, m, A, y));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (n(this, Pr) || p(this, Pr, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = n(this, Pr)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = n(this, Pr)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = n(this, ys).getRawValue(e);
    s && (n(this, At) === B.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
};
Cr = new WeakMap(), ne = new WeakMap(), mt = new WeakMap(), xt = new WeakMap(), Tr = new WeakMap(), ys = new WeakMap(), Pr = new WeakMap(), _e = new WeakMap(), Js = new WeakMap(), ji = new WeakMap(), Rr = new WeakMap(), Wi = new WeakMap(), Ye = new WeakMap(), Me = new WeakMap(), Xi = new WeakMap(), Io = new WeakMap(), Do = new WeakMap(), kr = new WeakMap(), Fo = new WeakMap(), Ke = new WeakMap(), Zs = new WeakMap(), Mr = new WeakMap(), ti = new WeakMap(), Qe = new WeakMap(), Hc = new WeakMap(), ei = new WeakMap(), No = new WeakMap(), si = new WeakMap(), qi = new WeakMap(), Oo = new WeakMap(), Ho = new WeakMap(), At = new WeakMap(), q = new WeakMap(), _s = new WeakMap(), Yi = new WeakMap(), Bo = new WeakMap(), $o = new WeakMap(), ii = new WeakMap(), Je = new WeakMap(), ws = new WeakMap(), Go = new WeakMap(), we = new WeakMap(), Lr = new WeakSet(), qh = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, zo = new WeakSet(), Nu = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of n(this, xt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, Bc = new WeakSet(), Np = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = b(this, Lr, qh).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (n(this, Qe) || p(this, Qe, new Xm(this)), n(this, Qe).show(s, i, this.direction === "ltr"));
}, $c = new WeakSet(), Op = function() {
  var r, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, _s) && ((r = n(this, Qe)) == null || r.hide(), p(this, _s, null), b(this, Ct, Ut).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === n(this, _s))
    return;
  const i = b(this, Lr, qh).call(this, t).closest(".textLayer");
  if (!i) {
    n(this, _s) && ((a = n(this, Qe)) == null || a.hide(), p(this, _s, null), b(this, Ct, Ut).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = n(this, Qe)) == null || o.hide(), p(this, _s, e), b(this, Ct, Ut).call(this, {
    hasSelectedText: !0
  }), !(n(this, At) !== B.HIGHLIGHT && n(this, At) !== B.NONE) && (n(this, At) === B.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), p(this, ti, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, At) === B.HIGHLIGHT ? b(this, zo, Nu).call(this, i) : null;
    l == null || l.toggleDrawing();
    const h = new AbortController(), c = this.combinedSignal(h), f = (g) => {
      g.type === "pointerup" && g.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), g.type === "pointerup" && b(this, Ir, Yh).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", f, {
      signal: c
    }), window.addEventListener("blur", f, {
      signal: c
    });
  }
}, Ir = new WeakSet(), Yh = function(t = "") {
  n(this, At) === B.HIGHLIGHT ? this.highlightSelection(t) : n(this, Io) && b(this, Bc, Np).call(this);
}, Gc = new WeakSet(), Hp = function() {
  document.addEventListener("selectionchange", b(this, $c, Op).bind(this), {
    signal: this._signal
  });
}, zc = new WeakSet(), Bp = function() {
  if (n(this, Zs))
    return;
  p(this, Zs, new AbortController());
  const t = this.combinedSignal(n(this, Zs));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, Uc = new WeakSet(), $p = function() {
  var t;
  (t = n(this, Zs)) == null || t.abort(), p(this, Zs, null);
}, Uo = new WeakSet(), Ou = function() {
  if (n(this, si))
    return;
  p(this, si, new AbortController());
  const t = this.combinedSignal(n(this, si));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, Vc = new WeakSet(), Gp = function() {
  var t;
  (t = n(this, si)) == null || t.abort(), p(this, si, null);
}, Vo = new WeakSet(), Hu = function() {
  if (n(this, Js))
    return;
  p(this, Js, new AbortController());
  const t = this.combinedSignal(n(this, Js));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, jo = new WeakSet(), Bu = function() {
  var t;
  (t = n(this, Js)) == null || t.abort(), p(this, Js, null);
}, jc = new WeakSet(), zp = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, Ct = new WeakSet(), Ut = function(t) {
  Object.entries(t).some(([s, i]) => n(this, $o)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(n(this, $o), t)
  }), n(this, At) === B.HIGHLIGHT && t.hasSelectedEditor === !1 && b(this, Le, gs).call(this, [[j.HIGHLIGHT_FREE, !0]]));
}, Le = new WeakSet(), gs = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, Wc = new WeakSet(), Up = async function() {
  if (!n(this, ei)) {
    p(this, ei, !0);
    const t = [];
    for (const e of n(this, xt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, mt).values())
      e.enable();
  }
}, Xc = new WeakSet(), Vp = function() {
  if (this.unselectAll(), n(this, ei)) {
    p(this, ei, !1);
    for (const t of n(this, xt).values())
      t.disable();
    for (const t of n(this, mt).values())
      t.disable();
  }
}, Wo = new WeakSet(), $u = function(t) {
  const e = n(this, xt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, qc = new WeakSet(), jp = function() {
  let t = null;
  for (t of n(this, q))
    ;
  return t;
}, Ki = new WeakSet(), no = function() {
  if (n(this, mt).size === 0)
    return !0;
  if (n(this, mt).size === 1)
    for (const t of n(this, mt).values())
      return t.isEmpty();
  return !1;
}, Xo = new WeakSet(), Gu = function(t) {
  for (const e of n(this, q))
    e.unselect();
  n(this, q).clear();
  for (const e of t)
    e.isEmpty() || (n(this, q).add(e), e.select());
  b(this, Ct, Ut).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, F(Ar, "TRANSLATE_SMALL", 1), F(Ar, "TRANSLATE_BIG", 10);
let ar = Ar;
var yt, Ze, Ie, Dr, ts, re, Fr, es, Zt, vs, Qi, ss, ni, Ji, ro, Nr, Kh;
const Vt = class Vt {
  constructor(t) {
    u(this, Ji);
    u(this, Nr);
    u(this, yt, null);
    u(this, Ze, !1);
    u(this, Ie, null);
    u(this, Dr, null);
    u(this, ts, null);
    u(this, re, null);
    u(this, Fr, !1);
    u(this, es, null);
    u(this, Zt, null);
    u(this, vs, null);
    u(this, Qi, null);
    u(this, ss, !1);
    p(this, Zt, t), p(this, ss, t._uiManager.useNewAltTextFlow), n(Vt, ni) || p(Vt, ni, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    Vt._l10n ?? (Vt._l10n = t);
  }
  async render() {
    const t = p(this, Ie, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = p(this, Dr, document.createElement("span"));
    t.append(e), n(this, ss) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(Vt, ni).missing), e.setAttribute("data-l10n-id", n(Vt, ni)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = n(this, Zt)._uiManager._signal;
    t.addEventListener("contextmenu", Ve, {
      signal: s
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: s
    });
    const i = (r) => {
      r.preventDefault(), n(this, Zt)._uiManager.editAltText(n(this, Zt)), n(this, ss) && n(this, Zt)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: n(this, Ji, ro)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (p(this, Fr, !0), i(r));
    }, {
      signal: s
    }), await b(this, Nr, Kh).call(this), t;
  }
  finish() {
    n(this, Ie) && (n(this, Ie).focus({
      focusVisible: n(this, Fr)
    }), p(this, Fr, !1));
  }
  isEmpty() {
    return n(this, ss) ? n(this, yt) === null : !n(this, yt) && !n(this, Ze);
  }
  hasData() {
    return n(this, ss) ? n(this, yt) !== null || !!n(this, vs) : this.isEmpty();
  }
  get guessedText() {
    return n(this, vs);
  }
  async setGuessedText(t) {
    n(this, yt) === null && (p(this, vs, t), p(this, Qi, await Vt._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), b(this, Nr, Kh).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!n(this, ss) || n(this, yt)) {
      (e = n(this, es)) == null || e.remove(), p(this, es, null);
      return;
    }
    if (!n(this, es)) {
      const s = p(this, es, document.createElement("div"));
      s.className = "noAltTextBadge", n(this, Zt).div.append(s);
    }
    n(this, es).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, yt);
    return !t && n(this, vs) === e && (e = n(this, Qi)), {
      altText: e,
      decorative: n(this, Ze),
      guessedText: n(this, vs),
      textWithDisclaimer: n(this, Qi)
    };
  }
  get data() {
    return {
      altText: n(this, yt),
      decorative: n(this, Ze)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: r = !1
  }) {
    s && (p(this, vs, s), p(this, Qi, i)), !(n(this, yt) === t && n(this, Ze) === e) && (r || (p(this, yt, t), p(this, Ze, e)), b(this, Nr, Kh).call(this));
  }
  toggle(t = !1) {
    n(this, Ie) && (!t && n(this, re) && (clearTimeout(n(this, re)), p(this, re, null)), n(this, Ie).disabled = !t);
  }
  shown() {
    n(this, Zt)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: n(this, Ji, ro)
      }
    });
  }
  destroy() {
    var t, e;
    (t = n(this, Ie)) == null || t.remove(), p(this, Ie, null), p(this, Dr, null), p(this, ts, null), (e = n(this, es)) == null || e.remove(), p(this, es, null);
  }
};
yt = new WeakMap(), Ze = new WeakMap(), Ie = new WeakMap(), Dr = new WeakMap(), ts = new WeakMap(), re = new WeakMap(), Fr = new WeakMap(), es = new WeakMap(), Zt = new WeakMap(), vs = new WeakMap(), Qi = new WeakMap(), ss = new WeakMap(), ni = new WeakMap(), Ji = new WeakSet(), ro = function() {
  return n(this, yt) && "added" || n(this, yt) === null && this.guessedText && "review" || "missing";
}, Nr = new WeakSet(), Kh = async function() {
  var i, r, a;
  const t = n(this, Ie);
  if (!t)
    return;
  if (n(this, ss)) {
    if (t.classList.toggle("done", !!n(this, yt)), t.setAttribute("data-l10n-id", n(Vt, ni)[n(this, Ji, ro)]), (i = n(this, Dr)) == null || i.setAttribute("data-l10n-id", n(Vt, ni)[`${n(this, Ji, ro)}-label`]), !n(this, yt)) {
      (r = n(this, ts)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, yt) && !n(this, Ze)) {
      t.classList.remove("done"), (a = n(this, ts)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, ts);
  if (!e) {
    p(this, ts, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, Zt).id}`;
    const o = 100, l = n(this, Zt)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(n(this, re)), p(this, re, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      p(this, re, setTimeout(() => {
        p(this, re, null), n(this, ts).classList.add("show"), n(this, Zt)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      n(this, re) && (clearTimeout(n(this, re)), p(this, re, null)), (h = n(this, ts)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  n(this, Ze) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, yt)), e.parentNode || t.append(e);
  const s = n(this, Zt).getImageForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, u(Vt, ni, null), F(Vt, "_l10n", null);
let vc = Vt;
var qo, Zi, Yo, Ko, Qo, Jo, Zo, Or, Ss, tn, ri, Yc, Wp, Kc, Xp, tl, zu;
const tp = class tp {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    u(this, Yc);
    u(this, Kc);
    u(this, tl);
    u(this, qo, void 0);
    u(this, Zi, !1);
    u(this, Yo, null);
    u(this, Ko, void 0);
    u(this, Qo, void 0);
    u(this, Jo, void 0);
    u(this, Zo, void 0);
    u(this, Or, void 0);
    u(this, Ss, null);
    u(this, tn, void 0);
    u(this, ri, null);
    p(this, qo, t), p(this, Yo, s), p(this, Ko, e), p(this, Qo, i), p(this, Jo, r), p(this, Zo, a), p(this, tn, new AbortController()), p(this, Or, AbortSignal.any([o, n(this, tn).signal])), t.addEventListener("touchstart", b(this, Yc, Wp).bind(this), {
      passive: !1,
      signal: n(this, Or)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return U(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
  }
  destroy() {
    var t;
    (t = n(this, tn)) == null || t.abort(), p(this, tn, null);
  }
};
qo = new WeakMap(), Zi = new WeakMap(), Yo = new WeakMap(), Ko = new WeakMap(), Qo = new WeakMap(), Jo = new WeakMap(), Zo = new WeakMap(), Or = new WeakMap(), Ss = new WeakMap(), tn = new WeakMap(), ri = new WeakMap(), Yc = new WeakSet(), Wp = function(t) {
  var i, r, a;
  if ((i = n(this, Ko)) != null && i.call(this) || t.touches.length < 2)
    return;
  if (!n(this, ri)) {
    p(this, ri, new AbortController());
    const o = AbortSignal.any([n(this, Or), n(this, ri).signal]), l = n(this, qo), h = {
      signal: o,
      passive: !1
    };
    l.addEventListener("touchmove", b(this, Kc, Xp).bind(this), h), l.addEventListener("touchend", b(this, tl, zu).bind(this), h), l.addEventListener("touchcancel", b(this, tl, zu).bind(this), h), (r = n(this, Qo)) == null || r.call(this);
  }
  if (be(t), t.touches.length !== 2 || (a = n(this, Yo)) != null && a.call(this)) {
    p(this, Ss, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), p(this, Ss, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, Kc = new WeakSet(), Xp = function(t) {
  var S;
  if (!n(this, Ss) || t.touches.length !== 2)
    return;
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: i,
    screenY: r
  } = e, {
    screenX: a,
    screenY: o
  } = s, l = n(this, Ss), {
    touch0X: h,
    touch0Y: c,
    touch1X: f,
    touch1Y: g
  } = l, m = f - h, A = g - c, y = a - i, w = o - r, _ = Math.hypot(y, w) || 1, v = Math.hypot(m, A) || 1;
  if (!n(this, Zi) && Math.abs(v - _) <= tp.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = i, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, t.preventDefault(), !n(this, Zi)) {
    p(this, Zi, !0);
    return;
  }
  const E = [(i + a) / 2, (r + o) / 2];
  (S = n(this, Jo)) == null || S.call(this, E, v, _);
}, tl = new WeakSet(), zu = function(t) {
  var e;
  n(this, ri).abort(), p(this, ri, null), (e = n(this, Zo)) == null || e.call(this), n(this, Ss) && (t.preventDefault(), p(this, Ss, null), p(this, Zi, !1));
};
let Sc = tp;
var en, De, J, Hr, ai, el, sn, Tt, nn, Es, oi, sl, rn, ae, il, an, xs, is, Br, $r, ve, on, nl, Qc, rl, Uu, al, Vu, Gr, Qh, Jc, qp, Zc, Yp, ol, ju, zr, Jh, ll, Wu, td, Kp, ed, Qp, sd, Jp, hl, Xu, id, Zp, cl, qu, nd, tg, rd, eg, ad, sg, dl, Yu, ln, ao;
const G = class G {
  constructor(t) {
    u(this, rl);
    u(this, Gr);
    u(this, Jc);
    u(this, Zc);
    u(this, ol);
    u(this, zr);
    u(this, ll);
    u(this, td);
    u(this, ed);
    u(this, sd);
    u(this, hl);
    u(this, id);
    u(this, cl);
    u(this, nd);
    u(this, rd);
    u(this, ad);
    u(this, dl);
    u(this, ln);
    u(this, en, null);
    u(this, De, null);
    u(this, J, null);
    u(this, Hr, !1);
    u(this, ai, null);
    u(this, el, "");
    u(this, sn, !1);
    u(this, Tt, null);
    u(this, nn, null);
    u(this, Es, null);
    u(this, oi, null);
    u(this, sl, "");
    u(this, rn, !1);
    u(this, ae, null);
    u(this, il, !1);
    u(this, an, !1);
    u(this, xs, !1);
    u(this, is, null);
    u(this, Br, 0);
    u(this, $r, 0);
    u(this, ve, null);
    u(this, on, null);
    F(this, "_editToolbar", null);
    F(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    F(this, "_initialData", null);
    F(this, "_isVisible", !0);
    F(this, "_uiManager", null);
    F(this, "_focusEventsAllowed", !0);
    u(this, nl, !1);
    u(this, Qc, G._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: r,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [r, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = G.prototype._resizeWithKeyboard, e = ar.TRANSLATE_SMALL, s = ar.TRANSLATE_BIG;
    return U(this, "_resizerKeyboardManager", new Hh([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape", "mac+Escape"], G.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return U(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new Km({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (G._l10n ?? (G._l10n = t), G._l10nResizer || (G._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), G._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    G._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    Q("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return n(this, nl);
  }
  set _isDraggable(t) {
    var e;
    p(this, nl, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = n(this, Qc);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : b(this, ln, ao).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, rn) ? p(this, rn, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [r, a] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / r, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  translate(t, e) {
    b(this, rl, Uu).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, ae) || p(this, ae, [this.x, this.y, this.width, this.height]), b(this, rl, Uu).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    n(this, ae) || p(this, ae, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, r]
    } = this;
    if (this.x += t / i, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: f,
        y: g
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, f, g) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o
    } = this;
    const [l, h] = this.getBaseTranslation();
    a += l, o += h;
    const {
      style: c
    } = s;
    c.left = `${(100 * a).toFixed(2)}%`, c.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), s.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(t, e) {
  }
  _onTranslated(t, e) {
  }
  get _hasBeenMoved() {
    return !!n(this, ae) && (n(this, ae)[0] !== this.x || n(this, ae)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, ae) && (n(this, ae)[2] !== this.width || n(this, ae)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = G, i = s / t, r = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, r];
      case 180:
        return [i, r];
      case 270:
        return [i, -r];
      default:
        return [-i, -r];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: e
      },
      pageDimensions: [s, i]
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: l
    } = this;
    if (o *= s, l *= i, r *= s, a *= i, this._mustFixPosition)
      switch (t) {
        case 0:
          r = Math.max(0, Math.min(s - o, r)), a = Math.max(0, Math.min(i - l, a));
          break;
        case 90:
          r = Math.max(0, Math.min(s - l, r)), a = Math.min(i, Math.max(o, a));
          break;
        case 180:
          r = Math.min(s, Math.max(o, r)), a = Math.min(i, Math.max(l, a));
          break;
        case 270:
          r = Math.min(s, Math.max(l, r)), a = Math.max(0, Math.min(i - o, a));
          break;
      }
    this.x = r /= s, this.y = a /= i;
    const [h, c] = this.getBaseTranslation();
    r += h, a += c, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return b(s = G, al, Vu).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return b(s = G, al, Vu).call(s, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, s]
    } = this;
    return [e * t, s * t];
  }
  setDims(t, e) {
    const [s, i] = this.parentDimensions, {
      style: r
    } = this.div;
    r.width = `${(100 * t / s).toFixed(2)}%`, n(this, sn) || (r.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), r = !n(this, sn) && e.endsWith("%");
    if (i && r)
      return;
    const [a, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !n(this, sn) && !r && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var t;
    (t = n(this, J)) == null || t.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || n(this, an) ? this._editToolbar : (this._editToolbar = new Lu(this), this.div.append(this._editToolbar.render()), n(this, J) && await this._editToolbar.addAltText(n(this, J)), this._editToolbar);
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = n(this, J)) == null || t.destroy());
  }
  addContainer(t) {
    var s;
    const e = (s = this._editToolbar) == null ? void 0 : s.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    n(this, J) || (vc.initialize(G._l10n), p(this, J, new vc(this)), n(this, en) && (n(this, J).data = n(this, en), p(this, en, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = n(this, J)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    n(this, J) && (n(this, J).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = n(this, J)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = n(this, J)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = n(this, J)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!n(this, J) && !n(this, J).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = n(this, J)) == null ? void 0 : t.hasData()) ?? !1;
  }
  render() {
    var r;
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = n(this, Hr) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), b(this, cl, qu).call(this);
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), wc(this, this.div, ["pointerdown"]), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, on) || p(this, on, new Sc({
      container: this.div,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: b(this, td, Kp).bind(this),
      onPinching: b(this, ed, Qp).bind(this),
      onPinchEnd: b(this, sd, Jp).bind(this),
      signal: this._uiManager._signal
    }))), (r = this._uiManager._editorUndoBar) == null || r.hide(), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = qt.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (p(this, rn, !0), this._isDraggable) {
      b(this, id, Zp).call(this, t);
      return;
    }
    b(this, hl, Xu).call(this, t);
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, is) && clearTimeout(n(this, is)), p(this, is, setTimeout(() => {
      var t;
      p(this, is, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [r, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, c = e / i, f = this.x * r, g = this.y * a, m = this.width * r, A = this.height * a;
    switch (s) {
      case 0:
        return [f + h + o, a - g - c - A + l, f + h + m + o, a - g - c + l];
      case 90:
        return [f + c + o, a - g + h + l, f + c + A + o, a - g + h + m + l];
      case 180:
        return [f - h - m + o, a - g + c + l, f - h + o, a - g + c + A + l];
      case 270:
        return [f - c - A + o, a - g - h - m + l, f - c + o, a - g - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, r, a] = t, o = r - s, l = a - i;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, l];
      case 90:
        return [s, e - i, l, o];
      case 180:
        return [r, e - i, o, l];
      case 270:
        return [r, e - a, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    p(this, an, !0);
  }
  disableEditMode() {
    p(this, an, !1);
  }
  isInEditMode() {
    return n(this, an);
  }
  shouldGetKeyboardEvents() {
    return n(this, xs);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: s,
      right: i
    } = this.getClientDimensions(), {
      innerHeight: r,
      innerWidth: a
    } = window;
    return e < a && i > 0 && t < r && s > 0;
  }
  rebuild() {
    b(this, cl, qu).call(this);
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    var t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
    };
  }
  serialize(t = !1, e = null) {
    Q("An editor must be serializable");
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s
    });
    i.rotation = t.rotation, p(i, en, t.accessibilityData);
    const [r, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / r, i.y = l / a, i.width = h / r, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = n(this, oi)) == null || t.abort(), p(this, oi, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, is) && (clearTimeout(n(this, is)), p(this, is, null)), b(this, ln, ao).call(this), this.removeEditToolbar(), n(this, ve)) {
      for (const s of n(this, ve).values())
        clearTimeout(s);
      p(this, ve, null);
    }
    this.parent = null, (e = n(this, on)) == null || e.destroy(), p(this, on, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (b(this, Jc, qp).call(this), n(this, Tt).classList.remove("hidden"), wc(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), p(this, Es, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = n(this, Tt).children;
    if (!n(this, De)) {
      p(this, De, Array.from(e));
      const a = b(this, nd, tg).bind(this), o = b(this, rd, eg).bind(this), l = this._uiManager._signal;
      for (const h of n(this, De)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", b(this, ad, sg).bind(this, c), {
          signal: l
        }), h.setAttribute("data-l10n-id", G._l10nResizer[c]);
      }
    }
    const s = n(this, De)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, De).length / 4);
    if (r !== i) {
      if (r < i)
        for (let o = 0; o < i - r; o++)
          n(this, Tt).append(n(this, Tt).firstChild);
      else if (r > i)
        for (let o = 0; o < r - i; o++)
          n(this, Tt).firstChild.before(n(this, Tt).lastChild);
      let a = 0;
      for (const o of e) {
        const h = n(this, De)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", G._l10nResizer[h]);
      }
    }
    b(this, dl, Yu).call(this, 0), p(this, xs, !0), n(this, Tt).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, xs) && b(this, ll, Wu).call(this, n(this, sl), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    b(this, ln, ao).call(this), this.div.focus();
  }
  select() {
    var t, e, s;
    if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var i, r;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((r = this._editToolbar) == null || r.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (s = n(this, J)) == null || s.toggleAltTextBadge(!1);
  }
  unselect() {
    var t, e, s, i, r;
    (t = n(this, Tt)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (r = n(this, J)) == null || r.toggleAltTextBadge(!0);
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return n(this, il);
  }
  set isEditing(t) {
    p(this, il, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    p(this, sn, !0);
    const s = t / e, {
      style: i
    } = this.div;
    i.aspectRatio = s, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      n(this, ve) || p(this, ve, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = n(this, ve).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), n(this, ve).delete(s), n(this, ve).size === 0 && p(this, ve, null);
      }, G._telemetryTimeout), n(this, ve).set(s, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), p(this, Hr, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), p(this, Hr, !0);
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
en = new WeakMap(), De = new WeakMap(), J = new WeakMap(), Hr = new WeakMap(), ai = new WeakMap(), el = new WeakMap(), sn = new WeakMap(), Tt = new WeakMap(), nn = new WeakMap(), Es = new WeakMap(), oi = new WeakMap(), sl = new WeakMap(), rn = new WeakMap(), ae = new WeakMap(), il = new WeakMap(), an = new WeakMap(), xs = new WeakMap(), is = new WeakMap(), Br = new WeakMap(), $r = new WeakMap(), ve = new WeakMap(), on = new WeakMap(), nl = new WeakMap(), Qc = new WeakMap(), rl = new WeakSet(), Uu = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, al = new WeakSet(), Vu = function(t, e, s) {
  switch (s) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, Gr = new WeakSet(), Qh = function(t) {
  switch (t) {
    case 90: {
      const [e, s] = this.pageDimensions;
      return [0, -e / s, s / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, s] = this.pageDimensions;
      return [0, e / s, -s / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Jc = new WeakSet(), qp = function() {
  if (n(this, Tt))
    return;
  p(this, Tt, document.createElement("div")), n(this, Tt).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    n(this, Tt).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", b(this, Zc, Yp).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", Ve, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(n(this, Tt));
}, Zc = new WeakSet(), Yp = function(t, e) {
  var c;
  e.preventDefault();
  const {
    isMac: s
  } = qt.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (c = n(this, J)) == null || c.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, p(this, nn, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", b(this, ll, Wu).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", be, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", Ve, {
    signal: a
  }), p(this, Es, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var f;
    r.abort(), this.parent.togglePointerEvents(!0), (f = n(this, J)) == null || f.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, b(this, zr, Jh).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, ol = new WeakSet(), ju = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e;
  const [r, a] = this.parentDimensions;
  this.setDims(r * s, a * i), this.fixAndSetPosition(), this._onResized();
}, zr = new WeakSet(), Jh = function() {
  if (!n(this, Es))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = n(this, Es);
  p(this, Es, null);
  const r = this.x, a = this.y, o = this.width, l = this.height;
  r === t && a === e && o === s && l === i || this.addCommands({
    cmd: b(this, ol, ju).bind(this, r, a, o, l),
    undo: b(this, ol, ju).bind(this, t, e, s, i),
    mustExec: !0
  });
}, ll = new WeakSet(), Wu = function(t, e) {
  const [s, i] = this.parentDimensions, r = this.x, a = this.y, o = this.width, l = this.height, h = G.MIN_SIZE / s, c = G.MIN_SIZE / i, f = b(this, Gr, Qh).call(this, this.rotation), g = (k, N) => [f[0] * k + f[2] * N, f[1] * k + f[3] * N], m = b(this, Gr, Qh).call(this, 360 - this.rotation), A = (k, N) => [m[0] * k + m[2] * N, m[1] * k + m[3] * N];
  let y, w, _ = !1, v = !1;
  switch (t) {
    case "topLeft":
      _ = !0, y = (k, N) => [0, 0], w = (k, N) => [k, N];
      break;
    case "topMiddle":
      y = (k, N) => [k / 2, 0], w = (k, N) => [k / 2, N];
      break;
    case "topRight":
      _ = !0, y = (k, N) => [k, 0], w = (k, N) => [0, N];
      break;
    case "middleRight":
      v = !0, y = (k, N) => [k, N / 2], w = (k, N) => [0, N / 2];
      break;
    case "bottomRight":
      _ = !0, y = (k, N) => [k, N], w = (k, N) => [0, 0];
      break;
    case "bottomMiddle":
      y = (k, N) => [k / 2, N], w = (k, N) => [k / 2, 0];
      break;
    case "bottomLeft":
      _ = !0, y = (k, N) => [0, N], w = (k, N) => [k, 0];
      break;
    case "middleLeft":
      v = !0, y = (k, N) => [0, N / 2], w = (k, N) => [k, N / 2];
      break;
  }
  const E = y(o, l), S = w(o, l);
  let x = g(...S);
  const T = G._round(r + x[0]), C = G._round(a + x[1]);
  let M = 1, D = 1, V, O;
  if (e.fromKeyboard)
    ({
      deltaX: V,
      deltaY: O
    } = e);
  else {
    const {
      screenX: k,
      screenY: N
    } = e, [ie, je] = n(this, nn);
    [V, O] = this.screenToPageTranslation(k - ie, N - je), n(this, nn)[0] = k, n(this, nn)[1] = N;
  }
  if ([V, O] = A(V / s, O / i), _) {
    const k = Math.hypot(o, l);
    M = D = Math.max(Math.min(Math.hypot(S[0] - E[0] - V, S[1] - E[1] - O) / k, 1 / o, 1 / l), h / o, c / l);
  } else
    v ? M = Math.max(h, Math.min(1, Math.abs(S[0] - E[0] - V))) / o : D = Math.max(c, Math.min(1, Math.abs(S[1] - E[1] - O))) / l;
  const Z = G._round(o * M), lt = G._round(l * D);
  x = g(...w(Z, lt));
  const X = T - x[0], Gt = C - x[1];
  n(this, ae) || p(this, ae, [this.x, this.y, this.width, this.height]), this.width = Z, this.height = lt, this.x = X, this.y = Gt, this.setDims(s * Z, i * lt), this.fixAndSetPosition(), this._onResizing();
}, td = new WeakSet(), Kp = function() {
  var t;
  p(this, Es, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = n(this, J)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, ed = new WeakSet(), Qp = function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = b(this, Gr, Qh).call(this, this.rotation), o = (T, C) => [a[0] * T + a[2] * C, a[1] * T + a[3] * C], [l, h] = this.parentDimensions, c = this.x, f = this.y, g = this.width, m = this.height, A = G.MIN_SIZE / l, y = G.MIN_SIZE / h;
  r = Math.max(Math.min(r, 1 / g, 1 / m), A / g, y / m);
  const w = G._round(g * r), _ = G._round(m * r);
  if (w === g && _ === m)
    return;
  n(this, ae) || p(this, ae, [c, f, g, m]);
  const v = o(g / 2, m / 2), E = G._round(c + v[0]), S = G._round(f + v[1]), x = o(w / 2, _ / 2);
  this.x = E - x[0], this.y = S - x[1], this.width = w, this.height = _, this.setDims(l * w, h * _), this.fixAndSetPosition(), this._onResizing();
}, sd = new WeakSet(), Jp = function() {
  var t;
  (t = n(this, J)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), b(this, zr, Jh).call(this);
}, hl = new WeakSet(), Xu = function(t) {
  const {
    isMac: e
  } = qt.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, id = new WeakSet(), Zp = function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  let s = !1;
  const i = new AbortController(), r = this._uiManager.combinedSignal(i), a = {
    capture: !0,
    passive: !1,
    signal: r
  }, o = (h) => {
    i.abort(), p(this, ai, null), p(this, rn, !1), this._uiManager.endDragSession() || b(this, hl, Xu).call(this, h), s && this._onStopDragging();
  };
  e && (p(this, Br, t.clientX), p(this, $r, t.clientY), p(this, ai, t.pointerId), p(this, el, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._onStartDragging());
    const {
      clientX: c,
      clientY: f,
      pointerId: g
    } = h;
    if (g !== n(this, ai)) {
      be(h);
      return;
    }
    const [m, A] = this.screenToPageTranslation(c - n(this, Br), f - n(this, $r));
    p(this, Br, c), p(this, $r, f), this._uiManager.dragSelectedEditors(m, A);
  }, a), window.addEventListener("touchmove", be, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === n(this, el) && (n(this, on) || h.isPrimary) && o(h), be(h);
  }, a));
  const l = (h) => {
    if (!n(this, ai) || n(this, ai) === h.pointerId) {
      o(h);
      return;
    }
    be(h);
  };
  window.addEventListener("pointerup", l, {
    signal: r
  }), window.addEventListener("blur", l, {
    signal: r
  });
}, cl = new WeakSet(), qu = function() {
  if (n(this, oi) || !this.div)
    return;
  p(this, oi, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, oi));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, nd = new WeakSet(), tg = function(t) {
  G._resizerKeyboardManager.exec(this, t);
}, rd = new WeakSet(), eg = function(t) {
  var e;
  n(this, xs) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, Tt) && b(this, ln, ao).call(this);
}, ad = new WeakSet(), sg = function(t) {
  p(this, sl, n(this, xs) ? t : "");
}, dl = new WeakSet(), Yu = function(t) {
  if (n(this, De))
    for (const e of n(this, De))
      e.tabIndex = t;
}, ln = new WeakSet(), ao = function() {
  p(this, xs, !1), b(this, dl, Yu).call(this, -1), b(this, zr, Jh).call(this);
}, u(G, al), F(G, "_l10n", null), F(G, "_l10nResizer", null), F(G, "_borderLineWidth", -1), F(G, "_colorManager", new Fu()), F(G, "_zIndex", 1), F(G, "_telemetryTimeout", 1e3);
let rt = G;
class Km extends rt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const hp = 3285377520, ye = 4294901760, Xe = 65535;
class ig {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : hp, this.h2 = t ? t & 4294967295 : hp;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let y = 0, w = t.length; y < w; y++) {
        const _ = t.charCodeAt(y);
        _ <= 255 ? e[s++] = _ : (e[s++] = _ >>> 8, e[s++] = _ & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, r = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, c = this.h2;
    const f = 3432918353, g = 461845907, m = f & Xe, A = g & Xe;
    for (let y = 0; y < i; y++)
      y & 1 ? (o = a[y], o = o * f & ye | o * m & Xe, o = o << 15 | o >>> 17, o = o * g & ye | o * A & Xe, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[y], l = l * f & ye | l * m & Xe, l = l << 15 | l >>> 17, l = l * g & ye | l * A & Xe, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * f & ye | o * m & Xe, o = o << 15 | o >>> 17, o = o * g & ye | o * A & Xe, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & ye | t * 36045 & Xe, e = e * 4283543511 & ye | ((e << 16 | t >>> 16) * 2950163797 & ye) >>> 16, t ^= e >>> 1, t = t * 444984403 & ye | t * 60499 & Xe, e = e * 3301882366 & ye | ((e << 16 | t >>> 16) * 3120437893 & ye) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Ku = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var hn, cn, _t, od, ng;
class Yf {
  constructor() {
    u(this, od);
    u(this, hn, !1);
    u(this, cn, null);
    u(this, _t, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = n(this, _t).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return n(this, _t).get(t);
  }
  remove(t) {
    if (n(this, _t).delete(t), n(this, _t).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of n(this, _t).values())
        if (e instanceof rt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = n(this, _t).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [r, a] of Object.entries(e))
        s[r] !== a && (i = !0, s[r] = a);
    else
      i = !0, n(this, _t).set(t, e);
    i && b(this, od, ng).call(this), e instanceof rt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return n(this, _t).has(t);
  }
  getAll() {
    return n(this, _t).size > 0 ? Uf(n(this, _t)) : null;
  }
  setAll(t) {
    for (const [e, s] of Object.entries(t))
      this.setValue(e, s);
  }
  get size() {
    return n(this, _t).size;
  }
  resetModified() {
    n(this, hn) && (p(this, hn, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new rg(this);
  }
  get serializable() {
    if (n(this, _t).size === 0)
      return Ku;
    const t = /* @__PURE__ */ new Map(), e = new ig(), s = [], i = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, _t)) {
      const l = o instanceof rt ? o.serialize(!1, i) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : Ku;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of n(this, _t).values()) {
      if (!(s instanceof rt))
        continue;
      const i = s.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: r
      } = i;
      e.has(r) || e.set(r, Object.getPrototypeOf(s).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const a = t[r] || (t[r] = /* @__PURE__ */ new Map());
      for (const [o, l] of Object.entries(i)) {
        if (o === "type")
          continue;
        let h = a.get(o);
        h || (h = /* @__PURE__ */ new Map(), a.set(o, h));
        const c = h.get(l) ?? 0;
        h.set(l, c + 1);
      }
    }
    for (const [s, i] of e)
      t[s] = i.computeTelemetryFinalData(t[s]);
    return t;
  }
  resetModifiedIds() {
    p(this, cn, null);
  }
  get modifiedIds() {
    if (n(this, cn))
      return n(this, cn);
    const t = [];
    for (const e of n(this, _t).values())
      !(e instanceof rt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return p(this, cn, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
}
hn = new WeakMap(), cn = new WeakMap(), _t = new WeakMap(), od = new WeakSet(), ng = function() {
  n(this, hn) || (p(this, hn, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var ul;
class rg extends Yf {
  constructor(e) {
    super();
    u(this, ul, void 0);
    const {
      map: s,
      hash: i,
      transfer: r
    } = e.serializable, a = structuredClone(s, r ? {
      transfer: r
    } : null);
    p(this, ul, {
      map: a,
      hash: i,
      transfer: r
    });
  }
  get print() {
    Q("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, ul);
  }
  get modifiedIds() {
    return U(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
ul = new WeakMap();
var Ur;
class Qm {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    u(this, Ur, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), n(this, Ur).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || n(this, Ur).has(t.loadedName))) {
      if (ft(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: i,
          style: r
        } = t, a = new FontFace(s, i, r);
        this.addNativeFontFace(a);
        try {
          await a.load(), n(this, Ur).add(s), e == null || e(t);
        } catch {
          $(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
        }
        return;
      }
      Q("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw $(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return U(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return ($t || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), U(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (ft(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
        const r = s.shift();
        setTimeout(r.callback, 0);
      }
    }
    const {
      loadingRequests: s
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return s.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return U(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(S, x) {
      return S.charCodeAt(x) << 24 | S.charCodeAt(x + 1) << 16 | S.charCodeAt(x + 2) << 8 | S.charCodeAt(x + 3) & 255;
    }
    function i(S, x, T, C) {
      const M = S.substring(0, x), D = S.substring(x + T);
      return M + C + D;
    }
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function c(S, x) {
      if (++h > 30) {
        $("Load test font never loaded."), x();
        return;
      }
      if (l.font = "30px " + S, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        x();
        return;
      }
      setTimeout(c.bind(null, S, x));
    }
    const f = `lt${Date.now()}${this.loadTestFontId++}`;
    let g = this._loadTestFont;
    g = i(g, 976, f.length, f);
    const A = 16, y = 1482184792;
    let w = s(g, A);
    for (r = 0, a = f.length - 3; r < a; r += 4)
      w = w - y + s(f, r) | 0;
    r < f.length && (w = w - y + s(f + "XXX", r) | 0), g = i(g, A, 4, Nm(w));
    const _ = `url(data:font/opentype;base64,${btoa(g)});`, v = `@font-face {font-family:"${f}";src:${_}}`;
    this.insertRule(v);
    const E = this._document.createElement("div");
    E.style.visibility = "hidden", E.style.width = E.style.height = "10px", E.style.position = "absolute", E.style.top = E.style.left = "0px";
    for (const S of [t.loadedName, f]) {
      const x = this._document.createElement("span");
      x.textContent = "Hi", x.style.fontFamily = S, E.append(x);
    }
    this._document.body.append(E), c(f, () => {
      E.remove(), e.complete();
    });
  }
}
Ur = new WeakMap();
class Jm {
  constructor(t, {
    disableFontFace: e = !1,
    fontExtraProperties: s = !1,
    inspectFont: i = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const r in t)
      this[r] = t[r];
    this.disableFontFace = e === !0, this.fontExtraProperties = s === !0, this._inspectFont = i;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const s = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var s;
    if (!this.data || this.disableFontFace)
      return null;
    const t = `url(data:${this.mimetype};base64,${zm(this.data)});`;
    let e;
    if (!this.cssFontInfo)
      e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`;
    }
    return (s = this._inspectFont) == null || s.call(this, this, t), e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    const s = this.loadedName + "_path_" + e;
    let i;
    try {
      i = t.get(s);
    } catch (a) {
      $(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(i || "");
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = r;
  }
}
const $h = {
  DATA: 1,
  ERROR: 2
}, ut = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function cp() {
}
function Qt(d) {
  if (d instanceof Ii || d instanceof Ru || d instanceof vo || d instanceof ap || d instanceof _c || d instanceof vu)
    return d;
  switch (d instanceof Error || typeof d == "object" && d !== null || Q('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new Ii(d.message);
    case "InvalidPDFException":
      return new Ru(d.message);
    case "MissingPDFException":
      return new vo(d.message);
    case "PasswordException":
      return new ap(d.message, d.code);
    case "UnexpectedResponseException":
      return new _c(d.message, d.status);
    case "UnknownErrorException":
      return new vu(d.message, d.details);
  }
  return new vu(d.message, d.toString());
}
var Vr, ld, ag, hd, og, cd, lg, jr, Zh;
class oo {
  constructor(t, e, s) {
    u(this, ld);
    u(this, hd);
    u(this, cd);
    u(this, jr);
    u(this, Vr, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", b(this, ld, ag).bind(this), {
      signal: n(this, Vr).signal
    });
  }
  on(t, e) {
    const s = this.actionHandler;
    if (s[t])
      throw new Error(`There is already an actionName called "${t}"`);
    s[t] = e;
  }
  send(t, e, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t, e, s) {
    const i = this.callbackId++, r = Promise.withResolvers();
    this.callbackCapabilities[i] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, s, i) {
    const r = this.streamId++, a = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({
      start: (h) => {
        const c = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: h,
          startCall: c,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: h.desiredSize
        }, i), c.promise;
      },
      pull: (h) => {
        const c = Promise.withResolvers();
        return this.streamControllers[r].pullCall = c, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: ut.PULL,
          streamId: r,
          desiredSize: h.desiredSize
        }), c.promise;
      },
      cancel: (h) => {
        ft(h instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = c, this.streamControllers[r].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: ut.CANCEL,
          streamId: r,
          reason: Qt(h)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = n(this, Vr)) == null || t.abort(), p(this, Vr, null);
  }
}
Vr = new WeakMap(), ld = new WeakSet(), ag = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    b(this, cd, lg).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === $h.DATA)
      i.resolve(t.data);
    else if (t.callback === $h.ERROR)
      i.reject(Qt(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = this.sourceName, i = t.sourceName, r = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: $h.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: $h.ERROR,
        callbackId: t.callbackId,
        reason: Qt(a)
      });
    });
    return;
  }
  if (t.streamId) {
    b(this, hd, og).call(this, t);
    return;
  }
  e(t.data);
}, hd = new WeakSet(), og = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, c = 1, f) {
      if (this.isCancelled)
        return;
      const g = this.desiredSize;
      this.desiredSize -= c, g > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: s,
        targetName: i,
        stream: ut.ENQUEUE,
        streamId: e,
        chunk: h
      }, f);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: ut.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(h) {
      ft(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: ut.ERROR,
        streamId: e,
        reason: Qt(h)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, Promise.try(o, t.data, l).then(function() {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: ut.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(h) {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: ut.START_COMPLETE,
      streamId: e,
      reason: Qt(h)
    });
  });
}, cd = new WeakSet(), lg = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case ut.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Qt(t.reason));
      break;
    case ut.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Qt(t.reason));
      break;
    case ut.PULL:
      if (!o) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: ut.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || cp).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: ut.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: ut.PULL_COMPLETE,
          streamId: e,
          reason: Qt(h)
        });
      });
      break;
    case ut.ENQUEUE:
      if (ft(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case ut.CLOSE:
      if (ft(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), b(this, jr, Zh).call(this, a, e);
      break;
    case ut.ERROR:
      ft(a, "error should have stream controller"), a.controller.error(Qt(t.reason)), b(this, jr, Zh).call(this, a, e);
      break;
    case ut.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Qt(t.reason)), b(this, jr, Zh).call(this, a, e);
      break;
    case ut.CANCEL:
      if (!o)
        break;
      const l = Qt(t.reason);
      Promise.try(o.onCancel || cp, l).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: ut.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: ut.CANCEL_COMPLETE,
          streamId: e,
          reason: Qt(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, jr = new WeakSet(), Zh = async function(t, e) {
  var s, i, r;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
var fl;
class hg {
  constructor({
    enableHWA: t = !1
  }) {
    u(this, fl, !1);
    p(this, fl, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !n(this, fl)
      })
    };
  }
  reset(t, e, s) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = s;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    Q("Abstract method `_createCanvas` called.");
  }
}
fl = new WeakMap();
class Zm extends hg {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
}
class cg {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then((s) => ({
      cMapData: s,
      isCompressed: this.isCompressed
    })).catch((s) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    Q("Abstract method `_fetch` called.");
  }
}
class dg extends cg {
  async _fetch(t) {
    const e = await mu(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : gu(e);
  }
}
class ug {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, i, r) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var dn, Wr, Cs, Ts, Nt, un, fn, wt, It, pn, lo, li, dr, Xr, tc, hi, ur, dd, fg, pl, Qu, ci, fr, gn, ho, mn, co, gl, Ju, bn, uo;
class tb extends ug {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    u(this, wt);
    u(this, pn);
    u(this, li);
    u(this, Xr);
    u(this, hi);
    u(this, dd);
    u(this, pl);
    u(this, ci);
    u(this, gn);
    u(this, mn);
    u(this, gl);
    u(this, bn);
    u(this, dn, void 0);
    u(this, Wr, void 0);
    u(this, Cs, void 0);
    u(this, Ts, void 0);
    u(this, Nt, void 0);
    u(this, un, void 0);
    u(this, fn, 0);
    p(this, Ts, e), p(this, Nt, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = n(this, wt, It).get(e);
    if (s)
      return s;
    const [i, r, a] = b(this, Xr, tc).call(this, e), o = e.length === 1 ? i : `${i}${r}${a}`;
    if (s = n(this, wt, It).get(o), s)
      return n(this, wt, It).set(e, s), s;
    const l = `g_${n(this, Ts)}_transfer_map_${zt(this, fn)._++}`, h = b(this, hi, ur).call(this, l);
    n(this, wt, It).set(e, h), n(this, wt, It).set(o, h);
    const c = b(this, ci, fr).call(this, l);
    return b(this, mn, co).call(this, i, r, a, c), h;
  }
  addHCMFilter(e, s) {
    var A;
    const i = `${e}-${s}`, r = "base";
    let a = n(this, pn, lo).get(r);
    if ((a == null ? void 0 : a.key) === i || (a ? ((A = a.filter) == null || A.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, n(this, pn, lo).set(r, a)), !e || !s))
      return a.url;
    const o = b(this, bn, uo).call(this, e);
    e = I.makeHexColor(...o);
    const l = b(this, bn, uo).call(this, s);
    if (s = I.makeHexColor(...l), n(this, li, dr).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const h = new Array(256);
    for (let y = 0; y <= 255; y++) {
      const w = y / 255;
      h[y] = w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
    }
    const c = h.join(","), f = `g_${n(this, Ts)}_hcm_filter`, g = a.filter = b(this, ci, fr).call(this, f);
    b(this, mn, co).call(this, c, c, c, g), b(this, pl, Qu).call(this, g);
    const m = (y, w) => {
      const _ = o[y] / 255, v = l[y] / 255, E = new Array(w + 1);
      for (let S = 0; S <= w; S++)
        E[S] = _ + S / w * (v - _);
      return E.join(",");
    };
    return b(this, mn, co).call(this, m(0, 5), m(1, 5), m(2, 5), g), a.url = b(this, hi, ur).call(this, f), a.url;
  }
  addAlphaFilter(e) {
    let s = n(this, wt, It).get(e);
    if (s)
      return s;
    const [i] = b(this, Xr, tc).call(this, [e]), r = `alpha_${i}`;
    if (s = n(this, wt, It).get(r), s)
      return n(this, wt, It).set(e, s), s;
    const a = `g_${n(this, Ts)}_alpha_map_${zt(this, fn)._++}`, o = b(this, hi, ur).call(this, a);
    n(this, wt, It).set(e, o), n(this, wt, It).set(r, o);
    const l = b(this, ci, fr).call(this, a);
    return b(this, gl, Ju).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = n(this, wt, It).get(e || "luminosity");
    if (s)
      return s;
    let i, r;
    if (e ? ([i] = b(this, Xr, tc).call(this, [e]), r = `luminosity_${i}`) : r = "luminosity", s = n(this, wt, It).get(r), s)
      return n(this, wt, It).set(e, s), s;
    const a = `g_${n(this, Ts)}_luminosity_map_${zt(this, fn)._++}`, o = b(this, hi, ur).call(this, a);
    n(this, wt, It).set(e, o), n(this, wt, It).set(r, o);
    const l = b(this, ci, fr).call(this, a);
    return b(this, dd, fg).call(this, l), e && b(this, gl, Ju).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, r, a) {
    var v;
    const o = `${s}-${i}-${r}-${a}`;
    let l = n(this, pn, lo).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((v = l.filter) == null || v.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, n(this, pn, lo).set(e, l)), !s || !i))
      return l.url;
    const [h, c] = [s, i].map(b(this, bn, uo).bind(this));
    let f = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), g = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [m, A] = [r, a].map(b(this, bn, uo).bind(this));
    g < f && ([f, g, m, A] = [g, f, A, m]), n(this, li, dr).style.color = "";
    const y = (E, S, x) => {
      const T = new Array(256), C = (g - f) / x, M = E / 255, D = (S - E) / (255 * x);
      let V = 0;
      for (let O = 0; O <= x; O++) {
        const Z = Math.round(f + O * C), lt = M + O * D;
        for (let X = V; X <= Z; X++)
          T[X] = lt;
        V = Z + 1;
      }
      for (let O = V; O < 256; O++)
        T[O] = T[V - 1];
      return T.join(",");
    }, w = `g_${n(this, Ts)}_hcm_${e}_filter`, _ = l.filter = b(this, ci, fr).call(this, w);
    return b(this, pl, Qu).call(this, _), b(this, mn, co).call(this, y(m[0], A[0], 5), y(m[1], A[1], 5), y(m[2], A[2], 5), _), l.url = b(this, hi, ur).call(this, w), l.url;
  }
  destroy(e = !1) {
    var s, i, r, a;
    e && ((s = n(this, un)) != null && s.size) || ((i = n(this, Cs)) == null || i.parentNode.parentNode.remove(), p(this, Cs, null), (r = n(this, Wr)) == null || r.clear(), p(this, Wr, null), (a = n(this, un)) == null || a.clear(), p(this, un, null), p(this, fn, 0));
  }
}
dn = new WeakMap(), Wr = new WeakMap(), Cs = new WeakMap(), Ts = new WeakMap(), Nt = new WeakMap(), un = new WeakMap(), fn = new WeakMap(), wt = new WeakSet(), It = function() {
  return n(this, Wr) || p(this, Wr, /* @__PURE__ */ new Map());
}, pn = new WeakSet(), lo = function() {
  return n(this, un) || p(this, un, /* @__PURE__ */ new Map());
}, li = new WeakSet(), dr = function() {
  if (!n(this, Cs)) {
    const e = n(this, Nt).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = n(this, Nt).createElementNS(ps, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), p(this, Cs, n(this, Nt).createElementNS(ps, "defs")), e.append(i), i.append(n(this, Cs)), n(this, Nt).body.append(e);
  }
  return n(this, Cs);
}, Xr = new WeakSet(), tc = function(e) {
  if (e.length === 1) {
    const h = e[0], c = new Array(256);
    for (let g = 0; g < 256; g++)
      c[g] = h[g] / 255;
    const f = c.join(",");
    return [f, f, f];
  }
  const [s, i, r] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    a[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = r[h] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, hi = new WeakSet(), ur = function(e) {
  if (n(this, dn) === void 0) {
    p(this, dn, "");
    const s = n(this, Nt).URL;
    s !== n(this, Nt).baseURI && (bu(s) ? $('#createUrl: ignore "data:"-URL for performance reasons.') : p(this, dn, s.split("#", 1)[0]));
  }
  return `url(${n(this, dn)}#${e})`;
}, dd = new WeakSet(), fg = function(e) {
  const s = n(this, Nt).createElementNS(ps, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, pl = new WeakSet(), Qu = function(e) {
  const s = n(this, Nt).createElementNS(ps, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, ci = new WeakSet(), fr = function(e) {
  const s = n(this, Nt).createElementNS(ps, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), n(this, li, dr).append(s), s;
}, gn = new WeakSet(), ho = function(e, s, i) {
  const r = n(this, Nt).createElementNS(ps, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
}, mn = new WeakSet(), co = function(e, s, i, r) {
  const a = n(this, Nt).createElementNS(ps, "feComponentTransfer");
  r.append(a), b(this, gn, ho).call(this, a, "feFuncR", e), b(this, gn, ho).call(this, a, "feFuncG", s), b(this, gn, ho).call(this, a, "feFuncB", i);
}, gl = new WeakSet(), Ju = function(e, s) {
  const i = n(this, Nt).createElementNS(ps, "feComponentTransfer");
  s.append(i), b(this, gn, ho).call(this, i, "feFuncA", e);
}, bn = new WeakSet(), uo = function(e) {
  return n(this, li, dr).style.color = e, qf(getComputedStyle(n(this, li, dr)).getPropertyValue("color"));
};
class pg {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    Q("Abstract method `_fetch` called.");
  }
}
class gg extends pg {
  async _fetch(t) {
    const e = await mu(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
$t && $("Please use the `legacy` build in Node.js environments.");
async function mg(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class eb extends ug {
}
class sb extends hg {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class ib extends cg {
  async _fetch(t) {
    return mg(t);
  }
}
class nb extends pg {
  async _fetch(t) {
    return mg(t);
  }
}
const Bt = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Zu(d, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class Kf {
  getPattern() {
    Q("Abstract method `getPattern` called.");
  }
}
class rb extends Kf {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops)
      e.addColorStop(s[0], s[1]);
    return e;
  }
  getPattern(t, e, s, i) {
    let r;
    if (i === Bt.STROKE || i === Bt.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, st(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), c = h.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = I.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), Zu(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), r = t.createPattern(h.canvas, "no-repeat");
      const f = new DOMMatrix(s);
      r.setTransform(f);
    } else
      Zu(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function xu(d, t, e, s, i, r, a, o) {
  const l = t.coords, h = t.colors, c = d.data, f = d.width * 4;
  let g;
  l[e + 1] > l[s + 1] && (g = e, e = s, s = g, g = r, r = a, a = g), l[s + 1] > l[i + 1] && (g = s, s = i, i = g, g = a, a = o, o = g), l[e + 1] > l[s + 1] && (g = e, e = s, s = g, g = r, r = a, a = g);
  const m = (l[e] + t.offsetX) * t.scaleX, A = (l[e + 1] + t.offsetY) * t.scaleY, y = (l[s] + t.offsetX) * t.scaleX, w = (l[s + 1] + t.offsetY) * t.scaleY, _ = (l[i] + t.offsetX) * t.scaleX, v = (l[i + 1] + t.offsetY) * t.scaleY;
  if (A >= v)
    return;
  const E = h[r], S = h[r + 1], x = h[r + 2], T = h[a], C = h[a + 1], M = h[a + 2], D = h[o], V = h[o + 1], O = h[o + 2], Z = Math.round(A), lt = Math.round(v);
  let X, Gt, k, N, ie, je, fs, Ae;
  for (let Mt = Z; Mt <= lt; Mt++) {
    if (Mt < w) {
      const tt = Mt < A ? 0 : (A - Mt) / (A - w);
      X = m - (m - y) * tt, Gt = E - (E - T) * tt, k = S - (S - C) * tt, N = x - (x - M) * tt;
    } else {
      let tt;
      Mt > v ? tt = 1 : w === v ? tt = 0 : tt = (w - Mt) / (w - v), X = y - (y - _) * tt, Gt = T - (T - D) * tt, k = C - (C - V) * tt, N = M - (M - O) * tt;
    }
    let pt;
    Mt < A ? pt = 0 : Mt > v ? pt = 1 : pt = (A - Mt) / (A - v), ie = m - (m - _) * pt, je = E - (E - D) * pt, fs = S - (S - V) * pt, Ae = x - (x - O) * pt;
    const hr = Math.round(Math.min(X, ie)), Ja = Math.round(Math.max(X, ie));
    let Yt = f * Mt + hr * 4;
    for (let tt = hr; tt <= Ja; tt++)
      pt = (X - tt) / (X - ie), pt < 0 ? pt = 0 : pt > 1 && (pt = 1), c[Yt++] = Gt - (Gt - je) * pt | 0, c[Yt++] = k - (k - fs) * pt | 0, c[Yt++] = N - (N - Ae) * pt | 0, c[Yt++] = 255;
  }
}
function ab(d, t, e) {
  const s = t.coords, i = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (r = 0; r < l; r++) {
        let c = r * o;
        for (let f = 0; f < h; f++, c++)
          xu(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), xu(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (r = 0, a = s.length; r < a; r += 3)
        xu(d, e, s[r], s[r + 1], s[r + 2], i[r], i[r + 1], i[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class ob extends Kf {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - l, f = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), g = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), m = h / f, A = c / g, y = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / m,
      scaleY: 1 / A
    }, w = f + 2 * 2, _ = g + 2 * 2, v = s.getCanvas("mesh", w, _), E = v.context, S = E.createImageData(f, g);
    if (e) {
      const T = S.data;
      for (let C = 0, M = T.length; C < M; C += 4)
        T[C] = e[0], T[C + 1] = e[1], T[C + 2] = e[2], T[C + 3] = 255;
    }
    for (const T of this._figures)
      ab(S, T, y);
    return E.putImageData(S, 2, 2), {
      canvas: v.canvas,
      offsetX: o - 2 * m,
      offsetY: l - 2 * A,
      scaleX: m,
      scaleY: A
    };
  }
  getPattern(t, e, s, i) {
    Zu(t, this._bbox);
    let r;
    if (i === Bt.SHADING)
      r = I.singularValueDecompose2dScale(st(t));
    else if (r = I.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const o = I.singularValueDecompose2dScale(this.matrix);
      r = [r[0] * o[0], r[1] * o[1]];
    }
    const a = this._createMeshCanvas(r, i === Bt.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Bt.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class lb extends Kf {
  getPattern() {
    return "hotpink";
  }
}
function hb(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new rb(d);
    case "Mesh":
      return new ob(d);
    case "Dummy":
      return new lb();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const dp = {
  COLORED: 1,
  UNCOLORED: 2
}, ud = class ud {
  constructor(t, e, s, i, r) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = r;
  }
  createPatternCanvas(t) {
    const {
      bbox: e,
      operatorList: s,
      paintType: i,
      tilingType: r,
      color: a,
      canvasGraphicsFactory: o
    } = this;
    let {
      xstep: l,
      ystep: h
    } = this;
    l = Math.abs(l), h = Math.abs(h), pu("TilingType: " + r);
    const c = e[0], f = e[1], g = e[2], m = e[3], A = g - c, y = m - f, w = I.singularValueDecompose2dScale(this.matrix), _ = I.singularValueDecompose2dScale(this.baseTransform), v = w[0] * _[0], E = w[1] * _[1];
    let S = A, x = y, T = !1, C = !1;
    const M = Math.ceil(l * v), D = Math.ceil(h * E), V = Math.ceil(A * v), O = Math.ceil(y * E);
    M >= V ? S = l : T = !0, D >= O ? x = h : C = !0;
    const Z = this.getSizeAndScale(S, this.ctx.canvas.width, v), lt = this.getSizeAndScale(x, this.ctx.canvas.height, E), X = t.cachedCanvases.getCanvas("pattern", Z.size, lt.size), Gt = X.context, k = o.createCanvasGraphics(Gt);
    if (k.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(k, i, a), Gt.translate(-Z.scale * c, -lt.scale * f), k.transform(Z.scale, 0, 0, lt.scale, 0, 0), Gt.save(), this.clipBbox(k, c, f, g, m), k.baseTransform = st(k.ctx), k.executeOperatorList(s), k.endDrawing(), Gt.restore(), T || C) {
      const N = X.canvas;
      T && (S = l), C && (x = h);
      const ie = this.getSizeAndScale(S, this.ctx.canvas.width, v), je = this.getSizeAndScale(x, this.ctx.canvas.height, E), fs = ie.size, Ae = je.size, Mt = t.cachedCanvases.getCanvas("pattern-workaround", fs, Ae), pt = Mt.context, hr = T ? Math.floor(A / l) : 0, Ja = C ? Math.floor(y / h) : 0;
      for (let Yt = 0; Yt <= hr; Yt++)
        for (let tt = 0; tt <= Ja; tt++)
          pt.drawImage(N, fs * Yt, Ae * tt, fs, Ae, 0, 0, fs, Ae);
      return {
        canvas: Mt.canvas,
        scaleX: ie.scale,
        scaleY: je.scale,
        offsetX: c,
        offsetY: f
      };
    }
    return {
      canvas: X.canvas,
      scaleX: Z.scale,
      scaleY: lt.scale,
      offsetX: c,
      offsetY: f
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(ud.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * s);
    return r >= i ? r = i : s = r / t, {
      scale: s,
      size: r
    };
  }
  clipBbox(t, e, s, i, r) {
    const a = i - e, o = r - s;
    t.ctx.rect(e, s, a, o), t.current.updateRectMinMax(st(t.ctx), [e, s, i, r]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, r = t.current;
    switch (e) {
      case dp.COLORED:
        const a = this.ctx;
        i.fillStyle = a.fillStyle, i.strokeStyle = a.strokeStyle, r.fillColor = a.fillStyle, r.strokeColor = a.strokeStyle;
        break;
      case dp.UNCOLORED:
        const o = I.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = o, i.strokeStyle = o, r.fillColor = o, r.strokeColor = o;
        break;
      default:
        throw new Fm(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, s, i) {
    let r = s;
    i !== Bt.SHADING && (r = I.transform(r, e.baseTransform), this.matrix && (r = I.transform(r, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(r);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const l = t.createPattern(a.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
F(ud, "MAX_PATTERN_SIZE", 3e3);
let tf = ud;
function cb({
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = qt.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [r, o] : [o, r], c = s >> 3, f = s & 7, g = d.length;
  e = new Uint32Array(e.buffer);
  let m = 0;
  for (let A = 0; A < i; A++) {
    for (const w = t + c; t < w; t++) {
      const _ = t < g ? d[t] : 255;
      e[m++] = _ & 128 ? h : l, e[m++] = _ & 64 ? h : l, e[m++] = _ & 32 ? h : l, e[m++] = _ & 16 ? h : l, e[m++] = _ & 8 ? h : l, e[m++] = _ & 4 ? h : l, e[m++] = _ & 2 ? h : l, e[m++] = _ & 1 ? h : l;
    }
    if (f === 0)
      continue;
    const y = t < g ? d[t++] : 255;
    for (let w = 0; w < f; w++)
      e[m++] = y & 1 << 7 - w ? h : l;
  }
  return {
    srcPos: t,
    destPos: m
  };
}
const up = 16, fp = 100, db = 15, pp = 10, gp = 1e3, se = 16;
function ub(d, t) {
  if (d._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  d.__originalSave = d.save, d.__originalRestore = d.restore, d.__originalRotate = d.rotate, d.__originalScale = d.scale, d.__originalTranslate = d.translate, d.__originalTransform = d.transform, d.__originalSetTransform = d.setTransform, d.__originalResetTransform = d.resetTransform, d.__originalClip = d.clip, d.__originalMoveTo = d.moveTo, d.__originalLineTo = d.lineTo, d.__originalBezierCurveTo = d.bezierCurveTo, d.__originalRect = d.rect, d.__originalClosePath = d.closePath, d.__originalBeginPath = d.beginPath, d._removeMirroring = () => {
    d.save = d.__originalSave, d.restore = d.__originalRestore, d.rotate = d.__originalRotate, d.scale = d.__originalScale, d.translate = d.__originalTranslate, d.transform = d.__originalTransform, d.setTransform = d.__originalSetTransform, d.resetTransform = d.__originalResetTransform, d.clip = d.__originalClip, d.moveTo = d.__originalMoveTo, d.lineTo = d.__originalLineTo, d.bezierCurveTo = d.__originalBezierCurveTo, d.rect = d.__originalRect, d.closePath = d.__originalClosePath, d.beginPath = d.__originalBeginPath, delete d._removeMirroring;
  }, d.save = function() {
    t.save(), this.__originalSave();
  }, d.restore = function() {
    t.restore(), this.__originalRestore();
  }, d.translate = function(s, i) {
    t.translate(s, i), this.__originalTranslate(s, i);
  }, d.scale = function(s, i) {
    t.scale(s, i), this.__originalScale(s, i);
  }, d.transform = function(s, i, r, a, o, l) {
    t.transform(s, i, r, a, o, l), this.__originalTransform(s, i, r, a, o, l);
  }, d.setTransform = function(s, i, r, a, o, l) {
    t.setTransform(s, i, r, a, o, l), this.__originalSetTransform(s, i, r, a, o, l);
  }, d.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, d.rotate = function(s) {
    t.rotate(s), this.__originalRotate(s);
  }, d.clip = function(s) {
    t.clip(s), this.__originalClip(s);
  }, d.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, d.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, d.bezierCurveTo = function(e, s, i, r, a, o) {
    t.bezierCurveTo(e, s, i, r, a, o), this.__originalBezierCurveTo(e, s, i, r, a, o);
  }, d.rect = function(e, s, i, r) {
    t.rect(e, s, i, r), this.__originalRect(e, s, i, r);
  }, d.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, d.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class fb {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, s) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Gh(d, t, e, s, i, r, a, o, l, h) {
  const [c, f, g, m, A, y] = st(d);
  if (f === 0 && g === 0) {
    const v = a * c + A, E = Math.round(v), S = o * m + y, x = Math.round(S), T = (a + l) * c + A, C = Math.abs(Math.round(T) - E) || 1, M = (o + h) * m + y, D = Math.abs(Math.round(M) - x) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(m), E, x), d.drawImage(t, e, s, i, r, 0, 0, C, D), d.setTransform(c, f, g, m, A, y), [C, D];
  }
  if (c === 0 && m === 0) {
    const v = o * g + A, E = Math.round(v), S = a * f + y, x = Math.round(S), T = (o + h) * g + A, C = Math.abs(Math.round(T) - E) || 1, M = (a + l) * f + y, D = Math.abs(Math.round(M) - x) || 1;
    return d.setTransform(0, Math.sign(f), Math.sign(g), 0, E, x), d.drawImage(t, e, s, i, r, 0, 0, D, C), d.setTransform(c, f, g, m, A, y), [D, C];
  }
  d.drawImage(t, e, s, i, r, a, o, l, h);
  const w = Math.hypot(c, f), _ = Math.hypot(g, m);
  return [w * l, _ * h];
}
function pb(d) {
  const {
    width: t,
    height: e
  } = d;
  if (t > gp || e > gp)
    return null;
  const s = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), r = t + 1;
  let a = new Uint8Array(r * (e + 1)), o, l, h;
  const c = t + 7 & -8;
  let f = new Uint8Array(c * e), g = 0;
  for (const _ of d.data) {
    let v = 128;
    for (; v > 0; )
      f[g++] = _ & v ? 0 : 255, v >>= 1;
  }
  let m = 0;
  for (g = 0, f[g] !== 0 && (a[0] = 1, ++m), l = 1; l < t; l++)
    f[g] !== f[g + 1] && (a[l] = f[g] ? 2 : 1, ++m), g++;
  for (f[g] !== 0 && (a[l] = 2, ++m), o = 1; o < e; o++) {
    g = o * c, h = o * r, f[g - c] !== f[g] && (a[h] = f[g] ? 1 : 8, ++m);
    let _ = (f[g] ? 4 : 0) + (f[g - c] ? 8 : 0);
    for (l = 1; l < t; l++)
      _ = (_ >> 2) + (f[g + 1] ? 4 : 0) + (f[g - c + 1] ? 8 : 0), i[_] && (a[h + l] = i[_], ++m), g++;
    if (f[g - c] !== f[g] && (a[h + l] = f[g] ? 2 : 4, ++m), m > s)
      return null;
  }
  for (g = c * (e - 1), h = o * r, f[g] !== 0 && (a[h] = 8, ++m), l = 1; l < t; l++)
    f[g] !== f[g + 1] && (a[h + l] = f[g] ? 4 : 8, ++m), g++;
  if (f[g] !== 0 && (a[h + l] = 4, ++m), m > s)
    return null;
  const A = new Int32Array([0, r, -1, 0, -r, 0, 0, 0, 1]), y = new Path2D();
  for (o = 0; m && o <= e; o++) {
    let _ = o * r;
    const v = _ + t;
    for (; _ < v && !a[_]; )
      _++;
    if (_ === v)
      continue;
    y.moveTo(_ % r, o);
    const E = _;
    let S = a[_];
    do {
      const x = A[S];
      do
        _ += x;
      while (!a[_]);
      const T = a[_];
      T !== 5 && T !== 10 ? (S = T, a[_] = 0) : (S = T & 51 * S >> 4, a[_] &= S >> 2 | S << 2), y.lineTo(_ % r, _ / r | 0), a[_] || --m;
    } while (E !== _);
    --o;
  }
  return f = null, a = null, function(_) {
    _.save(), _.scale(1 / t, -1 / e), _.translate(0, -e), _.fill(y), _.beginPath(), _.restore();
  };
}
class mp {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = Cp, this.textMatrixScale = 1, this.fontMatrix = Pu, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = Lt.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.patternStroke = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, s) {
    [e, s] = I.applyTransform([e, s], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, s);
  }
  updateRectMinMax(t, e) {
    const s = I.applyTransform(e, t), i = I.applyTransform(e.slice(2), t), r = I.applyTransform([e[0], e[3]], t), a = I.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, s[0], i[0], r[0], a[0]), this.minY = Math.min(this.minY, s[1], i[1], r[1], a[1]), this.maxX = Math.max(this.maxX, s[0], i[0], r[0], a[0]), this.maxY = Math.max(this.maxY, s[1], i[1], r[1], a[1]);
  }
  updateScalingPathMinMax(t, e) {
    I.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, s, i, r, a, o, l, h, c) {
    const f = I.bezierBoundingBox(e, s, i, r, a, o, l, h, c);
    c || this.updateRectMinMax(t, f);
  }
  getPathBoundingBox(t = Bt.FILL, e = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === Bt.STROKE) {
      e || Q("Stroke bounding box must include transform.");
      const i = I.singularValueDecompose2dScale(e), r = i[0] * this.lineWidth / 2, a = i[1] * this.lineWidth / 2;
      s[0] -= r, s[1] -= a, s[2] += r, s[3] += a;
    }
    return s;
  }
  updateClipFromPath() {
    const t = I.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = Bt.FILL, e = null) {
    return I.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function bp(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % se, r = (e - i) / se, a = i === 0 ? r : r + 1, o = d.createImageData(s, se);
  let l = 0, h;
  const c = t.data, f = o.data;
  let g, m, A, y;
  if (t.kind === Vh.GRAYSCALE_1BPP) {
    const w = c.byteLength, _ = new Uint32Array(f.buffer, 0, f.byteLength >> 2), v = _.length, E = s + 7 >> 3, S = 4294967295, x = qt.isLittleEndian ? 4278190080 : 255;
    for (g = 0; g < a; g++) {
      for (A = g < r ? se : i, h = 0, m = 0; m < A; m++) {
        const T = w - l;
        let C = 0;
        const M = T > E ? s : T * 8 - 7, D = M & -8;
        let V = 0, O = 0;
        for (; C < D; C += 8)
          O = c[l++], _[h++] = O & 128 ? S : x, _[h++] = O & 64 ? S : x, _[h++] = O & 32 ? S : x, _[h++] = O & 16 ? S : x, _[h++] = O & 8 ? S : x, _[h++] = O & 4 ? S : x, _[h++] = O & 2 ? S : x, _[h++] = O & 1 ? S : x;
        for (; C < M; C++)
          V === 0 && (O = c[l++], V = 128), _[h++] = O & V ? S : x, V >>= 1;
      }
      for (; h < v; )
        _[h++] = 0;
      d.putImageData(o, 0, g * se);
    }
  } else if (t.kind === Vh.RGBA_32BPP) {
    for (m = 0, y = s * se * 4, g = 0; g < r; g++)
      f.set(c.subarray(l, l + y)), l += y, d.putImageData(o, 0, m), m += se;
    g < a && (y = s * i * 4, f.set(c.subarray(l, l + y)), d.putImageData(o, 0, m));
  } else if (t.kind === Vh.RGB_24BPP)
    for (A = se, y = s * A, g = 0; g < a; g++) {
      for (g >= r && (A = i, y = s * A), h = 0, m = y; m--; )
        f[h++] = c[l++], f[h++] = c[l++], f[h++] = c[l++], f[h++] = 255;
      d.putImageData(o, 0, g * se);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Ap(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % se, r = (e - i) / se, a = i === 0 ? r : r + 1, o = d.createImageData(s, se);
  let l = 0;
  const h = t.data, c = o.data;
  for (let f = 0; f < a; f++) {
    const g = f < r ? se : i;
    ({
      srcPos: l
    } = cb({
      src: h,
      srcPos: l,
      dest: c,
      width: s,
      height: g,
      nonBlackColor: 0
    })), d.putImageData(o, 0, f * se);
  }
}
function to(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function zh(d) {
  if (d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0), !$t) {
    const {
      filter: t
    } = d;
    t !== "none" && t !== "" && (d.filter = "none");
  }
}
function yp(d, t) {
  if (t)
    return !0;
  const e = I.singularValueDecompose2dScale(d);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * Di.PDF_TO_CSS_UNITS);
  return e[0] <= s && e[1] <= s;
}
const gb = ["butt", "round", "square"], mb = ["miter", "round", "bevel"], bb = {}, _p = {};
var ml, ef, bl, sf, Al, nf;
const ep = class ep {
  constructor(t, e, s, i, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h) {
    u(this, ml);
    u(this, bl);
    u(this, Al);
    this.ctx = t, this.current = new mp(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new fb(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: i = null
  }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, s) {
      const l = this.cachedCanvases.getCanvas("transparent", r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...st(this.compositeCtx));
    }
    this.ctx.save(), zh(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = st(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const r = t.argsArray, a = t.fnArray;
    let o = e || 0;
    const l = r.length;
    if (l === o)
      return o;
    const h = l - o > pp && typeof s == "function", c = h ? Date.now() + db : 0;
    let f = 0;
    const g = this.commonObjs, m = this.objs;
    let A;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (A = a[o], A !== Re.dependency)
        this[A].apply(this, r[o]);
      else
        for (const y of r[o]) {
          const w = y.startsWith("g_") ? g : m;
          if (!w.has(y))
            return w.get(y, s), o;
        }
      if (o++, o === l)
        return o;
      if (h && ++f > pp) {
        if (Date.now() > c)
          return s(), o;
        f = 0;
      }
    }
  }
  endDrawing() {
    b(this, ml, ef).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, bl, sf).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", c, f;
    for (; r > 2 && o > 1 || a > 2 && l > 1; ) {
      let g = o, m = l;
      r > 2 && o > 1 && (g = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / g), a > 2 && l > 1 && (m = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / m), c = this.cachedCanvases.getCanvas(h, g, m), f = c.context, f.clearRect(0, 0, g, m), f.drawImage(t, 0, 0, o, l, 0, 0, g, m), t = c.canvas, o = g, l = m, h = h === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l
    };
  }
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: s,
      height: i
    } = t, r = this.current.fillColor, a = this.current.patternFill, o = st(e);
    let l, h, c, f;
    if ((t.bitmap || t.data) && t.count > 1) {
      const M = t.bitmap || t.data.buffer;
      h = JSON.stringify(a ? o : [o.slice(0, 4), r]), l = this._cachedBitmapsMap.get(M), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(M, l));
      const D = l.get(h);
      if (D && !a) {
        const V = Math.round(Math.min(o[0], o[2]) + o[4]), O = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: D,
          offsetX: V,
          offsetY: O
        };
      }
      c = D;
    }
    c || (f = this.cachedCanvases.getCanvas("maskCanvas", s, i), Ap(f.context, t));
    let g = I.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    g = I.transform(g, [1, 0, 0, 1, 0, -i]);
    const [m, A, y, w] = I.getAxialAlignedBoundingBox([0, 0, s, i], g), _ = Math.round(y - m) || 1, v = Math.round(w - A) || 1, E = this.cachedCanvases.getCanvas("fillCanvas", _, v), S = E.context, x = m, T = A;
    S.translate(-x, -T), S.transform(...g), c || (c = this._scaleImage(f.canvas, We(S)), c = c.img, l && a && l.set(h, c)), S.imageSmoothingEnabled = yp(st(S), t.interpolate), Gh(S, c, 0, 0, c.width, c.height, 0, 0, s, i), S.globalCompositeOperation = "source-in";
    const C = I.transform(We(S), [1, 0, 0, 1, -x, -T]);
    return S.fillStyle = a ? r.getPattern(e, this, C, Bt.FILL) : r, S.fillRect(0, 0, s, i), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, E.canvas)), {
      canvas: E.canvas,
      offsetX: Math.round(x),
      offsetY: Math.round(T)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = gb[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = mb[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(t), s.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, s] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(s);
          break;
        case "LC":
          this.setLineCap(s);
          break;
        case "LJ":
          this.setLineJoin(s);
          break;
        case "ML":
          this.setMiterLimit(s);
          break;
        case "D":
          this.setDash(s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(s);
          break;
        case "FL":
          this.setFlatness(s);
          break;
        case "Font":
          this.setFont(s[0], s[1]);
          break;
        case "CA":
          this.current.strokeAlpha = s;
          break;
        case "ca":
          this.current.fillAlpha = s, this.ctx.globalAlpha = s;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, t, e);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const r = this.ctx;
    r.setTransform(...st(this.suspendedCtx)), to(this.suspendedCtx, r), ub(r, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), to(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const r = i[0], a = i[1], o = i[2] - r, l = i[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, s, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, i, r, a, o, l, h, c, f) {
    let g = t.canvas, m = l - c, A = h - f;
    if (a) {
      const w = I.makeHexColor(...a);
      if (m < 0 || A < 0 || m + s > g.width || A + i > g.height) {
        const _ = this.cachedCanvases.getCanvas("maskExtension", s, i), v = _.context;
        v.drawImage(g, -m, -A), v.globalCompositeOperation = "destination-atop", v.fillStyle = w, v.fillRect(0, 0, s, i), v.globalCompositeOperation = "source-over", g = _.canvas, m = A = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const _ = new Path2D();
        _.rect(m, A, s, i), t.clip(_), t.globalCompositeOperation = "destination-atop", t.fillStyle = w, t.fillRect(m, A, s, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const y = new Path2D();
    y.rect(l, h, s, i), e.clip(y), e.globalCompositeOperation = "destination-in", e.drawImage(g, m, A, s, i, l, h, s, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (to(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), to(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, s, i, r, a) {
    this.ctx.transform(t, e, s, i, r, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s) {
    const i = this.ctx, r = this.current;
    let a = r.x, o = r.y, l, h;
    const c = st(i), f = c[0] === 0 && c[3] === 0 || c[1] === 0 && c[2] === 0, g = f ? s.slice(0) : null;
    for (let m = 0, A = 0, y = t.length; m < y; m++)
      switch (t[m] | 0) {
        case Re.rectangle:
          a = e[A++], o = e[A++];
          const w = e[A++], _ = e[A++], v = a + w, E = o + _;
          i.moveTo(a, o), w === 0 || _ === 0 ? i.lineTo(v, E) : (i.lineTo(v, o), i.lineTo(v, E), i.lineTo(a, E)), f || r.updateRectMinMax(c, [a, o, v, E]), i.closePath();
          break;
        case Re.moveTo:
          a = e[A++], o = e[A++], i.moveTo(a, o), f || r.updatePathMinMax(c, a, o);
          break;
        case Re.lineTo:
          a = e[A++], o = e[A++], i.lineTo(a, o), f || r.updatePathMinMax(c, a, o);
          break;
        case Re.curveTo:
          l = a, h = o, a = e[A + 4], o = e[A + 5], i.bezierCurveTo(e[A], e[A + 1], e[A + 2], e[A + 3], a, o), r.updateCurvePathMinMax(c, l, h, e[A], e[A + 1], e[A + 2], e[A + 3], a, o, g), A += 6;
          break;
        case Re.curveTo2:
          l = a, h = o, i.bezierCurveTo(a, o, e[A], e[A + 1], e[A + 2], e[A + 3]), r.updateCurvePathMinMax(c, l, h, a, o, e[A], e[A + 1], e[A + 2], e[A + 3], g), a = e[A + 2], o = e[A + 3], A += 4;
          break;
        case Re.curveTo3:
          l = a, h = o, a = e[A + 2], o = e[A + 3], i.bezierCurveTo(e[A], e[A + 1], a, o, a, o), r.updateCurvePathMinMax(c, l, h, e[A], e[A + 1], a, o, a, o, g), A += 4;
          break;
        case Re.closePath:
          i.closePath();
          break;
      }
    f && r.updateScalingPathMinMax(c, g), r.setCurrentPoint(a, o);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, s = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s != null && s.getPattern) ? (e.save(), e.strokeStyle = s.getPattern(e, this, We(e), Bt.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    let r = !1;
    i && (e.save(), e.fillStyle = s.getPattern(e, this, We(e), Bt.FILL), r = !0);
    const a = this.current.getClippedPathBoundingBox();
    this.contentVisible && a !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), r && e.restore(), t && this.consumePath(a);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = bb;
  }
  eoClip() {
    this.pendingClip = _p;
  }
  beginText() {
    this.current.textMatrix = Cp, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    const s = new Path2D(), i = e.getTransform().invertSelf();
    for (const {
      transform: r,
      x: a,
      y: o,
      fontSize: l,
      path: h
    } of t)
      s.addPath(h, new DOMMatrix(r).preMultiplySelf(i).translate(a, o).scale(l, -l));
    e.clip(s), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    var c;
    const s = this.commonObjs.get(t), i = this.current;
    if (!s)
      throw new Error(`Can't find font for ${t}`);
    if (i.fontMatrix = s.fontMatrix || Pu, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && $("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const r = s.loadedName || "sans-serif", a = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${r}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const l = s.italic ? "italic" : "normal";
    let h = e;
    e < up ? h = up : e > fp && (h = fp), this.current.fontSizeScale = e / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t, e, s, i, r, a) {
    this.current.textMatrix = [t, e, s, i, r, a], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, s, i, r) {
    const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, f = h & Lt.FILL_STROKE_MASK, g = !!(h & Lt.ADD_TO_PATH_FLAG), m = o.patternFill && !l.missingFile, A = o.patternStroke && !l.missingFile;
    let y;
    if ((l.disableFontFace || g || m || A) && (y = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || m || A) {
      if (a.save(), a.translate(e, s), a.scale(c, -c), f === Lt.FILL || f === Lt.FILL_STROKE)
        if (i) {
          const w = a.getTransform();
          a.setTransform(...i), a.fill(b(this, Al, nf).call(this, y, w, i));
        } else
          a.fill(y);
      if (f === Lt.STROKE || f === Lt.FILL_STROKE)
        if (r) {
          const w = a.getTransform();
          a.setTransform(...r), a.stroke(b(this, Al, nf).call(this, y, w, r));
        } else
          a.lineWidth /= c, a.stroke(y);
      a.restore();
    } else
      (f === Lt.FILL || f === Lt.FILL_STROKE) && a.fillText(t, e, s), (f === Lt.STROKE || f === Lt.FILL_STROKE) && a.strokeText(t, e, s);
    g && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: st(a),
      x: e,
      y: s,
      fontSize: c,
      path: y
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        s = !0;
        break;
      }
    return U(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t) {
    const e = this.current, s = e.font;
    if (s.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const r = this.ctx, a = e.fontSizeScale, o = e.charSpacing, l = e.wordSpacing, h = e.fontDirection, c = e.textHScale * h, f = t.length, g = s.vertical, m = g ? 1 : -1, A = s.defaultVMetrics, y = i * e.fontMatrix[0], w = e.textRenderingMode === Lt.FILL && !s.disableFontFace && !e.patternFill;
    r.save(), r.transform(...e.textMatrix), r.translate(e.x, e.y + e.textRise), h > 0 ? r.scale(c, -1) : r.scale(c, 1);
    let _, v;
    if (e.patternFill) {
      r.save();
      const C = e.fillColor.getPattern(r, this, We(r), Bt.FILL);
      _ = st(r), r.restore(), r.fillStyle = C;
    }
    if (e.patternStroke) {
      r.save();
      const C = e.strokeColor.getPattern(r, this, We(r), Bt.STROKE);
      v = st(r), r.restore(), r.strokeStyle = C;
    }
    let E = e.lineWidth;
    const S = e.textMatrixScale;
    if (S === 0 || E === 0) {
      const C = e.textRenderingMode & Lt.FILL_STROKE_MASK;
      (C === Lt.STROKE || C === Lt.FILL_STROKE) && (E = this.getSinglePixelWidth());
    } else
      E /= S;
    if (a !== 1 && (r.scale(a, a), E /= a), r.lineWidth = E, s.isInvalidPDFjsFont) {
      const C = [];
      let M = 0;
      for (const D of t)
        C.push(D.unicode), M += D.width;
      r.fillText(C.join(""), 0, 0), e.x += M * y * c, r.restore(), this.compose();
      return;
    }
    let x = 0, T;
    for (T = 0; T < f; ++T) {
      const C = t[T];
      if (typeof C == "number") {
        x += m * C * i / 1e3;
        continue;
      }
      let M = !1;
      const D = (C.isSpace ? l : 0) + o, V = C.fontChar, O = C.accent;
      let Z, lt, X = C.width;
      if (g) {
        const k = C.vmetric || A, N = -(C.vmetric ? k[1] : X * 0.5) * y, ie = k[2] * y;
        X = k ? -k[0] : X, Z = N / a, lt = (x + ie) / a;
      } else
        Z = x / a, lt = 0;
      if (s.remeasure && X > 0) {
        const k = r.measureText(V).width * 1e3 / i * a;
        if (X < k && this.isFontSubpixelAAEnabled) {
          const N = X / k;
          M = !0, r.save(), r.scale(N, 1), Z /= N;
        } else
          X !== k && (Z += (X - k) / 2e3 * i / a);
      }
      if (this.contentVisible && (C.isInFont || s.missingFile)) {
        if (w && !O)
          r.fillText(V, Z, lt);
        else if (this.paintChar(V, Z, lt, _, v), O) {
          const k = Z + i * O.offset.x / a, N = lt - i * O.offset.y / a;
          this.paintChar(O.fontChar, k, N, _, v);
        }
      }
      const Gt = g ? X * y - D * h : X * y + D * h;
      x += Gt, M && r.restore();
    }
    g ? e.y -= x : e.x += x * c, r.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, r = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, f = s.fontMatrix || Pu, g = t.length, m = s.textRenderingMode === Lt.INVISIBLE;
    let A, y, w, _;
    if (!(m || r === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(c, a), A = 0; A < g; ++A) {
        if (y = t[A], typeof y == "number") {
          _ = o * y * r / 1e3, this.ctx.translate(_, 0), s.x += _ * c;
          continue;
        }
        const v = (y.isSpace ? h : 0) + l, E = i.charProcOperatorList[y.operatorListId];
        if (!E) {
          $(`Type3 character "${y.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = y, this.save(), e.scale(r, r), e.transform(...f), this.executeOperatorList(E), this.restore()), w = I.applyTransform([y.width, 0], f)[0] * r + v, e.translate(w, 0), s.x += w * c;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, s, i, r, a) {
    this.ctx.rect(s, i, r - s, a - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const s = t[1], i = this.baseTransform || st(this.ctx), r = {
        createCanvasGraphics: (a) => new ep(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new tf(t, s, this.ctx, r, i);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments), this.current.patternStroke = !0;
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e, s) {
    this.ctx.strokeStyle = this.current.strokeColor = I.makeHexColor(t, e, s), this.current.patternStroke = !1;
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e, s) {
    this.ctx.fillStyle = this.current.fillColor = I.makeHexColor(t, e, s), this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let s;
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = hb(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, We(e), Bt.SHADING);
    const i = We(e);
    if (i) {
      const {
        width: r,
        height: a
      } = e.canvas, [o, l, h, c] = I.getAxialAlignedBoundingBox([0, 0, r, a], i);
      this.ctx.fillRect(o, l, h - o, c - l);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    Q("Should not call beginInlineImage");
  }
  beginImageData() {
    Q("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = st(this.ctx), e)) {
      const s = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(st(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || pu("TODO: Support non-isolated groups."), t.knockout && $("Knockout groups not supported.");
    const s = st(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = I.getAxialAlignedBoundingBox(t.bbox, st(e));
    const r = [0, 0, e.canvas.width, e.canvas.height];
    i = I.intersect(i, r) || [0, 0, 0, 0];
    const a = Math.floor(i[0]), o = Math.floor(i[1]), l = Math.max(Math.ceil(i[2]) - a, 1), h = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, l, h]);
    let c = "groupAt" + this.groupLevel;
    t.smask && (c += "_smask_" + this.smaskCounter++ % 2);
    const f = this.cachedCanvases.getCanvas(c, l, h), g = f.context;
    g.translate(-a, -o), g.transform(...s), t.smask ? this.smaskStack.push({
      canvas: f.canvas,
      context: g,
      offsetX: a,
      offsetY: o,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), to(e, g), this.ctx = g, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = st(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const r = I.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(r);
    }
  }
  beginAnnotation(t, e, s, i, r) {
    if (b(this, ml, ef).call(this), zh(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], o = e[3] - e[1];
      if (r && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o;
        const [l, h] = I.singularValueDecompose2dScale(st(this.ctx)), {
          viewportScale: c
        } = this, f = Math.ceil(a * this.outputScaleX * c), g = Math.ceil(o * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(f, g);
        const {
          canvas: m,
          context: A
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, m), this.annotationCanvas.savedCtx = this.ctx, this.ctx = A, this.ctx.save(), this.ctx.setTransform(l, 0, 0, -h, 0, o * h), zh(this.ctx);
      } else
        zh(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.ctx.beginPath();
    }
    this.current = new mp(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), b(this, bl, sf).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = pb(t)), i.compiled)) {
      i.compiled(s);
      return;
    }
    const r = this._createMaskCanvas(t), a = r.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, r.offsetX, r.offsetY), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, r, a) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const o = this.ctx;
    o.save();
    const l = st(o);
    o.transform(e, s, i, r, 0, 0);
    const h = this._createMaskCanvas(t);
    o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]);
    for (let c = 0, f = a.length; c < f; c += 2) {
      const g = I.transform(l, [e, s, i, r, a[c], a[c + 1]]), [m, A] = I.applyTransform([0, 0], g);
      o.drawImage(h.canvas, m, A);
    }
    o.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    for (const r of t) {
      const {
        data: a,
        width: o,
        height: l,
        transform: h
      } = r, c = this.cachedCanvases.getCanvas("maskCanvas", o, l), f = c.context;
      f.save();
      const g = this.getObject(a, r);
      Ap(f, g), f.globalCompositeOperation = "source-in", f.fillStyle = i ? s.getPattern(f, this, We(e), Bt.FILL) : s, f.fillRect(0, 0, o, l), f.restore(), e.save(), e.transform(...h), e.scale(1, -1), Gh(e, c.canvas, 0, 0, o, l, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      $("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, s, i) {
    if (!this.contentVisible)
      return;
    const r = this.getObject(t);
    if (!r) {
      $("Dependent image isn't ready yet");
      return;
    }
    const a = r.width, o = r.height, l = [];
    for (let h = 0, c = i.length; h < c; h += 2)
      l.push({
        transform: [e, 0, 0, s, i[h], i[h + 1]],
        x: 0,
        y: 0,
        w: a,
        h: o
      });
    this.paintInlineImageXObjectGroup(r, l);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: s,
      height: i
    } = t, r = this.cachedCanvases.getCanvas("inlineImage", s, i), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, s = t.height, i = this.ctx;
    if (this.save(), !$t) {
      const {
        filter: o
      } = i;
      o !== "none" && o !== "" && (i.filter = "none");
    }
    i.scale(1 / e, -1 / s);
    let r;
    if (t.bitmap)
      r = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      r = t;
    else {
      const l = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
      bp(l, t), r = this.applyTransferMapsToCanvas(l);
    }
    const a = this._scaleImage(r, We(i));
    i.imageSmoothingEnabled = yp(st(i), t.interpolate), Gh(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const r = t.width, a = t.height, l = this.cachedCanvases.getCanvas("inlineImage", r, a).context;
      bp(l, t), i = this.applyTransferMapsToCanvas(l);
    }
    for (const r of e)
      s.save(), s.transform(...r.transform), s.scale(1, -1), Gh(s, i, r.x, r.y, r.w, r.h, 0, -1, 1, 1), s.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const s = this.ctx;
    this.pendingClip && (e || (this.pendingClip === _p ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = st(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: s,
        c: i,
        d: r
      } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && i === 0) {
        const l = Math.abs(e), h = Math.abs(r);
        if (l === h)
          if (t === 0)
            a = o = 1 / l;
          else {
            const c = l * t;
            a = o = c < 1 ? 1 / c : 1;
          }
        else if (t === 0)
          a = 1 / l, o = 1 / h;
        else {
          const c = l * t, f = h * t;
          a = c < 1 ? 1 / c : 1, o = f < 1 ? 1 / f : 1;
        }
      } else {
        const l = Math.abs(e * r - s * i), h = Math.hypot(e, s), c = Math.hypot(i, r);
        if (t === 0)
          a = c / l, o = h / l;
        else {
          const f = t * l;
          a = c > f ? c / f : 1, o = h > f ? h / f : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: s
    } = this.current, [i, r] = this.getScaleForStroking();
    if (e.lineWidth = s || 1, i === 1 && r === 1) {
      e.stroke();
      return;
    }
    const a = e.getLineDash();
    if (t && e.save(), e.scale(i, r), a.length > 0) {
      const o = Math.max(i, r);
      e.setLineDash(a.map((l) => l / o)), e.lineDashOffset /= o;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
ml = new WeakSet(), ef = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, bl = new WeakSet(), sf = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Al = new WeakSet(), nf = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
};
let _r = ep;
for (const d in Re)
  _r.prototype[d] !== void 0 && (_r.prototype[Re[d]] = _r.prototype[d]);
var yl, _l;
class Xs {
  static get workerPort() {
    return n(this, yl);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    p(this, yl, t);
  }
  static get workerSrc() {
    return n(this, _l);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    p(this, _l, t);
  }
}
yl = new WeakMap(), _l = new WeakMap(), u(Xs, yl, null), u(Xs, _l, "");
var An, wl;
class Ab {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    u(this, An, void 0);
    u(this, wl, void 0);
    p(this, An, t), p(this, wl, e);
  }
  getRaw() {
    return n(this, wl);
  }
  get(t) {
    return n(this, An).get(t) ?? null;
  }
  getAll() {
    return Uf(n(this, An));
  }
  has(t) {
    return n(this, An).has(t);
  }
}
An = new WeakMap(), wl = new WeakMap();
const pr = Symbol("INTERNAL");
var vl, Sl, El, qr;
class yb {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: r
  }) {
    u(this, vl, !1);
    u(this, Sl, !1);
    u(this, El, !1);
    u(this, qr, !0);
    p(this, vl, !!(t & me.DISPLAY)), p(this, Sl, !!(t & me.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = r;
  }
  get visible() {
    if (n(this, El))
      return n(this, qr);
    if (!n(this, qr))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return n(this, vl) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, Sl) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== pr && Q("Internal method `_setVisible` called."), p(this, El, s), p(this, qr, e);
  }
}
vl = new WeakMap(), Sl = new WeakMap(), El = new WeakMap(), qr = new WeakMap();
var di, Y, Yr, Kr, xl, rf;
class _b {
  constructor(t, e = me.DISPLAY) {
    u(this, xl);
    u(this, di, null);
    u(this, Y, /* @__PURE__ */ new Map());
    u(this, Yr, null);
    u(this, Kr, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, p(this, Kr, t.order);
      for (const s of t.groups)
        n(this, Y).set(s.id, new yb(e, s));
      if (t.baseState === "OFF")
        for (const s of n(this, Y).values())
          s._setVisible(pr, !1);
      for (const s of t.on)
        n(this, Y).get(s)._setVisible(pr, !0);
      for (const s of t.off)
        n(this, Y).get(s)._setVisible(pr, !1);
      p(this, Yr, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, Y).size === 0)
      return !0;
    if (!t)
      return pu("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return n(this, Y).has(t.id) ? n(this, Y).get(t.id).visible : ($(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return b(this, xl, rf).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, Y).has(e))
            return $(`Optional content group not found: ${e}`), !0;
          if (n(this, Y).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, Y).has(e))
            return $(`Optional content group not found: ${e}`), !0;
          if (!n(this, Y).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, Y).has(e))
            return $(`Optional content group not found: ${e}`), !0;
          if (!n(this, Y).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, Y).has(e))
            return $(`Optional content group not found: ${e}`), !0;
          if (n(this, Y).get(e).visible)
            return !1;
        }
        return !0;
      }
      return $(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return $(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    var r;
    const i = n(this, Y).get(t);
    if (!i) {
      $(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const a of i.rbGroups)
        for (const o of a)
          o !== t && ((r = n(this, Y).get(o)) == null || r._setVisible(pr, !1, !0));
    i._setVisible(pr, !!e, !0), p(this, di, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let s;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const r = n(this, Y).get(i);
      if (r)
        switch (s) {
          case "ON":
            this.setVisibility(i, !0, e);
            break;
          case "OFF":
            this.setVisibility(i, !1, e);
            break;
          case "Toggle":
            this.setVisibility(i, !r.visible, e);
            break;
        }
    }
    p(this, di, null);
  }
  get hasInitialVisibility() {
    return n(this, Yr) === null || this.getHash() === n(this, Yr);
  }
  getOrder() {
    return n(this, Y).size ? n(this, Kr) ? n(this, Kr).slice() : [...n(this, Y).keys()] : null;
  }
  getGroups() {
    return n(this, Y).size > 0 ? Uf(n(this, Y)) : null;
  }
  getGroup(t) {
    return n(this, Y).get(t) || null;
  }
  getHash() {
    if (n(this, di) !== null)
      return n(this, di);
    const t = new ig();
    for (const [e, s] of n(this, Y))
      t.update(`${e}:${s.visible}`);
    return p(this, di, t.hexdigest());
  }
}
di = new WeakMap(), Y = new WeakMap(), Yr = new WeakMap(), Kr = new WeakMap(), xl = new WeakSet(), rf = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const r = t[i];
    let a;
    if (Array.isArray(r))
      a = b(this, xl, rf).call(this, r);
    else if (n(this, Y).has(r))
      a = n(this, Y).get(r).visible;
    else
      return $(`Optional content group not found: ${r}`), !0;
    switch (s) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return s === "And";
};
class wb {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    ft(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
      const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, h) => {
      this._onReceiveData({
        begin: l,
        chunk: h
      });
    }), t.addProgressListener((l, h) => {
      this._onProgress({
        loaded: l,
        total: h
      });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const i = this._rangeReaders.some(function(r) {
        return r._begin !== t ? !1 : (r._enqueue(s), !0);
      });
      ft(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, s, i, r;
    t.total === void 0 ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, {
      loaded: t.loaded
    }) : (r = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || r.call(i, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    ft(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new vb(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Sb(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeReaders.slice(0))
      s.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class vb {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = Wf(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks)
      this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class Sb {
  constructor(t, e, s) {
    this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const s of this._requests)
          s.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function Eb(d) {
  let t = !0, e = s("filename\\*", "i").exec(d);
  if (e) {
    e = e[1];
    let c = o(e);
    return c = unescape(c), c = l(c), c = h(c), r(c);
  }
  if (e = a(d), e) {
    const c = h(e);
    return r(c);
  }
  if (e = s("filename", "i").exec(d), e) {
    e = e[1];
    let c = o(e);
    return c = h(c), r(c);
  }
  function s(c, f) {
    return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', f);
  }
  function i(c, f) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(f))
        return f;
      try {
        const g = new TextDecoder(c, {
          fatal: !0
        }), m = gu(f);
        f = g.decode(m), t = !1;
      } catch {
      }
    }
    return f;
  }
  function r(c) {
    return t && /[\x80-\xff]/.test(c) && (c = i("utf-8", c), t && (c = i("iso-8859-1", c))), c;
  }
  function a(c) {
    const f = [];
    let g;
    const m = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (g = m.exec(c)) !== null; ) {
      let [, y, w, _] = g;
      if (y = parseInt(y, 10), y in f) {
        if (y === 0)
          break;
        continue;
      }
      f[y] = [w, _];
    }
    const A = [];
    for (let y = 0; y < f.length && y in f; ++y) {
      let [w, _] = f[y];
      _ = o(_), w && (_ = unescape(_), y === 0 && (_ = l(_))), A.push(_);
    }
    return A.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const f = c.slice(1).split('\\"');
      for (let g = 0; g < f.length; ++g) {
        const m = f[g].indexOf('"');
        m !== -1 && (f[g] = f[g].slice(0, m), f.length = g + 1), f[g] = f[g].replaceAll(/\\(.)/g, "$1");
      }
      c = f.join('"');
    }
    return c;
  }
  function l(c) {
    const f = c.indexOf("'");
    if (f === -1)
      return c;
    const g = c.slice(0, f), A = c.slice(f + 1).replace(/^[^']*'/, "");
    return i(g, A);
  }
  function h(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(f, g, m, A) {
      if (m === "q" || m === "Q")
        return A = A.replaceAll("_", " "), A = A.replaceAll(/=([0-9a-fA-F]{2})/g, function(y, w) {
          return String.fromCharCode(parseInt(w, 16));
        }), i(g, A);
      try {
        A = atob(A);
      } catch {
      }
      return i(g, A);
    });
  }
  return "";
}
function bg(d, t) {
  const e = new Headers();
  if (!d || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function Au(d) {
  try {
    return new URL(d).origin;
  } catch {
  }
  return null;
}
function Ag({
  responseHeaders: d,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, r = parseInt(d.get("Content-Length"), 10);
  return !Number.isInteger(r) || (i.suggestedLength = r, r <= 2 * e) || s || !t || d.get("Accept-Ranges") !== "bytes" || (d.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function yg(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = Eb(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (Wf(e))
      return e;
  }
  return null;
}
function yu(d, t) {
  return d === 404 || d === 0 && t.startsWith("file:") ? new vo('Missing PDF "' + t + '".') : new _c(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d);
}
function _g(d) {
  return d === 200 || d === 206;
}
function wg(d, t, e) {
  return {
    method: "GET",
    headers: d,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function vg(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : ($(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class wp {
  constructor(t) {
    F(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = bg(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ft(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new xb(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Cb(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class xb {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, wg(s, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = Au(r.url), !_g(r.status))
        throw yu(r.status, i);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = Ag({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = yg(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Ii("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: vg(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class Cb {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, wg(r, this._withCredentials, this._abortController)).then((o) => {
      const l = Au(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!_g(o.status))
        throw yu(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: vg(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const Cu = 200, Tu = 206;
function Tb(d) {
  const t = d.response;
  return typeof t != "string" ? t : gu(t).buffer;
}
class Pb {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    F(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = bg(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers)
      e.setRequestHeader(r, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = Tu) : i.expectedStatus = Cu, e.responseType = "arraybuffer", ft(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
  }
  onProgress(t, e) {
    var i;
    const s = this.pendingRequests[t];
    s && ((i = s.onProgress) == null || i.call(s, e));
  }
  onStateChange(t, e) {
    const s = this.pendingRequests[t];
    if (!s)
      return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      s.onError(i.status);
      return;
    }
    const r = i.status || Cu;
    if (!(r === Cu && s.expectedStatus === Tu) && r !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = Tb(i);
    if (r === Tu) {
      const l = i.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? s.onDone({
        begin: parseInt(h[1], 10),
        chunk: o
      }) : ($('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else
      o ? s.onDone({
        begin: 0,
        chunk: o
      }) : s.onError(i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class Rb {
  constructor(t) {
    this._source = t, this._manager = new Pb(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return ft(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new kb(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new Mb(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class kb {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = Au(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: r,
      suggestedLength: a
    } = Ag({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = yg(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = yu(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class Mb {
  constructor(t, e, s) {
    this._manager = t, this._url = t.url, this._requestId = t.request({
      begin: e,
      end: s,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    var e;
    const t = Au((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const s of this._requests)
      s.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError ?? (this._storedError = yu(t, this._url));
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const Lb = /^[a-z][a-z0-9\-+.]+:/i;
function Ib(d) {
  if (Lb.test(d))
    return new URL(d);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(d));
}
class Db {
  constructor(t) {
    this.source = t, this.url = Ib(t.url), ft(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ft(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new Fb(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Nb(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Fb {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = new vo(`Missing PDF "${this._url}".`)), this._storedError = i, this._headersCapability.reject(i);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Ii("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class Nb {
  constructor(t, e, s) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const i = t.source;
    this._isStreamingSupported = !i.disableStream;
    const r = process.getBuiltinModule("fs");
    this._setReadableStream(r.createReadStream(this._url, {
      start: e,
      end: s - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const Ob = 1e5, Kt = 30, Hb = 0.8;
var xp, ui, te, Cl, Tl, yn, Ps, Pl, Rl, _n, Qr, Jr, fi, Zr, kl, ta, wn, Ml, Ll, vn, Sn, Il, pi, ea, fd, Sg, pd, Eg, Dl, af, sa, ec, Fl, of, gd, xg, md, Cg;
const at = class at {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    u(this, fd);
    u(this, pd);
    u(this, Dl);
    u(this, ui, Promise.withResolvers());
    u(this, te, null);
    u(this, Cl, !1);
    u(this, Tl, !!((xp = globalThis.FontInspector) != null && xp.enabled));
    u(this, yn, null);
    u(this, Ps, null);
    u(this, Pl, 0);
    u(this, Rl, 0);
    u(this, _n, null);
    u(this, Qr, null);
    u(this, Jr, 0);
    u(this, fi, 0);
    u(this, Zr, /* @__PURE__ */ Object.create(null));
    u(this, kl, []);
    u(this, ta, null);
    u(this, wn, []);
    u(this, Ml, /* @__PURE__ */ new WeakMap());
    u(this, Ll, null);
    var l;
    if (t instanceof ReadableStream)
      p(this, ta, t);
    else if (typeof t == "object")
      p(this, ta, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    p(this, te, p(this, Qr, e)), p(this, fi, s.scale * (globalThis.devicePixelRatio || 1)), p(this, Jr, s.rotation), p(this, Ps, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: r,
      pageX: a,
      pageY: o
    } = s.rawDims;
    p(this, Ll, [1, 0, 0, -1, -a, o + r]), p(this, Rl, i), p(this, Pl, r), b(l = at, gd, xg).call(l), rr(e, s), n(this, ui).promise.finally(() => {
      n(at, ea).delete(this), p(this, Ps, null), p(this, Zr, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = qt.platform;
    return U(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      n(this, _n).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          n(this, ui).resolve();
          return;
        }
        n(this, yn) ?? p(this, yn, e.lang), Object.assign(n(this, Zr), e.styles), b(this, fd, Sg).call(this, e.items), t();
      }, n(this, ui).reject);
    };
    return p(this, _n, n(this, ta).getReader()), n(at, ea).add(this), t(), n(this, ui).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const s = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== n(this, Jr) && (e == null || e(), p(this, Jr, i), rr(n(this, Qr), {
      rotation: i
    })), s !== n(this, fi)) {
      e == null || e(), p(this, fi, s);
      const a = {
        div: null,
        properties: null,
        ctx: b(r = at, sa, ec).call(r, n(this, yn))
      };
      for (const o of n(this, wn))
        a.properties = n(this, Ml).get(o), a.div = o, b(this, Dl, af).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new Ii("TextLayer task cancelled.");
    (e = n(this, _n)) == null || e.cancel(t).catch(() => {
    }), p(this, _n, null), n(this, ui).reject(t);
  }
  get textDivs() {
    return n(this, wn);
  }
  get textContentItemsStr() {
    return n(this, kl);
  }
  static cleanup() {
    if (!(n(this, ea).size > 0)) {
      n(this, vn).clear();
      for (const {
        canvas: t
      } of n(this, Sn).values())
        t.remove();
      n(this, Sn).clear();
    }
  }
};
ui = new WeakMap(), te = new WeakMap(), Cl = new WeakMap(), Tl = new WeakMap(), yn = new WeakMap(), Ps = new WeakMap(), Pl = new WeakMap(), Rl = new WeakMap(), _n = new WeakMap(), Qr = new WeakMap(), Jr = new WeakMap(), fi = new WeakMap(), Zr = new WeakMap(), kl = new WeakMap(), ta = new WeakMap(), wn = new WeakMap(), Ml = new WeakMap(), Ll = new WeakMap(), vn = new WeakMap(), Sn = new WeakMap(), Il = new WeakMap(), pi = new WeakMap(), ea = new WeakMap(), fd = new WeakSet(), Sg = function(t) {
  var i, r;
  if (n(this, Cl))
    return;
  (r = n(this, Ps)).ctx ?? (r.ctx = b(i = at, sa, ec).call(i, n(this, yn)));
  const e = n(this, wn), s = n(this, kl);
  for (const a of t) {
    if (e.length > Ob) {
      $("Ignoring additional textDivs for performance reasons."), p(this, Cl, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = n(this, te);
        p(this, te, document.createElement("span")), n(this, te).classList.add("markedContent"), a.id !== null && n(this, te).setAttribute("id", `${a.id}`), o.append(n(this, te));
      } else
        a.type === "endMarkedContent" && p(this, te, n(this, te).parentNode);
      continue;
    }
    s.push(a.str), b(this, pd, Eg).call(this, a);
  }
}, pd = new WeakSet(), Eg = function(t) {
  var y;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  n(this, wn).push(e);
  const i = I.transform(n(this, Ll), t.transform);
  let r = Math.atan2(i[1], i[0]);
  const a = n(this, Zr)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, Tl) && a.fontSubstitution || a.fontFamily;
  o = at.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * b(y = at, md, Cg).call(y, o, n(this, yn));
  let c, f;
  r === 0 ? (c = i[4], f = i[5] - h) : (c = i[4] + h * Math.sin(r), f = i[5] - h * Math.cos(r));
  const g = "calc(var(--scale-factor)*", m = e.style;
  n(this, te) === n(this, Qr) ? (m.left = `${(100 * c / n(this, Rl)).toFixed(2)}%`, m.top = `${(100 * f / n(this, Pl)).toFixed(2)}%`) : (m.left = `${g}${c.toFixed(2)}px)`, m.top = `${g}${f.toFixed(2)}px)`), m.fontSize = `${g}${(n(at, pi) * l).toFixed(2)}px)`, m.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, Tl) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let A = !1;
  if (t.str.length > 1)
    A = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const w = Math.abs(t.transform[0]), _ = Math.abs(t.transform[3]);
    w !== _ && Math.max(w, _) / Math.min(w, _) > 1.5 && (A = !0);
  }
  if (A && (s.canvasWidth = a.vertical ? t.height : t.width), n(this, Ml).set(e, s), n(this, Ps).div = e, n(this, Ps).properties = s, b(this, Dl, af).call(this, n(this, Ps)), s.hasText && n(this, te).append(e), s.hasEOL) {
    const w = document.createElement("br");
    w.setAttribute("role", "presentation"), n(this, te).append(w);
  }
}, Dl = new WeakSet(), af = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: r
  } = e;
  let a = "";
  if (n(at, pi) > 1 && (a = `scale(${1 / n(at, pi)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = r, {
      canvasWidth: h,
      fontSize: c
    } = s;
    b(o = at, Fl, of).call(o, i, c * n(this, fi), l);
    const {
      width: f
    } = i.measureText(e.textContent);
    f > 0 && (a = `scaleX(${h * n(this, fi) / f}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, sa = new WeakSet(), ec = function(t = null) {
  let e = n(this, Sn).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), n(this, Sn).set(t, e), n(this, Il).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, Fl = new WeakSet(), of = function(t, e, s) {
  const i = n(this, Il).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, gd = new WeakSet(), xg = function() {
  if (n(this, pi) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), p(this, pi, t.getBoundingClientRect().height), t.remove();
}, md = new WeakSet(), Cg = function(t, e) {
  const s = n(this, vn).get(t);
  if (s)
    return s;
  const i = b(this, sa, ec).call(this, e);
  i.canvas.width = i.canvas.height = Kt, b(this, Fl, of).call(this, i, Kt, t);
  const r = i.measureText("");
  let a = r.fontBoundingBoxAscent, o = Math.abs(r.fontBoundingBoxDescent);
  if (a) {
    const c = a / (a + o);
    return n(this, vn).set(t, c), i.canvas.width = i.canvas.height = 0, c;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, Kt, Kt), i.strokeText("g", 0, 0);
  let l = i.getImageData(0, 0, Kt, Kt).data;
  o = 0;
  for (let c = l.length - 1 - 3; c >= 0; c -= 4)
    if (l[c] > 0) {
      o = Math.ceil(c / 4 / Kt);
      break;
    }
  i.clearRect(0, 0, Kt, Kt), i.strokeText("A", 0, Kt), l = i.getImageData(0, 0, Kt, Kt).data, a = 0;
  for (let c = 0, f = l.length; c < f; c += 4)
    if (l[c] > 0) {
      a = Kt - Math.floor(c / 4 / Kt);
      break;
    }
  i.canvas.width = i.canvas.height = 0;
  const h = a ? a / (a + o) : Hb;
  return n(this, vn).set(t, h), h;
}, u(at, sa), u(at, Fl), u(at, gd), u(at, md), u(at, vn, /* @__PURE__ */ new Map()), u(at, Sn, /* @__PURE__ */ new Map()), u(at, Il, /* @__PURE__ */ new WeakMap()), u(at, pi, null), u(at, ea, /* @__PURE__ */ new Set());
let So = at;
class Eo {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(r) {
      var l;
      if (!r)
        return;
      let a = null;
      const o = r.name;
      if (o === "#text")
        a = r.value;
      else if (Eo.shouldBuildText(o))
        (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else
        return;
      if (a !== null && e.push({
        str: a
      }), !!r.children)
        for (const h of r.children)
          i(h);
    }
    return i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const Bb = 65536, $b = 100, Gb = 5e3, zb = $t ? sb : Zm, Ub = $t ? ib : dg, Vb = $t ? eb : tb, jb = $t ? nb : gg;
function Wb(d = {}) {
  typeof d == "string" || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
    data: d
  });
  const t = new lf(), {
    docId: e
  } = t, s = d.url ? Xb(d.url) : null, i = d.data ? qb(d.data) : null, r = d.httpHeaders || null, a = d.withCredentials === !0, o = d.password ?? null, l = d.range instanceof Tg ? d.range : null, h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : Bb;
  let c = d.worker instanceof wr ? d.worker : null;
  const f = d.verbosity, g = typeof d.docBaseUrl == "string" && !bu(d.docBaseUrl) ? d.docBaseUrl : null, m = typeof d.cMapUrl == "string" ? d.cMapUrl : null, A = d.cMapPacked !== !1, y = d.CMapReaderFactory || Ub, w = typeof d.standardFontDataUrl == "string" ? d.standardFontDataUrl : null, _ = d.StandardFontDataFactory || jb, v = d.stopAtErrors !== !0, E = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, S = d.isEvalSupported !== !1, x = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !$t, T = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !$t && (qt.platform.isFirefox || !globalThis.chrome), C = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, M = typeof d.disableFontFace == "boolean" ? d.disableFontFace : $t, D = d.fontExtraProperties === !0, V = d.enableXfa === !0, O = d.ownerDocument || globalThis.document, Z = d.disableRange === !0, lt = d.disableStream === !0, X = d.disableAutoFetch === !0, Gt = d.pdfBug === !0, k = d.CanvasFactory || zb, N = d.FilterFactory || Vb, ie = d.enableHWA === !0, je = l ? l.length : d.length ?? NaN, fs = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !$t && !M, Ae = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : y === dg && _ === gg && m && w && io(m, document.baseURI) && io(w, document.baseURI), Mt = null;
  Mm(f);
  const pt = {
    canvasFactory: new k({
      ownerDocument: O,
      enableHWA: ie
    }),
    filterFactory: new N({
      docId: e,
      ownerDocument: O
    }),
    cMapReaderFactory: Ae ? null : new y({
      baseUrl: m,
      isCompressed: A
    }),
    standardFontDataFactory: Ae ? null : new _({
      baseUrl: w
    })
  };
  if (!c) {
    const Yt = {
      verbosity: f,
      port: Xs.workerPort
    };
    c = Yt.port ? wr.fromPort(Yt) : new wr(Yt), t._worker = c;
  }
  const hr = {
    docId: e,
    apiVersion: "4.10.38",
    data: i,
    password: o,
    disableAutoFetch: X,
    rangeChunkSize: h,
    length: je,
    docBaseUrl: g,
    enableXfa: V,
    evaluatorOptions: {
      maxImageSize: E,
      disableFontFace: M,
      ignoreErrors: v,
      isEvalSupported: S,
      isOffscreenCanvasSupported: x,
      isImageDecoderSupported: T,
      canvasMaxAreaInBytes: C,
      fontExtraProperties: D,
      useSystemFonts: fs,
      cMapUrl: Ae ? m : null,
      standardFontDataUrl: Ae ? w : null
    }
  }, Ja = {
    disableFontFace: M,
    fontExtraProperties: D,
    ownerDocument: O,
    pdfBug: Gt,
    styleElement: Mt,
    loadingParams: {
      disableAutoFetch: X,
      enableXfa: V
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const Yt = c.messageHandler.sendWithPromise("GetDocRequest", hr, i ? [i.buffer] : null);
    let tt;
    if (l)
      tt = new wb(l, {
        disableRange: Z,
        disableStream: lt
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      let cr;
      if ($t)
        if (io(s)) {
          if (typeof fetch > "u" || typeof Response > "u" || !("body" in Response.prototype))
            throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
          cr = wp;
        } else
          cr = Db;
      else
        cr = io(s) ? wp : Rb;
      tt = new cr({
        url: s,
        length: je,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: Z,
        disableStream: lt
      });
    }
    return Yt.then((cr) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const rp = new oo(e, cr, c.port), Em = new Jb(rp, t, tt, Ja, pt);
      t._transport = Em, rp.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function Xb(d) {
  if (d instanceof URL)
    return d.href;
  try {
    return new URL(d, window.location).href;
  } catch {
    if ($t && typeof d == "string")
      return d;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function qb(d) {
  if ($t && typeof Buffer < "u" && d instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength)
    return d;
  if (typeof d == "string")
    return gu(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length))
    return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function vp(d) {
  return typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0;
}
var bd;
const Ad = class Ad {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${zt(Ad, bd)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, s, i;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (r) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, r;
    }
    this._transport = null, (i = this._worker) == null || i.destroy(), this._worker = null;
  }
};
bd = new WeakMap(), u(Ad, bd, 0);
let lf = Ad;
class Tg {
  constructor(t, e, s = !1, i = null) {
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const s of this._rangeListeners)
      s(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const s of this._progressListeners)
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    Q("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class Yb {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return U(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var gi, Rs, mi, gr, ia, sc;
class Kb {
  constructor(t, e, s, i = !1) {
    u(this, mi);
    u(this, ia);
    u(this, gi, null);
    u(this, Rs, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new lp() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new Pg(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: s = 0,
    offsetY: i = 0,
    dontFlip: r = !1
  } = {}) {
    return new Oh({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: r
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return U(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: s = "display",
    annotationMode: i = Ys.ENABLE,
    transform: r = null,
    background: a = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: l = null,
    pageColors: h = null,
    printAnnotationStorage: c = null,
    isEditing: f = !1
  }) {
    var S, x;
    (S = this._stats) == null || S.time("Overall");
    const g = this._transport.getRenderingIntent(s, i, c, f), {
      renderingIntent: m,
      cacheKey: A
    } = g;
    p(this, Rs, !1), b(this, ia, sc).call(this), o || (o = this._transport.getOptionalContentConfig(m));
    let y = this._intentStates.get(A);
    y || (y = /* @__PURE__ */ Object.create(null), this._intentStates.set(A, y)), y.streamReaderCancelTimeout && (clearTimeout(y.streamReaderCancelTimeout), y.streamReaderCancelTimeout = null);
    const w = !!(m & me.PRINT);
    y.displayReadyCapability || (y.displayReadyCapability = Promise.withResolvers(), y.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (x = this._stats) == null || x.time("Page Request"), this._pumpOperatorList(g));
    const _ = (T) => {
      var C;
      y.renderTasks.delete(v), (this._maybeCleanupAfterRender || w) && p(this, Rs, !0), b(this, mi, gr).call(this, !w), T ? (v.capability.reject(T), this._abortOperatorList({
        intentState: y,
        reason: T instanceof Error ? T : new Error(T)
      })) : v.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (C = globalThis.Stats) != null && C.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, v = new cf({
      callback: _,
      params: {
        canvasContext: t,
        viewport: e,
        transform: r,
        background: a
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: l,
      operatorList: y.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !w,
      pdfBug: this._pdfBug,
      pageColors: h
    });
    (y.renderTasks || (y.renderTasks = /* @__PURE__ */ new Set())).add(v);
    const E = v.task;
    return Promise.all([y.displayReadyCapability.promise, o]).then(([T, C]) => {
      var M;
      if (this.destroyed) {
        _();
        return;
      }
      if ((M = this._stats) == null || M.time("Rendering"), !(C.renderingIntent & m))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      v.initializeGraphics({
        transparency: T,
        optionalContentConfig: C
      }), v.operatorListChanged();
    }).catch(_), E;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Ys.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    var h;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, s, i, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((s) => Eo.textContent(s));
    const e = this.streamTextContent(t);
    return new Promise(function(s, i) {
      function r() {
        a.read().then(function({
          value: l,
          done: h
        }) {
          if (h) {
            s(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), r();
        }, i);
      }
      const a = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      r();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const s of e.renderTasks)
          t.push(s.completed), s.cancel();
    return this.objs.clear(), p(this, Rs, !1), b(this, ia, sc).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    p(this, Rs, !0);
    const e = b(this, mi, gr).call(this, !1);
    return t && e && this._stats && (this._stats = new lp()), e;
  }
  _startRenderPage(t, e) {
    var i, r;
    const s = this._intentStates.get(e);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (r = s.displayReadyCapability) == null || r.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && b(this, mi, gr).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: r,
      transfer: a
    } = s, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: i
    }, a).getReader(), h = this._intentStates.get(e);
    h.streamReader = l;
    const c = () => {
      l.read().then(({
        value: f,
        done: g
      }) => {
        if (g) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(f, h), c());
      }, (f) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const g of h.renderTasks)
              g.operatorListChanged();
            b(this, mi, gr).call(this, !0);
          }
          if (h.displayReadyCapability)
            h.displayReadyCapability.reject(f);
          else if (h.opListReadCapability)
            h.opListReadCapability.reject(f);
          else
            throw f;
        }
      });
    };
    c();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: s = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof jf) {
          let i = $b;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new Ii(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, r] of this._intentStates)
          if (r === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
gi = new WeakMap(), Rs = new WeakMap(), mi = new WeakSet(), gr = function(t = !1) {
  if (b(this, ia, sc).call(this), !n(this, Rs) || this.destroyed)
    return !1;
  if (t)
    return p(this, gi, setTimeout(() => {
      p(this, gi, null), b(this, mi, gr).call(this, !1);
    }, Gb)), !1;
  for (const {
    renderTasks: e,
    operatorList: s
  } of this._intentStates.values())
    if (e.size > 0 || !s.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), p(this, Rs, !1), !0;
}, ia = new WeakSet(), sc = function() {
  n(this, gi) && (clearTimeout(n(this, gi)), p(this, gi, null));
};
var ks, yd;
class Qb {
  constructor() {
    u(this, ks, /* @__PURE__ */ new Map());
    u(this, yd, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    n(this, yd).then(() => {
      for (const [i] of n(this, ks))
        i.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
      const {
        signal: r
      } = s;
      if (r.aborted) {
        $("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      i = () => r.removeEventListener("abort", a), r.addEventListener("abort", a);
    }
    n(this, ks).set(e, i);
  }
  removeEventListener(t, e) {
    const s = n(this, ks).get(e);
    s == null || s(), n(this, ks).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, ks))
      t == null || t();
    n(this, ks).clear();
  }
}
ks = new WeakMap(), yd = new WeakMap();
var _d, En, xn, na, ic, ra, nc;
const et = class et {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = Lm()
  } = {}) {
    u(this, na);
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = n(et, xn)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (n(et, xn) || p(et, xn, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new oo("main", "worker", t), this._messageHandler.on("ready", function() {
    }), b(this, na, ic).call(this);
  }
  _initialize() {
    if (n(et, En) || n(et, ra, nc)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: t
    } = et;
    try {
      et._isSameOrigin(window.location.href, t) || (t = et._createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, {
        type: "module"
      }), s = new oo("main", "worker", e), i = () => {
        r.abort(), s.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, r = new AbortController();
      e.addEventListener("error", () => {
        this._webWorker || i();
      }, {
        signal: r.signal
      }), s.on("test", (o) => {
        if (r.abort(), this.destroyed || !o) {
          i();
          return;
        }
        this._messageHandler = s, this._port = e, this._webWorker = e, b(this, na, ic).call(this);
      }), s.on("ready", (o) => {
        if (r.abort(), this.destroyed) {
          i();
          return;
        }
        try {
          a();
        } catch {
          this._setupFakeWorker();
        }
      });
      const a = () => {
        const o = new Uint8Array();
        s.send("test", o, [o.buffer]);
      };
      a();
      return;
    } catch {
      pu("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    n(et, En) || ($("Setting up fake worker."), p(et, En, !0)), et._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new Qb();
      this._port = e;
      const s = `fake${zt(et, _d)._++}`, i = new oo(s + "_worker", s, e);
      t.setup(i, e), this._messageHandler = new oo(s, s + "_worker", e), b(this, na, ic).call(this);
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t, e, s;
    this.destroyed = !0, (t = this._webWorker) == null || t.terminate(), this._webWorker = null, (e = n(et, xn)) == null || e.delete(this._port), this._port = null, (s = this._messageHandler) == null || s.destroy(), this._messageHandler = null;
  }
  static fromPort(t) {
    var s;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (s = n(this, xn)) == null ? void 0 : s.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new et(t);
  }
  static get workerSrc() {
    if (Xs.workerSrc)
      return Xs.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return U(this, "_setupFakeWorkerGlobal", (async () => n(this, ra, nc) ? n(this, ra, nc) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
_d = new WeakMap(), En = new WeakMap(), xn = new WeakMap(), na = new WeakSet(), ic = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, ra = new WeakSet(), nc = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, u(et, ra), u(et, _d, 0), u(et, En, !1), u(et, xn, void 0), $t && (p(et, En, !0), Xs.workerSrc || (Xs.workerSrc = "./pdf.worker.mjs")), et._isSameOrigin = (t, e) => {
  let s;
  try {
    if (s = new URL(t), !s.origin || s.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const i = new URL(e, s);
  return s.origin === i.origin;
}, et._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
let wr = et;
var Ms, ns, aa, oa, Ls, Cn, fo;
class Jb {
  constructor(t, e, s, i, r) {
    u(this, Cn);
    u(this, Ms, /* @__PURE__ */ new Map());
    u(this, ns, /* @__PURE__ */ new Map());
    u(this, aa, /* @__PURE__ */ new Map());
    u(this, oa, /* @__PURE__ */ new Map());
    u(this, Ls, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Pg(), this.fontLoader = new Qm({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return U(this, "annotationStorage", new Yf());
  }
  getRenderingIntent(t, e = Ys.ENABLE, s = null, i = !1, r = !1) {
    let a = me.DISPLAY, o = Ku;
    switch (t) {
      case "any":
        a = me.ANY;
        break;
      case "display":
        break;
      case "print":
        a = me.PRINT;
        break;
      default:
        $(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & me.PRINT && s instanceof rg ? s : this.annotationStorage;
    switch (e) {
      case Ys.DISABLE:
        a += me.ANNOTATIONS_DISABLE;
        break;
      case Ys.ENABLE:
        break;
      case Ys.ENABLE_FORMS:
        a += me.ANNOTATIONS_FORMS;
        break;
      case Ys.ENABLE_STORAGE:
        a += me.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        $(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += me.IS_EDITING), r && (a += me.OPLIST);
    const {
      ids: h,
      hash: c
    } = l.modifiedIds, f = [a, o.hash, c];
    return {
      renderingIntent: a,
      cacheKey: f.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: h
    };
  }
  destroy() {
    var s;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = n(this, Ls)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of n(this, ns).values())
      t.push(i._destroy());
    n(this, ns).clear(), n(this, aa).clear(), n(this, oa).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, Ms).clear(), this.filterFactory.destroy(), So.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Ii("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      ft(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            i.close();
            return;
          }
          ft(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        this._fullReader.cancel(r), i.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      var o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      } = this._fullReader;
      return (!i || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var h;
        (h = e.onProgress) == null || h.call(e, {
          loaded: l.loaded,
          total: l.total
        });
      }), {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      };
    }), t.on("GetRangeReader", (s, i) => {
      ft(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const r = this._networkStream.getRangeReader(s.begin, s.end);
      if (!r) {
        i.close();
        return;
      }
      i.onPull = () => {
        r.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          ft(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        r.cancel(a), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Yb(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(Qt(s));
    }), t.on("PasswordRequest", (s) => {
      p(this, Ls, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw Qt(s);
        const i = (r) => {
          r instanceof Error ? n(this, Ls).reject(r) : n(this, Ls).resolve({
            password: r
          });
        };
        e.onPassword(i, s.code);
      } catch (i) {
        n(this, Ls).reject(i);
      }
      return n(this, Ls).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      n(this, ns).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, r]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: o,
            fontExtraProperties: l,
            pdfBug: h
          } = this._params;
          if ("error" in r) {
            const m = r.error;
            $(`Error during font loading: ${m}`), this.commonObjs.resolve(s, m);
            break;
          }
          const c = h && ((a = globalThis.FontInspector) != null && a.enabled) ? (m, A) => globalThis.FontInspector.fontAdded(m, A) : null, f = new Jm(r, {
            disableFontFace: o,
            fontExtraProperties: l,
            inspectFont: c
          });
          this.fontLoader.bind(f).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !l && f.data && (f.data = null), this.commonObjs.resolve(s, f);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: g
          } = r;
          ft(g, "The imageRef must be defined.");
          for (const m of n(this, ns).values())
            for (const [, A] of m.objs)
              if ((A == null ? void 0 : A.ref) === g)
                return A.dataLen ? (this.commonObjs.resolve(s, structuredClone(A)), A.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, r, a]) => {
      var l;
      if (this.destroyed)
        return;
      const o = n(this, ns).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (r) {
          case "Image":
            o.objs.resolve(s, a), (a == null ? void 0 : a.dataLen) > Tm && (o._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: s.loaded,
        total: s.total
      });
    }), t.on("FetchBuiltInCMap", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.cMapReaderFactory)
        throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.cMapReaderFactory.fetch(s);
    }), t.on("FetchStandardFontData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.standardFontDataFactory)
        throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.standardFontDataFactory.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var s;
    this.annotationStorage.size <= 0 && $("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = n(this, aa).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((r) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      r.refStr && n(this, oa).set(r.refStr, t);
      const a = new Kb(e, r, this, this._params.pdfBug);
      return n(this, ns).set(e, a), a;
    });
    return n(this, aa).set(e, i), i;
  }
  getPageIndex(t) {
    return vp(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return b(this, Cn, fo).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return b(this, Cn, fo).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return b(this, Cn, fo).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return b(this, Cn, fo).call(this, "GetOptionalContentConfig").then((e) => new _b(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = n(this, Ms).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var r, a;
      return {
        info: i[0],
        metadata: i[1] ? new Ab(i[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return n(this, Ms).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, ns).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, Ms).clear(), this.filterFactory.destroy(!0), So.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!vp(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, oa).get(e) ?? null;
  }
}
Ms = new WeakMap(), ns = new WeakMap(), aa = new WeakMap(), oa = new WeakMap(), Ls = new WeakMap(), Cn = new WeakSet(), fo = function(t, e = null) {
  const s = n(this, Ms).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return n(this, Ms).set(t, i), i;
};
const eo = Symbol("INITIAL_DATA");
var oe, Nl, hf;
class Pg {
  constructor() {
    u(this, Nl);
    u(this, oe, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = b(this, Nl, hf).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = n(this, oe)[t];
    if (!s || s.data === eo)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = n(this, oe)[t];
    return !!e && e.data !== eo;
  }
  delete(t) {
    const e = n(this, oe)[t];
    return !e || e.data === eo ? !1 : (delete n(this, oe)[t], !0);
  }
  resolve(t, e = null) {
    const s = b(this, Nl, hf).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in n(this, oe)) {
      const {
        data: s
      } = n(this, oe)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    p(this, oe, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in n(this, oe)) {
      const {
        data: e
      } = n(this, oe)[t];
      e !== eo && (yield [t, e]);
    }
  }
}
oe = new WeakMap(), Nl = new WeakSet(), hf = function(t) {
  var e;
  return (e = n(this, oe))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: eo
  });
};
var bi;
class Zb {
  constructor(t) {
    u(this, bi, null);
    p(this, bi, t), this.onContinue = null;
  }
  get promise() {
    return n(this, bi).capability.promise;
  }
  cancel(t = 0) {
    n(this, bi).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = n(this, bi).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = n(this, bi);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
bi = new WeakMap();
var Ai, Tn;
const $i = class $i {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: h,
    useRequestAnimationFrame: c = !1,
    pdfBug: f = !1,
    pageColors: g = null
  }) {
    u(this, Ai, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = f, this.pageColors = g, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Zb(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var o, l;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (n($i, Tn).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n($i, Tn).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: r,
      background: a
    } = this.params;
    this.gfx = new _r(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: r,
      viewport: i,
      transparency: t,
      background: a
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (l = this.graphicsReadyCallback) == null || l.call(this);
  }
  cancel(t = null, e = 0) {
    var s;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), n(this, Ai) && (window.cancelAnimationFrame(n(this, Ai)), p(this, Ai, null)), n($i, Tn).delete(this._canvas), this.callback(t || new jf(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    var t;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? p(this, Ai, window.requestAnimationFrame(() => {
      p(this, Ai, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n($i, Tn).delete(this._canvas), this.callback())));
  }
};
Ai = new WeakMap(), Tn = new WeakMap(), u($i, Tn, /* @__PURE__ */ new WeakSet());
let cf = $i;
const tA = "4.10.38", eA = "f9bea397f";
function Sp(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function so(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class Ep {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = so(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Sp(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(so);
  }
  static RGB_HTML(t) {
    return `#${t.map(Sp).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [so(1 - Math.min(1, t + i)), so(1 - Math.min(1, s + i)), so(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, r = 1 - e, a = 1 - s, o = Math.min(i, r, a);
    return ["CMYK", i, r, a, o];
  }
}
class sA {
  create(t, e, s = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    Q("Abstract method `_createSVG` called.");
  }
}
class Qf extends sA {
  _createSVG(t) {
    return document.createElementNS(ps, t);
  }
}
class Rg {
  static setupStorage(t, e, s, i, r) {
    const a = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print")
          break;
        t.addEventListener("input", (o) => {
          i.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), r === "print")
            break;
          t.addEventListener("change", (o) => {
            i.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print")
            break;
          t.addEventListener("input", (o) => {
            i.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of s.children)
            o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const l = o.target.options, h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          i.setValue(e, {
            value: h
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: s = null,
    intent: i,
    linkService: r
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${i}`);
    for (const [l, h] of Object.entries(a))
      if (h != null)
        switch (l) {
          case "class":
            h.length && t.setAttribute(l, h.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", h);
            break;
          case "style":
            Object.assign(t.style, h);
            break;
          case "textContent":
            t.textContent = h;
            break;
          default:
            (!o || l !== "href" && l !== "newWindow") && t.setAttribute(l, h);
        }
    o && r.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
  }
  static render(t) {
    var f, g;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, r = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: a,
      element: i,
      intent: r,
      linkService: s
    });
    const o = r !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const m = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = m;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const m = document.createTextNode(i.value);
        a.append(m), o && Eo.shouldBuildText(i.name) && h.push(m);
      }
      return {
        textDivs: h
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [m, A, y] = c.at(-1);
      if (A + 1 === m.children.length) {
        c.pop();
        continue;
      }
      const w = m.children[++c.at(-1)[1]];
      if (w === null)
        continue;
      const {
        name: _
      } = w;
      if (_ === "#text") {
        const E = document.createTextNode(w.value);
        h.push(E), y.append(E);
        continue;
      }
      const v = (f = w == null ? void 0 : w.attributes) != null && f.xmlns ? document.createElementNS(w.attributes.xmlns, _) : document.createElement(_);
      if (y.append(v), w.attributes && this.setAttributes({
        html: v,
        element: w,
        storage: e,
        intent: r,
        linkService: s
      }), ((g = w.children) == null ? void 0 : g.length) > 0)
        c.push([w, -1, v]);
      else if (w.value) {
        const E = document.createTextNode(w.value);
        o && Eo.shouldBuildText(_) && h.push(E), v.append(E);
      }
    }
    for (const m of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      m.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Bh = 1e3, iA = 9, or = /* @__PURE__ */ new WeakSet();
function Li(d) {
  return {
    width: d[2] - d[0],
    height: d[3] - d[1]
  };
}
class nA {
  static create(t) {
    switch (t.data.annotationType) {
      case gt.LINK:
        return new kg(t);
      case gt.TEXT:
        return new rA(t);
      case gt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new aA(t);
          case "Btn":
            return t.data.radioButton ? new Ig(t) : t.data.checkBox ? new lA(t) : new hA(t);
          case "Ch":
            return new cA(t);
          case "Sig":
            return new oA(t);
        }
        return new lr(t);
      case gt.POPUP:
        return new uf(t);
      case gt.FREETEXT:
        return new Hg(t);
      case gt.LINE:
        return new uA(t);
      case gt.SQUARE:
        return new fA(t);
      case gt.CIRCLE:
        return new pA(t);
      case gt.POLYLINE:
        return new Bg(t);
      case gt.CARET:
        return new mA(t);
      case gt.INK:
        return new Jf(t);
      case gt.POLYGON:
        return new gA(t);
      case gt.HIGHLIGHT:
        return new $g(t);
      case gt.UNDERLINE:
        return new bA(t);
      case gt.SQUIGGLY:
        return new AA(t);
      case gt.STRIKEOUT:
        return new yA(t);
      case gt.STAMP:
        return new Gg(t);
      case gt.FILEATTACHMENT:
        return new _A(t);
      default:
        return new dt(t);
    }
  }
}
var Pn, la, ha, Ol, df;
const sp = class sp {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    u(this, Ol);
    u(this, Pn, null);
    u(this, la, !1);
    u(this, ha, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: s
  }) {
    return !!(t != null && t.str || e != null && e.str || s != null && s.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return sp._hasPopupData(this.data);
  }
  updateEdited(t) {
    var s;
    if (!this.container)
      return;
    n(this, Pn) || p(this, Pn, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && b(this, Ol, df).call(this, e), (s = n(this, ha)) == null || s.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    n(this, Pn) && (b(this, Ol, df).call(this, n(this, Pn).rect), (t = n(this, ha)) == null || t.popup.resetEdited(), p(this, Pn, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), this instanceof lr || (r.tabIndex = Bh);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex++, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof uf) {
      const {
        rotation: y
      } = e;
      return !e.hasOwnCanvas && y !== 0 && this.setRotation(y, r), r;
    }
    const {
      width: o,
      height: l
    } = Li(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const y = e.borderStyle.horizontalCornerRadius, w = e.borderStyle.verticalCornerRadius;
      if (y > 0 || w > 0) {
        const v = `calc(${y}px * var(--scale-factor)) / calc(${w}px * var(--scale-factor))`;
        a.borderRadius = v;
      } else if (this instanceof Ig) {
        const v = `calc(${o}px * var(--scale-factor)) / calc(${l}px * var(--scale-factor))`;
        a.borderRadius = v;
      }
      switch (e.borderStyle.style) {
        case Za.SOLID:
          a.borderStyle = "solid";
          break;
        case Za.DASHED:
          a.borderStyle = "dashed";
          break;
        case Za.BEVELED:
          $("Unimplemented border style: beveled");
          break;
        case Za.INSET:
          $("Unimplemented border style: inset");
          break;
        case Za.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const _ = e.borderColor || null;
      _ ? (p(this, la, !0), a.borderColor = I.makeHexColor(_[0] | 0, _[1] | 0, _[2] | 0)) : a.borderWidth = 0;
    }
    const h = I.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: f,
      pageX: g,
      pageY: m
    } = i.rawDims;
    a.left = `${100 * (h[0] - g) / c}%`, a.top = `${100 * (h[1] - m) / f}%`;
    const {
      rotation: A
    } = e;
    return e.hasOwnCanvas || A === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * l / f}%`) : this.setRotation(A, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: r,
      height: a
    } = Li(this.data.rect);
    let o, l;
    t % 180 === 0 ? (o = 100 * r / s, l = 100 * a / i) : (o = 100 * a / s, l = 100 * r / i), e.style.width = `${o}%`, e.style.height = `${l}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const r = i.detail[e], a = r[0], o = r.slice(1);
      i.target.style[s] = Ep[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: Ep[`${a}_rgb`](o)
      });
    };
    return U(this, "_commonActions", {
      display: (e) => {
        const {
          display: s
        } = e.detail, i = s % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: s === 1 || s === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: s
        } = e.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const s = e.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const r = t[i] || s[i];
      r == null || r(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [i, r] of Object.entries(e)) {
      const a = s[i];
      if (a) {
        const o = {
          detail: {
            [i]: r
          },
          target: t
        };
        a(o), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, s, i, r] = this.data.rect.map((y) => Math.fround(y));
    if (t.length === 8) {
      const [y, w, _, v] = t.subarray(2, 6);
      if (i === y && r === w && e === _ && s === v)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (n(this, la)) {
      const {
        borderColor: y,
        borderWidth: w
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${y}" stroke-width="${w}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = r - s, {
      svgFactory: c
    } = this, f = c.createElement("svg");
    f.classList.add("quadrilateralsContainer"), f.setAttribute("width", 0), f.setAttribute("height", 0);
    const g = c.createElement("defs");
    f.append(g);
    const m = c.createElement("clipPath"), A = `clippath_${this.data.id}`;
    m.setAttribute("id", A), m.setAttribute("clipPathUnits", "objectBoundingBox"), g.append(m);
    for (let y = 2, w = t.length; y < w; y += 8) {
      const _ = t[y], v = t[y + 1], E = t[y + 2], S = t[y + 3], x = c.createElement("rect"), T = (E - e) / l, C = (r - v) / h, M = (_ - E) / l, D = (v - S) / h;
      x.setAttribute("x", T), x.setAttribute("y", C), x.setAttribute("width", M), x.setAttribute("height", D), m.append(x), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${T}" y="${C}" width="${M}" height="${D}"/>`);
    }
    n(this, la) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(f), this.container.style.clipPath = `url(#${A})`;
  }
  _createPopup() {
    const {
      data: t
    } = this, e = p(this, ha, new uf({
      data: {
        color: t.color,
        titleObj: t.titleObj,
        modificationDate: t.modificationDate,
        contentsObj: t.contentsObj,
        richText: t.richText,
        parentRect: t.rect,
        borderStyle: 0,
        id: `popup_${t.id}`,
        rotation: t.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(e.render());
  }
  render() {
    Q("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: r,
          id: a,
          exportValues: o
        } of i) {
          if (r === -1 || a === e)
            continue;
          const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${a}"]`);
          if (h && !or.has(h)) {
            $(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          s.push({
            id: a,
            exportValue: l,
            domElement: h
          });
        }
      return s;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: r
      } = i, a = i.getAttribute("data-element-id");
      a !== e && or.has(i) && s.push({
        id: a,
        exportValue: r,
        domElement: i
      });
    }
    return s;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e
      });
    });
  }
};
Pn = new WeakMap(), la = new WeakMap(), ha = new WeakMap(), Ol = new WeakSet(), df = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: s,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  s == null || s.splice(0, 4, ...t);
  const {
    width: h,
    height: c
  } = Li(t);
  e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, i === 0 ? (e.width = `${100 * h / r}%`, e.height = `${100 * c / a}%`) : this.setRotation(i);
};
let dt = sp;
var Is, Ni, wd, Mg, vd, Lg;
class kg extends dt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    u(this, Is);
    u(this, wd);
    u(this, vd);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(i, e.action), r = !0) : e.attachment ? (b(this, wd, Mg).call(this, i, e.attachment, e.attachmentDest), r = !0) : e.setOCGState ? (b(this, vd, Lg).call(this, i, e.setOCGState), r = !0) : e.dest ? (this._bindLink(i, e.dest), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), r = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(i, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && this.container.append(i), this.container;
  }
  _bindLink(e, s) {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && b(this, Is, Ni).call(this);
  }
  _bindNamedAction(e, s) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), b(this, Is, Ni).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const r of Object.keys(s.actions)) {
      const a = i.get(r);
      a && (e[a] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: s.id,
            name: r
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), b(this, Is, Ni).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), b(this, Is, Ni).call(this), !this._fieldObjects) {
      $('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var f;
      i == null || i();
      const {
        fields: r,
        refs: a,
        include: o
      } = s, l = [];
      if (r.length !== 0 || a.length !== 0) {
        const g = new Set(a);
        for (const m of r) {
          const A = this._fieldObjects[m] || [];
          for (const {
            id: y
          } of A)
            g.add(y);
        }
        for (const m of Object.values(this._fieldObjects))
          for (const A of m)
            g.has(A.id) === o && l.push(A);
      } else
        for (const g of Object.values(this._fieldObjects))
          l.push(...g);
      const h = this.annotationStorage, c = [];
      for (const g of l) {
        const {
          id: m
        } = g;
        switch (c.push(m), g.type) {
          case "text": {
            const y = g.defaultValue || "";
            h.setValue(m, {
              value: y
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const y = g.defaultValue === g.exportValues;
            h.setValue(m, {
              value: y
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const y = g.defaultValue || "";
            h.setValue(m, {
              value: y
            });
            break;
          }
          default:
            continue;
        }
        const A = document.querySelector(`[data-element-id="${m}"]`);
        if (A) {
          if (!or.has(A)) {
            $(`_bindResetFormAction - element not allowed: ${m}`);
            continue;
          }
        } else
          continue;
        A.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((f = this.linkService.eventBus) == null || f.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: c,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
Is = new WeakSet(), Ni = function() {
  this.container.setAttribute("data-internal-link", "");
}, wd = new WeakSet(), Mg = function(e, s, i = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description && (e.title = s.description), e.onclick = () => {
    var r;
    return (r = this.downloadManager) == null || r.openOrDownloadData(s.content, s.filename, i), !1;
  }, b(this, Is, Ni).call(this);
}, vd = new WeakSet(), Lg = function(e, s) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), b(this, Is, Ni).call(this);
};
class rA extends dt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class lr extends dt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return qt.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, r) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(s, (a) => {
      var o;
      if (s === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (s === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      r && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, s, i) {
    var r, a, o;
    for (const [l, h] of s)
      (h === "Action" || (r = this.data.actions) != null && r[h]) && ((h === "Focus" || h === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, l, h, i), h === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : I.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || iA, r = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / (wu * i)) || 1, f = h / c;
      a = Math.min(i, l(f / wu));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / wu));
    }
    r.fontSize = `calc(${a}px * var(--scale-factor))`, r.color = I.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class aA extends lr {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = s), r.setValue(a.id, {
        [i]: s
      });
  }
  render() {
    var i, r;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let o = a.value || "";
      const l = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = a.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
      const c = {
        userValue: o,
        formattedValue: h,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), or.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = Bh, this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (g) => {
        t.setValue(e, {
          value: g.target.value
        }), this.setPropertyOnSiblings(s, "value", g.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (g) => {
        const m = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = m, c.formattedValue = null;
      });
      let f = (g) => {
        const {
          formattedValue: m
        } = c;
        m != null && (g.target.value = m), g.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (m) => {
          var y;
          if (c.focused)
            return;
          const {
            target: A
          } = m;
          c.userValue && (A.value = c.userValue), c.lastCommittedValue = A.value, c.commitKey = 1, (y = this.data.actions) != null && y.Focus || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (m) => {
          this.showElementAndHideCanvas(m.target);
          const A = {
            value(y) {
              c.userValue = y.detail.value ?? "", t.setValue(e, {
                value: c.userValue.toString()
              }), y.target.value = c.userValue;
            },
            formattedValue(y) {
              const {
                formattedValue: w
              } = y.detail;
              c.formattedValue = w, w != null && y.target !== document.activeElement && (y.target.value = w), t.setValue(e, {
                formattedValue: w
              });
            },
            selRange(y) {
              y.target.setSelectionRange(...y.detail.selRange);
            },
            charLimit: (y) => {
              var E;
              const {
                charLimit: w
              } = y.detail, {
                target: _
              } = y;
              if (w === 0) {
                _.removeAttribute("maxLength");
                return;
              }
              _.setAttribute("maxLength", w);
              let v = c.userValue;
              !v || v.length <= w || (v = v.slice(0, w), _.value = c.userValue = v, t.setValue(e, {
                value: v
              }), (E = this.linkService.eventBus) == null || E.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: v,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: _.selectionStart,
                  selEnd: _.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(A, m);
        }), s.addEventListener("keydown", (m) => {
          var w;
          c.commitKey = 1;
          let A = -1;
          if (m.key === "Escape" ? A = 0 : m.key === "Enter" && !this.data.multiLine ? A = 2 : m.key === "Tab" && (c.commitKey = 3), A === -1)
            return;
          const {
            value: y
          } = m.target;
          c.lastCommittedValue !== y && (c.lastCommittedValue = y, c.userValue = y, (w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: y,
              willCommit: !0,
              commitKey: A,
              selStart: m.target.selectionStart,
              selEnd: m.target.selectionEnd
            }
          }));
        });
        const g = f;
        f = null, s.addEventListener("blur", (m) => {
          var y, w;
          if (!c.focused || !m.relatedTarget)
            return;
          (y = this.data.actions) != null && y.Blur || (c.focused = !1);
          const {
            value: A
          } = m.target;
          c.userValue = A, c.lastCommittedValue !== A && ((w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: A,
              willCommit: !0,
              commitKey: c.commitKey,
              selStart: m.target.selectionStart,
              selEnd: m.target.selectionEnd
            }
          })), g(m);
        }), (r = this.data.actions) != null && r.Keystroke && s.addEventListener("beforeinput", (m) => {
          var x;
          c.lastCommittedValue = null;
          const {
            data: A,
            target: y
          } = m, {
            value: w,
            selectionStart: _,
            selectionEnd: v
          } = y;
          let E = _, S = v;
          switch (m.inputType) {
            case "deleteWordBackward": {
              const T = w.substring(0, _).match(/\w*[^\w]*$/);
              T && (E -= T[0].length);
              break;
            }
            case "deleteWordForward": {
              const T = w.substring(_).match(/^[^\w]*\w*/);
              T && (S += T[0].length);
              break;
            }
            case "deleteContentBackward":
              _ === v && (E -= 1);
              break;
            case "deleteContentForward":
              _ === v && (S += 1);
              break;
          }
          m.preventDefault(), (x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: w,
              change: A || "",
              willCommit: !1,
              selStart: E,
              selEnd: S
            }
          });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (m) => m.target.value);
      }
      if (f && s.addEventListener("blur", f), this.data.comb) {
        const m = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${m}px * var(--scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class oA extends lr {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class lA extends lr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(s, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return or.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = Bh, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s)) {
        const c = l && h.exportValue === e.exportValue;
        h.domElement && (h.domElement.checked = c), t.setValue(h.id, {
          value: c
        });
      }
      t.setValue(s, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", t.setValue(s, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class Ig extends lr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
      value: i
    })), i)
      for (const a of this._getElementsByName(e.fieldName, s))
        t.setValue(a.id, {
          value: !1
        });
    const r = document.createElement("input");
    if (or.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.tabIndex = Bh, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s))
        t.setValue(h.id, {
          value: !1
        });
      t.setValue(s, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (h) => {
            const c = a === h.detail.value;
            for (const f of this._getElementsByName(h.target.name)) {
              const g = c && f.id === s;
              f.domElement && (f.domElement.checked = g), t.setValue(f.id, {
                value: g
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class hA extends kg {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
}
class cA extends lr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    or.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Bh;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (c) => {
      const f = this.data.defaultFieldValue;
      for (const g of i.options)
        g.selected = g.value === f;
    });
    for (const c of this.data.options) {
      const f = document.createElement("option");
      f.textContent = c.displayValue, f.value = c.exportValue, s.value.includes(c.exportValue) && (f.setAttribute("selected", !0), r = !1), i.append(f);
    }
    let a = null;
    if (r) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", !0), c.setAttribute("selected", !0), i.prepend(c), a = () => {
        c.remove(), i.removeEventListener("input", a), a = null;
      }, i.addEventListener("input", a);
    }
    const o = (c) => {
      const f = c ? "value" : "textContent", {
        options: g,
        multiple: m
      } = i;
      return m ? Array.prototype.filter.call(g, (A) => A.selected).map((A) => A[f]) : g.selectedIndex === -1 ? null : g[g.selectedIndex][f];
    };
    let l = o(!1);
    const h = (c) => {
      const f = c.target.options;
      return Array.prototype.map.call(f, (g) => ({
        displayValue: g.textContent,
        exportValue: g.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const f = {
        value(g) {
          a == null || a();
          const m = g.detail.value, A = new Set(Array.isArray(m) ? m : [m]);
          for (const y of i.options)
            y.selected = A.has(y.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(g) {
          i.multiple = !0;
        },
        remove(g) {
          const m = i.options, A = g.detail.remove;
          m[A].selected = !1, i.remove(A), m.length > 0 && Array.prototype.findIndex.call(m, (w) => w.selected) === -1 && (m[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(g)
          }), l = o(!1);
        },
        clear(g) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(g) {
          const {
            index: m,
            displayValue: A,
            exportValue: y
          } = g.detail.insert, w = i.children[m], _ = document.createElement("option");
          _.textContent = A, _.value = y, w ? w.before(_) : i.append(_), t.setValue(e, {
            value: o(!0),
            items: h(g)
          }), l = o(!1);
        },
        items(g) {
          const {
            items: m
          } = g.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const A of m) {
            const {
              displayValue: y,
              exportValue: w
            } = A, _ = document.createElement("option");
            _.textContent = y, _.value = w, i.append(_);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(g)
          }), l = o(!1);
        },
        indices(g) {
          const m = new Set(g.detail.indices);
          for (const A of g.target.options)
            A.selected = m.has(A.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(g) {
          g.target.disabled = !g.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(f, c);
    }), i.addEventListener("input", (c) => {
      var m;
      const f = o(!0), g = o(!1);
      t.setValue(e, {
        value: f
      }), c.preventDefault(), (m = this.linkService.eventBus) == null || m.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: g,
          changeEx: f,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (c) => c.target.value)) : i.addEventListener("input", function(c) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class uf extends dt {
  constructor(t) {
    const {
      data: e,
      elements: s
    } = t;
    super(t, {
      isRenderable: dt._hasPopupData(e)
    }), this.elements = s, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new dA({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const s of this.elements)
      s.popup = t, s.container.ariaHasPopup = "dialog", e.push(s.data.id), s.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((s) => `${Vf}${s}`).join(",")), this.container;
  }
}
var ca, Sd, Ed, da, Rn, ot, Ds, ua, Hl, Bl, fa, Fs, Fe, Ns, $l, Os, Gl, kn, Mn, pa, rc, zl, ff, xd, Dg, Cd, Fg, Td, Ng, Pd, Og, ga, ac, ma, oc, Ul, pf;
class dA {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: l,
    rect: h,
    parentRect: c,
    open: f
  }) {
    u(this, pa);
    u(this, zl);
    u(this, xd);
    u(this, Cd);
    u(this, Td);
    u(this, Pd);
    u(this, ga);
    u(this, ma);
    u(this, Ul);
    u(this, ca, b(this, Td, Ng).bind(this));
    u(this, Sd, b(this, Ul, pf).bind(this));
    u(this, Ed, b(this, ma, oc).bind(this));
    u(this, da, b(this, ga, ac).bind(this));
    u(this, Rn, null);
    u(this, ot, null);
    u(this, Ds, null);
    u(this, ua, null);
    u(this, Hl, null);
    u(this, Bl, null);
    u(this, fa, null);
    u(this, Fs, !1);
    u(this, Fe, null);
    u(this, Ns, null);
    u(this, $l, null);
    u(this, Os, null);
    u(this, Gl, null);
    u(this, kn, null);
    u(this, Mn, !1);
    var g;
    p(this, ot, t), p(this, Gl, i), p(this, Ds, a), p(this, Os, o), p(this, Bl, l), p(this, Rn, e), p(this, $l, h), p(this, fa, c), p(this, Hl, s), p(this, ua, Xf.toDateObject(r)), this.trigger = s.flatMap((m) => m.getElementsToTriggerPopup());
    for (const m of this.trigger)
      m.addEventListener("click", n(this, da)), m.addEventListener("mouseenter", n(this, Ed)), m.addEventListener("mouseleave", n(this, Sd)), m.classList.add("popupTriggerArea");
    for (const m of s)
      (g = m.container) == null || g.addEventListener("keydown", n(this, ca));
    n(this, ot).hidden = !0, f && b(this, ga, ac).call(this);
  }
  render() {
    if (n(this, Fe))
      return;
    const t = p(this, Fe, document.createElement("div"));
    if (t.className = "popup", n(this, Rn)) {
      const r = t.style.outlineColor = I.makeHexColor(...n(this, Rn));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)` : t.style.backgroundColor = I.makeHexColor(...n(this, Rn).map((o) => Math.floor(0.7 * (255 - o) + o)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const s = document.createElement("h1");
    if (e.append(s), {
      dir: s.dir,
      str: s.textContent
    } = n(this, Gl), t.append(e), n(this, ua)) {
      const r = document.createElement("span");
      r.classList.add("popupDate"), r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: n(this, ua).valueOf()
      })), e.append(r);
    }
    const i = n(this, pa, rc);
    if (i)
      Rg.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const r = this._formatContents(n(this, Ds));
      t.append(r);
    }
    n(this, ot).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const s = document.createElement("p");
    s.classList.add("popupContent"), s.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let r = 0, a = i.length; r < a; ++r) {
      const o = i[r];
      s.append(document.createTextNode(o)), r < a - 1 && s.append(document.createElement("br"));
    }
    return s;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    var s;
    n(this, kn) || p(this, kn, {
      contentsObj: n(this, Ds),
      richText: n(this, Os)
    }), t && p(this, Ns, null), e && (p(this, Os, b(this, Cd, Fg).call(this, e)), p(this, Ds, null)), (s = n(this, Fe)) == null || s.remove(), p(this, Fe, null);
  }
  resetEdited() {
    var t;
    n(this, kn) && ({
      contentsObj: zt(this, Ds)._,
      richText: zt(this, Os)._
    } = n(this, kn), p(this, kn, null), (t = n(this, Fe)) == null || t.remove(), p(this, Fe, null), p(this, Ns, null));
  }
  forceHide() {
    p(this, Mn, this.isVisible), n(this, Mn) && (n(this, ot).hidden = !0);
  }
  maybeShow() {
    n(this, Mn) && (n(this, Fe) || b(this, ma, oc).call(this), p(this, Mn, !1), n(this, ot).hidden = !1);
  }
  get isVisible() {
    return n(this, ot).hidden === !1;
  }
}
ca = new WeakMap(), Sd = new WeakMap(), Ed = new WeakMap(), da = new WeakMap(), Rn = new WeakMap(), ot = new WeakMap(), Ds = new WeakMap(), ua = new WeakMap(), Hl = new WeakMap(), Bl = new WeakMap(), fa = new WeakMap(), Fs = new WeakMap(), Fe = new WeakMap(), Ns = new WeakMap(), $l = new WeakMap(), Os = new WeakMap(), Gl = new WeakMap(), kn = new WeakMap(), Mn = new WeakMap(), pa = new WeakSet(), rc = function() {
  const t = n(this, Os), e = n(this, Ds);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, Os).html || null;
}, zl = new WeakSet(), ff = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, pa, rc)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, xd = new WeakSet(), Dg = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, pa, rc)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, Cd = new WeakSet(), Fg = function(t) {
  const e = [], s = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: n(this, xd, Dg),
      fontSize: n(this, zl, ff) ? `calc(${n(this, zl, ff)}px * var(--scale-factor))` : ""
    }
  };
  for (const r of t.split(`
`))
    e.push({
      name: "span",
      value: r,
      attributes: i
    });
  return s;
}, Td = new WeakSet(), Ng = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, Fs)) && b(this, ga, ac).call(this);
}, Pd = new WeakSet(), Og = function() {
  if (n(this, Ns) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: s,
        pageX: i,
        pageY: r
      }
    }
  } = n(this, Bl);
  let a = !!n(this, fa), o = a ? n(this, fa) : n(this, $l);
  for (const A of n(this, Hl))
    if (!o || I.intersect(A.data.rect, o) !== null) {
      o = A.data.rect, a = !0;
      break;
    }
  const l = I.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, f = l[0] + c, g = l[1];
  p(this, Ns, [100 * (f - i) / e, 100 * (g - r) / s]);
  const {
    style: m
  } = n(this, ot);
  m.left = `${n(this, Ns)[0]}%`, m.top = `${n(this, Ns)[1]}%`;
}, ga = new WeakSet(), ac = function() {
  p(this, Fs, !n(this, Fs)), n(this, Fs) ? (b(this, ma, oc).call(this), n(this, ot).addEventListener("click", n(this, da)), n(this, ot).addEventListener("keydown", n(this, ca))) : (b(this, Ul, pf).call(this), n(this, ot).removeEventListener("click", n(this, da)), n(this, ot).removeEventListener("keydown", n(this, ca)));
}, ma = new WeakSet(), oc = function() {
  n(this, Fe) || this.render(), this.isVisible ? n(this, Fs) && n(this, ot).classList.add("focused") : (b(this, Pd, Og).call(this), n(this, ot).hidden = !1, n(this, ot).style.zIndex = parseInt(n(this, ot).style.zIndex) + 1e3);
}, Ul = new WeakSet(), pf = function() {
  n(this, ot).classList.remove("focused"), !(n(this, Fs) || !this.isVisible) && (n(this, ot).hidden = !0, n(this, ot).style.zIndex = parseInt(n(this, ot).style.zIndex) - 1e3);
};
class Hg extends dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = B.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var Vl;
class uA extends dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    u(this, Vl, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Li(e.rect), r = this.svgFactory.create(s, i, !0), a = p(this, Vl, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Vl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Vl = new WeakMap();
var jl;
class fA extends dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    u(this, jl, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Li(e.rect), r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = p(this, jl, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, jl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
jl = new WeakMap();
var Wl;
class pA extends dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    u(this, Wl, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Li(e.rect), r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = p(this, Wl, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Wl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Wl = new WeakMap();
var Xl;
class Bg extends dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    u(this, Xl, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: i,
        popupRef: r
      }
    } = this;
    if (!s)
      return this.container;
    const {
      width: a,
      height: o
    } = Li(e), l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let f = 0, g = s.length; f < g; f += 2) {
      const m = s[f] - e[0], A = e[3] - s[f + 1];
      h.push(`${m},${A}`);
    }
    h = h.join(" ");
    const c = p(this, Xl, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Xl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Xl = new WeakMap();
class gA extends Bg {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class mA extends dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var ql, Ln, Yl, gf;
class Jf extends dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    u(this, Yl);
    u(this, ql, null);
    u(this, Ln, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? B.HIGHLIGHT : B.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: s,
        inkLists: i,
        borderStyle: r,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: l,
      height: h
    } = b(this, Yl, gf).call(this, s, e), c = this.svgFactory.create(l, h, !0), f = p(this, ql, this.svgFactory.createElement("svg:g"));
    c.append(f), f.setAttribute("stroke-width", r.width || 1), f.setAttribute("stroke-linecap", "round"), f.setAttribute("stroke-linejoin", "round"), f.setAttribute("stroke-miterlimit", 10), f.setAttribute("stroke", "transparent"), f.setAttribute("fill", "transparent"), f.setAttribute("transform", o);
    for (let g = 0, m = i.length; g < m; g++) {
      const A = this.svgFactory.createElement(this.svgElementName);
      n(this, Ln).push(A), A.setAttribute("points", i[g].join(",")), f.append(A);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: r
    } = e, a = n(this, ql);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = n(this, Ln).length; o < l; o++)
        n(this, Ln)[o].setAttribute("points", i[o].join(","));
    if (r) {
      const {
        transform: o,
        width: l,
        height: h
      } = b(this, Yl, gf).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, Ln);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ql = new WeakMap(), Ln = new WeakMap(), Yl = new WeakSet(), gf = function(e, s) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-s[0]},${s[1]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-s[2]},${s[1]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-s[2]},${s[3]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    default:
      return {
        transform: `translate(${-s[0]},${s[3]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
  }
};
class $g extends dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = B.HIGHLIGHT;
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
  }
}
class bA extends dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class AA extends dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class yA extends dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class Gg extends dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = B.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var Kl, Ql, mf;
class _A extends dt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    u(this, Ql);
    u(this, Kl, null);
    const {
      file: s
    } = this.data;
    this.filename = s.filename, this.content = s.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...s
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: s
    } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", b(this, Ql, mf).bind(this)), p(this, Kl, i);
    const {
      isMac: r
    } = qt.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && b(this, Ql, mf).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return n(this, Kl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Kl = new WeakMap(), Ql = new WeakSet(), mf = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var Jl, In, Dn, Zl, Rd, zg, th, bf;
class wA {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: r,
    viewport: a,
    structTreeLayer: o
  }) {
    u(this, Rd);
    u(this, th);
    u(this, Jl, null);
    u(this, In, null);
    u(this, Dn, /* @__PURE__ */ new Map());
    u(this, Zl, null);
    this.div = t, p(this, Jl, e), p(this, In, s), p(this, Zl, o || null), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return n(this, Dn).size > 0;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, s = this.div;
    rr(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), r = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Qf(),
      annotationStorage: t.annotationStorage || new Yf(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const l = o.annotationType === gt.POPUP;
      if (l) {
        const f = i.get(o.id);
        if (!f)
          continue;
        r.elements = f;
      } else {
        const {
          width: f,
          height: g
        } = Li(o.rect);
        if (f <= 0 || g <= 0)
          continue;
      }
      r.data = o;
      const h = nA.create(r);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const f = i.get(o.popupRef);
        f ? f.push(h) : i.set(o.popupRef, [h]);
      }
      const c = h.render();
      o.hidden && (c.style.visibility = "hidden"), await b(this, Rd, zg).call(this, c, o.id), h._isEditable && (n(this, Dn).set(h.data.id, h), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(h));
    }
    b(this, th, bf).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, rr(e, {
      rotation: t.rotation
    }), b(this, th, bf).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(n(this, Dn).values());
  }
  getEditableAnnotation(t) {
    return n(this, Dn).get(t);
  }
}
Jl = new WeakMap(), In = new WeakMap(), Dn = new WeakMap(), Zl = new WeakMap(), Rd = new WeakSet(), zg = async function(t, e) {
  var a, o;
  const s = t.firstChild || t, i = s.id = `${Vf}${e}`, r = await ((a = n(this, Zl)) == null ? void 0 : a.getAriaAttributes(i));
  if (r)
    for (const [l, h] of r)
      s.setAttribute(l, h);
  this.div.append(t), (o = n(this, Jl)) == null || o.moveElementInDOM(this.div, t, s, !1);
}, th = new WeakSet(), bf = function() {
  if (!n(this, In))
    return;
  const t = this.div;
  for (const [e, s] of n(this, In)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: r
    } = i;
    r ? r.nodeName === "CANVAS" ? r.replaceWith(s) : r.classList.contains("annotationContent") ? r.after(s) : r.before(s) : i.append(s);
  }
  n(this, In).clear();
};
const Uh = /\r\n?|\n/g;
var Ne, le, eh, Fn, he, kd, Ug, Md, Vg, Ld, jg, ba, lc, Aa, hc, ya, cc, Id, Wg, sh, yf, Dd, Xg;
const K = class K extends rt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    u(this, kd);
    u(this, Md);
    u(this, Ld);
    u(this, ba);
    u(this, ya);
    u(this, Id);
    u(this, Dd);
    u(this, Ne, void 0);
    u(this, le, "");
    u(this, eh, `${this.id}-editor`);
    u(this, Fn, null);
    u(this, he, void 0);
    p(this, Ne, e.color || K._defaultColor || rt._defaultLineColor), p(this, he, e.fontSize || K._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = K.prototype, s = (a) => a.isEmpty(), i = ar.TRANSLATE_SMALL, r = ar.TRANSLATE_BIG;
    return U(this, "_keyboardManager", new Hh([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-r, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [r, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -r],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, r],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    rt.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case j.FREETEXT_SIZE:
        K._defaultFontSize = s;
        break;
      case j.FREETEXT_COLOR:
        K._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case j.FREETEXT_SIZE:
        b(this, kd, Ug).call(this, s);
        break;
      case j.FREETEXT_COLOR:
        b(this, Md, Vg).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[j.FREETEXT_SIZE, K._defaultFontSize], [j.FREETEXT_COLOR, K._defaultColor || rt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[j.FREETEXT_SIZE, n(this, he)], [j.FREETEXT_COLOR, n(this, Ne)]];
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-K._internalPadding * e, -(K._internalPadding + n(this, he)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(B.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), p(this, Fn, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, Fn));
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    });
  }
  disableEditMode() {
    var e;
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", n(this, eh)), this._isDraggable = !0, (e = n(this, Fn)) == null || e.abort(), p(this, Fn, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(e) {
    var s;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (s = this._initialOptions) != null && s.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = n(this, le), s = p(this, le, b(this, Ld, jg).call(this).trimEnd());
    if (e === s)
      return;
    const i = (r) => {
      if (p(this, le, r), !r) {
        this.remove();
        return;
      }
      b(this, ya, cc).call(this), this._uiManager.rebuild(this), b(this, ba, lc).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), b(this, ba, lc).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    K._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this.width && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, eh)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${n(this, he)}px * var(--scale-factor))`, i.color = n(this, Ne), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), wc(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [c, f] = this.pageDimensions, [g, m] = this.pageTranslation;
        let A, y;
        switch (this.rotation) {
          case 0:
            A = e + (o[0] - g) / c, y = s + this.height - (o[1] - m) / f;
            break;
          case 90:
            A = e + (o[0] - g) / c, y = s - (o[1] - m) / f, [l, h] = [h, -l];
            break;
          case 180:
            A = e - this.width + (o[0] - g) / c, y = s - (o[1] - m) / f, [l, h] = [-l, -h];
            break;
          case 270:
            A = e + (o[0] - g - this.height * f) / c, y = s + (o[1] - m - this.width * c) / f, [l, h] = [-h, l];
            break;
        }
        this.setAt(A * r, y * a, l, h);
      } else
        this.setAt(e * r, s * a, this.width * r, this.height * a);
      b(this, ya, cc).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var A, y, w;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const r = b(A = K, sh, yf).call(A, s.getData("text") || "").replaceAll(Uh, `
`);
    if (!r)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: h
    } = o, c = [], f = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const _ = l.parentElement;
      if (f.push(l.nodeValue.slice(h).replaceAll(Uh, "")), _ !== this.editorDiv) {
        let v = c;
        for (const E of this.editorDiv.childNodes) {
          if (E === _) {
            v = f;
            continue;
          }
          v.push(b(y = K, Aa, hc).call(y, E));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(Uh, ""));
    } else if (l === this.editorDiv) {
      let _ = c, v = 0;
      for (const E of this.editorDiv.childNodes)
        v++ === h && (_ = f), _.push(b(w = K, Aa, hc).call(w, E));
    }
    p(this, le, `${c.join(`
`)}${r}${f.join(`
`)}`), b(this, ya, cc).call(this);
    const g = new Range();
    let m = c.reduce((_, v) => _ + v.length, 0);
    for (const {
      firstChild: _
    } of this.editorDiv.childNodes)
      if (_.nodeType === Node.TEXT_NODE) {
        const v = _.nodeValue.length;
        if (m <= v) {
          g.setStart(_, m), g.setEnd(_, m);
          break;
        }
        m -= v;
      }
    a.removeAllRanges(), a.addRange(g);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let r = null;
    if (e instanceof Hg) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: c,
          rotation: f,
          id: g,
          popupRef: m
        },
        textContent: A,
        textPosition: y,
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = e;
      if (!A || A.length === 0)
        return null;
      r = e = {
        annotationType: B.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: A.join(`
`),
        position: y,
        pageIndex: w - 1,
        rect: c.slice(0),
        rotation: f,
        id: g,
        deleted: !1,
        popupRef: m
      };
    }
    const a = await super.deserialize(e, s, i);
    return p(a, he, e.fontSize), p(a, Ne, I.makeHexColor(...e.color)), p(a, le, b(o = K, sh, yf).call(o, e.value)), a.annotationElementId = e.id || null, a._initialData = r, a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = K._internalPadding * this.parentScale, i = this.getRect(s, s), r = rt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : n(this, Ne)), a = {
      annotationType: B.FREETEXT,
      color: r,
      fontSize: n(this, he),
      value: b(this, Id, Wg).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? a : this.annotationElementId && !b(this, Dd, Xg).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${n(this, he)}px * var(--scale-factor))`, i.color = n(this, Ne), s.replaceChildren();
    for (const a of n(this, le).split(`
`)) {
      const o = document.createElement("div");
      o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
    }
    const r = K._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(r, r),
      popupContent: n(this, le)
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
Ne = new WeakMap(), le = new WeakMap(), eh = new WeakMap(), Fn = new WeakMap(), he = new WeakMap(), kd = new WeakSet(), Ug = function(e) {
  const s = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--scale-factor))`, this.translate(0, -(r - n(this, he)) * this.parentScale), p(this, he, r), b(this, ba, lc).call(this);
  }, i = n(this, he);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: j.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Md = new WeakSet(), Vg = function(e) {
  const s = (r) => {
    p(this, Ne, this.editorDiv.style.color = r);
  }, i = n(this, Ne);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: j.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Ld = new WeakSet(), jg = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(b(i = K, Aa, hc).call(i, r)), s = r);
  return e.join(`
`);
}, ba = new WeakSet(), lc = function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a
    } = this, o = a.style.display, l = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, Aa = new WeakSet(), hc = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Uh, "");
}, ya = new WeakSet(), cc = function() {
  if (this.editorDiv.replaceChildren(), !!n(this, le))
    for (const e of n(this, le).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, Id = new WeakSet(), Wg = function() {
  return n(this, le).replaceAll(" ", " ");
}, sh = new WeakSet(), yf = function(e) {
  return e.replaceAll(" ", " ");
}, Dd = new WeakSet(), Xg = function(e) {
  const {
    value: s,
    fontSize: i,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, u(K, Aa), u(K, sh), F(K, "_freeTextDefaultContent", ""), F(K, "_internalPadding", 0), F(K, "_defaultColor", null), F(K, "_defaultFontSize", 10), F(K, "_type", "freetext"), F(K, "_editorType", B.FREETEXT);
let Af = K;
class P {
  toSVGPath() {
    Q("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    Q("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    Q("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o] * i, a[o + 1] = s + t[o + 1] * r;
    return a;
  }
  static _rescaleAndSwap(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o + 1] * i, a[o + 1] = s + t[o] * r;
    return a;
  }
  static _translate(t, e, s, i) {
    i || (i = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2)
      i[r] = e + t[r], i[r + 1] = s + t[r + 1];
    return i;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, s, i, r) {
    switch (r) {
      case 90:
        return [1 - e / s, t / i];
      case 180:
        return [1 - t / s, 1 - e / i];
      case 270:
        return [e / s, 1 - t / i];
      default:
        return [t / s, e / i];
    }
  }
  static _normalizePagePoint(t, e, s) {
    switch (s) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t, e, s, i, r, a) {
    return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + r) / 6, (5 * i + a) / 6, (s + r) / 2, (i + a) / 2];
  }
}
F(P, "PRECISION", 1e-4);
var ce, Oe, _a, wa, rs, z, Nn, On, ih, nh, va, Sa, yi, rh, Fd, Nd, Hn, po, Od, qg, Hd, Yg, Bd, Kg, $d, Qg, Gd, Jg, zd, Zg;
const As = class As {
  constructor({
    x: t,
    y: e
  }, s, i, r, a, o = 0) {
    u(this, Hn);
    u(this, Od);
    u(this, Hd);
    u(this, Bd);
    u(this, $d);
    u(this, Gd);
    u(this, zd);
    u(this, ce, void 0);
    u(this, Oe, []);
    u(this, _a, void 0);
    u(this, wa, void 0);
    u(this, rs, []);
    u(this, z, new Float32Array(18));
    u(this, Nn, void 0);
    u(this, On, void 0);
    u(this, ih, void 0);
    u(this, nh, void 0);
    u(this, va, void 0);
    u(this, Sa, void 0);
    u(this, yi, []);
    p(this, ce, s), p(this, Sa, r * i), p(this, wa, a), n(this, z).set([NaN, NaN, NaN, NaN, t, e], 6), p(this, _a, o), p(this, nh, n(As, rh) * i), p(this, ih, n(As, Nd) * i), p(this, va, i), n(this, yi).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, z)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var D;
    p(this, Nn, t), p(this, On, e);
    const [s, i, r, a] = n(this, ce);
    let [o, l, h, c] = n(this, z).subarray(8, 12);
    const f = t - h, g = e - c, m = Math.hypot(f, g);
    if (m < n(this, ih))
      return !1;
    const A = m - n(this, nh), y = A / m, w = y * f, _ = y * g;
    let v = o, E = l;
    o = h, l = c, h += w, c += _, (D = n(this, yi)) == null || D.push(t, e);
    const S = -_ / A, x = w / A, T = S * n(this, Sa), C = x * n(this, Sa);
    return n(this, z).set(n(this, z).subarray(2, 8), 0), n(this, z).set([h + T, c + C], 4), n(this, z).set(n(this, z).subarray(14, 18), 12), n(this, z).set([h - T, c - C], 16), isNaN(n(this, z)[6]) ? (n(this, rs).length === 0 && (n(this, z).set([o + T, l + C], 2), n(this, rs).push(NaN, NaN, NaN, NaN, (o + T - s) / r, (l + C - i) / a), n(this, z).set([o - T, l - C], 14), n(this, Oe).push(NaN, NaN, NaN, NaN, (o - T - s) / r, (l - C - i) / a)), n(this, z).set([v, E, o, l, h, c], 6), !this.isEmpty()) : (n(this, z).set([v, E, o, l, h, c], 6), Math.abs(Math.atan2(E - l, v - o) - Math.atan2(_, w)) < Math.PI / 2 ? ([o, l, h, c] = n(this, z).subarray(2, 6), n(this, rs).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [o, l, v, E] = n(this, z).subarray(14, 18), n(this, Oe).push(NaN, NaN, NaN, NaN, ((v + o) / 2 - s) / r, ((E + l) / 2 - i) / a), !0) : ([v, E, o, l, h, c] = n(this, z).subarray(0, 6), n(this, rs).push(((v + 5 * o) / 6 - s) / r, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [h, c, o, l, v, E] = n(this, z).subarray(12, 18), n(this, Oe).push(((v + 5 * o) / 6 - s) / r, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = n(this, rs), e = n(this, Oe);
    if (isNaN(n(this, z)[6]) && !this.isEmpty())
      return b(this, Od, qg).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    b(this, Bd, Kg).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return b(this, Hd, Yg).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new tm(t, e, s, i, r, a);
  }
  getOutlines() {
    var f;
    const t = n(this, rs), e = n(this, Oe), s = n(this, z), [i, r, a, o] = n(this, ce), l = new Float32Array((((f = n(this, yi)) == null ? void 0 : f.length) ?? 0) + 2);
    for (let g = 0, m = l.length - 2; g < m; g += 2)
      l[g] = (n(this, yi)[g] - i) / a, l[g + 1] = (n(this, yi)[g + 1] - r) / o;
    if (l[l.length - 2] = (n(this, Nn) - i) / a, l[l.length - 1] = (n(this, On) - r) / o, isNaN(s[6]) && !this.isEmpty())
      return b(this, $d, Qg).call(this, l);
    const h = new Float32Array(n(this, rs).length + 24 + n(this, Oe).length);
    let c = t.length;
    for (let g = 0; g < c; g += 2) {
      if (isNaN(t[g])) {
        h[g] = h[g + 1] = NaN;
        continue;
      }
      h[g] = t[g], h[g + 1] = t[g + 1];
    }
    c = b(this, zd, Zg).call(this, h, c);
    for (let g = e.length - 6; g >= 6; g -= 6)
      for (let m = 0; m < 6; m += 2) {
        if (isNaN(e[g + m])) {
          h[c] = h[c + 1] = NaN, c += 2;
          continue;
        }
        h[c] = e[g + m], h[c + 1] = e[g + m + 1], c += 2;
      }
    return b(this, Gd, Jg).call(this, h, c), this.newFreeDrawOutline(h, l, n(this, ce), n(this, va), n(this, _a), n(this, wa));
  }
};
ce = new WeakMap(), Oe = new WeakMap(), _a = new WeakMap(), wa = new WeakMap(), rs = new WeakMap(), z = new WeakMap(), Nn = new WeakMap(), On = new WeakMap(), ih = new WeakMap(), nh = new WeakMap(), va = new WeakMap(), Sa = new WeakMap(), yi = new WeakMap(), rh = new WeakMap(), Fd = new WeakMap(), Nd = new WeakMap(), Hn = new WeakSet(), po = function() {
  const t = n(this, z).subarray(4, 6), e = n(this, z).subarray(16, 18), [s, i, r, a] = n(this, ce);
  return [(n(this, Nn) + (t[0] - e[0]) / 2 - s) / r, (n(this, On) + (t[1] - e[1]) / 2 - i) / a, (n(this, Nn) + (e[0] - t[0]) / 2 - s) / r, (n(this, On) + (e[1] - t[1]) / 2 - i) / a];
}, Od = new WeakSet(), qg = function() {
  const [t, e, s, i] = n(this, ce), [r, a, o, l] = b(this, Hn, po).call(this);
  return `M${(n(this, z)[2] - t) / s} ${(n(this, z)[3] - e) / i} L${(n(this, z)[4] - t) / s} ${(n(this, z)[5] - e) / i} L${r} ${a} L${o} ${l} L${(n(this, z)[16] - t) / s} ${(n(this, z)[17] - e) / i} L${(n(this, z)[14] - t) / s} ${(n(this, z)[15] - e) / i} Z`;
}, Hd = new WeakSet(), Yg = function(t) {
  const e = n(this, Oe);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Bd = new WeakSet(), Kg = function(t) {
  const [e, s, i, r] = n(this, ce), a = n(this, z).subarray(4, 6), o = n(this, z).subarray(16, 18), [l, h, c, f] = b(this, Hn, po).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / r} L${l} ${h} L${c} ${f} L${(o[0] - e) / i} ${(o[1] - s) / r}`);
}, $d = new WeakSet(), Qg = function(t) {
  const e = n(this, z), [s, i, r, a] = n(this, ce), [o, l, h, c] = b(this, Hn, po).call(this), f = new Float32Array(36);
  return f.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - i) / a], 0), this.newFreeDrawOutline(f, t, n(this, ce), n(this, va), n(this, _a), n(this, wa));
}, Gd = new WeakSet(), Jg = function(t, e) {
  const s = n(this, Oe);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, zd = new WeakSet(), Zg = function(t, e) {
  const s = n(this, z).subarray(4, 6), i = n(this, z).subarray(16, 18), [r, a, o, l] = n(this, ce), [h, c, f, g] = b(this, Hn, po).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, f, g, NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l], e), e += 24;
}, u(As, rh, 8), u(As, Fd, 2), u(As, Nd, n(As, rh) + n(As, Fd));
let Ec = As;
var Ea, Bn, Hs, ah, de, oh, ct, Ud, em;
class tm extends P {
  constructor(e, s, i, r, a, o) {
    super();
    u(this, Ud);
    u(this, Ea, void 0);
    u(this, Bn, new Float32Array(4));
    u(this, Hs, void 0);
    u(this, ah, void 0);
    u(this, de, void 0);
    u(this, oh, void 0);
    u(this, ct, void 0);
    p(this, ct, e), p(this, de, s), p(this, Ea, i), p(this, oh, r), p(this, Hs, a), p(this, ah, o), this.lastPoint = [NaN, NaN], b(this, Ud, em).call(this, o);
    const [l, h, c, f] = n(this, Bn);
    for (let g = 0, m = e.length; g < m; g += 2)
      e[g] = (e[g] - l) / c, e[g + 1] = (e[g + 1] - h) / f;
    for (let g = 0, m = s.length; g < m; g += 2)
      s[g] = (s[g] - l) / c, s[g + 1] = (s[g + 1] - h) / f;
  }
  toSVGPath() {
    const e = [`M${n(this, ct)[4]} ${n(this, ct)[5]}`];
    for (let s = 6, i = n(this, ct).length; s < i; s += 6) {
      if (isNaN(n(this, ct)[s])) {
        e.push(`L${n(this, ct)[s + 4]} ${n(this, ct)[s + 5]}`);
        continue;
      }
      e.push(`C${n(this, ct)[s]} ${n(this, ct)[s + 1]} ${n(this, ct)[s + 2]} ${n(this, ct)[s + 3]} ${n(this, ct)[s + 4]} ${n(this, ct)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = i - e, l = r - s;
    let h, c;
    switch (a) {
      case 0:
        h = P._rescale(n(this, ct), e, r, o, -l), c = P._rescale(n(this, de), e, r, o, -l);
        break;
      case 90:
        h = P._rescaleAndSwap(n(this, ct), e, s, o, l), c = P._rescaleAndSwap(n(this, de), e, s, o, l);
        break;
      case 180:
        h = P._rescale(n(this, ct), i, s, -o, l), c = P._rescale(n(this, de), i, s, -o, l);
        break;
      case 270:
        h = P._rescaleAndSwap(n(this, ct), i, r, -o, -l), c = P._rescaleAndSwap(n(this, de), i, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(c)]
    };
  }
  get box() {
    return n(this, Bn);
  }
  newOutliner(e, s, i, r, a, o = 0) {
    return new Ec(e, s, i, r, a, o);
  }
  getNewOutline(e, s) {
    const [i, r, a, o] = n(this, Bn), [l, h, c, f] = n(this, Ea), g = a * c, m = o * f, A = i * c + l, y = r * f + h, w = this.newOutliner({
      x: n(this, de)[0] * g + A,
      y: n(this, de)[1] * m + y
    }, n(this, Ea), n(this, oh), e, n(this, ah), s ?? n(this, Hs));
    for (let _ = 2; _ < n(this, de).length; _ += 2)
      w.add({
        x: n(this, de)[_] * g + A,
        y: n(this, de)[_ + 1] * m + y
      });
    return w.getOutlines();
  }
}
Ea = new WeakMap(), Bn = new WeakMap(), Hs = new WeakMap(), ah = new WeakMap(), de = new WeakMap(), oh = new WeakMap(), ct = new WeakMap(), Ud = new WeakSet(), em = function(e) {
  const s = n(this, ct);
  let i = s[4], r = s[5], a = i, o = r, l = i, h = r, c = i, f = r;
  const g = e ? Math.max : Math.min;
  for (let A = 6, y = s.length; A < y; A += 6) {
    if (isNaN(s[A]))
      a = Math.min(a, s[A + 4]), o = Math.min(o, s[A + 5]), l = Math.max(l, s[A + 4]), h = Math.max(h, s[A + 5]), f < s[A + 5] ? (c = s[A + 4], f = s[A + 5]) : f === s[A + 5] && (c = g(c, s[A + 4]));
    else {
      const w = I.bezierBoundingBox(i, r, ...s.slice(A, A + 6));
      a = Math.min(a, w[0]), o = Math.min(o, w[1]), l = Math.max(l, w[2]), h = Math.max(h, w[3]), f < w[3] ? (c = w[2], f = w[3]) : f === w[3] && (c = g(c, w[2]));
    }
    i = s[A + 4], r = s[A + 5];
  }
  const m = n(this, Bn);
  m[0] = a - n(this, Hs), m[1] = o - n(this, Hs), m[2] = l - a + 2 * n(this, Hs), m[3] = h - o + 2 * n(this, Hs), this.lastPoint = [c, f];
};
var lh, hh, _i, He, Vd, sm, xa, dc, jd, im, Wd, nm, ch, wf;
class _f {
  constructor(t, e = 0, s = 0, i = !0) {
    u(this, Vd);
    u(this, xa);
    u(this, jd);
    u(this, Wd);
    u(this, ch);
    u(this, lh, void 0);
    u(this, hh, void 0);
    u(this, _i, []);
    u(this, He, []);
    let r = 1 / 0, a = -1 / 0, o = 1 / 0, l = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: w,
      y: _,
      width: v,
      height: E
    } of t) {
      const S = Math.floor((w - e) / h) * h, x = Math.ceil((w + v + e) / h) * h, T = Math.floor((_ - e) / h) * h, C = Math.ceil((_ + E + e) / h) * h, M = [S, T, C, !0], D = [x, T, C, !1];
      n(this, _i).push(M, D), r = Math.min(r, S), a = Math.max(a, x), o = Math.min(o, T), l = Math.max(l, C);
    }
    const c = a - r + 2 * s, f = l - o + 2 * s, g = r - s, m = o - s, A = n(this, _i).at(i ? -1 : -2), y = [A[0], A[2]];
    for (const w of n(this, _i)) {
      const [_, v, E] = w;
      w[0] = (_ - g) / c, w[1] = (v - m) / f, w[2] = (E - m) / f;
    }
    p(this, lh, new Float32Array([g, m, c, f])), p(this, hh, y);
  }
  getOutlines() {
    n(this, _i).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of n(this, _i))
      e[3] ? (t.push(...b(this, ch, wf).call(this, e)), b(this, jd, im).call(this, e)) : (b(this, Wd, nm).call(this, e), t.push(...b(this, ch, wf).call(this, e)));
    return b(this, Vd, sm).call(this, t);
  }
}
lh = new WeakMap(), hh = new WeakMap(), _i = new WeakMap(), He = new WeakMap(), Vd = new WeakSet(), sm = function(t) {
  const e = [], s = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, l, h] = a;
    e.push([o, l, a], [o, h, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const l = e[a][2], h = e[a + 1][2];
    l.push(h), h.push(l), s.add(l), s.add(h);
  }
  const i = [];
  let r;
  for (; s.size > 0; ) {
    const a = s.values().next().value;
    let [o, l, h, c, f] = a;
    s.delete(a);
    let g = o, m = l;
    for (r = [o, h], i.push(r); ; ) {
      let A;
      if (s.has(c))
        A = c;
      else if (s.has(f))
        A = f;
      else
        break;
      s.delete(A), [o, l, h, c, f] = A, g !== o && (r.push(g, m, o, m === l ? l : h), g = o), m = m === l ? h : l;
    }
    r.push(g, m);
  }
  return new vA(i, n(this, lh), n(this, hh));
}, xa = new WeakSet(), dc = function(t) {
  const e = n(this, He);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const r = s + i >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? s = r + 1 : i = r - 1;
  }
  return i + 1;
}, jd = new WeakSet(), im = function([, t, e]) {
  const s = b(this, xa, dc).call(this, t);
  n(this, He).splice(s, 0, [t, e]);
}, Wd = new WeakSet(), nm = function([, t, e]) {
  const s = b(this, xa, dc).call(this, t);
  for (let i = s; i < n(this, He).length; i++) {
    const [r, a] = n(this, He)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, He).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [r, a] = n(this, He)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, He).splice(i, 1);
      return;
    }
  }
}, ch = new WeakSet(), wf = function(t) {
  const [e, s, i] = t, r = [[e, s, i]], a = b(this, xa, dc).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = n(this, He)[o];
    for (let c = 0, f = r.length; c < f; c++) {
      const [, g, m] = r[c];
      if (!(h <= g || m <= l)) {
        if (g >= l) {
          if (m > h)
            r[c][1] = h;
          else {
            if (f === 1)
              return [];
            r.splice(c, 1), c--, f--;
          }
          continue;
        }
        r[c][2] = l, m > h && r.push([e, h, m]);
      }
    }
  }
  return r;
};
var dh, Ca;
class vA extends P {
  constructor(e, s, i) {
    super();
    u(this, dh, void 0);
    u(this, Ca, void 0);
    p(this, Ca, e), p(this, dh, s), this.lastPoint = i;
  }
  toSVGPath() {
    const e = [];
    for (const s of n(this, Ca)) {
      let [i, r] = s;
      e.push(`M${i} ${r}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], l = s[a + 1];
        o === i ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = i - e, h = r - s;
    for (const c of n(this, Ca)) {
      const f = new Array(c.length);
      for (let g = 0; g < c.length; g += 2)
        f[g] = e + c[g] * l, f[g + 1] = r - c[g + 1] * h;
      o.push(f);
    }
    return o;
  }
  get box() {
    return n(this, dh);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
dh = new WeakMap(), Ca = new WeakMap();
class vf extends Ec {
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new SA(t, e, s, i, r, a);
  }
}
class SA extends tm {
  newOutliner(t, e, s, i, r, a = 0) {
    return new vf(t, e, s, i, r, a);
  }
}
var Be, $n, Ta, bt, uh, Pa, fh, ph, wi, $e, Ra, gh, mh, Sf, bh, Ef, Ah, xf, Bs, Oi, Xd, rm, as, qs;
const Jt = class Jt {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    u(this, mh);
    u(this, bh);
    u(this, Ah);
    u(this, Bs);
    u(this, Xd);
    u(this, as);
    u(this, Be, null);
    u(this, $n, null);
    u(this, Ta, void 0);
    u(this, bt, null);
    u(this, uh, !1);
    u(this, Pa, !1);
    u(this, fh, null);
    u(this, ph, void 0);
    u(this, wi, null);
    u(this, $e, null);
    u(this, Ra, void 0);
    var s;
    t ? (p(this, Pa, !1), p(this, Ra, j.HIGHLIGHT_COLOR), p(this, fh, t)) : (p(this, Pa, !0), p(this, Ra, j.HIGHLIGHT_DEFAULT_COLOR)), p(this, $e, (t == null ? void 0 : t._uiManager) || e), p(this, ph, n(this, $e)._eventBus), p(this, Ta, (t == null ? void 0 : t.color) || ((s = n(this, $e)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), n(Jt, gh) || p(Jt, gh, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return U(this, "_keyboardManager", new Hh([[["Escape", "mac+Escape"], Jt.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], Jt.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], Jt.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], Jt.prototype._moveToPrevious], [["Home", "mac+Home"], Jt.prototype._moveToBeginning], [["End", "mac+End"], Jt.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = p(this, Be, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = n(this, $e)._signal;
    t.addEventListener("click", b(this, Bs, Oi).bind(this), {
      signal: e
    }), t.addEventListener("keydown", b(this, Ah, xf).bind(this), {
      signal: e
    });
    const s = p(this, $n, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = n(this, Ta), t.append(s), t;
  }
  renderMainDropdown() {
    const t = p(this, bt, b(this, mh, Sf).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, Be)) {
      b(this, Bs, Oi).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && b(this, bh, Ef).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!n(this, as, qs)) {
      b(this, Bs, Oi).call(this, t);
      return;
    }
    if (t.target === n(this, Be)) {
      (e = n(this, bt).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = n(this, bt)) == null ? void 0 : e.firstChild) || t.target === n(this, Be)) {
      n(this, as, qs) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, as, qs) || b(this, Bs, Oi).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!n(this, as, qs)) {
      b(this, Bs, Oi).call(this, t);
      return;
    }
    (e = n(this, bt).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!n(this, as, qs)) {
      b(this, Bs, Oi).call(this, t);
      return;
    }
    (e = n(this, bt).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = n(this, bt)) == null || t.classList.add("hidden"), (e = n(this, wi)) == null || e.abort(), p(this, wi, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!n(this, Pa)) {
      if (!n(this, as, qs)) {
        (t = n(this, fh)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, Be).focus({
        preventScroll: !0,
        focusVisible: n(this, uh)
      });
    }
  }
  updateColor(t) {
    if (n(this, $n) && (n(this, $n).style.backgroundColor = t), !n(this, bt))
      return;
    const e = n(this, $e).highlightColors.values();
    for (const s of n(this, bt).children)
      s.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = n(this, Be)) == null || t.remove(), p(this, Be, null), p(this, $n, null), (e = n(this, bt)) == null || e.remove(), p(this, bt, null);
  }
};
Be = new WeakMap(), $n = new WeakMap(), Ta = new WeakMap(), bt = new WeakMap(), uh = new WeakMap(), Pa = new WeakMap(), fh = new WeakMap(), ph = new WeakMap(), wi = new WeakMap(), $e = new WeakMap(), Ra = new WeakMap(), gh = new WeakMap(), mh = new WeakSet(), Sf = function() {
  const t = document.createElement("div"), e = n(this, $e)._signal;
  t.addEventListener("contextmenu", Ve, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of n(this, $e).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", i), r.title = s, r.setAttribute("data-l10n-id", n(Jt, gh)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = i, r.setAttribute("aria-selected", i === n(this, Ta)), r.addEventListener("click", b(this, bh, Ef).bind(this, i), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", b(this, Ah, xf).bind(this), {
    signal: e
  }), t;
}, bh = new WeakSet(), Ef = function(t, e) {
  e.stopPropagation(), n(this, ph).dispatch("switchannotationeditorparams", {
    source: this,
    type: n(this, Ra),
    value: t
  });
}, Ah = new WeakSet(), xf = function(t) {
  Jt._keyboardManager.exec(this, t);
}, Bs = new WeakSet(), Oi = function(t) {
  if (n(this, as, qs)) {
    this.hideDropdown();
    return;
  }
  if (p(this, uh, t.detail === 0), n(this, wi) || (p(this, wi, new AbortController()), window.addEventListener("pointerdown", b(this, Xd, rm).bind(this), {
    signal: n(this, $e).combinedSignal(n(this, wi))
  })), n(this, bt)) {
    n(this, bt).classList.remove("hidden");
    return;
  }
  const e = p(this, bt, b(this, mh, Sf).call(this));
  n(this, Be).append(e);
}, Xd = new WeakSet(), rm = function(t) {
  var e;
  (e = n(this, bt)) != null && e.contains(t.target) || this.hideDropdown();
}, as = new WeakSet(), qs = function() {
  return n(this, bt) && !n(this, bt).classList.contains("hidden");
}, u(Jt, gh, null);
let xc = Jt;
var ka, yh, $s, Gn, Ma, ee, _h, wh, zn, Se, ue, Pt, La, Gs, Ot, Ia, Ee, vh, Sh, Cf, Da, uc, qd, am, Yd, om, Kd, lm, Eh, Tf, zs, Hi, vi, mr, Qd, hm, Fa, fc, Un, go, Jd, cm, Zd, dm, tu, um, eu, fm, su, pm;
const W = class W extends rt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    u(this, Sh);
    u(this, Da);
    u(this, qd);
    u(this, Yd);
    u(this, Kd);
    u(this, Eh);
    u(this, zs);
    u(this, Qd);
    u(this, Fa);
    u(this, Un);
    u(this, Jd);
    u(this, Zd);
    u(this, su);
    u(this, ka, null);
    u(this, yh, 0);
    u(this, $s, void 0);
    u(this, Gn, null);
    u(this, Ma, null);
    u(this, ee, null);
    u(this, _h, null);
    u(this, wh, 0);
    u(this, zn, null);
    u(this, Se, null);
    u(this, ue, null);
    u(this, Pt, !1);
    u(this, La, null);
    u(this, Gs, void 0);
    u(this, Ot, null);
    u(this, Ia, "");
    u(this, Ee, void 0);
    u(this, vh, "");
    this.color = e.color || W._defaultColor, p(this, Ee, e.thickness || W._defaultThickness), p(this, Gs, e.opacity || W._defaultOpacity), p(this, $s, e.boxes || null), p(this, vh, e.methodOfCreation || ""), p(this, Ia, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (p(this, Pt, !0), b(this, Da, uc).call(this, e), b(this, zs, Hi).call(this)) : n(this, $s) && (p(this, ka, e.anchorNode), p(this, yh, e.anchorOffset), p(this, _h, e.focusNode), p(this, wh, e.focusOffset), b(this, Sh, Cf).call(this), b(this, zs, Hi).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = W.prototype;
    return U(this, "_keyboardManager", new Hh([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: n(this, Pt) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: n(this, Ee),
      methodOfCreation: n(this, vh)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, s) {
    var i;
    rt.initialize(e, s), W._defaultColor || (W._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case j.HIGHLIGHT_DEFAULT_COLOR:
        W._defaultColor = s;
        break;
      case j.HIGHLIGHT_THICKNESS:
        W._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return n(this, La);
  }
  updateParams(e, s) {
    switch (e) {
      case j.HIGHLIGHT_COLOR:
        b(this, qd, am).call(this, s);
        break;
      case j.HIGHLIGHT_THICKNESS:
        b(this, Yd, om).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[j.HIGHLIGHT_DEFAULT_COLOR, W._defaultColor], [j.HIGHLIGHT_THICKNESS, W._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[j.HIGHLIGHT_COLOR, this.color || W._defaultColor], [j.HIGHLIGHT_THICKNESS, n(this, Ee) || W._defaultThickness], [j.HIGHLIGHT_FREE, n(this, Pt)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (p(this, Ma, new xc({
      editor: this
    })), e.addColorPicker(n(this, Ma))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(b(this, Un, go).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, b(this, Un, go).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    b(this, Eh, Tf).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, zs, Hi).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? b(this, Eh, Tf).call(this) : e && (b(this, zs, Hi).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    n(this, Pt) ? (e = (e - this.rotation + 360) % 360, i = b(r = W, vi, mr).call(r, n(this, Se).box, e)) : i = b(a = W, vi, mr).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(n(this, ue), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(n(this, Ot), {
      bbox: b(o = W, vi, mr).call(o, n(this, ee).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    n(this, Ia) && (e.setAttribute("aria-label", n(this, Ia)), e.setAttribute("role", "mark")), n(this, Pt) ? e.classList.add("free") : this.div.addEventListener("keydown", b(this, Qd, hm).bind(this), {
      signal: this._uiManager._signal
    });
    const s = p(this, zn, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = n(this, Gn);
    const [i, r] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * r), wc(this, n(this, zn), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Ot), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Ot), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        b(this, Fa, fc).call(this, !0);
        break;
      case 1:
      case 3:
        b(this, Fa, fc).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), n(this, Ot) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Ot), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), n(this, Ot) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Ot), {
      rootClass: {
        selected: !1
      }
    }), n(this, Pt) || b(this, Fa, fc).call(this, !1));
  }
  get _mustFixPosition() {
    return !n(this, Pt);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, ue), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(n(this, Ot), {
      rootClass: {
        hidden: !e
      }
    }));
  }
  static startHighlighting(e, s, {
    target: i,
    x: r,
    y: a
  }) {
    const {
      x: o,
      y: l,
      width: h,
      height: c
    } = i.getBoundingClientRect(), f = new AbortController(), g = e.combinedSignal(f), m = (A) => {
      f.abort(), b(this, eu, fm).call(this, e, A);
    };
    window.addEventListener("blur", m, {
      signal: g
    }), window.addEventListener("pointerup", m, {
      signal: g
    }), window.addEventListener("pointerdown", be, {
      capture: !0,
      passive: !1,
      signal: g
    }), window.addEventListener("contextmenu", Ve, {
      signal: g
    }), i.addEventListener("pointermove", b(this, tu, um).bind(this, e), {
      signal: g
    }), this._freeHighlight = new vf({
      x: r,
      y: a
    }, [o, l, h, c], e.scale, this._defaultThickness / 2, s, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, !0, !0);
  }
  static async deserialize(e, s, i) {
    var y, w, _, v;
    let r = null;
    if (e instanceof $g) {
      const {
        data: {
          quadPoints: E,
          rect: S,
          rotation: x,
          id: T,
          color: C,
          opacity: M,
          popupRef: D
        },
        parent: {
          page: {
            pageNumber: V
          }
        }
      } = e;
      r = e = {
        annotationType: B.HIGHLIGHT,
        color: Array.from(C),
        opacity: M,
        quadPoints: E,
        boxes: null,
        pageIndex: V - 1,
        rect: S.slice(0),
        rotation: x,
        id: T,
        deleted: !1,
        popupRef: D
      };
    } else if (e instanceof Jf) {
      const {
        data: {
          inkLists: E,
          rect: S,
          rotation: x,
          id: T,
          color: C,
          borderStyle: {
            rawWidth: M
          },
          popupRef: D
        },
        parent: {
          page: {
            pageNumber: V
          }
        }
      } = e;
      r = e = {
        annotationType: B.HIGHLIGHT,
        color: Array.from(C),
        thickness: M,
        inkLists: E,
        boxes: null,
        pageIndex: V - 1,
        rect: S.slice(0),
        rotation: x,
        id: T,
        deleted: !1,
        popupRef: D
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = e, c = await super.deserialize(e, s, i);
    c.color = I.makeHexColor(...a), p(c, Gs, h || 1), l && p(c, Ee, e.thickness), c.annotationElementId = e.id || null, c._initialData = r;
    const [f, g] = c.pageDimensions, [m, A] = c.pageTranslation;
    if (o) {
      const E = p(c, $s, []);
      for (let S = 0; S < o.length; S += 8)
        E.push({
          x: (o[S] - m) / f,
          y: 1 - (o[S + 1] - A) / g,
          width: (o[S + 2] - o[S]) / f,
          height: (o[S + 1] - o[S + 5]) / g
        });
      b(y = c, Sh, Cf).call(y), b(w = c, zs, Hi).call(w), c.rotate(c.rotation);
    } else if (l) {
      p(c, Pt, !0);
      const E = l[0], S = {
        x: E[0] - m,
        y: g - (E[1] - A)
      }, x = new vf(S, [0, 0, f, g], 1, n(c, Ee) / 2, !0, 1e-3);
      for (let M = 0, D = E.length; M < D; M += 2)
        S.x = E[M] - m, S.y = g - (E[M + 1] - A), x.add(S);
      const {
        id: T,
        clipPathId: C
      } = s.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: c.color,
          "fill-opacity": c._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: x.toSVGPath()
        }
      }, !0, !0);
      b(_ = c, Da, uc).call(_, {
        highlightOutlines: x.getOutlines(),
        highlightId: T,
        clipPathId: C
      }), b(v = c, zs, Hi).call(v);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = rt._colorManager.convert(this.color), r = {
      annotationType: B.HIGHLIGHT,
      color: i,
      opacity: n(this, Gs),
      thickness: n(this, Ee),
      quadPoints: b(this, Jd, cm).call(this),
      outlines: b(this, Zd, dm).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: b(this, Un, go).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !b(this, su, pm).call(this, r) ? null : (r.id = this.annotationElementId, r);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
ka = new WeakMap(), yh = new WeakMap(), $s = new WeakMap(), Gn = new WeakMap(), Ma = new WeakMap(), ee = new WeakMap(), _h = new WeakMap(), wh = new WeakMap(), zn = new WeakMap(), Se = new WeakMap(), ue = new WeakMap(), Pt = new WeakMap(), La = new WeakMap(), Gs = new WeakMap(), Ot = new WeakMap(), Ia = new WeakMap(), Ee = new WeakMap(), vh = new WeakMap(), Sh = new WeakSet(), Cf = function() {
  const e = new _f(n(this, $s), 1e-3);
  p(this, Se, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, Se).box;
  const s = new _f(n(this, $s), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  p(this, ee, s.getOutlines());
  const {
    lastPoint: i
  } = n(this, ee);
  p(this, La, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, Da = new WeakSet(), uc = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var f, g;
  if (p(this, Se, e), p(this, ee, e.getNewOutline(n(this, Ee) / 2 + 1.5, 25e-4)), s >= 0)
    p(this, ue, s), p(this, Gn, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), p(this, Ot, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: n(this, ee).box,
      path: {
        d: n(this, ee).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const m = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, ue), {
      bbox: b(f = W, vi, mr).call(f, n(this, Se).box, (m - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(n(this, Ot), {
      bbox: b(g = W, vi, mr).call(g, n(this, ee).box, m),
      path: {
        d: n(this, ee).toSVGPath()
      }
    });
  }
  const [a, o, l, h] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [m, A] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * A / m, this.height = h * m / A;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [m, A] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * A / m, this.height = h * m / A;
      break;
    }
  }
  const {
    lastPoint: c
  } = n(this, ee);
  p(this, La, [(c[0] - a) / l, (c[1] - o) / h]);
}, qd = new WeakSet(), am = function(e) {
  const s = (a, o) => {
    var l, h;
    this.color = a, p(this, Gs, o), (l = this.parent) == null || l.drawLayer.updateProperties(n(this, ue), {
      root: {
        fill: a,
        "fill-opacity": o
      }
    }), (h = n(this, Ma)) == null || h.updateColor(a);
  }, i = this.color, r = n(this, Gs);
  this.addCommands({
    cmd: s.bind(this, e, W._defaultOpacity),
    undo: s.bind(this, i, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: j.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, Yd = new WeakSet(), om = function(e) {
  const s = n(this, Ee), i = (r) => {
    p(this, Ee, r), b(this, Kd, lm).call(this, r);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: j.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Kd = new WeakSet(), lm = function(e) {
  if (!n(this, Pt))
    return;
  b(this, Da, uc).call(this, {
    highlightOutlines: n(this, Se).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, Eh = new WeakSet(), Tf = function() {
  n(this, ue) === null || !this.parent || (this.parent.drawLayer.remove(n(this, ue)), p(this, ue, null), this.parent.drawLayer.remove(n(this, Ot)), p(this, Ot, null));
}, zs = new WeakSet(), Hi = function(e = this.parent) {
  n(this, ue) === null && ({
    id: zt(this, ue)._,
    clipPathId: zt(this, Gn)._
  } = e.drawLayer.draw({
    bbox: n(this, Se).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": n(this, Gs)
    },
    rootClass: {
      highlight: !0,
      free: n(this, Pt)
    },
    path: {
      d: n(this, Se).toSVGPath()
    }
  }, !1, !0), p(this, Ot, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, Pt)
    },
    bbox: n(this, ee).box,
    path: {
      d: n(this, ee).toSVGPath()
    }
  }, n(this, Pt))), n(this, zn) && (n(this, zn).style.clipPath = n(this, Gn)));
}, vi = new WeakSet(), mr = function([e, s, i, r], a) {
  switch (a) {
    case 90:
      return [1 - s - r, e, r, i];
    case 180:
      return [1 - e - i, 1 - s - r, i, r];
    case 270:
      return [s, 1 - e - i, r, i];
  }
  return [e, s, i, r];
}, Qd = new WeakSet(), hm = function(e) {
  W._keyboardManager.exec(this, e);
}, Fa = new WeakSet(), fc = function(e) {
  if (!n(this, ka))
    return;
  const s = window.getSelection();
  e ? s.setPosition(n(this, ka), n(this, yh)) : s.setPosition(n(this, _h), n(this, wh));
}, Un = new WeakSet(), go = function() {
  return n(this, Pt) ? this.rotation : 0;
}, Jd = new WeakSet(), cm = function() {
  if (n(this, Pt))
    return null;
  const [e, s] = this.pageDimensions, [i, r] = this.pageTranslation, a = n(this, $s), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: c,
    width: f,
    height: g
  } of a) {
    const m = h * e + i, A = (1 - c) * s + r;
    o[l] = o[l + 4] = m, o[l + 1] = o[l + 3] = A, o[l + 2] = o[l + 6] = m + f * e, o[l + 5] = o[l + 7] = A - g * s, l += 8;
  }
  return o;
}, Zd = new WeakSet(), dm = function(e) {
  return n(this, Se).serialize(e, b(this, Un, go).call(this));
}, tu = new WeakSet(), um = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, eu = new WeakSet(), fm = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, su = new WeakSet(), pm = function(e) {
  const {
    color: s
  } = this._initialData;
  return e.color.some((i, r) => i !== s[r]);
}, u(W, vi), u(W, tu), u(W, eu), F(W, "_defaultColor", null), F(W, "_defaultOpacity", 1), F(W, "_defaultThickness", 12), F(W, "_type", "highlight"), F(W, "_editorType", B.HIGHLIGHT), F(W, "_freeHighlightId", -1), F(W, "_freeHighlight", null), F(W, "_freeHighlightClipId", "");
let Cc = W;
var Vn;
class EA {
  constructor() {
    u(this, Vn, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, s] of Object.entries(t))
        this.updateProperty(e, s);
  }
  updateSVGProperty(t, e) {
    n(this, Vn)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, Vn);
    return p(this, Vn, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    p(this, Vn, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    Q("Not implemented");
  }
}
Vn = new WeakMap();
var fe, Na, vt, jn, Wn, Si, Ei, xi, Xn, xh, Rf, Ch, kf, Th, Mf, qn, mo, iu, gm, Oa, pc, Yn, bo, Ci, br;
const R = class R extends rt {
  constructor(e) {
    super(e);
    u(this, xh);
    u(this, Ch);
    u(this, Th);
    u(this, qn);
    u(this, iu);
    u(this, Oa);
    u(this, Yn);
    u(this, Ci);
    u(this, fe, null);
    u(this, Na, void 0);
    F(this, "_drawId", null);
    p(this, Na, e.mustBeCommitted || !1), e.drawOutlines && (b(this, xh, Rf).call(this, e), b(this, qn, mo).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s))
      i.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    Q("Not implemented");
  }
  static get typesMap() {
    Q("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, s) {
    const i = this.typesMap.get(e);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (n(R, vt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, s) {
    const i = this.constructor.typesMap.get(e);
    i && this._updateProperty(e, i, s);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], s = this._defaultDrawingOptions;
    for (const [i, r] of this.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: s
    } = this;
    for (const [i, r] of this.constructor.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  _updateProperty(e, s, i) {
    const r = this._drawingOptions, a = r[s], o = (l) => {
      var c;
      r.updateProperty(s, l);
      const h = n(this, fe).updateProperty(s, l);
      h && b(this, Yn, bo).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, r.toSVGProperties());
    };
    this.addCommands({
      cmd: o.bind(this, i),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, R._mergeSVGProperties(n(this, fe).getPathResizingSVGProperties(b(this, Oa, pc).call(this)), {
      bbox: b(this, Ci, br).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, R._mergeSVGProperties(n(this, fe).getPathResizedSVGProperties(b(this, Oa, pc).call(this)), {
      bbox: b(this, Ci, br).call(this)
    }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: b(this, Ci, br).call(this, e, s)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, R._mergeSVGProperties(n(this, fe).getPathTranslatedSVGProperties(b(this, Oa, pc).call(this), this.parentDimensions), {
      bbox: b(this, Ci, br).call(this)
    }));
  }
  _onStartDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, Na) && (p(this, Na, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    b(this, Th, Mf).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, qn, mo).call(this), b(this, Yn, bo).call(this, n(this, fe).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), b(this, Th, Mf).call(this)) : e && (this._uiManager.addShouldRescale(this), b(this, qn, mo).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, R._mergeSVGProperties({
      bbox: b(this, Ci, br).call(this)
    }, n(this, fe).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && b(this, Yn, bo).call(this, n(this, fe).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    e.classList.add("draw");
    const s = document.createElement("div");
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal";
    const [i, r] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * r), this._uiManager.addShouldRescale(this), this.disableEditing(), e;
  }
  static createDrawerInstance(e, s, i, r, a) {
    Q("Not implemented");
  }
  static startDrawing(e, s, i, r) {
    var w;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: h,
      pointerType: c
    } = r;
    if (n(R, Ei) && n(R, Ei) !== c)
      return;
    const {
      viewport: {
        rotation: f
      }
    } = e, {
      width: g,
      height: m
    } = a.getBoundingClientRect(), A = p(R, jn, new AbortController()), y = e.combinedSignal(A);
    if (n(R, Si) || p(R, Si, h), n(R, Ei) ?? p(R, Ei, c), window.addEventListener("pointerup", (_) => {
      var v;
      n(R, Si) === _.pointerId ? this._endDraw(_) : (v = n(R, xi)) == null || v.delete(_.pointerId);
    }, {
      signal: y
    }), window.addEventListener("pointercancel", (_) => {
      var v;
      n(R, Si) === _.pointerId ? this._currentParent.endDrawingSession() : (v = n(R, xi)) == null || v.delete(_.pointerId);
    }, {
      signal: y
    }), window.addEventListener("pointerdown", (_) => {
      n(R, Ei) === _.pointerType && ((n(R, xi) || p(R, xi, /* @__PURE__ */ new Set())).add(_.pointerId), n(R, vt).isCancellable() && (n(R, vt).removeLastElement(), n(R, vt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: y
    }), window.addEventListener("contextmenu", Ve, {
      signal: y
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: y
    }), a.addEventListener("touchmove", (_) => {
      _.timeStamp === n(R, Xn) && be(_);
    }, {
      signal: y
    }), e.toggleDrawing(), (w = s._editorUndoBar) == null || w.hide(), n(R, vt)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(R, vt).startNew(o, l, g, m, f));
      return;
    }
    s.updateUIForDefaultProperties(this), p(R, vt, this.createDrawerInstance(o, l, g, m, f)), p(R, Wn, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(n(R, Wn).toSVGProperties(), n(R, vt).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (p(R, Xn, -1), !n(R, vt))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: r
    } = e;
    if (n(R, Si) === r) {
      if (((a = n(R, xi)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(R, vt).add(s, i)), p(R, Xn, e.timeStamp), be(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, p(R, vt, null), p(R, Wn, null), p(R, Ei, null), p(R, Xn, NaN)), n(R, jn) && (n(R, jn).abort(), p(R, jn, null), p(R, Si, NaN), p(R, xi, null));
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), e && s.drawLayer.updateProperties(this._currentDrawId, n(R, vt).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const i = n(R, vt), r = this._currentDrawId, a = i.getLastElement();
        s.addCommands({
          cmd: () => {
            s.drawLayer.updateProperties(r, i.setLastElement(a));
          },
          undo: () => {
            s.drawLayer.updateProperties(r, i.removeLastElement());
          },
          mustExec: !1,
          type: j.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(e) {
    const s = this._currentParent;
    if (!s)
      return null;
    if (s.toggleDrawing(!0), s.cleanUndoStack(j.DRAW_STEP), !n(R, vt).isEmpty()) {
      const {
        pageDimensions: [i, r],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: n(R, vt).getOutlines(i * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: n(R, Wn),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, r, a, o) {
    Q("Not implemented");
  }
  static async deserialize(e, s, i) {
    var f, g;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = s.viewport, h = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e), c = await super.deserialize(e, s, i);
    return c.createDrawingOptions(e), b(f = c, xh, Rf).call(f, {
      drawOutlines: h
    }), b(g = c, qn, mo).call(g), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [r, a] = this.pageDimensions;
    return n(this, fe).serialize([s, i, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
fe = new WeakMap(), Na = new WeakMap(), vt = new WeakMap(), jn = new WeakMap(), Wn = new WeakMap(), Si = new WeakMap(), Ei = new WeakMap(), xi = new WeakMap(), Xn = new WeakMap(), xh = new WeakSet(), Rf = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  p(this, fe, e), this._drawingOptions || (this._drawingOptions = i), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = b(this, Ch, kf).call(this, e, this.parent), b(this, Yn, bo).call(this, e.box);
}, Ch = new WeakSet(), kf = function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(R._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, Th = new WeakSet(), Mf = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, qn = new WeakSet(), mo = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = b(this, Ch, kf).call(this, n(this, fe), e);
  }
}, iu = new WeakSet(), gm = function([e, s, i, r]) {
  const {
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [s, 1 - e, i * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [1 - s, e, i * (o / a), r * (a / o)];
    default:
      return [e, s, i, r];
  }
}, Oa = new WeakSet(), pc = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: r,
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [1 - s, e, i * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [s, 1 - e, i * (a / o), r * (o / a)];
    default:
      return [e, s, i, r];
  }
}, Yn = new WeakSet(), bo = function(e) {
  if ([this.x, this.y, this.width, this.height] = b(this, iu, gm).call(this, e), this.div) {
    this.fixAndSetPosition();
    const [s, i] = this.parentDimensions;
    this.setDims(this.width * s, this.height * i);
  }
  this._onResized();
}, Ci = new WeakSet(), br = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, h]
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - s - r, e, r, i];
    case 2:
      return [1 - e - i, 1 - s - r, i, r];
    case 3:
      return [s, 1 - e - i, r, i];
    case 4:
      return [e, s - i * (l / h), r * (h / l), i * (l / h)];
    case 5:
      return [1 - s, e, i * (l / h), r * (h / l)];
    case 6:
      return [1 - e - r * (h / l), 1 - s, r * (h / l), i * (l / h)];
    case 7:
      return [s - i * (l / h), 1 - e - r * (h / l), i * (l / h), r * (h / l)];
    case 8:
      return [e - i, s - r, i, r];
    case 9:
      return [1 - s, e - i, r, i];
    case 10:
      return [1 - e, 1 - s, i, r];
    case 11:
      return [s - r, 1 - e, r, i];
    case 12:
      return [e - r * (h / l), s, r * (h / l), i * (l / h)];
    case 13:
      return [1 - s - i * (l / h), e - r * (h / l), i * (l / h), r * (h / l)];
    case 14:
      return [1 - e, 1 - s - i * (l / h), r * (h / l), i * (l / h)];
    case 15:
      return [s, 1 - e, i * (l / h), r * (h / l)];
    default:
      return [e, s, i, r];
  }
}, F(R, "_currentDrawId", -1), F(R, "_currentParent", null), u(R, vt, null), u(R, jn, null), u(R, Wn, null), u(R, Si, NaN), u(R, Ei, null), u(R, xi, null), u(R, Xn, NaN), F(R, "_INNER_MARGIN", 3);
let Pf = R;
var os, St, Et, Kn, Ha, jt, Rt, xe, Qn, Jn, Zn, Ba, gc;
class xA {
  constructor(t, e, s, i, r, a) {
    u(this, Ba);
    u(this, os, new Float64Array(6));
    u(this, St, void 0);
    u(this, Et, void 0);
    u(this, Kn, void 0);
    u(this, Ha, void 0);
    u(this, jt, void 0);
    u(this, Rt, "");
    u(this, xe, 0);
    u(this, Qn, new Tc());
    u(this, Jn, void 0);
    u(this, Zn, void 0);
    p(this, Jn, s), p(this, Zn, i), p(this, Kn, r), p(this, Ha, a), [t, e] = b(this, Ba, gc).call(this, t, e);
    const o = p(this, St, [NaN, NaN, NaN, NaN, t, e]);
    p(this, jt, [t, e]), p(this, Et, [{
      line: o,
      points: n(this, jt)
    }]), n(this, os).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && p(this, Ha, e);
  }
  isEmpty() {
    return !n(this, Et) || n(this, Et).length === 0;
  }
  isCancellable() {
    return n(this, jt).length <= 10;
  }
  add(t, e) {
    [t, e] = b(this, Ba, gc).call(this, t, e);
    const [s, i, r, a] = n(this, os).subarray(2, 6), o = t - r, l = e - a;
    return Math.hypot(n(this, Jn) * o, n(this, Zn) * l) <= 2 ? null : (n(this, jt).push(t, e), isNaN(s) ? (n(this, os).set([r, a, t, e], 2), n(this, St).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(n(this, os)[0]) && n(this, St).splice(6, 6), n(this, os).set([s, i, r, a, t, e], 0), n(this, St).push(...P.createBezierPoints(s, i, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (n(this, jt).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, r) {
    p(this, Jn, s), p(this, Zn, i), p(this, Kn, r), [t, e] = b(this, Ba, gc).call(this, t, e);
    const a = p(this, St, [NaN, NaN, NaN, NaN, t, e]);
    p(this, jt, [t, e]);
    const o = n(this, Et).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, Et).push({
      line: a,
      points: n(this, jt)
    }), n(this, os).set(a, 0), p(this, xe, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, Et).at(-1);
  }
  setLastElement(t) {
    return n(this, Et) ? (n(this, Et).push(t), p(this, St, t.line), p(this, jt, t.points), p(this, xe, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : n(this, Qn).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, Et))
      return n(this, Qn).removeLastElement();
    n(this, Et).pop(), p(this, Rt, "");
    for (let t = 0, e = n(this, Et).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = n(this, Et)[t];
      p(this, St, s), p(this, jt, i), p(this, xe, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, Rt)
      }
    };
  }
  toSVGPath() {
    const t = P.svgRound(n(this, St)[4]), e = P.svgRound(n(this, St)[5]);
    if (n(this, jt).length === 2)
      return p(this, Rt, `${n(this, Rt)} M ${t} ${e} Z`), n(this, Rt);
    if (n(this, jt).length <= 6) {
      const i = n(this, Rt).lastIndexOf("M");
      p(this, Rt, `${n(this, Rt).slice(0, i)} M ${t} ${e}`), p(this, xe, 6);
    }
    if (n(this, jt).length === 4) {
      const i = P.svgRound(n(this, St)[10]), r = P.svgRound(n(this, St)[11]);
      return p(this, Rt, `${n(this, Rt)} L ${i} ${r}`), p(this, xe, 12), n(this, Rt);
    }
    const s = [];
    n(this, xe) === 0 && (s.push(`M ${t} ${e}`), p(this, xe, 6));
    for (let i = n(this, xe), r = n(this, St).length; i < r; i += 6) {
      const [a, o, l, h, c, f] = n(this, St).slice(i, i + 6).map(P.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${f}`);
    }
    return p(this, Rt, n(this, Rt) + s.join(" ")), p(this, xe, n(this, St).length), n(this, Rt);
  }
  getOutlines(t, e, s, i) {
    const r = n(this, Et).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, Qn).build(n(this, Et), t, e, s, n(this, Kn), n(this, Ha), i), p(this, os, null), p(this, St, null), p(this, Et, null), p(this, Rt, null), n(this, Qn);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
os = new WeakMap(), St = new WeakMap(), Et = new WeakMap(), Kn = new WeakMap(), Ha = new WeakMap(), jt = new WeakMap(), Rt = new WeakMap(), xe = new WeakMap(), Qn = new WeakMap(), Jn = new WeakMap(), Zn = new WeakMap(), Ba = new WeakSet(), gc = function(t, e) {
  return P._normalizePoint(t, e, n(this, Jn), n(this, Zn), n(this, Kn));
};
var Wt, Ph, Rh, pe, ls, hs, $a, Ga, za, Ge, ms, nu, mm, ru, bm, au, Am;
const ip = class ip extends P {
  constructor() {
    super(...arguments);
    u(this, Ge);
    u(this, nu);
    u(this, ru);
    u(this, au);
    u(this, Wt, void 0);
    u(this, Ph, 0);
    u(this, Rh, void 0);
    u(this, pe, void 0);
    u(this, ls, void 0);
    u(this, hs, void 0);
    u(this, $a, void 0);
    u(this, Ga, void 0);
    u(this, za, void 0);
  }
  build(e, s, i, r, a, o, l) {
    p(this, ls, s), p(this, hs, i), p(this, $a, r), p(this, Ga, a), p(this, za, o), p(this, Rh, l ?? 0), p(this, pe, e), b(this, ru, bm).call(this);
  }
  setLastElement(e) {
    return n(this, pe).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return n(this, pe).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of n(this, pe)) {
      if (e.push(`M${P.svgRound(s[4])} ${P.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12) {
        e.push(`L${P.svgRound(s[10])} ${P.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, r = s.length; i < r; i += 6) {
        const [a, o, l, h, c, f] = s.subarray(i, i + 6).map(P.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${f}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = [], [h, c, f, g] = b(this, nu, mm).call(this);
    let m, A, y, w, _, v, E, S, x;
    switch (n(this, Ga)) {
      case 0:
        x = P._rescale, m = e, A = s + r, y = i, w = -r, _ = e + h * i, v = s + (1 - c - g) * r, E = e + (h + f) * i, S = s + (1 - c) * r;
        break;
      case 90:
        x = P._rescaleAndSwap, m = e, A = s, y = i, w = r, _ = e + c * i, v = s + h * r, E = e + (c + g) * i, S = s + (h + f) * r;
        break;
      case 180:
        x = P._rescale, m = e + i, A = s, y = -i, w = r, _ = e + (1 - h - f) * i, v = s + c * r, E = e + (1 - h) * i, S = s + (c + g) * r;
        break;
      case 270:
        x = P._rescaleAndSwap, m = e + i, A = s + r, y = -i, w = -r, _ = e + (1 - c - g) * i, v = s + (1 - h - f) * r, E = e + (1 - c) * i, S = s + (1 - h) * r;
        break;
    }
    for (const {
      line: T,
      points: C
    } of n(this, pe))
      o.push(x(T, m, A, y, w, a ? new Array(T.length) : null)), l.push(x(C, m, A, y, w, a ? new Array(C.length) : null));
    return {
      lines: o,
      points: l,
      rect: [_, v, E, S]
    };
  }
  static deserialize(e, s, i, r, a, {
    paths: {
      lines: o,
      points: l
    },
    rotation: h,
    thickness: c
  }) {
    const f = [];
    let g, m, A, y, w;
    switch (h) {
      case 0:
        w = P._rescale, g = -e / i, m = s / r + 1, A = 1 / i, y = -1 / r;
        break;
      case 90:
        w = P._rescaleAndSwap, g = -s / r, m = -e / i, A = 1 / r, y = 1 / i;
        break;
      case 180:
        w = P._rescale, g = e / i + 1, m = -s / r, A = -1 / i, y = 1 / r;
        break;
      case 270:
        w = P._rescaleAndSwap, g = s / r + 1, m = e / i + 1, A = -1 / r, y = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const v of l) {
        const E = v.length;
        if (E === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, v[0], v[1]]));
          continue;
        }
        if (E === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, v[0], v[1], NaN, NaN, NaN, NaN, v[2], v[3]]));
          continue;
        }
        const S = new Float32Array(3 * (E - 2));
        o.push(S);
        let [x, T, C, M] = v.subarray(0, 4);
        S.set([NaN, NaN, NaN, NaN, x, T], 0);
        for (let D = 4; D < E; D += 2) {
          const V = v[D], O = v[D + 1];
          S.set(P.createBezierPoints(x, T, C, M, V, O), (D - 2) * 3), [x, T, C, M] = [C, M, V, O];
        }
      }
    }
    for (let v = 0, E = o.length; v < E; v++)
      f.push({
        line: w(o[v].map((S) => S ?? NaN), g, m, A, y),
        points: w(l[v].map((S) => S ?? NaN), g, m, A, y)
      });
    const _ = new ip();
    return _.build(f, i, r, 1, h, c, a), _;
  }
  get box() {
    return n(this, Wt);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? b(this, au, Am).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [r, a] = b(this, Ge, ms).call(this);
    p(this, ls, e), p(this, hs, s), p(this, $a, i);
    const [o, l] = b(this, Ge, ms).call(this), h = o - r, c = l - a, f = n(this, Wt);
    return f[0] -= h, f[1] -= c, f[2] += 2 * h, f[3] += 2 * c, f;
  }
  updateRotation(e) {
    return p(this, Ph, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return n(this, Wt).map(P.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = n(this, Wt);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${P.svgRound(e)} ${P.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = n(this, Wt);
    let i = 0, r = 0, a = 0, o = 0, l = 0, h = 0;
    switch (n(this, Ph)) {
      case 90:
        r = s / e, a = -e / s, l = e;
        break;
      case 180:
        i = -1, o = -1, l = e, h = s;
        break;
      case 270:
        r = -s / e, a = e / s, h = s;
        break;
      default:
        return "";
    }
    return `matrix(${i} ${r} ${a} ${o} ${P.svgRound(l)} ${P.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, Ge, ms).call(this), [l, h, c, f] = n(this, Wt);
    if (Math.abs(c - a) <= P.PRECISION || Math.abs(f - o) <= P.PRECISION) {
      const w = e + i / 2 - (l + c / 2), _ = s + r / 2 - (h + f / 2);
      return {
        path: {
          "transform-origin": `${P.svgRound(e)} ${P.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${w} ${_})`
        }
      };
    }
    const g = (i - 2 * a) / (c - 2 * a), m = (r - 2 * o) / (f - 2 * o), A = c / i, y = f / r;
    return {
      path: {
        "transform-origin": `${P.svgRound(l)} ${P.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${A} ${y}) translate(${P.svgRound(a)} ${P.svgRound(o)}) scale(${g} ${m}) translate(${P.svgRound(-a)} ${P.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, Ge, ms).call(this), l = n(this, Wt), [h, c, f, g] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = r, Math.abs(f - a) <= P.PRECISION || Math.abs(g - o) <= P.PRECISION) {
      const _ = e + i / 2 - (h + f / 2), v = s + r / 2 - (c + g / 2);
      for (const {
        line: E,
        points: S
      } of n(this, pe))
        P._translate(E, _, v, E), P._translate(S, _, v, S);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${P.svgRound(e)} ${P.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const m = (i - 2 * a) / (f - 2 * a), A = (r - 2 * o) / (g - 2 * o), y = -m * (h + a) + e + a, w = -A * (c + o) + s + o;
    if (m !== 1 || A !== 1 || y !== 0 || w !== 0)
      for (const {
        line: _,
        points: v
      } of n(this, pe))
        P._rescale(_, y, w, m, A, _), P._rescale(v, y, w, m, A, v);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${P.svgRound(e)} ${P.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [r, a] = i, o = n(this, Wt), l = e - o[0], h = s - o[1];
    if (n(this, ls) === r && n(this, hs) === a)
      for (const {
        line: c,
        points: f
      } of n(this, pe))
        P._translate(c, l, h, c), P._translate(f, l, h, f);
    else {
      const c = n(this, ls) / r, f = n(this, hs) / a;
      p(this, ls, r), p(this, hs, a);
      for (const {
        line: g,
        points: m
      } of n(this, pe))
        P._rescale(g, l, h, c, f, g), P._rescale(m, l, h, c, f, m);
      o[2] *= c, o[3] *= f;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${P.svgRound(e)} ${P.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = n(this, Wt);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${P.svgRound(e[0])} ${P.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
};
Wt = new WeakMap(), Ph = new WeakMap(), Rh = new WeakMap(), pe = new WeakMap(), ls = new WeakMap(), hs = new WeakMap(), $a = new WeakMap(), Ga = new WeakMap(), za = new WeakMap(), Ge = new WeakSet(), ms = function(e = n(this, za)) {
  const s = n(this, Rh) + e / 2 * n(this, $a);
  return n(this, Ga) % 180 === 0 ? [s / n(this, ls), s / n(this, hs)] : [s / n(this, hs), s / n(this, ls)];
}, nu = new WeakSet(), mm = function() {
  const [e, s, i, r] = n(this, Wt), [a, o] = b(this, Ge, ms).call(this, 0);
  return [e + a, s + o, i - 2 * a, r - 2 * o];
}, ru = new WeakSet(), bm = function() {
  const e = p(this, Wt, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of n(this, pe)) {
    if (r.length <= 12) {
      for (let l = 4, h = r.length; l < h; l += 6) {
        const [c, f] = r.subarray(l, l + 2);
        e[0] = Math.min(e[0], c), e[1] = Math.min(e[1], f), e[2] = Math.max(e[2], c), e[3] = Math.max(e[3], f);
      }
      continue;
    }
    let a = r[4], o = r[5];
    for (let l = 6, h = r.length; l < h; l += 6) {
      const [c, f, g, m, A, y] = r.subarray(l, l + 6);
      I.bezierBoundingBox(a, o, c, f, g, m, A, y, e), a = A, o = y;
    }
  }
  const [s, i] = b(this, Ge, ms).call(this);
  e[0] = Math.min(1, Math.max(0, e[0] - s)), e[1] = Math.min(1, Math.max(0, e[1] - i)), e[2] = Math.min(1, Math.max(0, e[2] + s)), e[3] = Math.min(1, Math.max(0, e[3] + i)), e[2] -= e[0], e[3] -= e[1];
}, au = new WeakSet(), Am = function(e) {
  const [s, i] = b(this, Ge, ms).call(this);
  p(this, za, e);
  const [r, a] = b(this, Ge, ms).call(this), [o, l] = [r - s, a - i], h = n(this, Wt);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
let Tc = ip;
var Ua;
const np = class np extends EA {
  constructor(e) {
    super();
    u(this, Ua, void 0);
    p(this, Ua, e), super.updateProperties({
      fill: "none",
      stroke: rt._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(e, s) {
    e === "stroke-width" && (s ?? (s = this["stroke-width"]), s *= n(this, Ua).realScale), super.updateSVGProperty(e, s);
  }
  clone() {
    const e = new np(n(this, Ua));
    return e.updateAll(this), e;
  }
};
Ua = new WeakMap();
let Lf = np;
var ou, ym;
const yr = class yr extends Pf {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    u(this, ou);
    this._willKeepAspectRatio = !0;
  }
  static initialize(e, s) {
    rt.initialize(e, s), this._defaultDrawingOptions = new Lf(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return U(this, "typesMap", /* @__PURE__ */ new Map([[j.INK_THICKNESS, "stroke-width"], [j.INK_COLOR, "stroke"], [j.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, r, a) {
    return new xA(e, s, i, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return Tc.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof Jf) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: c,
          color: f,
          opacity: g,
          borderStyle: {
            rawWidth: m
          },
          popupRef: A
        },
        parent: {
          page: {
            pageNumber: y
          }
        }
      } = e;
      r = e = {
        annotationType: B.INK,
        color: Array.from(f),
        thickness: m,
        opacity: g,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: y - 1,
        rect: l.slice(0),
        rotation: h,
        id: c,
        deleted: !1,
        popupRef: A
      };
    }
    const a = await super.deserialize(e, s, i);
    return a.annotationElementId = e.id || null, a._initialData = r, a;
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: s,
      parent: i
    } = this;
    s.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(e, s.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: e,
    thickness: s,
    opacity: i
  }) {
    this._drawingOptions = yr.getDefaultDrawingOptions({
      stroke: I.makeHexColor(...e),
      "stroke-width": s,
      "stroke-opacity": i
    });
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: s,
      points: i,
      rect: r
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: a,
        "stroke-opacity": o,
        "stroke-width": l
      }
    } = this, h = {
      annotationType: B.INK,
      color: rt._colorManager.convert(a),
      opacity: o,
      thickness: l,
      paths: {
        lines: s,
        points: i
      },
      pageIndex: this.pageIndex,
      rect: r,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? h : this.annotationElementId && !b(this, ou, ym).call(this, h) ? null : (h.id = this.annotationElementId, h);
  }
  renderAnnotationElement(e) {
    const {
      points: s,
      rect: i
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: i,
      thickness: this._drawingOptions["stroke-width"],
      points: s
    }), null;
  }
};
ou = new WeakSet(), ym = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== r || e.pageIndex !== a;
}, F(yr, "_type", "ink"), F(yr, "_editorType", B.INK), F(yr, "_defaultDrawingOptions", null);
let If = yr;
var nt, kt, Ti, Us, Pi, Va, cs, ds, ge, ja, tr, Ao, er, yo, Wa, mc, kh, Ff, Xa, bc, Mh, Nf, qa, Ac, lu, _m;
const wo = class wo extends rt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    u(this, tr);
    u(this, er);
    u(this, Wa);
    u(this, kh);
    u(this, Xa);
    u(this, Mh);
    u(this, qa);
    u(this, lu);
    u(this, nt, null);
    u(this, kt, null);
    u(this, Ti, null);
    u(this, Us, null);
    u(this, Pi, null);
    u(this, Va, "");
    u(this, cs, null);
    u(this, ds, null);
    u(this, ge, !1);
    u(this, ja, !1);
    p(this, Us, e.bitmapUrl), p(this, Pi, e.bitmapFile);
  }
  static initialize(e, s) {
    rt.initialize(e, s);
  }
  static get supportedTypes() {
    return U(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((s) => `image/${s}`));
  }
  static get supportedTypesStr() {
    return U(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor(B.STAMP, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return {
      type: "stamp",
      hasAltText: !!((e = this.altTextData) != null && e.altText)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasAltText");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, s = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: i
    } = this._uiManager;
    if (!i)
      throw new Error("No ML.");
    if (!await i.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, l = await i.guess({
      name: "altText",
      request: {
        data: r,
        width: a,
        height: o,
        channels: r.length / (a * o)
      }
    });
    if (!l)
      throw new Error("No response from the AI service.");
    if (l.error)
      throw new Error("Error from the AI service.");
    if (l.cancel)
      return null;
    if (!l.output)
      throw new Error("No valid response from the AI service.");
    const h = l.output;
    return await this.setGuessedAltText(h), s && !this.hasAltTextData() && (this.altTextData = {
      alt: h,
      decorative: !1
    }), h;
  }
  remove() {
    var e;
    n(this, kt) && (p(this, nt, null), this._uiManager.imageManager.deleteId(n(this, kt)), (e = n(this, cs)) == null || e.remove(), p(this, cs, null), n(this, ds) && (clearTimeout(n(this, ds)), p(this, ds, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, kt) && b(this, Wa, mc).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, kt) && n(this, cs) === null && b(this, Wa, mc).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, Ti) || n(this, nt) || n(this, Us) || n(this, Pi) || n(this, kt));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    if (this.width && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), n(this, nt) ? b(this, kh, Ff).call(this) : b(this, Wa, mc).call(this), this.width && !this.annotationElementId) {
      const [i, r] = this.parentDimensions;
      this.setAt(e * i, s * r, this.width * i, this.height * r);
    }
    return this._uiManager.addShouldRescale(this), this.div;
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    n(this, ds) !== null && clearTimeout(n(this, ds)), p(this, ds, setTimeout(() => {
      p(this, ds, null), b(this, Mh, Nf).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    var m;
    e || (e = 224);
    const {
      width: r,
      height: a
    } = n(this, nt), o = new Mu();
    let l = n(this, nt), h = r, c = a, f = null;
    if (s) {
      if (r > s || a > s) {
        const M = Math.min(s / r, s / a);
        h = Math.floor(r * M), c = Math.floor(a * M);
      }
      f = document.createElement("canvas");
      const A = f.width = Math.ceil(h * o.sx), y = f.height = Math.ceil(c * o.sy);
      n(this, ge) || (l = b(this, Xa, bc).call(this, A, y));
      const w = f.getContext("2d");
      w.filter = this._uiManager.hcmFilter;
      let _ = "white", v = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? v = "black" : (m = window.matchMedia) != null && m.call(window, "(prefers-color-scheme: dark)").matches && (_ = "#8f8f9d", v = "#42414d");
      const E = 15, S = E * o.sx, x = E * o.sy, T = new OffscreenCanvas(S * 2, x * 2), C = T.getContext("2d");
      C.fillStyle = _, C.fillRect(0, 0, S * 2, x * 2), C.fillStyle = v, C.fillRect(0, 0, S, x), C.fillRect(S, x, S, x), w.fillStyle = w.createPattern(T, "repeat"), w.fillRect(0, 0, A, y), w.drawImage(l, 0, 0, l.width, l.height, 0, 0, A, y);
    }
    let g = null;
    if (i) {
      let A, y;
      if (o.symmetric && l.width < e && l.height < e)
        A = l.width, y = l.height;
      else if (l = n(this, nt), r > e || a > e) {
        const v = Math.min(e / r, e / a);
        A = Math.floor(r * v), y = Math.floor(a * v), n(this, ge) || (l = b(this, Xa, bc).call(this, A, y));
      }
      const _ = new OffscreenCanvas(A, y).getContext("2d", {
        willReadFrequently: !0
      });
      _.drawImage(l, 0, 0, l.width, l.height, 0, 0, A, y), g = {
        width: A,
        height: y,
        data: _.getImageData(0, 0, A, y).data
      };
    }
    return {
      canvas: f,
      width: h,
      height: c,
      imageData: g
    };
  }
  getImageForAltText() {
    return n(this, cs);
  }
  static async deserialize(e, s, i) {
    var y;
    let r = null;
    if (e instanceof Gg) {
      const {
        data: {
          rect: w,
          rotation: _,
          id: v,
          structParent: E,
          popupRef: S
        },
        container: x,
        parent: {
          page: {
            pageNumber: T
          }
        }
      } = e, C = x.querySelector("canvas"), M = i.imageManager.getFromCanvas(x.id, C);
      C.remove();
      const D = ((y = await s._structTree.getAriaAttributes(`${Vf}${v}`)) == null ? void 0 : y.get("aria-label")) || "";
      r = e = {
        annotationType: B.STAMP,
        bitmapId: M.id,
        bitmap: M.bitmap,
        pageIndex: T - 1,
        rect: w.slice(0),
        rotation: _,
        id: v,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: D
        },
        isSvg: !1,
        structParent: E,
        popupRef: S
      };
    }
    const a = await super.deserialize(e, s, i), {
      rect: o,
      bitmap: l,
      bitmapUrl: h,
      bitmapId: c,
      isSvg: f,
      accessibilityData: g
    } = e;
    c && i.imageManager.isValidId(c) ? (p(a, kt, c), l && p(a, nt, l)) : p(a, Us, h), p(a, ge, f);
    const [m, A] = a.pageDimensions;
    return a.width = (o[2] - o[0]) / m, a.height = (o[3] - o[1]) / A, a.annotationElementId = e.id || null, g && (a.altTextData = g), a._initialData = r, p(a, ja, !!r), a;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: B.STAMP,
      bitmapId: n(this, kt),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: n(this, ge),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = b(this, qa, Ac).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = b(this, lu, _m).call(this, i);
      if (l.isSame)
        return null;
      l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = n(this, ge) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(n(this, kt)))
      s.stamps.set(n(this, kt), {
        area: o,
        serialized: i
      }), i.bitmap = b(this, qa, Ac).call(this, !1);
    else if (n(this, ge)) {
      const l = s.stamps.get(n(this, kt));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = b(this, qa, Ac).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
};
nt = new WeakMap(), kt = new WeakMap(), Ti = new WeakMap(), Us = new WeakMap(), Pi = new WeakMap(), Va = new WeakMap(), cs = new WeakMap(), ds = new WeakMap(), ge = new WeakMap(), ja = new WeakMap(), tr = new WeakSet(), Ao = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  p(this, nt, e.bitmap), s || (p(this, kt, e.id), p(this, ge, e.isSvg)), e.file && p(this, Va, e.file.name), b(this, kh, Ff).call(this);
}, er = new WeakSet(), yo = function() {
  if (p(this, Ti, null), this._uiManager.enableWaiting(!1), !!n(this, cs)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, nt)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, nt)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, Wa = new WeakSet(), mc = function() {
  if (n(this, kt)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, kt)).then((i) => b(this, tr, Ao).call(this, i, !0)).finally(() => b(this, er, yo).call(this));
    return;
  }
  if (n(this, Us)) {
    const i = n(this, Us);
    p(this, Us, null), this._uiManager.enableWaiting(!0), p(this, Ti, this._uiManager.imageManager.getFromUrl(i).then((r) => b(this, tr, Ao).call(this, r)).finally(() => b(this, er, yo).call(this)));
    return;
  }
  if (n(this, Pi)) {
    const i = n(this, Pi);
    p(this, Pi, null), this._uiManager.enableWaiting(!0), p(this, Ti, this._uiManager.imageManager.getFromFile(i).then((r) => b(this, tr, Ao).call(this, r)).finally(() => b(this, er, yo).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = wo.supportedTypesStr;
  const s = this._uiManager._signal;
  p(this, Ti, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), b(this, tr, Ao).call(this, r);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => b(this, er, yo).call(this))), e.click();
}, kh = new WeakSet(), Ff = function() {
  var f;
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = n(this, nt);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * r, i = this.height * a;
  else if (s > o * r || i > o * a) {
    const g = Math.min(o * r / s, o * a / i);
    s *= g, i *= g;
  }
  const [l, h] = this.parentDimensions;
  this.setDims(s * l / r, i * h / a), this._uiManager.enableWaiting(!1);
  const c = p(this, cs, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), this.width = s / r, this.height = i / a, (f = this._initialOptions) != null && f.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), b(this, Mh, Nf).call(this), n(this, ja) || (this.parent.addUndoableEditor(this), p(this, ja, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), n(this, Va) && c.setAttribute("aria-label", n(this, Va));
}, Xa = new WeakSet(), bc = function(e, s) {
  const {
    width: i,
    height: r
  } = n(this, nt);
  let a = i, o = r, l = n(this, nt);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const f = new OffscreenCanvas(a, o);
    f.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = f.transferToImageBitmap();
  }
  return l;
}, Mh = new WeakSet(), Nf = function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: r
  } = this, a = new Mu(), o = Math.ceil(i * e * a.sx), l = Math.ceil(r * s * a.sy), h = n(this, cs);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const c = n(this, ge) ? n(this, nt) : b(this, Xa, bc).call(this, o, l), f = h.getContext("2d");
  f.filter = this._uiManager.hcmFilter, f.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
}, qa = new WeakSet(), Ac = function(e) {
  if (e) {
    if (n(this, ge)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, kt));
      if (r)
        return r;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = n(this, nt), s.getContext("2d").drawImage(n(this, nt), 0, 0), s.toDataURL();
  }
  if (n(this, ge)) {
    const [s, i] = this.pageDimensions, r = Math.round(this.width * s * Di.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * Di.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, nt), 0, 0, n(this, nt).width, n(this, nt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, nt));
}, lu = new WeakSet(), _m = function(e) {
  var o;
  const {
    pageIndex: s,
    accessibilityData: {
      altText: i
    }
  } = this._initialData, r = e.pageIndex === s, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === i;
  return {
    isSame: !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a
  };
}, F(wo, "_type", "stamp"), F(wo, "_editorType", B.STAMP);
let Df = wo;
var sr, Ya, us, Ri, Vs, Ce, ki, Ka, ir, ze, js, Ht, Ws, L, Mi, hu, wm, Te, qe, Lh, Hf, Ih, Bf, Qa, yc;
const Pe = class Pe {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: h,
    l10n: c
  }) {
    u(this, hu);
    u(this, Te);
    u(this, Lh);
    u(this, Ih);
    u(this, Qa);
    u(this, sr, void 0);
    u(this, Ya, !1);
    u(this, us, null);
    u(this, Ri, null);
    u(this, Vs, null);
    u(this, Ce, /* @__PURE__ */ new Map());
    u(this, ki, !1);
    u(this, Ka, !1);
    u(this, ir, !1);
    u(this, ze, null);
    u(this, js, null);
    u(this, Ht, null);
    u(this, Ws, null);
    u(this, L, void 0);
    const f = [...n(Pe, Mi).values()];
    if (!Pe._initialized) {
      Pe._initialized = !0;
      for (const g of f)
        g.initialize(c, t);
    }
    t.registerEditorTypes(f), p(this, L, t), this.pageIndex = e, this.div = s, p(this, sr, r), p(this, us, a), this.viewport = h, p(this, Ht, l), this.drawLayer = o, this._structTree = i, n(this, L).addLayer(this);
  }
  get isEmpty() {
    return n(this, Ce).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, L).getMode() === B.NONE;
  }
  updateToolbar(t) {
    n(this, L).updateToolbar(t);
  }
  updateMode(t = n(this, L).getMode()) {
    switch (b(this, Qa, yc).call(this), t) {
      case B.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case B.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case B.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const s of n(Pe, Mi).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = n(this, Ht)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    n(this, L).setEditingState(t);
  }
  addCommands(t) {
    n(this, L).addCommands(t);
  }
  cleanUndoStack(t) {
    n(this, L).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = n(this, us)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    p(this, ir, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const s of n(this, Ce).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (n(this, L).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    if (!n(this, us)) {
      p(this, ir, !1);
      return;
    }
    const e = n(this, us).getEditableAnnotations();
    for (const s of e) {
      if (s.hide(), n(this, L).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
    p(this, ir, !1);
  }
  disable() {
    var i;
    p(this, Ka, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const r of n(this, Ce).values())
      if (r.disableEditing(), !!r.annotationElementId) {
        if (r.serialize() !== null) {
          t.set(r.annotationElementId, r);
          continue;
        } else
          e.set(r.annotationElementId, r);
        (i = this.getEditableAnnotation(r.annotationElementId)) == null || i.show(), r.remove();
      }
    if (n(this, us)) {
      const r = n(this, us).getEditableAnnotations();
      for (const a of r) {
        const {
          id: o
        } = a.data;
        if (n(this, L).isDeletedAnnotationElement(o))
          continue;
        let l = e.get(o);
        if (l) {
          l.resetAnnotationElement(a), l.show(!1), a.show();
          continue;
        }
        l = t.get(o), l && (n(this, L).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(!1)), a.show();
      }
    }
    b(this, Qa, yc).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const r of n(Pe, Mi).values())
      s.remove(`${r._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), p(this, Ka, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = n(this, us)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    n(this, L).getActive() !== t && n(this, L).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = n(this, Ht)) != null && t.div && !n(this, Ws)) {
      p(this, Ws, new AbortController());
      const e = n(this, L).combinedSignal(n(this, Ws));
      n(this, Ht).div.addEventListener("pointerdown", b(this, hu, wm).bind(this), {
        signal: e
      }), n(this, Ht).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = n(this, Ht)) != null && t.div && n(this, Ws) && (n(this, Ws).abort(), p(this, Ws, null), n(this, Ht).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, Ri))
      return;
    p(this, Ri, new AbortController());
    const t = n(this, L).combinedSignal(n(this, Ri));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, {
      signal: t
    }), this.div.addEventListener("pointercancel", e, {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = n(this, Ri)) == null || t.abort(), p(this, Ri, null);
  }
  attach(t) {
    n(this, Ce).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && n(this, L).isDeletedAnnotationElement(e) && n(this, L).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    n(this, Ce).delete(t.id), (e = n(this, sr)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, Ka) && t.annotationElementId && n(this, L).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, L).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, L).addDeletedAnnotationElement(t.annotationElementId), rt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, L).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, ir)), n(this, L).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !n(this, Vs) && (t._focusEventsAllowed = !1, p(this, Vs, setTimeout(() => {
      p(this, Vs, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, L)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = n(this, sr)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), s = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getNextId() {
    return n(this, L).getId();
  }
  combinedSignal(t) {
    return n(this, L).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = n(this, Te, qe)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    n(this, L).updateToolbar(t), n(this, L).updateMode(t);
    const {
      offsetX: s,
      offsetY: i
    } = b(this, Ih, Bf).call(this), r = this.getNextId(), a = b(this, Lh, Hf).call(this, {
      parent: this,
      id: r,
      x: s,
      y: i,
      uiManager: n(this, L),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = n(Pe, Mi).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, L))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), r = b(this, Lh, Hf).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: n(this, L),
      isCentered: e,
      ...s
    });
    return r && this.add(r), r;
  }
  addNewEditor() {
    this.createAndAddNewEditor(b(this, Ih, Bf).call(this), !0);
  }
  setSelected(t) {
    n(this, L).setSelected(t);
  }
  toggleSelected(t) {
    n(this, L).toggleSelected(t);
  }
  unselect(t) {
    n(this, L).unselect(t);
  }
  pointerup(t) {
    var s;
    const {
      isMac: e
    } = qt.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && n(this, ki) && (p(this, ki, !1), !((s = n(this, Te, qe)) != null && s.isDrawer && n(this, Te, qe).supportMultipleDrawings))) {
      if (!n(this, Ya)) {
        p(this, Ya, !0);
        return;
      }
      if (n(this, L).getMode() === B.STAMP) {
        n(this, L).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    var i;
    if (n(this, L).getMode() === B.HIGHLIGHT && this.enableTextSelection(), n(this, ki)) {
      p(this, ki, !1);
      return;
    }
    const {
      isMac: e
    } = qt.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (p(this, ki, !0), (i = n(this, Te, qe)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = n(this, L).getActive();
    p(this, Ya, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus(), n(this, ze)) {
      n(this, Te, qe).startDrawing(this, n(this, L), !1, t);
      return;
    }
    n(this, L).setCurrentDrawingSession(this), p(this, ze, new AbortController());
    const e = n(this, L).combinedSignal(n(this, ze));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (p(this, js, null), this.commitOrRemove());
    }, {
      signal: e
    }), n(this, Te, qe).startDrawing(this, n(this, L), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && p(this, js, e);
      return;
    }
    n(this, js) && setTimeout(() => {
      var e;
      (e = n(this, js)) == null || e.focus(), p(this, js, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return n(this, ze) ? (n(this, L).setCurrentDrawingSession(null), n(this, ze).abort(), p(this, ze, null), p(this, js, null), n(this, Te, qe).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = n(this, L).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return n(this, ze) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    n(this, ze) && n(this, Te, qe).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = n(this, L).getActive()) == null ? void 0 : t.parent) === this && (n(this, L).commitOrRemove(), n(this, L).setActiveEditor(null)), n(this, Vs) && (clearTimeout(n(this, Vs)), p(this, Vs, null));
    for (const s of n(this, Ce).values())
      (e = n(this, sr)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, n(this, Ce).clear(), n(this, L).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, rr(this.div, t);
    for (const e of n(this, L).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    n(this, L).commitOrRemove(), b(this, Qa, yc).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, rr(this.div, {
      rotation: s
    }), e !== s)
      for (const i of n(this, Ce).values())
        i.rotate(s);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return n(this, L).viewParameters.realScale;
  }
};
sr = new WeakMap(), Ya = new WeakMap(), us = new WeakMap(), Ri = new WeakMap(), Vs = new WeakMap(), Ce = new WeakMap(), ki = new WeakMap(), Ka = new WeakMap(), ir = new WeakMap(), ze = new WeakMap(), js = new WeakMap(), Ht = new WeakMap(), Ws = new WeakMap(), L = new WeakMap(), Mi = new WeakMap(), hu = new WeakSet(), wm = function(t) {
  n(this, L).unselectAll();
  const {
    target: e
  } = t;
  if (e === n(this, Ht).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, Ht).div.contains(e)) {
    const {
      isMac: s
    } = qt.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    n(this, L).showAllEditors("highlight", !0, !0), n(this, Ht).div.classList.add("free"), this.toggleDrawing(), Cc.startHighlighting(this, n(this, L).direction === "ltr", {
      target: n(this, Ht).div,
      x: t.x,
      y: t.y
    }), n(this, Ht).div.addEventListener("pointerup", () => {
      n(this, Ht).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, L)._signal
    }), t.preventDefault();
  }
}, Te = new WeakSet(), qe = function() {
  return n(Pe, Mi).get(n(this, L).getMode());
}, Lh = new WeakSet(), Hf = function(t) {
  const e = n(this, Te, qe);
  return e ? new e.prototype.constructor(t) : null;
}, Ih = new WeakSet(), Bf = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (r + o) / 2 - t, c = (a + l) / 2 - e, [f, g] = this.viewport.rotation % 180 === 0 ? [h, c] : [c, h];
  return {
    offsetX: f,
    offsetY: g
  };
}, Qa = new WeakSet(), yc = function() {
  for (const t of n(this, Ce).values())
    t.isEmpty() && t.remove();
}, F(Pe, "_initialized", !1), u(Pe, Mi, new Map([Af, If, Df, Cc].map((t) => [t._editorType, t])));
let Of = Pe;
var Ue, Dh, Xt, nr, cu, vm, Fh, Gf, du, Sm, Nh, zf;
const Dt = class Dt {
  constructor({
    pageIndex: t
  }) {
    u(this, Fh);
    u(this, du);
    u(this, Nh);
    u(this, Ue, null);
    u(this, Dh, 0);
    u(this, Xt, /* @__PURE__ */ new Map());
    u(this, nr, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!n(this, Ue)) {
      p(this, Ue, t);
      return;
    }
    if (n(this, Ue) !== t) {
      if (n(this, Xt).size > 0)
        for (const e of n(this, Xt).values())
          e.remove(), t.append(e);
      p(this, Ue, t);
    }
  }
  static get _svgFactory() {
    return U(this, "_svgFactory", new Qf());
  }
  draw(t, e = !1, s = !1) {
    const i = zt(this, Dh)._++, r = b(this, Fh, Gf).call(this), a = Dt._svgFactory.createElement("defs");
    r.append(a);
    const o = Dt._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, nr).set(i, o);
    const h = s ? b(this, du, Sm).call(this, a, l) : null, c = Dt._svgFactory.createElement("use");
    return r.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, Xt).set(i, r), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = zt(this, Dh)._++, i = b(this, Fh, Gf).call(this), r = Dt._svgFactory.createElement("defs");
    i.append(r);
    const a = Dt._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const f = Dt._svgFactory.createElement("mask");
      r.append(f), l = `mask_p${this.pageIndex}_${s}`, f.setAttribute("id", l), f.setAttribute("maskUnits", "objectBoundingBox");
      const g = Dt._svgFactory.createElement("rect");
      f.append(g), g.setAttribute("width", "1"), g.setAttribute("height", "1"), g.setAttribute("fill", "white");
      const m = Dt._svgFactory.createElement("use");
      f.append(m), m.setAttribute("href", `#${o}`), m.setAttribute("stroke", "none"), m.setAttribute("fill", "black"), m.setAttribute("fill-rule", "nonzero"), m.classList.add("mask");
    }
    const h = Dt._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), n(this, Xt).set(s, i), s;
  }
  finalizeDraw(t, e) {
    n(this, nr).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var l;
    if (!e)
      return;
    const {
      root: s,
      bbox: i,
      rootClass: r,
      path: a
    } = e, o = typeof t == "number" ? n(this, Xt).get(t) : t;
    if (o) {
      if (s && b(this, Nh, zf).call(this, o, s), i && b(l = Dt, cu, vm).call(l, o, i), r) {
        const {
          classList: h
        } = o;
        for (const [c, f] of Object.entries(r))
          h.toggle(c, f);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        b(this, Nh, zf).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = n(this, Xt).get(t);
    s && (n(e, Ue).append(s), n(this, Xt).delete(t), n(e, Xt).set(t, s));
  }
  remove(t) {
    n(this, nr).delete(t), n(this, Ue) !== null && (n(this, Xt).get(t).remove(), n(this, Xt).delete(t));
  }
  destroy() {
    p(this, Ue, null);
    for (const t of n(this, Xt).values())
      t.remove();
    n(this, Xt).clear(), n(this, nr).clear();
  }
};
Ue = new WeakMap(), Dh = new WeakMap(), Xt = new WeakMap(), nr = new WeakMap(), cu = new WeakSet(), vm = function(t, [e, s, i, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * r}%`;
}, Fh = new WeakSet(), Gf = function() {
  const t = Dt._svgFactory.create(1, 1, !0);
  return n(this, Ue).append(t), t.setAttribute("aria-hidden", !0), t;
}, du = new WeakSet(), Sm = function(t, e) {
  const s = Dt._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = Dt._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
}, Nh = new WeakSet(), zf = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, u(Dt, cu);
let $f = Dt;
globalThis.pdfjsTestingUtils = {
  HighlightOutliner: _f
};
var TA = H.AbortException, PA = H.AnnotationEditorLayer, RA = H.AnnotationEditorParamsType, kA = H.AnnotationEditorType, MA = H.AnnotationEditorUIManager, LA = H.AnnotationLayer, IA = H.AnnotationMode, DA = H.ColorPicker, FA = H.DOMSVGFactory, NA = H.DrawLayer, OA = H.FeatureTest, HA = H.GlobalWorkerOptions, BA = H.ImageKind, $A = H.InvalidPDFException, GA = H.MissingPDFException, zA = H.OPS, UA = H.OutputScale, VA = H.PDFDataRangeTransport, jA = H.PDFDateString, WA = H.PDFWorker, XA = H.PasswordResponses, qA = H.PermissionFlag, YA = H.PixelsPerInch, KA = H.RenderingCancelledException, QA = H.TextLayer, JA = H.TouchManager, ZA = H.UnexpectedResponseException, ty = H.Util, ey = H.VerbosityLevel, sy = H.XfaLayer, iy = H.build, ny = H.createValidAbsoluteUrl, ry = H.fetchData, ay = H.getDocument, oy = H.getFilenameFromUrl, ly = H.getPdfFilenameFromUrl, hy = H.getXfaPageViewport, cy = H.isDataScheme, dy = H.isPdfFile, uy = H.noContextMenu, fy = H.normalizeUnicode, py = H.setLayerDimensions, gy = H.shadow, my = H.stopEvent, by = H.version;
export {
  TA as AbortException,
  PA as AnnotationEditorLayer,
  RA as AnnotationEditorParamsType,
  kA as AnnotationEditorType,
  MA as AnnotationEditorUIManager,
  LA as AnnotationLayer,
  IA as AnnotationMode,
  DA as ColorPicker,
  FA as DOMSVGFactory,
  NA as DrawLayer,
  OA as FeatureTest,
  HA as GlobalWorkerOptions,
  BA as ImageKind,
  $A as InvalidPDFException,
  GA as MissingPDFException,
  zA as OPS,
  UA as OutputScale,
  VA as PDFDataRangeTransport,
  jA as PDFDateString,
  WA as PDFWorker,
  XA as PasswordResponses,
  qA as PermissionFlag,
  YA as PixelsPerInch,
  KA as RenderingCancelledException,
  QA as TextLayer,
  JA as TouchManager,
  ZA as UnexpectedResponseException,
  ty as Util,
  ey as VerbosityLevel,
  sy as XfaLayer,
  iy as build,
  ny as createValidAbsoluteUrl,
  ry as fetchData,
  ay as getDocument,
  oy as getFilenameFromUrl,
  ly as getPdfFilenameFromUrl,
  hy as getXfaPageViewport,
  cy as isDataScheme,
  dy as isPdfFile,
  uy as noContextMenu,
  fy as normalizeUnicode,
  py as setLayerDimensions,
  gy as shadow,
  my as stopEvent,
  by as version
};
