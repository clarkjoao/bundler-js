(() => {
  "use strict";
  var e = {
      99: (e, t, n) => {
        n.d(t, { Z: () => a });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          s = n.n(i)()(o());
        s.push([
          e.id,
          ".title-component{width:100%;height:100px;background-color:#000;color:#fff;display:flex;justify-content:center;align-items:center}.screen-component{width:100%;height:100px;background-color:#000;color:#fff;display:flex;justify-content:center;align-items:center}.button-component{width:100%;height:100px;background-color:#fff;display:flex;justify-content:center;align-items:center}",
          "",
        ]);
        const a = s;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var c = this[a][0];
                  null != c && (s[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && s[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, s = [], a = 0; a < e.length; a++) {
            var c = e[a],
              u = r.base ? c[0] + r.base : c[0],
              l = i[u] || 0,
              f = "".concat(u, " ").concat(l);
            i[u] = l + 1;
            var d = n(f),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(p);
            else {
              var h = o(p, r);
              (r.byIndex = a),
                t.splice(a, 0, { identifier: f, updater: h, references: 1 });
            }
            s.push(f);
          }
          return s;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < i.length; s++) {
              var a = n(i[s]);
              t[a].references--;
            }
            for (var c = r(e, o), u = 0; u < i.length; u++) {
              var l = n(i[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      218: (e, t, n) => {
        function r(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        const { toString: o } = Object.prototype,
          { getPrototypeOf: i } = Object,
          s =
            ((a = Object.create(null)),
            (e) => {
              const t = o.call(e);
              return a[t] || (a[t] = t.slice(8, -1).toLowerCase());
            });
        var a;
        const c = (e) => ((e = e.toLowerCase()), (t) => s(t) === e),
          u = (e) => (t) => typeof t === e,
          { isArray: l } = Array,
          f = u("undefined"),
          d = c("ArrayBuffer"),
          p = u("string"),
          h = u("function"),
          m = u("number"),
          y = (e) => null !== e && "object" == typeof e,
          g = (e) => {
            if ("object" !== s(e)) return !1;
            const t = i(e);
            return !(
              (null !== t &&
                t !== Object.prototype &&
                null !== Object.getPrototypeOf(t)) ||
              Symbol.toStringTag in e ||
              Symbol.iterator in e
            );
          },
          b = c("Date"),
          w = c("File"),
          E = c("Blob"),
          O = c("FileList"),
          v = c("URLSearchParams");
        function S(e, t, { allOwnKeys: n = !1 } = {}) {
          if (null == e) return;
          let r, o;
          if (("object" != typeof e && (e = [e]), l(e)))
            for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
          else {
            const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              i = o.length;
            let s;
            for (r = 0; r < i; r++) (s = o[r]), t.call(null, e[s], s, e);
          }
        }
        function R(e, t) {
          t = t.toLowerCase();
          const n = Object.keys(e);
          let r,
            o = n.length;
          for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
          return null;
        }
        const A =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : n.g,
          T = (e) => !f(e) && e !== A,
          x =
            ((j = "undefined" != typeof Uint8Array && i(Uint8Array)),
            (e) => j && e instanceof j);
        var j;
        const N = c("HTMLFormElement"),
          C = (
            ({ hasOwnProperty: e }) =>
            (t, n) =>
              e.call(t, n)
          )(Object.prototype),
          P = c("RegExp"),
          L = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
              r = {};
            S(n, (n, o) => {
              !1 !== t(n, o, e) && (r[o] = n);
            }),
              Object.defineProperties(e, r);
          },
          U = "abcdefghijklmnopqrstuvwxyz",
          _ = "0123456789",
          F = { DIGIT: _, ALPHA: U, ALPHA_DIGIT: U + U.toUpperCase() + _ };
        var B = {
          isArray: l,
          isArrayBuffer: d,
          isBuffer: function (e) {
            return (
              null !== e &&
              !f(e) &&
              null !== e.constructor &&
              !f(e.constructor) &&
              h(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            const t = "[object FormData]";
            return (
              e &&
              (("function" == typeof FormData && e instanceof FormData) ||
                o.call(e) === t ||
                (h(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && d(e.buffer)),
              t
            );
          },
          isString: p,
          isNumber: m,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: y,
          isPlainObject: g,
          isUndefined: f,
          isDate: b,
          isFile: w,
          isBlob: E,
          isRegExp: P,
          isFunction: h,
          isStream: (e) => y(e) && h(e.pipe),
          isURLSearchParams: v,
          isTypedArray: x,
          isFileList: O,
          forEach: S,
          merge: function e() {
            const { caseless: t } = (T(this) && this) || {},
              n = {},
              r = (r, o) => {
                const i = (t && R(n, o)) || o;
                g(n[i]) && g(r)
                  ? (n[i] = e(n[i], r))
                  : g(r)
                  ? (n[i] = e({}, r))
                  : l(r)
                  ? (n[i] = r.slice())
                  : (n[i] = r);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && S(arguments[e], r);
            return n;
          },
          extend: (e, t, n, { allOwnKeys: o } = {}) => (
            S(
              t,
              (t, o) => {
                n && h(t) ? (e[o] = r(t, n)) : (e[o] = t);
              },
              { allOwnKeys: o }
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let o, s, a;
            const c = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
                (a = o[s]),
                  (r && !r(a, e, t)) || c[a] || ((t[a] = e[a]), (c[a] = !0));
              e = !1 !== n && i(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: s,
          kindOfTest: c,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (l(e)) return e;
            let t = e.length;
            if (!m(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: N,
          hasOwnProperty: C,
          hasOwnProp: C,
          reduceDescriptors: L,
          freezeMethods: (e) => {
            L(e, (t, n) => {
              if (h(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              h(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return l(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: R,
          global: A,
          isContextDefined: T,
          ALPHABET: F,
          generateString: (e = 16, t = F.ALPHA_DIGIT) => {
            let n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              h(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (y(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const o = l(e) ? [] : {};
                    return (
                      S(e, (e, t) => {
                        const i = n(e, r + 1);
                        !f(i) && (o[t] = i);
                      }),
                      (t[r] = void 0),
                      o
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
        };
        function D(e, t, n, r, o) {
          Error.call(this),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o);
        }
        B.inherits(D, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: B.toJSONObject(this.config),
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        const k = D.prototype,
          M = {};
        function I(e) {
          return B.isPlainObject(e) || B.isArray(e);
        }
        function q(e) {
          return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }
        function z(e, t, n) {
          return e
            ? e
                .concat(t)
                .map(function (e, t) {
                  return (e = q(e)), !n && t ? "[" + e + "]" : e;
                })
                .join(n ? "." : "")
            : t;
        }
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
          "ERR_NOT_SUPPORT",
          "ERR_INVALID_URL",
        ].forEach((e) => {
          M[e] = { value: e };
        }),
          Object.defineProperties(D, M),
          Object.defineProperty(k, "isAxiosError", { value: !0 }),
          (D.from = (e, t, n, r, o, i) => {
            const s = Object.create(k);
            return (
              B.toFlatObject(
                e,
                s,
                function (e) {
                  return e !== Error.prototype;
                },
                (e) => "isAxiosError" !== e
              ),
              D.call(s, e.message, t, n, r, o),
              (s.cause = e),
              (s.name = e.name),
              i && Object.assign(s, i),
              s
            );
          });
        const H = B.toFlatObject(B, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        });
        function J(e, t, n) {
          if (!B.isObject(e)) throw new TypeError("target must be an object");
          t = t || new FormData();
          const r = (n = B.toFlatObject(
              n,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !B.isUndefined(t[e]);
              }
            )).metaTokens,
            o = n.visitor || u,
            i = n.dots,
            s = n.indexes,
            a =
              (n.Blob || ("undefined" != typeof Blob && Blob)) &&
              B.isSpecCompliantForm(t);
          if (!B.isFunction(o))
            throw new TypeError("visitor must be a function");
          function c(e) {
            if (null === e) return "";
            if (B.isDate(e)) return e.toISOString();
            if (!a && B.isBlob(e))
              throw new D("Blob is not supported. Use a Buffer instead.");
            return B.isArrayBuffer(e) || B.isTypedArray(e)
              ? a && "function" == typeof Blob
                ? new Blob([e])
                : Buffer.from(e)
              : e;
          }
          function u(e, n, o) {
            let a = e;
            if (e && !o && "object" == typeof e)
              if (B.endsWith(n, "{}"))
                (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
              else if (
                (B.isArray(e) &&
                  (function (e) {
                    return B.isArray(e) && !e.some(I);
                  })(e)) ||
                ((B.isFileList(e) || B.endsWith(n, "[]")) && (a = B.toArray(e)))
              )
                return (
                  (n = q(n)),
                  a.forEach(function (e, r) {
                    !B.isUndefined(e) &&
                      null !== e &&
                      t.append(
                        !0 === s ? z([n], r, i) : null === s ? n : n + "[]",
                        c(e)
                      );
                  }),
                  !1
                );
            return !!I(e) || (t.append(z(o, n, i), c(e)), !1);
          }
          const l = [],
            f = Object.assign(H, {
              defaultVisitor: u,
              convertValue: c,
              isVisitable: I,
            });
          if (!B.isObject(e)) throw new TypeError("data must be an object");
          return (
            (function e(n, r) {
              if (!B.isUndefined(n)) {
                if (-1 !== l.indexOf(n))
                  throw Error("Circular reference detected in " + r.join("."));
                l.push(n),
                  B.forEach(n, function (n, i) {
                    !0 ===
                      (!(B.isUndefined(n) || null === n) &&
                        o.call(t, n, B.isString(i) ? i.trim() : i, r, f)) &&
                      e(n, r ? r.concat(i) : [i]);
                  }),
                  l.pop();
              }
            })(e),
            t
          );
        }
        function W(e) {
          const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0",
          };
          return encodeURIComponent(e).replace(
            /[!'()~]|%20|%00/g,
            function (e) {
              return t[e];
            }
          );
        }
        function K(e, t) {
          (this._pairs = []), e && J(e, this, t);
        }
        const V = K.prototype;
        function G(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        function $(e, t, n) {
          if (!t) return e;
          const r = (n && n.encode) || G,
            o = n && n.serialize;
          let i;
          if (
            ((i = o
              ? o(t, n)
              : B.isURLSearchParams(t)
              ? t.toString()
              : new K(t, n).toString(r)),
            i)
          ) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
          }
          return e;
        }
        (V.append = function (e, t) {
          this._pairs.push([e, t]);
        }),
          (V.toString = function (e) {
            const t = e
              ? function (t) {
                  return e.call(this, t, W);
                }
              : W;
            return this._pairs
              .map(function (e) {
                return t(e[0]) + "=" + t(e[1]);
              }, "")
              .join("&");
          });
        var Z = class {
            constructor() {
              this.handlers = [];
            }
            use(e, t, n) {
              return (
                this.handlers.push({
                  fulfilled: e,
                  rejected: t,
                  synchronous: !!n && n.synchronous,
                  runWhen: n ? n.runWhen : null,
                }),
                this.handlers.length - 1
              );
            }
            eject(e) {
              this.handlers[e] && (this.handlers[e] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(e) {
              B.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }
          },
          X = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          Q = {
            isBrowser: !0,
            classes: {
              URLSearchParams:
                "undefined" != typeof URLSearchParams ? URLSearchParams : K,
              FormData: "undefined" != typeof FormData ? FormData : null,
              Blob: "undefined" != typeof Blob ? Blob : null,
            },
            isStandardBrowserEnv: (() => {
              let e;
              return (
                ("undefined" == typeof navigator ||
                  ("ReactNative" !== (e = navigator.product) &&
                    "NativeScript" !== e &&
                    "NS" !== e)) &&
                "undefined" != typeof window &&
                "undefined" != typeof document
              );
            })(),
            isStandardBrowserWebWorkerEnv:
              "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope &&
              "function" == typeof self.importScripts,
            protocols: ["http", "https", "file", "blob", "url", "data"],
          };
        function Y(e) {
          function t(e, n, r, o) {
            let i = e[o++];
            const s = Number.isFinite(+i),
              a = o >= e.length;
            return (
              (i = !i && B.isArray(r) ? r.length : i),
              a
                ? (B.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !s)
                : ((r[i] && B.isObject(r[i])) || (r[i] = []),
                  t(e, n, r[i], o) &&
                    B.isArray(r[i]) &&
                    (r[i] = (function (e) {
                      const t = {},
                        n = Object.keys(e);
                      let r;
                      const o = n.length;
                      let i;
                      for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
                      return t;
                    })(r[i])),
                  !s)
            );
          }
          if (B.isFormData(e) && B.isFunction(e.entries)) {
            const n = {};
            return (
              B.forEachEntry(e, (e, r) => {
                t(
                  (function (e) {
                    return B.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                      "[]" === e[0] ? "" : e[1] || e[0]
                    );
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        }
        const ee = { "Content-Type": void 0 },
          te = {
            transitional: X,
            adapter: ["xhr", "http"],
            transformRequest: [
              function (e, t) {
                const n = t.getContentType() || "",
                  r = n.indexOf("application/json") > -1,
                  o = B.isObject(e);
                if (
                  (o && B.isHTMLForm(e) && (e = new FormData(e)),
                  B.isFormData(e))
                )
                  return r && r ? JSON.stringify(Y(e)) : e;
                if (
                  B.isArrayBuffer(e) ||
                  B.isBuffer(e) ||
                  B.isStream(e) ||
                  B.isFile(e) ||
                  B.isBlob(e)
                )
                  return e;
                if (B.isArrayBufferView(e)) return e.buffer;
                if (B.isURLSearchParams(e))
                  return (
                    t.setContentType(
                      "application/x-www-form-urlencoded;charset=utf-8",
                      !1
                    ),
                    e.toString()
                  );
                let i;
                if (o) {
                  if (n.indexOf("application/x-www-form-urlencoded") > -1)
                    return (function (e, t) {
                      return J(
                        e,
                        new Q.classes.URLSearchParams(),
                        Object.assign(
                          {
                            visitor: function (e, t, n, r) {
                              return Q.isNode && B.isBuffer(e)
                                ? (this.append(t, e.toString("base64")), !1)
                                : r.defaultVisitor.apply(this, arguments);
                            },
                          },
                          t
                        )
                      );
                    })(e, this.formSerializer).toString();
                  if (
                    (i = B.isFileList(e)) ||
                    n.indexOf("multipart/form-data") > -1
                  ) {
                    const t = this.env && this.env.FormData;
                    return J(
                      i ? { "files[]": e } : e,
                      t && new t(),
                      this.formSerializer
                    );
                  }
                }
                return o || r
                  ? (t.setContentType("application/json", !1),
                    (function (e, t, n) {
                      if (B.isString(e))
                        try {
                          return (0, JSON.parse)(e), B.trim(e);
                        } catch (e) {
                          if ("SyntaxError" !== e.name) throw e;
                        }
                      return (0, JSON.stringify)(e);
                    })(e))
                  : e;
              },
            ],
            transformResponse: [
              function (e) {
                const t = this.transitional || te.transitional,
                  n = t && t.forcedJSONParsing,
                  r = "json" === this.responseType;
                if (e && B.isString(e) && ((n && !this.responseType) || r)) {
                  const n = !(t && t.silentJSONParsing) && r;
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (n) {
                      if ("SyntaxError" === e.name)
                        throw D.from(
                          e,
                          D.ERR_BAD_RESPONSE,
                          this,
                          null,
                          this.response
                        );
                      throw e;
                    }
                  }
                }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: Q.classes.FormData, Blob: Q.classes.Blob },
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
            },
          };
        B.forEach(["delete", "get", "head"], function (e) {
          te.headers[e] = {};
        }),
          B.forEach(["post", "put", "patch"], function (e) {
            te.headers[e] = B.merge(ee);
          });
        var ne = te;
        const re = B.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ]),
          oe = Symbol("internals");
        function ie(e) {
          return e && String(e).trim().toLowerCase();
        }
        function se(e) {
          return !1 === e || null == e
            ? e
            : B.isArray(e)
            ? e.map(se)
            : String(e);
        }
        function ae(e, t, n, r, o) {
          return B.isFunction(r)
            ? r.call(this, t, n)
            : (o && (t = n),
              B.isString(t)
                ? B.isString(r)
                  ? -1 !== t.indexOf(r)
                  : B.isRegExp(r)
                  ? r.test(t)
                  : void 0
                : void 0);
        }
        class ce {
          constructor(e) {
            e && this.set(e);
          }
          set(e, t, n) {
            const r = this;
            function o(e, t, n) {
              const o = ie(t);
              if (!o) throw new Error("header name must be a non-empty string");
              const i = B.findKey(r, o);
              (!i ||
                void 0 === r[i] ||
                !0 === n ||
                (void 0 === n && !1 !== r[i])) &&
                (r[i || t] = se(e));
            }
            const i = (e, t) => B.forEach(e, (e, n) => o(e, n, t));
            return (
              B.isPlainObject(e) || e instanceof this.constructor
                ? i(e, t)
                : B.isString(e) &&
                  (e = e.trim()) &&
                  !/^[-_a-zA-Z]+$/.test(e.trim())
                ? i(
                    ((e) => {
                      const t = {};
                      let n, r, o;
                      return (
                        e &&
                          e.split("\n").forEach(function (e) {
                            (o = e.indexOf(":")),
                              (n = e.substring(0, o).trim().toLowerCase()),
                              (r = e.substring(o + 1).trim()),
                              !n ||
                                (t[n] && re[n]) ||
                                ("set-cookie" === n
                                  ? t[n]
                                    ? t[n].push(r)
                                    : (t[n] = [r])
                                  : (t[n] = t[n] ? t[n] + ", " + r : r));
                          }),
                        t
                      );
                    })(e),
                    t
                  )
                : null != e && o(t, e, n),
              this
            );
          }
          get(e, t) {
            if ((e = ie(e))) {
              const n = B.findKey(this, e);
              if (n) {
                const e = this[n];
                if (!t) return e;
                if (!0 === t)
                  return (function (e) {
                    const t = Object.create(null),
                      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let r;
                    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                    return t;
                  })(e);
                if (B.isFunction(t)) return t.call(this, e, n);
                if (B.isRegExp(t)) return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(e, t) {
            if ((e = ie(e))) {
              const n = B.findKey(this, e);
              return !(
                !n ||
                void 0 === this[n] ||
                (t && !ae(0, this[n], n, t))
              );
            }
            return !1;
          }
          delete(e, t) {
            const n = this;
            let r = !1;
            function o(e) {
              if ((e = ie(e))) {
                const o = B.findKey(n, e);
                !o || (t && !ae(0, n[o], o, t)) || (delete n[o], (r = !0));
              }
            }
            return B.isArray(e) ? e.forEach(o) : o(e), r;
          }
          clear(e) {
            const t = Object.keys(this);
            let n = t.length,
              r = !1;
            for (; n--; ) {
              const o = t[n];
              (e && !ae(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
            }
            return r;
          }
          normalize(e) {
            const t = this,
              n = {};
            return (
              B.forEach(this, (r, o) => {
                const i = B.findKey(n, o);
                if (i) return (t[i] = se(r)), void delete t[o];
                const s = e
                  ? (function (e) {
                      return e
                        .trim()
                        .toLowerCase()
                        .replace(
                          /([a-z\d])(\w*)/g,
                          (e, t, n) => t.toUpperCase() + n
                        );
                    })(o)
                  : String(o).trim();
                s !== o && delete t[o], (t[s] = se(r)), (n[s] = !0);
              }),
              this
            );
          }
          concat(...e) {
            return this.constructor.concat(this, ...e);
          }
          toJSON(e) {
            const t = Object.create(null);
            return (
              B.forEach(this, (n, r) => {
                null != n &&
                  !1 !== n &&
                  (t[r] = e && B.isArray(n) ? n.join(", ") : n);
              }),
              t
            );
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map(([e, t]) => e + ": " + t)
              .join("\n");
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(e) {
            return e instanceof this ? e : new this(e);
          }
          static concat(e, ...t) {
            const n = new this(e);
            return t.forEach((e) => n.set(e)), n;
          }
          static accessor(e) {
            const t = (this[oe] = this[oe] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              const r = ie(e);
              t[r] ||
                ((function (e, t) {
                  const n = B.toCamelCase(" " + t);
                  ["get", "set", "has"].forEach((r) => {
                    Object.defineProperty(e, r + n, {
                      value: function (e, n, o) {
                        return this[r].call(this, t, e, n, o);
                      },
                      configurable: !0,
                    });
                  });
                })(n, e),
                (t[r] = !0));
            }
            return B.isArray(e) ? e.forEach(r) : r(e), this;
          }
        }
        ce.accessor([
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "User-Agent",
          "Authorization",
        ]),
          B.freezeMethods(ce.prototype),
          B.freezeMethods(ce);
        var ue = ce;
        function le(e, t) {
          const n = this || ne,
            r = t || n,
            o = ue.from(r.headers);
          let i = r.data;
          return (
            B.forEach(e, function (e) {
              i = e.call(n, i, o.normalize(), t ? t.status : void 0);
            }),
            o.normalize(),
            i
          );
        }
        function fe(e) {
          return !(!e || !e.__CANCEL__);
        }
        function de(e, t, n) {
          D.call(this, null == e ? "canceled" : e, D.ERR_CANCELED, t, n),
            (this.name = "CanceledError");
        }
        B.inherits(de, D, { __CANCEL__: !0 });
        var pe = Q.isStandardBrowserEnv
          ? {
              write: function (e, t, n, r, o, i) {
                const s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                  B.isNumber(n) &&
                    s.push("expires=" + new Date(n).toGMTString()),
                  B.isString(r) && s.push("path=" + r),
                  B.isString(o) && s.push("domain=" + o),
                  !0 === i && s.push("secure"),
                  (document.cookie = s.join("; "));
              },
              read: function (e) {
                const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
        function he(e, t) {
          return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            ? (function (e, t) {
                return t
                  ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                  : e;
              })(e, t)
            : t;
        }
        var me = Q.isStandardBrowserEnv
          ? (function () {
              const e = /(msie|trident)/i.test(navigator.userAgent),
                t = document.createElement("a");
              let n;
              function r(n) {
                let r = n;
                return (
                  e && (t.setAttribute("href", r), (r = t.href)),
                  t.setAttribute("href", r),
                  {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname:
                      "/" === t.pathname.charAt(0)
                        ? t.pathname
                        : "/" + t.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (e) {
                  const t = B.isString(e) ? r(e) : e;
                  return t.protocol === n.protocol && t.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            };
        function ye(e, t) {
          let n = 0;
          const r = (function (e, t) {
            e = e || 10;
            const n = new Array(e),
              r = new Array(e);
            let o,
              i = 0,
              s = 0;
            return (
              (t = void 0 !== t ? t : 1e3),
              function (a) {
                const c = Date.now(),
                  u = r[s];
                o || (o = c), (n[i] = a), (r[i] = c);
                let l = s,
                  f = 0;
                for (; l !== i; ) (f += n[l++]), (l %= e);
                if (
                  ((i = (i + 1) % e), i === s && (s = (s + 1) % e), c - o < t)
                )
                  return;
                const d = u && c - u;
                return d ? Math.round((1e3 * f) / d) : void 0;
              }
            );
          })(50, 250);
          return (o) => {
            const i = o.loaded,
              s = o.lengthComputable ? o.total : void 0,
              a = i - n,
              c = r(a);
            n = i;
            const u = {
              loaded: i,
              total: s,
              progress: s ? i / s : void 0,
              bytes: a,
              rate: c || void 0,
              estimated: c && s && i <= s ? (s - i) / c : void 0,
              event: o,
            };
            (u[t ? "download" : "upload"] = !0), e(u);
          };
        }
        const ge = {
          http: null,
          xhr:
            "undefined" != typeof XMLHttpRequest &&
            function (e) {
              return new Promise(function (t, n) {
                let r = e.data;
                const o = ue.from(e.headers).normalize(),
                  i = e.responseType;
                let s;
                function a() {
                  e.cancelToken && e.cancelToken.unsubscribe(s),
                    e.signal && e.signal.removeEventListener("abort", s);
                }
                B.isFormData(r) &&
                  (Q.isStandardBrowserEnv || Q.isStandardBrowserWebWorkerEnv) &&
                  o.setContentType(!1);
                let c = new XMLHttpRequest();
                if (e.auth) {
                  const t = e.auth.username || "",
                    n = e.auth.password
                      ? unescape(encodeURIComponent(e.auth.password))
                      : "";
                  o.set("Authorization", "Basic " + btoa(t + ":" + n));
                }
                const u = he(e.baseURL, e.url);
                function l() {
                  if (!c) return;
                  const r = ue.from(
                    "getAllResponseHeaders" in c && c.getAllResponseHeaders()
                  );
                  !(function (e, t, n) {
                    const r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new D(
                            "Request failed with status code " + n.status,
                            [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
                              Math.floor(n.status / 100) - 4
                            ],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), a();
                    },
                    function (e) {
                      n(e), a();
                    },
                    {
                      data:
                        i && "text" !== i && "json" !== i
                          ? c.response
                          : c.responseText,
                      status: c.status,
                      statusText: c.statusText,
                      headers: r,
                      config: e,
                      request: c,
                    }
                  ),
                    (c = null);
                }
                if (
                  (c.open(
                    e.method.toUpperCase(),
                    $(u, e.params, e.paramsSerializer),
                    !0
                  ),
                  (c.timeout = e.timeout),
                  "onloadend" in c
                    ? (c.onloadend = l)
                    : (c.onreadystatechange = function () {
                        c &&
                          4 === c.readyState &&
                          (0 !== c.status ||
                            (c.responseURL &&
                              0 === c.responseURL.indexOf("file:"))) &&
                          setTimeout(l);
                      }),
                  (c.onabort = function () {
                    c &&
                      (n(new D("Request aborted", D.ECONNABORTED, e, c)),
                      (c = null));
                  }),
                  (c.onerror = function () {
                    n(new D("Network Error", D.ERR_NETWORK, e, c)), (c = null);
                  }),
                  (c.ontimeout = function () {
                    let t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded";
                    const r = e.transitional || X;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                      n(
                        new D(
                          t,
                          r.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                          e,
                          c
                        )
                      ),
                      (c = null);
                  }),
                  Q.isStandardBrowserEnv)
                ) {
                  const t =
                    (e.withCredentials || me(u)) &&
                    e.xsrfCookieName &&
                    pe.read(e.xsrfCookieName);
                  t && o.set(e.xsrfHeaderName, t);
                }
                void 0 === r && o.setContentType(null),
                  "setRequestHeader" in c &&
                    B.forEach(o.toJSON(), function (e, t) {
                      c.setRequestHeader(t, e);
                    }),
                  B.isUndefined(e.withCredentials) ||
                    (c.withCredentials = !!e.withCredentials),
                  i && "json" !== i && (c.responseType = e.responseType),
                  "function" == typeof e.onDownloadProgress &&
                    c.addEventListener(
                      "progress",
                      ye(e.onDownloadProgress, !0)
                    ),
                  "function" == typeof e.onUploadProgress &&
                    c.upload &&
                    c.upload.addEventListener(
                      "progress",
                      ye(e.onUploadProgress)
                    ),
                  (e.cancelToken || e.signal) &&
                    ((s = (t) => {
                      c &&
                        (n(!t || t.type ? new de(null, e, c) : t),
                        c.abort(),
                        (c = null));
                    }),
                    e.cancelToken && e.cancelToken.subscribe(s),
                    e.signal &&
                      (e.signal.aborted
                        ? s()
                        : e.signal.addEventListener("abort", s)));
                const f = (function (e) {
                  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
                })(u);
                f && -1 === Q.protocols.indexOf(f)
                  ? n(
                      new D(
                        "Unsupported protocol " + f + ":",
                        D.ERR_BAD_REQUEST,
                        e
                      )
                    )
                  : c.send(r || null);
              });
            },
        };
        B.forEach(ge, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", { value: t });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", { value: t });
          }
        });
        function be(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new de(null, e);
        }
        function we(e) {
          return (
            be(e),
            (e.headers = ue.from(e.headers)),
            (e.data = le.call(e, e.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(e.method) &&
              e.headers.setContentType("application/x-www-form-urlencoded", !1),
            ((e) => {
              e = B.isArray(e) ? e : [e];
              const { length: t } = e;
              let n, r;
              for (
                let o = 0;
                o < t &&
                ((n = e[o]), !(r = B.isString(n) ? ge[n.toLowerCase()] : n));
                o++
              );
              if (!r) {
                if (!1 === r)
                  throw new D(
                    `Adapter ${n} is not supported by the environment`,
                    "ERR_NOT_SUPPORT"
                  );
                throw new Error(
                  B.hasOwnProp(ge, n)
                    ? `Adapter '${n}' is not available in the build`
                    : `Unknown adapter '${n}'`
                );
              }
              if (!B.isFunction(r))
                throw new TypeError("adapter is not a function");
              return r;
            })(e.adapter || ne.adapter)(e).then(
              function (t) {
                return (
                  be(e),
                  (t.data = le.call(e, e.transformResponse, t)),
                  (t.headers = ue.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  fe(t) ||
                    (be(e),
                    t &&
                      t.response &&
                      ((t.response.data = le.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = ue.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
          );
        }
        const Ee = (e) => (e instanceof ue ? e.toJSON() : e);
        function Oe(e, t) {
          t = t || {};
          const n = {};
          function r(e, t, n) {
            return B.isPlainObject(e) && B.isPlainObject(t)
              ? B.merge.call({ caseless: n }, e, t)
              : B.isPlainObject(t)
              ? B.merge({}, t)
              : B.isArray(t)
              ? t.slice()
              : t;
          }
          function o(e, t, n) {
            return B.isUndefined(t)
              ? B.isUndefined(e)
                ? void 0
                : r(void 0, e, n)
              : r(e, t, n);
          }
          function i(e, t) {
            if (!B.isUndefined(t)) return r(void 0, t);
          }
          function s(e, t) {
            return B.isUndefined(t)
              ? B.isUndefined(e)
                ? void 0
                : r(void 0, e)
              : r(void 0, t);
          }
          function a(n, o, i) {
            return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0;
          }
          const c = {
            url: i,
            method: i,
            data: i,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: a,
            headers: (e, t) => o(Ee(e), Ee(t), !0),
          };
          return (
            B.forEach(Object.keys(e).concat(Object.keys(t)), function (r) {
              const i = c[r] || o,
                s = i(e[r], t[r], r);
              (B.isUndefined(s) && i !== a) || (n[r] = s);
            }),
            n
          );
        }
        const ve = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          (e, t) => {
            ve[e] = function (n) {
              return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        const Se = {};
        ve.transitional = function (e, t, n) {
          function r(e, t) {
            return (
              "[Axios v1.3.4] Transitional option '" +
              e +
              "'" +
              t +
              (n ? ". " + n : "")
            );
          }
          return (n, o, i) => {
            if (!1 === e)
              throw new D(
                r(o, " has been removed" + (t ? " in " + t : "")),
                D.ERR_DEPRECATED
              );
            return (
              t &&
                !Se[o] &&
                ((Se[o] = !0),
                console.warn(
                  r(
                    o,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(n, o, i)
            );
          };
        };
        var Re = {
          assertOptions: function (e, t, n) {
            if ("object" != typeof e)
              throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let o = r.length;
            for (; o-- > 0; ) {
              const i = r[o],
                s = t[i];
              if (s) {
                const t = e[i],
                  n = void 0 === t || s(t, i, e);
                if (!0 !== n)
                  throw new D(
                    "option " + i + " must be " + n,
                    D.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new D("Unknown option " + i, D.ERR_BAD_OPTION);
            }
          },
          validators: ve,
        };
        const Ae = Re.validators;
        class Te {
          constructor(e) {
            (this.defaults = e),
              (this.interceptors = { request: new Z(), response: new Z() });
          }
          request(e, t) {
            "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
              (t = Oe(this.defaults, t));
            const { transitional: n, paramsSerializer: r, headers: o } = t;
            let i;
            void 0 !== n &&
              Re.assertOptions(
                n,
                {
                  silentJSONParsing: Ae.transitional(Ae.boolean),
                  forcedJSONParsing: Ae.transitional(Ae.boolean),
                  clarifyTimeoutError: Ae.transitional(Ae.boolean),
                },
                !1
              ),
              void 0 !== r &&
                Re.assertOptions(
                  r,
                  { encode: Ae.function, serialize: Ae.function },
                  !0
                ),
              (t.method = (
                t.method ||
                this.defaults.method ||
                "get"
              ).toLowerCase()),
              (i = o && B.merge(o.common, o[t.method])),
              i &&
                B.forEach(
                  ["delete", "get", "head", "post", "put", "patch", "common"],
                  (e) => {
                    delete o[e];
                  }
                ),
              (t.headers = ue.concat(i, o));
            const s = [];
            let a = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                ((a = a && e.synchronous), s.unshift(e.fulfilled, e.rejected));
            });
            const c = [];
            let u;
            this.interceptors.response.forEach(function (e) {
              c.push(e.fulfilled, e.rejected);
            });
            let l,
              f = 0;
            if (!a) {
              const e = [we.bind(this), void 0];
              for (
                e.unshift.apply(e, s),
                  e.push.apply(e, c),
                  l = e.length,
                  u = Promise.resolve(t);
                f < l;

              )
                u = u.then(e[f++], e[f++]);
              return u;
            }
            l = s.length;
            let d = t;
            for (f = 0; f < l; ) {
              const e = s[f++],
                t = s[f++];
              try {
                d = e(d);
              } catch (e) {
                t.call(this, e);
                break;
              }
            }
            try {
              u = we.call(this, d);
            } catch (e) {
              return Promise.reject(e);
            }
            for (f = 0, l = c.length; f < l; ) u = u.then(c[f++], c[f++]);
            return u;
          }
          getUri(e) {
            return $(
              he((e = Oe(this.defaults, e)).baseURL, e.url),
              e.params,
              e.paramsSerializer
            );
          }
        }
        B.forEach(["delete", "get", "head", "options"], function (e) {
          Te.prototype[e] = function (t, n) {
            return this.request(
              Oe(n || {}, { method: e, url: t, data: (n || {}).data })
            );
          };
        }),
          B.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (n, r, o) {
                return this.request(
                  Oe(o || {}, {
                    method: e,
                    headers: t ? { "Content-Type": "multipart/form-data" } : {},
                    url: n,
                    data: r,
                  })
                );
              };
            }
            (Te.prototype[e] = t()), (Te.prototype[e + "Form"] = t(!0));
          });
        var xe = Te;
        class je {
          constructor(e) {
            if ("function" != typeof e)
              throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise(function (e) {
              t = e;
            });
            const n = this;
            this.promise.then((e) => {
              if (!n._listeners) return;
              let t = n._listeners.length;
              for (; t-- > 0; ) n._listeners[t](e);
              n._listeners = null;
            }),
              (this.promise.then = (e) => {
                let t;
                const r = new Promise((e) => {
                  n.subscribe(e), (t = e);
                }).then(e);
                return (
                  (r.cancel = function () {
                    n.unsubscribe(t);
                  }),
                  r
                );
              }),
              e(function (e, r, o) {
                n.reason || ((n.reason = new de(e, r, o)), t(n.reason));
              });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }
          unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
          static source() {
            let e;
            return {
              token: new je(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }
        }
        var Ne = je;
        const Ce = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
        };
        Object.entries(Ce).forEach(([e, t]) => {
          Ce[t] = e;
        });
        var Pe = Ce;
        const Le = (function e(t) {
          const n = new xe(t),
            o = r(xe.prototype.request, n);
          return (
            B.extend(o, xe.prototype, n, { allOwnKeys: !0 }),
            B.extend(o, n, null, { allOwnKeys: !0 }),
            (o.create = function (n) {
              return e(Oe(t, n));
            }),
            o
          );
        })(ne);
        (Le.Axios = xe),
          (Le.CanceledError = de),
          (Le.CancelToken = Ne),
          (Le.isCancel = fe),
          (Le.VERSION = "1.3.4"),
          (Le.toFormData = J),
          (Le.AxiosError = D),
          (Le.Cancel = Le.CanceledError),
          (Le.all = function (e) {
            return Promise.all(e);
          }),
          (Le.spread = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          }),
          (Le.isAxiosError = function (e) {
            return B.isObject(e) && !0 === e.isAxiosError;
          }),
          (Le.mergeConfig = Oe),
          (Le.AxiosHeaders = ue),
          (Le.formToJSON = (e) => Y(B.isHTMLForm(e) ? new FormData(e) : e)),
          (Le.HttpStatusCode = Pe),
          (Le.default = Le),
          (e.exports = Le);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        i = n(569),
        s = n.n(i),
        a = n(565),
        c = n.n(a),
        u = n(216),
        l = n.n(u),
        f = n(589),
        d = n.n(f),
        p = n(99),
        h = {};
      (h.styleTagTransform = d()),
        (h.setAttributes = c()),
        (h.insert = s().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        t()(p.Z, h),
        p.Z && p.Z.locals && p.Z.locals;
      const m = n(218);
      document.addEventListener("DOMContentLoaded", function () {
        const e = document.querySelector(".button-component button"),
          t = document.querySelector("#root");
        null !== e &&
          e.addEventListener("click", async function () {
            const e = await m.get("https://jsonplaceholder.typicode.com/users"),
              n = e.data[0];
            console.log({ users: e, user: n }),
              (function (e) {
                const n = document.createElement("h1");
                n.classList.add("title-component"),
                  (n.innerHTML = `<h1>${JSON.stringify(e)}</h1>`),
                  t.prepend(n);
              })(n);
          });
      });
    })();
})();
