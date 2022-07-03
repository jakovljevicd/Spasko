<template>
  <div class="advertisement shadow row col-lg-12">
    <h2>{{ advertisement.name }}</h2>
    <hr />
    <h4>{{ content.description[lang.get()] }}:</h4>
    <p>{{ advertisement.description }}</p>
    <div class="col-lg-9">
      <h4>{{ content.contact[lang.get()] }} : {{ advertisement.contact }}</h4>
    </div>
    <div class="col-lg-3" v-if="button == 'more'">
      <router-link :to="{ name: 'advertisement', params: { id: index } }">
        <button class="btn">{{ content.more[lang.get()] }}</button>
      </router-link>
    </div>
    <div class="col-lg-3" v-if="button == 'print'">
      <button @click="printAd()" class="btn">
        {{ content.print[lang.get()] }}
      </button>
    </div>
    <div class="col-lg-3" v-if="button == 'del'">
      <button @click="deleteAd()" class="btn">
        {{ content.deleteAd[lang.get()] }}
      </button>
    </div>
  </div>
</template>

<style scoped>
h4,
h2 {
  text-align: left;
}
p {
  text-align: justify;
}
</style>

<script>
import content from "@/data/advertisementContent.js";
import { lang } from "@/data/lang.js";

export default {
  name: "Advertisement",
  props: ["advertisement", "index", "button"],
  data() {
    return {
      content: content,
      lang: lang,
    };
  },
  methods: {
    printAd() {
      window.print();
    },
    deleteAd() {
      let storedAds = JSON.parse(localStorage.getItem("advertisements"));
      storedAds.forEach((element, index) => {
        console.log(index);
        if (
          element.name == this.advertisement.name &&
          element.description == this.advertisement.description
        ) {
          storedAds.splice(index, 1);
        }
      });
      localStorage.setItem("advertisements", JSON.stringify(storedAds));
      this.$router.go();
    },
  },
};
</script>