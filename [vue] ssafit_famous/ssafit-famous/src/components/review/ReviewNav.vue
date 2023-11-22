<template>

    <div class="cat-nav">
        <div style="text-align: center;">카테고리</div>
        <hr/>
        <div v-for="cat in cats" style="margin: 10px;">
            <router-link to="/reviewDetailView" @click="select(cat)" 
                style="text-decoration: none; 
                    color: #7e725c;
                    background-color: #fff9e49d; 
                    padding: 5px;
                    border: solid 1px #7e725c ;
                    border-radius: 10px;">
            {{ cat }}</router-link>
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
    padding:30px;
    
    color: #7e725c;
}


</style>