import { MapPin, Shield, Wifi, Users } from "lucide-react"

export function KeyFeatures() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Critical Care</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced technology designed to handle the most demanding emergency situations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
            <p className="text-gray-600">
              Live GPS tracking of ambulances with ETA calculations and route optimization
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Encryption</h3>
            <p className="text-gray-600">End-to-end encryption ensuring patient data privacy and HIPAA compliance</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Wifi className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Offline Functionality</h3>
            <p className="text-gray-600">
              Reliable operation even in low-network areas with automatic sync when connected
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Role-based Access</h3>
            <p className="text-gray-600">
              Customized interfaces and permissions for different user roles and responsibilities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
