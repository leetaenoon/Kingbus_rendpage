'use client'

import { Zap, DollarSign, Shield, Clock, Users, Smartphone } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const features = [
  {
    icon: Zap,
    title: '5분 안에 견적',
    description: '간단한 정보 입력만으로 즉시 견적을 확인할 수 있습니다.'
  },
  {
    icon: DollarSign,
    title: '합리적인 가격',
    description: '여러 견적을 비교하고 최저가를 선택할 수 있습니다.'
  },
  {
    icon: Shield,
    title: '안전 보장',
    description: '정기점검 차량과 숙련된 운전사가 안전을 책임집니다.'
  },
  {
    icon: Clock,
    title: '정확한 시간 약속',
    description: '정시 출발, 정시 도착으로 신뢰할 수 있는 서비스입니다.'
  },
  {
    icon: Users,
    title: '전담 담당자',
    description: '예약부터 운행까지 전담 담당자가 케어합니다.'
  },
  {
    icon: Smartphone,
    title: '모바일 앱',
    description: '앱을 통한 편리한 자동 견적 및 예약 기능을 제공합니다.'
  }
]

export default function Features() {
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

  return (
    <section ref={sectionRef} id="features" className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            킹버스만의 장점
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            빠르고 안전하며 합리적인 버스 대절 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className={`bg-gray-900 rounded-xl p-6 border border-gray-800 hover:shadow-md hover:border-red-300 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
