<template>
  <layout>
    <!-- MAIN -->
    <!--c-link-span-content a remplacer par c-content-->
    <span  v-html="conventionContent"></span>
  </layout>
</template>

<script>
const axios = require("axios");
export default {
  metaInfo: {
    title: "convention",
  },
  created() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/267/"
      )
      .then((response) => {
        // handle success
        //console.log(response);
        this.conventionContent = response.data.content;
      });
  },
  data() {
    return {
      conventionContent: "",
    };
  },
};
</script>
