import { Users, Calendar, Building2, Gift } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: '여행 투어',
    description: '관광지 방문, 야외 활동, 단체 여행 등 모든 여행 관련 이동을 지원합니다.'
  },
  {
    icon: Calendar,
    title: '이벤트 대절',
    description: '결혼식, 피로연, 컨퍼런스 등 특별한 행사를 위한 버스 대절 서비스입니다.'
  },
  {
    icon: Building2,
    title: '기업 운송',
    description: '직원 이동, 워크숍, 출장 등 기업의 모든 운송 필요를 충족시킵니다.'
  },
  {
    icon: Gift,
    title: '학교 단체 이동',
    description: '수학여행, 현장학습, 학교 행사 등 학생들의 안전한 이동을 보장합니다.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            다양한 서비스
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            여러분의 필요에 맞게 선택할 수 있는 다양한 버스 대절 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-card rounded-xl p-8 border border-border flex gap-6">
                <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
