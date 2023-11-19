<template>
    <div>
        <h3>조회수 순 상위 3개 게시글</h3>
        <div>
            <router-link to="/reviewDetail" @click="select">우리 스터디가 짱</router-link><br/>
            <router-link to="/reviewDetail" @click="select">즐거운 스터디~</router-link><br/>
            <router-link to="/reviewDetail" @click="select">다들 멋져</router-link><br/>
        </div>
        <br/>
        <div>
            <router-link to="/reviewDetailView">더보기</router-link>
        </div>


    </div>
</template>

<script setup>
import {ref} from 'vue'

const reviewKey = ref(0);

</script>

<style scoped>

</style>