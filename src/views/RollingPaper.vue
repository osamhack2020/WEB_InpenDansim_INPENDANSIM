<template>
  <div class="rolling-paper">
    <router-link to="/write/send">보내기</router-link>

    <div v-if="haveRoll">
      <!-- 롤링페이퍼 기존거 작성하기 -->

      <div class="box header-wrapper">
        <div class="title-wrapper">
          <h1 class="title">to. 홍길동 훈련병</h1>
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
            작성 <span class="badge badge-light">4</span>
          </button>
          <button type="button" class="btn btn-link share-button">
            링크로 초대하기 <i class="far fa-share-square "></i>
          </button>
        </div>
        <div class="hr"></div>
      </div>

      <main class="chat-screen">
        <ul class="chat__messages">
          <li class=" message">
            <div class="message__content">
              <span class="message__author">Best Friends</span>
              <span class="message__bubble">
                Congrats I love you!
              </span>
            </div>
          </li>
          <li class=" message">
            <div class="message__content">
              <span class="message__author">Best Friends</span>
              <span class="message__bubble">
                Congrats I love you!
              </span>
            </div>
          </li>
          <li class=" message">
            <div class="message__content">
              <span class="message__author">Best Friends</span>
              <span class="message__bubble">
                Congrats I love you!
              </span>
            </div>
          </li>
        </ul>
      </main>
      <div class="chat__write--container">
        <input class="chat__write writer" type="text" placeholder="작성자" />
        <input
          class="chat__write comment"
          type="text"
          placeholder="응원 메시지"
        />
        <div class="chat__icon-right chat__icon">
          <span class="chat__write-icon">
            <i class="far fa-smile-wink"></i>
          </span>
        </div>
      </div>
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
      pageNumber: 0,
      people: name,
      haveRoll: true,
    };
  },
  methods: {
    toggleNext() {
      this.pageNumber = !this.pageNumber;
    },
  },
};
</script>

<style scoped>
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
  position: fixed;
  bottom: 0px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025); */
}
.chat__icon-left {
  position: absolute;
  left: 10px;
}

.chat__icon-right {
  position: absolute;
  right: 10px;
}

.chat__write {
  margin: 0 auto;
  bottom: 0px;

  border-radius: 0;
  padding: 20px 60px;
  width: 80%;
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
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 10px 20px;
  border-radius: 20px;
  display: block;
  color: white;
  font-weight: 600;
}
</style>
