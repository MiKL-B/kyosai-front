<template>
    <layout>

<!-- MAIN -->

<span class="flex flex-wrap flex-col items-center mx-auto" v-html="cosplayContent"></span>
    </layout>
</template>

<script>
const axios = require('axios');

export default {
 
  metaInfo: {
    title: 'cosplay',
  
  },
    created(){
  
axios.get('https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/2187/')
  .then( (response)=> {
    // handle success
    //console.log(response);
    this.cosplayContent = response.data.content;

   
  })
  },
    data(){
    return{
      cosplayContent:"",
    }
  }
}
</script>
