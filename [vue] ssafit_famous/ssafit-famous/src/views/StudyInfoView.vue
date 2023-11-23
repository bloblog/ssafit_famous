<!-- 스터디 디테일 페이지 -->
<template>
    <div id="studyDetail" class="container">
        <!-- <h2>스터디 디테일</h2> -->
        <BasicInfo/>
        <TodoInfo/>
        <ScheduleInfo/>
    </div>
</template>

<script setup>
import BasicInfo from '../components/study/BasicInfo.vue'
import TodoInfo from '../components/study/TodoInfo.vue'
import ScheduleInfo from '../components/study/ScheduleInfo.vue'
</script>

<style scoped>
#studyDetail{
    padding: 3rem;
}
</style>