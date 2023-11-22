import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", () => {

    const msg = ref(null);
    const userId = ref(null);
    const searchList = ref([]);
    const members = ref([]);

    const searchMember = () => {
        const API_URL = `http://localhost:8080/api/search/` + userId.value;
        axios({
        url: API_URL,
        method: "GET",
        })
        .then((res) => {
            if (res.data && res.data.length > 0) {
            for (let data of res.data) {
                searchList.value.push(data);
            }
            } else {
                msg.value = "해당 아이디를 가진 사용자가 없습니다.";
                searchList.value = [];
            }
        })
        .catch((err) => {
            console.error(err);
            alert("검색 중 오류가 발생했습니다");
            searchList.value = [];
        });
    };


  
  return { searchList, searchMember, msg, userId, members };
});
