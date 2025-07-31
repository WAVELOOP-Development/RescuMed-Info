"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

export function MobileAppSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set up auto-scroll
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 3000);
    };

    // Stop auto-scroll
    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Update current slide
    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    
    startAutoScroll();

    // Pause on hover
    const handleMouseEnter = () => stopAutoScroll();
    const handleMouseLeave = () => startAutoScroll();

    const carouselElement = document.querySelector('[data-carousel="true"]');
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', handleMouseEnter);
      carouselElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      stopAutoScroll();
      api.off("select", updateCurrent);
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', handleMouseEnter);
        carouselElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [api]);
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-center lg:text-left font-bold text-gray-900 mb-6">
              Mobile App for Ambulance Teams
            </h2>
            <p className="text-xl text-center lg:text-left text-gray-600 mb-8 leading-relaxed">
              Designed specifically for emergency responders, our mobile app
              provides intuitive tools that work seamlessly during high-stress
              situations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    One-Touch Emergency Alerts
                  </h3>
                  <p className="text-gray-600">
                    Instantly notify hospitals of incoming patients with
                    critical information
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Patient Data Entry
                  </h3>
                  <p className="text-gray-600">
                    Quick and secure patient information recording with
                    voice-to-text support
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Hospital Communication
                  </h3>
                  <p className="text-gray-600">
                    Direct messaging and calling capabilities with hospital
                    emergency departments
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
              <Carousel
                setApi={setApi}
                className="w-full"
                data-carousel="true"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="w-full h-[450px] rounded-xl overflow-hidden">
                      <Image
                        src="/rescuemed.png"
                        alt="Mobile App Interface Preview"
                        width={500}
                        height={750}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full h-[450px] rounded-xl overflow-hidden">
                      <Image
                        src="/resumed-web.png"
                        alt="Web Dashboard Preview"
                        width={500}
                        height={750}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div className="flex justify-center space-x-2 mt-4">
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${current === 0 ? 'bg-blue-600 animate-pulse' : 'bg-gray-300'}`}></div>
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${current === 1 ? 'bg-blue-600 animate-pulse' : 'bg-gray-300'}`}></div>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                Mobile App & Web Dashboard Preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
