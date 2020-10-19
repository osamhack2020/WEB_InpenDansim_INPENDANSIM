<template>
  <div class="mail">
    <div class="utility-bar">
      <div class="utility-bar__menu">
        <div
          class="utility-bar__menu-item"
          v-for="(content, index) in utilityContents"
          :key="index"
        >
          <svg width="22" height="27">
            <circle
              cx="11"
              cy="11"
              r="10"
              fill="#fff"
              stroke="#ccc"
              stroke-width="0.5"
            />
          </svg>
          <div>{{ content }}</div>
        </div>
      </div>
    </div>
    <div class="writing-area">
      <div class="writing-area__wrap">
        <div class="writing-area__meta">
          <input class="reciever-name" type="text" />
          <span class="reciever-name-label">에게</span>
          <span class="reciever-type-label">군종</span>
          <select class="reciever-type" v-model="armyType">
            <option value="army">육군</option>
            <option value="navy">해군</option>
            <option value="air">공군</option>
            <option value="marine">해병대</option>
          </select>
          <router-link to="/write/send">보내기</router-link>
        </div>
        <div class="writing-area__text">
          <textarea
            :value="mailText"
            @input="mailText = $event.target.value"
            :maxlength="textMaxLength"
          ></textarea>
          <span>{{ `${textCounter}/${textMaxLength}` }}</span>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mailText: "",
      armyType: "army",
      utilityContents: ["뉴스", "단편소설", "한줄명언", "노래가사", "스도쿠"],
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
    },
  },
};
</script>

<style scoped>
.mail {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.utility-bar {
  grid-column: 1 / 2;

  border-right: 1px solid #ddd;
}

.writing-area {
  padding: 5rem 8rem;
}

.writing-area__wrap {
  display: grid;
  grid-template-rows: auto 1fr;
  position: relative;
  padding: 1rem;
  border-radius: 5px;
  height: 100%;
  box-shadow: 0px 0px 5px 2px #ddd;
}

.writing-area__meta {
  padding-bottom: 1rem;
  border-bottom: 2px solid #ddd;
  margin-bottom: 1rem;
}

.reciever-name {
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
  transition: border-color 0.3s ease;
}

.reciever-name:focus {
  border-color: #135fa1;
}

.writing-area__text textarea {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  overflow: auto;
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic, Latin font, sans-serif;
  font-size: 20px;

}

.writing-area__text textarea::selection {
  background-color: #ffbfb9;
}

.writing-area__text span {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.utility-bar__menu {
  border-right: 1px solid #ddd;
  width: 18%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.utility-bar__menu-item {
  margin-top: 1.5rem;
  font-size: 8pt;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.utility-bar__menu-item circle {
  transition: fill 0.3s ease;
}

.utility-bar__menu-item circle:hover {
  fill: rgb(93, 93, 255);
}
</style>
