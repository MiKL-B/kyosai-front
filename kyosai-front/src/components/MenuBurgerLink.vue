<template>
     <li class="my-28 pl-10 text-xl uppercase hover:text-pink-400"><g-link :to="burger.link">{{burger.menu}}</g-link><hr></li>
    
</template>

<script>
export default {
    name:'MenuBurgerLink',
    props: ['burger']
}
</script>