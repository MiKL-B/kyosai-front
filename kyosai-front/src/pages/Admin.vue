<template>
  <Layout>
    <form @submit.prevent="submit">
      <h1 class="text-blue-400 text-4xl text-center">
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
            <select
              v-model="category"
              v-if="categoryContentList.length > 0"
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              multiple
            >
              <option value="" selected>Choisissez une catégorie</option>
              <option
                v-for="categoryContent in categoryContentList"
                :key="categoryContent.id"
                :categoryContent="categoryContent"
                :value="categoryContent.label"
                >{{ categoryContent.label }}</option
              >
            </select>
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
              @change="handleUpload"
              name="image"
              type="file"
              placeholder="Image"
              accept="image/*"
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
    <!--message si produit bien ajouté-->
    <div
      v-if="success"
      class="text-center bg-green-200 rounded-lg text-green-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg"
    >
      {{ success }}
    </div>
    <!--rechercher produit par nom-->
    <input
      v-model="searchKey"
      type="search"
      placeholder="Rechercher un produit par son nom"
      class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400 flex mx-auto w-80"
    />
    <!--s'affiche si la recherche ne renvois rien-->
    <h3
      class="text-center bg-red-200 rounded-lg text-red-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg my-5"
      v-if="searchContentFiltered.length == 0"
    >
      Aucun Résultat
    </h3>

    <table class=" mx-auto text-xl my-10">
      <thead class="bg-white">
        <tr class="text-center ">
          <th class="w-60 h-20">Nom</th>
          <th class="w-60">Catégorie</th>
          <th class="w-60">Prix</th>
          <th class="w-40">Image</th>
          <th class="w-60">Date dernière modification</th>
          <th class="w-60">Actions</th>
        </tr>
      </thead>

      <tbody
        v-for="content in searchContentFiltered"
        :key="content.id"
        :content="content"
        class="bg-gray-100 shadow-lg"
      >
        <tr class="text-center">
          <td class="capitalize">{{ content.nom }}</td>
          <td class="uppercase">
            <!--a redemander si faut changer de nom-->
            <tr
              class="flex justify-center"
              v-for="allLabel in content.categories"
              :key="allLabel.id"
            >
              {{
                allLabel &&
                  getCategoryById(
                    allLabel.substring(allLabel.lastIndexOf("/") + 1)
                  ).label
              }}
            </tr>
          </td>

          <td>{{ content.prix }} €</td>
          <td><img :src="content.image" /></td>
          <td>{{ format_date(content.createdAt) }}</td>
          <td>
            <g-link :to="`edit/${content.id}`">
              <button
                class="bg-blue-400 hover:bg-blue-600 p-2 text-white mr-2 rounded-lg"
              >
                Modifier
              </button></g-link
            >

            <button
              @click="confirmDelete(content.id)"
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
import dayjs from "dayjs";
import axios from 'axios';

//get base64 from image
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default {
  metaInfo: {
    title: "Administration",
  },
  //==================================================================================================================================================================================================================================================================================================
  //
  //  ####      ###    ######    ###
  //  ##  ##   ## ##     ##     ## ##
  //  ##  ##  ##   ##    ##    ##   ##
  //  ##  ##  #######    ##    #######
  //  ####    ##   ##    ##    ##   ##
  //
  //==================================================================================================================================================================================================================================================================================================

  data() {
    return {
      success: "",
      searchKey: "",
      shopContent: [],
      categoryContentList: [],
      name: "",
      category: [],
      prix: "",
      image: "",
    };
  },
  //============================================================================================================================================================================================================================================================================================================================
  //
  //  ###    ###  #####  ######  ##   ##   #####   ####     ####
  //  ## #  # ##  ##       ##    ##   ##  ##   ##  ##  ##  ##
  //  ##  ##  ##  #####    ##    #######  ##   ##  ##  ##   ###
  //  ##      ##  ##       ##    ##   ##  ##   ##  ##  ##     ##
  //  ##      ##  #####    ##    ##   ##   #####   ####    ####
  //
  //============================================================================================================================================================================================================================================================================================================================

  methods: {
    submit() {
      console.log(this.image);
      axios
        .post("http://127.0.0.1:8000/api/admin", {
          name_produit: this.name,
          prix_produit: this.prix,
          image_produit: this.image,
          category_produit: this.category,
        })
        .then((response) => {
          console.log(response);
          this.getProduct();
        });
      this.success = "Produit ajouté avec succés ! ";
    },
    async handleUpload(event) {
      const file = event.target.files[0];
      this.image = await getBase64(file);
      console.log(file);
    },

    //<----------------->//
    //<------FORMAT DATE------->//
    //<formatter la date avec day js>//
    format_date(value) {
      if (value) {
        return dayjs(value).format("DD-MMMM-YYYY HH:mm:ss");
      }
    },
    /**
     * Obtenir la categorie.
     * @param {integer} id -The id of the category to get
     * @return {object} -The category that corresponds to the id
     */
    getCategoryById(id) {
      return this.categoryContentList.find((category) => category.id == id);
    },

    /**
     * confirm delete.
     * @param {integer} id - The id of the product to delete from
     */
    confirmDelete(id) {
      const answer = confirm("Êtes vous sûr de vouloir supprimer ce produit ?");
      if (answer) {
        axios
          .get(`http://127.0.0.1:8000/api/admin/delete/${id}`)
          .then((response) => {
            console.log("confirm delete : ", response);
            this.getProduct();
          });
      }
    },
    getProduct() {
      axios.get("http://127.0.0.1:8000/shop/").then((response) => {
        // handle success
        console.log("shop ", response);
        this.shopContent = response.data;
      });
    },
  },
  //====================================================================================================================================================================================================================================================================================================================================
  //
  //   ####   #####   ###    ###  #####   ##   ##  ######  #####  ####
  //  ##     ##   ##  ## #  # ##  ##  ##  ##   ##    ##    ##     ##  ##
  //  ##     ##   ##  ##  ##  ##  #####   ##   ##    ##    #####  ##  ##
  //  ##     ##   ##  ##      ##  ##      ##   ##    ##    ##     ##  ##
  //   ####   #####   ##      ##  ##       #####     ##    #####  ####
  //
  //====================================================================================================================================================================================================================================================================================================================================

  computed: {
    //<filtrer les produits >//
    searchContentFiltered() {
      return this.shopContent.filter((content) => {
        return content.nom.toLowerCase().includes(this.searchKey.toLowerCase());
      });
    },
  },
  //=======================================================================================================================================================================================================================================================================================================================
  //
  //   ####  #####    #####    ###    ######  #####  ####
  //  ##     ##  ##   ##      ## ##     ##    ##     ##  ##
  //  ##     #####    #####  ##   ##    ##    #####  ##  ##
  //  ##     ##  ##   ##     #######    ##    ##     ##  ##
  //   ####  ##   ##  #####  ##   ##    ##    #####  ####
  //
  //=======================================================================================================================================================================================================================================================================================================================

  created() {
    //produits de la boutique
    this.getProduct();

    //categorie de la boutique
    axios.get("http://127.0.0.1:8000/category/list").then((response) => {
      // handle success
      console.log(response);
      this.categoryContentList = response.data;
    });
  },
};
</script>
