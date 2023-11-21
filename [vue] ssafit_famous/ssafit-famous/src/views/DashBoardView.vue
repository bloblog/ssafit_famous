<template>
    <div>
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
.items {
    display: flex;
}
</style>