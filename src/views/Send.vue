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
        <div class="title-container">
          <div class="eng">SEND</div>
          <div class='kor'>마음을 전하러 가는 길.</div>
        </div>
        <div class="article-container">
          <div class='text'>작성한 편지가 클립보드에 복사되고,</div>
          <div class='text'>훈련소 페이지로 이동합니다.</div>
          <div class='text'>훈련병을 찾아 소중한 마음을 전하세요!</div>
        </div>
        <div class="btn-container">
          <div class='btn'>지금 보내러 가기</div>
        </div>
      </div>
      <div class="wrapper send-latter">
        <!-- <div class="content content-middle">
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
        <button type="button" class="btn btn-dark">편지 출력하기</button> -->
        <div class="title-container">
          <div class="eng">SAVE</div>
          <div class='kor'>더 예쁜 말로 다듬기 위해서.</div>
        </div>
        <div class="article-container">
          <div class='text'>로그인하고 작성한 페이지를 보관하세요.</div>
          <div class='text'>언제든지 꺼내서 보낼 수 있어요!</div>
        </div>
        <div class="btn-container">
          <div class='btn'>편지 보관하기</div>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');

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
  height: 100vh;
}
.content-area {
  // margin: 50px auto;
  // max-width: 1200px;
  // display: flex;
  // justify-content: center;
  // flex-flow: wrap;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12%;
  padding: 10% 17%;
}
.wrapper {

  display:grid;
  grid-template-rows: 1fr 2fr 1fr;
  justify-items: center;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  justify-content: center;
  padding: 15% 10%;
  // margin: 16px;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 10px -2px #000;
  transition: box-shadow 0.3s ease;
  // .content {
  //   margin: 10px;
  //   text-align: center;
  // }
  // .content-main {
  //   line-height: 120%;
  //   font-size: 48px;
  // }
  // .content-middle {
  //   line-height: 130%;
  //   margin-top: 80px;
  //   font-size: 36px;
  // }
  // .content-sub {
  //   font-size: 20px;
  // }
  // button {
  //   margin-top: 16px;
  //   width: 80%;
  // }


  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .eng { 
      font-family: 'Shrikhand', cursive; 
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
    .kor { 
      font-family: 'maruburi';  
      font-size: 2rem;
      font-weight: 900;
    }
    
  }
  .article-container {
      font-family: 'nanum square';
      font-weight: lighter;
      font-size: 1.3rem;
      line-height: 150%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .btn {
      font-family: 'nanum square';
      font-weight: lighter;
      font-size: 1.3rem;
      color:#fff;
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
@media (min-width: 815px) {
  .wrapper:hover {
    background: #fefefe;
    box-shadow: 0 2px 15px 0px #000;
  }
}



</style>