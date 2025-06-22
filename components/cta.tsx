import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Brand?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join 500+ personal brands and e-commerce businesses who trust us to create stunning visuals and manage their
          online presence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Brand Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Calendar className="mr-2 h-5 w-5" />
            Book Discovery Call
          </Button>
        </div>
        <div className="mt-8 text-blue-100">
          <p className="text-sm">Free consultation • Portfolio review • Custom strategy • No commitment required</p>
        </div>
      </div>
    </section>
  )
}
