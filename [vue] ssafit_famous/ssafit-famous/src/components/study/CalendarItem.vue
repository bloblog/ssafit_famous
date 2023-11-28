<!-- 일정 표시할 캘린더 -->
<template>
    <div>
        <div style="display: flex; flex-direction: column;">
          <p class="text-center">클릭해서 일정을 확인해보세요!</p>
          <VCalendar ref="calendar"
            trim-weeks
            :attributes="attrs"
          
          >
          <template #footer>
            <p class="text-center">클릭한 날의 일정 (없으면 null)</p>
          </template>
        
          </VCalendar>
        
        
          <!-- <div class="btn btn-group m-2">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modifyModal">수정하기</button>
              <modifyModal/>

              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#addModal">추가하기</button>
              <addModal/>
          </div> -->
        </div>
    </div>
</template>

<script setup>
import modifyModal from '@/components/study/ScheduleModify.vue';
import {ref} from 'vue';

const attrs = ref([
  {
    key: 'today',
    highlight: "pink",
    dates: new Date(),
  },
  // 일정 존재하는 날만 담자
  {
    dot: 'pink',
    dates: [
      new Date('2023-11-04'),
      new Date('2023-11-10'),
      new Date('2023-11-15'),
    ],
  },
]);

const currentEvents = ref([]);

</script>



<style scoped>


</style>