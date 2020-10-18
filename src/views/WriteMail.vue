<template>
  <div class="mail">
    <div class="write__utility-bar">Utility componenets area</div>
    <div class="write__writing-area">
      <div class="write__meta">
        <span class="write__reciever-name-label">이름</span>
        <input class="write__reciever-name" type="text" />
        <span class="write__reciever-type-label">군종</span>
        <select class="write__reciever-type" v-model="armyType">
          <option value="army">육군</option>
          <option value="navy">해군</option>
          <option value="air">공군</option>
          <option value="marine">해병대</option>
        </select>
        <router-link to="/write/send">보내기</router-link>
      </div>
      <div class="write__text">
        <textarea
          :value="mailText"
          @input="mailText = $event.target.value"
        ></textarea>
        <span>{{ `${textCounter}/${textMaxLength}` }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mailText: "",
      armyType: "army"
    };
  },
  computed: {
    textCounter: function() {
      return this.mailText.length;
    },
    textMaxLength: function() {
      switch (this.armyType) {
        case "army":
          return 120;
        case "navy":
          return 1000;
        case "air":
          return 1200;
        case "marine":
          return 500;
      }
      return 0;
    }
  }
};
</script>

<style scoped>
.mail {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;

  margin: 1rem;
}

.write__utility-bar {
  grid-column: 1 / 2;

  border: 1px solid #000;
}

.write__writing-area {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5rem;
}

.write__text {
  position: relative;
}

.write__text textarea {
  display: block;
  width: 100%;
  height: 100%;
}

.write__text span {
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
}
</style>
