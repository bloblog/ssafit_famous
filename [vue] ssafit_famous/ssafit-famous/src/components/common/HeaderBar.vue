<template>
    <div>
        <header>
            <router-link to="/createStudy">스터디 만들기</router-link> <br/>
            <a href="/nested/index.html">홈로고</a> <br/>
            <span class="MyPageDropdown">마이페이지 </span>
            <router-link to="/dashboard">대시보드 </router-link>
            <router-link to="/infoView">정보수정</router-link> <br/>
            <span>로그아웃 (alert)</span>
            <span>로그인 (modal)</span>
            <span>회원가입 (modal) </span>
        </header>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
