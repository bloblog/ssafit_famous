import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useReviewStore = defineStore("review", () => {
  const searchResult = ref([]);

  const key = ref(null);
  const word = ref(null);
  const ob = ref(null);

  const reviewKey = ref(0);
  const msg = ref(null);

  const searchReview = () => {
    searchResult.value = [];
    const API_URL = `http://localhost:8080/api/review`;
    axios({
      url: API_URL,
      method: "GET",
      params: {
        key: key.value,
        word: word.value,
        orderBy: ob.value,
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
          searchResult.value = [];
        }
      })
      .catch((err) => {
        console.error(err);
        alert("검색 중 오류가 발생했습니다");
        searchResult.value = [];
      });
  };

  return {
    searchResult,
    searchReview,
    reviewKey,
    key,
    word,
    ob,
  };
});
