import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Cloud, 
  GitBranch, 
  LineChart, 
  Shield, 
  Zap, 
  BarChart, 
  Brain, 
  Rocket
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            From Zero to DevOps Hero—Effortlessly
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automate CI/CD, scale seamlessly, monitor intelligently. Empowering startups to move fast, scale faster, and deploy effortlessly.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/contact">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
              <Link href="/contact">
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The ZeroDevOps Advantage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Why Startups Love ZeroDevOps</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-800">
              <GitBranch className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Automated CI/CD Pipelines</h3>
              <p className="text-gray-400">Deploy faster with automated, secure, and reliable pipelines.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-800">
              <Cloud className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Seamless Scalability</h3>
              <p className="text-gray-400">Instantly scale your infrastructure with zero downtime.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-800">
              <LineChart className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Smart Monitoring & Insights</h3>
              <p className="text-gray-400">Gain actionable intelligence to optimize performance and prevent issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Everything You Need, In One Place</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <GitBranch className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Continuous Integration & Delivery</h3>
              <p className="text-gray-400">Build, test, and deploy automatically, reducing manual errors.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <Cloud className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Infrastructure as Code</h3>
              <p className="text-gray-400">Manage your infrastructure reliably with code-driven deployment.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <LineChart className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Real-Time Monitoring & Alerts</h3>
              <p className="text-gray-400">Proactively detect and solve problems in real-time.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <Shield className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Intelligent Scaling</h3>
              <p className="text-gray-400">Dynamic resource allocation ensures optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations & Ecosystem */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-100">Works Seamlessly With Your Stack</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Docker', 'Kubernetes', 'AWS', 'Azure', 'GitHub', 'GitLab', 'Terraform', 'Jenkins', 'Slack'].map((tool) => (
              <div key={tool} className="p-4 bg-gray-900 rounded-lg shadow-sm border border-gray-800">
                <span className="text-gray-300 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Customer Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 text-lg">
                &quot;ZeroDevOpsAI has transformed our deployment process. What used to take days now takes minutes.&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-200">- Tech Startup CEO</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 text-lg">
                &quot;The AI-powered monitoring has saved us countless hours of debugging. It&apos;s like having an expert DevOps engineer on call 24/7.&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-200">- Enterprise CTO</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 text-lg">
                &quot;We&apos;ve reduced our infrastructure costs by 40% while improving our system&apos;s reliability.&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-200">- SaaS Company Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Results That Impress</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">90%</div>
              <p className="text-gray-400">Faster Deployment Cycles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">75%</div>
              <p className="text-gray-400">Lower Infrastructure Costs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">99.99%</div>
              <p className="text-gray-400">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">30%</div>
              <p className="text-gray-400">Increase in Developer Productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Harnessing AI and Automation</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <Brain className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">AI-driven Analysis</h3>
              <p className="text-gray-400">Predictive analysis for infrastructure needs.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <Zap className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Automatic Remediation</h3>
              <p className="text-gray-400">Automatic remediation of performance bottlenecks.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <BarChart className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Intelligent Alerting</h3>
              <p className="text-gray-400">Stay ahead of downtime with smart alerts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Ready to Automate Your Startup&apos;s Success?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your first pipeline running in minutes.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/contact">
                Get Started Free
                <Rocket className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
              <Link href="/contact">
                Talk to an Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </main>
  );
}
