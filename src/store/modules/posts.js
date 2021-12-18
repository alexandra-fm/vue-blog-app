import { fetchAllPosts } from "../../api.js"

export default {
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },

    addPost(state, post) {
      state.posts.unshift(post)
      localStorage.setItem("posts", JSON.stringify(state.posts))
    },
  },
  actions: {
    async fetchAllPosts({ commit }, quantity = 3) {
      const postsInStorage = JSON.parse(localStorage.getItem("posts"))

      if (postsInStorage) {
        commit("setPosts", postsInStorage)
      } else {
        const posts = await fetchAllPosts(quantity)
        commit("setPosts", posts)
      }
    },

    createPost({ commit }, post) {
      commit("addPost", post)
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts
    },
  },
}
