import React from "react";
import {
  InfoButton,
  InfoContent,
  InformationContainer,
  InfoWrapper,
  IntroText,
  Section,
  Title,
} from "./utils/IntroPresenter";
import { INTRO_DATA } from "../../data/intro";
import profileImage from "../../../public/myProfileBadge.json";
import Lottie from "lottie-react";

export default function AboutPresenter() {
  return (
    <Section id="About">
      <Title>About</Title>
      <InformationContainer>
        <div
          style={{
            width: 240,
            height: 240,
            borderRadius: "50%",
          }}
        >
          <Lottie
            animationData={profileImage}
            loop={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <InfoWrapper>
          <InfoContent>
            <p>{INTRO_DATA.contract.phone}</p>
            <br />
            <p>{INTRO_DATA.contract.email}</p>
          </InfoContent>

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
        <p
          style={{
            whiteSpace: "pre-line",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
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
