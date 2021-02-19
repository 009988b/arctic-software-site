<template>
  <div id="nav">
    <button class="btn" v-on:click="$href='projects'">Projects</button>
    <button class="btn" v-on:click="$href='https://www.youtube.com/channel/UC60TE9xF4ooE9sBxxNTXcFQ'">My Channel</button>
    <h2 id="name">ArcticSoftware</h2>
    <button class="btn" v-on:click="$href='/'">Blog</button>
    <button class="btn" v-on:click="$href='contact'">Contact</button>
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
  height: 60px;
  background: linear-gradient(#ffffff, #cdf2ff);
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 6px #2c3e50;
}
.btn {
  padding: 6px;
  margin-left: 8px;
  margin-right: 8px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #2c3e50;
  background: linear-gradient(#f0ffff, #ffffff);;
  font-family: "Courier";
}
#name {
  font-family: Courier;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>