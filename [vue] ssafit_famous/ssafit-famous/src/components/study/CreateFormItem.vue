<template>
    <div>
        <h4>기본정보</h4>
        <div class="basicInfo" id="studyName">
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">{{ store.category }}</button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li v-for="(item, index) in store.cats" :key="index" @click="select(item)">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <input v-model="store.studyName" placeholder="스터디명" style="border-radius: 10px; border: none; padding:7px"><br/>
        </div>
        
        
        <div class="basicInfo">
            <label>시작일</label>
            <!-- <VueDatePicker v-model="store.studyDetail.studyStart" :format="date => formatDate(date)"></VueDatePicker> -->
            <VueDatePicker v-model="store.studyStart"></VueDatePicker>
            
            <label>종료일</label>
            <!-- <VueDatePicker v-model="store.studyDetail.studyEnd" :format="date => formatDate(date)"></VueDatePicker> -->
            <VueDatePicker v-model="store.studyEnd"></VueDatePicker>

        </div>
        
        <div class="basicInfo" id = "cat-alarm">
            
            <label>알림주기</label>
            <input v-model="store.alarm" type="number" placeholder="몇 일 전에 알림을 드릴까요?" style="border-radius: 10px; border: none; padding:7px; ">

        </div>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import {ref, onMounted} from 'vue'
import dayjs from 'dayjs';
import { useStudyStore } from '@/components/stores/study'

const store = useStudyStore();

// const studyName = ref(null);
// const category = ref("선택하세요");
// const studyStart = ref(new Date());
// const studyEnd = ref(new Date());
// const alarm = ref(0);

const select = (item) => {
    store.category = item;
}


// const formatDate = (date) => {
//   const year = date.getFullYear();
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const day = date.getDate().toString().padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };



</script>

<style scoped>

.dropdown {
    background-color: white;
    width: fit-content;
    border-radius: 10px;
    margin-right: 1rem;
}

.basicInfo {
    margin: 10px;
}

#studyName {
    display: flex;
}

label {
    margin: 10px;
}

#cat-alarm{
    margin: 20px;
    display: flex;
    justify-content: space-around;
}
</style>