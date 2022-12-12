<template>
  <div class="home">
    <FixedNavbar/>
    <FormInfo/>
    <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import FixedNavbar from '@/components/FixedNavbar.vue'
import FormInfo from '@/components/FormInfo.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ContaCt',
  components: {
    FixedNavbar,
    FormInfo,
    Footer,
  }
}
</script>

<style scoped>
  .home{
    overflow-x: hidden;
  }
</style>