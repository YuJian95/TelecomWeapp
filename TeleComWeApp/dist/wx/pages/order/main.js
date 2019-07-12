require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(110);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5dd56a76_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5dd56a76"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5dd56a76_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dd56a76", Component.options)
  } else {
    hotAPI.reload("data-v-5dd56a76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      orderList: {},
      result: [],
      isSearch: false,
      isNoData: false
    };
  },
  onShow: function onShow() {
    this.getOrderList();
  },

  methods: {
    focusInput: function focusInput() {
      this.isSearch = true;
    },
    getOrderList: function getOrderList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, user, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                user = wx.getStorageSync('user');

                that.storeId = user.storeId;
                _context.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/order/queryByStoreId', {
                  storeId: that.storeId
                });

              case 5:
                data = _context.sent;

                that.orderList = data;
                if (data.length === 0) {
                  that.isNoData = true;
                }

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    inputSearch: function inputSearch(e) {
      var key = e.target.value;
      this.searchName(key);
    },
    leave: function leave() {
      console.log('执行了');
      this.isSearch = false;
    },
    searchName: function searchName(key) {
      var that = this;
      wx.request({
        url: 'http://localhost:8090/api/order/searchByStore',
        method: 'POST',
        data: {
          keyword: key,
          storeId: that.storeId
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          console.log(res.data);
          that.result = res.data;
        }
      });
    },
    toOrderDetails: function toOrderDetails(e) {
      var orderId = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/orderDetails/main?orderId=' + orderId
      });
    }
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('wux-search-bar', {
    attrs: {
      "placeholder": "输入客户名、电话",
      "controlled": "",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "focus": _vm.focusInput,
      "change": _vm.inputSearch,
      "blur": _vm.leave
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "search-result"
  }, _vm._l((_vm.result), function(item, index) {
    return (_vm.isSearch) ? _c('bolck', {
      key: item.id,
      attrs: {
        "data-id": item.id,
        "eventid": '1_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": _vm.toOrderDetails
      }
    }, [_c('p', {
      staticStyle: {
        "margin": "3px"
      }
    }, [_vm._v(_vm._s(item.userName) + "-" + _vm._s(item.phone))])], 1) : _vm._e()
  })), _vm._v(" "), _c('div', {
    staticClass: "orderList"
  }, [_vm._l((_vm.orderList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "order",
      attrs: {
        "data-id": item.id,
        "eventid": '2_' + index
      },
      on: {
        "click": _vm.toOrderDetails
      }
    }, [_c('wux-cell', {
      attrs: {
        "hover-class": "none",
        "extra": item.userName,
        "mpcomid": '2_' + index
      }
    }, [_vm._v("状态：" + _vm._s(item.orderStatus))]), _vm._v(" "), _c('wux-cell', {
      attrs: {
        "hover-class": "none",
        "extra": "查看详情",
        "mpcomid": '3_' + index
      }
    }, [_vm._v("创建日期：" + _vm._s(item.createDate))])], 1)
  }), _vm._v(" "), (_vm.isNoData) ? _c('wux-cell-group', {
    attrs: {
      "label": "你还没有订单哦,请加油呀。",
      "mpcomid": '4'
    }
  }) : _vm._e()], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5dd56a76", esExports)
  }
}

/***/ })

},[109]);