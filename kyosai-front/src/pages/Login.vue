<template>
  <layout>
    <!--a finir-->
    <form @submit.prevent="connexion">
      <table class="mx-auto flex flex-col items-center">
        <h1 class="text-blue-400 text-4xl text-center">
          Connetez vous à votre compte !
        </h1>
        <!--email-->
        <tr>
          <td>
            <input
              v-model="name"
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              name="name"
              placeholder="Pseudo"
              pattern="[a-zA-Z]{4,8}"
              title="4 à 8 lettres"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              v-model="email"
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400 ring-1 ring-red-400"
              name="email"
              placeholder="Adresse email"
              data-cy="email"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              v-model="password"
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400 ring-1 ring-red-400"
              name="mdp"
              type="password"
              placeholder="Mot de passe"
              data-cy="mdp"
            />
          </td>
        </tr>
        <tr>
          <td class="text-xl">
            <span>Pas encore de compte ?</span
            ><g-link class="text-blue-400 text-lg" to="/register">
              Inscrivez vous ici !
            </g-link>
          </td>
        </tr>
        <tr>
          <td>
            <span>Les champs entourés en rouge sont requis !</span>
          </td>
        </tr>
        <!--submit-->
        <tr>
          <td>
            <button
              class="p-3 text-lg flex my-2 mx-auto bg-gray-600 hover:bg-pink-400 rounded-lg text-white uppercase"
              type="submit"
              data-cy="submitLogin"
            >
              Connexion
            </button>
          </td>
        </tr>
      </table>
    </form>
  </layout>
</template>

<script>
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";
import jwt_decode from "jwt-decode";
/**
 * @vue-data {String} name - User name
 * @vue-data {String} email - User email
 * @vue-data {String} password - User password
 * @vue-data {String} tokenContent - User token
 */

export default {
  metaInfo: {
    title: "Connexion"
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
      name: "",
      tokenContent: "",
      email: "",
      password: ""
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
     *  Login the user
     */
    connexion() {
      axios
        .post("http://127.0.0.1:8000/api/login_check", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.tokenContent = response.data;
          //store the token
          let jwt = this.tokenContent.token;
          localStorage.setItem("jwt", jwt);
          this.$store.commit("updateLogin", true);
          axios.defaults.headers.common = {
            Authorization: `Bearer ${jwt}`
          };
          this.$router.push("/");
          this.$fire({
            title: `Bonjour ${this.name} 😃`,
            text: "Vous êtes connecté",
            type: "success"
          });
        })
        .catch(error => {
          this.$fire({
            title: "Ces identifiants n'existent pas",
            type: "warning"
          });
        });
    }
  }
};
</script>
