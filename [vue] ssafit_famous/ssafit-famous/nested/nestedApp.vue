<template>
    <div id="background">
        <div class="main">
            <header>
                <HeaderBar/>
            </header>
            <RouterView></RouterView>
        </div>
        <footer>
            <FooterBar/>
        </footer>
    </div>
</template>

<script setup>
import FooterBar from '../src/components/common/FooterBar.vue';
import HeaderBar from '../src/components/common/HeaderBar.vue';

</script>

<style scoped>
@font-face {
    font-family: 'intelone-mono-font-family-regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/intelone-mono-font-family-regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

* {
  font-family: 'NanumSquareNeo-Variable';
}

.main{
    max-width: 1000px;
    margin: auto;
    height: 100vh;
}

#background{
    background-color: #6996f8;
}
</style>