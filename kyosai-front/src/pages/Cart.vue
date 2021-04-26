<template>
  <Layout>
    <h1 class="text-blue-400 text-4xl text-center">
      Mon panier
    </h1>

   <div v-if="verifUserCart()" class="bg-gray-100 shadow rounded-md text-2xl my-5 ">
      <div class="flex justify-around p-5">
        <div>
          <h1>Votre panier</h1>
        </div>
        <div>
          <h1>Prix</h1>
        </div>
      </div>
      <hr />
      <div class="containerCart flex justify-around my-5 " v-for="item in panier" :key="item.id"  >

        <div class="imgCart h-80 w-60" >
          <img :src='getProductById(item.produit.substring(item.produit.lastIndexOf("/")+1)).image' />
          <div class="infoCart">
        
            <h2 class="capitalize">  {{getProductById(item.produit.substring(item.produit.lastIndexOf("/")+1)).nom}}</h2>
              <p>Quantité : {{item.quantity}}</p>

          
            <select class="rounded-lg bg-white text-gray-600 hover:text-pink-400 cursor-pointer">
              <option selected>Qté: </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
      
         
          <button class="bg-red-400 hover:bg-red-600 p-2 text-white rounded-lg my-5">Supprimer</button>
            
          </div>
        
        </div>

        <div class="priceCart text-3xl">{{ item.quantity * getProductById(item.produit.substring(item.produit.lastIndexOf("/")+1)).prix }} €</div>
        
      
      
    
     
      </div>
    
    </div>


      
           
  </Layout>
</template>

<script>
import axios from 'axios';
import jwt_decode from "jwt-decode";
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
    title: "Panier",
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
      panier:[],
      shopContent:[],
      name:'',
      prix:'',
     
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

methods:{
/**
     * @param {integer} id - Get the product by its id
     * @return {object} -the product that corresponds to the id
     */
    getProductById(id) {
      return this.shopContent && this.shopContent.find((product) => product.id == id); 
    },
  
    verifUserCart(){
         let jwt = localStorage.getItem("jwt");
      if (jwt) {
        return true;
      }else{
        this.$router.push("/login");
         this.$fire({
        title: "Connectez vous pour accéder à votre panier",
        type: "info",
      });
      }
    },
        /**
     * @param {event} event - Manage the download of the image asynchronously
     */
    async handleUpload(event) {
      const file = event.target.files[0];
      this.image = await getBase64(file);
      //console.log(file);
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
  created(){
   axios.get("http://127.0.0.1:8000/panier",null,{ withCredentials: true }).then((response) => {
       console.log("panier :",response.data);
       this.panier = response.data;
    });
     axios.get("http://127.0.0.1:8000/shop").then((response) => {
      console.log("shop :", response);
      this.shopContent = response.data;
    });
 
  },

};
</script>
