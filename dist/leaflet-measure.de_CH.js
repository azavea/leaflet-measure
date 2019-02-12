!(function(e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var r = {};
  (t.m = e),
    (t.c = r),
    (t.d = function(e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
    }),
    (t.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(r, 'a', r), r;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = '/dist/'),
    t((t.s = 4));
})([
  function(e, t, r) {
    'use strict';
    function n(e, t, r) {
      if (((r = r || {}), !d(r))) throw new Error('options is invalid');
      var n = r.bbox,
        o = r.id;
      if (void 0 === e) throw new Error('geometry is required');
      if (t && t.constructor !== Object) throw new Error('properties must be an Object');
      n && p(n), o && m(o);
      var i = { type: 'Feature' };
      return o && (i.id = o), n && (i.bbox = n), (i.properties = t || {}), (i.geometry = e), i;
    }
    function o(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (!Array.isArray(e)) throw new Error('coordinates must be an Array');
      if (e.length < 2) throw new Error('coordinates must be at least 2 numbers long');
      if (!f(e[0]) || !f(e[1])) throw new Error('coordinates must contain numbers');
      return n({ type: 'Point', coordinates: e }, t, r);
    }
    function i(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        if (i.length < 4)
          throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
        for (var s = 0; s < i[i.length - 1].length; s++) {
          if ((0 === o && 0 === s && !f(i[0][0])) || !f(i[0][1]))
            throw new Error('coordinates must contain numbers');
          if (i[i.length - 1][s] !== i[0][s])
            throw new Error('First and last Position are not equivalent.');
        }
      }
      return n({ type: 'Polygon', coordinates: e }, t, r);
    }
    function s(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (e.length < 2) throw new Error('coordinates must be an array of two or more positions');
      if (!f(e[0][1]) || !f(e[0][1])) throw new Error('coordinates must contain numbers');
      return n({ type: 'LineString', coordinates: e }, t, r);
    }
    function a(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return n({ type: 'MultiLineString', coordinates: e }, t, r);
    }
    function l(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return n({ type: 'MultiPoint', coordinates: e }, t, r);
    }
    function u(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return n({ type: 'MultiPolygon', coordinates: e }, t, r);
    }
    function c(e, t) {
      if (void 0 === e || null === e) throw new Error('radians is required');
      if (t && 'string' != typeof t) throw new Error('units must be a string');
      var r = g[t || 'kilometers'];
      if (!r) throw new Error(t + ' units is invalid');
      return e * r;
    }
    function h(e) {
      if (null === e || void 0 === e) throw new Error('degrees is required');
      return (e % 360) * Math.PI / 180;
    }
    function f(e) {
      return !isNaN(e) && null !== e && !Array.isArray(e);
    }
    function d(e) {
      return !!e && e.constructor === Object;
    }
    function p(e) {
      if (!e) throw new Error('bbox is required');
      if (!Array.isArray(e)) throw new Error('bbox must be an Array');
      if (4 !== e.length && 6 !== e.length)
        throw new Error('bbox must be an Array of 4 or 6 numbers');
      e.forEach(function(e) {
        if (!f(e)) throw new Error('bbox must only contain numbers');
      });
    }
    function m(e) {
      if (!e) throw new Error('id is required');
      if (-1 === ['string', 'number'].indexOf(typeof e))
        throw new Error('id must be a number or a string');
    }
    r.d(t, 'b', function() {
      return n;
    }),
      r.d(t, 'f', function() {
        return o;
      }),
      r.d(t, 'e', function() {
        return s;
      }),
      r.d(t, 'g', function() {
        return c;
      }),
      r.d(t, 'a', function() {
        return h;
      }),
      r.d(t, 'c', function() {
        return f;
      }),
      r.d(t, 'd', function() {
        return d;
      });
    var g = {
      meters: 6371008.8,
      metres: 6371008.8,
      millimeters: 6371008800,
      millimetres: 6371008800,
      centimeters: 637100880,
      centimetres: 637100880,
      kilometers: 6371.0088,
      kilometres: 6371.0088,
      miles: 3958.761333810546,
      nauticalmiles: 6371008.8 / 1852,
      inches: 6371008.8 * 39.37,
      yards: 6371008.8 / 1.0936,
      feet: 20902260.511392,
      radians: 1,
      degrees: 6371008.8 / 111325
    };
  },
  function(e, t) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (r = window);
    }
    e.exports = r;
  },
  function(e, t) {
    var r = /<%=([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t, r) {
    'use strict';
    function n(e, t, r) {
      if (null !== e)
        for (
          var o,
            i,
            s,
            a,
            l,
            u,
            c,
            h,
            f = 0,
            d = 0,
            p = e.type,
            m = 'FeatureCollection' === p,
            g = 'Feature' === p,
            y = m ? e.features.length : 1,
            _ = 0;
          _ < y;
          _++
        ) {
          (c = m ? e.features[_].geometry : g ? e.geometry : e),
            (h = !!c && 'GeometryCollection' === c.type),
            (l = h ? c.geometries.length : 1);
          for (var v = 0; v < l; v++) {
            var b = 0,
              M = 0;
            if (null !== (a = h ? c.geometries[v] : c)) {
              u = a.coordinates;
              var L = a.type;
              switch (((f = !r || ('Polygon' !== L && 'MultiPolygon' !== L) ? 0 : 1), L)) {
                case null:
                  break;
                case 'Point':
                  if (!1 === t(u, d, _, b, M)) return !1;
                  d++, b++;
                  break;
                case 'LineString':
                case 'MultiPoint':
                  for (o = 0; o < u.length; o++) {
                    if (!1 === t(u[o], d, _, b, M)) return !1;
                    d++, 'MultiPoint' === L && b++;
                  }
                  'LineString' === L && b++;
                  break;
                case 'Polygon':
                case 'MultiLineString':
                  for (o = 0; o < u.length; o++) {
                    for (i = 0; i < u[o].length - f; i++) {
                      if (!1 === t(u[o][i], d, _, b, M)) return !1;
                      d++;
                    }
                    'MultiLineString' === L && b++, 'Polygon' === L && M++;
                  }
                  'Polygon' === L && b++;
                  break;
                case 'MultiPolygon':
                  for (o = 0; o < u.length; o++) {
                    for ('MultiPolygon' === L && (M = 0), i = 0; i < u[o].length; i++) {
                      for (s = 0; s < u[o][i].length - f; s++) {
                        if (!1 === t(u[o][i][s], d, _, b, M)) return !1;
                        d++;
                      }
                      M++;
                    }
                    b++;
                  }
                  break;
                case 'GeometryCollection':
                  for (o = 0; o < a.geometries.length; o++)
                    if (!1 === n(a.geometries[o], t, r)) return !1;
                  break;
                default:
                  throw new Error('Unknown Geometry Type');
              }
            }
          }
        }
    }
    function o(e, t) {
      var r,
        n,
        o,
        i,
        s,
        a,
        l,
        u,
        c,
        h,
        f = 0,
        d = 'FeatureCollection' === e.type,
        p = 'Feature' === e.type,
        m = d ? e.features.length : 1;
      for (r = 0; r < m; r++) {
        for (
          a = d ? e.features[r].geometry : p ? e.geometry : e,
            u = d ? e.features[r].properties : p ? e.properties : {},
            c = d ? e.features[r].bbox : p ? e.bbox : void 0,
            h = d ? e.features[r].id : p ? e.id : void 0,
            l = !!a && 'GeometryCollection' === a.type,
            s = l ? a.geometries.length : 1,
            o = 0;
          o < s;
          o++
        )
          if (null !== (i = l ? a.geometries[o] : a))
            switch (i.type) {
              case 'Point':
              case 'LineString':
              case 'MultiPoint':
              case 'Polygon':
              case 'MultiLineString':
              case 'MultiPolygon':
                if (!1 === t(i, f, u, c, h)) return !1;
                break;
              case 'GeometryCollection':
                for (n = 0; n < i.geometries.length; n++)
                  if (!1 === t(i.geometries[n], f, u, c, h)) return !1;
                break;
              default:
                throw new Error('Unknown Geometry Type');
            }
          else if (!1 === t(null, f, u, c, h)) return !1;
        f++;
      }
    }
    function i(e, t, r) {
      var n = r;
      return (
        o(e, function(e, o, i, s, a) {
          n = 0 === o && void 0 === r ? e : t(n, e, o, i, s, a);
        }),
        n
      );
    }
    function s(e, t) {
      o(e, function(e, r, n, o, i) {
        var s = null === e ? null : e.type;
        switch (s) {
          case null:
          case 'Point':
          case 'LineString':
          case 'Polygon':
            if (!1 === t(Object(u.b)(e, n, { bbox: o, id: i }), r, 0)) return !1;
            return;
        }
        var a;
        switch (s) {
          case 'MultiPoint':
            a = 'Point';
            break;
          case 'MultiLineString':
            a = 'LineString';
            break;
          case 'MultiPolygon':
            a = 'Polygon';
        }
        for (var l = 0; l < e.coordinates.length; l++) {
          var c = e.coordinates[l],
            h = { type: a, coordinates: c };
          if (!1 === t(Object(u.b)(h, n), r, l)) return !1;
        }
      });
    }
    function a(e, t) {
      s(e, function(e, r, o) {
        var i = 0;
        if (e.geometry) {
          var s = e.geometry.type;
          if ('Point' !== s && 'MultiPoint' !== s) {
            var a;
            return (
              !1 !==
                n(e, function(n, s, l, c, h) {
                  if (void 0 === a) return void (a = n);
                  var f = Object(u.e)([a, n], e.properties);
                  if (!1 === t(f, r, o, h, i)) return !1;
                  i++, (a = n);
                }) && void 0
            );
          }
        }
      });
    }
    function l(e, t, r) {
      var n = r,
        o = !1;
      return (
        a(e, function(e, i, s, a, l) {
          (n = !1 === o && void 0 === r ? e : t(n, e, i, s, a, l)), (o = !0);
        }),
        n
      );
    }
    r.d(t, 'a', function() {
      return i;
    }),
      r.d(t, 'b', function() {
        return l;
      });
    var u = r(0);
  },
  function(e, t, r) {
    e.exports = r(5);
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    r(6);
    var o = r(7),
      i = n(o),
      s = r(9),
      a = n(s),
      l = r(10),
      u = n(l),
      c = r(15),
      h = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      })(c),
      f = r(16),
      d = n(f),
      p = r(17),
      m = r(18),
      g = { imports: { numberFormat: p.numberFormat }, interpolate: /{{([\s\S]+?)}}/g },
      y = (0, i.default)(m.controlTemplate, g),
      _ = (0, i.default)(m.resultsTemplate, g),
      v = (0, i.default)(m.pointPopupTemplate, g),
      b = (0, i.default)(m.linePopupTemplate, g),
      M = (0, i.default)(m.areaPopupTemplate, g);
    (L.Control.Measure = L.Control.extend({
      _className: 'leaflet-control-measure',
      options: {
        units: {},
        position: 'topright',
        primaryLengthUnit: 'feet',
        secondaryLengthUnit: 'miles',
        primaryAreaUnit: 'acres',
        activeColor: '#ABE67E',
        completedColor: '#C8F2BE',
        captureZIndex: 1e4,
        popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] }
      },
      initialize: function(e) {
        L.setOptions(this, e);
        var t = this.options,
          r = t.activeColor,
          n = t.completedColor;
        (this._symbols = new d.default({ activeColor: r, completedColor: n })),
          (this.options.units = L.extend({}, a.default, this.options.units));
      },
      onAdd: function(e) {
        return (
          (this._map = e),
          (this._latlngs = []),
          this._initLayout(),
          e.on('click', this._collapse, this),
          (this._layer = L.layerGroup().addTo(e)),
          this._container
        );
      },
      onRemove: function(e) {
        e.off('click', this._collapse, this), e.removeLayer(this._layer);
      },
      _initLayout: function() {
        var e = this._className,
          t = (this._container = L.DomUtil.create('div', e + ' leaflet-bar'));
        (t.innerHTML = y({ model: { className: e } })),
          t.setAttribute('aria-haspopup', !0),
          L.DomEvent.disableClickPropagation(t),
          L.DomEvent.disableScrollPropagation(t);
        var r = (this.$toggle = (0, c.selectOne)('.js-toggle', t));
        this.$interaction = (0, c.selectOne)('.js-interaction', t);
        var n = (0, c.selectOne)('.js-start', t),
          o = (0, c.selectOne)('.js-cancel', t),
          i = (0, c.selectOne)('.js-finish', t);
        (this.$startPrompt = (0, c.selectOne)('.js-startprompt', t)),
          (this.$measuringPrompt = (0, c.selectOne)('.js-measuringprompt', t)),
          (this.$startHelp = (0, c.selectOne)('.js-starthelp', t)),
          (this.$results = (0, c.selectOne)('.js-results', t)),
          (this.$measureTasks = (0, c.selectOne)('.js-measuretasks', t)),
          this._collapse(),
          this._updateMeasureNotStarted(),
          L.Browser.android ||
            (L.DomEvent.on(t, 'mouseenter', this._expand, this),
            L.DomEvent.on(t, 'mouseleave', this._collapse, this)),
          L.DomEvent.on(r, 'click', L.DomEvent.stop),
          L.Browser.touch
            ? L.DomEvent.on(r, 'click', this._expand, this)
            : L.DomEvent.on(r, 'focus', this._expand, this),
          L.DomEvent.on(n, 'click', L.DomEvent.stop),
          L.DomEvent.on(n, 'click', this._startMeasure, this),
          L.DomEvent.on(o, 'click', L.DomEvent.stop),
          L.DomEvent.on(o, 'click', this._finishMeasure, this),
          L.DomEvent.on(i, 'click', L.DomEvent.stop),
          L.DomEvent.on(i, 'click', this._handleMeasureDoubleClick, this);
      },
      _expand: function() {
        h.hide(this.$toggle), h.show(this.$interaction);
      },
      _collapse: function() {
        this._locked || (h.hide(this.$interaction), h.show(this.$toggle));
      },
      _updateMeasureNotStarted: function() {
        h.hide(this.$startHelp),
          h.hide(this.$results),
          h.hide(this.$measureTasks),
          h.hide(this.$measuringPrompt),
          h.show(this.$startPrompt);
      },
      _updateMeasureStartedNoPoints: function() {
        h.hide(this.$results),
          h.show(this.$startHelp),
          h.show(this.$measureTasks),
          h.hide(this.$startPrompt),
          h.show(this.$measuringPrompt);
      },
      _updateMeasureStartedWithPoints: function() {
        h.hide(this.$startHelp),
          h.show(this.$results),
          h.show(this.$measureTasks),
          h.hide(this.$startPrompt),
          h.show(this.$measuringPrompt);
      },
      _startMeasure: function() {
        (this._locked = !0),
          (this._measureVertexes = L.featureGroup().addTo(this._layer)),
          (this._captureMarker = L.marker(this._map.getCenter(), {
            clickable: !0,
            zIndexOffset: this.options.captureZIndex,
            opacity: 0
          }).addTo(this._layer)),
          this._setCaptureMarkerIcon(),
          this._captureMarker
            .on('mouseout', this._handleMapMouseOut, this)
            .on('dblclick', this._handleMeasureDoubleClick, this)
            .on('click', this._handleMeasureClick, this),
          this._map
            .on('mousemove', this._handleMeasureMove, this)
            .on('mouseout', this._handleMapMouseOut, this)
            .on('move', this._centerCaptureMarker, this)
            .on('resize', this._setCaptureMarkerIcon, this),
          L.DomEvent.on(this._container, 'mouseenter', this._handleMapMouseOut, this),
          this._updateMeasureStartedNoPoints(),
          this._map.fire('measurestart', null, !1);
      },
      _finishMeasure: function() {
        var e = L.extend({}, this._resultsModel, { points: this._latlngs });
        (this._locked = !1),
          L.DomEvent.off(this._container, 'mouseover', this._handleMapMouseOut, this),
          this._clearMeasure(),
          this._captureMarker
            .off('mouseout', this._handleMapMouseOut, this)
            .off('dblclick', this._handleMeasureDoubleClick, this)
            .off('click', this._handleMeasureClick, this),
          this._map
            .off('mousemove', this._handleMeasureMove, this)
            .off('mouseout', this._handleMapMouseOut, this)
            .off('move', this._centerCaptureMarker, this)
            .off('resize', this._setCaptureMarkerIcon, this),
          this._layer.removeLayer(this._measureVertexes).removeLayer(this._captureMarker),
          (this._measureVertexes = null),
          this._updateMeasureNotStarted(),
          this._collapse(),
          this._map.fire('measurefinish', e, !1);
      },
      _clearMeasure: function() {
        (this._latlngs = []),
          (this._resultsModel = null),
          this._measureVertexes.clearLayers(),
          this._measureDrag && this._layer.removeLayer(this._measureDrag),
          this._measureArea && this._layer.removeLayer(this._measureArea),
          this._measureBoundary && this._layer.removeLayer(this._measureBoundary),
          (this._measureDrag = null),
          (this._measureArea = null),
          (this._measureBoundary = null);
      },
      _centerCaptureMarker: function() {
        this._captureMarker.setLatLng(this._map.getCenter());
      },
      _setCaptureMarkerIcon: function() {
        this._captureMarker.setIcon(L.divIcon({ iconSize: this._map.getSize().multiplyBy(2) }));
      },
      _getMeasurementDisplayStrings: function(e) {
        function t(e, t, o, i, s) {
          if (t && n[t]) {
            var a = r(e, n[t], i, s);
            if (o && n[o]) {
              a = a + ' (' + r(e, n[o], i, s) + ')';
            }
            return a;
          }
          return r(e, null, i, s);
        }
        function r(e, t, r, n) {
          var o = {
              acres: 'Morgen',
              feet: 'Fuß',
              kilometers: 'Kilometer',
              hectares: 'Hektar',
              meters: 'Meter',
              miles: 'Meilen',
              sqfeet: 'Quadratfuß',
              sqmeters: 'Quadratmeter',
              sqmiles: 'Quadratmeilen'
            },
            i = L.extend({ factor: 1, decimals: 0 }, t);
          return [
            (0, p.numberFormat)(e * i.factor, i.decimals, r || '.', n || '"'),
            o[i.display] || i.display
          ].join(' ');
        }
        var n = this.options.units;
        return {
          lengthDisplay: t(
            e.length,
            this.options.primaryLengthUnit,
            this.options.secondaryLengthUnit,
            this.options.decPoint,
            this.options.thousandsSep
          ),
          areaDisplay: t(
            e.area,
            this.options.primaryAreaUnit,
            this.options.secondaryAreaUnit,
            this.options.decPoint,
            this.options.thousandsSep
          )
        };
      },
      _updateResults: function() {
        var e = (0, u.default)(this._latlngs),
          t = (this._resultsModel = L.extend({}, e, this._getMeasurementDisplayStrings(e), {
            pointCount: this._latlngs.length
          }));
        this.$results.innerHTML = _({ model: t });
      },
      _handleMeasureMove: function(e) {
        this._measureDrag
          ? this._measureDrag.setLatLng(e.latlng)
          : (this._measureDrag = L.circleMarker(
              e.latlng,
              this._symbols.getSymbol('measureDrag')
            ).addTo(this._layer)),
          this._measureDrag.bringToFront();
      },
      _handleMeasureDoubleClick: function() {
        var e = this._latlngs,
          t = void 0,
          r = void 0;
        if ((this._finishMeasure(), e.length)) {
          e.length > 2 && e.push(e[0]);
          var n = (0, u.default)(e);
          1 === e.length
            ? ((t = L.circleMarker(e[0], this._symbols.getSymbol('resultPoint'))),
              (r = v({ model: n })))
            : 2 === e.length
              ? ((t = L.polyline(e, this._symbols.getSymbol('resultLine'))),
                (r = b({ model: L.extend({}, n, this._getMeasurementDisplayStrings(n)) })))
              : ((t = L.polygon(e, this._symbols.getSymbol('resultArea'))),
                (r = M({ model: L.extend({}, n, this._getMeasurementDisplayStrings(n)) })));
          var o = L.DomUtil.create('div', '');
          o.innerHTML = r;
          var i = (0, c.selectOne)('.js-zoomto', o);
          i &&
            (L.DomEvent.on(i, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              i,
              'click',
              function() {
                t.getBounds
                  ? this._map.fitBounds(t.getBounds(), { padding: [20, 20], maxZoom: 17 })
                  : t.getLatLng && this._map.panTo(t.getLatLng());
              },
              this
            ));
          var s = (0, c.selectOne)('.js-deletemarkup', o);
          s &&
            (L.DomEvent.on(s, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              s,
              'click',
              function() {
                this._layer.removeLayer(t);
              },
              this
            )),
            t.addTo(this._layer),
            t.bindPopup(o, this.options.popupOptions),
            t.getBounds
              ? t.openPopup(t.getBounds().getCenter())
              : t.getLatLng && t.openPopup(t.getLatLng());
        }
      },
      _handleMeasureClick: function(e) {
        var t = this._map.mouseEventToLatLng(e.originalEvent),
          r = this._latlngs[this._latlngs.length - 1],
          n = this._symbols.getSymbol('measureVertex');
        (r && t.equals(r)) ||
          (this._latlngs.push(t),
          this._addMeasureArea(this._latlngs),
          this._addMeasureBoundary(this._latlngs),
          this._measureVertexes.eachLayer(function(e) {
            e.setStyle(n), e._path && e._path.setAttribute('class', n.className);
          }),
          this._addNewVertex(t),
          this._measureBoundary && this._measureBoundary.bringToFront(),
          this._measureVertexes.bringToFront()),
          this._updateResults(),
          this._updateMeasureStartedWithPoints();
      },
      _handleMapMouseOut: function() {
        this._measureDrag &&
          (this._layer.removeLayer(this._measureDrag), (this._measureDrag = null));
      },
      _addNewVertex: function(e) {
        L.circleMarker(e, this._symbols.getSymbol('measureVertexActive')).addTo(
          this._measureVertexes
        );
      },
      _addMeasureArea: function(e) {
        if (e.length < 3)
          return void (
            this._measureArea &&
            (this._layer.removeLayer(this._measureArea), (this._measureArea = null))
          );
        this._measureArea
          ? this._measureArea.setLatLngs(e)
          : (this._measureArea = L.polygon(e, this._symbols.getSymbol('measureArea')).addTo(
              this._layer
            ));
      },
      _addMeasureBoundary: function(e) {
        if (e.length < 2)
          return void (
            this._measureBoundary &&
            (this._layer.removeLayer(this._measureBoundary), (this._measureBoundary = null))
          );
        this._measureBoundary
          ? this._measureBoundary.setLatLngs(e)
          : (this._measureBoundary = L.polyline(
              e,
              this._symbols.getSymbol('measureBoundary')
            ).addTo(this._layer));
      }
    })),
      L.Map.mergeOptions({ measureControl: !1 }),
      L.Map.addInitHook(function() {
        this.options.measureControl && (this.measureControl = new L.Control.Measure().addTo(this));
      }),
      (L.control.measure = function(e) {
        return new L.Control.Measure(e);
      });
  },
  function(e, t) {},
  function(e, t, r) {
    (function(t) {
      function n(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      }
      function o(e, t) {
        for (var r = -1, n = e ? e.length : 0, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
        return o;
      }
      function i(e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      }
      function s(e, t) {
        return o(t, function(t) {
          return e[t];
        });
      }
      function a(e) {
        return '\\' + Z[e];
      }
      function l(e, t) {
        var r = ue(e) || M(e) ? i(e.length, String) : [],
          n = r.length,
          o = !!n;
        for (var s in e) (!t && !te.call(e, s)) || (o && ('length' == s || g(s, n))) || r.push(s);
        return r;
      }
      function u(e, t, r, n) {
        return void 0 === e || (b(e, ee[r]) && !te.call(n, r)) ? t : e;
      }
      function c(e, t, r) {
        var n = e[t];
        (te.call(e, t) && b(n, r) && (void 0 !== r || t in e)) || (e[t] = r);
      }
      function h(e) {
        if (!_(e)) return ie(e);
        var t = [];
        for (var r in Object(e)) te.call(e, r) && 'constructor' != r && t.push(r);
        return t;
      }
      function f(e) {
        if (!P(e)) return v(e);
        var t = _(e),
          r = [];
        for (var n in e) ('constructor' != n || (!t && te.call(e, n))) && r.push(n);
        return r;
      }
      function d(e, t) {
        return (
          (t = se(void 0 === t ? e.length - 1 : t, 0)),
          function() {
            for (var r = arguments, o = -1, i = se(r.length - t, 0), s = Array(i); ++o < i; )
              s[o] = r[t + o];
            o = -1;
            for (var a = Array(t + 1); ++o < t; ) a[o] = r[o];
            return (a[t] = s), n(e, this, a);
          }
        );
      }
      function p(e) {
        if ('string' == typeof e) return e;
        if (C(e)) return le ? le.call(e) : '';
        var t = e + '';
        return '0' == t && 1 / e == -$ ? '-0' : t;
      }
      function m(e, t, r, n) {
        r || (r = {});
        for (var o = -1, i = t.length; ++o < i; ) {
          var s = t[o],
            a = n ? n(r[s], e[s], s, r, e) : void 0;
          c(r, s, void 0 === a ? e[s] : a);
        }
        return r;
      }
      function g(e, t) {
        return (
          !!(t = null == t ? q : t) &&
          ('number' == typeof e || J.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function y(e, t, r) {
        if (!P(r)) return !1;
        var n = typeof t;
        return !!('number' == n ? L(r) && g(t, r.length) : 'string' == n && t in r) && b(r[t], e);
      }
      function _(e) {
        var t = e && e.constructor;
        return e === (('function' == typeof t && t.prototype) || ee);
      }
      function v(e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      }
      function b(e, t) {
        return e === t || (e !== e && t !== t);
      }
      function M(e) {
        return w(e) && te.call(e, 'callee') && (!oe.call(e, 'callee') || re.call(e) == N);
      }
      function L(e) {
        return null != e && O(e.length) && !k(e);
      }
      function w(e) {
        return E(e) && L(e);
      }
      function j(e) {
        return (
          !!E(e) && (re.call(e) == B || ('string' == typeof e.message && 'string' == typeof e.name))
        );
      }
      function k(e) {
        var t = P(e) ? re.call(e) : '';
        return t == z || t == U;
      }
      function O(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= q;
      }
      function P(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      function E(e) {
        return !!e && 'object' == typeof e;
      }
      function C(e) {
        return 'symbol' == typeof e || (E(e) && re.call(e) == I);
      }
      function x(e) {
        return null == e ? '' : p(e);
      }
      function S(e) {
        return L(e) ? l(e) : h(e);
      }
      function A(e) {
        return L(e) ? l(e, !0) : f(e);
      }
      function D(e, t, r) {
        var n = T.imports._.templateSettings || T;
        r && y(e, t, r) && (t = void 0), (e = x(e)), (t = ce({}, t, n, u));
        var o,
          i,
          l = ce({}, t.imports, n.imports, u),
          c = S(l),
          h = s(l, c),
          f = 0,
          d = t.interpolate || Q,
          p = "__p += '",
          m = RegExp(
            (t.escape || Q).source +
              '|' +
              d.source +
              '|' +
              (d === F ? R : Q).source +
              '|' +
              (t.evaluate || Q).source +
              '|$',
            'g'
          ),
          g = 'sourceURL' in t ? '//# sourceURL=' + t.sourceURL + '\n' : '';
        e.replace(m, function(t, r, n, s, l, u) {
          return (
            n || (n = s),
            (p += e.slice(f, u).replace(W, a)),
            r && ((o = !0), (p += "' +\n__e(" + r + ") +\n'")),
            l && ((i = !0), (p += "';\n" + l + ";\n__p += '")),
            n && (p += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
            (f = u + t.length),
            t
          );
        }),
          (p += "';\n");
        var _ = t.variable;
        _ || (p = 'with (obj) {\n' + p + '\n}\n'),
          (p = (i ? p.replace(G, '') : p).replace(V, '$1').replace(H, '$1;')),
          (p =
            'function(' +
            (_ || 'obj') +
            ') {\n' +
            (_ ? '' : 'obj || (obj = {});\n') +
            "var __t, __p = ''" +
            (o ? ', __e = _.escape' : '') +
            (i
              ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
              : ';\n') +
            p +
            'return __p\n}');
        var v = he(function() {
          return Function(c, g + 'return ' + p).apply(void 0, h);
        });
        if (((v.source = p), j(v))) throw v;
        return v;
      }
      var F = r(2),
        T = r(8),
        $ = 1 / 0,
        q = 9007199254740991,
        N = '[object Arguments]',
        B = '[object Error]',
        z = '[object Function]',
        U = '[object GeneratorFunction]',
        I = '[object Symbol]',
        G = /\b__p \+= '';/g,
        V = /\b(__p \+=) '' \+/g,
        H = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        R = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        J = /^(?:0|[1-9]\d*)$/,
        Q = /($^)/,
        W = /['\n\r\u2028\u2029\\]/g,
        Z = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
        K = 'object' == typeof t && t && t.Object === Object && t,
        X = 'object' == typeof self && self && self.Object === Object && self,
        Y = K || X || Function('return this')(),
        ee = Object.prototype,
        te = ee.hasOwnProperty,
        re = ee.toString,
        ne = Y.Symbol,
        oe = ee.propertyIsEnumerable,
        ie = (function(e, t) {
          return function(r) {
            return e(t(r));
          };
        })(Object.keys, Object),
        se = Math.max,
        ae = ne ? ne.prototype : void 0,
        le = ae ? ae.toString : void 0,
        ue = Array.isArray,
        ce = (function(e) {
          return d(function(t, r) {
            var n = -1,
              o = r.length,
              i = o > 1 ? r[o - 1] : void 0,
              s = o > 2 ? r[2] : void 0;
            for (
              i = e.length > 3 && 'function' == typeof i ? (o--, i) : void 0,
                s && y(r[0], r[1], s) && ((i = o < 3 ? void 0 : i), (o = 1)),
                t = Object(t);
              ++n < o;

            ) {
              var a = r[n];
              a && e(t, a, n, i);
            }
            return t;
          });
        })(function(e, t, r, n) {
          m(t, A(t), e, n);
        }),
        he = d(function(e, t) {
          try {
            return n(e, void 0, t);
          } catch (e) {
            return j(e) ? e : new Error(e);
          }
        });
      e.exports = D;
    }.call(t, r(1)));
  },
  function(e, t, r) {
    (function(t) {
      function n(e) {
        if ('string' == typeof e) return e;
        if (i(e)) return j ? j.call(e) : '';
        var t = e + '';
        return '0' == t && 1 / e == -u ? '-0' : t;
      }
      function o(e) {
        return !!e && 'object' == typeof e;
      }
      function i(e) {
        return 'symbol' == typeof e || (o(e) && M.call(e) == c);
      }
      function s(e) {
        return null == e ? '' : n(e);
      }
      function a(e) {
        return (e = s(e)), e && f.test(e) ? e.replace(h, v) : e;
      }
      var l = r(2),
        u = 1 / 0,
        c = '[object Symbol]',
        h = /[&<>"'`]/g,
        f = RegExp(h.source),
        d = /<%-([\s\S]+?)%>/g,
        p = /<%([\s\S]+?)%>/g,
        m = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '`': '&#96;' },
        g = 'object' == typeof t && t && t.Object === Object && t,
        y = 'object' == typeof self && self && self.Object === Object && self,
        _ = g || y || Function('return this')(),
        v = (function(e) {
          return function(t) {
            return null == e ? void 0 : e[t];
          };
        })(m),
        b = Object.prototype,
        M = b.toString,
        L = _.Symbol,
        w = L ? L.prototype : void 0,
        j = w ? w.toString : void 0,
        k = { escape: d, evaluate: p, interpolate: l, variable: '', imports: { _: { escape: a } } };
      e.exports = k;
    }.call(t, r(1)));
  },
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        acres: { factor: 24711e-8, display: 'acres', decimals: 2 },
        feet: { factor: 3.2808, display: 'feet', decimals: 0 },
        kilometers: { factor: 0.001, display: 'kilometers', decimals: 2 },
        hectares: { factor: 1e-4, display: 'hectares', decimals: 2 },
        meters: { factor: 1, display: 'meters', decimals: 0 },
        miles: { factor: 3.2808 / 5280, display: 'miles', decimals: 2 },
        sqfeet: { factor: 10.7639, display: 'sqfeet', decimals: 0 },
        sqmeters: { factor: 1, display: 'sqmeters', decimals: 0 },
        sqmiles: { factor: 3.86102e-7, display: 'sqmiles', decimals: 2 }
      });
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return e < 10 ? '0' + e.toString() : e.toString();
    }
    function i(e, t, r) {
      var n = Math.abs(e),
        i = Math.floor(n),
        s = Math.floor(60 * (n - i)),
        a = Math.round(3600 * (n - i - s / 60) * 100) / 100,
        l = n === e ? t : r;
      return o(i) + '&deg; ' + o(s) + "' " + o(a) + '" ' + l;
    }
    function s(e) {
      var t = e[e.length - 1],
        r = e.map(function(e) {
          return [e.lat, e.lng];
        }),
        n = L.polyline(r),
        o = L.polygon(r),
        s = 1e3 * (0, l.default)(n.toGeoJSON(), { units: 'kilometers' }),
        a = (0, c.default)(o.toGeoJSON());
      return {
        lastCoord: {
          dd: { x: t.lng, y: t.lat },
          dms: { x: i(t.lng, 'E', 'W'), y: i(t.lat, 'N', 'S') }
        },
        length: s,
        area: a
      };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = s);
    var a = r(11),
      l = n(a),
      u = r(14),
      c = n(u);
  },
  function(e, t, r) {
    'use strict';
    function n(e, t) {
      if (((t = t || {}), !Object(s.d)(t))) throw new Error('options is invalid');
      if (!e) throw new Error('geojson is required');
      return Object(i.b)(
        e,
        function(e, r) {
          var n = r.geometry.coordinates;
          return e + Object(o.a)(n[0], n[1], t);
        },
        0
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = r(12),
      i = r(3),
      s = r(0);
    t.default = n;
  },
  function(e, t, r) {
    'use strict';
    function n(e, t, r) {
      if (((r = r || {}), !Object(i.d)(r))) throw new Error('options is invalid');
      var n = r.units,
        s = Object(o.a)(e),
        a = Object(o.a)(t),
        l = Object(i.a)(a[1] - s[1]),
        u = Object(i.a)(a[0] - s[0]),
        c = Object(i.a)(s[1]),
        h = Object(i.a)(a[1]),
        f = Math.pow(Math.sin(l / 2), 2) + Math.pow(Math.sin(u / 2), 2) * Math.cos(c) * Math.cos(h);
      return Object(i.g)(2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)), n);
    }
    var o = r(13),
      i = r(0);
    t.a = n;
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      if (!e) throw new Error('coord is required');
      if ('Feature' === e.type && null !== e.geometry && 'Point' === e.geometry.type)
        return e.geometry.coordinates;
      if ('Point' === e.type) return e.coordinates;
      if (Array.isArray(e) && e.length >= 2 && void 0 === e[0].length && void 0 === e[1].length)
        return e;
      throw new Error('coord must be GeoJSON Point or an Array of numbers');
    }
    r.d(t, 'a', function() {
      return n;
    });
    r(0);
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      return Object(l.a)(
        e,
        function(e, t) {
          return e + o(t);
        },
        0
      );
    }
    function o(e) {
      var t,
        r = 0;
      switch (e.type) {
        case 'Polygon':
          return i(e.coordinates);
        case 'MultiPolygon':
          for (t = 0; t < e.coordinates.length; t++) r += i(e.coordinates[t]);
          return r;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
          return 0;
        case 'GeometryCollection':
          for (t = 0; t < e.geometries.length; t++) r += o(e.geometries[t]);
          return r;
      }
    }
    function i(e) {
      var t = 0;
      if (e && e.length > 0) {
        t += Math.abs(s(e[0]));
        for (var r = 1; r < e.length; r++) t -= Math.abs(s(e[r]));
      }
      return t;
    }
    function s(e) {
      var t,
        r,
        n,
        o,
        i,
        s,
        l,
        c = 0,
        h = e.length;
      if (h > 2) {
        for (l = 0; l < h; l++)
          l === h - 2
            ? ((o = h - 2), (i = h - 1), (s = 0))
            : l === h - 1 ? ((o = h - 1), (i = 0), (s = 1)) : ((o = l), (i = l + 1), (s = l + 2)),
            (t = e[o]),
            (r = e[i]),
            (n = e[s]),
            (c += (a(n[0]) - a(t[0])) * Math.sin(a(r[1])));
        c = c * u * u / 2;
      }
      return c;
    }
    function a(e) {
      return e * Math.PI / 180;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = r(3),
      u = 6378137;
    t.default = n;
  },
  function(e, t, r) {
    'use strict';
    function n(e, t) {
      return t || (t = document), t.querySelector(e);
    }
    function o(e, t) {
      return t || (t = document), Array.prototype.slice.call(t.querySelectorAll(e));
    }
    function i(e) {
      if (e) return e.setAttribute('style', 'display:none;'), e;
    }
    function s(e) {
      if (e) return e.removeAttribute('style'), e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.selectOne = n),
      (t.selectAll = o),
      (t.hide = i),
      (t.show = s);
  },
  function(e, t, r) {
    'use strict';
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })(),
      i = { activeColor: '#ABE67E', completedColor: '#C8F2BE' },
      s = (function() {
        function e(t) {
          n(this, e), (this._options = L.extend({}, i, this._options, t));
        }
        return (
          o(e, [
            {
              key: 'getSymbol',
              value: function(e) {
                return {
                  measureDrag: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.7,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.5,
                    className: 'layer-measuredrag'
                  },
                  measureArea: {
                    clickable: !1,
                    stroke: !1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.2,
                    className: 'layer-measurearea'
                  },
                  measureBoundary: {
                    clickable: !1,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measureboundary'
                  },
                  measureVertex: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.7,
                    className: 'layer-measurevertex'
                  },
                  measureVertexActive: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 1,
                    className: 'layer-measurevertex active'
                  },
                  resultArea: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 0.9,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.2,
                    className: 'layer-measure-resultarea'
                  },
                  resultLine: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 3,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measure-resultline'
                  },
                  resultPoint: {
                    clickable: !0,
                    radius: 4,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.7,
                    className: 'layer-measure-resultpoint'
                  }
                }[e];
              }
            }
          ]),
          e
        );
      })();
    t.default = s;
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.',
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ',',
        o = e < 0 ? '-' : '',
        i = Math.abs(+e || 0),
        s = parseInt(i.toFixed(t), 10) + '',
        a = s.length > 3 ? s.length % 3 : 0;
      return [
        o,
        a ? s.substr(0, a) + n : '',
        s.substr(a).replace(/(\d{3})(?=\d)/g, '$1' + n),
        t
          ? '' +
            r +
            Math.abs(i - s)
              .toFixed(t)
              .slice(2)
          : ''
      ].join('');
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.numberFormat = n);
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = r(19);
    Object.defineProperty(t, 'controlTemplate', {
      enumerable: !0,
      get: function() {
        return n(o).default;
      }
    });
    var i = r(20);
    Object.defineProperty(t, 'resultsTemplate', {
      enumerable: !0,
      get: function() {
        return n(i).default;
      }
    });
    var s = r(21);
    Object.defineProperty(t, 'pointPopupTemplate', {
      enumerable: !0,
      get: function() {
        return n(s).default;
      }
    });
    var a = r(22);
    Object.defineProperty(t, 'linePopupTemplate', {
      enumerable: !0,
      get: function() {
        return n(a).default;
      }
    });
    var l = r(23);
    Object.defineProperty(t, 'areaPopupTemplate', {
      enumerable: !0,
      get: function() {
        return n(l).default;
      }
    });
  },
  function(e, t, r) {
    e.exports =
      '<a class="{{ model.className }}-toggle js-toggle" href=# title="Abstände und Flächen messen">Messung</a> <div class="{{ model.className }}-interaction js-interaction"> <div class="js-startprompt startprompt"> <h3>Abstände und Flächen messen</h3> <ul class=tasks> <a href=# class="js-start start">Eine neue Messung durchführen</a> </ul> </div> <div class=js-measuringprompt> <h3>Abstände und Flächen messen</h3> <p class=js-starthelp>Messen sie, indem Sie der Karte Punkte hinzufügen</p> <div class="js-results results"></div> <ul class="js-measuretasks tasks"> <li><a href=# class="js-cancel cancel">Abbrechen</a></li> <li><a href=# class="js-finish finish">Messung beenden</a></li> </ul> </div> </div> ';
  },
  function(e, t, r) {
    e.exports =
      '<div class=group> <p class="lastpoint heading">Letzter Punkt</p> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> </div> <% if (model.pointCount > 1) { %> <div class=group> <p><span class=heading>Umfang</span> {{ model.lengthDisplay }}</p> </div> <% } %> <% if (model.pointCount > 2) { %> <div class=group> <p><span class=heading>Fläche</span> {{ model.areaDisplay }}</p> </div> <% } %> ';
  },
  function(e, t, r) {
    e.exports =
      '<h3>Lage des Punkts</h3> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Auf diesen Ort zentrieren</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Löschen</a></li> </ul> ';
  },
  function(e, t, r) {
    e.exports =
      '<h3>Abstand</h3> <p>{{ model.lengthDisplay }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Auf diese Linie zentrieren</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Löschen</a></li> </ul> ';
  },
  function(e, t, r) {
    e.exports =
      '<h3>Fläche</h3> <p>{{ model.areaDisplay }}</p> <p>{{ model.lengthDisplay }} Umfang</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Auf diese Fläche zentrieren</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Löschen</a></li> </ul> ';
  }
]);
