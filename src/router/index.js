import Vue from "vue"
import VueRouter from "vue-router"
import PostListPage from "../views/PostListPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "PostListPage",
    component: PostListPage,
  },
  {
    path: "/create-post",
    name: "PostСreation ",
    component: () => import("../views/PostСreationPage.vue"),
  },
  {
    path: "/post/:id",
    name: "PostDetailsPage ",
    component: () => import("../views/PostDetailsPage.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
