<template>
    <li><a class="text-blue-500 font-semibold" :href="convlink.url">{{convlink.name}}</a>, {{convlink.town}}</li>
</template>

<script>
export default {
    name:'LinkConvention',
    props: ['convlink']
}
</script>