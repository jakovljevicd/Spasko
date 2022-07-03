<template>
  <div class="shadow row col-lg-4">
    <h4>{{ advertisement.name }}</h4>
    <hr />
    <h6>{{ content.description[lang.get()] }}:</h6>
    <p>{{ advertisement.description }}</p>
    <div class="col-lg-12" v-if="button == 'more'">
      <router-link :to="{ name: 'advertisement', params: { id: index } }">
        <button class="btn">{{ content.more[lang.get()] }}</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
h4,
h6 {
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
  methods: {},
};
</script>