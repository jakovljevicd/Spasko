<template>
  <nav class="navbar navbar-light navbar-expand-md fixed-top">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">
        <img src="@/assets/logo.png" alt="" id="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon primary"></span>
      </button>
      <div class="collapse navbar-collapse navbar-right" id="navContent">
        <ul class="navbar-nav" v-for="menuItem in menuItems" :key="menuItem">
          <li class="nav-item">
            <a href="#" class="nav-link">{{ menuItem[lang.value] }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #00c853;
}
#navContent {
  justify-content: right;
}
#logo {
  height: 40px;
}
</style>

<script>
import menuItems from "@/data/menuItems.js";
import { lang } from "@/data/lang.js";

export default {
  name: "Header",
  data() {
    return {
      menuItems: menuItems,
      lang,
    };
  },
};
</script>