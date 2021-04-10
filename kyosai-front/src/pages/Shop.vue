<template>
  <Layout>
   
    <div
      v-if="success"
      class="text-center bg-green-200 rounded-lg text-green-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg"
    >
      {{ success }}
    </div>
    <div
      class="flex flex-wrap justify-around my-10 bg-gray-100 shadow-lg rounded-lg"
      v-for="content in shopContent"
      :key="content.nom"
      :content="content"
    >
      <table class="w-96 my-10">
        <tr>
          <td>
            <h3 class="text-3xl capitalize ">{{ content.nom }}</h3>
          </td>
        </tr>
        <tr>
          <td>
            <p
              class="text-lg capitalize"
              v-for="allLabel in content.categories"
              :key="allLabel.id"
            >
              {{
                allLabel &&
                  getCategoryById(
                    allLabel.substring(allLabel.lastIndexOf("/") + 1)
                  ).label
              }}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <span class="text-2xl">Prix : {{ content.prix }} € </span>
          </td>
        </tr>
        <tr>
          <td>
            <button
              @click="addCart(content.id)"
              class="bg-gray-600 hover:bg-pink-400 text-xl text-white rounded-md py-7 w-40 font-bold uppercase mt-5"
            >
              Acheter
            </button>
          </td>
        </tr>
      </table>

      <div class="flex my-auto">
        <img class="w-96" :src="content.image" />
      </div>
    </div>
  </Layout>
</template>

<script>
const axios = require("axios");

export default {
  metaInfo: {
    title: "shop",
  },
  data() {
    return {
      shopContent: "",
      categoryContentList: [],
      cartContent: [],
      success: "",
   
    };
  },
  methods: {
    getCategoryById(id) {
      return this.categoryContentList.find((category) => category.id == id);
    },
    /**
     *ajouter un produit au panier
     */
    addCart(id) {
      axios.get(`http://127.0.0.1:8000/panier/add/${id}`).then((response) => {
        // handle success
        this.cartContent = response.data;
        console.log("cart : ", response);
  
        this.success = "Produit bien ajouté au panier !";
      });
    },
  
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/shop/").then((response) => {
      // handle success
      console.log(response);
      this.shopContent = response.data;
    });

    axios.get("http://127.0.0.1:8000/api/category/list").then((response) => {
      this.categoryContentList = response.data;
    });
 
  },
};
</script>
