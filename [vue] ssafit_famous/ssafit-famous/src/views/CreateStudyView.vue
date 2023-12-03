<template>
  <div>

    <div class="board">
      <h2 class="highlight">스터디 생성하기 🏃‍♀️</h2>
          <div class="create-form">
              <CreateFormItem/>
              <div class="form-member">
              <h4>팀원 추가하기</h4>
              <SearchMemberItem/>
          </div>
              
          </div>
          
          <div class="btns">

            <button class="btn btn-secondary m-1" @click="exit">취소</button>
            <button class="btn btn-primary m-1" @click="create">생성</button>
          </div>
          
      </div>
  </div>
</template>

<script setup>
import SearchMemberItem from '@/components/user/SearchMemberItem.vue'
import CreateFormItem from '@/components/study/CreateFormItem.vue';

import {ref} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStudyStore } from '@/components/stores/study';
import { useLoginUserStore } from '@/components/stores/loginUser';
import { useUserStore } from '@/components/stores/user';

import dayjs from 'dayjs';
import axios from "axios";

const store = useStudyStore();
const uStore = useLoginUserStore();
const tStore = useUserStore(); // 팀원 관련해서 사용할 거라 tStore 함

const router = useRouter();
const route = useRoute();

const exit = function() {
    router.go(-1);
}

const create = () => {
  console.log(tStore.members);
  const API_URL = `http://localhost:8080/api/study`;
  axios.post(API_URL, {
    alarm: store.alarm,
    category: store.category,
    leaderKey: uStore.userKey,
    studyEnd: dayjs(store.studyEnd).format("YYYY-MM-DD"),
    studyName: store.studyName,
    studyStart: dayjs(store.studyStart).format("YYYY-MM-DD"),
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
          store.studyDetail.leaderId =  uStore.userId;
          // 팀원 추가
          addMember();
        } else {

        }
      })
      .catch((err) => {
        console.error(err);
        alert("스터디 생성 중 오류가 발생했습니다");
      });
    
  }

  const addMember = () => {
    const inList = tStore.members.map(key=>key.userKey)
    console.log(inList);
    const API_URL = `http://localhost:8080/api/study/${store.studyDetail.studyKey}?in=${inList.join('&')}`;
      axios.post(API_URL, {
        alarm: store.studyDetail.alarm,
        category: store.studyDetail.category,
        leaderKey: uStore.userKey,
        studyEnd: dayjs(store.studyDetail.studyEnd).format("YYYY-MM-DD"),
        studyKey : store.studyDetail.studyKey,
        studyName: store.studyDetail.studyName,
        studyStart: dayjs(store.studyDetail.studyStart).format("YYYY-MM-DD"),
        // in : JSON.stringify(inList.value),
        // in : inList.value,

      })
      .then((res) => {
        if (res.status == 200) {
          router.replace("/studyDetail");

        } else {
          alert('팀원이 없어도 괜찮으신가요?');
          router.replace("/studyDetail");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("팀원 추가 중 오류가 발생했습니다");
      });
}

</script>

<style scoped>

.create-form {
    display: flex;
    justify-content: space-around;
    padding: 2rem 0;
}

.board {
  background-color: rgba(255, 255, 255, 0.6);
  padding: 5vw;
  margin: 10px;
  border-radius: 10vw;

}

.btns {
  text-align: center;
  
}

.highlight{
    text-decoration: none;
    color: #7e725c;
    display: inline;
    box-shadow: inset 0 -10px 0 #ffcc007d;
}

</style>