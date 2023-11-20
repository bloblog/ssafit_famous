<template>
    <div>
        <div v-if="login">
            <p>{{ store.userId }}님 안녕하세요! </p>
            <button type="button" class="btn btn-primary" @click="signout" v-if="login">로그아웃</button>
        </div>
        <div v-else>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">로그인</button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal">회원가입</button>
            <a href="/nested/index.html">그냥 둘러볼래</a>
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
                                <p v-if="loginFail">아이디 혹은 비밀번호가 틀렸습니다.</p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
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
                                <div v-if="validCheck">
                                    <p v-if="validId">이미 존재하는 아이디입니다.</p>
                                    <p v-else>사용할 수 있는 아이디입니다.</p>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="userpw" class="form-label">비밀번호</label>
                                <input type="password" class="form-control" id="userpw" v-model.lazy="pw">
                            </div>
                            <div class="mb-3">
                                <label for="userpwcheck" class="form-label">비밀번호 확인</label>
                                <input type="password" class="form-control" id="userpwcheck" v-model.lazy="pwcheck">
                            </div>
                            <div v-if="pwcheck!=null">
                                <p v-if="valid">비밀번호가 일치합니다.</p>
                                <p v-else>비밀번호가 일치하지 않습니다.</p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="signup">회원가입</button>
                    </div>
                    </div>
                </div>
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
const validId = ref(false);
const validCheck = ref(false);
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
            if(response.status === 204){
                signupFail.value = true;
            }
            // 200 : 회원가입 성공!
        })
        .catch(function(error) {
            console.log(error);
        });
});

const idCheck = ref(function(){
    axios
        .get('http://localhost:8080/api/search/'+id.value)
        .then(function(response) {
            validCheck.value = true;
            console.log(response.status);
            // 200 : 이미 존재하는 아이디 입니다.
            if(response.status === 200){
                validId.value = true;
            }
            // 204 : 사용할 수 있는 아이디 입니다.
            if(response.status === 204){
                validId.value = false;
            }
        })
        .catch(function(error) {
            console.log(error);
        });
})

</script>

<style scoped>

</style>
