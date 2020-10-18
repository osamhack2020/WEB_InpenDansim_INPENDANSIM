<template>
  <div class="write">
    <div v-if="pageNumber">
      <h1>This is a Send page</h1>
      <button @click="toggleSend">Send!</button>
    </div>
    <div v-else>
      <h1>Done!</h1>
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
    }
  }
};
</script>
