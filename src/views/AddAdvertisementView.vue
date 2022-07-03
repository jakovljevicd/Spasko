<template>
  <div class="add container col-lg-8">
    <Breadcrumb
      class="row justify-content-center mt-4"
      :crumbs="crumbs"
      @selected="selected"
    />
    <form class="shadow col-lg-12" action="">
      <h2>{{ content.title[lang.get()] }}</h2>
      <hr />
      <div class="row">
        <div class="col-lg-9">
          <label class="col-lg-12" for="text"
            ><h4>{{ content.description[lang.get()] }}:</h4>
          </label>
          <textarea class="col-lg-12" type="text" name="text" v-model="text" />
          <label class="col-lg-12" for="contact"
            ><h4>{{ content.contact[lang.get()] }}:</h4></label
          >
          <input
            class="col-lg-12"
            type="text"
            name="contact"
            v-model="contact"
          />
        </div>
        <div class="btn-div col-lg-3">
          <button @click="addAd($event)" class="btn" type="submit">
            {{ content.submit[lang.get()] }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
h4,
h2 {
  text-align: left;
}
.btn-div {
  display: flex;
  justify-content: center;
  align-items: end;
}
</style>

<script>
import content from "@/data/addAdvertisementContent.js";
import advertisements from "@/data/advertisements.js";
import { lang } from "@/data/lang.js";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "AddAdvertisementsView",
  components: { Breadcrumb },
  created() {
    if (lang.get() == 0) document.title = "Novi oglas - Spasko";
    else document.title = "New advertisement - Spasko";
  },
  data() {
    return {
      content: content,
      lang: lang,
      text: "",
      contact: "",
      crumbs: [
        {
          name: ["Početna", "Home"],
          path: "/",
        },
        {
          name: ["Dodaj oglas", "Add advertisement"],
          path: "/add_advertisements",
        },
      ],
    };
  },
  methods: {
    addAd(event) {
      event.preventDefault();
      let storedAds =
        JSON.parse(localStorage.getItem("advertisements")) || advertisements;
      storedAds.push({
        name: localStorage.getItem("user"),
        description: this.text,
        contact: this.contact,
        comments: [],
      });
      localStorage.setItem("advertisements", JSON.stringify(storedAds));
      this.$router.push("/account");
    },
    selected(crumb) {
      this.$router.push({ path: crumb.path });
    },
  },
};
</script>