import styled from "@emotion/styled";

export const RWDColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 6px;
    padding: 8px 14px;
  }
`;

export const RWDRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 6px;
    padding: 8px 14px;
  }
`;

export const ResponsiveText = styled.span`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
  word-break: break-all;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
