<template>
  <div class="mail__wrap">
    <div class="navigation app-header">
      <div class="nav-div">
        <nav role="navigation" class="nav-menu">
          <router-link to="/" class="logo title">
            <img src="../../public/favicon.png" alt="logo" width="24px" />
            <div style="white-space:nowrap;">인편단심</div>
          </router-link>
          <span style="margin: 0 0.7rem;">|</span>
          <span>편지 작성</span>
        </nav>
        <div class="nav-send" @click="handleSend()">
          <span>보내기</span>
        </div>
      </div>
    </div>
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
              <div class="title">오늘의 뉴스 헤드라인</div>
            </div>

            <div class="navigation btn-group">
              <div
                class="btn btn-secondary"
                v-for="(categoryName, index) in newsCategories"
                @click="handleShowCategory(index)"
                :class="[
                  'navigation__button',
                  { focus: newsCategoryNum == index }
                ]"
                :key="index"
              >
                {{ categoryName }}
              </div>
            </div>
            <div v-if="showHeadlines" class="headlines-container">
              <div
                v-for="(headline, index) in newsHeadlines[newsCategoryNum]"
                :key="index"
                class="headline"
              >
                <div
                  class="title"
                  @click="handleShowNews(newsCategoryNum, index)"
                >
                  {{ headline.title }}
                </div>
                <div class="content">
                  {{ headline.content.slice(0, 60) + " ..." }}
                </div>
                <div
                  class="add-btn"
                  @click="
                    handleAdd(
                      headline.title +
                        '\n' +
                        headline.content.replace(/&lt;br&gt;/gi, ' ')
                    )
                  "
                >
                  추가하기 >>
                </div>
              </div>
            </div>
            <div v-else class="article-container">
              <div class="title">{{ newsDetails.title }}</div>
              <div class="content" v-html="newsDetails.content"></div>
            </div>
          </div>
          <div v-if="utilityContentName == 'novel'">
            novel
          </div>
          <div v-if="utilityContentName == 'words'">
            words
          </div>
          <div v-if="utilityContentName == 'music'">
            <div class="hashtag">
              <span>#들려주진 #못하지만 #읽어줄게</span>
              <div class="title">오늘은 내가 DJ</div>
            </div>
            <div class="playlists_container">
              <div
                v-for="(playlist, index) in musicPlaylists"
                class="playlist"
                :key="index"
              >
                <div class="playlist__title">{{ playlist.title }}</div>
                <div
                  class="playlist__song"
                  v-for="(song, index) in playlist.songs"
                  :key="index"
                >
                  💿
                  <span class="title"> {{ song.title }} </span>
                  <span class="artist">{{ song.artist }}</span>
                  <div class="add-btn" @click="handleAdd(song.lyrics)">
                    추가하기 >>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="utilityContentName == 'sudoku'">
            sudoku
          </div>
        </div>
      </div>
      <div class="writing-area">
        <div class="writing-area__wrap">
          <div class="writing-area__meta">
            <select class="reciever-type" v-model="armyType">
              <option value="army">육군</option>
              <option value="navy">해군</option>
              <option value="air">공군</option>
              <option value="marine">해병대</option>
            </select>
            <input class="reciever-name" type="text" />
            <span
              class="reciever-name-label"
              :value="reciever"
              @input="reciever = $event.target.value"
              >에게</span
            >
          </div>
          <div class="writing-area__text">
            <textarea
              id="writing-area"
              :value="mailText"
              @input="mailText = $event.target.value"
              :maxlength="textMaxLength"
              spellcheck="false"
              @keydown.ctrl.90="mailText = mailText.slice(0, cursor)"
              :class="{ bigger: armyType == 'army' }"
            ></textarea>
            <span class="writing-area__couter">{{
              `${textMaxLength}자 중 ${textCounter}자`
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="alert-popup__wrap">
      <transition name="popup">
        <div class="alert-popup" v-if="showAlert">
          <span>{{ alertMessage }}</span>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cursor: 0,
      showAlert: false,
      alertMessage: "",
      mailText: this.$route.params.mailText ? this.$route.params.mailText : "",
      armyType: this.$route.params.armyType
        ? this.$route.params.armyType
        : "army",
      reciever: this.$route.params.reciever ? this.$route.params.reciever : "",
      showHeadlines: true,
      newsDetails: {
        title: "",
        content: ""
      },
      utilityContentName: "news",
      newsCategoryNum: 0,
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
      ],
      newsCategories: ["정치", "경제", "사회", "문화", "세계"],
      newsHeadlines: [
        [
          {
            title: '[단독]"인육 먹고싶다"는 외교관을 모범 공무원 추천한 외교부',
            content:
              '공관 직원들에게 “인육 고기를 먹어보려 한다” 등 엽기적 폭언은 물론 예산 유용 의혹까지 불거진 외교관에 대해 외교부가 ‘2019년 상반기 모범 공무원’ 추천 후보자 명단에 올렸던 것으로 확인됐다.'  },
          {
            title: '공군 사병 ‘치료 휴가‘ 내고 무단출국…"여친 만나려"',
            content:
              '[앵커]한 공군 병사가 몸이 아프다며 휴가를 나갔는데 제때 복귀하지 않고 해외로 무단 출국했습니다. 일종의 ‘탈영‘인데요. 닷새 만인 오늘(20일) 귀국하긴 했는데, 여자친구를 만나러 가려고 출국했다고 합니다.  이한길 기자입니다.' },
          {
            title: "“재산세 완화 추진…종부세는 유지” ‘부동산 늪’에 빠진 민주당",
            content:
              "더불어민주당 한정애 정책위의장이 20일 “재산세 부담을 최소화하겠다”면서 재산세 완화 가능성을 내비쳤다. 다만 “종합부동산세 완화 계획은 없다”고 일축했다. 집값 상승과 전세난 심화로 악화된 여론을 달래기 위해 재산세를 일부 낮추면서도 대상자가 많지 않은 종부세는 유지하겠다는 뜻이다."
          },
          {
            title: "윤석열 거취 어디로? 영입론 부상도…셈법 복잡해진 야권",
            content:
              "추미애 법무부 장관이 윤석열 검찰총장 가족을 겨냥한 수사지휘권을 발동하며 거취를 놓고 다양한 관측이 나오자 보수야권의 시선이 다시 한 번 윤 총장에게 쏠리고 있다."
          },
          {
            title: '조국 "룸살롱 접대비 5인 1000만원? …양주 만으론 힘들어"',
            content:
              '[아시아경제 임주형 기자] 조국 전 법무부 장관이 ‘검사 접대 의혹‘ 사건과 관련, 단순히 술접대에 그치지 않았을 수 있다는 의혹을 제기했다. 김봉현 전 스타모빌리티 회장이 현직 검사들에게 접대를 하며 치른 양주 가격이 지나치게 높다는 것이다.'
          }
        ],
        [
          {
            title: '무섭게 추락하는 환율…"바이든 당선 땐 1100원 무너질 수도"',
            content:
              "다음달 3일 열리는 미국 대통령 선거에서 바이든 후보가 승리할 경우 원화와 위안화의 동반 초강세 흐름이 이어질 것이라는 분석이 많다.  바이든 후보는 임기 4년 동안 기후변화에 대응하기 위해 2조달러를 투자한다는 대선 공약을 발표했다."
          },
          {
            title: "‘그래도 오를 거야!‘...2030 세대 ‘영끌‘ 매수 최고",
            content:
              "[앵커]서울 아파트 가격이 잠시 숨 고르기에 들어가면서 최근까지 치솟던 매매가가 보합세를 유지하고 있는데요.<br><br>하지만 오랜 기간 상승이 이어지다 보니, 더 오를 것이라는 전망에다 지금 사지 못하면 앞으로 내 집 마련이 어려울 것이라는 젊은 세대의 불안감이 커지면서 이른바 ‘2030‘의 매수세가 역대 최고를 기록했습니다.<br><br>김현우 기자의 보도입니다.<br><br>[기자]<br>지난주 서울 강남구의 아파트값 변동률은 마이너스 0.01%!<br><br>18주 만에 하락 전환했습니다.<br><br>하지만 강남 이외 지역의 소형 평수를 중심으로 이른바 ‘가격 키 맞추기‘가 계속되고 있습니다.<br><br>이 때문에 서울 지역 전체 아파트 가격 상승률은 8주 연속 0.01% 수준을 유지하고 있습니다.<br><br>초강력 대출 규제와 세금 인상, 여기에다 자금출처 조사까지!<br><br>정부가 투기 수요에 대한 전방위 압박에 나섰지만, 서울 아파트값은 관망세일 뿐 하락 장으로 판단하긴 이른 감이 있습니다.<br><br>‘더 오를 거란‘ 불안 심리는 30대는 물론 20대 이하까지 자극하고 있습니다.<br><br>지난달 서울 아파트의 30대 거래량은 전체의 37%로 역대 최고 수준을 기록했습니다.<br><br>20대 이하의 매수세도 강해져, 지난달 거래된 서울 아파트 매매 10건 가운데 4건 이상을 2030이 사들인 셈입니다.<br><br>이런 ‘사자!‘ 행렬은 최근 매물 부족에다 가격이 치솟고 있는 전세 시장의 영향도 큽니다.<br><br>[30대 직장인 : 주변 전세 시세가 너무 많이 올라서 전세를 다시 사는 걸 포기하고 지금 살고 있는 지역이 아니라 서울 외곽이나 경기도 쪽으로 매매를 알아보고 있습니다.]<br><br>3기 신도시 등의 청약 일정이 공개됐지만, 내 집 마련에 대한 불안감을 잠재우긴 역부족이란 평가가 나오는 이유입니다.<br><br>[김규정 / 한국투자증권 자산승계연구소장 : (서울 아파트 가격이) 본격적인 하락세로 이어지지 않고 수요자들이 여전히 추가 상승의 기대를 가지고 시장에서 머물고 있기 때문에 당분간 (부동) 자금과 저금리 효과로 인해서 가격 하락세가 나타나기는 쉽지 않을 것으로 보입니다.]<br><br>최근 들어 서울과 수도권의 신규 아파트 공급 물량이 줄고 있고, 청약 대기 수요는 늘고 있어 부동산 시장은 관망세 속에 가격 불안이 이어질 전망입니다.<br><br>YTN 김현우[hmwy12@ytn.co.kr]입니다.<br>"
          },
          {
            title: "세계 D램 70%, 낸드 56% 장악…K메모리 `압도적 투톱`",
            content:
              '삼성전자가 인공지능(AI)·머신러닝 등에 특화된 고대역폭 메모리(HBM2E) 제품을 올 2월 최초로 선보이자 SK하이닉스는 이달 차세대 D램인 DDR5를 세계 최초로 출시하는 등 삼성전자와 SK하이닉스는 앞서거니 뒤서거니 하며 글로벌 반도체 시장, 나아가 정보통신기술(ICT) 산업 발전을 이끌어 왔다.'
          },
          {
            title: '"집없어? 결혼안해" 월세거주시 결혼 가능성 65% `뚝`',
            content:
              '경기도 안양에 사는 직장인 이유민씨(38·가명)는 최근 친구들에게 ‘비혼족‘(非婚族) 선언을 했다. 30대 중반 늦깎이로 입사해 회사 근처에서 월세를 살고 있는 이씨는 "모아 놓은 돈은 없어 집 사기는 불가능한데 선 보러 나가도 집 없다고 하면 퇴짜 맞기 일쑤"라며 "끙끙 앓으며 사는 바에 차라리 마음이라도 편하게 혼자 살겠다"고 말했다.<br><br>이씨 같은 월세 거주자가 자기 집이 있는 사람에 비해 결혼 가능성이 65% 적다는 연구 결과가 나왔다. 월세 거주자는 자녀 출산에도 영향을 미쳐 무자녀 가구가 첫째 아이를 낳을 확률 역시 56% 감소한다는 분석이다.<br><br>21일 한국경제연구원은 ‘주거 유형이 결혼과 출산에 미치는 영향‘ 보고서를 통해 주거요인과 결혼·출산간 인과 관계를 분석하니 이같은 결과가 나왔다고 21일 밝혔다.<br><br>한경연은 한국노동연구원이 매년 1차례 국내 가구 경제활동과 사회생활 등을 조사하는 한국노동패널 15년치 자료(2004~2018년)를 통해 주거와 결혼 여부 등 데이터가 일관성 있게 갖춰진 1741명을 분석했다. 예컨대 2004년 월세에 살면서 미혼이라고 응답한 가구주 A씨가 2005년에도 월세·미혼이라고 응답했으면 이후로도 계속 같은 방식으로 추적 조사하는 식이다.<br><br>한경연은 조사 기간 동안 A씨처럼 월세 거주하면서 끝까지 미혼인 경우가 얼마나 되는지, 혹은 집을 사서 자가 거주 했을 때 미혼으로 남는 경우가 얼마나 되는지 등 거주형태·결혼·출산간 인과 관계를 확률 모델을 통해 분석했다.<br><br>자가 거주자는 모든 조건이 일정하다는 가정 하에 결혼 가능성이 18.9%, 월세 거주자는 6.6%로 나타나 격차가 컸다.<br><br>조사 기간 100명 가운데 자가거주자가 19명이 결혼할 때 월세 사는 사람은 7명 정도만 결혼했다는 얘기다. 자가 거주와 비교할 때 월세로 사는 사람의 결혼 확률은 65.1%가 적었다. 마찬가지로 전세 거주의 경우 결혼 가능성은 14.5%로, 자가 거주자 대비 결혼 확률은 23.4% 낮았다.<br><br>한경연은 거주 행태에 따라 자녀가 없는 가구가 첫째 아이 출산하는데도 영향을 미쳤다고 밝혔다. 월세 거주는 자가 거주와 비교해 첫째 자녀 출산 가능성이 55.7%나 줄었고, 전세 거주 시 첫째 자녀 출산 가능성은 자가 거주보다 28.9% 감소했다.<br><br>다만 거주 유형이 첫째 자녀 출산에는 유의미한 영향을 미쳤지만 한 자녀 가구의 둘째 자녀 출산에는 별다른 영향을 주지는 않았던 것으로 조사됐다.<br><br><br>oecd 합계출산율 [자료 = OECD]<br>유진성 한경연 경제연구실 연구위원은 "주거유형에 따라 결혼과 출산율이 달라지는 만큼 저출산 문제 해결과 인구감소 완화 측면에서 부동산 문제는 신중히 접근해야 한다"며 "갑작스러운 월세 전환은 무주택자 주거 부담을 늘리고, 향후 생산인구에도 악영향을 미칠 수 있다"고 지적했다.<br><br>한경연은 "최근 부동산 규제 정책과 임대차 3법 시행으로 서울 지역에서 전세난이 심해지고, 월세 매물 비중이 전세보다 높아지는 현상이 발생하고 있다"며 "주거 부담을 경감하기 위해선 부동산 규제를 완화하고, 주택공급을 늘려야 한다"고 강조했다.<br><br>[김정환 기자]'
          }
        ],
        [
          {
            title:
              "독감백신 접종후 사망자 총 9명…2명 아나필락시스 쇼크 가능성(종합)",
            content:
              "전날 기준으로 사망 사례를 포함해 독감백신 접종 후 이상반응 신고는 총 431건으로 집계됐다.<br><br>이상반응을 유형별로 보면 알레르기가 119건으로 가장 많았고 이어 국소반응 111건, 발열 93건 등의 순이었다. 기타 이상반응은 104건이다.<br><br>이상반응 사례 중 유료 접종자가 154명, 무료 접종자가 277명이다.<br><br>이 가운데 ‘상온노출‘이나 ‘백색입자‘ 논란으로 수거 또는 회수 대상인 백신을 접종받고 이상반응을 신고한 사례는 84건으로, 대부분 국소반응·발열·알레르기 등 경증이었다.<br><br>이날 기준으로 전국에서 독감 백신 접종을 받은 사람은 약 1천297만명이다. 이 중 국가예방접종사업으로 무료접종을 받은 사람은 836만명이고, 유료접종자는 461만 명이다.<br><br>국가예방접종 대상자 가운데는 만 12세 이하 어린이의 68.8%, 임신부의 34.1%, 만 13∼18세 청소년의 48.2%, 어르신의 31.1%가 각각 접종을 마쳤다.<br><br>한편 질병청은 2009년 이후 독감백신을 접종받고 사망한 사례는 25건이며, 이 가운데 백신 접종에 따른 이상반응이 인정된 것은 1건이라고 밝혔다. 2009년 접종 후 ‘밀러-피셔 증후군‘ 진단을 받은 뒤 이듬해 2월 사망한 65세 여성이다.<br><br>밀러-피셔 증후군은 희귀 말초신경병증으로, 근육 마비나 운동능력 상실 등을 수반한다.<br><br>dylee@yna.co.kr"
          },
          {
            title: '"엄마" 부르기도 했었는데...‘라면 형제‘ 동생 오늘 숨져',
            content:
              "[앵커]엄마가 집을 비운 사이 발생한 화재로 중상을 입은 초등학생 형제 가운데 동생이 안타깝게도 오늘 오후 결국 숨졌습니다.<br><br>최근 의식을 되찾아 일반병실로 옮겨졌는데, 다시 상태가 급격히 나빠진 것으로 알려졌습니다.<br><br>형제가 입원해있던 병원에 취재기자 나가 있습니다. 정현우 기자!<br><br>치료를 받던 중 의식을 되찾고 다소 호전됐다는 얘기도 있었는데, 오늘 갑자기 상태가 안 좋아진 건가요?<br><br>[기자]<br>그렇습니다. 지난달 14일 인천 미추홀구 빌라에서 라면으로 끼니를 때우다 난 것으로 추정되는 불로 10살, 8살 형제가 화상을 입고 이곳 병원에서 치료를 받아왔습니다.<br><br>의식을 되찾기까지 오랜 시일이 걸렸지만, 최근 다소 호전돼 일반병실로 옮겨졌다는 소식이 전해지며 한숨 돌리는가 싶었는데요.<br><br>오늘 8살 동생이 급격하게 상태가 나빠져 끝내 숨졌습니다.<br><br>숨진 시각은 오후 3시 30분쯤.<br><br>사고가 발생한 지 한 달여 만입니다.<br><br>동생은 튜브를 빼고도 식사를 하고, 휴대전화를 들여다볼 수 있을 만큼 호전됐던 것으로 알려졌습니다.<br><br>한때 엄마도 알아보면서 부르기도 했다는데요.<br><br>하지만 유독가스를 많이 마셔 호흡기나 폐는 많이 부어 있는 상태였다고 합니다.<br><br>어제 오후부터 아이는 호흡 곤란과 구토 증세를 호소하는 등 상태가 갑자기 안 좋아져 오늘 오전엔 다시 중환자실로 옮겨진 것으로 전해졌습니다.<br><br>중환자실에서 심폐소생술 등을 했지만 결국 안타깝게 숨졌습니다.<br><br>전신에 1도 화상을 입은 동생은 지난달 추석 연휴 기간 형과 함께 의식을 완전히 되찾아 중환자실에서 일반병실로 옮겨졌습니다.<br><br>형은 온몸의 40%에 3도 화상을 입어 2차례 피부 이식 수술을 받았고, 휴대전화로 원격수업을 가끔 들을 만큼 건강이 호전된 것으로 알려졌습니다.<br><br>앞서 이들 형제는 지난달 14일 오전, 인천 미추홀구 빌라 2층 집에서 일어난 화재로 중화상을 입었습니다.<br><br>이들은 코로나19 재확산 여파로 등교하지 않고 비대면 수업을 하는 중, 어머니가 외출하고 없는 상황에서 스스로 끼니를 해결하다 변을 당했습니다.<br><br>지금까지 한강성심병원에서 YTN 정현우[junghw5043@ytn.co.kr]입니다."
          },
          {
            title: '빅히트 주가 급락에 청원까지…"공모가격 수상해요"',
            content:
              "19일 청와대 청원게시판에 “빅히트엔터테인먼트(빅히트)의 공모 가격이 어떻게 결정됐는지 밝혀달라”는 청원글이 올라왔다.<br><br>지난 15일 유가증권시장에 상장한 빅히트 주가가 연일 하락세를 보이자 급기야 청와대 청원 글까지 등장한 것이다. 21일 빅히트 주가는 17만 9000원으로 마감했다. 이는 상장 첫날 시초가(27만원)보다 33.7% 가량 떨어진 수준이다. 해당 청원 글에는 이날 오후 기준 150여명이 동의했다.<br><br><br>/인터넷 캡처<br><br>작성자는 “빅히트란 회사가 멋지게 코스피에 상장하게 되었고 방탄소년단(BTS)을 아끼고 사랑하는 팬들 혹은 투자자들이 많은 관심과 지지를 하고 있다”며 글을 시작했다.<br><br>그러면서 “하지만 상장 2일 만에 언론매체는 빅히트 거품이라는 기사와 함께 BTS 군대 문제 등을 기사화 하고 있다”며 “투자의 책임은 당연히 본인이 지는 것이 맞지만, 이번 경우는 많이 다른 듯 하다”고 의혹을 제기했다.<br><br>그는 “아이돌 및 연예인의 군입대 관련한 법 개정등 굉장히 민감한 상황이 포함된 문제인듯 하다”며 “마치 계획이라도 된듯 문제점을 알고도 공모가격이 부풀려졌고, 팬들은 단순히 회사와 언론을 믿고 이틀 만에 투자금액의 절반을 잃었다”고 불만을 토로했다.<br><br>이어 “팬들과 투자자들을 비웃기라도 하듯일각에서는 조희팔 사건, 옵티머스 펀드 등 사기 사건과 비교하고 있다”며 “빅히트의 가격이 어떻게 결정되고 기준은 무엇이었는지 명명백백 밝혀달라”고 썼다.<br><br>해당 청원 글이 온라인 커뮤니티 등에 공유되자 네티즌들은 “좀 있으면 주식도 A/S해달라고 하겠다” “투자는 본인이 판단해야지” “아무거나 청원 좀 하지 마라”등 비난성 댓글이 달렸다.<br><br>[황지윤 기자 noyj@chosun.com]"
          },
          {
            title:
              "[단독]몇분 일찍 퇴근시켰다고 경고장 받은 전직 경찰관, 서장 고소했지만 ‘불기소‘",
            content:
              "야간 근무를 한 경찰관 3명을 교대를 위해 몇분 일찍 퇴근시켰다는 이유로 경고장을 받았던 전직 경찰관이 당시 관할서 경찰서장 등을 검찰에 고소한 사건에 대해 검찰이 불기소 처분을 내렸다. 이에 대해 전직 경찰관은 재정신청을 했다.<br><br>21일 경향신문 취재 결과 서울중앙지검 형사1부(당시 부장검사 정진웅)는 지난 6월30일 허위공문서작성·허위작성공문서행사·직권남용권리행사방해 등 혐의를 받는 전 관악경찰서장 A씨 등 경찰 관계자 6명에 대해 혐의 없음으로 불기소 처분했다. 이에 고소인인 전직 경찰관 B씨는 항고했으나 서울고검은 이를 기각했다. B씨는 지난 16일 서울고법에 재정신청을 했다. B씨는 또 지난 6월3일 현 서울지방경찰청장과 현 관악경찰서장을 상대로 당시 징계와 관련된 공문서 공개 요청을 하는 행정소송도 제기했다.<br><br>서울 관악경찰서 신사파출소 소속 경위였던 B씨는 지난해 7월5일 당시 관악경찰서장 ㄱ씨로부터 경고장을 받았다. 서울지방경찰청과 관악경찰서는 당시 “B씨가 그날 도보 순찰 야간 근무를 마친 경찰관 3명을 퇴근 시간인 오전 6시보다 12분 이른 오전 5시48분에 퇴근시켰다”며 B씨에 대해 징계 조치했다.<br><br>A씨는 경고장에서 “B씨에게 7월5일 오전 5~6시 도보 순찰로 지정된 자원 근무자 3명에 대해 조기 퇴근케 하는 잘못에 엄중한 책임을 물어야 하나 그간의 공적과 제반 정상 참작하여 금회에 한해 경고한다”고 밝혔다. B씨는 징계에 이의를 제기했다. 지난해 7월 열린 징계심의위원회에서 징계는 취소됐다.<br><br>B씨는 경찰의 주장이 사실과 다르다고 주장했다. 근무자 3명을 오전 6시보다 ‘12분’이 아닌 ‘8분’ 빠른 오전 5시52분에 퇴근시켰다는 것이다. 그는 “순찰 근무자는 통상적으로 근무 지정 시간 10분 전에 들어와서 근무 교대를 한다. 당시 신사파출소가 공사 중이라 다른 관내의 임시 장소에 있었던 데다 해당 근무자들은 이미 근무 지정 시간보다 40분 초과 근무를 했다. 이들을 통상의 근무 시간에 교대에 맞게 퇴근시킨 것”이라고 했다.<br><br>특히 B씨는 관악경찰서가 퇴근 시간을 공문서에 허위로 기재하고 이를 통해 징계 처분을 했다고 주장했다. 그는 “관악경찰서 관계자들이 오전 5시52분에 신사파출소에 와서 점검했으면서도 ‘오전 5시48분’에 점검해 퇴근자들을 발견했다고 공문서를 허위 작성했다. 당시 퇴근자들과 마주쳤음에도 ‘근무 결락’으로도 허위 기재했다”고 주장했다.<br><br>B씨가 경찰과 검찰에 제출한 당시 퇴근 기록이 담긴 폐쇄회로(CC) TV 영상을 보면 근무자 3명이 지난해 7월5일 오전 5시58분에 퇴근하는 모습이 담겨 있다. B씨는 “CCTV 설정 시각이 실제와 6~7분 가량 차이가 있다. 실제 이들의 퇴근 시간은 오전 5시52분이다. 문제를 제기하다 불가피하게 명예퇴직을 할 수밖에 없었지만 경찰 관계자들로부터 허위 공문서 작성 등에 관해 아직까지 적절한 해명을 듣지 못했다”고 주장했다."
          }
        ],
        [],
        []
      ],
      musicPlaylists: [
        {
          title: "💕 고된 훈련에 힘이 될 힐링곡 추천",
          songs: [
            {
              title: "이름에게",
              artist: "아이유(IU)",
              lyrics: "가사"
            },
            {
              title: "한숨",
              artist: "LEE HI",
              lyrics: "가사가사"
            },
            {
              title: "너의 얘길 들어줄게",
              artist: "윤미래",
              lyrics: ""
            },
            {
              title: "위로",
              artist: "권진아",
              lyrics: ""
            },
            {
              title: "Alone",
              artist: "Crush",
              lyrics: ""
            }
          ]
        },
        {
          title: "👮‍♂️ 군인이라면 역시! 군가 모듬세트",
          songs: [
            {
              title: "멋진 사나이",
              artist: "",
              lyrics:
                "멋있는 사나이 많고 많지만 바로 내가 사나이 멋진 사나이 싸움에는 천하무적 사랑 뜨겁게 사랑 뜨겁게 바로 내가 사나이다 멋진 일등병\n멋있는 사나이 많고 많지만 분대장 사나이 멋진 사나이 명령에는 호랑이 대화는 정답게 대화는 정답게 바로 내가 사나이다 멋진 분대장"
            },
            {
              title: "전선을 간다",
              artist: "",
              lyrics:
                "높은산 깊은골 적막한 산하 눈내린전선을 우리는 간다 젊은넋 숨져 - 간 그때그자리 상처입은 노송 - 은 말을 잊었네 전우여 들리는가 그 성난 목소리 전우여 보이는가 한맺힌 눈동자\n푸른숲 맑은물 숨쉬는 산하 봄이 온 전선을 우리는 간다 젊은피 스며 - 든 그때그자리 이끼낀- 바위-는 말을잊었네 전우여 들리는가 그 성난 목소리 전우여 보이는가 한맺힌 눈동자"
            },
            {
              title: "진짜 사나이",
              artist: "",
              lyrics:
                "사나이로 태어나서 할 일도 많다만 너와 나 나라지키는 영광에 살았다 전투와 전투속에 맺어진 전우야 산봉우리에 해뜨고 해가 질 적에 부모형제 나를 믿고 단잠을 이룬다\n입으로만 큰 소리쳐 사나이 라느냐 너와 나 겨레지키는 결심에 살았다 훈련과 훈련 속에 맺어진 전우야 국군 용사의 자랑을 가슴에 안고 내 고향에 돌아갈땐 농군의 용사다"
            },
            {
              title: "멸공의 횃불",
              artist: "",
              lyrics:
                "아름다운 이 강산을 지키는 우리 사나이 기백으로 오늘을 산다 포탄의 불바다를 무릎 쓰면서 고향땅 부모형제 나라를 위해 전우여 내 나라는 내가 지킨다 멸공의 횃불 아래 목숨을 건다\n조국의 푸른 바다 지키는 우리 젊음의 정령 바쳐 오늘을 산다 함포의 벼락불을 쏘아 붙이며 겨레의 생명선에 내일을 걸고 전우여 내 나라는 내가 지킨다 멸공의 횃불 아래 목숨을 건다\n자유의 푸른 하늘 지키는 우리 충정과 투지로써 오늘을 산다 번갯불 은빛 날개 구름을 뚫고 찬란한 사명감에 날개를 폈다 전우여 내 나라는 내가 지킨다 멸공의 횃불 아래 목숨을 건다\n조국의 빛난 얼을 지키는 우리 자랑과 보람으로 오늘을 산다 새 역사 창조하는 번영의 이 땅 지키고 싸워 이겨 잘 살아가자 전우여 내 나라는 내가 지킨다 멸공의 횃불 아래 목숨을 건다"
            },
            {
              title: "푸른 소나무",
              artist: "",
              lyrics:
                "이 강산은 내가 지키노라 당신의 그 충정 하늘보며 힘껏 흔들었던 평화의 깃발 아아 다시 선 이땅에 당신 닮은 푸른 소나무 이 목숨 바쳐 큰나라 위해 끝까지 싸우리라\n이 강산은 내가 지키노라 당신의 그 맹세 만주향해 힘껏 포효하던 백두산 호랑이 아아 다시 선 이땅에 당신 닮은 푸른 소나무 이 목숨 바쳐 큰나라 위해 끝까지 싸우리라"
            }
          ]
        },
        {
          title: "👏 빠빠 빨간맛~ 신나는 아이돌 음악!",
          songs: [
            {
              title: "빨간 맛",
              artist: "Red Velvet(레드벨벳)",
              lyrics: "가사"
            },
            {
              title: "FIESTA",
              artist: "IZ*ONE(아이즈원)",
              lyrics: "가사가사"
            },
            {
              title: "CHEER UP",
              artist: "TWICE(트와이스)",
              lyrics: ""
            },
            {
              title: "에잇",
              artist: "아이유(IU)",
              lyrics: ""
            },
            {
              title: "살짝 설렜어",
              artist: "오마이걸(OH MY GIRL)",
              lyrics: ""
            }
          ]
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
    },
    armyTypeKorean: function() {
      switch (this.armyType) {
        case "army":
          return "육군";
        case "navy":
          return "해군";
        case "air":
          return "공군";
        case "marine":
          return "해병대";
      }
      return 0;
    }
  },
  watch: {
    armyType: function() {
      this.handleShowAlert(
        `${this.armyTypeKorean} 훈련소로 편지를 씁니다. ${this.textMaxLength}자까지 쓸 수 있습니다.`
      );
      this.mailText = this.mailText.slice(0, this.textMaxLength);
    }
  },
  methods: {
    getImgUrl(pic, hover) {
      if (hover)
        return require("../assets/icons/writing_" + pic + "-hover.svg");
      return require("../assets/icons/writing_" + pic + ".svg");
    },
    handleShowNews(cat, ind) {
      this.showHeadlines = false;
      this.newsDetails = { ...this.newsHeadlines[cat][ind] };
    },
    handleShowCategory(num) {
      this.newsCategoryNum = num;
      this.showHeadlines = true;
    },
    handleSend() {
      this.$router.push({
        name: "Send",
        params: {
          mailText: this.mailText,
          armyType: this.armyType,
          receiver: this.reciever
        }
      });
    },
    handleAdd(text) {
      this.cursor = this.mailText.length;
      this.mailText = (this.mailText + "\n" + text).slice(
        0,
        this.textMaxLength
      )+"..";
      this.handleShowAlert(
        "추가되었습니다! Ctrl+Z 키를 눌러 취소할 수 있습니다."
      );
      document.getElementById("writing-area").focus();
    },
    handleShowAlert(message) {
      this.alertMessage = message;
      this.showAlert = true;
      var that = this;
      setTimeout(() => {
        that.showAlert = false;
        that.alertMessage = "";
      }, 2000);
    }
  }
};
</script>

<style scoped lang="scss">
// header
.navigation {
  .logo {
    display: flex;
    align-items: center;
    font-family: "BinggraeTaom-Bold", Dotum, Baekmuk Dotum, Undotum,
      Apple Gothic, Latin font, sans-serif;
  }
  font-family: "maruburi", Dotum, Baekmuk Dotum, Undotum, Apple Gothic,
    Latin font, sans-serif;
  position: sticky;
  top: 0;
  z-index: 1;
  .logo {
    display: flex;
    align-items: center;
    font-family: "BinggraeTaom-Bold", Dotum, Baekmuk Dotum, Undotum,
      Apple Gothic, Latin font, sans-serif;
  }
  .nav-div {
    display: flex;
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
  .nav-menu {
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 24px;
  }
  .nav-send {
    height: 40px;
    padding: 0 1.5rem;
    border-radius: 1.3rem;
    background: #135fa1;
    transition: background 0.3s ease;
    box-shadow: 0 2px 4px 0 #ccc;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: normal;
    cursor: pointer;

    &:hover {
      background: #0c3d67;
    }
    &:active {
      box-shadow: none;
    }
  }
}

.mail__wrap {
  display: grid;
  grid-template-rows: auto 1fr;

  height: 100vh;
}

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
  min-width: 54px;
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
  div {
    margin-top: 10px;
    font: {
      family: "nanum square";

      weight: lighter;
    }
  }
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
  min-width: 276px;
  font-family: "nanum square";
  .hashtag {
    margin: 20px 10px;
    font-family: "nanum square";
    .title {
      margin-top: 10px;
      font-size: 22pt;
    }
    span {
      color: #0067a3;
      font-size: 12pt;
      font-weight: lighter;
    }
  }

  // & > div {
  //   height: 100%;
  //   display: grid;
  //   grid-template-rows: 16% 6% auto;
  // }
}

.utility-bar__content .navigation {
  display: flex;
  justify-content: space-between;
  .btn {
    width: 20%;
  }
}

.utility-bar__content .navigation .navigation__button {
  font-family: "nanum square";
  padding: 5px;
}

.utility-bar__content .navigation .navigation__button.focus {
  background: #b5bfd4;
}

.btn-group {
  width: 98%;
}

.headlines-container {
  min-height: 10rem;
  padding: 0.5rem 0.5rem;
  // background: #b5bfd4;
}

.headline {
  font-family: "maruburi";
  position: relative;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  // &:last-child { border: none; }
  line-height: 110%;
  .title {
    font-weight: bold;
    margin-bottom: 4px;
    &:hover {
      text-decoration: underline;
    }
  }
  .content {
    font-size: 10pt;
  }
  .add-btn {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    height: 2rem;
    padding: 0 1rem;
    border-radius: 1rem;
    background: rgba(#0067a3, 0.8);
    color: #fff;
    font-family: "nanum square";
    font-weight: bold;

    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
  }
  &:hover {
    cursor: pointer;
    .add-btn {
      opacity: 1;
    }
  }
}

.article-container {
  padding: 1rem 0.5rem;
  line-height: 110%;
  .title {
    font-size: 14pt;
    font-weight: bold;
    line-height: 120%;
    margin-bottom: 1rem;
  }
}

.playlists_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
}
.playlist {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.8rem 0.5rem 0 0.5rem;
  margin-bottom: 1rem;
  &__title {
    font-family: "nanum square";
    font-weight: lighter;
    font-size: 15pt;
    margin-bottom: 0.7rem;
  }
  &__song {
    position: relative;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.3rem;
    margin-bottom: 0.3rem;
    &:last-child {
      border: none;
      padding: none;
      margin: none;
    }
    .add-btn {
      position: absolute;
      bottom: 0;
      right: 0.5rem;
      height: 1.6rem;
      padding: 0 1rem;
      border-radius: 0.8rem;
      background: rgba(#0067a3, 0.8);
      color: #fff;
      font-family: "nanum square";
      font-weight: bold;

      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
    }
    &:hover {
      cursor: pointer;
      .add-btn {
        opacity: 1;
      }
    }
  }
  .title {
    font-weight: bolder;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .artist {
    font-size: 10pt;
  }
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
  font-family: "maruburi";
  font-size: 12pt;
}

.reciever-name {
  width: 10%;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
  transition: border-color 0.3s ease;
  &:hover,
  &:focus {
    border-color: #135fa1;
  }
}

.reciever-type {
  padding: 0.5rem 1rem;
  margin-right: 3%;
  border: 2px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  &:hover {
    border: 2px solid #135fa1;
  }
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
  line-height: 120%;
  &.bigger {
    font-size: 30px;
    line-height: 140%;
  }
}

.writing-area__text textarea::selection {
  background-color: #ffbfb9;
}

.writing-area__text span {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
}
.writing-area__couter {
  font-family: "maruburi";
  font-size: 16pt;
  font-weight: bold;
  color: #135fa1;
}

.alert-popup__wrap {
  position: absolute;
  z-index: 100;
  width: 100vw;
  top: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.alert-popup {
  background: rgba($color: #ccc, $alpha: 0.7);
  height: 3rem;
  width: 550px;
  padding: 0 2rem;
  font-family: "nanum square";
  font-size: 15pt;
  border-radius: 1.5rem;
  white-space: nowrap;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s;
}
.popup-enter, .popup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 3rem;
  opacity: 0;
}
</style>
