<template>
    <div>
        <h3>회고게시판 검색 결과</h3>

        <div v-for="review in store.searchResult">
            <router-link to="/reviewDetail" @click="select(review.reviewKey)">{{ review.reviewTitle }} : {{ review.viewCnt }}</router-link><br/>
        </div>


    </div>
</template>

<script setup>
import { useReviewStore } from '../stores/review'
import {useRouter, useRoute} from 'vue-router';
import {watch} from 'vue';

const router = useRouter();
const route = useRoute();

const store = useReviewStore();

const select = function(key) {
    store.reviewKey = key;
}

watch(store.searchResult, () => {
    this.$router.go();
});

</script>

<style scoped>

</style>