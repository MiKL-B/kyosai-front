<template>
  <article
    class="h-72 w-72 2xl:h-80 2xl:w-80 relative transition duration-500 transform hover:scale-110 group"
  >
    <div class="inline">
      <img
        class="mx-auto object-cover h-full rounded-lg"
        :src="section.imageUrl"
        alt
      />
    </div>
    <g-link :to="section.link" class="absolute inset-0 flex flex-col items-center justify-center opacity-90 rounded-lg transition duration-500 hover:bg-transparent" :class="[section.color]">
      <h2
        class="uppercase font-bold text-white text-2xl tracking-widest z-30 mt-8"
      >
        {{ section.title }}
      </h2>
      <p
        class="text-white text-lg opacity-0 group-hover:opacity-100 mt-2 transition duration-500 z-10"
      >
        {{ section.subtitle }}
      </p>
    </g-link>
  </article>
</template>

<script>
export default {
  name: "GridImage",
  props: ["section"],
};
</script>