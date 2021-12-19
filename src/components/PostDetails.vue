<template>
  <div class="col s10 offset-s1">
    <h5>{{ post.title }}</h5>
    <div class="post-creation-date">
      <i class="material-icons">date_range</i>
      {{ post.date }}
    </div>

    <form>
      <div class="input-field">
        <input
          id="title"
          type="text"
          class="validate"
          v-model="title"
          required
        />

        <label for="title"></label>
        <span class="helper-text" data-error="Введите заголовок"></span>
      </div>

      <div class="input-field">
        <textarea
          id="description"
          class="validate materialize-textarea"
          v-model="description"
          ref="description"
          required
        >
        </textarea>
        <label for="description"></label>
        <span class="character-counter" style="float: right; font-size: 12px"
          >{{ description.length }}/{{ descrLength }}</span
        >
        <span class="helper-text" data-error="Введите описание"></span>
      </div>

      <div class="input-field">
        <textarea
          id="body"
          class="validate materialize-textarea"
          v-model="body"
          ref="body"
          required
        ></textarea>
        <label for="body"></label>
        <span class="helper-text" data-error="Введите текст"></span>
      </div>
      <button class="btn btn-small" type="submit">
        Опубликовать <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostDetails",

  props: ["post"],

  data() {
    return {
      date: new Date(),
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
      window.M.textareaAutoResize(this.$refs.description)
      window.M.textareaAutoResize(this.$refs.body)
      window.M.updateTextFields()
    }, 0)
  },
}
</script>

<style scoped lang="scss">
.row:after {
  content: none;
}
.materialize-textarea {
  white-space: nowrap !important;
}
h5 {
  color: var(--main-color);
}
</style>
