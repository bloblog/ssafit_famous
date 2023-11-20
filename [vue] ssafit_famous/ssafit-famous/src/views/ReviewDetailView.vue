<template>
    <div>
        <h2>회고 게시판 페이지</h2>
        <div class="board-area">
            <div class="category-nav">
                <h4>navBar</h4>
                <ReviewNav/>

            </div>
            <div class="v-line"></div>
            <div class="review-search-content">
                <div>
                    <SearchBar/>
                </div>
                <div>
                    <SearchResult/>
                </div>
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
.v-line {
    border-left : solid #111111;
    height : 200px;
    margin: 10px;
}

</style>