import React from "react";
import {
  InfoButton,
  InformationContainer,
  InfoWrapper,
  IntroText,
  Section,
  Title,
} from "./utils/IntroPresenter";
import Image from "next/image";
import { INTRO_DATA } from "../../data/intro";

export default function AboutPresenter() {
  return (
    <Section id="About">
      <Title>About</Title>
      <InformationContainer>
        {/* <ImageContainer> */}
        <Image
          src={INTRO_DATA.profileImage}
          alt="Profile Badge"
          width={160} // 크기를 조금 더 키움
          height={160}
          style={{ borderRadius: "50%" }}
        />
        {/* </ImageContainer> */}
        {/* 사진 아래엔 깃허브 이메일 contract 연결한다. */}
        <InfoWrapper>
          {INTRO_DATA.links.map((link) => (
            <InfoButton
              key={link.id}
              as="a"
              href={link.url}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </InfoButton>
          ))}
        </InfoWrapper>
      </InformationContainer>

      <IntroText>
        <p>
          {INTRO_DATA.description.map((line, index) => (
            <React.Fragment key={index}>
              {line} <br />
            </React.Fragment>
          ))}
        </p>
      </IntroText>
    </Section>
  );
}
