import Link from "next/link";
import LogoIcon from "No/components/presenters/utils/LogoIcon";
import {
  MenuWrapper,
  NavContent,
  NavWrapper,
} from "No/components/presenters/utils/Navigation";

import React, { JSX } from "react";

export default function NavigationContainer(): JSX.Element {
  return (
    <NavWrapper>
      <NavContent>
        <LogoIcon />
      </NavContent>
      <NavContent className="spacer" />
      <NavContent>
        <MenuWrapper>
          <Link href="#About" aria-label="소개해요">
            About
          </Link>
          <Link href="#Skills" aria-label="기술설명">
            Skills
          </Link>
          <Link href="#Projects" aria-label="프로젝트들">
            Projects
          </Link>
          <Link href="#Contact" aria-label="연락주세요">
            Contact
          </Link>
        </MenuWrapper>
      </NavContent>
    </NavWrapper>
  );
}
