import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;

  .name {
    color: #ffffff;
    margin-left: 4px;
  }
`;

export default function LogoIcon() {
  return (
    <Link
      href="/"
      passHref
      style={{ textDecoration: "none" }}
      aria-label="홈으로 이동"
    >
      <LogoWrapper>
        <Image src="/favicon.svg" alt="Logo" width={30} height={30} />
        <LogoText>
          <span className="name">JH</span>
        </LogoText>
      </LogoWrapper>
    </Link>
  );
}
