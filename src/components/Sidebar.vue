<template>
  <div id="sidebar">
    <div id="welcome-img">
      <div id="welcome-text">
        <h3>👋 Welcome</h3>
        <p>My name is Sean O'Brien, and I'm a web developer from Northern California. The purpose of this website is to share useful knowledge with others. Feel free to contact me with any specific questions that you have!</p>
      </div>
    </div>
    <div id="grad1"/>
    <div id="grad2"/>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

img {
  width: 100%;
  height: 400px;
  object-fit: contain;
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
  background-color: aquamarine;
  padding: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  border-radius: 12px;
  box-shadow: 1px 1px 3px #2c3e50;
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
</style>