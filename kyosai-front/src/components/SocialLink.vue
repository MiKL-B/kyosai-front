<template>
         <li
                class="mr-1 p-2 sm:mx-auto md:mr-auto xl:mr-3  text-4xl border-2 border-gray-400 text-gray-400 hover:border-pink-400 hover:text-pink-400 rounded-lg"
              >
                <a :href="link.url"
                  ><i :class="[link.icone]" aria-hidden="true"></i
                  ><span class="label"></span
                ></a>
              </li>
</template>

<script>
export default {
    name:'SocialLink',
    props: ['link']
}
</script>