import { TrendingUp, Eye, Users, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Results() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results in Just 7 Days</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's exactly what we achieved for our client in one week with strategic content and brand management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal Brand Client</h3>
                    <p className="text-blue-600 font-semibold">Content Creator & Influencer</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">
                        Struggling with low engagement, inconsistent content, and slow follower growth despite having
                        good content ideas.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                      <p className="text-gray-600">
                        Complete content strategy overhaul with professional thumbnails, optimized posting schedule,
                        active community management, and strategic hashtag research.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Results in Just 7 Days:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">+1.2K</div>
                          <div className="text-sm text-gray-600">New Followers</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">800K</div>
                          <div className="text-sm text-gray-600">Total Views</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                  <h4 className="text-xl font-semibold mb-6">7-Day Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6" />
                      </div>
                      <div className="text-2xl font-bold mb-1">+1,200</div>
                      <div className="text-sm opacity-90">New Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Eye className="h-6 w-6" />
                      </div>
                      <div className="text-2xl font-bold mb-1">800K</div>
                      <div className="text-sm opacity-90">Total Views</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div className="text-2xl font-bold mb-1">+150%</div>
                      <div className="text-sm opacity-90">Engagement Boost</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Target className="h-6 w-6" />
                      </div>
                      <div className="text-2xl font-bold mb-1">7</div>
                      <div className="text-sm opacity-90">Days to Results</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What We Did Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Did to Achieve These Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">🎨 Professional Thumbnails</h4>
                <p className="text-gray-600">
                  Created eye-catching, click-worthy thumbnails that increased video click-through rates significantly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">📱 Short-Form Content Strategy</h4>
                <p className="text-gray-600">
                  Developed viral-ready content optimized for TikTok, Instagram Reels, and YouTube Shorts.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">💬 Active Community Management</h4>
                <p className="text-gray-600">
                  Monitored and responded to all comments and DMs within hours, building stronger audience
                  relationships.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">🎯 Strategic Optimization</h4>
                <p className="text-gray-600">
                  Optimized posting times, hashtags, and content format based on audience analytics and trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
