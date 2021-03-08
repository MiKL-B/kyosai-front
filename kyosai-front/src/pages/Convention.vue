<template>
  <layout>
    <!-- MAIN -->
    <main>
      <h1 class="text-center text-4xl">Conventions et Salons</h1>
      <div>
        <p>
          <span class="font-bold"
            >Voici une liste (non-exhaustive) des salons, conventions et autres
            événements où vous pouvez nous retrouver.</span
          >
          Nous voyageons essentiellement dans le Grand Est, mais vous pouvez
          nous retrouver à Dijon, voire à Lausanne, en Suisse!
        </p>
        <p>Dans l’ordre chronologique (Septembre-Août) :</p>
        <ul>
        <LinkConvention v-for="convlink in conventions" :key="convlink.name" :convlink="convlink" />
        </ul>
        <p>Une petite rétrospective des derniers salons et conventions</p>
      </div>
    </main>
  </layout>
</template>

<script>
import LinkConvention from "~/components/LinkConvention.vue";
export default {
    components:{LinkConvention},
  metaInfo: {
    title: "convention",
  },
  data(){
      return{
          conventions:[
              {
                  name:"Forum des Associations",
                  url:"https://www.laxou.fr/fr/19eme-forum-des-associations/agenda.html",
                  town:"Laxou"
              },
               {
                  name:"Nekonvention",
                  url:"http://www.nekonvention.fr/",
                  town:"Sélestat"
              },
               {
                  name:"Anim'est",
                  url:"https://www.animest.net/",
                  town:"Nancy"
              },
               {
                  name:"Japan Impact",
                  url:"https://japan-impact.ch/fr/",
                  town:"Lausanne (Suisse)"
              },
               {
                  name:"Senyu",
                  url:"https://www.facebook.com/senyuofficiel/",
                  town:"Epinal"
              },
               {
                  name:"Kamo-Con",
                  url:"https://kamo-con.fr/",
                  town:"Dijon"
              },
               {
                  name:"Villers BD",
                  url:"https://www.villers-bd.com/",
                  town:"Villers-lès-Nancy"
              },
               {
                  name:"Cosplay in Wesserling",
                  url:"https://www.parc-wesserling.fr/agenda/cosplayin-wesserling/",
                  town:"Husseren Wesserling (2018)"
              },
               {
                  name:"Metz torii",
                  url:"https://metztorii.fr/",
                  town:"Metz"
              },
               {
                  name:"Festival part'âges",
                  url:"https://www.laxou.fr/fr/festival-partages-nouvelle-conference/agenda.html",
                  town:"Laxou"
              },
               {
                  name:"Convention Geek Unchained",
                  url:"https://convention.geekunchained.fr/",
                  town:"Mulhouse"
              },
               {
                  name:"Fontenoy fête la bd",
                  url:"http://www.villagedulivre54.fr/fontenoy-fete-bd-programme/",
                  town:"Fontenoy-la-Joute (2017)"
              },

          ]
      }
  }
};
</script>
