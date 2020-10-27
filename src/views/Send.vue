<template>
  <div class="send__wrap">
    <div class="navigation app-header">
      <div class="nav-div">
        <nav role="navigation" class="nav-menu">
          <router-link to="/" class="logo title">인편단심</router-link>
          <span style="margin: 0 0.7rem;">|</span>
          <!-- <span>편지 전송</span> -->
        </nav>
        <div class="nav-back" @click="handleBack">
          <span><i class="fas fa-arrow-left"></i> 편지작성</span>
        </div>
      </div>
    </div>
    <div class="content-area" v-if="pageNumber">
      <div class="wrapper send-now">
        <div class="content content-main">
          편지를 누르면 ㅇㅇㅇ훈련소 페이지로 이동합니다.
        </div>
        <textarea name="" id="" cols="30" rows="10" v-model='mailText'></textarea>
        <!-- 클립보드에 복사되었습니다. -->

        <!-- 테스트영영 -->
        <button type="button" class="btn btn-primary" @click="showPopup">
          클립보드에 복사하기
        </button>
        <button type="button" class="btn btn-primary" @click="showPopup">
          편지보내러가기
        </button>
        <!--자동으로 이동까지 -->
        <!-- ㅇㅇ 훈련소로 이동합니다.  -->
        <input type="text" id="inputField" />
        <button @click="copyText">복사하기</button>

        <br />
        <br />

        <button @click="toggleSend">Send!</button>
        <!-- 테스트영영 -->

        <div class="clipboard">
          <!-- Target -->
          <input
            id="target"
            value="https://github.com/zenorocha/clipboard.js.git"
          />

          <!-- Trigger -->
          <button>copy</button>

          <h1>
            "공군" 훈련소에 보내시는거죠? <br />
            저희가 모셔드릴게요
          </h1>

          <h2>
            편지 들고 가시는거 잊지 마세요!<br />
            버튼을 눌러 편지를 담아가세요.
          </h2>
          <span> 붙여넣기(ctrl+v) 하시면 내용이 복사됩니다.</span>
        </div>
      </div>
      <div class="wrapper send-latter">
        <div class="content content-middle">
          로그인하고 작성한 편지를 보관하세요.
        </div>
        <div class="content content-sub">
          언제든지 보내고 싶을 때 보낼 수 있어요.
        </div>
        <button type="button" class="btn btn-dark">편지 보관하기</button>
        <div class="content content-middle">
          편지 출력기능을 이용해서<br />
          직접 우편으로 보낼 수 있어요.
        </div>
        <button type="button" class="btn btn-dark">편지 출력하기</button>
      </div>
    </div>
    <div v-else>
      <h1>보내기를 완료했습니다!</h1>

      <button type="button" class="btn btn-primary" @click="backToSend">
        뒤로가기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: true,
      mailText: this.$route.params.mailText,
      armyType: this.$route.params.armyType
    };
  },
  methods: {
    toggleSend() {
      this.pageNumber = !this.pageNumber;
    },
    handleBack() {
      this.$router.push({ path: "/write/mail" });
    },
    copyText: function() {
      var agt = navigator.userAgent.toLowerCase();
      var textField = document.getElementById("target");
      textField.select();
      if (agt.indexOf("safari") != -1) {
        textField.setSelectionRange(0, 9999); // 추가 사파리 호환문제 -?되는 지 체크!
      }
      document.execCommand("copy");
      document.body.removeChild(textField);
    },
    showPopup: function() {
      window.open(
        "http://www.airforce.mil.kr:8081/user/indexSub.action?codyMenuSeq=156893223&siteId=last2&menuUIType=sub#searchName",
        "팝업창기능",
        "width=1440, height=900, left=720, top=330"
      );
      this.pageNumber = !this.pageNumber;
    },
    backToSend: function() {
      this.pageNumber = !this.pageNumber;
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
}
.nav-div {
  display: flex;
  height: 64px;
  align-items: center;

  padding: 0px 24px;
  // justify-content: space-between;
  justify-content: left;
  // padding: 0px 16px;
  border-bottom: 1px solid #e3e5e9;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 4px 0 rgba(45, 51, 58, 0.16);
  font-weight: bold;
  color: #111111;
  .nav-menu {
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 24px;
  }
}

.nav-back {
  margin-left: 10px;
  height: 40px;
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
// contents
.send__wrap {
  background-color: #ffbfb9;
}
.content-area {
  margin: 50px auto;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 40%;
  margin: 16px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 4px 0 rgba(45, 51, 58, 0.16);
  .content {
    margin: 10px;
    text-align: center;
  }
  .content-main {
    line-height: 120%;
    font-size: 48px;
  }
  .content-middle {
    line-height: 130%;
    margin-top: 80px;
    font-size: 36px;
  }
  .content-sub {
    font-size: 20px;
  }
  button {
    margin-top: 16px;
    width: 80%;
  }
}
@media (max-width: 814px) {
  .content-area {
    display: block;
  }
  .wrapper {
    width: 100vw;
    .content-main {
      line-height: 120%;
      font-size: 25px;
    }
    .content-middle {
      line-height: 130%;
      margin-top: 80px;
      font-size: 20px;
    }
    .content-sub {
      font-size: 16px;
    }
  }
}
</style>