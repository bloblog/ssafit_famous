<template>
    <div>
        <h2>회고 검색 + 카테고리 + 상위 게시글</h2>
        <SearchBar/>
        <router-link to="/reviewDetailView" @click="select">#코딩 </router-link>
        <router-link to="/reviewDetailView" @click="select">#운동 </router-link>
        <router-link to="/reviewDetailView" @click="select">#취미 </router-link>
        <router-link to="/reviewDetailView" @click="select">#독서 </router-link>
        <TopReview/>
        
    </div>
</template>

<script setup>
import {ref} from 'vue';
import SearchBar from './SearchBar.vue';
import TopReview from './TopReview.vue';

const selectedCat = ref(null);

const select = function(event) {
    selectedCat.value = event.target.innerText.split("#")[1].trim();
}

</script>

<style scoped>

</style>