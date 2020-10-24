<template>
  <div class="home">
    
    <router-link to="/write/mail">인편쓰러가기</router-link>
    <router-link to="/write/rolling">롤링페이퍼 쓰러가기</router-link>
    <textarea :value="text" @input="text = $event.target.value"></textarea>
    <div>{{ text.replace(/\n/gi, "&lt;br&gt;").replace(/'/gi, "‘") }}</div>
    <div class="main-covers">
      <div class="cover first-cover">
        <div class="content-area">전체적인 요약
          <!-- ㅇㄹㅇㄹ -->
        </div>
      </div>
      <div class="cover">
        <div class="content-area">기존의 문제</div>
      </div>
      <div class="cover"><div class="content-area">해결방안 1</div></div>
      <div class="cover"><div class="content-area">해결방안 2</div></div>
    </div>
    <!-- Footer -->
    <footer class="page-footer font-small cyan darken-3">
      <!-- Footer Elements -->
      <div class="container">
        <!-- Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">
              <!-- Facebook -->
              <a class="fb-ic">
                <i
                  class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"
                >
                </i>
              </a>
              <!-- Twitter -->
              <a class="tw-ic">
                <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <!-- Google +-->
              <a class="gplus-ic">
                <i
                  class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"
                >
                </i>
              </a>
              <!--Linkedin -->
              <a class="li-ic">
                <i
                  class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"
                >
                </i>
              </a>
              <!--Instagram-->
              <a class="ins-ic">
                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <!--Pinterest-->
              <a class="pin-ic">
                <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      </div>
      <!-- Footer Elements -->

      <!-- Copyright -->
      <P>ⓒ 2020 INPENDANSIM ALL RIGHTS RESERVED.</P>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: "",
      news: "test",
      text: "'News'\nParser"
    };
  }
};
</script>

<style scoped >
.home {
  z-index: -1;
}
.cover {
  height: 80vh;
  width: 100%;
  background-color: #ffd1c8;
  border: 1px solid red;
}
.content-area {
  width: 1200px;
  height: 100%;
  background-color: #61ffbb;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* footer */
.page-footer {
  width: 100%;
  height: 300px;
  /* position: absolute; */
  /* left: 0;
  bottom: 0; */
  background: #ff6f61;
  text-align: center;
  color: white;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-footer > .container {
  margin: 20px 0px;
}
.mb-5 > a {
  margin-left: 10px;
}
</style>