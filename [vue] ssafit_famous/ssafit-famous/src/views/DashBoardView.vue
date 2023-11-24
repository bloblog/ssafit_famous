<template>
    <div id="dashBoardView">
        <h2>대시보드</h2>
        
        <div class="items">
            <div>
                <CalendarItem/>
            </div>
            <div>
                <TodoProgress/>
                <ExpRank/>
    
            </div>

        </div>
    </div>
</template>

<script setup>
import CalendarItem from '../components/study/CalendarItem.vue';
import TodoProgress from '../components/study/TodoProgress.vue'
import ExpRank from '../components/user/ExpRank.vue';
</script>

<style scoped>
#dashBoardView{
    width: 80vw;
    padding: 5vh;
    background-color: rgba(255, 255, 255, 0.6);
    margin: 2rem auto;
}
.items {
    display: flex;
}
</style>