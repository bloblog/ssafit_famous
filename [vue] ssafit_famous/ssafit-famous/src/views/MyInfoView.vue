<!-- 회원정보 페이지 -->
<template>
    <MenuNav/>
    <div id="myInfoView">
        <router-view/>
    </div>
</template>

<script setup>
import MenuNav from '../components/user/MenuNav.vue';
</script>

<style scoped>

</style>