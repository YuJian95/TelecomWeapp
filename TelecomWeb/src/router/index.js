import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Login from '../pages/Index'
import Company from '../components/Company'
import Shop from '../components/Shop'
import CompanyIndex from '../pages/company/Index'
import ShopIndex from '../pages/shop/Index'
import OrderIndex from '../pages/shop/Order'
import OrderDetail from '../pages/shop/OrderDetail'
import EditShopInfo from '../pages/shop/EditShopInfo'
import EditOrder from '../pages/shop/EditOrder'
import StoreIndex from '../pages/shop/Store'
import AddStore from '../pages/Shop/AddStore'
import EditStore from '../pages/shop/EditStoreInfo'
import EditCompany from '../pages/company/EditCompanyInfo'
import EditShop from '../pages/company/EditShop'
import AddShop from '../pages/company/AddShop'
import Product from '../pages/company/Product'
import EditProduct from '../pages/company/EditProduct'
import CompanyOrderDetail from '../pages/company/OrderDetail'
import ShopDetail from '../pages/company/ShopDetail'
import CompanyOrder from '../pages/company/Order'
import CompanyShop from '../pages/company/Shop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/company',
          name: 'Company',
          component: Company,
          redirect: '/company/index',
          children: [{
            path: '/company/index',
            name: 'CompanyIndex',
            component: CompanyIndex,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/company/editCompany',
            name: 'editCompany',
            component: EditCompany,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/company/editShop',
            name: 'editShop',
            component: EditShop,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/company/addShop',
            name: 'addShop',
            component: AddShop,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/company/product',
            name: 'product',
            component: Product,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/company/editProduct',
            name: 'editProduct',
            component: EditProduct,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/company/orderDetail',
            name: 'orderDetail',
            component: CompanyOrderDetail,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/company/shopDetail',
            name: 'shopDetail',
            component: ShopDetail,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/company/order',
            name: 'companyOrder',
            component: CompanyOrder,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/company/shop',
            name: 'shop',
            component: CompanyShop,
            meta: {
              requireAuth: true
            }
          }
          ]
        },
        {
          path: '/shop',
          name: 'Shop',
          component: Shop,
          redirect: '/shop/index',
          children: [
            {
              path: '/shop/index',
              name: 'ShopIndex',
              component: ShopIndex,
              meta: {
                requireAuth: true
              }
            }, {
              path: '/shop/order',
              name: 'OrderIndex',
              component: OrderIndex,
              meta: {
                requireAuth: true
              }
            }, {
              path: '/shop/orderDetail',
              name: 'OrderDetail',
              component: OrderDetail,
              meta: {
                requireAuth: true
              }
            }, {
              path: '/shop/EditShopInfo',
              name: 'EditShopInfo',
              component: EditShopInfo,
              meta: {
                requireAuth: true
              }
            }, {
              path: '/shop/EditOrder',
              name: 'EditOrder',
              component: EditOrder,
              meta: {
                requireAuth: true
              }
            }, {
              path: '/shop/store',
              name: 'StoreIndex',
              component: StoreIndex,
              meta: {
                requireAuth: true
              }
            }, {
              path: '/shop/addStore',
              name: 'AddStore',
              component: AddStore,
              meta: {
                requireAuth: true
              }
            }, {
              path: '/shop/editStoreInfo',
              name: 'EditStore',
              component: EditStore,
              meta: {
                requireAuth: true
              }
            }
          ]
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ],
  computed: {
    activeIndex () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(this)
      console.log(key, keyPath)
    }
  }
})
