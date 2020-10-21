<template>
  <div class="navigation app-header">
    <div class="nav-div">
      <button class="nav__toggle" aria-expanded="false" type="button">
        <i class="fas fa-bars fa-2x"></i>
      </button>
      <!-- logo -->
      <nav role="navigation" class="nav-menu">
        <router-link to="/" class="logo title">인편단심</router-link>
        <router-link to="/write/mail" class="nav-link">편지 쓰기</router-link>
        <router-link to="/write/rolling" class="nav-link"
          >롤링페이퍼 쓰러가기</router-link
        >

        <router-link to="/mypage" class="nav-link">마이페이지</router-link>
      </nav>
      <div class="account">
        <a href="#" class="account-link desktop">고객센터</a>

        <router-link v-if="!loggedIn" to="/login" class="account-link desktop"
          >로그인하기</router-link
        >
        <button v-else @click="handleLogOut" class="account-link desktop">
          로그아웃
        </button>
        <a href="#" class="account-link both">회원가입</a>
      </div>
    </div>
    <div class="nav-overlay">
      <nav role="navigation" class="nav-overlay__nav-menu">
        <a href="writeLetter.html" class="nav-link">편지쓰기</a>
        <a href="#" class="nav-link">롤링페이퍼쓰기</a>
        <a href="#" class="nav-link">내가 보낸편지</a>
        <div class="account">
          <a href="#" class="overlay-desktop">고객센터</a>
          <a href="#" class="overlay-desktop">로그인하기</a>
          <a href="#" class="both">회원가입</a>
        </div>
      </nav>
    </div>
    <div class="menu-shadow" style="opacity: 1; display: block;"></div>

    <!-- <router-link to="/">인편단심</router-link>
    <div>
      <router-link to="/write/mail">편지 쓰기</router-link>
      <router-link to="/mypage">마이페이지</router-link>
      <router-link v-if="!loggedIn" to="/login">Log-In</router-link>
      <button v-else @click="handleLogOut">Log-Out</button>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userProfile"]),
    loggedIn() {
      return Object.keys(this.userProfile).length > 0;
    },
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch("logout");
    },
    showNav: function() {
      let navToggle = document.querySelector(".nav__toggle");

      let navWrapper = document.querySelector(".nav__wrapper");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
}

.nav-div {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0px 24px;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e3e5e9;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 4px 0 rgba(45, 51, 58, 0.16);
  font-weight: bold;
  color: #111111;
}
.nav__toggle {
  display: none;
}
.nav-overlay {
  visibility: hidden;
  height: 0px;
}
.nav-menu {
  display: flex;
  align-items: center;
}
.nav-menu > .nav-link {
  padding-left: 40px;
}
.account > .account-link {
  padding-left: 20px;
}
.title {
  font-size: 24px;
}
@media (max-width: 814px) {
  .app-header {
    height: 64px;
  }
  .nav-div {
    height: 58px;
    padding-right: 0px;
    padding-left: 0px;
  }
  .nav__toggle {
    display: block;
    margin: 15px 10px;
    border: 0;
    background: none;
    outline: 0;
    cursor: pointer;
  }
  .nav-menu {
    position: absolute;
    margin-left: 60px;
    height: 100%;
    width: 100px;
    float: left;
  }
  .account > .both {
    margin-right: 10px;
  }
  .account {
    display: block;
  }
  .nav-menu > .nav-link,
  .account > .desktop {
    display: none;
  }
  .nav__wrapper.active {
    padding-left: 16px;
    background-color: #fff;
    width: 80vw;
    height: 100vh;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  .nav-overlay,
  .nav-overlay > nav > a,
  .nav-overlay > nav > .account > a {
    display: block;
    font-size: 24px;
    padding: 20px;
  }
  .nav-overlay {
    text-align: center;
  }
}
</style>
