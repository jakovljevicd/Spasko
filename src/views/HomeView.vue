<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import { lang } from "@/data/lang.js";

export default {
  name: "HomeView",
  components: {},
  created() {
    if (lang.get() == 0) document.title = "Početna - Spasko";
    else document.title = "Home - Spasko";
  },
};
</script>
