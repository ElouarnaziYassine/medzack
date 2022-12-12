<template>
  <div class="home">
    <FixedNavbar/>
    <Pricetables/>
    <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import FixedNavbar from '@/components/FixedNavbar.vue'
import Footer from '@/components/Footer.vue'
import Pricetables from '@/components/Pricetables.vue'

export default {
  name: 'HomeView',
  components: {
    FixedNavbar,
    Pricetables,
    Footer
}
}
</script>

,
    Pricetables<style scoped>
  .home{
    overflow-x: hidden;
  }
</style>
