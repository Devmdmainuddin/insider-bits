import React from 'react'
import { Badge } from '../ui/badge'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-8">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/1.png"
            alt="Fashion woman in yellow outfit"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className="bg-teal-500 text-white mb-2">Fashion</Badge>
            <h1 className="text-3xl font-bold mb-2">Style Chronicles Fashion Trends and Tips</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span>Robert Sunmary</span>
              <span>15 Jan, 2024</span>
            </div>
          </div>
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </section>
  )
}

export default Hero