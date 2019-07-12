require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(135);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58cf3f98_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58cf3f98"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58cf3f98_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\userInfo\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58cf3f98", Component.options)
  } else {
    hotAPI.reload("data-v-58cf3f98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 137:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      user: {},
      isEdit: true,
      isSubmitShow: false,
      isEditShow: true
    };
  },
  onShow: function onShow() {
    this.getUserInfo();
    this.isEdit = true;
    this.isSubmitShow = false;
    this.isEditShow = true;
  },

  methods: {
    // 获取用户信息
    getUserInfo: function getUserInfo() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var user, that, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = wx.getStorageSync('user');

                console.log(user);
                if (user) {
                  _this.user = user; // 预显示
                }
                that = _this;
                _context.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/user/queryById', {
                  id: user.id
                });

              case 6:
                data = _context.sent;

                if (data) {
                  that.user = data;
                }

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    editInfo: function editInfo() {
      this.changeStatus();
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(_this2);
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/user/editInfo', {
                  id: _this2.user.id,
                  nickname: _this2.user.nickName,
                  address: _this2.user.address,
                  region: _this2.user.region,
                  phone: _this2.user.phone
                });

              case 3:
                data = _context2.sent;

                if (data) {
                  wx.showToast({
                    title: data.message,
                    icon: 'none',
                    duration: 2000,
                    mask: true,
                    success: function success(res) {
                      wx.switchTab({
                        url: '/pages/me/main'
                      });
                    }
                  });
                } else {
                  wx.showToast({
                    title: '修改失败',
                    icon: 'none',
                    duration: 2000,
                    mask: true
                  });
                }
                _this2.changeStatus();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    changeName: function changeName(e) {
      this.user.nickame = e.target.value;
    },
    changePhone: function changePhone(e) {
      this.user.phone = e.target.value;
    },
    changeRegion: function changeRegion(e) {
      this.user.region = e.target.value;
    },
    changeAddress: function changeAddress(e) {
      this.user.address = e.target.value;
    },

    // 切换编辑状态
    changeStatus: function changeStatus() {
      var editStatus = this.isEdit;
      this.isEdit = !editStatus;
      this.isSubmitShow = editStatus;
      this.isEditShow = !editStatus;
    }
  }
});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('open-data', {
    staticClass: "avatarUrl",
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.isEditShow) ? _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.editInfo
    }
  }, [_vm._v("编辑")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('wux-cell-group', {
    attrs: {
      "title": "基本信息",
      "mpcomid": '7'
    }
  }, [_c('wux-cell', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('wux-input', {
    attrs: {
      "disabled": _vm.isEdit,
      "controlled": "",
      "label": "姓名:",
      "value": _vm.user.nickName,
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.changeName
    }
  })], 1), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('wux-input', {
    attrs: {
      "disabled": _vm.isEdit,
      "controlled": "",
      "label": "手机:",
      "value": _vm.user.phone,
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.changePhone
    }
  })], 1), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('wux-input', {
    attrs: {
      "disabled": _vm.isEdit,
      "controlled": "",
      "label": "地区",
      "value": _vm.user.region,
      "eventid": '3',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.changeRegion
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
      "disabled": _vm.isEdit,
      "controlled": "",
      "row": "2",
      "cursorSpacing": "80",
      "value": _vm.user.address,
      "placeholder": "请输入详细地址",
      "eventid": '4',
      "mpcomid": '8'
    },
    on: {
      "change": _vm.changeAddress
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', [(_vm.isSubmitShow) ? _c('wux-wing-blank', {
    attrs: {
      "mpcomid": '11'
    }
  }, [_c('button', {
    staticStyle: {
      "margin": "5px",
      "background-color": "#1296db"
    },
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("修改")])], 1) : _vm._e()], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58cf3f98", esExports)
  }
}

/***/ })

},[134]);