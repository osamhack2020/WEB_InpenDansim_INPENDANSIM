import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WriteMail from "../views/WriteMail.vue";
import {
  auth
} from "../firebase";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "LogIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/LogIn.vue")
  },
  {
    path: "/write/mail",
    name: "WriteMail",
    component: WriteMail
  },
  {
    path: "/write/rolling",
    name: "WriteRolling",
    component: () => import("../views/WriteRolling.vue")
  },
  {
    path: "/write/send",
    name: "Send",
    component: () => import("../views/Send.vue")
  },
  {
    // param 추가 https://remocon33.tistory.com/586
    path: "/rollingpaper",
    // path: "/rollingpaper/:name/:password",
    name: "RollingPaper",
    component: () => import("../views/RollingPaper.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;