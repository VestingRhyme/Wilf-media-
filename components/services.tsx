import { Target, TrendingUp, Users, Zap, Mail, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Brand Identity & Logos",
      description:
        "Professional logo design and complete brand identity packages that make your business stand out and build trust.",
      features: ["Custom Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection"],
    },
    {
      icon: Users,
      title: "Social Media Management",
      description:
        "24/7 monitoring and management of your comments and DMs to maintain your brand reputation and engage with your audience.",
      features: ["Comment Monitoring", "DM Management", "Community Engagement", "Response Templates"],
    },
    {
      icon: Video,
      title: "Thumbnail Design",
      description:
        "Eye-catching thumbnails that increase click-through rates and help your content stand out in crowded feeds.",
      features: ["YouTube Thumbnails", "Social Media Graphics", "A/B Testing", "Performance Optimization"],
    },
    {
      icon: TrendingUp,
      title: "Short Form Content",
      description:
        "Viral-ready short form content for TikTok, Instagram Reels, and YouTube Shorts that drives engagement and growth.",
      features: ["Content Strategy", "Video Editing", "Trend Research", "Platform Optimization"],
    },
    {
      icon: Zap,
      title: "Personal Brand Strategy",
      description: "Complete personal branding strategy to help you build authority and attract your ideal audience.",
      features: ["Brand Positioning", "Content Calendar", "Audience Analysis", "Growth Strategy"],
    },
    {
      icon: Mail,
      title: "E-commerce Branding",
      description:
        "Specialized branding services for e-commerce businesses to increase conversions and customer loyalty.",
      features: ["Product Photography", "Store Design", "Brand Messaging", "Customer Journey"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services That Build Brands</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete branding and content solutions designed to help personal brands and e-commerce businesses thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
