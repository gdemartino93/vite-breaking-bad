<script >
export default{
  data(){
    return{
      
    }
  }
}
</script>

<template>

<div class="item">
    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="">

</div>


</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.item{
    width: 200px;
    height: 300px;
    background: wheat;
    border: 1px solid black;
    img{
        height: 100%;
        width: 100%;
    }
    
}

</style>
