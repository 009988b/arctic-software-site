<template>
  <div id="app">
    <Navbar/>
    <Sidebar/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: 'Home',
  data() {
    return {msg: window.location.pathname}
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: "Tahoma", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0px;
  position: absolute;
  width: 100%;
}

</style>
