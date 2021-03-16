<template>
<div>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />

    <link
      rel="stylesheet"
      id="fa-fonts-css"
      href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css?ver=5.2"
      type="text/css"
      media="all"
    />

    <header class="min-w-full flex flex-wrap">
  
      <!--logo-->
      <g-link to="/" class="flex flex-wrap flex-col mx-5">
       <img class="h-28" src="/logo.png" alt />
         <span
          class="c-title text-red-400 font-black text-2xl mb-10 "
          >KYOSAI</span
        >
  </g-link>
      
    

      <nav class="min-w-full ">
            <div @click="showSidenav =! showSidenav" class="menu-btn right-5 top-5 text-7xl  font-bold  fixed rounded-lg  z-10 " :class="{'open':showSidenav}" >
            <span ></span>
            </div>
          <!--MENU BURGER-->

          <div v-if="showSidenav" class="sidenav h-full " >
            <h2 class="uppercase font-bold text-2xl pl-10 my-10">{{ titre }}</h2>
            <div class="w-80" >
            <ul>
            <MenuBurgerLink  v-for="burger in burgers" :key="burger.menu" :burger="burger" />
             
            </ul>
            </div>
          </div>
      
      </nav>
    </header>
    <slot />
    <!--footer-->
    <!--a revoir-->

      <footer
        class="min-w-full  py-10 md:px-0 bg-gray-100 flex  flex-wrap flex-col "
        id="footer"
      >
        <div class="mx-5 lg:mx-52 flex flex-col lg:flex-row">
          <!--CONTACT-->
          <section class="mb-20 lg:mb-0">
            <h2
              class="text-xl lg:text-xl font-bold uppercase tracking-widest mb-10 text-center"
            >
              Restons en contact
            </h2>
            <!--form-->
            <form method="POST" action="#" class="">
              <div class="flex flex-col flex-wrap">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    class="bg-transparent  w-72  h-20 border-b-2 focus:outline-none focus:border-pink-400 text-xl"
                  />
                </div>
                <!--email-->
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="bg-transparent  w-72 mb-2 h-20 border-b-2 focus:outline-none focus:border-pink-400 text-xl "
                  />
                </div>

                <div>
                  <div>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      cols="1"
                      rows="45"
                      style="overflow: hidden; resize: none; height: 100px"
                      class="bg-transparent w-72 my-2 h-20 border-b-2 focus:outline-none focus:border-pink-400 text-xl "
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
                    class="mt-8 py-7 w-72 bg-gray-600 text-white font-bold uppercase rounded-md hover:bg-pink-400 cursor-pointer  text-xl"
                  />
                </li>
              </ul>
            </form>
          </section>
          <!--FOLLOW-->

          <section>
            <h2
              class="text-xl lg:text-xl font-bold uppercase tracking-widest mb-10 text-center"
            >
              Nous suivre
            </h2>
            <ul class=" flex flex-row mx-5">
              <SocialLink v-for="link in links" :key="link.url" :link="link" />
            </ul>
          </section>
          <!--COPYRIGHT-->
          <ul
            class="flex flex-col  mt-10 mx-5 text-gray-300 text-xl "
          >
            <li>@ untitled all rights reserved |</li>

            <li>design: <a href="#">  </a> |</li>

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
  
  components: { SocialLink, MenuBurgerLink},

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
      burgers:[
        {
          link:"/",
          menu:"Accueil"
        }
        ,
        {
          link:"/papercraft",
          menu:"Papercraft"
        },
          {
          link:"/dessin",
          menu:"Dessin"
        },
          {
          link:"/cosplay",
          menu:"Cosplay"
        },
          {
          link:"/gaming",
          menu:"Art Gaming"
        },
          {
          link:"/convention",
          menu:"Convention"
        },
         {
          link:"/about",
          menu:"à propos"
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
body {
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
/*a supprimer */
.gallery-row {
  display: flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:center;

}
/* pas plus de 2 chemins  */
.c-link-span-content p a{
  color:#60a5fa;
  font-weight: bold;
}
.c-text-span-content p {
  text-align:justify;
  width:theme("width.96");
}
/*MENU BURGER STYLE */

 .sidenav{
  position: fixed;
  right:0;
  top: 0;
  color:#fff;
  background:#585858;
  z-index: 2;
width:theme("width.60")

}
.sidenav :nth-child(1){
border:none;}
.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
width:theme("width.12");
  height:theme("height.10");
  cursor: pointer;
   transition: 0.5s;
}

.menu-btn span {
  content: "";
  position: absolute;
  height:theme("height.1");
  width: 100%;
  background: #585858;
  transition: all 0.5s ease-in-out;
}
.menu-btn::before {
  content: "";
  top: 0;
  position: absolute;
  height:theme("height.1");
  width: 100%;
  background: #585858;
  transition: all theme("transitionDuration.500") ease-in-out;
}
.menu-btn::after {
  content: "";
  bottom: 0;
  position: absolute;
  height:theme("height.1");
  width: 100%;
  background: #585858;
  transition: all 0.5s ease-in-out;
}

.menu-btn.open {
  transition: 0.5s ;
  transform:translateX(-225px) rotate(-180deg);
  background:none;

  }

.menu-btn.open span{
  transition: all 0.5s ease-in-out;
  opacity: 0%;

}
.menu-btn.open::before {
  transition: all 0.5s ease-in-out;
  transform: translateY(17px) rotate(-45deg);
}
.menu-btn.open::after {
  transition: all 0.5s ease-in-out;
  transform: translateY(-17px) rotate(45deg);
}


</style>
