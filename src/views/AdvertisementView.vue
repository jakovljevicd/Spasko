<template>
  <div class="container col-lg-8">
    <div class="shadow row col-lg-12">
      <h2>{{ advertisement.name }}</h2>
      <hr />
      <h4>{{ content.description[lang.get()] }}:</h4>
      <p>{{ advertisement.description }}</p>
      <div class="col-lg-9">
        <h4>{{ content.contact[lang.get()] }} : {{ advertisement.contact }}</h4>
      </div>
      <div class="col-lg-3">
        <button @click="printAd()" class="btn">
          {{ content.print[lang.get()] }}
        </button>
      </div>
    </div>
    <div class="shadow comments row col-lg-12">
      <h2>{{ content.comments[lang.get()] }}</h2>
      <hr />
      <div class="col-lg-9">
        <textarea
          name="newcomment"
          id="newcomment"
          cols=""
          rows=""
          v-model="newcomment"
        ></textarea>
      </div>
      <div class="col-lg-3">
        <button @click="addComment()" class="btn">
          {{ content.addComment[lang.get()] }}
        </button>
      </div>
      <hr />
      <div v-if="advertisement.comments.length == 0">
        <p>{{ content.noComments[lang.get()] }}</p>
      </div>
      <template v-else v-for="comment in advertisement.comments" :key="comment">
        <h4>{{ comment.user }}</h4>
        <p>{{ comment.text }}</p>
        <hr />
      </template>
    </div>
  </div>
</template>

<style scoped>
h2,
h4 {
  text-align: left;
}
p {
  text-align: justify;
}
textarea {
  width: 100%;
  margin-bottom: 1rem;
}
</style>

<script>
import { lang } from "@/data/lang.js";
import content from "@/data/advertisementContent.js";
import advertisements from "@/data/advertisements.js";

export default {
  name: "AdvertisementView",
  created() {
    if (lang.get() == 0) document.title = "Izgubljeni ljubimac - Spasko";
    else document.title = "Lost pet - Spasko";
    let storedAds =
      JSON.parse(localStorage.getItem("advertisements")) || advertisements;
    this.advertisement = storedAds[this.$route.params.id];
    localStorage.setItem("advertisements", JSON.stringify(storedAds));
  },
  data() {
    return {
      lang: lang,
      content: content,
      advertisement: [],
      newcomment: "",
    };
  },
  methods: {
    addComment() {
      let comment = {
        user: localStorage.getItem("user"),
        text: this.newcomment,
      };
      let storedAds = JSON.parse(localStorage.getItem("advertisements"));
      storedAds[this.$route.params.id].comments.push(comment);
      localStorage.setItem("advertisements", JSON.stringify(storedAds));
      this.$router.go();
    },
    printAd() {
      window.print();
    },
  },
};
</script>