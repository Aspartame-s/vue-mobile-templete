import Vue from 'vue'
import VueRouter from 'vue-router'
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      translate: '首页'
    },
    component: () => import('../views/index.vue'),
  },
  {
    path: '/goods',
    name: 'goods',
    meta: {
      translate: '其他商品'
    },
    component: () => import('../views/goods.vue')
  },
  {
    path: '/pcenter',
    name: 'pcenter',
    meta: {
      translate: '个人中心'
    },
    component: () => import('../views/pcenter.vue')
  },
  {
    path: '/orderDetail',
    name: 'orderDetail',
    meta: {
      translate: '订单详情'
    },
    component: () => import('../views/orderDetail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
