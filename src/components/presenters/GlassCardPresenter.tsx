import React, { JSX } from "react";
import * as S from "./utils/GlassSkillsCard";
import { SkillCategory } from "No/data/skillsdata";

export default function GlassCardPresenter({
  title,
  skills: text,
}: SkillCategory): JSX.Element {
  return (
    <S.GlassCardWrapper>
      <S.CardHeader>
        <S.CardTitle>{title}</S.CardTitle>
      </S.CardHeader>

      <S.CardContent>
        <S.SkillList>
          {text.map(function (item, index) {
            return (
              <S.SkillItem key={index}>
                <S.ItemTitle>{item.name}</S.ItemTitle>
                <S.ItemDesc>{item.desc}</S.ItemDesc>
              </S.SkillItem>
            );
          })}
        </S.SkillList>
      </S.CardContent>
    </S.GlassCardWrapper>
  );
}
