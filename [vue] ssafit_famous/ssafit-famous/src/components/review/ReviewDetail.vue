<template>
    <div class="container">
        <div>
            <h3>제목 : {{ reviewInfo.reviewTitle }}</h3>
        </div>
        <hr/>
        <div>
            <div class="study-info">
              <span class="item">스터디명 : {{ sStore.studyDetail.studyName }}</span>
              <span class="item">카테고리 : {{ sStore.studyDetail.category }}</span>
            </div>
            <div class="user-info">
              <div class="item">작성자 : {{ store.reviewWriter }}</div>
              <div class="item">작성일 : {{ dayjs(reviewInfo.reviewDate).format("YYYY/MM/DD") }} </div>
              <div class="item">조회수 : {{ reviewInfo.viewCnt }}</div>
            </div>
            
            <hr/>
            <div class="content">{{ reviewInfo.reviewContent }}</div>
        </div>
        <button type="button" class="searchBtn" data-bs-toggle="modal" data-bs-target="#modifyReviewModal">수정</button>
          <!-- 회고 수정 모달 -->
          <div class="modal fade" id="modifyReviewModal" tabindex="-1" aria-labelledby="modifyReviewModal" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="modifyReviewModal">내 회고 수정하기</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <!-- 회고 작성 폼 참고 작성하기-->
                    <div>
                      <!-- 아래 2개는 값 고정 -->
                      <div style="display: flex; justify-content: center;">
                          <div>스터디명</div>
                          <input type="text" name="studyName" id="studyName" :placeholder="studyInfo.studyName" disabled style="width: 20vw;"><br />
                          <div>카테고리</div>
                          <input type="text" name="studyCategory" id="studyCategory" :placeholder="studyInfo.category" disabled style="width: 10vw;"><br />
                      </div>
                      <div>제목</div>
                      <input style="width: 20rem;" type="text" name="reviewTitle" id="reviewTitle" v-model="reviewTitle" ><br />
                      
                      <div>내용</div>
                      <textarea v-model="reviewContent" cols="35" rows="5"></textarea>
                      
                    </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="b btn btn-secondary" data-bs-dismiss="modal">취소</button>
                      <button type="button" class="g btn btn-primary" data-bs-dismiss="modal" @click="modifyReview">수정</button>
                  </div>
                </div>
              </div>
          </div>
        <button @click="deleteReview" class="searchBtn">삭제</button>
        <button @click="move" class="searchBtn">닫기</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useReviewStore } from '../stores/review';
import { useStudyStore } from '../stores/study';
import { useLoginUserStore } from '../stores/loginUser';


import axios from "axios";
import dayjs from 'dayjs';

const store = useReviewStore();
const sStore = useStudyStore();
const lStore = useLoginUserStore();


const router = useRouter();
const route = useRoute();


const move = function() {
    router.go(-1);
}

const reviewInfo = ref({});
const reviewWriter = ref(null);
const studyInfo = ref({});

if (store.myReview) {
  reviewInfo.value = store.myReview;
}

const modifyReview = ref(function(){
  console.log("수정");
  axios
    .put(`http://localhost:8080/api/review/` + store.reviewKey, {
        "studyKey": sStore.studyDetail.studyKey,
        "userKey": lStore.userKey,
        "reviewTitle": store.reviewTitle,
        "reviewContent": store.reviewContent,
    })
    .then(function(response){
      console.log(error);
    })
    .catch(function(error){
      console.log(error);
    })
});

const deleteReview = ref(function(){
  console.log("삭제");
  axios
    .delete(`http://localhost:8080/api/review/` + store.reviewKey, {
      "userKey": lStore.userKey,
    })
    .then(function(response){
      console.log(error);
    })
    .catch(function(error){
      console.log(error);
    })
});


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