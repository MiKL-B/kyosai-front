<template>
  <Layout>
    <h1>About us</h1>

    <p>{{content}}</p>
  </Layout>
</template>

<script>
const axios = require('axios');

export default {

  metaInfo: {
    title: 'About us',
  
  },
  created(){
  
axios.get('https://public-api.wordpress.com/rest/v1.2/sites/assokyosai.wordpress.com')
  .then( (response)=> {
    // handle success
    console.log(response);
    this.content = response.data;
  })
  
  },

  data(){
    return {
      content:"loading"
    }
  }
}
</script>
