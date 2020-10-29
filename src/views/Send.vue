<template>
  <div class="send__wrap">
    <div class="navigation app-header">
      <div class="nav-div">
        <nav role="navigation" class="nav-menu">
          <router-link to="/" class="logo title">
            <img src="../../public/favicon.png" alt="logo" width="24px">
            인편단심
          </router-link>
          <span style="margin: 0 0.7rem;">|</span>
          <!-- <span>편지 전송</span> -->
        </nav>
        <div class="nav-back" @click="handleBack">
          <span><i class="fas fa-arrow-left"></i> 편지작성</span>
        </div>
      </div>
    </div>
    <div class="content-area" v-if="pageNumber">
       <transition name="alert" v-if="show" style="margin 0px auto" >
          <div class="alert alert-success" role="alert" :class="{show:isShow}">
            <h4 class="alert-heading">편지 내용이 클립보드에 복사되었습니다!</h4>
            <p>이제 훈련소 페이지로 이동합니다.</p>
            <hr>
            <p class="mb-0">붙여넣기(ctrl+v)를 해서 편지보내기를 완료하세요.</p>
        </div>
       </transition>
      <div class="wrapper send-now">
        <div class="content content-main">
          편지를 누르면 <br>{{armyType}}훈련소로 이동합니다.
        </div>
        <textarea name="" id="" cols="30" rows="10" v-model='mailText' @click="showPopup"></textarea>
        <!-- 클립보드에 복사되었습니다. -->
       
        <!-- 테스트영영 -->

        <div class="clipboard">
          <span> <br>붙여넣기(ctrl+v) 하시면 내용이 복사됩니다.</span>
        </div>
      </div>
      <div class="wrapper send-later">
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
    <div v-else class="send-done">
      <div class="h1">편지 보내기를 <br>완료하셨습니다!</div>
      <div class="btn-select">
        <button type="button" class="btn btn-outline-primary" @click="backToSend">
        뒤로가기
      </button>
      <button type="button" class="btn btn-primary" @click="backToSend">
        마이페이지
      </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:false,
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
      this.show = !this.show;
      setTimeout(() => {
        
        window.open(
        "http://www.airforce.mil.kr:8081/user/indexSub.action?codyMenuSeq=156893223&siteId=last2&menuUIType=sub#searchName",
        "팝업창기능",
        "width=1440, height=900, left=720, top=330"
      );
      }, 3000);
      this.show = !this.show;
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

.alert-success{
  position:absolute;
  top:80px;
}
// contents
.send__wrap {
  background-color: #ffbfb9;
}
.content-area {
  margin: 0px auto;
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
  max-width: 96%;
  margin: 16px auto;
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
  .send-done{
    .h1{
      font-size: 25px;
    }
  }
}
.send-done{
  margin:20px auto;
  min-width:320px;
  .h1{
    text-align: center;
    font-family: "nanum square";
  font-size: 36px;
  }
  .btn-select{
    display:flex;
    justify-content: center;
  }
  .btn{
    margin:20px 30px;
  }
}
.alert-enter-active, .alert-leave-active {
  transition: opacity .5s;
}
.alert-enter, .alert-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>