<template>
    <div v-for="cat in cats">
        <router-link to="/reviewDetailView" @click="select">{{ cat }}</router-link>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { useReviewStore } from '../stores/review'
import {useRouter, useRoute} from 'vue-router';

const router = useRouter();
const route = useRoute();

const selectedCat = ref(null);

const store = useReviewStore();

const select = function(event) {
    selectedCat.value = event.target.innerText.split("#")[1].trim();
    store.searchReview("category", selectedCat.value);
    router.push('ReviewDetailView');
}

const cats = ref([
    '#코딩',
    '#운동',
    '#취미',
    '#독서',
])

</script>

<style scoped>

</style>