import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:from-green-300 hover:to-blue-400 transition-all cursor-pointer block">
              MonkCI
            </Link>
            <p className="text-gray-400 mb-4">
              Four-times faster builds, twenty-times faster cache, 75% cheaper minutes — all at GitHub pricing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer block">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-start-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <Mail className="h-4 w-4 inline mr-2" />
                <a 
                  href="mailto:info@monkci.com" 
                  className="text-green-400 hover:underline cursor-pointer"
                >
                  info@monkci.com
                </a>
              </p>
            </div>
            <div className="mt-6">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 w-full" asChild>
                <Link href="/contact">
                  Start Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MonkCI. All rights reserved. Built for developers, by developers.</p>
        </div>
      </div>
    </footer>
  );
} 