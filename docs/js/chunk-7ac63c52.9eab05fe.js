(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ac63c52"],{"9db0":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"write"},[n("div",{staticClass:"content-area"},[n("div",{staticClass:"wrapper send-now"},[n("h1",[t._v("이제 작성한 편지를 클립보드에 복사한뒤 편지를 보내러 가세요.")]),n("div",{staticClass:"clipboard"},[n("input",{attrs:{id:"target",value:"https://github.com/zenorocha/clipboard.js.git"}}),n("button",[t._v("copy")]),t._m(0),t._m(1),n("span",[t._v(" 붙여넣기(ctrl+v) 하시면 내용이 복사됩니다.")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.showPopup}},[t._v(" 편지보내러가기 ")])])]),n("div",{staticClass:"wrapper send-latter"},[t._v(" 작성한 편지를 저장하면 나중에 언제든지 보낼 수 있어요. 로그인하기 로그인하고 저장 버튼 오프라인으로 편지 보내기 서비스 이용하기 기타 파일로 출력하기 버튼 ")])]),t.pageNumber?n("div",[n("h1",[t._v("This is a Send page")]),n("input",{attrs:{type:"text",id:"inputField"}}),n("button",{on:{click:t.copyText}},[t._v("복사하기")]),n("br"),n("br"),n("button",{on:{click:t.toggleSend}},[t._v("Send!")])]):n("div",[n("h1",[t._v("Done!")])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(' "공군" 훈련소에 보내시는거죠? '),n("br"),t._v(" 저희가 모셔드릴게요 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v(" 편지 들고 가시는거 잊지 마세요!"),n("br"),t._v(" 버튼을 눌러 편지를 담아가세요. ")])}],r=(n("c975"),{data:function(){return{pageNumber:!0}},methods:{toggleSend:function(){this.pageNumber=!this.pageNumber},copyText:function(){var t=navigator.userAgent.toLowerCase(),e=document.getElementById("target");e.select(),-1!=t.indexOf("safari")&&e.setSelectionRange(0,9999),document.execCommand("copy"),document.body.removeChild(e)},showPopup:function(){window.open("http://www.airforce.mil.kr:8081/user/indexSub.action?codyMenuSeq=156893223&siteId=last2&menuUIType=sub#searchName","팝업창기능","width=1440, height=900, left=720, top=330")}}}),c=r,o=(n("ef8a"),n("2877")),s=Object(o["a"])(c,i,a,!1,null,"7bc44cd1",null);e["default"]=s.exports},b21e:function(t,e,n){},c975:function(t,e,n){"use strict";var i=n("23e7"),a=n("4d64").indexOf,r=n("a640"),c=n("ae40"),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),d=c("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:s||!u||!d},{indexOf:function(t){return s?o.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},ef8a:function(t,e,n){"use strict";var i=n("b21e"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-7ac63c52.9eab05fe.js.map