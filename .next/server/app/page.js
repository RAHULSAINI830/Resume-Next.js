'use strict';
(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
    (e.modules = {
      2934: (e) => {
        e.exports = require('next/dist/client/components/action-async-storage.external.js');
      },
      5403: (e) => {
        e.exports = require('next/dist/client/components/request-async-storage.external');
      },
      4580: (e) => {
        e.exports = require('next/dist/client/components/request-async-storage.external.js');
      },
      4749: (e) => {
        e.exports = require('next/dist/client/components/static-generation-async-storage.external');
      },
      5869: (e) => {
        e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
      },
      399: (e) => {
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      4021: (e) => {
        e.exports = import('next/dist/compiled/@vercel/og/index.node.js');
      },
      1017: (e) => {
        e.exports = require('path');
      },
      7310: (e) => {
        e.exports = require('url');
      },
      2: (e, s, t) => {
        t.r(s),
          t.d(s, {
            GlobalError: () => i.a,
            __next_app__: () => x,
            originalPathname: () => c,
            pages: () => p,
            routeModule: () => m,
            tree: () => d,
          });
        var r = t(7096),
          a = t(6132),
          n = t(7284),
          i = t.n(n),
          o = t(2564),
          l = {};
        for (let e in o)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              'originalPathname',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (l[e] = () => o[e]);
        t.d(s, l);
        let d = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(t.bind(t, 8203)),
                    '/workspaces/Resume-Next.js/src/app/page.tsx',
                  ],
                  metadata: {
                    icon: [
                      async (e) =>
                        (await Promise.resolve().then(t.bind(t, 6608))).default(
                          e,
                        ),
                    ],
                    apple: [],
                    openGraph: [
                      async (e) =>
                        (await Promise.resolve().then(t.bind(t, 9882))).default(
                          e,
                        ),
                    ],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 4910)),
                '/workspaces/Resume-Next.js/src/app/layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(t.t.bind(t, 9291, 23)),
                'next/dist/client/components/not-found-error',
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(t.bind(t, 6608))).default(e),
                ],
                apple: [],
                openGraph: [
                  async (e) =>
                    (await Promise.resolve().then(t.bind(t, 9882))).default(e),
                ],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          p = ['/workspaces/Resume-Next.js/src/app/page.tsx'],
          c = '/page',
          x = { require: t, loadChunk: () => Promise.resolve() },
          m = new r.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: '/page',
              pathname: '/',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      8203: (e, s, t) => {
        t.r(s), t.d(s, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
        var r = t(4656),
          a = t(9712),
          n = t(9040),
          i = t(9025),
          o = t(2798),
          l = t(8818),
          d = t(3267),
          p = t(5521),
          c = t(8116);
        let __WEBPACK_DEFAULT_EXPORT__ = () =>
          (0, r.jsxs)(r.Fragment, {
            children: [
              r.jsx(c.h, {}),
              (0, r.jsxs)('div', {
                className: 'container',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'grid grid-cols-1 gap-6 md:grid-cols-2',
                    children: [r.jsx(a.Z, {}), r.jsx(o.n, {})],
                  }),
                  r.jsx('div', {
                    className: 'mt-12',
                    children: r.jsx(d.Z, {}),
                  }),
                  r.jsx('div', {
                    className: 'mt-12',
                    children: r.jsx(l.Z, {}),
                  }),
                  r.jsx('div', {
                    className: 'mt-12',
                    children: r.jsx(n.Z, {}),
                  }),
                  r.jsx('div', {
                    className: 'mt-12',
                    children: r.jsx(i.j, {}),
                  }),
                ],
              }),
              r.jsx(p.$, {}),
            ],
          });
      },
    });
  var s = require('../webpack-runtime.js');
  s.C(e);
  var __webpack_exec__ = (e) => s((s.s = e)),
    t = s.X(0, [949, 858, 363, 818, 274], () => __webpack_exec__(2));
  module.exports = t;
})();
