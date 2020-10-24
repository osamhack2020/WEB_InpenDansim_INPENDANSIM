<template>
  <div id="app">
    <router-view tag="div" />
  </div>
</template>

<script>
export default {
  computed: {
    showNav() {
      return this.$route.path == "/";
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
@font-face {
  font-family: "nanum square";
  src: local("nanum square"),
    url(./assets/fonts/NanumSquareEB.ttf) format("truetype");
}

html,
body {
  margin: 0;
  padding: 0;
  min-width: 0;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
