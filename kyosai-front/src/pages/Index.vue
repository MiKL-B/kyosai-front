<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!--<g-image alt="Example image" src="~/favicon.png" width="135" />-->
   <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>-->
 <!--main-->
        <div id="main ">
            <div class="inner">
                <header class="">
                    <h1 class="text-8xl mx-10  lg:mx-52 mb-12 font-bold relative lg:text-5xl sm:text-5xl">Association
                        sur la pop-culture, le papercraft, le </br>
                        dessin et autres activités manuelles.</br>
                        <a class="bleu">Bonne humeur incluse !</a>
                    </h1>

                    <p class="mx-10 lg:mx-52 text-4xl lg:text-lg sm:text-lg mb-10 relative ">L'association Kyosai est
                        une association de loi 1901 qui base son
                        activité sur la promotion de la
                        pop-culture, qu'elle soit franco-belge, américaine</br>ou japonaise.
                        Cette association propose à ses membres de réaliser du papercraft, des illustrations, du cosplay
                        et d'autres activités manuelle et</br>digitale.</p>
                </header>
                <!--section articles-->
                <section class="tiles flex flex-wrap  flex-row mx-52  ">
                    <!--papercraft-->

                    <article
                        class="article">
                        <span class="image"><img class="h-full" src="/papercraft.png" alt></span>
                        <g-link to="/papercraft/">

                            <div
                                class=" content-article bg-pink-400 ">
                                <h2
                                    class="titre-article">
                                    papercraft</h2>
                                <p
                                    class="para-article group-hover:opacity-100">
                                    Atelier de papercraft</p>
                            </div>
                        </g-link>
                    </article>

                    <!--dessin-->
                    <article
                        class="article ">
                        <span class="image"><img class="h-full m-auto" src="/dessin.png" alt></span>
                        <g-link to="/dessin/">

                            <div
                                class="content-article bg-blue-200 ">
                                <h2
                                    class="titre-article">
                                    dessin</h2>
                                <p
                                    class="para-article group-hover:opacity-100">
                                    Atelier de dessin</p>
                            </div>
                        </g-link>
                    </article>
                    <!--cosplay-->
                    <article
                        class="article ">
                        <span class="image"><img class="h-full" src="/cosplay.jpg" alt></span>
                        <g-link to="/cosplay/">

                            <div
                                class="content-article bg-green-300  ">
                                <h2
                                    class="titre-article">
                                    cosplay</h2>
                                <p
                                    class="para-article group-hover:opacity-100">
                                    Atelier de cosplay</p>
                            </div>
                        </g-link>
                    </article>
                    <!--art gaming-->

                    <article
                        class="article">
                        <span class="image"><img class="h-full " src="/artgaming.png"></span>
                        <g-link to="/gaming/">

                            <div
                                class="content-article bg-yellow-200 ">
                                <h2
                                    class="titre-article">
                                    art gaming</h2>
                                <p
                                    class="para-article group-hover:opacity-100">
                                    Atelier d'art gaming</p>
                            </div>
                        </g-link>
                    </article>
                </section>
            </div>
        </div>
  <!--<GridImage/>-->
  </Layout>
</template>

<script>
import GridImage from "~/components/GridImage.vue"
export default {
  components:{GridImage},
  metaInfo: {
    title: 'Bienvenue sur'
  }
}
</script>

<style>

</style>
