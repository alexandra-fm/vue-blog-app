<template>
  <div class="post-details-wrapp row">
    <PostDetails
      :post="post"
      v-if="post"
      @updatePost="setUpdatedPost"
      @deletePost="setDeletedPost"
    />

    <PostComments
      :comments="post.comments"
      v-if="post"
      @deleteComment="setDeleteComment"
      @updateComment="setUpdateComment"
    />

    <h5 class="col s10 offset-s1" v-else>Пост не найден</h5>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import PostDetails from "../components/PostDetails.vue"
import PostComments from "../components/PostComments.vue"

export default {
  name: "PostDetailsPage",

  components: {
    PostDetails,
    PostComments,
  },

  data() {
    return {
      postId: Number(this.$route.params.id),
    }
  },

  computed: {
    ...mapGetters({ post: "getCurrentPost" }),
  },

  mounted() {
    this.updatedPostPage()
  },

  methods: {
    ...mapActions([
      "fetchPostById",
      "updatePost",
      "deletePost",
      "deleteComment",
      "updateComment",
    ]),

    updatedPostPage() {
      this.fetchPostById(this.postId)
    },

    setUpdatedPost(newPost) {
      this.updatePost(newPost)
      this.updatedPostPage()
    },

    setDeletedPost(id) {
      this.deletePost(id)
      this.$router.push("/")
    },

    setDeleteComment(id) {
      const postId = this.postId

      this.deleteComment({ postId, id })
      this.updatedPostPage()
    },

    setUpdateComment(newComent) {
      const postId = this.postId

      this.updateComment({ postId, newComent })
      this.updatedPostPage()
    },
  },
}
</script>

<style scoped lang="scss">
.post-details-wrapp {
  margin-top: 1rem;
}

h5 {
  color: var(--accent-color);
}
</style>
