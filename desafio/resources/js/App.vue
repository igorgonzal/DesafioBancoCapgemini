
<template>
  <div>
    <Header />
    <div id="wrapper">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  created(){
      document.querySelector("body").style.background = '#fff';
  }
};
</script>