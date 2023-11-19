<template>
    <div>
        <h1>메인페이지</h1>
        <header>
            <HeaderBar/>
        </header>
        <RouterView></RouterView>
        
    </div>
</template>

<script setup>
import HeaderBar from '../src/components/common/HeaderBar.vue';


</script>

<style scoped>

</style>