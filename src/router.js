import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/login'    //路由重定向
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径来 
  // next 是一个行数，表示方形
  // next() 放行 next('/login') 强制跳转
  if(to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token');
  // 没有token，强制跳转到登录页
  if(!tokenStr) return next('/login');
  next();
})

export default router
