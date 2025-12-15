"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black"
    >
      {/* 1. 배경 이미지: 어두운 도심 도로 (Night City Road) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2564&auto=format&fit=crop"
          alt="Night City Road"
          fill
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
          priority
          className="opacity-60"
        />
        {/* 배경을 어둡게 눌러주는 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-20 w-full h-full flex flex-col justify-center pb-10">
        {/* 2. 텍스트 영역: 깔끔한 두 줄 처리 */}
        <div className="mb-10 w-full text-center z-30">
          <h1
            className={`hero-animation-text px-4 text-white text-4xl md:text-6xl font-bold leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block mb-2 md:mb-4 drop-shadow-lg">
              쉽고 빠른 견적,
            </span>
            <span className="block drop-shadow-lg">
              버스 대절은 <span className="text-red-600">킹버스</span>
            </span>
          </h1>
        </div>

        {/* 3. 버스 애니메이션 컨테이너: 왼쪽 정렬 (md:pl-20) */}
        {/* justify-center(모바일) -> justify-start(PC) 로 변경하여 왼쪽에 배치 */}
        <div className="relative w-full flex justify-center md:justify-start md:pl-10 lg:pl-32 px-4 overflow-visible">
          {/* 버스 크기 제어: 비율 강제(aspect-ratio) 제거하고 max-width만 설정 */}
          <div className="relative w-full max-w-[600px] md:max-w-[750px] lg:max-w-[900px]">
            {/* [버스 본체 모션] 오른쪽 화면 밖 -> 왼쪽으로 진입 */}
            <motion.div
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                isVisible ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }
              }
              transition={{
                duration: 1.8,
                ease: "easeOut", // 부드럽게 감속 (운전해서 정차하는 느낌)
                delay: 0.2,
              }}
              className="relative z-20 w-full"
            >
              {/* 정차 후 엔진 진동 (Idling) */}
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2.0, // 도착 후 진동 시작
                }}
                className="w-full relative"
              >
                {/* [중요] 이미지 비율 왜곡 방지: width/height 0 + sizes + style auto */}
                <Image
                  src="/bus-main.png"
                  alt="성화투어 킹버스"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // 원본 비율 유지
                  priority
                  className="drop-shadow-2xl relative z-20"
                />
              </motion.div>
            </motion.div>

            {/* [바닥 그림자] 버스 바로 아래에 위치 */}
            <motion.div
              initial={{ x: "100vw", opacity: 0, scaleX: 0.5 }}
              animate={
                isVisible
                  ? { x: 0, opacity: 0.8, scaleX: 1 }
                  : { x: "100vw", opacity: 0, scaleX: 0.5 }
              }
              transition={{
                duration: 1.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              // 마이너스 마진을 사용하여 버스 바퀴 위치로 그림자 올림
              className="w-[90%] h-[30px] bg-black blur-xl rounded-[100%] z-10 mx-auto mt-[-20px] md:mt-[-30px]"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
