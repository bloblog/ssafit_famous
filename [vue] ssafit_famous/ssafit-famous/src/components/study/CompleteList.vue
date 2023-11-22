<!-- 완료된 스터디 리스트 -->
<template>
    <div>
        <h3>지난 스터디</h3>
        
        <div v-if="msg">{{ msg }}</div>
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
                    <td><RouterLink to="/studyDetail">{{ study.studyName }}</RouterLink></td>
                    <td>{{ study.category }}</td>
                    <td>{{ dayjs(study.studyStart).format('YYYY/MM/DD') }}</td>
                    <td>{{ dayjs(study.studyEnd).format('YYYY/MM/DD') }}</td>
                    <td v-if="study.studyKey in doneList">
                        <RouterLink to="/createReview">회고 작성하러 가기</RouterLink>
                    
                    </td>
                    <td v-else>
                        <RouterLink to="/reviewDetail">내가 작성한 회고 보기</RouterLink>
                       
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

const store = useStudyStore();
const uStore = useLoginUserStore();

const studys = ref([]);

const msg = ref(null);

const doneList = ref([]); // 회고 작성 완료한 스터디 키들

onMounted(() => {
    const API_URL = `http://localhost:8080/api/user/study/` + uStore.userKey;
    axios
      .get(API_URL)
      .then((res) => {
        if (res.status === 200) {
            studys.value = res.data.filter((study) => study.studyEnd > Date.now());
            
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
                    if (res.data || res.data.size() == 0) {
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
a {
    text-decoration: none;
}
</style>