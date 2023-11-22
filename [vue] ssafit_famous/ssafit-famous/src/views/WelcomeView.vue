<template>
    <div id="welcome">
        <div id="top"></div>
        <div id="bottom">
            <div id="ask">
                <div v-if="store.status">
                    <p>{{ store.userId }}님 안녕하세요!</p>
                    <p>로그아웃하시겠어요?</p>
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
       <SignInUp/>
    </div>
</template>

<script setup>
import SignInUp from '../components/common/SignInUP.vue';
import { useLoginUserStore } from '../components/stores/loginUser';
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
