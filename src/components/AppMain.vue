<script >
import CmdSection from './CmdSection.vue';
import FoundResult from './FoundResult.vue';
import Item from './Item.vue';
import { store } from '../store.js'
import axios from 'axios'
export default{
components : { CmdSection, FoundResult, Item },
data(){
    return{
        store
    }
},
methods:{
    search(){
        
    },
    callApi(){
        let newUrl = store.api;
        if ( store.selected == "Starter"){
            newUrl
        }
        else if (store.selected == "Alive"){
            newUrl += `?status=Alive`;
        }
        else if( store.selected == "Dead"){
            newUrl += `?status=Dead`
        }
        else{
            newUrl += `?status=Unknown`
        }
        axios
        .get(newUrl)
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
        <CmdSection @ricerca="callApi" />
        
<div class="container d-flex justify-content-center flex-column">
    <FoundResult />
</div>
<div class="container">
    <div class="col-12 d-flex flex-wrap gap-3">
        <Item v-for="(item,index) in store.risultato" :key="index" :carta="item" />
    </div>
</div>
    
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.container{
    background: white;
}


</style>
