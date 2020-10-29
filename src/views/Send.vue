<template>
  <div class="send__wrap">
    <div class="navigation app-header">
      <div class="nav-div">
        <nav role="navigation" class="nav-menu">
          <router-link to="/" class="logo title">
             <div style="white-space:nowrap;">인편단심</div>
          </router-link>
          <span style="margin: 0 0.7rem;">|</span>
          <!-- <span>편지 전송</span> -->
        </nav>
        <div class="nav-back" @click="handleBack">
          <span><i class="fas fa-arrow-left"></i> 편지작성</span>
        </div>
      </div>
    </div>
    <div class="content-area" v-if="pageNumber == 1">
      <div class="wrapper send-now">
        <div class="title-container">
          <div class="eng">SEND</div>
          <div class="kor">마음을 전하러 가는 길.</div>
        </div>
        <div class="article-container">
          <div class="text">작성한 편지가 클립보드에 복사되고,</div>
          <div class="text">훈련소 페이지로 이동합니다.</div>
          <div class="text">훈련병을 찾아 소중한 마음을 전하세요!</div>
        </div>
        <div class="btn-container">
          <div class="btn" @click="handleSend">지금 보내러 가기</div>
        </div>
      </div>
      <div class="wrapper send-latter">
        <div class="title-container">
          <div class="eng">SAVE</div>
          <div class="kor">더 예쁜 말로 다듬기 위해서.</div>
        </div>
        <div class="article-container">
          <div class="text">로그인하고 작성한 페이지를 보관하세요.</div>
          <div class="text">언제든지 꺼내서 보낼 수 있어요!</div>
        </div>
        <div class="btn-container">
          <div class="btn">편지 보관하기</div>
        </div>
      </div>
    </div>
    <div class="done-area" v-if="pageNumber == 2">
      <div class="wrapper done">
        <div class="title-container">
          <div class="eng">DONE!</div>
          <div class="kor">기다리는 시간마저 즐거운.</div>
        </div>
        <div class="article-container">
          <div class="text">인편단심을 찾아 주셔서 감사합니다.</div>
          <div class="text">또 오세요!</div>
        </div>
        <div class="btn-container">
          <div class="btn" @click="handleShowAlert('복사되었습니다!')">
            다시 복사하기
          </div>
        </div>
      </div>
    </div>

    <div class="alert-popup__wrap">
      <transition name="popup">
        <div class="alert-popup" v-if="showAlert">
          <span>{{ alertMessage }}</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAlert: false,
      pageNumber: 1,
      mailText: this.$route.params.mailText,
      armyType: this.$route.params.armyType,
      reciever: this.$route.params.reciever
    };
  },
  methods: {
    handleSend() {
      this.pageNumber = 2;
      this.showPopup();
    },
    toggleSend() {
      this.pageNumber = !this.pageNumber;
    },
    handleBack() {
      this.$router.push({
        name: "WriteMail",
        params: {
          mailText: this.mailText,
          armyType: this.armyType,
          receiver: this.reciever
        }
      });
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
    },
    backToSend: function() {
      this.pageNumber = !this.pageNumber;
    },
    handleShowAlert(message) {
      this.alertMessage = message;
      this.showAlert = true;
      var that = this;
      setTimeout(() => {
        that.showAlert = false;
        that.alertMessage = "";
      }, 2000);
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Shrikhand&display=swap");

.navigation {
  .logo{
    display:flex;
    align-items: center;
    font-family: "BinggraeTaom-Bold", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
  }
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
  height: 100vh;
}
.content-area,
.done-area {
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 30%;
  height: 60%;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  justify-items: center;
  justify-content: center;
  padding: 3%;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 10px -2px #000;
  transition: box-shadow 0.3s ease;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title-container {
    .eng {
      font-family: "Shrikhand", cursive;
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
    .kor {
      font-family: "maruburi";
      font-size: 2rem;
      font-weight: bolder;
    }
  }
  .article-container {
    font-family: "nanum square";
    font-weight: lighter;
    font-size: 1.3rem;
    line-height: 150%;
  }
  .btn {
    font-family: "nanum square";
    font-weight: lighter;
    font-size: 1.3rem;
    color: #fff;
    height: 4rem;
    padding: 0 3rem;
    border-radius: 2rem;
    transition: background 0.3s ease;
    background: #135fa1;
    box-shadow: 0 2px 4px 0 #ccc;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background: rgba($color: #135fa1, $alpha: 0.6);
    }
    &:active {
      box-shadow: none;
    }
  }
}

.alert-popup__wrap {
  position: absolute;
  z-index: 100;
  width: 100vw;
  top: 15vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.alert-popup {
  background: rgba($color: #fff, $alpha: 0.7);
  height: 3rem;
  width: 550px;
  padding: 0 2rem;
  font-family: "nanum square";
  font-size: 15pt;
  border-radius: 1.5rem;
  white-space: nowrap;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s;
}
.popup-enter, .popup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0;
  opacity: 0;
}

@media (max-width: 814px) {
  .content-area {
    flex-flow: column wrap;
  }
  .wrapper {
    width: 80%;
    height: 40%;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 3%;
    .title-container {
      .eng {
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
      }
      .kor {
        font-size: 1.5rem;
        letter-spacing: -2px;
      }
    }
    .article-container {
      font-size: 1rem;
    }
    .btn {
      height: 3rem;
      border-radius: 1.5rem;
    }
    &.send-now {
      margin-bottom: 10%;
    }
  }
  .alert-popup {
    width: 400px;
  }
}
@media (min-width: 815px) {
  .wrapper {
    &:hover {
      background: #fefefe;
      box-shadow: 0 2px 15px 0px #000;
    }
    &.send-now {
      margin-right: 6rem;
    }
  }
}
</style>
