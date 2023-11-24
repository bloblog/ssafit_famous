<template>
    <div id="dashBoardView">
        <h2>대시보드</h2>
        
        <div class="items">
            <div>
                <CalendarItem/>
            </div>
            <div class="v-line">

            </div>
            <div class="m-3" style="display: flex; align-items: center;">
                <TodoProgress/>
                <!-- <ExpRank/> -->
    
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

.v-line {
  border-left : 1px solid rgb(0, 0, 0);
  margin-right: 5vw;
  margin-left: 5vw;
  height : 30vw;
}
</style>