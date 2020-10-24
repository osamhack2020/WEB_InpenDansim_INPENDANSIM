<template>
  <div id="app">
    <router-view tag = 'div'/>
  </div>
</template>

<script>

export default {
  computed: {
    showNav() {
      return this.$route.path == '/';
    }
  }
};
</script>

<style>
@import "assets/style/reset.css";
/* components */

/* page */

@font-face {
  font-family: "maruburi";
  src: local("maruburi"),
    url(./assets/fonts/MARUBuriBetaR.ttf) format("truetype");
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
