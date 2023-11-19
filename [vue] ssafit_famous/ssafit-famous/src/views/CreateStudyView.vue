<template>
    <div>
        <h2>스터디 생성 폼</h2>
        <div class="create-form">
            <div>
                <label>스터디명 </label>
                <input v-model="studyName" placeholder="스터디 이름을 입력하세요"><br/>
                <label>카테고리</label>
                <div class="category">
                    <input type="radio" v-model="category" id="coding" name="category" value="coding">코딩
                    <input type="radio" v-model="category" id="fitness" name="category" value="fitness">운동
                    <input type="radio" v-model="category" id="hobby" name="category" value="hobby">취미
                    <input type="radio" v-model="category" id="reading" name="category" value="reading">독서
                </div>
                <label>시작일 </label>
                <input v-model="startDate" placeholder="캘린더 띄우기"><br/>
                <label>종료일 </label>
                <input v-model="endDate" placeholder="캘린더 띄우기"><br/>
                <label>알림주기 </label>
                <input v-model="alarm" type="number" placeholder="몇 일 전에 알림을 드릴까요?"><br/>
            
            </div>
            <div class="v-line"></div>
            <div class="form-member">
                <label>팀원 목록</label>
                <SearchMemberItem/>
            </div>
        </div>
        <button type="reset">취소</button>
        <button type="submit">생성</button>
    </div>
</template>

<script setup>
import SearchMemberItem from '@/components/user/SearchMemberItem.vue'
import {ref} from 'vue'

const studyName = ref(null);
const category = ref(null);
const startDate = ref(null);
const endDate = ref(null);
const alarm = ref(0);


</script>

<style scoped>

.create-form {
    display: flex;
}

.v-line {
    border-left : solid #111111;
    height : 150px;
    margin: 10px;
}


</style>