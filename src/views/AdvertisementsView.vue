<template>
  <div class="advertisements container col-lg-8">
    <Breadcrumb
      class="row justify-content-center mt-4"
      :crumbs="crumbs"
      @selected="selected"
    />
    <Advertisement
      v-for="(advertisement, index) in advertisements"
      :key="advertisement"
      :advertisement="advertisement"
      :index="index"
      :button="'more'"
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
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "AdvertisementsView",
  components: {
    Advertisement,
    Breadcrumb,
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
      crumbs: [
        {
          name: ["Početna", "Home"],
          path: "/",
        },
        {
          name: ["Izgubljeni ljubimci", "Lost pets"],
          path: "/advertisements",
        },
      ],
    };
  },
  methods: {
    selected(crumb) {
      this.$router.push({ path: crumb.path });
    },
  },
};
</script>