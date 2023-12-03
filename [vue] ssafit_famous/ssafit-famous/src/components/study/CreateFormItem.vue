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
            <VueDatePicker class="calendar" :enable-time-picker="false" auto-apply v-model="store.studyStart"></VueDatePicker>
            
            <label>종료일</label>
            <VueDatePicker class="calendar" :enable-time-picker="false" auto-apply v-model="store.studyEnd"></VueDatePicker>

        </div>
        
        <div class="basicInfo" id = "cat-alarm">
            
            <p>스터디 만남 </p>
            <input v-model="store.alarm" type="number" min="1" placeholder="N" style="background-color: #0000; border: none;">
            <p>일 전에 알림을 드릴게요.</p>
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

const select = (item) => {
    store.category = item;
}

// 폼 비우기
onMounted(() => {
    const studyName = ref(null);
    const category = ref("선택하세요");
    const studyStart = ref(new Date());
    const studyEnd = ref(new Date());
    const alarm = ref(null);
});


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

#cat-alarm {
    margin: 20px;
    display: flex;
    justify-content: space-around;
}
#cat-alarm input {
    width: 2.5rem;
    /* margin-right: 1rem; */
    margin-left: 1rem;
    
}

.calendar {
    width: fit-content;
}
</style>