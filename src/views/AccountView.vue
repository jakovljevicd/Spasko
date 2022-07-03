<template>
  <div class="account container col-lg-8">
    <Breadcrumb
      class="row justify-content-center mt-4"
      :crumbs="crumbs"
      @selected="selected"
    />
    <div class="col-lg-12">
      <h2>{{ content.myAds[lang.get()] }}</h2>
      <p v-if="myAdvertisements.length == 0">
        {{ content.accountNoAds[lang.get()] }}
      </p>
    </div>
    <Advertisement
      v-for="(advertisement, index) in myAdvertisements"
      :key="advertisement"
      :advertisement="advertisement"
      :index="index"
      :button="'del'"
    />
    <div class="col-lg-12">
      <h2>{{ content.myComments[lang.get()] }}</h2>
    </div>
    <div class="shadow col-lg-12" v-for="comment in myComments" :key="comment">
      <p>{{ comment.text }}</p>
    </div>
    <div class="col-lg-12" v-if="myComments.length == 0">
      <p>{{ content.accountNoComments[lang.get()] }}</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: left;
}
p {
  text-align: justify;
}
</style>

<script>
// @ is an alias to /src
import { lang } from "@/data/lang.js";
import advertisements from "@/data/advertisements.js";
import Advertisement from "@/components/Advertisement.vue";
import content from "@/data/advertisementContent.js";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "AccountView",
  components: {
    Advertisement,
    Breadcrumb,
  },
  created() {
    if (lang.get() == 0) document.title = "Moj nalog - Spasko";
    else document.title = "My account - Spasko";
    this.advertisements =
      JSON.parse(localStorage.getItem("advertisements")) || advertisements;
    this.myAdvertisements = this.advertisements.filter(function (element) {
      if (element.name == localStorage.getItem("user")) return element;
    });
    this.advertisements.forEach((element) => {
      if (element.comments.length != 0) {
        element.comments.forEach((comment) => {
          if (comment.user == localStorage.getItem("user")) {
            this.myComments.push(comment);
          }
        });
      }
    });
  },
  data() {
    return {
      lang: lang,
      advertisements: [],
      myAdvertisements: [],
      myComments: [],
      content: content,
      crumbs: [
        {
          name: ["Početna", "Home"],
          path: "/",
        },
        {
          name: ["Moj nalog", "My account"],
          path: "/account",
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