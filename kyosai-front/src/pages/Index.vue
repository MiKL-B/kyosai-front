<template>
  <Layout>

    <!--main-->

    <div id="wrapper" class="flex flex-wrap">
      <div id="main">
  
          <header>
            <h1
              class="c-paragraphe text-4xl  mx-10 lg:mx-52 mb-12 font-bold relative  sm:text-5xl flex flex-wrap"
            >
              Association sur la pop-culture, le papercraft, le dessin et autres
              activités manuelles.
              <a class="text-blue-400">Bonne humeur incluse !</a>
            </h1>

            <p
              class="c-paragraphe mx-10 lg:mx-52 text-4xl text-justify sm:text-2xl mb-10  "
            >
              L'association Kyosai est une association de loi 1901 qui base son
              activité sur la promotion de la pop-culture, qu'elle soit
              franco-belge, américaine ou japonaise. Cette association propose à
              ses membres de réaliser du papercraft, des illustrations, du
              cosplay et d'autres activités manuelle et digitale.
            </p>
          </header>
          <!--section articles-->
          <section class="flex flex-wrap flex-row mx-52">
            <GridImage
              v-for="section in sections"
              :key="section.title"
              :section="section"
            />
          </section>
     
      </div>
    </div>
  </Layout>
</template>

<script>
import GridImage from "~/components/GridImage.vue";
export default {
  components: { GridImage },
  metaInfo: {
    title: "welcome",
  },
  data() {
    return {
      sections: [
        {
          title: "papercraft",
          imageUrl: "/papercraft.png",
          link: "/papercraft",
          subtitle: "Atelier de papercraft",
          color: "bg-pink-400",
        },
        {
          title: "dessin",
          imageUrl: "/dessin.png",
          link: "/dessin",
          subtitle: "Atelier de dessin",
          color: "bg-blue-400",
        },
        {
          title: "cosplay",
          imageUrl: "/cosplay.jpg",
          link: "/cosplay",
          subtitle: "Atelier de cosplay",
          color: "bg-green-300",
        },
        {
          title: "art gaming",
          imageUrl: "/artgaming.png",
          link: "/gaming",
          subtitle: "Atelier d'art gaming",
          color: "bg-yellow-200",
        },
    
      ],
    };
  },
};
</script>

<style>
</style>
