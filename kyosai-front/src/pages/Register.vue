<template>
  <Layout>

    <form @submit.prevent="submit" >
      <table class="mx-auto">
         <h1 class="text-blue-400 text-xl text-center">Créer un compte !</h1>
      <!--email-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400" v-model="email" name="email"  placeholder="Adresse email" />
          </td>
        </tr>
        <!--name-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400" v-model="name" name="name" type="text" placeholder="Nom" />
          </td>
        </tr>
        <!--mdp-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400" v-model="mdp" name="mdp" type="password" placeholder="Mot de passe" />
          </td>
        </tr>
           <!--mdp-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400" v-model="confirm_mdp" name="confirm_mdp" type="password" placeholder="Confirmer mot de passe" />
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
    <!--generate msg error or success-->
<p v-if="error" class="text-center bg-red-200 rounded-lg text-red-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg">{{ error }}</p>
<div v-if="success" class="text-center bg-green-200 rounded-lg text-green-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg">{{ success }}</div>
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
      //verif champs remplis
      if(this.name && this.email && this.mdp && this.confirm_mdp && this.mdp == this.confirm_mdp){
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
          this.$router.push("/?");
         
      }
        //verif name
        else if(!this.name){
        this.error="nom requis";
      }
      //verif email
      if(!this.email){
        this.error="email requis";
      }else if(!this.validEmail(this.email)){
        this.error="email valide requis";
      }else if(this.validEmail(this.email) && !this.name ){
        this.success="email valide !";
      }else if(this.validEmail(this.email) && !this.mdp ){
        this.error="mot de passe requis";
      }
        //verif mdp
      else if(!this.mdp && !this.confirm_mdp){
        this.error="mot de passe requis";
      } 
      if(this.mdp !== this.confirm_mdp){
        this.error="le mot de passe ne correspond pas"
      }
    },
    //pour une adresse mail valide
       validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },

  data() {
    return {
      error:"",
      success:"",
      registerContent: "",
      email: "",
      mdp: "",
      name: "",
      confirm_mdp:"",

    };
  },
};
</script>
