<template>
  <div class="post-list-wrapp">
    <div class="row" v-if="allPosts">
      <PostCard :post="post" v-for="post in allPosts" :key="post.id" />
    </div>

    <router-link to="/create-post" class="link row" v-else>
      <h5 class="col s10 offset-s1">Создайте свой первый пост...</h5>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import PostCard from "../components/PostCard.vue"

export default {
  name: "PostPage",

  components: {
    PostCard,
  },

  computed: {
    ...mapGetters({ allPosts: "getAllPosts" }),
  },

  async mounted() {
    this.fetchAllPosts()
  },

  methods: {
    ...mapActions(["fetchAllPosts"]),
  },
}
</script>

<style scoped lang="scss">
.post-list-wrapp {
  margin-top: 1rem;
}

.link {
  color: var(--main-color);
}
</style>
