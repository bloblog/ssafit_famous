<template>
    <div class="container" id="myReview">
        <div>
            <h3>내가 작성한 리뷰</h3>

        </div>
        <div v-if="Empty">
            <p>작성한 리뷰가 없습니다.</p>
        </div>
        <div class="col-sm-5" v-else>
            <div class="card text-center" v-for="(review, index) in reviewList">
                <RouterLink to="reviewDetail" @click='select(index)' class="col">
                    <img src="@/assets/imges/review-thumbnail.png" class="card-img-top">
                    <p class="card-subtitle">{{ review.reviewTitle }}</p>
                    <p>조회수 {{ review.viewCnt }}</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLoginUserStore } from '../stores/loginUser';
import { useReviewStore } from '../stores/review';

import axios from 'axios';

const store = useLoginUserStore();
const rStore = useReviewStore();


const Empty = ref(false);
const reviewList = ref();

const select = (index) => {
    rStore.reviewKey = reviewList.value[index].reviewKey;
}

axios
    .get('http://localhost:8080/api/review', {
        params: {
            key: 'userKey',
            word: store.userKey,
        }
    })
    .then(function (response) {
        if (response.status === 204) {
            Empty.value = true;
        }
        if (response.status === 200) {
            Empty.value = false;
            reviewList.value = response.data;
            console.log(reviewList.value);
        }
    })
    .catch(function (error) {
        console.log(error);
    })

</script>

<style scoped>
#myReview{
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    padding: 2rem;
    margin: 2rem auto;
}
a {
    text-decoration: none;
}
</style>