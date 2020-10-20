<template>
  <div class="mail">
    <div class="utility-bar">
      <div class="utility-bar__menu">
        <div
          href="#"
          class="utility-bar__menu-item"
          v-for="(content, index) in utilityContents"
          :key="index"
          @click="utilityContentNum = content.iconRef"
        >
          <img
            :src="getImgUrl(content.iconRef, false)"
            class="icon"
            width="40"
          />
          <img
            :src="getImgUrl(content.iconRef, true)"
            class="icon-hover"
            width="40"
          />
          <div>{{ content.name }}</div>
        </div>
      </div>
      <div class="utility-bar__content">
        <div v-if="utilityContentNum == 'news'">
          <div class="hashtag">
            <span>#바깥소식 #궁금하지?</span>
          </div>
          <div class="navigation">
            <div @click="showHeadlines = true" class="navigation__button">
              정치
            </div>
            <div class="navigation__divider">|</div>
            <div @click="showHeadlines = true" class="navigation__button">
              경제
            </div>
            <div class="navigation__divider">|</div>
            <div @click="showHeadlines = true" class="navigation__button">
              사회
            </div>
            <div class="navigation__divider">|</div>
            <div @click="showHeadlines = true" class="navigation__button">
              문화
            </div>
            <div class="navigation__divider">|</div>
            <div @click="showHeadlines = true" class="navigation__button">
              세계
            </div>
          </div>
          <div v-if="showHeadlines" class="news__headline-container">
            <div @click="showHeadlines = false" class="news__headline">
              헤드라인
            </div>
          </div>
          <div v-else class="news__article">자세한글</div>
        </div>
        <div v-if="utilityContentNum == 'novel'">
          novel
        </div>
        <div v-if="utilityContentNum == 'words'">
          words
        </div>
        <div v-if="utilityContentNum == 'music'">
          songs
        </div>
        <div v-if="utilityContentNum == 'sudoku'">
          sudoku
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
      showHeadlines: true,
      utilityContentNum: "news",
      utilityContents: [
        {
          name: "뉴스",
          iconRef: "news"
        },
        {
          name: "소설",
          iconRef: "novel"
        },
        {
          name: "한줄명언",
          iconRef: "words"
        },
        {
          name: "노래가사",
          iconRef: "music"
        },
        {
          name: "스도쿠",
          iconRef: "sudoku"
        }
      ]
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
  },
  methods: {
    getImgUrl(pic, hover) {
      if (hover)
        return require("../assets/icons/writing_" + pic + "-hover.svg");
      return require("../assets/icons/writing_" + pic + ".svg");
    }
  }
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

  display: grid;
  grid-template-columns: 18% 1fr;
}

.utility-bar__menu {
  border-right: 1px solid #ddd;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.utility-bar__menu-item {
  margin-top: 1.5rem;
  font-size: 9pt;
  position: relative;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.utility-bar__menu-item .icon {
  transition: opacity 0.3s;
}

.utility-bar__menu-item .icon-hover {
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.utility-bar__menu-item:hover .icon {
  opacity: 0;
}

.utility-bar__menu-item:hover .icon-hover {
  opacity: 1;
}

.utility-bar__content {
  height: 100%;
  width: 100%;
  border: 2px solid #dd0;
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
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
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
</style>
