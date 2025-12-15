"use client";

import { useEffect, useRef, useState } from "react";
import { Bus } from "lucide-react"; // 아이콘 임포트
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
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black"
    >
      {/* 1. 배경: 깔끔한 블랙 그라데이션 (초기 스타일) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent pointer-events-none h-96 z-10"></div>

      {/* 2. 메인 컨텐츠 영역 */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center gap-12 pt-16 pb-20">
        {/* 텍스트 영역 */}
        <h1
          className={`text-center px-4 relative z-20 text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            쉽고 빠른 견적,
          </span>
          <span className="block text-4xl md:text-6xl font-bold drop-shadow-lg">
            버스 대절은 <span className="text-red-600">킹버스</span>
          </span>
        </h1>

        {/* 3. 버스 아이콘 애니메이션 (초기 버전 복구) */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
            delay: 0.2,
          }}
          // 빨간색 원형 배경 + 빛나는 효과(shadow) 추가
          className="inline-block rounded-full bg-red-600 p-6 md:p-8 shadow-[0_0_30px_rgba(220,38,38,0.6)] z-20"
        >
          <Bus className="h-16 w-16 text-white md:h-20 md:w-20" />
        </motion.div>
      </div>

      {/* 하단 그라데이션 (테마 색상과 자연스럽게 연결) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-transparent to-background z-30 pointer-events-none"></div>
    </section>
  );
}
