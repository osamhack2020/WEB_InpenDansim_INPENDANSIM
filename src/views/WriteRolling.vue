<template>
  <div class="rolling">
    <div v-if="pageNumber" class="wrapper search-roll">
      <div id="find">
        받을 훈련병은 <br />
        <input
          class="input-area"
          maxlength="6"
          placeholder="ㅇㅇㅇ"
          value=""
        /><br />
        이에요.
      </div>
      <div class="guho">
        우리만의 암구호는<br />
        <input
          class="input-area"
          type="text"
          maxlength="10"
          placeholder="****"
          value=""
        /><br />

        이에요.
      </div>

      <div class="button-list">
        <router-link to="/rollingpaper" class="btn btn-primary"
          >롤링페이퍼 참가하기</router-link
        >
        <button
          type="button"
          class="btn btn-outline-primary"
          @click="findRolling(message, guho)"
        >
          롤링페이퍼 새로 만들기
        </button>
      </div>

      <div v-if="message === '김태윤' && guho === '4321'">
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
      <span>메세지: {{ message }}</span>
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

<style scoped>
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
.wrapper {
  width: 100%;
  font-size: 34px;
  margin-top: 20px;
  text-align: left;
  font-weight: bold;
  line-height: 60px;
  display: felx;
  flex-direction: column;
  justify-content: center;
}
.wrapper div {
  text-align: left;
}
#find {
  margin-bottom: 20px;
}
.button-list {
  margin-top: 20px;
}
.btn {
  width: 80%;
}
</style>
