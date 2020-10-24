<template>
  <div class="home">
    <Navigation></Navigation>
    <div class="page-1">
      <!-- <router-link to="/write/mail" tag="a">인편쓰러가기</router-link>
      <router-link to="/write/rolling">롤링페이퍼 쓰러가기~</router-link>
      <div></div>
      <textarea :value="text" @input="text = $event.target.value"></textarea>
      <div>{{ text.replace(/\n/gi, "&lt;br&gt;").replace(/'/gi, "‘") }}</div> -->

      <div class="page-1__left">
        <div class="main-text">
          <span>전군 통합<br />단순 심플한<br />인편 작성 서비스.</span>
        </div>
        <div class="sub-text">
          <span>인터넷 편지, 간단하게 작성해보세요.</span>
        </div>
        <div class="btn">
          <div>지금 시작하기</div>
        </div>
      </div>
      <div class="page-1__right">
        <div class="image">
          <div class="top-bar">
            <div class="btn-1"></div>
            <div class="btn-2"></div>
            <div class="btn-3"></div>
          </div>
          <div class="bottom">
            <div class="text-area">
              인편, 일단 쓰고 보자
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-2">
      <div class="page-2__middle">
        <div class="main-text">
          <span>보내기만 하세요.</span>
        </div>
        <div class="main-text">
          <span>인편단심이 채워드립니다.</span>
        </div>
        <div class="sub-text">
          <span>인터넷 편지, 간단하게 작성해보세요.</span>
        </div>
        <div class="btn">
          <div>지금 시작하기</div>
        </div>
        <div class="image">
          <div class="top-bar">
            <div class="btn-1"></div>
            <div class="btn-2"></div>
            <div class="btn-3"></div>
          </div>
          <div class="bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation
  },
  data() {
    return {
      searchKeyword: "",
      news: "test",
      text: "'News'\nParser"
    };
  }
};
</script>

<style scoped lang="scss">
//templates
.main-text {
  font-family: "nanum square";
  font-size: 60pt;
  font-weight: bolder;
}
.sub-text {
  font-family: "nanum square";
  font-size: 20pt;
}
.btn div {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4pt;
  box-shadow: 0 2px 4px 0 #aaa;
  background: #0f4c81;
  font: {
    family: "nanum square";
    size: 13pt;
    weight: lighter;
  }
  color: #fff;

  transition: box-shadow 0.3s ease;
  &:hover {
    cursor: pointer;
  }
  &:active {
    border: none;
    box-shadow: none;
  }
}
.image {
  width: 60%;
  height: 100%;
  border-radius: 7pt;
  box-shadow: 0 2pt 20pt -5pt #000;
  display: grid;
  grid-template-rows: 2rem auto;
  .top-bar {
    background: #f9f9f9;
    border-radius: 7pt 7pt 0 0;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    div {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 0.4rem;
      margin: 0.2rem 0.4rem 0 0;
    }
    .btn-1 {
      background: #fa5f57;
    }
    .btn-2 {
      background: #fcbc28;
    }
    .btn-3 {
      background: #26c93d;
    }
  }
  .bottom {
    border-radius: 0 0 7pt 7pt;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

//first page
.page-1 {
  width: 100vw;
  height: calc(100vh - 64px);
  padding: 10% 13%;
  background: linear-gradient(
    165deg,
    #ffbfb9 0,
    50%,
    #b5bfd4 60%,
    #fff 60% 100%
  );

  display: grid;
  grid-template-columns: 1fr 1fr;
}
.page-1__left {
  .main-text {
    line-height: 105%;
  }
  .sub-text {
    margin: 2rem 0 2rem 0.5rem;
  }
  .btn div {
    margin-left: 0.5rem;
  }
}
.page-1__right {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  .image {
    width: 60%;
    height: 80%;

    .bottom {
      .text-area {
        width: 80%;
        height: 80%;
        border: 3px solid #b5bfd4;
        border-radius: 4pt;
        padding: 1rem;
        font: {
          family: "maruburi";
          size: 13pt;
          weight: bold;
        }
      }
    }
  }
}

.page-2 {
  width: 100vw;
  height: 100vh;
  // padding: 10% 13%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  &__middle {
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-text {
      margin-bottom: 0.5rem;
    }
    .sub-text {
      margin: 2rem 0;
    }
    .btn {
      margin-bottom: 2rem;
    }

    .image {
      width: 20cm;
      height: 10cm;
      box-shadow: 0 2pt 15pt -5pt #000;
    }
  }
}

@media (max-width: 814px) {
  .page-1 {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    padding: 20% 13%;
    .main-text {
      font-size: 25pt;
    }
    .sub-text {
      font-size: 15pt;
      margin: 1rem 0 1rem 0.2rem;
    }
    .btn div {
      margin-left: 0.2rem;
      font-size: 15pt;
      padding: 0.5rem 1rem;
    }
    .image .text-area {
      font-size: 10pt;
    }
  }
}
</style>
