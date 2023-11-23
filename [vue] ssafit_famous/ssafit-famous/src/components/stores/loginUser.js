import { ref, watch } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

export const useLoginUserStore = defineStore(
  "loginUser",
  () => {
    const status = ref(true);
    const userKey = ref("");
    const userId = ref("");

    const id = ref();
    const pw = ref();
    const pwcheck = ref();
    const validId = ref(false);
    const validIdCheck = ref(false);
    const signinConfirm = ref(false);

    const ongoingStudy = ref([]);
    const completeStudy = ref([]);

    const myReview = ref({});

    watch(pwcheck, () => {
      if (pw.value === pwcheck.value) {
        signinConfirm.value = true;
      } else {
        signinConfirm.value = false;
      }
    });

    const signout = ref(function () {
      id.value = null;
      pw.value = null;
      userId.value = undefined;
      userKey.value = undefined;
      status.value = false;
    });

    const signin = ref(function () {
      axios
        .post("http://localhost:8080/api/login", {
          id: id.value,
          password: pw.value,
        })
        .then(function (response) {
          console.log(response);
          // 204 : id 혹은 pw가 틀렸습니다.
          if (response.status === 204) {
            alert("아이디 혹은 비밀번호가 틀렸습니다.");
            id.value = null;
            pw.value = null;
          }
          // 200 : 로그인!
          if (response.status === 200) {
            userId.value = id.value;
            userKey.value = response.data;
            status.value = true;
            alert("로그인이 성공했습니다.");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });

    const signup = ref(function () {
      axios
        .post("http://localhost:8080/api/signup", {
          id: id.value,
          password: pw.value,
        })
        .then(function (response) {
          console.log(response.status);
          // 200 : 회원가입 성공!
          alert("회원가입에 성공했습니다.");
        })
        .catch(function (error) {
          console.log(error);
        });
      id.value = null;
      pw.value = null;
      validIdCheck.value = fasle;
      pwcheck.value = null;
    });

    const idCheck = ref(function () {
      axios
        .get("http://localhost:8080/api/search/" + id.value)
        .then(function (response) {
          console.log(response.status);
          // 200 : 이미 존재하는 아이디 입니다.
          if (response.status === 200) {
            validId.value = false;
            validIdCheck.value = true;
          }
          // 204 : 사용할 수 있는 아이디 입니다.
          if (response.status === 204) {
            validId.value = true;
            validIdCheck.value = true;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });

    return {
      status,
      userKey,
      userId,
      ongoingStudy,
      completeStudy,
      id,
      pw,
      pwcheck,
      validId,
      validIdCheck,
      signinConfirm,
      signout,
      signin,
      signup,
      idCheck,
      myReview,
    };
  },
  { persist: true }
);
