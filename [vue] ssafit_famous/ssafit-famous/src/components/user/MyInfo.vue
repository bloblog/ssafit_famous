<!-- 사용자 정보 수정 -->
<template>
    <div>
        <h3>사용자정보수정</h3>
        <form>
            <!-- 아이디(변경 불가), 현재 비밀번호, 새 비밀번호, 새 비밀번호 확인 -->
            <div class="mb-3 row">
                <label for="id" class="col-sm-2 col-form-label">아이디</label>
                <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="id" :value="`${store.userId}`">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="oldPw" class="col-sm-2 col-form-label">현재 비밀번호</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="oldPw" v-model.lazy="oldPw">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="newPw" class="col-sm-2 col-form-label">새 비밀번호</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="newPw" v-model="newPw" v-bind:disabled="!approved">
                <p v-if="same">현재 비밀번호와 같은 비밀번호로는 변경할 수 없어요!</p>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="newPwConfirm" class="col-sm-2 col-form-label">새 비밀번호 확인</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="newPwConfirm" v-model="newPwConfirm" v-bind:disabled="!approved || same">
                <div>
                    <p v-if="success">비밀번호가 일치합니다.</p>
                    <p v-else>비밀번호가 일치하지 않습니다.</p>
                </div>
                </div>
            </div>
            <button type="button" class="btn" v-bind:disabled="!approved || same || !success" @click="modify">회원정보 수정</button>
            <button type="button" class="btn" @click="deleteUser">회원 탈퇴</button>
        </form>
    </div>
</template>

<script setup>

import { ref, watch } from 'vue';
import { useLoginUserStore } from '@/components/stores/loginUser';
import axios from 'axios';
import { useReviewStore } from '../stores/review';
const store = useLoginUserStore();

const oldPw = ref();
const approved = ref(false);
const newPw = ref();
const same = ref(false);
const newPwConfirm = ref();
const success = ref(false);

const user = ref();

watch(oldPw, ()=>{
    // 현재 비밀번호 가져오기
    axios
        .get('http://localhost:8080/api/user/'+ store.userKey)
        .then(function(response){
            user.value = response.data;
            console.log(user);
            if(response.data.password === oldPw.value){
                // 입력값과 같으면 새 비밀번호 입력 창 활성화
                approved.value = true;
            }else{
                approved.value = false;
            }
        })
        .catch(function(error) {
            console.log(error);
        })
})

watch(newPw, ()=>{
    // 현재 비밀번호와 입력값이 같으면 알려주기
    if(oldPw.value === newPw.value){
        same.value = true;
    }else{
        same.value = false;
    }
})

watch(newPwConfirm, ()=>{
    // 새 비밀번호와 기존 비밀번호가 같으면 수정 버튼 활성화
    if(newPw.value === newPwConfirm.value){
        success.value = true;
    }else{
        success.value = false;
    }
})

const modify = function(){
    user._value.password = newPw.value;
    console.log(user._value.password);
    axios
        .put('http://localhost:8080/api/user/'+ store.userKey, {
            "userKey" : user._value.userKey,
            "id" : user._value.id,
            "password" : user._value.password,
            "exp": user._value.exp,
            "uerImgPath": user._value.uerImgPath,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
};

const deleteUser = function(){
    console.log("탈퇴");
}
</script>

<style scoped>
    
</style>