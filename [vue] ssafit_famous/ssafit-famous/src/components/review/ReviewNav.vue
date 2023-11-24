<template>
    <div class="cat-nav">
        <div class="tag" style="text-align: center;">
            <h4>category</h4>
        </div>
        <div v-for="cat in cats" style="margin: 3px; text-align: center;">
            <router-link to="/reviewDetailView" @click="select(cat)" class="highlight">
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
    if (category == '전체보기') {
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
    '전체보기',
])

</script>

<style scoped>
/* .cat-nav {
    padding:30px;
    background-color: #66d267;
    border-radius: 100px;
    padding: 40px;
    color: #54200c;
    font: bold;
    width: 30%;
} */

.cat-nav{
    padding: 3rem;
    margin-right: 10%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url("@/assets/imges/categoryNav.png") no-repeat center;
    background-size: contain;
}

.highlight{
    text-decoration: none;
    color: #7c6839;
    display: inline;
    box-shadow: inset 0 -10px 0 #ffcc007d;
}

</style>