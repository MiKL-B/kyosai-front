<template>
  <Layout>
<span v-html="myContent"></span>
  </Layout>
</template>

<script>
const axios = require('axios');

export default {

  metaInfo: {
    title: 'About us',
  
  },
  created(){
  
axios.get('https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/297/')
  .then( (response)=> {
    // handle success
    console.log(response);
    this.myContent = response.data.content;

   
  })
  },

  data(){
    return {
      myContent:"loading",
   

    }
  }
}
</script>
