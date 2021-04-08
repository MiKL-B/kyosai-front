<template>
  <layout>
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
        <p v-for="content in editContent" :key="content.id" :content="content">
     
          {{
            editContent.categories &&
              getCategoryById(
                editContent.categories[0].substring(
                  editContent.categories[0].lastIndexOf("/") + 1
                )
              ) &&
              getCategoryById(
                editContent.categories[2].substring(
                  editContent.categories[0].lastIndexOf("/") + 1
                )
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
  </layout>
</template>

<script>
import dayjs from "dayjs";
const axios = require("axios");
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
    title: "Edition de produit",
  },
  //<----------------->//
  //<------DATA------->//
  //<----------------->//
  data() {
    return {
      success: "",
      editContent: [],
      categoryContentList: [],
      name: "",
      category: [],
      prix: "",
      image: "",
    };
  },
  methods: {
    submitEdit() {
      console.log(this.image);
              const { id } = this.$route.params;
      axios.post(`http://127.0.0.1:8000/api/admin/edit/${id}`, {
          name_produit: this.name,
          prix_produit: this.prix,
          image_produit: this.image,
          category_produit: this.category,
        })
        .then(function(response) {
          console.log(response);
        });
      this.success = "Produit modifié avec succés ! ";
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
    //<----------------->//
    //<------CATEGORY------->//
    //<recuperer et afficher la catégorie pour chaque produit>//
    //<----------------->//
    getCategoryById(id) {
      return (
        this.categoryContentList &&
        this.categoryContentList.find((category) => category.id == id)
      );
    },
   
allMyCategories(){
this.editContent.forEach((value, index) => {
   
    console.log(value);
    console.log(index);
});
}

  },
  computed: {},
  created() {
    const { id } = this.$route.params;
  
    axios.get(`http://127.0.0.1:8000/api/admin/edit/view/${id}`).then((response) => {
      console.log(response);
      this.editContent = response.data;
    });
    axios.get("http://127.0.0.1:8000/api/category/list").then((response) => {
      console.log(response);
      this.categoryContentList = response.data;
    });
  },
};
</script>
