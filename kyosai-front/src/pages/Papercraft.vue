<template>
    <layout >

<!-- MAIN -->

<span  v-html="papercraftContent"></span>

    </layout>
</template>

<script>

const axios = require('axios');
export default {

  metaInfo: {
    title: 'papercraft',
  
  },
      created(){
  
axios.get('https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/257/')
  .then( (response)=> {
    // handle success
    //console.log(response);
    this.papercraftContent = response.data.content;

   
  })
  },
  data(){
    return{
      papercraftContent:"",
    }
  }
  }
</script>
