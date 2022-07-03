<template>
  <div class="add container col-lg-8">
    <Animal v-for="dog in dogs" :key="dog.id" :animal="dog"></Animal>
  </div>
</template>
<style scoped>
.animals {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

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
import { lang } from "@/data/lang.js";
import Animal from "../components/Animal.vue";
import dogs from "../data/dogs.js";

export default {
  name: "DogsView",
  components: {
    Animal,
  },
  created() {
    if (lang.get() == 0) document.title = "Izgubljeni ljubimci - Spasko";
    else document.title = "Lost pets - Spasko";
  },
  data() {
    return {
      dogs: dogs,
    };
  },
};
</script>