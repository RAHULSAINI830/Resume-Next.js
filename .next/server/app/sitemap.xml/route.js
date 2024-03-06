'use strict';
(() => {
  var e = {};
  (e.id = 717),
    (e.ids = [717]),
    (e.modules = {
      517: (e) => {
        e.exports = require('next/dist/compiled/next-server/app-route.runtime.prod.js');
      },
      5273: (e, t, a) => {
        a.r(t),
          a.d(t, {
            headerHooks: () => f,
            originalPathname: () => R,
            requestAsyncStorage: () => _,
            routeModule: () => x,
            serverHooks: () => g,
            staticGenerationAsyncStorage: () => v,
            staticGenerationBailout: () => w,
          });
        var r = {};
        a.r(r), a.d(r, { default: () => sitemap });
        var s = {};
        a.r(s), a.d(s, { GET: () => GET });
        var i = a(884),
          n = a(6132),
          o = a(1057);
        let u = process.env.NEXT_PUBLIC_VERCEL_URL,
          p = `https://${u}`;
        function sitemap() {
          return [{ url: p, lastModified: new Date().toISOString() }];
        }
        var l = a(2450);
        let m = { ...r },
          d = m.default,
          c = m.generateSitemaps;
        async function GET(e, t) {
          let a;
          let { __metadata_id__: r = [], ...s } = t.params || {},
            i = r[0],
            n = c ? await c() : null;
          if (n && null == (a = n.find((e) => e.id.toString() === i)?.id))
            return new o.NextResponse('Not Found', { status: 404 });
          let u = await d({ id: a }),
            p = (0, l.resolveRouteData)(u, 'sitemap');
          return new o.NextResponse(p, {
            headers: {
              'Content-Type': 'application/xml',
              'Cache-Control': 'public, max-age=0, must-revalidate',
            },
          });
        }
        let x = new i.AppRouteRouteModule({
            definition: {
              kind: n.x.APP_ROUTE,
              page: '/sitemap.xml/route',
              pathname: '/sitemap.xml',
              filename: 'sitemap',
              bundlePath: 'app/sitemap.xml/route',
            },
            resolvedPagePath:
              'next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&isDynamic=1!/workspaces/Resume-Next.js/src/app/sitemap.ts?__next_metadata_route__',
            nextConfigOutput: '',
            userland: s,
          }),
          {
            requestAsyncStorage: _,
            staticGenerationAsyncStorage: v,
            serverHooks: g,
            headerHooks: f,
            staticGenerationBailout: w,
          } = x,
          R = '/sitemap.xml/route';
      },
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    a = t.X(0, [705, 495], () => __webpack_exec__(5273));
  module.exports = a;
})();
