(exports.id = 274),
  (exports.ids = [274]),
  (exports.modules = {
    7109: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 614, 23));
    },
    9712: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var a = s(4656),
        r = s(6221),
        l = s(8772);
      s(3542);
      var n = s(8020),
        i = s(9065);
      let __WEBPACK_DEFAULT_EXPORT__ = () =>
        (0, a.jsxs)('article', {
          children: [
            a.jsx(i.O, { icon: l.ILF, level: 3, text: 'About Me' }),
            a.jsx(n.Z, { html: r.Hr.body.html }),
          ],
        });
    },
    9040: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => Articles_Achievements });
      var a = s(4656),
        r = s(8772);
      s(3542);
      var l = s(3130),
        n = s(9065),
        i = s(4253),
        c = s(2882),
        d = s(8020);
      let Articles_AchievementItem = ({
          achievement: e,
          body: t,
          organization: s,
        }) =>
          (0, a.jsxs)('article', {
            className:
              'border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0',
            children: [
              a.jsx(c.X, { className: 'text-balance', level: 3, children: e }),
              (0, a.jsxs)('div', {
                className: 'mt-1 font-medium tracking-wide',
                children: [a.jsx(i.G, { className: 'mr-2', icon: r.bhf }), s],
              }),
              a.jsx(d.Z, { html: t.html }),
            ],
          }),
        Articles_Achievements = () =>
          a.jsx('article', {
            className: 'rounded-xl bg-neutral-3 py-12',
            children: (0, a.jsxs)('div', {
              className: 'container',
              children: [
                a.jsx('div', {
                  className: 'flex justify-center text-center',
                  children: a.jsx(n.O, {
                    icon: r.vCl,
                    level: 2,
                    text: 'Achievements',
                  }),
                }),
                l.dV.map((e) =>
                  a.jsx(Articles_AchievementItem, { ...e }, e._id),
                ),
              ],
            }),
          });
    },
    9025: (e, t, s) => {
      'use strict';
      s.d(t, { j: () => AdditionalInfo });
      var a = s(4656),
        r = s(6221),
        l = s(8772);
      s(3542);
      var n = s(8020),
        i = s(9065);
      let AdditionalInfo = () =>
        (0, a.jsxs)('article', {
          className: 'py-12',
          children: [
            a.jsx('div', {
              className: 'mb-6 flex justify-center',
              children: a.jsx(i.O, { icon: l.XsY, level: 2, text: r.Vc.title }),
            }),
            a.jsx(n.Z, { html: r.Vc.body.html }),
          ],
        });
    },
    2798: (e, t, s) => {
      'use strict';
      s.d(t, { n: () => ContactInformation });
      var a = s(4656),
        r = s(6221),
        l = s(8772);
      s(3542);
      var n = s(9065);
      let ContactInformation = ({ privateInformation: e }) =>
        (0, a.jsxs)('article', {
          children: [
            a.jsx(n.O, { icon: l.Ukp, level: 3, text: 'Contact Information' }),
            (0, a.jsxs)('ul', {
              className: 'mt-2',
              children: [
                (0, a.jsxs)('li', {
                  children: [
                    a.jsx('strong', { children: 'Location:' }),
                    ' ',
                    r.Hr.location,
                  ],
                }),
                e?.map((e) =>
                  a.jsxs(
                    'li',
                    {
                      className: 'mt-3',
                      children: [
                        a.jsx('strong', { children: e.label }),
                        ' ',
                        a.jsx('div', {
                          dangerouslySetInnerHTML: { __html: e.body.html },
                        }),
                      ],
                    },
                    e.label,
                  ),
                ),
              ],
            }),
          ],
        });
    },
    8818: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => Articles_Professional });
      var a = s(4656),
        r = s(8772);
      s(3542);
      var l = s(3130),
        n = s(9065),
        i = s(4253),
        c = s(2882),
        d = s(8020);
      let Articles_ProfessionalItem = ({
          body: e,
          endDate: t,
          organization: s,
          startDate: l,
          title: n,
        }) =>
          (0, a.jsxs)('article', {
            className:
              'border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0',
            children: [
              (0, a.jsxs)(c.X, {
                className: 'text-balance',
                level: 3,
                children: [
                  a.jsx('span', {
                    className: 'rounded-md bg-neutral-12 px-2 text-neutral-1',
                    children: n,
                  }),
                  (0, a.jsxs)('span', { children: [' at ', s] }),
                ],
              }),
              (0, a.jsxs)('div', {
                className: 'mt-1 font-medium tracking-wide',
                children: [
                  a.jsx(i.G, { className: 'mr-2', icon: r.fT7 }),
                  l,
                  '–',
                  t || 'Current',
                ],
              }),
              a.jsx(d.Z, { html: e.html }),
            ],
          }),
        Articles_Professional = () =>
          a.jsx('article', {
            className: 'rounded-xl bg-neutral-3 py-12',
            children: (0, a.jsxs)('div', {
              className: 'container',
              children: [
                a.jsx('div', {
                  className: 'flex justify-center text-center',
                  children: a.jsx(n.O, {
                    icon: r.HXv,
                    level: 2,
                    text: 'Professional Experience',
                  }),
                }),
                l.cr.map((e) =>
                  a.jsx(Articles_ProfessionalItem, { ...e }, e._id),
                ),
              ],
            }),
          });
    },
    3267: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => Articles_Skills });
      var a = s(4656),
        r = s(6221),
        l = s(8772);
      s(3542);
      var n = s(2882),
        i = s(8020),
        c = s(9065),
        d = s(4253);
      let Star = () =>
          a.jsx(d.G, {
            className: 'inline h-5 w-5 text-accent-11 dark:text-amber-11',
            icon: l.Tab,
          }),
        StarRating = (e) => {
          let { stars: t } = e;
          return (0, a.jsxs)('span', {
            className: 'flex items-center',
            children: [
              t >= 1 && a.jsx(Star, {}),
              t >= 2 && a.jsx(Star, {}),
              t >= 3 && a.jsx(Star, {}),
            ],
          });
        },
        Articles_Skills = () =>
          (0, a.jsxs)('article', {
            children: [
              a.jsx(c.O, { icon: l.LEp, level: 3, text: 'Skills & Expertise' }),
              a.jsx('div', {
                className: 'mt-2 grid grid-flow-row gap-6 lg:grid-flow-col',
                children: r.JL.map((e, t) =>
                  (0, a.jsxs)(
                    'div',
                    {
                      children: [
                        a.jsx(n.X, {
                          level: 4,
                          children: (0, a.jsxs)('div', {
                            className: 'flex items-center gap-2',
                            children: [
                              a.jsx(StarRating, { stars: r.JL.length - t }),
                              e.title,
                            ],
                          }),
                        }),
                        a.jsx(i.Z, {
                          className: 'text-neutral-11',
                          html: e.body.html,
                        }),
                      ],
                    },
                    e._id,
                  ),
                ),
              }),
            ],
          });
    },
    3041: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => ButtonLink });
      var a = s(4656),
        r = s(4353),
        l = s.n(r),
        n = s(5287),
        i = s(1204);
      let c = (0, i.j)(
        'flex items-center justify-center gap-2 rounded-md border-2 border-accent-7 bg-accent-1 font-medium text-accent-11 no-underline outline-none transition hover:border-accent-8 focus:border-transparent focus:bg-accent-9 focus:text-accentContrast focus:ring-4 focus:ring-accent-6 hover:focus:border-transparent',
        {
          variants: {
            size: {
              sm: 'text-sm py-1 px-4',
              md: 'text-base py-2 px-6',
              lg: 'text-lg py-3 px-8',
            },
          },
          defaultVariants: { size: 'md' },
        },
      );
      function ButtonLink({ children: e, className: t, size: s, ...r }) {
        return a.jsx(l(), {
          className: (0, n.m6)(c({ size: s }), t),
          ...r,
          children: e,
        });
      }
    },
    5521: (e, t, s) => {
      'use strict';
      s.d(t, { $: () => Footer });
      var a = s(4656),
        r = s(6221),
        l = s(4253),
        n = s(8799);
      let i = [
        { href: 'https://github.com', icon: n.zhw, title: 'GitHub' },
        { href: 'https://www.instagram.com', icon: n.Zzi, title: 'Instagram' },
        { href: 'https://www.linkedin.com', icon: n.D9H, title: 'LinkedIn' },
        { href: 'https://www.npmjs.com', icon: n.xDz, title: 'NPM' },
        { href: 'https://twitter.com', icon: n.mdU, title: 'Twitter' },
      ];
      s(3542);
      var c = s(3130),
        d = s(3041);
      let Footer = () =>
        a.jsx('footer', {
          className: 'mt-12 bg-neutral-3 py-12 text-neutral-12',
          children: (0, a.jsxs)('div', {
            className: 'container text-center',
            children: [
              i &&
                a.jsx('div', {
                  className: 'flex justify-center',
                  children: a.jsx('div', {
                    className: 'grid grid-flow-col gap-2',
                    children: i.map((e) =>
                      (0, a.jsxs)(
                        d.Z,
                        {
                          className: 'h-12 w-12 rounded-full p-0',
                          href: e.href,
                          children: [
                            (0, a.jsxs)('span', {
                              className: 'sr-only',
                              children: [r.Hr.givenName, ' on ', e.title],
                            }),
                            a.jsx(l.G, {
                              'aria-hidden': !0,
                              icon: e.icon,
                              size: 'lg',
                            }),
                          ],
                        },
                        e.title,
                      ),
                    ),
                  }),
                }),
              (0, a.jsxs)('div', {
                className: 'mt-6',
                children: [
                  'Copyright \xa9',
                  new Date().getFullYear(),
                  ' ',
                  c.v2,
                ],
              }),
              (0, a.jsxs)('div', {
                className: 'mt-1 text-sm',
                children: [
                  'This r\xe9sum\xe9 was generated with',
                  ' ',
                  a.jsx('a', {
                    className: 'link',
                    href: 'https://nextjs.org/',
                    children: 'Next.js',
                  }),
                  ' ',
                  'and deployed on',
                  ' ',
                  a.jsx('a', {
                    className: 'link',
                    href: 'https://vercel.com/',
                    children: 'Vercel',
                  }),
                  '. Learn how to deploy your own r\xe9sum\xe9 with the',
                  ' ',
                  a.jsx('a', {
                    className: 'link',
                    href: 'https://github.com/colinhemphill/nextjs-resume-generator',
                    children: 'nextjs-resume-generator',
                  }),
                  '!',
                ],
              }),
            ],
          }),
        });
    },
    8116: (e, t, s) => {
      'use strict';
      s.d(t, { h: () => Header });
      var a = s(4656),
        r = s(6221);
      s(3542);
      var l = s(3130),
        n = s(2882),
        i = s(8772),
        c = s(4253),
        d = s(3041);
      let PDF_PDFDownloadButton = ({ secret: e }) =>
          (0, a.jsxs)(d.Z, {
            href: e ? `/api/pdf?secret=${e}` : '/api/pdf',
            size: 'lg',
            children: [
              a.jsx(c.G, { icon: i.gSj, size: 'lg' }),
              'View or Download PDF',
            ],
          }),
        Header = ({ secret: e }) =>
          a.jsx('div', {
            className: 'mb-12 border-b-2 border-neutral-4 py-12',
            children: a.jsx('div', {
              className: 'container',
              children: (0, a.jsxs)('div', {
                className:
                  'flex flex-col items-center gap-6 text-center md:flex-row md:text-left',
                children: [
                  (0, a.jsxs)('div', {
                    className: 'flex-1 space-y-2',
                    children: [
                      a.jsx(n.X, { level: 1, children: l.v2 }),
                      a.jsx(n.X, {
                        color: 'neutralSubtle',
                        className: 'text-balance',
                        level: 2,
                        children: r.Hr.title,
                      }),
                    ],
                  }),
                  a.jsx(PDF_PDFDownloadButton, { secret: e }),
                ],
              }),
            }),
          });
    },
    2882: (e, t, s) => {
      'use strict';
      s.d(t, { X: () => Heading });
      var a = s(4656),
        r = s(1204),
        l = s(5287);
      let n = (0, r.j)('font-bold', {
        variants: {
          color: {
            danger: 'text-danger-11',
            neutral: 'text-neutral-12',
            neutralSubtle: 'text-neutral-11',
            primary: 'text-primary-11',
          },
          size: {
            1: 'text-4xl md:text-5xl',
            2: 'text-2xl md:text-3xl',
            3: 'text-xl md:text-2xl',
            4: 'text-lg md:text-xl',
            5: 'text-base md:text-lg',
            6: 'text-sm md:text-base',
          },
        },
        defaultVariants: { color: 'neutral' },
      });
      function Heading({
        children: e,
        className: t,
        color: s,
        level: r,
        size: i,
      }) {
        let c = (0, l.m6)(n({ color: s, size: i || r }), t);
        switch (r) {
          case 1:
            return a.jsx('h1', { className: c, children: e });
          case 2:
            return a.jsx('h2', { className: c, children: e });
          case 3:
            return a.jsx('h3', { className: c, children: e });
          case 4:
            return a.jsx('h4', { className: c, children: e });
          case 5:
            return a.jsx('h5', { className: c, children: e });
          case 6:
            return a.jsx('h6', { className: c, children: e });
        }
      }
    },
    8020: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var a = s(4656),
        r = s(5287);
      let __WEBPACK_DEFAULT_EXPORT__ = ({ className: e, html: t }) =>
        a.jsx('div', {
          className: (0, r.m6)(
            'prose mt-2 text-base text-neutral-12 [&>p]:mb-2',
            e,
          ),
          dangerouslySetInnerHTML: { __html: t },
        });
    },
    9065: (e, t, s) => {
      'use strict';
      s.d(t, { O: () => SectionHeading });
      var a = s(4656),
        r = s(8772),
        l = s(4253);
      s(3542);
      var n = s(2882);
      let SectionHeading = (e) => {
        let { icon: t, level: s = 3, text: i } = e;
        return a.jsx(n.X, {
          level: s,
          children: (0, a.jsxs)('div', {
            className: 'flex items-center gap-2',
            children: [
              t &&
                (0, a.jsxs)('span', {
                  className: 'fa-layers fa-fw hidden md:flex',
                  children: [
                    a.jsx(l.G, { className: 'text-neutral-12', icon: r.diR }),
                    a.jsx(l.G, {
                      'aria-hidden': !0,
                      className: 'text-neutral-1',
                      icon: t,
                      transform: 'shrink-8',
                    }),
                  ],
                }),
              a.jsx('div', { children: i }),
            ],
          }),
        });
      };
    },
    1386: (e, t, s) => {
      'use strict';
      s(4045);
      var a = s(5933);
      a.Z.imageTheme, a.Z.accentColor, a.Z.neutralColor;
    },
    6608: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => icon_next_metadata_ }), s(4656), s(9115);
      var a = s(4045);
      ((e) => {
        let t = Object.values(a.Lm);
        return t.includes(e);
      })(s(5933).Z.accentColor),
        s(1386);
      var r = s(8531);
      let l = { size: { width: 32, height: 32 }, contentType: 'image/png' };
      async function icon_next_metadata_(e) {
        let { __metadata_id__: t, ...s } = e.params,
          a = (0, r.fillMetadataSegment)('.', s, 'icon'),
          { generateImageMetadata: n } = l;
        function getImageMetadata(e, t) {
          let s = {
              alt: e.alt,
              type: e.contentType || 'image/png',
              url: a + (t ? '/' + t : '') + '?e99c7ad8e496f5cb',
            },
            { size: r } = e;
          return r && (s.sizes = r.width + 'x' + r.height), s;
        }
        if (!n) return [getImageMetadata(l, '')];
        {
          let e = await n({ params: s });
          return e.map((e, t) => {
            let s = (e.id || t) + '';
            return getImageMetadata(e, s);
          });
        }
      }
    },
    9882: (e, t, s) => {
      'use strict';
      s.r(t),
        s.d(t, { default: () => opengraph_image_next_metadata_ }),
        s(4656);
      var a = s(5933);
      s(9115), s(1386), s(3130), a.Z.imageTheme;
      var r = s(8531);
      let l = {
        alt: 'Professional R\xe9sum\xe9',
        contentType: 'image/png',
        runtime: 'edge',
        size: { width: 1200, height: 630 },
      };
      async function opengraph_image_next_metadata_(e) {
        let { __metadata_id__: t, ...s } = e.params,
          a = (0, r.fillMetadataSegment)('.', s, 'opengraph-image'),
          { generateImageMetadata: n } = l;
        function getImageMetadata(e, t) {
          let s = {
              alt: e.alt,
              type: e.contentType || 'image/png',
              url: a + (t ? '/' + t : '') + '?698e50bb7a2d3122',
            },
            { size: r } = e;
          return r && ((s.width = r.width), (s.height = r.height)), s;
        }
        if (!n) return [getImageMetadata(l, '')];
        {
          let e = await n({ params: s });
          return e.map((e, t) => {
            let s = (e.id || t) + '';
            return getImageMetadata(e, s);
          });
        }
      }
    },
  });
