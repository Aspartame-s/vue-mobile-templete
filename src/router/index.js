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
    component: () => import('../views/index.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('../views/goods.vue')
  },
  {
    path: '/pcenter',
    name: 'pcenter',
    component: () => import('../views/pcenter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
