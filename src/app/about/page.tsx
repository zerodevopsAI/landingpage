import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Brain, Zap, Award, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About MonkCI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            MonkCI is on a mission to build the world&apos;s fastest CI runners. We help teams ship features up to 8× faster and cache up to 20× faster—at a fraction of the cost, with zero migration pain.
          </p>
        </div>
      </section>

      {/* Vision & Why MonkCI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-100">Why MonkCI?</h2>
              <p className="text-gray-400 text-lg mb-8">
                Legacy CI/CD tools are slow, expensive, and built for yesterday&apos;s web apps. MonkCI is purpose-built for today&apos;s AI-driven, high-velocity teams—delivering up to 8× faster builds, up to 20× faster caching, and 75% lower costs, all at GitHub pricing.
              </p>
              <p className="text-gray-400">
                We believe every developer deserves world-class speed, instant feedback, and predictable budgets—without switching off innovation.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 text-center">
              <Rocket className="h-16 w-16 text-green-500 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Edge</h3>
              <p className="text-gray-400">
                Up to 8× faster builds, up to 20× faster caching, AI-powered log insights, and instant SSH access. MonkCI is the drop-in replacement for slow, legacy CI—no migration pain, just pure speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Ujjwal</h3>
              <p className="text-green-400 mb-2">Head of Engineering & Product Strategy</p>
              <p className="text-gray-400">
                IIT-Roorkee alum, ex-EZAIX, and certified Google Cloud professional. Personally slashed Deutsche Bank&apos;s test times from 5h → 45m. Obsessed with developer speed and product excellence.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-6 flex items-center justify-center">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Nitin</h3>
              <p className="text-green-400 mb-2">CTO & Architecture</p>
              <p className="text-gray-400">
                Polyglot engineer with deep AI, infra, and development expertise (LangChain, LangGraph, FastAPI, Node, Python, Backend, Frontend). Ex-EZAIX. Committed to building the fastest, smartest CI/CD for modern teams.
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
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 text-center">
              <Zap className="h-12 w-12 text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Speed Obsessed</h3>
              <p className="text-gray-400">We believe every developer deserves the world&apos;s fastest feedback loop.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 text-center">
              <Award className="h-12 w-12 text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Relentless Innovation</h3>
              <p className="text-gray-400">We constantly push boundaries to deliver better, smarter CI/CD.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 text-center">
              <Users className="h-12 w-12 text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Customer-Driven</h3>
              <p className="text-gray-400">We put our users at the center of every decision and every feature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Ready to experience the world&apos;s fastest CI?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the MonkCI revolution. Cut build times, save money, and ship with confidence.
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