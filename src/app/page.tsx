import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Shield, 
  Clock, 
  DollarSign, 
  CheckCircle,
  AlertTriangle,
  Cpu,
  HardDrive,
  Terminal,
  BarChart3,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Same GitHub Minutes — 10× More Value
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            On a mission to create<br />
            the world&apos;s fastest CI
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-6 text-blue-300 tracking-tight">
            Up to <span className="text-green-400">8× faster builds</span>, up to <span className="text-blue-400">20× faster caching</span>
          </div>
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
            Cut CI costs by up to 75% — ship features faster, keep budgets predictable, and reclaim developer time. All at GitHub pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-lg" asChild>
              <Link href="/join-waitlist">
                Join Waitlist
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <div className="text-center p-6 bg-gray-900/60 rounded-xl border border-gray-800 shadow">
              <div className="text-3xl font-extrabold text-green-400 mb-1">8×</div>
              <div className="text-gray-300 font-medium">Faster Builds</div>
              <div className="text-xs text-gray-500">Up to 8× vs legacy CI</div>
            </div>
            <div className="text-center p-6 bg-gray-900/60 rounded-xl border border-gray-800 shadow">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">20×</div>
              <div className="text-gray-300 font-medium">Faster Cache</div>
              <div className="text-xs text-gray-500">Up to 20× NVMe speed</div>
            </div>
            <div className="text-center p-6 bg-gray-900/60 rounded-xl border border-gray-800 shadow">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">75%</div>
              <div className="text-gray-300 font-medium">Lower CI Cost</div>
              <div className="text-xs text-gray-500">Per build, on average</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pain Today Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">The Pain Today</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Legacy CI systems are buckling under the weight of AI-driven products. Here&apos;s what&apos;s hurting developers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-gray-800 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold text-gray-100">Slow CI Pipelines</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Long feedback loops stall software shipping velocity and waste payroll.
              </p>
            </div>
            
            <div className="p-8 bg-gray-800 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold text-gray-100">No Built-in Log Analysis</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Debugging failed runs means digging through raw logs with no context.
              </p>
            </div>
            
            <div className="p-8 bg-gray-800 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold text-gray-100">Small & Slow Cache</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                10 GB per repo limit with slower download speeds (1 Gbps).
              </p>
            </div>
            
            <div className="p-8 bg-gray-800 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold text-gray-100">Slow Docker Builds</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Containerized apps require parallel CPU cores but get slower CPUs for builds.
              </p>
            </div>
            
            <div className="p-8 bg-gray-800 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold text-gray-100">Zero Cost Visibility</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Teams blow past budgets before Finance notices.
              </p>
            </div>
            
            <div className="p-8 bg-gray-800 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold text-gray-100">Wasted Developer Time</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The &quot;20% payroll tax&quot; of waiting for builds to complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fix Section */}
      <section id="our-fix" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">Our Fix</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              MonkCI Edge delivers the same GitHub minutes with 10× more value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-semibold text-gray-100">Up to 8× Faster CI</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                40 min → 5 min builds with faster compute at GitHub-standard pricing.
              </p>
              <div className="text-green-400 font-semibold">≈75% cost savings per build</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-100">Instant SSH & AI Log Insights</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                One-click shell access + human-readable error summaries.
              </p>
              <div className="text-blue-400 font-semibold">Debug 10× faster</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-purple-800/10 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-gray-100">20× Faster, Larger Cache</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                High-IOPS NVMe on compute nodes (20 Gbps); unlimited cache.
              </p>
              <div className="text-purple-400 font-semibold">No more cache limits</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-orange-900/20 to-orange-800/10 rounded-xl border border-orange-500/30 hover:border-orange-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-orange-400" />
                <h3 className="text-xl font-semibold text-gray-100">Dedicated Docker Builders</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                16–32 vCPU builders (up to 40× faster) with shared layer cache.
              </p>
              <div className="text-orange-400 font-semibold">Parallel container builds</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 rounded-xl border border-indigo-500/30 hover:border-indigo-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-indigo-400" />
                <h3 className="text-xl font-semibold text-gray-100">Real-time Spend Dashboard</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Smart alerts and notifications before overspend.
              </p>
              <div className="text-indigo-400 font-semibold">Predictable budgets</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-teal-900/20 to-teal-800/10 rounded-xl border border-teal-500/30 hover:border-teal-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-teal-400" />
                <h3 className="text-xl font-semibold text-gray-100">GitHub-Compatible</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Drop-in replacement with the same pricing and features.
              </p>
              <div className="text-teal-400 font-semibold">Zero migration pain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">Why Now</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The perfect storm of market forces creating unprecedented opportunity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">&quot;Spaceship vs. Car Factory&quot;</h3>
              <p className="text-gray-400 leading-relaxed">
                AI-driven products are orders of magnitude heavier than yesterday&apos;s web apps; legacy CI &quot;car factories&quot; are buckling. MonkCI is the purpose-built &quot;spaceship factory&quot;.
              </p>
            </div>
            
            <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Cost Discipline is Back</h3>
              <p className="text-gray-400 leading-relaxed">
                Boards now demand efficiency. MonkCI cuts a 40-minute build to 5 minutes, delivering ~75% cost savings without switching off innovation.
              </p>
            </div>
            
            <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Keypad → Smartphone Moment</h3>
              <p className="text-gray-400 leading-relaxed">
                Developers now expect intelligent, assistive tooling, not bare-bones pipelines. Our AI-powered logs and one-click SSH set the new bar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl p-12 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-100">Why We&apos;ll Win</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven founders, top talent, and deep commitment to the problem.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Top Talent & Proven Founders */}
              <div className="bg-gray-900 rounded-xl border border-gray-700 shadow p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mb-6 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">Top Talent & Proven Founders</h3>
                <p className="text-gray-400 leading-relaxed mb-2">
                  IIT-Roorkee classmates turned co-leaders at EZAIX: Ujjwal (Head of Engineering & product strategy) + Nitin (CTO & architecture). Trust and execution speed already battle-tested. Our best engineers are already committed to join once we&apos;re funded, and we have friendly enterprise contacts for future sales leads.
                </p>
              </div>
              {/* Deep Fit & Commitment */}
              <div className="bg-gray-900 rounded-xl border border-gray-700 shadow p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-6 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">Deep Fit & Commitment</h3>
                <p className="text-gray-400 leading-relaxed mb-2">
                  Ujjwal personally slashed Deutsche Bank&apos;s test times (5h → 45m) and is a certified Google Cloud professional. Nitin is a polyglot engineer with deep AI, infra and development expertise. We&apos;ve quit our secure jobs to focus full-time on MonkCI, giving us the speed and drive that big companies can&apos;t match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
            Ready to Ship Features up to 8× Faster?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the revolution in CI/CD. Cut costs by 75%, reclaim developer time, and keep budgets predictable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold" asChild>
              <Link href="/join-waitlist">
                Join the waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">No migration required</p>
            </div>
            <div className="text-center p-4">
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">GitHub pricing</p>
            </div>
            <div className="text-center p-4">
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Instant setup</p>
            </div>
            <div className="text-center p-4">
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">AI-powered insights</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
