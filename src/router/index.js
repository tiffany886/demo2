import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
Vue.use(VueRouter);

const routes = [
  //   {
  //     path: "/about",
  //     name: "about",
  //     component: () =>
  //       import("../views/AboutView.vue"),
  //   },
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  // from 代表从哪个路径跳转而来
  // next（）-表示放行
  if (to.path === "/login") return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token');
  // 如果是空的就回到登录页
    if (!tokenStr) return next("/login");
    next()
});

export default router;
