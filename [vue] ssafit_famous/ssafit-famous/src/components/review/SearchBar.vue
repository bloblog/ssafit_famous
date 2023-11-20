<template>
    <div>
        <input v-model="key" placeholder="정렬기준">
        <input v-model="word" placeholder="회고 검색">
        <button @click="search">검색</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useReviewStore } from '../stores/review'
import {useRouter, useRoute} from 'vue-router';
import ReviewDetailView from '@/views/ReviewDetailView.vue';

const router = useRouter();
const route = useRoute();

const key= ref(null);
const word = ref(null);

const store = useReviewStore();

const search = function() {
    store.searchReview((word.value !== null ? "reviewTitle" : null), word.value);
    if (window.location.href != 'http://localhost:5173/ReviewDetailView') {
        router.push('ReviewDetailView');
    }
}

</script>

<style scoped>

</style>