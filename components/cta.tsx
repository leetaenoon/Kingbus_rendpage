import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          지금 바로 시작하세요
        </h2>
        <p className="text-xl mb-8 opacity-90">
          특별한 할인과 프리미엄 서비스를 지금 체험해보세요. 
          믿을 수 있는 버스 대절 파트너, ProBus입니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg rounded-lg flex items-center justify-center gap-2">
            예약하기
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="border-white text-primary-foreground hover:bg-white/10 px-8 py-3 text-lg rounded-lg">
            문의하기
          </Button>
        </div>
      </div>
    </section>
  )
}
