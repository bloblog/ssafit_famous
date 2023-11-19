<template>
    <div>
        <input v-model="key" placeholder="정렬기준">
        <input v-model="word" placeholder="회고 검색">
        <button>검색</button>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const key= ref(null);
const word = ref(null);

</script>

<style scoped>

</style>