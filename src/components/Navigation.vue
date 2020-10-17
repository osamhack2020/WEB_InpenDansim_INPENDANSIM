<template>
  <div class="navigation">
    <router-link to="/">인편단심</router-link>
    <div>
      <router-link to='/write/mail'>편지 쓰기</router-link>
      <router-link to="/mypage">마이페이지</router-link>
      <router-link v-if="!loggedIn" to="/login">Log-In</router-link>
      <button v-else @click="handleLogOut">Log-Out</button>
    </div>
  </div>
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
<style scoped>
  .navigation {
    display: flex;
    justify-content: space-between;

    padding: 1rem;
    background: #cbb;

  }
</style>
