require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(115);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_216bb7d3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-216bb7d3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_216bb7d3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\orderDetails\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-216bb7d3", Component.options)
  } else {
    hotAPI.reload("data-v-216bb7d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
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
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      order: {},
      product: {}
    };
  },
  onLoad: function onLoad(options) {
    var orderId = options.orderId;
    this.getOrderInfo(orderId);
  },

  methods: {
    getOrderInfo: function getOrderInfo(orderId) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/order/queryById', {
                  orderId: orderId
                });

              case 2:
                data = _context.sent;

                if (data) {
                  if (data.createDate) {
                    data.createDate = '未处理：' + Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* formatTime */])(new Date(data.createDate));
                  }
                  if (data.updateDate) {
                    data.updateDate = '在进行：' + Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* formatTime */])(new Date(data.updateDate));
                  }
                  if (data.finishDate) {
                    data.finishDate = '已完成：' + Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* formatTime */])(new Date(data.finishDate));
                  }
                }
                _this.order = data;
                _this.getProductInfo(data.productId);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getProductInfo: function getProductInfo(productId) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/product/queryById', {
                  id: productId
                });

              case 2:
                data = _context2.sent;

                _this2.product = data;

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('wux-cell-group', {
    attrs: {
      "title": "订单状态",
      "mpcomid": '5'
    }
  }, [_c('wux-cell', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('div', {
    staticClass: "status"
  }, [_c('wux-timeline', {
    attrs: {
      "pending": "",
      "mpcomid": '3'
    }
  }, [(_vm.order.createDate) ? _c('wux-timeline-item', {
    attrs: {
      "content": _vm.order.createDate,
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.order.updateDate) ? _c('wux-timeline-item', {
    attrs: {
      "content": _vm.order.updateDate,
      "mpcomid": '1'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.order.finishDate) ? _c('wux-timeline-item', {
    attrs: {
      "content": _vm.order.finishDate,
      "mpcomid": '2'
    }
  }) : _vm._e()], 1)], 1)])], 1), _vm._v(" "), _c('wux-cell-group', {
    attrs: {
      "title": "客户信息",
      "mpcomid": '10'
    }
  }, [_c('wux-cell', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_vm._v("姓名：" + _vm._s(_vm.order.userName))]), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_vm._v("手机：" + _vm._s(_vm.order.phone))]), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "mpcomid": '8'
    }
  }, [_vm._v("地址：" + _vm._s(_vm.order.address))]), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_vm._v("备注：" + _vm._s(_vm.order.note))])], 1), _vm._v(" "), _c('wux-cell-group', {
    attrs: {
      "title": "订单信息",
      "mpcomid": '14'
    }
  }, [_c('wux-cell', {
    attrs: {
      "mpcomid": '11'
    }
  }, [_vm._v("套餐：" + _vm._s(_vm.product.name) + "(" + _vm._s(_vm.product.character_1) + ")")]), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "mpcomid": '12'
    }
  }, [_vm._v("特性：" + _vm._s(_vm.product.character_2) + "+" + _vm._s(_vm.product.character_3))]), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "mpcomid": '13'
    }
  }, [_vm._v("收费：" + _vm._s(_vm.product.price) + "/" + _vm._s(_vm.product.period))])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-216bb7d3", esExports)
  }
}

/***/ })

},[114]);