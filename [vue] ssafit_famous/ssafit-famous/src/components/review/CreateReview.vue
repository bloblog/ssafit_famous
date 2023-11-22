<!-- 회고 작성하기 -->
<template>
    <div>
        <h2>회고 작성하기</h2>
        <form>
            <div>
                <!-- 아래 2개는 값 고정 -->
                <label for="studyName">스터디명</label>
                <input type="text" name="studyName" id="studyName" :placeholder="studyInfo.studyName" disabled><br />
                <label for="studyCategory">카테고리</label>
                <input type="text" name="studyCategory" id="studyCategory" :placeholder="studyInfo.category" disabled><br />
            </div>
            <div>
                <label for="reviewTitle">제목</label>
                <input type="text" name="reviewTitle" id="reviewTitle" v-model="reviewTitle"><br />
                <label for="reviewContent">내용</label>
                <input type="textarea" name="reviewContent" id="reviewContent" v-model="reviewContent">
            </div>
            <button type="button" class="btn" @click="submit">작성완료</button>
        </form>
        <button type="button" class="btn" @click="move">취소</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useLoginUserStore } from '../stores/loginUser';
import { useStudyStore } from '../stores/study';


const router = useRouter();
const store = useLoginUserStore();
const sStore = useStudyStore();

const studyInfo = sStore.studyDetail;

const move = function () {
    router.go(-1);
}

const reviewTitle = ref("");
const reviewContent = ref("");

const submit = ref(function () {
    axios({
        method: "POST",
        url: "http://localhost:8080/api/review",
        data: {
            studyKey: studyInfo.studyKey,
            reviewTitle: reviewTitle.value,
            reviewContent: reviewContent.value,
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
});


</script>

<style scoped></style>