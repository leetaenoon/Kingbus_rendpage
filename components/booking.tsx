'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Users, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    date: '',
    passengers: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
  }

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            지금 예약하세요
          </h2>
          <p className="text-xl opacity-90">
            간단한 정보만 입력하면 최고의 버스 서비스를 경험하실 수 있습니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-3 opacity-90">출발지</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
                <input
                  type="text"
                  placeholder="출발 도시를 입력하세요"
                  className="w-full bg-white/20 border border-white/30 rounded-lg pl-12 pr-4 py-3 text-primary-foreground placeholder:opacity-60 focus:outline-none focus:border-white/50"
                  value={formData.departure}
                  onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 opacity-90">목적지</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
                <input
                  type="text"
                  placeholder="목적지를 입력하세요"
                  className="w-full bg-white/20 border border-white/30 rounded-lg pl-12 pr-4 py-3 text-primary-foreground placeholder:opacity-60 focus:outline-none focus:border-white/50"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 opacity-90">이동 날짜</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
                <input
                  type="date"
                  className="w-full bg-white/20 border border-white/30 rounded-lg pl-12 pr-4 py-3 text-primary-foreground placeholder:opacity-60 focus:outline-none focus:border-white/50"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 opacity-90">탑승객 수</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
                <input
                  type="number"
                  placeholder="탑승객 수"
                  min="1"
                  className="w-full bg-white/20 border border-white/30 rounded-lg pl-12 pr-4 py-3 text-primary-foreground placeholder:opacity-60 focus:outline-none focus:border-white/50"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                />
              </div>
            </div>
          </div>

          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg font-semibold rounded-lg flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            예약 신청하기
          </Button>

          <p className="text-center text-sm opacity-75 mt-4">
            예약 후 24시간 이내에 확인 전화를 드리겠습니다.
          </p>
        </form>
      </div>
    </section>
  )
}
