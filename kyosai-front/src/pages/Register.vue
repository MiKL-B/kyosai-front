<template>
  <Layout>
    <form @submit.prevent="submit">
      <table class="mx-auto">
        <h1 class="text-blue-400 text-4xl text-center">Créer un compte !</h1>
        <!--email-->
        <tr>
          <td>
            <input
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              v-model="email"
              name="email"
              type="text"
              placeholder="Adresse email"
            />
          </td>
        </tr>
        <!--name-->
        <tr>
          <td>
            <input
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              v-model="name"
              name="name"
              type="text"
              placeholder="Nom"
              minlength="4"
            />
          </td>
        </tr>
        <!--mdp-->
        <tr>
          <td>
            <input
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              v-model="mdp"
              name="mdp"
              type="password"
              placeholder="Mot de passe"
            />
          </td>
        </tr>
        <!--mdp-->
        <tr>
          <td>
            <input
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              v-model="confirm_mdp"
              name="confirm_mdp"
              type="password"
              placeholder="Confirmer mot de passe"
            />
          </td>
        </tr>
        <tr>
          <td class="text-center">
            <span>Déjà un compte ?</span
            ><g-link class="text-blue-400 text-lg" to="/login">
              Cliquez ici !
            </g-link>
          </td>
        </tr>
        <!--submit-->
        <tr>
          <td>
            <button
              class="p-3 text-lg flex my-2 mx-auto bg-gray-600 hover:bg-pink-400 rounded-lg text-white uppercase"
              type="submit"
            >
              Inscription
            </button>
          </td>
        </tr>
      </table>

      <!--generate msg error or success-->
      <p
        v-if="error"
        class="text-center bg-red-200 rounded-lg text-red-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg"
      >
        {{ error }}
      </p>
      <div
        v-if="success"
        class="text-center bg-green-200 rounded-lg text-green-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg"
      >
        {{ success }}
      </div>
    </form>
  </Layout>
</template>

<script>
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";
export default {
  metaInfo: {
    title: "Inscription",
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
      error: "",
      success: "",
      registerContent: "",
      email: "",
      mdp: "",
      name: "",
      confirm_mdp: "",
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
     * - Register the user
     */
    submit() {
      var bool = true;
      switch (bool) {
        case this.name &&
          this.email &&
          this.mdp &&
          this.confirm_mdp &&
          this.mdp == this.confirm_mdp:
          this.error = "";
          axios
            .post("http://127.0.0.1:8000/register", {
              email: this.email,
              firstname: this.name,
              mdp: this.mdp,
            })
            .then((response) => {
              //redirection if form validated
              this.$router.push("/login");
              this.$fire({
                title: `Bienvenue parmis nous ${this.name} 🏆`,
                text: "Vous êtes bien inscrit",
                type: "success",
              });
              //console.log(response);
            })
            .catch((error) => {
              console.log("error", error.response.data);
              this.error = error.response.data.errors.violations[0].title;
            });

          break;
        case !this.email:
          this.error = "email requis";
          this.success = "";
          break;
        case !this.validEmail(this.email):
          this.error = "email valide requis";
          this.success = "";
          break;
        case !this.name && this.validEmail(this.email):
          this.error = "nom requis";
          this.success = "email valide";
          break;
        case this.name && this.validEmail(this.email) && !this.mdp:
          this.error = "mot de passe requis";
          this.success = "nom valide";
          break;
        case this.mdp !== this.confirm_mdp:
          this.error = "mot de passe correspond pas";
          this.success = "";
          break;
      }
    },
    /**
     * @param {string} email - Checking using a regex if the email is valid
     */
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
