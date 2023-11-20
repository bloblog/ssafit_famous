<template>
    <div>
        <button @click="signout">로그아웃</button>
        <button>로그인</button>
        <button>회원가입</button>
        <a href="/nested/index.html">그냥 둘러볼래</a>
        <div class="app">
            <h1>대문페이지입니다.</h1>
            <div>
                <h2>=로그인=</h2>
                <label for="userid">아이디</label>
                <input type="text" name="userid" v-model.lazy="id"><br/>
                <label for="userpw">비밀번호</label>
                <input type="password" name="userpw" v-model.lazy="pw"><br/>
                <p v-if="loginFail">아이디 혹은 비밀번호가 틀렸습니다.</p>
                <button @click="signin">로그인</button>
            </div>
            <div>
                <h2>=회원가입=</h2>
                <label for="userid">아이디</label>
                <input type="text" name="userid" v-model="id"><br/>
                <label for="userpw">비밀번호</label>
                <input type="password" name="userpw" v-model="pw"><br/>
                <label for="userpwcheck">비밀번호 확인</label>
                <input type="password" name="userpwcheck" v-model="pwcheck"><br/>
                <div v-if="pwcheck!=null">
                    <p v-if="valid">비밀번호가 일치합니다.</p>
                    <p v-else>비밀번호가 일치하지 않습니다.</p>
                </div>
                <button @click="signup">회원가입</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineComponent } from 'vue';
import axios from "axios";
import { useLoginUserStore } from '../stores/loginUser';

const id = ref();
const pw = ref();
const login = ref(false);
const loginFail = ref(false);
const pwcheck = ref();
const store = useLoginUserStore();

const signout = function(){
    store.userId = undefined;
    store.userKey = undefined;
    login.value = false;
}

const signin = function(){
    axios
        .post('http://localhost:8080/api/login', {
            "id": id.value,
            "password": pw.value,
        })
        .then(function(response) {
            console.log(response);
            // 204 : id 혹은 pw가 틀렸습니다.
            if(response.status === 204){
                loginFail.value = true;
            }
            // 200 : 로그인!
            if(response.status === 200){
                store.userId = id.value;
                store.userKey = response.data;
                login.value = true;
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};

const signup = ref(function(){
    axios
        .post('http://localhost:8080/api/signup', {
            "id": id.value,
            "password": pw.value,
        })
        .then(function(response) {
            console.log(response.status);
            // 204 : 이미 존재하는 아이디 입니다.
            // 200 : 회원가입 성공!
        })
        .catch(function(error) {
            console.log(error);
        });
});


</script>

<style scoped>

</style>
