# 국군 인터넷편지 개선 프로젝트 인편단심

## 1. 개발 환경 Set-Up

### 1.1. Fork to My Github Repository

<https://github.com/Chokoty/Inpen-Dansim-OSAM2020> 에서 fork 합니다.

### 1.2. Clone to VSCS Local Environment

```bash
// 루트 디렉토리에서 클론
~/workspace$  git clone https://github.com/본인계정/Inpen-Dansim-OSAM2020.git
~/workspace$  cd Inpen-Dansim-OSAM2020

// 원본 repo 를 upstream으로 등록
~/workspace/Inpen-Dansim-OSAM2020$  git remote add upstream https://github.com/Chokoty/Inpen-Dansim-OSAM2020.git

// 등록된 remote repo 확인
~/workspace/Inpen-Dansim-OSAM2020$  git remote -v

// 필요한 라이브러리 받기
~/workspace/Inpen-Dansim-OSAM2020$  npm install
```

### 1.3. Create `develop` Branch

```bash
// 가급적 별도의 branch에서 작업한 이후, `master` 브랜치로 merge 하기를 권장합니다.
~/workspace/Inpen-Dansim-OSAM2020$  git checkout -b develop
```

### 1.4. Pull from Remote Repository

**주의: 현재 작업 디렉토리의 변경사항이 commit 되지 않은 채 `pull`하면, 변경사항이 사라집니다.**

```bash
// 작업하기 전 github 체크, pull 하는 습관을 들입시다.
~/workspace/Inpen-Dansim-OSAM2020$  git fetch upstream
~/workspace/Inpen-Dansim-OSAM2020$  git merge upstream/master

// fetch + merge = pull
~/workspace/Inpen-Dansim-OSAM2020$  git pull
```

### 1.5. Add & Commit & Push to Local Repository

```bash
// 변경된 파일 & staged 된 파일 확인
~/workspace/Inpen-Dansim-OSAM2020$  git status

// 일괄적으로 stage
~/workspace/Inpen-Dansim-OSAM2020$  git add .

// **local repo** 로 commit
~/workspace/Inpen-Dansim-OSAM2020$  git commit -m "ADD: newfile.js"

// Stage + Commit 한번에
~/workspace/Inpen-Dansim-OSAM2020$  git commit -a -m "FIX: fixed error: page not opening"

// **본인의 remote repo** 로 push
~/workspace/Inpen-Dansim-OSAM2020$  git push origin develop
```

### 1.6. PR (Pull Request)

<https://github.com/Chokoty/Inpen-Dansim-OSAM2020> 로 PR을 보냅니다.

### 1.7. Reference

[Git을 이용한 협업 워크플로우](https://wayhome25.github.io/git/2017/07/08/git-first-pull-request-story/)

[Git 공식 문서](https://git-scm.com/book/ko/v2)

## 2. Database Information

Firestore DB 의 구성입니다.

기본적으로, 인편을 쓰는 사람으로서 계정을 만들고 ('일반 계정' 이라 칭합니다), 이후에 군대에 들어갈 예정이면 '훈련병 계정'옵션을 추가하는 흐름을 가정했습니다. 또는 가입 시에 훈련병 계정임을 지정할 수도 있습니다.

이렇게 계획한 이유는, 훈련병으로 들어간 & 들어갈 사람도 본인의 다른 지인에게 인편을 쓸 수 있어야 하는데, 계정을 따로 만들면 Authentication 이 꼬일 우려가 있기 때문입니다.

데이터의 생성 시나리오는 다음과 같습니다 :

- 인편단심에 회원가입 시, 입력받은 정보로 `usersCollection` 에 데이터가 생성됩니다.
- 회원 또는 비회원이 훈련병을 처음 검색하여 인편을 쓰기 시작하면, 해당 훈련병의 정보로 `soldiersCollection` 에 데이터가 추가됩니다.
- 인편을 전송할 시, 해당 편지에 관한 정보로 `mailsCollection` 에 데이터가 추가됩니다.

각 `collection` 에서 `~Id` 는, firebase에 정보를 생성할 때 자동으로 부여되는 랜덤하고 서로 겹치지 않는 해쉬 문자열입니다. 이 때, 훈련병 계정으로 전환한 사람의 경우 본인에 해당되는 `userId` 와 `soldierId` 는 일치합니다.

이를 위해서, 훈련병 계정 전환 시 추가적인 정보를 입력받아 즉시 `soldiersCollection` 에 추가하도록 해야 합니다.

```javascript
usersCollection.userId = {

    setting: {},                // 개인 설정사항  **내용 미정**

    info: {                     // 사용자 정보
        name: '',               // 성함
        isSoldier: false,       // 훈련병 계정 여부
    },

    likedSoldiers: [            // 관심있는 훈련병(Dashboard 등록) 리스트
        {
            soldierId: '',      // soldiersCollection 상의 soldierId
            relation: ''        // user 와의 관계
        },
        ...
    ]

}

soldiersCollection.soldierId = {

    name: '',                   // 성함

    armyType: '',               // 군종  **문자열 말고 숫자 코드는 어떤지?**

    birthDate: '',              // 생년원일

    enterDate: '',              // 입대일

    isUser: false               // 회원 여부

}

mailsCollection.mailId = {

    sender: {                   // 발신인 정보
        userId: '',             // usersCollection 상의 userId
        name: '',               // 이름 (공군에서는 임의 지정 가능하므로)
        relation: ''            // soldier 와의 관계 (공군에서는 임의 지정 가능하므로)
    },

    receiver: {                 // 송신인 정보
        soldierId: ''           // soldiersCollection 상의 soldierId
    }

    content: '',                // 편지 내용

    writtenOn: ''               // 작성 일자

}
```
