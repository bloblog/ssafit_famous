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
    margin: auto;
    padding: 5vh;
}

.items {
    display: flex;
}
</style>