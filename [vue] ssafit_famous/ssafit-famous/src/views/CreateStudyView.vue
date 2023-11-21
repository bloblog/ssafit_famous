<template>
    <div>
        <h2>스터디 생성 폼</h2>
        <div class="create-form">
            <CreateFormItem/>
            <div class="v-line"></div>
            <div class="form-member">
                <!-- <label>팀원 목록</label> -->
                <!-- <SearchMemberItem/> -->
            </div>
        </div>
        <button @click="exit">취소</button>
        <button @click="create">생성</button>
        
    </div>
</template>

<script setup>
import SearchMemberItem from '@/components/user/SearchMemberItem.vue'
import CreateFormItem from '@/components/study/CreateFormItem.vue';

import {ref} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStudyStore } from '@/components/stores/study';
import { useLoginUserStore } from '@/components/stores/loginUser';

import dayjs from 'dayjs';
import axios from "axios";

const store = useStudyStore();
const uStore = useLoginUserStore();


const router = useRouter();
const route = useRoute();

const exit = function() {
    router.go(-1);
}

const create = () => {
  const API_URL = `http://localhost:8080/api/study`;
  axios.post(API_URL, {
    alarm: store.alarm,
    category: store.category,
    leaderKey: uStore.userKey,
    studyEnd: dayjs(store.endDate).format("YYYY-MM-DD"),
    studyName: store.studyName,
    studyStart: dayjs(store.startDate).format("YYYY-MM-DD"),
  })
    .then((res) => {
      if (res.data !== null) {
        createDone();
      } else {
        
      }
    })
    .catch((err) => {
      console.error(err);
      alert("스터디 생성 중 오류가 발생했습니다");
    
    });
};

const createDone = function() {
    // 스터디 만들어진 후, 스터디 이름으로 스터디 정보(key 포함) 찾아서 상세 페이지 가자
    const API_URL = `http://localhost:8080/api/study/key/` + store.studyName;
    axios.get(API_URL)
      .then((res) => {
        if (res.data !== null) {
          console.log(res.data);
          store.studyDetail = res.data;
          router.push("/studyDetail");
        } else {
        }
      })
      .catch((err) => {
        console.error(err);
        alert("스터디 생성 중 오류가 발생했습니다");
      });

    
}

</script>

<style scoped>

.create-form {
    display: flex;
}

.v-line {
    border-left : solid #111111;
    height : 150px;
    margin: 10px;
}


</style>