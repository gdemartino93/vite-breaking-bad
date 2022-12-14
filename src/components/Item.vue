<script >

export default{
props : ["carta"]
}
</script>

<template>

<div class="item my-2">
    <img :src="carta.image" alt="">
    <span>{{carta.name}}</span>
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
