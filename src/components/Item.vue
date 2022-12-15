<script >

export default{
props : ["carta"]
}
</script>

<template>

<div class="item myn-2 d-flex flex-column">
    <img :src="carta.image" alt="">
    <span class="fw-bold">Name:</span>
    <span>{{carta.name}}</span>
    <span class="fw-bold">Status:</span>
    <span>{{ carta.status }}</span>
</div>


</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.item{
    width: 200px;
    height: 300px;

    img{
        height: 100%;
        width: 100%;
    }
    
}

</style>
