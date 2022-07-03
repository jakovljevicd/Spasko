<template>
<div class = " home col-lg-12">
    <div class = " shadow   col-lg-8">
    <h1>
        <b>{{ content.title[lang.get()] }}</b>
    </h1>
    <p>
        <b>Sajt Spasko azila je rad Danice Jakovljevic i Petra Jovovica.
        Omogucava jasan pregled  zivotinja smestenih u azilu  
        kao i laku ostavljanje,pregledanje i komentarisanje oglasa.
        Kontakt forme oglasavača su uvek brzo dostupne.
        Navigacija na sajtu nikad nije bila laksa uz naš
        intuitivni navigacioni meni.Spasko sajt je
        ne samo doprineo udomljavanju mnogobrojnih 
        životinja već je zbog svoje inovativne tehnologije
        nagrađen i Turingovom nagradom 2021. godine.

        </b>
    </p>


  </div>

  
  <div class = " add shadow  col-lg-6">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.45940158124!2d20.47478741981186!3d44.804375053421296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f5ee145d3%3A0x3ed89b5bb505d83!2z0JXQu9C10LrRgtGA0L7RgtC10YXQvdC40YfQutC4INGE0LDQutGD0LvRgtC10YIg0KPQvdC40LLQtdGA0LfQuNGC0LXRgtCwINGDINCR0LXQvtCz0YDQsNC00YM!5e0!3m2!1ssr!2srs!4v1656883827053!5m2!1ssr!2srs" 
    width="100%" height="100%" style="border:2;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
  </div>

</div>
  
    
      
     
     
    
  
</template>
<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.add {
  height:300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img{
    width : 55%;
    height: 35%;
    align-self:right;


}
.flex-container {
  display: flex;
  
  
}
p{
    text-align:justify;
}
</style>

<script>
import { lang } from "@/data/lang.js";
import content from "@/data/aboutUsContent.js";

export default {
  name: "AboutUsView",
  components: {
    
  },
 
  created() {
    if (lang.get() == 0) document.title = "O nama";
    else document.title = "About us";
    
  },
  data() {
     return {
      content: content,
      lang: lang,
    };
   
      
    
  },
};
</script>