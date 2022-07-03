<template>
  <div class="home">
    <div class="newads row col-lg-8">
      <AdvertisementSmall
        v-if="advertisements[0] != null"
        :advertisement="advertisements[0]"
        :index="advertisements.length - 1 - 0"
        :button="'more'"
      />
      <AdvertisementSmall
        v-if="advertisements[1] != null"
        :advertisement="advertisements[1]"
        :index="advertisements.length - 1 - 1"
        :button="'more'"
      /><AdvertisementSmall
        v-if="advertisements[2] != null"
        :advertisement="advertisements[2]"
        :index="advertisements.length - 1 - 2"
        :button="'more'"
      />
    </div>
    <div class="shadow col-lg-8" v-for="post in content" :key="post">
      <h4>{{ post.title[lang.get()] }}</h4>
      <p>{{ post.text[lang.get()] }}</p>
    </div>
  </div>
</template>

<style scoped>
.newads {
  justify-content: center;
}
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
h4 {
  text-align: left;
}
p {
  text-align: justify;
}
</style>

<script>
// @ is an alias to /src
import { lang } from "@/data/lang.js";
import content from "@/data/homeContent.js";
import advertisements from "@/data/advertisements";
import AdvertisementSmall from "@/components/AdvertisementSmall.vue";

export default {
  name: "HomeView",
  components: { AdvertisementSmall },
  created() {
    if (lang.get() == 0) document.title = "Početna - Spasko";
    else document.title = "Home - Spasko";
    this.advertisements =
      JSON.parse(localStorage.getItem("advertisements")) || advertisements;
    localStorage.setItem("advertisements", JSON.stringify(this.advertisements));
    this.advertisements.reverse();
    console.log(this.advertisements);
  },
  data() {
    return {
      lang: lang,
      content: content,
      advertisements: [],
    };
  },
};
</script>
