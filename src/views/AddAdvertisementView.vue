<template>
  <div class="add container col-lg-8">
    <form class="shadow" action="">
      <h4>{{ content.title[lang.get()] }}</h4>
      <label class="row" for="text">{{
        content.description[lang.get()]
      }}</label>
      <textarea class="row" type="text" name="text" v-model="text" />
      <label class="row" for="contact">{{ content.contact[lang.get()] }}</label>
      <input class="row" type="text" name="contact" v-model="contact" />
      <button @click="addAdd($event)" class="btn row" type="submit">
        {{ content.submit[lang.get()] }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.add {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.row {
  margin: 0.5rem;
}
</style>

<script>
import content from "@/data/addAdvertisementContent.js";
import advertisements from "@/data/advertisements.js";
import { lang } from "@/data/lang.js";

export default {
  name: "AddAdvertisementsView",
  components: {},
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
    };
  },
  methods: {
    addAdd(event) {
      event.preventDefault();
      let storedAds =
        JSON.parse(localStorage.getItem("advertisements")) || advertisements;
      storedAds.push({
        name: "user",
        description: this.text,
        contact: this.contact,
      });
      localStorage.setItem("advertisements", JSON.stringify(storedAds));
      this.$router.push("/account");
    },
  },
};
</script>