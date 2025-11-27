"use client"

import { Menu, X, ChevronDown, Heart } from "lucide-react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "wedding", name: "결혼식", icon: "💒" },
  { id: "workshop", name: "워크샵", icon: "💼" },
  { id: "hiking", name: "산악회", icon: "⛰️" },
  { id: "mt", name: "MT/현장학습", icon: "🎒" },
  { id: "concert", name: "콘서트", icon: "🎤" },
  { id: "golf", name: "골프", icon: "⛳" },
  { id: "fishing", name: "낚시", icon: "🎣" },
  { id: "commute", name: "통근/셔틀", icon: "🏢" },
  { id: "kindergarten", name: "어린이집", icon: "👶" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false)
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false)
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsCustomerServiceOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsCustomerServiceOpen(false)
    }, 300)
  }

  const handleSelectInterest = (categoryId: string) => {
    setSelectedInterest(categoryId)
    setIsInterestModalOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">🚌</span>
              </div>
              <span className="text-2xl font-bold text-white">킹버스</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-white hover:text-red-600 transition-colors duration-300 text-sm font-medium"
              >
                특징
              </a>
              <a
                href="#testimonials"
                className="text-white hover:text-red-600 transition-colors duration-300 text-sm font-medium"
              >
                후기
              </a>
              <a
                href="#contact"
                className="text-white hover:text-red-600 transition-colors duration-300 text-sm font-medium"
              >
                연락처
              </a>
              <a href="#" className="text-white hover:text-red-600 transition-colors duration-300 text-sm font-medium">
                앱 다운로드
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                className="flex items-center gap-1 text-white hover:text-red-600 transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsInterestModalOpen(true)}
              >
                <Heart className="w-4 h-4" />
                관심있는 분야
              </button>

              <div className="relative">
                <button
                  className="flex items-center gap-1 text-white hover:text-red-600 transition-colors duration-300 text-sm font-medium"
                  onClick={() => setIsCustomerServiceOpen(!isCustomerServiceOpen)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  고객센터
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isCustomerServiceOpen && (
                  <div
                    className="absolute top-full mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href="https://pf.kakao.com/_wGHxfT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-white hover:bg-red-600 transition-colors duration-300 text-sm"
                    >
                      전화상담
                    </a>
                    <a
                      href="https://pf.kakao.com/_wGHxfT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-white hover:bg-red-600 transition-colors duration-300 text-sm"
                    >
                      1:1상담
                    </a>
                  </div>
                )}
              </div>

              <Button
                className="bg-red-600 text-white hover:bg-red-700"
                onClick={() => window.open("https://m.kingbus.kr/", "_blank")}
              >
                예약하러 가기
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-800">
              <nav className="flex flex-col gap-3 pt-4">
                <a
                  href="#features"
                  className="text-white hover:text-red-600 transition-colors duration-300 px-2 py-2 font-medium"
                >
                  특징
                </a>
                <a
                  href="#testimonials"
                  className="text-white hover:text-red-600 transition-colors duration-300 px-2 py-2 font-medium"
                >
                  후기
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-red-600 transition-colors duration-300 px-2 py-2 font-medium"
                >
                  연락처
                </a>
                <a
                  href="#"
                  className="text-white hover:text-red-600 transition-colors duration-300 px-2 py-2 font-medium"
                >
                  앱 다운로드
                </a>

                <button
                  className="flex items-center gap-2 text-white hover:text-red-600 transition-colors duration-300 px-2 py-2 font-medium text-left"
                  onClick={() => setIsInterestModalOpen(true)}
                >
                  <Heart className="w-4 h-4" />
                  관심있는 분야
                </button>

                <div className="border-t border-gray-800 pt-3 mt-2">
                  <p className="text-gray-400 text-sm px-2 mb-2">고객센터</p>
                  <a
                    href="https://pf.kakao.com/_wGHxfT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-red-600 transition-colors duration-300 px-2 py-2 font-medium"
                  >
                    전화상담
                  </a>
                  <a
                    href="https://pf.kakao.com/_wGHxfT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-red-600 transition-colors duration-300 px-2 py-2 font-medium"
                  >
                    1:1상담
                  </a>
                </div>

                <Button
                  className="w-full bg-red-600 text-white hover:bg-red-700 mt-3"
                  onClick={() => window.open("https://m.kingbus.kr/", "_blank")}
                >
                  예약하러 가기
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {isInterestModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={() => setIsInterestModalOpen(false)}
        >
          {/* 하얀색 불투명 배경 */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

          {/* 모달 컨텐츠 */}
          <div
            className="relative bg-black rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white text-center mb-2">관심있는 분야를 선택하세요</h2>
            <p className="text-gray-400 text-center mb-8">선택한 분야에 맞는 맞춤 정보를 제공해 드립니다</p>

            <div className="grid grid-cols-3 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                    selectedInterest === category.id
                      ? "bg-red-600 text-white"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                  onClick={() => handleSelectInterest(category.id)}
                >
                  <span className="text-3xl">{category.icon}</span>
                  <span className="font-medium text-sm">{category.name}</span>
                </button>
              ))}
            </div>

            <p className="text-gray-500 text-sm text-center mt-6">화면 바깥을 클릭하면 닫힙니다</p>
          </div>
        </div>
      )}
    </>
  )
}
