require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(90);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a854516e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(93);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a854516e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a854516e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a854516e", Component.options)
  } else {
    hotAPI.reload("data-v-a854516e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
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
      storeList: {},
      result: [],
      isSearch: false
    };
  },
  beforeMount: function beforeMount() {
    this.getAllStore();
  },

  methods: {
    leave: function leave() {
      console.log('执行了');
      this.isSearch = false;
    },
    getAllStore: function getAllStore() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/store/getAllStore', {});

              case 3:
                data = _context.sent;

                console.log(data);
                that.storeList = data;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    focusInput: function focusInput() {
      this.isSearch = true;
    },
    inputSearch: function inputSearch(e) {
      var key = e.target.value;
      this.searchName(key);
    },
    searchName: function searchName(key) {
      var that = this;
      wx.request({
        url: 'http://localhost:8090/api/store/search',
        method: 'POST',
        data: {
          key: key
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          that.result = res.data;
        }
      });
    },
    scanQRcode: function scanQRcode() {
      wx.scanCode({
        success: function success(res) {
          var result = res.result;
          wx.navigateTo({
            url: result
          });
        }
      });
    },
    toShop: function toShop(e) {
      var id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/shop/main?id=' + id
      });
    }
  }
});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('img', {
    staticClass: "fab-button fab-button-local",
    attrs: {
      "src": "/static/images/scan-active.png",
      "alt": "",
      "eventid": '0'
    },
    on: {
      "tap": _vm.scanQRcode
    }
  }), _vm._v(" "), _c('wux-search-bar', {
    attrs: {
      "placeholder": "输入店名、地区、地址",
      "controlled": "",
      "eventid": '1',
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
        "eventid": '2_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": _vm.toShop
      }
    }, [_c('p', {
      staticStyle: {
        "margin": "3px"
      }
    }, [_vm._v(_vm._s(item.storeName))])], 1) : _vm._e()
  })), _vm._v(" "), _vm._l((_vm.storeList), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "shopInfo",
      attrs: {
        "data-id": item.id,
        "eventid": '3_' + index
      },
      on: {
        "click": _vm.toShop
      }
    }, [_c('img', {
      staticClass: "shopInfo-avatar",
      attrs: {
        "src": "/static/images/user.png",
        "background-size": "cover",
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "shopMessage"
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.storeName))]), _vm._v(" "), _c('p', {
      staticClass: "info"
    }, [_vm._v(_vm._s(item.region))]), _vm._v(" "), _c('p', {
      staticClass: "info"
    }, [_vm._v(_vm._s(item.phone))])], 1)])
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a854516e", esExports)
  }
}

/***/ })

},[89]);