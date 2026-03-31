import styled from "@emotion/styled";
import { ContactFormData } from "No/containers/ContactContainer";
import { FieldErrors } from "react-hook-form";
import { MdMarkEmailRead } from "react-icons/md";

interface props {
  errors: FieldErrors<ContactFormData>;
}

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 20px;
  position: relative;
  @media (max-width: 768px) {
    padding: 96px 16px 72px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-bottom: 28px;
    font-size: 34px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 40px;
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 24px 18px;
  }
`;

export const InputField = styled.div<{ hasError?: boolean }>`
  position: relative;
  width: 100%;
  margin-bottom: 30px;

  input,
  textarea {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const InfoWrapper = styled.div<{ errors?: boolean }>`
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
      gap: 12px;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 14px 18px;
    position: relative;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid
      ${(props) => (props.errors ? "#ef4444" : "rgba(255, 255, 255, 0.2)")};
    font-size: 15px;
    color: #00ffff;
    font-family: inherit;
    line-height: 1.5;
    margin-bottom: 24px;
    transition: all 0.3s ease;

    &::placeholder {
      color: #94a3b8;
    }

    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.2);
      border-color: ${(props) => (props.errors ? "#ef4444" : "#82bef5")};
      box-shadow: 0 0 0 4px rgba(130, 190, 245, 0.15);
    }

    @media (max-width: 768px) {
      padding: 13px 16px;
      font-size: 14px;
    }
  }

  textarea {
    min-height: 150px;
    resize: none;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
    }
  }
`;

export const ErrorText = styled.p<{ isVisible: boolean }>`
  position: absolute;
  bottom: -20px;
  left: 4px;
  max-width: calc(100% - 8px);
  font-size: 12px;
  color: #ef4444;
  font-weight: 500;
  margin: 0;
  overflow-wrap: anywhere;

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const SendingEmailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background: transparent !important;

  button {
    width: 100%;
    height: 54px;
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background-color: transparent !important;
      transform: translateY(-2px);
      color: #00ffff;
    }

    &:disabled {
      background-color: transparent !important;
      cursor: not-allowed;
    }
    svg {
      font-size: 3rem;
      fill: currentColor;
      transition: fill 0.3s ease;
    }

    @media (max-width: 768px) {
      height: 48px;
      font-size: 14px;

      svg {
        font-size: 2.5rem;
      }
    }
  }
`;

export const SendingEmail = styled(MdMarkEmailRead)``;

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
  color: #4a90e2;
  font-size: 14px;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 12px;
    bottom: 20px;
  }
`;
