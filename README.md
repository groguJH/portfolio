# 🫧포트폴리오 사이트

![About](https://github.com/user-attachments/assets/871c00a9-f04f-4df7-a242-e66819b7660f)


`Next.js`로 만든 신입 프론트엔드 개발자 강정화의 개인 포트폴리오 사이트입니다.  
파도 및 About에 사용되는 프로필 뱃지는 Figma와 LottieFiles를 사용해 만들었으며
단일 페이지 구조 안에서 자기소개, 기술 스택, 프로젝트, 연락 섹션을 보여주고, 인트로 애니메이션과 문의 메일 전송 기능을 갖춘 사이트입니다.
<br/>
<br/>

## 프로젝트 소개

이 프로젝트는 개발자를 준비하면서 진행한 프로젝트와
프론트엔드 개발 스택, 구현된 이미지를 한번에 확인할 수 있으며 연락 기능을 구현한 개인 포트폴리오 사이트입니다.
URL 끝에 #해시 값을 붙여 Swiper 기술로 스크롤 가능한 해시 네비게이션을 구현했으며
헤더의 메뉴 클릭시 스크롤 이동이 가능합니다.
<br/>
또한 기술설명은 왜 사용했는지를 한눈에 소개 할 수 있도록 Swiper 라이브러리를 사용했습니다.
세부 이미지는 dialog로 구현하여 클릭시 확대된 이미지를 볼 수 있게 구현했습니다.
반응형 디자인을 적용하여 다양한 기기 및 화면에 맞게 자연스러운 렌더링이 되도록 구현했습니다.

- `About / Skills / Projects / Contact` 4개 섹션으로 구성된 싱글 페이지
- `Lottie`, `Framer Motion` 기반 인트로 애니메이션과 배경, 마우스 모션
- 프로젝트 탭 필터링, 상세 모달, 이미지 확대 보기 제공
- 문의 폼 유효성 검사 후 메일 전송 및 Slack 알림 연동

<br/>

([포트폴리오 사이트 링크🔗 ](https://junghwa-portfolio.vercel.app/))<br/><br/>

<br/>


## 기술 스택

### 🌐 프론트엔드

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### 🎨 UI / Animation

![Emotion](https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie-00D1B2?style=for-the-badge&logo=lottie&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant_Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white)

### 📝 폼 / 유효성 검사

![React Hook Form](https://img.shields.io/badge/react--hook--form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

### 📥 Contract 를 위한 도구

![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-333333?style=for-the-badge&logo=nodemailer&logoColor=white)
![Slack Webhook](https://img.shields.io/badge/Slack_Webhook-4A154B?style=for-the-badge&logo=slack&logoColor=white)

<br/>

## 주요 구현 내용

### 1. 메인 화면 구성

- `src/pages/index.tsx`에서 섹션 단위로 페이지를 조합하여 `About`, `Skills`, `Projects`, `Contact` 순서로 자연스럽게 이어지는 구조입니다.
- `useHashScroll` 훅으로 현재 보고 있는 섹션에 맞춰 URL 해시가 갱신됩니다.
- 반응형 디자인으로 제작하여 다양한 기기 및 화면 크기에 맞게 자연스러운 렌더링이 되도록 구현했습니다.

<br/>

![responsive](https://github.com/user-attachments/assets/4eacd009-67e7-4945-bf87-ceb1af2f9e91)

<br/>

### 2. 인터랙션과 애니메이션

- `GreetingLayer`에서 첫 진입 인트로 애니메이션을 보여줍니다.
- `BackgroundLayer`, `ScrollGuide`, `GlassCursorContainer`로 사이트 전반의 움직임을 구성했습니다.

<br/>

![intro](https://github.com/user-attachments/assets/79cd8974-8177-4fc2-9973-7e52a09ab744)

<br/>


- 1. 멈추지 않는 흐름: 파도와 물방울
     화면을 채우는 파도와 물방울은 빠르게 변화하는 웹 생태계를 나타냅니다. 끊임없이 움직이는 파도처럼 기술적 성장을 멈추지 않고 유연하게 적응하는 개발자가 되고자 하는 마음을 시각적으로 구현했습니다.

- 2. 물방울과 유리질감
     부드럽게 움직이던 물방울이 터지며 나타나는 인사말은 막연했던 상상을 인터랙티브한 경험으로 치환하는 과정의 즐거움과, 사용자에게 건네는 첫 인사의 설렘을 Framer Motion의 역동적인 효과로 표현했습니다.

- 3. 생동감 있는 디테일 : 움직이는 뱃지
     정적인 텍스트에 움직이는 뱃지를 더해 중앙으로 시선을 집중시키고 싶었고, 작은 디테일에서도 생동감을 느낄 수 있는 인터페이스를 지향했습니다.

<br/>


### 3. 컴포넌트와 데이터의 분리

- 재사용 가능한 컴포넌트를 구현해보고 싶었고 `src/data` 폴더 에 정리해두고 각각 UI에 연결했습니다.
- `Featured / Vanilla JS / Next.js / All` 탭으로 분류해 프로젝트 별로 구분해놓았습니다.
- 컨테이너/프리젠터 패턴을 통해 각각의 컴포넌트를 분리했습니다.

<br/>

### 4. Skills 및 Projects 섹션 구현

- Skills는 Swiper 라이브러리를 사용하여 기술을 한눈에 볼 수 있도록 가로로 펼쳐지도록 구성했습니다.
- Projects의 컨텐츠를 클릭하면 상세 설명, 기술 태그, GitHub 링크, 서비스 링크, 서브 이미지가 모달로 열립니다.

<br/>

![skills](https://github.com/user-attachments/assets/5dfcefba-d7fd-467d-891c-c7aa13d9d601)

<br/>

### 4. 연락 기능

- `react-hook-form`과 `zod`로 입력값을 검증했습니다.
- `src/pages/api/contact.ts`에서 API 요청을 받고,
  `src/service/contactService.ts`에서 메일 전송과 Slack 알림을 처리합니다.
  
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/2b8ab4fd-7910-4412-9ea8-c83eba629660" width="500px" height="auto" alt="port3" />
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/bf49257d-b9c4-414a-8977-978eaf34cb9c" width="500px" height="auto" alt="port4" />
    </td>
  </tr>
</table>

<br/>


## 폴더 구조

```text
src
├─ components
│  ├─ layout                # 배경, 인트로, 스크롤 가이드
│  └─ presenters            # 화면 표현 컴포넌트
├─ containers               # 상태/로직을 연결하는 컨테이너
├─ data                     # 소개글, 기술 스택, 프로젝트 목록 데이터
├─ hooks                    # 공통 훅
├─ pages
│  ├─ api                   # contact API
│  └─ index.tsx             # 메인 페이지
├─ service                  # 메일/알림 처리 로직
└─ styles                   # 전역 스타일

public
├─ projectImg               # 프로젝트 이미지
└─ *.json                   # Lottie 애니메이션 파일
```

<br/>

## 라이브러리

```text
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@hookform/resolvers": "^5.2.2",
    "antd": "^6.3.3",
    "axios": "^1.13.6",
    "framer-motion": "^12.35.1",
    "lottie-react": "^2.4.1",
    "next": "16.1.6",
    "nodemailer": "^8.0.3",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.2",
    "react-icons": "^5.6.0",
    "react-lottie-player": "^2.1.0",
    "swiper": "^12.1.2",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@types/axios": "^0.14.4",
    "@types/node": "^20",
    "@types/nodemailer": "^7.0.11",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "add": "^2.0.6",
    "babel-plugin-react-compiler": "1.0.0",
    "jsdoc": "^4.0.5",
    "ts-jsdoc": "^3.2.2",
    "typescript": "^5.9.3",
    "yarn": "^1.22.22"
  }
```
