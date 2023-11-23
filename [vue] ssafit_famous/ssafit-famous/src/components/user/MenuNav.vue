
<template>
    <div class="text-center" id="menuNav">
        <router-link to="myinfo">회원정보</router-link> | 
        <router-link to="ongoing">진행중인 스터디</router-link> | 
        <router-link to="done">지난 스터디</router-link> | 
        <router-link to="myreview">작성한 회고</router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
#menuNav{
    padding: 5vh;
}

a{
    text-decoration: none;
    color: #54200c;
    padding-top: 2%;
}

a:hover{
    box-shadow: inset 0 -10px 0 #ffcc007d;
}
</style>