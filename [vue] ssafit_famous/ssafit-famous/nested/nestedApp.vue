<template>
    <div id="background">
        <header>
            <HeaderBar/>
        </header>
        <RouterView></RouterView>
        
    </div>
</template>

<script setup>
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

#background{
    max-width: 1000px;
    margin: auto;
    height: 100vh;
}

@media (max-width: 480px) {
    
}

@media (min-width: 481px) and (max-width: 768px) {
    
}

@media (min-width: 481px) and (max-width: 768px) {
    
}
</style>