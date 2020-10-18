<template>
  <div class="home">
    <router-link to="/write/mail">인편쓰러가기</router-link>
    <router-link to="/write/rolling">롤링페이퍼 쓰러가기</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: "",
      news: "test"
    };
  }
};
</script>
