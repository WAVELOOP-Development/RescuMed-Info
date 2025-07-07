import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, BarChart3 } from "lucide-react"

export function WebDashboardSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Web Dashboards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful web-based interfaces designed for different user roles and responsibilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Hospital Dashboard</CardTitle>
              <CardDescription className="text-gray-600">For Medical Staff & Emergency Departments</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time ambulance tracking and ETA updates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Patient information and medical history access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Emergency room resource management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Direct communication with ambulance crews</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Automated alert system for critical cases</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Admin Dashboard</CardTitle>
              <CardDescription className="text-gray-600">For System Administrators & Managers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">System-wide performance analytics and reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">User management and role-based access control</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Response time metrics and optimization insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Hospital and ambulance service coordination</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Data export and compliance reporting tools</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
