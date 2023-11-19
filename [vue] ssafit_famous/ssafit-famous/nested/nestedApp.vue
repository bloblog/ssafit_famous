<template>
    <div>
        <h1>모여봐요 유명의숲</h1>
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