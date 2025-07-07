export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Revolutionizing Emergency Response</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Purpose</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                RescueMed bridges the critical communication gap between ambulance services and hospitals across Sri
                Lanka. Our platform ensures that every second counts in emergency situations by providing real-time
                coordination and data sharing capabilities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With features designed specifically for the Sri Lankan healthcare landscape, we address the unique
                challenges faced by emergency responders in both urban and rural areas.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Proven Benefits</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our comprehensive solution reduces emergency response times by up to 40% while ensuring secure,
                encrypted transmission of critical patient data. The platform's offline functionality guarantees
                reliability even in areas with poor network coverage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Built with reliability at its core, RescueMed operates seamlessly across different devices and network
                conditions, ensuring that help is always just a tap away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
