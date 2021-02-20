<template>
  <div id="nav">
    <v-btn style="margin: 10px;" outlined color="#1a5a70" elevation="2">Projects</v-btn>
    <v-btn style="margin: 10px;" outlined color="#1a5a70" elevation="2">My Channel</v-btn>
    <h6>ArcticSoftware</h6>
    <v-btn style="margin: 10px;" outlined color="#1a5a70" elevation="2">Blog</v-btn>
    <v-btn style="margin: 10px;" outlined color="#1a5a70" elevation="2">Contact</v-btn>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
#nav {
  position: sticky;
  top: 0px;
  right: 0px;
  height: 70px;
  background: linear-gradient(#ffffff, #cdf2ff);
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 6px #2c3e50;
  z-index: 10;
}
v-btn {
  padding: 6px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #2c3e50;
  background: linear-gradient(#f0ffff, #ffffff);;
  font-family: "Courier";
}
h6{
  background-image: url("../assets/bear.png");
  padding: 6px 6px 12px 12px;
  margin: 12px;
  background-size: 100%;
  background-position: center;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  color: #f9fcff;
  text-shadow: 2px 2px 4px #2c3e50;
  border-radius: 4px 4px
}

</style>