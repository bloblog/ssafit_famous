<template>
    <div>
        <h4>기본정보</h4>
        <div class="basicInfo" id="studyName">
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">{{ store.studyDetail.category }}</button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li v-for="(item, index) in store.cats" :key="index" @click="select(item)">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <input v-model="store.studyName" :placeholder="`${store.studyDetail.studyName}`" style="border-radius: 10px; border: none; padding:7px"><br/>
        </div>
        
        
        <div class="basicInfo">
            <label>시작일</label>
            <VueDatePicker v-model="store.studyStart" :placeholder="`${dayjs(store.studyDetail.studyStart).format('YYYY/MM/DD')}`"></VueDatePicker>
            <label>종료일</label>
            <VueDatePicker v-model="store.studyEnd" :placeholder="`${dayjs(store.studyDetail.studyEnd).format('YYYY/MM/DD')}`"></VueDatePicker>

        </div>
        
        <div class="basicInfo" id = "cat-alarm">
            
            <input v-model="store.alarm" type="number" :placeholder="`${store.studyDetail.alarm}`" style="border-radius: 10px; border: none; padding:7px; ">
            <label>일 전에 알려드릴게요!</label>

        </div>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import dayjs from 'dayjs';
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