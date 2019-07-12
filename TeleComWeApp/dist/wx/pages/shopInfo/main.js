require('../../common/manifest.js')
require('../../common/vendor.js')
global.webpackJsonpMpvue([3], {

  /***/ 129:
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(130)

    var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__['a' /* default */])
    app.$mount()

    /***/
  }),

  /***/ 130:
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(132)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_745ac783_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(133)
    var disposed = false

    function injectStyle (ssrContext) {
      if (disposed) return
      __webpack_require__(131)
    }

    var normalizeComponent = __webpack_require__(1)
    /* script */

    /* template */

    /* styles */
    var __vue_styles__ = injectStyle
    /* scopeId */
    var __vue_scopeId__ = 'data-v-745ac783'
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null
    var Component = normalizeComponent(
      __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__['a' /* default */],
      __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_745ac783_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__['a' /* default */],
      __vue_styles__,
      __vue_scopeId__,
      __vue_module_identifier__
    )
    Component.options.__file = 'src\\pages\\shopInfo\\index.vue'
    if (Component.esModule && Object.keys(Component.esModule).some(function (key) {
      return key !== 'default' && key.substr(0, 2) !== '__'
    })) {
      console.error('named exports are not supported in *.vue files.')
    }
    if (Component.options.functional) {
      console.error('[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.')
    }

    /* hot reload */
    if (false) {
      (function () {
        var hotAPI = require('vue-hot-reload-api')
        hotAPI.install(require('vue'), false)
        if (!hotAPI.compatible) return
        module.hot.accept()
        if (!module.hot.data) {
          hotAPI.createRecord('data-v-745ac783', Component.options)
        } else {
          hotAPI.reload('data-v-745ac783', Component.options)
        }
        module.hot.dispose(function (data) {
          disposed = true
        })
      })()
    }

    /* harmony default export */
    __webpack_exports__['a'] = (Component.exports)

    /***/
  }),

  /***/ 131:
  /***/ (function (module, exports) {

// removed by extract-text-webpack-plugin

    /***/
  }),

  /***/ 132:
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6)

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

    /* harmony default export */
    __webpack_exports__['a'] = ({
      data: function data () {
        return {
          store: {},
          isEdit: true,
          isSubmitShow: false,
          isEditShow: true
        }
      },
      onShow: function onShow () {
        this.getStoreInfo()
        this.isEdit = true
        this.isSubmitShow = false
        this.isEditShow = true
      },

      methods: {
        getStoreInfo: function getStoreInfo () {
          var _this = this

          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee () {
            var that, user, data
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$ (_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    that = _this
                    user = wx.getStorageSync('user')
                    _context.next = 4
                    return Object(__WEBPACK_IMPORTED_MODULE_2__utils__['c' /* post */])('/store/queryById', {
                      id: user.storeId
                    })

                  case 4:
                    data = _context.sent

                    if (data) {
                      that.store = data
                    }

                  case 6:
                  case 'end':
                    return _context.stop()
                }
              }
            }, _callee, _this)
          }))()
        },
        editInfo: function editInfo () {
          this.changeStatus()
        },
        changeName: function changeName (e) {
          this.store.nickName = e.target.value
        },
        changePhone: function changePhone (e) {
          this.store.phone = e.target.value
        },
        changeRegion: function changeRegion (e) {
          this.store.region = e.target.value
        },
        changeAddress: function changeAddress (e) {
          this.store.address = e.target.value
        },

        // 切换编辑状态
        changeStatus: function changeStatus () {
          var editStatus = this.isEdit
          this.isEdit = !editStatus
          this.isSubmitShow = editStatus
          this.isEditShow = !editStatus
        },
        onSubmit: function onSubmit () {
          var _this2 = this

          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2 () {
            var data
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$ (_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2
                    return Object(__WEBPACK_IMPORTED_MODULE_2__utils__['c' /* post */])('/store/editInfo', {
                      address: _this2.store.address,
                      region: _this2.store.region,
                      storeName: _this2.store.storeName,
                      id: _this2.store.id,
                      phone: _this2.store.phone
                    })

                  case 2:
                    data = _context2.sent

                    if (data.code === 200) {
                      wx.showToast({
                        title: data.message,
                        icon: 'none',
                        duration: 2000,
                        mask: true,
                        success: function success (res) {
                          setTimeout(function () {
                            wx.switchTab({
                              url: '/pages/me/main'
                            }, 2000)
                          })
                        }
                      })
                    } else {
                      wx.showToast({
                        title: data.message,
                        icon: 'none',
                        duration: 2000,
                        mask: true
                      })
                    }

                  case 4:
                  case 'end':
                    return _context2.stop()
                }
              }
            }, _callee2, _this2)
          }))()
        }
      }
    })

    /***/
  }),

  /***/ 133:
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    var render = function () {
      var _vm = this
      var _h = _vm.$createElement
      var _c = _vm._self._c || _h
      return _c('div', {
        staticClass: 'container'
      }, [_c('wux-form', {
        attrs: {
          'mpcomid': '11'
        }
      }, [_c('wux-cell-group', {
        attrs: {
          'title': '商店信息',
          'mpcomid': '6'
        }
      }, [_c('wux-cell', {
        attrs: {
          'mpcomid': '1'
        }
      }, [_c('wux-input', {
        attrs: {
          'disabled': _vm.isEdit,
          'label': '名称：',
          'controlled': '',
          'placeholder': '请输入名字',
          'value': _vm.store.storeName,
          'eventid': '0',
          'mpcomid': '0'
        },
        on: {
          'change': _vm.changeName
        }
      })], 1), _vm._v(' '), _c('wux-cell', {
        attrs: {
          'mpcomid': '3'
        }
      }, [_c('wux-input', {
        attrs: {
          'disabled': _vm.isEdit,
          'label': '手机：',
          'controlled': '',
          'placeholder': '请输入手机',
          'value': _vm.store.phone,
          'eventid': '1',
          'mpcomid': '2'
        },
        on: {
          'change': _vm.changePhone
        }
      })], 1), _vm._v(' '), _c('wux-cell', {
        attrs: {
          'mpcomid': '5'
        }
      }, [_c('wux-input', {
        attrs: {
          'disabled': _vm.isEdit,
          'label': '地区：',
          'controlled': '',
          'placeholder': '请输入地区',
          'value': _vm.store.region,
          'eventid': '2',
          'mpcomid': '4'
        },
        on: {
          'change': _vm.changeRegion
        }
      })], 1)], 1), _vm._v(' '), _c('wux-cell-group', {
        attrs: {
          'title': '详细地址',
          'mpcomid': '9'
        }
      }, [_c('wux-cell', {
        attrs: {
          'mpcomid': '8'
        }
      }, [_c('wux-textarea', {
        attrs: {
          'disabled': _vm.isEdit,
          'placeholder': '请输入详细地址',
          'controlled': '',
          'value': _vm.store.address,
          'eventid': '3',
          'mpcomid': '7'
        },
        on: {
          'change': _vm.changeAddress
        }
      })], 1)], 1), _vm._v(' '), (_vm.isEditShow) ? _c('button', {
        staticClass: 'btn',
        attrs: {
          'eventid': '4'
        },
        on: {
          'click': _vm.editInfo
        }
      }, [_vm._v('编辑')]) : _vm._e(), _vm._v(' '), (_vm.isSubmitShow) ? _c('div', {
        staticClass: 'btn'
      }, [_c('wux-button', {
        attrs: {
          'block': '',
          'type': 'calm',
          'eventid': '5',
          'mpcomid': '10'
        },
        on: {
          'click': _vm.onSubmit
        }
      }, [_vm._v('修改')])], 1) : _vm._e()], 1)], 1)
    }
    var staticRenderFns = []
    render._withStripped = true
    var esExports = {render: render, staticRenderFns: staticRenderFns}
    /* harmony default export */
    __webpack_exports__['a'] = (esExports)
    if (false) {
      module.hot.accept()
      if (module.hot.data) {
        require('vue-hot-reload-api').rerender('data-v-745ac783', esExports)
      }
    }

    /***/
  })

}, [129])
