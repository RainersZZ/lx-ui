function tr(e, t) {
  for (var r = 0; r < t.length; r++) {
    const i = t[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i)
        if (s !== "default" && !(s in e)) {
          const n = Object.getOwnPropertyDescriptor(i, s);
          n && Object.defineProperty(e, s, n.get ? n : {
            enumerable: !0,
            get: () => i[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var K = {}, Xe = {};
Xe.userAgent = !1;
var Le = {}, rr = "11.1.0", ir = "jsrsasign(all) 11.1.0 (2024-02-01) (c) 2010-2023 Kenji Urushima | kjur.github.io/jsrsasign/license";
/*! CryptoJS v3.1.2 core-fix.js
 * code.google.com/p/crypto-js
 * (c) 2009-2013 by Jeff Mott. All rights reserved.
 * code.google.com/p/crypto-js/wiki/License
 * THIS IS FIX of 'core.js' to fix Hmac issue.
 * https://code.google.com/p/crypto-js/issues/detail?id=84
 * https://crypto-js.googlecode.com/svn-history/r667/branches/3.x/src/core.js
 */
var L = L || function(e, t) {
  var r = {}, i = r.lib = {}, s = i.Base = /* @__PURE__ */ function() {
    function o() {
    }
    return { extend: function(l) {
      o.prototype = this;
      var f = new o();
      return l && f.mixIn(l), f.hasOwnProperty("init") || (f.init = function() {
        f.$super.init.apply(this, arguments);
      }), f.init.prototype = f, f.$super = this, f;
    }, create: function() {
      var l = this.extend();
      return l.init.apply(l, arguments), l;
    }, init: function() {
    }, mixIn: function(l) {
      for (var f in l)
        l.hasOwnProperty(f) && (this[f] = l[f]);
      l.hasOwnProperty("toString") && (this.toString = l.toString);
    }, clone: function() {
      return this.init.prototype.extend(this);
    } };
  }(), n = i.WordArray = s.extend({ init: function(o, l) {
    o = this.words = o || [], l != t ? this.sigBytes = l : this.sigBytes = o.length * 4;
  }, toString: function(o) {
    return (o || u).stringify(this);
  }, concat: function(o) {
    var l = this.words, f = o.words, d = this.sigBytes, g = o.sigBytes;
    if (this.clamp(), d % 4)
      for (var m = 0; m < g; m++) {
        var F = f[m >>> 2] >>> 24 - m % 4 * 8 & 255;
        l[d + m >>> 2] |= F << 24 - (d + m) % 4 * 8;
      }
    else
      for (var m = 0; m < g; m += 4)
        l[d + m >>> 2] = f[m >>> 2];
    return this.sigBytes += g, this;
  }, clamp: function() {
    var o = this.words, l = this.sigBytes;
    o[l >>> 2] &= 4294967295 << 32 - l % 4 * 8, o.length = e.ceil(l / 4);
  }, clone: function() {
    var o = s.clone.call(this);
    return o.words = this.words.slice(0), o;
  }, random: function(o) {
    for (var l = [], f = 0; f < o; f += 4)
      l.push(e.random() * 4294967296 | 0);
    return new n.init(l, o);
  } }), h = r.enc = {}, u = h.Hex = { stringify: function(o) {
    for (var l = o.words, f = o.sigBytes, d = [], g = 0; g < f; g++) {
      var m = l[g >>> 2] >>> 24 - g % 4 * 8 & 255;
      d.push((m >>> 4).toString(16)), d.push((m & 15).toString(16));
    }
    return d.join("");
  }, parse: function(o) {
    for (var l = o.length, f = [], d = 0; d < l; d += 2)
      f[d >>> 3] |= parseInt(o.substr(d, 2), 16) << 24 - d % 8 * 4;
    return new n.init(f, l / 2);
  } }, p = h.Latin1 = { stringify: function(o) {
    for (var l = o.words, f = o.sigBytes, d = [], g = 0; g < f; g++) {
      var m = l[g >>> 2] >>> 24 - g % 4 * 8 & 255;
      d.push(String.fromCharCode(m));
    }
    return d.join("");
  }, parse: function(o) {
    for (var l = o.length, f = [], d = 0; d < l; d++)
      f[d >>> 2] |= (o.charCodeAt(d) & 255) << 24 - d % 4 * 8;
    return new n.init(f, l);
  } }, c = h.Utf8 = { stringify: function(o) {
    try {
      return decodeURIComponent(escape(p.stringify(o)));
    } catch {
      throw new Error("Malformed UTF-8 data");
    }
  }, parse: function(o) {
    return p.parse(unescape(encodeURIComponent(o)));
  } }, y = i.BufferedBlockAlgorithm = s.extend({ reset: function() {
    this._data = new n.init(), this._nDataBytes = 0;
  }, _append: function(o) {
    typeof o == "string" && (o = c.parse(o)), this._data.concat(o), this._nDataBytes += o.sigBytes;
  }, _process: function(o) {
    var l = this._data, f = l.words, d = l.sigBytes, g = this.blockSize, m = g * 4, F = d / m;
    o ? F = e.ceil(F) : F = e.max((F | 0) - this._minBufferSize, 0);
    var D = F * g, A = e.min(D * 4, d);
    if (D) {
      for (var C = 0; C < D; C += g)
        this._doProcessBlock(f, C);
      var x = f.splice(0, D);
      l.sigBytes -= A;
    }
    return new n.init(x, A);
  }, clone: function() {
    var o = s.clone.call(this);
    return o._data = this._data.clone(), o;
  }, _minBufferSize: 0 });
  i.Hasher = y.extend({ cfg: s.extend(), init: function(o) {
    this.cfg = this.cfg.extend(o), this.reset();
  }, reset: function() {
    y.reset.call(this), this._doReset();
  }, update: function(o) {
    return this._append(o), this._process(), this;
  }, finalize: function(o) {
    o && this._append(o);
    var l = this._doFinalize();
    return l;
  }, blockSize: 512 / 32, _createHelper: function(o) {
    return function(l, f) {
      return new o.init(f).finalize(l);
    };
  }, _createHmacHelper: function(o) {
    return function(l, f) {
      return new v.HMAC.init(o, f).finalize(l);
    };
  } });
  var v = r.algo = {};
  return r;
}(Math);
(function(e) {
  var s = L, t = s.lib, r = t.Base, i = t.WordArray, s = s.x64 = {};
  s.Word = r.extend({ init: function(n, h) {
    this.high = n, this.low = h;
  } }), s.WordArray = r.extend({ init: function(n, h) {
    n = this.words = n || [], this.sigBytes = h != e ? h : 8 * n.length;
  }, toX32: function() {
    for (var n = this.words, h = n.length, u = [], p = 0; p < h; p++) {
      var c = n[p];
      u.push(c.high), u.push(c.low);
    }
    return i.create(u, this.sigBytes);
  }, clone: function() {
    for (var n = r.clone.call(this), h = n.words = this.words.slice(0), u = h.length, p = 0; p < u; p++)
      h[p] = h[p].clone();
    return n;
  } });
})();
L.lib.Cipher || function(e) {
  var l = L, t = l.lib, r = t.Base, i = t.WordArray, s = t.BufferedBlockAlgorithm, n = l.enc.Base64, h = l.algo.EvpKDF, u = t.Cipher = s.extend({ cfg: r.extend(), createEncryptor: function(d, g) {
    return this.create(this._ENC_XFORM_MODE, d, g);
  }, createDecryptor: function(d, g) {
    return this.create(this._DEC_XFORM_MODE, d, g);
  }, init: function(d, g, m) {
    this.cfg = this.cfg.extend(m), this._xformMode = d, this._key = g, this.reset();
  }, reset: function() {
    s.reset.call(this), this._doReset();
  }, process: function(d) {
    return this._append(d), this._process();
  }, finalize: function(d) {
    return d && this._append(d), this._doFinalize();
  }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function(d) {
    return { encrypt: function(g, m, F) {
      return (typeof m == "string" ? f : o).encrypt(d, g, m, F);
    }, decrypt: function(g, m, F) {
      return (typeof m == "string" ? f : o).decrypt(d, g, m, F);
    } };
  } });
  t.StreamCipher = u.extend({ _doFinalize: function() {
    return this._process(!0);
  }, blockSize: 1 });
  var v = l.mode = {}, p = function(d, g, m) {
    var F = this._iv;
    F ? this._iv = e : F = this._prevBlock;
    for (var D = 0; D < m; D++)
      d[g + D] ^= F[D];
  }, c = (t.BlockCipherMode = r.extend({ createEncryptor: function(d, g) {
    return this.Encryptor.create(d, g);
  }, createDecryptor: function(d, g) {
    return this.Decryptor.create(d, g);
  }, init: function(d, g) {
    this._cipher = d, this._iv = g;
  } })).extend();
  c.Encryptor = c.extend({ processBlock: function(d, g) {
    var m = this._cipher, F = m.blockSize;
    p.call(this, d, g, F), m.encryptBlock(d, g), this._prevBlock = d.slice(g, g + F);
  } }), c.Decryptor = c.extend({ processBlock: function(d, g) {
    var m = this._cipher, F = m.blockSize, D = d.slice(g, g + F);
    m.decryptBlock(
      d,
      g
    ), p.call(this, d, g, F), this._prevBlock = D;
  } }), v = v.CBC = c, c = (l.pad = {}).Pkcs7 = { pad: function(d, g) {
    for (var m = 4 * g, m = m - d.sigBytes % m, F = m << 24 | m << 16 | m << 8 | m, D = [], A = 0; A < m; A += 4)
      D.push(F);
    m = i.create(D, m), d.concat(m);
  }, unpad: function(d) {
    d.sigBytes -= d.words[d.sigBytes - 1 >>> 2] & 255;
  } }, t.BlockCipher = u.extend({ cfg: u.cfg.extend({ mode: v, padding: c }), reset: function() {
    u.reset.call(this);
    var g = this.cfg, d = g.iv, g = g.mode;
    if (this._xformMode == this._ENC_XFORM_MODE)
      var m = g.createEncryptor;
    else
      m = g.createDecryptor, this._minBufferSize = 1;
    this._mode = m.call(g, this, d && d.words);
  }, _doProcessBlock: function(d, g) {
    this._mode.processBlock(d, g);
  }, _doFinalize: function() {
    var d = this.cfg.padding;
    if (this._xformMode == this._ENC_XFORM_MODE) {
      d.pad(this._data, this.blockSize);
      var g = this._process(!0);
    } else
      g = this._process(!0), d.unpad(g);
    return g;
  }, blockSize: 4 });
  var y = t.CipherParams = r.extend({ init: function(d) {
    this.mixIn(d);
  }, toString: function(d) {
    return (d || this.formatter).stringify(this);
  } }), v = (l.format = {}).OpenSSL = { stringify: function(d) {
    var g = d.ciphertext;
    return d = d.salt, (d ? i.create([1398893684, 1701076831]).concat(d).concat(g) : g).toString(n);
  }, parse: function(d) {
    d = n.parse(d);
    var g = d.words;
    if (g[0] == 1398893684 && g[1] == 1701076831) {
      var m = i.create(g.slice(2, 4));
      g.splice(0, 4), d.sigBytes -= 16;
    }
    return y.create({ ciphertext: d, salt: m });
  } }, o = t.SerializableCipher = r.extend({ cfg: r.extend({ format: v }), encrypt: function(d, g, m, F) {
    F = this.cfg.extend(F);
    var D = d.createEncryptor(m, F);
    return g = D.finalize(g), D = D.cfg, y.create({
      ciphertext: g,
      key: m,
      iv: D.iv,
      algorithm: d,
      mode: D.mode,
      padding: D.padding,
      blockSize: d.blockSize,
      formatter: F.format
    });
  }, decrypt: function(d, g, m, F) {
    return F = this.cfg.extend(F), g = this._parse(g, F.format), d.createDecryptor(m, F).finalize(g.ciphertext);
  }, _parse: function(d, g) {
    return typeof d == "string" ? g.parse(d, this) : d;
  } }), l = (l.kdf = {}).OpenSSL = { execute: function(d, g, m, F) {
    return F || (F = i.random(8)), d = h.create({ keySize: g + m }).compute(d, F), m = i.create(d.words.slice(g), 4 * m), d.sigBytes = 4 * g, y.create({ key: d, iv: m, salt: F });
  } }, f = t.PasswordBasedCipher = o.extend({ cfg: o.cfg.extend({ kdf: l }), encrypt: function(d, g, m, F) {
    return F = this.cfg.extend(F), m = F.kdf.execute(m, d.keySize, d.ivSize), F.iv = m.iv, d = o.encrypt.call(this, d, g, m.key, F), d.mixIn(m), d;
  }, decrypt: function(d, g, m, F) {
    return F = this.cfg.extend(F), g = this._parse(g, F.format), m = F.kdf.execute(m, d.keySize, d.ivSize, g.salt), F.iv = m.iv, o.decrypt.call(this, d, g, m.key, F);
  } });
}();
(function() {
  for (var e = L, t = e.lib.BlockCipher, x = e.algo, r = [], i = [], s = [], n = [], h = [], u = [], p = [], c = [], y = [], v = [], o = [], l = 0; 256 > l; l++)
    o[l] = 128 > l ? l << 1 : l << 1 ^ 283;
  for (var f = 0, d = 0, l = 0; 256 > l; l++) {
    var g = d ^ d << 1 ^ d << 2 ^ d << 3 ^ d << 4, g = g >>> 8 ^ g & 255 ^ 99;
    r[f] = g, i[g] = f;
    var m = o[f], F = o[m], D = o[F], A = 257 * o[g] ^ 16843008 * g;
    s[f] = A << 24 | A >>> 8, n[f] = A << 16 | A >>> 16, h[f] = A << 8 | A >>> 24, u[f] = A, A = 16843009 * D ^ 65537 * F ^ 257 * m ^ 16843008 * f, p[g] = A << 24 | A >>> 8, c[g] = A << 16 | A >>> 16, y[g] = A << 8 | A >>> 24, v[g] = A, f ? (f = m ^ o[o[o[D ^ m]]], d ^= o[o[d]]) : f = d = 1;
  }
  var C = [
    0,
    1,
    2,
    4,
    8,
    16,
    32,
    64,
    128,
    27,
    54
  ], x = x.AES = t.extend({ _doReset: function() {
    for (var S = this._key, E = S.words, w = S.sigBytes / 4, S = 4 * ((this._nRounds = w + 6) + 1), b = this._keySchedule = [], P = 0; P < S; P++)
      if (P < w)
        b[P] = E[P];
      else {
        var T = b[P - 1];
        P % w ? 6 < w && P % w == 4 && (T = r[T >>> 24] << 24 | r[T >>> 16 & 255] << 16 | r[T >>> 8 & 255] << 8 | r[T & 255]) : (T = T << 8 | T >>> 24, T = r[T >>> 24] << 24 | r[T >>> 16 & 255] << 16 | r[T >>> 8 & 255] << 8 | r[T & 255], T ^= C[P / w | 0] << 24), b[P] = b[P - w] ^ T;
      }
    for (E = this._invKeySchedule = [], w = 0; w < S; w++)
      P = S - w, T = w % 4 ? b[P] : b[P - 4], E[w] = 4 > w || 4 >= P ? T : p[r[T >>> 24]] ^ c[r[T >>> 16 & 255]] ^ y[r[T >>> 8 & 255]] ^ v[r[T & 255]];
  }, encryptBlock: function(E, w) {
    this._doCryptBlock(E, w, this._keySchedule, s, n, h, u, r);
  }, decryptBlock: function(E, w) {
    var S = E[w + 1];
    E[w + 1] = E[w + 3], E[w + 3] = S, this._doCryptBlock(E, w, this._invKeySchedule, p, c, y, v, i), S = E[w + 1], E[w + 1] = E[w + 3], E[w + 3] = S;
  }, _doCryptBlock: function(E, w, S, b, P, T, H, I) {
    for (var B = this._nRounds, oe = E[w] ^ S[0], fe = E[w + 1] ^ S[1], ue = E[w + 2] ^ S[2], ne = E[w + 3] ^ S[3], O = 4, j = 1; j < B; j++)
      var ce = b[oe >>> 24] ^ P[fe >>> 16 & 255] ^ T[ue >>> 8 & 255] ^ H[ne & 255] ^ S[O++], Q = b[fe >>> 24] ^ P[ue >>> 16 & 255] ^ T[ne >>> 8 & 255] ^ H[oe & 255] ^ S[O++], $ = b[ue >>> 24] ^ P[ne >>> 16 & 255] ^ T[oe >>> 8 & 255] ^ H[fe & 255] ^ S[O++], ne = b[ne >>> 24] ^ P[oe >>> 16 & 255] ^ T[fe >>> 8 & 255] ^ H[ue & 255] ^ S[O++], oe = ce, fe = Q, ue = $;
    ce = (I[oe >>> 24] << 24 | I[fe >>> 16 & 255] << 16 | I[ue >>> 8 & 255] << 8 | I[ne & 255]) ^ S[O++], Q = (I[fe >>> 24] << 24 | I[ue >>> 16 & 255] << 16 | I[ne >>> 8 & 255] << 8 | I[oe & 255]) ^ S[O++], $ = (I[ue >>> 24] << 24 | I[ne >>> 16 & 255] << 16 | I[oe >>> 8 & 255] << 8 | I[fe & 255]) ^ S[O++], ne = (I[ne >>> 24] << 24 | I[oe >>> 16 & 255] << 16 | I[fe >>> 8 & 255] << 8 | I[ue & 255]) ^ S[O++], E[w] = ce, E[w + 1] = Q, E[w + 2] = $, E[w + 3] = ne;
  }, keySize: 8 });
  e.AES = t._createHelper(x);
})();
(function() {
  function e(o, l) {
    var f = (this._lBlock >>> o ^ this._rBlock) & l;
    this._rBlock ^= f, this._lBlock ^= f << o;
  }
  function t(o, l) {
    var f = (this._rBlock >>> o ^ this._lBlock) & l;
    this._lBlock ^= f, this._rBlock ^= f << o;
  }
  var r = L, s = r.lib, i = s.WordArray, s = s.BlockCipher, n = r.algo, h = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], u = [
    14,
    17,
    11,
    24,
    1,
    5,
    3,
    28,
    15,
    6,
    21,
    10,
    23,
    19,
    12,
    4,
    26,
    8,
    16,
    7,
    27,
    20,
    13,
    2,
    41,
    52,
    31,
    37,
    47,
    55,
    30,
    40,
    51,
    45,
    33,
    48,
    44,
    49,
    39,
    56,
    34,
    53,
    46,
    42,
    50,
    36,
    29,
    32
  ], p = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], c = [{
    0: 8421888,
    268435456: 32768,
    536870912: 8421378,
    805306368: 2,
    1073741824: 512,
    1342177280: 8421890,
    1610612736: 8389122,
    1879048192: 8388608,
    2147483648: 514,
    2415919104: 8389120,
    2684354560: 33280,
    2952790016: 8421376,
    3221225472: 32770,
    3489660928: 8388610,
    3758096384: 0,
    4026531840: 33282,
    134217728: 0,
    402653184: 8421890,
    671088640: 33282,
    939524096: 32768,
    1207959552: 8421888,
    1476395008: 512,
    1744830464: 8421378,
    2013265920: 2,
    2281701376: 8389120,
    2550136832: 33280,
    2818572288: 8421376,
    3087007744: 8389122,
    3355443200: 8388610,
    3623878656: 32770,
    3892314112: 514,
    4160749568: 8388608,
    1: 32768,
    268435457: 2,
    536870913: 8421888,
    805306369: 8388608,
    1073741825: 8421378,
    1342177281: 33280,
    1610612737: 512,
    1879048193: 8389122,
    2147483649: 8421890,
    2415919105: 8421376,
    2684354561: 8388610,
    2952790017: 33282,
    3221225473: 514,
    3489660929: 8389120,
    3758096385: 32770,
    4026531841: 0,
    134217729: 8421890,
    402653185: 8421376,
    671088641: 8388608,
    939524097: 512,
    1207959553: 32768,
    1476395009: 8388610,
    1744830465: 2,
    2013265921: 33282,
    2281701377: 32770,
    2550136833: 8389122,
    2818572289: 514,
    3087007745: 8421888,
    3355443201: 8389120,
    3623878657: 0,
    3892314113: 33280,
    4160749569: 8421378
  }, {
    0: 1074282512,
    16777216: 16384,
    33554432: 524288,
    50331648: 1074266128,
    67108864: 1073741840,
    83886080: 1074282496,
    100663296: 1073758208,
    117440512: 16,
    134217728: 540672,
    150994944: 1073758224,
    167772160: 1073741824,
    184549376: 540688,
    201326592: 524304,
    218103808: 0,
    234881024: 16400,
    251658240: 1074266112,
    8388608: 1073758208,
    25165824: 540688,
    41943040: 16,
    58720256: 1073758224,
    75497472: 1074282512,
    92274688: 1073741824,
    109051904: 524288,
    125829120: 1074266128,
    142606336: 524304,
    159383552: 0,
    176160768: 16384,
    192937984: 1074266112,
    209715200: 1073741840,
    226492416: 540672,
    243269632: 1074282496,
    260046848: 16400,
    268435456: 0,
    285212672: 1074266128,
    301989888: 1073758224,
    318767104: 1074282496,
    335544320: 1074266112,
    352321536: 16,
    369098752: 540688,
    385875968: 16384,
    402653184: 16400,
    419430400: 524288,
    436207616: 524304,
    452984832: 1073741840,
    469762048: 540672,
    486539264: 1073758208,
    503316480: 1073741824,
    520093696: 1074282512,
    276824064: 540688,
    293601280: 524288,
    310378496: 1074266112,
    327155712: 16384,
    343932928: 1073758208,
    360710144: 1074282512,
    377487360: 16,
    394264576: 1073741824,
    411041792: 1074282496,
    427819008: 1073741840,
    444596224: 1073758224,
    461373440: 524304,
    478150656: 0,
    494927872: 16400,
    511705088: 1074266128,
    528482304: 540672
  }, {
    0: 260,
    1048576: 0,
    2097152: 67109120,
    3145728: 65796,
    4194304: 65540,
    5242880: 67108868,
    6291456: 67174660,
    7340032: 67174400,
    8388608: 67108864,
    9437184: 67174656,
    10485760: 65792,
    11534336: 67174404,
    12582912: 67109124,
    13631488: 65536,
    14680064: 4,
    15728640: 256,
    524288: 67174656,
    1572864: 67174404,
    2621440: 0,
    3670016: 67109120,
    4718592: 67108868,
    5767168: 65536,
    6815744: 65540,
    7864320: 260,
    8912896: 4,
    9961472: 256,
    11010048: 67174400,
    12058624: 65796,
    13107200: 65792,
    14155776: 67109124,
    15204352: 67174660,
    16252928: 67108864,
    16777216: 67174656,
    17825792: 65540,
    18874368: 65536,
    19922944: 67109120,
    20971520: 256,
    22020096: 67174660,
    23068672: 67108868,
    24117248: 0,
    25165824: 67109124,
    26214400: 67108864,
    27262976: 4,
    28311552: 65792,
    29360128: 67174400,
    30408704: 260,
    31457280: 65796,
    32505856: 67174404,
    17301504: 67108864,
    18350080: 260,
    19398656: 67174656,
    20447232: 0,
    21495808: 65540,
    22544384: 67109120,
    23592960: 256,
    24641536: 67174404,
    25690112: 65536,
    26738688: 67174660,
    27787264: 65796,
    28835840: 67108868,
    29884416: 67109124,
    30932992: 67174400,
    31981568: 4,
    33030144: 65792
  }, {
    0: 2151682048,
    65536: 2147487808,
    131072: 4198464,
    196608: 2151677952,
    262144: 0,
    327680: 4198400,
    393216: 2147483712,
    458752: 4194368,
    524288: 2147483648,
    589824: 4194304,
    655360: 64,
    720896: 2147487744,
    786432: 2151678016,
    851968: 4160,
    917504: 4096,
    983040: 2151682112,
    32768: 2147487808,
    98304: 64,
    163840: 2151678016,
    229376: 2147487744,
    294912: 4198400,
    360448: 2151682112,
    425984: 0,
    491520: 2151677952,
    557056: 4096,
    622592: 2151682048,
    688128: 4194304,
    753664: 4160,
    819200: 2147483648,
    884736: 4194368,
    950272: 4198464,
    1015808: 2147483712,
    1048576: 4194368,
    1114112: 4198400,
    1179648: 2147483712,
    1245184: 0,
    1310720: 4160,
    1376256: 2151678016,
    1441792: 2151682048,
    1507328: 2147487808,
    1572864: 2151682112,
    1638400: 2147483648,
    1703936: 2151677952,
    1769472: 4198464,
    1835008: 2147487744,
    1900544: 4194304,
    1966080: 64,
    2031616: 4096,
    1081344: 2151677952,
    1146880: 2151682112,
    1212416: 0,
    1277952: 4198400,
    1343488: 4194368,
    1409024: 2147483648,
    1474560: 2147487808,
    1540096: 64,
    1605632: 2147483712,
    1671168: 4096,
    1736704: 2147487744,
    1802240: 2151678016,
    1867776: 4160,
    1933312: 2151682048,
    1998848: 4194304,
    2064384: 4198464
  }, {
    0: 128,
    4096: 17039360,
    8192: 262144,
    12288: 536870912,
    16384: 537133184,
    20480: 16777344,
    24576: 553648256,
    28672: 262272,
    32768: 16777216,
    36864: 537133056,
    40960: 536871040,
    45056: 553910400,
    49152: 553910272,
    53248: 0,
    57344: 17039488,
    61440: 553648128,
    2048: 17039488,
    6144: 553648256,
    10240: 128,
    14336: 17039360,
    18432: 262144,
    22528: 537133184,
    26624: 553910272,
    30720: 536870912,
    34816: 537133056,
    38912: 0,
    43008: 553910400,
    47104: 16777344,
    51200: 536871040,
    55296: 553648128,
    59392: 16777216,
    63488: 262272,
    65536: 262144,
    69632: 128,
    73728: 536870912,
    77824: 553648256,
    81920: 16777344,
    86016: 553910272,
    90112: 537133184,
    94208: 16777216,
    98304: 553910400,
    102400: 553648128,
    106496: 17039360,
    110592: 537133056,
    114688: 262272,
    118784: 536871040,
    122880: 0,
    126976: 17039488,
    67584: 553648256,
    71680: 16777216,
    75776: 17039360,
    79872: 537133184,
    83968: 536870912,
    88064: 17039488,
    92160: 128,
    96256: 553910272,
    100352: 262272,
    104448: 553910400,
    108544: 0,
    112640: 553648128,
    116736: 16777344,
    120832: 262144,
    124928: 537133056,
    129024: 536871040
  }, {
    0: 268435464,
    256: 8192,
    512: 270532608,
    768: 270540808,
    1024: 268443648,
    1280: 2097152,
    1536: 2097160,
    1792: 268435456,
    2048: 0,
    2304: 268443656,
    2560: 2105344,
    2816: 8,
    3072: 270532616,
    3328: 2105352,
    3584: 8200,
    3840: 270540800,
    128: 270532608,
    384: 270540808,
    640: 8,
    896: 2097152,
    1152: 2105352,
    1408: 268435464,
    1664: 268443648,
    1920: 8200,
    2176: 2097160,
    2432: 8192,
    2688: 268443656,
    2944: 270532616,
    3200: 0,
    3456: 270540800,
    3712: 2105344,
    3968: 268435456,
    4096: 268443648,
    4352: 270532616,
    4608: 270540808,
    4864: 8200,
    5120: 2097152,
    5376: 268435456,
    5632: 268435464,
    5888: 2105344,
    6144: 2105352,
    6400: 0,
    6656: 8,
    6912: 270532608,
    7168: 8192,
    7424: 268443656,
    7680: 270540800,
    7936: 2097160,
    4224: 8,
    4480: 2105344,
    4736: 2097152,
    4992: 268435464,
    5248: 268443648,
    5504: 8200,
    5760: 270540808,
    6016: 270532608,
    6272: 270540800,
    6528: 270532616,
    6784: 8192,
    7040: 2105352,
    7296: 2097160,
    7552: 0,
    7808: 268435456,
    8064: 268443656
  }, {
    0: 1048576,
    16: 33555457,
    32: 1024,
    48: 1049601,
    64: 34604033,
    80: 0,
    96: 1,
    112: 34603009,
    128: 33555456,
    144: 1048577,
    160: 33554433,
    176: 34604032,
    192: 34603008,
    208: 1025,
    224: 1049600,
    240: 33554432,
    8: 34603009,
    24: 0,
    40: 33555457,
    56: 34604032,
    72: 1048576,
    88: 33554433,
    104: 33554432,
    120: 1025,
    136: 1049601,
    152: 33555456,
    168: 34603008,
    184: 1048577,
    200: 1024,
    216: 34604033,
    232: 1,
    248: 1049600,
    256: 33554432,
    272: 1048576,
    288: 33555457,
    304: 34603009,
    320: 1048577,
    336: 33555456,
    352: 34604032,
    368: 1049601,
    384: 1025,
    400: 34604033,
    416: 1049600,
    432: 1,
    448: 0,
    464: 34603008,
    480: 33554433,
    496: 1024,
    264: 1049600,
    280: 33555457,
    296: 34603009,
    312: 1,
    328: 33554432,
    344: 1048576,
    360: 1025,
    376: 34604032,
    392: 33554433,
    408: 34603008,
    424: 0,
    440: 34604033,
    456: 1049601,
    472: 1024,
    488: 33555456,
    504: 1048577
  }, {
    0: 134219808,
    1: 131072,
    2: 134217728,
    3: 32,
    4: 131104,
    5: 134350880,
    6: 134350848,
    7: 2048,
    8: 134348800,
    9: 134219776,
    10: 133120,
    11: 134348832,
    12: 2080,
    13: 0,
    14: 134217760,
    15: 133152,
    2147483648: 2048,
    2147483649: 134350880,
    2147483650: 134219808,
    2147483651: 134217728,
    2147483652: 134348800,
    2147483653: 133120,
    2147483654: 133152,
    2147483655: 32,
    2147483656: 134217760,
    2147483657: 2080,
    2147483658: 131104,
    2147483659: 134350848,
    2147483660: 0,
    2147483661: 134348832,
    2147483662: 134219776,
    2147483663: 131072,
    16: 133152,
    17: 134350848,
    18: 32,
    19: 2048,
    20: 134219776,
    21: 134217760,
    22: 134348832,
    23: 131072,
    24: 0,
    25: 131104,
    26: 134348800,
    27: 134219808,
    28: 134350880,
    29: 133120,
    30: 2080,
    31: 134217728,
    2147483664: 131072,
    2147483665: 2048,
    2147483666: 134348832,
    2147483667: 133152,
    2147483668: 32,
    2147483669: 134348800,
    2147483670: 134217728,
    2147483671: 134219808,
    2147483672: 134350880,
    2147483673: 134217760,
    2147483674: 134219776,
    2147483675: 0,
    2147483676: 133120,
    2147483677: 2080,
    2147483678: 131104,
    2147483679: 134350848
  }], y = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679], v = n.DES = s.extend({ _doReset: function() {
    for (var o = this._key.words, l = [], f = 0; 56 > f; f++) {
      var d = h[f] - 1;
      l[f] = o[d >>> 5] >>> 31 - d % 32 & 1;
    }
    for (o = this._subKeys = [], d = 0; 16 > d; d++) {
      for (var g = o[d] = [], m = p[d], f = 0; 24 > f; f++)
        g[f / 6 | 0] |= l[(u[f] - 1 + m) % 28] << 31 - f % 6, g[4 + (f / 6 | 0)] |= l[28 + (u[f + 24] - 1 + m) % 28] << 31 - f % 6;
      for (g[0] = g[0] << 1 | g[0] >>> 31, f = 1; 7 > f; f++)
        g[f] >>>= 4 * (f - 1) + 3;
      g[7] = g[7] << 5 | g[7] >>> 27;
    }
    for (l = this._invSubKeys = [], f = 0; 16 > f; f++)
      l[f] = o[15 - f];
  }, encryptBlock: function(o, l) {
    this._doCryptBlock(o, l, this._subKeys);
  }, decryptBlock: function(o, l) {
    this._doCryptBlock(o, l, this._invSubKeys);
  }, _doCryptBlock: function(o, l, f) {
    this._lBlock = o[l], this._rBlock = o[l + 1], e.call(this, 4, 252645135), e.call(this, 16, 65535), t.call(this, 2, 858993459), t.call(this, 8, 16711935), e.call(this, 1, 1431655765);
    for (var d = 0; 16 > d; d++) {
      for (var g = f[d], m = this._lBlock, F = this._rBlock, D = 0, A = 0; 8 > A; A++)
        D |= c[A][((F ^ g[A]) & y[A]) >>> 0];
      this._lBlock = F, this._rBlock = m ^ D;
    }
    f = this._lBlock, this._lBlock = this._rBlock, this._rBlock = f, e.call(this, 1, 1431655765), t.call(this, 8, 16711935), t.call(this, 2, 858993459), e.call(this, 16, 65535), e.call(this, 4, 252645135), o[l] = this._lBlock, o[l + 1] = this._rBlock;
  }, keySize: 2, ivSize: 2, blockSize: 2 });
  r.DES = s._createHelper(v), n = n.TripleDES = s.extend({ _doReset: function() {
    var o = this._key.words;
    this._des1 = v.createEncryptor(i.create(o.slice(0, 2))), this._des2 = v.createEncryptor(i.create(o.slice(2, 4))), this._des3 = v.createEncryptor(i.create(o.slice(4, 6)));
  }, encryptBlock: function(o, l) {
    this._des1.encryptBlock(o, l), this._des2.decryptBlock(o, l), this._des3.encryptBlock(o, l);
  }, decryptBlock: function(o, l) {
    this._des3.decryptBlock(o, l), this._des2.encryptBlock(o, l), this._des1.decryptBlock(o, l);
  }, keySize: 6, ivSize: 2, blockSize: 2 }), r.TripleDES = s._createHelper(n);
})();
(function() {
  var e = L, t = e.lib.WordArray;
  e.enc.Base64 = { stringify: function(r) {
    var i = r.words, s = r.sigBytes, n = this._map;
    r.clamp(), r = [];
    for (var h = 0; h < s; h += 3)
      for (var u = (i[h >>> 2] >>> 24 - 8 * (h % 4) & 255) << 16 | (i[h + 1 >>> 2] >>> 24 - 8 * ((h + 1) % 4) & 255) << 8 | i[h + 2 >>> 2] >>> 24 - 8 * ((h + 2) % 4) & 255, p = 0; 4 > p && h + 0.75 * p < s; p++)
        r.push(n.charAt(u >>> 6 * (3 - p) & 63));
    if (i = n.charAt(64))
      for (; r.length % 4; )
        r.push(i);
    return r.join("");
  }, parse: function(r) {
    var i = r.length, s = this._map, n = s.charAt(64);
    n && (n = r.indexOf(n), n != -1 && (i = n));
    for (var n = [], h = 0, u = 0; u < i; u++)
      if (u % 4) {
        var p = s.indexOf(r.charAt(u - 1)) << 2 * (u % 4), c = s.indexOf(r.charAt(u)) >>> 6 - 2 * (u % 4);
        n[h >>> 2] |= (p | c) << 24 - 8 * (h % 4), h++;
      }
    return t.create(n, h);
  }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
})();
(function(e) {
  function t(v, o, l, f, d, g, m) {
    return v = v + (o & l | ~o & f) + d + m, (v << g | v >>> 32 - g) + o;
  }
  function r(v, o, l, f, d, g, m) {
    return v = v + (o & f | l & ~f) + d + m, (v << g | v >>> 32 - g) + o;
  }
  function i(v, o, l, f, d, g, m) {
    return v = v + (o ^ l ^ f) + d + m, (v << g | v >>> 32 - g) + o;
  }
  function s(v, o, l, f, d, g, m) {
    return v = v + (l ^ (o | ~f)) + d + m, (v << g | v >>> 32 - g) + o;
  }
  for (var n = L, p = n.lib, h = p.WordArray, u = p.Hasher, p = n.algo, c = [], y = 0; 64 > y; y++)
    c[y] = 4294967296 * e.abs(e.sin(y + 1)) | 0;
  p = p.MD5 = u.extend({
    _doReset: function() {
      this._hash = new h.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    _doProcessBlock: function(v, o) {
      for (var l = 0; 16 > l; l++) {
        var f = o + l, d = v[f];
        v[f] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
      }
      var l = this._hash.words, f = v[o + 0], d = v[o + 1], g = v[o + 2], m = v[o + 3], F = v[o + 4], D = v[o + 5], A = v[o + 6], C = v[o + 7], x = v[o + 8], E = v[o + 9], w = v[o + 10], S = v[o + 11], b = v[o + 12], P = v[o + 13], T = v[o + 14], H = v[o + 15], I = l[0], j = l[1], O = l[2], B = l[3], I = t(I, j, O, B, f, 7, c[0]), B = t(B, I, j, O, d, 12, c[1]), O = t(O, B, I, j, g, 17, c[2]), j = t(j, O, B, I, m, 22, c[3]), I = t(I, j, O, B, F, 7, c[4]), B = t(B, I, j, O, D, 12, c[5]), O = t(O, B, I, j, A, 17, c[6]), j = t(j, O, B, I, C, 22, c[7]), I = t(I, j, O, B, x, 7, c[8]), B = t(B, I, j, O, E, 12, c[9]), O = t(O, B, I, j, w, 17, c[10]), j = t(j, O, B, I, S, 22, c[11]), I = t(I, j, O, B, b, 7, c[12]), B = t(B, I, j, O, P, 12, c[13]), O = t(O, B, I, j, T, 17, c[14]), j = t(j, O, B, I, H, 22, c[15]), I = r(I, j, O, B, d, 5, c[16]), B = r(B, I, j, O, A, 9, c[17]), O = r(O, B, I, j, S, 14, c[18]), j = r(j, O, B, I, f, 20, c[19]), I = r(I, j, O, B, D, 5, c[20]), B = r(B, I, j, O, w, 9, c[21]), O = r(O, B, I, j, H, 14, c[22]), j = r(j, O, B, I, F, 20, c[23]), I = r(I, j, O, B, E, 5, c[24]), B = r(B, I, j, O, T, 9, c[25]), O = r(O, B, I, j, m, 14, c[26]), j = r(j, O, B, I, x, 20, c[27]), I = r(I, j, O, B, P, 5, c[28]), B = r(
        B,
        I,
        j,
        O,
        g,
        9,
        c[29]
      ), O = r(O, B, I, j, C, 14, c[30]), j = r(j, O, B, I, b, 20, c[31]), I = i(I, j, O, B, D, 4, c[32]), B = i(B, I, j, O, x, 11, c[33]), O = i(O, B, I, j, S, 16, c[34]), j = i(j, O, B, I, T, 23, c[35]), I = i(I, j, O, B, d, 4, c[36]), B = i(B, I, j, O, F, 11, c[37]), O = i(O, B, I, j, C, 16, c[38]), j = i(j, O, B, I, w, 23, c[39]), I = i(I, j, O, B, P, 4, c[40]), B = i(B, I, j, O, f, 11, c[41]), O = i(O, B, I, j, m, 16, c[42]), j = i(j, O, B, I, A, 23, c[43]), I = i(I, j, O, B, E, 4, c[44]), B = i(B, I, j, O, b, 11, c[45]), O = i(O, B, I, j, H, 16, c[46]), j = i(j, O, B, I, g, 23, c[47]), I = s(I, j, O, B, f, 6, c[48]), B = s(B, I, j, O, C, 10, c[49]), O = s(
        O,
        B,
        I,
        j,
        T,
        15,
        c[50]
      ), j = s(j, O, B, I, D, 21, c[51]), I = s(I, j, O, B, b, 6, c[52]), B = s(B, I, j, O, m, 10, c[53]), O = s(O, B, I, j, w, 15, c[54]), j = s(j, O, B, I, d, 21, c[55]), I = s(I, j, O, B, x, 6, c[56]), B = s(B, I, j, O, H, 10, c[57]), O = s(O, B, I, j, A, 15, c[58]), j = s(j, O, B, I, P, 21, c[59]), I = s(I, j, O, B, F, 6, c[60]), B = s(B, I, j, O, S, 10, c[61]), O = s(O, B, I, j, g, 15, c[62]), j = s(j, O, B, I, E, 21, c[63]);
      l[0] = l[0] + I | 0, l[1] = l[1] + j | 0, l[2] = l[2] + O | 0, l[3] = l[3] + B | 0;
    },
    _doFinalize: function() {
      var v = this._data, o = v.words, l = 8 * this._nDataBytes, f = 8 * v.sigBytes;
      o[f >>> 5] |= 128 << 24 - f % 32;
      var d = e.floor(l / 4294967296);
      for (o[(f + 64 >>> 9 << 4) + 15] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, o[(f + 64 >>> 9 << 4) + 14] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, v.sigBytes = 4 * (o.length + 1), this._process(), v = this._hash, o = v.words, l = 0; 4 > l; l++)
        f = o[l], o[l] = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360;
      return v;
    },
    clone: function() {
      var v = u.clone.call(this);
      return v._hash = this._hash.clone(), v;
    }
  }), n.MD5 = u._createHelper(p), n.HmacMD5 = u._createHmacHelper(p);
})(Math);
(function() {
  var e = L, s = e.lib, t = s.WordArray, r = s.Hasher, i = [], s = e.algo.SHA1 = r.extend({ _doReset: function() {
    this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }, _doProcessBlock: function(n, h) {
    for (var u = this._hash.words, p = u[0], c = u[1], y = u[2], v = u[3], o = u[4], l = 0; 80 > l; l++) {
      if (16 > l)
        i[l] = n[h + l] | 0;
      else {
        var f = i[l - 3] ^ i[l - 8] ^ i[l - 14] ^ i[l - 16];
        i[l] = f << 1 | f >>> 31;
      }
      f = (p << 5 | p >>> 27) + o + i[l], f = 20 > l ? f + ((c & y | ~c & v) + 1518500249) : 40 > l ? f + ((c ^ y ^ v) + 1859775393) : 60 > l ? f + ((c & y | c & v | y & v) - 1894007588) : f + ((c ^ y ^ v) - 899497514), o = v, v = y, y = c << 30 | c >>> 2, c = p, p = f;
    }
    u[0] = u[0] + p | 0, u[1] = u[1] + c | 0, u[2] = u[2] + y | 0, u[3] = u[3] + v | 0, u[4] = u[4] + o | 0;
  }, _doFinalize: function() {
    var n = this._data, h = n.words, u = 8 * this._nDataBytes, p = 8 * n.sigBytes;
    return h[p >>> 5] |= 128 << 24 - p % 32, h[(p + 64 >>> 9 << 4) + 14] = Math.floor(u / 4294967296), h[(p + 64 >>> 9 << 4) + 15] = u, n.sigBytes = 4 * h.length, this._process(), this._hash;
  }, clone: function() {
    var n = r.clone.call(this);
    return n._hash = this._hash.clone(), n;
  } });
  e.SHA1 = r._createHelper(s), e.HmacSHA1 = r._createHmacHelper(s);
})();
(function(e) {
  for (var t = L, l = t.lib, r = l.WordArray, i = l.Hasher, l = t.algo, s = [], n = [], h = function(d) {
    return 4294967296 * (d - (d | 0)) | 0;
  }, u = 2, p = 0; 64 > p; ) {
    var c;
    e: {
      c = u;
      for (var y = e.sqrt(c), v = 2; v <= y; v++)
        if (!(c % v)) {
          c = !1;
          break e;
        }
      c = !0;
    }
    c && (8 > p && (s[p] = h(e.pow(u, 0.5))), n[p] = h(e.pow(u, 1 / 3)), p++), u++;
  }
  var o = [], l = l.SHA256 = i.extend({ _doReset: function() {
    this._hash = new r.init(s.slice(0));
  }, _doProcessBlock: function(f, d) {
    for (var g = this._hash.words, m = g[0], F = g[1], D = g[2], A = g[3], C = g[4], x = g[5], E = g[6], w = g[7], S = 0; 64 > S; S++) {
      if (16 > S)
        o[S] = f[d + S] | 0;
      else {
        var b = o[S - 15], P = o[S - 2];
        o[S] = ((b << 25 | b >>> 7) ^ (b << 14 | b >>> 18) ^ b >>> 3) + o[S - 7] + ((P << 15 | P >>> 17) ^ (P << 13 | P >>> 19) ^ P >>> 10) + o[S - 16];
      }
      b = w + ((C << 26 | C >>> 6) ^ (C << 21 | C >>> 11) ^ (C << 7 | C >>> 25)) + (C & x ^ ~C & E) + n[S] + o[S], P = ((m << 30 | m >>> 2) ^ (m << 19 | m >>> 13) ^ (m << 10 | m >>> 22)) + (m & F ^ m & D ^ F & D), w = E, E = x, x = C, C = A + b | 0, A = D, D = F, F = m, m = b + P | 0;
    }
    g[0] = g[0] + m | 0, g[1] = g[1] + F | 0, g[2] = g[2] + D | 0, g[3] = g[3] + A | 0, g[4] = g[4] + C | 0, g[5] = g[5] + x | 0, g[6] = g[6] + E | 0, g[7] = g[7] + w | 0;
  }, _doFinalize: function() {
    var f = this._data, d = f.words, g = 8 * this._nDataBytes, m = 8 * f.sigBytes;
    return d[m >>> 5] |= 128 << 24 - m % 32, d[(m + 64 >>> 9 << 4) + 14] = e.floor(g / 4294967296), d[(m + 64 >>> 9 << 4) + 15] = g, f.sigBytes = 4 * d.length, this._process(), this._hash;
  }, clone: function() {
    var f = i.clone.call(this);
    return f._hash = this._hash.clone(), f;
  } });
  t.SHA256 = i._createHelper(l), t.HmacSHA256 = i._createHmacHelper(l);
})(Math);
(function() {
  var e = L, t = e.lib.WordArray, i = e.algo, r = i.SHA256, i = i.SHA224 = r.extend({ _doReset: function() {
    this._hash = new t.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
  }, _doFinalize: function() {
    var s = r._doFinalize.call(this);
    return s.sigBytes -= 4, s;
  } });
  e.SHA224 = r._createHelper(i), e.HmacSHA224 = r._createHmacHelper(i);
})();
(function() {
  function e() {
    return i.create.apply(i, arguments);
  }
  for (var t = L, r = t.lib.Hasher, n = t.x64, i = n.Word, s = n.WordArray, n = t.algo, h = [
    e(1116352408, 3609767458),
    e(1899447441, 602891725),
    e(3049323471, 3964484399),
    e(3921009573, 2173295548),
    e(961987163, 4081628472),
    e(1508970993, 3053834265),
    e(2453635748, 2937671579),
    e(2870763221, 3664609560),
    e(3624381080, 2734883394),
    e(310598401, 1164996542),
    e(607225278, 1323610764),
    e(1426881987, 3590304994),
    e(1925078388, 4068182383),
    e(2162078206, 991336113),
    e(2614888103, 633803317),
    e(3248222580, 3479774868),
    e(3835390401, 2666613458),
    e(4022224774, 944711139),
    e(264347078, 2341262773),
    e(604807628, 2007800933),
    e(770255983, 1495990901),
    e(1249150122, 1856431235),
    e(1555081692, 3175218132),
    e(1996064986, 2198950837),
    e(2554220882, 3999719339),
    e(2821834349, 766784016),
    e(2952996808, 2566594879),
    e(3210313671, 3203337956),
    e(3336571891, 1034457026),
    e(3584528711, 2466948901),
    e(113926993, 3758326383),
    e(338241895, 168717936),
    e(666307205, 1188179964),
    e(773529912, 1546045734),
    e(1294757372, 1522805485),
    e(
      1396182291,
      2643833823
    ),
    e(1695183700, 2343527390),
    e(1986661051, 1014477480),
    e(2177026350, 1206759142),
    e(2456956037, 344077627),
    e(2730485921, 1290863460),
    e(2820302411, 3158454273),
    e(3259730800, 3505952657),
    e(3345764771, 106217008),
    e(3516065817, 3606008344),
    e(3600352804, 1432725776),
    e(4094571909, 1467031594),
    e(275423344, 851169720),
    e(430227734, 3100823752),
    e(506948616, 1363258195),
    e(659060556, 3750685593),
    e(883997877, 3785050280),
    e(958139571, 3318307427),
    e(1322822218, 3812723403),
    e(1537002063, 2003034995),
    e(1747873779, 3602036899),
    e(1955562222, 1575990012),
    e(2024104815, 1125592928),
    e(2227730452, 2716904306),
    e(2361852424, 442776044),
    e(2428436474, 593698344),
    e(2756734187, 3733110249),
    e(3204031479, 2999351573),
    e(3329325298, 3815920427),
    e(3391569614, 3928383900),
    e(3515267271, 566280711),
    e(3940187606, 3454069534),
    e(4118630271, 4000239992),
    e(116418474, 1914138554),
    e(174292421, 2731055270),
    e(289380356, 3203993006),
    e(460393269, 320620315),
    e(685471733, 587496836),
    e(852142971, 1086792851),
    e(1017036298, 365543100),
    e(1126000580, 2618297676),
    e(
      1288033470,
      3409855158
    ),
    e(1501505948, 4234509866),
    e(1607167915, 987167468),
    e(1816402316, 1246189591)
  ], u = [], p = 0; 80 > p; p++)
    u[p] = e();
  n = n.SHA512 = r.extend({ _doReset: function() {
    this._hash = new s.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)]);
  }, _doProcessBlock: function(c, y) {
    for (var F = this._hash.words, v = F[0], o = F[1], l = F[2], f = F[3], d = F[4], g = F[5], m = F[6], F = F[7], D = v.high, A = v.low, C = o.high, x = o.low, E = l.high, w = l.low, S = f.high, b = f.low, P = d.high, T = d.low, H = g.high, I = g.low, B = m.high, O = m.low, j = F.high, ce = F.low, Q = D, $ = A, ne = C, oe = x, fe = E, ue = w, Ge = S, de = b, M = P, X = T, ee = H, te = I, ve = B, re = O, We = j, Oe = ce, we = 0; 80 > we; we++) {
      var Be = u[we];
      if (16 > we)
        var Se = Be.high = c[y + 2 * we] | 0, G = Be.low = c[y + 2 * we + 1] | 0;
      else {
        var Se = u[we - 15], G = Se.high, Ae = Se.low, Se = (G >>> 1 | Ae << 31) ^ (G >>> 8 | Ae << 24) ^ G >>> 7, Ae = (Ae >>> 1 | G << 31) ^ (Ae >>> 8 | G << 24) ^ (Ae >>> 7 | G << 25), je = u[we - 2], G = je.high, Y = je.low, je = (G >>> 19 | Y << 13) ^ (G << 3 | Y >>> 29) ^ G >>> 6, Y = (Y >>> 19 | G << 13) ^ (Y << 3 | G >>> 29) ^ (Y >>> 6 | G << 26), G = u[we - 7], lt = G.high, Te = u[we - 16], De = Te.high, Te = Te.low, G = Ae + G.low, Se = Se + lt + (G >>> 0 < Ae >>> 0 ? 1 : 0), G = G + Y, Se = Se + je + (G >>> 0 < Y >>> 0 ? 1 : 0), G = G + Te, Se = Se + De + (G >>> 0 < Te >>> 0 ? 1 : 0);
        Be.high = Se, Be.low = G;
      }
      var lt = M & ee ^ ~M & ve, Te = X & te ^ ~X & re, Be = Q & ne ^ Q & fe ^ ne & fe, Qt = $ & oe ^ $ & ue ^ oe & ue, Ae = (Q >>> 28 | $ << 4) ^ (Q << 30 | $ >>> 2) ^ (Q << 25 | $ >>> 7), je = ($ >>> 28 | Q << 4) ^ ($ << 30 | Q >>> 2) ^ ($ << 25 | Q >>> 7), Y = h[we], er = Y.high, Dt = Y.low, Y = Oe + ((X >>> 14 | M << 18) ^ (X >>> 18 | M << 14) ^ (X << 23 | M >>> 9)), De = We + ((M >>> 14 | X << 18) ^ (M >>> 18 | X << 14) ^ (M << 23 | X >>> 9)) + (Y >>> 0 < Oe >>> 0 ? 1 : 0), Y = Y + Te, De = De + lt + (Y >>> 0 < Te >>> 0 ? 1 : 0), Y = Y + Dt, De = De + er + (Y >>> 0 < Dt >>> 0 ? 1 : 0), Y = Y + G, De = De + Se + (Y >>> 0 < G >>> 0 ? 1 : 0), G = je + Qt, Be = Ae + Be + (G >>> 0 < je >>> 0 ? 1 : 0), We = ve, Oe = re, ve = ee, re = te, ee = M, te = X, X = de + Y | 0, M = Ge + De + (X >>> 0 < de >>> 0 ? 1 : 0) | 0, Ge = fe, de = ue, fe = ne, ue = oe, ne = Q, oe = $, $ = Y + G | 0, Q = De + Be + ($ >>> 0 < Y >>> 0 ? 1 : 0) | 0;
    }
    A = v.low = A + $, v.high = D + Q + (A >>> 0 < $ >>> 0 ? 1 : 0), x = o.low = x + oe, o.high = C + ne + (x >>> 0 < oe >>> 0 ? 1 : 0), w = l.low = w + ue, l.high = E + fe + (w >>> 0 < ue >>> 0 ? 1 : 0), b = f.low = b + de, f.high = S + Ge + (b >>> 0 < de >>> 0 ? 1 : 0), T = d.low = T + X, d.high = P + M + (T >>> 0 < X >>> 0 ? 1 : 0), I = g.low = I + te, g.high = H + ee + (I >>> 0 < te >>> 0 ? 1 : 0), O = m.low = O + re, m.high = B + ve + (O >>> 0 < re >>> 0 ? 1 : 0), ce = F.low = ce + Oe, F.high = j + We + (ce >>> 0 < Oe >>> 0 ? 1 : 0);
  }, _doFinalize: function() {
    var c = this._data, y = c.words, v = 8 * this._nDataBytes, o = 8 * c.sigBytes;
    return y[o >>> 5] |= 128 << 24 - o % 32, y[(o + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), y[(o + 128 >>> 10 << 5) + 31] = v, c.sigBytes = 4 * y.length, this._process(), this._hash.toX32();
  }, clone: function() {
    var c = r.clone.call(this);
    return c._hash = this._hash.clone(), c;
  }, blockSize: 32 }), t.SHA512 = r._createHelper(n), t.HmacSHA512 = r._createHmacHelper(n);
})();
(function() {
  var e = L, s = e.x64, t = s.Word, r = s.WordArray, s = e.algo, i = s.SHA512, s = s.SHA384 = i.extend({ _doReset: function() {
    this._hash = new r.init([new t.init(3418070365, 3238371032), new t.init(1654270250, 914150663), new t.init(2438529370, 812702999), new t.init(355462360, 4144912697), new t.init(1731405415, 4290775857), new t.init(2394180231, 1750603025), new t.init(3675008525, 1694076839), new t.init(1203062813, 3204075428)]);
  }, _doFinalize: function() {
    var n = i._doFinalize.call(this);
    return n.sigBytes -= 16, n;
  } });
  e.SHA384 = i._createHelper(s), e.HmacSHA384 = i._createHmacHelper(s);
})();
(function() {
  var e = L, c = e.lib, t = c.WordArray, r = c.Hasher, c = e.algo, i = t.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), s = t.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), n = t.create([
    11,
    14,
    15,
    12,
    5,
    8,
    7,
    9,
    11,
    13,
    14,
    15,
    6,
    7,
    9,
    8,
    7,
    6,
    8,
    13,
    11,
    9,
    7,
    15,
    7,
    12,
    15,
    9,
    11,
    7,
    13,
    12,
    11,
    13,
    6,
    7,
    14,
    9,
    13,
    15,
    14,
    8,
    13,
    6,
    5,
    12,
    7,
    5,
    11,
    12,
    14,
    15,
    14,
    15,
    9,
    8,
    9,
    14,
    5,
    6,
    8,
    6,
    5,
    12,
    9,
    15,
    5,
    11,
    6,
    8,
    13,
    12,
    5,
    12,
    13,
    14,
    11,
    8,
    5,
    6
  ]), h = t.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), u = t.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), p = t.create([
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ]), c = c.RIPEMD160 = r.extend({ _doReset: function() {
    this._hash = t.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }, _doProcessBlock: function(y, v) {
    for (var o = 0; 16 > o; o++) {
      var l = v + o, f = y[l];
      y[l] = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360;
    }
    var l = this._hash.words, f = u.words, d = p.words, g = i.words, m = s.words, F = n.words, D = h.words, A, C, x, E, w, S, b, P, T, H;
    S = A = l[0], b = C = l[1], P = x = l[2], T = E = l[3], H = w = l[4];
    for (var I, o = 0; 80 > o; o += 1)
      I = A + y[v + g[o]] | 0, I = 16 > o ? I + ((C ^ x ^ E) + f[0]) : 32 > o ? I + ((C & x | ~C & E) + f[1]) : 48 > o ? I + (((C | ~x) ^ E) + f[2]) : 64 > o ? I + ((C & E | x & ~E) + f[3]) : I + ((C ^ (x | ~E)) + f[4]), I |= 0, I = I << F[o] | I >>> 32 - F[o], I = I + w | 0, A = w, w = E, E = x << 10 | x >>> 22, x = C, C = I, I = S + y[v + m[o]] | 0, I = 16 > o ? I + ((b ^ (P | ~T)) + d[0]) : 32 > o ? I + ((b & T | P & ~T) + d[1]) : 48 > o ? I + (((b | ~P) ^ T) + d[2]) : 64 > o ? I + ((b & P | ~b & T) + d[3]) : I + ((b ^ P ^ T) + d[4]), I |= 0, I = I << D[o] | I >>> 32 - D[o], I = I + H | 0, S = H, H = T, T = P << 10 | P >>> 22, P = b, b = I;
    I = l[1] + x + T | 0, l[1] = l[2] + E + H | 0, l[2] = l[3] + w + S | 0, l[3] = l[4] + A + b | 0, l[4] = l[0] + C + P | 0, l[0] = I;
  }, _doFinalize: function() {
    var y = this._data, v = y.words, o = 8 * this._nDataBytes, l = 8 * y.sigBytes;
    for (v[l >>> 5] |= 128 << 24 - l % 32, v[(l + 64 >>> 9 << 4) + 14] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, y.sigBytes = 4 * (v.length + 1), this._process(), y = this._hash, v = y.words, o = 0; 5 > o; o++)
      l = v[o], v[o] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360;
    return y;
  }, clone: function() {
    var y = r.clone.call(this);
    return y._hash = this._hash.clone(), y;
  } });
  e.RIPEMD160 = r._createHelper(c), e.HmacRIPEMD160 = r._createHmacHelper(c);
})();
(function() {
  var e = L, t = e.enc.Utf8;
  e.algo.HMAC = e.lib.Base.extend({ init: function(r, i) {
    r = this._hasher = new r.init(), typeof i == "string" && (i = t.parse(i));
    var s = r.blockSize, n = 4 * s;
    i.sigBytes > n && (i = r.finalize(i)), i.clamp();
    for (var h = this._oKey = i.clone(), u = this._iKey = i.clone(), p = h.words, c = u.words, y = 0; y < s; y++)
      p[y] ^= 1549556828, c[y] ^= 909522486;
    h.sigBytes = u.sigBytes = n, this.reset();
  }, reset: function() {
    var r = this._hasher;
    r.reset(), r.update(this._iKey);
  }, update: function(r) {
    return this._hasher.update(r), this;
  }, finalize: function(r) {
    var i = this._hasher;
    return r = i.finalize(r), i.reset(), i.finalize(this._oKey.clone().concat(r));
  } });
})();
(function() {
  var e = L, i = e.lib, t = i.Base, r = i.WordArray, i = e.algo, s = i.HMAC, n = i.PBKDF2 = t.extend({ cfg: t.extend({ keySize: 4, hasher: i.SHA1, iterations: 1 }), init: function(h) {
    this.cfg = this.cfg.extend(h);
  }, compute: function(h, u) {
    for (var f = this.cfg, p = s.create(f.hasher, h), c = r.create(), y = r.create([1]), v = c.words, o = y.words, l = f.keySize, f = f.iterations; v.length < l; ) {
      var d = p.update(u).finalize(y);
      p.reset();
      for (var g = d.words, m = g.length, F = d, D = 1; D < f; D++) {
        F = p.finalize(F), p.reset();
        for (var A = F.words, C = 0; C < m; C++)
          g[C] ^= A[C];
      }
      c.concat(d), o[0]++;
    }
    return c.sigBytes = 4 * l, c;
  } });
  e.PBKDF2 = function(h, u, p) {
    return n.create(p).compute(h, u);
  };
})();
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
var _e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Bt = "=";
function Ie(e) {
  var t, r, i = "";
  for (t = 0; t + 3 <= e.length; t += 3)
    r = parseInt(e.substring(t, t + 3), 16), i += _e.charAt(r >> 6) + _e.charAt(r & 63);
  for (t + 1 == e.length ? (r = parseInt(e.substring(t, t + 1), 16), i += _e.charAt(r << 2)) : t + 2 == e.length && (r = parseInt(e.substring(t, t + 2), 16), i += _e.charAt(r >> 2) + _e.charAt((r & 3) << 4)); (i.length & 3) > 0; )
    i += Bt;
  return i;
}
function ke(e) {
  var t = "", r, i = 0, s, n;
  for (r = 0; r < e.length && e.charAt(r) != Bt; ++r)
    n = _e.indexOf(e.charAt(r)), !(n < 0) && (i == 0 ? (t += Ce(n >> 2), s = n & 3, i = 1) : i == 1 ? (t += Ce(s << 2 | n >> 4), s = n & 15, i = 2) : i == 2 ? (t += Ce(s), t += Ce(n >> 2), s = n & 3, i = 3) : (t += Ce(s << 2 | n >> 4), t += Ce(n & 15), i = 0));
  return i == 1 && (t += Ce(s << 2)), t;
}
function Nt(e) {
  var t = ke(e), r, i = new Array();
  for (r = 0; 2 * r < t.length; ++r)
    i[r] = parseInt(t.substring(2 * r, 2 * r + 2), 16);
  return i;
}
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
*/
var He;
function R(e, t, r) {
  e != null && (typeof e == "number" ? this.fromNumber(e, t, r) : t == null && typeof e != "string" ? this.fromString(e, 256) : this.fromString(e, t));
}
function U() {
  return new R(null);
}
function nr(e, t, r, i, s, n) {
  for (; --n >= 0; ) {
    var h = t * this[e++] + r[i] + s;
    s = Math.floor(h / 67108864), r[i++] = h & 67108863;
  }
  return s;
}
function sr(e, t, r, i, s, n) {
  for (var h = t & 32767, u = t >> 15; --n >= 0; ) {
    var p = this[e] & 32767, c = this[e++] >> 15, y = u * p + c * h;
    p = h * p + ((y & 32767) << 15) + r[i] + (s & 1073741823), s = (p >>> 30) + (y >>> 15) + u * c + (s >>> 30), r[i++] = p & 1073741823;
  }
  return s;
}
function ar(e, t, r, i, s, n) {
  for (var h = t & 16383, u = t >> 14; --n >= 0; ) {
    var p = this[e] & 16383, c = this[e++] >> 14, y = u * p + c * h;
    p = h * p + ((y & 16383) << 14) + r[i] + s, s = (p >> 28) + (y >> 14) + u * c, r[i++] = p & 268435455;
  }
  return s;
}
Xe.appName == "Microsoft Internet Explorer" ? (R.prototype.am = sr, He = 30) : Xe.appName != "Netscape" ? (R.prototype.am = nr, He = 26) : (R.prototype.am = ar, He = 28);
R.prototype.DB = He;
R.prototype.DM = (1 << He) - 1;
R.prototype.DV = 1 << He;
var yt = 52;
R.prototype.FV = Math.pow(2, yt);
R.prototype.F1 = yt - He;
R.prototype.F2 = 2 * He - yt;
var or = "0123456789abcdefghijklmnopqrstuvwxyz", it = new Array(), Me, Ee;
Me = 48;
for (Ee = 0; Ee <= 9; ++Ee)
  it[Me++] = Ee;
Me = 97;
for (Ee = 10; Ee < 36; ++Ee)
  it[Me++] = Ee;
Me = 65;
for (Ee = 10; Ee < 36; ++Ee)
  it[Me++] = Ee;
function Ce(e) {
  return or.charAt(e);
}
function Ht(e, t) {
  var r = it[e.charCodeAt(t)];
  return r ?? -1;
}
function ur(e) {
  for (var t = this.t - 1; t >= 0; --t)
    e[t] = this[t];
  e.t = this.t, e.s = this.s;
}
function hr(e) {
  this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
}
function Ne(e) {
  var t = U();
  return t.fromInt(e), t;
}
function fr(e, t) {
  var r;
  if (t == 16)
    r = 4;
  else if (t == 8)
    r = 3;
  else if (t == 256)
    r = 8;
  else if (t == 2)
    r = 1;
  else if (t == 32)
    r = 5;
  else if (t == 4)
    r = 2;
  else {
    this.fromRadix(e, t);
    return;
  }
  this.t = 0, this.s = 0;
  for (var i = e.length, s = !1, n = 0; --i >= 0; ) {
    var h = r == 8 ? e[i] & 255 : Ht(e, i);
    if (h < 0) {
      e.charAt(i) == "-" && (s = !0);
      continue;
    }
    s = !1, n == 0 ? this[this.t++] = h : n + r > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - n) - 1) << n, this[this.t++] = h >> this.DB - n) : this[this.t - 1] |= h << n, n += r, n >= this.DB && (n -= this.DB);
  }
  r == 8 && e[0] & 128 && (this.s = -1, n > 0 && (this[this.t - 1] |= (1 << this.DB - n) - 1 << n)), this.clamp(), s && R.ZERO.subTo(this, this);
}
function cr() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
    --this.t;
}
function lr(e) {
  if (this.s < 0)
    return "-" + this.negate().toString(e);
  var t;
  if (e == 16)
    t = 4;
  else if (e == 8)
    t = 3;
  else if (e == 2)
    t = 1;
  else if (e == 32)
    t = 5;
  else if (e == 4)
    t = 2;
  else
    return this.toRadix(e);
  var r = (1 << t) - 1, i, s = !1, n = "", h = this.t, u = this.DB - h * this.DB % t;
  if (h-- > 0)
    for (u < this.DB && (i = this[h] >> u) > 0 && (s = !0, n = Ce(i)); h >= 0; )
      u < t ? (i = (this[h] & (1 << u) - 1) << t - u, i |= this[--h] >> (u += this.DB - t)) : (i = this[h] >> (u -= t) & r, u <= 0 && (u += this.DB, --h)), i > 0 && (s = !0), s && (n += Ce(i));
  return s ? n : "0";
}
function dr() {
  var e = U();
  return R.ZERO.subTo(this, e), e;
}
function pr() {
  return this.s < 0 ? this.negate() : this;
}
function vr(e) {
  var t = this.s - e.s;
  if (t != 0)
    return t;
  var r = this.t;
  if (t = r - e.t, t != 0)
    return this.s < 0 ? -t : t;
  for (; --r >= 0; )
    if ((t = this[r] - e[r]) != 0)
      return t;
  return 0;
}
function nt(e) {
  var t = 1, r;
  return (r = e >>> 16) != 0 && (e = r, t += 16), (r = e >> 8) != 0 && (e = r, t += 8), (r = e >> 4) != 0 && (e = r, t += 4), (r = e >> 2) != 0 && (e = r, t += 2), (r = e >> 1) != 0 && (e = r, t += 1), t;
}
function gr() {
  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nt(this[this.t - 1] ^ this.s & this.DM);
}
function yr(e, t) {
  var r;
  for (r = this.t - 1; r >= 0; --r)
    t[r + e] = this[r];
  for (r = e - 1; r >= 0; --r)
    t[r] = 0;
  t.t = this.t + e, t.s = this.s;
}
function mr(e, t) {
  for (var r = e; r < this.t; ++r)
    t[r - e] = this[r];
  t.t = Math.max(this.t - e, 0), t.s = this.s;
}
function xr(e, t) {
  var r = e % this.DB, i = this.DB - r, s = (1 << i) - 1, n = Math.floor(e / this.DB), h = this.s << r & this.DM, u;
  for (u = this.t - 1; u >= 0; --u)
    t[u + n + 1] = this[u] >> i | h, h = (this[u] & s) << r;
  for (u = n - 1; u >= 0; --u)
    t[u] = 0;
  t[n] = h, t.t = this.t + n + 1, t.s = this.s, t.clamp();
}
function Sr(e, t) {
  t.s = this.s;
  var r = Math.floor(e / this.DB);
  if (r >= this.t) {
    t.t = 0;
    return;
  }
  var i = e % this.DB, s = this.DB - i, n = (1 << i) - 1;
  t[0] = this[r] >> i;
  for (var h = r + 1; h < this.t; ++h)
    t[h - r - 1] |= (this[h] & n) << s, t[h - r] = this[h] >> i;
  i > 0 && (t[this.t - r - 1] |= (this.s & n) << s), t.t = this.t - r, t.clamp();
}
function Er(e, t) {
  for (var r = 0, i = 0, s = Math.min(e.t, this.t); r < s; )
    i += this[r] - e[r], t[r++] = i & this.DM, i >>= this.DB;
  if (e.t < this.t) {
    for (i -= e.s; r < this.t; )
      i += this[r], t[r++] = i & this.DM, i >>= this.DB;
    i += this.s;
  } else {
    for (i += this.s; r < e.t; )
      i -= e[r], t[r++] = i & this.DM, i >>= this.DB;
    i -= e.s;
  }
  t.s = i < 0 ? -1 : 0, i < -1 ? t[r++] = this.DV + i : i > 0 && (t[r++] = i), t.t = r, t.clamp();
}
function wr(e, t) {
  var r = this.abs(), i = e.abs(), s = r.t;
  for (t.t = s + i.t; --s >= 0; )
    t[s] = 0;
  for (s = 0; s < i.t; ++s)
    t[s + r.t] = r.am(0, i[s], t, s, 0, r.t);
  t.s = 0, t.clamp(), this.s != e.s && R.ZERO.subTo(t, t);
}
function br(e) {
  for (var t = this.abs(), r = e.t = 2 * t.t; --r >= 0; )
    e[r] = 0;
  for (r = 0; r < t.t - 1; ++r) {
    var i = t.am(r, t[r], e, 2 * r, 0, 1);
    (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, i, t.t - r - 1)) >= t.DV && (e[r + t.t] -= t.DV, e[r + t.t + 1] = 1);
  }
  e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)), e.s = 0, e.clamp();
}
function Fr(e, t, r) {
  var i = e.abs();
  if (!(i.t <= 0)) {
    var s = this.abs();
    if (s.t < i.t) {
      t != null && t.fromInt(0), r != null && this.copyTo(r);
      return;
    }
    r == null && (r = U());
    var n = U(), h = this.s, u = e.s, p = this.DB - nt(i[i.t - 1]);
    p > 0 ? (i.lShiftTo(p, n), s.lShiftTo(p, r)) : (i.copyTo(n), s.copyTo(r));
    var c = n.t, y = n[c - 1];
    if (y != 0) {
      var v = y * (1 << this.F1) + (c > 1 ? n[c - 2] >> this.F2 : 0), o = this.FV / v, l = (1 << this.F1) / v, f = 1 << this.F2, d = r.t, g = d - c, m = t ?? U();
      for (n.dlShiftTo(g, m), r.compareTo(m) >= 0 && (r[r.t++] = 1, r.subTo(m, r)), R.ONE.dlShiftTo(c, m), m.subTo(n, n); n.t < c; )
        n[n.t++] = 0;
      for (; --g >= 0; ) {
        var F = r[--d] == y ? this.DM : Math.floor(r[d] * o + (r[d - 1] + f) * l);
        if ((r[d] += n.am(0, F, r, g, 0, c)) < F)
          for (n.dlShiftTo(g, m), r.subTo(m, r); r[d] < --F; )
            r.subTo(m, r);
      }
      t != null && (r.drShiftTo(c, t), h != u && R.ZERO.subTo(t, t)), r.t = c, r.clamp(), p > 0 && r.rShiftTo(p, r), h < 0 && R.ZERO.subTo(r, r);
    }
  }
}
function Ar(e) {
  var t = U();
  return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(R.ZERO) > 0 && e.subTo(t, t), t;
}
function Ve(e) {
  this.m = e;
}
function Dr(e) {
  return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
}
function Pr(e) {
  return e;
}
function Cr(e) {
  e.divRemTo(this.m, null, e);
}
function Ir(e, t, r) {
  e.multiplyTo(t, r), this.reduce(r);
}
function Rr(e, t) {
  e.squareTo(t), this.reduce(t);
}
Ve.prototype.convert = Dr;
Ve.prototype.revert = Pr;
Ve.prototype.reduce = Cr;
Ve.prototype.mulTo = Ir;
Ve.prototype.sqrTo = Rr;
function Tr() {
  if (this.t < 1)
    return 0;
  var e = this[0];
  if (!(e & 1))
    return 0;
  var t = e & 3;
  return t = t * (2 - (e & 15) * t) & 15, t = t * (2 - (e & 255) * t) & 255, t = t * (2 - ((e & 65535) * t & 65535)) & 65535, t = t * (2 - e * t % this.DV) % this.DV, t > 0 ? this.DV - t : -t;
}
function Ke(e) {
  this.m = e, this.mp = e.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
}
function Br(e) {
  var t = U();
  return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(R.ZERO) > 0 && this.m.subTo(t, t), t;
}
function Nr(e) {
  var t = U();
  return e.copyTo(t), this.reduce(t), t;
}
function Hr(e) {
  for (; e.t <= this.mt2; )
    e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var r = e[t] & 32767, i = r * this.mpl + ((r * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
    for (r = t + this.m.t, e[r] += this.m.am(0, i, e, t, 0, this.m.t); e[r] >= e.DV; )
      e[r] -= e.DV, e[++r]++;
  }
  e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
}
function Or(e, t) {
  e.squareTo(t), this.reduce(t);
}
function jr(e, t, r) {
  e.multiplyTo(t, r), this.reduce(r);
}
Ke.prototype.convert = Br;
Ke.prototype.revert = Nr;
Ke.prototype.reduce = Hr;
Ke.prototype.mulTo = jr;
Ke.prototype.sqrTo = Or;
function Vr() {
  return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}
function Kr(e, t) {
  if (e > 4294967295 || e < 1)
    return R.ONE;
  var r = U(), i = U(), s = t.convert(this), n = nt(e) - 1;
  for (s.copyTo(r); --n >= 0; )
    if (t.sqrTo(r, i), (e & 1 << n) > 0)
      t.mulTo(i, s, r);
    else {
      var h = r;
      r = i, i = h;
    }
  return t.revert(r);
}
function Lr(e, t) {
  var r;
  return e < 256 || t.isEven() ? r = new Ve(t) : r = new Ke(t), this.exp(e, r);
}
R.prototype.copyTo = ur;
R.prototype.fromInt = hr;
R.prototype.fromString = fr;
R.prototype.clamp = cr;
R.prototype.dlShiftTo = yr;
R.prototype.drShiftTo = mr;
R.prototype.lShiftTo = xr;
R.prototype.rShiftTo = Sr;
R.prototype.subTo = Er;
R.prototype.multiplyTo = wr;
R.prototype.squareTo = br;
R.prototype.divRemTo = Fr;
R.prototype.invDigit = Tr;
R.prototype.isEven = Vr;
R.prototype.exp = Kr;
R.prototype.toString = lr;
R.prototype.negate = dr;
R.prototype.abs = pr;
R.prototype.compareTo = vr;
R.prototype.bitLength = gr;
R.prototype.mod = Ar;
R.prototype.modPowInt = Lr;
R.ZERO = Ne(0);
R.ONE = Ne(1);
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function _r() {
  var e = U();
  return this.copyTo(e), e;
}
function qr() {
  if (this.s < 0) {
    if (this.t == 1)
      return this[0] - this.DV;
    if (this.t == 0)
      return -1;
  } else {
    if (this.t == 1)
      return this[0];
    if (this.t == 0)
      return 0;
  }
  return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
}
function kr() {
  return this.t == 0 ? this.s : this[0] << 24 >> 24;
}
function Mr() {
  return this.t == 0 ? this.s : this[0] << 16 >> 16;
}
function Ur(e) {
  return Math.floor(Math.LN2 * this.DB / Math.log(e));
}
function zr() {
  return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1;
}
function Gr(e) {
  if (e == null && (e = 10), this.signum() == 0 || e < 2 || e > 36)
    return "0";
  var t = this.chunkSize(e), r = Math.pow(e, t), i = Ne(r), s = U(), n = U(), h = "";
  for (this.divRemTo(i, s, n); s.signum() > 0; )
    h = (r + n.intValue()).toString(e).substr(1) + h, s.divRemTo(i, s, n);
  return n.intValue().toString(e) + h;
}
function Wr(e, t) {
  this.fromInt(0), t == null && (t = 10);
  for (var r = this.chunkSize(t), i = Math.pow(t, r), s = !1, n = 0, h = 0, u = 0; u < e.length; ++u) {
    var p = Ht(e, u);
    if (p < 0) {
      e.charAt(u) == "-" && this.signum() == 0 && (s = !0);
      continue;
    }
    h = t * h + p, ++n >= r && (this.dMultiply(i), this.dAddOffset(h, 0), n = 0, h = 0);
  }
  n > 0 && (this.dMultiply(Math.pow(t, n)), this.dAddOffset(h, 0)), s && R.ZERO.subTo(this, this);
}
function Xr(e, t, r) {
  if (typeof t == "number")
    if (e < 2)
      this.fromInt(1);
    else
      for (this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(R.ONE.shiftLeft(e - 1), mt, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t); )
        this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(R.ONE.shiftLeft(e - 1), this);
  else {
    var i = new Array(), s = e & 7;
    i.length = (e >> 3) + 1, t.nextBytes(i), s > 0 ? i[0] &= (1 << s) - 1 : i[0] = 0, this.fromString(i, 256);
  }
}
function Jr() {
  var e = this.t, t = new Array();
  t[0] = this.s;
  var r = this.DB - e * this.DB % 8, i, s = 0;
  if (e-- > 0)
    for (r < this.DB && (i = this[e] >> r) != (this.s & this.DM) >> r && (t[s++] = i | this.s << this.DB - r); e >= 0; )
      r < 8 ? (i = (this[e] & (1 << r) - 1) << 8 - r, i |= this[--e] >> (r += this.DB - 8)) : (i = this[e] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --e)), i & 128 && (i |= -256), s == 0 && (this.s & 128) != (i & 128) && ++s, (s > 0 || i != this.s) && (t[s++] = i);
  return t;
}
function $r(e) {
  return this.compareTo(e) == 0;
}
function Yr(e) {
  return this.compareTo(e) < 0 ? this : e;
}
function Zr(e) {
  return this.compareTo(e) > 0 ? this : e;
}
function Qr(e, t, r) {
  var i, s, n = Math.min(e.t, this.t);
  for (i = 0; i < n; ++i)
    r[i] = t(this[i], e[i]);
  if (e.t < this.t) {
    for (s = e.s & this.DM, i = n; i < this.t; ++i)
      r[i] = t(this[i], s);
    r.t = this.t;
  } else {
    for (s = this.s & this.DM, i = n; i < e.t; ++i)
      r[i] = t(s, e[i]);
    r.t = e.t;
  }
  r.s = t(this.s, e.s), r.clamp();
}
function ei(e, t) {
  return e & t;
}
function ti(e) {
  var t = U();
  return this.bitwiseTo(e, ei, t), t;
}
function mt(e, t) {
  return e | t;
}
function ri(e) {
  var t = U();
  return this.bitwiseTo(e, mt, t), t;
}
function Ot(e, t) {
  return e ^ t;
}
function ii(e) {
  var t = U();
  return this.bitwiseTo(e, Ot, t), t;
}
function jt(e, t) {
  return e & ~t;
}
function ni(e) {
  var t = U();
  return this.bitwiseTo(e, jt, t), t;
}
function si() {
  for (var e = U(), t = 0; t < this.t; ++t)
    e[t] = this.DM & ~this[t];
  return e.t = this.t, e.s = ~this.s, e;
}
function ai(e) {
  var t = U();
  return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
}
function oi(e) {
  var t = U();
  return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
}
function ui(e) {
  if (e == 0)
    return -1;
  var t = 0;
  return e & 65535 || (e >>= 16, t += 16), e & 255 || (e >>= 8, t += 8), e & 15 || (e >>= 4, t += 4), e & 3 || (e >>= 2, t += 2), e & 1 || ++t, t;
}
function hi() {
  for (var e = 0; e < this.t; ++e)
    if (this[e] != 0)
      return e * this.DB + ui(this[e]);
  return this.s < 0 ? this.t * this.DB : -1;
}
function fi(e) {
  for (var t = 0; e != 0; )
    e &= e - 1, ++t;
  return t;
}
function ci() {
  for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r)
    e += fi(this[r] ^ t);
  return e;
}
function li(e) {
  var t = Math.floor(e / this.DB);
  return t >= this.t ? this.s != 0 : (this[t] & 1 << e % this.DB) != 0;
}
function di(e, t) {
  var r = R.ONE.shiftLeft(e);
  return this.bitwiseTo(r, t, r), r;
}
function pi(e) {
  return this.changeBit(e, mt);
}
function vi(e) {
  return this.changeBit(e, jt);
}
function gi(e) {
  return this.changeBit(e, Ot);
}
function yi(e, t) {
  for (var r = 0, i = 0, s = Math.min(e.t, this.t); r < s; )
    i += this[r] + e[r], t[r++] = i & this.DM, i >>= this.DB;
  if (e.t < this.t) {
    for (i += e.s; r < this.t; )
      i += this[r], t[r++] = i & this.DM, i >>= this.DB;
    i += this.s;
  } else {
    for (i += this.s; r < e.t; )
      i += e[r], t[r++] = i & this.DM, i >>= this.DB;
    i += e.s;
  }
  t.s = i < 0 ? -1 : 0, i > 0 ? t[r++] = i : i < -1 && (t[r++] = this.DV + i), t.t = r, t.clamp();
}
function mi(e) {
  var t = U();
  return this.addTo(e, t), t;
}
function xi(e) {
  var t = U();
  return this.subTo(e, t), t;
}
function Si(e) {
  var t = U();
  return this.multiplyTo(e, t), t;
}
function Ei() {
  var e = U();
  return this.squareTo(e), e;
}
function wi(e) {
  var t = U();
  return this.divRemTo(e, t, null), t;
}
function bi(e) {
  var t = U();
  return this.divRemTo(e, null, t), t;
}
function Fi(e) {
  var t = U(), r = U();
  return this.divRemTo(e, t, r), new Array(t, r);
}
function Ai(e) {
  this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp();
}
function Di(e, t) {
  if (e != 0) {
    for (; this.t <= t; )
      this[this.t++] = 0;
    for (this[t] += e; this[t] >= this.DV; )
      this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t];
  }
}
function $e() {
}
function Vt(e) {
  return e;
}
function Pi(e, t, r) {
  e.multiplyTo(t, r);
}
function Ci(e, t) {
  e.squareTo(t);
}
$e.prototype.convert = Vt;
$e.prototype.revert = Vt;
$e.prototype.mulTo = Pi;
$e.prototype.sqrTo = Ci;
function Ii(e) {
  return this.exp(e, new $e());
}
function Ri(e, t, r) {
  var i = Math.min(this.t + e.t, t);
  for (r.s = 0, r.t = i; i > 0; )
    r[--i] = 0;
  var s;
  for (s = r.t - this.t; i < s; ++i)
    r[i + this.t] = this.am(0, e[i], r, i, 0, this.t);
  for (s = Math.min(e.t, t); i < s; ++i)
    this.am(0, e[i], r, i, 0, t - i);
  r.clamp();
}
function Ti(e, t, r) {
  --t;
  var i = r.t = this.t + e.t - t;
  for (r.s = 0; --i >= 0; )
    r[i] = 0;
  for (i = Math.max(t - this.t, 0); i < e.t; ++i)
    r[this.t + i - t] = this.am(t - i, e[i], r, 0, 0, this.t + i - t);
  r.clamp(), r.drShiftTo(1, r);
}
function Ue(e) {
  this.r2 = U(), this.q3 = U(), R.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e), this.m = e;
}
function Bi(e) {
  if (e.s < 0 || e.t > 2 * this.m.t)
    return e.mod(this.m);
  if (e.compareTo(this.m) < 0)
    return e;
  var t = U();
  return e.copyTo(t), this.reduce(t), t;
}
function Ni(e) {
  return e;
}
function Hi(e) {
  for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0; )
    e.dAddOffset(1, this.m.t + 1);
  for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
    e.subTo(this.m, e);
}
function Oi(e, t) {
  e.squareTo(t), this.reduce(t);
}
function ji(e, t, r) {
  e.multiplyTo(t, r), this.reduce(r);
}
Ue.prototype.convert = Bi;
Ue.prototype.revert = Ni;
Ue.prototype.reduce = Hi;
Ue.prototype.mulTo = ji;
Ue.prototype.sqrTo = Oi;
function Vi(e, t) {
  var r = e.bitLength(), i, s = Ne(1), n;
  if (r <= 0)
    return s;
  r < 18 ? i = 1 : r < 48 ? i = 3 : r < 144 ? i = 4 : r < 768 ? i = 5 : i = 6, r < 8 ? n = new Ve(t) : t.isEven() ? n = new Ue(t) : n = new Ke(t);
  var h = new Array(), u = 3, p = i - 1, c = (1 << i) - 1;
  if (h[1] = n.convert(this), i > 1) {
    var y = U();
    for (n.sqrTo(h[1], y); u <= c; )
      h[u] = U(), n.mulTo(y, h[u - 2], h[u]), u += 2;
  }
  var v = e.t - 1, o, l = !0, f = U(), d;
  for (r = nt(e[v]) - 1; v >= 0; ) {
    for (r >= p ? o = e[v] >> r - p & c : (o = (e[v] & (1 << r + 1) - 1) << p - r, v > 0 && (o |= e[v - 1] >> this.DB + r - p)), u = i; !(o & 1); )
      o >>= 1, --u;
    if ((r -= u) < 0 && (r += this.DB, --v), l)
      h[o].copyTo(s), l = !1;
    else {
      for (; u > 1; )
        n.sqrTo(s, f), n.sqrTo(f, s), u -= 2;
      u > 0 ? n.sqrTo(s, f) : (d = s, s = f, f = d), n.mulTo(f, h[o], s);
    }
    for (; v >= 0 && !(e[v] & 1 << r); )
      n.sqrTo(s, f), d = s, s = f, f = d, --r < 0 && (r = this.DB - 1, --v);
  }
  return n.revert(s);
}
function Ki(e) {
  var t = this.s < 0 ? this.negate() : this.clone(), r = e.s < 0 ? e.negate() : e.clone();
  if (t.compareTo(r) < 0) {
    var i = t;
    t = r, r = i;
  }
  var s = t.getLowestSetBit(), n = r.getLowestSetBit();
  if (n < 0)
    return t;
  for (s < n && (n = s), n > 0 && (t.rShiftTo(n, t), r.rShiftTo(n, r)); t.signum() > 0; )
    (s = t.getLowestSetBit()) > 0 && t.rShiftTo(s, t), (s = r.getLowestSetBit()) > 0 && r.rShiftTo(s, r), t.compareTo(r) >= 0 ? (t.subTo(r, t), t.rShiftTo(1, t)) : (r.subTo(t, r), r.rShiftTo(1, r));
  return n > 0 && r.lShiftTo(n, r), r;
}
function Li(e) {
  if (e <= 0)
    return 0;
  var t = this.DV % e, r = this.s < 0 ? e - 1 : 0;
  if (this.t > 0)
    if (t == 0)
      r = this[0] % e;
    else
      for (var i = this.t - 1; i >= 0; --i)
        r = (t * r + this[i]) % e;
  return r;
}
function _i(e) {
  var t = e.isEven();
  if (this.isEven() && t || e.signum() == 0)
    return R.ZERO;
  for (var r = e.clone(), i = this.clone(), s = Ne(1), n = Ne(0), h = Ne(0), u = Ne(1); r.signum() != 0; ) {
    for (; r.isEven(); )
      r.rShiftTo(1, r), t ? ((!s.isEven() || !n.isEven()) && (s.addTo(this, s), n.subTo(e, n)), s.rShiftTo(1, s)) : n.isEven() || n.subTo(e, n), n.rShiftTo(1, n);
    for (; i.isEven(); )
      i.rShiftTo(1, i), t ? ((!h.isEven() || !u.isEven()) && (h.addTo(this, h), u.subTo(e, u)), h.rShiftTo(1, h)) : u.isEven() || u.subTo(e, u), u.rShiftTo(1, u);
    r.compareTo(i) >= 0 ? (r.subTo(i, r), t && s.subTo(h, s), n.subTo(u, n)) : (i.subTo(r, i), t && h.subTo(s, h), u.subTo(n, u));
  }
  if (i.compareTo(R.ONE) != 0)
    return R.ZERO;
  if (u.compareTo(e) >= 0)
    return u.subtract(e);
  if (u.signum() < 0)
    u.addTo(e, u);
  else
    return u;
  return u.signum() < 0 ? u.add(e) : u;
}
var pe = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], qi = (1 << 26) / pe[pe.length - 1];
function ki(e) {
  var t, r = this.abs();
  if (r.t == 1 && r[0] <= pe[pe.length - 1]) {
    for (t = 0; t < pe.length; ++t)
      if (r[0] == pe[t])
        return !0;
    return !1;
  }
  if (r.isEven())
    return !1;
  for (t = 1; t < pe.length; ) {
    for (var i = pe[t], s = t + 1; s < pe.length && i < qi; )
      i *= pe[s++];
    for (i = r.modInt(i); t < s; )
      if (i % pe[t++] == 0)
        return !1;
  }
  return r.millerRabin(e);
}
function Mi(e) {
  var t = this.subtract(R.ONE), r = t.getLowestSetBit();
  if (r <= 0)
    return !1;
  var i = t.shiftRight(r);
  e = e + 1 >> 1, e > pe.length && (e = pe.length);
  for (var s = U(), n = 0; n < e; ++n) {
    s.fromInt(pe[Math.floor(Math.random() * pe.length)]);
    var h = s.modPow(i, this);
    if (h.compareTo(R.ONE) != 0 && h.compareTo(t) != 0) {
      for (var u = 1; u++ < r && h.compareTo(t) != 0; )
        if (h = h.modPowInt(2, this), h.compareTo(R.ONE) == 0)
          return !1;
      if (h.compareTo(t) != 0)
        return !1;
    }
  }
  return !0;
}
R.prototype.chunkSize = Ur;
R.prototype.toRadix = Gr;
R.prototype.fromRadix = Wr;
R.prototype.fromNumber = Xr;
R.prototype.bitwiseTo = Qr;
R.prototype.changeBit = di;
R.prototype.addTo = yi;
R.prototype.dMultiply = Ai;
R.prototype.dAddOffset = Di;
R.prototype.multiplyLowerTo = Ri;
R.prototype.multiplyUpperTo = Ti;
R.prototype.modInt = Li;
R.prototype.millerRabin = Mi;
R.prototype.clone = _r;
R.prototype.intValue = qr;
R.prototype.byteValue = kr;
R.prototype.shortValue = Mr;
R.prototype.signum = zr;
R.prototype.toByteArray = Jr;
R.prototype.equals = $r;
R.prototype.min = Yr;
R.prototype.max = Zr;
R.prototype.and = ti;
R.prototype.or = ri;
R.prototype.xor = ii;
R.prototype.andNot = ni;
R.prototype.not = si;
R.prototype.shiftLeft = ai;
R.prototype.shiftRight = oi;
R.prototype.getLowestSetBit = hi;
R.prototype.bitCount = ci;
R.prototype.testBit = li;
R.prototype.setBit = pi;
R.prototype.clearBit = vi;
R.prototype.flipBit = gi;
R.prototype.add = mi;
R.prototype.subtract = xi;
R.prototype.multiply = Si;
R.prototype.divide = wi;
R.prototype.remainder = bi;
R.prototype.divideAndRemainder = Fi;
R.prototype.modPow = Vi;
R.prototype.modInverse = _i;
R.prototype.pow = Ii;
R.prototype.gcd = Ki;
R.prototype.isProbablePrime = ki;
R.prototype.square = Ei;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function xt() {
  this.i = 0, this.j = 0, this.S = new Array();
}
function Ui(e) {
  var t, r, i;
  for (t = 0; t < 256; ++t)
    this.S[t] = t;
  for (r = 0, t = 0; t < 256; ++t)
    r = r + this.S[t] + e[t % e.length] & 255, i = this.S[t], this.S[t] = this.S[r], this.S[r] = i;
  this.i = 0, this.j = 0;
}
function zi() {
  var e;
  return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255];
}
xt.prototype.init = Ui;
xt.prototype.next = zi;
function Gi() {
  return new xt();
}
var dt = 256;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
var Qe, xe, he;
function Wi(e) {
  xe[he++] ^= e & 255, xe[he++] ^= e >> 8 & 255, xe[he++] ^= e >> 16 & 255, xe[he++] ^= e >> 24 & 255, he >= dt && (he -= dt);
}
function St() {
  Wi((/* @__PURE__ */ new Date()).getTime());
}
if (xe == null) {
  xe = new Array(), he = 0;
  var be;
  if (Le !== void 0 && (Le.crypto !== void 0 || Le.msCrypto !== void 0)) {
    var Pt = Le.crypto || Le.msCrypto;
    if (Pt.getRandomValues) {
      var Ct = new Uint8Array(32);
      for (Pt.getRandomValues(Ct), be = 0; be < 32; ++be)
        xe[he++] = Ct[be];
    } else if (Xe.appName == "Netscape" && Xe.appVersion < "5") {
      var It = Le.crypto.random(32);
      for (be = 0; be < It.length; ++be)
        xe[he++] = It.charCodeAt(be) & 255;
    }
  }
  for (; he < dt; )
    be = Math.floor(65536 * Math.random()), xe[he++] = be >>> 8, xe[he++] = be & 255;
  he = 0, St();
}
function Xi() {
  if (Qe == null) {
    for (St(), Qe = Gi(), Qe.init(xe), he = 0; he < xe.length; ++he)
      xe[he] = 0;
    he = 0;
  }
  return Qe.next();
}
function Ji(e) {
  var t;
  for (t = 0; t < e.length; ++t)
    e[t] = Xi();
}
function ze() {
}
ze.prototype.nextBytes = Ji;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function ge(e, t) {
  return new R(e, t);
}
function q() {
  this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
}
function $i(e, t) {
  if (this.isPublic = !0, this.isPrivate = !1, typeof e != "string")
    this.n = e, this.e = t;
  else if (e != null && t != null && e.length > 0 && t.length > 0)
    this.n = ge(e, 16), this.e = parseInt(t, 16);
  else
    throw "Invalid RSA public key";
}
function Yi(e) {
  return e.modPowInt(this.e, this.n);
}
q.prototype.doPublic = Yi;
q.prototype.setPublic = $i;
q.prototype.type = "RSA";
function Zi(e, t, r) {
  if (this.isPrivate = !0, typeof e != "string")
    this.n = e, this.e = t, this.d = r;
  else if (e != null && t != null && e.length > 0 && t.length > 0)
    this.n = ge(e, 16), this.e = parseInt(t, 16), this.d = ge(r, 16);
  else
    throw "Invalid RSA private key";
}
function Qi(e, t, r, i, s, n, h, u) {
  if (this.isPrivate = !0, this.isPublic = !1, e == null)
    throw "RSASetPrivateEx N == null";
  if (t == null)
    throw "RSASetPrivateEx E == null";
  if (e.length == 0)
    throw "RSASetPrivateEx N.length == 0";
  if (t.length == 0)
    throw "RSASetPrivateEx E.length == 0";
  if (e != null && t != null && e.length > 0 && t.length > 0)
    this.n = ge(e, 16), this.e = parseInt(t, 16), this.d = ge(r, 16), this.p = ge(i, 16), this.q = ge(s, 16), this.dmp1 = ge(n, 16), this.dmq1 = ge(h, 16), this.coeff = ge(u, 16);
  else
    throw "Invalid RSA private key in RSASetPrivateEx";
}
function en(e, t) {
  var r = new ze(), i = e >> 1;
  this.e = parseInt(t, 16);
  for (var s = new R(t, 16), n = e / 2 - 100, h = R.ONE.shiftLeft(n); ; ) {
    for (; this.p = new R(e - i, 1, r), !(this.p.subtract(R.ONE).gcd(s).compareTo(R.ONE) == 0 && this.p.isProbablePrime(10)); )
      ;
    for (; this.q = new R(i, 1, r), !(this.q.subtract(R.ONE).gcd(s).compareTo(R.ONE) == 0 && this.q.isProbablePrime(10)); )
      ;
    if (this.p.compareTo(this.q) <= 0) {
      var u = this.p;
      this.p = this.q, this.q = u;
    }
    var p = this.q.subtract(this.p).abs();
    if (!(p.bitLength() < n || p.compareTo(h) <= 0)) {
      var c = this.p.subtract(R.ONE), y = this.q.subtract(R.ONE), v = c.multiply(y);
      if (v.gcd(s).compareTo(R.ONE) == 0 && (this.n = this.p.multiply(this.q), this.n.bitLength() == e)) {
        this.d = s.modInverse(v), this.dmp1 = this.d.mod(c), this.dmq1 = this.d.mod(y), this.coeff = this.q.modInverse(this.p);
        break;
      }
    }
  }
  this.isPrivate = !0;
}
function tn(e) {
  if (this.p == null || this.q == null)
    return e.modPow(this.d, this.n);
  for (var t = e.mod(this.p).modPow(this.dmp1, this.p), r = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(r) < 0; )
    t = t.add(this.p);
  return t.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r);
}
q.prototype.doPrivate = tn;
q.prototype.setPrivate = Zi;
q.prototype.setPrivateEx = Qi;
q.prototype.generate = en;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function ae(e, t) {
  this.x = t, this.q = e;
}
function rn(e) {
  return e == this ? !0 : this.q.equals(e.q) && this.x.equals(e.x);
}
function nn() {
  return this.x;
}
function sn() {
  return new ae(this.q, this.x.negate().mod(this.q));
}
function an(e) {
  return new ae(this.q, this.x.add(e.toBigInteger()).mod(this.q));
}
function on(e) {
  return new ae(this.q, this.x.subtract(e.toBigInteger()).mod(this.q));
}
function un(e) {
  return new ae(this.q, this.x.multiply(e.toBigInteger()).mod(this.q));
}
function hn() {
  return new ae(this.q, this.x.square().mod(this.q));
}
function fn(e) {
  return new ae(this.q, this.x.multiply(e.toBigInteger().modInverse(this.q)).mod(this.q));
}
ae.prototype.equals = rn;
ae.prototype.toBigInteger = nn;
ae.prototype.negate = sn;
ae.prototype.add = an;
ae.prototype.subtract = on;
ae.prototype.multiply = un;
ae.prototype.square = hn;
ae.prototype.divide = fn;
ae.prototype.sqrt = function() {
  return new ae(this.q, this.x.sqrt().mod(this.q));
};
function z(e, t, r, i) {
  this.curve = e, this.x = t, this.y = r, i == null ? this.z = R.ONE : this.z = i, this.zinv = null;
}
function cn() {
  return this.zinv == null && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}
function ln() {
  return this.zinv == null && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}
function dn(e) {
  if (e == this)
    return !0;
  if (this.isInfinity())
    return e.isInfinity();
  if (e.isInfinity())
    return this.isInfinity();
  var t, r;
  return t = e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q), t.equals(R.ZERO) ? (r = e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q), r.equals(R.ZERO)) : !1;
}
function pn() {
  return this.x == null && this.y == null ? !0 : this.z.equals(R.ZERO) && !this.y.toBigInteger().equals(R.ZERO);
}
function vn() {
  return new z(this.curve, this.x, this.y.negate(), this.z);
}
function gn(e) {
  if (this.isInfinity())
    return e;
  if (e.isInfinity())
    return this;
  var t = e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q), r = e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q);
  if (R.ZERO.equals(r))
    return R.ZERO.equals(t) ? this.twice() : this.curve.getInfinity();
  var i = new R("3"), s = this.x.toBigInteger(), n = this.y.toBigInteger();
  e.x.toBigInteger(), e.y.toBigInteger();
  var h = r.square(), u = h.multiply(r), p = s.multiply(h), c = t.square().multiply(this.z), y = c.subtract(p.shiftLeft(1)).multiply(e.z).subtract(u).multiply(r).mod(this.curve.q), v = p.multiply(i).multiply(t).subtract(n.multiply(u)).subtract(c.multiply(t)).multiply(e.z).add(t.multiply(u)).mod(this.curve.q), o = u.multiply(this.z).multiply(e.z).mod(this.curve.q);
  return new z(this.curve, this.curve.fromBigInteger(y), this.curve.fromBigInteger(v), o);
}
function yn() {
  if (this.isInfinity())
    return this;
  if (this.y.toBigInteger().signum() == 0)
    return this.curve.getInfinity();
  var e = new R("3"), t = this.x.toBigInteger(), r = this.y.toBigInteger(), i = r.multiply(this.z), s = i.multiply(r).mod(this.curve.q), n = this.curve.a.toBigInteger(), h = t.square().multiply(e);
  R.ZERO.equals(n) || (h = h.add(this.z.square().multiply(n))), h = h.mod(this.curve.q);
  var u = h.square().subtract(t.shiftLeft(3).multiply(s)).shiftLeft(1).multiply(i).mod(this.curve.q), p = h.multiply(e).multiply(t).subtract(s.shiftLeft(1)).shiftLeft(2).multiply(s).subtract(h.square().multiply(h)).mod(this.curve.q), c = i.square().multiply(i).shiftLeft(3).mod(this.curve.q);
  return new z(this.curve, this.curve.fromBigInteger(u), this.curve.fromBigInteger(p), c);
}
function mn(e) {
  if (this.isInfinity())
    return this;
  if (e.signum() == 0)
    return this.curve.getInfinity();
  var t = e, r = t.multiply(new R("3")), i = this.negate(), s = this, n = this.curve.q.subtract(e), h = n.multiply(new R("3")), u = new z(this.curve, this.x, this.y), p = u.negate(), c;
  for (c = r.bitLength() - 2; c > 0; --c) {
    s = s.twice();
    var y = r.testBit(c), v = t.testBit(c);
    y != v && (s = s.add(y ? this : i));
  }
  for (c = h.bitLength() - 2; c > 0; --c) {
    u = u.twice();
    var o = h.testBit(c), l = n.testBit(c);
    o != l && (u = u.add(o ? u : p));
  }
  return s;
}
function xn(e, t, r) {
  var i;
  e.bitLength() > r.bitLength() ? i = e.bitLength() - 1 : i = r.bitLength() - 1;
  for (var s = this.curve.getInfinity(), n = this.add(t); i >= 0; )
    s = s.twice(), e.testBit(i) ? r.testBit(i) ? s = s.add(n) : s = s.add(this) : r.testBit(i) && (s = s.add(t)), --i;
  return s;
}
z.prototype.getX = cn;
z.prototype.getY = ln;
z.prototype.equals = dn;
z.prototype.isInfinity = pn;
z.prototype.negate = vn;
z.prototype.add = gn;
z.prototype.twice = yn;
z.prototype.multiply = mn;
z.prototype.multiplyTwo = xn;
function Re(e, t, r) {
  this.q = e, this.a = this.fromBigInteger(t), this.b = this.fromBigInteger(r), this.infinity = new z(this, null, null);
}
function Sn() {
  return this.q;
}
function En() {
  return this.a;
}
function wn() {
  return this.b;
}
function bn(e) {
  return e == this ? !0 : this.q.equals(e.q) && this.a.equals(e.a) && this.b.equals(e.b);
}
function Fn() {
  return this.infinity;
}
function An(e) {
  return new ae(this.q, e);
}
function Dn(e) {
  switch (parseInt(e.substr(0, 2), 16)) {
    case 0:
      return this.infinity;
    case 2:
    case 3:
      var t = e.substr(0, 2);
      e.substr(2);
      var r = this.fromBigInteger(new R(p, 16)), i = this.getA(), s = this.getB(), n = r.square().add(i).multiply(r).add(s), h = n.sqrt();
      return t == "03" && (h = h.negate()), new z(this, r, h);
    case 4:
    case 6:
    case 7:
      var u = (e.length - 2) / 2, p = e.substr(2, u), c = e.substr(u + 2, u);
      return new z(this, this.fromBigInteger(new R(p, 16)), this.fromBigInteger(new R(c, 16)));
    default:
      return null;
  }
}
Re.prototype.getQ = Sn;
Re.prototype.getA = En;
Re.prototype.getB = wn;
Re.prototype.equals = bn;
Re.prototype.getInfinity = Fn;
Re.prototype.fromBigInteger = An;
Re.prototype.decodePointHex = Dn;
/*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
 */
ae.prototype.getByteLength = function() {
  return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
};
z.prototype.getEncoded = function(e) {
  var t = function(n, h) {
    var u = n.toByteArrayUnsigned();
    if (h < u.length)
      u = u.slice(u.length - h);
    else
      for (; h > u.length; )
        u.unshift(0);
    return u;
  }, r = this.getX().toBigInteger(), i = this.getY().toBigInteger(), s = t(r, 32);
  return e ? i.isEven() ? s.unshift(2) : s.unshift(3) : (s.unshift(4), s = s.concat(t(i, 32))), s;
};
z.decodeFrom = function(e, t) {
  t[0];
  var r = t.length - 1, i = t.slice(1, 1 + r / 2), s = t.slice(1 + r / 2, 1 + r);
  i.unshift(0), s.unshift(0);
  var n = new R(i), h = new R(s);
  return new z(e, e.fromBigInteger(n), e.fromBigInteger(h));
};
z.decodeFromHex = function(e, t) {
  t.substr(0, 2);
  var r = t.length - 2, i = t.substr(2, r / 2), s = t.substr(2 + r / 2, r / 2), n = new R(i, 16), h = new R(s, 16);
  return new z(e, e.fromBigInteger(n), e.fromBigInteger(h));
};
z.prototype.add2D = function(e) {
  if (this.isInfinity())
    return e;
  if (e.isInfinity())
    return this;
  if (this.x.equals(e.x))
    return this.y.equals(e.y) ? this.twice() : this.curve.getInfinity();
  var t = e.x.subtract(this.x), r = e.y.subtract(this.y), i = r.divide(t), s = i.square().subtract(this.x).subtract(e.x), n = i.multiply(this.x.subtract(s)).subtract(this.y);
  return new z(this.curve, s, n);
};
z.prototype.twice2D = function() {
  if (this.isInfinity())
    return this;
  if (this.y.toBigInteger().signum() == 0)
    return this.curve.getInfinity();
  var e = this.curve.fromBigInteger(R.valueOf(2)), t = this.curve.fromBigInteger(R.valueOf(3)), r = this.x.square().multiply(t).add(this.curve.a).divide(this.y.multiply(e)), i = r.square().subtract(this.x.multiply(e)), s = r.multiply(this.x.subtract(i)).subtract(this.y);
  return new z(this.curve, i, s);
};
z.prototype.multiply2D = function(e) {
  if (this.isInfinity())
    return this;
  if (e.signum() == 0)
    return this.curve.getInfinity();
  var t = e, r = t.multiply(new R("3")), i = this.negate(), s = this, n;
  for (n = r.bitLength() - 2; n > 0; --n) {
    s = s.twice();
    var h = r.testBit(n), u = t.testBit(n);
    h != u && (s = s.add2D(h ? this : i));
  }
  return s;
};
z.prototype.isOnCurve = function() {
  var e = this.getX().toBigInteger(), t = this.getY().toBigInteger(), r = this.curve.getA().toBigInteger(), i = this.curve.getB().toBigInteger(), s = this.curve.getQ(), n = t.multiply(t).mod(s), h = e.multiply(e).multiply(e).add(r.multiply(e)).add(i).mod(s);
  return n.equals(h);
};
z.prototype.toString = function() {
  return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
};
z.prototype.validate = function() {
  var e = this.curve.getQ();
  if (this.isInfinity())
    throw new Error("Point is at infinity.");
  var t = this.getX().toBigInteger(), r = this.getY().toBigInteger();
  if (t.compareTo(R.ONE) < 0 || t.compareTo(e.subtract(R.ONE)) > 0)
    throw new Error("x coordinate out of bounds");
  if (r.compareTo(R.ONE) < 0 || r.compareTo(e.subtract(R.ONE)) > 0)
    throw new Error("y coordinate out of bounds");
  if (!this.isOnCurve())
    throw new Error("Point is not on the curve.");
  if (this.multiply(e).isInfinity())
    throw new Error("Point is not a scalar multiple of G.");
  return !0;
};
/*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
 */
var Kt = function() {
  var e = "(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)", t = '(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))', r = '(?:"' + t + '*")', i = new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|" + e + "|" + r + ")", "g"), s = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), n = { '"': '"', "/": "/", "\\": "\\", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
  function h(y, v, o) {
    return v ? n[v] : String.fromCharCode(parseInt(o, 16));
  }
  var u = new String(""), p = "\\", c = Object.hasOwnProperty;
  return function(y, v) {
    var o = y.match(i), l, f = o[0], d = !1;
    f === "{" ? l = {} : f === "[" ? l = [] : (l = [], d = !0);
    for (var g, m = [l], F = 1 - d, D = o.length; F < D; ++F) {
      f = o[F];
      var A;
      switch (f.charCodeAt(0)) {
        default:
          A = m[0], A[g || A.length] = +f, g = void 0;
          break;
        case 34:
          if (f = f.substring(1, f.length - 1), f.indexOf(p) !== -1 && (f = f.replace(s, h)), A = m[0], !g)
            if (A instanceof Array)
              g = A.length;
            else {
              g = f || u;
              break;
            }
          A[g] = f, g = void 0;
          break;
        case 91:
          A = m[0], m.unshift(A[g || A.length] = []), g = void 0;
          break;
        case 93:
          m.shift();
          break;
        case 102:
          A = m[0], A[g || A.length] = !1, g = void 0;
          break;
        case 110:
          A = m[0], A[g || A.length] = null, g = void 0;
          break;
        case 116:
          A = m[0], A[g || A.length] = !0, g = void 0;
          break;
        case 123:
          A = m[0], m.unshift(A[g || A.length] = {}), g = void 0;
          break;
        case 125:
          m.shift();
          break;
      }
    }
    if (d) {
      if (m.length !== 1)
        throw new Error();
      l = l[0];
    } else if (m.length)
      throw new Error();
    if (v) {
      var C = function(x, E) {
        var w = x[E];
        if (w && typeof w == "object") {
          var S = null;
          for (var b in w)
            if (c.call(w, b) && w !== x) {
              var P = C(w, b);
              P !== void 0 ? w[b] = P : (S || (S = []), S.push(b));
            }
          if (S)
            for (var T = S.length; --T >= 0; )
              delete w[S[T]];
        }
        return v.call(x, E, w);
      };
      l = C({ "": l }, "");
    }
    return l;
  };
}();
(typeof a > "u" || !a) && (a = {});
(typeof a.asn1 > "u" || !a.asn1) && (a.asn1 = {});
a.asn1.ASN1Util = new function() {
  this.integerToByteHex = function(e) {
    var t = e.toString(16);
    return t.length % 2 == 1 && (t = "0" + t), t;
  }, this.bigIntToMinTwosComplementsHex = function(e) {
    return Ze(e);
  }, this.getPEMStringFromHex = function(e, t) {
    return le(e, t);
  }, this.newObject = function(e) {
    var t = a, r = t.asn1, i = r.ASN1Object, s = r.DERBoolean, n = r.DERInteger, h = r.DERBitString, u = r.DEROctetString, p = r.DERNull, c = r.DERObjectIdentifier, y = r.DEREnumerated, v = r.DERUTF8String, o = r.DERNumericString, l = r.DERPrintableString, f = r.DERTeletexString, d = r.DERIA5String, g = r.DERUTCTime, m = r.DERGeneralizedTime, F = r.DERVisibleString, D = r.DERBMPString, A = r.DERSequence, C = r.DERSet, x = r.DERTaggedObject, E = r.ASN1Util.newObject;
    if (e instanceof r.ASN1Object)
      return e;
    var w = Object.keys(e);
    if (w.length != 1)
      throw new Error("key of param shall be only one.");
    var S = w[0];
    if (":asn1:bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:".indexOf(":" + S + ":") == -1)
      throw new Error("undefined key: " + S);
    if (S == "bool")
      return new s(e[S]);
    if (S == "int")
      return new n(e[S]);
    if (S == "bitstr")
      return new h(e[S]);
    if (S == "octstr")
      return new u(e[S]);
    if (S == "null")
      return new p(e[S]);
    if (S == "oid")
      return new c(e[S]);
    if (S == "enum")
      return new y(e[S]);
    if (S == "utf8str")
      return new v(e[S]);
    if (S == "numstr")
      return new o(e[S]);
    if (S == "prnstr")
      return new l(e[S]);
    if (S == "telstr")
      return new f(e[S]);
    if (S == "ia5str")
      return new d(e[S]);
    if (S == "utctime")
      return new g(e[S]);
    if (S == "gentime")
      return new m(e[S]);
    if (S == "visstr")
      return new F(e[S]);
    if (S == "bmpstr")
      return new D(e[S]);
    if (S == "asn1")
      return new i(e[S]);
    if (S == "seq") {
      for (var b = e[S], P = [], T = 0; T < b.length; T++) {
        var H = E(b[T]);
        P.push(H);
      }
      return new A({ array: P });
    }
    if (S == "set") {
      for (var b = e[S], P = [], T = 0; T < b.length; T++) {
        var H = E(b[T]);
        P.push(H);
      }
      return new C({ array: P });
    }
    if (S == "tag") {
      var I = e[S];
      if (Object.prototype.toString.call(I) === "[object Array]" && I.length == 3) {
        var B = E(I[2]);
        return new x({ tag: I[0], explicit: I[1], obj: B });
      } else
        return new x(I);
    }
  }, this.jsonToASN1HEX = function(e) {
    var t = this.newObject(e);
    return t.tohex();
  };
}();
a.asn1.ASN1Util.oidHexToInt = function(e) {
  for (var s = "", t = parseInt(e.substr(0, 2), 16), r = Math.floor(t / 40), i = t % 40, s = r + "." + i, n = "", h = 2; h < e.length; h += 2) {
    var u = parseInt(e.substr(h, 2), 16), p = ("00000000" + u.toString(2)).slice(-8);
    if (n = n + p.substr(1, 7), p.substr(0, 1) == "0") {
      var c = new R(n, 2);
      s = s + "." + c.toString(10), n = "";
    }
  }
  return s;
};
a.asn1.ASN1Util.oidIntToHex = function(e) {
  var t = function(u) {
    var p = u.toString(16);
    return p.length == 1 && (p = "0" + p), p;
  }, r = function(u) {
    var p = "", c = new R(u, 10), y = c.toString(2), v = 7 - y.length % 7;
    v == 7 && (v = 0);
    for (var o = "", l = 0; l < v; l++)
      o += "0";
    y = o + y;
    for (var l = 0; l < y.length - 1; l += 7) {
      var f = y.substr(l, 7);
      l != y.length - 7 && (f = "1" + f), p += t(parseInt(f, 2));
    }
    return p;
  };
  if (!e.match(/^[0-9.]+$/))
    throw "malformed oid string: " + e;
  var i = "", s = e.split("."), n = parseInt(s[0]) * 40 + parseInt(s[1]);
  i += t(n), s.splice(0, 2);
  for (var h = 0; h < s.length; h++)
    i += r(s[h]);
  return i;
};
a.asn1.ASN1Object = function(e) {
  var t = "";
  this.params = null, this.getLengthHexFromValue = function() {
    if (typeof this.hV > "u" || this.hV == null)
      throw new Error("this.hV is null or undefined");
    if (this.hV.length % 2 == 1)
      throw new Error("value hex must be even length: n=" + t.length + ",v=" + this.hV);
    var r = this.hV.length / 2, i = r.toString(16);
    if (i.length % 2 == 1 && (i = "0" + i), r < 128)
      return i;
    var s = i.length / 2;
    if (s > 15)
      throw new Error("ASN.1 length too long to represent by 8x: n = " + r.toString(16));
    var n = 128 + s;
    return n.toString(16) + i;
  }, this.tohex = function() {
    return (this.hTLV == null || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.getValueHex = function() {
    return this.tohex(), this.hV;
  }, this.getFreshValueHex = function() {
    return "";
  }, this.setByParam = function(r) {
    this.params = r;
  }, e != null && e.tlv != null && (this.hTLV = e.tlv, this.isModified = !1);
};
a.asn1.DERAbstractString = function(e) {
  a.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
    return this.s;
  }, this.setString = function(t) {
    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = at(this.s).toLowerCase();
  }, this.setStringHex = function(t) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof e < "u" && (typeof e == "string" ? this.setString(e) : typeof e.str < "u" ? this.setString(e.str) : typeof e.hex < "u" && this.setStringHex(e.hex));
};
N(a.asn1.DERAbstractString, a.asn1.ASN1Object);
a.asn1.DERAbstractTime = function(e) {
  a.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
    var r = t.getTime() + t.getTimezoneOffset() * 6e4, i = new Date(r);
    return i;
  }, this.formatDate = function(t, r, i) {
    var s = this.zeroPadding, n = this.localDateToUTC(t), h = String(n.getFullYear());
    r == "utc" && (h = h.substr(2, 2));
    var u = s(String(n.getMonth() + 1), 2), p = s(String(n.getDate()), 2), c = s(String(n.getHours()), 2), y = s(String(n.getMinutes()), 2), v = s(String(n.getSeconds()), 2), o = h + u + p + c + y + v;
    if (i === !0) {
      var l = n.getMilliseconds();
      if (l != 0) {
        var f = s(String(l), 3);
        f = f.replace(/[0]+$/, ""), o = o + "." + f;
      }
    }
    return o + "Z";
  }, this.zeroPadding = function(t, r) {
    return t.length >= r ? t : new Array(r - t.length + 1).join("0") + t;
  }, this.setByParam = function(t) {
    this.hV = null, this.hTLV = null, this.params = t;
  }, this.getString = function() {
  }, this.setString = function(t) {
    this.hTLV = null, this.isModified = !0, this.params == null && (this.params = {}), this.params.str = t;
  }, this.setByDate = function(t) {
    this.hTLV = null, this.isModified = !0, this.params == null && (this.params = {}), this.params.date = t;
  }, this.setByDateValue = function(t, r, i, s, n, h) {
    var u = new Date(Date.UTC(t, r - 1, i, s, n, h, 0));
    this.setByDate(u);
  }, this.getFreshValueHex = function() {
    return this.hV;
  };
};
N(a.asn1.DERAbstractTime, a.asn1.ASN1Object);
a.asn1.DERAbstractStructured = function(e) {
  a.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
    this.hTLV = null, this.isModified = !0, this.asn1Array = t;
  }, this.appendASN1Object = function(t) {
    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
  }, this.asn1Array = new Array(), typeof e < "u" && typeof e.array < "u" && (this.asn1Array = e.array);
};
N(a.asn1.DERAbstractStructured, a.asn1.ASN1Object);
a.asn1.DERBoolean = function(e) {
  a.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", e == !1 ? this.hTLV = "010100" : this.hTLV = "0101ff";
};
N(a.asn1.DERBoolean, a.asn1.ASN1Object);
a.asn1.DERInteger = function(e) {
  a.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.params = null;
  var t = Ze;
  this.setByBigInteger = function(r) {
    this.isModified = !0, this.params = { bigint: r };
  }, this.setByInteger = function(r) {
    this.isModified = !0, this.params = r;
  }, this.setValueHex = function(r) {
    this.isModified = !0, this.params = { hex: r };
  }, this.getFreshValueHex = function() {
    var r = this.params, i = null;
    if (r == null)
      throw new Error("value not set");
    if (typeof r == "object" && r.hex != null)
      return this.hV = r.hex, this.hV;
    if (typeof r == "number")
      i = new R(String(r), 10);
    else if (r.int != null)
      i = new R(String(r.int), 10);
    else if (r.bigint != null)
      i = r.bigint;
    else
      throw new Error("wrong parameter");
    return this.hV = t(i), this.hV;
  }, e != null && (this.params = e);
};
N(a.asn1.DERInteger, a.asn1.ASN1Object);
a.asn1.DERBitString = function(e) {
  if (e !== void 0 && typeof e.obj < "u") {
    var t = a.asn1.ASN1Util.newObject(e.obj);
    e.hex = "00" + t.tohex();
  }
  a.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(r) {
    this.hTLV = null, this.isModified = !0, this.hV = r;
  }, this.setUnusedBitsAndHexValue = function(r, i) {
    if (r < 0 || 7 < r)
      throw "unused bits shall be from 0 to 7: u = " + r;
    var s = "0" + r;
    this.hTLV = null, this.isModified = !0, this.hV = s + i;
  }, this.setByBinaryString = function(r) {
    r = r.replace(/0+$/, "");
    var i = 8 - r.length % 8;
    i == 8 && (i = 0), r += "0000000".substr(0, i);
    for (var s = "", n = 0; n < r.length - 1; n += 8) {
      var h = r.substr(n, 8), u = parseInt(h, 2).toString(16);
      u.length == 1 && (u = "0" + u), s += u;
    }
    this.hTLV = null, this.isModified = !0, this.hV = "0" + i + s;
  }, this.setByBooleanArray = function(r) {
    for (var i = "", s = 0; s < r.length; s++)
      r[s] == !0 ? i += "1" : i += "0";
    this.setByBinaryString(i);
  }, this.newFalseArray = function(r) {
    for (var i = new Array(r), s = 0; s < r; s++)
      i[s] = !1;
    return i;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof e < "u" && (typeof e == "string" && e.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(e) : typeof e.hex < "u" ? this.setHexValueIncludingUnusedBits(e.hex) : typeof e.bin < "u" ? this.setByBinaryString(e.bin) : typeof e.array < "u" && this.setByBooleanArray(e.array));
};
N(a.asn1.DERBitString, a.asn1.ASN1Object);
a.asn1.DEROctetString = function(e) {
  if (e !== void 0 && typeof e.obj < "u") {
    var t = a.asn1.ASN1Util.newObject(e.obj);
    e.hex = t.tohex();
  }
  a.asn1.DEROctetString.superclass.constructor.call(this, e), this.hT = "04";
};
N(a.asn1.DEROctetString, a.asn1.DERAbstractString);
a.asn1.DERNull = function() {
  a.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
};
N(a.asn1.DERNull, a.asn1.ASN1Object);
a.asn1.DERObjectIdentifier = function(e) {
  a.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
  }, this.setValueOidString = function(t) {
    var r = zt(t);
    if (r == null)
      throw new Error("malformed oid string: " + t);
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r;
  }, this.setValueName = function(t) {
    var r = a.asn1.x509.OID.name2oid(t);
    if (r !== "")
      this.setValueOidString(r);
    else
      throw new Error("DERObjectIdentifier oidName undefined: " + t);
  }, this.setValueNameOrOid = function(t) {
    t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t);
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, this.setByParam = function(t) {
    typeof t == "string" ? this.setValueNameOrOid(t) : t.oid !== void 0 ? this.setValueNameOrOid(t.oid) : t.name !== void 0 ? this.setValueNameOrOid(t.name) : t.hex !== void 0 && this.setValueHex(t.hex);
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.DERObjectIdentifier, a.asn1.ASN1Object);
a.asn1.DEREnumerated = function(e) {
  a.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
    this.hTLV = null, this.isModified = !0, this.hV = Ze(t);
  }, this.setByInteger = function(t) {
    var r = new R(String(t), 10);
    this.setByBigInteger(r);
  }, this.setValueHex = function(t) {
    this.hV = t;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof e < "u" && (typeof e.int < "u" ? this.setByInteger(e.int) : typeof e == "number" ? this.setByInteger(e) : typeof e.hex < "u" && this.setValueHex(e.hex));
};
N(a.asn1.DEREnumerated, a.asn1.ASN1Object);
a.asn1.DERUTF8String = function(e) {
  a.asn1.DERUTF8String.superclass.constructor.call(this, e), this.hT = "0c";
};
N(a.asn1.DERUTF8String, a.asn1.DERAbstractString);
a.asn1.DERNumericString = function(e) {
  a.asn1.DERNumericString.superclass.constructor.call(this, e), this.hT = "12";
};
N(a.asn1.DERNumericString, a.asn1.DERAbstractString);
a.asn1.DERPrintableString = function(e) {
  a.asn1.DERPrintableString.superclass.constructor.call(this, e), this.hT = "13";
};
N(a.asn1.DERPrintableString, a.asn1.DERAbstractString);
a.asn1.DERTeletexString = function(e) {
  a.asn1.DERTeletexString.superclass.constructor.call(this, e), this.hT = "14";
};
N(a.asn1.DERTeletexString, a.asn1.DERAbstractString);
a.asn1.DERIA5String = function(e) {
  a.asn1.DERIA5String.superclass.constructor.call(this, e), this.hT = "16";
};
N(a.asn1.DERIA5String, a.asn1.DERAbstractString);
a.asn1.DERVisibleString = function(e) {
  a.asn1.DERIA5String.superclass.constructor.call(this, e), this.hT = "1a";
};
N(a.asn1.DERVisibleString, a.asn1.DERAbstractString);
a.asn1.DERBMPString = function(e) {
  a.asn1.DERBMPString.superclass.constructor.call(this, e), this.hT = "1e";
};
N(a.asn1.DERBMPString, a.asn1.DERAbstractString);
a.asn1.DERUTCTime = function(e) {
  a.asn1.DERUTCTime.superclass.constructor.call(this, e), this.hT = "17", this.params = void 0, this.getFreshValueHex = function() {
    var t = this.params;
    if (this.params == null && (t = { date: /* @__PURE__ */ new Date() }), typeof t == "string")
      if (t.match(/^[0-9]{12}Z$/) || t.match(/^[0-9]{12}\.[0-9]+Z$/))
        this.hV = ye(t);
      else
        throw new Error("malformed string for UTCTime: " + t);
    else if (t.str != null)
      this.hV = ye(t.str);
    else if (t.date == null && t.millis == !0) {
      var r = /* @__PURE__ */ new Date();
      this.hV = ye(this.formatDate(r, "utc", !0));
    } else if (t.date != null && t.date instanceof Date) {
      var i = t.millis === !0;
      this.hV = ye(this.formatDate(t.date, "utc", i));
    } else
      t instanceof Date && (this.hV = ye(this.formatDate(t, "utc")));
    if (this.hV == null)
      throw new Error("parameter not specified properly for UTCTime");
    return this.hV;
  }, e != null && this.setByParam(e);
};
N(a.asn1.DERUTCTime, a.asn1.DERAbstractTime);
a.asn1.DERGeneralizedTime = function(e) {
  a.asn1.DERGeneralizedTime.superclass.constructor.call(this, e), this.hT = "18", this.params = e, this.getFreshValueHex = function() {
    var t = this.params;
    if (this.params == null && (t = { date: /* @__PURE__ */ new Date() }), typeof t == "string")
      if (t.match(/^[0-9]{14}Z$/) || t.match(/^[0-9]{14}\.[0-9]+Z$/))
        this.hV = ye(t);
      else
        throw new Error("malformed string for GeneralizedTime: " + t);
    else if (t.str != null)
      this.hV = ye(t.str);
    else if (t.date == null && t.millis == !0) {
      var r = /* @__PURE__ */ new Date();
      this.hV = ye(this.formatDate(r, "gen", !0));
    } else if (t.date != null && t.date instanceof Date) {
      var i = t.millis === !0;
      this.hV = ye(this.formatDate(t.date, "gen", i));
    } else
      t instanceof Date && (this.hV = ye(this.formatDate(t, "gen")));
    if (this.hV == null)
      throw new Error("parameter not specified properly for GeneralizedTime");
    return this.hV;
  }, e != null && this.setByParam(e);
};
N(a.asn1.DERGeneralizedTime, a.asn1.DERAbstractTime);
a.asn1.DERSequence = function(e) {
  a.asn1.DERSequence.superclass.constructor.call(this, e), this.hT = "30", this.getFreshValueHex = function() {
    for (var t = "", r = 0; r < this.asn1Array.length; r++) {
      var i = this.asn1Array[r];
      t += i.tohex();
    }
    return this.hV = t, this.hV;
  };
};
N(a.asn1.DERSequence, a.asn1.DERAbstractStructured);
a.asn1.DERSet = function(e) {
  a.asn1.DERSet.superclass.constructor.call(this, e), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
    for (var t = new Array(), r = 0; r < this.asn1Array.length; r++) {
      var i = this.asn1Array[r];
      t.push(i.tohex());
    }
    return this.sortFlag == !0 && t.sort(), this.hV = t.join(""), this.hV;
  }, typeof e < "u" && typeof e.sortflag < "u" && e.sortflag == !1 && (this.sortFlag = !1);
};
N(a.asn1.DERSet, a.asn1.DERAbstractStructured);
a.asn1.DERTaggedObject = function(e) {
  a.asn1.DERTaggedObject.superclass.constructor.call(this);
  var t = a.asn1, r = V, i = r.getV;
  r.isASN1HEX;
  var s = t.ASN1Util.newObject;
  this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.params = { tag: "a0", explicit: !0 }, this.setASN1Object = function(n, h, u) {
    this.params = { tag: h, explicit: n, obj: u };
  }, this.getFreshValueHex = function() {
    var n = this.params;
    if (n.explicit == null && (n.explicit = !0), n.tage != null && (n.tag = n.tage, n.explicit = !0), n.tagi != null && (n.tag = n.tagi, n.explicit = !1), n.str != null)
      this.hV = at(n.str);
    else if (n.hex != null)
      this.hV = n.hex;
    else if (n.obj != null) {
      var h;
      n.obj instanceof t.ASN1Object ? h = n.obj.tohex() : typeof n.obj == "object" && (h = s(n.obj).tohex()), n.explicit ? this.hV = h : this.hV = i(h, 0);
    } else
      throw new Error("str, hex nor obj not specified");
    return n.tag == null && (n.tag = "a0"), this.hT = n.tag, this.hTLV = null, this.isModified = !0, this.hV;
  }, this.setByParam = function(n) {
    this.params = n;
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.DERTaggedObject, a.asn1.ASN1Object);
var V = new function() {
}();
V.getLblen = function(e, t) {
  if (e.substr(t + 2, 1) != "8")
    return 1;
  var r = parseInt(e.substr(t + 3, 1));
  return r == 0 ? -1 : 0 < r && r < 10 ? r + 1 : -2;
};
V.getL = function(e, t) {
  var r = V.getLblen(e, t);
  return r < 1 ? "" : e.substr(t + 2, r * 2);
};
V.getVblen = function(e, t) {
  var r, i;
  return r = V.getL(e, t), r == "" ? -1 : (r.substr(0, 1) === "8" ? i = new R(r.substr(2), 16) : i = new R(r, 16), i.intValue());
};
V.getVidx = function(e, t) {
  var r = V.getLblen(e, t);
  return r < 0 ? r : t + (r + 1) * 2;
};
V.getV = function(e, t) {
  var r = V.getVidx(e, t), i = V.getVblen(e, t);
  return e.substr(r, i * 2);
};
V.getTLV = function(e, t) {
  return e.substr(t, 2) + V.getL(e, t) + V.getV(e, t);
};
V.getTLVblen = function(e, t) {
  return 2 + V.getLblen(e, t) * 2 + V.getVblen(e, t) * 2;
};
V.getNextSiblingIdx = function(e, t) {
  var r = V.getVidx(e, t), i = V.getVblen(e, t);
  return r + i * 2;
};
V.getChildIdx = function(e, t) {
  var r = V, i = [], s, n, h;
  s = r.getVidx(e, t), n = r.getVblen(e, t) * 2, e.substr(t, 2) == "03" && (s += 2, n -= 2), h = 0;
  for (var u = s; h <= n; ) {
    var p = r.getTLVblen(e, u);
    if (h += p, h <= n && i.push(u), u += p, h >= n)
      break;
  }
  return i;
};
V.getNthChildIdx = function(e, t, r) {
  var i = V.getChildIdx(e, t);
  return i[r];
};
V.getIdxbyList = function(e, t, r, i) {
  var s = V, n, h;
  return r.length == 0 ? i !== void 0 && e.substr(t, 2) !== i ? -1 : t : (n = r.shift(), h = s.getChildIdx(e, t), n >= h.length ? -1 : s.getIdxbyList(e, h[n], r, i));
};
V.getIdxbyListEx = function(e, t, r, i) {
  var s = V, n, h;
  if (r.length == 0)
    return i !== void 0 && e.substr(t, 2) !== i ? -1 : t;
  n = r.shift(), h = s.getChildIdx(e, t);
  for (var u = 0, p = 0; p < h.length; p++) {
    var c = e.substr(h[p], 2);
    if (typeof n == "number" && !s.isContextTag(c) && u == n || typeof n == "string" && s.isContextTag(c, n))
      return s.getIdxbyListEx(e, h[p], r, i);
    s.isContextTag(c) || u++;
  }
  return -1;
};
V.getTLVbyList = function(e, t, r, i) {
  var s = V, n = s.getIdxbyList(e, t, r, i);
  return n == -1 || n >= e.length ? null : s.getTLV(e, n);
};
V.getTLVbyListEx = function(e, t, r, i) {
  var s = V, n = s.getIdxbyListEx(e, t, r, i);
  return n == -1 ? null : s.getTLV(e, n);
};
V.getVbyList = function(e, t, r, i, s) {
  var n = V, h, u;
  return h = n.getIdxbyList(e, t, r, i), h == -1 || h >= e.length ? null : (u = n.getV(e, h), s === !0 && (u = u.substr(2)), u);
};
V.getVbyListEx = function(e, t, r, i, s) {
  var n = V, h, u;
  return h = n.getIdxbyListEx(e, t, r, i), h == -1 ? null : (u = n.getV(e, h), e.substr(h, 2) == "03" && s !== !1 && (u = u.substr(2)), u);
};
V.getInt = function(e, t, r) {
  r == null && (r = -1);
  try {
    var i = e.substr(t, 2);
    if (i != "02" && i != "03")
      return r;
    var s = V.getV(e, t);
    return i == "02" ? parseInt(s, 16) : Wt(s);
  } catch {
    return r;
  }
};
V.getOID = function(e, t, r) {
  r == null && (r = null);
  try {
    if (e.substr(t, 2) != "06")
      return r;
    var i = V.getV(e, t);
    return ct(i);
  } catch {
    return r;
  }
};
V.getOIDName = function(e, t, r) {
  r == null && (r = null);
  try {
    var i = V.getOID(e, t, r);
    if (i == r)
      return r;
    var s = a.asn1.x509.OID.oid2name(i);
    return s == "" ? i : s;
  } catch {
    return r;
  }
};
V.getString = function(e, t, r) {
  r == null && (r = null);
  try {
    var i = V.getV(e, t);
    return me(i);
  } catch {
    return r;
  }
};
V.hextooidstr = function(e) {
  var t = function(v, o) {
    return v.length >= o ? v : new Array(o - v.length + 1).join("0") + v;
  }, r = [], i = e.substr(0, 2), s = parseInt(i, 16);
  r[0] = new String(Math.floor(s / 40)), r[1] = new String(s % 40);
  for (var n = e.substr(2), h = [], u = 0; u < n.length / 2; u++)
    h.push(parseInt(n.substr(u * 2, 2), 16));
  for (var p = [], c = "", u = 0; u < h.length; u++)
    h[u] & 128 ? c = c + t((h[u] & 127).toString(2), 7) : (c = c + t((h[u] & 127).toString(2), 7), p.push(new String(parseInt(c, 2))), c = "");
  var y = r.join(".");
  return p.length > 0 && (y = y + "." + p.join(".")), y;
};
V.dump = function(e, t, r, i) {
  var s = V, n = s.getV, h = s.dump, u = s.getChildIdx, p = e;
  e instanceof a.asn1.ASN1Object && (p = e.tohex());
  var c = function(E, w) {
    if (E.length <= w * 2)
      return E;
    var S = E.substr(0, w) + "..(total " + E.length / 2 + "bytes).." + E.substr(E.length - w, w);
    return S;
  };
  t === void 0 && (t = { ommit_long_octet: 32 }), r === void 0 && (r = 0), i === void 0 && (i = "");
  var y = t.ommit_long_octet, C = p.substr(r, 2);
  if (C == "01") {
    var v = n(p, r);
    return v == "00" ? i + `BOOLEAN FALSE
` : i + `BOOLEAN TRUE
`;
  }
  if (C == "02") {
    var v = n(p, r);
    return i + "INTEGER " + c(v, y) + `
`;
  }
  if (C == "03") {
    var v = n(p, r);
    if (s.isASN1HEX(v.substr(2))) {
      var o = i + `BITSTRING, encapsulates
`;
      return o = o + h(v.substr(2), t, 0, i + "  "), o;
    } else
      return i + "BITSTRING " + c(v, y) + `
`;
  }
  if (C == "04") {
    var v = n(p, r);
    if (s.isASN1HEX(v)) {
      var o = i + `OCTETSTRING, encapsulates
`;
      return o = o + h(v, t, 0, i + "  "), o;
    } else
      return i + "OCTETSTRING " + c(v, y) + `
`;
  }
  if (C == "05")
    return i + `NULL
`;
  if (C == "06") {
    var l = n(p, r), f = a.asn1.ASN1Util.oidHexToInt(l), d = a.asn1.x509.OID.oid2name(f), g = f.replace(/\./g, " ");
    return d != "" ? i + "ObjectIdentifier " + d + " (" + g + `)
` : i + "ObjectIdentifier (" + g + `)
`;
  }
  if (C == "0a")
    return i + "ENUMERATED " + parseInt(n(p, r)) + `
`;
  if (C == "0c")
    return i + "UTF8String '" + W(n(p, r)) + `'
`;
  if (C == "13")
    return i + "PrintableString '" + W(n(p, r)) + `'
`;
  if (C == "14")
    return i + "TeletexString '" + W(n(p, r)) + `'
`;
  if (C == "16")
    return i + "IA5String '" + W(n(p, r)) + `'
`;
  if (C == "17")
    return i + "UTCTime " + W(n(p, r)) + `
`;
  if (C == "18")
    return i + "GeneralizedTime " + W(n(p, r)) + `
`;
  if (C == "1a")
    return i + "VisualString '" + W(n(p, r)) + `'
`;
  if (C == "1e")
    return i + "BMPString '" + Ft(n(p, r)) + `'
`;
  if (C == "30") {
    if (p.substr(r, 4) == "3000")
      return i + `SEQUENCE {}
`;
    var o = i + `SEQUENCE
`, m = u(p, r), F = t;
    if ((m.length == 2 || m.length == 3) && p.substr(m[0], 2) == "06" && p.substr(m[m.length - 1], 2) == "04") {
      var d = s.oidname(n(p, m[0])), D = JSON.parse(JSON.stringify(t));
      D.x509ExtName = d, F = D;
    }
    for (var A = 0; A < m.length; A++)
      o = o + h(p, F, m[A], i + "  ");
    return o;
  }
  if (C == "31") {
    for (var o = i + `SET
`, m = u(p, r), A = 0; A < m.length; A++)
      o = o + h(p, t, m[A], i + "  ");
    return o;
  }
  var C = parseInt(C, 16);
  if (C & 128) {
    var x = C & 31;
    if (C & 32) {
      for (var o = i + "[" + x + `]
`, m = u(p, r), A = 0; A < m.length; A++)
        o = o + h(p, t, m[A], i + "  ");
      return o;
    } else {
      var v = n(p, r);
      if (V.isASN1HEX(v)) {
        var o = i + "[" + x + `]
`;
        return o = o + h(v, t, 0, i + "  "), o;
      } else
        (v.substr(0, 8) == "68747470" || t.x509ExtName === "subjectAltName" && x == 2) && (v = W(v));
      var o = i + "[" + x + "] " + v + `
`;
      return o;
    }
  }
  return i + "UNKNOWN(" + C + ") " + n(p, r) + `
`;
};
V.parse = function(e) {
  var t = V, r = t.parse, i = t.isASN1HEX, s = t.getV, n = t.getTLV, h = t.getChildIdx, u = a.asn1, p = u.ASN1Util.oidHexToInt, c = u.x509.OID.oid2name, y = W, v = Ft, o = Bn, l = { "0c": "utf8str", 12: "numstr", 13: "prnstr", 14: "telstr", 16: "ia5str", 17: "utctime", 18: "gentime", "1a": "visstr", "1e": "bmpstr", 30: "seq", 31: "set" }, f = function(S) {
    for (var b = [], P = h(S, 0), T = 0; T < P.length; T++) {
      var H = P[T], I = n(S, H), B = r(I);
      b.push(B);
    }
    return b;
  }, d = e.substr(0, 2), g = {}, m = s(e, 0);
  if (d == "01")
    return e == "0101ff" ? { bool: !0 } : { bool: !1 };
  if (d == "02")
    return { int: { hex: m } };
  if (d == "03")
    try {
      if (m.substr(0, 2) != "00")
        throw "not encap";
      var F = m.substr(2);
      if (!i(F))
        throw "not encap";
      return { bitstr: { obj: r(F) } };
    } catch {
      var D = null;
      return m.length <= 10 && (D = Jt(m)), D == null ? { bitstr: { hex: m } } : { bitstr: { bin: D } };
    }
  else if (d == "04")
    try {
      if (!i(m))
        throw "not encap";
      return { octstr: { obj: r(m) } };
    } catch {
      return { octstr: { hex: m } };
    }
  else {
    if (d == "05")
      return { null: "" };
    if (d == "06") {
      var A = p(m), C = c(A);
      return C == "" ? { oid: A } : { oid: C };
    } else {
      if (d == "0a")
        return m.length > 4 ? { enum: { hex: m } } : { enum: parseInt(m, 16) };
      if (d == "30" || d == "31")
        return g[l[d]] = f(e), g;
      if (d == "14") {
        var x = o(m);
        return g[l[d]] = { str: x }, g;
      } else if (d == "1e") {
        var x = v(m);
        return g[l[d]] = { str: x }, g;
      } else if (":0c:12:13:16:17:18:1a:".indexOf(d) != -1) {
        var x = y(m);
        return g[l[d]] = { str: x }, g;
      } else if (d.match(/^8[0-9]$/)) {
        var x = y(m);
        return x == null | x == "" ? { tag: { tag: d, explicit: !1, hex: m } } : x.match(/[\x00-\x1F\x7F-\x9F]/) != null || x.match(/[\u0000-\u001F\u0080–\u009F]/) != null ? { tag: { tag: d, explicit: !1, hex: m } } : { tag: { tag: d, explicit: !1, str: x } };
      } else if (d.match(/^a[0-9]$/))
        try {
          if (!i(m))
            throw new Error("not encap");
          return { tag: { tag: d, explicit: !0, obj: r(m) } };
        } catch {
          return { tag: { tag: d, explicit: !0, hex: m } };
        }
      else {
        var E = new a.asn1.ASN1Object();
        E.hV = m;
        var w = E.getLengthHexFromValue();
        return { asn1: { tlv: d + w + m } };
      }
    }
  }
};
V.isContextTag = function(e, t) {
  e = e.toLowerCase();
  var r, i;
  try {
    r = parseInt(e, 16);
  } catch {
    return -1;
  }
  if (t === void 0)
    return (r & 192) == 128;
  try {
    var s = t.match(/^\[[0-9]+\]$/);
    return s == null || (i = parseInt(t.substr(1, t.length - 1), 10), i > 31) ? !1 : (r & 192) == 128 && (r & 31) == i;
  } catch {
    return !1;
  }
};
V.isASN1HEX = function(e) {
  var t = V;
  if (e.length % 2 == 1)
    return !1;
  var r = t.getVblen(e, 0), i = e.substr(0, 2), s = t.getL(e, 0), n = e.length - i.length - s.length;
  return n == r * 2;
};
V.checkStrictDER = function(e, t, r, i, s) {
  var n = V;
  if (r === void 0) {
    if (typeof e != "string")
      throw new Error("not hex string");
    if (e = e.toLowerCase(), !a.lang.String.isHex(e))
      throw new Error("not hex string");
    r = e.length, i = e.length / 2, i < 128 ? s = 1 : s = Math.ceil(i.toString(16)) + 1;
  }
  var h = n.getL(e, t);
  if (h.length > s * 2)
    throw new Error("L of TLV too long: idx=" + t);
  var u = n.getVblen(e, t);
  if (u > i)
    throw new Error("value of L too long than hex: idx=" + t);
  var p = n.getTLV(e, t), c = p.length - 2 - n.getL(e, t).length;
  if (c !== u * 2)
    throw new Error("V string length and L's value not the same:" + c + "/" + u * 2);
  if (t === 0 && e.length != p.length)
    throw new Error("total length and TLV length unmatch:" + e.length + "!=" + p.length);
  var y = e.substr(t, 2);
  if (y === "02") {
    var v = n.getVidx(e, t);
    if (e.substr(v, 2) == "00" && e.charCodeAt(v + 2) < 56)
      throw new Error("not least zeros for DER INTEGER");
  }
  if (parseInt(y, 16) & 32) {
    for (var o = n.getVblen(e, t), l = 0, f = n.getChildIdx(e, t), d = 0; d < f.length; d++) {
      var g = n.getTLV(e, f[d]);
      l += g.length, n.checkStrictDER(e, f[d], r, i, s);
    }
    if (o * 2 != l)
      throw new Error("sum of children's TLV length and L unmatch: " + o * 2 + "!=" + l);
  }
};
V.oidname = function(e) {
  var t = a.asn1;
  a.lang.String.isHex(e) && (e = t.ASN1Util.oidHexToInt(e));
  var r = t.x509.OID.oid2name(e);
  return r === "" && (r = e), r;
};
(typeof a > "u" || !a) && (a = {});
(typeof a.asn1 > "u" || !a.asn1) && (a.asn1 = {});
(typeof a.asn1.x509 > "u" || !a.asn1.x509) && (a.asn1.x509 = {});
a.asn1.x509.Certificate = function(e) {
  a.asn1.x509.Certificate.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERBitString, s = r.DERSequence, n = r.x509, h = n.TBSCertificate, u = n.AlgorithmIdentifier;
  this.params = void 0, this.setByParam = function(p) {
    this.params = p;
  }, this.sign = function() {
    var p = this.params, c = p.sigalg;
    p.sigalg.name != null && (c = p.sigalg.name);
    var y = p.tbsobj.tohex(), v = new a.crypto.Signature({ alg: c });
    v.init(p.cakey), v.updateHex(y), p.sighex = v.sign();
  }, this.getPEM = function() {
    return le(this.tohex(), "CERTIFICATE");
  }, this.tohex = function() {
    var p = this.params;
    if ((p.tbsobj == null || p.tbsobj == null) && (p.tbsobj = new h(p)), p.sighex == null && p.cakey != null && this.sign(), p.sighex == null)
      throw new Error("sighex or cakey parameter not defined");
    var c = [];
    c.push(p.tbsobj), c.push(new u({ name: p.sigalg })), c.push(new i({ hex: "00" + p.sighex }));
    var y = new s({ array: c });
    return y.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && (this.params = e);
};
N(a.asn1.x509.Certificate, a.asn1.ASN1Object);
a.asn1.x509.TBSCertificate = function(e) {
  a.asn1.x509.TBSCertificate.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.x509, s = r.DERTaggedObject, n = r.DERInteger, h = r.DERSequence, u = i.AlgorithmIdentifier, p = i.Time, c = i.X500Name, y = i.Extensions, v = i.SubjectPublicKeyInfo;
  this.params = null, this.setByParam = function(o) {
    this.params = o;
  }, this.tohex = function() {
    var o = [], l = this.params;
    if (l.version != null || l.version != 1) {
      var f = 2;
      l.version != null && (f = l.version - 1);
      var d = new s({ obj: new n({ int: f }) });
      o.push(d);
    }
    o.push(new n(l.serial)), o.push(new u({ name: l.sigalg })), o.push(new c(l.issuer)), o.push(new h({ array: [new p(l.notbefore), new p(l.notafter)] })), o.push(new c(l.subject)), o.push(new v(k.getKey(l.sbjpubkey))), l.ext !== void 0 && l.ext.length > 0 && o.push(new s({ tag: "a3", obj: new y(l.ext) }));
    var g = new a.asn1.DERSequence({ array: o });
    return g.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.x509.TBSCertificate, a.asn1.ASN1Object);
a.asn1.x509.Extensions = function(e) {
  a.asn1.x509.Extensions.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERSequence, s = r.x509;
  this.aParam = [], this.setByParam = function(n) {
    this.aParam = n;
  }, this.tohex = function() {
    for (var n = [], h = 0; h < this.aParam.length; h++) {
      var u = this.aParam[h], p = u.extname, c = null;
      if (u.extn != null)
        c = new s.PrivateExtension(u);
      else if (p == "subjectKeyIdentifier")
        c = new s.SubjectKeyIdentifier(u);
      else if (p == "keyUsage")
        c = new s.KeyUsage(u);
      else if (p == "subjectAltName")
        c = new s.SubjectAltName(u);
      else if (p == "issuerAltName")
        c = new s.IssuerAltName(u);
      else if (p == "basicConstraints")
        c = new s.BasicConstraints(u);
      else if (p == "nameConstraints")
        c = new s.NameConstraints(u);
      else if (p == "cRLDistributionPoints")
        c = new s.CRLDistributionPoints(u);
      else if (p == "certificatePolicies")
        c = new s.CertificatePolicies(u);
      else if (p == "policyMappings")
        c = new s.PolicyMappings(u);
      else if (p == "policyConstraints")
        c = new s.PolicyConstraints(u);
      else if (p == "inhibitAnyPolicy")
        c = new s.InhibitAnyPolicy(u);
      else if (p == "authorityKeyIdentifier")
        c = new s.AuthorityKeyIdentifier(u);
      else if (p == "extKeyUsage")
        c = new s.ExtKeyUsage(u);
      else if (p == "authorityInfoAccess")
        c = new s.AuthorityInfoAccess(u);
      else if (p == "cRLNumber")
        c = new s.CRLNumber(u);
      else if (p == "cRLReason")
        c = new s.CRLReason(u);
      else if (p == "ocspNonce")
        c = new s.OCSPNonce(u);
      else if (p == "ocspNoCheck")
        c = new s.OCSPNoCheck(u);
      else if (p == "adobeTimeStamp")
        c = new s.AdobeTimeStamp(u);
      else if (p == "subjectDirectoryAttributes")
        c = new s.SubjectDirectoryAttributes(u);
      else
        throw new Error("extension not supported:" + JSON.stringify(u));
      c != null && n.push(c);
    }
    var y = new i({ array: n });
    return y.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.x509.Extensions, a.asn1.ASN1Object);
a.asn1.x509.Extension = function(e) {
  a.asn1.x509.Extension.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERObjectIdentifier, s = r.DEROctetString;
  r.DERBitString;
  var n = r.DERBoolean, h = r.DERSequence;
  this.tohex = function() {
    var u = new i({ oid: this.oid }), p = new s({ hex: this.getExtnValueHex() }), c = new Array();
    c.push(u), this.critical && c.push(new n()), c.push(p);
    var y = new h({ array: c });
    return y.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.critical = !1, e !== void 0 && e.critical !== void 0 && (this.critical = e.critical);
};
N(a.asn1.x509.Extension, a.asn1.ASN1Object);
a.asn1.x509.KeyUsage = function(e) {
  a.asn1.x509.KeyUsage.superclass.constructor.call(this, e);
  var t = Error, r = { digitalSignature: 0, nonRepudiation: 1, keyEncipherment: 2, dataEncipherment: 3, keyAgreement: 4, keyCertSign: 5, cRLSign: 6, encipherOnly: 7, decipherOnly: 8 };
  this.getExtnValueHex = function() {
    var i = this.getBinValue();
    return this.asn1ExtnValue = new a.asn1.DERBitString({ bin: i }), this.asn1ExtnValue.tohex();
  }, this.getBinValue = function() {
    var i = this.params;
    if (typeof i != "object" || typeof i.names != "object" && typeof i.bin != "string")
      throw new t("parameter not yet set");
    if (i.names != null)
      return rt(i.names, r);
    if (i.bin != null)
      return i.bin;
    throw new t("parameter not set properly");
  }, this.oid = "2.5.29.15", e !== void 0 && (this.params = e);
};
N(a.asn1.x509.KeyUsage, a.asn1.x509.Extension);
a.asn1.x509.BasicConstraints = function(e) {
  a.asn1.x509.BasicConstraints.superclass.constructor.call(this, e);
  var t = a.asn1, r = t.DERBoolean, i = t.DERInteger, s = t.DERSequence;
  this.getExtnValueHex = function() {
    var n = new Array();
    this.cA && n.push(new r()), this.pathLen > -1 && n.push(new i({ int: this.pathLen }));
    var h = new s({ array: n });
    return this.asn1ExtnValue = h, this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.19", this.cA = !1, this.pathLen = -1, e !== void 0 && (e.cA !== void 0 && (this.cA = e.cA), e.pathLen !== void 0 && (this.pathLen = e.pathLen));
};
N(a.asn1.x509.BasicConstraints, a.asn1.x509.Extension);
a.asn1.x509.CRLDistributionPoints = function(e) {
  a.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, e);
  var t = a, r = t.asn1, i = r.x509;
  this.getExtnValueHex = function() {
    return this.asn1ExtnValue.tohex();
  }, this.setByDPArray = function(s) {
    for (var n = [], h = 0; h < s.length; h++)
      if (s[h] instanceof a.asn1.ASN1Object)
        n.push(s[h]);
      else {
        var u = new i.DistributionPoint(s[h]);
        n.push(u);
      }
    this.asn1ExtnValue = new r.DERSequence({ array: n });
  }, this.setByOneURI = function(s) {
    var n = new i.DistributionPoint({ fulluri: s });
    this.setByDPArray([n]);
  }, this.oid = "2.5.29.31", e !== void 0 && (e.array !== void 0 ? this.setByDPArray(e.array) : e.uri !== void 0 && this.setByOneURI(e.uri));
};
N(a.asn1.x509.CRLDistributionPoints, a.asn1.x509.Extension);
a.asn1.x509.DistributionPoint = function(e) {
  a.asn1.x509.DistributionPoint.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.x509.DistributionPointName;
  this.tohex = function() {
    var s = new r.DERSequence();
    if (this.asn1DP != null) {
      var n = new r.DERTaggedObject({ explicit: !0, tag: "a0", obj: this.asn1DP });
      s.appendASN1Object(n);
    }
    return this.hTLV = s.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && (e.dpobj !== void 0 ? this.asn1DP = e.dpobj : e.dpname !== void 0 ? this.asn1DP = new i(e.dpname) : e.fulluri !== void 0 && (this.asn1DP = new i({ full: [{ uri: e.fulluri }] })));
};
N(a.asn1.x509.DistributionPoint, a.asn1.ASN1Object);
a.asn1.x509.DistributionPointName = function(e) {
  a.asn1.x509.DistributionPointName.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERTaggedObject;
  if (this.tohex = function() {
    if (this.type != "full")
      throw new Error("currently type shall be 'full': " + this.type);
    return this.asn1Obj = new i({ explicit: !1, tag: this.tag, obj: this.asn1V }), this.hTLV = this.asn1Obj.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0)
    if (r.x509.GeneralNames.prototype.isPrototypeOf(e))
      this.type = "full", this.tag = "a0", this.asn1V = e;
    else if (e.full !== void 0)
      this.type = "full", this.tag = "a0", this.asn1V = new r.x509.GeneralNames(e.full);
    else
      throw new Error("This class supports GeneralNames only as argument");
};
N(a.asn1.x509.DistributionPointName, a.asn1.ASN1Object);
a.asn1.x509.CertificatePolicies = function(e) {
  a.asn1.x509.CertificatePolicies.superclass.constructor.call(this, e);
  var t = a, r = t.asn1, i = r.x509, s = r.DERSequence, n = i.PolicyInformation;
  this.params = null, this.getExtnValueHex = function() {
    for (var h = [], u = 0; u < this.params.array.length; u++)
      h.push(new n(this.params.array[u]));
    var p = new s({ array: h });
    return this.asn1ExtnValue = p, this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.32", e !== void 0 && (this.params = e);
};
N(a.asn1.x509.CertificatePolicies, a.asn1.x509.Extension);
a.asn1.x509.PolicyInformation = function(e) {
  a.asn1.x509.PolicyInformation.superclass.constructor.call(this, e);
  var t = a.asn1, r = t.DERSequence, i = t.DERObjectIdentifier, s = t.x509.PolicyQualifierInfo;
  this.params = null, this.tohex = function() {
    if (this.params.policyoid === void 0 && this.params.array === void 0)
      throw new Error("parameter oid and array missing");
    var n = [new i(this.params.policyoid)];
    if (this.params.array !== void 0) {
      for (var h = [], u = 0; u < this.params.array.length; u++)
        h.push(new s(this.params.array[u]));
      h.length > 0 && n.push(new r({ array: h }));
    }
    var p = new r({ array: n });
    return p.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && (this.params = e);
};
N(a.asn1.x509.PolicyInformation, a.asn1.ASN1Object);
a.asn1.x509.PolicyQualifierInfo = function(e) {
  a.asn1.x509.PolicyQualifierInfo.superclass.constructor.call(this, e);
  var t = a.asn1, r = t.DERSequence, i = t.DERIA5String, s = t.DERObjectIdentifier, n = t.x509.UserNotice;
  this.params = null, this.tohex = function() {
    if (this.params.cps !== void 0) {
      var h = new r({ array: [new s({ oid: "1.3.6.1.5.5.7.2.1" }), new i({ str: this.params.cps })] });
      return h.tohex();
    }
    if (this.params.unotice != null) {
      var h = new r({ array: [new s({ oid: "1.3.6.1.5.5.7.2.2" }), new n(this.params.unotice)] });
      return h.tohex();
    }
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && (this.params = e);
};
N(a.asn1.x509.PolicyQualifierInfo, a.asn1.ASN1Object);
a.asn1.x509.UserNotice = function(e) {
  a.asn1.x509.UserNotice.superclass.constructor.call(this, e);
  var t = a.asn1.DERSequence;
  a.asn1.DERInteger;
  var r = a.asn1.x509.DisplayText, i = a.asn1.x509.NoticeReference;
  this.params = null, this.tohex = function() {
    var s = [];
    this.params.noticeref !== void 0 && s.push(new i(this.params.noticeref)), this.params.exptext !== void 0 && s.push(new r(this.params.exptext));
    var n = new t({ array: s });
    return n.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && (this.params = e);
};
N(a.asn1.x509.UserNotice, a.asn1.ASN1Object);
a.asn1.x509.NoticeReference = function(e) {
  a.asn1.x509.NoticeReference.superclass.constructor.call(this, e);
  var t = a.asn1.DERSequence, r = a.asn1.DERInteger, i = a.asn1.x509.DisplayText;
  this.params = null, this.tohex = function() {
    var s = [];
    if (this.params.org !== void 0 && s.push(new i(this.params.org)), this.params.noticenum !== void 0) {
      for (var n = [], h = this.params.noticenum, u = 0; u < h.length; u++)
        n.push(new r(h[u]));
      s.push(new t({ array: n }));
    }
    if (s.length == 0)
      throw new Error("parameter is empty");
    var p = new t({ array: s });
    return p.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && (this.params = e);
};
N(a.asn1.x509.NoticeReference, a.asn1.ASN1Object);
a.asn1.x509.DisplayText = function(e) {
  a.asn1.x509.DisplayText.superclass.constructor.call(this, e), this.hT = "0c", e !== void 0 && (e.type === "ia5" ? this.hT = "16" : e.type === "vis" ? this.hT = "1a" : e.type === "bmp" && (this.hT = "1e"));
};
N(a.asn1.x509.DisplayText, a.asn1.DERAbstractString);
a.asn1.x509.PolicyMappings = function(e) {
  a.asn1.x509.PolicyMappings.superclass.constructor.call(this, e);
  var t = a, r = t.asn1;
  r.x509;
  var i = r.ASN1Util.newObject;
  this.params = null, this.getExtnValueHex = function() {
    for (var s = this.params, n = [], h = 0; h < s.array.length; h++) {
      var u = s.array[h];
      n.push({ seq: [{ oid: u[0] }, { oid: u[1] }] });
    }
    return this.asn1ExtnValue = i({ seq: n }), this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.33", e !== void 0 && (this.params = e);
};
N(a.asn1.x509.PolicyMappings, a.asn1.x509.Extension);
a.asn1.x509.PolicyConstraints = function(e) {
  a.asn1.x509.PolicyConstraints.superclass.constructor.call(this, e);
  var t = a, r = t.asn1;
  r.x509;
  var i = r.ASN1Util.newObject;
  this.params = null, this.getExtnValueHex = function() {
    var s = this.params, n = [];
    return s.reqexp != null && n.push({ tag: { tagi: "80", obj: { int: s.reqexp } } }), s.inhibit != null && n.push({ tag: { tagi: "81", obj: { int: s.inhibit } } }), this.asn1ExtnValue = i({ seq: n }), this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.36", e !== void 0 && (this.params = e);
};
N(a.asn1.x509.PolicyConstraints, a.asn1.x509.Extension);
a.asn1.x509.InhibitAnyPolicy = function(e) {
  a.asn1.x509.InhibitAnyPolicy.superclass.constructor.call(this, e);
  var t = a, r = t.asn1;
  r.x509;
  var i = r.ASN1Util.newObject;
  this.params = null, this.getExtnValueHex = function() {
    return this.asn1ExtnValue = i({ int: this.params.skip }), this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.54", e !== void 0 && (this.params = e);
};
N(a.asn1.x509.InhibitAnyPolicy, a.asn1.x509.Extension);
a.asn1.x509.NameConstraints = function(e) {
  a.asn1.x509.NameConstraints.superclass.constructor.call(this, e);
  var t = a, r = t.asn1, i = r.x509, s = r.ASN1Util.newObject, n = i.GeneralSubtree;
  this.params = null, this.getExtnValueHex = function() {
    var h = this.params, u = [];
    if (h.permit != null && h.permit.length != null) {
      for (var p = [], c = 0; c < h.permit.length; c++)
        p.push(new n(h.permit[c]));
      u.push({ tag: { tagi: "a0", obj: { seq: p } } });
    }
    if (h.exclude != null && h.exclude.length != null) {
      for (var y = [], c = 0; c < h.exclude.length; c++)
        y.push(new n(h.exclude[c]));
      u.push({ tag: { tagi: "a1", obj: { seq: y } } });
    }
    return this.asn1ExtnValue = s({ seq: u }), this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.30", e !== void 0 && (this.params = e);
};
N(a.asn1.x509.NameConstraints, a.asn1.x509.Extension);
a.asn1.x509.GeneralSubtree = function(e) {
  a.asn1.x509.GeneralSubtree.superclass.constructor.call(this);
  var t = a.asn1, r = t.x509, i = r.GeneralName, s = t.ASN1Util.newObject;
  this.params = null, this.setByParam = function(n) {
    this.params = n;
  }, this.tohex = function() {
    var n = this.params, h = [new i(n)];
    n.min != null && h.push({ tag: { tagi: "80", obj: { int: n.min } } }), n.max != null && h.push({ tag: { tagi: "81", obj: { int: n.max } } });
    var u = s({ seq: h });
    return u.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.x509.GeneralSubtree, a.asn1.ASN1Object);
a.asn1.x509.ExtKeyUsage = function(e) {
  a.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, e);
  var t = a, r = t.asn1;
  this.setPurposeArray = function(i) {
    this.asn1ExtnValue = new r.DERSequence();
    for (var s = 0; s < i.length; s++) {
      var n = new r.DERObjectIdentifier(i[s]);
      this.asn1ExtnValue.appendASN1Object(n);
    }
  }, this.getExtnValueHex = function() {
    return this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.37", e !== void 0 && e.array !== void 0 && this.setPurposeArray(e.array);
};
N(a.asn1.x509.ExtKeyUsage, a.asn1.x509.Extension);
a.asn1.x509.AuthorityKeyIdentifier = function(e) {
  a.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, e);
  var t = a, r = t.asn1, i = r.DERTaggedObject, s = r.x509.GeneralNames;
  t.crypto.Util.isKey, this.asn1KID = null, this.asn1CertIssuer = null, this.asn1CertSN = null, this.getExtnValueHex = function() {
    var n = new Array();
    this.asn1KID && n.push(new i({ explicit: !1, tag: "80", obj: this.asn1KID })), this.asn1CertIssuer && n.push(new i({ explicit: !1, tag: "a1", obj: new s([{ dn: this.asn1CertIssuer }]) })), this.asn1CertSN && n.push(new i({ explicit: !1, tag: "82", obj: this.asn1CertSN }));
    var h = new r.DERSequence({ array: n });
    return this.asn1ExtnValue = h, this.asn1ExtnValue.tohex();
  }, this.setKIDByParam = function(n) {
    if (n.str !== void 0 || n.hex !== void 0)
      this.asn1KID = new a.asn1.DEROctetString(n);
    else if (typeof n == "object" && a.crypto.Util.isKey(n) || typeof n == "string" && n.indexOf("BEGIN ") != -1) {
      var h = n;
      typeof n == "string" && (h = k.getKey(n));
      var u = k.getKeyID(h);
      this.asn1KID = new a.asn1.DEROctetString({ hex: u });
    }
  }, this.setCertIssuerByParam = function(n) {
    n.str !== void 0 || n.ldapstr !== void 0 || n.hex !== void 0 || n.certsubject !== void 0 || n.certissuer !== void 0 ? this.asn1CertIssuer = new a.asn1.x509.X500Name(n) : typeof n == "string" && n.indexOf("BEGIN ") != -1 && n.indexOf("CERTIFICATE") != -1 && (this.asn1CertIssuer = new a.asn1.x509.X500Name({ certissuer: n }));
  }, this.setCertSNByParam = function(n) {
    if (n.str !== void 0 || n.bigint !== void 0 || n.hex !== void 0)
      this.asn1CertSN = new a.asn1.DERInteger(n);
    else if (typeof n == "string" && n.indexOf("BEGIN ") != -1 && n.indexOf("CERTIFICATE")) {
      var h = new _();
      h.readCertPEM(n);
      var u = h.getSerialNumberHex();
      this.asn1CertSN = new a.asn1.DERInteger({ hex: u });
    }
  }, this.oid = "2.5.29.35", e !== void 0 && (e.kid !== void 0 && this.setKIDByParam(e.kid), e.issuer !== void 0 && this.setCertIssuerByParam(e.issuer), e.sn !== void 0 && this.setCertSNByParam(e.sn), e.issuersn !== void 0 && typeof e.issuersn == "string" && e.issuersn.indexOf("BEGIN ") != -1 && e.issuersn.indexOf("CERTIFICATE") && (this.setCertSNByParam(e.issuersn), this.setCertIssuerByParam(e.issuersn)));
};
N(a.asn1.x509.AuthorityKeyIdentifier, a.asn1.x509.Extension);
a.asn1.x509.SubjectKeyIdentifier = function(e) {
  a.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this, e);
  var t = a, r = t.asn1, i = r.DEROctetString;
  this.asn1KID = null, this.getExtnValueHex = function() {
    return this.asn1ExtnValue = this.asn1KID, this.asn1ExtnValue.tohex();
  }, this.setKIDByParam = function(s) {
    if (s.str !== void 0 || s.hex !== void 0)
      this.asn1KID = new i(s);
    else if (typeof s == "object" && a.crypto.Util.isKey(s) || typeof s == "string" && s.indexOf("BEGIN") != -1) {
      var n = s;
      typeof s == "string" && (n = k.getKey(s));
      var h = k.getKeyID(n);
      this.asn1KID = new a.asn1.DEROctetString({ hex: h });
    }
  }, this.oid = "2.5.29.14", e !== void 0 && e.kid !== void 0 && this.setKIDByParam(e.kid);
};
N(a.asn1.x509.SubjectKeyIdentifier, a.asn1.x509.Extension);
a.asn1.x509.AuthorityInfoAccess = function(e) {
  a.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, e), this.setAccessDescriptionArray = function(t) {
    for (var r = new Array(), i = a, s = i.asn1, n = s.DERSequence, h = s.DERObjectIdentifier, u = s.x509.GeneralName, p = 0; p < t.length; p++) {
      var c, y = t[p];
      if (y.ocsp !== void 0)
        c = new n({ array: [new h({ oid: "1.3.6.1.5.5.7.48.1" }), new u({ uri: y.ocsp })] });
      else if (y.caissuer !== void 0)
        c = new n({ array: [new h({ oid: "1.3.6.1.5.5.7.48.2" }), new u({ uri: y.caissuer })] });
      else
        throw new Error("unknown AccessMethod parameter: " + JSON.stringify(y));
      r.push(c);
    }
    this.asn1ExtnValue = new n({ array: r });
  }, this.getExtnValueHex = function() {
    return this.asn1ExtnValue.tohex();
  }, this.oid = "1.3.6.1.5.5.7.1.1", e !== void 0 && e.array !== void 0 && this.setAccessDescriptionArray(e.array);
};
N(a.asn1.x509.AuthorityInfoAccess, a.asn1.x509.Extension);
a.asn1.x509.SubjectAltName = function(e) {
  a.asn1.x509.SubjectAltName.superclass.constructor.call(this, e), this.setNameArray = function(t) {
    this.asn1ExtnValue = new a.asn1.x509.GeneralNames(t);
  }, this.getExtnValueHex = function() {
    return this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.17", e !== void 0 && e.array !== void 0 && this.setNameArray(e.array);
};
N(a.asn1.x509.SubjectAltName, a.asn1.x509.Extension);
a.asn1.x509.IssuerAltName = function(e) {
  a.asn1.x509.IssuerAltName.superclass.constructor.call(this, e), this.setNameArray = function(t) {
    this.asn1ExtnValue = new a.asn1.x509.GeneralNames(t);
  }, this.getExtnValueHex = function() {
    return this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.18", e !== void 0 && e.array !== void 0 && this.setNameArray(e.array);
};
N(a.asn1.x509.IssuerAltName, a.asn1.x509.Extension);
a.asn1.x509.SubjectDirectoryAttributes = function(e) {
  a.asn1.x509.SubjectDirectoryAttributes.superclass.constructor.call(this, e);
  var t = a.asn1, r = t.DERSequence, i = t.ASN1Util.newObject, s = t.x509.OID.name2oid;
  this.params = null, this.getExtnValueHex = function() {
    for (var n = [], h = 0; h < this.params.array.length; h++) {
      var u = this.params.array[h];
      if (u.attr != null && u.array != null) {
        var p = { seq: [{ oid: u.attr }, { set: u.array }] };
        n.push(i(p));
        continue;
      }
      var c = { seq: [{ oid: "1.2.3.4" }, { set: [{ utf8str: "DE" }] }] };
      if (u.attr == "dateOfBirth")
        c.seq[0].oid = s(u.attr), c.seq[1].set[0] = { gentime: u.str };
      else if (u.attr == "placeOfBirth")
        c.seq[0].oid = s(u.attr), c.seq[1].set[0] = { utf8str: u.str };
      else if (u.attr == "gender")
        c.seq[0].oid = s(u.attr), c.seq[1].set[0] = { prnstr: u.str };
      else if (u.attr == "countryOfCitizenship")
        c.seq[0].oid = s(u.attr), c.seq[1].set[0] = { prnstr: u.str };
      else if (u.attr == "countryOfResidence")
        c.seq[0].oid = s(u.attr), c.seq[1].set[0] = { prnstr: u.str };
      else
        throw new Error("unsupported attribute: " + u.attr);
      n.push(new i(c));
    }
    var y = new r({ array: n });
    return this.asn1ExtnValue = y, this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.9", e !== void 0 && (this.params = e);
};
N(a.asn1.x509.SubjectDirectoryAttributes, a.asn1.x509.Extension);
a.asn1.x509.PrivateExtension = function(e) {
  a.asn1.x509.PrivateExtension.superclass.constructor.call(this, e);
  var t = a, r = t.lang.String.isHex, i = t.asn1, s = i.x509.OID.name2oid, n = i.ASN1Util.newObject;
  this.params = null, this.setByParam = function(h) {
    this.oid = s(h.extname), this.params = h;
  }, this.getExtnValueHex = function() {
    if (this.params.extname == null || this.params.extn == null)
      throw new Error("extname or extnhex not specified");
    var h = this.params.extn;
    if (typeof h == "string" && r(h))
      return h;
    if (typeof h == "object")
      try {
        return n(h).tohex();
      } catch {
      }
    throw new Error("unsupported extn value");
  }, e != null && this.setByParam(e);
};
N(a.asn1.x509.PrivateExtension, a.asn1.x509.Extension);
a.asn1.x509.CRL = function(e) {
  a.asn1.x509.CRL.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERSequence, s = r.DERBitString, n = r.x509, h = n.AlgorithmIdentifier, u = n.TBSCertList;
  this.params = void 0, this.setByParam = function(p) {
    this.params = p;
  }, this.sign = function() {
    var p = new u(this.params).tohex(), c = new a.crypto.Signature({ alg: this.params.sigalg });
    c.init(this.params.cakey), c.updateHex(p);
    var y = c.sign();
    this.params.sighex = y;
  }, this.getPEM = function() {
    return le(this.tohex(), "X509 CRL");
  }, this.tohex = function() {
    var p = this.params;
    if (p.tbsobj == null && (p.tbsobj = new u(p)), p.sighex == null && p.cakey != null && this.sign(), p.sighex == null)
      throw new Error("sighex or cakey parameter not defined");
    var c = [];
    c.push(p.tbsobj), c.push(new h({ name: p.sigalg })), c.push(new s({ hex: "00" + p.sighex }));
    var y = new i({ array: c });
    return y.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && (this.params = e);
};
N(a.asn1.x509.CRL, a.asn1.ASN1Object);
a.asn1.x509.TBSCertList = function(e) {
  a.asn1.x509.TBSCertList.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERInteger, s = r.DERSequence, n = r.DERTaggedObject;
  r.DERObjectIdentifier;
  var h = r.x509, u = h.AlgorithmIdentifier, p = h.Time, c = h.Extensions, y = h.X500Name;
  this.params = null, this.setByParam = function(v) {
    this.params = v;
  }, this.getRevCertSequence = function() {
    for (var v = [], o = this.params.revcert, l = 0; l < o.length; l++) {
      var f = [new i(o[l].sn), new p(o[l].date)];
      o[l].ext != null && f.push(new c(o[l].ext)), v.push(new s({ array: f }));
    }
    return new s({ array: v });
  }, this.tohex = function() {
    var v = [], o = this.params;
    if (o.version != null) {
      var l = o.version - 1, f = new i({ int: l });
      v.push(f);
    }
    if (v.push(new u({ name: o.sigalg })), v.push(new y(o.issuer)), v.push(new p(o.thisupdate)), o.nextupdate != null && v.push(new p(o.nextupdate)), o.revcert != null && v.push(this.getRevCertSequence()), o.ext != null) {
      var d = new c(o.ext);
      v.push(new n({ tag: "a0", explicit: !0, obj: d }));
    }
    var g = new s({ array: v });
    return g.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.x509.TBSCertList, a.asn1.ASN1Object);
a.asn1.x509.CRLEntry = function(e) {
  a.asn1.x509.CRLEntry.superclass.constructor.call(this);
  var t = a, r = t.asn1;
  this.setCertSerial = function(i) {
    this.sn = new r.DERInteger(i);
  }, this.setRevocationDate = function(i) {
    this.time = new r.x509.Time(i);
  }, this.tohex = function() {
    var i = new r.DERSequence({ array: [this.sn, this.time] });
    return this.TLV = i.tohex(), this.TLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && (e.time !== void 0 && this.setRevocationDate(e.time), e.sn !== void 0 && this.setCertSerial(e.sn));
};
N(a.asn1.x509.CRLEntry, a.asn1.ASN1Object);
a.asn1.x509.CRLNumber = function(e) {
  a.asn1.x509.CRLNumber.superclass.constructor.call(this, e), this.params = void 0, this.getExtnValueHex = function() {
    return this.asn1ExtnValue = new a.asn1.DERInteger(this.params.num), this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.20", e != null && (this.params = e);
};
N(a.asn1.x509.CRLNumber, a.asn1.x509.Extension);
a.asn1.x509.CRLReason = function(e) {
  a.asn1.x509.CRLReason.superclass.constructor.call(this, e), this.params = void 0, this.getExtnValueHex = function() {
    return this.asn1ExtnValue = new a.asn1.DEREnumerated(this.params.code), this.asn1ExtnValue.tohex();
  }, this.oid = "2.5.29.21", e != null && (this.params = e);
};
N(a.asn1.x509.CRLReason, a.asn1.x509.Extension);
a.asn1.x509.OCSPNonce = function(e) {
  a.asn1.x509.OCSPNonce.superclass.constructor.call(this, e), this.params = void 0, this.getExtnValueHex = function() {
    return this.asn1ExtnValue = new a.asn1.DEROctetString(this.params), this.asn1ExtnValue.tohex();
  }, this.oid = "1.3.6.1.5.5.7.48.1.2", e != null && (this.params = e);
};
N(a.asn1.x509.OCSPNonce, a.asn1.x509.Extension);
a.asn1.x509.OCSPNoCheck = function(e) {
  a.asn1.x509.OCSPNoCheck.superclass.constructor.call(this, e), this.params = void 0, this.getExtnValueHex = function() {
    return this.asn1ExtnValue = new a.asn1.DERNull(), this.asn1ExtnValue.tohex();
  }, this.oid = "1.3.6.1.5.5.7.48.1.5", e != null && (this.params = e);
};
N(a.asn1.x509.OCSPNoCheck, a.asn1.x509.Extension);
a.asn1.x509.AdobeTimeStamp = function(e) {
  a.asn1.x509.AdobeTimeStamp.superclass.constructor.call(this, e);
  var t = a, r = t.asn1, i = r.DERInteger, s = r.DERBoolean, n = r.DERSequence, h = r.x509.GeneralName;
  this.params = null, this.getExtnValueHex = function() {
    var u = this.params, p = [new i(1)];
    return p.push(new h({ uri: u.uri })), u.reqauth != null && p.push(new s(u.reqauth)), this.asn1ExtnValue = new n({ array: p }), this.asn1ExtnValue.tohex();
  }, this.oid = "1.2.840.113583.1.1.9.1", e !== void 0 && this.setByParam(e);
};
N(a.asn1.x509.AdobeTimeStamp, a.asn1.x509.Extension);
a.asn1.x509.X500Name = function(e) {
  a.asn1.x509.X500Name.superclass.constructor.call(this), this.asn1Array = [], this.paramArray = [], this.sRule = "utf8";
  var t = a, r = t.asn1, i = r.x509, s = i.RDN;
  this.setByString = function(n, h) {
    h !== void 0 && (this.sRule = h);
    var u = n.split("/");
    u.shift();
    for (var p = [], c = 0; c < u.length; c++)
      if (u[c].match(/^[^=]+=.+$/))
        p.push(u[c]);
      else {
        var y = p.length - 1;
        p[y] = p[y] + "/" + u[c];
      }
    for (var c = 0; c < p.length; c++)
      this.asn1Array.push(new s({ str: p[c], rule: this.sRule }));
  }, this.setByLdapString = function(n, h) {
    h !== void 0 && (this.sRule = h);
    var u = i.X500Name.ldapToCompat(n);
    this.setByString(u, h);
  }, this.setByObject = function(n, h) {
    h !== void 0 && (this.sRule = h);
    for (var u in n)
      if (n.hasOwnProperty(u)) {
        var p = new s({ str: u + "=" + n[u], rule: this.sRule });
        this.asn1Array ? this.asn1Array.push(p) : this.asn1Array = [p];
      }
  }, this.setByParam = function(n) {
    if (n.rule !== void 0 && (this.sRule = n.rule), n.array !== void 0)
      this.paramArray = n.array;
    else if (n.str !== void 0)
      this.setByString(n.str);
    else if (n.ldapstr !== void 0)
      this.setByLdapString(n.ldapstr);
    else if (n.hex !== void 0)
      this.hTLV = n.hex;
    else if (n.certissuer !== void 0) {
      var h = new _();
      h.readCertPEM(n.certissuer), this.hTLV = h.getIssuerHex();
    } else if (n.certsubject !== void 0) {
      var h = new _();
      h.readCertPEM(n.certsubject), this.hTLV = h.getSubjectHex();
    } else
      typeof n == "object" && n.certsubject === void 0 && n.certissuer === void 0 && this.setByObject(n);
  }, this.tohex = function() {
    if (typeof this.hTLV == "string")
      return this.hTLV;
    if (this.asn1Array.length == 0 && this.paramArray.length > 0)
      for (var n = 0; n < this.paramArray.length; n++) {
        var h = { array: this.paramArray[n] };
        this.sRule != "utf8" && (h.rule = this.sRule);
        var u = new s(h);
        this.asn1Array.push(u);
      }
    var p = new r.DERSequence({ array: this.asn1Array });
    return this.hTLV = p.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.x509.X500Name, a.asn1.ASN1Object);
a.asn1.x509.X500Name.compatToLDAP = function(e) {
  if (e.substr(0, 1) !== "/")
    throw "malformed input";
  e = e.substr(1);
  var t = e.split("/");
  return t.reverse(), t = t.map(function(r) {
    return r.replace(/,/, "\\,");
  }), t.join(",");
};
a.asn1.x509.X500Name.onelineToLDAP = function(e) {
  return a.asn1.x509.X500Name.compatToLDAP(e);
};
a.asn1.x509.X500Name.ldapToCompat = function(e) {
  for (var t = e.split(","), r = !1, i = [], s = 0; t.length > 0; s++) {
    var n = t.shift();
    if (r === !0) {
      var h = i.pop(), u = (h + "," + n).replace(/\\,/g, ",");
      i.push(u), r = !1;
    } else
      i.push(n);
    n.substr(-1, 1) === "\\" && (r = !0);
  }
  return i = i.map(function(p) {
    return p.replace("/", "\\/");
  }), i.reverse(), "/" + i.join("/");
};
a.asn1.x509.X500Name.ldapToOneline = function(e) {
  return a.asn1.x509.X500Name.ldapToCompat(e);
};
a.asn1.x509.RDN = function(e) {
  a.asn1.x509.RDN.superclass.constructor.call(this), this.asn1Array = [], this.paramArray = [], this.sRule = "utf8";
  var t = a.asn1.x509.AttributeTypeAndValue;
  this.setByParam = function(r) {
    r.rule !== void 0 && (this.sRule = r.rule), r.str !== void 0 && this.addByMultiValuedString(r.str), r.array !== void 0 && (this.paramArray = r.array);
  }, this.addByString = function(r) {
    this.asn1Array.push(new a.asn1.x509.AttributeTypeAndValue({ str: r, rule: this.sRule }));
  }, this.addByMultiValuedString = function(r) {
    for (var i = a.asn1.x509.RDN.parseString(r), s = 0; s < i.length; s++)
      this.addByString(i[s]);
  }, this.tohex = function() {
    if (this.asn1Array.length == 0 && this.paramArray.length > 0)
      for (var r = 0; r < this.paramArray.length; r++) {
        var i = this.paramArray[r];
        i.rule !== void 0 && this.sRule != "utf8" && (i.rule = this.sRule);
        var s = new t(i);
        this.asn1Array.push(s);
      }
    var n = new a.asn1.DERSet({ array: this.asn1Array });
    return this.TLV = n.tohex(), this.TLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.x509.RDN, a.asn1.ASN1Object);
a.asn1.x509.RDN.parseString = function(e) {
  for (var t = e.split(/\+/), r = !1, i = [], s = 0; t.length > 0; s++) {
    var n = t.shift();
    if (r === !0) {
      var h = i.pop(), u = (h + "+" + n).replace(/\\\+/g, "+");
      i.push(u), r = !1;
    } else
      i.push(n);
    n.substr(-1, 1) === "\\" && (r = !0);
  }
  for (var p = !1, c = [], s = 0; i.length > 0; s++) {
    var n = i.shift();
    if (p === !0) {
      var y = c.pop();
      if (n.match(/"$/)) {
        var u = (y + "+" + n).replace(/^([^=]+)="(.*)"$/, "$1=$2");
        c.push(u), p = !1;
      } else
        c.push(y + "+" + n);
    } else
      c.push(n);
    n.match(/^[^=]+="/) && (p = !0);
  }
  return c;
};
a.asn1.x509.AttributeTypeAndValue = function(e) {
  a.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this), this.sRule = "utf8", this.sType = null, this.sValue = null, this.dsType = null;
  var t = a, r = t.asn1, i = r.DERSequence, s = r.DERUTF8String, n = r.DERPrintableString, h = r.DERTeletexString, u = r.DERIA5String, p = r.DERVisibleString, c = r.DERBMPString, y = t.lang.String.isMail, v = t.lang.String.isPrintable;
  this.setByParam = function(o) {
    if (o.rule !== void 0 && (this.sRule = o.rule), o.ds !== void 0 && (this.dsType = o.ds), o.value === void 0 && o.str !== void 0) {
      var l = o.str, f = l.match(/^([^=]+)=(.+)$/);
      if (f)
        this.sType = f[1], this.sValue = f[2];
      else
        throw new Error("malformed attrTypeAndValueStr: " + attrTypeAndValueStr);
    } else
      this.sType = o.type, this.sValue = o.value;
  }, this.setByString = function(o, l) {
    l !== void 0 && (this.sRule = l);
    var f = o.match(/^([^=]+)=(.+)$/);
    if (f)
      this.setByAttrTypeAndValueStr(f[1], f[2]);
    else
      throw new Error("malformed attrTypeAndValueStr: " + attrTypeAndValueStr);
  }, this._getDsType = function() {
    var o = this.sType, l = this.sValue, f = this.sRule;
    return f === "prn" ? o == "CN" && y(l) ? "ia5" : v(l) ? "prn" : "utf8" : f === "utf8" ? o == "CN" && y(l) ? "ia5" : o == "C" ? "prn" : "utf8" : "utf8";
  }, this.setByAttrTypeAndValueStr = function(o, l, f) {
    f !== void 0 && (this.sRule = f), this.sType = o, this.sValue = l;
  }, this.getValueObj = function(o, l) {
    if (o == "utf8")
      return new s({ str: l });
    if (o == "prn")
      return new n({ str: l });
    if (o == "tel")
      return new h({ str: l });
    if (o == "ia5")
      return new u({ str: l });
    if (o == "vis")
      return new p({ str: l });
    if (o == "bmp")
      return new c({ str: l });
    throw new Error("unsupported directory string type: type=" + o + " value=" + l);
  }, this.tohex = function() {
    this.dsType == null && (this.dsType = this._getDsType());
    var o = a.asn1.x509.OID.atype2obj(this.sType), l = this.getValueObj(this.dsType, this.sValue), f = new i({ array: [o, l] });
    return this.TLV = f.tohex(), this.TLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.x509.AttributeTypeAndValue, a.asn1.ASN1Object);
a.asn1.x509.SubjectPublicKeyInfo = function(e) {
  a.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERInteger, s = r.DERBitString, n = r.DERObjectIdentifier, h = r.DERSequence, u = r.ASN1Util.newObject, p = r.x509, c = p.AlgorithmIdentifier, y = t.crypto;
  y.ECDSA, y.DSA, this.getASN1Object = function() {
    if (this.asn1AlgId == null || this.asn1SubjPKey == null)
      throw "algId and/or subjPubKey not set";
    var v = new h({ array: [this.asn1AlgId, this.asn1SubjPKey] });
    return v;
  }, this.tohex = function() {
    var v = this.getASN1Object();
    return this.hTLV = v.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setPubKey = function(v) {
    try {
      if (v instanceof q) {
        var o = u({ seq: [{ int: { bigint: v.n } }, { int: { int: v.e } }] }), l = o.tohex();
        this.asn1AlgId = new c({ name: "rsaEncryption" }), this.asn1SubjPKey = new s({ hex: "00" + l });
      }
    } catch {
    }
    try {
      if (v instanceof a.crypto.ECDSA) {
        var f = new n({ name: v.curveName });
        this.asn1AlgId = new c({ name: "ecPublicKey", asn1params: f }), this.asn1SubjPKey = new s({ hex: "00" + v.pubKeyHex });
      }
    } catch {
    }
    try {
      if (v instanceof a.crypto.DSA) {
        var f = new u({ seq: [{ int: { bigint: v.p } }, { int: { bigint: v.q } }, { int: { bigint: v.g } }] });
        this.asn1AlgId = new c({ name: "dsa", asn1params: f });
        var d = new i({ bigint: v.y });
        this.asn1SubjPKey = new s({ hex: "00" + d.tohex() });
      }
    } catch {
    }
  }, e !== void 0 && this.setPubKey(e);
};
N(a.asn1.x509.SubjectPublicKeyInfo, a.asn1.ASN1Object);
a.asn1.x509.Time = function(e) {
  a.asn1.x509.Time.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERUTCTime, s = r.DERGeneralizedTime;
  this.params = null, this.type = null, this.setTimeParams = function(n) {
    this.timeParams = n;
  }, this.setByParam = function(n) {
    this.params = n;
  }, this.getType = function(n) {
    return n.match(/^[0-9]{12}Z$/) ? "utc" : n.match(/^[0-9]{14}Z$/) ? "gen" : n.match(/^[0-9]{12}\.[0-9]+Z$/) ? "utc" : n.match(/^[0-9]{14}\.[0-9]+Z$/) ? "gen" : null;
  }, this.tohex = function() {
    var n = this.params, h = null;
    if (typeof n == "string" && (n = { str: n }), n != null && n.str && (n.type == null || n.type == null) && (n.type = this.getType(n.str)), n != null && n.str ? (n.type == "utc" && (h = new i(n.str)), n.type == "gen" && (h = new s(n.str))) : this.type == "gen" ? h = new s() : h = new i(), h == null)
      throw new Error("wrong setting for Time");
    return this.TLV = h.tohex(), this.TLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
a.asn1.x509.Time_bak = function(e) {
  a.asn1.x509.Time_bak.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERUTCTime, s = r.DERGeneralizedTime;
  this.setTimeParams = function(n) {
    this.timeParams = n;
  }, this.tohex = function() {
    var n = null;
    return this.timeParams != null ? this.type == "utc" ? n = new i(this.timeParams) : n = new s(this.timeParams) : this.type == "utc" ? n = new i() : n = new s(), this.TLV = n.tohex(), this.TLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.type = "utc", e !== void 0 && (e.type !== void 0 ? this.type = e.type : e.str !== void 0 && (e.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"), e.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")), this.timeParams = e);
};
N(a.asn1.x509.Time, a.asn1.ASN1Object);
a.asn1.x509.AlgorithmIdentifier = function(e) {
  a.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this), this.nameAlg = null, this.asn1Alg = null, this.asn1Params = null, this.paramEmpty = !1;
  var t = a, r = t.asn1, i = r.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
  if (this.tohex = function() {
    if (this.nameAlg === null && this.asn1Alg === null)
      throw new Error("algorithm not specified");
    if (this.nameAlg !== null) {
      var n = null;
      for (var h in i)
        h === this.nameAlg && (n = i[h]);
      if (n !== null)
        return this.hTLV = n, this.hTLV;
    }
    this.nameAlg !== null && this.asn1Alg === null && (this.asn1Alg = r.x509.OID.name2obj(this.nameAlg));
    var u = [this.asn1Alg];
    this.asn1Params !== null && u.push(this.asn1Params);
    var p = new r.DERSequence({ array: u });
    return this.hTLV = p.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && (e.name !== void 0 && (this.nameAlg = e.name), e.asn1params !== void 0 && (this.asn1Params = e.asn1params), e.paramempty !== void 0 && (this.paramEmpty = e.paramempty)), this.asn1Params === null && this.paramEmpty === !1 && this.nameAlg !== null) {
    this.nameAlg.name !== void 0 && (this.nameAlg = this.nameAlg.name);
    var s = this.nameAlg.toLowerCase();
    s.substr(-7, 7) !== "withdsa" && s.substr(-9, 9) !== "withecdsa" && (this.asn1Params = new r.DERNull());
  }
};
N(a.asn1.x509.AlgorithmIdentifier, a.asn1.ASN1Object);
a.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV = { SHAwithRSAandMGF1: "300d06092a864886f70d01010a3000", SHA256withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040201a11a301806092a864886f70d010108300b0609608648016503040201a203020120", SHA384withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040202a11a301806092a864886f70d010108300b0609608648016503040202a203020130", SHA512withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040203a11a301806092a864886f70d010108300b0609608648016503040203a203020140" };
a.asn1.x509.GeneralName = function(e) {
  a.asn1.x509.GeneralName.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.x509, s = i.X500Name, n = i.OtherName, h = r.DERIA5String;
  r.DERPrintableString;
  var u = r.DEROctetString, p = r.DERTaggedObject, c = r.ASN1Object, y = Error;
  this.params = null, this.setByParam = function(v) {
    this.params = v;
  }, this.tohex = function() {
    var v = this.params, o, f, l, f = !1;
    if (v.other !== void 0)
      o = "a0", l = new n(v.other);
    else if (v.rfc822 !== void 0)
      o = "81", l = new h({ str: v.rfc822 });
    else if (v.dns !== void 0)
      o = "82", l = new h({ str: v.dns });
    else if (v.dn !== void 0)
      o = "a4", f = !0, typeof v.dn == "string" ? l = new s({ str: v.dn }) : v.dn instanceof a.asn1.x509.X500Name ? l = v.dn : l = new s(v.dn);
    else if (v.ldapdn !== void 0)
      o = "a4", f = !0, l = new s({ ldapstr: v.ldapdn });
    else if (v.certissuer !== void 0 || v.certsubj !== void 0) {
      o = "a4", f = !0;
      var d, g, m = null;
      if (v.certsubj !== void 0 ? (d = !1, g = v.certsubj) : (d = !0, g = v.certissuer), g.match(/^[0-9A-Fa-f]+$/), g.indexOf("-----BEGIN ") != -1 && (m = ie(g)), m == null)
        throw new Error("certsubj/certissuer not cert");
      var F = new _();
      F.hex = m;
      var D;
      d ? D = F.getIssuerHex() : D = F.getSubjectHex(), l = new c(), l.hTLV = D;
    } else if (v.uri !== void 0)
      o = "86", l = new h({ str: v.uri });
    else if (v.ip !== void 0) {
      o = "87";
      var A, C = v.ip;
      try {
        if (C.match(/^[0-9a-f]+$/)) {
          var x = C.length;
          if (x == 8 || x == 16 || x == 32 || x == 64)
            A = C;
          else
            throw "err";
        } else
          A = bt(C);
      } catch (w) {
        throw new y("malformed IP address: " + v.ip + ":" + w.message);
      }
      l = new u({ hex: A });
    } else
      throw new y("improper params");
    var E = new p({ tag: o, explicit: f, obj: l });
    return E.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.x509.GeneralName, a.asn1.ASN1Object);
a.asn1.x509.GeneralNames = function(e) {
  a.asn1.x509.GeneralNames.superclass.constructor.call(this);
  var t = a, r = t.asn1;
  this.setByParamArray = function(i) {
    for (var s = 0; s < i.length; s++) {
      var n = new r.x509.GeneralName(i[s]);
      this.asn1Array.push(n);
    }
  }, this.tohex = function() {
    var i = new r.DERSequence({ array: this.asn1Array });
    return i.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.asn1Array = new Array(), typeof e < "u" && this.setByParamArray(e);
};
N(a.asn1.x509.GeneralNames, a.asn1.ASN1Object);
a.asn1.x509.OtherName = function(e) {
  a.asn1.x509.OtherName.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DERObjectIdentifier, s = r.DERSequence, n = r.ASN1Util.newObject;
  this.params = null, this.setByParam = function(h) {
    this.params = h;
  }, this.tohex = function() {
    var h = this.params;
    if (h.oid == null || h.value == null)
      throw new Error("oid or value not specified");
    var u = new i({ oid: h.oid }), p = n({ tag: { tag: "a0", explicit: !0, obj: h.value } }), c = new s({ array: [u, p] });
    return c.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.x509.OtherName, a.asn1.ASN1Object);
a.asn1.x509.OID = new function() {
  var e = a.asn1.DERObjectIdentifier;
  this.name2oidList = { "aes128-CBC": "2.16.840.1.101.3.4.1.2", "aes256-CBC": "2.16.840.1.101.3.4.1.42", sha1: "1.3.14.3.2.26", sha256: "2.16.840.1.101.3.4.2.1", sha384: "2.16.840.1.101.3.4.2.2", sha512: "2.16.840.1.101.3.4.2.3", sha224: "2.16.840.1.101.3.4.2.4", md5: "1.2.840.113549.2.5", md2: "1.3.14.7.2.2.1", ripemd160: "1.3.36.3.2.1", hmacWithSHA1: "1.2.840.113549.2.7", hmacWithSHA224: "1.2.840.113549.2.8", hmacWithSHA256: "1.2.840.113549.2.9", hmacWithSHA384: "1.2.840.113549.2.10", hmacWithSHA512: "1.2.840.113549.2.11", MD2withRSA: "1.2.840.113549.1.1.2", MD4withRSA: "1.2.840.113549.1.1.3", MD5withRSA: "1.2.840.113549.1.1.4", SHA1withRSA: "1.2.840.113549.1.1.5", "pkcs1-MGF": "1.2.840.113549.1.1.8", rsaPSS: "1.2.840.113549.1.1.10", SHA224withRSA: "1.2.840.113549.1.1.14", SHA256withRSA: "1.2.840.113549.1.1.11", SHA384withRSA: "1.2.840.113549.1.1.12", SHA512withRSA: "1.2.840.113549.1.1.13", SHA1withECDSA: "1.2.840.10045.4.1", SHA224withECDSA: "1.2.840.10045.4.3.1", SHA256withECDSA: "1.2.840.10045.4.3.2", SHA384withECDSA: "1.2.840.10045.4.3.3", SHA512withECDSA: "1.2.840.10045.4.3.4", dsa: "1.2.840.10040.4.1", SHA1withDSA: "1.2.840.10040.4.3", SHA224withDSA: "2.16.840.1.101.3.4.3.1", SHA256withDSA: "2.16.840.1.101.3.4.3.2", rsaEncryption: "1.2.840.113549.1.1.1", commonName: "2.5.4.3", countryName: "2.5.4.6", localityName: "2.5.4.7", stateOrProvinceName: "2.5.4.8", streetAddress: "2.5.4.9", organizationName: "2.5.4.10", organizationalUnitName: "2.5.4.11", domainComponent: "0.9.2342.19200300.100.1.25", userId: "0.9.2342.19200300.100.1.1", surname: "2.5.4.4", givenName: "2.5.4.42", title: "2.5.4.12", distinguishedName: "2.5.4.49", emailAddress: "1.2.840.113549.1.9.1", description: "2.5.4.13", businessCategory: "2.5.4.15", postalCode: "2.5.4.17", uniqueIdentifier: "2.5.4.45", organizationIdentifier: "2.5.4.97", jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1", jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2", jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3", subjectDirectoryAttributes: "2.5.29.9", subjectKeyIdentifier: "2.5.29.14", keyUsage: "2.5.29.15", subjectAltName: "2.5.29.17", issuerAltName: "2.5.29.18", basicConstraints: "2.5.29.19", cRLNumber: "2.5.29.20", cRLReason: "2.5.29.21", nameConstraints: "2.5.29.30", cRLDistributionPoints: "2.5.29.31", certificatePolicies: "2.5.29.32", anyPolicy: "2.5.29.32.0", policyMappings: "2.5.29.33", authorityKeyIdentifier: "2.5.29.35", policyConstraints: "2.5.29.36", extKeyUsage: "2.5.29.37", inhibitAnyPolicy: "2.5.29.54", authorityInfoAccess: "1.3.6.1.5.5.7.1.1", ocsp: "1.3.6.1.5.5.7.48.1", ocspBasic: "1.3.6.1.5.5.7.48.1.1", ocspNonce: "1.3.6.1.5.5.7.48.1.2", ocspNoCheck: "1.3.6.1.5.5.7.48.1.5", caIssuers: "1.3.6.1.5.5.7.48.2", anyExtendedKeyUsage: "2.5.29.37.0", serverAuth: "1.3.6.1.5.5.7.3.1", clientAuth: "1.3.6.1.5.5.7.3.2", codeSigning: "1.3.6.1.5.5.7.3.3", emailProtection: "1.3.6.1.5.5.7.3.4", timeStamping: "1.3.6.1.5.5.7.3.8", ocspSigning: "1.3.6.1.5.5.7.3.9", smtpUTF8Mailbox: "1.3.6.1.5.5.7.8.9", dateOfBirth: "1.3.6.1.5.5.7.9.1", placeOfBirth: "1.3.6.1.5.5.7.9.2", gender: "1.3.6.1.5.5.7.9.3", countryOfCitizenship: "1.3.6.1.5.5.7.9.4", countryOfResidence: "1.3.6.1.5.5.7.9.5", ecPublicKey: "1.2.840.10045.2.1", "P-256": "1.2.840.10045.3.1.7", secp256r1: "1.2.840.10045.3.1.7", secp256k1: "1.3.132.0.10", secp384r1: "1.3.132.0.34", secp521r1: "1.3.132.0.35", pkcs5PBES2: "1.2.840.113549.1.5.13", pkcs5PBKDF2: "1.2.840.113549.1.5.12", "des-EDE3-CBC": "1.2.840.113549.3.7", data: "1.2.840.113549.1.7.1", "signed-data": "1.2.840.113549.1.7.2", "enveloped-data": "1.2.840.113549.1.7.3", "digested-data": "1.2.840.113549.1.7.5", "encrypted-data": "1.2.840.113549.1.7.6", "authenticated-data": "1.2.840.113549.1.9.16.1.2", tstinfo: "1.2.840.113549.1.9.16.1.4", signingCertificate: "1.2.840.113549.1.9.16.2.12", timeStampToken: "1.2.840.113549.1.9.16.2.14", signaturePolicyIdentifier: "1.2.840.113549.1.9.16.2.15", etsArchiveTimeStamp: "1.2.840.113549.1.9.16.2.27", signingCertificateV2: "1.2.840.113549.1.9.16.2.47", etsArchiveTimeStampV2: "1.2.840.113549.1.9.16.2.48", extensionRequest: "1.2.840.113549.1.9.14", contentType: "1.2.840.113549.1.9.3", messageDigest: "1.2.840.113549.1.9.4", signingTime: "1.2.840.113549.1.9.5", counterSignature: "1.2.840.113549.1.9.6", archiveTimeStampV3: "0.4.0.1733.2.4", pdfRevocationInfoArchival: "1.2.840.113583.1.1.8", adobeTimeStamp: "1.2.840.113583.1.1.9.1", smimeMailboxLegacy: "2.23.140.1.5.1.1", smimeMailboxMulti: "2.23.140.1.5.1.2", smimeMailboxStrict: "2.23.140.1.5.1.3", smimeOrganizationLegacy: "2.23.140.1.5.2.1", smimeOrganizationMulti: "2.23.140.1.5.2.2", smimeOrganizationStrict: "2.23.140.1.5.2.3", smimeSponsorLegacy: "2.23.140.1.5.3.1", smimeSponsorMulti: "2.23.140.1.5.3.2", smimeSponsorStrict: "2.23.140.1.5.3.3", smimeIndividualLegacy: "2.23.140.1.5.4.1", smimeIndividualMulti: "2.23.140.1.5.4.2", smimeIndividualStrict: "2.23.140.1.5.4.3" }, this.atype2oidList = { CN: "2.5.4.3", L: "2.5.4.7", ST: "2.5.4.8", O: "2.5.4.10", OU: "2.5.4.11", C: "2.5.4.6", STREET: "2.5.4.9", DC: "0.9.2342.19200300.100.1.25", UID: "0.9.2342.19200300.100.1.1", SN: "2.5.4.4", T: "2.5.4.12", GN: "2.5.4.42", DN: "2.5.4.49", E: "1.2.840.113549.1.9.1", description: "2.5.4.13", businessCategory: "2.5.4.15", postalCode: "2.5.4.17", serialNumber: "2.5.4.5", uniqueIdentifier: "2.5.4.45", organizationIdentifier: "2.5.4.97", jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1", jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2", jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3" }, this.objCache = {}, this.name2obj = function(t) {
    if (typeof this.objCache[t] < "u")
      return this.objCache[t];
    if (typeof this.name2oidList[t] > "u")
      throw "Name of ObjectIdentifier not defined: " + t;
    var r = this.name2oidList[t], i = new e({ oid: r });
    return this.objCache[t] = i, i;
  }, this.atype2obj = function(t) {
    if (this.objCache[t] !== void 0)
      return this.objCache[t];
    var r;
    if (t.match(/^\d+\.\d+\.[0-9.]+$/))
      r = t;
    else if (this.atype2oidList[t] !== void 0)
      r = this.atype2oidList[t];
    else if (this.name2oidList[t] !== void 0)
      r = this.name2oidList[t];
    else
      throw new Error("AttributeType name undefined: " + t);
    var i = new e({ oid: r });
    return this.objCache[t] = i, i;
  }, this.registerOIDs = function(t) {
    if (this.checkOIDs(t))
      for (var r in t)
        this.name2oidList[r] = t[r];
  }, this.checkOIDs = function(t) {
    try {
      var r = Object.keys(t);
      return r.length == 0 ? !1 : (r.map(function(i, s, n) {
        var h = this[i];
        if (!h.match(/^[0-2]\.[0-9.]+$/))
          throw new Error("value is not OID");
      }, t), !0);
    } catch {
      return !1;
    }
  };
}();
a.asn1.x509.OID.oid2name = function(e) {
  var t = a.asn1.x509.OID.name2oidList;
  for (var r in t)
    if (t[r] == e)
      return r;
  return "";
};
a.asn1.x509.OID.oid2atype = function(e) {
  var t = a.asn1.x509.OID.atype2oidList;
  for (var r in t)
    if (t[r] == e)
      return r;
  return e;
};
a.asn1.x509.OID.name2oid = function(e) {
  if (e.match(/^[0-9.]+$/))
    return e;
  var t = a.asn1.x509.OID.name2oidList;
  return t[e] === void 0 ? "" : t[e];
};
a.asn1.x509.X509Util = {};
a.asn1.x509.X509Util.newCertPEM = function(e) {
  var t = a.asn1.x509;
  t.TBSCertificate;
  var r = t.Certificate, i = new r(e);
  return i.getPEM();
};
(typeof a > "u" || !a) && (a = {});
(typeof a.asn1 > "u" || !a.asn1) && (a.asn1 = {});
(typeof a.asn1.cms > "u" || !a.asn1.cms) && (a.asn1.cms = {});
a.asn1.cms.Attribute = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERSequence, n = i.DERSet, h = i.DERObjectIdentifier;
  this.params = null, this.typeOid = null, this.setByParam = function(u) {
    this.params = u;
  }, this.getValueArray = function() {
    throw new t("not yet implemented abstract");
  }, this.tohex = function() {
    var u = new h({ oid: this.typeOid }), p = new n({ array: this.getValueArray() }), c = new s({ array: [u, p] });
    return c.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  };
};
N(a.asn1.cms.Attribute, a.asn1.ASN1Object);
a.asn1.cms.ContentType = function(e) {
  var t = a, r = t.asn1;
  r.cms.ContentType.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.3", this.getValueArray = function() {
    var i = new r.DERObjectIdentifier(this.params.type);
    return [i];
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.ContentType, a.asn1.cms.Attribute);
a.asn1.cms.MessageDigest = function(e) {
  var t = a, r = t.asn1, i = r.DEROctetString, s = r.cms;
  s.MessageDigest.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.4", this.getValueArray = function() {
    var n = new i(this.params);
    return [n];
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.MessageDigest, a.asn1.cms.Attribute);
a.asn1.cms.SigningTime = function(e) {
  var t = a, r = t.asn1;
  r.cms.SigningTime.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.5", this.getValueArray = function() {
    var i = new r.x509.Time(this.params);
    return [i];
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.SigningTime, a.asn1.cms.Attribute);
a.asn1.cms.SigningCertificate = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERSequence, n = i.cms, h = n.ESSCertID;
  r.crypto, n.SigningCertificate.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.12", this.getValueArray = function() {
    if (this.params == null || this.params == null || this.params.array == null)
      throw new t("parameter 'array' not specified");
    for (var u = this.params.array, p = [], c = 0; c < u.length; c++) {
      var y = u[c];
      e.hasis == !1 && typeof y == "string" && (y.indexOf("-----BEGIN") != -1 || V.isASN1HEX(y)) && (y = { cert: y }), y.hasis != !1 && e.hasis == !1 && (y.hasis = !1), p.push(new h(y));
    }
    var v = new s({ array: p }), o = new s({ array: [v] });
    return [o];
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.SigningCertificate, a.asn1.cms.Attribute);
a.asn1.cms.ESSCertID = function(e) {
  a.asn1.cms.ESSCertID.superclass.constructor.call(this);
  var t = Error, r = a, i = r.asn1, s = i.DEROctetString, n = i.DERSequence, h = i.cms.IssuerSerial;
  this.params = null, this.getCertHash = function(u, p) {
    if (u.hash != null)
      return u.hash;
    if (typeof u == "string" && u.indexOf("-----BEGIN") == -1 && !V.isASN1HEX(u))
      return u;
    var c;
    if (typeof u == "string")
      c = u;
    else if (u.cert != null)
      c = u.cert;
    else
      throw new t("hash nor cert unspecified");
    var y;
    c.indexOf("-----BEGIN") != -1 ? y = ie(c) : y = c, typeof u == "string" && (u.indexOf("-----BEGIN") != -1 ? y = ie(u) : V.isASN1HEX(u) && (y = u));
    var v;
    if (u.alg != null)
      v = u.alg;
    else if (p != null)
      v = p;
    else
      throw new t("hash alg unspecified");
    return r.crypto.Util.hashHex(y, v);
  }, this.tohex = function() {
    var u = this.params, p = this.getCertHash(u, "sha1"), c = [];
    c.push(new s({ hex: p })), (typeof u == "string" && u.indexOf("-----BEGIN") != -1 || u.cert != null && u.hasis != !1 || u.issuer != null && u.serial != null) && c.push(new h(u));
    var y = new n({ array: c });
    return y.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.ESSCertID, a.asn1.ASN1Object);
a.asn1.cms.SigningCertificateV2 = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERSequence;
  i.x509;
  var n = i.cms, h = n.ESSCertIDv2;
  r.crypto, n.SigningCertificateV2.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.47", this.getValueArray = function() {
    if (this.params == null || this.params == null || this.params.array == null)
      throw new t("parameter 'array' not specified");
    for (var u = this.params.array, p = [], c = 0; c < u.length; c++) {
      var y = u[c];
      (e.alg != null || e.hasis == !1) && typeof y == "string" && (y.indexOf("-----BEGIN") != -1 || V.isASN1HEX(y)) && (y = { cert: y }), y.alg == null && e.alg != null && (y.alg = e.alg), y.hasis != !1 && e.hasis == !1 && (y.hasis = !1), p.push(new h(y));
    }
    var v = new s({ array: p }), o = new s({ array: [v] });
    return [o];
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.SigningCertificateV2, a.asn1.cms.Attribute);
a.asn1.cms.ESSCertIDv2 = function(e) {
  a.asn1.cms.ESSCertIDv2.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.DEROctetString, s = r.DERSequence, n = r.cms.IssuerSerial, h = r.x509.AlgorithmIdentifier;
  this.params = null, this.tohex = function() {
    var u = this.params, p = this.getCertHash(u, "sha256"), c = [];
    u.alg != null && u.alg != "sha256" && c.push(new h({ name: u.alg })), c.push(new i({ hex: p })), (typeof u == "string" && u.indexOf("-----BEGIN") != -1 || u.cert != null && u.hasis != !1 || u.issuer != null && u.serial != null) && c.push(new n(u));
    var y = new s({ array: c });
    return y.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.ESSCertIDv2, a.asn1.cms.ESSCertID);
a.asn1.cms.IssuerSerial = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERInteger, n = i.DERSequence, h = i.cms, u = i.x509, p = u.GeneralNames, c = _;
  h.IssuerSerial.superclass.constructor.call(this), this.setByParam = function(y) {
    this.params = y;
  }, this.tohex = function() {
    var y = this.params, v, o;
    if (typeof y == "string" && y.indexOf("-----BEGIN") != -1 || y.cert != null) {
      var l;
      y.cert != null ? l = y.cert : l = y;
      var f = new c();
      f.readCertPEM(l), v = f.getIssuer(), o = { hex: f.getSerialNumberHex() };
    } else if (y.issuer != null && y.serial)
      v = y.issuer, o = y.serial;
    else
      throw new t("cert or issuer and serial parameter not specified");
    var d = new p([{ dn: v }]), g = new s(o), m = new n({ array: [d, g] });
    return m.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.IssuerSerial, a.asn1.ASN1Object);
a.asn1.cms.SignerIdentifier = function(e) {
  var t = a, r = t.asn1;
  r.DERInteger, r.DERSequence;
  var i = r.cms, s = i.IssuerAndSerialNumber, n = i.SubjectKeyIdentifier, h = r.x509;
  h.X500Name, i.SignerIdentifier.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var u = this.params;
    if (u.type == "isssn") {
      var p = new s(u);
      return p.tohex();
    } else if (u.type == "skid") {
      var c = new n(u);
      return c.tohex();
    } else
      throw new Error("wrong property for isssn or skid");
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.SignerIdentifier, a.asn1.ASN1Object);
a.asn1.cms.IssuerAndSerialNumber = function(e) {
  var t = a, r = t.asn1, i = r.DERInteger, s = r.DERSequence, n = r.cms, h = r.x509, u = h.X500Name, p = _, c = Error;
  n.IssuerAndSerialNumber.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var y = this.params, v, o;
    if (typeof y == "string" && y.indexOf("-----BEGIN") != -1 || y.cert != null) {
      var l;
      y.cert != null ? l = y.cert : l = y;
      var f = new p();
      f.readCertPEM(l), v = f.getIssuer(), o = { hex: f.getSerialNumberHex() };
    } else if (y.issuer != null && y.serial)
      v = y.issuer, o = y.serial;
    else
      throw new c("cert or issuer and serial parameter not specified");
    var d = new u(v), g = new i(o), m = new s({ array: [d, g] });
    return m.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setByParam = function(y) {
    this.params = y;
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.IssuerAndSerialNumber, a.asn1.ASN1Object);
a.asn1.cms.SubjectKeyIdentifier = function(e) {
  var t = a, r = t.asn1;
  r.DERInteger, r.DERSequence;
  var i = r.ASN1Util.newObject, s = r.cms;
  s.IssuerAndSerialName, s.SubjectKeyIdentifier;
  var n = r.x509;
  n.X500Name;
  var h = _, u = Error;
  s.SubjectKeyIdentifier.superclass.constructor.call(this), this.tohex = function() {
    var p = this.params;
    if (p.cert == null && p.skid == null)
      throw new u("property cert nor skid undefined");
    var c;
    if (p.cert != null) {
      var y = new h(p.cert), v = y.getExtSubjectKeyIdentifier();
      c = v.kid.hex;
    } else
      p.skid != null && (c = p.skid);
    var o = i({ tag: { tage: "a0", obj: { octstr: { hex: c } } } });
    return o.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.SubjectKeyIdentifier, a.asn1.ASN1Object);
a.asn1.cms.AttributeList = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERSet, n = i.cms;
  n.AttributeList.superclass.constructor.call(this), this.params = null, this.hTLV = null, this.setByParam = function(h) {
    this.params = h;
  }, this.tohex = function() {
    var h = this.params;
    if (this.hTLV != null)
      return this.hTLV;
    var u = !0;
    h.sortflag != null && (u = h.sortflag);
    for (var p = h.array, c = [], y = 0; y < p.length; y++) {
      var v = p[y], o = v.attr;
      if (o == "contentType")
        c.push(new n.ContentType(v));
      else if (o == "messageDigest")
        c.push(new n.MessageDigest(v));
      else if (o == "signingTime")
        c.push(new n.SigningTime(v));
      else if (o == "signingCertificate")
        c.push(new n.SigningCertificate(v));
      else if (o == "signingCertificateV2")
        c.push(new n.SigningCertificateV2(v));
      else if (o == "signaturePolicyIdentifier")
        c.push(new a.asn1.cades.SignaturePolicyIdentifier(v));
      else if (o == "signatureTimeStamp" || o == "timeStampToken")
        c.push(new a.asn1.cades.SignatureTimeStamp(v));
      else
        throw new t("unknown attr: " + o);
    }
    var l = new s({ array: c, sortflag: u });
    return this.hTLV = l.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.AttributeList, a.asn1.ASN1Object);
a.asn1.cms.SignerInfo = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERInteger, n = i.DEROctetString, h = i.DERSequence, u = i.DERTaggedObject, p = i.cms, c = p.SignerIdentifier, y = p.AttributeList;
  p.ContentType, p.EncapsulatedContentInfo, p.MessageDigest, p.SignedData;
  var v = i.x509, o = v.AlgorithmIdentifier, l = r.crypto, f = k;
  p.SignerInfo.superclass.constructor.call(this), this.params = null, this.sign = function() {
    var d = this.params, g = d.sigalg, m = new y(d.sattrs).tohex(), F = f.getKey(d.signkey), D = new l.Signature({ alg: g });
    D.init(F), D.updateHex(m);
    var A = D.sign();
    d.sighex = A;
  }, this.tohex = function() {
    var d = this.params, g = [];
    if (g.push(new s({ int: d.version })), g.push(new c(d.id)), g.push(new o({ name: d.hashalg })), d.sattrs != null) {
      var m = new y(d.sattrs);
      try {
        g.push(new u({ tag: "a0", explicit: !1, obj: m }));
      } catch (D) {
        throw new t("si sattr error: " + D);
      }
    }
    if (d.sigalgfield != null ? g.push(new o({ name: d.sigalgfield })) : g.push(new o({ name: d.sigalg })), d.sighex == null && d.signkey != null && this.sign(), g.push(new n({ hex: d.sighex })), d.uattrs != null) {
      var m = new y(d.uattrs);
      try {
        g.push(new u({ tag: "a1", explicit: !1, obj: m }));
      } catch (A) {
        throw new t("si uattr error: " + A);
      }
    }
    var F = new h({ array: g });
    return F.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.SignerInfo, a.asn1.ASN1Object);
a.asn1.cms.EncapsulatedContentInfo = function(e) {
  var t = a, r = t.asn1, i = r.DERTaggedObject, s = r.DERSequence, n = r.DERObjectIdentifier, h = r.DEROctetString, u = r.cms;
  u.EncapsulatedContentInfo.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var p = this.params, c = [];
    if (c.push(new n(p.type)), p.content != null && (p.content.hex != null || p.content.str != null) && p.isDetached != !0) {
      var y = new h(p.content), v = new i({ tag: "a0", explicit: !0, obj: y });
      c.push(v);
    }
    var o = new s({ array: c });
    return o.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setByParam = function(p) {
    this.params = p;
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.EncapsulatedContentInfo, a.asn1.ASN1Object);
a.asn1.cms.ContentInfo = function(e) {
  var t = a, r = t.asn1, i = r.DERTaggedObject, s = r.DERSequence, n = r.DERObjectIdentifier, h = r.x509;
  h.OID.name2obj, a.asn1.cms.ContentInfo.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var u = this.params, p = [];
    p.push(new n(u.type));
    var c = new i({ tag: "a0", explicit: !0, obj: u.obj });
    p.push(c);
    var y = new s({ array: p });
    return y.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setByParam = function(u) {
    this.params = u;
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.ContentInfo, a.asn1.ASN1Object);
a.asn1.cms.SignedData = function(e) {
  var t = a, r = t.asn1;
  r.ASN1Object;
  var i = r.DERInteger, s = r.DERSet, n = r.DERSequence;
  r.DERTaggedObject;
  var h = r.cms, u = h.EncapsulatedContentInfo, p = h.SignerInfo, c = h.ContentInfo, y = h.CertificateSet, v = h.RevocationInfoChoices, o = r.x509, l = o.AlgorithmIdentifier;
  a.asn1.cms.SignedData.superclass.constructor.call(this), this.params = null, this.checkAndFixParam = function() {
    var f = this.params;
    this._setDigestAlgs(f), this._setContentTypeByEContent(f), this._setMessageDigestByEContent(f), this._setSignerInfoVersion(f), this._setSignedDataVersion(f);
  }, this._setDigestAlgs = function(f) {
    for (var d = {}, g = f.sinfos, m = 0; m < g.length; m++) {
      var F = g[m];
      d[F.hashalg] = 1;
    }
    f.hashalgs = Object.keys(d).sort();
  }, this._setContentTypeByEContent = function(f) {
    for (var d = f.econtent.type, g = f.sinfos, m = 0; m < g.length; m++) {
      var F = g[m], D = this._getAttrParamByName(F, "contentType");
      D.type = d;
    }
  }, this._setMessageDigestByEContent = function(f) {
    var d = f.econtent;
    f.econtent.type;
    var g = d.content.hex;
    g == null && d.type == "data" && d.content.str != null && (g = Pe(d.content.str));
    for (var m = f.sinfos, F = 0; F < m.length; F++) {
      var D = m[F], A = D.hashalg, C = this._getAttrParamByName(D, "messageDigest"), x = a.crypto.Util.hashHex(g, A);
      C.hex = x;
    }
  }, this._getAttrParamByName = function(f, d) {
    for (var g = f.sattrs.array, m = 0; m < g.length; m++)
      if (g[m].attr == d)
        return g[m];
  }, this._setSignerInfoVersion = function(f) {
    for (var d = f.sinfos, g = 0; g < d.length; g++) {
      var m = d[g], F = 1;
      m.id.type == "skid" && (F = 3), m.version = F;
    }
  }, this._setSignedDataVersion = function(f) {
    var d = this._getSignedDataVersion(f);
    f.version = d;
  }, this._getSignedDataVersion = function(f) {
    if (f.revinfos != null)
      for (var d = f.revinfos, g = 0; g < d.length; g++) {
        var m = d[g];
        if (m.ocsp != null)
          return 5;
      }
    for (var F = f.sinfos, g = 0; g < F.length; g++) {
      var D = f.sinfos[g];
      if (D.version == 3)
        return 3;
    }
    return f.econtent.type != "data" ? 3 : 1;
  }, this.tohex = function() {
    var f = this.params;
    this.getEncodedHexPrepare != null && this.getEncodedHexPrepare(), f.fixed != !0 && this.checkAndFixParam();
    var d = [];
    d.push(new i({ int: f.version }));
    for (var g = [], m = 0; m < f.hashalgs.length; m++) {
      var F = f.hashalgs[m];
      g.push(new l({ name: F }));
    }
    d.push(new s({ array: g })), d.push(new u(f.econtent)), f.certs != null && d.push(new y(f.certs)), f.revinfos != null && d.push(new v(f.revinfos));
    for (var D = [], m = 0; m < f.sinfos.length; m++) {
      var A = f.sinfos[m];
      D.push(new p(A));
    }
    d.push(new s({ array: D }));
    var C = new n({ array: d });
    return C.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.getContentInfo = function() {
    var f = new c({ type: "signed-data", obj: this });
    return f;
  }, this.getContentInfoEncodedHex = function() {
    return this.getContentInfo().tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.SignedData, a.asn1.ASN1Object);
a.asn1.cms.CertificateSet = function(e) {
  a.asn1.cms.CertificateSet.superclass.constructor.call(this);
  var t = Error, r = a.asn1, i = r.DERTaggedObject, s = r.DERSet, n = r.ASN1Object;
  this.params = null, this.tohex = function() {
    var h = this.params, u = [], p;
    if (h instanceof Array)
      p = h;
    else if (h.array != null)
      p = h.array;
    else
      throw new t("cert array not specified");
    for (var c = 0; c < p.length; c++) {
      var y = p[c], v = ie(y), o = new n();
      o.hTLV = v, u.push(o);
    }
    var l = { array: u };
    h.sortflag == !1 && (l.sortflag = !1);
    var f = new s(l), d = new i({ tag: "a0", explicit: !1, obj: f });
    return d.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.CertificateSet, a.asn1.ASN1Object);
a.asn1.cms.RevocationInfoChoices = function(e) {
  a.asn1.cms.RevocationInfoChoices.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var t = this.params;
    if (!t instanceof Array)
      throw new Error("params is not array");
    for (var r = [], i = 0; i < t.length; i++)
      r.push(new a.asn1.cms.RevocationInfoChoice(t[i]));
    var s = a.asn1.ASN1Util.newObject({ tag: { tagi: "a1", obj: { set: r } } });
    return s.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.RevocationInfoChoices, a.asn1.ASN1Object);
a.asn1.cms.RevocationInfoChoice = function(e) {
  a.asn1.cms.RevocationInfoChoice.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var t = this.params;
    if (t.crl != null && typeof t.crl == "string") {
      var r = t.crl;
      return t.crl.indexOf("-----BEGIN") != -1 && (r = ie(t.crl)), r;
    } else if (t.ocsp != null) {
      var i = a.asn1.ASN1Util.newObject({ tag: { tagi: "a1", obj: new a.asn1.cms.OtherRevocationFormat(t) } });
      return i.tohex();
    } else
      throw new Error("property crl or ocsp undefined");
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.RevocationInfoChoice, a.asn1.ASN1Object);
a.asn1.cms.OtherRevocationFormat = function(e) {
  a.asn1.cms.OtherRevocationFormat.superclass.constructor.call(this);
  var t = Error, r = a, i = r.asn1, s = i.ASN1Util.newObject, n = r.lang.String.isHex;
  this.params = null, this.tohex = function() {
    var h = this.params;
    if (h.ocsp == null)
      throw new t("property ocsp not specified");
    if (!n(h.ocsp) || !V.isASN1HEX(h.ocsp))
      throw new t("ocsp value not ASN.1 hex string");
    var u = s({ seq: [{ oid: "1.3.6.1.5.5.7.16.2" }, { asn1: { tlv: h.ocsp } }] });
    return u.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cms.OtherRevocationFormat, a.asn1.ASN1Object);
a.asn1.cms.CMSUtil = new function() {
}();
a.asn1.cms.CMSUtil.newSignedData = function(e) {
  return new a.asn1.cms.SignedData(e);
};
a.asn1.cms.CMSUtil.verifySignedData = function(e) {
  var t = a, r = t.asn1, i = r.cms;
  i.SignerInfo, i.SignedData, i.SigningTime, i.SigningCertificate, i.SigningCertificateV2;
  var s = r.cades;
  s.SignaturePolicyIdentifier;
  var n = t.lang.String.isHex, h = V, u = h.getVbyList, p = h.getTLVbyList, c = h.getIdxbyList, y = h.getChildIdx, v = h.getTLV, o = h.oidname, l = t.crypto.Util.hashHex;
  e.cms === void 0 && n(e.cms);
  var f = e.cms, d = function(w, S) {
    for (var b, P = 3; P < 6; P++)
      if (b = c(w, 0, [1, 0, P]), b !== void 0) {
        var T = w.substr(b, 2);
        T === "a0" && (S.certsIdx = b), T === "a1" && (S.revinfosIdx = b), T === "31" && (S.signerinfosIdx = b);
      }
  }, g = function(w, S) {
    var b = S.signerinfosIdx;
    if (b !== void 0) {
      var P = y(w, b);
      S.signerInfoIdxList = P;
      for (var T = 0; T < P.length; T++) {
        var H = P[T], I = { idx: H };
        m(w, I), S.signerInfos.push(I);
      }
    }
  }, m = function(w, S) {
    var b = S.idx;
    S.signerid_issuer1 = p(w, b, [1, 0], "30"), S.signerid_serial1 = u(w, b, [1, 1], "02"), S.hashalg = o(u(w, b, [2, 0], "06"));
    var P = c(w, b, [3], "a0");
    S.idxSignedAttrs = P, F(w, S, P);
    var T = y(w, b), H = T.length;
    if (H < 6)
      throw "malformed SignerInfo";
    S.sigalg = o(u(w, b, [H - 2, 0], "06")), S.sigval = u(w, b, [H - 1], "04");
  }, F = function(w, S, b) {
    var P = y(w, b);
    S.signedAttrIdxList = P;
    for (var T = 0; T < P.length; T++) {
      var H = P[T], I = u(w, H, [0], "06"), B;
      I === "2a864886f70d010905" ? (B = W(u(w, H, [1, 0])), S.saSigningTime = B) : I === "2a864886f70d010904" && (B = u(w, H, [1, 0], "04"), S.saMessageDigest = B);
    }
  }, D = function(w, S) {
    if (u(w, 0, [0], "06") !== "2a864886f70d010702")
      return S;
    S.cmsType = "signedData", S.econtent = u(w, 0, [1, 0, 2, 1, 0]), d(w, S), S.signerInfos = [], g(w, S);
  }, A = function(w, S) {
    for (var b = S.parse.signerInfos, P = b.length, T = !0, H = 0; H < P; H++) {
      var I = b[H];
      x(w, S, I), I.isValid || (T = !1);
    }
    S.isValid = T;
  }, C = function(w, S, b, P) {
    var T = S.parse.certsIdx, H;
    if (S.certs === void 0) {
      H = [], S.certkeys = [];
      for (var I = y(w, T), B = 0; B < I.length; B++) {
        var O = v(w, I[B]), j = new _();
        j.readCertHex(O), H[B] = j, S.certkeys[B] = j.getPublicKey();
      }
      S.certs = H;
    } else
      H = S.certs;
    S.cccc = H.length, S.cccci = I.length;
    for (var B = 0; B < H.length; B++) {
      var ce = j.getIssuerHex(), Q = j.getSerialNumberHex();
      b.signerid_issuer1 === ce && b.signerid_serial1 === Q && (b.certkey_idx = B);
    }
  }, x = function(w, S, b, P) {
    b.verifyDetail = {};
    var T = b.verifyDetail, H = S.parse.econtent, I = b.hashalg, B = b.saMessageDigest;
    T.validMessageDigest = !1, l(H, I) === B && (T.validMessageDigest = !0), C(w, S, b), T.validSignatureValue = !1;
    var O = b.sigalg, j = "31" + v(w, b.idxSignedAttrs).substr(2);
    b.signedattrshex = j;
    var ce = S.certs[b.certkey_idx].getPublicKey(), Q = new a.crypto.Signature({ alg: O });
    Q.init(ce), Q.updateHex(j);
    var $ = Q.verify(b.sigval);
    T.validSignatureValue_isValid = $, $ === !0 && (T.validSignatureValue = !0), b.isValid = !1, T.validMessageDigest && T.validSignatureValue && (b.isValid = !0);
  }, E = { isValid: !1, parse: {} };
  return D(f, E.parse), A(f, E), E;
};
a.asn1.cms.CMSParser = function() {
  var e = Error, t = _, r = new t(), i = V, s = i.getV, n = i.getTLV;
  i.getIdxbyList;
  var h = i.getTLVbyList, u = i.getTLVbyListEx, p = i.getVbyList, c = i.getVbyListEx, y = i.getChildIdx;
  this.getCMSSignedData = function(v) {
    var o = h(v, 0, [1, 0]), l = this.getSignedData(o);
    return l;
  }, this.getSignedData = function(v) {
    var o = y(v, 0), l = {}, f = s(v, o[0]), d = parseInt(f, 16);
    l.version = d;
    var g = n(v, o[1]);
    l.hashalgs = this.getHashAlgArray(g);
    var m = n(v, o[2]);
    l.econtent = this.getEContent(m);
    var F = u(v, 0, ["[0]"]);
    F != null && (l.certs = this.getCertificateSet(F)), u(v, 0, ["[1]"]);
    var D = u(v, 0, [3]);
    return l.sinfos = this.getSignerInfos(D), l;
  }, this.getHashAlgArray = function(v) {
    for (var o = y(v, 0), l = new t(), f = [], d = 0; d < o.length; d++) {
      var g = n(v, o[d]), m = l.getAlgorithmIdentifierName(g);
      f.push(m);
    }
    return f;
  }, this.getEContent = function(v) {
    var o = {}, l = p(v, 0, [0]), f = p(v, 0, [1, 0]);
    return o.type = a.asn1.x509.OID.oid2name(V.hextooidstr(l)), o.content = { hex: f }, o;
  }, this.getSignerInfos = function(v) {
    for (var o = [], l = y(v, 0), f = 0; f < l.length; f++) {
      var d = n(v, l[f]), g = this.getSignerInfo(d);
      o.push(g);
    }
    return o;
  }, this.getSignerInfo = function(v) {
    var o = {}, l = y(v, 0), f = i.getInt(v, l[0], -1);
    f != -1 && (o.version = f);
    var d = n(v, l[1]), g = this.getIssuerAndSerialNumber(d);
    o.id = g;
    var m = n(v, l[2]), F = r.getAlgorithmIdentifierName(m);
    o.hashalg = F;
    var D = u(v, 0, ["[0]"]);
    if (D != null) {
      var A = this.getAttributeList(D);
      o.sattrs = A;
    }
    var C = u(v, 0, [3]), x = r.getAlgorithmIdentifierName(C);
    o.sigalg = x;
    var E = c(v, 0, [4]);
    o.sighex = E;
    var w = u(v, 0, ["[1]"]);
    if (w != null) {
      var S = this.getAttributeList(w);
      o.uattrs = S;
    }
    return o;
  }, this.getSignerIdentifier = function(v) {
    if (v.substr(0, 2) == "30")
      return this.getIssuerAndSerialNumber(v);
    throw new Error("SKID of signerIdentifier not supported");
  }, this.getIssuerAndSerialNumber = function(v) {
    var o = { type: "isssn" }, l = y(v, 0), f = n(v, l[0]);
    o.issuer = r.getX500Name(f);
    var d = s(v, l[1]);
    return o.serial = { hex: d }, o;
  }, this.getAttributeList = function(v) {
    for (var o = [], l = y(v, 0), f = 0; f < l.length; f++) {
      var d = n(v, l[f]), g = this.getAttribute(d);
      o.push(g);
    }
    return { array: o };
  }, this.getAttribute = function(v) {
    var o = {}, l = y(v, 0), f = i.getOID(v, l[0]), d = a.asn1.x509.OID.oid2name(f);
    o.attr = d;
    var g = n(v, l[1]), m = y(g, 0);
    if (m.length == 1)
      o.valhex = n(g, m[0]);
    else {
      for (var F = [], D = 0; D < m.length; D++)
        F.push(n(g, m[D]));
      o.valhex = F;
    }
    return d == "contentType" ? this.setContentType(o) : d == "messageDigest" ? this.setMessageDigest(o) : d == "signingTime" ? this.setSigningTime(o) : d == "signingCertificate" ? this.setSigningCertificate(o) : d == "signingCertificateV2" ? this.setSigningCertificateV2(o) : d == "signaturePolicyIdentifier" && this.setSignaturePolicyIdentifier(o), o;
  }, this.setContentType = function(v) {
    var o = i.getOIDName(v.valhex, 0, null);
    o != null && (v.type = o, delete v.valhex);
  }, this.setSigningTime = function(v) {
    var o = s(v.valhex, 0), l = W(o);
    v.str = l, delete v.valhex;
  }, this.setMessageDigest = function(v) {
    var o = s(v.valhex, 0);
    v.hex = o, delete v.valhex;
  }, this.setSigningCertificate = function(v) {
    var o = y(v.valhex, 0);
    if (o.length > 0) {
      for (var l = n(v.valhex, o[0]), f = y(l, 0), d = [], g = 0; g < f.length; g++) {
        var m = n(l, f[g]), F = this.getESSCertID(m);
        d.push(F);
      }
      v.array = d;
    }
    if (o.length > 1) {
      var D = n(v.valhex, o[1]);
      v.polhex = D;
    }
    delete v.valhex;
  }, this.setSignaturePolicyIdentifier = function(v) {
    var o = y(v.valhex, 0);
    if (o.length > 0) {
      var l = i.getOID(v.valhex, o[0]);
      v.oid = l;
    }
    if (o.length > 1) {
      var f = new t(), d = y(v.valhex, o[1]), g = n(v.valhex, d[0]), m = f.getAlgorithmIdentifierName(g);
      v.alg = m;
      var F = s(v.valhex, d[1]);
      v.hash = F;
    }
    delete v.valhex;
  }, this.setSigningCertificateV2 = function(v) {
    var o = y(v.valhex, 0);
    if (o.length > 0) {
      for (var l = n(v.valhex, o[0]), f = y(l, 0), d = [], g = 0; g < f.length; g++) {
        var m = n(l, f[g]), F = this.getESSCertIDv2(m);
        d.push(F);
      }
      v.array = d;
    }
    if (o.length > 1) {
      var D = n(v.valhex, o[1]);
      v.polhex = D;
    }
    delete v.valhex;
  }, this.getESSCertID = function(v) {
    var o = {}, l = y(v, 0);
    if (l.length > 0) {
      var f = s(v, l[0]);
      o.hash = f;
    }
    if (l.length > 1) {
      var d = n(v, l[1]), g = this.getIssuerSerial(d);
      g.serial != null && (o.serial = g.serial), g.issuer != null && (o.issuer = g.issuer);
    }
    return o;
  }, this.getESSCertIDv2 = function(v) {
    var o = {}, l = y(v, 0);
    if (l.length < 1 || 3 < l.length)
      throw new e("wrong number of elements");
    var f = 0;
    if (v.substr(l[0], 2) == "30") {
      var d = n(v, l[0]);
      o.alg = r.getAlgorithmIdentifierName(d), f++;
    } else
      o.alg = "sha256";
    var g = s(v, l[f]);
    if (o.hash = g, l.length > f + 1) {
      var m = n(v, l[f + 1]), F = this.getIssuerSerial(m);
      o.issuer = F.issuer, o.serial = F.serial;
    }
    return o;
  }, this.getIssuerSerial = function(v) {
    var o = {}, l = y(v, 0), f = n(v, l[0]), d = r.getGeneralNames(f), g = d[0].dn;
    o.issuer = g;
    var m = s(v, l[1]);
    return o.serial = { hex: m }, o;
  }, this.getCertificateSet = function(v) {
    for (var o = y(v, 0), l = [], f = 0; f < o.length; f++) {
      var d = n(v, o[f]);
      if (d.substr(0, 2) == "30") {
        var g = le(d, "CERTIFICATE");
        l.push(g);
      }
    }
    return { array: l, sortflag: !1 };
  };
};
(typeof a > "u" || !a) && (a = {});
(typeof a.asn1 > "u" || !a.asn1) && (a.asn1 = {});
(typeof a.asn1.tsp > "u" || !a.asn1.tsp) && (a.asn1.tsp = {});
a.asn1.tsp.TimeStampToken = function(e) {
  var t = a, r = t.asn1, i = r.tsp;
  i.TimeStampToken.superclass.constructor.call(this), this.params = null, this.getEncodedHexPrepare = function() {
    var s = new i.TSTInfo(this.params.econtent.content);
    this.params.econtent.content.hex = s.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.tsp.TimeStampToken, a.asn1.cms.SignedData);
a.asn1.tsp.TSTInfo = function(e) {
  var t = a, r = t.asn1, i = r.DERSequence, s = r.DERInteger, n = r.DERBoolean, h = r.DERGeneralizedTime, u = r.DERObjectIdentifier, p = r.DERTaggedObject, c = r.tsp, y = c.MessageImprint, v = c.Accuracy;
  r.x509.X500Name;
  var o = r.x509.GeneralName;
  if (c.TSTInfo.superclass.constructor.call(this), this.dVersion = new s({ int: 1 }), this.dPolicy = null, this.dMessageImprint = null, this.dSerial = null, this.dGenTime = null, this.dAccuracy = null, this.dOrdering = null, this.dNonce = null, this.dTsa = null, this.tohex = function() {
    var l = [this.dVersion];
    if (this.dPolicy == null)
      throw new Error("policy shall be specified.");
    if (l.push(this.dPolicy), this.dMessageImprint == null)
      throw new Error("messageImprint shall be specified.");
    if (l.push(this.dMessageImprint), this.dSerial == null)
      throw new Error("serialNumber shall be specified.");
    if (l.push(this.dSerial), this.dGenTime == null)
      throw new Error("genTime shall be specified.");
    l.push(this.dGenTime), this.dAccuracy != null && l.push(this.dAccuracy), this.dOrdering != null && l.push(this.dOrdering), this.dNonce != null && l.push(this.dNonce), this.dTsa != null && l.push(this.dTsa);
    var f = new i({ array: l });
    return this.hTLV = f.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0) {
    if (typeof e.policy == "string") {
      if (!e.policy.match(/^[0-9.]+$/))
        throw "policy shall be oid like 0.1.4.134";
      this.dPolicy = new u({ oid: e.policy });
    }
    e.messageImprint !== void 0 && (this.dMessageImprint = new y(e.messageImprint)), e.serial !== void 0 && (this.dSerial = new s(e.serial)), e.genTime !== void 0 && (this.dGenTime = new h(e.genTime)), e.accuracy !== void 0 && (this.dAccuracy = new v(e.accuracy)), e.ordering !== void 0 && e.ordering == !0 && (this.dOrdering = new n()), e.nonce !== void 0 && (this.dNonce = new s(e.nonce)), e.tsa !== void 0 && (this.dTsa = new p({ tag: "a0", explicit: !0, obj: new o({ dn: e.tsa }) }));
  }
};
N(a.asn1.tsp.TSTInfo, a.asn1.ASN1Object);
a.asn1.tsp.Accuracy = function(e) {
  var t = a, r = t.asn1, i = r.ASN1Util.newObject;
  r.tsp.Accuracy.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var s = this.params, n = [];
    return s.seconds != null && typeof s.seconds == "number" && n.push({ int: s.seconds }), s.millis != null && typeof s.millis == "number" && n.push({ tag: { tagi: "80", obj: { int: s.millis } } }), s.micros != null && typeof s.micros == "number" && n.push({ tag: { tagi: "81", obj: { int: s.micros } } }), i({ seq: n }).tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.tsp.Accuracy, a.asn1.ASN1Object);
a.asn1.tsp.MessageImprint = function(e) {
  var t = a, r = t.asn1, i = r.DERSequence, s = r.DEROctetString, n = r.x509, h = n.AlgorithmIdentifier;
  r.tsp.MessageImprint.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var u = this.params, p = new h({ name: u.alg }), c = new s({ hex: u.hash }), y = new i({ array: [p, c] });
    return y.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.tsp.MessageImprint, a.asn1.ASN1Object);
a.asn1.tsp.TimeStampReq = function(e) {
  var t = a, r = t.asn1, i = r.DERSequence, s = r.DERInteger, n = r.DERBoolean;
  r.ASN1Object;
  var h = r.DERObjectIdentifier, u = r.tsp, p = u.MessageImprint;
  u.TimeStampReq.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var c = this.params, y = [];
    y.push(new s({ int: 1 })), c.messageImprint instanceof a.asn1.ASN1Object ? y.push(c.messageImprint) : y.push(new p(c.messageImprint)), c.policy != null && y.push(new h(c.policy)), c.nonce != null && y.push(new s(c.nonce)), c.certreq == !0 && y.push(new n());
    var v = new i({ array: y });
    return v.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.tsp.TimeStampReq, a.asn1.ASN1Object);
a.asn1.tsp.TimeStampResp = function(e) {
  var t = a, r = t.asn1, i = r.DERSequence;
  r.ASN1Object;
  var s = r.tsp, n = s.PKIStatusInfo;
  s.TimeStampResp.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var h = this.params, u = [];
    if (h.econtent != null || h.tst != null)
      if (h.statusinfo != null ? u.push(new n(h.statusinfo)) : u.push(new n("granted")), h.econtent != null)
        u.push(new s.TimeStampToken(h).getContentInfo());
      else if (h.tst instanceof r.ASN1Object)
        u.push(h.tst);
      else
        throw new Error("improper member tst value");
    else if (h.statusinfo != null)
      u.push(new n(h.statusinfo));
    else
      throw new Error("parameter for token nor statusinfo not specified");
    var p = new i({ array: u });
    return p.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.tsp.TimeStampResp, a.asn1.ASN1Object);
a.asn1.tsp.PKIStatusInfo = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERSequence, n = i.tsp, h = n.PKIStatus, u = n.PKIFreeText, p = n.PKIFailureInfo;
  n.PKIStatusInfo.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var c = this.params, y = [];
    if (typeof c == "string")
      y.push(new h(c));
    else {
      if (c.status == null)
        throw new t("property 'status' unspecified");
      y.push(new h(c.status)), c.statusstr != null && y.push(new u(c.statusstr)), c.failinfo != null && y.push(new p(c.failinfo));
    }
    var v = new s({ array: y });
    return v.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.tsp.PKIStatusInfo, a.asn1.ASN1Object);
a.asn1.tsp.PKIStatus = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERInteger, n = i.tsp;
  n.PKIStatus.superclass.constructor.call(this);
  var h = { granted: 0, grantedWithMods: 1, rejection: 2, waiting: 3, revocationWarning: 4, revocationNotification: 5 };
  this.params = null, this.tohex = function() {
    var u = this.params, p;
    if (typeof u == "string")
      try {
        p = h[u];
      } catch {
        throw new t("undefined name: " + u);
      }
    else if (typeof u == "number")
      p = u;
    else
      throw new t("unsupported params");
    return new s({ int: p }).tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.tsp.PKIStatus, a.asn1.ASN1Object);
a.asn1.tsp.PKIFreeText = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERSequence, n = i.DERUTF8String, h = i.tsp;
  h.PKIFreeText.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var u = this.params;
    if (!u instanceof Array)
      throw new t("wrong params: not array");
    for (var p = [], c = 0; c < u.length; c++)
      p.push(new n({ str: u[c] }));
    var y = new s({ array: p });
    return y.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.tsp.PKIFreeText, a.asn1.ASN1Object);
a.asn1.tsp.PKIFailureInfo = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERBitString, n = i.tsp, h = n.PKIFailureInfo, u = { badAlg: 0, badRequest: 2, badDataFormat: 5, timeNotAvailable: 14, unacceptedPolicy: 15, unacceptedExtension: 16, addInfoNotAvailable: 17, systemFailure: 25 };
  h.superclass.constructor.call(this), this.params = null, this.getBinValue = function() {
    var p = this.params, c = 0;
    if (typeof p == "number" && 0 <= p && p <= 25) {
      c |= 1 << p;
      for (var y = c.toString(2), v = "", o = y.length - 1; o >= 0; o--)
        v += y[o];
      return v;
    } else {
      if (typeof p == "string" && u[p] != null)
        return rt([p], u);
      if (typeof p == "object" && p.length != null)
        return rt(p, u);
      throw new t("wrong params");
    }
  }, this.tohex = function() {
    this.params;
    var p = this.getBinValue();
    return new s({ bin: p }).tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.tsp.PKIFailureInfo, a.asn1.ASN1Object);
a.asn1.tsp.AbstractTSAAdapter = function(e) {
  this.getTSTHex = function(t, r) {
    throw "not implemented yet";
  };
};
a.asn1.tsp.SimpleTSAAdapter = function(e) {
  var t = a, r = t.asn1, i = r.tsp, s = t.crypto.Util.hashHex;
  i.SimpleTSAAdapter.superclass.constructor.call(this), this.params = null, this.serial = 0, this.getTSTHex = function(n, h) {
    var u = s(n, h);
    this.params.econtent.content.messageImprint = { alg: h, hash: u }, this.params.econtent.content.serial = { int: this.serial++ };
    var p = Math.floor(Math.random() * 1e9);
    this.params.econtent.content.nonce = { int: p };
    var c = new i.TimeStampToken(this.params);
    return c.getContentInfoEncodedHex();
  }, e !== void 0 && (this.params = e);
};
N(a.asn1.tsp.SimpleTSAAdapter, a.asn1.tsp.AbstractTSAAdapter);
a.asn1.tsp.FixedTSAAdapter = function(e) {
  var t = a, r = t.asn1, i = r.tsp, s = t.crypto.Util.hashHex;
  i.FixedTSAAdapter.superclass.constructor.call(this), this.params = null, this.getTSTHex = function(n, h) {
    var u = s(n, h);
    this.params.econtent.content.messageImprint = { alg: h, hash: u };
    var p = new i.TimeStampToken(this.params);
    return p.getContentInfoEncodedHex();
  }, e !== void 0 && (this.params = e);
};
N(a.asn1.tsp.FixedTSAAdapter, a.asn1.tsp.AbstractTSAAdapter);
a.asn1.tsp.TSPUtil = new function() {
}();
a.asn1.tsp.TSPUtil.newTimeStampToken = function(e) {
  return new a.asn1.tsp.TimeStampToken(e);
};
a.asn1.tsp.TSPUtil.parseTimeStampReq = function(e) {
  var t = new a.asn1.tsp.TSPParser();
  return t.getTimeStampReq(e);
};
a.asn1.tsp.TSPUtil.parseMessageImprint = function(e) {
  var t = new a.asn1.tsp.TSPParser();
  return t.getMessageImprint(e);
};
a.asn1.tsp.TSPParser = function() {
  var e = _, t = new e(), r = V, i = r.getV, s = r.getTLV, n = r.getIdxbyList;
  r.getTLVbyListEx;
  var h = r.getChildIdx, u = ["granted", "grantedWithMods", "rejection", "waiting", "revocationWarning", "revocationNotification"], p = { 0: "badAlg", 2: "badRequest", 5: "badDataFormat", 14: "timeNotAvailable", 15: "unacceptedPolicy", 16: "unacceptedExtension", 17: "addInfoNotAvailable", 25: "systemFailure" };
  this.getResponse = function(c) {
    var y = h(c, 0);
    if (y.length == 1)
      return this.getPKIStatusInfo(s(c, y[0]));
    if (y.length > 1) {
      var v = this.getPKIStatusInfo(s(c, y[0])), o = s(c, y[1]), l = this.getToken(o);
      return l.statusinfo = v, l;
    }
  }, this.getToken = function(c) {
    var y = new a.asn1.cms.CMSParser(), v = y.getCMSSignedData(c);
    return this.setTSTInfo(v), v;
  }, this.setTSTInfo = function(c) {
    var y = c.econtent;
    if (y.type == "tstinfo") {
      var v = y.content.hex, o = this.getTSTInfo(v);
      y.content = o;
    }
  }, this.getTSTInfo = function(c) {
    var y = {}, v = h(c, 0), o = i(c, v[1]);
    y.policy = ct(o);
    var l = s(c, v[2]);
    y.messageImprint = this.getMessageImprint(l);
    var f = i(c, v[3]);
    y.serial = { hex: f };
    var d = i(c, v[4]);
    y.genTime = { str: W(d) };
    var g = 0;
    if (v.length > 5 && c.substr(v[5], 2) == "30") {
      var m = s(c, v[5]);
      y.accuracy = this.getAccuracy(m), g++;
    }
    if (v.length > 5 + g && c.substr(v[5 + g], 2) == "01") {
      var F = i(c, v[5 + g]);
      F == "ff" && (y.ordering = !0), g++;
    }
    if (v.length > 5 + g && c.substr(v[5 + g], 2) == "02") {
      var D = i(c, v[5 + g]);
      y.nonce = { hex: D }, g++;
    }
    if (v.length > 5 + g && c.substr(v[5 + g], 2) == "a0") {
      var A = s(c, v[5 + g]);
      A = "30" + A.substr(2), pGeneralNames = t.getGeneralNames(A);
      var C = pGeneralNames[0].dn;
      y.tsa = C, g++;
    }
    if (v.length > 5 + g && c.substr(v[5 + g], 2) == "a1") {
      var x = s(c, v[5 + g]);
      x = "30" + x.substr(2);
      var E = t.getExtParamArray(x);
      y.ext = E, g++;
    }
    return y;
  }, this.getAccuracy = function(c) {
    for (var y = {}, v = h(c, 0), o = 0; o < v.length; o++) {
      var l = c.substr(v[o], 2), f = i(c, v[o]), d = parseInt(f, 16);
      l == "02" ? y.seconds = d : l == "80" ? y.millis = d : l == "81" && (y.micros = d);
    }
    return y;
  }, this.getMessageImprint = function(c) {
    if (c.substr(0, 2) != "30")
      throw new Error("head of messageImprint hex shall be x30");
    var y = {};
    h(c, 0);
    var v = n(c, 0, [0, 0]), o = i(c, v), l = r.hextooidstr(o), f = a.asn1.x509.OID.oid2name(l);
    if (f == "")
      throw new Error("hashAlg name undefined: " + l);
    var d = f, g = n(c, 0, [1]);
    return y.alg = d, y.hash = i(c, g), y;
  }, this.getPKIStatusInfo = function(c) {
    var y = {}, v = h(c, 0), o = 0;
    try {
      var l = i(c, v[0]), f = parseInt(l, 16);
      y.status = u[f];
    } catch {
    }
    if (v.length > 1 && c.substr(v[1], 2) == "30") {
      var d = s(c, v[1]);
      y.statusstr = this.getPKIFreeText(d), o++;
    }
    if (v.length > o && c.substr(v[1 + o], 2) == "03") {
      var g = s(c, v[1 + o]);
      y.failinfo = this.getPKIFailureInfo(g);
    }
    return y;
  }, this.getPKIFreeText = function(c) {
    for (var y = [], v = h(c, 0), o = 0; o < v.length; o++)
      y.push(r.getString(c, v[o]));
    return y;
  }, this.getPKIFailureInfo = function(c) {
    var y = r.getInt(c, 0);
    return p[y] != null ? p[y] : y;
  }, this.getTimeStampReq = function(c) {
    var y = {};
    y.certreq = !1;
    var v = h(c, 0);
    if (v.length < 2)
      throw new Error("TimeStampReq must have at least 2 items");
    var o = s(c, v[1]);
    y.messageImprint = a.asn1.tsp.TSPUtil.parseMessageImprint(o);
    for (var l = 2; l < v.length; l++) {
      var f = v[l], d = c.substr(f, 2);
      if (d == "06") {
        var g = i(c, f);
        y.policy = r.hextooidstr(g);
      }
      d == "02" && (y.nonce = i(c, f)), d == "01" && (y.certreq = !0);
    }
    return y;
  };
};
(typeof a > "u" || !a) && (a = {});
(typeof a.asn1 > "u" || !a.asn1) && (a.asn1 = {});
(typeof a.asn1.cades > "u" || !a.asn1.cades) && (a.asn1.cades = {});
a.asn1.cades.SignaturePolicyIdentifier = function(e) {
  var t = a, r = t.asn1, i = r.cades, s = i.SignaturePolicyId;
  i.SignaturePolicyIdentifier.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.15", this.params = null, this.getValueArray = function() {
    return [new s(this.params)];
  }, this.setByParam = function(n) {
    this.params = n;
  }, e != null && this.setByParam(e);
};
N(a.asn1.cades.SignaturePolicyIdentifier, a.asn1.cms.Attribute);
a.asn1.cades.SignaturePolicyId = function(e) {
  var t = a, r = t.asn1, i = r.DERSequence, s = r.DERObjectIdentifier, n = r.x509;
  n.AlgorithmIdentifier;
  var h = r.cades, u = h.SignaturePolicyId, p = h.OtherHashAlgAndValue;
  u.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var c = this.params, y = [];
    y.push(new s(c.oid)), y.push(new p(c));
    var v = new i({ array: y });
    return v.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setByParam = function(c) {
    this.params = c;
  }, e != null && this.setByParam(e);
};
N(a.asn1.cades.SignaturePolicyId, a.asn1.ASN1Object);
a.asn1.cades.OtherHashAlgAndValue = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERSequence, n = i.DEROctetString, h = i.x509, u = h.AlgorithmIdentifier, p = i.cades, c = p.OtherHashAlgAndValue;
  c.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var y = this.params;
    if (y.alg == null)
      throw new t("property 'alg' not specified");
    if (y.hash == null && y.cert == null)
      throw new t("property 'hash' nor 'cert' not specified");
    var v = null;
    if (y.hash != null)
      v = y.hash;
    else if (y.cert != null) {
      if (typeof y.cert != "string")
        throw new t("cert not string");
      var o = y.cert;
      y.cert.indexOf("-----BEGIN") != -1 && (o = ie(y.cert)), v = a.crypto.Util.hashHex(o, y.alg);
    }
    var l = [];
    l.push(new u({ name: y.alg })), l.push(new n({ hex: v }));
    var f = new s({ array: l });
    return f.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cades.OtherHashAlgAndValue, a.asn1.ASN1Object);
a.asn1.cades.OtherHashValue = function(e) {
  a.asn1.cades.OtherHashValue.superclass.constructor.call(this);
  var t = Error, r = a;
  r.lang.String.isHex;
  var i = r.asn1, s = i.DEROctetString;
  r.crypto.Util.hashHex, this.params = null, this.tohex = function() {
    var n = this.params;
    if (n.hash == null && n.cert == null)
      throw new t("hash or cert not specified");
    var h = null;
    if (n.hash != null)
      h = n.hash;
    else if (n.cert != null) {
      if (typeof n.cert != "string")
        throw new t("cert not string");
      var u = n.cert;
      n.cert.indexOf("-----BEGIN") != -1 && (u = ie(n.cert)), h = a.crypto.Util.hashHex(u, "sha1");
    }
    return new s({ hex: h }).tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cades.OtherHashValue, a.asn1.ASN1Object);
a.asn1.cades.SignatureTimeStamp = function(e) {
  var t = Error, r = a, i = r.lang.String.isHex, s = r.asn1, n = s.ASN1Object;
  s.x509;
  var h = s.cades;
  h.SignatureTimeStamp.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.14", this.params = null, this.getValueArray = function() {
    var u = this.params;
    if (u.tst != null)
      if (i(u.tst)) {
        var p = new n();
        return p.hTLV = u.tst, [p];
      } else {
        if (u.tst instanceof n)
          return [u.tst];
        throw new t("params.tst has wrong value");
      }
    else if (u.res != null) {
      var c = u.res;
      if (c instanceof n && (c = c.tohex()), typeof c != "string" || !i(c))
        throw new t("params.res has wrong value");
      V.getTLVbyList(c, 0, [1]);
      var p = new n();
      return p.hTLV = u.tst, [p];
    }
  }, e != null && this.setByParam(e);
};
N(a.asn1.cades.SignatureTimeStamp, a.asn1.cms.Attribute);
a.asn1.cades.CompleteCertificateRefs = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERSequence, n = i.cades, h = n.OtherCertID, u = r.lang.String.isHex;
  n.CompleteCertificateRefs.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.21", this.params = null, this.getValueArray = function() {
    for (var p = this.params, c = [], y = 0; y < p.array.length; y++) {
      var v = p.array[y];
      if (typeof v == "string")
        if (v.indexOf("-----BEGIN") != -1)
          v = { cert: v };
        else if (u(v))
          v = { hash: v };
        else
          throw new t("unsupported value: " + v);
      p.alg != null && v.alg == null && (v.alg = p.alg), p.hasis != null && v.hasis == null && (v.hasis = p.hasis);
      var o = new h(v);
      c.push(o);
    }
    var l = new s({ array: c });
    return [l];
  }, e != null && this.setByParam(e);
};
N(a.asn1.cades.CompleteCertificateRefs, a.asn1.cms.Attribute);
a.asn1.cades.OtherCertID = function(e) {
  var t = a, r = t.asn1, i = r.DERSequence, s = r.cms, n = s.IssuerSerial, h = r.cades, u = h.OtherHashValue, p = h.OtherHashAlgAndValue;
  h.OtherCertID.superclass.constructor.call(this), this.params = e, this.tohex = function() {
    var c = this.params;
    typeof c == "string" && (c.indexOf("-----BEGIN") != -1 ? c = { cert: c } : _isHex(c) && (c = { hash: c }));
    var y = [], v = null;
    if (c.alg != null ? v = new p(c) : v = new u(c), y.push(v), c.cert != null && c.hasis == !0 || c.issuer != null && c.serial != null) {
      var o = new n(c);
      y.push(o);
    }
    var l = new i({ array: y });
    return l.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cades.OtherCertID, a.asn1.ASN1Object);
a.asn1.cades.OtherHash = function(e) {
  var t = a, r = t.asn1;
  r.cms;
  var i = r.cades, s = i.OtherHashAlgAndValue, n = i.OtherHashValue;
  t.crypto.Util.hashHex;
  var h = t.lang.String.isHex;
  i.OtherHash.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var u = this.params;
    typeof u == "string" && (u.indexOf("-----BEGIN") != -1 ? u = { cert: u } : h(u) && (u = { hash: u }));
    var p = null;
    return u.alg != null ? p = new s(u) : p = new n(u), p.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e != null && this.setByParam(e);
};
N(a.asn1.cades.OtherHash, a.asn1.ASN1Object);
a.asn1.cades.CAdESUtil = new function() {
}();
a.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function(e) {
  var t = new a.asn1.cms.CMSParser(), r = t.getCMSSignedData(e);
  return r;
};
a.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function(e, t, r) {
  var i = V, s = i.getChildIdx, n = i.getTLV, h = i.getV, u = a, p = u.asn1, c = p.ASN1Object, y = p.cms, v = y.AttributeList, o = y.SignerInfo, l = {}, f = s(e, t);
  if (f.length != 6)
    throw "not supported items for SignerInfo (!=6)";
  var d = f.shift();
  l.version = n(e, d);
  var g = f.shift();
  l.si = n(e, g);
  var m = f.shift();
  l.digalg = n(e, m);
  var F = f.shift();
  l.sattrs = n(e, F);
  var D = f.shift();
  l.sigalg = n(e, D);
  var A = f.shift();
  l.sig = n(e, A), l.sigval = h(e, A);
  var C = null;
  return l.obj = new o(), C = new c(), C.hTLV = l.version, l.obj.dCMSVersion = C, C = new c(), C.hTLV = l.si, l.obj.dSignerIdentifier = C, C = new c(), C.hTLV = l.digalg, l.obj.dDigestAlgorithm = C, C = new c(), C.hTLV = l.sattrs, l.obj.dSignedAttrs = C, C = new c(), C.hTLV = l.sigalg, l.obj.dSigAlg = C, C = new c(), C.hTLV = l.sig, l.obj.dSig = C, l.obj.dUnsignedAttrs = new v(), l;
};
(typeof a.asn1.csr > "u" || !a.asn1.csr) && (a.asn1.csr = {});
a.asn1.csr.CertificationRequest = function(e) {
  var t = a, r = t.asn1, i = r.DERBitString, s = r.DERSequence, n = r.csr;
  r.x509;
  var h = n.CertificationRequestInfo;
  n.CertificationRequest.superclass.constructor.call(this), this.setByParam = function(u) {
    this.params = u;
  }, this.sign = function() {
    var u = new h(this.params).tohex(), p = new a.crypto.Signature({ alg: this.params.sigalg });
    p.init(this.params.sbjprvkey), p.updateHex(u);
    var c = p.sign();
    this.params.sighex = c;
  }, this.getPEM = function() {
    return le(this.tohex(), "CERTIFICATE REQUEST");
  }, this.tohex = function() {
    var u = this.params, p = new a.asn1.csr.CertificationRequestInfo(this.params), c = new a.asn1.x509.AlgorithmIdentifier({ name: u.sigalg });
    if (u.sighex == null && u.sbjprvkey != null && this.sign(), u.sighex == null)
      throw new Error("sighex or sbjprvkey parameter not defined");
    var y = new i({ hex: "00" + u.sighex }), v = new s({ array: [p, c, y] });
    return v.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.csr.CertificationRequest, a.asn1.ASN1Object);
a.asn1.csr.CertificationRequestInfo = function(e) {
  var t = a, r = t.asn1;
  r.DERBitString;
  var i = r.DERSequence, s = r.DERInteger, n = r.DERUTF8String, h = r.DERTaggedObject, u = r.ASN1Util.newObject, p = r.csr, c = r.x509, y = c.X500Name, v = c.Extensions, o = c.SubjectPublicKeyInfo;
  p.AttributeList, p.CertificationRequestInfo.superclass.constructor.call(this), this.params = null, this.setByParam = function(f) {
    f != null && (this.params = f);
  }, this.tohex = function() {
    var f = this.params, d = [];
    if (d.push(new s({ int: 0 })), d.push(new y(f.subject)), d.push(new o(k.getKey(f.sbjpubkey))), f.attrs != null) {
      var g = l(f.attrs), m = u({ tag: { tage: "a0", obj: g } });
      d.push(m);
    } else if (f.extreq != null) {
      var F = new v(f.extreq), m = u({ tag: { tage: "a0", obj: { seq: [{ oid: "1.2.840.113549.1.9.14" }, { set: [F] }] } } });
      d.push(m);
    } else
      d.push(new h({ tag: "a0", explicit: !1, obj: new n({ str: "" }) }));
    var D = new i({ array: d });
    return D.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  };
  function l(f) {
    for (var d = Error, g = a.asn1.x509.Extensions, m = [], F = 0; F < f.length; F++) {
      var D = f[F], A = D.attr;
      if (A == "extensionRequest") {
        var C = new g(D.ext), x = { seq: [{ oid: "1.2.840.113549.1.9.14" }, { set: [C] }] };
        m.push(x);
      } else if (A == "unstructuredName") {
        var x = { seq: [{ oid: "1.2.840.113549.1.9.2" }, { set: D.names }] };
        m.push(x);
      } else if (A == "challengePassword") {
        var x = { seq: [{ oid: "1.2.840.113549.1.9.7" }, { set: [{ utf8str: D.password }] }] };
        m.push(x);
      } else
        throw new d("unknown CSR attribute");
    }
    return { set: m };
  }
  e != null && this.setByParam(e);
};
N(a.asn1.csr.CertificationRequestInfo, a.asn1.ASN1Object);
a.asn1.csr.AttributeList = function(e) {
};
N(a.asn1.csr.AttributeList, a.asn1.ASN1Object);
a.asn1.csr.CSRUtil = new function() {
}();
a.asn1.csr.CSRUtil.newCSRPEM = function(e) {
  var t = a.asn1.csr, r = new t.CertificationRequest(e), i = r.getPEM();
  return i;
};
a.asn1.csr.CSRUtil.getParam = function(e, t) {
  var r = V, i = r.getV, s = r.getIdxbyList, n = r.getTLVbyList, h = r.getTLVbyListEx, u = r.getVbyListEx, p = function(F) {
    var D = s(F, 0, [0, 3, 0, 0], "06");
    return i(F, D) != "2a864886f70d01090e" ? null : n(F, 0, [0, 3, 0, 1, 0], "30");
  }, c = {};
  if (e.indexOf("-----BEGIN CERTIFICATE REQUEST") == -1)
    throw new Error("argument is not PEM file");
  var y = ie(e, "CERTIFICATE REQUEST");
  t && (c.tbs = n(y, 0, [0]));
  try {
    var v = h(y, 0, [0, 1]);
    if (v == "3000")
      c.subject = {};
    else {
      var d = new _();
      c.subject = d.getX500Name(v);
    }
  } catch {
  }
  var o = h(y, 0, [0, 2]), l = k.getKey(o, null, "pkcs8pub");
  c.sbjpubkey = k.getPEM(l, "PKCS8PUB");
  var f = p(y), d = new _();
  f != null && (c.extreq = d.getExtParamArray(f));
  try {
    var g = h(y, 0, [1], "30"), d = new _();
    c.sigalg = d.getAlgorithmIdentifierName(g);
  } catch {
  }
  try {
    var m = u(y, 0, [2]);
    c.sighex = m;
  } catch {
  }
  return c;
};
a.asn1.csr.CSRUtil.verifySignature = function(e) {
  try {
    var t = null;
    if (typeof e == "string" && e.indexOf("-----BEGIN CERTIFICATE REQUEST") != -1 ? t = a.asn1.csr.CSRUtil.getParam(e, !0) : typeof e == "object" && e.sbjpubkey != null && e.sigalg != null && e.sighex != null && e.tbs != null && (t = e), t == null)
      return !1;
    var r = new a.crypto.Signature({ alg: t.sigalg });
    return r.init(t.sbjpubkey), r.updateHex(t.tbs), r.verify(t.sighex);
  } catch (i) {
    return alert(i), !1;
  }
};
(typeof a > "u" || !a) && (a = {});
(typeof a.asn1 > "u" || !a.asn1) && (a.asn1 = {});
(typeof a.asn1.ocsp > "u" || !a.asn1.ocsp) && (a.asn1.ocsp = {});
a.asn1.ocsp.DEFAULT_HASH = "sha1";
a.asn1.ocsp.OCSPResponse = function(e) {
  a.asn1.ocsp.OCSPResponse.superclass.constructor.call(this), a.asn1.DEREnumerated;
  var t = a.asn1.ASN1Util.newObject, r = a.asn1.ocsp.ResponseBytes, i = ["successful", "malformedRequest", "internalError", "tryLater", "_not_used_", "sigRequired", "unauthorized"];
  this.params = null, this._getStatusCode = function() {
    var s = this.params.resstatus;
    return typeof s == "number" ? s : typeof s != "string" ? -1 : i.indexOf(s);
  }, this.setByParam = function(s) {
    this.params = s;
  }, this.tohex = function() {
    var s = this.params, n = this._getStatusCode();
    if (n == -1)
      throw new Error("responseStatus not supported: " + s.resstatus);
    if (n != 0)
      return t({ seq: [{ enum: { int: n } }] }).tohex();
    var h = new r(s);
    return t({ seq: [{ enum: { int: 0 } }, { tag: { tag: "a0", explicit: !0, obj: h } }] }).tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.ocsp.OCSPResponse, a.asn1.ASN1Object);
a.asn1.ocsp.ResponseBytes = function(e) {
  a.asn1.ocsp.ResponseBytes.superclass.constructor.call(this);
  var t = a.asn1, r = t.DERSequence, i = t.DERObjectIdentifier, s = t.DEROctetString, n = t.ocsp.BasicOCSPResponse;
  this.params = null, this.setByParam = function(h) {
    this.params = h;
  }, this.tohex = function() {
    var h = this.params;
    if (h.restype != "ocspBasic")
      throw new Error("not supported responseType: " + h.restype);
    var u = new n(h), p = [];
    p.push(new i({ name: "ocspBasic" })), p.push(new s({ hex: u.tohex() }));
    var c = new r({ array: p });
    return c.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.ocsp.ResponseBytes, a.asn1.ASN1Object);
a.asn1.ocsp.BasicOCSPResponse = function(e) {
  a.asn1.ocsp.BasicOCSPResponse.superclass.constructor.call(this);
  var t = Error, r = a.asn1, i = r.ASN1Object, s = r.DERSequence;
  r.DERGeneralizedTime;
  var n = r.DERTaggedObject, h = r.DERBitString;
  r.x509.Extensions;
  var u = r.x509.AlgorithmIdentifier, p = r.ocsp;
  p.ResponderID, _SingleResponseList = p.SingleResponseList, _ResponseData = p.ResponseData, this.params = null, this.setByParam = function(c) {
    this.params = c;
  }, this.sign = function() {
    var c = this.params, y = c.tbsresp.tohex(), v = new a.crypto.Signature({ alg: c.sigalg });
    v.init(c.reskey), v.updateHex(y), c.sighex = v.sign();
  }, this.tohex = function() {
    var c = this.params;
    c.tbsresp == null && (c.tbsresp = new _ResponseData(c)), c.sighex == null && c.reskey != null && this.sign();
    var y = [];
    if (y.push(c.tbsresp), y.push(new u({ name: c.sigalg })), y.push(new h({ hex: "00" + c.sighex })), c.certs != null && c.certs.length != null) {
      for (var v = [], o = 0; o < c.certs.length; o++) {
        var l = c.certs[o], f = null;
        if (V.isASN1HEX(l))
          f = l;
        else if (l.match(/-----BEGIN/))
          f = ie(l);
        else
          throw new t("certs[" + o + "] not hex or PEM");
        v.push(new i({ tlv: f }));
      }
      var d = new s({ array: v });
      y.push(new n({ tag: "a0", explicit: !0, obj: d }));
    }
    var g = new s({ array: y });
    return g.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.ocsp.BasicOCSPResponse, a.asn1.ASN1Object);
a.asn1.ocsp.ResponseData = function(e) {
  a.asn1.ocsp.ResponseData.superclass.constructor.call(this);
  var t = a.asn1, r = t.DERSequence, i = t.DERGeneralizedTime, s = t.DERTaggedObject, n = t.x509.Extensions, h = t.ocsp, u = h.ResponderID;
  _SingleResponseList = h.SingleResponseList, this.params = null, this.tohex = function() {
    var p = this.params;
    p.respid != null, p.prodat != null, p.array != null;
    var c = [];
    if (c.push(new u(p.respid)), c.push(new i(p.prodat)), c.push(new _SingleResponseList(p.array)), p.ext != null) {
      var y = new n(p.ext);
      c.push(new s({ tag: "a1", explicit: !0, obj: y }));
    }
    var v = new r({ array: c });
    return v.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setByParam = function(p) {
    this.params = p;
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.ocsp.ResponseData, a.asn1.ASN1Object);
a.asn1.ocsp.ResponderID = function(e) {
  a.asn1.ocsp.ResponderID.superclass.constructor.call(this);
  var t = a, r = t.asn1, i = r.ASN1Util.newObject, s = r.x509.X500Name, n = t.lang.String.isHex, h = Error;
  this.params = null, this.tohex = function() {
    var u = this.params;
    if (u.key != null) {
      var p = null;
      if (typeof u.key == "string") {
        if (n(u.key) && (p = u.key), u.key.match(/-----BEGIN CERTIFICATE/)) {
          var c = new _(u.key), y = c.getExtSubjectKeyIdentifier();
          y != null && (p = y.kid.hex);
        }
      } else if (u.key instanceof _) {
        var y = u.key.getExtSubjectKeyIdentifier();
        y != null && (p = y.kid.hex);
      }
      if (p == null)
        throw new h("wrong key member value");
      var v = i({ tag: { tag: "a2", explicit: !0, obj: { octstr: { hex: p } } } });
      return v.tohex();
    } else if (u.name != null) {
      var o = null;
      if (typeof u.name == "string" && u.name.match(/-----BEGIN CERTIFICATE/)) {
        var c = new _(u.name);
        o = c.getSubject();
      } else
        u.name instanceof _ ? o = u.name.getSubject() : typeof u.name == "object" && (u.name.array != null || u.name.str != null) && (o = u.name);
      if (o == null)
        throw new h("wrong name member value");
      var v = i({ tag: { tag: "a1", explicit: !0, obj: new s(o) } });
      return v.tohex();
    }
    throw new h("key or name not specified");
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setByParam = function(u) {
    this.params = u;
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.ocsp.ResponderID, a.asn1.ASN1Object);
a.asn1.ocsp.SingleResponseList = function(e) {
  a.asn1.ocsp.SingleResponseList.superclass.constructor.call(this);
  var t = a.asn1, r = t.DERSequence, i = t.ocsp.SingleResponse;
  this.params = null, this.tohex = function() {
    var s = this.params;
    if (typeof s != "object" || s.length == null)
      throw new Error("params not specified properly");
    for (var n = [], h = 0; h < s.length; h++)
      n.push(new i(s[h]));
    var u = new r({ array: n });
    return u.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setByParam = function(s) {
    this.params = s;
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.ocsp.SingleResponseList, a.asn1.ASN1Object);
a.asn1.ocsp.SingleResponse = function(e) {
  var t = Error, r = a, i = r.asn1, s = i.DERSequence, n = i.DERGeneralizedTime, h = i.DERTaggedObject, u = i.ocsp, p = u.CertID, c = u.CertStatus, y = i.x509, v = y.Extensions;
  u.SingleResponse.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var o = this.params, l = [];
    if (o.certid == null)
      throw new t("certid unspecified");
    if (o.status == null)
      throw new t("status unspecified");
    if (o.thisupdate == null)
      throw new t("thisupdate unspecified");
    if (l.push(new p(o.certid)), l.push(new c(o.status)), l.push(new n(o.thisupdate)), o.nextupdate != null) {
      var f = new n(o.nextupdate);
      l.push(new h({ tag: "a0", explicit: !0, obj: f }));
    }
    if (o.ext != null) {
      var d = new v(o.ext);
      l.push(new h({ tag: "a1", explicit: !0, obj: d }));
    }
    var g = new s({ array: l });
    return g.tohex();
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setByParam = function(o) {
    this.params = o;
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.ocsp.SingleResponse, a.asn1.ASN1Object);
a.asn1.ocsp.CertID = function(e) {
  var t = a, r = t.asn1, i = r.DEROctetString, s = r.DERInteger, n = r.DERSequence, h = r.x509, u = h.AlgorithmIdentifier, p = r.ocsp;
  p.DEFAULT_HASH;
  var c = t.crypto, y = c.Util.hashHex, v = _, o = V, l = o.getVbyList;
  p.CertID.superclass.constructor.call(this), this.DEFAULT_HASH = "sha1", this.params = null, this.setByValue = function(f, d, g, m) {
    m == null && (m = this.DEFAULT_HASH), this.params = { alg: m, issname: f, isskey: d, sbjsn: g };
  }, this.setByCert = function(f, d, g) {
    g == null && (g = this.DEFAULT_HASH), this.params = { alg: g, issuerCert: f, subjectCert: d };
  }, this.getParamByCerts = function(f, d, g) {
    g == null && (g = this.DEFAULT_HASH);
    var m = new v(f), F = new v(d), D = y(m.getSubjectHex(), g), A = m.getPublicKeyHex(), C = y(l(A, 0, [1], "03", !0), g), x = F.getSerialNumberHex(), E = { alg: g, issname: D, isskey: C, sbjsn: x };
    return E;
  }, this.tohex = function() {
    if (typeof this.params != "object")
      throw new Error("params not set");
    var f = this.params, d, g, m, F;
    if (f.alg == null ? F = this.DEFAULT_HASH : F = f.alg, f.issuerCert != null && f.subjectCert != null) {
      var D = this.getParamByCerts(f.issuerCert, f.subjectCert, F);
      d = D.issname, g = D.isskey, m = D.sbjsn;
    } else if (f.issname != null && f.isskey != null && f.sbjsn != null)
      d = f.issname, g = f.isskey, m = f.sbjsn;
    else
      throw new Error("required param members not defined");
    var A = new u({ name: F }), C = new i({ hex: d }), x = new i({ hex: g }), E = new s({ hex: m }), w = new n({ array: [A, C, x, E] });
    return this.hTLV = w.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.ocsp.CertID, a.asn1.ASN1Object);
a.asn1.ocsp.CertStatus = function(e) {
  a.asn1.ocsp.CertStatus.superclass.constructor.call(this), this.params = null, this.tohex = function() {
    var t = this.params;
    if (t.status == "good")
      return "8000";
    if (t.status == "unknown")
      return "8200";
    if (t.status == "revoked") {
      var r = [{ gentime: { str: t.time } }];
      t.reason != null && r.push({ tag: { tag: "a0", explicit: !0, obj: { enum: { int: t.reason } } } });
      var i = { tag: "a1", explicit: !1, obj: { seq: r } };
      return a.asn1.ASN1Util.newObject({ tag: i }).tohex();
    }
    throw new Error("bad status");
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, this.setByParam = function(t) {
    this.params = t;
  }, e !== void 0 && this.setByParam(e);
};
N(a.asn1.ocsp.CertStatus, a.asn1.ASN1Object);
a.asn1.ocsp.Request = function(e) {
  var t = a, r = t.asn1, i = r.DERSequence, s = r.ocsp;
  if (s.Request.superclass.constructor.call(this), this.dReqCert = null, this.dExt = null, this.tohex = function() {
    var h = [];
    if (this.dReqCert === null)
      throw "reqCert not set";
    h.push(this.dReqCert);
    var u = new i({ array: h });
    return this.hTLV = u.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, typeof e < "u") {
    var n = new s.CertID(e);
    this.dReqCert = n;
  }
};
N(a.asn1.ocsp.Request, a.asn1.ASN1Object);
a.asn1.ocsp.TBSRequest = function(e) {
  var t = a, r = t.asn1, i = r.DERSequence, s = r.ocsp;
  s.TBSRequest.superclass.constructor.call(this), this.version = 0, this.dRequestorName = null, this.dRequestList = [], this.dRequestExt = null, this.setRequestListByParam = function(n) {
    for (var h = [], u = 0; u < n.length; u++) {
      var p = new s.Request(n[0]);
      h.push(p);
    }
    this.dRequestList = h;
  }, this.tohex = function() {
    var n = [];
    if (this.version !== 0)
      throw "not supported version: " + this.version;
    if (this.dRequestorName !== null)
      throw "requestorName not supported";
    var h = new i({ array: this.dRequestList });
    if (n.push(h), this.dRequestExt !== null)
      throw "requestExtensions not supported";
    var u = new i({ array: n });
    return this.hTLV = u.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && e.reqList !== void 0 && this.setRequestListByParam(e.reqList);
};
N(a.asn1.ocsp.TBSRequest, a.asn1.ASN1Object);
a.asn1.ocsp.OCSPRequest = function(e) {
  var t = a, r = t.asn1, i = r.DERSequence, s = r.ocsp;
  if (s.OCSPRequest.superclass.constructor.call(this), this.dTbsRequest = null, this.dOptionalSignature = null, this.tohex = function() {
    var h = [];
    if (this.dTbsRequest !== null)
      h.push(this.dTbsRequest);
    else
      throw "tbsRequest not set";
    if (this.dOptionalSignature !== null)
      throw "optionalSignature not supported";
    var u = new i({ array: h });
    return this.hTLV = u.tohex(), this.hTLV;
  }, this.getEncodedHex = function() {
    return this.tohex();
  }, e !== void 0 && e.reqList !== void 0) {
    var n = new s.TBSRequest(e);
    this.dTbsRequest = n;
  }
};
N(a.asn1.ocsp.OCSPRequest, a.asn1.ASN1Object);
a.asn1.ocsp.OCSPUtil = {};
a.asn1.ocsp.OCSPUtil.getRequestHex = function(e, t, r) {
  var i = a, s = i.asn1, n = s.ocsp;
  r === void 0 && (r = n.DEFAULT_HASH);
  var h = { alg: r, issuerCert: e, subjectCert: t }, u = new n.OCSPRequest({ reqList: [h] });
  return u.tohex();
};
a.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function(e) {
  var t = V, r = t.getVbyList, i = t.getVbyListEx, s = t.getIdxbyList;
  t.getIdxbyListEx;
  var n = t.getV, h = {};
  try {
    var u = i(e, 0, [0], "0a");
    h.responseStatus = parseInt(u, 16);
  } catch {
  }
  if (h.responseStatus !== 0)
    return h;
  try {
    var p = s(e, 0, [1, 0, 1, 0, 0, 2, 0, 1]);
    e.substr(p, 2) === "80" ? h.certStatus = "good" : e.substr(p, 2) === "a1" ? (h.certStatus = "revoked", h.revocationTime = W(r(e, p, [0]))) : e.substr(p, 2) === "82" && (h.certStatus = "unknown");
  } catch {
  }
  try {
    var c = s(e, 0, [1, 0, 1, 0, 0, 2, 0, 2]);
    h.thisUpdate = W(n(e, c));
  } catch {
  }
  try {
    var y = s(e, 0, [1, 0, 1, 0, 0, 2, 0, 3]);
    e.substr(y, 2) === "a0" && (h.nextUpdate = W(r(e, y, [0])));
  } catch {
  }
  return h;
};
a.asn1.ocsp.OCSPParser = function() {
  var e = Error, t = _, r = new t(), i = V, s = i.getV, n = i.getTLV, h = i.getIdxbyList, u = i.getVbyList, p = i.getTLVbyList, c = i.getVbyListEx, y = i.getTLVbyListEx, v = i.getChildIdx;
  this.getOCSPRequest = function(o) {
    var l = v(o, 0);
    if (l.length != 1 && l.length != 2)
      throw new e("wrong number elements: " + l.length);
    var f = this.getTBSRequest(n(o, l[0]));
    return f;
  }, this.getTBSRequest = function(o) {
    var l = {}, f = y(o, 0, [0], "30");
    l.array = this.getRequestList(f);
    var d = y(o, 0, ["[2]", 0], "30");
    return d != null && (l.ext = r.getExtParamArray(d)), l;
  }, this.getRequestList = function(o) {
    for (var l = [], f = v(o, 0), d = 0; d < f.length; d++) {
      var o = n(o, f[d]);
      l.push(this.getRequest(o));
    }
    return l;
  }, this.getRequest = function(o) {
    var l = v(o, 0);
    if (l.length != 1 && l.length != 2)
      throw new e("wrong number elements: " + l.length);
    var f = this.getCertID(n(o, l[0]));
    if (l.length == 2) {
      var d = h(o, 0, [1, 0]);
      f.ext = r.getExtParamArray(n(o, d));
    }
    return f;
  }, this.getCertID = function(o) {
    var l = v(o, 0);
    if (l.length != 4)
      throw new e("wrong number elements: " + l.length);
    var f = new t(), d = {};
    return d.alg = f.getAlgorithmIdentifierName(n(o, l[0])), d.issname = s(o, l[1]), d.isskey = s(o, l[2]), d.sbjsn = s(o, l[3]), d;
  }, this.getOCSPResponse = function(o) {
    var l = v(o, 0), f, d = s(o, l[0]), g = parseInt(d);
    if (l.length == 1)
      return { resstatus: g };
    var m = p(o, 0, [1, 0]);
    return f = this.getResponseBytes(m), f.resstatus = g, f;
  }, this.getResponseBytes = function(o) {
    var l = v(o, 0), f, d = p(o, 0, [1, 0]);
    f = this.getBasicOCSPResponse(d);
    var g = s(o, l[0]);
    return f.restype = a.asn1.x509.OID.oid2name(ct(g)), f;
  }, this.getBasicOCSPResponse = function(o) {
    var l = v(o, 0), f;
    f = this.getResponseData(n(o, l[0]));
    var d = new _();
    f.alg = d.getAlgorithmIdentifierName(n(o, l[1]));
    var g = s(o, l[2]);
    f.sighex = g.substr(2);
    var m = c(o, 0, ["[0]"]);
    if (m != null) {
      for (var F = v(m, 0), D = [], A = 0; A < F.length; A++) {
        var C = n(m, F[A]);
        D.push(C);
      }
      f.certs = D;
    }
    return f;
  }, this.getResponseData = function(o) {
    var l = v(o, 0), f = l.length, d = {}, g = 0;
    o.substr(l[0], 2) == "a0" && g++, d.respid = this.getResponderID(n(o, l[g++]));
    var m = s(o, l[g++]);
    if (d.prodat = W(m), d.array = this.getSingleResponseList(n(o, l[g++])), o.substr(l[f - 1], 2) == "a1") {
      var F = p(o, l[f - 1], [0]), D = new _();
      d.ext = D.getExtParamArray(F);
    }
    return d;
  }, this.getResponderID = function(o) {
    var l = {};
    if (o.substr(0, 2) == "a2") {
      var f = u(o, 0, [0]);
      l.key = f;
    }
    if (o.substr(0, 2) == "a1") {
      var d = p(o, 0, [0]), g = new _();
      l.name = g.getX500Name(d);
    }
    return l;
  }, this.getSingleResponseList = function(o) {
    for (var l = v(o, 0), f = [], d = 0; d < l.length; d++) {
      var g = this.getSingleResponse(n(o, l[d]));
      f.push(g);
    }
    return f;
  }, this.getSingleResponse = function(o) {
    var l = v(o, 0), f = {}, d = this.getCertID(n(o, l[0]));
    f.certid = d;
    var g = this.getCertStatus(n(o, l[1]));
    if (f.status = g, o.substr(l[2], 2) == "18") {
      var m = s(o, l[2]);
      f.thisupdate = W(m);
    }
    for (var F = 3; F < l.length; F++) {
      if (o.substr(l[F], 2) == "a0") {
        var D = u(o, l[F], [0], "18");
        f.nextupdate = W(D);
      }
      if (o.substr(l[F], 2) == "a1") {
        var A = new _(), C = p(o, 0, [F, 0]);
        f.ext = A.getExtParamArray(C);
      }
    }
    return f;
  }, this.getCertStatus = function(o) {
    var l = {};
    if (o == "8000")
      return { status: "good" };
    if (o == "8200")
      return { status: "unknown" };
    if (o.substr(0, 2) == "a1") {
      l.status = "revoked";
      var f = u(o, 0, [0]), d = W(f);
      l.time = d;
    }
    return l;
  };
};
var a;
(typeof a > "u" || !a) && (a = {});
(typeof a.lang > "u" || !a.lang) && (a.lang = {});
a.lang.String = function() {
};
function Lt(e) {
  for (var t = new Array(), r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}
function _t(e) {
  for (var t = "", r = 0; r < e.length; r++)
    t = t + String.fromCharCode(e[r]);
  return t;
}
function st(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var i = e[r].toString(16);
    i.length == 1 && (i = "0" + i), t = t + i;
  }
  return t;
}
function ye(e) {
  return st(Lt(e));
}
function Pn(e) {
  return Ie(ye(e));
}
function Cn(e) {
  return qe(Ie(ye(e)));
}
function In(e) {
  return _t(Nt(Ye(e)));
}
function qe(e) {
  return e = e.replace(/\=/g, ""), e = e.replace(/\+/g, "-"), e = e.replace(/\//g, "_"), e;
}
function Ye(e) {
  return e.length % 4 == 2 ? e = e + "==" : e.length % 4 == 3 && (e = e + "="), e = e.replace(/-/g, "+"), e = e.replace(/_/g, "/"), e;
}
function se(e) {
  return e.length % 2 == 1 && (e = "0" + e), qe(Ie(e));
}
function Z(e) {
  return ke(Ye(e));
}
var Je, Fe;
typeof Buffer == "function" ? (Je = function(e) {
  return qe(Buffer.from(e, "utf8").toString("base64"));
}, Fe = function(e) {
  return Buffer.from(Ye(e), "base64").toString("utf8");
}) : (Je = function(e) {
  return se(ut(ft(e)));
}, Fe = function(e) {
  return decodeURIComponent(ht(Z(e)));
});
function Rn(e) {
  return Ie(ut(ft(e)));
}
function Tn(e) {
  return decodeURIComponent(ht(ke(e)));
}
function at(e) {
  return ut(ft(e)).toLowerCase();
}
function W(e) {
  try {
    return decodeURIComponent(ht(e));
  } catch {
    return null;
  }
}
function Bn(e) {
  return W(Nn(e));
}
function Nn(e) {
  for (var t = e.match(/.{1,2}/g), r = [], i = 0; i < t.length; i++) {
    var s = parseInt(t[i], 16);
    161 <= s && s <= 191 ? (r.push("c2"), r.push(t[i])) : 192 <= s && s <= 255 ? (r.push("c3"), r.push((s - 64).toString(16))) : r.push(t[i]);
  }
  return r.join("");
}
function me(e) {
  for (var t = "", r = 0; r < e.length - 1; r += 2)
    t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
  return t;
}
function Pe(e) {
  for (var t = "", r = 0; r < e.length; r++)
    t += ("0" + e.charCodeAt(r).toString(16)).slice(-2);
  return t;
}
function Et(e) {
  return Ie(e);
}
function Hn(e) {
  return ot(Et(e), 64);
}
function ot(e, t) {
  return e = e.replace(new RegExp("(.{" + t + "})", "g"), `$1\r
`), e = e.replace(/\s+$/, ""), e;
}
function qt(e) {
  var t = e.replace(/[^0-9A-Za-z\/+=]*/g, ""), r = ke(t);
  return r;
}
function On(e, t) {
  return "-----BEGIN " + t + `-----\r
` + ot(e, 64) + `\r
-----END ` + t + `-----\r
`;
}
function le(e, t) {
  return "-----BEGIN " + t + `-----\r
` + ot(Et(e), 64) + `\r
-----END ` + t + `-----\r
`;
}
function ie(e, t) {
  if (e.indexOf("-----BEGIN ") == -1)
    throw new Error("can't find PEM header");
  return t !== void 0 ? (e = e.replace(new RegExp("^[^]*-----BEGIN " + t + "-----"), ""), e = e.replace(new RegExp("-----END " + t + "-----[^]*$"), "")) : (e = e.replace(/^[^]*-----BEGIN [^-]+-----/, ""), e = e.replace(/-----END [^-]+-----[^]*$/, "")), qt(e);
}
function jn(e) {
  return e.indexOf("-----BEGIN ") == -1 || e.indexOf("-----END ") == -1 ? null : (e = e.replace(/^[\s\S]*?-----BEGIN [^-]+-----/m, ""), e = e.replace(/-----END [\s\S]+$/m, ""), e = e.replace(/\s+/g, ""), e.match(/^[0-9a-zA-Z+/=]+$/) ? e : null);
}
function Vn(e) {
  if (e.length % 2 != 0)
    throw "input is not even length";
  if (e.match(/^[0-9A-Fa-f]+$/) == null)
    throw "input is not hexadecimal";
  for (var t = new ArrayBuffer(e.length / 2), r = new DataView(t), i = 0; i < e.length / 2; i++)
    r.setUint8(i, parseInt(e.substr(i * 2, 2), 16));
  return t;
}
function Kn(e) {
  for (var t = "", r = new DataView(e), i = 0; i < e.byteLength; i++)
    t += ("00" + r.getUint8(i).toString(16)).slice(-2);
  return t;
}
function wt(e) {
  var t, r, i, s, n, h, u, p, c, y;
  if (e = Mt(e), y = e.match(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/), y)
    return t = parseInt(y[1]), r = parseInt(y[2]) - 1, i = parseInt(y[3]), s = parseInt(y[4]), n = parseInt(y[5]), h = parseInt(y[6]), u = 0, p = y[7], p !== "" && (c = (p.substr(1) + "00").substr(0, 3), u = parseInt(c)), Date.UTC(t, r, i, s, n, h, u);
  throw new Error("unsupported zulu format: " + e);
}
function Ln(e) {
  var t = new Date(e), r = ("0000" + t.getUTCFullYear()).slice(-4), i = ("00" + (t.getUTCMonth() + 1)).slice(-2), s = ("00" + t.getUTCDate()).slice(-2), n = ("00" + t.getUTCHours()).slice(-2), h = ("00" + t.getUTCMinutes()).slice(-2), u = ("00" + t.getUTCSeconds()).slice(-2), p = ("000" + t.getUTCMilliseconds()).slice(-3);
  return p = p.replace(/0+$/, ""), p = p != "" ? "." + p : p, r + i + s + n + h + u + p + "Z";
}
function kt(e) {
  return Math.round(wt(e) / 1e3);
}
function _n(e) {
  return new Date(wt(e));
}
function qn(e, t, r) {
  var i, s = e.getUTCFullYear();
  if (t) {
    if (s < 1950 || 2049 < s)
      throw "not proper year for UTCTime: " + s;
    i = ("" + s).slice(-2);
  } else
    i = ("000" + s).slice(-4);
  if (i += ("0" + (e.getUTCMonth() + 1)).slice(-2), i += ("0" + e.getUTCDate()).slice(-2), i += ("0" + e.getUTCHours()).slice(-2), i += ("0" + e.getUTCMinutes()).slice(-2), i += ("0" + e.getUTCSeconds()).slice(-2), r) {
    var n = e.getUTCMilliseconds();
    n !== 0 && (n = ("00" + n).slice(-3), n = n.replace(/0+$/g, ""), i += "." + n);
  }
  return i += "Z", i;
}
function Mt(e) {
  return e.match(/^[0-9]{12}Z$/) || e.match(/^[0-9]{12}[.][0-9]*Z$/) ? e.match(/^[0-4]/) ? "20" + e : "19" + e : e;
}
function ut(e) {
  return e.replace(/%/g, "");
}
function ht(e) {
  return e.replace(/(..)/g, "%$1");
}
function pt(e) {
  var t = "malformed IPv6 address";
  if (!e.match(/^[0-9A-Fa-f:]+$/))
    throw t;
  e = e.toLowerCase();
  var r = e.split(":").length - 1;
  if (r < 2)
    throw t;
  var i = ":".repeat(7 - r + 2);
  e = e.replace("::", i);
  var s = e.split(":");
  if (s.length != 8)
    throw t;
  for (var n = 0; n < 8; n++)
    s[n] = ("0000" + s[n]).slice(-4);
  return s.join("");
}
function vt(e) {
  if (!e.match(/^[0-9A-Fa-f]{32}$/))
    throw new Error("malformed IPv6 address: " + e);
  e = e.toLowerCase();
  var t = e.match(/.{1,4}/g);
  t = t.map(function(s) {
    return s.replace(/^0+/, "");
  }), t = t.map(function(s) {
    return s == "" ? "0" : s;
  }), e = ":" + t.join(":") + ":";
  var r = e.match(/:(0:){2,}/g);
  if (r == null)
    return e.slice(1, -1);
  var i = r.sort().slice(-1)[0];
  return e = e.replace(i.substr(0, i.length - 1), ":"), e.substr(0, 2) != "::" && (e = e.substr(1)), e.substr(-2, 2) != "::" && (e = e.substr(0, e.length - 1)), e;
}
function et(e) {
  var t = new Error("malformed hex value");
  if (!e.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/))
    throw t;
  if (e.length == 8) {
    var r;
    try {
      return r = parseInt(e.substr(0, 2), 16) + "." + parseInt(e.substr(2, 2), 16) + "." + parseInt(e.substr(4, 2), 16) + "." + parseInt(e.substr(6, 2), 16), r;
    } catch {
      throw t;
    }
  } else if (e.length == 16)
    try {
      return et(e.substr(0, 8)) + "/" + Rt(e.substr(8));
    } catch {
      throw t;
    }
  else {
    if (e.length == 32)
      return vt(e);
    if (e.length == 64) {
      try {
        return vt(e.substr(0, 32)) + "/" + Rt(e.substr(32));
      } catch {
        throw t;
      }
      return;
    } else
      return e;
  }
}
function Rt(e) {
  var t = new Error("malformed mask"), r;
  try {
    r = new R(e, 16).toString(2);
  } catch {
    throw t;
  }
  if (!r.match(/^1*0*$/))
    throw t;
  return r.replace(/0+$/, "").length;
}
function bt(e) {
  var t = new Error("malformed IP address");
  if (e = e.toLowerCase(e), !e.match(/^[0-9a-f.:/]+$/))
    throw t;
  if (e.match(/^[0-9.]+$/)) {
    var r = e.split(".");
    if (r.length !== 4)
      throw t;
    var i = "";
    try {
      for (var s = 0; s < 4; s++) {
        var n = parseInt(r[s]);
        i += ("0" + n.toString(16)).slice(-2);
      }
      return i;
    } catch {
      throw t;
    }
  } else if (e.match(/^[0-9.]+\/[0-9]+$/)) {
    var h = e.split("/");
    return bt(h[0]) + Tt(parseInt(h[1]), 32);
  } else {
    if (e.match(/^[0-9a-f:]+$/) && e.indexOf(":") !== -1)
      return pt(e);
    if (e.match(/^[0-9a-f:]+\/[0-9]+$/) && e.indexOf(":") !== -1) {
      var h = e.split("/");
      return pt(h[0]) + Tt(parseInt(h[1]), 128);
    } else
      throw t;
  }
}
function Tt(e, t) {
  if (t == 32 && e == 0)
    return "00000000";
  if (t == 128 && e == 0)
    return "00000000000000000000000000000000";
  var r = Array(e + 1).join("1") + Array(t - e + 1).join("0");
  return new R(r, 2).toString(16);
}
function Ft(e) {
  function t(s) {
    var n = parseInt(s.substr(0, 2), 16), h = parseInt(s.substr(2), 16);
    if (n == 0 & h < 128)
      return String.fromCharCode(h);
    if (n < 8) {
      var u = 192 | (n & 7) << 3 | (h & 192) >> 6, p = 128 | h & 63;
      return W(u.toString(16) + p.toString(16));
    }
    var u = 224 | (n & 240) >> 4, p = 128 | (n & 15) << 2 | (h & 192) >> 6, c = 128 | h & 63;
    return W(u.toString(16) + p.toString(16) + c.toString(16));
  }
  var r = e.match(/.{4}/g), i = r.map(t);
  return i.join("");
}
function ft(e) {
  for (var t = encodeURIComponent(e), r = "", i = 0; i < t.length; i++)
    t[i] == "%" ? (r = r + t.substr(i, 3), i = i + 2) : r = r + "%" + ye(t[i]);
  return r;
}
function kn(e) {
  return e = e.replace(/\r\n/mg, `
`), e;
}
function Mn(e) {
  return e = e.replace(/\r\n/mg, `
`), e = e.replace(/\n/mg, `\r
`), e;
}
a.lang.String.isInteger = function(e) {
  return e.match(/^[0-9]+$/) ? !0 : !!e.match(/^-[0-9]+$/);
};
a.lang.String.isHex = function(e) {
  return Ut(e);
};
function Ut(e) {
  return !!(e.length % 2 == 0 && (e.match(/^[0-9a-f]+$/) || e.match(/^[0-9A-F]+$/)));
}
a.lang.String.isBase64 = function(e) {
  return e = e.replace(/\s+/g, ""), !!(e.match(/^[0-9A-Za-z+\/]+={0,3}$/) && e.length % 4 == 0);
};
a.lang.String.isBase64URL = function(e) {
  return e.match(/[+/=]/) ? !1 : (e = Ye(e), a.lang.String.isBase64(e));
};
function At(e) {
  return !!e.match(/^[0-9A-Za-z-_.]+$/);
}
a.lang.String.isIntegerArray = function(e) {
  return e = e.replace(/\s+/g, ""), !!e.match(/^\[[0-9,]+\]$/);
};
a.lang.String.isPrintable = function(e) {
  return e.match(/^[0-9A-Za-z '()+,-./:=?]*$/) !== null;
};
a.lang.String.isIA5 = function(e) {
  return e.match(/^[\x20-\x21\x23-\x7f]*$/) !== null;
};
a.lang.String.isMail = function(e) {
  return e.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/) !== null;
};
function gt(e) {
  return e.length % 2 == 1 ? "0" + e : e.substr(0, 1) > "7" ? "00" + e : e;
}
function Un(e) {
  e = e.replace(/^\s*\[\s*/, ""), e = e.replace(/\s*\]\s*$/, ""), e = e.replace(/\s*/g, "");
  try {
    var t = e.split(/,/).map(function(r, i, s) {
      var n = parseInt(r);
      if (n < 0 || 255 < n)
        throw "integer not in range 0-255";
      var h = ("00" + n.toString(16)).slice(-2);
      return h;
    }).join("");
    return t;
  } catch (r) {
    throw "malformed integer array string: " + r;
  }
}
var zn = function(e, t) {
  var r = e.length;
  e.length > t.length && (r = t.length);
  for (var i = 0; i < r; i++)
    if (e.charCodeAt(i) != t.charCodeAt(i))
      return i;
  return e.length != t.length ? r : -1;
};
function zt(e) {
  var t = function(u) {
    var p = u.toString(16);
    return p.length == 1 && (p = "0" + p), p;
  }, r = function(u) {
    var p = "", c = parseInt(u, 10), y = c.toString(2), v = 7 - y.length % 7;
    v == 7 && (v = 0);
    for (var o = "", l = 0; l < v; l++)
      o += "0";
    y = o + y;
    for (var l = 0; l < y.length - 1; l += 7) {
      var f = y.substr(l, 7);
      l != y.length - 7 && (f = "1" + f), p += t(parseInt(f, 2));
    }
    return p;
  };
  try {
    if (!e.match(/^[0-9.]+$/))
      return null;
    var i = "", s = e.split("."), n = parseInt(s[0], 10) * 40 + parseInt(s[1], 10);
    i += t(n), s.splice(0, 2);
    for (var h = 0; h < s.length; h++)
      i += r(s[h]);
    return i;
  } catch {
    return null;
  }
}
function ct(e) {
  if (!Ut(e))
    return null;
  try {
    var t = [], r = e.substr(0, 2), i = parseInt(r, 16);
    t[0] = new String(Math.floor(i / 40)), t[1] = new String(i % 40);
    for (var s = e.substr(2), n = [], h = 0; h < s.length / 2; h++)
      n.push(parseInt(s.substr(h * 2, 2), 16));
    for (var u = [], p = "", h = 0; h < n.length; h++)
      n[h] & 128 ? p = p + tt((n[h] & 127).toString(2), 7) : (p = p + tt((n[h] & 127).toString(2), 7), u.push(new String(parseInt(p, 2))), p = "");
    var c = t.join(".");
    return u.length > 0 && (c = c + "." + u.join(".")), c;
  } catch {
    return null;
  }
}
function Gt(e) {
  var t = new R(String(e), 10);
  return Ze(t);
}
function Ze(e) {
  var t = e.toString(16);
  if (t.substr(0, 1) != "-")
    return t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t), t;
  var r = t.substr(1), i = r.length;
  i % 2 == 1 ? i += 1 : t.match(/^[0-7]/) || (i += 2);
  for (var s = "", n = 0; n < i; n++)
    s += "f";
  var h = new R(s, 16), u = h.xor(e).add(R.ONE);
  return t = u.toString(16).replace(/^-/, ""), t;
}
var tt = function(e, t, r) {
  return r == null && (r = "0"), e.length >= t ? e : new Array(t - e.length + 1).join(r) + e;
};
function Wt(e) {
  if (e.length % 2 != 0 || (e = e.toLowerCase(), e.match(/^[0-9a-f]+$/) == null))
    return -1;
  try {
    var t = e.substr(0, 2);
    if (t == "00")
      return parseInt(e.substr(2), 16);
    var r = parseInt(t, 16);
    if (r > 7)
      return -1;
    var i = e.substr(2), s = parseInt(i, 16).toString(2);
    s == "0" && (s = "00000000"), s = s.slice(0, 0 - r);
    var n = parseInt(s, 2);
    return n == NaN ? -1 : n;
  } catch {
    return -1;
  }
}
function Xt(e) {
  if (typeof e != "number" || e < 0)
    return null;
  var t = Number(e).toString(2), r = 8 - t.length % 8;
  r == 8 && (r = 0), t = t + tt("", r, "0");
  var i = parseInt(t, 2).toString(16);
  i.length % 2 == 1 && (i = "0" + i);
  var s = "0" + r;
  return s + i;
}
function Jt(e) {
  if (typeof e != "string" || e.length % 2 != 0 || !e.match(/^[0-9a-f]+$/))
    return null;
  try {
    var t = parseInt(e.substr(0, 2), 16);
    if (t < 0 || 7 < t)
      return null;
    for (var r = e.substr(2), i = "", s = 0; s < r.length; s += 2) {
      var n = r.substr(s, 2), h = parseInt(n, 16).toString(2);
      h = ("0000000" + h).slice(-8), i += h;
    }
    return i.substr(0, i.length - t);
  } catch {
    return null;
  }
}
function Gn(e) {
  if (typeof e != "string" || e.match(/^[01]+$/) == null)
    return null;
  try {
    var t = parseInt(e, 2);
    return Xt(t);
  } catch {
    return null;
  }
}
function rt(e, t) {
  for (var r = 0, i = 0; i < e.length; i++)
    r |= 1 << t[e[i]];
  for (var s = r.toString(2), n = "", i = s.length - 1; i >= 0; i--)
    n += s[i];
  return n;
}
function J(e, i, r) {
  if (typeof e == "object") {
    for (var i = String(i).split("."), s = 0; s < i.length && e; s++) {
      var n = i[s];
      n.match(/^[0-9]+$/) && (n = parseInt(n)), e = e[n];
    }
    return e || e === !1 ? e : r;
  }
}
function N(e, t) {
  var r = function() {
  };
  r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e, e.superclass = t.prototype, t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t);
}
(typeof a > "u" || !a) && (a = {});
(typeof a.crypto > "u" || !a.crypto) && (a.crypto = {});
a.crypto.Util = new function() {
  this.DIGESTINFOHEAD = { sha1: "3021300906052b0e03021a05000414", sha224: "302d300d06096086480165030402040500041c", sha256: "3031300d060960864801650304020105000420", sha384: "3041300d060960864801650304020205000430", sha512: "3051300d060960864801650304020305000440", md2: "3020300c06082a864886f70d020205000410", md5: "3020300c06082a864886f70d020505000410", ripemd160: "3021300906052b2403020105000414" }, this.DEFAULTPROVIDER = { md5: "cryptojs", sha1: "cryptojs", sha224: "cryptojs", sha256: "cryptojs", sha384: "cryptojs", sha512: "cryptojs", ripemd160: "cryptojs", hmacmd5: "cryptojs", hmacsha1: "cryptojs", hmacsha224: "cryptojs", hmacsha256: "cryptojs", hmacsha384: "cryptojs", hmacsha512: "cryptojs", hmacripemd160: "cryptojs", MD5withRSA: "cryptojs/jsrsa", SHA1withRSA: "cryptojs/jsrsa", SHA224withRSA: "cryptojs/jsrsa", SHA256withRSA: "cryptojs/jsrsa", SHA384withRSA: "cryptojs/jsrsa", SHA512withRSA: "cryptojs/jsrsa", RIPEMD160withRSA: "cryptojs/jsrsa", MD5withECDSA: "cryptojs/jsrsa", SHA1withECDSA: "cryptojs/jsrsa", SHA224withECDSA: "cryptojs/jsrsa", SHA256withECDSA: "cryptojs/jsrsa", SHA384withECDSA: "cryptojs/jsrsa", SHA512withECDSA: "cryptojs/jsrsa", RIPEMD160withECDSA: "cryptojs/jsrsa", SHA1withDSA: "cryptojs/jsrsa", SHA224withDSA: "cryptojs/jsrsa", SHA256withDSA: "cryptojs/jsrsa", MD5withRSAandMGF1: "cryptojs/jsrsa", SHAwithRSAandMGF1: "cryptojs/jsrsa", SHA1withRSAandMGF1: "cryptojs/jsrsa", SHA224withRSAandMGF1: "cryptojs/jsrsa", SHA256withRSAandMGF1: "cryptojs/jsrsa", SHA384withRSAandMGF1: "cryptojs/jsrsa", SHA512withRSAandMGF1: "cryptojs/jsrsa", RIPEMD160withRSAandMGF1: "cryptojs/jsrsa" }, this.CRYPTOJSMESSAGEDIGESTNAME = { md5: L.algo.MD5, sha1: L.algo.SHA1, sha224: L.algo.SHA224, sha256: L.algo.SHA256, sha384: L.algo.SHA384, sha512: L.algo.SHA512, ripemd160: L.algo.RIPEMD160 }, this.getDigestInfoHex = function(e, t) {
    if (typeof this.DIGESTINFOHEAD[t] > "u")
      throw "alg not supported in Util.DIGESTINFOHEAD: " + t;
    return this.DIGESTINFOHEAD[t] + e;
  }, this.getPaddedDigestInfoHex = function(e, t, r) {
    var i = this.getDigestInfoHex(e, t), s = r / 4;
    if (i.length + 22 > s)
      throw "key is too short for SigAlg: keylen=" + r + "," + t;
    for (var n = "0001", h = "00" + i, u = "", p = s - n.length - h.length, c = 0; c < p; c += 2)
      u += "ff";
    var y = n + u + h;
    return y;
  }, this.hashString = function(e, t) {
    var r = new a.crypto.MessageDigest({ alg: t });
    return r.digestString(e);
  }, this.hashHex = function(e, t) {
    var r = new a.crypto.MessageDigest({ alg: t });
    return r.digestHex(e);
  }, this.sha1 = function(e) {
    return this.hashString(e, "sha1");
  }, this.sha256 = function(e) {
    return this.hashString(e, "sha256");
  }, this.sha256Hex = function(e) {
    return this.hashHex(e, "sha256");
  }, this.sha512 = function(e) {
    return this.hashString(e, "sha512");
  }, this.sha512Hex = function(e) {
    return this.hashHex(e, "sha512");
  }, this.isKey = function(e) {
    return e instanceof q || e instanceof a.crypto.DSA || e instanceof a.crypto.ECDSA;
  };
}();
a.crypto.Util.md5 = function(e) {
  var t = new a.crypto.MessageDigest({ alg: "md5", prov: "cryptojs" });
  return t.digestString(e);
};
a.crypto.Util.ripemd160 = function(e) {
  var t = new a.crypto.MessageDigest({ alg: "ripemd160", prov: "cryptojs" });
  return t.digestString(e);
};
a.crypto.Util.SECURERANDOMGEN = new ze();
a.crypto.Util.getRandomHexOfNbytes = function(e) {
  var t = new Array(e);
  return a.crypto.Util.SECURERANDOMGEN.nextBytes(t), st(t);
};
a.crypto.Util.getRandomBigIntegerOfNbytes = function(e) {
  return new R(a.crypto.Util.getRandomHexOfNbytes(e), 16);
};
a.crypto.Util.getRandomHexOfNbits = function(e) {
  var t = e % 8, r = (e - t) / 8, i = new Array(r + 1);
  return a.crypto.Util.SECURERANDOMGEN.nextBytes(i), i[0] = (255 << t & 255 ^ 255) & i[0], st(i);
};
a.crypto.Util.getRandomBigIntegerOfNbits = function(e) {
  return new R(a.crypto.Util.getRandomHexOfNbits(e), 16);
};
a.crypto.Util.getRandomBigIntegerZeroToMax = function(e) {
  for (var t = e.bitLength(); ; ) {
    var r = a.crypto.Util.getRandomBigIntegerOfNbits(t);
    if (e.compareTo(r) != -1)
      return r;
  }
};
a.crypto.Util.getRandomBigIntegerMinToMax = function(e, t) {
  var r = e.compareTo(t);
  if (r == 1)
    throw "biMin is greater than biMax";
  if (r == 0)
    return e;
  var i = t.subtract(e), s = a.crypto.Util.getRandomBigIntegerZeroToMax(i);
  return s.add(e);
};
a.crypto.MessageDigest = function(e) {
  this.setAlgAndProvider = function(t, r) {
    if (t = a.crypto.MessageDigest.getCanonicalAlgName(t), t !== null && r === void 0 && (r = a.crypto.Util.DEFAULTPROVIDER[t]), ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) != -1 && r == "cryptojs") {
      try {
        this.md = a.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create();
      } catch (i) {
        throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + i;
      }
      this.updateString = function(i) {
        this.md.update(i);
      }, this.updateHex = function(i) {
        var s = L.enc.Hex.parse(i);
        this.md.update(s);
      }, this.digest = function() {
        var i = this.md.finalize();
        return i.toString(L.enc.Hex);
      }, this.digestString = function(i) {
        return this.updateString(i), this.digest();
      }, this.digestHex = function(i) {
        return this.updateHex(i), this.digest();
      };
    }
    if (":sha256:".indexOf(t) != -1 && r == "sjcl") {
      try {
        this.md = new sjcl.hash.sha256();
      } catch (i) {
        throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + i;
      }
      this.updateString = function(i) {
        this.md.update(i);
      }, this.updateHex = function(i) {
        var s = sjcl.codec.hex.toBits(i);
        this.md.update(s);
      }, this.digest = function() {
        var i = this.md.finalize();
        return sjcl.codec.hex.fromBits(i);
      }, this.digestString = function(i) {
        return this.updateString(i), this.digest();
      }, this.digestHex = function(i) {
        return this.updateHex(i), this.digest();
      };
    }
  }, this.updateString = function(t) {
    throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
  }, this.updateHex = function(t) {
    throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
  }, this.digest = function() {
    throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
  }, this.digestString = function(t) {
    throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
  }, this.digestHex = function(t) {
    throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
  }, e !== void 0 && e.alg !== void 0 && (this.algName = e.alg, e.prov === void 0 && (this.provName = a.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName));
};
a.crypto.MessageDigest.getCanonicalAlgName = function(e) {
  return typeof e == "string" && (e = e.toLowerCase(), e = e.replace(/-/, "")), e;
};
a.crypto.MessageDigest.getHashLength = function(e) {
  var t = a.crypto.MessageDigest, r = t.getCanonicalAlgName(e);
  if (t.HASHLENGTH[r] === void 0)
    throw "not supported algorithm: " + e;
  return t.HASHLENGTH[r];
};
a.crypto.MessageDigest.HASHLENGTH = { md5: 16, sha1: 20, sha224: 28, sha256: 32, sha384: 48, sha512: 64, ripemd160: 20 };
a.crypto.Mac = function(e) {
  this.setAlgAndProvider = function(t, r) {
    if (t = t.toLowerCase(), t == null && (t = "hmacsha1"), t = t.toLowerCase(), t.substr(0, 4) != "hmac")
      throw "setAlgAndProvider unsupported HMAC alg: " + t;
    r === void 0 && (r = a.crypto.Util.DEFAULTPROVIDER[t]), this.algProv = t + "/" + r;
    var i = t.substr(4);
    if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(i) != -1 && r == "cryptojs") {
      try {
        var s = a.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[i];
        this.mac = L.algo.HMAC.create(s, this.pass);
      } catch (n) {
        throw "setAlgAndProvider hash alg set fail hashAlg=" + i + "/" + n;
      }
      this.updateString = function(n) {
        this.mac.update(n);
      }, this.updateHex = function(n) {
        var h = L.enc.Hex.parse(n);
        this.mac.update(h);
      }, this.doFinal = function() {
        var n = this.mac.finalize();
        return n.toString(L.enc.Hex);
      }, this.doFinalString = function(n) {
        return this.updateString(n), this.doFinal();
      }, this.doFinalHex = function(n) {
        return this.updateHex(n), this.doFinal();
      };
    }
  }, this.updateString = function(t) {
    throw "updateString(str) not supported for this alg/prov: " + this.algProv;
  }, this.updateHex = function(t) {
    throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
  }, this.doFinal = function() {
    throw "digest() not supported for this alg/prov: " + this.algProv;
  }, this.doFinalString = function(t) {
    throw "digestString(str) not supported for this alg/prov: " + this.algProv;
  }, this.doFinalHex = function(t) {
    throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
  }, this.setPassword = function(t) {
    if (typeof t == "string") {
      var r = t;
      (t.length % 2 == 1 || !t.match(/^[0-9A-Fa-f]+$/)) && (r = Pe(t)), this.pass = L.enc.Hex.parse(r);
      return;
    }
    if (typeof t != "object")
      throw "KJUR.crypto.Mac unsupported password type: " + t;
    var r = null;
    if (t.hex !== void 0) {
      if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/))
        throw "Mac: wrong hex password: " + t.hex;
      r = t.hex;
    }
    if (t.utf8 !== void 0 && (r = at(t.utf8)), t.rstr !== void 0 && (r = Pe(t.rstr)), t.b64 !== void 0 && (r = ke(t.b64)), t.b64u !== void 0 && (r = Z(t.b64u)), r == null)
      throw "KJUR.crypto.Mac unsupported password type: " + t;
    this.pass = L.enc.Hex.parse(r);
  }, e !== void 0 && (e.pass !== void 0 && this.setPassword(e.pass), e.alg !== void 0 && (this.algName = e.alg, e.prov === void 0 && (this.provName = a.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName)));
};
a.crypto.Signature = function(e) {
  var t = null;
  if (this._setAlgNames = function() {
    var r = this.algName.match(/^(.+)with(.+)$/);
    r && (this.mdAlgName = r[1].toLowerCase(), this.pubkeyAlgName = r[2].toLowerCase(), this.pubkeyAlgName == "rsaandmgf1" && this.mdAlgName == "sha" && (this.mdAlgName = "sha1"));
  }, this._zeroPaddingOfSignature = function(r, i) {
    for (var s = "", n = i / 4 - r.length, h = 0; h < n; h++)
      s = s + "0";
    return s + r;
  }, this.setAlgAndProvider = function(r, i) {
    if (this._setAlgNames(), i != "cryptojs/jsrsa")
      throw new Error("provider not supported: " + i);
    if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName) != -1) {
      try {
        this.md = new a.crypto.MessageDigest({ alg: this.mdAlgName });
      } catch (s) {
        throw new Error("setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + s);
      }
      this.init = function(s, n) {
        var h = null;
        try {
          n === void 0 ? h = k.getKey(s) : h = k.getKey(s, n);
        } catch (u) {
          throw "init failed:" + u;
        }
        if (h.isPrivate === !0)
          this.prvKey = h, this.state = "SIGN";
        else if (h.isPublic === !0)
          this.pubKey = h, this.state = "VERIFY";
        else
          throw "init failed.:" + h;
      }, this.updateString = function(s) {
        this.md.updateString(s);
      }, this.updateHex = function(s) {
        this.md.updateHex(s);
      }, this.sign = function() {
        if (this.sHashHex = this.md.digest(), this.prvKey === void 0 && this.ecprvhex !== void 0 && this.eccurvename !== void 0 && a.crypto.ECDSA !== void 0 && (this.prvKey = new a.crypto.ECDSA({ curve: this.eccurvename, prv: this.ecprvhex })), this.prvKey instanceof q && this.pubkeyAlgName === "rsaandmgf1")
          this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
        else if (this.prvKey instanceof q && this.pubkeyAlgName === "rsa")
          this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
        else if (this.prvKey instanceof a.crypto.ECDSA)
          this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
        else if (this.prvKey instanceof a.crypto.DSA)
          this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
        else
          throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
        return this.hSign;
      }, this.signString = function(s) {
        return this.updateString(s), this.sign();
      }, this.signHex = function(s) {
        return this.updateHex(s), this.sign();
      }, this.verify = function(s) {
        if (this.sHashHex = this.md.digest(), this.pubKey === void 0 && this.ecpubhex !== void 0 && this.eccurvename !== void 0 && a.crypto.ECDSA !== void 0 && (this.pubKey = new a.crypto.ECDSA({ curve: this.eccurvename, pub: this.ecpubhex })), this.pubKey instanceof q && this.pubkeyAlgName === "rsaandmgf1")
          return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, s, this.mdAlgName, this.pssSaltLen);
        if (this.pubKey instanceof q && this.pubkeyAlgName === "rsa")
          return this.pubKey.verifyWithMessageHash(this.sHashHex, s);
        if (a.crypto.ECDSA !== void 0 && this.pubKey instanceof a.crypto.ECDSA)
          return this.pubKey.verifyWithMessageHash(this.sHashHex, s);
        if (a.crypto.DSA !== void 0 && this.pubKey instanceof a.crypto.DSA)
          return this.pubKey.verifyWithMessageHash(this.sHashHex, s);
        throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
      };
    }
  }, this.init = function(r, i) {
    throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
  }, this.updateString = function(r) {
    throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
  }, this.updateHex = function(r) {
    throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
  }, this.sign = function() {
    throw "sign() not supported for this alg:prov=" + this.algProvName;
  }, this.signString = function(r) {
    throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
  }, this.signHex = function(r) {
    throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
  }, this.verify = function(r) {
    throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
  }, this.initParams = e, e !== void 0 && (e.alg !== void 0 && (this.algName = e.alg, e.prov === void 0 ? this.provName = a.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = e.prov, this.algProvName = this.algName + ":" + this.provName, this.setAlgAndProvider(this.algName, this.provName), this._setAlgNames()), e.psssaltlen !== void 0 && (this.pssSaltLen = e.psssaltlen), e.prvkeypem !== void 0)) {
    if (e.prvkeypas !== void 0)
      throw "both prvkeypem and prvkeypas parameters not supported";
    try {
      var t = k.getKey(e.prvkeypem);
      this.init(t);
    } catch (r) {
      throw "fatal error to load pem private key: " + r;
    }
  }
};
a.crypto.Cipher = function(e) {
};
a.crypto.Cipher.encrypt = function(e, t, r, i) {
  if (J(i, "enclag") != null && (r = i.encalg), typeof r == "string" && r.substr(-4) == "-CBC") {
    var s = t, n = e;
    J(i, "key") != null && (s = i.key), J(i, "enc") != null && (hEnc = i.enc);
    var h = L.enc.Hex.parse(s), u = L.enc.Hex.parse(n), p = L.enc.Hex.parse(i.iv), c;
    if (r == "des-EDE3-CBC")
      c = L.TripleDES.encrypt(u, h, { iv: p });
    else if (r == "aes128-CBC" || r == "aes256-CBC")
      c = L.AES.encrypt(u, h, { iv: p });
    else
      throw new Error("unsupported algorithm: " + r);
    return c + "";
  } else
    throw new Error("Cipher.encrypt: unsupported key or algorithm");
};
a.crypto.Cipher.decrypt = function(e, t, r, i) {
  if (J(i, "enclag") != null && (r = i.encalg), typeof r == "string" && r.substr(-4) == "-CBC") {
    var s = t, n = e;
    J(i, "key") != null && (s = i.key), J(i, "enc") != null && (n = i.enc);
    var h = L.enc.Hex.parse(s), u = L.enc.Hex.parse(n), p = L.enc.Hex.parse(i.iv), c;
    if (r == "des-EDE3-CBC")
      c = L.TripleDES.decrypt({ ciphertext: u }, h, { iv: p });
    else if (r == "aes128-CBC" || r == "aes256-CBC")
      c = L.AES.decrypt({ ciphertext: u }, h, { iv: p });
    else
      throw new Error("unsupported algorithm: " + r);
    return L.enc.Hex.stringify(c);
  } else
    throw new Error("Cipher.decrypt: unsupported key or algorithm");
};
a.crypto.OID = new function() {
  this.oidhex2name = { "2a864886f70d010101": "rsaEncryption", "2a8648ce3d0201": "ecPublicKey", "2a8648ce380401": "dsa", "2a8648ce3d030107": "secp256r1", "2b8104001f": "secp192k1", "2b81040021": "secp224r1", "2b8104000a": "secp256k1", "2b81040022": "secp384r1", "2b81040023": "secp521r1", "2a8648ce380403": "SHA1withDSA", "608648016503040301": "SHA224withDSA", "608648016503040302": "SHA256withDSA" };
}();
(typeof a > "u" || !a) && (a = {});
(typeof a.crypto > "u" || !a.crypto) && (a.crypto = {});
a.crypto.ECDSA = function(e) {
  var t = "secp256r1", r = Error, i = R, s = z, n = a.crypto.ECDSA, h = a.crypto.ECParameterDB, u = n.getName, p = V, c = p.getVbyListEx, y = p.isASN1HEX, v = new ze();
  this.type = "EC", this.isPrivate = !1, this.isPublic = !1, this.getBigRandom = function(o) {
    return new i(o.bitLength(), v).mod(o.subtract(i.ONE)).add(i.ONE);
  }, this.setNamedCurve = function(o) {
    this.ecparams = h.getByName(o), this.prvKeyHex = null, this.pubKeyHex = null, this.curveName = o;
  }, this.setPrivateKeyHex = function(o) {
    this.isPrivate = !0, this.prvKeyHex = o;
  }, this.setPublicKeyHex = function(o) {
    this.isPublic = !0, this.pubKeyHex = o;
  }, this.getPublicKeyXYHex = function() {
    var o = this.pubKeyHex;
    if (o.substr(0, 2) !== "04")
      throw "this method supports uncompressed format(04) only";
    var l = this.ecparams.keycharlen;
    if (o.length !== 2 + l * 2)
      throw "malformed public key hex length";
    var f = {};
    return f.x = o.substr(2, l), f.y = o.substr(2 + l), f;
  }, this.getShortNISTPCurveName = function() {
    var o = this.curveName;
    return o === "secp256r1" || o === "NIST P-256" || o === "P-256" || o === "prime256v1" ? "P-256" : o === "secp384r1" || o === "NIST P-384" || o === "P-384" ? "P-384" : o === "secp521r1" || o === "NIST P-521" || o === "P-521" ? "P-521" : null;
  }, this.generateKeyPairHex = function() {
    var o = this.ecparams.n, l = this.getBigRandom(o), f = this.ecparams.keycharlen, d = ("0000000000" + l.toString(16)).slice(-f);
    this.setPrivateKeyHex(d);
    var g = this.generatePublicKeyHex();
    return { ecprvhex: d, ecpubhex: g };
  }, this.generatePublicKeyHex = function() {
    var o = new i(this.prvKeyHex, 16), l = this.ecparams.G.multiply(o), f = l.getX().toBigInteger(), d = l.getY().toBigInteger(), g = this.ecparams.keycharlen, m = ("0000000000" + f.toString(16)).slice(-g), F = ("0000000000" + d.toString(16)).slice(-g), D = "04" + m + F;
    return this.setPublicKeyHex(D), D;
  }, this.signWithMessageHash = function(o) {
    return this.signHex(o, this.prvKeyHex);
  }, this.signHex = function(o, l) {
    var f = new i(l, 16), d = this.ecparams.n, g = new i(o.substring(0, this.ecparams.keycharlen), 16);
    do
      var m = this.getBigRandom(d), F = this.ecparams.G, D = F.multiply(m), A = D.getX().toBigInteger().mod(d);
    while (A.compareTo(i.ZERO) <= 0);
    var C = m.modInverse(d).multiply(g.add(f.multiply(A))).mod(d);
    return n.biRSSigToASN1Sig(A, C);
  }, this.sign = function(o, l) {
    var f = l, d = this.ecparams.n, g = i.fromByteArrayUnsigned(o);
    do
      var m = this.getBigRandom(d), F = this.ecparams.G, D = F.multiply(m), A = D.getX().toBigInteger().mod(d);
    while (A.compareTo(R.ZERO) <= 0);
    var C = m.modInverse(d).multiply(g.add(f.multiply(A))).mod(d);
    return this.serializeSig(A, C);
  }, this.verifyWithMessageHash = function(o, l) {
    return this.verifyHex(o, l, this.pubKeyHex);
  }, this.verifyHex = function(o, l, f) {
    try {
      var d, g, m = n.parseSigHex(l);
      d = m.r, g = m.s;
      var F = s.decodeFromHex(this.ecparams.curve, f), D = new i(o.substring(0, this.ecparams.keycharlen), 16);
      return this.verifyRaw(D, d, g, F);
    } catch {
      return !1;
    }
  }, this.verify = function(o, l, f) {
    var d, g;
    if (Bitcoin.Util.isArray(l)) {
      var m = this.parseSig(l);
      d = m.r, g = m.s;
    } else if (typeof l == "object" && l.r && l.s)
      d = l.r, g = l.s;
    else
      throw "Invalid value for signature";
    var F;
    if (f instanceof z)
      F = f;
    else if (Bitcoin.Util.isArray(f))
      F = s.decodeFrom(this.ecparams.curve, f);
    else
      throw "Invalid format for pubkey value, must be byte array or ECPointFp";
    var D = i.fromByteArrayUnsigned(o);
    return this.verifyRaw(D, d, g, F);
  }, this.verifyRaw = function(o, l, f, d) {
    var g = this.ecparams.n, m = this.ecparams.G;
    if (l.compareTo(i.ONE) < 0 || l.compareTo(g) >= 0 || f.compareTo(i.ONE) < 0 || f.compareTo(g) >= 0)
      return !1;
    var F = f.modInverse(g), D = o.multiply(F).mod(g), A = l.multiply(F).mod(g), C = m.multiply(D).add(d.multiply(A)), x = C.getX().toBigInteger().mod(g);
    return x.equals(l);
  }, this.serializeSig = function(o, l) {
    var f = o.toByteArraySigned(), d = l.toByteArraySigned(), g = [];
    return g.push(2), g.push(f.length), g = g.concat(f), g.push(2), g.push(d.length), g = g.concat(d), g.unshift(g.length), g.unshift(48), g;
  }, this.parseSig = function(o) {
    var l;
    if (o[0] != 48)
      throw new Error("Signature not a valid DERSequence");
    if (l = 2, o[l] != 2)
      throw new Error("First element in signature must be a DERInteger");
    var f = o.slice(l + 2, l + 2 + o[l + 1]);
    if (l += 2 + o[l + 1], o[l] != 2)
      throw new Error("Second element in signature must be a DERInteger");
    var d = o.slice(l + 2, l + 2 + o[l + 1]);
    l += 2 + o[l + 1];
    var g = i.fromByteArrayUnsigned(f), m = i.fromByteArrayUnsigned(d);
    return { r: g, s: m };
  }, this.parseSigCompact = function(o) {
    if (o.length !== 65)
      throw "Signature has the wrong length";
    var l = o[0] - 27;
    if (l < 0 || l > 7)
      throw "Invalid signature type";
    var f = this.ecparams.n, d = i.fromByteArrayUnsigned(o.slice(1, 33)).mod(f), g = i.fromByteArrayUnsigned(o.slice(33, 65)).mod(f);
    return { r: d, s: g, i: l };
  }, this.readPKCS5PrvKeyHex = function(o) {
    if (y(o) === !1)
      throw new Error("not ASN.1 hex string");
    var l, f, d;
    try {
      l = c(o, 0, ["[0]", 0], "06"), f = c(o, 0, [1], "04");
      try {
        d = c(o, 0, ["[1]", 0], "03");
      } catch {
      }
    } catch {
      throw new Error("malformed PKCS#1/5 plain ECC private key");
    }
    if (this.curveName = u(l), this.curveName === void 0)
      throw "unsupported curve name";
    this.setNamedCurve(this.curveName), this.setPublicKeyHex(d), this.setPrivateKeyHex(f), this.isPublic = !1;
  }, this.readPKCS8PrvKeyHex = function(o) {
    if (y(o) === !1)
      throw new r("not ASN.1 hex string");
    var l, f, d, g;
    try {
      l = c(o, 0, [1, 0], "06"), f = c(o, 0, [1, 1], "06"), d = c(o, 0, [2, 0, 1], "04");
      try {
        g = c(o, 0, [2, 0, "[1]", 0], "03");
      } catch {
      }
    } catch {
      throw new r("malformed PKCS#8 plain ECC private key");
    }
    if (this.curveName = u(f), this.curveName === void 0)
      throw new r("unsupported curve name");
    this.setNamedCurve(this.curveName), this.setPublicKeyHex(g), this.setPrivateKeyHex(d), this.isPublic = !1;
  }, this.readPKCS8PubKeyHex = function(o) {
    if (y(o) === !1)
      throw new r("not ASN.1 hex string");
    var l, f, d;
    try {
      l = c(o, 0, [0, 0], "06"), f = c(o, 0, [0, 1], "06"), d = c(o, 0, [1], "03");
    } catch {
      throw new r("malformed PKCS#8 ECC public key");
    }
    if (this.curveName = u(f), this.curveName === null)
      throw new r("unsupported curve name");
    this.setNamedCurve(this.curveName), this.setPublicKeyHex(d);
  }, this.readCertPubKeyHex = function(o, l) {
    if (y(o) === !1)
      throw new r("not ASN.1 hex string");
    var f, d;
    try {
      f = c(o, 0, [0, 5, 0, 1], "06"), d = c(o, 0, [0, 5, 1], "03");
    } catch {
      throw new r("malformed X.509 certificate ECC public key");
    }
    if (this.curveName = u(f), this.curveName === null)
      throw new r("unsupported curve name");
    this.setNamedCurve(this.curveName), this.setPublicKeyHex(d);
  }, e !== void 0 && e.curve !== void 0 && (this.curveName = e.curve), this.curveName === void 0 && (this.curveName = t), this.setNamedCurve(this.curveName), e !== void 0 && (e.prv !== void 0 && this.setPrivateKeyHex(e.prv), e.pub !== void 0 && this.setPublicKeyHex(e.pub));
};
a.crypto.ECDSA.parseSigHex = function(e) {
  var t = a.crypto.ECDSA.parseSigHexInHexRS(e), r = new R(t.r, 16), i = new R(t.s, 16);
  return { r, s: i };
};
a.crypto.ECDSA.parseSigHexInHexRS = function(e) {
  var t = V, r = t.getChildIdx, i = t.getV;
  if (t.checkStrictDER(e, 0), e.substr(0, 2) != "30")
    throw new Error("signature is not a ASN.1 sequence");
  var s = r(e, 0);
  if (s.length != 2)
    throw new Error("signature shall have two elements");
  var n = s[0], h = s[1];
  if (e.substr(n, 2) != "02")
    throw new Error("1st item not ASN.1 integer");
  if (e.substr(h, 2) != "02")
    throw new Error("2nd item not ASN.1 integer");
  var u = i(e, n), p = i(e, h);
  return { r: u, s: p };
};
a.crypto.ECDSA.asn1SigToConcatSig = function(e) {
  var t = a.crypto.ECDSA.parseSigHexInHexRS(e), r = t.r, i = t.s;
  if (r.length >= 130 && r.length <= 134) {
    if (r.length % 2 != 0)
      throw Error("unknown ECDSA sig r length error");
    if (i.length % 2 != 0)
      throw Error("unknown ECDSA sig s length error");
    r.substr(0, 2) == "00" && (r = r.substr(2)), i.substr(0, 2) == "00" && (i = i.substr(2));
    var s = Math.max(r.length, i.length);
    return r = ("000000" + r).slice(-s), i = ("000000" + i).slice(-s), r + i;
  }
  if (r.substr(0, 2) == "00" && r.length % 32 == 2 && (r = r.substr(2)), i.substr(0, 2) == "00" && i.length % 32 == 2 && (i = i.substr(2)), r.length % 32 == 30 && (r = "00" + r), i.length % 32 == 30 && (i = "00" + i), r.length % 32 != 0)
    throw Error("unknown ECDSA sig r length error");
  if (i.length % 32 != 0)
    throw Error("unknown ECDSA sig s length error");
  return r + i;
};
a.crypto.ECDSA.concatSigToASN1Sig = function(e) {
  if (e.length % 4 != 0)
    throw Error("unknown ECDSA concatinated r-s sig length error");
  var t = e.substr(0, e.length / 2), r = e.substr(e.length / 2);
  return a.crypto.ECDSA.hexRSSigToASN1Sig(t, r);
};
a.crypto.ECDSA.hexRSSigToASN1Sig = function(e, t) {
  var r = new R(e, 16), i = new R(t, 16);
  return a.crypto.ECDSA.biRSSigToASN1Sig(r, i);
};
a.crypto.ECDSA.biRSSigToASN1Sig = function(e, t) {
  var r = a.asn1, i = new r.DERInteger({ bigint: e }), s = new r.DERInteger({ bigint: t }), n = new r.DERSequence({ array: [i, s] });
  return n.tohex();
};
a.crypto.ECDSA.getName = function(e) {
  return e === "2b8104001f" ? "secp192k1" : e === "2a8648ce3d030107" ? "secp256r1" : e === "2b8104000a" ? "secp256k1" : e === "2b81040021" ? "secp224r1" : e === "2b81040022" ? "secp384r1" : e === "2b81040023" ? "secp521r1" : "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(e) !== -1 ? "secp256r1" : "|secp256k1|".indexOf(e) !== -1 ? "secp256k1" : "|secp224r1|NIST P-224|P-224|".indexOf(e) !== -1 ? "secp224r1" : "|secp384r1|NIST P-384|P-384|".indexOf(e) !== -1 ? "secp384r1" : "|secp521r1|NIST P-521|P-521|".indexOf(e) !== -1 ? "secp521r1" : null;
};
(typeof a > "u" || !a) && (a = {});
(typeof a.crypto > "u" || !a.crypto) && (a.crypto = {});
a.crypto.ECParameterDB = new function() {
  var e = {}, t = {};
  function r(i) {
    return new R(i, 16);
  }
  this.getByName = function(i) {
    var s = i;
    if (typeof t[s] < "u" && (s = t[i]), typeof e[s] < "u")
      return e[s];
    throw "unregistered EC curve name: " + s;
  }, this.regist = function(i, s, n, h, u, p, c, y, v, o, l, f) {
    e[i] = {};
    var d = r(n), g = r(h), m = r(u), F = r(p), D = r(c), A = new Re(d, g, m), C = A.decodePointHex("04" + y + v);
    e[i].name = i, e[i].keylen = s, e[i].keycharlen = Math.ceil(s / 8) * 2, e[i].curve = A, e[i].G = C, e[i].n = F, e[i].h = D, e[i].oid = l, e[i].info = f;
    for (var x = 0; x < o.length; x++)
      t[o[x]] = i;
  };
}();
a.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field");
a.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field");
a.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field");
a.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []);
a.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []);
a.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []);
a.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []);
a.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]);
a.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]);
a.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "00C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]);
(typeof a > "u" || !a) && (a = {});
(typeof a.crypto > "u" || !a.crypto) && (a.crypto = {});
a.crypto.DSA = function() {
  var e = V;
  e.getVbyList;
  var t = e.getVbyListEx, r = e.isASN1HEX, i = R;
  this.p = null, this.q = null, this.g = null, this.y = null, this.x = null, this.type = "DSA", this.isPrivate = !1, this.isPublic = !1, this.setPrivate = function(s, n, h, u, p) {
    this.isPrivate = !0, this.p = s, this.q = n, this.g = h, this.y = u, this.x = p;
  }, this.setPrivateHex = function(s, n, h, u, p) {
    var c, y, v, o, l;
    c = new R(s, 16), y = new R(n, 16), v = new R(h, 16), typeof u == "string" && u.length > 1 ? o = new R(u, 16) : o = null, l = new R(p, 16), this.setPrivate(c, y, v, o, l);
  }, this.setPublic = function(s, n, h, u) {
    this.isPublic = !0, this.p = s, this.q = n, this.g = h, this.y = u, this.x = null;
  }, this.setPublicHex = function(s, n, h, u) {
    var p, c, y, v;
    p = new R(s, 16), c = new R(n, 16), y = new R(h, 16), v = new R(u, 16), this.setPublic(p, c, y, v);
  }, this.signWithMessageHash = function(s) {
    var n = this.p, h = this.q, u = this.g;
    this.y;
    var p = this.x, c = a.crypto.Util.getRandomBigIntegerMinToMax(R.ONE.add(R.ONE), h.subtract(R.ONE)), y = s.substr(0, h.bitLength() / 4), v = new R(y, 16), o = u.modPow(c, n).mod(h), l = c.modInverse(h).multiply(v.add(p.multiply(o))).mod(h), f = a.asn1.ASN1Util.jsonToASN1HEX({ seq: [{ int: { bigint: o } }, { int: { bigint: l } }] });
    return f;
  }, this.verifyWithMessageHash = function(s, n) {
    var h = this.p, u = this.q, p = this.g, c = this.y, y = this.parseASN1Signature(n), v = y[0], o = y[1], l = s.substr(0, u.bitLength() / 4), f = new R(l, 16);
    if (R.ZERO.compareTo(v) > 0 || v.compareTo(u) > 0 || R.ZERO.compareTo(o) >= 0 || o.compareTo(u) > 0)
      throw "invalid DSA signature";
    var d = o.modInverse(u), g = f.multiply(d).mod(u), m = v.multiply(d).mod(u), F = p.modPow(g, h).multiply(c.modPow(m, h)).mod(h).mod(u);
    return F.compareTo(v) == 0;
  }, this.parseASN1Signature = function(s) {
    try {
      var n = new i(t(s, 0, [0], "02"), 16), h = new i(t(s, 0, [1], "02"), 16);
      return [n, h];
    } catch {
      throw new Error("malformed ASN.1 DSA signature");
    }
  }, this.readPKCS5PrvKeyHex = function(s) {
    var n, h, u, p, c;
    if (r(s) === !1)
      throw new Error("not ASN.1 hex string");
    try {
      n = t(s, 0, [1], "02"), h = t(s, 0, [2], "02"), u = t(s, 0, [3], "02"), p = t(s, 0, [4], "02"), c = t(s, 0, [5], "02");
    } catch {
      throw new Error("malformed PKCS#1/5 plain DSA private key");
    }
    this.setPrivateHex(n, h, u, p, c);
  }, this.readPKCS8PrvKeyHex = function(s) {
    var n, h, u, p;
    if (r(s) === !1)
      throw new Error("not ASN.1 hex string");
    try {
      n = t(s, 0, [1, 1, 0], "02"), h = t(s, 0, [1, 1, 1], "02"), u = t(s, 0, [1, 1, 2], "02"), p = t(s, 0, [2, 0], "02");
    } catch {
      throw new Error("malformed PKCS#8 plain DSA private key");
    }
    this.setPrivateHex(n, h, u, null, p);
  }, this.readPKCS8PubKeyHex = function(s) {
    var n, h, u, p;
    if (r(s) === !1)
      throw new Error("not ASN.1 hex string");
    try {
      n = t(s, 0, [0, 1, 0], "02"), h = t(s, 0, [0, 1, 1], "02"), u = t(s, 0, [0, 1, 2], "02"), p = t(s, 0, [1, 0], "02");
    } catch {
      throw new Error("malformed PKCS#8 DSA public key");
    }
    this.setPublicHex(n, h, u, p);
  }, this.readCertPubKeyHex = function(s, n) {
    var h, u, p, c;
    if (r(s) === !1)
      throw new Error("not ASN.1 hex string");
    try {
      h = t(s, 0, [0, 5, 0, 1, 0], "02"), u = t(s, 0, [0, 5, 0, 1, 1], "02"), p = t(s, 0, [0, 5, 0, 1, 2], "02"), c = t(s, 0, [0, 5, 1, 0], "02");
    } catch {
      throw new Error("malformed X.509 certificate DSA public key");
    }
    this.setPublicHex(h, u, p, c);
  };
};
var k = /* @__PURE__ */ function() {
  var e = function(f, d, g) {
    return i(L.AES, f, d, g);
  }, t = function(f, d, g) {
    return i(L.TripleDES, f, d, g);
  }, r = function(f, d, g) {
    return i(L.DES, f, d, g);
  }, i = function(f, d, g, m) {
    var F = L.enc.Hex.parse(d), D = L.enc.Hex.parse(g), A = L.enc.Hex.parse(m), C = {};
    C.key = D, C.iv = A, C.ciphertext = F;
    var x = f.decrypt(C, D, { iv: A });
    return L.enc.Hex.stringify(x);
  }, s = function(f, d, g) {
    return u(L.AES, f, d, g);
  }, n = function(f, d, g) {
    return u(L.TripleDES, f, d, g);
  }, h = function(f, d, g) {
    return u(L.DES, f, d, g);
  }, u = function(f, d, g, m) {
    var F = L.enc.Hex.parse(d), D = L.enc.Hex.parse(g), A = L.enc.Hex.parse(m), C = f.encrypt(F, D, { iv: A }), x = L.enc.Hex.parse(C.toString()), E = L.enc.Base64.stringify(x);
    return E;
  }, p = { "AES-256-CBC": { proc: e, eproc: s, keylen: 32, ivlen: 16 }, "AES-192-CBC": { proc: e, eproc: s, keylen: 24, ivlen: 16 }, "AES-128-CBC": { proc: e, eproc: s, keylen: 16, ivlen: 16 }, "DES-EDE3-CBC": { proc: t, eproc: n, keylen: 24, ivlen: 8 }, "DES-CBC": { proc: r, eproc: h, keylen: 8, ivlen: 8 } }, c = function(f) {
    var d = L.lib.WordArray.random(f), g = L.enc.Hex.stringify(d);
    return g;
  }, y = function(f) {
    var d = {}, g = f.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
    g && (d.cipher = g[1], d.ivsalt = g[2]);
    var m = f.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
    m && (d.type = m[1]);
    var F = -1, D = 0;
    f.indexOf(`\r
\r
`) != -1 && (F = f.indexOf(`\r
\r
`), D = 2), f.indexOf(`

`) != -1 && (F = f.indexOf(`

`), D = 1);
    var A = f.indexOf("-----END");
    if (F != -1 && A != -1) {
      var C = f.substring(F + D * 2, A - D);
      C = C.replace(/\s+/g, ""), d.data = C;
    }
    return d;
  }, v = function(f, d, g) {
    for (var m = g.substring(0, 16), F = L.enc.Hex.parse(m), D = L.enc.Utf8.parse(d), A = p[f].keylen + p[f].ivlen, C = "", x = null; ; ) {
      var E = L.algo.MD5.create();
      if (x != null && E.update(x), E.update(D), E.update(F), x = E.finalize(), C = C + L.enc.Hex.stringify(x), C.length >= A * 2)
        break;
    }
    var w = {};
    return w.keyhex = C.substr(0, p[f].keylen * 2), w.ivhex = C.substr(p[f].keylen * 2, p[f].ivlen * 2), w;
  }, o = function(f, d, g, m) {
    var F = L.enc.Base64.parse(f), D = L.enc.Hex.stringify(F), A = p[d].proc, C = A(D, g, m);
    return C;
  }, l = function(f, d, g, m) {
    var F = p[d].eproc, D = F(f, g, m);
    return D;
  };
  return { version: "1.0.0", parsePKCS5PEM: function(f) {
    return y(f);
  }, getKeyAndUnusedIvByPasscodeAndIvsalt: function(f, d, g) {
    return v(f, d, g);
  }, decryptKeyB64: function(f, d, g, m) {
    return o(f, d, g, m);
  }, getDecryptedKeyHex: function(f, d) {
    var g = y(f);
    g.type;
    var m = g.cipher, F = g.ivsalt, D = g.data, A = v(m, d, F), C = A.keyhex, x = o(D, m, C, F);
    return x;
  }, getEncryptedPKCS5PEMFromPrvKeyHex: function(f, d, g, m, F) {
    var S = "";
    if ((typeof m > "u" || m == null) && (m = "AES-256-CBC"), typeof p[m] > "u")
      throw new Error("KEYUTIL unsupported algorithm: " + m);
    if (typeof F > "u" || F == null) {
      var D = p[m].ivlen, A = c(D);
      F = A.toUpperCase();
    }
    var C = v(m, g, F), x = C.keyhex, E = l(d, m, x, F), w = E.replace(/(.{64})/g, `$1\r
`), S = "-----BEGIN " + f + ` PRIVATE KEY-----\r
`;
    return S += `Proc-Type: 4,ENCRYPTED\r
`, S += "DEK-Info: " + m + "," + F + `\r
`, S += `\r
`, S += w, S += `\r
-----END ` + f + ` PRIVATE KEY-----\r
`, S;
  }, getEncryptedPKCS8PEM: function(f, d, g) {
    var m = this.getEncryptedPKCS8Hex(f, d, g);
    return le(m, "ENCRYPTED PRIVATE KEY");
  }, getEncryptedPKCS8Hex: function(f, d, g) {
    var m;
    g == null || g == null ? m = {} : m = JSON.parse(JSON.stringify(g)), m.plain = f, this.initPBES2Param(m), this.encryptPBES2Param(m, d);
    var F = this.generatePBES2ASN1Param(m);
    return a.asn1.ASN1Util.newObject(F).tohex();
  }, initPBES2Param: function(f) {
    if (J(f, "encalg") == null && (f.encalg = "aes256-CBC"), J(f, "iter") == null && (f.iter = 2048), J(f, "prf") == null && (f.prf = "hmacWithSHA256"), J(f, "salt") == null && (f.salt = L.enc.Hex.stringify(L.lib.WordArray.random(8))), J(f, "enciv") == null) {
      var d;
      f.encalg == "des-EDE3-CBC" && (d = 8), f.encalg == "aes128-CBC" && (d = 16), f.encalg == "aes256-CBC" && (d = 16), f.enciv = L.enc.Hex.stringify(L.lib.WordArray.random(d));
    }
  }, encryptPBES2Param: function(f, d) {
    var g = k.getDKFromPBES2Param(f, d);
    try {
      var m = a.crypto.Cipher.encrypt(f.plain, g, f.encalg, { iv: f.enciv });
    } catch {
      throw new Error("encrypt error: " + f.plain + " " + g + " " + f.encalg + " " + f.enciv);
    }
    f.enc = m;
  }, generatePBES2ASN1Param: function(f) {
    var d = { seq: [{ seq: [{ oid: "pkcs5PBES2" }, { seq: [{ seq: [{ oid: "pkcs5PBKDF2" }, { seq: [{ octstr: { hex: f.salt } }, { int: { hex: Gt(f.iter) } }] }] }, { seq: [{ oid: f.encalg }, { octstr: { hex: f.enciv } }] }] }] }, { octstr: { hex: f.enc } }] };
    return f.prf != "hmacWithSHA1" && d.seq[0].seq[1].seq[0].seq[1].seq.push({ seq: [{ oid: f.prf }, { null: "" }] }), d;
  }, parseHexOfEncryptedPKCS8: function(f) {
    var d = V, g = d.getChildIdx, m = d.getV, F = {}, D = g(f, 0);
    if (D.length != 2)
      throw new Error("malformed format: SEQUENCE(0).items != 2: " + D.length);
    F.ciphertext = m(f, D[1]);
    var A = g(f, D[0]);
    if (A.length != 2)
      throw new Error("malformed format: SEQUENCE(0.0).items != 2: " + A.length);
    if (m(f, A[0]) != "2a864886f70d01050d")
      throw new Error("this only supports pkcs5PBES2");
    var C = g(f, A[1]);
    if (A.length != 2)
      throw new Error("malformed format: SEQUENCE(0.0.1).items != 2: " + C.length);
    var x = g(f, C[1]);
    if (x.length != 2)
      throw new Error("malformed format: SEQUENCE(0.0.1.1).items != 2: " + x.length);
    if (m(f, x[0]) != "2a864886f70d0307")
      throw "this only supports TripleDES";
    F.encryptionSchemeAlg = "TripleDES", F.encryptionSchemeIV = m(f, x[1]);
    var E = g(f, C[0]);
    if (E.length != 2)
      throw new Error("malformed format: SEQUENCE(0.0.1.0).items != 2: " + E.length);
    if (m(f, E[0]) != "2a864886f70d01050c")
      throw new Error("this only supports pkcs5PBKDF2");
    var w = g(f, E[1]);
    if (w.length < 2)
      throw new Error("malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + w.length);
    F.pbkdf2Salt = m(f, w[0]);
    var S = m(f, w[1]);
    try {
      F.pbkdf2Iter = parseInt(S, 16);
    } catch {
      throw new Error("malformed format pbkdf2Iter: " + S);
    }
    return F;
  }, getPBKDF2KeyHexFromParam: function(f, d) {
    var g = L.enc.Hex.parse(f.pbkdf2Salt), m = f.pbkdf2Iter, F = L.PBKDF2(d, g, { keySize: 192 / 32, iterations: m }), D = L.enc.Hex.stringify(F);
    return D;
  }, _getPlainPKCS8HexFromEncryptedPKCS8PEM: function(f, d) {
    var g = ie(f, "ENCRYPTED PRIVATE KEY"), m = this.parseHexOfEncryptedPKCS8(g), F = k.getPBKDF2KeyHexFromParam(m, d), D = {};
    D.ciphertext = L.enc.Hex.parse(m.ciphertext);
    var A = L.enc.Hex.parse(F), C = L.enc.Hex.parse(m.encryptionSchemeIV), x = L.TripleDES.decrypt(D, A, { iv: C }), E = L.enc.Hex.stringify(x);
    return E;
  }, parsePBES2: function(f) {
    var d = V.parse(f);
    if (J(d, "seq.0.seq.0.oid") != "pkcs5PBES2" || J(d, "seq.0.seq.1.seq.0.seq.0.oid") != "pkcs5PBKDF2")
      throw new Error("not pkcs5PBES2 and pkcs5PBKDF2 used");
    var g = J(d, "seq.0.seq.1.seq.0.seq.1.seq");
    if (g == null)
      throw new Error("PBKDF2 parameter not found");
    var m = J(g, "0.octstr.hex"), F = J(g, "1.int.hex"), D = J(g, "2.seq.0.oid", "hmacWithSHA1"), A = -1;
    try {
      A = parseInt(F, 16);
    } catch {
      throw new Error("iter not proper value");
    }
    var C = J(d, "seq.0.seq.1.seq.1.seq.0.oid"), x = J(d, "seq.0.seq.1.seq.1.seq.1.octstr.hex"), E = J(d, "seq.1.octstr.hex");
    if (C == null || x == null || E == null)
      throw new Error("encalg, enciv or enc is undefined");
    var w = { salt: m, iter: A, prf: D, encalg: C, enciv: x, enc: E };
    return w;
  }, getDKFromPBES2Param: function(f, d) {
    var g = { hmacWithSHA1: L.algo.SHA1, hmacWithSHA224: L.algo.SHA224, hmacWithSHA256: L.algo.SHA256, hmacWithSHA384: L.algo.SHA384, hmacWithSHA512: L.algo.SHA512 }, m = { "des-EDE3-CBC": 192 / 32, "aes128-CBC": 128 / 32, "aes256-CBC": 256 / 32 }, F = g[f.prf];
    if (F == null)
      throw new Error("unsupported prf");
    var D = m[f.encalg];
    if (D == null)
      throw new Error("unsupported encalg");
    var A = L.enc.Hex.parse(f.salt), C = f.iter;
    try {
      var x = L.PBKDF2(d, A, { keySize: D, iterations: C, hasher: F });
      return L.enc.Hex.stringify(x);
    } catch (E) {
      throw new Error("PBKDF2 error: " + E + " " + JSON.stringify(f) + " " + d);
    }
  }, getPlainHexFromEncryptedPKCS8PEM: function(f, d) {
    if (f.indexOf("BEGIN ENCRYPTED PRIVATE KEY") == -1)
      throw new Error("not Encrypted PKCS#8 PEM string");
    var g = ie(f), m;
    try {
      m = k.parsePBES2(g);
    } catch (D) {
      throw new Error("malformed PBES2 format: " + D.message);
    }
    var F = k.getDKFromPBES2Param(m, d);
    return a.crypto.Cipher.decrypt(m.enc, F, m.encalg, { iv: m.enciv });
  }, getKeyFromEncryptedPKCS8PEM: function(f, d) {
    var g = this.getPlainHexFromEncryptedPKCS8PEM(f, d), m = this.getKeyFromPlainPrivatePKCS8Hex(g);
    return m;
  }, parsePlainPrivatePKCS8Hex: function(f) {
    var d = V, g = d.getChildIdx, m = d.getV, F = {};
    if (F.algparam = null, f.substr(0, 2) != "30")
      throw new Error("malformed plain PKCS8 private key(code:001)");
    var D = g(f, 0);
    if (D.length < 3)
      throw new Error("malformed plain PKCS8 private key(code:002)");
    if (f.substr(D[1], 2) != "30")
      throw new Error("malformed PKCS8 private key(code:003)");
    var A = g(f, D[1]);
    if (A.length != 2)
      throw new Error("malformed PKCS8 private key(code:004)");
    if (f.substr(A[0], 2) != "06")
      throw new Error("malformed PKCS8 private key(code:005)");
    if (F.algoid = m(f, A[0]), f.substr(A[1], 2) == "06" && (F.algparam = m(f, A[1])), f.substr(D[2], 2) != "04")
      throw new Error("malformed PKCS8 private key(code:006)");
    return F.keyidx = d.getVidx(f, D[2]), F;
  }, getKeyFromPlainPrivatePKCS8PEM: function(f) {
    var d = ie(f, "PRIVATE KEY"), g = this.getKeyFromPlainPrivatePKCS8Hex(d);
    return g;
  }, getKeyFromPlainPrivatePKCS8Hex: function(f) {
    var d = this.parsePlainPrivatePKCS8Hex(f), g;
    if (d.algoid == "2a864886f70d010101")
      g = new q();
    else if (d.algoid == "2a8648ce380401")
      g = new a.crypto.DSA();
    else if (d.algoid == "2a8648ce3d0201")
      g = new a.crypto.ECDSA();
    else
      throw new Error("unsupported private key algorithm");
    return g.readPKCS8PrvKeyHex(f), g;
  }, _getKeyFromPublicPKCS8Hex: function(f) {
    var d, g = V.getVbyList(f, 0, [0, 0], "06");
    if (g === "2a864886f70d010101")
      d = new q();
    else if (g === "2a8648ce380401")
      d = new a.crypto.DSA();
    else if (g === "2a8648ce3d0201")
      d = new a.crypto.ECDSA();
    else
      throw new Error("unsupported PKCS#8 public key hex");
    return d.readPKCS8PubKeyHex(f), d;
  }, parsePublicRawRSAKeyHex: function(f) {
    var d = V, g = d.getChildIdx, m = d.getV, F = {};
    if (f.substr(0, 2) != "30")
      throw new Error("malformed RSA key(code:001)");
    var D = g(f, 0);
    if (D.length != 2)
      throw new Error("malformed RSA key(code:002)");
    if (f.substr(D[0], 2) != "02")
      throw new Error("malformed RSA key(code:003)");
    if (F.n = m(f, D[0]), f.substr(D[1], 2) != "02")
      throw new Error("malformed RSA key(code:004)");
    return F.e = m(f, D[1]), F;
  }, parsePublicPKCS8Hex: function(f) {
    var d = V, g = d.getChildIdx, m = d.getV, F = {};
    F.algparam = null;
    var D = g(f, 0);
    if (D.length != 2)
      throw new Error("outer DERSequence shall have 2 elements: " + D.length);
    var A = D[0];
    if (f.substr(A, 2) != "30")
      throw new Error("malformed PKCS8 public key(code:001)");
    var C = g(f, A);
    if (C.length != 2)
      throw new Error("malformed PKCS8 public key(code:002)");
    if (f.substr(C[0], 2) != "06")
      throw new Error("malformed PKCS8 public key(code:003)");
    if (F.algoid = m(f, C[0]), f.substr(C[1], 2) == "06" ? F.algparam = m(f, C[1]) : f.substr(C[1], 2) == "30" && (F.algparam = {}, F.algparam.p = d.getVbyList(f, C[1], [0], "02"), F.algparam.q = d.getVbyList(f, C[1], [1], "02"), F.algparam.g = d.getVbyList(f, C[1], [2], "02")), f.substr(D[1], 2) != "03")
      throw new Error("malformed PKCS8 public key(code:004)");
    return F.key = m(f, D[1]).substr(2), F;
  } };
}();
k.getKey = function(e, t, r) {
  var i = V, s = i.getChildIdx;
  i.getV;
  var n = i.getVbyList, h = a.crypto, u = h.ECDSA, p = h.DSA, c = q, y = ie, v = k;
  if (typeof c < "u" && e instanceof c || typeof u < "u" && e instanceof u || typeof p < "u" && e instanceof p)
    return e;
  if (e.curve !== void 0 && e.xy !== void 0 && e.d === void 0)
    return new u({ pub: e.xy, curve: e.curve });
  if (e.curve !== void 0 && e.d !== void 0)
    return new u({ prv: e.d, curve: e.curve });
  if (e.kty === void 0 && e.n !== void 0 && e.e !== void 0 && e.d === void 0) {
    var o = new c();
    return o.setPublic(e.n, e.e), o;
  }
  if (e.kty === void 0 && e.n !== void 0 && e.e !== void 0 && e.d !== void 0 && e.p !== void 0 && e.q !== void 0 && e.dp !== void 0 && e.dq !== void 0 && e.co !== void 0 && e.qi === void 0) {
    var o = new c();
    return o.setPrivateEx(e.n, e.e, e.d, e.p, e.q, e.dp, e.dq, e.co), o;
  }
  if (e.kty === void 0 && e.n !== void 0 && e.e !== void 0 && e.d !== void 0 && e.p === void 0) {
    var o = new c();
    return o.setPrivate(e.n, e.e, e.d), o;
  }
  if (e.p !== void 0 && e.q !== void 0 && e.g !== void 0 && e.y !== void 0 && e.x === void 0) {
    var o = new p();
    return o.setPublic(e.p, e.q, e.g, e.y), o;
  }
  if (e.p !== void 0 && e.q !== void 0 && e.g !== void 0 && e.y !== void 0 && e.x !== void 0) {
    var o = new p();
    return o.setPrivate(e.p, e.q, e.g, e.y, e.x), o;
  }
  if (e.kty === "RSA" && e.n !== void 0 && e.e !== void 0 && e.d === void 0) {
    var o = new c();
    return o.setPublic(Z(e.n), Z(e.e)), o;
  }
  if (e.kty === "RSA" && e.n !== void 0 && e.e !== void 0 && e.d !== void 0 && e.p !== void 0 && e.q !== void 0 && e.dp !== void 0 && e.dq !== void 0 && e.qi !== void 0) {
    var o = new c();
    return o.setPrivateEx(Z(e.n), Z(e.e), Z(e.d), Z(e.p), Z(e.q), Z(e.dp), Z(e.dq), Z(e.qi)), o;
  }
  if (e.kty === "RSA" && e.n !== void 0 && e.e !== void 0 && e.d !== void 0) {
    var o = new c();
    return o.setPrivate(Z(e.n), Z(e.e), Z(e.d)), o;
  }
  if (e.kty === "EC" && e.crv !== void 0 && e.x !== void 0 && e.y !== void 0 && e.d === void 0) {
    var l = new u({ curve: e.crv }), f = l.ecparams.keycharlen, d = ("0000000000" + Z(e.x)).slice(-f), g = ("0000000000" + Z(e.y)).slice(-f), m = "04" + d + g;
    return l.setPublicKeyHex(m), l;
  }
  if (e.kty === "EC" && e.crv !== void 0 && e.x !== void 0 && e.y !== void 0 && e.d !== void 0) {
    var l = new u({ curve: e.crv }), f = l.ecparams.keycharlen, d = ("0000000000" + Z(e.x)).slice(-f), g = ("0000000000" + Z(e.y)).slice(-f), m = "04" + d + g, F = ("0000000000" + Z(e.d)).slice(-f);
    return l.setPublicKeyHex(m), l.setPrivateKeyHex(F), l;
  }
  if (r === "pkcs5prv") {
    var D = e, i = V, A, o;
    if (A = s(D, 0), A.length === 9)
      o = new c(), o.readPKCS5PrvKeyHex(D);
    else if (A.length === 6)
      o = new p(), o.readPKCS5PrvKeyHex(D);
    else if (A.length > 2 && D.substr(A[1], 2) === "04")
      o = new u(), o.readPKCS5PrvKeyHex(D);
    else
      throw new Error("unsupported PKCS#1/5 hexadecimal key");
    return o;
  }
  if (r === "pkcs8prv") {
    var o = v.getKeyFromPlainPrivatePKCS8Hex(e);
    return o;
  }
  if (r === "pkcs8pub")
    return v._getKeyFromPublicPKCS8Hex(e);
  if (r === "x509pub")
    return _.getPublicKeyFromCertHex(e);
  if (e.indexOf("-END CERTIFICATE-", 0) != -1 || e.indexOf("-END X509 CERTIFICATE-", 0) != -1 || e.indexOf("-END TRUSTED CERTIFICATE-", 0) != -1)
    return _.getPublicKeyFromCertPEM(e);
  if (e.indexOf("-END PUBLIC KEY-") != -1) {
    var C = ie(e, "PUBLIC KEY");
    return v._getKeyFromPublicPKCS8Hex(C);
  }
  if (e.indexOf("-END RSA PRIVATE KEY-") != -1 && e.indexOf("4,ENCRYPTED") == -1) {
    var x = y(e, "RSA PRIVATE KEY");
    return v.getKey(x, null, "pkcs5prv");
  }
  if (e.indexOf("-END DSA PRIVATE KEY-") != -1 && e.indexOf("4,ENCRYPTED") == -1) {
    var E = y(e, "DSA PRIVATE KEY"), w = n(E, 0, [1], "02"), S = n(E, 0, [2], "02"), b = n(E, 0, [3], "02"), P = n(E, 0, [4], "02"), T = n(E, 0, [5], "02"), o = new p();
    return o.setPrivate(new R(w, 16), new R(S, 16), new R(b, 16), new R(P, 16), new R(T, 16)), o;
  }
  if (e.indexOf("-END EC PRIVATE KEY-") != -1 && e.indexOf("4,ENCRYPTED") == -1) {
    var x = y(e, "EC PRIVATE KEY");
    return v.getKey(x, null, "pkcs5prv");
  }
  if (e.indexOf("-END PRIVATE KEY-") != -1)
    return v.getKeyFromPlainPrivatePKCS8PEM(e);
  if (e.indexOf("-END RSA PRIVATE KEY-") != -1 && e.indexOf("4,ENCRYPTED") != -1) {
    var H = v.getDecryptedKeyHex(e, t), I = new q();
    return I.readPKCS5PrvKeyHex(H), I;
  }
  if (e.indexOf("-END EC PRIVATE KEY-") != -1 && e.indexOf("4,ENCRYPTED") != -1) {
    var E = v.getDecryptedKeyHex(e, t), o = n(E, 0, [1], "04"), B = n(E, 0, [2, 0], "06"), O = n(E, 0, [3, 0], "03").substr(2), j = "";
    if (a.crypto.OID.oidhex2name[B] !== void 0)
      j = a.crypto.OID.oidhex2name[B];
    else
      throw new Error("undefined OID(hex) in KJUR.crypto.OID: " + B);
    var l = new u({ curve: j });
    return l.setPublicKeyHex(O), l.setPrivateKeyHex(o), l.isPublic = !1, l;
  }
  if (e.indexOf("-END DSA PRIVATE KEY-") != -1 && e.indexOf("4,ENCRYPTED") != -1) {
    var E = v.getDecryptedKeyHex(e, t), w = n(E, 0, [1], "02"), S = n(E, 0, [2], "02"), b = n(E, 0, [3], "02"), P = n(E, 0, [4], "02"), T = n(E, 0, [5], "02"), o = new p();
    return o.setPrivate(new R(w, 16), new R(S, 16), new R(b, 16), new R(P, 16), new R(T, 16)), o;
  }
  if (e.indexOf("-END ENCRYPTED PRIVATE KEY-") != -1)
    return v.getKeyFromEncryptedPKCS8PEM(e, t);
  throw new Error("not supported argument");
};
k.generateKeypair = function(e, t) {
  if (e == "RSA") {
    var r = t, i = new q();
    i.generate(r, "10001"), i.isPrivate = !0, i.isPublic = !0;
    var s = new q(), n = i.n.toString(16), h = i.e.toString(16);
    s.setPublic(n, h), s.isPrivate = !1, s.isPublic = !0;
    var u = {};
    return u.prvKeyObj = i, u.pubKeyObj = s, u;
  } else if (e == "EC") {
    var p = t, c = new a.crypto.ECDSA({ curve: p }), y = c.generateKeyPairHex(), i = new a.crypto.ECDSA({ curve: p });
    i.setPublicKeyHex(y.ecpubhex), i.setPrivateKeyHex(y.ecprvhex), i.isPrivate = !0, i.isPublic = !1;
    var s = new a.crypto.ECDSA({ curve: p });
    s.setPublicKeyHex(y.ecpubhex), s.isPrivate = !1, s.isPublic = !0;
    var u = {};
    return u.prvKeyObj = i, u.pubKeyObj = s, u;
  } else
    throw new Error("unknown algorithm: " + e);
};
k.getPEM = function(e, t, r, i, s, n) {
  var h = a, u = h.asn1, p = u.DERObjectIdentifier, c = u.DERInteger, y = u.ASN1Util.newObject, v = u.x509, o = v.SubjectPublicKeyInfo, l = h.crypto, f = l.DSA, d = l.ECDSA, g = q;
  function m(B) {
    var O = y({ seq: [{ int: 0 }, { int: { bigint: B.n } }, { int: B.e }, { int: { bigint: B.d } }, { int: { bigint: B.p } }, { int: { bigint: B.q } }, { int: { bigint: B.dmp1 } }, { int: { bigint: B.dmq1 } }, { int: { bigint: B.coeff } }] });
    return O;
  }
  function F(B) {
    var O = y({ seq: [{ int: 1 }, { octstr: { hex: B.prvKeyHex } }, { tag: ["a0", !0, { oid: { name: B.curveName } }] }, { tag: ["a1", !0, { bitstr: { hex: "00" + B.pubKeyHex } }] }] });
    return O;
  }
  function D(B) {
    var O = y({ seq: [{ int: 0 }, { int: { bigint: B.p } }, { int: { bigint: B.q } }, { int: { bigint: B.g } }, { int: { bigint: B.y } }, { int: { bigint: B.x } }] });
    return O;
  }
  if ((g !== void 0 && e instanceof g || f !== void 0 && e instanceof f || d !== void 0 && e instanceof d) && e.isPublic == !0 && (t === void 0 || t == "PKCS8PUB")) {
    var A = new o(e), C = A.tohex();
    return le(C, "PUBLIC KEY");
  }
  if (t == "PKCS1PRV" && g !== void 0 && e instanceof g && (r === void 0 || r == null) && e.isPrivate == !0) {
    var A = m(e), C = A.tohex();
    return le(C, "RSA PRIVATE KEY");
  }
  if (t == "PKCS1PRV" && d !== void 0 && e instanceof d && (r === void 0 || r == null) && e.isPrivate == !0) {
    var x = new p({ name: e.curveName }), E = x.tohex(), w = F(e), S = w.tohex(), b = "";
    return b += le(E, "EC PARAMETERS"), b += le(S, "EC PRIVATE KEY"), b;
  }
  if (t == "PKCS1PRV" && f !== void 0 && e instanceof f && (r === void 0 || r == null) && e.isPrivate == !0) {
    var A = D(e), C = A.tohex();
    return le(C, "DSA PRIVATE KEY");
  }
  if (t == "PKCS5PRV" && g !== void 0 && e instanceof g && r !== void 0 && r != null && e.isPrivate == !0) {
    var A = m(e), C = A.tohex();
    return i === void 0 && (i = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", C, r, i, n);
  }
  if (t == "PKCS5PRV" && d !== void 0 && e instanceof d && r !== void 0 && r != null && e.isPrivate == !0) {
    var A = F(e), C = A.tohex();
    return i === void 0 && (i = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", C, r, i, n);
  }
  if (t == "PKCS5PRV" && f !== void 0 && e instanceof f && r !== void 0 && r != null && e.isPrivate == !0) {
    var A = D(e), C = A.tohex();
    return i === void 0 && (i = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", C, r, i, n);
  }
  var P = function(B, O) {
    if (typeof O == "string")
      return k.getEncryptedPKCS8PEM(B, O);
    if (typeof O == "object" && J(O, "passcode") != null) {
      var j = JSON.parse(JSON.stringify(O)), ce = j.passcode;
      return delete j.passcode, k.getEncryptedPKCS8PEM(B, ce, j);
    }
  };
  if (t == "PKCS8PRV" && g != null && e instanceof g && e.isPrivate == !0) {
    var T = m(e), H = T.tohex(), A = y({ seq: [{ int: 0 }, { seq: [{ oid: { name: "rsaEncryption" } }, { null: !0 }] }, { octstr: { hex: H } }] }), C = A.tohex();
    return r === void 0 || r == null ? le(C, "PRIVATE KEY") : P(C, r);
  }
  if (t == "PKCS8PRV" && d !== void 0 && e instanceof d && e.isPrivate == !0) {
    var I = { seq: [{ int: 1 }, { octstr: { hex: e.prvKeyHex } }] };
    typeof e.pubKeyHex == "string" && I.seq.push({ tag: ["a1", !0, { bitstr: { hex: "00" + e.pubKeyHex } }] });
    var T = new y(I), H = T.tohex(), A = y({ seq: [{ int: 0 }, { seq: [{ oid: { name: "ecPublicKey" } }, { oid: { name: e.curveName } }] }, { octstr: { hex: H } }] }), C = A.tohex();
    return r === void 0 || r == null ? le(C, "PRIVATE KEY") : P(C, r);
  }
  if (t == "PKCS8PRV" && f !== void 0 && e instanceof f && e.isPrivate == !0) {
    var T = new c({ bigint: e.x }), H = T.tohex(), A = y({ seq: [{ int: 0 }, { seq: [{ oid: { name: "dsa" } }, { seq: [{ int: { bigint: e.p } }, { int: { bigint: e.q } }, { int: { bigint: e.g } }] }] }, { octstr: { hex: H } }] }), C = A.tohex();
    return r === void 0 || r == null ? le(C, "PRIVATE KEY") : P(C, r);
  }
  throw new Error("unsupported object nor format");
};
k.getKeyFromCSRPEM = function(e) {
  var t = ie(e, "CERTIFICATE REQUEST"), r = k.getKeyFromCSRHex(t);
  return r;
};
k.getKeyFromCSRHex = function(e) {
  var t = k.parseCSRHex(e), r = k.getKey(t.p8pubkeyhex, null, "pkcs8pub");
  return r;
};
k.parseCSRHex = function(e) {
  var t = V, r = t.getChildIdx, i = t.getTLV, s = {}, n = e;
  if (n.substr(0, 2) != "30")
    throw new Error("malformed CSR(code:001)");
  var h = r(n, 0);
  if (h.length < 1)
    throw new Error("malformed CSR(code:002)");
  if (n.substr(h[0], 2) != "30")
    throw new Error("malformed CSR(code:003)");
  var u = r(n, h[0]);
  if (u.length < 3)
    throw new Error("malformed CSR(code:004)");
  return s.p8pubkeyhex = i(n, u[2]), s;
};
k.getKeyID = function(e) {
  var t = k, r = V;
  typeof e == "string" && e.indexOf("BEGIN ") != -1 && (e = t.getKey(e));
  var i = ie(t.getPEM(e)), s = r.getIdxbyList(i, 0, [1]), n = r.getV(i, s).substring(2);
  return a.crypto.Util.hashHex(n, "sha1");
};
k.getJWK = function(e, t, r, i, s) {
  var n, h = {}, u, p = a.crypto.Util.hashHex;
  if (typeof e == "string")
    n = k.getKey(e), e.indexOf("CERTIFICATE") != -1 && (u = ie(e));
  else if (typeof e == "object")
    e instanceof _ ? (n = e.getPublicKey(), u = e.hex) : n = e;
  else
    throw new Error("unsupported keyinfo type");
  if (n instanceof q && n.isPrivate)
    h.kty = "RSA", h.n = se(n.n.toString(16)), h.e = se(n.e.toString(16)), h.d = se(n.d.toString(16)), h.p = se(n.p.toString(16)), h.q = se(n.q.toString(16)), h.dp = se(n.dmp1.toString(16)), h.dq = se(n.dmq1.toString(16)), h.qi = se(n.coeff.toString(16));
  else if (n instanceof q && n.isPublic)
    h.kty = "RSA", h.n = se(n.n.toString(16)), h.e = se(n.e.toString(16));
  else if (n instanceof a.crypto.ECDSA && n.isPrivate) {
    var c = n.getShortNISTPCurveName();
    if (c !== "P-256" && c !== "P-384" && c !== "P-521")
      throw new Error("unsupported curve name for JWT: " + c);
    var y = n.getPublicKeyXYHex();
    h.kty = "EC", h.crv = c, h.x = se(y.x), h.y = se(y.y), h.d = se(n.prvKeyHex);
  } else if (n instanceof a.crypto.ECDSA && n.isPublic) {
    var c = n.getShortNISTPCurveName();
    if (c !== "P-256" && c !== "P-384" && c !== "P-521")
      throw new Error("unsupported curve name for JWT: " + c);
    var y = n.getPublicKeyXYHex();
    h.kty = "EC", h.crv = c, h.x = se(y.x), h.y = se(y.y);
  }
  if (h.kty == null)
    throw new Error("unsupported keyinfo");
  return !n.isPrivate && t != !0 && (h.kid = a.jws.JWS.getJWKthumbprint(h)), u != null && r != !0 && (h.x5c = [Ie(u)]), u != null && i != !0 && (h.x5t = qe(Ie(p(u, "sha1")))), u != null && s != !0 && (h["x5t#S256"] = qe(Ie(p(u, "sha256")))), h;
};
k.getJWKFromKey = function(e) {
  return k.getJWK(e, !0, !0, !0, !0);
};
q.getPosArrayOfChildrenFromHex = function(e) {
  return V.getChildIdx(e, 0);
};
q.getHexValueArrayOfChildrenFromHex = function(e) {
  var t = V, r = t.getV, o = q.getPosArrayOfChildrenFromHex(e), i = r(e, o[0]), s = r(e, o[1]), n = r(e, o[2]), h = r(e, o[3]), u = r(e, o[4]), p = r(e, o[5]), c = r(e, o[6]), y = r(e, o[7]), v = r(e, o[8]), o = new Array();
  return o.push(i, s, n, h, u, p, c, y, v), o;
};
q.prototype.readPrivateKeyFromPEMString = function(e) {
  var t = ie(e), r = q.getHexValueArrayOfChildrenFromHex(t);
  this.setPrivateEx(r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]);
};
q.prototype.readPKCS5PrvKeyHex = function(e) {
  var t = q.getHexValueArrayOfChildrenFromHex(e);
  this.setPrivateEx(t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
};
q.prototype.readPKCS8PrvKeyHex = function(e) {
  var t, r, i, s, n, h, u, p, c = V, y = c.getVbyListEx;
  if (c.isASN1HEX(e) === !1)
    throw new Error("not ASN.1 hex string");
  try {
    t = y(e, 0, [2, 0, 1], "02"), r = y(e, 0, [2, 0, 2], "02"), i = y(e, 0, [2, 0, 3], "02"), s = y(e, 0, [2, 0, 4], "02"), n = y(e, 0, [2, 0, 5], "02"), h = y(e, 0, [2, 0, 6], "02"), u = y(e, 0, [2, 0, 7], "02"), p = y(e, 0, [2, 0, 8], "02");
  } catch {
    throw new Error("malformed PKCS#8 plain RSA private key");
  }
  this.setPrivateEx(t, r, i, s, n, h, u, p);
};
q.prototype.readPKCS5PubKeyHex = function(e) {
  var t = V, r = t.getV;
  if (t.isASN1HEX(e) === !1)
    throw new Error("keyHex is not ASN.1 hex string");
  var i = t.getChildIdx(e, 0);
  if (i.length !== 2 || e.substr(i[0], 2) !== "02" || e.substr(i[1], 2) !== "02")
    throw new Error("wrong hex for PKCS#5 public key");
  var s = r(e, i[0]), n = r(e, i[1]);
  this.setPublic(s, n);
};
q.prototype.readPKCS8PubKeyHex = function(e) {
  var t = V;
  if (t.isASN1HEX(e) === !1)
    throw new Error("not ASN.1 hex string");
  if (t.getTLVbyListEx(e, 0, [0, 0]) !== "06092a864886f70d010101")
    throw new Error("not PKCS8 RSA public key");
  var r = t.getTLVbyListEx(e, 0, [1, 0]);
  this.readPKCS5PubKeyHex(r);
};
q.prototype.readCertPubKeyHex = function(e, t) {
  var r, i;
  r = new _(), r.readCertHex(e), i = r.getPublicKeyHex(), this.readPKCS8PubKeyHex(i);
};
function $t(e, t) {
  for (var r = "", i = t / 4 - e.length, s = 0; s < i; s++)
    r = r + "0";
  return r + e;
}
q.prototype.sign = function(e, t) {
  var r = function(s) {
    return a.crypto.Util.hashString(s, t);
  }, i = r(e);
  return this.signWithMessageHash(i, t);
};
q.prototype.signWithMessageHash = function(e, t) {
  var r = a.crypto.Util.getPaddedDigestInfoHex(e, t, this.n.bitLength()), i = ge(r, 16), s = this.doPrivate(i), n = s.toString(16);
  return $t(n, this.n.bitLength());
};
function Yt(e, t, r) {
  for (var i = "", s = 0; i.length < t; )
    i += me(r(Pe(e + String.fromCharCode.apply(String, [(s & 4278190080) >> 24, (s & 16711680) >> 16, (s & 65280) >> 8, s & 255])))), s += 1;
  return i;
}
q.prototype.signPSS = function(e, t, r) {
  var i = function(n) {
    return a.crypto.Util.hashHex(n, t);
  }, s = i(Pe(e));
  return r === void 0 && (r = -1), this.signWithMessageHashPSS(s, t, r);
};
q.prototype.signWithMessageHashPSS = function(e, t, r) {
  var i = me(e), s = i.length, n = this.n.bitLength() - 1, h = Math.ceil(n / 8), u, p = function(g) {
    return a.crypto.Util.hashHex(g, t);
  };
  if (r === -1 || r === void 0)
    r = s;
  else if (r === -2)
    r = h - s - 2;
  else if (r < -2)
    throw new Error("invalid salt length");
  if (h < s + r + 2)
    throw new Error("data too long");
  var c = "";
  r > 0 && (c = new Array(r), new ze().nextBytes(c), c = String.fromCharCode.apply(String, c));
  var y = me(p(Pe("\0\0\0\0\0\0\0\0" + i + c))), v = [];
  for (u = 0; u < h - r - s - 2; u += 1)
    v[u] = 0;
  var o = String.fromCharCode.apply(String, v) + "" + c, l = Yt(y, o.length, p), f = [];
  for (u = 0; u < o.length; u += 1)
    f[u] = o.charCodeAt(u) ^ l.charCodeAt(u);
  var d = 65280 >> 8 * h - n & 255;
  for (f[0] &= ~d, u = 0; u < s; u++)
    f.push(y.charCodeAt(u));
  return f.push(188), $t(this.doPrivate(new R(f)).toString(16), this.n.bitLength());
};
function Zt(e) {
  for (var t in a.crypto.Util.DIGESTINFOHEAD) {
    var r = a.crypto.Util.DIGESTINFOHEAD[t], i = r.length;
    if (e.substring(0, i) == r) {
      var s = [t, e.substring(i)];
      return s;
    }
  }
  return [];
}
q.prototype.verify = function(e, t) {
  if (t = t.toLowerCase(), t.match(/^[0-9a-f]+$/) == null)
    return !1;
  var r = ge(t, 16), i = this.n.bitLength();
  if (r.bitLength() > i)
    return !1;
  var s = this.doPublic(r), n = s.toString(16);
  if (n.length + 3 != i / 4)
    return !1;
  var h = n.replace(/^1f+00/, ""), u = Zt(h);
  if (u.length == 0)
    return !1;
  var p = u[0], c = u[1], y = function(o) {
    return a.crypto.Util.hashString(o, p);
  }, v = y(e);
  return c == v;
};
q.prototype.verifyWithMessageHash = function(e, t) {
  if (t.length != Math.ceil(this.n.bitLength() / 4))
    return !1;
  var r = ge(t, 16);
  if (r.bitLength() > this.n.bitLength())
    return 0;
  var i = this.doPublic(r), s = i.toString(16).replace(/^1f+00/, ""), n = Zt(s);
  if (n.length == 0)
    return !1;
  n[0];
  var h = n[1];
  return h == e;
};
q.prototype.verifyPSS = function(e, t, r, i) {
  var s = function(h) {
    return a.crypto.Util.hashHex(h, r);
  }, n = s(Pe(e));
  return i === void 0 && (i = -1), this.verifyWithMessageHashPSS(n, t, r, i);
};
q.prototype.verifyWithMessageHashPSS = function(e, t, r, i) {
  if (t.length != Math.ceil(this.n.bitLength() / 4))
    return !1;
  var s = new R(t, 16), n = function(F) {
    return a.crypto.Util.hashHex(F, r);
  }, h = me(e), u = h.length, p = this.n.bitLength() - 1, c = Math.ceil(p / 8), y;
  if (i === -1 || i === void 0)
    i = u;
  else if (i === -2)
    i = c - u - 2;
  else if (i < -2)
    throw new Error("invalid salt length");
  if (c < u + i + 2)
    throw new Error("data too long");
  var v = this.doPublic(s).toByteArray();
  for (y = 0; y < v.length; y += 1)
    v[y] &= 255;
  for (; v.length < c; )
    v.unshift(0);
  if (v[c - 1] !== 188)
    throw new Error("encoded message does not end in 0xbc");
  v = String.fromCharCode.apply(String, v);
  var o = v.substr(0, c - u - 1), l = v.substr(o.length, u), f = 65280 >> 8 * c - p & 255;
  if (o.charCodeAt(0) & f)
    throw new Error("bits beyond keysize not zero");
  var d = Yt(l, o.length, n), g = [];
  for (y = 0; y < o.length; y += 1)
    g[y] = o.charCodeAt(y) ^ d.charCodeAt(y);
  g[0] &= ~f;
  var m = c - u - i - 2;
  for (y = 0; y < m; y += 1)
    if (g[y] !== 0)
      throw new Error("leftmost octets not zero");
  if (g[m] !== 1)
    throw new Error("0x01 marker not found");
  return l === me(n(Pe("\0\0\0\0\0\0\0\0" + h + String.fromCharCode.apply(String, g.slice(-i)))));
};
q.SALT_LEN_HLEN = -1;
q.SALT_LEN_MAX = -2;
q.SALT_LEN_RECOVER = -2;
function _(e) {
  var t = V, r = t.getChildIdx, i = t.getV;
  t.dump;
  var s = t.parse, n = t.getTLV, h = t.getVbyList, u = t.getVbyListEx, p = t.getTLVbyList, c = t.getTLVbyListEx, y = t.getIdxbyList, v = t.getIdxbyListEx, o = t.getVidx, l = t.getInt, f = t.oidname, d = t.hextooidstr, g = ie, m, F = Error;
  try {
    m = a.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
  } catch {
  }
  this.HEX2STAG = { "0c": "utf8", 13: "prn", 16: "ia5", "1a": "vis", "1e": "bmp" }, this.hex = null, this.version = 0, this.foffset = 0, this.aExtInfo = null, this.getVersion = function() {
    if (this.hex === null || this.version !== 0)
      return this.version;
    var x = p(this.hex, 0, [0, 0]);
    if (x.substr(0, 2) == "a0") {
      var E = p(x, 0, [0]), w = l(E, 0);
      if (w < 0 || 2 < w)
        throw new Error("malformed version field");
      return this.version = w + 1, this.version;
    } else
      return this.version = 1, this.foffset = -1, 1;
  }, this.getSerialNumberHex = function() {
    return u(this.hex, 0, [0, 0], "02");
  }, this.getSignatureAlgorithmField = function() {
    var x = c(this.hex, 0, [0, 1]);
    return this.getAlgorithmIdentifierName(x);
  }, this.getAlgorithmIdentifierName = function(x) {
    for (var E in m)
      if (x === m[E])
        return E;
    return f(u(x, 0, [0], "06"));
  }, this.getIssuer = function(x, E) {
    return this.getX500Name(this.getIssuerHex(), x, E);
  }, this.getIssuerHex = function() {
    return p(this.hex, 0, [0, 3 + this.foffset], "30");
  }, this.getIssuerString = function() {
    var x = this.getIssuer();
    return x.str;
  }, this.getSubject = function(x, E) {
    return this.getX500Name(this.getSubjectHex(), x, E);
  }, this.getSubjectHex = function() {
    return p(this.hex, 0, [0, 5 + this.foffset], "30");
  }, this.getSubjectString = function() {
    var x = this.getSubject();
    return x.str;
  }, this.getNotBefore = function() {
    var x = h(this.hex, 0, [0, 4 + this.foffset, 0]);
    return x = x.replace(/(..)/g, "%$1"), x = decodeURIComponent(x), x;
  }, this.getNotAfter = function() {
    var x = h(this.hex, 0, [0, 4 + this.foffset, 1]);
    return x = x.replace(/(..)/g, "%$1"), x = decodeURIComponent(x), x;
  }, this.getPublicKeyHex = function() {
    return this.getSPKI();
  }, this.getSPKI = function() {
    return p(this.hex, 0, [0, 6 + this.foffset], "30");
  }, this.getSPKIValue = function() {
    var x = this.getSPKI();
    return x == null ? null : h(x, 0, [1], "03", !0);
  }, this.getPublicKeyIdx = function() {
    return y(this.hex, 0, [0, 6 + this.foffset], "30");
  }, this.getPublicKeyContentIdx = function() {
    var x = this.getPublicKeyIdx();
    return y(this.hex, x, [1, 0], "30");
  }, this.getPublicKey = function() {
    return k.getKey(this.getPublicKeyHex(), null, "pkcs8pub");
  }, this.getSignatureAlgorithmName = function() {
    var x = p(this.hex, 0, [1], "30");
    return this.getAlgorithmIdentifierName(x);
  }, this.getSignatureValueHex = function() {
    return h(this.hex, 0, [2], "03", !0);
  }, this.verifySignature = function(x) {
    var E = this.getSignatureAlgorithmField(), w = this.getSignatureValueHex(), S = p(this.hex, 0, [0], "30"), b = new a.crypto.Signature({ alg: E });
    return b.init(x), b.updateHex(S), b.verify(w);
  }, this.parseExt = function(x) {
    var E, w, S;
    if (x === void 0) {
      if (S = this.hex, this.version !== 3)
        return -1;
      E = y(S, 0, [0, 7, 0], "30"), w = r(S, E);
    } else {
      S = ie(x);
      var b = y(S, 0, [0, 3, 0, 0], "06");
      if (i(S, b) != "2a864886f70d01090e") {
        this.aExtInfo = new Array();
        return;
      }
      E = y(S, 0, [0, 3, 0, 1, 0], "30"), w = r(S, E), this.hex = S;
    }
    this.aExtInfo = new Array();
    for (var P = 0; P < w.length; P++) {
      var T = {};
      T.critical = !1;
      var H = r(S, w[P]), I = 0;
      H.length === 3 && (T.critical = !0, I = 1), T.oid = t.hextooidstr(h(S, w[P], [0], "06"));
      var B = y(S, w[P], [1 + I]);
      T.vidx = o(S, B), this.aExtInfo.push(T);
    }
  }, this.getExtInfo = function(x) {
    var E = this.aExtInfo, w = x;
    if (x.match(/^[0-9.]+$/) || (w = a.asn1.x509.OID.name2oid(x)), w !== "") {
      for (var S = 0; S < E.length; S++)
        if (E[S].oid === w)
          return E[S];
    }
  }, this.getCriticalExtV = function(x, E, w) {
    if (E != null)
      return [E, w];
    var S = this.getExtInfo(x);
    return S == null ? [null, null] : [n(this.hex, S.vidx), S.critical];
  }, this.getExtBasicConstraints = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("basicConstraints");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "basicConstraints" };
    if (E && (S.critical = !0), x === "3000")
      return S;
    if (x === "30030101ff")
      return S.cA = !0, S;
    if (x.substr(0, 12) === "30060101ff02") {
      var b = i(x, 10), P = parseInt(b, 16);
      return S.cA = !0, S.pathLen = P, S;
    }
    throw new Error("hExtV parse error: " + x);
  }, this.getExtNameConstraints = function(x, E) {
    var w = this.getCriticalExtV("nameConstraints", x, E);
    if (x = w[0], E = w[1], x != null) {
      var S = { extname: "nameConstraints" };
      E && (S.critical = !0);
      for (var b = r(x, 0), P = 0; P < b.length; P++) {
        for (var T = [], H = r(x, b[P]), I = 0; I < H.length; I++) {
          var B = n(x, H[I]), O = this.getGeneralSubtree(B);
          T.push(O);
        }
        var j = x.substr(b[P], 2);
        j == "a0" ? S.permit = T : j == "a1" && (S.exclude = T);
      }
      return S;
    }
  }, this.getGeneralSubtree = function(x) {
    var E = r(x, 0), w = E.length;
    if (w < 1 || 2 < w)
      throw new Error("wrong num elements");
    for (var S = this.getGeneralName(n(x, E[0])), b = 1; b < w; b++) {
      var P = x.substr(E[b], 2), T = i(x, E[b]), H = parseInt(T, 16);
      P == "80" && (S.min = H), P == "81" && (S.max = H);
    }
    return S;
  }, this.getExtKeyUsage = function(x, E) {
    var w = this.getCriticalExtV("keyUsage", x, E);
    if (x = w[0], E = w[1], x != null) {
      var S = { extname: "keyUsage" };
      return E && (S.critical = !0), S.names = this.getExtKeyUsageString(x).split(","), S;
    }
  }, this.getExtKeyUsageBin = function(x) {
    if (x === void 0) {
      var E = this.getExtInfo("keyUsage");
      if (E === void 0)
        return "";
      x = n(this.hex, E.vidx);
    }
    if (x.length != 8 && x.length != 10)
      throw new Error("malformed key usage value: " + x);
    var w = "000000000000000" + parseInt(x.substr(6), 16).toString(2);
    return x.length == 8 && (w = w.slice(-8)), x.length == 10 && (w = w.slice(-16)), w = w.replace(/0+$/, ""), w == "" && (w = "0"), w;
  }, this.getExtKeyUsageString = function(x) {
    for (var E = this.getExtKeyUsageBin(x), w = new Array(), S = 0; S < E.length; S++)
      E.substr(S, 1) == "1" && w.push(_.KEYUSAGE_NAME[S]);
    return w.join(",");
  }, this.getExtSubjectKeyIdentifier = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("subjectKeyIdentifier");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "subjectKeyIdentifier" };
    E && (S.critical = !0);
    var b = i(x, 0);
    return S.kid = { hex: b }, S;
  }, this.getExtAuthorityKeyIdentifier = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("authorityKeyIdentifier");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "authorityKeyIdentifier" };
    E && (S.critical = !0);
    for (var b = r(x, 0), P = 0; P < b.length; P++) {
      var T = x.substr(b[P], 2);
      if (T === "80" && (S.kid = { hex: i(x, b[P]) }), T === "a1") {
        var H = n(x, b[P]), I = this.getGeneralNames(H);
        S.issuer = I[0].dn;
      }
      T === "82" && (S.sn = { hex: i(x, b[P]) });
    }
    return S;
  }, this.getExtExtKeyUsage = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("extKeyUsage");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "extKeyUsage", array: [] };
    E && (S.critical = !0);
    for (var b = r(x, 0), P = 0; P < b.length; P++)
      S.array.push(f(i(x, b[P])));
    return S;
  }, this.getExtExtKeyUsageName = function() {
    var x = this.getExtInfo("extKeyUsage");
    if (x === void 0)
      return x;
    var E = new Array(), w = n(this.hex, x.vidx);
    if (w === "")
      return E;
    for (var S = r(w, 0), b = 0; b < S.length; b++)
      E.push(f(i(w, S[b])));
    return E;
  }, this.getExtSubjectAltName = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("subjectAltName");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "subjectAltName", array: [] };
    return E && (S.critical = !0), S.array = this.getGeneralNames(x), S;
  }, this.getExtIssuerAltName = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("issuerAltName");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "issuerAltName", array: [] };
    return E && (S.critical = !0), S.array = this.getGeneralNames(x), S;
  }, this.getGeneralNames = function(x) {
    for (var E = r(x, 0), w = [], S = 0; S < E.length; S++) {
      var b = this.getGeneralName(n(x, E[S]));
      b !== void 0 && w.push(b);
    }
    return w;
  }, this.getGeneralName = function(x) {
    var E = x.substr(0, 2), w = i(x, 0), S = me(w);
    if (E == "81")
      return { rfc822: S };
    if (E == "82")
      return { dns: S };
    if (E == "86")
      return { uri: S };
    if (E == "87")
      return { ip: et(w) };
    if (E == "a4")
      return { dn: this.getX500Name(w) };
    if (E == "a0")
      return { other: this.getOtherName(x) };
  }, this.getExtSubjectAltName2 = function() {
    var x, E, w, S = this.getExtInfo("subjectAltName");
    if (S === void 0)
      return S;
    for (var b = new Array(), P = n(this.hex, S.vidx), T = r(P, 0), H = 0; H < T.length; H++)
      w = P.substr(T[H], 2), x = i(P, T[H]), w === "81" && (E = W(x), b.push(["MAIL", E])), w === "82" && (E = W(x), b.push(["DNS", E])), w === "84" && (E = _.hex2dn(x, 0), b.push(["DN", E])), w === "86" && (E = W(x), b.push(["URI", E])), w === "87" && (E = et(x), b.push(["IP", E]));
    return b;
  }, this.getExtCRLDistributionPoints = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("cRLDistributionPoints");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "cRLDistributionPoints", array: [] };
    E && (S.critical = !0);
    for (var b = r(x, 0), P = 0; P < b.length; P++) {
      var T = n(x, b[P]);
      S.array.push(this.getDistributionPoint(T));
    }
    return S;
  }, this.getDistributionPoint = function(x) {
    for (var E = {}, w = r(x, 0), S = 0; S < w.length; S++) {
      var b = x.substr(w[S], 2), P = n(x, w[S]);
      b == "a0" && (E.dpname = this.getDistributionPointName(P));
    }
    return E;
  }, this.getDistributionPointName = function(x) {
    for (var E = {}, w = r(x, 0), S = 0; S < w.length; S++) {
      var b = x.substr(w[S], 2), P = n(x, w[S]);
      b == "a0" && (E.full = this.getGeneralNames(P));
    }
    return E;
  }, this.getExtCRLDistributionPointsURI = function() {
    var x = this.getExtCRLDistributionPoints();
    if (x == null)
      return x;
    for (var E = x.array, w = [], S = 0; S < E.length; S++)
      try {
        E[S].dpname.full[0].uri != null && w.push(E[S].dpname.full[0].uri);
      } catch {
      }
    return w;
  }, this.getExtAIAInfo = function() {
    var x = this.getExtInfo("authorityInfoAccess");
    if (x === void 0)
      return x;
    for (var E = { ocsp: [], caissuer: [] }, w = r(this.hex, x.vidx), S = 0; S < w.length; S++) {
      var b = h(this.hex, w[S], [0], "06"), P = h(this.hex, w[S], [1], "86");
      b === "2b06010505073001" && E.ocsp.push(W(P)), b === "2b06010505073002" && E.caissuer.push(W(P));
    }
    return E;
  }, this.getExtAuthorityInfoAccess = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("authorityInfoAccess");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "authorityInfoAccess", array: [] };
    E && (S.critical = !0);
    for (var b = r(x, 0), P = 0; P < b.length; P++) {
      var T = u(x, b[P], [0], "06"), H = h(x, b[P], [1], "86"), I = W(H);
      if (T == "2b06010505073001")
        S.array.push({ ocsp: I });
      else if (T == "2b06010505073002")
        S.array.push({ caissuer: I });
      else
        throw new Error("unknown method: " + T);
    }
    return S;
  }, this.getExtCertificatePolicies = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("certificatePolicies");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "certificatePolicies", array: [] };
    E && (S.critical = !0);
    for (var b = r(x, 0), P = 0; P < b.length; P++) {
      var T = n(x, b[P]), H = this.getPolicyInformation(T);
      S.array.push(H);
    }
    return S;
  }, this.getPolicyInformation = function(x) {
    var E = {}, w = h(x, 0, [0], "06");
    E.policyoid = f(w);
    var S = v(x, 0, [1], "30");
    if (S != -1) {
      E.array = [];
      for (var b = r(x, S), P = 0; P < b.length; P++) {
        var T = n(x, b[P]), H = this.getPolicyQualifierInfo(T);
        E.array.push(H);
      }
    }
    return E;
  }, this.getOtherName = function(x) {
    var E = {}, w = r(x, 0), S = h(x, w[0], [], "06"), b = h(x, w[1], []);
    return E.oid = f(S), E.value = s(b), E;
  }, this.getPolicyQualifierInfo = function(x) {
    var E = {}, w = h(x, 0, [0], "06");
    if (w === "2b06010505070201") {
      var S = u(x, 0, [1], "16");
      E.cps = me(S);
    } else if (w === "2b06010505070202") {
      var b = p(x, 0, [1], "30");
      E.unotice = this.getUserNotice(b);
    }
    return E;
  }, this.getUserNotice = function(x) {
    var E = null;
    try {
      E = t.parse(x);
      var w = this._asn1ToUnotice(E);
      return w;
    } catch {
      return;
    }
  }, this._asn1ToUnotice = function(x) {
    try {
      for (var E = {}, w = J(x, "seq"), S = 0; S < w.length; S++) {
        var b = this._asn1ToNoticeRef(w[S]);
        b != null && (E.noticeref = b);
        var P = this.asn1ToDisplayText(w[S]);
        P != null && (E.exptext = P);
      }
      return Object.keys(E).length > 0 ? E : void 0;
    } catch {
      return;
    }
  }, this._asn1ToNoticeRef = function(x) {
    try {
      for (var E = {}, w = J(x, "seq"), S = 0; S < w.length; S++) {
        var b = this._asn1ToNoticeNum(w[S]);
        b != null && (E.noticenum = b);
        var P = this.asn1ToDisplayText(w[S]);
        P != null && (E.org = P);
      }
      return Object.keys(E).length > 0 ? E : void 0;
    } catch {
      return;
    }
  }, this._asn1ToNoticeNum = function(x) {
    try {
      for (var E = J(x, "seq"), w = [], S = 0; S < E.length; S++) {
        var b = E[S];
        w.push(parseInt(J(b, "int.hex"), 16));
      }
      return w;
    } catch {
      return;
    }
  }, this.getDisplayText = function(x) {
    var E = { "0c": "utf8", 16: "ia5", "1a": "vis", "1e": "bmp" }, w = {};
    return w.type = E[x.substr(0, 2)], w.str = me(i(x, 0)), w;
  }, this.asn1ToDisplayText = function(x) {
    if (x.utf8str != null)
      return { type: "utf8", str: x.utf8str.str };
    if (x.ia5str != null)
      return { type: "ia5", str: x.ia5str.str };
    if (x.visstr != null)
      return { type: "vis", str: x.visstr.str };
    if (x.bmpstr != null)
      return { type: "bmp", str: x.bmpstr.str };
    if (x.prnstr != null)
      return { type: "prn", str: x.prnstr.str };
  }, this.getExtPolicyMappings = function(x, E) {
    var w = this.getCriticalExtV("policyMappings", x, E);
    if (x = w[0], E = w[1], x != null) {
      var S = { extname: "policyMappings" };
      E && (S.critical = !0);
      try {
        for (var b = s(x), P = b.seq, T = [], H = 0; H < P.length; H++) {
          var I = P[H].seq;
          T.push([I[0].oid, I[1].oid]);
        }
        S.array = T;
      } catch {
        throw new F("malformed policyMappings");
      }
      return S;
    }
  }, this.getExtPolicyConstraints = function(x, E) {
    var w = this.getCriticalExtV("policyConstraints", x, E);
    if (x = w[0], E = w[1], x != null) {
      var S = { extname: "policyConstraints" };
      E && (S.critical = !0);
      var b = s(x);
      try {
        for (var P = b.seq, T = 0; T < P.length; T++) {
          var H = P[T].tag;
          H.explicit == !1 && (H.tag == "80" && (S.reqexp = parseInt(H.hex, 16)), H.tag == "81" && (S.inhibit = parseInt(H.hex, 16)));
        }
      } catch {
        return new F("malformed policyConstraints value");
      }
      return S;
    }
  }, this.getExtInhibitAnyPolicy = function(x, E) {
    var w = this.getCriticalExtV("inhibitAnyPolicy", x, E);
    if (x = w[0], E = w[1], x != null) {
      var S = { extname: "inhibitAnyPolicy" };
      E && (S.critical = !0);
      var b = l(x, 0);
      return b == -1 ? new F("wrong value") : (S.skip = b, S);
    }
  }, this.getExtCRLNumber = function(x, E) {
    var w = { extname: "cRLNumber" };
    if (E && (w.critical = !0), x.substr(0, 2) == "02")
      return w.num = { hex: i(x, 0) }, w;
    throw new F("hExtV parse error: " + x);
  }, this.getExtCRLReason = function(x, E) {
    var w = { extname: "cRLReason" };
    if (E && (w.critical = !0), x.substr(0, 2) == "0a")
      return w.code = parseInt(i(x, 0), 16), w;
    throw new Error("hExtV parse error: " + x);
  }, this.getExtOcspNonce = function(x, E) {
    var w = { extname: "ocspNonce" };
    E && (w.critical = !0);
    var S = i(x, 0);
    return w.hex = S, w;
  }, this.getExtOcspNoCheck = function(x, E) {
    var w = { extname: "ocspNoCheck" };
    return E && (w.critical = !0), w;
  }, this.getExtAdobeTimeStamp = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("adobeTimeStamp");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "adobeTimeStamp" };
    E && (S.critical = !0);
    var b = r(x, 0);
    if (b.length > 1) {
      var P = n(x, b[1]), T = this.getGeneralName(P);
      T.uri != null && (S.uri = T.uri);
    }
    if (b.length > 2) {
      var H = n(x, b[2]);
      H == "0101ff" && (S.reqauth = !0), H == "010100" && (S.reqauth = !1);
    }
    return S;
  }, this.getExtSubjectDirectoryAttributes = function(x, E) {
    if (x === void 0 && E === void 0) {
      var w = this.getExtInfo("subjectDirectoryAttributes");
      if (w === void 0)
        return;
      x = n(this.hex, w.vidx), E = w.critical;
    }
    var S = { extname: "subjectDirectoryAttributes" };
    E && (S.critical = !0);
    try {
      for (var b = s(x), P = [], T = 0; T < b.seq.length; T++) {
        var H = b.seq[T], I = J(H, "seq.0.oid"), B = J(H, "seq.1.set");
        if (I == null || B == null)
          throw "error";
        P.push({ attr: I, array: B });
      }
      return S.array = P, S;
    } catch {
      throw new Error("malformed subjectDirectoryAttributes extension value");
    }
  };
  var D = function(x) {
    var E = {};
    try {
      var w = x.seq[0].oid, S = a.asn1.x509.OID.name2oid(w);
      E.type = a.asn1.x509.OID.oid2atype(S);
      var b = x.seq[1];
      if (b.utf8str != null)
        E.ds = "utf8", E.value = b.utf8str.str;
      else if (b.numstr != null)
        E.ds = "num", E.value = b.numstr.str;
      else if (b.telstr != null)
        E.ds = "tel", E.value = b.telstr.str;
      else if (b.prnstr != null)
        E.ds = "prn", E.value = b.prnstr.str;
      else if (b.ia5str != null)
        E.ds = "ia5", E.value = b.ia5str.str;
      else if (b.visstr != null)
        E.ds = "vis", E.value = b.visstr.str;
      else if (b.bmpstr != null)
        E.ds = "bmp", E.value = b.bmpstr.str;
      else
        throw "error";
      return E;
    } catch {
      throw new Erorr("improper ASN.1 parsed AttrTypeAndValue");
    }
  }, A = function(x) {
    try {
      return x.set.map(function(E) {
        return D(E);
      });
    } catch (E) {
      throw new Error("improper ASN.1 parsed RDN: " + E);
    }
  }, C = function(x) {
    try {
      return x.seq.map(function(E) {
        return A(E);
      });
    } catch (E) {
      throw new Error("improper ASN.1 parsed X500Name: " + E);
    }
  };
  this.getX500NameRule = function(x) {
    for (var E = null, w = [], S = 0; S < x.length; S++)
      for (var b = x[S], P = 0; P < b.length; P++)
        w.push(b[P]);
    for (var S = 0; S < w.length; S++) {
      var T = w[S], H = T.ds, I = T.value, B = T.type;
      if (H != "prn" && H != "utf8" && H != "ia5")
        return "mixed";
      if (H == "ia5") {
        if (B != "CN")
          return "mixed";
        if (a.lang.String.isMail(I))
          continue;
        return "mixed";
      }
      if (B == "C") {
        if (H == "prn")
          continue;
        return "mixed";
      }
      if (E == null)
        E = H;
      else if (E !== H)
        return "mixed";
    }
    return E ?? "prn";
  }, this.getAttrTypeAndValue = function(x) {
    var E = s(x);
    return D(E);
  }, this.getRDN = function(x) {
    var E = s(x);
    return A(E);
  }, this.getX500NameArray = function(x) {
    var E = s(x);
    return C(E);
  }, this.getX500Name = function(x, E, w) {
    var S = this.getX500NameArray(x), b = this.dnarraytostr(S), P = { str: b };
    return P.array = S, w == !0 && (P.hex = x), E == !0 && (P.canon = this.c14nRDNArray(S)), P;
  }, this.readCertPEM = function(x) {
    this.readCertHex(g(x));
  }, this.readCertHex = function(x) {
    this.hex = x, this.getVersion();
    try {
      y(this.hex, 0, [0, 7], "a3"), this.parseExt();
    } catch {
    }
  }, this.getParam = function(x) {
    var E = {};
    return x == null && (x = {}), E.version = this.getVersion(), E.serial = { hex: this.getSerialNumberHex() }, E.sigalg = this.getSignatureAlgorithmField(), E.issuer = this.getIssuer(x.dncanon, x.dnhex), E.notbefore = this.getNotBefore(), E.notafter = this.getNotAfter(), E.subject = this.getSubject(x.dncanon, x.dnhex), E.sbjpubkey = le(this.getPublicKeyHex(), "PUBLIC KEY"), this.aExtInfo != null && this.aExtInfo.length > 0 && (E.ext = this.getExtParamArray()), E.sighex = this.getSignatureValueHex(), x.tbshex == !0 && (E.tbshex = p(this.hex, 0, [0])), x.nodnarray == !0 && (delete E.issuer.array, delete E.subject.array), E;
  }, this.getExtParamArray = function(x) {
    if (x == null) {
      var E = v(this.hex, 0, [0, "[3]"]);
      E != -1 && (x = c(this.hex, 0, [0, "[3]", 0], "30"));
    }
    for (var w = [], S = r(x, 0), b = 0; b < S.length; b++) {
      var P = n(x, S[b]), T = this.getExtParam(P);
      T != null && w.push(T);
    }
    return w;
  }, this.getExtParam = function(x) {
    var E = r(x, 0), w = E.length;
    if (w != 2 && w != 3)
      throw new Error("wrong number elements in Extension: " + w + " " + x);
    var S = d(h(x, 0, [0], "06")), b = !1;
    w == 3 && p(x, 0, [1]) == "0101ff" && (b = !0);
    var P = p(x, 0, [w - 1, 0]), T = void 0;
    if (S == "2.5.29.14" ? T = this.getExtSubjectKeyIdentifier(P, b) : S == "2.5.29.15" ? T = this.getExtKeyUsage(P, b) : S == "2.5.29.17" ? T = this.getExtSubjectAltName(P, b) : S == "2.5.29.18" ? T = this.getExtIssuerAltName(P, b) : S == "2.5.29.19" ? T = this.getExtBasicConstraints(P, b) : S == "2.5.29.30" ? T = this.getExtNameConstraints(P, b) : S == "2.5.29.31" ? T = this.getExtCRLDistributionPoints(P, b) : S == "2.5.29.32" ? T = this.getExtCertificatePolicies(P, b) : S == "2.5.29.33" ? T = this.getExtPolicyMappings(P, b) : S == "2.5.29.35" ? T = this.getExtAuthorityKeyIdentifier(P, b) : S == "2.5.29.36" ? T = this.getExtPolicyConstraints(P, b) : S == "2.5.29.37" ? T = this.getExtExtKeyUsage(P, b) : S == "2.5.29.54" ? T = this.getExtInhibitAnyPolicy(P, b) : S == "1.3.6.1.5.5.7.1.1" ? T = this.getExtAuthorityInfoAccess(P, b) : S == "2.5.29.20" ? T = this.getExtCRLNumber(P, b) : S == "2.5.29.21" ? T = this.getExtCRLReason(P, b) : S == "2.5.29.9" ? T = this.getExtSubjectDirectoryAttributes(P, b) : S == "1.3.6.1.5.5.7.48.1.2" ? T = this.getExtOcspNonce(P, b) : S == "1.3.6.1.5.5.7.48.1.5" ? T = this.getExtOcspNoCheck(P, b) : S == "1.2.840.113583.1.1.9.1" ? T = this.getExtAdobeTimeStamp(P, b) : _.EXT_PARSER[S] != null && (T = _.EXT_PARSER[S](S, b, P)), T != null)
      return T;
    var H = { extname: S, extn: P };
    try {
      H.extn = s(P);
    } catch {
    }
    return b && (H.critical = !0), H;
  }, this.findExt = function(x, E) {
    for (var w = 0; w < x.length; w++)
      if (x[w].extname == E)
        return x[w];
    return null;
  }, this.updateExtCDPFullURI = function(x, E) {
    var w = this.findExt(x, "cRLDistributionPoints");
    if (w != null && w.array != null) {
      for (var S = w.array, b = 0; b < S.length; b++)
        if (S[b].dpname != null && S[b].dpname.full != null)
          for (var P = S[b].dpname.full, T = 0; T < P.length; T++) {
            var H = P[b];
            H.uri != null && (H.uri = E);
          }
    }
  }, this.updateExtAIAOCSP = function(x, E) {
    var w = this.findExt(x, "authorityInfoAccess");
    if (w != null && w.array != null)
      for (var S = w.array, b = 0; b < S.length; b++)
        S[b].ocsp != null && (S[b].ocsp = E);
  }, this.updateExtAIACAIssuer = function(x, E) {
    var w = this.findExt(x, "authorityInfoAccess");
    if (w != null && w.array != null)
      for (var S = w.array, b = 0; b < S.length; b++)
        S[b].caissuer != null && (S[b].caissuer = E);
  }, this.dnarraytostr = function(x) {
    function E(S) {
      return S.map(function(b) {
        return w(b).replace(/\+/, "\\+");
      }).join("+");
    }
    function w(S) {
      return S.type + "=" + S.value;
    }
    return "/" + x.map(function(S) {
      return E(S).replace(/\//, "\\/");
    }).join("/");
  }, this.setCanonicalizedDN = function(x) {
    var E;
    if (x.str != null && x.array == null) {
      var w = new a.asn1.x509.X500Name({ str: x.str }), S = w.tohex();
      E = this.getX500NameArray(S);
    } else
      E = x.array;
    x.canon == null && (x.canon = this.c14nRDNArray(E));
  }, this.c14nRDNArray = function(x) {
    for (var E = [], w = 0; w < x.length; w++) {
      for (var S = x[w], b = [], P = 0; P < S.length; P++) {
        var T = S[P], H = T.value;
        H = H.replace(/^\s*/, ""), H = H.replace(/\s*$/, ""), H = H.replace(/\s+/g, " "), H = H.toLowerCase(), b.push(T.type.toLowerCase() + "=" + H);
      }
      E.push(b.join("+"));
    }
    return "/" + E.join("/");
  }, this.getInfo = function() {
    var x = function(de) {
      for (var M = "", X = "    ", ee = `
`, te = de.array, ve = 0; ve < te.length; ve++) {
        var re = te[ve];
        if (re.dn != null && (M += X + "dn: " + re.dn.str + ee), re.ip != null && (M += X + "ip: " + re.ip + ee), re.rfc822 != null && (M += X + "rfc822: " + re.rfc822 + ee), re.dns != null && (M += X + "dns: " + re.dns + ee), re.uri != null && (M += X + "uri: " + re.uri + ee), re.other != null) {
          var We = re.other.oid, Oe = JSON.stringify(re.other.value).replace(/\"/g, "");
          M += X + "other: " + We + "=" + Oe + ee;
        }
      }
      return M = M.replace(/\n$/, ""), M;
    }, E = function(de) {
      for (var M = "", X = de.array, ee = 0; ee < X.length; ee++) {
        var te = X[ee];
        if (M += "    policy oid: " + te.policyoid + `
`, te.array !== void 0)
          for (var ve = 0; ve < te.array.length; ve++) {
            var re = te.array[ve];
            re.cps !== void 0 && (M += "    cps: " + re.cps + `
`);
          }
      }
      return M;
    }, w = function(de) {
      for (var M = "", X = de.array, ee = 0; ee < X.length; ee++) {
        var te = X[ee];
        try {
          te.dpname.full[0].uri !== void 0 && (M += "    " + te.dpname.full[0].uri + `
`);
        } catch {
        }
        try {
          te.dname.full[0].dn.hex !== void 0 && (M += "    " + _.hex2dn(te.dpname.full[0].dn.hex) + `
`);
        } catch {
        }
      }
      return M;
    }, S = function(de) {
      for (var M = "", X = de.array, ee = 0; ee < X.length; ee++) {
        var te = X[ee];
        te.caissuer !== void 0 && (M += "    caissuer: " + te.caissuer + `
`), te.ocsp !== void 0 && (M += "    ocsp: " + te.ocsp + `
`);
      }
      return M;
    }, b, P, T;
    if (b = `Basic Fields
`, b += "  serial number: " + this.getSerialNumberHex() + `
`, b += "  signature algorithm: " + this.getSignatureAlgorithmField() + `
`, b += "  issuer: " + this.getIssuerString() + `
`, b += "  notBefore: " + this.getNotBefore() + `
`, b += "  notAfter: " + this.getNotAfter() + `
`, b += "  subject: " + this.getSubjectString() + `
`, b += `  subject public key info: 
`, P = this.getPublicKey(), b += "    key algorithm: " + P.type + `
`, P.type === "RSA" && (b += "    n=" + gt(P.n.toString(16)).substr(0, 16) + `...
`, b += "    e=" + gt(P.e.toString(16)) + `
`), T = this.aExtInfo, T != null) {
      b += `X509v3 Extensions:
`;
      for (var H = 0; H < T.length; H++) {
        var I = T[H], B = a.asn1.x509.OID.oid2name(I.oid);
        B === "" && (B = I.oid);
        var O = "";
        if (I.critical === !0 && (O = "CRITICAL"), b += "  " + B + " " + O + `:
`, B === "basicConstraints") {
          var j = this.getExtBasicConstraints();
          j.cA === void 0 ? b += `    {}
` : (b += "    cA=true", j.pathLen !== void 0 && (b += ", pathLen=" + j.pathLen), b += `
`);
        } else if (B == "policyMappings") {
          var ce = this.getExtPolicyMappings().array, Q = ce.map(function(de) {
            var M = de;
            return M[0] + ":" + M[1];
          }).join(", ");
          b += "    " + Q + `
`;
        } else if (B == "policyConstraints") {
          var $ = this.getExtPolicyConstraints();
          b += "    ", $.reqexp != null && (b += " reqexp=" + $.reqexp), $.inhibit != null && (b += " inhibit=" + $.inhibit), b += `
`;
        } else if (B == "inhibitAnyPolicy") {
          var $ = this.getExtInhibitAnyPolicy();
          b += "    skip=" + $.skip + `
`;
        } else if (B == "keyUsage")
          b += "    " + this.getExtKeyUsageString() + `
`;
        else if (B == "subjectKeyIdentifier")
          b += "    " + this.getExtSubjectKeyIdentifier().kid.hex + `
`;
        else if (B == "authorityKeyIdentifier") {
          var ne = this.getExtAuthorityKeyIdentifier();
          ne.kid !== void 0 && (b += "    kid=" + ne.kid.hex + `
`);
        } else if (B == "extKeyUsage") {
          var oe = this.getExtExtKeyUsage().array;
          b += "    " + oe.join(", ") + `
`;
        } else if (B == "subjectAltName") {
          var fe = x(this.getExtSubjectAltName());
          b += fe + `
`;
        } else if (B == "cRLDistributionPoints") {
          var ue = this.getExtCRLDistributionPoints();
          b += w(ue);
        } else if (B == "authorityInfoAccess") {
          var Ge = this.getExtAuthorityInfoAccess();
          b += S(Ge);
        } else
          B == "certificatePolicies" && (b += E(this.getExtCertificatePolicies()));
      }
    }
    return b += "signature algorithm: " + this.getSignatureAlgorithmName() + `
`, b += "signature: " + this.getSignatureValueHex().substr(0, 16) + `...
`, b;
  }, typeof e == "string" && (e.indexOf("-----BEGIN") != -1 ? this.readCertPEM(e) : a.lang.String.isHex(e) && this.readCertHex(e));
}
_.EXT_PARSER = {};
_.registExtParser = function(e, t) {
  _.EXT_PARSER[e] = t;
};
_.hex2dn = function(e, t) {
  t === void 0 && (t = 0);
  var r = new _();
  V.getTLV(e, t);
  var i = r.getX500Name(e);
  return i.str;
};
_.hex2rdn = function(e, t) {
  if (t === void 0 && (t = 0), e.substr(t, 2) !== "31")
    throw new Error("malformed RDN");
  for (var r = new Array(), i = V.getChildIdx(e, t), s = 0; s < i.length; s++)
    r.push(_.hex2attrTypeValue(e, i[s]));
  return r = r.map(function(n) {
    return n.replace("+", "\\+");
  }), r.join("+");
};
_.hex2attrTypeValue = function(e, t) {
  var r = V, i = r.getV;
  if (t === void 0 && (t = 0), e.substr(t, 2) !== "30")
    throw new Error("malformed attribute type and value");
  var s = r.getChildIdx(e, t);
  s.length !== 2 || e.substr(s[0], 2);
  var n = i(e, s[0]), h = a.asn1.ASN1Util.oidHexToInt(n), u = a.asn1.x509.OID.oid2atype(h), p = i(e, s[1]), c = me(p);
  return u + "=" + c;
};
_.getPublicKeyFromCertHex = function(e) {
  var t = new _();
  return t.readCertHex(e), t.getPublicKey();
};
_.getPublicKeyFromCertPEM = function(e) {
  var t = new _();
  return t.readCertPEM(e), t.getPublicKey();
};
_.getPublicKeyInfoPropOfCertPEM = function(e) {
  var t = V, r = t.getVbyList, i = {}, s, n;
  return i.algparam = null, s = new _(), s.readCertPEM(e), n = s.getPublicKeyHex(), i.keyhex = r(n, 0, [1], "03").substr(2), i.algoid = r(n, 0, [0, 0], "06"), i.algoid === "2a8648ce3d0201" && (i.algparam = r(n, 0, [0, 1], "06")), i;
};
_.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"];
var Wn = function(e) {
  var t = a, r = t.lang.String.isHex, i = V, s = i.getV, n = i.getTLV, h = i.getVbyList, u = i.getTLVbyList, p = i.getTLVbyListEx, c = i.getIdxbyList, y = i.getIdxbyListEx, v = i.getChildIdx, o = new _();
  this.hex = null, this.posSigAlg = null, this.posRevCert = null, this.parsed = null, this._setPos = function() {
    var l = c(this.hex, 0, [0, 0]), f = this.hex.substr(l, 2);
    if (f == "02")
      this.posSigAlg = 1;
    else if (f == "30")
      this.posSigAlg = 0;
    else
      throw new Error("malformed 1st item of TBSCertList: " + f);
    var d = c(this.hex, 0, [0, this.posSigAlg + 3]), g = this.hex.substr(d, 2);
    if (g == "17" || g == "18") {
      var m, F;
      m = c(this.hex, 0, [0, this.posSigAlg + 4]), this.posRevCert = null, m != -1 && (F = this.hex.substr(m, 2), F == "30" && (this.posRevCert = this.posSigAlg + 4));
    } else if (g == "30")
      this.posRevCert = this.posSigAlg + 3;
    else if (g == "a0")
      this.posRevCert = null;
    else
      throw new Error("malformed nextUpdate or revCert tag: " + g);
  }, this.getVersion = function() {
    return this.posSigAlg == 0 ? null : parseInt(h(this.hex, 0, [0, 0], "02"), 16) + 1;
  }, this.getSignatureAlgorithmField = function() {
    var l = u(this.hex, 0, [0, this.posSigAlg], "30");
    return o.getAlgorithmIdentifierName(l);
  }, this.getIssuer = function() {
    return o.getX500Name(this.getIssuerHex());
  }, this.getIssuerHex = function() {
    return u(this.hex, 0, [0, this.posSigAlg + 1], "30");
  }, this.getThisUpdate = function() {
    var l = h(this.hex, 0, [0, this.posSigAlg + 2]);
    return result = me(l);
  }, this.getNextUpdate = function() {
    var l = c(this.hex, 0, [0, this.posSigAlg + 3]), f = this.hex.substr(l, 2);
    return f != "17" && f != "18" ? null : me(s(this.hex, l));
  }, this.getRevCertArray = function() {
    if (this.posRevCert == null)
      return null;
    for (var l = [], f = c(this.hex, 0, [0, this.posRevCert]), d = v(this.hex, f), g = 0; g < d.length; g++) {
      var m = n(this.hex, d[g]);
      l.push(this.getRevCert(m));
    }
    return l;
  }, this.getRevCert = function(l) {
    var f = {}, d = v(l, 0);
    return f.sn = { hex: h(l, 0, [0], "02") }, f.date = me(h(l, 0, [1])), d.length == 3 && (f.ext = o.getExtParamArray(u(l, 0, [2]))), f;
  }, this.findRevCert = function(l) {
    var f = new _(l), d = f.getSerialNumberHex();
    return this.findRevCertBySN(d);
  }, this.findRevCertBySN = function(l) {
    if (this.parsed == null && this.getParam(), this.parsed.revcert == null)
      return null;
    for (var f = this.parsed.revcert, d = 0; d < f.length; d++)
      if (l == f[d].sn.hex)
        return f[d];
    return null;
  }, this.getSignatureValueHex = function() {
    return h(this.hex, 0, [2], "03", !0);
  }, this.verifySignature = function(l) {
    var f = this.getSignatureAlgorithmField(), d = this.getSignatureValueHex(), g = u(this.hex, 0, [0], "30"), m = new a.crypto.Signature({ alg: f });
    return m.init(l), m.updateHex(g), m.verify(d);
  }, this.getParam = function(l) {
    var f = {}, d = this.getVersion();
    d != null && (f.version = d), f.sigalg = this.getSignatureAlgorithmField(), f.issuer = this.getIssuer(), f.thisupdate = this.getThisUpdate();
    var g = this.getNextUpdate();
    g != null && (f.nextupdate = g);
    var m = this.getRevCertArray();
    m != null && (f.revcert = m);
    var F = y(this.hex, 0, [0, "[0]"]);
    if (F != -1) {
      var D = p(this.hex, 0, [0, "[0]", 0]);
      f.ext = o.getExtParamArray(D);
    }
    return f.sighex = this.getSignatureValueHex(), this.parsed = f, typeof l == "object" && (l.tbshex == !0 && (f.tbshex = u(this.hex, 0, [0])), l.nodnarray == !0 && delete f.issuer.array), f;
  }, typeof e == "string" && (r(e) ? this.hex = e : e.match(/-----BEGIN X509 CRL/) && (this.hex = ie(e)), this._setPos());
};
(typeof a > "u" || !a) && (a = {});
(typeof a.jws > "u" || !a.jws) && (a.jws = {});
a.jws.JWS = function() {
  var e = a, t = e.jws.JWS, r = t.isSafeJSONString;
  this.parseJWS = function(i, s) {
    if (!(this.parsedJWS !== void 0 && (s || this.parsedJWS.sigvalH !== void 0))) {
      var n = i.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
      if (n == null)
        throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
      var h = n[1], u = n[2], p = n[3], c = h + "." + u;
      if (this.parsedJWS = {}, this.parsedJWS.headB64U = h, this.parsedJWS.payloadB64U = u, this.parsedJWS.sigvalB64U = p, this.parsedJWS.si = c, !s) {
        var y = Z(p), v = ge(y, 16);
        this.parsedJWS.sigvalH = y, this.parsedJWS.sigvalBI = v;
      }
      var o = Fe(h), l = Fe(u);
      if (this.parsedJWS.headS = o, this.parsedJWS.payloadS = l, !r(o, this.parsedJWS, "headP"))
        throw "malformed JSON string for JWS Head: " + o;
    }
  };
};
a.jws.JWS.sign = function(e, t, r, i, s) {
  var n = a, h = n.jws, u = h.JWS, p = u.readSafeJSONString, c = u.isSafeJSONString, y = n.crypto;
  y.ECDSA;
  var v = y.Mac, o = y.Signature, l = JSON, f, d, g;
  if (typeof t != "string" && typeof t != "object")
    throw "spHeader must be JSON string or object: " + t;
  if (typeof t == "object" && (d = t, f = l.stringify(d)), typeof t == "string") {
    if (f = t, !c(f))
      throw "JWS Head is not safe JSON string: " + f;
    d = p(f);
  }
  if (g = r, typeof r == "object" && (g = l.stringify(r)), (e == "" || e == null) && d.alg !== void 0 && (e = d.alg), e != "" && e != null && d.alg === void 0 && (d.alg = e, f = l.stringify(d)), e !== d.alg)
    throw "alg and sHeader.alg doesn't match: " + e + "!=" + d.alg;
  var m = null;
  if (u.jwsalg2sigalg[e] === void 0)
    throw "unsupported alg name: " + e;
  m = u.jwsalg2sigalg[e];
  var F = Je(f), D = Je(g), A = F + "." + D, C = "";
  if (m.substr(0, 4) == "Hmac") {
    if (i === void 0)
      throw "mac key shall be specified for HS* alg";
    var x = new v({ alg: m, prov: "cryptojs", pass: i });
    x.updateString(A), C = x.doFinal();
  } else if (m.indexOf("withECDSA") != -1) {
    var E = new o({ alg: m });
    E.init(i, s), E.updateString(A);
    var w = E.sign();
    C = a.crypto.ECDSA.asn1SigToConcatSig(w);
  } else if (m != "none") {
    var E = new o({ alg: m });
    E.init(i, s), E.updateString(A), C = E.sign();
  }
  var S = se(C);
  return A + "." + S;
};
a.jws.JWS.verify = function(e, t, r) {
  var i = a, s = i.jws, n = s.JWS, h = n.readSafeJSONString, u = i.crypto, p = u.ECDSA, c = u.Mac, y = u.Signature, v;
  if (typeof q !== void 0 && (v = q), !At(e))
    return !1;
  var o = e.split(".");
  if (o.length !== 3)
    return !1;
  var l = o[0], f = o[1], d = l + "." + f, g = Z(o[2]), m = h(Fe(o[0])), F = null, D = null;
  if (m.alg === void 0)
    throw "algorithm not specified in header";
  if (F = m.alg, D = F.substr(0, 2), r != null && Object.prototype.toString.call(r) === "[object Array]" && r.length > 0) {
    var A = ":" + r.join(":") + ":";
    if (A.indexOf(":" + F + ":") == -1)
      throw "algorithm '" + F + "' not accepted in the list";
  }
  if (F != "none" && t === null)
    throw "key shall be specified to verify.";
  if (typeof t == "string" && t.indexOf("-----BEGIN ") != -1 && (t = k.getKey(t)), (D == "RS" || D == "PS") && !(t instanceof v))
    throw "key shall be a RSAKey obj for RS* and PS* algs";
  if (D == "ES" && !(t instanceof p))
    throw "key shall be a ECDSA obj for ES* algs";
  var C = null;
  if (n.jwsalg2sigalg[m.alg] === void 0)
    throw "unsupported alg name: " + F;
  if (C = n.jwsalg2sigalg[F], C == "none")
    throw "not supported";
  if (C.substr(0, 4) == "Hmac") {
    var x = null;
    if (t === void 0)
      throw "hexadecimal key shall be specified for HMAC";
    var E = new c({ alg: C, pass: t });
    return E.updateString(d), x = E.doFinal(), g == x;
  } else if (C.indexOf("withECDSA") != -1) {
    var w = null;
    try {
      w = p.concatSigToASN1Sig(g);
    } catch {
      return !1;
    }
    var S = new y({ alg: C });
    return S.init(t), S.updateString(d), S.verify(w);
  } else {
    var S = new y({ alg: C });
    return S.init(t), S.updateString(d), S.verify(g);
  }
};
a.jws.JWS.parse = function(e) {
  var t = e.split("."), r = {}, i, s, n;
  if (t.length != 2 && t.length != 3)
    throw "malformed sJWS: wrong number of '.' splitted elements";
  return i = t[0], s = t[1], t.length == 3 && (n = t[2]), r.headerObj = a.jws.JWS.readSafeJSONString(Fe(i)), r.payloadObj = a.jws.JWS.readSafeJSONString(Fe(s)), r.headerPP = JSON.stringify(r.headerObj, null, "  "), r.payloadObj == null ? r.payloadPP = Fe(s) : r.payloadPP = JSON.stringify(r.payloadObj, null, "  "), n !== void 0 && (r.sigHex = Z(n)), r;
};
a.jws.JWS.verifyJWT = function(e, t, r) {
  var i = a, s = i.jws, n = s.JWS, h = n.readSafeJSONString, u = n.inArray, p = n.includedArray;
  if (!At(e))
    return !1;
  var c = e.split(".");
  if (c.length != 3)
    return !1;
  var y = c[0], v = c[1];
  Z(c[2]);
  var o = h(Fe(y)), l = h(Fe(v));
  if (o.alg === void 0)
    return !1;
  if (r.alg === void 0)
    throw "acceptField.alg shall be specified";
  if (!u(o.alg, r.alg) || l.iss !== void 0 && typeof r.iss == "object" && !u(l.iss, r.iss) || l.sub !== void 0 && typeof r.sub == "object" && !u(l.sub, r.sub))
    return !1;
  if (l.aud !== void 0 && typeof r.aud == "object") {
    if (typeof l.aud == "string") {
      if (!u(l.aud, r.aud))
        return !1;
    } else if (typeof l.aud == "object" && !p(l.aud, r.aud))
      return !1;
  }
  var f = s.IntDate.getNow();
  return r.verifyAt !== void 0 && typeof r.verifyAt == "number" && (f = r.verifyAt), (r.gracePeriod === void 0 || typeof r.gracePeriod != "number") && (r.gracePeriod = 0), !(l.exp !== void 0 && typeof l.exp == "number" && l.exp + r.gracePeriod < f || l.nbf !== void 0 && typeof l.nbf == "number" && f < l.nbf - r.gracePeriod || l.iat !== void 0 && typeof l.iat == "number" && f < l.iat - r.gracePeriod || l.jti !== void 0 && r.jti !== void 0 && l.jti !== r.jti || !n.verify(e, t, r.alg));
};
a.jws.JWS.includedArray = function(e, t) {
  var r = a.jws.JWS.inArray;
  if (e === null || typeof e != "object" || typeof e.length != "number")
    return !1;
  for (var i = 0; i < e.length; i++)
    if (!r(e[i], t))
      return !1;
  return !0;
};
a.jws.JWS.inArray = function(e, t) {
  if (t === null || typeof t != "object" || typeof t.length != "number")
    return !1;
  for (var r = 0; r < t.length; r++)
    if (t[r] == e)
      return !0;
  return !1;
};
a.jws.JWS.jwsalg2sigalg = { HS256: "HmacSHA256", HS384: "HmacSHA384", HS512: "HmacSHA512", RS256: "SHA256withRSA", RS384: "SHA384withRSA", RS512: "SHA512withRSA", ES256: "SHA256withECDSA", ES384: "SHA384withECDSA", ES512: "SHA512withECDSA", PS256: "SHA256withRSAandMGF1", PS384: "SHA384withRSAandMGF1", PS512: "SHA512withRSAandMGF1", none: "none" };
a.jws.JWS.isSafeJSONString = function(e, t, r) {
  var i = null;
  try {
    return i = Kt(e), typeof i != "object" || i.constructor === Array ? 0 : (t && (t[r] = i), 1);
  } catch {
    return 0;
  }
};
a.jws.JWS.readSafeJSONString = function(e) {
  var t = null;
  try {
    return t = Kt(e), typeof t != "object" || t.constructor === Array ? null : t;
  } catch {
    return null;
  }
};
a.jws.JWS.getEncodedSignatureValueFromJWS = function(e) {
  var t = e.match(/^[^.]+\.[^.]+\.([^.]+)$/);
  if (t == null)
    throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
  return t[1];
};
a.jws.JWS.getJWKthumbprint = function(e) {
  if (e.kty !== "RSA" && e.kty !== "EC" && e.kty !== "oct")
    throw "unsupported algorithm for JWK Thumprint";
  var t = "{";
  if (e.kty === "RSA") {
    if (typeof e.n != "string" || typeof e.e != "string")
      throw "wrong n and e value for RSA key";
    t += '"e":"' + e.e + '",', t += '"kty":"' + e.kty + '",', t += '"n":"' + e.n + '"}';
  } else if (e.kty === "EC") {
    if (typeof e.crv != "string" || typeof e.x != "string" || typeof e.y != "string")
      throw "wrong crv, x and y value for EC key";
    t += '"crv":"' + e.crv + '",', t += '"kty":"' + e.kty + '",', t += '"x":"' + e.x + '",', t += '"y":"' + e.y + '"}';
  } else if (e.kty === "oct") {
    if (typeof e.k != "string")
      throw "wrong k value for oct(symmetric) key";
    t += '"kty":"' + e.kty + '",', t += '"k":"' + e.k + '"}';
  }
  var r = Pe(t), i = a.crypto.Util.hashHex(r, "sha256"), s = se(i);
  return s;
};
a.jws.IntDate = {};
a.jws.IntDate.get = function(e) {
  var t = a.jws.IntDate, r = t.getNow, i = t.getZulu;
  if (e == "now")
    return r();
  if (e == "now + 1hour")
    return r() + 60 * 60;
  if (e == "now + 1day")
    return r() + 60 * 60 * 24;
  if (e == "now + 1month")
    return r() + 60 * 60 * 24 * 30;
  if (e == "now + 1year")
    return r() + 60 * 60 * 24 * 365;
  if (e.match(/Z$/))
    return i(e);
  if (e.match(/^[0-9]+$/))
    return parseInt(e);
  throw "unsupported format: " + e;
};
a.jws.IntDate.getZulu = function(e) {
  return kt(e);
};
a.jws.IntDate.getNow = function() {
  var e = ~~(/* @__PURE__ */ new Date() / 1e3);
  return e;
};
a.jws.IntDate.intDate2UTCString = function(e) {
  var t = new Date(e * 1e3);
  return t.toUTCString();
};
a.jws.IntDate.intDate2Zulu = function(e) {
  var t = new Date(e * 1e3), r = ("0000" + t.getUTCFullYear()).slice(-4), i = ("00" + (t.getUTCMonth() + 1)).slice(-2), s = ("00" + t.getUTCDate()).slice(-2), n = ("00" + t.getUTCHours()).slice(-2), h = ("00" + t.getUTCMinutes()).slice(-2), u = ("00" + t.getUTCSeconds()).slice(-2);
  return r + i + s + n + h + u + "Z";
};
(typeof a > "u" || !a) && (a = {});
(typeof a.jws > "u" || !a.jws) && (a.jws = {});
a.jws.JWSJS = function() {
  var e = a, t = e.jws, r = t.JWS, i = r.readSafeJSONString;
  this.aHeader = [], this.sPayload = "", this.aSignature = [], this.init = function() {
    this.aHeader = [], this.sPayload = void 0, this.aSignature = [];
  }, this.initWithJWS = function(s) {
    this.init();
    var n = s.split(".");
    if (n.length != 3)
      throw "malformed input JWS";
    this.aHeader.push(n[0]), this.sPayload = n[1], this.aSignature.push(n[2]);
  }, this.addSignature = function(s, n, h, u) {
    if (this.sPayload === void 0 || this.sPayload === null)
      throw "there's no JSON-JS signature to add.";
    var p = this.aHeader.length;
    if (this.aHeader.length != this.aSignature.length)
      throw "aHeader.length != aSignature.length";
    try {
      var c = a.jws.JWS.sign(s, n, this.sPayload, h, u), y = c.split("."), v = y[0], o = y[2];
      this.aHeader.push(y[0]), this.aSignature.push(y[2]);
    } catch (l) {
      throw this.aHeader.length > p && this.aHeader.pop(), this.aSignature.length > p && this.aSignature.pop(), "addSignature failed: " + l;
    }
  }, this.verifyAll = function(s) {
    if (this.aHeader.length !== s.length || this.aSignature.length !== s.length)
      return !1;
    for (var n = 0; n < s.length; n++) {
      var h = s[n];
      if (h.length !== 2)
        return !1;
      var u = this.verifyNth(n, h[0], h[1]);
      if (u === !1)
        return !1;
    }
    return !0;
  }, this.verifyNth = function(s, n, h) {
    if (this.aHeader.length <= s || this.aSignature.length <= s)
      return !1;
    var u = this.aHeader[s], p = this.aSignature[s], c = u + "." + this.sPayload + "." + p, y = !1;
    try {
      y = r.verify(c, n, h);
    } catch {
      return !1;
    }
    return y;
  }, this.readJWSJS = function(s) {
    if (typeof s == "string") {
      var n = i(s);
      if (n == null)
        throw "argument is not safe JSON object string";
      this.aHeader = n.headers, this.sPayload = n.payload, this.aSignature = n.signatures;
    } else
      try {
        if (s.headers.length > 0)
          this.aHeader = s.headers;
        else
          throw "malformed header";
        if (typeof s.payload == "string")
          this.sPayload = s.payload;
        else
          throw "malformed signatures";
        if (s.signatures.length > 0)
          this.aSignature = s.signatures;
        else
          throw "malformed signatures";
      } catch (h) {
        throw "malformed JWS-JS JSON object: " + h;
      }
  }, this.getJSON = function() {
    return { headers: this.aHeader, payload: this.sPayload, signatures: this.aSignature };
  }, this.isEmpty = function() {
    return this.aHeader.length == 0 ? 1 : 0;
  };
};
var Xn = K.SecureRandom = ze, Jn = K.rng_seed_time = St, $n = K.BigInteger = R, Yn = K.RSAKey = q, Zn = K.ECDSA = a.crypto.ECDSA, Qn = K.DSA = a.crypto.DSA, es = K.Signature = a.crypto.Signature, ts = K.MessageDigest = a.crypto.MessageDigest, rs = K.Mac = a.crypto.Mac, is = K.KEYUTIL = k, ns = K.ASN1HEX = V, ss = K.X509 = _, as = K.X509CRL = Wn, os = K.CryptoJS = L, us = K.b64tohex = ke, hs = K.b64toBA = Nt, fs = K.ECFieldElementFp = ae, cs = K.ECPointFp = z, ls = K.ECCurveFp = Re, ds = K.stoBA = Lt, ps = K.BAtos = _t, vs = K.BAtohex = st, gs = K.stohex = ye, ys = K.stob64 = Pn, ms = K.stob64u = Cn, xs = K.b64utos = In, Ss = K.b64tob64u = qe, Es = K.b64utob64 = Ye, ws = K.hex2b64 = Ie, bs = K.hextob64u = se, Fs = K.b64utohex = Z, As = K.utf8tob64u = Je, Ds = K.b64utoutf8 = Fe, Ps = K.utf8tob64 = Rn, Cs = K.b64toutf8 = Tn, Is = K.utf8tohex = at, Rs = K.hextoutf8 = W, Ts = K.hextorstr = me, Bs = K.rstrtohex = Pe, Ns = K.hextob64 = Et, Hs = K.hextob64nl = Hn, Os = K.b64nltohex = qt, js = K.hextopem = le, Vs = K.pemtohex = ie, Ks = K.hextoArrayBuffer = Vn, Ls = K.ArrayBuffertohex = Kn, _s = K.zulutomsec = wt, qs = K.msectozulu = Ln, ks = K.zulutosec = kt, Ms = K.zulutodate = _n, Us = K.datetozulu = qn, zs = K.uricmptohex = ut, Gs = K.hextouricmp = ht, Ws = K.ipv6tohex = pt, Xs = K.hextoipv6 = vt, Js = K.hextoip = et, $s = K.iptohex = bt, Ys = K.ucs2hextoutf8 = Ft, Zs = K.encodeURIComponentAll = ft, Qs = K.newline_toUnix = kn, ea = K.newline_toDos = Mn, ta = K.hextoposhex = gt, ra = K.intarystrtohex = Un, ia = K.strdiffidx = zn, na = K.oidtohex = zt, sa = K.hextooid = ct, aa = K.strpad = tt, oa = K.bitstrtoint = Wt, ua = K.inttobitstr = Xt, ha = K.bitstrtobinstr = Jt, fa = K.binstrtobitstr = Gn, ca = K.isBase64URLDot = At, la = K.namearraytobinstr = rt, da = K.extendClass = N, pa = K.foldnl = ot, va = K.b64topem = On, ga = K.pemtob64 = jn, ya = K.timeogen = Mt, ma = K.aryval = J, xa = K.inttohex = Gt, Sa = K.twoscompl = Ze, Ea = K.KJUR = a, wa = K.crypto = a.crypto, ba = K.asn1 = a.asn1, Fa = K.jws = a.jws, Aa = K.lang = a.lang, Da = K.VERSION = rr, Pa = K.VERSION_FULL = ir;
const Ca = /* @__PURE__ */ tr({
  __proto__: null,
  ASN1HEX: ns,
  ArrayBuffertohex: Ls,
  BAtohex: vs,
  BAtos: ps,
  BigInteger: $n,
  CryptoJS: os,
  DSA: Qn,
  ECCurveFp: ls,
  ECDSA: Zn,
  ECFieldElementFp: fs,
  ECPointFp: cs,
  KEYUTIL: is,
  KJUR: Ea,
  Mac: rs,
  MessageDigest: ts,
  RSAKey: Yn,
  SecureRandom: Xn,
  Signature: es,
  VERSION: Da,
  VERSION_FULL: Pa,
  X509: ss,
  X509CRL: as,
  aryval: ma,
  asn1: ba,
  b64nltohex: Os,
  b64toBA: hs,
  b64tob64u: Ss,
  b64tohex: us,
  b64topem: va,
  b64toutf8: Cs,
  b64utob64: Es,
  b64utohex: Fs,
  b64utos: xs,
  b64utoutf8: Ds,
  binstrtobitstr: fa,
  bitstrtobinstr: ha,
  bitstrtoint: oa,
  crypto: wa,
  datetozulu: Us,
  default: K,
  encodeURIComponentAll: Zs,
  extendClass: da,
  foldnl: pa,
  hex2b64: ws,
  hextoArrayBuffer: Ks,
  hextob64: Ns,
  hextob64nl: Hs,
  hextob64u: bs,
  hextoip: Js,
  hextoipv6: Xs,
  hextooid: sa,
  hextopem: js,
  hextoposhex: ta,
  hextorstr: Ts,
  hextouricmp: Gs,
  hextoutf8: Rs,
  intarystrtohex: ra,
  inttobitstr: ua,
  inttohex: xa,
  iptohex: $s,
  ipv6tohex: Ws,
  isBase64URLDot: ca,
  jws: Fa,
  lang: Aa,
  msectozulu: qs,
  namearraytobinstr: la,
  newline_toDos: ea,
  newline_toUnix: Qs,
  oidtohex: na,
  pemtob64: ga,
  pemtohex: Vs,
  rng_seed_time: Jn,
  rstrtohex: Bs,
  stoBA: ds,
  stob64: ys,
  stob64u: ms,
  stohex: gs,
  strdiffidx: ia,
  strpad: aa,
  timeogen: ya,
  twoscompl: Sa,
  ucs2hextoutf8: Ys,
  uricmptohex: zs,
  utf8tob64: Ps,
  utf8tob64u: As,
  utf8tohex: Is,
  zulutodate: Ms,
  zulutomsec: _s,
  zulutosec: ks
}, [K]);
export {
  Ca as jsrsasign
};
