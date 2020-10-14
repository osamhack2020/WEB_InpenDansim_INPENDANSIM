<template>
  <!-- <div class="home">
    <button @click="handleDashboard">Dashboard</button>
    <div class="search-soldier">
      <input v-model.trim="searchKeyword" 
        placeholder="훈련병 이름 검색" />
      <button
        @click="handleSearch"
        :disabled="searchKeyword === ''"
      >
        Let's write!
      </button>
    </div>
  </div> -->
  <v-container id="home">
    <v-btn @click="handleDashboard">
      <span>Dashboard</span>
    </v-btn>
    <v-row justify="space-between">
      <v-col cols="20" md="4">
        <v-text-field v-model.trim="searchKeyword" label="훈련병 이름 검색" />
      </v-col>
      <v-col cols="12" md="4">
        <v-btn @click="handleSearch" :disabled="searchKeyword === ''">
          <span>Let's write!</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: ""
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
    }
  }
};
</script>
