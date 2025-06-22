import { TrendingUp, DollarSign, Users, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Results() {
  const caseStudies = [
    {
      client: "Fitness Influencer",
      industry: "Personal Brand",
      challenge: "Low engagement and inconsistent brand image across platforms",
      solution: "Complete rebrand with new logo, consistent thumbnails, and daily content management",
      results: {
        roas: "400%",
        revenue: "50K",
        growth: "+280%",
        period: "3 months",
      },
      metrics: [
        { label: "Follower Growth", value: "+280%", icon: TrendingUp },
        { label: "Monthly Revenue", value: "$50K", icon: DollarSign },
        { label: "Engagement Rate", value: "12.4%", icon: Users },
        { label: "Video Views", value: "2M+", icon: Target },
      ],
    },
    {
      client: "E-commerce Fashion Store",
      industry: "E-commerce",
      challenge: "Poor brand recognition and low social media conversion rates",
      solution: "Brand redesign, professional thumbnails, and strategic short-form content",
      results: {
        roas: "320%",
        revenue: "180K",
        growth: "+450%",
        period: "4 months",
      },
      metrics: [
        { label: "Sales Increase", value: "+450%", icon: TrendingUp },
        { label: "Monthly Revenue", value: "$180K", icon: DollarSign },
        { label: "Social Traffic", value: "+380%", icon: Users },
        { label: "Brand Recognition", value: "85%", icon: Target },
      ],
    },
    {
      client: "Tech Entrepreneur",
      industry: "Personal Brand",
      challenge: "Struggling to build authority and attract business opportunities",
      solution: "Personal brand strategy, professional content creation, and community management",
      results: {
        roas: "500%",
        revenue: "120K",
        growth: "+600%",
        period: "6 months",
      },
      metrics: [
        { label: "LinkedIn Growth", value: "+600%", icon: TrendingUp },
        { label: "Speaking Gigs", value: "$120K", icon: DollarSign },
        { label: "Engagement", value: "15.2%", icon: Users },
        { label: "Brand Mentions", value: "+400%", icon: Target },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results for Our Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve exceptional growth and ROI.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h3>
                      <p className="text-blue-600 font-semibold">{study.industry}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Results in {study.results.period}:</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{study.results.roas}</div>
                            <div className="text-sm text-gray-600">ROAS</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{study.results.revenue}</div>
                            <div className="text-sm text-gray-600">Revenue</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                    <h4 className="text-xl font-semibold mb-6">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <metric.icon className="h-6 w-6" />
                          </div>
                          <div className="text-2xl font-bold mb-1">{metric.value}</div>
                          <div className="text-sm opacity-90">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
