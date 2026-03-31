import styled from "@emotion/styled";
import { FaGithub } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 100px 20px;
  background-color: transparent;

  @media (max-width: 768px) {
    padding: 96px 16px 72px;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 34px;
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;
  margin-bottom: 50px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    gap: 10px 14px;
    margin-bottom: 28px;
  }
`;

export const FilterIcon = styled.div`
  color: #ffffff;
  cursor: pointer;
`;

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
`;

export const Tag = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(38, 181, 181, 0.2);
  color: #26b5b5;
  border: 1px solid rgba(38, 181, 181, 0.3);
`;

interface TabProps {
  active: boolean;
}

export const Tab = styled.div<TabProps>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.active ? "#c745ff" : "#888")};
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
  text-align: center;
  overflow-wrap: anywhere;

  &:hover {
    color: #4a6fa5;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
  background: transparent;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProjectItem = styled.div`
  min-width: 0;
  padding: 28px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  width: 90%;
  max-width: 750px;
  max-height: 80vh;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 40px;
  color: white;
  position: relative;

  /* 모달이 길어질때  */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    width: 94%;
    max-height: 85vh;
    padding: 24px 18px;
  }
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  p {
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    overflow-wrap: anywhere;
  }
  ol {
    color: rgba(255, 255, 255, 0.8);
  }
  li {
    list-style-type: decimal;
    margin-bottom: 8px;
    overflow-wrap: anywhere;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #64ffda;
  margin: 16px auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
  padding-bottom: 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
    padding-bottom: 10px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 24px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    top: 14px;
    right: 14px;
    font-size: 20px;
  }
`;

export const LightboxDialog = styled.dialog`
  padding: 0;
  border: none;
  background: transparent;

  max-width: 90vw;
  max-height: 90vh;
  outline: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::backdrop {
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
    cursor: pointer;
  }

  .lightbox-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 4px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const SubImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 30px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    max-width: 100%;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    overflow-wrap: anywhere;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 32px;

  a.project-link {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;

    svg {
      transition: all 0.3s ease;
      fill: currentColor;
    }

    &:hover {
      color: #a855f7;
      transform: translateY(-2px);
    }
  }
`;

const iconBaseStyles = `
  font-size: 1.2rem;
  transition: color 0.3s ease;
  cursor: pointer;
  margin-right:8px;
  &:hover {
    color: #4a6fa5;
    
  }
`;
export const GithubIcon = styled(FaGithub)`
  ${iconBaseStyles}
`;
export const PortfolioLinkIcon = styled(FaInternetExplorer)`
  ${iconBaseStyles}
`;

export const UnderLine = styled.hr`
  max-width: 70%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 3.5rem auto; /* 위아래 간격을 주고 좌우 auto로 중앙 정렬 */
  color: rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 2rem auto;
  }
`;
