import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <video
        preload="none"
        loop
        autoPlay
        controlsList="false"
        muted
        className="w-full h-screen object-cover"
      >
        <source src="./rescumed-landing.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute flex justify-start items-end inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent text-center p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-4xl md:text-6xl font-bold text-white mb-4">
            Transforming Emergency Care in{" "}
          </p>
          <p className="text-4xl md:text-6xl font-bold text-white mb-6 ">
            <span className="text-blue-600">Sri Lanka</span>
          </p>
          <p className="text-md md:text-2xl text-gray-300 mb-8 leading-relaxed">
            RescueMed is a life-saving emergency communication platform that
            connects ambulances and hospitals, reducing response times and
            improving patient outcomes through real-time tracking and secure
            data sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
