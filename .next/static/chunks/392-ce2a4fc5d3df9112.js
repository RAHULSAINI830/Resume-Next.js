(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [392],
  {
    790: function (e, t, o) {
      'use strict';
      function r(e) {
        var t,
          o,
          i = '';
        if ('string' == typeof e || 'number' == typeof e) i += e;
        else if ('object' == typeof e) {
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (o = r(e[t])) && (i && (i += ' '), (i += o));
          else for (t in e) e[t] && (i && (i += ' '), (i += t));
        }
        return i;
      }
      function clsx() {
        for (var e, t, o = 0, i = ''; o < arguments.length; )
          (e = arguments[o++]) && (t = r(e)) && (i && (i += ' '), (i += t));
        return i;
      }
      o.d(t, {
        j: function () {
          return cva;
        },
      });
      let falsyToString = (e) =>
          'boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e,
        i = clsx,
        cva = (e, t) => (o) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return i(
              e,
              null == o ? void 0 : o.class,
              null == o ? void 0 : o.className,
            );
          let { variants: a, defaultVariants: s } = t,
            l = Object.keys(a).map((e) => {
              let t = null == o ? void 0 : o[e],
                i = null == s ? void 0 : s[e];
              if (null === t) return null;
              let n = falsyToString(t) || falsyToString(i);
              return a[e][n];
            }),
            c =
              o &&
              Object.entries(o).reduce((e, t) => {
                let [o, i] = t;
                return void 0 === i || (e[o] = i), e;
              }, {}),
            d =
              null == t
                ? void 0
                : null === (n = t.compoundVariants) || void 0 === n
                  ? void 0
                  : n.reduce((e, t) => {
                      let { class: o, className: i, ...n } = t;
                      return Object.entries(n).every((e) => {
                        let [t, o] = e;
                        return Array.isArray(o)
                          ? o.includes({ ...s, ...c }[t])
                          : { ...s, ...c }[t] === o;
                      })
                        ? [...e, o, i]
                        : e;
                    }, []);
          return i(
            e,
            l,
            d,
            null == o ? void 0 : o.class,
            null == o ? void 0 : o.className,
          );
        };
    },
    622: function (e, t, o) {
      'use strict';
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = o(2265),
        n = Symbol.for('react.element'),
        a = (Symbol.for('react.fragment'), Object.prototype.hasOwnProperty),
        s =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(e, t, o) {
        var i,
          c = {},
          d = null,
          u = null;
        for (i in (void 0 !== o && (d = '' + o),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (u = t.ref),
        t))
          a.call(t, i) && !l.hasOwnProperty(i) && (c[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === c[i] && (c[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: u,
          props: c,
          _owner: s.current,
        };
      }
      (t.jsx = q), (t.jsxs = q);
    },
    7437: function (e, t, o) {
      'use strict';
      e.exports = o(622);
    },
    1396: function (e, t, o) {
      e.exports = o(8326);
    },
    550: function (e, t, o) {
      'use strict';
      function createClassUtils(e) {
        let t = createClassMap(e),
          { conflictingClassGroups: o, conflictingClassGroupModifiers: i } = e;
        return {
          getClassGroupId: function (e) {
            let o = e.split('-');
            return (
              '' === o[0] && 1 !== o.length && o.shift(),
              getGroupRecursive(o, t) || getGroupIdForArbitraryProperty(e)
            );
          },
          getConflictingClassGroupIds: function (e, t) {
            let n = o[e] || [];
            return t && i[e] ? [...n, ...i[e]] : n;
          },
        };
      }
      function getGroupRecursive(e, t) {
        if (0 === e.length) return t.classGroupId;
        let o = e[0],
          i = t.nextPart.get(o),
          n = i ? getGroupRecursive(e.slice(1), i) : void 0;
        if (n) return n;
        if (0 === t.validators.length) return;
        let a = e.join('-');
        return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
      }
      o.d(t, {
        m6: function () {
          return f;
        },
      });
      let i = /^\[(.+)\]$/;
      function getGroupIdForArbitraryProperty(e) {
        if (i.test(e)) {
          let t = i.exec(e)[1],
            o = t?.substring(0, t.indexOf(':'));
          if (o) return 'arbitrary..' + o;
        }
      }
      function createClassMap(e) {
        let { theme: t, prefix: o } = e,
          i = { nextPart: new Map(), validators: [] },
          n = getPrefixedClassGroupEntries(Object.entries(e.classGroups), o);
        return (
          n.forEach(([e, o]) => {
            processClassesRecursively(o, i, e, t);
          }),
          i
        );
      }
      function processClassesRecursively(e, t, o, i) {
        e.forEach((e) => {
          if ('string' == typeof e) {
            let i = '' === e ? t : getPart(t, e);
            i.classGroupId = o;
            return;
          }
          if ('function' == typeof e) {
            if (isThemeGetter(e)) {
              processClassesRecursively(e(i), t, o, i);
              return;
            }
            t.validators.push({ validator: e, classGroupId: o });
            return;
          }
          Object.entries(e).forEach(([e, n]) => {
            processClassesRecursively(n, getPart(t, e), o, i);
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
              let i = o.map((e) =>
                'string' == typeof e
                  ? t + e
                  : 'object' == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, o]) => [t + e, o]),
                      )
                    : e,
              );
              return [e, i];
            })
          : e;
      }
      function createLruCache(e) {
        if (e < 1) return { get: () => void 0, set: () => {} };
        let t = 0,
          o = new Map(),
          i = new Map();
        function update(n, a) {
          o.set(n, a), ++t > e && ((t = 0), (i = o), (o = new Map()));
        }
        return {
          get(e) {
            let t = o.get(e);
            return void 0 !== t
              ? t
              : void 0 !== (t = i.get(e))
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
          i = t[0],
          n = t.length;
        return function (e) {
          let a;
          let s = [],
            l = 0,
            c = 0;
          for (let d = 0; d < e.length; d++) {
            let u = e[d];
            if (0 === l) {
              if (u === i && (o || e.slice(d, d + n) === t)) {
                s.push(e.slice(c, d)), (c = d + n);
                continue;
              }
              if ('/' === u) {
                a = d;
                continue;
              }
            }
            '[' === u ? l++ : ']' === u && l--;
          }
          let d = 0 === s.length ? e : e.substring(c),
            u = d.startsWith('!'),
            b = u ? d.substring(1) : d,
            p = a && a > c ? a - c : void 0;
          return {
            modifiers: s,
            hasImportantModifier: u,
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
            let i = '[' === e[0];
            i ? (t.push(...o.sort(), e), (o = [])) : o.push(e);
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
      let n = /\s+/;
      function mergeClassList(e, t) {
        let {
            splitModifiers: o,
            getClassGroupId: i,
            getConflictingClassGroupIds: a,
          } = t,
          s = new Set();
        return e
          .trim()
          .split(n)
          .map((e) => {
            let {
                modifiers: t,
                hasImportantModifier: n,
                baseClassName: a,
                maybePostfixModifierPosition: s,
              } = o(e),
              l = i(s ? a.substring(0, s) : a),
              c = !!s;
            if (!l) {
              if (!s || !(l = i(a)))
                return { isTailwindClass: !1, originalClassName: e };
              c = !1;
            }
            let d = sortModifiers(t).join(':');
            return {
              isTailwindClass: !0,
              modifierId: n ? d + '!' : d,
              classGroupId: l,
              originalClassName: e,
              hasPostfixModifier: c,
            };
          })
          .reverse()
          .filter((e) => {
            if (!e.isTailwindClass) return !0;
            let { modifierId: t, classGroupId: o, hasPostfixModifier: i } = e,
              n = t + o;
            return (
              !s.has(n) && (s.add(n), a(o, i).forEach((e) => s.add(t + e)), !0)
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
          i = '';
        for (; o < arguments.length; )
          (e = arguments[o++]) &&
            (t = toValue(e)) &&
            (i && (i += ' '), (i += t));
        return i;
      }
      function toValue(e) {
        let t;
        if ('string' == typeof e) return e;
        let o = '';
        for (let i = 0; i < e.length; i++)
          e[i] && (t = toValue(e[i])) && (o && (o += ' '), (o += t));
        return o;
      }
      function createTailwindMerge(e, ...t) {
        let o, i, n;
        let a = initTailwindMerge;
        function initTailwindMerge(s) {
          let l = t.reduce((e, t) => t(e), e());
          return (
            (i = (o = createConfigUtils(l)).cache.get),
            (n = o.cache.set),
            (a = tailwindMerge),
            tailwindMerge(s)
          );
        }
        function tailwindMerge(e) {
          let t = i(e);
          if (t) return t;
          let a = mergeClassList(e, o);
          return n(e, a), a;
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
        c = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        d =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        u = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
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
        return c.test(e);
      }
      let g = new Set(['length', 'size', 'percentage']);
      function isArbitrarySize(e) {
        return getIsArbitraryValue(e, g, isNever);
      }
      function isArbitraryPosition(e) {
        return getIsArbitraryValue(e, 'position', isNever);
      }
      let m = new Set(['image', 'url']);
      function isArbitraryImage(e) {
        return getIsArbitraryValue(e, m, isImage);
      }
      function isArbitraryShadow(e) {
        return getIsArbitraryValue(e, '', isShadow);
      }
      function isAny() {
        return !0;
      }
      function getIsArbitraryValue(e, t, o) {
        let i = a.exec(e);
        return (
          !!i &&
          (i[1] ? ('string' == typeof t ? i[1] === t : t.has(i[1])) : o(i[2]))
        );
      }
      function isLengthOnly(e) {
        return d.test(e) && !u.test(e);
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
          i = fromTheme('brightness'),
          n = fromTheme('borderColor'),
          a = fromTheme('borderRadius'),
          s = fromTheme('borderSpacing'),
          l = fromTheme('borderWidth'),
          c = fromTheme('contrast'),
          d = fromTheme('grayscale'),
          u = fromTheme('hueRotate'),
          b = fromTheme('invert'),
          p = fromTheme('gap'),
          g = fromTheme('gradientColorStops'),
          m = fromTheme('gradientColorStopPositions'),
          f = fromTheme('inset'),
          y = fromTheme('margin'),
          h = fromTheme('opacity'),
          v = fromTheme('padding'),
          A = fromTheme('saturate'),
          w = fromTheme('scale'),
          x = fromTheme('sepia'),
          S = fromTheme('skew'),
          k = fromTheme('space'),
          z = fromTheme('translate'),
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
            inset: [{ inset: [f] }],
            'inset-x': [{ 'inset-x': [f] }],
            'inset-y': [{ 'inset-y': [f] }],
            start: [{ start: [f] }],
            end: [{ end: [f] }],
            top: [{ top: [f] }],
            right: [{ right: [f] }],
            bottom: [{ bottom: [f] }],
            left: [{ left: [f] }],
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
            'space-x': [{ 'space-x': [k] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [k] }],
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
            'gradient-from-pos': [{ from: [m] }],
            'gradient-via-pos': [{ via: [m] }],
            'gradient-to-pos': [{ to: [m] }],
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
            'border-color': [{ border: [n] }],
            'border-color-x': [{ 'border-x': [n] }],
            'border-color-y': [{ 'border-y': [n] }],
            'border-color-t': [{ 'border-t': [n] }],
            'border-color-r': [{ 'border-r': [n] }],
            'border-color-b': [{ 'border-b': [n] }],
            'border-color-l': [{ 'border-l': [n] }],
            'divide-color': [{ divide: [n] }],
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
            brightness: [{ brightness: [i] }],
            contrast: [{ contrast: [c] }],
            'drop-shadow': [
              { 'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue] },
            ],
            grayscale: [{ grayscale: [d] }],
            'hue-rotate': [{ 'hue-rotate': [u] }],
            invert: [{ invert: [b] }],
            saturate: [{ saturate: [A] }],
            sepia: [{ sepia: [x] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [o] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [i] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [c] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [d] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [u] }],
            'backdrop-invert': [{ 'backdrop-invert': [b] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [h] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [A] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [x] }],
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
            scale: [{ scale: [w] }],
            'scale-x': [{ 'scale-x': [w] }],
            'scale-y': [{ 'scale-y': [w] }],
            rotate: [{ rotate: [isInteger, isArbitraryValue] }],
            'translate-x': [{ 'translate-x': [z] }],
            'translate-y': [{ 'translate-y': [z] }],
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
      let f = createTailwindMerge(getDefaultConfig);
    },
  },
]);
