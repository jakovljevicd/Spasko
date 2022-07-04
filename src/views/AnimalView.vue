<template>
    <div class="container col-lg-8">
        <Breadcrumb
            class="row justify-content-center mt-4"
            :crumbs="crumbs"
            @selected="selected"
        />
        <div class = " row shadow  col-lg-12" >
            
            <h2>{{ animal.name }}</h2>
            <hr />
            <h4>{{ content.desc[lang.get()] }}:</h4>
            <p>{{ animal.desc }}</p>
            
            <h4>{{ content.age[lang.get()] }} : {{ animal.age }}</h4>
            <h4>{{ content.weight[lang.get()] }} : {{ animal.weight }}</h4>

        </div>

        <div class = " flex-container shadow ">

            <div >
                <h4>{{ content.photo_gallery[lang.get()] }}</h4>

            </div>
           
           <hr>
           
           
            
            <div v-for="path in animal.media" :key = path>
                <img  :src="path" >

            </div>
            
            
               
            
              
        </div>

        <div class = "flex-container  shadow col-lg-12">
            <div >
                <h4>{{ content.video_gallery[lang.get()] }}</h4>
                
            </div>
            <hr>
            <div>
                <span>
                    <iframe  v-for="path in animal.media2" :key = path
                        :src="path">
                    </iframe>
                </span>

            </div>
            
            

        </div>

        
            
        
              
            
              
        
      
        
        
  </div>

</template>

<style scoped>
img{
    width:100%;
    height:100%
    
}
h4{
    text-align:center;
}
p{
    text-align:center;
}
.add {
  display: flex;
  
  align-items: right;
  justify-content: right;
  
}
.info {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.flex-container {
  display: flex;
  
  
}
</style>

<script>
import animals from "../data/animals.js";
import { lang } from "@/data/lang.js";
import content from "@/data/animalContent.js";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default{
        name: 'AnimalView',
        components: {
            Breadcrumb,
    
        },
        created(){
            if (lang.get() == 0) document.title = "Detalji zivotinja";
            else document.title = "Animal details";
            var animalId = Number(this.$route.params.id)
            this.animal = this.animals.find(animal=>animal.id==animalId)
        },
        data(){
            return{
                animals: animals,
                animal: {},
                content: content,
                lang: lang,
                crumbs: [
                    {
                        name: ["Početna", "Home"],
                        path: "/",
                    },
                    {
                        name: ["Zivotinje", "Animals"],
                        path: "/dogs/:type",
                    },
                    {
                        name: ["Zivotinja", "Animal"],
                        path: "/",
                    },
                ],
            }
        },
        methods: {
                selected(crumb) {
                this.$router.push({ path: crumb.path });
        },
  },
    }
</script>
