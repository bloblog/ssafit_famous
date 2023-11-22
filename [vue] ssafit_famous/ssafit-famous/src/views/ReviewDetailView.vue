<template>
    <div class="container"> 
        <h2 class="highlight">회고 게시판</h2>
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

/* .highlight{
    text-decoration: none;
    color: #7e725c;
    display: inline;
    box-shadow: inset 0 -10px 0 #ffcc007d;
} */

</style>