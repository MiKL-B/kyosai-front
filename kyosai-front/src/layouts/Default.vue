<template>
  <div class="">
  <!--remettre dans le header gridsome voir doc-->
    <link
      rel="stylesheet"
      id="fa-fonts-css"
      href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css?ver=5.2"
      type="text/css"
      media="all"
    />
    <header class="min-w-full flex flex-wrap">
      <!--logo et link association-->
      <g-link
        to="/"
        class="flex flex-wrap flex-col sm:flex-row  my-5 mx-5 sm:mx-20 2xl:mx-52"
      >
        <img class="h-28 sm:h-32 md:h-40 lg:h-52" src="/logo.png" alt />
        <span
          class="c-title text-red-400 font-black text-2xl mb-10 sm:mt-10 md:mt-14 lg:mt-20"
          >KYOSAI</span
        >
      </g-link>

      <!--NAV-->
      <nav class="min-w-full">
        <!--MENU BURGER-->
        <div
          @click="showSidenav = !showSidenav"
          class="menu-btn right-5 top-5 xl:right-10 xl:top-10  text-7xl  font-bold  fixed rounded-lg  z-10 "
          :class="{ open: showSidenav }"
        >
          <span></span>
        </div>
        <div v-if="showSidenav" class="sidenav h-full ">
          <h2 class="uppercase font-bold text-2xl pl-10 my-10">{{ titre }}</h2>
          <div class="w-80">
            <ul>
              <!--COMPONENT BURGER-->
              <MenuBurgerLink
                v-for="burger in burgers"
                :key="burger.menu"
                :burger="burger"
              />
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <slot />
    <!--footer-->
    <footer
      class="py-10 md:px-0 bg-gray-100 flex flex-wrap flex-col xl:flex-row "
      id="footer"
    >
      <div
        class="mx-5 sm:mx-20  flex flex-col xl:flex-row xl:relative 2xl:mx-52 "
      >
        <!--CONTACT-->
        <section class="mb-20 lg:mb-0 xl:py-10">
          <h2
            class="text-xl sm:text-2xl font-bold uppercase tracking-widest mb-10 text-center xl:text-left xl:mx-5"
          >
            Restons en contact
          </h2>
          <!--form-->
          <form method="POST" action="#" class="">
            <div class="flex flex-col flex-wrap xl:flex-row">
              <!--name-->
              <div class="md:mx-auto xl:mx-5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  class="bg-transparent w-72  sm:w-full md:w-96   h-20 border-b-2 focus:outline-none focus:border-pink-400 text-xl"
                />
              </div>
              <!--email-->
              <div class="md:mx-auto xl:mx-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  class="bg-transparent  w-72 sm:w-full md:w-96 mb-2 h-20 border-b-2 focus:outline-none focus:border-pink-400 text-xl "
                />
              </div>
              <!--message-->
              <div class="md:mx-auto xl:mx-5">
                <div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    cols="1"
                    rows="45"
                    style="overflow: hidden; resize: none; height: 100px"
                    class="bg-transparent w-72 sm:w-full md:w-96 my-2 h-20 border-b-2 focus:outline-none focus:border-pink-400 text-xl "
                  ></textarea>
                </div>
              </div>
            </div>
            <!--submit-->
            <ul>
              <li>
                <input
                  type="submit"
                  value="Send"
                  class="mt-8 py-7 w-72 xl:w-40 xl:mx-5 sm:w-full bg-gray-600 text-white font-bold uppercase rounded-md hover:bg-pink-400 cursor-pointer  text-xl"
                />
              </li>
            </ul>
          </form>
        </section>
        <!--FOLLOW-->
        <section class="lg:py-10  ">
          <h2
            class="text-xl sm:text-2xl font-bold uppercase tracking-widest mb-10 text-center xl:text-left "
          >
            Nous suivre
          </h2>
          <ul class=" flex flex-row mx-5 md:mx-auto ">
            <SocialLink v-for="link in links" :key="link.url" :link="link" />
          </ul>
        </section>
        <!--COPYRIGHT-->
        <ul
          class="flex flex-col sm:flex-row md:mx-auto xl:absolute xl:bottom-0 mt-10 mx-5  xl:mx-5 text-gray-300 text-xl "
        >
          <li>@ untitled all rights reserved |</li>

          <li>design: <a href="#"> </a> |</li>

          <li>demo image <a href="#"></a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
import MenuBurgerLink from "~/components/MenuBurgerLink.vue";
import SocialLink from "~/components/SocialLink.vue";
export default {
  components: { SocialLink, MenuBurgerLink },

  metaInfo: {},
  data() {
    return {
      links: [
        {
          url: "https://www.facebook.com/kyosai.asso",
          icone: "fa fa-facebook",
        },
        {
          url:
            "https://www.instagram.com/asso_kyosai/?fbclid=IwAR1IxNP1jUFVc7XRr0R-Adpen4RHWzgB1Yia9MIPNu5a0o5YW6RjLwvJ0zY",
          icone: "fa fa-instagram",
        },
        {
          url: "https://twitter.com/AssoKyosai",
          icone: "fa fa-twitter",
        },
        {
          url: "",
          icone: "fa fa-phone",
        },
      ],
      burgers: [
        {
          link: "/",
          menu: "Accueil",
        },
        {
          link: "/papercraft",
          menu: "Papercraft",
        },
        {
          link: "/dessin",
          menu: "Dessin",
        },
        {
          link: "/cosplay",
          menu: "Cosplay",
        },
        {
          link: "/gaming",
          menu: "Art Gaming",
        },
        {
          link: "/convention",
          menu: "Convention",
        },
        {
          link: "/about",
          menu: "à propos",
        },
         {
          link: "/shop",
          menu: "Boutique",
        },
      ],
      showSidenav: false,
      titre: "Menu",
    };
  },
};
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@font-face {
  font-family: "Source Sans Pro";
  src: url("../assets/Source_Sans_Pro/SourceSansPro-Black.ttf");
  font-weight: normal;
}
@font-face {
  font-family: "Papyrus";
  src: url("../assets/Papyrus/Papyrus.ttf");
  font-weight: normal;
}

#app {
  max-width: 100vw;
  background-image: url("/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "Source Sans Pro";
}
.c-title {
  font-family: "Papyrus";
}
.c-paragraphe {
  font-family: "Source sans pro";
}
h2 {
  transition: 0.5s;
}
article h2 {
  text-shadow: 0px 0px 5px black;
}
article:hover h2 {
  transform: translateY(-20px);
}

article p {
  text-shadow: 0px 0px 5px black;
}
article:hover p {
  transform: translateY(-20px);
}
/*DISPLAY IMAGE POSTS */
/*impossible à supprimer */
.gallery-row {
  display: flex;
  flex-wrap: wrap;
}
/* pas plus de 2 chemins  */
.c-content a {
  color: #60a5fa;
  font-weight: bold;
}

/*MENU BURGER STYLE */

.sidenav {
  position: fixed;
  right: 0;
  top: 0;
  color: #fff;
  background: #585858;
  z-index: 2;
  width: theme("width.60");
}
.sidenav :nth-child(1) {
  border: none;
}

.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: theme("width.12");
  height: theme("height.10");
  cursor: pointer;
  transition: theme("transitionDuration.500");
}
.menu-btn:hover::before {
  background: #f472b6;
}
.menu-btn:hover::after {
  background: #f472b6;
}
.menu-btn:hover span {
  background: #f472b6;
}
.menu-btn span {
  content: "";
  position: absolute;
  height: theme("height.1");
  width: 100%;
  background: #585858;
}
.menu-btn::before {
  content: "";
  top: 0;
  position: absolute;
  height: theme("height.1");
  width: 100%;
  background: #585858;
}
.menu-btn::after {
  content: "";
  bottom: 0;
  position: absolute;
  height: theme("height.1");
  width: 100%;
  background: #585858;
}

.menu-btn.open {
  transform: translateX(-220px) rotate(-180deg);
  background: none;
}

.menu-btn.open span {
  display: none;
}
.menu-btn.open::before {
  transform: translateY(17px) rotate(-45deg);
}
.menu-btn.open::after {
  transform: translateY(-17px) rotate(45deg);
}
</style>
