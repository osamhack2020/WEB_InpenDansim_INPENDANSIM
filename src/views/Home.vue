<template>
  <div class="home">
    <Navigation></Navigation>
    <div>

    <router-link to="/write/mail" tag="a">인편쓰러가기</router-link>
    <router-link to="/write/rolling">롤링페이퍼 쓰러가기~</router-link>
    <div></div>
    <textarea :value="text" @input="text = $event.target.value"></textarea>
    <div>{{ text.replace(/\n/gi, "&lt;br&gt;").replace(/'/gi, "‘") }}</div>
    </div>
  </div>
</template>

<script>

import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation
  },
  data() {
    return {
      searchKeyword: "",
      news: "test",
      text: "'News'\nParser"
    };
  }
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-rows: auto 1fr;

  height: 100%;
  z-index: -1;
}
</style>
