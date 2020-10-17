<template>
  <div class="home">
    <button @click="handleDashboard">Dashboard</button>
    <div class="search-soldier">
      <input v-model.trim="searchKeyword" placeholder="훈련병 이름 검색" />
      <button @click="handleSearch" :disabled="searchKeyword === ''">
        Let's write!
      </button>
    </div>
    <button @click = "getNews" >go!</button>
    <div>News~! {{ news }}</div>
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
    handleDashboard() {
      this.$router.push("/dashboard");
    },
    handleSearch() {
      this.$router.push({
        name: "Write",
        params: { soldier: this.searchKeyword }
      });
      this.searchKeyword = "";
    },
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
  },
  mounted: {
    
  }
};
</script>
