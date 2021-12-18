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
//import MainLayout from "@/layouts/MainLayout"
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
  color: #1a1b1b;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
