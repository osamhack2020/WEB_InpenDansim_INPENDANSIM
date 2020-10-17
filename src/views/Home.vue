<template>
  <div class="home">
    <router-link to="/write/mail">인편쓰러가기</router-link>
    <router-link to="/write/rolling">롤링페이퍼 쓰러가기</router-link>
    <!-- <button @click = "getNews" >go!</button> -->
    <!-- <div>News~! {{ news }}</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: "",
      news: "test"
    };
  },
  methods: {
    async getNews() {
      this.news = 'loading...'
      try{
        let response = await fetch("http://api.sbs.co.kr/xml/news/rss.jsp?pmDiv=ranking");
        this.news = await response.text();
      } catch(e) {
        this.news = e;
      }
      // this.news = new window.DOMParser().parseFromString(text, "text/xml");
    }
  }
};
</script>
