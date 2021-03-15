<template>
  <Layout>
<span class="text-2xl md:text-lg  flex flex-col flex-wrap items-center text-justify w-96 mx-auto" v-html="aboutContent"></span>
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
    //console.log(response);
    this.aboutContent = response.data.content;

   
  })
  },

  data(){
    return {
      aboutContent:"loading",
   

    }
  }
}
</script>
