"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Play, Clock, Sparkles } from "lucide-react";

export function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const demoVideoUrl =
    "https://www.youtube.com/embed/-_5kO9bUwfU?si=yA0QiqxgVe5449bF";

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
      <div className="absolute flex justify-start items-end inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent text-center p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight md:leading-tight">
            Advancing Emergency Care to Protect Lives{" "}
            <span className="text-blue-500">Worldwide</span>
          </p>
          <p className="text-md md:text-xl text-gray-300 mb-8">
            RescueMed is a life-saving emergency communication platform that
            connects ambulances and hospitals, reducing response times and
            improving patient outcomes through real-time tracking and secure
            data sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Learn More
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle className="text-xl font-semibold">
                    RescueMed Demo Video
                  </DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full px-6 pb-6">
                  {demoVideoUrl ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/-_5kO9bUwfU?si=yA0QiqxgVe5449bF"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-dashed border-blue-200 overflow-hidden group">
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-8 right-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                        <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse delay-700"></div>
                        <div className="absolute bottom-8 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                      </div>

                      <div className="relative z-10 text-center space-y-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-blue-600 ml-1" />
                          </div>
                          <div className="absolute -top-1 -right-1">
                            <Clock
                              className="w-6 h-6 text-blue-500 animate-spin"
                              style={{ animationDuration: "3s" }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                            <p className="text-blue-700 text-xl font-semibold">
                              Demo Coming Soon!
                            </p>
                            <Sparkles className="w-5 h-5 text-blue-500 animate-pulse delay-500" />
                          </div>
                          <p className="text-blue-600 text-sm max-w-xs mx-auto leading-relaxed">
                            We're preparing an amazing demo video to showcase
                            RescueMed's life-saving features
                          </p>
                        </div>

                        <div className="mt-6 w-48 mx-auto">
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full animate-pulse"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                          <p className="text-xs text-blue-500 mt-2 font-medium">
                            Processing
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
