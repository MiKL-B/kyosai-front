// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("~/style.css");

import DefaultLayout from "~/layouts/Default.vue";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Vuex from "vuex";
import VueSimpleAlert from "vue-simple-alert";

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);
  Vue.use(VueSimpleAlert);
  //vuex
  appOptions.store = new Vuex.Store({
    state: {
      isLoggedIn: false,
    },
    mutations: {
      updateLogin(state, payload) {
        state.isLoggedIn = payload;
      },
    },
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css?ver=5.2",
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  router.beforeEach((to, from, next) => {
    if (to.path === "/admin") {
      //recuperation info localstorage
      if (appOptions.store.state.isLoggedIn) {
        return next();
      } else {
        return next("/login");
      }
    } else {
      return next();
    }
  });
  var jwt = localStorage.getItem("jwt");
  if (jwt) {
    let token = jwt_decode(jwt);
    try {
      //valid
      axios.defaults.headers.common = {
        Authorization: `Bearer ${jwt}`,
      };
      appOptions.store.commit("updateLogin", true);
      console.log("token valide");
    } catch (error) {
      appOptions.store.commit("updateLogin", false);
      console.log("veuillez vous connecter", error);
    }
    if (token.roles !== "ROLE_ADMIN") {
      appOptions.store.commit("updateLogin", false);
    }
  }

  //si pas connecté  sur du contenu necessitant un certain role redirige login
  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (401 === error.response.status) {
        router.push("/login");
      } else {
        return Promise.reject(error);
      }
    }
  );
}
