require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(125);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3e06b535_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(128);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e06b535"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3e06b535_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shop\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e06b535", Component.options)
  } else {
    hotAPI.reload("data-v-3e06b535", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      store: {},
      productList: {}
    };
  },

  methods: {
    getStoreInfo: function getStoreInfo(id) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/store/queryById', {
                  id: id
                });

              case 3:
                data = _context.sent;

                if (data) {
                  that.store = data;
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getProductList: function getProductList(id) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var that, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = _this2;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/product/getAllCompanyProduct', {
                  storeId: id
                });

              case 3:
                data = _context2.sent;

                if (data) {
                  console.log(data);
                  that.productList = data;
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    toQRcode: function toQRcode() {
      wx.navigateTo({
        url: '/pages/QRcode/main?id=' + this.store.id
      });
    },
    toBooking: function toBooking(e) {
      var data = e.currentTarget.dataset;
      console.log(data);
      var id = data.id;
      var name = data.name;
      var price = data.price;
      var period = data.period;
      var storeId = this.store.id;
      wx.navigateTo({
        url: '/pages/booking/main?id=' + id + '&name=' + name + '&storeId=' + storeId + '&price=' + price + '&period=' + period
      });
    }
  },
  onLoad: function onLoad(options) {
    var id = options.id;
    this.getStoreInfo(id);
    this.getProductList(id);
  }
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "storeInfo"
  }, [_c('img', {
    staticClass: "storeInfo-avatar",
    attrs: {
      "src": "/static/images/QRcode-active.png",
      "background-size": "cover",
      "alt": "",
      "eventid": '0'
    },
    on: {
      "tap": _vm.toQRcode
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "storeMessage"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.store.storeName))]), _vm._v(" "), _c('p', {
    staticClass: "info"
  }, [_vm._v(_vm._s(_vm.store.region))]), _vm._v(" "), _c('p', {
    staticClass: "info"
  }, [_vm._v(_vm._s(_vm.store.phone))])], 1)]), _vm._v(" "), _vm._l((_vm.productList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "product",
      attrs: {
        "data-id": item.id,
        "data-name": item.name,
        "data-period": item.period,
        "data-price": item.price,
        "eventid": '1_' + index
      },
      on: {
        "tap": _vm.toBooking
      }
    }, [_c('wux-cell-group', {
      attrs: {
        "mpcomid": '3_' + index
      }
    }, [_c('wux-cell', {
      attrs: {
        "hover-class": "none",
        "extra": item.name,
        "mpcomid": '0_' + index
      }
    }, [_vm._v(_vm._s(item.character_1))]), _vm._v(" "), _c('wux-cell', {
      attrs: {
        "hover-class": "none",
        "extra": item.price + ' / ' + item.period,
        "mpcomid": '1_' + index
      }
    }, [_vm._v(_vm._s(item.character_2))]), _vm._v(" "), _c('wux-cell', {
      attrs: {
        "hover-class": "none",
        "extra": "马上预约",
        "mpcomid": '2_' + index
      }
    }, [_vm._v(_vm._s(item.character_3))])], 1)], 1)
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e06b535", esExports)
  }
}

/***/ })

},[124]);