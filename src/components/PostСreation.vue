<template>
  <div class="post-creation row">
    <div class="col s10 offset-s1">
      <h5>Создать пост</h5>
      <div class="post-creation-date">
        <i class="material-icons">date_range</i>
        {{ date | date("datetime") }}
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            id="title"
            v-model="title"
            type="text"
            class="validate"
            required
          />
          <label for="title">Заголовок</label>
          <span class="helper-text" data-error="Введите заголовок"></span>
        </div>

        <div class="input-field">
          <textarea
            id="description"
            v-model="description"
            class="validate materialize-textarea"
            required
          ></textarea>
          <label for="description">Краткое описание</label>
          <span class="character-counter" style="float: right; font-size: 12px"
            >{{ description.length }}/{{ descrLength }}</span
          >
          <span class="helper-text" data-error="Введите описание"></span>
        </div>

        <div class="input-field">
          <textarea
            id="body"
            v-model="body"
            class="validate materialize-textarea"
            required
          ></textarea>
          <label for="body">Текст</label>
          <span class="helper-text" data-error="Введите текст"></span>
        </div>
        <button class="btn btn-small" type="submit">
          Опубликовать <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "PostСreation",
  data() {
    return {
      date: new Date(),
      title: "",
      body: "",
      description: "",
      descrLength: 200,
    }
  },
  watch: {
    description: function () {
      const descrLength = this.description.length - 1

      if (descrLength === this.descrLength) {
        this.description = this.description.slice(0, -1)
      }
    },
  },
  methods: {
    ...mapActions(["createPost"]),

    submitHandler() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
        description: this.description,
        comments: [],
        date: this.date,
      }

      this.createPost(newPost)
      this.$router.push("/")
    },
  },
}
</script>

<style lang="scss" scoped>
.post-creation-date {
  margin: 1.5rem 0;
  color: var(--addition-color);
}
.material-icons {
  font-size: 1.6rem;
}
.input-field input[type="text"]:focus,
.input-field input[type="text"].valid {
  border-bottom: 1px solid var(--main-color) !important;
  box-shadow: 0 1px 0 0 var(--main-color) !important;
}
.input-field input[type="text"]:focus + label {
  color: var(--main-color) !important;
}
textarea.materialize-textarea:focus,
textarea.materialize-textarea.valid {
  border-bottom: 1px solid var(--main-color) !important;
  box-shadow: 0 1px 0 0 var(--main-color) !important;
}
textarea.materialize-textarea:focus + label {
  color: var(--main-color) !important;
}
.btn {
  background-color: var(--main-color);
}
</style>
