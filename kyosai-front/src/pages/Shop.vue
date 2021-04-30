<template>
  <Layout>
    <h1 class="text-blue-400 text-4xl text-center">Boutique</h1>
  
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

      <div class="flex my-auto ">
        <img class="w-80 h-auto" :src="content.image" />
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Boutique",
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
      shopContent: "",
      categoryContentList: [],
      cartContent: [],
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
     * @param {integer} id - Get the category by its id
     */
    getCategoryById(id) {
      return this.categoryContentList.find((category) => category.id == id);
    },
    /**
     * @param {integer} id -The id of the product to add to the cart
     */
    addCart(id) {
      axios
        .get(`http://127.0.0.1:8000/add/cart/${id}`, null, {
          withCredentials: true,
        
        })
        .then((response) => {
          this.cartContent = response.data;
            this.$fire({
        title: "Produit ajouté au panier",
        type: "success",
      });
        }).catch((error)=>{
        this.$router.push("/login");
         this.$fire({
                title: `Merci de vous connecter pour effectuer des achats`,
                type: "warning",
              });
        });
;
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
    axios.get("http://127.0.0.1:8000/shop/").then((response) => {
      this.shopContent = response.data;
    });

    axios.get("http://127.0.0.1:8000/category/list").then((response) => {
      this.categoryContentList = response.data;
    });
  },
};
</script>
