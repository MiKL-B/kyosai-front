<template>
  <Layout>
    <div id="main">
      <header>
        <!--presentation asso-->
        <h1
          class="text-4xl text-gray-900 lg:text-5xl mb-10 font-black lg:max-w-6xl"
        >
          Association sur la pop-culture, le papercraft, le dessin et autres
          activités manuelles.
          <br />
          <a class="text-blue-400">Bonne humeur incluse !</a>
        </h1>

        <p class="text-2xl lg:text-3xl text-justify font-bold mb-10">
          L'association Kyosai est une association de loi 1901 qui base son
          activité sur la promotion de la pop-culture, qu'elle soit
          franco-belge, américaine ou japonaise. Cette association propose à ses
          membres de réaliser du papercraft, des illustrations, du cosplay et
          d'autres activités manuelle et digitale.
        </p>
      </header>

      <!--section articles-->
      <section class="flex flex-wrap justify-around">
        <GridImage
          v-for="section in sections"
          :key="section.title"
          :section="section"
          class="mb-8"
        />
      </section>
    </div>
  </Layout>
</template>

<script>
import GridImage from "~/components/GridImage.vue";
export default {
  components: { GridImage },
  metaInfo: {
    title: "Association Kyosai",
  },
//==================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                  
//  ####      ###    ######    ###                                                                                                                                                                                                                                                                
//  ##  ##   ## ##     ##     ## ##                                                                                                                                                                                                                                                               
//  ##  ##  ##   ##    ##    ##   ##                                                                                                                                                                                                                                                              
//  ##  ##  #######    ##    #######                                                                                                                                                                                                                                                              
//  ####    ##   ##    ##    ##   ##                                                                                                                                                                                                                                                              
//                                                                                                                                                                                                                                                                                                  
//==================================================================================================================================================================================================================================================================================================

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
