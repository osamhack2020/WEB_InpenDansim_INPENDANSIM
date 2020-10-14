<template>
  <!-- <div class="navigation">
    <router-link to="/">인편단심</router-link>
    <router-link v-if="!loggedIn" to="/login">Log-In</router-link>
    <button v-else @click="handleLogOut">Log-Out</button>
  </div> -->
  <v-toolbar>
    <v-toolbar-title>
      <router-link to="/">
        <img src="@/assets/IPDS_logo.jpg" width="150" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text v-if="!loggedIn" @click="$router.push('/login')">
      <span class="mr-2">Log-In</span>
    </v-btn>
    <v-btn text v-else @click="handleLogOut">
      <span class="mr-2">Log-Out</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userProfile"]),
    loggedIn() {
      return Object.keys(this.userProfile).length > 0;
    }
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
