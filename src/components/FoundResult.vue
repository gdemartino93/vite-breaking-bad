<script >
import { store } from '../store.js'
export default{
  data(){
    return{
      store
    }
  }
}
</script>

<template>
        
<div class="col-12 py-3">
    <div class="bar"> Found {{store.risultato.length}} characters</div>
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
