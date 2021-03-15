<template>
  <layout>
    <!-- MAIN -->
    <span class=" c-link-span-content c-text-span-content text-lg flex flex-col items-center flex-wrap mx-auto" v-html="conventionContent"></span>
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
