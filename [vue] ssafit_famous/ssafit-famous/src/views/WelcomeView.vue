<template>
    <div id="welcome">
        <div id="top"></div>
        <div id="bottom">
            <div id="ask">
                <div v-if="store.status">
                    <p>{{ store.userId }}님 환영합니다!</p>
                    <p>"스터디 관리 패키지"를 둘러보시겠어요?</p>
                </div>
                <div v-else>
                    <p>전에 방문하신 적이 있나요?</p>
                    <p>원하시는 서비스를 선택해주세요!</p>
                </div>
            </div>
            <div id = "logIn">
                <div class="c" v-if="store.status">
                    <button type="button" class="btn" @click="store.signout">이제 나갈래</button>
                    <a href="/nested/index.html">좋아 둘러볼래~</a>
                </div>
                <div class="c" v-else>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginModal">로그인할래</button>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#signupModal">회원가입하려고~</button>
                    <a href="/nested/index.html">그냥 구경할게!</a>
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

#top{
    width: 100vw;
    height: 20vh;
    background: url("../assets/imges/welcomeView/welcomePage_top.png") no-repeat center;
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
    background: url("../assets/imges/welcomeView/welcomePage_choose.png") no-repeat center;
    background-size: contain;
}

@media (max-width: 630px){
    #top{
        background-size: cover;
    }
}

@media (min-width: 631px){
    #top {
        background-size: contain;
    }
}

@media (max-width: 480px) {
    #welcome{
        font-size: 100%;
        widows: 100vw;
        height: 100vh;
        background: url("../assets/imges/welcomeView/welcomePage_background_s.png") no-repeat center;
        background-size: cover;
    }
    
    #ask::before{
        display: none;
    }

    #logIn .c{
        width: 80%;
        position: absolute;
        top : -5rem;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    #welcome{
        font-size: 100%;
        widows: 100vw;
        height: 100vh;
        background: url("../assets/imges/welcomeView/welcomePage_background_s.png") no-repeat center;
        background-size: cover;
    }

    #ask::before{
        display: none;
    }

    #logIn .c{
        width: 60%;
        position: absolute;
        top : -5rem;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

@media (min-width: 769px) and (max-width: 1280px) {
    #welcome{
        font-size: 100%;
        widows: 100vw;
        height: 100vh;
        background: url("../assets/imges/welcomeView/welcomePage_og.png") no-repeat center;
        background-size: cover;
    }

    #ask::before{
        position:absolute;
        top: 10%;
        left: 35%;
        transform: translate(-50%, -50%);
    }

    #logIn .c{
        position: absolute;
        top : -2rem;
        right: 8%;
        transform: translate(-50%, -50%);
    }
}

@media (min-width: 1281px) {
    #welcome{
        font-size: 100%;
        widows: 100vw;
        height: 100vh;
        background: url("../assets/imges/welcomeView/welcomePage_og.png") no-repeat center;
        background-size: cover;
    }

    #ask::before{
        position:absolute;
        top: 10%;
        left: 38%;
        transform: translate(-50%, -50%);
    }

    #logIn .c{
        position: absolute;
        top : -2rem;
        right: 20%;
        transform: translate(-50%, -50%);
    }
}

button:hover{
    border-radius: 0;
    box-shadow: inset 0 -10px 0 #ffcc007d;
    animation: wiggle 2000ms infinite;
}

a:hover {
    animation: wiggle 2000ms infinite;
    box-shadow: inset 0 -10px 0 #ffcc007d;
}

@keyframes wiggle{
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(5deg);
    }
    50%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
</style>
