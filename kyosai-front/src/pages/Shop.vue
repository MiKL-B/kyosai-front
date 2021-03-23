<template>
  <Layout>
    <table class="flex flex-wrap "   v-for="content in shopContent"
        :key="content.nom"
        :content="content">
   
        <tr class="mx-auto flex flex-wrap border-2 rounded-lg bg-white">
          <td class=" w-96 text-center">
            <h1 class="mt-10  text-xl">{{ content.nom }}</h1>
          </td>
          <td  class="mx-auto">
            <img :src="content.image" />
            <p class="text-right text-xl">{{ content.prix }} €</p>
   
          </td>
          
        </tr>

    </table>
  </Layout>
</template>

<script>
const axios = require("axios");

export default {
  metaInfo: {
    title: "shop",
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/shop/").then((response) => {
      // handle success
      console.log(response);
      this.shopContent = response.data;
    });
  },

  data() {
    return {
      shopContent: "",
    };
  },
};
</script>
