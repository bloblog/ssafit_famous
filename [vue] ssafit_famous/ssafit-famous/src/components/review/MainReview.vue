<template>
    <div>
        <div>
            <SearchBar/>
        </div>
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
.board {
    display: flex;
    
}

</style>