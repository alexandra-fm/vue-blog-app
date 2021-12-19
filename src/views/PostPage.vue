<template>
  <div class="post-details-wrapp row">
    <PostDetails :post="post" v-if="post" />

    <h5 class="col s10 offset-s1" v-else>Пост не найден</h5>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import PostDetails from "../components/PostDetails.vue"

export default {
  components: {
    PostDetails,
  },

  computed: {
    ...mapGetters({ post: "getCurrentPost" }),
  },

  mounted() {
    const id = Number(this.$route.params.id)
    this.fetchPostById(id)
  },

  methods: {
    ...mapActions(["fetchPostById"]),
  },
}
</script>

<style scoped lang="scss">
.post-details-wrapp {
  margin-top: 1rem;
}

h5 {
  color: var(--main-color);
}
</style>
