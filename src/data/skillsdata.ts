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
    title: "프레임워크",
    skills: [
      {
        name: `Next.js 14 (Pages Router)`,
        desc: `SSR과 SEO 최적화가 중요한 영화 정보 서비스 특성을 고려해 선택했으며 안정적인 Pages Router 기반으로 빠른 초기 로딩을 지원합니다.`,
      },
      {
        name: `React 18`,
        desc: `컨테이너/프리젠터 패턴을 사용하여 컴포넌트의 재사용성을 높이고, 라이프사이클을 이해하여 로딩상태를 선언적으로 관리하여 사용자경험을 향상시킬 수 있습니다.`,
      },
      {
        name: `Spring Boot`,
        desc: `Diary Project에서 Java 기반 REST API 서버를 구성하고 인증, 일기 CRUD, DB 저장 흐름을 프론트엔드와 분리해 구현했습니다.`,
      },
    ],
  },
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
        desc: `폼, 테이블, 캐러셀, 달력 등 표준화된 UI 컴포넌트로 빠른 구현과 안정적인 인터페이스 구성을 위해 사용했습니다.`,
      },
      {
        name: `Emotion`,
        desc: `CSS-in-JS 방식으로 컴포넌트 단위 스타일을 관리하고 동적인 스타일링을 구현합니다.`,
      },
      {
        name: `styled-components`,
        desc: `Diary Project에서 공통 레이아웃, 카드, 입력 폼 스타일을 컴포넌트 단위로 분리해 일관된 UI를 구성했습니다.`,
      },
      {
        name: `NextAuth.js`,
        desc: `Credentials와 소셜 로그인 흐름을 구성하고, 백엔드에서 발급한 JWT를 프론트 세션에 연결해 인증 상태를 관리했습니다.`,
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
      {
        name: `Recharts`,
        desc: `Diary Project의 월간 기록 화면에서 날짜별 작성 횟수와 기록 흐름을 막대 그래프로 시각화했습니다.`,
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
      {
        name: `PostgreSQL / Supabase`,
        desc: `관계형 데이터가 필요한 일기 서비스에서 사용자, 소셜 계정, 일기 기록을 분리해 저장하고 관리했습니다.`,
      },
    ],
  },
  {
    title: "Java 백엔드",
    skills: [
      {
        name: `Java 21`,
        desc: `Spring Boot 백엔드의 기반 언어로 사용하며 DTO, Entity, Service 계층을 타입 기반으로 분리해 구현했습니다.`,
      },
      {
        name: `Spring Security + JWT`,
        desc: `JWT 인증 필터와 stateless 보안 설정을 통해 인증이 필요한 API를 보호하고 사용자별 일기 접근 권한을 검증했습니다.`,
      },
      {
        name: `Spring Data JPA`,
        desc: `User, Diary, OAuthAccount 엔티티 관계를 설계하고 Repository 메서드로 사용자별 월간 기록 조회와 soft delete 흐름을 구현했습니다.`,
      },
      {
        name: `REST API 설계`,
        desc: `인증 API와 일기 CRUD API를 분리하고, 프론트엔드에서 Bearer 토큰으로 요청하는 구조를 설계했습니다.`,
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
