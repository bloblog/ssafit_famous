<template>
    <div id="ongoingList">
        <h3>진행중인 스터디</h3>
        <div v-if="!isExist">진행중인 스터디가 없습니다.</div>
        <div v-else>
            <p>스터디명 클릭 시 상세페이지로 이동합니다</p>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">스터디명</th>
                        <th scope="col">카테고리</th>
                        <th scope="col">시작일</th>
                        <th scope="col">종료일</th>
                    </tr>
                </thead>
                <tbody v-for="(study, index) in studys">
                    <tr>
                        <td scope="row">{{ index+1 }}</td>
                        <td><RouterLink to="/studyDetail" @click="select(study)">{{ study.studyName }}</RouterLink></td>
                        <td>{{ study.category }}</td>
                        <td>{{ dayjs(study.studyStart).format('YYYY/MM/DD') }}</td>
                        <td>{{ dayjs(study.studyEnd).format('YYYY/MM/DD') }}</td>
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
const isExist = ref(false);

const select = function(study) {
    store.studyDetail = study;
}

onMounted(() => {
    const API_URL = `http://localhost:8080/api/user/study/` + uStore.userKey;
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
            studys.value = res.data.filter((study) => dayjs(study.studyEnd).format('YYYYMMDD') >= dayjs(new Date()).format('YYYYMMDD'));
            if (studys.value.length > 0) {
                isExist.value = true;
            }
        }
        
        if (res.status === 204) {
            
        }
      })
      .catch((err) => {
        console.log(err);
        alert("목록을 불러오는 중 오류가 발생하였습니다.");
      });

});


</script>

<style scoped>

#ongoingList{
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    padding: 2rem;
    margin: 2rem auto;
}

a{
    text-decoration: none;
}

</style>