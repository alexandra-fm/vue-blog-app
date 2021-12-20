<template>
  <div>
    <TheNavbar />
    <slot />
  </div>
</template>

<script>
import TheNavbar from "../components/app/TheNavbar"

export default {
  name: "MainLayout",
  components: {
    TheNavbar,
  },
}
</script>
