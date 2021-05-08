<template>
  <layout>
    <div class="bg-gray-100 rounded-lg shadow">
      <h1 class="text-blue-400 text-4xl text-center my-5">
        Modifier un produit
      </h1>
      <!--message si produit bien modifié-->
      <div
        v-if="success"
        class="text-center bg-green-200 rounded-lg text-green-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg"
      >
        {{ success }}
      </div>
      <div class="container-edit flex justify-around text-xl">
        <!--info sur le produit-->
        <div class="flex flex-col">
          <p class="font-black capitalize text-2xl">{{ editContent.nom }}</p>
          <!--a redemander si faut changer de nom-->
          <p v-for="allLabel in editContent.categories" :key="allLabel.id">
            {{
              getCategoryById(
                allLabel.substring(allLabel.lastIndexOf("/") + 1)
              ) &&
                getCategoryById(
                  allLabel.substring(allLabel.lastIndexOf("/") + 1)
                ).label
            }}
          </p>
          <p>{{ editContent.prix }} €</p>
          <p>{{ format_date(editContent.createdAt) }}</p>
          <div class="w-80 ">
            <img :src="editContent.image" />
          </div>
        </div>
        <!--formulaire de modification de produit-->
        <form @submit.prevent="submitEdit">
          <div class="form-edit flex flex-col">
            <input
              v-model="name"
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              type="text"
              placeholder="Saisir nouveau nom"
            />
            <select
              v-model="category"
              v-if="categoryContentList.length > 0"
              multiple
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
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
            <input
              v-model="prix"
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              type="number"
              placeholder="Saisir nouveau prix"
            />
            <input
              @change="handleUpload"
              class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"
              name="image"
              type="file"
              placeholder="Image"
              accept="image/*"
            />
            <button
              class="p-3 text-lg flex my-2 mx-auto bg-gray-600 hover:bg-pink-400 rounded-lg text-white uppercase"
              type="submit"
            >
              Modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  </layout>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
/** Get base64 from image * @method */
const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
/**
 * @vue-data {String} success - Displays a success message
 * @vue-data {Array} editContent - Product information to be modified
 * @vue-data {Array} categoryContentList - List of product categories
 * @vue-data {String} name - Product name
 * @vue-data {Array} category - Product categories
 * @vue-data {String} prix - Product price
 * @vue-data {String} image - Product image
 */
export default {
  metaInfo: {
    title: "Edition de produit"
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
      editContent: [],
      categoryContentList: [],
      name: "",
      category: [],
      prix: "",
      image: ""
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
    /**
     *  Modify product information
     */
    submitEdit() {
      const { id } = this.$route.params;
      axios
        .post(`http://127.0.0.1:8000/api/admin/edit/${id}`, {
          name_produit: this.name,
          prix_produit: this.prix,
          image_produit: this.image,
          category_produit: this.category
        })
        .then(response => {
          this.$router.push("/admin");
        });
      this.success = "Produit modifié avec succés ! ";
    },
    /**
     * @async
     * @param {event} event - Manage the download of the image asynchronously
     */
    async handleUpload(event) {
      const file = event.target.files[0];
      this.image = await getBase64(file);
    },

    /**
     * @param {object} value - Put the date in a local format
     * @return {value} Formatted date
     */
    format_date(value) {
      if (value) {
        return dayjs(value).format("DD-MMMM-YYYY HH:mm:ss");
      }
    },
    /**
     * @param {integer} id - Get the category by its id
     */
    getCategoryById(id) {
      return (
        this.categoryContentList &&
        this.categoryContentList.find(category => category.id == id)
      );
    }
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
    const { id } = this.$route.params;

    axios
      .get(`http://127.0.0.1:8000/api/admin/edit/view/${id}`)
      .then(response => {
        this.editContent = response.data;
      });
    axios.get("http://127.0.0.1:8000/category/list").then(response => {
      this.categoryContentList = response.data;
    });
  }
};
</script>
