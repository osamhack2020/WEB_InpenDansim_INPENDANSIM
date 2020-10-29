<template>
  <div class="rolling-paper">
    <div class="navigation app-header">
      <div class="nav-div">
        <nav role="navigation" class="nav-menu">
          <router-link to="/" class="logo title">
            <img src="../../public/favicon.png" alt="logo" width="24px" />
            <div style="white-space:nowrap;">인편단심</div>
          </router-link>
          <span style="margin: 0 0.7rem;">|</span>
          <span>편지 전송</span>
        </nav>
        <div class="nav-send" @click="handleSend">
          <span>보내기</span>
        </div>
      </div>
    </div>

    <div class="rolling-content" v-if="haveRoll">
      <!-- 롤링페이퍼 기존거 작성하기 -->

      <!-- 훈련병 소개 카드 -->
      <div class="box header-wrapper">
        <div class="title-wrapper">
          <h1 class="title">
            to. 홍길동 훈련병 <span class="badge badge-info">D - 4 !</span>
          </h1>
        </div>
        <div class="subtitle">
          <span>
            열심히 훈련받고 있는 우리 길동이에게 <br />
            응원의 한마디 부탁드려요!! 😸
          </span>
          <span>
            짧은 내용이어도 여러분들의 한마디가 <br />
            길동이에게 큰 힘이 될 거에요💪
          </span>
          <button type="button" class="btn notice-badge">
            작성 <span class="badge badge-light">{{ listCount }} 명</span>
          </button>
          <button type="button" class="btn btn-link share-button" @click="handleShowAlert('링크가 복사되었습니다.')" >
            링크로 초대하기 <i class="far fa-share-square "></i>
          </button>
        </div>
      </div>
      <div class="hr"></div>
      <!-- 훈련병 소개 카드 -->
      <!-- 게시된 메시지들 -->
      <main class="chat-screen">
        <ul class="chat__messages">
          <li class="message" v-for="(author, index) in relayList" :key="index">
            <div class="message__content">
              <span class="message__author">{{ author.name }}</span>
              <span class="message__bubble">
                {{ author.comment }}
              </span>
            </div>
          </li>
        </ul>
      </main>
      <!-- 게시된 메시지들 -->
      <!-- 메시지 쓰는부분 -->
      <div class="chat__write--container">
        <div class="top-wrap">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><i class="far fa-smile-wink"></i
              ></span>
            </div>
            <input
              type="text"
              class="chat__write chat-writer form-control"
              placeholder="이름을 적어주세요"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="newAuthor.name"
            />
          </div>

          <button type="button" class="btn btn-warning" @click="addComment">
            <i class="fas fa-arrow-up"></i>
          </button>
        </div>
        <textarea
          class="chat__write chat-comment input-group input-group-lg"
          type="text"
          placeholder="응원 메시지"
          style=""
          v-model="newAuthor.comment"
        ></textarea>
        <div class="chat__icon-right chat__icon"></div>
        </div>
      <!-- 메시지 쓰는부분 -->
          
    </div>
    <div v-else>
      <!-- 롤링페이퍼 새로 만들기 -->
      rolling paper page 새로 만드는 롤링페이퍼부분 헤더부분 작성부분 보내기
      저장하기
      <div class="wrapper">
        <div class="box header-content">
          훈련병 정보입력부분 필수 이름: 필수 훈련소: 선택 추가하기 sns공유하기:
          ㅇㅇㅇ에게 응원의 한마디 부탁해요!
        </div>
        <div class="box share-content">
          공유하기
        </div>
        <div class="box rolling-content">
          훈련병에게 보내는 응원메세지들
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
var name = 3;
export default {
  data() {
    return {
      showAlert: false,
      pageNumber: 0,
      people: name,
      haveRoll: true,
      listCount: 4,
      newAuthor: {
        name: "",
        comment: ""
      },
      relayList: [
        {
          name: "태윤이가",
          comment:
            " 길동아 훈련 많이 힘들지 ㅎㅎ 몸 조심하고 수료하면 보자. 파이팅!"
        },
        {
          name: "지우석",
          comment: "  D-10 !! 이제 한자리네 ㅋㅋ 생각보다 금방이지?"
        },
        {
          name: "정호",
          comment:
            " 으악 인편 못써줘서 미안해. 대신 롤링페이퍼에라도 응원메시지 남길게. 파이팅!"
        },
        {
          name: "은상",
          comment: " 길동아 수료까지 얼마 안남았네? 조금만 더 힘내!"
        }
      ]
    };
  },
  methods: {
    toggleNext() {
      this.pageNumber = !this.pageNumber;
    },
    addComment: function() {
      if (this.newAuthor.name !== "" && this.newAuthor.comment !== "") {
        this.relayList.push({
          name: this.newAuthor.name,
          comment: this.newAuthor.comment
        });
        this.newAuthor.name = "";
        this.newAuthor.comment = "";
        this.listCount++;
        setTimeout(() => {
          window.scrollBy(0, 1000);
        }, 0);
      }
    },
    handleShowAlert(message) {
      this.alertMessage = message;
      this.showAlert = true;
      var that = this;
      setTimeout(() => {
        that.showAlert = false;
        that.alertMessage = "";
      }, 2000);
    },
    handleSend() {
      this.$router.push({
        path: "/write/send",
        params: { mailText: this.mailText }
      });
    }
  }
};
</script>

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
  z-index: 1;
  
}

.nav-div {
  display: flex;
  padding: 0px 16px;
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
.nav-send {
  height: 40px;
  padding: 0 1.5rem;
  border-radius: 1.3rem;
  background: #135fa1;
  transition: background 0.3s ease;
  box-shadow: 0 2px 4px 0 #ccc;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: normal;
  cursor: pointer;

  &:hover {
    background: #0c3d67;
  }
  &:active {
    box-shadow: none;
  }
}

.rolling-paper {
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
  .rolling-content {
    margin: 0 auto;
    max-width: 428px;
    // min-height: 200vh;
  }
}

.header-wrapper {
  margin: 16px;
  padding-left: 30px;
  background-color: #ffffff;
  z-index: 10;
}
.title-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
}
.notice-badge {
  color: #ffffff;
  font-weight: 700;
  background-color: #ff6f61;
}
.title {
  font-size: 24px;
  line-height: 42px;
  font-weight: 700;
}
.hr {
  margin: 16px 0px;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #dfdfdf;
}
.subtitle {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}
.subtitle > span {
  line-height: 150%;
  margin: 10px;
  display: block;
}
button {
  font: {
    family: "nanum square";
    size: 13pt;
    weight: lighter;
  }
}
.share-button {
  margin-left: 16px;
  background-color: #135fa1;
  color: #ffffff;
}

/* chat */

.chat-screen {
  background-color: #6c83aa;
}

.chats-body {
  padding: 10px 0px;
  padding-top: 100px;
}

.chats-body .header,
.chats-body .status-bar {
  padding: 0px 20px;
}

.chat__write--container {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: block;
  justify-content: space-between;
  align-items: center;
  max-width: 440px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 4px 0 rgba(45, 51, 58, 0.16);
}
.top-wrap {
  background-color: #cccccc;
  display: flex;
  justify-content: space-between;
}
.chat-comment {
  margin: 0 auto;
  bottom: 0px;

  padding: 10px 30px;
  border-radius: 15px;
  width: 100%;
  height: 90px;
  border: none;
  font-size: 20px;
}

.chat-screen .chat__messages {
  // height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 120px 20px;
}

.chat__messages .chat__timestamp {
  background-color: white;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  text-transform: uppercase;
  font-weight: 700;
}

.message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  &__author {
    font-weight: bold;
    color: #fff;
  }
  &__bubble {
    background-color: white;
    margin: 8px;
    width: 300px;
    padding: 10px 20px;
    border-radius: 20px;
    display: block;
    line-height: 150%;
    font-weight: 600;
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
    width: 80%;
    padding: 0 2rem;
    font-family: "nanum square";
    font-size: 15pt;
    border-radius: 1.5rem;
    border:1px solid #333333;
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
</style>
