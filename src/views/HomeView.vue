<template>
  <div class="home">
    <Header/>
    <Biography/>
    <slider/>
    <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Biography from '@/components/Biography.vue'
import Footer from '@/components/Footer.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Biography,
    Footer,
    Slider
  }
}
</script>

<style scoped>
  .home{
    overflow-x: hidden;
  }
</style>
