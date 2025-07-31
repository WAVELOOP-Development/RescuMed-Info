import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Smartphone, Monitor, BarChart3 } from "lucide-react";

export function SystemOverview() {
  return (
    <section className="lg:py-20 py-12 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Emergency Care Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three integrated platforms working together to save lives and
            improve emergency response efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Mobile App
              </CardTitle>
              <CardDescription className="text-gray-600">
                For Ambulance Staff
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Intuitive mobile application enabling ambulance crews to share
                real-time location, patient status, and communicate directly
                with hospitals during transport.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Hospital Dashboard
              </CardTitle>
              <CardDescription className="text-gray-600">
                For Medical Staff
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive web dashboard allowing hospital staff to track
                incoming ambulances, prepare for patient arrivals, and
                coordinate emergency room resources effectively.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Admin Dashboard
              </CardTitle>
              <CardDescription className="text-gray-600">
                For System Management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Advanced analytics and management platform providing system
                oversight, performance metrics, and administrative controls for
                optimal system operation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
