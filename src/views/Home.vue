<template>
  <div class="home">
    <router-link to="/write/mail">인편쓰러가기</router-link>
    <router-link to="/write/rolling">롤링페이퍼 쓰러가기</router-link>
    <div></div>
    <textarea :value="text" @input="text = $event.target.value"></textarea>
    <div> -> {{ text.replace(/\n/ig, '&lt;br&gt;').replace(/'/gi,'‘') }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: "",
      news: "test",
      text: "'News'\nParser"
    };
  }
};
</script>
