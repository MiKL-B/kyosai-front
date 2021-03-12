<template>
    <layout>

<!-- MAIN -->
<span v-html="dessinContent"></span>

    </layout>
</template>

<script>
const axios = require('axios');
export default {

  metaInfo: {
    title: 'dessin',
  
  },
      created(){
  
axios.get('https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/327')
  .then( (response)=> {
    // handle success
    console.log(response);
    this.dessinContent = response.data.content;

   
  })
  },
    data(){
    return{
      dessinContent:"loading",
    }
  }
}
</script>
