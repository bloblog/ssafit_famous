<!-- todo 달성률 그래프 -->
<template>
    <div id="todoProgress">
        <h3> 전체 {{ todoAll.length }}개의 할 일 중 {{ todoDone.length }}개를 완료했어요!</h3>
        <h4> 해야할 일을 확인해보세요</h4>
        <div v-for="todo in todoYet">
            <p>{{ todo.todoContent }}</p>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useLoginUserStore } from '../stores/loginUser';

const store = useLoginUserStore();

const todoAll = ref([])

const todoDone = ref([])

const todoYet = ref([])

onMounted(()=>{
    axios
        .get('http://localhost:8080/api/user/todo/' + store.userKey)
        .then(function(response){
            // console.log(response);
            todoAll.value = response.data;
            todoYet.value = todoAll.value.filter((todo)=>!todo.success);
            console.log(todoYet);
        })
        .catch(function(error){
            console.log(error);
        })
})
</script>

<style scoped>
#todoProgress{
    height: 50%;
}
</style>