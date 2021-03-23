<template>
  <Layout>
    <form @submit.prevent="submit">
      <table class="mx-auto">
      <!--email-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" v-model="email" placeholder="Adresse email" />
          </td>
        </tr>
        <!--name-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" v-model="name" placeholder="Nom" />
          </td>
        </tr>
        <!--mdp-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" v-model="mdp" placeholder="Mot de passe" />
          </td>
        </tr>
        <!--submit-->
        <tr>
          <td>
            <button class="p-3 text-lg flex my-2 mx-auto bg-gray-700 hover:bg-pink-400 rounded-lg text-white uppercase" type="submit">Inscription</button>
          </td>
        </tr>
      </table>
    </form>
  </Layout>
</template>

<script>
const axios = require("axios");

export default {
  metaInfo: {
    title: "register",
  },
  created() {},
  methods: {
    submit() {
      axios
        .post("http://127.0.0.1:8000/api/user", {
          email: this.email,
          firstname: this.name,
          mdp: this.mdp,
        })
        .then(function(response) {
          console.log(response);
        });
    },
  },

  data() {
    return {
      registerContent: "",
      email: "",
      mdp: "",
      name: "",
    };
  },
};
</script>
