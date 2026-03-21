import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ContactFormData } from "../../containers/ContactContainer";
import {
  Section,
  Title,
  Container,
  InfoWrapper,
  SendingEmail,
} from "../presenters/utils/contractEmail";

interface ContactPresenterProps {
  register: UseFormRegister<ContactFormData>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  isSubmitting: boolean;
}

export default function ContactPresenter({
  register,
  handleSubmit,
  isSubmitting,
}: ContactPresenterProps) {
  return (
    <Section id="Contact">
      <Title>Contact</Title>
      <Container>
        <InfoWrapper>
          <form onSubmit={handleSubmit}>
            <input
              {...register("email")}
              placeholder="이메일"
              style={{ backgroundColor: "#82bef5" }}
            />
            <input {...register("title")} placeholder="제목" />
            <textarea {...register("message")} placeholder="내용" />
            <SendingEmail>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "전송 중..." : "보내기"}
              </button>
            </SendingEmail>
          </form>
        </InfoWrapper>
      </Container>
    </Section>
  );
}
