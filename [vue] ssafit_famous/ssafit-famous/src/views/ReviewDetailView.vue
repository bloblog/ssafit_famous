<template>
    <div class="container"> 
        <h2>회고 게시판</h2>
        <hr/>
        <div>
            <div>
                <SearchBar/>
            </div>
            <hr/>
            <div class="board-area">
                <ReviewNav/>
                <SearchResult/>

            </div>
            
        </div>
        

    </div>
</template>

<script setup>

import SearchResult from '../components/review/SearchResult.vue';
import SearchBar from '../components/review/SearchBar.vue';
import ReviewNav from '../components/review/ReviewNav.vue';



</script>

<style scoped>
.board-area {
    display: flex;
}

</style>