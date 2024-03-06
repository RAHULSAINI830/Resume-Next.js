'use strict';
(() => {
  var e = {};
  (e.id = 703),
    (e.ids = [703]),
    (e.modules = {
      517: (e) => {
        e.exports = require('next/dist/compiled/next-server/app-route.runtime.prod.js');
      },
      2600: (e, t, r) => {
        r.r(t),
          r.d(t, {
            headerHooks: () => _,
            originalPathname: () => x,
            requestAsyncStorage: () => c,
            routeModule: () => p,
            serverHooks: () => P,
            staticGenerationAsyncStorage: () => d,
            staticGenerationBailout: () => m,
          });
        var o = {};
        r.r(o), r.d(o, { GET: () => GET, dynamic: () => u });
        var a = r(884),
          n = r(6132),
          s = r(1057);
        let i = Buffer.from(
          'IyBXZWxjb21lLCByb2JvdCBvdmVybG9yZHMhCgpVc2VyLWFnZW50OiAqCkRpc2FsbG93OiAvcGRmCkRpc2FsbG93OiAvcHJpdmF0ZS8=',
          'base64',
        );
        function GET() {
          return new s.NextResponse(i, {
            headers: {
              'Content-Type': 'text/plain',
              'Cache-Control':
                'public, immutable, no-transform, max-age=31536000',
            },
          });
        }
        let u = 'force-static',
          p = new a.AppRouteRouteModule({
            definition: {
              kind: n.x.APP_ROUTE,
              page: '/robots.txt/route',
              pathname: '/robots.txt',
              filename: 'robots',
              bundlePath: 'app/robots.txt/route',
            },
            resolvedPagePath:
              'next-metadata-route-loader?page=%2Frobots.txt%2Froute&isDynamic=0!/workspaces/Resume-Next.js/src/app/robots.txt?__next_metadata_route__',
            nextConfigOutput: '',
            userland: o,
          }),
          {
            requestAsyncStorage: c,
            staticGenerationAsyncStorage: d,
            serverHooks: P,
            headerHooks: _,
            staticGenerationBailout: m,
          } = p,
          x = '/robots.txt/route';
      },
      6132: (e, t) => {
        var r;
        Object.defineProperty(t, 'x', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
          (function (e) {
            (e.PAGES = 'PAGES'),
              (e.PAGES_API = 'PAGES_API'),
              (e.APP_PAGE = 'APP_PAGE'),
              (e.APP_ROUTE = 'APP_ROUTE');
          })(r || (r = {}));
      },
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    r = t.X(0, [705], () => __webpack_exec__(2600));
  module.exports = r;
})();
