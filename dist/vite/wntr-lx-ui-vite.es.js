import { createHash as x } from "crypto";
import { promises as N } from "fs";
import $ from "path";
import { loadEnv as I } from "vite";
const J = () => x("sha256").update(Date.now().toString()).digest("base64");
function G(w = {}) {
  const {
    reportOnly: u = !1,
    processI18n: m = !0,
    noncePlaceholder: o = "NONCE_PLACEHOLDER",
    xssProtection: l = "1; mode=block",
    frameOptions: h = "DENY",
    contentTypeOptions: t = "nosniff",
    referrerPolicy: i = "strict-origin-when-cross-origin",
    permissionsPolicy: s = "camera=(), microphone=(), geolocation=()",
    cacheControl: r = "no-store, max-age=0",
    scriptSrc: S,
    styleSrc: y,
    imgSrc: b = "'self' data:",
    fontSrc: P = "'self'",
    objectSrc: k = "'none'",
    baseUri: E = "'self'",
    formAction: j = "'self'",
    frameAncestors: H = "'none'",
    workerSrc: D = "'self'",
    connectSrc: V = "'self'"
  } = w;
  let v;
  return {
    name: "vite-plugin-csp-nonce",
    enforce: "post",
    config(n, p) {
      if (n.resolve = n.resolve || {}, n.resolve.alias = n.resolve.alias || {}, m) {
        n.plugins = n.plugins || [];
        const e = p.command === "serve";
        let d = "vue-i18n/dist/vue-i18n.esm-browser.prod.js";
        e && (d = "vue-i18n/dist/vue-i18n.esm-browser.js"), n.resolve.alias["vue-i18n"] = d;
      }
      return n;
    },
    configResolved(n) {
      v = n.command === "serve" ? J() : o, n.html = n.html || {}, n.html.cspNonce = v;
    },
    /**
     * @param {import('vite').ViteDevServer} server
     */
    configureServer(n) {
      n.middlewares.use((p, e, d) => {
        const a = v, g = S ? S(a) : `'self' 'nonce-${a}'`, c = y ? y(a) : `'self' 'nonce-${a}'`, f = [
          "default-src 'self'",
          `script-src ${g}`,
          `style-src ${c}`,
          `img-src ${b}`,
          `font-src ${P}`,
          `object-src ${k}`,
          `base-uri ${E}`,
          `form-action ${j}`,
          `frame-ancestors ${H}`,
          `worker-src ${D}`,
          `connect-src ${V}`,
          "upgrade-insecure-requests"
        ].join("; "), C = u ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy";
        e.setHeader(C, f), l && e.setHeader("X-XSS-Protection", l), h && e.setHeader("X-Frame-Options", h), t && e.setHeader("X-Content-Type-Options", t), i && e.setHeader("Referrer-Policy", i), s && e.setHeader("Permissions-Policy", s), r && e.setHeader("Cache-Control", r), d();
      });
    },
    /**
     * @param {string} html
     * @param {import('vite').IndexHtmlTransformContext} _ctx
     */
    // eslint-disable-next-line no-unused-vars
    transformIndexHtml(n, p) {
      const e = v, d = `
        <script nonce="${e}">
          (function() {
            const originalCreateElement = document.createElement;
            document.createElement = function() {
              const element = originalCreateElement.apply(document, arguments);
              if (arguments[0].toLowerCase() === 'style' || arguments[0].toLowerCase() === 'script') {
                element.nonce = "${e}";
              }
              return element;
            };
            // Override insertBefore to add nonce to dynamically inserted style tags
            const originalInsertBefore = Element.prototype.insertBefore;
            Element.prototype.insertBefore = function(newNode, referenceNode) {
              if (newNode.tagName && newNode.tagName.toLowerCase() === 'style' && !newNode.nonce) {
                newNode.nonce = "${e}";
              }
              return originalInsertBefore.call(this, newNode, referenceNode);
            };
            // Override appendChild to add nonce to dynamically inserted style tags
            const originalAppendChild = Element.prototype.appendChild;
            Element.prototype.appendChild = function(newNode) {
              if (newNode.tagName && newNode.tagName.toLowerCase() === 'style' && !newNode.nonce) {
                newNode.nonce = "${e}";
              }
              return originalAppendChild.call(this, newNode);
            };
          })();
        <\/script>
      `, a = /<link\s+([^>]*)>/g;
      return n.replace(/<script/g, `<script nonce="${e}"`).replace(/<style/g, `<style nonce="${e}"`).replace(a, (g, c) => {
        let f = c.replace(/\s*\/\s*$/, "");
        return f.includes("nonce=") || (f += ` nonce="${e}"`), `<link ${f.trim()}>`;
      }).replace(/style="/g, `style="nonce="${e}" `).replace("</head>", `${d}</head>`);
    },
    /**
    //@param {import('rollup').OutputOptions} buildOptions
    //@param {import('rollup').OutputBundle} bundle
     */
    // @ts-ignore
    generateBundle(n, p) {
      const e = v, d = /<link\s+([^>]*?)(\/?\s*>)/g;
      return Object.keys(p).reduce((a, g) => {
        const c = p[g];
        return c.type === "asset" && c.fileName.endsWith(".html") ? {
          ...a,
          [g]: {
            ...c,
            source: c.source.replace(/<script/g, `<script nonce="${e}"`).replace(/<style/g, `<style nonce="${e}"`).replace(d, (f, C) => {
              let O = C.replace(/\s*\/\s*$/, "");
              return O.includes("nonce=") || (O += ` nonce="${e}"`), `<link ${O.trim()}>`;
            }).replace(/style="/g, `style="nonce="${e}" `)
          }
        } : {
          ...a,
          [g]: c
        };
      }, {});
    }
  };
}
let R = {};
const T = () => R, A = () => ({
  getGlobals: () => {
    const u = T();
    return u || null;
  }
});
function X(w = {}) {
  let u = "dist", m, o = null;
  async function l() {
    try {
      const t = I(A().getGlobals()?.environment, process.cwd(), ""), i = $.resolve(process.cwd(), "package.json"), s = JSON.parse(await N.readFile(i, "utf-8"));
      return {
        version: t.CUSTOM_VERSION || s.version,
        buildTime: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (t) {
      return console.error("❌ Error generating version data:", t), { version: "unknown", buildTime: (/* @__PURE__ */ new Date()).toISOString() };
    }
  }
  async function h() {
    try {
      const t = await l(), i = $.resolve(process.cwd(), u);
      try {
        await N.access(i);
      } catch {
        await N.mkdir(i, { recursive: !0 });
      }
      const s = $.resolve(i, "version.json");
      await N.writeFile(s, JSON.stringify(t, null, 2), "utf-8"), console.log(`✅ Version file generated at ${s}`);
    } catch (t) {
      console.error("❌ Error generating version file:", t);
    }
  }
  return {
    name: "vite-plugin-portal-version",
    configResolved(t) {
      m = t, u = w.outDir || m.build?.outDir || "dist";
    },
    // For development mode, initialize in-memory version data
    async buildStart() {
      m.command === "serve" && (o = await l(), console.log("✅ In-memory version data initialized:", o));
    },
    // For production build, generate the physical file
    async closeBundle() {
      m.command === "build" && await h();
    },
    // In development, serve version.json from memory
    configureServer(t) {
      const i = $.resolve(process.cwd(), "package.json");
      t.watcher.add(i), t.watcher.on("change", async (s) => {
        s === i && (o = await l(), console.log("📦 package.json changed, in-memory version data updated:", o));
      }), t.middlewares.use(async (s, r, S) => {
        if (s.url === "/__update_version") {
          try {
            o = await l(), o.buildTime = (/* @__PURE__ */ new Date()).toISOString(), console.log("🔄 Version manually updated for testing:", o), r.setHeader("Content-Type", "application/json"), r.statusCode = 200, r.end(
              JSON.stringify({
                success: !0,
                message: "Version updated for testing",
                versionData: o
              })
            );
          } catch {
            r.statusCode = 500, r.end(JSON.stringify({ error: "Failed to update version" }));
          }
          return;
        }
        if (s.url.startsWith("/version.json"))
          try {
            o || (o = await l()), r.setHeader("Content-Type", "application/json"), r.statusCode = 200, r.end(JSON.stringify(o));
          } catch (y) {
            console.error("Error serving version.json:", y), r.statusCode = 500, r.end(JSON.stringify({ error: "Failed to serve version.json" }));
          }
        else
          S();
      });
    }
  };
}
export {
  X as lxVitePortalVersionPlugin,
  G as lxViteSecureHeadersPlugin
};
//# sourceMappingURL=wntr-lx-ui-vite.es.js.map
