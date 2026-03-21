import Link from "next/link";
import React, { JSX } from "react";

export default function NavigationContainer(): JSX.Element {
  return (
    <nav>
      <Link href="#About">About</Link>
      <Link href="#Skills">Skills</Link>
      <Link href="#Projects">Projects</Link>
      <Link href="#Contact">Contact</Link>
    </nav>
  );
}
