import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import FeaturesScroll from "@/components/features-scroll"
import BusCategories from "@/components/bus-categories"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BusCategories />
      <FeaturesScroll />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
