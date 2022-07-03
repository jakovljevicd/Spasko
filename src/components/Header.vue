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
        <ul class="navbar-nav">
          <li
            class="nav-item"
            :class="{ dropdown: index == 'animals' }"
            v-for="(menuItem, index) in menuItems"
            :key="menuItem"
          >
            <router-link
              class="nav-link"
              :to="{ name: index }"
              v-if="index != 'animals'"
              >{{ menuItem[lang.get()] }}</router-link
            >
            <router-link
              class="nav-link dropdown-toggle"
              :to="{ name: index }"
              v-if="index == 'animals'"
              >{{ menuItem[lang.get()] }}</router-link
            >
            <ul class="dropdown-menu" v-if="index == 'animals'">
              <li>
                <router-link class="dropdown-item" to="/dogs">{{
                  animaTypes["dogs"][lang.get()]
                }}</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/">{{
                  animaTypes["cats"][lang.get()]
                }}</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/">{{
                  animaTypes["birds"][lang.get()]
                }}</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <img
              v-if="lang.get() == 0"
              @click="switchLang()"
              class="flag nav-link"
              src="../assets/rs.svg"
              alt="rs"
            />
            <img
              v-if="lang.get() == 1"
              @click="switchLang()"
              class="flag nav-link"
              src="../assets/us.svg"
              alt="us"
            />
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
.navbar .nav-item:hover .dropdown-menu {
  display: block;
}
#navContent {
  justify-content: right;
}
#logo {
  height: 60px;
}
.nav-item {
  align-self: center;
}
.flag {
  height: 40px;
  cursor: pointer;
}
.flag:hover {
  opacity: 0.9;
}
</style>

<script>
import menuItems from "@/data/menuItems.js";
import animalsDropdown from "@/data/animalsDropdown.js";
import { lang } from "@/data/lang.js";

export default {
  name: "Header",
  data() {
    return {
      menuItems: menuItems,
      menuRoutes: Object.keys(menuItems),
      animaTypes: animalsDropdown,
      lang,
    };
  },
  methods: {
    switchLang() {
      lang.switch();
      this.$router.go();
    },
  },
};
</script>