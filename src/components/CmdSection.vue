<script >
import { store } from '../store.js'
export default{
  data(){
    return{
      store,
    }
  },
}
</script>

<template>
        
<div class="col-lg-2 col-5 my-4 offset-1">
    <select class="form-select " aria-label=".form-select-sm example" v-model="store.selected" @change="$emit('ricerca')">
        <option selected value="Starter">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
           
    </select>
</div>

</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;


</style>
