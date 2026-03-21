import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  color: white;
`;

export const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;
`;

export const SwiperSection = styled.div`
  width: 100%;
  padding: 40px 20px;
  overflow: hidden;

  .auto-width-slide {
    width: 420px !important;
  }
`;

export const GlassCardWrapper = styled.div`
  width: 360px;
  min-height: 420px;
  padding: 28px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardHeader = styled.header`
  margin-bottom: 18px;
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

export const CardContent = styled.div`
  margin-top: 10px;
`;

export const SkillList = styled.ul`
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemTitle = styled.span`
  font-weight: 700;
  font-size: 15px;
`;

export const ItemDesc = styled.span`
  font-size: 14px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.85);

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;
