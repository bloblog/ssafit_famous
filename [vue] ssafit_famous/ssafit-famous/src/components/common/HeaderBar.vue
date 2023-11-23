<template>
    <div>
        <header>
            <router-link to="/mainHome"><img src="../../../public/mainLogo.png"></router-link> <br/>
            <div>
                <div class="c" v-if="store.status">
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">마이페이지</button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><router-link to="/dashboard" class="dropdown-item">대시보드 </router-link></li>
                            <li><router-link to="/infoView" class="dropdown-item">정보수정</router-link></li>
                        </ul>
                    </div>
                    <router-link to="/createStudy">스터디 만들기</router-link> <br/>
                    <button type="button" class="btn" @click="store.signout">로그아웃</button>
                </div>
                <div class="c" v-else>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginModal">로그인</button>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#signupModal">회원가입</button>
                </div>
            </div>
        </header>
        <signInUp/>
    </div>
</template>

<script setup>
import { useLoginUserStore } from '../stores/loginUser';
import signInUp from './SignInUP.vue';
const store = useLoginUserStore();
</script>

<style scoped>

a{
    text-decoration: none;
    color: #54200c;
    padding-top: 2%;
}

header {
    margin: 0;
    background: url('../../assets/imges/header/header_background.png') no-repeat center;
    background-size: 100% 20vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

img{
    height: 20vh;
    object-fit: contain;
}

.c {
    display: flex;
}

button:hover{
    border-radius: 0;
    /* box-shadow: inset 0 -10px 0 #ffcc007d; */
    animation: wiggle 2000ms infinite;
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
