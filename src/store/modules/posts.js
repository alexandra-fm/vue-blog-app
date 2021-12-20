import { fetchAllPosts } from "../../api.js"

const _setStorage = (name, state) => {
  return localStorage.setItem(name, JSON.stringify(state))
}

const _getStorage = name => {
  const postsInStorage = JSON.parse(localStorage.getItem(name))
  if (!postsInStorage) return

  const posts = JSON.parse(JSON.stringify(postsInStorage))
  return posts
}

const _findIndex = (posts, id) => {
  const idx = posts.findIndex(post => post.id === id)

  return idx
}

const _updatePosts = (posts, idx, { ...args }) => {
  let updatedPosts
  if (Object.keys(args).length != 0) {
    updatedPosts = [...posts.slice(0, idx), args, ...posts.slice(idx + 1)]
  } else {
    updatedPosts = [...posts.slice(0, idx), ...posts.slice(idx + 1)]
  }
  return updatedPosts
}

export default {
  state: {
    posts: [],
    currentPost: null,
  },
  mutations: {
    addPost(state, post) {
      state.posts.unshift(post)
      _setStorage("posts", state.posts)
    },

    setCurrentPost(state, post = null) {
      state.currentPost = post
    },

    setUpdatedPosts(state, posts) {
      state.posts = posts
      _setStorage("posts", state.posts)
    },
  },
  actions: {
    async fetchAllPosts({ commit }, quantity = 3) {
      const posts = _getStorage("posts")

      if (posts) {
        commit("setUpdatedPosts", posts)
      } else {
        const posts = await fetchAllPosts(quantity)

        commit("setUpdatedPosts", posts)
      }
    },

    createPost({ commit }, post) {
      commit("addPost", post)
    },

    updatePost({ commit }, newPost) {
      const posts = _getStorage("posts")
      const idx = _findIndex(posts, newPost.id)
      const post = { ...posts[idx], ...newPost }

      const updatedPosts = _updatePosts(posts, idx, post)

      commit("setUpdatedPosts", updatedPosts)
    },

    updateComment({ commit }, { postId, newComent }) {
      const posts = _getStorage("posts")
      const idx = _findIndex(posts, postId)
      const post = { ...posts[idx] }

      post.comments.unshift(newComent)

      const updatedPosts = _updatePosts(posts, idx, post)

      commit("setUpdatedPosts", updatedPosts)
    },

    deletePost({ commit }, id) {
      const posts = _getStorage("posts")
      const idx = _findIndex(posts, id)

      const updatedPosts = _updatePosts(posts, idx)

      commit("setUpdatedPosts", updatedPosts)
    },

    deleteComment({ commit }, { postId, id }) {
      const posts = _getStorage("posts")

      const idx = _findIndex(posts, postId)
      const post = { ...posts[idx] }
      const filtredComments = post.comments.filter(comment => comment.id !== id)

      const updatedPost = { ...post, comments: filtredComments }

      const updatedPosts = _updatePosts(posts, idx, updatedPost)

      commit("setUpdatedPosts", updatedPosts)
    },

    fetchPostById({ commit }, id) {
      const posts = _getStorage("posts")

      if (posts) {
        const post = posts.find(post => post.id === id)
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
  },
}
