<template>
    <div class = "topReview">
        <h3 class="text-center">조회수 순 상위 3개 게시글</h3>
        <div v-if="topReviews.length == 0">아직 게시글이 없어요!</div>
        <div v-for="review in topReviews.slice(0, 3)">
            <router-link to="/reviewDetail" @click="select(review.reviewKey)">{{ review.reviewTitle }}</router-link><br/>
        </div>
        <br/>
        <div>
            <button class="moreBtn" @click="more">더보기</button>
        </div>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import axios from "axios";
import { useReviewStore } from '../stores/review'
import {useRouter, useRoute} from 'vue-router';
import ReviewDetailView from '@/views/ReviewDetailView.vue';

const router = useRouter();
const route = useRoute();

const store = useReviewStore();

const topReviews = ref([]);

const select = function(k) {
    store.reviewKey = k;
}

const more = function() {
    store.key = store.word = store.ob = null;
    store.searchReview();
    router.push("ReviewDetailView");
}

onMounted(() => {
    const API_URL = `http://localhost:8080/api/review`;
    axios({
        url: API_URL,
        method: "GET",
        params: {
            orderBy: "viewCnt",
            orderByDir: "desc",
        },
    })
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                topReviews.value.push(res.data[i]);
            }
        })
        .catch((err) => {
        console.error(err);
        topReviews.value = [];
        alert("로딩 중 오류가 발생했습니다");
        });
});

</script>

<style scoped>
.moreBtn {
    border-radius: 30px;
    padding: 5px;
    padding-right: 20px;
    padding-left: 20px;
    border : none;
    background-color: #1ac8b9;
    color: #ffffff;
}

.topReview{
    width: 70%;
}
</style>