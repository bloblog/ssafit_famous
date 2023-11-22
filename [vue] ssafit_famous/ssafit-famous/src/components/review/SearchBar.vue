<template>
    <div class="search-bar">
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">{{ ob }}</button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li @click="orderBy">작성날짜</li>
                <li @click="orderBy">조회수</li>
            </ul>
            <input v-model="word" placeholder="제목을 검색해보세요">
            <button class="searchBtn" @click="search">조회</button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useReviewStore } from '../stores/review'
import {useRouter, useRoute} from 'vue-router';
import ReviewDetailView from '@/views/ReviewDetailView.vue';

const router = useRouter();
const route = useRoute();

const ob= ref("정렬기준");
const word = ref(null);

const store = useReviewStore();

const orderBy = function (event) {
    let text = event.target.innerText;
    ob.value = text;
}

const search = function() {
    if (word.value !== null) {
        store.key = 'reviewTitle';
        store.word = word.value;
    } else {
        store.key = null;
        store.word = null;
        store.ob = (ob.value == '조회수' ? 'viewCnt':'reviewDate');
    }
    store.searchReview();
    
    if (window.location.href != 'http://localhost:5173/ReviewDetailView') {
        router.push('ReviewDetailView');
    }
}

</script>

<style scoped>
.search-bar {
    padding: 10px;
    text-align: center;
}

.searchBtn {
    border-radius: 30px;
    padding: 5px;
    padding-right: 20px;
    padding-left: 20px;
    border : none;
    background-color: #1ac8b9;
    color: #ffffff;
}

</style>