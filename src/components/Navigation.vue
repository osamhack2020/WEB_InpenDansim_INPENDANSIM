<template>
  <div class="navigation app-header">
    <div class="nav-div">
      <button
        class="nav__toggle"
        aria-expanded="false"
        type="button"
        @click="toggle"
      >
        <i class="fas fa-bars fa-2x"></i>
      </button>
      <!-- logo -->

      <nav role="navigation" class="nav-menu">
        <router-link to="/" class="logo title">
          <img src="../../public/favicon.png" alt="logo" width="24px" />
          <div style="white-space:nowrap;">인편단심</div>
        </router-link>
        <router-link
          to="/write/mail"
          class="nav-link"
          v-if="path != '/write/mail'"
          >편지 쓰기</router-link
        >
        <router-link
          to="/write/rolling"
          class="nav-link"
          v-if="path != '/write/rolling'"
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
    <transition name="side-menu">
      <div v-if="isActive" class="nav-overlay">
        <router-link to="write/mail" class="nav-link">편지쓰기</router-link>
        <router-link to="/write/rolling" class="nav-link"
          >롤링페이퍼 쓰러가기</router-link
        >
        <router-link to="/mypage" class="nav-link">마이페이지</router-link>
        <a href="#" class="overlay-desktop">고객센터</a>
        <router-link v-if="!loggedIn" to="/login" class="account-link desktop">
          로그인하기
        </router-link>
        <button v-else @click="handleLogOut" class="account-link desktop">
          로그아웃
        </button>
        <a href="#" class="both">회원가입</a>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    ...mapState(["userProfile"]),
    loggedIn() {
      return Object.keys(this.userProfile).length > 0;
    },
    path() {
      return this.$route.path;
    }
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch("logout");
    },
    toggle() {
      this.isActive = !this.isActive;
    },
    open: function(event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert("Hello " + this.name + "!");
      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation {
  .logo {
    display: flex;
    align-items: center;
    font-family: "BinggraeTaom-Bold", Dotum, Baekmuk Dotum, Undotum,
      Apple Gothic, Latin font, sans-serif;
  }
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}
.nav-div {
  display: flex;
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
    z-index: 1000;
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
  /* open */
  /* .shadow {
    position: absolute;
    top: 58px;
    width: 100%;
    height: 800px;
    background-color: tomato;
  } */
  // .showNav {
  //   /* z-index: 10; */
  //   padding-left: 16px;
  //   background-color: #fff;
  //   /* width: 80%; */
  //   transform: translate(300px, 0);
  //   box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
  // }
  .nav-overlay,
  .nav-overlay > a,
  .nav-overlay > .account > a {
    display: block;
    font-size: 24px;
    padding: 20px;
  }
  .nav-overlay {
    position: relative;
    padding-left: 16px;
    background-color: #fff;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
    width: 250px;
    text-align: center;
    z-index: 100;
  }
  .side-menu-enter-active,
  .side-menu-leave-active {
    transition: transform 0.5s, opacity 0.5s;
  }
  .side-menu-enter, .side-menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    // transform: translateY(-103%);
    transform: translateX(-103%);
  }
}
.alert-enter-active,
.alert-leave-active {
  transition: opacity 0.5s;
}
.alert-enter, .alert-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
