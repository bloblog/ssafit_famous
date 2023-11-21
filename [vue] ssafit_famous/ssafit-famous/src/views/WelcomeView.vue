<template>
    <div id="welcome">
        <div id="top"></div>
        <div id="bottom">
            <div id="ask">
                <div v-if="store.status">
                    <P>{{ store.userId }}님 안녕하세요!</P>
                    <P>로그아웃하시겠어요?</P>
                </div>
                <div v-else>
                    <p>전에 방문하신 적이 있나요?</p>
                    <p>원하시는 서비스를 선택해주세요!</p>
                </div>
            </div>
            <div id = "logIn">
                <div class="c" v-if="store.status">
                    <button type="button" class="btn" @click="store.signout">로그아웃할래</button>
                    <a href="/nested/index.html">그냥 둘러볼래~</a>
                </div>
                <div class="c" v-else>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginModal">로그인할래</button>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#signupModal">회원가입하려고~</button>
                    <a href="/nested/index.html">그냥 둘러볼게!</a>
                </div>
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
                                <input type="text" class="form-control" id="userid" v-model.lazy="store.id">
                            </div>
                            <div class="mb-3">
                                <label for="userpw" class="form-label">비밀번호</label>
                                <input type="password" class="form-control" id="userpw" v-model.lazy="store.pw">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="store.signout">취소</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="store.signin">로그인</button>
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
                                <input type="text" class="form-control" id="userid" v-model.lazy="store.id">
                                <button type="button" @click="store.idCheck">중복확인</button>
                                <div v-if="store.validIdCheck">
                                    <p v-if="!store.validId">이미 존재하는 아이디입니다.</p>
                                    <p v-else>사용할 수 있는 아이디입니다.</p>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="userpw" class="form-label">비밀번호</label>
                                <input type="password" class="form-control" id="userpw" v-model="store.pw" v-bind:disabled="!store.validId">
                            </div>
                            <div class="mb-3">
                                <label for="userpwcheck" class="form-label">비밀번호 확인</label>
                                <input type="password" class="form-control" id="userpwcheck" v-model="store.pwcheck" v-bind:disabled="!store.validId">
                            </div>
                            <div v-if="store.pwcheck!=null">
                                <p v-if="store.signinConfirm">비밀번호가 일치합니다.</p>
                                <p v-else>비밀번호가 일치하지 않습니다.</p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="store.signout">취소</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="store.signup" v-bind:disabled="!store.validId || !store.signinConfirm">회원가입</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLoginUserStore } from '../stores/loginUser';
const store = useLoginUserStore();

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
    padding: 3rem;
    background: url("../assets/imges/welcomeView/welcomePage_nameTag.png") no-repeat center;
    background-size: contain;
    position: absolute;
    top: 1rem;
    left: 40%;
    transform: translate(-50%, -50%);
}

#ask{
    margin: auto;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    position: relative;
    background: url("../assets/imges/welcomeView/welcomePage_bubble.png") no-repeat center;
    background-size: contain;
}

#logIn .c{
    padding: 4rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -1.5rem;
    left: 60%;
    transform: translate(-50%, -50%);
    background: url("../assets/imges/welcomeView/welcomePage_choose.png") no-repeat center;
    background-size: contain;
}

</style>
