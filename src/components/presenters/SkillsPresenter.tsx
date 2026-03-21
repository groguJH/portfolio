import React from "react";
import GlassCardPresenter from "./GlassCardPresenter";
import SwiperPresenter from "./utils/SwiperPresenter";
import * as S from "./utils/GlassSkillsCard";

export default function SkillsPresenter() {
  return (
    <S.Section id="Skills">
      <S.Title>Skills</S.Title>
      <SwiperPresenter />
    </S.Section>
  );
}
