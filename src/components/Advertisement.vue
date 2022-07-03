<template>
  <div class="advertisement shadow row col-lg-12">
    <h2>{{ advertisement.name }}</h2>
    <hr />
    <h4>{{ content.description[lang.get()] }}:</h4>
    <p>{{ advertisement.description }}</p>
    <div class="col-lg-9">
      <h4>{{ content.contact[lang.get()] }} : {{ advertisement.contact }}</h4>
    </div>
    <div class="col-lg-3">
      <router-link :to="{ name: 'advertisement', params: { id: index } }">
        <button class="btn">{{ content.more[lang.get()] }}</button>
      </router-link>
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
  props: ["advertisement", "index"],
  data() {
    return {
      content: content,
      lang: lang,
    };
  },
};
</script>