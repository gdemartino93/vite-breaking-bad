<script >
import CmdSection from './CmdSection.vue';
import FoundResult from './FoundResult.vue';
import Item from './Item.vue';
import { store } from '../store.js'
export default{
components : { CmdSection, FoundResult, Item },
data(){
    return{
        store
    }
},
methods:{
    callApi(){
        axios
        .get(store.api)
        .then(res => {
            store.risultato = res.data.results
        })
    }
},
mounted(){
    this.callApi()
}
}
</script>

<template>
        <CmdSection />
<div class="container d-flex justify-content-center flex-column">

    <FoundResult />

        <Item />

   
</div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.container{
    background: white;
    min-height: 80vh;
}


</style>
