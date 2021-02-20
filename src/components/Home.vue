<template>
  <div id="homepage">
    <Navbar/>
    <div id="welcome-img">
      <div id="welcome-text">
        <h3>👋 Welcome</h3>
        <p>My name is Sean O'Brien, and I'm a web developer from Northern California. Thank you for visiting my site!</p>
      </div>
    </div>
    <div id="grad1"/>
    <div id="grad2"/>
    <div id="featured-post">
      <h2>Using Reanimated V1 With React Navigation</h2>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "Home",
  components: {
    Navbar
  }
}
</script>

<style scoped>

#homepage {
  align-items: center;
}

img {
  width: 100%;
  height: 400px;
  object-fit: contain;
}
h3 {
  margin-bottom: 2px;
}

#welcome-img {
  height: 340px;
  width: 100%;
  background-image: url("../assets/snow.jpg");
  background-position: bottom;
  background-size: cover;
  position: absolute;
  top: 50px;
  z-index: -1;
}

#welcome-text {
  width: 45%;
  align-items: center;
  background-color: #1a5a70;
  text-align: center;
  padding: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  border-radius: 12px;
  box-shadow: 1px 1px 3px #2c3e50;
  color: #cdf1ff;
  font-size: 17px;
}

#grad1 {
  height: 100px;
  background: linear-gradient(rgba(0,0,0,0),#d8e1ee);
  top: 290px;
  position: absolute;
  width: 100%;
}

#grad2 {
  height: 100px;
  background: linear-gradient(#d8e1ee,rgba(255,255,255,1));
  top: 390px;
  position: absolute;
  width: 100%;
}

#featured-post {
  height: 2000px;
  width: 55%;
  margin: auto;
  background: linear-gradient(rgba(0,0,0,0),#d8e1ee);
  border-radius: 24px;
}
#featured-post h2 {
  margin-top: 500px;
}
</style>