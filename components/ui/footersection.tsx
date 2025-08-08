"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, Building2 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info & Newsletter */}
          <div className="relative">
            <div className="flex items-center space-x-2 mb-6">
             
              <span className="text-xl font-bold">SwiftBank</span>
            </div>
            <p className="mb-6 text-gray-400 leading-relaxed">
              White-label banking infrastructure for the next generation of fintech companies.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Product</h3>
            <nav className="space-y-2 text-sm">
              <Link href="#features" className="block text-gray-400 transition-colors hover:text-emerald-400">
                Features
              </Link>
              <Link href="#pricing" className="block text-gray-400 transition-colors hover:text-emerald-400">
                Pricing
              </Link>
              <Link href="#" className="block text-gray-400 transition-colors hover:text-emerald-400">
                Documentation
              </Link>
              <Link href="#" className="block text-gray-400 transition-colors hover:text-emerald-400">
                API Reference
              </Link>
              <Link href="#" className="block text-gray-400 transition-colors hover:text-emerald-400">
                SDKs
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <nav className="space-y-2 text-sm">
              <Link href="#" className="block text-gray-400 transition-colors hover:text-emerald-400">
                About
              </Link>
              <Link href="#" className="block text-gray-400 transition-colors hover:text-emerald-400">
                Careers
              </Link>
              <Link href="#" className="block text-gray-400 transition-colors hover:text-emerald-400">
                Blog
              </Link>
              <Link href="#" className="block text-gray-400 transition-colors hover:text-emerald-400">
                Press
              </Link>
              <Link href="#contact" className="block text-gray-400 transition-colors hover:text-emerald-400">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
            <address className="space-y-2 text-sm not-italic text-gray-400 mb-6">
              <p>123 Fintech Street</p>
              <p>San Francisco, CA 94105</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: hello@swiftbank.dev</p>
            </address>
            
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-700 bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-700 bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-700 bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-700 bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-gray-400" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4 text-gray-400" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-center md:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 SwiftBank. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-400 transition-colors hover:text-emerald-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 transition-colors hover:text-emerald-400">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 transition-colors hover:text-emerald-400">
              Security
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
