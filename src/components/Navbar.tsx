import Link from 'next/link';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:from-green-300 hover:to-blue-400 transition-all">
            MonkCI
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/features" 
              className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
            >
              Features
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
            >
              About Us
            </Link>
            <Button 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 cursor-pointer"
              asChild
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 