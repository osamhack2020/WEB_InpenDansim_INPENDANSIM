<template>
  <div class="write">
    <h1>This is a write page for {{ this.soldier }}</h1>
    <div v-if="loggedIn">You are logged in.</div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      soldier: this.$route.params.soldier
    };
  },
  computed: {
    ...mapState(["userProfile"]),
    loggedIn() {
      return Object.keys(this.userProfile).length > 0;
    }
  }
};
</script>
