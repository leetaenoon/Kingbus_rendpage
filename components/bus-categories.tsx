"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "결혼식",
    image: "/images/wedding.jpg",
    description: "행복한 결혼식을 위한 하객 버스",
  },
  {
    id: 2,
    name: "워크샵",
    image: "/images/workshop.jpg",
    description: "팀빌딩과 워크샵을 위한 단체 버스",
  },
  {
    id: 3,
    name: "산악회",
    image: "/images/hiking.jpg",
    description: "등산 모임을 위한 편안한 버스",
  },
  {
    id: 4,
    name: "MT/현장학습",
    image: "/images/mt.jpg",
    description: "대학 MT, 초중고 현장학습 버스",
  },
  {
    id: 5,
    name: "콘서트",
    image: "/images/concert.jpg",
    description: "콘서트와 공연 관람을 위한 버스",
  },
  {
    id: 6,
    name: "골프",
    image: "/images/golf.jpg",
    description: "골프 라운딩을 위한 프리미엄 버스",
  },
  {
    id: 7,
    name: "낚시",
    image: "/images/fishing.jpg",
    description: "낚시 동호회를 위한 편안한 버스",
  },
  {
    id: 8,
    name: "통근/셔틀",
    image: "/images/commute.jpg",
    description: "출퇴근 및 정기 셔틀 버스",
  },
  {
    id: 9,
    name: "어린이집",
    image: "/images/kindergarten.jpg",
    description: "어린이집 소풍 및 행사 버스",
  },
];

export default function BusCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 (3초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === categories.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <section className="py-20 bg-background transition-colors duration-200">
      <div className="container mx-auto px-4">
        {/* 타이틀 영역 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            킹버스가 추천하는 버스대절!
          </h2>
          <p className="text-muted-foreground">
            다양한 목적에 맞는 최적의 버스를 찾아보세요
          </p>
        </div>

        {/* 슬라이드 영역 */}
        <div className="relative">
          {/* 왼쪽 버튼 (반응 속도 duration-150으로 단축) */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all duration-150 hover:bg-black/50 text-white hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* 메인 이미지 */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-muted">
            {categories.map((category, index) => (
              <div
                key={category.id}
                // [수정됨] duration-700 -> duration-300 (슬라이드 전환 속도 2배 이상 빠르게)
                className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* 텍스트 가독성을 위한 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* 텍스트 내용 */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                  <h3 className="text-white font-bold text-3xl md:text-5xl mb-2 drop-shadow-md">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 text-lg md:text-xl drop-shadow-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 오른쪽 버튼 (반응 속도 duration-150으로 단축) */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all duration-150 hover:bg-black/50 text-white hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 하단 인디케이터 (점) */}
          <div className="flex justify-center gap-3 mt-6">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                // [수정됨] duration-300 -> duration-150 (하단 점 반응 속도 단축)
                className={`w-3 h-3 rounded-full transition-all duration-150 ${
                  index === currentIndex
                    ? "bg-red-600 scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`${index + 1}번 슬라이드로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
