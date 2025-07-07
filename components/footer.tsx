import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"

import logo from "@/public/logo-white-E.png"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center lg:justify-start justify-center space-x-3 mb-4">
              <Image src={logo} alt="RescueMed Logo" width={200} height={32} />
            </div>
            <p className="text-gray-400 text-center lg:text-left mb-6 max-w-md">
              Transforming emergency care across Sri Lanka through innovative technology and seamless communication
              between ambulances and hospitals.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-center lg:text-left font-semibold mb-4">Quick Links</h3>
            <ul className="text-center lg:text-left space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-gray-400 hover:text-white transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-center lg:text-left mb-4">Support</h3>
            <ul className="space-y-2 text-center lg:text-left">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} RescueMed. All rights reserved. <br />Saving lives through technology.
          </p>
        </div>
      </div>
    </footer>
  )
}
