require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(48);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4d933310_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(88);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d933310"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4d933310_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\booking\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d933310", Component.options)
  } else {
    hotAPI.reload("data-v-4d933310", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
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



var isTel = function isTel(value) {
  return !/^1[34578]\d{9}$/.test(value);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      user: {},
      productId: '',
      period: '',
      productPrice: '',
      productName: '',
      storeId: '',
      vcode: '',
      note: '',
      error: ''
    };
  },
  onLoad: function onLoad(options) {
    this.storeId = options.storeId;
    this.productName = options.name;
    this.productId = options.id;
    this.productPrice = options.price;
    this.period = options.period;
  },
  onShow: function onShow() {
    var user = wx.getStorageSync('user');
    this.user = user;
  },
  onChange: function onChange(e) {
    // this.vcode = e.detail.value
    console.log(e);
  },

  methods: {
    changeName: function changeName(e) {
      this.user.nickName = e.target.value;
    },
    changePhone: function changePhone(e) {
      this.user.phone = e.target.value;
      this.error = isTel(e.target.value);
    },
    changeAddress: function changeAddress(e) {
      this.user.address = e.target.value;
    },
    changeNote: function changeNote(e) {
      this.note = e.target.value;
    },
    onSubmit: function onSubmit() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                data = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/order/add', {
                  userId: that.user.id,
                  phone: parseInt(that.user.phone),
                  productId: that.productId,
                  storeId: that.storeId,
                  note: that.note,
                  name: that.user.name
                });

                if (data) {
                  wx.showToast({
                    title: data.message,
                    icon: 'none',
                    duration: 2000,
                    mask: true,
                    success: function success(res) {
                      wx.navigateBack({
                        delta: 1
                      });
                    }
                  });
                }

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('wux-cell-group', {
    attrs: {
      "title": "套餐信息",
      "mpcomid": '2'
    }
  }, [_c('wux-cell', {
    attrs: {
      "hover-class": "none",
      "controlled": "",
      "title": "名称：",
      "extra": _vm.productName,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "hover-class": "none",
      "controlled": "",
      "title": "价格：",
      "mpcomid": '1'
    }
  }, [_c('view', {
    staticStyle: {
      "margin-left": "5px"
    },
    slot: "footer"
  }, [_vm._v(_vm._s(_vm.productPrice) + " ￥/ " + _vm._s(_vm.period))])])], 1), _vm._v(" "), _c('wux-cell-group', {
    attrs: {
      "title": "客户信息",
      "mpcomid": '7'
    }
  }, [_c('wux-cell', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('wux-input', {
    attrs: {
      "label": "姓名：",
      "controlled": "",
      "value": _vm.user.nickName,
      "eventid": '0',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.changeName
    }
  })], 1), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('wux-input', {
    attrs: {
      "label": "手机：",
      "type": "number",
      "error": _vm.error,
      "controlled": "",
      "value": _vm.user.phone,
      "eventid": '1',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.changePhone
    }
  })], 1)], 1), _vm._v(" "), _c('wux-cell-group', {
    attrs: {
      "title": "详细地址",
      "mpcomid": '10'
    }
  }, [_c('wux-cell', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('wux-textarea', {
    attrs: {
      "controlled": "",
      "row": "2",
      "cursorSpacing": "80",
      "value": _vm.user.address,
      "placeholder": "请输入详细地址",
      "eventid": '2',
      "mpcomid": '8'
    },
    on: {
      "change": _vm.changeAddress
    }
  })], 1)], 1), _vm._v(" "), _c('wux-cell-group', {
    attrs: {
      "title": "备注信息",
      "mpcomid": '16'
    }
  }, [_c('wux-cell', {
    attrs: {
      "mpcomid": '12'
    }
  }, [_c('wux-textarea', {
    attrs: {
      "row": "2",
      "cursorSpacing": "80",
      "placeholder": "请输入备注信息",
      "eventid": '3',
      "mpcomid": '11'
    },
    on: {
      "change": _vm.changeNote
    }
  })], 1), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "mpcomid": '15'
    }
  }, [_c('wux-input', {
    attrs: {
      "label": "验证码：",
      "placeholder": "请输入",
      "mpcomid": '14'
    }
  }, [_c('view', {
    staticStyle: {
      "margin-left": "5px"
    },
    slot: "footer"
  }, [_c('wux-vcode', {
    attrs: {
      "controlled": "",
      "canvas-id": "custom-canvas",
      "bg-color": "#e6f6ff",
      "height": "30",
      "width": "80",
      "num": "4",
      "font-color": "#165189",
      "haspoint": "false",
      "hasline": "false",
      "eventid": '4',
      "mpcomid": '13'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('wux-button', {
    attrs: {
      "controlled": "",
      "block": "",
      "type": "calm",
      "eventid": '5',
      "mpcomid": '17'
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("预定")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4d933310", esExports)
  }
}

/***/ })

},[47]);