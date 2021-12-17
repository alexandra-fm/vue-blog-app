<template>
  <nav>
    <div class="container nav-wrapper">
      <a href="#" class="brand-logo">My Blog </a>
      <ul id="nav-mobile" class="right nav-hide">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: relative;
  background-color: rgb(165, 165, 165);
}
@media only screen and (max-width: 992px) {
  nav .brand-logo {
    left: 5% !important;
    transform: translateX(-50%);
  }
}
@media only screen and (max-width: 500px) {
  .nav-hide {
    display: none !important;
  }
  nav .brand-logo {
    left: 50% !important;
  }
}
</style>
