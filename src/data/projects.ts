export const TAB_TYPE = ["Featured", "Vanilla JS", "Next.js", "All"] as const;
export type TabType = (typeof TAB_TYPE)[number];

export interface ProjectEntry {
  id: number;
  title: string;
  desc: string;
  isFeatured: boolean;
  tags: string[];
  img: string;
  githubUrl?: string;
  category: TabType;

  // 모달용 데이터추가
  detailDesc1: string;
  detailDesc2: string;
  subImages: string[]; // 상세 페이지에 들어갈 이미지들
  serviceUrl?: string;
}

export const PROJECTS_DATA: ProjectEntry[] = [
  {
    id: 1,
    title: "Dday 카운트다운",
    desc: "특정 날짜까지 남은 시간을 실시간으로 보여주는 웹앱입니다.",
    isFeatured: true,
    category: "Vanilla JS",
    tags: ["Vanilla JS", "Tailwind CSS", "Local Storage"],
    img: "/images/projects/dday.png",
    githubUrl: "https://github.com/...",
    serviceUrl: "https://...",
    // 상세 설명
    detailDesc1:
      "날짜 계산, 실시간 UI 갱신, 입력값 검증, 브라우저 저장소 활용 같은\n프론트엔드 핵심 요소를 다루기 위해 제작되었습니다.\n단순히 숫자를 표시하는 것에 그치지 않고\n예외 처리와 데이터 유지에 집중했습니다.",
    // 주요 기능 (줄바꿈으로 구분)
    detailDesc2:
      "setInterval을 이용한 1초 단위 실시간 갱신\nlocalStorage를 활용한 목표 날짜 데이터 유지\n유효하지 않은 날짜 형식에 대한 예외 메시지 출력\n타이머 종료 시 자동 상태 변경 및 초기화 기능",
    subImages: [
      "/images/projects/dday-sub1.png",
      "/images/projects/dday-sub2.png",
    ],
  },
  {
    id: 2,
    title: "웹 다이어리",
    desc: "iframe 기반의 화면 전환과 다크모드를 지원하는 다이어리입니다.",
    isFeatured: true,
    category: "Vanilla JS",
    tags: ["Vanilla JS", "Canvas API", "Dark Mode"],
    img: "/images/projects/diary.png",
    githubUrl: "https://github.com/...",
    detailDesc1:
      "홈, 일기 작성, 목록, 달력 기능을 iframe으로 관리하는 구조입니다.\n외부 명언 API와 Unsplash API를 연동하여 매일 새로운 환경을 제공합니다.",
    detailDesc2:
      "Canvas API를 활용한 랜덤 이미지 긁기 인터랙션 구현\nCSS 변수를 활용한 시스템 전체 다크모드 지원\n외부 API 호출을 통한 오늘의 명언 출력\n날짜별 일기 저장 및 달력 기반 조회 기능",
    subImages: ["/images/projects/diary-sub1.png"],
  },
  {
    id: 3,
    title: "카드 맞추기 게임",
    desc: "3D 뒤집기 효과와 사운드가 포함된 카드 매칭 게임입니다.",
    isFeatured: false,
    category: "Vanilla JS",
    tags: ["Vanilla JS", "3D Flip Animation", "Web Audio"],
    img: "/images/projects/match.png",
    githubUrl: "https://github.com/...",
    detailDesc1:
      "클릭 이벤트 처리와 상태 관리, 랜덤 셔플 알고리즘을 연습하기 위한 프로젝트입니다.\n3D Flip 애니메이션과 상황별 사운드로 게임의 몰입도를 높였습니다.",
    detailDesc2:
      "Math.random을 활용한 카드 이미지 랜덤 셔플 로직\nCSS 3D Transform을 이용한 카드 뒤집기 연출\n두 카드 일치 여부 판정 및 상태 관리\n게임 완료 시 축하 사운드 및 메시지 출력",
    subImages: ["/images/projects/match-sub1.png"],
  },
  {
    id: 4,
    title: "할일리스트",
    desc: "날씨 API와 위치 정보를 결합한 스마트 ToDo 앱입니다.",
    isFeatured: false,
    category: "Vanilla JS",
    tags: ["Vanilla JS", "OpenWeather API", "Geolocation"],
    img: "/images/projects/todo.png",
    githubUrl: "https://github.com/...",
    detailDesc1:
      "단순한 목록 관리를 넘어 Geolocation API를 통해 사용자 환경에 반응하는 앱입니다.\n날씨 상태에 따라 배경화면이 유동적으로 바뀝니다.",
    detailDesc2:
      "OpenWeather API를 활용한 실시간 지역 날씨 정보 수집\n날씨 상태에 따른 동적 배경 이미지 변경 기능\nBootstrap Toast를 활용한 삭제 알림 피드백\nCRUD 기반의 할 일 추가, 완료 토글, 전체 삭제 기능",
    subImages: ["/images/projects/todo-sub1.png"],
  },
  {
    id: 5,
    title: "영화예매사이트",
    desc: "예매하기, 즐겨찾기, 영화검색 작업 뿐만 아니라 프로필수정과 피드백작성, meta태그를 추가하여 검색엔진 최적화를 고려한 영화예매서비스 입니다.",
    isFeatured: true,
    category: "Next.js",
    tags: ["Next.js", "TS", "Emotion", "Vercel", "Antd"],
    img: "/images/projects/portfolio.png",
    githubUrl: "",
    detailDesc1:
      "사용자 중심의 예매 흐름을 직접 설계하고 구현하는데 초점을 두어 \n홈 화면의 박스오피스 캐러셀부터 통합 검색, 상세 정보 확인, 그리고 5단계(날짜-영화관-시간-좌석-확인)로 구성된 탭 구조의 예매 시스템을 통해 실제 서비스와 유사한 UX를 제공하려 노력했습니다.\n특히 비회원 예매 및 조회 기능을 추가하여 접근성을 높였으며,\n SEO 최적화를 위한 Meta 태그 설정과 소셜 로그인(Kakao, Naver) 연동,관리자 전용 피드백관리로 사용자의 피드백내용을 바탕으로 통계를 확인할 수 있게 하여 서비스에 완성도를 더했습니다.",
    detailDesc2:
      "TMDB API를 활용한 실시간 영화/TV 콘텐츠 데이터 연동 및 통합 검색 기능\n5단계(날짜, 영화관, 시간, 좌석, 확인) 탭 구조의 직관적인 예매 프로세스 구현\nKakao, Naver 소셜 로그인 및 일반 회원가입/로그인 인증 시스템 구축\n비회원 예매 및 예매 내역 조회 기능을 통한 서비스 접근성 확장\n사용자 개인화를 위한 즐겨찾기(찜하기) 및 마이페이지 프로필 및 개인정보 수정 기능\n관리자 전용 피드백 관리 시스템(검색, 답글 작성, 처리 상태 및 만족도 통계)\nContainer / Presenter 패턴을 적용하여 UI와 비즈니스 로직의 명확한 분리\nService / Repository 계층 구조 도입을 통한 데이터 처리 로직의 유지보수성 향상",
    subImages: ["", ""],
    serviceUrl: "",
  },
  {
    id: 6,
    title: "포트폴리오",
    desc: "Personal",
    isFeatured: true,
    category: "Next.js",
    tags: ["Next.js", "TS", "Emotion", "Framer Motion", "Vercel"],
    img: "/images/projects/portfolio.png",
    githubUrl: "",
    detailDesc1: "",
    detailDesc2: "",
    subImages: ["", ""],
    serviceUrl: "",
  },
];
