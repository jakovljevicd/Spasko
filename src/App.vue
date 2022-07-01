<template>
  <Header />
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <router-view />
  <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
.btn {
  background-color: #c80075;
}
.btn:hover {
  opacity: 0.9;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
.shadow {
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px #888888;
  padding: 30px;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>