import { ref } from 'vue';
import { defineStore } from "pinia";
import axios from "axios";

export const useStudyStore = defineStore("study", () => {

  const cats = ref([
    '코딩',
    '운동',
    '취미',
    '독서',
    '기타',
  ]);

  const studyName = ref(null);
  const category = ref("선택하세요");
  const leaderKey = ref(0);
  const startDate = ref(new Date());
  const endDate = ref(new Date());
  const alarm = ref(0);

  const studyDetail = ref({});
  return {
    cats,
    studyName,
    category,
    leaderKey,
    startDate,
    endDate,
    alarm,
    studyDetail,
  };
});
