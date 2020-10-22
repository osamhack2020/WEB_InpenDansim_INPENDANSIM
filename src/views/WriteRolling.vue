<template>
  <div class="rolling">
    <div v-if="pageNumber" class="wrapper search-roll">
      <div class="find">
        내가 찾는 훈련병은 <br />
        <input
          v-model="message"
          maxlength="6"
          placeholder="ㅇㅇㅇ"
          value=""
          style="box-sizing: content-box; width: 200px; border: 0px; font-size: 34px; outline: none; display: inline-block; font-weight: lighter; padding: 10px; text-align:right"
        />에요.
      </div>
      <div class="guho">
        우리만의 암구호는<br />
        <input
          v-model="guho"
          type="text"
          maxlength="10"
          placeholder="****"
          value="1234"
          style="box-sizing: content-box; width: 77px; border: 0px; font-size: 34px; outline: none; display: inline-block; padding: 10px; font-weight: lighter; margin-left:120px;"
        />에요.
      </div>

      <div class="fixed">
        <button
          type="button"
          class="btn btn-primary"
          @click="findRolling(message, guho)"
        >
          롤링페이퍼 참가하기
        </button>
      </div>

      <div v-if="message === '김태윤' && guho === '4321'">
        있어요!!!!! ->바로 이동
      </div>
      <div v-else>
        찾는 롤링페이퍼가 없네요...
        <router-link to="/rollingpaper" class="btn btn-primary"
          >롤링페이퍼 새로 만들기</router-link
        >
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
      guho: "1234",
    };
  },
  methods: {
    toggleNext() {
      // this.pageNumber = !this.pageNumber;
      this.start = !this.start;
    },
    findRolling: function(person, pass) {},
  },
};
</script>

<style scoped>
.rolling {
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
}
.search-roll {
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
  margin-top: 60px;
  text-align: left;
  font-weight: bold;
  line-height: 60px;
}
.guho,
.find {
  /* text-align: right; */
}
.btn-primary {
  width: 80%;
}
</style>
