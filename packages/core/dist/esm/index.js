import {
  ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT as e,
  useCollector as t,
  wrapConnectorHooks as n,
  ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT as r,
  deprecationWarning as o,
  useEffectOnce as i,
  ERROR_TOP_LEVEL_ELEMENT_NO_ID as a,
  ROOT_NODE as d,
  ERROR_INVALID_NODEID as s,
  ERROR_DELETE_TOP_LEVEL_NODE as c,
  ERROR_NOPARENT as u,
  DEPRECATED_ROOT_NODE as l,
  ERROR_NOT_IN_RESOLVER as p,
  ERROR_INVALID_NODE_ID as f,
  ERROR_MOVE_TOP_LEVEL_NODE as v,
  ERROR_MOVE_NONCANVAS_CHILD as h,
  ERROR_CANNOT_DRAG as g,
  ERROR_MOVE_TO_NONCANVAS_PARENT as y,
  ERROR_MOVE_INCOMING_PARENT as m,
  ERROR_MOVE_CANNOT_DROP as N,
  ERROR_MOVE_TO_DESCENDANT as E,
  ERROR_DUPLICATE_NODEID as O,
  ERROR_MOVE_OUTGOING_PARENT as b,
  getRandomId as C,
  ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER as I,
  getDOMInfo as T,
  EventHandlers as k,
  DerivedEventHandlers as w,
  isChromium as x,
  isLinux as D,
  RenderIndicator as S,
  useMethods as j,
  ERROR_RESOLVER_NOT_AN_OBJECT as q,
  HISTORY_ACTIONS as P,
} from 'craftjs-utils-meetovo';
export { ROOT_NODE } from 'craftjs-utils-meetovo';
import R, {
  createContext as L,
  useContext as A,
  useMemo as F,
  useEffect as _,
  useState as z,
  useRef as M,
  Children as H,
  Fragment as B,
} from 'react';
import U from 'tiny-invariant';
import { isFunction as W, pickBy as J } from 'lodash';
import X from 'lodash/cloneDeep';
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
***************************************************************************** */ var Y = function (
  e,
  t
) {
  return (Y =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    })(e, t);
};
function G(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    );
  function n() {
    this.constructor = e;
  }
  Y(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var K = function () {
  return (K =
    Object.assign ||
    function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    }).apply(this, arguments);
};
function V(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
function Q() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  var r = Array(e),
    o = 0;
  for (t = 0; t < n; t++)
    for (var i = arguments[t], a = 0, d = i.length; a < d; a++, o++)
      r[o] = i[a];
  return r;
}
var Z = R.createContext(null),
  $ = function (e) {
    var t = e.related;
    return R.createElement(
      Z.Provider,
      { value: { id: e.id, related: void 0 !== t && t } },
      e.children
    );
  },
  ee = L(null),
  te = L(null),
  ne = function () {
    return A(te);
  };
function re(r) {
  var o = ne(),
    i = A(ee);
  U(i, e);
  var a = t(i, r),
    d = F(
      function () {
        return o && o.createConnectorsUsage();
      },
      [o]
    );
  _(
    function () {
      return function () {
        d && d.cleanup();
      };
    },
    [d]
  );
  var s = F(
    function () {
      return d && n(d.connectors);
    },
    [d]
  );
  return K(K({}, a), { connectors: s, inContext: !!i, store: i });
}
function oe(e) {
  var t = A(Z);
  U(t, r);
  var o = t.id,
    i = t.related,
    a = re(function (t) {
      return o && t.nodes[o] && e && e(t.nodes[o]);
    }),
    d = a.actions,
    s = a.connectors,
    c = V(a, ['actions', 'query', 'connectors']),
    u = F(
      function () {
        return n({
          connect: function (e) {
            return s.connect(e, o);
          },
          drag: function (e) {
            return s.drag(e, o);
          },
        });
      },
      [s, o]
    ),
    l = F(
      function () {
        return {
          setProp: function (e, t) {
            t ? d.history.throttle(t).setProp(o, e) : d.setProp(o, e);
          },
          setCustom: function (e, t) {
            t ? d.history.throttle(t).setCustom(o, e) : d.setCustom(o, e);
          },
          setHidden: function (e) {
            return d.setHidden(o, e);
          },
        };
      },
      [d, o]
    );
  return K(K({}, c), {
    id: o,
    related: i,
    inNodeContext: !!t,
    actions: l,
    connectors: u,
  });
}
function ie(e) {
  var t = oe(e),
    n = t.id,
    r = t.related,
    i = t.actions,
    a = t.inNodeContext,
    d = t.connectors,
    s = V(t, ['id', 'related', 'actions', 'inNodeContext', 'connectors']);
  return K(K({}, s), {
    actions: i,
    id: n,
    related: r,
    setProp: function (e, t) {
      return (
        o('useNode().setProp()', { suggest: 'useNode().actions.setProp()' }),
        i.setProp(e, t)
      );
    },
    inNodeContext: a,
    connectors: d,
  });
}
var ae = function (e) {
    var t = e.render,
      n = ie().connectors;
    return 'string' == typeof t.type
      ? (0, n.connect)((0, n.drag)(R.cloneElement(t)))
      : t;
  },
  de = function () {
    var e = oe(function (e) {
        return {
          type: e.data.type,
          props: e.data.props,
          nodes: e.data.nodes,
          hydrationTimestamp: e._hydrationTimestamp,
        };
      }),
      t = e.type,
      n = e.props,
      r = e.nodes;
    return F(
      function () {
        var e = n.children;
        r &&
          r.length > 0 &&
          (e = R.createElement(
            R.Fragment,
            null,
            r.map(function (e) {
              return R.createElement(ce, { id: e, key: e });
            })
          ));
        var o = R.createElement(t, n, e);
        return 'string' == typeof t ? R.createElement(ae, { render: o }) : o;
      },
      [t, n, e.hydrationTimestamp, r]
    );
  },
  se = function (e) {
    var t = e.render,
      n = oe(function (e) {
        return { hidden: e.data.hidden };
      }).hidden,
      r = re(function (e) {
        return { onRender: e.options.onRender };
      }).onRender;
    return n
      ? null
      : R.createElement(r, { render: t || R.createElement(de, null) });
  },
  ce = function (e) {
    return R.createElement(
      $,
      { id: e.id },
      R.createElement(se, { render: e.render })
    );
  },
  ue = { is: 'div', canvas: !1, custom: {}, hidden: !1 },
  le = { is: 'type', canvas: 'isCanvas' };
function pe(e) {
  var t = e.id,
    n = e.children,
    r = V(e, ['id', 'children']),
    o = K(K({}, ue), r).is,
    d = re(),
    s = d.query,
    c = d.actions,
    u = oe(function (e) {
      return { node: { id: e.id, data: e.data } };
    }),
    l = u.node,
    p = u.inNodeContext,
    f = z(null),
    v = f[0],
    h = f[1];
  return (
    i(function () {
      U(!!t, a);
      var e = l.id,
        i = l.data;
      if (p) {
        var d,
          u =
            i.linkedNodes && i.linkedNodes[t] && s.node(i.linkedNodes[t]).get();
        if (u && u.data.type === o) d = u.id;
        else {
          var f = R.createElement(pe, r, n),
            v = s.parseReactElement(f).toNodeTree();
          (d = v.rootNodeId), c.history.ignore().addLinkedNodeFromTree(v, e, t);
        }
        h(d);
      }
    }),
    v ? R.createElement(ce, { id: v }) : null
  );
}
var fe = function () {
  return o('<Canvas />', { suggest: '<Element canvas={true} />' });
};
function Canvas(e) {
  var t = V(e, []);
  return (
    _(function () {
      return fe();
    }, []),
    R.createElement(pe, K({}, t, { canvas: !0 }))
  );
}
var ve,
  he = function () {
    var e = re(function (e) {
      return { timestamp: e.nodes[d] && e.nodes[d]._hydrationTimestamp };
    }).timestamp;
    return e ? R.createElement(ce, { id: d, key: e }) : null;
  },
  ge = function (e) {
    var t = e.children,
      n = e.json,
      r = e.data,
      i = re(),
      a = i.actions,
      s = i.query;
    n && o('<Frame json={...} />', { suggest: '<Frame data={...} />' });
    var c = M({ initialChildren: t, initialData: r || n });
    return (
      _(
        function () {
          var e = c.current,
            t = e.initialChildren,
            n = e.initialData;
          if (n) a.history.ignore().deserialize(n);
          else if (t) {
            var r = R.Children.only(t),
              o = s.parseReactElement(r).toNodeTree(function (e, t) {
                return t === r && (e.id = d), e;
              });
            a.history.ignore().addNodeTree(o);
          }
        },
        [a, s]
      ),
      R.createElement(he, null)
    );
  };
!(function (e) {
  (e[(e.Any = 0)] = 'Any'), (e[(e.Id = 1)] = 'Id'), (e[(e.Obj = 2)] = 'Obj');
})(ve || (ve = {}));
var ye = function (e) {
  return V(e, [
    'addLinkedNodeFromTree',
    'setDOM',
    'setNodeEvent',
    'replaceNodes',
    'reset',
  ]);
};
function me(e) {
  var t = re(e),
    n = t.connectors,
    r = t.actions,
    o = V(t.query, ['deserialize']),
    i = t.store,
    a = V(t, ['connectors', 'actions', 'query', 'store']),
    d = ye(r),
    s = F(
      function () {
        return K(K({}, d), {
          history: K(K({}, d.history), {
            ignore: function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return ye((e = d.history).ignore.apply(e, t));
            },
            throttle: function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return ye((e = d.history).throttle.apply(e, t));
            },
          }),
        });
      },
      [d]
    );
  return K({ connectors: n, actions: s, query: o, store: i }, a);
}
function Ne(e) {
  return function (t) {
    return function (n) {
      var r = e ? me(e) : me();
      return R.createElement(t, K({}, r, n));
    };
  };
}
function Ee(e) {
  return function (t) {
    return function (n) {
      var r = ie(e);
      return R.createElement(t, K({}, r, n));
    };
  };
}
var Oe = function (e) {
    return Object.fromEntries
      ? Object.fromEntries(e)
      : e.reduce(function (e, t) {
          var n,
            r = t[0],
            o = t[1];
          return K(K({}, e), (((n = {})[r] = o), n));
        }, {});
  },
  be = function (e, t, n, r) {
    var o = Array.isArray(t) ? t : [t],
      i = K({ existOnly: !1, idOnly: !1 }, n || {}),
      a = o
        .filter(function (e) {
          return !!e;
        })
        .map(function (t) {
          return 'string' == typeof t
            ? { node: e[t], exists: !!e[t] }
            : 'object' != typeof t || i.idOnly
            ? { node: null, exists: !1 }
            : { node: t, exists: !!e[t.id] };
        });
    return (
      i.existOnly &&
        0 !==
          a.filter(function (e) {
            return !e.exists;
          }).length &&
        ((window.letExistingExceptionThrough = !0),
        U(!1, s + '-Failed to fetch nodes-' + (r || ''))),
      a
    );
  },
  Ce = function (e, t) {
    var n = t.name || t.displayName,
      r = (function () {
        if (e[n]) return n;
        for (var r = 0; r < Object.keys(e).length; r++) {
          var o = Object.keys(e)[r];
          if (e[o] === t) return o;
        }
        return 'string' == typeof t ? t : void 0;
      })();
    return U(r, p.replace('%node_type%', n)), r;
  },
  Ie = function (e, t) {
    return 'string' == typeof e ? e : { resolvedName: Ce(t, e) };
  },
  Te = function (e, t) {
    var n = e.type,
      r = e.isCanvas,
      o = e.props;
    return (
      (o = Object.keys(o).reduce(function (e, n) {
        var r = o[n];
        return null == r
          ? e
          : ((e[n] =
              'children' === n && 'string' != typeof r
                ? H.map(r, function (e) {
                    return 'string' == typeof e ? e : Te(e, t);
                  })
                : r.type
                ? Te(r, t)
                : r),
            e);
      }, {})),
      { type: Ie(n, t), isCanvas: !!r, props: o }
    );
  },
  ke = function (e, t) {
    var n = e.type,
      r = e.props,
      o = e.isCanvas,
      i = V(e, ['type', 'props', 'isCanvas', 'name']),
      a = Te({ type: n, isCanvas: o, props: r }, t);
    return K(K({}, a), i);
  };
function we(e, t) {
  U('string' == typeof t, f);
  var n = e.nodes[t],
    r = function (t) {
      return we(e, t);
    };
  return {
    isCanvas: function () {
      return !!n.data.isCanvas;
    },
    isRoot: function () {
      return n.id === d;
    },
    isLinkedNode: function () {
      return n.data.parent && r(n.data.parent).linkedNodes().includes(n.id);
    },
    isTopLevelNode: function () {
      return this.isRoot() || this.isLinkedNode();
    },
    isDeletable: function () {
      return !this.isTopLevelNode();
    },
    isParentOfTopLevelNodes: function () {
      return n.data.linkedNodes && Object.keys(n.data.linkedNodes).length > 0;
    },
    isParentOfTopLevelCanvas: function () {
      return (
        o('query.node(id).isParentOfTopLevelCanvas', {
          suggest: 'query.node(id).isParentOfTopLevelNodes',
        }),
        this.isParentOfTopLevelNodes()
      );
    },
    isSelected: function () {
      return e.events.selected.has(t);
    },
    isHovered: function () {
      return e.events.hovered.has(t);
    },
    isDragged: function () {
      return e.events.dragged.has(t);
    },
    get: function () {
      return n;
    },
    ancestors: function (t) {
      return (
        void 0 === t && (t = !1),
        (function n(r, o, i) {
          void 0 === o && (o = []), void 0 === i && (i = 0);
          var a = e.nodes[r];
          return a
            ? (o.push(r),
              a.data.parent
                ? ((t || (!t && 0 === i)) && (o = n(a.data.parent, o, i + 1)),
                  o)
                : o)
            : o;
        })(n.data.parent)
      );
    },
    descendants: function (n, o) {
      return (
        void 0 === n && (n = !1),
        (function t(i, a, d) {
          return (
            void 0 === a && (a = []),
            void 0 === d && (d = 0),
            (n || (!n && 0 === d)) && e.nodes[i]
              ? ('childNodes' !== o &&
                  r(i)
                    .linkedNodes()
                    .forEach(function (e) {
                      a.push(e), (a = t(e, a, d + 1));
                    }),
                'linkedNodes' !== o &&
                  r(i)
                    .childNodes()
                    .forEach(function (e) {
                      a.push(e), (a = t(e, a, d + 1));
                    }),
                a)
              : a
          );
        })(t)
      );
    },
    linkedNodes: function () {
      return Object.values(n.data.linkedNodes || {});
    },
    childNodes: function () {
      return n.data.nodes || [];
    },
    isDraggable: function (t) {
      try {
        var o = n;
        return (
          U(!this.isTopLevelNode(), v),
          U(we(e, o.data.parent).isCanvas(), h),
          U(o.rules.canDrag(o, r), g),
          !0
        );
      } catch (e) {
        return t && t(e), !1;
      }
    },
    isDroppable: function (t, o) {
      var i = be(e.nodes, t),
        a = n;
      try {
        U(this.isCanvas(), y),
          U(
            a.rules.canMoveIn(
              i.map(function (e) {
                return e.node;
              }),
              a,
              r
            ),
            m
          );
        var d = {};
        return (
          i.forEach(function (t) {
            var n = t.node,
              o = t.exists;
            if ((U(n.rules.canDrop(a, n, r), N), o)) {
              U(!r(n.id).isTopLevelNode(), v);
              var i = r(n.id).descendants(!0);
              U(!i.includes(a.id) && a.id !== n.id, E);
              var s = n.data.parent && e.nodes[n.data.parent];
              U(s.data.isCanvas, h),
                U(s || (!s && !e.nodes[n.id]), O),
                s.id !== a.id && (d[s.id] || (d[s.id] = []), d[s.id].push(n));
            }
          }),
          Object.keys(d).forEach(function (t) {
            var n = e.nodes[t];
            U(n.rules.canMoveOut(d[t], n, r), b);
          }),
          !0
        );
      } catch (e) {
        return o && o(e), !1;
      }
    },
    toSerializedNode: function () {
      return ke(n.data, e.options.resolver);
    },
    toNodeTree: function (e) {
      var n = Q([t], this.descendants(!0, e)).reduce(function (e, t) {
        return (e[t] = r(t).get()), e;
      }, {});
      return { rootNodeId: t, nodes: n };
    },
    decendants: function (e) {
      return (
        void 0 === e && (e = !1),
        o('query.node(id).decendants', {
          suggest: 'query.node(id).descendants',
        }),
        this.descendants(e)
      );
    },
    isTopLevelCanvas: function () {
      return !this.isRoot() && !n.data.parent;
    },
  };
}
function xe(e, t, n, r) {
  for (
    var o = { parent: e, index: 0, where: 'before' },
      i = 0,
      a = 0,
      d = 0,
      s = 0,
      c = 0,
      u = 0,
      l = 0,
      p = t.length;
    l < p;
    l++
  ) {
    var f = t[l];
    if (
      ((u = f.top + f.outerHeight),
      (s = f.left + f.outerWidth / 2),
      (c = f.top + f.outerHeight / 2),
      !((a && f.left > a) || (d && c >= d) || (i && f.left + f.outerWidth < i)))
    )
      if (((o.index = l), f.inFlow)) {
        if (r < c) {
          o.where = 'before';
          break;
        }
        o.where = 'after';
      } else
        r < u && (d = u),
          n < s
            ? ((a = s), (o.where = 'before'))
            : ((i = s), (o.where = 'after'));
  }
  return o;
}
var De = function (e) {
  return 'string' == typeof e ? e : e.name;
};
function Se(e, t) {
  var n = e.data.type,
    r = {
      id: e.id || C(),
      _hydrationTimestamp: Date.now(),
      data: K(
        {
          type: n,
          name: De(n),
          displayName: De(n),
          props: {},
          custom: {},
          parent: null,
          isCanvas: !1,
          hidden: !1,
          nodes: [],
          linkedNodes: {},
        },
        e.data
      ),
      related: {},
      events: { selected: !1, dragged: !1, hovered: !1 },
      rules: {
        canDrag: function () {
          return !0;
        },
        canDrop: function () {
          return !0;
        },
        canMoveIn: function () {
          return !0;
        },
        canMoveOut: function () {
          return !0;
        },
      },
      dom: null,
    };
  if (r.data.type === pe || r.data.type === Canvas) {
    var o = K(K({}, ue), r.data.props);
    (r.data.props = Object.keys(r.data.props).reduce(function (e, t) {
      return (
        Object.keys(ue).includes(t)
          ? (r.data[le[t] || t] = o[t])
          : (e[t] = r.data.props[t]),
        e
      );
    }, {})),
      (r.data.name = De((n = r.data.type))),
      (r.data.displayName = De(n)),
      r.data.type === Canvas && ((r.data.isCanvas = !0), fe());
  }
  t && t(r);
  var i = n.craft;
  if (
    i &&
    ((r.data.displayName = i.displayName || i.name || r.data.displayName),
    (r.data.props = K(K({}, i.props || i.defaultProps || {}), r.data.props)),
    (r.data.custom = K(K({}, i.custom || {}), r.data.custom)),
    null != i.isCanvas && (r.data.isCanvas = i.isCanvas),
    i.rules &&
      Object.keys(i.rules).forEach(function (e) {
        ['canDrag', 'canDrop', 'canMoveIn', 'canMoveOut'].includes(e) &&
          (r.rules[e] = i.rules[e]);
      }),
    i.related)
  ) {
    var a = { id: r.id, related: !0 };
    Object.keys(i.related).forEach(function (e) {
      r.related[e] = function () {
        return R.createElement($, a, R.createElement(i.related[e]));
      };
    });
  }
  return r;
}
var je = function (e, t, n) {
    var r = e.props,
      o = (function (e, t) {
        return 'object' == typeof e && e.resolvedName
          ? 'Canvas' === e.resolvedName
            ? Canvas
            : t[e.resolvedName]
          : 'string' == typeof e
          ? e
          : null;
      })(e.type, t);
    if (o) {
      r = Object.keys(r).reduce(function (e, n) {
        var o = r[n];
        return (
          (e[n] =
            null == o
              ? null
              : 'object' == typeof o && o.resolvedName
              ? je(o, t)
              : 'children' === n && Array.isArray(o)
              ? o.map(function (e) {
                  return 'string' == typeof e ? e : je(e, t);
                })
              : o),
          e
        );
      }, {});
      var i = K({}, R.createElement(o, K({}, r)));
      return K(K({}, i), { name: Ce(t, i.type) });
    }
  },
  qe = function (e, t) {
    var n = e.type,
      r = V(e, ['type', 'props']);
    U(
      (void 0 !== n && 'string' == typeof n) ||
        (void 0 !== n && void 0 !== n.resolvedName),
      I.replace('%displayName%', e.displayName).replace(
        '%availableComponents%',
        Object.keys(t).join(', ')
      )
    );
    var o = je(e, t),
      i = o.name;
    return {
      type: o.type,
      name: i,
      displayName: r.displayName || i,
      props: o.props,
      custom: r.custom || {},
      isCanvas: !!r.isCanvas,
      hidden: !!r.hidden,
      parent: r.parent,
      linkedNodes: r.linkedNodes || r._childCanvas || {},
      nodes: r.nodes || [],
    };
  },
  Pe = function (e, t) {
    var n, r;
    if (t.length < 1) return ((n = {})[e.id] = e), n;
    var o = t.map(function (e) {
        return e.rootNodeId;
      }),
      i = K(K({}, e), { data: K(K({}, e.data), { nodes: o }) }),
      a = (((r = {})[e.id] = i), r);
    return t.reduce(function (t, n) {
      var r,
        o = n.nodes[n.rootNodeId];
      return K(
        K(K({}, t), n.nodes),
        (((r = {})[o.id] = K(K({}, o), {
          data: K(K({}, o.data), { parent: e.id }),
        })),
        r)
      );
    }, a);
  },
  Re = function (e, t) {
    return { rootNodeId: e.id, nodes: Pe(e, t) };
  };
function Le(e) {
  var t = e && e.options,
    n = function () {
      return Le(e);
    };
  return {
    getDropPlaceholder: function (t, r, o, i) {
      void 0 === i &&
        (i = function (t) {
          return e.nodes[t.id].dom;
        });
      var a = e.nodes[r],
        d = n().node(a.id).isCanvas() ? a : e.nodes[a.data.parent];
      if (d) {
        var s = d.data.nodes || [],
          c = xe(
            d,
            s
              ? s.reduce(function (t, n) {
                  var r = i(e.nodes[n]);
                  if (r) {
                    var o = K({ id: n }, T(r));
                    t.push(o);
                  }
                  return t;
                }, [])
              : [],
            o.x,
            o.y
          ),
          u = s.length && e.nodes[s[c.index]],
          l = { placement: K(K({}, c), { currentNode: u }), error: null };
        return (
          be(e.nodes, t).forEach(function (e) {
            var t = e.node;
            e.exists &&
              n()
                .node(t.id)
                .isDraggable(function (e) {
                  return (l.error = e);
                });
          }),
          n()
            .node(d.id)
            .isDroppable(t, function (e) {
              return (l.error = e);
            }),
          l
        );
      }
    },
    getOptions: function () {
      return t;
    },
    getNodes: function () {
      return e.nodes;
    },
    node: function (t) {
      return we(e, t);
    },
    getSerializedNodes: function () {
      var t = this,
        n = Object.keys(e.nodes).map(function (e) {
          return [e, t.node(e).toSerializedNode()];
        });
      return Oe(n);
    },
    getEvent: function (t) {
      return (function (e, t) {
        var n = e.events[t];
        return {
          contains: function (e) {
            return n.has(e);
          },
          isEmpty: function () {
            return 0 === this.all().length;
          },
          first: function () {
            return this.all()[0];
          },
          last: function () {
            var e = this.all();
            return e[e.length - 1];
          },
          all: function () {
            return Array.from(n);
          },
          size: function () {
            return this.all().length;
          },
          at: function (e) {
            return this.all()[e];
          },
          raw: function () {
            return n;
          },
        };
      })(e, t);
    },
    serialize: function () {
      return JSON.stringify(this.getSerializedNodes());
    },
    parseReactElement: function (t) {
      return {
        toNodeTree: function (r) {
          var o = (function (e, t) {
              var n = e;
              return (
                'string' == typeof n && (n = R.createElement(B, {}, n)),
                Se({ data: { type: n.type, props: K({}, n.props) } }, function (
                  e
                ) {
                  t && t(e, n);
                })
              );
            })(t, function (t, n) {
              var o = Ce(e.options.resolver, t.data.type);
              (t.data.displayName = t.data.displayName || o),
                (t.data.name = o),
                r && r(t, n);
            }),
            i = [];
          return (
            t.props &&
              t.props.children &&
              (i = R.Children.toArray(t.props.children).reduce(function (e, t) {
                return (
                  R.isValidElement(t) &&
                    e.push(n().parseReactElement(t).toNodeTree(r)),
                  e
                );
              }, [])),
            Re(o, i)
          );
        },
      };
    },
    parseSerializedNode: function (t) {
      return {
        toNode: function (r) {
          var i = qe(t, e.options.resolver);
          U(i.type, p);
          var a = 'string' == typeof r && r;
          return (
            a &&
              o('query.parseSerializedNode(...).toNode(id)', {
                suggest:
                  'query.parseSerializedNode(...).toNode(node => node.id = id)',
              }),
            n()
              .parseFreshNode(K(K({}, a ? { id: a } : {}), { data: i }))
              .toNode(!a && r)
          );
        },
      };
    },
    parseFreshNode: function (t) {
      return {
        toNode: function (n) {
          return Se(t, function (t) {
            t.data.parent === l && (t.data.parent = d);
            var r = Ce(e.options.resolver, t.data.type);
            U(null !== r, p),
              (t.data.displayName = t.data.displayName || r),
              (t.data.name = r),
              n && n(t);
          });
        },
      };
    },
    createNode: function (e, t) {
      o('query.createNode(' + e + ')', {
        suggest: 'query.parseReactElement(' + e + ').toNodeTree()',
      });
      var n = this.parseReactElement(e).toNodeTree(),
        r = n.nodes[n.rootNodeId];
      return t
        ? (t.id && (r.id = t.id),
          t.data && (r.data = K(K({}, r.data), t.data)),
          r)
        : r;
    },
    getState: function () {
      return e;
    },
  };
}
var Ae = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      G(t, e),
      (t.prototype.handlers = function () {
        return {
          connect: function (e, t) {},
          select: function (e, t) {},
          hover: function (e, t) {},
          drag: function (e, t) {},
          drop: function (e, t) {},
          create: function (e, t, n) {},
        };
      }),
      t
    );
  })(k),
  Fe = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return G(t, e), t;
  })(w),
  _e = (function () {
    function e(e, t) {
      (this.store = e),
        (this.dragTarget = t),
        (this.currentIndicator = null),
        (this.currentDropTargetId = null),
        (this.currentDropTargetCanvasAncestorId = null),
        (this.currentTargetId = null),
        (this.currentTargetChildDimensions = null),
        (this.currentIndicator = null),
        (this.dragError = null),
        (this.draggedNodes = this.getDraggedNodes()),
        this.validateDraggedNodes(),
        (this.onScrollListener = this.onScroll.bind(this)),
        window.addEventListener('scroll', this.onScrollListener, !0);
    }
    return (
      (e.prototype.cleanup = function () {
        window.removeEventListener('scroll', this.onScrollListener, !0);
      }),
      (e.prototype.onScroll = function (e) {
        var t = e.target,
          n = this.store.query.node(d).get();
        t instanceof Element &&
          n &&
          n.dom &&
          t.contains(n.dom) &&
          (this.currentTargetChildDimensions = null);
      }),
      (e.prototype.getDraggedNodes = function () {
        return be(
          this.store.query.getNodes(),
          'new' === this.dragTarget.type
            ? this.dragTarget.tree.nodes[this.dragTarget.tree.rootNodeId]
            : this.dragTarget.nodes
        );
      }),
      (e.prototype.validateDraggedNodes = function () {
        var e = this;
        'new' !== this.dragTarget.type &&
          this.draggedNodes.forEach(function (t) {
            t.exists &&
              e.store.query.node(t.node.id).isDraggable(function (t) {
                e.dragError = t;
              });
          });
      }),
      (e.prototype.isNearBorders = function (t, n, r) {
        return (
          t.top + e.BORDER_OFFSET > r ||
          t.bottom - e.BORDER_OFFSET < r ||
          t.left + e.BORDER_OFFSET > n ||
          t.right - e.BORDER_OFFSET < n
        );
      }),
      (e.prototype.isDiff = function (e) {
        return (
          !this.currentIndicator ||
          this.currentIndicator.placement.parent.id !== e.parent.id ||
          this.currentIndicator.placement.index !== e.index ||
          this.currentIndicator.placement.where !== e.where
        );
      }),
      (e.prototype.getChildDimensions = function (e) {
        var t = this,
          n = this.currentTargetChildDimensions;
        return this.currentTargetId === e.id && n
          ? n
          : e.data.nodes.reduce(function (e, n) {
              var r = t.store.query.node(n).get().dom;
              return r && e.push(K({ id: n }, T(r))), e;
            }, []);
      }),
      (e.prototype.isIndicatorUpdateRequired = function (e, t) {
        var n = 'Footer' === t.data.displayName ? 'after' : 'before';
        return 'Footer' === t.data.displayName
          ? e.id === d && this.currentIndicator
            ? this.currentIndicator.placement &&
              this.currentIndicator.placement.currentNode &&
              (this.currentIndicator.error ||
                this.currentIndicator.placement.where !== n)
            : 'Footer' === t.data.displayName
          : e.id === d &&
              this.currentIndicator &&
              this.currentIndicator.placement &&
              (!e.data.nodes.includes(
                this.currentIndicator.placement.parent.id
              ) ||
                this.currentIndicator.error ||
                this.currentIndicator.placement.where !== n);
      }),
      (e.prototype.shouldUpdateIndicator = function (e, t) {
        return (
          e.id === d &&
          this.currentIndicator &&
          this.currentIndicator.placement &&
          e.data.nodes.includes(t.id)
        );
      }),
      (e.prototype.getNewIndicatorPosition = function (e, t) {
        var n = 'Footer' === t.data.displayName ? 'after' : 'before',
          r = 0,
          o = this.store.query.node(e.data.nodes[1]).get(),
          i = o;
        return (
          'after' === n &&
            o.data.nodes.length > 0 &&
            ((i = this.store.query
              .node(o.data.nodes[o.data.nodes.length - 1])
              .get()),
            (r = o.data.nodes.length - 1)),
          (this.currentIndicator = {
            placement: K(K({}, { index: r, parent: o, where: n }), {
              currentNode: i,
            }),
            error: null,
          }),
          this.currentIndicator
        );
      }),
      (e.prototype.getCanvasAncestor = function (e) {
        var t = this;
        if (
          e === this.currentDropTargetId &&
          this.currentDropTargetCanvasAncestorId
        ) {
          var n = this.store.query
            .node(this.currentDropTargetCanvasAncestorId)
            .get();
          if (n) return n;
        }
        var r = function (e) {
          var n = t.store.query.node(e).get();
          return n && n.data.isCanvas
            ? n
            : n.data.parent
            ? r(n.data.parent)
            : null;
        };
        return r(e);
      }),
      (e.prototype.computeIndicator = function (e, t, n) {
        var r = this.getCanvasAncestor(e);
        if (
          r &&
          ((this.currentDropTargetId = e),
          (this.currentDropTargetCanvasAncestorId = r.id),
          r.data.parent &&
            this.isNearBorders(T(r.dom), t, n) &&
            !this.store.query.node(r.id).isLinkedNode() &&
            (r = this.store.query.node(r.data.parent).get()),
          r)
        ) {
          (this.currentTargetChildDimensions = this.getChildDimensions(r)),
            (this.currentTargetId = r.id);
          var o = xe(r, this.currentTargetChildDimensions, t, n),
            i = this.store.query.node(this.currentDropTargetId).get();
          if (!this.isDiff(o))
            return this.isIndicatorUpdateRequired(r, i)
              ? this.getNewIndicatorPosition(r, i)
              : void 0;
          if (this.isIndicatorUpdateRequired(r, i))
            return this.getNewIndicatorPosition(r, i);
          if (!this.shouldUpdateIndicator(r, i)) {
            var a = this.dragError;
            a ||
              this.store.query.node(r.id).isDroppable(
                this.draggedNodes.map(function (e) {
                  return e.node;
                }),
                function (e) {
                  a = e;
                }
              );
            var d = r.data.nodes[o.index],
              s = d && this.store.query.node(d).get();
            return (
              (this.currentIndicator = {
                placement: K(K({}, o), { currentNode: s }),
                error: a,
              }),
              this.currentIndicator
            );
          }
        }
      }),
      (e.prototype.getIndicator = function () {
        return this.currentIndicator;
      }),
      (e.BORDER_OFFSET = 10),
      e
    );
  })(),
  ze = function (e, t, n) {
    if ((void 0 === n && (n = !1), 1 === t.length || n)) {
      var r = t[0].getBoundingClientRect(),
        o = r.width,
        i = r.height,
        a = t[0].cloneNode(!0);
      return (
        (a.style.position = 'fixed'),
        (a.style.left = '-100%'),
        (a.style.top = '-100%'),
        (a.style.width = o + 'px'),
        (a.style.height = i + 'px'),
        (a.style.pointerEvents = 'none'),
        document.body.appendChild(a),
        e.dataTransfer.setDragImage(a, 0, 0),
        a
      );
    }
    var d = document.createElement('div');
    return (
      (d.style.position = 'fixed'),
      (d.style.left = '-100%'),
      (d.style.top = '-100%'),
      (d.style.width = '100%'),
      (d.style.height = '100%'),
      (d.style.pointerEvents = 'none'),
      t.forEach(function (e) {
        var t = e.getBoundingClientRect(),
          n = t.width,
          r = t.height,
          o = t.top,
          i = t.left,
          a = e.cloneNode(!0);
        (a.style.position = 'absolute'),
          (a.style.left = i + 'px'),
          (a.style.top = o + 'px'),
          (a.style.width = n + 'px'),
          (a.style.height = r + 'px'),
          d.appendChild(a);
      }),
      document.body.appendChild(d),
      e.dataTransfer.setDragImage(d, e.clientX, e.clientY),
      d
    );
  },
  Me = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.positioner = null), (t.currentSelectedElementIds = []), t;
    }
    return (
      G(t, e),
      (t.prototype.onDisable = function () {
        this.options.store.actions.clearEvents();
      }),
      (t.prototype.handlers = function () {
        var e = this,
          n = this.options.store;
        return {
          connect: function (t, r) {
            return (
              n.actions.setDOM(r, t),
              e.reflect(function (e) {
                e.select(t, r), e.hover(t, r), e.drop(t, r);
              })
            );
          },
          select: function (t, r) {
            var o = e.addCraftEventListener(t, 'mousedown', function (t) {
                t.craft.stopPropagation();
                var o = [];
                if (r) {
                  var i = n.query,
                    a = i.getEvent('selected').all();
                  (e.options.isMultiSelectEnabled(t) || a.includes(r)) &&
                    (o = a.filter(function (e) {
                      var t = i.node(e).descendants(!0),
                        n = i.node(e).ancestors(!0);
                      return !t.includes(r) && !n.includes(r);
                    })),
                    o.includes(r) || o.push(r);
                }
                n.actions.setNodeEvent('selected', o, 'select');
              }),
              i = e.addCraftEventListener(t, 'click', function (t) {
                t.craft.stopPropagation();
                var o = n.query.getEvent('selected').all(),
                  i = e.options.isMultiSelectEnabled(t),
                  a = e.currentSelectedElementIds.includes(r),
                  d = Q(o);
                i && a
                  ? (d.splice(d.indexOf(r), 1),
                    n.actions.setNodeEvent('selected', d, 'if-unbindOnClick'))
                  : !i &&
                    o.length > 1 &&
                    n.actions.setNodeEvent(
                      'selected',
                      (d = [r]),
                      'else-unbindOnClick'
                    ),
                  (e.currentSelectedElementIds = d);
              });
            return function () {
              o(), i();
            };
          },
          hover: function (t, r) {
            var o = e.addCraftEventListener(t, 'mouseover', function (e) {
              e.craft.stopPropagation(),
                n.actions.setNodeEvent('hovered', r, 'hover');
            });
            return function () {
              o();
            };
          },
          drop: function (t, r) {
            var o = e.addCraftEventListener(t, 'dragover', function (t) {
                if (
                  (t.craft.stopPropagation(), t.preventDefault(), e.positioner)
                ) {
                  var o = e.positioner.computeIndicator(
                    r,
                    t.clientX,
                    t.clientY
                  );
                  o && n.actions.setIndicator(o);
                }
              }),
              i = e.addCraftEventListener(t, 'dragenter', function (e) {
                e.craft.stopPropagation(), e.preventDefault();
              });
            return function () {
              i(), o();
            };
          },
          drag: function (r, o) {
            if (!n.query.node(o).isDraggable()) return function () {};
            r.setAttribute('draggable', 'true');
            var i = e.addCraftEventListener(r, 'dragstart', function (r) {
                r.craft.stopPropagation();
                var o = n.query,
                  i = n.actions,
                  a = o.getEvent('selected').all();
                i.setNodeEvent('dragged', a, 'drag');
                var d = a.map(function (e) {
                  return o.node(e).get().dom;
                });
                (e.draggedElementShadow = ze(r, d, t.forceSingleDragShadow)),
                  (e.dragTarget = { type: 'existing', nodes: a }),
                  (e.positioner = new _e(e.options.store, e.dragTarget));
              }),
              a = e.addCraftEventListener(r, 'dragend', function (t) {
                t.craft.stopPropagation(),
                  e.dropElement(function (e, t) {
                    'new' !== e.type &&
                      n.actions.move(
                        e.nodes,
                        t.placement.parent.id,
                        t.placement.index +
                          ('after' === t.placement.where ? 1 : 0)
                      );
                  });
              });
            return function () {
              r.setAttribute('draggable', 'false'), i(), a();
            };
          },
          create: function (r, o, i) {
            r.setAttribute('draggable', 'true');
            var a = e.addCraftEventListener(r, 'dragstart', function (r) {
                r.craft.stopPropagation();
                var i = n.query.parseReactElement(o).toNodeTree();
                (e.draggedElementShadow = ze(
                  r,
                  [r.currentTarget],
                  t.forceSingleDragShadow
                )),
                  (e.dragTarget = { type: 'new', tree: i }),
                  (e.positioner = new _e(e.options.store, e.dragTarget));
              }),
              d = e.addCraftEventListener(r, 'dragend', function (t) {
                t.craft.stopPropagation(),
                  e.dropElement(function (e, t) {
                    'existing' !== e.type &&
                      (n.actions.addNodeTree(
                        e.tree,
                        t.placement.parent.id,
                        t.placement.index +
                          ('after' === t.placement.where ? 1 : 0)
                      ),
                      i && W(i.onCreate) && i.onCreate(e.tree));
                  });
              });
            return function () {
              r.removeAttribute('draggable'), a(), d();
            };
          },
        };
      }),
      (t.prototype.dropElement = function (e) {
        var t = this.options.store;
        if (this.positioner) {
          var n = this.draggedElementShadow,
            r = this.positioner.getIndicator();
          this.dragTarget && r && !r.error && e(this.dragTarget, r),
            n &&
              (n.parentNode.removeChild(n), (this.draggedElementShadow = null)),
            (this.dragTarget = null),
            t.actions.setIndicator(null),
            t.actions.setNodeEvent('dragged', null, 'dropElement'),
            this.positioner.cleanup(),
            (this.positioner = null);
        }
      }),
      (t.forceSingleDragShadow = x() && D()),
      t
    );
  })(Ae);
function He(e, t, n, r) {
  void 0 === r && (r = 2);
  var o = 0,
    i = 0,
    a = 0,
    d = 0,
    s = e.where;
  return (
    n
      ? n.inFlow
        ? ((a = n.outerWidth),
          (d = r),
          (o = 'before' === s ? n.top : n.bottom),
          (i = n.left))
        : ((a = r),
          (d = n.outerHeight),
          (o = n.top),
          (i = 'before' === s ? n.left : n.left + n.outerWidth))
      : t &&
        ((o = t.top + t.padding.top),
        (i = t.left + t.padding.left),
        (a =
          t.outerWidth -
          t.padding.right -
          t.padding.left -
          t.margin.left -
          t.margin.right),
        (d = r)),
    { top: o + 'px', left: i + 'px', width: a + 'px', height: d + 'px' }
  );
}
var Be = function () {
    var e = re(function (e) {
        return {
          indicator: e.indicator,
          indicatorOptions: e.options.indicator,
          enabled: e.options.enabled,
        };
      }),
      t = e.indicator,
      n = e.indicatorOptions,
      r = e.enabled,
      o = ne();
    return (
      _(
        function () {
          o && (r ? o.enable() : o.disable());
        },
        [r, o]
      ),
      t
        ? R.createElement(S, {
            style: K(
              K(
                {},
                He(
                  t.placement,
                  T(t.placement.parent.dom),
                  t.placement.currentNode && T(t.placement.currentNode.dom),
                  n.thickness
                )
              ),
              {
                backgroundColor: t.error ? n.error : n.success,
                transition: n.transition || '0.2s ease-in',
              }
            ),
            parentDom: t.placement.parent.dom,
          })
        : null
    );
  },
  Ue = function (e) {
    var t = e.children,
      n = A(ee),
      r = F(
        function () {
          return n.query.getOptions().handlers(n);
        },
        [n]
      );
    return r
      ? R.createElement(te.Provider, { value: r }, R.createElement(Be, null), t)
      : null;
  },
  We = {
    nodes: {},
    events: { dragged: new Set(), selected: new Set(), hovered: new Set() },
    indicator: null,
    handlers: null,
    options: {
      onNodesChange: function () {
        return null;
      },
      onRender: function (e) {
        return e.render;
      },
      resolver: {},
      enabled: !0,
      indicator: { error: 'red', success: 'rgb(98, 196, 98)' },
      handlers: function (e) {
        return new Me({
          store: e,
          isMultiSelectEnabled: function (e) {
            return !!e.metaKey;
          },
        });
      },
      normalizeNodes: function () {},
    },
  },
  Je = {
    methods: function (e, t) {
      return K(
        K(
          {},
          (function (e, t) {
            var n = function (t, n, o) {
                var i = function (n, r) {
                  var o = t.nodes[n];
                  'string' != typeof o.data.type &&
                    U(
                      e.options.resolver[o.data.name],
                      p.replace('%node_type%', '' + o.data.type.name)
                    ),
                    (e.nodes[n] = K(K({}, o), {
                      data: K(K({}, o.data), { parent: r }),
                    })),
                    o.data.nodes.length > 0 &&
                      (delete e.nodes[n].data.props.children,
                      o.data.nodes.forEach(function (e) {
                        return i(e, o.id);
                      })),
                    Object.values(o.data.linkedNodes).forEach(function (e) {
                      return i(e, o.id);
                    });
                };
                if ((i(t.rootNodeId, n), n)) {
                  var a = r(n);
                  if ('child' !== o.type)
                    a.data.linkedNodes[o.id] = t.rootNodeId;
                  else {
                    var s = o.index;
                    null != s
                      ? a.data.nodes.splice(s, 0, t.rootNodeId)
                      : a.data.nodes.push(t.rootNodeId);
                  }
                } else
                  U(
                    t.rootNodeId === d,
                    'Cannot add non-root Node without a parent'
                  );
              },
              r = function (t) {
                U(t, u);
                var n = e.nodes[t];
                return U(n, s + '-Parent validation failed-' + t), n;
              },
              i = function (t) {
                var n = e.nodes[t],
                  r = e.nodes[n.data.parent];
                if (
                  (n.data.nodes &&
                    Q(n.data.nodes).forEach(function (e) {
                      return i(e);
                    }),
                  n.data.linkedNodes &&
                    Object.values(n.data.linkedNodes).map(function (e) {
                      return i(e);
                    }),
                  r.data.nodes.includes(t))
                ) {
                  var o = r.data.nodes;
                  o.splice(o.indexOf(t), 1);
                } else {
                  var a = Object.keys(r.data.linkedNodes).find(function (e) {
                    return r.data.linkedNodes[e] === e;
                  });
                  a && delete r.data.linkedNodes[a];
                }
                !(function (e, t) {
                  Object.keys(e.events).forEach(function (n) {
                    var r = e.events[n];
                    r &&
                      r.has &&
                      r.has(t) &&
                      (e.events[n] = new Set(
                        Array.from(r).filter(function (e) {
                          return t !== e;
                        })
                      ));
                  });
                })(e, t),
                  delete e.nodes[t];
              };
            return {
              addLinkedNodeFromTree: function (e, t, o) {
                var a = r(t).data.linkedNodes[o];
                a && i(a), n(e, t, { type: 'linked', id: o });
              },
              add: function (e, t, r) {
                var i = [e];
                Array.isArray(e) &&
                  (o('actions.add(node: Node[])', {
                    suggest: 'actions.add(node: Node)',
                  }),
                  (i = e)),
                  i.forEach(function (e) {
                    var o;
                    n(
                      { nodes: ((o = {}), (o[e.id] = e), o), rootNodeId: e.id },
                      t,
                      { type: 'child', index: r }
                    );
                  });
              },
              addNodeTree: function (e, t, r) {
                n(e, t, { type: 'child', index: r });
              },
              delete: function (n) {
                be(e.nodes, n, { existOnly: !0, idOnly: !0 }, 'delete').forEach(
                  function (e) {
                    var n = e.node;
                    U(!t.node(n.id).isTopLevelNode(), c), i(n.id);
                  }
                );
              },
              deserialize: function (e) {
                var n = 'string' == typeof e ? JSON.parse(e) : e,
                  r = Object.keys(n).map(function (e) {
                    var r = e;
                    return (
                      e === l && (r = d),
                      [
                        r,
                        t.parseSerializedNode(n[e]).toNode(function (e) {
                          return (e.id = r);
                        }),
                      ]
                    );
                  });
                this.replaceNodes(Oe(r));
              },
              move: function (n, r, o) {
                var i = be(e.nodes, n, { existOnly: !0 }, 'move'),
                  a = e.nodes[r];
                i.forEach(function (n, i) {
                  var d = n.node,
                    s = d.id,
                    c = d.data.parent;
                  t.node(r).isDroppable([s], function (e) {
                    throw new Error(e);
                  });
                  var u = e.nodes[c].data.nodes;
                  (u[u.indexOf(s)] = 'marked'),
                    a.data.nodes.splice(o + i, 0, s),
                    (e.nodes[s].data.parent = r),
                    u.splice(u.indexOf('marked'), 1);
                });
              },
              replaceNodes: function (t) {
                this.clearEvents(), (e.nodes = t);
              },
              clearEvents: function () {
                this.setNodeEvent('selected', null),
                  this.setNodeEvent('hovered', null),
                  this.setNodeEvent('dragged', null),
                  this.setIndicator(null);
              },
              reset: function () {
                this.clearEvents(), this.replaceNodes({});
              },
              setOptions: function (t) {
                t(e.options);
              },
              setNodeEvent: function (t, n, r) {
                if (
                  (e.events[t].forEach(function (n) {
                    e.nodes[n] && (e.nodes[n].events[t] = !1);
                  }),
                  (e.events[t] = new Set()),
                  n)
                ) {
                  var o = be(
                      e.nodes,
                      n,
                      { idOnly: !0, existOnly: !0 },
                      'setNodeEvent - ' + r
                    ),
                    i = new Set(
                      o.map(function (e) {
                        return e.node.id;
                      })
                    );
                  i.forEach(function (n) {
                    e.nodes[n].events[t] = !0;
                  }),
                    (e.events[t] = i);
                }
              },
              setCustom: function (t, n) {
                be(
                  e.nodes,
                  t,
                  { idOnly: !0, existOnly: !0 },
                  'setCustom'
                ).forEach(function (t) {
                  return n(e.nodes[t.node.id].data.custom);
                });
              },
              setDOM: function (t, n) {
                e.nodes[t] && (e.nodes[t].dom = n);
              },
              setIndicator: function (t) {
                (t &&
                  (!t.placement.parent.dom ||
                    (t.placement.currentNode &&
                      !t.placement.currentNode.dom))) ||
                  (e.indicator = t);
              },
              setHidden: function (t, n) {
                e.nodes[t].data.hidden = n;
              },
              setProp: function (t, n) {
                be(
                  e.nodes,
                  t,
                  { idOnly: !0, existOnly: !0 },
                  'setProp'
                ).forEach(function (t) {
                  return n(e.nodes[t.node.id].data.props);
                });
              },
              selectNode: function (t) {
                if (t) {
                  var n = be(
                    e.nodes,
                    t,
                    { idOnly: !0, existOnly: !0 },
                    'selectNode'
                  );
                  this.setNodeEvent(
                    'selected',
                    n.map(function (e) {
                      return e.node.id;
                    }),
                    'selectNode'
                  );
                } else this.setNodeEvent('selected', null);
                this.setNodeEvent('hovered', null);
              },
            };
          })(e, t)
        ),
        {
          setState: function (t) {
            var n = V(this, ['history']);
            t(e, n);
          },
        }
      );
    },
    ignoreHistoryForActions: [
      'setDOM',
      'setNodeEvent',
      'selectNode',
      'clearEvents',
      'setOptions',
      'setIndicator',
    ],
    normalizeHistory: function (e) {
      Object.keys(e.events).forEach(function (t) {
        Array.from(e.events[t] || []).forEach(function (n) {
          e.nodes[n] || e.events[t].delete(n);
        });
      }),
        Object.keys(e.nodes).forEach(function (t) {
          var n = e.nodes[t];
          Object.keys(n.events).forEach(function (t) {
            n.events[t] &&
              e.events[t] &&
              !e.events[t].has(n.id) &&
              (n.events[t] = !1);
          });
        });
    },
  },
  Xe = function (e, t) {
    return j(Je, K(K({}, We), { options: K(K({}, We.options), e) }), Le, t);
  },
  Ye = function (e) {
    var t = e.children,
      n = e.onRender,
      r = e.onNodesChange,
      o = e.resolver,
      i = e.enabled,
      a = e.indicator;
    void 0 !== o && U('object' == typeof o && !Array.isArray(o), q);
    var d = F(
        function () {
          return J(
            {
              onRender: n,
              onNodesChange: r,
              resolver: o,
              enabled: i,
              indicator: a,
            },
            function (e) {
              return void 0 !== e;
            }
          );
        },
        [i, a, r, n, o]
      ),
      s = Xe(d, function (e, t, n, r, o) {
        if (n)
          for (
            var i = n.patches, a = V(n, ['patches']), d = 0;
            d < i.length;
            d++
          ) {
            var s = i[d].path,
              c = s.length > 2 && 'nodes' === s[0] && 'data' === s[2];
            if (
              ([P.IGNORE, P.THROTTLE].includes(a.type) &&
                a.params &&
                (a.type = a.params[0]),
              ['setState', 'deserialize'].includes(a.type) || c)
            ) {
              o(function (n) {
                e.options.normalizeNodes &&
                  e.options.normalizeNodes(n, t, a, r);
              });
              break;
            }
          }
      });
    return (
      _(
        function () {
          s &&
            d &&
            s.actions.setOptions(function (e) {
              Object.assign(e, d);
            });
        },
        [s, d]
      ),
      _(
        function () {
          s.subscribe(
            function (e) {
              return { json: s.query.serialize() };
            },
            function () {
              s.query.getOptions().onNodesChange(s.query);
            }
          );
        },
        [s]
      ),
      s
        ? R.createElement(
            ee.Provider,
            { value: s },
            R.createElement(Ue, null, t)
          )
        : null
    );
  },
  Ge = function (e) {
    var t = e.events,
      n = e.data,
      r = n.nodes,
      o = n.linkedNodes,
      i = V(e, ['events', 'data']),
      a = Se(X(e));
    return {
      node: (e = K(K(K({}, a), i), {
        events: K(K({}, a.events), t),
        dom: e.dom || a.dom,
      })),
      childNodes: r,
      linkedNodes: o,
    };
  },
  Ke = function (e, t) {
    var n = t.nodes,
      r = V(t, ['nodes']),
      o = e.nodes,
      i = V(e, ['nodes']);
    expect(i).toEqual(r);
    var a = Object.keys(n).reduce(function (e, t) {
        var r = V(n[t], ['_hydrationTimestamp', 'rules']);
        return (e[t] = r), e;
      }, {}),
      d = Object.keys(o).reduce(function (e, t) {
        var n = V(o[t], ['_hydrationTimestamp', 'rules']);
        return (e[t] = n), e;
      }, {});
    expect(d).toEqual(a);
  },
  Ve = function (e) {
    var t = {},
      n = function (e) {
        var r = Ge(e),
          o = r.node,
          i = r.childNodes,
          a = r.linkedNodes;
        (t[o.id] = o),
          i &&
            i.forEach(function (e, r) {
              var i = Ge(e),
                a = i.node,
                d = i.childNodes,
                s = i.linkedNodes;
              (a.data.parent = o.id),
                (t[a.id] = a),
                (o.data.nodes[r] = a.id),
                n(
                  K(K({}, a), {
                    data: K(K({}, a.data), {
                      nodes: d || [],
                      linkedNodes: s || {},
                    }),
                  })
                );
            }),
          a &&
            Object.keys(a).forEach(function (e) {
              var r = Ge(a[e]),
                i = r.node,
                d = r.childNodes,
                s = r.linkedNodes;
              (o.data.linkedNodes[e] = i.id),
                (i.data.parent = o.id),
                (t[i.id] = i),
                n(
                  K(K({}, i), {
                    data: K(K({}, i.data), {
                      nodes: d || [],
                      linkedNodes: s || {},
                    }),
                  })
                );
            });
      };
    return n(e), t;
  },
  Qe = function (e) {
    void 0 === e && (e = {});
    var t = e.nodes,
      n = e.events;
    return K(K(K({}, We), e), {
      nodes: t ? Ve(t) : {},
      events: K(K({}, We.events), n || {}),
    });
  };
export {
  Je as ActionMethodsWithConfig,
  Canvas,
  Ae as CoreEventHandlers,
  Me as DefaultEventHandlers,
  Fe as DerivedCoreEventHandlers,
  Ye as Editor,
  pe as Element,
  Ue as Events,
  ge as Frame,
  ce as NodeElement,
  we as NodeHelpers,
  $ as NodeProvider,
  ve as NodeSelectorType,
  Le as QueryMethods,
  Ne as connectEditor,
  Ee as connectNode,
  Ve as createTestNodes,
  Qe as createTestState,
  ue as defaultElementProps,
  fe as deprecateCanvasComponent,
  We as editorInitialState,
  le as elementPropToNodeData,
  Ke as expectEditorState,
  me as useEditor,
  Xe as useEditorStore,
  ne as useEventHandler,
  ie as useNode,
};
