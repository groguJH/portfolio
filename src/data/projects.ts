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

  detailDesc1: string;
  detailDesc2: string;
  subImages: string[];
  serviceUrl?: string;
}

export const PROJECTS_DATA: ProjectEntry[] = [
  {
    id: 1,
    title: "Dday 카운트다운",
    desc: "목표 날짜를 저장하고 남은 시간을 초 단위로 계산해 보여주는 카운트다운 앱입니다.",
    isFeatured: true,
    category: "Vanilla JS",
    tags: ["Vanilla JS", "Tailwind CSS", "LocalStorage"],
    img: "/projectImg/dday1.png",
    githubUrl: "https://github.com/groguJH/vanillajs-d-day-app",
    serviceUrl: "https://grogujh.github.io/vanillajs-d-day-app/",
    detailDesc1:
      "단순한 날짜 계산을 넘어, 사용자의 목표를 잊지 않게 돕는 타이머입니다.\n Date 객체 핸들링으로 예외 상황을 꼼꼼히 체크하고,\n새로고침 후에도 기록이 유지되도록 브라우저 저장소를 활용했습니다.",
    detailDesc2:
      "1초마다 남은 일·시간·분·초를 계산해 2자리 형식으로 갱신\n유효하지 않은 날짜와 종료된 날짜를 분기해 안내 메시지 출력\nlocalStorage에 목표 날짜를 저장하고 새로고침 후 자동 복원\n초기화 버튼으로 interval, 입력값, 저장 데이터를 함께 정리",
    subImages: ["/projectImg/dday1.png", "/projectImg/dday2.png"],
  },
  {
    id: 2,
    title: "웹 다이어리",
    desc: "화면 전환, 캔버스 인터랙션, 날짜 기반 저장을 묶은 멀티페이지 다이어리입니다.",
    isFeatured: true,
    category: "Vanilla JS",
    tags: ["Vanilla JS", "iframe", "Canvas API", "LocalStorage"],
    img: "/projectImg/diary0.png",
    githubUrl: "https://github.com/groguJH/vanillajs-diary-app",
    serviceUrl: "https://diary-app-tau-one.vercel.app/",
    detailDesc1:
      "기록의 즐거움을 주기 위해 캔버스 인터랙션을 결합한 다이어리입니다.\niframe 구조를 활용해 부드러운 화면 전환을 구현했으며,\n매일 새로운 명언과 랜덤 이미지를 긁어서 확인하는 재미 요소를 담았습니다.",
    detailDesc2:
      "작성 화면에서 제목·날짜·감정·내용 입력 시 즉시 localStorage 반영\n목록 화면에서 날짜 형식 키만 추려 최신순 정렬 후 모달 상세 보기 제공\n달력 화면에서 이전·다음 달 이동, 오늘 이동, 날짜 선택 저장 기능 구현\n서버 함수(`/api/searchImg`)로 Unsplash API 키를 분리해 클라이언트 노출 방지",
    subImages: ["/projectImg/diary1.png", "/projectImg/diary2.png"],
  },
  {
    id: 3,
    title: "카드 맞추기 게임",
    desc: "셔플, 3D 뒤집기, 페이드아웃 연출을 담은 카드 매칭 게임입니다.",
    isFeatured: false,
    category: "Vanilla JS",
    tags: ["Vanilla JS", "3D Flip Animation", "Web Audio", "Shuffle Logic"],
    img: "/projectImg/match1.png",
    githubUrl: "https://github.com/groguJH/vanillajs-match_samepictures-app",
    serviceUrl: "https://grogujh.github.io/vanillajs-match_samepictures-app/",
    detailDesc1:
      "짧은 시간 안에 몰입감을 줄 수 있는 3D 애니메이션 기반 미니게임입니다.\n게임인 만큼 사용자의 클릭 미스를 방지하는 상태 제어와 시청각 피드백을 통해\n완성도 높은 사용자 경험을 고민했습니다.",
    detailDesc2:
      "카드 뒷면 이미지를 동적으로 생성하고 Math.random 기반으로 랜덤 셔플\n한 번에 두 장만 비교하도록 선택 상태와 입력 잠금 로직 구현\n일치 시 fade-out, 불일치 시 일정 시간 후 원상복귀 처리\n카드 오픈, 셔플, 클리어 상황별 오디오 재생으로 피드백 강화",
    subImages: ["/projectImg/match1.png", "/projectImg/match2.png"],
  },
  {
    id: 4,
    title: "할일리스트",
    desc: "할 일 관리에 위치 기반 날씨와 배경 전환을 결합한 ToDo 앱입니다.",
    isFeatured: false,
    category: "Vanilla JS",
    tags: ["Vanilla JS", "Geolocation API", "OpenWeather API", "LocalStorage"],
    img: "/projectImg/todo1.png",
    githubUrl:
      "https://github.com/groguJH/vanillajs-todolist-app?tab=readme-ov-file",
    serviceUrl: "https://todolist-app-flax-alpha.vercel.app/",
    detailDesc1:
      "오늘의 할 일과 날씨를 한눈에 확인하며 하루를 시작할 수 있는 앱입니다.\n단순 텍스트 기록을 넘어 현재 위치의 날씨와 어울리는 배경을 추천하며,\n사용자가 앱에 접속했을 때 기분 좋은 시각적 경험을 하도록 설계했습니다.",
    detailDesc2:
      "Enter 입력으로 항목 추가, 완료 토글, 더블클릭 삭제, 전체 삭제 제공\n날씨 값을 clear sky·fog 등 내부 규칙으로 정규화해 배경 이미지와 매핑\n삭제 시 Bootstrap Toast를 띄워 즉각적인 사용자 피드백 제공\n저장값이 없거나 JSON 파싱에 실패해도 기본값으로 복구하는 안전한 복원 처리",
    subImages: ["/projectImg/todo1.png", "/projectImg/todo2.png"],
  },
  {
    id: 5,
    title: "영화예매사이트",
    desc: "회원·비회원 예매, 검색, 즐겨찾기, 피드백 관리까지 포함한 영화·TV 서비스입니다.",
    isFeatured: true,
    category: "Next.js",
    tags: ["Next.js", "TypeScript", "NextAuth", "MongoDB", "TanStack Query"],
    img: "/projectImg/movie2.png",
    githubUrl: "https://github.com/groguJH/movie-ticket-project",
    serviceUrl: "https://movie-ticket-project-theta.vercel.app/",
    detailDesc1:
      "Next.js Pages Router 기반으로\n 영화·TV 탐색부터 예매 완료까지 이어지는 흐름을 설계한 프로젝트입니다.\n 실제 서비스 수준의 흐름을 경험하기 위해 설계한 종합 미디어 플랫폼이며\n NextAuth로 jwt 인증과 QueryClientProvider로 검색, 캐싱, UI 상태를 연결했고,\n회원 예매와 비회원 예매를 분리해 비회원도 사용할 수 있도록 접근성을 높였습니다.\n또한 SEO 컴포넌트, 권한 미들웨어, Sentry 설정, Jest/Playwright 테스트 코드 포함하여 운영 관점도 함께 다뤄보았습니다.",
    detailDesc2:
      "TMDB 기반 영화·TV 목록/상세/통합 검색과 홈 캐러셀 구현\n회원·비회원 예매 흐름 분리 및 bookingId 기반 비회원 조회 지원\nNextAuth Credentials·Kakao·Naver 로그인과 admin/user 권한 미들웨어 구성\nMongoDB 트랜잭션으로 좌석 판매 상태와 예매 데이터를 함께 처리\n마이페이지의 예매 내역, 즐겨찾기, 프로필 수정, 사용자 피드백 기능 제공\n관리자 피드백 검색·답글·상태 변경·만족도 통계 화면 구현\nService/Repository 계층, React Query 캐싱, Jest·Playwright 테스트 적용",
    subImages: [
      "/projectImg/movie1.png",
      "/projectImg/movie2.png",
      "/projectImg/movie3.png",
      "/projectImg/movie4.png",
      "/projectImg/movie5.png",
      "/projectImg/movie6.png",
    ],
  },
  {
    id: 6,
    title: "포트폴리오",
    desc: "포트폴리오의 첫 인상을 결정하는 인트로 애니메이션에는 제가 개발자로서 추구하는 가치와 태도를 담았습니다.",
    isFeatured: true,
    category: "Next.js",
    tags: ["Next.js", "TypeScript", "Emotion", "Framer Motion", "Nodemailer"],
    img: "/projectImg/port1.png",
    githubUrl: "https://github.com/groguJH/portfolio",
    serviceUrl: "",
    detailDesc1:
      "단일 페이지 구조 위에서 인트로 애니메이션, 배경 모션, 커스텀 버블 커서, 스크롤 가이드를 더해\n사용자에게 몰입감 있는 인터랙티브 경험을 제공하고자 설계했습니다.\n\n1. 멈추지 않는 흐름: 파도와 물방울\n화면을 채우는 파도와 물방울은 빠르게 변화하는 웹 생태계를 나타냅니다. 끊임없이 움직이는 파도처럼 기술적 성장을 멈추지 않고 유연하게 적응하는 개발자가 되고자 하는 마음을 시각적으로 구현했습니다.\n\n2. 몰입의 정점: 터져 나오는 인사말\n부드럽게 움직이던 물방울이 터지며 나타나는 인사말은 막연했던 상상을 인터랙티브한 경험으로 치환하는 과정의 즐거움과, 사용자에게 건네는 첫 인사의 설렘을 Framer Motion의 역동적인 효과로 표현했습니다.\n\n3. 생동감 있는 디테일: 움직이는 뱃지\n정적인 텍스트에 움직이는 뱃지를 더해 중앙으로 시선을 집중시키고, 작은 디테일에서도 생동감을 느낄 수 있는 인터페이스를 지향했습니다.",
    detailDesc2:
      "Framer Motion과 Lottie를 이용한 인트로 및 배경 오브젝트, 스크롤 가이드 구현\nGlassCursor 기반의 마우스 추적 및 클릭 팝 효과로 사용자 피드백 강화\n프로젝트 탭 필터링과 모달 상세 보기로 포트폴리오 탐색성 최적화\nreact-hook-form + zod를 활용한 문의 폼 유효성 검증 시스템 구축\nNext.js API Route를 통한 Nodemailer 메일 전송 및 Slack Webhook 알림 연동",
    subImages: [
      "/projectImg/port1.png",
      "/projectImg/port2.png",
      "/projectImg/port3.png",
      "/projectImg/port4.png",
    ],
  },
];
