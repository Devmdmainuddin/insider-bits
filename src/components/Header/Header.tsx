import React from 'react';
import { Button } from '../ui/button';
import { Facebook, Instagram, Menu, Search, Twitter,} from 'lucide-react';
import Link from 'next/link';


const Header = () => {


  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button className="lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link href='/'>
              <div className="text-2xl font-bold">ZORIK</div>
            </Link>
            <nav className="hidden lg:flex space-x-6">
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                GADGET
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                LIFE STYLE
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                FOOD
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                TRAVEL
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                GAMING
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                POST FEATURES
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                CONTACT
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            
              <Search className="h-5 w-5 text-gray-600 cursor-pointer"  />
           
            <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              SUBSCRIBE
            </Button>
            <div className="flex space-x-2">
              <Facebook className="h-4 w-4 text-gray-600" />
              <Twitter className="h-4 w-4 text-gray-600" />
              <Instagram className="h-4 w-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;