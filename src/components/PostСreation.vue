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
            type="text"
            class="validate"
            v-model="title"
            required
          />
          <label for="title">Заголовок</label>
          <span class="helper-text" data-error="Введите заголовок"></span>
        </div>

        <div class="input-field">
          <textarea
            id="description"
            class="validate materialize-textarea"
            v-model="description"
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
            class="validate materialize-textarea"
            v-model="body"
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
import dateFilter from "../filters/date.filter"

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
    submitHandler() {
      const newPost = {
        userId: 1,
        id: Date.now(),
        title: this.title,
        body: this.body,
        description: this.description,
        comments: [],
        date: dateFilter(new Date(), "datetime"),
      }
      this.$emit("createPost", newPost)
    },
  },
}
</script>

<style lang="scss" scoped>
h5 {
  color: var(--accent-color);
}

.post-creation-date {
  margin: 1.5rem 0;
  color: var(--addition-color);
}

.material-icons {
  font-size: 1.6rem;
}
</style>
