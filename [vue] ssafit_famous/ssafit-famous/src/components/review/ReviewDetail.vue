<template>
    <div class="container">
        <div>
            <h3>제목 : {{ reviewInfo.reviewTitle }}</h3>
        </div>
        <hr/>
        <div>
            <div class="study-info">
              <span class="item">스터디명 : {{ studyInfo.studyName }}</span>
              <span class="item">카테고리 : {{ studyInfo.category }}</span>
            </div>
            <div class="user-info">

              <div class="item">작성자 : {{ reviewWriter }}</div>
              <div class="item">작성일 : {{ dayjs(reviewInfo.reviewDate).format("YYYY/MM/DD") }} </div>
              <div class="item">조회수 : {{  }}</div>
            </div>
            
            <hr/>
            <div class="content">{{ reviewInfo.reviewContent }}</div>
        </div>
        <button @click="move" class="searchBtn">닫기</button>
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
const studyInfo = ref({});
onMounted(() => {
    const API_URL = `http://localhost:8080/api/review/` + store.reviewKey;
    const API_URL2 = `http://localhost:8080/api/review/user/` + store.reviewKey;
    const API_URL3 = `http://localhost:8080/api/review/study/` + store.reviewKey;
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

      axios
      .get(API_URL3)
      .then((res) => {
        if (res.status === 200) {
          studyInfo.value = res.data;
        }
        if (res.status === 204) {
          alert("게시글이 존재하지 않습니다.");
          studyInfo.value = {};
        }
      })
      .catch((err) => {
        console.log(err);
        alert("게시글을 불러오는 중 오류가 발생하였습니다.");
      });

});

</script>

<style scoped>
.content {
  padding: 30px;
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
.item {
  margin: 10px;
}

.study-info {
  display: flex;
  flex-direction: row;
}

.user-info {
  display: flex;
  flex-direction: row;
}
</style>