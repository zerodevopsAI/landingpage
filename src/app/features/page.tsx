import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Zap, HardDrive, Brain, Terminal, BarChart3, Cpu, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-900 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            MonkCI Features
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The world&apos;s fastest CI runners, built for modern teams. Up to 8× faster builds, up to 20× faster caching, and so much more.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-2xl border border-green-600/30 shadow-lg p-8 flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Up to 8× Faster Builds</h3>
              <p className="text-gray-400">Ship features in minutes, not hours. MonkCI&apos;s optimized runners deliver up to 8× faster build times for all your projects.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl border border-blue-600/30 shadow-lg p-8 flex flex-col items-center text-center">
              <HardDrive className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Up to 20× Faster Caching</h3>
              <p className="text-gray-400">High-IOPS NVMe cache with 20 Gbps throughput. Unlimited cache size, instant restores, and no bottlenecks.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl border border-purple-600/30 shadow-lg p-8 flex flex-col items-center text-center">
              <Brain className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">AI-Powered Log Insights</h3>
              <p className="text-gray-400">Human-readable error summaries and instant debugging. Spend less time digging through logs, more time shipping code.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl border border-pink-600/30 shadow-lg p-8 flex flex-col items-center text-center">
              <Terminal className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Instant SSH Access</h3>
              <p className="text-gray-400">One-click shell into any runner for live debugging and troubleshooting. No more waiting for support or reruns.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl border border-indigo-600/30 shadow-lg p-8 flex flex-col items-center text-center">
              <BarChart3 className="h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Real-Time Spend Dashboard</h3>
              <p className="text-gray-400">Smart alerts and live dashboards keep your team on budget. Predictable costs, no surprises.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl border border-orange-600/30 shadow-lg p-8 flex flex-col items-center text-center">
              <Cpu className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Dedicated Docker Builders</h3>
              <p className="text-gray-400">16–32 vCPU builders, shared layer cache, and up to 40× faster container builds. Built for modern, containerized apps.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl border border-teal-600/30 shadow-lg p-8 flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">GitHub Compatible</h3>
              <p className="text-gray-400">Drop-in replacement for your current CI. Same pricing, same minutes, zero migration pain.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Ready to build at lightspeed?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial and experience the world&apos;s fastest CI/CD for yourself.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
} 