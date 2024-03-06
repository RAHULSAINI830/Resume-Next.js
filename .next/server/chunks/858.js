(exports.id = 858),
  (exports.ids = [858]),
  (exports.modules = {
    8738: (e) => {
      e.exports = {
        style: {
          fontFamily: "'__Albert_Sans_7cad01', '__Albert_Sans_Fallback_7cad01'",
          fontStyle: 'normal',
        },
        className: '__className_7cad01',
        variable: '__variable_7cad01',
      };
    },
    1936: (e) => {
      e.exports = {
        style: {
          fontFamily:
            "'__JetBrains_Mono_2c91d1', '__JetBrains_Mono_Fallback_2c91d1'",
          fontStyle: 'normal',
        },
        className: '__className_2c91d1',
        variable: '__variable_2c91d1',
      };
    },
    6879: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'addBasePath', {
          enumerable: !0,
          get: function () {
            return addBasePath;
          },
        });
      let a = t(8549),
        o = t(6945);
      function addBasePath(e, r) {
        return (0, o.normalizePathTrailingSlash)((0, a.addPathPrefix)(e, ''));
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    5422: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'callServer', {
          enumerable: !0,
          get: function () {
            return callServer;
          },
        });
      let a = t(3724);
      async function callServer(e, r) {
        let t = (0, a.getServerActionDispatcher)();
        if (!t) throw Error('Invariant: missing action dispatcher.');
        return new Promise((a, o) => {
          t({ actionId: e, actionArgs: r, resolve: a, reject: o });
        });
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    3204: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'AppRouterAnnouncer', {
          enumerable: !0,
          get: function () {
            return AppRouterAnnouncer;
          },
        });
      let a = t(9885),
        o = t(8908),
        n = 'next-route-announcer';
      function getAnnouncerNode() {
        var e;
        let r = document.getElementsByName(n)[0];
        if (
          null == r
            ? void 0
            : null == (e = r.shadowRoot)
              ? void 0
              : e.childNodes[0]
        )
          return r.shadowRoot.childNodes[0];
        {
          let e = document.createElement(n);
          e.style.cssText = 'position:absolute';
          let r = document.createElement('div');
          (r.ariaLive = 'assertive'),
            (r.id = '__next-route-announcer__'),
            (r.role = 'alert'),
            (r.style.cssText =
              'position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal');
          let t = e.attachShadow({ mode: 'open' });
          return t.appendChild(r), document.body.appendChild(e), r;
        }
      }
      function AppRouterAnnouncer(e) {
        let { tree: r } = e,
          [t, l] = (0, a.useState)(null);
        (0, a.useEffect)(() => {
          let e = getAnnouncerNode();
          return (
            l(e),
            () => {
              let e = document.getElementsByTagName(n)[0];
              (null == e ? void 0 : e.isConnected) &&
                document.body.removeChild(e);
            }
          );
        }, []);
        let [i, s] = (0, a.useState)(''),
          c = (0, a.useRef)();
        return (
          (0, a.useEffect)(() => {
            let e = '';
            if (document.title) e = document.title;
            else {
              let r = document.querySelector('h1');
              r && (e = r.innerText || r.textContent || '');
            }
            void 0 !== c.current && c.current !== e && s(e), (c.current = e);
          }, [r]),
          t ? (0, o.createPortal)(i, t) : null
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    4361: (e, r) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          RSC: function () {
            return t;
          },
          ACTION: function () {
            return a;
          },
          NEXT_ROUTER_STATE_TREE: function () {
            return o;
          },
          NEXT_ROUTER_PREFETCH: function () {
            return n;
          },
          NEXT_URL: function () {
            return l;
          },
          RSC_CONTENT_TYPE_HEADER: function () {
            return i;
          },
          RSC_VARY_HEADER: function () {
            return s;
          },
          FLIGHT_PARAMETERS: function () {
            return c;
          },
          NEXT_RSC_UNION_QUERY: function () {
            return d;
          },
        });
      let t = 'RSC',
        a = 'Next-Action',
        o = 'Next-Router-State-Tree',
        n = 'Next-Router-Prefetch',
        l = 'Next-Url',
        i = 'text/x-component',
        s = t + ', ' + o + ', ' + n + ', ' + l,
        c = [[t], [o], [n]],
        d = '_rsc';
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    3724: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          getServerActionDispatcher: function () {
            return getServerActionDispatcher;
          },
          urlToUrlWithoutFlightMarker: function () {
            return urlToUrlWithoutFlightMarker;
          },
          default: function () {
            return AppRouter;
          },
        });
      let a = t(3026),
        o = a._(t(9885)),
        n = t(2428),
        l = t(7986),
        i = t(3678),
        s = t(1706),
        c = t(1736),
        d = t(9236),
        p = t(5365),
        u = t(9624),
        f = t(4692),
        y = t(6879),
        b = t(3204),
        m = t(7502),
        g = t(2226),
        A = t(9880),
        h = t(4361),
        v = t(4978),
        _ = t(9760),
        P = null,
        w = null;
      function getServerActionDispatcher() {
        return w;
      }
      let k = { refresh: () => {} };
      function urlToUrlWithoutFlightMarker(e) {
        let r = new URL(e, location.origin);
        return r.searchParams.delete(h.NEXT_RSC_UNION_QUERY), r;
      }
      function isExternalURL(e) {
        return e.origin !== window.location.origin;
      }
      function HistoryUpdater(e) {
        let { tree: r, pushRef: t, canonicalUrl: a, sync: n } = e;
        return (
          (0, o.useInsertionEffect)(() => {
            let e = { __NA: !0, tree: r };
            t.pendingPush &&
            (0, s.createHrefFromUrl)(new URL(window.location.href)) !== a
              ? ((t.pendingPush = !1), window.history.pushState(e, '', a))
              : window.history.replaceState(e, '', a),
              n();
          }, [r, t, a, n]),
          null
        );
      }
      let createEmptyCacheNode = () => ({
        status: n.CacheStates.LAZY_INITIALIZED,
        data: null,
        subTreeData: null,
        parallelRoutes: new Map(),
      });
      function useServerActionDispatcher(e) {
        let r = (0, o.useCallback)(
          (r) => {
            (0, o.startTransition)(() => {
              e({
                ...r,
                type: i.ACTION_SERVER_ACTION,
                mutable: { globalMutable: k },
                cache: createEmptyCacheNode(),
              });
            });
          },
          [e],
        );
        w = r;
      }
      function useChangeByServerResponse(e) {
        return (0, o.useCallback)(
          (r, t, a) => {
            (0, o.startTransition)(() => {
              e({
                type: i.ACTION_SERVER_PATCH,
                flightData: t,
                previousTree: r,
                overrideCanonicalUrl: a,
                cache: createEmptyCacheNode(),
                mutable: { globalMutable: k },
              });
            });
          },
          [e],
        );
      }
      function useNavigate(e) {
        return (0, o.useCallback)(
          (r, t, a, o) => {
            let n = new URL((0, y.addBasePath)(r), location.href);
            return (
              (k.pendingNavigatePath = (0, s.createHrefFromUrl)(n)),
              e({
                type: i.ACTION_NAVIGATE,
                url: n,
                isExternalUrl: isExternalURL(n),
                locationSearch: location.search,
                forceOptimisticNavigation: a,
                shouldScroll: null == o || o,
                navigateType: t,
                cache: createEmptyCacheNode(),
                mutable: { globalMutable: k },
              })
            );
          },
          [e],
        );
      }
      function Router(e) {
        let {
            buildId: r,
            initialHead: t,
            initialTree: a,
            initialCanonicalUrl: s,
            children: p,
            assetPrefix: h,
          } = e,
          w = (0, o.useMemo)(
            () =>
              (0, u.createInitialRouterState)({
                buildId: r,
                children: p,
                initialCanonicalUrl: s,
                initialTree: a,
                initialParallelRoutes: P,
                isServer: !0,
                location: null,
                initialHead: t,
              }),
            [r, p, s, a, t],
          ),
          [
            {
              tree: S,
              cache: x,
              prefetchCache: j,
              pushRef: R,
              focusAndScrollRef: E,
              canonicalUrl: O,
              nextUrl: C,
            },
            T,
            M,
          ] = (0, d.useReducerWithReduxDevtools)(l.reducer, w);
        (0, o.useEffect)(() => {
          P = null;
        }, []);
        let { searchParams: N, pathname: D } = (0, o.useMemo)(() => {
            let e = new URL(O, 'http://n');
            return {
              searchParams: e.searchParams,
              pathname: (0, _.hasBasePath)(e.pathname)
                ? (0, v.removeBasePath)(e.pathname)
                : e.pathname,
            };
          }, [O]),
          I = useChangeByServerResponse(T),
          L = useNavigate(T);
        useServerActionDispatcher(T);
        let z = (0, o.useMemo)(() => {
          let e = {
            back: () => window.history.back(),
            forward: () => window.history.forward(),
            prefetch: (e, r) => {
              if ((0, f.isBot)(window.navigator.userAgent)) return;
              let t = new URL((0, y.addBasePath)(e), location.href);
              isExternalURL(t) ||
                (0, o.startTransition)(() => {
                  var e;
                  T({
                    type: i.ACTION_PREFETCH,
                    url: t,
                    kind:
                      null != (e = null == r ? void 0 : r.kind)
                        ? e
                        : i.PrefetchKind.FULL,
                  });
                });
            },
            replace: (e, r) => {
              void 0 === r && (r = {}),
                (0, o.startTransition)(() => {
                  var t;
                  L(
                    e,
                    'replace',
                    !!r.forceOptimisticNavigation,
                    null == (t = r.scroll) || t,
                  );
                });
            },
            push: (e, r) => {
              void 0 === r && (r = {}),
                (0, o.startTransition)(() => {
                  var t;
                  L(
                    e,
                    'push',
                    !!r.forceOptimisticNavigation,
                    null == (t = r.scroll) || t,
                  );
                });
            },
            refresh: () => {
              (0, o.startTransition)(() => {
                T({
                  type: i.ACTION_REFRESH,
                  cache: createEmptyCacheNode(),
                  mutable: { globalMutable: k },
                  origin: window.location.origin,
                });
              });
            },
            fastRefresh: () => {
              throw Error(
                'fastRefresh can only be used in development mode. Please use refresh instead.',
              );
            },
          };
          return e;
        }, [T, L]);
        if (
          ((0, o.useEffect)(() => {
            window.next && (window.next.router = z);
          }, [z]),
          (0, o.useEffect)(() => {
            k.refresh = z.refresh;
          }, [z.refresh]),
          (0, o.useEffect)(() => {
            function handlePageShow(e) {
              var r;
              e.persisted &&
                (null == (r = window.history.state) ? void 0 : r.tree) &&
                T({
                  type: i.ACTION_RESTORE,
                  url: new URL(window.location.href),
                  tree: window.history.state.tree,
                });
            }
            return (
              window.addEventListener('pageshow', handlePageShow),
              () => {
                window.removeEventListener('pageshow', handlePageShow);
              }
            );
          }, [T]),
          R.mpaNavigation)
        ) {
          if (k.pendingMpaPath !== O) {
            let e = window.location;
            R.pendingPush ? e.assign(O) : e.replace(O), (k.pendingMpaPath = O);
          }
          (0, o.use)((0, A.createInfinitePromise)());
        }
        let F = (0, o.useCallback)(
          (e) => {
            let { state: r } = e;
            if (r) {
              if (!r.__NA) {
                window.location.reload();
                return;
              }
              (0, o.startTransition)(() => {
                T({
                  type: i.ACTION_RESTORE,
                  url: new URL(window.location.href),
                  tree: r.tree,
                });
              });
            }
          },
          [T],
        );
        (0, o.useEffect)(
          () => (
            window.addEventListener('popstate', F),
            () => {
              window.removeEventListener('popstate', F);
            }
          ),
          [F],
        );
        let U = (0, o.useMemo)(() => (0, g.findHeadInCache)(x, S[1]), [x, S]),
          H = o.default.createElement(
            m.RedirectBoundary,
            null,
            U,
            x.subTreeData,
            o.default.createElement(b.AppRouterAnnouncer, { tree: S }),
          );
        return o.default.createElement(
          o.default.Fragment,
          null,
          o.default.createElement(HistoryUpdater, {
            tree: S,
            pushRef: R,
            canonicalUrl: O,
            sync: M,
          }),
          o.default.createElement(
            c.PathnameContext.Provider,
            { value: D },
            o.default.createElement(
              c.SearchParamsContext.Provider,
              { value: N },
              o.default.createElement(
                n.GlobalLayoutRouterContext.Provider,
                {
                  value: {
                    buildId: r,
                    changeByServerResponse: I,
                    tree: S,
                    focusAndScrollRef: E,
                    nextUrl: C,
                  },
                },
                o.default.createElement(
                  n.AppRouterContext.Provider,
                  { value: z },
                  o.default.createElement(
                    n.LayoutRouterContext.Provider,
                    {
                      value: { childNodes: x.parallelRoutes, tree: S, url: O },
                    },
                    H,
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function AppRouter(e) {
        let { globalErrorComponent: r, ...t } = e;
        return o.default.createElement(
          p.ErrorBoundary,
          { errorComponent: r },
          o.default.createElement(Router, t),
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    4954: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'bailoutToClientRendering', {
          enumerable: !0,
          get: function () {
            return bailoutToClientRendering;
          },
        });
      let a = t(1118),
        o = t(4749);
      function bailoutToClientRendering() {
        let e = o.staticGenerationAsyncStorage.getStore();
        return (
          (null != e && !!e.forceStatic) ||
          ((null == e ? void 0 : e.isStaticGeneration) &&
            (0, a.throwWithNoSSR)(),
          !1)
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    3402: (e, r, t) => {
      'use strict';
      function clientHookInServerComponentError(e) {}
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'clientHookInServerComponentError', {
          enumerable: !0,
          get: function () {
            return clientHookInServerComponentError;
          },
        }),
        t(2300),
        t(9885),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    5365: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          ErrorBoundaryHandler: function () {
            return ErrorBoundaryHandler;
          },
          GlobalError: function () {
            return GlobalError;
          },
          default: function () {
            return i;
          },
          ErrorBoundary: function () {
            return ErrorBoundary;
          },
        });
      let a = t(2300),
        o = a._(t(9885)),
        n = t(4979),
        l = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          text: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '28px',
            margin: '0 8px',
          },
        };
      function HandleISRError(e) {
        let { error: r } = e;
        if ('function' == typeof fetch.__nextGetStaticStore) {
          var t;
          let e =
            null == (t = fetch.__nextGetStaticStore()) ? void 0 : t.getStore();
          if (
            (null == e ? void 0 : e.isRevalidate) ||
            (null == e ? void 0 : e.isStaticGeneration)
          )
            throw (console.error(r), r);
        }
        return null;
      }
      let ErrorBoundaryHandler = class ErrorBoundaryHandler extends o.default
        .Component {
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, r) {
          return e.pathname !== r.previousPathname && r.error
            ? { error: null, previousPathname: e.pathname }
            : { error: r.error, previousPathname: e.pathname };
        }
        render() {
          return this.state.error
            ? o.default.createElement(
                o.default.Fragment,
                null,
                o.default.createElement(HandleISRError, {
                  error: this.state.error,
                }),
                this.props.errorStyles,
                this.props.errorScripts,
                o.default.createElement(this.props.errorComponent, {
                  error: this.state.error,
                  reset: this.reset,
                }),
              )
            : this.props.children;
        }
        constructor(e) {
          super(e),
            (this.reset = () => {
              this.setState({ error: null });
            }),
            (this.state = {
              error: null,
              previousPathname: this.props.pathname,
            });
        }
      };
      function GlobalError(e) {
        let { error: r } = e,
          t = null == r ? void 0 : r.digest;
        return o.default.createElement(
          'html',
          { id: '__next_error__' },
          o.default.createElement('head', null),
          o.default.createElement(
            'body',
            null,
            o.default.createElement(HandleISRError, { error: r }),
            o.default.createElement(
              'div',
              { style: l.error },
              o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  'h2',
                  { style: l.text },
                  'Application error: a ' +
                    (t ? 'server' : 'client') +
                    '-side exception has occurred (see the ' +
                    (t ? 'server logs' : 'browser console') +
                    ' for more information).',
                ),
                t
                  ? o.default.createElement(
                      'p',
                      { style: l.text },
                      'Digest: ' + t,
                    )
                  : null,
              ),
            ),
          ),
        );
      }
      let i = GlobalError;
      function ErrorBoundary(e) {
        let {
            errorComponent: r,
            errorStyles: t,
            errorScripts: a,
            children: l,
          } = e,
          i = (0, n.usePathname)();
        return r
          ? o.default.createElement(
              ErrorBoundaryHandler,
              {
                pathname: i,
                errorComponent: r,
                errorStyles: t,
                errorScripts: a,
              },
              l,
            )
          : o.default.createElement(o.default.Fragment, null, l);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    5171: (e, r) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          DYNAMIC_ERROR_CODE: function () {
            return t;
          },
          DynamicServerError: function () {
            return DynamicServerError;
          },
        });
      let t = 'DYNAMIC_SERVER_USAGE';
      let DynamicServerError = class DynamicServerError extends Error {
        constructor(e) {
          super('Dynamic server usage: ' + e), (this.digest = t);
        }
      };
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    9880: (e, r) => {
      'use strict';
      let t;
      function createInfinitePromise() {
        return t || (t = new Promise(() => {})), t;
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'createInfinitePromise', {
          enumerable: !0,
          get: function () {
            return createInfinitePromise;
          },
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    4900: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'default', {
          enumerable: !0,
          get: function () {
            return OuterLayoutRouter;
          },
        }),
        t(2300);
      let a = t(3026),
        o = a._(t(9885));
      t(8908);
      let n = t(2428),
        l = t(9102),
        i = t(9880),
        s = t(5365),
        c = t(4538),
        d = t(4448),
        p = t(7502),
        u = t(4714),
        f = t(1275),
        y = t(4701),
        b = t(8026);
      function walkAddRefetch(e, r) {
        if (e) {
          let [t, a] = e,
            o = 2 === e.length;
          if ((0, c.matchSegment)(r[0], t) && r[1].hasOwnProperty(a)) {
            if (o) {
              let e = walkAddRefetch(void 0, r[1][a]);
              return [r[0], { ...r[1], [a]: [e[0], e[1], e[2], 'refetch'] }];
            }
            return [
              r[0],
              { ...r[1], [a]: walkAddRefetch(e.slice(2), r[1][a]) },
            ];
          }
        }
        return r;
      }
      function findDOMNode(e) {
        return null;
      }
      let m = ['bottom', 'height', 'left', 'right', 'top', 'width', 'x', 'y'];
      function shouldSkipElement(e) {
        if (['sticky', 'fixed'].includes(getComputedStyle(e).position))
          return !0;
        let r = e.getBoundingClientRect();
        return m.every((e) => 0 === r[e]);
      }
      function topOfElementInViewport(e, r) {
        let t = e.getBoundingClientRect();
        return t.top >= 0 && t.top <= r;
      }
      function getHashFragmentDomNode(e) {
        var r;
        return 'top' === e
          ? document.body
          : null != (r = document.getElementById(e))
            ? r
            : document.getElementsByName(e)[0];
      }
      let InnerScrollAndFocusHandler = class InnerScrollAndFocusHandler extends o
        .default.Component {
        componentDidMount() {
          this.handlePotentialScroll();
        }
        componentDidUpdate() {
          this.props.focusAndScrollRef.apply && this.handlePotentialScroll();
        }
        render() {
          return this.props.children;
        }
        constructor(...e) {
          super(...e),
            (this.handlePotentialScroll = () => {
              let { focusAndScrollRef: e, segmentPath: r } = this.props;
              if (e.apply) {
                if (
                  0 !== e.segmentPaths.length &&
                  !e.segmentPaths.some((e) =>
                    r.every((r, t) => (0, c.matchSegment)(r, e[t])),
                  )
                )
                  return;
                let t = null,
                  a = e.hashFragment;
                if (
                  (a && (t = getHashFragmentDomNode(a)),
                  t || (t = findDOMNode(this)),
                  !(t instanceof Element))
                )
                  return;
                for (; !(t instanceof HTMLElement) || shouldSkipElement(t); ) {
                  if (null === t.nextElementSibling) return;
                  t = t.nextElementSibling;
                }
                (e.apply = !1),
                  (e.hashFragment = null),
                  (e.segmentPaths = []),
                  (0, d.handleSmoothScroll)(
                    () => {
                      if (a) {
                        t.scrollIntoView();
                        return;
                      }
                      let e = document.documentElement,
                        r = e.clientHeight;
                      !topOfElementInViewport(t, r) &&
                        ((e.scrollTop = 0),
                        topOfElementInViewport(t, r) || t.scrollIntoView());
                    },
                    { dontForceLayout: !0, onlyHashChange: e.onlyHashChange },
                  ),
                  (e.onlyHashChange = !1),
                  t.focus();
              }
            });
        }
      };
      function ScrollAndFocusHandler(e) {
        let { segmentPath: r, children: t } = e,
          a = (0, o.useContext)(n.GlobalLayoutRouterContext);
        if (!a) throw Error('invariant global layout router not mounted');
        return o.default.createElement(
          InnerScrollAndFocusHandler,
          { segmentPath: r, focusAndScrollRef: a.focusAndScrollRef },
          t,
        );
      }
      function InnerLayoutRouter(e) {
        let {
            parallelRouterKey: r,
            url: t,
            childNodes: a,
            childProp: s,
            segmentPath: c,
            tree: d,
            cacheKey: p,
          } = e,
          u = (0, o.useContext)(n.GlobalLayoutRouterContext);
        if (!u) throw Error('invariant global layout router not mounted');
        let { buildId: f, changeByServerResponse: y, tree: m } = u,
          g = a.get(p);
        if (
          (s &&
            null !== s.current &&
            (g
              ? g.status === n.CacheStates.LAZY_INITIALIZED &&
                ((g.status = n.CacheStates.READY), (g.subTreeData = s.current))
              : ((g = {
                  status: n.CacheStates.READY,
                  data: null,
                  subTreeData: s.current,
                  parallelRoutes: new Map(),
                }),
                a.set(p, g))),
          !g || g.status === n.CacheStates.LAZY_INITIALIZED)
        ) {
          let e = walkAddRefetch(['', ...c], m);
          (g = {
            status: n.CacheStates.DATA_FETCH,
            data: (0, b.createRecordFromThenable)(
              (0, l.fetchServerResponse)(
                new URL(t, location.origin),
                e,
                u.nextUrl,
                f,
              ),
            ),
            subTreeData: null,
            head:
              g && g.status === n.CacheStates.LAZY_INITIALIZED
                ? g.head
                : void 0,
            parallelRoutes:
              g && g.status === n.CacheStates.LAZY_INITIALIZED
                ? g.parallelRoutes
                : new Map(),
          }),
            a.set(p, g);
        }
        if (!g) throw Error('Child node should always exist');
        if (g.subTreeData && g.data)
          throw Error('Child node should not have both subTreeData and data');
        if (g.data) {
          let [e, r] = (0, o.use)(g.data);
          (g.data = null),
            setTimeout(() => {
              (0, o.startTransition)(() => {
                y(m, e, r);
              });
            }),
            (0, o.use)((0, i.createInfinitePromise)());
        }
        g.subTreeData || (0, o.use)((0, i.createInfinitePromise)());
        let A = o.default.createElement(
          n.LayoutRouterContext.Provider,
          { value: { tree: d[1][r], childNodes: g.parallelRoutes, url: t } },
          g.subTreeData,
        );
        return A;
      }
      function LoadingBoundary(e) {
        let {
          children: r,
          loading: t,
          loadingStyles: a,
          loadingScripts: n,
          hasLoading: l,
        } = e;
        return l
          ? o.default.createElement(
              o.Suspense,
              {
                fallback: o.default.createElement(
                  o.default.Fragment,
                  null,
                  a,
                  n,
                  t,
                ),
              },
              r,
            )
          : o.default.createElement(o.default.Fragment, null, r);
      }
      function OuterLayoutRouter(e) {
        let {
            parallelRouterKey: r,
            segmentPath: t,
            childProp: a,
            error: l,
            errorStyles: i,
            errorScripts: d,
            templateStyles: b,
            templateScripts: m,
            loading: g,
            loadingStyles: A,
            loadingScripts: h,
            hasLoading: v,
            template: _,
            notFound: P,
            notFoundStyles: w,
            styles: k,
          } = e,
          S = (0, o.useContext)(n.LayoutRouterContext);
        if (!S) throw Error('invariant expected layout router to be mounted');
        let { childNodes: x, tree: j, url: R } = S,
          E = x.get(r);
        E || ((E = new Map()), x.set(r, E));
        let O = j[1][r][0],
          C = a.segment,
          T = (0, f.getSegmentValue)(O),
          M = [O];
        return o.default.createElement(
          o.default.Fragment,
          null,
          k,
          M.map((e) => {
            let k = (0, c.matchSegment)(e, C),
              S = (0, f.getSegmentValue)(e),
              x = (0, y.createRouterCacheKey)(e);
            return o.default.createElement(
              n.TemplateContext.Provider,
              {
                key: (0, y.createRouterCacheKey)(e, !0),
                value: o.default.createElement(
                  ScrollAndFocusHandler,
                  { segmentPath: t },
                  o.default.createElement(
                    s.ErrorBoundary,
                    { errorComponent: l, errorStyles: i, errorScripts: d },
                    o.default.createElement(
                      LoadingBoundary,
                      {
                        hasLoading: v,
                        loading: g,
                        loadingStyles: A,
                        loadingScripts: h,
                      },
                      o.default.createElement(
                        u.NotFoundBoundary,
                        { notFound: P, notFoundStyles: w },
                        o.default.createElement(
                          p.RedirectBoundary,
                          null,
                          o.default.createElement(InnerLayoutRouter, {
                            parallelRouterKey: r,
                            url: R,
                            tree: j,
                            childNodes: E,
                            childProp: k ? a : null,
                            segmentPath: t,
                            cacheKey: x,
                            isActive: T === S,
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
              },
              b,
              m,
              _,
            );
          }),
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    4538: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          matchSegment: function () {
            return matchSegment;
          },
          canSegmentBeOverridden: function () {
            return canSegmentBeOverridden;
          },
        });
      let a = t(2290),
        matchSegment = (e, r) =>
          'string' == typeof e
            ? 'string' == typeof r && e === r
            : 'string' != typeof r && e[0] === r[0] && e[1] === r[1],
        canSegmentBeOverridden = (e, r) => {
          var t;
          return (
            !Array.isArray(e) &&
            !!Array.isArray(r) &&
            (null == (t = (0, a.getSegmentParam)(e)) ? void 0 : t.param) ===
              r[0]
          );
        };
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    3094: (e, r, t) => {
      'use strict';
      function maybePostpone(e, r) {
        if (!e.isStaticGeneration || !e.experimental.ppr) return;
        let a = t(9885);
        'function' == typeof a.unstable_postpone && a.unstable_postpone(r);
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'maybePostpone', {
          enumerable: !0,
          get: function () {
            return maybePostpone;
          },
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    4979: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
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
            return s.ServerInsertedHTMLContext;
          },
          useServerInsertedHTML: function () {
            return s.useServerInsertedHTML;
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
      let a = t(9885),
        o = t(2428),
        n = t(1736),
        l = t(3402),
        i = t(1275),
        s = t(5753),
        c = t(1612),
        d = t(1103),
        p = Symbol('internal for urlsearchparams readonly');
      function readonlyURLSearchParamsError() {
        return Error('ReadonlyURLSearchParams cannot be modified');
      }
      let ReadonlyURLSearchParams = class ReadonlyURLSearchParams {
        [Symbol.iterator]() {
          return this[p][Symbol.iterator]();
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
          (this[p] = e),
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
        (0, l.clientHookInServerComponentError)('useSearchParams');
        let e = (0, a.useContext)(n.SearchParamsContext),
          r = (0, a.useMemo)(
            () => (e ? new ReadonlyURLSearchParams(e) : null),
            [e],
          );
        {
          let { bailoutToClientRendering: e } = t(4954);
          e();
        }
        return r;
      }
      function usePathname() {
        return (
          (0, l.clientHookInServerComponentError)('usePathname'),
          (0, a.useContext)(n.PathnameContext)
        );
      }
      function useRouter() {
        (0, l.clientHookInServerComponentError)('useRouter');
        let e = (0, a.useContext)(o.AppRouterContext);
        if (null === e)
          throw Error('invariant expected app router to be mounted');
        return e;
      }
      function getSelectedParams(e, r) {
        void 0 === r && (r = {});
        let t = e[1];
        for (let e of Object.values(t)) {
          let t = e[0],
            a = Array.isArray(t),
            o = a ? t[1] : t;
          if (!o || o.startsWith('__PAGE__')) continue;
          let n = a && ('c' === t[2] || 'oc' === t[2]);
          n ? (r[t[0]] = t[1].split('/')) : a && (r[t[0]] = t[1]),
            (r = getSelectedParams(e, r));
        }
        return r;
      }
      function useParams() {
        (0, l.clientHookInServerComponentError)('useParams');
        let e = (0, a.useContext)(o.GlobalLayoutRouterContext),
          r = (0, a.useContext)(n.PathParamsContext);
        return (0, a.useMemo)(
          () => ((null == e ? void 0 : e.tree) ? getSelectedParams(e.tree) : r),
          [null == e ? void 0 : e.tree, r],
        );
      }
      function getSelectedLayoutSegmentPath(e, r, t, a) {
        let o;
        if ((void 0 === t && (t = !0), void 0 === a && (a = []), t))
          o = e[1][r];
        else {
          var n;
          let r = e[1];
          o = null != (n = r.children) ? n : Object.values(r)[0];
        }
        if (!o) return a;
        let l = o[0],
          s = (0, i.getSegmentValue)(l);
        return !s || s.startsWith('__PAGE__')
          ? a
          : (a.push(s), getSelectedLayoutSegmentPath(o, r, !1, a));
      }
      function useSelectedLayoutSegments(e) {
        void 0 === e && (e = 'children'),
          (0, l.clientHookInServerComponentError)('useSelectedLayoutSegments');
        let { tree: r } = (0, a.useContext)(o.LayoutRouterContext);
        return getSelectedLayoutSegmentPath(r, e);
      }
      function useSelectedLayoutSegment(e) {
        void 0 === e && (e = 'children'),
          (0, l.clientHookInServerComponentError)('useSelectedLayoutSegment');
        let r = useSelectedLayoutSegments(e);
        return 0 === r.length ? null : r[0];
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    4714: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'NotFoundBoundary', {
          enumerable: !0,
          get: function () {
            return NotFoundBoundary;
          },
        });
      let a = t(2300),
        o = a._(t(9885)),
        n = t(4979);
      let NotFoundErrorBoundary = class NotFoundErrorBoundary extends o.default
        .Component {
        static getDerivedStateFromError(e) {
          if ((null == e ? void 0 : e.digest) === 'NEXT_NOT_FOUND')
            return { notFoundTriggered: !0 };
          throw e;
        }
        static getDerivedStateFromProps(e, r) {
          return e.pathname !== r.previousPathname && r.notFoundTriggered
            ? { notFoundTriggered: !1, previousPathname: e.pathname }
            : {
                notFoundTriggered: r.notFoundTriggered,
                previousPathname: e.pathname,
              };
        }
        render() {
          return this.state.notFoundTriggered
            ? o.default.createElement(
                o.default.Fragment,
                null,
                o.default.createElement('meta', {
                  name: 'robots',
                  content: 'noindex',
                }),
                !1,
                this.props.notFoundStyles,
                this.props.notFound,
              )
            : this.props.children;
        }
        constructor(e) {
          super(e),
            (this.state = {
              notFoundTriggered: !!e.asNotFound,
              previousPathname: e.pathname,
            });
        }
      };
      function NotFoundBoundary(e) {
        let { notFound: r, notFoundStyles: t, asNotFound: a, children: l } = e,
          i = (0, n.usePathname)();
        return r
          ? o.default.createElement(
              NotFoundErrorBoundary,
              { pathname: i, notFound: r, notFoundStyles: t, asNotFound: a },
              l,
            )
          : o.default.createElement(o.default.Fragment, null, l);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1103: (e, r) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          notFound: function () {
            return notFound;
          },
          isNotFoundError: function () {
            return isNotFoundError;
          },
        });
      let t = 'NEXT_NOT_FOUND';
      function notFound() {
        let e = Error(t);
        throw ((e.digest = t), e);
      }
      function isNotFoundError(e) {
        return (null == e ? void 0 : e.digest) === t;
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    8862: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'PromiseQueue', {
          enumerable: !0,
          get: function () {
            return PromiseQueue;
          },
        });
      let a = t(4164),
        o = t(6788);
      var n = o._('_maxConcurrency'),
        l = o._('_runningCount'),
        i = o._('_queue'),
        s = o._('_processNext');
      let PromiseQueue = class PromiseQueue {
        enqueue(e) {
          let r, t;
          let o = new Promise((e, a) => {
              (r = e), (t = a);
            }),
            task = async () => {
              try {
                a._(this, l)[l]++;
                let t = await e();
                r(t);
              } catch (e) {
                t(e);
              } finally {
                a._(this, l)[l]--, a._(this, s)[s]();
              }
            };
          return (
            a._(this, i)[i].push({ promiseFn: o, task }), a._(this, s)[s](), o
          );
        }
        bump(e) {
          let r = a._(this, i)[i].findIndex((r) => r.promiseFn === e);
          if (r > -1) {
            let e = a._(this, i)[i].splice(r, 1)[0];
            a._(this, i)[i].unshift(e), a._(this, s)[s](!0);
          }
        }
        constructor(e = 5) {
          Object.defineProperty(this, s, { value: processNext }),
            Object.defineProperty(this, n, { writable: !0, value: void 0 }),
            Object.defineProperty(this, l, { writable: !0, value: void 0 }),
            Object.defineProperty(this, i, { writable: !0, value: void 0 }),
            (a._(this, n)[n] = e),
            (a._(this, l)[l] = 0),
            (a._(this, i)[i] = []);
        }
      };
      function processNext(e) {
        if (
          (void 0 === e && (e = !1),
          (a._(this, l)[l] < a._(this, n)[n] || e) &&
            a._(this, i)[i].length > 0)
        ) {
          var r;
          null == (r = a._(this, i)[i].shift()) || r.task();
        }
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    7502: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          RedirectErrorBoundary: function () {
            return RedirectErrorBoundary;
          },
          RedirectBoundary: function () {
            return RedirectBoundary;
          },
        });
      let a = t(3026),
        o = a._(t(9885)),
        n = t(4979),
        l = t(1612);
      function HandleRedirect(e) {
        let { redirect: r, reset: t, redirectType: a } = e,
          i = (0, n.useRouter)();
        return (
          (0, o.useEffect)(() => {
            o.default.startTransition(() => {
              a === l.RedirectType.push ? i.push(r, {}) : i.replace(r, {}), t();
            });
          }, [r, a, t, i]),
          null
        );
      }
      let RedirectErrorBoundary = class RedirectErrorBoundary extends o.default
        .Component {
        static getDerivedStateFromError(e) {
          if ((0, l.isRedirectError)(e)) {
            let r = (0, l.getURLFromRedirectError)(e),
              t = (0, l.getRedirectTypeFromError)(e);
            return { redirect: r, redirectType: t };
          }
          throw e;
        }
        render() {
          let { redirect: e, redirectType: r } = this.state;
          return null !== e && null !== r
            ? o.default.createElement(HandleRedirect, {
                redirect: e,
                redirectType: r,
                reset: () => this.setState({ redirect: null }),
              })
            : this.props.children;
        }
        constructor(e) {
          super(e), (this.state = { redirect: null, redirectType: null });
        }
      };
      function RedirectBoundary(e) {
        let { children: r } = e,
          t = (0, n.useRouter)();
        return o.default.createElement(RedirectErrorBoundary, { router: t }, r);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1612: (e, r, t) => {
      'use strict';
      var a;
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          RedirectType: function () {
            return a;
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
      let o = t(5403),
        n = 'NEXT_REDIRECT';
      function getRedirectError(e, r, t) {
        void 0 === t && (t = !1);
        let a = Error(n);
        a.digest = n + ';' + r + ';' + e + ';' + t;
        let l = o.requestAsyncStorage.getStore();
        return l && (a.mutableCookies = l.mutableCookies), a;
      }
      function redirect(e, r) {
        throw (void 0 === r && (r = 'replace'), getRedirectError(e, r, !1));
      }
      function permanentRedirect(e, r) {
        throw (void 0 === r && (r = 'replace'), getRedirectError(e, r, !0));
      }
      function isRedirectError(e) {
        if ('string' != typeof (null == e ? void 0 : e.digest)) return !1;
        let [r, t, a, o] = e.digest.split(';', 4);
        return (
          r === n &&
          ('replace' === t || 'push' === t) &&
          'string' == typeof a &&
          ('true' === o || 'false' === o)
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
      })(a || (a = {})),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    5392: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'default', {
          enumerable: !0,
          get: function () {
            return RenderFromTemplateContext;
          },
        });
      let a = t(3026),
        o = a._(t(9885)),
        n = t(2428);
      function RenderFromTemplateContext() {
        let e = (0, o.useContext)(n.TemplateContext);
        return o.default.createElement(o.default.Fragment, null, e);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1847: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'applyFlightData', {
          enumerable: !0,
          get: function () {
            return applyFlightData;
          },
        });
      let a = t(2428),
        o = t(5929),
        n = t(4059);
      function applyFlightData(e, r, t, l) {
        void 0 === l && (l = !1);
        let [i, s, c] = t.slice(-3);
        return (
          null !== s &&
          (3 === t.length
            ? ((r.status = a.CacheStates.READY),
              (r.subTreeData = s),
              (0, o.fillLazyItemsTillLeafWithHead)(r, e, i, c, l))
            : ((r.status = a.CacheStates.READY),
              (r.subTreeData = e.subTreeData),
              (r.parallelRoutes = new Map(e.parallelRoutes)),
              (0, n.fillCacheWithNewSubTreeData)(r, e, t, l)),
          !0)
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    9605: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'applyRouterStatePatchToTree', {
          enumerable: !0,
          get: function () {
            return applyRouterStatePatchToTree;
          },
        });
      let a = t(4538);
      function applyPatch(e, r) {
        let [t, o] = e,
          [n, l] = r;
        if ('__DEFAULT__' === n && '__DEFAULT__' !== t) return e;
        if ((0, a.matchSegment)(t, n)) {
          let r = {};
          for (let e in o) {
            let t = void 0 !== l[e];
            t ? (r[e] = applyPatch(o[e], l[e])) : (r[e] = o[e]);
          }
          for (let e in l) r[e] || (r[e] = l[e]);
          let a = [t, r];
          return (
            e[2] && (a[2] = e[2]),
            e[3] && (a[3] = e[3]),
            e[4] && (a[4] = e[4]),
            a
          );
        }
        return r;
      }
      function applyRouterStatePatchToTree(e, r, t) {
        let o;
        let [n, l, , , i] = r;
        if (1 === e.length) {
          let e = applyPatch(r, t);
          return e;
        }
        let [s, c] = e;
        if (!(0, a.matchSegment)(s, n)) return null;
        let d = 2 === e.length;
        if (d) o = applyPatch(l[c], t);
        else if (
          null === (o = applyRouterStatePatchToTree(e.slice(2), l[c], t))
        )
          return null;
        let p = [e[0], { ...l, [c]: o }];
        return i && (p[4] = !0), p;
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    6663: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          extractPathFromFlightRouterState: function () {
            return extractPathFromFlightRouterState;
          },
          computeChangedPath: function () {
            return computeChangedPath;
          },
        });
      let a = t(4265),
        o = t(392),
        n = t(4538),
        removeLeadingSlash = (e) => ('/' === e[0] ? e.slice(1) : e),
        segmentToPathname = (e) => ('string' == typeof e ? e : e[1]);
      function normalizeSegments(e) {
        return (
          e.reduce(
            (e, r) =>
              '' === (r = removeLeadingSlash(r)) || (0, o.isGroupSegment)(r)
                ? e
                : e + '/' + r,
            '',
          ) || '/'
        );
      }
      function extractPathFromFlightRouterState(e) {
        var r;
        let t = Array.isArray(e[0]) ? e[0][1] : e[0];
        if (
          '__DEFAULT__' === t ||
          a.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e))
        )
          return;
        if (t.startsWith('__PAGE__')) return '';
        let o = [t],
          n = null != (r = e[1]) ? r : {},
          l = n.children
            ? extractPathFromFlightRouterState(n.children)
            : void 0;
        if (void 0 !== l) o.push(l);
        else
          for (let [e, r] of Object.entries(n)) {
            if ('children' === e) continue;
            let t = extractPathFromFlightRouterState(r);
            void 0 !== t && o.push(t);
          }
        return normalizeSegments(o);
      }
      function computeChangedPathImpl(e, r) {
        let [t, o] = e,
          [l, i] = r,
          s = segmentToPathname(t),
          c = segmentToPathname(l);
        if (
          a.INTERCEPTION_ROUTE_MARKERS.some(
            (e) => s.startsWith(e) || c.startsWith(e),
          )
        )
          return '';
        if (!(0, n.matchSegment)(t, l)) {
          var d;
          return null != (d = extractPathFromFlightRouterState(r)) ? d : '';
        }
        for (let e in o)
          if (i[e]) {
            let r = computeChangedPathImpl(o[e], i[e]);
            if (null !== r) return segmentToPathname(l) + '/' + r;
          }
        return null;
      }
      function computeChangedPath(e, r) {
        let t = computeChangedPathImpl(e, r);
        return null == t || '/' === t ? t : normalizeSegments(t.split('/'));
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1706: (e, r) => {
      'use strict';
      function createHrefFromUrl(e, r) {
        return (
          void 0 === r && (r = !0), e.pathname + e.search + (r ? e.hash : '')
        );
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'createHrefFromUrl', {
          enumerable: !0,
          get: function () {
            return createHrefFromUrl;
          },
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    9624: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'createInitialRouterState', {
          enumerable: !0,
          get: function () {
            return createInitialRouterState;
          },
        });
      let a = t(2428),
        o = t(1706),
        n = t(5929),
        l = t(6663);
      function createInitialRouterState(e) {
        var r;
        let {
            buildId: t,
            initialTree: i,
            children: s,
            initialCanonicalUrl: c,
            initialParallelRoutes: d,
            isServer: p,
            location: u,
            initialHead: f,
          } = e,
          y = {
            status: a.CacheStates.READY,
            data: null,
            subTreeData: s,
            parallelRoutes: p ? new Map() : d,
          };
        return (
          (null === d || 0 === d.size) &&
            (0, n.fillLazyItemsTillLeafWithHead)(y, void 0, i, f),
          {
            buildId: t,
            tree: i,
            cache: y,
            prefetchCache: new Map(),
            pushRef: { pendingPush: !1, mpaNavigation: !1 },
            focusAndScrollRef: {
              apply: !1,
              onlyHashChange: !1,
              hashFragment: null,
              segmentPaths: [],
            },
            canonicalUrl: u ? (0, o.createHrefFromUrl)(u) : c,
            nextUrl:
              null !=
              (r =
                (0, l.extractPathFromFlightRouterState)(i) ||
                (null == u ? void 0 : u.pathname))
                ? r
                : null,
          }
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    8775: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'createOptimisticTree', {
          enumerable: !0,
          get: function () {
            return createOptimisticTree;
          },
        });
      let a = t(4538);
      function createOptimisticTree(e, r, t) {
        let o;
        let [n, l, i, s, c] = r || [null, {}],
          d = e[0],
          p = 1 === e.length,
          u = null !== n && (0, a.matchSegment)(n, d),
          f = Object.keys(l).length > 1,
          y = !r || !u || f,
          b = {};
        if ((null !== n && u && (b = l), !p && !f)) {
          let r = createOptimisticTree(
            e.slice(1),
            b ? b.children : null,
            t || y,
          );
          o = r;
        }
        let m = [d, { ...b, ...(o ? { children: o } : {}) }];
        return (
          i && (m[2] = i),
          !t && y ? (m[3] = 'refetch') : u && s && (m[3] = s),
          u && c && (m[4] = c),
          m
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    8026: (e, r) => {
      'use strict';
      function createRecordFromThenable(e) {
        return (
          (e.status = 'pending'),
          e.then(
            (r) => {
              'pending' === e.status &&
                ((e.status = 'fulfilled'), (e.value = r));
            },
            (r) => {
              'pending' === e.status &&
                ((e.status = 'rejected'), (e.reason = r));
            },
          ),
          e
        );
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'createRecordFromThenable', {
          enumerable: !0,
          get: function () {
            return createRecordFromThenable;
          },
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    4701: (e, r) => {
      'use strict';
      function createRouterCacheKey(e, r) {
        return (
          void 0 === r && (r = !1),
          Array.isArray(e)
            ? (e[0] + '|' + e[1] + '|' + e[2]).toLowerCase()
            : r && e.startsWith('__PAGE__')
              ? '__PAGE__'
              : e
        );
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'createRouterCacheKey', {
          enumerable: !0,
          get: function () {
            return createRouterCacheKey;
          },
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    9102: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'fetchServerResponse', {
          enumerable: !0,
          get: function () {
            return fetchServerResponse;
          },
        });
      let a = t(4361),
        o = t(3724),
        n = t(5422),
        l = t(3678),
        i = t(755),
        s = t(5082),
        { createFromFetch: c } = t(2623);
      function doMpaNavigation(e) {
        return [(0, o.urlToUrlWithoutFlightMarker)(e).toString(), void 0];
      }
      async function fetchServerResponse(e, r, t, d, p) {
        let u = {
          [a.RSC]: '1',
          [a.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(r)),
        };
        p === l.PrefetchKind.AUTO && (u[a.NEXT_ROUTER_PREFETCH] = '1'),
          t && (u[a.NEXT_URL] = t);
        let f = (0, i.hexHash)(
          [
            u[a.NEXT_ROUTER_PREFETCH] || '0',
            u[a.NEXT_ROUTER_STATE_TREE],
            u[a.NEXT_URL],
          ].join(','),
        );
        try {
          let r = new URL(e);
          r.searchParams.set(a.NEXT_RSC_UNION_QUERY, f);
          let t = await fetch(r, { credentials: 'same-origin', headers: u }),
            l = (0, o.urlToUrlWithoutFlightMarker)(t.url),
            i = t.redirected ? l : void 0,
            p = t.headers.get('content-type') || '',
            y = !!t.headers.get(s.NEXT_DID_POSTPONE_HEADER);
          if (p !== a.RSC_CONTENT_TYPE_HEADER || !t.ok)
            return e.hash && (l.hash = e.hash), doMpaNavigation(l.toString());
          let [b, m] = await c(Promise.resolve(t), {
            callServer: n.callServer,
          });
          if (d !== b) return doMpaNavigation(t.url);
          return [m, i, y];
        } catch (r) {
          return (
            console.error(
              'Failed to fetch RSC payload for ' +
                e +
                '. Falling back to browser navigation.',
              r,
            ),
            [e.toString(), void 0]
          );
        }
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1924: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'fillCacheWithDataProperty', {
          enumerable: !0,
          get: function () {
            return fillCacheWithDataProperty;
          },
        });
      let a = t(2428),
        o = t(4701);
      function fillCacheWithDataProperty(e, r, t, n, l) {
        void 0 === l && (l = !1);
        let i = t.length <= 2,
          [s, c] = t,
          d = (0, o.createRouterCacheKey)(c),
          p = r.parallelRoutes.get(s);
        if (!p || (l && r.parallelRoutes.size > 1))
          return { bailOptimistic: !0 };
        let u = e.parallelRoutes.get(s);
        (u && u !== p) || ((u = new Map(p)), e.parallelRoutes.set(s, u));
        let f = p.get(d),
          y = u.get(d);
        if (i) {
          (y && y.data && y !== f) ||
            u.set(d, {
              status: a.CacheStates.DATA_FETCH,
              data: n(),
              subTreeData: null,
              parallelRoutes: new Map(),
            });
          return;
        }
        if (!y || !f) {
          y ||
            u.set(d, {
              status: a.CacheStates.DATA_FETCH,
              data: n(),
              subTreeData: null,
              parallelRoutes: new Map(),
            });
          return;
        }
        return (
          y === f &&
            ((y = {
              status: y.status,
              data: y.data,
              subTreeData: y.subTreeData,
              parallelRoutes: new Map(y.parallelRoutes),
            }),
            u.set(d, y)),
          fillCacheWithDataProperty(y, f, t.slice(2), n)
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    4059: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'fillCacheWithNewSubTreeData', {
          enumerable: !0,
          get: function () {
            return fillCacheWithNewSubTreeData;
          },
        });
      let a = t(2428),
        o = t(2582),
        n = t(5929),
        l = t(4701);
      function fillCacheWithNewSubTreeData(e, r, t, i) {
        let s = t.length <= 5,
          [c, d] = t,
          p = (0, l.createRouterCacheKey)(d),
          u = r.parallelRoutes.get(c);
        if (!u) return;
        let f = e.parallelRoutes.get(c);
        (f && f !== u) || ((f = new Map(u)), e.parallelRoutes.set(c, f));
        let y = u.get(p),
          b = f.get(p);
        if (s) {
          (b && b.data && b !== y) ||
            ((b = {
              status: a.CacheStates.READY,
              data: null,
              subTreeData: t[3],
              parallelRoutes: y ? new Map(y.parallelRoutes) : new Map(),
            }),
            y && (0, o.invalidateCacheByRouterState)(b, y, t[2]),
            (0, n.fillLazyItemsTillLeafWithHead)(b, y, t[2], t[4], i),
            f.set(p, b));
          return;
        }
        b &&
          y &&
          (b === y &&
            ((b = {
              status: b.status,
              data: b.data,
              subTreeData: b.subTreeData,
              parallelRoutes: new Map(b.parallelRoutes),
            }),
            f.set(p, b)),
          fillCacheWithNewSubTreeData(b, y, t.slice(2), i));
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    5929: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'fillLazyItemsTillLeafWithHead', {
          enumerable: !0,
          get: function () {
            return fillLazyItemsTillLeafWithHead;
          },
        });
      let a = t(2428),
        o = t(4701);
      function fillLazyItemsTillLeafWithHead(e, r, t, n, l) {
        let i = 0 === Object.keys(t[1]).length;
        if (i) {
          e.head = n;
          return;
        }
        for (let i in t[1]) {
          let s = t[1][i],
            c = s[0],
            d = (0, o.createRouterCacheKey)(c);
          if (r) {
            let t = r.parallelRoutes.get(i);
            if (t) {
              let r = new Map(t),
                o = r.get(d),
                c =
                  l && o
                    ? {
                        status: o.status,
                        data: o.data,
                        subTreeData: o.subTreeData,
                        parallelRoutes: new Map(o.parallelRoutes),
                      }
                    : {
                        status: a.CacheStates.LAZY_INITIALIZED,
                        data: null,
                        subTreeData: null,
                        parallelRoutes: new Map(
                          null == o ? void 0 : o.parallelRoutes,
                        ),
                      };
              r.set(d, c),
                fillLazyItemsTillLeafWithHead(c, o, s, n, l),
                e.parallelRoutes.set(i, r);
              continue;
            }
          }
          let p = {
              status: a.CacheStates.LAZY_INITIALIZED,
              data: null,
              subTreeData: null,
              parallelRoutes: new Map(),
            },
            u = e.parallelRoutes.get(i);
          u ? u.set(d, p) : e.parallelRoutes.set(i, new Map([[d, p]])),
            fillLazyItemsTillLeafWithHead(p, void 0, s, n, l);
        }
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    6699: (e, r) => {
      'use strict';
      var t;
      function getPrefetchEntryCacheStatus(e) {
        let { kind: r, prefetchTime: t, lastUsedTime: a } = e;
        return Date.now() < (null != a ? a : t) + 3e4
          ? a
            ? 'reusable'
            : 'fresh'
          : 'auto' === r && Date.now() < t + 3e5
            ? 'stale'
            : 'full' === r && Date.now() < t + 3e5
              ? 'reusable'
              : 'expired';
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          PrefetchCacheEntryStatus: function () {
            return t;
          },
          getPrefetchEntryCacheStatus: function () {
            return getPrefetchEntryCacheStatus;
          },
        }),
        (function (e) {
          (e.fresh = 'fresh'),
            (e.reusable = 'reusable'),
            (e.expired = 'expired'),
            (e.stale = 'stale');
        })(t || (t = {})),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    3466: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'handleMutable', {
          enumerable: !0,
          get: function () {
            return handleMutable;
          },
        });
      let a = t(6663);
      function handleMutable(e, r) {
        var t, o, n, l;
        let i = null == (o = r.shouldScroll) || o;
        return {
          buildId: e.buildId,
          canonicalUrl:
            null != r.canonicalUrl
              ? r.canonicalUrl === e.canonicalUrl
                ? e.canonicalUrl
                : r.canonicalUrl
              : e.canonicalUrl,
          pushRef: {
            pendingPush:
              null != r.pendingPush ? r.pendingPush : e.pushRef.pendingPush,
            mpaNavigation:
              null != r.mpaNavigation
                ? r.mpaNavigation
                : e.pushRef.mpaNavigation,
          },
          focusAndScrollRef: {
            apply:
              !!i &&
              ((null == r ? void 0 : r.scrollableSegments) !== void 0 ||
                e.focusAndScrollRef.apply),
            onlyHashChange:
              !!r.hashFragment &&
              e.canonicalUrl.split('#', 1)[0] ===
                (null == (t = r.canonicalUrl) ? void 0 : t.split('#', 1)[0]),
            hashFragment: i
              ? r.hashFragment && '' !== r.hashFragment
                ? decodeURIComponent(r.hashFragment.slice(1))
                : e.focusAndScrollRef.hashFragment
              : null,
            segmentPaths: i
              ? null != (n = null == r ? void 0 : r.scrollableSegments)
                ? n
                : e.focusAndScrollRef.segmentPaths
              : [],
          },
          cache: r.cache ? r.cache : e.cache,
          prefetchCache: r.prefetchCache ? r.prefetchCache : e.prefetchCache,
          tree: void 0 !== r.patchedTree ? r.patchedTree : e.tree,
          nextUrl:
            void 0 !== r.patchedTree
              ? null != (l = (0, a.computeChangedPath)(e.tree, r.patchedTree))
                ? l
                : e.canonicalUrl
              : e.nextUrl,
        };
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1986: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'invalidateCacheBelowFlightSegmentPath', {
          enumerable: !0,
          get: function () {
            return invalidateCacheBelowFlightSegmentPath;
          },
        });
      let a = t(4701);
      function invalidateCacheBelowFlightSegmentPath(e, r, t) {
        let o = t.length <= 2,
          [n, l] = t,
          i = (0, a.createRouterCacheKey)(l),
          s = r.parallelRoutes.get(n);
        if (!s) return;
        let c = e.parallelRoutes.get(n);
        if (
          ((c && c !== s) || ((c = new Map(s)), e.parallelRoutes.set(n, c)), o)
        ) {
          c.delete(i);
          return;
        }
        let d = s.get(i),
          p = c.get(i);
        p &&
          d &&
          (p === d &&
            ((p = {
              status: p.status,
              data: p.data,
              subTreeData: p.subTreeData,
              parallelRoutes: new Map(p.parallelRoutes),
            }),
            c.set(i, p)),
          invalidateCacheBelowFlightSegmentPath(p, d, t.slice(2)));
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    2582: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'invalidateCacheByRouterState', {
          enumerable: !0,
          get: function () {
            return invalidateCacheByRouterState;
          },
        });
      let a = t(4701);
      function invalidateCacheByRouterState(e, r, t) {
        for (let o in t[1]) {
          let n = t[1][o][0],
            l = (0, a.createRouterCacheKey)(n),
            i = r.parallelRoutes.get(o);
          if (i) {
            let r = new Map(i);
            r.delete(l), e.parallelRoutes.set(o, r);
          }
        }
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    145: (e, r) => {
      'use strict';
      function isNavigatingToNewRootLayout(e, r) {
        let t = e[0],
          a = r[0];
        if (Array.isArray(t) && Array.isArray(a)) {
          if (t[0] !== a[0] || t[2] !== a[2]) return !0;
        } else if (t !== a) return !0;
        if (e[4]) return !r[4];
        if (r[4]) return !0;
        let o = Object.values(e[1])[0],
          n = Object.values(r[1])[0];
        return !o || !n || isNavigatingToNewRootLayout(o, n);
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'isNavigatingToNewRootLayout', {
          enumerable: !0,
          get: function () {
            return isNavigatingToNewRootLayout;
          },
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    4879: (e, r) => {
      'use strict';
      function readRecordValue(e) {
        if ('fulfilled' === e.status) return e.value;
        throw e;
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'readRecordValue', {
          enumerable: !0,
          get: function () {
            return readRecordValue;
          },
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    2755: (e, r, t) => {
      'use strict';
      function fastRefreshReducerNoop(e, r) {
        return e;
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'fastRefreshReducer', {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        t(9102),
        t(8026),
        t(4879),
        t(1706),
        t(9605),
        t(145),
        t(8237),
        t(3466),
        t(1847);
      let a = fastRefreshReducerNoop;
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    2226: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'findHeadInCache', {
          enumerable: !0,
          get: function () {
            return findHeadInCache;
          },
        });
      let a = t(4701);
      function findHeadInCache(e, r) {
        let t = 0 === Object.keys(r).length;
        if (t) return e.head;
        for (let t in r) {
          let [o, n] = r[t],
            l = e.parallelRoutes.get(t);
          if (!l) continue;
          let i = (0, a.createRouterCacheKey)(o),
            s = l.get(i);
          if (!s) continue;
          let c = findHeadInCache(s, n);
          if (c) return c;
        }
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1275: (e, r) => {
      'use strict';
      function getSegmentValue(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'getSegmentValue', {
          enumerable: !0,
          get: function () {
            return getSegmentValue;
          },
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    8237: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          handleExternalUrl: function () {
            return handleExternalUrl;
          },
          navigateReducer: function () {
            return navigateReducer;
          },
        });
      let a = t(2428),
        o = t(9102),
        n = t(8026),
        l = t(4879),
        i = t(1706),
        s = t(1986),
        c = t(1924),
        d = t(8775),
        p = t(9605),
        u = t(4320),
        f = t(145),
        y = t(3678),
        b = t(3466),
        m = t(1847),
        g = t(6699),
        A = t(8155),
        h = t(1196);
      function handleExternalUrl(e, r, t, a) {
        return (
          (r.previousTree = e.tree),
          (r.mpaNavigation = !0),
          (r.canonicalUrl = t),
          (r.pendingPush = a),
          (r.scrollableSegments = void 0),
          (0, b.handleMutable)(e, r)
        );
      }
      function generateSegmentsFromPatch(e) {
        let r = [],
          [t, a] = e;
        if (0 === Object.keys(a).length) return [[t]];
        for (let [e, o] of Object.entries(a))
          for (let a of generateSegmentsFromPatch(o))
            '' === t ? r.push([e, ...a]) : r.push([t, e, ...a]);
        return r;
      }
      function addRefetchToLeafSegments(e, r, t, o, n) {
        let l = !1;
        (e.status = a.CacheStates.READY),
          (e.subTreeData = r.subTreeData),
          (e.parallelRoutes = new Map(r.parallelRoutes));
        let i = generateSegmentsFromPatch(o).map((e) => [...t, ...e]);
        for (let t of i) {
          let a = (0, c.fillCacheWithDataProperty)(e, r, t, n);
          (null == a ? void 0 : a.bailOptimistic) || (l = !0);
        }
        return l;
      }
      function navigateReducer(e, r) {
        let {
            url: t,
            isExternalUrl: v,
            navigateType: _,
            cache: P,
            mutable: w,
            forceOptimisticNavigation: k,
            shouldScroll: S,
          } = r,
          { pathname: x, hash: j } = t,
          R = (0, i.createHrefFromUrl)(t),
          E = 'push' === _;
        (0, A.prunePrefetchCache)(e.prefetchCache);
        let O = JSON.stringify(w.previousTree) === JSON.stringify(e.tree);
        if (O) return (0, b.handleMutable)(e, w);
        if (v) return handleExternalUrl(e, w, t.toString(), E);
        let C = e.prefetchCache.get((0, i.createHrefFromUrl)(t, !1));
        if (k && (null == C ? void 0 : C.kind) !== y.PrefetchKind.TEMPORARY) {
          let r = x.split('/');
          r.push('__PAGE__');
          let l = (0, d.createOptimisticTree)(r, e.tree, !1),
            s = { ...P };
          (s.status = a.CacheStates.READY),
            (s.subTreeData = e.cache.subTreeData),
            (s.parallelRoutes = new Map(e.cache.parallelRoutes));
          let p = null,
            u = r
              .slice(1)
              .map((e) => ['children', e])
              .flat(),
            f = (0, c.fillCacheWithDataProperty)(
              s,
              e.cache,
              u,
              () => (
                p ||
                  (p = (0, n.createRecordFromThenable)(
                    (0, o.fetchServerResponse)(t, l, e.nextUrl, e.buildId),
                  )),
                p
              ),
              !0,
            );
          if (!(null == f ? void 0 : f.bailOptimistic))
            return (
              (w.previousTree = e.tree),
              (w.patchedTree = l),
              (w.pendingPush = E),
              (w.hashFragment = j),
              (w.shouldScroll = S),
              (w.scrollableSegments = []),
              (w.cache = s),
              (w.canonicalUrl = R),
              e.prefetchCache.set((0, i.createHrefFromUrl)(t, !1), {
                data: p
                  ? (0, n.createRecordFromThenable)(Promise.resolve(p))
                  : null,
                kind: y.PrefetchKind.TEMPORARY,
                prefetchTime: Date.now(),
                treeAtTimeOfPrefetch: e.tree,
                lastUsedTime: Date.now(),
              }),
              (0, b.handleMutable)(e, w)
            );
        }
        if (!C) {
          let r = (0, n.createRecordFromThenable)(
              (0, o.fetchServerResponse)(
                t,
                e.tree,
                e.nextUrl,
                e.buildId,
                void 0,
              ),
            ),
            a = {
              data: (0, n.createRecordFromThenable)(Promise.resolve(r)),
              kind: y.PrefetchKind.TEMPORARY,
              prefetchTime: Date.now(),
              treeAtTimeOfPrefetch: e.tree,
              lastUsedTime: null,
            };
          e.prefetchCache.set((0, i.createHrefFromUrl)(t, !1), a), (C = a);
        }
        let T = (0, g.getPrefetchEntryCacheStatus)(C),
          { treeAtTimeOfPrefetch: M, data: N } = C;
        h.prefetchQueue.bump(N);
        let [D, I, L] = (0, l.readRecordValue)(N);
        if (
          (C.lastUsedTime || (C.lastUsedTime = Date.now()),
          'string' == typeof D)
        )
          return handleExternalUrl(e, w, D, E);
        let z = e.tree,
          F = e.cache,
          U = [];
        for (let r of D) {
          let l = r.slice(0, -4),
            i = r.slice(-3)[0],
            c = ['', ...l],
            d = (0, p.applyRouterStatePatchToTree)(c, z, i);
          if (
            (null === d && (d = (0, p.applyRouterStatePatchToTree)(c, M, i)),
            null !== d)
          ) {
            if ((0, f.isNavigatingToNewRootLayout)(z, d))
              return handleExternalUrl(e, w, R, E);
            let p =
              !L &&
              (0, m.applyFlightData)(
                F,
                P,
                r,
                'auto' === C.kind && T === g.PrefetchCacheEntryStatus.reusable,
              );
            p ||
              T !== g.PrefetchCacheEntryStatus.stale ||
              (p = addRefetchToLeafSegments(P, F, l, i, () =>
                (0, n.createRecordFromThenable)(
                  (0, o.fetchServerResponse)(t, z, e.nextUrl, e.buildId),
                ),
              ));
            let y = (0, u.shouldHardNavigate)(c, z);
            for (let e of (y
              ? ((P.status = a.CacheStates.READY),
                (P.subTreeData = F.subTreeData),
                (0, s.invalidateCacheBelowFlightSegmentPath)(P, F, l),
                (w.cache = P))
              : p && (w.cache = P),
            (F = P),
            (z = d),
            generateSegmentsFromPatch(i))) {
              let r = [...l, ...e];
              '__DEFAULT__' !== r[r.length - 1] && U.push(r);
            }
          }
        }
        return (
          (w.previousTree = e.tree),
          (w.patchedTree = z),
          (w.canonicalUrl = I ? (0, i.createHrefFromUrl)(I) : R),
          (w.pendingPush = E),
          (w.scrollableSegments = U),
          (w.hashFragment = j),
          (w.shouldScroll = S),
          (0, b.handleMutable)(e, w)
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1196: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          prefetchQueue: function () {
            return d;
          },
          prefetchReducer: function () {
            return prefetchReducer;
          },
        });
      let a = t(1706),
        o = t(9102),
        n = t(3678),
        l = t(8026),
        i = t(8155),
        s = t(4361),
        c = t(8862),
        d = new c.PromiseQueue(5);
      function prefetchReducer(e, r) {
        (0, i.prunePrefetchCache)(e.prefetchCache);
        let { url: t } = r;
        t.searchParams.delete(s.NEXT_RSC_UNION_QUERY);
        let c = (0, a.createHrefFromUrl)(t, !1),
          p = e.prefetchCache.get(c);
        if (
          p &&
          (p.kind === n.PrefetchKind.TEMPORARY &&
            e.prefetchCache.set(c, { ...p, kind: r.kind }),
          !(p.kind === n.PrefetchKind.AUTO && r.kind === n.PrefetchKind.FULL))
        )
          return e;
        let u = (0, l.createRecordFromThenable)(
          d.enqueue(() =>
            (0, o.fetchServerResponse)(t, e.tree, e.nextUrl, e.buildId, r.kind),
          ),
        );
        return (
          e.prefetchCache.set(c, {
            treeAtTimeOfPrefetch: e.tree,
            data: u,
            kind: r.kind,
            prefetchTime: Date.now(),
            lastUsedTime: null,
          }),
          e
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    8155: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'prunePrefetchCache', {
          enumerable: !0,
          get: function () {
            return prunePrefetchCache;
          },
        });
      let a = t(6699);
      function prunePrefetchCache(e) {
        for (let [r, t] of e)
          (0, a.getPrefetchEntryCacheStatus)(t) ===
            a.PrefetchCacheEntryStatus.expired && e.delete(r);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    8038: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'refreshReducer', {
          enumerable: !0,
          get: function () {
            return refreshReducer;
          },
        });
      let a = t(9102),
        o = t(8026),
        n = t(4879),
        l = t(1706),
        i = t(9605),
        s = t(145),
        c = t(8237),
        d = t(3466),
        p = t(2428),
        u = t(5929);
      function refreshReducer(e, r) {
        let { cache: t, mutable: f, origin: y } = r,
          b = e.canonicalUrl,
          m = e.tree,
          g = JSON.stringify(f.previousTree) === JSON.stringify(m);
        if (g) return (0, d.handleMutable)(e, f);
        t.data ||
          (t.data = (0, o.createRecordFromThenable)(
            (0, a.fetchServerResponse)(
              new URL(b, y),
              [m[0], m[1], m[2], 'refetch'],
              e.nextUrl,
              e.buildId,
            ),
          ));
        let [A, h] = (0, n.readRecordValue)(t.data);
        if ('string' == typeof A)
          return (0, c.handleExternalUrl)(e, f, A, e.pushRef.pendingPush);
        for (let r of ((t.data = null), A)) {
          if (3 !== r.length) return console.log('REFRESH FAILED'), e;
          let [a] = r,
            o = (0, i.applyRouterStatePatchToTree)([''], m, a);
          if (null === o) throw Error('SEGMENT MISMATCH');
          if ((0, s.isNavigatingToNewRootLayout)(m, o))
            return (0, c.handleExternalUrl)(e, f, b, e.pushRef.pendingPush);
          let n = h ? (0, l.createHrefFromUrl)(h) : void 0;
          h && (f.canonicalUrl = n);
          let [d, y] = r.slice(-2);
          null !== d &&
            ((t.status = p.CacheStates.READY),
            (t.subTreeData = d),
            (0, u.fillLazyItemsTillLeafWithHead)(t, void 0, a, y),
            (f.cache = t),
            (f.prefetchCache = new Map())),
            (f.previousTree = m),
            (f.patchedTree = o),
            (f.canonicalUrl = b),
            (m = o);
        }
        return (0, d.handleMutable)(e, f);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    2910: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'restoreReducer', {
          enumerable: !0,
          get: function () {
            return restoreReducer;
          },
        });
      let a = t(1706);
      function restoreReducer(e, r) {
        let { url: t, tree: o } = r,
          n = (0, a.createHrefFromUrl)(t);
        return {
          buildId: e.buildId,
          canonicalUrl: n,
          pushRef: e.pushRef,
          focusAndScrollRef: e.focusAndScrollRef,
          cache: e.cache,
          prefetchCache: e.prefetchCache,
          tree: o,
          nextUrl: t.pathname,
        };
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    9747: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'serverActionReducer', {
          enumerable: !0,
          get: function () {
            return serverActionReducer;
          },
        });
      let a = t(5422),
        o = t(4361),
        n = t(8026),
        l = t(4879),
        i = t(6879),
        s = t(1706),
        c = t(8237),
        d = t(9605),
        p = t(145),
        u = t(2428),
        f = t(3466),
        y = t(5929),
        { createFromFetch: b, encodeReply: m } = t(2623);
      async function fetchServerAction(e, r) {
        let t,
          { actionId: n, actionArgs: l } = r,
          s = await m(l),
          c = await fetch('', {
            method: 'POST',
            headers: {
              Accept: o.RSC_CONTENT_TYPE_HEADER,
              [o.ACTION]: n,
              [o.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(
                JSON.stringify(e.tree),
              ),
              ...(e.nextUrl ? { [o.NEXT_URL]: e.nextUrl } : {}),
            },
            body: s,
          }),
          d = c.headers.get('x-action-redirect');
        try {
          let e = JSON.parse(
            c.headers.get('x-action-revalidated') || '[[],0,0]',
          );
          t = { paths: e[0] || [], tag: !!e[1], cookie: e[2] };
        } catch (e) {
          t = { paths: [], tag: !1, cookie: !1 };
        }
        let p = d
          ? new URL(
              (0, i.addBasePath)(d),
              new URL(e.canonicalUrl, window.location.href),
            )
          : void 0;
        if (c.headers.get('content-type') === o.RSC_CONTENT_TYPE_HEADER) {
          let e = await b(Promise.resolve(c), { callServer: a.callServer });
          if (d) {
            let [, r] = null != e ? e : [];
            return {
              actionFlightData: r,
              redirectLocation: p,
              revalidatedParts: t,
            };
          }
          let [r, [, o]] = null != e ? e : [];
          return {
            actionResult: r,
            actionFlightData: o,
            redirectLocation: p,
            revalidatedParts: t,
          };
        }
        return { redirectLocation: p, revalidatedParts: t };
      }
      function serverActionReducer(e, r) {
        let { mutable: t, cache: a, resolve: o, reject: i } = r,
          b = e.canonicalUrl,
          m = e.tree,
          g = JSON.stringify(t.previousTree) === JSON.stringify(m);
        if (g) return (0, f.handleMutable)(e, t);
        if (t.inFlightServerAction) {
          if (
            'fulfilled' !== t.inFlightServerAction.status &&
            t.globalMutable.pendingNavigatePath &&
            t.globalMutable.pendingNavigatePath !== b
          )
            return (
              t.inFlightServerAction.then(
                () => {
                  t.actionResultResolved ||
                    ((t.inFlightServerAction = null),
                    (t.globalMutable.pendingNavigatePath = void 0),
                    t.globalMutable.refresh(),
                    (t.actionResultResolved = !0));
                },
                () => {},
              ),
              e
            );
        } else
          t.inFlightServerAction = (0, n.createRecordFromThenable)(
            fetchServerAction(e, r),
          );
        try {
          let {
            actionResult: r,
            actionFlightData: n,
            redirectLocation: i,
          } = (0, l.readRecordValue)(t.inFlightServerAction);
          if (
            (i && ((e.pushRef.pendingPush = !0), (t.pendingPush = !0)),
            (t.previousTree = e.tree),
            !n)
          ) {
            if (
              (t.actionResultResolved || (o(r), (t.actionResultResolved = !0)),
              i)
            )
              return (0, c.handleExternalUrl)(
                e,
                t,
                i.href,
                e.pushRef.pendingPush,
              );
            return e;
          }
          if ('string' == typeof n)
            return (0, c.handleExternalUrl)(e, t, n, e.pushRef.pendingPush);
          for (let r of ((t.inFlightServerAction = null), n)) {
            if (3 !== r.length)
              return console.log('SERVER ACTION APPLY FAILED'), e;
            let [o] = r,
              n = (0, d.applyRouterStatePatchToTree)([''], m, o);
            if (null === n) throw Error('SEGMENT MISMATCH');
            if ((0, p.isNavigatingToNewRootLayout)(m, n))
              return (0, c.handleExternalUrl)(e, t, b, e.pushRef.pendingPush);
            let [l, i] = r.slice(-2);
            null !== l &&
              ((a.status = u.CacheStates.READY),
              (a.subTreeData = l),
              (0, y.fillLazyItemsTillLeafWithHead)(a, void 0, o, i),
              (t.cache = a),
              (t.prefetchCache = new Map())),
              (t.previousTree = m),
              (t.patchedTree = n),
              (t.canonicalUrl = b),
              (m = n);
          }
          if (i) {
            let e = (0, s.createHrefFromUrl)(i, !1);
            t.canonicalUrl = e;
          }
          return (
            t.actionResultResolved || (o(r), (t.actionResultResolved = !0)),
            (0, f.handleMutable)(e, t)
          );
        } catch (r) {
          if ('rejected' === r.status)
            return (
              t.actionResultResolved ||
                (i(r.reason), (t.actionResultResolved = !0)),
              e
            );
          throw r;
        }
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    9794: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'serverPatchReducer', {
          enumerable: !0,
          get: function () {
            return serverPatchReducer;
          },
        });
      let a = t(1706),
        o = t(9605),
        n = t(145),
        l = t(8237),
        i = t(1847),
        s = t(3466);
      function serverPatchReducer(e, r) {
        let {
            flightData: t,
            previousTree: c,
            overrideCanonicalUrl: d,
            cache: p,
            mutable: u,
          } = r,
          f = JSON.stringify(c) === JSON.stringify(e.tree);
        if (!f) return console.log('TREE MISMATCH'), e;
        if (u.previousTree) return (0, s.handleMutable)(e, u);
        if ('string' == typeof t)
          return (0, l.handleExternalUrl)(e, u, t, e.pushRef.pendingPush);
        let y = e.tree,
          b = e.cache;
        for (let r of t) {
          let t = r.slice(0, -4),
            [s] = r.slice(-3, -2),
            c = (0, o.applyRouterStatePatchToTree)(['', ...t], y, s);
          if (null === c) throw Error('SEGMENT MISMATCH');
          if ((0, n.isNavigatingToNewRootLayout)(y, c))
            return (0, l.handleExternalUrl)(
              e,
              u,
              e.canonicalUrl,
              e.pushRef.pendingPush,
            );
          let f = d ? (0, a.createHrefFromUrl)(d) : void 0;
          f && (u.canonicalUrl = f),
            (0, i.applyFlightData)(b, p, r),
            (u.previousTree = y),
            (u.patchedTree = c),
            (u.cache = p),
            (b = p),
            (y = c);
        }
        return (0, s.handleMutable)(e, u);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    3678: (e, r) => {
      'use strict';
      var t;
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          PrefetchKind: function () {
            return t;
          },
          ACTION_REFRESH: function () {
            return a;
          },
          ACTION_NAVIGATE: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return n;
          },
          ACTION_SERVER_PATCH: function () {
            return l;
          },
          ACTION_PREFETCH: function () {
            return i;
          },
          ACTION_FAST_REFRESH: function () {
            return s;
          },
          ACTION_SERVER_ACTION: function () {
            return c;
          },
        });
      let a = 'refresh',
        o = 'navigate',
        n = 'restore',
        l = 'server-patch',
        i = 'prefetch',
        s = 'fast-refresh',
        c = 'server-action';
      (function (e) {
        (e.AUTO = 'auto'), (e.FULL = 'full'), (e.TEMPORARY = 'temporary');
      })(t || (t = {})),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    7986: (e, r, t) => {
      'use strict';
      function serverReducer(e, r) {
        return e;
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'reducer', {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        t(3678),
        t(8237),
        t(9794),
        t(2910),
        t(8038),
        t(1196),
        t(2755),
        t(9747);
      let a = serverReducer;
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    4320: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'shouldHardNavigate', {
          enumerable: !0,
          get: function () {
            return shouldHardNavigate;
          },
        });
      let a = t(4538);
      function shouldHardNavigate(e, r) {
        let [t, o] = r,
          [n, l] = e;
        if (!(0, a.matchSegment)(n, t)) return !!Array.isArray(n);
        let i = e.length <= 2;
        return !i && shouldHardNavigate(e.slice(2), o[l]);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    3032: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'createSearchParamsBailoutProxy', {
          enumerable: !0,
          get: function () {
            return createSearchParamsBailoutProxy;
          },
        });
      let a = t(1492);
      function createSearchParamsBailoutProxy() {
        return new Proxy(
          {},
          {
            get(e, r) {
              'string' == typeof r &&
                (0, a.staticGenerationBailout)('searchParams.' + r);
            },
          },
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1492: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'staticGenerationBailout', {
          enumerable: !0,
          get: function () {
            return staticGenerationBailout;
          },
        });
      let a = t(5171),
        o = t(3094),
        n = t(4749);
      let StaticGenBailoutError = class StaticGenBailoutError extends Error {
        constructor(...e) {
          super(...e), (this.code = 'NEXT_STATIC_GEN_BAILOUT');
        }
      };
      function formatErrorMessage(e, r) {
        let { dynamic: t, link: a } = r || {};
        return (
          'Page' +
          (t ? ' with `dynamic = "' + t + '"`' : '') +
          " couldn't be rendered statically because it used `" +
          e +
          '`.' +
          (a ? ' See more info here: ' + a : '')
        );
      }
      let staticGenerationBailout = (e, r) => {
        let t = n.staticGenerationAsyncStorage.getStore();
        if (!t) return !1;
        if (t.forceStatic) return !0;
        if (t.dynamicShouldError) {
          var l;
          throw new StaticGenBailoutError(
            formatErrorMessage(e, {
              ...r,
              dynamic:
                null != (l = null == r ? void 0 : r.dynamic) ? l : 'error',
            }),
          );
        }
        let i = formatErrorMessage(e, {
          ...r,
          link: 'https://nextjs.org/docs/messages/dynamic-server-error',
        });
        if (
          ((0, o.maybePostpone)(t, i),
          (t.revalidate = 0),
          (null == r ? void 0 : r.dynamic) || (t.staticPrefetchBailout = !0),
          t.isStaticGeneration)
        ) {
          let r = new a.DynamicServerError(i);
          throw (
            ((t.dynamicUsageDescription = e),
            (t.dynamicUsageStack = r.stack),
            r)
          );
        }
        return !1;
      };
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    8898: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'default', {
          enumerable: !0,
          get: function () {
            return StaticGenerationSearchParamsBailoutProvider;
          },
        });
      let a = t(2300),
        o = a._(t(9885)),
        n = t(3032);
      function StaticGenerationSearchParamsBailoutProvider(e) {
        let { Component: r, propsForComponent: t, isStaticGeneration: a } = e;
        if (a) {
          let e = (0, n.createSearchParamsBailoutProxy)();
          return o.default.createElement(r, { searchParams: e, ...t });
        }
        return o.default.createElement(r, t);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    9236: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'useReducerWithReduxDevtools', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let a = t(9885);
      function useReducerWithReduxDevtoolsNoop(e, r) {
        let [t, o] = (0, a.useReducer)(e, r);
        return [t, o, () => {}];
      }
      let o = useReducerWithReduxDevtoolsNoop;
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    9760: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'hasBasePath', {
          enumerable: !0,
          get: function () {
            return hasBasePath;
          },
        });
      let a = t(6364);
      function hasBasePath(e) {
        return (0, a.pathHasPrefix)(e, '');
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    6945: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'normalizePathTrailingSlash', {
          enumerable: !0,
          get: function () {
            return normalizePathTrailingSlash;
          },
        });
      let a = t(6923),
        o = t(5525),
        normalizePathTrailingSlash = (e) => {
          if (!e.startsWith('/')) return e;
          let { pathname: r, query: t, hash: n } = (0, o.parsePath)(e);
          return '' + (0, a.removeTrailingSlash)(r) + t + n;
        };
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    4978: (e, r, t) => {
      'use strict';
      function removeBasePath(e) {
        return e;
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'removeBasePath', {
          enumerable: !0,
          get: function () {
            return removeBasePath;
          },
        }),
        t(9760),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    755: (e, r) => {
      'use strict';
      function djb2Hash(e) {
        let r = 5381;
        for (let t = 0; t < e.length; t++) {
          let a = e.charCodeAt(t);
          r = (r << 5) + r + a;
        }
        return Math.abs(r);
      }
      function hexHash(e) {
        return djb2Hash(e).toString(36).slice(0, 5);
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          djb2Hash: function () {
            return djb2Hash;
          },
          hexHash: function () {
            return hexHash;
          },
        });
    },
    1118: (e, r) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          NEXT_DYNAMIC_NO_SSR_CODE: function () {
            return t;
          },
          throwWithNoSSR: function () {
            return throwWithNoSSR;
          },
        });
      let t = 'NEXT_DYNAMIC_NO_SSR_CODE';
      function throwWithNoSSR() {
        let e = Error(t);
        throw ((e.digest = t), e);
      }
    },
    1518: (e, r) => {
      'use strict';
      function ensureLeadingSlash(e) {
        return e.startsWith('/') ? e : '/' + e;
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'ensureLeadingSlash', {
          enumerable: !0,
          get: function () {
            return ensureLeadingSlash;
          },
        });
    },
    8549: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'addPathPrefix', {
          enumerable: !0,
          get: function () {
            return addPathPrefix;
          },
        });
      let a = t(5525);
      function addPathPrefix(e, r) {
        if (!e.startsWith('/') || !r) return e;
        let { pathname: t, query: o, hash: n } = (0, a.parsePath)(e);
        return '' + r + t + o + n;
      }
    },
    8321: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          normalizeAppPath: function () {
            return normalizeAppPath;
          },
          normalizeRscURL: function () {
            return normalizeRscURL;
          },
          normalizePostponedURL: function () {
            return normalizePostponedURL;
          },
        });
      let a = t(1518),
        o = t(392),
        n = t(7310);
      function normalizeAppPath(e) {
        return (0, a.ensureLeadingSlash)(
          e
            .split('/')
            .reduce(
              (e, r, t, a) =>
                !r ||
                (0, o.isGroupSegment)(r) ||
                '@' === r[0] ||
                (('page' === r || 'route' === r) && t === a.length - 1)
                  ? e
                  : e + '/' + r,
              '',
            ),
        );
      }
      function normalizeRscURL(e) {
        return e.replace(/\.rsc($|\?)/, '$1');
      }
      function normalizePostponedURL(e) {
        let r = (0, n.parse)(e),
          { pathname: t } = r;
        return t && t.startsWith('/_next/postponed')
          ? ((t = t.substring(16) || '/'), (0, n.format)({ ...r, pathname: t }))
          : e;
      }
    },
    4448: (e, r) => {
      'use strict';
      function handleSmoothScroll(e, r) {
        if ((void 0 === r && (r = {}), r.onlyHashChange)) {
          e();
          return;
        }
        let t = document.documentElement,
          a = t.style.scrollBehavior;
        (t.style.scrollBehavior = 'auto'),
          r.dontForceLayout || t.getClientRects(),
          e(),
          (t.style.scrollBehavior = a);
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'handleSmoothScroll', {
          enumerable: !0,
          get: function () {
            return handleSmoothScroll;
          },
        });
    },
    4692: (e, r) => {
      'use strict';
      function isBot(e) {
        return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(
          e,
        );
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'isBot', {
          enumerable: !0,
          get: function () {
            return isBot;
          },
        });
    },
    5525: (e, r) => {
      'use strict';
      function parsePath(e) {
        let r = e.indexOf('#'),
          t = e.indexOf('?'),
          a = t > -1 && (r < 0 || t < r);
        return a || r > -1
          ? {
              pathname: e.substring(0, a ? t : r),
              query: a ? e.substring(t, r > -1 ? r : void 0) : '',
              hash: r > -1 ? e.slice(r) : '',
            }
          : { pathname: e, query: '', hash: '' };
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'parsePath', {
          enumerable: !0,
          get: function () {
            return parsePath;
          },
        });
    },
    6364: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'pathHasPrefix', {
          enumerable: !0,
          get: function () {
            return pathHasPrefix;
          },
        });
      let a = t(5525);
      function pathHasPrefix(e, r) {
        if ('string' != typeof e) return !1;
        let { pathname: t } = (0, a.parsePath)(e);
        return t === r || t.startsWith(r + '/');
      }
    },
    6923: (e, r) => {
      'use strict';
      function removeTrailingSlash(e) {
        return e.replace(/\/$/, '') || '/';
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'removeTrailingSlash', {
          enumerable: !0,
          get: function () {
            return removeTrailingSlash;
          },
        });
    },
    392: (e, r) => {
      'use strict';
      function isGroupSegment(e) {
        return '(' === e[0] && e.endsWith(')');
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'isGroupSegment', {
          enumerable: !0,
          get: function () {
            return isGroupSegment;
          },
        });
    },
    6054: (e, r, t) => {
      'use strict';
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          r &&
            (a = a.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                _defineProperty(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
        }
        return e;
      }
      function _typeof(e) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function _classCallCheck(e, r) {
        if (!(e instanceof r))
          throw TypeError('Cannot call a class as a function');
      }
      function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
          var a = r[t];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function _createClass(e, r, t) {
        return (
          r && _defineProperties(e.prototype, r),
          t && _defineProperties(e, t),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function _defineProperty(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function _setPrototypeOf(e, r) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, r) {
            return (e.__proto__ = r), e;
          })(e, r);
      }
      function _slicedToArray(e, r) {
        return (
          _arrayWithHoles(e) ||
          _iterableToArrayLimit(e, r) ||
          _unsupportedIterableToArray(e, r) ||
          _nonIterableRest()
        );
      }
      function _toConsumableArray(e) {
        return (
          _arrayWithoutHoles(e) ||
          _iterableToArray(e) ||
          _unsupportedIterableToArray(e) ||
          _nonIterableSpread()
        );
      }
      function _arrayWithoutHoles(e) {
        if (Array.isArray(e)) return _arrayLikeToArray(e);
      }
      function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e;
      }
      function _iterableToArray(e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      function _iterableToArrayLimit(e, r) {
        var t,
          a,
          o =
            null == e
              ? null
              : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                e['@@iterator'];
        if (null != o) {
          var n = [],
            l = !0,
            i = !1;
          try {
            for (
              o = o.call(e);
              !(l = (t = o.next()).done) &&
              (n.push(t.value), !r || n.length !== r);
              l = !0
            );
          } catch (e) {
            (i = !0), (a = e);
          } finally {
            try {
              l || null == o.return || o.return();
            } finally {
              if (i) throw a;
            }
          }
          return n;
        }
      }
      function _unsupportedIterableToArray(e, r) {
        if (e) {
          if ('string' == typeof e) return _arrayLikeToArray(e, r);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ('Object' === t && e.constructor && (t = e.constructor.name),
            'Map' === t || 'Set' === t)
          )
            return Array.from(e);
          if (
            'Arguments' === t ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return _arrayLikeToArray(e, r);
        }
      }
      function _arrayLikeToArray(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, a = Array(r); t < r; t++) a[t] = e[t];
        return a;
      }
      function _nonIterableSpread() {
        throw TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function _nonIterableRest() {
        throw TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      t.d(r, { Qc: () => eL, qv: () => ez, vc: () => eI });
      var a,
        o,
        n,
        l,
        i,
        s,
        c,
        d,
        noop = function () {},
        p = {},
        u = {},
        f = null,
        y = { mark: noop, measure: noop };
      try {
        'undefined' != typeof document && (u = document),
          'undefined' != typeof MutationObserver && (f = MutationObserver),
          'undefined' != typeof performance && (y = performance);
      } catch (e) {}
      var b = (p.navigator || {}).userAgent,
        m = void 0 === b ? '' : b,
        g = u,
        A = f,
        h = y;
      p.document;
      var v =
          !!g.documentElement &&
          !!g.head &&
          'function' == typeof g.addEventListener &&
          'function' == typeof g.createElement,
        _ = ~m.indexOf('MSIE') || ~m.indexOf('Trident/'),
        P = '___FONT_AWESOME___',
        w = 'svg-inline--fa',
        k = 'data-fa-i2svg',
        S = 'data-fa-pseudo-element',
        x = 'data-prefix',
        j = 'data-icon',
        R = 'fontawesome-i2svg',
        E = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
        O = (function () {
          try {
            return !0;
          } catch (e) {
            return !1;
          }
        })(),
        C = 'classic',
        T = 'sharp',
        M = [C, T];
      function familyProxy(e) {
        return new Proxy(e, {
          get: function (e, r) {
            return r in e ? e[r] : e[C];
          },
        });
      }
      var N = familyProxy(
          (_defineProperty((a = {}), C, {
            fa: 'solid',
            fas: 'solid',
            'fa-solid': 'solid',
            far: 'regular',
            'fa-regular': 'regular',
            fal: 'light',
            'fa-light': 'light',
            fat: 'thin',
            'fa-thin': 'thin',
            fad: 'duotone',
            'fa-duotone': 'duotone',
            fab: 'brands',
            'fa-brands': 'brands',
            fak: 'kit',
            fakd: 'kit',
            'fa-kit': 'kit',
            'fa-kit-duotone': 'kit',
          }),
          _defineProperty(a, T, {
            fa: 'solid',
            fass: 'solid',
            'fa-solid': 'solid',
            fasr: 'regular',
            'fa-regular': 'regular',
            fasl: 'light',
            'fa-light': 'light',
            fast: 'thin',
            'fa-thin': 'thin',
          }),
          a),
        ),
        D = familyProxy(
          (_defineProperty((o = {}), C, {
            solid: 'fas',
            regular: 'far',
            light: 'fal',
            thin: 'fat',
            duotone: 'fad',
            brands: 'fab',
            kit: 'fak',
          }),
          _defineProperty(o, T, {
            solid: 'fass',
            regular: 'fasr',
            light: 'fasl',
            thin: 'fast',
          }),
          o),
        ),
        I = familyProxy(
          (_defineProperty((n = {}), C, {
            fab: 'fa-brands',
            fad: 'fa-duotone',
            fak: 'fa-kit',
            fal: 'fa-light',
            far: 'fa-regular',
            fas: 'fa-solid',
            fat: 'fa-thin',
          }),
          _defineProperty(n, T, {
            fass: 'fa-solid',
            fasr: 'fa-regular',
            fasl: 'fa-light',
            fast: 'fa-thin',
          }),
          n),
        ),
        L = familyProxy(
          (_defineProperty((l = {}), C, {
            'fa-brands': 'fab',
            'fa-duotone': 'fad',
            'fa-kit': 'fak',
            'fa-light': 'fal',
            'fa-regular': 'far',
            'fa-solid': 'fas',
            'fa-thin': 'fat',
          }),
          _defineProperty(l, T, {
            'fa-solid': 'fass',
            'fa-regular': 'fasr',
            'fa-light': 'fasl',
            'fa-thin': 'fast',
          }),
          l),
        ),
        z = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
        F = 'fa-layers-text',
        U =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
        H = familyProxy(
          (_defineProperty((i = {}), C, {
            900: 'fas',
            400: 'far',
            normal: 'far',
            300: 'fal',
            100: 'fat',
          }),
          _defineProperty(i, T, {
            900: 'fass',
            400: 'fasr',
            300: 'fasl',
            100: 'fast',
          }),
          i),
        ),
        W = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        B = W.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        G = [
          'class',
          'data-prefix',
          'data-icon',
          'data-fa-transform',
          'data-fa-mask',
        ],
        V = {
          GROUP: 'duotone-group',
          SWAP_OPACITY: 'swap-opacity',
          PRIMARY: 'primary',
          SECONDARY: 'secondary',
        },
        Y = new Set();
      Object.keys(D[C]).map(Y.add.bind(Y)),
        Object.keys(D[T]).map(Y.add.bind(Y));
      var q = []
          .concat(M, _toConsumableArray(Y), [
            '2xs',
            'xs',
            'sm',
            'lg',
            'xl',
            '2xl',
            'beat',
            'border',
            'fade',
            'beat-fade',
            'bounce',
            'flip-both',
            'flip-horizontal',
            'flip-vertical',
            'flip',
            'fw',
            'inverse',
            'layers-counter',
            'layers-text',
            'layers',
            'li',
            'pull-left',
            'pull-right',
            'pulse',
            'rotate-180',
            'rotate-270',
            'rotate-90',
            'rotate-by',
            'shake',
            'spin-pulse',
            'spin-reverse',
            'spin',
            'stack-1x',
            'stack-2x',
            'stack',
            'ul',
            V.GROUP,
            V.SWAP_OPACITY,
            V.PRIMARY,
            V.SECONDARY,
          ])
          .concat(
            W.map(function (e) {
              return ''.concat(e, 'x');
            }),
          )
          .concat(
            B.map(function (e) {
              return 'w-'.concat(e);
            }),
          ),
        X = p.FontAwesomeConfig || {};
      function getAttrConfig(e) {
        var r = g.querySelector('script[' + e + ']');
        if (r) return r.getAttribute(e);
      }
      function coerce(e) {
        return '' === e || ('false' !== e && ('true' === e || e));
      }
      g &&
        'function' == typeof g.querySelector &&
        [
          ['data-family-prefix', 'familyPrefix'],
          ['data-css-prefix', 'cssPrefix'],
          ['data-family-default', 'familyDefault'],
          ['data-style-default', 'styleDefault'],
          ['data-replacement-class', 'replacementClass'],
          ['data-auto-replace-svg', 'autoReplaceSvg'],
          ['data-auto-add-css', 'autoAddCss'],
          ['data-auto-a11y', 'autoA11y'],
          ['data-search-pseudo-elements', 'searchPseudoElements'],
          ['data-observe-mutations', 'observeMutations'],
          ['data-mutate-approach', 'mutateApproach'],
          ['data-keep-original-source', 'keepOriginalSource'],
          ['data-measure-performance', 'measurePerformance'],
          ['data-show-missing-icons', 'showMissingIcons'],
        ].forEach(function (e) {
          var r = _slicedToArray(e, 2),
            t = r[0],
            a = r[1],
            o = coerce(getAttrConfig(t));
          null != o && (X[a] = o);
        });
      var K = {
        styleDefault: 'solid',
        familyDefault: 'classic',
        cssPrefix: 'fa',
        replacementClass: w,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: 'async',
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      X.familyPrefix && (X.cssPrefix = X.familyPrefix);
      var $ = _objectSpread2(_objectSpread2({}, K), X);
      $.autoReplaceSvg || ($.observeMutations = !1);
      var Z = {};
      Object.keys(K).forEach(function (e) {
        Object.defineProperty(Z, e, {
          enumerable: !0,
          set: function (r) {
            ($[e] = r),
              J.forEach(function (e) {
                return e(Z);
              });
          },
          get: function () {
            return $[e];
          },
        });
      }),
        Object.defineProperty(Z, 'familyPrefix', {
          enumerable: !0,
          set: function (e) {
            ($.cssPrefix = e),
              J.forEach(function (e) {
                return e(Z);
              });
          },
          get: function () {
            return $.cssPrefix;
          },
        }),
        (p.FontAwesomeConfig = Z);
      var J = [];
      function onChange(e) {
        return (
          J.push(e),
          function () {
            J.splice(J.indexOf(e), 1);
          }
        );
      }
      var Q = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function insertCss(e) {
        if (e && v) {
          var r = g.createElement('style');
          r.setAttribute('type', 'text/css'), (r.innerHTML = e);
          for (
            var t = g.head.childNodes, a = null, o = t.length - 1;
            o > -1;
            o--
          ) {
            var n = t[o];
            ['STYLE', 'LINK'].indexOf((n.tagName || '').toUpperCase()) > -1 &&
              (a = n);
          }
          return g.head.insertBefore(r, a), e;
        }
      }
      function nextUniqueId() {
        for (var e = 12, r = ''; e-- > 0; )
          r += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[
            (62 * Math.random()) | 0
          ];
        return r;
      }
      function toArray(e) {
        for (var r = [], t = (e || []).length >>> 0; t--; ) r[t] = e[t];
        return r;
      }
      function classArray(e) {
        return e.classList
          ? toArray(e.classList)
          : (e.getAttribute('class') || '').split(' ').filter(function (e) {
              return e;
            });
      }
      function htmlEscape(e) {
        return ''
          .concat(e)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function joinAttributes(e) {
        return Object.keys(e || {})
          .reduce(function (r, t) {
            return r + ''.concat(t, '="').concat(htmlEscape(e[t]), '" ');
          }, '')
          .trim();
      }
      function joinStyles(e) {
        return Object.keys(e || {}).reduce(function (r, t) {
          return r + ''.concat(t, ': ').concat(e[t].trim(), ';');
        }, '');
      }
      function transformIsMeaningful(e) {
        return (
          e.size !== Q.size ||
          e.x !== Q.x ||
          e.y !== Q.y ||
          e.rotate !== Q.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      function transformForSvg(e) {
        var r = e.transform,
          t = e.containerWidth,
          a = e.iconWidth,
          o = 'translate('.concat(32 * r.x, ', ').concat(32 * r.y, ') '),
          n = 'scale('
            .concat((r.size / 16) * (r.flipX ? -1 : 1), ', ')
            .concat((r.size / 16) * (r.flipY ? -1 : 1), ') '),
          l = 'rotate('.concat(r.rotate, ' 0 0)'),
          i = { transform: ''.concat(o, ' ').concat(n, ' ').concat(l) };
        return {
          outer: { transform: 'translate('.concat(t / 2, ' 256)') },
          inner: i,
          path: { transform: 'translate('.concat(-((a / 2) * 1), ' -256)') },
        };
      }
      function transformForCss(e) {
        var r = e.transform,
          t = e.width,
          a = e.height,
          o = e.startCentered,
          n = void 0 !== o && o,
          l = '';
        return (
          n && _
            ? (l += 'translate('
                .concat(r.x / 16 - (void 0 === t ? 16 : t) / 2, 'em, ')
                .concat(r.y / 16 - (void 0 === a ? 16 : a) / 2, 'em) '))
            : n
              ? (l += 'translate(calc(-50% + '
                  .concat(r.x / 16, 'em), calc(-50% + ')
                  .concat(r.y / 16, 'em)) '))
              : (l += 'translate('
                  .concat(r.x / 16, 'em, ')
                  .concat(r.y / 16, 'em) ')),
          (l +=
            'scale('
              .concat((r.size / 16) * (r.flipX ? -1 : 1), ', ')
              .concat((r.size / 16) * (r.flipY ? -1 : 1), ') ') +
            'rotate('.concat(r.rotate, 'deg) '))
        );
      }
      function css() {
        var e = Z.cssPrefix,
          r = Z.replacementClass,
          t =
            ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
        if ('fa' !== e || r !== w) {
          var a = RegExp('\\.'.concat('fa', '\\-'), 'g'),
            o = RegExp('\\--'.concat('fa', '\\-'), 'g'),
            n = RegExp('\\.'.concat(w), 'g');
          t = t
            .replace(a, '.'.concat(e, '-'))
            .replace(o, '--'.concat(e, '-'))
            .replace(n, '.'.concat(r));
        }
        return t;
      }
      var ee = !1;
      function ensureCss() {
        Z.autoAddCss && !ee && (insertCss(css()), (ee = !0));
      }
      var er = p || {};
      er[P] || (er[P] = {}),
        er[P].styles || (er[P].styles = {}),
        er[P].hooks || (er[P].hooks = {}),
        er[P].shims || (er[P].shims = []);
      var et = er[P],
        ea = [],
        eo = !1;
      function domready(e) {
        v && (eo ? setTimeout(e, 0) : ea.push(e));
      }
      function toHtml(e) {
        var r = e.tag,
          t = e.attributes,
          a = e.children;
        return 'string' == typeof e
          ? htmlEscape(e)
          : '<'
              .concat(r, ' ')
              .concat(joinAttributes(void 0 === t ? {} : t), '>')
              .concat((void 0 === a ? [] : a).map(toHtml).join(''), '</')
              .concat(r, '>');
      }
      function iconFromMapping(e, r, t) {
        if (e && e[r] && e[r][t])
          return { prefix: r, iconName: t, icon: e[r][t] };
      }
      !v ||
        (eo = (
          g.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test(g.readyState)) ||
        g.addEventListener('DOMContentLoaded', function listener() {
          g.removeEventListener('DOMContentLoaded', listener),
            (eo = 1),
            ea.map(function (e) {
              return e();
            });
        });
      var reduce = function (e, r, t, a) {
        var o,
          n,
          l,
          i = Object.keys(e),
          s = i.length,
          c =
            void 0 !== a
              ? function (e, t, o, n) {
                  return r.call(a, e, t, o, n);
                }
              : r;
        for (
          void 0 === t ? ((o = 1), (l = e[i[0]])) : ((o = 0), (l = t));
          o < s;
          o++
        )
          l = c(l, e[(n = i[o])], n, e);
        return l;
      };
      function ucs2decode(e) {
        for (var r = [], t = 0, a = e.length; t < a; ) {
          var o = e.charCodeAt(t++);
          if (o >= 55296 && o <= 56319 && t < a) {
            var n = e.charCodeAt(t++);
            (64512 & n) == 56320
              ? r.push(((1023 & o) << 10) + (1023 & n) + 65536)
              : (r.push(o), t--);
          } else r.push(o);
        }
        return r;
      }
      function toHex(e) {
        var r = ucs2decode(e);
        return 1 === r.length ? r[0].toString(16) : null;
      }
      function codePointAt(e, r) {
        var t,
          a = e.length,
          o = e.charCodeAt(r);
        return o >= 55296 &&
          o <= 56319 &&
          a > r + 1 &&
          (t = e.charCodeAt(r + 1)) >= 56320 &&
          t <= 57343
          ? (o - 55296) * 1024 + t - 56320 + 65536
          : o;
      }
      function normalizeIcons(e) {
        return Object.keys(e).reduce(function (r, t) {
          var a = e[t];
          return a.icon ? (r[a.iconName] = a.icon) : (r[t] = a), r;
        }, {});
      }
      function defineIcons(e, r) {
        var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = t.skipHooks,
          o = normalizeIcons(r);
        'function' != typeof et.hooks.addPack || (void 0 !== a && a)
          ? (et.styles[e] = _objectSpread2(
              _objectSpread2({}, et.styles[e] || {}),
              o,
            ))
          : et.hooks.addPack(e, normalizeIcons(r)),
          'fas' === e && defineIcons('fa', r);
      }
      var en = et.styles,
        el = et.shims,
        ei =
          (_defineProperty((s = {}), C, Object.values(I[C])),
          _defineProperty(s, T, Object.values(I[T])),
          s),
        es = null,
        ec = {},
        ed = {},
        ep = {},
        eu = {},
        ef = {},
        ey =
          (_defineProperty((c = {}), C, Object.keys(N[C])),
          _defineProperty(c, T, Object.keys(N[T])),
          c);
      function isReserved(e) {
        return ~q.indexOf(e);
      }
      function getIconName(e, r) {
        var t = r.split('-'),
          a = t[0],
          o = t.slice(1).join('-');
        return a !== e || '' === o || isReserved(o) ? null : o;
      }
      var build = function () {
        var lookup = function (e) {
          return reduce(
            en,
            function (r, t, a) {
              return (r[a] = reduce(t, e, {})), r;
            },
            {},
          );
        };
        (ec = lookup(function (e, r, t) {
          return (
            r[3] && (e[r[3]] = t),
            r[2] &&
              r[2]
                .filter(function (e) {
                  return 'number' == typeof e;
                })
                .forEach(function (r) {
                  e[r.toString(16)] = t;
                }),
            e
          );
        })),
          (ed = lookup(function (e, r, t) {
            return (
              (e[t] = t),
              r[2] &&
                r[2]
                  .filter(function (e) {
                    return 'string' == typeof e;
                  })
                  .forEach(function (r) {
                    e[r] = t;
                  }),
              e
            );
          })),
          (ef = lookup(function (e, r, t) {
            var a = r[2];
            return (
              (e[t] = t),
              a.forEach(function (r) {
                e[r] = t;
              }),
              e
            );
          }));
        var e = 'far' in en || Z.autoFetchSvg,
          r = reduce(
            el,
            function (r, t) {
              var a = t[0],
                o = t[1],
                n = t[2];
              return (
                'far' !== o || e || (o = 'fas'),
                'string' == typeof a &&
                  (r.names[a] = { prefix: o, iconName: n }),
                'number' == typeof a &&
                  (r.unicodes[a.toString(16)] = { prefix: o, iconName: n }),
                r
              );
            },
            { names: {}, unicodes: {} },
          );
        (ep = r.names),
          (eu = r.unicodes),
          (es = getCanonicalPrefix(Z.styleDefault, {
            family: Z.familyDefault,
          }));
      };
      function byUnicode(e, r) {
        return (ec[e] || {})[r];
      }
      function byLigature(e, r) {
        return (ed[e] || {})[r];
      }
      function byAlias(e, r) {
        return (ef[e] || {})[r];
      }
      function byOldName(e) {
        return ep[e] || { prefix: null, iconName: null };
      }
      function byOldUnicode(e) {
        var r = eu[e],
          t = byUnicode('fas', e);
        return (
          r ||
          (t ? { prefix: 'fas', iconName: t } : null) || {
            prefix: null,
            iconName: null,
          }
        );
      }
      onChange(function (e) {
        es = getCanonicalPrefix(e.styleDefault, { family: Z.familyDefault });
      }),
        build();
      var emptyCanonicalIcon = function () {
        return { prefix: null, iconName: null, rest: [] };
      };
      function getCanonicalPrefix(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = r.family,
          a = void 0 === t ? C : t,
          o = N[a][e],
          n = D[a][e] || D[a][o],
          l = e in et.styles ? e : null;
        return n || l || null;
      }
      var eb =
        (_defineProperty((d = {}), C, Object.keys(I[C])),
        _defineProperty(d, T, Object.keys(I[T])),
        d);
      function getCanonicalIcon(e) {
        var r,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = t.skipLookups,
          o = void 0 !== a && a,
          n =
            (_defineProperty(
              (r = {}),
              C,
              ''.concat(Z.cssPrefix, '-').concat(C),
            ),
            _defineProperty(r, T, ''.concat(Z.cssPrefix, '-').concat(T)),
            r),
          l = null,
          i = C;
        (e.includes(n[C]) ||
          e.some(function (e) {
            return eb[C].includes(e);
          })) &&
          (i = C),
          (e.includes(n[T]) ||
            e.some(function (e) {
              return eb[T].includes(e);
            })) &&
            (i = T);
        var s = e.reduce(function (e, r) {
          var t = getIconName(Z.cssPrefix, r);
          if (
            (en[r]
              ? ((l = r = ei[i].includes(r) ? L[i][r] : r), (e.prefix = r))
              : ey[i].indexOf(r) > -1
                ? ((l = r), (e.prefix = getCanonicalPrefix(r, { family: i })))
                : t
                  ? (e.iconName = t)
                  : r !== Z.replacementClass &&
                    r !== n[C] &&
                    r !== n[T] &&
                    e.rest.push(r),
            !o && e.prefix && e.iconName)
          ) {
            var a = 'fa' === l ? byOldName(e.iconName) : {},
              s = byAlias(e.prefix, e.iconName);
            a.prefix && (l = null),
              (e.iconName = a.iconName || s || e.iconName),
              (e.prefix = a.prefix || e.prefix),
              'far' !== e.prefix ||
                en.far ||
                !en.fas ||
                Z.autoFetchSvg ||
                (e.prefix = 'fas');
          }
          return e;
        }, emptyCanonicalIcon());
        return (
          (e.includes('fa-brands') || e.includes('fab')) && (s.prefix = 'fab'),
          (e.includes('fa-duotone') || e.includes('fad')) && (s.prefix = 'fad'),
          !s.prefix &&
            i === T &&
            (en.fass || Z.autoFetchSvg) &&
            ((s.prefix = 'fass'),
            (s.iconName = byAlias(s.prefix, s.iconName) || s.iconName)),
          ('fa' === s.prefix || 'fa' === l) && (s.prefix = es || 'fas'),
          s
        );
      }
      var em = (function () {
          function Library() {
            _classCallCheck(this, Library), (this.definitions = {});
          }
          return (
            _createClass(Library, [
              {
                key: 'add',
                value: function () {
                  for (
                    var e = this, r = arguments.length, t = Array(r), a = 0;
                    a < r;
                    a++
                  )
                    t[a] = arguments[a];
                  var o = t.reduce(this._pullDefinitions, {});
                  Object.keys(o).forEach(function (r) {
                    (e.definitions[r] = _objectSpread2(
                      _objectSpread2({}, e.definitions[r] || {}),
                      o[r],
                    )),
                      defineIcons(r, o[r]);
                    var t = I[C][r];
                    t && defineIcons(t, o[r]), build();
                  });
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.definitions = {};
                },
              },
              {
                key: '_pullDefinitions',
                value: function (e, r) {
                  var t = r.prefix && r.iconName && r.icon ? { 0: r } : r;
                  return (
                    Object.keys(t).map(function (r) {
                      var a = t[r],
                        o = a.prefix,
                        n = a.iconName,
                        l = a.icon,
                        i = l[2];
                      e[o] || (e[o] = {}),
                        i.length > 0 &&
                          i.forEach(function (r) {
                            'string' == typeof r && (e[o][r] = l);
                          }),
                        (e[o][n] = l);
                    }),
                    e
                  );
                },
              },
            ]),
            Library
          );
        })(),
        eg = [],
        eA = {},
        eh = {},
        ev = Object.keys(eh);
      function registerPlugins(e, r) {
        var t = r.mixoutsTo;
        return (
          (eg = e),
          (eA = {}),
          Object.keys(eh).forEach(function (e) {
            -1 === ev.indexOf(e) && delete eh[e];
          }),
          eg.forEach(function (e) {
            var r = e.mixout ? e.mixout() : {};
            if (
              (Object.keys(r).forEach(function (e) {
                'function' == typeof r[e] && (t[e] = r[e]),
                  'object' === _typeof(r[e]) &&
                    Object.keys(r[e]).forEach(function (a) {
                      t[e] || (t[e] = {}), (t[e][a] = r[e][a]);
                    });
              }),
              e.hooks)
            ) {
              var a = e.hooks();
              Object.keys(a).forEach(function (e) {
                eA[e] || (eA[e] = []), eA[e].push(a[e]);
              });
            }
            e.provides && e.provides(eh);
          }),
          t
        );
      }
      function chainHooks(e, r) {
        for (
          var t = arguments.length, a = Array(t > 2 ? t - 2 : 0), o = 2;
          o < t;
          o++
        )
          a[o - 2] = arguments[o];
        return (
          (eA[e] || []).forEach(function (e) {
            r = e.apply(null, [r].concat(a));
          }),
          r
        );
      }
      function callHooks(e) {
        for (
          var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          t[a - 1] = arguments[a];
        (eA[e] || []).forEach(function (e) {
          e.apply(null, t);
        });
      }
      function callProvided() {
        var e = arguments[0],
          r = Array.prototype.slice.call(arguments, 1);
        return eh[e] ? eh[e].apply(null, r) : void 0;
      }
      function findIconDefinition(e) {
        'fa' === e.prefix && (e.prefix = 'fas');
        var r = e.iconName,
          t = e.prefix || es;
        if (r)
          return (
            (r = byAlias(t, r) || r),
            iconFromMapping(e_.definitions, t, r) ||
              iconFromMapping(et.styles, t, r)
          );
      }
      var e_ = new em(),
        eP = {
          noAuto: function () {
            (Z.autoReplaceSvg = !1),
              (Z.observeMutations = !1),
              callHooks('noAuto');
          },
          config: Z,
          dom: {
            i2svg: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return v
                ? (callHooks('beforeI2svg', e),
                  callProvided('pseudoElements2svg', e),
                  callProvided('i2svg', e))
                : Promise.reject('Operation requires a DOM of some kind.');
            },
            watch: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = e.autoReplaceSvgRoot;
              !1 === Z.autoReplaceSvg && (Z.autoReplaceSvg = !0),
                (Z.observeMutations = !0),
                domready(function () {
                  autoReplace({ autoReplaceSvgRoot: r }), callHooks('watch', e);
                });
            },
          },
          parse: {
            icon: function (e) {
              if (null === e) return null;
              if ('object' === _typeof(e) && e.prefix && e.iconName)
                return {
                  prefix: e.prefix,
                  iconName: byAlias(e.prefix, e.iconName) || e.iconName,
                };
              if (Array.isArray(e) && 2 === e.length) {
                var r = 0 === e[1].indexOf('fa-') ? e[1].slice(3) : e[1],
                  t = getCanonicalPrefix(e[0]);
                return { prefix: t, iconName: byAlias(t, r) || r };
              }
              if (
                'string' == typeof e &&
                (e.indexOf(''.concat(Z.cssPrefix, '-')) > -1 || e.match(z))
              ) {
                var a = getCanonicalIcon(e.split(' '), { skipLookups: !0 });
                return {
                  prefix: a.prefix || es,
                  iconName: byAlias(a.prefix, a.iconName) || a.iconName,
                };
              }
              if ('string' == typeof e) {
                var o = es;
                return { prefix: o, iconName: byAlias(o, e) || e };
              }
            },
          },
          library: e_,
          findIconDefinition: findIconDefinition,
          toHtml: toHtml,
        },
        autoReplace = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.autoReplaceSvgRoot,
            t = void 0 === r ? g : r;
          (Object.keys(et.styles).length > 0 || Z.autoFetchSvg) &&
            v &&
            Z.autoReplaceSvg &&
            eP.dom.i2svg({ node: t });
        };
      function domVariants(e, r) {
        return (
          Object.defineProperty(e, 'abstract', { get: r }),
          Object.defineProperty(e, 'html', {
            get: function () {
              return e.abstract.map(function (e) {
                return toHtml(e);
              });
            },
          }),
          Object.defineProperty(e, 'node', {
            get: function () {
              if (v) {
                var r = g.createElement('div');
                return (r.innerHTML = e.html), r.children;
              }
            },
          }),
          e
        );
      }
      function asIcon(e) {
        var r = e.children,
          t = e.main,
          a = e.mask,
          o = e.attributes,
          n = e.styles,
          l = e.transform;
        if (transformIsMeaningful(l) && t.found && !a.found) {
          var i = { x: t.width / t.height / 2, y: 0.5 };
          o.style = joinStyles(
            _objectSpread2(
              _objectSpread2({}, n),
              {},
              {
                'transform-origin': ''
                  .concat(i.x + l.x / 16, 'em ')
                  .concat(i.y + l.y / 16, 'em'),
              },
            ),
          );
        }
        return [{ tag: 'svg', attributes: o, children: r }];
      }
      function asSymbol(e) {
        var r = e.prefix,
          t = e.iconName,
          a = e.children,
          o = e.attributes,
          n = e.symbol,
          l =
            !0 === n ? ''.concat(r, '-').concat(Z.cssPrefix, '-').concat(t) : n;
        return [
          {
            tag: 'svg',
            attributes: { style: 'display: none;' },
            children: [
              {
                tag: 'symbol',
                attributes: _objectSpread2(
                  _objectSpread2({}, o),
                  {},
                  { id: l },
                ),
                children: a,
              },
            ],
          },
        ];
      }
      function makeInlineSvgAbstract(e) {
        var r = e.icons,
          t = r.main,
          a = r.mask,
          o = e.prefix,
          n = e.iconName,
          l = e.transform,
          i = e.symbol,
          s = e.title,
          c = e.maskId,
          d = e.titleId,
          p = e.extra,
          u = e.watchable,
          f = a.found ? a : t,
          y = f.width,
          b = f.height,
          m = 'fak' === o,
          g = [
            Z.replacementClass,
            n ? ''.concat(Z.cssPrefix, '-').concat(n) : '',
          ]
            .filter(function (e) {
              return -1 === p.classes.indexOf(e);
            })
            .filter(function (e) {
              return '' !== e || !!e;
            })
            .concat(p.classes)
            .join(' '),
          A = {
            children: [],
            attributes: _objectSpread2(
              _objectSpread2({}, p.attributes),
              {},
              {
                'data-prefix': o,
                'data-icon': n,
                class: g,
                role: p.attributes.role || 'img',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 '.concat(y, ' ').concat(b),
              },
            ),
          },
          h =
            m && !~p.classes.indexOf('fa-fw')
              ? { width: ''.concat((y / b) * 1, 'em') }
              : {};
        void 0 !== u && u && (A.attributes[k] = ''),
          s &&
            (A.children.push({
              tag: 'title',
              attributes: {
                id:
                  A.attributes['aria-labelledby'] ||
                  'title-'.concat(d || nextUniqueId()),
              },
              children: [s],
            }),
            delete A.attributes.title);
        var v = _objectSpread2(
            _objectSpread2({}, A),
            {},
            {
              prefix: o,
              iconName: n,
              main: t,
              mask: a,
              maskId: c,
              transform: l,
              symbol: i,
              styles: _objectSpread2(_objectSpread2({}, h), p.styles),
            },
          ),
          _ =
            a.found && t.found
              ? callProvided('generateAbstractMask', v) || {
                  children: [],
                  attributes: {},
                }
              : callProvided('generateAbstractIcon', v) || {
                  children: [],
                  attributes: {},
                },
          P = _.children,
          w = _.attributes;
        return ((v.children = P), (v.attributes = w), i)
          ? asSymbol(v)
          : asIcon(v);
      }
      function makeLayersTextAbstract(e) {
        var r = e.content,
          t = e.width,
          a = e.height,
          o = e.transform,
          n = e.title,
          l = e.extra,
          i = e.watchable,
          s = _objectSpread2(
            _objectSpread2(
              _objectSpread2({}, l.attributes),
              n ? { title: n } : {},
            ),
            {},
            { class: l.classes.join(' ') },
          );
        void 0 !== i && i && (s[k] = '');
        var c = _objectSpread2({}, l.styles);
        transformIsMeaningful(o) &&
          ((c.transform = transformForCss({
            transform: o,
            startCentered: !0,
            width: t,
            height: a,
          })),
          (c['-webkit-transform'] = c.transform));
        var d = joinStyles(c);
        d.length > 0 && (s.style = d);
        var p = [];
        return (
          p.push({ tag: 'span', attributes: s, children: [r] }),
          n &&
            p.push({
              tag: 'span',
              attributes: { class: 'sr-only' },
              children: [n],
            }),
          p
        );
      }
      function makeLayersCounterAbstract(e) {
        var r = e.content,
          t = e.title,
          a = e.extra,
          o = _objectSpread2(
            _objectSpread2(
              _objectSpread2({}, a.attributes),
              t ? { title: t } : {},
            ),
            {},
            { class: a.classes.join(' ') },
          ),
          n = joinStyles(a.styles);
        n.length > 0 && (o.style = n);
        var l = [];
        return (
          l.push({ tag: 'span', attributes: o, children: [r] }),
          t &&
            l.push({
              tag: 'span',
              attributes: { class: 'sr-only' },
              children: [t],
            }),
          l
        );
      }
      var ew = et.styles;
      function asFoundIcon(e) {
        var r = e[0],
          t = e[1],
          a = _slicedToArray(e.slice(4), 1)[0];
        return {
          found: !0,
          width: r,
          height: t,
          icon: Array.isArray(a)
            ? {
                tag: 'g',
                attributes: {
                  class: ''.concat(Z.cssPrefix, '-').concat(V.GROUP),
                },
                children: [
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(Z.cssPrefix, '-').concat(V.SECONDARY),
                      fill: 'currentColor',
                      d: a[0],
                    },
                  },
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(Z.cssPrefix, '-').concat(V.PRIMARY),
                      fill: 'currentColor',
                      d: a[1],
                    },
                  },
                ],
              }
            : { tag: 'path', attributes: { fill: 'currentColor', d: a } },
        };
      }
      var ek = { found: !1, width: 512, height: 512 };
      function maybeNotifyMissing(e, r) {
        O ||
          Z.showMissingIcons ||
          !e ||
          console.error(
            'Icon with name "'
              .concat(e, '" and prefix "')
              .concat(r, '" is missing.'),
          );
      }
      function findIcon(e, r) {
        var t = r;
        return (
          'fa' === r && null !== Z.styleDefault && (r = es),
          new Promise(function (a, o) {
            if ((callProvided('missingIconAbstract'), 'fa' === t)) {
              var n = byOldName(e) || {};
              (e = n.iconName || e), (r = n.prefix || r);
            }
            if (e && r && ew[r] && ew[r][e]) return a(asFoundIcon(ew[r][e]));
            maybeNotifyMissing(e, r),
              a(
                _objectSpread2(
                  _objectSpread2({}, ek),
                  {},
                  {
                    icon:
                      (Z.showMissingIcons &&
                        e &&
                        callProvided('missingIconAbstract')) ||
                      {},
                  },
                ),
              );
          })
        );
      }
      var noop$1 = function () {},
        eS =
          Z.measurePerformance && h && h.mark && h.measure
            ? h
            : { mark: noop$1, measure: noop$1 },
        ex = 'FA "6.5.1"',
        end = function (e) {
          eS.mark(''.concat(ex, ' ').concat(e, ' ends')),
            eS.measure(
              ''.concat(ex, ' ').concat(e),
              ''.concat(ex, ' ').concat(e, ' begins'),
              ''.concat(ex, ' ').concat(e, ' ends'),
            );
        },
        ej = {
          begin: function (e) {
            return (
              eS.mark(''.concat(ex, ' ').concat(e, ' begins')),
              function () {
                return end(e);
              }
            );
          },
          end: end,
        },
        noop$2 = function () {};
      function isWatched(e) {
        return 'string' == typeof (e.getAttribute ? e.getAttribute(k) : null);
      }
      function hasPrefixAndIcon(e) {
        var r = e.getAttribute ? e.getAttribute(x) : null,
          t = e.getAttribute ? e.getAttribute(j) : null;
        return r && t;
      }
      function hasBeenReplaced(e) {
        return (
          e &&
          e.classList &&
          e.classList.contains &&
          e.classList.contains(Z.replacementClass)
        );
      }
      function getMutator() {
        return !0 === Z.autoReplaceSvg
          ? eR.replace
          : eR[Z.autoReplaceSvg] || eR.replace;
      }
      function createElementNS(e) {
        return g.createElementNS('http://www.w3.org/2000/svg', e);
      }
      function createElement(e) {
        return g.createElement(e);
      }
      function convertSVG(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = r.ceFn,
          a =
            void 0 === t
              ? 'svg' === e.tag
                ? createElementNS
                : createElement
              : t;
        if ('string' == typeof e) return g.createTextNode(e);
        var o = a(e.tag);
        return (
          Object.keys(e.attributes || []).forEach(function (r) {
            o.setAttribute(r, e.attributes[r]);
          }),
          (e.children || []).forEach(function (e) {
            o.appendChild(convertSVG(e, { ceFn: a }));
          }),
          o
        );
      }
      function nodeAsComment(e) {
        var r = ' '.concat(e.outerHTML, ' ');
        return ''.concat(r, 'Font Awesome fontawesome.com ');
      }
      var eR = {
        replace: function (e) {
          var r = e[0];
          if (r.parentNode) {
            if (
              (e[1].forEach(function (e) {
                r.parentNode.insertBefore(convertSVG(e), r);
              }),
              null === r.getAttribute(k) && Z.keepOriginalSource)
            ) {
              var t = g.createComment(nodeAsComment(r));
              r.parentNode.replaceChild(t, r);
            } else r.remove();
          }
        },
        nest: function (e) {
          var r = e[0],
            t = e[1];
          if (~classArray(r).indexOf(Z.replacementClass)) return eR.replace(e);
          var a = new RegExp(''.concat(Z.cssPrefix, '-.*'));
          if ((delete t[0].attributes.id, t[0].attributes.class)) {
            var o = t[0].attributes.class.split(' ').reduce(
              function (e, r) {
                return (
                  r === Z.replacementClass || r.match(a)
                    ? e.toSvg.push(r)
                    : e.toNode.push(r),
                  e
                );
              },
              { toNode: [], toSvg: [] },
            );
            (t[0].attributes.class = o.toSvg.join(' ')),
              0 === o.toNode.length
                ? r.removeAttribute('class')
                : r.setAttribute('class', o.toNode.join(' '));
          }
          var n = t
            .map(function (e) {
              return toHtml(e);
            })
            .join('\n');
          r.setAttribute(k, ''), (r.innerHTML = n);
        },
      };
      function performOperationSync(e) {
        e();
      }
      function perform(e, r) {
        var t = 'function' == typeof r ? r : noop$2;
        if (0 === e.length) t();
        else {
          var a = performOperationSync;
          'async' === Z.mutateApproach &&
            (a = p.requestAnimationFrame || performOperationSync),
            a(function () {
              var r = getMutator(),
                a = ej.begin('mutate');
              e.map(r), a(), t();
            });
        }
      }
      var eE = !1,
        eO = null;
      function observe(e) {
        if (A && Z.observeMutations) {
          var r = e.treeCallback,
            t = void 0 === r ? noop$2 : r,
            a = e.nodeCallback,
            o = void 0 === a ? noop$2 : a,
            n = e.pseudoElementsCallback,
            l = void 0 === n ? noop$2 : n,
            i = e.observeMutationsRoot,
            s = void 0 === i ? g : i;
          (eO = new A(function (e) {
            if (!eE) {
              var r = es;
              toArray(e).forEach(function (e) {
                if (
                  ('childList' === e.type &&
                    e.addedNodes.length > 0 &&
                    !isWatched(e.addedNodes[0]) &&
                    (Z.searchPseudoElements && l(e.target), t(e.target)),
                  'attributes' === e.type &&
                    e.target.parentNode &&
                    Z.searchPseudoElements &&
                    l(e.target.parentNode),
                  'attributes' === e.type &&
                    isWatched(e.target) &&
                    ~G.indexOf(e.attributeName))
                ) {
                  if (
                    'class' === e.attributeName &&
                    hasPrefixAndIcon(e.target)
                  ) {
                    var a = getCanonicalIcon(classArray(e.target)),
                      n = a.prefix,
                      i = a.iconName;
                    e.target.setAttribute(x, n || r),
                      i && e.target.setAttribute(j, i);
                  } else hasBeenReplaced(e.target) && o(e.target);
                }
              });
            }
          })),
            v &&
              eO.observe(s, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
              });
        }
      }
      function disconnect() {
        eO && eO.disconnect();
      }
      function styleParser(e) {
        var r = e.getAttribute('style'),
          t = [];
        return (
          r &&
            (t = r.split(';').reduce(function (e, r) {
              var t = r.split(':'),
                a = t[0],
                o = t.slice(1);
              return a && o.length > 0 && (e[a] = o.join(':').trim()), e;
            }, {})),
          t
        );
      }
      function classParser(e) {
        var r = e.getAttribute('data-prefix'),
          t = e.getAttribute('data-icon'),
          a = void 0 !== e.innerText ? e.innerText.trim() : '',
          o = getCanonicalIcon(classArray(e));
        return (
          o.prefix || (o.prefix = es),
          r && t && ((o.prefix = r), (o.iconName = t)),
          (o.iconName && o.prefix) ||
            (o.prefix &&
              a.length > 0 &&
              (o.iconName =
                byLigature(o.prefix, e.innerText) ||
                byUnicode(o.prefix, toHex(e.innerText))),
            !o.iconName &&
              Z.autoFetchSvg &&
              e.firstChild &&
              e.firstChild.nodeType === Node.TEXT_NODE &&
              (o.iconName = e.firstChild.data)),
          o
        );
      }
      function attributesParser(e) {
        var r = toArray(e.attributes).reduce(function (e, r) {
            return (
              'class' !== e.name && 'style' !== e.name && (e[r.name] = r.value),
              e
            );
          }, {}),
          t = e.getAttribute('title'),
          a = e.getAttribute('data-fa-title-id');
        return (
          Z.autoA11y &&
            (t
              ? (r['aria-labelledby'] = ''
                  .concat(Z.replacementClass, '-title-')
                  .concat(a || nextUniqueId()))
              : ((r['aria-hidden'] = 'true'), (r.focusable = 'false'))),
          r
        );
      }
      function blankMeta() {
        return {
          iconName: null,
          title: null,
          titleId: null,
          prefix: null,
          transform: Q,
          symbol: !1,
          mask: { iconName: null, prefix: null, rest: [] },
          maskId: null,
          extra: { classes: [], styles: {}, attributes: {} },
        };
      }
      function parseMeta(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { styleParser: !0 },
          t = classParser(e),
          a = t.iconName,
          o = t.prefix,
          n = t.rest,
          l = attributesParser(e),
          i = chainHooks('parseNodeAttributes', {}, e),
          s = r.styleParser ? styleParser(e) : [];
        return _objectSpread2(
          {
            iconName: a,
            title: e.getAttribute('title'),
            titleId: e.getAttribute('data-fa-title-id'),
            prefix: o,
            transform: Q,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            symbol: !1,
            extra: { classes: n, styles: s, attributes: l },
          },
          i,
        );
      }
      var eC = et.styles;
      function generateMutation(e) {
        var r =
          'nest' === Z.autoReplaceSvg
            ? parseMeta(e, { styleParser: !1 })
            : parseMeta(e);
        return ~r.extra.classes.indexOf(F)
          ? callProvided('generateLayersText', e, r)
          : callProvided('generateSvgReplacementMutation', e, r);
      }
      var eT = new Set();
      function onTree(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!v) return Promise.resolve();
        var t = g.documentElement.classList,
          hclAdd = function (e) {
            return t.add(''.concat(R, '-').concat(e));
          },
          hclRemove = function (e) {
            return t.remove(''.concat(R, '-').concat(e));
          },
          a = Z.autoFetchSvg
            ? eT
            : M.map(function (e) {
                return 'fa-'.concat(e);
              }).concat(Object.keys(eC));
        a.includes('fa') || a.push('fa');
        var o = ['.'.concat(F, ':not([').concat(k, '])')]
          .concat(
            a.map(function (e) {
              return '.'.concat(e, ':not([').concat(k, '])');
            }),
          )
          .join(', ');
        if (0 === o.length) return Promise.resolve();
        var n = [];
        try {
          n = toArray(e.querySelectorAll(o));
        } catch (e) {}
        if (!(n.length > 0)) return Promise.resolve();
        hclAdd('pending'), hclRemove('complete');
        var l = ej.begin('onTree'),
          i = n.reduce(function (e, r) {
            try {
              var t = generateMutation(r);
              t && e.push(t);
            } catch (e) {
              O || 'MissingIcon' !== e.name || console.error(e);
            }
            return e;
          }, []);
        return new Promise(function (e, t) {
          Promise.all(i)
            .then(function (t) {
              perform(t, function () {
                hclAdd('active'),
                  hclAdd('complete'),
                  hclRemove('pending'),
                  'function' == typeof r && r(),
                  l(),
                  e();
              });
            })
            .catch(function (e) {
              l(), t(e);
            });
        });
      }
      function onNode(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        generateMutation(e).then(function (e) {
          e && perform([e], r);
        });
      }
      function resolveIcons(e) {
        return function (r) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = (r || {}).icon ? r : findIconDefinition(r || {}),
            o = t.mask;
          return (
            o && (o = (o || {}).icon ? o : findIconDefinition(o || {})),
            e(a, _objectSpread2(_objectSpread2({}, t), {}, { mask: o }))
          );
        };
      }
      M.map(function (e) {
        eT.add('fa-'.concat(e));
      }),
        Object.keys(N[C]).map(eT.add.bind(eT)),
        Object.keys(N[T]).map(eT.add.bind(eT)),
        (eT = _toConsumableArray(eT));
      var render = function (e) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = r.transform,
            a = void 0 === t ? Q : t,
            o = r.symbol,
            n = void 0 !== o && o,
            l = r.mask,
            i = void 0 === l ? null : l,
            s = r.maskId,
            c = void 0 === s ? null : s,
            d = r.title,
            p = void 0 === d ? null : d,
            u = r.titleId,
            f = void 0 === u ? null : u,
            y = r.classes,
            b = void 0 === y ? [] : y,
            m = r.attributes,
            g = void 0 === m ? {} : m,
            A = r.styles,
            h = void 0 === A ? {} : A;
          if (e) {
            var v = e.prefix,
              _ = e.iconName,
              P = e.icon;
            return domVariants(
              _objectSpread2({ type: 'icon' }, e),
              function () {
                return (
                  callHooks('beforeDOMElementCreation', {
                    iconDefinition: e,
                    params: r,
                  }),
                  Z.autoA11y &&
                    (p
                      ? (g['aria-labelledby'] = ''
                          .concat(Z.replacementClass, '-title-')
                          .concat(f || nextUniqueId()))
                      : ((g['aria-hidden'] = 'true'), (g.focusable = 'false'))),
                  makeInlineSvgAbstract({
                    icons: {
                      main: asFoundIcon(P),
                      mask: i
                        ? asFoundIcon(i.icon)
                        : { found: !1, width: null, height: null, icon: {} },
                    },
                    prefix: v,
                    iconName: _,
                    transform: _objectSpread2(_objectSpread2({}, Q), a),
                    symbol: n,
                    title: p,
                    maskId: c,
                    titleId: f,
                    extra: { attributes: g, styles: h, classes: b },
                  })
                );
              },
            );
          }
        },
        eM = RegExp('"', 'ug');
      function hexValueFromContent(e) {
        var r = e.replace(eM, ''),
          t = codePointAt(r, 0),
          a = 2 === r.length && r[0] === r[1];
        return {
          value: a ? toHex(r[0]) : toHex(r),
          isSecondary: (t >= 1105920 && t <= 1112319) || a,
        };
      }
      function replaceForPosition(e, r) {
        var t = ''
          .concat('data-fa-pseudo-element-pending')
          .concat(r.replace(':', '-'));
        return new Promise(function (a, o) {
          if (null !== e.getAttribute(t)) return a();
          var n = toArray(e.children).filter(function (e) {
              return e.getAttribute(S) === r;
            })[0],
            l = p.getComputedStyle(e, r),
            i = l.getPropertyValue('font-family').match(U),
            s = l.getPropertyValue('font-weight'),
            c = l.getPropertyValue('content');
          if (n && !i) return e.removeChild(n), a();
          if (i && 'none' !== c && '' !== c) {
            var d = l.getPropertyValue('content'),
              u = ~['Sharp'].indexOf(i[2]) ? T : C,
              f = ~[
                'Solid',
                'Regular',
                'Light',
                'Thin',
                'Duotone',
                'Brands',
                'Kit',
              ].indexOf(i[2])
                ? D[u][i[2].toLowerCase()]
                : H[u][s],
              y = hexValueFromContent(d),
              b = y.value,
              m = y.isSecondary,
              A = i[0].startsWith('FontAwesome'),
              h = byUnicode(f, b),
              v = h;
            if (A) {
              var _ = byOldUnicode(b);
              _.iconName && _.prefix && ((h = _.iconName), (f = _.prefix));
            }
            if (
              !h ||
              m ||
              (n && n.getAttribute(x) === f && n.getAttribute(j) === v)
            )
              a();
            else {
              e.setAttribute(t, v), n && e.removeChild(n);
              var P = blankMeta(),
                w = P.extra;
              (w.attributes[S] = r),
                findIcon(h, f)
                  .then(function (o) {
                    var n = makeInlineSvgAbstract(
                        _objectSpread2(
                          _objectSpread2({}, P),
                          {},
                          {
                            icons: { main: o, mask: emptyCanonicalIcon() },
                            prefix: f,
                            iconName: v,
                            extra: w,
                            watchable: !0,
                          },
                        ),
                      ),
                      l = g.createElementNS(
                        'http://www.w3.org/2000/svg',
                        'svg',
                      );
                    '::before' === r
                      ? e.insertBefore(l, e.firstChild)
                      : e.appendChild(l),
                      (l.outerHTML = n
                        .map(function (e) {
                          return toHtml(e);
                        })
                        .join('\n')),
                      e.removeAttribute(t),
                      a();
                  })
                  .catch(o);
            }
          } else a();
        });
      }
      function replace(e) {
        return Promise.all([
          replaceForPosition(e, '::before'),
          replaceForPosition(e, '::after'),
        ]);
      }
      function processable(e) {
        return (
          e.parentNode !== document.head &&
          !~E.indexOf(e.tagName.toUpperCase()) &&
          !e.getAttribute(S) &&
          (!e.parentNode || 'svg' !== e.parentNode.tagName)
        );
      }
      function searchPseudoElements(e) {
        if (v)
          return new Promise(function (r, t) {
            var a = toArray(e.querySelectorAll('*'))
                .filter(processable)
                .map(replace),
              o = ej.begin('searchPseudoElements');
            (eE = !0),
              Promise.all(a)
                .then(function () {
                  o(), (eE = !1), r();
                })
                .catch(function () {
                  o(), (eE = !1), t();
                });
          });
      }
      var eN = !1,
        parseTransformString = function (e) {
          return e
            .toLowerCase()
            .split(' ')
            .reduce(
              function (e, r) {
                var t = r.toLowerCase().split('-'),
                  a = t[0],
                  o = t.slice(1).join('-');
                if (a && 'h' === o) return (e.flipX = !0), e;
                if (a && 'v' === o) return (e.flipY = !0), e;
                if (isNaN((o = parseFloat(o)))) return e;
                switch (a) {
                  case 'grow':
                    e.size = e.size + o;
                    break;
                  case 'shrink':
                    e.size = e.size - o;
                    break;
                  case 'left':
                    e.x = e.x - o;
                    break;
                  case 'right':
                    e.x = e.x + o;
                    break;
                  case 'up':
                    e.y = e.y - o;
                    break;
                  case 'down':
                    e.y = e.y + o;
                    break;
                  case 'rotate':
                    e.rotate = e.rotate + o;
                }
                return e;
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
            );
        },
        eD = { x: 0, y: 0, width: '100%', height: '100%' };
      function fillBlack(e) {
        var r =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
          e.attributes &&
            (e.attributes.fill || r) &&
            (e.attributes.fill = 'black'),
          e
        );
      }
      function deGroup(e) {
        return 'g' === e.tag ? e.children : [e];
      }
      registerPlugins(
        [
          {
            mixout: function () {
              return { dom: { css: css, insertCss: ensureCss } };
            },
            hooks: function () {
              return {
                beforeDOMElementCreation: function () {
                  ensureCss();
                },
                beforeI2svg: function () {
                  ensureCss();
                },
              };
            },
          },
          {
            mixout: function () {
              return { icon: resolveIcons(render) };
            },
            hooks: function () {
              return {
                mutationObserverCallbacks: function (e) {
                  return (
                    (e.treeCallback = onTree), (e.nodeCallback = onNode), e
                  );
                },
              };
            },
            provides: function (e) {
              (e.i2svg = function (e) {
                var r = e.node,
                  t = void 0 === r ? g : r,
                  a = e.callback;
                return onTree(t, void 0 === a ? function () {} : a);
              }),
                (e.generateSvgReplacementMutation = function (e, r) {
                  var t = r.iconName,
                    a = r.title,
                    o = r.titleId,
                    n = r.prefix,
                    l = r.transform,
                    i = r.symbol,
                    s = r.mask,
                    c = r.maskId,
                    d = r.extra;
                  return new Promise(function (r, p) {
                    Promise.all([
                      findIcon(t, n),
                      s.iconName
                        ? findIcon(s.iconName, s.prefix)
                        : Promise.resolve({
                            found: !1,
                            width: 512,
                            height: 512,
                            icon: {},
                          }),
                    ])
                      .then(function (s) {
                        var p = _slicedToArray(s, 2);
                        r([
                          e,
                          makeInlineSvgAbstract({
                            icons: { main: p[0], mask: p[1] },
                            prefix: n,
                            iconName: t,
                            transform: l,
                            symbol: i,
                            maskId: c,
                            title: a,
                            titleId: o,
                            extra: d,
                            watchable: !0,
                          }),
                        ]);
                      })
                      .catch(p);
                  });
                }),
                (e.generateAbstractIcon = function (e) {
                  var r,
                    t = e.children,
                    a = e.attributes,
                    o = e.main,
                    n = e.transform,
                    l = joinStyles(e.styles);
                  return (
                    l.length > 0 && (a.style = l),
                    transformIsMeaningful(n) &&
                      (r = callProvided('generateAbstractTransformGrouping', {
                        main: o,
                        transform: n,
                        containerWidth: o.width,
                        iconWidth: o.width,
                      })),
                    t.push(r || o.icon),
                    { children: t, attributes: a }
                  );
                });
            },
          },
          {
            mixout: function () {
              return {
                layer: function (e) {
                  var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    t = r.classes,
                    a = void 0 === t ? [] : t;
                  return domVariants({ type: 'layer' }, function () {
                    callHooks('beforeDOMElementCreation', {
                      assembler: e,
                      params: r,
                    });
                    var t = [];
                    return (
                      e(function (e) {
                        Array.isArray(e)
                          ? e.map(function (e) {
                              t = t.concat(e.abstract);
                            })
                          : (t = t.concat(e.abstract));
                      }),
                      [
                        {
                          tag: 'span',
                          attributes: {
                            class: [''.concat(Z.cssPrefix, '-layers')]
                              .concat(_toConsumableArray(a))
                              .join(' '),
                          },
                          children: t,
                        },
                      ]
                    );
                  });
                },
              };
            },
          },
          {
            mixout: function () {
              return {
                counter: function (e) {
                  var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    t = r.title,
                    a = void 0 === t ? null : t,
                    o = r.classes,
                    n = void 0 === o ? [] : o,
                    l = r.attributes,
                    i = void 0 === l ? {} : l,
                    s = r.styles,
                    c = void 0 === s ? {} : s;
                  return domVariants(
                    { type: 'counter', content: e },
                    function () {
                      return (
                        callHooks('beforeDOMElementCreation', {
                          content: e,
                          params: r,
                        }),
                        makeLayersCounterAbstract({
                          content: e.toString(),
                          title: a,
                          extra: {
                            attributes: i,
                            styles: c,
                            classes: [
                              ''.concat(Z.cssPrefix, '-layers-counter'),
                            ].concat(_toConsumableArray(n)),
                          },
                        })
                      );
                    },
                  );
                },
              };
            },
          },
          {
            mixout: function () {
              return {
                text: function (e) {
                  var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    t = r.transform,
                    a = void 0 === t ? Q : t,
                    o = r.title,
                    n = void 0 === o ? null : o,
                    l = r.classes,
                    i = void 0 === l ? [] : l,
                    s = r.attributes,
                    c = void 0 === s ? {} : s,
                    d = r.styles,
                    p = void 0 === d ? {} : d;
                  return domVariants({ type: 'text', content: e }, function () {
                    return (
                      callHooks('beforeDOMElementCreation', {
                        content: e,
                        params: r,
                      }),
                      makeLayersTextAbstract({
                        content: e,
                        transform: _objectSpread2(_objectSpread2({}, Q), a),
                        title: n,
                        extra: {
                          attributes: c,
                          styles: p,
                          classes: [
                            ''.concat(Z.cssPrefix, '-layers-text'),
                          ].concat(_toConsumableArray(i)),
                        },
                      })
                    );
                  });
                },
              };
            },
            provides: function (e) {
              e.generateLayersText = function (e, r) {
                var t = r.title,
                  a = r.transform,
                  o = r.extra,
                  n = null,
                  l = null;
                if (_) {
                  var i = parseInt(getComputedStyle(e).fontSize, 10),
                    s = e.getBoundingClientRect();
                  (n = s.width / i), (l = s.height / i);
                }
                return (
                  Z.autoA11y && !t && (o.attributes['aria-hidden'] = 'true'),
                  Promise.resolve([
                    e,
                    makeLayersTextAbstract({
                      content: e.innerHTML,
                      width: n,
                      height: l,
                      transform: a,
                      title: t,
                      extra: o,
                      watchable: !0,
                    }),
                  ])
                );
              };
            },
          },
          {
            hooks: function () {
              return {
                mutationObserverCallbacks: function (e) {
                  return (e.pseudoElementsCallback = searchPseudoElements), e;
                },
              };
            },
            provides: function (e) {
              e.pseudoElements2svg = function (e) {
                var r = e.node,
                  t = void 0 === r ? g : r;
                Z.searchPseudoElements && searchPseudoElements(t);
              };
            },
          },
          {
            mixout: function () {
              return {
                dom: {
                  unwatch: function () {
                    (eE = !0), (eN = !0);
                  },
                },
              };
            },
            hooks: function () {
              return {
                bootstrap: function () {
                  observe(chainHooks('mutationObserverCallbacks', {}));
                },
                noAuto: function () {
                  disconnect();
                },
                watch: function (e) {
                  var r = e.observeMutationsRoot;
                  eN
                    ? (eE = !1)
                    : observe(
                        chainHooks('mutationObserverCallbacks', {
                          observeMutationsRoot: r,
                        }),
                      );
                },
              };
            },
          },
          {
            mixout: function () {
              return {
                parse: {
                  transform: function (e) {
                    return parseTransformString(e);
                  },
                },
              };
            },
            hooks: function () {
              return {
                parseNodeAttributes: function (e, r) {
                  var t = r.getAttribute('data-fa-transform');
                  return t && (e.transform = parseTransformString(t)), e;
                },
              };
            },
            provides: function (e) {
              e.generateAbstractTransformGrouping = function (e) {
                var r = e.main,
                  t = e.transform,
                  a = e.containerWidth,
                  o = e.iconWidth,
                  n = 'translate('
                    .concat(32 * t.x, ', ')
                    .concat(32 * t.y, ') '),
                  l = 'scale('
                    .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
                    .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
                  i = 'rotate('.concat(t.rotate, ' 0 0)'),
                  s = { transform: ''.concat(n, ' ').concat(l, ' ').concat(i) },
                  c = {
                    outer: { transform: 'translate('.concat(a / 2, ' 256)') },
                    inner: s,
                    path: {
                      transform: 'translate('.concat(-((o / 2) * 1), ' -256)'),
                    },
                  };
                return {
                  tag: 'g',
                  attributes: _objectSpread2({}, c.outer),
                  children: [
                    {
                      tag: 'g',
                      attributes: _objectSpread2({}, c.inner),
                      children: [
                        {
                          tag: r.icon.tag,
                          children: r.icon.children,
                          attributes: _objectSpread2(
                            _objectSpread2({}, r.icon.attributes),
                            c.path,
                          ),
                        },
                      ],
                    },
                  ],
                };
              };
            },
          },
          {
            hooks: function () {
              return {
                parseNodeAttributes: function (e, r) {
                  var t = r.getAttribute('data-fa-mask'),
                    a = t
                      ? getCanonicalIcon(
                          t.split(' ').map(function (e) {
                            return e.trim();
                          }),
                        )
                      : emptyCanonicalIcon();
                  return (
                    a.prefix || (a.prefix = es),
                    (e.mask = a),
                    (e.maskId = r.getAttribute('data-fa-mask-id')),
                    e
                  );
                },
              };
            },
            provides: function (e) {
              e.generateAbstractMask = function (e) {
                var r = e.children,
                  t = e.attributes,
                  a = e.main,
                  o = e.mask,
                  n = e.maskId,
                  l = e.transform,
                  i = a.width,
                  s = a.icon,
                  c = o.width,
                  d = o.icon,
                  p = transformForSvg({
                    transform: l,
                    containerWidth: c,
                    iconWidth: i,
                  }),
                  u = {
                    tag: 'rect',
                    attributes: _objectSpread2(
                      _objectSpread2({}, eD),
                      {},
                      { fill: 'white' },
                    ),
                  },
                  f = s.children ? { children: s.children.map(fillBlack) } : {},
                  y = {
                    tag: 'g',
                    attributes: _objectSpread2({}, p.inner),
                    children: [
                      fillBlack(
                        _objectSpread2(
                          {
                            tag: s.tag,
                            attributes: _objectSpread2(
                              _objectSpread2({}, s.attributes),
                              p.path,
                            ),
                          },
                          f,
                        ),
                      ),
                    ],
                  },
                  b = {
                    tag: 'g',
                    attributes: _objectSpread2({}, p.outer),
                    children: [y],
                  },
                  m = 'mask-'.concat(n || nextUniqueId()),
                  g = 'clip-'.concat(n || nextUniqueId()),
                  A = {
                    tag: 'mask',
                    attributes: _objectSpread2(
                      _objectSpread2({}, eD),
                      {},
                      {
                        id: m,
                        maskUnits: 'userSpaceOnUse',
                        maskContentUnits: 'userSpaceOnUse',
                      },
                    ),
                    children: [u, b],
                  },
                  h = {
                    tag: 'defs',
                    children: [
                      {
                        tag: 'clipPath',
                        attributes: { id: g },
                        children: deGroup(d),
                      },
                      A,
                    ],
                  };
                return (
                  r.push(h, {
                    tag: 'rect',
                    attributes: _objectSpread2(
                      {
                        fill: 'currentColor',
                        'clip-path': 'url(#'.concat(g, ')'),
                        mask: 'url(#'.concat(m, ')'),
                      },
                      eD,
                    ),
                  }),
                  { children: r, attributes: t }
                );
              };
            },
          },
          {
            provides: function (e) {
              var r = !1;
              p.matchMedia &&
                (r = p.matchMedia('(prefers-reduced-motion: reduce)').matches),
                (e.missingIconAbstract = function () {
                  var e = [],
                    t = { fill: 'currentColor' },
                    a = {
                      attributeType: 'XML',
                      repeatCount: 'indefinite',
                      dur: '2s',
                    };
                  e.push({
                    tag: 'path',
                    attributes: _objectSpread2(
                      _objectSpread2({}, t),
                      {},
                      {
                        d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                      },
                    ),
                  });
                  var o = _objectSpread2(
                      _objectSpread2({}, a),
                      {},
                      { attributeName: 'opacity' },
                    ),
                    n = {
                      tag: 'circle',
                      attributes: _objectSpread2(
                        _objectSpread2({}, t),
                        {},
                        { cx: '256', cy: '364', r: '28' },
                      ),
                      children: [],
                    };
                  return (
                    r ||
                      n.children.push(
                        {
                          tag: 'animate',
                          attributes: _objectSpread2(
                            _objectSpread2({}, a),
                            {},
                            {
                              attributeName: 'r',
                              values: '28;14;28;28;14;28;',
                            },
                          ),
                        },
                        {
                          tag: 'animate',
                          attributes: _objectSpread2(
                            _objectSpread2({}, o),
                            {},
                            { values: '1;0;1;1;0;1;' },
                          ),
                        },
                      ),
                    e.push(n),
                    e.push({
                      tag: 'path',
                      attributes: _objectSpread2(
                        _objectSpread2({}, t),
                        {},
                        {
                          opacity: '1',
                          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                        },
                      ),
                      children: r
                        ? []
                        : [
                            {
                              tag: 'animate',
                              attributes: _objectSpread2(
                                _objectSpread2({}, o),
                                {},
                                { values: '1;0;0;0;0;1;' },
                              ),
                            },
                          ],
                    }),
                    r ||
                      e.push({
                        tag: 'path',
                        attributes: _objectSpread2(
                          _objectSpread2({}, t),
                          {},
                          {
                            opacity: '0',
                            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                          },
                        ),
                        children: [
                          {
                            tag: 'animate',
                            attributes: _objectSpread2(
                              _objectSpread2({}, o),
                              {},
                              { values: '0;0;1;1;0;0;' },
                            ),
                          },
                        ],
                      }),
                    { tag: 'g', attributes: { class: 'missing' }, children: e }
                  );
                });
            },
          },
          {
            hooks: function () {
              return {
                parseNodeAttributes: function (e, r) {
                  var t = r.getAttribute('data-fa-symbol');
                  return (e.symbol = null !== t && ('' === t || t)), e;
                },
              };
            },
          },
        ],
        { mixoutsTo: eP },
      ),
        eP.noAuto;
      var eI = eP.config;
      eP.library, eP.dom;
      var eL = eP.parse;
      eP.findIconDefinition, eP.toHtml;
      var ez = eP.icon;
      eP.layer, eP.text, eP.counter;
    },
    4171: (e, r, t) => {
      'use strict';
      t.r(r),
        t.d(r, {
          amber: () => t8,
          amberA: () => t7,
          amberDark: () => rr,
          amberDarkA: () => rt,
          amberDarkP3: () => ra,
          amberDarkP3A: () => ro,
          amberP3: () => t6,
          amberP3A: () => ae,
          blackA: () => an,
          blackP3A: () => al,
          blue: () => tc,
          blueA: () => td,
          blueDark: () => ef,
          blueDarkA: () => ey,
          blueDarkP3: () => eb,
          blueDarkP3A: () => em,
          blueP3: () => tp,
          blueP3A: () => tu,
          bronze: () => tL,
          bronzeA: () => tz,
          bronzeDark: () => eH,
          bronzeDarkA: () => eW,
          bronzeDarkP3: () => eB,
          bronzeDarkP3A: () => eG,
          bronzeP3: () => tF,
          bronzeP3A: () => tU,
          brown: () => tM,
          brownA: () => tN,
          brownDark: () => eL,
          brownDarkA: () => ez,
          brownDarkP3: () => eF,
          brownDarkP3A: () => eU,
          brownP3: () => tD,
          brownP3A: () => tI,
          crimson: () => rV,
          crimsonA: () => rY,
          crimsonDark: () => F,
          crimsonDarkA: () => U,
          crimsonDarkP3: () => H,
          crimsonDarkP3A: () => W,
          crimsonP3: () => rq,
          crimsonP3A: () => rX,
          cyan: () => tf,
          cyanA: () => ty,
          cyanDark: () => eg,
          cyanDarkA: () => eA,
          cyanDarkP3: () => eh,
          cyanDarkP3A: () => ev,
          cyanP3: () => tb,
          cyanP3A: () => tm,
          gold: () => tH,
          goldA: () => tW,
          goldDark: () => eV,
          goldDarkA: () => eY,
          goldDarkP3: () => eq,
          goldDarkP3A: () => eX,
          goldP3: () => tB,
          goldP3A: () => tG,
          grass: () => tE,
          grassA: () => tO,
          grassDark: () => eM,
          grassDarkA: () => eN,
          grassDarkP3: () => eD,
          grassDarkP3A: () => eI,
          grassP3: () => tC,
          grassP3A: () => tT,
          gray: () => rc,
          grayA: () => rd,
          grayDark: () => a,
          grayDarkA: () => o,
          grayDarkP3: () => n,
          grayDarkP3A: () => l,
          grayP3: () => rp,
          grayP3A: () => ru,
          green: () => tS,
          greenA: () => tx,
          greenDark: () => eE,
          greenDarkA: () => eO,
          greenDarkP3: () => eC,
          greenDarkP3A: () => eT,
          greenP3: () => tj,
          greenP3A: () => tR,
          indigo: () => tn,
          indigoA: () => tl,
          indigoDark: () => ec,
          indigoDarkA: () => ed,
          indigoDarkP3: () => ep,
          indigoDarkP3A: () => eu,
          indigoP3: () => ti,
          indigoP3A: () => ts,
          iris: () => tr,
          irisA: () => tt,
          irisDark: () => en,
          irisDarkA: () => el,
          irisDarkP3: () => ei,
          irisDarkP3A: () => es,
          irisP3: () => ta,
          irisP3A: () => to,
          jade: () => t_,
          jadeA: () => tP,
          jadeDark: () => eS,
          jadeDarkA: () => ex,
          jadeDarkP3: () => ej,
          jadeDarkP3A: () => eR,
          jadeP3: () => tw,
          jadeP3A: () => tk,
          lime: () => tQ,
          limeA: () => t0,
          limeDark: () => e2,
          limeDarkA: () => e9,
          limeDarkP3: () => e5,
          limeDarkP3A: () => e4,
          limeP3: () => t1,
          limeP3A: () => t3,
          mauve: () => rf,
          mauveA: () => ry,
          mauveDark: () => i,
          mauveDarkA: () => s,
          mauveDarkP3: () => c,
          mauveDarkP3A: () => d,
          mauveP3: () => rb,
          mauveP3A: () => rm,
          mint: () => tK,
          mintA: () => t$,
          mintDark: () => eQ,
          mintDarkA: () => e0,
          mintDarkP3: () => e1,
          mintDarkP3A: () => e3,
          mintP3: () => tZ,
          mintP3A: () => tJ,
          olive: () => rS,
          oliveA: () => rx,
          oliveDark: () => h,
          oliveDarkA: () => v,
          oliveDarkP3: () => _,
          oliveDarkP3A: () => P,
          oliveP3: () => rj,
          oliveP3A: () => rR,
          orange: () => ar,
          orangeA: () => at,
          orangeDark: () => rn,
          orangeDarkA: () => rl,
          orangeDarkP3: () => ri,
          orangeDarkP3A: () => rs,
          orangeP3: () => aa,
          orangeP3A: () => ao,
          pink: () => rK,
          pinkA: () => r$,
          pinkDark: () => B,
          pinkDarkA: () => G,
          pinkDarkP3: () => V,
          pinkDarkP3A: () => Y,
          pinkP3: () => rZ,
          pinkP3A: () => rJ,
          plum: () => rQ,
          plumA: () => r0,
          plumDark: () => q,
          plumDarkA: () => X,
          plumDarkP3: () => K,
          plumDarkP3A: () => $,
          plumP3: () => r1,
          plumP3A: () => r3,
          purple: () => r2,
          purpleA: () => r9,
          purpleDark: () => Z,
          purpleDarkA: () => J,
          purpleDarkP3: () => Q,
          purpleDarkP3A: () => ee,
          purpleP3: () => r5,
          purpleP3A: () => r4,
          red: () => rL,
          redA: () => rz,
          redDark: () => C,
          redDarkA: () => T,
          redDarkP3: () => M,
          redDarkP3A: () => N,
          redP3: () => rF,
          redP3A: () => rU,
          ruby: () => rH,
          rubyA: () => rW,
          rubyDark: () => D,
          rubyDarkA: () => I,
          rubyDarkP3: () => L,
          rubyDarkP3A: () => z,
          rubyP3: () => rB,
          rubyP3A: () => rG,
          sage: () => r_,
          sageA: () => rP,
          sageDark: () => b,
          sageDarkA: () => m,
          sageDarkP3: () => g,
          sageDarkP3A: () => A,
          sageP3: () => rw,
          sageP3A: () => rk,
          sand: () => rE,
          sandA: () => rO,
          sandDark: () => w,
          sandDarkA: () => k,
          sandDarkP3: () => S,
          sandDarkP3A: () => x,
          sandP3: () => rC,
          sandP3A: () => rT,
          sky: () => tV,
          skyA: () => tY,
          skyDark: () => eK,
          skyDarkA: () => e$,
          skyDarkP3: () => eZ,
          skyDarkP3A: () => eJ,
          skyP3: () => tq,
          skyP3A: () => tX,
          slate: () => rg,
          slateA: () => rA,
          slateDark: () => p,
          slateDarkA: () => u,
          slateDarkP3: () => f,
          slateDarkP3A: () => y,
          slateP3: () => rh,
          slateP3A: () => rv,
          teal: () => tg,
          tealA: () => tA,
          tealDark: () => e_,
          tealDarkA: () => eP,
          tealDarkP3: () => ew,
          tealDarkP3A: () => ek,
          tealP3: () => th,
          tealP3A: () => tv,
          tomato: () => rM,
          tomatoA: () => rN,
          tomatoDark: () => j,
          tomatoDarkA: () => R,
          tomatoDarkP3: () => E,
          tomatoDarkP3A: () => O,
          tomatoP3: () => rD,
          tomatoP3A: () => rI,
          violet: () => r8,
          violetA: () => r7,
          violetDark: () => er,
          violetDarkA: () => et,
          violetDarkP3: () => ea,
          violetDarkP3A: () => eo,
          violetP3: () => r6,
          violetP3A: () => te,
          whiteA: () => ai,
          whiteP3A: () => as,
          yellow: () => t2,
          yellowA: () => t9,
          yellowDark: () => e8,
          yellowDarkA: () => e7,
          yellowDarkP3: () => e6,
          yellowDarkP3A: () => re,
          yellowP3: () => t5,
          yellowP3A: () => t4,
        });
      let a = {
          gray1: '#111111',
          gray2: '#191919',
          gray3: '#222222',
          gray4: '#2a2a2a',
          gray5: '#313131',
          gray6: '#3a3a3a',
          gray7: '#484848',
          gray8: '#606060',
          gray9: '#6e6e6e',
          gray10: '#7b7b7b',
          gray11: '#b4b4b4',
          gray12: '#eeeeee',
        },
        o = {
          grayA1: '#00000000',
          grayA2: '#ffffff09',
          grayA3: '#ffffff12',
          grayA4: '#ffffff1b',
          grayA5: '#ffffff22',
          grayA6: '#ffffff2c',
          grayA7: '#ffffff3b',
          grayA8: '#ffffff55',
          grayA9: '#ffffff64',
          grayA10: '#ffffff72',
          grayA11: '#ffffffaf',
          grayA12: '#ffffffed',
        },
        n = {
          gray1: 'color(display-p3 0.067 0.067 0.067)',
          gray2: 'color(display-p3 0.098 0.098 0.098)',
          gray3: 'color(display-p3 0.135 0.135 0.135)',
          gray4: 'color(display-p3 0.163 0.163 0.163)',
          gray5: 'color(display-p3 0.192 0.192 0.192)',
          gray6: 'color(display-p3 0.228 0.228 0.228)',
          gray7: 'color(display-p3 0.283 0.283 0.283)',
          gray8: 'color(display-p3 0.375 0.375 0.375)',
          gray9: 'color(display-p3 0.431 0.431 0.431)',
          gray10: 'color(display-p3 0.484 0.484 0.484)',
          gray11: 'color(display-p3 0.706 0.706 0.706)',
          gray12: 'color(display-p3 0.933 0.933 0.933)',
        },
        l = {
          grayA1: 'color(display-p3 0 0 0 / 0)',
          grayA2: 'color(display-p3 1 1 1 / 0.034)',
          grayA3: 'color(display-p3 1 1 1 / 0.071)',
          grayA4: 'color(display-p3 1 1 1 / 0.105)',
          grayA5: 'color(display-p3 1 1 1 / 0.134)',
          grayA6: 'color(display-p3 1 1 1 / 0.172)',
          grayA7: 'color(display-p3 1 1 1 / 0.231)',
          grayA8: 'color(display-p3 1 1 1 / 0.332)',
          grayA9: 'color(display-p3 1 1 1 / 0.391)',
          grayA10: 'color(display-p3 1 1 1 / 0.445)',
          grayA11: 'color(display-p3 1 1 1 / 0.685)',
          grayA12: 'color(display-p3 1 1 1 / 0.929)',
        },
        i = {
          mauve1: '#121113',
          mauve2: '#1a191b',
          mauve3: '#232225',
          mauve4: '#2b292d',
          mauve5: '#323035',
          mauve6: '#3c393f',
          mauve7: '#49474e',
          mauve8: '#625f69',
          mauve9: '#6f6d78',
          mauve10: '#7c7a85',
          mauve11: '#b5b2bc',
          mauve12: '#eeeef0',
        },
        s = {
          mauveA1: '#00000000',
          mauveA2: '#f5f4f609',
          mauveA3: '#ebeaf814',
          mauveA4: '#eee5f81d',
          mauveA5: '#efe6fe25',
          mauveA6: '#f1e6fd30',
          mauveA7: '#eee9ff40',
          mauveA8: '#eee7ff5d',
          mauveA9: '#eae6fd6e',
          mauveA10: '#ece9fd7c',
          mauveA11: '#f5f1ffb7',
          mauveA12: '#fdfdffef',
        },
        c = {
          mauve1: 'color(display-p3 0.07 0.067 0.074)',
          mauve2: 'color(display-p3 0.101 0.098 0.105)',
          mauve3: 'color(display-p3 0.138 0.134 0.144)',
          mauve4: 'color(display-p3 0.167 0.161 0.175)',
          mauve5: 'color(display-p3 0.196 0.189 0.206)',
          mauve6: 'color(display-p3 0.232 0.225 0.245)',
          mauve7: 'color(display-p3 0.286 0.277 0.302)',
          mauve8: 'color(display-p3 0.383 0.373 0.408)',
          mauve9: 'color(display-p3 0.434 0.428 0.467)',
          mauve10: 'color(display-p3 0.487 0.48 0.519)',
          mauve11: 'color(display-p3 0.707 0.7 0.735)',
          mauve12: 'color(display-p3 0.933 0.933 0.94)',
        },
        d = {
          mauveA1: 'color(display-p3 0 0 0 / 0)',
          mauveA2: 'color(display-p3 0.996 0.992 1 / 0.034)',
          mauveA3: 'color(display-p3 0.937 0.933 0.992 / 0.077)',
          mauveA4: 'color(display-p3 0.957 0.918 0.996 / 0.111)',
          mauveA5: 'color(display-p3 0.937 0.906 0.996 / 0.145)',
          mauveA6: 'color(display-p3 0.953 0.925 0.996 / 0.183)',
          mauveA7: 'color(display-p3 0.945 0.929 1 / 0.246)',
          mauveA8: 'color(display-p3 0.937 0.918 1 / 0.361)',
          mauveA9: 'color(display-p3 0.933 0.918 1 / 0.424)',
          mauveA10: 'color(display-p3 0.941 0.925 1 / 0.479)',
          mauveA11: 'color(display-p3 0.965 0.961 1 / 0.712)',
          mauveA12: 'color(display-p3 0.992 0.992 1 / 0.937)',
        },
        p = {
          slate1: '#111113',
          slate2: '#18191b',
          slate3: '#212225',
          slate4: '#272a2d',
          slate5: '#2e3135',
          slate6: '#363a3f',
          slate7: '#43484e',
          slate8: '#5a6169',
          slate9: '#696e77',
          slate10: '#777b84',
          slate11: '#b0b4ba',
          slate12: '#edeef0',
        },
        u = {
          slateA1: '#00000000',
          slateA2: '#d8f4f609',
          slateA3: '#ddeaf814',
          slateA4: '#d3edf81d',
          slateA5: '#d9edfe25',
          slateA6: '#d6ebfd30',
          slateA7: '#d9edff40',
          slateA8: '#d9edff5d',
          slateA9: '#dfebfd6d',
          slateA10: '#e5edfd7b',
          slateA11: '#f1f7feb5',
          slateA12: '#fcfdffef',
        },
        f = {
          slate1: 'color(display-p3 0.067 0.067 0.074)',
          slate2: 'color(display-p3 0.095 0.098 0.105)',
          slate3: 'color(display-p3 0.13 0.135 0.145)',
          slate4: 'color(display-p3 0.156 0.163 0.176)',
          slate5: 'color(display-p3 0.183 0.191 0.206)',
          slate6: 'color(display-p3 0.215 0.226 0.244)',
          slate7: 'color(display-p3 0.265 0.28 0.302)',
          slate8: 'color(display-p3 0.357 0.381 0.409)',
          slate9: 'color(display-p3 0.415 0.431 0.463)',
          slate10: 'color(display-p3 0.469 0.483 0.514)',
          slate11: 'color(display-p3 0.692 0.704 0.728)',
          slate12: 'color(display-p3 0.93 0.933 0.94)',
        },
        y = {
          slateA1: 'color(display-p3 0 0 0 / 0)',
          slateA2: 'color(display-p3 0.875 0.992 1 / 0.034)',
          slateA3: 'color(display-p3 0.882 0.933 0.992 / 0.077)',
          slateA4: 'color(display-p3 0.882 0.953 0.996 / 0.111)',
          slateA5: 'color(display-p3 0.878 0.929 0.996 / 0.145)',
          slateA6: 'color(display-p3 0.882 0.949 0.996 / 0.183)',
          slateA7: 'color(display-p3 0.882 0.929 1 / 0.246)',
          slateA8: 'color(display-p3 0.871 0.937 1 / 0.361)',
          slateA9: 'color(display-p3 0.898 0.937 1 / 0.42)',
          slateA10: 'color(display-p3 0.918 0.945 1 / 0.475)',
          slateA11: 'color(display-p3 0.949 0.969 0.996 / 0.708)',
          slateA12: 'color(display-p3 0.988 0.992 1 / 0.937)',
        },
        b = {
          sage1: '#101211',
          sage2: '#171918',
          sage3: '#202221',
          sage4: '#272a29',
          sage5: '#2e3130',
          sage6: '#373b39',
          sage7: '#444947',
          sage8: '#5b625f',
          sage9: '#63706b',
          sage10: '#717d79',
          sage11: '#adb5b2',
          sage12: '#eceeed',
        },
        m = {
          sageA1: '#00000000',
          sageA2: '#f0f2f108',
          sageA3: '#f3f5f412',
          sageA4: '#f2fefd1a',
          sageA5: '#f1fbfa22',
          sageA6: '#edfbf42d',
          sageA7: '#edfcf73c',
          sageA8: '#ebfdf657',
          sageA9: '#dffdf266',
          sageA10: '#e5fdf674',
          sageA11: '#f4fefbb0',
          sageA12: '#fdfffeed',
        },
        g = {
          sage1: 'color(display-p3 0.064 0.07 0.067)',
          sage2: 'color(display-p3 0.092 0.098 0.094)',
          sage3: 'color(display-p3 0.128 0.135 0.131)',
          sage4: 'color(display-p3 0.155 0.164 0.159)',
          sage5: 'color(display-p3 0.183 0.193 0.188)',
          sage6: 'color(display-p3 0.218 0.23 0.224)',
          sage7: 'color(display-p3 0.269 0.285 0.277)',
          sage8: 'color(display-p3 0.362 0.382 0.373)',
          sage9: 'color(display-p3 0.398 0.438 0.421)',
          sage10: 'color(display-p3 0.453 0.49 0.474)',
          sage11: 'color(display-p3 0.685 0.709 0.697)',
          sage12: 'color(display-p3 0.927 0.933 0.93)',
        },
        A = {
          sageA1: 'color(display-p3 0 0 0 / 0)',
          sageA2: 'color(display-p3 0.976 0.988 0.984 / 0.03)',
          sageA3: 'color(display-p3 0.992 0.945 0.941 / 0.072)',
          sageA4: 'color(display-p3 0.988 0.996 0.992 / 0.102)',
          sageA5: 'color(display-p3 0.992 1 0.996 / 0.131)',
          sageA6: 'color(display-p3 0.973 1 0.976 / 0.173)',
          sageA7: 'color(display-p3 0.957 1 0.976 / 0.233)',
          sageA8: 'color(display-p3 0.957 1 0.984 / 0.334)',
          sageA9: 'color(display-p3 0.902 1 0.957 / 0.397)',
          sageA10: 'color(display-p3 0.929 1 0.973 / 0.452)',
          sageA11: 'color(display-p3 0.969 1 0.988 / 0.688)',
          sageA12: 'color(display-p3 0.992 1 0.996 / 0.929)',
        },
        h = {
          olive1: '#111210',
          olive2: '#181917',
          olive3: '#212220',
          olive4: '#282a27',
          olive5: '#2f312e',
          olive6: '#383a36',
          olive7: '#454843',
          olive8: '#5c625b',
          olive9: '#687066',
          olive10: '#767d74',
          olive11: '#afb5ad',
          olive12: '#eceeec',
        },
        v = {
          oliveA1: '#00000000',
          oliveA2: '#f1f2f008',
          oliveA3: '#f4f5f312',
          oliveA4: '#f3fef21a',
          oliveA5: '#f2fbf122',
          oliveA6: '#f4faed2c',
          oliveA7: '#f2fced3b',
          oliveA8: '#edfdeb57',
          oliveA9: '#ebfde766',
          oliveA10: '#f0fdec74',
          oliveA11: '#f6fef4b0',
          oliveA12: '#fdfffded',
        },
        _ = {
          olive1: 'color(display-p3 0.067 0.07 0.063)',
          olive2: 'color(display-p3 0.095 0.098 0.091)',
          olive3: 'color(display-p3 0.131 0.135 0.126)',
          olive4: 'color(display-p3 0.158 0.163 0.153)',
          olive5: 'color(display-p3 0.186 0.192 0.18)',
          olive6: 'color(display-p3 0.221 0.229 0.215)',
          olive7: 'color(display-p3 0.273 0.284 0.266)',
          olive8: 'color(display-p3 0.365 0.382 0.359)',
          olive9: 'color(display-p3 0.414 0.438 0.404)',
          olive10: 'color(display-p3 0.467 0.49 0.458)',
          olive11: 'color(display-p3 0.69 0.709 0.682)',
          olive12: 'color(display-p3 0.927 0.933 0.926)',
        },
        P = {
          oliveA1: 'color(display-p3 0 0 0 / 0)',
          oliveA2: 'color(display-p3 0.984 0.988 0.976 / 0.03)',
          oliveA3: 'color(display-p3 0.992 0.996 0.988 / 0.068)',
          oliveA4: 'color(display-p3 0.953 0.996 0.949 / 0.102)',
          oliveA5: 'color(display-p3 0.969 1 0.965 / 0.131)',
          oliveA6: 'color(display-p3 0.973 1 0.969 / 0.169)',
          oliveA7: 'color(display-p3 0.98 1 0.961 / 0.228)',
          oliveA8: 'color(display-p3 0.961 1 0.957 / 0.334)',
          oliveA9: 'color(display-p3 0.949 1 0.922 / 0.397)',
          oliveA10: 'color(display-p3 0.953 1 0.941 / 0.452)',
          oliveA11: 'color(display-p3 0.976 1 0.965 / 0.688)',
          oliveA12: 'color(display-p3 0.992 1 0.992 / 0.929)',
        },
        w = {
          sand1: '#111110',
          sand2: '#191918',
          sand3: '#222221',
          sand4: '#2a2a28',
          sand5: '#31312e',
          sand6: '#3b3a37',
          sand7: '#494844',
          sand8: '#62605b',
          sand9: '#6f6d66',
          sand10: '#7c7b74',
          sand11: '#b5b3ad',
          sand12: '#eeeeec',
        },
        k = {
          sandA1: '#00000000',
          sandA2: '#f4f4f309',
          sandA3: '#f6f6f513',
          sandA4: '#fefef31b',
          sandA5: '#fbfbeb23',
          sandA6: '#fffaed2d',
          sandA7: '#fffbed3c',
          sandA8: '#fff9eb57',
          sandA9: '#fffae965',
          sandA10: '#fffdee73',
          sandA11: '#fffcf4b0',
          sandA12: '#fffffded',
        },
        S = {
          sand1: 'color(display-p3 0.067 0.067 0.063)',
          sand2: 'color(display-p3 0.098 0.098 0.094)',
          sand3: 'color(display-p3 0.135 0.135 0.129)',
          sand4: 'color(display-p3 0.164 0.163 0.156)',
          sand5: 'color(display-p3 0.193 0.192 0.183)',
          sand6: 'color(display-p3 0.23 0.229 0.217)',
          sand7: 'color(display-p3 0.285 0.282 0.267)',
          sand8: 'color(display-p3 0.384 0.378 0.357)',
          sand9: 'color(display-p3 0.434 0.428 0.403)',
          sand10: 'color(display-p3 0.487 0.481 0.456)',
          sand11: 'color(display-p3 0.707 0.703 0.68)',
          sand12: 'color(display-p3 0.933 0.933 0.926)',
        },
        x = {
          sandA1: 'color(display-p3 0 0 0 / 0)',
          sandA2: 'color(display-p3 0.992 0.992 0.988 / 0.034)',
          sandA3: 'color(display-p3 0.996 0.996 0.992 / 0.072)',
          sandA4: 'color(display-p3 0.992 0.992 0.953 / 0.106)',
          sandA5: 'color(display-p3 1 1 0.965 / 0.135)',
          sandA6: 'color(display-p3 1 0.976 0.929 / 0.177)',
          sandA7: 'color(display-p3 1 0.984 0.929 / 0.236)',
          sandA8: 'color(display-p3 1 0.976 0.925 / 0.341)',
          sandA9: 'color(display-p3 1 0.98 0.925 / 0.395)',
          sandA10: 'color(display-p3 1 0.992 0.933 / 0.45)',
          sandA11: 'color(display-p3 1 0.996 0.961 / 0.685)',
          sandA12: 'color(display-p3 1 1 0.992 / 0.929)',
        },
        j = {
          tomato1: '#181111',
          tomato2: '#1f1513',
          tomato3: '#391714',
          tomato4: '#4e1511',
          tomato5: '#5e1c16',
          tomato6: '#6e2920',
          tomato7: '#853a2d',
          tomato8: '#ac4d39',
          tomato9: '#e54d2e',
          tomato10: '#ec6142',
          tomato11: '#ff977d',
          tomato12: '#fbd3cb',
        },
        R = {
          tomatoA1: '#f1121208',
          tomatoA2: '#ff55330f',
          tomatoA3: '#ff35232b',
          tomatoA4: '#fd201142',
          tomatoA5: '#fe332153',
          tomatoA6: '#ff4f3864',
          tomatoA7: '#fd644a7d',
          tomatoA8: '#fe6d4ea7',
          tomatoA9: '#fe5431e4',
          tomatoA10: '#ff6847eb',
          tomatoA11: '#ff977d',
          tomatoA12: '#ffd6cefb',
        },
        E = {
          tomato1: 'color(display-p3 0.09 0.068 0.067)',
          tomato2: 'color(display-p3 0.115 0.084 0.076)',
          tomato3: 'color(display-p3 0.205 0.097 0.083)',
          tomato4: 'color(display-p3 0.282 0.099 0.077)',
          tomato5: 'color(display-p3 0.339 0.129 0.101)',
          tomato6: 'color(display-p3 0.398 0.179 0.141)',
          tomato7: 'color(display-p3 0.487 0.245 0.194)',
          tomato8: 'color(display-p3 0.629 0.322 0.248)',
          tomato9: 'color(display-p3 0.831 0.345 0.231)',
          tomato10: 'color(display-p3 0.862 0.415 0.298)',
          tomato11: 'color(display-p3 1 0.585 0.455)',
          tomato12: 'color(display-p3 0.959 0.833 0.802)',
        },
        O = {
          tomatoA1: 'color(display-p3 0.973 0.071 0.071 / 0.026)',
          tomatoA2: 'color(display-p3 0.992 0.376 0.224 / 0.051)',
          tomatoA3: 'color(display-p3 0.996 0.282 0.176 / 0.148)',
          tomatoA4: 'color(display-p3 1 0.204 0.118 / 0.232)',
          tomatoA5: 'color(display-p3 1 0.286 0.192 / 0.29)',
          tomatoA6: 'color(display-p3 1 0.392 0.278 / 0.353)',
          tomatoA7: 'color(display-p3 1 0.459 0.349 / 0.45)',
          tomatoA8: 'color(display-p3 1 0.49 0.369 / 0.601)',
          tomatoA9: 'color(display-p3 1 0.408 0.267 / 0.82)',
          tomatoA10: 'color(display-p3 1 0.478 0.341 / 0.853)',
          tomatoA11: 'color(display-p3 1 0.585 0.455)',
          tomatoA12: 'color(display-p3 0.959 0.833 0.802)',
        },
        C = {
          red1: '#191111',
          red2: '#201314',
          red3: '#3b1219',
          red4: '#500f1c',
          red5: '#611623',
          red6: '#72232d',
          red7: '#8c333a',
          red8: '#b54548',
          red9: '#e5484d',
          red10: '#ec5d5e',
          red11: '#ff9592',
          red12: '#ffd1d9',
        },
        T = {
          redA1: '#f4121209',
          redA2: '#f22f3e11',
          redA3: '#ff173f2d',
          redA4: '#fe0a3b44',
          redA5: '#ff204756',
          redA6: '#ff3e5668',
          redA7: '#ff536184',
          redA8: '#ff5d61b0',
          redA9: '#fe4e54e4',
          redA10: '#ff6465eb',
          redA11: '#ff9592',
          redA12: '#ffd1d9',
        },
        M = {
          red1: 'color(display-p3 0.093 0.068 0.067)',
          red2: 'color(display-p3 0.118 0.077 0.079)',
          red3: 'color(display-p3 0.211 0.081 0.099)',
          red4: 'color(display-p3 0.287 0.079 0.113)',
          red5: 'color(display-p3 0.348 0.11 0.142)',
          red6: 'color(display-p3 0.414 0.16 0.183)',
          red7: 'color(display-p3 0.508 0.224 0.236)',
          red8: 'color(display-p3 0.659 0.298 0.297)',
          red9: 'color(display-p3 0.83 0.329 0.324)',
          red10: 'color(display-p3 0.861 0.403 0.387)',
          red11: 'color(display-p3 1 0.57 0.55)',
          red12: 'color(display-p3 0.971 0.826 0.852)',
        },
        N = {
          redA1: 'color(display-p3 0.984 0.071 0.071 / 0.03)',
          redA2: 'color(display-p3 0.996 0.282 0.282 / 0.055)',
          redA3: 'color(display-p3 1 0.169 0.271 / 0.156)',
          redA4: 'color(display-p3 1 0.118 0.267 / 0.236)',
          redA5: 'color(display-p3 1 0.212 0.314 / 0.303)',
          redA6: 'color(display-p3 1 0.318 0.38 / 0.374)',
          redA7: 'color(display-p3 1 0.4 0.424 / 0.475)',
          redA8: 'color(display-p3 1 0.431 0.431 / 0.635)',
          redA9: 'color(display-p3 1 0.388 0.384 / 0.82)',
          redA10: 'color(display-p3 1 0.463 0.447 / 0.853)',
          redA11: 'color(display-p3 1 0.57 0.55)',
          redA12: 'color(display-p3 0.971 0.826 0.852)',
        },
        D = {
          ruby1: '#191113',
          ruby2: '#1e1517',
          ruby3: '#3a141e',
          ruby4: '#4e1325',
          ruby5: '#5e1a2e',
          ruby6: '#6f2539',
          ruby7: '#883447',
          ruby8: '#b3445a',
          ruby9: '#e54666',
          ruby10: '#ec5a72',
          ruby11: '#ff949d',
          ruby12: '#fed2e1',
        },
        I = {
          rubyA1: '#f4124a09',
          rubyA2: '#fe5a7f0e',
          rubyA3: '#ff235d2c',
          rubyA4: '#fd195e42',
          rubyA5: '#fe2d6b53',
          rubyA6: '#ff447665',
          rubyA7: '#ff577d80',
          rubyA8: '#ff5c7cae',
          rubyA9: '#fe4c70e4',
          rubyA10: '#ff617beb',
          rubyA11: '#ff949d',
          rubyA12: '#ffd3e2fe',
        },
        L = {
          ruby1: 'color(display-p3 0.093 0.068 0.074)',
          ruby2: 'color(display-p3 0.113 0.083 0.089)',
          ruby3: 'color(display-p3 0.208 0.088 0.117)',
          ruby4: 'color(display-p3 0.279 0.092 0.147)',
          ruby5: 'color(display-p3 0.337 0.12 0.18)',
          ruby6: 'color(display-p3 0.401 0.166 0.223)',
          ruby7: 'color(display-p3 0.495 0.224 0.281)',
          ruby8: 'color(display-p3 0.652 0.295 0.359)',
          ruby9: 'color(display-p3 0.83 0.323 0.408)',
          ruby10: 'color(display-p3 0.857 0.392 0.455)',
          ruby11: 'color(display-p3 1 0.57 0.59)',
          ruby12: 'color(display-p3 0.968 0.83 0.88)',
        },
        z = {
          rubyA1: 'color(display-p3 0.984 0.071 0.329 / 0.03)',
          rubyA2: 'color(display-p3 0.992 0.376 0.529 / 0.051)',
          rubyA3: 'color(display-p3 0.996 0.196 0.404 / 0.152)',
          rubyA4: 'color(display-p3 1 0.173 0.416 / 0.227)',
          rubyA5: 'color(display-p3 1 0.259 0.459 / 0.29)',
          rubyA6: 'color(display-p3 1 0.341 0.506 / 0.358)',
          rubyA7: 'color(display-p3 1 0.412 0.541 / 0.458)',
          rubyA8: 'color(display-p3 1 0.431 0.537 / 0.627)',
          rubyA9: 'color(display-p3 1 0.376 0.482 / 0.82)',
          rubyA10: 'color(display-p3 1 0.447 0.522 / 0.849)',
          rubyA11: 'color(display-p3 1 0.57 0.59)',
          rubyA12: 'color(display-p3 0.968 0.83 0.88)',
        },
        F = {
          crimson1: '#191114',
          crimson2: '#201318',
          crimson3: '#381525',
          crimson4: '#4d122f',
          crimson5: '#5c1839',
          crimson6: '#6d2545',
          crimson7: '#873356',
          crimson8: '#b0436e',
          crimson9: '#e93d82',
          crimson10: '#ee518a',
          crimson11: '#ff92ad',
          crimson12: '#fdd3e8',
        },
        U = {
          crimsonA1: '#f4126709',
          crimsonA2: '#f22f7a11',
          crimsonA3: '#fe2a8b2a',
          crimsonA4: '#fd158741',
          crimsonA5: '#fd278f51',
          crimsonA6: '#fe459763',
          crimsonA7: '#fd559b7f',
          crimsonA8: '#fe5b9bab',
          crimsonA9: '#fe418de8',
          crimsonA10: '#ff5693ed',
          crimsonA11: '#ff92ad',
          crimsonA12: '#ffd5eafd',
        },
        H = {
          crimson1: 'color(display-p3 0.093 0.068 0.078)',
          crimson2: 'color(display-p3 0.117 0.078 0.095)',
          crimson3: 'color(display-p3 0.203 0.091 0.143)',
          crimson4: 'color(display-p3 0.277 0.087 0.182)',
          crimson5: 'color(display-p3 0.332 0.115 0.22)',
          crimson6: 'color(display-p3 0.394 0.162 0.268)',
          crimson7: 'color(display-p3 0.489 0.222 0.336)',
          crimson8: 'color(display-p3 0.638 0.289 0.429)',
          crimson9: 'color(display-p3 0.843 0.298 0.507)',
          crimson10: 'color(display-p3 0.864 0.364 0.539)',
          crimson11: 'color(display-p3 1 0.56 0.66)',
          crimson12: 'color(display-p3 0.966 0.834 0.906)',
        },
        W = {
          crimsonA1: 'color(display-p3 0.984 0.071 0.463 / 0.03)',
          crimsonA2: 'color(display-p3 0.996 0.282 0.569 / 0.055)',
          crimsonA3: 'color(display-p3 0.996 0.227 0.573 / 0.148)',
          crimsonA4: 'color(display-p3 1 0.157 0.569 / 0.227)',
          crimsonA5: 'color(display-p3 1 0.231 0.604 / 0.286)',
          crimsonA6: 'color(display-p3 1 0.337 0.643 / 0.349)',
          crimsonA7: 'color(display-p3 1 0.416 0.663 / 0.454)',
          crimsonA8: 'color(display-p3 0.996 0.427 0.651 / 0.614)',
          crimsonA9: 'color(display-p3 1 0.345 0.596 / 0.832)',
          crimsonA10: 'color(display-p3 1 0.42 0.62 / 0.853)',
          crimsonA11: 'color(display-p3 1 0.56 0.66)',
          crimsonA12: 'color(display-p3 0.966 0.834 0.906)',
        },
        B = {
          pink1: '#191117',
          pink2: '#21121d',
          pink3: '#37172f',
          pink4: '#4b143d',
          pink5: '#591c47',
          pink6: '#692955',
          pink7: '#833869',
          pink8: '#a84885',
          pink9: '#d6409f',
          pink10: '#de51a8',
          pink11: '#ff8dcc',
          pink12: '#fdd1ea',
        },
        G = {
          pinkA1: '#f412bc09',
          pinkA2: '#f420bb12',
          pinkA3: '#fe37cc29',
          pinkA4: '#fc1ec43f',
          pinkA5: '#fd35c24e',
          pinkA6: '#fd51c75f',
          pinkA7: '#fd62c87b',
          pinkA8: '#ff68c8a2',
          pinkA9: '#fe49bcd4',
          pinkA10: '#ff5cc0dc',
          pinkA11: '#ff8dcc',
          pinkA12: '#ffd3ecfd',
        },
        V = {
          pink1: 'color(display-p3 0.093 0.068 0.089)',
          pink2: 'color(display-p3 0.121 0.073 0.11)',
          pink3: 'color(display-p3 0.198 0.098 0.179)',
          pink4: 'color(display-p3 0.271 0.095 0.231)',
          pink5: 'color(display-p3 0.32 0.127 0.273)',
          pink6: 'color(display-p3 0.382 0.177 0.326)',
          pink7: 'color(display-p3 0.477 0.238 0.405)',
          pink8: 'color(display-p3 0.612 0.304 0.51)',
          pink9: 'color(display-p3 0.775 0.297 0.61)',
          pink10: 'color(display-p3 0.808 0.356 0.645)',
          pink11: 'color(display-p3 1 0.535 0.78)',
          pink12: 'color(display-p3 0.964 0.826 0.912)',
        },
        Y = {
          pinkA1: 'color(display-p3 0.984 0.071 0.855 / 0.03)',
          pinkA2: 'color(display-p3 1 0.2 0.8 / 0.059)',
          pinkA3: 'color(display-p3 1 0.294 0.886 / 0.139)',
          pinkA4: 'color(display-p3 1 0.192 0.82 / 0.219)',
          pinkA5: 'color(display-p3 1 0.282 0.827 / 0.274)',
          pinkA6: 'color(display-p3 1 0.396 0.835 / 0.337)',
          pinkA7: 'color(display-p3 1 0.459 0.831 / 0.442)',
          pinkA8: 'color(display-p3 1 0.478 0.827 / 0.585)',
          pinkA9: 'color(display-p3 1 0.373 0.784 / 0.761)',
          pinkA10: 'color(display-p3 1 0.435 0.792 / 0.795)',
          pinkA11: 'color(display-p3 1 0.535 0.78)',
          pinkA12: 'color(display-p3 0.964 0.826 0.912)',
        },
        q = {
          plum1: '#181118',
          plum2: '#201320',
          plum3: '#351a35',
          plum4: '#451d47',
          plum5: '#512454',
          plum6: '#5e3061',
          plum7: '#734079',
          plum8: '#92549c',
          plum9: '#ab4aba',
          plum10: '#b658c4',
          plum11: '#e796f3',
          plum12: '#f4d4f4',
        },
        X = {
          plumA1: '#f112f108',
          plumA2: '#f22ff211',
          plumA3: '#fd4cfd27',
          plumA4: '#f646ff3a',
          plumA5: '#f455ff48',
          plumA6: '#f66dff56',
          plumA7: '#f07cfd70',
          plumA8: '#ee84ff95',
          plumA9: '#e961feb6',
          plumA10: '#ed70ffc0',
          plumA11: '#f19cfef3',
          plumA12: '#feddfef4',
        },
        K = {
          plum1: 'color(display-p3 0.09 0.068 0.092)',
          plum2: 'color(display-p3 0.118 0.077 0.121)',
          plum3: 'color(display-p3 0.192 0.105 0.202)',
          plum4: 'color(display-p3 0.25 0.121 0.271)',
          plum5: 'color(display-p3 0.293 0.152 0.319)',
          plum6: 'color(display-p3 0.343 0.198 0.372)',
          plum7: 'color(display-p3 0.424 0.262 0.461)',
          plum8: 'color(display-p3 0.54 0.341 0.595)',
          plum9: 'color(display-p3 0.624 0.313 0.708)',
          plum10: 'color(display-p3 0.666 0.365 0.748)',
          plum11: 'color(display-p3 0.86 0.602 0.933)',
          plum12: 'color(display-p3 0.936 0.836 0.949)',
        },
        $ = {
          plumA1: 'color(display-p3 0.973 0.071 0.973 / 0.026)',
          plumA2: 'color(display-p3 0.933 0.267 1 / 0.059)',
          plumA3: 'color(display-p3 0.918 0.333 0.996 / 0.148)',
          plumA4: 'color(display-p3 0.91 0.318 1 / 0.219)',
          plumA5: 'color(display-p3 0.914 0.388 1 / 0.269)',
          plumA6: 'color(display-p3 0.906 0.463 1 / 0.328)',
          plumA7: 'color(display-p3 0.906 0.529 1 / 0.425)',
          plumA8: 'color(display-p3 0.906 0.553 1 / 0.568)',
          plumA9: 'color(display-p3 0.875 0.427 1 / 0.69)',
          plumA10: 'color(display-p3 0.886 0.471 0.996 / 0.732)',
          plumA11: 'color(display-p3 0.86 0.602 0.933)',
          plumA12: 'color(display-p3 0.936 0.836 0.949)',
        },
        Z = {
          purple1: '#18111b',
          purple2: '#1e1523',
          purple3: '#301c3b',
          purple4: '#3d224e',
          purple5: '#48295c',
          purple6: '#54346b',
          purple7: '#664282',
          purple8: '#8457aa',
          purple9: '#8e4ec6',
          purple10: '#9a5cd0',
          purple11: '#d19dff',
          purple12: '#ecd9fa',
        },
        J = {
          purpleA1: '#b412f90b',
          purpleA2: '#b744f714',
          purpleA3: '#c150ff2d',
          purpleA4: '#bb53fd42',
          purpleA5: '#be5cfd51',
          purpleA6: '#c16dfd61',
          purpleA7: '#c378fd7a',
          purpleA8: '#c47effa4',
          purpleA9: '#b661ffc2',
          purpleA10: '#bc6fffcd',
          purpleA11: '#d19dff',
          purpleA12: '#f1ddfffa',
        },
        Q = {
          purple1: 'color(display-p3 0.09 0.068 0.103)',
          purple2: 'color(display-p3 0.113 0.082 0.134)',
          purple3: 'color(display-p3 0.175 0.112 0.224)',
          purple4: 'color(display-p3 0.224 0.137 0.297)',
          purple5: 'color(display-p3 0.264 0.167 0.349)',
          purple6: 'color(display-p3 0.311 0.208 0.406)',
          purple7: 'color(display-p3 0.381 0.266 0.496)',
          purple8: 'color(display-p3 0.49 0.349 0.649)',
          purple9: 'color(display-p3 0.523 0.318 0.751)',
          purple10: 'color(display-p3 0.57 0.373 0.791)',
          purple11: 'color(display-p3 0.8 0.62 1)',
          purple12: 'color(display-p3 0.913 0.854 0.971)',
        },
        ee = {
          purpleA1: 'color(display-p3 0.686 0.071 0.996 / 0.038)',
          purpleA2: 'color(display-p3 0.722 0.286 0.996 / 0.072)',
          purpleA3: 'color(display-p3 0.718 0.349 0.996 / 0.169)',
          purpleA4: 'color(display-p3 0.702 0.353 1 / 0.248)',
          purpleA5: 'color(display-p3 0.718 0.404 1 / 0.303)',
          purpleA6: 'color(display-p3 0.733 0.455 1 / 0.366)',
          purpleA7: 'color(display-p3 0.753 0.506 1 / 0.458)',
          purpleA8: 'color(display-p3 0.749 0.522 1 / 0.622)',
          purpleA9: 'color(display-p3 0.686 0.408 1 / 0.736)',
          purpleA10: 'color(display-p3 0.71 0.459 1 / 0.778)',
          purpleA11: 'color(display-p3 0.8 0.62 1)',
          purpleA12: 'color(display-p3 0.913 0.854 0.971)',
        },
        er = {
          violet1: '#14121f',
          violet2: '#1b1525',
          violet3: '#291f43',
          violet4: '#33255b',
          violet5: '#3c2e69',
          violet6: '#473876',
          violet7: '#56468b',
          violet8: '#6958ad',
          violet9: '#6e56cf',
          violet10: '#7d66d9',
          violet11: '#baa7ff',
          violet12: '#e2ddfe',
        },
        et = {
          violetA1: '#4422ff0f',
          violetA2: '#853ff916',
          violetA3: '#8354fe36',
          violetA4: '#7d51fd50',
          violetA5: '#845ffd5f',
          violetA6: '#8f6cfd6d',
          violetA7: '#9879ff83',
          violetA8: '#977dfea8',
          violetA9: '#8668ffcc',
          violetA10: '#9176fed7',
          violetA11: '#baa7ff',
          violetA12: '#e3defffe',
        },
        ea = {
          violet1: 'color(display-p3 0.077 0.071 0.118)',
          violet2: 'color(display-p3 0.101 0.084 0.141)',
          violet3: 'color(display-p3 0.154 0.123 0.256)',
          violet4: 'color(display-p3 0.191 0.148 0.345)',
          violet5: 'color(display-p3 0.226 0.182 0.396)',
          violet6: 'color(display-p3 0.269 0.223 0.449)',
          violet7: 'color(display-p3 0.326 0.277 0.53)',
          violet8: 'color(display-p3 0.399 0.346 0.656)',
          violet9: 'color(display-p3 0.417 0.341 0.784)',
          violet10: 'color(display-p3 0.477 0.402 0.823)',
          violet11: 'color(display-p3 0.72 0.65 1)',
          violet12: 'color(display-p3 0.883 0.867 0.986)',
        },
        eo = {
          violetA1: 'color(display-p3 0.282 0.141 0.996 / 0.055)',
          violetA2: 'color(display-p3 0.51 0.263 1 / 0.08)',
          violetA3: 'color(display-p3 0.494 0.337 0.996 / 0.202)',
          violetA4: 'color(display-p3 0.49 0.345 1 / 0.299)',
          violetA5: 'color(display-p3 0.525 0.392 1 / 0.353)',
          violetA6: 'color(display-p3 0.569 0.455 1 / 0.408)',
          violetA7: 'color(display-p3 0.588 0.494 1 / 0.496)',
          violetA8: 'color(display-p3 0.596 0.51 1 / 0.631)',
          violetA9: 'color(display-p3 0.522 0.424 1 / 0.769)',
          violetA10: 'color(display-p3 0.576 0.482 1 / 0.811)',
          violetA11: 'color(display-p3 0.72 0.65 1)',
          violetA12: 'color(display-p3 0.883 0.867 0.986)',
        },
        en = {
          iris1: '#13131e',
          iris2: '#171625',
          iris3: '#202248',
          iris4: '#262a65',
          iris5: '#303374',
          iris6: '#3d3e82',
          iris7: '#4a4a95',
          iris8: '#5958b1',
          iris9: '#5b5bd6',
          iris10: '#6e6ade',
          iris11: '#b1a9ff',
          iris12: '#e0dffe',
        },
        el = {
          irisA1: '#3636fe0e',
          irisA2: '#564bf916',
          irisA3: '#525bff3b',
          irisA4: '#4d58ff5a',
          irisA5: '#5b62fd6b',
          irisA6: '#6d6ffd7a',
          irisA7: '#7777fe8e',
          irisA8: '#7b7afeac',
          irisA9: '#6a6afed4',
          irisA10: '#7d79ffdc',
          irisA11: '#b1a9ff',
          irisA12: '#e1e0fffe',
        },
        ei = {
          iris1: 'color(display-p3 0.075 0.075 0.114)',
          iris2: 'color(display-p3 0.089 0.086 0.14)',
          iris3: 'color(display-p3 0.128 0.134 0.272)',
          iris4: 'color(display-p3 0.153 0.165 0.382)',
          iris5: 'color(display-p3 0.192 0.201 0.44)',
          iris6: 'color(display-p3 0.239 0.241 0.491)',
          iris7: 'color(display-p3 0.291 0.289 0.565)',
          iris8: 'color(display-p3 0.35 0.345 0.673)',
          iris9: 'color(display-p3 0.357 0.357 0.81)',
          iris10: 'color(display-p3 0.428 0.416 0.843)',
          iris11: 'color(display-p3 0.685 0.662 1)',
          iris12: 'color(display-p3 0.878 0.875 0.986)',
        },
        es = {
          irisA1: 'color(display-p3 0.224 0.224 0.992 / 0.051)',
          irisA2: 'color(display-p3 0.361 0.314 1 / 0.08)',
          irisA3: 'color(display-p3 0.357 0.373 1 / 0.219)',
          irisA4: 'color(display-p3 0.325 0.361 1 / 0.337)',
          irisA5: 'color(display-p3 0.38 0.4 1 / 0.4)',
          irisA6: 'color(display-p3 0.447 0.447 1 / 0.454)',
          irisA7: 'color(display-p3 0.486 0.486 1 / 0.534)',
          irisA8: 'color(display-p3 0.502 0.494 1 / 0.652)',
          irisA9: 'color(display-p3 0.431 0.431 1 / 0.799)',
          irisA10: 'color(display-p3 0.502 0.486 1 / 0.832)',
          irisA11: 'color(display-p3 0.685 0.662 1)',
          irisA12: 'color(display-p3 0.878 0.875 0.986)',
        },
        ec = {
          indigo1: '#11131f',
          indigo2: '#141726',
          indigo3: '#182449',
          indigo4: '#1d2e62',
          indigo5: '#253974',
          indigo6: '#304384',
          indigo7: '#3a4f97',
          indigo8: '#435db1',
          indigo9: '#3e63dd',
          indigo10: '#5472e4',
          indigo11: '#9eb1ff',
          indigo12: '#d6e1ff',
        },
        ed = {
          indigoA1: '#1133ff0f',
          indigoA2: '#3354fa17',
          indigoA3: '#2f62ff3c',
          indigoA4: '#3566ff57',
          indigoA5: '#4171fd6b',
          indigoA6: '#5178fd7c',
          indigoA7: '#5a7fff90',
          indigoA8: '#5b81feac',
          indigoA9: '#4671ffdb',
          indigoA10: '#5c7efee3',
          indigoA11: '#9eb1ff',
          indigoA12: '#d6e1ff',
        },
        ep = {
          indigo1: 'color(display-p3 0.068 0.074 0.118)',
          indigo2: 'color(display-p3 0.081 0.089 0.144)',
          indigo3: 'color(display-p3 0.105 0.141 0.275)',
          indigo4: 'color(display-p3 0.129 0.18 0.369)',
          indigo5: 'color(display-p3 0.163 0.22 0.439)',
          indigo6: 'color(display-p3 0.203 0.262 0.5)',
          indigo7: 'color(display-p3 0.245 0.309 0.575)',
          indigo8: 'color(display-p3 0.285 0.362 0.674)',
          indigo9: 'color(display-p3 0.276 0.384 0.837)',
          indigo10: 'color(display-p3 0.354 0.445 0.866)',
          indigo11: 'color(display-p3 0.63 0.69 1)',
          indigo12: 'color(display-p3 0.848 0.881 0.99)',
        },
        eu = {
          indigoA1: 'color(display-p3 0.071 0.212 0.996 / 0.055)',
          indigoA2: 'color(display-p3 0.251 0.345 0.988 / 0.085)',
          indigoA3: 'color(display-p3 0.243 0.404 1 / 0.223)',
          indigoA4: 'color(display-p3 0.263 0.42 1 / 0.324)',
          indigoA5: 'color(display-p3 0.314 0.451 1 / 0.4)',
          indigoA6: 'color(display-p3 0.361 0.49 1 / 0.467)',
          indigoA7: 'color(display-p3 0.388 0.51 1 / 0.547)',
          indigoA8: 'color(display-p3 0.404 0.518 1 / 0.652)',
          indigoA9: 'color(display-p3 0.318 0.451 1 / 0.824)',
          indigoA10: 'color(display-p3 0.404 0.506 1 / 0.858)',
          indigoA11: 'color(display-p3 0.63 0.69 1)',
          indigoA12: 'color(display-p3 0.848 0.881 0.99)',
        },
        ef = {
          blue1: '#0d1520',
          blue2: '#111927',
          blue3: '#0d2847',
          blue4: '#003362',
          blue5: '#004074',
          blue6: '#104d87',
          blue7: '#205d9e',
          blue8: '#2870bd',
          blue9: '#0090ff',
          blue10: '#3b9eff',
          blue11: '#70b8ff',
          blue12: '#c2e6ff',
        },
        ey = {
          blueA1: '#004df211',
          blueA2: '#1166fb18',
          blueA3: '#0077ff3a',
          blueA4: '#0075ff57',
          blueA5: '#0081fd6b',
          blueA6: '#0f89fd7f',
          blueA7: '#2a91fe98',
          blueA8: '#3094feb9',
          blueA9: '#0090ff',
          blueA10: '#3b9eff',
          blueA11: '#70b8ff',
          blueA12: '#c2e6ff',
        },
        eb = {
          blue1: 'color(display-p3 0.057 0.081 0.122)',
          blue2: 'color(display-p3 0.072 0.098 0.147)',
          blue3: 'color(display-p3 0.078 0.154 0.27)',
          blue4: 'color(display-p3 0.033 0.197 0.37)',
          blue5: 'color(display-p3 0.08 0.245 0.441)',
          blue6: 'color(display-p3 0.14 0.298 0.511)',
          blue7: 'color(display-p3 0.195 0.361 0.6)',
          blue8: 'color(display-p3 0.239 0.434 0.72)',
          blue9: 'color(display-p3 0.247 0.556 0.969)',
          blue10: 'color(display-p3 0.344 0.612 0.973)',
          blue11: 'color(display-p3 0.49 0.72 1)',
          blue12: 'color(display-p3 0.788 0.898 0.99)',
        },
        em = {
          blueA1: 'color(display-p3 0 0.333 1 / 0.059)',
          blueA2: 'color(display-p3 0.114 0.435 0.988 / 0.085)',
          blueA3: 'color(display-p3 0.122 0.463 1 / 0.219)',
          blueA4: 'color(display-p3 0 0.467 1 / 0.324)',
          blueA5: 'color(display-p3 0.098 0.51 1 / 0.4)',
          blueA6: 'color(display-p3 0.224 0.557 1 / 0.475)',
          blueA7: 'color(display-p3 0.294 0.584 1 / 0.572)',
          blueA8: 'color(display-p3 0.314 0.592 1 / 0.702)',
          blueA9: 'color(display-p3 0.251 0.573 0.996 / 0.967)',
          blueA10: 'color(display-p3 0.357 0.631 1 / 0.971)',
          blueA11: 'color(display-p3 0.49 0.72 1)',
          blueA12: 'color(display-p3 0.788 0.898 0.99)',
        },
        eg = {
          cyan1: '#0b161a',
          cyan2: '#101b20',
          cyan3: '#082c36',
          cyan4: '#003848',
          cyan5: '#004558',
          cyan6: '#045468',
          cyan7: '#12677e',
          cyan8: '#11809c',
          cyan9: '#00a2c7',
          cyan10: '#23afd0',
          cyan11: '#4ccce6',
          cyan12: '#b6ecf7',
        },
        eA = {
          cyanA1: '#0091f70a',
          cyanA2: '#02a7f211',
          cyanA3: '#00befd28',
          cyanA4: '#00baff3b',
          cyanA5: '#00befd4d',
          cyanA6: '#00c7fd5e',
          cyanA7: '#14cdff75',
          cyanA8: '#11cfff95',
          cyanA9: '#00cfffc3',
          cyanA10: '#28d6ffcd',
          cyanA11: '#52e1fee5',
          cyanA12: '#bbf3fef7',
        },
        eh = {
          cyan1: 'color(display-p3 0.053 0.085 0.098)',
          cyan2: 'color(display-p3 0.072 0.105 0.122)',
          cyan3: 'color(display-p3 0.073 0.168 0.209)',
          cyan4: 'color(display-p3 0.063 0.216 0.277)',
          cyan5: 'color(display-p3 0.091 0.267 0.336)',
          cyan6: 'color(display-p3 0.137 0.324 0.4)',
          cyan7: 'color(display-p3 0.186 0.398 0.484)',
          cyan8: 'color(display-p3 0.23 0.496 0.6)',
          cyan9: 'color(display-p3 0.282 0.627 0.765)',
          cyan10: 'color(display-p3 0.331 0.675 0.801)',
          cyan11: 'color(display-p3 0.446 0.79 0.887)',
          cyan12: 'color(display-p3 0.757 0.919 0.962)',
        },
        ev = {
          cyanA1: 'color(display-p3 0 0.647 0.992 / 0.034)',
          cyanA2: 'color(display-p3 0.133 0.733 1 / 0.059)',
          cyanA3: 'color(display-p3 0.122 0.741 0.996 / 0.152)',
          cyanA4: 'color(display-p3 0.051 0.725 1 / 0.227)',
          cyanA5: 'color(display-p3 0.149 0.757 1 / 0.29)',
          cyanA6: 'color(display-p3 0.267 0.792 1 / 0.358)',
          cyanA7: 'color(display-p3 0.333 0.808 1 / 0.446)',
          cyanA8: 'color(display-p3 0.357 0.816 1 / 0.572)',
          cyanA9: 'color(display-p3 0.357 0.82 1 / 0.748)',
          cyanA10: 'color(display-p3 0.4 0.839 1 / 0.786)',
          cyanA11: 'color(display-p3 0.446 0.79 0.887)',
          cyanA12: 'color(display-p3 0.757 0.919 0.962)',
        },
        e_ = {
          teal1: '#0d1514',
          teal2: '#111c1b',
          teal3: '#0d2d2a',
          teal4: '#023b37',
          teal5: '#084843',
          teal6: '#145750',
          teal7: '#1c6961',
          teal8: '#207e73',
          teal9: '#12a594',
          teal10: '#0eb39e',
          teal11: '#0bd8b6',
          teal12: '#adf0dd',
        },
        eP = {
          tealA1: '#00deab05',
          tealA2: '#12fbe60c',
          tealA3: '#00ffe61e',
          tealA4: '#00ffe92d',
          tealA5: '#00ffea3b',
          tealA6: '#1cffe84b',
          tealA7: '#2efde85f',
          tealA8: '#32ffe775',
          tealA9: '#13ffe49f',
          tealA10: '#0dffe0ae',
          tealA11: '#0afed5d6',
          tealA12: '#b8ffebef',
        },
        ew = {
          teal1: 'color(display-p3 0.059 0.083 0.079)',
          teal2: 'color(display-p3 0.075 0.11 0.107)',
          teal3: 'color(display-p3 0.087 0.175 0.165)',
          teal4: 'color(display-p3 0.087 0.227 0.214)',
          teal5: 'color(display-p3 0.12 0.277 0.261)',
          teal6: 'color(display-p3 0.162 0.335 0.314)',
          teal7: 'color(display-p3 0.205 0.406 0.379)',
          teal8: 'color(display-p3 0.245 0.489 0.453)',
          teal9: 'color(display-p3 0.297 0.637 0.581)',
          teal10: 'color(display-p3 0.319 0.69 0.62)',
          teal11: 'color(display-p3 0.388 0.835 0.719)',
          teal12: 'color(display-p3 0.734 0.934 0.87)',
        },
        ek = {
          tealA1: 'color(display-p3 0 0.992 0.761 / 0.017)',
          tealA2: 'color(display-p3 0.235 0.988 0.902 / 0.047)',
          tealA3: 'color(display-p3 0.235 1 0.898 / 0.118)',
          tealA4: 'color(display-p3 0.18 0.996 0.929 / 0.173)',
          tealA5: 'color(display-p3 0.31 1 0.933 / 0.227)',
          tealA6: 'color(display-p3 0.396 1 0.933 / 0.286)',
          tealA7: 'color(display-p3 0.443 1 0.925 / 0.366)',
          tealA8: 'color(display-p3 0.459 1 0.925 / 0.454)',
          tealA9: 'color(display-p3 0.443 0.996 0.906 / 0.61)',
          tealA10: 'color(display-p3 0.439 0.996 0.89 / 0.669)',
          tealA11: 'color(display-p3 0.388 0.835 0.719)',
          tealA12: 'color(display-p3 0.734 0.934 0.87)',
        },
        eS = {
          jade1: '#0d1512',
          jade2: '#121c18',
          jade3: '#0f2e22',
          jade4: '#0b3b2c',
          jade5: '#114837',
          jade6: '#1b5745',
          jade7: '#246854',
          jade8: '#2a7e68',
          jade9: '#29a383',
          jade10: '#27b08b',
          jade11: '#1fd8a4',
          jade12: '#adf0d4',
        },
        ex = {
          jadeA1: '#00de4505',
          jadeA2: '#27fba60c',
          jadeA3: '#02f99920',
          jadeA4: '#00ffaa2d',
          jadeA5: '#11ffb63b',
          jadeA6: '#34ffc24b',
          jadeA7: '#45fdc75e',
          jadeA8: '#48ffcf75',
          jadeA9: '#38feca9d',
          jadeA10: '#31fec7ab',
          jadeA11: '#21fec0d6',
          jadeA12: '#b8ffe1ef',
        },
        ej = {
          jade1: 'color(display-p3 0.059 0.083 0.071)',
          jade2: 'color(display-p3 0.078 0.11 0.094)',
          jade3: 'color(display-p3 0.091 0.176 0.138)',
          jade4: 'color(display-p3 0.102 0.228 0.177)',
          jade5: 'color(display-p3 0.133 0.279 0.221)',
          jade6: 'color(display-p3 0.174 0.334 0.273)',
          jade7: 'color(display-p3 0.219 0.402 0.335)',
          jade8: 'color(display-p3 0.263 0.488 0.411)',
          jade9: 'color(display-p3 0.319 0.63 0.521)',
          jade10: 'color(display-p3 0.338 0.68 0.555)',
          jade11: 'color(display-p3 0.4 0.835 0.656)',
          jade12: 'color(display-p3 0.734 0.934 0.838)',
        },
        eR = {
          jadeA1: 'color(display-p3 0 0.992 0.298 / 0.017)',
          jadeA2: 'color(display-p3 0.318 0.988 0.651 / 0.047)',
          jadeA3: 'color(display-p3 0.267 1 0.667 / 0.118)',
          jadeA4: 'color(display-p3 0.275 0.996 0.702 / 0.173)',
          jadeA5: 'color(display-p3 0.361 1 0.741 / 0.227)',
          jadeA6: 'color(display-p3 0.439 1 0.796 / 0.286)',
          jadeA7: 'color(display-p3 0.49 1 0.804 / 0.362)',
          jadeA8: 'color(display-p3 0.506 1 0.835 / 0.45)',
          jadeA9: 'color(display-p3 0.478 0.996 0.816 / 0.606)',
          jadeA10: 'color(display-p3 0.478 1 0.816 / 0.656)',
          jadeA11: 'color(display-p3 0.4 0.835 0.656)',
          jadeA12: 'color(display-p3 0.734 0.934 0.838)',
        },
        eE = {
          green1: '#0e1512',
          green2: '#121b17',
          green3: '#132d21',
          green4: '#113b29',
          green5: '#174933',
          green6: '#20573e',
          green7: '#28684a',
          green8: '#2f7c57',
          green9: '#30a46c',
          green10: '#33b074',
          green11: '#3dd68c',
          green12: '#b1f1cb',
        },
        eO = {
          greenA1: '#00de4505',
          greenA2: '#29f99d0b',
          greenA3: '#22ff991e',
          greenA4: '#11ff992d',
          greenA5: '#2bffa23c',
          greenA6: '#44ffaa4b',
          greenA7: '#50fdac5e',
          greenA8: '#54ffad73',
          greenA9: '#44ffa49e',
          greenA10: '#43fea4ab',
          greenA11: '#46fea5d4',
          greenA12: '#bbffd7f0',
        },
        eC = {
          green1: 'color(display-p3 0.062 0.083 0.071)',
          green2: 'color(display-p3 0.079 0.106 0.09)',
          green3: 'color(display-p3 0.1 0.173 0.133)',
          green4: 'color(display-p3 0.115 0.229 0.166)',
          green5: 'color(display-p3 0.147 0.282 0.206)',
          green6: 'color(display-p3 0.185 0.338 0.25)',
          green7: 'color(display-p3 0.227 0.403 0.298)',
          green8: 'color(display-p3 0.27 0.479 0.351)',
          green9: 'color(display-p3 0.332 0.634 0.442)',
          green10: 'color(display-p3 0.357 0.682 0.474)',
          green11: 'color(display-p3 0.434 0.828 0.573)',
          green12: 'color(display-p3 0.747 0.938 0.807)',
        },
        eT = {
          greenA1: 'color(display-p3 0 0.992 0.298 / 0.017)',
          greenA2: 'color(display-p3 0.341 0.98 0.616 / 0.043)',
          greenA3: 'color(display-p3 0.376 0.996 0.655 / 0.114)',
          greenA4: 'color(display-p3 0.341 0.996 0.635 / 0.173)',
          greenA5: 'color(display-p3 0.408 1 0.678 / 0.232)',
          greenA6: 'color(display-p3 0.475 1 0.706 / 0.29)',
          greenA7: 'color(display-p3 0.514 1 0.706 / 0.362)',
          greenA8: 'color(display-p3 0.529 1 0.718 / 0.442)',
          greenA9: 'color(display-p3 0.502 0.996 0.682 / 0.61)',
          greenA10: 'color(display-p3 0.506 1 0.682 / 0.66)',
          greenA11: 'color(display-p3 0.434 0.828 0.573)',
          greenA12: 'color(display-p3 0.747 0.938 0.807)',
        },
        eM = {
          grass1: '#0e1511',
          grass2: '#141a15',
          grass3: '#1b2a1e',
          grass4: '#1d3a24',
          grass5: '#25482d',
          grass6: '#2d5736',
          grass7: '#366740',
          grass8: '#3e7949',
          grass9: '#46a758',
          grass10: '#53b365',
          grass11: '#71d083',
          grass12: '#c2f0c2',
        },
        eN = {
          grassA1: '#00de1205',
          grassA2: '#5ef7780a',
          grassA3: '#70fe8c1b',
          grassA4: '#57ff802c',
          grassA5: '#68ff8b3b',
          grassA6: '#71ff8f4b',
          grassA7: '#77fd925d',
          grassA8: '#77fd9070',
          grassA9: '#65ff82a1',
          grassA10: '#72ff8dae',
          grassA11: '#89ff9fcd',
          grassA12: '#ceffceef',
        },
        eD = {
          grass1: 'color(display-p3 0.062 0.083 0.067)',
          grass2: 'color(display-p3 0.083 0.103 0.085)',
          grass3: 'color(display-p3 0.118 0.163 0.122)',
          grass4: 'color(display-p3 0.142 0.225 0.15)',
          grass5: 'color(display-p3 0.178 0.279 0.186)',
          grass6: 'color(display-p3 0.217 0.337 0.224)',
          grass7: 'color(display-p3 0.258 0.4 0.264)',
          grass8: 'color(display-p3 0.302 0.47 0.305)',
          grass9: 'color(display-p3 0.38 0.647 0.378)',
          grass10: 'color(display-p3 0.426 0.694 0.426)',
          grass11: 'color(display-p3 0.535 0.807 0.542)',
          grass12: 'color(display-p3 0.797 0.936 0.776)',
        },
        eI = {
          grassA1: 'color(display-p3 0 0.992 0.071 / 0.017)',
          grassA2: 'color(display-p3 0.482 0.996 0.584 / 0.038)',
          grassA3: 'color(display-p3 0.549 0.992 0.588 / 0.106)',
          grassA4: 'color(display-p3 0.51 0.996 0.557 / 0.169)',
          grassA5: 'color(display-p3 0.553 1 0.588 / 0.227)',
          grassA6: 'color(display-p3 0.584 1 0.608 / 0.29)',
          grassA7: 'color(display-p3 0.604 1 0.616 / 0.358)',
          grassA8: 'color(display-p3 0.608 1 0.62 / 0.433)',
          grassA9: 'color(display-p3 0.573 1 0.569 / 0.622)',
          grassA10: 'color(display-p3 0.6 0.996 0.6 / 0.673)',
          grassA11: 'color(display-p3 0.535 0.807 0.542)',
          grassA12: 'color(display-p3 0.797 0.936 0.776)',
        },
        eL = {
          brown1: '#12110f',
          brown2: '#1c1816',
          brown3: '#28211d',
          brown4: '#322922',
          brown5: '#3e3128',
          brown6: '#4d3c2f',
          brown7: '#614a39',
          brown8: '#7c5f46',
          brown9: '#ad7f58',
          brown10: '#b88c67',
          brown11: '#dbb594',
          brown12: '#f2e1ca',
        },
        ez = {
          brownA1: '#91110002',
          brownA2: '#fba67c0c',
          brownA3: '#fcb58c19',
          brownA4: '#fbbb8a24',
          brownA5: '#fcb88931',
          brownA6: '#fdba8741',
          brownA7: '#ffbb8856',
          brownA8: '#ffbe8773',
          brownA9: '#feb87da8',
          brownA10: '#ffc18cb3',
          brownA11: '#fed1aad9',
          brownA12: '#feecd4f2',
        },
        eF = {
          brown1: 'color(display-p3 0.071 0.067 0.059)',
          brown2: 'color(display-p3 0.107 0.095 0.087)',
          brown3: 'color(display-p3 0.151 0.13 0.115)',
          brown4: 'color(display-p3 0.191 0.161 0.138)',
          brown5: 'color(display-p3 0.235 0.194 0.162)',
          brown6: 'color(display-p3 0.291 0.237 0.192)',
          brown7: 'color(display-p3 0.365 0.295 0.232)',
          brown8: 'color(display-p3 0.469 0.377 0.287)',
          brown9: 'color(display-p3 0.651 0.505 0.368)',
          brown10: 'color(display-p3 0.697 0.557 0.423)',
          brown11: 'color(display-p3 0.835 0.715 0.597)',
          brown12: 'color(display-p3 0.938 0.885 0.802)',
        },
        eU = {
          brownA1: 'color(display-p3 0.855 0.071 0 / 0.005)',
          brownA2: 'color(display-p3 0.98 0.706 0.525 / 0.043)',
          brownA3: 'color(display-p3 0.996 0.745 0.576 / 0.093)',
          brownA4: 'color(display-p3 1 0.765 0.592 / 0.135)',
          brownA5: 'color(display-p3 1 0.761 0.588 / 0.181)',
          brownA6: 'color(display-p3 1 0.773 0.592 / 0.24)',
          brownA7: 'color(display-p3 0.996 0.776 0.58 / 0.32)',
          brownA8: 'color(display-p3 1 0.78 0.573 / 0.433)',
          brownA9: 'color(display-p3 1 0.769 0.549 / 0.627)',
          brownA10: 'color(display-p3 1 0.792 0.596 / 0.677)',
          brownA11: 'color(display-p3 0.835 0.715 0.597)',
          brownA12: 'color(display-p3 0.938 0.885 0.802)',
        },
        eH = {
          bronze1: '#141110',
          bronze2: '#1c1917',
          bronze3: '#262220',
          bronze4: '#302a27',
          bronze5: '#3b3330',
          bronze6: '#493e3a',
          bronze7: '#5a4c47',
          bronze8: '#6f5f58',
          bronze9: '#a18072',
          bronze10: '#ae8c7e',
          bronze11: '#d4b3a5',
          bronze12: '#ede0d9',
        },
        eW = {
          bronzeA1: '#d1110004',
          bronzeA2: '#fbbc910c',
          bronzeA3: '#faceb817',
          bronzeA4: '#facdb622',
          bronzeA5: '#ffd2c12d',
          bronzeA6: '#ffd1c03c',
          bronzeA7: '#fdd0c04f',
          bronzeA8: '#ffd6c565',
          bronzeA9: '#fec7b09b',
          bronzeA10: '#fecab5a9',
          bronzeA11: '#ffd7c6d1',
          bronzeA12: '#fff1e9ec',
        },
        eB = {
          bronze1: 'color(display-p3 0.076 0.067 0.063)',
          bronze2: 'color(display-p3 0.106 0.097 0.093)',
          bronze3: 'color(display-p3 0.147 0.132 0.125)',
          bronze4: 'color(display-p3 0.185 0.166 0.156)',
          bronze5: 'color(display-p3 0.227 0.202 0.19)',
          bronze6: 'color(display-p3 0.278 0.246 0.23)',
          bronze7: 'color(display-p3 0.343 0.302 0.281)',
          bronze8: 'color(display-p3 0.426 0.374 0.347)',
          bronze9: 'color(display-p3 0.611 0.507 0.455)',
          bronze10: 'color(display-p3 0.66 0.556 0.504)',
          bronze11: 'color(display-p3 0.81 0.707 0.655)',
          bronze12: 'color(display-p3 0.921 0.88 0.854)',
        },
        eG = {
          bronzeA1: 'color(display-p3 0.941 0.067 0 / 0.009)',
          bronzeA2: 'color(display-p3 0.98 0.8 0.706 / 0.043)',
          bronzeA3: 'color(display-p3 0.988 0.851 0.761 / 0.085)',
          bronzeA4: 'color(display-p3 0.996 0.839 0.78 / 0.127)',
          bronzeA5: 'color(display-p3 0.996 0.863 0.773 / 0.173)',
          bronzeA6: 'color(display-p3 1 0.863 0.796 / 0.227)',
          bronzeA7: 'color(display-p3 1 0.867 0.8 / 0.295)',
          bronzeA8: 'color(display-p3 1 0.859 0.788 / 0.387)',
          bronzeA9: 'color(display-p3 1 0.82 0.733 / 0.585)',
          bronzeA10: 'color(display-p3 1 0.839 0.761 / 0.635)',
          bronzeA11: 'color(display-p3 0.81 0.707 0.655)',
          bronzeA12: 'color(display-p3 0.921 0.88 0.854)',
        },
        eV = {
          gold1: '#121211',
          gold2: '#1b1a17',
          gold3: '#24231f',
          gold4: '#2d2b26',
          gold5: '#38352e',
          gold6: '#444039',
          gold7: '#544f46',
          gold8: '#696256',
          gold9: '#978365',
          gold10: '#a39073',
          gold11: '#cbb99f',
          gold12: '#e8e2d9',
        },
        eY = {
          goldA1: '#91911102',
          goldA2: '#f9e29d0b',
          goldA3: '#f8ecbb15',
          goldA4: '#ffeec41e',
          goldA5: '#feecc22a',
          goldA6: '#feebcb37',
          goldA7: '#ffedcd48',
          goldA8: '#fdeaca5f',
          goldA9: '#ffdba690',
          goldA10: '#fedfb09d',
          goldA11: '#fee7c6c8',
          goldA12: '#fef7ede7',
        },
        eq = {
          gold1: 'color(display-p3 0.071 0.071 0.067)',
          gold2: 'color(display-p3 0.104 0.101 0.09)',
          gold3: 'color(display-p3 0.141 0.136 0.122)',
          gold4: 'color(display-p3 0.177 0.17 0.152)',
          gold5: 'color(display-p3 0.217 0.207 0.185)',
          gold6: 'color(display-p3 0.265 0.252 0.225)',
          gold7: 'color(display-p3 0.327 0.31 0.277)',
          gold8: 'color(display-p3 0.407 0.384 0.342)',
          gold9: 'color(display-p3 0.579 0.517 0.41)',
          gold10: 'color(display-p3 0.628 0.566 0.463)',
          gold11: 'color(display-p3 0.784 0.728 0.635)',
          gold12: 'color(display-p3 0.906 0.887 0.855)',
        },
        eX = {
          goldA1: 'color(display-p3 0.855 0.855 0.071 / 0.005)',
          goldA2: 'color(display-p3 0.98 0.89 0.616 / 0.043)',
          goldA3: 'color(display-p3 1 0.949 0.753 / 0.08)',
          goldA4: 'color(display-p3 1 0.933 0.8 / 0.118)',
          goldA5: 'color(display-p3 1 0.949 0.804 / 0.16)',
          goldA6: 'color(display-p3 1 0.925 0.8 / 0.215)',
          goldA7: 'color(display-p3 1 0.945 0.831 / 0.278)',
          goldA8: 'color(display-p3 1 0.937 0.82 / 0.366)',
          goldA9: 'color(display-p3 0.996 0.882 0.69 / 0.551)',
          goldA10: 'color(display-p3 1 0.894 0.725 / 0.601)',
          goldA11: 'color(display-p3 0.784 0.728 0.635)',
          goldA12: 'color(display-p3 0.906 0.887 0.855)',
        },
        eK = {
          sky1: '#0d141f',
          sky2: '#111a27',
          sky3: '#112840',
          sky4: '#113555',
          sky5: '#154467',
          sky6: '#1b537b',
          sky7: '#1f6692',
          sky8: '#197cae',
          sky9: '#7ce2fe',
          sky10: '#a8eeff',
          sky11: '#75c7f0',
          sky12: '#c2f3ff',
        },
        e$ = {
          skyA1: '#0044ff0f',
          skyA2: '#1171fb18',
          skyA3: '#1184fc33',
          skyA4: '#128fff49',
          skyA5: '#1c9dfd5d',
          skyA6: '#28a5ff72',
          skyA7: '#2badfe8b',
          skyA8: '#1db2fea9',
          skyA9: '#7ce3fffe',
          skyA10: '#a8eeff',
          skyA11: '#7cd3ffef',
          skyA12: '#c2f3ff',
        },
        eZ = {
          sky1: 'color(display-p3 0.056 0.078 0.116)',
          sky2: 'color(display-p3 0.075 0.101 0.149)',
          sky3: 'color(display-p3 0.089 0.154 0.244)',
          sky4: 'color(display-p3 0.106 0.207 0.323)',
          sky5: 'color(display-p3 0.135 0.261 0.394)',
          sky6: 'color(display-p3 0.17 0.322 0.469)',
          sky7: 'color(display-p3 0.205 0.394 0.557)',
          sky8: 'color(display-p3 0.232 0.48 0.665)',
          sky9: 'color(display-p3 0.585 0.877 0.983)',
          sky10: 'color(display-p3 0.718 0.925 0.991)',
          sky11: 'color(display-p3 0.536 0.772 0.924)',
          sky12: 'color(display-p3 0.799 0.947 0.993)',
        },
        eJ = {
          skyA1: 'color(display-p3 0 0.282 0.996 / 0.055)',
          skyA2: 'color(display-p3 0.157 0.467 0.992 / 0.089)',
          skyA3: 'color(display-p3 0.192 0.522 0.996 / 0.19)',
          skyA4: 'color(display-p3 0.212 0.584 1 / 0.274)',
          skyA5: 'color(display-p3 0.259 0.631 1 / 0.349)',
          skyA6: 'color(display-p3 0.302 0.655 1 / 0.433)',
          skyA7: 'color(display-p3 0.329 0.686 1 / 0.526)',
          skyA8: 'color(display-p3 0.325 0.71 1 / 0.643)',
          skyA9: 'color(display-p3 0.592 0.894 1 / 0.984)',
          skyA10: 'color(display-p3 0.722 0.933 1 / 0.992)',
          skyA11: 'color(display-p3 0.536 0.772 0.924)',
          skyA12: 'color(display-p3 0.799 0.947 0.993)',
        },
        eQ = {
          mint1: '#0e1515',
          mint2: '#0f1b1b',
          mint3: '#092c2b',
          mint4: '#003a38',
          mint5: '#004744',
          mint6: '#105650',
          mint7: '#1e685f',
          mint8: '#277f70',
          mint9: '#86ead4',
          mint10: '#a8f5e5',
          mint11: '#58d5ba',
          mint12: '#c4f5e1',
        },
        e0 = {
          mintA1: '#00dede05',
          mintA2: '#00f9f90b',
          mintA3: '#00fff61d',
          mintA4: '#00fff42c',
          mintA5: '#00fff23a',
          mintA6: '#0effeb4a',
          mintA7: '#34fde55e',
          mintA8: '#41ffdf76',
          mintA9: '#92ffe7e9',
          mintA10: '#aefeedf5',
          mintA11: '#67ffded2',
          mintA12: '#cbfee9f5',
        },
        e1 = {
          mint1: 'color(display-p3 0.059 0.082 0.081)',
          mint2: 'color(display-p3 0.068 0.104 0.105)',
          mint3: 'color(display-p3 0.077 0.17 0.168)',
          mint4: 'color(display-p3 0.068 0.224 0.22)',
          mint5: 'color(display-p3 0.104 0.275 0.264)',
          mint6: 'color(display-p3 0.154 0.332 0.313)',
          mint7: 'color(display-p3 0.207 0.403 0.373)',
          mint8: 'color(display-p3 0.258 0.49 0.441)',
          mint9: 'color(display-p3 0.62 0.908 0.834)',
          mint10: 'color(display-p3 0.725 0.954 0.898)',
          mint11: 'color(display-p3 0.482 0.825 0.733)',
          mint12: 'color(display-p3 0.807 0.955 0.887)',
        },
        e3 = {
          mintA1: 'color(display-p3 0 0.992 0.992 / 0.017)',
          mintA2: 'color(display-p3 0.071 0.98 0.98 / 0.043)',
          mintA3: 'color(display-p3 0.176 0.996 0.996 / 0.11)',
          mintA4: 'color(display-p3 0.071 0.996 0.973 / 0.169)',
          mintA5: 'color(display-p3 0.243 1 0.949 / 0.223)',
          mintA6: 'color(display-p3 0.369 1 0.933 / 0.286)',
          mintA7: 'color(display-p3 0.459 1 0.914 / 0.362)',
          mintA8: 'color(display-p3 0.49 1 0.89 / 0.454)',
          mintA9: 'color(display-p3 0.678 0.996 0.914 / 0.904)',
          mintA10: 'color(display-p3 0.761 1 0.941 / 0.95)',
          mintA11: 'color(display-p3 0.482 0.825 0.733)',
          mintA12: 'color(display-p3 0.807 0.955 0.887)',
        },
        e2 = {
          lime1: '#11130c',
          lime2: '#151a10',
          lime3: '#1f2917',
          lime4: '#29371d',
          lime5: '#334423',
          lime6: '#3d522a',
          lime7: '#496231',
          lime8: '#577538',
          lime9: '#bdee63',
          lime10: '#d4ff70',
          lime11: '#bde56c',
          lime12: '#e3f7ba',
        },
        e9 = {
          limeA1: '#11bb0003',
          limeA2: '#78f7000a',
          limeA3: '#9bfd4c1a',
          limeA4: '#a7fe5c29',
          limeA5: '#affe6537',
          limeA6: '#b2fe6d46',
          limeA7: '#b6ff6f57',
          limeA8: '#b6fd6d6c',
          limeA9: '#caff69ed',
          limeA10: '#d4ff70',
          limeA11: '#d1fe77e4',
          limeA12: '#e9febff7',
        },
        e5 = {
          lime1: 'color(display-p3 0.067 0.073 0.048)',
          lime2: 'color(display-p3 0.086 0.1 0.067)',
          lime3: 'color(display-p3 0.13 0.16 0.099)',
          lime4: 'color(display-p3 0.172 0.214 0.126)',
          lime5: 'color(display-p3 0.213 0.266 0.153)',
          lime6: 'color(display-p3 0.257 0.321 0.182)',
          lime7: 'color(display-p3 0.307 0.383 0.215)',
          lime8: 'color(display-p3 0.365 0.456 0.25)',
          lime9: 'color(display-p3 0.78 0.928 0.466)',
          lime10: 'color(display-p3 0.865 0.995 0.519)',
          lime11: 'color(display-p3 0.771 0.893 0.485)',
          lime12: 'color(display-p3 0.905 0.966 0.753)',
        },
        e4 = {
          limeA1: 'color(display-p3 0.067 0.941 0 / 0.009)',
          limeA2: 'color(display-p3 0.584 0.996 0.071 / 0.038)',
          limeA3: 'color(display-p3 0.69 1 0.38 / 0.101)',
          limeA4: 'color(display-p3 0.729 1 0.435 / 0.16)',
          limeA5: 'color(display-p3 0.745 1 0.471 / 0.215)',
          limeA6: 'color(display-p3 0.769 1 0.482 / 0.274)',
          limeA7: 'color(display-p3 0.769 1 0.506 / 0.341)',
          limeA8: 'color(display-p3 0.784 1 0.51 / 0.416)',
          limeA9: 'color(display-p3 0.839 1 0.502 / 0.925)',
          limeA10: 'color(display-p3 0.871 1 0.522 / 0.996)',
          limeA11: 'color(display-p3 0.771 0.893 0.485)',
          limeA12: 'color(display-p3 0.905 0.966 0.753)',
        },
        e8 = {
          yellow1: '#14120b',
          yellow2: '#1b180f',
          yellow3: '#2d2305',
          yellow4: '#362b00',
          yellow5: '#433500',
          yellow6: '#524202',
          yellow7: '#665417',
          yellow8: '#836a21',
          yellow9: '#ffe629',
          yellow10: '#ffff57',
          yellow11: '#f5e147',
          yellow12: '#f6eeb4',
        },
        e7 = {
          yellowA1: '#d1510004',
          yellowA2: '#f9b4000b',
          yellowA3: '#ffaa001e',
          yellowA4: '#fdb70028',
          yellowA5: '#febb0036',
          yellowA6: '#fec40046',
          yellowA7: '#fdcb225c',
          yellowA8: '#fdca327b',
          yellowA9: '#ffe629',
          yellowA10: '#ffff57',
          yellowA11: '#fee949f5',
          yellowA12: '#fef6baf6',
        },
        e6 = {
          yellow1: 'color(display-p3 0.078 0.069 0.047)',
          yellow2: 'color(display-p3 0.103 0.094 0.063)',
          yellow3: 'color(display-p3 0.168 0.137 0.039)',
          yellow4: 'color(display-p3 0.209 0.169 0)',
          yellow5: 'color(display-p3 0.255 0.209 0)',
          yellow6: 'color(display-p3 0.31 0.261 0.07)',
          yellow7: 'color(display-p3 0.389 0.331 0.135)',
          yellow8: 'color(display-p3 0.497 0.42 0.182)',
          yellow9: 'color(display-p3 1 0.92 0.22)',
          yellow10: 'color(display-p3 1 1 0.456)',
          yellow11: 'color(display-p3 0.948 0.885 0.392)',
          yellow12: 'color(display-p3 0.959 0.934 0.731)',
        },
        re = {
          yellowA1: 'color(display-p3 0.973 0.369 0 / 0.013)',
          yellowA2: 'color(display-p3 0.996 0.792 0 / 0.038)',
          yellowA3: 'color(display-p3 0.996 0.71 0 / 0.11)',
          yellowA4: 'color(display-p3 0.996 0.741 0 / 0.152)',
          yellowA5: 'color(display-p3 0.996 0.765 0 / 0.202)',
          yellowA6: 'color(display-p3 0.996 0.816 0.082 / 0.261)',
          yellowA7: 'color(display-p3 1 0.831 0.263 / 0.345)',
          yellowA8: 'color(display-p3 1 0.831 0.314 / 0.463)',
          yellowA9: 'color(display-p3 1 0.922 0.22)',
          yellowA10: 'color(display-p3 1 1 0.455)',
          yellowA11: 'color(display-p3 0.948 0.885 0.392)',
          yellowA12: 'color(display-p3 0.959 0.934 0.731)',
        },
        rr = {
          amber1: '#16120c',
          amber2: '#1d180f',
          amber3: '#302008',
          amber4: '#3f2700',
          amber5: '#4d3000',
          amber6: '#5c3d05',
          amber7: '#714f19',
          amber8: '#8f6424',
          amber9: '#ffc53d',
          amber10: '#ffd60a',
          amber11: '#ffca16',
          amber12: '#ffe7b3',
        },
        rt = {
          amberA1: '#e63c0006',
          amberA2: '#fd9b000d',
          amberA3: '#fa820022',
          amberA4: '#fc820032',
          amberA5: '#fd8b0041',
          amberA6: '#fd9b0051',
          amberA7: '#ffab2567',
          amberA8: '#ffae3587',
          amberA9: '#ffc53d',
          amberA10: '#ffd60a',
          amberA11: '#ffca16',
          amberA12: '#ffe7b3',
        },
        ra = {
          amber1: 'color(display-p3 0.082 0.07 0.05)',
          amber2: 'color(display-p3 0.111 0.094 0.064)',
          amber3: 'color(display-p3 0.178 0.128 0.049)',
          amber4: 'color(display-p3 0.239 0.156 0)',
          amber5: 'color(display-p3 0.29 0.193 0)',
          amber6: 'color(display-p3 0.344 0.245 0.076)',
          amber7: 'color(display-p3 0.422 0.314 0.141)',
          amber8: 'color(display-p3 0.535 0.399 0.189)',
          amber9: 'color(display-p3 1 0.77 0.26)',
          amber10: 'color(display-p3 1 0.87 0.15)',
          amber11: 'color(display-p3 1 0.8 0.29)',
          amber12: 'color(display-p3 0.984 0.909 0.726)',
        },
        ro = {
          amberA1: 'color(display-p3 0.992 0.298 0 / 0.017)',
          amberA2: 'color(display-p3 0.988 0.651 0 / 0.047)',
          amberA3: 'color(display-p3 1 0.6 0 / 0.118)',
          amberA4: 'color(display-p3 1 0.557 0 / 0.185)',
          amberA5: 'color(display-p3 1 0.592 0 / 0.24)',
          amberA6: 'color(display-p3 1 0.659 0.094 / 0.299)',
          amberA7: 'color(display-p3 1 0.714 0.263 / 0.383)',
          amberA8: 'color(display-p3 0.996 0.729 0.306 / 0.5)',
          amberA9: 'color(display-p3 1 0.769 0.259)',
          amberA10: 'color(display-p3 1 0.871 0.149)',
          amberA11: 'color(display-p3 1 0.8 0.29)',
          amberA12: 'color(display-p3 0.984 0.909 0.726)',
        },
        rn = {
          orange1: '#17120e',
          orange2: '#1e160f',
          orange3: '#331e0b',
          orange4: '#462100',
          orange5: '#562800',
          orange6: '#66350c',
          orange7: '#7e451d',
          orange8: '#a35829',
          orange9: '#f76b15',
          orange10: '#ff801f',
          orange11: '#ffa057',
          orange12: '#ffe0c2',
        },
        rl = {
          orangeA1: '#ec360007',
          orangeA2: '#fe6d000e',
          orangeA3: '#fb6a0025',
          orangeA4: '#ff590039',
          orangeA5: '#ff61004a',
          orangeA6: '#fd75045c',
          orangeA7: '#ff832c75',
          orangeA8: '#fe84389d',
          orangeA9: '#fe6d15f7',
          orangeA10: '#ff801f',
          orangeA11: '#ffa057',
          orangeA12: '#ffe0c2',
        },
        ri = {
          orange1: 'color(display-p3 0.088 0.07 0.057)',
          orange2: 'color(display-p3 0.113 0.089 0.061)',
          orange3: 'color(display-p3 0.189 0.12 0.056)',
          orange4: 'color(display-p3 0.262 0.132 0)',
          orange5: 'color(display-p3 0.315 0.168 0.016)',
          orange6: 'color(display-p3 0.376 0.219 0.088)',
          orange7: 'color(display-p3 0.465 0.283 0.147)',
          orange8: 'color(display-p3 0.601 0.359 0.201)',
          orange9: 'color(display-p3 0.9 0.45 0.2)',
          orange10: 'color(display-p3 0.98 0.51 0.23)',
          orange11: 'color(display-p3 1 0.63 0.38)',
          orange12: 'color(display-p3 0.98 0.883 0.775)',
        },
        rs = {
          orangeA1: 'color(display-p3 0.961 0.247 0 / 0.022)',
          orangeA2: 'color(display-p3 0.992 0.529 0 / 0.051)',
          orangeA3: 'color(display-p3 0.996 0.486 0 / 0.131)',
          orangeA4: 'color(display-p3 0.996 0.384 0 / 0.211)',
          orangeA5: 'color(display-p3 1 0.455 0 / 0.265)',
          orangeA6: 'color(display-p3 1 0.529 0.129 / 0.332)',
          orangeA7: 'color(display-p3 1 0.569 0.251 / 0.429)',
          orangeA8: 'color(display-p3 1 0.584 0.302 / 0.572)',
          orangeA9: 'color(display-p3 1 0.494 0.216 / 0.895)',
          orangeA10: 'color(display-p3 1 0.522 0.235 / 0.979)',
          orangeA11: 'color(display-p3 1 0.63 0.38)',
          orangeA12: 'color(display-p3 0.98 0.883 0.775)',
        },
        rc = {
          gray1: '#fcfcfc',
          gray2: '#f9f9f9',
          gray3: '#f0f0f0',
          gray4: '#e8e8e8',
          gray5: '#e0e0e0',
          gray6: '#d9d9d9',
          gray7: '#cecece',
          gray8: '#bbbbbb',
          gray9: '#8d8d8d',
          gray10: '#838383',
          gray11: '#646464',
          gray12: '#202020',
        },
        rd = {
          grayA1: '#00000003',
          grayA2: '#00000006',
          grayA3: '#0000000f',
          grayA4: '#00000017',
          grayA5: '#0000001f',
          grayA6: '#00000026',
          grayA7: '#00000031',
          grayA8: '#00000044',
          grayA9: '#00000072',
          grayA10: '#0000007c',
          grayA11: '#0000009b',
          grayA12: '#000000df',
        },
        rp = {
          gray1: 'color(display-p3 0.988 0.988 0.988)',
          gray2: 'color(display-p3 0.975 0.975 0.975)',
          gray3: 'color(display-p3 0.939 0.939 0.939)',
          gray4: 'color(display-p3 0.908 0.908 0.908)',
          gray5: 'color(display-p3 0.88 0.88 0.88)',
          gray6: 'color(display-p3 0.849 0.849 0.849)',
          gray7: 'color(display-p3 0.807 0.807 0.807)',
          gray8: 'color(display-p3 0.732 0.732 0.732)',
          gray9: 'color(display-p3 0.553 0.553 0.553)',
          gray10: 'color(display-p3 0.512 0.512 0.512)',
          gray11: 'color(display-p3 0.392 0.392 0.392)',
          gray12: 'color(display-p3 0.125 0.125 0.125)',
        },
        ru = {
          grayA1: 'color(display-p3 0 0 0 / 0.012)',
          grayA2: 'color(display-p3 0 0 0 / 0.024)',
          grayA3: 'color(display-p3 0 0 0 / 0.063)',
          grayA4: 'color(display-p3 0 0 0 / 0.09)',
          grayA5: 'color(display-p3 0 0 0 / 0.122)',
          grayA6: 'color(display-p3 0 0 0 / 0.153)',
          grayA7: 'color(display-p3 0 0 0 / 0.192)',
          grayA8: 'color(display-p3 0 0 0 / 0.267)',
          grayA9: 'color(display-p3 0 0 0 / 0.447)',
          grayA10: 'color(display-p3 0 0 0 / 0.486)',
          grayA11: 'color(display-p3 0 0 0 / 0.608)',
          grayA12: 'color(display-p3 0 0 0 / 0.875)',
        },
        rf = {
          mauve1: '#fdfcfd',
          mauve2: '#faf9fb',
          mauve3: '#f2eff3',
          mauve4: '#eae7ec',
          mauve5: '#e3dfe6',
          mauve6: '#dbd8e0',
          mauve7: '#d0cdd7',
          mauve8: '#bcbac7',
          mauve9: '#8e8c99',
          mauve10: '#84828e',
          mauve11: '#65636d',
          mauve12: '#211f26',
        },
        ry = {
          mauveA1: '#55005503',
          mauveA2: '#2b005506',
          mauveA3: '#30004010',
          mauveA4: '#20003618',
          mauveA5: '#20003820',
          mauveA6: '#14003527',
          mauveA7: '#10003332',
          mauveA8: '#08003145',
          mauveA9: '#05001d73',
          mauveA10: '#0500197d',
          mauveA11: '#0400119c',
          mauveA12: '#020008e0',
        },
        rb = {
          mauve1: 'color(display-p3 0.991 0.988 0.992)',
          mauve2: 'color(display-p3 0.98 0.976 0.984)',
          mauve3: 'color(display-p3 0.946 0.938 0.952)',
          mauve4: 'color(display-p3 0.915 0.906 0.925)',
          mauve5: 'color(display-p3 0.886 0.876 0.901)',
          mauve6: 'color(display-p3 0.856 0.846 0.875)',
          mauve7: 'color(display-p3 0.814 0.804 0.84)',
          mauve8: 'color(display-p3 0.735 0.728 0.777)',
          mauve9: 'color(display-p3 0.555 0.549 0.596)',
          mauve10: 'color(display-p3 0.514 0.508 0.552)',
          mauve11: 'color(display-p3 0.395 0.388 0.424)',
          mauve12: 'color(display-p3 0.128 0.122 0.147)',
        },
        rm = {
          mauveA1: 'color(display-p3 0.349 0.024 0.349 / 0.012)',
          mauveA2: 'color(display-p3 0.184 0.024 0.349 / 0.024)',
          mauveA3: 'color(display-p3 0.129 0.008 0.255 / 0.063)',
          mauveA4: 'color(display-p3 0.094 0.012 0.216 / 0.095)',
          mauveA5: 'color(display-p3 0.098 0.008 0.224 / 0.126)',
          mauveA6: 'color(display-p3 0.055 0.004 0.18 / 0.153)',
          mauveA7: 'color(display-p3 0.067 0.008 0.184 / 0.197)',
          mauveA8: 'color(display-p3 0.02 0.004 0.176 / 0.271)',
          mauveA9: 'color(display-p3 0.02 0.004 0.106 / 0.451)',
          mauveA10: 'color(display-p3 0.012 0.004 0.09 / 0.491)',
          mauveA11: 'color(display-p3 0.016 0 0.059 / 0.612)',
          mauveA12: 'color(display-p3 0.008 0 0.027 / 0.879)',
        },
        rg = {
          slate1: '#fcfcfd',
          slate2: '#f9f9fb',
          slate3: '#f0f0f3',
          slate4: '#e8e8ec',
          slate5: '#e0e1e6',
          slate6: '#d9d9e0',
          slate7: '#cdced6',
          slate8: '#b9bbc6',
          slate9: '#8b8d98',
          slate10: '#80838d',
          slate11: '#60646c',
          slate12: '#1c2024',
        },
        rA = {
          slateA1: '#00005503',
          slateA2: '#00005506',
          slateA3: '#0000330f',
          slateA4: '#00002d17',
          slateA5: '#0009321f',
          slateA6: '#00002f26',
          slateA7: '#00062e32',
          slateA8: '#00083046',
          slateA9: '#00051d74',
          slateA10: '#00071b7f',
          slateA11: '#0007149f',
          slateA12: '#000509e3',
        },
        rh = {
          slate1: 'color(display-p3 0.988 0.988 0.992)',
          slate2: 'color(display-p3 0.976 0.976 0.984)',
          slate3: 'color(display-p3 0.94 0.941 0.953)',
          slate4: 'color(display-p3 0.908 0.909 0.925)',
          slate5: 'color(display-p3 0.88 0.881 0.901)',
          slate6: 'color(display-p3 0.85 0.852 0.876)',
          slate7: 'color(display-p3 0.805 0.808 0.838)',
          slate8: 'color(display-p3 0.727 0.733 0.773)',
          slate9: 'color(display-p3 0.547 0.553 0.592)',
          slate10: 'color(display-p3 0.503 0.512 0.549)',
          slate11: 'color(display-p3 0.379 0.392 0.421)',
          slate12: 'color(display-p3 0.113 0.125 0.14)',
        },
        rv = {
          slateA1: 'color(display-p3 0.024 0.024 0.349 / 0.012)',
          slateA2: 'color(display-p3 0.024 0.024 0.349 / 0.024)',
          slateA3: 'color(display-p3 0.004 0.004 0.204 / 0.059)',
          slateA4: 'color(display-p3 0.012 0.012 0.184 / 0.091)',
          slateA5: 'color(display-p3 0.004 0.039 0.2 / 0.122)',
          slateA6: 'color(display-p3 0.008 0.008 0.165 / 0.15)',
          slateA7: 'color(display-p3 0.008 0.027 0.184 / 0.197)',
          slateA8: 'color(display-p3 0.004 0.031 0.176 / 0.275)',
          slateA9: 'color(display-p3 0.004 0.02 0.106 / 0.455)',
          slateA10: 'color(display-p3 0.004 0.027 0.098 / 0.499)',
          slateA11: 'color(display-p3 0 0.02 0.063 / 0.62)',
          slateA12: 'color(display-p3 0 0.012 0.031 / 0.887)',
        },
        r_ = {
          sage1: '#fbfdfc',
          sage2: '#f7f9f8',
          sage3: '#eef1f0',
          sage4: '#e6e9e8',
          sage5: '#dfe2e0',
          sage6: '#d7dad9',
          sage7: '#cbcfcd',
          sage8: '#b8bcba',
          sage9: '#868e8b',
          sage10: '#7c8481',
          sage11: '#5f6563',
          sage12: '#1a211e',
        },
        rP = {
          sageA1: '#00804004',
          sageA2: '#00402008',
          sageA3: '#002d1e11',
          sageA4: '#001f1519',
          sageA5: '#00180820',
          sageA6: '#00140d28',
          sageA7: '#00140a34',
          sageA8: '#000f0847',
          sageA9: '#00110b79',
          sageA10: '#00100a83',
          sageA11: '#000a07a0',
          sageA12: '#000805e5',
        },
        rw = {
          sage1: 'color(display-p3 0.986 0.992 0.988)',
          sage2: 'color(display-p3 0.97 0.977 0.974)',
          sage3: 'color(display-p3 0.935 0.944 0.94)',
          sage4: 'color(display-p3 0.904 0.913 0.909)',
          sage5: 'color(display-p3 0.875 0.885 0.88)',
          sage6: 'color(display-p3 0.844 0.854 0.849)',
          sage7: 'color(display-p3 0.8 0.811 0.806)',
          sage8: 'color(display-p3 0.725 0.738 0.732)',
          sage9: 'color(display-p3 0.531 0.556 0.546)',
          sage10: 'color(display-p3 0.492 0.515 0.506)',
          sage11: 'color(display-p3 0.377 0.395 0.389)',
          sage12: 'color(display-p3 0.107 0.129 0.118)',
        },
        rk = {
          sageA1: 'color(display-p3 0.024 0.514 0.267 / 0.016)',
          sageA2: 'color(display-p3 0.02 0.267 0.145 / 0.032)',
          sageA3: 'color(display-p3 0.008 0.184 0.125 / 0.067)',
          sageA4: 'color(display-p3 0.012 0.094 0.051 / 0.095)',
          sageA5: 'color(display-p3 0.008 0.098 0.035 / 0.126)',
          sageA6: 'color(display-p3 0.004 0.078 0.027 / 0.157)',
          sageA7: 'color(display-p3 0 0.059 0.039 / 0.2)',
          sageA8: 'color(display-p3 0.004 0.047 0.031 / 0.275)',
          sageA9: 'color(display-p3 0.004 0.059 0.035 / 0.471)',
          sageA10: 'color(display-p3 0 0.047 0.031 / 0.51)',
          sageA11: 'color(display-p3 0 0.031 0.02 / 0.624)',
          sageA12: 'color(display-p3 0 0.027 0.012 / 0.895)',
        },
        rS = {
          olive1: '#fcfdfc',
          olive2: '#f8faf8',
          olive3: '#eff1ef',
          olive4: '#e7e9e7',
          olive5: '#dfe2df',
          olive6: '#d7dad7',
          olive7: '#cccfcc',
          olive8: '#b9bcb8',
          olive9: '#898e87',
          olive10: '#7f847d',
          olive11: '#60655f',
          olive12: '#1d211c',
        },
        rx = {
          oliveA1: '#00550003',
          oliveA2: '#00490007',
          oliveA3: '#00200010',
          oliveA4: '#00160018',
          oliveA5: '#00180020',
          oliveA6: '#00140028',
          oliveA7: '#000f0033',
          oliveA8: '#040f0047',
          oliveA9: '#050f0078',
          oliveA10: '#040e0082',
          oliveA11: '#020a00a0',
          oliveA12: '#010600e3',
        },
        rj = {
          olive1: 'color(display-p3 0.989 0.992 0.989)',
          olive2: 'color(display-p3 0.974 0.98 0.973)',
          olive3: 'color(display-p3 0.939 0.945 0.937)',
          olive4: 'color(display-p3 0.907 0.914 0.905)',
          olive5: 'color(display-p3 0.878 0.885 0.875)',
          olive6: 'color(display-p3 0.846 0.855 0.843)',
          olive7: 'color(display-p3 0.803 0.812 0.8)',
          olive8: 'color(display-p3 0.727 0.738 0.723)',
          olive9: 'color(display-p3 0.541 0.556 0.532)',
          olive10: 'color(display-p3 0.5 0.515 0.491)',
          olive11: 'color(display-p3 0.38 0.395 0.374)',
          olive12: 'color(display-p3 0.117 0.129 0.111)',
        },
        rR = {
          oliveA1: 'color(display-p3 0.024 0.349 0.024 / 0.012)',
          oliveA2: 'color(display-p3 0.024 0.302 0.024 / 0.028)',
          oliveA3: 'color(display-p3 0.008 0.129 0.008 / 0.063)',
          oliveA4: 'color(display-p3 0.012 0.094 0.012 / 0.095)',
          oliveA5: 'color(display-p3 0.035 0.098 0.008 / 0.126)',
          oliveA6: 'color(display-p3 0.027 0.078 0.004 / 0.157)',
          oliveA7: 'color(display-p3 0.02 0.059 0 / 0.2)',
          oliveA8: 'color(display-p3 0.02 0.059 0.004 / 0.279)',
          oliveA9: 'color(display-p3 0.02 0.051 0.004 / 0.467)',
          oliveA10: 'color(display-p3 0.024 0.047 0 / 0.51)',
          oliveA11: 'color(display-p3 0.012 0.039 0 / 0.628)',
          oliveA12: 'color(display-p3 0.008 0.024 0 / 0.891)',
        },
        rE = {
          sand1: '#fdfdfc',
          sand2: '#f9f9f8',
          sand3: '#f1f0ef',
          sand4: '#e9e8e6',
          sand5: '#e2e1de',
          sand6: '#dad9d6',
          sand7: '#cfceca',
          sand8: '#bcbbb5',
          sand9: '#8d8d86',
          sand10: '#82827c',
          sand11: '#63635e',
          sand12: '#21201c',
        },
        rO = {
          sandA1: '#55550003',
          sandA2: '#25250007',
          sandA3: '#20100010',
          sandA4: '#1f150019',
          sandA5: '#1f180021',
          sandA6: '#19130029',
          sandA7: '#19140035',
          sandA8: '#1915014a',
          sandA9: '#0f0f0079',
          sandA10: '#0c0c0083',
          sandA11: '#080800a1',
          sandA12: '#060500e3',
        },
        rC = {
          sand1: 'color(display-p3 0.992 0.992 0.989)',
          sand2: 'color(display-p3 0.977 0.977 0.973)',
          sand3: 'color(display-p3 0.943 0.942 0.936)',
          sand4: 'color(display-p3 0.913 0.912 0.903)',
          sand5: 'color(display-p3 0.885 0.883 0.873)',
          sand6: 'color(display-p3 0.854 0.852 0.839)',
          sand7: 'color(display-p3 0.813 0.81 0.794)',
          sand8: 'color(display-p3 0.738 0.734 0.713)',
          sand9: 'color(display-p3 0.553 0.553 0.528)',
          sand10: 'color(display-p3 0.511 0.511 0.488)',
          sand11: 'color(display-p3 0.388 0.388 0.37)',
          sand12: 'color(display-p3 0.129 0.126 0.111)',
        },
        rT = {
          sandA1: 'color(display-p3 0.349 0.349 0.024 / 0.012)',
          sandA2: 'color(display-p3 0.161 0.161 0.024 / 0.028)',
          sandA3: 'color(display-p3 0.067 0.067 0.008 / 0.063)',
          sandA4: 'color(display-p3 0.129 0.129 0.012 / 0.099)',
          sandA5: 'color(display-p3 0.098 0.067 0.008 / 0.126)',
          sandA6: 'color(display-p3 0.102 0.075 0.004 / 0.161)',
          sandA7: 'color(display-p3 0.098 0.098 0.004 / 0.208)',
          sandA8: 'color(display-p3 0.086 0.075 0.004 / 0.287)',
          sandA9: 'color(display-p3 0.051 0.051 0.004 / 0.471)',
          sandA10: 'color(display-p3 0.047 0.047 0 / 0.514)',
          sandA11: 'color(display-p3 0.031 0.031 0 / 0.632)',
          sandA12: 'color(display-p3 0.024 0.02 0 / 0.891)',
        },
        rM = {
          tomato1: '#fffcfc',
          tomato2: '#fff8f7',
          tomato3: '#feebe7',
          tomato4: '#ffdcd3',
          tomato5: '#ffcdc2',
          tomato6: '#fdbdaf',
          tomato7: '#f5a898',
          tomato8: '#ec8e7b',
          tomato9: '#e54d2e',
          tomato10: '#dd4425',
          tomato11: '#d13415',
          tomato12: '#5c271f',
        },
        rN = {
          tomatoA1: '#ff000003',
          tomatoA2: '#ff200008',
          tomatoA3: '#f52b0018',
          tomatoA4: '#ff35002c',
          tomatoA5: '#ff2e003d',
          tomatoA6: '#f92d0050',
          tomatoA7: '#e7280067',
          tomatoA8: '#db250084',
          tomatoA9: '#df2600d1',
          tomatoA10: '#d72400da',
          tomatoA11: '#cd2200ea',
          tomatoA12: '#460900e0',
        },
        rD = {
          tomato1: 'color(display-p3 0.998 0.989 0.988)',
          tomato2: 'color(display-p3 0.994 0.974 0.969)',
          tomato3: 'color(display-p3 0.985 0.924 0.909)',
          tomato4: 'color(display-p3 0.996 0.868 0.835)',
          tomato5: 'color(display-p3 0.98 0.812 0.77)',
          tomato6: 'color(display-p3 0.953 0.75 0.698)',
          tomato7: 'color(display-p3 0.917 0.673 0.611)',
          tomato8: 'color(display-p3 0.875 0.575 0.502)',
          tomato9: 'color(display-p3 0.831 0.345 0.231)',
          tomato10: 'color(display-p3 0.802 0.313 0.2)',
          tomato11: 'color(display-p3 0.755 0.259 0.152)',
          tomato12: 'color(display-p3 0.335 0.165 0.132)',
        },
        rI = {
          tomatoA1: 'color(display-p3 0.675 0.024 0.024 / 0.012)',
          tomatoA2: 'color(display-p3 0.757 0.145 0.02 / 0.032)',
          tomatoA3: 'color(display-p3 0.831 0.184 0.012 / 0.091)',
          tomatoA4: 'color(display-p3 0.976 0.192 0.004 / 0.165)',
          tomatoA5: 'color(display-p3 0.918 0.192 0.004 / 0.232)',
          tomatoA6: 'color(display-p3 0.847 0.173 0.004 / 0.302)',
          tomatoA7: 'color(display-p3 0.788 0.165 0.004 / 0.389)',
          tomatoA8: 'color(display-p3 0.749 0.153 0.004 / 0.499)',
          tomatoA9: 'color(display-p3 0.78 0.149 0 / 0.769)',
          tomatoA10: 'color(display-p3 0.757 0.141 0 / 0.8)',
          tomatoA11: 'color(display-p3 0.755 0.259 0.152)',
          tomatoA12: 'color(display-p3 0.335 0.165 0.132)',
        },
        rL = {
          red1: '#fffcfc',
          red2: '#fff7f7',
          red3: '#feebec',
          red4: '#ffdbdc',
          red5: '#ffcdce',
          red6: '#fdbdbe',
          red7: '#f4a9aa',
          red8: '#eb8e90',
          red9: '#e5484d',
          red10: '#dc3e42',
          red11: '#ce2c31',
          red12: '#641723',
        },
        rz = {
          redA1: '#ff000003',
          redA2: '#ff000008',
          redA3: '#f3000d14',
          redA4: '#ff000824',
          redA5: '#ff000632',
          redA6: '#f8000442',
          redA7: '#df000356',
          redA8: '#d2000571',
          redA9: '#db0007b7',
          redA10: '#d10005c1',
          redA11: '#c40006d3',
          redA12: '#55000de8',
        },
        rF = {
          red1: 'color(display-p3 0.998 0.989 0.988)',
          red2: 'color(display-p3 0.995 0.971 0.971)',
          red3: 'color(display-p3 0.985 0.925 0.925)',
          red4: 'color(display-p3 0.999 0.866 0.866)',
          red5: 'color(display-p3 0.984 0.812 0.811)',
          red6: 'color(display-p3 0.955 0.751 0.749)',
          red7: 'color(display-p3 0.915 0.675 0.672)',
          red8: 'color(display-p3 0.872 0.575 0.572)',
          red9: 'color(display-p3 0.83 0.329 0.324)',
          red10: 'color(display-p3 0.798 0.294 0.285)',
          red11: 'color(display-p3 0.744 0.234 0.222)',
          red12: 'color(display-p3 0.36 0.115 0.143)',
        },
        rU = {
          redA1: 'color(display-p3 0.675 0.024 0.024 / 0.012)',
          redA2: 'color(display-p3 0.863 0.024 0.024 / 0.028)',
          redA3: 'color(display-p3 0.792 0.008 0.008 / 0.075)',
          redA4: 'color(display-p3 1 0.008 0.008 / 0.134)',
          redA5: 'color(display-p3 0.918 0.008 0.008 / 0.189)',
          redA6: 'color(display-p3 0.831 0.02 0.004 / 0.251)',
          redA7: 'color(display-p3 0.741 0.016 0.004 / 0.33)',
          redA8: 'color(display-p3 0.698 0.012 0.004 / 0.428)',
          redA9: 'color(display-p3 0.749 0.008 0 / 0.675)',
          redA10: 'color(display-p3 0.714 0.012 0 / 0.714)',
          redA11: 'color(display-p3 0.744 0.234 0.222)',
          redA12: 'color(display-p3 0.36 0.115 0.143)',
        },
        rH = {
          ruby1: '#fffcfd',
          ruby2: '#fff7f8',
          ruby3: '#feeaed',
          ruby4: '#ffdce1',
          ruby5: '#ffced6',
          ruby6: '#f8bfc8',
          ruby7: '#efacb8',
          ruby8: '#e592a3',
          ruby9: '#e54666',
          ruby10: '#dc3b5d',
          ruby11: '#ca244d',
          ruby12: '#64172b',
        },
        rW = {
          rubyA1: '#ff005503',
          rubyA2: '#ff002008',
          rubyA3: '#f3002515',
          rubyA4: '#ff002523',
          rubyA5: '#ff002a31',
          rubyA6: '#e4002440',
          rubyA7: '#ce002553',
          rubyA8: '#c300286d',
          rubyA9: '#db002cb9',
          rubyA10: '#d2002cc4',
          rubyA11: '#c10030db',
          rubyA12: '#550016e8',
        },
        rB = {
          ruby1: 'color(display-p3 0.998 0.989 0.992)',
          ruby2: 'color(display-p3 0.995 0.971 0.974)',
          ruby3: 'color(display-p3 0.983 0.92 0.928)',
          ruby4: 'color(display-p3 0.987 0.869 0.885)',
          ruby5: 'color(display-p3 0.968 0.817 0.839)',
          ruby6: 'color(display-p3 0.937 0.758 0.786)',
          ruby7: 'color(display-p3 0.897 0.685 0.721)',
          ruby8: 'color(display-p3 0.851 0.588 0.639)',
          ruby9: 'color(display-p3 0.83 0.323 0.408)',
          ruby10: 'color(display-p3 0.795 0.286 0.375)',
          ruby11: 'color(display-p3 0.728 0.211 0.311)',
          ruby12: 'color(display-p3 0.36 0.115 0.171)',
        },
        rG = {
          rubyA1: 'color(display-p3 0.675 0.024 0.349 / 0.012)',
          rubyA2: 'color(display-p3 0.863 0.024 0.024 / 0.028)',
          rubyA3: 'color(display-p3 0.804 0.008 0.11 / 0.079)',
          rubyA4: 'color(display-p3 0.91 0.008 0.125 / 0.13)',
          rubyA5: 'color(display-p3 0.831 0.004 0.133 / 0.185)',
          rubyA6: 'color(display-p3 0.745 0.004 0.118 / 0.244)',
          rubyA7: 'color(display-p3 0.678 0.004 0.114 / 0.314)',
          rubyA8: 'color(display-p3 0.639 0.004 0.125 / 0.412)',
          rubyA9: 'color(display-p3 0.753 0 0.129 / 0.679)',
          rubyA10: 'color(display-p3 0.714 0 0.125 / 0.714)',
          rubyA11: 'color(display-p3 0.728 0.211 0.311)',
          rubyA12: 'color(display-p3 0.36 0.115 0.171)',
        },
        rV = {
          crimson1: '#fffcfd',
          crimson2: '#fef7f9',
          crimson3: '#ffe9f0',
          crimson4: '#fedce7',
          crimson5: '#facedd',
          crimson6: '#f3bed1',
          crimson7: '#eaacc3',
          crimson8: '#e093b2',
          crimson9: '#e93d82',
          crimson10: '#df3478',
          crimson11: '#cb1d63',
          crimson12: '#621639',
        },
        rY = {
          crimsonA1: '#ff005503',
          crimsonA2: '#e0004008',
          crimsonA3: '#ff005216',
          crimsonA4: '#f8005123',
          crimsonA5: '#e5004f31',
          crimsonA6: '#d0004b41',
          crimsonA7: '#bf004753',
          crimsonA8: '#b6004a6c',
          crimsonA9: '#e2005bc2',
          crimsonA10: '#d70056cb',
          crimsonA11: '#c4004fe2',
          crimsonA12: '#530026e9',
        },
        rq = {
          crimson1: 'color(display-p3 0.998 0.989 0.992)',
          crimson2: 'color(display-p3 0.991 0.969 0.976)',
          crimson3: 'color(display-p3 0.987 0.917 0.941)',
          crimson4: 'color(display-p3 0.975 0.866 0.904)',
          crimson5: 'color(display-p3 0.953 0.813 0.864)',
          crimson6: 'color(display-p3 0.921 0.755 0.817)',
          crimson7: 'color(display-p3 0.88 0.683 0.761)',
          crimson8: 'color(display-p3 0.834 0.592 0.694)',
          crimson9: 'color(display-p3 0.843 0.298 0.507)',
          crimson10: 'color(display-p3 0.807 0.266 0.468)',
          crimson11: 'color(display-p3 0.731 0.195 0.388)',
          crimson12: 'color(display-p3 0.352 0.111 0.221)',
        },
        rX = {
          crimsonA1: 'color(display-p3 0.675 0.024 0.349 / 0.012)',
          crimsonA2: 'color(display-p3 0.757 0.02 0.267 / 0.032)',
          crimsonA3: 'color(display-p3 0.859 0.008 0.294 / 0.083)',
          crimsonA4: 'color(display-p3 0.827 0.008 0.298 / 0.134)',
          crimsonA5: 'color(display-p3 0.753 0.008 0.275 / 0.189)',
          crimsonA6: 'color(display-p3 0.682 0.004 0.247 / 0.244)',
          crimsonA7: 'color(display-p3 0.62 0.004 0.251 / 0.318)',
          crimsonA8: 'color(display-p3 0.6 0.004 0.251 / 0.408)',
          crimsonA9: 'color(display-p3 0.776 0 0.298 / 0.702)',
          crimsonA10: 'color(display-p3 0.737 0 0.275 / 0.734)',
          crimsonA11: 'color(display-p3 0.731 0.195 0.388)',
          crimsonA12: 'color(display-p3 0.352 0.111 0.221)',
        },
        rK = {
          pink1: '#fffcfe',
          pink2: '#fef7fb',
          pink3: '#fee9f5',
          pink4: '#fbdcef',
          pink5: '#f6cee7',
          pink6: '#efbfdd',
          pink7: '#e7acd0',
          pink8: '#dd93c2',
          pink9: '#d6409f',
          pink10: '#cf3897',
          pink11: '#c2298a',
          pink12: '#651249',
        },
        r$ = {
          pinkA1: '#ff00aa03',
          pinkA2: '#e0008008',
          pinkA3: '#f4008c16',
          pinkA4: '#e2008b23',
          pinkA5: '#d1008331',
          pinkA6: '#c0007840',
          pinkA7: '#b6006f53',
          pinkA8: '#af006f6c',
          pinkA9: '#c8007fbf',
          pinkA10: '#c2007ac7',
          pinkA11: '#b60074d6',
          pinkA12: '#59003bed',
        },
        rZ = {
          pink1: 'color(display-p3 0.998 0.989 0.996)',
          pink2: 'color(display-p3 0.992 0.97 0.985)',
          pink3: 'color(display-p3 0.981 0.917 0.96)',
          pink4: 'color(display-p3 0.963 0.867 0.932)',
          pink5: 'color(display-p3 0.939 0.815 0.899)',
          pink6: 'color(display-p3 0.907 0.756 0.859)',
          pink7: 'color(display-p3 0.869 0.683 0.81)',
          pink8: 'color(display-p3 0.825 0.59 0.751)',
          pink9: 'color(display-p3 0.775 0.297 0.61)',
          pink10: 'color(display-p3 0.748 0.27 0.581)',
          pink11: 'color(display-p3 0.698 0.219 0.528)',
          pink12: 'color(display-p3 0.363 0.101 0.279)',
        },
        rJ = {
          pinkA1: 'color(display-p3 0.675 0.024 0.675 / 0.012)',
          pinkA2: 'color(display-p3 0.757 0.02 0.51 / 0.032)',
          pinkA3: 'color(display-p3 0.765 0.008 0.529 / 0.083)',
          pinkA4: 'color(display-p3 0.737 0.008 0.506 / 0.134)',
          pinkA5: 'color(display-p3 0.663 0.004 0.451 / 0.185)',
          pinkA6: 'color(display-p3 0.616 0.004 0.424 / 0.244)',
          pinkA7: 'color(display-p3 0.596 0.004 0.412 / 0.318)',
          pinkA8: 'color(display-p3 0.573 0.004 0.404 / 0.412)',
          pinkA9: 'color(display-p3 0.682 0 0.447 / 0.702)',
          pinkA10: 'color(display-p3 0.655 0 0.424 / 0.73)',
          pinkA11: 'color(display-p3 0.698 0.219 0.528)',
          pinkA12: 'color(display-p3 0.363 0.101 0.279)',
        },
        rQ = {
          plum1: '#fefcff',
          plum2: '#fdf7fd',
          plum3: '#fbebfb',
          plum4: '#f7def8',
          plum5: '#f2d1f3',
          plum6: '#e9c2ec',
          plum7: '#deade3',
          plum8: '#cf91d8',
          plum9: '#ab4aba',
          plum10: '#a144af',
          plum11: '#953ea3',
          plum12: '#53195d',
        },
        r0 = {
          plumA1: '#aa00ff03',
          plumA2: '#c000c008',
          plumA3: '#cc00cc14',
          plumA4: '#c200c921',
          plumA5: '#b700bd2e',
          plumA6: '#a400b03d',
          plumA7: '#9900a852',
          plumA8: '#9000a56e',
          plumA9: '#89009eb5',
          plumA10: '#7f0092bb',
          plumA11: '#730086c1',
          plumA12: '#40004be6',
        },
        r1 = {
          plum1: 'color(display-p3 0.995 0.988 0.999)',
          plum2: 'color(display-p3 0.988 0.971 0.99)',
          plum3: 'color(display-p3 0.973 0.923 0.98)',
          plum4: 'color(display-p3 0.953 0.875 0.966)',
          plum5: 'color(display-p3 0.926 0.825 0.945)',
          plum6: 'color(display-p3 0.89 0.765 0.916)',
          plum7: 'color(display-p3 0.84 0.686 0.877)',
          plum8: 'color(display-p3 0.775 0.58 0.832)',
          plum9: 'color(display-p3 0.624 0.313 0.708)',
          plum10: 'color(display-p3 0.587 0.29 0.667)',
          plum11: 'color(display-p3 0.543 0.263 0.619)',
          plum12: 'color(display-p3 0.299 0.114 0.352)',
        },
        r3 = {
          plumA1: 'color(display-p3 0.675 0.024 1 / 0.012)',
          plumA2: 'color(display-p3 0.58 0.024 0.58 / 0.028)',
          plumA3: 'color(display-p3 0.655 0.008 0.753 / 0.079)',
          plumA4: 'color(display-p3 0.627 0.008 0.722 / 0.126)',
          plumA5: 'color(display-p3 0.58 0.004 0.69 / 0.177)',
          plumA6: 'color(display-p3 0.537 0.004 0.655 / 0.236)',
          plumA7: 'color(display-p3 0.49 0.004 0.616 / 0.314)',
          plumA8: 'color(display-p3 0.471 0.004 0.6 / 0.42)',
          plumA9: 'color(display-p3 0.451 0 0.576 / 0.687)',
          plumA10: 'color(display-p3 0.42 0 0.529 / 0.71)',
          plumA11: 'color(display-p3 0.543 0.263 0.619)',
          plumA12: 'color(display-p3 0.299 0.114 0.352)',
        },
        r2 = {
          purple1: '#fefcfe',
          purple2: '#fbf7fe',
          purple3: '#f7edfe',
          purple4: '#f2e2fc',
          purple5: '#ead5f9',
          purple6: '#e0c4f4',
          purple7: '#d1afec',
          purple8: '#be93e4',
          purple9: '#8e4ec6',
          purple10: '#8347b9',
          purple11: '#8145b5',
          purple12: '#402060',
        },
        r9 = {
          purpleA1: '#aa00aa03',
          purpleA2: '#8000e008',
          purpleA3: '#8e00f112',
          purpleA4: '#8d00e51d',
          purpleA5: '#8000db2a',
          purpleA6: '#7a01d03b',
          purpleA7: '#6d00c350',
          purpleA8: '#6600c06c',
          purpleA9: '#5c00adb1',
          purpleA10: '#53009eb8',
          purpleA11: '#52009aba',
          purpleA12: '#250049df',
        },
        r5 = {
          purple1: 'color(display-p3 0.995 0.988 0.996)',
          purple2: 'color(display-p3 0.983 0.971 0.993)',
          purple3: 'color(display-p3 0.963 0.931 0.989)',
          purple4: 'color(display-p3 0.937 0.888 0.981)',
          purple5: 'color(display-p3 0.904 0.837 0.966)',
          purple6: 'color(display-p3 0.86 0.774 0.942)',
          purple7: 'color(display-p3 0.799 0.69 0.91)',
          purple8: 'color(display-p3 0.719 0.583 0.874)',
          purple9: 'color(display-p3 0.523 0.318 0.751)',
          purple10: 'color(display-p3 0.483 0.289 0.7)',
          purple11: 'color(display-p3 0.473 0.281 0.687)',
          purple12: 'color(display-p3 0.234 0.132 0.363)',
        },
        r4 = {
          purpleA1: 'color(display-p3 0.675 0.024 0.675 / 0.012)',
          purpleA2: 'color(display-p3 0.443 0.024 0.722 / 0.028)',
          purpleA3: 'color(display-p3 0.506 0.008 0.835 / 0.071)',
          purpleA4: 'color(display-p3 0.451 0.004 0.831 / 0.114)',
          purpleA5: 'color(display-p3 0.431 0.004 0.788 / 0.165)',
          purpleA6: 'color(display-p3 0.384 0.004 0.745 / 0.228)',
          purpleA7: 'color(display-p3 0.357 0.004 0.71 / 0.31)',
          purpleA8: 'color(display-p3 0.322 0.004 0.702 / 0.416)',
          purpleA9: 'color(display-p3 0.298 0 0.639 / 0.683)',
          purpleA10: 'color(display-p3 0.271 0 0.58 / 0.71)',
          purpleA11: 'color(display-p3 0.473 0.281 0.687)',
          purpleA12: 'color(display-p3 0.234 0.132 0.363)',
        },
        r8 = {
          violet1: '#fdfcfe',
          violet2: '#faf8ff',
          violet3: '#f4f0fe',
          violet4: '#ebe4ff',
          violet5: '#e1d9ff',
          violet6: '#d4cafe',
          violet7: '#c2b5f5',
          violet8: '#aa99ec',
          violet9: '#6e56cf',
          violet10: '#654dc4',
          violet11: '#6550b9',
          violet12: '#2f265f',
        },
        r7 = {
          violetA1: '#5500aa03',
          violetA2: '#4900ff07',
          violetA3: '#4400ee0f',
          violetA4: '#4300ff1b',
          violetA5: '#3600ff26',
          violetA6: '#3100fb35',
          violetA7: '#2d01dd4a',
          violetA8: '#2b00d066',
          violetA9: '#2400b7a9',
          violetA10: '#2300abb2',
          violetA11: '#1f0099af',
          violetA12: '#0b0043d9',
        },
        r6 = {
          violet1: 'color(display-p3 0.991 0.988 0.995)',
          violet2: 'color(display-p3 0.978 0.974 0.998)',
          violet3: 'color(display-p3 0.953 0.943 0.993)',
          violet4: 'color(display-p3 0.916 0.897 1)',
          violet5: 'color(display-p3 0.876 0.851 1)',
          violet6: 'color(display-p3 0.825 0.793 0.981)',
          violet7: 'color(display-p3 0.752 0.712 0.943)',
          violet8: 'color(display-p3 0.654 0.602 0.902)',
          violet9: 'color(display-p3 0.417 0.341 0.784)',
          violet10: 'color(display-p3 0.381 0.306 0.741)',
          violet11: 'color(display-p3 0.383 0.317 0.702)',
          violet12: 'color(display-p3 0.179 0.15 0.359)',
        },
        te = {
          violetA1: 'color(display-p3 0.349 0.024 0.675 / 0.012)',
          violetA2: 'color(display-p3 0.161 0.024 0.863 / 0.028)',
          violetA3: 'color(display-p3 0.204 0.004 0.871 / 0.059)',
          violetA4: 'color(display-p3 0.196 0.004 1 / 0.102)',
          violetA5: 'color(display-p3 0.165 0.008 1 / 0.15)',
          violetA6: 'color(display-p3 0.153 0.004 0.906 / 0.208)',
          violetA7: 'color(display-p3 0.141 0.004 0.796 / 0.287)',
          violetA8: 'color(display-p3 0.133 0.004 0.753 / 0.397)',
          violetA9: 'color(display-p3 0.114 0 0.675 / 0.659)',
          violetA10: 'color(display-p3 0.11 0 0.627 / 0.695)',
          violetA11: 'color(display-p3 0.383 0.317 0.702)',
          violetA12: 'color(display-p3 0.179 0.15 0.359)',
        },
        tr = {
          iris1: '#fdfdff',
          iris2: '#f8f8ff',
          iris3: '#f0f1fe',
          iris4: '#e6e7ff',
          iris5: '#dadcff',
          iris6: '#cbcdff',
          iris7: '#b8baf8',
          iris8: '#9b9ef0',
          iris9: '#5b5bd6',
          iris10: '#5151cd',
          iris11: '#5753c6',
          iris12: '#272962',
        },
        tt = {
          irisA1: '#0000ff02',
          irisA2: '#0000ff07',
          irisA3: '#0011ee0f',
          irisA4: '#000bff19',
          irisA5: '#000eff25',
          irisA6: '#000aff34',
          irisA7: '#0008e647',
          irisA8: '#0008d964',
          irisA9: '#0000c0a4',
          irisA10: '#0000b6ae',
          irisA11: '#0600abac',
          irisA12: '#000246d8',
        },
        ta = {
          iris1: 'color(display-p3 0.992 0.992 0.999)',
          iris2: 'color(display-p3 0.972 0.973 0.998)',
          iris3: 'color(display-p3 0.943 0.945 0.992)',
          iris4: 'color(display-p3 0.902 0.906 1)',
          iris5: 'color(display-p3 0.857 0.861 1)',
          iris6: 'color(display-p3 0.799 0.805 0.987)',
          iris7: 'color(display-p3 0.721 0.727 0.955)',
          iris8: 'color(display-p3 0.61 0.619 0.918)',
          iris9: 'color(display-p3 0.357 0.357 0.81)',
          iris10: 'color(display-p3 0.318 0.318 0.774)',
          iris11: 'color(display-p3 0.337 0.326 0.748)',
          iris12: 'color(display-p3 0.154 0.161 0.371)',
        },
        to = {
          irisA1: 'color(display-p3 0.02 0.02 1 / 0.008)',
          irisA2: 'color(display-p3 0.024 0.024 0.863 / 0.028)',
          irisA3: 'color(display-p3 0.004 0.071 0.871 / 0.059)',
          irisA4: 'color(display-p3 0.012 0.051 1 / 0.099)',
          irisA5: 'color(display-p3 0.008 0.035 1 / 0.142)',
          irisA6: 'color(display-p3 0 0.02 0.941 / 0.2)',
          irisA7: 'color(display-p3 0.004 0.02 0.847 / 0.279)',
          irisA8: 'color(display-p3 0.004 0.024 0.788 / 0.389)',
          irisA9: 'color(display-p3 0 0 0.706 / 0.644)',
          irisA10: 'color(display-p3 0 0 0.667 / 0.683)',
          irisA11: 'color(display-p3 0.337 0.326 0.748)',
          irisA12: 'color(display-p3 0.154 0.161 0.371)',
        },
        tn = {
          indigo1: '#fdfdfe',
          indigo2: '#f7f9ff',
          indigo3: '#edf2fe',
          indigo4: '#e1e9ff',
          indigo5: '#d2deff',
          indigo6: '#c1d0ff',
          indigo7: '#abbdf9',
          indigo8: '#8da4ef',
          indigo9: '#3e63dd',
          indigo10: '#3358d4',
          indigo11: '#3a5bc7',
          indigo12: '#1f2d5c',
        },
        tl = {
          indigoA1: '#00008002',
          indigoA2: '#0040ff08',
          indigoA3: '#0047f112',
          indigoA4: '#0044ff1e',
          indigoA5: '#0044ff2d',
          indigoA6: '#003eff3e',
          indigoA7: '#0037ed54',
          indigoA8: '#0034dc72',
          indigoA9: '#0031d2c1',
          indigoA10: '#002ec9cc',
          indigoA11: '#002bb7c5',
          indigoA12: '#001046e0',
        },
        ti = {
          indigo1: 'color(display-p3 0.992 0.992 0.996)',
          indigo2: 'color(display-p3 0.971 0.977 0.998)',
          indigo3: 'color(display-p3 0.933 0.948 0.992)',
          indigo4: 'color(display-p3 0.885 0.914 1)',
          indigo5: 'color(display-p3 0.831 0.87 1)',
          indigo6: 'color(display-p3 0.767 0.814 0.995)',
          indigo7: 'color(display-p3 0.685 0.74 0.957)',
          indigo8: 'color(display-p3 0.569 0.639 0.916)',
          indigo9: 'color(display-p3 0.276 0.384 0.837)',
          indigo10: 'color(display-p3 0.234 0.343 0.801)',
          indigo11: 'color(display-p3 0.256 0.354 0.755)',
          indigo12: 'color(display-p3 0.133 0.175 0.348)',
        },
        ts = {
          indigoA1: 'color(display-p3 0.02 0.02 0.51 / 0.008)',
          indigoA2: 'color(display-p3 0.024 0.161 0.863 / 0.028)',
          indigoA3: 'color(display-p3 0.008 0.239 0.886 / 0.067)',
          indigoA4: 'color(display-p3 0.004 0.247 1 / 0.114)',
          indigoA5: 'color(display-p3 0.004 0.235 1 / 0.169)',
          indigoA6: 'color(display-p3 0.004 0.208 0.984 / 0.232)',
          indigoA7: 'color(display-p3 0.004 0.176 0.863 / 0.314)',
          indigoA8: 'color(display-p3 0.004 0.165 0.812 / 0.432)',
          indigoA9: 'color(display-p3 0 0.153 0.773 / 0.726)',
          indigoA10: 'color(display-p3 0 0.137 0.737 / 0.765)',
          indigoA11: 'color(display-p3 0.256 0.354 0.755)',
          indigoA12: 'color(display-p3 0.133 0.175 0.348)',
        },
        tc = {
          blue1: '#fbfdff',
          blue2: '#f4faff',
          blue3: '#e6f4fe',
          blue4: '#d5efff',
          blue5: '#c2e5ff',
          blue6: '#acd8fc',
          blue7: '#8ec8f6',
          blue8: '#5eb1ef',
          blue9: '#0090ff',
          blue10: '#0588f0',
          blue11: '#0d74ce',
          blue12: '#113264',
        },
        td = {
          blueA1: '#0080ff04',
          blueA2: '#008cff0b',
          blueA3: '#008ff519',
          blueA4: '#009eff2a',
          blueA5: '#0093ff3d',
          blueA6: '#0088f653',
          blueA7: '#0083eb71',
          blueA8: '#0084e6a1',
          blueA9: '#0090ff',
          blueA10: '#0086f0fa',
          blueA11: '#006dcbf2',
          blueA12: '#002359ee',
        },
        tp = {
          blue1: 'color(display-p3 0.986 0.992 0.999)',
          blue2: 'color(display-p3 0.96 0.979 0.998)',
          blue3: 'color(display-p3 0.912 0.956 0.991)',
          blue4: 'color(display-p3 0.853 0.932 1)',
          blue5: 'color(display-p3 0.788 0.894 0.998)',
          blue6: 'color(display-p3 0.709 0.843 0.976)',
          blue7: 'color(display-p3 0.606 0.777 0.947)',
          blue8: 'color(display-p3 0.451 0.688 0.917)',
          blue9: 'color(display-p3 0.247 0.556 0.969)',
          blue10: 'color(display-p3 0.234 0.523 0.912)',
          blue11: 'color(display-p3 0.15 0.44 0.84)',
          blue12: 'color(display-p3 0.102 0.193 0.379)',
        },
        tu = {
          blueA1: 'color(display-p3 0.024 0.514 1 / 0.016)',
          blueA2: 'color(display-p3 0.024 0.514 0.906 / 0.04)',
          blueA3: 'color(display-p3 0.012 0.506 0.914 / 0.087)',
          blueA4: 'color(display-p3 0.008 0.545 1 / 0.146)',
          blueA5: 'color(display-p3 0.004 0.502 0.984 / 0.212)',
          blueA6: 'color(display-p3 0.004 0.463 0.922 / 0.291)',
          blueA7: 'color(display-p3 0.004 0.431 0.863 / 0.393)',
          blueA8: 'color(display-p3 0 0.427 0.851 / 0.55)',
          blueA9: 'color(display-p3 0 0.412 0.961 / 0.753)',
          blueA10: 'color(display-p3 0 0.376 0.886 / 0.765)',
          blueA11: 'color(display-p3 0.15 0.44 0.84)',
          blueA12: 'color(display-p3 0.102 0.193 0.379)',
        },
        tf = {
          cyan1: '#fafdfe',
          cyan2: '#f2fafb',
          cyan3: '#def7f9',
          cyan4: '#caf1f6',
          cyan5: '#b5e9f0',
          cyan6: '#9ddde7',
          cyan7: '#7dcedc',
          cyan8: '#3db9cf',
          cyan9: '#00a2c7',
          cyan10: '#0797b9',
          cyan11: '#107d98',
          cyan12: '#0d3c48',
        },
        ty = {
          cyanA1: '#0099cc05',
          cyanA2: '#009db10d',
          cyanA3: '#00c2d121',
          cyanA4: '#00bcd435',
          cyanA5: '#01b4cc4a',
          cyanA6: '#00a7c162',
          cyanA7: '#009fbb82',
          cyanA8: '#00a3c0c2',
          cyanA9: '#00a2c7',
          cyanA10: '#0094b7f8',
          cyanA11: '#007491ef',
          cyanA12: '#00323ef2',
        },
        tb = {
          cyan1: 'color(display-p3 0.982 0.992 0.996)',
          cyan2: 'color(display-p3 0.955 0.981 0.984)',
          cyan3: 'color(display-p3 0.888 0.965 0.975)',
          cyan4: 'color(display-p3 0.821 0.941 0.959)',
          cyan5: 'color(display-p3 0.751 0.907 0.935)',
          cyan6: 'color(display-p3 0.671 0.862 0.9)',
          cyan7: 'color(display-p3 0.564 0.8 0.854)',
          cyan8: 'color(display-p3 0.388 0.715 0.798)',
          cyan9: 'color(display-p3 0.282 0.627 0.765)',
          cyan10: 'color(display-p3 0.264 0.583 0.71)',
          cyan11: 'color(display-p3 0.08 0.48 0.63)',
          cyan12: 'color(display-p3 0.108 0.232 0.277)',
        },
        tm = {
          cyanA1: 'color(display-p3 0.02 0.608 0.804 / 0.02)',
          cyanA2: 'color(display-p3 0.02 0.557 0.647 / 0.044)',
          cyanA3: 'color(display-p3 0.004 0.694 0.796 / 0.114)',
          cyanA4: 'color(display-p3 0.004 0.678 0.784 / 0.181)',
          cyanA5: 'color(display-p3 0.004 0.624 0.733 / 0.248)',
          cyanA6: 'color(display-p3 0.004 0.584 0.706 / 0.33)',
          cyanA7: 'color(display-p3 0.004 0.541 0.667 / 0.436)',
          cyanA8: 'color(display-p3 0 0.533 0.667 / 0.612)',
          cyanA9: 'color(display-p3 0 0.482 0.675 / 0.718)',
          cyanA10: 'color(display-p3 0 0.435 0.608 / 0.738)',
          cyanA11: 'color(display-p3 0.08 0.48 0.63)',
          cyanA12: 'color(display-p3 0.108 0.232 0.277)',
        },
        tg = {
          teal1: '#fafefd',
          teal2: '#f3fbf9',
          teal3: '#e0f8f3',
          teal4: '#ccf3ea',
          teal5: '#b8eae0',
          teal6: '#a1ded2',
          teal7: '#83cdc1',
          teal8: '#53b9ab',
          teal9: '#12a594',
          teal10: '#0d9b8a',
          teal11: '#008573',
          teal12: '#0d3d38',
        },
        tA = {
          tealA1: '#00cc9905',
          tealA2: '#00aa800c',
          tealA3: '#00c69d1f',
          tealA4: '#00c39633',
          tealA5: '#00b49047',
          tealA6: '#00a6855e',
          tealA7: '#0099807c',
          tealA8: '#009783ac',
          tealA9: '#009e8ced',
          tealA10: '#009684f2',
          tealA11: '#008573',
          tealA12: '#00332df2',
        },
        th = {
          teal1: 'color(display-p3 0.983 0.996 0.992)',
          teal2: 'color(display-p3 0.958 0.983 0.976)',
          teal3: 'color(display-p3 0.895 0.971 0.952)',
          teal4: 'color(display-p3 0.831 0.949 0.92)',
          teal5: 'color(display-p3 0.761 0.914 0.878)',
          teal6: 'color(display-p3 0.682 0.864 0.825)',
          teal7: 'color(display-p3 0.581 0.798 0.756)',
          teal8: 'color(display-p3 0.433 0.716 0.671)',
          teal9: 'color(display-p3 0.297 0.637 0.581)',
          teal10: 'color(display-p3 0.275 0.599 0.542)',
          teal11: 'color(display-p3 0.08 0.5 0.43)',
          teal12: 'color(display-p3 0.11 0.235 0.219)',
        },
        tv = {
          tealA1: 'color(display-p3 0.024 0.757 0.514 / 0.016)',
          tealA2: 'color(display-p3 0.02 0.647 0.467 / 0.044)',
          tealA3: 'color(display-p3 0.004 0.741 0.557 / 0.106)',
          tealA4: 'color(display-p3 0.004 0.702 0.537 / 0.169)',
          tealA5: 'color(display-p3 0.004 0.643 0.494 / 0.24)',
          tealA6: 'color(display-p3 0.004 0.569 0.447 / 0.318)',
          tealA7: 'color(display-p3 0.004 0.518 0.424 / 0.42)',
          tealA8: 'color(display-p3 0 0.506 0.424 / 0.569)',
          tealA9: 'color(display-p3 0 0.482 0.404 / 0.702)',
          tealA10: 'color(display-p3 0 0.451 0.369 / 0.726)',
          tealA11: 'color(display-p3 0.08 0.5 0.43)',
          tealA12: 'color(display-p3 0.11 0.235 0.219)',
        },
        t_ = {
          jade1: '#fbfefd',
          jade2: '#f4fbf7',
          jade3: '#e6f7ed',
          jade4: '#d6f1e3',
          jade5: '#c3e9d7',
          jade6: '#acdec8',
          jade7: '#8bceb6',
          jade8: '#56ba9f',
          jade9: '#29a383',
          jade10: '#26997b',
          jade11: '#208368',
          jade12: '#1d3b31',
        },
        tP = {
          jadeA1: '#00c08004',
          jadeA2: '#00a3460b',
          jadeA3: '#00ae4819',
          jadeA4: '#00a85129',
          jadeA5: '#00a2553c',
          jadeA6: '#009a5753',
          jadeA7: '#00945f74',
          jadeA8: '#00976ea9',
          jadeA9: '#00916bd6',
          jadeA10: '#008764d9',
          jadeA11: '#007152df',
          jadeA12: '#002217e2',
        },
        tw = {
          jade1: 'color(display-p3 0.986 0.996 0.992)',
          jade2: 'color(display-p3 0.962 0.983 0.969)',
          jade3: 'color(display-p3 0.912 0.965 0.932)',
          jade4: 'color(display-p3 0.858 0.941 0.893)',
          jade5: 'color(display-p3 0.795 0.909 0.847)',
          jade6: 'color(display-p3 0.715 0.864 0.791)',
          jade7: 'color(display-p3 0.603 0.802 0.718)',
          jade8: 'color(display-p3 0.44 0.72 0.629)',
          jade9: 'color(display-p3 0.319 0.63 0.521)',
          jade10: 'color(display-p3 0.299 0.592 0.488)',
          jade11: 'color(display-p3 0.15 0.5 0.37)',
          jade12: 'color(display-p3 0.142 0.229 0.194)',
        },
        tk = {
          jadeA1: 'color(display-p3 0.024 0.757 0.514 / 0.016)',
          jadeA2: 'color(display-p3 0.024 0.612 0.22 / 0.04)',
          jadeA3: 'color(display-p3 0.012 0.596 0.235 / 0.087)',
          jadeA4: 'color(display-p3 0.008 0.588 0.255 / 0.142)',
          jadeA5: 'color(display-p3 0.004 0.561 0.251 / 0.204)',
          jadeA6: 'color(display-p3 0.004 0.525 0.278 / 0.287)',
          jadeA7: 'color(display-p3 0.004 0.506 0.29 / 0.397)',
          jadeA8: 'color(display-p3 0 0.506 0.337 / 0.561)',
          jadeA9: 'color(display-p3 0 0.459 0.298 / 0.683)',
          jadeA10: 'color(display-p3 0 0.42 0.271 / 0.702)',
          jadeA11: 'color(display-p3 0.15 0.5 0.37)',
          jadeA12: 'color(display-p3 0.142 0.229 0.194)',
        },
        tS = {
          green1: '#fbfefc',
          green2: '#f4fbf6',
          green3: '#e6f6eb',
          green4: '#d6f1df',
          green5: '#c4e8d1',
          green6: '#adddc0',
          green7: '#8eceaa',
          green8: '#5bb98b',
          green9: '#30a46c',
          green10: '#2b9a66',
          green11: '#218358',
          green12: '#193b2d',
        },
        tx = {
          greenA1: '#00c04004',
          greenA2: '#00a32f0b',
          greenA3: '#00a43319',
          greenA4: '#00a83829',
          greenA5: '#019c393b',
          greenA6: '#00963c52',
          greenA7: '#00914071',
          greenA8: '#00924ba4',
          greenA9: '#008f4acf',
          greenA10: '#008647d4',
          greenA11: '#00713fde',
          greenA12: '#002616e6',
        },
        tj = {
          green1: 'color(display-p3 0.986 0.996 0.989)',
          green2: 'color(display-p3 0.963 0.983 0.967)',
          green3: 'color(display-p3 0.913 0.964 0.925)',
          green4: 'color(display-p3 0.859 0.94 0.879)',
          green5: 'color(display-p3 0.796 0.907 0.826)',
          green6: 'color(display-p3 0.718 0.863 0.761)',
          green7: 'color(display-p3 0.61 0.801 0.675)',
          green8: 'color(display-p3 0.451 0.715 0.559)',
          green9: 'color(display-p3 0.332 0.634 0.442)',
          green10: 'color(display-p3 0.308 0.595 0.417)',
          green11: 'color(display-p3 0.19 0.5 0.32)',
          green12: 'color(display-p3 0.132 0.228 0.18)',
        },
        tR = {
          greenA1: 'color(display-p3 0.024 0.757 0.267 / 0.016)',
          greenA2: 'color(display-p3 0.024 0.565 0.129 / 0.036)',
          greenA3: 'color(display-p3 0.012 0.596 0.145 / 0.087)',
          greenA4: 'color(display-p3 0.008 0.588 0.145 / 0.142)',
          greenA5: 'color(display-p3 0.004 0.541 0.157 / 0.204)',
          greenA6: 'color(display-p3 0.004 0.518 0.157 / 0.283)',
          greenA7: 'color(display-p3 0.004 0.486 0.165 / 0.389)',
          greenA8: 'color(display-p3 0 0.478 0.2 / 0.55)',
          greenA9: 'color(display-p3 0 0.455 0.165 / 0.667)',
          greenA10: 'color(display-p3 0 0.416 0.153 / 0.691)',
          greenA11: 'color(display-p3 0.19 0.5 0.32)',
          greenA12: 'color(display-p3 0.132 0.228 0.18)',
        },
        tE = {
          grass1: '#fbfefb',
          grass2: '#f5fbf5',
          grass3: '#e9f6e9',
          grass4: '#daf1db',
          grass5: '#c9e8ca',
          grass6: '#b2ddb5',
          grass7: '#94ce9a',
          grass8: '#65ba74',
          grass9: '#46a758',
          grass10: '#3e9b4f',
          grass11: '#2a7e3b',
          grass12: '#203c25',
        },
        tO = {
          grassA1: '#00c00004',
          grassA2: '#0099000a',
          grassA3: '#00970016',
          grassA4: '#009f0725',
          grassA5: '#00930536',
          grassA6: '#008f0a4d',
          grassA7: '#018b0f6b',
          grassA8: '#008d199a',
          grassA9: '#008619b9',
          grassA10: '#007b17c1',
          grassA11: '#006514d5',
          grassA12: '#002006df',
        },
        tC = {
          grass1: 'color(display-p3 0.986 0.996 0.985)',
          grass2: 'color(display-p3 0.966 0.983 0.964)',
          grass3: 'color(display-p3 0.923 0.965 0.917)',
          grass4: 'color(display-p3 0.872 0.94 0.865)',
          grass5: 'color(display-p3 0.811 0.908 0.802)',
          grass6: 'color(display-p3 0.733 0.864 0.724)',
          grass7: 'color(display-p3 0.628 0.803 0.622)',
          grass8: 'color(display-p3 0.477 0.72 0.482)',
          grass9: 'color(display-p3 0.38 0.647 0.378)',
          grass10: 'color(display-p3 0.344 0.598 0.342)',
          grass11: 'color(display-p3 0.263 0.488 0.261)',
          grass12: 'color(display-p3 0.151 0.233 0.153)',
        },
        tT = {
          grassA1: 'color(display-p3 0.024 0.757 0.024 / 0.016)',
          grassA2: 'color(display-p3 0.024 0.565 0.024 / 0.036)',
          grassA3: 'color(display-p3 0.059 0.576 0.008 / 0.083)',
          grassA4: 'color(display-p3 0.035 0.565 0.008 / 0.134)',
          grassA5: 'color(display-p3 0.047 0.545 0.008 / 0.197)',
          grassA6: 'color(display-p3 0.031 0.502 0.004 / 0.275)',
          grassA7: 'color(display-p3 0.012 0.482 0.004 / 0.377)',
          grassA8: 'color(display-p3 0 0.467 0.008 / 0.522)',
          grassA9: 'color(display-p3 0.008 0.435 0 / 0.624)',
          grassA10: 'color(display-p3 0.008 0.388 0 / 0.659)',
          grassA11: 'color(display-p3 0.263 0.488 0.261)',
          grassA12: 'color(display-p3 0.151 0.233 0.153)',
        },
        tM = {
          brown1: '#fefdfc',
          brown2: '#fcf9f6',
          brown3: '#f6eee7',
          brown4: '#f0e4d9',
          brown5: '#ebdaca',
          brown6: '#e4cdb7',
          brown7: '#dcbc9f',
          brown8: '#cea37e',
          brown9: '#ad7f58',
          brown10: '#a07553',
          brown11: '#815e46',
          brown12: '#3e332e',
        },
        tN = {
          brownA1: '#aa550003',
          brownA2: '#aa550009',
          brownA3: '#a04b0018',
          brownA4: '#9b4a0026',
          brownA5: '#9f4d0035',
          brownA6: '#a04e0048',
          brownA7: '#a34e0060',
          brownA8: '#9f4a0081',
          brownA9: '#823c00a7',
          brownA10: '#723300ac',
          brownA11: '#522100b9',
          brownA12: '#140600d1',
        },
        tD = {
          brown1: 'color(display-p3 0.995 0.992 0.989)',
          brown2: 'color(display-p3 0.987 0.976 0.964)',
          brown3: 'color(display-p3 0.959 0.936 0.909)',
          brown4: 'color(display-p3 0.934 0.897 0.855)',
          brown5: 'color(display-p3 0.909 0.856 0.798)',
          brown6: 'color(display-p3 0.88 0.808 0.73)',
          brown7: 'color(display-p3 0.841 0.742 0.639)',
          brown8: 'color(display-p3 0.782 0.647 0.514)',
          brown9: 'color(display-p3 0.651 0.505 0.368)',
          brown10: 'color(display-p3 0.601 0.465 0.344)',
          brown11: 'color(display-p3 0.485 0.374 0.288)',
          brown12: 'color(display-p3 0.236 0.202 0.183)',
        },
        tI = {
          brownA1: 'color(display-p3 0.675 0.349 0.024 / 0.012)',
          brownA2: 'color(display-p3 0.675 0.349 0.024 / 0.036)',
          brownA3: 'color(display-p3 0.573 0.314 0.012 / 0.091)',
          brownA4: 'color(display-p3 0.545 0.302 0.008 / 0.146)',
          brownA5: 'color(display-p3 0.561 0.29 0.004 / 0.204)',
          brownA6: 'color(display-p3 0.553 0.294 0.004 / 0.271)',
          brownA7: 'color(display-p3 0.557 0.286 0.004 / 0.361)',
          brownA8: 'color(display-p3 0.549 0.275 0.004 / 0.487)',
          brownA9: 'color(display-p3 0.447 0.22 0 / 0.632)',
          brownA10: 'color(display-p3 0.388 0.188 0 / 0.655)',
          brownA11: 'color(display-p3 0.485 0.374 0.288)',
          brownA12: 'color(display-p3 0.236 0.202 0.183)',
        },
        tL = {
          bronze1: '#fdfcfc',
          bronze2: '#fdf7f5',
          bronze3: '#f6edea',
          bronze4: '#efe4df',
          bronze5: '#e7d9d3',
          bronze6: '#dfcdc5',
          bronze7: '#d3bcb3',
          bronze8: '#c2a499',
          bronze9: '#a18072',
          bronze10: '#957468',
          bronze11: '#7d5e54',
          bronze12: '#43302b',
        },
        tz = {
          bronzeA1: '#55000003',
          bronzeA2: '#cc33000a',
          bronzeA3: '#92250015',
          bronzeA4: '#80280020',
          bronzeA5: '#7423002c',
          bronzeA6: '#7324003a',
          bronzeA7: '#6c1f004c',
          bronzeA8: '#671c0066',
          bronzeA9: '#551a008d',
          bronzeA10: '#4c150097',
          bronzeA11: '#3d0f00ab',
          bronzeA12: '#1d0600d4',
        },
        tF = {
          bronze1: 'color(display-p3 0.991 0.988 0.988)',
          bronze2: 'color(display-p3 0.989 0.97 0.961)',
          bronze3: 'color(display-p3 0.958 0.932 0.919)',
          bronze4: 'color(display-p3 0.929 0.894 0.877)',
          bronze5: 'color(display-p3 0.898 0.853 0.832)',
          bronze6: 'color(display-p3 0.861 0.805 0.778)',
          bronze7: 'color(display-p3 0.812 0.739 0.706)',
          bronze8: 'color(display-p3 0.741 0.647 0.606)',
          bronze9: 'color(display-p3 0.611 0.507 0.455)',
          bronze10: 'color(display-p3 0.563 0.461 0.414)',
          bronze11: 'color(display-p3 0.471 0.373 0.336)',
          bronze12: 'color(display-p3 0.251 0.191 0.172)',
        },
        tU = {
          bronzeA1: 'color(display-p3 0.349 0.024 0.024 / 0.012)',
          bronzeA2: 'color(display-p3 0.71 0.22 0.024 / 0.04)',
          bronzeA3: 'color(display-p3 0.482 0.2 0.008 / 0.083)',
          bronzeA4: 'color(display-p3 0.424 0.133 0.004 / 0.122)',
          bronzeA5: 'color(display-p3 0.4 0.145 0.004 / 0.169)',
          bronzeA6: 'color(display-p3 0.388 0.125 0.004 / 0.224)',
          bronzeA7: 'color(display-p3 0.365 0.11 0.004 / 0.295)',
          bronzeA8: 'color(display-p3 0.341 0.102 0.004 / 0.393)',
          bronzeA9: 'color(display-p3 0.29 0.094 0 / 0.546)',
          bronzeA10: 'color(display-p3 0.255 0.082 0 / 0.585)',
          bronzeA11: 'color(display-p3 0.471 0.373 0.336)',
          bronzeA12: 'color(display-p3 0.251 0.191 0.172)',
        },
        tH = {
          gold1: '#fdfdfc',
          gold2: '#faf9f2',
          gold3: '#f2f0e7',
          gold4: '#eae6db',
          gold5: '#e1dccf',
          gold6: '#d8d0bf',
          gold7: '#cbc0aa',
          gold8: '#b9a88d',
          gold9: '#978365',
          gold10: '#8c7a5e',
          gold11: '#71624b',
          gold12: '#3b352b',
        },
        tW = {
          goldA1: '#55550003',
          goldA2: '#9d8a000d',
          goldA3: '#75600018',
          goldA4: '#6b4e0024',
          goldA5: '#60460030',
          goldA6: '#64440040',
          goldA7: '#63420055',
          goldA8: '#633d0072',
          goldA9: '#5332009a',
          goldA10: '#492d00a1',
          goldA11: '#362100b4',
          goldA12: '#130c00d4',
        },
        tB = {
          gold1: 'color(display-p3 0.992 0.992 0.989)',
          gold2: 'color(display-p3 0.98 0.976 0.953)',
          gold3: 'color(display-p3 0.947 0.94 0.909)',
          gold4: 'color(display-p3 0.914 0.904 0.865)',
          gold5: 'color(display-p3 0.88 0.865 0.816)',
          gold6: 'color(display-p3 0.84 0.818 0.756)',
          gold7: 'color(display-p3 0.788 0.753 0.677)',
          gold8: 'color(display-p3 0.715 0.66 0.565)',
          gold9: 'color(display-p3 0.579 0.517 0.41)',
          gold10: 'color(display-p3 0.538 0.479 0.38)',
          gold11: 'color(display-p3 0.433 0.386 0.305)',
          gold12: 'color(display-p3 0.227 0.209 0.173)',
        },
        tG = {
          goldA1: 'color(display-p3 0.349 0.349 0.024 / 0.012)',
          goldA2: 'color(display-p3 0.592 0.514 0.024 / 0.048)',
          goldA3: 'color(display-p3 0.4 0.357 0.012 / 0.091)',
          goldA4: 'color(display-p3 0.357 0.298 0.008 / 0.134)',
          goldA5: 'color(display-p3 0.345 0.282 0.004 / 0.185)',
          goldA6: 'color(display-p3 0.341 0.263 0.004 / 0.244)',
          goldA7: 'color(display-p3 0.345 0.235 0.004 / 0.322)',
          goldA8: 'color(display-p3 0.345 0.22 0.004 / 0.436)',
          goldA9: 'color(display-p3 0.286 0.18 0 / 0.589)',
          goldA10: 'color(display-p3 0.255 0.161 0 / 0.62)',
          goldA11: 'color(display-p3 0.433 0.386 0.305)',
          goldA12: 'color(display-p3 0.227 0.209 0.173)',
        },
        tV = {
          sky1: '#f9feff',
          sky2: '#f1fafd',
          sky3: '#e1f6fd',
          sky4: '#d1f0fa',
          sky5: '#bee7f5',
          sky6: '#a9daed',
          sky7: '#8dcae3',
          sky8: '#60b3d7',
          sky9: '#7ce2fe',
          sky10: '#74daf8',
          sky11: '#00749e',
          sky12: '#1d3e56',
        },
        tY = {
          skyA1: '#00d5ff06',
          skyA2: '#00a4db0e',
          skyA3: '#00b3ee1e',
          skyA4: '#00ace42e',
          skyA5: '#00a1d841',
          skyA6: '#0092ca56',
          skyA7: '#0089c172',
          skyA8: '#0085bf9f',
          skyA9: '#00c7fe83',
          skyA10: '#00bcf38b',
          skyA11: '#00749e',
          skyA12: '#002540e2',
        },
        tq = {
          sky1: 'color(display-p3 0.98 0.995 0.999)',
          sky2: 'color(display-p3 0.953 0.98 0.99)',
          sky3: 'color(display-p3 0.899 0.963 0.989)',
          sky4: 'color(display-p3 0.842 0.937 0.977)',
          sky5: 'color(display-p3 0.777 0.9 0.954)',
          sky6: 'color(display-p3 0.701 0.851 0.921)',
          sky7: 'color(display-p3 0.604 0.785 0.879)',
          sky8: 'color(display-p3 0.457 0.696 0.829)',
          sky9: 'color(display-p3 0.585 0.877 0.983)',
          sky10: 'color(display-p3 0.555 0.845 0.959)',
          sky11: 'color(display-p3 0.193 0.448 0.605)',
          sky12: 'color(display-p3 0.145 0.241 0.329)',
        },
        tX = {
          skyA1: 'color(display-p3 0.02 0.804 1 / 0.02)',
          skyA2: 'color(display-p3 0.024 0.592 0.757 / 0.048)',
          skyA3: 'color(display-p3 0.004 0.655 0.886 / 0.102)',
          skyA4: 'color(display-p3 0.004 0.604 0.851 / 0.157)',
          skyA5: 'color(display-p3 0.004 0.565 0.792 / 0.224)',
          skyA6: 'color(display-p3 0.004 0.502 0.737 / 0.299)',
          skyA7: 'color(display-p3 0.004 0.459 0.694 / 0.397)',
          skyA8: 'color(display-p3 0 0.435 0.682 / 0.542)',
          skyA9: 'color(display-p3 0.004 0.71 0.965 / 0.416)',
          skyA10: 'color(display-p3 0.004 0.647 0.914 / 0.444)',
          skyA11: 'color(display-p3 0.193 0.448 0.605)',
          skyA12: 'color(display-p3 0.145 0.241 0.329)',
        },
        tK = {
          mint1: '#f9fefd',
          mint2: '#f2fbf9',
          mint3: '#ddf9f2',
          mint4: '#c8f4e9',
          mint5: '#b3ecde',
          mint6: '#9ce0d0',
          mint7: '#7ecfbd',
          mint8: '#4cbba5',
          mint9: '#86ead4',
          mint10: '#7de0cb',
          mint11: '#027864',
          mint12: '#16433c',
        },
        t$ = {
          mintA1: '#00d5aa06',
          mintA2: '#00b18a0d',
          mintA3: '#00d29e22',
          mintA4: '#00cc9937',
          mintA5: '#00c0914c',
          mintA6: '#00b08663',
          mintA7: '#00a17d81',
          mintA8: '#009e7fb3',
          mintA9: '#00d3a579',
          mintA10: '#00c39982',
          mintA11: '#007763fd',
          mintA12: '#00312ae9',
        },
        tZ = {
          mint1: 'color(display-p3 0.98 0.995 0.992)',
          mint2: 'color(display-p3 0.957 0.985 0.977)',
          mint3: 'color(display-p3 0.888 0.972 0.95)',
          mint4: 'color(display-p3 0.819 0.951 0.916)',
          mint5: 'color(display-p3 0.747 0.918 0.873)',
          mint6: 'color(display-p3 0.668 0.87 0.818)',
          mint7: 'color(display-p3 0.567 0.805 0.744)',
          mint8: 'color(display-p3 0.42 0.724 0.649)',
          mint9: 'color(display-p3 0.62 0.908 0.834)',
          mint10: 'color(display-p3 0.585 0.871 0.797)',
          mint11: 'color(display-p3 0.203 0.463 0.397)',
          mint12: 'color(display-p3 0.136 0.259 0.236)',
        },
        tJ = {
          mintA1: 'color(display-p3 0.02 0.804 0.608 / 0.02)',
          mintA2: 'color(display-p3 0.02 0.647 0.467 / 0.044)',
          mintA3: 'color(display-p3 0.004 0.761 0.553 / 0.114)',
          mintA4: 'color(display-p3 0.004 0.741 0.545 / 0.181)',
          mintA5: 'color(display-p3 0.004 0.678 0.51 / 0.255)',
          mintA6: 'color(display-p3 0.004 0.616 0.463 / 0.334)',
          mintA7: 'color(display-p3 0.004 0.549 0.412 / 0.432)',
          mintA8: 'color(display-p3 0 0.529 0.392 / 0.581)',
          mintA9: 'color(display-p3 0.004 0.765 0.569 / 0.381)',
          mintA10: 'color(display-p3 0.004 0.69 0.51 / 0.416)',
          mintA11: 'color(display-p3 0.203 0.463 0.397)',
          mintA12: 'color(display-p3 0.136 0.259 0.236)',
        },
        tQ = {
          lime1: '#fcfdfa',
          lime2: '#f8faf3',
          lime3: '#eef6d6',
          lime4: '#e2f0bd',
          lime5: '#d3e7a6',
          lime6: '#c2da91',
          lime7: '#abc978',
          lime8: '#8db654',
          lime9: '#bdee63',
          lime10: '#b0e64c',
          lime11: '#5c7c2f',
          lime12: '#37401c',
        },
        t0 = {
          limeA1: '#66990005',
          limeA2: '#6b95000c',
          limeA3: '#96c80029',
          limeA4: '#8fc60042',
          limeA5: '#81bb0059',
          limeA6: '#72aa006e',
          limeA7: '#61990087',
          limeA8: '#559200ab',
          limeA9: '#93e4009c',
          limeA10: '#8fdc00b3',
          limeA11: '#375f00d0',
          limeA12: '#1e2900e3',
        },
        t1 = {
          lime1: 'color(display-p3 0.989 0.992 0.981)',
          lime2: 'color(display-p3 0.975 0.98 0.954)',
          lime3: 'color(display-p3 0.939 0.965 0.851)',
          lime4: 'color(display-p3 0.896 0.94 0.76)',
          lime5: 'color(display-p3 0.843 0.903 0.678)',
          lime6: 'color(display-p3 0.778 0.852 0.599)',
          lime7: 'color(display-p3 0.694 0.784 0.508)',
          lime8: 'color(display-p3 0.585 0.707 0.378)',
          lime9: 'color(display-p3 0.78 0.928 0.466)',
          lime10: 'color(display-p3 0.734 0.896 0.397)',
          lime11: 'color(display-p3 0.386 0.482 0.227)',
          lime12: 'color(display-p3 0.222 0.25 0.128)',
        },
        t3 = {
          limeA1: 'color(display-p3 0.412 0.608 0.02 / 0.02)',
          limeA2: 'color(display-p3 0.514 0.592 0.024 / 0.048)',
          limeA3: 'color(display-p3 0.584 0.765 0.008 / 0.15)',
          limeA4: 'color(display-p3 0.561 0.757 0.004 / 0.24)',
          limeA5: 'color(display-p3 0.514 0.698 0.004 / 0.322)',
          limeA6: 'color(display-p3 0.443 0.627 0 / 0.4)',
          limeA7: 'color(display-p3 0.376 0.561 0.004 / 0.491)',
          limeA8: 'color(display-p3 0.333 0.529 0 / 0.624)',
          limeA9: 'color(display-p3 0.588 0.867 0 / 0.534)',
          limeA10: 'color(display-p3 0.561 0.827 0 / 0.604)',
          limeA11: 'color(display-p3 0.386 0.482 0.227)',
          limeA12: 'color(display-p3 0.222 0.25 0.128)',
        },
        t2 = {
          yellow1: '#fdfdf9',
          yellow2: '#fefce9',
          yellow3: '#fffab8',
          yellow4: '#fff394',
          yellow5: '#ffe770',
          yellow6: '#f3d768',
          yellow7: '#e4c767',
          yellow8: '#d5ae39',
          yellow9: '#ffe629',
          yellow10: '#ffdc00',
          yellow11: '#9e6c00',
          yellow12: '#473b1f',
        },
        t9 = {
          yellowA1: '#aaaa0006',
          yellowA2: '#f4dd0016',
          yellowA3: '#ffee0047',
          yellowA4: '#ffe3016b',
          yellowA5: '#ffd5008f',
          yellowA6: '#ebbc0097',
          yellowA7: '#d2a10098',
          yellowA8: '#c99700c6',
          yellowA9: '#ffe100d6',
          yellowA10: '#ffdc00',
          yellowA11: '#9e6c00',
          yellowA12: '#2e2000e0',
        },
        t5 = {
          yellow1: 'color(display-p3 0.992 0.992 0.978)',
          yellow2: 'color(display-p3 0.995 0.99 0.922)',
          yellow3: 'color(display-p3 0.997 0.982 0.749)',
          yellow4: 'color(display-p3 0.992 0.953 0.627)',
          yellow5: 'color(display-p3 0.984 0.91 0.51)',
          yellow6: 'color(display-p3 0.934 0.847 0.474)',
          yellow7: 'color(display-p3 0.876 0.785 0.46)',
          yellow8: 'color(display-p3 0.811 0.689 0.313)',
          yellow9: 'color(display-p3 1 0.92 0.22)',
          yellow10: 'color(display-p3 0.977 0.868 0.291)',
          yellow11: 'color(display-p3 0.6 0.44 0)',
          yellow12: 'color(display-p3 0.271 0.233 0.137)',
        },
        t4 = {
          yellowA1: 'color(display-p3 0.675 0.675 0.024 / 0.024)',
          yellowA2: 'color(display-p3 0.953 0.855 0.008 / 0.079)',
          yellowA3: 'color(display-p3 0.988 0.925 0.004 / 0.251)',
          yellowA4: 'color(display-p3 0.98 0.875 0.004 / 0.373)',
          yellowA5: 'color(display-p3 0.969 0.816 0.004 / 0.491)',
          yellowA6: 'color(display-p3 0.875 0.71 0 / 0.526)',
          yellowA7: 'color(display-p3 0.769 0.604 0 / 0.542)',
          yellowA8: 'color(display-p3 0.725 0.549 0 / 0.687)',
          yellowA9: 'color(display-p3 1 0.898 0 / 0.781)',
          yellowA10: 'color(display-p3 0.969 0.812 0 / 0.71)',
          yellowA11: 'color(display-p3 0.6 0.44 0)',
          yellowA12: 'color(display-p3 0.271 0.233 0.137)',
        },
        t8 = {
          amber1: '#fefdfb',
          amber2: '#fefbe9',
          amber3: '#fff7c2',
          amber4: '#ffee9c',
          amber5: '#fbe577',
          amber6: '#f3d673',
          amber7: '#e9c162',
          amber8: '#e2a336',
          amber9: '#ffc53d',
          amber10: '#ffba18',
          amber11: '#ab6400',
          amber12: '#4f3422',
        },
        t7 = {
          amberA1: '#c0800004',
          amberA2: '#f4d10016',
          amberA3: '#ffde003d',
          amberA4: '#ffd40063',
          amberA5: '#f8cf0088',
          amberA6: '#eab5008c',
          amberA7: '#dc9b009d',
          amberA8: '#da8a00c9',
          amberA9: '#ffb300c2',
          amberA10: '#ffb300e7',
          amberA11: '#ab6400',
          amberA12: '#341500dd',
        },
        t6 = {
          amber1: 'color(display-p3 0.995 0.992 0.985)',
          amber2: 'color(display-p3 0.994 0.986 0.921)',
          amber3: 'color(display-p3 0.994 0.969 0.782)',
          amber4: 'color(display-p3 0.989 0.937 0.65)',
          amber5: 'color(display-p3 0.97 0.902 0.527)',
          amber6: 'color(display-p3 0.936 0.844 0.506)',
          amber7: 'color(display-p3 0.89 0.762 0.443)',
          amber8: 'color(display-p3 0.85 0.65 0.3)',
          amber9: 'color(display-p3 1 0.77 0.26)',
          amber10: 'color(display-p3 0.959 0.741 0.274)',
          amber11: 'color(display-p3 0.64 0.4 0)',
          amber12: 'color(display-p3 0.294 0.208 0.145)',
        },
        ae = {
          amberA1: 'color(display-p3 0.757 0.514 0.024 / 0.016)',
          amberA2: 'color(display-p3 0.902 0.804 0.008 / 0.079)',
          amberA3: 'color(display-p3 0.965 0.859 0.004 / 0.22)',
          amberA4: 'color(display-p3 0.969 0.82 0.004 / 0.35)',
          amberA5: 'color(display-p3 0.933 0.796 0.004 / 0.475)',
          amberA6: 'color(display-p3 0.875 0.682 0.004 / 0.495)',
          amberA7: 'color(display-p3 0.804 0.573 0 / 0.557)',
          amberA8: 'color(display-p3 0.788 0.502 0 / 0.699)',
          amberA9: 'color(display-p3 1 0.686 0 / 0.742)',
          amberA10: 'color(display-p3 0.945 0.643 0 / 0.726)',
          amberA11: 'color(display-p3 0.64 0.4 0)',
          amberA12: 'color(display-p3 0.294 0.208 0.145)',
        },
        ar = {
          orange1: '#fefcfb',
          orange2: '#fff7ed',
          orange3: '#ffefd6',
          orange4: '#ffdfb5',
          orange5: '#ffd19a',
          orange6: '#ffc182',
          orange7: '#f5ae73',
          orange8: '#ec9455',
          orange9: '#f76b15',
          orange10: '#ef5f00',
          orange11: '#cc4e00',
          orange12: '#582d1d',
        },
        at = {
          orangeA1: '#c0400004',
          orangeA2: '#ff8e0012',
          orangeA3: '#ff9c0029',
          orangeA4: '#ff91014a',
          orangeA5: '#ff8b0065',
          orangeA6: '#ff81007d',
          orangeA7: '#ed6c008c',
          orangeA8: '#e35f00aa',
          orangeA9: '#f65e00ea',
          orangeA10: '#ef5f00',
          orangeA11: '#cc4e00',
          orangeA12: '#431200e2',
        },
        aa = {
          orange1: 'color(display-p3 0.995 0.988 0.985)',
          orange2: 'color(display-p3 0.994 0.968 0.934)',
          orange3: 'color(display-p3 0.989 0.938 0.85)',
          orange4: 'color(display-p3 1 0.874 0.687)',
          orange5: 'color(display-p3 1 0.821 0.583)',
          orange6: 'color(display-p3 0.975 0.767 0.545)',
          orange7: 'color(display-p3 0.919 0.693 0.486)',
          orange8: 'color(display-p3 0.877 0.597 0.379)',
          orange9: 'color(display-p3 0.9 0.45 0.2)',
          orange10: 'color(display-p3 0.87 0.409 0.164)',
          orange11: 'color(display-p3 0.76 0.34 0)',
          orange12: 'color(display-p3 0.323 0.185 0.127)',
        },
        ao = {
          orangeA1: 'color(display-p3 0.757 0.267 0.024 / 0.016)',
          orangeA2: 'color(display-p3 0.886 0.533 0.008 / 0.067)',
          orangeA3: 'color(display-p3 0.922 0.584 0.008 / 0.15)',
          orangeA4: 'color(display-p3 1 0.604 0.004 / 0.314)',
          orangeA5: 'color(display-p3 1 0.569 0.004 / 0.416)',
          orangeA6: 'color(display-p3 0.949 0.494 0.004 / 0.455)',
          orangeA7: 'color(display-p3 0.839 0.408 0 / 0.514)',
          orangeA8: 'color(display-p3 0.804 0.349 0 / 0.62)',
          orangeA9: 'color(display-p3 0.878 0.314 0 / 0.8)',
          orangeA10: 'color(display-p3 0.843 0.29 0 / 0.836)',
          orangeA11: 'color(display-p3 0.76 0.34 0)',
          orangeA12: 'color(display-p3 0.323 0.185 0.127)',
        },
        an = {
          blackA1: 'rgba(0, 0, 0, 0.05)',
          blackA2: 'rgba(0, 0, 0, 0.1)',
          blackA3: 'rgba(0, 0, 0, 0.15)',
          blackA4: 'rgba(0, 0, 0, 0.2)',
          blackA5: 'rgba(0, 0, 0, 0.3)',
          blackA6: 'rgba(0, 0, 0, 0.4)',
          blackA7: 'rgba(0, 0, 0, 0.5)',
          blackA8: 'rgba(0, 0, 0, 0.6)',
          blackA9: 'rgba(0, 0, 0, 0.7)',
          blackA10: 'rgba(0, 0, 0, 0.8)',
          blackA11: 'rgba(0, 0, 0, 0.9)',
          blackA12: 'rgba(0, 0, 0, 0.95)',
        },
        al = {
          blackA1: 'color(display-p3 0 0 0 / 0.05)',
          blackA2: 'color(display-p3 0 0 0 / 0.1)',
          blackA3: 'color(display-p3 0 0 0 / 0.15)',
          blackA4: 'color(display-p3 0 0 0 / 0.2)',
          blackA5: 'color(display-p3 0 0 0 / 0.3)',
          blackA6: 'color(display-p3 0 0 0 / 0.4)',
          blackA7: 'color(display-p3 0 0 0 / 0.5)',
          blackA8: 'color(display-p3 0 0 0 / 0.6)',
          blackA9: 'color(display-p3 0 0 0 / 0.7)',
          blackA10: 'color(display-p3 0 0 0 / 0.8)',
          blackA11: 'color(display-p3 0 0 0 / 0.9)',
          blackA12: 'color(display-p3 0 0 0 / 0.95)',
        },
        ai = {
          whiteA1: 'rgba(255, 255, 255, 0.05)',
          whiteA2: 'rgba(255, 255, 255, 0.1)',
          whiteA3: 'rgba(255, 255, 255, 0.15)',
          whiteA4: 'rgba(255, 255, 255, 0.2)',
          whiteA5: 'rgba(255, 255, 255, 0.3)',
          whiteA6: 'rgba(255, 255, 255, 0.4)',
          whiteA7: 'rgba(255, 255, 255, 0.5)',
          whiteA8: 'rgba(255, 255, 255, 0.6)',
          whiteA9: 'rgba(255, 255, 255, 0.7)',
          whiteA10: 'rgba(255, 255, 255, 0.8)',
          whiteA11: 'rgba(255, 255, 255, 0.9)',
          whiteA12: 'rgba(255, 255, 255, 0.95)',
        },
        as = {
          whiteA1: 'color(display-p3 1 1 1 / 0.05)',
          whiteA2: 'color(display-p3 1 1 1 / 0.1)',
          whiteA3: 'color(display-p3 1 1 1 / 0.15)',
          whiteA4: 'color(display-p3 1 1 1 / 0.2)',
          whiteA5: 'color(display-p3 1 1 1 / 0.3)',
          whiteA6: 'color(display-p3 1 1 1 / 0.4)',
          whiteA7: 'color(display-p3 1 1 1 / 0.5)',
          whiteA8: 'color(display-p3 1 1 1 / 0.6)',
          whiteA9: 'color(display-p3 1 1 1 / 0.7)',
          whiteA10: 'color(display-p3 1 1 1 / 0.8)',
          whiteA11: 'color(display-p3 1 1 1 / 0.9)',
          whiteA12: 'color(display-p3 1 1 1 / 0.95)',
        };
    },
    5354: () => {},
    5153: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'createProxy', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let a = t(5951),
        o = a.createClientModuleProxy;
    },
    8730: (e, r, t) => {
      'use strict';
      let { createProxy: a } = t(5153);
      e.exports = a(
        '/workspaces/Resume-Next.js/node_modules/next/dist/client/components/app-router.js',
      );
    },
    1099: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'DraftMode', {
          enumerable: !0,
          get: function () {
            return DraftMode;
          },
        });
      let a = t(3657);
      let DraftMode = class DraftMode {
        get isEnabled() {
          return this._provider.isEnabled;
        }
        enable() {
          if (!(0, a.staticGenerationBailout)('draftMode().enable()'))
            return this._provider.enable();
        }
        disable() {
          if (!(0, a.staticGenerationBailout)('draftMode().disable()'))
            return this._provider.disable();
        }
        constructor(e) {
          this._provider = e;
        }
      };
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    7284: (e, r, t) => {
      'use strict';
      let { createProxy: a } = t(5153);
      e.exports = a(
        '/workspaces/Resume-Next.js/node_modules/next/dist/client/components/error-boundary.js',
      );
    },
    2491: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          headers: function () {
            return headers;
          },
          cookies: function () {
            return cookies;
          },
          draftMode: function () {
            return draftMode;
          },
        });
      let a = t(6888),
        o = t(1306),
        n = t(6449),
        l = t(4580),
        i = t(2934),
        s = t(3657),
        c = t(1099);
      function headers() {
        if (
          (0, s.staticGenerationBailout)('headers', {
            link: 'https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering',
          })
        )
          return o.HeadersAdapter.seal(new Headers({}));
        let e = l.requestAsyncStorage.getStore();
        if (!e)
          throw Error(
            'Invariant: headers() expects to have requestAsyncStorage, none available.',
          );
        return e.headers;
      }
      function cookies() {
        if (
          (0, s.staticGenerationBailout)('cookies', {
            link: 'https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering',
          })
        )
          return a.RequestCookiesAdapter.seal(
            new n.RequestCookies(new Headers({})),
          );
        let e = l.requestAsyncStorage.getStore();
        if (!e)
          throw Error(
            'Invariant: cookies() expects to have requestAsyncStorage, none available.',
          );
        let r = i.actionAsyncStorage.getStore();
        return r && (r.isAction || r.isAppRoute) ? e.mutableCookies : e.cookies;
      }
      function draftMode() {
        let e = l.requestAsyncStorage.getStore();
        if (!e)
          throw Error(
            'Invariant: draftMode() expects to have requestAsyncStorage, none available.',
          );
        return new c.DraftMode(e.draftMode);
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    9195: (e, r) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          DYNAMIC_ERROR_CODE: function () {
            return t;
          },
          DynamicServerError: function () {
            return DynamicServerError;
          },
        });
      let t = 'DYNAMIC_SERVER_USAGE';
      let DynamicServerError = class DynamicServerError extends Error {
        constructor(e) {
          super('Dynamic server usage: ' + e), (this.digest = t);
        }
      };
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    8165: (e, r, t) => {
      'use strict';
      let { createProxy: a } = t(5153);
      e.exports = a(
        '/workspaces/Resume-Next.js/node_modules/next/dist/client/components/layout-router.js',
      );
    },
    2236: (e, r, t) => {
      'use strict';
      function maybePostpone(e, r) {
        if (!e.isStaticGeneration || !e.experimental.ppr) return;
        let a = t(3542);
        'function' == typeof a.unstable_postpone && a.unstable_postpone(r);
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'maybePostpone', {
          enumerable: !0,
          get: function () {
            return maybePostpone;
          },
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    4009: (e, r, t) => {
      'use strict';
      let { createProxy: a } = t(5153);
      e.exports = a(
        '/workspaces/Resume-Next.js/node_modules/next/dist/client/components/not-found-boundary.js',
      );
    },
    9291: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'default', {
          enumerable: !0,
          get: function () {
            return NotFound;
          },
        });
      let a = t(7841),
        o = a._(t(3542)),
        n = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          desc: { display: 'inline-block' },
          h1: {
            display: 'inline-block',
            margin: '0 20px 0 0',
            padding: '0 23px 0 0',
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: 'top',
            lineHeight: '49px',
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: '49px', margin: 0 },
        };
      function NotFound() {
        return o.default.createElement(
          o.default.Fragment,
          null,
          o.default.createElement(
            'title',
            null,
            '404: This page could not be found.',
          ),
          o.default.createElement(
            'div',
            { style: n.error },
            o.default.createElement(
              'div',
              null,
              o.default.createElement('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}',
                },
              }),
              o.default.createElement(
                'h1',
                { className: 'next-error-h1', style: n.h1 },
                '404',
              ),
              o.default.createElement(
                'div',
                { style: n.desc },
                o.default.createElement(
                  'h2',
                  { style: n.h2 },
                  'This page could not be found.',
                ),
              ),
            ),
          ),
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    5676: (e, r, t) => {
      'use strict';
      let { createProxy: a } = t(5153);
      e.exports = a(
        '/workspaces/Resume-Next.js/node_modules/next/dist/client/components/render-from-template-context.js',
      );
    },
    1263: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'createSearchParamsBailoutProxy', {
          enumerable: !0,
          get: function () {
            return createSearchParamsBailoutProxy;
          },
        });
      let a = t(3657);
      function createSearchParamsBailoutProxy() {
        return new Proxy(
          {},
          {
            get(e, r) {
              'string' == typeof r &&
                (0, a.staticGenerationBailout)('searchParams.' + r);
            },
          },
        );
      }
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    3657: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'staticGenerationBailout', {
          enumerable: !0,
          get: function () {
            return staticGenerationBailout;
          },
        });
      let a = t(9195),
        o = t(2236),
        n = t(5869);
      let StaticGenBailoutError = class StaticGenBailoutError extends Error {
        constructor(...e) {
          super(...e), (this.code = 'NEXT_STATIC_GEN_BAILOUT');
        }
      };
      function formatErrorMessage(e, r) {
        let { dynamic: t, link: a } = r || {};
        return (
          'Page' +
          (t ? ' with `dynamic = "' + t + '"`' : '') +
          " couldn't be rendered statically because it used `" +
          e +
          '`.' +
          (a ? ' See more info here: ' + a : '')
        );
      }
      let staticGenerationBailout = (e, r) => {
        let t = n.staticGenerationAsyncStorage.getStore();
        if (!t) return !1;
        if (t.forceStatic) return !0;
        if (t.dynamicShouldError) {
          var l;
          throw new StaticGenBailoutError(
            formatErrorMessage(e, {
              ...r,
              dynamic:
                null != (l = null == r ? void 0 : r.dynamic) ? l : 'error',
            }),
          );
        }
        let i = formatErrorMessage(e, {
          ...r,
          link: 'https://nextjs.org/docs/messages/dynamic-server-error',
        });
        if (
          ((0, o.maybePostpone)(t, i),
          (t.revalidate = 0),
          (null == r ? void 0 : r.dynamic) || (t.staticPrefetchBailout = !0),
          t.isStaticGeneration)
        ) {
          let r = new a.DynamicServerError(i);
          throw (
            ((t.dynamicUsageDescription = e),
            (t.dynamicUsageStack = r.stack),
            r)
          );
        }
        return !1;
      };
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    7701: (e, r, t) => {
      'use strict';
      let { createProxy: a } = t(5153);
      e.exports = a(
        '/workspaces/Resume-Next.js/node_modules/next/dist/client/components/static-generation-searchparams-bailout-provider.js',
      );
    },
    989: (e) => {
      'use strict';
      var r = Object.defineProperty,
        t = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        o = Object.prototype.hasOwnProperty,
        n = {};
      function stringifyCookie(e) {
        var r;
        let t = [
          'path' in e && e.path && `Path=${e.path}`,
          'expires' in e &&
            (e.expires || 0 === e.expires) &&
            `Expires=${('number' == typeof e.expires ? new Date(e.expires) : e.expires).toUTCString()}`,
          'maxAge' in e && 'number' == typeof e.maxAge && `Max-Age=${e.maxAge}`,
          'domain' in e && e.domain && `Domain=${e.domain}`,
          'secure' in e && e.secure && 'Secure',
          'httpOnly' in e && e.httpOnly && 'HttpOnly',
          'sameSite' in e && e.sameSite && `SameSite=${e.sameSite}`,
          'priority' in e && e.priority && `Priority=${e.priority}`,
        ].filter(Boolean);
        return `${e.name}=${encodeURIComponent(null != (r = e.value) ? r : '')}; ${t.join('; ')}`;
      }
      function parseCookie(e) {
        let r = new Map();
        for (let t of e.split(/; */)) {
          if (!t) continue;
          let e = t.indexOf('=');
          if (-1 === e) {
            r.set(t, 'true');
            continue;
          }
          let [a, o] = [t.slice(0, e), t.slice(e + 1)];
          try {
            r.set(a, decodeURIComponent(null != o ? o : 'true'));
          } catch {}
        }
        return r;
      }
      function parseSetCookie(e) {
        if (!e) return;
        let [[r, t], ...a] = parseCookie(e),
          {
            domain: o,
            expires: n,
            httponly: l,
            maxage: i,
            path: s,
            samesite: c,
            secure: d,
            priority: p,
          } = Object.fromEntries(a.map(([e, r]) => [e.toLowerCase(), r])),
          u = {
            name: r,
            value: decodeURIComponent(t),
            domain: o,
            ...(n && { expires: new Date(n) }),
            ...(l && { httpOnly: !0 }),
            ...('string' == typeof i && { maxAge: Number(i) }),
            path: s,
            ...(c && { sameSite: parseSameSite(c) }),
            ...(d && { secure: !0 }),
            ...(p && { priority: parsePriority(p) }),
          };
        return compact(u);
      }
      function compact(e) {
        let r = {};
        for (let t in e) e[t] && (r[t] = e[t]);
        return r;
      }
      ((e, t) => {
        for (var a in t) r(e, a, { get: t[a], enumerable: !0 });
      })(n, {
        RequestCookies: () => s,
        ResponseCookies: () => c,
        parseCookie: () => parseCookie,
        parseSetCookie: () => parseSetCookie,
        stringifyCookie: () => stringifyCookie,
      }),
        (e.exports = ((e, n, l, i) => {
          if ((n && 'object' == typeof n) || 'function' == typeof n)
            for (let l of a(n))
              o.call(e, l) ||
                void 0 === l ||
                r(e, l, {
                  get: () => n[l],
                  enumerable: !(i = t(n, l)) || i.enumerable,
                });
          return e;
        })(r({}, '__esModule', { value: !0 }), n));
      var l = ['strict', 'lax', 'none'];
      function parseSameSite(e) {
        return (e = e.toLowerCase()), l.includes(e) ? e : void 0;
      }
      var i = ['low', 'medium', 'high'];
      function parsePriority(e) {
        return (e = e.toLowerCase()), i.includes(e) ? e : void 0;
      }
      function splitCookiesString(e) {
        if (!e) return [];
        var r,
          t,
          a,
          o,
          n,
          l = [],
          i = 0;
        function skipWhitespace() {
          for (; i < e.length && /\s/.test(e.charAt(i)); ) i += 1;
          return i < e.length;
        }
        function notSpecialChar() {
          return '=' !== (t = e.charAt(i)) && ';' !== t && ',' !== t;
        }
        for (; i < e.length; ) {
          for (r = i, n = !1; skipWhitespace(); )
            if (',' === (t = e.charAt(i))) {
              for (
                a = i, i += 1, skipWhitespace(), o = i;
                i < e.length && notSpecialChar();

              )
                i += 1;
              i < e.length && '=' === e.charAt(i)
                ? ((n = !0), (i = o), l.push(e.substring(r, a)), (r = i))
                : (i = a + 1);
            } else i += 1;
          (!n || i >= e.length) && l.push(e.substring(r, e.length));
        }
        return l;
      }
      var s = class {
          constructor(e) {
            (this._parsed = new Map()), (this._headers = e);
            let r = e.get('cookie');
            if (r) {
              let e = parseCookie(r);
              for (let [r, t] of e) this._parsed.set(r, { name: r, value: t });
            }
          }
          [Symbol.iterator]() {
            return this._parsed[Symbol.iterator]();
          }
          get size() {
            return this._parsed.size;
          }
          get(...e) {
            let r = 'string' == typeof e[0] ? e[0] : e[0].name;
            return this._parsed.get(r);
          }
          getAll(...e) {
            var r;
            let t = Array.from(this._parsed);
            if (!e.length) return t.map(([e, r]) => r);
            let a =
              'string' == typeof e[0]
                ? e[0]
                : null == (r = e[0])
                  ? void 0
                  : r.name;
            return t.filter(([e]) => e === a).map(([e, r]) => r);
          }
          has(e) {
            return this._parsed.has(e);
          }
          set(...e) {
            let [r, t] = 1 === e.length ? [e[0].name, e[0].value] : e,
              a = this._parsed;
            return (
              a.set(r, { name: r, value: t }),
              this._headers.set(
                'cookie',
                Array.from(a)
                  .map(([e, r]) => stringifyCookie(r))
                  .join('; '),
              ),
              this
            );
          }
          delete(e) {
            let r = this._parsed,
              t = Array.isArray(e) ? e.map((e) => r.delete(e)) : r.delete(e);
            return (
              this._headers.set(
                'cookie',
                Array.from(r)
                  .map(([e, r]) => stringifyCookie(r))
                  .join('; '),
              ),
              t
            );
          }
          clear() {
            return this.delete(Array.from(this._parsed.keys())), this;
          }
          [Symbol.for('edge-runtime.inspect.custom')]() {
            return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
          }
          toString() {
            return [...this._parsed.values()]
              .map((e) => `${e.name}=${encodeURIComponent(e.value)}`)
              .join('; ');
          }
        },
        c = class {
          constructor(e) {
            var r, t, a;
            (this._parsed = new Map()), (this._headers = e);
            let o =
                null !=
                (a =
                  null !=
                  (t = null == (r = e.getSetCookie) ? void 0 : r.call(e))
                    ? t
                    : e.get('set-cookie'))
                  ? a
                  : [],
              n = Array.isArray(o) ? o : splitCookiesString(o);
            for (let e of n) {
              let r = parseSetCookie(e);
              r && this._parsed.set(r.name, r);
            }
          }
          get(...e) {
            let r = 'string' == typeof e[0] ? e[0] : e[0].name;
            return this._parsed.get(r);
          }
          getAll(...e) {
            var r;
            let t = Array.from(this._parsed.values());
            if (!e.length) return t;
            let a =
              'string' == typeof e[0]
                ? e[0]
                : null == (r = e[0])
                  ? void 0
                  : r.name;
            return t.filter((e) => e.name === a);
          }
          has(e) {
            return this._parsed.has(e);
          }
          set(...e) {
            let [r, t, a] = 1 === e.length ? [e[0].name, e[0].value, e[0]] : e,
              o = this._parsed;
            return (
              o.set(r, normalizeCookie({ name: r, value: t, ...a })),
              replace(o, this._headers),
              this
            );
          }
          delete(...e) {
            let [r, t, a] =
              'string' == typeof e[0]
                ? [e[0]]
                : [e[0].name, e[0].path, e[0].domain];
            return this.set({
              name: r,
              path: t,
              domain: a,
              value: '',
              expires: new Date(0),
            });
          }
          [Symbol.for('edge-runtime.inspect.custom')]() {
            return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
          }
          toString() {
            return [...this._parsed.values()].map(stringifyCookie).join('; ');
          }
        };
      function replace(e, r) {
        for (let [, t] of (r.delete('set-cookie'), e)) {
          let e = stringifyCookie(t);
          r.append('set-cookie', e);
        }
      }
      function normalizeCookie(e = { name: '', value: '' }) {
        return (
          'number' == typeof e.expires && (e.expires = new Date(e.expires)),
          e.maxAge && (e.expires = new Date(Date.now() + 1e3 * e.maxAge)),
          (null === e.path || void 0 === e.path) && (e.path = '/'),
          e
        );
      }
    },
    2564: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          renderToReadableStream: function () {
            return a.renderToReadableStream;
          },
          decodeReply: function () {
            return a.decodeReply;
          },
          decodeAction: function () {
            return a.decodeAction;
          },
          decodeFormState: function () {
            return a.decodeFormState;
          },
          AppRouter: function () {
            return o.default;
          },
          LayoutRouter: function () {
            return n.default;
          },
          RenderFromTemplateContext: function () {
            return l.default;
          },
          staticGenerationAsyncStorage: function () {
            return i.staticGenerationAsyncStorage;
          },
          requestAsyncStorage: function () {
            return s.requestAsyncStorage;
          },
          actionAsyncStorage: function () {
            return c.actionAsyncStorage;
          },
          staticGenerationBailout: function () {
            return d.staticGenerationBailout;
          },
          createSearchParamsBailoutProxy: function () {
            return u.createSearchParamsBailoutProxy;
          },
          serverHooks: function () {
            return f;
          },
          preloadStyle: function () {
            return y.preloadStyle;
          },
          preloadFont: function () {
            return y.preloadFont;
          },
          preconnect: function () {
            return y.preconnect;
          },
          taintObjectReference: function () {
            return b.taintObjectReference;
          },
          StaticGenerationSearchParamsBailoutProvider: function () {
            return p.default;
          },
          NotFoundBoundary: function () {
            return m;
          },
        });
      let a = t(5951),
        o = _interop_require_default(t(8730)),
        n = _interop_require_default(t(8165)),
        l = _interop_require_default(t(5676)),
        i = t(5869),
        s = t(4580),
        c = t(2934),
        d = t(3657),
        p = _interop_require_default(t(7701)),
        u = t(1263),
        f = _interop_require_wildcard(t(9195)),
        y = t(8483),
        b = t(3369);
      function _interop_require_default(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function _getRequireWildcardCache(e) {
        if ('function' != typeof WeakMap) return null;
        var r = new WeakMap(),
          t = new WeakMap();
        return (_getRequireWildcardCache = function (e) {
          return e ? t : r;
        })(e);
      }
      function _interop_require_wildcard(e, r) {
        if (!r && e && e.__esModule) return e;
        if (null === e || ('object' != typeof e && 'function' != typeof e))
          return { default: e };
        var t = _getRequireWildcardCache(r);
        if (t && t.has(e)) return t.get(e);
        var a = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if ('default' !== n && Object.prototype.hasOwnProperty.call(e, n)) {
            var l = o ? Object.getOwnPropertyDescriptor(e, n) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(a, n, l)
              : (a[n] = e[n]);
          }
        return (a.default = e), t && t.set(e, a), a;
      }
      let { NotFoundBoundary: m } = t(4009);
    },
    8483: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          preloadStyle: function () {
            return preloadStyle;
          },
          preloadFont: function () {
            return preloadFont;
          },
          preconnect: function () {
            return preconnect;
          },
        });
      let a = _interop_require_default(t(8337));
      function _interop_require_default(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function preloadStyle(e, r) {
        let t = { as: 'style' };
        'string' == typeof r && (t.crossOrigin = r), a.default.preload(e, t);
      }
      function preloadFont(e, r, t) {
        let o = { as: 'font', type: r };
        'string' == typeof t && (o.crossOrigin = t), a.default.preload(e, o);
      }
      function preconnect(e, r) {
        a.default.preconnect(
          e,
          'string' == typeof r ? { crossOrigin: r } : void 0,
        );
      }
    },
    3369: (e, r, t) => {
      'use strict';
      function notImplemented() {
        throw Error('Taint can only be used with the taint flag.');
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          taintObjectReference: function () {
            return a;
          },
          taintUniqueValue: function () {
            return o;
          },
        }),
        t(3542);
      let a = notImplemented,
        o = notImplemented;
    },
    8337: (e, r, t) => {
      'use strict';
      e.exports = t(7096).vendored['react-rsc'].ReactDOM;
    },
    4656: (e, r, t) => {
      'use strict';
      e.exports = t(7096).vendored['react-rsc'].ReactJsxRuntime;
    },
    5951: (e, r, t) => {
      'use strict';
      e.exports = t(7096).vendored['react-rsc'].ReactServerDOMWebpackServerEdge;
    },
    3542: (e, r, t) => {
      'use strict';
      e.exports = t(7096).vendored['react-rsc'].React;
    },
    1306: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          ReadonlyHeadersError: function () {
            return ReadonlyHeadersError;
          },
          HeadersAdapter: function () {
            return HeadersAdapter;
          },
        });
      let a = t(9165);
      let ReadonlyHeadersError = class ReadonlyHeadersError extends Error {
        constructor() {
          super(
            'Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers',
          );
        }
        static callable() {
          throw new ReadonlyHeadersError();
        }
      };
      let HeadersAdapter = class HeadersAdapter extends Headers {
        constructor(e) {
          super(),
            (this.headers = new Proxy(e, {
              get(r, t, o) {
                if ('symbol' == typeof t) return a.ReflectAdapter.get(r, t, o);
                let n = t.toLowerCase(),
                  l = Object.keys(e).find((e) => e.toLowerCase() === n);
                if (void 0 !== l) return a.ReflectAdapter.get(r, l, o);
              },
              set(r, t, o, n) {
                if ('symbol' == typeof t)
                  return a.ReflectAdapter.set(r, t, o, n);
                let l = t.toLowerCase(),
                  i = Object.keys(e).find((e) => e.toLowerCase() === l);
                return a.ReflectAdapter.set(r, i ?? t, o, n);
              },
              has(r, t) {
                if ('symbol' == typeof t) return a.ReflectAdapter.has(r, t);
                let o = t.toLowerCase(),
                  n = Object.keys(e).find((e) => e.toLowerCase() === o);
                return void 0 !== n && a.ReflectAdapter.has(r, n);
              },
              deleteProperty(r, t) {
                if ('symbol' == typeof t)
                  return a.ReflectAdapter.deleteProperty(r, t);
                let o = t.toLowerCase(),
                  n = Object.keys(e).find((e) => e.toLowerCase() === o);
                return void 0 === n || a.ReflectAdapter.deleteProperty(r, n);
              },
            }));
        }
        static seal(e) {
          return new Proxy(e, {
            get(e, r, t) {
              switch (r) {
                case 'append':
                case 'delete':
                case 'set':
                  return ReadonlyHeadersError.callable;
                default:
                  return a.ReflectAdapter.get(e, r, t);
              }
            },
          });
        }
        merge(e) {
          return Array.isArray(e) ? e.join(', ') : e;
        }
        static from(e) {
          return e instanceof Headers ? e : new HeadersAdapter(e);
        }
        append(e, r) {
          let t = this.headers[e];
          'string' == typeof t
            ? (this.headers[e] = [t, r])
            : Array.isArray(t)
              ? t.push(r)
              : (this.headers[e] = r);
        }
        delete(e) {
          delete this.headers[e];
        }
        get(e) {
          let r = this.headers[e];
          return void 0 !== r ? this.merge(r) : null;
        }
        has(e) {
          return void 0 !== this.headers[e];
        }
        set(e, r) {
          this.headers[e] = r;
        }
        forEach(e, r) {
          for (let [t, a] of this.entries()) e.call(r, a, t, this);
        }
        *entries() {
          for (let e of Object.keys(this.headers)) {
            let r = e.toLowerCase(),
              t = this.get(r);
            yield [r, t];
          }
        }
        *keys() {
          for (let e of Object.keys(this.headers)) {
            let r = e.toLowerCase();
            yield r;
          }
        }
        *values() {
          for (let e of Object.keys(this.headers)) {
            let r = this.get(e);
            yield r;
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      };
    },
    9165: (e, r) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'ReflectAdapter', {
          enumerable: !0,
          get: function () {
            return ReflectAdapter;
          },
        });
      let ReflectAdapter = class ReflectAdapter {
        static get(e, r, t) {
          let a = Reflect.get(e, r, t);
          return 'function' == typeof a ? a.bind(e) : a;
        }
        static set(e, r, t, a) {
          return Reflect.set(e, r, t, a);
        }
        static has(e, r) {
          return Reflect.has(e, r);
        }
        static deleteProperty(e, r) {
          return Reflect.deleteProperty(e, r);
        }
      };
    },
    6888: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          ReadonlyRequestCookiesError: function () {
            return ReadonlyRequestCookiesError;
          },
          RequestCookiesAdapter: function () {
            return RequestCookiesAdapter;
          },
          getModifiedCookieValues: function () {
            return getModifiedCookieValues;
          },
          appendMutableCookies: function () {
            return appendMutableCookies;
          },
          MutableRequestCookiesAdapter: function () {
            return MutableRequestCookiesAdapter;
          },
        });
      let a = t(6449),
        o = t(9165);
      let ReadonlyRequestCookiesError = class ReadonlyRequestCookiesError extends Error {
        constructor() {
          super(
            'Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options',
          );
        }
        static callable() {
          throw new ReadonlyRequestCookiesError();
        }
      };
      let RequestCookiesAdapter = class RequestCookiesAdapter {
        static seal(e) {
          return new Proxy(e, {
            get(e, r, t) {
              switch (r) {
                case 'clear':
                case 'delete':
                case 'set':
                  return ReadonlyRequestCookiesError.callable;
                default:
                  return o.ReflectAdapter.get(e, r, t);
              }
            },
          });
        }
      };
      let n = Symbol.for('next.mutated.cookies');
      function getModifiedCookieValues(e) {
        let r = e[n];
        return r && Array.isArray(r) && 0 !== r.length ? r : [];
      }
      function appendMutableCookies(e, r) {
        let t = getModifiedCookieValues(r);
        if (0 === t.length) return !1;
        let o = new a.ResponseCookies(e),
          n = o.getAll();
        for (let e of t) o.set(e);
        for (let e of n) o.set(e);
        return !0;
      }
      let MutableRequestCookiesAdapter = class MutableRequestCookiesAdapter {
        static wrap(e, r) {
          let t = new a.ResponseCookies(new Headers());
          for (let r of e.getAll()) t.set(r);
          let l = [],
            i = new Set(),
            updateResponseCookies = () => {
              var e;
              let o =
                null == fetch.__nextGetStaticStore
                  ? void 0
                  : null == (e = fetch.__nextGetStaticStore.call(fetch))
                    ? void 0
                    : e.getStore();
              o && (o.pathWasRevalidated = !0);
              let n = t.getAll();
              if (((l = n.filter((e) => i.has(e.name))), r)) {
                let e = [];
                for (let r of l) {
                  let t = new a.ResponseCookies(new Headers());
                  t.set(r), e.push(t.toString());
                }
                r(e);
              }
            };
          return new Proxy(t, {
            get(e, r, t) {
              switch (r) {
                case n:
                  return l;
                case 'delete':
                  return function (...r) {
                    i.add('string' == typeof r[0] ? r[0] : r[0].name);
                    try {
                      e.delete(...r);
                    } finally {
                      updateResponseCookies();
                    }
                  };
                case 'set':
                  return function (...r) {
                    i.add('string' == typeof r[0] ? r[0] : r[0].name);
                    try {
                      return e.set(...r);
                    } finally {
                      updateResponseCookies();
                    }
                  };
                default:
                  return o.ReflectAdapter.get(e, r, t);
              }
            },
          });
        }
      };
    },
    6449: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          RequestCookies: function () {
            return a.RequestCookies;
          },
          ResponseCookies: function () {
            return a.ResponseCookies;
          },
        });
      let a = t(989);
    },
    4596: (e, r, t) => {
      'use strict';
      e.exports = t(2491);
    },
    7841: (e, r, t) => {
      'use strict';
      function _interop_require_default(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.r(r),
        t.d(r, {
          _: () => _interop_require_default,
          _interop_require_default: () => _interop_require_default,
        });
    },
    5287: (e, r, t) => {
      'use strict';
      function createClassUtils(e) {
        let r = createClassMap(e),
          { conflictingClassGroups: t, conflictingClassGroupModifiers: a } = e;
        return {
          getClassGroupId: function (e) {
            let t = e.split('-');
            return (
              '' === t[0] && 1 !== t.length && t.shift(),
              getGroupRecursive(t, r) || getGroupIdForArbitraryProperty(e)
            );
          },
          getConflictingClassGroupIds: function (e, r) {
            let o = t[e] || [];
            return r && a[e] ? [...o, ...a[e]] : o;
          },
        };
      }
      function getGroupRecursive(e, r) {
        if (0 === e.length) return r.classGroupId;
        let t = e[0],
          a = r.nextPart.get(t),
          o = a ? getGroupRecursive(e.slice(1), a) : void 0;
        if (o) return o;
        if (0 === r.validators.length) return;
        let n = e.join('-');
        return r.validators.find(({ validator: e }) => e(n))?.classGroupId;
      }
      t.d(r, { m6: () => b });
      let a = /^\[(.+)\]$/;
      function getGroupIdForArbitraryProperty(e) {
        if (a.test(e)) {
          let r = a.exec(e)[1],
            t = r?.substring(0, r.indexOf(':'));
          if (t) return 'arbitrary..' + t;
        }
      }
      function createClassMap(e) {
        let { theme: r, prefix: t } = e,
          a = { nextPart: new Map(), validators: [] },
          o = getPrefixedClassGroupEntries(Object.entries(e.classGroups), t);
        return (
          o.forEach(([e, t]) => {
            processClassesRecursively(t, a, e, r);
          }),
          a
        );
      }
      function processClassesRecursively(e, r, t, a) {
        e.forEach((e) => {
          if ('string' == typeof e) {
            let a = '' === e ? r : getPart(r, e);
            a.classGroupId = t;
            return;
          }
          if ('function' == typeof e) {
            if (isThemeGetter(e)) {
              processClassesRecursively(e(a), r, t, a);
              return;
            }
            r.validators.push({ validator: e, classGroupId: t });
            return;
          }
          Object.entries(e).forEach(([e, o]) => {
            processClassesRecursively(o, getPart(r, e), t, a);
          });
        });
      }
      function getPart(e, r) {
        let t = e;
        return (
          r.split('-').forEach((e) => {
            t.nextPart.has(e) ||
              t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (t = t.nextPart.get(e));
          }),
          t
        );
      }
      function isThemeGetter(e) {
        return e.isThemeGetter;
      }
      function getPrefixedClassGroupEntries(e, r) {
        return r
          ? e.map(([e, t]) => {
              let a = t.map((e) =>
                'string' == typeof e
                  ? r + e
                  : 'object' == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, t]) => [r + e, t]),
                      )
                    : e,
              );
              return [e, a];
            })
          : e;
      }
      function createLruCache(e) {
        if (e < 1) return { get: () => void 0, set: () => {} };
        let r = 0,
          t = new Map(),
          a = new Map();
        function update(o, n) {
          t.set(o, n), ++r > e && ((r = 0), (a = t), (t = new Map()));
        }
        return {
          get(e) {
            let r = t.get(e);
            return void 0 !== r
              ? r
              : void 0 !== (r = a.get(e))
                ? (update(e, r), r)
                : void 0;
          },
          set(e, r) {
            t.has(e) ? t.set(e, r) : update(e, r);
          },
        };
      }
      function createSplitModifiers(e) {
        let r = e.separator,
          t = 1 === r.length,
          a = r[0],
          o = r.length;
        return function (e) {
          let n;
          let l = [],
            i = 0,
            s = 0;
          for (let c = 0; c < e.length; c++) {
            let d = e[c];
            if (0 === i) {
              if (d === a && (t || e.slice(c, c + o) === r)) {
                l.push(e.slice(s, c)), (s = c + o);
                continue;
              }
              if ('/' === d) {
                n = c;
                continue;
              }
            }
            '[' === d ? i++ : ']' === d && i--;
          }
          let c = 0 === l.length ? e : e.substring(s),
            d = c.startsWith('!'),
            p = d ? c.substring(1) : c,
            u = n && n > s ? n - s : void 0;
          return {
            modifiers: l,
            hasImportantModifier: d,
            baseClassName: p,
            maybePostfixModifierPosition: u,
          };
        };
      }
      function sortModifiers(e) {
        if (e.length <= 1) return e;
        let r = [],
          t = [];
        return (
          e.forEach((e) => {
            let a = '[' === e[0];
            a ? (r.push(...t.sort(), e), (t = [])) : t.push(e);
          }),
          r.push(...t.sort()),
          r
        );
      }
      function createConfigUtils(e) {
        return {
          cache: createLruCache(e.cacheSize),
          splitModifiers: createSplitModifiers(e),
          ...createClassUtils(e),
        };
      }
      let o = /\s+/;
      function mergeClassList(e, r) {
        let {
            splitModifiers: t,
            getClassGroupId: a,
            getConflictingClassGroupIds: n,
          } = r,
          l = new Set();
        return e
          .trim()
          .split(o)
          .map((e) => {
            let {
                modifiers: r,
                hasImportantModifier: o,
                baseClassName: n,
                maybePostfixModifierPosition: l,
              } = t(e),
              i = a(l ? n.substring(0, l) : n),
              s = !!l;
            if (!i) {
              if (!l || !(i = a(n)))
                return { isTailwindClass: !1, originalClassName: e };
              s = !1;
            }
            let c = sortModifiers(r).join(':');
            return {
              isTailwindClass: !0,
              modifierId: o ? c + '!' : c,
              classGroupId: i,
              originalClassName: e,
              hasPostfixModifier: s,
            };
          })
          .reverse()
          .filter((e) => {
            if (!e.isTailwindClass) return !0;
            let { modifierId: r, classGroupId: t, hasPostfixModifier: a } = e,
              o = r + t;
            return (
              !l.has(o) && (l.add(o), n(t, a).forEach((e) => l.add(r + e)), !0)
            );
          })
          .reverse()
          .map((e) => e.originalClassName)
          .join(' ');
      }
      function twJoin() {
        let e,
          r,
          t = 0,
          a = '';
        for (; t < arguments.length; )
          (e = arguments[t++]) &&
            (r = toValue(e)) &&
            (a && (a += ' '), (a += r));
        return a;
      }
      function toValue(e) {
        let r;
        if ('string' == typeof e) return e;
        let t = '';
        for (let a = 0; a < e.length; a++)
          e[a] && (r = toValue(e[a])) && (t && (t += ' '), (t += r));
        return t;
      }
      function createTailwindMerge(e, ...r) {
        let t, a, o;
        let n = initTailwindMerge;
        function initTailwindMerge(l) {
          let i = r.reduce((e, r) => r(e), e());
          return (
            (a = (t = createConfigUtils(i)).cache.get),
            (o = t.cache.set),
            (n = tailwindMerge),
            tailwindMerge(l)
          );
        }
        function tailwindMerge(e) {
          let r = a(e);
          if (r) return r;
          let n = mergeClassList(e, t);
          return o(e, n), n;
        }
        return function () {
          return n(twJoin.apply(null, arguments));
        };
      }
      function fromTheme(e) {
        let themeGetter = (r) => r[e] || [];
        return (themeGetter.isThemeGetter = !0), themeGetter;
      }
      let n = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        l = /^\d+\/\d+$/,
        i = new Set(['px', 'full', 'screen']),
        s = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        c =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        d = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        u =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function isLength(e) {
        return isNumber(e) || i.has(e) || l.test(e);
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
        return n.test(e);
      }
      function isTshirtSize(e) {
        return s.test(e);
      }
      let f = new Set(['length', 'size', 'percentage']);
      function isArbitrarySize(e) {
        return getIsArbitraryValue(e, f, isNever);
      }
      function isArbitraryPosition(e) {
        return getIsArbitraryValue(e, 'position', isNever);
      }
      let y = new Set(['image', 'url']);
      function isArbitraryImage(e) {
        return getIsArbitraryValue(e, y, isImage);
      }
      function isArbitraryShadow(e) {
        return getIsArbitraryValue(e, '', isShadow);
      }
      function isAny() {
        return !0;
      }
      function getIsArbitraryValue(e, r, t) {
        let a = n.exec(e);
        return (
          !!a &&
          (a[1] ? ('string' == typeof r ? a[1] === r : r.has(a[1])) : t(a[2]))
        );
      }
      function isLengthOnly(e) {
        return c.test(e) && !d.test(e);
      }
      function isNever() {
        return !1;
      }
      function isShadow(e) {
        return p.test(e);
      }
      function isImage(e) {
        return u.test(e);
      }
      function getDefaultConfig() {
        let e = fromTheme('colors'),
          r = fromTheme('spacing'),
          t = fromTheme('blur'),
          a = fromTheme('brightness'),
          o = fromTheme('borderColor'),
          n = fromTheme('borderRadius'),
          l = fromTheme('borderSpacing'),
          i = fromTheme('borderWidth'),
          s = fromTheme('contrast'),
          c = fromTheme('grayscale'),
          d = fromTheme('hueRotate'),
          p = fromTheme('invert'),
          u = fromTheme('gap'),
          f = fromTheme('gradientColorStops'),
          y = fromTheme('gradientColorStopPositions'),
          b = fromTheme('inset'),
          m = fromTheme('margin'),
          g = fromTheme('opacity'),
          A = fromTheme('padding'),
          h = fromTheme('saturate'),
          v = fromTheme('scale'),
          _ = fromTheme('sepia'),
          P = fromTheme('skew'),
          w = fromTheme('space'),
          k = fromTheme('translate'),
          getOverscroll = () => ['auto', 'contain', 'none'],
          getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
          getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, r],
          getSpacingWithArbitrary = () => [isArbitraryValue, r],
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
            inset: [{ inset: [b] }],
            'inset-x': [{ 'inset-x': [b] }],
            'inset-y': [{ 'inset-y': [b] }],
            start: [{ start: [b] }],
            end: [{ end: [b] }],
            top: [{ top: [b] }],
            right: [{ right: [b] }],
            bottom: [{ bottom: [b] }],
            left: [{ left: [b] }],
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
            gap: [{ gap: [u] }],
            'gap-x': [{ 'gap-x': [u] }],
            'gap-y': [{ 'gap-y': [u] }],
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
            p: [{ p: [A] }],
            px: [{ px: [A] }],
            py: [{ py: [A] }],
            ps: [{ ps: [A] }],
            pe: [{ pe: [A] }],
            pt: [{ pt: [A] }],
            pr: [{ pr: [A] }],
            pb: [{ pb: [A] }],
            pl: [{ pl: [A] }],
            m: [{ m: [m] }],
            mx: [{ mx: [m] }],
            my: [{ my: [m] }],
            ms: [{ ms: [m] }],
            me: [{ me: [m] }],
            mt: [{ mt: [m] }],
            mr: [{ mr: [m] }],
            mb: [{ mb: [m] }],
            ml: [{ ml: [m] }],
            'space-x': [{ 'space-x': [w] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [w] }],
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
                  r,
                ],
              },
            ],
            'min-w': [{ 'min-w': [isArbitraryValue, r, 'min', 'max', 'fit'] }],
            'max-w': [
              {
                'max-w': [
                  isArbitraryValue,
                  r,
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
                  r,
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
                  r,
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
                  r,
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
              { size: [isArbitraryValue, r, 'auto', 'min', 'max', 'fit'] },
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
            'placeholder-opacity': [{ 'placeholder-opacity': [g] }],
            'text-alignment': [
              { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
            ],
            'text-color': [{ text: [e] }],
            'text-opacity': [{ 'text-opacity': [g] }],
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
            'bg-opacity': [{ 'bg-opacity': [g] }],
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
            'gradient-from-pos': [{ from: [y] }],
            'gradient-via-pos': [{ via: [y] }],
            'gradient-to-pos': [{ to: [y] }],
            'gradient-from': [{ from: [f] }],
            'gradient-via': [{ via: [f] }],
            'gradient-to': [{ to: [f] }],
            rounded: [{ rounded: [n] }],
            'rounded-s': [{ 'rounded-s': [n] }],
            'rounded-e': [{ 'rounded-e': [n] }],
            'rounded-t': [{ 'rounded-t': [n] }],
            'rounded-r': [{ 'rounded-r': [n] }],
            'rounded-b': [{ 'rounded-b': [n] }],
            'rounded-l': [{ 'rounded-l': [n] }],
            'rounded-ss': [{ 'rounded-ss': [n] }],
            'rounded-se': [{ 'rounded-se': [n] }],
            'rounded-ee': [{ 'rounded-ee': [n] }],
            'rounded-es': [{ 'rounded-es': [n] }],
            'rounded-tl': [{ 'rounded-tl': [n] }],
            'rounded-tr': [{ 'rounded-tr': [n] }],
            'rounded-br': [{ 'rounded-br': [n] }],
            'rounded-bl': [{ 'rounded-bl': [n] }],
            'border-w': [{ border: [i] }],
            'border-w-x': [{ 'border-x': [i] }],
            'border-w-y': [{ 'border-y': [i] }],
            'border-w-s': [{ 'border-s': [i] }],
            'border-w-e': [{ 'border-e': [i] }],
            'border-w-t': [{ 'border-t': [i] }],
            'border-w-r': [{ 'border-r': [i] }],
            'border-w-b': [{ 'border-b': [i] }],
            'border-w-l': [{ 'border-l': [i] }],
            'border-opacity': [{ 'border-opacity': [g] }],
            'border-style': [{ border: [...getLineStyles(), 'hidden'] }],
            'divide-x': [{ 'divide-x': [i] }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': [i] }],
            'divide-y-reverse': ['divide-y-reverse'],
            'divide-opacity': [{ 'divide-opacity': [g] }],
            'divide-style': [{ divide: getLineStyles() }],
            'border-color': [{ border: [o] }],
            'border-color-x': [{ 'border-x': [o] }],
            'border-color-y': [{ 'border-y': [o] }],
            'border-color-t': [{ 'border-t': [o] }],
            'border-color-r': [{ 'border-r': [o] }],
            'border-color-b': [{ 'border-b': [o] }],
            'border-color-l': [{ 'border-l': [o] }],
            'divide-color': [{ divide: [o] }],
            'outline-style': [{ outline: ['', ...getLineStyles()] }],
            'outline-offset': [
              { 'outline-offset': [isLength, isArbitraryValue] },
            ],
            'outline-w': [{ outline: [isLength, isArbitraryLength] }],
            'outline-color': [{ outline: [e] }],
            'ring-w': [{ ring: getLengthWithEmptyAndArbitrary() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: [e] }],
            'ring-opacity': [{ 'ring-opacity': [g] }],
            'ring-offset-w': [{ 'ring-offset': [isLength, isArbitraryLength] }],
            'ring-offset-color': [{ 'ring-offset': [e] }],
            shadow: [
              {
                shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow],
              },
            ],
            'shadow-color': [{ shadow: [isAny] }],
            opacity: [{ opacity: [g] }],
            'mix-blend': [{ 'mix-blend': getBlendModes() }],
            'bg-blend': [{ 'bg-blend': getBlendModes() }],
            filter: [{ filter: ['', 'none'] }],
            blur: [{ blur: [t] }],
            brightness: [{ brightness: [a] }],
            contrast: [{ contrast: [s] }],
            'drop-shadow': [
              { 'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue] },
            ],
            grayscale: [{ grayscale: [c] }],
            'hue-rotate': [{ 'hue-rotate': [d] }],
            invert: [{ invert: [p] }],
            saturate: [{ saturate: [h] }],
            sepia: [{ sepia: [_] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [t] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [a] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [s] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [c] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [d] }],
            'backdrop-invert': [{ 'backdrop-invert': [p] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [g] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [h] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [_] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'border-spacing': [{ 'border-spacing': [l] }],
            'border-spacing-x': [{ 'border-spacing-x': [l] }],
            'border-spacing-y': [{ 'border-spacing-y': [l] }],
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
            scale: [{ scale: [v] }],
            'scale-x': [{ 'scale-x': [v] }],
            'scale-y': [{ 'scale-y': [v] }],
            rotate: [{ rotate: [isInteger, isArbitraryValue] }],
            'translate-x': [{ 'translate-x': [k] }],
            'translate-y': [{ 'translate-y': [k] }],
            'skew-x': [{ 'skew-x': [P] }],
            'skew-y': [{ 'skew-y': [P] }],
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
      function overrideProperty(e, r, t) {
        void 0 !== t && (e[r] = t);
      }
      Symbol.toStringTag;
      let b = createTailwindMerge(getDefaultConfig);
    },
    9175: () => {},
    5082: (e, r) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          NEXT_QUERY_PARAM_PREFIX: function () {
            return t;
          },
          PRERENDER_REVALIDATE_HEADER: function () {
            return a;
          },
          PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
            return o;
          },
          NEXT_DID_POSTPONE_HEADER: function () {
            return n;
          },
          NEXT_CACHE_TAGS_HEADER: function () {
            return l;
          },
          NEXT_CACHE_SOFT_TAGS_HEADER: function () {
            return i;
          },
          NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
            return s;
          },
          NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
            return c;
          },
          NEXT_CACHE_TAG_MAX_LENGTH: function () {
            return d;
          },
          NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
            return p;
          },
          NEXT_CACHE_IMPLICIT_TAG_ID: function () {
            return u;
          },
          CACHE_ONE_YEAR: function () {
            return f;
          },
          MIDDLEWARE_FILENAME: function () {
            return y;
          },
          MIDDLEWARE_LOCATION_REGEXP: function () {
            return b;
          },
          INSTRUMENTATION_HOOK_FILENAME: function () {
            return m;
          },
          PAGES_DIR_ALIAS: function () {
            return g;
          },
          DOT_NEXT_ALIAS: function () {
            return A;
          },
          ROOT_DIR_ALIAS: function () {
            return h;
          },
          APP_DIR_ALIAS: function () {
            return v;
          },
          RSC_MOD_REF_PROXY_ALIAS: function () {
            return _;
          },
          RSC_ACTION_VALIDATE_ALIAS: function () {
            return P;
          },
          RSC_ACTION_PROXY_ALIAS: function () {
            return w;
          },
          RSC_ACTION_ENCRYPTION_ALIAS: function () {
            return k;
          },
          RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
            return S;
          },
          PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
            return x;
          },
          SSG_GET_INITIAL_PROPS_CONFLICT: function () {
            return j;
          },
          SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
            return R;
          },
          SERVER_PROPS_SSG_CONFLICT: function () {
            return E;
          },
          STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
            return O;
          },
          SERVER_PROPS_EXPORT_ERROR: function () {
            return C;
          },
          GSP_NO_RETURNED_VALUE: function () {
            return T;
          },
          GSSP_NO_RETURNED_VALUE: function () {
            return M;
          },
          UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
            return N;
          },
          GSSP_COMPONENT_MEMBER_ERROR: function () {
            return D;
          },
          NON_STANDARD_NODE_ENV: function () {
            return I;
          },
          SSG_FALLBACK_EXPORT_ERROR: function () {
            return L;
          },
          ESLINT_DEFAULT_DIRS: function () {
            return z;
          },
          ESLINT_PROMPT_VALUES: function () {
            return F;
          },
          SERVER_RUNTIME: function () {
            return U;
          },
          WEBPACK_LAYERS: function () {
            return W;
          },
          WEBPACK_RESOURCE_QUERIES: function () {
            return B;
          },
        });
      let t = 'nxtP',
        a = 'x-prerender-revalidate',
        o = 'x-prerender-revalidate-if-generated',
        n = 'x-nextjs-postponed',
        l = 'x-next-cache-tags',
        i = 'x-next-cache-soft-tags',
        s = 'x-next-revalidated-tags',
        c = 'x-next-revalidate-tag-token',
        d = 256,
        p = 1024,
        u = '_N_T_',
        f = 31536e3,
        y = 'middleware',
        b = `(?:src/)?${y}`,
        m = 'instrumentation',
        g = 'private-next-pages',
        A = 'private-dot-next',
        h = 'private-next-root-dir',
        v = 'private-next-app-dir',
        _ = 'private-next-rsc-mod-ref-proxy',
        P = 'private-next-rsc-action-validate',
        w = 'private-next-rsc-action-proxy',
        k = 'private-next-rsc-action-encryption',
        S = 'private-next-rsc-action-client-wrapper',
        x =
          "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
        j =
          'You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps',
        R =
          'You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.',
        E =
          'You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps',
        O =
          'can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props',
        C =
          'pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export',
        T =
          'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?',
        M =
          'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?',
        N =
          'The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.',
        D =
          "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
        I =
          'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
        L =
          'Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export',
        z = ['app', 'pages', 'components', 'lib', 'src'],
        F = [
          {
            title: 'Strict',
            recommended: !0,
            config: { extends: 'next/core-web-vitals' },
          },
          { title: 'Base', config: { extends: 'next' } },
          { title: 'Cancel', config: null },
        ],
        U = {
          edge: 'edge',
          experimentalEdge: 'experimental-edge',
          nodejs: 'nodejs',
        },
        H = {
          shared: 'shared',
          reactServerComponents: 'rsc',
          serverSideRendering: 'ssr',
          actionBrowser: 'action-browser',
          api: 'api',
          middleware: 'middleware',
          edgeAsset: 'edge-asset',
          appPagesBrowser: 'app-pages-browser',
          appMetadataRoute: 'app-metadata-route',
          appRouteHandler: 'app-route-handler',
        },
        W = {
          ...H,
          GROUP: {
            server: [
              H.reactServerComponents,
              H.actionBrowser,
              H.appMetadataRoute,
              H.appRouteHandler,
            ],
            nonClientServerTarget: [H.middleware, H.api],
            app: [
              H.reactServerComponents,
              H.actionBrowser,
              H.appMetadataRoute,
              H.appRouteHandler,
              H.serverSideRendering,
              H.appPagesBrowser,
            ],
          },
        },
        B = {
          edgeSSREntry: '__next_edge_ssr_entry__',
          metadata: '__next_metadata__',
          metadataRoute: '__next_metadata_route__',
          metadataImageMeta: '__next_metadata_image_meta__',
        };
    },
    2290: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'getSegmentParam', {
          enumerable: !0,
          get: function () {
            return getSegmentParam;
          },
        });
      let a = t(4265);
      function getSegmentParam(e) {
        let r = a.INTERCEPTION_ROUTE_MARKERS.find((r) => e.startsWith(r));
        return (r && (e = e.slice(r.length)),
        e.startsWith('[[...') && e.endsWith(']]'))
          ? { type: 'optional-catchall', param: e.slice(5, -2) }
          : e.startsWith('[...') && e.endsWith(']')
            ? { type: 'catchall', param: e.slice(4, -1) }
            : e.startsWith('[') && e.endsWith(']')
              ? { type: 'dynamic', param: e.slice(1, -1) }
              : null;
      }
    },
    4265: (e, r, t) => {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          INTERCEPTION_ROUTE_MARKERS: function () {
            return o;
          },
          isInterceptionRouteAppPath: function () {
            return isInterceptionRouteAppPath;
          },
          extractInterceptionRouteInformation: function () {
            return extractInterceptionRouteInformation;
          },
        });
      let a = t(8321),
        o = ['(..)(..)', '(.)', '(..)', '(...)'];
      function isInterceptionRouteAppPath(e) {
        return (
          void 0 !== e.split('/').find((e) => o.find((r) => e.startsWith(r)))
        );
      }
      function extractInterceptionRouteInformation(e) {
        let r, t, n;
        for (let a of e.split('/'))
          if ((t = o.find((e) => a.startsWith(e)))) {
            [r, n] = e.split(t, 2);
            break;
          }
        if (!r || !t || !n)
          throw Error(
            `Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`,
          );
        switch (((r = (0, a.normalizeAppPath)(r)), t)) {
          case '(.)':
            n = '/' === r ? `/${n}` : r + '/' + n;
            break;
          case '(..)':
            if ('/' === r)
              throw Error(
                `Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`,
              );
            n = r.split('/').slice(0, -1).concat(n).join('/');
            break;
          case '(...)':
            n = '/' + n;
            break;
          case '(..)(..)':
            let l = r.split('/');
            if (l.length <= 2)
              throw Error(
                `Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`,
              );
            n = l.slice(0, -2).concat(n).join('/');
            break;
          default:
            throw Error('Invariant: unexpected marker');
        }
        return { interceptingRoute: r, interceptedRoute: n };
      }
    },
    316: (e, r, t) => {
      'use strict';
      e.exports = t(399);
    },
    2428: (e, r, t) => {
      'use strict';
      e.exports = t(316).vendored.contexts.AppRouterContext;
    },
    1736: (e, r, t) => {
      'use strict';
      e.exports = t(316).vendored.contexts.HooksClientContext;
    },
    5753: (e, r, t) => {
      'use strict';
      e.exports = t(316).vendored.contexts.ServerInsertedHtml;
    },
    8908: (e, r, t) => {
      'use strict';
      e.exports = t(316).vendored['react-ssr'].ReactDOM;
    },
    2623: (e, r, t) => {
      'use strict';
      e.exports = t(316).vendored['react-ssr'].ReactServerDOMWebpackClientEdge;
    },
    9885: (e, r, t) => {
      'use strict';
      e.exports = t(316).vendored['react-ssr'].React;
    },
    4164: (e, r, t) => {
      'use strict';
      function _class_private_field_loose_base(e, r) {
        if (!Object.prototype.hasOwnProperty.call(e, r))
          throw TypeError('attempted to use private field on non-instance');
        return e;
      }
      t.r(r),
        t.d(r, {
          _: () => _class_private_field_loose_base,
          _class_private_field_loose_base: () =>
            _class_private_field_loose_base,
        });
    },
    6788: (e, r, t) => {
      'use strict';
      t.r(r),
        t.d(r, {
          _: () => _class_private_field_loose_key,
          _class_private_field_loose_key: () => _class_private_field_loose_key,
        });
      var a = 0;
      function _class_private_field_loose_key(e) {
        return '__private_' + a++ + '_' + e;
      }
    },
    2300: (e, r, t) => {
      'use strict';
      function _interop_require_default(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.r(r),
        t.d(r, {
          _: () => _interop_require_default,
          _interop_require_default: () => _interop_require_default,
        });
    },
    3026: (e, r, t) => {
      'use strict';
      function _getRequireWildcardCache(e) {
        if ('function' != typeof WeakMap) return null;
        var r = new WeakMap(),
          t = new WeakMap();
        return (_getRequireWildcardCache = function (e) {
          return e ? t : r;
        })(e);
      }
      function _interop_require_wildcard(e, r) {
        if (!r && e && e.__esModule) return e;
        if (null === e || ('object' != typeof e && 'function' != typeof e))
          return { default: e };
        var t = _getRequireWildcardCache(r);
        if (t && t.has(e)) return t.get(e);
        var a = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if ('default' !== n && Object.prototype.hasOwnProperty.call(e, n)) {
            var l = o ? Object.getOwnPropertyDescriptor(e, n) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(a, n, l)
              : (a[n] = e[n]);
          }
        return (a.default = e), t && t.set(e, a), a;
      }
      t.r(r),
        t.d(r, {
          _: () => _interop_require_wildcard,
          _interop_require_wildcard: () => _interop_require_wildcard,
        });
    },
  });
