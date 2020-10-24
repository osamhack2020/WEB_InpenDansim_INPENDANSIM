<template>
<div class='send__wrap'>
  <div class="navigation app-header">
    <div class="nav-div">
      <nav role="navigation" class="nav-menu">
        <router-link to="/" class="logo title">인편단심</router-link>
        <span style="margin: 0 0.7rem;">|</span>
        <span>편지 작성</span>
      </nav>
      <div class="nav-back" @click="handleBack">
        <span>뒤로가기</span>
      </div>
    </div>
  </div>
  <div class="send">
    <div v-if="pageNumber">
      <h1>This is a Send page</h1>
      <button @click="toggleSend">Send!</button>
    </div>
    <div v-else>
      <h1>Done!</h1>
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
    toggleSend() {
      this.pageNumber = !this.pageNumber;
    },
    handleBack() {
      this.$router.push({path: '/write/mail'})
    }
  }
};
</script>

<style scoped lang='scss'>
.navigation {
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
}

.nav-div {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0px 24px;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e3e5e9;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 4px 0 rgba(45, 51, 58, 0.16);
  font-weight: bold;
  color: #111111;
}
.nav__toggle {
  display: none;
}
.nav-menu {
  display: flex;
  align-items: center;
}
.nav-menu > .nav-link {
  padding-left: 40px;
}
.title {
  font-size: 24px;
}
.nav-back {
  height: 2.6rem;
  padding: 0 1.5rem;
  border-radius: 1.3rem;
  transition: background 0.3s ease;
  box-shadow: 0 2px 4px 0 #ccc;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  
  &:hover {
    background: rgba($color: #135fa1, $alpha: 0.2);
  }
  &:active {
    box-shadow: none;
  }
}
</style>