<template>
  <article
    class="h-72 w-72   mb-5 relative transition duration-500 transform hover:scale-110 group"
  >
    <span
      ><img
        class="mx-auto object-cover h-full rounded-lg"
        :src="section.imageUrl"
        alt
    /></span>
    <g-link :to="section.link">
      <div
        class="absolute inset-0 opacity-90 rounded-lg transition duration-500 hover:bg-transparent"
        :class="[section.color]"
      >
        <h2
          class="uppercase font-bold text-white text-2xl tracking-widest mt-32 text-center z-30"
        >
          {{ section.title }}
        </h2>
        <p
          class="text-white text-lg text-center opacity-0 group-hover:opacity-100 transition duration-500 absolute inset-0 top-48 z-10"
        >
          {{ section.subtitle }}
        </p>
      </div>
    </g-link>
  </article>
</template>

<script>
export default {
  name: "GridImage",
  props: ["section"],
};
</script>