

<template>
    <div>
        <div>
            <label>스터디명 </label>
            <input v-model="studyName" placeholder="스터디 이름을 입력하세요"><br/>
            <label>카테고리</label>
            <div class="category">
                <input type="radio" v-model="category" id="coding" name="category" value="coding">코딩
                <input type="radio" v-model="category" id="fitness" name="category" value="fitness">운동
                <input type="radio" v-model="category" id="hobby" name="category" value="hobby">취미
                <input type="radio" v-model="category" id="reading" name="category" value="reading">독서
            </div>
            <label>시작일 </label>
            <VueDatePicker v-model="startDate"></VueDatePicker><br/>
            <label>종료일 </label>
            <VueDatePicker v-model="endDate"></VueDatePicker><br/>
            <label>알림주기 </label>
            <input v-model="alarm" type="number" placeholder="몇 일 전에 알림을 드릴까요?"><br/>
        </div>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import {ref} from 'vue'

const studyName = ref(null);
const category = ref(null);
const startDate = ref(new Date());
const endDate = ref(new Date());
const alarm = ref(0);



</script>

<style scoped>

</style>