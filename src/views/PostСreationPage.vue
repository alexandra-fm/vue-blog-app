<template>
  <div class="about-wrapp">
    <PostСreation @createPost="setCreatePost" />
  </div>
</template>

<script>
import { mapActions } from "vuex"
import PostСreation from "../components/PostСreation.vue"

export default {
  components: {
    PostСreation,
  },

  methods: {
    ...mapActions(["createPost"]),

    setCreatePost(newPost) {
      this.createPost(newPost)
      this.$router.push("/")
    },
  },
}
</script>

<style scoped lang="scss">
.about-wrapp {
  margin-top: 1rem;
}
</style>
