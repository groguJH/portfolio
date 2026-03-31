import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ContactFormData } from "../../containers/ContactContainer";
import {
  Section,
  Title,
  Container,
  InfoWrapper,
  SendingEmail,
  SendingEmailWrapper,
  ErrorText,
  InputField,
  FooterWrapper,
} from "../presenters/utils/contractEmail";
import { Footer } from "./utils/footer";

export interface ContactPresenterProps {
  register: UseFormRegister<ContactFormData>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  isSubmitting: boolean;
  errors: FieldErrors<ContactFormData>;
}

export default function ContactPresenter({
  register,
  handleSubmit,
  isSubmitting,
  errors,
}: ContactPresenterProps) {
  return (
    <Section id="Contact">
      <Title>Contact</Title>
      <Container>
        <InfoWrapper>
          {/* 이메일 */}
          <form onSubmit={handleSubmit} noValidate>
            <InputField hasError={!!errors.email}>
              <input {...register("email")} placeholder="이메일" />
              <ErrorText isVisible={!!errors.email}>
                {errors.email?.message || "올바른 형식을 입력해주세요."}
              </ErrorText>
            </InputField>
            {/* 제목 */}
            <InputField hasError={!!errors.title}>
              <input {...register("title")} placeholder="제목" />
              <ErrorText isVisible={!!errors.title}>
                {errors.title?.message || "제목을 입력해주세요."}
              </ErrorText>
            </InputField>
            {/* 내용 */}
            <InputField hasError={!!errors.message}>
              <textarea {...register("message")} placeholder="내용" />
              <ErrorText isVisible={!!errors.message}>
                {errors.message?.message || "내용을 입력해주세요."}
              </ErrorText>
            </InputField>
            <SendingEmailWrapper>
              <button type="submit" disabled={isSubmitting}>
                <SendingEmail />
              </button>
            </SendingEmailWrapper>
          </form>
        </InfoWrapper>
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Section>
  );
}
