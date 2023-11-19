<template>
    <div>
        <h2>회고 검색 + 카테고리 + 상위 게시글</h2>
        <SearchBar/>
        <span>눌렀을 때 해당 카테고리로 검색한 회고게시글 결과 리스트로 가야 함</span>
        <a href="#">#코딩 </a>
        <a href="#">#운동 </a>
        <a href="#">#취미 </a>
        <a href="#">#독서 </a>
        <TopReview/>
        
    </div>
</template>

<script setup>
import SearchBar from './SearchBar.vue';
import TopReview from './TopReview.vue';

</script>

<style scoped>

</style>