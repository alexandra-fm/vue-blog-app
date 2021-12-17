<template>
  <div class="row">
    <div class="col s12 m4" v-for="post in allPosts" :key="post.id">
      <div class="card">
        <div class="card-content">
          <span class="card-title">{{ post.title }}</span>
          <p>{{ post.body }}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapGetters, mapActions } from "vuex"
export default {
  name: "Card",
  data() {
    return {
      posts: [],
    }
  },
  computed: {
    allPosts() {
      return this.$store.getters.getAllPosts
    },
    //...mapGetters(["getAllPosts"]),
  },
  methods: {
    //...mapActions(["fetchAllPosts"]),
  },
  async mounted() {
    await this.$store.dispatch("fetchAllPosts")
    //this.fetchAllPosts

    /* const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=3`
    )

    const posts = await res.json()
    this.posts = posts */
  },
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
