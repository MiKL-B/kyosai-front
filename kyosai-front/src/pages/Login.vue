<template>
    <layout>



<!--a finir-->
<form>
 <table class="mx-auto flex flex-col items-center">
     <h1 class="text-blue-400 text-center text-xl">Connetez vous à votre compte !</h1>
      <!--email-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"  name="email" placeholder="Adresse email" />
          </td>
        </tr>
        <!--name-->
        <!--<tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" v-model="name" name="name" placeholder="Nom" />
          </td>
        </tr>-->
        <!--mdp-->
        <tr>
          <td>
            <input class="p-5 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400"  name="mdp" placeholder="Mot de passe" />
          </td>
        </tr>
        <tr><td><span>Pas encore de compte ?</span><g-link class="text-blue-400 text-lg" to="/register" > Inscrivez vous ici ! </g-link></td></tr>
        <!--submit-->
        <tr>
          <td>
            <button class="p-3 text-lg flex my-2 mx-auto bg-gray-600 hover:bg-pink-400 rounded-lg text-white uppercase"  type="submit">Connexion</button>
          </td>
        </tr>
      </table>
      </form>
    </layout>

</template>

<script>


export default {

  metaInfo: {
    title: 'login',
  
  },
      created(){
  

  },
  data(){
    return{
  
    }
  }
  }
</script>
