<template>
  <div class="add container col-lg-6"  >
    
      <Animal v-for="dog in types"  :key="dog.type" :animal="dog"  ></Animal>
     
     
    
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
import animals from "../data/animals.js";

export default {
  name: "DogsView",
  components: {
    Animal,
  },
 
  created() {
    if (lang.get() == 0) document.title = "Zivotinje u sklonistu - Spasko";
    else document.title = "Animals housed at - Spasko";
    this.types = this.animals.filter(animal =>animal.type==this.$route.params.type)
  },
  data() {
    return {
      animals: animals,
      types :  {}
      
    };
  },
};
</script>