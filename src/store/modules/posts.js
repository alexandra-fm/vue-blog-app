import { fetchAllPosts } from "../../api.js"

export default {
  state: {
    posts: [],
    currentPost: null,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
      localStorage.setItem("posts", JSON.stringify(state.posts))
    },

    addPost(state, post) {
      state.posts.unshift(post)
      localStorage.setItem("posts", JSON.stringify(state.posts))
    },

    setCurrentPost(state, post = null) {
      state.currentPost = post
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

    async fetchPostById({ commit }, id) {
      const postsInStorage = await JSON.parse(localStorage.getItem("posts"))

      if (postsInStorage) {
        const post = postsInStorage.find(post => post.id === id)
        commit("setCurrentPost", post)
      } else {
        commit("setCurrentPost")
      }
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts
    },
    getCurrentPost(state) {
      return state.currentPost
    },
    //getPostById: s => id => s.posts.find(post => post.id === id),
    /* getPostById(state, id = 1) {
      return state.posts.find(post => post.id === id)
    }, */
  },
}
