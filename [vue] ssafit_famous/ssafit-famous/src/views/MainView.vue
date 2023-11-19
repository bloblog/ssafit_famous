<template>
    <div>
        <h1>메인 첫 화면</h1>
        <div>
            <CarouselItem/>
        </div>
        <div>
            <MainReview/>
            

        </div>
    </div>
</template>

<script setup>
import CarouselItem from '@/components/main/CarouselItem.vue';
import MainReview from '../components/review/MainReview.vue';
</script>

<style scoped>

</style>