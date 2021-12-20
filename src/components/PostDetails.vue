<template>
  <div class="post-details col s10 offset-s1">
    <div class="post-date">
      <i class="material-icons">date_range</i>
      {{ post.date }}
    </div>

    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          :disabled="disabled"
          id="title"
          type="text"
          ref="title"
          v-model="title"
          class="post-title validate"
          required
        />
        <span class="helper-text" data-error="Введите заголовок"></span>
      </div>

      <div class="input-field">
        <textarea
          :disabled="disabled"
          id="description"
          ref="description"
          v-model="description"
          class="post-description validate materialize-textarea"
          required
        >
        </textarea>
        <span class="character-counter" style="float: right; font-size: 12px"
          >{{ description.length }}/{{ descrLength }}</span
        >
        <span class="helper-text" data-error="Введите описание"></span>
      </div>

      <div class="input-field">
        <textarea
          :disabled="disabled"
          id="body"
          ref="body"
          v-model="body"
          class="post-body validate materialize-textarea"
          required
        ></textarea>
        <span class="helper-text" data-error="Введите текст"></span>
      </div>

      <button v-if="!disabled" class="btn btn-small" type="submit">
        Сохранить <i class="material-icons right">check</i>
      </button>
      <div v-if="disabled">
        <button
          class="btn btn-small btn-edit"
          type="button"
          @click="changeDisable"
        >
          Редактировать <i class="material-icons right">edit</i>
        </button>
        <button class="btn btn-small" type="button" @click="deletePost">
          Удалить <i class="material-icons right">clear</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import dateFilter from "../filters/date.filter"

export default {
  name: "PostDetails",

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      disabled: true,
      title: "",
      body: "",
      description: "",
      descrLength: 200,
    }
  },

  mounted() {
    this.title = this.post.title
    this.description = this.post.description
    this.body = this.post.body

    setTimeout(() => {
      window.M.textareaAutoResize(this.$refs.title)
      window.M.textareaAutoResize(this.$refs.description)
      window.M.textareaAutoResize(this.$refs.body)
      window.M.updateTextFields()
    }, 0)
  },

  methods: {
    changeDisable() {
      this.disabled = false
    },

    submitHandler() {
      const { title, body, description } = this.post
      if (
        title === this.title &&
        body === this.body &&
        description === this.description
      ) {
        return (this.disabled = true)
      } else {
        const newPost = {
          id: this.post.id,
          title: this.title,
          body: this.body,
          description: this.description,
          date: dateFilter(new Date(), "datetime"),
        }
        this.$emit("updatePost", newPost)
        this.disabled = true
      }
    },

    deletePost() {
      this.$emit("deletePost", this.post.id)
    },
  },
}
</script>

<style scoped lang="scss">
.post-details {
  margin-bottom: 50px;
}
.post-title {
  font-size: 1.64rem !important;
  text-transform: capitalize !important;
  color: var(--accent-color) !important;
}

.post-date {
  color: var(--addition-color);
}

.post-description {
  text-transform: capitalize !important;
  color: var(--addition-color) !important;
}

.post-body {
  color: var(--main-color) !important;
}

.btn {
  margin-bottom: 1rem;
}

.btn-edit {
  margin-right: 1rem;
}
.input-field {
  margin: 0.5rem 0;
}
</style>
