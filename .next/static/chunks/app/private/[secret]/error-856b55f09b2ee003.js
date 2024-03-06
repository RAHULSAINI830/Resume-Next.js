(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [825],
  {
    1462: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 7784));
    },
    7784: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return Error;
          },
        });
      var n = r(7437),
        s = r(1396),
        l = r.n(s),
        a = r(2265),
        c = r(790),
        x = r(550);
      let i = (0, c.j)('font-bold', {
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
      function Heading(e) {
        let { children: t, className: r, color: s, level: l, size: a } = e,
          c = (0, x.m6)(i({ color: s, size: a || l }), r);
        switch (l) {
          case 1:
            return (0, n.jsx)('h1', { className: c, children: t });
          case 2:
            return (0, n.jsx)('h2', { className: c, children: t });
          case 3:
            return (0, n.jsx)('h3', { className: c, children: t });
          case 4:
            return (0, n.jsx)('h4', { className: c, children: t });
          case 5:
            return (0, n.jsx)('h5', { className: c, children: t });
          case 6:
            return (0, n.jsx)('h6', { className: c, children: t });
        }
      }
      function Error(e) {
        let { error: t } = e;
        return (
          (0, a.useEffect)(() => {
            console.error(t);
          }, [t]),
          (0, n.jsx)('div', {
            className: 'container mt-12 text-center',
            children: (0, n.jsxs)('div', {
              className: 'rounded-xl bg-neutral-3 py-12',
              children: [
                (0, n.jsx)(Heading, {
                  color: 'danger',
                  level: 2,
                  children: t.message,
                }),
                (0, n.jsx)('div', {
                  className: 'mt-4',
                  children: (0, n.jsx)(l(), {
                    href: '/',
                    children: 'Visit public r\xe9sum\xe9',
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [326, 392, 971, 472, 744], function () {
      return e((e.s = 1462));
    }),
      (_N_E = e.O());
  },
]);
