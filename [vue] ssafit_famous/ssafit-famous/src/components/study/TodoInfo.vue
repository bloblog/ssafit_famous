<!-- 할일 쭈르륵 + 체크박스 + 스터디장 클릭스 수정가능 -->
<template>
    <div id="todoInfo">
        <h3>Todo</h3>
        
        <ol>
            <li v-for="todo in todos" :key="todo.todoKey">
              <label class="checkbox">
                <input type="checkbox">
                <span class="icon"></span>
              </label>
                <button @click=select(todo) class="btn" data-bs-toggle="modal" data-bs-target="#modifyTodoModal">{{ todo.todoContent }}</button>
                <!-- Todo 수정 모달 -->
                <div class="modal fade" id="modifyTodoModal" tabindex="-1" aria-labelledby="modifyTodoModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="modifyTodoModal">Todo 수정하기</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form>
                            <label for="todoContent">내용</label>
                            <input type="text" id="modifyTodoContent" v-model="modifyTodoContent" :placeholder="selected.todoContent"><br/>
                            <label for="todoStart">시작일</label>
                            <VueDatePicker v-model="todoStart"></VueDatePicker>
                            <label for="todoEnd">마감일</label>
                            <VueDatePicker v-model="todoEnd"></VueDatePicker>
                        </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="b btn btn-secondary" data-bs-dismiss="modal">취소</button>
                            <button type="button" class="g btn btn-primary" data-bs-dismiss="modal" @click="modifyTodo(todo)">수정</button>
                        </div>
                        </div>
                    </div>
                </div>

                <span>마감일 : {{ dayjs(todo.todoEnd).format('YYYY-MM-DD') }}</span>
                
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
                    <input type="text" id="addTodoContent" v-model="addTodoContent"><br/>
                    <label for="todoStart">시작일</label>
                    <VueDatePicker v-model="todoStart"></VueDatePicker>
                    
                    <label for="todoEnd">마감일</label>
                    <VueDatePicker v-model="todoEnd"></VueDatePicker>
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

import { ref, onMounted } from 'vue';
import { useStudyStore } from '../stores/study';
import { useLoginUserStore } from '../stores/loginUser';
import {useRouter, useRoute} from 'vue-router';

import axios from "axios";
import dayjs from 'dayjs';

const router = useRouter();
const route = useRoute();

const store = useStudyStore();
const loginUserStore = useLoginUserStore();

// const todoStart = ref('2023-11-24');
// const todoEnd = ref('2023-11-24');
const todoStart = ref('');
const todoEnd = ref('');
// const todoContent = ref("");
const addTodoContent = ref('');
const modifyTodoContent = ref('');

const todos = ref([]);
const selected = ref({});

const select = (todo) => {
  selected.value = todo;
  todoStart.value = todo.todoStart;
  todoEnd.value = todo.todoEnd;

  // 수정 폼 관련 초기화
  modifyTodoContent.value = todo.todoContent
  todoStart.value = todo.todoStart
  todoEnd.value = todo.todoEnd
}

const todoOne = ref({});
const success = (todo) => {
  todoOne.value = todo;
  const API_URL = `http://localhost:8080/api/todo/` + loginUserStore.userKey + `/` + todo.todoKey;
    axios
      .put(API_URL, {
        ...todoOne.value,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          todoOne.value.success = (todoOne.value.success==1 ? 0 : 1);
          console.log(todoOne.value);
        }
        if (res.status === 204) {

        }
      })
      .catch((err) => {
        console.log(err);
        alert("todo를 불러오는 중 오류가 발생하였습니다.");
      });
}

const getTodo = function(todoKey) {
    const API_URL2 = `http://localhost:8080/api/todo/` + todoKey;
    axios
      .get(API_URL2)
      .then((res) => {
        if (res.status === 200) {
            todos.value.push(res.data);
            console.log(todos);
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

const addTodo = function() {
  axios
    .post('http://localhost:8080/api/todo',{
      "studyKey" : store.studyDetail.studyKey,
      "todoStart" : todoStart.value,
      "todoEnd" : todoEnd.value,
      "todoContent" : addTodoContent.value,
      "users" : [loginUserStore.userKey], // 다른 팀원도 추가해야 함!
    })
    .then(function(response){
      console.log(response.data);
      todos.value.push(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
}

const modifyTodo = function(todo){
  axios
    .put('http://localhost:8080/api/todo/' + todo.todoKey, {
      "studyKey" : store.studyDetail.studyKey,
      "todoStart" : todoStart.value,
      "todoEnd" : todoEnd.value,
      "todoContent" : modifyTodoContent.value,
      "todoKey" : todo.todoKey,
      "users" : [loginUserStore.userKey], // 다른 팀원도 추가해야 함!
    })
    .then(function(response){
      console.log(todo);
      // 콘텐츠 + 날짜 다 수정하면 이전 todo가 사라지지 않는다...
      todos.value.splice(todo, 1);
      todos.value.push(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
}

</script>

<style scoped>
#todoInfo{
  width: 50%;
}

ol > li{
  list-style: none;
}
.done {
  text-decoration: line-through;
}

.checkbox{
  margin: 1%;
}
.checkbox input{
  display:none;
}
.checkbox span{
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
.checkbox .icon{
  position: relative;
  width: 17px;
  height: 17px;
  border: 1px solid #c8ccd4;
  border-radius: 3px;
  transition: background 0.1s ease;
}

.checkbox .icon::after{
  content: '';
  position: absolute;
  top: 1px;
  left: 5px;
  width: 5px;
  height: 11px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45def) scale(0);
  transform: all 0.3s ease;
  transition-delay: 0.15s;
  opacity: 0;
}

.checkbox input:checked ~ .icon {
  background-color: transparent;
  background: #54200c;
  animation: jelly 0.6s ease;
}

.checkbox input:checked ~ .icon::after{
  opacity: 1;
  transform: rotate(45deg) scale(1);
}

@keyframes jelly{
  from{transform: scale(1,1);}
  30%{transform: scale(1.25,0.75);}
  40%{transform: scale(0.75,1.25);}
  50%{transform: scale(1.15,0.85);}
  65%{transform: scale(0.95,1.05);}
  75%{transform: scale(1.05,0.95);}
  to{transform: scale(1,1);}
}
</style>