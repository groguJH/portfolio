import styled from "@emotion/styled";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-saira",
});

export const NavWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  font-family: var(--font-saira), sans-serif;
  font-weight: bold;
  z-index: 2000;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  min-width: 0;
  padding: 0 1rem;

  &.spacer {
    flex-grow: 1;
  }

  #a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    justify-content: center;

    &.spacer {
      display: none;
    }
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 2rem;
  white-space: nowrap;

  a {
    overflow-wrap: anywhere;
  }

  a:hover {
    color: #a855f7;
    transform: scale(1.22);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1rem;
    white-space: normal;
    font-size: 0.95rem;
  }
`;
