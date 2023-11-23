<!-- 캘린더 + 클릭시 수정 가능 (스터디장) -->
<!-- 삭제 가능 하지만 참고용~ -->
<template>
    <div>
        <h3>일정</h3>
        <!-- 캘린더 형태로 일정 표기-->
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#addScheduleModal">추가하기</button>
        <!-- 일정 추가 모달 -->
        <div class="modal fade" id="addScheduleModal" tabindex="-1" aria-labelledby="addScheduleModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addScheduleModal">Todo 추가하기</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <label for="scheduleDate">날짜</label>
                            <VueDatePicker v-model="schedulelDate" :format="date => formatDate(date)"></VueDatePicker>
                            <label for="scheduleContent">내용</label>
                            <input type="text" v-model="scheduleContent"><br/>
                            <label for="schedulePlace">장소</label>
                            <input type="text" v-model="schedulePlace"><br/>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="b btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        <button type="button" class="g btn btn-primary" data-bs-dismiss="modal" @click="addSchedule">추가</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';
import axios from 'axios';
import { useStudyStore } from '@/components/stores/study'
import dayjs from 'dayjs';

const store = useStudyStore();

const schedulelDate = ref();
const scheduleContent = ref();
const schedulePlace = ref();

const addSchedule = ref(function(){
    console.log("일정 추가!");
    console.log("studyKey => " + store.studyDetail.studyKey);
    console.log("scheduleDate => " + dayjs(schedulelDate.value).format('YYYY-MM-DD'));
    console.log("scheduleContent => " + scheduleContent.value);
    console.log("schedulePlace => " + schedulePlace.value);
    axios
        .post('http://localhost:8080/api/schedule', {
            "studyKey": store.studyDetail.studyKey,
            "scheduleDate": dayjs(schedulelDate.value).format('YYYY-MM-DD'),
            "scheduleContent": scheduleContent.value,
            "schedulePlace": schedulePlace.value,
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
});

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
</script>

<style scoped>

</style>