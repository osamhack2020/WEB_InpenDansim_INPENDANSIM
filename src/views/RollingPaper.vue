<template>
  <div class="rolling-paper">
    <router-link to="/write/send">보내기</router-link>
    rolling paper page 새로 만드는 롤링페이퍼부분 헤더부분 작성부분 보내기
    저장하기
    <div class="wrapper">
      <div class="box header-content">
        훈련병 정보입력부분 필수 이름: 필수 훈련소: 선택 추가하기 sns공유하기:
        ㅇㅇㅇ에게 응원의 한마디 부탁해요!
      </div>
      <div class="box share-content">
        공유하기
      </div>
      <div class="box rolling-content">
        훈련병에게 보내는 응원메세지들
      </div>
    </div>
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

