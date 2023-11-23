<template>
    <div class="container">
        <h2 class="highlight">회고 작성하기</h2>
        <form class="text-center">
            <div>
                <!-- 아래 2개는 값 고정 -->
                <div style="display: flex; justify-content: center;">
                    <div>스터디명</div>
                    <input type="text" name="studyName" id="studyName" :placeholder="studyInfo.studyName" disabled style="width: 20vw;"><br />
                    <div>카테고리</div>
                    <input type="text" name="studyCategory" id="studyCategory" :placeholder="studyInfo.category" disabled style="width: 10vw;"><br />
                </div>
                <div>제목</div>
                <input style="width: 20rem;" type="text" name="reviewTitle" id="reviewTitle" v-model="reviewTitle"><br />
                
                <div>내용</div>
                <textarea placeholder="스터디 과정 및 결과, 소감에 대해 솔직하게 적어주세요 ^.^" v-model="reviewContent" cols="35" rows="5"></textarea>
                
            </div>
        </form>
        <div class="btns">
            <button type="button" class="btn btn-primary m-1" @click="submit">작성완료</button>
            <button type="button" class="btn btn-secondary m-1" @click="move">취소</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useLoginUserStore } from '../stores/loginUser';
import { useStudyStore } from '../stores/study';
import { useReviewStore } from '../stores/review';

const router = useRouter();
const store = useLoginUserStore();
const sStore = useStudyStore();
const rStore = useReviewStore();

const studyInfo = sStore.studyDetail;

const move = function () {
    router.go(-1);
}

const reviewTitle = ref("");
const reviewContent = ref("");

const submit = function () {
    console.log(studyInfo);
    axios({
        method: "POST",
        url: "http://localhost:8080/api/review",
        data: {
            studyKey: studyInfo.studyKey,
            userKey: store.userKey,
            reviewTitle: reviewTitle.value,
            reviewContent: reviewContent.value,
        }
    })
        .then(function (res) {
            console.log(res.data);
            rStore.myReview = res.data;
            rStore.reviewKey = res.data.reviewKey;
            rStore.reviewWriter = store.userId;
            console.log(store.userId);
            router.replace('/reviewDetail');
        })
        .catch(function (err) {
            console.log(err);
        })
};


</script>

<style scoped>
.container {
    padding: 10vw;
}
.highlight{
    text-decoration: none;
    color: #7c6839;
    display: inline;
    box-shadow: inset 0 -10px 0 #ffcc007d;
}


.btns {
    display: flex;
    justify-content: center;
    margin: 10px;
}

input, textarea {
    border-radius: 10px;
}


</style>