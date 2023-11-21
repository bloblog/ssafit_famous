<template>
    <div>
        <div>
            <label>스터디명 </label>
            <input v-model="store.studyName" placeholder="스터디 이름을 입력하세요"><br/>
            
            <label>카테고리</label>
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">{{ store.category }}</button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li v-for="(item, index) in store.cats" :key="index" @click="select(item)">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <!-- <div class="category">
                <input type="radio" v-model="category" id="coding" name="category" value="coding">코딩
                <input type="radio" v-model="category" id="fitness" name="category" value="fitness">운동
                <input type="radio" v-model="category" id="hobby" name="category" value="hobby">취미
                <input type="radio" v-model="category" id="reading" name="category" value="reading">독서
            </div> -->
            <label>시작일</label>
            <VueDatePicker v-model="store.startDate" :format="date => formatDate(date)"></VueDatePicker>
            <label>종료일</label>
            <VueDatePicker v-model="store.endDate" :format="date => formatDate(date)"></VueDatePicker>
            <label>알림주기 </label>
            <input v-model="store.alarm" type="number" placeholder="몇 일 전에 알림을 드릴까요?"><br/>
        </div>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import {ref} from 'vue'
import { useStudyStore } from '@/components/stores/study'

const store = useStudyStore();

// const studyName = ref(null);
// const category = ref("선택하세요");
// const startDate = ref(new Date());
// const endDate = ref(new Date());
// const alarm = ref(0);

const select = (item) => {
    store.category = item;
}


const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

</script>

<style scoped>

</style>