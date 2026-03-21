import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import * as S from "../utils/GlassSkillsCard";
import GlassCardPresenter from "../GlassCardPresenter";
import { SKILLS_DATA } from "No/data/skillsdata";

export default function SwiperPresenter() {
  return (
    <S.SwiperSection className="swiper-section">
      <Swiper
        modules={[Mousewheel, FreeMode]}
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={true}
        mousewheel={true}
        freeMode={true}
        style={{ width: "100%", height: "550px" }} // 높이는 여유 있게 조절
      >
        {SKILLS_DATA.map((category, idx) => (
          <SwiperSlide key={idx} className="auto-width-slide">
            <GlassCardPresenter
              title={category.title}
              skills={category.skills}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperSection>
  );
}
