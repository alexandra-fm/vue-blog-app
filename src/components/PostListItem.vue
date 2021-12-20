<template>
  <div class="card col s10 offset-s1">
    <div class="card-content">
      <span class="card-title">{{ post.title }}</span>
      <p>{{ post.description }}</p>
      <span class="card-additions">
        <i class="material-icons">date_range</i>
        <p>{{ post.date }}</p>
        <i class="tiny material-icons">chat_bubble_outline</i>
        <p>{{ post.comments.length }}</p>
      </span>
    </div>

    <div class="card-action">
      <button class="btn btn-small" type="button" @click="openPost">
        Читать далее
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostListItem",

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  methods: {
    openPost() {
      this.$emit("openPost", this.post.id)
    },
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
  background-color: var(--accent-color);
}

.card-title {
  text-transform: capitalize;
}

.card-content,
.card-action {
  padding: 15px 20px;
}

.card-additions {
  margin-top: 0.7rem;
  display: flex;
  align-items: center;
  color: var(--addition-color);
}

.card-additions p {
  font-size: 0.9rem;
  margin-right: 1rem;
}

.card-additions i {
  margin-right: 0.3rem;
  font-size: 1.1rem;
}
</style>
