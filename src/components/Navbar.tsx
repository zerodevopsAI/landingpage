import Link from 'next/link';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-500 hover:text-green-400 transition-colors">
            ZeroDevOpsAI
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-green-500 transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-green-500 transition-colors cursor-pointer"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-green-500 transition-colors cursor-pointer"
            >
              Contact
            </Link>
            <Button 
              className="bg-green-600 hover:bg-green-700 cursor-pointer"
              asChild
            >
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 