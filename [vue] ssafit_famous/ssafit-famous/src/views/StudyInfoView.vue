<!-- 스터디 디테일 페이지 -->
<template>
    <div id="studyDetail" class="container">
        <BasicInfo/>
        <div>
            <TodoInfo/>
            <ScheduleInfo/>
        </div>
    </div>
    <button type="button" class="btn" @click="backToMenu">목록으로 돌아가기</button>
</template>

<script setup>
import BasicInfo from '../components/study/BasicInfo.vue'
import TodoInfo from '../components/study/TodoInfo.vue'
import ScheduleInfo from '../components/study/ScheduleInfo.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const backToMenu = ref(function(){
    router.go(-1);
})

</script>

<style scoped>
#studyDetail{
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    padding: 2rem;
    margin: 2rem auto;
}

#studyDetail > div{
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
}
</style>