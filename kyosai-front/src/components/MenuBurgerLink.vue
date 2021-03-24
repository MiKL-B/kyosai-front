<template>
     <li class="pt-5 my-5 pl-10 text-xl uppercase hover:text-pink-400 border-t-2 border-gray-200"><g-link :to="burger.link">{{burger.menu}}</g-link></li>
    
</template>

<script>
export default {
    name:'MenuBurgerLink',
    props: ['burger']
}
</script>