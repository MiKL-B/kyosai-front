<template>
  <Layout>

      <span class="flex flex-wrap flex-col w-screen items-center mx-auto c-content align-middle"></span>
      <form @submit.prevent="submit">
     <input v-model="email" placeholder="email">
          <input v-model="name" placeholder="name">
             <input v-model="mdp" placeholder="mdp">
           <button type="submit">inscription</button>
           </form>
  </Layout>
</template>

<script>
const axios = require("axios");

export default {
  metaInfo: {
    title: "register",
  },
  created() {
  },
  methods:{
    submit(){
axios.post('http://127.0.0.1:8000/api/user', {
    email: this.email,
    firstname: this.name,
    mdp: this.mdp
  })
  .then(function (response) {
    console.log(response);
  })
    }
  },

  data() {
    return {
      registerContent: "",
      email:"",
      mdp:"",
      name:""
    };
  },
};
</script>
