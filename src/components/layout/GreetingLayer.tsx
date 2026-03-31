"use client";
import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import waveData from "../../../public/wavePool.json";
import bubbleData from "../../../public/introBubble.json";
import explosionData from "../../../public/BubbleExplosion.json";

export default function GreetingLayer() {
  const [phase, setPhase] = useState(1); // 1:파도, 2:물거품, 3:글씨, 4:폭발&검정전환
  const [typingText, setTypingText] = useState("");
  const [show, setShow] = useState(true);

  const text1 = "Hello ";
  const text2 = "프론트엔드 개발자를 꿈꾸는 강정화 입니다.";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const waveTimer = setTimeout(() => setPhase(2), 2000);
    const bubbleTimer = setTimeout(() => setPhase(3), 4000);
    const explosionTimer = setTimeout(() => setPhase(4), 7200);
    const totalTimer = setTimeout(() => setShow(false), 9500);

    return () => {
      clearTimeout(waveTimer);
      clearTimeout(bubbleTimer);
      clearTimeout(explosionTimer);
      clearTimeout(totalTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === 3 || phase === 4) {
      if (typingText.length === 0) {
        let idx = 0;
        intervalRef.current = setInterval(() => {
          if (idx <= text2.length) {
            setTypingText(text2.slice(0, idx));
            idx++;
          } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
          }
        }, 80);
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase]);

  if (!show) return null;

  const getBgClass = function () {
    if (phase === 1) return "bg-black";
    if (phase === 2 || phase === 3) return "bg-blue";
    if (phase === 4) return "bg-black";
    return "bg-black";
  };

  return (
    <section
      className={`greeting-container ${getBgClass()} ${!show ? "fade-out" : ""}`}
    >
      {/* Phase 1: Wave Pool */}
      {phase === 1 && (
        <div className="lottie-wrapper">
          <Lottie
            animationData={waveData}
            style={{ width: "100%", height: "100%" }}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
        </div>
      )}

      {/* Phase 2: Bubbles */}
      {phase === 2 && (
        <div className="lottie-wrapper">
          <Lottie
            animationData={bubbleData}
            loop={false}
            style={{ width: "80%", height: "80%" }}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
        </div>
      )}

      {/* Phase 3 & 4: Text Content & Mega Explosion */}
      {(phase === 3 || phase === 4) && (
        <div className="text-content">
          <h1 className="intro-title">{text1}</h1>
          <h1 className="typing-text">{typingText}</h1>

          {phase === 4 && (
            <div className="explosion-wrapper">
              <Lottie
                animationData={explosionData}
                loop={false}
                style={{ width: "150vw", height: "150vh" }}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
