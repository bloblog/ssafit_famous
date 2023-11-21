<!-- 스터디 디테일 들어가면 상단에 보이는 기본 정보들 -->
<template>
    <div>
        <h3>스터디명 : {{ store.studyDetail.studyName }}</h3>
        <p># {{ store.studyDetail.category }}</p>
        <p>
            팀원 : 
            <img src="#">
            <img src="#">
            <img src="#">
            <img src="#">
        </p>
        <p>시작일 {{ dayjs(store.studyDetail.studyStart).format("YYYY-MM-DD") }}</p>
        <p>종료일 {{ dayjs(store.studyDetail.studyEnd).format("YYYY-MM-DD") }}</p>
        <button @click="modifyForm">수정하기</button>
        <div v-if="modify">
            <h4>스터디 정보 수정 모달</h4>
            <CreateFormItem/>
            <SearchMemberItem/>
            <button @click="modifyForm">취소</button>
            <!--- 수정 반영 처리 필요 -->
            <button @click="modifyForm">수정</button> 
        </div>
    </div>
</template>

<script setup>
import SearchMemberItem from '../user/SearchMemberItem.vue';
import CreateFormItem from './CreateFormItem.vue';

import { useStudyStore } from '@/components/stores/study';
import { useLoginUserStore } from '@/components/stores/loginUser';
import axios from "axios";
import dayjs from 'dayjs';
import { ref } from 'vue';


const store = useStudyStore();
const uStore = useLoginUserStore();


const modify = ref(false);
const modifyForm = ref(function(){
    modify.value = !modify.value;
})
</script>

<style scoped>

</style>