import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Results from "../../components/results"

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses achieve exceptional growth.
          </p>
        </div>
      </section>

      {/* Results Component */}
      <Results />

      <Footer />
    </div>
  )
}
