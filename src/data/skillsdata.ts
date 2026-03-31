export interface SkillEntry {
  name: string;
  desc: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillEntry[];
}
export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "라이브러리",
    skills: [
      {
        name: `TypeScript`,
        desc: `noSQL MongoDB를 사용하면서 데이터 무결성과 타입 안전성을 확보하여 레이어드 아키텍처 내에서 데이터 흐름 오류를 방지하고자 사용했습니다.`,
      },
      {
        name: `Recoil`,
        desc: `컴포넌트 간에 공유가 필요한 전역 상태를 가볍고 직관적으로 분산 관리할 수 있습니다.`,
      },
      {
        name: `React Query (TanStack Query)`,
        desc: `TMDB API 및 서버 데이터의 캐싱, 동기화, 업데이트를 효율적으로 관리하여 네트워크 요청을 최소화 할 수 있습니다.`,
      },
    ],
  },
  {
    title: "프레임워크",
    skills: [
      {
        name: `Next.js 14 (Pages Router)`,
        desc: `SSR과 SEO 최적화가 중요한 영화 정보 서비스 특성을 고려해 선택했으며 안정적인 Pages Router 기반으로 빠른 초기 로딩을 지원합니다.`,
      },
      {
        name: `React 18`,
        desc: `동시성렌더링 기능을 이해하여 로딩상태를 선언적으로 관리하여 사용자경험을 향상시킬 수 있습니다.`,
      },
    ],
  },
  {
    title: "프론트엔드",
    skills: [
      {
        name: `Tailwind CSS`,
        desc: `D-day 프로젝트에서 빠른 스타일링과 유틸리티 클래스 기반 UI 구성을 위해 사용했습니다.`,
      },
      {
        name: `Bootstrap`,
        desc: `TodoList 프로젝트에서 Toast UI와 기본 컴포넌트 스타일 적용을 위해 사용했습니다.`,
      },
      {
        name: `Ant Design`,
        desc: `폼, 테이블, 캐러셀 등 표준화된 UI 컴포넌트로 빠른 구현을 위해 사용했습니다.`,
      },
      {
        name: `Emotion`,
        desc: `CSS-in-JS 방식으로 컴포넌트 단위 스타일을 관리하고 동적인 스타일링을 구현합니다.`,
      },
      {
        name: `NextAuth.js`,
        desc: `카카오, 네이버 소셜 로그인과 JWT 기반 세션 관리를 표준화된 방식으로 구현했습니다.`,
      },
    ],
  },
  {
    title: " UI / Animation ",
    skills: [
      {
        name: `Swiper`,
        desc: `React 전용 컴포넌트로 슬라이드 UI 구현을 위해 사용했습니다.`,
      },
      {
        name: `Framer Motion`,
        desc: `제스처 기반 애니메이션으로 부드러운 UI 전환 경험을 제공합니다.`,
      },
    ],
  },
  {
    title: "백엔드",
    skills: [
      {
        name: `Next.js API Routes`,
        desc: `별도의 백엔드 서버 없이 서버리스 함수 형태로 API를 운영하여 인프라 복잡도를 낮췄습니다.`,
      },
      {
        name: `MongoDB`,
        desc: `영화 데이터와 예매/피드백 데이터를 저장하기 위해 유연한 구조의 NoSQL 데이터베이스를 사용했습니다.`,
      },
      {
        name: `MongoDB Driver`,
        desc: `lib/mongodb.ts를 통해 데이터베이스 연결을 관리하고 성능을 최적화했습니다.`,
      },
    ],
  },
  {
    title: "협력도구",
    skills: [
      {
        name: `Sentry`,
        desc: `실시간 에러 트래킹과 성능 모니터링을 통해 런타임 오류를 빠르게 파악합니다.`,
      },
      {
        name: `Jest`,
        desc: `src/services 핵심 비즈니스 로직에 대한 단위 테스트를 수행하여 코드 신뢰성을 높였습니다.`,
      },
      {
        name: `Playwright`,
        desc: `로그인과 예매 등 사용자 시나리오 기반 E2E 테스트로 시스템 안정성을 검증했습니다.`,
      },
      {
        name: `JSDoc`,
        desc: `코드 문서화를 통해 코드 이해도를 높이고 협업시 효율을 향상시킬 수 있습니다.`,
      },
    ],
  },
];
