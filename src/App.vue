<template>
  <v-app style="background: rgba(0,0,0,0);">
    <Home/>
  </v-app>
</template>

<script>
import Home from "@/components/Home.vue";
export default {
  name: 'App',
  data() {
    return {msg: window.location.pathname}
  },
  components: {
    Home
  }
}
</script>

<style>
v-app {
  font-family: "Tahoma", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
* {
  margin: 0;
}
</style>