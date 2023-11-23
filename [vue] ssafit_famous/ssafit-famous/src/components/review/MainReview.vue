<template>
    <div class="main-review">
        <SearchBar/>
        <div class="board text-center">
            <ReviewNav/>
            <TopReview/>
        </div>
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

</script>

<style scoped>
.main-review {
    background-color: rgba(255, 255, 255, 0.6);
    padding: 5vw;
    margin: 5vw;
}

.board {
    display: flex;
    padding: 5vw;
}

</style>