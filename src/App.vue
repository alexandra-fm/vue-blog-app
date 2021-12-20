<template>
  <div id="app">
    <MainLayout>
      <div class="container">
        <router-view />
      </div>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout"

export default {
  components: {
    MainLayout,
  },
}
</script>

<style lang="scss">
@import "./assets/styles/_variabels";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-color);
}

.input-field input[type="text"]:focus,
.input-field input[type="text"].valid {
  border-bottom: 1px solid var(--accent-color) !important;
  box-shadow: 0 1px 0 0 var(--accent-color) !important;
}

textarea.materialize-textarea:focus,
textarea.materialize-textarea.valid {
  border-bottom: 1px solid var(--accent-color) !important;
  box-shadow: 0 1px 0 0 var(--accent-color) !important;
}

textarea.materialize-textarea:focus + label {
  color: var(--accent-color) !important;
}

.input-field input[type="text"]:focus + label {
  color: var(--accent-color) !important;
}

.btn {
  background-color: var(--accent-color);
}

.btn:hover {
  background-color: var(--accent-color);
}
</style>
