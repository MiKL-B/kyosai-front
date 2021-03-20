<template>
  <Layout>
    <table>
      <span
        class="flex flex-wrap flex-col w-screen items-center mx-auto c-content align-middle"
        v-for="content in shopContent"
        :key="content.nom"
        :content="content"
      >
        <tr>
          <thead>
            <h1>{{ content.nom }}</h1>
          </thead>
          <tbody>
            <img :src="content.image" />
            <p>{{ content.prix }} €</p>
          </tbody>
        </tr>
      </span>
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
