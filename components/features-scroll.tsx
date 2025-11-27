'use client'

import { ChevronLeft, ChevronRight, DollarSign, Phone, Settings, Users, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function FeaturesScroll() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'price' | 'booking' | 'bus'>('price')
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [hoveredPriceItem, setHoveredPriceItem] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showBusModal, setShowBusModal] = useState(false)
  const [selectedBusIndex, setSelectedBusIndex] = useState<number | null>(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      id: 'price',
      icon: DollarSign,
      title: '합리적인 가격',
      description: '여러 견적을 받아보고\n최저가로 예약하세요'
    },
    {
      id: 'booking',
      icon: Settings,
      title: '간편한 예약',
      description: '필터를 이용해 상황별\n견적을 비교해 보세요'
    },
    {
      id: 'bus',
      icon: Users,
      title: '인원에 따른 버스 추천',
      description: '인원에 맞는 대수와\n인승을 추천드립니다'
    }
  ]

  const busItems = [
    { name: '디즈니 성', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-VlLPEsY6J0N6RwKcmXIFaKpf8K1oSO.jpg' },
    { name: '겨울왕국', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2019_Ugly_Sweater_1920x1080-iSKM1TBay6FC2avSpxqXJ12wDyhsoU.jpg' },
    { name: '디즈니 성2', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disney%20Castle2-OBg6FyTzxmQZKrFwtMivhdGo7ggfST.jpg' },
    { name: '메리 포핀스', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mary-poppins-review-yUOLAWPMby6kwQcovHm1AkmDwpBkWH.jpg' },
    { name: '라푼젤', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rapunzel-T80qz39VvVkhBvUnK9f9UldQHLkEH3.jpg' },
    { name: '홀리데이', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2020_HolidayWrappingPaper_1920x1080-pxgyn3aIy8kiurLYsAtznkqqvcUoQF.jpg' },
    { name: '토이스토리', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%86%A0%EC%9D%B4%EC%8A%A4%ED%86%A0%EB%A6%AC-6cNYFRf3s3EPf3SpnX1pGzvLK1bWoh.jpg' },
    { name: '주먹왕 랄프', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wreck%20it%20Ralph-Y4drh1nHoBmLZ9Ry26PGwLPQZHuXu9.jpg' },
    { name: '이스터', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2019_Easter_Wallpaper-1920x1080-JDCIYkhLXF7ulFyA7L1ZRctUSvg2hc.jpg' },
    { name: '미키마우스', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallpaperflare.com_wallpaper-86VR53x3kmGj3gWC4YVFoRvS8NpHhW.jpg' }
  ]

  const pricingItems = [
    { 
      key: 'people',
      label: '인원수', 
      shortDesc: '탑승 인원에 따라',
      fullDesc: '탑승인원에 따라 최적의 버스를 선택해줍니다.'
    },
    { 
      key: 'day',
      label: '요일', 
      shortDesc: '원하는 요일 선택',
      fullDesc: '원하시는 요일을 자유롭게 선택하실 수 있습니다.'
    },
    { 
      key: 'driver',
      label: '기사 통행', 
      shortDesc: '기사 동행 유무',
      fullDesc: '기사님의 동행 여부를 선택하실 수 있습니다.'
    },
    { 
      key: 'busType',
      label: '버스 종류', 
      shortDesc: '버스 종류',
      fullDesc: '다양한 버스 종류 중에서 선택하실 수 있습니다.'
    }
  ]

  const tabContent = {
    booking: {
      title: '킹버스에서 견적 받기',
      steps: [
        { 
          number: 1,
          title: '운행 방법 선택',
          desc: '왕복 운행 편도 운행 중 하나를 선택해 주세요'
        },
        {
          number: 2,
          title: '대절 정보 입력',
          desc: '출발지, 도착지, 인원, 인원 정보를 입력해 주세요 인원 수가 정해지지 않은 경우 및 금'
        },
        {
          number: 3,
          title: '예약자 정보 입력',
          desc: '예약자 정보를 입력한 뒤 가경정에 대한 결제 방식을 선택해 주세요'
        },
        {
          number: 4,
          title: '예약 완료',
          desc: '예약에 대한 문의사항은 1544-1919로 연락 주세요'
        }
      ]
    }
  }

  const getBoxColor = (stepNumber: number) => {
    const colors = ['bg-white', 'bg-yellow-400', 'bg-green-500', 'bg-blue-500']
    return colors[stepNumber - 1]
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? busItems.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === busItems.length - 1 ? 0 : prev + 1))
  }

  const getItemIndex = (offset: number) => {
    const index = currentIndex + offset
    if (index < 0) return busItems.length + index
    if (index >= busItems.length) return index - busItems.length
    return index
  }

  const handleCenterImageClick = () => {
    setSelectedBusIndex(currentIndex)
    setShowBusModal(true)
  }

  return (
    <>
      <section ref={sectionRef} className="relative bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              빠르고 간편한 킹버스
            </h2>
            <p className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-500 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              5분안에 원하는 내용에 따른 견적을 확인하고<br />
              예약까지 한번에!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (feature.id === 'price' || feature.id === 'booking' || feature.id === 'bus') {
                      setActiveTab(feature.id as 'price' | 'booking' | 'bus')
                      setTimeout(() => {
                        document.getElementById('tab-content')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }
                  }}
                  className={`bg-gray-900 border border-gray-800 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-2xl hover:border-red-600 hover:-translate-y-2 ${
                    (feature.id === 'price' || feature.id === 'booking' || feature.id === 'bus') ? 'cursor-pointer' : ''
                  } ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 shadow-lg' 
                      : 'opacity-0 translate-y-10 shadow-none'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${200 + index * 200}ms` : '0ms'
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-600 rounded-full p-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 whitespace-pre-line text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="tab-content" className="relative bg-black py-20 px-4 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 mb-12">
            <button
              onClick={() => setActiveTab('price')}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'price'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              합리적인 가격
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'booking'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              간편한 예약
            </button>
            <button
              onClick={() => setActiveTab('bus')}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'bus'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              버스 추천
            </button>
          </div>

          {activeTab === 'price' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-700 ${
                  activeTab === 'price' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-5xl font-black text-white leading-tight mb-4 transition-all duration-300">
                  {hoveredPriceItem 
                    ? pricingItems.find(item => item.key === hoveredPriceItem)?.label 
                    : '합리적인 가격'}
                </h2>
                <p className="text-gray-400 text-lg transition-all duration-300">
                  {hoveredPriceItem 
                    ? pricingItems.find(item => item.key === hoveredPriceItem)?.fullDesc
                    : '궁금한 칸에 마우스를 올려보세요!'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {pricingItems.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredPriceItem(item.key)}
                    onMouseLeave={() => setHoveredPriceItem(null)}
                    className={`bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform cursor-pointer hover:scale-105 ${
                      activeTab === 'price' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionDelay: `${idx * 100}ms`
                    }}
                  >
                    <div className="flex justify-center mb-3">
                      {idx % 2 === 0 ? (
                        <Users className="w-8 h-8 text-red-600" />
                      ) : (
                        <Settings className="w-8 h-8 text-red-600" />
                      )}
                    </div>
                    <h3 className="font-bold text-white mb-1">{item.label}</h3>
                    <p className="text-sm text-gray-400">{item.shortDesc}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'booking' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div
                className={`transition-all duration-700 ${
                  activeTab === 'booking' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-4xl font-black text-white leading-tight mb-12">
                  {tabContent.booking.title}
                </h2>

                <div className="space-y-8">
                  {tabContent.booking.steps.map((step, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredStep(step.number)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className={`flex gap-6 transition-all duration-300 transform cursor-pointer hover:scale-105 ${
                        activeTab === 'booking' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{
                        transitionDelay: `${idx * 150}ms`
                      }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-gray-700 bg-white">
                          <span className="text-lg font-bold text-black">{step.number}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center transition-all duration-700">
                <div className="relative w-80 h-[500px] bg-gray-300 rounded-3xl border-8 border-gray-800 shadow-2xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gray-800 rounded-b-2xl"></div>
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pt-10">
                    <div className="relative w-full h-full bg-gradient-to-b from-gray-200 to-gray-100">
                      {hoveredStep && (
                        <div 
                          className={`absolute inset-4 ${getBoxColor(hoveredStep)} rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center`}
                        >
                          <span className="text-4xl font-bold text-gray-800 opacity-50">
                            {hoveredStep}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`transition-all duration-700 ${
              activeTab === 'bus' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-white mb-2">인원에 따른 버스 추천</h2>
                <p className="text-gray-400 text-lg">화살표를 눌러 다양한 버스를 확인해보세요</p>
              </div>
              
              <div className="relative flex items-center justify-center min-h-[400px] py-12">
                <button
                  onClick={handlePrev}
                  className="absolute left-8 z-20 bg-white hover:bg-gray-100 text-black p-4 rounded-lg transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="relative w-full max-w-5xl h-[350px] flex items-center justify-center">
                  {[-2, -1, 0, 1, 2].map((offset) => {
                    const itemIndex = getItemIndex(offset)
                    const item = busItems[itemIndex]
                    const isCentered = offset === 0

                    return (
                      <div
                        key={`${itemIndex}-${offset}`}
                        className="absolute transition-all duration-700 ease-out"
                        style={{
                          transform: `translateX(${offset * 180}px) scale(${isCentered ? 1.2 : 0.7})`,
                          zIndex: isCentered ? 10 : 5 - Math.abs(offset),
                          opacity: isCentered ? 1 : 0.3,
                          filter: isCentered ? 'none' : 'blur(1px)',
                        }}
                      >
                        <div 
                          className={`bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-700 ${
                            isCentered ? 'w-56 h-72 cursor-pointer hover:scale-105' : 'w-44 h-56'
                          }`}
                          onClick={isCentered ? handleCenterImageClick : undefined}
                        >
                          <div className="w-full h-full relative">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                            {isCentered && (
                              <div className="absolute top-4 left-0 right-0 text-center">
                                <span className="bg-gray-900/90 text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg">
                                  {item.name}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <button
                  onClick={handleNext}
                  className="absolute right-8 z-20 bg-white hover:bg-gray-100 text-black p-4 rounded-lg transition-all duration-300 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {showBusModal && selectedBusIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={() => setShowBusModal(false)}
        >
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={busItems[selectedBusIndex].image || "/placeholder.svg"}
                alt={busItems[selectedBusIndex].name}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_dq86r4dq86r4dq86-qR98Om8feV64XdUj6Ij8u24ngeDVHa.png"
                alt="버스 내부"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
