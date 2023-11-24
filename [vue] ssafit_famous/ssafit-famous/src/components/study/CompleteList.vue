<!-- 완료된 스터디 리스트 -->
<template>
    <div id="completeList">
        <h3>지난 스터디</h3>
        <div v-if="!isExist">지난 스터디가 없습니다.</div>
        <div v-else>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">스터디명</th>
                    <th scope="col">카테고리</th>
                    <th scope="col">시작일</th>
                    <th scope="col">종료일</th>
                    <th scope="col">회고작성</th>
                </tr>
            </thead>
            <tbody v-for="(study, index) in studys">
                <tr>
                    <td scope="row">{{ index+1 }}</td>
                    <td><RouterLink to="/studyDetail" @click="select(study)">{{ study.studyName }}</RouterLink></td>
                    <td>{{ study.category }}</td>
                    <td>{{ dayjs(study.studyStart).format('YYYY/MM/DD') }}</td>
                    <td>{{ dayjs(study.studyEnd).format('YYYY/MM/DD') }}</td>
                    <td v-if="doneList.includes(study.studyKey)">
                        <RouterLink to="/reviewDetail" @click="detail(study)">내가 작성한 회고 보기</RouterLink>
                    </td>
                    <td v-else>
                        <RouterLink to="/createReview" @click="select(study)">회고 작성하러 가기</RouterLink>
                       
                    </td>
                </tr>

            </tbody>
                
        </table>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import { useStudyStore } from '../stores/study'
import { useLoginUserStore } from '../stores/loginUser'

import axios from "axios";
import dayjs from 'dayjs';

const sStore = useStudyStore();
const uStore = useLoginUserStore();

const studys = ref([]); // 완료된 스터디

const isExist = ref(false);

const doneList = ref([]); // 회고 작성 완료

const select = function(study) {
    sStore.studyDetail = study;
    console.log(sStore.studyDetail)
}

onMounted(() => {
    const API_URL = `http://localhost:8080/api/user/study/` + uStore.userKey;
    axios
    .get(API_URL)
    .then((res) => {
        if (res.status === 200) {
            studys.value = res.data.filter((study) => dayjs(study.studyEnd).format('YYYYMMDD') < dayjs(new Date()).format('YYYYMMDD'));
            if (studys.value.length > 0) {
                isExist.value = true;
            }
        }
        if (res.status === 204) {
          const msg = "완료된 스터디가 없습니다.";
        }
      })
      .catch((err) => {
        console.log(err);
        alert("목록을 불러오는 중 오류가 발생하였습니다.");
      });

      
      const isDone = () => {
            const API_URL = `http://localhost:8080/api/review`;
            axios({
                url: API_URL,
                method: "GET",
                params: {
                    key: "userKey",
                    word: uStore.userKey,
                },
                })
                .then((res) => {
                    if (res.data || res.data.size() !== 0) {
                        // isExist.value = true;
                        for (let i = 0; i < res.data.size(); i++) {
                            doneList.value.push(res.data[i].studyKey);
                        }
                    } else {
                        reviewList = [];
                    }
                })
                .catch((err) => {
                    console.error(err);
                    alert("목록 확인 중 오류가 발생했습니다");
                    searchResult.value = [];
                });
        };

});
</script>

<style scoped>
#completeList{
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    padding: 2rem;
    margin: 2rem auto;
}
a {
    text-decoration: none;
}
</style>