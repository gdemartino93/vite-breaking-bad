<script >
export default{
  data(){
    return{
      
    }
  }
}
</script>

<template>
        
<div class="col-11 py-5">
    <div class="bar"> Found x characters</div>
</div>

</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.bar{
    min-height: 50px;
    background: #212529;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 0 20px
}

</style>
