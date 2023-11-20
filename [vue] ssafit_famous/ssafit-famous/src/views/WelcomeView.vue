<template>
    <div id="welcome">
        <div id="top"></div>
        <div id="bottom">
            <div id="ask">
                <p>전에 방문하신 적이 있나요?</p>
                <p>원하시는 서비스를 선택해주세요!</p>
            </div>
            <div id = "logIn">
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginModal">로그인</button>
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#signupModal">회원가입</button>
                <a href="/nested/index.html">그냥 둘러볼래</a>
            </div>
        </div>
        
        
        
        <div>
            <!-- 로그인 모달 -->
            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="loginModalLabel">로그인</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="userid" class="form-label">아이디</label>
                                <input type="text" class="form-control" id="userid" v-model.lazy="id">
                            </div>
                            <div class="mb-3">
                                <label for="userpw" class="form-label">비밀번호</label>
                                <input type="password" class="form-control" id="userpw" v-model.lazy="pw">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="signout">취소</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="signin">로그인</button>
                    </div>
                    </div>
                </div>
            </div>

            <!-- 회원가입 모달 -->
            <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="signupModalLabel">회원가입</h1>
                        
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="userid" class="form-label">아이디</label>
                                <input type="text" class="form-control" id="userid" v-model.lazy="id">
                                <button type="button" @click="idCheck">중복확인</button>
                                <div v-if="validIdCheck">
                                    <p v-if="!validId">이미 존재하는 아이디입니다.</p>
                                    <p v-else>사용할 수 있는 아이디입니다.</p>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="userpw" class="form-label">비밀번호</label>
                                <input type="password" class="form-control" id="userpw" v-model="pw" v-bind:disabled="!validId">
                            </div>
                            <div class="mb-3">
                                <label for="userpwcheck" class="form-label">비밀번호 확인</label>
                                <input type="password" class="form-control" id="userpwcheck" v-model="pwcheck" v-bind:disabled="!validId">
                            </div>
                            <div v-if="pwcheck!=null">
                                <p v-if="signinConfirm">비밀번호가 일치합니다.</p>
                                <p v-else>비밀번호가 일치하지 않습니다.</p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="signout">취소</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="signup" v-bind:disabled="!validId || !signinConfirm">회원가입</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineComponent, watch } from 'vue';
import axios from "axios";
import { useLoginUserStore } from '../stores/loginUser';

const id = ref();
const pw = ref();
const pwcheck = ref();
const login = ref(false);
const validId = ref(false);
const validIdCheck = ref(false);
const signinConfirm = ref(false);
const store = useLoginUserStore();

watch(pwcheck, ()=>{
    if(pw.value === pwcheck.value){
        signinConfirm.value = true;
    }else{
        signinConfirm.value = false;
    }
});

const signout = function(){
    id.value = null;
    pw.value = null;
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
                alert("아이디 혹은 비밀번호가 틀렸습니다.");
                id.value = null;
                pw.value = null;
            }
            // 200 : 로그인!
            if(response.status === 200){
                store.userId = id.value;
                store.userKey = response.data;
                login.value = true;
                alert("로그인이 성공했습니다.");
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
            // 200 : 회원가입 성공!
        })
        .catch(function(error) {
            console.log(error);
        });
    id.value = null;
    pw.value = null;
    pwcheck.value = null;
});

const idCheck = ref(function(){
    axios
        .get('http://localhost:8080/api/search/'+id.value)
        .then(function(response) {
            validIdCheck.value = true;
            console.log(response.status);
            // 200 : 이미 존재하는 아이디 입니다.
            if(response.status === 200){
                validId.value = false;
            }
            // 204 : 사용할 수 있는 아이디 입니다.
            if(response.status === 204){
                validId.value = true;
            }
        })
        .catch(function(error) {
            console.log(error);
        });
})

</script>

<style scoped>
*{
    border: 0;
    margin: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
    padding-top: 10px;
}

#welcome{
    font-size: 100%;
    widows: 100vw;
    height: 100vh;
    background: url("../assets/imges/welcomeView/welcomePage_og.png") no-repeat center;
    background-size: cover;
}

#top{
    width: 100vw;
    height: 20vh;
    background: url("../assets/imges/welcomeView/welcomePage_top.png") no-repeat center;
    background-size: contain;
}

#bottom{
    position: absolute;
    bottom: 25%;
    width: 100vw;
    text-align: center;
}

#ask::before{
    content: "콩돌";
    width: fit-content;
    padding: 60px;
    background: url("../assets/imges/welcomeView/welcomePage_nameTag.png") no-repeat center;
    background-size: contain;
    position: absolute;
    top: -15%;
}

#ask{
    margin: auto;
    padding: 100px;
    display: flex;
    flex-direction: column;
    position: relative;
    background: url("../assets/imges/welcomeView/welcomePage_bubble.png") no-repeat center;
    background-size: contain;
}

#logIn{
    padding: 80px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -40%;
    right: 3%;
    background: url("../assets/imges/welcomeView/welcomePage_choose.png") no-repeat center;
    background-size: contain;
}

</style>
