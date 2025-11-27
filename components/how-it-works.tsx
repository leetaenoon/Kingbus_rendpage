'use client'

import { CheckCircle, MapPin, CreditCard, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: '1',
      title: '정보 입력',
      description: '출발지, 도착지, 인원, 날짜를 입력하세요',
      icon: MapPin
    },
    {
      number: '2',
      title: '견적 확인',
      description: '맞춤형 버스 견적을 5분 안에 확인',
      icon: CheckCircle
    },
    {
      number: '3',
      title: '결제',
      description: '안전한 결제로 예약을 완료하세요',
      icon: CreditCard
    },
    {
      number: '4',
      title: '운행 확정',
      description: '전담 담당자가 상세한 내용을 안내합니다',
      icon: Phone
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            예약 방법
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            간단한 4단계로 버스를 대절할 수 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[50%] w-[calc(100%-2rem)] h-0.5 bg-gray-700" />
                )}

                <div className={`relative bg-gray-900 rounded-xl p-6 text-center shadow-sm border border-gray-800 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {step.description}
                  </p>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
