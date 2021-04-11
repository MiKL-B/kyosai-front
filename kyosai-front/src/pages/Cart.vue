<template>
  <Layout>
    <h1 class="text-blue-400 text-4xl text-center">
      Mon panier
    </h1>

    <div class="bg-gray-100 shadow rounded-md text-2xl my-5 ">
      <div class="flex justify-around p-5">
        <div>
          <h1>Votre panier</h1>
        </div>
        <div>
          <h1>Prix</h1>
        </div>
      </div>
      <hr />
      <div class="containerCart flex justify-around my-5 ">
        <div class="imgCart h-60 w-60">
          <img src="/kyosai.jpg" />
          <div class="infoCart">
          <h2>Titre du produit :</h2>
            <h2>{{panier}}</h2>
         

            <span>Catégorie :</span>
            </br>
            <select class="rounded-lg bg-white text-gray-600 hover:text-pink-400 cursor-pointer">
              <option selected>Qté: </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            </br>
            <button class="bg-red-400 hover:bg-red-600 p-2 text-white rounded-lg my-5">Supprimer</button>
          </div>
        </div>

        <div class="priceCart text-3xl">{{panier.prix}} €</div>
      </div>
      <hr />
      <div class="flex justify-around p-5">
        <h2>Sous-total {{panier.total}} €</h2>
      </div>
    </div>
  </Layout>
</template>

<script>
const axios = require("axios");
export default {
  metaInfo: {
    title: "Panier",
  },

  data() {
    return {
      panier:[],
      name:'',
      prix:'',
    };
  },

  methods: {

 
    
  },

  computed: {},
  created(){
          
  axios.get(`http://127.0.0.1:8000/panier`).then((response) => {
      console.log(response);
      this.panier = response.data;
    });
  
  }
};
</script>
