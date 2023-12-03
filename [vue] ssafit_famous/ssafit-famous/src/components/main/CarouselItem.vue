<template>
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                <img src="@/assets/imges/carousel/image1.jpeg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="@/assets/imges/carousel/image2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="@/assets/imges/carousel/image3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#carouselExampleCaptions {
    text-align: center;
    margin: 3vw;

    
}

.carousel {
    height: 40vh;
    overflow: hidden;
    box-shadow: 5px 5px 5px rgb(91, 88, 88);
    border-radius: 5vw;
}

img{
    width: 100vw;
    height: 40vh;
    object-fit: cover;
    object-position: center;
}
</style>