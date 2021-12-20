<template>
  <div class="col s10 offset-s1">
    <h6>{{ comments.length }} Комментарии</h6>

    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          id="userName"
          ref="userName"
          type="text"
          v-model="userName"
          class="post-title"
        />
        <label for="title">Имя</label>
        <span class="helper-text" data-error="Введите имя"></span>
      </div>

      <div class="input-field">
        <textarea
          id="body"
          ref="body"
          v-model="body"
          class="post-body materialize-textarea"
        ></textarea>
        <label for="body">Текст комментария</label>
        <span class="helper-text" data-error="Введите текст"></span>
      </div>

      <button class="btn btn-small btn-cancel" type="button" @click="clear">
        Отменить
      </button>
      <button
        class="btn btn-small"
        :class="{ disabled: disabled }"
        type="submit"
      >
        Отправить <i class="material-icons right">send</i>
      </button>
    </form>

    <PostCommentsItem
      :comment="comment"
      v-for="comment in comments"
      :key="comment.id"
      @deleteComment="deleteComment"
    />
  </div>
</template>

<script>
import dateFilter from "../filters/date.filter"
import PostCommentsItem from "./PostCommentsItem.vue"

export default {
  name: "PostComments",

  props: {
    comments: {
      type: Array,
    },
  },

  components: {
    PostCommentsItem,
  },

  data() {
    return {
      date: new Date(),
      userName: "",
      body: "",
      disabled: true,
    }
  },

  watch: {
    userName: function () {
      this.isDisabled()
    },
    body: function () {
      this.isDisabled()
    },
  },

  methods: {
    isDisabled() {
      if ((this.userName.length && this.body.length) === 0) {
        return
      } else {
        return (this.disabled = false)
      }
    },

    deleteComment(id) {
      this.$emit("deleteComment", id)
    },

    clear() {
      this.date = new Date()
      this.userName = ""
      this.body = ""
      this.disabled = true

      setTimeout(() => {
        window.M.updateTextFields()
      }, 0)
    },

    getRandomNumber() {
      const random = Math.floor(1 + Math.random() * 1000)
      return random
    },

    submitHandler() {
      const newComent = {
        id: this.getRandomNumber(),
        date: dateFilter(new Date(), "datetime"),
        userName: this.userName,
        body: this.body,
      }
      this.$emit("updateComment", newComent)
      this.clear()
    },
  },
}
</script>

<style lang="scss" scoped>
h6 {
  color: var(--addition-color);
  margin-bottom: 1.2rem;
}

form {
  margin-bottom: 2rem;
}

.btn {
  background-color: var(--accent-color);
}

.btn-cancel {
  margin-right: 1rem;
}
</style>
