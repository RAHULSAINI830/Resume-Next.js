(exports.id = 871),
  (exports.ids = [871]),
  (exports.modules = {
    282: (e, t, o) => {
      'use strict';
      function r(e) {
        var t,
          o,
          n = '';
        if ('string' == typeof e || 'number' == typeof e) n += e;
        else if ('object' == typeof e) {
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (o = r(e[t])) && (n && (n += ' '), (n += o));
          else for (t in e) e[t] && (n && (n += ' '), (n += t));
        }
        return n;
      }
      function clsx() {
        for (var e, t, o = 0, n = ''; o < arguments.length; )
          (e = arguments[o++]) && (t = r(e)) && (n && (n += ' '), (n += t));
        return n;
      }
      o.d(t, { j: () => cva });
      let falsyToString = (e) =>
          'boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e,
        n = clsx,
        cva = (e, t) => (o) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return n(
              e,
              null == o ? void 0 : o.class,
              null == o ? void 0 : o.className,
            );
          let { variants: a, defaultVariants: s } = t,
            l = Object.keys(a).map((e) => {
              let t = null == o ? void 0 : o[e],
                n = null == s ? void 0 : s[e];
              if (null === t) return null;
              let i = falsyToString(t) || falsyToString(n);
              return a[e][i];
            }),
            u =
              o &&
              Object.entries(o).reduce((e, t) => {
                let [o, n] = t;
                return void 0 === n || (e[o] = n), e;
              }, {}),
            c =
              null == t
                ? void 0
                : null === (i = t.compoundVariants) || void 0 === i
                  ? void 0
                  : i.reduce((e, t) => {
                      let { class: o, className: n, ...i } = t;
                      return Object.entries(i).every((e) => {
                        let [t, o] = e;
                        return Array.isArray(o)
                          ? o.includes({ ...s, ...u }[t])
                          : { ...s, ...u }[t] === o;
                      })
                        ? [...e, o, n]
                        : e;
                    }, []);
          return n(
            e,
            l,
            c,
            null == o ? void 0 : o.class,
            null == o ? void 0 : o.className,
          );
        };
    },
    5183: (e, t, o) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'bailoutToClientRendering', {
          enumerable: !0,
          get: function () {
            return bailoutToClientRendering;
          },
        });
      let n = o(1334),
        i = o(5869);
      function bailoutToClientRendering() {
        let e = i.staticGenerationAsyncStorage.getStore();
        return (
          (null != e && !!e.forceStatic) ||
          ((null == e ? void 0 : e.isStaticGeneration) &&
            (0, n.throwWithNoSSR)(),
          !1)
        );
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2918: (e, t, o) => {
      'use strict';
      function clientHookInServerComponentError(e) {}
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'clientHookInServerComponentError', {
          enumerable: !0,
          get: function () {
            return clientHookInServerComponentError;
          },
        }),
        o(7841),
        o(3542),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3859: (e, t, o) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var o in t)
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return ReadonlyURLSearchParams;
          },
          useSearchParams: function () {
            return useSearchParams;
          },
          usePathname: function () {
            return usePathname;
          },
          ServerInsertedHTMLContext: function () {
            return u.ServerInsertedHTMLContext;
          },
          useServerInsertedHTML: function () {
            return u.useServerInsertedHTML;
          },
          useRouter: function () {
            return useRouter;
          },
          useParams: function () {
            return useParams;
          },
          useSelectedLayoutSegments: function () {
            return useSelectedLayoutSegments;
          },
          useSelectedLayoutSegment: function () {
            return useSelectedLayoutSegment;
          },
          redirect: function () {
            return c.redirect;
          },
          permanentRedirect: function () {
            return c.permanentRedirect;
          },
          RedirectType: function () {
            return c.RedirectType;
          },
          notFound: function () {
            return d.notFound;
          },
        });
      let n = o(3542),
        i = o(5781),
        a = o(8170),
        s = o(2918),
        l = o(8204),
        u = o(1626),
        c = o(8461),
        d = o(7082),
        b = Symbol('internal for urlsearchparams readonly');
      function readonlyURLSearchParamsError() {
        return Error('ReadonlyURLSearchParams cannot be modified');
      }
      let ReadonlyURLSearchParams = class ReadonlyURLSearchParams {
        [Symbol.iterator]() {
          return this[b][Symbol.iterator]();
        }
        append() {
          throw readonlyURLSearchParamsError();
        }
        delete() {
          throw readonlyURLSearchParamsError();
        }
        set() {
          throw readonlyURLSearchParamsError();
        }
        sort() {
          throw readonlyURLSearchParamsError();
        }
        constructor(e) {
          (this[b] = e),
            (this.entries = e.entries.bind(e)),
            (this.forEach = e.forEach.bind(e)),
            (this.get = e.get.bind(e)),
            (this.getAll = e.getAll.bind(e)),
            (this.has = e.has.bind(e)),
            (this.keys = e.keys.bind(e)),
            (this.values = e.values.bind(e)),
            (this.toString = e.toString.bind(e)),
            (this.size = e.size);
        }
      };
      function useSearchParams() {
        (0, s.clientHookInServerComponentError)('useSearchParams');
        let e = (0, n.useContext)(a.SearchParamsContext),
          t = (0, n.useMemo)(
            () => (e ? new ReadonlyURLSearchParams(e) : null),
            [e],
          );
        {
          let { bailoutToClientRendering: e } = o(5183);
          e();
        }
        return t;
      }
      function usePathname() {
        return (
          (0, s.clientHookInServerComponentError)('usePathname'),
          (0, n.useContext)(a.PathnameContext)
        );
      }
      function useRouter() {
        (0, s.clientHookInServerComponentError)('useRouter');
        let e = (0, n.useContext)(i.AppRouterContext);
        if (null === e)
          throw Error('invariant expected app router to be mounted');
        return e;
      }
      function getSelectedParams(e, t) {
        void 0 === t && (t = {});
        let o = e[1];
        for (let e of Object.values(o)) {
          let o = e[0],
            n = Array.isArray(o),
            i = n ? o[1] : o;
          if (!i || i.startsWith('__PAGE__')) continue;
          let a = n && ('c' === o[2] || 'oc' === o[2]);
          a ? (t[o[0]] = o[1].split('/')) : n && (t[o[0]] = o[1]),
            (t = getSelectedParams(e, t));
        }
        return t;
      }
      function useParams() {
        (0, s.clientHookInServerComponentError)('useParams');
        let e = (0, n.useContext)(i.GlobalLayoutRouterContext),
          t = (0, n.useContext)(a.PathParamsContext);
        return (0, n.useMemo)(
          () => ((null == e ? void 0 : e.tree) ? getSelectedParams(e.tree) : t),
          [null == e ? void 0 : e.tree, t],
        );
      }
      function getSelectedLayoutSegmentPath(e, t, o, n) {
        let i;
        if ((void 0 === o && (o = !0), void 0 === n && (n = []), o))
          i = e[1][t];
        else {
          var a;
          let t = e[1];
          i = null != (a = t.children) ? a : Object.values(t)[0];
        }
        if (!i) return n;
        let s = i[0],
          u = (0, l.getSegmentValue)(s);
        return !u || u.startsWith('__PAGE__')
          ? n
          : (n.push(u), getSelectedLayoutSegmentPath(i, t, !1, n));
      }
      function useSelectedLayoutSegments(e) {
        void 0 === e && (e = 'children'),
          (0, s.clientHookInServerComponentError)('useSelectedLayoutSegments');
        let { tree: t } = (0, n.useContext)(i.LayoutRouterContext);
        return getSelectedLayoutSegmentPath(t, e);
      }
      function useSelectedLayoutSegment(e) {
        void 0 === e && (e = 'children'),
          (0, s.clientHookInServerComponentError)('useSelectedLayoutSegment');
        let t = useSelectedLayoutSegments(e);
        return 0 === t.length ? null : t[0];
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7082: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var o in t)
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
        })(t, {
          notFound: function () {
            return notFound;
          },
          isNotFoundError: function () {
            return isNotFoundError;
          },
        });
      let o = 'NEXT_NOT_FOUND';
      function notFound() {
        let e = Error(o);
        throw ((e.digest = o), e);
      }
      function isNotFoundError(e) {
        return (null == e ? void 0 : e.digest) === o;
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8461: (e, t, o) => {
      'use strict';
      var n;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var o in t)
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
        })(t, {
          RedirectType: function () {
            return n;
          },
          getRedirectError: function () {
            return getRedirectError;
          },
          redirect: function () {
            return redirect;
          },
          permanentRedirect: function () {
            return permanentRedirect;
          },
          isRedirectError: function () {
            return isRedirectError;
          },
          getURLFromRedirectError: function () {
            return getURLFromRedirectError;
          },
          getRedirectTypeFromError: function () {
            return getRedirectTypeFromError;
          },
        });
      let i = o(4580),
        a = 'NEXT_REDIRECT';
      function getRedirectError(e, t, o) {
        void 0 === o && (o = !1);
        let n = Error(a);
        n.digest = a + ';' + t + ';' + e + ';' + o;
        let s = i.requestAsyncStorage.getStore();
        return s && (n.mutableCookies = s.mutableCookies), n;
      }
      function redirect(e, t) {
        throw (void 0 === t && (t = 'replace'), getRedirectError(e, t, !1));
      }
      function permanentRedirect(e, t) {
        throw (void 0 === t && (t = 'replace'), getRedirectError(e, t, !0));
      }
      function isRedirectError(e) {
        if ('string' != typeof (null == e ? void 0 : e.digest)) return !1;
        let [t, o, n, i] = e.digest.split(';', 4);
        return (
          t === a &&
          ('replace' === o || 'push' === o) &&
          'string' == typeof n &&
          ('true' === i || 'false' === i)
        );
      }
      function getURLFromRedirectError(e) {
        return isRedirectError(e) ? e.digest.split(';', 3)[2] : null;
      }
      function getRedirectTypeFromError(e) {
        if (!isRedirectError(e)) throw Error('Not a redirect error');
        return e.digest.split(';', 2)[1];
      }
      (function (e) {
        (e.push = 'push'), (e.replace = 'replace');
      })(n || (n = {})),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8204: (e, t) => {
      'use strict';
      function getSegmentValue(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getSegmentValue', {
          enumerable: !0,
          get: function () {
            return getSegmentValue;
          },
        }),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5781: (e, t, o) => {
      'use strict';
      e.exports = o(7096).vendored.contexts.AppRouterContext;
    },
    8170: (e, t, o) => {
      'use strict';
      e.exports = o(7096).vendored.contexts.HooksClientContext;
    },
    1626: (e, t, o) => {
      'use strict';
      e.exports = o(7096).vendored.contexts.ServerInsertedHtml;
    },
    1334: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var o in t)
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
        })(t, {
          NEXT_DYNAMIC_NO_SSR_CODE: function () {
            return o;
          },
          throwWithNoSSR: function () {
            return throwWithNoSSR;
          },
        });
      let o = 'NEXT_DYNAMIC_NO_SSR_CODE';
      function throwWithNoSSR() {
        let e = Error(o);
        throw ((e.digest = o), e);
      }
    },
    1412: (e, t, o) => {
      'use strict';
      e.exports = o(3859);
    },
    784: (e, t, o) => {
      'use strict';
      e.exports = o(316).vendored['react-ssr'].ReactJsxRuntime;
    },
    1440: (e, t, o) => {
      e.exports = o(614);
    },
    8628: (e, t, o) => {
      'use strict';
      function createClassUtils(e) {
        let t = createClassMap(e),
          { conflictingClassGroups: o, conflictingClassGroupModifiers: n } = e;
        return {
          getClassGroupId: function (e) {
            let o = e.split('-');
            return (
              '' === o[0] && 1 !== o.length && o.shift(),
              getGroupRecursive(o, t) || getGroupIdForArbitraryProperty(e)
            );
          },
          getConflictingClassGroupIds: function (e, t) {
            let i = o[e] || [];
            return t && n[e] ? [...i, ...n[e]] : i;
          },
        };
      }
      function getGroupRecursive(e, t) {
        if (0 === e.length) return t.classGroupId;
        let o = e[0],
          n = t.nextPart.get(o),
          i = n ? getGroupRecursive(e.slice(1), n) : void 0;
        if (i) return i;
        if (0 === t.validators.length) return;
        let a = e.join('-');
        return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
      }
      o.d(t, { m6: () => m });
      let n = /^\[(.+)\]$/;
      function getGroupIdForArbitraryProperty(e) {
        if (n.test(e)) {
          let t = n.exec(e)[1],
            o = t?.substring(0, t.indexOf(':'));
          if (o) return 'arbitrary..' + o;
        }
      }
      function createClassMap(e) {
        let { theme: t, prefix: o } = e,
          n = { nextPart: new Map(), validators: [] },
          i = getPrefixedClassGroupEntries(Object.entries(e.classGroups), o);
        return (
          i.forEach(([e, o]) => {
            processClassesRecursively(o, n, e, t);
          }),
          n
        );
      }
      function processClassesRecursively(e, t, o, n) {
        e.forEach((e) => {
          if ('string' == typeof e) {
            let n = '' === e ? t : getPart(t, e);
            n.classGroupId = o;
            return;
          }
          if ('function' == typeof e) {
            if (isThemeGetter(e)) {
              processClassesRecursively(e(n), t, o, n);
              return;
            }
            t.validators.push({ validator: e, classGroupId: o });
            return;
          }
          Object.entries(e).forEach(([e, i]) => {
            processClassesRecursively(i, getPart(t, e), o, n);
          });
        });
      }
      function getPart(e, t) {
        let o = e;
        return (
          t.split('-').forEach((e) => {
            o.nextPart.has(e) ||
              o.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (o = o.nextPart.get(e));
          }),
          o
        );
      }
      function isThemeGetter(e) {
        return e.isThemeGetter;
      }
      function getPrefixedClassGroupEntries(e, t) {
        return t
          ? e.map(([e, o]) => {
              let n = o.map((e) =>
                'string' == typeof e
                  ? t + e
                  : 'object' == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, o]) => [t + e, o]),
                      )
                    : e,
              );
              return [e, n];
            })
          : e;
      }
      function createLruCache(e) {
        if (e < 1) return { get: () => void 0, set: () => {} };
        let t = 0,
          o = new Map(),
          n = new Map();
        function update(i, a) {
          o.set(i, a), ++t > e && ((t = 0), (n = o), (o = new Map()));
        }
        return {
          get(e) {
            let t = o.get(e);
            return void 0 !== t
              ? t
              : void 0 !== (t = n.get(e))
                ? (update(e, t), t)
                : void 0;
          },
          set(e, t) {
            o.has(e) ? o.set(e, t) : update(e, t);
          },
        };
      }
      function createSplitModifiers(e) {
        let t = e.separator,
          o = 1 === t.length,
          n = t[0],
          i = t.length;
        return function (e) {
          let a;
          let s = [],
            l = 0,
            u = 0;
          for (let c = 0; c < e.length; c++) {
            let d = e[c];
            if (0 === l) {
              if (d === n && (o || e.slice(c, c + i) === t)) {
                s.push(e.slice(u, c)), (u = c + i);
                continue;
              }
              if ('/' === d) {
                a = c;
                continue;
              }
            }
            '[' === d ? l++ : ']' === d && l--;
          }
          let c = 0 === s.length ? e : e.substring(u),
            d = c.startsWith('!'),
            b = d ? c.substring(1) : c,
            p = a && a > u ? a - u : void 0;
          return {
            modifiers: s,
            hasImportantModifier: d,
            baseClassName: b,
            maybePostfixModifierPosition: p,
          };
        };
      }
      function sortModifiers(e) {
        if (e.length <= 1) return e;
        let t = [],
          o = [];
        return (
          e.forEach((e) => {
            let n = '[' === e[0];
            n ? (t.push(...o.sort(), e), (o = [])) : o.push(e);
          }),
          t.push(...o.sort()),
          t
        );
      }
      function createConfigUtils(e) {
        return {
          cache: createLruCache(e.cacheSize),
          splitModifiers: createSplitModifiers(e),
          ...createClassUtils(e),
        };
      }
      let i = /\s+/;
      function mergeClassList(e, t) {
        let {
            splitModifiers: o,
            getClassGroupId: n,
            getConflictingClassGroupIds: a,
          } = t,
          s = new Set();
        return e
          .trim()
          .split(i)
          .map((e) => {
            let {
                modifiers: t,
                hasImportantModifier: i,
                baseClassName: a,
                maybePostfixModifierPosition: s,
              } = o(e),
              l = n(s ? a.substring(0, s) : a),
              u = !!s;
            if (!l) {
              if (!s || !(l = n(a)))
                return { isTailwindClass: !1, originalClassName: e };
              u = !1;
            }
            let c = sortModifiers(t).join(':');
            return {
              isTailwindClass: !0,
              modifierId: i ? c + '!' : c,
              classGroupId: l,
              originalClassName: e,
              hasPostfixModifier: u,
            };
          })
          .reverse()
          .filter((e) => {
            if (!e.isTailwindClass) return !0;
            let { modifierId: t, classGroupId: o, hasPostfixModifier: n } = e,
              i = t + o;
            return (
              !s.has(i) && (s.add(i), a(o, n).forEach((e) => s.add(t + e)), !0)
            );
          })
          .reverse()
          .map((e) => e.originalClassName)
          .join(' ');
      }
      function twJoin() {
        let e,
          t,
          o = 0,
          n = '';
        for (; o < arguments.length; )
          (e = arguments[o++]) &&
            (t = toValue(e)) &&
            (n && (n += ' '), (n += t));
        return n;
      }
      function toValue(e) {
        let t;
        if ('string' == typeof e) return e;
        let o = '';
        for (let n = 0; n < e.length; n++)
          e[n] && (t = toValue(e[n])) && (o && (o += ' '), (o += t));
        return o;
      }
      function createTailwindMerge(e, ...t) {
        let o, n, i;
        let a = initTailwindMerge;
        function initTailwindMerge(s) {
          let l = t.reduce((e, t) => t(e), e());
          return (
            (n = (o = createConfigUtils(l)).cache.get),
            (i = o.cache.set),
            (a = tailwindMerge),
            tailwindMerge(s)
          );
        }
        function tailwindMerge(e) {
          let t = n(e);
          if (t) return t;
          let a = mergeClassList(e, o);
          return i(e, a), a;
        }
        return function () {
          return a(twJoin.apply(null, arguments));
        };
      }
      function fromTheme(e) {
        let themeGetter = (t) => t[e] || [];
        return (themeGetter.isThemeGetter = !0), themeGetter;
      }
      let a = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        s = /^\d+\/\d+$/,
        l = new Set(['px', 'full', 'screen']),
        u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        c =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        d = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        b = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        p =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function isLength(e) {
        return isNumber(e) || l.has(e) || s.test(e);
      }
      function isArbitraryLength(e) {
        return getIsArbitraryValue(e, 'length', isLengthOnly);
      }
      function isNumber(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function isArbitraryNumber(e) {
        return getIsArbitraryValue(e, 'number', isNumber);
      }
      function isInteger(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function isPercent(e) {
        return e.endsWith('%') && isNumber(e.slice(0, -1));
      }
      function isArbitraryValue(e) {
        return a.test(e);
      }
      function isTshirtSize(e) {
        return u.test(e);
      }
      let g = new Set(['length', 'size', 'percentage']);
      function isArbitrarySize(e) {
        return getIsArbitraryValue(e, g, isNever);
      }
      function isArbitraryPosition(e) {
        return getIsArbitraryValue(e, 'position', isNever);
      }
      let f = new Set(['image', 'url']);
      function isArbitraryImage(e) {
        return getIsArbitraryValue(e, f, isImage);
      }
      function isArbitraryShadow(e) {
        return getIsArbitraryValue(e, '', isShadow);
      }
      function isAny() {
        return !0;
      }
      function getIsArbitraryValue(e, t, o) {
        let n = a.exec(e);
        return (
          !!n &&
          (n[1] ? ('string' == typeof t ? n[1] === t : t.has(n[1])) : o(n[2]))
        );
      }
      function isLengthOnly(e) {
        return c.test(e) && !d.test(e);
      }
      function isNever() {
        return !1;
      }
      function isShadow(e) {
        return b.test(e);
      }
      function isImage(e) {
        return p.test(e);
      }
      function getDefaultConfig() {
        let e = fromTheme('colors'),
          t = fromTheme('spacing'),
          o = fromTheme('blur'),
          n = fromTheme('brightness'),
          i = fromTheme('borderColor'),
          a = fromTheme('borderRadius'),
          s = fromTheme('borderSpacing'),
          l = fromTheme('borderWidth'),
          u = fromTheme('contrast'),
          c = fromTheme('grayscale'),
          d = fromTheme('hueRotate'),
          b = fromTheme('invert'),
          p = fromTheme('gap'),
          g = fromTheme('gradientColorStops'),
          f = fromTheme('gradientColorStopPositions'),
          m = fromTheme('inset'),
          y = fromTheme('margin'),
          h = fromTheme('opacity'),
          v = fromTheme('padding'),
          x = fromTheme('saturate'),
          A = fromTheme('scale'),
          w = fromTheme('sepia'),
          S = fromTheme('skew'),
          P = fromTheme('space'),
          R = fromTheme('translate'),
          getOverscroll = () => ['auto', 'contain', 'none'],
          getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
          getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, t],
          getSpacingWithArbitrary = () => [isArbitraryValue, t],
          getLengthWithEmptyAndArbitrary = () => [
            '',
            isLength,
            isArbitraryLength,
          ],
          getNumberWithAutoAndArbitrary = () => [
            'auto',
            isNumber,
            isArbitraryValue,
          ],
          getPositions = () => [
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top',
          ],
          getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
          getBlendModes = () => [
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity',
            'plus-lighter',
          ],
          getAlign = () => [
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch',
          ],
          getZeroAndEmpty = () => ['', '0', isArbitraryValue],
          getBreaks = () => [
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column',
          ],
          getNumber = () => [isNumber, isArbitraryNumber],
          getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
        return {
          cacheSize: 500,
          separator: ':',
          theme: {
            colors: [isAny],
            spacing: [isLength, isArbitraryLength],
            blur: ['none', '', isTshirtSize, isArbitraryValue],
            brightness: getNumber(),
            borderColor: [e],
            borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumber(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [e],
            gradientColorStopPositions: [isPercent, isArbitraryLength],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumber(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumber(),
            scale: getNumber(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary(),
          },
          classGroups: {
            aspect: [{ aspect: ['auto', 'square', 'video', isArbitraryValue] }],
            container: ['container'],
            columns: [{ columns: [isTshirtSize] }],
            'break-after': [{ 'break-after': getBreaks() }],
            'break-before': [{ 'break-before': getBreaks() }],
            'break-inside': [
              {
                'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
              },
            ],
            'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
            box: [{ box: ['border', 'content'] }],
            display: [
              'block',
              'inline-block',
              'inline',
              'flex',
              'inline-flex',
              'table',
              'inline-table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row-group',
              'table-row',
              'flow-root',
              'grid',
              'inline-grid',
              'contents',
              'list-item',
              'hidden',
            ],
            float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
            clear: [
              { clear: ['left', 'right', 'both', 'none', 'start', 'end'] },
            ],
            isolation: ['isolate', 'isolation-auto'],
            'object-fit': [
              { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
            ],
            'object-position': [
              { object: [...getPositions(), isArbitraryValue] },
            ],
            overflow: [{ overflow: getOverflow() }],
            'overflow-x': [{ 'overflow-x': getOverflow() }],
            'overflow-y': [{ 'overflow-y': getOverflow() }],
            overscroll: [{ overscroll: getOverscroll() }],
            'overscroll-x': [{ 'overscroll-x': getOverscroll() }],
            'overscroll-y': [{ 'overscroll-y': getOverscroll() }],
            position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
            inset: [{ inset: [m] }],
            'inset-x': [{ 'inset-x': [m] }],
            'inset-y': [{ 'inset-y': [m] }],
            start: [{ start: [m] }],
            end: [{ end: [m] }],
            top: [{ top: [m] }],
            right: [{ right: [m] }],
            bottom: [{ bottom: [m] }],
            left: [{ left: [m] }],
            visibility: ['visible', 'invisible', 'collapse'],
            z: [{ z: ['auto', isInteger, isArbitraryValue] }],
            basis: [{ basis: getSpacingWithAutoAndArbitrary() }],
            'flex-direction': [
              { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
            ],
            'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
            flex: [
              { flex: ['1', 'auto', 'initial', 'none', isArbitraryValue] },
            ],
            grow: [{ grow: getZeroAndEmpty() }],
            shrink: [{ shrink: getZeroAndEmpty() }],
            order: [
              { order: ['first', 'last', 'none', isInteger, isArbitraryValue] },
            ],
            'grid-cols': [{ 'grid-cols': [isAny] }],
            'col-start-end': [
              {
                col: [
                  'auto',
                  { span: ['full', isInteger, isArbitraryValue] },
                  isArbitraryValue,
                ],
              },
            ],
            'col-start': [{ 'col-start': getNumberWithAutoAndArbitrary() }],
            'col-end': [{ 'col-end': getNumberWithAutoAndArbitrary() }],
            'grid-rows': [{ 'grid-rows': [isAny] }],
            'row-start-end': [
              {
                row: [
                  'auto',
                  { span: [isInteger, isArbitraryValue] },
                  isArbitraryValue,
                ],
              },
            ],
            'row-start': [{ 'row-start': getNumberWithAutoAndArbitrary() }],
            'row-end': [{ 'row-end': getNumberWithAutoAndArbitrary() }],
            'grid-flow': [
              {
                'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'],
              },
            ],
            'auto-cols': [
              { 'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue] },
            ],
            'auto-rows': [
              { 'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue] },
            ],
            gap: [{ gap: [p] }],
            'gap-x': [{ 'gap-x': [p] }],
            'gap-y': [{ 'gap-y': [p] }],
            'justify-content': [{ justify: ['normal', ...getAlign()] }],
            'justify-items': [
              { 'justify-items': ['start', 'end', 'center', 'stretch'] },
            ],
            'justify-self': [
              { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            'align-content': [
              { content: ['normal', ...getAlign(), 'baseline'] },
            ],
            'align-items': [
              { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
            ],
            'align-self': [
              {
                self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
              },
            ],
            'place-content': [{ 'place-content': [...getAlign(), 'baseline'] }],
            'place-items': [
              {
                'place-items': [
                  'start',
                  'end',
                  'center',
                  'baseline',
                  'stretch',
                ],
              },
            ],
            'place-self': [
              { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            p: [{ p: [v] }],
            px: [{ px: [v] }],
            py: [{ py: [v] }],
            ps: [{ ps: [v] }],
            pe: [{ pe: [v] }],
            pt: [{ pt: [v] }],
            pr: [{ pr: [v] }],
            pb: [{ pb: [v] }],
            pl: [{ pl: [v] }],
            m: [{ m: [y] }],
            mx: [{ mx: [y] }],
            my: [{ my: [y] }],
            ms: [{ ms: [y] }],
            me: [{ me: [y] }],
            mt: [{ mt: [y] }],
            mr: [{ mr: [y] }],
            mb: [{ mb: [y] }],
            ml: [{ ml: [y] }],
            'space-x': [{ 'space-x': [P] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [P] }],
            'space-y-reverse': ['space-y-reverse'],
            w: [
              {
                w: [
                  'auto',
                  'min',
                  'max',
                  'fit',
                  'svw',
                  'lvw',
                  'dvw',
                  isArbitraryValue,
                  t,
                ],
              },
            ],
            'min-w': [{ 'min-w': [isArbitraryValue, t, 'min', 'max', 'fit'] }],
            'max-w': [
              {
                'max-w': [
                  isArbitraryValue,
                  t,
                  'none',
                  'full',
                  'min',
                  'max',
                  'fit',
                  'prose',
                  { screen: [isTshirtSize] },
                  isTshirtSize,
                ],
              },
            ],
            h: [
              {
                h: [
                  isArbitraryValue,
                  t,
                  'auto',
                  'min',
                  'max',
                  'fit',
                  'svh',
                  'lvh',
                  'dvh',
                ],
              },
            ],
            'min-h': [
              {
                'min-h': [
                  isArbitraryValue,
                  t,
                  'min',
                  'max',
                  'fit',
                  'svh',
                  'lvh',
                  'dvh',
                ],
              },
            ],
            'max-h': [
              {
                'max-h': [
                  isArbitraryValue,
                  t,
                  'min',
                  'max',
                  'fit',
                  'svh',
                  'lvh',
                  'dvh',
                ],
              },
            ],
            size: [
              { size: [isArbitraryValue, t, 'auto', 'min', 'max', 'fit'] },
            ],
            'font-size': [{ text: ['base', isTshirtSize, isArbitraryLength] }],
            'font-smoothing': ['antialiased', 'subpixel-antialiased'],
            'font-style': ['italic', 'not-italic'],
            'font-weight': [
              {
                font: [
                  'thin',
                  'extralight',
                  'light',
                  'normal',
                  'medium',
                  'semibold',
                  'bold',
                  'extrabold',
                  'black',
                  isArbitraryNumber,
                ],
              },
            ],
            'font-family': [{ font: [isAny] }],
            'fvn-normal': ['normal-nums'],
            'fvn-ordinal': ['ordinal'],
            'fvn-slashed-zero': ['slashed-zero'],
            'fvn-figure': ['lining-nums', 'oldstyle-nums'],
            'fvn-spacing': ['proportional-nums', 'tabular-nums'],
            'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
            tracking: [
              {
                tracking: [
                  'tighter',
                  'tight',
                  'normal',
                  'wide',
                  'wider',
                  'widest',
                  isArbitraryValue,
                ],
              },
            ],
            'line-clamp': [
              { 'line-clamp': ['none', isNumber, isArbitraryNumber] },
            ],
            leading: [
              {
                leading: [
                  'none',
                  'tight',
                  'snug',
                  'normal',
                  'relaxed',
                  'loose',
                  isLength,
                  isArbitraryValue,
                ],
              },
            ],
            'list-image': [{ 'list-image': ['none', isArbitraryValue] }],
            'list-style-type': [
              { list: ['none', 'disc', 'decimal', isArbitraryValue] },
            ],
            'list-style-position': [{ list: ['inside', 'outside'] }],
            'placeholder-color': [{ placeholder: [e] }],
            'placeholder-opacity': [{ 'placeholder-opacity': [h] }],
            'text-alignment': [
              { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
            ],
            'text-color': [{ text: [e] }],
            'text-opacity': [{ 'text-opacity': [h] }],
            'text-decoration': [
              'underline',
              'overline',
              'line-through',
              'no-underline',
            ],
            'text-decoration-style': [
              { decoration: [...getLineStyles(), 'wavy'] },
            ],
            'text-decoration-thickness': [
              {
                decoration: ['auto', 'from-font', isLength, isArbitraryLength],
              },
            ],
            'underline-offset': [
              { 'underline-offset': ['auto', isLength, isArbitraryValue] },
            ],
            'text-decoration-color': [{ decoration: [e] }],
            'text-transform': [
              'uppercase',
              'lowercase',
              'capitalize',
              'normal-case',
            ],
            'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
            'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
            indent: [{ indent: getSpacingWithArbitrary() }],
            'vertical-align': [
              {
                align: [
                  'baseline',
                  'top',
                  'middle',
                  'bottom',
                  'text-top',
                  'text-bottom',
                  'sub',
                  'super',
                  isArbitraryValue,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  'normal',
                  'nowrap',
                  'pre',
                  'pre-line',
                  'pre-wrap',
                  'break-spaces',
                ],
              },
            ],
            break: [{ break: ['normal', 'words', 'all', 'keep'] }],
            hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
            content: [{ content: ['none', isArbitraryValue] }],
            'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
            'bg-clip': [
              { 'bg-clip': ['border', 'padding', 'content', 'text'] },
            ],
            'bg-opacity': [{ 'bg-opacity': [h] }],
            'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
            'bg-position': [{ bg: [...getPositions(), isArbitraryPosition] }],
            'bg-repeat': [
              {
                bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }],
              },
            ],
            'bg-size': [{ bg: ['auto', 'cover', 'contain', isArbitrarySize] }],
            'bg-image': [
              {
                bg: [
                  'none',
                  {
                    'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'],
                  },
                  isArbitraryImage,
                ],
              },
            ],
            'bg-color': [{ bg: [e] }],
            'gradient-from-pos': [{ from: [f] }],
            'gradient-via-pos': [{ via: [f] }],
            'gradient-to-pos': [{ to: [f] }],
            'gradient-from': [{ from: [g] }],
            'gradient-via': [{ via: [g] }],
            'gradient-to': [{ to: [g] }],
            rounded: [{ rounded: [a] }],
            'rounded-s': [{ 'rounded-s': [a] }],
            'rounded-e': [{ 'rounded-e': [a] }],
            'rounded-t': [{ 'rounded-t': [a] }],
            'rounded-r': [{ 'rounded-r': [a] }],
            'rounded-b': [{ 'rounded-b': [a] }],
            'rounded-l': [{ 'rounded-l': [a] }],
            'rounded-ss': [{ 'rounded-ss': [a] }],
            'rounded-se': [{ 'rounded-se': [a] }],
            'rounded-ee': [{ 'rounded-ee': [a] }],
            'rounded-es': [{ 'rounded-es': [a] }],
            'rounded-tl': [{ 'rounded-tl': [a] }],
            'rounded-tr': [{ 'rounded-tr': [a] }],
            'rounded-br': [{ 'rounded-br': [a] }],
            'rounded-bl': [{ 'rounded-bl': [a] }],
            'border-w': [{ border: [l] }],
            'border-w-x': [{ 'border-x': [l] }],
            'border-w-y': [{ 'border-y': [l] }],
            'border-w-s': [{ 'border-s': [l] }],
            'border-w-e': [{ 'border-e': [l] }],
            'border-w-t': [{ 'border-t': [l] }],
            'border-w-r': [{ 'border-r': [l] }],
            'border-w-b': [{ 'border-b': [l] }],
            'border-w-l': [{ 'border-l': [l] }],
            'border-opacity': [{ 'border-opacity': [h] }],
            'border-style': [{ border: [...getLineStyles(), 'hidden'] }],
            'divide-x': [{ 'divide-x': [l] }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': [l] }],
            'divide-y-reverse': ['divide-y-reverse'],
            'divide-opacity': [{ 'divide-opacity': [h] }],
            'divide-style': [{ divide: getLineStyles() }],
            'border-color': [{ border: [i] }],
            'border-color-x': [{ 'border-x': [i] }],
            'border-color-y': [{ 'border-y': [i] }],
            'border-color-t': [{ 'border-t': [i] }],
            'border-color-r': [{ 'border-r': [i] }],
            'border-color-b': [{ 'border-b': [i] }],
            'border-color-l': [{ 'border-l': [i] }],
            'divide-color': [{ divide: [i] }],
            'outline-style': [{ outline: ['', ...getLineStyles()] }],
            'outline-offset': [
              { 'outline-offset': [isLength, isArbitraryValue] },
            ],
            'outline-w': [{ outline: [isLength, isArbitraryLength] }],
            'outline-color': [{ outline: [e] }],
            'ring-w': [{ ring: getLengthWithEmptyAndArbitrary() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: [e] }],
            'ring-opacity': [{ 'ring-opacity': [h] }],
            'ring-offset-w': [{ 'ring-offset': [isLength, isArbitraryLength] }],
            'ring-offset-color': [{ 'ring-offset': [e] }],
            shadow: [
              {
                shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow],
              },
            ],
            'shadow-color': [{ shadow: [isAny] }],
            opacity: [{ opacity: [h] }],
            'mix-blend': [{ 'mix-blend': getBlendModes() }],
            'bg-blend': [{ 'bg-blend': getBlendModes() }],
            filter: [{ filter: ['', 'none'] }],
            blur: [{ blur: [o] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [u] }],
            'drop-shadow': [
              { 'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue] },
            ],
            grayscale: [{ grayscale: [c] }],
            'hue-rotate': [{ 'hue-rotate': [d] }],
            invert: [{ invert: [b] }],
            saturate: [{ saturate: [x] }],
            sepia: [{ sepia: [w] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [o] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [n] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [u] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [c] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [d] }],
            'backdrop-invert': [{ 'backdrop-invert': [b] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [h] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [x] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [w] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'border-spacing': [{ 'border-spacing': [s] }],
            'border-spacing-x': [{ 'border-spacing-x': [s] }],
            'border-spacing-y': [{ 'border-spacing-y': [s] }],
            'table-layout': [{ table: ['auto', 'fixed'] }],
            caption: [{ caption: ['top', 'bottom'] }],
            transition: [
              {
                transition: [
                  'none',
                  'all',
                  '',
                  'colors',
                  'opacity',
                  'shadow',
                  'transform',
                  isArbitraryValue,
                ],
              },
            ],
            duration: [{ duration: getNumberAndArbitrary() }],
            ease: [
              { ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue] },
            ],
            delay: [{ delay: getNumberAndArbitrary() }],
            animate: [
              {
                animate: [
                  'none',
                  'spin',
                  'ping',
                  'pulse',
                  'bounce',
                  isArbitraryValue,
                ],
              },
            ],
            transform: [{ transform: ['', 'gpu', 'none'] }],
            scale: [{ scale: [A] }],
            'scale-x': [{ 'scale-x': [A] }],
            'scale-y': [{ 'scale-y': [A] }],
            rotate: [{ rotate: [isInteger, isArbitraryValue] }],
            'translate-x': [{ 'translate-x': [R] }],
            'translate-y': [{ 'translate-y': [R] }],
            'skew-x': [{ 'skew-x': [S] }],
            'skew-y': [{ 'skew-y': [S] }],
            'transform-origin': [
              {
                origin: [
                  'center',
                  'top',
                  'top-right',
                  'right',
                  'bottom-right',
                  'bottom',
                  'bottom-left',
                  'left',
                  'top-left',
                  isArbitraryValue,
                ],
              },
            ],
            accent: [{ accent: ['auto', e] }],
            appearance: [{ appearance: ['none', 'auto'] }],
            cursor: [
              {
                cursor: [
                  'auto',
                  'default',
                  'pointer',
                  'wait',
                  'text',
                  'move',
                  'help',
                  'not-allowed',
                  'none',
                  'context-menu',
                  'progress',
                  'cell',
                  'crosshair',
                  'vertical-text',
                  'alias',
                  'copy',
                  'no-drop',
                  'grab',
                  'grabbing',
                  'all-scroll',
                  'col-resize',
                  'row-resize',
                  'n-resize',
                  'e-resize',
                  's-resize',
                  'w-resize',
                  'ne-resize',
                  'nw-resize',
                  'se-resize',
                  'sw-resize',
                  'ew-resize',
                  'ns-resize',
                  'nesw-resize',
                  'nwse-resize',
                  'zoom-in',
                  'zoom-out',
                  isArbitraryValue,
                ],
              },
            ],
            'caret-color': [{ caret: [e] }],
            'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
            resize: [{ resize: ['none', 'y', 'x', ''] }],
            'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
            'scroll-m': [{ 'scroll-m': getSpacingWithArbitrary() }],
            'scroll-mx': [{ 'scroll-mx': getSpacingWithArbitrary() }],
            'scroll-my': [{ 'scroll-my': getSpacingWithArbitrary() }],
            'scroll-ms': [{ 'scroll-ms': getSpacingWithArbitrary() }],
            'scroll-me': [{ 'scroll-me': getSpacingWithArbitrary() }],
            'scroll-mt': [{ 'scroll-mt': getSpacingWithArbitrary() }],
            'scroll-mr': [{ 'scroll-mr': getSpacingWithArbitrary() }],
            'scroll-mb': [{ 'scroll-mb': getSpacingWithArbitrary() }],
            'scroll-ml': [{ 'scroll-ml': getSpacingWithArbitrary() }],
            'scroll-p': [{ 'scroll-p': getSpacingWithArbitrary() }],
            'scroll-px': [{ 'scroll-px': getSpacingWithArbitrary() }],
            'scroll-py': [{ 'scroll-py': getSpacingWithArbitrary() }],
            'scroll-ps': [{ 'scroll-ps': getSpacingWithArbitrary() }],
            'scroll-pe': [{ 'scroll-pe': getSpacingWithArbitrary() }],
            'scroll-pt': [{ 'scroll-pt': getSpacingWithArbitrary() }],
            'scroll-pr': [{ 'scroll-pr': getSpacingWithArbitrary() }],
            'scroll-pb': [{ 'scroll-pb': getSpacingWithArbitrary() }],
            'scroll-pl': [{ 'scroll-pl': getSpacingWithArbitrary() }],
            'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
            'snap-stop': [{ snap: ['normal', 'always'] }],
            'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
            'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
            touch: [{ touch: ['auto', 'none', 'manipulation'] }],
            'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
            'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
            'touch-pz': ['touch-pinch-zoom'],
            select: [{ select: ['none', 'text', 'all', 'auto'] }],
            'will-change': [
              {
                'will-change': [
                  'auto',
                  'scroll',
                  'contents',
                  'transform',
                  isArbitraryValue,
                ],
              },
            ],
            fill: [{ fill: [e, 'none'] }],
            'stroke-w': [
              { stroke: [isLength, isArbitraryLength, isArbitraryNumber] },
            ],
            stroke: [{ stroke: [e, 'none'] }],
            sr: ['sr-only', 'not-sr-only'],
            'forced-color-adjust': [
              { 'forced-color-adjust': ['auto', 'none'] },
            ],
          },
          conflictingClassGroups: {
            overflow: ['overflow-x', 'overflow-y'],
            overscroll: ['overscroll-x', 'overscroll-y'],
            inset: [
              'inset-x',
              'inset-y',
              'start',
              'end',
              'top',
              'right',
              'bottom',
              'left',
            ],
            'inset-x': ['right', 'left'],
            'inset-y': ['top', 'bottom'],
            flex: ['basis', 'grow', 'shrink'],
            gap: ['gap-x', 'gap-y'],
            p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
            px: ['pr', 'pl'],
            py: ['pt', 'pb'],
            m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
            mx: ['mr', 'ml'],
            my: ['mt', 'mb'],
            size: ['w', 'h'],
            'font-size': ['leading'],
            'fvn-normal': [
              'fvn-ordinal',
              'fvn-slashed-zero',
              'fvn-figure',
              'fvn-spacing',
              'fvn-fraction',
            ],
            'fvn-ordinal': ['fvn-normal'],
            'fvn-slashed-zero': ['fvn-normal'],
            'fvn-figure': ['fvn-normal'],
            'fvn-spacing': ['fvn-normal'],
            'fvn-fraction': ['fvn-normal'],
            'line-clamp': ['display', 'overflow'],
            rounded: [
              'rounded-s',
              'rounded-e',
              'rounded-t',
              'rounded-r',
              'rounded-b',
              'rounded-l',
              'rounded-ss',
              'rounded-se',
              'rounded-ee',
              'rounded-es',
              'rounded-tl',
              'rounded-tr',
              'rounded-br',
              'rounded-bl',
            ],
            'rounded-s': ['rounded-ss', 'rounded-es'],
            'rounded-e': ['rounded-se', 'rounded-ee'],
            'rounded-t': ['rounded-tl', 'rounded-tr'],
            'rounded-r': ['rounded-tr', 'rounded-br'],
            'rounded-b': ['rounded-br', 'rounded-bl'],
            'rounded-l': ['rounded-tl', 'rounded-bl'],
            'border-spacing': ['border-spacing-x', 'border-spacing-y'],
            'border-w': [
              'border-w-s',
              'border-w-e',
              'border-w-t',
              'border-w-r',
              'border-w-b',
              'border-w-l',
            ],
            'border-w-x': ['border-w-r', 'border-w-l'],
            'border-w-y': ['border-w-t', 'border-w-b'],
            'border-color': [
              'border-color-t',
              'border-color-r',
              'border-color-b',
              'border-color-l',
            ],
            'border-color-x': ['border-color-r', 'border-color-l'],
            'border-color-y': ['border-color-t', 'border-color-b'],
            'scroll-m': [
              'scroll-mx',
              'scroll-my',
              'scroll-ms',
              'scroll-me',
              'scroll-mt',
              'scroll-mr',
              'scroll-mb',
              'scroll-ml',
            ],
            'scroll-mx': ['scroll-mr', 'scroll-ml'],
            'scroll-my': ['scroll-mt', 'scroll-mb'],
            'scroll-p': [
              'scroll-px',
              'scroll-py',
              'scroll-ps',
              'scroll-pe',
              'scroll-pt',
              'scroll-pr',
              'scroll-pb',
              'scroll-pl',
            ],
            'scroll-px': ['scroll-pr', 'scroll-pl'],
            'scroll-py': ['scroll-pt', 'scroll-pb'],
            touch: ['touch-x', 'touch-y', 'touch-pz'],
            'touch-x': ['touch'],
            'touch-y': ['touch'],
            'touch-pz': ['touch'],
          },
          conflictingClassGroupModifiers: { 'font-size': ['leading'] },
        };
      }
      function overrideProperty(e, t, o) {
        void 0 !== o && (e[t] = o);
      }
      Symbol.toStringTag;
      let m = createTailwindMerge(getDefaultConfig);
    },
  });
