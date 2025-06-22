import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Services from "../../components/services"
import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const pricingTiers = [
    {
      name: "Brand Starter",
      price: "$497",
      period: "one-time",
      description: "Perfect for new personal brands and small businesses",
      features: [
        "Custom logo design",
        "Basic brand guidelines",
        "5 social media templates",
        "2 revision rounds",
        "7-day delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "Content Pro",
      price: "$1,497",
      period: "/month",
      description: "For established brands ready to scale their content",
      features: [
        "Complete brand package",
        "20 custom thumbnails/month",
        "Daily comment monitoring",
        "4 short-form videos/week",
        "DM management",
        "Weekly strategy calls",
      ],
      cta: "Most Popular",
      popular: true,
    },
    {
      name: "Brand Authority",
      price: "$2,997",
      period: "/month",
      description: "For serious personal brands and growing e-commerce",
      features: [
        "Everything in Content Pro",
        "Unlimited thumbnails",
        "24/7 social monitoring",
        "Daily content creation",
        "Personal brand strategist",
        "Priority support",
        "Monthly brand audit",
      ],
      cta: "Contact Us",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional branding and content services for personal brands and e-commerce businesses.
          </p>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your brand goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "ring-2 ring-blue-600" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full ${tier.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
