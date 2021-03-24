<template>
  <Layout>
  <!--possible component ?-->
    <form @submit.prevent="submit" >
      <table class="mx-auto">
      <!--email-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" v-model="email" name="email" placeholder="Adresse email" />
          </td>
        </tr>
        <!--name-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" v-model="name" name="name" placeholder="Nom" />
          </td>
        </tr>
        <!--mdp-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" v-model="mdp" name="mdp" placeholder="Mot de passe" />
          </td>
        </tr>
        <tr><td class="text-center"><span>Déjà un compte ?</span><g-link class="text-blue-400 text-lg" to="/login" > Cliquez ici ! </g-link></td></tr>
        <!--submit-->
        <tr>
          <td>
            <button class="p-3 text-lg flex my-2 mx-auto bg-gray-600 hover:bg-pink-400 rounded-lg text-white uppercase"  type="submit">Inscription</button>
          </td>
        </tr>
      </table>
<p v-if="error" class="text-center bg-red-200 rounded-lg text-red-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg">{{ error }}</p>
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
      if(this.name && this.email && this.mdp){
        this.error ="";
      axios
        .post("http://127.0.0.1:8000/api/user", {
          email: this.email,
          firstname: this.name,
          mdp: this.mdp,
        })
        .then(function(response) {
          console.log(response);
        });
        //redirection si formulaire validé
          this.$router.push("/?"+this.foobar);
         
      }
            if(!this.email){
        this.error="email requis";
      }else if(!this.validEmail(this.email)){
        this.error="email valide requis";
      }
      else if(!this.name){
        this.error="nom requis";
      }
  
       else if(!this.mdp){
        this.error="mdp requis";
      }
    },
       validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },

  data() {
    return {
      foobar:"",
      error:"",
      registerContent: "",
      email: "",
      mdp: "",
      name: "",

    };
  },
};
</script>
