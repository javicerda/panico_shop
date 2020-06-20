import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import NotFound from '../components/NotFound.vue'
import Firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products,
    alias: ['/home', '/products']
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      login: true
    },
    
  },
  {
    path: '*',
    component: NotFound,
    name: 'NotFound'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.login);
  if(!user && authRequired){
    next('/login')
  } else{
    next();
  }
})

export default router
