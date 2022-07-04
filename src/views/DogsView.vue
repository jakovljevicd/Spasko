<template>
  <div class="add container col-lg-8">
    <div class="add row col-lg-12">
      <Breadcrumb
        class="row justify-content-center mt-4"
        :crumbs="crumbs"
        @selected="selected"
      />
    </div>

    <div class="row col-lg-12">
      <div class="search col-lg-6">
        <input type="text" id="fname" name="fname" v-model="weight" /><br />
        <button class="btn btn_search" @click="search_weight()">
          {{ content.weight_search[lang.get()] }}
        </button>
      </div>
      <div class="search col-lg-6">
        <input type="text" id="fname" name="fname" v-model="age" /><br />
        <button class="btn btn_search" @click="search_age()">
          {{ content.age_search[lang.get()] }}
        </button>
      </div>
    </div>

    <div class="add container col-lg-12">
      <Animal v-for="dog in types" :key="dog.type" :animal="dog"></Animal>
    </div>
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
  height: 100%;
  align-items: center;
  justify-content: center;
}
.row {
  margin: 0.5rem;
}
.search {
  margin-top: 40px;
}
.btn_search {
  align-self: left;
}
</style>

<script>
import { lang } from "@/data/lang.js";
import Animal from "../components/Animal.vue";
import animals from "../data/animals.js";
import content from "@/data/animalContent.js";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "DogsView",
  components: {
    Animal,
    Breadcrumb,
  },

  created() {
    if (lang.get() == 0) document.title = "Zivotinje u sklonistu - Spasko";
    else document.title = "Animals housed at shelter - Spasko";

    this.types = this.animals.filter(
      (animal) => animal.type == this.$route.params.type
    );
    this.types_og = this.animals.filter(
      (animal) => animal.type == this.$route.params.type
    );
  },
  data() {
    return {
      animals: animals,
      content: content,
      lang: lang,
      types_og: {},
      types: {},
      weight: "",
      age: "",
      crumbs: [
        {
          name: ["Početna", "Home"],
          path: "/",
        },
        {
          name: ["Životinje", "Animal"],
          path: "/dogs/:type",
        },
      ],
    };
  },
  methods: {
    search_weight() {
      if (this.weight != "") {
        this.types = this.types_og.filter(
          (type) => type.weight >= Number(this.weight)
        );
      } else {
        this.types = this.types_og;
      }
    },
    search_age() {
      if (this.age != "") {
        this.types = this.types_og.filter(
          (type) => type.age >= Number(this.age)
        );
      } else {
        this.types = this.types_og;
      }
    },
    selected(crumb) {
      this.$router.push({ path: crumb.path });
    },
  },
};
</script>