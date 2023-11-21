<template>
    <div>
        <h4 v-if="store.word">"{{ store.word }}" 검색 결과</h4>
        <h4 v-else-if="!store.ob">전체 게시글입니다.</h4>
        <h4 v-else>{{ (store.ob=='viewCnt' ? '조회수' : '작성날짜') }}로 정렬한 결과</h4>
        <div>
            <div v-if="store.searchResult.length == 0"> 조건에 맞는 회고가 없습니다😢 </div>
            <div v-for="review in store.searchResult">
                <router-link to="/reviewDetail" @click="select(review.reviewKey)">{{ review.reviewTitle }} : {{ review.viewCnt }}</router-link><br/>
            </div>
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


</script>

<style scoped>

</style>