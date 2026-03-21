import styled from "@emotion/styled";
import { MdMarkEmailRead } from "react-icons/md";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  width: 360px;
  min-height: 420px;
  padding: 28px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 300px;
`;

const emailStyle = `
  font-size: 1.2rem;
  transition: color 0.3s ease;
  cursor: pointer;
  margin-right:8px;
  &:hover {
    color: #4a6fa5;   
  }
`;

export const SendingEmail = styled(MdMarkEmailRead)`
  ${emailStyle}
`;
