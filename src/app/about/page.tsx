import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Award, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            Our Mission
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We&apos;re on a mission to democratize DevOps by making it accessible to everyone. Our AI-powered platform automates complex operations, reduces costs, and helps teams ship better software faster.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-100">Our Vision</h2>
              <p className="text-gray-400 text-lg mb-8">
                Our team combines decades of DevOps expertise with cutting-edge AI technology. We&apos;ve worked with some of the world&apos;s most innovative companies and understand the challenges of modern software development.
              </p>
              <p className="text-gray-400">
                By combining cutting-edge AI technology with DevOps best practices, we&apos;re making enterprise-grade infrastructure accessible to everyone.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <Lightbulb className="h-16 w-16 text-green-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Why We Exist</h3>
              <p className="text-gray-400">
                Traditional DevOps solutions are complex, expensive, and require specialized knowledge. We&apos;re changing that by making DevOps simple, affordable, and accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-100">John Doe</h3>
              <p className="text-green-500 text-center mb-4">CEO & Co-founder</p>
              <p className="text-gray-400 text-center">
                Former DevOps lead at major tech companies with 15+ years of experience.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-100">Jane Smith</h3>
              <p className="text-green-500 text-center mb-4">CTO & Co-founder</p>
              <p className="text-gray-400 text-center">
                AI/ML expert with a passion for making technology accessible to everyone.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-100">Mike Johnson</h3>
              <p className="text-green-500 text-center mb-4">Head of Product</p>
              <p className="text-gray-400 text-center">
                Product leader with experience in building successful SaaS platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Customer First</h3>
              <p className="text-gray-400">We put our customers at the center of everything we do.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
              <Target className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Innovation</h3>
              <p className="text-gray-400">We constantly push boundaries to deliver better solutions.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
              <Award className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Excellence</h3>
              <p className="text-gray-400">We strive for excellence in everything we build.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Join Us on Our Journey</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the revolution in DevOps automation.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 