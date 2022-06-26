<template>
  <Header />
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>