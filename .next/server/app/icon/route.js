'use strict';
(() => {
  var e = {};
  (e.id = 441),
    (e.ids = [441]),
    (e.modules = {
      399: (e) => {
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      517: (e) => {
        e.exports = require('next/dist/compiled/next-server/app-route.runtime.prod.js');
      },
      4021: (e) => {
        e.exports = import('next/dist/compiled/@vercel/og/index.node.js');
      },
      4934: (e, t, r) => {
        r.r(t),
          r.d(t, {
            headerHooks: () => G,
            originalPathname: () => M,
            requestAsyncStorage: () => S,
            routeModule: () => T,
            serverHooks: () => A,
            staticGenerationAsyncStorage: () => P,
            staticGenerationBailout: () => R,
          });
        var a,
          n,
          o,
          i,
          l,
          s = {};
        r.r(s),
          r.d(s, { contentType: () => _, default: () => icon, size: () => k });
        var u = {};
        r.r(u), r.d(u, { GET: () => GET });
        var d = r(884),
          c = r(6132),
          m = r(1057),
          p = r(8694),
          g = r(926);
        (function (e) {
          (e.Tomato = 'tomato'),
            (e.Red = 'red'),
            (e.Crimson = 'crimson'),
            (e.Pink = 'pink'),
            (e.Plum = 'plum'),
            (e.Purple = 'purple'),
            (e.Violet = 'violet'),
            (e.Indigo = 'indigo'),
            (e.Blue = 'blue'),
            (e.Cyan = 'cyan'),
            (e.Teal = 'teal'),
            (e.Green = 'green'),
            (e.Grass = 'grass'),
            (e.Orange = 'orange'),
            (e.Brown = 'brown'),
            (e.Ruby = 'ruby'),
            (e.Iris = 'iris'),
            (e.Jade = 'jade');
        })(a || (a = {})),
          (function (e) {
            (e.Sky = 'sky'),
              (e.Mint = 'mint'),
              (e.Lime = 'lime'),
              (e.Yellow = 'yellow'),
              (e.Amber = 'amber');
          })(n || (n = {}));
        let x = { ...a, ...n };
        (function (e) {
          (e.Gray = 'gray'),
            (e.Mauve = 'mauve'),
            (e.Slate = 'slate'),
            (e.Sage = 'sage'),
            (e.Olive = 'olive'),
            (e.Sand = 'sand');
        })(o || (o = {})),
          (function (e) {
            (e.Dark = 'dark'), (e.Light = 'light');
          })(i || (i = {})),
          (function (e) {
            (e.Dark = 'dark'), (e.Light = 'light'), (e.System = 'system');
          })(l || (l = {}));
        let h = {
            accentColor: x.Blue,
            neutralColor: o.Slate,
            appTheme: l.System,
            imageTheme: i.Light,
            pdfTheme: i.Light,
          },
          f = ((e) => {
            let t = Object.values(n);
            return t.includes(e);
          })(h.accentColor)
            ? '#000'
            : '#fff';
        var v = r(4600);
        let w = h.imageTheme,
          y = h.accentColor;
        h.neutralColor;
        let getAccentColor = (e, t = w) => {
            let r = v[t === i.Dark ? `${y}Dark` : y];
            return r[`${y}${e}`];
          },
          k = { width: 32, height: 32 },
          _ = 'image/png';
        function icon() {
          return new g.ImageResponse(
            p.jsx('div', {
              tw: 'rounded-full text-xl w-full h-full flex items-center justify-center',
              style: { backgroundColor: getAccentColor(9) },
              children: p.jsx('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 448 512',
                fill: f,
                width: '50%',
                height: '50%',
                children: p.jsx('path', {
                  d: 'M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z',
                }),
              }),
            }),
            { ...k },
          );
        }
        let C = { ...s },
          b = C.default,
          j = C.generateImageMetadata;
        async function GET(e, t) {
          let r;
          let { __metadata_id__: a = [], ...n } = t.params || {},
            o = a[0],
            i = j ? await j({ params: n }) : null;
          return i && null == (r = i.find((e) => e.id.toString() === o)?.id)
            ? new m.NextResponse('Not Found', { status: 404 })
            : b({ params: t.params ? n : void 0, id: r });
        }
        let T = new d.AppRouteRouteModule({
            definition: {
              kind: c.x.APP_ROUTE,
              page: '/icon/route',
              pathname: '/icon',
              filename: 'icon',
              bundlePath: 'app/icon/route',
            },
            resolvedPagePath:
              'next-metadata-route-loader?page=%2Ficon%2Froute&isDynamic=1!/workspaces/Resume-Next.js/src/app/icon.tsx?__next_metadata_route__',
            nextConfigOutput: '',
            userland: u,
          }),
          {
            requestAsyncStorage: S,
            staticGenerationAsyncStorage: P,
            serverHooks: A,
            headerHooks: G,
            staticGenerationBailout: R,
          } = T,
          M = '/icon/route';
      },
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    r = t.X(0, [949, 705, 505], () => __webpack_exec__(4934));
  module.exports = r;
})();
