import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">ZORIK</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Welcome! Feel free to dive and match these infographics based on
              your interests and the preferences of your target audience. These
              infographics based.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <Facebook className="h-5 w-5" />
              <span>123K</span>
            </div>
            <div className="flex items-center space-x-2">
              <Twitter className="h-5 w-5" />
              <span>234K</span>
            </div>
            <div className="flex items-center space-x-2">
              <Instagram className="h-5 w-5" />
              <span>123K</span>
            </div>
            <div className="flex items-center space-x-2">
              <Youtube className="h-5 w-5" />
              <span>123K</span>
            </div>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white">
              LIFE STYLE
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              FASHION
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              TRAVEL
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              FOOD
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              BEAUTY
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              GAMING POST
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              TECH POST
            </a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            © Copyright 2024 Zorik Design by EGENSLAB
          </div>
        </div>
      </footer>
  )
}

export default Footer