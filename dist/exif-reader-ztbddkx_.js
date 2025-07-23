let kt = class {
  constructor(t) {
    if (Mn(t))
      throw new Error("DataView: Passed buffer type is unsupported.");
    this.buffer = t, this.byteLength = this.buffer.length;
  }
  getUint8(t) {
    return this.buffer.readUInt8(t);
  }
  getUint16(t, n) {
    return n ? this.buffer.readUInt16LE(t) : this.buffer.readUInt16BE(t);
  }
  getUint32(t, n) {
    return n ? this.buffer.readUInt32LE(t) : this.buffer.readUInt32BE(t);
  }
  getInt32(t, n) {
    return n ? this.buffer.readInt32LE(t) : this.buffer.readInt32BE(t);
  }
};
function Mn(e) {
  return typeof e != "object" || e.length === void 0 || e.readUInt8 === void 0 || e.readUInt16LE === void 0 || e.readUInt16BE === void 0 || e.readUInt32LE === void 0 || e.readUInt32BE === void 0 || e.readInt32LE === void 0 || e.readInt32BE === void 0;
}
function ve(e, t, n) {
  try {
    return new DataView(e, t, n);
  } catch {
    return new kt(e, t, n);
  }
}
function E(e, t, n) {
  const r = [];
  for (let i = 0; i < n && t + i < e.byteLength; i++)
    r.push(e.getUint8(t + i));
  return W(r);
}
function Y(e, t) {
  const n = [];
  let r = 0;
  for (; t + r < e.byteLength; ) {
    const i = e.getUint8(t + r);
    if (i === 0)
      break;
    n.push(i), r++;
  }
  return W(n);
}
function Bn(e, t, n) {
  const r = [];
  for (let i = 0; i < n && t + i < e.byteLength; i += 2)
    r.push(e.getUint16(t + i));
  return r[r.length - 1] === 0 && r.pop(), W(r);
}
function Zt(e, t) {
  const n = e.getUint8(t), r = E(e, t + 1, n);
  return [n, r];
}
function W(e) {
  return e.map((t) => String.fromCharCode(t)).join("");
}
function x() {
  for (let e = 1; e < arguments.length; e++)
    for (const t in arguments[e])
      arguments[0][t] = arguments[e][t];
  return arguments[0];
}
function Ht(e, t, n) {
  let r = !1;
  Object.defineProperty(e, t, {
    get() {
      return r || (r = !0, Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n.apply(e),
        writable: !0
      })), e[t];
    },
    configurable: !0,
    enumerable: !0
  });
}
function $t(e) {
  if (typeof btoa < "u")
    return btoa(typeof e == "string" ? e : Array.prototype.reduce.call(new Uint8Array(e), (t, n) => t + String.fromCharCode(n), ""));
  if (!(typeof Buffer > "u"))
    return typeof Buffer.from < "u" ? Buffer.from(e).toString("base64") : new Buffer(e).toString("base64");
}
function Gn(e) {
  const t = e.substring(e.indexOf(",") + 1);
  if (e.indexOf(";base64") !== -1)
    return typeof atob < "u" ? Uint8Array.from(atob(t), (r) => r.charCodeAt(0)).buffer : typeof Buffer > "u" ? void 0 : typeof Buffer.from < "u" ? Buffer.from(t, "base64") : new Buffer(t, "base64");
  const n = decodeURIComponent(t);
  return typeof Buffer < "u" ? typeof Buffer.from < "u" ? Buffer.from(n) : new Buffer(n) : Uint8Array.from(n, (r) => r.charCodeAt(0)).buffer;
}
function kn(e, t, n) {
  return Xt(n, t - e.length) + e;
}
function Zn(e, t) {
  return parseInt(e.replace(".", ""), t) / Math.pow(t, (e.split(".")[1] || "").length);
}
function Xt(e, t) {
  return new Array(t + 1).join(e);
}
const fe = void 0, Yt = 0;
function zt(e, t, n, r = "string") {
  if (t === Yt && typeof DecompressionStream == "function") {
    const i = new DecompressionStream("deflate"), s = new Blob([e]).stream().pipeThrough(i);
    return r === "dataview" ? new Response(s).arrayBuffer().then((o) => new DataView(o)) : new Response(s).arrayBuffer().then((o) => new TextDecoder(n).decode(o));
  }
  return t !== void 0 ? Promise.reject(`Unknown compression method ${t}.`) : e;
}
const qe = {
  USE_FILE: !0,
  USE_JFIF: !0,
  USE_PNG_FILE: !0,
  USE_EXIF: !0,
  USE_IPTC: !0,
  USE_XMP: !0,
  USE_ICC: !0,
  USE_MPF: !0,
  USE_PHOTOSHOP: !0,
  USE_THUMBNAIL: !0,
  USE_TIFF: !0,
  USE_JPEG: !0,
  USE_PNG: !0,
  USE_HEIC: !0,
  USE_AVIF: !0,
  USE_WEBP: !0,
  USE_GIF: !0,
  USE_MAKER_NOTES: !0
};
function I(e) {
  return e.map((t) => String.fromCharCode(t)).join("");
}
function Ce(e) {
  if (e.length >= 8) {
    const t = I(e.slice(0, 8));
    if (t === "ASCII\0\0\0")
      return I(e.slice(8));
    if (t === "JIS\0\0\0\0\0")
      return "[JIS encoded text]";
    if (t === "UNICODE\0")
      return "[Unicode encoded text]";
    if (t === "\0\0\0\0\0\0\0\0")
      return "[Undefined encoding]";
  }
  return "Undefined";
}
function ae(e) {
  return e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600;
}
const be = 18761, Ne = 19789, Z = {
  BIG_ENDIAN: Ne,
  LITTLE_ENDIAN: be,
  getByteOrder: Hn
};
function Hn(e, t) {
  if (e.getUint16(t) === be)
    return be;
  if (e.getUint16(t) === Ne)
    return Ne;
  throw new Error("Illegal byte order value. Faulty image.");
}
const we = {
  isTiffFile: $n,
  findTiffOffsets: Yn
};
function $n(e) {
  return !!e && e.byteLength >= 4 && Xn(e);
}
function Xn(e) {
  const r = e.getUint16(0) === Z.LITTLE_ENDIAN;
  return e.getUint16(2, r) === 42;
}
function Yn() {
  return {
    hasAppMarkers: !0,
    tiffHeaderOffset: 0
  };
}
const Qe = {
  isJpegFile: or,
  findJpegOffsets: sr
}, zn = 2, Kn = 65496, Ve = 2, C = 4, _ = 2, Wn = 2, jn = 10, Jn = 18, et = 33, tt = 79, nt = 18, vn = 8, ye = "ICC_PROFILE\0", Kt = C + ye.length, qn = Kt + 1, rt = "MPF\0", Wt = 65472, jt = 65474, wn = 65476, Qn = 65499, Vn = 65501, er = 65498, Jt = 65504, $e = 65505, vt = 65506, tr = 65517, nr = 65519, rr = 65534, ir = 65535, it = "JFIF", ot = "Exif", st = "http://ns.adobe.com/xap/1.0/\0", ut = "http://ns.adobe.com/xmp/extension/\0", ct = "Photoshop 3.0";
function or(e) {
  return !!e && e.byteLength >= zn && e.getUint16(0) === Kn;
}
function sr(e) {
  let t = Ve, n, r, i, s, o, u, f, l, a;
  for (; t + C + 5 <= e.byteLength; ) {
    if (ur(e, t))
      n = e.getUint16(t + _), r = t + _;
    else if (cr(e, t))
      n = e.getUint16(t + _), i = t + _;
    else if (lr(e, t))
      n = e.getUint16(t + _), s = t + Wn;
    else if (dr(e, t))
      n = e.getUint16(t + _), o = t + jn;
    else if (pr(e, t))
      f || (f = []), n = e.getUint16(t + _), f.push(Sr(t, n));
    else if (mr(e, t))
      f || (f = []), n = e.getUint16(t + _), f.push(xr(t, n));
    else if (hr(e, t))
      n = e.getUint16(t + _), u = t + Jn;
    else if (fr(e, t)) {
      n = e.getUint16(t + _);
      const d = t + nt, g = n - (nt - _), S = e.getUint8(t + Kt), T = e.getUint8(t + qn);
      l || (l = []), l.push({ offset: d, length: g, chunkNumber: S, chunksTotal: T });
    } else if (ar(e, t))
      n = e.getUint16(t + _), a = t + vn;
    else if (Ir(e, t))
      n = e.getUint16(t + _);
    else if (Tr(e, t)) {
      t++;
      continue;
    } else
      break;
    t += _ + n;
  }
  return {
    hasAppMarkers: t > Ve,
    fileDataOffset: r || i,
    jfifDataOffset: s,
    tiffHeaderOffset: o,
    iptcDataOffset: u,
    xmpChunks: f,
    iccChunks: l,
    mpfDataOffset: a
  };
}
function ur(e, t) {
  return e.getUint16(t) === Wt;
}
function cr(e, t) {
  return e.getUint16(t) === jt;
}
function fr(e, t) {
  const n = ye.length;
  return e.getUint16(t) === vt && E(e, t + C, n) === ye;
}
function ar(e, t) {
  const n = rt.length;
  return e.getUint16(t) === vt && E(e, t + C, n) === rt;
}
function lr(e, t) {
  const n = it.length;
  return e.getUint16(t) === Jt && E(e, t + C, n) === it && e.getUint8(t + C + n) === 0;
}
function dr(e, t) {
  const n = ot.length;
  return e.getUint16(t) === $e && E(e, t + C, n) === ot && e.getUint8(t + C + n) === 0;
}
function pr(e, t) {
  return e.getUint16(t) === $e && gr(e, t);
}
function gr(e, t) {
  const n = st.length;
  return E(e, t + C, n) === st;
}
function mr(e, t) {
  return e.getUint16(t) === $e && Er(e, t);
}
function Er(e, t) {
  const n = ut.length;
  return E(e, t + C, n) === ut;
}
function Sr(e, t) {
  return {
    dataOffset: e + et,
    length: t - (et - _)
  };
}
function xr(e, t) {
  return {
    dataOffset: e + tt,
    length: t - (tt - _)
  };
}
function hr(e, t) {
  const n = ct.length;
  return e.getUint16(t) === tr && E(e, t + C, n) === ct && e.getUint8(t + C + n) === 0;
}
function Ir(e, t) {
  const n = e.getUint16(t);
  return n >= Jt && n <= nr || n === rr || n === Wt || n === jt || n === wn || n === Qn || n === Vn || n === er;
}
function Tr(e, t) {
  return e.getUint16(t) === ir;
}
const ft = {
  isPngFile: Ar,
  findPngOffsets: Pr
}, Oe = `PNG\r

`, le = 4, N = 4, z = 0, B = le, F = le + N, Re = "XML:com.adobe.xmp\0", Xe = "tEXt", k = "iTXt", pe = "zTXt", qt = "pHYs", wt = "tIME", Fr = "eXIf", _r = "iCCP";
function Ar(e) {
  return !!e && E(e, 0, Oe.length) === Oe;
}
function Pr(e, t) {
  const r = {
    hasAppMarkers: !1
  };
  let i = Oe.length;
  for (; i + le + N <= e.byteLength; ) {
    if (Cr(e, i))
      r.hasAppMarkers = !0, r.pngHeaderOffset = i + F;
    else if (br(e, i)) {
      const s = Dr(e, i);
      s !== void 0 && (r.hasAppMarkers = !0, r.xmpChunks = [{
        dataOffset: s,
        length: e.getUint32(i + z) - (s - (i + F))
      }]);
    } else if (Nr(e, i, t)) {
      r.hasAppMarkers = !0;
      const s = E(e, i + B, N);
      r.pngTextChunks || (r.pngTextChunks = []), r.pngTextChunks.push({
        length: e.getUint32(i + z),
        type: s,
        offset: i + F
      });
    } else if (yr(e, i))
      r.hasAppMarkers = !0, r.tiffHeaderOffset = i + F;
    else if (t && Or(e, i)) {
      r.hasAppMarkers = !0;
      const s = e.getUint32(i + z), o = i + F, { profileName: u, compressionMethod: f, compressedProfileOffset: l } = Ur(e, o);
      r.iccChunks || (r.iccChunks = []), r.iccChunks.push({
        offset: l,
        length: s - (l - o),
        chunkNumber: 1,
        chunksTotal: 1,
        profileName: u,
        compressionMethod: f
      });
    } else
      Rr(e, i) && (r.hasAppMarkers = !0, r.pngChunkOffsets || (r.pngChunkOffsets = []), r.pngChunkOffsets.push(i + z));
    i += e.getUint32(i + z) + le + N + 4;
  }
  return r;
}
function Cr(e, t) {
  return E(e, t + B, N) === "IHDR";
}
function br(e, t) {
  return E(e, t + B, N) === k && E(e, t + F, Re.length) === Re;
}
function Nr(e, t, n) {
  const r = E(e, t + B, N);
  return r === Xe || r === k || r === pe && n;
}
function yr(e, t) {
  return E(e, t + B, N) === Fr;
}
function Or(e, t) {
  return E(e, t + B, N) === _r;
}
function Rr(e, t) {
  const n = [qt, wt], r = E(e, t + B, N);
  return n.includes(r);
}
function Dr(e, t) {
  t += F + Re.length + 1 + 1;
  let i = 0;
  for (; i < 2 && t < e.byteLength; )
    e.getUint8(t) === 0 && i++, t++;
  if (!(i < 2))
    return t;
}
function Ur(e, t) {
  const i = Y(e, t);
  t += i.length + 1;
  const s = e.getUint8(t);
  return t += 1, {
    profileName: i,
    compressionMethod: s,
    compressedProfileOffset: t
  };
}
function Lr(e, t) {
  return e.getUint32(t + 4);
}
function Mr(e, t, n, r) {
  const { offsets: s, sizes: o } = Br(t, n + 3), u = e.getUint8(s.offsetSize) >> 4;
  o.item.extent.extentOffset = u;
  const f = e.getUint8(s.lengthSize) & 15;
  o.item.extent.extentLength = f;
  const l = e.getUint8(s.baseOffsetSize) >> 4;
  o.item.baseOffset = l;
  const a = Gr(e, s.indexSize, t);
  o.item.extent.extentIndex = a !== void 0 ? a : 0;
  const d = kr(e, s.itemCount, t);
  return {
    type: "iloc",
    items: Zr(e, t, s, o, u, f, a, d),
    length: r
  };
}
function Br(e, t) {
  const n = {
    item: {
      dataReferenceIndex: 2,
      extentCount: 2,
      extent: {}
    }
  };
  e < 2 ? (n.itemCount = 2, n.item.itemId = 2) : e === 2 && (n.itemCount = 4, n.item.itemId = 4), e === 1 || e === 2 ? n.item.constructionMethod = 2 : n.item.constructionMethod = 0;
  const r = {
    offsetSize: t,
    lengthSize: t,
    baseOffsetSize: t + 1,
    indexSize: t + 1
  };
  return r.itemCount = t + 2, r.items = r.itemCount + n.itemCount, r.item = {
    itemId: 0
  }, r.item.constructionMethod = r.item.itemId + n.item.itemId, r.item.dataReferenceIndex = r.item.constructionMethod + n.item.constructionMethod, { offsets: r, sizes: n };
}
function Gr(e, t, n) {
  if (n === 1 || n === 2)
    return e.getUint8(t) & 15;
}
function kr(e, t, n) {
  if (n < 2)
    return e.getUint16(t);
  if (n === 2)
    return e.getUint32(t);
}
function Zr(e, t, n, r, i, s, o, u) {
  if (u === void 0)
    return [];
  const f = [];
  let l = n.items;
  for (let a = 0; a < u; a++) {
    const d = { extents: [] };
    d.itemId = Hr(e, l, t), l += r.item.itemId, d.constructionMethod = t === 1 || t === 2 ? e.getUint16(l) & 15 : void 0, l += r.item.constructionMethod, d.dataReferenceIndex = e.getUint16(l), l += r.item.dataReferenceIndex, d.baseOffset = se(e, l, r.item.baseOffset), l += r.item.baseOffset, d.extentCount = e.getUint16(l), l += r.item.extentCount;
    for (let g = 0; g < d.extentCount; g++) {
      const S = {};
      S.extentIndex = $r(e, t, l, o), l += r.item.extent.extentIndex, S.extentOffset = se(e, l, i), l += r.item.extent.extentOffset, S.extentLength = se(e, l, s), l += r.item.extent.extentLength, d.extents.push(S);
    }
    f.push(d);
  }
  return f;
}
function Hr(e, t, n) {
  if (n < 2)
    return e.getUint16(t);
  if (n === 2)
    return e.getUint32(t);
}
function $r(e, t, n, r) {
  if ((t === 1 || t === 2) && r > 0)
    return se(e, n, r);
}
function se(e, t, n) {
  return n === 4 ? e.getUint32(t) : n === 8 ? (console.warn("This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed."), Lr(e, t)) : 0;
}
const Xr = 1718909296, Yr = 1768977008, zr = 1835365473, Kr = 1768714083, Wr = 1768517222, jr = 1768842853, Jr = 1768973167, vr = 1668246642, Qt = 1165519206, Ye = 1835625829, qr = 1970432288;
function ge(e, t) {
  const { length: s, contentOffset: o } = wr(e, t);
  if (s < 8)
    return;
  const u = e.getUint32(t + 4);
  if (u === Xr)
    return ci(e, o, s);
  if (u === Yr)
    return fi(e, t, o, s);
  if (u === Jr)
    return ai(e, t, o, s);
  if (u === vr)
    return li(e, o, s);
  const f = e.getUint8(o);
  return u === zr ? pi(e, t, o + 1, s) : u === Kr ? Mr(e, f, o + 1, s) : u === Wr ? gi(e, t, f, o + 1, s) : u === jr ? Ei(e, t, f, o + 1, s) : {
    // type: getStringFromDataView(dataView, offset + BOX_TYPE_OFFSET, 4),
    type: void 0,
    length: s
  };
}
function wr(e, t) {
  const o = e.getUint32(t);
  return Qr(o) ? {
    length: e.byteLength - t,
    contentOffset: t + 4 + 4
  } : Vr(o) && ei(e, t) ? {
    length: e.getUint32(t + 12),
    contentOffset: t + 4 + 4 + 8
  } : {
    length: o,
    contentOffset: t + 4 + 4
  };
}
function Qr(e) {
  return e === 0;
}
function Vr(e) {
  return e === 1;
}
function ei(e, t) {
  return e.getUint32(t + 8) === 0;
}
function Vt(e) {
  {
    const t = {}, n = ti(e);
    return n ? (t.tiffHeaderOffset = ni(e, n), t.xmpChunks = oi(n), t.iccChunks = ui(n), t.hasAppMarkers = t.tiffHeaderOffset !== void 0 || t.xmpChunks !== void 0 || t.iccChunks !== void 0, t) : { hasAppMarkers: !1 };
  }
}
function ti(e) {
  let r = 0;
  for (; r + 4 + 4 <= e.byteLength; ) {
    const i = ge(e, r);
    if (i === void 0)
      break;
    if (i.type === "meta")
      return i;
    r += i.length;
  }
}
function ni(e, t) {
  try {
    const n = ri(t).itemId, r = De(t, n), i = r.baseOffset + r.extents[0].extentOffset;
    return ii(e, i);
  } catch {
    return;
  }
}
function ri(e) {
  return e.subBoxes.find((t) => t.type === "iinf").itemInfos.find((t) => t.itemType === Qt);
}
function De(e, t) {
  return e.subBoxes.find((n) => n.type === "iloc").items.find((n) => n.itemId === t);
}
function ii(e, t) {
  return t + 4 + e.getUint32(t);
}
function oi(e) {
  try {
    const t = si(e).itemId, n = De(e, t), r = De(e, t).extents[0];
    return [
      {
        dataOffset: n.baseOffset + r.extentOffset,
        length: r.extentLength
      }
    ];
  } catch {
    return;
  }
}
function si(e) {
  return e.subBoxes.find((t) => t.type === "iinf").itemInfos.find((t) => t.itemType === Ye && t.contentType === "application/rdf+xml");
}
function ui(e) {
  try {
    const t = e.subBoxes.find((n) => n.type === "iprp").subBoxes.find((n) => n.type === "ipco").properties.find((n) => n.type === "colr").icc;
    if (t)
      return [t];
  } catch {
  }
}
function ci(e, t, n) {
  return {
    type: "ftyp",
    majorBrand: E(e, t, 4),
    length: n
  };
}
function fi(e, t, n, r) {
  return {
    type: "iprp",
    subBoxes: me(e, n, r - (n - t)),
    length: r
  };
}
function ai(e, t, n, r) {
  return {
    type: "ipco",
    properties: me(e, n, r - (n - t)),
    length: r
  };
}
function li(e, t, n) {
  return {
    type: "colr",
    icc: di(e, t),
    length: n
  };
}
function di(e, t) {
  const r = E(e, t, 4);
  if (!(r !== "prof" && r !== "rICC"))
    return {
      offset: t + 4,
      length: e.getUint32(t + 4),
      chunkNumber: 1,
      chunksTotal: 1
    };
}
function pi(e, t, n, r) {
  return {
    type: "meta",
    subBoxes: me(e, n + 3, r - (n + 3 - t)),
    length: r
  };
}
function me(e, t, n) {
  const r = [
    Qt,
    Ye
  ], i = [];
  let s = t;
  for (; s < t + n; ) {
    const o = ge(e, s);
    if (o === void 0)
      break;
    o.type !== void 0 && (o.itemType === void 0 || r.indexOf(o.itemType) !== -1) && i.push(o), s += o.length;
  }
  return i;
}
function gi(e, t, n, r, i) {
  const { offsets: s } = mi(n, r);
  return {
    type: "iinf",
    itemInfos: me(e, s.itemInfos, i - (s.itemInfos - t)),
    length: i
  };
}
function mi(e, t) {
  const r = { entryCount: t + 3 }, i = {};
  return e === 0 ? i.entryCount = 2 : i.entryCount = 4, r.itemInfos = r.entryCount + i.entryCount, { offsets: r };
}
function Ei(e, t, n, r, i) {
  r += 3;
  const o = { type: "infe", length: i };
  return (n === 0 || n === 1) && (o.itemId = e.getUint16(r), r += 2, o.itemProtectionIndex = e.getUint16(r), r += 2, o.itemName = Y(e, r), r += o.itemName.length + 1), n >= 2 && (n === 2 ? (o.itemId = e.getUint16(r), r += 2) : n === 3 && (o.itemId = e.getUint32(r), r += 4), o.itemProtectionIndex = e.getUint16(r), r += 2, o.itemType = e.getUint32(r), r += 4, o.itemName = Y(e, r), r += o.itemName.length + 1, o.itemType === Ye ? (o.contentType = Y(e, r), r += o.contentType.length + 1, t + i > r && (o.contentEncoding = Y(e, r), r += o.contentEncoding.length + 1)) : o.itemType === qr && (o.itemUri = Y(e, r), r += o.itemUri.length + 1)), o;
}
const at = {
  isHeicFile: Si,
  findHeicOffsets: xi
};
function Si(e) {
  if (!e)
    return !1;
  const t = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
  try {
    const n = ge(e, 0);
    return n && t.indexOf(n.majorBrand) !== -1;
  } catch {
    return !1;
  }
}
function xi(e) {
  return Vt(e);
}
const lt = {
  isAvifFile: hi,
  findAvifOffsets: Ii
};
function hi(e) {
  if (!e)
    return !1;
  try {
    const t = ge(e, 0);
    return t && t.majorBrand === "avif";
  } catch {
    return !1;
  }
}
function Ii(e) {
  return Vt(e);
}
const dt = {
  isWebpFile: Ti,
  findOffsets: Fi
};
function Ti(e) {
  const n = "RIFF", i = "WEBP";
  return !!e && E(e, 0, n.length) === n && E(e, 8, i.length) === i;
}
function Fi(e) {
  const r = "Exif\0\0";
  let s = 12, o = !1, u, f, l, a;
  for (; s + 8 < e.byteLength; ) {
    const d = E(e, s, 4), g = e.getUint32(s + 4, !0);
    d === "EXIF" ? (o = !0, E(e, s + 8, r.length) === r ? u = s + 8 + r.length : u = s + 8) : d === "XMP " ? (o = !0, f = [{
      dataOffset: s + 8,
      length: g
    }]) : d === "ICCP" ? (o = !0, l = [{
      offset: s + 8,
      length: g,
      chunkNumber: 1,
      chunksTotal: 1
    }]) : d === "VP8X" && (o = !0, a = s + 8), s += 8 + (g % 2 === 0 ? g : g + 1);
  }
  return {
    hasAppMarkers: o,
    tiffHeaderOffset: u,
    xmpChunks: f,
    iccChunks: l,
    vp8xChunkOffset: a
  };
}
const pt = {
  isGifFile: Pi,
  findOffsets: Ci
}, _i = 6, Ai = ["GIF87a", "GIF89a"];
function Pi(e) {
  return !!e && Ai.includes(E(e, 0, _i));
}
function Ci() {
  return {
    gifHeaderOffset: 0
  };
}
const gt = {
  isXMLFile: bi,
  findOffsets: Ni
}, en = 0, mt = "<?xpacket begin";
function bi(e) {
  return !!e && E(e, en, mt.length) === mt;
}
function Ni(e) {
  const t = [];
  return t.push({ dataOffset: en, length: e.byteLength }), {
    xmpChunks: t
  };
}
const yi = {
  parseAppMarkers: Oi
};
function Oi(e, t) {
  if (we.isTiffFile(e))
    return U(we.findTiffOffsets(), "tiff", "TIFF");
  if (Qe.isJpegFile(e))
    return U(Qe.findJpegOffsets(e), "jpeg", "JPEG");
  if (ft.isPngFile(e))
    return U(ft.findPngOffsets(e, t), "png", "PNG");
  if (at.isHeicFile(e))
    return U(at.findHeicOffsets(e), "heic", "HEIC");
  if (lt.isAvifFile(e))
    return U(lt.findAvifOffsets(e), "avif", "AVIF");
  if (dt.isWebpFile(e))
    return U(dt.findOffsets(e), "webp", "WebP");
  if (pt.isGifFile(e))
    return U(pt.findOffsets(e), "gif", "GIF");
  if (gt.isXMLFile(e))
    return U(gt.findOffsets(e), "xml", "XML");
  throw new Error("Invalid image format");
}
function U(e, t, n) {
  return x({}, e, { fileType: { value: t, description: n } });
}
const m = {
  ApertureValue: (e) => Math.pow(Math.sqrt(2), e[0] / e[1]).toFixed(2),
  ColorSpace(e) {
    return e === 1 ? "sRGB" : e === 65535 ? "Uncalibrated" : "Unknown";
  },
  ComponentsConfiguration(e) {
    return e.map((t) => {
      if (t === 49)
        return "Y";
      if (t === 50)
        return "Cb";
      if (t === 51)
        return "Cr";
      if (t === 52)
        return "R";
      if (t === 53)
        return "G";
      if (t === 54)
        return "B";
    }).join("");
  },
  Contrast(e) {
    return e === 0 ? "Normal" : e === 1 ? "Soft" : e === 2 ? "Hard" : "Unknown";
  },
  CustomRendered(e) {
    return e === 0 ? "Normal process" : e === 1 ? "Custom process" : "Unknown";
  },
  ExposureMode(e) {
    return e === 0 ? "Auto exposure" : e === 1 ? "Manual exposure" : e === 2 ? "Auto bracket" : "Unknown";
  },
  ExposureProgram(e) {
    return e === 0 ? "Undefined" : e === 1 ? "Manual" : e === 2 ? "Normal program" : e === 3 ? "Aperture priority" : e === 4 ? "Shutter priority" : e === 5 ? "Creative program" : e === 6 ? "Action program" : e === 7 ? "Portrait mode" : e === 8 ? "Landscape mode" : e === 9 ? "Bulb" : "Unknown";
  },
  ExposureTime(e) {
    if (e[0] / e[1] > 0.25) {
      const t = e[0] / e[1];
      return Number.isInteger(t) ? "" + t : t.toFixed(1);
    }
    return e[0] !== 0 ? `1/${Math.round(e[1] / e[0])}` : `0/${e[1]}`;
  },
  FNumber: (e) => `f/${e[0] / e[1]}`,
  FocalLength: (e) => e[0] / e[1] + " mm",
  FocalPlaneResolutionUnit(e) {
    return e === 2 ? "inches" : e === 3 ? "centimeters" : "Unknown";
  },
  LightSource: (e) => e === 1 ? "Daylight" : e === 2 ? "Fluorescent" : e === 3 ? "Tungsten (incandescent light)" : e === 4 ? "Flash" : e === 9 ? "Fine weather" : e === 10 ? "Cloudy weather" : e === 11 ? "Shade" : e === 12 ? "Daylight fluorescent (D 5700 – 7100K)" : e === 13 ? "Day white fluorescent (N 4600 – 5400K)" : e === 14 ? "Cool white fluorescent (W 3900 – 4500K)" : e === 15 ? "White fluorescent (WW 3200 – 3700K)" : e === 17 ? "Standard light A" : e === 18 ? "Standard light B" : e === 19 ? "Standard light C" : e === 20 ? "D55" : e === 21 ? "D65" : e === 22 ? "D75" : e === 23 ? "D50" : e === 24 ? "ISO studio tungsten" : e === 255 ? "Other light source" : "Unknown",
  MeteringMode(e) {
    return e === 1 ? "Average" : e === 2 ? "CenterWeightedAverage" : e === 3 ? "Spot" : e === 4 ? "MultiSpot" : e === 5 ? "Pattern" : e === 6 ? "Partial" : e === 255 ? "Other" : "Unknown";
  },
  ResolutionUnit(e) {
    return e === 2 ? "inches" : e === 3 ? "centimeters" : "Unknown";
  },
  Saturation(e) {
    return e === 0 ? "Normal" : e === 1 ? "Low saturation" : e === 2 ? "High saturation" : "Unknown";
  },
  SceneCaptureType(e) {
    return e === 0 ? "Standard" : e === 1 ? "Landscape" : e === 2 ? "Portrait" : e === 3 ? "Night scene" : "Unknown";
  },
  Sharpness(e) {
    return e === 0 ? "Normal" : e === 1 ? "Soft" : e === 2 ? "Hard" : "Unknown";
  },
  ShutterSpeedValue(e) {
    const t = Math.pow(2, e[0] / e[1]);
    return t <= 1 ? `${Math.round(1 / t)}` : `1/${Math.round(t)}`;
  },
  WhiteBalance(e) {
    return e === 0 ? "Auto white balance" : e === 1 ? "Manual white balance" : "Unknown";
  },
  XResolution: (e) => "" + Math.round(e[0] / e[1]),
  YResolution: (e) => "" + Math.round(e[0] / e[1])
}, tn = {
  11: "ProcessingSoftware",
  254: {
    name: "SubfileType",
    description: (e) => ({
      0: "Full-resolution image",
      1: "Reduced-resolution image",
      2: "Single page of multi-page image",
      3: "Single page of multi-page reduced-resolution image",
      4: "Transparency mask",
      5: "Transparency mask of reduced-resolution image",
      6: "Transparency mask of multi-page image",
      7: "Transparency mask of reduced-resolution multi-page image",
      65537: "Alternate reduced-resolution image",
      4294967295: "Invalid"
    })[e] || "Unknown"
  },
  255: {
    name: "OldSubfileType",
    description: (e) => ({
      0: "Full-resolution image",
      1: "Reduced-resolution image",
      2: "Single page of multi-page image"
    })[e] || "Unknown"
  },
  256: "ImageWidth",
  257: "ImageLength",
  258: "BitsPerSample",
  259: "Compression",
  262: "PhotometricInterpretation",
  263: {
    name: "Thresholding",
    description: (e) => ({
      1: "No dithering or halftoning",
      2: "Ordered dither or halfton",
      3: "Randomized dither"
    })[e] || "Unknown"
  },
  264: "CellWidth",
  265: "CellLength",
  266: {
    name: "FillOrder",
    description: (e) => ({
      1: "Normal",
      2: "Reversed"
    })[e] || "Unknown"
  },
  269: "DocumentName",
  270: "ImageDescription",
  271: "Make",
  272: "Model",
  273: "StripOffsets",
  274: {
    name: "Orientation",
    description: (e) => e === 1 ? "top-left" : e === 2 ? "top-right" : e === 3 ? "bottom-right" : e === 4 ? "bottom-left" : e === 5 ? "left-top" : e === 6 ? "right-top" : e === 7 ? "right-bottom" : e === 8 ? "left-bottom" : "Undefined"
  },
  277: "SamplesPerPixel",
  278: "RowsPerStrip",
  279: "StripByteCounts",
  280: "MinSampleValue",
  281: "MaxSampleValue",
  282: {
    name: "XResolution",
    description: m.XResolution
  },
  283: {
    name: "YResolution",
    description: m.YResolution
  },
  284: "PlanarConfiguration",
  285: "PageName",
  286: {
    name: "XPosition",
    description: (e) => "" + Math.round(e[0] / e[1])
  },
  287: {
    name: "YPosition",
    description: (e) => "" + Math.round(e[0] / e[1])
  },
  290: {
    name: "GrayResponseUnit",
    description: (e) => ({
      1: "0.1",
      2: "0.001",
      3: "0.0001",
      4: "1e-05",
      5: "1e-06"
    })[e] || "Unknown"
  },
  296: {
    name: "ResolutionUnit",
    description: m.ResolutionUnit
  },
  297: "PageNumber",
  301: "TransferFunction",
  305: "Software",
  306: "DateTime",
  315: "Artist",
  316: "HostComputer",
  317: "Predictor",
  318: {
    name: "WhitePoint",
    description: (e) => e.map((t) => `${t[0]}/${t[1]}`).join(", ")
  },
  319: {
    name: "PrimaryChromaticities",
    description: (e) => e.map((t) => `${t[0]}/${t[1]}`).join(", ")
  },
  321: "HalftoneHints",
  322: "TileWidth",
  323: "TileLength",
  330: "A100DataOffset",
  332: {
    name: "InkSet",
    description: (e) => ({
      1: "CMYK",
      2: "Not CMYK"
    })[e] || "Unknown"
  },
  337: "TargetPrinter",
  338: {
    name: "ExtraSamples",
    description: (e) => ({
      0: "Unspecified",
      1: "Associated Alpha",
      2: "Unassociated Alpha"
    })[e] || "Unknown"
  },
  339: {
    name: "SampleFormat",
    description: (e) => {
      const t = {
        1: "Unsigned",
        2: "Signed",
        3: "Float",
        4: "Undefined",
        5: "Complex int",
        6: "Complex float"
      };
      return Array.isArray(e) ? e.map((n) => t[n] || "Unknown").join(", ") : "Unknown";
    }
  },
  513: "JPEGInterchangeFormat",
  514: "JPEGInterchangeFormatLength",
  529: {
    name: "YCbCrCoefficients",
    description: (e) => e.map((t) => "" + t[0] / t[1]).join("/")
  },
  530: "YCbCrSubSampling",
  531: {
    name: "YCbCrPositioning",
    description: (e) => e === 1 ? "centered" : e === 2 ? "co-sited" : "undefined " + e
  },
  532: {
    name: "ReferenceBlackWhite",
    description: (e) => e.map((t) => "" + t[0] / t[1]).join(", ")
  },
  700: "ApplicationNotes",
  18246: "Rating",
  18249: "RatingPercent",
  33432: {
    name: "Copyright",
    description: (e) => e.join("; ")
  },
  33550: "PixelScale",
  33723: "IPTC-NAA",
  33920: "IntergraphMatrix",
  33922: "ModelTiePoint",
  34118: "SEMInfo",
  34264: "ModelTransform",
  34377: "PhotoshopSettings",
  34665: "Exif IFD Pointer",
  34675: "ICC_Profile",
  34735: "GeoTiffDirectory",
  34736: "GeoTiffDoubleParams",
  34737: "GeoTiffAsciiParams",
  34853: "GPS Info IFD Pointer",
  40091: {
    name: "XPTitle",
    description: j
  },
  40092: {
    name: "XPComment",
    description: j
  },
  40093: {
    name: "XPAuthor",
    description: j
  },
  40094: {
    name: "XPKeywords",
    description: j
  },
  40095: {
    name: "XPSubject",
    description: j
  },
  42112: "GDALMetadata",
  42113: "GDALNoData",
  50341: "PrintIM",
  50707: "DNGBackwardVersion",
  50708: "UniqueCameraModel",
  50709: "LocalizedCameraModel",
  50721: "ColorMatrix1",
  50722: "ColorMatrix2",
  50723: "CameraCalibration1",
  50724: "CameraCalibration2",
  50725: "ReductionMatrix1",
  50726: "ReductionMatrix2",
  50727: "AnalogBalance",
  50728: "AsShotNeutral",
  50729: "AsShotWhiteXY",
  50730: "BaselineExposure",
  50731: "BaselineNoise",
  50732: "BaselineSharpness",
  50734: "LinearResponseLimit",
  50735: "CameraSerialNumber",
  50736: "DNGLensInfo",
  50739: "ShadowScale",
  50741: {
    name: "MakerNoteSafety",
    description: (e) => ({
      0: "Unsafe",
      1: "Safe"
    })[e] || "Unknown"
  },
  50778: {
    name: "CalibrationIlluminant1",
    description: m.LightSource
  },
  50779: {
    name: "CalibrationIlluminant2",
    description: m.LightSource
  },
  50781: "RawDataUniqueID",
  50827: "OriginalRawFileName",
  50828: "OriginalRawFileData",
  50831: "AsShotICCProfile",
  50832: "AsShotPreProfileMatrix",
  50833: "CurrentICCProfile",
  50834: "CurrentPreProfileMatrix",
  50879: "ColorimetricReference",
  50885: "SRawType",
  50898: "PanasonicTitle",
  50899: "PanasonicTitle2",
  50931: "CameraCalibrationSig",
  50932: "ProfileCalibrationSig",
  50933: "ProfileIFD",
  50934: "AsShotProfileName",
  50936: "ProfileName",
  50937: "ProfileHueSatMapDims",
  50938: "ProfileHueSatMapData1",
  50939: "ProfileHueSatMapData2",
  50940: "ProfileToneCurve",
  50941: {
    name: "ProfileEmbedPolicy",
    description: (e) => ({
      0: "Allow Copying",
      1: "Embed if Used",
      2: "Never Embed",
      3: "No Restrictions"
    })[e] || "Unknown"
  },
  50942: "ProfileCopyright",
  50964: "ForwardMatrix1",
  50965: "ForwardMatrix2",
  50966: "PreviewApplicationName",
  50967: "PreviewApplicationVersion",
  50968: "PreviewSettingsName",
  50969: "PreviewSettingsDigest",
  50970: {
    name: "PreviewColorSpace",
    description: (e) => ({
      1: "Gray Gamma 2.2",
      2: "sRGB",
      3: "Adobe RGB",
      4: "ProPhoto RGB"
    })[e] || "Unknown"
  },
  50971: "PreviewDateTime",
  50972: "RawImageDigest",
  50973: "OriginalRawFileDigest",
  50981: "ProfileLookTableDims",
  50982: "ProfileLookTableData",
  51043: "TimeCodes",
  51044: "FrameRate",
  51058: "TStop",
  51081: "ReelName",
  51089: "OriginalDefaultFinalSize",
  51090: "OriginalBestQualitySize",
  51091: "OriginalDefaultCropSize",
  51105: "CameraLabel",
  51107: {
    name: "ProfileHueSatMapEncoding",
    description: (e) => ({
      0: "Linear",
      1: "sRGB"
    })[e] || "Unknown"
  },
  51108: {
    name: "ProfileLookTableEncoding",
    description: (e) => ({
      0: "Linear",
      1: "sRGB"
    })[e] || "Unknown"
  },
  51109: "BaselineExposureOffset",
  51110: {
    name: "DefaultBlackRender",
    description: (e) => ({
      0: "Auto",
      1: "None"
    })[e] || "Unknown"
  },
  51111: "NewRawImageDigest",
  51112: "RawToPreviewGain"
};
function j(e) {
  return new TextDecoder("utf-16").decode(new Uint8Array(e)).replace(/\u0000+$/, "");
}
const Ri = {
  33434: {
    name: "ExposureTime",
    description: m.ExposureTime
  },
  33437: {
    name: "FNumber",
    description: m.FNumber
  },
  34850: {
    name: "ExposureProgram",
    description: m.ExposureProgram
  },
  34852: "SpectralSensitivity",
  34855: "ISOSpeedRatings",
  34856: {
    name: "OECF",
    description: () => "[Raw OECF table data]"
  },
  34858: "TimeZoneOffset",
  34859: "SelfTimerMode",
  34864: {
    name: "SensitivityType",
    description: (e) => ({
      1: "Standard Output Sensitivity",
      2: "Recommended Exposure Index",
      3: "ISO Speed",
      4: "Standard Output Sensitivity and Recommended Exposure Index",
      5: "Standard Output Sensitivity and ISO Speed",
      6: "Recommended Exposure Index and ISO Speed",
      7: "Standard Output Sensitivity, Recommended Exposure Index and ISO Speed"
    })[e] || "Unknown"
  },
  34865: "StandardOutputSensitivity",
  34866: "RecommendedExposureIndex",
  34867: "ISOSpeed",
  34868: "ISOSpeedLatitudeyyy",
  34869: "ISOSpeedLatitudezzz",
  36864: {
    name: "ExifVersion",
    description: (e) => I(e)
  },
  36867: "DateTimeOriginal",
  36868: "DateTimeDigitized",
  36873: "GooglePlusUploadCode",
  36880: "OffsetTime",
  36881: "OffsetTimeOriginal",
  36882: "OffsetTimeDigitized",
  37121: {
    name: "ComponentsConfiguration",
    description: m.ComponentsConfiguration
  },
  37122: "CompressedBitsPerPixel",
  37377: {
    name: "ShutterSpeedValue",
    description: m.ShutterSpeedValue
  },
  37378: {
    name: "ApertureValue",
    description: m.ApertureValue
  },
  37379: "BrightnessValue",
  37380: "ExposureBiasValue",
  37381: {
    name: "MaxApertureValue",
    description: (e) => Math.pow(Math.sqrt(2), e[0] / e[1]).toFixed(2)
  },
  37382: {
    name: "SubjectDistance",
    description: (e) => e[0] / e[1] + " m"
  },
  37383: {
    name: "MeteringMode",
    description: m.MeteringMode
  },
  37384: {
    name: "LightSource",
    description: m.LightSource
  },
  37385: {
    name: "Flash",
    description: (e) => e === 0 ? "Flash did not fire" : e === 1 ? "Flash fired" : e === 5 ? "Strobe return light not detected" : e === 7 ? "Strobe return light detected" : e === 9 ? "Flash fired, compulsory flash mode" : e === 13 ? "Flash fired, compulsory flash mode, return light not detected" : e === 15 ? "Flash fired, compulsory flash mode, return light detected" : e === 16 ? "Flash did not fire, compulsory flash mode" : e === 24 ? "Flash did not fire, auto mode" : e === 25 ? "Flash fired, auto mode" : e === 29 ? "Flash fired, auto mode, return light not detected" : e === 31 ? "Flash fired, auto mode, return light detected" : e === 32 ? "No flash function" : e === 65 ? "Flash fired, red-eye reduction mode" : e === 69 ? "Flash fired, red-eye reduction mode, return light not detected" : e === 71 ? "Flash fired, red-eye reduction mode, return light detected" : e === 73 ? "Flash fired, compulsory flash mode, red-eye reduction mode" : e === 77 ? "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected" : e === 79 ? "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected" : e === 89 ? "Flash fired, auto mode, red-eye reduction mode" : e === 93 ? "Flash fired, auto mode, return light not detected, red-eye reduction mode" : e === 95 ? "Flash fired, auto mode, return light detected, red-eye reduction mode" : "Unknown"
  },
  37386: {
    name: "FocalLength",
    description: m.FocalLength
  },
  37393: "ImageNumber",
  37394: {
    name: "SecurityClassification",
    description: (e) => ({
      C: "Confidential",
      R: "Restricted",
      S: "Secret",
      T: "Top Secret",
      U: "Unclassified"
    })[e] || "Unknown"
  },
  37395: "ImageHistory",
  37396: {
    name: "SubjectArea",
    description: (e) => e.length === 2 ? `Location; X: ${e[0]}, Y: ${e[1]}` : e.length === 3 ? `Circle; X: ${e[0]}, Y: ${e[1]}, diameter: ${e[2]}` : e.length === 4 ? `Rectangle; X: ${e[0]}, Y: ${e[1]}, width: ${e[2]}, height: ${e[3]}` : "Unknown"
  },
  37500: {
    name: "MakerNote",
    description: () => "[Raw maker note data]"
  },
  37510: {
    name: "UserComment",
    description: Ce
  },
  37520: "SubSecTime",
  37521: "SubSecTimeOriginal",
  37522: "SubSecTimeDigitized",
  37724: "ImageSourceData",
  37888: {
    name: "AmbientTemperature",
    description: (e) => e[0] / e[1] + " °C"
  },
  37889: {
    name: "Humidity",
    description: (e) => e[0] / e[1] + " %"
  },
  37890: {
    name: "Pressure",
    description: (e) => e[0] / e[1] + " hPa"
  },
  37891: {
    name: "WaterDepth",
    description: (e) => e[0] / e[1] + " m"
  },
  37892: {
    name: "Acceleration",
    description: (e) => e[0] / e[1] + " mGal"
  },
  37893: {
    name: "CameraElevationAngle",
    description: (e) => e[0] / e[1] + " °"
  },
  40960: {
    name: "FlashpixVersion",
    description: (e) => e.map((t) => String.fromCharCode(t)).join("")
  },
  40961: {
    name: "ColorSpace",
    description: m.ColorSpace
  },
  40962: "PixelXDimension",
  40963: "PixelYDimension",
  40964: "RelatedSoundFile",
  40965: "Interoperability IFD Pointer",
  41483: "FlashEnergy",
  41484: {
    name: "SpatialFrequencyResponse",
    description: () => "[Raw SFR table data]"
  },
  41486: "FocalPlaneXResolution",
  41487: "FocalPlaneYResolution",
  41488: {
    name: "FocalPlaneResolutionUnit",
    description: m.FocalPlaneResolutionUnit
  },
  41492: {
    name: "SubjectLocation",
    description: ([e, t]) => `X: ${e}, Y: ${t}`
  },
  41493: "ExposureIndex",
  41495: {
    name: "SensingMethod",
    description: (e) => e === 1 ? "Undefined" : e === 2 ? "One-chip color area sensor" : e === 3 ? "Two-chip color area sensor" : e === 4 ? "Three-chip color area sensor" : e === 5 ? "Color sequential area sensor" : e === 7 ? "Trilinear sensor" : e === 8 ? "Color sequential linear sensor" : "Unknown"
  },
  41728: {
    name: "FileSource",
    description: (e) => e === 3 ? "DSC" : "Unknown"
  },
  41729: {
    name: "SceneType",
    description: (e) => e === 1 ? "A directly photographed image" : "Unknown"
  },
  41730: {
    name: "CFAPattern",
    description: () => "[Raw CFA pattern table data]"
  },
  41985: {
    name: "CustomRendered",
    description: m.CustomRendered
  },
  41986: {
    name: "ExposureMode",
    description: m.ExposureMode
  },
  41987: {
    name: "WhiteBalance",
    description: m.WhiteBalance
  },
  41988: {
    name: "DigitalZoomRatio",
    description: (e) => e[0] === 0 ? "Digital zoom was not used" : "" + e[0] / e[1]
  },
  41989: {
    name: "FocalLengthIn35mmFilm",
    description: (e) => e === 0 ? "Unknown" : e
  },
  41990: {
    name: "SceneCaptureType",
    description: m.SceneCaptureType
  },
  41991: {
    name: "GainControl",
    description: (e) => e === 0 ? "None" : e === 1 ? "Low gain up" : e === 2 ? "High gain up" : e === 3 ? "Low gain down" : e === 4 ? "High gain down" : "Unknown"
  },
  41992: {
    name: "Contrast",
    description: m.Contrast
  },
  41993: {
    name: "Saturation",
    description: m.Saturation
  },
  41994: {
    name: "Sharpness",
    description: m.Sharpness
  },
  41995: {
    name: "DeviceSettingDescription",
    description: () => "[Raw device settings table data]"
  },
  41996: {
    name: "SubjectDistanceRange",
    description: (e) => e === 1 ? "Macro" : e === 2 ? "Close view" : e === 3 ? "Distant view" : "Unknown"
  },
  42016: "ImageUniqueID",
  42032: "CameraOwnerName",
  42033: "BodySerialNumber",
  42034: {
    name: "LensSpecification",
    description: (e) => {
      const t = parseFloat((e[0][0] / e[0][1]).toFixed(5)), n = parseFloat((e[1][0] / e[1][1]).toFixed(5)), r = `${t}-${n} mm`;
      if (e[3][1] === 0)
        return `${r} f/?`;
      const i = 1 / (e[2][1] / e[2][1] / (e[3][0] / e[3][1]));
      return `${r} f/${parseFloat(i.toFixed(5))}`;
    }
  },
  42035: "LensMake",
  42036: "LensModel",
  42037: "LensSerialNumber",
  42080: {
    name: "CompositeImage",
    description: (e) => ({
      1: "Not a Composite Image",
      2: "General Composite Image",
      3: "Composite Image Captured While Shooting"
    })[e] || "Unknown"
  },
  42081: "SourceImageNumberOfCompositeImage",
  42082: "SourceExposureTimesOfCompositeImage",
  42240: "Gamma",
  59932: "Padding",
  59933: "OffsetSchema",
  65e3: "OwnerName",
  65001: "SerialNumber",
  65002: "Lens",
  65100: "RawFile",
  65101: "Converter",
  65102: "WhiteBalance",
  65105: "Exposure",
  65106: "Shadows",
  65107: "Brightness",
  65108: "Contrast",
  65109: "Saturation",
  65110: "Sharpness",
  65111: "Smoothness",
  65112: "MoireFilter"
}, Di = {
  0: {
    name: "GPSVersionID",
    description: (e) => e[0] === 2 && e[1] === 2 && e[2] === 0 && e[3] === 0 ? "Version 2.2" : "Unknown"
  },
  1: {
    name: "GPSLatitudeRef",
    description: (e) => {
      const t = e.join("");
      return t === "N" ? "North latitude" : t === "S" ? "South latitude" : "Unknown";
    }
  },
  2: {
    name: "GPSLatitude",
    description: ae
  },
  3: {
    name: "GPSLongitudeRef",
    description: (e) => {
      const t = e.join("");
      return t === "E" ? "East longitude" : t === "W" ? "West longitude" : "Unknown";
    }
  },
  4: {
    name: "GPSLongitude",
    description: ae
  },
  5: {
    name: "GPSAltitudeRef",
    description: (e) => e === 0 ? "Sea level" : e === 1 ? "Sea level reference (negative value)" : "Unknown"
  },
  6: {
    name: "GPSAltitude",
    description: (e) => e[0] / e[1] + " m"
  },
  7: {
    name: "GPSTimeStamp",
    description: (e) => e.map(([t, n]) => {
      const r = t / n;
      return /^\d(\.|$)/.test(`${r}`) ? `0${r}` : r;
    }).join(":")
  },
  8: "GPSSatellites",
  9: {
    name: "GPSStatus",
    description: (e) => {
      const t = e.join("");
      return t === "A" ? "Measurement in progress" : t === "V" ? "Measurement Interoperability" : "Unknown";
    }
  },
  10: {
    name: "GPSMeasureMode",
    description: (e) => {
      const t = e.join("");
      return t === "2" ? "2-dimensional measurement" : t === "3" ? "3-dimensional measurement" : "Unknown";
    }
  },
  11: "GPSDOP",
  12: {
    name: "GPSSpeedRef",
    description: (e) => {
      const t = e.join("");
      return t === "K" ? "Kilometers per hour" : t === "M" ? "Miles per hour" : t === "N" ? "Knots" : "Unknown";
    }
  },
  13: "GPSSpeed",
  14: {
    name: "GPSTrackRef",
    description: (e) => {
      const t = e.join("");
      return t === "T" ? "True direction" : t === "M" ? "Magnetic direction" : "Unknown";
    }
  },
  15: "GPSTrack",
  16: {
    name: "GPSImgDirectionRef",
    description: (e) => {
      const t = e.join("");
      return t === "T" ? "True direction" : t === "M" ? "Magnetic direction" : "Unknown";
    }
  },
  17: "GPSImgDirection",
  18: "GPSMapDatum",
  19: {
    name: "GPSDestLatitudeRef",
    description: (e) => {
      const t = e.join("");
      return t === "N" ? "North latitude" : t === "S" ? "South latitude" : "Unknown";
    }
  },
  20: {
    name: "GPSDestLatitude",
    description: (e) => e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600
  },
  21: {
    name: "GPSDestLongitudeRef",
    description: (e) => {
      const t = e.join("");
      return t === "E" ? "East longitude" : t === "W" ? "West longitude" : "Unknown";
    }
  },
  22: {
    name: "GPSDestLongitude",
    description: (e) => e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600
  },
  23: {
    name: "GPSDestBearingRef",
    description: (e) => {
      const t = e.join("");
      return t === "T" ? "True direction" : t === "M" ? "Magnetic direction" : "Unknown";
    }
  },
  24: "GPSDestBearing",
  25: {
    name: "GPSDestDistanceRef",
    description: (e) => {
      const t = e.join("");
      return t === "K" ? "Kilometers" : t === "M" ? "Miles" : t === "N" ? "Knots" : "Unknown";
    }
  },
  26: "GPSDestDistance",
  27: {
    name: "GPSProcessingMethod",
    description: Ce
  },
  28: {
    name: "GPSAreaInformation",
    description: Ce
  },
  29: "GPSDateStamp",
  30: {
    name: "GPSDifferential",
    description: (e) => e === 0 ? "Measurement without differential correction" : e === 1 ? "Differential correction applied" : "Unknown"
  },
  31: "GPSHPositioningError"
}, Ui = {
  1: "InteroperabilityIndex",
  2: {
    name: "InteroperabilityVersion",
    description: (e) => I(e)
  },
  4096: "RelatedImageFileFormat",
  4097: "RelatedImageWidth",
  4098: "RelatedImageHeight"
}, Li = {
  45056: {
    name: "MPFVersion",
    description: (e) => I(e)
  },
  45057: "NumberOfImages",
  45058: "MPEntry",
  45059: "ImageUIDList",
  45060: "TotalFrames"
}, Mi = {
  4: {
    name: "ShotInfo",
    description: (e) => e
  }
}, Et = x({}, tn, Ri), ze = "0th", nn = "1st", rn = "exif", on = "gps", sn = "interoperability", un = "mpf", cn = "canon", L = {
  [ze]: Et,
  [nn]: tn,
  [rn]: Et,
  [on]: Di,
  [sn]: Ui,
  [un]: Li,
  [cn]: Mi
}, fn = {
  1: 1,
  // BYTE
  2: 1,
  // ASCII
  3: 2,
  // SHORT
  4: 4,
  // LONG
  5: 8,
  // RATIONAL
  7: 1,
  // UNDEFINED
  9: 4,
  // SLONG
  10: 8,
  // SRATIONAL
  13: 4
  // IFD
}, Ue = {
  BYTE: 1,
  ASCII: 2,
  SHORT: 3,
  LONG: 4,
  RATIONAL: 5,
  UNDEFINED: 7,
  SLONG: 9,
  SRATIONAL: 10,
  IFD: 13
}, c = {
  getAsciiValue: Bi,
  getByteAt: an,
  getAsciiAt: Gi,
  getShortAt: ki,
  getLongAt: de,
  getRationalAt: Zi,
  getUndefinedAt: Hi,
  getSlongAt: Le,
  getSrationalAt: $i,
  getIfdPointerAt: Xi,
  typeSizes: fn,
  tagTypes: Ue,
  getTypeSize: Yi
};
function Bi(e) {
  return e.map((t) => String.fromCharCode(t));
}
function an(e, t) {
  return e.getUint8(t);
}
function Gi(e, t) {
  return e.getUint8(t);
}
function ki(e, t, n) {
  return e.getUint16(t, n === Z.LITTLE_ENDIAN);
}
function de(e, t, n) {
  return e.getUint32(t, n === Z.LITTLE_ENDIAN);
}
function Zi(e, t, n) {
  return [de(e, t, n), de(e, t + 4, n)];
}
function Hi(e, t) {
  return an(e, t);
}
function Le(e, t, n) {
  return e.getInt32(t, n === Z.LITTLE_ENDIAN);
}
function $i(e, t, n) {
  return [Le(e, t, n), Le(e, t + 4, n)];
}
function Xi(e, t, n) {
  return de(e, t, n);
}
function Yi(e) {
  if (Ue[e] === void 0)
    throw new Error("No such type found.");
  return fn[Ue[e]];
}
const zi = {
  1: c.getByteAt,
  2: c.getAsciiAt,
  3: c.getShortAt,
  4: c.getLongAt,
  5: c.getRationalAt,
  7: c.getUndefinedAt,
  9: c.getSlongAt,
  10: c.getSrationalAt,
  13: c.getIfdPointerAt
};
function ln(e, t, n) {
  return t + c.getLongAt(e, t + 4, n);
}
function H(e, t, n, r, i, s) {
  const o = c.getTypeSize("SHORT"), u = 12, f = {}, l = Ki(e, r, i);
  r += o;
  for (let a = 0; a < l && !(r + u > e.byteLength); a++) {
    const d = Wi(e, t, n, r, i, s);
    d !== void 0 && (f[d.name] = {
      id: d.id,
      value: d.value,
      description: d.description
    }, d.name === "MakerNote" && (f[d.name].__offset = d.__offset)), r += u;
  }
  if (r < e.byteLength - c.getTypeSize("LONG")) {
    const a = c.getLongAt(e, r, i);
    a !== 0 && t === ze && (f.Thumbnail = H(e, nn, n, n + a, i, s));
  }
  return f;
}
function Ki(e, t, n) {
  return t + c.getTypeSize("SHORT") <= e.byteLength ? c.getShortAt(e, t, n) : 0;
}
function Wi(e, t, n, r, i, s) {
  const u = c.getTypeSize("SHORT"), f = u + c.getTypeSize("SHORT"), l = f + c.getTypeSize("LONG"), a = c.getShortAt(e, r, i), d = c.getShortAt(e, r + u, i), g = c.getLongAt(e, r + f, i);
  let S, T;
  if (c.typeSizes[d] === void 0 || !s && L[t][a] === void 0)
    return;
  if (ji(d, g))
    T = r + l, S = St(e, T, d, g, i);
  else if (T = c.getLongAt(e, r + l, i), Ji(e, n, T, d, g)) {
    const b = a === 33723;
    S = St(e, n + T, d, g, i, b);
  } else
    S = "<faulty value>";
  d === c.tagTypes.ASCII && (S = vi(S), S = qi(S));
  let P = `undefined-${a}`, A = S;
  if (L[t][a] !== void 0)
    if (L[t][a].name !== void 0 && L[t][a].description !== void 0) {
      P = L[t][a].name;
      try {
        A = L[t][a].description(S);
      } catch {
        A = xt(S);
      }
    } else
      d === c.tagTypes.RATIONAL || d === c.tagTypes.SRATIONAL ? (P = L[t][a], A = "" + S[0] / S[1]) : (P = L[t][a], A = xt(S));
  return {
    id: a,
    name: P,
    value: S,
    description: A,
    __offset: T
  };
}
function ji(e, t) {
  return c.typeSizes[e] * t <= c.getTypeSize("LONG");
}
function St(e, t, n, r, i, s = !1) {
  let o = [];
  s && (r = r * c.typeSizes[n], n = c.tagTypes.BYTE);
  for (let u = 0; u < r; u++)
    o.push(zi[n](e, t, i)), t += c.typeSizes[n];
  return n === c.tagTypes.ASCII ? o = c.getAsciiValue(o) : o.length === 1 && (o = o[0]), o;
}
function Ji(e, t, n, r, i) {
  return t + n + c.typeSizes[r] * i <= e.byteLength;
}
function vi(e) {
  const t = [];
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    if (e[r] === "\0") {
      n++;
      continue;
    }
    t[n] === void 0 && (t[n] = ""), t[n] += e[r];
  }
  return t;
}
function qi(e) {
  try {
    return e.map((t) => decodeURIComponent(escape(t)));
  } catch {
    return e;
  }
}
function xt(e) {
  return e instanceof Array ? e.join(", ") : e;
}
const ht = "Exif IFD Pointer", It = "GPS Info IFD Pointer", Tt = "Interoperability IFD Pointer", dn = {
  read: wi
};
function wi(e, t, n) {
  const r = Z.getByteOrder(e, t);
  let i = Qi(e, t, r, n);
  return i = Vi(i, e, t, r, n), i = eo(i, e, t, r, n), i = to(i, e, t, r, n), { tags: i, byteOrder: r };
}
function Qi(e, t, n, r) {
  return H(e, ze, t, ln(e, t, n), n, r);
}
function Vi(e, t, n, r, i) {
  return e[ht] !== void 0 ? x(e, H(t, rn, n, n + e[ht].value, r, i)) : e;
}
function eo(e, t, n, r, i) {
  return e[It] !== void 0 ? x(e, H(t, on, n, n + e[It].value, r, i)) : e;
}
function to(e, t, n, r, i) {
  return e[Tt] !== void 0 ? x(e, H(t, sn, n, n + e[Tt].value, r, i)) : e;
}
const no = {
  read: ro
}, K = 16;
function ro(e, t, n) {
  const r = Z.getByteOrder(e, t), i = H(e, un, t, ln(e, t, r), r, n);
  return io(e, t, i, r);
}
function io(e, t, n, r) {
  if (!n.MPEntry)
    return n;
  const i = [];
  for (let s = 0; s < Math.ceil(n.MPEntry.value.length / K); s++) {
    i[s] = {};
    const o = v(n.MPEntry.value, s * K, c.getTypeSize("LONG"), r);
    i[s].ImageFlags = oo(o), i[s].ImageFormat = so(o), i[s].ImageType = uo(o);
    const u = v(n.MPEntry.value, s * K + 4, c.getTypeSize("LONG"), r);
    i[s].ImageSize = {
      value: u,
      description: "" + u
    };
    const f = co(s, n.MPEntry, r, t);
    i[s].ImageOffset = {
      value: f,
      description: "" + f
    };
    const l = v(n.MPEntry.value, s * K + 12, c.getTypeSize("SHORT"), r);
    i[s].DependentImage1EntryNumber = {
      value: l,
      description: "" + l
    };
    const a = v(n.MPEntry.value, s * K + 14, c.getTypeSize("SHORT"), r);
    i[s].DependentImage2EntryNumber = {
      value: a,
      description: "" + a
    }, i[s].image = e.buffer.slice(f, f + u), Ht(i[s], "base64", function() {
      return $t(this.image);
    });
  }
  return n.Images = i, n;
}
function v(e, t, n, r) {
  if (r === Z.LITTLE_ENDIAN) {
    let s = 0;
    for (let o = 0; o < n; o++)
      s += e[t + o] << 8 * o;
    return s;
  }
  let i = 0;
  for (let s = 0; s < n; s++)
    i += e[t + s] << 8 * (n - 1 - s);
  return i;
}
function oo(e) {
  const t = [
    e >> 31 & 1,
    e >> 30 & 1,
    e >> 29 & 1
  ], n = [];
  return t[0] && n.push("Dependent Parent Image"), t[1] && n.push("Dependent Child Image"), t[2] && n.push("Representative Image"), {
    value: t,
    description: n.join(", ") || "None"
  };
}
function so(e) {
  const t = e >> 24 & 7;
  return {
    value: t,
    description: t === 0 ? "JPEG" : "Unknown"
  };
}
function uo(e) {
  const t = e & 16777215;
  return {
    value: t,
    description: {
      196608: "Baseline MP Primary Image",
      65537: "Large Thumbnail (VGA equivalent)",
      65538: "Large Thumbnail (Full HD equivalent)",
      131073: "Multi-Frame Image (Panorama)",
      131074: "Multi-Frame Image (Disparity)",
      131075: "Multi-Frame Image (Multi-Angle)",
      0: "Undefined"
    }[t] || "Unknown"
  };
}
function co(e, t, n, r) {
  return fo(e) ? 0 : v(t.value, e * K + 8, c.getTypeSize("LONG"), n) + r;
}
function fo(e) {
  return e === 0;
}
const ao = {
  read: lo
};
function lo(e, t) {
  const n = po(e, t), r = So(e, t, n);
  return {
    "Bits Per Sample": go(e, t, n),
    "Image Height": mo(e, t, n),
    "Image Width": Eo(e, t, n),
    "Color Components": r,
    Subsampling: r && xo(e, t, r.value, n)
  };
}
function po(e, t) {
  return c.getShortAt(e, t);
}
function go(e, t, n) {
  if (3 > n)
    return;
  const s = c.getByteAt(e, t + 2);
  return {
    value: s,
    description: "" + s
  };
}
function mo(e, t, n) {
  if (5 > n)
    return;
  const s = c.getShortAt(e, t + 3);
  return {
    value: s,
    description: `${s}px`
  };
}
function Eo(e, t, n) {
  if (7 > n)
    return;
  const s = c.getShortAt(e, t + 5);
  return {
    value: s,
    description: `${s}px`
  };
}
function So(e, t, n) {
  if (8 > n)
    return;
  const s = c.getByteAt(e, t + 7);
  return {
    value: s,
    description: "" + s
  };
}
function xo(e, t, n, r) {
  if (8 + 3 * n > r)
    return;
  const o = [];
  for (let u = 0; u < n; u++) {
    const f = t + 8 + u * 3;
    o.push([
      c.getByteAt(e, f),
      c.getByteAt(e, f + 1),
      c.getByteAt(e, f + 2)
    ]);
  }
  return {
    value: o,
    description: o.length > 1 ? ho(o) + Io(o) : ""
  };
}
function ho(e) {
  const t = {
    1: "Y",
    2: "Cb",
    3: "Cr",
    4: "I",
    5: "Q"
  };
  return e.map((n) => t[n[0]]).join("");
}
function Io(e) {
  const t = {
    17: "4:4:4 (1 1)",
    18: "4:4:0 (1 2)",
    20: "4:4:1 (1 4)",
    33: "4:2:2 (2 1)",
    34: "4:2:0 (2 2)",
    36: "4:2:1 (2 4)",
    65: "4:1:1 (4 1)",
    66: "4:1:0 (4 2)"
  };
  return e.length === 0 || e[0][1] === void 0 || t[e[0][1]] === void 0 ? "" : t[e[0][1]];
}
const To = {
  read: Fo
};
function Fo(e, t) {
  const n = _o(e, t), r = yo(e, t, n), i = Oo(e, t, n), s = {
    "JFIF Version": Ao(e, t, n),
    "Resolution Unit": Po(e, t, n),
    XResolution: bo(e, t, n),
    YResolution: No(e, t, n),
    "JFIF Thumbnail Width": r,
    "JFIF Thumbnail Height": i
  };
  if (r !== void 0 && i !== void 0) {
    const o = Ro(e, t, 3 * r.value * i.value, n);
    o && (s["JFIF Thumbnail"] = o);
  }
  for (const o in s)
    s[o] === void 0 && delete s[o];
  return s;
}
function _o(e, t) {
  return c.getShortAt(e, t);
}
function Ao(e, t, n) {
  if (9 > n)
    return;
  const s = c.getByteAt(e, t + 7), o = c.getByteAt(e, t + 7 + 1);
  return {
    value: s * 256 + o,
    description: s + "." + o
  };
}
function Po(e, t, n) {
  if (10 > n)
    return;
  const s = c.getByteAt(e, t + 9);
  return {
    value: s,
    description: Co(s)
  };
}
function Co(e) {
  return e === 0 ? "None" : e === 1 ? "inches" : e === 2 ? "cm" : "Unknown";
}
function bo(e, t, n) {
  if (12 > n)
    return;
  const s = c.getShortAt(e, t + 10);
  return {
    value: s,
    description: "" + s
  };
}
function No(e, t, n) {
  if (14 > n)
    return;
  const s = c.getShortAt(e, t + 12);
  return {
    value: s,
    description: "" + s
  };
}
function yo(e, t, n) {
  if (15 > n)
    return;
  const s = c.getByteAt(e, t + 14);
  return {
    value: s,
    description: `${s}px`
  };
}
function Oo(e, t, n) {
  if (16 > n)
    return;
  const s = c.getByteAt(e, t + 15);
  return {
    value: s,
    description: `${s}px`
  };
}
function Ro(e, t, n, r) {
  return n === 0 || 16 + n > r ? void 0 : {
    value: e.buffer.slice(t + 16, t + 16 + n),
    description: "<24-bit RGB pixel data>"
  };
}
const M = {
  iptc: {
    256: {
      name: "Model Version",
      description: (e) => ((e[0] << 8) + e[1]).toString()
    },
    261: {
      name: "Destination",
      repeatable: !0
    },
    276: {
      name: "File Format",
      description: (e) => ((e[0] << 8) + e[1]).toString()
    },
    278: {
      name: "File Format Version",
      description: (e) => ((e[0] << 8) + e[1]).toString()
    },
    286: "Service Identifier",
    296: "Envelope Number",
    306: "Product ID",
    316: "Envelope Priority",
    326: {
      name: "Date Sent",
      description: he
    },
    336: {
      name: "Time Sent",
      description: Ie
    },
    346: {
      name: "Coded Character Set",
      description: Ft,
      encoding_name: Ft
    },
    356: "UNO",
    376: {
      name: "ARM Identifier",
      description: (e) => ((e[0] << 8) + e[1]).toString()
    },
    378: {
      name: "ARM Version",
      description: (e) => ((e[0] << 8) + e[1]).toString()
    },
    512: {
      name: "Record Version",
      description: (e) => ((e[0] << 8) + e[1]).toString()
    },
    515: "Object Type Reference",
    516: "Object Attribute Reference",
    517: "Object Name",
    519: "Edit Status",
    520: {
      name: "Editorial Update",
      description: (e) => I(e) === "01" ? "Additional Language" : "Unknown"
    },
    522: "Urgency",
    524: {
      name: "Subject Reference",
      repeatable: !0,
      description: (e) => {
        const t = I(e).split(":");
        return t[2] + (t[3] ? "/" + t[3] : "") + (t[4] ? "/" + t[4] : "");
      }
    },
    527: "Category",
    532: {
      name: "Supplemental Category",
      repeatable: !0
    },
    534: "Fixture Identifier",
    537: {
      name: "Keywords",
      repeatable: !0
    },
    538: {
      name: "Content Location Code",
      repeatable: !0
    },
    539: {
      name: "Content Location Name",
      repeatable: !0
    },
    542: "Release Date",
    547: "Release Time",
    549: "Expiration Date",
    550: "Expiration Time",
    552: "Special Instructions",
    554: {
      name: "Action Advised",
      description: (e) => {
        const t = I(e);
        return t === "01" ? "Object Kill" : t === "02" ? "Object Replace" : t === "03" ? "Object Append" : t === "04" ? "Object Reference" : "Unknown";
      }
    },
    557: {
      name: "Reference Service",
      repeatable: !0
    },
    559: {
      name: "Reference Date",
      repeatable: !0
    },
    562: {
      name: "Reference Number",
      repeatable: !0
    },
    567: {
      name: "Date Created",
      description: he
    },
    572: {
      name: "Time Created",
      description: Ie
    },
    574: {
      name: "Digital Creation Date",
      description: he
    },
    575: {
      name: "Digital Creation Time",
      description: Ie
    },
    577: "Originating Program",
    582: "Program Version",
    587: {
      name: "Object Cycle",
      description: (e) => {
        const t = I(e);
        return t === "a" ? "morning" : t === "p" ? "evening" : t === "b" ? "both" : "Unknown";
      }
    },
    592: {
      name: "By-line",
      repeatable: !0
    },
    597: {
      name: "By-line Title",
      repeatable: !0
    },
    602: "City",
    604: "Sub-location",
    607: "Province/State",
    612: "Country/Primary Location Code",
    613: "Country/Primary Location Name",
    615: "Original Transmission Reference",
    617: "Headline",
    622: "Credit",
    627: "Source",
    628: "Copyright Notice",
    630: {
      name: "Contact",
      repeatable: !0
    },
    632: "Caption/Abstract",
    634: {
      name: "Writer/Editor",
      repeatable: !0
    },
    637: {
      name: "Rasterized Caption",
      description: (e) => e
    },
    642: "Image Type",
    643: {
      name: "Image Orientation",
      description: (e) => {
        const t = I(e);
        return t === "P" ? "Portrait" : t === "L" ? "Landscape" : t === "S" ? "Square" : "Unknown";
      }
    },
    647: "Language Identifier",
    662: {
      name: "Audio Type",
      description: (e) => {
        const t = I(e), n = t.charAt(0), r = t.charAt(1);
        let i = "";
        return n === "1" ? i += "Mono" : n === "2" && (i += "Stereo"), r === "A" ? i += ", actuality" : r === "C" ? i += ", question and answer session" : r === "M" ? i += ", music, transmitted by itself" : r === "Q" ? i += ", response to a question" : r === "R" ? i += ", raw sound" : r === "S" ? i += ", scener" : r === "V" ? i += ", voicer" : r === "W" && (i += ", wrap"), i !== "" ? i : t;
      }
    },
    663: {
      name: "Audio Sampling Rate",
      description: (e) => parseInt(I(e), 10) + " Hz"
    },
    664: {
      name: "Audio Sampling Resolution",
      description: (e) => {
        const t = parseInt(I(e), 10);
        return t + (t === 1 ? " bit" : " bits");
      }
    },
    665: {
      name: "Audio Duration",
      description: (e) => {
        const t = I(e);
        return t.length >= 6 ? t.substr(0, 2) + ":" + t.substr(2, 2) + ":" + t.substr(4, 2) : t;
      }
    },
    666: "Audio Outcue",
    698: "Short Document ID",
    699: "Unique Document ID",
    700: "Owner ID",
    712: {
      name: (e) => e.length === 2 ? "ObjectData Preview File Format" : "Record 2 destination",
      description: (e) => {
        if (e.length === 2) {
          const t = (e[0] << 8) + e[1];
          return t === 0 ? "No ObjectData" : t === 1 ? "IPTC-NAA Digital Newsphoto Parameter Record" : t === 2 ? "IPTC7901 Recommended Message Format" : t === 3 ? "Tagged Image File Format (Adobe/Aldus Image data)" : t === 4 ? "Illustrator (Adobe Graphics data)" : t === 5 ? "AppleSingle (Apple Computer Inc)" : t === 6 ? "NAA 89-3 (ANPA 1312)" : t === 7 ? "MacBinary II" : t === 8 ? "IPTC Unstructured Character Oriented File Format (UCOFF)" : t === 9 ? "United Press International ANPA 1312 variant" : t === 10 ? "United Press International Down-Load Message" : t === 11 ? "JPEG File Interchange (JFIF)" : t === 12 ? "Photo-CD Image-Pac (Eastman Kodak)" : t === 13 ? "Microsoft Bit Mapped Graphics File [*.BMP]" : t === 14 ? "Digital Audio File [*.WAV] (Microsoft & Creative Labs)" : t === 15 ? "Audio plus Moving Video [*.AVI] (Microsoft)" : t === 16 ? "PC DOS/Windows Executable Files [*.COM][*.EXE]" : t === 17 ? "Compressed Binary File [*.ZIP] (PKWare Inc)" : t === 18 ? "Audio Interchange File Format AIFF (Apple Computer Inc)" : t === 19 ? "RIFF Wave (Microsoft Corporation)" : t === 20 ? "Freehand (Macromedia/Aldus)" : t === 21 ? 'Hypertext Markup Language "HTML" (The Internet Society)' : t === 22 ? "MPEG 2 Audio Layer 2 (Musicom), ISO/IEC" : t === 23 ? "MPEG 2 Audio Layer 3, ISO/IEC" : t === 24 ? "Portable Document File (*.PDF) Adobe" : t === 25 ? "News Industry Text Format (NITF)" : t === 26 ? "Tape Archive (*.TAR)" : t === 27 ? "Tidningarnas Telegrambyrå NITF version (TTNITF DTD)" : t === 28 ? "Ritzaus Bureau NITF version (RBNITF DTD)" : t === 29 ? "Corel Draw [*.CDR]" : `Unknown format ${t}`;
        }
        return I(e);
      }
    },
    713: {
      name: "ObjectData Preview File Format Version",
      description: (e, t) => {
        const n = {
          "00": { "00": "1" },
          "01": { "01": "1", "02": "2", "03": "3", "04": "4" },
          "02": { "04": "4" },
          "03": { "01": "5.0", "02": "6.0" },
          "04": { "01": "1.40" },
          "05": { "01": "2" },
          "06": { "01": "1" },
          11: { "01": "1.02" },
          20: { "01": "3.1", "02": "4.0", "03": "5.0", "04": "5.5" },
          21: { "02": "2.0" }
        }, r = I(e);
        if (t["ObjectData Preview File Format"]) {
          const i = I(t["ObjectData Preview File Format"].value);
          if (n[i] && n[i][r])
            return n[i][r];
        }
        return r;
      }
    },
    714: "ObjectData Preview Data",
    1802: {
      name: "Size Mode",
      description: (e) => e[0].toString()
    },
    1812: {
      name: "Max Subfile Size",
      description: (e) => {
        let t = 0;
        for (let n = 0; n < e.length; n++)
          t = (t << 8) + e[n];
        return t.toString();
      }
    },
    1882: {
      name: "ObjectData Size Announced",
      description: (e) => {
        let t = 0;
        for (let n = 0; n < e.length; n++)
          t = (t << 8) + e[n];
        return t.toString();
      }
    },
    1887: {
      name: "Maximum ObjectData Size",
      description: (e) => {
        let t = 0;
        for (let n = 0; n < e.length; n++)
          t = (t << 8) + e[n];
        return t.toString();
      }
    }
  }
};
function he(e) {
  const t = I(e);
  return t.length >= 8 ? t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6, 2) : t;
}
function Ie(e) {
  const t = I(e);
  let n = t;
  return t.length >= 6 && (n = t.substr(0, 2) + ":" + t.substr(2, 2) + ":" + t.substr(4, 2), t.length === 11 && (n += t.substr(6, 1) + t.substr(7, 2) + ":" + t.substr(9, 2))), n;
}
function Ft(e) {
  const t = I(e);
  return t === "\x1B%G" ? "UTF-8" : t === "\x1B%5" ? "Windows-1252" : t === "\x1B%/G" ? "UTF-8 Level 1" : t === "\x1B%/H" ? "UTF-8 Level 2" : t === "\x1B%/I" ? "UTF-8 Level 3" : t === "\x1B/A" ? "ISO-8859-1" : t === "\x1B/B" ? "ISO-8859-2" : t === "\x1B/C" ? "ISO-8859-3" : t === "\x1B/D" ? "ISO-8859-4" : t === "\x1B/@" ? "ISO-8859-5" : t === "\x1B/G" ? "ISO-8859-6" : t === "\x1B/F" ? "ISO-8859-7" : t === "\x1B/H" ? "ISO-8859-8" : "Unknown";
}
const Do = {
  get: Uo
};
function Uo() {
  if (typeof TextDecoder < "u")
    return TextDecoder;
}
const Lo = 5, pn = {
  decode: Mo,
  TAG_HEADER_SIZE: Lo
};
function Mo(e, t) {
  const n = Do.get();
  if (typeof n < "u" && e !== void 0)
    try {
      return new n(e).decode(t instanceof DataView ? t.buffer : Uint8Array.from(t));
    } catch {
    }
  const r = t.map((i) => String.fromCharCode(i)).join("");
  return Bo(r);
}
function Bo(e) {
  try {
    return decodeURIComponent(escape(e));
  } catch {
    return e;
  }
}
const Go = 943868237, q = 4, ue = 2, ko = 1, Zo = 2, gn = 4, Ho = q + ue + Zo + gn, $o = 1028, mn = 5, Me = {
  read: Xo
};
function Xo(e, t, n) {
  try {
    if (Array.isArray(e))
      return _t(new DataView(Uint8Array.from(e).buffer), { size: e.length }, 0, n);
    const { naaBlock: r, dataOffset: i } = Yo(e, t);
    return _t(e, r, i, n);
  } catch {
    return {};
  }
}
function Yo(e, t) {
  for (; t + Ho <= e.byteLength; ) {
    const n = zo(e, t);
    if (Ko(n))
      return { naaBlock: n, dataOffset: t + n.headerSize };
    t += n.headerSize + n.size + Wo(n);
  }
  throw new Error("No IPTC NAA resource block.");
}
function zo(e, t) {
  if (e.getUint32(t, !1) !== Go)
    throw new Error("Not an IPTC resource block.");
  const n = e.getUint8(t + q + ue), r = (n % 2 === 0 ? n + 1 : n) + ko;
  return {
    headerSize: q + ue + r + gn,
    type: e.getUint16(t + q),
    size: e.getUint32(t + q + ue + r)
  };
}
function Ko(e) {
  return e.type === $o;
}
function Wo(e) {
  return e.size % 2 !== 0 ? 1 : 0;
}
function _t(e, t, n, r) {
  const i = {};
  let s;
  const o = n + t.size;
  for (; n < o && n < e.byteLength; ) {
    const { tag: u, tagSize: f } = jo(e, n, i, s, r);
    if (u === null)
      break;
    u && ("encoding" in u && (s = u.encoding), i[u.name] === void 0 || u.repeatable === void 0 ? i[u.name] = {
      id: u.id,
      value: u.value,
      description: u.description
    } : (i[u.name] instanceof Array || (i[u.name] = [{
      id: i[u.name].id,
      value: i[u.name].value,
      description: i[u.name].description
    }]), i[u.name].push({
      id: u.id,
      value: u.value,
      description: u.description
    }))), n += mn + f;
  }
  return i;
}
function jo(e, t, n, r, i) {
  if (Jo(e, t))
    return { tag: null, tagSize: 0 };
  const u = e.getUint16(t + 1), f = e.getUint16(t + 3);
  if (!i && !M.iptc[u])
    return { tag: void 0, tagSize: f };
  const l = vo(e, t + mn, f), a = {
    id: u,
    name: qo(M.iptc[u], u, l),
    value: l,
    description: Vo(M.iptc[u], l, n, r)
  };
  return ns(u) && (a.repeatable = !0), rs(u) && (a.encoding = M.iptc[u].encoding_name(l)), { tag: a, tagSize: f };
}
function Jo(e, t) {
  return e.getUint8(t) !== 28;
}
function vo(e, t, n) {
  const r = [];
  for (let i = 0; i < n; i++)
    r.push(e.getUint8(t + i));
  return r;
}
function qo(e, t, n) {
  return e ? wo(e) ? e : Qo(e) ? e.name(n) : e.name : `undefined-${t}`;
}
function wo(e) {
  return typeof e == "string";
}
function Qo(e) {
  return typeof e.name == "function";
}
function Vo(e, t, n, r) {
  if (ts(e))
    try {
      return e.description(t, n);
    } catch {
    }
  return es(e, t) ? pn.decode(r, t) : t;
}
function es(e, t) {
  return e && t instanceof Array;
}
function ts(e) {
  return e && e.description !== void 0;
}
function ns(e) {
  return M.iptc[e] && M.iptc[e].repeatable;
}
function rs(e) {
  return M.iptc[e] && M.iptc[e].encoding_name !== void 0;
}
const ne = {
  "tiff:Orientation"(e) {
    return e === "1" ? "Horizontal (normal)" : e === "2" ? "Mirror horizontal" : e === "3" ? "Rotate 180" : e === "4" ? "Mirror vertical" : e === "5" ? "Mirror horizontal and rotate 270 CW" : e === "6" ? "Rotate 90 CW" : e === "7" ? "Mirror horizontal and rotate 90 CW" : e === "8" ? "Rotate 270 CW" : e;
  },
  "tiff:ResolutionUnit": (e) => m.ResolutionUnit(parseInt(e, 10)),
  "tiff:XResolution": (e) => $(m.XResolution, e),
  "tiff:YResolution": (e) => $(m.YResolution, e),
  "exif:ApertureValue": (e) => $(m.ApertureValue, e),
  "exif:GPSLatitude": At,
  "exif:GPSLongitude": At,
  "exif:FNumber": (e) => $(m.FNumber, e),
  "exif:FocalLength": (e) => $(m.FocalLength, e),
  "exif:FocalPlaneResolutionUnit": (e) => m.FocalPlaneResolutionUnit(parseInt(e, 10)),
  "exif:ColorSpace": (e) => m.ColorSpace(is(e)),
  "exif:ComponentsConfiguration"(e, t) {
    if (/^\d, \d, \d, \d$/.test(t)) {
      const n = t.split(", ").map((r) => r.charCodeAt(0));
      return m.ComponentsConfiguration(n);
    }
    return t;
  },
  "exif:Contrast": (e) => m.Contrast(parseInt(e, 10)),
  "exif:CustomRendered": (e) => m.CustomRendered(parseInt(e, 10)),
  "exif:ExposureMode": (e) => m.ExposureMode(parseInt(e, 10)),
  "exif:ExposureProgram": (e) => m.ExposureProgram(parseInt(e, 10)),
  "exif:ExposureTime"(e) {
    return En(e) ? m.ExposureTime(e.split("/").map((t) => parseInt(t, 10))) : e;
  },
  "exif:MeteringMode": (e) => m.MeteringMode(parseInt(e, 10)),
  "exif:Saturation": (e) => m.Saturation(parseInt(e, 10)),
  "exif:SceneCaptureType": (e) => m.SceneCaptureType(parseInt(e, 10)),
  "exif:Sharpness": (e) => m.Sharpness(parseInt(e, 10)),
  "exif:ShutterSpeedValue": (e) => $(m.ShutterSpeedValue, e),
  "exif:WhiteBalance": (e) => m.WhiteBalance(parseInt(e, 10))
};
function $(e, t) {
  return En(t) ? e(t.split("/")) : t;
}
function is(e) {
  return e.substring(0, 2) === "0x" ? parseInt(e.substring(2), 16) : parseInt(e, 10);
}
function En(e) {
  return /^-?\d+\/-?\d+$/.test(e);
}
function At(e) {
  const [t, n] = e.split(",");
  if (t !== void 0 && n !== void 0) {
    const r = parseFloat(t), i = parseFloat(n), s = n.charAt(n.length - 1);
    if (!Number.isNaN(r) && !Number.isNaN(i))
      return "" + (r + i / 60) + s;
  }
  return e;
}
const os = {
  get: ss
};
function ss(e) {
  if (e)
    return e;
  if (typeof DOMParser < "u")
    return new DOMParser();
  try {
    const { DOMParser: t, onErrorStopParsing: n } = __non_webpack_require__("@xmldom/xmldom");
    return new t({ onError: n });
  } catch {
    return;
  }
}
function us(e) {
  const t = [
    // @xmldom/xmldom
    "prefix is non-null and namespace is null",
    // Firefox
    "prefix not bound to a namespace",
    // en
    "prefix inte bundet till en namnrymd",
    // sv
    // Chrome
    /Namespace prefix .+ is not defined/
  ];
  for (let n = 0; n < t.length; n++)
    if (new RegExp(t[n]).test(e.message))
      return !0;
  return !1;
}
function cs(e) {
  const t = e.match(/<([A-Za-z_][A-Za-z0-9._-]*)([^>]*)>/);
  if (!t)
    return e;
  const n = t[1], r = fs(e), s = as(e).filter((u) => r.indexOf(u) === -1);
  if (s.length === 0)
    return e;
  const o = ds(s);
  return ps(e, n, o);
}
function fs(e) {
  const t = [], n = /xmlns:([\w-]+)=["'][^"']+["']/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    t.indexOf(r[1]) === -1 && t.push(r[1]);
  return t;
}
function as(e) {
  const t = [], n = /\b([A-Za-z_][A-Za-z0-9._-]*):[A-Za-z_][A-Za-z0-9._-]*\b/g;
  let r;
  for (; (r = n.exec(e)) !== null; ) {
    const i = r[1];
    i === "xmlns" || i === "xml" || t.indexOf(i) === -1 && t.push(i);
  }
  return t;
}
const ls = {
  xmp: "http://ns.adobe.com/xap/1.0/",
  tiff: "http://ns.adobe.com/tiff/1.0/",
  exif: "http://ns.adobe.com/exif/1.0/",
  dc: "http://purl.org/dc/elements/1.1/",
  xmpMM: "http://ns.adobe.com/xap/1.0/mm/",
  stEvt: "http://ns.adobe.com/xap/1.0/sType/ResourceEvent#",
  stRef: "http://ns.adobe.com/xap/1.0/sType/ResourceRef#",
  photoshop: "http://ns.adobe.com/photoshop/1.0/"
};
function ds(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n], i = ls[r] || "http://fallback.namespace/" + r;
    t.push(" xmlns:" + r + '="' + i + '"');
  }
  return t.join("");
}
function ps(e, t, n) {
  const r = new RegExp("<" + t + "([^>]*)>");
  return e.replace(r, "<" + t + "$1" + n + ">");
}
const Pt = {
  read: ms
};
class gs extends Error {
  constructor(t) {
    super(t), this.name = "ParseError";
  }
}
function ms(e, t, n) {
  const r = {};
  if (typeof e == "string")
    return re(r, e, n), r;
  const [i, s] = Es(e, t), o = re(r, i, n);
  if (s) {
    const u = re(r, s, n);
    !o && !u && (delete r._raw, re(r, Be(e, t), n));
  }
  return r;
}
function Es(e, t) {
  if (t.length === 0)
    return [];
  const n = [Be(e, t.slice(0, 1))];
  return t.length > 1 && n.push(Be(e, t.slice(1))), n;
}
function Be(e, t) {
  const n = t.reduce((s, o) => s + o.length, 0), r = new Uint8Array(n);
  let i = 0;
  for (let s = 0; s < t.length; s++) {
    const o = t[s], u = e.buffer.slice(o.dataOffset, o.dataOffset + o.length);
    r.set(new Uint8Array(u), i), i += o.length;
  }
  return new DataView(r.buffer);
}
function re(e, t, n) {
  try {
    const { doc: r, raw: i } = Ss(t, n);
    e._raw = (e._raw || "") + i;
    const s = xn(r);
    return x(e, In(hn(s, !0))), !0;
  } catch {
    return !1;
  }
}
function Ss(e, t) {
  const n = os.get(t);
  if (!n)
    throw console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags."), new Error();
  const r = typeof e == "string" ? e : E(e, 0, e.byteLength);
  return {
    doc: Sn(n, xs(r)),
    raw: r
  };
}
function xs(e) {
  return e.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1");
}
function Sn(e, t, n = !1) {
  try {
    const r = e.parseFromString(t, "application/xml"), i = r.getElementsByTagName("parsererror");
    if (i.length > 0)
      throw new gs(i[0].textContent);
    return r;
  } catch (r) {
    if (r.name === "ParseError" && us(r) && !n)
      return Sn(e, cs(t), !0);
    throw r;
  }
}
function xn(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    if (e.childNodes[t].tagName === "x:xmpmeta")
      return xn(e.childNodes[t]);
    if (e.childNodes[t].tagName === "rdf:RDF")
      return e.childNodes[t];
  }
  throw new Error();
}
function hn(e, t = !1) {
  const n = hs(e);
  return Is(n) ? t ? {} : Ts(n[0]) : Fs(n);
}
function hs(e) {
  const t = [];
  for (let n = 0; n < e.childNodes.length; n++)
    t.push(e.childNodes[n]);
  return t;
}
function Is(e) {
  return e.length === 1 && e[0].nodeName === "#text";
}
function Ts(e) {
  return e.nodeValue;
}
function Fs(e) {
  const t = {};
  return e.forEach((n) => {
    if (_s(n)) {
      const r = As(n);
      t[n.nodeName] !== void 0 ? (Array.isArray(t[n.nodeName]) || (t[n.nodeName] = [t[n.nodeName]]), t[n.nodeName].push(r)) : t[n.nodeName] = r;
    }
  }), t;
}
function _s(e) {
  return e.nodeName && e.nodeName !== "#text";
}
function As(e) {
  return {
    attributes: Ps(e),
    value: hn(e)
  };
}
function Ps(e) {
  const t = {};
  for (let n = 0; n < e.attributes.length; n++)
    t[e.attributes[n].nodeName] = decodeURIComponent(escape(e.attributes[n].value));
  return t;
}
function In(e) {
  const t = {};
  if (typeof e == "string")
    return e;
  for (const n in e) {
    let r = e[n];
    Array.isArray(r) || (r = [r]), r.forEach((i) => {
      x(t, Ke(i.attributes)), typeof i.value == "object" && x(t, Tn(i.value));
    });
  }
  return t;
}
function Ke(e) {
  const t = {};
  for (const n in e)
    try {
      Cs(n) && (t[Se(n)] = {
        value: e[n],
        attributes: {},
        description: R(e[n], n)
      });
    } catch {
    }
  return t;
}
function Cs(e) {
  return e !== "rdf:parseType" && !Ee(e);
}
function Ee(e) {
  return e.split(":")[0] === "xmlns";
}
function Se(e) {
  return /^MicrosoftPhoto(_\d+_)?:Rating$/i.test(e) ? "RatingPercent" : e.split(":")[1];
}
function R(e, t = void 0) {
  if (Array.isArray(e)) {
    const n = bs(e);
    return t && typeof ne[t] == "function" ? ne[t](e, n) : n;
  }
  if (typeof e == "object")
    return Ns(e);
  try {
    return t && typeof ne[t] == "function" ? ne[t](e) : decodeURIComponent(escape(e));
  } catch {
    return e;
  }
}
function bs(e) {
  return e.map((t) => t.value !== void 0 ? R(t.value) : R(t)).join(", ");
}
function Ns(e) {
  const t = [];
  for (const n in e)
    t.push(`${ys(n)}: ${R(e[n].value)}`);
  return t.join("; ");
}
function ys(e) {
  return e === "CiAdrCity" ? "CreatorCity" : e === "CiAdrCtry" ? "CreatorCountry" : e === "CiAdrExtadr" ? "CreatorAddress" : e === "CiAdrPcode" ? "CreatorPostalCode" : e === "CiAdrRegion" ? "CreatorRegion" : e === "CiEmailWork" ? "CreatorWorkEmail" : e === "CiTelWork" ? "CreatorWorkPhone" : e === "CiUrlWork" ? "CreatorWorkUrl" : e;
}
function Tn(e) {
  const t = {};
  for (const n in e)
    try {
      Ee(n) || (t[Se(n)] = Os(e[n], n));
    } catch {
    }
  return t;
}
function Os(e, t) {
  return Ds(e) ? Us(e, t) : Rs(e) ? { value: "", attributes: {}, description: "" } : Fn(e) ? _n(e, t) : An(e) ? Pn(e, t) : Cn(e) ? bn(e, t) : Bs(e) ? Gs(e, t) : We(e, t);
}
function Rs(e) {
  return e.attributes["rdf:parseType"] === "Resource" && typeof e.value == "string" && e.value.trim() === "";
}
function Ds(e) {
  return Array.isArray(e);
}
function Us(e, t) {
  return We(e[e.length - 1], t);
}
function Fn(e) {
  return e.attributes["rdf:parseType"] === "Resource" && e.value["rdf:value"] !== void 0 || e.value["rdf:Description"] !== void 0 && e.value["rdf:Description"].value["rdf:value"] !== void 0;
}
function _n(e, t) {
  const n = w(e);
  e.value["rdf:Description"] !== void 0 && (e = e.value["rdf:Description"]), x(n, w(e), Ls(e));
  const r = Ms(e);
  return {
    value: r,
    attributes: n,
    description: R(r, t)
  };
}
function w(e) {
  const t = {};
  for (const n in e.attributes)
    n !== "rdf:parseType" && n !== "rdf:resource" && !Ee(n) && (t[Se(n)] = e.attributes[n]);
  return t;
}
function Ls(e) {
  const t = {};
  for (const n in e.value)
    n !== "rdf:value" && !Ee(n) && (t[Se(n)] = e.value[n].value);
  return t;
}
function Ms(e) {
  return yn(e.value["rdf:value"]) || e.value["rdf:value"].value;
}
function An(e) {
  return e.attributes["rdf:parseType"] === "Resource" || e.value["rdf:Description"] !== void 0 && e.value["rdf:Description"].value["rdf:value"] === void 0;
}
function Pn(e, t) {
  const n = {
    value: {},
    attributes: {}
  };
  return e.value["rdf:Description"] !== void 0 && (x(n.value, Ke(e.value["rdf:Description"].attributes)), x(n.attributes, w(e)), e = e.value["rdf:Description"]), x(n.value, Tn(e.value)), n.description = R(n.value, t), n;
}
function Cn(e) {
  return Object.keys(e.value).length === 0 && e.attributes["xml:lang"] === void 0 && e.attributes["rdf:resource"] === void 0;
}
function bn(e, t) {
  const n = Ke(e.attributes);
  return {
    value: n,
    attributes: {},
    description: R(n, t)
  };
}
function Bs(e) {
  return Nn(e.value) !== void 0;
}
function Nn(e) {
  return e["rdf:Bag"] || e["rdf:Seq"] || e["rdf:Alt"];
}
function Gs(e, t) {
  let n = Nn(e.value).value["rdf:li"];
  const r = w(e), i = [];
  return n === void 0 ? n = [] : Array.isArray(n) || (n = [n]), n.forEach((s) => {
    i.push(ks(s));
  }), {
    value: i,
    attributes: r,
    description: R(i, t)
  };
}
function ks(e) {
  return Fn(e) ? _n(e) : An(e) ? Pn(e).value : Cn(e) ? bn(e).value : We(e);
}
function We(e, t) {
  const n = yn(e) || In(e.value);
  return {
    value: n,
    attributes: w(e),
    description: R(n, t)
  };
}
function yn(e) {
  return e.attributes && e.attributes["rdf:resource"];
}
const O = {
  CLOSED_SUBPATH_LENGTH: 0,
  CLOSED_SUBPATH_BEZIER_LINKED: 1,
  CLOSED_SUBPATH_BEZIER_UNLINKED: 2,
  OPEN_SUBPATH_LENGTH: 3,
  OPEN_SUBPATH_BEZIER_LINKED: 4,
  OPEN_SUBPATH_BEZIER_UNLINKED: 5,
  FILL_RULE: 6,
  CLIPBOARD: 7,
  INITIAL_FILL_RULE: 8
}, On = 24, Te = {
  // 0x0425: {
  //     name: 'CaptionDigest',
  //     description(dataView) {
  //         let description = '';
  //         for (let i = 0; i < dataView.byteLength; i++) {
  //             const byte = dataView.getUint8(i);
  //             description += padStart(byte.toString(16), 2, '0');
  //         }
  //         return description;
  //     }
  // },
  // Commented out for now to lower bundle size until someone asks for it.
  // 0x043a: {
  //     name: 'PrintInformation',
  //     description: parseDescriptor
  // },
  // 0x043b: {
  //     name: 'PrintStyle',
  //     description: parseDescriptor
  // },
  2e3: {
    name: "PathInformation",
    description: Zs
  },
  2999: {
    name: "ClippingPathName",
    description(e) {
      const [, t] = Zt(e, 0);
      return t;
    }
  }
};
function Zs(e) {
  const n = {}, r = [];
  for (let i = 0; i < e.byteLength; i += 2 + On) {
    const s = c.getShortAt(e, i);
    Fe[s] && (n[s] || (n[s] = Fe[s].description), r.push({
      type: s,
      path: Fe[s].path(e, i + 2)
    }));
  }
  return JSON.stringify({ types: n, paths: r });
}
const Fe = {
  [O.CLOSED_SUBPATH_LENGTH]: {
    description: "Closed subpath length",
    path: (e, t) => [c.getShortAt(e, t)]
  },
  [O.CLOSED_SUBPATH_BEZIER_LINKED]: {
    description: "Closed subpath Bezier knot, linked",
    path: ie
  },
  [O.CLOSED_SUBPATH_BEZIER_UNLINKED]: {
    description: "Closed subpath Bezier knot, unlinked",
    path: ie
  },
  [O.OPEN_SUBPATH_LENGTH]: {
    description: "Open subpath length",
    path: (e, t) => [c.getShortAt(e, t)]
  },
  [O.OPEN_SUBPATH_BEZIER_LINKED]: {
    description: "Open subpath Bezier knot, linked",
    path: ie
  },
  [O.OPEN_SUBPATH_BEZIER_UNLINKED]: {
    description: "Open subpath Bezier knot, unlinked",
    path: ie
  },
  [O.FILL_RULE]: {
    description: "Path fill rule",
    path: () => []
  },
  [O.INITIAL_FILL_RULE]: {
    description: "Initial fill rule",
    path: (e, t) => [c.getShortAt(e, t)]
  },
  [O.CLIPBOARD]: {
    description: "Clipboard",
    path: $s
  }
};
function ie(e, t) {
  const r = [];
  for (let i = 0; i < On; i += 8)
    r.push(Hs(e, t + i));
  return r;
}
function Hs(e, t) {
  const n = G(e, t, 8);
  return [G(e, t + 4, 8), n];
}
function $s(e, t) {
  return [
    [
      G(e, t, 8),
      // Top
      G(e, t + 4, 8),
      // Left
      G(e, t + 8, 8),
      // Botton
      G(e, t + 12, 8)
      // Right
    ],
    G(e, t + 16, 8)
    // Resolution
  ];
}
function G(e, t, n) {
  const r = c.getLongAt(e, t), i = r >>> 31 ? -1 : 1, s = (r & 2130706432) >>> 32 - n, o = r & parseInt(Xt("1", 32 - n), 2);
  return i * Zn(s.toString(2) + "." + kn(o.toString(2), 32 - n, "0"), 2);
}
const Xs = {
  read: Ks
}, Rn = "8BIM", Ys = 2, zs = 4, Ct = Rn.length;
function Ks(e, t) {
  const n = ve(new Uint8Array(e).buffer), r = {};
  let i = 0;
  for (; i < e.length; ) {
    const s = E(n, i, Ct);
    i += Ct;
    const o = c.getShortAt(n, i);
    i += Ys;
    const { tagName: u, tagNameSize: f } = Ws(n, i);
    i += f;
    const l = c.getLongAt(n, i);
    if (i += zs, s === Rn) {
      const a = ve(n.buffer, i, l), d = {
        id: o,
        value: E(a, 0, l)
      };
      if (Te[o]) {
        try {
          d.description = Te[o].description(a);
        } catch {
          d.description = "<no description formatter>";
        }
        r[u || Te[o].name] = d;
      } else
        t && (r[`undefined-${o}`] = d);
    }
    i += l + l % 2;
  }
  return r;
}
function Ws(e, t) {
  const [n, r] = Zt(e, t);
  return {
    tagName: r,
    tagNameSize: 1 + n + (n % 2 === 0 ? 1 : 0)
  };
}
const bt = {
  desc: {
    name: "ICC Description"
  },
  cprt: {
    name: "ICC Copyright"
  },
  dmdd: {
    name: "ICC Device Model Description"
  },
  vued: {
    name: "ICC Viewing Conditions Description"
  },
  dmnd: {
    name: "ICC Device Manufacturer for Display"
  },
  tech: {
    name: "Technology"
  }
}, Nt = {
  4: {
    name: "Preferred CMM type",
    value: (e, t) => E(e, t, 4),
    description: (e) => e !== null ? _e(e) : ""
  },
  8: {
    name: "Profile Version",
    value: (e, t) => e.getUint8(t).toString(10) + "." + (e.getUint8(t + 1) >> 4).toString(10) + "." + (e.getUint8(t + 1) % 16).toString(10)
  },
  12: {
    name: "Profile/Device class",
    value: (e, t) => E(e, t, 4),
    description: (e) => {
      switch (e.toLowerCase()) {
        case "scnr":
          return "Input Device profile";
        case "mntr":
          return "Display Device profile";
        case "prtr":
          return "Output Device profile";
        case "link":
          return "DeviceLink profile";
        case "abst":
          return "Abstract profile";
        case "spac":
          return "ColorSpace profile";
        case "nmcl":
          return "NamedColor profile";
        case "cenc":
          return "ColorEncodingSpace profile";
        case "mid ":
          return "MultiplexIdentification profile";
        case "mlnk":
          return "MultiplexLink profile";
        case "mvis":
          return "MultiplexVisualization profile";
        default:
          return e;
      }
    }
  },
  16: {
    name: "Color Space",
    value: (e, t) => E(e, t, 4)
  },
  20: {
    name: "Connection Space",
    value: (e, t) => E(e, t, 4)
  },
  24: {
    name: "ICC Profile Date",
    value: (e, t) => js(e, t).toISOString()
  },
  36: {
    name: "ICC Signature",
    value: (e, t) => Js(e.buffer.slice(t, t + 4))
  },
  40: {
    name: "Primary Platform",
    value: (e, t) => E(e, t, 4),
    description: (e) => _e(e)
  },
  48: {
    name: "Device Manufacturer",
    value: (e, t) => E(e, t, 4),
    description: (e) => _e(e)
  },
  52: {
    name: "Device Model Number",
    value: (e, t) => E(e, t, 4)
  },
  64: {
    name: "Rendering Intent",
    value: (e, t) => e.getUint32(t),
    description: (e) => {
      switch (e) {
        case 0:
          return "Perceptual";
        case 1:
          return "Relative Colorimetric";
        case 2:
          return "Saturation";
        case 3:
          return "Absolute Colorimetric";
        default:
          return e;
      }
    }
  },
  80: {
    name: "Profile Creator",
    value: (e, t) => E(e, t, 4)
  }
};
function js(e, t) {
  const n = e.getUint16(t), r = e.getUint16(t + 2) - 1, i = e.getUint16(t + 4), s = e.getUint16(t + 6), o = e.getUint16(t + 8), u = e.getUint16(t + 10);
  return new Date(Date.UTC(n, r, i, s, o, u));
}
function Js(e) {
  return String.fromCharCode.apply(null, new Uint8Array(e));
}
function _e(e) {
  switch (e.toLowerCase()) {
    case "appl":
      return "Apple";
    case "adbe":
      return "Adobe";
    case "msft":
      return "Microsoft";
    case "sunw":
      return "Sun Microsystems";
    case "sgi":
      return "Silicon Graphics";
    case "tgnt":
      return "Taligent";
    default:
      return e;
  }
}
const yt = {
  read: ru
}, vs = 84, qs = 128, ws = "acsp", Qs = "desc", Vs = "mluc", eu = "text", tu = "sig ", nu = 12;
function ru(e, t, n) {
  return n && t[0].compressionMethod !== fe ? iu(e, t) : su(e, t);
}
function iu(e, t) {
  if (!ou(t[0].compressionMethod))
    return {};
  const n = new DataView(e.buffer.slice(t[0].offset, t[0].offset + t[0].length));
  return zt(n, t[0].compressionMethod, "utf-8", "dataview").then(Dn).catch(() => ({}));
}
function ou(e) {
  return e === Yt;
}
function su(e, t) {
  try {
    const n = t.reduce((o, u) => o + u.length, 0), r = new Uint8Array(n);
    let i = 0;
    const s = uu(e);
    for (let o = 1; o <= t.length; o++) {
      const u = t.find((a) => a.chunkNumber === o);
      if (!u)
        throw new Error(`ICC chunk ${o} not found`);
      const f = s.slice(u.offset, u.offset + u.length), l = new Uint8Array(f);
      r.set(l, i), i += l.length;
    }
    return Dn(new DataView(r.buffer));
  } catch {
    return {};
  }
}
function uu(e) {
  return Array.isArray(e) ? new DataView(Uint8Array.from(e).buffer).buffer : e.buffer;
}
function cu(e) {
  return e.length < qs + 4;
}
function fu(e, t) {
  return e.length < t + nu;
}
function Dn(e) {
  const t = e.buffer, n = e.getUint32();
  if (e.byteLength !== n)
    throw new Error("ICC profile length not matching");
  if (e.length < vs)
    throw new Error("ICC profile too short");
  const r = {}, i = Object.keys(Nt);
  for (let f = 0; f < i.length; f++) {
    const l = i[f], a = Nt[l], d = a.value(e, parseInt(l, 10));
    let g = d;
    a.description && (g = a.description(d)), r[a.name] = {
      value: d,
      description: g
    };
  }
  if (oe(t.slice(36, 40)) !== ws)
    throw new Error("ICC profile: missing signature");
  if (cu(t))
    return r;
  const o = e.getUint32(128);
  let u = 132;
  for (let f = 0; f < o; f++) {
    if (fu(t, u))
      return r;
    const l = E(e, u, 4), a = e.getUint32(u + 4), d = e.getUint32(u + 8);
    if (a > t.length)
      return r;
    const g = E(e, a, 4);
    if (g === Qs) {
      const S = e.getUint32(a + 8);
      if (S > d)
        return r;
      const T = oe(t.slice(a + 12, a + S + 11));
      J(r, l, T);
    } else if (g === Vs) {
      const S = e.getUint32(a + 8), T = e.getUint32(a + 12);
      let P = a + 16;
      const A = [];
      for (let b = 0; b < S; b++) {
        const y = E(e, P + 0, 2), Q = E(e, P + 2, 2), V = e.getUint32(P + 4), ee = e.getUint32(P + 8), te = Bn(e, a + ee, V);
        A.push({ languageCode: y, countryCode: Q, text: te }), P += T;
      }
      if (S === 1)
        J(r, l, A[0].text);
      else {
        const b = {};
        for (let y = 0; y < A.length; y++)
          b[`${A[y].languageCode}-${A[y].countryCode}`] = A[y].text;
        J(r, l, b);
      }
    } else if (g === eu) {
      const S = oe(t.slice(a + 8, a + d - 7));
      J(r, l, S);
    } else if (g === tu) {
      const S = oe(t.slice(a + 8, a + 12));
      J(r, l, S);
    }
    u = u + 12;
  }
  return r;
}
function oe(e) {
  return String.fromCharCode.apply(null, new Uint8Array(e));
}
function J(e, t, n) {
  bt[t] ? e[bt[t].name] = { value: n, description: n } : e[t] = { value: n, description: n };
}
const ce = 27, au = {
  read: lu,
  SHOT_INFO_AUTO_ROTATE: ce
};
function lu(e, t, n, r, i) {
  let s = H(e, cn, t, t + n, r, i);
  return s.ShotInfo && (s = x({}, s, du(s.ShotInfo.value)), delete s.ShotInfo), s;
}
function du(e) {
  const t = {};
  return e[ce] !== void 0 && (t.AutoRotate = {
    value: e[ce],
    description: pu(e[ce])
  }), t;
}
function pu(e) {
  return e === 0 ? "None" : e === 1 ? "Rotate 90 CW" : e === 2 ? "Rotate 180" : e === 3 ? "Rotate 270 CW" : "Unknown";
}
const gu = {
  read: mu
};
function mu(e, t) {
  return {
    "Image Width": Eu(e, t),
    "Image Height": Su(e, t),
    "Bit Depth": xu(e, t),
    "Color Type": hu(e, t),
    Compression: Iu(e, t),
    Filter: Tu(e, t),
    Interlace: Fu(e, t)
  };
}
function Eu(e, t) {
  if (t + 0 + 4 > e.byteLength)
    return;
  const i = c.getLongAt(e, t);
  return {
    value: i,
    description: `${i}px`
  };
}
function Su(e, t) {
  if (t + 4 + 4 > e.byteLength)
    return;
  const i = c.getLongAt(e, t + 4);
  return {
    value: i,
    description: `${i}px`
  };
}
function xu(e, t) {
  if (t + 8 + 1 > e.byteLength)
    return;
  const i = c.getByteAt(e, t + 8);
  return {
    value: i,
    description: `${i}`
  };
}
function hu(e, t) {
  const i = {
    0: "Grayscale",
    2: "RGB",
    3: "Palette",
    4: "Grayscale with Alpha",
    6: "RGB with Alpha"
  };
  if (t + 9 + 1 > e.byteLength)
    return;
  const s = c.getByteAt(e, t + 9);
  return {
    value: s,
    description: i[s] || "Unknown"
  };
}
function Iu(e, t) {
  if (t + 10 + 1 > e.byteLength)
    return;
  const i = c.getByteAt(e, t + 10);
  return {
    value: i,
    description: i === 0 ? "Deflate/Inflate" : "Unknown"
  };
}
function Tu(e, t) {
  if (t + 11 + 1 > e.byteLength)
    return;
  const i = c.getByteAt(e, t + 11);
  return {
    value: i,
    description: i === 0 ? "Adaptive" : "Unknown"
  };
}
function Fu(e, t) {
  const i = {
    0: "Noninterlaced",
    1: "Adam7 Interlace"
  };
  if (t + 12 + 1 > e.byteLength)
    return;
  const s = c.getByteAt(e, t + 12);
  return {
    value: s,
    description: i[s] || "Unknown"
  };
}
const _u = {
  read: Nu
}, Ge = "STATE_KEYWORD", ke = "STATE_COMPRESSION", Ze = "STATE_LANG", Au = "STATE_TRANSLATED_KEYWORD", He = "STATE_TEXT", Pu = 1, Cu = 1, bu = 6;
function Nu(e, t, n, r) {
  const i = {}, s = [];
  for (let o = 0; o < t.length; o++) {
    const { offset: u, length: f, type: l } = t[o], a = yu(e, u, f, l, n);
    if (a instanceof Promise)
      s.push(a.then(({ name: d, value: g, description: S }) => {
        try {
          if (qe.USE_EXIF && Rt(d, g))
            return {
              __exif: dn.read(Ut(g), bu, r).tags
            };
          if (qe.USE_IPTC && Dt(d, g))
            return {
              __iptc: Me.read(Ut(g), 0, r)
            };
          if (d && !Rt(d, g) && !Dt(d, g))
            return {
              [d]: {
                value: g,
                description: S
              }
            };
        } catch {
        }
        return {};
      }));
    else {
      const { name: d, value: g, description: S } = a;
      d && (i[d] = {
        value: g,
        description: S
      });
    }
  }
  return {
    readTags: i,
    readTagsPromise: s.length > 0 ? Promise.all(s) : void 0
  };
}
function yu(e, t, n, r, i) {
  const s = [], o = [];
  let u, f = Ge, l = fe;
  for (let d = 0; d < n && t + d < e.byteLength; d++) {
    if (f === ke) {
      l = Ou({ type: r, dataView: e, offset: t + d }), r === k && (d += Pu), f = Ot(r, f);
      continue;
    } else if (f === He) {
      u = new DataView(e.buffer.slice(t + d, t + n));
      break;
    }
    const g = e.getUint8(t + d);
    g === 0 ? f = Ot(r, f) : f === Ge ? s.push(g) : f === Ze && o.push(g);
  }
  if (l !== fe && !i)
    return {};
  const a = zt(u, l, Ru(r));
  return a instanceof Promise ? a.then((d) => Ae(d, r, o, s)).catch(() => Ae("<text using unknown compression>".split(""), r, o, s)) : Ae(a, r, o, s);
}
function Ou({ type: e, dataView: t, offset: n }) {
  if (e === k) {
    if (t.getUint8(n) === Cu)
      return t.getUint8(n + 1);
  } else if (e === pe)
    return t.getUint8(n);
  return fe;
}
function Ot(e, t) {
  return t === Ge && [k, pe].includes(e) ? ke : t === ke ? e === k ? Ze : He : t === Ze ? Au : He;
}
function Ru(e) {
  return e === Xe || e === pe ? "latin1" : "utf-8";
}
function Ae(e, t, n, r) {
  const i = Uu(e);
  return {
    name: Du(t, n, r),
    value: i,
    description: t === k ? Lu(e) : i
  };
}
function Du(e, t, n) {
  const r = W(n);
  if (e === Xe || t.length === 0)
    return r;
  const i = W(t);
  return `${r} (${i})`;
}
function Uu(e) {
  return e instanceof DataView ? E(e, 0, e.byteLength) : e;
}
function Lu(e) {
  return pn.decode("UTF-8", e);
}
function Rt(e, t) {
  return e.toLowerCase() === "raw profile type exif" && t.substring(1, 5) === "exif";
}
function Dt(e, t) {
  return e.toLowerCase() === "raw profile type iptc" && t.substring(1, 5) === "iptc";
}
function Ut(e) {
  const t = e.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/);
  return Mu(t[2].replace(/\n/g, ""));
}
function Mu(e) {
  const t = new DataView(new ArrayBuffer(e.length / 2));
  for (let n = 0; n < e.length; n += 2)
    t.setUint8(n / 2, parseInt(e.substring(n, n + 2), 16));
  return t;
}
const Bu = {
  read: Gu
};
function Gu(e, t) {
  const n = {};
  for (let r = 0; r < t.length; r++) {
    const i = c.getLongAt(e, t[r] + z), s = E(e, t[r] + B, N);
    s === qt ? (n["Pixels Per Unit X"] = ku(e, t[r], i), n["Pixels Per Unit Y"] = Zu(e, t[r], i), n["Pixel Units"] = Hu(e, t[r], i)) : s === wt && (n["Modify Date"] = $u(e, t[r], i));
  }
  return n;
}
function ku(e, t, n) {
  if (!xe(e, t, n, 0, 4))
    return;
  const s = c.getLongAt(e, t + F + 0);
  return {
    value: s,
    description: "" + s
  };
}
function Zu(e, t, n) {
  if (!xe(e, t, n, 4, 4))
    return;
  const s = c.getLongAt(e, t + F + 4);
  return {
    value: s,
    description: "" + s
  };
}
function Hu(e, t, n) {
  if (!xe(e, t, n, 8, 1))
    return;
  const s = c.getByteAt(e, t + F + 8);
  return {
    value: s,
    description: s === 1 ? "meters" : "Unknown"
  };
}
function $u(e, t, n) {
  if (!xe(e, t, n, 0, 7))
    return;
  const i = c.getShortAt(e, t + F), s = c.getByteAt(e, t + F + 2), o = c.getByteAt(e, t + F + 3), u = c.getByteAt(e, t + F + 4), f = c.getByteAt(e, t + F + 5), l = c.getByteAt(e, t + F + 6);
  return {
    value: [i, s, o, u, f, l],
    description: `${X(i, 4)}-${X(s, 2)}-${X(o, 2)} ${X(u, 2)}:${X(f, 2)}:${X(l, 2)}`
  };
}
function xe(e, t, n, r, i) {
  return r + i <= n && t + F + r + i <= e.byteLength;
}
function X(e, t) {
  return `${"0".repeat(t - ("" + e).length)}${e}`;
}
const Xu = {
  read: Ku
}, Yu = 4, zu = 7;
function Ku(e, t) {
  const n = {}, r = c.getByteAt(e, t);
  return n.Alpha = Wu(r), n.Animation = ju(r), n.ImageWidth = Lt(e, t + Yu), n.ImageHeight = Lt(e, t + zu), n;
}
function Wu(e) {
  const t = e & 16;
  return {
    value: t ? 1 : 0,
    description: t ? "Yes" : "No"
  };
}
function ju(e) {
  const t = e & 2;
  return {
    value: t ? 1 : 0,
    description: t ? "Yes" : "No"
  };
}
function Lt(e, t) {
  const n = c.getByteAt(e, t) + 256 * c.getByteAt(e, t + 1) + 65536 * c.getByteAt(e, t + 2) + 1;
  return {
    value: n,
    description: n + "px"
  };
}
const Ju = {
  read: vu
};
function vu(e) {
  return {
    "GIF Version": qu(e),
    "Image Width": wu(e),
    "Image Height": Qu(e),
    "Global Color Map": Vu(e),
    "Bits Per Pixel": tc(e),
    "Color Resolution Depth": ec(e)
  };
}
function qu(e) {
  if (6 > e.byteLength)
    return;
  const r = E(e, 3, 3);
  return {
    value: r,
    description: r
  };
}
function wu(e) {
  if (8 > e.byteLength)
    return;
  const r = e.getUint16(6, !0);
  return {
    value: r,
    description: `${r}px`
  };
}
function Qu(e) {
  if (10 > e.byteLength)
    return;
  const r = e.getUint16(8, !0);
  return {
    value: r,
    description: `${r}px`
  };
}
function Vu(e) {
  if (11 > e.byteLength)
    return;
  const i = (e.getUint8(10) & 128) >>> 7;
  return {
    value: i,
    description: i === 1 ? "Yes" : "No"
  };
}
function ec(e) {
  if (11 > e.byteLength)
    return;
  const i = ((e.getUint8(10) & 112) >>> 4) + 1;
  return {
    value: i,
    description: `${i} ${i === 1 ? "bit" : "bits"}`
  };
}
function tc(e) {
  if (11 > e.byteLength)
    return;
  const i = (e.getUint8(10) & 7) + 1;
  return {
    value: i,
    description: `${i} ${i === 1 ? "bit" : "bits"}`
  };
}
const nc = [6, 7, 99], rc = {
  get: ic
};
function ic(e, t, n) {
  if (oc(t)) {
    t.type = "image/jpeg";
    const r = n + t.JPEGInterchangeFormat.value;
    t.image = e.buffer.slice(r, r + t.JPEGInterchangeFormatLength.value), Ht(t, "base64", function() {
      return $t(this.image);
    });
  }
  return t;
}
function oc(e) {
  return e && (e.Compression === void 0 || nc.includes(e.Compression.value)) && e.JPEGInterchangeFormat && e.JPEGInterchangeFormat.value && e.JPEGInterchangeFormatLength && e.JPEGInterchangeFormatLength.value;
}
function Un(e) {
  this.name = "MetadataMissingError", this.message = e || "No Exif data", this.stack = new Error().stack;
}
Un.prototype = new Error();
const je = {
  MetadataMissingError: Un
}, Rc = {
  load: sc,
  loadView: Ln,
  errors: je
}, Dc = je;
function sc(e, t = {}) {
  return uc(e) ? (t.async = !0, cc(e, t).then((n) => Pe(n, t))) : mc(e) ? (t.async = !0, Ec(e).then((n) => Pe(n, t))) : Pe(e, t);
}
function uc(e) {
  return typeof e == "string";
}
function cc(e, t) {
  return /^\w+:\/\//.test(e) ? typeof fetch < "u" ? fc(e, t) : ac(e, t) : dc(e) ? Promise.resolve(Gn(e)) : pc(e, t);
}
function fc(e, { length: t } = {}) {
  const n = { method: "GET" };
  return Number.isInteger(t) && t >= 0 && (n.headers = {
    range: `bytes=0-${t - 1}`
  }), fetch(e, n).then((r) => r.arrayBuffer());
}
function ac(e, { length: t } = {}) {
  return new Promise((n, r) => {
    const i = {};
    Number.isInteger(t) && t >= 0 && (i.headers = {
      range: `bytes=0-${t - 1}`
    }), lc(e)(e, i, (o) => {
      if (o.statusCode >= 200 && o.statusCode <= 299) {
        const u = [];
        o.on("data", (f) => u.push(Buffer.from(f))), o.on("error", (f) => r(f)), o.on("end", () => n(Buffer.concat(u)));
      } else
        r(`Could not fetch file: ${o.statusCode} ${o.statusMessage}`), o.resume();
    }).on("error", (o) => r(o));
  });
}
function lc(e) {
  return /^https:\/\//.test(e) ? __non_webpack_require__("https").get : __non_webpack_require__("http").get;
}
function dc(e) {
  return /^data:[^;,]*(;base64)?,/.test(e);
}
function pc(e, { length: t } = {}) {
  return new Promise((n, r) => {
    const i = gc();
    i.open(e, (s, o) => {
      s ? r(s) : i.stat(e, (u, f) => {
        if (u)
          r(u);
        else {
          const l = Math.min(f.size, t !== void 0 ? t : f.size), a = Buffer.alloc(l), d = {
            buffer: a,
            length: l
          };
          i.read(o, d, (g) => {
            g ? r(g) : i.close(o, (S) => {
              S && console.warn(`Could not close file ${e}:`, S), n(a);
            });
          });
        }
      });
    });
  });
}
function gc() {
  try {
    return __non_webpack_require__("fs");
  } catch {
    return;
  }
}
function mc(e) {
  return typeof File < "u" && e instanceof File;
}
function Ec(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = (i) => t(i.target.result), r.onerror = () => n(r.error), r.readAsArrayBuffer(e);
  });
}
function Pe(e, t) {
  return Sc(e) && (e = new Uint8Array(e).buffer), Ln(xc(e), t);
}
function Sc(e) {
  try {
    return Buffer.isBuffer(e);
  } catch {
    return !1;
  }
}
function xc(e) {
  try {
    return new DataView(e);
  } catch {
    return new kt(e);
  }
}
function Ln(e, {
  expanded: t = !1,
  async: n = !1,
  includeUnknown: r = !1,
  domParser: i = void 0
} = {
  expanded: !1,
  async: !1,
  includeUnknown: !1,
  domParser: void 0
}) {
  let s = !1, o = {};
  const u = [], {
    fileType: f,
    fileDataOffset: l,
    jfifDataOffset: a,
    tiffHeaderOffset: d,
    iptcDataOffset: g,
    xmpChunks: S,
    iccChunks: T,
    mpfDataOffset: P,
    pngHeaderOffset: A,
    pngTextChunks: b,
    pngChunkOffsets: y,
    vp8xChunkOffset: Q,
    gifHeaderOffset: V
  } = yi.parseAppMarkers(e, n);
  if (hc(l)) {
    s = !0;
    const p = ao.read(e, l);
    t ? o.file = p : o = x({}, o, p);
  }
  if (Ic(a)) {
    s = !0;
    const p = To.read(e, a);
    t ? o.jfif = p : o = x({}, o, p);
  }
  if (Tc(d)) {
    s = !0;
    const { tags: p, byteOrder: D } = dn.read(e, d, r);
    if (p.Thumbnail && (o.Thumbnail = p.Thumbnail, delete p.Thumbnail), t ? (o.exif = p, Fc(o)) : o = x({}, o, p), p["IPTC-NAA"] && !Mt(g)) {
      const h = Me.read(p["IPTC-NAA"].value, 0, r);
      t ? o.iptc = h : o = x({}, o, h);
    }
    if (p.ApplicationNotes && !Bt(S)) {
      const h = Pt.read(W(p.ApplicationNotes.value), void 0, i);
      t ? o.xmp = h : (delete h._raw, o = x({}, o, h));
    }
    if (p.ImageSourceData) {
      const h = Xs.read(p.PhotoshopSettings.value, r);
      t ? o.photoshop = h : o = x({}, o, h);
    }
    if (p.ICC_Profile && !Gt(T)) {
      const h = yt.read(
        p.ICC_Profile.value,
        [{
          offset: 0,
          length: p.ICC_Profile.value.length,
          chunkNumber: 1,
          chunksTotal: 1
        }]
      );
      t ? o.icc = h : o = x({}, o, h);
    }
    if (_c(p)) {
      const h = au.read(e, d, p.MakerNote.__offset, D, r);
      t ? o.makerNotes = h : o = x({}, o, h);
    }
    p.MakerNote && delete p.MakerNote.__offset;
  }
  if (Mt(g)) {
    s = !0;
    const p = Me.read(e, g, r);
    t ? o.iptc = p : o = x({}, o, p);
  }
  if (Bt(S)) {
    s = !0;
    const p = Pt.read(e, S, i);
    t ? o.xmp = p : (delete p._raw, o = x({}, o, p));
  }
  if (Gt(T)) {
    s = !0;
    const p = yt.read(e, T, n);
    p instanceof Promise ? u.push(p.then(te)) : te(p);
  }
  if (Ac(P)) {
    s = !0;
    const p = no.read(e, P, r);
    t ? o.mpf = p : o = x({}, o, p);
  }
  if (Pc(A)) {
    s = !0;
    const p = gu.read(e, A);
    t ? (o.png = o.png ? x({}, o.png, p) : p, o.pngFile = p) : o = x({}, o, p);
  }
  if (Cc(b)) {
    s = !0;
    const { readTags: p, readTagsPromise: D } = _u.read(e, b, n, r);
    Je(p), D && u.push(D.then((h) => h.forEach(Je)));
  }
  if (bc(y)) {
    s = !0;
    const p = Bu.read(e, y);
    t ? o.png = o.png ? x({}, o.png, p) : p : o = x({}, o, p);
  }
  if (Nc(Q)) {
    s = !0;
    const p = Xu.read(e, Q);
    t ? o.riff = o.riff ? x({}, o.riff, p) : p : o = x({}, o, p);
  }
  if (yc(V)) {
    s = !0;
    const p = Ju.read(e, V);
    t ? o.gif = o.gif ? x({}, o.gif, p) : p : o = x({}, o, p);
  }
  const ee = rc.get(e, o.Thumbnail, d);
  if (ee ? (s = !0, o.Thumbnail = ee) : delete o.Thumbnail, f && (t ? (o.file || (o.file = {}), o.file.FileType = f) : o.FileType = f, s = !0), !s)
    throw new je.MetadataMissingError();
  if (n)
    return Promise.all(u).then(() => o);
  return o;
  function te(p) {
    t ? o.icc = p : o = x({}, o, p);
  }
  function Je(p) {
    if (t) {
      for (const D of ["exif", "iptc"]) {
        const h = `__${D}`;
        p[h] && (o[D] = o[D] ? x({}, o.exif, p[h]) : p[h], delete p[h]);
      }
      o.png = o.png ? x({}, o.png, p) : p, o.pngText = o.pngText ? x({}, o.png, p) : p;
    } else
      o = x(
        {},
        o,
        p.__exif ? p.__exif : {},
        p.__iptc ? p.__iptc : {},
        p
      ), delete o.__exif, delete o.__iptc;
  }
}
function hc(e) {
  return e !== void 0;
}
function Ic(e) {
  return e !== void 0;
}
function Tc(e) {
  return e !== void 0;
}
function Fc(e) {
  if (e.exif) {
    if (e.exif.GPSLatitude && e.exif.GPSLatitudeRef)
      try {
        e.gps = e.gps || {}, e.gps.Latitude = ae(e.exif.GPSLatitude.value), e.exif.GPSLatitudeRef.value.join("") === "S" && (e.gps.Latitude = -e.gps.Latitude);
      } catch {
      }
    if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef)
      try {
        e.gps = e.gps || {}, e.gps.Longitude = ae(e.exif.GPSLongitude.value), e.exif.GPSLongitudeRef.value.join("") === "W" && (e.gps.Longitude = -e.gps.Longitude);
      } catch {
      }
    if (e.exif.GPSAltitude && e.exif.GPSAltitudeRef)
      try {
        e.gps = e.gps || {}, e.gps.Altitude = e.exif.GPSAltitude.value[0] / e.exif.GPSAltitude.value[1], e.exif.GPSAltitudeRef.value === 1 && (e.gps.Altitude = -e.gps.Altitude);
      } catch {
      }
  }
}
function Mt(e) {
  return e !== void 0;
}
function Bt(e) {
  return Array.isArray(e) && e.length > 0;
}
function Gt(e) {
  return Array.isArray(e) && e.length > 0;
}
function _c(e) {
  return e.Make && e.Make.value && Array.isArray(e.Make.value) && e.Make.value[0] === "Canon" && e.MakerNote && e.MakerNote.__offset;
}
function Ac(e) {
  return e !== void 0;
}
function Pc(e) {
  return e !== void 0;
}
function Cc(e) {
  return e !== void 0;
}
function bc(e) {
  return e !== void 0;
}
function Nc(e) {
  return e !== void 0;
}
function yc(e) {
  return e !== void 0;
}
export {
  Rc as default,
  Dc as errors,
  sc as load,
  Ln as loadView
};
