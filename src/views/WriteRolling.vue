<template>
  <div class="rolling">
    <div v-if="pageNumber">
      <div class="wrap__container">
      <div>내가 찾는 훈련병은 <input />에요.</div>
      <div>우리만의 암구호는 <input />에요.</div>
    <div v-if="pageNumber" class="wrapper search-roll">
      <div class="find">
        내가 찾는 훈련병은 <br />
        <input
          maxlength="6"
          placeholder="ㅇㅇㅇ"
          value=""
          style="box-sizing: content-box; width: 200px; border: 0px; font-size: 34px; outline: none; display: inline-block; font-weight: lighter; padding: 10px; text-align:right"
        />에요.
      </div>
      <div class="guho">
        우리만의 암구호는<br />
        <input
          type="password"
          maxlength="10"
          placeholder="****"
          value="1234"
          style="box-sizing: content-box; width: 77px; border: 0px; font-size: 34px; outline: none; display: inline-block; padding: 10px; font-weight: lighter; margin-left:120px;"
        />에요.
      </div>
      <button @click="toggleNext">새 롤링페이퍼 만들기</button>
      </div>
    </div>

    <div v-if ="abc">
      새 롤링페이퍼 만들기
      <router-link to="/rollingpaper">롤링페이퍼 생성</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: true
    };
  },
  methods: {
    toggleNext() {
      this.pageNumber = !this.pageNumber;
    }
  }
};
</script>

<style scoped >
  .wrap__container{
    border:1px solid #ffffff;
  }
</style>
<style scoped>
.rolling {
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
}
.search-roll {
  max-width: 444px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
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
</style>
