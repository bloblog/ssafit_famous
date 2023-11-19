<template>
    <div>
        <h2>회고 게시판 페이지</h2>
        <div class="board-area">
            <div class="category-nav">
                <h4>navBar</h4>
                <span>클릭시 검색 이벤트 수행</span><br/>
                <a href="#" @click="">#코딩</a><br/>
                <a href="#" @click="">#운동</a><br/>
                <a href="#" @click="">#취미</a><br/>
                <a href="#" @click="">#독서</a><br/>

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