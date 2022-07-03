<template>
  <div class="advertisements container col-lg-8">
    <Advertisement
      v-for="(advertisement, index) in advertisements"
      :key="advertisement"
      :advertisement="advertisement"
      :index="index"
    />
  </div>
</template>

<style scoped>
.advertisements {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
</style>

<script>
// @ is an alias to /src
import { lang } from "@/data/lang.js";
import advertisements from "@/data/advertisements.js";
import Advertisement from "@/components/Advertisement.vue";

export default {
  name: "AdvertisementsView",
  components: {
    Advertisement,
  },
  created() {
    if (lang.get() == 0) document.title = "Izgubljeni ljubimci - Spasko";
    else document.title = "Lost pets - Spasko";
    this.advertisements =
      JSON.parse(localStorage.getItem("advertisements")) || advertisements;
    localStorage.setItem("advertisements", JSON.stringify(this.advertisements));
  },
  data() {
    return {
      lang: lang,
      advertisements: [],
    };
  },
};
</script>