import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useReviewStore = defineStore("review", () => {
  const searchResult = ref([]);
  const reviewKey = ref(0);

  const searchReview = (k, w) => {
    searchResult.value = [];
    const API_URL = `http://localhost:8080/api/review`;
    axios({
      url: API_URL,
      method: "GET",
      params: {
        // 지금은 최신순, 조회순, 제목, 카테고리 검색만 가능하도록
        key: k,
        word: w,
        orderBy: k === "최신순" ? "reviewDate" : "viewCnt",
        orderByDir: "desc",
      },
    })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          console.log(res);
          for (let data of res.data) {
            searchResult.value.push(data);
          }
        } else {
          alert("검색 조건에 해당하는 회고가 없습니다.");
          searchResult.value = [];
        }
      })
      .catch((err) => {
        console.error(err);
        alert("검색 중 오류가 발생했습니다");
        searchResult.value = [];
      });
  };

  return { searchResult, searchReview, reviewKey };
});
