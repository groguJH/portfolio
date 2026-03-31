import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 20px;

  @media (max-width: 768px) {
    padding: 96px 16px 72px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 28px;
    font-size: 36px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 28px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
    max-width: 360px;
  }
`;

export const EmailText = styled.div`
  background: #3e444d;
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

export const InfoContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 18px;
  gap: 8px;

  p {
    display: block;
    color: #fff;
    font-size: 14px;
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    text-align: center;
  }
`;

export const InfoButton = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;

  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.25s ease;
  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const IntroText = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: left;
  font-size: 20px;
  line-height: 1.8;
  padding: 8px 24px;

  p {
    overflow-wrap: anywhere;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.7;
  }
`;
