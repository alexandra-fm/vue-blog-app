<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from "../components/app/Navbar"

export default {
  name: "main-layout",
  components: {
    Navbar,
  },
}
</script>
