<template>
  <div class="row">
    <div class="col s8 offset-s2" v-for="post in allPosts" :key="post.id">
      <div class="card">
        <div class="card-content">
          <span class="card-title">{{ post.title }}</span>
          <p>{{ post.body }}</p>
          <span class="card-additions">
            <i class="tiny material-icons">chat_bubble_outline</i>
            <p>1</p>
          </span>
        </div>
        <div class="card-action">
          <router-link to="/post/2">
            <button class="btn btn-small" type="submit">Читать далее</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: "PostListCard",
  data() {
    return {}
  },
  computed: {
    ...mapGetters({ allPosts: "getAllPosts" }),
    commentsQuantity() {
      return console.log(this.allPosts)
    },
  },
  methods: {
    ...mapActions(["fetchAllPosts"]),
  },
  async mounted() {
    this.fetchAllPosts()
    console.log(this.allPosts.map(({ title }) => title.length))
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
.btn {
  background-color: var(--main-color);
}
.card-additions {
  margin-top: 0.7rem;
  display: flex;
  align-items: flex-end;
  color: var(--addition-color);
}
.card-additions p {
  font-size: 1rem;
}
.card-additions i {
  margin-right: 0.3rem;
  font-size: 1.3rem;
}
</style>
