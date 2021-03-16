<template>
    <layout>

<!-- MAIN -->

<span class="flex flex-wrap flex-col items-center mx-auto c-text-content " v-html="gamingContent"></span>

    </layout>
</template>

<script>
const axios = require('axios');

export default {
 
  metaInfo: {
    title: 'gaming',
  
  },
    created(){
  
axios.get('https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/2536/')
  .then( (response)=> {
    // handle success
    //console.log(response);
    this.gamingContent = response.data.content;

   
  })
  },
    data(){
    return{
      gamingContent:"",
    }
  }

}
</script>
