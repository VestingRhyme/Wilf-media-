import Hero from "../components/hero"
import Services from "../components/services"
import Results from "../components/results"
import CTA from "../components/cta"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Results />
      <CTA />
      <Footer />
    </div>
  )
}
