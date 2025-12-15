"use client";

import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "김민수",
    role: "개인 여행객",
    comment:
      "여행을 가는데 버스 대절이 필요했는데, 킹버스를 통해 정말 편하게 예약했어요. 5분 만에 견적이 나와서 깜짝 놀랐습니다!",
    rating: 5,
  },
  {
    name: "박은정",
    role: "회사 담당자",
    comment:
      "직원 워크샵을 위해 이용했는데 가격도 합리적이고 운전사분도 정말 친절하셨어요. 다음에도 꼭 이용하겠습니다.",
    rating: 5,
  },
  {
    name: "이준호",
    role: "학교 교사",
    comment:
      "수학여행 버스 대절로 킹버스를 선택했는데 안전성과 서비스 모두 만족합니다. 강력 추천합니다!",
    rating: 5,
  },
];

export default function Testimonials() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-16 md:py-24 bg-secondary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            고객 만족도 98%
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3,000+ 예약 고객들이 킹버스를 신뢰합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <Quote className="w-6 h-6 text-red-200 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-red-600 text-red-600"
                    />
                  ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.comment}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
