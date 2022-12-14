<script >
import CmdSection from './CmdSection.vue'
import FoundResult from './FoundResult.vue';
export default{
components : { CmdSection, FoundResult }
}
</script>

<template>
        <CmdSection />
<div class="container d-flex justify-content-center">
    <FoundResult />
</div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.container{
    background: white;
    min-height: 80vh;
}


</style>
