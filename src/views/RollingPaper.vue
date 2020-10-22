<template>
  <div class="rolling-paper">
    rolling paper page
    <router-link to="/write/send">보내기</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 0
    };
  },
  methods: {
    toggleNext() {
      this.pageNumber = !this.pageNumber;
    }
  }
};
</script>

<style>

</style>
