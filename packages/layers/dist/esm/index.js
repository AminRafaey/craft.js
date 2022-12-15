import {
  useCollector as e,
  wrapConnectorHooks as n,
  RenderIndicator as t,
  useMethods as r,
  ROOT_NODE as a,
} from '@craftjs/utils';
import o, {
  createContext as i,
  useContext as d,
  useMemo as c,
  useState as l,
  useLayoutEffect as s,
  useRef as u,
  useEffect as p,
  useCallback as f,
} from 'react';
import {
  useEditor as v,
  ROOT_NODE as g,
  DerivedCoreEventHandlers as h,
  useEventHandler as m,
} from '@craftjs/core';
import y from 'styled-components';
import x from 'react-contenteditable';
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var b = function (
    e,
    n
  ) {
    return (b =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, n) {
          e.__proto__ = n;
        }) ||
      function (e, n) {
        for (var t in n)
          Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
      })(e, n);
  },
  E = function () {
    return (E =
      Object.assign ||
      function (e) {
        for (var n, t = 1, r = arguments.length; t < r; t++)
          for (var a in (n = arguments[t]))
            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        return e;
      }).apply(this, arguments);
  };
function w(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      n.indexOf(r) < 0 &&
      (t[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      n.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (t[r[a]] = e[r[a]]);
  }
  return t;
}
function C(e, n) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, 'raw', { value: n })
      : (e.raw = n),
    e
  );
}
var O = o.createContext({}),
  L = i({});
function k(n) {
  var t = d(L).store,
    r = e(t, n);
  return c(
    function () {
      return E({ store: t }, r);
    },
    [t, r]
  );
}
function j(e) {
  var t = d(O),
    r = t.id,
    a = t.depth,
    o = t.connectors,
    i = k(function (n) {
      return r && n.layers[r] && e && e(n.layers[r]);
    }),
    l = i.actions,
    s = w(i, ['actions']),
    u = v(function (e, n) {
      return { children: e.nodes[r] && n.node(r).descendants() };
    }).children,
    p = c(
      function () {
        return {
          toggleLayer: function () {
            return l.toggleLayer(r);
          },
        };
      },
      [l, r]
    ),
    f = c(
      function () {
        return n({
          layer: function (e) {
            return o.layer(e, r);
          },
          drag: function (e) {
            return o.drag(e, r);
          },
          layerHeader: function (e) {
            return o.layerHeader(e, r);
          },
        });
      },
      [o, r]
    );
  return E({ id: r, depth: a, children: u, actions: p, connectors: f }, s);
}
var P = function () {
    var e = j(function (e) {
        return { expanded: e.expanded };
      }),
      n = e.id,
      t = e.depth,
      r = e.children,
      a = e.expanded,
      i = v(function (e, t) {
        var r = t.getEvent('selected').first();
        return {
          data: e.nodes[n] && e.nodes[n].data,
          shouldBeExpanded: r && t.node(r).ancestors(!0).includes(n),
        };
      }),
      d = i.data,
      c = i.shouldBeExpanded,
      f = k(function (e) {
        return {
          renderLayer: e.options.renderLayer,
          expandRootOnLoad: e.options.expandRootOnLoad,
        };
      }),
      h = f.actions,
      m = h.registerLayer,
      y = h.toggleLayer,
      x = f.renderLayer,
      b = f.expandRootOnLoad,
      E = l(!1),
      w = E[0],
      C = E[1];
    s(
      function () {
        m(n), C(!0);
      },
      [m, n]
    );
    var O = u(a);
    O.current = a;
    var L = u(b && n === g);
    return (
      p(
        function () {
          !O.current && c && y(n);
        },
        [y, n, c]
      ),
      p(
        function () {
          L.current && y(n);
        },
        [y, n]
      ),
      d && w
        ? o.createElement(
            'div',
            { className: 'craft-layer-node ' + n },
            o.createElement(
              x,
              {},
              r && a
                ? r.map(function (e) {
                    return o.createElement(N, { key: e, id: e, depth: t + 1 });
                  })
                : null
            )
          )
        : null
    );
  },
  D = i(null),
  N = function (e) {
    var t = e.id,
      r = e.depth,
      a = d(D),
      i = d(L).store;
    u(i).current = i;
    var l = c(
        function () {
          return a.createConnectorsUsage();
        },
        [a]
      ),
      s = c(
        function () {
          return n(l.connectors);
        },
        [l]
      );
    return (
      p(
        function () {
          return function () {
            l.cleanup();
          };
        },
        [l]
      ),
      v(function (e) {
        return { exists: !!e.nodes[t] };
      }).exists
        ? o.createElement(
            O.Provider,
            { value: { id: t, depth: r, connectors: s } },
            o.createElement(P, null)
          )
        : null
    );
  },
  z = function (e) {
    return {
      setLayerEvent: function (n, t) {
        if (null === t || e.layers[t]) {
          var r = e.events[n];
          r && t !== r && (e.layers[r].event[n] = !1),
            t
              ? ((e.layers[t].event[n] = !0), (e.events[n] = t))
              : (e.events[n] = null);
        }
      },
      registerLayer: function (n) {
        e.layers[n] ||
          (e.layers[n] = {
            dom: null,
            headingDom: null,
            expanded: !1,
            id: n,
            event: { selected: !1, hovered: !1 },
          });
      },
      setDOM: function (n, t) {
        e.layers[n] = E(
          E(E({}, e.layers[n]), t.dom ? { dom: t.dom } : {}),
          t.headingDom ? { headingDom: t.headingDom } : {}
        );
      },
      toggleLayer: function (n) {
        e.layers[n].expanded = !e.layers[n].expanded;
      },
      setIndicator: function (n) {
        e.events.indicator = n;
      },
    };
  },
  H = (function (e) {
    function n() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      (function (e, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function t() {
          this.constructor = e;
        }
        b(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((t.prototype = n.prototype), new t()));
      })(n, e),
      (n.prototype.getLayer = function (e) {
        return this.options.layerStore.getState().layers[e];
      }),
      (n.prototype.handlers = function () {
        var e = this,
          t = this.derived.options.store,
          r = this.options.layerStore;
        return {
          layer: function (a, o) {
            r.actions.setDOM(o, { dom: a });
            var i = e.inherit(function (e) {
                e.select(a, o), e.hover(a, o), e.drag(a, o);
              }),
              d = e.addCraftEventListener(a, 'mouseover', function (e) {
                e.craft.stopPropagation(),
                  r.actions.setLayerEvent('hovered', o);
              }),
              c = e.addCraftEventListener(a, 'dragover', function (a) {
                a.craft.stopPropagation(), a.preventDefault();
                var o = n.events,
                  i = o.indicator,
                  d = o.currentCanvasHovered;
                if (d && i && d.data.nodes) {
                  var c = e.getLayer(d.id).headingDom.getBoundingClientRect();
                  if (a.clientY > c.top + 10 && a.clientY < c.bottom - 10) {
                    var l = d.data.nodes[d.data.nodes.length - 1];
                    if (!l) return;
                    (n.events.indicator = E(E({}, i), {
                      placement: {
                        currentNode: t.query.node(l).get(),
                        index: d.data.nodes.length,
                        where: 'after',
                        parent: d,
                      },
                      onCanvas: !0,
                    })),
                      r.actions.setIndicator(n.events.indicator);
                  }
                }
              }),
              l = e.addCraftEventListener(a, 'dragenter', function (a) {
                a.craft.stopPropagation(), a.preventDefault();
                var i = n.draggedElement;
                if (i) {
                  var d = t.query.getDropPlaceholder(
                    i,
                    o,
                    { x: a.clientX, y: a.clientY },
                    function (n) {
                      var t = e.getLayer(n.id);
                      return t && t.dom;
                    }
                  );
                  if (d) {
                    var c = d.placement.parent,
                      l = e.getLayer(c.id).headingDom.getBoundingClientRect();
                    if (
                      ((n.events.currentCanvasHovered = null),
                      t.query.node(c.id).isCanvas() && c.data.parent)
                    ) {
                      var s = t.query.node(c.data.parent).get();
                      t.query.node(s.id).isCanvas() &&
                        ((n.events.currentCanvasHovered = c),
                        ((a.clientY > l.bottom - 10 &&
                          !e.getLayer(c.id).expanded) ||
                          a.clientY < l.top + 10) &&
                          ((d.placement.parent = s),
                          (d.placement.currentNode = c),
                          (d.placement.index = s.data.nodes
                            ? s.data.nodes.indexOf(c.id)
                            : 0),
                          a.clientY > l.bottom - 10 &&
                          !e.getLayer(c.id).expanded
                            ? (d.placement.where = 'after')
                            : a.clientY < l.top + 10 &&
                              (d.placement.where = 'before')));
                    }
                    (n.events.indicator = E(E({}, d), { onCanvas: !1 })),
                      r.actions.setIndicator(n.events.indicator);
                  }
                }
              });
            return function () {
              i(), d(), c(), l();
            };
          },
          layerHeader: function (e, n) {
            r.actions.setDOM(n, { headingDom: e });
          },
          drag: function (a, o) {
            a.setAttribute('draggable', 'true');
            var i = e.addCraftEventListener(a, 'dragstart', function (e) {
                e.craft.stopPropagation(), (n.draggedElement = o);
              }),
              d = e.addCraftEventListener(a, 'dragend', function (e) {
                e.craft.stopPropagation();
                var a = n.events;
                if (a.indicator && !a.indicator.error) {
                  var o = a.indicator.placement;
                  t.actions.move(
                    n.draggedElement,
                    o.parent.id,
                    o.index + ('after' === o.where ? 1 : 0)
                  );
                }
                (n.draggedElement = null),
                  (n.events.indicator = null),
                  r.actions.setIndicator(null);
              });
            return function () {
              a.removeAttribute('draggable'), i(), d();
            };
          },
        };
      }),
      (n.events = { indicator: null, currentCanvasHovered: null }),
      n
    );
  })(h),
  _ = function (e) {
    var n = e.children,
      r = k(function (e) {
        return e;
      }),
      a = r.layers,
      i = r.events,
      d = v(function (e) {
        return { enabled: e.options.enabled };
      }).query.getOptions().indicator,
      l = c(
        function () {
          var e = i.indicator;
          if (e) {
            var n = e.placement,
              t = n.where,
              r = n.parent,
              o = n.currentNode,
              c = o ? o.id : r.id,
              l = e.error ? d.error : d.success;
            if (e.onCanvas && null != a[r.id].dom) {
              var s = a[r.id].dom.getBoundingClientRect(),
                u = a[r.id].headingDom.getBoundingClientRect();
              return {
                top: u.top,
                left: s.left,
                width: s.width,
                height: u.height,
                background: 'transparent',
                borderWidth: '1px',
                borderColor: l,
              };
            }
            if (!a[c]) return;
            var p = a[c].headingDom.getBoundingClientRect(),
              f = a[c].dom.getBoundingClientRect();
            return {
              top: 'after' !== t && o ? f.top : f.top + f.height,
              left: p.left,
              width: f.width - p.left,
              height: 2,
              borderWidth: 0,
              background: l,
            };
          }
        },
        [i, d.error, d.success, a]
      );
    return o.createElement(
      'div',
      null,
      i.indicator ? o.createElement(t, { style: l }) : null,
      n
    );
  },
  B = function (e) {
    var n = e.children,
      t = k().store,
      r = m(),
      a = c(
        function () {
          return r.derive(H, { layerStore: t });
        },
        [r, t]
      );
    return o.createElement(
      D.Provider,
      { value: a },
      o.createElement(_, null),
      n
    );
  },
  M = function () {
    var e = j().id,
      n = v(function (n) {
        return {
          displayName:
            n.nodes[e] && n.nodes[e].data.custom.displayName
              ? n.nodes[e].data.custom.displayName
              : n.nodes[e].data.displayName,
          hidden: n.nodes[e] && n.nodes[e].data.hidden,
        };
      }),
      t = n.displayName,
      r = n.actions,
      a = l(!1),
      i = a[0],
      d = a[1],
      c = u(null),
      s = f(function (e) {
        c.current && !c.current.contains(e.target) && d(!1);
      }, []);
    return (
      p(
        function () {
          return function () {
            window.removeEventListener('click', s);
          };
        },
        [s]
      ),
      o.createElement(x, {
        html: t,
        disabled: !i,
        ref: function (e) {
          e &&
            ((c.current = e.el.current),
            window.removeEventListener('click', s),
            window.addEventListener('click', s));
        },
        onChange: function (n) {
          r.setCustom(e, function (e) {
            return (e.displayName = n.target.value);
          });
        },
        tagName: 'h2',
        onDoubleClick: function () {
          i || d(!0);
        },
      })
    );
  };
function R() {
  return (R =
    Object.assign ||
    function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      }
      return e;
    }).apply(this, arguments);
}
var S = o.createElement('path', {
    d:
      'M9.99 1.01A1 1 0 008.283.303L5 3.586 1.717.303A1 1 0 10.303 1.717l3.99 3.98a1 1 0 001.414 0l3.99-3.98a.997.997 0 00.293-.707z',
  }),
  Y = function (e) {
    return o.createElement('svg', R({ viewBox: '0 0 10 6' }, e), S);
  };
function q() {
  return (q =
    Object.assign ||
    function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      }
      return e;
    }).apply(this, arguments);
}
var A = o.createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
  I = o.createElement('path', {
    d:
      'M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 110-6 3 3 0 010 6z',
  }),
  T = function (e) {
    return o.createElement(
      'svg',
      q({ viewBox: '0 0 24 24', width: 16, height: 16 }, e),
      A,
      I
    );
  };
function V() {
  return (V =
    Object.assign ||
    function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      }
      return e;
    }).apply(this, arguments);
}
var W,
  U,
  X,
  F,
  G,
  J,
  K = o.createElement('path', {
    className: 'linked_svg__a',
    d:
      'M16.5 9h-1a.5.5 0 00-.5.5V15H3V3h5.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5z',
  }),
  Q = o.createElement('path', {
    className: 'linked_svg__a',
    d:
      'M16.75 1h-5.373a.4.4 0 00-.377.4.392.392 0 00.117.28l1.893 1.895-3.52 3.521a.5.5 0 000 .707l.706.708a.5.5 0 00.708 0l3.521-3.521 1.893 1.892A.39.39 0 0016.6 7a.4.4 0 00.4-.377V1.25a.25.25 0 00-.25-.25z',
  }),
  Z = function (e) {
    return o.createElement('svg', V({ viewBox: '0 0 18 18' }, e), K, Q);
  },
  $ = y.div(
    W ||
      (W = C(
        [
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 4px 10px;\n  background: ',
          ';\n  color: ',
          ';\n  svg {\n    fill: ',
          ';\n    margin-top: 2px;\n  }\n  .inner {\n    flex: 1;\n    > div {\n      padding: 0px;\n      flex: 1;\n      display: flex;\n      margin-left: ',
          'px;\n      align-items: center;\n      div.layer-name {\n        flex: 1;\n        h2 {\n          font-size: 15px;\n          line-height: 26px;\n        }\n      }\n    }\n  }\n',
        ],
        [
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 4px 10px;\n  background: ',
          ';\n  color: ',
          ';\n  svg {\n    fill: ',
          ';\n    margin-top: 2px;\n  }\n  .inner {\n    flex: 1;\n    > div {\n      padding: 0px;\n      flex: 1;\n      display: flex;\n      margin-left: ',
          'px;\n      align-items: center;\n      div.layer-name {\n        flex: 1;\n        h2 {\n          font-size: 15px;\n          line-height: 26px;\n        }\n      }\n    }\n  }\n',
        ]
      )),
    function (e) {
      return e.selected ? '#2680eb' : 'transparent';
    },
    function (e) {
      return e.selected ? '#fff' : 'inherit';
    },
    function (e) {
      return e.selected ? '#fff' : '#808184';
    },
    function (e) {
      return 10 * e.depth;
    }
  ),
  ee = y.a(
    U ||
      (U = C(
        [
          '\n  width: 8px;\n  height: 8px;\n  display: block;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  transform: rotate(',
          'deg);\n  opacity: 0.7;\n  cursor: pointer;\n  transform-origin: 60% center;\n',
        ],
        [
          '\n  width: 8px;\n  height: 8px;\n  display: block;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  transform: rotate(',
          'deg);\n  opacity: 0.7;\n  cursor: pointer;\n  transform-origin: 60% center;\n',
        ]
      )),
    function (e) {
      return e.expanded ? 180 : 0;
    }
  ),
  ne = y.a(
    X ||
      (X = C(
        [
          '\n  width: 14px;\n  height: 14px;\n  margin-right: 10px;\n  position: relative;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  cursor: pointer;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    opacity: ',
          ";\n  }\n  &:after {\n    content: ' ';\n    width: 2px;\n    height: ",
          '%;\n    position: absolute;\n    left: 2px;\n    top: 3px;\n    background: ',
          ';\n    transform: rotate(-45deg);\n    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n    transform-origin: 0% 0%;\n    opacity: ',
          ';\n  }\n',
        ],
        [
          '\n  width: 14px;\n  height: 14px;\n  margin-right: 10px;\n  position: relative;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  cursor: pointer;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    opacity: ',
          ";\n  }\n  &:after {\n    content: ' ';\n    width: 2px;\n    height: ",
          '%;\n    position: absolute;\n    left: 2px;\n    top: 3px;\n    background: ',
          ';\n    transform: rotate(-45deg);\n    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n    transform-origin: 0% 0%;\n    opacity: ',
          ';\n  }\n',
        ]
      )),
    function (e) {
      return e.isHidden ? 0.2 : 1;
    },
    function (e) {
      return e.isHidden ? 100 : 0;
    },
    function (e) {
      return e.selected ? '#fff' : '#808184';
    },
    function (e) {
      return e.isHidden ? 0.4 : 1;
    }
  ),
  te = y.div(
    F ||
      (F = C(
        [
          '\n  margin-left: -22px;\n  margin-right: 10px;\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n',
        ],
        [
          '\n  margin-left: -22px;\n  margin-right: 10px;\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n',
        ]
      ))
  ),
  re = function () {
    var e = j(function (e) {
        return { expanded: e.expanded };
      }),
      n = e.id,
      t = e.depth,
      r = e.expanded,
      a = e.children,
      i = e.connectors,
      d = i.drag,
      c = i.layerHeader,
      l = e.actions.toggleLayer,
      s = v(function (e, t) {
        var r = t.getEvent('selected').first() === n;
        return {
          hidden: e.nodes[n] && e.nodes[n].data.hidden,
          selected: r,
          topLevel: t.node(n).isTopLevelCanvas(),
        };
      }),
      u = s.hidden,
      p = s.actions,
      f = s.selected,
      g = s.topLevel;
    return o.createElement(
      $,
      { selected: f, ref: d, depth: t },
      o.createElement(
        ne,
        {
          selected: f,
          isHidden: u,
          onClick: function () {
            return p.setHidden(n, !u);
          },
        },
        o.createElement(T, null)
      ),
      o.createElement(
        'div',
        { className: 'inner' },
        o.createElement(
          'div',
          { ref: c },
          g ? o.createElement(te, null, o.createElement(Z, null)) : null,
          o.createElement(
            'div',
            { className: 'layer-name s' },
            o.createElement(M, null)
          ),
          o.createElement(
            'div',
            null,
            a && a.length
              ? o.createElement(
                  ee,
                  {
                    expanded: r,
                    onMouseDown: function () {
                      return l();
                    },
                  },
                  o.createElement(Y, null)
                )
              : null
          )
        )
      )
    );
  },
  ae = y.div(
    G ||
      (G = C(
        [
          '\n  background: ',
          ';\n  display: block;\n  padding-bottom: ',
          'px;\n',
        ],
        [
          '\n  background: ',
          ';\n  display: block;\n  padding-bottom: ',
          'px;\n',
        ]
      )),
    function (e) {
      return e.hovered ? '#f1f1f1' : 'transparent';
    },
    function (e) {
      return e.hasCanvases && e.expanded ? 5 : 0;
    }
  ),
  oe = y.div(
    J ||
      (J = C(
        [
          '\n  margin: 0 0 0 ',
          'px;\n  background: ',
          ';\n  position: relative;\n\n  ',
          '\n',
        ],
        [
          '\n  margin: 0 0 0 ',
          'px;\n  background: ',
          ';\n  position: relative;\n\n  ',
          '\n',
        ]
      )),
    function (e) {
      return e.hasCanvases ? 35 : 0;
    },
    function (e) {
      return e.hasCanvases ? 'rgba(255, 255, 255, 0.02)' : 'transparent';
    },
    function (e) {
      return e.hasCanvases
        ? '\n  \n  box-shadow: 0px 0px 44px -1px #00000014;\n  border-radius: 10px;\n  margin-right: 5px;\n  margin-bottom:5px;\n  margin-top:5px; \n  > * { overflow:hidden; }\n    &:before { \n      position:absolute;\n      left:-19px;\n      width: 2px;\n      height:100%;\n      content: " ";\n      background:#00000012;\n    }\n  '
        : '';
    }
  ),
  ie = function (e) {
    var n = e.children,
      t = j(function (e) {
        return { hovered: e.event.hovered, expanded: e.expanded };
      }),
      r = t.id,
      a = t.expanded,
      i = t.hovered,
      d = t.connectors.layer,
      c = v(function (e, n) {
        return { hasChildCanvases: n.node(r).isParentOfTopLevelNodes() };
      }).hasChildCanvases;
    return o.createElement(
      ae,
      { ref: d, expanded: a, hasCanvases: c, hovered: i },
      o.createElement(re, null),
      n
        ? o.createElement(
            oe,
            { hasCanvases: c, className: 'craft-layer-children' },
            n
          )
        : null
    );
  },
  de = function (e) {
    var n = e.children,
      t = r(z, {
        layers: {},
        events: { selected: null, dragged: null, hovered: null },
        options: E({ renderLayer: ie }, e.options),
      });
    return o.createElement(
      L.Provider,
      { value: { store: t } },
      o.createElement(B, null, n)
    );
  },
  ce = function (e) {
    var n = w(e, []);
    return o.createElement(
      de,
      { options: n },
      o.createElement(N, { id: a, depth: 0 })
    );
  };
export { ce as Layers, j as useLayer };
