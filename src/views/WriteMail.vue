<template>
  <div class="mail">
    <div class="utility-bar">
      <div class="utility-bar__menu">
        <div
          href="#"
          class="utility-bar__menu-item"
          v-for="(content, index) in utilityContents"
          :key="index"
          @click="utilityContentName = content.iconRef"
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
        <div v-if="utilityContentName == 'news'">
          <div class="hashtag">
            <span>#바깥소식 #궁금하지?</span>
          </div>
          <div class="navigation">
            <div
              @click="
                () => {
                  newsCategoryNum = 0;
                  showHeadlines = true;
                }
              "
              class="navigation__button"
            >
              정치
            </div>
            <div class="navigation__divider">|</div>
            <div
              @click="
                () => {
                  newsCategoryNum = 1;
                  showHeadlines = true;
                }
              "
              class="navigation__button"
            >
              경제
            </div>
            <div class="navigation__divider">|</div>
            <div
              @click="
                () => {
                  newsCategoryNum = 2;
                  showHeadlines = true;
                }
              "
              class="navigation__button"
            >
              사회
            </div>
            <div class="navigation__divider">|</div>
            <div
              @click="
                () => {
                  newsCategoryNum = 3;
                  showHeadlines = true;
                }
              "
              class="navigation__button"
            >
              문화
            </div>
            <div class="navigation__divider">|</div>
            <div
              @click="
                () => {
                  newsCategoryNum = 4;
                  showHeadlines = true;
                }
              "
              class="navigation__button"
            >
              세계
            </div>
          </div>
          <div v-if="showHeadlines" class="headlines-container">
            <div
              v-for="(headline, index) in newsHeadlines[newsCategoryNum]"
              :key="index"
              @click="handleShowNews(newsCategoryNum, index)" 
              class="headline"
            >
              <div>{{ headline.title }}</div>
              <div>{{ headline.content.slice(0, 60) + ' ...' }}</div>
            </div>
          </div>
          <div v-else class="article-container">
            <div class="article__title">{{ newsDetails.title }}</div>
            <div class="article__content">{{ newsDetails.content }}</div>
          </div>
        </div>
        <div v-if="utilityContentName == 'novel'">
          novel
        </div>
        <div v-if="utilityContentName == 'words'">
          words
        </div>
        <div v-if="utilityContentName == 'music'">
          songs
        </div>
        <div v-if="utilityContentName == 'sudoku'">
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
      newsDetails: {
        title: '',
        content: ''
      },
      utilityContentName: "news",
      newsCategoryNum: 0,
      utilityContents: [
        {
          name: "뉴스",
          iconRef: "news",
        },
        {
          name: "소설",
          iconRef: "novel",
        },
        {
          name: "한줄명언",
          iconRef: "words",
        },
        {
          name: "노래가사",
          iconRef: "music",
        },
        {
          name: "스도쿠",
          iconRef: "sudoku",
        },
      ],
      newsHeadlines: [
        [
          {
            title:
              '[단독]"인육 먹고싶다"는 외교관을 모범 공무원 추천한 외교부 - 중앙일보',
            content:
              '공관 직원들에게 “인육 고기를 먹어보려 한다” 등 엽기적 폭언은 물론 예산 유용 의혹까지 불거진 외교관에 대해 외교부가 ‘2019년 상반기 모범 공무원’ 추천 후보자 명단에 올렸던 것으로 확인됐다.<br><br>20일 중앙일보 취재를 종합하면 외교부는 지난해 4~5월 모범 공무원 표창을 위한 20여 명의 후보자 명단에 미국 주재 총영사관에 근무하는 외무영사 A씨를 포함했다. A씨의 당시 공적 사항으로는 “재외 공관에서 예산 낭비를 막았다”는 내용이 포함됐다.<br><br>그러나 국회 외교통일위원회 이태규 국민의당 의원실이 확보한 A씨에 대한 비위 제보는 외교부 추천 내용과는 딴판이었다.<br><br>이태규 의원실에 따르면 A씨는 “인육 고기가 맛있을 것 같다. 인육을 먹어보려 한다”고 하거나, ”일본인 할머니 덕분에 조선인들이 빵을 먹고 살 수 있었다” “네가 퇴사하더라도 끝까지 괴롭힐 거다” 등의 폭언을 했다는 의혹이 지난해 10월 현지 직원들의 신고로 공관에 정식으로 접수됐다.<br><br>당시 신고 내용에는 직원들을 향한 폭언 외에도 사문서위조, 물품 단가 조작, 이중장부 지시, 예산 유용, 특근 매식비 집행서류 허위 작성 등 16건에 달하는 비위가 접수됐다고 한다.<br><br>사문서위조 건과 관련해선 지난해 4월 총영사관이 신청사 이전을 위해 가구와 집기를 구매하는 과정에서 A씨가 직원에 현지 업체명을 도용해 물품 구매 허위 견적서를 쓰게 한 뒤 국고를 부풀려 배정받은 것으로 나타났다. 이로 인해 총영사관이 ‘자산취득 업무 부적정’을 이유로 별도의 ‘기관 주의’ 처분까지 받았다.<br><br>문제가 불거진 시기는 외교부가 A씨를 “예산 집행을 우수하게 했다”며 포상 후보자 명단에 올린 시기와 일치한다. 외교부는 이와 관련 “포상 후보자 명단 공개는 검증을 위한 것으로, 최종적으로 A씨는 포상에서 제외됐다”는 입장을 밝혔다.<br><br>직원들의 신고가 잇따르면서 외교부 감사담당관실은 그해 11월 현지 공관에 대한 감사에 착수했고, A씨에 대해선 사문서위조 등 일부를 인정해 ‘장관 경고‘라는 서면 경고 처분을 내렸다.<br><br>이태규 의원실 관계자는 “A씨는 총영사관 부임 직전 감사담당관실에 근무했다”며 “막말 외에 예산 유용 등 중한 비위 의혹이 제기됐는데도 감사관실이 인사상 불이익이 없는 경고를 한 것은 ‘동료 봐주기 징계’를 했다는 비판을 받을 수밖에 없다”고 지적했다.<br><br>외교부는 이에 대해 "제보 내용에 대해 담당 부서에서 정밀조사를 벌였고 그 결과에 따라 적절한 조치를 취했다"라고 입장을 내놨다.<br><br>하지만 문제가 된 A씨의 인육 발언과 관련해선 외교부 내에서도 “상식을 벗어난 발언”이라며 술렁이는 분위기다.<br><br>다만 한 소식통은“문제가 되는 인육 발언은 감사 시점에서는 제기되지 않았던 것으로 안다”고 말했다.<br><br>정효식·이유정 기자 uuu@joongang.co.kr',
          },
          {
            title: '공군 사병 ‘치료 휴가‘ 내고 무단출국…"여친 만나려" - JTBC',
            content:
              '[앵커]<br><br>한 공군 병사가 몸이 아프다며 휴가를 나갔는데 제때 복귀하지 않고 해외로 무단 출국했습니다. 일종의 ‘탈영‘인데요. 닷새 만인 오늘(20일) 귀국하긴 했는데, 여자친구를 만나러 가려고 출국했다고 합니다.<br><br>이한길 기자입니다.<br><br>[기자]<br><br>충북 청주의 한 공군부대에서 근무하는 A상병은 지난 14일 1박 2일로 청원 휴가를 나갔습니다.<br><br>침샘 수술을 위해 병원을 다녀오겠다며 휴가를 낸 겁니다.<br><br>하지만 A상병은 다음날 부대에 복귀하지 않고 인천공항을 통해 카타르를 거쳐 이탈리아 밀라노로 무단 출국했습니다.<br><br>규정상 병사가 해외여행을 가려면 보름 전 지휘관의 승인을 받아야 하는데, A씨는 이런 절차를 밟지 않았습니다.<br><br>출국심사는 정상적으로 받았지만 출입국관리사무소는 A씨가 현역 병사라는 사실을 전혀 알지 못했습니다.<br><br>군 관계자는 "법무부 출입국관리시스템에는 만 25세가 넘은 병역기피 우려자 명단만 표시된다"고 했습니다.<br><br>A상병이 복귀하지 않자 해당 부대는 소재 파악에 나섰고 뒤늦게 출국 사실을 확인했습니다.<br><br>군은 가족을 통해 A상병과 연락을 시도했고 설득 끝에 출국 닷새 만인 오늘 오후 한국으로 돌아왔습니다.<br><br>A상병은 여자친구를 만나기 위해 출국했다고 주장한 걸로 알려졌습니다.<br><br>군사경찰은 코로나19 검사 등이 끝나는 대로 A상병을 탈영 등의 혐의로 조사할 방침입니다.<br><br>(영상디자인 : 박성현 / 영상그래픽 : 김정은)<br><br>이한길 기자 (oneway@jtbc.co.kr) [영상편집: 이지훈]',
          },
          {
            title:
              "“재산세 완화 추진…종부세는 유지” ‘부동산 늪’에 빠진 민주당 - 동아일보",
            content:
              "더불어민주당 한정애 정책위의장이 20일 “재산세 부담을 최소화하겠다”면서 재산세 완화 가능성을 내비쳤다. 다만 “종합부동산세 완화 계획은 없다”고 일축했다. 집값 상승과 전세난 심화로 악화된 여론을 달래기 위해 재산세를 일부 낮추면서도 대상자가 많지 않은 종부세는 유지하겠다는 뜻이다.<br><br>8월 초 임대차 3법의 국회 통과 이후 전세난 등으로 민심의 역풍을 맞고 있는 민주당이 ‘부동산 늪’에서 벗어나기 위해 안간힘을 쓰는 모습이다. 전세난이 내년 초까지 이어질 것으로 예상되는 만큼, 자칫 그 여파가 4월 서울·부산시장 보궐선거까지 미칠 수 있다는 우려 때문이다.<br><br>한 정책위의장은 이날 국정감사 대책회의에서 “공시가격 현실화를 고려해 재산세를 조정해야 한다는 의견을 정부에 전달했다”며 “추후 당정협의를 통해 결론 낼 것”이라고 밝혔다. 한 정책위의장은 회의 직후 기자들과 만난 자리에서 “공시가격 현실화를 통해 세금이 올라가는데, 정부가 세금을 더 받으려고 한 건 아니기 때문에 조정을 통해 재산세 부담을 최소화하겠다”고 설명했다. 당 관계자는 “재산세율을 조정할지, 공시가격 현실화의 속도를 늦출지 등 구체적인 방법은 당정이 추가로 협의해야 한다”고 말했다.<br><br>이는 전날(19일) 이낙연 대표가 당 최고위원회의에서 “1가구 장기보유 실거주자에게 세금 등에서 안심을 드리는 방안을 중심으로 정책을 마련하겠다”고 언급한 것과도 일맥상통한다. 올 7, 9월 재산세 고지서가 발송된 후 ‘재산세가 30%까지 뛰었다’는 불만이 쏟아지자 조정에 나선 것으로 풀이된다.<br><br>다만 일각에서 요구하고 있는 종부세 완화에 대해 한 정책위의장은 “민주당과 정부는 이를 전혀 검토한 바도 없고 계획도 없다”고 일축했다. 이 대표가 4·15총선 유세 기간에 강남 3구 유세 현장에서 종부세 완화를 암시했지만 다시 선을 그은 것. 하지만 같은 당 정일영 의원은 이날 과세표준 3억 원 이하(기준시가 약 12억 원)인 1가구 1주택자, 특히 만 60세 이상의 세 부담을 완화하는 내용의 종부세법 개정안을 발의하기도 했다.<br><br>세금 완화와 함께 민주당은 전월세와 주택 정책을 다룰 ‘미래 주거 추진단’도 출범시켰다. 이 대표는 전날 최고위원회의에서 “우리는 예전의 부동산 정책에 대한 반성에서 새로운 접근을 시작해야 한다”면서 추진단을 공식화했다.<br><br>민주당이 이처럼 부동산 관련 추가 대책을 속속 내놓고 있는 것은 부동산 민심이 계속 악화되는 데다 전셋값 상승세가 내년 초까지 이어질 수 있다는 판단 때문이다. 한국감정원에 따르면 10월 둘째 주 서울의 전셋값 상승률은 첫째 주 대비 0.08% 올라 68주 연속 상승했다. 김현미 국토교통부 장관은 16일 국회 국정감사에서 “전세시장 불안이 내년 초까지 계속될 것으로 보느냐”는 민주당 김회재 의원의 질문에 “불안정하다기보다는 시장이 안정을 찾을 때까지 일정 시간이 걸릴 것으로 생각한다”고 했다.<br><br>여기에 내년 4월 서울·부산시장 보궐선거를 치러야 하는 민주당으로선 마음이 급할 수밖에 없다. 한 민주당 관계자는 “(박원순 전 시장 사건으로) 안 그래도 어려운 서울시장 선거에 전세난까지 악재로 더해질 수 있어 우려가 큰 상황”이라며 “대안을 고민하고 있다”고 말했다.<br><br>최혜령 기자 herstory@donga.com",
          },
          {
            title:
              "윤석열 거취 어디로? 영입론 부상도…셈법 복잡해진 야권 - 동아일보",
            content:
              "추미애 법무부 장관이 윤석열 검찰총장 가족을 겨냥한 수사지휘권을 발동하며 거취를 놓고 다양한 관측이 나오자 보수야권의 시선이 다시 한 번 윤 총장에게 쏠리고 있다.<br><br>국민의힘 핵심 관계자는 20일 “윤 총장이 더 버티기 힘든 상황이 올 것을 대비해 ‘윤석열 변수’가 서울시장 선거 등에 미칠 영향을 준비해야 한다”고 말했다. 추 장관의 윤 총장 압박은 윤 총장의 정치권 데뷔를 앞당기는 ‘동전의 양면’과 같다는 인식에 따른 것이다. 이날 국민의힘에선 “법무부 장관이 검찰총장을 제거한 사건”(최형두 의원) “검찰총장이 사퇴하라는 얘기”(전주혜 의원) 등 윤 총장의 거취를 둘러싼 발언이 이어지기도 했다.<br><br>하지만 윤 총장 영입이 가시화되더라도 여전히 다양한 변수가 남아있다. 윤 총장 부친의 고향인 충청권 의원들을 중심으로 현 시점에서 각종 여론조사에서 범야권 인사 중 가장 높은 지지율을 보이는 윤 총장을 대선주자로 삼아야 한다는 주장이 나오지만, 국민의힘의 옛 주류였던 친박(친박근혜) 친이(친이명박)계 출신들 사이엔 “보수의 씨를 말린 사람이 대선 후보가 되는 건 부적절하다”는 반론이 많다. 서울중앙지검장 시절 윤 총장이 문재인 정부의 이른바 ‘적폐수사’에 앞장서면서 전 정권 인사들을 무리하게 수사했다는 것이다. 김용판 의원은 “윤 총장을 영입하면 보수 분열이 온다. 이명박 박근혜 전 대통령을 평가하는 보수 진영에서는 절대 지지하지 않을 것”이라고 공개 반대를 선언했다.<br><br>윤 총장과 함께 현 정부에 각을 세워온 김동연 전 경제부총리 겸 기획재정부 장관과 최재형 감사원장에 대한 관심도 본격적으로 달아오르고 있다. 하지만 이들에 대해서도 “김 전 부총리는 박근혜 정부 국무조정실장으로 재직할 때 알려지지 않은 실책이 있었다. 반기문 전 유엔 사무총장 등 정치적 검증이 되지 않은 판검사, 관료 출신을 바로 대선주자로 내세웠다가 망한 케이스를 잊었느냐”는 얘기가 나오는 등 당내 반대가 없지는 않다. 김종인 비상대책위원장은 윤 총장에 대해선 “검찰총장으론 괜찮은 사람”, 김 전 부총리에 대해선 “본인이 원해야 받고(영입) 말고 할 것”이라는 등 여지를 남기는 발언을 내놓은 바 있다.<br><br>최우열 기자 dnsp@donga.com<br>",
          },
          {
            title:
              '조국 "룸살롱 접대비 5인 1000만원? …양주 만으론 힘들어" - 아시아경제',
            content:
              '[아시아경제 임주형 기자] 조국 전 법무부 장관이 ‘검사 접대 의혹‘ 사건과 관련, 단순히 술접대에 그치지 않았을 수 있다는 의혹을 제기했다. 김봉현 전 스타모빌리티 회장이 현직 검사들에게 접대를 하며 치른 양주 가격이 지나치게 높다는 것이다.<br><br>조 전 장관은 20일 자신의 트위터에 쓴 글에서 "김봉현이 청담동 룸살롱에서 특수부 검사 출신 A 변호사와 함께 접대한 현직 검사들이 법무부 감찰과 남부지검 수사에 의해 특정되고 있다"며 김봉현의 편지에 따르면 접대비가 5인 1000만원이다"라고 밝혔다.<br><br>이어 "고급 양주 여러 병 마셨더라도 1000만원이 되기는 어렵다"고 지적했다. 술접대 이상이 있었을 가능성을 제기한 것이다.<br><br><br>조국 전 법무부 장관은 20일 자신의 트위터를 통해 ‘검사 접대 의혹‘ 사건 관련, 해당 검사들이 성접대만 받지 않았을 가능성을 제기했다. / 사진=트위터 캡처<br><br><br>조 전 장관은 "룸살롱 조사를 하면 바로 나올 것"이라고 덧붙였다.<br><br>일부 누리꾼들은 조 전 장관의 글에 답글을 달아 술집에서의 성매매, 혹은 다른 뇌물 등이 오갔을 가능성을 거론하기도 했다.<br><br>앞서 김 전 회장은 지난 16일 발표한 옥중 입장문에서 "지난해 7월 검찰 전관 출신 A 변호사를 통해 현직 검사 3명에게 1000만원 상당의 술 접대를 했다"고 주장한 바 있다.<br><br>이어 "회식 참석 당시 추후 라임 수사팀에 합류할 검사들이라고 소개를 받았는데, 실제 1명은 수사팀에 참가했다"고 덧붙였다.<br><br>임주형 기자 skepped@asiae.co.kr',
          },
        ],
      ],
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
  methods: {
    getImgUrl(pic, hover) {
      if (hover)
        return require("../assets/icons/writing_" + pic + "-hover.svg");
      return require("../assets/icons/writing_" + pic + ".svg");
    },
    handleShowNews(cat, ind) {
      this.showHeadlines = false;
      this.newsDetails = {...this.newsHeadlines[cat][ind]}
    }
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

.headline {
  margin: 1rem 0;
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
