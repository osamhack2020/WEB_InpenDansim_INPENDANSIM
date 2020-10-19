<template>
  <div id="app">
    <Navigation v-if="showNav"></Navigation>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation
  },
  computed: {
    showNav() {
      return true;
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  grid-template-rows: auto 1fr;

  height: 100%;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

@font-face {
  font-family: "Maru Buri";
  src: local("Maru Buri"),
   url(./assets/fonts/MARUBuriBetaR.ttf) format("truetype");
}
</style>
