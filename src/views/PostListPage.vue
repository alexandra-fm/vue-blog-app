<template>
  <div class="post-list-wrapp">
    <div class="row" v-if="allPosts">
      <PostListItem
        :post="post"
        v-for="post in allPosts"
        :key="post.id"
        @openPost="getPost"
      />
    </div>

    <router-link to="/create-post" class="link row" v-else>
      <h5 class="col s10 offset-s1">Создайте свой первый пост...</h5>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import PostListItem from "../components/PostListItem.vue"

export default {
  name: "PostListPage",

  components: {
    PostListItem,
  },

  computed: {
    ...mapGetters({ allPosts: "getAllPosts" }),
  },

  mounted() {
    this.fetchAllPosts()
  },

  methods: {
    ...mapActions(["fetchAllPosts", "fetchPostById"]),

    getPost(id) {
      this.fetchPostById(id)
      this.$router.push(`post/${id}`)
    },
  },
}
</script>

<style scoped lang="scss">
.post-list-wrapp {
  margin-top: 1rem;
}

.link {
  color: var(--accent-color);
}
</style>
