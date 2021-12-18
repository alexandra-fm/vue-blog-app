<template>
  <div class="post-wrapp">
    <PostListCard v-if="isPosts" />
    <router-link v-else to="/create-post" class="link">
      <h5>Создайте свой первый пост...</h5>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PostListCard from "../components/PostListCard.vue"

export default {
  name: "PostListPage",
  components: {
    PostListCard,
  },
  computed: {
    ...mapGetters({ isPosts: "getAllPosts" }),
  },
}
</script>

<style scoped lang="scss">
.post-wrapp {
  margin-top: 2rem;
}
.link {
  color: var(--main-color);
}
</style>
