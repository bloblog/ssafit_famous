<template>
    <div>
        <div>
            <input v-model="searchId" placeholder="아이디를 입력하세요">
            <button>검색</button>
        </div>
        <div>
            <h4>결과 리스트</h4>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const searchId = ref(null);

</script>

<style scoped>

</style>