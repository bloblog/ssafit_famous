<template>
    <div>
        <h3>조회수 순 상위 3개 게시글</h3>
        <div v-for="review in topReviews.slice(0, 3)">
            <router-link to="/reviewDetail" @click="select(review.reviewKey)">{{ review.reviewTitle }}</router-link><br/>
        </div>
        <br/>
        <div>
            <router-link to="/reviewDetailView">더보기</router-link>
        </div>

    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from "axios";
import { useReviewStore } from '../stores/review'

const store = useReviewStore();

const reviewKey = ref(0);

const topReviews = ref([]);

const select = function(key) {
    store.reviewKey = key;
    // reviewKey 보내야 함
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
        if (res.data) {
            for (let i = 0; i < res.data.length; i++) {
                topReviews.value.push(res.data[i]);
            }
            
        } else {
            alert("리뷰가 존재하지 않습니다.");
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

</style>