import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Grow Your Brand with
              <span className="text-blue-600"> Professional Content & Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We help personal brands and e-commerce businesses scale through eye-catching visuals, engaging content,
              and professional brand management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Brand Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Play className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Brands Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10M+</div>
                <div className="text-sm text-gray-600">Views Generated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Brand Monitoring</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Campaign Performance</span>
                  <span className="text-sm text-green-600 font-semibold">+247% ↗</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full">
                  <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-3/4"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.2x</div>
                    <div className="text-sm text-gray-600">ROAS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">$2.1M</div>
                    <div className="text-sm text-gray-600">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
