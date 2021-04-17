<template>
  <div class="p-4">
    <div>
      <header class="container mx-auto flex mb-4">
        <!-- LOGO -->

        <g-link
          to="/"
          class="flex flex-col items-start sm:flex-row sm:items-center p-4 -ml-4"
        >
          <img class="h-28 sm:h-32 md:h-40 mr-4" src="/logo.png" alt />
          <span class="font-papyrus text-red-400 font-black text-2xl uppercase"
            >Kyosai</span
          >
        </g-link>

        <nav class="fixed z-10 top-8 right-8">
          <!-- MENU BURGER -->
          <div
            @click="showSidenav = !showSidenav"
            class="menu-btn text-7xl font-bold rounded-lg"
            :class="{ open: showSidenav }"
          >
            <span></span>
          </div>
          <!--CART-->
          <g-link to="/cart" title="Mon panier">
            <div
              v-if="showSidenav"
              class="c-cart fixed top-4 right-80 text-7xl text-gray-600 hover:text-pink-400 cursor-pointer "
            >
              <span class="text-4xl">0</span>
              <i class="fa fa-shopping-cart " aria-hidden="true"></i>
            </div>
            <div
              v-else
              class="c-cart fixed top-4 right-32 text-7xl text-gray-600 hover:text-pink-400 cursor-pointer "
            >
              <span class="text-4xl">0</span>
              <i class="fa fa-shopping-cart " aria-hidden="true"></i>
            </div>
          </g-link>
        </nav>
      </header>

      <div id="wrapper" class="container mx-auto relative mb-4 text-gray-700">
        <slot />
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-gray-100 flex flex-wrap flex-col xl:flex-row" id="footer">
      <div class="container mx-auto py-4 flex flex-col xl:flex-row xl:relative">
        <!-- CONTACT -->
        <section class="mb-20 lg:mb-0 xl:py-10">
          <h2
            class="text-xl sm:text-2xl font-bold uppercase tracking-widest mb-10 text-center xl:text-left xl:mx-5"
          >
            Restons en contact
          </h2>
          <!--FORM-->
          <form @submit.prevent="sendMail">
            <div class="flex flex-col flex-wrap xl:flex-row">
              <!--NAME-->
              <div class="md:mx-auto xl:mx-5">
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nom"
                  class="bg-transparent w-72  sm:w-full md:w-96   h-20 border-b-2 focus:outline-none focus:border-pink-400 text-xl"
                />
              </div>
              <!--EMAIL-->
              <div class="md:mx-auto xl:mx-5">
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Adresse email"
                  class="bg-transparent  w-72 sm:w-full md:w-96 mb-2 h-20 border-b-2 focus:outline-none focus:border-pink-400 text-xl "
                />
              </div>
              <!--MESSAGE-->
              <div class="md:mx-auto xl:mx-5">
                <div>
                  <textarea
                    v-model="message"
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
            <!--SUBMIT-->
            <ul>
              <li>
                <input
                  type="submit"
                  value="Envoyer"
                  class="mt-8 py-7 w-72 xl:w-40 xl:mx-5 sm:w-full bg-gray-600 text-white font-bold uppercase rounded-md hover:bg-pink-400 cursor-pointer  text-xl"
                />
              </li>
            </ul>
          </form>
        </section>
        <!-- FOLLOW -->
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
        <!-- COPYRIGHT -->

        <ul
          class="flex flex-col sm:flex-row md:mx-auto xl:absolute xl:bottom-0 mt-10 mx-5  xl:mx-5 text-gray-300 text-xl "
        >
          <li>@ untitled all rights reserved |</li>

          <li>design: <a href="#"> </a> |</li>

          <li>demo image <a href="#"></a></li>
        </ul>
      </div>
    </footer>
    <!--SIDENAV-->
    <div v-if="showSidenav" class="sidenav h-full z-20">
      <h2 class="uppercase font-bold text-2xl pl-10 my-10">{{ titre }}</h2>
      <div class="w-80">
        <ul>
          <div class="flex ">
            <li>
              <button
                class="pl-10 text-3xl uppercase hover:text-pink-400 border-2  text-gray-200 focus:outline-none "
                @click="logout"
                title="deconnexion"
              >
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </button>
            </li>
            <li
              class="mx-10 uppercase text-green-400 text-xl"
              v-if="verifUser()"
            >
              {{ log }}
            </li>
            <li class="mx-10 uppercase text-blue-400 text-xl" v-else>
              {{ log }}
            </li>
          </div>
          <li
            v-if="verifUser()"
            class="pt-5 my-5 pl-10 text-xl uppercase hover:text-pink-400
            border-t-2 border-gray-200"
          >
            <g-link to="/admin">
              Administration
            </g-link>
          </li>
          <!-- COMPONENT BURGER -->
          <MenuBurgerLink
            v-for="burger in burgers"
            :key="burger.menu"
            :burger="burger"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBurgerLink from "~/components/MenuBurgerLink.vue";
import SocialLink from "~/components/SocialLink.vue";
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";
import jwt_decode from "jwt-decode";
export default {
  components: { SocialLink, MenuBurgerLink },

  metaInfo: {},
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
      log: "",
      name: "",
      email: "",
      message: "",
      showSidenav: false,
      titre: "Menu",
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
          link: "/register",
          menu: "inscription / login",
        },
        {
          link: "/",
          menu: "Accueil",
        },
        {
          link: "/papercraft",
          menu: "Papercraft",
          color: "text-pink-400",
        },
        {
          link: "/dessin",
          menu: "Dessin",
          color: "text-blue-400",
        },
        {
          link: "/cosplay",
          menu: "Cosplay",
          color: "text-green-400",
        },
        {
          link: "/gaming",
          menu: "Art Gaming",
          color: "text-yellow-400",
        },
        {
          link: "/convention",
          menu: "Convention",
        },
        {
          link: "/shop",
          menu: "Boutique",
        },
        {
          link: "/about",
          menu: "à propos",
        },
      ],
    };
  },
  //============================================================================================================================================================================================================================================================================================================================
  //
  //  ###    ###  #####  ######  ##   ##   #####   ####     ####
  //  ## #  # ##  ##       ##    ##   ##  ##   ##  ##  ##  ##
  //  ##  ##  ##  #####    ##    #######  ##   ##  ##  ##   ###
  //  ##      ##  ##       ##    ##   ##  ##   ##  ##  ##     ##
  //  ##      ##  #####    ##    ##   ##   #####   ####    ####
  //
  //============================================================================================================================================================================================================================================================================================================================

  methods: {
    /**
     * Logout the user
     */
    logout() {
      localStorage.removeItem("jwt");
      this.$store.commit("updateLogin", false);
      delete axios.defaults.headers.common["Authorization"];
      this.$fire({
        title: "Au revoir 😥",
        text: "Vous êtes bien déconnecté",
        type: "success",
      });
      this.$router.push("/");
      this.showSidenav = false;
    },
    /**
     * Send mail to kyosai for more information
     */
    sendMail() {
      axios
        .post("http://127.0.0.1:8000/mail/contact", {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((response) => {
          //console.log("mail envoyé", response);
          this.mailContact = response.data;
        });
    },
    /**
     * Access to the administration page if the user is admin
     */
    verifUser() {
      let jwt = localStorage.getItem("jwt");
      if (jwt) {
        let token = jwt_decode(jwt);
        //console.log(token);
        if (token.roles == "ROLE_ADMIN") {
          this.log = "admin";
          return true;
        } else if (token.roles == "ROLE_USER") {
          this.log = "connecté";
        }
      } else {
        this.log = "déconnecté";
        return false;
      }
    },
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
  src: url("../assets/Source_Sans_Pro/SourceSansPro-Regular.ttf");
  font-weight: normal;
}
@font-face {
  font-family: "Source Sans Pro";
  src: url("../assets/Source_Sans_Pro/SourceSansPro-Bold.ttf");
  font-weight: bold;
}
@font-face {
  font-family: "Source Sans Pro";
  src: url("../assets/Source_Sans_Pro/SourceSansPro-Black.ttf");
  font-weight: 900;
}
@font-face {
  font-family: "Papyrus";
  src: url("../assets/Papyrus/Papyrus.ttf");
  font-weight: normal;
}

#app {
  background-image: url("/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
/*cart*/
.c-cart {
  transition: 0.5s;
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
