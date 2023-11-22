<!-- 내가 작성한 리뷰 -->
<template>
    <div>
        <h3>내가 작성한 리뷰</h3>

    </div>
    <div v-if="Empty">
        <p>작성한 리뷰가 없습니다.</p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4" v-else>
        <RouterLink to="reviewDetail" class="col">
            <div class="card" v-for="review in reviewList">
                <img :src="review.reviewImgPath" class="card-img-top">
                <h5 class="card-body">{{ review.reviewTitle }}</h5>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLoginUserStore } from '../stores/loginUser';
import axios from 'axios';
const store = useLoginUserStore();

const Empty = ref(false);
const reviewList = ref();

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
a {
    text-decoration: none;
}
</style>