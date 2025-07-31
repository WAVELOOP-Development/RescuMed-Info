import { Card, CardContent } from "@/components/ui/card";

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Impact, Real Lives Saved
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how RescueMed is transforming emergency care across Sri Lanka
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">
              40%
            </div>
            <div className="text-xl font-semibold mb-2">
              Faster Response Times
            </div>
            <p className="text-blue-100">
              Average reduction in emergency response time across participating
              hospitals
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">
              99.9%
            </div>
            <div className="text-xl font-semibold mb-2">System Uptime</div>
            <p className="text-blue-100">
              Reliable service ensuring help is always available when needed
            </p>
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="text-6xl text-blue-200">"</div>
              <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                RescueMed has transformed emergency care by enabling real-time
                updates, early specialist alerts, and critical care readiness —
                empowering our team to deliver faster, better-informed treatment
                from the moment patients are en route.
              </blockquote>
              <div className="flex items-center justify-center mt-8 space-x-4">
                <div className="w-12 h-12 bg-blue-300 rounded-full hidden lg:flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-lg">TD</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">
                    Mr. D.M.T. Dissanayake.
                  </div>
                  <div className="text-blue-200">
                    In-charge of cardiographers, Cardiology Unit, National Hospital Kandy.
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
