<template>
  <div class="comment-wrapp">
    <div class="comment-content">
      <span class="comment-title">{{ comment.userName }} </span>

      <span class="comment-additions">
        <i class="material-icons">date_range</i>
        {{ comment.date }}
      </span>

      <p>{{ comment.body }}</p>
      <span> </span>
    </div>

    <button class="btn btn-small" type="button" @click="deleteComment">
      Удалить <i class="material-icons right">clear</i>
    </button>
  </div>
</template>

<script>
export default {
  name: "PostCommentsItem",

  props: {
    comment: {
      type: Object,
    },
  },

  methods: {
    deleteComment() {
      this.$emit("deleteComment", this.comment.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.comment-wrapp {
  margin-bottom: 1.2rem;
}

.comment-title {
  font-size: 1.1rem;
  color: var(--accent-color);
}

.comment-additions {
  display: flex;
  align-items: center;
  color: var(--addition-color);
}

.comment-additions p {
  font-size: 0.9rem;
  margin-right: 1rem;
}

.comment-additions i {
  margin-right: 0.3rem;
  font-size: 1.1rem;
}

.btn {
  background-color: var(--accent-color);
}
</style>
