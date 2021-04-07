<template>
<layout>
<p>{{editContent.nom}}</p>
<p>{{editContent.categories[0] && getCategoryById(editContent.categories[0].substring(editContent.categories[0].lastIndexOf("/")+1)).label}}</p>
<p>{{editContent.prix}}</p>
<img :src="editContent.image">

</layout>

</template>


<script>
const axios = require("axios");
export default{
    metaInfo:{
        title:"edit"
    },

    data(){
        return {
            editContent:'',
        }
    },
    methods:{
getCategoryById(id)
{
    return this.categoryContentList.find((category)=>category.id == id)
}
    },
created(){
axios.get("http://127.0.0.1:8000/api/admin/edit/105").then((response)=>{
    console.log(response);
    this.editContent = response.data;
});
axios.get('http://127.0.0.1:8000/api/category/list').then((response)=>{
    console.log(response);
    this.categoryContentList = response.data;
})
}
}
</script>