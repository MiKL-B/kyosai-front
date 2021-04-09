<template>
  <layout>
    <div class="text-center bg-green-200 rounded-lg text-green-600 w-96 mx-auto p-3 uppercase tracking-widest text-lg">{{ deleteContent }}</div>
  </layout>
</template>

<script>
const axios = require("axios");

export default {
  metaInfo: {
    title: "Suppression de produit",
  },
  //<----------------->//
  //<------DATA------->//
  //<----------------->//
  data() {
    return {
      deleteContent: "",
    };
  },
  methods: {},
  created() {
    const { id } = this.$route.params;

    axios
      .get(`http://127.0.0.1:8000/api/admin/delete/${id}`)
      .then((response) => {
        console.log(response);
        this.deleteContent = response.data;
      });
  },
};
</script>
