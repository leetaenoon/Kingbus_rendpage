"use client";

import { Menu, X, ChevronDown, Heart, Sun, Moon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 테마 설정 훅
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 하이드레이션 매칭 보장
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsCustomerServiceOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsCustomerServiceOpen(false);
    }, 300);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
  ];

  const handleSelectInterest = (categoryId: string) => {
    setSelectedInterest(categoryId);
    setIsInterestModalOpen(false);
  };

  return (
    <>
      {/* 배경: bg-background (테마따라 변함) / 글자: text-foreground (테마따라 변함) */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* 로고 */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-white">🚌</span>
              </div>
              <span className="text-2xl font-bold text-foreground transition-colors">
                킹버스
              </span>
            </div>

            {/* PC 메뉴 */}
            <nav className="hidden md:flex items-center gap-8">
              {["특징", "후기", "연락처", "앱 다운로드"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-muted-foreground hover:text-red-600 transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* PC 우측 버튼들 */}
            <div className="hidden md:flex items-center gap-4">
              {/* 테마 버튼 */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent text-foreground transition-colors"
                aria-label="테마 변경"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                className="flex items-center gap-1 text-muted-foreground hover:text-red-600 transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsInterestModalOpen(true)}
              >
                <Heart className="w-4 h-4" />
                관심있는 분야
              </button>

              <div className="relative">
                <button
                  className="flex items-center gap-1 text-muted-foreground hover:text-red-600 transition-colors duration-200 text-sm font-medium"
                  onClick={() =>
                    setIsCustomerServiceOpen(!isCustomerServiceOpen)
                  }
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  고객센터
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isCustomerServiceOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-40 bg-popover border border-border rounded-lg shadow-lg overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href="https://pf.kakao.com/_wGHxfT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-popover-foreground hover:bg-red-600 hover:text-white transition-colors text-sm"
                    >
                      전화상담
                    </a>
                    <a
                      href="https://pf.kakao.com/_wGHxfT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-popover-foreground hover:bg-red-600 hover:text-white transition-colors text-sm"
                    >
                      1:1상담
                    </a>
                  </div>
                )}
              </div>

              <Button
                className="bg-red-600 text-white hover:bg-red-700 shadow-md transition-all hover:scale-105"
                onClick={() => window.open("https://m.kingbus.kr/", "_blank")}
              >
                예약하러 가기
              </Button>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent text-foreground transition-colors"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground p-1"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* 모바일 메뉴 드로어 */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 border-t border-border animate-in slide-in-from-top-2">
              <nav className="flex flex-col gap-1 pt-4">
                {["특징", "후기", "연락처", "앱 다운로드"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-foreground hover:text-red-600 hover:bg-accent/50 rounded-md transition-colors px-3 py-3 font-medium text-base"
                  >
                    {item}
                  </a>
                ))}
                <div className="px-2 mt-2">
                  <Button
                    className="w-full bg-red-600 text-white hover:bg-red-700 h-11 text-base"
                    onClick={() =>
                      window.open("https://m.kingbus.kr/", "_blank")
                    }
                  >
                    예약하러 가기
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* 모달 */}
      {isInterestModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsInterestModalOpen(false)}
        >
          <div
            className="relative bg-card rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsInterestModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-foreground text-center mb-2">
              관심있는 분야를 선택하세요
            </h2>
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-200 border ${
                    selectedInterest === category.id
                      ? "bg-red-600 text-white border-red-600 shadow-lg scale-105"
                      : "bg-accent/50 text-foreground border-transparent hover:bg-accent hover:border-border"
                  }`}
                  onClick={() => handleSelectInterest(category.id)}
                >
                  <span className="text-3xl">{category.icon}</span>
                  <span className="font-medium text-sm">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
