<!-- 스터디 디테일 들어가면 상단에 보이는 기본 정보들 -->
<template>
    <div>
        <h3>스터디명 : {{ store.studyDetail.studyName }}</h3>
        <p># {{ store.studyDetail.category }}</p>
        <p>
            팀원 : <span>팀원이름</span>
        </p>
        <p>시작일 {{ dayjs(store.studyDetail.studyStart).format("YYYY-MM-DD") }}</p>
        <p>종료일 {{ dayjs(store.studyDetail.studyEnd).format("YYYY-MM-DD") }}</p>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modifyStudyInfoModal">수정하기</button>
        <!-- 스터디 정보 수정 모달 -->
        <div class="modal fade" id="modifyStudyInfoModal" tabindex="-1" aria-labelledby="modifyStudyInfoModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modifyStudyInfoModal">스터디 정보 수정</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ModifyFormItem/>
                    <SearchMemberItem/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="b btn btn-secondary" data-bs-dismiss="modal">취소</button>
                    <button type="button" class="g btn btn-primary" data-bs-dismiss="modal">수정</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SearchMemberItem from '../user/SearchMemberItem.vue';
import ModifyFormItem from './ModifyFormItem.vue';

import { useStudyStore } from '@/components/stores/study';
import { useLoginUserStore } from '@/components/stores/loginUser';
import axios from "axios";
import dayjs from 'dayjs';
import { ref } from 'vue';


const store = useStudyStore();
const uStore = useLoginUserStore();


const clicked = ref(false);
const modifyForm = ref(function(){
    clicked.value = !clicked.value;
})
</script>

<style scoped>

</style>