<template>
  <div class="rolling-paper">
    <div class="navigation app-header">
      <div class="nav-div">
        <nav role="navigation" class="nav-menu">
          <router-link to="/" class="logo title">인편단심</router-link>
          <span style="margin: 0 0.7rem;">|</span>
          <span>편지 전송</span>
        </nav>
        <div class="nav-send" @click="handleSend">
          <span>보내기</span>
        </div>
      </div>
    </div>

    <div v-if="haveRoll">
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
            작성 <span class="badge badge-light">{{ listCount }}</span>
          </button>
          <button type="button" class="btn btn-link share-button">
            링크로 초대하기 <i class="far fa-share-square "></i>
          </button>
        </div>
        <div class="hr"></div>
      </div>
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
        <textarea
          class="chat__write chat-comment"
          type="text"
          placeholder="응원 메시지"
          v-model="newAuthor.comment"
        ></textarea>
        <div class="top-wrap">
          <input
            class="chat__write chat-writer"
            type="text"
            placeholder="작성자"
            v-model="newAuthor.name"
          />
          <button type="button" class="btn btn-warning" @click="addComment">
            보내기
          </button>
        </div>

        <div class="chat__icon-right chat__icon">
          <span class="chat__write-icon">
            <i class="far fa-smile-wink"></i>
          </span>
        </div>
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
  </div>
</template>

<script>
var name = 3;
export default {
  data() {
    return {
      list: ["user01", "user02", "user03"],
      newUser: "",
      pageNumber: 0,
      people: name,
      haveRoll: true,
      listCount: 4,
      newAuthor: {
        name: "",
        comment: "",
      },
      relayList: [
        {
          name: "태윤이가",
          comment:
            " 길동아 훈련 많이 힘들지 ㅎㅎ 몸 조심하고 수료하면 보자. 파이팅!",
        },
        {
          name: "지우석",
          comment: "  D-10 !! 이제 한자리네 ㅋㅋ 생각보다 금방이지?",
        },
        {
          name: "정호",
          comment:
            " 으악 인편 못써줘서 미안해. 대신 롤링페이퍼에라도 응원메시지 남길게. 파이팅!",
        },
        {
          name: "은상",
          comment: " 길동아 수료까지 얼마 안남았네? 조금만 더 힘내!",
        },
      ],
    };
  },
  methods: {
    toggleNext() {
      this.pageNumber = !this.pageNumber;
    },
    addComment: function() {
      this.relayList.push({
        name: this.newAuthor.name,
        comment: this.newAuthor.comment,
      });
      this.newAuthor.name = "";
      this.newAuthor.comment = "";
    },
    handleSend() {
      this.$router.push({
        path: "/write/send",
        params: { mailText: this.mailText },
      });
    },
  },
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
  height: 2.6rem;
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
  margin-right: auto;
  margin-left: auto;
  max-width: 428px;
  min-height: 2000vh;
}

.header-wrapper {
  margin: 16px;
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
.chat-writer {
  width: 96px;
  border: none;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 4px 0 rgba(45, 51, 58, 0.16);
}

.chat__icon-left {
  position: absolute;
  left: 10px;
}

.chat__icon-right {
  position: absolute;
  right: 10px;
}

.chat-comment {
  margin: 0 auto;
  bottom: 0px;

  border-radius: 0;
  padding: 20px 60px;
  width: 100%;
  border: none;
  font-size: 14px;
  transition: width 0.5s ease-in-out, border-radius 0.5s ease-in,
    transform 0.5s ease-in-out;
}

.chat__icon {
  font-size: 18px;
  transition: opacity 0.3s ease-in-out;
}

.chat__write i {
  font-size: 22px;
}

.chat__write-column:nth-child(2) {
  width: 80%;
}
.chat__write-column input {
  padding: 20px 10px;
  width: 100%;
  border: none;
  font-size: 14px;
}

.chat-screen .chat__messages {
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  padding-top: 20px;
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
}

.message .message__bubble {
  background-color: white;
  margin: 8px;
  width: 300px;
  padding: 10px 20px;
  border-radius: 20px;
  display: block;
  line-height: 150%;
  font-weight: 600;
}
</style>
