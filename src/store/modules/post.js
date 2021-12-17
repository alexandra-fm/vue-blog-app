//import { API_BASE } from "../../api.js"
import { fetchAllPosts } from "../../api.js"

export default {
  state: {
    posts: [],
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
  },
  actions: {
    /* async fetchAllPosts({ commit }) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=3`
      )

      if (!res.ok) {
        throw new Error(`Could not fetch posts, receved ${res.status}`)
      }

      const posts = await res.json()
      commit("updatePosts", posts)
      console.log(posts)
    }, */

    async fetchAllPosts({ commit }) {
      const posts = await fetchAllPosts()
      commit("updatePosts", posts)
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts
    },
  },
}
