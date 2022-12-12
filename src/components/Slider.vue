<template>
    <div class="wrapper">
        <h1>TRANSFORMATIONS</h1>
        <vueper-slides autoplay
            class="no-shadow"
            :visible-slides="3"
            :slide-ratio="1 / 4"
            :dragging-distance="70">
        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
            :title="slide.title"
            :content="slide.content" />
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'SliDer',
    components: { VueperSlides, VueperSlide },
    data: () => ({
    slides: [
        {
        image: 'https://i.ibb.co/8xW0zJ8/1.jpg'
        },
        {
        image: 'https://i.ibb.co/nfPtnDv/2.jpg'
        },
        {
        image: 'https://i.ibb.co/xGfnTMN/3.png'
        },
        {
        image: 'https://i.ibb.co/2nn5rvk/4.jpg'
        },
        {
        image: 'https://i.ibb.co/4fcqhJX/5.jpg'
        }
        
    ]
    })
}
</script>

<style scoped>
.wrapper{
    width: 80%;
    margin: auto;
}
h1{
    font-size: 45px;
    margin-top: 50px;
    text-align: center;
}
h1::after{
    content: "";
    height: 4px;
    width: 18%;
    background-color: rgb(0, 89, 255);
    display: block;
    margin: auto;
    border-radius: 5px;
    margin-bottom: 40px;
}
</style>