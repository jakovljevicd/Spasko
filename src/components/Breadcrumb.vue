<template>
  <nav>
    <ol class="breadcrumb" style="--bs-breadcrumb-divider: '>'">
      <li v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb-item">
        <button
          id="breadcrumb-button"
          class="btn btn-link"
          :class="{ disabled: isLast(ci) }"
          @click="selected(crumb)"
        >
          {{ crumb.name[lang.get()] }}
        </button>
      </li>
    </ol>
  </nav>
</template>

<script>
import { lang } from "@/data/lang.js";

export default {
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      this.$emit("selected", crumb);
    },
  },
  data() {
    return {
      lang: lang,
    };
  },
};
</script>
 
<style scoped>
.disabled {
  text-decoration: none;
}
#breadcrumb-button {
  background-color: white;
  color: #000;
}
#breadcrumb-button:hover {
  color: rgba(0, 0, 0, 0.55);
}
.breadcrumb-item::before {
  float: none;
}
</style>