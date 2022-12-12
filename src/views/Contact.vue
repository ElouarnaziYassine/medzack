<template>
  <div class="home">
    <FixedNavbar/>
    <ContactUs/>
    <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import FixedNavbar from '@/components/FixedNavbar.vue'
import ContactUs from '@/components/ContactUs.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ContaCt',
  components: {
    FixedNavbar,
    ContactUs,
    Footer,
  }
}
</script>

<style scoped>
  .home{
    overflow-x: hidden;
  }
</style>
