<template>
  <Layout>
    <form @submit.prevent="submit">
      <h1 class="text-blue-400 text-xl text-center">
        Ajouter un nouvel élément à la boutique !
      </h1>
      <table class="flex flex-wrap flex-row justify-center my-10">
        <tr>
          <td>
            <input
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              v-model="name"
              name="name"
              type="text"
              placeholder="Nom"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              v-model="category"
              name="category"
              type="text"
              placeholder="Catégorie"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              v-model="prix"
              name="prix"
              type="number"
              placeholder="Prix"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              :v-model="image"
              name="image"
              type="file"
              placeholder="Image"
      
            />
          </td>
        </tr>
        <tr>
          <td>
            <button
              class="p-3 text-lg flex my-2 mx-auto bg-gray-600 hover:bg-pink-400 rounded-lg text-white uppercase"
              type="submit"
            >
              Ajouter
            </button>
          </td>
        </tr>
      </table>
    </form>
    <!--possible component-->
    <table class=" mx-auto text-xl my-10">
      <thead class="bg-gray-100">
        <tr class="text-center ">
          <td class="w-60">Nom</td>
          <td class="w-60">Catégorie</td>
          <td class="w-60">Prix</td>
          <td class="w-40">Image</td>
          <td class="w-60">Date dernière modification</td>
          <td class="w-60">Actions</td>
        </tr>
      </thead>
      <tbody
        v-for="content in shopContent"
        :key="content.nom"
        :content="content"
      >
        <tr class="text-center">
          <td>{{ content.nom }}</td>
          <td></td>
          <td>{{ content.prix }}€</td>
          <td><img :src="content.image" /></td>
          <td>24/03/2021</td>
          <td>
            <button
              class="bg-blue-400 hover:bg-blue-600 p-2 text-white mr-2 rounded-lg"
            >
              Modifier</button
            ><button
              class="bg-red-400 hover:bg-red-600 p-2 text-white rounded-lg"
            >
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>

<script>
const axios = require("axios");
export default {
  metaInfo: {
    title: "admin",
  },
  methods: {
    submit() {
      axios
        .post("http://127.0.0.1:8000/api/admin",{
          name_produit: this.name,
          prix_produit: this.prix,
          image_produit: this.image,
        })
        .then(function(response) {
          console.log(response);
        });
    },
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
      name: "",
      category: "",
      prix: "",
      image: "",
    };
  },
};
</script>
