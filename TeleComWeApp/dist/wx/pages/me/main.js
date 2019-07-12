require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58d6de57_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58d6de57_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\me\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58d6de57", Component.options)
  } else {
    hotAPI.reload("data-v-58d6de57", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      user: {},
      isShow: false,
      isStore: false
    };
  },
  onShow: function onShow() {
    var OPENID = wx.getStorageSync('openid');
    if (OPENID) {
      this.userLogin(OPENID);
    }
    this.isStore = wx.getStorageSync('isStoreUser');
  },

  methods: {
    exitUser: function exitUser() {
      this.isStore = false;
      wx.setStorageSync('isStoreUser', this.isStore);
    },
    getUserInfo: function getUserInfo(res) {
      if (res.mp.detail.rawData) {
        // 用户授权
        this.handleGetUserInfo();
      }
    },

    // 第一次登录,获取用户登录
    handleGetUserInfo: function handleGetUserInfo() {
      var _this = this;

      wx.getUserInfo({
        success: function success(res) {
          var user = {};
          var openid = _this.getOpenid();
          user.nickName = res.userInfo.nickName;
          user.region = res.userInfo.city;
          user.openid = openid;
          console.log(openid);
          _this.user = user;
          _this.isShow = true;
          wx.setStorageSync('user', user);
          console.log(user);
          wx.setStorageSync('openid', openid);
        },
        fail: function fail() {
          console.log('获取失败');
        }
      });
    },

    // 获取openid,需要校验的话需要在服务器中写这个请求
    getOpenid: function getOpenid() {
      wx.login({
        success: function success(res) {
          var APPID = 'wx0d7c9fa021d6cb36';
          var SECRET = 'bd006a5be77b54d4b341dc89944ce31e';
          var JSCODE = res.code;
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + JSCODE + '&grant_type=authorization_code',
            success: function success(response) {
              var openid = response.data.openid;
              wx.setStorageSync('openid', openid);
              return openid;
            }
          });
        }
      });
    },

    // 用户注册并获取用户信息
    userLogin: function userLogin(OPENID) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, USERINFO, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this2;
                USERINFO = wx.getStorageSync('user');
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* post */])('/user/login', {
                  openid: OPENID,
                  nickname: USERINFO.nickName,
                  region: USERINFO.city
                });

              case 4:
                data = _context.sent;

                that.user = data;
                wx.setStorageSync('user', data);
                that.isShow = true;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "me-container"
  }, [(_vm.isShow) ? _c('div', {
    staticClass: "userInfo"
  }, [_c('open-data', {
    staticClass: "userInfo-avatar",
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "userMessage"
  }, [_c('p', {
    staticClass: "userName"
  }, [_vm._v(_vm._s(_vm.user.nickName))]), _vm._v(" "), _c('p', {
    staticClass: "address"
  }, [_vm._v(_vm._s(_vm.user.region))])], 1), _vm._v(" "), (_vm.isStore) ? _c('div', [_c('wux-cell', {
    attrs: {
      "thumb": "/static/images/info-active.png",
      "title": "商店信息",
      "is-link": "",
      "url": "/pages/shopInfo/main",
      "open-type": "navigateTo",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "thumb": "/static/images/Booking-history-active.png",
      "title": "商店订单",
      "is-link": "",
      "url": "/pages/order/main",
      "open-type": "navigateTo",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "thumb": "/static/images/exit-active.png",
      "title": "退出登录",
      "is-link": "",
      "url": "/pages/me/main",
      "open-type": "navigateTo",
      "eventid": '0',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.exitUser
    }
  })], 1) : _c('div', [_c('wux-cell', {
    attrs: {
      "thumb": "/static/images/info-active.png",
      "title": "我的信息",
      "is-link": "",
      "url": "/pages/userInfo/main",
      "open-type": "navigateTo",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "thumb": "/static/images/Booking-history-active.png",
      "title": "我的订单",
      "is-link": "",
      "url": "/pages/myOrder/main",
      "open-type": "navigateTo",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "thumb": "/static/images/password-active.png",
      "title": "商店登录",
      "is-link": "",
      "url": "/pages/loginShop/main",
      "open-type": "navigateTo",
      "mpcomid": '6'
    }
  })], 1)], 1) : _c('div', {
    staticClass: "userInfo-beforeLogin"
  }, [_c('Button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '1',
      "mpcomid": '7'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("点击登录")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58d6de57", esExports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(100);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},[99]);