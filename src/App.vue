<template>
  <div>
    <b-container>
      <div class="pt-3"></div>
      <NavBar />
      <div class="pt-3"></div>
      <Header />
    </b-container>
      <div class="pt-5"></div>
      <HelloSection />
    <div class="bg-white">
      <div class="pt-5"></div>
      <Footer />
    </div>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Header from './components/Header.vue'
  import HelloSection from './components/HelloSection.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      Header,
      HelloSection,
      Footer,
    }
  }
</script>

<style>
body {
  font-family: 'Gilroy' !important;
  /* background-color: #fff !important; */
  /* background-color: rgba(249,249,249,1) !important; */
  background-color: #000 !important;
  /* background-color: #F8D247 !important; */
  overflow-x: hidden;
}

</style>