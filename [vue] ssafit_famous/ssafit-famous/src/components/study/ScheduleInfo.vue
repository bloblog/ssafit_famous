<!-- 캘린더 + 클릭시 수정 가능 (스터디장) -->
<!-- 삭제 가능 하지만 참고용~ -->
<template>
    <div>
        <h3>일정</h3>
        <ol>
            <li v-for="schedule in schedules">
                <a href="#">{{ schedule.scheduleContent }}</a>
                <span>날짜 : {{ dayjs(schedule.scheduleDate).format('YYYY-MM-DD') }}</span>
            </li>
        </ol>
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
import { ref ,onMounted } from 'vue';
import axios from 'axios';
import { useStudyStore } from '@/components/stores/study'
import dayjs from 'dayjs';

const store = useStudyStore();

const schedulelDate = ref();
const scheduleContent = ref();
const schedulePlace = ref();

const schedules = ref([]);

const addSchedule = ref(function(){
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

const getSchedule = function(scheduleKey){
    axios
        .get('http://localhost:8080/api/schedule/' + scheduleKey)
        .then((res)=>{
            if (res.status === 200) {
                schedules.value.push(res.data);
                console.log(schedules);
            }
        })
        .catch((err)=>{
            log(err);
            alert("schedule을 가져오는 중 오류가 발생했습니다.")
        })
}

onMounted(() => {
    const API_URL = `http://localhost:8080/api/study/schedule/` + store.studyDetail.studyKey;
    axios
      .get(API_URL)
      .then((res) => {
        if (res.status === 200) {
            for (let i = 0; i < res.data.length; i++) {
                getSchedule(res.data[i]);
            }
            
        }
        if (res.status === 204) {
          const msg = "지금은 할 일이 없습니다.";
        }
      })
      .catch((err) => {
        console.log(err);
        alert("schedule을 불러오는 중 오류가 발생하였습니다.");
      });
      console.log(schedules.value);

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