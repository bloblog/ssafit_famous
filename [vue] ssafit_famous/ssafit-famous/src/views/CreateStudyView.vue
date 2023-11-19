<template>
    <div>
        <h2>스터디 생성 폼</h2>
        <div class="create-form">
            <CreateFormItem/>
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
import CreateFormItem from '../components/study/CreateFormItem.vue';


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