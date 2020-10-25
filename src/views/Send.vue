<template>
  <div class="send__wrap">
    <div class="navigation app-header">
      <div class="nav-div">
        <nav role="navigation" class="nav-menu">
          <router-link to="/" class="logo title">인편단심</router-link>
          <span style="margin: 0 0.7rem;">|</span>
          <span>편지 작성</span>
        </nav>
        <div class="nav-back" @click="handleBack">
          <span><i class="fas fa-arrow-left"></i> 뒤로가기</span>
        </div>
      </div>
    </div>
    <div class="content-area">
      <div class="wrapper send-now">
        <h1>이제 작성한 편지를 클립보드에 복사한뒤 편지를 보내러 가세요.</h1>
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

          <button type="button" class="btn btn-primary" @click="showPopup">
            편지보내러가기
          </button>
        </div>
      </div>
      <div class="wrapper send-latter">
        작성한 편지를 저장하면 나중에 언제든지 보낼 수 있어요. 로그인하기
        로그인하고 저장 버튼 오프라인으로 편지 보내기 서비스 이용하기 기타
        파일로 출력하기 버튼
      </div>
    </div>
    <div v-if="pageNumber">
      <h1>This is a Send page</h1>

      <input type="text" id="inputField" />
      <button @click="copyText">복사하기</button>

      <br />
      <br />

      <button @click="toggleSend">Send!</button>
    </div>
  </div>
</template>

<script>
// var clipboard = new ClipboardJS(".btn");

export default {
  data() {
    return {
      pageNumber: true
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
    }
  }
};
</script>

<style scoped lang="scss">
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
  justify-content: left;
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
  margin-left: 20px;
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
.content-area {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  display: flex;
  flex-flow: wrap;
}
.wrapper {
  width: 580px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 4px 0 rgba(45, 51, 58, 0.16);
}
</style>