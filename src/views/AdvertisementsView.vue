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
    if (lang.get() == 0) document.title = "Izgubljeni ljubimci - Spasko";
    else document.title = "Lost pets - Spasko";
  },
  data() {
    return {
      lang: lang,
    };
  },
};
</script>