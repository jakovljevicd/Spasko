<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  height: 100%;
}
.content {
  height: calc(100% - 126px); /* opera */
  height: -o-calc(100% - 126px); /* opera */
  height: -webkit-calc(100% - 126px); /* google, safari */
  height: -moz-calc(100% - 126px); /* firefox */
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
  margin: 10px;
}
html {
  height: 100%;
}
body {
  min-height: 600px;
  margin-top: 86px;
  margin-bottom: 40px;
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