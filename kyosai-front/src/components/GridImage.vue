<template>
         <article class="h-96 w-96 lg:h-80 lg:w-80  p-5  mx-auto  mb-2 relative transition duration-500 transform hover:scale-110 group "><span><img
                                class="h-full" :src="section.imageUrl" alt></span>
                          <g-link :to="section.link">
                        
                            <div class="absolute inset-0  opacity-90 rounded-lg hover:bg-transparent transition duration-500 " :class="[section.color]">
                                    <h2 class="uppercase font-bold text-white text-2xl lg:text-xl tracking-widest absolute top-40 left-28 lg:top-36 lg:left-24 ">
                                {{section.title}}</h2>
                                <p class="text-white text-lg text-center opacity-0 group-hover:opacity-100 transition duration-500  absolute inset-0 top-48">{{section.subtitle}}</p>
                            </div>
                          </g-link>
                    </article>
</template>

<script>
export default {
    name:'GridImage',
    props: ['section']
}
</script>