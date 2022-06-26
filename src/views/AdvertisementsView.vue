<template>
  <div class="advertisements"></div>
</template>

<script>
// @ is an alias to /src
import { lang } from "@/data/lang.js";

export default {
  name: "AdvertisementsView",
  components: {},
  created() {
    if (lang.value == 0) document.title = "Izgubljene životinje - Spasko";
    else document.title = "Lost pets - Spasko";
  },
};
</script>