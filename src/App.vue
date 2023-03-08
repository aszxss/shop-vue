<template>
  <div id="app">
   <Header></Header>
   <router-view></router-view>
   <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
