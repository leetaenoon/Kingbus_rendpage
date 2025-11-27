"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const categories = [
  {
    id: 1,
    name: "결혼식",
    image: "/images/mary-poppins-review.jpg",
    description: "행복한 결혼식을 위한 하객 버스",
  },
  {
    id: 2,
    name: "워크샵",
    image: "/images/gemini-generated-image-sqhadksqhadksqha.png",
    description: "팀빌딩과 워크샵을 위한 단체 버스",
  },
  {
    id: 3,
    name: "산악회",
    image: "/images/disney-20castle2.jpg",
    description: "등산 모임을 위한 편안한 버스",
  },
  {
    id: 4,
    name: "MT/현장학습",
    image: "/images/gemini-generated-image-4krx5o4krx5o4krx.png",
    description: "대학 MT, 초중고 현장학습 버스",
  },
  {
    id: 5,
    name: "콘서트",
    image: "/images/gemini-generated-image-dq86r4dq86r4dq86.png",
    description: "콘서트와 공연 관람을 위한 버스",
  },
  {
    id: 6,
    name: "골프",
    image: "/images/mary-poppins-review.jpg",
    description: "골프 라운딩을 위한 프리미엄 버스",
  },
  {
    id: 7,
    name: "낚시",
    image: "/images/disney-20castle2.jpg",
    description: "낚시 동호회를 위한 편안한 버스",
  },
  {
    id: 8,
    name: "통근/셔틀",
    image: "/images/gemini-generated-image-sqhadksqhadksqha.png",
    description: "출퇴근 및 정기 셔틀 버스",
  },
  {
    id: 9,
    name: "어린이집",
    image: "/images/gemini-generated-image-4krx5o4krx5o4krx.png",
    description: "어린이집 소풍 및 행사 버스",
  },
]

export default function BusCategories() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* 타이틀 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">킹버스가 추천하는 버스대절!</h2>
          <p className="text-gray-400">다양한 목적에 맞는 최적의 버스를 찾아보세요</p>
        </div>

        <div className="relative">
          {/* 왼쪽 화살표 */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/40"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* 메인 이미지 슬라이드 */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* 텍스트 콘텐츠 */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                  <h3 className="text-white font-bold text-3xl md:text-5xl mb-2">{category.name}</h3>
                  <p className="text-gray-200 text-lg md:text-xl">{category.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 오른쪽 화살표 */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/40"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="flex justify-center gap-3 mt-6">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-500 scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
