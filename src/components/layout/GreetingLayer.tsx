"use client";
import React, { useRef, useEffect, useState } from "react";

export default function GreetingLayer() {
  const [TypingText, setTypingText] = useState<String>("");
  const [show, setShow] = useState<boolean>(true);

  const text1 = "Hello ";
  const text2 = "프론트엔드 개발자를 꿈꾸는 강정화 입니다.";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let idx = 0;
    intervalRef.current = setInterval(() => {
      if (idx <= text2.length) {
        setTypingText(text2.slice(0, idx));
        idx++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 100);

    const timer = setTimeout(() => setShow(false), 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
    <div>
      <section className={`greeting-container ${!show ? "fade-out" : ""} `}>
        <h1 className="intro-title">{text1}</h1>
        <h1 className="typing-text">{TypingText}</h1>
      </section>
    </div>
  );
}
