<template>
  <div class="rolling">
    <div class="navigation app-header">
      <div class="nav-div">
        <nav role="navigation" class="nav-menu">
          <router-link to="/" class="logo title">
           <img src="../../public/favicon.png" alt="logo" width="24px">
           
           <div style="white-space:nowrap;">인편단심</div>
            <!-- <img src="../assets/images/logo.png" alt="" width="115" height="30"> -->
          </router-link>
          <span style="margin: 0 0.7rem;">|</span>
          <span>롤링페이퍼 찾기</span>
        </nav>
      </div>
    </div>
    <div v-if="pageNumber" class="search-wrapper ">
      <div class="find-target">
        <span>받을 훈련병은</span>
        <input class="input-area" maxlength="6" placeholder="ㅇㅇㅇ" value="" />
        <span>이에요.</span>
      </div>
      <div class="find-guho">
        <span>우리만의 암구호는</span>
        <input
          class="input-area"
          type="text"
          maxlength="10"
          placeholder="****"
          value=""
        />
        <span>이에요.</span>
      </div>

      <div class="button-list">
        <router-link to="/rollingpaper" class="btn btn-primary">
          롤링페이퍼 참가하기
        </router-link>
        <button
          type="button"
          class="btn btn-outline-primary"
          @click="findRolling(message, guho)"
        >
          롤링페이퍼 새로 만들기
        </button>
      </div>

      <!-- <div v-if="message === '김태윤' && guho === '4321'">
        있어요!!!!! ->바로 이동
      </div>
      <div v-else>
        찾는 롤링페이퍼가 없네요...
      </div>
      <div v-if="message === '김태윤'">
        있어요!!
      </div>
      <div v-else>
        없네요...
      </div>
      <span>메세지: {{ message }}</span> -->
    </div>

    <div v-else>
      <router-link to="/rollingpaper" class="btn btn-primary"
        >롤링페이퍼 생성</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: true,
      isFound: false,
      start: false,
      message: "ㅇㅇㅇ",
      guho: "1234"
    };
  },
  methods: {
    toggleNext() {
      // this.pageNumber = !this.pageNumber;
      this.start = !this.start;
    },
    findRolling: function(person, password) {
      if (person === "김태윤" && password === "4321") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.navigation {
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
  position: sticky;
  top: 0;
  z-index: 1;
  .logo{
    display:flex;
    align-items: center;
    font-family: "BinggraeTaom-Bold", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
  }
}

.nav-div {
  display: flex;
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
.title {
  font-size: 24px;
}
.nav-back {
  height: 2.6rem;
  padding: 0 1.5rem;
  border-radius: 1.3rem;
  transition: background 0.3s ease;
  box-shadow: 0 2px 4px 0 #ccc;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background: rgba($color: #135fa1, $alpha: 0.2);
  }
  &:active {
    box-shadow: none;
  }
}

.input-area {
  width: 60%;
  box-sizing: content-box;
  font-size: 34px;
  border: 0px;
  outline: none;
  display: inline-block;
  font-weight: lighter;
  padding: 0px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s ease-in-out;
}

.rolling {
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
}
.search-roll {
  padding: 16px;
  max-width: 444px;
  width: 100%;
  display: flex;

  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  flex-direction: column;
  /* margin-top: 60px;
  width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center; */
}
.search-wrapper {
  margin: 0 auto;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 34px;
  font-weight: bold;
  line-height: 60px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 12px 16px;
  }
  .find-target {
    margin-bottom: 20px;
  }
  .button-list {
    font: {
      family: "nanum square";
      size: 13pt;
      weight: lighter;
    }
    position: absolute;
    bottom: 0px;
    margin-top: 30px;
    box-sizing: border-box;
    margin: 0px 16px;
    width: 100%;
    text-align: center;
    .btn {
      width:80%;
      vertical-align: middle;
      padding: 16px;
      font-size: 20px;
      letter-spacing: 1px;
      min-width: 328px;
      max-width: 440px;
      margin: 8px 0px;
      
    }
  }
}
</style>
