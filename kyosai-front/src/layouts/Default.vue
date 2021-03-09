<template>
  <div class="layout relative source-font">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="stylesheet"
      id="fa-fonts-css"
      href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css?ver=5.2"
      type="text/css"
      media="all"
    />
    <link
      rel="stylesheet"
      id="fa-fonts-css"
      href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css?ver=5.2"
      type="text/css"
      media="all"
    />
    <header class="header">
      <!--<g-link to="/">{{ $static.metadata.siteName }}</g-link>-->
      <!--logo-->
      <g-link to="/" class="flex flex-row h-62 lg:h-40 relative">
        <span><img class="ml-42 h-full lg:ml-48" src="/logo.png" alt /></span>

        <span
          class="c-title text-red-400 font-black text-6xl sm:text-4xl absolute sm:relative text-center ml-80 sm:ml-0 lg:absolute mt-32 lg:mt-0 lg:top-16 lg:left-96"
          >KYOSAI</span
        >
      </g-link>

      <nav>
        <ul>
          <li
            class="top-7 right-20 sm:top-10 sm:right-20 text-7xl lg:text-5xl font-bold bg-gray-100 px-3 p-1 fixed rounded-lg hover:text-pink-400 z-10"
          >
            <a href="#"><i class="fa fa-bars"></i></a>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
    <!--footer-->
    <div class="flex flex-wrap">
      <footer
        class="min-h-full px-10 py-24 md:px-0 bg-gray-100 flex flex-row justify-center"
        id="footer"
      >
        <div class="mx-36 lg:mx-52 flex flex-col lg:flex-row">
          <!--CONTACT-->
          <section class="mb-20 lg:mb-0">
            <h2
              class="text-4xl lg:text-xl font-bold uppercase tracking-widest mb-10"
            >
              Restons en contact
            </h2>
            <!--form-->
            <form method="POST" action="#" class="mr-50">
              <div class="flex flex-row flex-wrap">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    class="bg-transparent pl-0 w-screen md:w-96 h-20 border-b-2 focus:outline-none focus:border-pink-400 text-3xl lg:text-xl"
                  />
                </div>
                <!--email-->
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="bg-transparent pl-0 w-screen md:w-96 h-20 border-b-2 focus:outline-none focus:border-pink-400 text-3xl lg:text-xl"
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
                      class="bg-transparent pl-0 w-screen md:w-96 h-20 border-b-2 focus:outline-none focus:border-pink-400 text-3xl lg:text-xl"
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
                    class="mt-8 py-7 px-10 lg:py-4 lg:px-7 w-full lg:w-32 bg-gray-600 text-white font-bold uppercase rounded-md hover:bg-pink-400 cursor-pointer text-4xl md:text-base"
                  />
                </li>
              </ul>
            </form>
          </section>
          <!--FOLLOW-->

          <section>
            <h2
              class="text-4xl lg:text-xl font-bold uppercase tracking-widest mb-10"
            >
              Nous suivre
            </h2>
            <ul class="mr-44 flex flex-row">
              <SocialLink v-for="link in links" :key="link.url" :link="link" />
            </ul>
          </section>
          <!--COPYRIGHT-->
          <ul
            class="flex flex-row relative lg:absolute lg:bottom-10 mt-10 mx-10: text-gray-300 text-2xl sm:text-lg"
          >
            <li>@ untitled all rights reserved |</li>

            <li>design: <a> lien </a> |</li>

            <li>demo image <a>lien</a></li>
          </ul>
        </div>
      </footer>
    </div>
    <!--MENU BURGER-->
    <nav>
      <div>
        <h2></h2>
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
      <a></a>
    </nav>
  </div>
</template>
<script>
import SocialLink from "~/components/SocialLink.vue";
export default {
  components: { SocialLink },

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

</style>
