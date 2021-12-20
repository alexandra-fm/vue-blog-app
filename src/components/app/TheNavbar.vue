<template>
  <nav>
    <div class="container nav-wrapper">
      <span class="brand-logo nav-hide">My Blog </span>
      <ul id="nav-mobile" class="right nav-mobile">
        <li>
          <router-link to="/" active-class="active">Список</router-link>
        </li>
        <li>
          <router-link to="/create-post" active-class="active"
            >Создать</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  background-color: rgba(0, 0, 0, 0.1);
}

nav {
  position: relative;
  background-color: var(--addition-color);
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

  .nav-mobile {
    left: -30%;
    position: relative;
  }
}
</style>
