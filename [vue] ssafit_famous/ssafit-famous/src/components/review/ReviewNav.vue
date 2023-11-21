<template>
    <div class="cat-nav">
        <div v-for="cat in cats">
            <router-link to="/reviewDetailView" @click="select(cat)">{{ cat }}</router-link>
        </div>
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

const select = function(category) {
    if (category == '전체 글 보기') {
        store.key = store.word = store.ob = null;
        store.searchReview();
    } else {
        store.key = "category";
        store.word = category.split("#")[1];
        store.searchReview();
    }
    // router.push('ReviewDetailView');
}

const cats = ref([
    '#코딩',
    '#운동',
    '#취미',
    '#독서',
    '전체 글 보기',
])

</script>

<style scoped>
.cat-nav {
    padding: 10px;
}
</style>