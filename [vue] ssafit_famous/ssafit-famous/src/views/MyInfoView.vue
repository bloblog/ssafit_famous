<!-- 회원정보 페이지 -->
<template>
    <div>
        <h2>회원정보 페이지 입니다.</h2>
        <router-link to="info">회원정보</router-link> | 
        <router-link to="ongoing">진행중인 스터디</router-link> | 
        <router-link to="done">지난 스터디</router-link> | 
        <router-link to="review">작성한 회고</router-link>
        <router-view/>
    </div>
</template>

<script setup>
</script>

<style scoped>

</style>