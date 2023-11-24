<!-- 스터디 디테일 들어가면 상단에 보이는 기본 정보들 -->
<template>
    <div id="basicInfo">
        <div>
            <h3 class="highlight">스터디명 : {{ store.studyDetail.studyName }}</h3>
            
            <div class="member" style="display: flex;">
                <div style="padding: 1rem;">
                    <h5>멤버</h5>
                    <img src="@/assets/imges/user_leader.jpeg">
                    <!-- <span>{{ store.studyDetail.leaderId }}</span> -->
                </div>
                <div>
                    <div v-if="tStore.members">
                        <div v-for="member in tStore.members">
                            <div v-if="member.userKey % 2 == 0">
                                <img src="@/assets/imges/user_0.jpeg">
                            </div>
                            <div v-else>
                                <img src="@/assets/imges/user_1.jpeg">
                            </div>
                            <div>{{ member.id }}</div>
                        </div>
                    </div>
                    <div v-else>
                        <p>아직 팀원이 없어요!</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="tagclass">
            <h5 class="tag"># {{ store.studyDetail.category }}</h5>
        </div>
        <div class="date">
            <p>시작일 {{ dayjs(store.studyDetail.studyStart).format("YYYY-MM-DD") }}</p>
            <p>종료일 {{ dayjs(store.studyDetail.studyEnd).format("YYYY-MM-DD") }}</p>
        </div>

        </div>
        
        <div style="display: flex;" >
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
        
    </div>
</template>

<script setup>
import SearchMemberItem from '../user/SearchMemberItem.vue';
import ModifyFormItem from './ModifyFormItem.vue';

import { useStudyStore } from '@/components/stores/study';
import { useLoginUserStore } from '@/components/stores/loginUser';
import { useUserStore } from '@/components/stores/user';

import axios from "axios";
import dayjs from 'dayjs';
import { ref } from 'vue';


const store = useStudyStore();
const uStore = useLoginUserStore();
const tStore = useUserStore(); // 팀원 관련해서 사용할 거라 tStore 함

const clicked = ref(false);


const modifyForm = ref(function(){
    clicked.value = !clicked.value;
})

console.log(tStore.members);

</script>

<style scoped>
#basicInfo{
    margin: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.date{
    position: relative;
    top: 2rem;
    text-align: end;
}

.tagclass{
    position: relative;
    /* top: 2rem; */
}
.member img{
    width: 5rem;
    height: 5rem;
}
.tag {
    background-image: url("@/assets/imges/welcomeView/welcomePage_nameTag.png");
    background-size: contain;
    background-repeat: no-repeat;
    padding: 1vw;
    margin: 1vw;
}

.highlight{
    text-decoration: none;
    color: #7e725c;
    display: inline;
    box-shadow: inset 0 -10px 0 #ffcc007d;
}

img {
    width: 15vw;
    border-radius: 10vw;
    border: 3px solid #7e725c;
}
</style>