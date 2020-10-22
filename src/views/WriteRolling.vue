<template>
  <div class="rolling">
    <div v-if="pageNumber">
      <div class="wrap__container">
      <div>내가 찾는 훈련병은 <input />에요.</div>
      <div>우리만의 암구호는 <input />에요.</div>
      <button @click="toggleNext">새 롤링페이퍼 만들기</button>
      </div>
    </div>

    <div v-else>
      새 롤링페이퍼 만들기
      <router-link to="/rollingpaper">롤링페이퍼 생성</router-link>
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

<style scoped lang="stylus">
  .wrap__container{
    border:1px solid #ffffff;
  }
</style>
