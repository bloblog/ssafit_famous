<template>
    <div>
        <h2>회고 검색 + 카테고리 + 상위 게시글</h2>
        <SearchBar/>
        <ReviewNav/>
        <TopReview/>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useReviewStore } from '../stores/review'
import {useRouter, useRoute} from 'vue-router';

import SearchBar from './SearchBar.vue';
import TopReview from './TopReview.vue';
import ReviewNav from './ReviewNav.vue';

const router = useRouter();
const route = useRoute();

const selectedCat = ref(null);

const store = useReviewStore();

const select = function(event) {
    selectedCat.value = event.target.innerText.split("#")[1].trim();
    store.searchReview("category", selectedCat.value);
    router.push('ReviewDetailView');
}

</script>

<style scoped>

</style>