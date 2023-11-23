<!-- 캘린더 + 클릭시 수정 가능 (스터디장) -->
<template>
    <div>
        <h3>일정</h3>
        <ol>
            <li v-for="schedule in schedules" :key="schedule.scheduleKey">
                <button @click=select(schedule) class="btn" data-bs-toggle="modal" data-bs-target="#modifyScheduleModal">{{ schedule.scheduleContent }}</button>
                <!-- 일정 수정 모달 -->
                <div class="modal fade" id="modifyScheduleModal" tabindex="-1" aria-labelledby="modifyScheduleModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="modifyScheduleModal">일정 수정하기</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <label for="scheduleDate">날짜</label>
                                    <VueDatePicker v-model="scheduleDate"></VueDatePicker>
                                    <label for="scheduleContent">내용</label>
                                    <input type="text" v-model="modifyContent" :placeholder="schedule.todoContent"><br/>
                                    <label for="schedulePlace">장소</label>
                                    <input type="text" v-model="schedulePlace"><br/>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="b btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                <button type="button" class="g btn btn-primary" data-bs-dismiss="modal" @click="modifySchedule(schedule)">수정</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span>날짜 : {{ dayjs(schedule.scheduleDate).format('YYYY-MM-DD') }}</span>
            </li>
        </ol>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#addScheduleModal">추가하기</button>
        <!-- 일정 추가 모달 -->
        <div class="modal fade" id="addScheduleModal" tabindex="-1" aria-labelledby="addScheduleModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addScheduleModal">일정 추가하기</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <label for="scheduleDate">날짜</label>
                            <VueDatePicker v-model="schedulelDate" :format="(date) => dayjs(date).format('YYYY-MM-DD')"></VueDatePicker>
                            <label for="scheduleContent">내용</label>
                            <input type="text" v-model="addContent"><br/>
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

const scheduleDate = ref('');
const addContent = ref('');
const modifyContent = ref('');
const schedulePlace = ref('');


const selected = ref({});

const select = (schedule) => {
  selected.value = schedule;
  scheduleDate.value = schedule.scheduleDate;
  schedulePlace.value = schedule.schedulePlace;

  // 수정 폼 관련 초기화
  modifyContent.value = schedule.scheduleContent
  scheduleDate.value = schedule.scheduleDate
  schedulePlace.value = schedule.schedulePlace
}

const schedules = ref([]);

const addSchedule = ref(function(){
    axios
        .post('http://localhost:8080/api/schedule', {
            "studyKey": store.studyDetail.studyKey,
            "scheduleDate": dayjs(schedulelDate.value).format('YYYY-MM-DD'),
            "scheduleContent": addContent.value,
            "schedulePlace": schedulePlace.value,
        })
        .then(function(response){
            schedules.value.push(response.data);
            console.log(response.data);
            
        })
        .catch(function(error){
            console.log(error);
        })
});

const modifySchedule = function(item){
    axios
        .post('http://localhost:8080/api/schedule', {
            "studyKey": store.studyDetail.studyKey,
            "scheduleDate": dayjs(scheduleDate.value).format('YYYY-MM-DD'),
            "scheduleContent": modifyContent.value,
            "schedulePlace": schedulePlace.value,
        })
        .then(function(response){
            console.log(response.data)
            for(let i = 0; i < schedules.value.length; i++) {
                if(schedules.value[i] === item)  {
                    schedules.value.splice(i, 1);
                    break;
                }
            }
            schedules.value.push(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
};

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

</script>

<style scoped>

</style>