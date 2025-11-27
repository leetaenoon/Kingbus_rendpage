'use client'

import { Bus } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent pointer-events-none h-96"></div>
      
      <div className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center gap-12 overflow-hidden pt-16 pb-20">
        <h1 className={`hero-animation-text text-center px-4 relative z-20 text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          쉽고 빠른 견적,
          <br />
          버스 대절은 킹버스
        </h1>
        
        <div className={`bus-image-container relative z-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Bus className="animate-bus-slide w-80 h-40 text-red-600 stroke-1" />
        </div>
      </div>
    </section>
  )
}
