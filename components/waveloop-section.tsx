"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ExternalLink } from "lucide-react";

import Image from "next/image";

const technologies = [
  "React Native",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Firebase",
  "Google Cloud",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
];

const achievements = [
  "50+ Successful Projects Delivered",
  "Healthcare & Emergency Response Expertise",
  "24/7 Technical Support",
  "ISO 27001 Security Standards",
  "GDPR Compliant Solutions",
  "Multi-platform Development",
];

export function WaveloopSection() {
  return (
    <section
      id="waveloop"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" />
              Powered by WAVELOOP
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Innovators Behind RescueMed
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              WAVELOOP is a cutting-edge software development company
              specializing in healthcare technology, emergency response systems,
              and mission-critical applications.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="mb-8">
            {/* Company Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 p-1 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Image
                        src="/waveloop-icon.png"
                        alt="WAVELOOP Logo"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        About WAVELOOP
                      </h3>
                      <p className="text-blue-600 font-medium">
                        Software Development Excellence
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Founded with a mission to create technology that saves
                    lives. WAVELOOP, A future driven tech company crafting
                    secure, user first solutions. We merge creativity with
                    innovation to build bold AI platforms and seamless digital
                    experiences. At our core, we are thinkers, builders, and
                    problem solvers shaping a smarter digital world.
                  </p>
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">5+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">50+</div>
                      <div className="text-sm text-gray-600">Projects Delivered</div>
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-none">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white">
                    Ready to Transform Your Vision?
                  </h3>
                </div>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Partner with WAVELOOP to build innovative solutions that make
                  a difference. From concept to deployment, we're with you every
                  step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                    onClick={() =>
                      window.open("https://waveloop.dev", "_blank")
                    }
                  >
                    Visit waveloop.dev
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-blue-600 text-white hover:bg-white hover:text-blue-600"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Start Your Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
