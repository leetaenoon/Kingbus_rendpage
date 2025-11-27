'use client'

import { useState, useEffect, useRef } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      question: '운행 후 추가로 붙는 금액이 있나요?',
      answer: '기본 요금에는 모든 비용이 포함되어 있습니다. 단, 심야 할증이나 톨게이트 비용 등은 추가로 발생할 수 있습니다. 예약 시 상세한 안내를 받으실 수 있습니다.'
    },
    {
      question: '인승 및 차량 정보를 바꿀 수 있나요?',
      answer: '예약 후에도 출발 3일 전까지는 인승 및 차량 정보 변경이 가능합니다. 고객센터를 통해 문의해 주시면 신속하게 처리해 드립니다.'
    },
    {
      question: '예약금은 얼마인가요?',
      answer: '예약금은 총 요금의 30%이며, 예약 확정 후 24시간 이내에 입금하셔야 합니다. 잔금은 운행 당일 현금 또는 카드로 결제하실 수 있습니다.'
    },
    {
      question: '운행 전 준비사항이 있나요?',
      answer: '특별한 준비사항은 없습니다. 다만, 출발 시간 10분 전에는 탑승 장소에 대기해 주시고, 승차 인원을 정확히 확인해 주세요.'
    },
    {
      question: '꼭 어플을 다운로드해야 하나요?',
      answer: '어플이 없어도 웹사이트를 통해 예약과 관리가 가능합니다. 하지만 어플을 이용하시면 실시간 차량 위치 확인, 푸시 알림 등 더 편리한 서비스를 이용하실 수 있습니다.'
    }
  ]

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-black transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          자주 묻는 질문
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-lg bg-zinc-900 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-zinc-800 transition-colors text-left">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <span className="text-white font-medium text-lg">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="pl-12 text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
