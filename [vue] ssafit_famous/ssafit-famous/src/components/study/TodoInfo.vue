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
        <button @click="addForm">추가</button>
        <!-- 
        <div v-if="add">
            <h4>todo 추가 모달</h4>
            <form>
                <label for="todoContent">내용</label>
                <input type="text"><br/>
                <label for="todoStart">시작일</label>
                <input type="text"><br/>
                
                <label for="todoEnd">마감일</label>
                <input type="text"><br/>
            </form>
            <button @click="addForm">취소</button>
            \<\!-- 추가 반영 처리 필요 --\>
            <button @click="addForm">추가</button> 
        </div> -->
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { useStudyStore } from '../stores/study'
import { useLoginUserStore } from '../stores/loginUser'
import axios from "axios";
import dayjs from 'dayjs';

const add = ref(false);
const addForm = ref(function(){
    add.value = !add.value;
})

const store = useStudyStore();
const uStore = useLoginUserStore();

const todos = ref([]);

const msg = ref(null);

// const select = function(study) {
//     store.studyDetail = study;
// }

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

</script>

<style scoped>

</style>