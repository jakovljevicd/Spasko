<template>
  <div id="animal" class="row shadow col-lg-12">
    
    <h2>{{ animal.name }}</h2>

    <hr />
    <div class = "col-lg-8">
        
        <h4>{{ content.desc[lang.get()] }}:</h4>
        <p>{{ animal.desc }}</p>
        
        
        <h4>{{ content.age[lang.get()] }}:</h4>
        <p>{{ animal.age }}</p>
        
        <h4>{{ content.weight[lang.get()] }}:</h4>
        <p>{{ animal.weight }}</p>
    </div>
    <div class="col-lg-4">
        <div class = "row">
            <img :src="animal.media[0]">

        </div>
        <br>
        <div class = "row">
            <router-link :to='/animal/+animal.id'>
                <button class="btn">{{ content.more[lang.get()] }}</button>
            </router-link>

        </div>
        

    </div>


  </div>
</template>

<style scoped>
button{
    
    
    width:90%;
    align-self:left;
}
h2,h4{
    text-align: left;
}
p{
    text-align: justify;
}

img{
    height:85%;
    width:85%;
    align-self:right;
    
}
</style>

<script>
import content from "@/data/animalContent.js";
import { lang } from "@/data/lang.js";
export default {
  name: "Animal",
  props: ["animal"],
 
  data() {
    return {
        

    
      content: content,
      lang: lang,
    };
  },
};
</script>