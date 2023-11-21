<template>
    <div>
        <div>
            <h3>제목 : {{ reviewInfo.reviewTitle }}</h3>
        </div>
        <div>
            <div>작성자 : {{ reviewWriter }}</div>
            <div>작성일 : {{ dayjs(reviewInfo.reviewDate).format("YYYY/MM/DD") }} </div>
            <div>스터디명 : {{ reviewInfo.studyKey }} (일단 키)</div>
            <div>카테고리 : {{ reviewInfo.studyKey }}(일단 스터디 키)</div>
            <p>{{ reviewInfo.reviewContent }}</p>
        </div>
        <button @click="move">닫기</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useReviewStore } from '../stores/review'
import axios from "axios";
import dayjs from 'dayjs';

const store = useReviewStore();

const router = useRouter();
const route = useRoute();


const move = function() {
    router.go(-1);
}

const reviewInfo = ref({});
const reviewWriter = ref(null);
onMounted(() => {
    const API_URL = `http://localhost:8080/api/review/` + store.reviewKey;
    const API_URL2 = `http://localhost:8080/api/review/user/` + store.reviewKey;
    axios
      .get(API_URL)
      .then((res) => {
        if (res.status === 200) {
          reviewInfo.value = res.data;
        }
        if (res.status === 204) {
          const msg = "해당 게시글은 존재하지 않습니다.";
        }
      })
      .catch((err) => {
        console.log(err);
        alert("게시글을 불러오는 중 오류가 발생하였습니다.");
      });

      axios
      .get(API_URL2)
      .then((res) => {
        if (res.status === 200) {
          reviewWriter.value = res.data;
        }
        if (res.status === 204) {
            reviewWriter.value = "존재하지 않는 사용자 입니다.";
        }
      })
      .catch((err) => {
        console.log(err);
        alert("게시글 작성자를 불러오는 중 오류가 발생하였습니다.");
      });

});

</script>

<style scoped>

</style>