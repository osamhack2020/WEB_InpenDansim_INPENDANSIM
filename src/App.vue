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

<style></style>
