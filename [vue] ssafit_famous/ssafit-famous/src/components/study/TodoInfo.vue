<!-- 할일 쭈르륵 + 체크박스 + 스터디장 클릭스 수정가능 -->
<template>
    <div>
        <h3>Todo</h3>
        
        <ol>
            <li v-for="todo in todos">
                <a href="#">{{ todo.todoContent }}</a>
                <span>마감일 : {{ dayjs(todo.todoEnd).format('YYYY-MM-DD') }}</span>
                <label>완료여부</label>
                <input type="checkbox">
            </li>
        </ol>
        
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#addTodoModal">추가하기</button>
        <!-- Todo 추가 모달 -->
        <div class="modal fade" id="addTodoModal" tabindex="-1" aria-labelledby="addTodoModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="addTodoModal">Todo 추가하기</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <label for="todoContent">내용</label>
                    <input type="text" id="todoContent" v-model="todoContent"><br/>
                    <label for="todoStart">시작일</label>
                    <VueDatePicker v-model="todoStart" :format="date => formatDate(date)"></VueDatePicker>
                    
                    <label for="todoEnd">마감일</label>
                    <VueDatePicker v-model="todoEnd" :format="date => formatDate(date)"></VueDatePicker>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="b btn btn-secondary" data-bs-dismiss="modal">취소</button>
                    <button type="button" class="g btn btn-primary" data-bs-dismiss="modal" @click="addTodo">추가</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref,onMounted } from 'vue';
import { useStudyStore } from '../stores/study';
import { useLoginUserStore } from '../stores/loginUser';
import axios from "axios";
import dayjs from 'dayjs';

const store = useStudyStore();
const loginUserStore = useLoginUserStore();

const todoStart = ref();
const todoEnd = ref();
const todoContent = ref();

const todos = ref([]);

const getTodo = function(todoKey) {
    const API_URL2 = `http://localhost:8080/api/todo/` + todoKey;
    axios
      .get(API_URL2)
      .then((res) => {
        if (res.status === 200) {
            todos.value.push(res.data);
            
        }
        if (res.status === 204) {
        }
      })
      .catch((err) => {
        console.log(err);
        alert("todo를 불러오는 중 오류가 발생하였습니다.");
      });

}

onMounted(() => {
    const API_URL = `http://localhost:8080/api/study/todo/` + store.studyDetail.studyKey;
    axios
      .get(API_URL)
      .then((res) => {
        if (res.status === 200) {
            for (let i = 0; i < res.data.length; i++) {
                getTodo(res.data[i]);
            }
            
        }
        if (res.status === 204) {
          const msg = "지금은 할 일이 없습니다.";
        }
      })
      .catch((err) => {
        console.log(err);
        alert("todo를 불러오는 중 오류가 발생하였습니다.");
      });
      console.log(todos.value);

});

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const addTodo = ref(function(){
  axios
    .post('http://localhost:8080/api/todo',{
      "studyKey" : store.studyDetail.studyKey,
      "todoStart" : todoStart.value,
      "todoEnd" : todoEnd.value,
      "todoContent" : todoContent.value,
      "users" : loginUserStore.userKey,
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
})

</script>

<style scoped>

</style>