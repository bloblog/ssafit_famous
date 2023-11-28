import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useStudyStore = defineStore("study", () => {
  const cats = ref(["코딩", "운동", "취미", "독서", "기타"]);

  const studyName = ref(null);
  const category = ref("카테고리");
  const leaderKey = ref(0);
  const studyStart = ref(new Date());
  const studyEnd = ref(new Date());
  const alarm = ref(null);

  const studyDetail = ref({});

  return {
    cats,
    studyName,
    category,
    leaderKey,
    studyStart,
    studyEnd,
    alarm,
    studyDetail,
  };
});
